import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { HomePage, MyUsualsPage } from './pages/HomePage';
import { LoginModal } from './pages/LoginModal';
import { MyUsualsCarrusel } from './pages/MyUsualsCarrusel';
import { ShelfProducto } from './pages/ShelfProducto';
import { loginConOtp } from './support/loginOtp';
import { conCandado } from './support/candadoOtp';
import { LoadedTestData } from './support/testData';

/**
 * B2C-55 — Carrusel My Usuals (productos frecuentes) en el Home.
 *
 * Las cuentas entran por correo + OTP (el modal ya no pide contraseña) y la sesión se guarda por
 * cuenta y form-factor en `.qa/auth/` para no pedir un código por caso.
 *
 * - {COMPRADOR_USUALS_MAS_24_USER} tiene 27 frecuentes en `c_myUsuals` (2026-11-11).
 * - {COMPRADOR_5_FRECUENTES_USER} tiene que tener exactamente 5: el caso lo comprueba en
 *   "Mis productos frecuentes" antes de mirar el Home.
 * - Carga (D-011/M-010) y error (D-012/M-011) se simulan interceptando la red del navegador: la
 *   lista de productos se demora y la lectura del cliente responde 500.
 */

type TD = LoadedTestData;
type Cuenta = 'COMPRADOR_USUALS_MAS_24' | 'COMPRADOR_5_FRECUENTES';

const PRODUCTOS = /shopper-products\/v1\/organizations\/[^/]+\/products\?ids=/;
const CLIENTE = /shopper-customers\/v1\/organizations\/[^/]+\/customers\/[^/?]+\?/;

const fichaDe = (cuenta: Cuenta, mobile: boolean) =>
  path.resolve(`.qa/auth/b55-${cuenta.toLowerCase()}-${mobile ? 'm' : 'd'}.json`);

/** Inicia sesión con la cuenta declarada: reutiliza su storageState; si no sirve, correo + OTP. */
async function sesion(page: Page, td: TD, cuenta: Cuenta, mobile: boolean): Promise<HomePage> {
  const ficha = fichaDe(cuenta, mobile);
  if (fs.existsSync(ficha)) {
    const estado = JSON.parse(fs.readFileSync(ficha, 'utf-8'));
    await page.context().addCookies(estado.cookies ?? []);
    const origen = (estado.origins ?? [])[0];
    if (origen?.localStorage?.length) {
      await page.addInitScript((items: { name: string; value: string }[]) => {
        if (sessionStorage.getItem('__b55_ls')) return;
        for (const { name, value } of items) localStorage.setItem(name, value);
        sessionStorage.setItem('__b55_ls', '1');
      }, origen.localStorage);
    }
  }
  const home = new HomePage(page);
  await home.goto();
  const conSesion = await home.header.saludo.waitFor({ state: 'visible', timeout: 20000 }).then(
    () => true,
    () => false,
  );
  if (!conSesion) {
    const correo = token(td, `${cuenta}_USER`)!;
    await conCandado(correo, () => loginConOtp(page, correo));
    await home.header.saludo.waitFor({ state: 'visible', timeout: 30000 });
    fs.mkdirSync(path.dirname(ficha), { recursive: true });
    await page.context().storageState({ path: ficha });
  }
  await new LoginModal(page).descartarPasskey();
  return home;
}

/** Los SKU frecuentes del cliente, tal como los guarda el atributo `c_myUsuals`. */
function capturarMyUsuals(page: Page): () => string[] | null {
  let lista: string[] | null = null;
  page.on('response', async (r) => {
    if (!CLIENTE.test(r.url()) || !r.ok()) return;
    const cuerpo = await r.json().catch(() => null);
    if (Array.isArray(cuerpo?.c_myUsuals)) lista = cuerpo.c_myUsuals;
  });
  return () => lista;
}

/** Pasos 1 a 4: sesión con la cuenta y el Home con el carrusel My Usuals a la vista. */
async function homeConCarrusel(page: Page, td: TD, cp: string, mobile: boolean) {
  const home = await sesion(page, td, 'COMPRADOR_USUALS_MAS_24', mobile);
  await home.capturarEvidencia(cp, 3, 'home con la sesion iniciada');
  const carrusel = new MyUsualsCarrusel(page);
  await home.recorrerCompleto();
  await expect(carrusel.root, 'el Home muestra el carrusel My Usuals').toBeVisible({ timeout: 30000 });
  await carrusel.llevarAVista();
  await expect(carrusel.tarjetas.first(), 'el carrusel carga sus productos').toBeVisible({ timeout: 30000 });
  await home.capturarEvidencia(cp, 4, 'carrusel My Usuals', { elemento: carrusel.root });
  return { home, carrusel };
}

