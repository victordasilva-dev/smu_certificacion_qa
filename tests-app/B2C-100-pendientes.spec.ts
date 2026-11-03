import { execSync } from 'child_process';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { BuscarScreen } from './pages/BuscarScreen';
import { PdpScreen } from './pages/PdpScreen';
import { MiCuentaScreen } from './pages/MiCuentaScreen';
import { sesion, nodos } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';
import { tolerante } from './support/tolerante';

/**
 * B2C-100 — pantalla de búsqueda (app nativa, Android, build v1.0.1): los TC con sesión que quedaron
 * Pendiente por el login con RUT de la v1.0.7. Se entra por correo + OTP con {COMPRADOR_USER}.
 *
 * El «header» del Home no tiene caja de búsqueda: la pantalla de búsqueda es la del tab Buscar. La
 * Home con sesión no se puede volcar (uiautomator no la ve inactiva), así que las pestañas se tocan
 * por coordenadas y solo se lee el árbol en pantallas quietas (búsqueda, SRP, PDP, Mi cuenta).
 * El historial «de la sesión» (búsquedas recientes y visitas a PDP) se reinicia al cerrar sesión.
 */

const r = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const tocar = (x: number, y: number) => execSync(`adb shell input tap ${x} ${y}`, { timeout: 15000 });
const atras = () => execSync('adb shell input keyevent 4', { timeout: 15000 });
const TAB_BUSCAR: [number, number] = [540, 2232];
const TAB_PRODUCTOS: [number, number] = [720, 2232];
const TAB_CUENTA: [number, number] = [900, 2232];
const RECIENTES = /^tus b[uú]squedas recientes$/i;
const VISTO = /^lo [uú]ltimo que viste$/i;
const MAS_BUSCADO = /^lo m[aá]s buscado$/i;

const correo = (td: any) => token(td, 'COMPRADOR_USER')!.split(' / ')[0];
const SALUDO = /Karl/;

async function conSesion(screen: any, p: any, cp: string, td: any) {
  await asegurarApp(screen);
  await sesion(screen, p, cp, correo(td), SALUDO);
}

/** Cierra sesión (si hay) y vuelve a entrar: deja el historial de la sesión vacío. */
async function sesionNueva(screen: any, p: any, cp: string, td: any) {
  await asegurarApp(screen);
  tocar(...TAB_CUENTA);
  await pausa(3500);
  if ((await r(() => nodos(screen))).some((x) => /^Hola, /.test(x.label))) {
    // El cierre de sesión funciona, pero el helper puede no ver el modal de confirmación y reintentar sobre una cuenta ya cerrada.
    await r(() => new MiCuentaScreen(screen, p).cerrarSesion()).catch(() => undefined);
    await pausa(3000);
    tocar(...TAB_CUENTA);
    await pausa(3500);
    if ((await r(() => nodos(screen))).some((x) => /^Hola, /.test(x.label))) throw new Error('la sesión no se cerró');
  }
  await sesion(screen, p, cp, correo(td), SALUDO);
}


/** Deja la app como invitado (cierra la sesión si hay una). */
async function comoInvitado(screen: any, p: any) {
  await asegurarApp(screen);
  tocar(...TAB_CUENTA);
  await pausa(3500);
  if ((await r(() => nodos(screen))).some((x) => /^Hola, /.test(x.label))) {
    await r(() => new MiCuentaScreen(screen, p).cerrarSesion()).catch(() => undefined);
    await pausa(3000);
    tocar(...TAB_CUENTA);
    await pausa(3500);
    if ((await r(() => nodos(screen))).some((x) => /^Hola, /.test(x.label))) throw new Error('la sesión no se cerró');
  }
}

async function abrirBusqueda(screen: any, p: any): Promise<BuscarScreen> {
  tocar(...TAB_BUSCAR);
  await pausa(3500);
  const b = new BuscarScreen(screen, p);
  await r(() => b.waitUntilReady());
  await pausa(1200);
  return b;
}

