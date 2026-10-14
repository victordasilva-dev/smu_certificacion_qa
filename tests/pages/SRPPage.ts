import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CookieConsentBanner } from './CookieConsentBanner';
import { PanelFiltros } from './PanelFiltros';
import { SelectorOrden } from './SelectorOrden';
import { ShelfProducto } from './ShelfProducto';

/**
 * La Search Results Page (SRP) — el objeto de la HU B2C-18.
 *
 * Modela lo propio de la página de resultados: el título con el término buscado, el contador, los
 * chips de categoría sugerida, la grilla de shelves, los content assets que puede o no traer y los
 * tres estados que la SRP tiene y una PLP no comparte (skeleton de carga, "sin resultados" con el
 * código SRP-014 y error de carga con SRP-012).
 *
 * **No reimplementa lo que ya vive en otro POM.** El shelf es `ShelfProducto` (flujo
 * `shelf-producto`), el panel de filtros es `PanelFiltros` (B2C-71) y el dropdown de orden es
 * `SelectorOrden` (B2C-87): esta clase solo sabe llegar a ellos. `ListadoProductos` cubre el mismo
 * listado desde la perspectiva del orden; lo que se agrega aquí es la capa de búsqueda que esa
 * clase no tiene por qué conocer.
 *
 * El `path` llega por constructor porque el término lo declara la fila del TC como token: ningún
 * Page Object escribe un host ni un término literal.
 */
export class SRPPage extends BasePage {
  protected readonly path: string;

  readonly cookies = new CookieConsentBanner(this.page);
  readonly orden = new SelectorOrden(this.page);

  /** `new SRPPage(page, 'leche')` → `/search?q=leche`. */
  constructor(page: Page, termino = '') {
    super(page);
    this.path = termino ? `search?q=${encodeURIComponent(termino)}` : 'search';
  }

  /**
   * Lo que confirma que la SRP terminó de cargar: el botón de filtros de la barra.
   *
   * **No sirve el trigger de orden**: en Mobile 390x844 existe en el DOM pero se renderiza con
   * `display:none`, así que esperarlo visible cuelga todo TC Mobile aunque la grilla esté servida.
   * El botón de filtros está a la vista en los dos form-factors, que es lo que tiene que cumplir
   * una condición de "página lista" compartida.
   */
  get readyLocator(): Locator {
    return this.botonFiltros;
  }

  /** Navega a la SRP y se quita de encima el consentimiento, que tapa la barra de controles. */
  async goto(): Promise<this> {
    await super.goto();
    await this.cookies.aceptarSiAparece();
    return this;
  }

  /**
   * Espera a que la SRP esté **hidratada**, no solo pintada.
   *
   * La grilla llega por SSR: los botones "Agregar" están en el DOM —visibles, habilitados y
   * aprobando todas las comprobaciones de accionabilidad de Playwright— antes de que el front les
   * enganche su handler. Un clic en esa ventana no hace absolutamente nada, y el caso falla como
   * si el producto no se agregara al carro, que es la lectura más engañosa posible: manda a
   * revisar el alta de productos cuando lo que se pulsó fue un botón todavía sin conectar.
   *
   * Un usuario no cae ahí porque tarda segundos en llegar con el ratón; esta espera devuelve al
   * script a esa misma situación en vez de simular una velocidad que nadie tiene. Se acota y no
   * se deja fallar: si la red nunca queda en reposo, el caso sigue y será su propia aserción la
   * que decida, no un timeout de la espera.
   */
  async esperarInteractiva(timeout = 15000): Promise<void> {
    await this.page.waitForLoadState('networkidle', { timeout }).catch(() => {});
  }

  // ------------------------------------------------------------------ cabecera

  /**
   * El título con el término buscado.
   *
   * La UI lo envuelve en comillas tipográficas (`Resultado para “leche”`) y rinde el término tal
   * como se buscó. El modal de sugerencias, en cambio, lo capitaliza: un locator con el literal
   * exacto acierta en una pantalla y falla en la otra, así que se busca por el prefijo.
   */
  get titulo(): Locator {
    return this.page.locator('main h1').filter({ hasText: /resultado para/i });
  }

