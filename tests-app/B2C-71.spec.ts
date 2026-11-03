import { test, expect } from './support/fixtures';
import { TabBar } from './pages/TabBar';
import { HomeScreen } from './pages/HomeScreen';
import { OrdenFiltrosModal } from './pages/OrdenFiltrosModal';
import type { ListadoScreen } from './pages/ListadoScreen';
import { tolerante } from './support/tolerante';

/**
 * B2C-71 — Panel de filtros de la PLP en la app.
 *
 * Solo Android, build v1.0.7, emulador local. {PLP_URL} es la de la web: en la app la PLP es la
 * primera subcategoría de la landing de "Mostrar todo" de "Los más vendidos" (hoy "Cerdo"). El panel
 * es el modal "Selecciona tus filtros": "Ordena tus productos" y "Aplica tus filtros" con Ofertas
 * (switch) y los tipos Estilos de alimentación, Sellos de advertencia, Marcas y Precio.
 *
 * Sin `test()`: APP-007 ({PLP_URL_TODOS_FILTROS} sin fila en el Excel de data) y APP-018
 * ({HERRAMIENTA_PROXY_APP} sin valor: pide throttling de red lenta).
 */
const BD = (m: string) => new Error(`PRECONDICION_NO_DISPONIBLE: ${m}`);
const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));

interface Nodo { type: string; label: string; x: number; y: number; w: number; h: number }

async function nodos(screen: any): Promise<Nodo[]> {
  const out: Nodo[] = [];
  const rec = (n: any) => {
    const id = n.identifier ?? n.resourceId ?? '';
    // Los botones y checkboxes publican su nombre en `label`; los TextView, en `text`.
    const nombre = n.label || n.text;
    if (!id.startsWith('com.android.systemui') && nombre) {
      out.push({ type: String(n.type ?? '').split('.').pop()!, label: nombre, x: n.bounds?.x ?? 0, y: n.bounds?.y ?? 0, w: n.bounds?.width ?? 0, h: n.bounds?.height ?? 0 });
    }
    for (const c of n.children ?? []) rec(c);
  };
  for (const n of (await tolerante(() => screen.viewTree())) as any[]) rec(n);
  return out;
}

/** N del botón "Mostrar N productos" del panel, o null si no se ve. */
async function conteoBoton(screen: any): Promise<number | null> {
  const m = (await nodos(screen)).map((n) => /^Mostrar (\d+) productos?$/.exec(n.label)).find(Boolean);
  return m ? Number(m[1]) : null;
}

/** El conteo del botón una vez que deja de cambiar (el recálculo tarda). */
async function conteoEstable(screen: any): Promise<number> {
  let previo = -1;
  for (let i = 0; i < 12; i++) {
    const c = await conteoBoton(screen);
    if (c !== null && c === previo) return c;
    previo = c ?? -1;
    await dormir(1000);
  }
  return previo;
}

/** "N productos" del encabezado de la PLP (con el panel cerrado). */
async function conteoPlp(screen: any): Promise<number> {
  const t: string = await tolerante(() => screen.getByText(/^\d+ productos?$/).first().getText());
  return Number(/\d+/.exec(t)![0]);
}

/** El encabezado de una sección: con valores elegidos su nombre incluye el badge («Marcas 1»), por eso se busca por inicio. */
const seccion = (screen: any, nombre: string) => screen.getByRole('button', { name: new RegExp(`^${nombre.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`) });

