import { Locator, Page } from '@playwright/test';

/** Lo que mide el POM de un tile del carrusel, para que el `test()` decida sobre números. */
export interface TileCircular {
  nombre: string;
  href: string | null;
  ancho: number;
  alto: number;
  /** Radio del envoltorio que recorta la imagen, en px o en el valor computado. */
  radio: string;
  /** ¿Queda entero dentro del ancho visible del carril? */
  visibleEnElSlide: boolean;
}

/**
 * Layout Carrusel + imagen circular del Home/Landing — el objeto de la HU B2C-72.
 *
 * Es un componente, no una página: vive dentro del Home y no tiene URL propia, por eso no
 * extiende `BasePage`.
 *
 * El componente **no expone ninguna clase ni `data-*` semántico**: las clases que trae son hashes
 * de Emotion (`css-slg32q`) que cambian en cada build. El ancla estable es su título visible, y
 * desde ahí se sube al `<section>` que lo contiene — por eso el constructor recibe el título.
 */
export class CarruselCircular {
  constructor(
    private readonly page: Page,
    private readonly titulo: string | RegExp = /categor[ií]as destacadas/i,
  ) {}

  /** El encabezado del componente, que es el ancla de todo lo demás. */
  get encabezado(): Locator {
    return this.page
      .locator('main')
      .getByRole('heading', { name: this.titulo })
      .locator('visible=true')
      .first();
  }

  /**
   * La sección que contiene el componente.
   *
   * Se resuelve subiendo desde el encabezado hasta el ancestro que ya trae las imágenes del
   * slider. Un `section` fijo por posición se rompería en cuanto el Home reordene sus bloques.
   */
  get root(): Locator {
    return this.encabezado.locator(
      'xpath=ancestor::section[1] | ancestor::div[.//a[starts-with(@href,"/category/")]][1]',
    ).first();
  }

  get tiles(): Locator {
    return this.root.locator('a[href^="/category/"]');
  }

  get botonSiguiente(): Locator {
    return this.root.getByRole('button', { name: /siguiente|next/i });
  }

  get botonAnterior(): Locator {
    return this.root.getByRole('button', { name: /anterior|prev/i });
  }

  /** Lleva el componente al centro de la pantalla y espera a que sus imágenes estén montadas. */
  async enfocar(): Promise<this> {
    await this.encabezado.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(800);
    await this.tiles.first().waitFor({ state: 'visible', timeout: 20000 });
    return this;
  }

  /** ¿El título está centrado sobre el slider? */
  async tituloCentrado(): Promise<boolean> {
    return this.encabezado.evaluate((h) => getComputedStyle(h).textAlign === 'center');
  }

  /**
   * Los tiles con su medida y si entran enteros en el slide visible.
   *
   * El **radio se lee del envoltorio, no del `<img>`**: la imagen tiene `border-radius: 0` y quien
   * la recorta en círculo es su contenedor de aspect-ratio. Mirar el radio de la imagen concluiría
   * que el tile es cuadrado cuando en pantalla es un círculo.
   */
  async medirTiles(): Promise<TileCircular[]> {
    return this.root.evaluate((seccion) => {
      const carril = [...seccion.querySelectorAll('*')].find(
        (e) => e.scrollWidth > e.clientWidth + 4 && /auto|scroll/.test(getComputedStyle(e).overflowX),
      );
      const caja = (carril ?? seccion).getBoundingClientRect();
      return [...seccion.querySelectorAll('a[href^="/category/"]')].map((a) => {
        const img = a.querySelector('img');
        const r = img ? img.getBoundingClientRect() : a.getBoundingClientRect();
        const envoltorio = img?.parentElement ?? a;
        return {
          nombre: (a.textContent ?? '').trim().replace(/\s+/g, ' '),
          href: a.getAttribute('href'),
          ancho: Math.round(r.width),
          alto: Math.round(r.height),
          radio: getComputedStyle(envoltorio).borderRadius,
          visibleEnElSlide: r.left >= caja.left - 2 && r.right <= caja.right + 2,
        };
      });
    });
  }

  /**
   * Cómo quedan repartidos los tiles en pantalla: cuántas filas y cuántos por fila.
   *
   * Lo pide la HU B2C-191, que describe la disposición del mismo componente por form-factor
   * ("Mobile: grilla de 3x2", "Desktop: de forma horizontal"), mientras que la B2C-72 lo describe
   * como un slider con N imágenes por slide. Son dos lecturas distintas de lo mismo, así que el
   * POM mide y cada `test()` compara contra lo que pide su fila.
   *
   * Las filas se cuentan agrupando por la coordenada `y` de cada tile, con una tolerancia de
   * 4 px: es lo que el usuario ve como "una fila", y no depende de si el contenedor es un flex,
   * un grid o un carril con scroll.
   */
  async disposicion(): Promise<{ filas: number; porFila: number[]; tiles: number }> {
    return this.root.evaluate((seccion) => {
      const ys: number[] = [];
      const porFila: number[] = [];
      for (const a of seccion.querySelectorAll('a[href^="/category/"]')) {
        const img = a.querySelector('img');
        const y = Math.round((img ?? a).getBoundingClientRect().top);
        const fila = ys.findIndex((v) => Math.abs(v - y) <= 4);
        if (fila === -1) {
          ys.push(y);
          porFila.push(1);
        } else {
          porFila[fila] += 1;
        }
      }
      return { filas: ys.length, porFila, tiles: porFila.reduce((a, b) => a + b, 0) };
    });
  }

