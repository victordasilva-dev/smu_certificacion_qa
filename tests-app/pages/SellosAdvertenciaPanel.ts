import { execSync } from 'child_process';
import type { Locator } from 'mobilewright';
import { FiltroOfertasPanel, type NodoPanel } from './FiltroOfertasPanel';

/**
 * Sección «Sellos de advertencia» del panel «Selecciona tus filtros» de la app (HU B2C-103).
 * Verificado en Android, build v1.0.1 (2026-11-12), PLP Carnes > Vacuno, emulador Pixel 4 1080x2280:
 *
 * - Colapsada es un Button «Sellos de advertencia»; con sellos marcados su nombre accesible pasa a
 *   «Sellos de advertencia, N» y muestra el badge N.
 * - Expandida lista una CheckBox por sello (label = nombre del sello) con `isChecked` fiable.
 * - Arriba del panel, «Filtros aplicados» muestra un Button «Quitar filtro <sello>» por cada sello
 *   marcado (el chip con su X), y «Limpiar».
 * - El panel se desplaza solo al marcar: las coordenadas salen siempre del árbol recién volcado.
 */
const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));
const swipe = (x1: number, y1: number, x2: number, y2: number, ms = 700) =>
  execSync(`adb shell input swipe ${x1} ${y1} ${x2} ${y2} ${ms}`, { timeout: 20000 });
const tocar = (n: NodoPanel) =>
  execSync(`adb shell input tap ${Math.round(n.x + n.w / 2)} ${Math.round(n.y + n.h / 2)}`, { timeout: 15000 });

/** Franja vertical del panel donde un nodo se puede tocar sin caer en el encabezado ni en «Mostrar». */
const ZONA = { desde: 420, hasta: 1960 };

export class SellosAdvertenciaPanel extends FiltroOfertasPanel {
  get seccion(): Locator {
    return this.screen.getByRole('button', { name: /^Sellos de advertencia/ });
  }

  async botonSellos(): Promise<NodoPanel | undefined> {
    return (await this.nodos()).find((x) => x.type === 'Button' && /^Sellos de advertencia/.test(x.label));
  }

  /**
   * Badge de la sección: el N de «Sellos de advertencia, N»; 0 si no tiene. Primero trae la
   * sección a la vista: fuera de pantalla el botón no está en el árbol y se leería 0.
   */
  async badge(): Promise<number> {
    const b = await this.verSeccion();
    const m = /,\s*(\d+)$/.exec(b?.label ?? '');
    return m ? Number(m[1]) : 0;
  }

  /** Lleva el panel hasta arriba del todo (donde viven «Filtros aplicados» y sus chips). */
  async irArriba(): Promise<void> {
    for (let i = 0; i < 4; i++) { swipe(540, 700, 540, 1700, 600); await dormir(900); }
  }

  /** Desplaza el panel hasta que la sección quede en la mitad superior. */
  async verSeccion(): Promise<NodoPanel> {
    let b = await this.botonSellos();
    for (let i = 0; i < 6 && !(b && b.y > ZONA.desde && b.y < 1100); i++) {
      if (b && b.y >= 1100) swipe(540, 1600, 540, 1100, 700);
      else swipe(540, 900, 540, 1400, 700);
      await dormir(1200);
      b = await this.botonSellos();
    }
    if (!b) throw new Error('El panel no muestra la sección «Sellos de advertencia»');
    return b;
  }

  async abrirSellos(): Promise<void> {
    tocar(await this.verSeccion());
    await dormir(3000);
  }

  /** Casillas de sellos visibles: las CheckBox entre el botón de la sección y el siguiente Button. */
  private async casillasVisibles(): Promise<NodoPanel[]> {
    const n = await this.nodos();
    const b = n.find((x) => x.type === 'Button' && /^Sellos de advertencia/.test(x.label));
    const sig = n.filter((x) => x.type === 'Button' && b && x.y > b.y && !/^Sellos de advertencia/.test(x.label)).sort((a, c) => a.y - c.y)[0];
    return n
      .filter((x) => x.type === 'CheckBox' && (!b || x.y > b.y) && (!sig || x.y < sig.y))
      .sort((a, c) => a.y - c.y);
  }

