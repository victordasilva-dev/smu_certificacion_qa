import { Locator, Page } from '@playwright/test';

/** Caja de un elemento en coordenadas de página, redondeada. */
export interface Caja {
  x: number;
  y: number;
  ancho: number;
  alto: number;
  derecha: number;
  abajo: number;
}

/** Lo que el POM mide del componente, para que el `test()` decida sobre números. */
export interface GeometriaCarrusel {
  viewport: number;
  componente: Caja;
  /** Caja del TEXTO del título (no del `h`, que puede ocupar toda la fila). */
  titulo: Caja | null;
  carrusel: Caja;
  banner: Caja | null;
  mostrarTodo: Caja | null;
  /** Productos con al menos la mitad de su shelf dentro del carrusel. */
  itemsVisibles: number;
  /** Productos con la shelf entera dentro del carrusel. */
  itemsCompletos: number;
  /** Color de fondo que pinta el bloque (primer fondo no transparente dentro del componente). */
  fondo: { color: string; x: number; ancho: number } | null;
}

/**
 * Carrusel de productos del Home/Landing — el objeto de la HU B2C-75 (variantes T1, T2 y T3).
 *
 * Componente, no página: vive dentro del Home y no tiene URL propia, por eso no extiende
 * `BasePage`.
 *
 * **Se localiza por el id que le da Page Designer** (`hp-pc-frescura`, `hp-pc-masvendidos`…):
 * este componente no publica `data-variant`, así que la variante se atribuye por su disposición
 * —banner lateral con carrusel a la derecha es T1; título centrado sobre 5 items es T3— y eso
 * queda documentado en el knowledge (`home-carrusel-productos`).
 *
 * El carrusel es un Swiper con autoplay de 3 s: toda medición espera a que el carril esté quieto,
 * o se leen los items a mitad de transición.
 */
export class CarruselProductos {
  constructor(
    private readonly page: Page,
    readonly componenteId: string,
  ) {}

  get root(): Locator {
    return this.page.locator(`div.component#${this.componenteId}`);
  }

  get titulo(): Locator {
    return this.root.locator('h1, h2, h3, h4').locator('visible=true').first();
  }

  get carrusel(): Locator {
    return this.root.locator('.swiper').locator('visible=true').first();
  }

  get carril(): Locator {
    return this.carrusel.locator('.swiper-wrapper').first();
  }

  get shelves(): Locator {
    return this.carrusel.locator('.swiper-slide');
  }

  /** El banner del componente: el enlace con imagen que no pertenece al carrusel. */
  get banner(): Locator {
    return this.root.locator('a[href]:has(img):not(.swiper *)').locator('visible=true').first();
  }

  get mostrarTodo(): Locator {
    return this.root.getByRole('link', { name: /mostrar todo/i }).locator('visible=true').first();
  }

  get botonSiguiente(): Locator {
    return this.root.getByRole('button', { name: 'Siguiente' }).locator('visible=true').first();
  }

  /** La shelf del producto de ese SKU, localizada por el enlace a su PDP. */
  shelfDe(sku: string): Locator {
    return this.shelves.filter({ has: this.page.locator(`a[href*="${sku}"]`) }).first();
  }

  // ------------------------------------------------------------- acciones

