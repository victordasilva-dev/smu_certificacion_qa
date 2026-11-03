import { Locator, Page } from '@playwright/test';

/**
 * Modal "¿Te gustaría algo en especial?" (instrucciones al picker) de un ítem del carro (B2C-45).
 *
 * Es un componente, no una página: no extiende `BasePage`. Observado en DEV (2026-10-20): X
 * "Cerrar las instrucciones al picker", miniatura, tienda ("Unimarc Mirador"), nombre y cantidad
 * ("1 un."), campo "Instrucciones" con contador "N / 150 caracteres", y el CTA "Agregar
 * comentario" (nuevo) o "Confirmar" + "Eliminar comentario" (edición). La confirmación de
 * borrado es otro diálogo: "Eliminar comentario · ¿Deseas eliminar tu instrucción?".
 */
export class InstruccionesModal {
  constructor(private readonly page: Page) {}

  get root(): Locator {
    return this.page.getByRole('dialog').filter({ hasText: /te gustar[íi]a algo en especial/i });
  }

  get cerrar(): Locator {
    return this.root.getByRole('button', { name: /cerrar las instrucciones/i });
  }

  get campo(): Locator {
    return this.root.getByRole('textbox', { name: /^instrucciones$/i });
  }

  get contador(): Locator {
    return this.root.getByText(/^\d+ \/ 150 caracteres$/);
  }

  get agregar(): Locator {
    return this.root.getByRole('button', { name: /^agregar( comentario)?$/i });
  }

  get confirmar(): Locator {
    return this.root.getByRole('button', { name: /^confirmar$/i });
  }

  get eliminarComentario(): Locator {
    return this.root.getByRole('button', { name: /^eliminar comentario$/i });
  }

  /** El diálogo de confirmación del borrado: un `alertdialog` "Eliminar comentario". */
  get confirmacionBorrado(): Locator {
    return this.page.getByRole('alertdialog').filter({ hasText: /eliminar tu instrucci[oó]n/i });
  }

  get siEliminar(): Locator {
    return this.confirmacionBorrado.getByRole('button', { name: /^s[íi], eliminar$/i });
  }

  get noGracias(): Locator {
    return this.confirmacionBorrado.getByRole('button', { name: /^no, gracias$/i });
  }

  // --- En el shelf del carro -------------------------------------------------------------------

  get abrirNuevo(): Locator {
    return this.page.getByRole('button', { name: /^agregar instrucciones$/i }).first();
  }

  /** Su nombre accesible incluye la nota ("Nota: … Editar instrucciones"): sin anclar al inicio. */
  get abrirEdicion(): Locator {
    return this.page.getByRole('button', { name: /editar instrucciones/i }).first();
  }

  /**
   * La nota del shelf: "Nota:" y el texto van en elementos hermanos, así que se toma el
   * contenedor de ambos. Su texto empieza por "Nota:" y puede seguir con "Editar instrucciones".
   */
  get nota(): Locator {
    return this.page.locator('main').last().getByText(/^Nota:/).first().locator('xpath=..');
  }

  toast(texto: RegExp): Locator {
    return this.page.getByRole('status').filter({ hasText: texto }).first();
  }

  async abrir(): Promise<this> {
    await this.abrirNuevo.click();
    await this.root.waitFor({ state: 'visible', timeout: 15000 });
    return this;
  }

  async editar(): Promise<this> {
    await this.abrirEdicion.click();
    await this.root.waitFor({ state: 'visible', timeout: 15000 });
    return this;
  }

  /** Escribe la instrucción reemplazando lo que hubiera. */
  async escribir(texto: string): Promise<void> {
    await this.campo.click();
    await this.campo.fill('');
    await this.campo.pressSequentially(texto, { delay: 15 });
  }
}
