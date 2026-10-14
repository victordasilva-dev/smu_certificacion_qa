import { Page, Locator, expect } from '@playwright/test';
import { capturarEvidencia as capturar } from '../support/evidencia';

/**
 * Base de todos los Page Objects de la suite.
 *
 * Concentra lo que toda página comparte —cómo se navega y cómo se espera a que esté lista—
 * para que cada POM concreto solo declare sus locators y sus acciones de negocio. El `path`
 * es relativo a la BASE_URL del ambiente, que sale del Excel de data vía entorno: ningún POM
 * escribe un host literal, así cambiar de ambiente no toca el código.
 */
export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  /** Ruta relativa de la página dentro del storefront. La raíz del sitio es ''. */
  protected abstract readonly path: string;

  /** Elemento que confirma que la página terminó de cargar lo que el TC necesita ver. */
  abstract get readyLocator(): Locator;

  /** Navega a la página y espera a que esté lista para interactuar. */
  async goto(): Promise<this> {
    // Navegación relativa: el ambiente lo pone el fixture `baseURL` de tests/support/fixtures.ts,
    // que lo saca de la data del proyecto (`tests/data.json`, generada del Excel de data).
    // Ningún Page Object lee el entorno por su cuenta —si lo hiciera, dos suites con ambientes
    // distintos no podrían correr juntas— y un ambiente ausente ya falló antes, al construir el
    // fixture, con un mensaje que dice de dónde sale el valor.
    await this.page.goto(`/${this.path}`.replace(/\/+$/, '') || '/', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    await this.waitUntilReady();
    return this;
  }

  /** Espera a que la página esté lista sin volver a navegar (útil tras una redirección). */
  async waitUntilReady(): Promise<this> {
    await expect(this.readyLocator).toBeVisible({ timeout: 30000 });
    return this;
  }

  /**
   * Captura de evidencia con el nombre determinista que consume el Word.
   *
   * Sin `paso` deja el estado final (`test-results/evidence/<CP-ID>.png`). Con `paso` deja la
   * captura de ese paso del TC (`<CP-ID>-p02-modal-de-login-abierto.png`), y el Word las
   * maqueta juntas, dos por fila. Un TC merece una captura por paso verificable: con una sola
   * foto del final, quien lee el documento no puede reconstruir cómo se llegó ahí.
   *
   * `elemento` captura solo ese locator en vez de la página: es lo que salva la evidencia de
   * una página larga, donde un `fullPage` reducido a media columna no se lee.
   */
  async capturarEvidencia(
    cpId: string,
    paso?: number | string,
    etiqueta?: string,
    opts: { fullPage?: boolean; elemento?: Locator } = {},
  ): Promise<string> {
    return capturar(opts.elemento ?? this.page, cpId, paso, etiqueta, { fullPage: opts.fullPage });
  }

  get url(): string {
    return this.page.url();
  }
}
