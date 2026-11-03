import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { LoadedTestData } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { PDPPage } from './pages/PDPPage';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { AgotarseModal } from './pages/AgotarseModal';
import { LoginModal } from './pages/LoginModal';
import { CarroPage } from './pages/CarroPage';
import { esperarOtp, marcaOtp } from './support/otp';

/**
 * B2C-122 — Cambio de dirección con carro: el modal "Algunos productos podrían agotarse".
 *
 * Precondición común: invitado con {DIRECCION_DESPACHO_001} activa (tienda A) y el carro con
 * {SKU_VALID_001}. Se arma por la UI en cada test(): buscar la dirección, confirmarla y agregar el
 * SKU desde la PDP.
 *
 * Las direcciones del Excel de data se escriben como las tipeó quien armó la planilla
 * ("A. Las Conder 14791"); Google sugiere y el sitio muestra su forma normalizada ("Avenida Las
 * Condes 14791"). Por eso la sugerencia se elige por el número de la calle, y el Store Locator se
 * compara con la sugerencia elegida, no con el token.
 *
 * Quedan sin `test()`:
 * - D/M-006, 008 y 013: tokens en TBD ({SETEO_ENTREGA_API_ENDPOINT}, {SKU_STOCK_SOLO_TIENDA_A}).
 *
 * M-010 y M-011 usan {USER_AUTH_001} (ahora una cuenta cuyo OTP llega al Gmail que lee la
 * automatización). La sesión se guarda en `.qa/auth/b122-user.json` (no se commitea).
 */

const TEXTO =
  'Al cambiar la dirección o tipo de despacho, puede que algunos productos no se encuentren en esta ubicación o tienda. ¿Deseas continuar?';

/** El número de la calle, que es lo que la sugerencia de Google conserva del token. */
function numero(direccion: string): RegExp {
  const n = direccion.match(/\d{2,}/);
  if (!n) throw new Error(`La dirección '${direccion}' no trae número para elegir la sugerencia`);
  // Límite de dígito y no `\b`: el texto de la opción pega sus párrafos ("Calle Uno 23La Florida").
  return new RegExp(`(?<!\\d)${n[0]}(?!\\d)`);
}

/** El Store Locator recorta con "…": se compara el tramo visible contra la sugerencia elegida. */
function coincideRecortado(visible: string, completa: string): boolean {
  const v = visible.replace(/[….]+$/, '').trim().toLowerCase();
  return v.length > 3 && completa.toLowerCase().startsWith(v);
}

/** Precondición: {DIRECCION_DESPACHO_001} activa y el carro con {SKU_VALID_001}. */
async function prepararCarro(page: Page, testData: LoadedTestData, cp: string, tokenActiva = 'DIRECCION_DESPACHO_001'): Promise<string> {
  const activa = token(testData, tokenActiva)!;
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.fijarDireccionComoInvitado(activa, numero(activa));
  const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
  await pdp.agregarVisible.click();
  await expect(pdp.header.miniCarrito, 'el carro contiene el SKU').toHaveAttribute('aria-label', /\b1\b/, { timeout: 15000 });
  const calle = await pdp.header.direccionDelStoreLocator();
  await pdp.capturarEvidencia(cp, 'pre', 'dirección activa y carro con el SKU', { elemento: pdp.header.barraDelSitio });
  return calle;
}

/** Pasos 1–5: Home, Store Locator, otra dirección confirmada. Devuelve la sugerencia elegida. */
async function confirmarOtraDireccion(
  page: Page,
  direccion: string,
  cp: string,
): Promise<{ home: PaginaHabilitada; modal: MetodoEntregaModal; elegida: string }> {
  const home = await new PaginaHabilitada(page).goto();
  await home.capturarEvidencia(cp, 2, 'Home con la dirección activa', { elemento: home.header.barraDelSitio });
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.capturarModal(cp, 4, 'modal «Elige tu método de entrega»');
  await modal.escribirEnBuscador(direccion);
  const sugerencia = modal.sugerencias.filter({ hasText: numero(direccion) }).first();
  await expect(sugerencia, `sugerencia de Google para ${direccion}`).toBeVisible({ timeout: 30000 });
  const elegida = ((await sugerencia.locator('p').first().textContent()) ?? '').trim();
  await sugerencia.click();
  await modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
  await modal.confirmacionPin.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
  return { home, modal, elegida };
}