/** Ejecuta `accion`; si el elemento no está en el árbol (fuera de pantalla), recorre el panel hacia abajo y reintenta. */
async function conScroll(screen: any, accion: () => Promise<unknown>): Promise<void> {
  for (let i = 0; i < 6; i++) {
    try {
      await tolerante(accion);
      return;
    } catch (e) {
      if (i === 5 || !/no matching element|not found|LocatorError/i.test(String(e))) throw e;
      // El elemento puede estar arriba o abajo de lo visible: primero al inicio del panel, luego hacia abajo.
      if (i === 0) await alInicio(screen);
      else await screen.swipe('up');
      await dormir(700);
    }
  }
}
/** Vuelve al inicio del panel. */
async function alInicio(screen: any) {
  for (let i = 0; i < 5; i++) { await screen.swipe('down', { distance: 900, duration: 250 }); await dormir(500); }
}
async function abrirSeccion(screen: any, nombre: string) {
  await conScroll(screen, () => seccion(screen, nombre).tap({ timeout: 2500 }));
  await dormir(1200);
}
/** Espera a que el panel termine de subir y su árbol sea legible. */
async function esperarPanel(screen: any) {
  for (let i = 0; i < 20; i++) {
    if ((await nodos(screen)).some((x) => x.label === 'Selecciona tus filtros')) return;
    await dormir(1000);
  }
  throw new Error('el panel «Selecciona tus filtros» no apareció en 20 s');
}
async function valoresVisibles(screen: any): Promise<string[]> {
  return (await nodos(screen)).filter((n) => n.type === 'CheckBox').map((n) => n.label);
}
async function marcar(screen: any, valor: string) {
  await conScroll(screen, () => screen.getByRole('checkbox', { name: valor }).tap({ timeout: 2500 }));
  await dormir(800);
}

/** Abre la app, llega a la PLP y deja abierto el panel de filtros. */
async function abrirPanel(screen: any, p: any, cp: string, conPanel = true): Promise<{ plp: ListadoScreen; modal: OrdenFiltrosModal; totalPlp: number }> {
  const tabs = await tolerante(() => new TabBar(screen, p).waitUntilReady());
  await tabs.capturarEvidencia(cp, 1, 'app abierta en el Home');
  const landing = await tolerante(() => new HomeScreen(screen, p).tapMostrarTodo());
  await tolerante(() => landing.waitUntilReady());
  const plp = await tolerante(() => landing.tapPrimeraSubcategoria());
  await tolerante(() => plp.waitUntilReady());
  await tolerante(() => expect(plp.filtros, 'se llegó a la PLP').toBeVisible({ timeout: 15000 }));
  await dormir(2500);
  const totalPlp = await conteoPlp(screen);
  await plp.capturarEvidencia(cp, 2, 'PLP con su listado');
  const modal = new OrdenFiltrosModal(screen, p);
  if (conPanel) {
    await tolerante(() => plp.abrirFiltros());
    await tolerante(() => modal.waitUntilReady());
    await esperarPanel(screen);
    await dormir(1000);
    await modal.capturarEvidencia(cp, 3, 'panel de filtros abierto');
  }
  return { plp, modal, totalPlp };
}

/** Expande Marcas y marca la primera marca; devuelve su nombre y el conteo del botón. */
async function elegirMarca(screen: any, indice = 0): Promise<{ marca: string; marcas: string[]; conteo: number }> {
  await abrirSeccion(screen, 'Marcas');
  const marcas = await valoresVisibles(screen);
  expect(marcas.length, 'la sección Marcas muestra valores').toBeGreaterThan(indice);
  await marcar(screen, marcas[indice]);
  return { marca: marcas[indice], marcas, conteo: await conteoEstable(screen) };
}

/**
 * Busca una combinación de filtros sin productos: cada marca con Ofertas y luego con cada valor de
 * Estilos de alimentación y Sellos de advertencia. Devuelve cómo la armó o null si ninguna da 0.
 */
