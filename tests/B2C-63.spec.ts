import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP_1280, MOBILE } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { ListadoDelSku } from './pages/ListadoDelSku';
import { ShelfProducto } from './pages/ShelfProducto';
import { PDPPage } from './pages/PDPPage';
import { CombinaLaPromoModal } from './pages/CombinaLaPromoModal';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { LoginModal } from './pages/LoginModal';
import { esperarOtp, marcaOtp } from './support/otp';

/**
 * B2C-63 — «Completa la promo»: barra de progreso, contador y toast al agregar o quitar unidades.
 *
 * Se ejecutan los TC cuyo producto es el que la fila declara:
 * - 2x1: `{SKU_COMPLETA_PROMO_2X1}` (D/M 021–026), invitado con `{DIRECCION_DESPACHO_001}`.
 * - 3x2: `{SKU_PROM_NxM}` (D/M 003 y 009), invitado con `{DIRECCION_DESPACHO_003}`.
 *
 * El producto es el declarado, no uno elegido a mano. Si en el ambiente el shelf no ofrece
 * «Agregar» (sin stock), el TC no es ejecutable y se registra como `bloqueado-data`.
 */

type TD = Parameters<typeof token>[0];

const sku2x1 = (td: TD) => token(td, 'SKU_COMPLETA_PROMO_2X1') ?? token(td, 'SKU_PROM_2x1')!;
const skuNxM = (td: TD) => token(td, 'SKU_PROM_NxM')!;

