import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import type { Plataforma } from '../tests/support/rutasEvidencia';
import { ListadoScreen } from './pages/ListadoScreen';
import { FiltroOfertasPanel } from './pages/FiltroOfertasPanel';
import { tolerante } from './support/tolerante';
import { sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/**
 * B2C-95 — Filtro «Ofertas» del panel de filtros, en la app. Solo Android (emulador local), v1.0.1.
 *
 * Las filas dicen "Viewport: App iOS/Android" sin "Plataforma:"; esta corrida certifica Android e
 * iOS queda Pendiente. {PLP_URL_PRECIO_OFERTA} es /category/carnes_vacuno: en la app es Categorías →
 * Carnes → Vacuno. La sesión es {USER_AUTH_001} (correo + OTP).
 *
 * El nombre de la tarjeta se valida por «Ofertas» al inicio: la HU y el TC escriben «Ofertas 😎» y
 * la app (igual que la web) muestra «Ofertas 🤩»; el emoji se anota en el resultado.
 *
 * Sin `test()`: 005 ({PLP_URL_SIN_OFERTAS} sin fila en el Excel de data) → Bloqueado Data.
 */

const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const SALUDO = /Karl/i;
const MARCA = 'Fundo Rio Alegre';
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

/** Pasos 1 y 2: sesión y la PLP Carnes → Vacuno. Devuelve el total del encabezado. */
async function plpVacuno(screen: Screen, p: Plataforma, td: any, cp: string): Promise<{ plp: ListadoScreen; total: number }> {
  await asegurarApp(screen);
  await sesion(screen, p, cp, token(td, 'USER_AUTH_001')!.split(' / ')[0].trim(), SALUDO);
  await tol(() => screen.getByTestId('tab-Categorías').tap());
  await dormir(4000);
  for (let i = 0; i < 6; i++) { swipe(540, 700, 540, 1800, 250); await dormir(500); }
  // La sección «Carnes» es una fila a todo el ancho; sus N2 van en un carrusel horizontal debajo.
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
  const total = await totalPlp(screen);
  expect(total, 'la PLP muestra su total de productos').not.toBeNull();
  await plp.capturarEvidencia(cp, 2, `PLP Vacuno con ${total} productos`);
  return { plp, total: total! };
}

async function totalPlp(screen: Screen): Promise<number | null> {
  const n = await textos(screen);
  const t = n.find((x) => x.type === 'TextView' && /^\d+ productos?$/.test(x.label) && x.y < 900);
  return t ? Number(/\d+/.exec(t.label)![0]) : null;
}

/** Pasos 3 y 4: abre el panel de filtros. */
async function abrirPanel(screen: Screen, p: Plataforma, plp: ListadoScreen, cp: string, paso = 4): Promise<FiltroOfertasPanel> {
  await tol(() => plp.iconoFiltros.tap());
  const panel = new FiltroOfertasPanel(screen, p);
  await tol(() => panel.waitUntilReady());
  await dormir(2500);
  await panel.capturarEvidencia(cp, paso, 'panel de filtros abierto');
  return panel;
}

/** Productos del listado (por su tarjeta) con el texto accesible de cada una, recorriendo la PLP. */
async function productosDelListado(screen: Screen, maxPantallas = 8): Promise<{ sku: string; texto: string }[]> {
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
    swipe(540, 1800, 540, 900, 600);
    await dormir(1500);
  }
  return vistos;
}
/**
 * Señales de oferta en el shelf: promoción, descuento, «Antes:», o un segundo precio (el de socio, que
 * la tarjeta muestra como otro importe sin etiqueta).
 */
const enOferta = (texto: string) =>
  /Promoci[oó]n|Lleva \d|\d+%|Antes:|\d+ por \$|\$[\d.]+ c\/u/i.test(texto) ||
  texto.split(' | ').filter((t) => /^\$[\d.]+$/.test(t)).length >= 2;

