import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { LoadedTestData } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { PDPPage } from './pages/PDPPage';
import { CarroPage } from './pages/CarroPage';
import { DatosEntregaPage, Metodo, pesos } from './pages/DatosEntregaPage';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { AgotarseModal } from './pages/AgotarseModal';
import { LoginModal } from './pages/LoginModal';
import { esperarOtp, marcaOtp } from './support/otp';

/**
 * B2C-148 — Checkout "Datos de entrega": cambiar la fecha y el horario de la ventana.
 *
 * Precondición común: sesión con {USER_AUTH_001}, el carro con {SKU_VALID_001} ×
 * {UNIDADES_SOBRE_MINIMO} (subtotal ≥ {MONTO_MINIMO_COMPRA}) y el método de entrega del TC:
 * despacho a {DIRECCION_DESPACHO_001} o retiro en {TIENDA_RETIRO_001}. Se arma en cada test() solo
 * si falta, porque cambiar de método con sesión iniciada pide otro OTP ("Autenticación requerida").
 *
 * La sesión se guarda en `.qa/auth/b148-user.json` (no se commitea) y se reutiliza entre casos y
 * motores; si venció, se vuelve a entrar con correo + OTP.
 *
 * Quedan sin `test()`: D/M-003 y 006, {VENTANA_API_ENDPOINT} en TBD en el Excel de data.
 */

const SESION = path.resolve('.qa/auth/b148-user.json');
const TOAST_DESPACHO = /^la fecha de despacho ha sido actualizada correctamente\.?$/i;
const TOAST_RETIRO = /^la fecha de retiro ha sido actualizada correctamente\.?$/i;

function correo(testData: LoadedTestData): string {
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
        if (sessionStorage.getItem('__b148_ls')) return;
        for (const { name, value } of items) localStorage.setItem(name, value);
        sessionStorage.setItem('__b148_ls', '1');
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
    fs.mkdirSync(path.dirname(SESION), { recursive: true });
    await page.context().storageState({ path: SESION });
  }
  await login.descartarPasskey();
  return home;
}

/** Tras "Sí, continuar" del modal de agotarse, el sitio puede pedir el OTP de "Autenticación requerida". */
async function confirmarCambio(page: Page, testData: LoadedTestData): Promise<void> {
  const agotarse = new AgotarseModal(page);
  const desde = marcaOtp();
  if (await agotarse.root.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) {
    await agotarse.botonSi.click();
  }
  const login = new LoginModal(page);
  const otp = page.getByRole('dialog').filter({ hasText: /autenticaci[óo]n requerida/i });
  if (await otp.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) {
    await login.escribirCodigo(await esperarOtp(correo(testData), desde, { digitos: 6 }));
    await otp.waitFor({ state: 'hidden', timeout: 30000 });
  }
  await page.waitForTimeout(3000);
}

/** Deja activo el método del TC; solo lo cambia si hace falta. */
async function asegurarMetodo(page: Page, testData: LoadedTestData, metodo: Metodo): Promise<void> {
  const entrega = await new DatosEntregaPage(page).goto();
  const destino = metodo === 'despacho' ? token(testData, 'DIRECCION_DESPACHO_001')! : token(testData, 'TIENDA_RETIRO_001')!;
  const etiqueta = metodo === 'despacho' ? /enviaremos tu compra a/i : /retira tu compra en/i;
  const ok =
    etiqueta.test((await entrega.etiquetaDestino.textContent().catch(() => '')) ?? '') &&
    ((await entrega.destino.textContent().catch(() => '')) ?? '').toLowerCase().includes(destino.toLowerCase());
  if (ok) return;

  const home = await new PaginaHabilitada(page).goto();
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  if (metodo === 'despacho') {
    await modal.tabDespachoDomicilio.click();
    await modal.root.getByRole('button').filter({ hasText: destino }).first().click();
  } else {
    await modal.tabRetiroEnTienda.click();
    // El buscador no encuentra el nombre completo "Unimarc Las Condes": se busca sin la marca y se elige el exacto.
    await modal.campoBuscarTienda.fill(destino.replace(/^unimarc\s+/i, ''));
    await modal.root.getByText(destino, { exact: true }).first().click();
    await modal.root.getByRole('button', { name: /^confirmar tienda$/i }).click();
  }
  await confirmarCambio(page, testData);
}

