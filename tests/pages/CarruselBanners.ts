import { Locator, Page } from '@playwright/test';

/** Lo que el POM mide de cada banner, para que el `test()` decida sobre números. */
export interface Banner {
  alt: string;
  href: string | null;
  ancho: number;
  alto: number;
  /** ¿Cabe entero dentro del carril visible? */
  entero: boolean;
  /** ¿Asoma aunque sea en parte? Es lo que distingue "1 + parcial" de "1 solo". */
  asoma: boolean;
  /**
   * Qué fracción del banner cae dentro del carril, de 0 a 1.
   *
   * Hace falta porque `entero` es demasiado estricto para responder "¿cuántos banners se ven a la
   * vez?": cuando la página tiene barra de scroll vertical, el carril pierde ~15 px y el último
   * banner queda recortado un 5 %, con lo que un carrusel que muestra cuatro se cuenta como que
   * muestra tres. El recorte es un detalle de renderizado del navegador, no lo que el caso mide.
   */
  visible: number;
  imagenCargada: boolean;
}

/**
 * Carrusel de Banners del Home/Landing — el objeto de la HU B2C-79.
 *
 * Componente, no página: vive dentro del Home y no tiene URL propia, por eso no extiende
 * `BasePage`.
 *
 * **Se identifica por lo que no tiene.** El Home monta ocho Swipers y las clases son hashes de
 * Emotion que cambian en cada build, así que lo estable es que un carrusel de banners es el que
 * *no* trae ningún slide con botón "Agregar" — los de producto sí. El índice elige cuál de los
 * dos que hay (0 = la variante full-width de arriba, 1 = la de banners altos con título).
 */
export class CarruselBanners {
  constructor(
    private readonly page: Page,
    private readonly indice = 0,
  ) {}

  /** Todos los Swipers del main, sin filtrar. El filtro de banners se aplica dentro del POM. */
  private get swipers(): Locator {
    return this.page.locator('main .swiper');
  }

  /**
   * El carrusel de banners de este índice.
   *
   * Playwright no puede filtrar "sin botón Agregar" con `hasNotText` de forma fiable —el texto
   * "Agregar" aparece en los slides de producto pero el filtro es por subárbol—, así que el
   * índice real se resuelve en el DOM y se marca con un atributo para poder apuntarle después.
   */
  get root(): Locator {
    return this.page.locator(`[data-qa-banners="${this.indice}"]`);
  }

  /**
   * Marca los carruseles de banners en el DOM y devuelve cuántos hay.
   *
   * El marcado es de automatización y no cambia nada de lo que el caso verifica: solo da un
   * ancla estable a un componente que no expone ninguna.
   */
  async localizar(): Promise<number> {
    return this.page.evaluate(() => {
      const main = document.querySelector('main');
      if (!main) return 0;
      const banners = [...main.querySelectorAll('.swiper')].filter(
        (s) =>
          ![...s.querySelectorAll('button')].some(
            (b) => /^agregar$/i.test((b.textContent ?? '').trim()),
          ),
      );
      banners.forEach((s, i) => s.setAttribute('data-qa-banners', String(i)));
      return banners.length;
    });
  }

  get slides(): Locator {
    return this.root.locator('.swiper-slide');
  }

  get botonSiguiente(): Locator {
    return this.root.locator('xpath=..').getByRole('button', { name: /siguiente|next/i }).first();
  }

  get botonAnterior(): Locator {
    return this.root.locator('xpath=..').getByRole('button', { name: /anterior|prev/i }).first();
  }

  get slideBar(): Locator {
    return this.root.locator('.swiper-scrollbar');
  }

  /** Los indicadores (dots). En este ambiente ninguna variante los renderiza. */
  get indicadores(): Locator {
    return this.root.locator('.swiper-pagination');
  }

  /** El bloque que envuelve al carrusel, donde viven el título y el enlace "Mostrar todo". */
  get contenedor(): Locator {
    return this.root.locator(
      'xpath=ancestor::div[.//a[contains(translate(., "MOSTRAR", "mostrar"), "ostrar todo")]][1]',
    );
  }

  get titulo(): Locator {
    return this.contenedor.locator('h1, h2, h3').first();
  }

  get mostrarTodo(): Locator {
    return this.contenedor.getByRole('link', { name: /mostrar todo|ver todos?/i }).first();
  }

  async enfocar(): Promise<this> {
    await this.root.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(1000);
    await this.slides.first().waitFor({ state: 'visible', timeout: 20000 });
    return this;
  }

  /**
   * Detiene el autoplay.
   *
   * Hace falta antes de medir y antes de clicar: con el carrusel en movimiento las medidas se
   * toman a mitad de transición —salen cero banners enteros donde hay uno— y Playwright nunca da
   * la tarjeta por quieta para pulsarla.
   */
  async detenerAutoplay(): Promise<void> {
    await this.root.evaluate((el) => {
      (el as HTMLElement & { swiper?: any }).swiper?.autoplay?.stop();
    });
    await this.page.waitForTimeout(800);
  }