  /** Lleva el componente al centro de la pantalla. */
  async enfocar(): Promise<void> {
    await this.root.scrollIntoViewIfNeeded();
    await this.root.evaluate((el) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(800);
  }

  /** Detiene el autoplay: sin eso, un clic sobre una shelf puede caer en la de al lado. */
  async detenerAutoplay(): Promise<void> {
    await this.carrusel.evaluate((el) => (el as HTMLElement & { swiper?: any }).swiper?.autoplay?.stop());
    await this.page.waitForTimeout(600);
  }

  /** Desplazamiento horizontal actual del carril, en px. */
  async desplazamiento(): Promise<number> {
    return this.carril.evaluate((el) => new DOMMatrixReadOnly(getComputedStyle(el).transform).m41);
  }

  /** Espera a que el carril deje de moverse (el autoplay lo desplaza cada 3 s). */
  async esperarQuieto(): Promise<void> {
    let previo = await this.desplazamiento();
    for (let i = 0; i < 20; i++) {
      await this.page.waitForTimeout(150);
      const actual = await this.desplazamiento();
      if (actual === previo) return;
      previo = actual;
    }
  }

  async clicSiguiente(): Promise<void> {
    await this.botonSiguiente.click();
    await this.page.waitForTimeout(800);
  }

  /** Arrastra el carrusel de derecha a izquierda, como un dedo que desliza. */
  async deslizar(): Promise<void> {
    const caja = await this.carrusel.boundingBox();
    if (!caja) throw new Error('El carrusel no tiene caja visible para deslizar');
    const y = caja.y + caja.height * 0.3;
    const desde = caja.x + caja.width * 0.85;
    const hasta = caja.x + caja.width * 0.1;
    await this.page.mouse.move(desde, y);
    await this.page.mouse.down();
    for (let i = 1; i <= 6; i++) {
      await this.page.mouse.move(desde + ((hasta - desde) * i) / 6, y, { steps: 2 });
      await this.page.waitForTimeout(40);
    }
    await this.page.mouse.up();
    await this.page.waitForTimeout(800);
  }

  async clicBanner(): Promise<void> {
    await this.banner.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clicMostrarTodo(): Promise<void> {
    await this.mostrarTodo.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  /** Lleva la shelf del SKU a la vista con los controles del carrusel. */
  async traerShelf(sku: string): Promise<Locator> {
    await this.detenerAutoplay();
    const indice = await this.shelves.evaluateAll(
      (slides, s) => slides.findIndex((x) => !!x.querySelector(`a[href*="${s}"]`)),
      sku,
    );
    if (indice < 0) throw new Error(`El SKU ${sku} no está en el carrusel ${this.componenteId}`);
    await this.carrusel.evaluate((el, i) => (el as HTMLElement & { swiper?: any }).swiper?.slideTo(i, 0), indice);
    await this.page.waitForTimeout(600);
    return this.shelfDe(sku);
  }

  /** Clic en el nombre del producto de la shelf. */
  async clicProducto(sku: string): Promise<void> {
    const shelf = await this.traerShelf(sku);
    await shelf.locator(`a[href*="${sku}"]`).last().click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clicAgregar(sku: string): Promise<void> {
    const shelf = await this.traerShelf(sku);
    await shelf.getByRole('button', { name: /^agregar$/i }).click();
  }

  // ------------------------------------------------------------- medición

  /** Textos de las etiquetas (tags con fondo propio) pintadas sobre el banner. */
  async etiquetasDelBanner(): Promise<{ texto: string; dentroDelBanner: boolean }[]> {
    return this.banner.evaluate((a) => {
      const rb = a.getBoundingClientRect();
      return [...a.querySelectorAll('*')]
        .filter((e) => {
          const h = e as HTMLElement;
          const bg = getComputedStyle(h).backgroundColor;
          return h.offsetWidth > 0 && h.innerText?.trim() && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent';
        })
        .map((e) => {
          const r = e.getBoundingClientRect();
          return {
            texto: (e as HTMLElement).innerText.trim(),
            dentroDelBanner: r.left >= rb.left && r.right <= rb.right && r.top >= rb.top && r.bottom <= rb.bottom,
          };
        });
    });
  }

  async geometria(): Promise<GeometriaCarrusel> {
    await this.esperarQuieto();
    return this.root.evaluate((c) => {
      const caja = (r: DOMRect) => ({
        x: Math.round(r.left),
        y: Math.round(r.top + scrollY),
        ancho: Math.round(r.width),
        alto: Math.round(r.height),
        derecha: Math.round(r.right),
        abajo: Math.round(r.bottom + scrollY),
      });
      const visible = (e: Element | null | undefined) => !!e && (e as HTMLElement).offsetWidth > 0;
      const sw = [...c.querySelectorAll('.swiper')].find(visible)!;
      const swr = sw.getBoundingClientRect();
      const h = [...c.querySelectorAll('h1,h2,h3,h4')].find(visible);
      let titulo = null;
      if (h) {
        const rango = document.createRange();
        rango.selectNodeContents(h);
        titulo = caja(rango.getBoundingClientRect());
      }
      const banner = [...c.querySelectorAll('a[href]')].find(
        (a) => visible(a) && a.querySelector('img') && !a.closest('.swiper'),
      );
      const mt = [...c.querySelectorAll('a')].find((a) => visible(a) && /mostrar todo/i.test(a.textContent ?? ''));
      const fracciones = [...sw.querySelectorAll('.swiper-slide')]
        .map((s) => {
          const r = s.getBoundingClientRect();
          if (r.width === 0) return 0;
          return Math.max(0, Math.min(r.right, swr.right) - Math.max(r.left, swr.left)) / r.width;
        })
        .filter((f) => f > 0.02);
      const pintado = [c, ...c.querySelectorAll('div')].find((d) => {
        const bg = getComputedStyle(d).backgroundColor;
        return bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent' && !d.closest('.swiper');
      });
      return {
        viewport: document.documentElement.clientWidth,
        componente: caja(c.getBoundingClientRect()),
        titulo,
        carrusel: caja(swr),
        banner: banner ? caja(banner.getBoundingClientRect()) : null,
        mostrarTodo: mt ? caja(mt.getBoundingClientRect()) : null,
        itemsVisibles: fracciones.filter((f) => f >= 0.5).length,
        itemsCompletos: fracciones.filter((f) => f >= 0.99).length,
        fondo: pintado
          ? {
              color: getComputedStyle(pintado).backgroundColor,
              x: Math.round(pintado.getBoundingClientRect().left),
              ancho: Math.round(pintado.getBoundingClientRect().width),
            }
          : null,
      };
    });
  }
}
