import { execSync } from 'child_process';
import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';

/**
 * Cucarda (label promocional) del shelf de producto en la app (HU B2C-65). Verificado en Android,
 * build v1.0.1 (2026-11-12), emulador Pixel 4 1080x2280:
 *
 * - El shelf es un ViewGroup con identifier `product-<SKU>` (en PLP, SRP y resultados del buscador).
 * - La cucarda es un TextView con el texto completo del label (p. ej. «Cyber») en la esquina
 *   superior izquierda del shelf: dx 45, dy 36 respecto del shelf, 44 px de alto. El árbol trae el
 *   texto entero aunque en pantalla se corte con «…»: el truncado solo se ve en la captura.
 * - A la derecha, en la misma franja, el botón de Favoritos («Agregar a mis productos» / «Quitar de
 *   mis productos»).
 * - Sin cucarda no hay ningún TextView en esa franja.
 */
export interface NodoShelf { id: string; label: string; type: string; x: number; y: number; w: number; h: number }

const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));
/** Franja superior del shelf donde viven la cucarda y Favoritos. */
const FRANJA = 110;

export class CucardaShelf extends BaseScreen {
  get readyLocator(): Locator {
    return this.screen.getByTestId('tab-Home');
  }

  shelf(sku: string): Locator {
    return this.screen.getByTestId(`product-${sku}`);
  }

  async nodos(): Promise<NodoShelf[]> {
    const out: NodoShelf[] = [];
    const rec = (n: any) => {
      const id = String(n.identifier ?? n.resourceId ?? '');
      const label = String(n.label ?? n.text ?? '');
      const r = n.rect ?? n.bounds;
      if (r && !id.startsWith('com.android.systemui') && (label || id)) {
        out.push({ id, label, type: String(n.type ?? '').split('.').pop()!, x: r.x, y: r.y, w: r.width, h: r.height });
      }
      for (const c of n.children ?? []) rec(c);
    };
    for (const n of await this.screen.viewTree()) rec(n);
    return out;
  }

  /**
   * Desplaza el listado hasta que el shelf del SKU tenga la parte superior a la vista. La prueba es
   * su botón de Favoritos: el encabezado fijo de la PLP/SRP (buscador y chips) tapa la franja de
   * arriba del shelf sin que el shelf deje de estar en el árbol, y ahí la cucarda no aparece.
   * Devuelve el shelf o `undefined` si no aparece.
   */
  async buscar(sku: string, maxPantallas = 30, paso: [number, number] = [1700, 1050]): Promise<NodoShelf | undefined> {
    let previo = '';
    let quietas = 0;
    for (let i = 0; i < maxPantallas; i++) {
      const n = await this.nodos();
      const s = n.find((x) => x.id === `product-${sku}`);
      // Fin del listado: tres pantallas seguidas con los mismos productos.
      const firma = n.filter((x) => /^product-\d/.test(x.id)).map((x) => `${x.id}@${x.y}`).join('|');
      quietas = firma === previo ? quietas + 1 : 0;
      previo = firma;
      if (!s && quietas >= 3) return undefined;
      if (s && s.y < 1300 && (await this.franja(sku))?.favorito) return s;
      if (s && s.y >= 1300) execSync(`adb shell input swipe 540 1500 540 ${1500 - (s.y - 700)} 700`, { timeout: 20000 });
      else if (s) execSync('adb shell input swipe 540 1000 540 1500 700', { timeout: 20000 }); // tapado por el encabezado: se baja un poco
      else execSync(`adb shell input swipe 540 ${paso[0]} 540 ${paso[1]} 700`, { timeout: 20000 });
      await dormir(1700);
    }
    return undefined;
  }

  /** Lo que hay en la franja superior del shelf: textos (cucardas) y el botón de Favoritos. */
  async franja(sku: string): Promise<{ shelf: NodoShelf; textos: NodoShelf[]; favorito: NodoShelf | undefined } | undefined> {
    const n = await this.nodos();
    const shelf = n.find((x) => x.id === `product-${sku}`);
    if (!shelf) return undefined;
    const dentro = (x: NodoShelf) => x.x >= shelf.x && x.x < shelf.x + shelf.w && x.y >= shelf.y && x.y < shelf.y + FRANJA;
    return {
      shelf,
      textos: n.filter((x) => x.type === 'TextView' && dentro(x)),
      favorito: n.find((x) => x.type === 'Button' && /mis productos/i.test(x.label) && dentro(x)),
    };
  }

  /** Nodos del shelf completo (para precios, «Agregar», «Pronto disponible»…). */
  async delShelf(sku: string): Promise<NodoShelf[]> {
    const n = await this.nodos();
    const s = n.find((x) => x.id === `product-${sku}`);
    if (!s) return [];
    return n.filter((x) => x.x >= s.x && x.x < s.x + s.w && x.y >= s.y && x.y < s.y + s.h && x !== s);
  }
}
