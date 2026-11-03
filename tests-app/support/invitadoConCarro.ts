import type { Screen } from 'mobilewright';
import { token } from '../../tests/support/testData';
import type { LoadedTestData } from '../../tests/support/testData';
import type { Plataforma } from '../../tests/support/rutasEvidencia';
import { TabBar } from '../pages/TabBar';
import { NavBar } from '../pages/NavBar';
import { BuscarScreen } from '../pages/BuscarScreen';
import { PdpScreen } from '../pages/PdpScreen';
import { CarroScreen } from '../pages/CarroScreen';
import { MetodoEntregaModal } from '../pages/MetodoEntregaModal';
import { DetalleDireccionScreen } from '../pages/DetalleDireccionScreen';
import { borrarDatosApp } from './grabacionAndroid';
import { tolerante } from './tolerante';

/** Con las animaciones del Home uiautomator a veces no vuelca la pantalla: se reintenta hasta 30 veces. */
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);

/**
 * Precondición común de las specs del carro en la app (invitado): app con datos borrados,
 * {DIRECCION_DESPACHO_001} fijada desde el Store Locator y los SKU agregados desde su PDP.
 *
 * Las filas de invitado del carro no declaran una dirección y un invitado sin dirección no puede
 * agregar al carro ("Agregar" abre el Store Locator), así que la precondición la resuelve con la
 * dirección que ya usan las demás HU de la app; cada resultado lo anota en su Observación.
 */

const ambiente = /no XML content|dump UI|send text|agent timed out|deadline exceeded/i;

async function visibleEn(l: { waitFor(o: { state: 'visible'; timeout: number }): Promise<unknown> }, ms: number): Promise<boolean> {
  return tol(() => l.waitFor({ state: 'visible', timeout: ms }).then(() => true, (e) => {
    if (ambiente.test(String(e))) throw e;
    return false;
  }));
}

export async function esperarTabBar(tabs: TabBar): Promise<void> {
  for (let intento = 0; ; intento++) {
    try {
      await tol(() => tabs.waitUntilReady());
      return;
    } catch (e) {
      if (intento >= 20 || !/no XML content|dump UI/.test(String(e))) throw e;
      await new Promise((r) => setTimeout(r, 3000));
    }
  }
}

function patronSugerencia(direccion: string): RegExp {
  const numero = direccion.match(/\d+/)?.[0] ?? '';
  const comuna = direccion.split(',').pop()!.trim();
  return new RegExp(`${numero}.*${comuna.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');
}

/** App limpia, invitado, con {DIRECCION_DESPACHO_001} fijada (hasta 3 intentos: el servicio de DEV a veces falla). */
export async function fijarDireccionInvitado(screen: Screen, device: any, bundleId: string, p: Plataforma, testData: LoadedTestData, tokenDireccion = 'DIRECCION_DESPACHO_001'): Promise<void> {
  const dir = token(testData, tokenDireccion)!;
  const calle = dir.split(',')[0].trim();
  // La app normaliza el nombre de la calle ("A. Las Conder 14791" → "Avenida Las Condes 14791"): solo la dirección por defecto se compara por texto.
  const enHeader = tokenDireccion === 'DIRECCION_DESPACHO_001' ? calle : new RegExp(`(?<!\\d)${dir.match(/\d+/)?.[0] ?? calle}(?!\\d)`);
  const tabs = new TabBar(screen, p);
  const nav = new NavBar(screen, p);
  for (let intento = 1; ; intento++) {
    await device.terminateApp(bundleId);
    borrarDatosApp(bundleId, process.env.ANDROID_SERIAL);
    await device.launchApp(bundleId);
    await esperarTabBar(tabs);
    await tol(() => nav.tapMetodoDeEntrega());
    const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await modal.elegirSugerencia(dir, patronSugerencia(dir));
    const detalle = await tol(() => new DetalleDireccionScreen(screen, p).waitUntilReady());
    await tol(() => detalle.botonConfirmar.tap());
    if (await visibleEn(nav.metodoDeEntrega.filter({ hasText: enHeader }), 45000)) return;
    if (intento >= 3) throw new Error(`precondición: no se pudo fijar ${dir} en ${intento} intentos`);
  }
}

/** Busca el SKU, abre su PDP y toca "Agregar" (deja 1 unidad). */
export async function agregarDesdePdp(screen: Screen, p: Plataforma, sku: string): Promise<void> {
  const tabs = new TabBar(screen, p);
  await tol(() => tabs.tapBuscar());
  const buscar = await tol(() => new BuscarScreen(screen, p).waitUntilReady());
  const srp = await tol(() => buscar.buscar(sku));
  await tol(() => buscar.resultadoPara(sku).waitFor({ state: 'visible', timeout: 30000 }));
  await tol(() => srp.tarjeta(sku).tap());
  const pdp = await tol(() => new PdpScreen(screen, p).waitUntilReady());
  await tol(() => pdp.agregar.tap());
  await visibleEn(tabs.floatingPill, 20000);
  await tol(() => screen.goBack());
}

/** Abre el carro con el Floating Pill. */
export async function abrirCarro(screen: Screen, p: Plataforma): Promise<CarroScreen> {
  const tabs = new TabBar(screen, p);
  await tol(() => tabs.tapFloatingPill());
  return tol(() => new CarroScreen(screen, p).waitUntilReady());
}