async function ordenSegunAtributo(page: Page, td: TD, cp: string, mobile: boolean) {
  test.setTimeout(300000);
  const myUsuals = capturarMyUsuals(page);
  const { home, carrusel } = await homeConCarrusel(page, td, cp, mobile);
  const esperados = myUsuals();
  expect(esperados, 'se leyó el atributo c_myUsuals del cliente').not.toBeNull();
  const skus = await carrusel.skus();
  test.info().annotations.push({
    type: 'orden',
    description: `carrusel ${skus.join(',')} | c_myUsuals (${esperados!.length}) ${esperados!.slice(0, 8).join(',')}`,
  });
  expect(skus.length, 'el carrusel muestra productos').toBeGreaterThan(0);
  expect(skus, 'el carrusel sigue el orden de relevancia de c_myUsuals').toEqual(esperados!.slice(0, skus.length));
  await home.capturarEvidencia(cp, 5, 'orden de los productos del carrusel', { elemento: carrusel.root });
  await home.capturarEvidencia(cp);
}

async function tituloCentrado(page: Page, td: TD, cp: string, mobile: boolean) {
  test.setTimeout(300000);
  const { home, carrusel } = await homeConCarrusel(page, td, cp, mobile);
  await expect(carrusel.titulo, 'el carrusel tiene título').toHaveText(/\S{3,}/);
  const { textAlign, desvio } = await carrusel.centradoDelTitulo();
  test.info().annotations.push({ type: 'titulo', description: `"${await carrusel.titulo.innerText()}" text-align=${textAlign} desvio=${desvio}px` });
  expect(textAlign, 'el título está alineado al centro').toBe('center');
  expect(desvio, 'el título queda centrado sobre el carrusel').toBeLessThanOrEqual(12);
  await home.capturarEvidencia(cp, 5, 'titulo centrado', { elemento: carrusel.root });
  await home.capturarEvidencia(cp);
}

async function shelfEstandar(page: Page, td: TD, cp: string, mobile: boolean) {
  test.setTimeout(300000);
  const { home, carrusel } = await homeConCarrusel(page, td, cp, mobile);
  const n = await carrusel.tarjetas.count();
  const sinStock: string[] = [];
  for (let i = 0; i < n; i++) {
    const tarjeta = carrusel.tarjetas.nth(i);
    const shelf = new ShelfProducto(page, tarjeta);
    await expect(shelf.imagen.first(), `la tarjeta ${i + 1} tiene imagen`).toBeAttached();
    await expect(carrusel.nombreEn(tarjeta), `la tarjeta ${i + 1} tiene nombre`).toHaveText(/\w{3,}/);
    await expect(shelf.precios.first(), `la tarjeta ${i + 1} tiene precio`).toBeAttached();
    // Sin stock, el shelf cambia "Agregar" por "Ver similares" (CA5 de la misma HU).
    const agregar = (await shelf.agregar.count()) + (await shelf.aumentar.count());
    if (agregar === 0 && (await shelf.verSimilares.count()) > 0) {
      sinStock.push(await carrusel.nombreEn(tarjeta).innerText());
      continue;
    }
    expect(agregar, `la tarjeta ${i + 1} tiene el botón "Agregar"`).toBeGreaterThan(0);
  }
  if (sinStock.length) test.info().annotations.push({ type: 'sin-stock', description: sinStock.join(' | ') });
  await home.capturarEvidencia(cp, 5, 'tarjetas del shelf estandar', { elemento: carrusel.root });
  await home.capturarEvidencia(cp);
}

async function linkVerTodos(page: Page, td: TD, cp: string, mobile: boolean) {
  test.setTimeout(300000);
  const { home, carrusel } = await homeConCarrusel(page, td, cp, mobile);
  await expect(carrusel.verTodos, 'el componente muestra el link "Ver todos"').toBeVisible();
  await expect(carrusel.verTodos, '"Ver todos" lleva a Mis productos frecuentes').toHaveAttribute('href', /\/account\/my-usuals/);
  await home.capturarEvidencia(cp, 5, 'link Ver todos', { elemento: carrusel.root });
  await home.capturarEvidencia(cp);
}

