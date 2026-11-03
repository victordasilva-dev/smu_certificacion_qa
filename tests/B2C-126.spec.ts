import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { PDPPage } from './pages/PDPPage';
import { AgotarseModal } from './pages/AgotarseModal';

/**
 * B2C-126 — Cambio de dirección o de tienda con el carro: productos sin stock en el destino.
 *
 * Están los 6 escenarios de invitado (001–004, 008, 010 en Desktop y Mobile). Los de usuario
 * logueado (005–007, 009, 011–013) piden OTP y no se ejecutaron en esta corrida.
 */

type TD = Parameters<typeof token>[0];
const t = (td: TD, k: string) => token(td, k)!;
const patron = (d: string) => new RegExp(`(?<!\\d)${d.match(/\d+/)?.[0] ?? ''}(?!\\d).*${d.split(',').pop()!.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');
const toast = (p: Page) => p.getByText(/algunos de los productos ya no est[aá]n disponibles/i).first();

async function abrirModal(page: Page): Promise<MetodoEntregaModal> {
  const home = new HomePage(page);
  await home.goto();
  await home.cookies.aceptarSiAparece();
  await home.header.storeLocator.click();
  return new MetodoEntregaModal(page).esperarAbierto();
}

/** Invitado con la dirección activa y los productos en el carro. */
async function preparar(page: Page, td: TD, skus: [string, number][]): Promise<void> {
  const d = t(td, 'DIRECCION_DESPACHO_001');
  const modal = await abrirModal(page);
  await modal.fijarDireccionComoInvitado(d, /(?<!\d)23(?!\d)/);
  for (const [k, n] of skus) {
    const pdp = await new PDPPage(page).abrir(t(td, k));
    await pdp.fijarCantidad(n);
  }
}

async function cambiarADireccion(page: Page, td: TD, dir: string): Promise<void> {
  const modal = await abrirModal(page);
  await modal.agregarDireccion(dir, patron(dir));
  const ag = new AgotarseModal(page);
  await expect(ag.titulo, 'modal «Algunos productos podrían agotarse»').toBeVisible({ timeout: 30000 });
}

async function cambiarARetiro(page: Page, tienda: string): Promise<void> {
  const modal = await abrirModal(page);
  await modal.tabRetiroEnTienda.click();
  await modal.elegirTienda(tienda);
  const ag = new AgotarseModal(page);
  if (!(await ag.titulo.isVisible().catch(() => false))) {
    await modal.pie.getByRole('button', { name: /confirmar tienda/i }).click({ timeout: 20000 }).catch(() => {});
  }
}

const carro = async (page: Page, td: TD) => {
  await page.goto(t(td, 'CART_URL'), { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
  await page.waitForTimeout(2500);
  return (await page.locator('main').innerText()).replace(/\s+/g, ' ');
};
const nombre = async (page: Page, td: TD, k: string) => (await (await new PDPPage(page).abrir(t(td, k))).nombreDelProducto.innerText()).trim();

test.describe.configure({ timeout: 240000 });
test.describe('B2C-126 — Cambio de dirección/tienda con productos sin stock', () => {
  for (const [tipo, vp, ff] of [['D', DESKTOP, 'Desktop'], ['M', MOBILE, 'Mobile']] as const) {
    test.describe(ff, () => {
      test.use(vp);
      const id = (n: string) => `TC-B2C126-${tipo}-${n}`;
      const ambos: [string, number][] = [['SKU_VALID_001', 1], ['SKU_STOCK_SOLO_TIENDA_A', 1]];

      test(`${id('001')} · Invitado confirma un cambio de dirección con productos sin stock en la nueva tienda (${ff})`, async ({ page, testData }) => {
        await preparar(page, testData, ambos);
        await cambiarADireccion(page, testData, t(testData, 'DIRECCION_OTRA_TIENDA'));
        await new AgotarseModal(page).botonSi.click();
        await page.waitForTimeout(4000);
        const txt = await carro(page, testData);
        const valido = await nombre(page, testData, 'SKU_VALID_001');
        const sinStock = await nombre(page, testData, 'SKU_STOCK_SOLO_TIENDA_A');
        const c = await carro(page, testData);
        expect(c, 'el carro conserva {SKU_VALID_001}').toContain(valido.slice(0, 25));
        expect(c, 'el carro ya no tiene {SKU_STOCK_SOLO_TIENDA_A}').not.toContain(sinStock.slice(0, 25));
        void txt;
      });

      test(`${id('002')} · Invitado llega al Home con el toast de productos no disponibles (${ff})`, async ({ page, testData }) => {
        await preparar(page, testData, ambos);
        await cambiarADireccion(page, testData, t(testData, 'DIRECCION_OTRA_TIENDA'));
        await new AgotarseModal(page).botonSi.click();
        await expect(toast(page), 'toast «Algunos de los productos ya no están disponibles»').toBeVisible({ timeout: 20000 });
        await expect(page.getByRole('button', { name: /^revisar$/i }).first()).toBeVisible();
      });

      test(`${id('003')} · Invitado cambia de dirección con todos los productos disponibles (${ff})`, async ({ page, testData }) => {
        await preparar(page, testData, [['SKU_VALID_001', 1]]);
        const modal = await abrirModal(page);
        await modal.agregarDireccion(t(testData, 'DIRECCION_OTRA_TIENDA'), patron(t(testData, 'DIRECCION_OTRA_TIENDA')));
        const ag = new AgotarseModal(page);
        if (await ag.titulo.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) await ag.botonSi.click();
        await page.waitForTimeout(4000);
        await expect(toast(page)).toBeHidden({ timeout: 8000 });
      });

      test(`${id('004')} · Invitado revisa el carro desde el toast (${ff})`, async ({ page, testData }) => {
        await preparar(page, testData, ambos);
        await cambiarADireccion(page, testData, t(testData, 'DIRECCION_OTRA_TIENDA'));
        await new AgotarseModal(page).botonSi.click();
        await expect(toast(page)).toBeVisible({ timeout: 20000 });
        await page.getByRole('button', { name: /^revisar$/i }).first().click();
        await page.waitForLoadState('domcontentloaded');
        await page.waitForTimeout(3000);
        const c = (await page.locator('main').innerText()).replace(/\s+/g, ' ');
        const sinStock = await nombre(page, testData, 'SKU_STOCK_SOLO_TIENDA_A');
        expect(c, 'el carro no incluye {SKU_STOCK_SOLO_TIENDA_A}').not.toContain(sinStock.slice(0, 25));
      });

      test(`${id('008')} · Invitado con carro cambia a una tienda de retiro donde un producto no tiene stock (${ff})`, async ({ page, testData }) => {
        await preparar(page, testData, ambos);
        await cambiarARetiro(page, t(testData, 'TIENDA_RETIRO_001'));
        const ag = new AgotarseModal(page);
        await expect(ag.titulo).toBeVisible({ timeout: 30000 });
        await ag.botonSi.click();
        await expect(toast(page), 'toast de alerta').toBeVisible({ timeout: 20000 });
        await page.getByRole('button', { name: /^revisar$/i }).first().click();
        await page.waitForTimeout(3000);
        const c = (await page.locator('main').innerText()).replace(/\s+/g, ' ');
        const sinStock = await nombre(page, testData, 'SKU_STOCK_SOLO_TIENDA_A');
        expect(c).not.toContain(sinStock.slice(0, 25));
      });

      test(`${id('010')} · Invitado con carro cambia a una tienda de retiro donde todos los productos tienen stock (${ff})`, async ({ page, testData }) => {
        await preparar(page, testData, [['SKU_VALID_001', 2]]);
        await cambiarARetiro(page, t(testData, 'TIENDA_RETIRO_001'));
        const ag = new AgotarseModal(page);
        if (await ag.titulo.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) await ag.botonSi.click();
        await page.waitForTimeout(4000);
        await expect(toast(page)).toBeHidden({ timeout: 8000 });
        const c = await carro(page, testData);
        expect(c).toMatch(/2\s*un/i);
      });
    });
  }
});