  /** Todas las opciones de la sección expandida, en orden vertical, con su estado. */
  async opciones(): Promise<{ nombre: string; marcada: boolean }[]> {
    await this.verSeccion();
    const lista: { nombre: string; marcada: boolean }[] = [];
    for (let i = 0; i < 4; i++) {
      for (const c of await this.casillasVisibles()) {
        if (!lista.some((l) => l.nombre === c.label)) lista.push({ nombre: c.label, marcada: Boolean(c.checked) });
      }
      swipe(540, 1700, 540, 1200, 700);
      await dormir(1200);
    }
    return lista;
  }

  /** Toca la casilla de un sello, desplazando el panel hasta tenerla a la vista. */
  async tocarSello(nombre: string): Promise<void> {
    await this.verSeccion();
    let c = (await this.casillasVisibles()).find((x) => x.label === nombre && x.y > ZONA.desde && x.y < ZONA.hasta - 60);
    for (let i = 0; i < 5 && !c; i++) {
      swipe(540, 1700, 540, 1250, 700);
      await dormir(1200);
      c = (await this.casillasVisibles()).find((x) => x.label === nombre && x.y > ZONA.desde && x.y < ZONA.hasta - 60);
    }
    if (!c) throw new Error(`La sección no muestra el sello «${nombre}»`);
    tocar(c);
    await dormir(3500);
  }

  /** Estado de la casilla de un sello (o `undefined` si no aparece en la sección). */
  async marcado(nombre: string): Promise<boolean | undefined> {
    const o = (await this.opciones()).find((x) => x.nombre === nombre);
    return o?.marcada;
  }

  /** Chips de «Filtros aplicados» (el nombre del sello de cada «Quitar filtro …»). */
  async chips(): Promise<string[]> {
    await this.irArriba();
    return (await this.nodos())
      .filter((x) => x.type === 'Button' && /^Quitar filtro /.test(x.label))
      .sort((a, b) => a.x - b.x)
      .map((x) => x.label.replace(/^Quitar filtro /, ''));
  }

  async quitarChip(nombre: string): Promise<void> {
    await this.irArriba();
    const c = (await this.nodos()).find((x) => x.type === 'Button' && x.label === `Quitar filtro ${nombre}`);
    if (!c) throw new Error(`No hay chip «${nombre}» en «Filtros aplicados»`);
    tocar(c);
    await dormir(3500);
  }

  /**
   * Toca la casilla de una marca: expande «Marcas» si está cerrada (su botón se llama «Marcas» o
   * «Marcas, N» con marcas elegidas) y desplaza el panel hasta tenerla a la vista.
   */
  async tocarMarca(nombre: string): Promise<void> {
    const casilla = async () => (await this.nodos()).find((x) => x.type === 'CheckBox' && x.label === nombre && x.y > ZONA.desde && x.y < ZONA.hasta - 60);
    let c = await casilla();
    if (!c) {
      let m = (await this.nodos()).find((x) => x.type === 'Button' && /^Marcas/.test(x.label));
      for (let i = 0; i < 6 && !(m && m.y > ZONA.desde && m.y < 1500); i++) {
        swipe(540, 1700, 540, 1200, 700);
        await dormir(1200);
        m = (await this.nodos()).find((x) => x.type === 'Button' && /^Marcas/.test(x.label));
      }
      if (!m) throw new Error('El panel no muestra «Marcas»');
      c = await casilla();
      // Expandida, «Marcas» muestra el buscador «¿Qué marca necesitas?» y casillas debajo; si no se
      // ve nada de eso está cerrada. Tocarla estando abierta la cerraría.
      const n = await this.nodos();
      const abierta = n.some((x) => x.y > m!.y && x.y < m!.y + 500 && (/Qué marca necesitas/.test(x.label) || x.type === 'CheckBox' || x.type === 'EditText'));
      if (!c && !abierta) { tocar(m); await dormir(3000); }
    }
    for (let i = 0; i < 6 && !c; i++) {
      c = await casilla();
      if (c) break;
      swipe(540, 1700, 540, 1250, 700);
      await dormir(1200);
    }
    if (!c) throw new Error(`«Marcas» no lista la marca «${nombre}»`);
    tocar(c);
    await dormir(3500);
  }
}
