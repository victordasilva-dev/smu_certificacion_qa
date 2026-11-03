import { Locator, Page } from '@playwright/test';

/**
 * Mini carro: el panel flotante que abre el ícono del carrito del header (B2C-147 D-020).
 *
 * Es un `role=dialog`, como el de login: se filtra por su encabezado "Mini carro".
 */
export class MiniCarro {
  readonly root: Locator;

  constructor(private readonly page: Page) {
    this.root = page.getByRole('dialog').filter({ hasText: /mini carro/i }).first();
  }

  get botonIrAPagar(): Locator {
    return this.root.getByRole('button', { name: /^ir a pagar$/i });
  }

  get subtotal(): Locator {
    return this.root.getByText(/^subtotal$/i).first();
  }

  async esperarAbierto(): Promise<this> {
    await this.root.waitFor({ state: 'visible', timeout: 30000 });
    return this;
  }

  /** Ícono del carrito del header que abre el mini carro. */
  get boton(): Locator {
    return this.page.locator('button[aria-label^="Mi carrito"]').locator('visible=true').first();
  }

  async abrir(): Promise<void> {
    await this.boton.click();
    await this.root.waitFor({ state: 'visible', timeout: 15000 });
  }

  /** "N un." del producto `nombre`: el contenedor más interno que lo contiene con una cantidad. */
  cantidadDe(nombre: string): Locator {
    return this.root
      .locator('div')
      .filter({ hasText: nombre })
      .filter({ hasText: /\d+ un\./ })
      .last()
      .getByText(/^\d+ un\.$/);
  }

  /** Nombres de los productos del mini carro: un botón "Eliminar <nombre>" por producto. */
  async productos(): Promise<string[]> {
    const nombres = await this.root
      .locator('button[aria-label^="Eliminar "]')
      .evaluateAll((bs) => bs.map((b) => (b.getAttribute('aria-label') ?? '').replace(/^eliminar\s+/i, '').trim()));
    return [...new Set(nombres.filter(Boolean))];
  }

  /** Monto del subtotal, en pesos (el getter `subtotal` devuelve el locator de la etiqueta). */
  async subtotalMonto(): Promise<number> {
    const texto = await this.root.getByText(/^subtotal$/i).first().locator('xpath=following-sibling::*[1]').innerText();
    return Number(texto.replace(/\D/g, ''));
  }

  get cerrar(): Locator {
    return this.root.getByRole('button', { name: /cerrar|close/i }).first();
  }
}
