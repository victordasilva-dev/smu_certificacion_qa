import { Locator, Page } from '@playwright/test';

/** Lo que el POM mide de cada item del slider, para que el `test()` decida sobre números. */
export interface ItemT7 {
  alt: string;
  href: string | null;
  titulo: string;
  /** Distancia en px entre el borde inferior de la imagen y el borde superior del título. */
  tituloDebajoPx: number | null;
  anchoImagen: number;
  altoImagen: number;
  /** ¿Cabe entero dentro del carril visible? */
  entero: boolean;
  /** ¿Asoma aunque sea en parte? Es lo que distingue "1 + parcial" de "1 solo". */
  asoma: boolean;
  imagenCargada: boolean;
}

/**
 * Slider de Banners con Título — la variante **T7** del carrusel de banners, objeto de la HU
 * B2C-82.
 *
 * Componente, no página: vive dentro del Home y no tiene URL propia, por eso no extiende
 * `BasePage`.
 *
 * **Lo que lo distingue de las otras variantes es el título por item.** T1 y T4 —las que cubre
 * `CarruselBanners`— muestran banners con la leyenda dentro de la propia imagen; en T7 cada item
 * lleva su título como texto real *debajo* de la imagen. Ese es el rasgo que se busca en el DOM,
 * porque las clases del Home son hashes de Emotion que cambian en cada build y el Home monta ocho
 * Swipers.
 */
export class SliderBannersTitulo {
  constructor(private readonly page: Page) {}

  /** Ancla estable para el componente, puesta por `localizar()`. */
  get root(): Locator {
    return this.page.locator('[data-qa-t7="1"]');
  }

  /**
   * Marca el slider T7 en el DOM y devuelve cuántos candidatos hubo.
   *
   * El marcado es de automatización y no cambia nada de lo que el caso verifica: solo da un ancla
   * estable a un componente que no expone ninguna.
   *
   * La firma de T7: un Swiper sin ningún botón "Agregar" —eso descarta los seis carruseles de
   * producto— cuyos slides traen, dentro del mismo `<a>`, una imagen **y** un párrafo de texto
   * propio. Los banners de T1 y T4 no tienen ese párrafo.
   */
  async localizar(): Promise<number> {
    return this.page.evaluate(() => {
      const main = document.querySelector('main');
      if (!main) return 0;
      const candidatos = [...main.querySelectorAll('.swiper')].filter((s) => {
        const producto = [...s.querySelectorAll('button')].some((b) =>
          /^agregar$/i.test((b.textContent ?? '').trim()),
        );
        if (producto) return false;
        const enlaces = [...s.querySelectorAll('a')].filter((a) => a.querySelector('img'));
        if (enlaces.length < 2) return false;
        return enlaces.every((a) =>
          [...a.querySelectorAll('p')].some(
            (p) => p.children.length === 0 && (p.textContent ?? '').trim().length > 0,
          ),
        );
      });
      candidatos.forEach((s) => s.setAttribute('data-qa-t7', '1'));
      return candidatos.length;
    });
  }

  get slides(): Locator {
    return this.root.locator('.swiper-slide');
  }

  /** El bloque que envuelve al slider, donde viven el pretítulo, el texto y "Mostrar todo". */
  get contenedor(): Locator {
    return this.root.locator(
      'xpath=ancestor::div[.//a[contains(translate(., "MOSTRAR", "mostrar"), "ostrar todo")]][1]',
    );
  }

  get pretitulo(): Locator {
    return this.contenedor.locator('h1, h2, h3').first();
  }

  get mostrarTodo(): Locator {
    return this.contenedor.getByRole('link', { name: /mostrar todo|ver todos?/i }).first();
  }

  get botonSiguiente(): Locator {
    return this.contenedor.getByRole('button', { name: /siguiente|next/i }).first();
  }

  get botonAnterior(): Locator {
    return this.contenedor.getByRole('button', { name: /anterior|prev/i }).first();
  }

  get slideBar(): Locator {
    return this.root.locator('.swiper-scrollbar');
  }

