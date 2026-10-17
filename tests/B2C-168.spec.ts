import * as fs from 'fs';
import * as path from 'path';
import { Browser, Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { LoadedTestData } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { PDPPage } from './pages/PDPPage';
import { CarroPage } from './pages/CarroPage';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { LoginModal } from './pages/LoginModal';
import { esperarOtp, marcaOtp } from './support/otp';

/**
 * B2C-168 — Fusión del carro invitado con el carro guardado de la cuenta al iniciar sesión.
 *
 * Cada caso arma su precondición en dos contextos:
 *  1. **El carro guardado de {USER_AUTH_001}**, con la sesión de la cuenta guardada en
 *     `.qa/auth/b148-user.json` (otro contexto del navegador): se vacía y se cargan los productos
 *     del TC. Equivale a "iniciar sesión, armar el carro y cerrar sesión", sin gastar un OTP.
 *  2. **La sesión de invitado** es la `page` del caso, un contexto limpio. Como invitado "Agregar"
 *     exige un método de entrega (abre "Elige tu método de entrega"), así que solo se arma un carro
 *     de invitado con productos cuando la fila declara la dirección (D/M-007).
 * Después el invitado inicia sesión con correo + OTP desde "Ingresa aquí" y el caso mira el carro.
 *
 * Quedan sin `test()`, por data (ver la Observación de cada fila; re-verificado 2026-10-15):
 *  - 001 y 002: {SKU_VALID_001} × 1 queda bajo el mínimo de $20.000 y el carro no ofrece botón de login.
 *  - 003, 006, 009 y 015: {SKU_UNITARIO} está "Pronto disponible" para {DIRECCION_DESPACHO_001}.
 *  - 010 y 011: {SKU_NO_DISPONIBLE} tiene stock en {TIENDA_SIN_STOCK}.
 *  - 012: {SKU_PROM_NxM} no declarado. 013: {APP_BUILD} no es un build. 014: sin dirección del invitado.
 */

const SESION = path.resolve('.qa/auth/b148-user.json');

function correo(testData: LoadedTestData): string {
  return token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
}

/** Login por correo + OTP en `page`. Responde también el "Autenticación requerida" que puede seguirle. */
async function iniciarSesionConOtp(page: Page, testData: LoadedTestData): Promise<void> {
  const login = new LoginModal(page);
  const desde = marcaOtp();
  await login.pedirCodigo(correo(testData));
  const codigo = await esperarOtp(correo(testData), desde, { digitos: 6 });
  const desde2 = marcaOtp();
  await login.escribirCodigo(codigo);
  await login.disparador.first().waitFor({ state: 'hidden', timeout: 45000 });
  // Tras el login pueden aparecer, en cualquier orden, la oferta de passkey y el "Autenticación
  // requerida" (otro OTP). En Mobile/webkit el segundo llega después de la oferta y la tapa: se
  // atienden los dos durante una ventana, el OTP antes que la oferta.
  const otp = page.getByRole('dialog').filter({ hasText: /autenticaci[óo]n requerida/i });
  const ahoraNo = login.ofertaPasskey.getByRole('button', { name: /^ahora no$/i });
  let otpRespondido = false;
  const fin = Date.now() + 25000;
  while (Date.now() < fin) {
    if (!otpRespondido && (await otp.isVisible().catch(() => false))) {
      await login.escribirCodigo(await esperarOtp(correo(testData), desde2, { digitos: 6 }));
      await otp.waitFor({ state: 'hidden', timeout: 30000 });
      otpRespondido = true;
      continue;
    }
    if (await ahoraNo.isVisible().catch(() => false)) {
      await ahoraNo.click({ timeout: 5000 }).catch(() => {});
    }
    await page.waitForTimeout(500);
  }
  await login.descartarPasskey();
}

/**
 * Deja el carro guardado de la cuenta con exactamente `items` ([token del SKU, unidades]). Devuelve
 * el nombre con que el carro muestra cada SKU.
 */
async function prepararCarroGuardado(
  browser: Browser,
  testData: LoadedTestData,
  items: [string, number][],
): Promise<Record<string, string>> {
  const ctx = await browser.newContext(fs.existsSync(SESION) ? { storageState: SESION } : {});
  const page = await ctx.newPage();
  const nombres: Record<string, string> = {};
  try {
    const home = await new PaginaHabilitada(page).goto();
    await home.cookies.aceptarSiAparece();
    const conSesion = await home.header.saludo.waitFor({ state: 'visible', timeout: 20000 }).then(() => true, () => false);
    if (!conSesion) {
      await iniciarSesionConOtp(page, testData);
      await ctx.storageState({ path: SESION });
    }
    await (await new CarroPage(page).goto()).vaciar();
    for (const [tk, n] of items) {
      const pdp = await new PDPPage(page).abrir(token(testData, tk)!);
      nombres[tk] = await pdp.nombreParaElCarro();
      await pdp.fijarCantidad(n);
    }
    const carro = await new CarroPage(page).goto();
    if (items.length) {
      await expect(carro.botonesEliminar.first()).toBeVisible({ timeout: 30000 });
      for (const [tk, n] of items) {
        await expect(carro.cantidadDe(nombres[tk]), `carro guardado: ${tk}`).toHaveText(`${n} un.`, { timeout: 15000 });
      }
      expect((await carro.productos()).length, 'carro guardado sin productos de más').toBe(items.length);
    } else {
      await expect(carro.carroVacio).toBeVisible({ timeout: 30000 });
    }
  } finally {
    await ctx.close();
  }
  return nombres;
}

/** Fija como invitado la dirección `direccion` ("Calle, Comuna") desde el Store Locator del header. */
async function fijarDireccionInvitado(page: Page, direccion: string): Promise<PaginaHabilitada> {
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.campoBusqueda.fill(direccion);
  const [calle, comuna] = direccion.split(',').map((s) => s.trim());
  await modal.sugerencias.filter({ hasText: calle }).filter({ hasText: comuna ?? '' }).first().click();
  await page.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
  await page.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
  await home.header.storeLocator.filter({ hasText: calle }).waitFor({ state: 'visible', timeout: 30000 });
  return home;
}

test.describe('B2C-168 — Fusión de carros al iniciar sesión', () => {
  test.describe.configure({ timeout: 300000 });

  for (const [ff, vp, sufijo, L] of [
    ['Desktop 1440x900', DESKTOP, 'Desktop', 'D'],
    ['Mobile 390x844', MOBILE, 'Mobile', 'M'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);

      test(`TC-B2C168-${L}-004 · Un carro invitado vacío no altera el carro guardado del logueado [Guest] (${sufijo})`, async ({ page, browser, testData }) => {
        const cp = `TC-B2C168-${L}-004`;
        const nombres = await prepararCarroGuardado(browser, testData, [['SKU_NOMBRE_CORTO', 2], ['SKU_CROSS_SELLING', 1]]);

        const invitado = await new CarroPage(page).goto();
        await expect(invitado.carroVacio, 'carro de invitado vacío').toBeVisible({ timeout: 30000 });
        await invitado.capturarEvidencia(cp, 0, 'carro de invitado vacío');

        const home = await new PaginaHabilitada(page).goto();
        await iniciarSesionConOtp(page, testData);
        await expect(home.header.saludo).toBeVisible({ timeout: 30000 });
        await home.capturarEvidencia(cp, 2, 'sesión iniciada');

        const carro = await new CarroPage(page).goto();
        await expect(carro.botonesEliminar.first()).toBeVisible({ timeout: 30000 });
        await carro.capturarEvidencia(cp, 4, 'carro tras la fusión');
        await expect(carro.cantidadDe(nombres.SKU_NOMBRE_CORTO), '{SKU_NOMBRE_CORTO} × 2').toHaveText('2 un.');
        await expect(carro.cantidadDe(nombres.SKU_CROSS_SELLING), '{SKU_CROSS_SELLING} × 1').toHaveText('1 un.');
        expect((await carro.productos()).sort(), 'solo los productos del carro guardado').toEqual(
          [nombres.SKU_NOMBRE_CORTO, nombres.SKU_CROSS_SELLING].sort(),
        );
        await carro.capturarEvidencia(cp);
      });

      test(`TC-B2C168-${L}-005 · Con ambos carros vacíos se muestra el estado de carro vacío [Guest] (${sufijo})`, async ({ page, browser, testData }) => {
        const cp = `TC-B2C168-${L}-005`;
        await prepararCarroGuardado(browser, testData, []);

        const invitado = await new CarroPage(page).goto();
        await expect(invitado.carroVacio, 'carro de invitado vacío').toBeVisible({ timeout: 30000 });
        await invitado.capturarEvidencia(cp, 0, 'carro de invitado vacío');

        const home = await new PaginaHabilitada(page).goto();
        await iniciarSesionConOtp(page, testData);
        await expect(home.header.saludo).toBeVisible({ timeout: 30000 });
        await home.capturarEvidencia(cp, 2, 'sesión iniciada');

        const carro = await new CarroPage(page).goto();
        await expect(carro.carroVacio, 'estado de carro vacío').toBeVisible({ timeout: 30000 });
        await expect(carro.botonesEliminar).toHaveCount(0);
        await carro.capturarEvidencia(cp);
      });

      test(`TC-B2C168-${L}-007 · Tras la fusión se reconsulta la ventana horaria de la tienda del invitado [Guest] (${sufijo})`, async ({ page, browser, testData }) => {
        const cp = `TC-B2C168-${L}-007`;
        const direccion = token(testData, 'DIRECCION_DESPACHO_001')!;
        const calle = direccion.split(',')[0].trim();
        await prepararCarroGuardado(browser, testData, [['SKU_NOMBRE_CORTO', 1]]);

        const home = await fijarDireccionInvitado(page, direccion);
        const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
        await pdp.fijarCantidad(1);
        await new PaginaHabilitada(page).goto();
        await expect(home.header.storeLocator).toContainText(/desde:/i, { timeout: 30000 });
        const antes = await home.header.textoStoreLocator();
        const ventanaInvitado = antes.match(/desde:\s*[^$]+?hrs\.?/i)?.[0];
        expect(ventanaInvitado, 'ventana del invitado en el Store Locator').toBeTruthy();
        await home.capturarEvidencia(cp, 0, 'Store Locator del invitado', { elemento: home.header.storeLocator });

        await iniciarSesionConOtp(page, testData);
        await expect(home.header.saludo).toBeVisible({ timeout: 30000 });
        await home.capturarEvidencia(cp, 2, 'sesión iniciada');

        await expect(home.header.storeLocator, 'dirección de la sesión de invitado').toContainText(calle, { timeout: 30000 });
        await expect(home.header.storeLocator, 'próxima ventana vigente').toContainText(/desde:\s*\S+ \d{2}\/\d{2}, \d{2}:\d{2} hrs/i);
        const despues = await home.header.textoStoreLocator();
        expect(despues.match(/desde:\s*[^$]+?hrs\.?/i)?.[0], 'misma ventana que la del invitado').toBe(ventanaInvitado);
        await home.capturarEvidencia(cp, 3, 'Store Locator tras la fusión', { elemento: home.header.storeLocator });
        await home.capturarEvidencia(cp);
      });

      test(`TC-B2C168-${L}-008 · Un producto duplicado queda con la cantidad del carro invitado [Guest] (${sufijo})`, async ({ page, browser, testData }) => {
        const cp = `TC-B2C168-${L}-008`;
        const nombres = await prepararCarroGuardado(browser, testData, [['SKU_VALID_001', 5]]);

        await fijarDireccionInvitado(page, token(testData, 'DIRECCION_DESPACHO_001')!);
        const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
        await pdp.fijarCantidad(2);
        const invitado = await new CarroPage(page).goto();
        await expect(invitado.cantidadDe(nombres.SKU_VALID_001), 'carro invitado: {SKU_VALID_001} × 2').toHaveText('2 un.', { timeout: 30000 });
        await invitado.capturarEvidencia(cp, 0, 'carro de invitado con {SKU_VALID_001} × 2');

        const home = await new PaginaHabilitada(page).goto();
        await iniciarSesionConOtp(page, testData);
        await expect(home.header.saludo).toBeVisible({ timeout: 30000 });
        await home.capturarEvidencia(cp, 1, 'sesión iniciada');

        const carro = await new CarroPage(page).goto();
        await expect(carro.botonesEliminar.first()).toBeVisible({ timeout: 30000 });
        await carro.capturarEvidencia(cp, 4, 'carro tras la fusión');
        await expect(carro.cantidadDe(nombres.SKU_VALID_001), '{SKU_VALID_001} con la cantidad del invitado (2, no 5 ni 7)').toHaveText('2 un.');
        expect(await carro.productos(), 'solo {SKU_VALID_001}').toEqual([nombres.SKU_VALID_001]);
        await carro.capturarEvidencia(cp);
      });
    });
  }
});
