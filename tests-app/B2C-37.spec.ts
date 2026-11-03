import * as fs from 'fs';
import { execSync } from 'child_process';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { MiCuentaScreen } from './pages/MiCuentaScreen';
import { fijarDireccionInvitado, agregarDesdePdp, abrirCarro } from './support/invitadoConCarro';
import { tolerante } from './support/tolerante';
import sharp from 'sharp';
import { diferenciaMedia } from './support/pixeles';

/**
 * B2C-37 — Página del carro en la app (Android, app v1.0.1, emulador local).
 *
 * El login de la v1.0.1 es por correo + código (OTP): el spec lo hace con la cuenta que declara cada
 * caso y entrega el código por el mismo protocolo de archivos que la web (`.qa/otp`); el agente lo
 * lee de Gmail. Las casillas del código aceptan los ceros solo al tocar las teclas del teclado, así
 * que se teclea por `adb input tap`.
 *
 * Sin `test()`: los casos que piden {HERRAMIENTA_PROXY_APP} (red lenta o cortar una llamada):
 * 020, 029–033 y 044–046.
 *
 * El carro de un usuario con sesión vive en su cuenta: cada caso lo deja como lo pide y lo reutiliza
 * si el anterior ya lo dejó igual.
 */
const BD = (m: string) => new Error(`PRECONDICION_NO_DISPONIBLE: ${m}`);
const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);

interface Nodo { type: string; id: string; label: string; x: number; y: number; w: number; h: number }
async function nodos(screen: any): Promise<Nodo[]> {
  const out: Nodo[] = [];
  const rec = (n: any) => {
    const id = n.identifier ?? n.resourceId ?? '';
    const nombre = n.label || n.text;
    if (!id.startsWith('com.android.systemui') && (nombre || id)) {
      out.push({ type: String(n.type ?? '').split('.').pop()!, id, label: nombre ?? '', x: n.bounds?.x ?? 0, y: n.bounds?.y ?? 0, w: n.bounds?.width ?? 0, h: n.bounds?.height ?? 0 });
    }
    for (const c of n.children ?? []) rec(c);
  };
  for (const n of (await tol(() => screen.viewTree())) as any[]) rec(n);
  return out;
}
const tiene = (n: Nodo[], re: RegExp) => n.some((x) => re.test(x.label));
const sku = (td: any, k: string) => token(td, k)!;

/** Factor de escala respecto del Pixel 6 (1080x2400) para el que están las coordenadas y zonas fijas. */
const ESCALA = (() => {
  try {
    const wm = execSync('adb shell wm size', { timeout: 15000 }).toString();
    const m = /(\d+)x(\d+)/.exec(wm.split('Override size:').pop() ?? wm);
    return m ? Number(m[1]) / 1080 : 1;
  } catch { return 1; }
})();
const esc = (xy: string) => xy.trim().split(/\s+/).map((n) => Math.round(Number(n) * ESCALA)).join(' ');
const escZona = (z: { left: number; top: number; width: number; height: number }) => ({
  left: Math.round(z.left * ESCALA), top: Math.round(z.top * ESCALA), width: Math.round(z.width * ESCALA), height: Math.round(z.height * ESCALA),
});

/**
 * Toca un punto de la pantalla. Las coordenadas están medidas en el Pixel 6 (1080x2400); en otra pantalla
 * el diseño no escala de forma uniforme (la densidad cambia), así que cada sitio puede traer su
 * coordenada medida en el equipo de 720x1600 (`tel`) y, si no la trae, se escala la del Pixel 6.
 */
function tocar(_re: RegExp, pixel: string, tel?: string): void {
  const xy = ESCALA !== 1 && tel ? tel : esc(pixel);
  execSync(`adb shell input tap ${xy}`, { timeout: 15000 });
}
/** Pulsación corta sobre «Más opciones» (⋯): el toque simple no siempre abre el menú. */
function abrirMenuMas(): void {
  execSync(`adb shell input swipe ${esc('980 380 980 380 120')}`, { timeout: 15000 });
}

// --- Teclado numérico en pantalla (1080x2400) ----------------------------------------------------
const TECLA: Record<string, [number, number]> = { '1': [138, 1728], '2': [406, 1728], '3': [673, 1728], '4': [138, 1882], '5': [406, 1882], '6': [673, 1882], '7': [138, 2036], '8': [406, 2036], '9': [673, 2036], '0': [406, 2190] };
/** Resolución de la pantalla en uso (por defecto la del Pixel 6, para la que están las coordenadas fijas). */
function pantallaGrande(): boolean {
  const wm = execSync('adb shell wm size', { timeout: 15000 }).toString();
  return /1080x2400/.test(wm.split('Override size:').pop() ?? wm);
}
function teclear(codigo: string) {
  // Fuera del Pixel 6 el teclado numérico está en otro lugar: se envían las teclas por código (KEYCODE_0 = 7).
  if (!pantallaGrande()) {
    for (const d of codigo) { execSync(`adb shell input keyevent ${7 + Number(d)}`, { timeout: 15000 }); execSync('sleep 0.8'); }
    return;
  }
  for (const d of codigo) { execSync(`adb shell input tap ${TECLA[d][0]} ${TECLA[d][1]}`, { timeout: 15000 }); execSync('sleep 0.7'); }
}
function borrarCasillas() {
  if (!pantallaGrande()) { for (let i = 0; i < 8; i++) { execSync('adb shell input keyevent KEYCODE_DEL', { timeout: 15000 }); execSync('sleep 0.3'); } return; }
  for (let i = 0; i < 14; i++) { execSync(`adb shell input tap ${esc('940 2036')}`, { timeout: 15000 }); execSync('sleep 0.6'); }
}

