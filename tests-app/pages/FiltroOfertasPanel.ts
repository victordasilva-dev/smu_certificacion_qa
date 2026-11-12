import { execSync } from 'child_process';
import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';

/**
 * Filtro «Ofertas» del panel «Selecciona tus filtros» de la app (HU B2C-95). Verificado en Android,
 * build v1.0.1 (2026-11-11), PLP Carnes > Vacuno:
 *
 * - En «Aplica tus filtros» la primera tarjeta es «Ofertas 🤩» (la HU escribe 😎) con «N productos»
 *   debajo y el Switch «Filtrar productos en oferta» a la derecha. El árbol expone su `isChecked`.
 * - Debajo, secciones colapsables (Button): Estilos de alimentación, Sellos de advertencia, Marcas,
 *   Precio, Tipo de envase. «Marcas» se expande en CheckBox con el nombre de cada marca.
 * - Abajo, fijo, el botón «Mostrar N productos».
 */
export interface NodoPanel { id: string; label: string; type: string; x: number; y: number; w: number; h: number; checked?: boolean }

const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));

export class FiltroOfertasPanel extends BaseScreen {
  get readyLocator(): Locator {
    return this.screen.getByText('Selecciona tus filtros');
  }

  get toggle(): Locator {
    return this.screen.getByRole('switch', { name: 'Filtrar productos en oferta' });
  }

  get mostrar(): Locator {
    return this.screen.getByRole('button', { name: /^Mostrar \d+ productos?$/ });
  }

  async nodos(): Promise<NodoPanel[]> {
    const out: NodoPanel[] = [];
    const rec = (n: any) => {
      const id = String(n.identifier ?? n.resourceId ?? '');
      const label = String(n.label ?? n.text ?? '');
      const r = n.rect ?? n.bounds;
      if (r && !id.startsWith('com.android.systemui') && (label || id)) {
        out.push({ id, label, type: String(n.type ?? '').split('.').pop()!, x: r.x, y: r.y, w: r.width, h: r.height, checked: n.isChecked ?? n.checked });
      }
      for (const c of n.children ?? []) rec(c);
    };
    for (const n of await this.screen.viewTree()) rec(n);
    return out;
  }

  /** La tarjeta Ofertas: nombre, conteo y switch; `null` si el panel no la muestra. */
  async tarjetaOfertas(): Promise<{ nombre: NodoPanel; conteo: NodoPanel | undefined; toggle: NodoPanel | undefined } | null> {
    const n = await this.nodos();
    const nombre = n.find((x) => x.type === 'TextView' && /^Ofertas\b/.test(x.label));
    if (!nombre) return null;
    const conteo = n.find((x) => x.type === 'TextView' && /^\d+ productos?$/.test(x.label) && Math.abs(x.x - nombre.x) < 10 && x.y > nombre.y && x.y - nombre.y < 120);
    const toggle = n.find((x) => x.type === 'Switch' && Math.abs(x.y + x.h / 2 - (nombre.y + 50)) < 100);
    return { nombre, conteo, toggle };
  }

  /** Filtros de «Aplica tus filtros» en orden vertical (la tarjeta Ofertas y las secciones). */
  async filtrosEnOrden(): Promise<string[]> {
    const n = await this.nodos();
    const titulo = n.find((x) => x.label === 'Aplica tus filtros');
    const items = n.filter((x) => titulo && x.y > titulo.y && ((x.type === 'TextView' && /^Ofertas\b/.test(x.label)) || (x.type === 'Button' && !/^Mostrar/.test(x.label))));
    return items.sort((a, b) => a.y - b.y).map((x) => x.label);
  }

  async numeroDe(texto: string | undefined): Promise<number | null> {
    const m = /(\d+)/.exec(texto ?? '');
    return m ? Number(m[1]) : null;
  }

  /** N del botón «Mostrar N productos». */
  async conteoBoton(): Promise<number | null> {
    const b = (await this.nodos()).find((x) => x.type === 'Button' && /^Mostrar \d+ productos?$/.test(x.label));
    return this.numeroDe(b?.label);
  }

  /** Espera a que el botón muestre `esperado` (debounce del conteo); devuelve el último valor leído. */
  async esperarConteoBoton(esperado: number, ms = 20000): Promise<number | null> {
    const fin = Date.now() + ms;
    let v = await this.conteoBoton();
    while (v !== esperado && Date.now() < fin) {
      await dormir(1500);
      v = await this.conteoBoton();
    }
    return v;
  }

  /** Toca el centro de un nodo (el Switch y las CheckBox no siempre resuelven por rol con mobilecli). */
  private tocar(n: NodoPanel): void {
    execSync(`adb shell input tap ${Math.round(n.x + n.w / 2)} ${Math.round(n.y + n.h / 2)}`, { timeout: 15000 });
  }

  async tocarToggle(): Promise<void> {
    // Tras elegir una marca el panel queda desplazado y la tarjeta Ofertas fuera de pantalla: se sube.
    let t = (await this.tarjetaOfertas())?.toggle;
    for (let i = 0; i < 5 && !(t && t.y > 300 && t.y < 1950); i++) {
      execSync('adb shell input swipe 540 900 540 1600 800', { timeout: 20000 });
      await dormir(1200);
      t = (await this.tarjetaOfertas())?.toggle;
    }
    if (!t) throw new Error('El panel no muestra el toggle de Ofertas');
    this.tocar(t);
    await dormir(2500);
  }

  /**
   * Estado del toggle. El árbol no siempre trae `checked` del Switch tras tocarlo; entonces se decide
   * por el chip «Ofertas» de «Filtros aplicados», que la app muestra solo con el toggle activo.
   */
  async estadoToggle(): Promise<boolean | undefined> {
    const t = (await this.tarjetaOfertas())?.toggle;
    if (typeof t?.checked === 'boolean') return t.checked;
    const n = await this.nodos();
    const aplicados = n.find((x) => x.label === 'Filtros aplicados');
    const chip = aplicados && n.some((x) => x.label === 'Ofertas' && x.y > aplicados.y && x.y < aplicados.y + 250);
    return Boolean(chip);
  }

  /** Expande «Marcas» y deja a la vista sus casillas. */
  async abrirMarcas(): Promise<void> {
    await this.screen.getByRole('button', { name: 'Marcas' }).tap();
    await dormir(2000);
    execSync('adb shell input swipe 540 1700 540 1100 800', { timeout: 20000 });
    await dormir(1500);
  }

  async marcas(): Promise<NodoPanel[]> {
    return (await this.nodos()).filter((x) => x.type === 'CheckBox');
  }

  async elegirMarca(nombre: string): Promise<void> {
    // Con «Filtros aplicados» arriba la lista de marcas queda más abajo: se desplaza el panel hasta verla.
    let c = (await this.marcas()).find((x) => x.label === nombre && x.y > 300 && x.y < 1950);
    for (let i = 0; i < 5 && !c; i++) {
      execSync('adb shell input swipe 540 1700 540 1250 800', { timeout: 20000 });
      await dormir(1200);
      c = (await this.marcas()).find((x) => x.label === nombre && x.y > 300 && x.y < 1950);
    }
    if (!c) throw new Error(`El panel no muestra la marca «${nombre}»`);
    this.tocar(c);
    await dormir(2500);
  }

  async confirmar(): Promise<void> {
    await this.mostrar.tap();
    await dormir(5000);
  }
}
