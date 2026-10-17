import * as fs from 'fs';
import * as path from 'path';
import { Browser, Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { LoadedTestData } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { capturarEvidencia } from './support/evidencia';
import { esperarOtp, marcaOtp } from './support/otp';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { HeaderFull } from './pages/HeaderFull';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { LoginModal } from './pages/LoginModal';
import { MenuCuenta } from './pages/MenuCuenta';
import { CarroPage } from './pages/CarroPage';
import { SRPPage } from './pages/SRPPage';
import { AgotarseModal } from './pages/AgotarseModal';

/**
 * B2C-26 — Setear método de entrega con Despacho a domicilio (planilla SP2, 59 TC).
 *
 * Quedan sin `test()` (ver la Observación de cada fila):
 * - Bloqueado Data: D-004 (paso logueado sin cuenta declarada), D-007 (conceder la ubicación sin
 *   {LATITUD_DESPACHO}/{LONGITUD_DESPACHO}), D-011 (sin dirección sin SLA ni SKU para el carro),
 *   D-013 y M-031 (dirección a setear no declarada), M-006 (comuna a buscar no declarada), M-024
 *   (dirección guardada sin ventanas), M-025 (SKU del carro) y M-034 ({COMPRADOR_USER} no declarado).
 * - Bloqueado: M-014 (denegar en el prompt nativo: Playwright no lo muestra, niega al instante).
 *
 * Los logueados usan {COMPRADOR_USER} (vhchirinos+comprador) por correo + OTP; la sesión es la
 * de B2C-123/189 (`.qa/auth/b189-user.json`). Correr esos TC con --workers=1: comparten cuenta.
 */

const SESION = path.resolve('.qa/auth/b189-user.json');

function correo(testData: LoadedTestData): string {
  return token(testData, 'COMPRADOR_USER')!.split('/')[0].trim();
}

function escapar(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** "Camino La Fuente 1589 Las Condes" / "Calle Uno 23, La Florida" → calle, número y comuna. */
function partes(direccion: string): { calle: string; numero: string; comuna: string } {
  const m = direccion.match(/^(.*?)\s+(\d+[A-Za-z]?)\s*,?\s*(.+)$/);
  if (!m) throw new Error(`No se pudo separar la dirección "${direccion}"`);
  return { calle: m[1].trim(), numero: m[2], comuna: m[3].trim() };
}

/** La sugerencia de Google de una dirección: calle + número. */
function sugerenciaDe(direccion: string): RegExp {
  const p = partes(direccion);
  return new RegExp(`${escapar(p.calle)}\\s+${p.numero}`, 'i');
}

async function abrirModal(page: Page): Promise<{ home: PaginaHabilitada; modal: MetodoEntregaModal }> {
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  return { home, modal };
}

/** Responde el OTP de "Autenticación requerida" si aparece en `espera` ms (y "Algunos productos podrían agotarse"). */
async function otpSiAparece(page: Page, testData: LoadedTestData, desde: Date, espera = 15000): Promise<boolean> {
  const agotarse = new AgotarseModal(page);
  const modal = new MetodoEntregaModal(page);
  const fin = Date.now() + espera;
  while (Date.now() < fin) {
    if (await agotarse.root.isVisible().catch(() => false)) await agotarse.botonSi.click().catch(() => {});
    if (await modal.modalOtp.isVisible().catch(() => false)) {
      await new LoginModal(page).escribirCodigo(await esperarOtp(correo(testData), desde, { digitos: 6 }));
      await modal.modalOtp.waitFor({ state: 'hidden', timeout: 30000 });
      return true;
    }
    await page.waitForTimeout(500);
  }
  return false;
}

/** Login por correo + OTP desde "Ingresa aquí", con la oferta de passkey y un posible segundo OTP. */
async function loginConOtp(page: Page, testData: LoadedTestData): Promise<void> {
  const login = new LoginModal(page);
  const desde = marcaOtp();
  await login.pedirCodigo(correo(testData));
  const codigo = await esperarOtp(correo(testData), desde, { digitos: 6 });
  const desde2 = marcaOtp();
  await login.escribirCodigo(codigo);
  await login.disparador.first().waitFor({ state: 'hidden', timeout: 45000 });
  const otp = new MetodoEntregaModal(page).modalOtp;
  const ahoraNo = login.ofertaPasskey.getByRole('button', { name: /^ahora no$/i });
  let respondido = false;
  const fin = Date.now() + 20000;
  while (Date.now() < fin) {
    if (!respondido && (await otp.isVisible().catch(() => false))) {
      await login.escribirCodigo(await esperarOtp(correo(testData), desde2, { digitos: 6 }));
      await otp.waitFor({ state: 'hidden', timeout: 30000 });
      respondido = true;
      continue;
    }
    if (await ahoraNo.isVisible().catch(() => false)) await ahoraNo.click({ timeout: 5000 }).catch(() => {});
    await page.waitForTimeout(500);
  }
  await login.descartarPasskey();
}

/** Inicia sesión con {COMPRADOR_USER}: reusa la sesión guardada y, si no sirve, por correo + OTP. */
async function iniciarSesion(page: Page, testData: LoadedTestData): Promise<PaginaHabilitada> {
  if (fs.existsSync(SESION)) {
    await page.context().addCookies(JSON.parse(fs.readFileSync(SESION, 'utf-8')).cookies ?? []);
  }
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  // En Mobile el saludo es el avatar con iniciales y tarda en pintarse: sin sesión, lo que se ve es "Ingresa aquí".
  const conSesion = await home.header.saludo.waitFor({ state: 'visible', timeout: 30000 }).then(
    () => true,
    async () => !(await new LoginModal(page).disparador.first().isVisible().catch(() => false)),
  );
  if (!conSesion) await loginConOtp(page, testData);
  await new LoginModal(page).descartarPasskey();
  await expect(home.header.saludo, 'sesión iniciada').toBeVisible({ timeout: 30000 });
  fs.mkdirSync(path.dirname(SESION), { recursive: true });
  await page.context().storageState({ path: SESION });
  return home;
}

/** Deja activa la guardada "Casa" ({DIRECCION_DESPACHO_001}) si el header muestra otra cosa. */
async function asegurarCasa(page: Page, testData: LoadedTestData): Promise<void> {
  const home = await new PaginaHabilitada(page).goto();
  const actual = await home.header.esperarDireccionEnStoreLocator().catch(() => '');
  if (/^(casa$|calle uno 23)/i.test(actual)) return;
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.tituloDireccionesGuardadas.waitFor({ state: 'visible', timeout: 30000 });
  const desde = marcaOtp();
  await modal.elegirGuardada('Casa');
  await otpSiAparece(page, testData, desde, 20000);
  await new PaginaHabilitada(page).goto();
}

/** Abre el modal con sesión iniciada y espera la lista de direcciones guardadas. */
async function abrirModalLogueado(page: Page, testData: LoadedTestData): Promise<{ home: PaginaHabilitada; modal: MetodoEntregaModal }> {
  const home = await iniciarSesion(page, testData);
  await home.header.esperarDireccionEnStoreLocator().catch(() => '');
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await expect(modal.tituloDireccionesGuardadas, 'lista de direcciones guardadas').toBeVisible({ timeout: 30000 });
  return { home, modal };
}

/** Etiqueta de la guardada activa. En Mobile el bloque "Dirección de despacho" puede mostrar la etiqueta ("Casa") en vez de la línea. */
async function etiquetaActiva(modal: MetodoEntregaModal): Promise<string> {
  const activa = ((await modal.direccionActiva.textContent()) ?? '').trim();
  const guardadas = await modal.direccionesGuardadas();
  const t = guardadas.find((g) => g.etiqueta === activa) ?? guardadas.find((g) => g.direccion.startsWith(activa));
  if (!t) throw new Error(`Ninguna dirección guardada coincide con la activa "${activa}"`);
  return t.etiqueta;
}

/** Cuántas guardadas tienen la misma línea de dirección (las duplicadas se renumeran al borrar una). */
async function copias(modal: MetodoEntregaModal, direccion: string): Promise<number> {
  return (await modal.direccionesGuardadas()).filter((g) => g.direccion === direccion).length;
}

/** Una guardada duplicada ("… (n)") distinta de la activa: se puede eliminar sin perder data. */
async function duplicadaEliminable(modal: MetodoEntregaModal): Promise<string> {
  const guardadas = await modal.direccionesGuardadas();
  const activa = await etiquetaActiva(modal);
  const lineaActiva = guardadas.find((g) => g.etiqueta === activa)?.direccion;
  const dup = [...guardadas].reverse().find((g) => /\(\d+\)$/.test(g.etiqueta) && g.direccion !== lineaActiva);
  if (!dup) throw new Error('No hay una dirección guardada duplicada para eliminar');
  return dup.etiqueta;
}

/** Contexto nuevo del navegador (cerrar y volver a abrir la ventana de incógnito). */
async function ventanaNueva(browser: Browser, page: Page, testData: LoadedTestData): Promise<Page> {
  const ctx = await browser.newContext({ viewport: page.viewportSize()!, baseURL: token(testData, 'BASE_URL')! });
  return ctx.newPage();
}

/** Lo que muestra el Store Locator del header, en una línea. */
async function textoHeader(page: Page): Promise<string> {
  return ((await new HeaderFull(page).storeLocator.innerText().catch(() => '')) ?? '').replace(/\s+/g, ' ').trim();
}

/** Escribe la dirección letra a letra y verifica que lleguen sugerencias de Google sin Enter. */
async function sugerenciasEnVivo(modal: MetodoEntregaModal, direccion: string, cp: string, paso: number): Promise<void> {
  const consultas = modal.observarConsultasAGoogle();
  await modal.campoBusqueda.click();
  await modal.campoBusqueda.pressSequentially(direccion, { delay: 60 });
  await expect(modal.sugerencias.first(), 'sugerencias de Google en tiempo real').toBeVisible({ timeout: 30000 });
  expect(consultas.pedidas.length, 'consultas de autocompletado a Google').toBeGreaterThan(0);
  await modal.capturarModal(cp, paso, 'sugerencias de Google');
}

async function irAlPin(modal: MetodoEntregaModal, direccion: string, cp: string, paso: number): Promise<void> {
  await modal.sugerencias.filter({ hasText: sugerenciaDe(direccion) }).first().click();
  await expect(modal.confirmacionPin, 'confirmación con PIN (B2C-99)').toBeVisible({ timeout: 30000 });
  await expect(modal.confirmacionPin).toContainText(/agregar nueva direcci[óo]n|detalles de la direcci[óo]n/i);
  await capturarEvidencia(modal.confirmacionPin, cp, paso, 'confirmación con PIN (B2C-99)');
}

/** Formulario manual: escribe 2 caracteres, toca "Agregar" y espera el formulario. */
async function abrirFormularioManual(modal: MetodoEntregaModal, dosLetras: string): Promise<void> {
  await modal.campoBusqueda.click();
  await modal.campoBusqueda.pressSequentially(dosLetras.slice(0, 2), { delay: 80 });
  await modal.tocarAgregar();
}

async function formularioVacio(modal: MetodoEntregaModal): Promise<void> {
  await expect(modal.encabezadoManual).toBeVisible();
  expect(await modal.seleccionada(modal.selectRegion), 'Región: "Elegir región"').toMatch(/^elegir regi[óo]n$/i);
  expect(await modal.seleccionada(modal.selectComuna), 'Comuna: "Elegir comuna"').toMatch(/^elegir comuna$/i);
  await expect(modal.campoCalle, 'Dirección: placeholder "Calle"').toHaveAttribute('placeholder', /^calle$/i);
  await expect(modal.campoNumeracion, 'Numeración: placeholder "Ej. 2160"').toHaveAttribute('placeholder', /^ej\. 2160$/i);
  await expect(modal.campoCalle).toHaveValue('');
  await expect(modal.campoNumeracion).toHaveValue('');
}

/** Fija una dirección como invitado y devuelve lo que quedó en el header. */
async function fijarComoInvitado(page: Page, direccion: string): Promise<{ home: PaginaHabilitada; enHeader: string }> {
  const { home, modal } = await abrirModal(page);
  await modal.campoBusqueda.click();
  await modal.campoBusqueda.pressSequentially(direccion, { delay: 50 });
  await modal.sugerencias.filter({ hasText: sugerenciaDe(direccion) }).first().waitFor({ state: 'visible', timeout: 30000 });
  await modal.sugerencias.filter({ hasText: sugerenciaDe(direccion) }).first().click();
  await modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
  await modal.confirmacionPin.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
  const enHeader = await home.header.esperarDireccionEnStoreLocator(45000);
  return { home, enHeader };
}

/** Recorre Home → PLP → PDP → SRP → Carro anotando lo que muestra el Store Locator en cada una. */
async function recorrerSitio(page: Page, testData: LoadedTestData, cp: string, home: PaginaHabilitada): Promise<Record<string, string>> {
  const vistos: Record<string, string> = {};
  const header = new HeaderFull(page);
  const leer = async (nombre: string, paso: number) => {
    await header.storeLocator.waitFor({ state: 'visible', timeout: 20000 }).catch(() => {});
    vistos[nombre] = (await header.storeLocator.isVisible().catch(() => false)) ? await header.esperarDireccionEnStoreLocator(20000).catch(() => '') : '(sin Store Locator)';
    await capturarEvidencia(page, cp, paso, `Store Locator en ${nombre}`);
  };
  await leer('Home', 2);
  const plp = await home.irAUnaCategoria();
  await leer('PLP', 3);
  await plp.abrirPrimerProducto();
  await leer('PDP', 4);
  await new SRPPage(page, token(testData, 'SEARCH_TERM_001')!).goto();
  await leer('SRP', 5);
  await new CarroPage(page).goto();
  await page.waitForTimeout(2000);
  await leer('Carro', 6);
  return vistos;
}

const ROJO = 'rgb(218, 41, 28)';

test.describe('B2C-26 — Setear método de entrega con Despacho a domicilio', () => {
  // ================================================================== DESKTOP
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C26-D-001 · Sugerencias de Google con 3+ caracteres y redirección a B2C-99 [Guest] (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-D-001';
      const dir = token(testData, 'DIRECCION_DESPACHO')!;
      const { modal } = await abrirModal(page);
      await modal.capturarModal(cp, 0, 'modal «Elige tu método de entrega»');
      await sugerenciasEnVivo(modal, dir, cp, 2);
      await irAlPin(modal, dir, cp, 3);
      await capturarEvidencia(page, cp);
    });

    test('TC-B2C26-D-002 · Menos de 3 caracteres, sin resultados y Google caído ofrecen agregar manualmente [Guest] (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-D-002';
      const dir = token(testData, 'DIRECCION_DESPACHO')!;
      let { modal } = await abrirModal(page);

      // 1. Dos caracteres: ni sugerencias ni consulta a Google.
      const consultas = modal.observarConsultasAGoogle();
      await modal.campoBusqueda.click();
      await modal.campoBusqueda.pressSequentially(dir.slice(0, 2), { delay: 80 });
      await page.waitForTimeout(3000);
      await expect(modal.sugerencias).toHaveCount(0);
      expect(consultas.pedidas, 'sin consultas a Google con 2 caracteres').toHaveLength(0);
      await expect(modal.textoNoApareceDireccion).toBeVisible();
      await expect(modal.botonAgregar).toBeVisible();
      await modal.capturarModal(cp, 1, '2 caracteres: sin sugerencias, «Agregar» disponible');

      // 2. Término sin resultados.
      await modal.campoBusqueda.fill('');
      await modal.campoBusqueda.pressSequentially('zzqxw 99999', { delay: 60 });
      await page.waitForTimeout(4000);
      await expect(modal.sugerencias).toHaveCount(0);
      await expect(modal.botonAgregar, '«Agregar» al final de la lista').toBeVisible();
      await modal.capturarModal(cp, 2, 'sin resultados: «¿No aparece tu dirección? Agregar»');

      // 3. API de Google caída.
      await modal.simularFallaGoogle();
      await page.reload({ waitUntil: 'domcontentloaded' });
      ({ modal } = await abrirModal(page));
      await modal.campoBusqueda.click();
      await modal.campoBusqueda.pressSequentially(dir, { delay: 50 });
      await page.waitForTimeout(4000);
      await expect(modal.sugerencias).toHaveCount(0);
      await expect(modal.botonAgregar, 'fallback: agregar manualmente').toBeVisible();
      await modal.capturarModal(cp, 3, 'Google caído: sin sugerencias, «Agregar» disponible');
      await modal.tocarAgregar();
      await expect(modal.encabezadoManual).toBeVisible();
      await modal.capturarModal(cp);
    });

    test('TC-B2C26-D-003 · Resultado de Google sin calle (comuna/región) usa el texto como Calle y prellena Región/Comuna [Guest] (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-D-003';
      const comuna = partes(token(testData, 'DIRECCION_DESPACHO')!).comuna;
      const { modal } = await abrirModal(page);
      const consultas = modal.observarConsultasAGoogle();
      await modal.campoBusqueda.click();
      await modal.campoBusqueda.pressSequentially(comuna, { delay: 60 });
      await expect(modal.sugerencias.first()).toBeVisible({ timeout: 30000 });
      await page.waitForTimeout(1500);
      await modal.capturarModal(cp, 1, `sugerencias para «${comuna}»`);
      const opciones = await modal.sugerencias.allInnerTexts();
      const deComuna = consultas.respuestas.some((r) => /"(locality|administrative_area_level_\d|sublocality)"/.test(r));
      const filtroAddress = consultas.pedidas.some((u) => /address/i.test(decodeURIComponent(u)));
      expect(
        deComuna,
        `Google no devolvió ningún resultado de tipo comuna/región para «${comuna}» (sugerencias: ${opciones.join(' | ').replace(/\n/g, ' ')}; consulta restringida a types=address: ${filtroAddress})`,
      ).toBe(true);
    });

    test('TC-B2C26-D-005 · Error al cargar direcciones guardadas muestra pantalla de error sin cambiar la activa [Logueado] (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-D-005';
      const home = await iniciarSesion(page, testData);
      const antes = await home.header.esperarDireccionEnStoreLocator();
      await capturarEvidencia(home.header.barraDelSitio, cp, 0, `dirección activa «${antes}»`);
      const modal = new MetodoEntregaModal(page);
      await modal.forzarErrorCargaDirecciones();
      await home.header.storeLocator.click();
      await expect(modal.tituloError, '«Ups, algo salió mal»').toBeVisible({ timeout: 30000 });
      await expect(modal.mensajeError).toBeVisible();
      await expect(modal.codigoError, 'código de error').toBeVisible();
      await expect(modal.botonReintentar).toBeVisible();
      await expect(modal.botonVolverAlInicio).toBeVisible();
      await modal.capturarModal(cp, 2, 'pantalla de error con código y 2 botones');
      await modal.restaurarCargaDirecciones();
      await page.reload({ waitUntil: 'domcontentloaded' });
      expect(await home.header.esperarDireccionEnStoreLocator(), 'la dirección activa no cambió').toBe(antes);
      await capturarEvidencia(home.header.barraDelSitio, cp);
    });

    test('TC-B2C26-D-006 · «Activar mi ubicación actual» con permiso concedido: loader y B2C-99 [Guest] (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-D-006';
      const lat = Number(token(testData, 'LATITUD_DESPACHO')), lng = Number(token(testData, 'LONGITUD_DESPACHO'));
      const modal0 = new MetodoEntregaModal(page);
      await modal0.concederUbicacion(lat, lng);
      const { modal } = await abrirModal(page);
      await modal.observarCarga();
      await modal.tocarUbicacionActual();
      await expect(modal.confirmacionPin, 'B2C-99').toBeVisible({ timeout: 30000 });
      const carga = await modal.cargaObservada();
      expect(carga.texto || carga.spinner, `loader al obtener la ubicación (${JSON.stringify(carga)})`).toBe(true);
      const centro = await modal.centroDelMapa();
      expect(Math.abs(centro.lat - lat), `PIN en la latitud del GPS (${centro.lat})`).toBeLessThan(0.002);
      expect(Math.abs(centro.lng - lng), `PIN en la longitud del GPS (${centro.lng})`).toBeLessThan(0.002);
      await capturarEvidencia(page, cp);
    });

    test('TC-B2C26-D-008 · Falla al obtener coordenadas: toast de error, reintentar u otro método [Guest] (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-D-008';
      await new MetodoEntregaModal(page).simularUbicacionNoDisponible();
      const { modal } = await abrirModal(page);
      await modal.tocarUbicacionActual();
      await expect(modal.toastUbicacion, 'toast «No pudimos obtener tu ubicación actual»').toBeVisible({ timeout: 20000 });
      await expect(modal.root, 'el modal sigue abierto').toBeVisible();
      await capturarEvidencia(page, cp, 2, 'toast de error');
      await modal.toastUbicacion.waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
      await modal.tocarUbicacionActual();
      await expect(modal.toastUbicacion, 'reintentar vuelve a intentar (mismo toast)').toBeVisible({ timeout: 20000 });
      await capturarEvidencia(page, cp, 3, 'reintento');
      await sugerenciasEnVivo(modal, token(testData, 'DIRECCION_DESPACHO')!, cp, 4);
      await capturarEvidencia(page, cp);
    });

    test('TC-B2C26-D-009 · Formulario manual: campos, botón deshabilitado y catálogos de Región/Comuna [Guest] (Desktop)', async ({ page }) => {
      const cp = 'TC-B2C26-D-009';
      const { modal } = await abrirModal(page);
      await abrirFormularioManual(modal, 'Ca');
      await formularioVacio(modal);
      await expect(modal.botonContinuarManual, 'Continuar deshabilitado').toBeDisabled();
      await modal.capturarModal(cp, 1, 'formulario «Dirección manual»');

      const regiones = await modal.opciones(modal.selectRegion);
      expect(regiones.length, `regiones de Chile (${regiones.join(', ')})`).toBe(16);
      expect(regiones).toContain('Metropolitana');
      await modal.elegirRegion('Metropolitana');
      const comunas = await modal.opciones(modal.selectComuna);
      expect(comunas, 'comunas de la RM').toEqual(expect.arrayContaining(['Santiago', 'Las Condes', 'La Florida', 'Maipú']));
      expect(comunas, 'solo comunas de la RM (Machalí es de O\'Higgins)').not.toContain('Machalí');
      await modal.elegirComuna('Las Condes');
      await expect(modal.botonContinuarManual, 'sigue deshabilitado sin Dirección').toBeDisabled();
      await modal.campoCalle.fill('Camino La Fuente');
      await expect(modal.botonContinuarManual, 'habilitado con lo obligatorio').toBeEnabled();
      await modal.capturarModal(cp);
    });

    test('TC-B2C26-D-010 · Continuar desde el formulario manual: loader y B2C-99 con la dirección y el PIN geocodificado [Guest] (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-D-010';
      const p = partes(token(testData, 'DIRECCION_DESPACHO')!);
      const { modal } = await abrirModal(page);
      await abrirFormularioManual(modal, p.calle);
      const region = await modal.completarFormularioManual(p.calle, p.numero, p.comuna);
      await modal.capturarModal(cp, 1, `formulario completo (${region}, ${p.comuna})`);
      await modal.observarCarga();
      await modal.botonContinuarManual.click();
      await expect(modal.confirmacionPin, 'B2C-99').toBeVisible({ timeout: 30000 });
      expect((await modal.cargaObservada()).spinner, 'loader al continuar').toBe(true);
      await expect(modal.confirmacionPin).toContainText(new RegExp(`${escapar(p.calle)}\\s+${p.numero}`, 'i'));
      await expect(modal.confirmacionPin).toContainText(new RegExp(escapar(p.comuna), 'i'));
      const centro = await modal.centroDelMapa();
      expect(centro.lat, 'PIN geocodificado (latitud de Santiago)').toBeGreaterThan(-34);
      expect(centro.lat).toBeLessThan(-33);
      await capturarEvidencia(page, cp);
    });

    test('TC-B2C26-D-012 · Menú ⋮ solo en no activas; eliminar con «No gracias», éxito y error [Logueado] (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-D-012';
      const { modal } = await abrirModalLogueado(page, testData);
      const activa = await etiquetaActiva(modal);
      const guardadas = await modal.direccionesGuardadas();
      await modal.capturarModal(cp, 1, 'direcciones guardadas');
      expect.soft(guardadas.filter((g) => g.etiqueta !== activa).every((g) => g.tieneMenu), 'menú ⋮ en las no activas').toBe(true);
      expect.soft(guardadas.find((g) => g.etiqueta === activa)?.tieneMenu, `la activa («${activa}») no debe tener menú ⋮`).toBe(false);

      // 2. «No gracias».
      const etiqueta = await duplicadaEliminable(modal);
      await modal.pedirEliminar(etiqueta);
      await modal.capturarModal(cp, 2, '¿Quieres eliminar tu dirección?', modal.modalEliminar);
      await modal.botonNoGracias.click();
      await expect(modal.modalEliminar).toBeHidden({ timeout: 15000 });
      await expect(modal.tarjetaGuardada(etiqueta), 'la dirección sigue').toBeVisible();

      // 3. «Aceptar» con error.
      await modal.simularErrorEliminar();
      await modal.pedirEliminar(etiqueta);
      await modal.botonAceptarEliminar.click();
      await expect(modal.toastErrorEliminar, 'toast de error').toBeVisible({ timeout: 20000 });
      await expect(modal.tarjetaGuardada(etiqueta), 'la dirección sigue tras el error').toBeVisible();
      await capturarEvidencia(page, cp, 3, 'toast de error al eliminar');
      await page.unrouteAll({ behavior: 'ignoreErrors' });

      // 3. «Aceptar» con éxito (una guardada duplicada: queda otra igual).
      const linea = (await modal.direccionesGuardadas()).find((g) => g.etiqueta === etiqueta)!.direccion;
      const n = await copias(modal, linea);
      await modal.observarCarga();
      await modal.pedirEliminar(etiqueta);
      await modal.botonAceptarEliminar.click();
      await expect(modal.toastEliminada, 'toast de éxito').toBeVisible({ timeout: 20000 });
      await expect.poll(() => copias(modal, linea), { timeout: 15000, message: `«${linea}» pasa de ${n} a ${n - 1} copias` }).toBe(n - 1);
      expect((await modal.cargaObservada()).spinner, 'loader al eliminar').toBe(true);
      await capturarEvidencia(page, cp);
    });

    test('TC-B2C26-D-014 · Dirección de invitado: formato en el header, no persiste y dispara la asociación al loguearse [Guest] (Desktop)', async ({ page, browser, testData }) => {
      const cp = 'TC-B2C26-D-014';
      const dir = token(testData, 'DIRECCION_DESPACHO_001')!;
      const p = partes(dir);
      const { home } = await fijarComoInvitado(page, dir);
      const texto = await textoHeader(page);
      await capturarEvidencia(home.header.barraDelSitio, cp, 1, `header: «${texto}»`);
      expect.soft(texto, 'calle y numeración').toMatch(new RegExp(`${escapar(p.calle)}\\s+${p.numero}`, 'i'));
      expect.soft(texto, `comuna (${p.comuna})`).toMatch(new RegExp(escapar(p.comuna), 'i'));

      const otra = await ventanaNueva(browser, page, testData);
      const home2 = await new PaginaHabilitada(otra).goto();
      await expect(home2.header.storeLocator, 'la dirección no persiste').toContainText(/elige una forma de entrega/i, { timeout: 30000 });
      await capturarEvidencia(home2.header.barraDelSitio, cp, 2, 'ventana nueva: sin dirección');
      await otra.context().close();

      const login = new LoginModal(page);
      const desde = marcaOtp();
      await login.pedirCodigo(correo(testData));
      await login.escribirCodigo(await esperarOtp(correo(testData), desde, { digitos: 6 }));
      const modal = new MetodoEntregaModal(page);
      await expect(modal.modalOtp, 'flujo de asociación (B2C-124 → OTP B2C-125)').toBeVisible({ timeout: 45000 });
      await capturarEvidencia(page, cp);
    });

    test('TC-B2C26-D-015 · La dirección se mantiene al navegar y se pierde al cerrar el navegador [Guest] (Desktop)', async ({ page, browser, testData }) => {
      const cp = 'TC-B2C26-D-015';
      const { home, enHeader } = await fijarComoInvitado(page, token(testData, 'DIRECCION_DESPACHO')!);
      const vistos = await recorrerSitio(page, testData, cp, home);
      for (const [pagina, valor] of Object.entries(vistos)) expect.soft(valor, `Store Locator en ${pagina}`).toBe(enHeader);
      const otra = await ventanaNueva(browser, page, testData);
      const home2 = await new PaginaHabilitada(otra).goto();
      await expect(home2.header.storeLocator, 'se pierde al cerrar el navegador').toContainText(/elige una forma de entrega/i, { timeout: 30000 });
      await capturarEvidencia(otra, cp, 7, 'ventana nueva: sin dirección');
      await otra.context().close();
      await capturarEvidencia(page, cp);
    });

    test('TC-B2C26-D-016 · El formulario manual acepta +, - y / en la dirección [Guest] (Desktop)', async ({ page, testData }) => {
      await caracteresEspeciales(page, testData, 'TC-B2C26-D-016');
    });

    test('TC-B2C26-D-017 · Dirección manual sin numeración se ve con «S/N» [Guest] (Desktop)', async ({ page, testData }) => {
      await sinNumeroInvitado(page, testData, 'TC-B2C26-D-017');
    });

    test('TC-B2C26-D-018 · Dirección sin numeración se guarda en el perfil con «S/N» [Logueado] (Desktop)', async ({ page, testData }) => {
      await sinNumeroLogueado(page, testData, 'TC-B2C26-D-018');
    });

    test('TC-B2C26-D-019 · Plus Code de Google se agrega sin problemas [Guest] (Desktop)', async ({ page, testData }) => {
      await plusCode(page, testData, 'TC-B2C26-D-019');
    });
  });

  // ================================================================== MOBILE
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C26-M-001 · Con 3+ caracteres se sugieren direcciones y una completa lleva al PIN [Guest] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-001';
      const dir = token(testData, 'DIRECCION_DESPACHO')!;
      const { modal } = await abrirModal(page);
      await expect.poll(async () => (await modal.estiloTab(modal.tabDespachoDomicilio)).activa).toBe(true);
      await modal.capturarModal(cp, 4, 'modal con «Despacho a domicilio»');
      await sugerenciasEnVivo(modal, dir, cp, 6);
      await irAlPin(modal, dir, cp, 8);
      await capturarEvidencia(page, cp);
    });

    test('TC-B2C26-M-002 · Con menos de 3 caracteres no hay sugerencias y se ofrece agregar [Guest] (Mobile)', async ({ page }) => {
      const cp = 'TC-B2C26-M-002';
      const { modal } = await abrirModal(page);
      const consultas = modal.observarConsultasAGoogle();
      await modal.campoBusqueda.click();
      await modal.campoBusqueda.pressSequentially('Ca', { delay: 80 });
      await page.waitForTimeout(3000);
      await expect(modal.sugerencias).toHaveCount(0);
      expect(consultas.pedidas, 'sin requests a Google').toHaveLength(0);
      await expect(modal.textoNoApareceDireccion).toBeVisible();
      await expect(modal.botonAgregar).toBeVisible();
      await modal.capturarModal(cp);
    });

    test('TC-B2C26-M-003 · Búsqueda sin resultados ofrece «Agregar» y abre el formulario vacío [Guest] (Mobile)', async ({ page }) => {
      const cp = 'TC-B2C26-M-003';
      const { modal } = await abrirModal(page);
      await modal.campoBusqueda.click();
      await modal.campoBusqueda.pressSequentially('zzqxw 99999', { delay: 60 });
      await page.waitForTimeout(4000);
      await expect(modal.sugerencias).toHaveCount(0);
      await expect(modal.textoNoApareceDireccion).toBeVisible();
      await expect(modal.botonAgregar).toBeVisible();
      await modal.capturarModal(cp, 6, 'sin sugerencias: «¿No aparece tu dirección? Agregar»');
      await modal.tocarAgregar();
      await formularioVacio(modal);
      await modal.capturarModal(cp);
    });

    test('TC-B2C26-M-004 · «Agregar» aparece al final de la lista también con resultados [Guest] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-004';
      const { modal } = await abrirModal(page);
      await sugerenciasEnVivo(modal, token(testData, 'DIRECCION_DESPACHO')!, cp, 6);
      await expect(modal.botonAgregar).toBeVisible();
      const ultima = await modal.sugerencias.last().boundingBox();
      const pie = await modal.pie.boundingBox();
      expect(pie!.y, '«¿No aparece tu dirección? Agregar» después de la última sugerencia').toBeGreaterThan(ultima!.y + ultima!.height - 1);
      await modal.capturarModal(cp);
    });

    test('TC-B2C26-M-005 · Error de la API de Google ofrece agregar la dirección manualmente [Guest] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-005';
      await new MetodoEntregaModal(page).simularFallaGoogle();
      const { modal } = await abrirModal(page);
      await modal.campoBusqueda.click();
      await modal.campoBusqueda.pressSequentially(token(testData, 'DIRECCION_DESPACHO')!, { delay: 50 });
      await page.waitForTimeout(4000);
      await expect(modal.sugerencias).toHaveCount(0);
      await expect(modal.botonAgregar, 'opción de agregar manualmente').toBeVisible();
      await modal.capturarModal(cp, 6, 'Google caído: «¿No aparece tu dirección? Agregar»');
      await modal.tocarAgregar();
      await expect(modal.selectRegion).toBeVisible();
      await expect(modal.selectComuna).toBeVisible();
      await expect(modal.campoCalle).toBeVisible();
      await expect(modal.campoNumeracion).toBeVisible();
      await modal.capturarModal(cp);
    });

    test('TC-B2C26-M-007 · El modal del invitado muestra su dirección activa con el formato definido [Guest] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-007';
      const dir = token(testData, 'DIRECCION_DESPACHO')!;
      const p = partes(dir);
      const { home } = await fijarComoInvitado(page, dir);
      await home.header.storeLocator.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await expect(modal.bloqueDireccionDespacho).toBeVisible({ timeout: 20000 });
      const activa = ((await modal.direccionActiva.innerText()) ?? '').replace(/\s+/g, ' ').trim();
      await modal.capturarModal(cp, 4, `dirección activa: «${activa}»`);
      expect.soft(activa, 'calle y número').toMatch(new RegExp(`${escapar(p.calle)}\\s+${p.numero}`, 'i'));
      expect.soft(activa, `comuna (${p.comuna})`).toMatch(new RegExp(escapar(p.comuna), 'i'));
      expect.soft(activa, 'región').toMatch(/metropolitana/i);
    });

    test('TC-B2C26-M-008 · El modal del logueado muestra skeleton y luego la activa y las guardadas [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-008';
      const home = await iniciarSesion(page, testData);
      await home.header.esperarDireccionEnStoreLocator().catch(() => '');
      const modal = new MetodoEntregaModal(page);
      await modal.observarCarga();
      await home.header.storeLocator.click();
      await modal.esperarAbierto();
      await expect(modal.tituloDireccionesGuardadas).toBeVisible({ timeout: 30000 });
      await expect(modal.bloqueDireccionDespacho, 'dirección activa separada').toBeVisible();
      await expect(modal.direccionActiva).not.toBeEmpty();
      await expect(modal.campoBusqueda).toBeVisible();
      await expect(modal.botonUbicacionActual).toBeVisible();
      const guardadas = await modal.direccionesGuardadas();
      await modal.capturarModal(cp, 4, 'dirección activa y guardadas');
      expect(guardadas.length).toBeGreaterThan(1);
      for (const g of guardadas.filter((x) => !/sin cobertura|t-551/i.test(x.etiqueta)))
        expect.soft(g.direccion, `«${g.etiqueta}» con calle, número, comuna y región`).toMatch(/^[^,]+,[^,]+,\s*\S+/);
      expect.soft((await modal.cargaObservada()).skeleton, 'skeleton de carga').toBe(true);
    });

    test('TC-B2C26-M-009 · Error al cargar los métodos de entrega muestra la pantalla de error con código [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-009';
      const home = await iniciarSesion(page, testData);
      const antes = await home.header.esperarDireccionEnStoreLocator();
      await capturarEvidencia(home.header.barraDelSitio, cp, 3, `dirección activa «${antes}»`);
      const modal = new MetodoEntregaModal(page);
      await modal.forzarErrorCargaDirecciones();
      await home.header.storeLocator.click();
      await expect(modal.tituloError).toBeVisible({ timeout: 30000 });
      await expect(modal.mensajeError).toBeVisible();
      await expect(modal.codigoError).toBeVisible();
      await expect(modal.botonReintentar).toBeVisible();
      await expect(modal.botonVolverAlInicio).toBeVisible();
      await modal.capturarModal(cp, 5, 'pantalla de error');
      await modal.restaurarCargaDirecciones();
      await page.reload({ waitUntil: 'domcontentloaded' });
      expect(await home.header.esperarDireccionEnStoreLocator(), 'la dirección activa no cambió').toBe(antes);
      await capturarEvidencia(home.header.barraDelSitio, cp);
    });

    test('TC-B2C26-M-010 · «Reintentar» vuelve a cargar los métodos de entrega [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-010';
      const home = await iniciarSesion(page, testData);
      await home.header.esperarDireccionEnStoreLocator().catch(() => '');
      const modal = new MetodoEntregaModal(page);
      await modal.forzarErrorCargaDirecciones();
      await home.header.storeLocator.click();
      await expect(modal.tituloError).toBeVisible({ timeout: 30000 });
      await modal.capturarModal(cp, 4, 'pantalla de error');
      await modal.restaurarCargaDirecciones();
      await modal.reintentar();
      await expect(modal.tituloDireccionesGuardadas, 'un toque en «Reintentar» carga las direcciones').toBeVisible({ timeout: 20000 });
      await expect(modal.bloqueDireccionDespacho).toBeVisible();
      await modal.capturarModal(cp);
    });

    test('TC-B2C26-M-011 · «Volver al inicio» cierra la pantalla de error y regresa al Home [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-011';
      const home = await iniciarSesion(page, testData);
      await home.irAUnaCategoria();
      await capturarEvidencia(page, cp, 3, 'PLP');
      const modal = new MetodoEntregaModal(page);
      await modal.forzarErrorCargaDirecciones();
      await new HeaderFull(page).storeLocator.click();
      await expect(modal.tituloError, 'pantalla de error desde la PLP').toBeVisible({ timeout: 30000 });
      await modal.capturarModal(cp, 5, 'pantalla de error');
      await modal.volverAlInicio();
      await expect(modal.root).toBeHidden({ timeout: 15000 });
      await expect(page).toHaveURL(new RegExp(`^${escapar(token(testData, 'BASE_URL')!.replace(/\/$/, ''))}/?(\\?.*)?$`), { timeout: 20000 });
      await modal.restaurarCargaDirecciones();
      await capturarEvidencia(page, cp);
    });

    test('TC-B2C26-M-012 · «Activar mi ubicación actual» con permiso concedido: loader y PIN [Guest] (Mobile)', async ({ page, testData }) => {
      await ubicacionConcedida(page, testData, 'TC-B2C26-M-012');
    });

    test('TC-B2C26-M-013 · Sin permiso de ubicación se muestra el modal para activarlo [Guest] (Mobile)', async ({ page }) => {
      const cp = 'TC-B2C26-M-013';
      const { modal } = await abrirModal(page);
      await modal.tocarUbicacionActual();
      await expect(modal.modalPermisos, 'modal de permisos de ubicación').toBeVisible({ timeout: 20000 });
      await capturarEvidencia(modal.modalPermisos, cp, 6, 'modal de permisos');
      await modal.cerrarModalPermisos();
      await expect(modal.encabezado, 'vuelve a «Elige tu método de entrega»').toBeVisible();
      expect((await modal.estiloTab(modal.tabDespachoDomicilio)).activa).toBe(true);
      await modal.capturarModal(cp);
    });

    test('TC-B2C26-M-015 · Conceder el permiso de ubicación obtiene las coordenadas y lleva al PIN [Guest] (Mobile)', async ({ page, testData }) => {
      await ubicacionConcedida(page, testData, 'TC-B2C26-M-015');
    });

    test('TC-B2C26-M-016 · Falla al obtener coordenadas muestra el toast y permite otro método [Guest] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-016';
      await new MetodoEntregaModal(page).simularUbicacionNoDisponible();
      const { modal } = await abrirModal(page);
      await modal.tocarUbicacionActual();
      await expect(modal.toastUbicacion).toBeVisible({ timeout: 20000 });
      await expect(modal.root, 'el modal sigue abierto').toBeVisible();
      await capturarEvidencia(page, cp, 6, 'toast de error');
      await sugerenciasEnVivo(modal, token(testData, 'DIRECCION_DESPACHO')!, cp, 8);
      await expect(modal.botonUbicacionActual, 'se puede volver a tocar').toBeEnabled();
      await capturarEvidencia(page, cp);
    });

    test('TC-B2C26-M-017 · El formulario manual muestra sus campos con Continuar deshabilitado [Guest] (Mobile)', async ({ page }) => {
      const cp = 'TC-B2C26-M-017';
      const { modal } = await abrirModal(page);
      await abrirFormularioManual(modal, 'Ca');
      await formularioVacio(modal);
      await expect(modal.botonContinuarManual).toBeDisabled();
      await modal.capturarModal(cp);
    });

    test('TC-B2C26-M-018 · Completar lo obligatorio habilita «Continuar con detalle de la dirección» [Guest] (Mobile)', async ({ page }) => {
      const cp = 'TC-B2C26-M-018';
      const { modal } = await abrirModal(page);
      await abrirFormularioManual(modal, 'Ca');
      await modal.elegirRegion('Metropolitana');
      await modal.elegirComuna((await modal.opciones(modal.selectComuna))[0]);
      await expect(modal.botonContinuarManual, 'deshabilitado sin Dirección').toBeDisabled();
      await modal.capturarModal(cp, 8, 'Región y Comuna elegidas');
      await modal.campoCalle.fill('Calle de prueba');
      await expect(modal.botonContinuarManual, 'habilitado').toBeEnabled();
      await modal.capturarModal(cp);
    });

    test('TC-B2C26-M-019 · Los dropdown de Región y Comuna muestran los catálogos de Chile [Guest] (Mobile)', async ({ page }) => {
      const cp = 'TC-B2C26-M-019';
      const { modal } = await abrirModal(page);
      await abrirFormularioManual(modal, 'Ca');
      const regiones = await modal.opciones(modal.selectRegion);
      expect(regiones.length, `regiones (${regiones.join(', ')})`).toBe(16);
      await expect(modal.selectComuna, 'Comuna no es texto libre').toHaveJSProperty('tagName', 'SELECT');
      await modal.elegirRegion('Metropolitana');
      const comunas = await modal.opciones(modal.selectComuna);
      await modal.capturarModal(cp, 10, `${comunas.length} comunas de la RM`);
      expect(comunas).toEqual(expect.arrayContaining(['Santiago', 'Las Condes', 'La Florida', 'Maipú', 'Puente Alto']));
      expect(comunas, 'solo comunas de la RM (Machalí es de O\'Higgins)').not.toContain('Machalí');
      expect(comunas, 'solo comunas de la RM').not.toContain('Valparaíso');
    });

    test('TC-B2C26-M-020 · Continuar desde el formulario manual lleva al PIN con la dirección precargada [Guest] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-020';
      const p = partes(token(testData, 'DIRECCION_DESPACHO')!);
      const { modal } = await abrirModal(page);
      await abrirFormularioManual(modal, p.calle);
      const region = await modal.completarFormularioManual(p.calle, p.numero, p.comuna);
      await modal.capturarModal(cp, 7, `formulario completo (${region})`);
      await modal.observarCarga();
      await modal.botonContinuarManual.click();
      await expect(modal.confirmacionPin).toBeVisible({ timeout: 30000 });
      expect((await modal.cargaObservada()).spinner, 'loader').toBe(true);
      await expect(modal.confirmacionPin).toContainText(new RegExp(`${escapar(p.calle)}\\s+${p.numero}`, 'i'));
      await expect(modal.confirmacionPin).toContainText(new RegExp(`${escapar(p.comuna)}.*${escapar(region)}`, 'i'));
      const centro = await modal.centroDelMapa();
      expect(centro.lat).toBeGreaterThan(-34);
      expect(centro.lat).toBeLessThan(-33);
      await capturarEvidencia(page, cp);
    });

    test('TC-B2C26-M-021 · Elegir una dirección guardada la setea sin PIN ni OTP y mantiene la página [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-021';
      const home = await iniciarSesion(page, testData);
      await asegurarCasa(page, testData);
      const carro = await new CarroPage(page).goto();
      await expect(carro.carroVacio.or(carro.totalUnidades)).toBeVisible({ timeout: 30000 });
      if (!(await carro.carroVacio.isVisible())) await carro.vaciar();
      await expect(carro.carroVacio, 'precondición: carro vacío').toBeVisible({ timeout: 30000 });
      await new PaginaHabilitada(page).goto();
      await home.irAUnaCategoria();
      const urlPlp = page.url();
      await new HeaderFull(page).storeLocator.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await expect(modal.tituloDireccionesGuardadas).toBeVisible({ timeout: 30000 });
      await modal.capturarModal(cp, 5, 'direcciones guardadas');
      const desde = marcaOtp();
      await modal.elegirGuardada('Camino La Fuente 15…');
      const pidioOtp = await modal.modalOtp.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false);
      if (pidioOtp) await capturarEvidencia(page, cp, 7, 'se pidió OTP «Autenticación requerida»');
      expect.soft(pidioOtp, 'no se pide PIN ni OTP al elegir una guardada').toBe(false);
      if (pidioOtp) await otpSiAparece(page, testData, desde, 5000);
      await expect(modal.root, 'el modal se cierra').toBeHidden({ timeout: 30000 });
      await expect.poll(() => textoHeader(page), { timeout: 30000, message: 'header con la nueva dirección' }).toMatch(/camino la fuente/i);
      expect(page.url(), 'sigue en la PLP').toBe(urlPlp);
      await capturarEvidencia(page, cp);
      await asegurarCasa(page, testData);
    });

    test('TC-B2C26-M-022 · Error de API al cambiar de dirección muestra toast y mantiene la anterior [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-022';
      await iniciarSesion(page, testData);
      await asegurarCasa(page, testData);
      const home = await new PaginaHabilitada(page).goto();
      const antes = await home.header.esperarDireccionEnStoreLocator();
      await home.header.storeLocator.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await expect(modal.tituloDireccionesGuardadas).toBeVisible({ timeout: 30000 });
      // El cambio hace dos POST smu-delivery/apply: el primero responde que hace falta el OTP y el segundo, con el
      // código, aplica la dirección. Se hace fallar solo el segundo (el que bloquearía el tester en DevTools).
      let aplicaciones = 0;
      await page.route(/\/smu-delivery\/v1\/organizations\/[^/]+\/apply/, (route) =>
        route.request().method() === 'POST' && ++aplicaciones > 1
          ? route.fulfill({ status: 500, contentType: 'application/json', body: '{"title":"simulado"}' })
          : route.continue(),
      );
      const desde = marcaOtp();
      await modal.elegirGuardada('Camino La Fuente 15…');
      // El sitio pide el OTP de "Autenticación requerida" antes de aplicar el cambio (B2C-1156).
      const otpCerrado = await otpSiAparece(page, testData, desde, 20000).then(() => true, () => false);
      await capturarEvidencia(page, cp, 7, otpCerrado ? 'tras el OTP' : 'tras el OTP, «Autenticación requerida» queda en blanco');
      await expect(modal.toastErrorCambio, 'toast «no pudimos cambiar tu dirección»').toBeVisible({ timeout: 30000 });
      await expect(modal.tituloDireccionesGuardadas, 'el modal vuelve a la lista').toBeVisible();
      await capturarEvidencia(page, cp, 7, 'toast de error y lista');
      await page.unrouteAll({ behavior: 'ignoreErrors' });
      await page.reload({ waitUntil: 'domcontentloaded' });
      expect(await new HeaderFull(page).esperarDireccionEnStoreLocator(), 'la dirección activa no cambió').toBe(antes);
      await capturarEvidencia(page, cp);
    });

    test('TC-B2C26-M-023 · Una dirección guardada sin cobertura deriva al flujo Sin cobertura [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-023';
      const { modal } = await abrirModalLogueado(page, testData);
      await modal.capturarModal(cp, 4, 'direcciones guardadas');
      await modal.elegirGuardada('T-551');
      await expect(modal.modalSinCobertura, 'flujo Sin cobertura (B2C-123)').toBeVisible({ timeout: 30000 });
      await capturarEvidencia(page, cp);
      await modal.modalSinCobertura.getByRole('button', { name: /cambiar m[ée]todo de entrega/i }).click().catch(() => {});
    });

    test('TC-B2C26-M-026 · El menú ⋮ aparece solo en las direcciones guardadas no activas [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-026';
      const { modal } = await abrirModalLogueado(page, testData);
      const activa = await etiquetaActiva(modal);
      const guardadas = await modal.direccionesGuardadas();
      await modal.capturarModal(cp, 4, 'direcciones guardadas');
      expect(guardadas.filter((g) => g.etiqueta !== activa).every((g) => g.tieneMenu), 'menú ⋮ en las no activas').toBe(true);
      expect(guardadas.find((g) => g.etiqueta === activa)?.tieneMenu, `la activa («${activa}») no muestra el menú ⋮`).toBe(false);
    });

    test('TC-B2C26-M-027 · «No gracias» en la confirmación de eliminar mantiene la dirección [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-027';
      const { modal } = await abrirModalLogueado(page, testData);
      const etiqueta = await duplicadaEliminable(modal);
      await modal.pedirEliminar(etiqueta);
      await expect(modal.botonAceptarEliminar).toBeVisible();
      await expect(modal.botonNoGracias).toBeVisible();
      await capturarEvidencia(modal.modalEliminar, cp, 6, '¿Quieres eliminar tu dirección?');
      await modal.botonNoGracias.click();
      await expect(modal.modalEliminar).toBeHidden({ timeout: 15000 });
      await expect(modal.tarjetaGuardada(etiqueta), `«${etiqueta}» sigue en la lista`).toBeVisible();
      await modal.capturarModal(cp);
    });

    test('TC-B2C26-M-028 · «Aceptar» elimina la dirección y muestra el toast de éxito [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-028';
      const { modal } = await abrirModalLogueado(page, testData);
      const etiqueta = await duplicadaEliminable(modal);
      const linea = (await modal.direccionesGuardadas()).find((g) => g.etiqueta === etiqueta)!.direccion;
      const n = await copias(modal, linea);
      await modal.pedirEliminar(etiqueta);
      await modal.observarCarga();
      await modal.botonAceptarEliminar.click();
      await expect(modal.toastEliminada, 'toast «Tu dirección fue eliminada con éxito.»').toBeVisible({ timeout: 20000 });
      const t0 = Date.now();
      await capturarEvidencia(page, cp, 8, `«${etiqueta}» eliminada`);
      await expect(modal.modalEliminar).toBeHidden();
      await expect.poll(() => copias(modal, linea), { timeout: 15000, message: `«${linea}» pasa de ${n} a ${n - 1} copias` }).toBe(n - 1);
      expect((await modal.cargaObservada()).spinner, 'loader').toBe(true);
      await expect(modal.toastEliminada, 'el toast se cierra solo').toBeHidden({ timeout: 10000 });
      const dura = Date.now() - t0;
      expect(dura, `el toast duró ~${dura} ms tras verse`).toBeLessThan(7000);
      await modal.capturarModal(cp);
    });

    test('TC-B2C26-M-029 · Error al eliminar muestra el toast de error y la dirección permanece [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-029';
      const { modal } = await abrirModalLogueado(page, testData);
      const etiqueta = await duplicadaEliminable(modal);
      await modal.simularErrorEliminar();
      await modal.pedirEliminar(etiqueta);
      await modal.botonAceptarEliminar.click();
      await expect(modal.toastErrorEliminar).toBeVisible({ timeout: 20000 });
      await capturarEvidencia(page, cp, 8, 'toast de error');
      await page.waitForTimeout(7000);
      await expect(modal.toastErrorEliminar, 'no se cierra solo').toBeVisible();
      await expect(modal.tarjetaGuardada(etiqueta), 'la dirección sigue').toBeVisible();
      await capturarEvidencia(page, cp);
    });

    test('TC-B2C26-M-030 · El header del logueado sin dirección en sesión muestra la de su última compra [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-030';
      // Ventana nueva sin la sesión guardada: login por correo + OTP.
      const ordenes: string[] = [];
      page.on('response', async (r) => {
        if (/\/customers\/[^/]+\/orders/.test(r.url())) ordenes.push(await r.text().catch(() => ''));
      });
      const home = await new PaginaHabilitada(page).goto();
      await capturarEvidencia(home.header.barraDelSitio, cp, 2, 'Home sin sesión');
      await loginConOtp(page, testData);
      await page.context().storageState({ path: SESION });
      const enHeader = await home.header.esperarDireccionEnStoreLocator(45000);
      const texto = await textoHeader(page);
      await capturarEvidencia(home.header.barraDelSitio, cp, 4, `header: «${texto}»`);
      expect(texto, 'dirección + «Desde» + fecha + horario + precio').toMatch(/desde:\s*\S+\s+\d{1,2}\/\d{1,2},\s*\d{1,2}:\d{2}\s*hrs\.?\s*(\$[\d.]+|gratis)/i);
      // La última compra completada de {COMPRADOR_USER} es en {DIRECCION_DESPACHO_001} (Calle Uno 23).
      expect(enHeader, 'dirección de la última compra').toMatch(new RegExp(escapar(partes(token(testData, 'DIRECCION_DESPACHO_001')!).calle), 'i'));
    });

    test('TC-B2C26-M-032 · El header del invitado muestra la dirección de la sesión con el formato definido [Guest] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-032';
      const dir = token(testData, 'DIRECCION_DESPACHO')!;
      const p = partes(dir);
      const { home } = await fijarComoInvitado(page, dir);
      const texto = await textoHeader(page);
      await capturarEvidencia(home.header.barraDelSitio, cp, 4, `header: «${texto}»`);
      const c = await home.header.composicionDelStoreLocator();
      expect.soft(c.iconos.filter((i) => i.dx < c.textoDx).length, 'ícono de despacho').toBeGreaterThan(0);
      expect.soft(c.iconos.filter((i) => i.dx > c.textoDx).length, 'ícono de edición').toBeGreaterThan(0);
      expect.soft(texto, 'calle y numeración').toMatch(new RegExp(`${escapar(p.calle)}\\s+${p.numero}`, 'i'));
      expect.soft(texto, `comuna (${p.comuna})`).toMatch(new RegExp(escapar(p.comuna), 'i'));
    });

    test('TC-B2C26-M-033 · La dirección del invitado no persiste al cerrar el navegador [Guest] (Mobile)', async ({ page, browser, testData }) => {
      const cp = 'TC-B2C26-M-033';
      const { home, enHeader } = await fijarComoInvitado(page, token(testData, 'DIRECCION_DESPACHO')!);
      await capturarEvidencia(home.header.barraDelSitio, cp, 4, `header: «${enHeader}»`);
      await page.context().close();
      const otra = await ventanaNueva(browser, page, testData);
      const home2 = await new PaginaHabilitada(otra).goto();
      await expect(home2.header.storeLocator).toContainText(/elige una forma de entrega/i, { timeout: 30000 });
      await capturarEvidencia(otra, cp);
      await otra.context().close();
    });

    test('TC-B2C26-M-035 · La dirección activa se mantiene en el header al navegar por el sitio [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-035';
      await iniciarSesion(page, testData);
      const home = await new PaginaHabilitada(page).goto();
      const activa = await home.header.esperarDireccionEnStoreLocator();
      const vistos = await recorrerSitio(page, testData, cp, home);
      for (const [pagina, valor] of Object.entries(vistos)) expect.soft(valor, `Store Locator en ${pagina}`).toBe(activa);
      await capturarEvidencia(page, cp);
    });

    test('TC-B2C26-M-036 · Al reiniciar sesión se recupera la dirección de la última compra o la última seteada [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C26-M-036';
      const home = await iniciarSesion(page, testData);
      const antes = await home.header.esperarDireccionEnStoreLocator();
      await capturarEvidencia(home.header.barraDelSitio, cp, 3, `dirección activa «${antes}»`);
      await new MenuCuenta(page).cerrarSesion();
      await capturarEvidencia(page, cp, 4, 'sesión cerrada');
      await loginConOtp(page, testData);
      await page.context().storageState({ path: SESION });
      const despues = await new HeaderFull(page).esperarDireccionEnStoreLocator(45000);
      await capturarEvidencia(new HeaderFull(page).barraDelSitio, cp, 5, `tras volver a iniciar sesión: «${despues}»`);
      expect(despues, 'misma dirección (última compra / última seteada)').toBe(antes);
    });

    test('TC-B2C26-M-037 · El formulario manual acepta +, - y / en la dirección [Guest] (Mobile)', async ({ page, testData }) => {
      await caracteresEspeciales(page, testData, 'TC-B2C26-M-037');
    });

    test('TC-B2C26-M-038 · Dirección manual sin numeración se ve con «S/N» [Guest] (Mobile)', async ({ page, testData }) => {
      await sinNumeroInvitado(page, testData, 'TC-B2C26-M-038');
    });

    test('TC-B2C26-M-039 · Dirección sin numeración se guarda en el perfil con «S/N» [Logueado] (Mobile)', async ({ page, testData }) => {
      await sinNumeroLogueado(page, testData, 'TC-B2C26-M-039');
    });

    test('TC-B2C26-M-040 · Plus Code de Google se agrega sin problemas [Guest] (Mobile)', async ({ page, testData }) => {
      await plusCode(page, testData, 'TC-B2C26-M-040');
    });
  });
});

