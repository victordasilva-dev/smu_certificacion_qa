import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';

/**
 * Hoja "Algunos productos podrían agotarse" (B2C-122). Se abre sobre "Detalles de la dirección" al
 * confirmar una dirección de otra tienda abastecedora con el carro cargado. Explorado en Android,
 * build v1.0.7 (2026-10-14): X ("Cerrar"), imagen, título, texto y los botones "Sí, continuar" /
 * "No, gracias". Con "No, gracias" o la X la hoja se cierra y se vuelve a "Detalles de la
 * dirección"; con "Sí, continuar" el botón pasa a `busy` y, como invitado, se abre el prompt de
 * "Iniciar sesión o registrarse".
 */
export class AgotarseModal extends BaseScreen {
  get titulo(): Locator {
    return this.screen.getByText('Algunos productos podrían agotarse');
  }

  get readyLocator(): Locator {
    return this.titulo;
  }

  get texto(): Locator {
    return this.screen.getByText(/^Al cambiar la direcci[oó]n o tipo de despacho/);
  }

  get botonSi(): Locator {
    return this.screen.getByRole('button', { name: 'Sí, continuar' });
  }

  get botonNo(): Locator {
    return this.screen.getByRole('button', { name: 'No, gracias' });
  }

  /** La X de la hoja. No confundir con "Cerrar aviso", el banner del sistema. */
  get botonCerrar(): Locator {
    return this.screen.getByRole('button', { name: /^Cerrar$/ });
  }
}

/** Prompt "Iniciar sesión o registrarse" que aparece al invitado tras "Sí, continuar" (B2C-122). */
export class PromptLogin extends BaseScreen {
  get titulo(): Locator {
    return this.screen.getByText('Iniciar sesión o registrarse');
  }

  get readyLocator(): Locator {
    return this.titulo;
  }

  get botonCerrar(): Locator {
    return this.screen.getByRole('button', { name: /^Cerrar$/ });
  }
}
