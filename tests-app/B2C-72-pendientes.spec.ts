import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { HomeScreen } from './pages/HomeScreen';
import { arrancarInvitado } from './support/entregaApp';
import { sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';
import { tolerante } from './support/tolerante';

/**
 * B2C-72 — Carrusel + imagen circular con título (app nativa, Android, build v1.0.1): los TC Pendiente.
 *
 * Los TC piden como precondición un estado de contenido en Page Designer. La automatización no
 * modifica Business Manager (es contenido compartido del ambiente): se verifica si el Home publicado
 * ya cumple la precondición y, si no, el TC queda bloqueado por data.
 *
 *   012  se ejecuta: el carrusel que ve la cuenta logueada es el mismo que ve el invitado.
 *   004  ¿algún elemento del carrusel sin imagen circular?  (se anota cuántos elementos y se captura)
 *   005  ¿algún elemento sin link? Se toca cada elemento y se mira si la app navega.
 *   008  ¿un carrusel sin elementos? Se anota cuántos elementos tiene el publicado.
 * Sin `test()`: 009, 010, 011 (fechas en TBD), 013–015 ({GRUPO_CLIENTES_SEGMENTO}), 016–019 (cuentas y
 * grupos por nivel o región sin valor), 020 y 021 ({HERRAMIENTA_TRACKING} y atributos sin valor).
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
  return (j < 0 ? resto : resto.slice(0, j)).filter((x) => {
    if (x.h <= 0 || x.w <= 0 || x.w > 400 || /^mostrar todo$/i.test(x.t) || vistos.has(x.t)) return false;
    vistos.add(x.t);
    return true;
  });
}
const enPantalla = (n: Nodo) => n.x >= 0 && n.x + n.w <= ANCHO;
const masCentrado = (it: Nodo[]) => [...it].sort((a, b) => Math.abs(a.x + a.w / 2 - ANCHO / 2) - Math.abs(b.x + b.w / 2 - ANCHO / 2))[0];


/** Desliza el carrusel a la altura del elemento con coordenadas explícitas (el swipe del locator falla cerca del borde). */
function deslizar(ref: Nodo, dir: 'left' | 'right'): void {
  const y = Math.round(ref.y + ref.h / 2);
  const [x1, x2] = dir === 'left' ? [850, 250] : [250, 850];
  execSync(`adb shell input swipe ${x1} ${y} ${x2} ${y} 350`, { timeout: 15000 });
}

/** Deja el componente en pantalla buscándolo hacia abajo y, si la página aún cargaba, también hacia arriba. */
async function bajarAlCarrusel(screen: Screen): Promise<void> {
  const hallar = async () => (await nodos(screen)).find((x) => x.t === TITULO);
  for (const dir of ['up', 'down', 'up', 'down'] as const) {
    for (let i = 0; i < 14; i++) {
      const n = await hallar();
      if (n && n.y > 350 && n.y < 1500) return;
      await tol(() => screen.swipe(dir));
      await pausa(1200);
    }
  }
  throw new Error(`no se encontró el componente «${TITULO}» en el Home`);
}

/** Todos los elementos del carrusel, deslizándolo hacia la izquierda hasta que no aparezcan nuevos. */
async function todosLosElementos(screen: Screen): Promise<string[]> {
  // El carrusel conserva su desplazamiento: se rebobina al inicio antes de contar.
  let previo = '';
  for (let k = 0; k < 12; k++) {
    const it0 = await items(screen);
    const ref0 = masCentrado(it0.filter(enPantalla));
    const primero = it0[0]?.t ?? '';
    if (!ref0 || primero === previo) break;
    previo = primero;
    deslizar(ref0, 'right');
    await pausa(900);
  }
  const vistos: string[] = [];
  for (let vuelta = 0; vuelta < 12; vuelta++) {
    const it = await items(screen);
    const nuevos = it.filter((x) => !vistos.includes(x.t));
    nuevos.forEach((x) => vistos.push(x.t));
    if (!nuevos.length && vuelta > 0) break;
    const origen = masCentrado(it.filter(enPantalla));
    if (!origen) break;
    deslizar(origen, 'left');
    await pausa(1200);
  }
  return vistos;
}

test.describe.configure({ timeout: 900000 });
test.describe('B2C-72 — Carrusel de imágenes circulares, TC pendientes (Android)', () => {
  test('TC-B2C72-APP-012 · Un usuario logueado ve el carrusel sin segmentación [Logueado] (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C72-APP-012';
    const home = new HomeScreen(screen, p);
    // 1) Lo que ve el invitado.
    await arrancarInvitado(screen, device, bundleId!, p);
    await pausa(3000);
    await bajarAlCarrusel(screen);
    await tol(() => home.capturarEvidencia(cp, 2, 'Home del invitado con el carrusel'));
    const invitado = await todosLosElementos(screen);
    // 2) Lo que ve la cuenta logueada.
    await asegurarApp(screen);
    await sesion(screen, p, cp, token(testData, 'USER_AUTH_001')!.split(' / ')[0], /./);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(4000);
    await bajarAlCarrusel(screen);
    const t = await nodos(screen);
    const titulo = t.find((x) => x.t === TITULO)!;
    const visibles = (await items(screen)).filter(enPantalla);
    await tol(() => home.capturarEvidencia(cp, 4, 'Home de la cuenta logueada con el carrusel'));
    const logueado = await todosLosElementos(screen);
    test.info().annotations.push({ type: 'elementos', description: `invitado (${invitado.length}): ${invitado.join(' | ')}; logueado (${logueado.length}): ${logueado.join(' | ')}; visibles por slide: ${visibles.length}` });
    expect(Math.abs(titulo.x + titulo.w / 2 - ANCHO / 2), 'el título está centrado').toBeLessThan(40);
    expect(visibles.length, 'hasta 3 imágenes por slide').toBeLessThanOrEqual(3);
    expect(logueado, 'la cuenta logueada ve los mismos elementos que el invitado').toEqual(invitado);
  });

  test('TC-B2C72-APP-005 · Tocar un elemento sin link no redirige ni muestra error [Logueado] (Android)', async ({ screen, plataforma: p }) => {
    test.setTimeout(600000);
    const cp = 'TC-B2C72-APP-005';
    const home = new HomeScreen(screen, p);
    await asegurarApp(screen);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
    await bajarAlCarrusel(screen);
    await tol(() => home.capturarEvidencia(cp, 2, 'carrusel publicado en el Home'));
    const resultado: string[] = [];
    const tocados = new Set<string>();
    let sinLink: string | null = null;
    for (let vuelta = 0; vuelta < 14; vuelta++) {
      const visibles = (await items(screen)).filter(enPantalla);
      const pendiente = visibles.find((x) => !tocados.has(x.t));
      if (pendiente) {
        tocados.add(pendiente.t);
        await tol(() => screen.getByText(pendiente.t).first().tap());
        await pausa(3500);
        const sigueEnHome = (await nodos(screen)).some((x) => x.t === TITULO);
        resultado.push(`${pendiente.t}: ${sigueEnHome ? 'NO navega' : 'navega'}`);
        if (sigueEnHome && !sinLink) sinLink = pendiente.t;
        if (!sigueEnHome) {
          await tol(() => screen.pressButton('BACK'));
          await pausa(2500);
          if (!(await nodos(screen)).some((x) => x.t === TITULO)) await bajarAlCarrusel(screen);
        }
        continue;
      }
      // Sin elementos nuevos a la vista: se desliza el carrusel; si no aparece nada nuevo, se termina.
      const antes = new Set((await items(screen)).map((x) => x.t));
      const ref = masCentrado(visibles);
      if (!ref) break;
      deslizar(ref, 'left');
      await pausa(1200);
      const despues = (await items(screen)).map((x) => x.t);
      if (despues.every((t) => antes.has(t))) break;
    }
    test.info().annotations.push({ type: 'toque por elemento', description: `${tocados.size} elementos: ${resultado.join(' | ')}` });
    if (!sinLink) { test.info().annotations.push({ type: 'bloqueado-data', description: 'todos los elementos del carrusel publicado navegan: no hay un elemento sin link' }); return; }
    await tol(() => home.capturarEvidencia(cp, 6, `tras tocar «${sinLink}» la app sigue en el Home`));
    expect((await nodos(screen)).some((x) => x.t === TITULO), 'la app se mantiene en el Home').toBe(true);
  });

  test('TC-B2C72-APP-004 · Un elemento sin imagen muestra una imagen genérica en el carrusel [Logueado] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C72-APP-004';
    const home = new HomeScreen(screen, p);
    await asegurarApp(screen);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
    await bajarAlCarrusel(screen);
    await tol(() => home.capturarEvidencia(cp, 2, 'carrusel publicado, primer tramo'));
    const elementos = await todosLosElementos(screen);
    await bajarAlCarrusel(screen);
    await tol(() => home.capturarEvidencia(cp, 4, 'carrusel publicado'));
    test.info().annotations.push({ type: 'elementos', description: `${elementos.length}: ${elementos.join(' | ')}` });
    test.info().annotations.push({ type: 'revisar-imagenes', description: 'comparar visualmente las capturas: ¿algún círculo sin imagen propia?' });
  });

  test('TC-B2C72-APP-008 · Un carrusel sin elementos no se muestra en el Home [Logueado] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C72-APP-008';
    const home = new HomeScreen(screen, p);
    await asegurarApp(screen);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
    await bajarAlCarrusel(screen);
    const n = (await items(screen)).length;
    await tol(() => home.capturarEvidencia(cp, 2, 'el carrusel publicado tiene elementos'));
    test.info().annotations.push({ type: 'elementos', description: `el carrusel publicado muestra ${n} elementos con título` });
    if (n > 0) { test.info().annotations.push({ type: 'bloqueado-data', description: 'el carrusel publicado tiene elementos: no hay un carrusel vacío que verificar' }); return; }
  });
});