// ---------------------------------------------------------------------- flujos compartidos D/M

async function ubicacionConcedida(page: Page, testData: LoadedTestData, cp: string): Promise<void> {
  const lat = Number(token(testData, 'LATITUD_DESPACHO')), lng = Number(token(testData, 'LONGITUD_DESPACHO'));
  await new MetodoEntregaModal(page).concederUbicacion(lat, lng);
  const { modal } = await abrirModal(page);
  await modal.observarCarga();
  await modal.tocarUbicacionActual();
  await expect(modal.confirmacionPin, 'B2C-99').toBeVisible({ timeout: 30000 });
  const carga = await modal.cargaObservada();
  expect(carga.texto || carga.spinner, `loader (${JSON.stringify(carga)})`).toBe(true);
  const centro = await modal.centroDelMapa();
  expect(Math.abs(centro.lat - lat), `PIN en la ubicación (${centro.lat},${centro.lng})`).toBeLessThan(0.002);
  expect(Math.abs(centro.lng - lng)).toBeLessThan(0.002);
  await capturarEvidencia(page, cp);
}

async function caracteresEspeciales(page: Page, testData: LoadedTestData, cp: string): Promise<void> {
  const calle = token(testData, 'DIRECCION_CARACTERES_ESPECIALES')!;
  const { modal } = await abrirModal(page);
  await abrirFormularioManual(modal, 'Pa');
  await modal.elegirRegion('Metropolitana');
  await modal.elegirComuna('Las Condes');
  await modal.campoCalle.fill(calle);
  await modal.campoNumeracion.fill('120');
  await expect(modal.campoCalle, 'texto tal como se escribió').toHaveValue(calle);
  await expect(modal.root.getByText(/inv[áa]lid|no permitid|caracteres/i), 'sin mensaje de error').toHaveCount(0);
  await expect(modal.botonContinuarManual).toBeEnabled();
  await modal.capturarModal(cp, 8, 'formulario con caracteres especiales');
  await modal.observarCarga();
  await modal.botonContinuarManual.click();
  await expect(modal.confirmacionPin).toBeVisible({ timeout: 30000 });
  expect((await modal.cargaObservada()).spinner, 'loader').toBe(true);
  await expect(modal.confirmacionPin, `calle precargada «${calle}»`).toContainText(calle);
  await capturarEvidencia(page, cp);
}

