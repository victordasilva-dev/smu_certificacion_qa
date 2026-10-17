import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { LoadedTestData } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { CarroPage } from './pages/CarroPage';
import { ShelfCarro } from './pages/ShelfCarro';
import { LoginModal } from './pages/LoginModal';
import { esperarOtp, marcaOtp } from './support/otp';

/**
 * B2C-50 — Mensaje "Te faltan N para la promo" en el carro y el minicarro.
 *
 * Solo tienen `test()` los logueados (D-003 y M-002), con {USER_AUTH_001} (correo + OTP; la
 * sesión se reutiliza de `.qa/auth/`). Los invitados quedan sin `test()`: como invitado sin
 * dirección "Agregar" abre "Elige tu método de entrega" y no suma al carro, y las filas no
 * declaran dirección ni tienda. Además {SKU_COMBINA_PROMO} lleva "Lleva 2 por $12.490" (2
 * unidades) y {CANTIDAD_PROMO_COMBINA} vale 3.
 */

const SESION = path.resolve('.qa/auth/b50-user.json');
/** Sesión de la misma cuenta guardada por B2C-189: sirve de semilla y ahorra un OTP. */
const SESION_SEMILLA = path.resolve('.qa/auth/b189-user.json');

function correo(testData: LoadedTestData): string {
  return token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
}

/** Inicia sesión reutilizando el storageState guardado; si no sirve, por correo + OTP. */
async function iniciarSesion(page: Page, testData: LoadedTestData): Promise<PaginaHabilitada> {
  const archivo = fs.existsSync(SESION) ? SESION : fs.existsSync(SESION_SEMILLA) ? SESION_SEMILLA : null;
  if (archivo) {
    const estado = JSON.parse(fs.readFileSync(archivo, 'utf-8'));
    await page.context().addCookies(estado.cookies ?? []);
    const origen = (estado.origins ?? [])[0];
    if (origen?.localStorage?.length) {
      await page.addInitScript((items: { name: string; value: string }[]) => {
        if (sessionStorage.getItem('__b50_ls')) return;
        for (const { name, value } of items) localStorage.setItem(name, value);
        sessionStorage.setItem('__b50_ls', '1');
      }, origen.localStorage);
    }
  }
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  const login = new LoginModal(page);
  const conSesion = await home.header.saludo
    .waitFor({ state: 'visible', timeout: 20000 })
    .then(() => true, () => false);
  if (!conSesion) {
    const desde = marcaOtp();
    await login.pedirCodigo(correo(testData));
    await login.ingresarCodigo(await esperarOtp(correo(testData), desde, { digitos: 6 }));
  }
  await login.descartarPasskey();
  await expect(home.header.saludo, 'sesión iniciada').toBeVisible({ timeout: 30000 });
  fs.mkdirSync(path.dirname(SESION), { recursive: true });
  await page.context().storageState({ path: SESION });
  return home;
}

/** Deja el SKU en el carro con exactamente 1 unidad: lo quita si ya estaba y lo agrega desde la SRP. */
async function carroConUnaUnidad(page: Page, sku: string): Promise<string> {
  const carro = await new CarroPage(page).goto();
  await carro.titulo.or(carro.carroVacio).first().waitFor({ state: 'visible', timeout: 45000 });
  const nombre = await ShelfCarro.agregarDesdeBusqueda(page, sku);
  const enCarro = new ShelfCarro(page, nombre);
  await new CarroPage(page).goto();
  await enCarro.root.waitFor({ state: 'visible', timeout: 45000 });
  // Si el SKU ya estaba en el carro, la SRP mostró el stepper: se deja en 1 restando.
  for (let i = 0; i < 20 && !/^\s*1\s*un/i.test(await enCarro.cantidad.innerText()); i++) {
    const antes = await enCarro.cantidad.innerText();
    await enCarro.botonRestarOEliminar.click();
    await expect(enCarro.cantidad).not.toHaveText(antes, { timeout: 15000 });
  }
  return nombre;
}

test.describe('B2C-50 — Te faltan N para la promo en el carro', () => {
  for (const [ff, vp, sufijo, cp] of [
    ['Desktop 1440x900', DESKTOP, 'Desktop', 'TC-B2C50-D-003'],
    ['Mobile 390x844', MOBILE, 'Mobile', 'TC-B2C50-M-002'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);

      test(`${cp} · Logueado ve el mensaje Te faltan N de la promo Combina en el carro [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const sku = token(testData, 'SKU_COMBINA_PROMO')!;
        await iniciarSesion(page, testData);
        const nombre = await carroConUnaUnidad(page, sku);

        // Paso 1-2: ingresa a {CART_URL} y el carro carga.
        const carro = await new CarroPage(page).goto();
        const shelf = new ShelfCarro(page, nombre);
        await expect(carro.titulo).toBeVisible({ timeout: 45000 });
        await expect(shelf.root).toBeVisible({ timeout: 45000 });
        await expect(shelf.cantidad).toHaveText(/^\s*1\s*un/i);
        await carro.capturarEvidencia(cp, 2, 'carro con el producto de la promo Combina');

        // Paso 3: shelf del SKU con "Te faltan N para la promo" y el CTA "›".
        await expect(shelf.mensajePromo).toBeVisible();
        await expect(shelf.mensajePromo).toHaveText(/^te faltan \d+ para la promo$/i);
        await expect(shelf.chevronPromo, 'CTA "›" en el mensaje').toHaveCount(1);
        await expect(shelf.mensajePromo).toBeEnabled();
        await carro.capturarEvidencia(cp, 3, 'mensaje Te faltan N con CTA', { elemento: shelf.root });
        await carro.capturarEvidencia(cp);

        // Se deja el carro de la cuenta como estaba.
        await shelf.linkEliminar.click();
        await expect(shelf.root).toBeHidden({ timeout: 30000 });
      });
    });
  }
});