async function hastaAgotarse(page: Page, testData: LoadedTestData, cp: string, tokenActiva = 'DIRECCION_DESPACHO_001') {
  const activa = await prepararCarro(page, testData, cp, tokenActiva);
  const r = await confirmarOtraDireccion(page, token(testData, 'DIRECCION_OTRA_TIENDA')!, cp);
  const agotarse = new AgotarseModal(page);
  await expect(agotarse.root, 'modal «Algunos productos podrían agotarse»').toBeVisible({ timeout: 30000 });
  await agotarse.capturar(cp, 6, 'modal «Algunos productos podrían agotarse»', page);
  return { ...r, agotarse, activa };
}


const SESION = path.resolve('.qa/auth/b122-user.json');

function correoDe(testData: LoadedTestData): string {
  return token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
}

/** Inicia sesión con {USER_AUTH_001} reutilizando su storageState; si no sirve, por correo + OTP. */
async function iniciarSesion(page: Page, testData: LoadedTestData): Promise<PaginaHabilitada> {
  if (fs.existsSync(SESION)) {
    const estado = JSON.parse(fs.readFileSync(SESION, 'utf-8'));
    await page.context().addCookies(estado.cookies ?? []);
    const origen = (estado.origins ?? [])[0];
    if (origen?.localStorage?.length) {
      await page.addInitScript((items: { name: string; value: string }[]) => {
        if (sessionStorage.getItem('__b122_ls')) return;
        for (const { name, value } of items) localStorage.setItem(name, value);
        sessionStorage.setItem('__b122_ls', '1');
      }, origen.localStorage);
    }
  }
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  const login = new LoginModal(page);
  const conSesion = await home.header.saludo.waitFor({ state: 'visible', timeout: 20000 }).then(() => true, () => false);
  if (!conSesion) {
    const desde = marcaOtp();
    await login.pedirCodigo(correoDe(testData));
    await login.ingresarCodigo(await esperarOtp(correoDe(testData), desde, { digitos: 6 }));
    fs.mkdirSync(path.dirname(SESION), { recursive: true });
    await page.context().storageState({ path: SESION });
  }
  await login.descartarPasskey();
  return home;
}

/** Precondición de M-011: el carro de la cuenta contiene {SKU_VALID_001}. */
async function asegurarCarroConSku(page: Page, testData: LoadedTestData): Promise<void> {
  const carro = await new CarroPage(page).goto();
  await expect(carro.carroVacio.or(carro.totalUnidades)).toBeVisible({ timeout: 30000 });
  if (await carro.carroVacio.isVisible()) {
    const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
    await pdp.agregarVisible.click();
    await expect(pdp.cantidadEnCarro).toBeVisible({ timeout: 15000 });
  }
}

