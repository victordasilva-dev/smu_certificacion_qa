import { Locator, Page } from '@playwright/test';
import { SRPPage } from './SRPPage';
import { ShelfProducto } from './ShelfProducto';

/** Recuadro redondeado de un elemento, medido sobre el render real. */
export interface Caja {
  x: number;
  y: number;
  ancho: number;
  alto: number;
}

/**
 * Shelf de un producto en la página del carro (B2C-44).
 *
 * Es un componente, no una página: no extiende `BasePage`. El carro no expone el SKU en el DOM,
 * así que el ítem se ubica por el nombre del producto, que es el `alt` de su imagen y el sufijo
 * del aria-label de sus botones ("Eliminar <nombre>", "Sumar <nombre>").
 *
 * La raíz es el contenedor más interno que tiene a la vez la imagen y el link de texto
 * "Eliminar" de arriba a la derecha. El botón de tacho de los controles de cantidad comparte el
 * mismo nombre accesible ("Eliminar <nombre>") pero no tiene texto, por eso el link se filtra por
 * `hasText` y no solo por rol.
 */
export class ShelfCarro {
  readonly root: Locator;

  constructor(
    private readonly page: Page,
    readonly nombreProducto: string,
  ) {
    const linkEliminar = page
      .getByRole('button', { name: `Eliminar ${nombreProducto}`, exact: true })
      .filter({ hasText: /eliminar/i });
    this.root = page
      .locator('main div')
      .filter({ has: linkEliminar })
      .filter({ has: page.locator(`img[alt="${nombreProducto}"]`) })
      .last();
  }

  /**
   * Agrega un SKU al carro como invitado desde la SRP (`/search?q=<sku>`) y devuelve su nombre,
   * que es lo que luego permite ubicarlo en el carro.
   */
  static async agregarDesdeBusqueda(page: Page, sku: string): Promise<string> {
    const srp = await new SRPPage(page, sku).goto();
    await srp.esperarInteractiva();
    const shelf = ShelfProducto.porSku(page, sku);
    await shelf.agregar.waitFor({ state: 'visible', timeout: 30000 });
    const nombre = ((await shelf.imagen.first().getAttribute('alt')) ?? '').trim();
    await shelf.agregar.click();
    await shelf.root.getByText(/en carro/i).waitFor({ state: 'visible', timeout: 30000 });
    return nombre;
  }

  get linkEliminar(): Locator {
    return this.root.getByRole('button', { name: `Eliminar ${this.nombreProducto}`, exact: true }).filter({ hasText: /eliminar/i });
  }

  get imagen(): Locator {
    return this.root.locator(`img[alt="${this.nombreProducto}"]`).first();
  }

  /** "Marca | Nombre": el párrafo que contiene la barra separadora. */
  get nombre(): Locator {
    return this.root.locator('p').filter({ hasText: ' | ' }).first();
  }

  get marca(): Locator {
    return this.nombre.locator('span').first();
  }

  /** Precio unitario "$X.XXX c/u". */
  get precioUnitario(): Locator {
    return this.root.getByText(/\$[\d.]+\s*c\/u/i).first();
  }

  /** Cantidad "N un." o "N kg.". */
  get cantidad(): Locator {
    return this.root.locator('p').filter({ hasText: /^\s*[\d.,]+\s*(un|kg)\.?\s*$/i }).first();
  }

  get botonSumar(): Locator {
    return this.root.getByRole('button', { name: `Sumar ${this.nombreProducto}`, exact: true });
  }

  /** Botón de la izquierda de los controles: "Restar" con más de 1, tacho ("Eliminar") con 1. */
  get botonRestarOEliminar(): Locator {
    return this.root
      .getByRole('button', { name: new RegExp(`^(Restar|Eliminar) ${escapar(this.nombreProducto)}$`) })
      .filter({ hasNotText: /\S/ });
  }

  /** Ícono lápiz + "Agregar instrucciones". */
  get agregarInstrucciones(): Locator {
    return this.root.locator('button').filter({ hasText: /agregar instrucciones/i }).first();
  }

