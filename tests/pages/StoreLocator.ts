import { Locator, Page } from '@playwright/test';

/**
 * Drawer del Store Locator, el que abre el selector de forma de entrega del header.
 *
 * Es un componente, no una página navegable: no extiende `BasePage`. Se usa en B2C-24 para dejar
 * el header con una forma de entrega elegida, que es la precondición del TC-B2C24-D-003 — el caso
 * comprueba que ese estado sobreviva a la contracción del header.
 *
 * **El drawer comparte `role="dialog"` con el modal de categorías**, así que el rol solo no
 * alcanza: un `getByRole('dialog')` pelado da por bueno el que esté abierto y el TC pasaría sin
 * haber mirado el componente correcto. Se filtra por su propio encabezado.
 */
export class StoreLocator {
  readonly root: Locator;

  constructor(private readonly page: Page) {
    this.root = page
      .locator('[role="dialog"]')
      .filter({ hasText: /elige tu m[ée]todo de entrega|agregar nueva direcci[óo]n|detalles de la direcci[óo]n/i })
      .locator('visible=true')
      .first();
  }

  get tabDespachoDomicilio(): Locator {
    return this.root.getByRole('button', { name: /despacho a domicilio/i });
  }

  get tabRetiroEnTienda(): Locator {
    return this.root.getByRole('button', { name: /retiro en tienda/i });
  }

  get campoDireccion(): Locator {
    return this.root.getByRole('textbox').first();
  }

  /** Sugerencias del autocompletado de direcciones. */
  get sugerencias(): Locator {
    return this.root.locator('button, li').filter({ hasText: /^\s*\S/ });
  }

  get botonContinuar(): Locator {
    return this.root.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i });
  }

  get botonAgregarDireccion(): Locator {
    return this.root.getByRole('button', { name: /^agregar direcci[óo]n$/i });
  }

  /**
   * Elige una dirección de despacho de punta a punta y espera a que el drawer se cierre.
   *
   * Son cuatro pantallas encadenadas —búsqueda, mapa, detalles y confirmación— y el drawer solo
   * se cierra al final, cuando el header ya refleja la elección. Devolver antes dejaría al `test()`
   * midiendo un header que todavía no cambió.
   *
   * `terminoBusqueda` no sale del Excel de data: la planilla de B2C-24 no declara ningún token de
   * dirección ni de tienda, así que el `test()` lo pasa y lo deja dicho en su Observación. El
   * valor concreto no altera lo que el caso verifica —que el estado elegido sobreviva al scroll—,
   * pero la data del caso debería vivir en la planilla como cualquier otra.
   */
  async elegirDespachoADomicilio(terminoBusqueda: string): Promise<void> {
    await this.campoDireccion.fill(terminoBusqueda);

    // El autocompletado consulta un servicio externo: hay que esperar a que la lista se pinte.
    const sugerencia = this.root
      .locator('button')
      .filter({ hasText: new RegExp(terminoBusqueda.split(' ')[0], 'i') })
      .first();
    await sugerencia.waitFor({ state: 'visible', timeout: 30000 });
    await sugerencia.click();

    await this.botonContinuar.waitFor({ state: 'visible', timeout: 30000 });
    await this.botonContinuar.click();

    await this.botonAgregarDireccion.waitFor({ state: 'visible', timeout: 30000 });
    await this.botonAgregarDireccion.click();

    // El drawer se cierra solo cuando la forma de entrega quedó aplicada.
    await this.root.waitFor({ state: 'hidden', timeout: 45000 });
    await this.page.waitForTimeout(1500);
  }
}