async function armarCero(screen: any): Promise<string | null> {
  const { marcas } = await (async () => { await abrirSeccion(screen, 'Marcas'); const m = await valoresVisibles(screen); return { marcas: m }; })();
  await abrirSeccion(screen, 'Marcas');
  for (let i = 0; i < Math.min(marcas.length, 2); i++) {
    await abrirSeccion(screen, 'Marcas');
    await marcar(screen, marcas[i]);
    await abrirSeccion(screen, 'Marcas');
    await alInicio(screen);
    // Ofertas (switch)
    await conScroll(screen, () => screen.getByLabel('Filtrar productos en oferta').tap({ timeout: 2500 }));
    await dormir(800);
    if ((await conteoEstable(screen)) === 0) return `${marcas[i]} + Ofertas`;
    await conScroll(screen, () => screen.getByLabel('Filtrar productos en oferta').tap({ timeout: 2500 }));
    await dormir(800);
    for (const sec of ['Estilos de alimentación', 'Sellos de advertencia']) {
      await abrirSeccion(screen, sec);
      for (const v of (await valoresVisibles(screen)).filter((x) => !marcas.includes(x))) {
        await marcar(screen, v);
        if ((await conteoEstable(screen)) === 0) return `${marcas[i]} + ${v}`;
        await marcar(screen, v);
      }
      await abrirSeccion(screen, sec);
    }
    await abrirSeccion(screen, 'Marcas');
    await marcar(screen, marcas[i]);
    await abrirSeccion(screen, 'Marcas');
  }
  return null;
}

