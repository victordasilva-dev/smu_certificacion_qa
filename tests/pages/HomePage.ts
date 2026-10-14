import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CookieConsentBanner } from './CookieConsentBanner';
import { FooterFull } from './FooterFull';
import { HeaderFull } from './HeaderFull';
import { LoginModal } from './LoginModal';

/**
 * Home del storefront, visto como la página de componentes que configura Page Designer (HU B2C-29).
 *
 * El Home no expone contenedores con clase ni `data-attribute` que delimiten cada componente:
 * `main` tiene un único hijo del que cuelga todo. Por eso lo que aquí se llama "componente" son
 * los encabezados de sección, que es lo que separa un bloque de otro para quien mira la página.
 */
export class HomePage extends BasePage {
  protected readonly path = '';

  readonly header = new HeaderFull(this.page);
  /** Footer completo del Home. Lo usa B2C-19, que certifica el footer sobre esta misma página. */
  readonly footer = new FooterFull(this.page);
  readonly login = new LoginModal(this.page);
  readonly cookies = new CookieConsentBanner(this.page);

  get main(): Locator {
    return this.page.locator('main').first();
  }

  get readyLocator(): Locator {
    return this.header.logo;
  }

  /**
   * Los encabezados de los componentes, **filtrados por visibilidad**.
   *
   * El filtro no es cosmético: el Home renderiza las variantes de los dos form-factors y deja la
   * que no corresponde con altura 0, así que sin filtrar aparecen encabezados repetidos y el
   * recuento de componentes sale inflado.
   */
  get encabezadosDeComponentes(): Locator {
    return this.main.locator('h1, h2, h3').locator('visible=true');
  }

  /** El carrusel de productos frecuentes, si el Home llega a renderizarlo. */
  get carruselMyUsuals(): Locator {
    return this.main.locator('h1, h2, h3').filter({ hasText: /usual|frecuent|habitual/i });
  }

  /** CTA del carrusel de productos frecuentes. */
  get ctaVerTodoMyUsuals(): Locator {
    return this.main.getByRole('link', { name: /ver todo|mostrar todo/i });
  }

  /**
   * Banners del Home que apuntan a una categoría: enlaces con imagen, sin texto de CTA.
   *
   * Son dos de los cuatro puntos de entrada a una PLP que pide la HU B2C-36 (el otro par es el
   * menú de categorías y la URL directa). El hero es un **slider rotatorio**: sus tres slides
   * existen siempre en el DOM y sólo uno está dentro del viewport, así que quien quiera hacer clic
   * tiene que preguntar primero cuál está a la vista —`bannerDeCategoriaEnPantalla()`— en vez de
   * tomar el primero, que suele ser el que acaba de salir por la izquierda.
   */
  get bannersDeCategoria(): Locator {
    return this.main
      .locator('a[href^="/category/"]')
      .filter({ has: this.page.locator('img') })
      .filter({ hasNotText: /mostrar todo/i });
  }

  /** CTA "Mostrar todo" de los carruseles de productos del Home, con su categoría de destino. */
  get ctasDeCarrusel(): Locator {
    return this.main.locator('a').filter({ hasText: /^mostrar todo$/i });
  }

  /**
   * El banner de categoría que el usuario está viendo: el primero cuyo recuadro cae dentro del
   * viewport horizontal. Devuelve también su `href`, que es la categoría contra la que el TC
   * comprueba a dónde llevó el clic.
   */
  async bannerDeCategoriaEnPantalla(): Promise<{ indice: number; href: string }> {
    const ancho = this.page.viewportSize()?.width ?? 1440;
    const total = await this.bannersDeCategoria.count();
    for (let i = 0; i < total; i += 1) {
      const banner = this.bannersDeCategoria.nth(i);
      const caja = await banner.boundingBox();
      const href = await banner.getAttribute('href');
      if (caja && href && caja.x >= 0 && caja.x < ancho) return { indice: i, href };
    }
    throw new Error('Ningún banner de categoría del Home está dentro del viewport');
  }