  /** Badge de porcentaje de descuento ("X%"). */
  get badgePorcentaje(): Locator {
    return this.root.getByText(/^-?\s*\d{1,2}\s*%$/).first();
  }

  /** "Antes:" con el precio original. */
  get precioAntes(): Locator {
    return this.root.getByText(/antes/i).first();
  }

  /** PPUM entre paréntesis, p. ej. "($5.580 x kg)". */
  get ppum(): Locator {
    return this.root.getByText(/\(\s*\$[\d.]+\s*x\s*(kg|lt|l|un|100\s*g)\s*\)/i).first();
  }

  async sumar(veces: number): Promise<void> {
    for (let i = 0; i < veces; i++) {
      const antes = (await this.cantidad.innerText()).trim();
      await this.botonSumar.click();
      // Cada "Sumar" actualiza el carro por API; el siguiente clic se da recién cuando la cantidad
      // cambió, para no encadenar clics sobre un control que todavía está procesando.
      for (let t = 0; t < 30; t++) {
        if ((await this.cantidad.innerText()).trim() !== antes) break;
        await this.page.waitForTimeout(500);
      }
    }
  }

  async abrirInstrucciones(): Promise<Locator> {
    await this.agregarInstrucciones.click();
    const modal = this.page.locator('[role="dialog"]').filter({ hasText: /te gustar[íi]a algo en especial/i }).locator('visible=true').first();
    await modal.waitFor({ state: 'visible', timeout: 15000 });
    return modal;
  }

  async caja(locator: Locator): Promise<Caja> {
    const b = await locator.boundingBox();
    if (!b) throw new Error('El elemento no tiene recuadro: no está renderizado');
    return { x: Math.round(b.x), y: Math.round(b.y), ancho: Math.round(b.width), alto: Math.round(b.height) };
  }

  /**
   * Botones de solo ícono (sin texto) ubicados en la esquina superior derecha del shelf: es lo que
   * la HU llama "ícono X arriba a la derecha". Devuelve cuántos hay.
   */
  async iconosArribaDerecha(): Promise<number> {
    return this.root.evaluate((root) => {
      const r = root.getBoundingClientRect();
      return [...root.querySelectorAll('button')].filter((b) => {
        const br = b.getBoundingClientRect();
        const soloIcono = !(b.textContent ?? '').trim() && !!b.querySelector('svg, img');
        return soloIcono && br.top < r.top + 40 && br.left > r.left + r.width * 0.7;
      }).length;
    });
  }

  /** Cómo quedó el nombre: si el texto se recorta y si se queda dentro del shelf. */
  async recorteDelNombre(): Promise<{ texto: string; recortado: boolean; elipsis: boolean; dentroDelShelf: boolean }> {
    return this.root.evaluate((shelf) => {
      const p = [...shelf.querySelectorAll('p')].find((x) => (x.textContent ?? '').includes(' | '))!;
      const cs = getComputedStyle(p);
      const pr = p.getBoundingClientRect();
      const sr = shelf.getBoundingClientRect();
      return {
        texto: (p.textContent ?? '').trim(),
        recortado: p.scrollHeight > p.clientHeight + 1 || p.scrollWidth > p.clientWidth + 1,
        elipsis: cs.textOverflow === 'ellipsis' || (cs as unknown as { webkitLineClamp: string }).webkitLineClamp !== 'none',
        dentroDelShelf: pr.right <= sr.right + 1 && pr.left >= sr.left - 1,
      };
    });
  }

  /** Si la cantidad está alineada al borde derecho del shelf (a menos de 60 px). */
  async cantidadAlineadaDerecha(): Promise<boolean> {
    const c = await this.caja(this.cantidad);
    const r = await this.caja(this.root);
    return r.x + r.ancho - (c.x + c.ancho) < 60;
  }

  /** Si el texto de "Antes:" (o su precio) se rinde tachado. */
  async antesTachado(): Promise<boolean> {
    return this.root.evaluate((root) =>
      [...root.querySelectorAll('*')].some((el) => {
        const t = (el.textContent ?? '').trim();
        return /\$[\d.]+/.test(t) && t.length < 40 && getComputedStyle(el).textDecorationLine.includes('line-through');
      }),
    );
  }
}

function escapar(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
