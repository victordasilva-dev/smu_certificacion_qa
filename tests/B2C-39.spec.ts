import * as fs from 'fs';
import * as path from 'path';
import type { Page, Route } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import type { LoadedTestData } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { LoginModal } from './pages/LoginModal';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { AgotarseModal } from './pages/AgotarseModal';
import { CarroPage } from './pages/CarroPage';
import { CarroOpciones } from './pages/CarroOpciones';
import { ModalSimilares } from './pages/ModalSimilares';
import { PDPPage } from './pages/PDPPage';
import { esperarOtp, marcaOtp } from './support/otp';

/**
 * B2C-39 — Carro con ítems no disponibles: CTA «Reemplazar» (B2C-40) y link «Eliminar».
 *
 * El ítem `{SKU_NO_DISPONIBLE}` está «Pronto disponible» en `{TIENDA_SIN_STOCK}` y ahí no tiene botón
 * «Agregar», así que el carro con ese ítem se arma agregándolo en otra tienda (`{TIENDA_RETIRO_SIN_COSTO}`,
 * donde sí hay stock) y cambiando después a `{TIENDA_SIN_STOCK}`: el sitio lo pasa a «no disponibles».
 * Con la cuenta logueada cada cambio de tienda pide el OTP de «Autenticación requerida». El estado
 * armado se recuerda en `.qa/run/b39-estado.txt` para no rearmarlo entre casos que no lo destruyen.
 *
 * ESTADO (2026-11-02): los 20 TC quedaron `Bloqueado Data`. Verificado con una corrida de invitado: tras agregar
 * `{SKU_VALID_001}` y `{SKU_NO_DISPONIBLE}` en `{TIENDA_RETIRO_SIN_COSTO}` el carro tiene los 2 ítems; al cambiar a
 * `{TIENDA_SIN_STOCK}` y confirmar «Sí, continuar» el carro queda vacío: los ítems se descartan y no aparece la
 * sección de no disponibles. El carro con un ítem no disponible no se puede armar desde la UI con esta data.
 *
 * Sin `test()` (Bloqueado Data): D/M-006, porque {SKU_NO_DISPONIBLE_2} no existe en el ambiente
 * (su ficha redirige al Home).
 */

const SESION = path.resolve('.qa/auth/b39-user.json');
const ESTADO = path.resolve('.qa/run/b39-estado.txt');

