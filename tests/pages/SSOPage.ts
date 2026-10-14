import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { CookieConsentBanner } from './CookieConsentBanner';
import { FooterSimplificado } from './FooterSimplificado';
import { HeaderSimplificado } from './HeaderSimplificado';

/**
 * Pantalla de SSO (Sign In).
 *
 * El TC-B2C20-D-001 pide repetir la verificación del footer "en una pantalla de SSO": esta es la
 * que el storefront sirve en `/login`, y a la que además redirige `/checkout` cuando el usuario
 * es Guest.
 */
export class SSOPage extends BasePage {
  protected readonly path = 'login';

  readonly footer = new FooterSimplificado(this.page);
  readonly header = new HeaderSimplificado(this.page);
  readonly cookies = new CookieConsentBanner(this.page);

  get readyLocator(): Locator {
    return this.footer.root;
  }

  /** El formulario de acceso, lo que identifica a la pantalla como la de SSO. */
  get formularioAcceso(): Locator {
    return this.page.getByText(/iniciar sesi[óo]n/i).first();
  }

  async goto(): Promise<this> {
    await super.goto();
    await this.cookies.aceptarSiAparece();
    await this.waitUntilReady();
    return this;
  }
}