/** {DIRECCION_SIN_NUMERO} = "Región, Comuna, Calle". */
function sinNumero(testData: LoadedTestData): { region: string; comuna: string; calle: string } {
  const [region, comuna, calle] = token(testData, 'DIRECCION_SIN_NUMERO')!.split(',').map((s) => s.trim());
  return { region, comuna, calle };
}

async function confirmarDetalles(modal: MetodoEntregaModal): Promise<void> {
  const continuar = modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i });
  if (await continuar.isVisible().catch(() => false)) await continuar.click();
  await modal.confirmacionPin.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
}

async function sinNumeroInvitado(page: Page, testData: LoadedTestData, cp: string): Promise<void> {
  const d = sinNumero(testData);
  const { home, modal } = await abrirModal(page);
  await abrirFormularioManual(modal, d.calle);
  await modal.elegirRegion(d.region);
  await modal.elegirComuna(d.comuna);
  await modal.campoCalle.fill(d.calle);
  await modal.capturarModal(cp, 7, 'formulario sin numeración');
  await modal.botonContinuarManual.click();
  await expect(modal.confirmacionPin).toBeVisible({ timeout: 30000 });
  await capturarEvidencia(page, cp, 8, 'B2C-99');
  await confirmarDetalles(modal);
  const enHeader = await home.header.esperarDireccionEnStoreLocator(45000);
  await capturarEvidencia(home.header.barraDelSitio, cp, 10, `header: «${enHeader}»`);
  await home.header.storeLocator.click();
  const m2 = await new MetodoEntregaModal(page).esperarAbierto();
  await expect(m2.bloqueDireccionDespacho).toBeVisible({ timeout: 20000 });
  const activa = ((await m2.direccionActiva.innerText()) ?? '').replace(/\s+/g, ' ').trim();
  await m2.capturarModal(cp, 12, `dirección activa: «${activa}»`);
  expect.soft(activa, 'modal: S/N en la numeración').toMatch(/S\/N/);
  expect.soft(activa, 'modal: comuna y región').toMatch(new RegExp(`${escapar(d.comuna)}.*${escapar(d.region)}`, 'i'));
  expect.soft(enHeader, 'header: S/N en la numeración').toMatch(/S\/N/);
}

