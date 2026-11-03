import * as fs from 'fs';
import { Page, Response } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { capturarEvidencia } from './support/evidencia';
import { HomePage } from './pages/HomePage';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { AgotarseModal } from './pages/AgotarseModal';
import { PDPPage } from './pages/PDPPage';
import { ShelfProducto } from './pages/ShelfProducto';
import { BuscadorModal } from './pages/BuscadorModal';
import { CarroPage } from './pages/CarroPage';
import { LoginModal } from './pages/LoginModal';
import { loginConOtp } from './support/loginOtp';
import { esperarOtp, marcaOtp } from './support/otp';

/**
 * B2C-61 — Contenido, disponibilidad y promociones según la tienda activa (Store Locator).
 *
 * Se ejecutan solo los TC cuyos tokens de `Test data` tienen valor en el Excel de data. Cada TC usa
 * únicamente los SKU y direcciones que su fila declara.
 */
type TD = Parameters<typeof token>[0];
const tk = (td: TD, n: string) => token(td, n)!;

/** Dirección elegida como invitado desde un Home recién cargado (sin dirección previa). */
async function conDireccion(page: Page, direccion: string): Promise<void> {
  const home = new HomePage(page);
  await home.goto();
  await home.cookies.aceptarSiAparece();
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  const numero = direccion.match(/\d+/)?.[0] ?? '';
  await modal.fijarDireccionComoInvitado(direccion, new RegExp(`(?<!\\d)${numero}(?!\\d)`));
}

/**
 * Cambia la dirección desde el Store Locator del Home. Con el carro cargado en otra tienda el sitio
 * abre "Algunos productos podrían agotarse" (B2C-122): devuelve el modal para que el TC lo verifique.
 */
