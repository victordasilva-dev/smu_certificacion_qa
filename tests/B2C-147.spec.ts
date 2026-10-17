import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { LoadedTestData } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { PDPPage } from './pages/PDPPage';
import { CarroPage } from './pages/CarroPage';
import { DatosEntregaPage, Metodo } from './pages/DatosEntregaPage';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { AgotarseModal } from './pages/AgotarseModal';
import { LoginModal } from './pages/LoginModal';
import { MiniCarro } from './pages/MiniCarro';
import { HeaderSimplificado } from './pages/HeaderSimplificado';
import { FooterSimplificado } from './pages/FooterSimplificado';
import { esperarOtp, marcaOtp } from './support/otp';

/**
 * B2C-147 — Mis Envíos ("Datos de entrega"): carga, acceso sin sesión, estructura en despacho y
 * retiro, selector de fechas y el modal "No te olvides".
 *
 * Logueados con {USER_AUTH_001} (correo + OTP; sesión reutilizada de `.qa/auth/`), carro con
 * {SKU_VALID_001} × {UNIDADES_SOBRE_MINIMO} y el método del TC. Invitados con
 * {DIRECCION_DESPACHO_001} fijada desde el Store Locator del header.
 *
 * El "Slow 3G" de las precondiciones se simula retrasando la consulta de ventanas
 * (`POST …/smu-delivery/…/schedule`, la llamada a Janis) para que el skeleton dure lo bastante
 * como para observarlo, en Chromium y en WebKit por igual.
 *
 * Quedan sin `test()` (Bloqueado Data): 008 ({DIRECCION_CON_VENTANA_SIN_CAPACIDAD} en TBD), 011,
 * 012 ({MONTO_MAXIMO_EXPRESS} en TBD), 016–018 ({JANIS_API_ENDPOINT} en TBD), 004
 * ({DIRECCION_SIN_NUMERO} sin sugerencia de Google), 006 ({SKU_UNIPAY_001} sin precio Unipay),
 * 007 ({DIRECCION_EXPRESS_Y_PROG_CON_COSTO} sin Envío Express), 009 ({DIRECCION_SIN_EXPRESS} sin
 * cobertura), 013–015 ({DIRECCION_SIN_SLA} sin cobertura) y D-022/M-020 ({TIENDA_SIN_SLA} sin
 * cobertura).
 */

const SESION = path.resolve('.qa/auth/b50-user.json');
const SCHEDULE = '**/smu-delivery/**/schedule**';

function correo(testData: LoadedTestData): string {
  return token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
}

