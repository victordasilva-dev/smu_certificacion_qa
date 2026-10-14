import type { Locator, Screen } from 'mobilewright';
import { expect } from '@mobilewright/test';
import type { Plataforma } from '../../tests/support/rutasEvidencia';
import { TabBar } from '../pages/TabBar';
import { NavBar } from '../pages/NavBar';
import { HomeScreen } from '../pages/HomeScreen';
import { MetodoEntregaModal } from '../pages/MetodoEntregaModal';
import { DetalleDireccionScreen } from '../pages/DetalleDireccionScreen';
import { borrarDatosApp } from './grabacionAndroid';
import { tolerante } from './tolerante';

/**
 * Pasos comunes de las suites de método de entrega en la app (B2C-122, B2C-123): arrancar como
 * invitado con los datos borrados, fijar una dirección desde el Store Locator y armar el carro.
 */

const AMBIENTE = /no XML content|dump UI|send text|agent timed out|deadline exceeded/i;

/** true si el locator aparece antes del plazo; un fallo de ambiente se reintenta y, si persiste, se propaga. */
export async function visibleEn(l: Locator, ms: number): Promise<boolean> {
  return tolerante(() =>
    l.waitFor({ state: 'visible', timeout: ms }).then(
      () => true,
      (e) => {
        if (AMBIENTE.test(String(e))) throw e;
        return false;
      },
    ),
  );
}

/** La calle de una dirección del Excel de data ("Calle Uno 23, La Florida" → "Calle Uno 23"). */
export function calle(direccion: string): string {
  return direccion.split(',')[0].trim();
}

/** Arranca la app como invitado recién instalado y espera la TabBar (el splash tira "no XML content"). */
export async function arrancarInvitado(screen: Screen, device: any, bundleId: string, p: Plataforma): Promise<TabBar> {
  await device.terminateApp(bundleId);
  borrarDatosApp(bundleId, process.env.ANDROID_SERIAL);
  await device.launchApp(bundleId);
  const tabs = new TabBar(screen, p);
  for (let intento = 0; ; intento++) {
    try {
      await tabs.waitUntilReady();
      return tabs;
    } catch (e) {
      if (intento >= 20 || !AMBIENTE.test(String(e))) throw e;
      await new Promise((r) => setTimeout(r, 3000));
    }
  }
}

/** Abre el Store Locator, busca la dirección y toca su sugerencia: deja "Detalles de la dirección". */
export async function elegirDireccion(screen: Screen, p: Plataforma, direccion: string, patron: RegExp): Promise<DetalleDireccionScreen> {
  await tolerante(() => new NavBar(screen, p).tapMetodoDeEntrega());
  const modal = await tolerante(() => new MetodoEntregaModal(screen, p).waitUntilReady());
  await modal.elegirSugerencia(direccion, patron);
  return tolerante(() => new DetalleDireccionScreen(screen, p).waitUntilReady());
}

/**
 * Fija una dirección con cobertura como invitado. A veces el servicio devuelve "Lo sentimos, no
 * pudimos procesar tu solicitud" (intermitente en DEV): es ambiente para la precondición, así que
 * se reintenta desde una app limpia hasta 3 veces.
 */
export async function invitadoConDireccion(screen: Screen, device: any, bundleId: string, p: Plataforma, direccion: string): Promise<TabBar> {
  const nav = new NavBar(screen, p);
  for (let intento = 1; ; intento++) {
    const tabs = await arrancarInvitado(screen, device, bundleId, p);
    const detalle = await elegirDireccion(screen, p, direccion, new RegExp(`^${calle(direccion)}`, 'i'));
    await tolerante(() => detalle.botonConfirmar.tap());
    if (await visibleEn(nav.metodoDeEntrega.filter({ hasText: calle(direccion) }), 45000)) return tabs;
    if (intento >= 3) throw new Error(`precondición: no se pudo fijar ${direccion} en ${intento} intentos`);
  }
}

/** Agrega el SKU desde "Los más vendidos" y confirma con el Floating Cart (el stepper queda fuera de pantalla). */
export async function agregarAlCarro(screen: Screen, p: Plataforma, tabs: TabBar, sku: string): Promise<void> {
  const home = await tolerante(() => new HomeScreen(screen, p).waitUntilReady());
  await tolerante(() => home.mostrarProducto(sku));
  if (await visibleEn(home.botonAgregar(sku), 3000)) await tolerante(() => home.botonAgregar(sku).tap());
  await tolerante(() => expect(tabs.floatingPill, 'precondición: el carro tiene el SKU').toContainText('1 unidad', { timeout: 20000 }));
}

/** Vuelve atrás con BACK hasta que el navbar esté a la vista. */
export async function volverAlHome(screen: Screen, nav: NavBar): Promise<void> {
  for (let i = 0; i < 4 && !(await tolerante(() => nav.metodoDeEntrega.isVisible({ timeout: 2000 }))); i++) {
    await tolerante(() => screen.pressButton('BACK'));
  }
  await tolerante(() => expect(nav.metodoDeEntrega).toBeVisible({ timeout: 15000 }));
}
