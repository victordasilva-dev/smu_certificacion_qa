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
}
