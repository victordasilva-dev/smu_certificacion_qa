import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { LoadedTestData } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { RetiroEnTienda } from './pages/RetiroEnTienda';
import { PLPCategoriaPage } from './pages/PLPCategoriaPage';
import { PDPPage } from './pages/PDPPage';
import { LoginModal } from './pages/LoginModal';
import { loginConOtp } from './support/loginOtp';
import { esperarOtp, marcaOtp } from './support/otp';

/**
 * B2C-121 — Store Locator: pestaña "Retiro en tienda" (listado, buscador, mapa, selección y confirmación).
 *
 * Los casos de invitado se ejecutan con los tokens que declara su columna Test data.
 * Los casos 018, 019, 020 y 022 requieren sesión iniciada y OTP adicional al confirmar la tienda.
 *
 * Quedan sin `test()`:
 * - D/M-002, 014 y 021: {TIENDA_INACTIVA} y {TIENDA_RETIRO_SIN_SLA} están en TBD en el Excel de data.
 * - D/M-015: el carro con {SKU_VALID_001} exige una forma de entrega activa y el caso no declara
 *   ninguna (ni dirección ni una tienda distinta de {TIENDA_RETIRO_001}).
 *
 * La tienda de retiro "seteada" que piden D/M-003 y D/M-017 se deja por la UI (buscar, elegir y
 * confirmar {TIENDA_RETIRO_001}) y se captura como precondición.
 */

const PLANTILLA_GEO = { latitude: -33.4489, longitude: -70.6693 }; // Santiago centro: la planilla pide "permiso concedido" sin coordenadas

/** Botón del Store Locator con una forma de entrega aplicada (lleva «Desde:»); por CSS porque un popover de login deja el header fuera del árbol de accesibilidad. */
function botonEntrega(page: Page) {
  return page.locator('header[role="banner"] button').filter({ hasText: /desde:/i }).locator('visible=true').first();
}

function km(texto: string): number | null {
  const m = texto.match(/(\d+(?:[.,]\d+)?)\s*km/i);
  return m ? Number(m[1].replace(',', '.')) : null;
}

async function abrirRetiro(page: Page, cp: string, opts: { capturar?: boolean } = {}) {
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  await home.capturarEvidencia(cp, 2, 'Home cargado', { elemento: home.header.barraDelSitio });
  const retiro = new RetiroEnTienda(page);
  await home.header.storeLocator.click();
  await retiro.modal.esperarAbierto();
  await retiro.modal.capturarModal(cp, 4, 'Store Locator abierto');
  await retiro.tab.click();
  await retiro.esperarListado();
  if (opts.capturar !== false) await retiro.modal.capturarModal(cp, 6, 'listado de tiendas de Retiro en tienda');
  return { home, retiro };
}

/** Precondición: la tienda queda seteada como punto de retiro (buscar, elegir, confirmar). */
async function setearTienda(page: Page, cp: string, nombre: string) {
  const { home, retiro } = await abrirRetiro(page, cp, { capturar: false });
  await retiro.elegirTienda(nombre);
  await retiro.confirmarTienda();
  await expect(retiro.root, 'el drawer se cierra al confirmar').toBeHidden({ timeout: 60000 });
  await retiro.cerrarLoginSiAparece();
  await expect(botonEntrega(page), 'el header muestra la tienda').toContainText(nombre, { timeout: 30000 });
  await home.capturarEvidencia(cp, 'pre', `precondición: ${nombre} seteada`, { elemento: home.header.barraDelSitio });
  return home;
}

/** Extrae el correo de USER_AUTH_001, cuyo valor está documentado como "correo / contraseña". */
function correoUsuario(testData: LoadedTestData): string {
  const credencial = token(testData, 'USER_AUTH_001');
  if (!credencial) throw new Error('Falta el token USER_AUTH_001 en tests/data.json');
  const correo = credencial.split('/')[0].trim();
  if (!correo.includes('@')) {
    throw new Error('USER_AUTH_001 debe contener el correo de la cuenta; formato esperado: correo / contraseña');
  }
  return correo;
}

/** Inicia sesión con OTP; los casos 018/019/020/022 requieren un usuario autenticado antes de confirmar la tienda. */
async function iniciarSesion(page: Page, correo: string) {
  const home = new PaginaHabilitada(page);
  await home.goto();
  await home.cookies.aceptarSiAparece();
  await loginConOtp(page, correo);
  return home;
}

