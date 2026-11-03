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
import * as fs from 'fs';
import * as path from 'path';

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


const correoDe = (td: TD) => token(td, 'COMPRADOR_USER')!.split(/\s*\/\s*/)[0].trim();

/** Inicia sesión (correo + OTP). Reutiliza las cookies guardadas si siguen vigentes. */
async function loguear(page: Page, td: TD, movil: boolean): Promise<void> {
  const correo = correoDe(td);
  const sesion = path.resolve(movil ? '.qa/auth/b63-user-m.json' : '.qa/auth/b63-user.json');
  if (fs.existsSync(sesion)) {
    const guardada = JSON.parse(fs.readFileSync(sesion, 'utf-8'));
    await page.context().addCookies(guardada.cookies ?? []);
    const ls: Record<string, string> = {};
    for (const o of guardada.origins ?? []) for (const e of o.localStorage ?? []) ls[e.name] = e.value;
    await page.addInitScript((datos) => { for (const [k, v] of Object.entries(datos)) { try { localStorage.setItem(k, v as string); } catch { /* sin acceso */ } } }, ls);
  }
  const home = new PaginaHabilitada(page);
  await home.goto();
  const login = new LoginModal(page);
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  if (await login.disparador.isVisible().catch(() => false) || movil) {
    if (movil) {
      const visible = await login.disparador.isVisible().catch(() => false);
      if (visible) await loginMobile(page, correo);
    } else {
      test.info().setTimeout(test.info().timeout + 10 * 60_000);
      const desde = marcaOtp();
      await login.pedirCodigo(correo);
      await login.ingresarCodigo(await esperarOtp(correo, desde, { digitos: 6 }));
    }
  }
  await login.descartarPasskey();
  fs.mkdirSync(path.dirname(sesion), { recursive: true });
  await page.context().storageState({ path: sesion });
}

/** Shelf del SKU en un carrusel del Home; si no aparece en ninguno, el TC no es ejecutable. */
async function shelfEnHome(page: Page, sku: string): Promise<ShelfProducto> {
  const l = new ListadoDelSku(page, sku);
  const hay = await l.abrirHomeConElSku();
  if (!hay) test.info().annotations.push({ type: 'bloqueado-data', description: `${sku} no aparece en ningún carrusel del Home` });
  test.skip(!hay, `${sku} no está en un carrusel del Home`);
  return ShelfProducto.porEnlaceOImagen(page, sku);
}

const casos: Array<[string, typeof DESKTOP_1280, 'Desktop' | 'Mobile']> = [
  ['D', DESKTOP_1280, 'Desktop'],
  ['M', MOBILE, 'Mobile'],
];

