import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';

/**
 * "Detalles de la dirección" (confirmación con PIN, HU B2C-99). Verificado en Android, build
 * v1.0.7 (2026-10-09): botón "Volver", el mapa ("Google Map") con "Ajusta aquí", la dirección en
 * dos renglones (calle y número / comuna, región), "Editar", campos opcionales y "Agregar dirección".
 */
export class DetalleDireccionScreen extends BaseScreen {
  get titulo(): Locator {
    return this.screen.getByText('Detalles de la dirección');
  }

  get readyLocator(): Locator {
    return this.titulo;
  }

  get mapa(): Locator {
    return this.screen.getByRole('button', { name: /mover el punto de entrega en el mapa/i });
  }

  /**
   * El botón del pie: "Confirmar dirección" la primera vez que el invitado fija una dirección, y
   * "Agregar dirección" cuando ya tiene una activa (B2C-122, explorado 2026-10-14). Tras tocarlo con
   * carro, si la tienda abastecedora cambia, se abre "Algunos productos podrían agotarse".
   */
  get botonConfirmar(): Locator {
    return this.screen.getByRole('button', { name: /^(confirmar|agregar) direcci[oó]n$/i });
  }

  get editar(): Locator {
    return this.screen.getByRole('button', { name: 'Editar la dirección' });
  }

  /** Los renglones de la dirección: los textos entre el mapa y la sección del N° de dpto. */
  async direccion(): Promise<string> {
    const nodos: { t: string; y: number; h: number; tipo: string }[] = [];
    const recorrer = (n: any) => {
      const t = (n.text ?? n.label ?? '').trim();
      const r = n.rect ?? n.bounds;
      if (t && r) nodos.push({ t, y: r.y, h: r.height, tipo: String(n.type ?? '') });
      for (const c of n.children ?? []) recorrer(c);
    };
    for (const n of await this.screen.viewTree()) recorrer(n);
    const mapa = nodos.find((n) => n.t === 'Google Map');
    const fin = nodos.find((n) => /^N° dpto/.test(n.t));
    if (!mapa || !fin) return '';
    return nodos
      .filter((n) => n.y >= mapa.y + mapa.h && n.y < fin.y && /TextView|StaticText/.test(n.tipo) && n.t !== 'Editar')
      .sort((a, b) => a.y - b.y)
      .map((n) => n.t)
      .join(', ');
  }
}
