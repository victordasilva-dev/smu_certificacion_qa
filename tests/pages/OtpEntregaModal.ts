import { Locator, Page } from '@playwright/test';

/**
 * Modal "Autenticación requerida" que el sitio abre al cambiar la dirección de despacho o la tienda
 * de retiro con la sesión iniciada (B2C-125). Se reconoce por sus `data-testid` (`delivery-otp-*`):
 * el rol `dialog` lo comparten el drawer del Store Locator, el de login y este modal.
 *
 * Es un componente, no una página navegable: no extiende `BasePage`. Los `expect` los hace el test.
 */
export class OtpEntregaModal {
  readonly root: Locator;

  constructor(private readonly page: Page) {
    this.root = page.getByTestId('delivery-otp-modal').locator('visible=true').first();
  }

  get cerrar(): Locator {
    return this.root.getByTestId('delivery-otp-close');
  }

  get titulo(): Locator {
    return this.root.getByText(/^autenticaci[oó]n requerida$/i);
  }

  get leyenda(): Locator {
    return this.root.getByText(/enviamos un c[oó]digo de verificaci[oó]n al correo/i);
  }

  get campos(): Locator {
    return this.root.locator('[data-testid^="delivery-otp-digit-"]');
  }

  campo(n: number): Locator {
    return this.root.getByTestId(`delivery-otp-digit-${n}`);
  }

  get temporizador(): Locator {
    return this.root.getByText(/pide uno nuevo en/i);
  }

  get reenviar(): Locator {
    return this.root.getByTestId('delivery-otp-resend');
  }

  get importante(): Locator {
    return this.root.getByText(/^importante:\s*aseg[uú]rate de ingresar correctamente el c[oó]digo de verificaci[oó]n/i);
  }

  get continuar(): Locator {
    return this.root.getByTestId('delivery-otp-continue');
  }

  get codigoInvalido(): Locator {
    return this.root.getByText(/c[oó]digo inv[aá]lido/i);
  }

  /** Toast del sitio (Chakra): se busca por su texto, en cualquier parte de la página. */
  toast(texto: RegExp): Locator {
    return this.page.locator('[role="alert"], [role="status"], .chakra-alert').filter({ hasText: texto }).locator('visible=true').first();
  }

  get toastEnviado(): Locator {
    return this.toast(/el c[oó]digo de verificaci[oó]n ha sido enviado/i);
  }

  async esperarAbierto(timeout = 60000): Promise<this> {
    await this.root.waitFor({ state: 'visible', timeout });
    return this;
  }

  /** Correo enmascarado tal como lo muestra la leyenda (`dau****@a***.com`). */
  async correoMostrado(): Promise<string> {
    const texto = (await this.leyenda.innerText()).replace(/\s+/g, ' ');
    return texto.match(/[^\s@]+@[^\s@]+\.[a-z]+/i)?.[0] ?? '';
  }

  /** Segundos que muestra el temporizador ("Pide uno nuevo en 97s"), o `null` si ya no hay contador. */
  async segundos(): Promise<number | null> {
    const t = await this.temporizador.innerText({ timeout: 1500 }).catch(() => '');
    const m = t.match(/en\s+(\d+)\s*s/i);
    return m ? Number(m[1]) : null;
  }

  async valores(): Promise<string> {
    return this.campos.evaluateAll((els) => els.map((e) => (e as HTMLInputElement).value).join(''));
  }

  /** Escribe dígito a dígito desde el primer campo, como lo haría una persona (el foco avanza solo). */
  async escribir(digitos: string): Promise<void> {
    await this.campo(0).click();
    await this.page.keyboard.type(digitos, { delay: 40 });
    if ((await this.valores()) !== digitos) {
      for (let i = 0; i < digitos.length; i++) await this.campo(i).fill(digitos[i]);
    }
  }

  async borrar(): Promise<void> {
    for (let i = 5; i >= 0; i--) await this.campo(i).fill('');
  }

  /** Color del borde de un campo (`rgb(r, g, b)`): rojo cuando el código fue rechazado. */
  async colorBorde(n = 0): Promise<number[]> {
    const c = await this.campo(n).evaluate((e) => getComputedStyle(e).borderColor);
    return (c.match(/\d+/g) ?? []).slice(0, 3).map(Number);
  }

  async campoConFoco(): Promise<number> {
    return this.campos.evaluateAll((els) => els.findIndex((e) => e === document.activeElement));
  }
}