  async enfocar(): Promise<this> {
    await this.root.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(1000);
    await this.slides.first().waitFor({ state: 'visible', timeout: 20000 });
    return this;
  }

  /**
   * El encabezado del componente, tal como lo ve el usuario.
   *
   * `textoSeccion` es el párrafo descriptivo que va bajo el pretítulo; se busca fuera de los
   * items para no confundirlo con el título de un banner.
   */
  async encabezado(): Promise<{
    pretitulo: string;
    textoSeccion: string;
    mostrarTodoTexto: string;
    mostrarTodoHref: string | null;
    /** ¿El enlace "Mostrar todo" queda en la mitad derecha del encabezado? */
    mostrarTodoAlaDerecha: boolean;
  }> {
    return this.contenedor.evaluate((caja) => {
      const slider = caja.querySelector('[data-qa-t7="1"]');
      const h = caja.querySelector('h1, h2, h3');
      const textos = [...caja.querySelectorAll('p')].filter(
        (p) =>
          p.children.length === 0 &&
          (p.textContent ?? '').trim().length > 0 &&
          !slider?.contains(p),
      );
      const enlace = [...caja.querySelectorAll('a')].find((a) =>
        /mostrar todo|ver todos?/i.test((a.textContent ?? '').trim()),
      );
      const rc = caja.getBoundingClientRect();
      const re = enlace?.getBoundingClientRect();
      return {
        pretitulo: (h?.textContent ?? '').trim(),
        textoSeccion: (textos[0]?.textContent ?? '').trim(),
        mostrarTodoTexto: (enlace?.textContent ?? '').trim(),
        mostrarTodoHref: enlace?.getAttribute('href') ?? null,
        mostrarTodoAlaDerecha: Boolean(re && re.left > rc.left + rc.width / 2),
      };
    });
  }

  /**
   * Los items con su medida y su visibilidad.
   *
   * `entero` y `asoma` son dos preguntas distintas y las dos hacen falta: los casos de
   * presentación piden "N items visibles **+ parcial**", que es exactamente la diferencia entre
   * las dos.
   */
  async items(): Promise<ItemT7[]> {
    return this.root.evaluate((carril) => {
      const caja = carril.getBoundingClientRect();
      return [...carril.querySelectorAll('.swiper-slide')].map((s) => {
        const r = s.getBoundingClientRect();
        const img = s.querySelector('img') as HTMLImageElement | null;
        const a = s.querySelector('a');
        const ri = img?.getBoundingClientRect();
        const p = [...s.querySelectorAll('p')].find(
          (x) => x.children.length === 0 && (x.textContent ?? '').trim().length > 0,
        );
        const rp = p?.getBoundingClientRect();
        return {
          alt: img?.alt?.trim() ?? '',
          href: a?.getAttribute('href') ?? null,
          titulo: (p?.textContent ?? '').trim(),
          tituloDebajoPx: ri && rp ? Math.round(rp.top - ri.bottom) : null,
          anchoImagen: Math.round(ri?.width ?? 0),
          altoImagen: Math.round(ri?.height ?? 0),
          entero: r.width > 0 && r.left >= caja.left - 2 && r.right <= caja.right + 2,
          asoma: r.width > 0 && r.right > caja.left + 2 && r.left < caja.right - 2,
          imagenCargada: Boolean(img && img.complete && img.naturalWidth > 0),
        };
      });
    });
  }

  /**
   * Cuánto contenido tiene el carril frente a cuánto se ve.
   *
   * Es lo que decide si el slider **puede** desplazarse: si `desbordable` es falso, los controles
   * no tienen nada que mover y los casos de deslizamiento no tienen precondición.
   */
  async capacidad(): Promise<{
    anchoCarril: number;
    anchoContenido: number;
    desbordable: boolean;
    slides: number;
    enElInicio: boolean | null;
    enElFinal: boolean | null;
    indiceActivo: number | null;
    translate: number | null;
  }> {
    return this.root.evaluate((el) => {
      const sw = (el as HTMLElement & { swiper?: any }).swiper;
      const wrapper = el.querySelector('.swiper-wrapper');
      const contenido = wrapper?.scrollWidth ?? el.scrollWidth;
      return {
        anchoCarril: Math.round(el.clientWidth),
        anchoContenido: Math.round(contenido),
        desbordable: contenido > el.clientWidth + 2,
        slides: el.querySelectorAll('.swiper-slide').length,
        enElInicio: sw ? Boolean(sw.isBeginning) : null,
        enElFinal: sw ? Boolean(sw.isEnd) : null,
        indiceActivo: sw?.activeIndex ?? null,
        translate: sw ? Math.round(sw.translate) : null,
      };
    });
  }