/**
 * Deja el carro con exactamente {SKU_VALID_001} × {UNIDADES_SOBRE_MINIMO}. Se ajusta desde el carro:
 * en la PDP el "Agregar" se ve un instante antes de que hidrate el stepper y sumaba una unidad de más.
 */
async function asegurarCarro(page: Page, testData: LoadedTestData): Promise<void> {
  const unidades = Number(token(testData, 'UNIDADES_SOBRE_MINIMO'));
  let carro = await new CarroPage(page).goto();
  await expect(carro.carroVacio.or(carro.totalUnidades)).toBeVisible({ timeout: 30000 });
  if (await carro.carroVacio.isVisible()) {
    const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
    await pdp.agregarVisible.click();
    await expect(pdp.cantidadEnCarro).toBeVisible({ timeout: 15000 });
    carro = await new CarroPage(page).goto();
    await expect(carro.totalUnidades).toBeVisible({ timeout: 30000 });
  }
  for (let i = 0; i < 30; i++) {
    const n = Number(((await carro.totalUnidades.textContent()) ?? '').match(/\d+/)![0]);
    if (n === unidades) break;
    await (n < unidades ? carro.botonSumar : carro.botonRestar).click();
    await expect(carro.totalUnidades).not.toHaveText(new RegExp(`^${n} `), { timeout: 15000 });
  }
  await expect(carro.totalUnidades, 'unidades del SKU en el carro').toHaveText(`${unidades} unidades`);
}

/** Precondición + pasos 1–4: carro → "Continuar con la entrega" → "Datos de entrega". */
async function hastaDatosDeEntrega(page: Page, testData: LoadedTestData, cp: string, metodo: Metodo) {
  await iniciarSesion(page, testData);
  await asegurarMetodo(page, testData, metodo);
  await asegurarCarro(page, testData);

  const carro = await new CarroPage(page).goto();
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await expect(carro.titulo).toBeVisible({ timeout: 30000 });
  await expect(carro.totalUnidades).toHaveText(new RegExp(`^${token(testData, 'UNIDADES_SOBRE_MINIMO')} unidades$`));
  const subtotalCarro = pesos((await carro.subtotal.textContent()) ?? '');
  expect(subtotalCarro, 'subtotal ≥ mínimo de compra').toBeGreaterThanOrEqual(Number(token(testData, 'MONTO_MINIMO_COMPRA')));
  await carro.capturarEvidencia(cp, 2, 'carro cargado');

  await carro.continuarConLaEntrega();
  const entrega = new DatosEntregaPage(page);
  await entrega.waitUntilReady();
  await expect(entrega.horariosSeleccionados).toHaveCount(1, { timeout: 30000 });
  await expect(entrega.fechaResumen(metodo)).toBeVisible();
  await entrega.capturarEvidencia(cp, 4, `Datos de entrega (${metodo})`);
  return { entrega, subtotalCarro };
}

/** Muestrea el loader durante `ms`: true si apareció en algún momento. */
async function loaderAparece(entrega: DatosEntregaPage, ms: number): Promise<boolean> {
  const fin = Date.now() + ms;
  while (Date.now() < fin) {
    if ((await entrega.loader.count()) > 0) return true;
    await new Promise((r) => setTimeout(r, 100));
  }
  return false;
}