  /**
   * Un banner de imagen del Home cuyo destino es la SRP de `termino` (`/search?q=<termino>`).
   *
   * Son banners de Page Designer (B2C-104): "Parrilla — banner principal", "Guarniciones"… Se
   * exige la imagen para no confundirlos con el texto "Mostrar todo" de los carruseles, que también
   * enlaza a una SRP.
   */
  bannerHaciaLaSRP(termino: string): Locator {
    return this.main
      .locator(`a[href="/search?q=${encodeURIComponent(termino)}"]`)
      .filter({ has: this.page.locator('img') })
      .first();
  }

  async goto(): Promise<this> {
    await super.goto();
    await this.cookies.aceptarSiAparece();
    await this.waitUntilReady();
    return this;
  }

  /**
   * Abre el Home del sitio al que pertenece `url`.
   *
   * Para los TC que declaran solo la URL de un destino y no `{BASE_URL}`: el Home sale del origen
   * de la URL declarada, no del ambiente del fixture, así el caso corre con la data de su fila.
   */
  async gotoOrigenDe(url: string): Promise<this> {
    await this.page.goto(`${new URL(url).origin}/`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await this.cookies.aceptarSiAparece();
    await this.waitUntilReady();
    return this;
  }

  /**
   * Recorre el Home hasta el final y vuelve arriba.
   *
   * Los componentes se cargan de forma diferida, así que contarlos sin haber bajado devuelve solo
   * los del primer viewport — y eso es justo lo que los TC de estructura no quieren medir.
   */
  async recorrerCompleto(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await this.page.waitForTimeout(4000);
    await this.page.evaluate(() => window.scrollTo(0, 0));
    await this.page.waitForTimeout(2000);
  }

  /** Los títulos de los componentes visibles, en el orden en que aparecen. */
  async titulosDeComponentes(): Promise<string[]> {
    return this.encabezadosDeComponentes.evaluateAll((els) =>
      els.map((e) => (e as HTMLElement).innerText.trim()).filter((t) => t.length > 0),
    );
  }

  /**
   * El contenedor de un componente de Page Designer, buscado por su **tipo** (`typeId`).
   *
   * Cada componente se pinta en un `main div.component[id]`, pero el id de los que no lo fijó
   * nadie es un hash (`8173ed52…`) que cambia si el componente se vuelve a crear. El tipo, en
   * cambio, viaja en la configuración de la página que el storefront embebe en el HTML, junto al
   * id: se resuelve el id desde ahí y se devuelve el contenedor. `null` si el Home no lo trae.
   */
  async componentePorTipo(typeId: string): Promise<Locator | null> {
    const id = await this.page.evaluate((tipo) => {
      const html = document.documentElement.outerHTML.replace(/\\+"/g, '"');
      const re = new RegExp(`"id":"([^"]+)"(?:(?!"id":").){0,200}?"typeId":"${tipo.replace('.', '\\.')}"`);
      return html.match(re)?.[1] ?? null;
    }, typeId);
    return id ? this.main.locator(`div.component[id="${id}"]`) : null;
  }

  /** Carrusel de productos frecuentes (My Usuals) en el Home: componente `smu.myUsualsCarousel`. */
  async componenteMyUsuals(): Promise<Locator | null> {
    return this.componentePorTipo('smu.myUsualsCarousel');
  }

  /** CTA "Ver todo" dentro de un componente. */
  ctaVerTodoEn(componente: Locator): Locator {
    return componente.locator('a, button').filter({ hasText: /ver todo|mostrar todo/i }).first();
  }

  /** Las tarjetas de producto dentro de un componente. */
  shelvesEn(componente: Locator): Locator {
    return componente.locator('div:has(> div > button[aria-label="Guardar en favoritos"])');
  }

  /** Desplaza el Home hasta un componente y le da tiempo a su carga diferida. */
  async llevarAVista(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);
  }

  /** Alto renderizado de un elemento: 0 si no ocupa lugar en la página o no existe. */
  async alto(locator: Locator): Promise<number> {
    if ((await locator.count()) === 0) return 0;
    return locator.first().evaluate((el) => Math.round(el.getBoundingClientRect().height));
  }

  /**
   * Bordes de cada componente visible del Home, para el padding lateral y los fondos (B2C-29 CA).
   *
   * - `izq`/`der`: dónde empieza y termina el contenido (textos medidos por su `Range`, no por la
   *   caja del encabezado, que en los centrados ocupa todo el ancho). Solo cuenta lo que está
   *   entero dentro del viewport: las slides de un carrusel que asoman por los costados son
   *   desborde del carrusel, no falta de padding.
   * - `fondo`: el elemento con color de fondo que cubre al menos el 70 % del alto del componente,
   *   con su `x` y su ancho. Las tarjetas con fondo propio (los ítems del acordeón de términos)
   *   no son "el fondo del componente" y por eso no cuentan.
   */
  async bordesDeComponentes(): Promise<
    { id: string; izq: number; der: number; fondo: { color: string; x: number; ancho: number } | null }[]
  > {
    return this.page.evaluate(() => {
      const W = document.documentElement.clientWidth;
      const hijos = /-b\d|cat-\d|t4-b/;
      const sinColor = ['rgba(0, 0, 0, 0)', 'rgb(255, 255, 255)', 'transparent'];
      return Array.from(document.querySelectorAll<HTMLElement>('main div.component[id]'))
        .filter((c) => c.getBoundingClientRect().height > 0 && !hijos.test(c.id))
        .map((c) => {
          const cajas: DOMRect[] = [];
          c.querySelectorAll<HTMLElement>('h1,h2,h3,p,img,a,button').forEach((x) => {
            let r = x.getBoundingClientRect();
            if (/^H[1-3]|P$/.test(x.tagName) && x.textContent?.trim()) {
              const rango = document.createRange();
              rango.selectNodeContents(x);
              r = rango.getBoundingClientRect();
            }
            if (r.width > 0 && r.height > 0 && r.left >= 0 && r.right <= W) cajas.push(r);
          });
          const altoC = c.getBoundingClientRect().height;
          const conFondo = [c, ...Array.from(c.querySelectorAll<HTMLElement>('div,section'))].find((x) => {
            const b = x.getBoundingClientRect();
            return !sinColor.includes(getComputedStyle(x).backgroundColor) && b.height >= altoC * 0.7;
          });
          const bf = conFondo?.getBoundingClientRect();
          return {
            id: c.id,
            izq: cajas.length ? Math.round(Math.min(...cajas.map((r) => r.left))) : -1,
            der: cajas.length ? Math.round(W - Math.max(...cajas.map((r) => r.right))) : -1,
            fondo: conFondo && bf
              ? { color: getComputedStyle(conFondo).backgroundColor, x: Math.round(bf.left), ancho: Math.round(bf.width) }
              : null,
          };
        })
        .filter((m) => m.izq >= 0);
    });
  }

  /** Alto del documento: con él se comprueba que la página no viene truncada. */
  async altoDocumento(): Promise<number> {
    return this.page.evaluate(() => document.body.scrollHeight);
  }

  /** Imágenes del Home y cuántas de ellas fallaron al cargar. */
  async imagenes(): Promise<{ total: number; rotas: number }> {
    return this.main.evaluate((el) => {
      const imgs = Array.from(el.querySelectorAll('img'));
      return {
        total: imgs.length,
        rotas: imgs.filter((i) => i.complete && i.naturalWidth === 0).length,
      };
    });
  }
}

/**
 * Colección "Mis productos frecuentes".
 *
 * Los TC de My Usuals dependen de si la cuenta tiene productos frecuentes, y la planilla de data
 * no etiqueta ninguna cuenta como tal. Esta página es donde el propio sistema lo responde, así que
 * el `test()` la usa para **comprobar su precondición** en vez de darla por supuesta: sin eso, un
 * "el carrusel no se muestra" no distingue el comportamiento correcto de un defecto.
 */
export class MyUsualsPage extends BasePage {
  protected readonly path = 'account/my-usuals';

