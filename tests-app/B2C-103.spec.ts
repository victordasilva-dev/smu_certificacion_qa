import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import type { Plataforma } from '../tests/support/rutasEvidencia';
import { ListadoScreen } from './pages/ListadoScreen';
import { SellosAdvertenciaPanel } from './pages/SellosAdvertenciaPanel';
import { tolerante } from './support/tolerante';
import { sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/**
 * B2C-103 — Filtro «Sellos de advertencia» del panel de filtros, en la app. Solo Android (emulador
 * local), v1.0.1 ya instalada.
 *
 * Las filas dicen "Viewport: App iOS/Android" sin "Plataforma:"; esta corrida certifica Android e
 * iOS queda Pendiente. {PLP_URL} es /category/carnes_vacuno: en la app es Categorías → Carnes →
 * Vacuno. La sesión es {USER_AUTH_001} (correo + OTP).
 */

const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const SALUDO = /Karl/i;
const AZUCARES = 'No alto en azúcares';
const SODIO = 'No alto en sodio';
/**
 * Marca de APP-007: el TC pide «una marca con productos que tienen y que no tienen el sello» sin
 * nombrarla. En Vacuno los dos productos «No alto en azúcares» son de Fundo Rio Alegre (2026-11-12),
 * que además tiene otros sin el sello; el spec lo comprueba antes de los pasos.
 */
const MARCA = 'Fundo Rio Alegre';
/** Orden fijo del resultado esperado de TC-B2C103-APP-002 (CA2 de la HU). */
const ORDEN_FIJO = ['Sin sellos', 'No alto en azúcares', 'No alto en calorías', 'No alto en grasas saturadas', 'No alto en sodio', 'No alto en alcohol'];
const swipe = (x1: number, y1: number, x2: number, y2: number, ms = 400) =>
  execSync(`adb shell input swipe ${x1} ${y1} ${x2} ${y2} ${ms}`, { timeout: 20000 });

/** Nodos con texto del árbol, para navegar por el menú de Categorías y leer la PLP. */
async function textos(screen: Screen): Promise<{ label: string; type: string; x: number; y: number; w: number; h: number; id: string }[]> {
  const out: any[] = [];
  const rec = (n: any) => {
    const r = n.rect ?? n.bounds;
    const label = String(n.label ?? n.text ?? '');
    const id = String(n.identifier ?? n.resourceId ?? '');
    if (r && (label || id) && !id.startsWith('com.android.systemui')) out.push({ label, type: String(n.type ?? '').split('.').pop(), x: r.x, y: r.y, w: r.width, h: r.height, id });
    for (const c of n.children ?? []) rec(c);
  };
  for (const n of await tol(() => screen.viewTree())) rec(n);
  return out;
}

async function totalPlp(screen: Screen): Promise<number | null> {
  const n = await textos(screen);
  const t = n.find((x) => x.type === 'TextView' && /^\d+ productos?$/.test(x.label) && x.y < 900);
  return t ? Number(/\d+/.exec(t.label)![0]) : null;
}

/** Pasos 1 y 2: sesión y la PLP Carnes → Vacuno. */
async function plpVacuno(screen: Screen, p: Plataforma, td: any, cp: string): Promise<ListadoScreen> {
  await asegurarApp(screen);
  await sesion(screen, p, cp, token(td, 'USER_AUTH_001')!.split(' / ')[0].trim(), SALUDO);
  await tol(() => screen.getByTestId('tab-Categorías').tap());
  await dormir(4000);
  for (let i = 0; i < 6; i++) { swipe(540, 700, 540, 1800, 250); await dormir(500); }
  let vacuno;
  for (let i = 0; i < 12 && !vacuno; i++) {
    const n = await textos(screen);
    vacuno = n.find((x) => x.type === 'ViewGroup' && x.label === 'Vacuno' && x.y > 300 && x.y < 1900);
    if (vacuno) break;
    const carnes = n.find((x) => x.type === 'ViewGroup' && x.label === 'Carnes' && x.w >= 1000);
    if (carnes && carnes.y < 1500) swipe(950, carnes.y + 300, 350, carnes.y + 300, 400);
    else swipe(540, 1500, 540, 1000, 500);
    await dormir(1500);
  }
  expect(vacuno, 'el menú de Categorías muestra Carnes → Vacuno').toBeTruthy();
  execSync(`adb shell input tap ${vacuno!.x + 100} ${vacuno!.y + 100}`, { timeout: 15000 });
  const plp = new ListadoScreen(screen, p);
  await tol(() => screen.getByText(/^\d+ productos?$/).first().waitFor({ state: 'visible', timeout: 40000 }));
  await dormir(2500);
  await plp.capturarEvidencia(cp, 2, `PLP Vacuno con ${await totalPlp(screen)} productos`);
  return plp;
}

/** Pasos 3 y 4: abre el panel de filtros. */
async function abrirPanel(screen: Screen, p: Plataforma, plp: ListadoScreen, cp: string): Promise<SellosAdvertenciaPanel> {
  await tol(() => plp.iconoFiltros.tap());
  const panel = new SellosAdvertenciaPanel(screen, p);
  await tol(() => panel.waitUntilReady());
  await dormir(2500);
  await panel.capturarEvidencia(cp, 4, 'panel de filtros abierto');
  return panel;
}

/** Pasos 5 y 6: expande «Sellos de advertencia». */
async function abrirSellos(panel: SellosAdvertenciaPanel, cp: string): Promise<void> {
  await panel.abrirSellos();
  await panel.capturarEvidencia(cp, 6, 'Sellos de advertencia expandido');
}

/** Productos del listado (por su tarjeta) con el texto de cada una, recorriendo la PLP. */
async function productosDelListado(screen: Screen, maxPantallas = 6): Promise<{ sku: string; texto: string }[]> {
  const vistos: { sku: string; texto: string }[] = [];
  let sinNuevos = 0;
  for (let i = 0; i < maxPantallas && sinNuevos < 2; i++) {
    const n = await textos(screen);
    const antes = vistos.length;
    for (const t of n.filter((x) => /^product-\d/.test(x.id))) {
      const sku = t.id.replace(/^product-/, '');
      if (vistos.some((v) => v.sku === sku)) continue;
      const texto = n.filter((x) => x.x >= t.x && x.x < t.x + t.w && x.y >= t.y && x.y < t.y + 1006 && x.label).map((x) => x.label).join(' | ');
      vistos.push({ sku, texto });
    }
    sinNuevos = vistos.length === antes ? sinNuevos + 1 : 0;
    swipe(540, 1700, 540, 900, 600);
    await dormir(1500);
  }
  return vistos;
}

test.describe.configure({ timeout: 900000 });
test.describe('B2C-103 — Filtro Sellos de advertencia (Android)', () => {
  test('TC-B2C103-APP-001 · Sellos de advertencia se muestra como dropdown colapsado [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C103-APP-001';
    const panel = await abrirPanel(screen, p, await plpVacuno(screen, p, testData, cp), cp);
    const boton = await panel.verSeccion();
    const casillas = await panel.opciones();
    await panel.capturarEvidencia(cp, 5, 'dropdown Sellos de advertencia colapsado', { elemento: panel.seccion });
    test.info().annotations.push({ type: 'seccion', description: `«${boton.label}»; casillas visibles con la sección cerrada: ${casillas.length}` });
    expect(boton.label, 'la sección se llama «Sellos de advertencia», sin badge').toBe('Sellos de advertencia');
    expect(casillas, 'el dropdown está colapsado (no muestra opciones)').toEqual([]);
    await panel.capturarEvidencia(cp);
  });

  test('TC-B2C103-APP-002 · Las opciones se muestran en orden fijo, como checkbox y desmarcadas [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C103-APP-002';
    const panel = await abrirPanel(screen, p, await plpVacuno(screen, p, testData, cp), cp);
    await abrirSellos(panel, cp);
    const opciones = await panel.opciones();
    await panel.verSeccion();
    await panel.capturarEvidencia(cp, 7, 'opciones de Sellos de advertencia');
    const nombres = opciones.map((o) => o.nombre);
    const esperado = ORDEN_FIJO.filter((s) => nombres.includes(s));
    test.info().annotations.push({ type: 'opciones', description: `en pantalla: ${nombres.join(' > ')}; orden fijo para esas opciones: ${esperado.join(' > ')}` });
    expect(opciones.length, 'el dropdown muestra opciones con checkbox').toBeGreaterThan(0);
    expect(opciones.filter((o) => o.marcada).map((o) => o.nombre), 'todas las opciones están desmarcadas').toEqual([]);
    expect(nombres, 'las opciones respetan el orden fijo de la HU').toEqual(esperado);
    await panel.capturarEvidencia(cp);
  });

  test('TC-B2C103-APP-003 · Marcar un sello lo marca, agrega badge y chip y actualiza el conteo [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C103-APP-003';
    const panel = await abrirPanel(screen, p, await plpVacuno(screen, p, testData, cp), cp);
    await abrirSellos(panel, cp);
    const antes = await panel.conteoBoton();
    await panel.tocarSello(AZUCARES);
    const despues = await panel.conteoBoton();
    await panel.capturarEvidencia(cp, 8, `${AZUCARES} marcado`);
    const marcado = await panel.marcado(AZUCARES);
    const badge = await panel.badge();
    const chips = await panel.chips();
    await panel.capturarEvidencia(cp, 9, 'chip en Filtros aplicados');
    test.info().annotations.push({ type: 'estado', description: `checkbox=${marcado}; badge=${badge}; chips=${chips.join(', ') || '-'}; botón ${antes} → ${despues}` });
    expect(marcado, `el checkbox «${AZUCARES}» queda marcado`).toBe(true);
    expect(badge, 'el dropdown muestra el badge 1').toBe(1);
    expect(chips, `aparece el chip «${AZUCARES}» en «Filtros aplicados»`).toEqual([AZUCARES]);
    expect(despues, 'el botón muestra «Mostrar N productos»').not.toBeNull();
    expect(despues!, 'el conteo del botón se recalcula con el sello (no aumenta)').toBeLessThanOrEqual(antes ?? Infinity);
    await panel.capturarEvidencia(cp);
  });

  test('TC-B2C103-APP-004 · Un sello sin productos en la PLP no se muestra en el dropdown [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C103-APP-004';
    const panel = await abrirPanel(screen, p, await plpVacuno(screen, p, testData, cp), cp);
    await abrirSellos(panel, cp);
    const nombres = (await panel.opciones()).map((o) => o.nombre);
    await panel.verSeccion();
    await panel.capturarEvidencia(cp, 7, 'opciones sin No alto en alcohol');
    test.info().annotations.push({ type: 'opciones', description: nombres.join(' > ') });
    expect(nombres.length, 'el dropdown muestra los sellos con productos').toBeGreaterThan(0);
    expect(nombres, '«No alto en alcohol» (sin productos en la PLP) no aparece').not.toContain('No alto en alcohol');
    await panel.capturarEvidencia(cp);
  });

  test('TC-B2C103-APP-005 · Mostrar productos con varios sellos cierra el panel y el encabezado coincide con el botón [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C103-APP-005';
    const plp = await plpVacuno(screen, p, testData, cp);
    const panel = await abrirPanel(screen, p, plp, cp);
    await abrirSellos(panel, cp);
    await panel.tocarSello(AZUCARES);
    await panel.tocarSello(SODIO);
    const n = await panel.conteoBoton();
    const badge = await panel.badge();
    await panel.capturarEvidencia(cp, 8, `${AZUCARES} y ${SODIO} marcados`);
    const chips = await panel.chips();
    await panel.capturarEvidencia(cp, 8, 'chips de los dos sellos');
    await panel.confirmar();
    const abierto = await panel.readyLocator.isVisible().catch(() => false);
    const total = await totalPlp(screen);
    await plp.capturarEvidencia(cp, 10, `listado con ${total} productos`);
    const listado = await productosDelListado(screen);
    test.info().annotations.push({ type: 'conteo', description: `badge ${badge}; chips ${chips.join(', ')}; botón ${n}; encabezado ${total}; productos en el listado ${listado.length}` });
    expect(badge, 'el dropdown muestra el badge 2').toBe(2);
    expect(chips, 'hay un chip por cada sello').toEqual([AZUCARES, SODIO]);
    expect(abierto, 'el panel se cierra').toBe(false);
    expect(total, 'el encabezado de la PLP muestra el mismo N que el botón').toBe(n);
    expect(listado.length, 'el listado tiene tantos productos como anuncia el encabezado').toBe(total ?? -1);
    await plp.capturarEvidencia(cp);
  });

  test('TC-B2C103-APP-006 · Desmarcar un sello baja el badge, quita su chip y recalcula el conteo [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C103-APP-006';
    const panel = await abrirPanel(screen, p, await plpVacuno(screen, p, testData, cp), cp);
    await abrirSellos(panel, cp);
    await panel.tocarSello(AZUCARES);
    const soloAzucares = await panel.conteoBoton();
    await panel.tocarSello(SODIO);
    const ambos = await panel.conteoBoton();
    const badge2 = await panel.badge();
    await panel.capturarEvidencia(cp, 8, `${AZUCARES} y ${SODIO} marcados`);
    await panel.tocarSello(SODIO);
    const despues = await panel.conteoBoton();
    const sodio = await panel.marcado(SODIO);
    const azucares = await panel.marcado(AZUCARES);
    const badge1 = await panel.badge();
    await panel.verSeccion();
    await panel.capturarEvidencia(cp, 9, `${SODIO} desmarcado`);
    const chips = await panel.chips();
    await panel.capturarEvidencia(cp, 10, 'chips tras desmarcar');
    test.info().annotations.push({ type: 'estado', description: `solo azúcares ${soloAzucares}; ambos ${ambos} (badge ${badge2}); tras desmarcar sodio ${despues} (badge ${badge1}); sodio=${sodio}, azúcares=${azucares}; chips ${chips.join(', ')}` });
    expect(badge2, 'con los dos sellos el badge es 2').toBe(2);
    expect(sodio, `«${SODIO}» queda desmarcado`).toBe(false);
    expect(azucares, `«${AZUCARES}» sigue marcado`).toBe(true);
    expect(badge1, 'el badge baja a 1').toBe(1);
    expect(chips, `solo queda el chip «${AZUCARES}»`).toEqual([AZUCARES]);
    expect(despues, `el botón muestra el conteo de solo «${AZUCARES}»`).toBe(soloAzucares);
    await panel.capturarEvidencia(cp);
  });

  test('TC-B2C103-APP-007 · Un sello combinado con una marca aplica lógica AND [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C103-APP-007';
    const marca = MARCA;
    const plp = await plpVacuno(screen, p, testData, cp);
    const panel = await abrirPanel(screen, p, plp, cp);
    // Precondición: la marca tiene en la PLP productos con y sin el sello. Se mide antes de los pasos
    // (solo la marca vs. marca + sello) y se deja el panel como estaba.
    await panel.tocarMarca(marca);
    const soloMarca = await panel.conteoBoton();
    await panel.tocarMarca(marca);
    await abrirSellos(panel, cp);
    await panel.tocarSello(AZUCARES);
    const conSello = await panel.conteoBoton();
    await panel.capturarEvidencia(cp, 8, `${AZUCARES} marcado (${conSello})`);
    await panel.tocarMarca(marca);
    const conMarca = await panel.conteoBoton();
    if (!(soloMarca && conMarca !== null && soloMarca > conMarca && conMarca > 0)) {
      throw new Error(`PRECONDICION_NO_DISPONIBLE: ${marca} no tiene productos con y sin «${AZUCARES}» (solo marca ${soloMarca}, marca + sello ${conMarca})`);
    }
    await panel.capturarEvidencia(cp, 10, `${AZUCARES} y ${marca} (${conMarca})`);
    await panel.confirmar();
    const total = await totalPlp(screen);
    await plp.capturarEvidencia(cp, 12, `listado con ${AZUCARES} y ${marca}`);
    const listado = await productosDelListado(screen);
    const otraMarca = listado.filter((x) => !x.texto.toLowerCase().includes(marca.toLowerCase()));
    test.info().annotations.push({ type: 'conteos', description: `solo ${marca} ${soloMarca}; solo sello ${conSello}; sello + ${marca} ${conMarca}; encabezado ${total}; listado ${listado.length}, de otra marca ${otraMarca.length}` });
    expect(conMarca, 'al agregar la marca el conteo no aumenta').toBeLessThanOrEqual(conSello ?? -1);
    expect(otraMarca.map((x) => x.sku), `el listado muestra solo productos de ${marca}`).toEqual([]);
    expect(total, 'el encabezado coincide con el conteo del botón').toBe(conMarca);
    await plp.capturarEvidencia(cp);
  });

  test('TC-B2C103-APP-008 · Quitar un sello desde su chip lo desmarca y actualiza badge y conteo [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C103-APP-008';
    const panel = await abrirPanel(screen, p, await plpVacuno(screen, p, testData, cp), cp);
    await abrirSellos(panel, cp);
    await panel.tocarSello(AZUCARES);
    const soloAzucares = await panel.conteoBoton();
    await panel.tocarSello(SODIO);
    const badge2 = await panel.badge();
    const chipsAntes = await panel.chips();
    await panel.capturarEvidencia(cp, 8, 'chips de los dos sellos');
    await panel.quitarChip(SODIO);
    const chips = await panel.chips();
    const despues = await panel.conteoBoton();
    await panel.capturarEvidencia(cp, 10, `chip ${SODIO} quitado`);
    const sodio = await panel.marcado(SODIO);
    const badge1 = await panel.badge();
    await panel.verSeccion();
    await panel.capturarEvidencia(cp, 10, `${SODIO} desmarcado en el dropdown`);
    test.info().annotations.push({ type: 'estado', description: `chips ${chipsAntes.join(', ')} → ${chips.join(', ')}; badge ${badge2} → ${badge1}; sodio=${sodio}; botón ${despues} (solo azúcares ${soloAzucares})` });
    expect(chipsAntes, 'con los dos sellos hay dos chips').toEqual([AZUCARES, SODIO]);
    expect(chips, `el chip «${SODIO}» desaparece`).toEqual([AZUCARES]);
    expect(sodio, `su checkbox queda desmarcado`).toBe(false);
    expect(badge1, 'el badge baja de 2 a 1').toBe(1);
    expect(despues, `el botón muestra el conteo de solo «${AZUCARES}»`).toBe(soloAzucares);
    await panel.capturarEvidencia(cp);
  });
});
