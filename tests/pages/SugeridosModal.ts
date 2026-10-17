import { Locator, Page } from '@playwright/test';

/**
 * Modal "¡Que no se te olviden!" (B2C-41), que se abre sobre el carro al tocar "Continuar con la
 * entrega" cuando hay sugerencias. Es un drawer de Chakra con `data-testid="sf-suggested-drawer"`.
 *
 * Pestañas (`sf-suggested-tab`, role=tab con `aria-selected`): "Lo que más compro" (My Usuals) y
 * "Mis favoritos" son de B2C-41; "Imperdibles" la agrega B2C-308, va primera y es la activa por
 * defecto cuando la colección tiene productos.
 *
 * El contenido de la pestaña activa no está en un `tabpanel`: las cards cuelgan directo del cuerpo
 * del modal. Cada card tiene un enlace con `aria-label` = nombre (con la imagen), el corazón
 * "Guardar en favoritos", el precio, el nombre (enlace y un `h3` oculto) y, abajo, "Agregar" o el
 * stepper "En carro / N un." con "Disminuir/Aumentar cantidad".
 */
export class SugeridosModal {
  readonly root: Locator;

  constructor(private readonly page: Page) {
    this.root = page.getByTestId('sf-suggested-drawer');
  }

  get titulo(): Locator {
    return this.root.getByText(/^¡?que no se te olviden!?$/i);
  }

  get pestanas(): Locator {
    return this.root.getByTestId('sf-suggested-tab');
  }

  pestana(nombre: RegExp): Locator {
    return this.root.getByRole('tab', { name: nombre });
  }

  get loQueMasCompro(): Locator {
    return this.pestana(/^lo que m[áa]s compro$/i);
  }

  get misFavoritos(): Locator {
    return this.pestana(/^mis favoritos$/i);
  }

  get pestanaActiva(): Locator {
    return this.root.locator('[data-testid="sf-suggested-tab"][aria-selected="true"]');
  }

  get continuar(): Locator {
    return this.root.getByTestId('sf-suggested-continue');
  }

  /** El cuerpo con scroll del drawer (el área de productos). */
  get cuerpo(): Locator {
    return this.root.locator('.chakra-modal__body');
  }

  /**
   * Imagen-enlace de cada card de la pestaña activa: una por producto, con `aria-label` = nombre.
   * Sin `:has(img)`: un producto sin foto muestra un placeholder "Imagen no disponible".
   */
  get cards(): Locator {
    return this.root.locator('a[aria-label]');
  }

  /** Nombres de los productos de la pestaña activa (sin repetir). */
  async nombres(): Promise<string[]> {
    const ns = await this.cards.evaluateAll((as) => as.map((a) => (a.getAttribute('aria-label') ?? '').trim()));
    return [...new Set(ns.filter(Boolean))];
  }

  /** "Agregar" de las cards de la pestaña activa. */
  get botonesAgregar(): Locator {
    return this.root.getByRole('button', { name: /^agregar$/i });
  }

  /** Nombres de las pestañas en el orden en que se muestran. */
  async nombresPestanas(): Promise<string[]> {
    return (await this.pestanas.allTextContents()).map((t) => t.trim());
  }

  /** Abre la pestaña y espera a que quede seleccionada y con productos. */
  async abrirPestana(pestana: Locator): Promise<void> {
    await pestana.click();
    await pestana.and(this.root.locator('[aria-selected="true"]')).waitFor({ state: 'visible', timeout: 15000 });
    await this.cards.first().waitFor({ state: 'visible', timeout: 15000 });
    await this.page.waitForTimeout(1000);
  }

  /** href de cada producto de la pestaña activa (sin repetir). */
  async hrefs(): Promise<string[]> {
    const hs = await this.cards.evaluateAll((as) => as.map((a) => a.getAttribute('href') ?? ''));
    return [...new Set(hs.filter(Boolean))];
  }

  /** Posiciones X distintas de las cards: 2 en una grilla de dos columnas. */
  async columnas(): Promise<number> {
    const xs = await this.cards.evaluateAll((as) => as.map((a) => Math.round(a.getBoundingClientRect().left)));
    return new Set(xs).size;
  }

  /** La card del producto `nombre`: el ancestro más cercano de su enlace con "Agregar" o "En carro". */
  card(nombre: string): Locator {
    return this.root
      .locator(`a[aria-label="${nombre.replace(/"/g, '\\"')}"]`)
      .first()
      .locator('xpath=ancestor::div[.//button[normalize-space()="Agregar"] or .//p[normalize-space()="En carro"]][1]');
  }
}
