import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';
import { test, token } from './support/fixtures';
import { DESKTOP } from './support/viewports';
import { esperarOtp, marcaOtp } from './support/otp';
import { conCandado } from './support/candadoOtp';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { LoginModal } from './pages/LoginModal';
import { PDPPage } from './pages/PDPPage';
import { CarroPage } from './pages/CarroPage';
import { CarroOpciones } from './pages/CarroOpciones';

test.use(DESKTOP);
test('probe42 (Desktop)', async ({ page, testData }) => {
  test.setTimeout(400000);
  const correo = token(testData, 'COMPRADOR_SIN_MEMBRESIA_USER')!;
  const sesion = path.resolve('.qa/auth/b42-user.json');
  const base = fs.existsSync(sesion) ? sesion : path.resolve('.qa/auth/b190-user.json');
  await page.context().addCookies(JSON.parse(fs.readFileSync(base, 'utf-8')).cookies ?? []);
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  const login = new LoginModal(page);
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  if (await login.disparador.isVisible().catch(() => false)) {
    await conCandado(correo, async () => {
      const desde = marcaOtp();
      await login.pedirCodigo(correo);
      await login.ingresarCodigo(await esperarOtp(correo, desde, { digitos: 6 }));
    });
  }
  await login.descartarPasskey();
  await page.context().storageState({ path: sesion });
  const carro = await new CarroPage(page).goto();
  await new CarroOpciones(page).cerrarToastSiEsta();
  await carro.vaciar();
  const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_PRECIO_MIEMBRO')!);
  await pdp.fijarCantidad(21);
  await new CarroPage(page).goto();
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(3000);
  await page.screenshot({ path: '.qa/explore42/cart.png', fullPage: true });
  fs.writeFileSync('.qa/explore42/cart.txt', await page.locator('main').innerText());
});