/** Cumple la precondición de D/M-020: el carro debe contener SKU_VALID_001. */
async function agregarSkuValidoAlCarro(page: Page, testData: LoadedTestData, cp: string) {
  const sku = token(testData, 'SKU_VALID_001');
  if (!sku) throw new Error('Falta SKU_VALID_001 en la data de prueba');
  const pdp = await new PDPPage(page).abrir(sku);
  await pdp.agregarVisible.click();
  await expect(pdp.header.miniCarrito, `el carro contiene ${sku}`).toHaveAttribute('aria-label', /\b1\b/, { timeout: 15000 });
  await pdp.capturarEvidencia(cp, 'pre', `carro preparado con ${sku}`, { elemento: pdp.header.barraDelSitio });
}

/** Abre el listado desde una sesión autenticada. */
async function abrirListadoRetiro(page: Page, cp: string) {
  const home = new PaginaHabilitada(page);
  await home.waitUntilReady();
  const retiro = new RetiroEnTienda(page);
  await home.header.storeLocator.click();
  await retiro.modal.esperarAbierto();
  await retiro.tab.click();
  await retiro.esperarListado();
  await retiro.modal.capturarModal(cp, 6, 'listado de tiendas de Retiro en tienda');
  return { home, retiro };
}

/** Confirma la tienda, espera el modal B2C-125 y valida el OTP solicitado para esa operación. */
async function confirmarConOtp(page: Page, retiro: RetiroEnTienda, cp: string, correo: string) {
  // Marcar antes de confirmar para no consumir el OTP usado al iniciar sesión.
  const desde = marcaOtp();
  await retiro.confirmarTienda();

  const auth = page.getByRole('dialog').filter({ hasText: /autenticaci[oó]n requerida/i }).first();
  await expect(auth, 'se solicita autenticación al confirmar la tienda').toBeVisible({ timeout: 45000 });
  await retiro.modal.capturarModal(cp, 10, 'modal Autenticación requerida');

  const codigo = await esperarOtp(correo, desde, { digitos: 6 });
  await new LoginModal(page).escribirCodigo(codigo);
  await expect(auth, 'el modal de autenticación se cierra después del OTP').toBeHidden({ timeout: 45000 });
}

async function comprobarChipGratis(page: Page, nombre: string) {
  const boton = botonEntrega(page);
  await expect(boton, 'el header muestra la tienda seleccionada').toContainText(nombre, { timeout: 30000 });
  await expect(boton, 'el header muestra la próxima ventana de retiro').toContainText(/desde:\s*\S+/i);
  const gratis = boton.getByText(/^gratis$/i).first();
  await expect(gratis, 'el chip Gratis está visible').toBeVisible();
  const colores = await gratis.evaluate((e) => {
    const rgb = (s: string) => (s.match(/\d+/g) ?? []).slice(0, 3).map(Number);
    const propio = getComputedStyle(e);
    const padre = e.parentElement ? getComputedStyle(e.parentElement) : propio;
    return { texto: rgb(propio.color), fondo: rgb(propio.backgroundColor), fondoPadre: rgb(padre.backgroundColor) };
  });
  const verde = (v: number[]) => v.length === 3 && v[1] > v[0] && v[1] > v[2];
  expect(
    verde(colores.texto) || verde(colores.fondo) || verde(colores.fondoPadre),
    `el chip Gratis se muestra en verde (${JSON.stringify(colores)})`,
  ).toBe(true);
}