async function cambiarDireccion(page: Page, direccion: string, evidencia?: (e: string) => Promise<void>): Promise<boolean> {
  const home = new HomePage(page);
  await home.goto();
  await home.cookies.aceptarSiAparece();
  await home.header.storeLocator.click();
  const m = await new MetodoEntregaModal(page).esperarAbierto();
  const numero = direccion.match(/\d+/)?.[0] ?? '';
  await m.elegirSugerencia(direccion, new RegExp(`(?<!\\d)${numero}(?!\\d)`));
  await m.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
  await m.confirmacionPin.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
  const ag = new AgotarseModal(page);
  const modal = await ag.titulo.waitFor({ state: 'visible', timeout: 20000 }).then(() => true, () => false);
  if (modal) {
    await evidencia?.('modal «Algunos productos podrían agotarse»');
    await ag.botonSi.click();
  }
  await m.root.waitFor({ state: 'hidden', timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(3000);
  return modal;
}

async function buscar(page: Page, ff: 'desktop' | 'mobile', termino: string): Promise<void> {
  const b = new BuscadorModal(page, ff);
  await b.abrir();
  await b.escribir(termino);
  await b.input.press('Enter');
  await page.waitForURL(/\/search\?/, { timeout: 60000 });
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(2500);
}

const txt = async (l: import('@playwright/test').Locator) => (await l.innerText()).replace(/\s+/g, ' ');
const NO_DISP = /no est[aá] disponible|no disponible|pronto disponible|agotad|sin stock/i;

/** Candado atómico por cuenta: otro co-worker usa la misma. */
async function conCandado<T>(correo: string, fn: () => Promise<T>): Promise<T> {
  const dir = `.qa/otp/lock-${correo.replace(/[^a-z0-9]/gi, '_')}`;
  fs.mkdirSync('.qa/otp', { recursive: true });
  const fin = Date.now() + 10 * 60000;
  for (;;) {
    try { fs.mkdirSync(dir); break; } catch { if (Date.now() > fin) throw new Error('candado de cuenta no disponible'); await new Promise((r) => setTimeout(r, 20000)); }
  }
  try { return await fn(); } finally { try { fs.rmdirSync(dir); } catch { /* ya liberado */ } }
}

/** Login Mobile: la pantalla del código es «Autenticación requerida» (no es un diálogo; botón «Validar»). */
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

test.describe.configure({ timeout: 240000 });
test.describe('B2C-61 — Store Locator: disponibilidad y promociones por tienda', () => {
  const casos: Array<['D' | 'M', typeof DESKTOP, 'Desktop' | 'Mobile', 'desktop' | 'mobile']> = [
    ['D', DESKTOP, 'Desktop', 'desktop'],
    ['M', MOBILE, 'Mobile', 'mobile'],
  ];
  for (const [tipo, vp, ff, ffl] of casos) {
    test.describe(`${ff}`, () => {
      test.use(vp);
      const id = (n: string) => `TC-B2C61-${tipo}-${n}`;

      test(`${id('008')} · Producto con stock en la tienda activa se muestra disponible (${ff})`, async ({ page, testData }) => {
        const cp = id('008');
        await conDireccion(page, tk(testData, 'DIRECCION_DESPACHO_001'));
        const pdp = new PDPPage(page);
        await pdp.abrir(tk(testData, 'SKU_STOCK_SOLO_TIENDA_A'));
        await page.waitForTimeout(2000);
        await pdp.capturarEvidencia(cp, 1, 'PDP con Agregar habilitado');
        await expect(pdp.agregarVisible).toBeVisible();
        await expect(pdp.agregarVisible).toBeEnabled();
        expect(await txt(pdp.core)).not.toMatch(NO_DISP);
      });

      test(`${id('009')} · Producto sin stock en la tienda activa se muestra no disponible y sin Agregar (${ff})`, async ({ page, testData }) => {
        const cp = id('009');
        const sku = tk(testData, 'SKU_STOCK_SOLO_TIENDA_A');
        await conDireccion(page, tk(testData, 'DIRECCION_OTRA_TIENDA'));
        await buscar(page, ffl, tk(testData, 'SEARCH_TERM_SKU_TIENDA_A'));
        const sh = ShelfProducto.porEnlaceOImagen(page, sku);
        await sh.root.scrollIntoViewIfNeeded().catch(() => {});
        await capturarEvidencia(page, cp, 2, 'resultados con el shelf del SKU');
        await expect(sh.root).toBeVisible();
        const texto = await t(sh);
        expect(texto, 'etiqueta de no disponible visible').toMatch(NO_DISP);
        expect(await sh.agregar.count(), 'sin botón Agregar').toBe(0);
      });

      test(`${id('011')} · Al cambiar de tienda un producto sin stock en la nueva tienda queda no disponible (${ff})`, async ({ page, testData }) => {
        const cp = id('011');
        const sku = tk(testData, 'SKU_STOCK_SOLO_TIENDA_A');
        await conDireccion(page, tk(testData, 'DIRECCION_DESPACHO_001'));
        await buscar(page, ffl, tk(testData, 'SEARCH_TERM_SKU_TIENDA_A'));
        const shA = ShelfProducto.porEnlaceOImagen(page, sku);
        await shA.agregar.click();
        await shA.esperarCantidad(1);
        await capturarEvidencia(page, cp, 0, 'SKU en el carro con la tienda de origen');
        const modal = await cambiarDireccion(page, tk(testData, 'DIRECCION_OTRA_TIENDA'), async (e) => {
          await capturarEvidencia(page, cp, 6, e);
        });
        await page.goto(tk(testData, 'CART_URL'), { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(4000);
        await capturarEvidencia(page, cp, 8, 'carro tras el cambio de tienda');
        expect(modal, 'se muestra el modal de B2C-122').toBe(true);
        const main = await txt(page.locator('main').first());
        expect(main, 'el SKU queda no disponible para la nueva tienda').toMatch(NO_DISP);
      });

      test(`${id('012')} · Al cambiar de tienda un producto que ahora tiene stock se habilita (${ff})`, async ({ page, testData }) => {
        const cp = id('012');
        const sku = tk(testData, 'SKU_STOCK_SOLO_TIENDA_A');
        await conDireccion(page, tk(testData, 'DIRECCION_OTRA_TIENDA'));
        const pdp0 = new PDPPage(page);
        await pdp0.abrir(sku);
        await pdp0.capturarEvidencia(cp, 0, 'PDP en la tienda sin stock (estado previo)');
        const prev = { agregar: await pdp0.agregarVisible.isVisible().catch(() => false), texto: NO_DISP.test(await txt(pdp0.core)) };
        await cambiarDireccion(page, tk(testData, 'DIRECCION_DESPACHO_001'));
        await capturarEvidencia(page, cp, 5, 'dirección de la tienda con stock aplicada');
        const pdp = new PDPPage(page);
        await pdp.abrir(sku);
        await page.waitForTimeout(2000);
        await pdp.capturarEvidencia(cp, 6, 'PDP con Agregar habilitado');
        await expect(pdp.agregarVisible).toBeVisible();
        await expect(pdp.agregarVisible).toBeEnabled();
        test.info().annotations.push({ type: 'estado-previo', description: `en la tienda "sin stock": Agregar visible=${prev.agregar}, etiqueta no disponible=${prev.texto}` });
        expect(prev.agregar, 'precondición: sin stock en la dirección de partida').toBe(false);
      });

      test(`${id('013')} · PDP sin stock en la tienda activa deshabilita Agregar con mensaje (${ff})`, async ({ page, testData }) => {
        const cp = id('013');
        await conDireccion(page, tk(testData, 'DIRECCION_OTRA_TIENDA'));
        const pdp = new PDPPage(page);
        await pdp.abrir(tk(testData, 'SKU_STOCK_SOLO_TIENDA_A'));
        await page.waitForTimeout(2000);
        await pdp.capturarEvidencia(cp, 1, 'PDP en la tienda sin stock');
        const t0 = await txt(pdp.core);
        expect(t0, 'mensaje de no disponible').toMatch(/este producto no est[aá] disponible para tu direcci[oó]n/i);
        expect(await pdp.agregar.isEnabled().catch(() => false), 'Agregar deshabilitado').toBe(false);
        expect(t0).not.toMatch(/disponible en otras tiendas|otras tiendas/i);
      });

      test(`${id('014')} · Solo se muestran las promociones vigentes de la tienda activa (${ff})`, async ({ page, testData }) => {
        const cp = id('014');
        await conDireccion(page, tk(testData, 'DIRECCION_OTRA_TIENDA'));
        const pdp = new PDPPage(page);
        await pdp.abrir(tk(testData, 'SKU_PROMO_SOLO_TIENDA_A'));
        await page.waitForTimeout(2000);
        await pdp.capturarEvidencia(cp, 1, 'PDP en la tienda sin la promoción');
        const d = await pdp.datosDelProducto();
        test.info().annotations.push({ type: 'precios', description: d.precios.join(' / ') });
        expect(d.precios.length, 'solo el precio base').toBe(1);
        expect(await txt(pdp.core)).not.toMatch(/promoci[oó]n|\d+\s?% dto|-\s?\d+\s?%/i);
      });

      test(`${id('015')} · La promoción de la tienda activa se refleja en el precio con descuento (${ff})`, async ({ page, testData }) => {
        const cp = id('015');
        await conDireccion(page, tk(testData, 'DIRECCION_DESPACHO_001'));
        const pdp = new PDPPage(page);
        await pdp.abrir(tk(testData, 'SKU_PROMO_SOLO_TIENDA_A'));
        await page.waitForTimeout(2000);
        await pdp.capturarEvidencia(cp, 1, 'PDP en la tienda con la promoción');
        const d = await pdp.datosDelProducto();
        test.info().annotations.push({ type: 'precios', description: d.precios.join(' / ') });
        expect(d.precios.length, 'precio con descuento y precio base').toBeGreaterThanOrEqual(2);
      });

      test(`${id('016')} · Usuario sin Unipay ve el ahorro potencial de la promoción Unipay (${ff})`, async ({ page, testData }) => {
        const cp = id('016');
        await conDireccion(page, tk(testData, 'DIRECCION_DESPACHO_001'));
        const pdp = new PDPPage(page);
        await pdp.abrir(tk(testData, 'SKU_UNIPAY_001'));
        await page.waitForTimeout(2000);
        await pdp.capturarEvidencia(cp, 1, 'PDP con precio Unipay');
        const t0 = await txt(pdp.core);
        expect(t0, 'promoción Unipay visible').toMatch(/unipay/i);
        const d = await pdp.datosDelProducto();
        expect(d.precios.length, 'precio Unipay y precio normal').toBeGreaterThanOrEqual(2);
      });

      test(`${id('017')} · Datos de entrega asociados al basket con su warehouseId (${ff})`, async ({ page, testData }) => {
        const cp = id('017');
        const sku = tk(testData, 'SKU_VALID_001');
        const dir = tk(testData, 'DIRECCION_DESPACHO_001');
        const wh = tk(testData, 'WAREHOUSE_ID_DESPACHO_001');
        const baskets: string[] = [];
        page.on('response', async (r: Response) => {
          if (!/\/baskets/.test(r.url()) || !/json/.test(r.headers()['content-type'] ?? '')) return;
          try { const j = await r.json(); if (j.productItems || j.baskets) baskets.push(JSON.stringify(j.baskets ?? j)); } catch { /* sin cuerpo */ }
        });
        await conDireccion(page, dir);
        await capturarEvidencia(page, cp, 5, 'dirección aplicada en el header');
        await buscar(page, ffl, sku);
        const sh = ShelfProducto.porEnlaceOImagen(page, sku);
        await sh.agregar.click();
        await sh.esperarCantidad(1);
        await capturarEvidencia(page, cp, 6, 'producto agregado');
        await page.goto(tk(testData, 'CART_URL'), { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(5000);
        await capturarEvidencia(page, cp, 7, 'carro con el producto');
        const antes = baskets.slice(-1)[0] ?? '';
        const calle = dir.split(',')[0];
        test.info().annotations.push({ type: 'basket', description: (antes.match(/"c_(deliveryAddressLabel|supplyingStoreId)":"[^"]*"/g) ?? []).join(' ') });
        expect(antes, 'basket con el SKU').toContain(sku.split('-')[0]);
        expect(antes, 'dirección de envío en el basket').toContain(calle);
        expect(antes, `warehouseId ${wh} en el basket`).toMatch(new RegExp(`"(c_)?(warehouseId|supplyingStoreId|supplyingWarehouseId)":"?${wh}"?[,}]`));
        baskets.length = 0;
        await page.reload({ waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(5000);
        await capturarEvidencia(page, cp, 9, 'carro tras recargar');
        const despues = baskets.slice(-1)[0] ?? antes;
        expect(despues).toContain(calle);
        expect(despues).toMatch(new RegExp(`"(c_)?(warehouseId|supplyingStoreId|supplyingWarehouseId)":"?${wh}"?[,}]`));
      });
    });
  }

  /** Logueados al final y en serie. */
  test.describe.serial('Logueados', () => {
    for (const [tipo, vp, ff] of [['D', DESKTOP, 'Desktop'], ['M', MOBILE, 'Mobile']] as const) {
      test.describe(`${ff} (logueado)`, () => {
        test.use(vp);
        test(`TC-B2C61-${tipo}-019 · Usuario sin dirección con productos en el carro no puede avanzar al pago (${ff})`, async ({ page, testData }) => {
          test.setTimeout(300000);
          const cp = `TC-B2C61-${tipo}-019`;
          const correo = tk(testData, 'SIN_DIRECCION_USER').split(' / ')[0];
          const sku = tk(testData, 'SKU_VALID_001');
          const ffl = ff === 'Desktop' ? 'desktop' : 'mobile';
          const home = new HomePage(page);
          await home.goto();
          await home.cookies.aceptarSiAparece();
          await conCandado(correo, async () => {
            if (ff === 'Desktop') {
              await loginConOtp(page, correo);
            } else {
              await loginMobile(page, correo);
            }
          });
          await page.goto('/', { waitUntil: 'domcontentloaded' });
          await page.waitForTimeout(3000);
          await capturarEvidencia(page, cp, 3, 'Store Locator sin dirección ni tienda');
          const header = await txt(page.locator('body'));
          test.info().annotations.push({ type: 'header', description: header.slice(0, 200) });
          await buscar(page, ffl, sku);
          const sh = ShelfProducto.porEnlaceOImagen(page, sku);
          const errorSrp = page.getByText(/SRP-012/);
          for (let i = 0; i < 2 && (await errorSrp.isVisible().catch(() => false)); i++) {
            await capturarEvidencia(page, cp, 4, 'la búsqueda devuelve error SRP-012 (intento ' + (i + 1) + ')');
            await page.getByRole('button', { name: /reintentar/i }).click();
            await page.waitForTimeout(6000);
          }
          if (await errorSrp.isVisible().catch(() => false)) {
            test.info().annotations.push({ type: 'srp-012', description: 'La búsqueda del SKU con sesión sin dirección responde SRP-012; se agrega desde su PDP' });
            const pdp = new PDPPage(page);
            await pdp.abrir(sku);
            await pdp.agregarVisible.click({ timeout: 30000 });
            await page.waitForTimeout(3000);
          } else {
            await sh.agregar.click({ timeout: 30000 });
            await sh.esperarCantidad(1);
          }
          await capturarEvidencia(page, cp, 4, 'producto agregado');
          await page.goto(tk(testData, 'CART_URL'), { waitUntil: 'domcontentloaded' });
          const carro = new CarroPage(page);
          await carro.botonContinuarEntrega.waitFor({ state: 'visible', timeout: 30000 });
          await capturarEvidencia(page, cp, 5, 'carro');
          await carro.botonContinuarEntrega.click();
          await page.waitForTimeout(3000);
          if (await carro.modalSugeridos.isVisible().catch(() => false)) await carro.continuarSugeridos.click();
          await page.waitForTimeout(4000);
          await capturarEvidencia(page, cp, 7, 'intento de avanzar sin dirección ni tienda');
          const url = page.url();
          const body = await txt(page.locator('body'));
          test.info().annotations.push({ type: 'tras-continuar', description: `${new URL(url).pathname} :: ${body.slice(0, 400)}` });
          expect(url, 'no llega al pago').not.toMatch(/checkout\/(pago|payment)/);
          expect(body, 'solicita dirección o tienda').toMatch(/direcci[oó]n|tienda|elige/i);
        });
      });
    }
  });
});

async function t(s: ShelfProducto): Promise<string> {
  return (await s.texto()).replace(/\s+/g, ' ');
}
