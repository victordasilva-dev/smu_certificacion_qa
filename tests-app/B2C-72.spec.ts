import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { TabBar } from './pages/TabBar';
import { HomeScreen } from './pages/HomeScreen';
import { esperarTabBar } from './support/invitadoConCarro';
import { tolerante } from './support/tolerante';

/**
 * B2C-72 — Carrusel + imagen circular con título en el Home (app nativa, Android, build v1.0.7).
 *
 * En DEV el componente se ve como «Categorías destacadas» (Orgánico, Comida en casa, Panadería…).
 * Quedan sin `test()`: 004–017, que piden cambiar su configuración en Page Designer ({BM_PD_PATH},
 * {BM_ADMIN_USER}), iniciar sesión con {USER_AUTH_001} (un correo: la app pide RUT) o tienen fechas y
 * grupos de clientes en TBD.
 */

const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const ANCHO = 1080;
const TITULO = 'Categorías destacadas';
const SIGUIENTE = /^cada d[ií]a, una ocasi[oó]n$/i;

type Nodo = { t: string; id: string; x: number; y: number; w: number; h: number };

async function nodos(screen: Screen): Promise<Nodo[]> {
  const out: Nodo[] = [];
  const walk = (n: any) => {
    const t = (n.label ?? n.text ?? n.value ?? '').toString().trim();
    const id = (n.identifier ?? n.resourceId ?? '').toString();
    const b = n.bounds ?? n.rect;
    if (t && b) out.push({ t, id, x: b.x, y: b.y, w: b.width, h: b.height });
    for (const c of n.children ?? []) walk(c);
  };
  for (const n of await tol(() => screen.viewTree())) walk(n);
  return out;
}

/** Los títulos de las imágenes circulares: los textos entre el título del componente y la sección siguiente. */
async function items(screen: Screen): Promise<Nodo[]> {
  const t = await nodos(screen);
  const i = t.findIndex((x) => x.t === TITULO);
  if (i < 0) return [];
  const resto = t.slice(i + 1);
  const j = resto.findIndex((x) => SIGUIENTE.test(x.t));
  const vistos = new Set<string>();
  // Cada círculo aparece dos veces en el árbol (texto y descripción): se cuenta una sola vez por título.
  return (j < 0 ? resto : resto.slice(0, j)).filter((x) => {
    if (x.h <= 0 || x.w <= 0 || x.w > 400 || /^mostrar todo$/i.test(x.t) || vistos.has(x.t)) return false;
    vistos.add(x.t);
    return true;
  });
}

/** El círculo más cercano al centro de la pantalla: deslizar desde un borde sale de la pantalla ("negative coordinates"). */
const masCentrado = (it: Nodo[]) => [...it].sort((a, b) => Math.abs(a.x + a.w / 2 - ANCHO / 2) - Math.abs(b.x + b.w / 2 - ANCHO / 2))[0];

/** Abre la app y baja el Home hasta dejar el componente en pantalla. */
async function irAlCarrusel(screen: Screen, device: any, bundleId: string, p: any): Promise<HomeScreen> {
  await device.terminateApp(bundleId);
  await device.launchApp(bundleId);
  await esperarTabBar(new TabBar(screen, p));
  await pausa(4000);
  const home = new HomeScreen(screen, p);
  for (let i = 0; i < 14; i++) {
    const t = await nodos(screen);
    const n = t.find((x) => x.t === TITULO);
    if (n && n.y > 400 && n.y < 1400) return home;
    await tol(() => screen.swipe('up'));
    await pausa(1200);
  }
  throw new Error(`no se encontró el componente «${TITULO}» en el Home`);
}

const enPantalla = (n: Nodo) => n.x >= 0 && n.x + n.w <= ANCHO;

test.describe('B2C-72 — Carrusel de imágenes circulares (Android)', () => {
  test.describe.configure({ timeout: 420000 });

  test('TC-B2C72-APP-001 · El carrusel muestra el título centrado e imágenes circulares con su título [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C72-APP-001';
    const home = await irAlCarrusel(screen, device, bundleId, p);
    await tol(() => home.capturarEvidencia(cp, 2, 'Home con el carrusel de imágenes circulares'));
    const t = await nodos(screen);
    const titulo = t.find((x) => x.t === TITULO)!;
    const it = await items(screen);
    const visibles = it.filter(enPantalla);
    test.info().annotations.push({ type: 'items', description: `${it.length} con título; ${visibles.length} completos en pantalla: ${it.map((x) => `${x.t}[x=${x.x},w=${x.w}]`).join(', ')}` });
    console.log('ITEMS_001', it.map((x) => `${x.t} x=${x.x} w=${x.w}`).join(' | '));
    expect(Math.abs(titulo.x + titulo.w / 2 - ANCHO / 2), 'el título está centrado').toBeLessThan(40);
    expect(it.length, 'hay imágenes circulares con título').toBeGreaterThanOrEqual(3);
    expect(visibles.length, 'hasta 3 imágenes visibles por slide').toBeLessThanOrEqual(3);
    await tol(() => home.capturarEvidencia(cp));
  });

  test('TC-B2C72-APP-002 · El carrusel de imágenes circulares se desliza horizontalmente [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C72-APP-002';
    const home = await irAlCarrusel(screen, device, bundleId, p);
    const antes = await items(screen);
    const primero = antes.find(enPantalla)!;
    const origen = masCentrado(antes.filter(enPantalla));
    await tol(() => home.capturarEvidencia(cp, 2, 'carrusel antes de deslizar'));
    await tol(() => screen.getByText(origen.t).first().swipe({ direction: 'left' }));
    await pausa(1500);
    const despues = await items(screen);
    await tol(() => home.capturarEvidencia(cp, 4, 'carrusel tras deslizar a la izquierda'));
    const nuevoPrimero = despues.find(enPantalla);
    test.info().annotations.push({ type: 'primer ítem completo', description: `${primero.t} → ${nuevoPrimero?.t}` });
    expect(nuevoPrimero?.t, 'el carrusel se desplazó y muestra las imágenes siguientes').not.toBe(primero.t);
    await tol(() => home.capturarEvidencia(cp));
  });

  test('TC-B2C72-APP-003 · Tocar una imagen circular abre la categoría configurada [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C72-APP-003';
    const home = await irAlCarrusel(screen, device, bundleId, p);
    const it = (await items(screen)).filter(enPantalla);
    const elegido = it[0];
    await tol(() => home.capturarEvidencia(cp, 2, 'carrusel con la imagen a tocar'));
    await tol(() => screen.getByText(elegido.t).first().tap());
    await pausa(5000);
    const t = await nodos(screen);
    test.info().annotations.push({ type: 'destino', description: `${elegido.t} → ${t.map((x) => x.t).filter((x) => x.length < 40 && !/notification|signal|Battery|Wifi/i.test(x)).slice(0, 10).join(' | ')}` });
    await tol(() => home.capturarEvidencia(cp, 4, `pantalla tras tocar «${elegido.t}»`));
    const productos = t.filter((x) => /^product-/.test(x.id)).length;
    test.info().annotations.push({ type: 'PLP', description: `${productos} productos en la pantalla abierta` });
    expect(t.some((x) => x.t === TITULO), 'ya no se ve el Home').toBe(false);
    expect(t.some((x) => /qu[eé] est[aá]s buscando/i.test(x.t)), 'se abre una PLP con su buscador').toBe(true);
    expect(productos, 'la categoría muestra productos').toBeGreaterThan(0);
    await tol(() => home.capturarEvidencia(cp));
  });
});
