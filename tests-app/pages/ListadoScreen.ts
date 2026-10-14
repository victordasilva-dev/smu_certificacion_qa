import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';
import { OrdenFiltrosModal } from './OrdenFiltrosModal';

/** Una tarjeta de producto del listado: SKU (del testID `product-<sku>`), nombre y precio de venta. */
export interface ProductoListado {
  sku: string;
  nombre: string;
  /** Precio de venta (con descuento si lo tiene): el primer monto de la tarjeta. */
  precio: number;
  conDescuento: boolean;
}

/**
 * Landing de categoría y PLP: comparten cabecera (Volver + "¿Qué estás buscando?").
 *
 * - Landing (desde "Mostrar todo" del Home): título de la N1 y chips "Todo" + N2, con una sección
 *   por N2.
 * - PLP (tap en un chip N2): título de la N2, botón "Abrir filtros y ordenamiento" y chips N3.
 */
export class ListadoScreen extends BaseScreen {
  get volver(): Locator {
    return this.screen.getByRole('button', { name: 'Volver' });
  }

  get readyLocator(): Locator {
    return this.volver;
  }

  /** Solo existe en la PLP: es lo que la distingue de la landing. */
  get filtros(): Locator {
    return this.screen.getByRole('button', { name: 'Abrir filtros y ordenamiento' });
  }

  /** Chip "Todo" del carrusel de N2: solo existe en la landing. */
  get chipTodo(): Locator {
    return this.screen.getByText('Todo', { exact: true });
  }

  /** Abre la PLP de la primera N2 del carrusel de la landing (el chip que sigue a "Todo"). */
  async tapPrimeraSubcategoria(): Promise<ListadoScreen> {
    const caja = await this.chipTodo.boundingBox();
    const chips = await this.screen.getByType('android.view.ViewGroup').all();
    for (const chip of chips) {
      const c = await chip.boundingBox({ timeout: 0 }).catch(() => null);
      if (c && Math.abs(c.y + c.height / 2 - (caja.y + caja.height / 2)) < 20 && c.x > caja.x + caja.width) {
        await chip.tap();
        return new ListadoScreen(this.screen, this.plataforma);
      }
    }
    throw new Error('La landing no muestra ninguna subcategoría después de "Todo".');
  }

  /** Botón de filtros y ordenamiento (PLP y SRP). */
  get iconoFiltros(): Locator {
    return this.screen.getByRole('button', { name: 'Abrir filtros y ordenamiento' });
  }

  async abrirFiltros(): Promise<OrdenFiltrosModal> {
    await this.iconoFiltros.tap();
    return new OrdenFiltrosModal(this.screen, this.plataforma);
  }

  /**
   * Lee las tarjetas de producto en el orden del listado (fila a fila), desplazándose hasta
   * juntar `cuantos` o hasta que no aparezcan nuevas, y vuelve arriba. La tarjeta publica
   * `product-<sku>` y un label "10%, $6.291, ($8.388 x Kg), Antes: $6.990, Marca | Nombre, 750 g".
   */
  async leerProductos(cuantos: number): Promise<ProductoListado[]> {
    const vistos = new Map<string, ProductoListado>();
    let desplazamientos = 0;
    for (let vuelta = 0; vuelta < 12 && vistos.size < cuantos; vuelta++) {
      const tarjetas: { sku: string; y: number; x: number; label: string }[] = [];
      const recorrer = (n: any, sku?: string) => {
        const id = n.identifier ?? n.resourceId ?? '';
        const m = /^product-(\d[\w-]*)$/.exec(id);
        const actual = m ? m[1] : sku;
        if (actual && /\$\d/.test(n.label ?? '') && !tarjetas.some((t) => t.sku === actual)) {
          tarjetas.push({ sku: actual, y: n.bounds.y, x: n.bounds.x, label: n.label });
        }
        for (const c of n.children ?? []) recorrer(c, actual);
      };
      for (const n of await this.screen.viewTree()) recorrer(n);
      tarjetas.sort((a, b) => a.y - b.y || a.x - b.x);
      const antes = vistos.size;
      for (const t of tarjetas) {
        if (vistos.has(t.sku)) continue;
        const partes = t.label.split(', ');
        const precio = Number((/\$([\d.]+)/.exec(t.label)?.[1] ?? '0').replace(/\./g, ''));
        const nombre = partes.find((p) => p.includes('|')) ?? '';
        vistos.set(t.sku, { sku: t.sku, nombre, precio, conDescuento: /Antes:/.test(t.label) });
      }
      if (vistos.size === antes && vuelta > 0) break;
      if (vistos.size < cuantos) {
        await this.screen.swipe('up');
        desplazamientos++;
      }
    }
    for (let i = 0; i < desplazamientos + 1; i++) await this.screen.swipe('down');
    return [...vistos.values()].slice(0, cuantos);
  }

  /**
   * Abre la PDP del primer producto del listado (la tarjeta publica `product-<sku>`). Devuelve el
   * SKU abierto. El SKU lo da el catálogo, no el TC: sirve para recorrer pantallas.
   */
  async abrirPrimerProducto(): Promise<string> {
    let sku = '';
    const buscar = (n: any) => {
      const id = n.identifier ?? n.resourceId ?? '';
      const m = /^product-(\d[\w-]*)$/.exec(id);
      if (!sku && m) sku = m[1];
      for (const c of n.children ?? []) buscar(c);
    };
    for (const n of await this.screen.viewTree()) buscar(n);
    if (!sku) throw new Error('El listado no muestra ninguna tarjeta de producto.');
    await this.screen.getByTestId(`product-${sku}`).tap();
    return sku;
  }
}
