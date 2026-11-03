import { expect, test, token } from './support/fixtures';
import { Page } from '@playwright/test';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { PDPPage } from './pages/PDPPage';
import { CarroPage } from './pages/CarroPage';
import { DatosEntregaPage } from './pages/DatosEntregaPage';
import { LoginModal } from './pages/LoginModal';
import { AgotarseModal } from './pages/AgotarseModal';
import { LoadedTestData } from './support/testData';
import { esperarOtp, marcaOtp } from './support/otp';

function cp(id: string, form: 'D' | 'M') { return `TC-B2C127-${form}-${id}`; }
function parte(direccion: string) {
  // Google puede normalizar abreviaturas (p. ej. "Gral."), así que el número de puerta
  // identifica la sugerencia sin depender de esa puntuación.
  return new RegExp(direccion.match(/\d+/)?.[0] ?? direccion.split(',')[0].trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
}
function correo(data: LoadedTestData) { return token(data, 'USER_AUTH_001')!.split('/')[0].trim(); }

async function abrir(page: Page) {
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  return { home, modal };
}

async function elegirDireccion(page: Page, modal: MetodoEntregaModal, data: LoadedTestData) {
  const direccion = token(data, 'DIRECCION_SIN_SLA')!;
  await modal.elegirSugerencia(direccion, parte(direccion));
  await modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[oó]n/i }).click();
  await modal.confirmacionPin.getByRole('button', { name: /^agregar direcci[oó]n$/i }).click();
  const sinHorarios = page.getByRole('dialog').filter({ hasText: /por ahora no hay horarios disponibles/i }).locator('visible=true').first();
  await expect(sinHorarios, 'modal «Por ahora no hay horarios disponibles»').toBeVisible({ timeout: 45000 });
  return sinHorarios;
}

async function aplicarDireccionSinSla(page: Page, data: LoadedTestData) {
  const { home, modal } = await abrir(page);
  const sinHorarios = await elegirDireccion(page, modal, data);
  await sinHorarios.getByRole('button', { name: /^continuar con esta direcci[oó]n$/i }).click();
  await expect(sinHorarios).toBeHidden({ timeout: 30000 });
  return { home: new PaginaHabilitada(page), modal, sinHorarios };
}

async function login(page: Page, data: LoadedTestData) {
  const ui = new LoginModal(page);
  if (await new PaginaHabilitada(page).header.saludo.isVisible().catch(() => false)) return;
  const desde = marcaOtp();
  await ui.pedirCodigo(correo(data));
  await ui.ingresarCodigo(await esperarOtp(correo(data), desde, { digitos: 6 }));
  await ui.descartarPasskey();
}

