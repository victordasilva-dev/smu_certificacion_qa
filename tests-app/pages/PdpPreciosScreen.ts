import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';

/** Un texto de la PDP con su recuadro. */
export interface TextoPDP {
  texto: string;
  x: number;
  y: number;
  ancho: number;
  alto: number;
}

/**
 * PDP de la app (B2C-51). Verificado en Android v1.0.7 (2026-10-16), invitado: "Guardar en listas",
 * el bloque de precios (badge "XX%", precio, PPUM "($X x Kg)", "Antes: $X", tercer precio con badge
 * de medio de pago), "Marca | Nombre", formato, "Combina la promo" (si aplica) y "Agregar".
 * Sin testIDs en el bloque de precios: se lee del árbol entre "Guardar en listas" y "Agregar".
 */
export class PDPScreen extends BaseScreen {
  get guardarEnListas(): Locator {
    return this.screen.getByText('Guardar en listas');
  }

  get readyLocator(): Locator {
    return this.guardarEnListas;
  }

  get botonAgregar(): Locator {
    return this.screen.getByRole('button', { name: 'Agregar' });
  }

  /** "Combina la promo" bajo el precio (promo combinable, B2C-74). */
  get botonCombinaLaPromo(): Locator {
    return this.screen.getByRole('button', { name: 'Combina la promo' });
  }

  /** Toasts de "Completa la promo" (B2C-63): "Agrega N y ahorra más" / "¡Completaste la promo!". */
  get toastCompletaLaPromo(): Locator {
    return this.screen.getByText(/agrega \d+ y ahorra|completaste la promo/i);
  }

  /** Textos del bloque de precios: los que están entre "Guardar en listas" y el botón "Agregar". */
  async bloqueDePrecios(): Promise<TextoPDP[]> {
    const nodos: (TextoPDP & { tipo: string })[] = [];
    const visitar = (n: any) => {
      const t = (n.text ?? n.label ?? '').trim();
      const r = n.rect ?? n.bounds;
      if (t && r) nodos.push({ texto: t, x: r.x, y: r.y, ancho: r.width, alto: r.height, tipo: String(n.type ?? '') });
      for (const c of n.children ?? []) visitar(c);
    };
    for (const n of await this.screen.viewTree()) visitar(n);
    const ini = nodos.find((n) => n.texto === 'Guardar en listas');
    const fin = nodos.find((n) => n.texto === 'Agregar' && /Button/.test(n.tipo));
    if (!ini || !fin) return [];
    return nodos
      .filter((n) => /TextView|StaticText/.test(n.tipo) && n.y > ini.y + ini.alto && n.y < fin.y)
      .sort((a, b) => a.y - b.y || a.x - b.x)
      .map(({ tipo, ...t }) => t);
  }
}
