import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';
import { LoginScreen } from './LoginScreen';

/**
 * Mi cuenta. Invitado: saludo "¡Hola! Qué bueno verte." y el botón `account-login`.
 * Con sesión (v1.0.7, 2026-10-09): avatar con las iniciales, "Hola, <nombre>", el nivel de socio,
 * y al final de la página "Cerrar sesión" (confirmación `account-sign-out-confirm`).
 */
export class MiCuentaScreen extends BaseScreen {
  get iniciarSesion(): Locator {
    return this.screen.getByTestId('account-login');
  }

  get readyLocator(): Locator {
    return this.iniciarSesion;
  }

  async tapIniciarSesion(): Promise<LoginScreen> {
    await this.iniciarSesion.tap();
    return new LoginScreen(this.screen, this.plataforma);
  }

  /** El saludo con el nombre del cliente ("Hola, Karl Paul …"): marca la página con sesión. */
  get saludo(): Locator {
    return this.screen.getByText(/^Hola, /);
  }

  get botonCerrarSesion(): Locator {
    return this.screen.getByText('Cerrar sesión');
  }

  get confirmarCierre(): Locator {
    return this.screen.getByTestId('account-sign-out-confirm');
  }

  /** "Cerrar sesión" (al final de la página) y la confirmación del modal. */
  async cerrarSesion(): Promise<void> {
    // La página es larga y "Cerrar sesión" puede quedar detrás de la barra de pestañas aunque el
    // árbol lo dé por visible: se desplaza de más y, si la confirmación no aparece, se insiste.
    for (let intento = 0; intento < 3 && !(await this.confirmarCierre.isVisible({ timeout: 0 })); intento++) {
      for (let i = 0; i < 12 && !(await this.botonCerrarSesion.isVisible({ timeout: 0 })); i++) await this.screen.swipe('up');
      await this.screen.swipe('up');
      await this.botonCerrarSesion.tap();
      await this.confirmarCierre.waitFor({ state: 'visible', timeout: 8000 }).catch(() => {});
    }
    await this.confirmarCierre.tap();
    // La página queda desplazada hacia abajo: se espera a que se vaya el saludo del cliente, no a
    // que aparezca "Iniciar sesión", que puede quedar fuera de pantalla.
    await this.confirmarCierre.waitFor({ state: 'hidden', timeout: 30000 });
    await this.saludo.waitFor({ state: 'hidden', timeout: 30000 });
  }
}
