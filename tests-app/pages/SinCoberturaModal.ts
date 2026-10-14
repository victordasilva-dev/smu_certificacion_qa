import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';

/**
 * Hoja "Aún no llegamos a esta dirección" (B2C-123), que la app abre al confirmar una dirección
 * fuera de zona. Explorada en Android, build v1.0.7 (2026-10-14): X ("Cerrar"), título, mensaje
 * ("…a una de nuestras tiendas Unimarc." — con punto final) y los botones "Continuar con esta
 * dirección" / "Cambiar método de entrega".
 *
 * Al confirmar una tienda de retiro fuera de zona la app abre en cambio "Esta tienda aún no está
 * disponible para retiro" con "Continuar con esta tienda": `tituloRetiro` lo expone para la evidencia.
 */
export class SinCoberturaModal extends BaseScreen {
  get titulo(): Locator {
    return this.screen.getByText('Aún no llegamos a esta dirección');
  }

  get readyLocator(): Locator {
    return this.titulo;
  }

  get mensaje(): Locator {
    return this.screen.getByText(/^Revisa que est[ée] correcta/);
  }

  get continuar(): Locator {
    return this.screen.getByRole('button', { name: 'Continuar con esta dirección' });
  }

  get cambiarMetodo(): Locator {
    return this.screen.getByRole('button', { name: 'Cambiar método de entrega' });
  }

  get botonCerrar(): Locator {
    return this.screen.getByRole('button', { name: /^Cerrar$/ });
  }

  /** La variante de retiro: "Esta tienda aún no está disponible para retiro". */
  get tituloRetiro(): Locator {
    return this.screen.getByText(/^Esta tienda a[uú]n no est[aá] disponible para retiro$/);
  }

  /** Toast al agregar con la dirección sin cobertura ("Cambia tu dirección de despacho…" en v1.0.7). */
  toast(texto: RegExp): Locator {
    return this.screen.getByText(texto);
  }
}
