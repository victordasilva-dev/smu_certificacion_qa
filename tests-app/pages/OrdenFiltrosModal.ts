import type { Locator, Screen } from 'mobilewright';
import type { Plataforma } from '../../tests/support/rutasEvidencia';
import { BaseScreen } from './BaseScreen';
import { bordeSuperiorOscuro } from '../support/pixeles';

/**
 * Modal "Selecciona tus filtros" de la PLP/SRP (HU B2C-87). Verificado en Android, build v1.0.7
 * (2026-10-07):
 *
 * - Fondo: botón "Cerrar filtros" a pantalla completa (tocar fuera de la hoja cierra el modal).
 * - Arriba de la hoja: X ("Cerrar y limpiar filtros") y el título "Selecciona tus filtros".
 * - "Ordena tus productos": carrusel horizontal de RadioButton, uno por criterio. En v1.0.7 el
 *   orden es Recomendado, Pensados para ti, Precio más bajo, Precio más alto, Mejor descuento,
 *   Más vendido; los dos últimos solo aparecen deslizando el carrusel. La opción marcada se ve
 *   con un borde negro grueso; el árbol no lo refleja (isChecked/isSelected siempre false con
 *   mobilecli), así que se lee de la captura de cada opción.
 * - Abajo: "Aplica tus filtros" (Ofertas, Estilos de alimentación, Sellos, Marcas, Precio) y el
 *   botón "Mostrar N productos".
 */
export class OrdenFiltrosModal extends BaseScreen {
  constructor(screen: Screen, plataforma: Plataforma) {
    super(screen, plataforma);
  }

  get titulo(): Locator {
    return this.screen.getByText('Selecciona tus filtros');
  }

  get seccionOrden(): Locator {
    return this.screen.getByText('Ordena tus productos');
  }

  get readyLocator(): Locator {
    return this.seccionOrden;
  }

  get mostrar(): Locator {
    return this.screen.getByRole('button', { name: /^Mostrar \d+ productos?$/ });
  }

  get cerrarX(): Locator {
    return this.screen.getByRole('button', { name: 'Cerrar y limpiar filtros' });
  }

  get fondo(): Locator {
    return this.screen.getByRole('button', { name: 'Cerrar filtros' });
  }

  opcion(nombre: string): Locator {
    return this.screen.getByRole('radio', { name: nombre });
  }

  /** Lee los RadioButton visibles del carrusel de orden, en orden de izquierda a derecha. */
  private async opcionesVisibles(): Promise<{ nombre: string; marcada: boolean; x: number }[]> {
    const vistos: { nombre: string; marcada: boolean; x: number }[] = [];
    const recorrer = (n: any) => {
      if (/RadioButton$/.test(n.type) && n.label && n.isVisible !== false) {
        vistos.push({ nombre: n.label, marcada: false, x: n.bounds.x });
      }
      for (const c of n.children ?? []) recorrer(c);
    };
    for (const n of await this.screen.viewTree()) recorrer(n);
    for (const v of vistos) v.marcada = (await bordeSuperiorOscuro(await this.opcion(v.nombre).screenshot())) > 0.08;
    return vistos.sort((a, b) => a.x - b.x);
  }

  /**
   * Desliza el carrusel de orden. El gesto parte de la opción visible más alejada del borde hacia
   * el que se mueve el dedo (la de más a la derecha para 'left'), para que no se salga de pantalla.
   */
  private async deslizarCarrusel(direccion: 'left' | 'right'): Promise<void> {
    const visibles = await this.opcionesVisibles();
    const origen = direccion === 'left' ? visibles[visibles.length - 1] : visibles[0];
    await this.opcion(origen.nombre).swipe({ direction: direccion });
  }

  /**
   * Todas las opciones de "Ordena tus productos" en el orden en que se muestran, con su estado
   * de marca. Recorre el carrusel hacia la derecha hasta que no aparezcan opciones nuevas y lo
   * deja de vuelta al inicio.
   */
  async opciones(): Promise<{ nombre: string; marcada: boolean }[]> {
    const lista: { nombre: string; marcada: boolean }[] = [];
    for (let i = 0; i < 4; i++) {
      const nuevas = (await this.opcionesVisibles()).filter((o) => !lista.some((l) => l.nombre === o.nombre));
      if (!nuevas.length && i > 0) break;
      lista.push(...nuevas.map(({ nombre, marcada }) => ({ nombre, marcada })));
      await this.deslizarCarrusel('left');
    }
    for (let i = 0; i < 3; i++) await this.deslizarCarrusel('right');
    return lista;
  }

  /** Toca una opción de orden, deslizando el carrusel si hace falta para que quede a la vista. */
  async elegir(nombre: string): Promise<void> {
    for (let i = 0; i < 4; i++) {
      if ((await this.opcionesVisibles()).some((o) => o.nombre === nombre)) break;
      await this.deslizarCarrusel('left');
    }
    await this.opcion(nombre).tap();
  }

  async marcadas(): Promise<string[]> {
    return (await this.opciones()).filter((o) => o.marcada).map((o) => o.nombre);
  }

  async confirmar(): Promise<void> {
    await this.mostrar.tap();
  }

  async cerrarConX(): Promise<void> {
    await this.cerrarX.tap();
  }

  /**
   * Toca fuera de la hoja: sobre el fondo, por encima de la X. El punto sale de los bounds de los
   * propios elementos (no es una coordenada fija): mitad del ancho del fondo y mitad de la franja
   * entre el borde superior del fondo y la X.
   */
  async tocarFuera(): Promise<void> {
    const fondo = await this.fondo.boundingBox();
    const x = await this.cerrarX.boundingBox();
    await this.screen.tap(Math.round(fondo.x + fondo.width / 2), Math.round(fondo.y + (x.y - fondo.y) / 2));
  }
}
