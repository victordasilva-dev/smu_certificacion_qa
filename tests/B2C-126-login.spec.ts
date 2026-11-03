import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { OtpEntregaModal } from './pages/OtpEntregaModal';
import { DatosEntregaPage } from './pages/DatosEntregaPage';
import { CarroPage } from './pages/CarroPage';
import { PDPPage } from './pages/PDPPage';
import { AgotarseModal } from './pages/AgotarseModal';
import { loginConOtp } from './support/loginOtp';
import { esperarOtp, marcaOtp } from './support/otp';

/**
 * B2C-126 — casos de usuario logueado hacia retiro en tienda (009, 011–013). Cada test inicia
 * sesión con {USER_AUTH_001} (OTP) y arma el carro con {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}.
 */

type TD = Parameters<typeof token>[0];
const t = (td: TD, k: string) => token(td, k)!;
const correo = (td: TD) => t(td, 'USER_AUTH_001').split('/')[0].trim();
const toast = (p: Page) => p.getByText(/algunos de los productos ya no est[aá]n disponibles/i).first();
const texto = async (p: Page) => (await p.locator('main').innerText()).replace(/\s+/g, ' ');
/** La página del carro no tiene footer: `CarroPage.goto` espera `contentinfo` y no sirve aquí. */
async function irAlCarro(page: Page, td: TD): Promise<void> {
  await page.goto(t(td, 'CART_URL'), { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
  await page.waitForTimeout(2500);
}
const ES_DESPACHO = /(?<!\d)23(?!\d)/;

/** Espera el modal «Algunos productos podrían agotarse»; si antes aparece «Autenticación requerida», lo resuelve. */
async function hastaAgotarse(page: Page, td: TD, desde: Date): Promise<AgotarseModal> {
  const otp = new OtpEntregaModal(page);
  const ag = new AgotarseModal(page);
  const fin = Date.now() + 90000;
  let hecho = false;
  while (Date.now() < fin) {
    if (await ag.titulo.isVisible().catch(() => false)) return ag;
    if (!hecho && (await otp.root.isVisible().catch(() => false))) {
      await otp.escribir(await esperarOtp(correo(td), desde, { digitos: 6 }));
      await otp.continuar.click({ timeout: 5000 }).catch(() => {});
      hecho = true;
      continue;
    }
    await page.waitForTimeout(500);
  }
  throw new Error('no apareció el modal «Algunos productos podrían agotarse»');
}

async function sesionConCarro(page: Page, td: TD): Promise<{ valido: string; sinStock: string }> {
  const home = new HomePage(page);
  await home.goto();
  await home.cookies.aceptarSiAparece();
  await loginConOtp(page, correo(td));
  await home.header.esperarDireccionEnStoreLocator().catch(() => '');
  const dir = await expect.poll(() => home.header.direccionDelStoreLocator(), { timeout: 30000 }).toMatch(ES_DESPACHO).then(() => 'ok', () => home.header.direccionDelStoreLocator());
  if (dir !== 'ok') throw new Error(`PRECONDICION_NO_DISPONIBLE: la dirección activa no es {DIRECCION_DESPACHO_001} («${dir}»)`);
  const n: string[] = [];
  for (const k of ['SKU_VALID_001', 'SKU_STOCK_SOLO_TIENDA_A']) {
    const pdp = await new PDPPage(page).abrir(t(td, k));
    n.push((await pdp.nombreDelProducto.innerText()).trim());
    await pdp.fijarCantidad(1);
  }
  return { valido: n[0], sinStock: n[1] };
}

async function aRetiroDesdeMisEnvios(page: Page, td: TD): Promise<void> {
  await irAlCarro(page, td);
  await new CarroPage(page).continuarConLaEntrega();
  await new DatosEntregaPage(page).botonCambiarUbicacion.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.tabRetiroEnTienda.click();
  const desde = marcaOtp();
  await modal.elegirTienda(t(td, 'TIENDA_RETIRO_001'));
  const ag = await hastaAgotarse(page, td, desde);
  await confirmarCambio(page, td, ag);
}

/** «Sí, continuar»; el sitio puede pedir «Autenticación requerida» después de confirmar. */
async function confirmarCambio(page: Page, td: TD, ag: AgotarseModal): Promise<void> {
  const desde = marcaOtp();
  await ag.botonSi.click();
  const otp = new OtpEntregaModal(page);
  if (await otp.root.waitFor({ state: 'visible', timeout: 20000 }).then(() => true, () => false)) {
    await otp.escribir(await esperarOtp(correo(td), desde, { digitos: 6 }));
    await otp.continuar.click({ timeout: 5000 }).catch(() => {});
    await otp.root.waitFor({ state: 'hidden', timeout: 45000 }).catch(() => {});
  }
}

const seAgotaron = (p: Page) => p.getByRole('dialog').filter({ hasText: /se agotaron/i }).last();

test.describe.configure({ timeout: 360000 });
test.describe('B2C-126 — Logueado: cambio a retiro en tienda', () => {
  for (const [tipo, vp, ff] of [['D', DESKTOP, 'Desktop'], ['M', MOBILE, 'Mobile']] as const) {
    test.describe(ff, () => {
      test.use(vp);
      const id = (n: string) => `TC-B2C126-${tipo}-${n}`;

      test(`${id('009')} · Logueado cambia a retiro desde el Home con productos no disponibles (${ff})`, async ({ page, testData }) => {
        const n = await sesionConCarro(page, testData);
        const home = new HomePage(page);
        await home.goto();
        await home.header.storeLocator.click();
        const modal = await new MetodoEntregaModal(page).esperarAbierto();
        await modal.tabRetiroEnTienda.click();
        const desde = marcaOtp();
        await modal.elegirTienda(t(testData, 'TIENDA_RETIRO_001'));
        const ag = await hastaAgotarse(page, testData, desde);
        await confirmarCambio(page, testData, ag);
        await expect(toast(page), 'toast de alerta').toBeVisible({ timeout: 30000 });
        await page.getByRole('button', { name: /^revisar$/i }).first().click();
        await page.waitForTimeout(3000);
        const c = await texto(page);
        expect(c, 'el carro conserva {SKU_VALID_001}').toContain(n.valido.slice(0, 25));
        expect(c, 'el carro no incluye {SKU_STOCK_SOLO_TIENDA_A}').not.toContain(n.sinStock.slice(0, 25));
      });

      for (const [num, nombre, cerrar] of [
        ['011', 'Mis envíos muestra el modal Se agotaron con los productos eliminados', null],
        ['012', 'Entendido en Se agotaron lleva al carro actualizado', 'entendido'],
        ['013', 'la X de Se agotaron lleva al carro actualizado', 'x'],
      ] as const) {
        test(`${id(num)} · Logueado desde ${nombre} (${ff})`, async ({ page, testData }) => {
          const n = await sesionConCarro(page, testData);
          await aRetiroDesdeMisEnvios(page, testData);
          const m = seAgotaron(page);
          await expect(m, 'modal «Se agotaron»').toBeVisible({ timeout: 30000 });
          const lista = (await m.innerText()).replace(/\s+/g, ' ');
          expect(lista, 'lista con {SKU_STOCK_SOLO_TIENDA_A}').toContain(n.sinStock.slice(0, 25));
          if (!cerrar) {
            await expect(m.getByRole('button', { name: /^entendido$/i })).toBeVisible();
            return;
          }
          await (cerrar === 'entendido'
            ? m.getByRole('button', { name: /^entendido$/i })
            : m.getByRole('button', { name: /cerrar|close/i }).first()
          ).click();
          await expect(m).toBeHidden({ timeout: 15000 });
          await page.waitForTimeout(3000);
          const c = await texto(page);
          expect(c, 'el carro conserva {SKU_VALID_001}').toContain(n.valido.slice(0, 25));
          expect(c, 'el carro no incluye {SKU_STOCK_SOLO_TIENDA_A}').not.toContain(n.sinStock.slice(0, 25));
        });
      }
    });
  }
});
