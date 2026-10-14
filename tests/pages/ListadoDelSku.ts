import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CookieConsentBanner } from './CookieConsentBanner';
import { HeaderFull } from './HeaderFull';
import { MetodoEntregaModal } from './MetodoEntregaModal';
import { ShelfProducto } from './ShelfProducto';

/**
 * El listado donde aparece la shelf de un SKU declarado (HU B2C-89, "Add to cart").
 *
 * Los TC de B2C-89 declaran el SKU pero no la PLP. Aquí la ruta al listado se DEDUCE del propio
 * SKU, nunca se elige: su PDP (`/product/<SKU>`) publica el breadcrumb, y la última miga es la
 * categoría a la que pertenece. Cuando esa categoría no lista el producto (un N1 que solo muestra
 * carruseles), el camino es el buscador con el nombre que la misma PDP publica.
 */
export class ListadoDelSku extends BasePage {
  protected path = '';

  readonly header = new HeaderFull(this.page);
  readonly cookies = new CookieConsentBanner(this.page);
  readonly storeLocator = new MetodoEntregaModal(this.page);

  constructor(
    page: Page,
    readonly sku: string,
  ) {
    super(page);
  }

  get readyLocator(): Locator {
    return this.header.logo;
  }

  get shelf(): ShelfProducto {
    return ShelfProducto.porEnlaceOImagen(this.page, this.sku);
  }

  /** Lee de la PDP del SKU la categoría (última miga) y el nombre del producto. */
  private async datosDeLaPdp(): Promise<{ categoria: string | null; nombre: string }> {
    this.path = `product/${this.sku}`;
    await super.goto();
    await this.cookies.aceptarSiAparece();
    const migas = this.page.locator('[data-testid="sf-crumb-item"] a');
    await this.page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    await migas.first().waitFor({ state: 'attached', timeout: 20000 }).catch(() => {});
    const hrefs = await migas.evaluateAll((a) => a.map((x) => x.getAttribute('href') ?? ''));
    const categoria = hrefs.filter((h) => h.startsWith('/category/')).pop() ?? null;
    const h1 = this.page.locator('#app-main h1').first();
    const nombre = (await h1.count())
      ? ((await h1.textContent()) ?? '').trim()
      : (await this.page.title()).split('|')[0].trim();
    return { categoria, nombre };
  }

  /** Abre la PLP de la categoría del SKU. */
  async abrirPlp(): Promise<string> {
    const { categoria } = await this.datosDeLaPdp();
    if (!categoria) throw new Error(`La PDP de ${this.sku} no publica categoría en el breadcrumb`);
    this.path = categoria.replace(/^\//, '');
    await super.goto();
    await this.esperarListado();
    return categoria;
  }

  /** Abre el buscador con el nombre del producto que publica su PDP. */
  async abrirBusquedaPorNombre(): Promise<string> {
    const { nombre } = await this.datosDeLaPdp();
    this.path = `search?q=${encodeURIComponent(nombre)}`;
    await super.goto();
    await this.esperarListado();
    return nombre;
  }

  /**
   * "Elige una forma de entrega" del header: el estado sin método de entrega. En Mobile no vive
   * dentro de `<header>`, así que se busca por texto visible en la página.
   */
  get sinFormaDeEntrega(): Locator {
    return this.page.getByText(/elige una forma de entrega/i).locator('visible=true').first();
  }

  /**
   * Abre el Home y trae a la vista la shelf del SKU dentro del carrusel que lo muestre.
   *
   * Es el camino cuando ni la PLP de su categoría lo lista ni el buscador responde a su nombre
   * (el SRP da "Error: SRP-012" con consultas largas). El carrusel se detiene y se lleva al slide
   * del SKU, o el clic cae en otra shelf.
   */
  async abrirHomeConElSku(): Promise<boolean> {
    this.path = '';
    await super.goto();
    await this.cookies.aceptarSiAparece();
    await this.page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    await this.page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 150));
      }
    });
    const enfocado = await this.page.evaluate((sku) => {
      const enlace = [...document.querySelectorAll(`.swiper a[href*="${sku}"]`)][0];
      const sw = enlace?.closest('.swiper') as (HTMLElement & { swiper?: any }) | null;
      if (!enlace || !sw) return false;
      const slides = [...sw.querySelectorAll('.swiper-slide')];
      const i = slides.findIndex((s) => s.contains(enlace));
      sw.swiper?.autoplay?.stop();
      sw.swiper?.slideTo(i, 0);
      sw.scrollIntoView({ block: 'center' });
      return true;
    }, this.sku);
    await this.page.waitForTimeout(1500);
    return enfocado;
  }

  /** Los botones de la shelf llegan por SSR y tardan en hidratarse: se espera a que la red calme. */
  private async esperarListado(): Promise<void> {
    await this.cookies.aceptarSiAparece();
    await this.page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    await this.page.waitForTimeout(2500);
    await this.shelf.root.scrollIntoViewIfNeeded().catch(() => {});
  }
}
