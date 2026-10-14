import type { Locator } from 'mobilewright';
import { tolerante } from '../support/tolerante';
import { BaseScreen } from './BaseScreen';
import { DireccionManualScreen } from './DireccionManualScreen';

/** Un texto del árbol de accesibilidad con su posición. */
export interface NodoTexto {
  texto: string;
  tipo: string;
  x: number;
  y: number;
  alto: number;
}

/** Una dirección guardada de la lista del modal. */
export interface DireccionGuardada {
  /** Lo que lee el lector de pantalla: "Otra Casa, Camino La Fuente, Las Condes, Metropolitana". */
  descripcion: string;
  /** La etiqueta (primer renglón): "Otra Casa". */
  etiqueta: string;
  /** El segundo renglón: calle y número (si hay), comuna y región. */
  detalle: string;
  /** ¿Tiene el menú ⋮ ("Opciones de dirección") en su fila? */
  conMenu: boolean;
  y: number;
}

/**
 * Modal "Elige tu método de entrega" de la app (HU B2C-26). Verificado en Android, build v1.0.7
 * (2026-10-09). No tiene testIDs: se ubica por textos.
 *
 * - Pestañas "Despacho a domicilio" / "Retiro en tienda", buscador "Calle, dirección o lugar"
 *   (EditText, placeholder "Ej: Av. Manquehue norte 457, Las Condes") y "Activar mi ubicación actual".
 * - Con texto escrito: sugerencias de Google ("<calle>, <comuna>, Chile") y, al final,
 *   "¿No aparece tu dirección?" + botón "Agregar".
 * - Invitado sin direcciones: "Aún no tienes direcciones guardadas".
 * - Con sesión: "Dirección de despacho" con la activa (un renglón "calle número, comuna, región",
 *   sin etiqueta, en un recuadro) y "Direcciones guardadas", cada una con etiqueta, detalle y el
 *   botón "Opciones de dirección" (⋮), que abre directo "¿Quieres eliminar tu dirección?".
 * - Elegir una dirección guardada pide OTP ("Autenticación requerida", `otp-digit-1..6`).
 */
export class MetodoEntregaModal extends BaseScreen {
  get titulo(): Locator {
    return this.screen.getByText('Elige tu método de entrega');
  }

  get readyLocator(): Locator {
    return this.titulo;
  }

  get pestanaDespacho(): Locator {
    return this.screen.getByText('Despacho a domicilio');
  }

  get buscador(): Locator {
    return this.screen.getByPlaceholder('Manquehue', { exact: false });
  }

  get activarUbicacion(): Locator {
    return this.screen.getByText('Activar mi ubicación actual');
  }

  get noApareceTuDireccion(): Locator {
    return this.screen.getByText('¿No aparece tu dirección?');
  }

  get botonAgregar(): Locator {
    return this.screen.getByRole('button', { name: 'Agregar' });
  }

  /** Sugerencias de Google: cada una termina en ", Chile". */
  get sugerencias(): Locator {
    return this.screen.getByRole('text').filter({ hasText: /, Chile$/ });
  }

  get tituloDireccionActiva(): Locator {
    return this.screen.getByText('Dirección de despacho');
  }

  get tituloDireccionesGuardadas(): Locator {
    return this.screen.getByText('Direcciones guardadas');
  }

  get sinDireccionesGuardadas(): Locator {
    return this.screen.getByText('Aún no tienes direcciones guardadas');
  }

  get confirmarEliminar(): Locator {
    return this.screen.getByText('¿Quieres eliminar tu dirección?');
  }

  get noGracias(): Locator {
    return this.screen.getByRole('button', { name: /no,? gracias/i });
  }

  get autenticacionRequerida(): Locator {
    return this.screen.getByText('Autenticación requerida');
  }

  get toastNoPudimosUbicar(): Locator {
    return this.screen.getByText(/no pudimos obtener tu ubicaci[oó]n/i);
  }

