import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { LoadedTestData } from './support/testData';
import { esperarOtp, marcaOtp } from './support/otp';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { LoginModal } from './pages/LoginModal';
import { PDPPage } from './pages/PDPPage';
import { CarroPage } from './pages/CarroPage';
import { CarroOpciones } from './pages/CarroOpciones';

/**
 * B2C-193 — Pantalla de error al cargar el Checkout (Mi Pago): botones «Reintentar» e «Ir al inicio».
 * El fallo se provoca bloqueando la request {CHECKOUT_API_ENDPOINT}, como pide cada TC con DevTools.
 */
type TD = LoadedTestData;
function declarado(td: TD, nombre: string): string {
  const v = token(td, nombre);
  if (!v) throw new Error(`Falta {${nombre}} en el Excel de data`);
  return v;
}
/** Login por correo + OTP en Mobile: la pantalla del código no es un diálogo y su botón es «Validar». */
async function loginMobile(page: Page, correo: string): Promise<void> {
  const login = new LoginModal(page);
  const boton = page.getByRole('button', { name: /^(validar|continuar)$/i }).locator('visible=true').first();
  const desde = marcaOtp();
  await login.pedirCodigo(correo);
  const codigo = await esperarOtp(correo, desde, { digitos: 6 });
  const desde2 = marcaOtp();
  await login.primerDigito.click();
  await page.keyboard.type(codigo, { delay: 80 });
  await boton.click();
  await login.primerDigito.waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
  const ahoraNo = login.ofertaPasskey.getByRole('button', { name: /^ahora no$/i });
  let segundo = false;
  const fin = Date.now() + 25000;
  while (Date.now() < fin) {
    if (!segundo && (await login.primerDigito.isVisible().catch(() => false))) {
      const c2 = await esperarOtp(correo, desde2, { digitos: 6 });
      await login.primerDigito.click();
      await page.keyboard.type(c2, { delay: 80 });
      await boton.click();
      segundo = true;
    }
    if (await ahoraNo.isVisible().catch(() => false)) await ahoraNo.click({ timeout: 5000 }).catch(() => {});
    await page.waitForTimeout(500);
  }
  await login.descartarPasskey();
}

/** Deja el carro exactamente con estos productos: lo vacía y agrega cada uno con su cantidad. */
async function dejarCarro(page: Page, testData: LoadedTestData, items: [string, number][]): Promise<CarroPage> {
  const carro = await new CarroPage(page).goto();
  await new CarroOpciones(page).cerrarToastSiEsta();
  await carro.vaciar();
  for (const [sku, n] of items) {
    const pdp = await new PDPPage(page).abrir(declarado(testData, sku));
    await pdp.fijarCantidad(n);
  }
  const c = await new CarroPage(page).goto();
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(2000);
  return c;
}


/** Inicia sesión con la cuenta del token (correo + OTP); reutiliza cookies y localStorage guardados. */
async function loguear(page: Page, td: TD, cuenta: string, movil: boolean): Promise<void> {
  const correo = declarado(td, cuenta).split(/\s*\/\s*/)[0].trim();
  const sesion = path.resolve(`.qa/auth/b193-${cuenta}-${movil ? 'm' : 'd'}.json`);
  if (fs.existsSync(sesion)) {
    const g = JSON.parse(fs.readFileSync(sesion, 'utf-8'));
    await page.context().addCookies(g.cookies ?? []);
    const ls: Record<string, string> = {};
    for (const o of g.origins ?? []) for (const e of o.localStorage ?? []) ls[e.name] = e.value;
    await page.addInitScript((d) => { for (const [k, v] of Object.entries(d)) { try { localStorage.setItem(k, v as string); } catch { /* sin acceso */ } } }, ls);
  }
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  const login = new LoginModal(page);
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  if (await login.disparador.isVisible().catch(() => false)) {
    test.info().setTimeout(test.info().timeout + 10 * 60_000);
    if (movil) await loginMobile(page, correo);
    else {
      const desde = marcaOtp();
      await login.pedirCodigo(correo);
      await login.ingresarCodigo(await esperarOtp(correo, desde, { digitos: 6 }));
    }
  }
  await login.descartarPasskey();
  fs.mkdirSync(path.dirname(sesion), { recursive: true });
  await page.context().storageState({ path: sesion });
}

const bloqueo = (u: URL) => /\/shopper-orders\/v1\/organizations\/[^/]+\/orders$/.test(u.pathname);

/** Del carro a «Ir a pagar»: «Continuar con la entrega», modal de sugeridos si aparece, «Datos de entrega» → «Ir a pagar». */
async function irAPagar(page: Page, bloquear: boolean): Promise<void> {
  const reqs: string[] = [];
  page.on('request', (r) => { const u = r.url(); if (/order|checkout|basket|payment/i.test(u)) reqs.push(r.method() + ' ' + u.replace(/^https?:\/\/[^/]+/, '').slice(0, 190)); });
  if (bloquear) await page.route(bloqueo, (r) => r.abort('failed'));
  await page.getByRole('button', { name: /continuar con la entrega/i }).first().click();
  await page.waitForTimeout(5000);
  const sug = page.getByRole('button', { name: /^continuar$/i }).first();
  if (await sug.isVisible().catch(() => false)) { await sug.click(); await page.waitForTimeout(5000); }
  await page.getByRole('button', { name: /ir a pagar/i }).first().click();
  await page.waitForTimeout(8000);
  fs.writeFileSync('.qa/run/req193.txt', reqs.join('\n'));
}

