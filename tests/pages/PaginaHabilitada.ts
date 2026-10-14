import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CookieConsentBanner } from './CookieConsentBanner';
import { HeaderFull } from './HeaderFull';
import { PLPCategoriaN1Page } from './PLPCategoriaN1Page';

/**
 * Cualquiera de las páginas donde la HU B2C-17 declara habilitado el header completo.
 *
 * Los TC de la suite no prueban una pantalla concreta: prueban que el mismo header aparece en
 * todas ellas. Por eso la página se parametriza con la ruta en vez de tener una clase por
 * pantalla — el sujeto bajo prueba es el header, y la pantalla es solo el contexto donde se lo
 * mira.
 *
 * No se usa `StorefrontPage` (de B2C-21) porque su `readyLocator` es el icono sandwich, que solo
 * existe en Mobile: en Desktop la espera nunca se cumpliría. Aquí la señal de página lista es el
 * logo, que está en los dos form-factors.
 */
export class PaginaHabilitada extends BasePage {
  protected readonly path: string;

  /** Nombre funcional de la superficie, el que aparece en los pasos del TC. */
  readonly nombre: string;

  readonly header = new HeaderFull(this.page);
  readonly cookies = new CookieConsentBanner(this.page);

  constructor(page: Page, path = '', nombre = 'Home') {
    super(page);
    this.path = path;
    this.nombre = nombre;
  }

  get readyLocator(): Locator {
    return this.header.logo;
  }

  /** Enlaces del Home a una categoría (`/category/...`): la vía de un usuario para llegar a una PLP. */
  get enlacesACategoria(): Locator {
    return this.page.locator('main a[href*="/category/"]');
  }

  /**
   * Navega a una PLP como lo haría el usuario: por el primer enlace de categoría del Home.
   *
   * Existe para los TC que piden "navegar a una PLP" sin declarar cuál (B2C-26 M-011 y M-035):
   * lo que verifican es el header o el drawer, no el listado, así que cualquier PLP vale. Entrar
   * por la propia UI evita inventar una ruta que la planilla no trae.
   *
   * Los enlaces del Home llevan a la PLP de una categoría N1 (título, píldoras y un carrusel por
   * N2), no al listado plano de `PLPPage`: sus nombres de producto no son botones " | " y el
   * `readyLocator` de aquella nunca aparece.
   */
  async irAUnaCategoria(): Promise<PLPCategoriaN1Page> {
    const enlace = this.enlacesACategoria.first();
    await enlace.scrollIntoViewIfNeeded();
    await enlace.click();
    await this.page.waitForURL(/\/category\//, { timeout: 45000 });
    const plp = new PLPCategoriaN1Page(this.page);
    await plp.waitUntilReady();
    return plp;
  }

  async goto(): Promise<this> {
    await super.goto();
    await this.cookies.aceptarSiAparece();
    await this.waitUntilReady();
    // El header anima al entrar y sus filas no quedan en su sitio definitivo hasta que termina.
    // Medir antes devuelve alturas intermedias y hace fallar TC que no tienen defecto alguno.
    await this.page.waitForTimeout(700);
    return this;
  }
}

/**
 * Convierte una URL de la data (`{PLP_URL}`, `{SRP_URL}`…) en la ruta relativa que espera
 * `BasePage.goto()`.
 *
 * Los tokens del Excel guardan la URL completa del ambiente, pero los Page Objects navegan
 * relativo al `baseURL` que inyecta el fixture. Traducir aquí evita que un POM cargue un host
 * literal y deje el ambiente declarado en dos sitios.
 */
export function rutaDesdeUrl(url: string): string {
  const u = new URL(url);
  return `${u.pathname}${u.search}`.replace(/^\/+/, '');
}