  /**
   * Escribe en el buscador. En el emulador el agente de mobilecli a veces no responde al enviar el
   * texto ("failed to send text … agent timed out", B2C-122 2026-10-14): es ambiente, así que se
   * reintenta antes de dar el caso por caído.
   */
  async buscar(texto: string): Promise<void> {
    await tolerante(() => this.buscador.tap());
    await tolerante(() => this.buscador.fill(texto));
  }

  /**
   * Escribe en el buscador y toca la sugerencia de Google que casa con `texto`. Cada sugerencia es
   * una fila (ViewGroup) cuyo label junta los dos renglones ("Calle Uno 23, La Florida, Chile"),
   * con un TextView por renglón: `texto` se compara contra ese label.
   */
  async elegirSugerencia(busqueda: string, texto: RegExp): Promise<void> {
    await this.buscar(busqueda);
    // Solo las filas de sugerencia terminan en ", Chile": así no casa con el texto del propio buscador.
    const s = this.screen.getByText(new RegExp(`(${texto.source}).*, Chile$`, texto.flags)).first();
    await tolerante(() => s.waitFor({ state: 'visible', timeout: 30000 }));
    await tolerante(() => s.tap());
  }

  get pestanaRetiro(): Locator {
    return this.screen.getByText('Retiro en tienda');
  }

  /** "Selecciona tu tienda Unimarc": el inicio del flujo de retiro (B2C-121). */
  get tituloSeleccionTienda(): Locator {
    return this.screen.getByText('Selecciona tu tienda Unimarc');
  }

  /**
   * Píxeles rojos del ícono de una pestaña (B2C-138): la activa lleva el ícono en rojo y la
   * inactiva en gris. Se cuentan sobre una captura del dispositivo.
   */
  async pixelesRojosDelIcono(tab: Locator): Promise<number> {
    const caja = await tab.boundingBox();
    const png = await this.screen.screenshot();
    const sharp = (await import('sharp')).default;
    const { data, info } = await sharp(png).raw().toBuffer({ resolveWithObject: true });
    // getByText resuelve a la pestaña entera (ViewGroup de ~490 px, ícono en su tercio izquierdo) o
    // solo al texto (el ícono queda en la franja de ~90 px a su izquierda).
    const contenedor = caja.width > 450;
    const x0 = Math.max(0, Math.round(contenedor ? caja.x : caja.x - 90));
    const x1 = Math.round(contenedor ? caja.x + caja.width * 0.35 : caja.x);
    const y0 = Math.round(caja.y - 10), y1 = Math.round(caja.y + caja.height + 10);
    let rojos = 0;
    for (let y = y0; y < y1; y++) {
      for (let x = x0; x < x1; x++) {
        const i = (y * info.width + x) * info.channels;
        if (data[i] > 170 && data[i + 1] < 90 && data[i + 2] < 90) rojos++;
      }
    }
    return rojos;
  }

  /**
   * Pestaña Retiro en tienda: busca por localidad (placeholder "Ej: dirección, comuna o nombre"),
   * toca el RadioButton de la tienda (label "<nombre>. <dirección>") y "Confirmar tienda".
   * Explorado en Android v1.0.7 (B2C-123, 2026-10-14).
   */
  async elegirTienda(nombre: string, busqueda: string): Promise<void> {
    const campo = this.screen.getByPlaceholder('comuna o nombre', { exact: false });
    await tolerante(() => campo.tap());
    await tolerante(() => campo.fill(busqueda));
    const fila = this.screen.getByText(new RegExp(`^${nombre.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\. `));
    await tolerante(() => fila.waitFor({ state: 'visible', timeout: 30000 }));
    await tolerante(() => fila.tap());
    await tolerante(() => this.screen.getByRole('button', { name: 'Confirmar tienda' }).tap());
  }

  async tapAgregar(): Promise<DireccionManualScreen> {
    await this.botonAgregar.tap();
    return new DireccionManualScreen(this.screen, this.plataforma);
  }

