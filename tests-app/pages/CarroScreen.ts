import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';

/**
 * Página "Mi carro" (v1.0.7, Android 2026-10-09): título "Mi carro", ítems `cart-item-<sku>` con su
 * cantidad `cart-quantity-<sku>`, aviso de compra mínima ("¡Solo te faltan $X para ir a pagar!") y
 * el botón "Continuar con la entrega" (`cart-checkout`), deshabilitado bajo el mínimo.
 */
export class CarroScreen extends BaseScreen {
  get titulo(): Locator {
    return this.screen.getByText('Mi carro');
  }

  get readyLocator(): Locator {
    return this.titulo;
  }

  cantidad(sku: string): Locator {
    return this.screen.getByTestId(`cart-quantity-${sku}`);
  }

  get continuarConLaEntrega(): Locator {
    return this.screen.getByTestId('cart-checkout');
  }

  get avisoCompraMinima(): Locator {
    return this.screen.getByText(/para ir a pagar/i);
  }

  async volver(): Promise<void> {
    await this.screen.getByText('Volver').tap();
  }
}
