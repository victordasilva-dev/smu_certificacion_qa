import { Locator, Page } from '@playwright/test';
import { capturarEvidencia } from '../support/evidencia';

/**
 * Confirmación de dirección con PIN en el mapa (B2C-99): las dos pantallas del drawer del Store
 * Locator que vienen después de elegir una sugerencia de Google, "Agregar nueva dirección" (mapa con
 * el PIN, el círculo del radio y "Continuar con detalles de la dirección") y "Detalles de la
 * dirección" (mapa con "Ajusta aquí", la dirección con "Editar", los campos opcionales, las cuatro
 * etiquetas y "Agregar dirección").
 *
 * Explorado el 2026-10-26 en Desktop 1440x900:
 * - La sugerencia de Google abre "Agregar nueva dirección", no "Detalles de la dirección".
 * - El PIN es un marcador de Google Maps: una <img> de 26x37 dentro del mapa, sin rol ni texto. Se
 *   arrastra con el mouse desde su centro; arrastrar en otro punto mueve el mapa, no el PIN.
 * - El centro del mapa (enlace "Abre esta zona en Google Maps", `maps?ll=`) es la posición en que
 *   se abrió la pantalla; arrastrar el PIN no lo mueve. Las coordenadas del PIN ajustado viajan en
 *   el POST `…/smu-delivery/…/apply` al agregar la dirección.
 * - El toast de "fuera del radio" es un role=alert fuera del drawer, con "Ajustar"
 *   (data-testid=delivery-pin-adjust) y la X (aria-label Close).
 * - Las etiquetas son role=radio con aria-checked; la seleccionada lleva el borde rojo
 *   rgb(218, 41, 28). "Otro" (pin) viene marcada por defecto.
 *
 * Es un componente, no una página: no extiende `BasePage`.
 */
export class ConfirmacionPinModal {
  /** "Agregar nueva dirección": el subflujo del PIN. */
  readonly agregar: Locator;
  /** "Detalles de la dirección". */
  readonly detalles: Locator;

  constructor(private readonly page: Page) {
    this.agregar = page.locator('[role="dialog"]').filter({ hasText: /agregar nueva direcci[óo]n/i }).locator('visible=true').first();
    this.detalles = page.locator('[role="dialog"]').filter({ hasText: /detalles de la direcci[óo]n/i }).locator('visible=true').first();
  }

  /** La pantalla del drawer que esté a la vista (cualquiera de las dos). */
  get actual(): Locator {
    return this.page
      .locator('[role="dialog"]')
      .filter({ hasText: /agregar nueva direcci[óo]n|detalles de la direcci[óo]n/i })
      .locator('visible=true')
      .first();
  }

  /** El título de la pantalla a la vista: el `banner` del drawer. */
  async titulo(): Promise<string> {
    return ((await this.actual.getByRole('banner').first().textContent()) ?? '').trim();
  }

  // --- Comunes a las dos pantallas ------------------------------------------------------------

  botonVolver(root: Locator): Locator {
    return root.getByRole('button', { name: /^volver$/i });
  }

  botonCerrar(root: Locator): Locator {
    return root.getByRole('button', { name: /^cerrar$/i });
  }

  mapa(root: Locator): Locator {
    return root.locator('[aria-label*="Mapa para ajustar"]').first();
  }

  /** El centro del mapa, del enlace "Abre esta zona en Google Maps" (`maps?ll=<lat>,<lng>`). */
  async centro(root: Locator): Promise<{ lat: number; lng: number; zoom: number } | null> {
    const enlace = root.locator('a[href*="maps?ll="]').first();
    if (!(await enlace.count())) return null;
    const href = (await enlace.getAttribute('href')) ?? '';
    const m = href.match(/ll=(-?[\d.]+),(-?[\d.]+).*?[?&]z=(\d+)/);
    return m ? { lat: Number(m[1]), lng: Number(m[2]), zoom: Number(m[3]) } : null;
  }

  /** "m" (mapa) o "h" (satelital): el tipo del primer enlace de Google Maps del mapa principal. */
  async tipoDeVista(root: Locator): Promise<string> {
    const href = (await root.locator('a[href*="maps?ll="]').first().getAttribute('href')) ?? '';
    return href.match(/[?&]t=(\w)/)?.[1] ?? '';
  }

