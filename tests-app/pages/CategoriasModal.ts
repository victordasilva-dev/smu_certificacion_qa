import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';
import { ListadoScreen } from './ListadoScreen';

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
