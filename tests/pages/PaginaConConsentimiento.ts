import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CookieConsentBanner } from './CookieConsentBanner';
import { HeaderFull } from './HeaderFull';

/**
 * Una página cualquiera del storefront, vista desde la HU del consentimiento de cookies.
 *
 * Existe aparte de `HomePage` y `StorefrontPage` por un motivo concreto: esas dos aceptan el
 * banner dentro de su `goto()` para quitárselo de en medio, que es exactamente lo que B2C-30 no
 * puede hacer — aquí el banner **es** el objeto bajo prueba. Reutilizarlas dejaría a todos los TC
 * de esta suite mirando una página donde el consentimiento ya se dio.
 *
 * La ruta se parametriza porque los TC dicen "cualquier pagina del sitio (Home, PLP, PDP, SRP,
 * Landing)" y el caso de navegación se comprueba cambiando de ruta con el banner abierto.
 */
export class PaginaConConsentimiento extends BasePage {
  protected readonly path: string;

  readonly header = new HeaderFull(this.page);
  readonly cookies = new CookieConsentBanner(this.page);

  constructor(page: Page, path = '') {
    super(page);
    this.path = path;
  }

  get main(): Locator {
    return this.page.locator('main').first();
  }

  get readyLocator(): Locator {
    return this.header.logo;
  }

  /** Navega **sin** tocar el banner: en esta suite el consentimiento es lo que se certifica. */
  async goto(): Promise<this> {
    await super.goto();
    return this;
  }

  /** Espera a que el banner aparezca. Es el punto de partida de casi todos los TC de la suite. */
  async esperarBanner(): Promise<CookieConsentBanner> {
    await this.cookies.root.waitFor({ state: 'visible', timeout: 30000 });
    return this.cookies;
  }

  /**
   * ¿El contenido principal quedó bloqueado por el banner?
   *
   * Recoge las tres formas en que un banner de consentimiento suele bloquear la página —scroll
   * congelado en `body`/`html`, un backdrop que intercepta los clics, o el propio banner tapando
   * el viewport entero— para que el `test()` decida sobre un dato y no sobre una impresión.
   */
  async contenidoBloqueado(): Promise<{
    scrollBloqueado: boolean;
    hayBackdrop: boolean;
    porcentajeDeViewportTapado: number;
  }> {
    return this.page.evaluate(() => {
      const bloqueaScroll = (el: Element | null) => {
        if (!el) return false;
        const overflow = getComputedStyle(el).overflow;
        return overflow === 'hidden' || overflow === 'clip';
      };
      const banner = document.querySelector('[data-testid="cookie-consent-banner"]');
      const caja = banner?.getBoundingClientRect();
      const areaViewport = window.innerWidth * window.innerHeight;
      // Un backdrop de consentimiento sería un elemento fijo a pantalla completa por encima del
      // contenido y por debajo del banner. Se busca por geometría y no por clase: las clases de
      // Chakra son hashes y no son estables entre builds.
      const hayBackdrop = [...document.querySelectorAll('body *')].some((el) => {
        const cs = getComputedStyle(el);
        if (cs.position !== 'fixed' || cs.pointerEvents === 'none') return false;
        if (el.closest('[data-testid="cookie-consent-banner"]')) return false;
        const r = el.getBoundingClientRect();
        return r.width >= window.innerWidth * 0.98 && r.height >= window.innerHeight * 0.98;
      });
      return {
        scrollBloqueado: bloqueaScroll(document.body) || bloqueaScroll(document.documentElement),
        hayBackdrop,
        porcentajeDeViewportTapado: caja ? (caja.width * caja.height * 100) / areaViewport : 0,
      };
    });
  }

  /** Desplaza la página para comprobar que se puede navegar con el banner presente. */
  async desplazar(px = 600): Promise<number> {
    await this.page.evaluate((y) => window.scrollTo(0, y), px);
    await this.page.waitForTimeout(500);
    return this.page.evaluate(() => window.scrollY);
  }

  /** Hosts de terceros a los que la página pidió algo. Vacío = ninguna llamada de analítica. */
  async hostsDeTerceros(): Promise<string[]> {
    return this.page.evaluate(() => {
      const propio = location.hostname;
      const hosts = performance
        .getEntriesByType('resource')
        .map((e) => {
          try {
            return new URL((e as PerformanceResourceTiming).name).hostname;
          } catch {
            return '';
          }
        })
        .filter((h) => h && h !== propio);
      return [...new Set(hosts)];
    });
  }
}