test.describe('B2C-127 — Sin horarios disponibles por dirección', () => {
  for (const [ff, vp, form] of [
    ['Desktop 1440x900', DESKTOP, 'D'],
    ['Mobile 390x844', MOBILE, 'M'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);

      test(`${cp('001', form)} · Dirección con cobertura sin horarios muestra modal y opciones [Guest] (${form === 'D' ? 'Desktop' : 'Mobile'})`, async ({ page, testData }) => {
        const { modal } = await abrir(page);
        const sinHorarios = await elegirDireccion(page, modal, testData);
        await expect(sinHorarios).toContainText(/por ahora no hay horarios disponibles/i);
        await expect(sinHorarios).toContainText(/intenta cambiando el m[eé]todo de entrega|en cuanto tengamos horarios/i);
        await expect(sinHorarios.getByRole('button', { name: /^continuar con esta direcci[oó]n$/i })).toBeVisible();
        await expect(sinHorarios.getByRole('button', { name: /^cambiar m[eé]todo de entrega$/i })).toBeVisible();
        await modal.capturarModal(cp('001', form), undefined, 'modal sin horarios', sinHorarios);
      });

      test(`${cp('002', form)} · Continuar aplica la dirección con aviso de sin horarios [Guest] (${form === 'D' ? 'Desktop' : 'Mobile'})`, async ({ page, testData }) => {
        const { home, modal, sinHorarios } = await aplicarDireccionSinSla(page, testData);
        await expect(home.header.storeLocator).toContainText(token(testData, 'DIRECCION_SIN_SLA')!.split(',')[0], { timeout: 30000 });
        await expect(home.header.storeLocator).toContainText(/sin horarios/i);
        await home.capturarEvidencia(cp('002', form), 8, 'Home con dirección sin horarios', { elemento: home.header.barraDelSitio });
      });

      test(`${cp('003', form)} · Se pueden agregar productos con dirección sin horarios [Guest] (${form === 'D' ? 'Desktop' : 'Mobile'})`, async ({ page, testData }) => {
        const { home } = await aplicarDireccionSinSla(page, testData);
        const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
        await pdp.agregarVisible.click();
        await expect(pdp.cantidadEnCarro, 'SKU agregado al carro').toBeVisible({ timeout: 20000 });
        await expect(pdp.header.miniCarrito).not.toHaveAttribute('aria-label', /\b0\b/);
        await pdp.capturarEvidencia(cp('003', form));
        await home.capturarEvidencia(cp('003', form), 'post', 'SKU agregado con dirección sin horarios');
      });

      test(`${cp('004', form)} · Con carro aparece agotarse antes del modal sin horarios [Guest] (${form === 'D' ? 'Desktop' : 'Mobile'})`, async ({ page, testData }) => {
        const { modal } = await abrir(page);
        const casa = token(testData, 'DIRECCION_DESPACHO_001')!;
        await modal.fijarDireccionComoInvitado(casa, parte(casa));
        const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
        await pdp.agregarVisible.click();
        await expect(pdp.header.miniCarrito).toHaveAttribute('aria-label', /\b1\b/, { timeout: 20000 });
        const { modal: cambio } = await abrir(page);
        await elegirDireccion(page, cambio, testData);
        const agotarse = new AgotarseModal(page);
        await expect(agotarse.root, 'modal «Algunos productos podrían agotarse»').toBeVisible({ timeout: 30000 });
        await agotarse.botonSi.click();
        const sinHorarios = page.getByRole('dialog').filter({ hasText: /por ahora no hay horarios disponibles/i }).locator('visible=true').first();
        await expect(sinHorarios).toBeVisible({ timeout: 30000 });
        await sinHorarios.getByRole('button', { name: /^continuar con esta direcci[oó]n$/i }).click();
        await expect(page.getByText(/sin horarios disponibles/i).locator('visible=true').first()).toBeVisible({ timeout: 30000 });
        await new PaginaHabilitada(page).capturarEvidencia(cp('004', form));
      });

      test(`${cp('005', form)} · Error al guardar muestra toast y conserva dirección previa [Guest] (${form === 'D' ? 'Desktop' : 'Mobile'})`, async ({ page, testData }) => {
        const { modal } = await abrir(page);
        const casa = token(testData, 'DIRECCION_DESPACHO_001')!;
        await modal.fijarDireccionComoInvitado(casa, parte(casa));
        const endpoint = token(testData, 'SETEO_ENTREGA_API_ENDPOINT')!;
        const matcher = new RegExp(endpoint.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/^\*:\/\//, 'https?://').replace(/\*/g, '.*'));
        await page.route(matcher, (route) => route.abort());
        const { modal: siguiente } = await abrir(page);
        const sinHorarios = await elegirDireccion(page, siguiente, testData);
        await sinHorarios.getByRole('button', { name: /^continuar con esta direcci[oó]n$/i }).click();
        const toast = page.getByText(/no pudimos guardar tu direcci[oó]n/i).locator('visible=true').first();
        await expect(toast, 'toast de error al guardar').toBeVisible({ timeout: 30000 });
        await expect(page.getByRole('button', { name: /^close$|^cerrar$/i }).locator('visible=true').first()).toBeVisible();
        await expect((await new PaginaHabilitada(page).goto()).header.storeLocator).toContainText(casa.split(',')[0], { timeout: 20000 });
        await page.unroute(matcher);
        await new PaginaHabilitada(page).capturarEvidencia(cp('005', form));
      });

      test(`${cp('006', form)} · Cambiar método vuelve al selector de entrega [Guest] (${form === 'D' ? 'Desktop' : 'Mobile'})`, async ({ page, testData }) => {
        const { modal } = await abrir(page);
        const sinHorarios = await elegirDireccion(page, modal, testData);
        await sinHorarios.getByRole('button', { name: /^cambiar m[eé]todo de entrega$/i }).click();
        await expect(sinHorarios).toBeHidden({ timeout: 20000 });
        await expect(modal.encabezado).toBeVisible({ timeout: 20000 });
        await modal.capturarModal(cp('006', form), undefined, 'selector de método de entrega');
      });

      test(`${cp('007', form)} · Mis envíos muestra pantalla Sin horarios disponibles tras validar OTP [Logueado] (${form === 'D' ? 'Desktop' : 'Mobile'})`, async ({ page, testData }) => {
        const home = await new PaginaHabilitada(page).goto();
        await login(page, testData);
        const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
        await pdp.agregarVisible.click();
        await expect(pdp.cantidadEnCarro).toBeVisible({ timeout: 20000 });
        const carro = await new CarroPage(page).goto();
        await carro.continuarConLaEntrega();
        const entrega = new DatosEntregaPage(page);
        await expect(entrega.titulo).toBeVisible({ timeout: 30000 });
        await entrega.botonCambiarUbicacion.click();
        const modal = await new MetodoEntregaModal(page).esperarAbierto();
        const desde = marcaOtp();
        const direccion = token(testData, 'DIRECCION_SIN_SLA')!;
        await modal.agregarDireccion(direccion, parte(direccion));
        const autenticacion = modal.modalOtp;
        if (await autenticacion.isVisible().catch(() => false)) {
          await new LoginModal(page).escribirCodigo(await esperarOtp(correo(testData), desde, { digitos: 6 }));
          await expect(autenticacion).toBeHidden({ timeout: 30000 });
        }
        const sinHorarios = page.getByText(/sin horarios disponibles/i).locator('visible=true').first();
        await expect(sinHorarios, 'Mis Envíos en estado Sin horarios disponibles').toBeVisible({ timeout: 45000 });
        await expect(page.getByRole('button', { name: /cambiar direcci[oó]n/i })).toBeVisible();
        await expect(page.getByRole('button', { name: /cambiar m[eé]todo de entrega/i })).toBeVisible();
        await new DatosEntregaPage(page).capturarEvidencia(cp('007', form));
        await home.capturarEvidencia(cp('007', form), 'pre', 'Home de sesión iniciada');
      });
    });
  }
});