test.describe.configure({ timeout: 240000 });
test.describe('B2C-63 — Completa la promo (pendientes)', () => {
  for (const [tipo, vp, ff] of casos) {
    const movil = tipo === 'M';
    test.describe(`${ff}`, () => {
      test.use(vp);
      const id = (n: string) => `TC-63-${tipo}-${n}`;

      /** Los 7 escenarios de la promo 2x1, sin sesión (Guest) o con sesión (Logueado). */
      for (const logueado of [false, true]) {
        const n = (g: string, l: string) => id(logueado ? l : g);
        const rol = logueado ? 'Logueado' : 'Guest';
        const prep = async (page: Page, testData: TD) => {
          const sku = sku2x1(testData);
          if (logueado) {
            await loguear(page, testData, movil);
            const { l, s } = await plpDelSku(page, sku);
            const hay = (await s.agregar.isVisible().catch(() => false)) || (await s.cantidadEnCarro()) !== null;
            bloqueoSiNoHayStock(s, sku, hay);
            await s.sacarDelCarro();
            return { l, s, sku };
          }
          await conDireccion(page, token(testData, 'DIRECCION_DESPACHO_003')!);
          const { l, s } = await plpDelSku(page, sku);
          bloqueoSiNoHayStock(s, sku, await s.agregar.isVisible().catch(() => false));
          return { l, s, sku };
        };

        test(`${n('001', '011')} · Toast «Agrega 1 y ahorra más» al agregar la 1ª unidad desde la PLP (${rol}) (${ff})`, async ({ page, testData }) => {
          const cp = n('001', '011');
          const { l, s } = await prep(page, testData);
          await l.capturarEvidencia(cp, 1, 'shelf antes de agregar');
          await s.agregar.click();
          await s.esperarCantidad(1);
          await page.waitForTimeout(800);
          await l.capturarEvidencia(cp, 2, 'tras la 1ª unidad');
          expect(await s.cantidadEnCarro()).toBe(1);
          expect(await t(s)).toMatch(/agrega 1 y ahorra m[aá]s/i);
          if (logueado) await s.sacarDelCarro();
        });

        test(`${n('002', '012')} · «¡Completaste la promo!» al alcanzar el umbral desde la PLP (${rol}) (${ff})`, async ({ page, testData }) => {
          const cp = n('002', '012');
          const { l, s } = await prep(page, testData);
          await llevarA(s, 1);
          await l.capturarEvidencia(cp, 1, 'carro con 1 unidad');
          await s.clicAumentar();
          await s.esperarCantidad(2);
          await page.waitForTimeout(800);
          await l.capturarEvidencia(cp, 2, 'tras la 2ª unidad');
          expect(await s.cantidadEnCarro()).toBe(2);
          expect(await t(s)).toMatch(/completaste la promo/i);
          if (logueado) await s.sacarDelCarro();
        });

        test(`${n('004', '013')} · Mensaje progresivo al agregar desde la PDP (${rol}) (${ff})`, async ({ page, testData }) => {
          const cp = n('004', '013');
          const { sku } = await prep(page, testData);
          const pdp = new PDPPage(page);
          await pdp.abrir(sku);
          await pdp.capturarEvidencia(cp, 1, 'PDP antes de agregar');
          await pdp.agregar.click();
          let visto = '';
          for (let i = 0; i < 12 && !/agrega 1 y ahorra m[aá]s/i.test(visto); i++) { await page.waitForTimeout(250); visto = (await page.locator('body').innerText()).replace(/\s+/g, ' '); }
          await pdp.capturarEvidencia(cp, 2, 'PDP tras agregar la 1ª unidad');
          await page.waitForTimeout(1500);
          const txt = (await pdp.core.innerText()).replace(/\s+/g, ' ');
          expect(txt).toMatch(/en carro\s*1\s*un/i);
          expect(visto, 'mensaje «Agrega 1 y ahorra más» visible en la PDP durante los 3 s posteriores').toMatch(/agrega 1 y ahorra m[aá]s/i);
          if (logueado) { const { s } = await plpDelSku(page, sku); await s.sacarDelCarro(); }
        });

        test(`${n('005', '014')} · Mensaje progresivo al agregar desde el modal «Combina la promo» (${rol}) (${ff})`, async ({ page, testData }) => {
          const cp = n('005', '014');
          const { l, s } = await prep(page, testData);
          await s.combinaLaPromo.click();
          const modal = new CombinaLaPromoModal(page);
          await expect(modal.titulo).toBeVisible({ timeout: 20000 });
          await page.waitForTimeout(1500);
          await l.capturarEvidencia(cp, 1, 'modal «Combina la promo» abierto');
          await modal.root.getByRole('button', { name: /^(agregar|aumentar)/i }).locator('visible=true').first().click();
          await page.waitForTimeout(2500);
          await l.capturarEvidencia(cp, 2, 'modal tras agregar la 1ª unidad');
          const txt = (await modal.root.innerText()).replace(/\s+/g, ' ');
          expect(txt).toMatch(/en carro\s*1\s*un/i);
          expect(txt).toMatch(/agrega 1 y ahorra m[aá]s/i);
          if (logueado) { await modal.cerrarConX().catch(() => {}); await s.sacarDelCarro(); }
        });

        test(`${n('006', '015')} · Mensaje progresivo al agregar desde un carrusel del Home (${rol}) (${ff})`, async ({ page, testData }) => {
          const cp = n('006', '015');
          const sku = sku2x1(testData);
          if (logueado) await loguear(page, testData, movil); else await conDireccion(page, token(testData, 'DIRECCION_DESPACHO_003')!);
          const sh = await shelfEnHome(page, sku);
          const l = new ListadoDelSku(page, sku);
          bloqueoSiNoHayStock(sh, sku, (await sh.agregar.isVisible().catch(() => false)) || (await sh.cantidadEnCarro()) !== null);
          if (logueado) await sh.sacarDelCarro();
          await sh.agregar.click();
          await sh.esperarCantidad(1);
          await page.waitForTimeout(800);
          await l.capturarEvidencia(cp, 2, 'carrusel del Home tras agregar');
          expect(await t(sh)).toMatch(/agrega 1 y ahorra m[aá]s/i);
          if (logueado) await sh.sacarDelCarro();
        });

        test(`${n('007', '016')} · Al quitar una unidad la promo vuelve a «en progreso» (${rol}) (${ff})`, async ({ page, testData }) => {
          const cp = n('007', '016');
          const { l, s } = await prep(page, testData);
          await llevarA(s, 2);
          await l.capturarEvidencia(cp, 1, 'carro con 2 unidades (promo completa)');
          await s.clicDisminuir();
          await s.esperarCantidad(1);
          await page.waitForTimeout(800);
          await l.capturarEvidencia(cp, 2, 'tras quitar una unidad');
          expect(await s.cantidadEnCarro()).toBe(1);
          expect(await t(s)).toMatch(/agrega 1 y ahorra m[aá]s/i);
          if (logueado) await s.sacarDelCarro();
        });

        test(`${n('008', '017')} · La 3ª unidad inicia un nuevo ciclo 2x1 (${rol}) (${ff})`, async ({ page, testData }) => {
          const cp = n('008', '017');
          const { l, s } = await prep(page, testData);
          await llevarA(s, 2);
          await l.capturarEvidencia(cp, 1, 'carro con 2 unidades (1er tramo completo)');
          await s.clicAumentar();
          await s.esperarCantidad(3);
          await page.waitForTimeout(800);
          await l.capturarEvidencia(cp, 2, 'tras la 3ª unidad');
          expect(await s.cantidadEnCarro()).toBe(3);
          expect(await t(s)).toMatch(/agrega 1 y ahorra m[aá]s/i);
          if (logueado) await s.sacarDelCarro();
        });

        test(`${n('010', '019')} · Eliminar el producto resetea el progreso y oculta el mensaje (${rol}) (${ff})`, async ({ page, testData }) => {
          const cp = n('010', '019');
          const { l, s } = await prep(page, testData);
          await llevarA(s, 1);
          await l.capturarEvidencia(cp, 1, 'carro con 1 unidad');
          await s.sacarDelCarro();
          await page.waitForTimeout(1000);
          await l.capturarEvidencia(cp, 2, 'tras eliminar el producto');
          expect(await s.cantidadEnCarro()).toBeNull();
          expect(await s.agregar.isVisible()).toBe(true);
          expect(await t(s)).not.toMatch(/agrega \d y ahorra m[aá]s|completaste la promo/i);
        });
      }

      test(`${id('018')} · Disminuir unidades recalcula el progreso de una promo 3x2 (Logueado) (${ff})`, async ({ page, testData }) => {
        const cp = id('018');
        const sku = skuNxM(testData);
        await loguear(page, testData, movil);
        const { l, s } = await plpDelSku(page, sku);
        bloqueoSiNoHayStock(s, sku, (await s.agregar.isVisible().catch(() => false)) || (await s.cantidadEnCarro()) !== null);
        await s.sacarDelCarro();
        await llevarA(s, 2);
        await l.capturarEvidencia(cp, 1, 'carro con 2 unidades (2/3)');
        await s.clicDisminuir();
        await s.esperarCantidad(1);
        await l.capturarEvidencia(cp, 2, 'tras disminuir a 1');
        const quedo = await s.cantidadEnCarro(); const txt = await t(s);
        await s.sacarDelCarro();
        expect(quedo).toBe(1);
        expect(txt).toMatch(/agrega 2 y ahorra m[aá]s/i);
      });
    });
  }
});
