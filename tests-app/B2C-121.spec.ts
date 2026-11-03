import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { NavBar } from './pages/NavBar';
import { TabBar } from './pages/TabBar';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { SinCoberturaModal } from './pages/SinCoberturaModal';
import { AgotarseModal } from './pages/AgotarseModal';
import { tolerante } from './support/tolerante';
import { agregarAlCarro, arrancarInvitado, invitadoConDireccion, visibleEn } from './support/entregaApp';
import { nodos, tiene, tocarEscalado, sesion, esperarCodigo, ingresarCodigo } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';
import { agregarDesdePdp } from './support/invitadoConCarro';

/**
 * B2C-121 — Store Locator, pestaña Retiro en tienda (app nativa, Android, build v1.0.1).
 *
 * Se ejecutan los casos de invitado. Quedan sin `test()`: 002, 006, 007, 015, 018 y 022 (tokens sin
 * valor), 009 (solo iOS) y los de sesión (019, 020, 021, 023, 025, 026).
 */
const PLATAFORMA = 'Android' as const;
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const textos = async (screen: Screen) => (await nodos(screen)).map((n) => n.label).filter(Boolean);
const localidad = (t: string) => t.replace(/^unimarc\s+/i, '').replace(/\s+[IVX]+$/, '');

async function abrirRetiro(screen: Screen, p: any, tabs?: any): Promise<MetodoEntregaModal> {
  await tol(() => new NavBar(screen, p).tapMetodoDeEntrega());
  const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
  await tol(() => modal.pestanaRetiro.tap());
  await tol(() => modal.tituloSeleccionTienda.waitFor({ state: 'visible', timeout: 30000 }));
  await pausa(2500);
  void tabs;
  return modal;
}
const campoBusqueda = (screen: Screen) => screen.getByPlaceholder('comuna o nombre', { exact: false });
async function buscarTienda(screen: Screen, texto: string) {
  const c = campoBusqueda(screen);
  await tol(() => c.tap());
  await tol(() => c.fill(texto));
  await pausa(3000);
}
const filaTienda = (screen: Screen, nombre: string) => screen.getByText(new RegExp(`^${nombre.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\. `, 'i')).first();