  async tapActivarUbicacion(): Promise<void> {
    await this.activarUbicacion.tap();
  }

  /** Toca una dirección guardada por su etiqueta. */
  async elegirDireccionGuardada(etiqueta: string): Promise<void> {
    await this.screen.getByText(etiqueta, { exact: true }).tap();
  }

  /** ⋮ de la dirección guardada con esa etiqueta. */
  async tapOpcionesDe(etiqueta: string): Promise<void> {
    const fila = (await this.direccionesGuardadas()).find((d) => d.etiqueta === etiqueta);
    if (!fila) throw new Error(`No está la dirección guardada "${etiqueta}" en el modal`);
    const menus = await this.screen.getByRole('button', { name: 'Opciones de dirección' }).all();
    for (const m of menus) {
      const c = await m.boundingBox();
      if (Math.abs(c.y + c.height / 2 - fila.y) < 80) return m.tap();
    }
    throw new Error(`La dirección "${etiqueta}" no tiene menú ⋮`);
  }

  async tapNoGracias(): Promise<void> {
    await this.noGracias.tap();
  }

  async cerrar(): Promise<void> {
    await this.screen.getByText('✕').first().tap();
  }

  async cerrarOtp(): Promise<void> {
    await this.screen.getByRole('button', { name: 'Cerrar' }).tap();
  }

  /** Los textos visibles del modal, en orden vertical. */
  async textos(): Promise<NodoTexto[]> {
    const nodos: NodoTexto[] = [];
    const recorrer = (n: any) => {
      const texto = (n.text ?? n.label ?? '').trim();
      const r = n.rect ?? n.bounds;
      const id = n.identifier ?? n.resourceId ?? '';
      if (texto && r && !String(id).startsWith('com.android.systemui')) {
        nodos.push({ texto, tipo: String(n.type ?? ''), x: r.x, y: r.y, alto: r.height });
      }
      for (const c of n.children ?? []) recorrer(c);
    };
    for (const n of await this.screen.viewTree()) recorrer(n);
    return nodos.sort((a, b) => a.y - b.y || a.x - b.x);
  }

  /** La dirección activa: el renglón bajo "Dirección de despacho". Null si no hay sección. */
  async direccionActiva(): Promise<{ texto: string; conMenu: boolean } | null> {
    const t = await this.textos();
    const ini = t.find((n) => n.texto === 'Dirección de despacho');
    if (!ini) return null;
    const fin = t.find((n) => n.texto === 'Direcciones guardadas')?.y ?? Infinity;
    const renglones = t.filter((n) => n.y > ini.y + 10 && n.y < fin && /TextView|StaticText/.test(n.tipo));
    if (!renglones.length) return null;
    const y = renglones[0].y + renglones[0].alto / 2;
    const conMenu = t.some((n) => n.texto === 'Opciones de dirección' && n.y > ini.y && n.y < fin && Math.abs(n.y - y) < 80);
    return { texto: renglones.map((r) => r.texto).join(' / '), conMenu };
  }

  /** Las direcciones guardadas, de arriba hacia abajo. */
  async direccionesGuardadas(): Promise<DireccionGuardada[]> {
    const t = await this.textos();
    const ini = t.find((n) => n.texto === 'Direcciones guardadas');
    if (!ini) return [];
    const menus = t.filter((n) => n.texto === 'Opciones de dirección');
    const contenedores = t.filter((n) => n.y > ini.y && /ViewGroup|Other|Cell/.test(n.tipo) && n.texto.includes(', '));
    return contenedores.map((c) => {
      const [etiqueta, ...resto] = c.texto.split(', ');
      const centro = c.y + c.alto / 2;
      return {
        descripcion: c.texto,
        etiqueta,
        detalle: resto.join(', '),
        conMenu: menus.some((m) => Math.abs(m.y - centro) < 80),
        y: centro,
      };
    });
  }
}
