import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CookieConsentBanner } from './CookieConsentBanner';
import { HeaderFull } from './HeaderFull';
import { PDPPage } from './PDPPage';

/**
 * Listado de productos de una categoría (PLP).
 *
 * En B2C-31 no es el objeto bajo prueba: es el **origen declarado** de los TC, que llegan a la
 * PDP desde `{PLP_URL}`. Por eso lo que expone es cómo encontrar una tarjeta y cómo abrirla, más
 * el texto de la tarjeta —la "shelf"— que TC-B2C31-D-004 compara contra la PDP.
 *
 * Las tarjetas **no son enlaces**: el nombre del producto es un `<button>` que navega por JS, así
 * que un `a[href*="/product/"]` no encuentra nada en esta página.
 */
export class PLPPage extends BasePage {
  protected readonly path: string;

  readonly header = new HeaderFull(this.page);
  readonly cookies = new CookieConsentBanner(this.page);

  constructor(page: Page, path = '') {
    super(page);
    this.path = path;
  }

  /** Los botones-nombre de cada producto del listado ("Marca | Nombre del producto"). */
  get nombresDeProducto(): Locator {
    return this.page.locator('main button').filter({ hasText: ' | ' });
  }

  /** En Desktop el nombre es un botón; en Mobile, un enlace: cualquiera de los dos marca la PLP lista. */
  get readyLocator(): Locator {
    return this.nombresDeProducto.or(this.page.locator('main a[href$=".html"]').filter({ hasText: ' | ' })).first();
  }

  async goto(): Promise<this> {
    await super.goto();
    await this.cookies.aceptarSiAparece();
    await this.waitUntilReady();
    return this;
  }

  /**
   * La tarjeta completa que contiene a un producto.
   *
   * Se sube desde el botón-nombre hasta el contenedor que ya incluye el precio y el botón
   * Agregar. El listado no marca la tarjeta con clase ni `data-testid` —las clases son hashes de
   * Chakra y cambian entre builds—, así que se localiza por contención: el ancestro más cercano
   * que contenga también el botón Agregar de ese producto.
   */
  tarjetaDe(nombre: string): Locator {
    return this.page
      .locator('main div')
      .filter({ has: this.page.getByRole('button', { name: nombre, exact: true }) })
      .filter({ has: this.page.getByRole('button', { name: 'Agregar' }) })
      .last();
  }

  /** Nombre completo ("Marca | Nombre") del producto en la posición dada del listado. */
  async nombreDelProducto(indice = 0): Promise<string> {
    return (await this.nombresDeProducto.nth(indice).innerText()).trim();
  }

  /** Todos los nombres del listado, para elegir el que cumpla la propiedad que pide el TC. */
  async nombres(): Promise<string[]> {
    return (await this.nombresDeProducto.allInnerTexts()).map((t) => t.trim());
  }

  /**
   * En Mobile el nombre de cada tarjeta es un **enlace** (`<a href="/<slug>/<SKU>.html">`), con el
   * nombre truncado ("Marca | Nombre…"), no el `<button>` de Desktop.
   */
  get enlacesDeProducto(): Locator {
    return this.page.locator('main a[href$=".html"]').filter({ hasText: ' | ' });
  }

  /** Tarjeta (shelf) del producto en la posición dada, en Mobile. */
  shelfMobile(indice: number): Locator {
    return this.page
      .locator('main div:has(> div > button[aria-label="Guardar en favoritos"])')
      .filter({ has: this.page.locator('a[href$=".html"]') })
      .nth(indice);
  }

  /** Abre en Mobile la PDP del producto en la posición dada del listado. */
  async abrirProductoMobile(indice = 0): Promise<PDPPage> {
    await this.page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    await this.enlacesDeProducto.nth(indice).click();
    const pdp = new PDPPage(this.page);
    await pdp.waitUntilReady();
    return pdp;
  }

  /** Abre la PDP de un producto del listado y espera a que su bloque principal esté montado. */
  async abrirProducto(nombre: string): Promise<PDPPage> {
    await this.page.getByRole('button', { name: nombre, exact: true }).first().click();
    const pdp = new PDPPage(this.page);
    await pdp.waitUntilReady();
    return pdp;
  }
}
