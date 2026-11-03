import { Locator, Page } from '@playwright/test';

/**
 * Modal "¿Recibe alguien más?" de Datos de entrega (B2C-190): registra a un tercero que recibe o
 * retira el pedido.
 *
 * Es un componente, no una página: no extiende `BasePage`. Lo observado en DEV (2026-10-19):
 * X "Cerrar", título, texto de seguridad, campos Rut* (placeholder 12.345.678-9, se autoformatea
 * con puntos y guion), Nombre* (maxlength 30), Apellido* y Teléfono* con prefijo fijo "+569" y
 * 8 dígitos (maxlength 8, placeholder "XXXX XXXX"), y un único CTA "Confirmar" deshabilitado
 * hasta que todo es válido. El error de cada campo es "Ingrese un valor válido".
 */
export class RecibeAlguienMasModal {
  constructor(private readonly page: Page) {}

  /** La tarjeta de Datos de entrega que abre el modal. */
  get disparador(): Locator {
    return this.page.getByText(/^¿recibe alguien m[áa]s\?$/i).first();
  }

  get root(): Locator {
    return this.page.getByRole('dialog', { name: /recibe alguien m[áa]s/i });
  }

  get cerrar(): Locator {
    return this.root.getByRole('button', { name: /^cerrar$/i });
  }

  get titulo(): Locator {
    return this.root.getByRole('banner');
  }

  get textoSeguridad(): Locator {
    return this.root.getByText(/por tu seguridad/i);
  }

  get rut(): Locator {
    return this.root.getByRole('textbox', { name: /^rut/i });
  }

  get nombre(): Locator {
    return this.root.getByRole('textbox', { name: /^nombre/i });
  }

  get apellido(): Locator {
    return this.root.getByRole('textbox', { name: /^apellido/i });
  }

  get telefono(): Locator {
    return this.root.getByRole('textbox', { name: /^tel[ée]fono/i });
  }

  /** El prefijo fijo del teléfono ("+569"). */
  get prefijoTelefono(): Locator {
    return this.root.getByText(/^\+569$/);
  }

  /** El CTA del modal. En DEV se llama "Confirmar"; la planilla lo nombra "Guardar datos de tercero". */
  get cta(): Locator {
    return this.root.getByRole('contentinfo').getByRole('button').first();
  }

  get loRecibireYo(): Locator {
    return this.root.getByRole('button', { name: /lo recibir[ée] yo/i });
  }

  /** Nombre accesible de cada campo, para ubicar su grupo. */
  private static readonly NOMBRES = {
    rut: /^rut/i,
    nombre: /^nombre/i,
    apellido: /^apellido/i,
    telefono: /^tel[ée]fono/i,
  } as const;

  /**
   * El grupo (etiqueta + campo + error) de un campo. El `has` se resuelve relativo al grupo, por
   * eso se construye desde `page` y no desde `root`: un locator que empieza en el diálogo no se
   * encuentra dentro de su propio grupo.
   */
  grupo(campo: keyof typeof RecibeAlguienMasModal.NOMBRES): Locator {
    return this.root
      .getByRole('group')
      .filter({ has: this.page.getByRole('textbox', { name: RecibeAlguienMasModal.NOMBRES[campo] }) });
  }

  /** "Ingrese un valor válido" bajo un campo. */
  errorDe(campo: keyof typeof RecibeAlguienMasModal.NOMBRES): Locator {
    return this.grupo(campo).getByText(/ingrese un valor v[áa]lido/i);
  }

  async abrir(): Promise<this> {
    await this.disparador.click();
    await this.root.waitFor({ state: 'visible', timeout: 20000 });
    return this;
  }

  /** Escribe en el campo tecla a tecla (el campo formatea mientras se escribe). */
  async escribir(campo: Locator, valor: string): Promise<void> {
    await campo.click();
    await campo.fill('');
    await campo.pressSequentially(valor, { delay: 40 });
  }

  /** Sale del campo enfocando el título del modal. */
  async salir(): Promise<void> {
    await this.titulo.click();
    await this.page.waitForTimeout(500);
  }
}