  /** La configuración que el propio Swiper declara, sin cronometrar nada. */
  async configuracion(): Promise<{
    autoplayActivo: boolean;
    autoplayDelayMs: number | null;
    indiceActivo: number | null;
  }> {
    return this.root.evaluate((el) => {
      const sw = (el as HTMLElement & { swiper?: any }).swiper;
      if (!sw) return { autoplayActivo: false, autoplayDelayMs: null, indiceActivo: null };
      const delay = sw.params?.autoplay?.delay;
      return {
        autoplayActivo: Boolean(sw.autoplay?.running),
        autoplayDelayMs: typeof delay === 'number' ? delay : null,
        indiceActivo: sw.activeIndex ?? null,
      };
    });
  }

  /**
   * Los banners con su medida y su visibilidad.
   *
   * `entero` y `asoma` son dos preguntas distintas y las dos hacen falta: la variante full-width
   * muestra un banner entero y ninguno más, mientras que la de banners altos en Mobile muestra uno
   * entero **y el siguiente asomando**, que es justo lo que su caso verifica.
   */
  async banners(): Promise<Banner[]> {
    return this.root.evaluate((carril) => {
      const caja = carril.getBoundingClientRect();
      return [...carril.querySelectorAll('.swiper-slide')].map((s) => {
        const r = s.getBoundingClientRect();
        const img = s.querySelector('img') as HTMLImageElement | null;
        const a = s.querySelector('a');
        return {
          alt: img?.alt?.trim() ?? '',
          href: a?.getAttribute('href') ?? null,
          ancho: Math.round(r.width),
          alto: Math.round(r.height),
          entero: r.width > 0 && r.left >= caja.left - 2 && r.right <= caja.right + 2,
          asoma: r.width > 0 && r.right > caja.left + 2 && r.left < caja.right - 2,
          visible:
            r.width > 0
              ? Math.max(0, Math.min(r.right, caja.right) - Math.max(r.left, caja.left)) / r.width
              : 0,
          imagenCargada: Boolean(img && img.complete && img.naturalWidth > 0),
        };
      });
    });
  }

  /** Geometría del carril: ancho y dónde arranca, para medir el padding lateral. */
  async geometria(): Promise<{ x: number; ancho: number; viewport: number }> {
    return this.root.evaluate((carril) => {
      const r = carril.getBoundingClientRect();
      return {
        x: Math.round(r.left),
        ancho: Math.round(r.width),
        viewport: document.documentElement.clientWidth,
      };
    });
  }

  /** Pulsa el control de avance y espera a que el carrusel se asiente. */
  async avanzarConControl(): Promise<void> {
    await this.botonSiguiente.click();
    await this.page.waitForTimeout(1500);
  }

  /** Arrastra el carrusel con el puntero: el Swiper trae `simulateTouch`, así que responde. */
  async arrastrar(): Promise<void> {
    const caja = await this.root.boundingBox();
    if (!caja) throw new Error('El carrusel no tiene caja visible para arrastrar');
    const y = caja.y + caja.height / 2;
    const desde = caja.x + caja.width * 0.8;
    const hasta = caja.x + caja.width * 0.15;
    await this.page.mouse.move(desde, y);
    await this.page.mouse.down();
    for (let i = 1; i <= 6; i++) {
      await this.page.mouse.move(desde + ((hasta - desde) * i) / 6, y, { steps: 2 });
      await this.page.waitForTimeout(40);
    }
    await this.page.mouse.up();
    await this.page.waitForTimeout(1500);
  }

  /** El índice del primer banner que está dentro de la pantalla, para poder clicarlo. */
  async indiceDeBannerVisible(): Promise<number> {
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

  /** Abre el banner indicado. Detiene antes el autoplay, o el clic no encuentra el banner quieto. */
  async abrirBanner(indice?: number): Promise<{ alt: string; href: string | null }> {
    await this.detenerAutoplay();
    const i = indice ?? (await this.indiceDeBannerVisible());
    const datos = (await this.banners())[i];
    await this.slides.nth(i).locator('a').first().click();
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000);
    return { alt: datos.alt, href: datos.href };
  }

  /** La URL de la imagen de un banner, para poder forzar su error de carga con `page.route`. */
  async urlDeImagen(indice = 0): Promise<string> {
    const src = await this.slides.nth(indice).locator('img').first().getAttribute('src');
    if (!src) throw new Error(`El banner ${indice} no expone imagen`);
    return src;
  }

  /** Lo que la tarjeta muestra donde iba la imagen, cuando esta no carga. */
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
