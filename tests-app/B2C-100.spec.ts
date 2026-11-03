import { chromium } from '@playwright/test';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { baseUrl } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { MiCuentaScreen } from './pages/MiCuentaScreen';
import { tolerante } from './support/tolerante';
import { borrarDatosApp } from './support/adbAndroid';
import { HomePage } from '../tests/pages/HomePage';
import { BuscadorModal, SECCIONES } from '../tests/pages/BuscadorModal';

/**
 * B2C-100 — Buscador de la app: contenido por defecto y panel de sugerencias.
 *
 * Solo Android, build v1.0.7, emulador local. El Home de la app no muestra caja de búsqueda en su
 * header: la búsqueda se abre desde el tab «Buscar», que es la entrada que usan los casos.
 *
 * Sin `test()`: APP-018 ({HERRAMIENTA_PROXY_APP} sin valor) y APP-022 ({TEXTO_101_CARACTERES} sin valor).
 * Los 13 casos con sesión (002–009, 015–017 y 029) comprueban en vivo cómo inicia sesión la app.
 */
const BD = (m: string) => new Error(`PRECONDICION_NO_DISPONIBLE: ${m}`);
const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));

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
  for (const n of (await tolerante(() => screen.viewTree())) as any[]) rec(n);
  return out;
}
const tiene = (n: Nodo[], re: RegExp) => n.some((x) => re.test(x.label));

/** App con datos borrados: sin historial de búsquedas ni carro. */
async function limpiarApp(device: any, bundleId: string) {
  await device.terminateApp(bundleId).catch(() => {});
  borrarDatosApp(bundleId, process.env.ANDROID_SERIAL);
  await device.launchApp(bundleId);
}

async function abrirBuscar(screen: any, p: any, cp: string) {
  const tabs = await tolerante(() => new TabBar(screen, p).waitUntilReady());
  await tabs.capturarEvidencia(cp, 1, 'app abierta en el Home');
  await tolerante(() => screen.getByTestId('tab-Buscar').tap());
  await tolerante(() => screen.getByTestId('product-search').waitFor({ state: 'visible', timeout: 20000 }));
  await dormir(2000);
  await tabs.capturarEvidencia(cp, 3, 'pantalla de búsqueda');
  return tabs;
}
async function escribir(screen: any, texto: string, espera = 4500) {
  await tolerante(() => screen.getByTestId('product-search').fill(texto));
  await dormir(espera);
}
/** Los chips de «Lo más buscado»: los ViewGroup con nombre bajo ese título, hasta la siguiente sección. */
function chipsMasBuscado(n: Nodo[]): Nodo[] {
  const t = n.find((x) => x.label === 'Lo más buscado');
  const fin = n.filter((x) => x.y > (t?.y ?? 0) + 5 && x.type === 'TextView' && /^(🕐|Lo último que viste)/.test(x.label))[0]?.y ?? 1600;
  return t ? n.filter((x) => x.type === 'ViewGroup' && x.label && x.y > t.y + 20 && x.y < fin && x.w < 700 && !x.id) : [];
}
const sku = (testData: any, k: string) => token(testData, k)!;