async function productosVisibles(page: Page, td: TD, cp: string, mobile: boolean, esperados: number) {
  test.setTimeout(300000);
  const myUsuals = capturarMyUsuals(page);
  const { home, carrusel } = await homeConCarrusel(page, td, cp, mobile);
  const iniciales = await carrusel.skusVisibles();
  const total = await carrusel.tarjetas.count();
  const frecuentes = myUsuals()?.length ?? null;
  await home.capturarEvidencia(cp, 5, `${iniciales.length} productos visibles sin desplazar`, { elemento: carrusel.root });
  expect(iniciales.length, `el carrusel muestra ${esperados} productos a la vez`).toBe(esperados);

  let nuevos: string[] = [];
  for (let i = 0; i < 3 && nuevos.length === 0; i++) {
    await carrusel.avanzar();
    nuevos = (await carrusel.skusVisibles()).filter((s) => !iniciales.includes(s));
  }
  await home.capturarEvidencia(cp, 6, 'carrusel tras desplazarlo', { elemento: carrusel.root });
  test.info().annotations.push({
    type: 'desplazamiento',
    description: `tarjetas en el carrusel ${total}, frecuentes en c_myUsuals ${frecuentes}, nuevas al desplazar ${nuevos.length}`,
  });
  expect(
    nuevos.length,
    `al desplazar se ven productos que no estaban a la vista (el carrusel tiene ${total} tarjetas de ${frecuentes} frecuentes)`,
  ).toBeGreaterThan(0);
  await home.capturarEvidencia(cp);
}

async function noSeMuestraCon5(page: Page, td: TD, cp: string, mobile: boolean) {
  test.setTimeout(300000);
  const home = await sesion(page, td, 'COMPRADOR_5_FRECUENTES', mobile);
  const usuals = new MyUsualsPage(page);
  await usuals.goto();
  const total = await usuals.totalAnunciado();
  await usuals.capturarEvidencia(cp, 3, `la cuenta tiene ${total} productos frecuentes`);
  if (total !== 5) throw new Error(`PRECONDICION_NO_DISPONIBLE: la cuenta tiene ${total} productos frecuentes, no exactamente 5`);

  await home.goto();
  await home.recorrerCompleto();
  const carrusel = new MyUsualsCarrusel(page);
  const componente = await home.componenteMyUsuals();
  await home.capturarEvidencia(cp, 5, 'home sin el carrusel My Usuals', { fullPage: true });
  await expect(carrusel.root, 'el Home no muestra el carrusel My Usuals').toBeHidden();
  if (componente) expect(await home.alto(componente), 'el lugar del componente no deja espacio vacío').toBe(0);
  await home.capturarEvidencia(cp);
}

async function iconoDeCarga(page: Page, td: TD, cp: string, mobile: boolean) {
  test.setTimeout(300000);
  const home = await sesion(page, td, 'COMPRADOR_USUALS_MAS_24', mobile);
  // Red lenta para la lista de productos del carrusel: se demora hasta que se libera.
  let liberar: () => void = () => {};
  const demora = new Promise<void>((r) => (liberar = r));
  await page.route(PRODUCTOS, async (route) => {
    await Promise.race([demora, new Promise((r) => setTimeout(r, 60000))]);
    await route.continue().catch(() => {});
  });
  await home.goto();
  const carrusel = new MyUsualsCarrusel(page);
  await carrusel.root.waitFor({ state: 'attached', timeout: 45000 });
  await carrusel.root.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  const indicadores = await carrusel.indicadoresDeCarga.count();
  const tipo = await carrusel.indicadoresDeCarga.first().getAttribute('class').catch(() => '');
  // En WebKit la captura de un elemento no termina mientras la petición sigue retenida: se acota y,
  // si no llega, se toma la ventana.
  const captura = home.capturarEvidencia(cp, 5, 'area del carrusel durante la carga', { elemento: carrusel.root });
  const alcanzo = await Promise.race([captura.then(() => true, () => false), page.waitForTimeout(15000).then(() => false)]);
  if (!alcanzo) await page.screenshot({ path: `test-results/evidence/${cp}-p05-area-del-carrusel-durante-la-carga.png`, timeout: 15000 }).catch(() => {});
  test.info().annotations.push({ type: 'carga', description: `${indicadores} indicador(es) de carga: ${tipo}` });
  expect(indicadores, 'el área del carrusel muestra un indicador de carga').toBeGreaterThan(0);
  expect(await carrusel.tarjetas.count(), 'durante la carga todavía no hay tarjetas').toBe(0);

  liberar();
  await page.unroute(PRODUCTOS);
  await expect(carrusel.tarjetas.first(), 'al terminar la carga se muestran los productos').toBeVisible({ timeout: 30000 });
  await expect(carrusel.indicadoresDeCarga, 'el indicador de carga desaparece').toHaveCount(0);
  await home.capturarEvidencia(cp, 6, 'carrusel con los productos cargados', { elemento: carrusel.root });
  await home.capturarEvidencia(cp);
}

