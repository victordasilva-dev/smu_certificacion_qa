import { Locator, Page } from '@playwright/test';

/**
 * Componente Tabs + Carrusel de productos del Home/Landing — el objeto de la HU B2C-77.
 *
 * Es un componente, no una página: vive dentro del Home y no tiene URL propia, por eso no
 * extiende `BasePage`.
 *
 * Como el resto de los bloques del Home, **no expone clase ni `data-*` semántico** —sus clases son
 * hashes de Emotion que cambian en cada build—, así que el ancla estable es su título visible y
 * desde ahí se sube al contenedor que ya trae las tabs.
 */
export class TabsCarrusel {
  constructor(
    private readonly page: Page,
    private readonly titulo: string | RegExp = /nuestras marcas/i,
  ) {}

  get encabezado(): Locator {
    return this.page
      .locator('main')
      .getByRole('heading', { name: this.titulo })
      .locator('visible=true')
      .first();
  }

  /** El componente: el ancestro del encabezado que ya contiene la fila de tabs. */
  get root(): Locator {
    return this.encabezado.locator('xpath=ancestor::div[.//*[@role="tab"]][1]').first();
  }

  /**
   * Las tabs.
   *
   * Exponen `role=tab` y `aria-selected`, pero **no hay ningún `[role=tablist]` ni
   * `[role=tabpanel]`** en la página: un locator por tablist no encuentra nada y un `tabpanel`
   * tampoco delimita el carrusel.
   */
  get tabs(): Locator {
    return this.root.getByRole('tab');
  }

  tab(nombre: string | RegExp): Locator {
    return this.tabs.filter({ hasText: nombre }).first();
  }

  /** El enlace del encabezado. La UI lo escribe "Mostrar todo"; los TC lo llaman "Ver todos". */
  get verTodos(): Locator {
    return this.root.getByRole('link', { name: /mostrar todo|ver todos?/i }).first();
  }

  get swiper(): Locator {
    return this.root.locator('.swiper').first();
  }

  /** La barra de desplazamiento del carrusel que declara CA3. */
  get barraDeslizamiento(): Locator {
    return this.root.locator('.swiper-scrollbar');
  }

  /** Cada shelf del carrusel. Los slides son lo estable: el nombre no siempre lleva "Marca | ". */
  get shelves(): Locator {
    return this.root.locator('.swiper-slide');
  }

  /** El contenedor de la fila de tabs, que en Mobile es un scroller nativo. */
  get filaDeTabs(): Locator {
    return this.tabs.first().locator('xpath=..');
  }

  async enfocar(): Promise<this> {
    await this.encabezado.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(1000);
    await this.tabs.first().waitFor({ state: 'visible', timeout: 20000 });
    return this;
  }

  /** ¿Existe el componente en la página? Lo usan los TC que verifican que NO se renderice. */
  async existe(): Promise<boolean> {
    return (await this.encabezado.count()) > 0;
  }

  async nombresDeTabs(): Promise<string[]> {
    return (await this.tabs.allInnerTexts()).map((t) => t.trim());
  }

  /** La tab activa, según `aria-selected`. */
  async tabActiva(): Promise<string | null> {
    const activas = await this.root
      .locator('[role="tab"][aria-selected="true"]')
      .allInnerTexts();
    return activas.length ? activas[0].trim() : null;
  }

  /** Cambia de tab y espera a que el carrusel termine de rehacerse. */
  async activarTab(nombre: string | RegExp): Promise<void> {
    await this.tab(nombre).click();
    await this.page.waitForTimeout(3000);
  }

  /**
   * Los productos de la tab activa.
   *
   * El nombre se toma del texto del slide y **no del `alt` de la imagen**: las imágenes van con
   * `loading="lazy"`, así que al cambiar de tab los `alt` todavía no están y la lista sale vacía
   * como si la tab no tuviera productos. El texto del slide está desde el primer render.
   */
  async productos(): Promise<string[]> {
    return this.root.evaluate((sec) =>
      [...sec.querySelectorAll('.swiper-slide')]
        .map((s) => {
          const nombre = [...s.querySelectorAll('button, a')].find(
            (b) =>
              (b.textContent ?? '').trim() &&
              !/^agregar$/i.test((b.textContent ?? '').trim()) &&
              !/favorito/i.test(b.getAttribute('aria-label') ?? ''),
          );
          const img = s.querySelector('img') as HTMLImageElement | null;
          return (nombre?.textContent ?? img?.alt ?? '').trim();
        })
        .filter(Boolean),
    );
  }