/** Código OTP: el spec lo pide por archivo y el agente lo deja en `.qa/otp/codigos`. */
async function esperarCodigo(cp: string, correo: string, desde: Date): Promise<string> {
  const id = `${cp}-app-${Date.now()}`;
  fs.mkdirSync('.qa/otp/pedidos', { recursive: true });
  fs.mkdirSync('.qa/otp/codigos', { recursive: true });
  fs.writeFileSync(`.qa/otp/pedidos/${id}.json`, JSON.stringify({ id, cp_id: cp, correo, desde: desde.toISOString(), digitos: 6, respuesta: `.qa/otp/codigos/${id}.txt` }));
  for (let i = 0; i < 100; i++) {
    const f = `.qa/otp/codigos/${id}.txt`;
    if (fs.existsSync(f)) { const c = fs.readFileSync(f, 'utf-8').trim(); fs.rmSync(f, { force: true }); fs.rmSync(`.qa/otp/pedidos/${id}.json`, { force: true }); return c; }
    await dormir(3000);
  }
  throw new Error('OTP_NO_RECIBIDO: el código no llegó a tiempo');
}

/** Deja la app con sesión de `correo`: reutiliza la que hay o inicia sesión por OTP. */
async function sesion(screen: any, p: any, cp: string, correo: string, saludo: RegExp) {
  // Si un test anterior dejó la app fuera de las pestañas, se vuelve con «atrás» (cerrar la app cerraría la sesión).
  for (let i = 0; i < 6 && !(await screen.getByTestId('tab-Mi cuenta').isVisible().catch(() => false)); i++) {
    const foco = execSync('adb shell dumpsys window | grep mCurrentFocus || true', { timeout: 20000 }).toString();
    if (!foco.includes('cl.smu.unimarcapp.sfcc.qa')) {
      execSync('adb shell monkey -p cl.smu.unimarcapp.sfcc.qa -c android.intent.category.LAUNCHER 1', { timeout: 15000 });
      await dormir(8000);
    } else {
      execSync('adb shell input keyevent 4', { timeout: 15000 });
      await dormir(2000);
    }
    carroActual = '';
  }
  const tabs = await tol(() => new TabBar(screen, p).waitUntilReady());
  await tol(() => screen.getByTestId('tab-Mi cuenta').tap());
  await dormir(3000);
  let n = await nodos(screen);
  if (n.some((x) => /^Hola, /.test(x.label) && saludo.test(x.label))) return tabs;
  if (n.some((x) => /^Hola, /.test(x.label))) {
    // Otra cuenta con sesión: se cierra.
    const cuenta = new MiCuentaScreen(screen, p);
    await tol(() => cuenta.cerrarSesion());
    await dormir(3000);
  }
  await tol(() => screen.getByText('Iniciar sesión').first().tap());
  await dormir(3500);
  const campo = screen.getByType('android.widget.EditText').first();
  await tol(() => campo.waitFor({ state: 'visible', timeout: 25000 }));
  const desde = new Date(Date.now() - 30000);
  await tol(() => campo.fill(correo));
  await dormir(1500);
  await tol(() => screen.getByText('Continuar').first().tap());
  await tol(() => screen.getByText(/Autenticación requerida/).waitFor({ state: 'visible', timeout: 40000 }));
  const codigo = await esperarCodigo(cp, correo, desde);
  borrarCasillas();
  teclear(codigo);
  await dormir(2000);
  await tol(() => screen.getByText('Validar').tap());
  await dormir(7000);
  n = await nodos(screen);
  if (n.some((x) => /Ahora no/.test(x.label))) { await tol(() => screen.getByText('Ahora no').tap()); await dormir(4000); }
  await tol(() => screen.getByTestId('tab-Mi cuenta').tap());
  await dormir(3000);
  n = await nodos(screen);
  expect(n.some((x) => /^Hola, /.test(x.label)), 'la sesión quedó iniciada').toBe(true);
  return tabs;
}

// --- Carro del usuario con sesión ---------------------------------------------------------------
let carroActual = '';
async function irAlHome(screen: any) { await tol(() => screen.getByTestId('tab-Home').tap()); await dormir(2500); }

async function abrirMiCarro(screen: any, p: any) {
  await irAlHome(screen);
  const carro = await abrirCarro(screen, p);
  for (let i = 0; i < 30; i++) {
    const n = await nodos(screen);
    if (n.some((x) => x.id.startsWith('cart-item-')) || tiene(n, /Tu carro est[áa] vac[íi]o/)) break;
    await screen.swipe('up'); await dormir(2000);
  }
  return carro;
}

/** Captura por adb (la misma vía que los toques); la del framework tiene ruido y no sirve para comparar. */
const capAdb = (zona: { left: number; top: number; width: number; height: number }) =>
  sharp(execSync('adb exec-out screencap -p', { timeout: 20000, maxBuffer: 64 * 1024 * 1024 })).extract(escZona(zona)).png().toBuffer();

/** Cuenta píxeles de una zona que cumplen `fn` (captura por adb a tamaño completo). */
async function contar(zona: { left: number; top: number; width: number; height: number }, fn: (r: number, g: number, b: number) => boolean): Promise<number> {
  const { data, info } = await sharp(execSync('adb exec-out screencap -p', { timeout: 20000, maxBuffer: 64 * 1024 * 1024 })).extract(escZona(zona)).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  let n = 0;
  for (let i = 0; i < data.length; i += info.channels) if (fn(data[i], data[i + 1], data[i + 2])) n++;
  return n;
}
/** El menú ⋯ está abierto si aparece el texto oscuro de sus opciones (a la derecha del título, donde antes no hay nada). */
const menuVisible = async () => (await contar({ left: 480, top: 290, width: 420, height: 60 }, (r, g, b) => r < 110 && g < 110 && b < 110)) > 300 * ESCALA * ESCALA;
/** El modal «Vaciar el carro» está abierto si aparece el botón rosado «Sí, eliminar». */
const modalVisible = async () => (await contar({ left: 60, top: 2020, width: 960, height: 100 }, (r, g, b) => r > 240 && g > 205 && g < 235 && b > 205 && b < 235)) > 15000 * ESCALA * ESCALA;

