import { Locator, Page } from '@playwright/test';

/**
 * Modal de inicio de sesión del storefront.
 *
 * **Este es el login real del sitio, no la pantalla `/login`.** `/login` sirve el formulario de
 * Salesforce, que pide correo electrónico y no acepta las credenciales del Excel de data; el
 * storefront autentica por este modal, que abre "Ingresa aquí" en el header y pide el RUT. La
 * distinción cuesta una corrida entera de descubrir, así que vive aquí y en [[header-simplificado]].
 *
 * Es un componente, no una página navegable: no extiende `BasePage`.
 *
 * El modal comparte `role="dialog"` con el del mini carro y con el de categorías, así que se
 * filtra por su propio contenido en lugar de confiar en el rol.
 */
export class LoginModal {
  readonly root: Locator;

  constructor(private readonly page: Page) {
    this.root = this.page
      .locator('[role="dialog"]')
      .filter({ has: this.page.getByRole('textbox', { name: /rut|contrase/i }) })
      .locator('visible=true')
      .first();
  }

  /** El botón del header que lo abre. Hay uno por form-factor en el DOM: se filtra por visible. */
  get disparador(): Locator {
    return this.page.locator('header button:has-text("Ingresa aquí")').locator('visible=true');
  }

  get campoRut(): Locator {
    return this.root.getByRole('textbox', { name: /rut/i });
  }

  get botonContinuar(): Locator {
    return this.root.getByRole('button', { name: /^continuar$/i });
  }

  get campoContrasena(): Locator {
    return this.root.getByRole('textbox', { name: /contrase/i });
  }

  get botonIngresar(): Locator {
    return this.root.getByRole('button', { name: /^ingresar$/i });
  }

  /**
   * Inicia sesión de punta a punta y espera a que el header lo refleje.
   *
   * El modal pide el RUT y la contraseña en dos pantallas encadenadas, y solo al terminar
   * desaparece el botón "Ingresa aquí" del header. Devolver antes dejaría al `test()` mirando un
   * Home que todavía se está rehidratando con la sesión nueva.
   */
  /**
   * Inicia sesión y devuelve el nombre registrado del cliente, leído de la respuesta del perfil
   * (`shopper-customers/.../customers/{id}`) que el sitio pide al autenticar. Es la fuente de
   * verdad para afirmar qué iniciales y qué saludo corresponden, sin declarar el nombre en la data
   * (B2C-69).
   */
  async iniciarSesionConPerfil(rut: string, contrasena: string): Promise<{ firstName: string; lastName: string }> {
    let perfil: { firstName: string; lastName: string } | null = null;
    const alResponder = async (r: import('@playwright/test').Response) => {
      if (!/\/shopper-customers\/v1\/organizations\/[^/]+\/customers\/[^/?]+\?/.test(r.url()) || !r.ok()) return;
      const cuerpo = await r.json().catch(() => null);
      if (cuerpo?.firstName) perfil = { firstName: cuerpo.firstName, lastName: cuerpo.lastName ?? '' };
    };
    this.page.on('response', alResponder);
    await this.iniciarSesion(rut, contrasena);
    for (let i = 0; i < 20 && !perfil; i++) await this.page.waitForTimeout(500);
    this.page.off('response', alResponder);
    if (!perfil) throw new Error('No llegó el perfil del cliente tras iniciar sesión');
    return perfil;
  }

  // --- Login por correo + OTP (desde el 2026-10-12 el modal pide solo correo) -----------------

  /** El modal "¡Hola, ingresa aquí!" con el campo de correo, o el paso del código. */
  get dialogo(): Locator {
    return this.page.getByRole('dialog').filter({ has: this.page.getByRole('textbox', { name: /correo electr[óo]nico|d[íi]gito 1 de/i }) });
  }

  get campoCorreo(): Locator {
    return this.page.getByRole('textbox', { name: /correo electr[óo]nico/i });
  }

  /**
   * Las seis casillas del código. Las mismas aparecen en el modal "Autenticación requerida" que
   * pide el sitio al cambiar a una dirección guardada con sesión iniciada.
   */
  get primerDigito(): Locator {
    return this.page.getByRole('textbox', { name: /d[íi]gito 1 de 6/i }).locator('visible=true');
  }

  get botonContinuarCodigo(): Locator {
    return this.page
      .getByRole('dialog')
      .filter({ has: this.page.getByRole('textbox', { name: /d[íi]gito 1 de/i }) })
      .getByRole('button', { name: /^continuar$/i });
  }

  /** "Ingresa con rostro o huella": aparece tras iniciar sesión y tapa el header. */
  get ofertaPasskey(): Locator {
    return this.page.getByRole('dialog').filter({ hasText: /ingresa con rostro o huella/i });
  }

  /** Abre el modal, escribe el correo y pide el código. Deja visibles las casillas del OTP. */
  async pedirCodigo(correo: string): Promise<void> {
    await this.disparador.click();
    await this.campoCorreo.waitFor({ state: 'visible', timeout: 30000 });
    await this.campoCorreo.fill(correo);
    await this.dialogo.getByRole('button', { name: /^ingresar$/i }).click();
    await this.primerDigito.waitFor({ state: 'visible', timeout: 30000 });
  }

  /** Escribe el código (las casillas avanzan solas) y confirma. Sirve también para "Autenticación requerida". */
  async escribirCodigo(codigo: string): Promise<void> {
    await this.primerDigito.click();
    await this.page.keyboard.type(codigo, { delay: 80 });
    await this.botonContinuarCodigo.click();
  }

  /** Completa el login con el código y espera a que el header lo refleje. */
  async ingresarCodigo(codigo: string): Promise<void> {
    await this.escribirCodigo(codigo);
    await this.disparador.waitFor({ state: 'hidden', timeout: 45000 });
    await this.descartarPasskey();
  }

  /** Cierra la oferta de passkey con "Ahora no" si aparece; si no aparece, no hace nada. */
  async descartarPasskey(): Promise<void> {
    const ahoraNo = this.ofertaPasskey.getByRole('button', { name: /^ahora no$/i });
    await ahoraNo.waitFor({ state: 'visible', timeout: 20000 }).then(() => ahoraNo.click(), () => {});
    await this.ofertaPasskey.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
  }

  async iniciarSesion(rut: string, contrasena: string): Promise<void> {
    await this.disparador.click();
    await this.campoRut.waitFor({ state: 'visible', timeout: 30000 });
    await this.campoRut.fill(rut);
    await this.botonContinuar.click();

    await this.campoContrasena.waitFor({ state: 'visible', timeout: 30000 });
    await this.campoContrasena.fill(contrasena);
    await this.botonIngresar.click();

    await this.disparador.waitFor({ state: 'hidden', timeout: 45000 });
    await this.page.waitForTimeout(2000);
  }
}