function correo(testData: LoadedTestData): string {
  return token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
}
function escapar(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function leerEstado(): string {
  try { return fs.readFileSync(ESTADO, 'utf-8').trim(); } catch { return ''; }
}
function escribirEstado(v: string): void {
  fs.mkdirSync(path.dirname(ESTADO), { recursive: true });
  fs.writeFileSync(ESTADO, v);
}

/** Sesión con {USER_AUTH_001}: reutiliza el storageState (cookies + localStorage); si no sirve, correo + OTP. */
async function iniciarSesion(page: Page, testData: LoadedTestData): Promise<PaginaHabilitada> {
  if (fs.existsSync(SESION)) {
    const estado = JSON.parse(fs.readFileSync(SESION, 'utf-8'));
    await page.context().addCookies(estado.cookies ?? []);
    const origen = (estado.origins ?? [])[0];
    if (origen?.localStorage?.length) {
      await page.addInitScript((items: { name: string; value: string }[]) => {
        if (sessionStorage.getItem('__b39_ls')) return;
        for (const { name, value } of items) localStorage.setItem(name, value);
        sessionStorage.setItem('__b39_ls', '1');
      }, origen.localStorage);
    }
  }
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  const login = new LoginModal(page);
  const conSesion = await home.header.saludo.waitFor({ state: 'visible', timeout: 20000 }).then(() => true, () => false);
  if (!conSesion) {
    const desde = marcaOtp();
    await login.pedirCodigo(correo(testData));
    await login.ingresarCodigo(await esperarOtp(correo(testData), desde, { digitos: 6 }));
  }
  await login.descartarPasskey();
  fs.mkdirSync(path.dirname(SESION), { recursive: true });
  await page.context().storageState({ path: SESION });
  return home;
}

/** Cambia a Retiro en tienda en `tienda`; atiende «Algunos productos podrían agotarse», el OTP y el aviso de login del invitado. */
async function cambiarTienda(page: Page, testData: LoadedTestData, tienda: string, logueado: boolean): Promise<void> {
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  await home.header.storeLocator.waitFor({ state: 'visible', timeout: 30000 });
  await page.waitForTimeout(2000);
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.tabRetiroEnTienda.click();
  await modal.campoBuscarTienda.fill(tienda.replace(/^unimarc\s+/i, ''));
  await modal.root.getByText(new RegExp(`^${escapar(tienda)}$`, 'i')).first().click();
  const desde = marcaOtp();
  await modal.root.getByRole('button', { name: /^confirmar tienda$/i }).click();
  const agotarse = new AgotarseModal(page);
  if (await agotarse.root.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) await agotarse.botonSi.click();
  if (logueado) {
    if (await modal.modalOtp.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) {
      await new LoginModal(page).escribirCodigo(await esperarOtp(correo(testData), desde, { digitos: 6 }));
      await modal.modalOtp.waitFor({ state: 'hidden', timeout: 30000 });
    }
  } else {
    const aviso = page.locator('[role="dialog"]').filter({ hasText: /hola, ingresa aqu/i }).locator('visible=true').first();
    if (await aviso.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) await aviso.getByRole('button', { name: /^cerrar$/i }).click();
  }
  await page.waitForTimeout(3000);
}

/** Deja el carro con `valido` (opcional) y `{SKU_NO_DISPONIBLE}` × `cantidad`, con `{TIENDA_SIN_STOCK}` activa. */
async function armarCarro(page: Page, testData: LoadedTestData, clave: string, logueado: boolean, items: [string, number][]): Promise<CarroPage> {
  const sin = token(testData, 'TIENDA_SIN_STOCK')!;
  const otra = token(testData, 'TIENDA_RETIRO_SIN_COSTO')!;
  if (logueado) await iniciarSesion(page, testData);
  const claveActual = `${logueado ? 'L' : 'G'}:${clave}`;
  if (logueado && leerEstado() === claveActual) {
    const c = await new CarroPage(page).goto();
    await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
    if (await page.getByRole('button', { name: /^reemplazar/i }).first().isVisible().catch(() => false)) return c;
  }
  escribirEstado('roto');
  await cambiarTienda(page, testData, otra, logueado);
  const carro0 = await new CarroPage(page).goto();
  if (logueado) await carro0.vaciar();
  for (const [sku, n] of items) {
    const pdp = await new PDPPage(page).abrir(token(testData, sku)!);
    await pdp.fijarCantidad(n);
  }
  await cambiarTienda(page, testData, sin, logueado);
  const carro = await new CarroPage(page).goto();
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(3000);
  if (logueado) escribirEstado(claveActual);
  return carro;
}

const reemplazar = (p: Page) => p.getByRole('button', { name: /^reemplazar/i }).locator('visible=true').first();
const eliminarLink = (p: Page) => p.getByText(/^eliminar$/i).locator('visible=true').first();

/** Aborta las requests del carro del método dado (DELETE al eliminar, POST al agregar el sustituto). */
async function bloquear(page: Page, metodo: string): Promise<void> {
  await page.route(
    (u) => /\/shopper-baskets\//.test(u.pathname),
    (r: Route) => (r.request().method() === metodo ? r.abort() : r.continue()),
  );
}

test.describe('B2C-39 — Carro con ítems no disponibles', () => {
  for (const [ff, vp, L, sufijo] of [
    ['Desktop 1440x900', DESKTOP, 'D', 'Desktop'],
    ['Mobile 390x844', MOBILE, 'M', 'Mobile'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);
      test.describe.configure({ timeout: 900000 });
      const id = (n: string) => `TC-B2C39-${L}-${n}`;

      test(`${id('001')} · Verificar que Reemplazar de un ítem no disponible abre el modal de productos similares [${sufijo}] [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('001');
        const carro = await armarCarro(page, testData, 'v1+nd1', true, [['SKU_VALID_001', 1], ['SKU_NO_DISPONIBLE', 1]]);
        await carro.capturarEvidencia(cp, 2, 'carro con el ítem no disponible');
        await expect(reemplazar(page), 'CTA «Reemplazar»').toBeVisible({ timeout: 20000 });
        await reemplazar(page).click();
        const modal = await new ModalSimilares(page).esperarAbierto();
        await modal.capturar(cp, 3, 'modal de productos similares');
        await expect(modal.titulo, 'modal «Productos similares»').toBeVisible();
        await expect(modal.referenciaOriginal, '«Estás reemplazando:» con el ítem no disponible').toBeVisible();
        await carro.capturarEvidencia(cp);
      });

      test(`${id('002')} · Verificar que el ítem no disponible muestra el CTA Reemplazar y el link de texto Eliminar [${sufijo}] [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('002');
        const carro = await armarCarro(page, testData, 'v1+nd1', true, [['SKU_VALID_001', 1], ['SKU_NO_DISPONIBLE', 1]]);
        await expect(reemplazar(page), 'CTA «Reemplazar»').toBeVisible({ timeout: 20000 });
        await carro.capturarEvidencia(cp, 2, 'ítem no disponible con Reemplazar y Eliminar');
        await expect(eliminarLink(page), 'link de texto «Eliminar»').toBeVisible();
        await expect(page.getByText('✕'), 'sin ícono ✕').toHaveCount(0);
        await carro.capturarEvidencia(cp);
      });

      test(`${id('003')} · Verificar que reemplazar por un similar lo agrega a disponibles y quita el no disponible [${sufijo}] [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('003');
        const carro = await armarCarro(page, testData, 'v1+nd1', true, [['SKU_VALID_001', 1], ['SKU_NO_DISPONIBLE', 1]]);
        escribirEstado('roto');
        await carro.capturarEvidencia(cp, 2, 'carro antes de reemplazar');
        await reemplazar(page).click();
        const modal = await new ModalSimilares(page).esperarAbierto();
        await modal.botonesAgregar.first().click();
        await modal.botonReemplazar.click();
        await expect(page.getByText(/tu carro ha sido actualizado/i).first(), 'toast «¡Tu carro ha sido actualizado!»').toBeVisible({ timeout: 30000 });
        await carro.capturarEvidencia(cp, 3, 'carro tras reemplazar');
        await expect(reemplazar(page), 'el ítem no disponible salió de la sección').toHaveCount(0);
        await carro.capturarEvidencia(cp);
      });

      test(`${id('004')} · Verificar que un reemplazo parcial deja en no disponibles la cantidad restante [${sufijo}] [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('004');
        const carro = await armarCarro(page, testData, 'v1+nd3', true, [['SKU_VALID_001', 1], ['SKU_NO_DISPONIBLE', 3]]);
        escribirEstado('roto');
        await carro.capturarEvidencia(cp, 2, 'carro con el no disponible × 3');
        await reemplazar(page).click();
        const modal = await new ModalSimilares(page).esperarAbierto();
        await modal.botonesAgregar.first().click();
        await modal.botonReemplazar.click();
        await expect(page.getByText(/tu carro ha sido actualizado/i).first(), 'toast de carro actualizado').toBeVisible({ timeout: 30000 });
        await page.waitForTimeout(3000);
        await carro.capturarEvidencia(cp, 3, 'carro tras el reemplazo parcial');
        await expect(reemplazar(page), 'el no disponible permanece').toBeVisible();
        const texto = (await page.locator('main').innerText()).replace(/\s+/g, ' ');
        expect(texto, 'queda 2 unidades (3 − 1) en no disponibles').toMatch(/pronto disponible[\s\S]{0,260}?\b2\b/i);
        await carro.capturarEvidencia(cp);
      });

      test(`${id('005')} · Verificar que un carro solo con no disponibles muestra la sección expandida y el CTA deshabilitado [${sufijo}] [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('005');
        const carro = await armarCarro(page, testData, 'nd1', true, [['SKU_NO_DISPONIBLE', 1]]);
        await carro.capturarEvidencia(cp, 2, 'carro solo con no disponibles');
        await expect(page.getByText(/^pronto disponible$/i).locator('visible=true').first(), 'badge «Pronto disponible»').toBeVisible({ timeout: 20000 });
        await expect(reemplazar(page), 'CTA «Reemplazar»').toBeVisible();
        await expect(eliminarLink(page), 'link «Eliminar»').toBeVisible();
        await expect(new CarroOpciones(page).cta, '«Continuar con la entrega» deshabilitado').toBeDisabled();
        await carro.capturarEvidencia(cp);
      });

      test(`${id('007')} · Verificar que eliminar el último no disponible hace desaparecer la sección [${sufijo}] [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('007');
        const carro = await armarCarro(page, testData, 'v1+nd1', true, [['SKU_VALID_001', 1], ['SKU_NO_DISPONIBLE', 1]]);
        escribirEstado('roto');
        await carro.capturarEvidencia(cp, 2, 'carro antes de eliminar');
        await eliminarLink(page).click();
        await expect(page.getByRole('alertdialog'), 'sin confirmación al eliminar').toHaveCount(0);
        await expect(reemplazar(page), 'la sección de no disponibles desaparece').toHaveCount(0, { timeout: 30000 });
        await carro.capturarEvidencia(cp, 3, 'carro tras eliminar');
        expect((await carro.productos()).length, 'el ítem válido se mantiene').toBeGreaterThanOrEqual(1);
        await carro.capturarEvidencia(cp);
      });

      test(`${id('008')} · Verificar que un error al eliminar un no disponible muestra el toast CRT-021 [${sufijo}] [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('008');
        const carro = await armarCarro(page, testData, 'v1+nd1', true, [['SKU_VALID_001', 1], ['SKU_NO_DISPONIBLE', 1]]);
        await bloquear(page, 'DELETE');
        await eliminarLink(page).click();
        const toast = page.getByText(/no pudimos eliminar el producto del carro/i).first();
        await expect(toast, 'toast CRT-021').toBeVisible({ timeout: 30000 });
        await carro.capturarEvidencia(cp, 2, 'toast CRT-021');
        await page.waitForTimeout(8000);
        await expect(toast, 'el toast persiste hasta cerrarlo').toBeVisible();
        await page.getByRole('button', { name: /^(cerrar|close)/i }).locator('visible=true').last().click();
        await expect(toast, 'el toast se cierra con la X').toBeHidden();
        await expect(reemplazar(page), 'el ítem permanece en no disponibles').toBeVisible();
        await carro.capturarEvidencia(cp);
      });

      test(`${id('009')} · Verificar que un error al agregar el sustituto muestra el toast CRT-025 [${sufijo}] [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('009');
        const carro = await armarCarro(page, testData, 'v1+nd1', true, [['SKU_VALID_001', 1], ['SKU_NO_DISPONIBLE', 1]]);
        await reemplazar(page).click();
        const modal = await new ModalSimilares(page).esperarAbierto();
        await modal.botonesAgregar.first().click();
        await bloquear(page, 'POST');
        await modal.botonReemplazar.click();
        await expect(page.getByText(/no pudimos reemplazar tu producto/i).first(), 'toast CRT-025').toBeVisible({ timeout: 30000 });
        await carro.capturarEvidencia(cp, 2, 'toast CRT-025');
        await expect(reemplazar(page), 'el ítem permanece en no disponibles').toBeVisible();
        await carro.capturarEvidencia(cp);
      });

      test(`${id('010')} · Verificar que un invitado ve la sección de no disponibles con Reemplazar y Eliminar [${sufijo}] [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('010');
        const carro = await armarCarro(page, testData, 'g', false, [['SKU_VALID_001', 1], ['SKU_NO_DISPONIBLE', 1]]);
        await carro.capturarEvidencia(cp, 2, 'carro del invitado con no disponibles');
        await expect(page.getByText(/^pronto disponible$/i).locator('visible=true').first(), 'badge «Pronto disponible»').toBeVisible({ timeout: 20000 });
        await expect(reemplazar(page), 'CTA «Reemplazar»').toBeVisible();
        await expect(eliminarLink(page), 'link «Eliminar»').toBeVisible();
        await carro.capturarEvidencia(cp);
      });
    });
  }
});