/** Títulos de sección de la pantalla de búsqueda, de arriba hacia abajo. */
async function secciones(screen: any, p: any): Promise<string[]> {
  const t = await r(() => new PdpScreen(screen, p).textos());
  const hallados = t.filter((x) => RECIENTES.test(x.t) || VISTO.test(x.t) || MAS_BUSCADO.test(x.t)).sort((a, b) => a.y - b.y);
  return hallados.map((x) => x.t);
}

async function textos(screen: any, p: any): Promise<string[]> {
  return (await r(() => new PdpScreen(screen, p).textos())).map((x) => x.t).filter(Boolean);
}

async function buscarTermino(screen: any, p: any, termino: string) {
  const b = await abrirBusqueda(screen, p);
  const srp = await r(() => b.buscar(termino));
  await r(() => b.resultadoPara(termino).waitFor({ state: 'visible', timeout: 40000 }));
  await pausa(1500);
  return { b, srp };
}

/** Visita la PDP del SKU desde los favoritos de la cuenta (sin tocar el historial de búsquedas). */
async function visitarDesdeFavoritos(screen: any, p: any, sku: string) {
  const nombre = sku.includes('675191') ? /Albondigas Super Pollo/i : new RegExp(sku);
  tocar(...TAB_PRODUCTOS);
  await pausa(5000);
  const fila = screen.getByText(nombre).first();
  await r(() => fila.waitFor({ state: 'visible', timeout: 40000 }));
  await r(() => fila.tap());
  const pdp = await r(() => new PdpScreen(screen, p).waitUntilReady());
  await pausa(2000);
  atras();
  await pausa(2500);
  return pdp;
}

/** Visita la PDP del SKU buscándolo (deja además el SKU como búsqueda reciente). */
async function visitarPorBusqueda(screen: any, p: any, sku: string) {
  const { srp } = await buscarTermino(screen, p, sku);
  await r(() => srp.tarjeta(sku).tap());
  await r(() => new PdpScreen(screen, p).waitUntilReady());
  await pausa(1800);
  atras();
  await pausa(1500);
  atras();
  await pausa(2500);
}

/** Arma el historial de la sesión actual: búsquedas (sin tocar PDP) y visitas a la PDP del SKU por favoritos. */
async function armarHistorial(screen: any, p: any, o: { busquedas?: string[]; skuVisita?: string }) {
  for (const t of o.busquedas ?? []) {
    await buscarTermino(screen, p, t);
    atras();
    await pausa(2500);
  }
  if (o.skuVisita) await visitarDesdeFavoritos(screen, p, o.skuVisita);
}

async function hayVisitas(screen: any, p: any) {
  await abrirBusqueda(screen, p);
  return (await secciones(screen, p)).some((x) => VISTO.test(x));
}

