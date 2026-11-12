import { execSync } from 'child_process';
import sharp from 'sharp';
import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import type { Plataforma } from '../tests/support/rutasEvidencia';
import { HomeScreen } from './pages/HomeScreen';
import { TabBar } from './pages/TabBar';
import { PdpScreen } from './pages/PdpScreen';
import { tolerante } from './support/tolerante';
import { sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/**
 * B2C-75 — Carrusel de productos (T1/T2/T3) en el Home de la app. Solo Android (emulador), v1.0.1.
 *
 * Las filas dicen "Viewport: App iOS/Android" sin "Plataforma:"; se certifica Android e iOS queda
 * Pendiente. La configuración de Page Designer (leída del Home web el 2026-11-11) fija qué instancia
 * usa cada caso:
 *
 * - «Frescura y calidad» (hp-pc-frescura): T1, título a la izquierda, texto «Frutas y verduras»,
 *   etiqueta «OFERTA», enlace del banner /category/frutas-y-verduras_frutas, fondo #FFFFFF.
 * - «Los más vendidos» (hp-pc-masvendidos): T2 («Pretítulo + slider productos»), título centrado,
 *   modo Colección (carnes, máximo 12), autoplay cada 3 s.
 *
 * Sin `test()`: 004 (la única T2 tiene el título configurado centrado), 006 (no hay T3 publicada),
 * 012 ({SKU_SIN_STOCK} no está en ningún carrusel), 013 ({CATEGORY_N1_WO_PRODS} sí tiene productos),
 * 014 (no hay imagen inválida) y 016 ({MAX_PRODUCTOS_CARRUSEL} sin fila) → Bloqueado Data.
 */

const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const SALUDO = /Karl/i;
const T1 = /^Frescura y calidad$/;
const T2 = /^Los m[aá]s vendidos$/;
const swipe = (x1: number, y1: number, x2: number, y2: number, ms = 400) =>
  execSync(`adb shell input swipe ${x1} ${y1} ${x2} ${y2} ${ms}`, { timeout: 20000 });
const tap = (x: number, y: number) => execSync(`adb shell input tap ${Math.round(x)} ${Math.round(y)}`, { timeout: 15000 });

interface Nodo { label: string; type: string; x: number; y: number; w: number; h: number; id: string }
async function nodos(screen: Screen): Promise<Nodo[]> {
  const out: Nodo[] = [];
  const rec = (n: any) => {
    const r = n.rect ?? n.bounds;
    const label = String(n.label ?? n.text ?? '');
    const id = String(n.identifier ?? n.resourceId ?? '');
    if (r && (label || id) && !id.startsWith('com.android.systemui')) out.push({ label, type: String(n.type ?? '').split('.').pop()!, x: r.x, y: r.y, w: r.width, h: r.height, id });
    for (const c of n.children ?? []) rec(c);
  };
  for (const n of await tol(() => screen.viewTree())) rec(n);
  return out;
}

/** Sesión, Home arriba del todo y el título del carrusel pedido bajo el NavBar (y entre 330 y 800). */
async function homeEnCarrusel(screen: Screen, p: Plataforma, td: any, cp: string, titulo: RegExp): Promise<HomeScreen> {
  await asegurarApp(screen);
  await sesion(screen, p, cp, token(td, 'USER_AUTH_001')!.split(' / ')[0].trim(), SALUDO);
  await tol(() => screen.getByTestId('tab-Home').tap());
  await dormir(4000);
  for (let i = 0; i < 10; i++) { swipe(540, 700, 540, 1900, 200); await dormir(300); }
  await dormir(2000);
  const home = new HomeScreen(screen, p);
  await home.capturarEvidencia(cp, 2, 'Home de la App');
  for (let i = 0; i < 30; i++) {
    // El volcado del Home a veces vuelve vacío (la página no queda inactiva): se reintenta antes de desplazar.
    let n = await nodos(screen);
    if (n.length < 15) { await dormir(2000); n = await nodos(screen); }
    const t = n.find((x) => x.type === 'TextView' && titulo.test(x.label));
    if (t && t.y >= 330 && t.y <= 950) return home;
    if (t && t.y < 330) swipe(540, 900, 540, 1250, 1500);
    else if (t) swipe(540, 1600, 540, Math.max(200, 1600 - (t.y - 500)), 1500);
    else swipe(540, 1700, 540, 900, 600);
    await dormir(1000);
  }
  throw new Error(`El Home no muestra el carrusel «${titulo.source}»`);
}

/** Tarjetas de producto de la fila que sigue a `ancla` (título o banner), en orden de x. */
function fila(n: Nodo[], ancla: Nodo, alto = 700): Nodo[] {
  return n.filter((x) => /^product-\d/.test(x.id) && x.y > ancla.y && x.y < ancla.y + alto).sort((a, b) => a.x - b.x);
}
const sku = (t: Nodo) => t.id.replace(/^product-/, '');
const enteras = (ts: Nodo[]) => ts.filter((t) => t.x >= 0 && t.w > 400 && t.x + t.w <= 1082);

/** Partes del T1: título, texto, banner y la fila de productos. */
async function partesT1(screen: Screen) {
  const n = await nodos(screen);
  const titulo = n.find((x) => x.type === 'TextView' && T1.test(x.label))!;
  const texto = n.find((x) => x.type === 'TextView' && x.label === 'Frutas y verduras' && x.y > titulo.y);
  const banner = n.find((x) => x.type === 'ViewGroup' && /^Mecadito Unimarc/.test(x.label) && x.y > titulo.y);
  const etiqueta = banner && n.find((x) => x.type === 'TextView' && x.label === 'OFERTA' && x.y >= banner.y && x.y < banner.y + banner.h);
  const productos = banner ? fila(n, { ...banner, y: banner.y + banner.h - 10 }, 400) : [];
  return { n, titulo, texto, banner, etiqueta, productos };
}

/** La fila de productos del T2 y su «Mostrar todo» de cabecera. */
async function partesT2(screen: Screen) {
  const n = await nodos(screen);
  const titulo = n.find((x) => x.type === 'TextView' && T2.test(x.label))!;
  const mostrar = n.find((x) => x.type === 'Button' && x.label === 'Mostrar todo' && x.y > titulo.y && x.y < titulo.y + 150);
  const productos = fila(n, titulo, 250);
  return { n, titulo, mostrar, productos };
}

async function deslizarFila(y: number): Promise<void> {
  swipe(950, y, 150, y, 400);
  await dormir(1500);
}

/** Título del listado al que se llegó: el TextView a la izquierda de «N productos». */
async function tituloListado(screen: Screen): Promise<{ titulo: string; total: string } | null> {
  for (let i = 0; i < 20; i++) {
    const n = await nodos(screen).catch(() => [] as Nodo[]);
    const total = n.find((x) => x.type === 'TextView' && /^\d+ productos?$/.test(x.label));
    if (total) {
      const t = n.filter((x) => x.type === 'TextView' && Math.abs(x.y + x.h / 2 - (total.y + total.h / 2)) < 40 && x.x < total.x).sort((a, b) => b.x - a.x)[0];
      return { titulo: t?.label ?? '', total: total.label };
    }
    // Una landing de N1 (p. ej. Carnes) no muestra «N productos»: su título va bajo el buscador.
    const landing = n.find((x) => x.type === 'TextView' && x.y > 240 && x.y < 360 && x.x < 120 && x.w > 400);
    if (landing && n.some((x) => x.label === 'Volver')) return { titulo: landing.label, total: 'landing' };
    await dormir(1500);
  }
  return null;
}

async function unidadesEnCarro(screen: Screen, p: Plataforma): Promise<number> {
  const tabs = new TabBar(screen, p);
  if (!(await tabs.floatingPill.isVisible().catch(() => false))) return 0;
  return (await tabs.unidadesEnElPill().catch(() => null)) ?? 0;
}

test.describe.configure({ timeout: 900000 });
test.describe('B2C-75 — Carrusel de productos (Android)', () => {
  test('TC-B2C75-APP-001 · T1 muestra titulo, texto y banner arriba y el carrusel debajo con 2 productos [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C75-APP-001';
    const home = await homeEnCarrusel(screen, p, testData, cp, T1);
    const { titulo, texto, banner, productos } = await partesT1(screen);
    await home.capturarEvidencia(cp, 3, 'carrusel T1 Frescura y calidad');
    const visibles = enteras(productos);
    test.info().annotations.push({ type: 'T1', description: `título y=${titulo.y}; texto y=${texto?.y}; banner y=${banner?.y} alto ${banner?.h}; productos y=${productos[0]?.y}; enteros ${visibles.length} (${visibles.map(sku).join(',')})` });
    expect(texto, 'el T1 muestra el texto configurado').toBeTruthy();
    expect(banner, 'el T1 muestra el banner').toBeTruthy();
    expect(banner!.y, 'el banner va debajo del título y el texto').toBeGreaterThan(texto!.y);
    expect(productos.length, 'el carrusel de productos va debajo del banner').toBeGreaterThan(0);
    expect(productos[0].y, 'los productos empiezan bajo el banner').toBeGreaterThanOrEqual(banner!.y + banner!.h - 10);
    expect(visibles.length, 'el carrusel muestra 2 productos por slide').toBe(2);
    await home.capturarEvidencia(cp);
  });

  test('TC-B2C75-APP-002 · La etiqueta del T1 aparece como tag sobre el banner [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C75-APP-002';
    const home = await homeEnCarrusel(screen, p, testData, cp, T1);
    const { banner, etiqueta } = await partesT1(screen);
    await home.capturarEvidencia(cp, 3, 'banner del T1 con la etiqueta');
    test.info().annotations.push({ type: 'etiqueta', description: `banner ${banner?.x},${banner?.y} ${banner?.w}x${banner?.h}; etiqueta «${etiqueta?.label}» en ${etiqueta?.x},${etiqueta?.y}` });
    expect(etiqueta?.label, 'la etiqueta «OFERTA» aparece sobre el banner').toBe('OFERTA');
    await home.capturarEvidencia(cp);
  });

  test('TC-B2C75-APP-003 · Tocar el banner del T1 navega al enlace configurado [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C75-APP-003';
    const home = await homeEnCarrusel(screen, p, testData, cp, T1);
    const { banner } = await partesT1(screen);
    expect(banner, 'el T1 muestra el banner').toBeTruthy();
    await home.capturarEvidencia(cp, 3, 'banner del T1');
    tap(banner!.x + banner!.w / 2, banner!.y + Math.min(banner!.h, 300) / 2);
    await dormir(6000);
    const destino = await tituloListado(screen);
    await home.capturarEvidencia(cp, 4, `destino del banner: ${destino?.titulo ?? 'sin listado'}`);
    test.info().annotations.push({ type: 'destino', description: `enlace configurado /category/frutas-y-verduras_frutas; se abrió «${destino?.titulo}» (${destino?.total})` });
    expect(destino?.titulo, 'se abre la PLP del enlace del banner (Frutas y verduras > Frutas)').toMatch(/^Frutas$/i);
    await home.capturarEvidencia(cp);
  });

  test('TC-B2C75-APP-005 · T2 en modo Coleccion muestra "Ver todo" al final del carrusel [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C75-APP-005';
    const home = await homeEnCarrusel(screen, p, testData, cp, T2);
    const { productos } = await partesT2(screen);
    const y = productos[0].y + 400;
    const vistos: string[] = [];
    let sinNuevos = 0;
    for (let i = 0; i < 12 && sinNuevos < 2; i++) {
      const antes = vistos.length;
      for (const t of (await partesT2(screen)).productos) if (!vistos.includes(sku(t))) vistos.push(sku(t));
      sinNuevos = vistos.length === antes ? sinNuevos + 1 : 0;
      await deslizarFila(y);
    }
    const n = await nodos(screen);
    const verTodo = n.find((x) => /^Ver todo$/i.test(x.label) && x.y > productos[0].y - 20 && x.y < productos[0].y + productos[0].h);
    await home.capturarEvidencia(cp, 3, 'final del carrusel T2');
    test.info().annotations.push({ type: 'final', description: `productos recorridos ${vistos.length}; «Ver todo» al final: ${verTodo ? 'sí' : 'no'}; textos en la fila: ${[...new Set(n.filter((x) => x.y > productos[0].y - 20 && x.y < productos[0].y + productos[0].h && /todo/i.test(x.label)).map((x) => x.label))].join(' | ') || '-'}` });
    expect(verTodo, 'al final del carrusel se muestra el enlace «Ver todo»').toBeTruthy();
    await home.capturarEvidencia(cp);
  });

  test('TC-B2C75-APP-007 · El carrusel se desplaza al deslizar con el dedo [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C75-APP-007';
    const home = await homeEnCarrusel(screen, p, testData, cp, T2);
    const inicial = await partesT2(screen);
    expect(inicial.productos.length, 'el carrusel muestra productos').toBeGreaterThan(0);
    const antes = enteras(inicial.productos).map(sku);
    await home.capturarEvidencia(cp, 2, 'carrusel antes de deslizar');
    await deslizarFila(inicial.productos[0].y + 400);
    const despues = enteras((await partesT2(screen)).productos).map(sku);
    await home.capturarEvidencia(cp, 4, 'carrusel tras deslizar');
    const nuevos = despues.filter((s) => !antes.includes(s));
    test.info().annotations.push({ type: 'swipe', description: `antes ${antes.join(',')}; después ${despues.join(',')}` });
    expect(nuevos.length, 'el carrusel muestra productos siguientes').toBeGreaterThan(0);
    await home.capturarEvidencia(cp);
  });

  test('TC-B2C75-APP-008 · El carrusel avanza automaticamente cada 3 segundos [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C75-APP-008';
    const home = await homeEnCarrusel(screen, p, testData, cp, T2);
    const { productos } = await partesT2(screen);
    const zona = { left: 0, top: productos[0].y, width: 1080, height: 450 };
    const recorte = async () => sharp(execSync('adb exec-out screencap -p', { timeout: 20000, maxBuffer: 50 * 1024 * 1024 })).extract(zona).raw().toBuffer();
    const base = await recorte();
    await home.capturarEvidencia(cp, 3, 'carrusel al empezar a observar');
    const cambios: number[] = [];
    for (let s = 1; s <= 7; s++) {
      await dormir(1000);
      const c = await recorte();
      let d = 0;
      for (let i = 0; i < base.length; i += 4) if (Math.abs(base[i] - c[i]) > 30) d++;
      cambios.push(d);
    }
    await home.capturarEvidencia(cp, 4, 'carrusel tras 7 s sin tocarlo');
    test.info().annotations.push({ type: 'autoplay', description: `píxeles distintos respecto del inicio, segundo a segundo: ${cambios.join(', ')}` });
    expect(Math.max(...cambios), 'el carrusel avanza solo sin interacción (autoplay de 3 s configurado)').toBeGreaterThan(5000);
    await home.capturarEvidencia(cp);
  });

  test('TC-B2C75-APP-009 · "Mostrar todo" lleva al destino configurado [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C75-APP-009';
    const home = await homeEnCarrusel(screen, p, testData, cp, T2);
    const { mostrar } = await partesT2(screen);
    expect(mostrar, 'el carrusel en modo Colección muestra «Mostrar todo»').toBeTruthy();
    await home.capturarEvidencia(cp, 3, 'Mostrar todo del carrusel');
    tap(mostrar!.x + mostrar!.w / 2, mostrar!.y + mostrar!.h / 2);
    await dormir(6000);
    const destino = await tituloListado(screen);
    await home.capturarEvidencia(cp, 4, `destino de Mostrar todo: ${destino?.titulo ?? 'sin listado'}`);
    test.info().annotations.push({ type: 'destino', description: `colección configurada «carnes»; se abrió «${destino?.titulo}» (${destino?.total})` });
    expect(destino?.titulo, 'se abre la PLP de la colección configurada (Carnes)').toMatch(/^Carnes$/i);
    await home.capturarEvidencia(cp);
  });

  test('TC-B2C75-APP-010 · Tocar el nombre de un producto abre su PDP [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C75-APP-010';
    const home = await homeEnCarrusel(screen, p, testData, cp, T2);
    const { n, productos } = await partesT2(screen);
    const t = enteras(productos)[0];
    const nombre = n.filter((x) => x.type === 'TextView' && x.x >= t.x && x.x < t.x + t.w && x.y > t.y && / \| |\w{4,} \w{3,}/.test(x.label) && !/^\$/.test(x.label)).sort((a, b) => a.y - b.y)[0];
    expect(nombre, 'la tarjeta muestra el nombre del producto').toBeTruthy();
    await home.capturarEvidencia(cp, 3, `producto ${nombre!.label}`);
    tap(nombre!.x + nombre!.w / 2, nombre!.y + nombre!.h / 2);
    await dormir(6000);
    const pdp = new PdpScreen(screen, p);
    const abierta = await pdp.readyLocator.isVisible({ timeout: 20000 }).catch(() => false);
    const textos = (await nodos(screen)).map((x) => x.label);
    const base = nombre!.label.split(' | ').pop()!.replace(/…$/, '').slice(0, 20);
    await pdp.capturarEvidencia(cp, 4, 'PDP del producto');
    test.info().annotations.push({ type: 'pdp', description: `tocado «${nombre!.label}» (${sku(t)}); PDP abierta ${abierta}` });
    expect(abierta, 'se abre la PDP').toBe(true);
    expect(textos.some((x) => x.includes(base)), 'la PDP es la del producto tocado').toBe(true);
    await pdp.capturarEvidencia(cp);
  });

  test('TC-B2C75-APP-011 · Agregar un producto con stock desde el carrusel actualiza el indicador del carro [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C75-APP-011';
    const home = await homeEnCarrusel(screen, p, testData, cp, T2);
    const { n, productos } = await partesT2(screen);
    const t = enteras(productos).find((x) => n.some((y) => y.id === `product-add-${sku(x)}`));
    expect(t, 'el carrusel tiene un producto con «Agregar» a la vista').toBeTruthy();
    const antes = await unidadesEnCarro(screen, p);
    await home.capturarEvidencia(cp, 3, `carro con ${antes} unidades antes de agregar`);
    await home.botonAgregar(sku(t!)).tap();
    await dormir(5000);
    const despues = await unidadesEnCarro(screen, p);
    await home.capturarEvidencia(cp, 4, `carro con ${despues} unidades tras agregar`);
    test.info().annotations.push({ type: 'carro', description: `${sku(t!)}: ${antes} → ${despues}` });
    // Deja el carro como estaba (el ambiente es compartido).
    await home.botonQuitar(sku(t!)).tap().catch(() => undefined);
    await dormir(3000);
    expect(despues, 'el indicador del carro aumenta en 1').toBe(antes + 1);
    await home.capturarEvidencia(cp);
  });

  test('TC-B2C75-APP-015 · El fondo ocupa todo el ancho y el contenido respeta el padding del header [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C75-APP-015';
    const home = await homeEnCarrusel(screen, p, testData, cp, T1);
    const { n, titulo, banner, productos } = await partesT1(screen);
    const header = n.find((x) => x.id === 'navbar-membership');
    const png = await screen.screenshot();
    const { data, info } = await sharp(png).raw().toBuffer({ resolveWithObject: true });
    const px = (x: number, y: number) => { const i = (y * info.width + x) * info.channels; return [data[i], data[i + 1], data[i + 2]].join(','); };
    const fila = titulo.y + 20;
    const bordes = [px(1, fila), px(info.width - 2, fila)];
    const derecha = Math.max(...[titulo, banner!].map((x) => x.x + x.w));
    await home.capturarEvidencia(cp, 3, 'bordes del componente T1');
    test.info().annotations.push({ type: 'padding', description: `header x=${header?.x}; título x=${titulo.x}; banner x=${banner?.x}..${(banner?.x ?? 0) + (banner?.w ?? 0)}; primer producto x=${productos[0]?.x}; fondo en los bordes ${bordes.join(' / ')} (configurado #FFFFFF)` });
    expect(bordes, 'el fondo del componente (#FFFFFF) llega a ambos bordes de la pantalla').toEqual(['255,255,255', '255,255,255']);
    expect(Math.abs(titulo.x - (header?.x ?? 44)), 'el título se alinea con el padding del header').toBeLessThanOrEqual(2);
    expect(Math.abs(banner!.x - (header?.x ?? 44)), 'el banner se alinea con el padding del header').toBeLessThanOrEqual(2);
    expect(Math.abs(productos[0].x - (header?.x ?? 44)), 'el carrusel se alinea con el padding del header').toBeLessThanOrEqual(2);
    expect(Math.abs(1080 - derecha - (header?.x ?? 44)), 'el contenido deja el mismo padding a la derecha').toBeLessThanOrEqual(2);
    await home.capturarEvidencia(cp);
  });
});
