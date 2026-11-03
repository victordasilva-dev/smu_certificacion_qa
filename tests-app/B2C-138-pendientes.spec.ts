import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { NavBar } from './pages/NavBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { HomeScreen } from './pages/HomeScreen';
import { PdpScreen } from './pages/PdpScreen';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';
import { tolerante } from './support/tolerante';
import { execSync } from 'child_process';

/**
 * B2C-138 — Store Locator del header con un usuario logueado sin dirección ni método de entrega
 * (app nativa, Android, build v1.0.1). La cuenta es {SIN_DIRECCION_USER} (daunuruco+noaddress@…).
 * Los TC 002 y 005 están en las dos planillas APP (SP2 y SP3): se ejecutan una vez y el resultado
 * se escribe en ambas.
 */

const r = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const SIN_METODO = /elige una forma de entrega/i;

/** La Home con sesión nunca queda inactiva y uiautomator no la vuelca: se entra y se actúa por coordenadas. */
const tocar = (x: number, y: number) => execSync(`adb shell input tap ${x} ${y}`, { timeout: 15000 });
const HOME_TAB: [number, number] = [176, 2230];
const CHEVRON_ENTREGA: [number, number] = [1012, 192];

test.describe.configure({ timeout: 900000 });
test.describe('B2C-138 — Store Locator, logueado sin dirección (Android)', () => {
  test('TC-B2C138-APP-002 · El Store Locator muestra «Elige una forma de entrega» sin método seleccionado [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C138-APP-002';
    await asegurarApp(screen);
    await sesion(screen, p, cp, token(testData, 'SIN_DIRECCION_USER')!.split(' / ')[0], /Hola, QA/);
    const nav = new NavBar(screen, p);
    const home = new HomeScreen(screen, p);
    tocar(...HOME_TAB);
    await pausa(6000);
    await r(() => home.capturarEvidencia(cp, 2, 'Home con el Store Locator del header'));
    // PLP: la landing de la primera categoría (la URL de categoría es de la web).
    const categorias = await r(() => new TabBar(screen, p).tapCategorias());
    await r(() => categorias.waitUntilReady());
    const plp = await r(() => categorias.tapPrimeraN1());
    await r(() => plp.waitUntilReady());
    await pausa(2500);
    const enPlp = await r(() => nav.metodoDeEntrega.getText());
    await r(() => plp.capturarEvidencia(cp, 4, 'PLP con el Store Locator del header'));
    for (let i = 0; i < 4 && !(await r(() => screen.getByTestId('tab-Buscar').isVisible())); i++) await r(() => screen.pressButton('BACK'));
    // PDP de {SKU_VALID_001}.
    const sku = token(testData, 'SKU_VALID_001')!;
    const tabs = await r(() => new TabBar(screen, p).waitUntilReady());
    await r(() => tabs.tapBuscar());
    const buscar = await r(() => new BuscarScreen(screen, p).waitUntilReady());
    const srp = await r(() => buscar.buscar(sku));
    await r(() => buscar.resultadoPara(sku).waitFor({ state: 'visible', timeout: 30000 }));
    await r(() => srp.tarjeta(sku).tap());
    const pdp = await r(() => new PdpScreen(screen, p).waitUntilReady());
    await pausa(2500);
    const enPdp = await r(() => nav.metodoDeEntrega.getText().catch(() => ''));
    await r(() => pdp.capturarEvidencia(cp, 6, 'PDP con el Store Locator del header'));
    test.info().annotations.push({ type: 'Store Locator', description: JSON.stringify({ enPlp, enPdp, home: 'revisar la captura p02 (la Home con sesión no se puede volcar)' }) });
    expect(enPlp, 'PLP').toMatch(SIN_METODO);
    expect(enPdp, 'PDP').toMatch(SIN_METODO);
  });

  test('TC-B2C138-APP-005 · El modal muestra las pestañas y «Aún no tienes direcciones guardadas» [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C138-APP-005';
    await asegurarApp(screen);
    await sesion(screen, p, cp, token(testData, 'SIN_DIRECCION_USER')!.split(' / ')[0], /Hola, QA/);
    const nav = new NavBar(screen, p);
    tocar(...HOME_TAB);
    await pausa(6000);
    tocar(...CHEVRON_ENTREGA);
    await pausa(3000);
    const modal = await r(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await pausa(2000);
    await r(() => modal.capturarEvidencia(cp, 4, 'modal Elige tu método de entrega'));
    const t = await r(() => new PdpScreen(screen, p).textos());
    const textos = t.map((x) => x.t);
    test.info().annotations.push({ type: 'modal', description: JSON.stringify(textos.filter(Boolean).slice(0, 25)) });
    expect(textos.some((x) => /despacho a domicilio/i.test(x)), 'pestaña Despacho a domicilio').toBe(true);
    expect(textos.some((x) => /retiro en tienda/i.test(x)), 'pestaña Retiro en tienda').toBe(true);
    expect(textos.some((x) => /a[uú]n no tienes direcciones guardadas/i.test(x)), '«Aún no tienes direcciones guardadas»').toBe(true);
  });
});
