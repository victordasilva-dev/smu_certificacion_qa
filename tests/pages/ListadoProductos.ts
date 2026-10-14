import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { BloqueDePreciosShelf } from './BloqueDePreciosShelf';
import { CookieConsentBanner } from './CookieConsentBanner';
import { PanelFiltros } from './PanelFiltros';
import { SelectorOrden } from './SelectorOrden';

/**
 * El listado de productos con su barra de controles — la SRP que declara la planilla B2C-87.
 *
 * Modela lo que el listado expone alrededor del orden: el conteo, la secuencia de productos,
 * los precios, el botón de filtros (donde CA14 espera el bullet) y el estado de error de CA17.
 * El dropdown y el panel son componentes aparte: esta clase solo sabe abrirlos.
 *
 * El `path` llega por constructor porque la fila del TC declara la URL como token y el spec la
 * resuelve; ningún POM escribe un host ni una ruta literal.
 */
export class ListadoProductos extends BasePage {
  protected readonly path: string;

  readonly cookies = new CookieConsentBanner(this.page);
  readonly orden = new SelectorOrden(this.page);

  constructor(page: Page, path = '') {
    super(page);
    this.path = path;
  }

  /**
   * Lo que confirma que el listado está servido: el botón de filtros de la barra.
   *
   * **No sirve el trigger de orden**: en Mobile 390x844 existe en el DOM pero se renderiza
   * oculto, así que esperarlo visible deja colgado todo TC Mobile aunque el listado haya cargado
   * perfectamente. El botón de filtros está a la vista en los dos form-factors, que es lo que
   * tiene que cumplir una condición de "página lista" compartida.
   */
  get readyLocator(): Locator {
    return this.botonFiltros;
  }

  /** Navega al listado y se quita de encima el consentimiento, que tapa la barra de controles. */
  async goto(): Promise<this> {
    await super.goto();
    await this.cookies.aceptarSiAparece();
    return this;
  }

  /** El botón que abre el panel de filtros. Es también donde CA14 espera el indicador bullet. */
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
   * El criterio de orden que viaja en la URL, o `null` cuando no hay ninguno.
   *
   * Es la señal más fiable del orden vigente —más que cualquier texto— porque es la que el front
   * manda al backend. `null` es un estado con significado propio: es el ingreso sin criterio
   * previo que CA15 quiere ver resuelto como "Recomendado".
   */
  get criterioEnLaUrl(): string | null {
    return new URL(this.page.url()).searchParams.get('sort');
  }

  /** Los `refine=` activos, para comprobar que cambiar el orden no toca los filtros. */
  get filtrosEnLaUrl(): string[] {
    return new URL(this.page.url()).searchParams.getAll('refine').sort();
  }

  /**
   * Cada tarjeta de producto del listado.
   *
   * El shelf no tiene `data-testid` ni clase semántica: se ancla en el botón de favoritos, que
   * es el único elemento propio e inequívoco de la tarjeta (ver el flujo `shelf-producto`).
   */
  get shelves(): Locator {
    return this.page.locator(
      "main div:has(> div > button[aria-label='Guardar en favoritos'])",
    );
  }

  /** El número de productos que el listado declara en su cabecera. */
  async conteoDeclarado(): Promise<number | null> {
    const texto = await this.page.locator('main').innerText();
    const m = texto.match(/(\d+)\s+productos/i);
    return m ? Number(m[1]) : null;
  }

  /**
   * La secuencia de productos renderizados, identificados por el texto de su nombre.
   *
   * Sirve para comparar dos órdenes entre sí. No se usan los precios para esto porque hay
   * productos que comparten precio y la comparación dejaría de distinguir posiciones.
   */
  async secuencia(): Promise<string[]> {
    return this.shelves.evaluateAll((tarjetas) =>
      tarjetas.map((t) => {
        const nombre = [...t.querySelectorAll('button')].find(
          (b) =>
            b.getAttribute('aria-label') !== 'Guardar en favoritos' &&
            !/^agregar$/i.test((b.textContent ?? '').trim()) &&
            (b.textContent ?? '').trim().length > 8,
        );
        return (nombre?.textContent ?? '').trim();
      }),
    );
  }

  /**
   * La marca de cada producto del listado, en el orden de la grilla.
   *
   * El shelf no expone la marca en un nodo propio: el botón del nombre rinde marca y nombre en
   * una sola cadena separada por un **pipe literal** —"Ariztia | Trutro ala de pollo…"—, que está
   * en el DOM y no es un salto de línea maquetado. La distinción importa: partir por `\n`
   * devuelve la cadena entera y deja la comparación con la marca fallando siempre, con una
   * diferencia que se lee como si el listado trajera productos de otra marca.
   *
   * Es lo que permite comprobar producto a producto que el listado filtrado respeta las marcas
   * seleccionadas, en vez de conformarse con el conteo.
   */
  async marcas(): Promise<string[]> {
    return this.shelves.evaluateAll((tarjetas) =>
      tarjetas.map((t) => {
        const nombre = [...t.querySelectorAll('button')].find(
          (b) =>
            b.getAttribute('aria-label') !== 'Guardar en favoritos' &&
            !/^agregar$/i.test((b.textContent ?? '').trim()) &&
            (b.textContent ?? '').trim().length > 8,
        );
        return ((nombre?.textContent ?? '').split('|')[0] ?? '').trim();
      }),
    );
  }