test.describe('B2C-100 — Buscador de la app (Android)', () => {
  test('TC-B2C100-APP-001 · El buscador es accesible desde el tabbar, el header full y el header sticky [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C100-APP-001';
    const tabs = await tolerante(() => new TabBar(screen, p).waitUntilReady());
    await dormir(2000);
    await tabs.capturarEvidencia(cp, 1, 'Home, header completo');
    const enTabbar = tiene(await nodos(screen), /^Buscar$/);
    const buscaHeader = async () => (await nodos(screen)).some((x) => /¿Qué estás buscando\?/.test(x.label) || x.id === 'product-search');
    const headerFull = await buscaHeader();
    for (let i = 0; i < 3; i++) { await screen.swipe('up'); await dormir(600); }
    await tabs.capturarEvidencia(cp, 4, 'Home tras desplazarse (header sticky)');
    const headerSticky = await buscaHeader();
    test.info().annotations.push({ type: 'caja de búsqueda', description: `tabbar: ${enTabbar}; header full: ${headerFull}; header sticky: ${headerSticky}` });
    expect(enTabbar, 'tab «Buscar» en el tabbar').toBe(true);
    expect(headerFull, 'el header full muestra la caja con el placeholder «¿Qué estás buscando?»').toBe(true);
    expect(headerSticky, 'el header sticky muestra la caja de búsqueda').toBe(true);
    await tabs.capturarEvidencia(cp);
  });

  test('TC-B2C100-APP-010 · El invitado sin historial ve solo "Lo más buscado" [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C100-APP-010';
    await limpiarApp(device, bundleId!);
    const tabs = await abrirBuscar(screen, p, cp);
    const n = await nodos(screen);
    expect(tiene(n, /^Lo más buscado$/), '«Lo más buscado»').toBe(true);
    expect(tiene(n, /^Tus búsquedas recientes$/), 'sin «Tus búsquedas recientes»').toBe(false);
    expect(tiene(n, /^Lo último que viste$/), 'sin «Lo último que viste»').toBe(false);
    await tabs.capturarEvidencia(cp);
  });

  test('TC-B2C100-APP-011 · El invitado con historial ve recientes y "Lo más buscado" [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C100-APP-011';
    await limpiarApp(device, bundleId!);
    const tabs = await abrirBuscar(screen, p, cp);
    const termino = sku(testData, 'SEARCH_TERM_001');
    await escribir(screen, termino, 2500);
    await tolerante(() => screen.pressButton('ENTER'));
    await dormir(3500);
    await tolerante(() => screen.getByTestId('tab-Buscar').tap());
    await dormir(3000);
    await tabs.capturarEvidencia(cp, 6, 'búsqueda reabierta con historial');
    const n = await nodos(screen);
    expect(tiene(n, /^Tus búsquedas recientes$/), '«Tus búsquedas recientes»').toBe(true);
    expect(n.some((x) => x.label === termino), `chip «${termino}» entre los recientes`).toBe(true);
    expect(tiene(n, /^Limpiar$/), 'link «Limpiar»').toBe(true);
    expect(tiene(n, /^Lo más buscado$/), '«Lo más buscado»').toBe(true);
    expect(tiene(n, /^Lo último que viste$/), 'sin «Lo último que viste»').toBe(false);
    await tabs.capturarEvidencia(cp);
  });

  test('TC-B2C100-APP-012 · "Lo más buscado" muestra 6 chips en máximo 2 filas sin truncar [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C100-APP-012';
    const tabs = await abrirBuscar(screen, p, cp);
    const chips = chipsMasBuscado(await nodos(screen));
    const filas = new Set(chips.map((c) => c.y)).size;
    test.info().annotations.push({ type: 'chips', description: `${chips.map((c) => c.label).join(', ')} (${filas} filas)` });
    expect(chips.length, '6 chips').toBe(6);
    expect(filas, 'en un máximo de 2 filas').toBeLessThanOrEqual(2);
    expect(chips.some((c) => /…|\.\.\./.test(c.label)), 'ningún chip truncado').toBe(false);
    await tabs.capturarEvidencia(cp);
  });

  test('TC-B2C100-APP-013 · El orden de "Lo más buscado" es el mismo que en Web [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C100-APP-013';
    const tabs = await abrirBuscar(screen, p, cp);
    const app = chipsMasBuscado(await nodos(screen)).sort((a, b) => a.y - b.y || a.x - b.x).map((c) => c.label);
    const browser = await chromium.launch();
    let web: string[] = [];
    try {
      const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, baseURL: baseUrl(testData) });
      const page = await ctx.newPage();
      await new HomePage(page).goto();
      const buscador = new BuscadorModal(page, 'desktop');
      await buscador.abrir();
      web = await buscador.textosDeChips(SECCIONES.masBuscado);
    } finally {
      await browser.close();
    }
    test.info().annotations.push({ type: 'orden', description: `App: ${app.join(', ')} | Web: ${web.join(', ')}` });
    await tabs.capturarEvidencia(cp, 5, 'Lo más buscado en la app');
    expect(app.length, 'la app muestra 6 chips').toBe(6);
    expect(app.map((t) => t.toLowerCase()), 'mismos 6 términos y mismo orden que la Web Desktop').toEqual(web.map((t) => t.toLowerCase()));
    await tabs.capturarEvidencia(cp);
  });

  test('TC-B2C100-APP-014 · Tocar un chip de "Lo más buscado" redirige a la SRP del término [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C100-APP-014';
    const tabs = await abrirBuscar(screen, p, cp);
    const todos = chipsMasBuscado(await nodos(screen)).sort((a, b) => a.y - b.y || a.x - b.x);
    // «Helado» no devuelve productos en DEV («Sin resultados para "Helado"»): se toca un chip que sí los devuelve.
    const chip = todos.find((c) => /^leche$/i.test(c.label)) ?? todos[0];
    await tolerante(() => screen.getByLabel(chip.label).first().tap());
    await dormir(4000);
    await tabs.capturarEvidencia(cp, 5, `SRP de «${chip.label}»`);
    const n = await nodos(screen);
    expect(n.some((x) => x.type === 'EditText' && x.label.toLowerCase() === chip.label.toLowerCase()), `la caja de búsqueda contiene «${chip.label}»`).toBe(true);
    expect(n.some((x) => /^\s*\d+ productos?$/.test(x.label)), 'se muestra la SRP con su conteo de productos').toBe(true);
    await tabs.capturarEvidencia(cp);
  });

  test('TC-B2C100-APP-019 · Seguir escribiendo actualiza los resultados según el término estabilizado [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C100-APP-019';
    const tabs = await abrirBuscar(screen, p, cp);
    const termino = sku(testData, 'SEARCH_TERM_001');
    await escribir(screen, termino);
    await tabs.capturarEvidencia(cp, 5, `resultados de «${termino}»`);
    const n = await nodos(screen);
    expect(tiene(n, new RegExp(`Resultado para “${termino}”`)), `los resultados corresponden al término completo «${termino}»`).toBe(true);
    expect(tiene(n, new RegExp(`Resultado para “${termino.slice(0, 3)}”`)), 'no a un término parcial intermedio').toBe(false);
    await tabs.capturarEvidencia(cp);
  });

  for (const [n, titulo] of [['020', 'La pantalla de sugerencias muestra título, chips, carrusel y "Ver todos"'], ['025', 'Con 4 o más productos el carrusel muestra 4 deslizables y "Ver todos"']] as const) {
    test(`TC-B2C100-APP-${n} · ${titulo} [Guest] (Android)`, async ({ screen, plataforma: p, testData }) => {
      const cp = `TC-B2C100-APP-${n}`;
      const tabs = await abrirBuscar(screen, p, cp);
      const termino = sku(testData, 'SEARCH_TERM_001');
      await escribir(screen, termino);
      await tabs.capturarEvidencia(cp, 5, `sugerencias de «${termino}»`);
      const nn = await nodos(screen);
      const chips = nn.filter((x) => x.type === 'ViewGroup' && x.label && x.y >= 300 && x.y < 380 && !x.id && x.w < 700);
      const tarjetas = new Set(nn.filter((x) => /^product-\d/.test(x.id)).map((x) => x.id));
      test.info().annotations.push({ type: 'pantalla', description: `chips: ${chips.map((c) => c.label).join(', ')}; tarjetas en el árbol: ${tarjetas.size}` });
      expect(tiene(nn, new RegExp(`Resultado para “${termino}”`)), 'título «Resultado para»').toBe(true);
      expect(nn.some((x) => /^\s*\d+ productos?$/.test(x.label)), 'cantidad de resultados en el título').toBe(true);
      expect(chips.length, 'hasta 4 chips de sugerencias').toBeGreaterThan(0);
      expect(chips.length).toBeLessThanOrEqual(4);
      expect(tarjetas.size, 'carrusel de productos').toBeGreaterThanOrEqual(3);
      // «Ver todos» queda al final del carrusel: se desliza hasta que no aparezcan tarjetas nuevas.
      const vistas = new Set(tarjetas);
      let verTodos = tiene(nn, /^Ver todos$/);
      let sinNovedad = 0;
      for (let i = 0; i < 8 && !verTodos && sinNovedad < 2; i++) {
        const carta = (await nodos(screen)).find((x) => x.type === 'ViewGroup' && /^product-\d/.test(x.id));
        await tolerante(() => screen.swipe('left', { startX: 800, startY: Math.round((carta?.y ?? 700) + 200), distance: 500, duration: 900 }));
        await dormir(1800);
        const despues = await nodos(screen);
        if (tiene(despues, /Guardar en listas/)) {
          await tabs.capturarEvidencia(cp, 7, 'el gesto abrió la PDP');
          throw new Error('GESTO_ABRE_PDP: el deslizamiento horizontal sobre el carrusel abre la PDP del producto en vez de desplazarlo; no se puede comprobar «Ver todos» con este gesto');
        }
        const antes = vistas.size;
        for (const x of despues) if (/^product-\d/.test(x.id)) vistas.add(x.id);
        sinNovedad = vistas.size === antes ? sinNovedad + 1 : 0;
        verTodos = tiene(despues, /^Ver todos$/);
      }
      test.info().annotations.push({ type: 'carrusel', description: `productos distintos vistos: ${vistas.size}; «Ver todos» visible: ${verTodos}` });
      await tabs.capturarEvidencia(cp, 7, 'carrusel desplazado hasta el final');
      expect(vistas.size, `el carrusel muestra como máximo 4 productos (se vieron ${vistas.size})`).toBeLessThanOrEqual(4);
      expect(verTodos, '«Ver todos» al final del carrusel').toBe(true);
      await tabs.capturarEvidencia(cp);
    });
  }

  test('TC-B2C100-APP-021 · "Cancelar" cierra la búsqueda, limpia el buscador y mantiene la página de origen [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C100-APP-021';
    const tabs = await abrirBuscar(screen, p, cp);
    await escribir(screen, sku(testData, 'SEARCH_TERM_001'), 2500);
    await tolerante(() => screen.getByRole('button', { name: 'Cancelar' }).tap());
    await dormir(3000);
    await tabs.capturarEvidencia(cp, 6, 'tras tocar «Cancelar»');
    const n = await nodos(screen);
    expect(tiene(n, /^Los más vendidos$/), 'se vuelve al Home de origen').toBe(true);
    expect(n.some((x) => x.id === 'product-search' && x.label !== ''), 'la caja de búsqueda queda vacía').toBe(false);
    await tabs.capturarEvidencia(cp);
  });

  test('TC-B2C100-APP-023 · Con 0 productos no se renderiza la sección del carrusel [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C100-APP-023';
    const tabs = await abrirBuscar(screen, p, cp);
    const termino = sku(testData, 'SEARCH_NO_RESULTS_001');
    await escribir(screen, termino);
    await tabs.capturarEvidencia(cp, 5, `resultados de «${termino}»`);
    const n = await nodos(screen);
    test.info().annotations.push({ type: 'pantalla', description: n.filter((x) => x.y > 250 && x.y < 1100 && x.label).map((x) => x.label).join(' | ') });
    expect(tiene(n, /Resultado para/), 'no se muestra el título de la sección de productos').toBe(false);
    expect(n.some((x) => /^product-\d/.test(x.id)), 'sin carrusel').toBe(false);
    expect(tiene(n, /^Ver todos$/), 'sin «Ver todos»').toBe(false);
    await tabs.capturarEvidencia(cp);
  });

  test('TC-B2C100-APP-024 · Con 1 a 3 productos el carrusel muestra solo los disponibles sin placeholders [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C100-APP-024';
    const tabs = await abrirBuscar(screen, p, cp);
    const termino = sku(testData, 'SEARCH_1A3_PRODUCTOS');
    await escribir(screen, termino);
    await tabs.capturarEvidencia(cp, 5, `resultados de «${termino}»`);
    const n = await nodos(screen);
    const cantidad = Number(/(\d+) productos?/.exec(n.find((x) => /^\s*\d+ productos?$/.test(x.label))?.label ?? '')?.[1] ?? NaN);
    const tarjetas = [...new Set(n.filter((x) => /^product-\d/.test(x.id)).map((x) => x.id))];
    test.info().annotations.push({ type: 'productos', description: `anunciados: ${cantidad}; tarjetas: ${tarjetas.length}` });
    expect(cantidad, 'el término retorna entre 1 y 3 productos').toBeGreaterThanOrEqual(1);
    expect(cantidad).toBeLessThanOrEqual(3);
    expect(tarjetas.length, 'el carrusel muestra solo los productos retornados').toBe(cantidad);
    expect(tiene(n, /^Ver todos$/), '«Ver todos» solo si el total supera los visibles').toBe(false);
    await tabs.capturarEvidencia(cp);
  });

  test('TC-B2C100-APP-026 · Sin sugerencias de autocompletado no se renderiza la sección de chips [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C100-APP-026';
    const tabs = await abrirBuscar(screen, p, cp);
    const termino = sku(testData, 'SEARCH_SIN_SUGERENCIAS');
    await escribir(screen, termino);
    await tabs.capturarEvidencia(cp, 5, `resultados de «${termino}»`);
    const n = await nodos(screen);
    const cantidad = Number(/(\d+) productos?/.exec(n.find((x) => /^\s*\d+ productos?$/.test(x.label))?.label ?? '')?.[1] ?? NaN);
    const chips = n.filter((x) => x.type === 'ViewGroup' && x.label && x.y >= 300 && x.y < 380 && !x.id && x.w < 700);
    await tabs.capturarEvidencia(cp);
    if (!(cantidad > 0)) throw BD(`{SEARCH_SIN_SUGERENCIAS} («${termino}») retorna ${cantidad} productos: la precondición exige un término con productos y sin sugerencias`);
    expect(chips.length, 'sin chips de sugerencias').toBe(0);
  });

  test('TC-B2C100-APP-027 · Con 1 a 3 sugerencias se muestran solo las disponibles sin placeholders [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C100-APP-027';
    const tabs = await abrirBuscar(screen, p, cp);
    const termino = sku(testData, 'SEARCH_1A3_SUGERENCIAS');
    await escribir(screen, termino);
    await tabs.capturarEvidencia(cp, 5, `sugerencias de «${termino}»`);
    const n = await nodos(screen);
    const chips = n.filter((x) => x.type === 'ViewGroup' && x.label && x.y >= 300 && x.y < 380 && !x.id && x.w < 700);
    test.info().annotations.push({ type: 'sugerencias', description: chips.map((c) => c.label).join(', ') });
    expect(chips.length, 'entre 1 y 3 sugerencias, solo las disponibles').toBeGreaterThanOrEqual(1);
    expect(chips.length).toBeLessThanOrEqual(3);
    await tabs.capturarEvidencia(cp);
  });

  test('TC-B2C100-APP-028 · Sin productos ni sugerencias se muestra solo el título con 0 resultados [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C100-APP-028';
    const tabs = await abrirBuscar(screen, p, cp);
    const termino = sku(testData, 'SEARCH_NO_RESULTS_001');
    await escribir(screen, termino);
    await tabs.capturarEvidencia(cp, 5, `resultados de «${termino}»`);
    const n = await nodos(screen);
    expect(tiene(n, new RegExp(`Resultado para “${termino}”`)), 'título «Resultados para …»').toBe(true);
    expect(n.some((x) => /^\s*0 productos?$/.test(x.label)), '0 productos').toBe(true);
    expect(n.some((x) => x.type === 'ViewGroup' && x.label && x.y >= 300 && x.y < 380 && !x.id && x.w < 700), 'sin sugerencias').toBe(false);
    expect(n.some((x) => /^product-\d/.test(x.id)), 'sin carrusel').toBe(false);
    expect(tiene(n, /^Ver todos$/), 'sin «Ver todos»').toBe(false);
    await tabs.capturarEvidencia(cp);
  });

  // --- Casos con sesión: se comprueba en vivo cómo inicia sesión la app ------------------------------
  for (const n of ['002', '003', '004', '005', '006', '007', '008', '009', '015', '016', '017', '029']) {
    test(`TC-B2C100-APP-${n} · Caso con sesión iniciada [Logueado] (Android)`, async ({ screen, plataforma: p }) => {
      const cp = `TC-B2C100-APP-${n}`;
      const tabs = await tolerante(() => new TabBar(screen, p).waitUntilReady());
      await tabs.capturarEvidencia(cp, 1, 'app abierta en el Home');
      await tolerante(() => screen.getByTestId('tab-Mi cuenta').tap());
      const cuenta = await tolerante(() => new MiCuentaScreen(screen, p).waitUntilReady());
      const login = await tolerante(() => cuenta.tapIniciarSesion());
      await tolerante(() => login.waitUntilReady());
      await login.capturarEvidencia(cp, 3, 'pantalla de inicio de sesión: Rut y «Clave de acceso por correo»');
      const opcionCorreo = screen.getByText('Clave de acceso por correo');
      const habilitado = await tolerante(() => opcionCorreo.isEnabled());
      await login.capturarEvidencia(cp, 5, `«Clave de acceso por correo»: ${habilitado ? 'habilitado' : 'deshabilitado'}`);
      test.info().annotations.push({ type: '«Clave de acceso por correo»', description: habilitado ? 'habilitado' : 'deshabilitado (isEnabled = false)' });
      if (!habilitado) throw BD('la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data');
      throw new Error('el ingreso por correo cambió de comportamiento: el caso ya se puede intentar con sesión');
    });
  }
});
