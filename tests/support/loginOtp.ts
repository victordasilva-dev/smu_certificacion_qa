import type { Page } from '@playwright/test';
import { LoginModal } from '../pages/LoginModal';
import { MetodoEntregaModal } from '../pages/MetodoEntregaModal';
import { esperarOtp, marcaOtp } from './otp';

/**
 * Login por correo + OTP desde "Ingresa aquí" (desde el 2026-10-12 el modal ya no pide RUT ni
 * contraseña). Responde la oferta de passkey y el segundo OTP "Autenticación requerida" si aparece.
 */
export async function loginConOtp(page: Page, correo: string): Promise<void> {
  const origen = page.url();
  const login = new LoginModal(page);
  const desde = marcaOtp();
  await login.pedirCodigo(correo);
  const codigo = await esperarOtp(correo, desde, { digitos: 6 });
  const desde2 = marcaOtp();
  await login.escribirCodigo(codigo);
  await login.primerDigito.waitFor({ state: 'hidden', timeout: 45000 }).catch(() => {});
  await login.disparador.first().waitFor({ state: 'hidden', timeout: 45000 }).catch(() => {});
  const otp = new MetodoEntregaModal(page).modalOtp;
  const ahoraNo = login.ofertaPasskey.getByRole('button', { name: /^ahora no$/i });
  let respondido = false;
  const fin = Date.now() + 20000;
  while (Date.now() < fin) {
    if (!respondido && (await otp.isVisible().catch(() => false))) {
      await login.escribirCodigo(await esperarOtp(correo, desde2, { digitos: 6 }));
      await otp.waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
      respondido = true;
      continue;
    }
    if (await ahoraNo.isVisible().catch(() => false)) await ahoraNo.click({ timeout: 5000 }).catch(() => {});
    await page.waitForTimeout(500);
  }
  await login.descartarPasskey();
  await volverDeLaCuenta(page, origen);
}

/** En Mobile el sitio lleva a /account tras iniciar sesión: se vuelve a la página donde empezó el login. */
export async function volverDeLaCuenta(page: Page, origen: string): Promise<void> {
  if (!/\/account(\/|$|\?)/.test(new URL(page.url()).pathname + '/') || /\/account/.test(new URL(origen).pathname)) return;
  await page.goto(origen, { waitUntil: 'domcontentloaded' });
}