  /** El término tal como la SRP lo rinde dentro de las comillas del título. */
  async terminoDelTitulo(): Promise<string | null> {
    const texto = (await this.titulo.innerText()).trim();
    const m = texto.match(/[“"]([^”"]+)[”"]/);
    return m ? m[1] : null;
  }

  /**
   * El número de resultados que la SRP declara.
   *
   * Se lee del texto porque no hay ningún nodo propio del contador. La UI escribe "productos" en
   * plural también para uno solo ("1 productos"), así que el locator no puede depender del número.
   */
  get contador(): Locator {
    return this.page.locator('main').getByText(/\d+\s+productos/i).first();
  }

  async conteoDeclarado(): Promise<number | null> {
    const texto = await this.page.locator('main').innerText();
    const m = texto.match(/(\d+)\s+productos/i);
    return m ? Number(m[1]) : null;
  }

  // ------------------------------------------------------------------ chips

  /**
   * Los chips de categoría sugerida.
   *
   * Son anchors a `/category/<slug>`. La barra trae además un botón "Todo" que no navega y por eso
   * no entra aquí: el caso que valida la navegación necesita los que llevan a una PLP.
   */
  get chips(): Locator {
    return this.page.locator("main a[href^='/category/']");
  }

  async etiquetasDeChips(): Promise<string[]> {
    return (await this.chips.allInnerTexts()).map((t) => t.trim()).filter(Boolean);
  }

  /** El botón "Todo" de la barra de chips, que marca el estado sin refinar. */
  get chipTodo(): Locator {
    return this.page.locator('main').getByRole('button', { name: /^todo$/i });
  }

  // ------------------------------------------------------------------ grilla

  /** Cada tarjeta de producto de la grilla, en el orden en que se renderiza. */
  get shelves(): Locator {
    return ShelfProducto.todos(this.page);
  }

  shelf(indice: number): ShelfProducto {
    return ShelfProducto.enIndice(this.page, indice);
  }

  /**
   * El enlace al detalle del producto dentro de un shelf de la SRP.
   *
   * **En la SRP el nombre es un `<a href="/<slug>/<SKU>.html">`, no el `<button>` que el mismo
   * shelf rinde en la PLP de categoría** (ver el flujo `shelf-producto`). Por eso
   * `ShelfProducto.nombre` —que busca un `button` con el separador— no resuelve aquí, y un caso
   * que lo use se queda esperando un elemento que en esta página no existe.
   *
   * El shelf trae dos anchors al mismo destino, el de la imagen y el del nombre. Se distinguen
   * porque el de la imagen no tiene texto, y no por su posición, que no es algo que la página
   * prometa. **Tampoco se filtra por " | "**: hay productos sin marca ("Saborizante para leche
   * Milo Activ-Go tarro 700 g") cuyo nombre no lleva el separador, y ese filtro los dejaría fuera
   * justo cuando la grilla los devuelve entre los primeros.
   */
  enlaceDelProducto(indice: number): Locator {
    return this.shelves.nth(indice).locator('a[href]').filter({ hasText: /\S/ }).first();
  }

  /**
   * Los nombres de los productos de la grilla, en el orden en que se renderizan.
   *
   * Sale del anchor con texto de cada shelf (ver `enlaceDelProducto`). Se descarta el rótulo
   * "Imagen no disponible", que el anchor de la imagen rinde cuando el producto no trae foto y que
   * no es un nombre: contarlo desplaza el ranking que miden los TC de relevancia (B2C-101).
   */
  async nombresDeProductos(): Promise<string[]> {
    const textos = await this.shelves.evaluateAll((shelves) =>
      shelves.map((s) =>
        Array.from(s.querySelectorAll('a[href]'))
          .map((a) => (a as HTMLElement).innerText.trim())
          .find((t) => t && !/^imagen no disponible$/i.test(t)) ?? '',
      ),
    );
    return textos.filter(Boolean);
  }

  /** El shelf de un producto concreto, buscado por lo que su nombre contiene. */
  shelfConTexto(texto: string | RegExp): ShelfProducto {
    return new ShelfProducto(this.page, this.shelves.filter({ hasText: texto }).first());
  }

  // ------------------------------------------------------- barra de controles

  /** El botón que abre el panel de filtros — el entry point que valida CA5. */
  get botonFiltros(): Locator {
    return this.page.getByRole('button', { name: /abrir filtros/i });
  }

  async abrirPanelDeFiltros(): Promise<PanelFiltros> {
    const panel = new PanelFiltros(this.page);
    await this.botonFiltros.click();
    await panel.root.first().waitFor({ state: 'visible', timeout: 20000 });
    return panel;
  }

  /**
   * El trigger del dropdown de orden, contado como presente solo si se renderiza.
   *
   * En Mobile el nodo existe con `display:none` y las opciones viven dentro del panel de filtros,
   * así que "¿hay acceso al orden?" se responde distinto según el form-factor y quien lo decide es
   * el `test()` con lo que espera su fila.
   */
  async ordenVisibleEnLaBarra(): Promise<boolean> {
    return this.orden.trigger.isVisible();
  }

  /** El criterio de orden que viaja en la URL, o `null` cuando la SRP se sirvió sin ninguno. */
  get criterioEnLaUrl(): string | null {
    return new URL(this.page.url()).searchParams.get('sort');
  }

  /** El término que viaja en la URL, que es lo que varios TC comprueban tras navegar. */
  get terminoEnLaUrl(): string | null {
    return new URL(this.page.url()).searchParams.get('q');
  }

  /** La ruta + query de la URL vigente, para comprobar el `/search?q=<término>` que piden los TC. */
  get rutaConQuery(): string {
    const url = new URL(this.page.url());
    return `${url.pathname}${url.search}`;
  }

  // ------------------------------------------------------------- mini carrito

  /**
   * El contador del mini carrito del header.
   *
   * El número viaja **dentro del `aria-label`** (`Mi carrito, número de artículos: 1`), no en un
   * badge con texto propio: leerlo del texto visible devuelve vacío y haría pasar por "no cambió"
   * un carro que sí se actualizó.
   */
  get miniCarrito(): Locator {
    return this.page
      .locator("header button[aria-label^='Mi carrito, número de artículos:']")
      .first();
  }

  async itemsEnElCarro(): Promise<number | null> {
    const label = await this.miniCarrito.getAttribute('aria-label');
    const m = (label ?? '').match(/(\d+)/);
    return m ? Number(m[1]) : null;
  }

  // ------------------------------------------------------- content assets

  /**
   * Las imágenes de `main` que **no** pertenecen a un shelf de producto.
   *
   * Es como se comprueba si la SRP trae algún content asset —Grid Banners, banner circular,
   * banner de monetización—: los banners son imágenes, y las de producto son identificables
   * porque cuelgan de un shelf. Se descarta por pertenencia al shelf y no por tamaño: un banner
   * podría medir lo mismo que una tarjeta, y el recuento pasaría por bueno un banner ausente.
   */
  async imagenesAjenasALosProductos(): Promise<{ alt: string; ancho: number; alto: number }[]> {
    return this.page.evaluate(() => {
      const main = document.querySelector('main');
      if (!main) return [];
      const shelves = [
        ...main.querySelectorAll("div:has(> div > button[aria-label='Guardar en favoritos'])"),
      ];
      return [...main.querySelectorAll('img')]
        .filter((img) => img.clientWidth > 40 && img.clientHeight > 40)
        .filter((img) => !shelves.some((s) => s.contains(img)))
        .map((img) => ({ alt: img.alt, ancho: img.clientWidth, alto: img.clientHeight }));
    });
  }

  /**
   * El hueco vertical más grande entre el título de la SRP y el primer producto.
   *
   * Es lo que responde a "no queda espacio vacío donde iría el componente": un banner ausente que
   * dejara su contenedor montado se vería como un salto de varios cientos de píxeles entre la
   * cabecera y la grilla. Se mide sobre la geometría renderizada porque un contenedor vacío no
   * tiene texto ni marca que buscar.
   */
  async huecoSobreLaGrilla(): Promise<number> {
    return this.page.evaluate(() => {
      const h1 = document.querySelector('main h1');
      const shelf = document.querySelector(
        "main div:has(> div > button[aria-label='Guardar en favoritos'])",
      );
      if (!h1 || !shelf) return -1;
      return Math.round(shelf.getBoundingClientRect().top - h1.getBoundingClientRect().bottom);
    });
  }

  // ------------------------------------------------------------- paginación

  /**
   * El componente de paginación que la SRP monta cuando hay más de una página de resultados.
   *
   * Se ancla en la flecha de "siguiente" y en los números de página, que es lo que el TC nombra.
   */
  get paginacion(): Locator {
    return this.page
      .locator('main nav, main ul, main div')
      .filter({ has: this.page.getByRole('button', { name: /^(2|›|siguiente)$/i }) })
      .last();
  }

  // ------------------------------------------------------ estados de la SRP

  /** Los nodos de skeleton que el storefront monta mientras resuelve la búsqueda. */
  get skeletons(): Locator {
    return this.page.locator('.chakra-skeleton');
  }

  async cantidadDeSkeletons(): Promise<number> {
    return this.skeletons.count();
  }

  // ---- sin resultados (CA13 / SRP-014)

  get imagenSinResultados(): Locator {
    return this.page.locator("main img[alt='Sin resultados']");
  }

  get textoSinResultados(): Locator {
    return this.page.getByText(/parece que no encontramos lo que buscas/i);
  }

  get textoRevisaLaOrtografia(): Locator {
    return this.page.getByText(/revisa la ortograf/i);
  }

  get botonVerCategorias(): Locator {
    return this.page.getByRole('button', { name: /ver categor/i });
  }

  /** El código que la SRP muestra en cada estado: `SRP-014` sin resultados, `SRP-012` en error. */
  get codigoDeError(): Locator {
    return this.page.getByText(/error:?\s*SRP-\d{3}/i);
  }

  async codigo(): Promise<string | null> {
    const texto = await this.page.locator('main').innerText();
    const m = texto.match(/SRP-\d{3}/i);
    return m ? m[0].toUpperCase() : null;
  }

  // ---- error de carga (CA14 / SRP-012)

  get mensajeDeError(): Locator {
    return this.page.getByText(/tuvimos un problema al cargar los productos/i);
  }

  get textoEstamosTrabajando(): Locator {
    return this.page.getByText(/estamos trabajando para solucionarlo/i);
  }

  get botonReintentar(): Locator {
    return this.page.getByRole('button', { name: /reintentar/i });
  }

  /** La UI escribe "Inicio" con mayúscula y los TC con minúscula: el locator va tolerante. */
  get botonIrAlInicio(): Locator {
    return this.page.getByRole('button', { name: /ir al inicio/i });
  }

  /**
   * Deja la búsqueda de productos fallando, que es la precondición del TC de error.
   *
   * Se intercepta el endpoint en vez de pedir que alguien rompa el ambiente: es la única forma de
   * provocar el fallo de manera reproducible, y deja el resto de la página intacta para observar
   * el estado tal como lo vería el usuario.
   */
  async forzarErrorDeCarga(): Promise<void> {
    await this.page.route('**/shopper-search/**/product-search**', (route) =>
      route.fulfill({ status: 500, contentType: 'application/json', body: '{"fault":"forzado"}' }),
    );
  }

  async restaurarCarga(): Promise<void> {
    await this.page.unroute('**/shopper-search/**/product-search**');
  }

  /**
   * Retrasa la búsqueda de productos para poder observar el skeleton.
   *
   * Sin el retraso la ventana entre el skeleton y la grilla es de milisegundos y la captura sale
   * o vacía o con el contenido ya montado, según cómo respire el ambiente. El retraso no cambia
   * lo que se verifica —que el skeleton se muestra y luego se reemplaza—, solo lo hace observable.
   */
  async retrasarCarga(ms: number): Promise<void> {
    await this.page.route('**/shopper-search/**/product-search**', async (route) => {
      await new Promise((r) => setTimeout(r, ms));
      await route.continue();
    });
  }
}
