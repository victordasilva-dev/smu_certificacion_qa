import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';

/** Login de la app: "¡Hola, inicia sesión o regístrate!", campo `login-rut`, `login-submit`, SSO Google. */
export class LoginScreen extends BaseScreen {
  get rut(): Locator {
    return this.screen.getByTestId('login-rut');
  }

  /** Segunda pantalla del login: la contraseña. */
  get contrasena(): Locator {
    return this.screen.getByTestId('login-password');
  }

  /** "Continuar" tras el RUT e "Ingresar" tras la contraseña comparten el testID `login-submit`. */
  get continuar(): Locator {
    return this.screen.getByTestId('login-submit');
  }

  get cerrar(): Locator {
    return this.screen.getByRole('button', { name: 'Cerrar' });
  }

  /** Desde el build instalado el 2026-11-16 el login pide correo (`login-email`) en vez de RUT. */
  get correo(): Locator {
    return this.screen.getByTestId('login-email');
  }

  /** El título es común a las dos variantes del login (RUT o correo). */
  get readyLocator(): Locator {
    return this.screen.getByText(/inicia sesi[oó]n o reg[ií]strate/i);
  }

  async tapCerrar(): Promise<void> {
    await this.cerrar.tap();
  }

  /**
   * RUT → Continuar → contraseña → Ingresar, y espera a que el login se cierre. El campo RUT puede
   * traer un RUT recordado de una sesión anterior: `fill` lo reemplaza (B2C-188).
   */
  async iniciarSesion(rut: string, contrasena: string): Promise<void> {
    await this.rut.fill(rut);
    await this.continuar.tap();
    await this.contrasena.waitFor({ state: 'visible', timeout: 30000 });
    await this.contrasena.fill(contrasena);
    await this.continuar.tap();
    await this.contrasena.waitFor({ state: 'hidden', timeout: 45000 });
  }
}
