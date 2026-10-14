import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { PDPPage } from './pages/PDPPage';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { LoginModal } from './pages/LoginModal';
import { esperarOtp, marcaOtp } from './support/otp';
import { LoadedTestData } from './support/testData';
import { CarroPage } from './pages/CarroPage';
import { DatosEntregaPage } from './pages/DatosEntregaPage';
import { AgotarseModal } from './pages/AgotarseModal';

/**
 * B2C-123 — Sin cobertura: el modal "Aún no llegamos a esta dirección".
 *
 * Re-ejecución completa del 2026-10-14 tras cambios en la planilla: {USER_AUTH_001} pasó a ser el
 * alias vhchirinos+comprador (el OTP llega al Gmail conectado), así que D/M-002 y 009 ya corren.
 *
 * Quedan sin `test()`:
 * - D/M-008: la precondición pide el carro con {SKU_VALID_001} antes de la dirección sin
 *   cobertura, y un invitado sin dirección no puede agregar ("Agregar" abre el drawer): haría
 *   falta una dirección con cobertura que la fila no declara.
 * - D/M-010, 011 y 012: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura) no es una
 *   cuenta registrada en DEV: al pedir el código, el sitio abre "Crear cuenta". 012 además tiene
 *   {JANIS_API_ENDPOINT} en TBD.
 */

/** Sesión de {USER_AUTH_001}, compartida con B2C-189 (misma cuenta). No se commitea. */
const SESION = path.resolve('.qa/auth/b189-user.json');

function correoUsuario(testData: LoadedTestData): string {
  return token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
}

/** Inicia sesión reutilizando el storageState guardado; si no sirve, por correo + OTP. */
async function iniciarSesion(page: Page, testData: LoadedTestData): Promise<PaginaHabilitada> {
  if (fs.existsSync(SESION)) {
    const estado = JSON.parse(fs.readFileSync(SESION, 'utf-8'));
    await page.context().addCookies(estado.cookies ?? []);
    const origen = (estado.origins ?? [])[0];
    if (origen?.localStorage?.length) {
      await page.addInitScript((items: { name: string; value: string }[]) => {
        if (sessionStorage.getItem('__b123_ls')) return;
        for (const { name, value } of items) localStorage.setItem(name, value);
        sessionStorage.setItem('__b123_ls', '1');
      }, origen.localStorage);
    }
  }
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  const login = new LoginModal(page);
  const conSesion = await home.header.saludo.waitFor({ state: 'visible', timeout: 20000 }).then(() => true, () => false);
  if (!conSesion) {
    const desde = marcaOtp();
    await login.pedirCodigo(correoUsuario(testData));
    await login.ingresarCodigo(await esperarOtp(correoUsuario(testData), desde, { digitos: 6 }));
  }
  await login.descartarPasskey();
  fs.mkdirSync(path.dirname(SESION), { recursive: true });
  await page.context().storageState({ path: SESION });
  return home;
}

/** "Algunos productos podrían agotarse" → "Sí, continuar" (si aparece) y el OTP de "Autenticación requerida". */
async function confirmarConOtp(page: Page, testData: LoadedTestData): Promise<void> {
  const agotarse = new AgotarseModal(page);
  const desde = marcaOtp();
  if (await agotarse.root.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) {
    await agotarse.botonSi.click();
  }
  const modal = new MetodoEntregaModal(page);
  if (await modal.modalOtp.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) {
    await new LoginModal(page).escribirCodigo(await esperarOtp(correoUsuario(testData), desde, { digitos: 6 }));
    await modal.modalOtp.waitFor({ state: 'hidden', timeout: 30000 });
  }
}

/** Deja activa la guardada "Casa" ({DIRECCION_DESPACHO_001}) si el header muestra otra cosa. */
async function asegurarCasa(page: Page, testData: LoadedTestData): Promise<PaginaHabilitada> {
  const home = await new PaginaHabilitada(page).goto();
  await home.header.storeLocator.waitFor({ state: 'visible', timeout: 30000 });
  await page.waitForTimeout(3000);
  const enHeader = ((await home.header.storeLocator.innerText()) ?? '').replace(/\s+/g, ' ').trim();
  if (/^(casa\b|calle uno 23)/i.test(enHeader) && !/sin cobertura/i.test(enHeader)) return home;
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.tabDespachoDomicilio.click();
  await modal.root.getByRole('button').filter({ hasText: token(testData, 'DIRECCION_DESPACHO_001')! }).first().click();
  await confirmarConOtp(page, testData);
  await page.waitForTimeout(3000);
  return new PaginaHabilitada(page).goto();
}

