import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';

/**
 * Hoja "Combina la promo" de la app (B2C-74), abierta desde el CTA del mensaje de promo del carro
 * (B2C-50). Verificado en Android v1.0.7 (2026-10-16): "✕", título, barra + "N / M productos",
 * tarjetas de las variantes combinables con "En carro 1 un." o "Agregar", y "Volver al inicio".
 * Sin testIDs: se ubica por textos. Durante la animación de entrada el árbol puede volver vacío.
 */
export class CombinaLaPromoModal extends BaseScreen {
  get titulo(): Locator {
    return this.screen.getByText('Combina la promo');
  }

  get readyLocator(): Locator {
    return this.titulo;
  }

  /** "1 / 2 productos". */
  get contador(): Locator {
    return this.screen.getByText(/^\d+ \/ \d+ productos$/);
  }

  /** "Agregar" de las variantes que aún no están en el carro. */
  get botonesAgregar(): Locator {
    return this.screen.getByText('Agregar', { exact: true });
  }

  get enCarro(): Locator {
    return this.screen.getByText('En carro', { exact: true });
  }

  async cerrar(): Promise<void> {
    await this.screen.getByText('✕').first().tap();
  }
}