function definir(L: 'D' | 'M', sufijo: 'Desktop' | 'Mobile') {
  const cp = (n: string) => `TC-B2C121-${L}-${n}`;
  const T = (n: string, nombre: string) => `${cp(n)} · ${nombre} [Guest] (${sufijo})`;
  const TA = (n: string, nombre: string) => `${cp(n)} · ${nombre} [Logueado] (${sufijo})`;
  const toca = L === 'D' ? 'hace clic' : 'toca';

  test(T('001', 'Sin tienda de retiro seteada se muestra el buscador, el mapa y el listado de tiendas'), async ({ page }) => {
    const { retiro } = await abrirRetiro(page, cp('001'));
    await expect(retiro.titulo).toBeVisible();
    await expect(retiro.buscador).toHaveAttribute('placeholder', 'Ej: dirección, comuna o nombre');
    await expect(retiro.botonIrAlMapa).toBeVisible();
    await expect(retiro.activarUbicacion).toBeVisible();
    expect(await retiro.tarjetas.count(), 'tarjetas de tiendas').toBeGreaterThan(0);
    const primera = retiro.tarjetas.first();
    await expect(primera).toContainText(/unimarc/i);
    await expect(primera.locator('input[type="radio"]')).toHaveCount(1);
    expect((await primera.innerText()).split('\n').filter((s) => s.trim()).length, 'nombre y dirección').toBeGreaterThanOrEqual(2);
    await retiro.modal.capturarModal(cp('001'));
  });

  test(T('003', 'Con tienda de retiro seteada esta aparece marcada al inicio del listado'), async ({ page, testData }) => {
    const nombre = token(testData, 'TIENDA_RETIRO_001')!;
    const home = await setearTienda(page, cp('003'), nombre);
    const retiro = new RetiroEnTienda(page);
    await home.header.storeLocator.click();
    await retiro.modal.esperarAbierto();
    await retiro.tab.click();
    await retiro.esperarListado();
    await retiro.modal.capturarModal(cp('003'), 6, 'listado con la tienda seteada');
    const nombres = await retiro.nombres();
    expect(nombres[0], `primera tienda del listado (${nombres.slice(0, 3).join(', ')})`).toBe(nombre);
    await expect(retiro.tarjetas.first().locator('input[type="radio"]')).toBeChecked();
    expect(nombres.length, 'resto de tiendas a continuación').toBeGreaterThan(1);
    await retiro.modal.capturarModal(cp('003'));
  });

  test(T('004', 'El buscador filtra las tiendas que coinciden con el texto'), async ({ page, testData }) => {
    const nombre = token(testData, 'TIENDA_RETIRO_001')!;
    const { retiro } = await abrirRetiro(page, cp('004'));
    const antes = await retiro.tarjetas.count();
    await retiro.buscar(nombre);
    await retiro.modal.capturarModal(cp('004'), 7, `búsqueda «${nombre}»`);
    const nombres = await retiro.nombres();
    expect(nombres, 'incluye la tienda buscada').toContain(nombre);
    expect(nombres.length, 'el listado se acota').toBeLessThan(antes);
    const textos = await retiro.textosTarjetas();
    for (const t of textos) expect(t.toLowerCase(), 'cada tienda coincide con el texto').toMatch(/las condes/);
    await retiro.modal.capturarModal(cp('004'));
  });

  test(T('005', 'Una búsqueda sin coincidencias muestra el mensaje de tienda no encontrada'), async ({ page, testData }) => {
    const { retiro } = await abrirRetiro(page, cp('005'));
    await retiro.buscar(token(testData, 'BUSQUEDA_TIENDA_SIN_RESULTADO')!);
    await expect(retiro.sinResultados).toBeVisible({ timeout: 15000 });
    const sub = retiro.root.getByText(/otra tienda o cambiar el m[eé]todo de entrega/i);
    await expect(sub).toBeVisible();
    test.info().annotations.push({ type: 'texto', description: `subtítulo mostrado: «${(await sub.innerText()).trim()}»` });
    expect(await retiro.root.locator('img:visible').count(), 'imagen del estado vacío').toBeGreaterThan(0);
    await retiro.modal.capturarModal(cp('005'));
  });

  async function conTiendasBloqueadas(page: Page, testData: LoadedTestData, bloquear: boolean) {
    // {STORE_LOCATOR_API_ENDPOINT}: la request que lista las tiendas (el equivalente al bloqueo de DevTools)
    const patron = /\/smu-delivery\/v1\/organizations\/[^/]+\/stores\?siteId=Unimarc/;
    expect(token(testData, 'STORE_LOCATOR_API_ENDPOINT'), 'token declarado').toContain('/smu-delivery/v1/organizations/');
    if (bloquear) await page.route(patron, (r) => r.abort());
    return patron;
  }

  test(T('006', 'Un error al cargar las tiendas muestra la pantalla de error y Reintentar recarga'), async ({ page, testData }) => {
    const patron = await conTiendasBloqueadas(page, testData, true);
    const home = await new PaginaHabilitada(page).goto();
    await home.cookies.aceptarSiAparece();
    const retiro = new RetiroEnTienda(page);
    await home.header.storeLocator.click();
    await retiro.modal.esperarAbierto();
    await retiro.tab.click();
    await expect(retiro.errorTitulo).toBeVisible({ timeout: 30000 });
    await retiro.modal.capturarModal(cp('006'), 6, 'pantalla de error de tiendas');
    expect(await retiro.root.locator('img:visible').count(), 'imagen').toBeGreaterThan(0);
    await expect(retiro.errorDetalle).toBeVisible();
    await expect(retiro.errorCodigo).toBeVisible();
    await expect(retiro.botonReintentar).toBeVisible();
    await expect(retiro.botonVolverAlInicio).toBeVisible();
    await page.unroute(patron);
    await retiro.botonReintentar.click();
    await retiro.esperarListado();
    await retiro.modal.capturarModal(cp('006'), 8, 'listado tras reintentar sin el bloqueo');
    expect(await retiro.tarjetas.count()).toBeGreaterThan(0);
  });

  test(T('007', 'Volver al inicio desde el error de tiendas redirige al Home'), async ({ page, testData }) => {
    await conTiendasBloqueadas(page, testData, true);
    const plpUrl = token(testData, 'PLP_URL')!;
    await page.goto(plpUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
    const plp = new PLPCategoriaPage(page);
    const home = new PaginaHabilitada(page);
    await home.waitUntilReady();
    await home.cookies.aceptarSiAparece();
    await home.capturarEvidencia(cp('007'), 1, 'PLP cargada', { elemento: home.header.barraDelSitio });
    void plp;
    const retiro = new RetiroEnTienda(page);
    await home.header.storeLocator.click();
    await retiro.modal.esperarAbierto();
    await retiro.tab.click();
    await expect(retiro.errorTitulo).toBeVisible({ timeout: 30000 });
    await retiro.modal.capturarModal(cp('007'), 4, 'pantalla de error de tiendas');
    await retiro.botonVolverAlInicio.click();
    await expect.poll(() => new URL(page.url()).pathname, { message: 'redirige al Home', timeout: 30000 }).toBe('/');
    await home.capturarEvidencia(cp('007'), 5, 'Home tras Volver al inicio', { fullPage: false });
  });

  test(T('008', 'Activar mi ubicación sin permisos muestra la solicitud de permiso'), async ({ page }) => {
    await page.addInitScript(() => {
      const w = window as unknown as { __geo: string[] };
      w.__geo = [];
      const g = navigator.geolocation;
      const get = g.getCurrentPosition.bind(g);
      const watch = g.watchPosition.bind(g);
      g.getCurrentPosition = (a, b, c) => { w.__geo.push('getCurrentPosition'); return get(a, b, c); };
      g.watchPosition = (a, b, c) => { w.__geo.push('watchPosition'); return watch(a, b, c); };
    });
    const { retiro } = await abrirRetiro(page, cp('008'));
    const estado = await page.evaluate(async () => (await navigator.permissions.query({ name: 'geolocation' })).state);
    expect(estado, 'permiso de geolocalización aún no concedido').toBe('prompt');
    await retiro.activarUbicacion.click();
    await expect.poll(() => page.evaluate(() => (window as unknown as { __geo: string[] }).__geo.length), { message: 'el sitio solicita la ubicación al navegador' }).toBeGreaterThan(0);
    await retiro.modal.capturarModal(cp('008'), 7, 'tras Activar mi ubicación (el diálogo nativo no es capturable por la automatización)', page);
    await expect(retiro.root.getByText(/buscando tu ubicaci[oó]n/i)).toBeVisible();
  });

  test(T('009', 'Con permiso concedido las tiendas se ordenan por cercanía y muestran los km'), async ({ page, testData }) => {
    const radio = Number(token(testData, 'RADIO_TIENDAS_KM'));
    await page.context().grantPermissions(['geolocation']);
    await page.context().setGeolocation(PLANTILLA_GEO);
    const { retiro } = await abrirRetiro(page, cp('009'), { capturar: false });
    await retiro.activarUbicacion.click();
    await expect.poll(async () => (await retiro.textosTarjetas()).filter((t) => km(t) !== null).length, { timeout: 30000, message: 'tarjetas con km' }).toBeGreaterThan(0);
    await page.waitForTimeout(1500);
    await retiro.modal.capturarModal(cp('009'), 7, 'listado por cercanía con km');
    const textos = await retiro.textosTarjetas();
    const kms = textos.map(km);
    expect(kms.every((k) => k !== null), `todas las tarjetas muestran km (${textos.slice(0, 2).join(' // ')})`).toBe(true);
    const nums = kms as number[];
    expect(nums, 'ordenadas de la más cercana a la más lejana').toEqual([...nums].sort((a, b) => a - b));
    expect(Math.max(...nums), `solo tiendas dentro de ${radio} km`).toBeLessThanOrEqual(radio);
    await retiro.modal.capturarModal(cp('009'));
  });

  test(T('010', 'Al seleccionar una tienda se abre su tarjeta con mapa, distancia y Confirmar tienda'), async ({ page, testData }) => {
    const nombre = token(testData, 'TIENDA_RETIRO_001')!;
    const { retiro } = await abrirRetiro(page, cp('010'), { capturar: false });
    await retiro.elegirTienda(nombre);
    const tarjeta = retiro.tarjetaDe(nombre);
    await retiro.modal.capturarModal(cp('010'), 8, 'tarjeta de la tienda seleccionada');
    await expect(tarjeta).toContainText(nombre);
    await expect(tarjeta).toContainText(/av\. las condes 14791/i);
    expect(await tarjeta.locator('img, canvas, [aria-label*="Mapa" i], [role="region"], iframe').count() + (await tarjeta.getByText(/datos del mapa/i).count()), 'mapa miniatura').toBeGreaterThan(0);
    expect(km(await tarjeta.innerText()), 'distancia en la tarjeta').not.toBeNull();
    await expect(retiro.botonIrAlMapa).toBeVisible();
    await expect(retiro.botonConfirmarTienda).toBeVisible();
    await retiro.modal.capturarModal(cp('010'));
  });

  test(T('011', 'Ir al mapa muestra los pines de tiendas, un buscador y Volver a la lista'), async ({ page }) => {
    const { retiro } = await abrirRetiro(page, cp('011'), { capturar: false });
    await retiro.botonIrAlMapa.click();
    await expect(retiro.mapa).toBeVisible({ timeout: 30000 });
    await expect.poll(() => retiro.pines.count(), { timeout: 30000, message: 'pines de tiendas' }).toBeGreaterThan(0);
    await page.waitForTimeout(1500);
    await retiro.modal.capturarModal(cp('011'), 7, 'vista de mapa con pines');
    await expect(retiro.buscador, 'buscador dentro del mapa').toBeVisible();
    const rotulo = (await retiro.alternanciaMapaLista.innerText()).trim();
    test.info().annotations.push({ type: 'texto', description: `botón de regreso rotulado «${rotulo}»` });
    await expect(retiro.alternanciaMapaLista, 'botón para volver a la lista').toHaveText(/(volver|ir) a la lista/i);
    await retiro.modal.capturarModal(cp('011'));
  });

  test(T('012', 'Al seleccionar un pin del mapa se muestra la tienda y el botón Confirmar'), async ({ page, testData }) => {
    const nombre = token(testData, 'TIENDA_RETIRO_001')!;
    const { retiro } = await abrirRetiro(page, cp('012'), { capturar: false });
    await retiro.botonIrAlMapa.click();
    await expect(retiro.mapa).toBeVisible({ timeout: 30000 });
    await retiro.buscar(nombre.replace(/^unimarc\s+/i, ''));
    await retiro.pin(nombre).click();
    await retiro.botonConfirmarPin.waitFor({ state: 'visible', timeout: 15000 });
    await retiro.modal.capturarModal(cp('012'), 8, 'tarjeta del pin seleccionado');
    const texto = await retiro.root.innerText();
    expect(texto).toContain(nombre);
    expect(texto).toMatch(/av\. las condes 14791/i);
    expect(km(texto), 'distancia de la tienda').not.toBeNull();
    await expect(retiro.botonConfirmarPin).toBeVisible();
    await retiro.modal.capturarModal(cp('012'));
  });

  test(T('013', 'Un invitado sin carro confirma una tienda con horarios y queda seteada'), async ({ page, testData }) => {
    const nombre = token(testData, 'TIENDA_RETIRO_001')!;
    const { home, retiro } = await abrirRetiro(page, cp('013'), { capturar: false });
    await retiro.elegirTienda(nombre);
    await retiro.modal.capturarModal(cp('013'), 8, 'tarjeta de la tienda');
    await retiro.confirmarTienda();
    await expect(retiro.root, 'el drawer se cierra').toBeHidden({ timeout: 60000 });
    await expect(botonEntrega(page), 'tienda seteada en el header').toContainText(nombre, { timeout: 30000 });
    await home.capturarEvidencia(cp('013'), 10, 'tienda seteada y opción de iniciar sesión', { fullPage: false });
    const login = page.locator('[role="dialog"]').filter({ hasText: /ingresa aqu[ií]|correo electr[oó]nico/i }).locator('visible=true').first();
    await expect(login.or(home.header.areaSSO).first(), 'opción de iniciar sesión disponible').toBeVisible();
    await expect(botonEntrega(page)).toContainText(/desde:/i);
    await home.capturarEvidencia(cp('013'));
  });

  test(T('016', 'Un invitado que confirma una tienda sin cobertura va al flujo Sin cobertura'), async ({ page, testData }) => {
    const nombre = token(testData, 'TIENDA_RETIRO_SIN_COBERTURA')!;
    const { retiro } = await abrirRetiro(page, cp('016'), { capturar: false });
    await retiro.elegirTienda(nombre);
    await retiro.modal.capturarModal(cp('016'), 7, 'tienda seleccionada');
    await retiro.confirmarTienda();
    const modal = page.locator('[role="dialog"]').filter({ hasText: /a[uú]n no llegamos a esta direcci[oó]n/i }).locator('visible=true').first();
    await expect(modal, 'modal «Aún no llegamos a esta dirección»').toBeVisible({ timeout: 45000 });
    await retiro.modal.capturarModal(cp('016'), undefined, undefined, page);
  });

  test(T('017', 'Un error al confirmar la tienda muestra el mensaje y mantiene la tienda anterior'), async ({ page, testData }) => {
    const actual = token(testData, 'TIENDA_RETIRO_001')!;
    const otra = token(testData, 'TIENDA_RETIRO_002')!;
    const home = await setearTienda(page, cp('017'), actual);
    const retiro = new RetiroEnTienda(page);
    // {SETEO_ENTREGA_API_ENDPOINT} tal como lo declara la planilla (el bloqueo de DevTools)
    await page.route(token(testData, 'SETEO_ENTREGA_API_ENDPOINT')!, (r) => r.abort());
    await home.header.storeLocator.click();
    await retiro.modal.esperarAbierto();
    await retiro.tab.click();
    await retiro.esperarListado();
    await retiro.elegirTienda(otra);
    await retiro.modal.capturarModal(cp('017'), 7, `${otra} seleccionada, con el endpoint bloqueado`);
    await retiro.confirmarTienda();
    const mensaje = page.getByText(/lo sentimos, no pudimos cambiar la tienda de retiro/i).locator('visible=true').first();
    await expect(mensaje, 'mensaje de error al confirmar').toBeVisible({ timeout: 30000 });
    await retiro.modal.capturarModal(cp('017'), undefined, undefined, page);
  });

  // D/M-018 — Logueado: confirma tienda de retiro y valida OTP antes de setearla.
  test(TA('018', 'Un logueado que confirma una tienda debe validar OTP antes de setearla'), async ({ page, testData }) => {
    const nombre = token(testData, 'TIENDA_RETIRO_001')!;
    const correo = correoUsuario(testData);
    await iniciarSesion(page, correo);
    const { retiro } = await abrirListadoRetiro(page, cp('018'));
    await retiro.elegirTienda(nombre);
    await retiro.modal.capturarModal(cp('018'), 8, 'tarjeta de la tienda seleccionada');
    await confirmarConOtp(page, retiro, cp('018'), correo);
    await expect(retiro.root, 'el Store Locator se cierra después de validar el OTP').toBeHidden({ timeout: 60000 });
    await expect(botonEntrega(page), 'la tienda queda seteada').toContainText(nombre, { timeout: 30000 });
    await expect(botonEntrega(page), 'el header muestra la ventana de retiro').toContainText(/desde:\s*\S+/i);
    await new PaginaHabilitada(page).capturarEvidencia(cp('018'), undefined, 'tienda seteada tras validar OTP');
  });

  // D/M-019 — Logueado: OTP exitoso deriva al flujo Sin cobertura (B2C-123).
  test(TA('019', 'Un logueado que valida OTP con tienda sin cobertura va al flujo Sin cobertura'), async ({ page, testData }) => {
    const nombre = token(testData, 'TIENDA_RETIRO_SIN_COBERTURA')!;
    const correo = correoUsuario(testData);
    await iniciarSesion(page, correo);
    const { retiro } = await abrirListadoRetiro(page, cp('019'));
    await retiro.elegirTienda(nombre);
    await retiro.modal.capturarModal(cp('019'), 7, 'tienda sin cobertura seleccionada');
    await confirmarConOtp(page, retiro, cp('019'), correo);
    const modal = page.getByRole('dialog').filter({ hasText: /a[uú]n no llegamos a esta direcci[oó]n/i }).first();
    await expect(modal, 'tras validar OTP se deriva a B2C-123').toBeVisible({ timeout: 45000 });
    await retiro.modal.capturarModal(cp('019'), undefined, 'modal Aún no llegamos a esta dirección', page);
  });

  // D/M-020 — Logueado: OTP exitoso con carro que contiene SKU_VALID_001 deriva a B2C-122.
  test(TA('020', 'Un logueado con carro que valida OTP ve el modal No se te escapen'), async ({ page, testData }) => {
    const nombre = token(testData, 'TIENDA_RETIRO_001')!;
    const correo = correoUsuario(testData);
    await iniciarSesion(page, correo);

    // El Excel exige el SKU en el carro; se prepara por UI para que la precondición sea reproducible.
    await agregarSkuValidoAlCarro(page, testData, cp('020'));

    // Volver al Home con la sesión y el carro de la cuenta ya cargado.
    await new PaginaHabilitada(page).goto();
    const { retiro } = await abrirListadoRetiro(page, cp('020'));
    await retiro.elegirTienda(nombre);
    await retiro.modal.capturarModal(cp('020'), 8, 'tarjeta de la tienda seleccionada');
    await confirmarConOtp(page, retiro, cp('020'), correo);
    const modal = page.getByRole('dialog').filter({ hasText: /algunos productos podr[ií]an agotarse/i }).first();
    await expect(modal, 'tras validar OTP se deriva a B2C-122').toBeVisible({ timeout: 45000 });
    await retiro.modal.capturarModal(cp('020'), undefined, 'modal Algunos productos podrían agotarse', page);
  });

  // D/M-022 — Logueado: el header muestra tienda, ventana de retiro y Gratis en verde.
  test(TA('022', 'Tras confirmar la tienda el header del logueado muestra tienda, ventana y Gratis'), async ({ page, testData }) => {
    const nombre = token(testData, 'TIENDA_RETIRO_001')!;
    const correo = correoUsuario(testData);
    await iniciarSesion(page, correo);
    const { home, retiro } = await abrirListadoRetiro(page, cp('022'));
    await retiro.elegirTienda(nombre);
    await retiro.modal.capturarModal(cp('022'), 8, 'tarjeta de la tienda seleccionada');
    await confirmarConOtp(page, retiro, cp('022'), correo);
    await expect(retiro.root, 'el Store Locator se cierra después de validar el OTP').toBeHidden({ timeout: 60000 });
    await comprobarChipGratis(page, nombre);
    await home.capturarEvidencia(cp('022'), 12, 'header del usuario logueado tras confirmar la tienda', { fullPage: false });
  });

  test(T('023', 'Tras confirmar la tienda el header del invitado muestra tienda, ventana, Gratis y login'), async ({ page, testData }) => {
    const nombre = token(testData, 'TIENDA_RETIRO_001')!;
    const { home, retiro } = await abrirRetiro(page, cp('023'), { capturar: false });
    await retiro.elegirTienda(nombre);
    await retiro.modal.capturarModal(cp('023'), 8, 'tarjeta de la tienda');
    await retiro.confirmarTienda();
    await expect(retiro.root).toBeHidden({ timeout: 60000 });
    await expect(botonEntrega(page)).toContainText(nombre, { timeout: 30000 });
    await home.capturarEvidencia(cp('023'), 10, 'header tras confirmar', { fullPage: false });
    const boton = botonEntrega(page);
    await expect(boton, 'próxima ventana de retiro').toContainText(/desde:\s*\S+/i);
    const gratis = boton.getByText(/^gratis$/i).first();
    await expect(gratis, 'chip Gratis').toBeVisible();
    const col = await gratis.evaluate((e) => {
      const rgb = (s: string) => (s.match(/\d+/g) ?? []).slice(0, 3).map(Number);
      const c = getComputedStyle(e);
      const padre = e.parentElement ? getComputedStyle(e.parentElement) : c;
      return { color: rgb(c.color), fondo: rgb(c.backgroundColor), fondoPadre: rgb(padre.backgroundColor) };
    });
    const verde = (v: number[]) => v.length === 3 && v[1] > v[0] && v[1] > v[2];
    expect(verde(col.color) || verde(col.fondo) || verde(col.fondoPadre), `chip Gratis en verde (${JSON.stringify(col)})`).toBe(true);
    const login = page.locator('[role="dialog"]').filter({ hasText: /ingresa aqu[ií]|correo electr[oó]nico/i }).locator('visible=true').first();
    await expect(login.or(home.header.areaSSO).first(), 'opción de iniciar sesión').toBeVisible();
    await home.capturarEvidencia(cp('023'));
  });

  test(T('024', 'Al cambiar desde Despacho a domicilio sin tienda previa se muestra la pantalla inicial de Retiro en tienda'), async ({ page, testData }) => {
    const direccion = token(testData, 'DIRECCION_DESPACHO_001')!;
    const home = await new PaginaHabilitada(page).goto();
    await home.cookies.aceptarSiAparece();
    const retiro = new RetiroEnTienda(page);
    await home.header.storeLocator.click();
    await retiro.modal.esperarAbierto();
    const n = direccion.match(/\d{2,}/)![0];
    await retiro.modal.fijarDireccionComoInvitado(direccion, new RegExp(`(?<!\\d)${n}(?!\\d)`));
    await home.capturarEvidencia(cp('024'), 'pre', 'precondición: despacho activo', { elemento: home.header.barraDelSitio });
    const despacho = (await home.header.storeLocator.innerText()).split('\n')[0].trim();
    await home.header.storeLocator.click();
    await retiro.modal.esperarAbierto();
    await expect(retiro.modal.tabDespachoDomicilio).toHaveAttribute('aria-pressed', 'true');
    await retiro.modal.capturarModal(cp('024'), 4, 'Store Locator con Despacho a domicilio activo');
    await retiro.tab.click();
    await retiro.esperarListado();
    await retiro.modal.capturarModal(cp('024'), 6, 'pestaña Retiro en tienda');
    await expect(retiro.tab).toHaveAttribute('aria-pressed', 'true');
    await expect(retiro.titulo).toBeVisible();
    await expect(retiro.buscador).toHaveAttribute('placeholder', 'Ej: dirección, comuna o nombre');
    const bm = await retiro.botonIrAlMapa.boundingBox();
    const bb = await retiro.buscador.boundingBox();
    const ba = await retiro.activarUbicacion.boundingBox();
    expect(bm!.x, '«Ir al mapa» a la derecha del buscador').toBeGreaterThan(bb!.x + bb!.width - 5);
    expect(ba!.y, '«Activar mi ubicación» debajo del buscador').toBeGreaterThan(bb!.y + bb!.height - 2);
    expect(await retiro.tarjetas.count()).toBeGreaterThan(0);
    expect(await retiro.radioMarcado.count(), 'ninguna tienda marcada').toBe(0);
    await retiro.modal.cerrarConX();
    await expect(home.header.storeLocator, 'el método activo sigue siendo despacho').toContainText(despacho);
    await home.capturarEvidencia(cp('024'), undefined, undefined, { elemento: home.header.barraDelSitio });
  });

  test(T('025', 'Al acceder por primera vez al Store Locator en modo Retiro en tienda se muestra la pantalla inicial'), async ({ page }) => {
    const home = await new PaginaHabilitada(page).goto();
    await home.cookies.aceptarSiAparece();
    await expect(home.header.storeLocator, 'sin método de entrega seteado').toContainText(/elige una forma de entrega/i);
    const retiro = new RetiroEnTienda(page);
    await home.header.storeLocator.click();
    await retiro.modal.esperarAbierto();
    await retiro.modal.capturarModal(cp('025'), 4, 'Store Locator sin método de entrega');
    await retiro.tab.click();
    await retiro.esperarListado();
    await retiro.modal.capturarModal(cp('025'), 6, 'pestaña Retiro en tienda');
    await expect(retiro.tab).toHaveAttribute('aria-pressed', 'true');
    await expect(retiro.titulo).toBeVisible();
    await expect(retiro.buscador).toHaveAttribute('placeholder', 'Ej: dirección, comuna o nombre');
    const bm = await retiro.botonIrAlMapa.boundingBox();
    const bb = await retiro.buscador.boundingBox();
    const ba = await retiro.activarUbicacion.boundingBox();
    expect(bm!.x, '«Ir al mapa» a la derecha del buscador').toBeGreaterThan(bb!.x + bb!.width - 5);
    expect(ba!.y, '«Activar mi ubicación» debajo del buscador').toBeGreaterThan(bb!.y + bb!.height - 2);
    expect(await retiro.tarjetas.count()).toBeGreaterThan(0);
    const primera = retiro.tarjetas.first();
    await expect(primera.locator('input[type="radio"]')).toHaveCount(1);
    expect(await retiro.radioMarcado.count(), 'ninguna tienda marcada').toBe(0);
    await retiro.modal.capturarModal(cp('025'));
  });
  void toca;
}

test.describe('B2C-121 — Store Locator: Retiro en tienda', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);
    definir('D', 'Desktop');
  });
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);
    definir('M', 'Mobile');
  });
});
