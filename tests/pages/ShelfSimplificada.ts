import { Locator, Page } from '@playwright/test';
import { BuscadorModal } from './BuscadorModal';

/** Posición vertical (en px de documento) de cada slot de la shelf; `null` si no se renderiza. */
export interface SlotsDeLaShelf {
  imagen: number | null;
  favoritos: number | null;
  cucarda: number | null;
  precio: number | null;
  nombre: number | null;
  formato: number | null;
  agregar: number | null;
}

/**
 * Shelf **simplificada** de producto — el objeto de la HU B2C-64.
 *
 * Es la misma tarjeta que modela [[shelf-producto]] para la PLP y el SRP, pero servida dentro del
 * modal de buscador y de los modales de promoción, y **sin los dos accionables de la completa**:
 * no trae "Combina la promo" ni "Ver similares". Por eso no reutiliza `ShelfProducto`: aquel se
 * ancla en `main`, y estas shelves viven dentro del modal.
 *
 * Es un componente, no una página: no extiende `BasePage`.
 *
 * El ancla es la misma que en la shelf completa —el botón de favoritos, lo único inequívoco de
 * cada tarjeta— y la shelf es el `div` que lo contiene dos niveles más arriba. Las clases de
 * Emotion (`css-1ti2b8v`) cambian con cada build y no sirven.
 *
 * **El contenedor depende del form-factor**, y por eso la clase recibe el `BuscadorModal` en vez
 * de construir su propio locator: en Desktop el panel cuelga del `header`, y en Mobile el
 * buscador se monta en un portal a pantalla completa que se lleva el input consigo.
 */
export class ShelfSimplificada {
  constructor(
    private readonly page: Page,
    private readonly buscador: BuscadorModal,
  ) {}

  /** Todas las shelves del modal, en el orden en que se renderizan. */
  get todas(): Locator {
    return this.buscador.contenedor
      .locator('div:has(> div > button[aria-label="Guardar en favoritos"])')
      .locator('visible=true');
  }

  enIndice(indice: number): ShelfSimplificadaItem {
    return new ShelfSimplificadaItem(this.page, this.todas.nth(indice));
  }

  async cantidad(): Promise<number> {
    return this.todas.count();
  }

  /** La shelf de un SKU, por el enlace a su PDP o por el `src` de su imagen. */
  porSku(sku: string): ShelfSimplificadaItem {
    return new ShelfSimplificadaItem(
      this.page,
      this.todas.filter({ has: this.page.locator(`a[href*="${sku}"], img[src*="${sku}"]`) }).first(),
    );
  }
}

/** Una shelf concreta dentro del modal. */
export class ShelfSimplificadaItem {
  constructor(
    private readonly page: Page,
    readonly root: Locator,
  ) {}

  get imagen(): Locator {
    return this.root.locator('img');
  }

  get favoritos(): Locator {
    return this.root.locator('button[aria-label="Guardar en favoritos"]');
  }

  /** El botón que lleva el nombre: su texto es "Marca | Nombre". */
  get nombre(): Locator {
    return this.root.locator('button').filter({ hasText: ' | ' }).first();
  }

  get agregar(): Locator {
    return this.root.getByRole('button', { name: /^agregar$/i });
  }

  /**
   * La cucarda de texto `texto` sobre la imagen: su recuadro, el de la imagen y el de favoritos,
   * y el color de su texto. Con eso el `test()` decide la posición (esquina superior izquierda),
   * que no tape favoritos y que el estilo sea el configurado.
   */
  async cucarda(texto: string): Promise<{
    cucarda: { x: number; y: number; w: number; h: number } | null;
    imagen: { x: number; y: number; w: number; h: number };
    favoritos: { x: number; y: number; w: number; h: number };
    colorTexto: string | null;
  }> {
    return this.root.evaluate((shelf, t) => {
      const caja = (el: Element) => {
        const r = el.getBoundingClientRect();
        return { x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height) };
      };
      const cuc = [...shelf.querySelectorAll('*')].find(
        (e) => e.children.length === 0 && (e.textContent ?? '').trim().toLowerCase() === t.toLowerCase(),
      );
      return {
        cucarda: cuc ? caja(cuc) : null,
        imagen: caja(shelf.querySelector('img')!),
        favoritos: caja(shelf.querySelector('button[aria-label="Guardar en favoritos"]')!),
        colorTexto: cuc ? getComputedStyle(cuc).color : null,
      };
    }, texto);
  }

  async texto(): Promise<string> {
    return (await this.root.innerText()).replace(/\s*\n+\s*/g, ' | ').trim();
  }

  async tieneCombinaLaPromo(): Promise<boolean> {
    return /combina la promo/i.test(await this.root.innerText());
  }

  async tieneVerSimilares(): Promise<boolean> {
    return /ver similares/i.test(await this.root.innerText());
  }

  /**
   * Dónde cae verticalmente cada slot, medido sobre el render real.
   *
   * Se devuelven coordenadas y no locators porque lo que los TC comparan es el **orden** de los
   * slots, y eso se decide con números. Las posiciones van en px de documento para que el orden
   * no dependa de cuánto se haya desplazado el modal.
   *
   * El precio y el label de formato se localizan por la forma de su texto —importe con `$`,
   * cantidad más unidad— porque ninguno tiene rol, `data-testid` ni clase estable; es el mismo
   * criterio que usa [[shelf-producto]] para la tarjeta completa.
   */
  async slots(): Promise<SlotsDeLaShelf> {
    return this.root.evaluate((shelf) => {
      const top = (el: Element | null | undefined) =>
        el ? Math.round(el.getBoundingClientRect().top + window.scrollY) : null;

      const hojas = [...shelf.querySelectorAll('*')].filter(
        (e) => e.children.length === 0 && (e.textContent ?? '').trim(),
      );
      const img = shelf.querySelector('img');
      const precio = hojas.find((e) => /^\$/.test((e.textContent ?? '').trim()));
      const formato = hojas.find((e) =>
        /^[0-9.,]+\s*(kg|g|gr|lt|l|ml|un|cc)\.?$/i.test((e.textContent ?? '').trim()),
      );
      const nombre = [...shelf.querySelectorAll('button')].find((b) =>
        / \| /.test((b as HTMLElement).innerText ?? ''),
      );
      const agregar = [...shelf.querySelectorAll('button')].find((b) =>
        /^agregar$/i.test(((b as HTMLElement).innerText ?? '').trim()),
      );

      // La cucarda es una hoja de texto que cae dentro del recuadro de la imagen: no tiene
      // ninguna marca propia, y lo único que la distingue del resto es dónde está.
      const cajaImg = img?.getBoundingClientRect();
      const cucarda = cajaImg
        ? hojas.find((e) => {
            const r = e.getBoundingClientRect();
            return (
              r.top >= cajaImg.top - 2 &&
              r.bottom <= cajaImg.bottom + 2 &&
              r.left >= cajaImg.left - 2 &&
              e !== img
            );
          })
        : undefined;

      return {
        imagen: top(img),
        favoritos: top(shelf.querySelector('button[aria-label="Guardar en favoritos"]')),
        cucarda: top(cucarda),
        precio: top(precio),
        nombre: top(nombre),
        formato: top(formato),
        agregar: top(agregar),
      };
    });
  }
}
