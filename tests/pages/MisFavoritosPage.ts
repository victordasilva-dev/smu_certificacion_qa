import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * "Mis favoritos" de Mi Cuenta (`/account/mis-favoritos`), donde el TC de favoritos de la PDP
 * (B2C-31 M-016) comprueba que el producto quedó guardado. Solo con sesión iniciada.
 */
export class MisFavoritosPage extends BasePage {
  protected readonly path = 'account/mis-favoritos';

  get titulo(): Locator {
    return this.page.getByText(/^mis favoritos$/i).first();
  }

  get readyLocator(): Locator {
    return this.titulo;
  }

  /** El producto del SKU dentro de la lista: por su enlace o por la imagen, que lleva el SKU en el `src`. */
  producto(sku: string): Locator {
    return this.page.locator(`main :is(a[href*="${sku}"], img[src*="${sku}"])`).first();
  }
}