function escapar(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Inicia sesión reutilizando el storageState guardado; si no sirve, por correo + OTP. */
async function iniciarSesion(page: Page, testData: LoadedTestData): Promise<PaginaHabilitada> {
  if (fs.existsSync(SESION)) {
    const estado = JSON.parse(fs.readFileSync(SESION, 'utf-8'));
    await page.context().addCookies(estado.cookies ?? []);
    const origen = (estado.origins ?? [])[0];
    if (origen?.localStorage?.length) {
      await page.addInitScript((items: { name: string; value: string }[]) => {
        if (sessionStorage.getItem('__b147_ls')) return;
        for (const { name, value } of items) localStorage.setItem(name, value);
        sessionStorage.setItem('__b147_ls', '1');
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

/** "Algunos productos podrían agotarse" → "Sí, continuar" y, si aparece, el OTP de "Autenticación requerida". */
async function confirmarCambio(page: Page, testData: LoadedTestData): Promise<void> {
  const agotarse = new AgotarseModal(page);
  const desde = marcaOtp();
  if (await agotarse.root.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) {
    await agotarse.botonSi.click();
  }
  const modal = new MetodoEntregaModal(page);
  if (await modal.modalOtp.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) {
    await new LoginModal(page).escribirCodigo(await esperarOtp(correo(testData), desde, { digitos: 6 }));
    await modal.modalOtp.waitFor({ state: 'hidden', timeout: 30000 });
  }
}

/** Deja activo el método del TC desde el Store Locator del header, solo si no lo está ya. */
async function asegurarMetodo(page: Page, testData: LoadedTestData, metodo: Metodo): Promise<void> {
  const destino = metodo === 'despacho' ? token(testData, 'DIRECCION_DESPACHO_001')! : token(testData, 'TIENDA_RETIRO_001')!;
  const home = await new PaginaHabilitada(page).goto();
  await home.header.storeLocator.waitFor({ state: 'visible', timeout: 30000 });
  await page.waitForTimeout(3000);
  const enHeader = ((await home.header.storeLocator.innerText()) ?? '').replace(/\s+/g, ' ').trim();
  const calle = destino.split(',')[0].trim();
  const ok = metodo === 'despacho' ? new RegExp(`${escapar(calle)}|^casa\\b`, 'i').test(enHeader) : enHeader.toLowerCase().includes(destino.toLowerCase());
  if (ok) return;

  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  if (metodo === 'despacho') {
    await modal.tabDespachoDomicilio.click();
    // {DIRECCION_DESPACHO_001} está guardada en la cuenta como "Casa".
    await modal.root.getByRole('button').filter({ hasText: calle }).first().click();
  } else {
    await modal.tabRetiroEnTienda.click();
    await modal.elegirTienda(destino);
  }
  await confirmarCambio(page, testData);
  await page.waitForTimeout(3000);
}

/** Deja el carro con solo {SKU_VALID_001} × {UNIDADES_SOBRE_MINIMO}. */
async function asegurarCarro(page: Page, testData: LoadedTestData): Promise<void> {
  const unidades = Number(token(testData, 'UNIDADES_SOBRE_MINIMO'));
  let carro = await new CarroPage(page).goto();
  await expect(carro.carroVacio.or(carro.totalUnidades)).toBeVisible({ timeout: 30000 });
  const productos = (await carro.carroVacio.isVisible()) ? [] : await carro.productos();
  if (productos.length > 1) await carro.vaciar();
  if (productos.length !== 1 || (await carro.carroVacio.isVisible())) {
    const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
    await pdp.fijarCantidad(unidades);
    carro = await new CarroPage(page).goto();
  }
  await expect(carro.totalUnidades).toBeVisible({ timeout: 30000 });
  for (let i = 0; i < 30; i++) {
    const n = Number(((await carro.totalUnidades.textContent()) ?? '').match(/\d+/)![0]);
    if (n === unidades) break;
    await (n < unidades ? carro.botonSumar : carro.botonRestar).click();
    await expect(carro.totalUnidades).not.toHaveText(new RegExp(`^${n} `), { timeout: 15000 });
  }
  await expect(carro.totalUnidades, 'unidades del SKU en el carro').toHaveText(`${unidades} unidades`);
  expect((await carro.productos()).length, 'solo {SKU_VALID_001} en el carro').toBe(1);
}

/** Fija como invitado la dirección `direccion` ("Calle, Comuna") desde el Store Locator del header. */
async function fijarDireccionInvitado(page: Page, direccion: string): Promise<PaginaHabilitada> {
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.campoBusqueda.fill(direccion);
  const [calle, comuna] = direccion.split(',').map((s) => s.trim());
  await modal.sugerencias.filter({ hasText: calle }).filter({ hasText: comuna ?? '' }).first().click();
  await page.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
  await page.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
  await home.header.storeLocator.filter({ hasText: calle }).waitFor({ state: 'visible', timeout: 30000 });
  return home;
}

/** Invitado con {DIRECCION_DESPACHO_001} y {SKU_VALID_001} × {UNIDADES_SOBRE_MINIMO} en el carro. */
async function carroInvitado(page: Page, testData: LoadedTestData): Promise<PaginaHabilitada> {
  const home = await fijarDireccionInvitado(page, token(testData, 'DIRECCION_DESPACHO_001')!);
  const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
  await pdp.fijarCantidad(Number(token(testData, 'UNIDADES_SOBRE_MINIMO')));
  return home;
}

/**
 * Registra en `window.__qaEntrega` lo que pasa por la página: si apareció el skeleton junto con el
 * título "Datos de entrega" y si en algún momento se pintó Mis Envíos. Se instala en el documento
 * actual y en los siguientes.
 */
async function vigilarEntrega(page: Page): Promise<void> {
  const instalar = () => {
    const w = window as unknown as { __qaEntrega?: { skeletonConTitulo: boolean; misEnvios: boolean } };
    if (w.__qaEntrega) return;
    w.__qaEntrega = { skeletonConTitulo: false, misEnvios: false };
    const mirar = () => {
      const titulo = [...document.querySelectorAll('h1,h2,h3')].some((h) => /^datos de entrega$/i.test((h.textContent ?? '').trim()));
      if (titulo) w.__qaEntrega!.misEnvios = true;
      if (titulo && document.querySelectorAll('.chakra-skeleton').length > 0) w.__qaEntrega!.skeletonConTitulo = true;
    };
    new MutationObserver(mirar).observe(document.documentElement, { childList: true, subtree: true, attributes: true });
    mirar();
  };
  await page.addInitScript(instalar);
  await page.evaluate(instalar);
}

async function registroEntrega(page: Page): Promise<{ skeletonConTitulo: boolean; misEnvios: boolean }> {
  return page.evaluate(() => (window as unknown as { __qaEntrega: { skeletonConTitulo: boolean; misEnvios: boolean } }).__qaEntrega);
}

/** Retrasa la consulta de ventanas (Janis) para que el skeleton se pueda observar. */
async function redLenta(page: Page): Promise<void> {
  await page.route(SCHEDULE, async (route) => {
    await new Promise((r) => setTimeout(r, 6000));
    await route.continue();
  });
}

/** Precondición logueada + pasos 1–2: sesión, método, carro y la página del carro cargada. */
async function carroLogueado(page: Page, testData: LoadedTestData, cp: string, metodo: Metodo): Promise<CarroPage> {
  await iniciarSesion(page, testData);
  await asegurarMetodo(page, testData, metodo);
  await asegurarCarro(page, testData);
  const carro = await new CarroPage(page).goto();
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await expect(carro.titulo).toBeVisible({ timeout: 30000 });
  await carro.capturarEvidencia(cp, 2, 'carro cargado');
  return carro;
}

/** Hasta Mis Envíos cargada (pasos 1–4). */
async function hastaMisEnvios(page: Page, testData: LoadedTestData, cp: string, metodo: Metodo): Promise<DatosEntregaPage> {
  const carro = await carroLogueado(page, testData, cp, metodo);
  await carro.continuarConLaEntrega();
  const entrega = new DatosEntregaPage(page);
  await entrega.waitUntilReady();
  await expect(entrega.horariosSeleccionados).toHaveCount(1, { timeout: 30000 });
  await expect(entrega.skeletons).toHaveCount(0, { timeout: 30000 });
  await entrega.capturarEvidencia(cp, 4, `Mis Envíos (${metodo})`);
  return entrega;
}

// El viernes sale como "Vier" (cuatro letras) y los demás con tres: se acepta como abreviatura.
const DIA = /^(hoy|lun|mar|mi[eé]|jue|vier?|s[aá]b|dom)\s*\d{1,2}$/i;
const FECHA_RESUMEN = /^(hoy|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado|domingo|lun|mar|mi[ée]|jue|vie|s[áa]b|dom),\s*\d{1,2} de [a-záéíóú]+, de \d{2}:\d{2} - \d{2}:\d{2} hrs$/i;

test.describe('B2C-147 — Mis Envíos: ver y seleccionar la ventana de despacho o retiro', () => {
  test.describe.configure({ timeout: 300000 });

  for (const [ff, vp, sufijo, L, verbo] of [
    ['Desktop 1440x900', DESKTOP, 'Desktop', 'D', 'clic en'],
    ['Mobile 390x844', MOBILE, 'Mobile', 'M', 'toque en'],
  ] as const) {
    const cpNoOlvides = L === 'D' ? 'TC-B2C147-D-021' : 'TC-B2C147-M-019';

    test.describe(ff, () => {
      test.use(vp);

      test(`TC-B2C147-${L}-001 · Al continuar desde el carro Mis Envíos muestra el skeleton y luego Datos de entrega [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C147-${L}-001`;
        const carro = await carroLogueado(page, testData, cp, 'despacho');
        await vigilarEntrega(page);
        await redLenta(page);

        await carro.continuarConLaEntrega();
        const entrega = new DatosEntregaPage(page);
        await expect(entrega.titulo, 'título durante la carga').toBeVisible({ timeout: 30000 });
        await expect(entrega.skeletons.first(), 'skeleton de carga').toBeVisible({ timeout: 10000 });
        await entrega.capturarEvidencia(cp, 3, 'skeleton con el título Datos de entrega');

        await expect(entrega.skeletons, 'el skeleton desaparece').toHaveCount(0, { timeout: 60000 });
        await expect(entrega.horariosSeleccionados).toHaveCount(1, { timeout: 30000 });
        expect((await registroEntrega(page)).skeletonConTitulo, 'skeleton y título a la vez').toBe(true);
        await entrega.capturarEvidencia(cp);
      });

      test(`TC-B2C147-${L}-002 · Un usuario sin sesión que intenta ir a Mis Envíos es redirigido al inicio de sesión [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C147-${L}-002`;
        await carroInvitado(page, testData);
        const carro = await new CarroPage(page).goto();
        await expect(carro.totalUnidades).toHaveText(`${token(testData, 'UNIDADES_SOBRE_MINIMO')} unidades`, { timeout: 30000 });
        await carro.capturarEvidencia(cp, 2, 'carro de invitado sobre el mínimo');
        await vigilarEntrega(page);

        await carro.botonContinuarEntrega.click();
        const login = new LoginModal(page);
        await expect(login.dialogo, 'flujo de inicio de sesión').toBeVisible({ timeout: 30000 });
        await page.waitForTimeout(3000);
        await carro.capturarEvidencia(cp, 3, 'inicio de sesión al continuar');
        expect(page.url(), 'no navega a Mis Envíos').not.toMatch(/\/checkout\/entrega/);
        expect((await registroEntrega(page)).misEnvios, 'Mis Envíos no se pintó').toBe(false);
        await carro.capturarEvidencia(cp);
      });

      test(`TC-B2C147-${L}-003 · Con despacho a domicilio la página Datos de entrega muestra todos sus elementos [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C147-${L}-003`;
        const entrega = await hastaMisEnvios(page, testData, cp, 'despacho');
        const calle = token(testData, 'DIRECCION_DESPACHO_001')!.split(',')[0].trim();

        await expect(new HeaderSimplificado(page).logo, 'header simplificado').toBeVisible();
        await expect(new HeaderSimplificado(page).enlaces, 'header sin navegación').toHaveCount(0);
        await expect(entrega.botonVolver, 'ícono <').toBeVisible();
        await expect(entrega.titulo).toBeVisible();
        await expect(entrega.etiquetaDestino).toHaveText(/^enviaremos tu compra a:$/i);
        await expect(entrega.destino).toContainText(calle);
        await expect(entrega.botonCambiarUbicacion, 'chevron de la tarjeta').toBeVisible();
        await expect(entrega.etiquetaFecha('despacho')).toBeVisible();
        await expect(entrega.fechaResumen('despacho')).toHaveText(FECHA_RESUMEN);
        await expect(entrega.preguntaFecha('despacho')).toBeVisible();
        expect(await entrega.dias('despacho').count(), 'selector de fechas').toBeGreaterThan(0);
        await expect(entrega.preguntaHorario).toBeVisible();
        for (const t of await entrega.horarios.allInnerTexts()) {
          expect(t.replace(/\s+/g, ' '), 'horario con rango y precio').toMatch(/\d{2}:\d{2} - \d{2}:\d{2} hrs.*\$[\d.]+/);
        }
        await expect(entrega.recibeAlguienMas).toBeVisible();
        await expect(entrega.ayudaRecibeAlguienMas).toBeVisible();
        await expect(entrega.lineaCosto(/^despacho$/i)).toBeVisible();
        await expect(entrega.lineaCosto(/^subtotal$/i)).toBeVisible();
        await expect(entrega.lineaCosto(/^subtotal con unipay$/i)).toBeVisible();
        await expect(entrega.botonIrAPagar).toBeEnabled();
        await expect(new FooterSimplificado(page).items, 'footer simplificado').toHaveCount(3);
        if (L === 'D') {
          const izq = (await entrega.tarjetaDestino.boundingBox())!;
          const der = (await entrega.bloqueCostos.boundingBox())!;
          expect(der.x, 'resumen de totales en la columna derecha').toBeGreaterThan(izq.x + izq.width);
        }
        await entrega.capturarEvidencia(cp, 5, 'página Datos de entrega (despacho)', { fullPage: true });
        await entrega.capturarEvidencia(cp);
      });

      test(`TC-B2C147-${L}-005 · El selector de fechas muestra los días de Janis con el primero disponible marcado [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C147-${L}-005`;
        const entrega = await hastaMisEnvios(page, testData, cp, 'despacho');
        const dias = await entrega.dias('despacho').evaluateAll((bs) =>
          bs.map((b) => ({
            texto: (b.textContent ?? '').replace(/\s+/g, ' ').trim(),
            pulsado: b.getAttribute('aria-pressed') === 'true',
            deshabilitado: (b as HTMLButtonElement).disabled || b.getAttribute('aria-disabled') === 'true',
          })),
        );
        expect(dias.length, 'días que retorna Janis').toBeGreaterThan(0);
        expect(dias[0].texto, 'el primero es "Hoy" + número').toMatch(/^hoy\s*\d{1,2}$/i);
        for (const d of dias) expect(d.texto, 'abreviatura de día + número').toMatch(DIA);
        const primeroDisponible = dias.findIndex((d) => !d.deshabilitado);
        expect(dias.filter((d) => d.pulsado).length, 'un día seleccionado').toBe(1);
        expect(dias.findIndex((d) => d.pulsado), 'seleccionado = primer día disponible').toBe(primeroDisponible);
        for (const d of dias.filter((x) => x.deshabilitado)) expect(d.pulsado, `${d.texto} deshabilitado y no seleccionado`).toBe(false);
        await entrega.capturarEvidencia(cp, 5, 'selector de fechas', { elemento: entrega.selectorVentana });
        await entrega.capturarEvidencia(cp);
      });

      test(`${cpNoOlvides} · Continuar en el modal No te olvides lleva a Mis Envíos con skeleton y luego Datos de entrega [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = cpNoOlvides;
        const carro = await carroLogueado(page, testData, cp, 'despacho');
        await vigilarEntrega(page);
        await redLenta(page);

        await carro.botonContinuarEntrega.click();
        await expect(carro.modalSugeridos, 'modal de sugeridos').toBeVisible({ timeout: 30000 });
        await expect(carro.modalSugeridos.getByRole('button', { name: /^agregar$/i }).first(), 'productos sugeridos').toBeVisible();
        await carro.capturarEvidencia(cp, 4, 'modal No te olvides con sugeridos');

        await carro.continuarSugeridos.click();
        await expect(carro.modalSugeridos, 'el modal se cierra').toBeHidden({ timeout: 30000 });
        const entrega = new DatosEntregaPage(page);
        await expect(entrega.titulo).toBeVisible({ timeout: 30000 });
        await expect(entrega.skeletons.first(), 'skeleton de carga').toBeVisible({ timeout: 10000 });
        await entrega.capturarEvidencia(cp, 5, 'skeleton con el título Datos de entrega');
        await expect(entrega.skeletons, 'el skeleton desaparece').toHaveCount(0, { timeout: 60000 });
        await expect(entrega.horariosSeleccionados).toHaveCount(1, { timeout: 30000 });
        expect((await registroEntrega(page)).skeletonConTitulo, 'skeleton y título a la vez').toBe(true);
        await entrega.capturarEvidencia(cp);
      });

      if (L === 'D') {
        test(`TC-B2C147-D-020 · Un usuario sin sesión que usa Ir a pagar del minicarro es redirigido al inicio de sesión [Guest] (${sufijo})`, async ({ page, testData }) => {
          const cp = 'TC-B2C147-D-020';
          await carroInvitado(page, testData);
          const home = await new PaginaHabilitada(page).goto();
          await vigilarEntrega(page);

          await home.header.miniCarrito.first().click();
          const mini = await new MiniCarro(page).esperarAbierto();
          await home.capturarEvidencia(cp, 3, 'minicarro desplegado');
          await mini.botonIrAPagar.click();
          const login = new LoginModal(page);
          await expect(login.dialogo, 'flujo de inicio de sesión').toBeVisible({ timeout: 30000 });
          await page.waitForTimeout(3000);
          await home.capturarEvidencia(cp, 4, `inicio de sesión tras ${verbo} Ir a pagar`);
          expect(page.url(), 'no navega a Mis Envíos').not.toMatch(/\/checkout\/entrega/);
          expect((await registroEntrega(page)).misEnvios, 'Mis Envíos no se pintó').toBe(false);
          await home.capturarEvidencia(cp);
        });
      }

      // Retiro al final: cambiar de método con sesión pide un OTP.
      test(`TC-B2C147-${L}-010 · Con retiro en tienda la página muestra la tienda y horarios sin precio [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C147-${L}-010`;
        const entrega = await hastaMisEnvios(page, testData, cp, 'retiro');
        const tienda = token(testData, 'TIENDA_RETIRO_001')!;

        await expect(entrega.etiquetaDestino).toHaveText(/^retira tu compra en:$/i);
        await expect(entrega.destino).toContainText(new RegExp(escapar(tienda), 'i'));
        await expect(entrega.destino, 'nombre y dirección de la tienda').toHaveText(/,/);
        await expect(entrega.botonCambiarUbicacion, 'chevron de la tarjeta').toBeVisible();
        await expect(entrega.etiquetaFecha('retiro')).toBeVisible();
        await expect(entrega.fechaResumen('retiro')).toHaveText(FECHA_RESUMEN);
        await expect(entrega.preguntaFecha('retiro')).toBeVisible();
        await expect(entrega.preguntaHorario).toBeVisible();
        const horarios = await entrega.horarios.allInnerTexts();
        expect(horarios.length).toBeGreaterThan(0);
        for (const t of horarios) expect(t, 'horario sin precio').not.toMatch(/\$/);
        await expect(entrega.lineaCosto(/^subtotal$/i)).toBeVisible();
        await expect(entrega.lineaCosto(/^subtotal con unipay$/i)).toBeVisible();
        await expect(entrega.recibeAlguienMas).toBeVisible();
        await expect(entrega.botonIrAPagar).toBeEnabled();
        if (L === 'D') {
          const izq = (await entrega.tarjetaDestino.boundingBox())!;
          const der = (await entrega.bloqueCostos.boundingBox())!;
          expect(der.x, 'resumen de totales en la columna derecha').toBeGreaterThan(izq.x + izq.width);
        }
        await entrega.capturarEvidencia(cp, 5, 'página Datos de entrega (retiro)', { fullPage: true });
        await entrega.capturarEvidencia(cp);
      });
    });
  }
});
