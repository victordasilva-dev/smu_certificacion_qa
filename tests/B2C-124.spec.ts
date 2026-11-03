import * as fs from 'fs';
import * as path from 'path';
import { Browser, Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { LoadedTestData, baseUrl } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { esperarOtp, marcaOtp } from './support/otp';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { AgotarseModal } from './pages/AgotarseModal';
import { LoginModal } from './pages/LoginModal';
import { PDPPage } from './pages/PDPPage';
import { CarroPage } from './pages/CarroPage';

/**
 * B2C-124 — Dirección del invitado al iniciar sesión (dirección heredada + OTP).
 *
 * Con `test()`: 001, 003, 004 y 005, en Desktop y en Mobile. Todos parten de un invitado con
 * {DIRECCION_OTRA_TIENDA} aplicada que inicia sesión con {USER_AUTH_001} (correo + OTP).
 *
 * Sin `test()` (Bloqueado; los cubre `B2C-124-impedimento.spec.ts`, que deja la captura):
 *  - 006, 007, 008 y 009 (D/M): su precondición es un invitado SIN dirección con productos en el
 *    carro, y el sitio no lo permite: como invitado «Agregar» abre «Elige tu método de entrega»
 *    ("Para armar tu carro, ingresa una dirección…") y la dirección persiste entre pestañas.
 *  - 002 (D/M): la misma precondición, y además {SKU_NO_DISPONIBLE_TIENDA_A} está vacío en el
 *    Excel de data.
 *
 * Cada caso cambia la cuenta (dirección activa y lista de guardadas), así que se lee su estado
 * antes con la sesión guardada en `.qa/auth/b148-user.json` (otro contexto, sin gastar OTP) y se
 * restaura al terminar. Los cuatro casos exigen el carro de la cuenta vacío.
 */

const SESION = path.resolve('.qa/auth/b148-user.json');

function escapar(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function correoDe(testData: LoadedTestData): string {
  return token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
}

function nota(tipo: string, descripcion: string): void {
  test.info().annotations.push({ type: tipo, description: descripcion });
}

/** {DIRECCION_OTRA_TIENDA} = "A. Las Conder 14791, Lo Barnechea": Google la normaliza a "Avenida Las Condes 14791". */
function direccionOtra(testData: LoadedTestData): { dir: string; numero: string; texto: RegExp } {
  const dir = token(testData, 'DIRECCION_OTRA_TIENDA')!;
  const numero = dir.match(/\d+/)![0];
  const comuna = dir.split(',').pop()!.trim();
  return { dir, numero, texto: new RegExp(`${numero}[\\s\\S]*${escapar(comuna)}`, 'i') };
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

/** Login por correo + OTP en `page` (para dejar la sesión de la cuenta guardada). Atiende también "Autenticación requerida". */
async function iniciarSesionConOtp(page: Page, testData: LoadedTestData): Promise<void> {
  const login = new LoginModal(page);
  const desde = marcaOtp();
  await login.pedirCodigo(correoDe(testData));
  const codigo = await esperarOtp(correoDe(testData), desde, { digitos: 6 });
  const desde2 = marcaOtp();
  await login.escribirCodigo(codigo);
  await login.disparador.first().waitFor({ state: 'hidden', timeout: 45000 });
  const ahoraNo = login.ofertaPasskey.getByRole('button', { name: /^ahora no$/i });
  const fin = Date.now() + 25000;
  while (Date.now() < fin) {
    if (await otpSiAparece(page, testData, desde2, 1500)) break;
    if (await ahoraNo.isVisible().catch(() => false)) await ahoraNo.click({ timeout: 5000 }).catch(() => {});
  }
  await login.descartarPasskey();
}

/** Abre un contexto aparte (Desktop) con la sesión de la cuenta, y corre `fn` en él. */
async function conCuenta<T>(browser: Browser, testData: LoadedTestData, fn: (page: Page) => Promise<T>): Promise<T> {
  const ctx = await browser.newContext({
    ...DESKTOP,
    baseURL: baseUrl(testData),
    storageState: fs.existsSync(SESION) ? SESION : undefined,
  });
  const page = await ctx.newPage();
  try {
    const home = await new PaginaHabilitada(page).goto();
    await home.cookies.aceptarSiAparece();
    const conSesion = await home.header.saludo.waitFor({ state: 'visible', timeout: 20000 }).then(() => true, () => false);
    if (!conSesion) {
      await iniciarSesionConOtp(page, testData);
      fs.mkdirSync(path.dirname(SESION), { recursive: true });
      await ctx.storageState({ path: SESION });
    }
    return await fn(page);
  } finally {
    await ctx.close();
  }
}

interface EstadoCuenta {
  guardadas: { etiqueta: string; direccion: string }[];
  activa: string;
}

/** Abre el Store Locator con sesión y devuelve las guardadas y la etiqueta de la activa. */
async function guardadasDeLaCuenta(page: Page): Promise<{ modal: MetodoEntregaModal } & EstadoCuenta> {
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
  return { modal, guardadas: guardadas.map(({ etiqueta, direccion }) => ({ etiqueta, direccion })), activa };
}

async function estadoCuenta(browser: Browser, testData: LoadedTestData): Promise<EstadoCuenta> {
  return conCuenta(browser, testData, async (page) => {
    const { modal, guardadas, activa } = await guardadasDeLaCuenta(page);
    await modal.cerrarConX().catch(() => page.keyboard.press('Escape'));
    return { guardadas, activa };
  });
}

/** Precondición "El carro de la cuenta está vacío". */
async function dejarCarroVacio(browser: Browser, testData: LoadedTestData): Promise<void> {
  await conCuenta(browser, testData, async (page) => {
    const carro = await new CarroPage(page).goto();
    await carro.vaciar();
  });
}

/** Deja la cuenta como estaba: vuelve a la activa anterior y elimina las guardadas que creó el caso. */
async function restaurarCuenta(browser: Browser, testData: LoadedTestData, previo: EstadoCuenta, numero: string): Promise<void> {
  try {
    await conCuenta(browser, testData, async (page) => {
      const { modal, guardadas, activa } = await guardadasDeLaCuenta(page);
      if (!previo.guardadas.length) throw new Error('lista previa vacía: no se elimina nada');
      const volvio = previo.activa && activa !== previo.activa && guardadas.some((g) => g.etiqueta === previo.activa);
      if (volvio) {
        const desde = marcaOtp();
        await modal.elegirGuardada(previo.activa);
        await otpSiAparece(page, testData, desde, 20000);
      }
      // Solo se borra lo que creó el caso: una guardada que no estaba antes y lleva su numeración.
      const nuevas = guardadas.filter((g) => !previo.guardadas.some((p) => p.etiqueta === g.etiqueta) && g.direccion.includes(numero));
      for (const n of nuevas) {
        const { modal: m } = await guardadasDeLaCuenta(page);
        await m.pedirEliminar(n.etiqueta);
        await m.botonAceptarEliminar.click();
        await page.waitForTimeout(3000);
      }
      nota('Restauración', `Activa: «${previo.activa}»${volvio ? ' (reseleccionada)' : ' (sin cambio)'}. Eliminadas: ${nuevas.map((n) => `«${n.etiqueta}»`).join(', ') || '(ninguna)'}.`);
    });
  } catch (e) {
    nota('Restauración', `No se pudo dejar la cuenta como estaba: ${(e as Error).message.slice(0, 200)}`);
  }
}

/** Precondición: invitado con {DIRECCION_OTRA_TIENDA} aplicada (y, si se pide, con {SKU_VALID_001} en el carro). */
async function invitadoConDireccion(
  page: Page,
  testData: LoadedTestData,
  cp: string,
  conSku: boolean,
): Promise<{ home: PaginaHabilitada; direccion: string }> {
  let home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  const { dir, texto } = direccionOtra(testData);
  await modal.fijarDireccionComoInvitado(dir, texto);
  if (conSku) {
    const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
    await pdp.fijarCantidad(1);
    home = await new PaginaHabilitada(page).goto();
  }
  const direccion = await home.header.esperarDireccionEnStoreLocator();
  await home.capturarEvidencia(cp, 2, `Home del invitado con la dirección «${direccion}»`, { elemento: home.header.barraDelSitio });
  return { home, direccion };
}

/**
 * Pasos "Ingresa" + correo + código del login. Devuelve si apareció «Autenticación requerida» y
 * desde cuándo vale el segundo código.
 */
async function iniciarSesionHastaOtp(
  page: Page,
  testData: LoadedTestData,
): Promise<{ login: LoginModal; modal: MetodoEntregaModal; visible: boolean; desde2: Date }> {
  const login = new LoginModal(page);
  const modal = new MetodoEntregaModal(page);
  const desde = marcaOtp();
  await login.pedirCodigo(correoDe(testData));
  const codigo = await esperarOtp(correoDe(testData), desde, { digitos: 6 });
  const desde2 = marcaOtp();
  await login.escribirCodigo(codigo);
  // Mientras verifica el primer código, el propio drawer del login también se titula
  // «Autenticación requerida» (explorado 2026-10-26): el modal de la dirección heredada es el que
  // aparece DESPUÉS, con la sesión ya iniciada ("Ingresa aquí" desaparece del header).
  await login.disparador.first().waitFor({ state: 'hidden', timeout: 45000 });
  const ahoraNo = login.ofertaPasskey.getByRole('button', { name: /^ahora no$/i });
  const fin = Date.now() + 45000;
  while (Date.now() < fin) {
    if (await modal.modalOtp.isVisible().catch(() => false)) return { login, modal, visible: true, desde2 };
    if (await ahoraNo.isVisible().catch(() => false)) await ahoraNo.click({ timeout: 5000 }).catch(() => {});
    await page.waitForTimeout(500);
  }
  return { login, modal, visible: false, desde2 };
}

/** Escribe el segundo código en "Autenticación requerida" y espera a que el modal se cierre. */
async function validarOtp(page: Page, testData: LoadedTestData, login: LoginModal, modal: MetodoEntregaModal, desde2: Date): Promise<void> {
  await login.escribirCodigo(await esperarOtp(correoDe(testData), desde2, { digitos: 6 }));
  await modal.modalOtp.waitFor({ state: 'hidden', timeout: 45000 });
}

/** Precondición común: la dirección activa de la cuenta es {DIRECCION_DESPACHO_001}. */
function verificarBase(previo: EstadoCuenta, testData: LoadedTestData): void {
  const calle = token(testData, 'DIRECCION_DESPACHO_001')!.split(',')[0].trim();
  const activa = previo.guardadas.find((g) => g.etiqueta === previo.activa);
  if (!activa || !activa.direccion.startsWith(calle)) {
    throw new Error(`PRECONDICION_NO_CUMPLE: la dirección activa de {USER_AUTH_001} no es {DIRECCION_DESPACHO_001} (activa: «${previo.activa || '(no legible)'}»)`);
  }
}

const TOAST_PENDIENTE = /verificaci[oó]n pendiente\.?\s*tu direcci[oó]n no fue guardada/i;

test.describe('B2C-124 — Dirección del invitado al iniciar sesión', () => {
  test.describe.configure({ timeout: 900000 });

  for (const [ff, vp, sufijo, L] of [
    ['Desktop 1440x900', DESKTOP, 'Desktop', 'D'],
    ['Mobile 390x844', MOBILE, 'Mobile', 'M'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);

      test(`TC-B2C124-${L}-004 · Salir del OTP sin validar inicia sesión sin aplicar la dirección del invitado [Guest] (${sufijo})`, async ({ page, browser, testData }) => {
        const cp = `TC-B2C124-${L}-004`;
        const { numero } = direccionOtra(testData);
        const calleCuenta = token(testData, 'DIRECCION_DESPACHO_001')!.split(',')[0].trim();
        await dejarCarroVacio(browser, testData);
        const previo = await estadoCuenta(browser, testData);
        verificarBase(previo, testData);
        try {
          const { home, direccion } = await invitadoConDireccion(page, testData, cp, false);
          const carroAntes = await home.header.miniCarrito.getAttribute('aria-label');

          const { modal, visible } = await iniciarSesionHastaOtp(page, testData);
          expect(visible, 'se muestra «Autenticación requerida»').toBe(true);
          await modal.capturarModal(cp, 4, 'modal «Autenticación requerida»', page);

          await modal.cerrarOtp();
          await expect(page.getByText(TOAST_PENDIENTE).first(), 'toast «Verificación pendiente. Tu dirección no fue guardada.»').toBeVisible({ timeout: 15000 });
          await home.capturarEvidencia(cp, 5, 'tras la X del OTP: toast de verificación pendiente');
          await expect(home.header.saludo, 'la sesión queda iniciada').toBeVisible({ timeout: 30000 });
          await home.goto();

          await expect
            .poll(() => home.header.direccionDelStoreLocator(), { timeout: 30000, message: 'queda la dirección de la cuenta' })
            .toContain(calleCuenta);
          const activa = await home.header.direccionDelStoreLocator();
          nota('Store Locator tras la X', activa);
          expect(activa, `la dirección del invitado «${direccion}» no queda aplicada`).not.toBe(direccion);
          await home.capturarEvidencia(cp, 6, 'Store Locator con la dirección de la cuenta', { elemento: home.header.barraDelSitio });

          const abierto = await guardadasDeLaCuenta(page);
          await abierto.modal.capturarModal(cp, 7, 'libreta de direcciones guardadas', page);
          nota('Libreta', `antes: ${previo.guardadas.length} guardadas; después: ${abierto.guardadas.length}`);
          expect(abierto.guardadas.map((g) => `${g.etiqueta}|${g.direccion}`).sort(), 'la libreta no cambia').toEqual(
            previo.guardadas.map((g) => `${g.etiqueta}|${g.direccion}`).sort(),
          );
          expect(abierto.guardadas.filter((g) => g.direccion.includes(numero)).length, `{DIRECCION_OTRA_TIENDA} no se agrega a la libreta`).toBe(
            previo.guardadas.filter((g) => g.direccion.includes(numero)).length,
          );
          await abierto.modal.cerrarConX().catch(() => page.keyboard.press('Escape'));

          expect(await home.header.miniCarrito.getAttribute('aria-label'), 'el carro no se actualiza').toBe(carroAntes);
          await home.capturarEvidencia(cp);
        } finally {
          await restaurarCuenta(browser, testData, previo, direccionOtra(testData).numero);
        }
      });

      test(`TC-B2C124-${L}-003 · Al iniciar sesión con dirección heredada se solicita la validación OTP [Guest] (${sufijo})`, async ({ page, browser, testData }) => {
        const cp = `TC-B2C124-${L}-003`;
        await dejarCarroVacio(browser, testData);
        const previo = await estadoCuenta(browser, testData);
        verificarBase(previo, testData);
        try {
          const { home, direccion } = await invitadoConDireccion(page, testData, cp, false);

          const { login, modal, visible, desde2 } = await iniciarSesionHastaOtp(page, testData);
          expect(visible, 'se muestra el modal «Autenticación requerida»').toBe(true);
          await modal.capturarModal(cp, 4, 'modal «Autenticación requerida»', page);
          await home.capturarEvidencia(cp, 5, 'pantalla con el modal abierto: aún sin validar');
          nota('Header antes de validar', await home.header.barraDelSitio.innerText({ timeout: 3000 }).then((t) => t.replace(/\s+/g, ' ').trim(), () => '(no legible)'));

          await validarOtp(page, testData, login, modal, desde2);
          await login.descartarPasskey();
          await expect(home.header.saludo).toBeVisible({ timeout: 30000 });
          await home.goto();
          await expect
            .poll(() => home.header.direccionDelStoreLocator(), { timeout: 30000, message: 'la dirección queda aplicada tras validar el OTP' })
            .toBe(direccion);
          await home.capturarEvidencia(cp, 7, 'tras validar el OTP: dirección aplicada', { elemento: home.header.barraDelSitio });
          await home.capturarEvidencia(cp);
        } finally {
          await restaurarCuenta(browser, testData, previo, direccionOtra(testData).numero);
        }
      });

      test(`TC-B2C124-${L}-001 · La dirección del invitado se mantiene activa tras iniciar sesión y validar OTP [Guest] (${sufijo})`, async ({ page, browser, testData }) => {
        const cp = `TC-B2C124-${L}-001`;
        const calleCuenta = token(testData, 'DIRECCION_DESPACHO_001')!.split(',')[0].trim();
        await dejarCarroVacio(browser, testData);
        const previo = await estadoCuenta(browser, testData);
        verificarBase(previo, testData);
        try {
          const { home, direccion } = await invitadoConDireccion(page, testData, cp, false);

          const { login, modal, visible, desde2 } = await iniciarSesionHastaOtp(page, testData);
          expect(visible, 'se muestra «Autenticación requerida» para confirmar la dirección heredada').toBe(true);
          await modal.capturarModal(cp, 4, 'modal «Autenticación requerida»', page);

          await validarOtp(page, testData, login, modal, desde2);
          await login.descartarPasskey();
          await expect(home.header.saludo).toBeVisible({ timeout: 30000 });
          await home.goto();
          await expect
            .poll(() => home.header.direccionDelStoreLocator(), { timeout: 30000, message: 'el Store Locator mantiene la dirección del invitado' })
            .toBe(direccion);
          const activa = await home.header.direccionDelStoreLocator();
          expect(activa, `no pasa a la dirección de la cuenta (${calleCuenta})`).not.toContain(calleCuenta);
          await home.capturarEvidencia(cp, 6, 'Store Locator tras validar el OTP', { elemento: home.header.barraDelSitio });

          await home.header.storeLocator.click();
          const drawer = await new MetodoEntregaModal(page).esperarAbierto();
          await expect(drawer.campoBusqueda, 'el Store Locator permite cambiar la dirección').toBeVisible({ timeout: 15000 });
          await drawer.capturarModal(cp, 7, 'Store Locator abierto: se puede cambiar la dirección', page);
          await drawer.cerrarConX().catch(() => page.keyboard.press('Escape'));
          await home.capturarEvidencia(cp);
        } finally {
          await restaurarCuenta(browser, testData, previo, direccionOtra(testData).numero);
        }
      });

      test(`TC-B2C124-${L}-005 · Con carro y cambio de tienda el OTP exitoso muestra el modal «Algunos productos podrían agotarse» [Guest] (${sufijo})`, async ({ page, browser, testData }) => {
        const cp = `TC-B2C124-${L}-005`;
        await dejarCarroVacio(browser, testData);
        const previo = await estadoCuenta(browser, testData);
        verificarBase(previo, testData);
        try {
          const { home, direccion } = await invitadoConDireccion(page, testData, cp, true);

          // Con carro y cambio de tienda el sitio puede mostrar los dos modales en cualquier orden:
          // se atienden según aparecen y se registra cuál salió primero.
          const login = new LoginModal(page);
          const modal = new MetodoEntregaModal(page);
          const agotarse = new AgotarseModal(page);
          const desde = marcaOtp();
          await login.pedirCodigo(correoDe(testData));
          const codigo = await esperarOtp(correoDe(testData), desde, { digitos: 6 });
          const desde2 = marcaOtp();
          await login.escribirCodigo(codigo);
          await login.disparador.first().waitFor({ state: 'hidden', timeout: 45000 });

          const ahoraNo = login.ofertaPasskey.getByRole('button', { name: /^ahora no$/i });
          const orden: string[] = [];
          let paso = 4;
          let ultimo = Date.now();
          while (Date.now() - ultimo < (orden.length ? 25000 : 150000)) {
            if (await agotarse.root.isVisible().catch(() => false)) {
              orden.push('agotarse');
              await agotarse.capturar(cp, paso++, 'modal «Algunos productos podrían agotarse»', page);
              await agotarse.botonSi.click();
              await agotarse.root.waitFor({ state: 'hidden', timeout: 45000 });
              ultimo = Date.now();
              continue;
            }
            if (await modal.modalOtp.isVisible().catch(() => false)) {
              orden.push('otp');
              await modal.capturarModal(cp, paso++, 'modal «Autenticación requerida»', page);
              await login.escribirCodigo(await esperarOtp(correoDe(testData), desde2, { digitos: 6 }));
              await modal.modalOtp.waitFor({ state: 'hidden', timeout: 45000 });
              ultimo = Date.now();
              continue;
            }
            if (await ahoraNo.isVisible().catch(() => false)) await ahoraNo.click({ timeout: 5000 }).catch(() => {});
            await page.waitForTimeout(500);
          }
          nota('Orden de los modales', orden.join(' → ') || '(ninguno)');
          const toastMerge = page.getByText(/no pudimos sumar a tu cuenta los productos/i).first();
          if (await toastMerge.isVisible().catch(() => false)) {
            nota('Toast del sitio', ((await toastMerge.textContent()) ?? '').trim());
            await home.capturarEvidencia(cp, paso++, 'toast de error al sumar el carro del invitado');
          }
          if (!orden.length) await home.capturarEvidencia(cp, paso++, 'estado de la pantalla sin modales');
          expect(orden, 'aparecen «Autenticación requerida» y «Algunos productos podrían agotarse»').toEqual(expect.arrayContaining(['otp', 'agotarse']));
          expect.soft(orden[0], 'el modal «Algunos productos podrían agotarse» aparece después de validar el OTP (el sitio lo muestra antes del OTP)').toBe('otp');
          await login.descartarPasskey();
          await home.goto();
          await expect
            .poll(() => home.header.direccionDelStoreLocator(), { timeout: 30000, message: 'la dirección del invitado queda aplicada' })
            .toBe(direccion);
          await home.capturarEvidencia(cp, 8, 'tras «Sí, continuar»: dirección aplicada', { elemento: home.header.barraDelSitio });

          const carro = await new CarroPage(page).goto();
          await expect(carro.botonesEliminar.first(), 'el carro conserva el producto').toBeVisible({ timeout: 30000 });
          await carro.capturarEvidencia(cp, 9, 'carro tras el cambio de tienda');
          await carro.capturarEvidencia(cp);
        } finally {
          await restaurarCuenta(browser, testData, previo, direccionOtra(testData).numero);
          await dejarCarroVacio(browser, testData).catch(() => {});
        }
      });
    });
  }
});
