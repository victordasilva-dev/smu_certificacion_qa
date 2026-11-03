import { Locator, Page } from '@playwright/test';
import { MetodoEntregaModal } from './MetodoEntregaModal';

/**
 * Pestaña "Retiro en tienda" del drawer del Store Locator (B2C-121).
 *
 * Compone `MetodoEntregaModal` (el drawer) y agrega lo propio de la pestaña: el listado de tiendas,
 * el buscador, la vista de mapa y la tarjeta de la tienda elegida. Es un componente, no una página.
 *
 * El listado renderiza solo las primeras 50 tiendas del país: una tienda concreta se encuentra con
 * el buscador (que filtra por nombre, comuna o dirección) y no desplazando la lista.
 */
export class RetiroEnTienda {
  readonly modal: MetodoEntregaModal;

  constructor(private readonly page: Page) {
    this.modal = new MetodoEntregaModal(page);
  }

  get root(): Locator {
    return this.modal.root;
  }

  get tab(): Locator {
    return this.modal.tabRetiroEnTienda;
  }

  get titulo(): Locator {
    return this.root.getByText(/^selecciona tu tienda unimarc$/i);
  }

  get buscador(): Locator {
    return this.modal.campoBuscarTienda;
  }

  /** Botón de la vista de lista ("Ir al mapa") o de la de mapa (hoy "Ir a la lista"). */
  get botonIrAlMapa(): Locator {
    return this.root.getByRole('button', { name: /^ir al mapa$/i });
  }

  get botonVolverALista(): Locator {
    return this.root.getByRole('button', { name: /volver a la lista/i });
  }

  /** El botón de alternancia por su testid, sea cual sea su rótulo en el momento. */
  get alternanciaMapaLista(): Locator {
    return this.root.getByTestId('delivery-pickup-map-toggle');
  }

  get activarUbicacion(): Locator {
    return this.root.getByText(/activar mi ubicaci[oó]n actual/i).first();
  }

  /** Una tarjeta por tienda del listado: un botón con su radio dentro. */
  get tarjetas(): Locator {
    return this.root.locator('button:has(input[type="radio"])');
  }

  get radios(): Locator {
    return this.root.locator('input[type="radio"]');
  }

  get radioMarcado(): Locator {
    return this.root.locator('input[type="radio"]:checked');
  }

  tarjetaDe(nombre: string): Locator {
    return this.tarjetas.filter({ has: this.page.getByText(nombre, { exact: true }) }).first();
  }

  get botonConfirmarTienda(): Locator {
    return this.root.getByRole('button', { name: /^confirmar tienda$/i });
  }

  /** Mapa con las tiendas: cada pin es un `role=button` con el nombre de la tienda como `title`. */
  get mapa(): Locator {
    return this.root.getByTestId('delivery-pickup-map');
  }

  pin(nombre: string): Locator {
    return this.root.locator(`[role="button"][title="${nombre}"]`);
  }

  get pines(): Locator {
    return this.root.locator('[role="button"][title^="Unimarc"]');
  }

  /** Botón "Confirmar" de la tarjeta que aparece al elegir un pin. */
  get botonConfirmarPin(): Locator {
    return this.root.getByRole('button', { name: /^confirmar$/i });
  }

  // --- pantalla de error y de sin resultados ---------------------------------------------------

  get errorTitulo(): Locator {
    return this.root.getByText(/ups,( algo)? sali[oó] mal/i);
  }

  get errorDetalle(): Locator {
    return this.root.getByText(/no logramos cargar la informaci[oó]n de los m[eé]todos de entrega/i);
  }

  get errorCodigo(): Locator {
    return this.root.getByText(/^error:\s*[0-9a-f-]{8,}/i);
  }

  get botonReintentar(): Locator {
    return this.root.getByRole('button', { name: /^reintentar$/i });
  }

  get botonVolverAlInicio(): Locator {
    return this.root.getByRole('button', { name: /^volver al inicio$/i });
  }

  get sinResultados(): Locator {
    return this.root.getByText(/parece que hoy no encontramos esa tienda que buscas/i);
  }

  // --- acciones ----------------------------------------------------------------------------------

  /** Pasos 3-5 del TC: abre el Store Locator del header y entra a la pestaña "Retiro en tienda". */
  async abrirDesde(storeLocatorDelHeader: Locator): Promise<this> {
    await storeLocatorDelHeader.click();
    await this.modal.esperarAbierto();
    await this.tab.click();
    return this;
  }

  async esperarListado(): Promise<this> {
    await this.titulo.waitFor({ state: 'visible', timeout: 30000 });
    await this.tarjetas.first().waitFor({ state: 'visible', timeout: 30000 });
    return this;
  }

  async buscar(texto: string): Promise<void> {
    await this.buscador.fill(texto);
    await this.page.waitForTimeout(1200);
  }

  /** Encuentra la tienda con el buscador (no está entre las 50 primeras) y marca su radio. */
  async elegirTienda(nombre: string): Promise<void> {
    await this.buscar(nombre.replace(/^unimarc\s+/i, ''));
    await this.tarjetaDe(nombre).click();
    await this.botonConfirmarTienda.waitFor({ state: 'visible', timeout: 15000 });
  }

  async confirmarTienda(): Promise<void> {
    await this.botonConfirmarTienda.click();
  }

  /** Nombres (primera línea) de las tarjetas del listado. */
  async nombres(): Promise<string[]> {
    return this.tarjetas.evaluateAll((els) => els.map((e) => ((e as HTMLElement).innerText.split('\n')[0] ?? '').trim()));
  }

  /** Texto completo de cada tarjeta (nombre, dirección y, si hay ubicación, distancia). */
  async textosTarjetas(): Promise<string[]> {
    return this.tarjetas.evaluateAll((els) => els.map((e) => (e as HTMLElement).innerText.replace(/\n+/g, ' | ')));
  }

  /** Cierra el popover/modal de login que se abre al confirmar como invitado. */
  async cerrarLoginSiAparece(): Promise<void> {
    const login = this.page.locator('[role="dialog"]').filter({ hasText: /ingresa aqu[ií]|correo electr[oó]nico/i }).locator('visible=true').first();
    if (await login.isVisible().catch(() => false)) {
      await this.page.keyboard.press('Escape');
      await login.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => undefined);
    }
  }
}