test.describe('B2C-148 — Datos de entrega: cambio de fecha y horario', () => {
  test.describe.configure({ timeout: 240000 });

  for (const [ff, vp, sufijo, L] of [
    ['Desktop 1440x900', DESKTOP, 'Desktop', 'D'],
    ['Mobile 390x844', MOBILE, 'Mobile', 'M'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);

      // Despacho primero y retiro después: cambiar de método con sesión pide un OTP.
      for (const [metodo, nFecha, nHorario] of [['despacho', '001', '002'], ['retiro', '004', '005']] as const) {
        const n = nFecha;
        test(`TC-B2C148-${L}-${n} · En ${metodo} cambiar solo la fecha refresca los horarios sin confirmar la ventana [Logueado] (${sufijo})`, async ({ page, testData }) => {
          const cp = `TC-B2C148-${L}-${n}`;
          const { entrega } = await hastaDatosDeEntrega(page, testData, cp, metodo);
          const fechaAntes = ((await entrega.fechaResumen(metodo).textContent()) ?? '').trim();
          const subtotalAntes = ((await entrega.subtotal.textContent()) ?? '').trim();

          const dia = entrega.otroDia(metodo);
          const diaTexto = ((await dia.innerText()) ?? '').replace(/\s+/g, ' ').trim();
          await dia.click();
          const huboLoader = await loaderAparece(entrega, 3000);

          await expect(entrega.diaSeleccionado(metodo), `día ${diaTexto} seleccionado`).toHaveText(new RegExp(diaTexto.split(' ').pop()!));
          await expect(entrega.horarios.first(), 'horarios de la nueva fecha').toBeVisible();
          await expect(entrega.horariosSeleccionados, 'un horario destacado por defecto').toHaveCount(1);
          await entrega.capturarEvidencia(cp, 5, `horarios del ${diaTexto}`);
          expect(huboLoader, 'no hay loader al cambiar solo la fecha').toBe(false);
          await expect(entrega.fechaResumen(metodo), `"Fecha de ${metodo === 'despacho' ? 'entrega' : 'retiro'}" no cambia`).toHaveText(fechaAntes);
          await expect(entrega.subtotal, 'el subtotal no cambia').toHaveText(subtotalAntes);
          await expect(entrega.botonIrAPagar, '"Ir a pagar" habilitado').toBeEnabled();
          await entrega.capturarEvidencia(cp);
        });

        test(`TC-B2C148-${L}-${nHorario} · En ${metodo} elegir otro horario lo guarda y muestra el toast de confirmación [Logueado] (${sufijo})`, async ({ page, testData }) => {
          const cp = `TC-B2C148-${L}-${nHorario}`;
          const { entrega, subtotalCarro } = await hastaDatosDeEntrega(page, testData, cp, metodo);

          const dia = ((await entrega.diaSeleccionado(metodo).innerText()) ?? '').match(/\d+/)![0];
          const horario = entrega.otroHorario;
          const texto = ((await horario.innerText()) ?? '').replace(/\s+/g, ' ').trim();
          const rango = texto.match(/\d{2}:\d{2} - \d{2}:\d{2}/)![0];
          const costo = texto.match(/\$[\d.]+/)?.[0];

          // Con /schedule todavía en vuelo, el render tardío pisaba el horario elegido.
          await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
          const toast = entrega.toast(metodo === 'despacho' ? TOAST_DESPACHO : TOAST_RETIRO);
          // Loader y toast se vigilan a la vez: en retiro el guardado es rápido y el toast (~4 s)
          // se iba antes de que terminara una espera del loader en serie.
          let toastDesde = 0;
          const toastVisto = toast.waitFor({ state: 'visible', timeout: 30000 }).then(() => { toastDesde = Date.now(); return true; }, () => false);
          const loader = entrega.loader.first().waitFor({ state: 'visible', timeout: 8000 }).then(() => true, () => false);
          await horario.click();
          const huboLoader = await Promise.race([loader, toastVisto.then(() => false)]);
          if (huboLoader) await entrega.capturarEvidencia(cp, 6, 'loader sobre el selector de ventana');

          await expect(toast, 'toast de confirmación').toBeVisible({ timeout: 30000 });
          await toastVisto;
          const visibleDesde = toastDesde || Date.now();
          await entrega.capturarEvidencia(cp, 7, 'toast de confirmación');
          await expect(toast.getByRole('button', { name: /close|cerrar/i }), 'el toast tiene X').toBeVisible();

          const resumen = entrega.fechaResumen(metodo);
          await expect(resumen, 'resumen con el nuevo día').toContainText(new RegExp(`\\b${dia} de `));
          await expect(resumen, 'resumen con el nuevo horario').toContainText(rango);
          if (metodo === 'despacho') {
            expect(costo, 'el horario muestra su costo').toBeTruthy();
            await expect(entrega.subtotal, 'subtotal = carro + costo de la ventana').toHaveText(
              new RegExp(`^\\$${(subtotalCarro + pesos(costo!)).toLocaleString('es-CL').replace(/\./g, '\\.')}$`),
            );
          }
          await expect(entrega.botonIrAPagar, '"Ir a pagar" habilitado').toBeEnabled();
          await entrega.capturarEvidencia(cp, undefined, undefined);

          await expect(toast, 'el toast se cierra solo (~4 s)').toBeHidden({ timeout: 10000 });
          const duracion = Date.now() - visibleDesde;
          expect(duracion, 'el toast dura alrededor de 4 s').toBeGreaterThanOrEqual(2500);
          expect(huboLoader, 'loader sobre el selector de ventana').toBe(true);
        });
      }
    });
  }
});