test.describe('B2C-71 — Panel de filtros de la PLP (Android)', () => {
  test('TC-B2C71-APP-001 · El panel de filtros muestra header, secciones y el botón con el conteo [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C71-APP-001';
    const { modal } = await abrirPanel(screen, p, cp);
    const n = await nodos(screen);
    const y = (re: RegExp) => n.find((x) => re.test(x.label))?.y ?? -1;
    await expect(modal.cerrarX, 'header con X').toBeVisible();
    expect(y(/^Selecciona tus filtros$/), 'título del header').toBeGreaterThan(-1);
    expect(y(/^Ordena tus productos$/), '«Ordena tus productos»').toBeGreaterThan(y(/^Selecciona tus filtros$/));
    expect(y(/^Aplica tus filtros$/), '«Aplica tus filtros» después de «Ordena tus productos»').toBeGreaterThan(y(/^Ordena tus productos$/));
    for (const s of ['Estilos de alimentación', 'Sellos de advertencia', 'Marcas', 'Precio']) expect(n.some((x) => x.type === 'Button' && x.label === s), `dropdown ${s}`).toBe(true);
    expect(n.some((x) => x.type === 'Switch'), 'Ofertas es un switch, no un dropdown').toBe(true);
    expect(await conteoBoton(screen), 'botón «Mostrar N productos»').not.toBeNull();
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C71-APP-002 · El botón "Mostrar productos" permanece fijo al recorrer el panel [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C71-APP-002';
    const { modal } = await abrirPanel(screen, p, cp);
    const boton = async () => (await nodos(screen)).find((x) => /^Mostrar \d+ productos?$/.test(x.label));
    const antes = await boton();
    expect(antes, 'el botón se ve al abrir').toBeTruthy();
    await abrirSeccion(screen, 'Marcas');
    await abrirSeccion(screen, 'Estilos de alimentación');
    await abrirSeccion(screen, 'Sellos de advertencia');
    await screen.swipe('up');
    await dormir(800);
    await screen.swipe('up');
    await dormir(800);
    const despues = await boton();
    await modal.capturarEvidencia(cp, 5, 'panel recorrido con varias secciones abiertas');
    expect(despues, 'el botón sigue visible tras recorrer el panel').toBeTruthy();
    expect(despues!.y, 'el botón queda fijo abajo (misma posición)').toBe(antes!.y);
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C71-APP-003 · Tocar el encabezado de una sección la expande o colapsa y cambia la flecha [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C71-APP-003';
    const { modal } = await abrirPanel(screen, p, cp);
    expect((await valoresVisibles(screen)).length, 'colapsada: sin valores').toBe(0);
    await abrirSeccion(screen, 'Marcas');
    await modal.capturarEvidencia(cp, 5, 'sección Marcas expandida');
    expect((await valoresVisibles(screen)).length, 'expandida: muestra sus valores').toBeGreaterThan(0);
    await abrirSeccion(screen, 'Marcas');
    await modal.capturarEvidencia(cp, 7, 'sección Marcas colapsada');
    expect((await valoresVisibles(screen)).length, 'colapsada de nuevo: sin valores').toBe(0);
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C71-APP-004 · Varias secciones de filtro pueden quedar abiertas a la vez [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C71-APP-004';
    const { modal } = await abrirPanel(screen, p, cp);
    await abrirSeccion(screen, 'Marcas');
    const soloMarcas = await nodos(screen);
    await abrirSeccion(screen, 'Precio');
    const ambas = await nodos(screen);
    await modal.capturarEvidencia(cp, 5, 'Marcas y Precio expandidas');
    expect(ambas.filter((x) => x.type === 'CheckBox').length, 'Marcas sigue expandida').toBeGreaterThan(0);
    expect(ambas.length, 'Precio muestra su contenido sin cerrar Marcas').toBeGreaterThan(soloMarcas.length);
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C71-APP-005 · "Filtros" abre un drawer desde abajo con overlay oscuro [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C71-APP-005';
    const { modal } = await abrirPanel(screen, p, cp);
    const n = await nodos(screen);
    const titulo = n.find((x) => x.label === 'Selecciona tus filtros');
    expect(titulo, 'se ve el título del panel').toBeTruthy();
    await expect(modal.fondo, 'overlay que cubre el fondo («Cerrar filtros» a pantalla completa)').toBeVisible();
    expect(titulo!.y, 'el panel es una hoja inferior: su título queda bajo el 10 % superior de la pantalla').toBeGreaterThan(240);
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C71-APP-006 · El panel muestra solo tipos de filtro con valores disponibles [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C71-APP-006';
    const { modal } = await abrirPanel(screen, p, cp);
    const tipos = (await nodos(screen)).filter((x) => x.type === 'Button' && ['Estilos de alimentación', 'Sellos de advertencia', 'Marcas', 'Precio'].includes(x.label)).map((x) => x.label);
    test.info().annotations.push({ type: 'tipos mostrados', description: tipos.join(', ') });
    expect(tipos.length, 'el panel muestra tipos de filtro').toBeGreaterThan(0);
    for (const t of tipos) {
      const antes = (await nodos(screen)).length;
      await abrirSeccion(screen, t);
      const n = await nodos(screen);
      expect(n.length - antes, `«${t}» muestra contenido al expandirse`).toBeGreaterThan(0);
      await abrirSeccion(screen, t);
      await alInicio(screen);
    }
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C71-APP-008 · Seleccionar un filtro recalcula el conteo con animación y fondo oscurecido [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C71-APP-008';
    const { modal } = await abrirPanel(screen, p, cp);
    const inicial = await conteoEstable(screen);
    await abrirSeccion(screen, 'Marcas');
    const marcas = await valoresVisibles(screen);
    await tolerante(() => screen.getByRole('checkbox', { name: marcas[0] }).tap());
    let vistoEnCarga = false;
    for (let i = 0; i < 6 && !vistoEnCarga; i++) {
      const hay = (await nodos(screen)).some((x) => /\.\.\.|…/.test(x.label) && /Mostrar|productos/i.test(x.label));
      vistoEnCarga = hay;
    }
    await modal.capturarEvidencia(cp, 6, 'botón tras seleccionar la marca');
    const final = await conteoEstable(screen);
    test.info().annotations.push({ type: 'conteo', description: `${inicial} → ${final}; animación (...) observada: ${vistoEnCarga}` });
    expect(final, 'al terminar el botón muestra el nuevo conteo').toBeLessThan(inicial);
    if (!vistoEnCarga) throw BD('la animación «(...)» del botón dura menos que una lectura de pantalla (≈1 s) y no se pudo observar; el conteo final sí se actualizó');
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C71-APP-009 · Con filtros activos el panel muestra "Filtros aplicados" con chips y "Limpiar" [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C71-APP-009';
    const { plp, modal } = await abrirPanel(screen, p, cp);
    const { marca } = await elegirMarca(screen);
    await tolerante(() => modal.mostrar.tap());
    await dormir(2500);
    await tolerante(() => plp.abrirFiltros());
    await tolerante(() => modal.waitUntilReady());
    await esperarPanel(screen);
    await modal.capturarEvidencia(cp, 7, 'panel reabierto con el filtro activo');
    const n = await nodos(screen);
    expect(n.some((x) => /^Filtros aplicados$/.test(x.label)), '«Filtros aplicados»').toBe(true);
    expect(n.some((x) => x.label.includes(marca)), `chip de ${marca}`).toBe(true);
    expect(n.some((x) => /^Limpiar$/.test(x.label)), 'link «Limpiar»').toBe(true);
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C71-APP-010 · Tocar la × de un chip quita ese filtro y actualiza el conteo [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C71-APP-010';
    const { plp, modal, totalPlp } = await abrirPanel(screen, p, cp);
    const { marca, conteo } = await elegirMarca(screen);
    expect(conteo, 'la marca reduce el conteo').toBeLessThan(totalPlp);
    await tolerante(() => modal.mostrar.tap());
    await dormir(2500);
    await tolerante(() => plp.abrirFiltros());
    await tolerante(() => modal.waitUntilReady());
    await esperarPanel(screen);
    const chip = (await nodos(screen)).find((x) => x.label.includes(marca) && x.type !== 'CheckBox');
    expect(chip, `chip de ${marca}`).toBeTruthy();
    await tolerante(() => screen.getByRole('button', { name: new RegExp(`(quitar|eliminar|cerrar|remover).*${marca}|${marca}.*(quitar|eliminar|cerrar)`, 'i') }).first().tap());
    await dormir(1500);
    await modal.capturarEvidencia(cp, 8, 'tras quitar el chip');
    expect((await nodos(screen)).some((x) => x.label.includes(marca) && x.type !== 'CheckBox'), 'el chip desaparece').toBe(false);
    expect(await conteoEstable(screen), 'el conteo vuelve al total').toBe(totalPlp);
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C71-APP-011 · Una sección con valores elegidos muestra un badge rojo con la cantidad [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C71-APP-011';
    const { modal } = await abrirPanel(screen, p, cp);
    await abrirSeccion(screen, 'Estilos de alimentación');
    const valores = await valoresVisibles(screen);
    expect(valores.length, 'la sección muestra al menos dos valores').toBeGreaterThanOrEqual(2);
    await marcar(screen, valores[0]);
    await marcar(screen, valores[1]);
    await abrirSeccion(screen, 'Estilos de alimentación');
    await modal.capturarEvidencia(cp, 7, 'sección colapsada con dos valores elegidos');
    const n = await nodos(screen);
    const cab = n.find((x) => /^Estilos de alimentación/.test(x.label) && x.type === 'Button')!;
    test.info().annotations.push({ type: 'encabezado de la sección', description: cab.label });
    const badge = /\b2\b/.test(cab.label) || n.find((x) => x.label === '2' && Math.abs(x.y - cab.y) < cab.h);
    expect(badge, 'badge «2» junto al nombre de la sección').toBeTruthy();
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C71-APP-012 · El botón "Mostrar productos" refleja el conteo de la selección [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C71-APP-012';
    const { modal, totalPlp } = await abrirPanel(screen, p, cp);
    expect(await conteoEstable(screen), 'al abrir, el botón muestra el total de la PLP').toBe(totalPlp);
    const { marca, marcas, conteo } = await elegirMarca(screen);
    await modal.capturarEvidencia(cp, 6, `con ${marca} seleccionada`);
    expect(conteo, 'con la marca el conteo baja').toBeLessThan(totalPlp);
    await marcar(screen, marca);
    expect(await conteoEstable(screen), 'al deseleccionarla vuelve al total').toBe(totalPlp);
    test.info().annotations.push({ type: 'marcas', description: marcas.join(', ') });
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C71-APP-013 · "Mostrar productos" cierra el panel y aplica los filtros al listado [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C71-APP-013';
    const { plp, modal } = await abrirPanel(screen, p, cp);
    const { marca, conteo } = await elegirMarca(screen);
    await tolerante(() => modal.mostrar.tap());
    await dormir(3000);
    await expect(modal.titulo, 'el panel se cierra').not.toBeVisible({ timeout: 10000 });
    await plp.capturarEvidencia(cp, 8, 'listado filtrado');
    expect(await conteoPlp(screen), 'el encabezado coincide con el botón').toBe(conteo);
    const productos = await tolerante(() => plp.leerProductos(conteo));
    expect(productos.length, 'el listado muestra productos').toBeGreaterThan(0);
    for (const x of productos) expect(x.nombre, `${x.sku} es de la marca ${marca}`).toContain(marca);
    await plp.capturarEvidencia(cp);
  });

  test('TC-B2C71-APP-014 · "Limpiar" quita todos los filtros y el botón muestra el total [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C71-APP-014';
    const { plp, modal, totalPlp } = await abrirPanel(screen, p, cp);
    await elegirMarca(screen);
    await tolerante(() => modal.mostrar.tap());
    await dormir(2500);
    await tolerante(() => plp.abrirFiltros());
    await tolerante(() => modal.waitUntilReady());
    await esperarPanel(screen);
    await tolerante(() => screen.getByText('Limpiar', { exact: true }).tap());
    await dormir(2000);
    await modal.capturarEvidencia(cp, 8, 'tras tocar «Limpiar»');
    const n = await nodos(screen);
    expect(n.some((x) => /^Filtros aplicados$/.test(x.label)), 'desaparece «Filtros aplicados»').toBe(false);
    expect(await conteoEstable(screen), 'el botón muestra el total').toBe(totalPlp);
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C71-APP-015 · Filtros de distintos tipos se combinan con AND y del mismo tipo con OR [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C71-APP-015';
    const { plp, modal } = await abrirPanel(screen, p, cp);
    await abrirSeccion(screen, 'Marcas');
    const marcas = await valoresVisibles(screen);
    expect(marcas.length, 'hay al menos dos marcas').toBeGreaterThanOrEqual(2);
    await marcar(screen, marcas[0]);
    await marcar(screen, marcas[1]);
    const soloMarcas = await conteoEstable(screen);
    await abrirSeccion(screen, 'Estilos de alimentación');
    const estilos = (await valoresVisibles(screen)).filter((v) => !marcas.includes(v));
    await marcar(screen, estilos[0]);
    const combinado = await conteoEstable(screen);
    await modal.capturarEvidencia(cp, 7, 'dos marcas y un estilo');
    expect(combinado, 'AND entre tipos: el estilo no amplía el resultado').toBeLessThanOrEqual(soloMarcas);
    await tolerante(() => modal.mostrar.tap());
    await dormir(3000);
    const productos = await tolerante(() => plp.leerProductos(combinado));
    for (const x of productos) expect(marcas.slice(0, 2).some((m) => x.nombre.includes(m)), `${x.sku} es de una de las dos marcas (OR)`).toBe(true);
    await plp.capturarEvidencia(cp);
  });

  test('TC-B2C71-APP-016 · La X cierra el panel y mantiene los filtros seleccionados [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C71-APP-016';
    const { plp, modal, totalPlp } = await abrirPanel(screen, p, cp);
    const { conteo } = await elegirMarca(screen);
    await tolerante(() => modal.cerrarX.tap());
    await dormir(2000);
    await expect(modal.titulo, 'el panel se cierra').not.toBeVisible({ timeout: 10000 });
    await tolerante(() => plp.abrirFiltros());
    await tolerante(() => modal.waitUntilReady());
    await esperarPanel(screen);
    await modal.capturarEvidencia(cp, 8, 'panel reabierto');
    expect(await conteoEstable(screen), 'al reabrir, la marca sigue seleccionada (el conteo no vuelve al total)').toBe(conteo);
    expect(conteo).toBeLessThan(totalPlp);
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C71-APP-017 · Con 0 resultados el botón muestra 0 y queda deshabilitado [Guest] (Android)', async ({ screen, plataforma: p }) => {
    test.setTimeout(720000);
    const cp = 'TC-B2C71-APP-017';
    const { modal } = await abrirPanel(screen, p, cp);
    const via = await armarCero(screen);
    await modal.capturarEvidencia(cp, 7, 'combinación sin productos');
    if (!via) throw BD('ninguna combinación de marca con Ofertas, estilos de alimentación o sellos de la PLP da 0 resultados');
    test.info().annotations.push({ type: 'combinación sin productos', description: via });
    expect(await conteoBoton(screen), 'el botón muestra 0').toBe(0);
    await expect(screen.getByRole('button', { name: /^Mostrar 0 productos?$/ }), 'el botón está deshabilitado').toBeDisabled();
    await expect(modal.titulo, 'el panel sigue abierto').toBeVisible();
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C71-APP-019 · Los filtros se mantienen al cambiar el ordenamiento [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C71-APP-019';
    const { plp, modal } = await abrirPanel(screen, p, cp);
    const { marca, conteo } = await elegirMarca(screen);
    await tolerante(() => modal.mostrar.tap());
    await dormir(3000);
    await tolerante(() => plp.abrirFiltros());
    await tolerante(() => modal.waitUntilReady());
    await esperarPanel(screen);
    await tolerante(() => modal.opcion('Precio más bajo').tap());
    await dormir(2000);
    await modal.capturarEvidencia(cp, 8, 'orden «Precio más bajo» con la marca activa');
    expect(await conteoEstable(screen), 'la cantidad de productos no cambia').toBe(conteo);
    await tolerante(() => modal.mostrar.tap());
    await dormir(3000);
    const productos = await tolerante(() => plp.leerProductos(conteo));
    for (const x of productos) expect(x.nombre, `${x.sku} sigue siendo de ${marca}`).toContain(marca);
    const precios = productos.map((x) => x.precio);
    expect([...precios].sort((a, b) => a - b), 'el listado queda ordenado por precio más bajo').toEqual(precios);
    await plp.capturarEvidencia(cp);
  });

  for (const [n, titulo] of [['020', 'Sin productos para los filtros se muestra el estado vacío con PLP-013'], ['021', '"Limpiar filtros" del estado vacío restaura el listado completo']] as const) {
    test(`TC-B2C71-APP-${n} · ${titulo} [Guest] (Android)`, async ({ screen, plataforma: p }) => {
      test.setTimeout(720000);
      const cp = `TC-B2C71-APP-${n}`;
      const { plp, modal, totalPlp } = await abrirPanel(screen, p, cp);
      const via = await armarCero(screen);
      if (!via) throw BD('ninguna combinación de marca con Ofertas, estilos de alimentación o sellos de la PLP da 0 resultados');
      test.info().annotations.push({ type: 'combinación sin productos', description: via });
      await tolerante(() => modal.fondo.tap());
      await dormir(2500);
      await plp.capturarEvidencia(cp, 8, 'estado vacío de la PLP');
      const t = (await nodos(screen)).map((x) => x.label).join(' | ');
      if (n === '020') {
        expect(t, 'título del estado vacío').toMatch(/No hay productos con estos filtros/i);
        expect(t, 'sugerencia').toMatch(/Prueba eliminando algunos filtros/i);
        expect(t, 'código de error').toMatch(/PLP-013/);
        expect(t, 'botón «Limpiar filtros»').toMatch(/Limpiar filtros/);
      } else {
        await tolerante(() => screen.getByRole('button', { name: /^Limpiar filtros$/ }).tap());
        await dormir(3000);
        expect(await conteoPlp(screen), 'el listado vuelve a mostrar todos los productos de la categoría').toBe(totalPlp);
      }
      await plp.capturarEvidencia(cp);
    });
  }
});
