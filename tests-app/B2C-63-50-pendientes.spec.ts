import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { HomeScreen } from './pages/HomeScreen';
import { CarroScreen } from './pages/CarroScreen';
import { PdpScreen } from './pages/PdpScreen';
import { sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';
import { tolerante } from './support/tolerante';

/**
 * B2C-63 (toast de promo al agregar desde el shelf) y B2C-50 (mensaje «Te faltan N» en el carro) —
 * app nativa, Android, build v1.0.1. Los dos agregan una unidad desde el shelf de la búsqueda con la
 * cuenta {COMPRADOR_USER}; al terminar se quita esa unidad para dejar el carro como estaba.
 */

const r = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));

async function buscarSku(screen: any, p: any, sku: string) {
  const tabs = await r(() => new TabBar(screen, p).waitUntilReady());
  await r(() => tabs.tapBuscar());
  const buscar = await r(() => new BuscarScreen(screen, p).waitUntilReady());
  const srp = await r(() => buscar.buscar(sku));
  await r(() => buscar.resultadoPara(sku).waitFor({ state: 'visible', timeout: 30000 }));
  await pausa(1500);
  return srp;
}

test.describe.configure({ timeout: 900000 });
test.describe('B2C-63 / B2C-50 — shelf y carro con sesión (Android)', () => {
  test('TC-B2C63-APP-007 · Un usuario logueado ve el toast al agregar desde el shelf [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C63-APP-007';
    await asegurarApp(screen);
    await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!.split(' / ')[0], /Karl/);
    const sku = token(testData, 'SKU_NXM_MEMBRESIA')!;
    const srp = await buscarSku(screen, p, sku);
    const home = new HomeScreen(screen, p);
    await r(() => srp.capturarEvidencia(cp, 2, `shelf de ${sku} en los resultados`));
    const hayAgregar = await r(() => home.botonAgregar(sku).isVisible());
    if (!hayAgregar) { test.info().annotations.push({ type: 'bloqueado-data', description: 'el shelf no ofrece «Agregar»' }); return; }
    await r(() => home.botonAgregar(sku).tap());
    let toast = '';
    for (let i = 0; i < 14 && !toast; i++) {
      const t = await r(() => new PdpScreen(screen, p).textos());
      toast = t.find((x) => /agrega \d+ y ahorra/i.test(x.t))?.t ?? '';
      if (toast) await r(() => srp.capturarEvidencia(cp, 4, 'toast de la promo tras agregar'));
      else await pausa(700);
    }
    const t = await r(() => new PdpScreen(screen, p).textos());
    test.info().annotations.push({ type: 'textos de promo', description: JSON.stringify(t.filter((x) => /agrega|ahorra|promo|\d+ de \d+|complet/i.test(x.t)).map((x) => x.t).slice(0, 10)) });
    await r(() => srp.capturarEvidencia(cp, 6, 'shelf tras agregar'));
    // Limpieza: se quita la unidad que agregó el caso.
    await r(() => home.botonQuitar(sku).tap()).catch(() => undefined);
    expect(toast, 'se muestra el toast «Agrega 1 y ahorra más»').toMatch(/agrega 1 y ahorra m[aá]s/i);
  });

  test('TC-B2C50-APP-002 · Un logueado ve «Te faltan N» de la promo Combina en el carro [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C50-APP-002';
    await asegurarApp(screen);
    await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!.split(' / ')[0], /Karl/);
    const sku = token(testData, 'SKU_COMBINA_PROMO')!;
    const srp = await buscarSku(screen, p, sku);
    const home = new HomeScreen(screen, p);
    await r(() => srp.capturarEvidencia(cp, 2, `shelf de ${sku} en los resultados`));
    if (!(await r(() => home.botonAgregar(sku).isVisible()))) { test.info().annotations.push({ type: 'bloqueado-data', description: 'el shelf no ofrece «Agregar»' }); return; }
    await r(() => home.botonAgregar(sku).tap());
    await pausa(4000);
    await r(() => screen.getByText('Ir al carro').first().tap());
    const carro = await r(() => new CarroScreen(screen, p).waitUntilReady());
    await pausa(3000);
    await r(() => carro.capturarEvidencia(cp, 4, 'carro con el producto de la promo Combina'));
    const t = await r(() => new PdpScreen(screen, p).textos());
    const falta = t.filter((x) => /te faltan \d+ (de|para)/i.test(x.t)).map((x) => `${x.t}@${x.y}`);
    test.info().annotations.push({ type: 'mensaje de promo', description: JSON.stringify(falta) });
    // Limpieza: se quita la unidad del carro.
    try { await r(() => screen.getByTestId(`cart-item-${sku}`).getByRole('button', { name: /^quitar/i }).tap()); } catch { /* se anota */ }
    expect(falta.length, 'el shelf muestra «Te faltan N para la promo»').toBeGreaterThan(0);
  });
});