/** Menú ⋯: es una ventana emergente nativa que el árbol de accesibilidad no ve mientras está abierta. */
const ZONA_MENU = { left: 440, top: 260, width: 600, height: 280 };
async function menuMasOpciones(screen: any): Promise<{ abierto: boolean; dif: number }> {
  for (let i = 0; i < 4; i++) {
    // el toque del framework sobre «Más opciones» no siempre abre el menú; se alterna toque y pulsación corta
    if (i % 2 === 0) execSync(`adb shell input tap ${esc('980 380')}`, { timeout: 15000 }); else abrirMenuMas();
    await dormir(2200);
    if (await menuVisible()) return { abierto: true, dif: i };
  }
  return { abierto: false, dif: -1 };
}
const tocarItemMenu = (item: 'guardar' | 'vaciar') => { tocar(item === 'guardar' ? /Guardar como lista/i : /Vaciar carro/i, item === 'guardar' ? '672 324' : '600 450', item === 'guardar' ? '430 270' : '380 359'); execSync('sleep 2'); };
async function vaciarDesdeMenu(screen: any) {
  for (let intento = 0; intento < 3; intento++) {
    abrirMenuMas(); await dormir(2500);   // ⋯
    tocarItemMenu('vaciar');                                                           // «Vaciar Carro»
    await dormir(3500);
    tocar(/S[ií], eliminar/i, '540 2066', '360 1243');                      // «Sí, eliminar»
    await dormir(3000);
    for (let i = 0; i < 6; i++) { if (tiene(await nodos(screen), /Tu carro est[áa] vac[íi]o/)) return; await dormir(2000); }
  }
  execSync('adb exec-out screencap -p > .qa/run/dbg-fallo.png', { timeout: 20000 });
  throw new Error('el carro no quedó vacío tras «Sí, eliminar»');
}

/** Label del CTA del carro; mientras carga el árbol lo expone como «busy», así que se espera a que se estabilice. */
async function ctaLabel(screen: any): Promise<string> {
  let l = '';
  for (let i = 0; i < 8; i++) {
    const n = await nodos(screen);
    l = n.find((x) => /^(M[íi]nimo de compra|Continuar con la entrega)/i.test(x.label))?.label ?? '';
    if (l) return l;
    await dormir(2000);
  }
  return l || 'busy';
}

/** Deja el carro de la cuenta con exactamente `items` ([sku, cantidad]) y lo abre en «Mi carro». */
async function carroCon(screen: any, p: any, td: any, items: [string, number][]) {
  const firma = JSON.stringify(items);
  if (carroActual !== firma) {
    // 1) vaciar lo que haya
    const tabs = new TabBar(screen, p);
    await irAlHome(screen);
    if (await tabs.floatingPill.isVisible().catch(() => false)) {
      await abrirCarro(screen, p);
      for (let i = 0; i < 20 && !(await nodos(screen)).some((x) => x.id.startsWith('cart-item-')); i++) { await screen.swipe('up'); await dormir(2000); }
      await vaciarDesdeMenu(screen);
      await tol(() => screen.getByText('Volver').tap()); await dormir(2000);
    }
    // 2) agregar cada SKU desde su PDP
    for (const [k] of items) await agregarDesdePdp(screen, p, sku(td, k));
    // 3) cantidades
    const carro = await abrirMiCarro(screen, p);
    for (const [k, q] of items) {
      for (let u = 1; u < q; u++) {
        const n = await nodos(screen);
        const fila = n.find((x) => x.id === `cart-item-${sku(td, k)}`);
        const b = fila ? n.find((x) => x.type === 'Button' && /^Agregar una unidad de/.test(x.label) && x.y > fila.y - 5 && x.y < fila.y + 260) : undefined;
        if (!b) throw new Error(`el carro no muestra «Agregar una unidad» de ${k}`);
        await tol(() => screen.getByRole('button', { name: b.label }).tap());
        for (let i = 0; i < 25; i++) { await dormir(2500); if ((await nodos(screen)).some((x) => x.id === `cart-quantity-${sku(td, k)}` && x.label === `${u + 1} un.`)) break; }
      }
    }
    await quitarSobrantes(screen, td, items);
    carroActual = firma;
    return carro;
  }
  return abrirMiCarro(screen, p);
}

/** Deja en el carro solo los SKU pedidos: quita con su basurero lo que haya de más (el carro vive en la cuenta). */
async function quitarSobrantes(screen: any, td: any, items: [string, number][]) {
  const esperados = new Set(items.map(([k]) => `cart-item-${sku(td, k)}`));
  for (let i = 0; i < 6; i++) {
    const n = await nodos(screen);
    const sobra = n.find((x) => x.id.startsWith('cart-item-') && !esperados.has(x.id));
    if (!sobra) return;
    const b = n.find((x) => x.type === 'Button' && /^Eliminar /.test(x.label) && x.y > sobra.y - 5 && x.y < sobra.y + 260);
    if (!b) return;
    await tol(() => screen.getByRole('button', { name: b.label }).tap());
    await dormir(3500);
  }
}
const invalidarCarro = () => { carroActual = ''; };

/** Carro con los productos de `no disponible`: se intenta una sola vez por corrida y se reutiliza el resultado. */
let noDisponible: string | null | undefined;
async function conNoDisponible(screen: any, p: any, td: any, base: [string, number][]) {
  if (noDisponible) throw BD(noDisponible);
  try {
    return await carroCon(screen, p, td, [...base, ['SKU_NO_DISPONIBLE', 1]]);
  } catch (e) {
    noDisponible = `no se puede dejar {SKU_NO_DISPONIBLE} (000000000400254005-UN) en el carro de la cuenta: ${String(e).slice(0, 160)}`;
    invalidarCarro();
    throw BD(noDisponible);
  }
}

const CUENTA = (td: any) => sku(td, 'COMPRADOR_USER');
const SALUDO = /Karl|Comprador/i;