test.describe.configure({ timeout: 900000 });
test.describe('B2C-95 — Filtro Ofertas (Android)', () => {
  test('TC-B2C95-APP-001 · Ofertas es la primera tarjeta con nombre, cantidad y toggle desactivado [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C95-APP-001';
    const { plp } = await plpVacuno(screen, p, testData, cp);
    const panel = await abrirPanel(screen, p, plp, cp);
    const orden = await panel.filtrosEnOrden();
    const tarjeta = await panel.tarjetaOfertas();
    test.info().annotations.push({ type: 'panel', description: `orden: ${orden.join(' | ')}; tarjeta: «${tarjeta?.nombre.label}» «${tarjeta?.conteo?.label}» toggle=${tarjeta?.toggle?.checked}` });
    expect(tarjeta, 'el panel muestra la tarjeta Ofertas').not.toBeNull();
    expect(orden[0], 'Ofertas es el primer filtro de «Aplica tus filtros»').toMatch(/^Ofertas\b/);
    expect(tarjeta!.conteo?.label, 'la tarjeta muestra la cantidad de productos en oferta').toMatch(/^\d+ productos?$/);
    expect(tarjeta!.toggle, 'la tarjeta tiene el toggle').toBeTruthy();
    expect(tarjeta!.toggle!.x, 'el toggle está a la derecha del nombre').toBeGreaterThan(tarjeta!.nombre.x + 400);
    expect(tarjeta!.toggle!.checked, 'el toggle está desactivado por defecto').toBe(false);
    await panel.capturarEvidencia(cp, 5, 'tarjeta Ofertas con el toggle desactivado');
    await panel.capturarEvidencia(cp);
  });

  test('TC-B2C95-APP-002 · Activar Ofertas muestra el toggle activo y actualiza el conteo del boton [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C95-APP-002';
    const { plp } = await plpVacuno(screen, p, testData, cp);
    const panel = await abrirPanel(screen, p, plp, cp);
    const ofertasTarjeta = await panel.numeroDe((await panel.tarjetaOfertas())?.conteo?.label);
    await panel.tocarToggle();
    const activo = await panel.estadoToggle();
    const boton = await panel.esperarConteoBoton(ofertasTarjeta ?? -1);
    await panel.capturarEvidencia(cp, 6, 'toggle Ofertas activado');
    test.info().annotations.push({ type: 'conteo', description: `tarjeta Ofertas ${ofertasTarjeta}; botón tras activar «Mostrar ${boton} productos»; toggle=${activo}` });
    expect(activo, 'el toggle Ofertas queda activo').toBe(true);
    expect(boton, 'el botón muestra «Mostrar N productos» con N = la cantidad de la tarjeta Ofertas').toBe(ofertasTarjeta);
    await panel.capturarEvidencia(cp);
  });

  test('TC-B2C95-APP-003 · Mostrar productos con Ofertas activo cierra el panel y lista solo ofertas [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C95-APP-003';
    const { plp } = await plpVacuno(screen, p, testData, cp);
    const panel = await abrirPanel(screen, p, plp, cp);
    await panel.tocarToggle();
    const boton = await panel.esperarConteoBoton(await panel.numeroDe((await panel.tarjetaOfertas())?.conteo?.label) ?? -1);
    await panel.capturarEvidencia(cp, 6, 'toggle Ofertas activado');
    await panel.confirmar();
    expect(await panel.readyLocator.isVisible().catch(() => false), 'el panel se cierra').toBe(false);
    const total = await totalPlp(screen);
    await plp.capturarEvidencia(cp, 8, `listado tras Mostrar (${total} productos)`);
    const listado = await productosDelListado(screen);
    const sinOferta = listado.filter((x) => !enOferta(x.texto));
    test.info().annotations.push({ type: 'listado', description: `botón ${boton}; encabezado ${total}; ${listado.length} productos, sin señal de oferta: ${sinOferta.map((x) => x.texto.split(' | ').find((t) => / \| /.test(t)) ?? x.sku).join('; ') || '-'}` });
    expect(total, 'el encabezado de la PLP muestra el mismo N que el botón').toBe(boton);
    expect(sinOferta.map((x) => x.sku), 'el listado muestra solo productos con oferta vigente').toEqual([]);
    await plp.capturarEvidencia(cp);
  });

  test('TC-B2C95-APP-004 · Desactivar Ofertas recalcula el conteo sobre los filtros restantes [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C95-APP-004';
    const { plp } = await plpVacuno(screen, p, testData, cp);
    const panel = await abrirPanel(screen, p, plp, cp);
    await panel.tocarToggle();
    const conOfertas = await panel.conteoBoton();
    await panel.abrirMarcas();
    await panel.elegirMarca(MARCA);
    await dormir(3000);
    const ofertasYMarca = await panel.conteoBoton();
    await panel.capturarEvidencia(cp, 8, `Ofertas y ${MARCA}`);
    await panel.tocarToggle();
    await dormir(4000);
    const soloMarca = await panel.conteoBoton();
    const activo = await panel.estadoToggle();
    await panel.capturarEvidencia(cp, 10, `solo ${MARCA}`);
    await panel.confirmar();
    const total = await totalPlp(screen);
    const listado = await productosDelListado(screen);
    const otraMarca = listado.filter((x) => !x.texto.includes(MARCA));
    await plp.capturarEvidencia(cp, 12, `listado de ${MARCA}`);
    test.info().annotations.push({ type: 'conteos', description: `Ofertas ${conOfertas}; Ofertas+${MARCA} ${ofertasYMarca}; solo ${MARCA} ${soloMarca}; encabezado ${total}; listado ${listado.length}, de otra marca ${otraMarca.length}` });
    expect(activo, 'el toggle Ofertas vuelve a desactivado').toBe(false);
    expect(otraMarca.map((x) => x.sku), `el listado muestra solo productos de ${MARCA}`).toEqual([]);
    expect(total, 'el encabezado coincide con el conteo del botón').toBe(soloMarca);
    expect(listado.length, 'el listado tiene tantos productos como anuncia el encabezado').toBe(total ?? -1);
    await plp.capturarEvidencia(cp);
  });

  test('TC-B2C95-APP-006 · Ofertas combinado con Marca muestra solo productos que cumplen ambos [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C95-APP-006';
    const { plp } = await plpVacuno(screen, p, testData, cp);
    const panel = await abrirPanel(screen, p, plp, cp);
    await panel.tocarToggle();
    await panel.abrirMarcas();
    await panel.elegirMarca(MARCA);
    await dormir(3000);
    const boton = await panel.conteoBoton();
    await panel.capturarEvidencia(cp, 8, `Ofertas y ${MARCA}`);
    await panel.confirmar();
    const total = await totalPlp(screen);
    const listado = await productosDelListado(screen);
    const fuera = listado.filter((x) => !x.texto.includes(MARCA) || !enOferta(x.texto));
    await plp.capturarEvidencia(cp, 10, `listado con Ofertas y ${MARCA}`);
    test.info().annotations.push({ type: 'listado', description: `botón ${boton}; encabezado ${total}; ${listado.length} productos; fuera del filtro: ${fuera.map((x) => x.texto.split(' | ').find((t) => / \| /.test(t)) ?? x.sku).join('; ') || '-'}` });
    expect(fuera.map((x) => x.sku), `el listado muestra solo productos en oferta de ${MARCA}`).toEqual([]);
    expect(total, 'el encabezado coincide con el conteo del botón').toBe(boton);
    await plp.capturarEvidencia(cp);
  });
});
