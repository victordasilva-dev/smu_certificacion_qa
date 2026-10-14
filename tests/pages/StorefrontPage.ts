import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { CookieConsentBanner } from './CookieConsentBanner';
import { ModalCategorias } from './ModalCategorias';

/**
 * Cualquier pantalla del storefront con el header de Mobile web.
 *
 * B2C-21 valida el modal de categorías, al que se llega desde el icono sandwich del header, y ese
 * header está en todas las pantallas: por eso la página se parametriza con la ruta en vez de tener
 * una clase por pantalla. Los TC la usan con el Home y con la PLP de una categoría N2.
 */
export class StorefrontPage extends BasePage {
  protected readonly path: string;

  readonly modalCategorias = new ModalCategorias(this.page);
  readonly cookies = new CookieConsentBanner(this.page);

  constructor(page: import('@playwright/test').Page, path = '') {
    super(page);
    this.path = path;
  }

  /**
   * El icono sandwich del header.
   *
   * Se localiza por su `aria-label` exacto y no por rol+nombre: en algunas pantallas convive con
   * otro botón cuyo texto visible es también "Categorías" (una sección del contenido), y un
   * `getByRole('button', { name: /categorías/i })` resuelve a dos elementos y rompe por strict
   * mode. El fallo aparece de forma intermitente, porque ese segundo botón se renderiza con
   * contenido diferido.
   */
  get iconoSandwich(): Locator {
    return this.page.locator('header button[aria-label="Categorías"]');
  }

  get readyLocator(): Locator {
    return this.iconoSandwich;
  }

  async goto(): Promise<this> {
    await super.goto();
    await this.cookies.aceptarSiAparece();
    await this.waitUntilReady();
    return this;
  }

  /**
   * Abre el modal y espera a que su cuerpo haya renderizado.
   *
   * Las dos esperas son necesarias y por motivos distintos: el header anima al cargar la página y
   * el botón tarda en quedar estable, y el modal se pinta en dos tiempos —primero el armazón,
   * después el cuerpo—. Medir antes de que el cuerpo exista reporta un carrusel de una sola
   * píldora y un cuerpo sin scroll, y hace fallar TC que no tienen defecto alguno.
   */
  async abrirModalCategorias(): Promise<ModalCategorias> {
    await this.iconoSandwich.click();
    await this.modalCategorias.root.waitFor({ state: 'visible', timeout: 30000 });
    await this.modalCategorias.tarjetasN2.first().waitFor({ state: 'visible', timeout: 30000 });
    return this.modalCategorias;
  }
}
