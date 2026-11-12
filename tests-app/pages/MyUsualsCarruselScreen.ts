import { execSync } from 'child_process';
import sharp from 'sharp';
import { BaseScreen } from './BaseScreen';
import type { Locator } from 'mobilewright';

/**
 * Carrusel My Usuals del Home de la app (HU B2C-55). Verificado en Android, build v1.0.1 (2026-11-11).
 *
 * Título «Tus productos mas comprados» (un `View` de ancho completo, 44..1036), el botón «Ver todos»
 * (nombre accesible «Ver todos mis productos frecuentes») y las tarjetas `product-<sku>` en una fila
 * horizontal de ~479 px: se ven dos y asoma la tercera. Igual que en la web, el carrusel trae solo
 * los 5 primeros SKU de `c_myUsuals`.
 *
 * El NavBar translúcido tapa la franja y<300: el título se considera a la vista desde y≥330.
 */
export interface NodoApp { id: string; label: string; type: string; x: number; y: number; w: number; h: number }

const TITULO = /^Tus productos m[aá]s comprados$/i;
const VER_TODOS = 'Ver todos mis productos frecuentes';

function deslizar(x1: number, y1: number, x2: number, y2: number, ms = 400): void {
  execSync(`adb shell input swipe ${x1} ${y1} ${x2} ${y2} ${ms}`, { timeout: 20000 });
}
const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));

export class MyUsualsCarruselScreen extends BaseScreen {
  get readyLocator(): Locator {
    return this.screen.getByText(TITULO);
  }

  get verTodos(): Locator {
    return this.screen.getByRole('button', { name: VER_TODOS });
  }

  /** Nodos visibles del árbol con nombre o identificador, con su caja. */
  async nodos(): Promise<NodoApp[]> {
    const out: NodoApp[] = [];
    const rec = (n: any) => {
      const id = String(n.identifier ?? n.resourceId ?? '');
      const label = String(n.label ?? n.text ?? '');
      const r = n.rect ?? n.bounds;
      if (r && !id.startsWith('com.android.systemui') && (label || id)) {
        out.push({ id, label, type: String(n.type ?? '').split('.').pop()!, x: r.x, y: r.y, w: r.width, h: r.height });
      }
      for (const c of n.children ?? []) rec(c);
    };
    for (const n of await this.screen.viewTree()) rec(n);
    return out;
  }

  /** Vuelve al inicio del Home (gesto hacia abajo hasta ver «Los más vendidos»). */
  async alInicioDelHome(): Promise<void> {
    for (let i = 0; i < 16; i++) {
      if ((await this.nodos()).some((n) => n.label === 'Los más vendidos' && n.y > 250)) return;
      deslizar(540, 700, 540, 1900, 200);
      await dormir(600);
    }
  }

  /**
   * Baja por el Home hasta dejar el título del carrusel bajo el NavBar y las tarjetas a la vista.
   * Devuelve `false` si llega al pie («TÉRMINOS Y CONDICIONES») sin encontrarlo.
   */
  async llevarAVista(pasadas = 2): Promise<boolean> {
    // El carrusel llega después del resto del Home (espera los datos del cliente): si la primera
    // pasada llega al pie sin verlo, se espera y se recorre de nuevo desde arriba.
    for (let p = 0; p < pasadas; p++) {
      if (await this.bajarHastaElCarrusel()) return true;
      if (p < pasadas - 1) {
        await dormir(5000);
        await this.alInicioDelHome();
      }
    }
    return false;
  }

  private async bajarHastaElCarrusel(): Promise<boolean> {
    for (let i = 0; i < 40; i++) {
      const n = await this.nodos();
      const t = n.find((x) => TITULO.test(x.label));
      if (t && t.y >= 330 && t.y <= 900) return true;
      // Ajustes finos con gesto lento: uno rápido arrastra con inercia y se pasa del título.
      if (t && t.y < 330) deslizar(540, 900, 540, 1250, 1500);
      else if (t) deslizar(540, 1600, 540, Math.max(200, 1600 - (t.y - 500)), 1500);
      else if (n.some((x) => /^T[ÉE]RMINOS Y CONDICIONES/.test(x.label) && x.y < 1400)) return false;
      else deslizar(540, 1800, 540, 800, 300);
      await dormir(900);
    }
    return false;
  }

