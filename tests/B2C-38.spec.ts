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

/**
 * B2C-38 — Controles de cantidad y eliminación en el carro.
 *
 * Solo D-014 y M-016 tienen `test()`. El resto queda sin código, y conviene que se entienda por qué:
 * - La mayoría (D-001 a D-009, M-002 a M-010, D-015, M-017) se ejecuta con sesión iniciada y su
 *   columna Test data no declara la cuenta.
 * - D/M-011 a 015: {CART_ITEM_API_ENDPOINT} en TBD.
 * - D-010, M-011 y M-012: {SKU_NO_DISPONIBLE} figura «Pronto disponible» también en el despacho
 *   activo, así que no hay cómo dejarlo en el carro antes de pasar a {TIENDA_SIN_STOCK}.
 * - M-001 (invitado): armar el carro exige una dirección que la fila no declara.
 */

/** Sesión de {USER_AUTH_001}, compartida con B2C-190 (misma cuenta). No se commitea. */
const SESION = path.resolve('.qa/auth/b190-user.json');

function declarado(testData: LoadedTestData, nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) throw new Error(`Falta {${nombre}} en el Excel de data: el TC lo declara en su Test data`);
  return valor;
}

async function iniciarSesion(page: Page, testData: LoadedTestData): Promise<PaginaHabilitada> {
  const correo = declarado(testData, 'USER_AUTH_001').split('/')[0].trim();
  if (fs.existsSync(SESION)) {
    await page.context().addCookies(JSON.parse(fs.readFileSync(SESION, 'utf-8')).cookies ?? []);
  }
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  const login = new LoginModal(page);
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  if (await login.disparador.isVisible().catch(() => false)) {
    const desde = marcaOtp();
    await login.pedirCodigo(correo);
    await login.ingresarCodigo(await esperarOtp(correo, desde, { digitos: 6 }));
  }
  await login.descartarPasskey();
  fs.mkdirSync(path.dirname(SESION), { recursive: true });
  await page.context().storageState({ path: SESION });
  return home;
}

/** El valor en pesos de un texto "$27.390". */
function pesos(texto: string): number {
  return Number(texto.replace(/[^\d]/g, ''));
}

test.describe('B2C-38 — Cantidad y eliminación en el carro', () => {
  for (const [ff, vp, L, sufijo, cpN] of [
    ['Desktop 1440x900', DESKTOP, 'D', 'Desktop', '014'],
    ['Mobile 390x844', MOBILE, 'M', 'Mobile', '016'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);

      test(`TC-B2C38-${L}-${cpN} · Al quedar bajo el mínimo de compra se deshabilita «Continuar con la entrega» [Logueado] (${sufijo})`, async ({ page, testData }) => {
        test.setTimeout(300000);
        const cp = `TC-B2C38-${L}-${cpN}`;
        const minimo = Number(declarado(testData, 'MONTO_MINIMO_COMPRA'));
        await iniciarSesion(page, testData);

        // Precondición: {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO}, subtotal sobre el mínimo.
        const pdp = await new PDPPage(page).abrir(declarado(testData, 'SKU_VALID_001'));
        const nombre = (await pdp.nombreDelProducto.innerText()).trim();
        await pdp.fijarCantidad(Number(declarado(testData, 'UNIDADES_SOBRE_MINIMO')));

        // Pasos 1–2: el carro.
        const carro = await new CarroPage(page).goto();
        await expect(carro.botonContinuarEntrega, 'con el subtotal sobre el mínimo, «Continuar con la entrega» está habilitado').toBeEnabled({ timeout: 30000 });
        expect(pesos(await carro.subtotal.innerText()), 'subtotal inicial sobre el mínimo').toBeGreaterThanOrEqual(minimo);
        await carro.capturarEvidencia(cp, 2, 'carro sobre el mínimo de compra');

        // Paso 3: "−" del ítem hasta quedar bajo el mínimo.
        const restar = page.getByRole('button', { name: new RegExp(`^restar ${nombre.split(' ')[0]}`, 'i') }).first();
        for (let i = 0; i < 15 && pesos(await carro.subtotal.innerText()) >= minimo; i++) {
          await restar.click();
          await page.waitForTimeout(2500);
        }
        const subtotal = pesos(await carro.subtotal.innerText());
        test.info().annotations.push({ type: 'subtotal final', description: String(subtotal) });
        expect(subtotal, 'el subtotal queda bajo el mínimo').toBeLessThan(minimo);

        // Paso 4 y esperado: CTA deshabilitado y mensaje de mínimo de compra sobre el subtotal.
        const cta = page.getByRole('button', { name: /continuar con la entrega|m[íi]nimo de compra/i }).first();
        await carro.capturarEvidencia(cp, 4, 'carro bajo el mínimo de compra');
        test.info().annotations.push({ type: 'CTA', description: (await cta.innerText()).replace(/\s+/g, ' ') });
        await expect.soft(cta, 'el CTA del carro queda deshabilitado').toBeDisabled();
        await expect.soft(carro.botonContinuarEntrega, '«Continuar con la entrega» se muestra deshabilitado').toBeDisabled({ timeout: 5000 });
        await expect
          .soft(page.locator('main').last().getByText(/m[íi]nimo de compra/i).filter({ hasNot: page.getByRole('button') }).first(), 'mensaje informativo de mínimo de compra')
          .toBeVisible({ timeout: 5000 });
        await carro.capturarEvidencia(cp);
      });
    });
  }
});
