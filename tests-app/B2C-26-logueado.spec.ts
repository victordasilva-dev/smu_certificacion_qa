import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import type { Plataforma } from '../tests/support/rutasEvidencia';
import { TabBar } from './pages/TabBar';
import { NavBar } from './pages/NavBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { PdpScreen } from './pages/PdpScreen';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import type { ListadoScreen } from './pages/ListadoScreen';
import { tolerante } from './support/tolerante';
import { sesion, esperarCodigo, ingresarCodigo, nodos, tiene } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/**
 * B2C-26 — Store Locator en la app, casos [Logueado] (008, 019, 033).
 *
 * Con la v1.0.7 quedaban Bloqueado Data porque la app solo iniciaba sesión con RUT; la v1.0.1 entra
 * por correo + código (OTP), así que se ejecutan con {COMPRADOR_USER}. Solo Android (Pixel 6 local).
 */
const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const SALUDO = /Karl|Comprador/i;
const correo = (td: any) => token(td, 'COMPRADOR_USER')!;

function nombreN2(url: string): RegExp {
  const segmento = new URL(url).pathname.split('/').pop()!.split('_').pop()!;
  return new RegExp(`^${segmento}$`, 'i');
}
async function abrirPlp(screen: Screen, p: Plataforma, td: any): Promise<ListadoScreen> {
  const tabs = await tol(() => new TabBar(screen, p).waitUntilReady());
  const modal = await tol(() => tabs.tapCategorias());
  await tol(() => modal.waitUntilReady());
  const plp = await tol(() => modal.tapN2(nombreN2(token(td, 'CATEGORY_N2_URL')!)));
  // La PLP ya cargó cuando muestra el contador «N productos».
  await tol(() => screen.getByText(/\d+ productos?/i).first().waitFor({ state: 'visible', timeout: 30000 }));
  await dormir(1500);
  return plp;
}
/** Texto del Store Locator del header, o null si la pantalla no lo muestra. */
async function storeLocator(screen: Screen): Promise<string | null> {
  const loc = screen.getByTestId('delivery-open');
  for (let i = 0; i < 6; i++) {
    if (await loc.isVisible().catch(() => false)) return ((await loc.getText().catch(() => '')) || '').replace(/\s+/g, ' ').trim() || '(sin texto)';
    await dormir(1500);
  }
  return null;
}
const foto = (n: string) => execSync(`adb exec-out screencap -p > .qa/run/${n}.png`, { timeout: 20000 });

