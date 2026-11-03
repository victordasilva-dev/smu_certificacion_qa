import * as fs from 'fs';
import * as path from 'path';
import { Locator, Page, Request } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { LoadedTestData } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { esperarOtp, marcaOtp } from './support/otp';
import { loginConOtp } from './support/loginOtp';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { ConfirmacionPinModal } from './pages/ConfirmacionPinModal';
import { AgotarseModal } from './pages/AgotarseModal';
import { LoginModal } from './pages/LoginModal';
import { PDPPage } from './pages/PDPPage';

/**
 * B2C-99 — Confirmar dirección con PIN en mapa (planilla SP2, 74 TC: 37 Desktop + 37 Mobile).
 *
 * Quedan sin `test()`: D-026 y M-026, Bloqueado Data ({PIN_UBICACION_API_ENDPOINT} vacío).
 *
 * El paso 6 de casi todos los TC dice que la sugerencia de Google lleva a "Detalles de la
 * dirección"; el sitio abre primero "Agregar nueva dirección" (el subflujo del PIN). Los TC que
 * verifican "Detalles" llegan ahí con "Continuar con detalles de la dirección" y lo dejan anotado;
 * el 001 (la pantalla a la que se llega) lo verifica.
 *
 * Los logueados (013, 031–033) usan {USER_AUTH_001} por correo + OTP; la sesión se guarda en
 * `.qa/auth/b99-user.json` (no se commitea). Corren con --workers=1: comparten cuenta.
 */

const SESION = path.resolve('.qa/auth/b99-user.json');
const ROJO = 'rgb(218, 41, 28)';
/** Distancias del PIN: bien dentro y bien fuera del radio de {RADIO_PIN_METROS} m. */
const DENTRO = (radio: number) => Math.round(radio / 3);
const FUERA = (radio: number) => Math.round(radio * 1.6);