  /**
   * Cuántas shelves caben enteras en el ancho del componente.
   *
   * `slidesPerView` es `'auto'`, así que el número no sale de un parámetro: hay que medir cuáles
   * tarjetas quedan dentro del rectángulo visible.
   */
  async shelvesVisibles(): Promise<number> {
    return this.root.evaluate((sec) => {
      const caja = sec.getBoundingClientRect();
      return [...sec.querySelectorAll('.swiper-slide')].filter((s) => {
        const r = s.getBoundingClientRect();
        return r.width > 0 && r.left >= caja.left - 2 && r.right <= caja.right + 2;
      }).length;
    });
  }

  /**
   * Los parámetros que el propio Swiper declara.
   *
   * El elemento `.swiper` expone su instancia en `el.swiper`, así que el intervalo de autoplay se
   * lee de la configuración en vez de cronometrarse. Cronometrar el `transform` mide 3 s de espera
   * **más** la transición, y convierte un valor exacto en una medición con margen.
   */
  async configuracionDelCarrusel(): Promise<{
    autoplayActivo: boolean;
    autoplayDelayMs: number | null;
    slidesPerView: string | number | null;
    indiceActivo: number | null;
  }> {
    return this.swiper.evaluate((el) => {
      const sw = (el as HTMLElement & { swiper?: any }).swiper;
      if (!sw) {
        return {
          autoplayActivo: false,
          autoplayDelayMs: null,
          slidesPerView: null,
          indiceActivo: null,
        };
      }
      return {
        autoplayActivo: Boolean(sw.autoplay?.running),
        autoplayDelayMs: sw.params?.autoplay?.delay ?? null,
        slidesPerView: sw.params?.slidesPerView ?? null,
        indiceActivo: sw.activeIndex ?? null,
      };
    });
  }