/** Invitado con la dirección elegida (el storefront exige dirección antes de agregar). */
async function conDireccion(page: Page, direccion: string): Promise<void> {
  const home = new HomePage(page);
  await home.goto();
  await home.cookies.aceptarSiAparece();
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  const numero = direccion.match(/\d+/)?.[0] ?? '';
  await modal.fijarDireccionComoInvitado(direccion, new RegExp(`(?<!\\d)${numero}(?!\\d)`));
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

const t = async (s: ShelfProducto) => (await s.texto()).replace(/\s+/g, ' ');

/** Deja el shelf con `n` unidades: agrega la primera y sube con el «+». */
async function llevarA(s: ShelfProducto, n: number): Promise<void> {
  if ((await s.cantidadEnCarro()) === null) {
    await s.agregar.click();
    await s.esperarCantidad(1);
  }
  for (let i = (await s.cantidadEnCarro()) ?? 0; i < n; i++) {
    await s.clicAumentar();
    await s.esperarCantidad(i + 1);
  }
}

/** Abre el listado del SKU y devuelve su shelf; si no hay «Agregar», el TC queda bloqueado por data. */
async function plpDelSku(page: Page, sku: string): Promise<{ l: ListadoDelSku; s: ShelfProducto }> {
  const l = new ListadoDelSku(page, sku);
  await l.abrirPlp();
  await l.shelf.root.scrollIntoViewIfNeeded().catch(() => {});
  return { l, s: l.shelf };
}

function bloqueoSiNoHayStock(s: ShelfProducto, sku: string, hay: boolean) {
  if (!hay) {
    test.info().annotations.push({ type: 'bloqueado-data', description: `${sku} no ofrece «Agregar» en el ambiente` });
  }
  test.skip(!hay, `${sku} sin stock`);
  void s;
}

const casos: Array<[string, typeof DESKTOP_1280, 'Desktop' | 'Mobile']> = [
  ['D', DESKTOP_1280, 'Desktop'],
  ['M', MOBILE, 'Mobile'],
];

test.describe.configure({ timeout: 150000 });
test.describe('B2C-63 — Completa la promo', () => {
  for (const [tipo, vp, ff] of casos) {
    test.describe(`${ff}`, () => {
      test.use(vp);
      const id = (n: string) => `TC-63-${tipo}-${n}`;

      test(`${id('003')} · Barra y contador actualizan en tiempo real al agregar (Guest) (${ff})`, async ({ page, testData }) => {
        const cp = id('003');
        const sku = skuNxM(testData);
        await conDireccion(page, token(testData, 'DIRECCION_DESPACHO_003')!);
        const { l, s } = await plpDelSku(page, sku);
        const hay = await s.agregar.isVisible().catch(() => false);
        bloqueoSiNoHayStock(s, sku, hay);
        await l.capturarEvidencia(cp, 1, 'shelf 3x2 antes de agregar');
        await s.agregar.click();
        await s.esperarCantidad(1);
        await l.capturarEvidencia(cp, 2, 'tras la 1ª unidad');
        expect(await t(s)).toMatch(/agrega 2/i);
        await s.clicAumentar();
        await s.esperarCantidad(2);
        await l.capturarEvidencia(cp, 3, 'tras la 2ª unidad');
        expect(await t(s)).toMatch(/agrega 1/i);
        await s.clicAumentar();
        await s.esperarCantidad(3);
        await l.capturarEvidencia(cp, 4, 'tras la 3ª unidad');
        expect(await t(s)).toMatch(/completaste la promo/i);
      });

      test(`${id('009')} · Disminuir unidades desde el shelf recalcula el progreso (Guest) (${ff})`, async ({ page, testData }) => {
        const cp = id('009');
        const sku = skuNxM(testData);
        await conDireccion(page, token(testData, 'DIRECCION_DESPACHO_003')!);
        const { l, s } = await plpDelSku(page, sku);
        const hay = await s.agregar.isVisible().catch(() => false);
        bloqueoSiNoHayStock(s, sku, hay);
        await llevarA(s, 2);
        await l.capturarEvidencia(cp, 1, 'carrito con 2 unidades (2/3)');
        await s.clicDisminuir();
        await s.esperarCantidad(1);
        await l.capturarEvidencia(cp, 2, 'tras disminuir a 1');
        expect(await s.cantidadEnCarro()).toBe(1);
        expect(await t(s)).toMatch(/agrega 2 y ahorra m[aá]s/i);
      });

      test(`${id('021')} · Quita una unidad desde la PDP (Guest) (${ff})`, async ({ page, testData }) => {
        const cp = id('021');
        const sku = sku2x1(testData);
        await conDireccion(page, token(testData, 'DIRECCION_DESPACHO_001')!);
        const { s } = await plpDelSku(page, sku);
        bloqueoSiNoHayStock(s, sku, await s.agregar.isVisible().catch(() => false));
        await llevarA(s, 2);
        const pdp = new PDPPage(page);
        await pdp.abrir(sku);
        await pdp.capturarEvidencia(cp, 3, 'PDP con 2 unidades');
        await pdp.core.getByRole('button', { name: 'Disminuir cantidad' }).locator('visible=true').first().click();
        await page.waitForTimeout(2500);
        await pdp.capturarEvidencia(cp, 4, 'tras quitar una unidad');
        const txt = (await pdp.core.innerText()).replace(/\s+/g, ' ');
        expect(txt).toMatch(/en carro\s*1\s*un/i);
        expect(txt).toMatch(/agrega 1 y ahorra m[aá]s/i);
      });


      test(`${id('020')} · Disminuye unidades desde el modal «Combina la promo» (Guest) (${ff})`, async ({ page, testData }) => {
        const cp = id('020');
        const sku = sku2x1(testData);
        await conDireccion(page, token(testData, 'DIRECCION_DESPACHO_001')!);
        const { l, s } = await plpDelSku(page, sku);
        bloqueoSiNoHayStock(s, sku, await s.agregar.isVisible().catch(() => false));
        await llevarA(s, 2);
        await s.combinaLaPromo.click();
        const modal = new CombinaLaPromoModal(page);
        await expect(modal.titulo).toBeVisible({ timeout: 20000 });
        await page.waitForTimeout(1500);
        await l.capturarEvidencia(cp, 3, 'modal con el shelf en 2 unidades');
        const txt0 = (await modal.root.innerText()).replace(/\s+/g, ' ');
        expect(txt0).toMatch(/en carro\s*2\s*un/i);
        await modal.root.getByRole('button', { name: 'Disminuir', exact: true }).first().click();
        await page.waitForTimeout(2500);
        await l.capturarEvidencia(cp, 4, 'modal tras disminuir una unidad');
        const txt = (await modal.root.innerText()).replace(/\s+/g, ' ');
        expect(txt, 'el contador del modal queda en 1').toMatch(/en carro\s*1\s*un/i);
        expect(txt, 'el mensaje cambia a «Agrega 1 y ahorra más»').toMatch(/agrega 1 y ahorra m[aá]s/i);
      });

      /** Shelf del SKU en un carrusel del Home; si no aparece en ninguno, el TC no es ejecutable. */
      async function shelfEnHome(page: Page, sku: string): Promise<ShelfProducto> {
        const l = new ListadoDelSku(page, sku);
        const hay = await l.abrirHomeConElSku();
        if (!hay) test.info().annotations.push({ type: 'bloqueado-data', description: `${sku} no aparece en ningún carrusel del Home` });
        test.skip(!hay, `${sku} no está en un carrusel del Home`);
        return ShelfProducto.porEnlaceOImagen(page, sku);
      }

      test(`${id('022')} · Quita una unidad desde un carrusel del Home (Guest) (${ff})`, async ({ page, testData }) => {
        const cp = id('022');
        const sku = sku2x1(testData);
        await conDireccion(page, token(testData, 'DIRECCION_DESPACHO_001')!);
        const { s: sp } = await plpDelSku(page, sku);
        bloqueoSiNoHayStock(sp, sku, await sp.agregar.isVisible().catch(() => false));
        await llevarA(sp, 2);
        const s = await shelfEnHome(page, sku);
        await new ListadoDelSku(page, sku).capturarEvidencia(cp, 3, 'shelf del carrusel con 2 unidades');
        expect(await s.cantidadEnCarro()).toBe(2);
        await s.clicDisminuir();
        await s.esperarCantidad(1);
        await new ListadoDelSku(page, sku).capturarEvidencia(cp, 4, 'tras quitar una unidad');
        expect(await s.cantidadEnCarro()).toBe(1);
        expect(await t(s)).toMatch(/agrega 1 y ahorra m[aá]s/i);
      });

      test(`${id('025')} · Inicia la promo en el Home y la completa en la PDP (Guest) (${ff})`, async ({ page, testData }) => {
        const cp = id('025');
        const sku = sku2x1(testData);
        await conDireccion(page, token(testData, 'DIRECCION_DESPACHO_001')!);
        const s = await shelfEnHome(page, sku);
        const l = new ListadoDelSku(page, sku);
        bloqueoSiNoHayStock(s, sku, await s.agregar.isVisible().catch(() => false));
        await s.agregar.click();
        await s.esperarCantidad(1);
        await l.capturarEvidencia(cp, 2, 'carrusel del Home tras agregar');
        expect(await t(s)).toMatch(/agrega 1 y ahorra m[aá]s/i);
        const pdp = new PDPPage(page);
        await pdp.abrir(sku);
        await pdp.capturarEvidencia(cp, 5, 'PDP con 1 unidad');
        const antes = (await pdp.core.innerText()).replace(/\s+/g, ' ');
        expect(antes).toMatch(/en carro\s*1\s*un/i);
        expect(antes, 'la PDP conserva el progreso (1 de 2)').toMatch(/agrega 1 y ahorra m[aá]s/i);
        await pdp.aumentarCantidad.click();
        await page.waitForTimeout(2500);
        await pdp.capturarEvidencia(cp, 7, 'PDP tras agregar la 2ª unidad');
        const txt = (await pdp.core.innerText()).replace(/\s+/g, ' ');
        expect(txt).toMatch(/en carro\s*2\s*un/i);
        expect(txt).toMatch(/completaste la promo/i);
      });

      test(`${id('026')} · Inicia la promo en el Home y la completa en la PLP (Guest) (${ff})`, async ({ page, testData }) => {
        const cp = id('026');
        const sku = sku2x1(testData);
        await conDireccion(page, token(testData, 'DIRECCION_DESPACHO_001')!);
        const sh = await shelfEnHome(page, sku);
        const l = new ListadoDelSku(page, sku);
        bloqueoSiNoHayStock(sh, sku, await sh.agregar.isVisible().catch(() => false));
        await sh.agregar.click();
        await sh.esperarCantidad(1);
        await l.capturarEvidencia(cp, 2, 'carrusel del Home tras agregar');
        expect(await t(sh)).toMatch(/agrega 1 y ahorra m[aá]s/i);
        const { s } = await plpDelSku(page, sku);
        await l.capturarEvidencia(cp, 5, 'shelf de la PLP con 1 unidad');
        expect(await s.cantidadEnCarro()).toBe(1);
        expect(await t(s)).toMatch(/agrega 1 y ahorra m[aá]s/i);
        await s.clicAumentar();
        await s.esperarCantidad(2);
        await l.capturarEvidencia(cp, 7, 'shelf de la PLP con 2 unidades');
        expect(await s.cantidadEnCarro()).toBe(2);
        expect(await t(s)).toMatch(/completaste la promo/i);
      });

      test(`${id('023')} · Llega a 4 unidades en una promo 2x1 (Guest) (${ff})`, async ({ page, testData }) => {
        const cp = id('023');
        const sku = sku2x1(testData);
        await conDireccion(page, token(testData, 'DIRECCION_DESPACHO_001')!);
        const { l, s } = await plpDelSku(page, sku);
        bloqueoSiNoHayStock(s, sku, await s.agregar.isVisible().catch(() => false));
        await llevarA(s, 3);
        await l.capturarEvidencia(cp, 2, 'shelf con 3 unidades (1 de 2)');
        expect(await t(s)).toMatch(/agrega 1 y ahorra m[aá]s/i);
        await s.clicAumentar();
        await s.esperarCantidad(4);
        await l.capturarEvidencia(cp, 4, 'shelf con 4 unidades');
        expect(await s.cantidadEnCarro()).toBe(4);
        expect(await t(s)).toMatch(/completaste la promo/i);
      });

      test(`${id('024')} · Baja de 4 a 3 unidades en una promo 2x1 (Guest) (${ff})`, async ({ page, testData }) => {
        const cp = id('024');
        const sku = sku2x1(testData);
        await conDireccion(page, token(testData, 'DIRECCION_DESPACHO_001')!);
        const { l, s } = await plpDelSku(page, sku);
        bloqueoSiNoHayStock(s, sku, await s.agregar.isVisible().catch(() => false));
        await llevarA(s, 4);
        await l.capturarEvidencia(cp, 2, 'shelf con 4 unidades');
        await s.clicDisminuir();
        await s.esperarCantidad(3);
        await l.capturarEvidencia(cp, 4, 'shelf con 3 unidades');
        expect(await s.cantidadEnCarro()).toBe(3);
        expect(await t(s)).toMatch(/agrega 1 y ahorra m[aá]s/i);
      });
    });
  }

  test.describe('Mobile (logueado)', () => {
    test.use(MOBILE);
    test('TC-63-M-018 · Disminuir unidades recalcula el progreso promocional (Logueado) (Mobile)', async ({ page, testData }) => {
      test.setTimeout(300000);
      const cp = 'TC-63-M-018';
      const sku = skuNxM(testData);
      const home = new PaginaHabilitada(page);
      await home.goto();
      await loginMobile(page, token(testData, 'COMPRADOR_USER')!.split(' / ')[0]);
      const { l, s } = await plpDelSku(page, sku);
      const hay = (await s.agregar.isVisible().catch(() => false)) || (await s.cantidadEnCarro()) !== null;
      bloqueoSiNoHayStock(s, sku, hay);
      await s.sacarDelCarro();
      await llevarA(s, 2);
      await l.capturarEvidencia(cp, 2, 'sesión iniciada y 2 unidades en el carro (2/3)');
      await s.clicDisminuir();
      await s.esperarCantidad(1);
      await l.capturarEvidencia(cp, 4, 'tras disminuir a 1 unidad');
      const quedo = await s.cantidadEnCarro();
      const txt = await t(s);
      await s.sacarDelCarro();
      expect(quedo).toBe(1);
      expect(txt).toMatch(/agrega 2 y ahorra m[aá]s/i);
    });
  });
});
