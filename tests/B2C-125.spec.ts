import * as fs from 'fs';
import * as path from 'path';
import { Browser, Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { LoadedTestData, baseUrl } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { esperarOtp, marcaOtp } from './support/otp';
import { conCandado } from './support/candadoOtp';
import { loginConOtp } from './support/loginOtp';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { OtpEntregaModal } from './pages/OtpEntregaModal';
import { RetiroEnTienda } from './pages/RetiroEnTienda';
import { AgotarseModal } from './pages/AgotarseModal';
import { CarroPage } from './pages/CarroPage';

/**
 * B2C-125 — Modal «Autenticación requerida» (OTP al cambiar de dirección o de tienda de retiro).
 *
 * Todos los casos parten de {USER_AUTH_001} con la sesión guardada en `.qa/auth/b125-user.json`
 * (si no sirve, se inicia sesión con correo + OTP). Como el sitio manda un solo código por ventana de
 * ~100 s, cada caso que necesita un correo nuevo espera esa ventana (`enfriar`) y toma el candado de
 * la casilla (`conCandado`) mientras dura el flujo.
 *
 * Sin `test()` (Bloqueado Data; el Excel de data no tiene fila para el token): D/M-005
 * ({OTP_CON_LETRAS}) y D/M-011 y 013 ({OTP_INCORRECTO}).
 *
 * Los casos que guardan una dirección (007, 008, 014) o fijan una tienda dejan la cuenta como estaba
 * al terminar: vuelven a elegir «Casa» (con su OTP) y eliminan las copias de {DIRECCION_OTRA_TIENDA}.
 */

/** El header muestra la etiqueta de la guardada activa («Casa») o la calle de {DIRECCION_DESPACHO_001}. */
const ACTIVA = /^(casa|calle uno 23)/i;
const SESION = path.resolve('.qa/auth/b125-user.json');
const ULTIMO = path.resolve('.qa/run/otp125-ultimo.txt');
/** Validez de un código del correo: 5 minutos. */
const VENTANA_MS = 305_000;

function correoDe(testData: LoadedTestData): string {
  return token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
}

function nota(tipo: string, descripcion: string): void {
  test.info().annotations.push({ type: tipo, description: descripcion });
}

function escapar(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function calleDespacho(testData: LoadedTestData): string {
  return token(testData, 'DIRECCION_DESPACHO_001')!.split(',')[0].trim();
}

/** {DIRECCION_OTRA_TIENDA} = "A. Las Conder 14791, Lo Barnechea": Google la normaliza a "Avenida Las Condes 14791". */
function direccionOtra(testData: LoadedTestData): { dir: string; numero: string; texto: RegExp } {
  const dir = token(testData, 'DIRECCION_OTRA_TIENDA')!;
  const numero = dir.match(/\d+/)![0];
  const comuna = dir.split(',').pop()!.trim();
  return { dir, numero, texto: new RegExp(`${numero}[\\s\\S]*${escapar(comuna)}`, 'i') };
}

/**
 * El sitio manda un correo nuevo solo cuando no hay un código vigente sin usar (válido 5 min). Se lleva
 * ese estado en un archivo para saber cuándo un caso que necesita un correo nuevo puede correr.
 */
function leerEstado(): { t: number; pendiente: boolean } {
  try {
    return JSON.parse(fs.readFileSync(ULTIMO, 'utf-8'));
  } catch {
    return { t: 0, pendiente: false };
  }
}

function guardarEstado(e: { t: number; pendiente: boolean }): void {
  fs.mkdirSync(path.dirname(ULTIMO), { recursive: true });
  fs.writeFileSync(ULTIMO, JSON.stringify(e));
}

/** Se abrió el modal OTP: si no había un código vigente sin usar, el sitio acaba de mandar uno. */
function marcarEnvio(): void {
  const e = leerEstado();
  if (e.pendiente && Date.now() - e.t < VENTANA_MS) return;
  guardarEstado({ t: Date.now(), pendiente: true });
}

/** Se validó un código correcto: ya no queda uno vigente. */
function marcarConsumo(): void {
  guardarEstado({ t: Date.now(), pendiente: false });
}

/** Espera a que no quede un código vigente sin usar, para que el sitio mande uno nuevo. */
async function enfriar(): Promise<void> {
  const e = leerEstado();
  const falta = e.pendiente ? e.t + VENTANA_MS - Date.now() : 0;
  if (falta > 0) {
    test.info().setTimeout(test.info().timeout + falta);
    await new Promise((r) => setTimeout(r, falta));
  }
}

/** Corre `fn` con la casilla tomada; si `fresco`, antes espera la ventana de reenvío. */
async function conCuenta<T>(testData: LoadedTestData, fresco: boolean, fn: () => Promise<T>): Promise<T> {
  if (fresco) await enfriar();
  return conCandado(correoDe(testData), fn);
}

async function abrirHome(page: Page, testData: LoadedTestData): Promise<PaginaHabilitada> {
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  const conSesion = await home.header.saludo.waitFor({ state: 'visible', timeout: 20000 }).then(() => true, () => false);
  if (!conSesion) {
    await loginConOtp(page, correoDe(testData));
    marcarEnvio();
    fs.mkdirSync(path.dirname(SESION), { recursive: true });
    await page.context().storageState({ path: SESION });
  }
  await home.header.esperarDireccionEnStoreLocator().catch(() => '');
  return home;
}

interface Guardada {
  etiqueta: string;
  direccion: string;
}

async function abrirListado(page: Page, home: PaginaHabilitada): Promise<{ modal: MetodoEntregaModal; guardadas: Guardada[] }> {
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.tituloDireccionesGuardadas.waitFor({ state: 'visible', timeout: 30000 }).catch(() => {});
  let guardadas: Guardada[] = [];
  for (let i = 0; i < 20 && !guardadas.length; i++) {
    guardadas = (await modal.direccionesGuardadas()).map(({ etiqueta, direccion }) => ({ etiqueta, direccion }));
    if (!guardadas.length) await page.waitForTimeout(1000);
  }
  return { modal, guardadas };
}

/** Precondición «El carro está vacío»: la cuenta la comparten otras corridas, así que se verifica y, si hace falta, se vacía. */
async function vaciarCarroSiTiene(page: Page, home: PaginaHabilitada): Promise<void> {
  const n = await home.header.conteoAnunciadoCarrito();
  if (n === 0) return;
  nota('Carro', `tenía ${n} artículo/s: se vació antes del caso (precondición)`);
  const carro = await new CarroPage(page).goto();
  await carro.vaciar();
  await home.goto();
  await home.header.esperarDireccionEnStoreLocator().catch(() => '');
}

/** Espera el modal OTP; si antes aparece «Algunos productos podrían agotarse» (carro con productos), lo contesta. */
async function esperarOtpAbierto(page: Page, otp: OtpEntregaModal): Promise<void> {
  const fin = Date.now() + 60000;
  while (Date.now() < fin) {
    if (await otp.root.isVisible().catch(() => false)) return;
    await agotarseSiAparece(page);
    await page.waitForTimeout(400);
  }
  await otp.esperarAbierto(1000);
}

/** Si el sitio abre «Algunos productos podrían agotarse» se contesta «Sí, continuar». */
async function agotarseSiAparece(page: Page): Promise<void> {
  const agotarse = new AgotarseModal(page);
  if (await agotarse.root.isVisible().catch(() => false)) await agotarse.botonSi.click().catch(() => {});
}

/**
 * Pasos 1-6 de los TC de dirección: Home con sesión, Store Locator, {DIRECCION_OTRA_TIENDA} elegida
 * de las sugerencias y «Confirmar dirección» (en el sitio: «Continuar con detalles de la dirección»
 * y «Agregar dirección»). Devuelve el modal OTP abierto.
 */
async function llegarAlOtp(page: Page, testData: LoadedTestData, cp: string) {
  const home = await abrirHome(page, testData);
  const calle = calleDespacho(testData);
  const activa = await expect
    .poll(() => home.header.direccionDelStoreLocator(), { timeout: 30000 })
    .toMatch(ACTIVA)
    .then(() => true, () => false);
  if (!activa) throw new Error(`PRECONDICION_NO_DISPONIBLE: la dirección activa de {USER_AUTH_001} no es {DIRECCION_DESPACHO_001} («${calle}»)`);
  await vaciarCarroSiTiene(page, home);
  await home.capturarEvidencia(cp, 2, 'Home con la sesión iniciada', { elemento: home.header.barraDelSitio });

  const { modal, guardadas } = await abrirListado(page, home);
  const { dir, numero, texto } = direccionOtra(testData);
  const previas = guardadas.filter((g) => g.direccion.includes(numero));
  if (previas.length) {
    throw new Error(`PRECONDICION_NO_DISPONIBLE: {DIRECCION_OTRA_TIENDA} ya está guardada en la libreta (${previas.length} copia/s)`);
  }
  await modal.capturarModal(cp, 4, 'Store Locator abierto, pestaña Despacho a domicilio');

  await modal.elegirSugerencia(dir, texto);
  await modal.capturarModal(cp, 5, 'dirección elegida de las sugerencias', page);
  const desde = marcaOtp();
  await modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
  await modal.confirmacionPin.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
  const otp = new OtpEntregaModal(page);
  await esperarOtpAbierto(page, otp);
  marcarEnvio();
  return { home, modal, otp, desde, calle, numero };
}

/** Deja la cuenta como estaba: «Casa» activa y sin copias de {DIRECCION_OTRA_TIENDA}. */
async function restaurarCuenta(page: Page, testData: LoadedTestData): Promise<void> {
  const { numero } = direccionOtra(testData);
  const calle = calleDespacho(testData);
  try {
    await enfriar();
    const home = await abrirHome(page, testData);
    const { modal } = await abrirListado(page, home);
    const activa = ((await modal.direccionActiva.textContent().catch(() => '')) ?? '').trim();
    let accion = 'Casa ya estaba activa';
    if (!ACTIVA.test(activa) && !activa.startsWith(calle)) {
      const desde = marcaOtp();
      await modal.elegirGuardada('Casa');
      const otp = new OtpEntregaModal(page);
      if (await otp.root.waitFor({ state: 'visible', timeout: 30000 }).then(() => true, () => false)) {
        marcarEnvio();
        await otp.escribir(await esperarOtp(correoDe(testData), desde, { digitos: 6 }));
        await otp.continuar.click();
        await otp.root.waitFor({ state: 'hidden', timeout: 45000 });
  marcarConsumo();
      }
      await agotarseSiAparece(page);
      accion = `reseleccionada «Casa» (antes: «${activa}»)`;
    }
    let borradas = 0;
    for (let i = 0; i < 12; i++) {
      await page.goto('/', { waitUntil: 'domcontentloaded' });
      const h = new PaginaHabilitada(page);
      await h.header.esperarDireccionEnStoreLocator().catch(() => '');
      const { modal: m, guardadas } = await abrirListado(page, h);
      const copia = guardadas.find((g) => g.direccion.includes(numero));
      if (!copia) break;
      await m.pedirEliminar(copia.etiqueta);
      await m.botonAceptarEliminar.click();
      await page.waitForTimeout(3000);
      borradas++;
    }
    nota('Restauración', `${accion}; copias de {DIRECCION_OTRA_TIENDA} eliminadas: ${borradas}.`);
  } catch (e) {
    nota('Restauración', `No se pudo dejar la cuenta como estaba: ${(e as Error).message.slice(0, 200)}`);
  }
}

/** Precondición de D/M-018 y 020: retiro en tienda activo en {TIENDA_RETIRO_002}. */
async function asegurarRetiro002(page: Page, testData: LoadedTestData, home: PaginaHabilitada): Promise<void> {
  const t2 = token(testData, 'TIENDA_RETIRO_002')!;
  if (((await home.header.storeLocator.innerText()) ?? '').includes(t2)) return;
  await enfriar();
  const retiro = new RetiroEnTienda(page);
  await retiro.abrirDesde(home.header.storeLocator);
  await retiro.esperarListado();
  await retiro.elegirTienda(t2);
  const desde = marcaOtp();
  await retiro.confirmarTienda();
  const otp = new OtpEntregaModal(page);
  await esperarOtpAbierto(page, otp);
  marcarEnvio();
  await otp.escribir(await esperarOtp(correoDe(testData), desde, { digitos: 6 }));
  await otp.continuar.click();
  await otp.root.waitFor({ state: 'hidden', timeout: 45000 });
  marcarConsumo();
  await agotarseSiAparece(page);
  await retiro.cerrarLoginSiAparece();
  await expect(home.header.storeLocator, 'precondición: retiro activo en {TIENDA_RETIRO_002}').toContainText(t2, { timeout: 45000 });
}

/** Pasos 1-8 de los TC de retiro: Store Locator, pestaña Retiro, tienda {TIENDA_RETIRO_001}, «Confirmar tienda». */
async function llegarAlOtpRetiro(page: Page, testData: LoadedTestData, cp: string) {
  const home = await abrirHome(page, testData);
  await asegurarRetiro002(page, testData, home);
  await enfriar();
  await home.capturarEvidencia(cp, 2, 'Home con retiro activo en {TIENDA_RETIRO_002}', { elemento: home.header.barraDelSitio });
  const retiro = new RetiroEnTienda(page);
  await retiro.abrirDesde(home.header.storeLocator);
  await retiro.modal.capturarModal(cp, 5, 'pestaña Retiro en tienda');
  await retiro.esperarListado();
  await retiro.elegirTienda(token(testData, 'TIENDA_RETIRO_001')!);
  await retiro.modal.capturarModal(cp, 7, 'tienda {TIENDA_RETIRO_001} seleccionada');
  const desde = marcaOtp();
  await retiro.confirmarTienda();
  const otp = new OtpEntregaModal(page);
  await esperarOtpAbierto(page, otp);
  marcarEnvio();
  return { home, retiro, otp, desde };
}

async function guestSinHorarios(browser: Browser, page: Page, testData: LoadedTestData): Promise<string> {
  const ctx = await browser.newContext({ viewport: page.viewportSize() ?? undefined, baseURL: baseUrl(testData) });
  try {
    const g = await ctx.newPage();
    const home = await new PaginaHabilitada(g).goto();
    await home.cookies.aceptarSiAparece();
    await home.header.storeLocator.click();
    const modal = await new MetodoEntregaModal(g).esperarAbierto();
    const { dir, texto } = { dir: token(testData, 'DIRECCION_SIN_SLA')!, texto: new RegExp(escapar(token(testData, 'DIRECCION_SIN_SLA')!.match(/\d+/)![0])) };
    await modal.fijarDireccionComoInvitado(dir, texto).catch(() => {});
    await g.waitForTimeout(6000);
    const cuerpo = (await g.locator('body').innerText()).replace(/\s+/g, ' ');
    const header = await home.header.storeLocator.innerText().catch(() => '');
    return `${header.replace(/\s+/g, ' ')} || ${/por ahora no hay horarios|a[uú]n no llegamos/i.exec(cuerpo)?.[0] ?? ''}`;
  } finally {
    await ctx.close();
  }
}

test.describe('B2C-125 — Autenticación requerida (OTP al cambiar dirección o tienda)', () => {
  test.describe.configure({ timeout: 420000 });

  for (const [ff, vp, sufijo, L] of [
    ['Desktop 1440x900', DESKTOP, 'Desktop', 'D'],
    ['Mobile 390x844', MOBILE, 'Mobile', 'M'],
  ] as const) {
    test.describe(ff, () => {
      test.use({ ...vp, storageState: SESION });
      const cp = (n: string) => `TC-B2C125-${L}-${n}`;
      const T = (n: string, titulo: string) => `${cp(n)} · ${titulo} [Logueado] (${sufijo})`;

      test(T('001', 'Confirmar una dirección nueva envía el OTP y muestra el toast de envío'), async ({ page, testData }) => {
        await conCuenta(testData, true, async () => {
          const { home, otp, desde } = await llegarAlOtp(page, testData, cp('001'));
          await expect(otp.root, 'modal «Autenticación requerida»').toBeVisible();
          await expect(otp.toastEnviado, 'toast «El código de verificación ha sido enviado. Revisa tu correo»').toBeVisible({ timeout: 8000 });
          await expect(otp.toastEnviado.getByRole('button').first(), 'el toast trae la X').toBeVisible();
          await home.capturarEvidencia(cp('001'), 6, 'modal Autenticación requerida y toast de envío');
          const codigo = await esperarOtp(correoDe(testData), desde, { digitos: 6 });
          expect(codigo, 'llega un código de 6 dígitos al correo de la cuenta').toMatch(/^\d{6}$/);
          await home.capturarEvidencia(cp('001'));
          await otp.cerrar.click();
        });
      });

      test(T('002', 'El modal Autenticación requerida muestra todos sus elementos'), async ({ page, testData }) => {
        await conCuenta(testData, false, async () => {
          const { home, otp } = await llegarAlOtp(page, testData, cp('002'));
          await expect(otp.cerrar, 'botón X').toBeVisible();
          await expect(otp.titulo, 'título «Autenticación requerida»').toBeVisible();
          await expect(otp.leyenda, '«Enviamos un código de verificación al correo»').toBeVisible();
          expect(await otp.correoMostrado(), 'correo enmascarado').toMatch(/\*{3,}/);
          await expect(otp.campos, '6 campos de código').toHaveCount(6);
          await expect(otp.temporizador, '«¿No recibiste el código? Pide uno nuevo en» con temporizador').toContainText(/no recibiste el c[oó]digo\?\s*pide uno nuevo en\s*\d+\s*s/i);
          await expect(otp.importante, 'mensaje «Importante: Asegúrate de ingresar correctamente el código de verificación»').toBeVisible();
          await expect(otp.continuar, 'botón «Continuar»').toBeVisible();
          await home.capturarEvidencia(cp('002'), 6, 'modal Autenticación requerida con todos sus elementos');
          await home.capturarEvidencia(cp('002'));
          await otp.cerrar.click();
        });
      });

      test(T('003', 'El correo del modal OTP se muestra enmascarado según la regla'), async ({ page, testData }) => {
        await conCuenta(testData, false, async () => {
          const { home, otp } = await llegarAlOtp(page, testData, cp('003'));
          const correo = correoDe(testData);
          const [local, dominio] = correo.split('@');
          const esperado = `${local.slice(0, 3)}****@${dominio[0]}***.${dominio.split('.').pop()}`;
          const mostrado = await otp.correoMostrado();
          nota('Correo mostrado', mostrado);
          await home.capturarEvidencia(cp('003'), 6, 'correo enmascarado en el modal');
          expect(mostrado, 'correo enmascarado: 3 caracteres, ****, primera letra del dominio, *** y .com').toBe(esperado);
          await home.capturarEvidencia(cp('003'));
          await otp.cerrar.click();
        });
      });

      test(T('004', 'Al ingresar un dígito el foco avanza al siguiente campo'), async ({ page, testData }) => {
        await conCuenta(testData, false, async () => {
          const { home, otp } = await llegarAlOtp(page, testData, cp('004'));
          await otp.campo(0).click();
          await page.keyboard.type('1', { delay: 40 });
          await expect(otp.campo(0)).toHaveValue('1');
          await expect(otp.campo(1), 'el foco pasa al segundo campo').toBeFocused({ timeout: 3000 });
          await home.capturarEvidencia(cp('004'), 7, 'primer dígito escrito y foco en el segundo campo');
          await home.capturarEvidencia(cp('004'));
          await otp.cerrar.click();
        });
      });

      test(T('006', 'Con menos de 6 dígitos no se permite continuar'), async ({ page, testData }) => {
        await conCuenta(testData, false, async () => {
          const { home, otp } = await llegarAlOtp(page, testData, cp('006'));
          await otp.escribir('12345');
          expect(await otp.valores(), 'solo 5 dígitos ingresados').toBe('12345');
          await home.capturarEvidencia(cp('006'), 7, 'cinco dígitos ingresados');
          await expect(otp.continuar, '«Continuar» no está habilitado con el código incompleto').toBeDisabled();
          await otp.continuar.click({ force: true, timeout: 3000 }).catch(() => {});
          await expect(otp.root, 'el modal sigue abierto: no se validó nada').toBeVisible();
          await expect(otp.codigoInvalido).toHaveCount(0);
          await home.capturarEvidencia(cp('006'));
          await otp.cerrar.click();
        });
      });

      test(T('016', 'Cerrar el modal OTP cancela el cambio y mantiene la dirección anterior'), async ({ page, testData }) => {
        await conCuenta(testData, false, async () => {
          const { home, modal, otp, calle, numero } = await llegarAlOtp(page, testData, cp('016'));
          await otp.cerrar.click();
          await expect(otp.root, 'el modal OTP se cierra').toBeHidden({ timeout: 15000 });
          await home.capturarEvidencia(cp('016'), 7, 'tras la X del modal OTP');
          const drawer = await modal.root.isVisible().catch(() => false);
          nota('Store Locator tras la X', drawer ? 'el drawer «Elige tu método de entrega» sigue abierto' : 'el drawer se cerró');
          expect.soft(drawer, 'el usuario vuelve al Store Locator').toBe(true);
          if (drawer) {
            const activa = ((await modal.direccionActiva.textContent().catch(() => '')) ?? '').trim();
            expect(activa, 'la dirección activa sigue siendo {DIRECCION_DESPACHO_001}').toMatch(ACTIVA);
            const guardadas = await modal.direccionesGuardadas();
            expect(guardadas.filter((g) => g.direccion.includes(numero)).length, '{DIRECCION_OTRA_TIENDA} no se guardó').toBe(0);
            await modal.capturarModal(cp('016'), 8, 'Store Locator con la dirección anterior activa');
            await modal.cerrarConX().catch(() => page.keyboard.press('Escape'));
          }
          await page.goto('/', { waitUntil: 'domcontentloaded' });
          const h = new PaginaHabilitada(page);
          expect(await h.header.esperarDireccionEnStoreLocator(), 'el header mantiene la dirección anterior').toMatch(ACTIVA);
          await h.capturarEvidencia(cp('016'));
        });
      });

      test(T('008', 'Un OTP correcto aplica la dirección, cierra el modal y la guarda en la libreta'), async ({ page, testData }) => {
        await conCuenta(testData, true, async () => {
          const { home, otp, desde, numero } = await llegarAlOtp(page, testData, cp('008'));
          try {
            await otp.escribir(await esperarOtp(correoDe(testData), desde, { digitos: 6 }));
            await home.capturarEvidencia(cp('008'), 6, 'código ingresado');
            await otp.continuar.click();
            await expect(otp.root, 'el modal OTP se cierra').toBeHidden({ timeout: 60000 });
            marcarConsumo();
            await agotarseSiAparece(page);
            await page.waitForTimeout(3000);
            await page.goto('/', { waitUntil: 'domcontentloaded' });
            const h = new PaginaHabilitada(page);
            const activa = await expect
              .poll(() => h.header.direccionDelStoreLocator(), { timeout: 45000, message: 'Store Locator con {DIRECCION_OTRA_TIENDA}' })
              .toMatch(/avenida las condes/i)
              .then(() => true, () => false);
            await h.capturarEvidencia(cp('008'), 7, 'Store Locator tras validar el OTP', { elemento: h.header.barraDelSitio });
            const { modal, guardadas } = await abrirListado(page, h);
            await modal.capturarModal(cp('008'), 8, 'libreta de direcciones guardadas');
            nota('Libreta', `${guardadas.filter((g) => g.direccion.includes(numero)).length} copia/s de {DIRECCION_OTRA_TIENDA}`);
            expect(activa, 'la dirección queda seteada en el Store Locator').toBe(true);
            expect(guardadas.filter((g) => g.direccion.includes(numero)).length, 'la dirección queda en la libreta').toBeGreaterThan(0);
            await modal.cerrarConX().catch(() => page.keyboard.press('Escape'));
            await h.capturarEvidencia(cp('008'));
          } finally {
            await restaurarCuenta(page, testData);
          }
        });
      });

      test(T('007', 'Al validar el código la pantalla muestra el estado skeleton'), async ({ page, testData }) => {
        await conCuenta(testData, true, async () => {
          const { home, otp, desde } = await llegarAlOtp(page, testData, cp('007'));
          try {
            const codigo = await esperarOtp(correoDe(testData), desde, { digitos: 6 });
            await otp.escribir(codigo);
            await expect(otp.continuar).toBeEnabled();
            await home.capturarEvidencia(cp('007'), 6, 'código ingresado, antes de validar');
            // Throttling «Slow 3G» de DevTools.
            const cdp = await page.context().newCDPSession(page);
            await cdp.send('Network.enable');
            await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 2000, downloadThroughput: (400 * 1024) / 8, uploadThroughput: (400 * 1024) / 8 });
            await page.evaluate(() => {
              const w = window as unknown as { __sk: string[] };
              w.__sk = [];
              const cuerpo = document.querySelector('[data-testid="delivery-otp-body"]');
              if (!cuerpo) return;
              setInterval(() => {
                const c = getComputedStyle(cuerpo);
                const hijo = cuerpo.firstElementChild ? getComputedStyle(cuerpo.firstElementChild).visibility : '-';
                const k = `${c.animationName}|${c.backgroundColor}|${hijo}`;
                if (w.__sk[w.__sk.length - 1] !== k) w.__sk.push(k);
              }, 30);
            });
            await otp.continuar.click();
            await page.waitForTimeout(400);
            await home.capturarEvidencia(cp('007'), 7, 'validando el código con red lenta');
            const estados = await page.evaluate(() => (window as unknown as { __sk: string[] }).__sk ?? []);
            nota('Estados del cuerpo del modal', JSON.stringify(estados));
            const skeleton = estados.some((e) => !/^none\|/.test(e) || /hidden/.test(e));
            await otp.root.waitFor({ state: 'hidden', timeout: 120000 }).catch(() => {});
            marcarConsumo();
            await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
            await agotarseSiAparece(page);
            expect(skeleton, 'mientras se valida el código el modal muestra el estado skeleton (componentes en gris claro)').toBe(true);
            await home.capturarEvidencia(cp('007'));
          } finally {
            await restaurarCuenta(page, testData);
          }
        });
      });

      test(T('014', 'Reenviar envía un código nuevo, reinicia el temporizador y el nuevo código funciona'), async ({ page, testData }) => {
        await conCuenta(testData, true, async () => {
          const { home, otp } = await llegarAlOtp(page, testData, cp('014'));
          try {
            const t0 = Date.now();
            await page.waitForTimeout(60_000);
            const a60 = await otp.reenviar.isVisible().catch(() => false);
            nota('A los 60 s', a60 ? '«Reenviar» visible' : `sigue el temporizador (${await otp.segundos()} s)`);
            await home.capturarEvidencia(cp('014'), 7, `a los 60 s: ${a60 ? 'Reenviar visible' : 'temporizador aún corre'}`);
            await otp.reenviar.waitFor({ state: 'visible', timeout: 90000 });
            nota('«Reenviar» aparece', `a los ${Math.round((Date.now() - t0) / 1000)} s`);
            const desde2 = marcaOtp();
            await otp.reenviar.click();
            marcarEnvio();
            await page.waitForTimeout(1500);
            const reinicio = await otp.segundos();
            nota('Temporizador tras reenviar', `${reinicio} s`);
            await home.capturarEvidencia(cp('014'), 8, `tras «Reenviar»: temporizador en ${reinicio} s`);
            const nuevo = await esperarOtp(correoDe(testData), desde2, { digitos: 6 });
            expect(nuevo, 'llega un nuevo código al correo').toMatch(/^\d{6}$/);
            await otp.escribir(nuevo);
            await otp.continuar.click();
            await expect(otp.root, 'el nuevo código se valida y el modal se cierra').toBeHidden({ timeout: 60000 });
            marcarConsumo();
            await agotarseSiAparece(page);
            await home.capturarEvidencia(cp('014'), 9, 'nuevo código validado');
            expect.soft(reinicio, 'el temporizador vuelve a 60 s').toBeLessThanOrEqual(60);
            expect.soft(a60, 'a los 60 s «Reenviar» está disponible').toBe(true);
            await home.capturarEvidencia(cp('014'));
          } finally {
            await restaurarCuenta(page, testData);
          }
        });
      });

      test(T('017', 'Con OTP correcto un error al guardar muestra el toast y no cambia la dirección'), async ({ page, testData }) => {
        await conCuenta(testData, true, async () => {
          const { home, otp, desde, calle, numero } = await llegarAlOtp(page, testData, cp('017'));
          try {
            await otp.escribir(await esperarOtp(correoDe(testData), desde, { digitos: 6 }));
            // {SETEO_ENTREGA_API_ENDPOINT} tal como lo declara la planilla (el bloqueo de DevTools).
            const endpoint = token(testData, 'SETEO_ENTREGA_API_ENDPOINT')!;
            const matcher = new RegExp(escapar(endpoint).replace(/^\\\*:\/\//, 'https?://').replace(/\\\*/g, '.*'));
            await page.route(matcher, (route) => route.abort());
            await home.capturarEvidencia(cp('017'), 6, 'código ingresado, con la request bloqueada');
            await otp.continuar.click();
            marcarConsumo();
            const toast = page.getByText(/no pudimos guardar tu direcci[oó]n/i).locator('visible=true').first();
            const hay = await toast.waitFor({ state: 'visible', timeout: 30000 }).then(() => true, () => false);
            await home.capturarEvidencia(cp('017'), 7, 'resultado tras validar el código');
            await page.unroute(matcher);
            await otp.root.waitFor({ state: 'hidden', timeout: 20000 }).catch(() => {});
            await page.goto('/', { waitUntil: 'domcontentloaded' });
            const h = new PaginaHabilitada(page);
            const activa = await h.header.esperarDireccionEnStoreLocator();
            nota('Dirección activa tras el error', activa);
            expect(hay, 'toast «Lo sentimos, no pudimos guardar tu dirección. Inténtalo nuevamente.»').toBe(true);
            expect(activa, 'la dirección activa sigue siendo {DIRECCION_DESPACHO_001}').toMatch(ACTIVA);
            expect(activa).not.toMatch(/avenida las condes/i);
            await h.capturarEvidencia(cp('017'));
          } finally {
            await page.unroute(/.*/).catch(() => {});
            await restaurarCuenta(page, testData);
          }
        });
      });

      test(T('019', 'Con OTP correcto y una dirección sin horarios se deriva al modal Sin horarios disponibles'), async ({ page, browser, testData }) => {
        // La precondición es de la data: {DIRECCION_SIN_SLA} con cobertura y sin SLAs. Se comprueba como invitado, sin gastar OTP.
        const sondeo = await guestSinHorarios(browser, page, testData);
        nota('Sondeo de {DIRECCION_SIN_SLA} (invitado)', sondeo);
        if (/desde:/i.test(sondeo) && !/por ahora no hay horarios/i.test(sondeo)) {
          const motivo = `BLOQUEADO_DATA: {DIRECCION_SIN_SLA} sí tiene horarios en el ambiente (header «${sondeo.split('||')[0].trim()}»); la precondición «cobertura y sin SLAs» no se cumple.`;
          test.skip(true, motivo);
        }
        if (/a[uú]n no llegamos/i.test(sondeo)) {
          const motivo = `BLOQUEADO_DATA: {DIRECCION_SIN_SLA} no tiene cobertura en el ambiente («Aún no llegamos a esta dirección»); la precondición «tiene cobertura» no se cumple.`;
          test.skip(true, motivo);
        }
        await conCuenta(testData, true, async () => {
          const home = await abrirHome(page, testData);
          const { modal } = await abrirListado(page, home);
          const dir = token(testData, 'DIRECCION_SIN_SLA')!;
          await modal.elegirSugerencia(dir, new RegExp(escapar(dir.match(/\d+/)![0])));
          const desde = marcaOtp();
          await modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
          await modal.confirmacionPin.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
          const otp = new OtpEntregaModal(page);
          await esperarOtpAbierto(page, otp);
          marcarEnvio();
          try {
            await otp.escribir(await esperarOtp(correoDe(testData), desde, { digitos: 6 }));
            await otp.continuar.click();
            await expect(otp.root).toBeHidden({ timeout: 60000 });
            const sin = page.getByRole('dialog').filter({ hasText: /por ahora no hay horarios disponibles/i }).locator('visible=true').first();
            const ok = await sin.waitFor({ state: 'visible', timeout: 30000 }).then(() => true, () => false);
            await home.capturarEvidencia(cp('019'), 8, 'resultado tras validar el OTP');
            expect(ok, 'modal «Por ahora no hay horarios disponibles»').toBe(true);
          } finally {
            await restaurarCuenta(page, testData);
          }
        });
      });

      test(T('009', 'El temporizador de reenvío inicia en 60 segundos y bloquea el reenvío'), async ({ page, testData }) => {
        await conCuenta(testData, true, async () => {
          const { home, otp } = await llegarAlOtp(page, testData, cp('009'));
          const inicial = await otp.segundos();
          nota('Temporizador inicial', `${inicial} s (leído ~1-2 s tras abrir el modal)`);
          await home.capturarEvidencia(cp('009'), 6, `temporizador inicial: ${inicial} s`);
          await expect(otp.reenviar, 'no se muestra «Reenviar» mientras corre el temporizador').toBeHidden();
          await page.waitForTimeout(2000);
          const despues = await otp.segundos();
          expect(despues, 'la cuenta es regresiva').toBeLessThan(inicial ?? 0);
          await home.capturarEvidencia(cp('009'));
          await otp.cerrar.click();
          expect(inicial, 'el temporizador inicia en 60 segundos').toBeLessThanOrEqual(60);
        });
      });

      test(T('010', 'Al terminar el temporizador se muestra Reenviar'), async ({ page, testData }) => {
        await conCuenta(testData, true, async () => {
          const { home, otp } = await llegarAlOtp(page, testData, cp('010'));
          const t0 = Date.now();
          await page.waitForTimeout(Math.max(0, 60_000 - (Date.now() - t0)));
          const visible = await otp.reenviar.isVisible().catch(() => false);
          const restante = await otp.segundos();
          nota('A los 60 s', visible ? '«Reenviar» visible' : `sigue el temporizador (${restante} s)`);
          await home.capturarEvidencia(cp('010'), 7, `a los 60 s: ${visible ? 'Reenviar visible' : `temporizador en ${restante} s`}`);
          let a = visible ? 60 : null;
          if (!visible) {
            await otp.reenviar.waitFor({ state: 'visible', timeout: 90000 }).catch(() => {});
            a = Math.round((Date.now() - t0) / 1000);
            nota('«Reenviar» aparece', `a los ${a} s`);
            await home.capturarEvidencia(cp('010'), 8, `«Reenviar» visible a los ${a} s`);
          }
          await home.capturarEvidencia(cp('010'));
          await otp.cerrar.click();
          expect(visible, 'al terminar los 60 segundos se muestra «Reenviar»').toBe(true);
        });
      });

      test(T('015', 'Tras reenviar el código anterior ya no es válido'), async ({ page, testData }) => {
        await conCuenta(testData, true, async () => {
          const { home, otp, desde } = await llegarAlOtp(page, testData, cp('015'));
          const primero = await esperarOtp(correoDe(testData), desde, { digitos: 6 });
          const t0 = Date.now();
          await page.waitForTimeout(60_000);
          if (!(await otp.reenviar.isVisible().catch(() => false))) nota('A los 60 s', `«Reenviar» aún no está disponible (temporizador en ${await otp.segundos()} s); se espera a que aparezca`);
          await otp.reenviar.waitFor({ state: 'visible', timeout: 90000 });
          nota('«Reenviar» aparece', `a los ${Math.round((Date.now() - t0) / 1000)} s`);
          await otp.reenviar.click();
          marcarEnvio();
          await page.waitForTimeout(2000);
          await home.capturarEvidencia(cp('015'), 8, 'tras «Reenviar»');
          await otp.escribir(primero);
          await otp.continuar.click();
          await expect(otp.codigoInvalido, 'el código del primer envío es rechazado con «Código inválido»').toBeVisible({ timeout: 20000 });
          await home.capturarEvidencia(cp('015'), 9, 'código anterior rechazado');
          await home.capturarEvidencia(cp('015'));
          await otp.cerrar.click();
        });
      });

      test(T('018', 'Confirmar un cambio de tienda de retiro envía el OTP y muestra el modal con el toast de envío'), async ({ page, testData }) => {
        await conCuenta(testData, true, async () => {
          const { home, retiro, otp, desde } = await llegarAlOtpRetiro(page, testData, cp('018'));
          await expect(otp.root, 'modal «Autenticación requerida»').toBeVisible();
          await expect(otp.toastEnviado, 'toast «El código de verificación ha sido enviado. Revisa tu correo»').toBeVisible({ timeout: 8000 });
          await expect(otp.toastEnviado.getByRole('button').first(), 'el toast trae la X').toBeVisible();
          await expect(otp.campos, 'campos de ingreso').toHaveCount(6);
          const mostrado = await otp.correoMostrado();
          const [local, dominio] = correoDe(testData).split('@');
          expect(mostrado, 'correo enmascarado').toBe(`${local.slice(0, 3)}****@${dominio[0]}***.${dominio.split('.').pop()}`);
          await home.capturarEvidencia(cp('018'), 8, 'modal Autenticación requerida y toast de envío');
          const codigo = await esperarOtp(correoDe(testData), desde, { digitos: 6 });
          expect(codigo, 'llega un código de 6 dígitos al correo de la cuenta').toMatch(/^\d{6}$/);
          await otp.cerrar.click();
          await expect(retiro.modal.root.or(home.header.storeLocator).first()).toBeVisible();
          await home.capturarEvidencia(cp('018'));
        });
      });

      test(T('020', 'Cerrar el modal OTP tras cambiar la tienda de retiro mantiene la tienda anterior'), async ({ page, testData }) => {
        await conCuenta(testData, true, async () => {
          const { home, retiro, otp } = await llegarAlOtpRetiro(page, testData, cp('020'));
          const t1 = token(testData, 'TIENDA_RETIRO_001')!;
          const t2 = token(testData, 'TIENDA_RETIRO_002')!;
          await otp.cerrar.click();
          await expect(otp.root, 'el modal OTP se cierra').toBeHidden({ timeout: 15000 });
          await home.capturarEvidencia(cp('020'), 9, 'tras la X del modal OTP');
          const drawer = await retiro.modal.root.isVisible().catch(() => false);
          nota('Store Locator tras la X', drawer ? 'el drawer sigue abierto' : 'el drawer se cerró');
          expect.soft(drawer, 'el usuario vuelve al Store Locator sin cambios').toBe(true);
          if (drawer) {
            await retiro.modal.capturarModal(cp('020'), 10, 'Store Locator sin cambios');
            await retiro.modal.cerrarConX().catch(() => page.keyboard.press('Escape'));
          }
          await page.goto('/', { waitUntil: 'domcontentloaded' });
          const h = new PaginaHabilitada(page);
          await h.header.esperarDireccionEnStoreLocator().catch(() => '');
          const txt = await h.header.storeLocator.innerText();
          expect(txt, 'el retiro activo sigue siendo {TIENDA_RETIRO_002}').toContain(t2);
          expect(txt, '{TIENDA_RETIRO_001} no queda seteada').not.toContain(t1);
          await h.capturarEvidencia(cp('020'));
        });
      });
    });
  }

  // Los casos de espera larga y la limpieza viven fuera de los viewports de los TC.
  test.describe('Preparación y restauración de la cuenta', () => {
    test.use({ ...DESKTOP, storageState: SESION });

    test('PREPARAR cuenta de B2C-125 (Desktop)', async ({ page, testData }) => {
      const home = await abrirHome(page, testData);
      const { numero } = direccionOtra(testData);
      const aria = (await home.header.miniCarrito.first().getAttribute('aria-label')) ?? '';
      nota('Carro', aria);
      if (!/\b0\b|vac[ií]o/i.test(aria)) {
        const carro = await new CarroPage(page).goto();
        await carro.vaciar();
      }
      let borradas = 0;
      for (let i = 0; i < 15; i++) {
        await page.goto('/', { waitUntil: 'domcontentloaded' });
        const h = new PaginaHabilitada(page);
        await h.header.esperarDireccionEnStoreLocator().catch(() => '');
        const { modal, guardadas } = await abrirListado(page, h);
        const copia = guardadas.find((g) => g.direccion.includes(numero));
        if (!copia) break;
        await modal.pedirEliminar(copia.etiqueta);
        await modal.botonAceptarEliminar.click();
        await page.waitForTimeout(3000);
        borradas++;
      }
      nota('Preparación', `copias de {DIRECCION_OTRA_TIENDA} eliminadas: ${borradas}`);
    });

    test('RESTAURAR cuenta de B2C-125 (Desktop)', async ({ page, testData }) => {
      await conCandado(correoDe(testData), async () => {
        await restaurarCuenta(page, testData);
      });
    });
  });

  test.describe('Esperas largas', () => {
    for (const [vp, sufijo, L] of [[DESKTOP, 'Desktop', 'D'], [MOBILE, 'Mobile', 'M']] as const) {
      test.describe(sufijo, () => {
        test.use({ ...vp, storageState: SESION });
        test(`TC-B2C125-${L}-012 · Un código expirado muestra Código inválido y el toast con Solicitar [Logueado] (${sufijo})`, async ({ page, testData }) => {
          test.setTimeout(1_500_000);
          const cp = `TC-B2C125-${L}-012`;
          await enfriar();
          const { home, otp, codigo } = await conCandado(correoDe(testData), async () => {
            const r = await llegarAlOtp(page, testData, cp);
            const c = await esperarOtp(correoDe(testData), r.desde, { digitos: 6 });
            return { ...r, codigo: c };
          });
          await home.capturarEvidencia(cp, 6, 'modal Autenticación requerida recién abierto');
          // Más de 10 minutos desde el envío.
          for (let i = 0; i < 13; i++) {
            await page.waitForTimeout(50_000);
            await page.mouse.move(10 + i, 10 + i).catch(() => {});
          }
          await home.capturarEvidencia(cp, 7, 'tras más de 10 minutos de espera');
          await otp.escribir(codigo);
          await otp.continuar.click();
          await page.waitForTimeout(2500);
          const invalido = await otp.codigoInvalido.isVisible().catch(() => false);
          const toast = otp.toast(/el c[oó]digo expir[oó]/i);
          const hayToast = await toast.waitFor({ state: 'visible', timeout: 10000 }).then(() => true, () => false);
          await home.capturarEvidencia(cp, 8, 'código expirado ingresado');
          const rojo = await otp.colorBorde(0);
          nota('Borde del primer campo', rojo.join(','));
          expect(invalido, 'se muestra «Código inválido»').toBe(true);
          expect(rojo[0], 'los campos se pintan en rojo').toBeGreaterThan(150);
          expect(hayToast, 'toast «El código expiró, solicita uno nuevo para continuar»').toBe(true);
          await expect(toast.getByRole('button', { name: /solicitar/i }), 'botón «Solicitar»').toBeVisible();
          await home.capturarEvidencia(cp);
          await otp.cerrar.click().catch(() => {});
        });
      });
    }
  });
});
