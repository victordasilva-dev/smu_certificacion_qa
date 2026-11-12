import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';
import { ListadoScreen } from './ListadoScreen';
import { tolerante } from '../support/tolerante';

/** Un chip, una fila N1 o un tile N2 del menú, con su caja en pantalla. */
export interface NodoMenu {
  /** Nombre accesible del grupo (en un tile sin imagen incluye las iniciales: "DE, Desayuno"). */
  texto: string;
  /** El texto que se lee como nombre (en los tiles N2, el TextView inferior, con sus saltos de línea). */
  nombre: string;
  /** Las iniciales que la app dibuja en lugar de la imagen, si las hay. */
  iniciales: string | null;
  x: number;
  y: number;
  ancho: number;
  alto: number;
}

export interface SeccionN1 {
  n1: NodoMenu;
  n2: NodoMenu[];
  siguiente: NodoMenu | null;
}

/**
 * Modal de categorías de la app (HU B2C-21), el que abre el tab "Categorías" de la TabBar.
 *
 * Estructura observada en Android, build v1.0.7 (2026-10-06): botón "Volver" (el icono '<'),
 * buscador "¿Qué estás buscando?" (botón "Buscar productos"), un carrusel de chips con "Todas" y
 * las categorías N1, y debajo una sección por N1 con su carrusel de subcategorías N2.
 *
 * Los nombres de las N1 salen de la propia pantalla y no de una lista fija: las categorías
 * activas las define el catálogo, no el TC.
 */
export class CategoriasModal extends BaseScreen {
  /** Altura de la fila de chips: al deslizar el carrusel «Todas» sale de pantalla y deja de servir de ancla. */
  private filaChips: number | null = null;

  get volver(): Locator {
    return this.screen.getByRole('button', { name: 'Volver' });
  }

  get buscador(): Locator {
    return this.screen.getByRole('button', { name: 'Buscar productos' });
  }

  get todas(): Locator {
    return this.screen.getByText('Todas');
  }

  get readyLocator(): Locator {
    return this.todas;
  }

  /** Un chip o un título de sección por su texto (las N1 aparecen en los dos sitios). */
  texto(nombre: string | RegExp): Locator {
    return this.screen.getByText(nombre);
  }

  async tapVolver(): Promise<void> {
    await this.volver.tap();
  }

  /**
   * Abre la PLP N1 de la primera categoría: tap en el título de su sección (la fila a todo el
   * ancho bajo el carrusel de chips). El nombre lo define el catálogo, no el TC.
   */
  async tapPrimeraN1(): Promise<ListadoScreen> {
    const chips = await this.todas.boundingBox();
    const filas = await this.screen.getByType('android.view.ViewGroup').all();
    for (const fila of filas) {
      const c = await fila.boundingBox({ timeout: 0 }).catch(() => null);
      if (c && c.x === 0 && c.width >= 1000 && c.height < 150 && c.y > chips.y + chips.height) {
        await fila.tap();
        return new ListadoScreen(this.screen, this.plataforma);
      }
    }
    throw new Error('El menú de categorías no muestra ninguna sección N1.');
  }

  /**
   * Los grupos con nombre del menú, leídos del árbol: chips, filas N1 y tiles N2. Cada uno con su
   * caja y, para los tiles, el texto del nombre (el TextView inferior: el label del grupo suma las
   * iniciales cuando la N2 no tiene imagen, "DE, Desayuno").
   */
  async grupos(): Promise<NodoMenu[]> {
    const out: NodoMenu[] = [];
    const recorrer = (n: any) => {
      const r = n.rect ?? n.bounds;
      const label = String(n.text ?? n.label ?? '').trim();
      if (r && label && /ViewGroup|Other|Cell/.test(String(n.type ?? ''))) {
        const textos = (n.children ?? [])
          .map((c: any) => ({ t: String(c.text ?? c.label ?? '').trim(), r: c.rect ?? c.bounds }))
          .filter((c: any) => c.t && c.r);
        const nombre = textos.length ? textos.sort((a: any, b: any) => b.r.y - a.r.y)[0] : null;
        const iniciales = textos.find((c: any) => c !== nombre && /^[A-ZÁÉÍÓÚÑ]{1,3}$/.test(c.t))?.t ?? null;
        out.push({ texto: label, nombre: nombre?.t ?? label, iniciales, x: r.x, y: r.y, ancho: r.width, alto: r.height });
      }
      for (const c of n.children ?? []) recorrer(c);
    };
    for (const n of await tolerante(() => this.screen.viewTree())) recorrer(n);
    return out.sort((a, b) => a.y - b.y || a.x - b.x);
  }

