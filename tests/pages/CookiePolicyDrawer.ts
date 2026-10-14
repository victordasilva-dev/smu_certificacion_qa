import { Locator, Page } from '@playwright/test';

/**
 * Contenedor de la Política de cookies que se abre desde el banner de consentimiento.
 *
 * El storefront lo monta con el mismo componente en los dos form-factors —`role="dialog"`,
 * `aria-modal="true"`, `data-testid="cookie-policy-drawer"`— y solo cambia el anclaje: a la
 * derecha en Desktop, al pie en Mobile. Quién decide si ese anclaje satisface el resultado
 * esperado de cada TC es su `test()`, no este POM: por eso aquí solo se expone la geometría
 * (`caja()`) y no una aserción de "es modal" o "es drawer".
 */
export class CookiePolicyDrawer {
  readonly root: Locator;

  constructor(private readonly page: Page) {
    this.root = page.locator('[data-testid="cookie-policy-drawer"]');
  }

  get titulo(): Locator {
    return this.root.locator('header');
  }

  get cerrar(): Locator {
    return this.root.getByRole('button', { name: /cerrar pol[ií]tica de cookies/i });
  }

  /** Secciones del acordeón con el contenido de la política. */
  get secciones(): Locator {
    return this.root.locator('button:has(p)');
  }

  async caja(): Promise<{ x: number; y: number; width: number; height: number }> {
    const box = await this.root.boundingBox();
    if (!box) throw new Error('El drawer de la Política de cookies no tiene caja visible');
    return box;
  }

  async esModal(): Promise<boolean> {
    return (await this.root.getAttribute('aria-modal')) === 'true';
  }

  async cerrarDrawer(): Promise<void> {
    await this.cerrar.click();
    await this.root.waitFor({ state: 'detached', timeout: 15000 });
  }
}
