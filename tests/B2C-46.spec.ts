import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { LoadedTestData } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { CarroPage } from './pages/CarroPage';
import { ShelfCarro } from './pages/ShelfCarro';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { LoginModal } from './pages/LoginModal';
import { esperarOtp, marcaOtp } from './support/otp';

/**
 * B2C-46 — Modal "Están de vuelta" (productos no disponibles que recuperan stock).
 *
 * D/M-007: invitado con un carro sin no disponibles. D/M-006 (2026-10-14): lo mismo con sesión
 * iniciada con {USER_AUTH_001} (correo + OTP); la sesión se reutiliza de `.qa/auth/b148-user.json`
 * y solo se pide un OTP si venció. D/M-005 sigue sin `test()`: {SKU_NO_DISPONIBLE} tiene stock en
 * {TIENDA_SIN_STOCK} (Bloqueado Data, como en B2C-39). D/M-001…004 necesitan BM: Fuera de alcance.
 */

const SESION = path.resolve('.qa/auth/b148-user.json');

function correo(testData: LoadedTestData): string {
  return token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
}

/** Deja la `page` con sesión de {USER_AUTH_001}: la guardada si sigue vigente, si no correo + OTP. */
async function asegurarSesion(page: Page, testData: LoadedTestData): Promise<void> {
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  if (await home.header.saludo.waitFor({ state: 'visible', timeout: 20000 }).then(() => true, () => false)) return;
  const login = new LoginModal(page);
  const desde = marcaOtp();
  await login.pedirCodigo(correo(testData));
  await login.ingresarCodigo(await esperarOtp(correo(testData), desde, { digitos: 6 }));
  await expect(home.header.saludo).toBeVisible({ timeout: 30000 });
  await page.context().storageState({ path: SESION });
}
test.describe('B2C-46 — Modal Están de vuelta', () => {
  for (const [ff, vp, sufijo, L] of [
    ['Desktop 1440x900', DESKTOP, 'Desktop', 'D'],
    ['Mobile 390x844', MOBILE, 'Mobile', 'M'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);

      test(`TC-B2C46-${L}-007 · Un invitado sin productos no disponibles no ve el modal (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C46-${L}-007`;
        const nombre = await ShelfCarro.agregarDesdeBusqueda(page, token(testData, 'SKU_VALID_001')!);

        // Pasos 1-2 — entra al carro, que solo tiene {SKU_VALID_001} disponible.
        const carro = await new CarroPage(page).goto();
        const shelf = new ShelfCarro(page, nombre);
        await shelf.root.waitFor({ state: 'visible', timeout: 30000 });
        // El modal, si existiera, se abre al cargar el carro: se le da tiempo de aparecer antes
        // de afirmar que no está.
        await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
        await page.waitForTimeout(3000);
        await carro.capturarEvidencia(cp, 2, 'carro cargado');

        await expect(page.getByText(/est[áa]n de vuelta/i), 'sin modal "Están de vuelta"').toHaveCount(0);
        await expect(page.getByText(/volvieron a estar disponibles/i)).toHaveCount(0);
        await expect(shelf.precioUnitario, 'carrito en su estado habitual').toBeVisible();
        await carro.capturarEvidencia(cp);
      });

      test.describe('Sesión iniciada', () => {
        test.use({ storageState: fs.existsSync(SESION) ? SESION : { cookies: [], origins: [] } });

        test(`TC-B2C46-${L}-006 · Un logueado sin productos no disponibles no ve el modal (${sufijo})`, async ({ page, testData }) => {
          const cp = `TC-B2C46-${L}-006`;
          test.setTimeout(240000);
          await asegurarSesion(page, testData);
          const home = new PaginaHabilitada(page);
          await home.capturarEvidencia(cp, 0, 'sesión iniciada');

          // Precondición: el carro de la cuenta contiene solo {SKU_VALID_001}.
          await (await new CarroPage(page).goto()).vaciar();
          const nombre = await ShelfCarro.agregarDesdeBusqueda(page, token(testData, 'SKU_VALID_001')!);

          // Pasos 1-2 — entra al carro.
          const carro = await new CarroPage(page).goto();
          const shelf = new ShelfCarro(page, nombre);
          await shelf.root.waitFor({ state: 'visible', timeout: 30000 });
          await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
          await page.waitForTimeout(3000);
          await carro.capturarEvidencia(cp, 2, 'carro cargado');

          await expect(page.getByText(/est[áa]n de vuelta/i), 'sin modal "Están de vuelta"').toHaveCount(0);
          await expect(page.getByText(/volvieron a estar disponibles/i)).toHaveCount(0);
          expect(await carro.productos(), 'solo {SKU_VALID_001} en el carro').toEqual([nombre]);
          await expect(shelf.precioUnitario, 'carrito en su estado habitual').toBeVisible();
          await carro.capturarEvidencia(cp);
        });
      });
    });
  }
});
