import { Locator, Page } from '@playwright/test';

/** Lo que el POM mide de cada banner del collage, para que el `test()` decida sobre números. */
export interface BannerCollage {
  id: string;
  alt: string;
  href: string | null;
  /** `null` cuando el enlace no declara target — el default `_self` de Page Designer. */
  target: string | null;
  ancho: number;
  alto: number;
  x: number;
  imagenCargada: boolean;
}

/** Una instancia del componente presente en la página, con la variante que declara. */
export interface InstanciaCollage {
  componenteId: string;
  variante: string;
  banners: number;
  titulo: string;
}

/**
 * Collage de Banners del Home/Landing — el objeto de la HU B2C-83.
 *
 * Componente, no página: vive dentro del Home y no tiene URL propia, por eso no extiende
 * `BasePage`.
 *
 * **Se localiza por la variante que el propio DOM declara, no por su apariencia.** Cada
 * componente de Page Designer se renderiza dentro de un `div.component` con id estable, y el
 * collage publica su variante en un `data-variant` interior. Eso evita la trampa de esta suite:
 * hay en el Home un collage que *parece* T5 —estático, cinco banners, título y "Mostrar todo"— y
 * declara `T6`, una variante que esta HU no cubre.
 *
 * Es también lo que lo separa del carrusel de banners, que comparte apariencia pero monta Swiper:
 * el collage no tiene `.swiper` ni un solo `button`.
 */
export class CollageBanners {
  constructor(
    private readonly page: Page,
    private readonly variante: string,
  ) {}

  /** El `div.component` del collage de esta variante. */
  get root(): Locator {
    return this.page.locator(`div.component:has(> .container > [data-variant="${this.variante}"])`);
  }

  /** El div que lleva el `data-variant`: es el que pinta el fondo del layout. */
  get lienzo(): Locator {
    return this.root.locator(`[data-variant="${this.variante}"]`).first();
  }

  /** Los banners del collage, cada uno su propio `div.component` numerado. */
  get banners(): Locator {
    return this.root.locator('div.component:has(> .container > a img)');
  }

  get titulo(): Locator {
    return this.root.locator('h1, h2, h3').first();
  }

  get mostrarTodo(): Locator {
    return this.root.getByRole('link', { name: /mostrar todo|ver todos?/i }).first();
  }

  /**
   * Censo de las instancias del collage que hay en la página, con su variante declarada.
   *
   * Es lo primero que mira cada `test()`: decide si el caso tiene precondición antes de medir
   * nada. Un TC de T5 contra un ambiente donde solo hay T1 y T6 no es un fallo del producto.
   */
  async instancias(): Promise<InstanciaCollage[]> {
    return this.page.evaluate(() => {
      const main = document.querySelector('main');
      if (!main) return [];
      return [...main.querySelectorAll('[data-variant]')].map((el) => {
        const comp = el.closest('div.component');
        const h = comp?.querySelector('h1, h2, h3');
        return {
          componenteId: comp?.id ?? '',
          variante: el.getAttribute('data-variant') ?? '',
          banners: comp
            ? [...comp.querySelectorAll('a')].filter((a) => a.querySelector('img')).length
            : 0,
          titulo: (h?.textContent ?? '').trim(),
        };
      });
    });
  }

  /** ¿Está configurada esta variante en el ambiente? */
  async existe(): Promise<boolean> {
    const todas = await this.instancias();
    return todas.some((i) => i.variante === this.variante);
  }

  async enfocar(): Promise<this> {
    await this.root.scrollIntoViewIfNeeded();
    // Las imágenes del collage son lazy: sin esta espera, banners perfectamente sanos se leen
    // como no cargados y se reporta un falso positivo de imagen caída.
    await this.page.waitForTimeout(1500);
    await this.banners.first().waitFor({ state: 'visible', timeout: 20000 });
    return this;
  }