/** Deja el carro con {SKU_VALID_001} (al menos una unidad). */
async function asegurarCarro(page: Page, testData: LoadedTestData): Promise<void> {
  const carro = await new CarroPage(page).goto();
  await expect(carro.carroVacio.or(carro.totalUnidades)).toBeVisible({ timeout: 30000 });
  if (await carro.carroVacio.isVisible()) {
    const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
    await pdp.agregarVisible.click();
    await expect(pdp.cantidadEnCarro).toBeVisible({ timeout: 15000 });
  }
}

const MENSAJE =
  'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc';
const TOAST = 'No tenemos cobertura para la dirección actual, seleccione otra dirección';

/** La sugerencia de Google se reconoce por el primer tramo de la dirección ("T-551"). */
function tramo(direccion: string): RegExp {
  return new RegExp(direccion.split(',')[0].trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
}

async function abrirModal(page: Page): Promise<{ home: PaginaHabilitada; modal: MetodoEntregaModal }> {
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  return { home, modal };
}

/** Busca la dirección, la elige de las sugerencias y la confirma (B2C-99) hasta "Aún no llegamos". */
async function confirmarSinCobertura(modal: MetodoEntregaModal, direccion: string, cp: string, paso: number | string): Promise<void> {
  await modal.campoBusqueda.click();
  await modal.campoBusqueda.pressSequentially(direccion, { delay: 60 });
  const sugerencia = modal.sugerencias.filter({ hasText: tramo(direccion) }).first();
  await expect(sugerencia, `sugerencia de Google para ${direccion}`).toBeVisible({ timeout: 30000 });
  await modal.capturarModal(cp, paso, `sugerencia para ${direccion}`);
  await sugerencia.click();
  await modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
  await modal.confirmacionPin.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
  await expect(modal.modalSinCobertura, 'modal «Aún no llegamos a esta dirección»').toBeVisible({ timeout: 30000 });
}

/** Deja la dirección sin cobertura aplicada con "Continuar con esta dirección". */
async function continuarSinCobertura(page: Page, modal: MetodoEntregaModal): Promise<void> {
  await modal.modalSinCobertura.getByRole('button', { name: /^continuar con esta direcci[óo]n$/i }).click();
  await expect(modal.modalSinCobertura).toBeHidden({ timeout: 30000 });
}

test.describe('B2C-123 — Sin cobertura', () => {
  for (const [ff, vp, sufijo, L] of [
    ['Desktop 1440x900', DESKTOP, 'Desktop', 'D'],
    ['Mobile 390x844', MOBILE, 'Mobile', 'M'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);

      test(`TC-B2C123-${L}-001 · Dirección nueva fuera de zona muestra el modal «Aún no llegamos» con sus opciones [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C123-${L}-001`;
        const direccion = token(testData, 'DIRECCION_SIN_COBERTURA')!;
        const { modal } = await abrirModal(page);
        await modal.capturarModal(cp, 4, 'modal «Elige tu método de entrega»');
        await confirmarSinCobertura(modal, direccion, cp, 5);

        const sinCobertura = modal.modalSinCobertura;
        await modal.capturarModal(cp, 6, 'modal «Aún no llegamos a esta dirección»', page);
        await expect(sinCobertura.getByText(/^a[uú]n no llegamos a esta direcci[óo]n$/i)).toBeVisible();
        await expect(sinCobertura.getByRole('button', { name: /^continuar con esta direcci[óo]n$/i })).toBeVisible();
        await expect(sinCobertura.getByRole('button', { name: /^cambiar m[ée]todo de entrega$/i })).toBeVisible();
        await modal.capturarModal(cp, undefined, undefined, sinCobertura);
        await expect(sinCobertura.getByText(/^revisa que est/i), 'mensaje del modal').toHaveText(MENSAJE);
      });

      test(`TC-B2C123-${L}-003 · Continuar sin carro setea la dirección con la etiqueta «Despacho sin cobertura» [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C123-${L}-003`;
        const direccion = token(testData, 'DIRECCION_SIN_COBERTURA')!;
        const calle = direccion.split(',')[0].trim();
        const { home, modal } = await abrirModal(page);
        await expect(home.header.miniCarrito).toHaveAttribute('aria-label', /\b0\b/);
        await confirmarSinCobertura(modal, direccion, cp, 5);
        await modal.capturarModal(cp, 6, 'modal «Aún no llegamos a esta dirección»', page);

        await modal.observarCarga();
        await continuarSinCobertura(page, modal);
        const carga = await modal.cargaObservada();
        expect(carga.spinner || carga.skeleton, 'loader tras «Continuar con esta dirección»').toBe(true);

        await expect(home.header.storeLocator, 'dirección seteada').toContainText(calle, { timeout: 30000 });
        await expect(home.header.storeLocator, 'etiqueta «Despacho sin cobertura»').toContainText(/despacho sin cobertura/i);
        await home.capturarEvidencia(cp, 8, 'dirección seteada con «Despacho sin cobertura»', { elemento: home.header.barraDelSitio });

        const plp = await new PaginaHabilitada(page, 'category/carnes_vacuno', 'PLP').goto();
        await expect(plp.header.storeLocator, 'la etiqueta sigue en la PLP').toContainText(calle, { timeout: 30000 });
        await expect(plp.header.storeLocator).toContainText(/despacho sin cobertura/i);
        await plp.capturarEvidencia(cp, 9, 'PLP con «Despacho sin cobertura»', { elemento: plp.header.barraDelSitio });
        await plp.capturarEvidencia(cp);
      });

      test(`TC-B2C123-${L}-005 · «Cambiar método de entrega» vuelve al modal «Elige tu método de entrega» [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C123-${L}-005`;
        const { home, modal } = await abrirModal(page);
        await confirmarSinCobertura(modal, token(testData, 'DIRECCION_SIN_COBERTURA')!, cp, 5);
        await modal.capturarModal(cp, 6, 'modal «Aún no llegamos a esta dirección»', page);
        await modal.modalSinCobertura.getByRole('button', { name: /^cambiar m[ée]todo de entrega$/i }).click();
        await expect(modal.modalSinCobertura, 'el modal sin cobertura se cierra').toBeHidden({ timeout: 15000 });
        await expect(modal.encabezado, 'vuelve «Elige tu método de entrega»').toBeVisible();
        await modal.capturarModal(cp, undefined, undefined, page);
      });

      test(`TC-B2C123-${L}-007 · Con dirección sin cobertura, agregar un producto se bloquea con un toast [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C123-${L}-007`;
        const direccion = token(testData, 'DIRECCION_SIN_COBERTURA')!;
        const { home, modal } = await abrirModal(page);
        await confirmarSinCobertura(modal, direccion, cp, 'pre');
        await continuarSinCobertura(page, modal);
        await expect(home.header.storeLocator).toContainText(/despacho sin cobertura/i, { timeout: 30000 });
        await home.capturarEvidencia(cp, 2, 'Home con «Despacho sin cobertura»', { elemento: home.header.barraDelSitio });

        const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
        await expect(pdp.header.miniCarrito).toHaveAttribute('aria-label', /\b0\b/);
        await pdp.agregarVisible.click();
        const toast = page.locator('[role="status"]').locator('visible=true').first();
        await expect(toast, 'toast de error').toBeVisible({ timeout: 15000 });
        await pdp.capturarEvidencia(cp, 3, 'toast tras «Agregar»');
        await expect(toast.getByRole('button'), 'X de cierre manual').toBeVisible();
        await page.waitForTimeout(3000);
        await expect(pdp.header.miniCarrito, 'el producto no se agrega al carro').toHaveAttribute('aria-label', /\b0\b/);
        await pdp.capturarEvidencia(cp);
        await expect(toast, 'texto del toast').toContainText(TOAST);
      });

      test(`TC-B2C123-${L}-004 · Continuar con carro y otra tienda abastecedora deriva al modal «Algunos productos podrían agotarse» [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C123-${L}-004`;
        const activa = token(testData, 'DIRECCION_DESPACHO_001')!;
        // Precondición: dirección activa {DIRECCION_DESPACHO_001} y el carro con {SKU_VALID_001}.
        let { modal } = await abrirModal(page);
        await modal.fijarDireccionComoInvitado(activa, tramo(activa));
        const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
        await pdp.agregarVisible.click();
        await expect(pdp.header.miniCarrito, 'el carro contiene el SKU').toHaveAttribute('aria-label', /\b1\b/, { timeout: 15000 });
        await pdp.capturarEvidencia(cp, 'pre', 'carro con el SKU y dirección activa', { elemento: pdp.header.barraDelSitio });

        ({ modal } = await abrirModal(page));
        await modal.capturarModal(cp, 4, 'modal «Elige tu método de entrega»');
        await confirmarSinCobertura(modal, token(testData, 'DIRECCION_SIN_COBERTURA')!, cp, 5);
        await modal.capturarModal(cp, 6, 'modal «Aún no llegamos a esta dirección»', page);
        await modal.observarCarga();
        await modal.modalSinCobertura.getByRole('button', { name: /^continuar con esta direcci[óo]n$/i }).click();

        const agotarse = page.locator('[role="dialog"]').filter({ hasText: /algunos productos podr[íi]an agotarse/i }).locator('visible=true').first();
        await expect(agotarse, 'modal «Algunos productos podrían agotarse» (B2C-126)').toBeVisible({ timeout: 30000 });
        const carga = await modal.cargaObservada();
        expect(carga.spinner || carga.skeleton, 'loader tras «Continuar con esta dirección»').toBe(true);
        await modal.capturarModal(cp, undefined, undefined, page);
      });

      test(`TC-B2C123-${L}-006 · Una nueva dirección con cobertura se setea y vuelve a la página de origen [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C123-${L}-006`;
        const nueva = token(testData, 'DIRECCION_DESPACHO_001')!;
        const plp = await new PaginaHabilitada(page, rel(token(testData, 'PLP_URL')!), 'PLP').goto();
        await plp.cookies.aceptarSiAparece();
        const urlOrigen = page.url();
        await plp.header.storeLocator.click();
        const modal = await new MetodoEntregaModal(page).esperarAbierto();
        await confirmarSinCobertura(modal, token(testData, 'DIRECCION_SIN_COBERTURA')!, cp, 3);
        await modal.capturarModal(cp, 4, 'modal «Aún no llegamos a esta dirección»', page);
        await modal.modalSinCobertura.getByRole('button', { name: /^cambiar m[ée]todo de entrega$/i }).click();
        await expect(modal.modalSinCobertura).toBeHidden({ timeout: 15000 });
        await expect(modal.encabezado).toBeVisible();
        await modal.capturarModal(cp, 5, 'de vuelta en «Elige tu método de entrega»');

        await modal.fijarDireccionComoInvitado(nueva, tramo(nueva));
        await expect(modal.root, 'el modal se cierra').toBeHidden({ timeout: 30000 });
        await expect(plp.header.storeLocator, 'Store Locator con la nueva dirección').toContainText(nueva.split(',')[0].trim());
        await expect(plp.header.storeLocator).not.toContainText(/sin cobertura/i);
        expect(page.url(), 'sigue en la PLP de origen').toBe(urlOrigen);
        await plp.capturarEvidencia(cp, 6, 'PLP con la nueva dirección', { elemento: plp.header.barraDelSitio });
        await plp.capturarEvidencia(cp);
      });

      test(`TC-B2C123-${L}-013 · Tienda de retiro sin cobertura de despacho muestra el modal «Aún no llegamos» [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C123-${L}-013`;
        const tienda = token(testData, 'TIENDA_RETIRO_SIN_COBERTURA')!;
        const { home, modal } = await abrirModal(page);
        await home.capturarEvidencia(cp, 2, 'Home cargado', { elemento: home.header.barraDelSitio });
        await modal.capturarModal(cp, 4, 'modal «Elige tu método de entrega»');

        await modal.tabRetiroEnTienda.click();
        await expect(modal.tituloSeleccionTienda).toBeVisible();
        // El buscador de tiendas filtra por ubicación, no por nombre ("Unimarc Los Lagos II" da
        // "Parece que hoy no encontramos esa tienda"): si la tienda no está entre las de la lista
        // inicial, se filtra por la localidad que trae su propio nombre ("Los Lagos").
        const opcion = modal.root.locator('button').filter({ hasText: tienda }).filter({ has: page.locator('input[type="radio"]') }).first();
        await page.waitForTimeout(3000);
        if (!(await opcion.isVisible())) {
          await modal.campoBuscarTienda.click();
          await modal.campoBuscarTienda.pressSequentially(tienda.replace(/^unimarc\s+/i, '').replace(/\s+[IVX]+$/, ''), { delay: 80 });
        }
        await expect(opcion, `tienda ${tienda} en la lista`).toBeVisible({ timeout: 30000 });
        await opcion.click();
        await expect(opcion.locator('input[type="radio"]')).toBeChecked();
        await modal.capturarModal(cp, 6, `tienda ${tienda} seleccionada`);
        await modal.root.getByRole('button', { name: /confirmar tienda/i }).click();

        const sinCobertura = modal.modalSinCobertura;
        await expect(sinCobertura, 'modal «Aún no llegamos a esta dirección»').toBeVisible({ timeout: 30000 });
        await modal.capturarModal(cp, 7, 'modal «Aún no llegamos a esta dirección»', page);
        await expect(sinCobertura.getByText(/^a[uú]n no llegamos a esta direcci[óo]n$/i)).toBeVisible();
        await expect(sinCobertura.getByRole('button', { name: /^continuar con esta direcci[óo]n$/i })).toBeVisible();
        await expect(sinCobertura.getByRole('button', { name: /^cambiar m[ée]todo de entrega$/i })).toBeVisible();
        await modal.capturarModal(cp, undefined, undefined, sinCobertura);
        await expect(sinCobertura.getByText(/^revisa que est/i), 'mensaje del modal').toHaveText(MENSAJE);
      });

      test(`TC-B2C123-${L}-002 · Una dirección guardada sin cobertura muestra el modal tras validar OTP [Logueado] (${sufijo})`, async ({ page, testData }) => {
        test.setTimeout(300000);
        const cp = `TC-B2C123-${L}-002`;
        const direccion = token(testData, 'DIRECCION_SIN_COBERTURA')!;
        await iniciarSesion(page, testData);
        const home = await asegurarCasa(page, testData);
        await home.capturarEvidencia(cp, 2, 'Home con sesión y la dirección «Casa»', { elemento: home.header.barraDelSitio });

        await home.header.storeLocator.click();
        const modal = await new MetodoEntregaModal(page).esperarAbierto();
        await modal.tabDespachoDomicilio.click();
        // La guardada se dejó preparada en la cuenta como precondición (agregada el 2026-10-14).
        const guardada = modal.root.getByRole('button').filter({ hasText: direccion }).first();
        await expect(guardada, `la cuenta tiene guardada ${direccion}`).toBeVisible({ timeout: 20000 });
        await modal.capturarModal(cp, 3, 'direcciones guardadas');
        await guardada.click();
        await confirmarConOtp(page, testData);

        await expect(modal.modalSinCobertura, 'modal «Aún no llegamos a esta dirección» tras el OTP').toBeVisible({ timeout: 30000 });
        await modal.capturarModal(cp, 5, 'modal «Aún no llegamos a esta dirección»', page);
        await expect(modal.modalSinCobertura.getByRole('button', { name: /^continuar con esta direcci[óo]n$/i })).toBeVisible();
        await expect(modal.modalSinCobertura.getByRole('button', { name: /^cambiar m[ée]todo de entrega$/i })).toBeVisible();
        await modal.capturarModal(cp, undefined, undefined, modal.modalSinCobertura);
      });

      test(`TC-B2C123-${L}-009 · Continuar con la dirección sin cobertura desde Mis envíos lleva al Home [Logueado] (${sufijo})`, async ({ page, testData }) => {
        test.setTimeout(300000);
        const cp = `TC-B2C123-${L}-009`;
        const direccion = token(testData, 'DIRECCION_SIN_COBERTURA')!;
        await iniciarSesion(page, testData);
        await asegurarCasa(page, testData);
        await asegurarCarro(page, testData);

        const carro = await new CarroPage(page).goto();
        await expect(carro.titulo).toBeVisible({ timeout: 30000 });
        await carro.capturarEvidencia(cp, 2, 'carro cargado');
        await carro.continuarConLaEntrega();
        const entrega = new DatosEntregaPage(page);
        await entrega.waitUntilReady();
        await expect(entrega.botonCambiarUbicacion).toBeVisible({ timeout: 30000 });
        await entrega.capturarEvidencia(cp, 4, 'Mis Envíos');

        await entrega.botonCambiarUbicacion.click();
        const modal = await new MetodoEntregaModal(page).esperarAbierto();
        await modal.elegirSugerencia(direccion, tramo(direccion));
        await modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
        await modal.confirmacionPin.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
        await expect(modal.modalSinCobertura, 'modal «Aún no llegamos a esta dirección»').toBeVisible({ timeout: 30000 });
        await modal.capturarModal(cp, 7, 'modal «Aún no llegamos a esta dirección»', page);
        await modal.modalSinCobertura.getByRole('button', { name: /^continuar con esta direcci[óo]n$/i }).click();
        await confirmarConOtp(page, testData);

        await expect(page, 'redirige al Home').toHaveURL(/exp-delivery\.com\/?(\?.*)?$/, { timeout: 45000 });
        const home = new PaginaHabilitada(page);
        await expect(home.header.storeLocator, 'Store Locator con la dirección sin cobertura').toContainText(direccion.split(',')[0].trim(), { timeout: 30000 });
        await expect(home.header.storeLocator, 'etiqueta «Despacho sin cobertura»').toContainText(/despacho sin cobertura/i);
        await home.capturarEvidencia(cp, 8, 'Home con la dirección sin cobertura', { elemento: home.header.barraDelSitio });
        await home.capturarEvidencia(cp);
      });
    });
  }
});

function rel(url: string): string {
  const u = new URL(url);
  return (u.pathname + u.search).replace(/^\//, '');
}
