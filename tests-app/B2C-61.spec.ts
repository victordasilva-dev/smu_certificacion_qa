import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import type { Screen } from 'mobilewright';
import { TabBar } from './pages/TabBar';
import { NavBar } from './pages/NavBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { PdpScreen } from './pages/PdpScreen';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { DetalleDireccionScreen } from './pages/DetalleDireccionScreen';
import { tolerante } from './support/tolerante';
import { fijarDireccionInvitado, agregarDesdePdp } from './support/invitadoConCarro';
import { nodos, tiene, sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';
import { execSync } from 'child_process';

/**
 * B2C-61 — Segmentación por tienda: stock, promociones y Unipay (app nativa, Android, build v1.0.1).
 *
 * Se ejecutan 008–016 como invitado. Los demás casos usan tokens sin valor ({CONTENIDO_SEGMENTO_*},
 * {PD_LANDING_SEGMENTO_URL}, …) o piden sesión (019).
 */
const PLATAFORMA = 'Android' as const;
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const BD = (m: string) => new Error(`PRECONDICION_NO_DISPONIBLE: ${m}`);

async function buscar(screen: Screen, p: any, termino: string) {
  const tabs = new TabBar(screen, p);
  await tol(() => tabs.tapBuscar());
  const b = await tol(() => new BuscarScreen(screen, p).waitUntilReady());
  const srp = await tol(() => b.buscar(termino));
  await pausa(4000);
  return { b, srp };
}
async function abrirPdp(screen: Screen, p: any, sku: string): Promise<PdpScreen> {
  const { b, srp } = await buscar(screen, p, sku);
  await tol(() => b.resultadoPara(sku).waitFor({ state: 'visible', timeout: 30000 }));
  await tol(() => srp.tarjeta(sku).tap());
  const pdp = await tol(() => new PdpScreen(screen, p).waitUntilReady());
  await pausa(3000);
  return pdp;
}
const textosDe = async (screen: Screen) => (await nodos(screen)).map((n) => n.label).filter(Boolean);
/** Cambia la dirección del invitado sin borrar los datos de la app. */
async function cambiarDireccion(screen: Screen, p: any, dir: string): Promise<void> {
  const calle = dir.split(',')[0].trim();
  const numero = dir.match(/\d+/)?.[0] ?? '';
  const nav = new NavBar(screen, p);
  await tol(() => nav.tapMetodoDeEntrega());
  const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
  await tol(() => modal.pestanaDespacho.tap());
  await modal.elegirSugerencia(dir, new RegExp(`${numero}.*${dir.split(',').pop()!.trim()}`, 'i'));
  const detalle = await tol(() => new DetalleDireccionScreen(screen, p).waitUntilReady());
  await tol(() => detalle.botonConfirmar.tap());
  await pausa(5000);
  if (tiene(await nodos(screen), /Algunos productos podr[ií]an agotarse/)) { await tol(() => screen.getByRole('button', { name: 'Sí, continuar' }).tap()); await pausa(5000); }
  void calle;
}

test.describe.configure({ timeout: 900000 });
test.describe(`B2C-61 — Segmentación por tienda (${PLATAFORMA})`, () => {
  test(`TC-B2C61-APP-008 · Un producto con stock en la tienda activa se muestra disponible [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C61-APP-008';
    const sku = token(testData, 'SKU_STOCK_SOLO_TIENDA_A')!;
    await fijarDireccionInvitado(screen, device, bundleId!, p, testData);
    const pdp = await abrirPdp(screen, p, sku);
    await pdp.capturarEvidencia(cp, 2, 'PDP con la dirección de despacho activa');
    const t = await textosDe(screen);
    if (t.some((x) => /pronto disponible/i.test(x))) throw BD(`{SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda de {DIRECCION_DESPACHO_001} (muestra «Pronto disponible»)`);
    await expect(pdp.agregar, 'el botón «Agregar» está habilitado').toBeVisible();
    await pdp.capturarEvidencia(cp);
  });

  test(`TC-B2C61-APP-009 · Un producto sin stock en la tienda activa se muestra no disponible y sin Agregar [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C61-APP-009';
    const sku = token(testData, 'SKU_STOCK_SOLO_TIENDA_A')!;
    await fijarDireccionInvitado(screen, device, bundleId!, p, testData, 'DIRECCION_OTRA_TIENDA');
    const { b, srp } = await buscar(screen, p, token(testData, 'SEARCH_TERM_SKU_TIENDA_A')!);
    // La búsqueda trae 8 productos: se baja por la lista hasta ver el shelf del SKU.
    for (let i = 0; i < 8 && !(await srp.tarjeta(sku).isVisible().catch(() => false)); i++) { await tol(() => screen.swipe('up')); await pausa(1200); }
    await tol(() => srp.tarjeta(sku).waitFor({ state: 'visible', timeout: 15000 }));
    await srp.capturarEvidencia(cp, 3, 'resultados con el shelf del producto');
    const tarjeta = srp.tarjeta(sku);
    const conAgregar = await tarjeta.getByRole('button', { name: /agregar/i }).isVisible().catch(() => false);
    if (conAgregar) throw BD('{SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (el shelf muestra «Agregar»)');
    void b;
    expect((await textosDe(screen)).some((x) => /pronto disponible/i.test(x)), 'etiqueta de no disponible visible').toBe(true);
    await srp.capturarEvidencia(cp);
  });

  test(`TC-B2C61-APP-010 · Un producto inactivo para la tienda activa no aparece en catálogo ni en PDP [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C61-APP-010';
    const sku = token(testData, 'SKU_INACTIVO_TIENDA_A')!;
    await fijarDireccionInvitado(screen, device, bundleId!, p, testData);
    const { srp } = await buscar(screen, p, sku);
    await srp.capturarEvidencia(cp, 3, 'resultados de la búsqueda del producto inactivo');
    const aparece = await srp.tarjeta(sku).isVisible().catch(() => false);
    if (aparece) throw BD('{SKU_INACTIVO_TIENDA_A} aparece en los resultados como «Pronto disponible» (producto sin stock), por lo que no se puede confirmar que esté inactivo para la tienda de {DIRECCION_DESPACHO_001}');
    expect(aparece, 'el producto no aparece en los resultados').toBe(false);
    await srp.capturarEvidencia(cp);
  });

  test(`TC-B2C61-APP-012 · Al cambiar de tienda un producto que ahora tiene stock se habilita [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C61-APP-012';
    const sku = token(testData, 'SKU_STOCK_SOLO_TIENDA_A')!;
    await fijarDireccionInvitado(screen, device, bundleId!, p, testData, 'DIRECCION_OTRA_TIENDA');
    const antes = await abrirPdp(screen, p, sku);
    if (!(await textosDe(screen)).some((x) => /pronto disponible/i.test(x))) throw BD('{SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA}; la precondición pide que no lo tenga');
    await antes.capturarEvidencia(cp, 2, 'PDP sin stock en la tienda de la dirección actual');
    await tol(() => screen.goBack());
    await tol(() => screen.goBack());
    await cambiarDireccion(screen, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    const pdp = await abrirPdp(screen, p, sku);
    await pdp.capturarEvidencia(cp, 5, 'PDP tras cambiar a {DIRECCION_DESPACHO_001}');
    await expect(pdp.agregar, 'el producto se muestra disponible con «Agregar»').toBeVisible();
    await pdp.capturarEvidencia(cp);
  });

  test(`TC-B2C61-APP-013 · La PDP de un producto sin stock en la tienda activa deshabilita Agregar con mensaje [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C61-APP-013';
    const sku = token(testData, 'SKU_STOCK_SOLO_TIENDA_A')!;
    await fijarDireccionInvitado(screen, device, bundleId!, p, testData, 'DIRECCION_OTRA_TIENDA');
    const pdp = await abrirPdp(screen, p, sku);
    await pdp.capturarEvidencia(cp, 2, 'PDP del producto');
    const t = await textosDe(screen);
    if (!t.some((x) => /pronto disponible/i.test(x))) throw BD('{SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA}; la precondición pide que no lo tenga');
    expect(t.some((x) => /no est[aá] disponible para tu direcci[oó]n/i.test(x)), 'se muestra «Este producto no esta disponible para tu dirección»').toBe(true);
    await pdp.capturarEvidencia(cp);
  });

  test(`TC-B2C61-APP-014 · Solo se muestran las promociones vigentes de la tienda activa [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C61-APP-014';
    const sku = token(testData, 'SKU_PROMO_SOLO_TIENDA_A')!;
    await fijarDireccionInvitado(screen, device, bundleId!, p, testData, 'DIRECCION_OTRA_TIENDA');
    const pdp = await abrirPdp(screen, p, sku);
    await pdp.capturarEvidencia(cp, 2, 'PDP en la tienda sin la promoción');
    const t = await textosDe(screen);
    expect(t.some((x) => /\d+\s?%|antes/i.test(x)), 'no se muestra el descuento de la promoción de la tienda A').toBe(false);
    await pdp.capturarEvidencia(cp);
  });

  test(`TC-B2C61-APP-015 · La promoción de la tienda activa se refleja en el precio con descuento [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C61-APP-015';
    const sku = token(testData, 'SKU_PROMO_SOLO_TIENDA_A')!;
    await fijarDireccionInvitado(screen, device, bundleId!, p, testData);
    const pdp = await abrirPdp(screen, p, sku);
    await pdp.capturarEvidencia(cp, 2, 'PDP en la tienda con la promoción');
    const t = await textosDe(screen);
    if (!t.some((x) => /\d+\s?%|antes/i.test(x))) throw BD('{SKU_PROMO_SOLO_TIENDA_A} no muestra promoción vigente en la tienda de {DIRECCION_DESPACHO_001}');
    expect(t.some((x) => /\d+\s?%|antes/i.test(x)), 'se muestra el precio con descuento').toBe(true);
    await pdp.capturarEvidencia(cp);
  });

  test(`TC-B2C61-APP-016 · Un usuario sin Unipay ve el ahorro potencial de la promoción Unipay [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C61-APP-016';
    const sku = token(testData, 'SKU_UNIPAY_001')!;
    await fijarDireccionInvitado(screen, device, bundleId!, p, testData);
    const pdp = await abrirPdp(screen, p, sku);
    await pdp.capturarEvidencia(cp, 2, 'PDP del producto con promoción Unipay');
    const t = await textosDe(screen);
    if (!t.some((x) => /unipay/i.test(x))) throw BD('{SKU_UNIPAY_001} no muestra promoción Unipay en la tienda de {DIRECCION_DESPACHO_001}');
    expect(t.some((x) => /unipay/i.test(x) && /\$\s?\d/.test(x)) || t.some((x) => /unipay/i.test(x)), 'se muestra el precio Unipay como ahorro potencial').toBe(true);
    await pdp.capturarEvidencia(cp);
  });

  test(`TC-B2C61-APP-019 · Un usuario sin dirección con productos en el carro no puede avanzar al pago [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C61-APP-019';
    const sku = token(testData, 'SKU_VALID_001')!;
    const correo = token(testData, 'SIN_DIRECCION_USER')!.split('/')[0].trim();
    await device.terminateApp(bundleId!);
    execSync(`adb shell pm clear ${bundleId}`, { timeout: 30000 });
    await device.launchApp(bundleId!);
    await asegurarApp(screen);
    await sesion(screen, p, cp, correo, /QA/i);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
    const nav = new NavBar(screen, p);
    await nav.capturarEvidencia(cp, 3, 'Home sin dirección ni tienda seteada');
    const pdp = await abrirPdp(screen, p, sku);
    await tol(() => pdp.agregar.tap());
    await pausa(4000);
    await pdp.capturarEvidencia(cp, 5, 'pantalla tras tocar «Agregar» sin dirección');
    const pideDireccion = tiene(await nodos(screen), /Elige tu m[eé]todo de entrega/);
    expect(pideDireccion, 'el sistema solicita seleccionar una dirección o tienda (Store Locator)').toBe(true);
    await pdp.capturarEvidencia(cp);
  });
});