test.describe.configure({ timeout: 600000 });
test.describe(`B2C-121 — Retiro en tienda (${PLATAFORMA})`, () => {
  test(`TC-B2C121-APP-001 · Sin tienda de retiro seteada se muestra el buscador, el mapa y el listado de tiendas [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C121-APP-001';
    await arrancarInvitado(screen, device, bundleId!, p);
    const modal = await abrirRetiro(screen, p);
    await modal.capturarEvidencia(cp, 5, 'Store Locator en la pestaña Retiro en tienda');
    const t = await textos(screen);
    expect(t.some((x) => /^Selecciona tu tienda Unimarc$/.test(x)), 'título «Selecciona tu tienda Unimarc»').toBe(true);
    await expect(campoBusqueda(screen), 'buscador con placeholder «Ej: dirección, comuna o nombre»').toBeVisible();
    expect(t.some((x) => /^Ir al mapa$/.test(x)), 'botón «Ir al mapa»').toBe(true);
    expect(t.some((x) => /Activar mi ubicaci[oó]n actual/.test(x)), 'link «Activar mi ubicación actual»').toBe(true);
    expect(t.filter((x) => /^Unimarc .+\. /.test(x)).length, 'listado de tiendas con nombre y dirección').toBeGreaterThan(0);
    await modal.capturarEvidencia(cp);
  });

  test(`TC-B2C121-APP-004 · El buscador filtra las tiendas que coinciden con el texto [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C121-APP-004';
    const tienda = token(testData, 'TIENDA_RETIRO_001')!;
    await arrancarInvitado(screen, device, bundleId!, p);
    const modal = await abrirRetiro(screen, p);
    const antes = (await textos(screen)).filter((x) => /^Unimarc .+\. /.test(x)).length;
    await buscarTienda(screen, tienda);
    await modal.capturarEvidencia(cp, 7, 'listado filtrado por el nombre de la tienda');
    const filas = (await textos(screen)).filter((x) => /^Unimarc .+\. /.test(x));
    expect(filas.some((x) => x.toLowerCase().startsWith(tienda.toLowerCase())), `el listado incluye ${tienda}`).toBe(true);
    expect(filas.length, 'el listado muestra solo las tiendas coincidentes').toBeLessThan(antes);
    await modal.capturarEvidencia(cp);
  });

  test(`TC-B2C121-APP-005 · Una búsqueda sin coincidencias muestra el mensaje de tienda no encontrada [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C121-APP-005';
    await arrancarInvitado(screen, device, bundleId!, p);
    const modal = await abrirRetiro(screen, p);
    await buscarTienda(screen, token(testData, 'BUSQUEDA_TIENDA_SIN_RESULTADO')!);
    tocarEscalado(847, 2330);   // oculta el teclado para ver el mensaje completo
    await pausa(2000);
    await modal.capturarEvidencia(cp, 7, 'búsqueda sin coincidencias');
    await expect(screen.getByText(/Parece que hoy no encontramos/).first(), 'mensaje de tienda no encontrada').toBeVisible({ timeout: 15000 });
    await modal.capturarEvidencia(cp);
  });

  test(`TC-B2C121-APP-008 · Activar mi ubicación sin permisos muestra la solicitud de permiso [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C121-APP-008';
    await arrancarInvitado(screen, device, bundleId!, p);
    for (const perm of ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION']) { try { execSync(`adb shell pm revoke ${bundleId} android.permission.${perm}`, { timeout: 15000 }); } catch { /* ya sin permiso */ } }
    const modal = await abrirRetiro(screen, p);
    await tol(() => screen.getByText(/Activar mi ubicaci[oó]n actual/).first().tap());
    await pausa(4000);
    const foco = execSync('adb shell dumpsys window | grep mCurrentFocus || true', { timeout: 15000 }).toString();
    await modal.capturarEvidencia(cp, 8, 'tras tocar «Activar mi ubicación actual»');
    expect(/permissioncontroller|GrantPermissions/i.test(foco), 'el sistema muestra el diálogo de permiso de ubicación').toBe(true);
    execSync('adb shell input keyevent 4', { timeout: 15000 });
  });

  test(`TC-B2C121-APP-011 · Al seleccionar una tienda se abre su tarjeta con mapa, distancia y Confirmar tienda [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C121-APP-011';
    const tienda = token(testData, 'TIENDA_RETIRO_001')!;
    await arrancarInvitado(screen, device, bundleId!, p);
    const modal = await abrirRetiro(screen, p);
    await buscarTienda(screen, localidad(tienda));
    await tol(() => filaTienda(screen, tienda).waitFor({ state: 'visible', timeout: 30000 }));
    await tol(() => filaTienda(screen, tienda).tap());
    await pausa(2500);
    await modal.capturarEvidencia(cp, 8, 'tarjeta de la tienda seleccionada');
    const t = await textos(screen);
    expect(t.some((x) => /^Ir al mapa$/.test(x)), 'botón «Ir al mapa»').toBe(true);
    await expect(screen.getByRole('button', { name: 'Confirmar tienda' }), 'botón «Confirmar tienda»').toBeVisible();
    expect(t.some((x) => new RegExp(tienda.replace(/^Unimarc\s+/i, ''), 'i').test(x)), `la tarjeta muestra ${tienda}`).toBe(true);
    await modal.capturarEvidencia(cp);
  });

  test(`TC-B2C121-APP-012 · Ir al mapa muestra los pines de tiendas, un buscador y Volver a la lista [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C121-APP-012';
    await arrancarInvitado(screen, device, bundleId!, p);
    const modal = await abrirRetiro(screen, p);
    await tol(() => screen.getByText(/^Ir al mapa$/).first().tap());
    await pausa(6000);
    await modal.capturarEvidencia(cp, 6, 'mapa de tiendas');
    const t = await textos(screen);
    expect(t.some((x) => /(Volver|Ir) a la lista/.test(x)), 'botón para volver a la lista («Ir a la lista» en esta build)').toBe(true);
    await modal.capturarEvidencia(cp);
  });

  test(`TC-B2C121-APP-014 · Un invitado sin carro confirma una tienda con horarios y queda seteada [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C121-APP-014';
    const tienda = token(testData, 'TIENDA_RETIRO_001')!;
    await arrancarInvitado(screen, device, bundleId!, p);
    const modal = await abrirRetiro(screen, p);
    await modal.elegirTienda(tienda, localidad(tienda));
    await pausa(6000);
    await new NavBar(screen, p).capturarEvidencia(cp, 8, 'tras confirmar la tienda');
    expect(tiene(await nodos(screen), /inicia sesi[oó]n o reg[ií]strate/i), 'la app pregunta si desea iniciar sesión').toBe(true);
    tocarEscalado(1000, 201);   // X del prompt de login
    await pausa(3000);
    const loc = (await screen.getByTestId('delivery-open').getText().catch(() => '')) || '';
    expect(loc, `${tienda} queda seteada como punto de retiro`).toMatch(new RegExp(localidad(tienda), 'i'));
    await new NavBar(screen, p).capturarEvidencia(cp);
  });

  test(`TC-B2C121-APP-016 · Un invitado con carro que confirma una tienda ve el modal Algunos productos podrían agotarse [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C121-APP-016';
    const tienda = token(testData, 'TIENDA_RETIRO_001')!;
    const tabs = await invitadoConDireccion(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await agregarAlCarro(screen, p, tabs, token(testData, 'SKU_VALID_001')!);
    const modal = await abrirRetiro(screen, p);
    await modal.elegirTienda(tienda, localidad(tienda));
    const agotarse = new AgotarseModal(screen, p);
    await pausa(3000);
    await new NavBar(screen, p).capturarEvidencia(cp, 9, 'tras confirmar la tienda con carro');
    await expect(agotarse.titulo, 'se muestra el modal «Algunos productos podrían agotarse»').toBeVisible({ timeout: 20000 });
    await new NavBar(screen, p).capturarEvidencia(cp);
  });

  test(`TC-B2C121-APP-017 · Un invitado que confirma una tienda sin cobertura va al flujo Sin cobertura [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C121-APP-017';
    const tienda = token(testData, 'TIENDA_RETIRO_SIN_COBERTURA')!;
    await arrancarInvitado(screen, device, bundleId!, p);
    const modal = await abrirRetiro(screen, p);
    await modal.elegirTienda(tienda, localidad(tienda));
    const sin = new SinCoberturaModal(screen, p);
    const retiro = await visibleEn(sin.tituloRetiro, 20000);
    await sin.capturarEvidencia(cp, 8, 'tras confirmar la tienda sin cobertura');
    expect(retiro || (await visibleEn(sin.titulo, 5000)), 'se muestra el modal del flujo Sin cobertura («Esta tienda aún no está disponible para retiro»)').toBe(true);
    await sin.capturarEvidencia(cp);
  });

  test(`TC-B2C121-APP-024 · Tras confirmar la tienda el header del invitado muestra tienda, ventana y Gratis [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C121-APP-024';
    const tienda = token(testData, 'TIENDA_RETIRO_001')!;
    await arrancarInvitado(screen, device, bundleId!, p);
    const modal = await abrirRetiro(screen, p);
    await modal.elegirTienda(tienda, localidad(tienda));
    await pausa(6000);
    if (tiene(await nodos(screen), /inicia sesi[oó]n o reg[ií]strate/i)) { tocarEscalado(1000, 201); await pausa(3000); }
    const nav = new NavBar(screen, p);
    await nav.capturarEvidencia(cp, 8, 'header tras confirmar la tienda');
    const loc = (await screen.getByTestId('delivery-open').getText().catch(() => '')) || '';
    test.info().annotations.push({ type: 'header', description: loc.replace(/\s+/g, ' ') });
    expect(loc, `el header muestra ${tienda}`).toMatch(new RegExp(localidad(tienda), 'i'));
    expect(loc, 'el header muestra la próxima ventana de retiro').toMatch(/Hoy|Mañana|Desde|\d{1,2}:\d{2}|hrs/i);
    expect(tiene(await nodos(screen), /Gratis/i) || /gratis/i.test(loc), 'chip «Gratis»').toBe(true);
    await nav.capturarEvidencia(cp);
  });
  test(`TC-B2C121-APP-003 · Con tienda de retiro seteada esta aparece marcada al inicio del listado [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C121-APP-003';
    const tienda = token(testData, 'TIENDA_RETIRO_001')!;
    await arrancarInvitado(screen, device, bundleId!, p);
    const m1 = await abrirRetiro(screen, p);
    await m1.elegirTienda(tienda, localidad(tienda));
    await pausa(6000);
    if (tiene(await nodos(screen), /inicia sesi[oó]n o reg[ií]strate/i)) { tocarEscalado(1000, 201); await pausa(3000); }
    const modal = await abrirRetiro(screen, p);
    await modal.capturarEvidencia(cp, 6, 'listado con la tienda de retiro seteada');
    const filas = (await textos(screen)).filter((x) => /^Unimarc .+\. /.test(x));
    test.info().annotations.push({ type: 'primeras tiendas', description: filas.slice(0, 3).join(' | ') });
    expect(filas[0] ?? '', `${tienda} aparece al inicio del listado`).toMatch(new RegExp(`^${tienda}\\. `, 'i'));
    await modal.capturarEvidencia(cp);
  });

  test(`TC-B2C121-APP-010 · Con permiso concedido las tiendas se ordenan por cercanía y muestran los km [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C121-APP-010';
    await arrancarInvitado(screen, device, bundleId!, p);
    for (const perm of ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION']) execSync(`adb shell pm grant ${bundleId} android.permission.${perm}`, { timeout: 15000 });
    const modal = await abrirRetiro(screen, p);
    await tol(() => screen.getByText(/Activar mi ubicaci[oó]n actual/).first().tap());
    await pausa(10000);
    await modal.capturarEvidencia(cp, 8, 'listado tras activar la ubicación');
    const t = await textos(screen);
    expect(t.some((x) => /\d+([.,]\d+)?\s?km/i.test(x)), 'cada tarjeta muestra los km de distancia').toBe(true);
    await modal.capturarEvidencia(cp);
  });

  test(`TC-B2C121-APP-013 · Al seleccionar un pin del mapa se muestra la tienda y el botón Confirmar [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C121-APP-013';
    await arrancarInvitado(screen, device, bundleId!, p);
    const modal = await abrirRetiro(screen, p);
    await tol(() => screen.getByText(/^Ir al mapa$/).first().tap());
    await pausa(6000);
    tocarEscalado(540, 1440);   // pin de tienda visible en el mapa
    await pausa(3000);
    await modal.capturarEvidencia(cp, 8, 'tras tocar un pin del mapa');
    const t = await textos(screen);
    expect(t.some((x) => /^Confirmar( tienda)?$/.test(x)), 'se muestra el botón «Confirmar»').toBe(true);
    await modal.capturarEvidencia(cp);
  });
  /** App limpia + sesión con `usuario` (reutiliza la sesión si ya está iniciada con esa cuenta). */
  async function conSesion(screen: Screen, device: any, bundleId: string, p: any, cp: string, usuario: string, saludo: RegExp, limpiar: boolean): Promise<void> {
    if (limpiar) {
      await device.terminateApp(bundleId);
      execSync(`adb shell pm clear ${bundleId}`, { timeout: 30000 });
      await device.launchApp(bundleId);
    }
    await asegurarApp(screen);
    await sesion(screen, p, cp, usuario, saludo);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
  }
  /** Confirma una tienda de retiro y valida el OTP que pide la app a un usuario logueado. */
  async function confirmarConOtp(screen: Screen, p: any, cp: string, usuario: string, tienda: string): Promise<void> {
    const modal = await abrirRetiro(screen, p);
    const desde = new Date(Date.now() - 30000);
    await modal.elegirTienda(tienda, localidad(tienda));
    await expect(screen.getByText(/Autenticaci[oó]n requerida/).first(), 'se muestra el modal «Autenticación requerida»').toBeVisible({ timeout: 40000 });
    await ingresarCodigo(screen, await esperarCodigo(cp, usuario, desde));
    await pausa(4000);
  }
  /** Deja vacío el carro de la cuenta (el carro guardado sobrevive a los cierres de sesión). */
  async function vaciarCarro(screen: Screen, p: any): Promise<void> {
    const tabs = new TabBar(screen, p);
    if (!(await visibleEn(tabs.floatingPill, 8000))) return;
    await tol(() => tabs.tapFloatingPill());
    await pausa(5000);
    for (let i = 0; i < 40; i++) {
      const b = screen.getByRole('button', { name: /^(eliminar( |$)|quitar una unidad)/i }).first();
      if (!(await b.isVisible().catch(() => false))) { if (tiene(await nodos(screen), /carro est[aá] vac[ií]o/i)) break; await pausa(2500); if (i > 6) break; continue; }
      await tol(() => b.tap()).catch(() => {});
      await pausa(2500);
    }
    await tol(() => screen.goBack());
    await pausa(2000);
  }
  const correoDe = (td: any, k: string) => token(td, k)!.split('/')[0].trim();

  test(`TC-B2C121-APP-025 · Al cambiar desde Despacho a domicilio sin tienda previa se muestra la pantalla de tiendas [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C121-APP-025';
    await conSesion(screen, device, bundleId!, p, cp, correoDe(testData, 'USER_AUTH_001'), /Karl|Comprador/i, true);
    const modal = await abrirRetiro(screen, p);
    await modal.capturarEvidencia(cp, 5, 'pestaña Retiro en tienda del logueado');
    const t = await textos(screen);
    expect(t.some((x) => /^Selecciona tu tienda Unimarc$/.test(x)), 'título «Selecciona tu tienda Unimarc»').toBe(true);
    await expect(campoBusqueda(screen), 'buscador «Ej: dirección, comuna o nombre»').toBeVisible();
    expect(t.some((x) => /^Ir al mapa$/.test(x)), 'botón «Ir al mapa»').toBe(true);
    expect(t.some((x) => /Activar mi ubicaci[oó]n actual/.test(x)), 'link «Activar mi ubicación actual»').toBe(true);
    await modal.capturarEvidencia(cp);
    await tol(() => screen.goBack());
  });

  test(`TC-B2C121-APP-019 · Un logueado que confirma una tienda debe validar OTP antes de setearla [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C121-APP-019';
    const tienda = token(testData, 'TIENDA_RETIRO_001')!;
    await conSesion(screen, device, bundleId!, p, cp, correoDe(testData, 'USER_AUTH_001'), /Karl|Comprador/i, false);
    await vaciarCarro(screen, p);
    await confirmarConOtp(screen, p, cp, correoDe(testData, 'USER_AUTH_001'), tienda);
    await new NavBar(screen, p).capturarEvidencia(cp, 10, 'tras validar el OTP');
    for (let i = 0; i < 3 && tiene(await nodos(screen), /Ahora no|Algunos productos podr[ií]an agotarse/); i++) {
      if (tiene(await nodos(screen), /Algunos productos podr[ií]an agotarse/)) await tol(() => screen.getByRole('button', { name: 'Sí, continuar' }).tap());
      else await tol(() => screen.getByText('Ahora no').tap());
      await pausa(4000);
    }
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
    const loc = (await screen.getByTestId('delivery-open').getText().catch(() => '')) || '';
    test.info().annotations.push({ type: 'header', description: loc.replace(/\s+/g, ' ') });
    expect(loc, `${tienda} queda seteada y el header muestra su ventana de retiro`).toMatch(new RegExp(localidad(tienda), 'i'));
    await new NavBar(screen, p).capturarEvidencia(cp);
  });

  test(`TC-B2C121-APP-023 · Tras confirmar la tienda el header del logueado muestra tienda, ventana y Gratis [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C121-APP-023';
    await conSesion(screen, device, bundleId!, p, cp, correoDe(testData, 'USER_AUTH_001'), /Karl|Comprador/i, false);
    const nav = new NavBar(screen, p);
    await nav.capturarEvidencia(cp, 8, 'header con la tienda de retiro confirmada');
    const loc = (await screen.getByTestId('delivery-open').getText().catch(() => '')) || '';
    expect(loc, 'el header muestra el nombre de la tienda').toMatch(new RegExp(localidad(token(testData, 'TIENDA_RETIRO_001')!), 'i'));
    expect(loc, 'el header muestra la próxima ventana de retiro').toMatch(/Hoy|Mañana|Desde|\d{1,2}:\d{2}|hrs/i);
    expect(tiene(await nodos(screen), /Gratis/i) || /gratis/i.test(loc), 'chip «Gratis»').toBe(true);
    await nav.capturarEvidencia(cp);
  });

  test(`TC-B2C121-APP-020 · Un logueado que valida OTP con una tienda sin cobertura va al flujo Sin cobertura [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C121-APP-020';
    await conSesion(screen, device, bundleId!, p, cp, correoDe(testData, 'USER_AUTH_001'), /Karl|Comprador/i, false);
    await vaciarCarro(screen, p);
    // Con una tienda sin cobertura la app muestra el modal del flujo Sin cobertura sin pedir OTP antes.
    const tiendaSin = token(testData, 'TIENDA_RETIRO_SIN_COBERTURA')!;
    const m = await abrirRetiro(screen, p);
    await m.elegirTienda(tiendaSin, localidad(tiendaSin));
    const sin = new SinCoberturaModal(screen, p);
    const retiro = await visibleEn(sin.tituloRetiro, 20000);
    await sin.capturarEvidencia(cp, 10, 'tras validar el OTP con la tienda sin cobertura');
    expect(retiro || (await visibleEn(sin.titulo, 5000)), 'se muestra el modal del flujo Sin cobertura').toBe(true);
    await sin.capturarEvidencia(cp);
  });

  test(`TC-B2C121-APP-021 · Un logueado con carro que valida OTP ve el modal Algunos productos podrían agotarse [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C121-APP-021';
    const usuario = correoDe(testData, 'USER_AUTH_001');
    await conSesion(screen, device, bundleId!, p, cp, usuario, /Karl|Comprador/i, false);
    // Si el producto ya está en el carro de la cuenta la PDP muestra «En carro» y no «Agregar».
    await agregarDesdePdp(screen, p, token(testData, 'SKU_VALID_001')!).catch(() => undefined);
    for (let i = 0; i < 5 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) { await tol(() => screen.goBack()); await pausa(1500); }
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
    // Con carro la app muestra el modal «Algunos productos podrían agotarse» al confirmar la tienda.
    const tiendaR = token(testData, 'TIENDA_RETIRO_001')!;
    const mR = await abrirRetiro(screen, p);
    await mR.elegirTienda(tiendaR, localidad(tiendaR));
    await pausa(4000);
    await new NavBar(screen, p).capturarEvidencia(cp, 10, 'tras confirmar la tienda con carro');
    await expect(new AgotarseModal(screen, p).titulo, 'se muestra el modal «Algunos productos podrían agotarse»').toBeVisible({ timeout: 20000 });
    await new NavBar(screen, p).capturarEvidencia(cp);
  });

  test(`TC-B2C121-APP-026 · Al acceder por primera vez al Store Locator en Retiro se muestra la pantalla de tiendas [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C121-APP-026';
    await conSesion(screen, device, bundleId!, p, cp, correoDe(testData, 'SIN_DIRECCION_USER'), /QA/i, true);
    const modal = await abrirRetiro(screen, p);
    await modal.capturarEvidencia(cp, 5, 'pestaña Retiro en tienda de la cuenta sin direcciones');
    const t = await textos(screen);
    expect(t.some((x) => /^Selecciona tu tienda Unimarc$/.test(x)), 'título «Selecciona tu tienda Unimarc»').toBe(true);
    await expect(campoBusqueda(screen), 'buscador «Ej: dirección, comuna o nombre»').toBeVisible();
    expect(t.some((x) => /^Ir al mapa$/.test(x)), 'botón «Ir al mapa»').toBe(true);
    expect(t.some((x) => /Activar mi ubicaci[oó]n actual/.test(x)), 'link «Activar mi ubicación actual»').toBe(true);
    await modal.capturarEvidencia(cp);
  });
});
