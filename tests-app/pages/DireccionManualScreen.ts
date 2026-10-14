import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';

/**
 * Formulario "Dirección manual" del modal de entrega (HU B2C-26). Verificado en Android, build
 * v1.0.7 (2026-10-09): Región * ("Elegir región ⌄"), Comuna * ("Elegir comuna ⌄"), Dirección *
 * (placeholder "Calle"), "Numeración (opcional)" (placeholder "Ej: 2160") y el botón
 * "Continuar con detalles de la dirección", deshabilitado hasta completar los obligatorios.
 * Región y Comuna abren una hoja "Seleccionar región" / "Seleccionar comuna" con la lista.
 */
export class DireccionManualScreen extends BaseScreen {
  get titulo(): Locator {
    return this.screen.getByText('Dirección manual');
  }

  get readyLocator(): Locator {
    return this.titulo;
  }

  get etiquetaRegion(): Locator {
    return this.screen.getByText('Región *');
  }

  get etiquetaComuna(): Locator {
    return this.screen.getByText('Comuna *');
  }

  get etiquetaDireccion(): Locator {
    return this.screen.getByText('Dirección *');
  }

  get etiquetaNumeracion(): Locator {
    return this.screen.getByText(/^Numeraci[oó]n/);
  }

  /** Los dos desplegables se publican como "<valor>, ⌄": el primero es Región, el segundo Comuna. */
  get desplegableRegion(): Locator {
    return this.screen.getByText(/, ⌄$/).nth(0);
  }

  get desplegableComuna(): Locator {
    return this.screen.getByText(/, ⌄$/).nth(1);
  }

  get calle(): Locator {
    return this.screen.getByPlaceholder('Calle');
  }

  get numeracion(): Locator {
    return this.screen.getByPlaceholder('2160', { exact: false });
  }

  get continuar(): Locator {
    return this.screen.getByRole('button', { name: /continuar con detalles? de la direcci[oó]n/i });
  }

  /** Título de la hoja de opciones abierta ("Seleccionar región" / "Seleccionar comuna"). */
  hojaDeOpciones(de: 'región' | 'comuna'): Locator {
    return this.screen.getByText(`Seleccionar ${de}`);
  }

  async abrirRegion(): Promise<void> {
    await this.desplegableRegion.tap();
    await this.hojaDeOpciones('región').waitFor({ state: 'visible', timeout: 10000 });
  }

  async abrirComuna(): Promise<void> {
    await this.desplegableComuna.tap();
    await this.hojaDeOpciones('comuna').waitFor({ state: 'visible', timeout: 10000 });
  }

  /**
   * Las opciones a la vista en la hoja abierta, de arriba abajo, con una sola lectura del árbol.
   * La hoja es modal: mientras está abierta el árbol solo trae sus filas (el formulario no aparece).
   */
  async opcionesVisibles(titulo: string): Promise<string[]> {
    const nodos: { t: string; y: number }[] = [];
    const recorrer = (n: any) => {
      const t = (n.text ?? n.label ?? '').trim();
      const r = n.rect ?? n.bounds;
      const id = String(n.identifier ?? n.resourceId ?? '');
      if (t && r && /TextView|StaticText/.test(String(n.type ?? '')) && !id.startsWith('com.android.systemui')) nodos.push({ t, y: r.y });
      for (const c of n.children ?? []) recorrer(c);
    };
    for (const n of await this.screen.viewTree()) recorrer(n);
    const tope = nodos.find((n) => n.t === titulo)?.y ?? -1;
    return nodos.filter((n) => n.y > tope && n.t !== titulo).sort((a, b) => a.y - b.y).map((n) => n.t);
  }

  /** Elige una opción de la hoja abierta, desplazándola hacia abajo y, si no aparece, hacia arriba. */
  async elegir(opcion: string): Promise<void> {
    const titulo = (await this.hojaDeOpciones('comuna').isVisible({ timeout: 0 })) ? 'Seleccionar comuna' : 'Seleccionar región';
    for (const dir of ['up', 'down'] as const) {
      for (let i = 0; i < 12; i++) {
        if ((await this.opcionesVisibles(titulo)).includes(opcion)) {
          await this.screen.getByText(opcion, { exact: true }).tap();
          return;
        }
        await this.screen.swipe(dir);
      }
    }
    throw new Error(`La hoja "${titulo}" no tiene la opción "${opcion}"`);
  }

  /**
   * Todas las opciones de la hoja abierta, recorriéndola de arriba abajo (la lista no entra en
   * pantalla). `titulo` es el de la hoja, que no cuenta como opción.
   */
  async opcionesDeLaHoja(titulo: string): Promise<string[]> {
    const vistas: string[] = [];
    let sinNuevas = 0;
    while (sinNuevas < 2) {
      const antes = vistas.length;
      for (const txt of await this.opcionesVisibles(titulo)) if (!vistas.includes(txt)) vistas.push(txt);
      sinNuevas = vistas.length === antes ? sinNuevas + 1 : 0;
      if (sinNuevas < 2) await this.screen.swipe('up');
    }
    return vistas;
  }

  async escribirCalle(texto: string): Promise<void> {
    await this.calle.fill(texto);
  }
}