test.describe('B2C-122 — Cambio de dirección con carro', () => {
  for (const [ff, vp, sufijo, L] of [
    ['Desktop 1440x900', DESKTOP, 'Desktop', 'D'],
    ['Mobile 390x844', MOBILE, 'Mobile', 'M'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);

      if (L === 'M') {
        test(`TC-B2C122-M-001 · Cambiar a una dirección de otra tienda abastecedora con carro muestra el modal [Guest] (${sufijo})`, async ({ page, testData }) => {
          const cp = 'TC-B2C122-M-001';
          const { agotarse } = await hastaAgotarse(page, testData, cp);
          await expect(agotarse.titulo).toBeVisible();
          await expect(agotarse.botonSi).toBeVisible();
          await expect(agotarse.botonNo).toBeVisible();
          await expect(agotarse.botonCerrar, 'ícono X').toBeVisible();
          await agotarse.capturar(cp);
          await expect(agotarse.texto, 'texto del modal').toHaveText(TEXTO);
        });
      }

      // D/M-004 (X), M-003 (No, gracias): el modal se cierra sin aplicar el cambio.
      for (const [n, cierre] of (L === 'D' ? [['004', 'X']] : [['003', 'No, gracias'], ['004', 'X']]) as [string, string][]) {
        test(`TC-B2C122-${L}-${n} · ${cierre === 'X' ? 'La X' : '«No, gracias»'} cierra el modal sin aplicar el cambio [Guest] (${sufijo})`, async ({ page, testData }) => {
          const cp = `TC-B2C122-${L}-${n}`;
          const { home, modal, agotarse, activa } = await hastaAgotarse(page, testData, cp);
          await (cierre === 'X' ? agotarse.botonCerrar : agotarse.botonNo).click();
          await expect(agotarse.root, 'el modal se cierra').toBeHidden({ timeout: 15000 });
          await agotarse.capturar(cp, 7, `tras ${cierre}`, page);
          // Con el drawer abierto, Chakra deja el header fuera del árbol de accesibilidad: la
          // dirección activa se lee en el bloque «Dirección de despacho» del propio drawer.
          await expect(modal.direccionActiva, 'la dirección activa no cambia').toContainText(activa);
          await expect(home.header.miniCarrito, 'el carro no cambia').toHaveAttribute('aria-label', /\b1\b/);
          await home.capturarEvidencia(cp, undefined, undefined, { elemento: home.header.barraDelSitio });
        });
      }

      test(`TC-B2C122-${L}-005 · «Sí, continuar» reemplaza el botón por un spinner mientras procesa [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C122-${L}-005`;
        const { agotarse } = await hastaAgotarse(page, testData, cp);
        await agotarse.observarSpinner();
        await agotarse.botonSi.click();
        await expect(agotarse.root, 'el cambio termina de procesarse').toBeHidden({ timeout: 45000 });
        const visto = await agotarse.spinnerObservado();
        await agotarse.capturar(cp, undefined, undefined, page);
        expect(visto.length, `«Sí, continuar» pasa a spinner (visto: ${JSON.stringify([...new Set(visto)])})`).toBeGreaterThan(0);
      });

      test(`TC-B2C122-${L}-007 · Con todo disponible el cambio se aplica y se mantiene la página [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C122-${L}-007`;
        const { home, agotarse, elegida } = await hastaAgotarse(page, testData, cp);
        const origen = page.url();
        await agotarse.botonSi.click();
        await expect(agotarse.root, 'el modal se cierra').toBeHidden({ timeout: 45000 });
        await expect
          .poll(async () => coincideRecortado(await home.header.direccionDelStoreLocator(), elegida), {
            message: `Store Locator con '${elegida}'`,
            timeout: 45000,
          })
          .toBe(true);
        expect(page.url(), 'permanece en la página de origen').toBe(origen);
        await home.capturarEvidencia(cp, 7, 'Store Locator con la nueva dirección', { elemento: home.header.barraDelSitio });
        await home.capturarEvidencia(cp);
      });

      test(`TC-B2C122-${L}-009 · Tras el cambio el invitado ve el prompt de login y puede seguir como invitado [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C122-${L}-009`;
        const { home, agotarse, elegida } = await hastaAgotarse(page, testData, cp);
        await agotarse.botonSi.click();
        await expect(agotarse.root, 'el modal se cierra').toBeHidden({ timeout: 45000 });
        await expect
          .poll(async () => coincideRecortado(await home.header.direccionDelStoreLocator(), elegida), { timeout: 45000 })
          .toBe(true);
        const login = new LoginModal(page);
        const prompt = login.dialogo;
        await prompt.waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
        await home.capturarEvidencia(cp, 8, 'tras «Sí, continuar»');
        await expect(prompt, 'prompt de inicio de sesión tras el cambio').toBeVisible();
        await prompt.getByRole('button', { name: /^cerrar$/i }).click();
        await expect(prompt).toBeHidden();
        await expect(login.disparador, 'sigue como invitado').toBeVisible();
        await home.capturarEvidencia(cp);
      });

      test(`TC-B2C122-${L}-012 · Cerrar con «No, gracias» o X deja el Store Locator abierto y sin cambios [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C122-${L}-012`;
        const { home, modal, agotarse, activa } = await hastaAgotarse(page, testData, cp);
        const otra = token(testData, 'DIRECCION_OTRA_TIENDA')!;
        for (const [paso, cierre] of [[7, 'No, gracias'], [11, 'X']] as const) {
          if (cierre === 'X') {
            // Paso 11: repetir 6–10 con la X, desde el Store Locator que quedó abierto.
            await modal.escribirEnBuscador(otra);
            await modal.sugerencias.filter({ hasText: numero(otra) }).first().click();
            await modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
            await modal.confirmacionPin.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
            await expect(agotarse.root, 'vuelve el modal').toBeVisible({ timeout: 30000 });
          }
          await (cierre === 'X' ? agotarse.botonCerrar : agotarse.botonNo).click();
          await expect(agotarse.root, `el modal se cierra con ${cierre}`).toBeHidden({ timeout: 15000 });
          await expect(modal.encabezado, `el Store Locator sigue abierto tras ${cierre}`).toBeVisible();
          await modal.capturarModal(cp, paso, `Store Locator abierto tras ${cierre}`, page);
          await expect(modal.direccionActiva, `la dirección activa no cambia (${cierre})`).toContainText(activa);
          await expect(home.header.miniCarrito, `el carro no cambia (${cierre})`).toHaveAttribute('aria-label', /\b1\b/);
        }
        await modal.capturarModal(cp, undefined, undefined, page);
      });
    });
  }

  for (const [ff, vp, sufijo, L] of [
    ['Desktop 1440x900', DESKTOP, 'Desktop', 'D'],
    ['Mobile 390x844', MOBILE, 'Mobile', 'M'],
  ] as const) {
    test.describe(`${ff} · cuenta con sesión`, () => {
      test.use(vp);
      test.describe.configure({ timeout: 240000 });

      test(`TC-B2C122-${L}-010 · Un invitado que inicia sesión desde el prompt pasa al flujo invitado a logueado [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C122-${L}-010`;
        const { home, agotarse, elegida } = await hastaAgotarse(page, testData, cp);
        await agotarse.botonSi.click();
        await expect(agotarse.root, 'el modal se cierra').toBeHidden({ timeout: 45000 });
        await expect
          .poll(async () => coincideRecortado(await home.header.direccionDelStoreLocator(), elegida), { timeout: 45000 })
          .toBe(true);

        // Paso 8: el prompt de inicio de sesión.
        const login = new LoginModal(page);
        await expect(login.dialogo, 'prompt de inicio de sesión').toBeVisible({ timeout: 15000 });
        await home.capturarEvidencia(cp, 8, 'prompt de inicio de sesión');

        // Paso 9: iniciar sesión con {USER_AUTH_001}. Esperado: se solicita el OTP.
        await login.campoCorreo.fill(correoDe(testData));
        await login.dialogo.getByRole('button', { name: /^ingresar$/i }).click();
        await expect(login.primerDigito, 'se solicita el código OTP').toBeVisible({ timeout: 30000 });
        await expect(
          page.getByRole('dialog').filter({ has: page.getByRole('textbox', { name: /d[íi]gito 1 de/i }) }),
          'modal de autenticación con el envío del código al correo',
        ).toContainText(/c[óo]digo|autenticaci[óo]n/i);
        await home.capturarEvidencia(cp, 9, 'se solicita el código OTP');
        await home.capturarEvidencia(cp);
      });

      test(`TC-B2C122-${L}-011 · El modal también aparece al cambiar la tienda de retiro con carro [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C122-${L}-011`;
        await iniciarSesion(page, testData);
        await asegurarCarroConSku(page, testData);

        // Pasos 1–4: Home, Store Locator, pestaña "Retiro en tienda".
        const home = await new PaginaHabilitada(page).goto();
        await home.capturarEvidencia(cp, 2, 'Home con sesión iniciada');
        await home.header.storeLocator.click();
        const modal = await new MetodoEntregaModal(page).esperarAbierto();
        await modal.tabRetiroEnTienda.click();
        await modal.capturarModal(cp, 4, 'pestaña Retiro en tienda', page);

        // Paso 5: elegir {TIENDA_RETIRO_001} y "Confirmar tienda". El sitio puede pedir el OTP antes o después del modal.
        const agotarse = new AgotarseModal(page);
        const desde = marcaOtp();
        await modal.elegirTienda(token(testData, 'TIENDA_RETIRO_001')!);
        await expect(agotarse.root.or(modal.modalOtp), 'aparece "Autenticación requerida" o el modal de agotarse').toBeVisible({ timeout: 30000 });
        if (await modal.modalOtp.isVisible()) {
          await modal.capturarModal(cp, 6, 'Autenticación requerida', page);
          await new LoginModal(page).escribirCodigo(await esperarOtp(correoDe(testData), desde, { digitos: 6 }));
          await modal.modalOtp.waitFor({ state: 'hidden', timeout: 30000 });
        }

        // Esperado: "Algunos productos podrían agotarse" antes de aplicar el cambio de tienda de retiro.
        await expect(agotarse.root, 'modal «Algunos productos podrían agotarse»').toBeVisible({ timeout: 30000 });
        await expect(agotarse.texto, 'texto del modal').toHaveText(TEXTO);
        await agotarse.capturar(cp, 8, 'modal «Algunos productos podrían agotarse»', page);
        // No se aplica el cambio: se cierra con «No, gracias».
        await agotarse.botonNo.click();
        await expect(agotarse.root, 'el modal se cierra sin aplicar el cambio').toBeHidden({ timeout: 15000 });
        await agotarse.capturar(cp, undefined, undefined, page);
      });
      });
  }
  // D-001, D-002, D-003 y M-002 declaran como dirección activa {DIRECCION_DESPACHO_003} (su
  // precondición escrita todavía dice {DIRECCION_DESPACHO_001}): se corren con la que declara la fila.
  for (const [ff, vp, sufijo, L] of [
    ['Desktop 1440x900', DESKTOP, 'Desktop', 'D'],
    ['Mobile 390x844', MOBILE, 'Mobile', 'M'],
  ] as const) {
    test.describe(`${ff} · dirección activa {DIRECCION_DESPACHO_003}`, () => {
      test.use(vp);
      const ACTIVA = 'DIRECCION_DESPACHO_003';

      if (L === 'D') {
        test(`TC-B2C122-D-001 · Cambiar a una dirección de otra tienda abastecedora con carro muestra el modal [Guest] (${sufijo})`, async ({ page, testData }) => {
          const cp = 'TC-B2C122-D-001';
          const { agotarse } = await hastaAgotarse(page, testData, cp, ACTIVA);
          await expect(agotarse.titulo).toBeVisible();
          await expect(agotarse.botonSi).toBeVisible();
          await expect(agotarse.botonNo).toBeVisible();
          await expect(agotarse.botonCerrar, 'ícono X').toBeVisible();
          await agotarse.capturar(cp);
          await expect(agotarse.texto, 'texto del modal').toHaveText(TEXTO);
        });

        test(`TC-B2C122-D-003 · «No, gracias» cierra el modal sin aplicar el cambio [Guest] (${sufijo})`, async ({ page, testData }) => {
          const cp = 'TC-B2C122-D-003';
          const { home, modal, agotarse, activa } = await hastaAgotarse(page, testData, cp, ACTIVA);
          await agotarse.botonNo.click();
          await expect(agotarse.root, 'el modal se cierra').toBeHidden({ timeout: 15000 });
          await agotarse.capturar(cp, 7, 'tras No, gracias', page);
          await expect(modal.direccionActiva, 'la dirección activa no cambia').toContainText(activa);
          await expect(home.header.miniCarrito, 'el carro no cambia').toHaveAttribute('aria-label', /\b1\b/);
          await home.capturarEvidencia(cp, undefined, undefined, { elemento: home.header.barraDelSitio });
        });
      }

      test(`TC-B2C122-${L}-002 · Una dirección de la misma tienda abastecedora se aplica sin modal [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C122-${L}-002`;
        await prepararCarro(page, testData, cp, ACTIVA);
        const { home, elegida } = await confirmarOtraDireccion(page, token(testData, 'DIRECCION_MISMA_TIENDA')!, cp);
        await expect
          .poll(async () => coincideRecortado(await home.header.direccionDelStoreLocator(), elegida), {
            message: `Store Locator con '${elegida}'`,
            timeout: 45000,
          })
          .toBe(true);
        await expect(new AgotarseModal(page).root, 'no se muestra el modal').toBeHidden();
        await home.capturarEvidencia(cp, 5, 'Store Locator con la nueva dirección, sin modal', { elemento: home.header.barraDelSitio });
        await home.capturarEvidencia(cp);
      });
    });
  }
});
