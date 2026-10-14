import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';

/**
 * Diálogo del sistema operativo que pide el permiso de ubicación (no es de la app). Android 16 del
 * emulador (2026-10-09): "Allow Unimarc to access this device’s location?" con "While using the
 * app", "Only this time" y "Don’t allow", en `com.android.permissioncontroller`. El idioma del
 * texto depende del sistema; los identificadores no.
 */
export class PermisoUbicacionDialog extends BaseScreen {
  get mensaje(): Locator {
    return this.segun({
      android: this.screen.getByTestId('com.android.permissioncontroller:id/permission_message'),
      ios: this.screen.getByText(/ubicaci[oó]n|location/i),
    });
  }

  get readyLocator(): Locator {
    return this.mensaje;
  }

  get permitir(): Locator {
    return this.segun({
      android: this.screen.getByTestId('com.android.permissioncontroller:id/permission_allow_foreground_only_button'),
      ios: this.screen.getByText(/mientras se usa|while using/i),
    });
  }

  get denegar(): Locator {
    return this.segun({
      android: this.screen.getByTestId('com.android.permissioncontroller:id/permission_deny_button'),
      ios: this.screen.getByText(/no permitir|don.t allow/i),
    });
  }

  async aceptar(): Promise<void> {
    await this.permitir.tap();
  }

  async rechazar(): Promise<void> {
    await this.denegar.tap();
  }
}
