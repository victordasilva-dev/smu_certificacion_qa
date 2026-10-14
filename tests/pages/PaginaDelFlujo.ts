import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CookieConsentBanner } from './CookieConsentBanner';
import { HeaderSimplificado } from './HeaderSimplificado';

/**
 * Cualquiera de las páginas del flujo de compra o de SSO, donde el storefront sirve el Header
 * Simplificado en lugar del completo (HU B2C-25).
 *
 * Igual que `PaginaHabilitada` para el Header Full, la página se parametriza con la ruta: el
 * sujeto bajo prueba es el header, y la pantalla es el contexto donde se lo mira.
 */
export class PaginaDelFlujo extends BasePage {
  protected readonly path: string;

  /** Nombre funcional de la pantalla, el que la planilla usa en sus pasos. */
  readonly nombre: string;

  readonly header = new HeaderSimplificado(this.page);
  readonly cookies = new CookieConsentBanner(this.page);

  constructor(page: Page, path: string, nombre: string) {
    super(page);
    this.path = path;
    this.nombre = nombre;
  }

  get readyLocator(): Locator {
    return this.header.logo;
  }

  async goto(): Promise<this> {
    await super.goto();
    await this.cookies.aceptarSiAparece();
    await this.waitUntilReady();
    return this;
  }

  /** Alto del documento frente al del viewport: dice si la página da margen para hacer scroll. */
  async hayScroll(): Promise<boolean> {
    return this.page.evaluate(() => document.body.scrollHeight > window.innerHeight);
  }

  async scrollA(y: number): Promise<void> {
    await this.page.evaluate((destino) => window.scrollTo(0, destino), y);
    await this.page.waitForTimeout(1200);
  }
}

/**
 * Las pantallas del flujo que el ambiente sirve a un visitante sin sesión, además del Carro.
 *
 * El Carro no está en la lista porque su URL sí es data: la planilla la declara en `{CART_URL}` y
 * el `test()` la arma desde el token. Las tres rutas de aquí, en cambio, son navegación propia del
 * storefront y no data de ambiente, del mismo modo que la PLP o la PDP en B2C-17.
 *
 * La planilla enumera siete pantallas —Carro, Checkout Mis Envíos, Checkout Pago, Confirmación,
 * Registro, Login OTP y Cambio de contraseña—; estas son las que se pueden abrir. Las tres de
 * Checkout y la de Confirmación exigen superar el mínimo de compra y completar un pago, y el Login
 * con OTP no es una página: es una opción dentro del modal de login, que se abre sobre una
 * pantalla que conserva su Header Full. Los TC que abarcan las siete lo dicen en su Observación.
 */
export const PANTALLAS_SSO: ReadonlyArray<{ nombre: string; path: string }> = [
  { nombre: 'SSO / Login', path: 'login' },
  { nombre: 'Registro', path: 'registration' },
  { nombre: 'Cambio de contraseña', path: 'reset-password' },
];