  /** El desplazamiento actual del carrusel: el Swiper mueve por transform, no por scrollLeft. */
  async desplazamientoDelCarrusel(): Promise<number> {
    return this.root.evaluate((sec) => {
      const wrap = sec.querySelector('.swiper-wrapper');
      if (!wrap) return 0;
      const m = getComputedStyle(wrap).transform;
      const match = m.match(/matrix\([^)]*?,\s*([-\d.]+),\s*[-\d.]+\)$/);
      return match ? Math.round(Number(match[1])) : 0;
    });
  }

  /**
   * Detiene el autoplay.
   *
   * Es una **ayuda de automatización, no parte del caso**: Playwright exige que un elemento esté
   * quieto antes de clicarlo y la tarjeta nunca lo está, así que el clic agota su timeout con el
   * elemento reportado como "visible, enabled and stable". `pauseOnMouseEnter` viene en `false`,
   * de modo que acercar el mouse tampoco lo frena. Detenerlo no cambia lo que el TC verifica —la
   * redirección al pulsar una shelf—, solo hace el clic determinista.
   */
  async detenerAutoplay(): Promise<void> {
    await this.swiper.evaluate((el) => {
      (el as HTMLElement & { swiper?: any }).swiper?.autoplay?.stop();
    });
    await this.page.waitForTimeout(600);
  }

  /**
   * Arrastra el carrusel con el puntero.
   *
   * El Swiper trae `simulateTouch`, así que un arrastre real de mouse lo desplaza igual que un
   * dedo. Va por la tubería de input del navegador —a diferencia de un `dispatchEvent`, que estos
   * componentes ignoran—, por eso es un gesto y no una simulación desde el DOM.
   */
  async arrastrarCarrusel(): Promise<void> {
    const caja = await this.swiper.boundingBox();
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

  /** Estado del carril de tabs: en Mobile es un scroller nativo con overflow horizontal. */
  async carrilDeTabs(): Promise<{
    desplazable: boolean;
    scrollLeft: number;
    ancho: number;
    visible: number;
  }> {
    return this.filaDeTabs.evaluate((cont) => ({
      desplazable: cont.scrollWidth > cont.clientWidth + 4,
      scrollLeft: Math.round(cont.scrollLeft),
      ancho: cont.scrollWidth,
      visible: cont.clientWidth,
    }));
  }

  /**
   * Desplaza la fila de tabs con la rueda horizontal.
   *
   * La fila es un scroller nativo, que solo se mueve con input real: un `touchmove` fabricado
   * desde la página no lo toca. `mouse.wheel` con delta en X sí, porque entra por la tubería de
   * input del navegador igual que lo haría el dedo en un dispositivo.
   */
  async desplazarFilaDeTabs(px = 400): Promise<void> {
    const caja = await this.filaDeTabs.boundingBox();
    if (!caja) throw new Error('La fila de tabs no tiene caja visible');
    await this.page.mouse.move(caja.x + caja.width / 2, caja.y + caja.height / 2);
    await this.page.mouse.wheel(px, 0);
    await this.page.waitForTimeout(1200);
  }

  /** Los nombres de las tabs que caben enteras en el carril, para ver qué destapa el scroll. */
  async tabsVisibles(): Promise<string[]> {
    return this.filaDeTabs.evaluate((cont) => {
      const caja = cont.getBoundingClientRect();
      return [...cont.querySelectorAll('[role="tab"]')]
        .filter((t) => {
          const r = t.getBoundingClientRect();
          return r.left >= caja.left - 2 && r.right <= caja.right + 2;
        })
        .map((t) => (t.textContent ?? '').trim());
    });
  }

  /** Geometría del fondo y alineación del contenido contra el Header, para CA1. */
  async fondoYAlineacion(): Promise<{
    fondo: string;
    fondoX: number;
    fondoAncho: number;
    fondoPaddingLateral: string;
    viewport: number;
    tituloX: number;
    tabsX: number;
    carruselX: number;
  }> {
    return this.root.evaluate((sec) => {
      // El fondo no está en el contenedor del componente —que es transparente— sino en un
      // ancestro: se sube hasta el primero que declare un color de fondo real.
      let fondo: HTMLElement = sec as HTMLElement;
      for (let i = 0; i < 4 && fondo.parentElement; i++) {
        if (getComputedStyle(fondo).backgroundColor !== 'rgba(0, 0, 0, 0)') break;
        fondo = fondo.parentElement;
      }
      const cs = getComputedStyle(fondo);
      const rf = fondo.getBoundingClientRect();
      const x = (el: Element | null) => (el ? Math.round(el.getBoundingClientRect().left) : -1);
      return {
        fondo: cs.backgroundColor,
        fondoX: Math.round(rf.left),
        fondoAncho: Math.round(rf.width),
        fondoPaddingLateral: cs.paddingLeft,
        // El ancho de referencia es el del área de contenido, no `window.innerWidth`: ese incluye
        // la barra de scroll vertical y deja al fondo 15 px cortos de un ancho que en pantalla sí
        // llega de borde a borde.
        viewport: document.documentElement.clientWidth,
        tituloX: x(sec.querySelector('h1, h2, h3')),
        tabsX: x(sec.querySelector('[role="tab"]')),
        carruselX: x(sec.querySelector('.swiper')),
      };
    });
  }

  /** Dónde empieza el contenido del Header, que es la referencia de alineación de CA1. */
  async inicioDelContenidoDelHeader(): Promise<number> {
    return this.page.evaluate(() => {
      const header = document.querySelector('header');
      const logo = header?.querySelector('button[aria-label="Unimarc"]');
      return logo ? Math.round(logo.getBoundingClientRect().left) : -1;
    });
  }

  /** La URL de la imagen de una shelf, para poder forzar su error de carga con `page.route`. */
  async urlDeImagen(indice = 0): Promise<string> {
    const src = await this.shelves.nth(indice).locator('img').first().getAttribute('src');
    if (!src) throw new Error(`La shelf ${indice} no expone imagen`);
    return src;
  }

  /**
   * Estado visual de cada shelf: si su imagen cargó y si conserva nombre, precio y acción.
   *
   * Devuelve `nombre` además de `alt` porque **al fallar la carga el componente quita el `<img>`
   * del slide**, y con él desaparece el `alt`: cruzar shelves por el alt deja de funcionar justo
   * en el caso que interesa. El nombre lo da el botón del producto, que sigue ahí.
   */
  async estadoDeLasShelves(): Promise<
    {
      nombre: string;
      alt: string;
      hayImagen: boolean;
      imagenCargada: boolean;
      tieneNombre: boolean;
      tienePrecio: boolean;
      tieneAgregar: boolean;
    }[]
  > {
    return this.root.evaluate((sec) =>
      [...sec.querySelectorAll('.swiper-slide')].map((s) => {
        const img = s.querySelector('img') as HTMLImageElement | null;
        const texto = (s.textContent ?? '').trim();
        // En Desktop el nombre es un botón; en Mobile, un enlace a la PDP.
        const botonNombre = [...s.querySelectorAll('button, a')].find(
          (b) =>
            (b.textContent ?? '').trim() &&
            !/^agregar$/i.test((b.textContent ?? '').trim()) &&
            !/favorito/i.test(b.getAttribute('aria-label') ?? ''),
        );
        return {
          nombre: (botonNombre?.textContent ?? '').trim(),
          alt: img?.alt?.trim() ?? '',
          hayImagen: Boolean(img),
          imagenCargada: Boolean(img && img.complete && img.naturalWidth > 0),
          tieneNombre: texto.length > 0,
          tienePrecio: /\$\s?[\d.]+/.test(texto),
          tieneAgregar: [...s.querySelectorAll('button')].some((b) =>
            /^agregar$/i.test((b.textContent ?? '').trim()),
          ),
        };
      }),
    );
  }

  /**
   * Lo que la shelf muestra en lugar de la imagen cuando esta no carga.
   *
   * Al fallar la petición **el `<img>` desaparece del slide**, así que un locator de imagen deja de
   * resolver y una aserción sobre su alto se queda esperando para siempre. Lo que hay que mirar es
   * qué ocupa su lugar.
   */
  async estadoDeImagenDe(indice = 0): Promise<{
    hayImg: boolean;
    alto: number;
    texto: string;
    svgs: number;
    html: string;
  }> {
    return this.shelves.nth(indice).evaluate((s) => {
      const img = s.querySelector('img');
      const hueco = (s.querySelector('button, a') ?? s) as HTMLElement;
      return {
        hayImg: Boolean(img),
        alto: Math.round((img ?? hueco).getBoundingClientRect().height),
        texto: (s.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 160),
        svgs: s.querySelectorAll('svg').length,
        html: hueco.outerHTML.slice(0, 500),
      };
    });
  }

  /**
   * El índice del primer slide que está realmente dentro de la pantalla.
   *
   * El Swiper deja el primer slide **desplazado fuera del viewport** —su centro llega a estar en
   * x negativo—, así que clicar `nth(0)` no es clicar la primera tarjeta que el usuario ve: es
   * pedirle a Playwright que apunte a un punto que no existe en pantalla, y el intento se reintenta
   * hasta agotar el timeout informando que un ancestro "intercepts pointer events". Ese mensaje
   * despista: no hay ningún overlay, el punto simplemente está fuera.
   */
  async indiceDeShelfVisible(): Promise<number> {
    return this.root.evaluate((sec) => {
      const slides = [...sec.querySelectorAll('.swiper-slide')];
      const idx = slides.findIndex((s) => {
        const r = s.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        return (
          r.width > 0 && cx > 0 && cx < window.innerWidth && cy > 0 && cy < window.innerHeight
        );
      });
      return idx === -1 ? 0 : idx;
    });
  }

  /**
   * Abre la PDP de una shelf.
   *
   * Tres cuidados que la corrida obligó a tomar: **detener el autoplay** (si no, Playwright nunca
   * da la tarjeta por quieta), clicar **el botón que envuelve la imagen** en vez del `<img>`, y
   * elegir una tarjeta que esté dentro de la pantalla — ver `indiceDeShelfVisible`.
   */
  async abrirShelf(indice?: number): Promise<string> {
    await this.detenerAutoplay();
    const i = indice ?? (await this.indiceDeShelfVisible());
    const slide = this.shelves.nth(i);
    await slide.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500);
    const nombre = (await this.productos())[i] ?? '';
    // Desktop envuelve la imagen en un botón; Mobile, en un enlace a la PDP.
    const botonImagen = slide.locator(':is(button, a):has(img)').first();
    const objetivo = (await botonImagen.count()) ? botonImagen : slide.getByRole('button').first();
    await objetivo.click();
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000);
    return nombre;
  }
}