test.describe.configure({ timeout: 900000 });
test.describe('B2C-37 — Página del carro (Android)', () => {
  // ================================================================ cuenta de comprador
  test('TC-B2C37-APP-001 · El carrito muestra el layout con ítems disponibles y totales fijos [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C37-APP-001';
    await sesion(screen, p, cp, CUENTA(testData), SALUDO);
    const carro = await carroCon(screen, p, testData, [['SKU_VALID_001', 1]]);
    await carro.capturarEvidencia(cp, 5, 'Mi carro con SKU_VALID_001');
    const n = await nodos(screen);
    test.info().annotations.push({ type: 'pantalla', description: n.map((x) => x.label).filter(Boolean).slice(0, 30).join(' | ') });
    expect.soft(tiene(n, /^Mi carro$/), 'header simplificado «Mi carro»').toBe(true);
    expect.soft(tiene(n, /^Mis productos$/) && n.some((x) => x.id.startsWith('cart-item-')), 'acordeón de disponibles expandido con su ítem').toBe(true);
    expect.soft(tiene(n, /^Más opciones$/), 'ícono ⋯').toBe(true);
    expect.soft(tiene(n, /^Subtotal$/) && !tiene(n, /Subtotal con Unipay/), '«Subtotal» sin «Subtotal con Unipay»').toBe(true);
    expect.soft(n.some((x) => x.id === 'cart-checkout'), 'CTA «Continuar con la entrega»').toBe(true);
    await carro.capturarEvidencia(cp);
  });

  test('TC-B2C37-APP-003 · El menú ⋯ muestra "Guardar como lista" y "Vaciar carro" [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C37-APP-003';
    await sesion(screen, p, cp, CUENTA(testData), SALUDO);
    const carro = await carroCon(screen, p, testData, [['SKU_VALID_001', 1]]);
    const m = await menuMasOpciones(screen);
    await carro.capturarEvidencia(cp, 5, 'menú ⋯ abierto');
    test.info().annotations.push({ type: 'menú ⋯', description: `ventana emergente abierta: ${m.abierto} (diferencia de la zona ${m.dif.toFixed(1)})` });
    expect(m.abierto, 'el menú ⋯ se abre con sus opciones («Guardar como lista» y «Vaciar Carro», ver captura)').toBe(true);
    await carro.capturarEvidencia(cp);
  });

  test('TC-B2C37-APP-006 · "Guardar como lista" del menú ⋯ inicia el flujo de guardado de lista [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C37-APP-006';
    await sesion(screen, p, cp, CUENTA(testData), SALUDO);
    const carro = await carroCon(screen, p, testData, [['SKU_VALID_001', 1]]);
    const m = await menuMasOpciones(screen);
    expect(m.abierto, 'el menú ⋯ se abre').toBe(true);
    const ZONA_HOJA = { left: 0, top: 560, width: 1080, height: 1500 };
    const recorteHoja = async () => sharp(await tol(() => screen.screenshot())).extract(escZona(ZONA_HOJA)).png().toBuffer();
    abrirMenuMas(); await dormir(1500); execSync('adb shell input keyevent 4', { timeout: 15000 }); await dormir(1500);
    const antes = await recorteHoja();
    abrirMenuMas(); await dormir(2500);
    tocarItemMenu('guardar');
    await dormir(3500);
    const dif = await diferenciaMedia(antes, await recorteHoja());
    await carro.capturarEvidencia(cp, 6, 'tras tocar «Guardar como lista» (hoja «Agregar como lista»)');
    test.info().annotations.push({ type: 'hoja', description: `se abre la hoja «Agregar como lista» (Crear nueva lista / listas / Confirmar): diferencia de la zona ${dif.toFixed(1)}` });
    expect(dif > 6, 'se abre el flujo de guardado de lista (hoja «Agregar como lista»)').toBe(true);
    tocar(/^(Cerrar|Close)$/i, '61 584', '44 367'); await dormir(1500);
    await carro.capturarEvidencia(cp);
  });

  test('TC-B2C37-APP-014 · Cada ítem disponible muestra imagen, nombre, precios, cantidad, controles y eliminar [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C37-APP-014';
    await sesion(screen, p, cp, CUENTA(testData), SALUDO);
    const carro = await carroCon(screen, p, testData, [['SKU_VALID_001', 1]]);
    const n = await nodos(screen);
    const fila = n.find((x) => x.id === `cart-item-${sku(testData, 'SKU_VALID_001')}`)!;
    const it = n.filter((x) => x.y >= fila.y && x.y < fila.y + 260);
    test.info().annotations.push({ type: 'ítem', description: it.map((x) => x.label).filter(Boolean).join(' | ') });
    expect.soft(it.some((x) => x.type === 'TextView' && x.label.includes(' | ')), 'nombre').toBe(true);
    expect.soft(it.some((x) => /^\$[\d.]+ c\/u$/.test(x.label)), 'precio unitario').toBe(true);
    expect.soft(it.some((x) => /^1 un\.$/.test(x.label)), 'cantidad actual').toBe(true);
    expect.soft(it.some((x) => /^Agregar una unidad/.test(x.label)), 'control «+»').toBe(true);
    expect.soft(it.some((x) => /^(Eliminar|Disminuir)/.test(x.label)), 'control «−» / eliminar').toBe(true);
    await carro.capturarEvidencia(cp);
  });

  test('TC-B2C37-APP-034 · El carrito bajo el mínimo muestra el faltante y deshabilita el CTA [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C37-APP-034';
    await sesion(screen, p, cp, CUENTA(testData), SALUDO);
    const carro = await carroCon(screen, p, testData, [['SKU_VALID_001', 1]]);
    const n = await nodos(screen);
    await carro.capturarEvidencia(cp, 5, 'carro bajo el mínimo');
    const minimo = Number(sku(testData, 'MONTO_MINIMO_COMPRA'));
    const subtotal = Number((n.find((x, i) => n[i - 1]?.label === 'Subtotal' && /^\$/.test(x.label))?.label ?? '').replace(/\D/g, ''));
    const toast = n.find((x) => /Solo te faltan/i.test(x.label));
    test.info().annotations.push({ type: 'montos', description: `subtotal ${subtotal}; toast «${toast?.label}»` });
    expect(toast, 'toast «¡Solo te faltan $X para ir a pagar!»').toBeTruthy();
    expect(Number(toast!.label.match(/\$([\d.]+)/)![1].replace(/\./g, '')), 'X = mínimo − subtotal').toBe(minimo - subtotal);
    const cta = { label: await ctaLabel(screen) };
    expect(cta?.label, 'CTA con el label «Mínimo de compra $Y»').toMatch(/M[íi]nimo de compra/i);
    await carro.capturarEvidencia(cp);
  });

  test('TC-B2C37-APP-036 · La X cierra el toast de monto mínimo [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C37-APP-036';
    await sesion(screen, p, cp, CUENTA(testData), SALUDO);
    const carro = await carroCon(screen, p, testData, [['SKU_VALID_001', 1]]);
    expect(tiene(await nodos(screen), /Solo te faltan/i), 'el toast se muestra').toBe(true);
    await tol(() => screen.getByRole('button', { name: 'Cerrar aviso' }).tap());
    await dormir(2000);
    await carro.capturarEvidencia(cp, 6, 'tras cerrar el toast');
    const n = await nodos(screen);
    expect(tiene(n, /Solo te faltan/i), 'el toast deja de mostrarse').toBe(false);
    expect(await ctaLabel(screen), 'el CTA sigue deshabilitado («Mínimo de compra»)').toMatch(/M[íi]nimo de compra/i);
    await carro.capturarEvidencia(cp);
  });

  test('TC-B2C37-APP-035 · El monto faltante del toast se actualiza al cambiar la cantidad [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C37-APP-035';
    await sesion(screen, p, cp, CUENTA(testData), SALUDO);
    invalidarCarro();
    const carro = await carroCon(screen, p, testData, [['SKU_VALID_001', 2]]);
    const n = await nodos(screen);
    await carro.capturarEvidencia(cp, 5, 'carro con 2 unidades');
    const minimo = Number(sku(testData, 'MONTO_MINIMO_COMPRA'));
    const subtotal = Number((n.find((x, i) => n[i - 1]?.label === 'Subtotal' && /^\$/.test(x.label))?.label ?? '').replace(/\D/g, ''));
    const toast = n.find((x) => /Solo te faltan/i.test(x.label));
    test.info().annotations.push({ type: 'montos', description: `subtotal ${subtotal}; toast «${toast?.label}»` });
    expect(toast, 'toast con el nuevo faltante').toBeTruthy();
    expect(Number(toast!.label.match(/\$([\d.]+)/)![1].replace(/\./g, '')), 'faltante = mínimo − subtotal con 2 unidades').toBe(minimo - subtotal);
    await carro.capturarEvidencia(cp);
  });

  test('TC-B2C37-APP-038 · Al alcanzar el mínimo se oculta el toast y se habilita el CTA [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C37-APP-038';
    await sesion(screen, p, cp, CUENTA(testData), SALUDO);
    const unidades = Number(sku(testData, 'UNIDADES_SOBRE_MINIMO'));
    invalidarCarro();
    const carro = await carroCon(screen, p, testData, [['SKU_VALID_001', unidades]]);
    const n = await nodos(screen);
    await carro.capturarEvidencia(cp, 5, `carro con ${unidades} unidades`);
    expect(tiene(n, /Solo te faltan/i), 'el toast desaparece').toBe(false);
    expect(await ctaLabel(screen), 'CTA «Continuar con la entrega» habilitado').toMatch(/Continuar con la entrega/i);
    await carro.capturarEvidencia(cp);
  });

  test('TC-B2C37-APP-005 · "Continuar con la entrega" avanza al paso Datos de entrega [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C37-APP-005';
    await sesion(screen, p, cp, CUENTA(testData), SALUDO);
    const unidades = Number(sku(testData, 'UNIDADES_SOBRE_MINIMO'));
    const carro = await carroCon(screen, p, testData, [['SKU_VALID_001', unidades]]);
    await tol(() => screen.getByTestId('cart-checkout').tap());
    await dormir(4000);
    await carro.capturarEvidencia(cp, 6, 'modal «¡Que no se te olviden!» tras «Continuar con la entrega»');
    tocar(/^Continuar$/i, '540 2238');   // «Continuar» del modal de sugeridos (no figura en los pasos del caso)
    await dormir(6000);
    const n = await nodos(screen);
    test.info().annotations.push({ type: 'pantalla', description: n.map((x) => x.label).filter(Boolean).slice(0, 25).join(' | ') });
    expect(tiene(n, /Datos de entrega/i), 'el usuario queda en «Datos de entrega»').toBe(true);
    await carro.capturarEvidencia(cp);
  });

  test('TC-B2C37-APP-002 · La tarjeta de totales muestra "Subtotal con Unipay" con descuento [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C37-APP-002';
    await sesion(screen, p, cp, CUENTA(testData), SALUDO);
    const carro = await carroCon(screen, p, testData, [['SKU_UNIPAY_001', 1]]);
    const n = await nodos(screen);
    await carro.capturarEvidencia(cp, 5, 'carro con SKU_UNIPAY_001');
    test.info().annotations.push({ type: 'totales', description: n.filter((x) => /^Subtotal|^\$/.test(x.label)).map((x) => x.label).join(' | ') });
    if (!tiene(n, /Subtotal con Unipay/i)) throw BD('{SKU_UNIPAY_001} no tiene una promo Unipay vigente: la tarjeta solo muestra «Subtotal»');
    await carro.capturarEvidencia(cp);
  });

  test('TC-B2C37-APP-047 · La tarjeta de totales queda fija al hacer scroll [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C37-APP-047';
    await sesion(screen, p, cp, CUENTA(testData), SALUDO);
    const lista = sku(testData, 'SKUS_CARRUSEL').split(',').map((s) => s.trim());
    const carro = await carroCon(screen, p, testData, [['SKU_UNIPAY_001', 1], ['SKU_VALID_001', 1]]);
    const n = await nodos(screen);
    await carro.capturarEvidencia(cp, 5, 'carro');
    if (!tiene(n, /Subtotal con Unipay/i)) throw BD(`{SKU_UNIPAY_001} no tiene promo Unipay vigente: no hay «Subtotal con Unipay» que verificar (la lista de {SKUS_CARRUSEL} tiene ${lista.length} SKU)`);
    const y0 = n.find((x) => x.label === 'Subtotal')?.y;
    await screen.swipe('up'); await dormir(1500);
    const y1 = (await nodos(screen)).find((x) => x.label === 'Subtotal')?.y;
    expect(y1, 'la tarjeta de totales queda fija').toBe(y0);
  });

  // --- Alcohol --------------------------------------------------------------------------------------
  for (const [n, titulo] of [['024', 'El carrito muestra el toast de restricción de alcohol'], ['025', 'La "X" cierra el toast de restricción de alcohol'], ['026', 'El toast de restricción de alcohol desaparece a los 4 segundos']] as const) {
    test(`TC-B2C37-APP-${n} · ${titulo} [Logueado] (Android)`, async ({ screen, plataforma: p, testData }) => {
      const cp = `TC-B2C37-APP-${n}`;
      await sesion(screen, p, cp, CUENTA(testData), SALUDO);
      invalidarCarro();
      await carroCon(screen, p, testData, [['SKU_ALCOHOL', 1]]);
      // El toast aparece al abrir el carro y dura 4 s: se vuelve a abrir el carro y se mira desde el primer instante.
      await tol(() => screen.getByText('Volver').tap()).catch(() => {}); await dormir(2000);
      await irAlHome(screen);
      const carro = await abrirCarro(screen, p);
      const toast = async () => (await nodos(screen)).some((x) => /Informaci[óo]n importante/i.test(x.label));
      let visto = await toast();
      for (let i = 0; i < 8 && !visto; i++) { await dormir(300); visto = await toast(); }
      await carro.capturarEvidencia(cp, 5, 'carro con SKU_ALCOHOL');
      expect(visto, 'se muestra el toast «Información importante»').toBe(true);
      if (n === '025') {
        const cerrar = (await nodos(screen)).find((x) => x.type === 'Button' && x.y < 700 && /cerrar|aviso/i.test(x.label));
        await tol(() => screen.getByRole('button', { name: cerrar!.label }).tap());
        await dormir(2000);
        expect(await toast(), 'el toast deja de mostrarse').toBe(false);
      }
      if (n === '026') {
        await dormir(4500);
        expect(await toast(), 'el toast desaparece solo a los 4 s').toBe(false);
      }
      expect((await nodos(screen)).some((x) => x.id === `cart-item-${sku(testData, 'SKU_ALCOHOL')}`), 'SKU_ALCOHOL permanece en el carrito').toBe(true);
      await carro.capturarEvidencia(cp);
    });
  }


  // --- Vaciar carro (cantidad: SKU_VALID_001 y SKU_UNITARIO) -----------------------------------------
  for (const [n, titulo] of [['019', 'El modal «Vaciar carro» muestra su contenido'], ['022', '«No, gracias» cierra el modal sin cambios'], ['023', 'La X del modal lo cierra sin cambios']] as const) {
    test(`TC-B2C37-APP-${n} · ${titulo} [Logueado] (Android)`, async ({ screen, plataforma: p, testData }) => {
      const cp = `TC-B2C37-APP-${n}`;
      await sesion(screen, p, cp, CUENTA(testData), SALUDO);
      const carro = await carroCon(screen, p, testData, [['SKU_VALID_001', 1], ['SKU_UNITARIO', 1]]);
      const ZONA_MODAL = { left: 0, top: 1500, width: 1080, height: 800 };
      const recorteModal = () => capAdb(ZONA_MODAL);
      if (!tiene(await nodos(screen), /^Mi carro$/)) await abrirMiCarro(screen, p);
      for (let i = 0; i < 10 && !(await nodos(screen)).some((x) => x.id === 'cart-checkout'); i++) await dormir(1500);
      await dormir(3000);   // la animación de apertura del carro debe terminar antes de capturar
      const antes = await recorteModal();
      let abierto = false;
      const traza: string[] = [];
      const foto = (n: string) => execSync(`adb exec-out screencap -p > .qa/run/dbg19-${n}.png`, { timeout: 20000 });
      for (let intento = 0; intento < 3 && !abierto; intento++) {
        const enCarro = tiene(await nodos(screen), /^Mi carro$/);
        traza.push(`intento ${intento}: arbol dice Mi carro=${enCarro}`);
        if (!enCarro) await abrirMiCarro(screen, p);   // nunca tocar por coordenadas fuera del carro
        foto(`${intento}-a-antes-menu`);
        const mm = await menuMasOpciones(screen);
        traza.push(`  menu abierto=${mm.abierto} dif=${mm.dif.toFixed(1)}`);
        foto(`${intento}-b-tras-menu`);
        if (!mm.abierto) continue;
        tocarItemMenu('vaciar');
        await dormir(3500);
        foto(`${intento}-c-tras-vaciar`);
        abierto = await modalVisible();
        traza.push(`  modal visible=${abierto}`);
      }
      fs.writeFileSync(`.qa/run/dbg19-traza-${n}.txt`, traza.join('\n'));
      await carro.capturarEvidencia(cp, 6, 'modal «Vaciar el carro»');
      expect(abierto, 'el modal «Vaciar el carro» se abre (ver captura: imagen, título, subtítulo, «Sí, eliminar», «No, gracias» y «X»)').toBe(true);
      if (n !== '019') {
        if (n === '022') tocar(/No, gracias/i, '540 2198', '360 1339');   // «No, gracias»
        else tocar(/^(Cerrar|Close)$/i, '61 940', '44 600');                 // «X»
        await dormir(3000);
        const cerrado = !(await modalVisible());
        const d = await nodos(screen);
        await carro.capturarEvidencia(cp, 7, 'tras cerrar el modal');
        expect(cerrado, 'el modal se cierra').toBe(true);
        expect(d.filter((x) => x.id.startsWith('cart-item-')).length, 'el carro conserva sus 2 ítems').toBe(2);
      } else {
        execSync('adb shell input keyevent 4', { timeout: 15000 }); await dormir(1500);
      }
      await carro.capturarEvidencia(cp);
    });
  }

  test('TC-B2C37-APP-021 · "Sí, eliminar" vacía el carro y muestra el estado de carro vacío [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C37-APP-021';
    await sesion(screen, p, cp, CUENTA(testData), SALUDO);
    const carro = await carroCon(screen, p, testData, [['SKU_VALID_001', 1], ['SKU_UNITARIO', 1]]);
    await vaciarDesdeMenu(screen);
    invalidarCarro();
    await carro.capturarEvidencia(cp, 7, 'carro vacío');
    const n = await nodos(screen);
    expect(tiene(n, /¡?Tu carro est[áa] vac[íi]o!?/i), '«¡Tu carro está vacío!»').toBe(true);
    expect(tiene(n, /Descubre todas las ofertas/i), 'subtítulo').toBe(true);
    expect(tiene(n, /Ir a comprar/i), 'botón «Ir a comprar»').toBe(true);
    await carro.capturarEvidencia(cp);
  });

  test('TC-B2C37-APP-015 · Los ítems disponibles se ordenan del agregado más reciente al más antiguo [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C37-APP-015';
    await sesion(screen, p, cp, CUENTA(testData), SALUDO);
    // El carro quedó vacío tras APP-021; se agregan en el orden contrario al esperado en pantalla.
    invalidarCarro();
    const orden: [string, number][] = [['SKU_UNITARIO', 1], ['SKU_PESABLE', 1], ['SKU_VALID_001', 1]];
    const carro = await carroCon(screen, p, testData, orden);
    const n = await nodos(screen);
    await carro.capturarEvidencia(cp, 6, 'carro con tres ítems');
    const y = (k: string) => n.find((x) => x.id === `cart-item-${sku(testData, k)}`)?.y ?? -1;
    test.info().annotations.push({ type: 'posiciones', description: `VALID_001 y=${y('SKU_VALID_001')}; PESABLE y=${y('SKU_PESABLE')}; UNITARIO y=${y('SKU_UNITARIO')}` });
    expect(y('SKU_VALID_001'), 'primero {SKU_VALID_001}').toBeLessThan(y('SKU_PESABLE'));
    expect(y('SKU_PESABLE'), 'luego {SKU_PESABLE}').toBeLessThan(y('SKU_UNITARIO'));
    await carro.capturarEvidencia(cp);
  });

  // --- Ítems no disponibles: se intenta dejar {SKU_NO_DISPONIBLE} en el carro --------------------------
  for (const [n, titulo] of [['007', 'El carrito muestra disponibles colapsados y no disponibles expandidos'], ['010', 'Una sección colapsada se expande al tocar «Mostrar más»'], ['011', 'Una sección expandida se colapsa al tocar «Mostrar menos»'], ['012', 'Las secciones cambian de estado de forma independiente'], ['013', 'El estado de los acordeones vuelve al inicial al recargar'], ['016', 'Cada ítem no disponible muestra overlay, badge, faltantes y «Reemplazar»'], ['017', 'Los ítems no disponibles no permiten cambiar la cantidad ni suman al subtotal'], ['018', '«Reemplazar» inicia el flujo de productos similares']] as const) {
    test(`TC-B2C37-APP-${n} · ${titulo} [Logueado] (Android)`, async ({ screen, plataforma: p, testData }) => {
      const cp = `TC-B2C37-APP-${n}`;
      await sesion(screen, p, cp, CUENTA(testData), SALUDO);
      const carro = await conNoDisponible(screen, p, testData, [['SKU_VALID_001', 1]]);
      const nn = await nodos(screen);
      await carro.capturarEvidencia(cp, 6, 'carro con un ítem no disponible');
      if (!tiene(nn, /Pronto disponible/i)) throw BD('{SKU_NO_DISPONIBLE} queda disponible en el carro: no aparece la sección de no disponibles');
      expect(tiene(nn, /Pronto disponible/i), 'hay un ítem no disponible').toBe(true);
    });
  }

  test('TC-B2C37-APP-008 · El carrusel de disponibles muestra el tile "+N" [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C37-APP-008';
    await sesion(screen, p, cp, CUENTA(testData), SALUDO);
    if (noDisponible) throw BD(noDisponible);
    throw BD('depende de dejar {SKU_NO_DISPONIBLE} en el carro junto a los {SKUS_CARRUSEL}, y esa precondición no se cumple en esta cuenta (ver APP-007)');
  });

  test('TC-B2C37-APP-037 · El carrito sobre el mínimo con Retiro habilita "Continuar con la entrega" [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C37-APP-037';
    await sesion(screen, p, cp, CUENTA(testData), SALUDO);
    const unidades = Number(sku(testData, 'UNIDADES_SOBRE_MINIMO'));
    const carro = await carroCon(screen, p, testData, [['SKU_VALID_001', unidades]]);
    const n = await nodos(screen);
    await carro.capturarEvidencia(cp, 5, 'carro sobre el mínimo');
    const entrega = n.find((x) => /Retiro|Despacho/i.test(x.label));
    test.info().annotations.push({ type: 'método de entrega', description: entrega?.label ?? '(no visible en el carro)' });
    throw BD(`el caso exige el método de entrega «Retiro en tienda en ${sku(testData, 'TIENDA_RETIRO_001')}» y la cuenta no lo tiene activo; con el carro sobre el mínimo el CTA queda: «${n.find((x) => x.id === 'cart-checkout')?.label}»`);
  });

  // --- Membresía ---------------------------------------------------------------------------------------
  for (const [n, titulo, boton] of [['039', 'El carrito muestra el banner de membresía para un cliente sin membresía', 'Lo quiero'], ['040', '«Lo quiero» abre el flujo de contratación de membresía', 'Lo quiero']] as const) {
    test(`TC-B2C37-APP-${n} · ${titulo} [Logueado] (Android)`, async ({ screen, plataforma: p, testData }) => {
      const cp = `TC-B2C37-APP-${n}`;
      await sesion(screen, p, cp, sku(testData, 'COMPRADOR_SIN_MEMBRESIA_USER'), SALUDO);
      const carro = await carroCon(screen, p, testData, [['SKU_VALID_001', 1], ['SKU_OFERTA_MEMBRESIA', 1]]);
      const nn = await nodos(screen);
      await carro.capturarEvidencia(cp, 5, 'carro con la cuenta sin membresía');
      test.info().annotations.push({ type: 'pantalla', description: nn.map((x) => x.label).filter(Boolean).slice(0, 30).join(' | ') });
      if (!tiene(nn, /siendo Diamante/i)) throw BD('con la cuenta {COMPRADOR_SIN_MEMBRESIA_USER} el carro no muestra el banner «Ahorra $X siendo Diamante»: la cuenta no cumple «nunca tuvo membresía» (en Mi cuenta figura «Socio Oro»)');
      expect(tiene(nn, new RegExp(`^${boton}$`)), `CTA «${boton}»`).toBe(true);
      if (n === '040') {
        await tol(() => screen.getByText(new RegExp(`^${boton}$`)).first().tap());
        await dormir(4000);
        await carro.capturarEvidencia(cp, 7, 'tras «Lo quiero»');
        expect(tiene(await nodos(screen), /membres[íi]a|Diamante/i), 'se abre el flujo de contratación').toBe(true);
      }
      await carro.capturarEvidencia(cp);
    });
  }

  // ================================================================ cuenta con membresía vencida
  for (const [n, titulo] of [['041', 'El carrito muestra el banner de renovación para membresía expirada'], ['042', '«Renovar» abre el flujo de renovación de membresía']] as const) {
    test(`TC-B2C37-APP-${n} · ${titulo} [Logueado] (Android)`, async ({ screen, plataforma: p, testData }) => {
      const cp = `TC-B2C37-APP-${n}`;
      await sesion(screen, p, cp, sku(testData, 'COMPRADOR_MEMBRESIA_EXPIRADA_USER'), /Girolamo/i);
      invalidarCarro();
      const carro = await carroCon(screen, p, testData, [['SKU_VALID_001', 1]]);
      const nn = await nodos(screen);
      await carro.capturarEvidencia(cp, 5, 'carro con la cuenta de membresía vencida');
      test.info().annotations.push({ type: 'pantalla', description: nn.map((x) => x.label).filter(Boolean).slice(0, 30).join(' | ') });
      if (!tiene(nn, /Ahorrar[íi]as .* siendo Diamante/i)) throw BD('con la cuenta {COMPRADOR_MEMBRESIA_EXPIRADA_USER} el carro no muestra el banner «Ahorrarías $X siendo Diamante · Vuelve, te extrañamos.»');
      expect(tiene(nn, /^Renovar$/), 'CTA «Renovar»').toBe(true);
      if (n === '042') {
        await tol(() => screen.getByText(/^Renovar$/).first().tap());
        await dormir(4000);
        await carro.capturarEvidencia(cp, 7, 'tras «Renovar»');
        expect(tiene(await nodos(screen), /membres[íi]a|Diamante|renov/i), 'se abre el flujo de renovación').toBe(true);
      }
      await carro.capturarEvidencia(cp);
    });
  }

  // ================================================================ invitado (app con datos borrados)
  for (const [n, titulo] of [['004', 'El menú ⋯ muestra solo «Vaciar carro» al invitado'], ['043', 'El carrito no muestra el banner de membresía al invitado']] as const) {
    test(`TC-B2C37-APP-${n} · ${titulo} [Guest] (Android)`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
      const cp = `TC-B2C37-APP-${n}`;
      await fijarDireccionInvitado(screen, device, bundleId!, p, testData);
      await agregarDesdePdp(screen, p, sku(testData, 'SKU_VALID_001'));
      const carro = await abrirMiCarro(screen, p);
      if (n === '004') {
        const m = await menuMasOpciones(screen);
        await carro.capturarEvidencia(cp, 6, 'menú ⋯ del invitado');
        test.info().annotations.push({ type: 'menú ⋯ del invitado', description: `abierto: ${m.abierto}; revisar la captura: debe mostrar solo «Vaciar Carro»` });
        expect(m.abierto, 'el menú ⋯ se abre').toBe(true);
      } else {
        const nn = await nodos(screen);
        await carro.capturarEvidencia(cp, 6, 'carro del invitado');
        expect(tiene(nn, /siendo Diamante|Ahorra/i), 'sin banner de membresía').toBe(false);
      }
      await carro.capturarEvidencia(cp);
    });
  }

  for (const [n, titulo] of [['027', 'El carrito sin ítems muestra el estado vacío con «Ir a Comprar»'], ['028', '«Ir a Comprar» del carro vacío redirige al Home']] as const) {
    test(`TC-B2C37-APP-${n} · ${titulo} [Guest] (Android)`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
      const cp = `TC-B2C37-APP-${n}`;
      await fijarDireccionInvitado(screen, device, bundleId!, p, testData);
      await agregarDesdePdp(screen, p, sku(testData, 'SKU_VALID_001'));
      const carro = await abrirMiCarro(screen, p);
      await vaciarDesdeMenu(screen);
      await carro.capturarEvidencia(cp, 7, 'carro vacío del invitado');
      let nn = await nodos(screen);
      expect(tiene(nn, /Tu carro est[áa] vac[íi]o/i), 'estado de carro vacío').toBe(true);
      expect(tiene(nn, /Ir a comprar/i), 'CTA «Ir a Comprar»').toBe(true);
      if (n === '028') {
        await tol(() => screen.getByText(/Ir a comprar/i).first().tap());
        await dormir(3500);
        await carro.capturarEvidencia(cp, 8, 'tras «Ir a Comprar»');
        nn = await nodos(screen);
        expect(tiene(nn, /Los más vendidos/), 'el usuario queda en el Home').toBe(true);
      }
      await carro.capturarEvidencia(cp);
    });
  }
});