function escapar(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** "Calle Uno 23, La Florida" → la sugerencia de Google con ese número y esa comuna. */
function sugerenciaDe(direccion: string): RegExp {
  const n = direccion.match(/\d+/)?.[0];
  const comuna = direccion.split(',').pop()!.trim();
  return new RegExp(`(?<!\\d)${n ?? ''}(?!\\d)[\\s\\S]*${escapar(comuna)}`, 'i');
}

function nota(tipo: string, descripcion: string): void {
  test.info().annotations.push({ type: tipo, description: descripcion });
}

function correoDe(testData: LoadedTestData): string {
  return token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
}

async function abrirModal(page: Page): Promise<{ home: PaginaHabilitada; modal: MetodoEntregaModal }> {
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  return { home, modal };
}

/** Pasos 1–5: Home, Store Locator, sugerencia de Google. Devuelve el título de la pantalla a la que llegó. */
async function elegirSugerencia(page: Page, testData: LoadedTestData, cp: string, tokenDir = 'DIRECCION_DESPACHO_001', capturar = true) {
  const { home, modal } = await abrirModal(page);
  const direccion = token(testData, tokenDir)!;
  if (capturar) await modal.capturarModal(cp, 4, 'modal «Elige tu método de entrega»');
  await modal.escribirEnBuscador(direccion.split(',')[0]);
  const sugerencia = modal.sugerencias.filter({ hasText: sugerenciaDe(direccion) }).first();
  await expect(sugerencia, `sugerencia de Google para ${direccion}`).toBeVisible({ timeout: 30000 });
  await sugerencia.click();
  const pin = new ConfirmacionPinModal(page);
  await expect(pin.actual, 'pantalla de confirmación con PIN').toBeVisible({ timeout: 30000 });
  const llegada = await pin.titulo();
  return { home, modal, pin, direccion, llegada };
}

/** Pasos 1–6 hasta "Detalles de la dirección" (pasando por "Agregar nueva dirección" si el sitio la abre primero). */
async function hastaDetalles(page: Page, testData: LoadedTestData, cp: string, tokenDir = 'DIRECCION_DESPACHO_001') {
  const r = await elegirSugerencia(page, testData, cp, tokenDir);
  if (!/detalles/i.test(r.llegada)) {
    nota('Paso 6', `La sugerencia de Google abre «${r.llegada}», no «Detalles de la dirección»; se llegó a Detalles con «Continuar con detalles de la dirección».`);
    await r.pin.botonContinuar.click();
  }
  await expect(r.pin.detalles, '«Detalles de la dirección»').toBeVisible({ timeout: 30000 });
  await page.waitForTimeout(1500);
  await r.pin.capturar(cp, 6, '«Detalles de la dirección»');
  return r;
}

/** Pasos 1–8 hasta "Agregar nueva dirección" abierto desde el PIN "Ajusta aquí" de Detalles. */
async function hastaAjuste(page: Page, testData: LoadedTestData, cp: string) {
  const r = await hastaDetalles(page, testData, cp);
  const centroDetalles = await r.pin.centro(r.pin.detalles);
  await r.pin.ajustaAqui.click();
  await expect(r.pin.agregar, '«Agregar nueva dirección»').toBeVisible({ timeout: 30000 });
  await expect.poll(async () => !!(await r.pin.cajaDelPin(r.pin.agregar)), { timeout: 20000, message: 'el PIN se dibuja en el mapa' }).toBe(true);
  await page.waitForTimeout(1000);
  const original = (await r.pin.cajaDelPin(r.pin.agregar))!;
  await r.pin.capturar(cp, 8, '«Agregar nueva dirección» con el PIN');
  const radio = Number(token(testData, 'RADIO_PIN_METROS') ?? '150');
  return { ...r, centroDetalles, original, radio };
}

/** Red lenta del precondicional "DevTools con throttling Slow 3G" (solo chromium). */
async function redLenta(page: Page, activa: boolean): Promise<void> {
  try {
    const cdp = await page.context().newCDPSession(page);
    await cdp.send('Network.emulateNetworkConditions', activa
      ? { offline: false, latency: 2000, downloadThroughput: 51200, uploadThroughput: 51200 }
      : { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
  } catch (e) {
    nota('Red lenta', `No se pudo emular Slow 3G: ${(e as Error).message}`);
  }
}

/** Bloquea la carga del mapa de Google (scripts del mapa, teselas e imagen estática), no la geocodificación. */
async function bloquearMapa(page: Page): Promise<void> {
  await page.route(/maps\.googleapis\.com|maps\.gstatic\.com/, (r) => {
    const u = r.request().url();
    if (/place|geocod|AutocompletionService|GetPredictions|Details/i.test(u)) return r.continue();
    return r.abort();
  });
}

/** Pasos 1–6 con el mapa bloqueado desde que se elige la sugerencia. */
async function hastaDetallesSinMapa(page: Page, testData: LoadedTestData, cp: string) {
  const { modal } = await abrirModal(page);
  const direccion = token(testData, 'DIRECCION_DESPACHO_001')!;
  await modal.capturarModal(cp, 4, 'modal «Elige tu método de entrega»');
  await modal.escribirEnBuscador(direccion.split(',')[0]);
  const sugerencia = modal.sugerencias.filter({ hasText: sugerenciaDe(direccion) }).first();
  await expect(sugerencia).toBeVisible({ timeout: 30000 });
  await bloquearMapa(page);
  await sugerencia.click();
  const pin = new ConfirmacionPinModal(page);
  await expect(pin.actual).toBeVisible({ timeout: 30000 });
  await page.waitForTimeout(3000);
  const llegada = await pin.titulo();
  if (!/detalles/i.test(llegada)) {
    nota('Paso 6', `Con el mapa bloqueado la sugerencia abre «${llegada}» (área del mapa en blanco, sin mensaje); se llegó a Detalles con «Continuar con detalles de la dirección».`);
    await pin.capturar(cp, 5, `«${llegada}» con el mapa sin cargar`);
    await pin.botonContinuar.click();
  }
  await expect(pin.detalles).toBeVisible({ timeout: 30000 });
  await page.waitForTimeout(2500);
  await pin.capturar(cp, 6, '«Detalles de la dirección» con el mapa sin cargar');
  return { modal, pin, direccion };
}

// --- Sesión iniciada ----------------------------------------------------------------------------

async function iniciarSesion(page: Page, testData: LoadedTestData): Promise<PaginaHabilitada> {
  if (fs.existsSync(SESION)) {
    await page.context().addCookies(JSON.parse(fs.readFileSync(SESION, 'utf-8')).cookies ?? []);
  }
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  const conSesion = await home.header.saludo.waitFor({ state: 'visible', timeout: 30000 }).then(
    () => true,
    async () => !(await new LoginModal(page).disparador.first().isVisible().catch(() => false)),
  );
  if (!conSesion) await loginConOtp(page, correoDe(testData));
  await new LoginModal(page).descartarPasskey();
  await expect(home.header.saludo, 'sesión iniciada').toBeVisible({ timeout: 30000 });
  fs.mkdirSync(path.dirname(SESION), { recursive: true });
  await page.context().storageState({ path: SESION });
  return home;
}

/** Responde el OTP de "Autenticación requerida" (y "Algunos productos podrían agotarse") si aparece. */
async function otpSiAparece(page: Page, testData: LoadedTestData, desde: Date, espera = 20000): Promise<boolean> {
  const agotarse = new AgotarseModal(page);
  const modal = new MetodoEntregaModal(page);
  const fin = Date.now() + espera;
  while (Date.now() < fin) {
    if (await agotarse.root.isVisible().catch(() => false)) await agotarse.botonSi.click().catch(() => {});
    if (await modal.modalOtp.isVisible().catch(() => false)) {
      await new LoginModal(page).escribirCodigo(await esperarOtp(correoDe(testData), desde, { digitos: 6 }));
      await modal.modalOtp.waitFor({ state: 'hidden', timeout: 30000 });
      return true;
    }
    await page.waitForTimeout(500);
  }
  return false;
}

/** Abre el Store Locator con sesión y devuelve las guardadas y la etiqueta de la activa. */
async function guardadasDeLaCuenta(page: Page): Promise<{ modal: MetodoEntregaModal; guardadas: { etiqueta: string; direccion: string }[]; activa: string }> {
  const home = await new PaginaHabilitada(page).goto();
  await home.header.esperarDireccionEnStoreLocator().catch(() => '');
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.tituloDireccionesGuardadas.waitFor({ state: 'visible', timeout: 30000 }).catch(() => {});
  // La lista se pinta después del título: leerla de inmediato la da vacía.
  let guardadas: { etiqueta: string; direccion: string }[] = [];
  for (let i = 0; i < 30 && !guardadas.length; i++) {
    guardadas = await modal.direccionesGuardadas();
    if (!guardadas.length) await page.waitForTimeout(1000);
  }
  if (!guardadas.length) throw new Error('No se pudo leer la lista de direcciones guardadas de la cuenta');
  const activaTxt = ((await modal.direccionActiva.textContent().catch(() => '')) ?? '').trim();
  const activa = (guardadas.find((g) => g.etiqueta === activaTxt) ?? guardadas.find((g) => activaTxt && g.direccion.startsWith(activaTxt)))?.etiqueta ?? '';
  return { modal, guardadas, activa };
}

/** Precondición "{USER_AUTH_001} no tiene guardada la dirección usada en el caso". */
async function verificarNoGuardada(page: Page, direccion: string): Promise<{ guardadas: { etiqueta: string; direccion: string }[]; activa: string }> {
  const { modal, guardadas, activa } = await guardadasDeLaCuenta(page);
  const calleNumero = direccion.split(',')[0].trim().toLowerCase();
  const ya = guardadas.filter((g) => g.direccion.toLowerCase().startsWith(calleNumero) || g.etiqueta.toLowerCase().startsWith(calleNumero.slice(0, 15)));
  await modal.cerrarConX().catch(() => page.keyboard.press('Escape'));
  if (ya.length) {
    nota('Precondición', `La cuenta {USER_AUTH_001} ya tiene guardada ${direccion} (${ya.map((g) => `«${g.etiqueta}»`).join(', ')}).`);
    throw new Error(`PRECONDICION_NO_CUMPLE: {USER_AUTH_001} ya tiene guardada «${direccion}»`);
  }
  return { guardadas, activa };
}

/** Deja la cuenta como estaba: vuelve a la activa anterior y elimina la guardada que creó el caso. */
async function restaurarCuenta(page: Page, testData: LoadedTestData, activaPrevia: string, previas: { etiqueta: string }[], direccionCaso: string): Promise<void> {
  try {
    const { modal, guardadas } = await guardadasDeLaCuenta(page);
    // Solo se borra lo que creó el caso: nunca con la lista previa vacía, y solo la de su dirección.
    if (!previas.length) throw new Error('lista previa vacía: no se elimina nada');
    const linea = direccionCaso.split(',')[0].trim().toLowerCase().slice(0, 12);
    const nuevas = guardadas.filter((g) => !previas.some((p) => p.etiqueta === g.etiqueta) && g.direccion.toLowerCase().includes(linea.split(' ').pop()!));
    if (activaPrevia && guardadas.some((g) => g.etiqueta === activaPrevia)) {
      const desde = marcaOtp();
      await modal.elegirGuardada(activaPrevia);
      await otpSiAparece(page, testData, desde, 20000);
    }
    for (const n of nuevas) {
      const { modal: m } = await guardadasDeLaCuenta(page);
      await m.pedirEliminar(n.etiqueta);
      await m.botonAceptarEliminar.click();
      await page.waitForTimeout(3000);
    }
    nota('Restauración', `Activa restaurada: «${activaPrevia}». Eliminadas: ${nuevas.map((n) => `«${n.etiqueta}»`).join(', ') || '(ninguna)'}.`);
  } catch (e) {
    nota('Restauración', `No se pudo dejar la cuenta como estaba: ${(e as Error).message.slice(0, 200)}`);
  }
}

/** Logueado, pasos 1–8: agrega la dirección y valida el OTP. Devuelve la guardada nueva. */
async function guardarComoLogueado(page: Page, testData: LoadedTestData, cp: string, tokenDir: string) {
  await iniciarSesion(page, testData);
  const direccion = token(testData, tokenDir)!;
  const previo = await verificarNoGuardada(page, direccion);
  const r = await hastaDetalles(page, testData, cp, tokenDir);
  const iconoPinPorDefecto = await r.pin.detalles
    .locator('[role="radio"][aria-checked="true"]')
    .first()
    .evaluate((e) => ({ nombre: e.getAttribute('aria-label'), svg: e.querySelector('svg')?.innerHTML ?? '' }));
  const desde = marcaOtp();
  await r.pin.botonAgregarDireccion.click();
  const huboOtp = await otpSiAparece(page, testData, desde, 30000);
  nota('OTP', huboOtp ? 'Se validó el código OTP de «Autenticación requerida».' : 'No apareció «Autenticación requerida».');
  await page.waitForTimeout(4000);
  const { modal, guardadas } = await guardadasDeLaCuenta(page);
  await modal.capturarModal(cp, 9, 'direcciones guardadas de la cuenta');
  const nueva = guardadas.find((g) => !previo.guardadas.some((p) => p.etiqueta === g.etiqueta));
  return { modal, nueva, guardadas, previo, iconoPinPorDefecto, direccion };
}

// --- Casos ---------------------------------------------------------------------------------------

type Caso = (args: { page: Page; testData: LoadedTestData; cp: string }) => Promise<void>;

const CASOS: { n: string; nombre: string; logueado?: boolean; cuerpo: Caso }[] = [
  {
    n: '001',
    nombre: 'la pantalla Detalles de la dirección muestra todos sus elementos',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await elegirSugerencia(page, testData, cp);
      await r.pin.capturar(cp, 6, `pantalla a la que lleva la sugerencia: «${r.llegada}»`);
      nota('Paso 6', `La sugerencia de Google abre «${r.llegada}».`);
      if (!/detalles/i.test(r.llegada)) await r.pin.botonContinuar.click();
      const d = r.pin.detalles;
      await expect(d).toBeVisible({ timeout: 30000 });
      await page.waitForTimeout(1500);
      await expect.soft(r.pin.botonVolver(d), 'botón atrás «<»').toBeVisible();
      await expect.soft(d.getByRole('banner'), 'título').toHaveText(/^detalles de la direcci[óo]n$/i);
      await expect.soft(r.pin.mapa(d), 'mapa').toBeVisible();
      expect.soft(await r.pin.cajaDelPin(d), 'PIN en el mapa').not.toBeNull();
      expect.soft((await r.pin.lineasDeDireccion()).join(' '), 'dirección ingresada').toMatch(/calle uno 23/i);
      await expect.soft(r.pin.botonEditar, 'opción «Editar»').toBeVisible();
      await expect.soft(r.pin.etiquetaDpto, '«N° dpto, oficina, piso, etc (opcional)»').toBeVisible();
      await expect.soft(r.pin.campoDpto, 'campo N° dpto').toBeVisible();
      await expect.soft(r.pin.etiquetaNombre, '«Nombre de dirección (opcional)»').toBeVisible();
      await expect.soft(r.pin.campoNombre, 'campo Nombre de dirección').toBeVisible();
      await expect.soft(r.pin.etiquetas, '4 íconos de etiqueta').toHaveCount(4);
      await expect.soft(r.pin.etiquetaInstrucciones, '«Instrucción para entrega (opcional)»').toBeVisible();
      await expect.soft(r.pin.campoInstrucciones, 'área de texto de instrucciones').toBeVisible();
      await expect.soft(r.pin.botonAgregarDireccion, 'botón «Agregar dirección»').toBeVisible();
      await r.pin.capturar(cp, 7, '«Detalles de la dirección»');
      expect(r.llegada, 'el sistema redirige a «Detalles de la dirección» (paso 6)').toMatch(/detalles de la direcci[óo]n/i);
    },
  },
  {
    n: '002',
    nombre: 'los campos opcionales de Detalles de la dirección muestran sus placeholders',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaDetalles(page, testData, cp);
      const dpto = (await r.pin.campoDpto.getAttribute('placeholder')) ?? '';
      const nombre = (await r.pin.campoNombre.getAttribute('placeholder')) ?? '';
      nota('Placeholders', `N° dpto: «${dpto}» · Nombre de dirección: «${nombre}»`);
      await r.pin.capturar(cp, 7, 'campos opcionales sin completar');
      expect.soft(dpto, 'placeholder de N° dpto').toBe('Ej. Dpto 910');
      expect(nombre, 'placeholder de Nombre de dirección').toBe('Ej. Mamá, Pololo, trabajo');
    },
  },
  {
    n: '003',
    nombre: 'la dirección se muestra con calle, número, comuna y región',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaDetalles(page, testData, cp);
      const lineas = (await r.pin.lineasDeDireccion()).join(', ');
      nota('Dirección mostrada', lineas);
      await r.pin.capturar(cp, 7, 'dirección bajo el mapa', r.pin.botonEditar.locator('xpath=..'));
      expect(lineas, 'calle + número + comuna + región').toMatch(/calle uno 23.*la florida.*regi[óo]n metropolitana/i);
    },
  },
  ...(
    [
      ['004', 'el campo N° dpto no acepta más de 50 caracteres', 'TEXTO_51_CARACTERES', 50, 'campoDpto'],
      ['005', 'el campo Nombre de dirección no acepta más de 20 caracteres', 'TEXTO_21_CARACTERES', 20, 'campoNombre'],
      ['006', 'el campo Instrucción para entrega no acepta más de 300 caracteres', 'TEXTO_301_CARACTERES', 300, 'campoInstrucciones'],
    ] as const
  ).map(([n, nombre, tk, max, campo]) => ({
    n,
    nombre,
    cuerpo: (async ({ page, testData, cp }) => {
      const r = await hastaDetalles(page, testData, cp);
      const texto = token(testData, tk)!;
      const loc = r.pin[campo] as Locator;
      await loc.click();
      await loc.pressSequentially(texto, { delay: 5 });
      const valor = await loc.inputValue();
      nota('Largo', `Escrito: ${texto.length} caracteres · quedó: ${valor.length}`);
      await r.pin.capturar(cp, 7, `campo tras escribir ${texto.length} caracteres`);
      expect(texto.length, 'el token trae más caracteres que el máximo').toBeGreaterThan(max);
      expect(valor.length, `el campo queda con ${max} caracteres como máximo`).toBeLessThanOrEqual(max);
    }) as Caso,
  })),
  {
    n: '007',
    nombre: 'al seleccionar una etiqueta de entrega el ícono se pinta de rojo',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaDetalles(page, testData, cp);
      const antes = await r.pin.estadoEtiquetas();
      nota('Etiquetas antes', antes.map((e) => `${e.nombre}${e.marcada ? ' (marcada)' : ''}`).join(', '));
      const elegida = antes.find((e) => !e.marcada)!.nombre;
      await r.pin.detalles.locator(`[role="radio"][aria-label="${elegida}"]`).click();
      await page.waitForTimeout(500);
      const despues = await r.pin.estadoEtiquetas();
      nota('Etiquetas después', despues.map((e) => `${e.nombre}:${e.marcada ? 'marcada' : '-'}:${e.borde}`).join(' | '));
      await r.pin.capturar(cp, 7, `etiqueta «${elegida}» seleccionada`, r.pin.detalles.getByRole('radiogroup'));
      const sel = despues.find((e) => e.nombre === elegida)!;
      expect(sel.marcada && sel.borde === ROJO, `«${elegida}» se pinta de rojo`).toBe(true);
      expect(despues.filter((e) => e.nombre !== elegida && (e.marcada || e.borde === ROJO)), 'los otros 3 sin seleccionar').toEqual([]);
    },
  },
  {
    n: '008',
    nombre: 'al agregar la dirección como invitado se muestra un loader',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaDetalles(page, testData, cp);
      await r.modal.observarCarga();
      await redLenta(page, true);
      await r.pin.botonAgregarDireccion.click();
      await page.waitForTimeout(1200);
      await r.pin.capturar(cp, 7, 'tras «Agregar dirección» con red lenta', page);
      await expect(r.pin.detalles).toBeHidden({ timeout: 90000 }).catch(() => {});
      await redLenta(page, false);
      const carga = await r.modal.cargaObservada();
      nota('Loader', JSON.stringify(carga));
      expect(carga.spinner || carga.skeleton, 'se muestra un loader').toBe(true);
    },
  },
  {
    n: '009',
    nombre: 'una dirección con cobertura y horarios setea el método de entrega en el Store Locator',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaDetalles(page, testData, cp);
      await r.pin.botonAgregarDireccion.click();
      await expect(r.pin.detalles, 'se cierra el modal').toBeHidden({ timeout: 45000 });
      const header = await r.home.header.esperarDireccionEnStoreLocator(45000).catch(() => '');
      const completo = ((await r.home.header.storeLocator.innerText({ timeout: 10000 }).catch(() => '')) ?? '').replace(/\s+/g, ' ');
      nota('Store Locator', completo);
      await r.home.capturarEvidencia(cp, 7, 'Store Locator con la dirección', { elemento: r.home.header.barraDelSitio });
      expect(header, 'Store Locator con la dirección').toMatch(/calle uno 23/i);
      expect(completo, 'ventana de entrega').toMatch(/desde:/i);
      expect(completo, 'costo de envío').toMatch(/\$\s?[\d.]+|gratis/i);
    },
  },
  {
    n: '010',
    nombre: 'una dirección sin cobertura deriva al flujo sin cobertura',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaDetalles(page, testData, cp, 'DIRECCION_SIN_COBERTURA');
      await r.pin.botonAgregarDireccion.click();
      await expect(r.modal.modalSinCobertura, '«Aún no llegamos a esta dirección» (B2C-123)').toBeVisible({ timeout: 45000 });
      await r.pin.capturar(cp, 7, 'flujo sin cobertura', page);
      const header = ((await r.home.header.storeLocator.innerText({ timeout: 10000 }).catch(() => '')) ?? '').replace(/\s+/g, ' ');
      nota('Store Locator', header);
      expect(header, 'no setea la dirección sin cobertura').not.toMatch(/t-?551|futrono/i);
    },
  },
  {
    n: '011',
    nombre: 'una dirección con cobertura y sin horarios deriva al flujo sin horarios',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaDetalles(page, testData, cp, 'DIRECCION_SIN_SLA');
      await r.pin.botonAgregarDireccion.click();
      const sinHorarios = page.getByText(/sin horarios|no hay horarios|horarios disponibles|no tenemos horarios/i).locator('visible=true').first();
      await expect(sinHorarios.or(r.modal.modalSinCobertura).first()).toBeVisible({ timeout: 45000 }).catch(() => {});
      await r.pin.capturar(cp, 7, 'resultado de «Agregar dirección»', page);
      if (await r.modal.modalSinCobertura.isVisible().catch(() => false)) {
        nota('Dato', `{DIRECCION_SIN_SLA} (${r.direccion}) no tiene cobertura en el ambiente: abre «Aún no llegamos a esta dirección».`);
        throw new Error('DATO_NO_CUMPLE: {DIRECCION_SIN_SLA} no tiene cobertura (abre «Aún no llegamos»), no es una dirección con cobertura y sin horarios');
      }
      const header = ((await r.home.header.storeLocator.innerText({ timeout: 10000 }).catch(() => '')) ?? '').replace(/\s+/g, ' ');
      if (!(await sinHorarios.isVisible().catch(() => false)) && /desde:/i.test(header)) {
        nota('Dato', `{DIRECCION_SIN_SLA} (${r.direccion}) sí tiene horarios en el ambiente: el Store Locator quedó con «${header}».`);
        throw new Error(`DATO_NO_CUMPLE: {DIRECCION_SIN_SLA} tiene cobertura y horarios (Store Locator: «${header}»)`);
      }
      await expect(sinHorarios, 'flujo sin horarios disponibles (B2C-127)').toBeVisible();
    },
  },
  {
    n: '012',
    nombre: 'con productos en el carro y cambio de tienda se muestra el modal No se te escapen',
    cuerpo: async ({ page, testData, cp }) => {
      const misma = token(testData, 'DIRECCION_MISMA_TIENDA')!;
      const pre = await abrirModal(page);
      await pre.modal.fijarDireccionComoInvitado(misma.split(',')[0], sugerenciaDe(misma));
      const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
      await pdp.agregarVisible.click();
      await expect(pdp.header.miniCarrito, 'el carro contiene el SKU').toHaveAttribute('aria-label', /\b1\b/, { timeout: 20000 });
      await pdp.capturarEvidencia(cp, 'pre', 'dirección activa y carro con el SKU', { elemento: pdp.header.barraDelSitio });
      const r = await hastaDetalles(page, testData, cp, 'DIRECCION_OTRA_TIENDA');
      await r.pin.botonAgregarDireccion.click();
      const agotarse = new AgotarseModal(page);
      await expect(agotarse.root, 'modal de B2C-122 antes de setear la dirección').toBeVisible({ timeout: 45000 });
      await agotarse.capturar(cp, 7, 'modal de cambio de tienda', page);
      nota('Modal', ((await agotarse.root.innerText()) ?? '').replace(/\s+/g, ' ').slice(0, 200));
    },
  },
  {
    n: '013',
    nombre: 'al agregar la dirección logueado se muestra un loader y se dispara el OTP',
    logueado: true,
    cuerpo: async ({ page, testData, cp }) => {
      await iniciarSesion(page, testData);
      await verificarNoGuardada(page, token(testData, 'DIRECCION_DESPACHO_001')!);
      const r = await hastaDetalles(page, testData, cp);
      await r.modal.observarCarga();
      await redLenta(page, true);
      const desde = marcaOtp();
      await r.pin.botonAgregarDireccion.click();
      const agotarse = new AgotarseModal(page);
      await expect(agotarse.root.or(r.modal.modalOtp).first()).toBeVisible({ timeout: 90000 });
      if (await agotarse.root.isVisible().catch(() => false)) await agotarse.botonSi.click();
      await expect(r.modal.modalOtp, '«Autenticación requerida» (B2C-125)').toBeVisible({ timeout: 90000 });
      await redLenta(page, false);
      await r.pin.capturar(cp, 7, '«Autenticación requerida»', page);
      const carga = await r.modal.cargaObservada();
      nota('Loader', JSON.stringify(carga));
      const codigo = await esperarOtp(correoDe(testData), desde, { digitos: 6 });
      nota('OTP', `Llegó el código al correo de la cuenta (${codigo.length} dígitos).`);
      await r.modal.cerrarOtp().catch(() => {});
      expect(carga.spinner || carga.skeleton, 'se muestra un loader').toBe(true);
    },
  },
  {
    n: '014',
    nombre: 'al seleccionar el mapa se abre Agregar nueva dirección con todos sus elementos',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaDetalles(page, testData, cp);
      const caja = (await r.pin.mapa(r.pin.detalles).boundingBox())!;
      await page.mouse.click(caja.x + caja.width * 0.2, caja.y + caja.height * 0.7);
      await expect(r.pin.agregar, '«Agregar nueva dirección»').toBeVisible({ timeout: 20000 });
      await page.waitForTimeout(1500);
      await r.pin.capturar(cp, 8, '«Agregar nueva dirección»');
      const centroDet = await r.pin.centro(r.pin.detalles).catch(() => null);
      expect.soft(await r.pin.cajaDelPin(r.pin.agregar), 'PIN sobre la dirección').not.toBeNull();
      await expect.soft(r.pin.direccionBajoMapa, 'dirección actual bajo el mapa').toHaveText(/calle uno 23/i);
      await expect.soft(r.pin.bannerImportante, 'banner «Importante…»').toBeVisible();
      await expect(r.pin.botonContinuar, '«Continuar con detalles de la dirección»').toBeVisible();
      nota('Centro', JSON.stringify({ detalles: centroDet, agregar: await r.pin.centro(r.pin.agregar) }));
    },
  },
  {
    n: '015',
    nombre: 'al seleccionar el PIN Ajusta aquí se abre Agregar nueva dirección',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaAjuste(page, testData, cp);
      const c = await r.pin.centro(r.pin.agregar);
      nota('Centro', JSON.stringify({ detalles: r.centroDetalles, agregar: c }));
      expect(r.original, 'PIN sobre la dirección').not.toBeNull();
      expect(Math.abs(c!.lat - r.centroDetalles!.lat) + Math.abs(c!.lng - r.centroDetalles!.lng), 'mapa centrado en la dirección actual').toBeLessThan(0.0005);
    },
  },
  {
    n: '016',
    nombre: 'al mover el PIN dentro del radio el texto de la dirección no cambia',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaAjuste(page, testData, cp);
      const texto = await r.pin.direccionBajoMapa.textContent();
      const m = await r.pin.arrastrarPin(r.pin.agregar, DENTRO(r.radio));
      await r.pin.capturar(cp, 9, 'PIN movido dentro del radio');
      nota('PIN', JSON.stringify(m));
      expect.soft(Math.hypot(m.despues.x - m.antes.x, m.despues.y - m.antes.y), 'el PIN queda en la nueva posición').toBeGreaterThan(10);
      await expect.soft(r.pin.direccionBajoMapa, 'el texto de la dirección no cambia').toHaveText(texto ?? '');
      await expect.soft(r.pin.toastFueraDeRadio, 'no aparece alerta').toBeHidden();
      await expect(r.pin.botonContinuar, '«Continuar…» habilitado').toBeEnabled();
    },
  },
  {
    n: '017',
    nombre: 'al mover el PIN fuera del radio se muestra el toast de alerta con Ajustar y X',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaAjuste(page, testData, cp);
      await r.pin.arrastrarPin(r.pin.agregar, FUERA(r.radio));
      await expect(r.pin.toastFueraDeRadio, 'toast de alerta').toBeVisible({ timeout: 10000 });
      await r.pin.capturar(cp, 9, 'toast de PIN fuera del radio', page);
      await expect.soft(r.pin.toastFueraDeRadio).toContainText('La ubicación seleccionada se encuentra fuera del radio de la dirección actual. Por favor ajustarla.');
      await expect.soft(r.pin.botonAjustar, 'opción «Ajustar»').toBeVisible();
      await expect.soft(r.pin.botonCerrarToast, 'botón X').toBeVisible();
      await page.waitForTimeout(10000);
      await expect(r.pin.toastFueraDeRadio, 'el toast no se cierra solo (10 s después)').toBeVisible();
    },
  },
  {
    n: '018',
    nombre: 'con el PIN fuera del radio el botón Continuar queda deshabilitado',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaAjuste(page, testData, cp);
      await r.pin.arrastrarPin(r.pin.agregar, FUERA(r.radio));
      await expect(r.pin.toastFueraDeRadio).toBeVisible({ timeout: 10000 });
      await expect(r.pin.botonContinuar, '«Continuar…» deshabilitado').toBeDisabled();
      await r.pin.botonContinuar.click({ force: true }).catch(() => {});
      await page.waitForTimeout(1500);
      await r.pin.capturar(cp, 10, 'tras intentar «Continuar»', page);
      await expect(r.pin.agregar, 'sigue en «Agregar nueva dirección»').toBeVisible();
    },
  },
  {
    n: '019',
    nombre: 'Ajustar devuelve el PIN a su posición original y habilita Continuar',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaAjuste(page, testData, cp);
      await r.pin.arrastrarPin(r.pin.agregar, FUERA(r.radio));
      await expect(r.pin.toastFueraDeRadio).toBeVisible({ timeout: 10000 });
      await r.pin.botonAjustar.click();
      await page.waitForTimeout(2500);
      await r.pin.capturar(cp, 10, 'tras «Ajustar»', page);
      const ahora = (await r.pin.cajaDelPin(r.pin.agregar))!;
      nota('PIN', JSON.stringify({ original: r.original, ahora }));
      expect.soft(Math.hypot(ahora.x - r.original.x, ahora.y - r.original.y), 'el PIN vuelve a su posición inicial').toBeLessThan(4);
      await expect.soft(r.pin.botonContinuar, '«Continuar…» habilitado').toBeEnabled();
      await expect(r.pin.toastFueraDeRadio, 'el toast se cierra').toBeHidden({ timeout: 5000 });
    },
  },
  {
    n: '020',
    nombre: 'al cerrar el toast con la X el PIN sigue fuera del radio y no se puede continuar',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaAjuste(page, testData, cp);
      const m = await r.pin.arrastrarPin(r.pin.agregar, FUERA(r.radio));
      await expect(r.pin.toastFueraDeRadio).toBeVisible({ timeout: 10000 });
      await r.pin.botonCerrarToast.click();
      await page.waitForTimeout(1500);
      await r.pin.capturar(cp, 10, 'tras cerrar el toast con la X', page);
      const ahora = (await r.pin.cajaDelPin(r.pin.agregar))!;
      await expect.soft(r.pin.toastFueraDeRadio, 'el toast se cierra').toBeHidden();
      expect.soft(Math.hypot(ahora.x - m.despues.x, ahora.y - m.despues.y), 'el PIN se mantiene fuera del radio').toBeLessThan(4);
      await expect(r.pin.botonContinuar, '«Continuar…» sigue deshabilitado').toBeDisabled();
    },
  },
  {
    n: '021',
    nombre: 'tras cerrar el toast al volver el PIN dentro del radio se habilita Continuar',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaAjuste(page, testData, cp);
      await r.pin.arrastrarPin(r.pin.agregar, FUERA(r.radio));
      await expect(r.pin.toastFueraDeRadio).toBeVisible({ timeout: 10000 });
      await r.pin.botonCerrarToast.click();
      await page.waitForTimeout(1000);
      await r.pin.arrastrarPinA(r.pin.agregar, { x: r.original.x + 15, y: r.original.y + 15 });
      await page.waitForTimeout(1500);
      await r.pin.capturar(cp, 11, 'PIN de vuelta dentro del radio', page);
      nota('PIN', JSON.stringify({ original: r.original, ahora: await r.pin.cajaDelPin(r.pin.agregar) }));
      await expect.soft(r.pin.toastFueraDeRadio, 'no se vuelve a mostrar la alerta').toBeHidden();
      await expect(r.pin.botonContinuar, '«Continuar…» habilitado').toBeEnabled();
    },
  },
  {
    n: '022',
    nombre: 'el toggle satelital cambia la vista del mapa y mantiene el PIN',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaAjuste(page, testData, cp);
      const antes = await r.pin.tipoDeVista(r.pin.agregar);
      await r.pin.toggleSatelital.click();
      await page.waitForTimeout(2500);
      const despues = await r.pin.tipoDeVista(r.pin.agregar);
      const caja = (await r.pin.cajaDelPin(r.pin.agregar))!;
      await r.pin.capturar(cp, 9, 'vista satelital');
      nota('Vista', `${antes} → ${despues}`);
      expect.soft(despues, 'vista satelital').toBe('h');
      expect(Math.hypot(caja.x - r.original.x, caja.y - r.original.y), 'el PIN se mantiene').toBeLessThan(4);
    },
  },
  {
    n: '023',
    nombre: 'el toggle vuelve a la vista normal y mantiene el PIN',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaAjuste(page, testData, cp);
      await r.pin.toggleSatelital.click();
      await page.waitForTimeout(2500);
      await r.pin.capturar(cp, 9, 'vista satelital');
      await r.pin.toggleSatelital.click();
      await page.waitForTimeout(2500);
      const vista = await r.pin.tipoDeVista(r.pin.agregar);
      const caja = (await r.pin.cajaDelPin(r.pin.agregar))!;
      await r.pin.capturar(cp, 10, 'vista normal');
      nota('Vista', vista);
      expect.soft(vista, 'vista normal').toBe('m');
      expect(Math.hypot(caja.x - r.original.x, caja.y - r.original.y), 'el PIN se mantiene').toBeLessThan(4);
    },
  },
  {
    n: '024',
    nombre: 'al continuar con el PIN ajustado se vuelve a Detalles con el PIN en su nueva posición',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaAjuste(page, testData, cp);
      const texto = (await r.pin.lineasDeDireccion().catch(() => [])).join(', ');
      await r.pin.arrastrarPin(r.pin.agregar, DENTRO(r.radio));
      await r.pin.capturar(cp, 9, 'PIN movido dentro del radio');
      await r.modal.observarCarga();
      await redLenta(page, true);
      await r.pin.botonContinuar.click();
      await expect(r.pin.detalles, '«Detalles de la dirección»').toBeVisible({ timeout: 90000 });
      await redLenta(page, false);
      await page.waitForTimeout(2500);
      await r.pin.capturar(cp, 10, '«Detalles» con el PIN en la nueva posición');
      const carga = await r.modal.cargaObservada();
      const centro = await r.pin.centro(r.pin.detalles);
      nota('Loader', JSON.stringify(carga));
      nota('Centro', JSON.stringify({ antes: r.centroDetalles, ahora: centro }));
      expect.soft(carga.spinner || carga.skeleton, 'se muestra un loader').toBe(true);
      expect.soft(Math.abs(centro!.lat - r.centroDetalles!.lat) + Math.abs(centro!.lng - r.centroDetalles!.lng), 'el PIN en la nueva posición').toBeGreaterThan(0.00005);
      expect((await r.pin.lineasDeDireccion()).join(', '), 'el texto de la dirección no cambia').toBe(texto || (await r.pin.lineasDeDireccion()).join(', '));
    },
  },
  {
    n: '025',
    nombre: 'la cobertura se valida con las coordenadas del PIN ajustado y no con el texto',
    cuerpo: async ({ page, testData, cp }) => {
      const declarado = token(testData, 'STORE_LOCATOR_API_ENDPOINT')!;
      const patron = new RegExp(escapar(declarado.replace(/^\*:\/\//, '')).replace(/\\\*/g, '.*'));
      const vistas: { url: string; cuerpo: string }[] = [];
      page.on('request', (q: Request) => {
        if (/smu-delivery/.test(q.url())) vistas.push({ url: q.url(), cuerpo: q.postData() ?? '' });
      });
      const r = await hastaAjuste(page, testData, cp);
      await r.pin.arrastrarPin(r.pin.agregar, DENTRO(r.radio));
      await r.pin.botonContinuar.click();
      await expect(r.pin.detalles).toBeVisible({ timeout: 45000 });
      const desde = vistas.length;
      await r.pin.botonAgregarDireccion.click();
      await page.waitForTimeout(8000);
      await r.pin.capturar(cp, 12, 'tras «Agregar dirección»', page);
      const tras = vistas.slice(desde);
      nota('Requests smu-delivery', tras.map((v) => `${v.url.replace(/^https?:\/\/[^/]+/, '')} ${v.cuerpo.slice(0, 160)}`).join(' || ') || '(ninguna)');
      const conCoords = tras.filter((v) => /latitude|"lat"/.test(v.cuerpo));
      const decl = tras.filter((v) => patron.test(v.url));
      if (!decl.length) {
        throw new Error(`ENDPOINT_NO_LLAMADO: {STORE_LOCATOR_API_ENDPOINT} no se llama al agregar la dirección; las coordenadas viajan en ${conCoords.map((v) => v.url.replace(/^https?:\/\/[^/]+/, '').split('?')[0]).join(', ') || '(ninguna request)'}`);
      }
      const coords = JSON.parse(decl.find((v) => /lat/.test(v.cuerpo))?.cuerpo ?? '{}');
      const lat = coords.latitude ?? coords.lat;
      const lng = coords.longitude ?? coords.lng;
      expect(Math.abs(lat - r.centroDetalles!.lat) + Math.abs(lng - r.centroDetalles!.lng), 'lat/lng del PIN ajustado, distintas de la dirección original').toBeGreaterThan(0.00005);
    },
  },
  {
    n: '027',
    nombre: 'el botón atrás en Agregar nueva dirección vuelve sin aplicar cambios al PIN',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaAjuste(page, testData, cp);
      const texto = (await r.pin.lineasDeDireccion().catch(() => [])).join(', ');
      await r.pin.arrastrarPin(r.pin.agregar, DENTRO(r.radio));
      await r.pin.botonVolver(r.pin.agregar).click();
      await expect(r.pin.detalles, 'vuelve a «Detalles de la dirección»').toBeVisible({ timeout: 20000 });
      await page.waitForTimeout(2000);
      await r.pin.capturar(cp, 10, '«Detalles» tras el botón atrás');
      const centro = await r.pin.centro(r.pin.detalles);
      nota('Centro', JSON.stringify({ antes: r.centroDetalles, ahora: centro }));
      expect.soft((await r.pin.lineasDeDireccion()).join(', '), 'dirección sin cambios').toBe(texto || (await r.pin.lineasDeDireccion()).join(', '));
      expect(Math.abs(centro!.lat - r.centroDetalles!.lat) + Math.abs(centro!.lng - r.centroDetalles!.lng), 'PIN en su posición original').toBeLessThan(0.00002);
    },
  },
  {
    n: '028',
    nombre: 'Editar abre el modal Dirección manual con los campos precargados',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaDetalles(page, testData, cp);
      await r.modal.observarCarga();
      await r.pin.botonEditar.click();
      await expect(r.modal.encabezadoManual, 'modal «Dirección manual»').toBeVisible({ timeout: 30000 });
      await page.waitForTimeout(1500);
      await r.modal.capturarModal(cp, 9, '«Dirección manual» precargado');
      const carga = await r.modal.cargaObservada();
      const v = {
        region: await r.modal.seleccionada(r.modal.selectRegion),
        comuna: await r.modal.seleccionada(r.modal.selectComuna),
        calle: await r.modal.campoCalle.inputValue(),
        numero: await r.modal.campoNumeracion.inputValue(),
      };
      nota('Precarga', JSON.stringify(v));
      nota('Loader', JSON.stringify(carga));
      expect.soft(carga.spinner || carga.skeleton, 'se muestra un loader').toBe(true);
      expect(v.region, 'Región').toMatch(/metropolitana/i);
      expect(v.comuna, 'Comuna').toMatch(/la florida/i);
      expect(v.calle, 'Dirección').toMatch(/calle uno/i);
      expect(v.numero, 'Numeración').toBe('23');
    },
  },
  {
    n: '029',
    nombre: 'al editar la dirección se actualiza el texto y el PIN se reubica',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaDetalles(page, testData, cp);
      const centroAntes = await r.pin.centro(r.pin.detalles);
      await r.pin.botonEditar.click();
      await expect(r.modal.encabezadoManual).toBeVisible({ timeout: 30000 });
      await r.modal.campoNumeracion.fill('45');
      await r.modal.capturarModal(cp, 9, 'Numeración cambiada a 45');
      await r.modal.observarCarga();
      await r.modal.botonContinuarManual.click();
      await expect(r.pin.detalles, 'vuelve a «Detalles de la dirección»').toBeVisible({ timeout: 45000 });
      await page.waitForTimeout(3000);
      await r.pin.capturar(cp, 10, '«Detalles» con la dirección editada');
      const lineas = (await r.pin.lineasDeDireccion()).join(', ');
      const centro = await r.pin.centro(r.pin.detalles);
      const carga = await r.modal.cargaObservada();
      nota('Resultado', JSON.stringify({ lineas, centroAntes, centro, carga }));
      expect.soft(carga.spinner || carga.skeleton, 'se muestra un loader').toBe(true);
      expect.soft(lineas, 'dirección actualizada').toMatch(/calle uno 45/i);
      expect(Math.abs(centro!.lat - centroAntes!.lat) + Math.abs(centro!.lng - centroAntes!.lng), 'el PIN se ubica en la nueva numeración').toBeGreaterThan(0.00002);
    },
  },
  {
    n: '030',
    nombre: 'al editar la dirección se limpian los campos complementarios',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaDetalles(page, testData, cp);
      const porDefecto = (await r.pin.estadoEtiquetas()).filter((e) => e.marcada).map((e) => e.nombre);
      await r.pin.campoDpto.fill('Dpto 910');
      await r.pin.campoNombre.fill('Casa');
      await r.pin.detalles.locator('[role="radio"][aria-label="Casa"]').click();
      await r.pin.campoInstrucciones.fill('Dejar en conserjería');
      await r.pin.capturar(cp, 7, 'campos complementarios completados');
      await r.pin.botonEditar.click();
      await expect(r.modal.encabezadoManual).toBeVisible({ timeout: 30000 });
      await r.modal.campoNumeracion.fill('45');
      await r.modal.botonContinuarManual.click();
      await expect(r.pin.detalles).toBeVisible({ timeout: 45000 });
      await page.waitForTimeout(2500);
      await r.pin.capturar(cp, 11, '«Detalles» tras editar la dirección');
      const v = {
        dpto: await r.pin.campoDpto.inputValue(),
        nombre: await r.pin.campoNombre.inputValue(),
        instrucciones: await r.pin.campoInstrucciones.inputValue(),
        marcadas: (await r.pin.estadoEtiquetas()).filter((e) => e.marcada).map((e) => e.nombre),
      };
      nota('Campos', JSON.stringify({ ...v, etiquetaPorDefecto: porDefecto }));
      expect.soft(v.dpto, 'N° dpto vacío').toBe('');
      expect.soft(v.nombre, 'Nombre de dirección vacío').toBe('');
      expect.soft(v.instrucciones, 'Instrucción para entrega vacía').toBe('');
      expect(v.marcadas, 'ninguna etiqueta seleccionada (solo la de por defecto)').toEqual(porDefecto);
    },
  },
  {
    n: '031',
    nombre: 'sin nombre la dirección se guarda con calle y número truncados a 20 caracteres',
    logueado: true,
    cuerpo: async ({ page, testData, cp }) => {
      const g = await guardarComoLogueado(page, testData, cp, 'DIRECCION_DESPACHO_003');
      nota('Guardada', JSON.stringify(g.nueva ?? null));
      try {
        expect(g.nueva, 'se guarda una dirección nueva').toBeTruthy();
        expect(g.nueva!.etiqueta, 'nombre truncado a 20 caracteres con puntos suspensivos').toBe('Av. San Josemaría Es...');
      } finally {
        await restaurarCuenta(page, testData, g.previo.activa, g.previo.guardadas, g.direccion);
      }
    },
  },
  {
    n: '032',
    nombre: 'sin nombre una dirección corta se guarda con calle y número completos',
    logueado: true,
    cuerpo: async ({ page, testData, cp }) => {
      const g = await guardarComoLogueado(page, testData, cp, 'DIRECCION_DESPACHO_001');
      nota('Guardada', JSON.stringify(g.nueva ?? null));
      try {
        expect(g.nueva, 'se guarda una dirección nueva').toBeTruthy();
        expect(g.nueva!.etiqueta, 'nombre = calle + número, sin puntos suspensivos').toBe('Calle Uno 23');
      } finally {
        await restaurarCuenta(page, testData, g.previo.activa, g.previo.guardadas, g.direccion);
      }
    },
  },
  {
    n: '033',
    nombre: 'sin etiqueta seleccionada la dirección se guarda con el ícono de ubicación',
    logueado: true,
    cuerpo: async ({ page, testData, cp }) => {
      const g = await guardarComoLogueado(page, testData, cp, 'DIRECCION_DESPACHO_001');
      try {
        expect(g.nueva, 'se guarda una dirección nueva').toBeTruthy();
        const icono = await g.modal.tarjetaGuardada(g.nueva!.etiqueta).locator('svg').first().innerHTML();
        nota('Ícono', `Por defecto en Detalles: «${g.iconoPinPorDefecto.nombre}»; en la guardada: ${icono === g.iconoPinPorDefecto.svg ? 'el mismo pin' : 'otro ícono'}`);
        expect(icono, 'la guardada muestra el ícono de ubicación (pin)').toBe(g.iconoPinPorDefecto.svg);
      } finally {
        await restaurarCuenta(page, testData, g.previo.activa, g.previo.guardadas, g.direccion);
      }
    },
  },
  {
    n: '034',
    nombre: 'si Google Maps no carga se muestra el error del mapa y la dirección en lectura',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaDetallesSinMapa(page, testData, cp);
      const lineas = (await r.pin.lineasDeDireccion()).join(', ');
      nota('Dirección', lineas);
      await r.pin.capturar(cp, 7, 'pantalla con el mapa sin cargar');
      expect.soft(lineas, 'calle, número, comuna y región en lectura').toMatch(/calle uno 23.*la florida.*regi[óo]n/i);
      await expect(r.pin.errorDelMapa, '«No pudimos cargar el mapa…»').toBeVisible({ timeout: 5000 });
      await expect(r.pin.errorDelMapa).toContainText('Puedes continuar con la dirección ingresada o volver a buscarla.');
    },
  },
  {
    n: '035',
    nombre: 'si Google Maps no carga el ajuste del PIN queda deshabilitado',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaDetallesSinMapa(page, testData, cp);
      const caja = (await r.pin.mapa(r.pin.detalles).boundingBox().catch(() => null)) ?? (await r.pin.ajustaAqui.boundingBox());
      if (caja) await page.mouse.click(caja.x + caja.width / 2, caja.y + caja.height / 2);
      await page.waitForTimeout(2500);
      await r.pin.capturar(cp, 7, 'tras tocar el área del mapa', page);
      nota('Pantalla', await r.pin.titulo());
      await expect(r.pin.agregar, 'no se abre «Agregar nueva dirección»').toBeHidden();
    },
  },
  {
    n: '036',
    nombre: 'si Google Maps no carga Confirmar dirección continúa con las coordenadas geocodificadas',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaDetallesSinMapa(page, testData, cp);
      const botones = await r.pin.actual.getByRole('button').allInnerTexts();
      nota('Botones', botones.map((b) => b.trim()).filter(Boolean).join(' | '));
      await expect(r.pin.botonConfirmarDireccion, 'botón «Confirmar dirección»').toBeVisible({ timeout: 5000 });
      await r.pin.botonConfirmarDireccion.click();
      await expect(r.pin.actual).toBeHidden({ timeout: 45000 });
      const header = await new PaginaHabilitada(page).header.esperarDireccionEnStoreLocator(45000).catch(() => '');
      await capturar(page, cp, 7, 'Store Locator tras «Confirmar dirección»');
      expect(header, 'Store Locator con la dirección').toMatch(/calle uno 23/i);
    },
  },
  {
    n: '037',
    nombre: 'si Google Maps no carga el botón atrás vuelve al buscador de direcciones',
    cuerpo: async ({ page, testData, cp }) => {
      const r = await hastaDetallesSinMapa(page, testData, cp);
      await r.pin.botonVolver(r.pin.detalles).click();
      await page.waitForTimeout(2500);
      await capturar(page, cp, 7, 'tras el botón atrás');
      const pantalla = await r.pin.actual.isVisible().catch(() => false) ? await r.pin.titulo() : '(buscador del Store Locator)';
      nota('Pantalla', pantalla);
      await expect(r.modal.campoBusqueda, 'buscador de direcciones del Store Locator').toBeVisible({ timeout: 10000 });
      await expect(r.pin.actual, 'sale de la confirmación con PIN').toBeHidden();
    },
  },
];

async function capturar(page: Page, cp: string, paso: number, etiqueta: string): Promise<void> {
  await new ConfirmacionPinModal(page).capturar(cp, paso, etiqueta, page);
}

test.describe('B2C-99 — Confirmar dirección con PIN en mapa', () => {
  test.describe.configure({ timeout: 300000 });

  for (const [ff, sufijo, letra, vp] of [
    ['Desktop 1440x900', 'Desktop', 'D', DESKTOP],
    ['Mobile 390x844', 'Mobile', 'M', MOBILE],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);
      for (const c of CASOS) {
        const cp = `TC-B2C99-${letra}-${c.n}`;
        test(`${cp} · Verificar que ${c.nombre} [${sufijo}] [${c.logueado ? 'Logueado' : 'Guest'}] (${sufijo})`, async ({ page, testData }) => {
          await c.cuerpo({ page, testData, cp });
          await new ConfirmacionPinModal(page).capturar(cp, undefined, undefined, page).catch(() => {});
        });
      }
    });
  }
});
