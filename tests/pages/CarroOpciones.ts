import { Locator, Page } from '@playwright/test';

/**
 * Lo que el carro (B2C-37) agrega sobre `CarroPage`: el menú "Más opciones" de Mobile, el modal
 * "Vaciar el carro", el toast de monto mínimo y la tarjeta de totales.
 *
 * Es un componente, no una página: no extiende `BasePage`. Observado en DEV (2026-10-20): en
 * Desktop "Guardar como lista" y "Vaciar carro" son botones bajo la tarjeta de totales; en Mobile
 * viven en el menú ⋯ ("Más opciones", role menu). Bajo el mínimo, el CTA cambia su texto a
 * "Mínimo de compra $20.000" y se deshabilita, y aparece el toast "¡Solo te faltan $X para ir a
 * pagar!" con su X "Cerrar el aviso", que en Mobile intercepta el clic sobre "Más opciones".
 */
export class CarroOpciones {
  constructor(private readonly page: Page) {}

  get main(): Locator {
    return this.page.locator('main').last();
  }

  get masOpciones(): Locator {
    return this.page.getByRole('button', { name: /^m[áa]s opciones$/i });
  }

  get menu(): Locator {
    return this.page.getByRole('menu');
  }

  menuItem(nombre: RegExp): Locator {
    return this.page.getByRole('menuitem', { name: nombre });
  }

  /** El CTA de la tarjeta de totales, en cualquiera de sus dos textos. */
  get cta(): Locator {
    return this.page.getByRole('button', { name: /^(continuar con la entrega|m[íi]nimo de compra .*)$/i }).first();
  }

  get guardarComoLista(): Locator {
    return this.page.getByRole('button', { name: /^guardar como lista$/i }).locator('visible=true').first();
  }

  get dialogoGuardarLista(): Locator {
    return this.page.getByRole('dialog').filter({ hasText: /agregar como lista|crear nueva lista/i });
  }

  get acordeonDisponibles(): Locator {
    return this.page.getByRole('button', { name: /^mis productos \d+ unidad(es)?$/i });
  }

  get lineaSubtotal(): Locator {
    return this.main.getByText(/^subtotal$/i);
  }

  get lineaSubtotalUnipay(): Locator {
    return this.page.getByText(/^subtotal con unipay$/i);
  }

  // --- Toast de monto mínimo ------------------------------------------------------------------

  get toastMinimo(): Locator {
    return this.page.getByRole('status').filter({ hasText: /solo te faltan/i }).first();
  }

  get cerrarToast(): Locator {
    return this.page.getByRole('button', { name: /^cerrar el aviso$/i });
  }

  /** El faltante que anuncia el toast, en pesos. */
  async faltante(): Promise<number> {
    const t = await this.toastMinimo.innerText();
    return Number((t.match(/\$\s*([\d.]+)/)?.[1] ?? '').replace(/\./g, ''));
  }

  async cerrarToastSiEsta(): Promise<void> {
    if (await this.cerrarToast.first().isVisible().catch(() => false)) {
      await this.cerrarToast.first().click({ timeout: 5000 }).catch(() => {});
      await this.page.waitForTimeout(500);
    }
  }

  // --- Toast de alcohol (observado 2026-10-20) ------------------------------------------------

  get toastAlcohol(): Locator {
    return this.page.getByRole('status').filter({ hasText: /informaci[óo]n importante/i }).locator('visible=true').first();
  }

  get cerrarToastAlcohol(): Locator {
    return this.toastAlcohol.getByRole('button').first();
  }

  // --- Estado de error de carga (CRT-020) -----------------------------------------------------

  get tituloError(): Locator {
    return this.page.getByText(/^no pudimos mostrar tu carro$/i).locator('visible=true').first();
  }

  get mensajeError(): Locator {
    return this.page.getByText(/tenemos problemas con cargar tus productos\. por favor, int[ée]ntalo otra vez\./i).locator('visible=true').first();
  }

  get codigoError(): Locator {
    return this.page.getByText(/^error: crt-020$/i).locator('visible=true').first();
  }

  get reintentar(): Locator {
    return this.page.getByRole('button', { name: /^reintentar$/i }).locator('visible=true').first();
  }

  get volverAlInicio(): Locator {
    return this.page.getByRole('button', { name: /^volver al inicio$/i }).or(this.page.getByRole('link', { name: /^volver al inicio$/i })).locator('visible=true').first();
  }

  // --- Modal "Vaciar el carro" ----------------------------------------------------------------

  get modalVaciar(): Locator {
    return this.page.getByRole('alertdialog').filter({ hasText: /vaciar el carro/i });
  }

  get botonSiEliminar(): Locator {
    return this.modalVaciar.getByRole('button', { name: /^s[íi], eliminar$/i });
  }

  get botonNoGracias(): Locator {
    return this.modalVaciar.getByRole('button', { name: /^no, gracias$/i });
  }

  get botonCerrarModal(): Locator {
    return this.modalVaciar.getByRole('button', { name: /^cerrar$/i });
  }

  /** Abre "Vaciar el carro": en Desktop desde su botón, en Mobile desde el menú ⋯. */
  async abrirVaciar(movil: boolean): Promise<void> {
    if (movil) {
      await this.abrirMenu();
      await this.menuItem(/^vaciar carro$/i).click();
    } else {
      await this.page.getByRole('button', { name: /^vaciar carro$/i }).click();
    }
    await this.modalVaciar.waitFor({ state: 'visible', timeout: 15000 });
  }

  async abrirMenu(): Promise<void> {
    await this.cerrarToastSiEsta();
    await this.masOpciones.click({ timeout: 15000 });
    await this.menu.waitFor({ state: 'visible', timeout: 10000 });
  }

  // --- Estado vacío ---------------------------------------------------------------------------

  get tituloVacio(): Locator {
    return this.page.getByText(/^¡tu carro est[áa] vac[íi]o!$/i);
  }

  get subtituloVacio(): Locator {
    return this.page.getByText(/descubre todas las ofertas que tenemos para ti/i);
  }

  get irAComprar(): Locator {
    return this.page.getByRole('button', { name: /^ir a comprar$/i });
  }

  // --- Ítems ----------------------------------------------------------------------------------

  /** Nombres de los ítems en el orden en que se listan ("Eliminar <nombre>" sin repetir). */
  async nombresEnOrden(): Promise<string[]> {
    const nombres = await this.page.getByRole('button', { name: /^eliminar .+/i }).evaluateAll((bs) =>
      bs.map((b) => (b.getAttribute('aria-label') ?? '').replace(/^eliminar\s+/i, '').trim()),
    );
    return [...new Set(nombres.filter(Boolean))];
  }

  // --- Membresía ------------------------------------------------------------------------------

  get bannerMembresia(): Locator {
    return this.page.getByText(/siendo diamante/i).first();
  }
}