test.describe.configure({ timeout: 900000 });
test.describe('B2C-26 — Store Locator logueado (Android)', () => {
  test('TC-B2C26-APP-008 · El modal del logueado muestra skeleton y luego la dirección activa y las guardadas [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C26-APP-008';
    await asegurarApp(screen);
    await sesion(screen, p, cp, correo(testData), SALUDO);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await dormir(3000);
    const nav = await tol(() => new NavBar(screen, p).waitUntilReady());
    await nav.capturarEvidencia(cp, 2, 'Home con el Store Locator');
    await tol(() => nav.tapMetodoDeEntrega());
    // Cuadros inmediatos tras el toque: el skeleton dura un instante.
    for (let i = 0; i < 3; i++) foto(`apk-008-f${i}`);
    const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await dormir(2000);
    await modal.capturarEvidencia(cp, 4, 'modal con la dirección activa y las guardadas');
    const activa = await modal.direccionActiva();
    const guardadas = await modal.direccionesGuardadas();
    test.info().annotations.push({ type: 'modal', description: `activa: ${activa?.texto ?? '(ninguna)'}; guardadas: ${guardadas.map((g) => g.etiqueta).join(' | ')}` });
    expect(activa, 'la dirección activa aparece marcada').not.toBeNull();
    await expect(modal.tituloDireccionesGuardadas, 'lista de direcciones guardadas').toBeVisible();
    expect(guardadas.length, 'al menos una dirección guardada además de la activa').toBeGreaterThan(0);
    await expect(modal.buscador, 'buscador «Calle, dirección o lugar»').toBeVisible();
    await expect(modal.activarUbicacion, '«Activar mi ubicación actual»').toBeVisible();
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C26-APP-019 · Elegir una dirección guardada la setea sin PIN ni OTP y mantiene la pantalla [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C26-APP-019';
    await asegurarApp(screen);
    await sesion(screen, p, cp, correo(testData), SALUDO);
    const plp = await abrirPlp(screen, p, testData);
    await plp.capturarEvidencia(cp, 3, 'PLP');
    const antes = await storeLocator(screen);
    test.info().annotations.push({ type: 'Store Locator en la PLP', description: antes ?? '(no se muestra)' });
    expect(antes, 'la PLP muestra el Store Locator en el header').not.toBeNull();
    await tol(() => new NavBar(screen, p).tapMetodoDeEntrega());
    const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await dormir(2000);
    const activa = (await modal.direccionActiva())?.texto ?? '';
    const otra = (await modal.direccionesGuardadas()).find((g) => !activa.includes(g.etiqueta));
    expect(otra, 'hay una dirección guardada distinta de la activa').toBeTruthy();
    await modal.capturarEvidencia(cp, 5, 'modal antes de elegir otra dirección');
    const desde = new Date(Date.now() - 30000);
    await tol(() => modal.elegirDireccionGuardada(otra!.etiqueta));
    await dormir(5000);
    const pideOtp = await modal.autenticacionRequerida.isVisible().catch(() => false);
    await modal.capturarEvidencia(cp, 6, 'tras elegir otra dirección guardada');
    test.info().annotations.push({ type: 'OTP al elegir', description: String(pideOtp) });
    if (pideOtp) await ingresarCodigo(screen, await esperarCodigo(cp, correo(testData), desde));
    const despues = await storeLocator(screen);
    test.info().annotations.push({ type: 'Store Locator tras elegir', description: despues ?? '(no se muestra)' });
    expect(pideOtp, 'no se pide PIN ni OTP al elegir una dirección guardada').toBe(false);
    expect(despues, 'el header muestra la nueva dirección').toContain(otra!.etiqueta);
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C26-APP-033 · La dirección activa se mantiene en el header al navegar por la App [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C26-APP-033';
    await asegurarApp(screen);
    await sesion(screen, p, cp, correo(testData), SALUDO);
    const vistas: Record<string, string | null> = {};
    await tol(() => screen.getByTestId('tab-Home').tap());
    await dormir(3000);
    vistas.Home = await storeLocator(screen);
    await new NavBar(screen, p).capturarEvidencia(cp, 2, 'Home');
    const plp = await abrirPlp(screen, p, testData);
    vistas.PLP = await storeLocator(screen);
    await plp.capturarEvidencia(cp, 3, 'PLP');
    await tol(() => plp.abrirPrimerProducto());
    const pdp = await tol(() => new PdpScreen(screen, p).waitUntilReady());
    await dormir(2500);
    vistas.PDP = await storeLocator(screen);
    await pdp.capturarEvidencia(cp, 4, 'PDP');
    // La PDP no tiene barra de pestañas: se vuelve con «atrás» hasta verla.
    for (let i = 0; i < 3 && !(await screen.getByTestId('tab-Buscar').isVisible().catch(() => false)); i++) { await screen.goBack(); await dormir(2000); }
    const tabs = await tol(() => new TabBar(screen, p).waitUntilReady());
    await tol(() => tabs.tapBuscar());
    const buscar = await tol(() => new BuscarScreen(screen, p).waitUntilReady());
    const termino = token(testData, 'SEARCH_TERM_001')!;
    const srp = await tol(() => buscar.buscar(termino));
    await tol(() => buscar.resultadoPara(termino).waitFor({ state: 'visible', timeout: 30000 }));
    vistas['Resultados de búsqueda'] = await storeLocator(screen);
    await srp.capturarEvidencia(cp, 5, 'resultados de búsqueda');
    await tol(() => screen.getByTestId('tab-Home').tap());
    await dormir(2500);
    const n = await nodos(screen);
    const carro = n.find((x) => /^Ir al carro$|^Mi carro$/i.test(x.label));
    if (carro) await tol(() => screen.getByText(carro.label).first().tap());
    else await tol(() => screen.getByRole('button', { name: /carro/i }).first().tap());
    await dormir(4000);
    vistas.Carro = tiene(await nodos(screen), /Mi carro|Tu carro est/i) ? await storeLocator(screen) : '(no se abrió el carro)';
    await new NavBar(screen, p).capturarEvidencia(cp, 6, 'Carro');
    test.info().annotations.push({ type: 'Store Locator por pantalla', description: Object.entries(vistas).map(([k, v]) => `${k}: ${v ?? '(no se muestra)'}`).join(' | ') });
    for (const [k, v] of Object.entries(vistas)) expect.soft(v, `${k} muestra el Store Locator`).not.toBeNull();
    const textos = Object.values(vistas).filter((v): v is string => !!v && !v.startsWith('('));
    expect.soft(new Set(textos).size, 'la misma dirección en todas las pantallas').toBeLessThanOrEqual(1);
  });
});