  /** El título del carrusel, si está en el árbol. */
  async titulo(): Promise<NodoApp | undefined> {
    return (await this.nodos()).find((x) => TITULO.test(x.label));
  }

  /** Tarjetas de la fila del carrusel (debajo de «Ver todos»), en orden de izquierda a derecha. */
  async tarjetas(): Promise<NodoApp[]> {
    const n = await this.nodos();
    const vt = n.find((x) => x.label === VER_TODOS);
    if (!vt) return [];
    return n
      .filter((x) => /^product-\d[\w-]*$/.test(x.id) && x.y > vt.y && x.y < vt.y + 250)
      .sort((a, b) => a.x - b.x);
  }

  /** Desliza la fila del carrusel hacia la izquierda (muestra los productos siguientes). */
  async avanzar(): Promise<void> {
    const t = (await this.tarjetas())[0];
    const y = t ? t.y + 500 : 1000;
    deslizar(950, y, 150, y, 400);
    await dormir(1500);
  }

  /** Recorre el carrusel entero y devuelve los SKU en orden. */
  async todosLosSkus(maxPasos = 8): Promise<string[]> {
    const skus: string[] = [];
    let sinNuevos = 0;
    for (let i = 0; i < maxPasos && sinNuevos < 2; i++) {
      const antes = skus.length;
      for (const t of await this.tarjetas()) {
        const sku = t.id.replace(/^product-/, '');
        if (!skus.includes(sku)) skus.push(sku);
      }
      sinNuevos = skus.length === antes ? sinNuevos + 1 : 0;
      await this.avanzar();
    }
    return skus;
  }

  /** SKU de las tarjetas que se ven enteras en pantalla. */
  async skusVisibles(anchoPantalla = 1080): Promise<string[]> {
    return (await this.tarjetas()).filter((t) => t.x >= 0 && t.x + t.w <= anchoPantalla + 2 && t.w > 300).map((t) => t.id.replace(/^product-/, ''));
  }

  /**
   * Desvío horizontal (px) entre el centro del texto del título y el centro de su caja, medido sobre la
   * captura: la caja ocupa todo el ancho, así que el árbol no dice dónde queda el texto.
   */
  async desvioDelTitulo(): Promise<{ desvio: number; textoX: [number, number] } | null> {
    const t = await this.titulo();
    if (!t) return null;
    const png = await this.screen.screenshot();
    const { data, info } = await sharp(png).extract({ left: t.x, top: t.y, width: t.w, height: t.h }).raw().toBuffer({ resolveWithObject: true });
    let min = Infinity;
    let max = -Infinity;
    for (let x = 0; x < info.width; x++) {
      for (let y = 0; y < info.height; y++) {
        const i = (y * info.width + x) * info.channels;
        if (data[i] + data[i + 1] + data[i + 2] < 300) { min = Math.min(min, x); max = Math.max(max, x); break; }
      }
    }
    if (!Number.isFinite(min)) return null;
    return { desvio: Math.round(Math.abs((min + max) / 2 - info.width / 2)), textoX: [t.x + min, t.x + max] };
  }

  /** Proporción de píxeles no blancos en la zona de imagen de una tarjeta (0 = sin imagen). */
  async proporcionImagen(t: NodoApp): Promise<number> {
    const png = await this.screen.screenshot();
    const top = t.y + 60;
    const { data, info } = await sharp(png).extract({ left: t.x + 20, top, width: t.w - 40, height: 300 }).raw().toBuffer({ resolveWithObject: true });
    let color = 0;
    // Cualquier canal bajo 240: las fotos claras (carne al vacío sobre fondo blanco) también cuentan.
    for (let i = 0; i < data.length; i += info.channels) if (data[i] < 240 || data[i + 1] < 240 || data[i + 2] < 240) color++;
    return color / (info.width * info.height);
  }
}