  /** Los chips del carrusel de top categorías: los grupos en la fila de "Todas". */
  async chips(): Promise<NodoMenu[]> {
    const g = await this.grupos();
    const todas = g.find((n) => n.texto === 'Todas');
    if (todas) this.filaChips = todas.y;
    if (this.filaChips === null) throw new Error('El menú no muestra el chip «Todas».');
    const y = this.filaChips;
    return g.filter((n) => Math.abs(n.y - y) < 15).sort((a, b) => a.x - b.x);
  }

  /** Las secciones N1 visibles, de arriba hacia abajo, con los tiles N2 que caen entre una fila y la siguiente. */
  async secciones(): Promise<SeccionN1[]> {
    const g = await this.grupos();
    const todas = g.find((n) => n.texto === 'Todas');
    if (todas) this.filaChips = todas.y;
    const tope = todas ? todas.y + todas.alto : (this.filaChips ?? 0) + 100;
    const filas = g.filter((n) => n.x === 0 && n.ancho >= 1000 && n.alto < 150 && n.y > tope);
    return filas.map((fila, i) => {
      const fin = filas[i + 1]?.y ?? Infinity;
      const n2 = g.filter((n) => n.y > fila.y + fila.alto - 5 && n.y < fin && n.alto > 200 && n.ancho < 1000);
      return { n1: fila, n2: n2.sort((a, b) => a.x - b.x), siguiente: filas[i + 1] ?? null };
    });
  }

  /**
   * Desplaza el menú hacia abajo hasta encontrar una sección N1 que cumpla `cumple` con la fila
   * siguiente también en pantalla (para saber dónde termina). Null si el menú se acaba antes.
   */
  async buscarSeccion(cumple: (s: SeccionN1) => boolean, maxSwipes = 14): Promise<SeccionN1 | null> {
    let previa = '';
    for (let i = 0; i <= maxSwipes; i++) {
      const s = (await this.secciones()).find((x) => x.siguiente && x.siguiente.y < 2000 && cumple(x));
      if (s) return s;
      const firma = (await this.secciones()).map((x) => x.n1.texto).join('|');
      if (firma === previa) break;
      previa = firma;
      await this.screen.swipe('up');
    }
    return null;
  }

  /** Abre la PLP de una N1 tocando el título de su sección (la fila a todo el ancho). */
  async tapSeccionN1(nombre: string): Promise<ListadoScreen> {
    for (const l of await this.screen.getByText(nombre).all()) {
      const c = await l.boundingBox({ timeout: 0 }).catch(() => null);
      if (c && c.x === 0 && c.width >= 1000) {
        await l.tap();
        return new ListadoScreen(this.screen, this.plataforma);
      }
    }
    throw new Error(`No hay una sección N1 «${nombre}» visible en el menú.`);
  }

  /** Abre la PLP de una top categoría tocando su chip en el carrusel. */
  async tapChip(nombre: string): Promise<ListadoScreen> {
    const chip = (await this.chips()).find((c) => c.texto === nombre);
    if (!chip) throw new Error(`El carrusel de top categorías no muestra el chip «${nombre}».`);
    for (const l of await this.screen.getByText(nombre).all()) {
      const c = await l.boundingBox({ timeout: 0 }).catch(() => null);
      if (c && Math.abs(c.y - chip.y) < 15) {
        await l.tap();
        return new ListadoScreen(this.screen, this.plataforma);
      }
    }
    throw new Error(`No se pudo tocar el chip «${nombre}».`);
  }

  /** Desliza el carrusel de top categorías hacia la izquierda (el gesto sobre un chip). */
  async deslizarChips(): Promise<void> {
    // Desde el borde derecho de la fila: un swipe sobre un chip pegado a la izquierda sale de pantalla.
    const chip = (await this.chips())[0];
    await this.screen.swipe('left', { startX: 950, startY: chip.y + chip.alto / 2, distance: 600 });
  }

  /** Desliza hacia la izquierda el carrusel N2 de una sección, sobre su primer tile. */
  async deslizarN2(seccion: SeccionN1): Promise<void> {
    const tile = seccion.n2[0];
    await this.screen.swipe('left', { startX: 950, startY: tile.y + tile.alto / 2, distance: 600 });
  }

  /** Abre la PLP N2 cuyo nombre se muestra en el menú (el tile de la N2 dentro de su sección N1). */
  async tapN2(nombre: RegExp): Promise<ListadoScreen> {
    for (let i = 0; i < 6; i++) {
      if (await this.screen.getByText(nombre).first().isVisible({ timeout: 1000 })) break;
      await this.screen.swipe('up');
    }
    await this.screen.getByText(nombre).first().tap();
    return new ListadoScreen(this.screen, this.plataforma);
  }
}