  readonly cookies = new CookieConsentBanner(this.page);

  constructor(page: Page) {
    super(page);
  }

  get titulo(): Locator {
    return this.page.getByRole('heading', { name: /mis productos frecuentes/i }).first();
  }

  get readyLocator(): Locator {
    return this.titulo;
  }

  /** El aviso que el sistema muestra cuando la cuenta no tiene ningún producto frecuente. */
  get avisoSinFrecuentes(): Locator {
    return this.page.getByText(/todav[íi]a no tienes productos frecuentes/i);
  }

  async goto(): Promise<this> {
    await super.goto();
    await this.cookies.aceptarSiAparece();
    await this.waitUntilReady();
    await this.page.waitForTimeout(2000);
    return this;
  }

  /**
   * Navega a la URL de la página **sin exigir que cargue su contenido**.
   *
   * Es lo que necesita el caso de acceso sin sesión: ahí el sistema no sirve esta página sino que
   * redirige, así que esperar a su título —como hace `goto()`— agotaría el tiempo sobre una
   * pantalla que nunca va a aparecer, y el `test()` no llegaría a comprobar la redirección, que es
   * justo lo que verifica.
   */
  async navegarSinEsperarContenido(): Promise<this> {
    await this.page.goto(`/${this.path}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await this.cookies.aceptarSiAparece();
    await this.page.waitForTimeout(4000);
    return this;
  }

  /** Dónde terminó el navegador, para comprobar una redirección. */
  destino(): { path: string; esHome: boolean } {
    const url = new URL(this.page.url());
    return { path: url.pathname + url.search, esHome: url.pathname.replace(/\/+$/, '') === '' };
  }

  /** `true` si la cuenta tiene productos frecuentes registrados. */
  async tieneProductosFrecuentes(): Promise<boolean> {
    return (await this.avisoSinFrecuentes.count()) === 0;
  }

  readonly header = new HeaderFull(this.page);
  readonly footer = new FooterFull(this.page);

  /**
   * Las tarjetas de la grilla. Se anclan en el botón de favoritos por su `aria-label` parcial:
   * aquí los productos suelen estar ya en favoritos ("Quitar de favoritos"), así que el ancla de
   * `ShelfProducto.todos` ("Guardar en favoritos") no encuentra ninguno.
   */
  get tarjetas(): Locator {
    return this.page.locator('main div:has(> div > button[aria-label*="favoritos" i])');
  }

  /** La tarjeta de un SKU, por el enlace a su PDP o el `src` de su imagen. */
  tarjeta(sku: string): Locator {
    return this.tarjetas.filter({ has: this.page.locator(`a[href*="${sku}"], img[src*="${sku}"]`) }).first();
  }

  /** El total que anuncia el encabezado ("N productos"). */
  async totalAnunciado(): Promise<number | null> {
    const t = await this.page
      .locator('main')
      .getByText(/^\s*\d+\s+productos?\s*$/i)
      .first()
      .innerText()
      .catch(() => '');
    const m = t.match(/\d+/);
    return m ? Number(m[0]) : null;
  }

  /** Columnas de la grilla, según su `grid-template-columns`. */
  async columnasDeLaGrilla(): Promise<number> {
    return this.tarjetas.first().evaluate((card) => {
      let el: HTMLElement | null = card as HTMLElement;
      while (el && getComputedStyle(el).display !== 'grid') el = el.parentElement;
      if (!el) return 0;
      return getComputedStyle(el).gridTemplateColumns.split(' ').filter(Boolean).length;
    });
  }

  /** Los SKU de las tarjetas en el orden en que se muestran. */
  async skusEnOrden(): Promise<string[]> {
    return this.tarjetas.evaluateAll((cards) =>
      cards.map((c) => {
        const a = c.querySelector('a[href$=".html"]');
        const img = c.querySelector('img');
        const fuente = a?.getAttribute('href') ?? img?.getAttribute('src') ?? '';
        return fuente.match(/(\d{18}-[A-Z]+)/)?.[1] ?? '';
      }),
    );
  }

  /** Contenido de una tarjeta, para compararla con la misma tarjeta en otra página. */
  static async contenidoDeTarjeta(card: Locator): Promise<{
    texto: string;
    imagen: string;
    botones: string[];
    tachado: boolean;
  }> {
    return card.evaluate((c) => ({
      texto: (c as HTMLElement).innerText.replace(/\s+/g, ' ').trim(),
      imagen: ((c.querySelector('img') as HTMLImageElement | null)?.getAttribute('src') ?? '').split('?')[0],
      botones: [...c.querySelectorAll('button')]
        .map((b) => b.getAttribute('aria-label') || (b as HTMLElement).innerText.trim())
        .filter((t) => t && !/favoritos/i.test(t)),
      tachado: [...c.querySelectorAll('*')].some((e) =>
        getComputedStyle(e).textDecorationLine.includes('line-through'),
      ),
    }));
  }
}