async function falloSilencioso(page: Page, td: TD, cp: string, mobile: boolean) {
  test.setTimeout(300000);
  const home = await sesion(page, td, 'COMPRADOR_USUALS_MAS_24', mobile);
  // Error interno al leer el cliente (y con él, su atributo myUsuals).
  await page.route(CLIENTE, (route) =>
    route.fulfill({ status: 500, contentType: 'application/json', body: '{"title":"Internal Server Error"}' }),
  );
  await home.goto();
  await home.recorrerCompleto();
  const carrusel = new MyUsualsCarrusel(page);
  const componente = await home.componenteMyUsuals();
  await home.capturarEvidencia(cp, 5, 'home con error al leer myUsuals', { fullPage: true });
  await expect(carrusel.root, 'el carrusel My Usuals no se muestra').toBeHidden();
  if (componente) expect(await home.alto(componente), 'el componente no ocupa lugar').toBe(0);
  await expect(page.locator('main').getByText(/error|algo sali[óo] mal|no pudimos|intenta(lo)? (de nuevo|m[áa]s tarde)/i), 'no se muestra un mensaje de error').toHaveCount(0);
  const titulos = await home.titulosDeComponentes();
  test.info().annotations.push({ type: 'componentes', description: titulos.join(' | ') });
  expect(titulos.length, 'el resto de los componentes del Home se muestra').toBeGreaterThanOrEqual(5);
  await page.unroute(CLIENTE);
  await home.capturarEvidencia(cp);
}

test.describe('B2C-55 — Carrusel My Usuals', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C55-D-001 · Orden de relevancia de myUsualsProducts (Desktop)', async ({ page, testData }) => {
      await ordenSegunAtributo(page, testData, 'TC-B2C55-D-001', false);
    });
    test('TC-B2C55-D-003 · Titulo configurado centrado (Desktop)', async ({ page, testData }) => {
      await tituloCentrado(page, testData, 'TC-B2C55-D-003', false);
    });
    test('TC-B2C55-D-004 · Cada producto usa la shelf estandar (Desktop)', async ({ page, testData }) => {
      await shelfEstandar(page, testData, 'TC-B2C55-D-004', false);
    });
    test('TC-B2C55-D-005 · Link "Ver todos" (Desktop)', async ({ page, testData }) => {
      await linkVerTodos(page, testData, 'TC-B2C55-D-005', false);
    });
    test('TC-B2C55-D-006 · 5 productos visibles a la vez (Desktop)', async ({ page, testData }) => {
      await productosVisibles(page, testData, 'TC-B2C55-D-006', false, 5);
    });
    test('TC-B2C55-D-007 · No se muestra con exactamente 5 frecuentes (Desktop)', async ({ page, testData }) => {
      await noSeMuestraCon5(page, testData, 'TC-B2C55-D-007', false);
    });
    test('TC-B2C55-D-011 · Icono de carga mientras obtiene los datos (Desktop)', async ({ page, testData }) => {
      await iconoDeCarga(page, testData, 'TC-B2C55-D-011', false);
    });
    test('TC-B2C55-D-012 · Falla silenciosa al obtener myUsuals (Desktop)', async ({ page, testData }) => {
      await falloSilencioso(page, testData, 'TC-B2C55-D-012', false);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C55-M-001 · Orden de relevancia de myUsualsProducts (Mobile)', async ({ page, testData }) => {
      await ordenSegunAtributo(page, testData, 'TC-B2C55-M-001', true);
    });
    test('TC-B2C55-M-003 · Titulo configurado centrado (Mobile)', async ({ page, testData }) => {
      await tituloCentrado(page, testData, 'TC-B2C55-M-003', true);
    });
    test('TC-B2C55-M-004 · Cada producto usa la shelf estandar (Mobile)', async ({ page, testData }) => {
      await shelfEstandar(page, testData, 'TC-B2C55-M-004', true);
    });
    test('TC-B2C55-M-005 · Link "Ver todos" (Mobile)', async ({ page, testData }) => {
      await linkVerTodos(page, testData, 'TC-B2C55-M-005', true);
    });
    test('TC-B2C55-M-006 · 2 productos visibles a la vez (Mobile)', async ({ page, testData }) => {
      await productosVisibles(page, testData, 'TC-B2C55-M-006', true, 2);
    });
    test('TC-B2C55-M-007 · No se muestra con exactamente 5 frecuentes (Mobile)', async ({ page, testData }) => {
      await noSeMuestraCon5(page, testData, 'TC-B2C55-M-007', true);
    });
    // En WebKit las lecturas del cliente y del catálogo pasan por el service worker, que `page.route`
    // no intercepta: sin bloquearlo, la carga lenta y el error simulados no llegan a la página.
    test.describe('Red simulada', () => {
      test.use({ serviceWorkers: 'block' });

      test('TC-B2C55-M-010 · Icono de carga mientras obtiene los datos (Mobile)', async ({ page, testData }) => {
        await iconoDeCarga(page, testData, 'TC-B2C55-M-010', true);
      });
      test('TC-B2C55-M-011 · Falla silenciosa al obtener myUsuals (Mobile)', async ({ page, testData }) => {
        await falloSilencioso(page, testData, 'TC-B2C55-M-011', true);
      });
    });
  });
});