  /** Estado de los dos controles laterales. Un control deshabilitado no puede mover nada. */
  async controles(): Promise<{
    anterior: boolean | null;
    siguiente: boolean | null;
    hayBarra: boolean;
  }> {
    return this.contenedor.evaluate((caja) => {
      const busca = (re: RegExp) =>
        [...caja.querySelectorAll('button')].find((b) =>
          re.test(b.getAttribute('aria-label') ?? ''),
        );
      const prev = busca(/anterior|prev/i) as HTMLButtonElement | undefined;
      const next = busca(/siguiente|next/i) as HTMLButtonElement | undefined;
      return {
        anterior: prev ? !prev.disabled : null,
        siguiente: next ? !next.disabled : null,
        hayBarra: Boolean(caja.querySelector('.swiper-scrollbar')),
      };
    });
  }

  /** Arrastra el carril con el puntero: el Swiper trae `simulateTouch`, así que responde. */
  async arrastrar(): Promise<void> {
    const caja = await this.root.boundingBox();
    if (!caja) throw new Error('El slider no tiene caja visible para arrastrar');
    const y = caja.y + caja.height / 3;
    const desde = caja.x + caja.width * 0.8;
    const hasta = caja.x + caja.width * 0.1;
    await this.page.mouse.move(desde, y);
    await this.page.mouse.down();
    for (let i = 1; i <= 8; i++) {
      await this.page.mouse.move(desde + ((hasta - desde) * i) / 8, y, { steps: 2 });
      await this.page.waitForTimeout(40);
    }
    await this.page.mouse.up();
    await this.page.waitForTimeout(1500);
  }

  /** El índice del primer item que está dentro de la pantalla, para poder pulsarlo. */
  async indiceDeItemVisible(): Promise<number> {
    return this.root.evaluate((carril) => {
      const slides = [...carril.querySelectorAll('.swiper-slide')];
      const i = slides.findIndex((s) => {
        const r = s.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        return r.width > 0 && cx > 0 && cx < window.innerWidth && cy > 0 && cy < window.innerHeight;
      });
      return i === -1 ? 0 : i;
    });
  }

  /** El título de un item, como elemento pulsable — el caso permite clicar imagen *o* título. */
  tituloDe(indice: number): Locator {
    return this.slides.nth(indice).locator('a p').first();
  }

  imagenDe(indice: number): Locator {
    return this.slides.nth(indice).locator('img').first();
  }

  /** La URL de la imagen de un item, para poder forzar su error de carga con `page.route`. */
  async urlDeImagen(indice = 0): Promise<string> {
    const src = await this.imagenDe(indice).getAttribute('src');
    if (!src) throw new Error(`El item ${indice} no expone imagen`);
    return src;
  }

  /**
   * Lo que la tarjeta muestra donde iba la imagen, cuando esta no carga.
   *
   * Se mide **por posición** y no por el nombre del item: cuando la imagen falla, el componente
   * puede reemplazar la tarjeta entera por su estado de error, y con ella desaparecen el `alt` y
   * el título por los que se la habría buscado.
   */
  async estadoDeImagenDe(indice = 0): Promise<{ hayImg: boolean; alto: number; texto: string }> {
    return this.slides.nth(indice).evaluate((s) => {
      const img = s.querySelector('img');
      return {
        hayImg: Boolean(img),
        alto: Math.round(((img ?? s) as Element).getBoundingClientRect().height),
        texto: (s.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 160),
      };
    });
  }
}