  /** Los banners con su medida, su destino y su estado de carga. */
  async medirBanners(): Promise<BannerCollage[]> {
    return this.root.evaluate((comp) => {
      const propios = [...comp.querySelectorAll('div.component')].filter((s) =>
        s.querySelector(':scope > .container > a img'),
      );
      const cajas = propios.length
        ? propios
        : [...comp.querySelectorAll('a')].filter((a) => a.querySelector('img'));
      return cajas.map((s) => {
        const r = s.getBoundingClientRect();
        const img = s.querySelector('img') as HTMLImageElement | null;
        const a = s.querySelector('a');
        return {
          id: (s as HTMLElement).id || '',
          alt: img?.alt?.trim() ?? '',
          href: a?.getAttribute('href') ?? null,
          target: a?.getAttribute('target') ?? null,
          ancho: Math.round(r.width),
          alto: Math.round(r.height),
          x: Math.round(r.left),
          imagenCargada: Boolean(img && img.complete && img.naturalWidth > 0),
        };
      });
    });
  }

  /**
   * Geometría del componente frente al viewport.
   *
   * `x` y `ancho` son lo que deciden los casos de presentación: T1 pide ancho completo y x=0 en
   * Desktop, y padding lateral en Mobile.
   */
  async geometria(): Promise<{
    x: number;
    ancho: number;
    alto: number;
    viewport: number;
    paddingIzquierdo: number;
    paddingDerecho: number;
    fondo: string;
  }> {
    return this.root.evaluate((comp) => {
      const r = comp.getBoundingClientRect();
      const cs = getComputedStyle(comp);
      const vp = document.documentElement.clientWidth;
      return {
        x: Math.round(r.left),
        ancho: Math.round(r.width),
        alto: Math.round(r.height),
        viewport: vp,
        paddingIzquierdo: Math.round(parseFloat(cs.paddingLeft) || 0),
        paddingDerecho: Math.round(parseFloat(cs.paddingRight) || 0),
        fondo: cs.backgroundColor,
      };
    });
  }

  /**
   * Lo que confirma que el collage es estático.
   *
   * Cuenta lo que un slider tendría y el collage no debe tener. Se mira sobre el componente
   * entero, porque un control de navegación podría vivir fuera del carril y dentro del bloque.
   */
  async mecanismosDeSlider(): Promise<{
    swipers: number;
    botones: number;
    paginacion: number;
    slideBar: number;
  }> {
    return this.root.evaluate((comp) => ({
      swipers: comp.querySelectorAll('.swiper').length,
      botones: comp.querySelectorAll('button').length,
      paginacion: comp.querySelectorAll('.swiper-pagination').length,
      slideBar: comp.querySelectorAll('.swiper-scrollbar').length,
    }));
  }

  /** Una huella del contenido visible, para comprobar que no rota sola con el tiempo. */
  async huella(): Promise<string> {
    return this.root.evaluate((comp) =>
      [...comp.querySelectorAll('img')]
        .map((i) => `${(i as HTMLImageElement).alt}@${Math.round(i.getBoundingClientRect().left)}`)
        .join('|'),
    );
  }

  /** La URL de la imagen de un banner, para poder forzar su error de carga con `page.route`. */
  async urlDeImagen(indice = 0): Promise<string> {
    const src = await this.banners.nth(indice).locator('img').first().getAttribute('src');
    if (!src) throw new Error(`El banner ${indice} no expone imagen`);
    return src;
  }

  /**
   * Lo que el banner muestra donde iba la imagen, cuando esta no carga.
   *
   * Se mide **por posición** y no por el nombre del banner: al fallar la imagen el componente
   * puede reemplazar la tarjeta entera por su estado de error, y con ella desaparece el `alt` por
   * el que se la habría buscado.
   */
  async estadoDeImagenDe(indice = 0): Promise<{ hayImg: boolean; alto: number; texto: string }> {
    return this.banners.nth(indice).evaluate((s) => {
      const img = s.querySelector('img');
      return {
        hayImg: Boolean(img),
        alto: Math.round(((img ?? s) as Element).getBoundingClientRect().height),
        texto: (s.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 160),
      };
    });
  }

  /** El padding lateral del contenido del Header, para comparar alineaciones. */
  async paddingDelHeader(): Promise<number | null> {
    return this.page.evaluate(() => {
      const hdr = document.querySelector('header');
      if (!hdr) return null;
      const vp = document.documentElement.clientWidth;
      const interno = [...hdr.querySelectorAll('div')]
        .map((d) => d.getBoundingClientRect())
        .filter((r) => r.width > 0 && r.width < vp)
        .sort((a, b) => b.width - a.width)[0];
      return interno ? Math.round(interno.left) : null;
    });
  }
}