async function sinNumeroLogueado(page: Page, testData: LoadedTestData, cp: string): Promise<void> {
  const d = sinNumero(testData);
  await iniciarSesion(page, testData);
  const carro = await new CarroPage(page).goto();
  await expect(carro.carroVacio.or(carro.totalUnidades)).toBeVisible({ timeout: 30000 });
  if (!(await carro.carroVacio.isVisible())) await carro.vaciar();
  await expect(carro.carroVacio, 'precondición: carro vacío').toBeVisible({ timeout: 30000 });
  const { modal } = await abrirModalLogueado(page, testData);
  const antes = (await modal.direccionesGuardadas()).map((g) => g.etiqueta);
  await abrirFormularioManual(modal, d.calle);
  await modal.elegirRegion(d.region);
  await modal.elegirComuna(d.comuna);
  await modal.campoCalle.fill(d.calle);
  await modal.capturarModal(cp, 7, 'formulario sin numeración');
  await modal.botonContinuarManual.click();
  await expect(modal.confirmacionPin).toBeVisible({ timeout: 30000 });
  const desde = marcaOtp();
  await confirmarDetalles(modal);
  await otpSiAparece(page, testData, desde, 45000);
  await new HeaderFull(page).esperarDireccionEnStoreLocator(45000);
  await capturarEvidencia(page, cp, 8, 'dirección seteada');

  const revisar = async (paso: number, etiquetaPaso: string) => {
    await new HeaderFull(page).storeLocator.click();
    const m = await new MetodoEntregaModal(page).esperarAbierto();
    await expect(m.tituloDireccionesGuardadas).toBeVisible({ timeout: 30000 });
    const nueva = (await m.direccionesGuardadas()).find((g) => !antes.includes(g.etiqueta));
    await m.capturarModal(cp, paso, etiquetaPaso);
    expect(nueva, 'la dirección nueva quedó guardada en el perfil').toBeTruthy();
    expect.soft(nueva!.direccion, `«${nueva!.direccion}» con S/N`).toMatch(/S\/N/);
    await m.botonCerrar.click();
    return nueva!;
  };
  const nueva = await revisar(9, 'lista con la dirección nueva');
  await new MenuCuenta(page).cerrarSesion();
  await loginConOtp(page, testData);
  await page.context().storageState({ path: SESION });
  await revisar(10, 'tras volver a iniciar sesión');

  // Limpieza: vuelve a "Casa" y elimina la dirección agregada.
  await asegurarCasa(page, testData);
  await new HeaderFull(page).storeLocator.click();
  const m = await new MetodoEntregaModal(page).esperarAbierto();
  await expect(m.tituloDireccionesGuardadas).toBeVisible({ timeout: 30000 });
  await m.pedirEliminar(nueva.etiqueta).catch(() => {});
  await m.botonAceptarEliminar.click().catch(() => {});
  await m.toastEliminada.waitFor({ state: 'visible', timeout: 20000 }).catch(() => {});
}