  /**
   * El precio de venta de cada producto del listado, en pesos.
   *
   * **No es el primer importe del shelf.** Una tarjeta con promoción renderiza dos: el precio con
   * mecánica en cuerpo pequeño (11px) y el de venta en cuerpo grande (14px), y el pequeño va
   * primero en el DOM. Tomar el primero mezcla dos magnitudes distintas y hace que un listado
   * correctamente ordenado parezca desordenado.
   *
   * El precio de venta es el que el shelf destaca, que es el criterio que ya fija
   * `BloqueDePreciosShelf.precioDestacado()` (mayor tamaño de fuente, y a igualdad el primero).
   * Se reusa esa lectura en vez de reimplementarla: es la misma noción de "precio principal" que
   * certifica la suite B2C-62 y vive en un solo sitio.
   */
  async precios(): Promise<number[]> {
    const total = await this.shelves.count();
    const precios: number[] = [];
    for (let i = 0; i < total; i += 1) {
      const bloque = new BloqueDePreciosShelf(this.page, this.shelves.nth(i));
      const destacado = await bloque.precioDestacado();
      precios.push(destacado ? destacado.importe : Number.NaN);
    }
    return precios;
  }

  /**
   * Qué productos del listado llevan una mecánica promocional visible.
   *
   * Es como se comprueba "el listado muestra únicamente productos con oferta vigente": el shelf
   * no expone `isOnSale`, lo que se ve es el bloque de promoción —`Lleva N por $X`, el precio de
   * socio o el badge de descuento—. **No sirve buscar un precio tachado**: el shelf de este
   * storefront no renderiza `<s>`/`<del>`, así que esa lectura concluiría que ningún producto
   * está en oferta. Se reusa `BloqueDePreciosShelf.tienePromocion()`, que ya fija esa noción para
   * toda la suite en vez de repetirla aquí con otro criterio.
   */
  async productosConPromocion(): Promise<{ nombre: string; promocion: boolean }[]> {
    const nombres = await this.secuencia();
    const total = await this.shelves.count();
    const filas: { nombre: string; promocion: boolean }[] = [];
    for (let i = 0; i < total; i += 1) {
      const bloque = new BloqueDePreciosShelf(this.page, this.shelves.nth(i));
      filas.push({ nombre: nombres[i] ?? `producto ${i + 1}`, promocion: await bloque.tienePromocion() });
    }
    return filas;
  }

  /** El estado de error del listado que describe CA17. */
  get mensajeDeError(): Locator {
    return this.page.getByText(/tuvimos un problema al cargar los productos/i);
  }

  get codigoDeError(): Locator {
    return this.page.getByText(/error:?\s*[A-Z]{3}-\d{3}/i);
  }

  get botonReintentar(): Locator {
    return this.page.getByRole('button', { name: /reintentar/i });
  }

  get botonIrAlInicio(): Locator {
    return this.page.getByRole('button', { name: /ir al inicio/i });
  }

  /**
   * Deja el listado servido con error, que es la precondición de los TC de CA17.
   *
   * Se intercepta la búsqueda de productos en vez de tocar el backend: es la única forma de
   * provocar el fallo sin depender de que alguien rompa el ambiente, y deja el resto de la
   * página intacta para poder observar el estado de error tal como lo vería el usuario.
   */
  async forzarErrorDelListado(): Promise<void> {
    await this.page.route('**/shopper-search/**/product-search**', (route) =>
      route.fulfill({ status: 500, contentType: 'application/json', body: '{"fault":"forzado"}' }),
    );
  }

  async restaurarListado(): Promise<void> {
    await this.page.unroute('**/shopper-search/**/product-search**');
  }

  /**
   * El HTML del botón de filtros, que es como se comprueba si apareció el bullet de CA14.
   *
   * La comparación se hace contra el mismo botón en el estado por defecto: el indicador, de
   * existir, sería un elemento o un estilo de más. Comparar el marcado completo evita tener que
   * adivinar qué forma tendría el bullet, que es justo lo que el caso no especifica.
   */
  async marcadoDelBotonFiltros(): Promise<string> {
    return this.botonFiltros.evaluate((b) => b.outerHTML);
  }

  /** Lo que el botón de filtros lleva alrededor: ahí caería un badge que no fuera hijo suyo. */
  async marcadoDeLaZonaDeFiltros(): Promise<string> {
    return this.botonFiltros.evaluate((b) => (b.parentElement as HTMLElement).outerHTML);
  }
}
