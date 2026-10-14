import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export type Metodo = 'despacho' | 'retiro';

/**
 * Checkout "Datos de entrega" (Mis Envíos), `/checkout/entrega` — el objeto de B2C-148.
 *
 * La página tiene tres bloques: el resumen ("Enviaremos tu compra a:" / "Retira tu compra en:" con
 * "Fecha de entrega:" / "Fecha de retiro:"), el selector de ventana —una fila de días y una de
 * horarios, cada uno un `button` con `aria-pressed`— y el resumen de costos con "Ir a pagar".
 *
 * Lo comprobado en la exploración del 2026-10-13:
 * - Cambiar solo el día no llama a `/smu-delivery/.../window` ni muestra loader: refresca los
 *   horarios (llama a `/schedule`) y deja uno `aria-pressed`. El resumen no cambia.
 * - Elegir otro horario muestra un `.chakra-spinner` ("Loading...") ~1 s, luego skeletons, hace el
 *   `POST /window` y a los ~5 s pinta el toast (`role=status`) con su botón "Close", que dura ~4,4 s.
 * - Los botones de día y de horario no tienen nombre accesible propio: se ubican por la sección
 *   (el párrafo de la pregunta y su contenedor) y por su texto.
 */
export class DatosEntregaPage extends BasePage {
  protected readonly path = 'checkout/entrega';

  get titulo(): Locator {
    return this.page.getByRole('heading', { name: /^datos de entrega$/i });
  }

  get readyLocator(): Locator {
    return this.titulo;
  }

  /** "Enviaremos tu compra a:" o "Retira tu compra en:", según el método activo. */
  get etiquetaDestino(): Locator {
    return this.page.locator('main p').filter({ hasText: /^(enviaremos tu compra a|retira tu compra en):$/i }).first();
  }

  get destino(): Locator {
    return this.etiquetaDestino.locator('xpath=following-sibling::p[1]');
  }

  /** "Fecha de entrega:" (despacho) o "Fecha de retiro:" (retiro). */
  etiquetaFecha(metodo: Metodo): Locator {
    const texto = metodo === 'despacho' ? /^fecha de entrega:$/i : /^fecha de retiro:$/i;
    return this.page.locator('main p').filter({ hasText: texto }).first();
  }

  /** El valor del resumen: "Jueves, 15 de octubre, de 12:00 - 15:00 hrs". */
  fechaResumen(metodo: Metodo): Locator {
    return this.etiquetaFecha(metodo).locator('xpath=following-sibling::p[1]');
  }

  /**
   * El ícono ▾ de la tarjeta de dirección/tienda (B2C-189): `button[aria-label=Cambiar]` con
   * `data-testid="sf-entrega-change-location"`. Abre el drawer "Elige tu método de entrega" en la
   * pestaña del método activo, sin salir de `/checkout/entrega`.
   */
  get botonCambiarUbicacion(): Locator {
    return this.page.getByTestId('sf-entrega-change-location');
  }

  /**
   * El contenido de la página por CSS. Con el drawer abierto, Chakra marca el fondo `aria-hidden` y
   * los locators por rol (días, horarios) dejan de resolver: para comprobar que Mis Envíos sigue
   * igual detrás del drawer se compara este texto.
   */
  get contenido(): Locator {
    return this.page.locator('main').first();
  }

  /** La tarjeta rosada con el destino y el ícono ▾. */
  get tarjetaDestino(): Locator {
    return this.botonCambiarUbicacion.locator('xpath=..');
  }

  /** El bloque del resumen (destino + fecha), para la evidencia. */
  get bloqueResumen(): Locator {
    return this.etiquetaDestino.locator('xpath=ancestor::div[2]');
  }

  // --- Selector de ventana -------------------------------------------------------------------

  /** "¿Cuándo quieres recibir tu compra?" (despacho) / "¿Cuándo quieres retirar tu compra?" (retiro). */
  preguntaFecha(metodo: Metodo): Locator {
    const texto = metodo === 'despacho' ? /cu[áa]ndo quieres recibir tu compra/i : /cu[áa]ndo quieres retirar tu compra/i;
    return this.page.locator('main p').filter({ hasText: texto }).first();
  }

  get preguntaHorario(): Locator {
    return this.page.locator('main p').filter({ hasText: /cu[áa]l es tu horario de preferencia/i }).first();
  }

  /** Los botones de día: hermanos del contenedor que sigue a la pregunta. */
  dias(metodo: Metodo): Locator {
    return this.preguntaFecha(metodo).locator('xpath=following-sibling::*[1]').getByRole('button');
  }

  get horarios(): Locator {
    return this.preguntaHorario.locator('xpath=following-sibling::*[1]').getByRole('button');
  }

  diaSeleccionado(metodo: Metodo): Locator {
    return this.dias(metodo).and(this.page.locator('[aria-pressed="true"]'));
  }

  get horariosSeleccionados(): Locator {
    return this.horarios.and(this.page.locator('[aria-pressed="true"]'));
  }

  /** Primer día habilitado que no es el seleccionado. */
  otroDia(metodo: Metodo): Locator {
    return this.dias(metodo).and(this.page.locator('[aria-pressed="false"]:not([disabled])')).first();
  }

  /** Primer horario habilitado que no es el seleccionado. */
  get otroHorario(): Locator {
    return this.horarios.and(this.page.locator('[aria-pressed="false"]:not([disabled])')).first();
  }

  /** El selector completo (días + horarios), para la evidencia. */
  get selectorVentana(): Locator {
    return this.preguntaFecha('despacho')
      .or(this.preguntaFecha('retiro'))
      .locator('xpath=ancestor::div[2]');
  }

  /** El spinner "Loading..." que monta el sitio mientras guarda la ventana. */
  get loader(): Locator {
    return this.page.locator('.chakra-spinner').locator('visible=true');
  }

  // --- Costos y CTA --------------------------------------------------------------------------

  /** El monto junto a "Subtotal": comparten contenedor, pero no son hermanos directos. */
  get subtotal(): Locator {
    return this.page
      .locator('main p')
      .filter({ hasText: /^subtotal$/i })
      .first()
      .locator('xpath=..')
      .locator('p')
      .filter({ hasText: /^\$[\d.]+$/ })
      .first();
  }

  get botonIrAPagar(): Locator {
    return this.page.getByRole('button', { name: /^ir a pagar$/i });
  }

  get bloqueCostos(): Locator {
    return this.botonIrAPagar.locator('xpath=..');
  }

  /** El toast de confirmación o de error de la ventana. */
  toast(texto: RegExp): Locator {
    return this.page.getByRole('status').filter({ hasText: texto }).first();
  }
}

/** "$27.390" → 27390. */
export function pesos(texto: string): number {
  return Number(texto.replace(/[^\d]/g, ''));
}