async function plusCode(page: Page, testData: LoadedTestData, cp: string): Promise<void> {
  const codigo = token(testData, 'DIRECCION_PLUS_CODE')!;
  const { home, modal } = await abrirModal(page);
  await modal.campoBusqueda.click();
  await modal.campoBusqueda.pressSequentially(codigo, { delay: 60 });
  await expect(modal.sugerencias.first(), 'sugerencia del Plus Code').toBeVisible({ timeout: 30000 });
  const opciones = (await modal.sugerencias.allInnerTexts()).map((t) => t.replace(/\s+/g, ' '));
  await modal.capturarModal(cp, 6, `sugerencias: ${opciones.join(' | ')}`);
  const sug = modal.sugerencias.filter({ hasText: /las condes/i }).first();
  await expect(sug, `una sugerencia en Las Condes (${opciones.join(' | ')})`).toBeVisible();
  await sug.click();
  await expect(modal.confirmacionPin, 'B2C-99').toBeVisible({ timeout: 30000 });
  await capturarEvidencia(page, cp, 8, 'B2C-99');
  const detalles = modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i });
  if (await detalles.isVisible().catch(() => false)) await detalles.click();
  await expect(modal.confirmacionPin, 'Comuna Las Condes').toContainText(/las condes/i);
  await expect(modal.confirmacionPin, 'Región Metropolitana').toContainText(/metropolitana/i);
  await capturarEvidencia(page, cp, 8, 'detalles con Las Condes, Metropolitana');
  await modal.confirmacionPin.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
  const enHeader = await home.header.esperarDireccionEnStoreLocator(45000);
  await expect(page.getByText(/ups, algo sali|error/i).locator('visible=true'), 'sin mensajes de error').toHaveCount(0);
  await capturarEvidencia(home.header.barraDelSitio, cp, 10, `header: «${enHeader}»`);
  await capturarEvidencia(page, cp);
}