test.describe.configure({ timeout: 1200000 });
test.describe('B2C-100 — pantalla de búsqueda con sesión (Android)', () => {
  test('TC-100-APP-009 · No se muestra «Lo último que viste» sin visitas a PDP en la sesión [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-100-APP-009';
    await sesionNueva(screen, p, cp, testData);
    await buscarTermino(screen, p, 'leche');
    atras();
    await pausa(2500);
    const b = await abrirBusqueda(screen, p);
    await r(() => b.capturarEvidencia(cp, 2, 'pantalla de búsqueda tras buscar leche'));
    const s = await secciones(screen, p);
    test.info().annotations.push({ type: 'secciones', description: JSON.stringify(s) });
    expect(s.some((x) => RECIENTES.test(x)), 'se muestra «Tus búsquedas recientes»').toBe(true);
    expect(s.some((x) => MAS_BUSCADO.test(x)), 'se muestra «Lo más buscado»').toBe(true);
    expect(s.some((x) => VISTO.test(x)), 'no se muestra «Lo último que viste»').toBe(false);
  });

  test('TC-100-APP-005 · Tocar un chip de búsqueda reciente redirige a la SRP del término [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-100-APP-005';
    await conSesion(screen, p, cp, testData);
    await armarHistorial(screen, p, { busquedas: ['leche'] });
    const b = await abrirBusqueda(screen, p);
    await r(() => b.capturarEvidencia(cp, 2, 'búsquedas recientes con el chip leche'));
    await r(() => screen.getByText(/^leche$/).first().tap());
    await r(() => b.resultadoPara('leche').waitFor({ state: 'visible', timeout: 40000 }));
    await pausa(1500);
    await r(() => b.capturarEvidencia(cp, 4, 'SRP de leche'));
    expect(await b.resultadoPara('leche').isVisible(), 'se muestra la SRP de leche').toBe(true);
  });

  test('TC-100-APP-003 · «Tus búsquedas recientes» muestra los términos de la sesión como chips horizontales [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-100-APP-003';
    await conSesion(screen, p, cp, testData);
    await armarHistorial(screen, p, { busquedas: ['leche', 'fillet'] });
    const b = await abrirBusqueda(screen, p);
    await r(() => b.capturarEvidencia(cp, 2, 'búsquedas recientes'));
    const t = await r(() => new PdpScreen(screen, p).textos());
    const chips = t.filter((x) => /^(leche|fillet)$/i.test(x.t) && x.y < 700);
    test.info().annotations.push({ type: 'chips', description: JSON.stringify(chips) });
    expect([...new Set(chips.map((x) => x.t.toLowerCase()))].sort(), 'chips leche y fillet').toEqual(['fillet', 'leche']);
    const ys = new Set(chips.map((x) => Math.round(x.y / 40)));
    expect(ys.size, 'los chips están en la misma fila (disposición horizontal)').toBe(1);
  });

  test('TC-100-APP-002 · La pantalla de búsqueda muestra las 3 secciones en orden a pantalla completa [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-100-APP-002';
    await conSesion(screen, p, cp, testData);
    await armarHistorial(screen, p, { busquedas: ['leche'], skuVisita: token(testData, 'SKU_VALID_001')! });
    const b = await abrirBusqueda(screen, p);
    await r(() => b.capturarEvidencia(cp, 2, 'pantalla de búsqueda con las 3 secciones'));
    const s = await secciones(screen, p);
    test.info().annotations.push({ type: 'secciones', description: JSON.stringify(s) });
    expect(s.length, '3 secciones').toBe(3);
    expect(RECIENTES.test(s[0]) && VISTO.test(s[1]) && MAS_BUSCADO.test(s[2]), 'orden: recientes, lo último que viste, lo más buscado').toBe(true);
    expect(await b.cancelar.isVisible(), '«Cancelar» a la derecha').toBe(true);
  });

  test('TC-100-APP-017 · Con 1 o 2 caracteres se mantiene el contenido por defecto sin búsqueda dinámica [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-100-APP-017';
    await conSesion(screen, p, cp, testData);
    await armarHistorial(screen, p, { busquedas: ['leche'], skuVisita: token(testData, 'SKU_VALID_001')! });
    const b = await abrirBusqueda(screen, p);
    const antes = await secciones(screen, p);
    await r(() => b.campo.fill('le'));
    await pausa(4000);
    await r(() => b.capturarEvidencia(cp, 4, 'con 2 caracteres'));
    const despues = await secciones(screen, p);
    test.info().annotations.push({ type: 'secciones', description: JSON.stringify({ antes, despues }) });
    expect(antes.length, '3 secciones por defecto').toBe(3);
    expect(despues, 'con 2 caracteres siguen las 3 secciones').toEqual(antes);
  });

  test('TC-100-APP-029 · Al borrar hasta 2 caracteres desde 3 o más la pantalla recupera el contenido por defecto [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-100-APP-029';
    await conSesion(screen, p, cp, testData);
    await armarHistorial(screen, p, { busquedas: ['leche'], skuVisita: token(testData, 'SKU_VALID_001')! });
    const b = await abrirBusqueda(screen, p);
    const antes = await secciones(screen, p);
    await r(() => b.campo.fill('lec'));
    await pausa(7000);
    await r(() => b.capturarEvidencia(cp, 4, 'con 3 caracteres (resultados dinámicos)'));
    const con3 = await secciones(screen, p);
    execSync('adb shell input keyevent 67', { timeout: 15000 });
    await pausa(5000);
    await r(() => b.capturarEvidencia(cp, 6, 'tras borrar 1 carácter (quedan 2)'));
    const con2 = await secciones(screen, p);
    test.info().annotations.push({ type: 'secciones', description: JSON.stringify({ antes, con3, con2 }) });
    expect(con3.length, 'con 3 caracteres se muestran resultados dinámicos y no las secciones por defecto').toBeLessThan(antes.length);
    expect(con2, 'con 2 caracteres se restauran las secciones por defecto').toEqual(antes);
  });

  test('TC-100-APP-007 · Tocar un producto de «Lo último que viste» redirige a su PDP [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-100-APP-007';
    const sku = token(testData, 'SKU_VALID_001')!;
    await conSesion(screen, p, cp, testData);
    await armarHistorial(screen, p, { skuVisita: sku });
    const b = await abrirBusqueda(screen, p);
    await r(() => b.capturarEvidencia(cp, 2, '«Lo último que viste»'));
    const tarjeta = screen.getByText(/Albondigas Super Pollo/i).first();
    const hay = await tarjeta.isVisible().catch(() => false);
    test.info().annotations.push({ type: 'tarjeta en Lo último que viste', description: String(hay) });
    expect(hay, 'se muestra el producto visitado').toBe(true);
    await r(() => tarjeta.tap());
    const pdp = await r(() => new PdpScreen(screen, p).waitUntilReady());
    await pausa(1500);
    await r(() => pdp.capturarEvidencia(cp, 4, 'PDP del producto'));
    expect(await pdp.galeria.isVisible(), 'se muestra la PDP').toBe(true);
  });

  test('TC-100-APP-016 · «Limpiar» elimina «Lo último que viste» y no reaparece al reabrir [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-100-APP-016';
    await conSesion(screen, p, cp, testData);
    await armarHistorial(screen, p, { skuVisita: token(testData, 'SKU_VALID_001')! });
    const b = await abrirBusqueda(screen, p);
    const antes = await secciones(screen, p);
    await r(() => b.capturarEvidencia(cp, 2, 'antes de limpiar'));
    expect(antes.some((x) => VISTO.test(x)), 'se muestra «Lo último que viste»').toBe(true);
    // El «Limpiar» de «Lo último que viste» es el último de la pantalla (el de recientes va antes).
    await r(() => screen.getByText('Limpiar', { exact: true }).last().tap());
    await pausa(2500);
    await r(() => b.capturarEvidencia(cp, 4, 'tras tocar Limpiar'));
    const tras = await secciones(screen, p);
    await r(() => b.cancelar.tap());
    await pausa(2500);
    const b2 = await abrirBusqueda(screen, p);
    await r(() => b2.capturarEvidencia(cp, 6, 'al reabrir la búsqueda'));
    const reabierta = await secciones(screen, p);
    test.info().annotations.push({ type: 'secciones', description: JSON.stringify({ antes, tras, reabierta }) });
    expect(tras.some((x) => VISTO.test(x)), '«Lo último que viste» desaparece').toBe(false);
    expect(reabierta.some((x) => VISTO.test(x)), 'no reaparece al reabrir').toBe(false);
  });

  test('TC-100-APP-015 · «Limpiar» elimina «Tus búsquedas recientes» y no reaparece al reabrir [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-100-APP-015';
    await conSesion(screen, p, cp, testData);
    await armarHistorial(screen, p, { busquedas: ['leche'] });
    const b = await abrirBusqueda(screen, p);
    const antes = await secciones(screen, p);
    await r(() => b.capturarEvidencia(cp, 2, 'antes de limpiar'));
    expect(antes.some((x) => RECIENTES.test(x)), 'se muestra «Tus búsquedas recientes»').toBe(true);
    await r(() => screen.getByText('Limpiar', { exact: true }).first().tap());
    await pausa(2500);
    await r(() => b.capturarEvidencia(cp, 4, 'tras tocar Limpiar'));
    const tras = await secciones(screen, p);
    await r(() => b.cancelar.tap());
    await pausa(2500);
    const b2 = await abrirBusqueda(screen, p);
    await r(() => b2.capturarEvidencia(cp, 6, 'al reabrir la búsqueda'));
    const reabierta = await secciones(screen, p);
    test.info().annotations.push({ type: 'secciones', description: JSON.stringify({ antes, tras, reabierta }) });
    expect(tras.some((x) => RECIENTES.test(x)), '«Tus búsquedas recientes» desaparece').toBe(false);
    expect(reabierta.some((x) => RECIENTES.test(x)), 'no reaparece al reabrir').toBe(false);
  });

  test('TC-100-APP-008 · No se muestra «Tus búsquedas recientes» sin búsquedas en la sesión [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-100-APP-008';
    await conSesion(screen, p, cp, testData);
    await armarHistorial(screen, p, { skuVisita: token(testData, 'SKU_VALID_001')! });
    const b = await abrirBusqueda(screen, p);
    await r(() => b.capturarEvidencia(cp, 2, 'búsqueda sin búsquedas previas y con una visita a PDP'));
    const s = await secciones(screen, p);
    test.info().annotations.push({ type: 'secciones', description: JSON.stringify(s) });
    expect(s.some((x) => VISTO.test(x)), 'se muestra «Lo último que viste»').toBe(true);
    expect(s.some((x) => MAS_BUSCADO.test(x)), 'se muestra «Lo más buscado»').toBe(true);
    expect(s.some((x) => RECIENTES.test(x)), 'no se muestra «Tus búsquedas recientes»').toBe(false);
  });

  test('TC-100-APP-004 · Las búsquedas recientes no se conservan al cerrar sesión e iniciar una nueva [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-100-APP-004';
    await conSesion(screen, p, cp, testData);
    await armarHistorial(screen, p, { busquedas: ['leche'] });
    const b0 = await abrirBusqueda(screen, p);
    await r(() => b0.capturarEvidencia(cp, 2, 'leche registrada en búsquedas recientes'));
    const antes = await secciones(screen, p);
    await sesionNueva(screen, p, cp, testData);
    const b = await abrirBusqueda(screen, p);
    await r(() => b.capturarEvidencia(cp, 4, 'búsqueda tras cerrar sesión e iniciar una nueva'));
    const s = await secciones(screen, p);
    const t = await textos(screen, p);
    test.info().annotations.push({ type: 'secciones', description: JSON.stringify({ antes, despues: s }) });
    expect(antes.some((x) => RECIENTES.test(x)), 'antes había búsquedas recientes').toBe(true);
    expect(s.some((x) => RECIENTES.test(x)), 'no se muestra «Tus búsquedas recientes»').toBe(false);
    expect(t.some((x) => /^leche$/i.test(x)), 'no aparece el término leche como chip reciente').toBe(false);
  });

  test('TC-100-APP-006 · «Lo último que viste» muestra los 6 últimos productos visitados con imagen y nombre [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-100-APP-006';
    const skus = [token(testData, 'SKU_VALID_001')!, '000000000400254005-UN', '000000000000037972-KG', token(testData, 'SKU_PROM_NxM')!, token(testData, 'SKU_PROM_2x1')!, token(testData, 'SKU_PROM_NxPRECIO')!, '000000000000662457-UN'];
    await conSesion(screen, p, cp, testData);
    for (const sku of skus) await visitarPorBusqueda(screen, p, sku);
    const b = await abrirBusqueda(screen, p);
    await pausa(2000);
    await r(() => b.capturarEvidencia(cp, 2, '«Lo último que viste» tras 7 visitas'));
    const t = await r(() => new PdpScreen(screen, p).textos());
    const ids = t.map((x) => x.id).filter((x) => /^product-/.test(x));
    test.info().annotations.push({ type: 'productos en pantalla', description: JSON.stringify(ids) });
    expect(ids.some((x) => x.includes('675191')), 'no muestra el 1.º producto visitado').toBe(false);
    expect(ids.some((x) => x.includes('662457')), 'muestra el último producto visitado').toBe(true);
  });

  test('TC-100-APP-022 · El buscador no acepta más de 100 caracteres ni muestra error [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-100-APP-022';
    const texto = 'Dejar el pedido en conserjeria del edificio y avisar por telefono al llegar Si no hay nadie tocar el timbre';
    await comoInvitado(screen, p);
    const b = await abrirBusqueda(screen, p);
    // El agente de texto del emulador se agota con textos largos y adb pierde pulsaciones: se escribe de a
    // pocos caracteres (por adb, %s = espacio), leyendo el campo tras cada tramo y reponiendo lo que falte.
    const leer = async () => ((await r(() => b.campo.getText())) || '').replace(/\s+$/, '');
    await r(() => b.campo.tap());
    await pausa(1500);
    let sinAvance = 0;
    let previo = '';
    for (let k = 0; k < 80 && sinAvance < 4; k++) {
      let actual = await leer();
      if (actual.length > 0 && !texto.startsWith(actual) && !actual.startsWith(texto.slice(0, 100))) {
        // Texto corrupto: se borra y se parte de nuevo.
        for (let d = 0; d < actual.length + 5; d++) execSync('adb shell input keyevent 67', { timeout: 15000 });
        await pausa(1500);
        actual = await leer();
      }
      if (actual.length >= 100) break;
      const faltante = texto.slice(actual.length, actual.length + 6);
      if (!faltante) break;
      execSync(`adb shell input text '${faltante.replace(/ /g, '%s')}'`, { timeout: 20000 });
      await pausa(1200);
      const nuevo = await leer();
      sinAvance = nuevo === previo ? sinAvance + 1 : 0;
      previo = nuevo;
    }
    await pausa(2500);
    await r(() => b.capturarEvidencia(cp, 2, 'caja de búsqueda tras ingresar el texto de 107 caracteres'));
    const valor = ((await r(() => b.campo.getText())) || '').trim();
    const t = await textos(screen, p);
    test.info().annotations.push({ type: 'caja de búsqueda', description: JSON.stringify({ largo: valor.length, valor, textos: t.slice(0, 12) }) });
    expect(texto.length, 'el texto pegado supera los 100 caracteres').toBeGreaterThan(100);
    expect(valor, 'la caja contiene los primeros 100 caracteres del texto').toBe(texto.slice(0, 100));
    expect(t.some((x) => /error|no se pudo|inv[aá]lid|m[aá]ximo/i.test(x)), 'no se muestra ningún mensaje de error').toBe(false);
  });

  test('TC-100-APP-026 · Sin sugerencias de autocompletado no se renderiza la sección de chips [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-100-APP-026';
    await comoInvitado(screen, p);
    const b = await abrirBusqueda(screen, p);
    await r(() => b.campo.fill('papaya'));
    await pausa(9000);
    await r(() => b.capturarEvidencia(cp, 2, 'pantalla de sugerencias con papaya (sin tocar Buscar)'));
    const t = await r(() => new PdpScreen(screen, p).textos());
    test.info().annotations.push({ type: 'textos', description: JSON.stringify(t.map((x) => `${x.t}@${x.y}`).filter((x) => !x.startsWith('@')).slice(0, 30)) });
  });
});