const cuerpo = async (page: Page) => (await page.locator('body').innerText()).replace(/\s+/g, ' ');
const hayError = async (page: Page) => (await page.getByRole('button', { name: /^reintentar$/i }).first().isVisible().catch(() => false));

test.describe.configure({ timeout: 420000 });
test.describe('B2C-193 — Error al cargar el Checkout', () => {
  for (const [tipo, vp, ff] of [['D', DESKTOP, 'Desktop'], ['M', MOBILE, 'Mobile']] as const) {
    const movil = tipo === 'M';
    test.describe(ff, () => {
      test.use(vp);
      const id = (n: string) => `TC-B2C193-${tipo}-${n}`;
      const preparar = async (page: Page, td: TD, cuenta: string) => {
        await loguear(page, td, cuenta, movil);
        const unidades = Number(token(td, 'UNIDADES_SOBRE_MINIMO') ?? 11);
        return dejarCarro(page, td, [['SKU_VALID_001', unidades]]);
      };

      test(`${id('001')} · Un fallo al cargar el Checkout muestra la pantalla de error con sus dos botones (${ff})`, async ({ page, testData }) => {
        const cp = id('001');
        const carro = await preparar(page, testData, 'USER_AUTH_001');
        await irAPagar(page, true);
        await carro.capturarEvidencia(cp, 1, 'pantalla de error del Checkout');
        expect(await hayError(page), 'botón «Reintentar» visible').toBe(true);
        await expect(page.getByRole('button', { name: /ir al inicio/i }).first()).toBeVisible();
        const txt = await cuerpo(page);
        expect(txt, 'sin contenido del Checkout').not.toMatch(/resumen de la compra|elegir medio de pago|pagar y finalizar/i);
      });

      test(`${id('002')} · Reintentar con éxito sin medios enrolados muestra el Checkout sin medios (${ff})`, async ({ page, testData }) => {
        const cp = id('002');
        const carro = await preparar(page, testData, 'COMPRADOR_SIN_MEDIOS_USER');
        await irAPagar(page, true);
        await carro.capturarEvidencia(cp, 1, 'pantalla de error del Checkout');
        expect(await hayError(page)).toBe(true);
        await page.unroute(bloqueo);
        await page.getByRole('button', { name: /^reintentar$/i }).first().click();
        await page.waitForTimeout(9000);
        await carro.capturarEvidencia(cp, 2, 'Checkout tras reintentar');
        const txt = await cuerpo(page);
        expect(txt, 'se muestra el Checkout').toMatch(/mi pago|seleccionar m[eé]todo de pago/i);
        expect(txt, 'sin tarjetas enroladas').not.toMatch(/\*{4}\d{4}/);
      });

      test(`${id('003')} · Reintentar con éxito con medios enrolados muestra el Checkout con sus medios (${ff})`, async ({ page, testData }) => {
        const cp = id('003');
        const carro = await preparar(page, testData, 'COMPRADOR_ONECLICK_USER');
        await irAPagar(page, true);
        await carro.capturarEvidencia(cp, 1, 'pantalla de error del Checkout');
        expect(await hayError(page)).toBe(true);
        await page.unroute(bloqueo);
        await page.getByRole('button', { name: /^reintentar$/i }).first().click();
        await page.waitForTimeout(9000);
        await carro.capturarEvidencia(cp, 2, 'Checkout tras reintentar');
        const txt = await cuerpo(page);
        expect(txt).toMatch(/mi pago|seleccionar m[eé]todo de pago/i);
        expect(txt, 'tarjetas enroladas visibles').toMatch(/\*{4}\d{4}/);
      });

      test(`${id('004')} · Reintentar con fallo nuevamente mantiene la misma pantalla de error (${ff})`, async ({ page, testData }) => {
        const cp = id('004');
        const carro = await preparar(page, testData, 'USER_AUTH_001');
        await irAPagar(page, true);
        expect(await hayError(page)).toBe(true);
        await carro.capturarEvidencia(cp, 1, 'pantalla de error del Checkout');
        await page.getByRole('button', { name: /^reintentar$/i }).first().click();
        await page.waitForTimeout(8000);
        await carro.capturarEvidencia(cp, 2, 'tras reintentar con el bloqueo activo');
        expect(await hayError(page), 'sigue la pantalla de error').toBe(true);
        await expect(page.getByRole('button', { name: /ir al inicio/i }).first()).toBeVisible();
      });

      test(`${id('005')} · Ir al inicio desde la pantalla de error lleva al Home (${ff})`, async ({ page, testData }) => {
        const cp = id('005');
        const carro = await preparar(page, testData, 'USER_AUTH_001');
        await irAPagar(page, true);
        expect(await hayError(page)).toBe(true);
        await carro.capturarEvidencia(cp, 1, 'pantalla de error del Checkout');
        await page.getByRole('button', { name: /ir al inicio/i }).first().click();
        await page.waitForTimeout(6000);
        await carro.capturarEvidencia(cp, 2, 'tras Ir al inicio');
        expect(new URL(page.url()).pathname, 'redirige al Home').toMatch(/^\/?$/);
      });
    });
  }
});
