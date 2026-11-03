import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';

/**
 * PDP de la app (B2C-31), observada en Android con el build v1.0.7 (2026-10-20): título con el
 * nombre, galería (`pdp-gallery-page`, label "Imagen i de N" dentro de "Ampliar imagen i de N"),
 * corazón ("Agregar a mis productos"), compartir, "Guardar en listas", precio y PPUM, marca (botón
 * con el nombre de la marca), formato, "Agregar", el tab "Información" con sus pills (Descripción,
 * Ingredientes, Estilos de alimentación…) fijas al hacer scroll, y el bloque de precio + "Agregar"
 * fijo al pie cuando el original sale de pantalla.
 */
export class PdpScreen extends BaseScreen {
  get galeria(): Locator {
    return this.screen.getByTestId('pdp-gallery-page');
  }

  get readyLocator(): Locator {
    return this.galeria;
  }

  get agregar(): Locator {
    return this.screen.getByRole('button', { name: 'Agregar' });
  }

  get corazon(): Locator {
    return this.screen.getByRole('button', { name: 'Agregar a mis productos' });
  }

  get guardarEnListas(): Locator {
    return this.screen.getByRole('button', { name: 'Guardar en listas' });
  }

  get tabInformacion(): Locator {
    return this.screen.getByText('Información');
  }

  pill(nombre: string): Locator {
    return this.screen.getByText(nombre).first();
  }

  texto(t: string | RegExp): Locator {
    return this.screen.getByText(t);
  }

  /** Todos los textos y labels de la pantalla, en orden de árbol. */
  async textos(): Promise<{ t: string; y: number; id: string }[]> {
    const out: { t: string; y: number; id: string }[] = [];
    const walk = (n: any) => {
      const t = (n.label ?? n.text ?? n.value ?? '').toString().trim();
      const id = (n.identifier ?? n.resourceId ?? '').toString();
      if (t || id) out.push({ t, y: n.bounds?.y ?? n.rect?.y ?? -1, id });
      for (const c of n.children ?? []) walk(c);
    };
    for (const n of await this.screen.viewTree()) walk(n);
    return out;
  }

  /** "Imagen i de N" de la galería. */
  async posicionGaleria(): Promise<{ i: number; n: number } | null> {
    const t = (await this.textos()).find((x) => /^Imagen \d+ de \d+$/.test(x.t));
    const m = t ? /^Imagen (\d+) de (\d+)$/.exec(t.t) : null;
    return m ? { i: Number(m[1]), n: Number(m[2]) } : null;
  }
}
