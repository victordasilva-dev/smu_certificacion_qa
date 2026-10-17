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

  /** Ítem del carro (`cart-item-<sku>`). */
  item(sku: string): Locator {
    return this.screen.getByTestId(`cart-item-${sku}`);
  }

  /** Modal "Están de vuelta" (B2C-46): productos no disponibles que recuperaron stock. */
  get modalEstanDeVuelta(): Locator {
    return this.screen.getByText(/est[áa]n de vuelta/i);
  }

  /**
   * Mensaje de promo incompleta del carro (B2C-50): "Te faltan N para la promo". En v1.0.7 es
   * hermano del `cart-item-<sku>`, no hijo: con un solo producto de promo en el carro, es único.
   */
  get mensajePromo(): Locator {
    return this.screen.getByText(/^te faltan \d+ para la promo$/i);
  }

  /** El mensaje con CTA "›" (promo Combina): botón "Te faltan N para la promo. Ver productos combinables". */
  get ctaPromoCombina(): Locator {
    return this.screen.getByRole('button', { name: /ver productos combinables/i });
  }

  /** "Llevas la promo" (promo completa). */
  get llevasLaPromo(): Locator {
    return this.screen.getByText(/^llevas la promo/i);
  }

  async volver(): Promise<void> {
    await this.screen.getByText('Volver').tap();
  }
}