  /** La caja del PIN: la imagen de 26x37 del marcador dentro del mapa, o null si no hay mapa. */
  async cajaDelPin(root: Locator): Promise<{ x: number; y: number; width: number; height: number } | null> {
    const mapa = this.mapa(root);
    if (!(await mapa.count())) return null;
    return mapa.evaluate((m) => {
      const img = Array.from(m.querySelectorAll('img')).find((e) => {
        const r = e.getBoundingClientRect();
        return r.width >= 20 && r.width <= 40 && r.height >= 30 && r.height <= 50;
      });
      if (!img) return null;
      const r = img.getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: r.height };
    });
  }

  /** Metros por píxel del mapa al zoom en que está, en la latitud de su centro. */
  async metrosPorPixel(root: Locator): Promise<number> {
    const c = await this.centro(root);
    if (!c) throw new Error('El mapa no publica su centro');
    return (156543.03392 * Math.cos((c.lat * Math.PI) / 180)) / 2 ** c.zoom;
  }

  /**
   * Arrastra el PIN `metros` en diagonal (abajo-derecha, o arriba-izquierda si no cabe). Devuelve
   * la caja del PIN antes y después.
   */
  async arrastrarPin(root: Locator, metros: number): Promise<{ antes: { x: number; y: number }; despues: { x: number; y: number } }> {
    const caja = await this.cajaDelPin(root);
    if (!caja) throw new Error('No se encontró el PIN en el mapa');
    const mapa = (await this.mapa(root).boundingBox())!;
    const px = metros / (await this.metrosPorPixel(root)) / Math.SQRT2;
    const x = caja.x + caja.width / 2;
    const y = caja.y + caja.height / 2;
    const cabe = x + px < mapa.x + mapa.width - 30 && y + px < mapa.y + mapa.height - 30;
    const signo = cabe ? 1 : -1;
    await this.page.mouse.move(x, y);
    await this.page.mouse.down();
    await this.page.mouse.move(x + signo * px, y + signo * px, { steps: 15 });
    await this.page.mouse.up();
    await this.page.waitForTimeout(1500);
    const fin = (await this.cajaDelPin(root)) ?? caja;
    return { antes: { x: caja.x, y: caja.y }, despues: { x: fin.x, y: fin.y } };
  }

  /** Lleva el PIN de vuelta hasta `destino` (la esquina de su caja original). */
  async arrastrarPinA(root: Locator, destino: { x: number; y: number }): Promise<void> {
    const caja = await this.cajaDelPin(root);
    if (!caja) throw new Error('No se encontró el PIN en el mapa');
    await this.page.mouse.move(caja.x + caja.width / 2, caja.y + caja.height / 2);
    await this.page.mouse.down();
    await this.page.mouse.move(destino.x + caja.width / 2, destino.y + caja.height / 2, { steps: 15 });
    await this.page.mouse.up();
    await this.page.waitForTimeout(1500);
  }

  // --- "Agregar nueva dirección" --------------------------------------------------------------

  get bannerImportante(): Locator {
    return this.agregar.getByText(/entregaremos tu compra en la ubicaci[óo]n marcada/i);
  }

  /** La dirección bajo el mapa: el párrafo que sigue a "Dirección". */
  get direccionBajoMapa(): Locator {
    return this.agregar.locator('p').filter({ hasText: /^direcci[óo]n$/i }).locator('xpath=following-sibling::p[1]');
  }

  get botonContinuar(): Locator {
    return this.agregar.getByRole('button', { name: /continuar con detalles? de la direcci[óo]n/i });
  }

  get toggleSatelital(): Locator {
    return this.agregar.getByRole('button', { name: /vista de mapa y vista satelital/i });
  }

  /** El toast "La ubicación seleccionada se encuentra fuera del radio…" (vive fuera del drawer). */
  get toastFueraDeRadio(): Locator {
    return this.page.getByRole('alert').filter({ hasText: /fuera del radio de la direcci[óo]n actual/i }).first();
  }

  get botonAjustar(): Locator {
    return this.page.getByTestId('delivery-pin-adjust').first();
  }

  get botonCerrarToast(): Locator {
    return this.toastFueraDeRadio.getByRole('button', { name: /^close$/i });
  }

  // --- "Detalles de la dirección" -------------------------------------------------------------

  get ajustaAqui(): Locator {
    return this.detalles.getByRole('button', { name: /ajustar la ubicaci[óo]n del pin/i });
  }

  /** "Calle Uno 23" y "La Florida, Región Metropolitana": los dos párrafos junto a "Editar". */
  async lineasDeDireccion(): Promise<string[]> {
    return this.botonEditar.locator('xpath=preceding-sibling::*[1]').locator('p').allInnerTexts();
  }

  get botonEditar(): Locator {
    return this.detalles.getByRole('button', { name: /^editar$/i });
  }

  get etiquetaDpto(): Locator {
    return this.detalles.getByText(/n[°º] dpto, oficina, piso, etc/i).first();
  }

  get campoDpto(): Locator {
    return this.detalles.locator('input').nth(0);
  }

  get etiquetaNombre(): Locator {
    return this.detalles.getByText(/nombre de direcci[óo]n/i).first();
  }

  get campoNombre(): Locator {
    return this.detalles.locator('input').nth(1);
  }

  get etiquetas(): Locator {
    return this.detalles.getByRole('radiogroup').getByRole('radio');
  }

  get etiquetaInstrucciones(): Locator {
    return this.detalles.getByText(/instrucci[óo]n(es)? para entrega/i).first();
  }

  get campoInstrucciones(): Locator {
    return this.detalles.locator('textarea').first();
  }

  get botonAgregarDireccion(): Locator {
    return this.detalles.getByRole('button', { name: /^agregar direcci[óo]n$/i });
  }

  /** "Confirmar dirección": la acción del CA15 cuando el mapa no carga. */
  get botonConfirmarDireccion(): Locator {
    return this.actual.getByRole('button', { name: /^confirmar direcci[óo]n$/i });
  }

  get errorDelMapa(): Locator {
    return this.page.getByText(/no pudimos cargar el mapa/i).first();
  }

  /** Estado de cada etiqueta: su nombre, si está marcada y el color de su borde. */
  async estadoEtiquetas(): Promise<{ nombre: string; marcada: boolean; borde: string }[]> {
    return this.etiquetas.evaluateAll((es) =>
      es.map((e) => ({
        nombre: e.getAttribute('aria-label') ?? (e.textContent ?? '').trim(),
        marcada: e.getAttribute('aria-checked') === 'true',
        borde: getComputedStyle(e).borderColor,
      })),
    );
  }

  // --- Evidencia -------------------------------------------------------------------------------

  async capturar(cpId: string, paso?: number | string, etiqueta?: string, destino: Locator | Page = this.actual): Promise<string> {
    return capturarEvidencia(destino, cpId, paso, etiqueta);
  }
}