  /** Cuántos tiles caben enteros en el slide visible. */
  async tilesPorSlide(): Promise<number> {
    return (await this.medirTiles()).filter((t) => t.visibleEnElSlide).length;
  }

  /**
   * Estado del carril que scrollea.
   *
   * El deslizamiento del componente es scroll nativo (`overflow-x: auto`), no un `transform`: es
   * lo que hace que el gesto con el dedo funcione en un dispositivo real, y lo que permite medir
   * el desplazamiento con `scrollLeft`.
   */
  async carril(): Promise<{
    desplazable: boolean;
    scrollLeft: number;
    ancho: number;
    visible: number;
    maximo: number;
  }> {
    return this.root.evaluate((seccion) => {
      const carril = [...seccion.querySelectorAll('*')].find(
        (e) => e.scrollWidth > e.clientWidth + 4 && /auto|scroll/.test(getComputedStyle(e).overflowX),
      );
      if (!carril) {
        return { desplazable: false, scrollLeft: 0, ancho: 0, visible: 0, maximo: 0 };
      }
      return {
        desplazable: true,
        scrollLeft: Math.round(carril.scrollLeft),
        ancho: carril.scrollWidth,
        visible: carril.clientWidth,
        maximo: carril.scrollWidth - carril.clientWidth,
      };
    });
  }

  /** Pulsa el control de avance y espera a que el scroll se asiente. */
  async deslizarConControl(direccion: 'siguiente' | 'anterior' = 'siguiente'): Promise<void> {
    const boton = direccion === 'siguiente' ? this.botonSiguiente : this.botonAnterior;
    await boton.click();
    await this.page.waitForTimeout(1500);
  }

  /**
   * Desliza el carril horizontalmente con la rueda del puntero.
   *
   * El carril es un scroller nativo (`overflow-x: auto`), y eso decide qué sirve para moverlo: los
   * eventos táctiles fabricados desde la página **no** lo tocan —ni siquiera con `hasTouch: true`
   * y pasando por la API heredada que WebKit exige: se despachan sin error y dejan el `scrollLeft`
   * en 0—, porque el scroll nativo lo resuelve el compositor a partir de input real. La rueda con
   * delta en X sí entra por esa vía, igual que lo haría el dedo en un dispositivo.
   *
   * No es un gesto táctil: es input de puntero. Para lo que estos casos verifican —que el carril
   * se desplace y destape más imágenes— alcanza, y el `test()` que la use debe dejar constancia de
   * con qué se condujo.
   */
  async deslizarConRueda(px = 300): Promise<void> {
    const caja = await this.carrilLocator.boundingBox();
    if (!caja) throw new Error('El carril del carrusel no tiene caja visible');
    await this.page.mouse.move(caja.x + caja.width / 2, caja.y + caja.height / 2);
    await this.page.mouse.wheel(px, 0);
    await this.page.waitForTimeout(1200);
  }

  /**
   * El carril que scrollea, como locator.
   *
   * Se resuelve por estilo y no por clase —las del componente son hashes de Emotion—, así que hace
   * falta marcarlo en el DOM para poder apuntarle con el puntero. El atributo se pone al vuelo y
   * no altera nada de lo que el caso verifica.
   */
  get carrilLocator(): Locator {
    return this.root.locator('[data-qa-carril="1"]');
  }

  /** Marca el carril para poder situar el puntero encima. Devuelve `false` si no hay carril. */
  async marcarCarril(): Promise<boolean> {
    return this.root.evaluate((seccion) => {
      const carril = [...seccion.querySelectorAll('*')].find(
        (e) => e.scrollWidth > e.clientWidth + 4 && /auto|scroll/.test(getComputedStyle(e).overflowX),
      );
      if (!carril) return false;
      carril.setAttribute('data-qa-carril', '1');
      return true;
    });
  }

  /** Los nombres de los tiles que caben enteros en el carril, para ver qué destapa el desplazamiento. */
  async tilesVisibles(): Promise<string[]> {
    return (await this.medirTiles()).filter((t) => t.visibleEnElSlide).map((t) => t.nombre);
  }

  /** Desplaza el carril horizontalmente, como haría el gesto, y devuelve dónde quedó. */
  async desplazarCarril(px: number): Promise<number> {
    return this.root.evaluate((seccion, destino) => {
      const carril = [...seccion.querySelectorAll('*')].find(
        (e) => e.scrollWidth > e.clientWidth + 4 && /auto|scroll/.test(getComputedStyle(e).overflowX),
      );
      if (!carril) return 0;
      carril.scrollLeft = destino;
      return Math.round(carril.scrollLeft);
    }, px);
  }

  /** El href del tile en esa posición, que es el destino contra el que se compara la redirección. */
  async destinoDelTile(indice = 0): Promise<string> {
    const href = await this.tiles.nth(indice).getAttribute('href');
    if (!href) throw new Error(`El tile ${indice} no expone href de categoría`);
    return href;
  }

  async abrirTile(indice = 0): Promise<void> {
    await this.tiles.nth(indice).scrollIntoViewIfNeeded();
    await this.tiles.nth(indice).click();
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(1500);
  }
}
