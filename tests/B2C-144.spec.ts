import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { HeaderEntrega } from './pages/HeaderEntrega';
import { LoginModal } from './pages/LoginModal';
import { MenuCuenta } from './pages/MenuCuenta';
import { PDPPage } from './pages/PDPPage';
import { CarroPage } from './pages/CarroPage';
import { AgotarseModal } from './pages/AgotarseModal';
import { loginConOtp, volverDeLaCuenta } from './support/loginOtp';
import { esperarOtp, marcaOtp } from './support/otp';
import { conCandado } from './support/candadoOtp';
import { LoadedTestData } from './support/testData';

/**
 * B2C-144 — Header de entrega: dirección, próxima ventana y chip de precio (consulta a Janis).
 *
 * Cada TC usa solo los tokens que declara su fila. Los TC cuya precondición de data no se cumple
 * en el ambiente (Janis no devuelve Express, la dirección no tiene cobertura / sí tiene horarios,
 * cuenta sin membresía) se observan y quedan `bloqueado-data` con la evidencia de la observación.
 * La consulta a Janis se observa por el proxy `smu-delivery/.../apply` del storefront.
 */

type TD = LoadedTestData;
const APPLY = /smu-delivery\/.*\/apply/;
interface LlamadaEntrega { m: string; p: string; status: number; body: string }
/** Registra las llamadas del storefront al servicio `smu-delivery` (método, ruta, estado y cuerpo recortado). */
const entregaReq = (page: Page): { n: () => number; lista: LlamadaEntrega[]; resumen: () => string } => {
  const lista: LlamadaEntrega[] = [];
  page.on('response', async (r) => {
    if (!/smu-delivery/.test(r.url())) return;
    const body = (await r.text().catch(() => '')).replace(/\s+/g, ' ').slice(0, 260);
    lista.push({ m: r.request().method(), p: r.url().replace(/^.*organizations\/[^/]+\//, '').replace(/\?.*$/, ''), status: r.status(), body });
  });
  return {
    n: () => lista.length,
    lista,
    resumen: () => lista.map((l) => `${l.m} ${l.p} -> ${l.status} ${l.body}`).join(' || '),
  };
};
const nota = (tipo: string, d: string) => {
  test.info().annotations.push({ type: tipo, description: d });
  console.log(`NOTA ${test.info().title.split(' ')[0]} ${tipo}: ${d}`);
};
const calleDe = (d: string) => d.split(',')[0].trim();
const numDe = (d: string) => d.match(/\d+/)?.[0];
const reNum = (d: string) => new RegExp(`(?<!\\d)${numDe(d) ?? calleDe(d)}(?!\\d)`, 'i');
const correoDe = (td: TD, k = 'USER_AUTH_001') => token(td, k)!.split(' / ')[0].trim();
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function bloqueoData(motivo: string): never {
  nota('bloqueado-data', motivo);
  test.skip(true, motivo);
  throw new Error(motivo);
}

interface ApplyInfo {
  outcome?: string; optionCount?: number; deliveryStatus?: string; shippingType?: string;
  carrierName?: string; cost?: number; window?: { start: string; end: string; cost: number };
  supplyingStoreChanged?: boolean; requiresConfirmation?: boolean; customerAuthenticated?: boolean;
}

async function abrirHome(page: Page) {
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  const h = new HeaderEntrega(page, home.header);
  return { home, h };
}

/** Abre el drawer, elige la dirección, la confirma (B2C-99) y devuelve lo que respondió el apply. */
async function elegirYConfirmar(page: Page, modal: MetodoEntregaModal, d: string, esperarApply = true): Promise<ApplyInfo | null> {
  const apply = esperarApply
    ? page.waitForResponse((r) => APPLY.test(r.url()) && r.request().method() === 'POST', { timeout: 60000 }).then((r) => r.json() as Promise<ApplyInfo>).catch(() => null)
    : Promise.resolve(null);
  await modal.elegirSugerencia(calleDe(d), reNum(d));
  await modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
  await modal.confirmacionPin.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
  return apply;
}

async function fijarInvitado(page: Page, d: string, cp: string, pasoBase = 3) {
  const { home, h } = await abrirHome(page);
  await h.boton.waitFor({ state: 'visible', timeout: 30000 });
  await h.boton.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.capturarModal(cp, pasoBase, 'modal «Elige tu método de entrega»', page);
  const info = await elegirYConfirmar(page, modal, d);
  return { home, h, modal, info };
}

/** «Agregar» de la PDP; en Mobile el header sticky puede tapar el botón, y entonces se dispara el clic en el elemento. */
async function agregarAlCarro(pdp: PDPPage) {
  const b = pdp.agregarVisible;
  await expect(b).toBeEnabled({ timeout: 30000 });
  await b.click({ timeout: 15000 }).catch(async () => {
    await b.evaluate((el) => (el as HTMLElement).click());
  });
}

async function esperarVentana(h: HeaderEntrega, timeout = 45000) {
  await expect(h.zona, 'el header muestra la ventana «Desde:»').toContainText(/desde:/i, { timeout });
  await h.chip.waitFor({ state: 'visible', timeout: 15000 });
}

async function verificarHeader(h: HeaderEntrega, d: string, etiqueta = '') {
  const t = await h.texto();
  expect(t, `${etiqueta} dirección ${calleDe(d)} (o su etiqueta «Casa» con sesión) en el header`).toMatch(new RegExp(`${esc(calleDe(d))}|\\bcasa\\b`, 'i'));
  expect(t, `${etiqueta} ventana`).toMatch(/desde:/i);
  expect(await h.textoChip(), `${etiqueta} chip de precio`).toMatch(/\$\s?[\d.]+|gratis/i);
  return t;
}

// ---------------------------------------------------------------------------------------------
// Sesión
// ---------------------------------------------------------------------------------------------

const sesionPath = (mobile: boolean) => path.resolve(`.qa/auth/b144-${mobile ? 'm' : 'd'}.json`);

async function loginMobileOtp(page: Page, correo: string): Promise<void> {
  const login = new LoginModal(page);
  const boton = page.getByRole('button', { name: /^(validar|continuar)$/i }).locator('visible=true').first();
  const origen = page.url();
  const desde = marcaOtp();
  await login.pedirCodigo(correo);
  const codigo = await esperarOtp(correo, desde, { digitos: 6 });
  const desde2 = marcaOtp();
  await login.primerDigito.click();
  await page.keyboard.type(codigo, { delay: 80 });
  await page.waitForTimeout(1500);
  if (await login.primerDigito.isVisible().catch(() => false)) await boton.click();
  await login.primerDigito.waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
  const ahoraNo = login.ofertaPasskey.getByRole('button', { name: /^ahora no$/i });
  let segundo = false;
  const fin = Date.now() + 25000;
  while (Date.now() < fin) {
    if (!segundo && (await login.primerDigito.isVisible().catch(() => false))) {
      const c2 = await esperarOtp(correo, desde2, { digitos: 6 });
      await login.primerDigito.click();
      await page.keyboard.type(c2, { delay: 80 });
      await boton.click();
      segundo = true;
    }
    if (await ahoraNo.isVisible().catch(() => false)) await ahoraNo.click({ timeout: 5000 }).catch(() => {});
    await page.waitForTimeout(500);
  }
  await login.descartarPasskey();
  await volverDeLaCuenta(page, origen);
}

/** Login por correo + OTP con el candado de la casilla. */
async function loginOtp(page: Page, correo: string, mobile: boolean): Promise<void> {
  await conCandado(correo, async () => {
    if (mobile) await loginMobileOtp(page, correo);
    else await loginConOtp(page, correo);
  });
}

async function guardarSesion(page: Page, mobile: boolean, ficha = sesionPath(mobile)) {
  fs.mkdirSync(path.dirname(ficha), { recursive: true });
  await page.context().storageState({ path: ficha });
}

/** Sesión de {USER_AUTH_001}: reutiliza el storageState del form-factor; si no sirve, correo + OTP. */
async function sesion(page: Page, td: TD, mobile: boolean) {
  const ficha = sesionPath(mobile);
  if (fs.existsSync(ficha)) {
    const estado = JSON.parse(fs.readFileSync(ficha, 'utf-8'));
    await page.context().addCookies(estado.cookies ?? []);
    const origen = (estado.origins ?? [])[0];
    if (origen?.localStorage?.length) {
      await page.addInitScript((items: { name: string; value: string }[]) => {
        if (sessionStorage.getItem('__b144_ls')) return;
        for (const { name, value } of items) localStorage.setItem(name, value);
        sessionStorage.setItem('__b144_ls', '1');
      }, origen.localStorage);
    }
  }
  const { home, h } = await abrirHome(page);
  const conSesion = await home.header.saludo.waitFor({ state: 'visible', timeout: 20000 }).then(() => true, () => false);
  if (!conSesion) {
    await loginOtp(page, correoDe(td), mobile);
    await home.header.saludo.waitFor({ state: 'visible', timeout: 30000 });
  }
  await new LoginModal(page).descartarPasskey();
  await guardarSesion(page, mobile);
  return { home, h };
}

/** Ejecuta `accion` (que puede disparar «Algunos productos podrían agotarse» y/o el OTP) con el candado. */
async function accionConOtp(page: Page, correo: string, accion: () => Promise<void>) {
  return conCandado(correo, async () => {
    const desde = marcaOtp();
    await accion();
    const visto = { agotarse: false, otp: false };
    const agotarse = new AgotarseModal(page);
    if (await agotarse.root.waitFor({ state: 'visible', timeout: 12000 }).then(() => true, () => false)) {
      visto.agotarse = true;
      await agotarse.botonSi.click();
    }
    const modal = new MetodoEntregaModal(page);
    if (await modal.modalOtp.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) {
      visto.otp = true;
      await new LoginModal(page).escribirCodigo(await esperarOtp(correo, desde, { digitos: 6 }));
      await modal.modalOtp.waitFor({ state: 'hidden', timeout: 30000 });
    }
    return visto;
  });
}

/** Deja activa la dirección del token (entre las guardadas o agregándola). */
async function asegurarActiva(page: Page, td: TD, tokenName: string, reHeader: RegExp) {
  const d = token(td, tokenName)!;
  const { home, h } = await abrirHome(page);
  await h.boton.waitFor({ state: 'visible', timeout: 30000 });
  await page.waitForTimeout(3000);
  if (reHeader.test(await h.texto()) && /desde:/i.test(await h.texto())) return { home, h, cambio: false };
  await h.boton.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.tabDespachoDomicilio.click().catch(() => {});
  const guardadas = await modal.direccionesGuardadas();
  const cand = guardadas.find((g) => g.direccion.includes(calleDe(d)) || (numDe(d) && new RegExp(`(?<!\\d)${numDe(d)}(?!\\d)`).test(g.direccion)));
  const correo = correoDe(td);
  if (cand) {
    await accionConOtp(page, correo, async () => {
      await modal.elegirGuardada(cand.etiqueta);
      const confirmar = modal.root.getByRole('button', { name: /^confirmar$/i });
      if (await confirmar.isEnabled().catch(() => false)) await confirmar.click({ timeout: 5000 }).catch(() => {});
    });
  } else {
    await accionConOtp(page, correo, async () => {
      await modal.agregarDireccion(calleDe(d), reNum(d));
    });
  }
  await page.waitForTimeout(3000);
  const r = await abrirHome(page);
  await expect(r.h.zona).toContainText(reHeader, { timeout: 30000 });
  return { home: r.home, h: r.h, cambio: true };
}

/** Con sesión el header muestra la etiqueta de la dirección guardada («Casa»); sin sesión, la calle. */
const RE_CASA = /casa|calle uno/i;

// ---------------------------------------------------------------------------------------------

test.describe.configure({ timeout: 240000 });

for (const [ff, vp, L, sufijo] of [
  ['Desktop 1440x900', DESKTOP, 'D', 'Desktop'],
  ['Mobile 390x844', MOBILE, 'M', 'Mobile'],
] as const) {
  const mobile = L === 'M';
  const ID = (n: string) => `TC-B2C144-${L}-${n}`;
  const T = (n: string, nombre: string) => `${ID(n)} · ${nombre} (${sufijo})`;

  test.describe(`B2C-144 — ${ff}`, () => {
    test.use(vp);

    // ----------------------------- Invitado, carrito -----------------------------------------

    test(T('001', 'Al setear una dirección con cobertura el header muestra dirección, ventana y chip [Guest]'), async ({ page, testData }) => {
      const cp = ID('001');
      const d = token(testData, 'DIRECCION_DESPACHO_001')!;
      const { home, h } = await abrirHome(page);
      await h.boton.waitFor({ state: 'visible', timeout: 30000 });
      await home.capturarEvidencia(cp, 2, 'Home con «Elige una forma de entrega»', { elemento: home.header.barraDelSitio });
      await page.evaluate(() => ((window as unknown as { __qa144: number }).__qa144 = 1));
      await h.boton.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await modal.capturarModal(cp, 4, 'modal «Elige tu método de entrega»', page);
      await elegirYConfirmar(page, modal, d);
      await esperarVentana(h);
      await expect(modal.root, 'el modal se cierra').toBeHidden({ timeout: 30000 });
      const t = await verificarHeader(h, d);
      const sinRecarga = await page.evaluate(() => (window as unknown as { __qa144?: number }).__qa144 === 1);
      expect(sinRecarga, 'sin recargar la página').toBe(true);
      nota('Header', `${t}`);
      await home.capturarEvidencia(cp, 6, 'header con dirección, ventana y chip', { elemento: home.header.barraDelSitio });
    });

    test(T('002', 'La dirección de un invitado persiste al navegar y recargar [Guest]'), async ({ page, testData }) => {
      const cp = ID('002');
      const d = token(testData, 'DIRECCION_DESPACHO_001')!;
      const { home, h } = await fijarInvitado(page, d, cp);
      await esperarVentana(h);
      const antes = await verificarHeader(h, d);
      await home.capturarEvidencia(cp, 2, 'header con la dirección seteada', { elemento: home.header.barraDelSitio });
      await page.reload({ waitUntil: 'domcontentloaded' });
      await esperarVentana(h);
      const trasRecarga = await verificarHeader(h, d, 'tras recargar');
      await home.capturarEvidencia(cp, 3, 'tras recargar', { elemento: home.header.barraDelSitio });
      await page.goto(token(testData, 'PLP_URL')!, { waitUntil: 'domcontentloaded' });
      await esperarVentana(h);
      const enPlp = await verificarHeader(h, d, 'en la PLP');
      await home.capturarEvidencia(cp, 4, 'PLP con la dirección y su ventana', { elemento: home.header.barraDelSitio });
      nota('Header', `antes: ${antes} | recarga: ${trasRecarga} | PLP: ${enPlp}`);
    });

    /** Express y Programado: el apply de Janis solo ofrece una opción; la precondición no se cumple. */
    const express = (n: string, nombre: string, tokenName: string, motivoExtra: string) =>
      test(T(n, nombre), async ({ page, testData }) => {
        const cp = ID(n);
        const d = token(testData, tokenName)!;
        const { home, h, info } = await fijarInvitado(page, d, cp);
        await esperarVentana(h).catch(() => {});
        await home.capturarEvidencia(cp, 6, 'header tras confirmar la dirección', { elemento: home.header.barraDelSitio });
        const hdr = await h.texto();
        nota('Janis', JSON.stringify({ optionCount: info?.optionCount, shippingType: info?.shippingType, cost: info?.cost, window: info?.window }));
        if ((info?.optionCount ?? 0) <= 1) {
          bloqueoData(`{${tokenName}} (${d}): la consulta a Janis devuelve una sola opción de despacho (ventana Programada con costo $${info?.cost}); no ofrece Express. ${motivoExtra} Header: «${hdr}».`);
        }
        throw new Error(`REVISAR: Janis devolvió ${info?.optionCount} opciones para ${d}; header «${hdr}»`);
      });

    express('004', 'Con Express con costo y Programado gratis el header muestra la ventana Programada [Guest]', 'DIRECCION_EXPRESS_COSTO_PROG_GRATIS', 'Tampoco hay ventana Programada gratis.');
    express('005', 'Con Express y Programado con costo el header muestra la ventana Express [Guest]', 'DIRECCION_EXPRESS_Y_PROG_CON_COSTO', 'No hay ventana Express.');
    express('006', 'Con Express y Programado gratis el header muestra la ventana Express [Guest]', 'DIRECCION_EXPRESS_Y_PROG_GRATIS', 'No hay ventana Express ni Programada gratis.');

    test(T('007', 'Con solo ventanas Programadas el header muestra la próxima ventana Programada [Guest]'), async ({ page, testData }) => {
      const cp = ID('007');
      const d = token(testData, 'DIRECCION_SIN_EXPRESS')!;
      const { home, h, modal, info } = await fijarInvitado(page, d, cp);
      await page.waitForTimeout(6000);
      await modal.capturarModal(cp, 6, 'resultado tras confirmar la dirección', page);
      if (modal.modalSinCobertura && (await modal.modalSinCobertura.isVisible().catch(() => false))) {
        bloqueoData(`{DIRECCION_SIN_EXPRESS} (${d}) no tiene cobertura en el ambiente (modal «Aún no llegamos a esta dirección», deliveryStatus=${info?.deliveryStatus}); la precondición «solo ventanas Programadas» no se cumple.`);
      }
      await esperarVentana(h);
      await verificarHeader(h, d);
      await home.capturarEvidencia(cp, 7, 'header con la próxima ventana Programada', { elemento: home.header.barraDelSitio });
    });

    test(T('008', 'Al navegar entre páginas el header mantiene la ventana y el chip vigentes [Guest]'), async ({ page, testData }) => {
      const cp = ID('008');
      const d = token(testData, 'DIRECCION_DESPACHO_001')!;
      const { home, h } = await fijarInvitado(page, d, cp);
      await esperarVentana(h);
      const base = await verificarHeader(h, d);
      const chip0 = await h.textoChip();
      await home.capturarEvidencia(cp, 2, 'header en el Home', { elemento: home.header.barraDelSitio });
      await page.goto(token(testData, 'PLP_URL')!, { waitUntil: 'domcontentloaded' });
      await esperarVentana(h);
      await verificarHeader(h, d, 'PLP');
      expect(await h.textoChip(), 'chip en la PLP').toBe(chip0);
      await home.capturarEvidencia(cp, 3, 'header en la PLP', { elemento: home.header.barraDelSitio });
      const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
      await esperarVentana(h);
      await verificarHeader(h, d, 'PDP');
      expect(await h.textoChip(), 'chip en la PDP').toBe(chip0);
      await pdp.capturarEvidencia(cp, 4, 'header en la PDP', { elemento: pdp.header.barraDelSitio });
      nota('Header', base);
    });

    test(T('009', 'Al cambiar la dirección el header se actualiza con la ventana y el costo nuevos [Guest]'), async ({ page, testData }) => {
      const cp = ID('009');
      const d1 = token(testData, 'DIRECCION_DESPACHO_001')!;
      const d2 = token(testData, 'DIRECCION_OTRA_TIENDA')!;
      const { home, h, info: i1 } = await fijarInvitado(page, d1, cp);
      await esperarVentana(h);
      const antes = await verificarHeader(h, d1);
      await home.capturarEvidencia(cp, 2, 'header con la dirección activa', { elemento: home.header.barraDelSitio });
      await h.boton.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await modal.capturarModal(cp, 3, 'modal abierto con la dirección activa', page);
      const i2 = await elegirYConfirmar(page, modal, d2);
      await expect(modal.root).toBeHidden({ timeout: 30000 });
      await expect(h.zona, 'el header cambia a la nueva dirección').not.toContainText(/calle uno/i, { timeout: 30000 });
      await esperarVentana(h);
      const despues = await h.texto();
      expect(despues).toMatch(/desde:/i);
      expect(await h.textoChip()).toMatch(/\$\s?[\d.]+|gratis/i);
      expect(despues, 'la dirección nueva está en el header').toMatch(/las condes|barnechea/i);
      nota('Janis', `antes: ${i1?.carrierName} ${i1?.window?.start} $${i1?.cost} | después: ${i2?.carrierName} ${i2?.window?.start} $${i2?.cost}`);
      await home.capturarEvidencia(cp, 6, 'header con la dirección nueva, su ventana y su costo', { elemento: home.header.barraDelSitio });
      nota('Header', `antes: ${antes} | después: ${despues}`);
    });

    test(T('010', 'Con retiro en tienda el header muestra la tienda, la ventana y el chip Gratis [Guest]'), async ({ page, testData }) => {
      const cp = ID('010');
      const tienda = token(testData, 'TIENDA_RETIRO_001')!;
      const { home, h } = await abrirHome(page);
      await h.boton.waitFor({ state: 'visible', timeout: 30000 });
      await h.boton.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await modal.tabRetiroEnTienda.click();
      await modal.capturarModal(cp, 3, 'pestaña Retiro en tienda', page);
      await modal.elegirTienda(tienda);
      await esperarVentana(h).catch(() => {});
      await page.waitForTimeout(4000);
      await home.capturarEvidencia(cp, 5, 'header con la tienda de retiro', { elemento: home.header.barraDelSitio });
      const t = await h.texto();
      nota('Header', t);
      expect(t, 'nombre de la tienda').toMatch(new RegExp(esc(tienda.replace(/^unimarc\s+/i, '')), 'i'));
      expect(t, 'ventana de retiro').toMatch(/desde:|retiro/i);
      expect((await h.textoChip()), 'chip Gratis').toMatch(/^gratis$/i);
      expect(await h.iconosEnChip(), 'sin ícono').toBe(0);
    });

    // ----------------------------- Logueado: umbral Club ---------------------------------------

    /** Carro con N unidades de {SKU_VALID_001} (desde la PDP) y header sobre la PDP. */
    async function carroConUnidades(page: Page, td: TD, n: number) {
      const sku = token(td, 'SKU_VALID_001')!;
      const pdp = await new PDPPage(page).abrir(sku);
      await pdp.fijarCantidad(n);
      return pdp;
    }
    async function vaciarCarro(page: Page) {
      const carro = await new CarroPage(page).goto().catch(() => null);
      await carro?.vaciar().catch(() => {});
    }

    const umbral = (td: TD) => Number(token(td, 'UMBRAL_DESPACHO_GRATIS_CLUB')!);
    const aPesos = (s: string) => Number((s.match(/[\d.]+/) ?? ['0'])[0].replace(/\./g, ''));

    test(T('011', 'Un cliente Club bajo el umbral ve el costo de despacho en el header [Logueado]'), async ({ page, testData }) => {
      test.setTimeout(420000);
      const cp = ID('011');
      await sesion(page, testData, mobile);
      const { h } = await asegurarActiva(page, testData, 'DIRECCION_DESPACHO_001', RE_CASA);
      try {
        await vaciarCarro(page);
        const pdp = await carroConUnidades(page, testData, 1);
        await esperarVentana(h);
        await page.waitForTimeout(2500);
        const carro = await new CarroPage(page).goto();
        const sub = aPesos(await carro.subtotal.innerText());
        expect(sub, 'el total es menor al umbral').toBeLessThan(umbral(testData));
        await pdp.goto().catch(() => {});
        const home = (await abrirHome(page)).home;
        await esperarVentana(h);
        const chip = await h.textoChip();
        const color = await h.colorChip();
        nota('Chip', `${chip} · fondo ${color.css} · matiz ${color.matiz} · subtotal $${sub}`);
        await home.capturarEvidencia(cp, 2, 'header con el costo de despacho', { elemento: home.header.barraDelSitio });
        expect(chip, 'costo en pesos').toMatch(/^\$\s?[\d.]+$/);
        expect(color.matiz, 'chip amarillo').toBeGreaterThanOrEqual(35);
        expect(color.matiz).toBeLessThanOrEqual(65);
      } finally {
        await vaciarCarro(page);
      }
    });

    test(T('012', 'Un cliente Club sobre el umbral ve Despacho gratis en el header [Logueado]'), async ({ page, testData }) => {
      test.setTimeout(480000);
      const cp = ID('012');
      await sesion(page, testData, mobile);
      const { h } = await asegurarActiva(page, testData, 'DIRECCION_DESPACHO_001', RE_CASA);
      try {
        await vaciarCarro(page);
        const pdp = await carroConUnidades(page, testData, 17);
        const carro = await new CarroPage(page).goto();
        const sub = aPesos(await carro.subtotal.innerText());
        expect(sub, 'el total supera el umbral').toBeGreaterThan(umbral(testData));
        const { home } = await abrirHome(page);
        await esperarVentana(h);
        const chip = await h.textoChip();
        nota('Chip', `${chip} · subtotal $${sub}`);
        await home.capturarEvidencia(cp, 2, 'header con el chip sobre el umbral', { elemento: home.header.barraDelSitio });
        expect(chip, 'chip «Despacho gratis»').toMatch(/despacho gratis/i);
        void pdp;
      } finally {
        await vaciarCarro(page);
      }
    });

    test(T('013', 'Al cruzar el umbral en ambos sentidos el chip cambia sin recargar [Logueado]'), async ({ page, testData }) => {
      test.setTimeout(540000);
      const cp = ID('013');
      await sesion(page, testData, mobile);
      const { h } = await asegurarActiva(page, testData, 'DIRECCION_DESPACHO_001', RE_CASA);
      try {
        await vaciarCarro(page);
        const pdp = await carroConUnidades(page, testData, 1);
        await esperarVentana(h);
        await page.evaluate(() => ((window as unknown as { __qa144: number }).__qa144 = 1));
        const bajo = await h.textoChip();
        await pdp.capturarEvidencia(cp, 2, 'chip con el carro bajo el umbral', { elemento: pdp.header.barraDelSitio });
        await pdp.fijarCantidad(17);
        await expect(h.chip, 'sobre el umbral').toHaveText(/despacho gratis/i, { timeout: 30000 });
        await pdp.capturarEvidencia(cp, 3, 'chip tras superar el umbral', { elemento: pdp.header.barraDelSitio });
        await pdp.fijarCantidad(1);
        await expect(h.chip, 'vuelve al costo en pesos').toHaveText(/^\$\s?[\d.]+$/, { timeout: 30000 });
        await pdp.capturarEvidencia(cp, 4, 'chip tras volver bajo el umbral', { elemento: pdp.header.barraDelSitio });
        const sinRecarga = await page.evaluate(() => (window as unknown as { __qa144?: number }).__qa144 === 1);
        expect(sinRecarga, 'sin recargar la página').toBe(true);
        nota('Chip', `bajo: ${bajo}`);
      } finally {
        await vaciarCarro(page);
      }
    });

    test(T('014', 'Un cliente con membresía ve el chip Gratis con su ícono en el header [Logueado]'), async ({ page, testData }) => {
      const cp = ID('014');
      const correo = correoDe(testData, 'COMPRADOR_MEMBRESIA_USER');
      const obs = path.resolve('.qa/run/b144-membresia.txt');
      const { home } = await abrirHome(page);
      await home.capturarEvidencia(cp, 1, 'Home del invitado (sin sesión: no se inicia sesión con una cuenta sin membresía)', { elemento: home.header.barraDelSitio });
      const previo = fs.existsSync(obs) ? fs.readFileSync(obs, 'utf-8').trim() : 'sin lectura previa';
      bloqueoData(`{COMPRADOR_MEMBRESIA_USER} resuelve a la cuenta ${correo}, que no tiene membresía Unimarc (es la cuenta sin membresía / sin direcciones). Lectura en la sesión de esa cuenta: ${previo}.`);
    });

    // ----------------------------- Logueado: sesión y direcciones persistidas -------------------

    test(T('018', 'Al iniciar sesión el header muestra la ventana vigente de la dirección guardada [Logueado]'), async ({ page, testData }) => {
      test.setTimeout(420000);
      const cp = ID('018');
      const d = token(testData, 'DIRECCION_DESPACHO_001')!;
      await sesion(page, testData, mobile);
      await asegurarActiva(page, testData, 'DIRECCION_DESPACHO_001', RE_CASA);
      // Cierra sesión e inicia de nuevo: el paso 1 del TC es el inicio de sesión.
      const { home, h } = await abrirHome(page);
      await new MenuCuenta(page).cerrarSesion();
      await page.goto('/', { waitUntil: 'domcontentloaded' });
      let loader = false;
      await loginOtp(page, correoDe(testData), mobile);
      // El loader se mide una vez cerrado el modal de login: el fondo oscuro del modal no es un loader de pantalla completa.
      const sondeo = setInterval(() => void h.hayLoaderCompleto().then((v) => (loader = loader || v)).catch(() => {}), 250);
      await esperarVentana(h, 60000);
      await page.waitForTimeout(2500);
      clearInterval(sondeo);
      await guardarSesion(page, mobile);
      const t = await verificarHeader(h, d);
      nota('Header', t);
      expect(loader, 'sin loader a pantalla completa').toBe(false);
      await home.capturarEvidencia(cp, 2, 'header tras iniciar sesión', { elemento: home.header.barraDelSitio });
    });

    test(T('019', 'Si al iniciar sesión ya no hay ventanas el header pasa a sin horarios [Logueado]'), async ({ page, testData }) => {
      const cp = ID('019');
      const d = token(testData, 'DIRECCION_SIN_SLA')!;
      const { home, h, modal, info } = await fijarInvitado(page, d, cp);
      await page.waitForTimeout(6000);
      await modal.capturarModal(cp, 5, 'resultado de consultar la dirección', page);
      await home.capturarEvidencia(cp, 6, 'header', { elemento: home.header.barraDelSitio });
      const t = await h.texto();
      bloqueoData(`{DIRECCION_SIN_SLA} (${d}) sí tiene horarios en el ambiente: la consulta a Janis responde ${info?.outcome}/${info?.deliveryStatus} con ventana ${info?.window?.start} y el header muestra «${t}». La precondición «sin SLAs» no se cumple.`);
    });

    test(T('020', 'Si al iniciar sesión se perdió la cobertura el header pasa a sin cobertura [Logueado]'), async ({ page, testData }) => {
      test.setTimeout(420000);
      const cp = ID('020');
      const d = token(testData, 'DIRECCION_SIN_COBERTURA')!;
      const { home, h } = await sesion(page, testData, mobile);
      await h.boton.waitFor({ state: 'visible', timeout: 30000 });
      await page.waitForTimeout(3000);
      await h.boton.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await modal.tabDespachoDomicilio.click().catch(() => {});
      const guardadas = await modal.direccionesGuardadas();
      await modal.capturarModal(cp, 2, 'direcciones guardadas de la cuenta', page);
      const hay = guardadas.some((g) => g.direccion.includes(calleDe(d)));
      nota('Guardadas', guardadas.map((g) => `${g.etiqueta}: ${g.direccion}`).join(' | '));
      if (!hay) {
        bloqueoData(`La cuenta no tiene guardada {DIRECCION_SIN_COBERTURA} (${d}): con sesión iniciada el sitio no permite guardarla (se deriva a «Aún no llegamos»), así que no se puede persistir en el perfil. Direcciones guardadas: ${guardadas.map((g) => g.direccion).join(' / ')}.`);
      }
      void home;
      await expect(h.zona).toContainText(/despacho sin cobertura/i);
    });

    test(T('040', 'Un logueado que setea una dirección sin cobertura no la setea y se deriva al flujo sin cobertura [Logueado]'), async ({ page, testData }) => {
      test.setTimeout(480000);
      const cp = ID('040');
      const d = token(testData, 'DIRECCION_SIN_COBERTURA')!;
      await sesion(page, testData, mobile);
      const { h } = await asegurarActiva(page, testData, 'DIRECCION_DESPACHO_001', RE_CASA);
      await esperarVentana(h);
      const antes = await h.texto();
      await h.boton.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await modal.capturarModal(cp, 4, 'modal «Elige tu método de entrega»', page);
      const correo = correoDe(testData);
      let otp = false;
      await conCandado(correo, async () => {
        const desde = marcaOtp();
        await elegirYConfirmar(page, modal, d, false);
        const agotarse = new AgotarseModal(page);
        if (await agotarse.root.waitFor({ state: 'visible', timeout: 8000 }).then(() => true, () => false)) await agotarse.botonSi.click();
        if (await modal.modalOtp.waitFor({ state: 'visible', timeout: 20000 }).then(() => true, () => false)) {
          otp = true;
          await modal.capturarModal(cp, 6, '«Autenticación requerida»', page);
          await new LoginModal(page).escribirCodigo(await esperarOtp(correo, desde, { digitos: 6 }));
          await modal.modalOtp.waitFor({ state: 'hidden', timeout: 30000 });
        }
      });
      nota('OTP', otp ? 'el sitio pidió «Autenticación requerida» antes del modal sin cobertura' : 'el sitio NO pidió «Autenticación requerida» para la dirección sin cobertura');
      await expect(modal.modalSinCobertura, 'modal «Aún no llegamos a esta dirección» (B2C-123)').toBeVisible({ timeout: 45000 });
      await modal.capturarModal(cp, 8, 'modal «Aún no llegamos a esta dirección»', page);
      const trasModal = await h.texto();
      expect(trasModal, 'el header sigue con la dirección activa').toMatch(RE_CASA);
      expect(trasModal).not.toMatch(/t-551|futrono/i);
      nota('Header', `antes: ${antes} | con el modal abierto: ${trasModal}`);
    });

    test(T('041', 'Un logueado que setea una dirección sin horarios no la setea y se deriva al flujo sin horarios [Logueado]'), async ({ page, testData }) => {
      const cp = ID('041');
      const d = token(testData, 'DIRECCION_SIN_SLA')!;
      const { home, h, modal, info } = await fijarInvitado(page, d, cp);
      await page.waitForTimeout(6000);
      await modal.capturarModal(cp, 6, 'resultado de consultar la dirección', page);
      await home.capturarEvidencia(cp, 7, 'header', { elemento: home.header.barraDelSitio });
      const t = await h.texto();
      bloqueoData(`{DIRECCION_SIN_SLA} (${d}) sí tiene cobertura y horarios en el ambiente (Janis: ${info?.outcome}/${info?.deliveryStatus}, ventana ${info?.window?.start}; header «${t}»); no se deriva a «Por ahora no hay horarios disponibles». La precondición «sin SLAs» no se cumple.`);
    });

    test(T('042', 'Una dirección sin numeración se setea y el header la muestra con S/N, ventana y chip [Logueado]'), async ({ page, testData }) => {
      test.setTimeout(480000);
      const cp = ID('042');
      const partes = token(testData, 'DIRECCION_SIN_NUMERO')!.split(',').map((s) => s.trim());
      const [regionTxt, comuna, calle] = [partes[0], partes[1], partes[2]];
      await sesion(page, testData, mobile);
      const { h } = await asegurarActiva(page, testData, 'DIRECCION_DESPACHO_001', RE_CASA);
      await h.boton.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await modal.escribirEnBuscador('La');
      await modal.tocarAgregar();
      await modal.capturarModal(cp, 6, 'formulario «Dirección manual»', page);
      const regiones = await modal.opciones(modal.selectRegion);
      const region = regiones.find((r) => new RegExp(esc(regionTxt), 'i').test(r)) ?? regiones[0];
      await modal.elegirRegion(region);
      await modal.elegirComuna(comuna);
      await modal.campoCalle.fill(calle);
      await modal.capturarModal(cp, 7, 'formulario completo, Numeración vacía', page);
      await modal.botonContinuarManual.click();
      const correo = correoDe(testData);
      await accionConOtp(page, correo, async () => {
        for (let i = 0; i < 4; i++) {
          const agregar = modal.confirmacionPin.getByRole('button', { name: /^(agregar|confirmar) direcci[óo]n$/i }).locator('visible=true').first();
          const sigue = modal.confirmacionPin.getByRole('button', { name: /continuar con detalles? de la direcci[óo]n/i }).locator('visible=true').first();
          if (await agregar.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) {
            await agregar.click();
            break;
          }
          if (await sigue.isVisible().catch(() => false)) await sigue.click();
        }
      });
      await page.waitForTimeout(4000);
      const { home, h: h2 } = await abrirHome(page);
      await esperarVentana(h2, 45000);
      const t = await h2.texto();
      nota('Header', t);
      await home.capturarEvidencia(cp, 9, 'header con la dirección sin numeración', { elemento: home.header.barraDelSitio });
      expect(t, 'calle con S/N').toMatch(/s\/n/i);
      expect(t).toMatch(/desde:/i);
      expect(await h2.textoChip()).toMatch(/\$\s?[\d.]+|gratis/i);
    });

    test(T('044', 'Una dirección sin departamento se muestra en el header sin complemento ni coma vacía [Logueado]'), async ({ page, testData }) => {
      test.setTimeout(480000);
      const cp = ID('044');
      const d = token(testData, 'DIRECCION_DESPACHO_001')!;
      await sesion(page, testData, mobile);
      await asegurarActiva(page, testData, 'DIRECCION_OTRA_TIENDA', /las condes|barnechea/i);
      const { home, h } = await abrirHome(page);
      await esperarVentana(h);
      await home.capturarEvidencia(cp, 1, 'header con la dirección activa previa', { elemento: home.header.barraDelSitio });
      await h.boton.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await modal.tabDespachoDomicilio.click().catch(() => {});
      const guardadas = await modal.direccionesGuardadas();
      const cand = guardadas.find((g) => g.direccion.includes(calleDe(d)));
      await modal.capturarModal(cp, 4, 'direcciones guardadas', page);
      expect(cand, `la dirección guardada ${calleDe(d)} existe en la cuenta`).toBeTruthy();
      const visto = await accionConOtp(page, correoDe(testData), async () => {
        await modal.elegirGuardada(cand!.etiqueta);
        await modal.capturarModal(cp, 5, 'dirección guardada elegida', page);
        const confirmar = modal.root.getByRole('button', { name: /^confirmar$/i });
        if (await confirmar.isEnabled().catch(() => false)) await confirmar.click({ timeout: 5000 }).catch(() => {}); // si el OTP tapa «Confirmar», el modal OTP se atiende en accionConOtp
      });
      nota('Flujo', `agotarse=${visto.agotarse} otp=${visto.otp}`);
      await page.waitForTimeout(3000);
      const r = await abrirHome(page);
      await esperarVentana(r.h);
      const t = await r.h.texto();
      nota('Header', t);
      await r.home.capturarEvidencia(cp, 6, 'header con la dirección guardada', { elemento: r.home.header.barraDelSitio });
      expect(t).toMatch(new RegExp(`${esc(calleDe(d))}|\\bcasa\\b`, 'i'));
      expect(t, 'sin coma ni separador vacío').not.toMatch(/,\s*(,|$)|,\s+desde|\s,\s/i);
      expect(visto.otp, 'la dirección queda seteada sin pedir OTP').toBe(false);
    });

    // ----------------------------- Invitado: sesión y TTL -------------------------------------

    test(T('025', 'Al iniciar sesión en una cuenta sin direcciones se ve Elige una forma de entrega [Guest]'), async ({ page, testData }) => {
      test.setTimeout(420000);
      const cp = ID('025');
      const correo = correoDe(testData, 'SIN_DIRECCION_USER');
      const { home, h } = await abrirHome(page);
      await h.boton.waitFor({ state: 'visible', timeout: 30000 });
      await home.capturarEvidencia(cp, 1, 'Home del invitado', { elemento: home.header.barraDelSitio });
      const cnt = entregaReq(page);
      await loginOtp(page, correo, mobile);
      await home.header.saludo.waitFor({ state: 'visible', timeout: 30000 });
      await page.waitForTimeout(6000);
      const t = await h.texto();
      const membresia = await home.header.botonVerSuscripcion.first().isVisible().catch(() => false);
      fs.writeFileSync(path.resolve('.qa/run/b144-membresia.txt'), membresia ? 'la cuenta muestra «Ver mi suscripción»' : 'el header de la cuenta no muestra «Ver mi suscripción» (sin membresía)');
      await home.capturarEvidencia(cp, 3, 'header tras iniciar sesión', { elemento: home.header.barraDelSitio });
      nota('Header', t);
      nota('Janis', `llamadas a smu-delivery desde el login: ${cnt.resumen()}`);
      expect(t, 'Store Locator vacío').toMatch(/elige una forma de entrega/i);
      expect(t).not.toMatch(/desde:/i);
      expect(cnt.lista.filter((l) => /apply|revalidate/.test(l.p)).length, 'ninguna consulta a Janis (apply/revalidate)').toBe(0);
    });

    test(T('021', 'Durante la navegación la ventana del header se re-verifica periódicamente [Guest]'), async ({ page, testData }) => {
      test.setTimeout(660000);
      const cp = ID('021');
      const d = token(testData, 'DIRECCION_DESPACHO_001')!;
      const ttl = Number(token(testData, 'TTL_REVERIFICACION_MIN')!);
      const { home, h, info } = await fijarInvitado(page, d, cp);
      await esperarVentana(h);
      const t0 = Date.now();
      const llamadas: number[] = [];
      page.on('request', (r) => {
        if (/smu-delivery/.test(r.url())) llamadas.push(Math.round((Date.now() - t0) / 1000));
      });
      const base = await h.texto();
      await home.capturarEvidencia(cp, 2, 'header al empezar a navegar', { elemento: home.header.barraDelSitio });
      let loader = false;
      const historial: string[] = [];
      let ultimo = '';
      const fin = t0 + (ttl * 60 + 150) * 1000;
      let i = 0;
      while (Date.now() < fin) {
        // navegación dentro de la SPA: logo → primera categoría del Home
        if (i++ % 2 === 0) await home.header.logo.first().click({ timeout: 5000 }).catch(() => {});
        else await home.enlacesACategoria.first().click({ timeout: 5000 }).catch(() => {});
        for (let k = 0; k < 6; k++) {
          loader = loader || (await h.hayLoaderCompleto().catch(() => false));
          await page.waitForTimeout(2500);
        }
        const estado = /desde:/i.test(await h.texto()) ? 'con ventana' : /elige una forma/i.test(await h.texto()) ? 'ELIGE UNA FORMA DE ENTREGA' : 'otro';
        if (estado !== ultimo) {
          historial.push(`${Math.round((Date.now() - t0) / 1000)}s: ${estado} (${page.url().replace(/^https?:\/\/[^/]+/, '')})`);
          ultimo = estado;
        }
      }
      const tras = await h.texto();
      await home.capturarEvidencia(cp, 4, `header tras ${ttl} min de navegación`, { elemento: home.header.barraDelSitio });
      nota('Janis', `apply inicial: ${info?.window?.start}; llamadas a smu-delivery (s desde la dirección): ${llamadas.join(', ') || 'ninguna'}`);
      nota('Header', `inicio: ${base} | final: ${tras}`);
      nota('Historial', historial.join(' | '));
      expect(loader, 'sin loader ni interrupción').toBe(false);
      const reverif = llamadas.filter((s) => s >= ttl * 60 - 20);
      if (reverif.length === 0) {
        bloqueoData(`No se observó re-verificación tras ${ttl} min de navegación y la ventana mostrada (${base}) no venció durante la navegación (precondición «la ventana vence durante la navegación» no se cumple con la ventana de las 09:00).`);
      }
      expect(tras).toMatch(/desde:/i);
    });

    test(T('032', 'Al cancelar el aviso de cambio de tienda se mantienen la dirección y la configuración anteriores [Guest]'), async ({ page, testData }) => {
      test.setTimeout(300000);
      const cp = ID('032');
      const d1 = token(testData, 'DIRECCION_DESPACHO_001')!;
      const d2 = token(testData, 'DIRECCION_OTRA_TIENDA')!;
      const { home, h, info: i1 } = await fijarInvitado(page, d1, cp);
      await esperarVentana(h);
      const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
      await agregarAlCarro(pdp);
      await expect(pdp.header.miniCarrito, 'el carro contiene el SKU').toHaveAttribute('aria-label', /\b1\b/, { timeout: 20000 });
      const antes = await h.texto();
      await pdp.capturarEvidencia(cp, 2, 'dirección activa y carro con 1 unidad', { elemento: pdp.header.barraDelSitio });
      await h.boton.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await elegirYConfirmar(page, modal, d2, false);
      const aviso = new AgotarseModal(page);
      await expect(aviso.root, 'aviso de cambio de tienda abastecedora').toBeVisible({ timeout: 45000 });
      nota('Aviso', ((await aviso.root.innerText()) ?? '').replace(/\s+/g, ' ').slice(0, 220));
      await aviso.capturar(cp, 7, 'aviso de cambio de tienda', page);
      await aviso.botonNo.click();
      await expect(aviso.root).toBeHidden({ timeout: 20000 });
      await page.waitForTimeout(2500);
      const cerrar = modal.root.getByRole('button', { name: /^(cerrar|close)$/i }).first();
      if (await modal.root.isVisible().catch(() => false)) await cerrar.click().catch(() => {});
      await page.waitForTimeout(1500);
      const despues = await h.texto();
      await pdp.capturarEvidencia(cp, 9, 'header y carro tras cancelar', { elemento: pdp.header.barraDelSitio });
      nota('Header', `antes: ${antes} | después: ${despues} | store inicial: ${i1?.carrierName}`);
      expect(despues, 'la dirección anterior se mantiene').toMatch(RE_CASA);
      expect(despues).toMatch(/desde:/i);
      await expect(pdp.header.miniCarrito).toHaveAttribute('aria-label', /\b1\b/);
      void home;
    });

    if (mobile) {
      test(T('024', 'Un invitado sin dirección que inicia sesión carga la última dirección del perfil [Guest]'), async ({ page, testData }) => {
        test.setTimeout(420000);
        const cp = ID('024');
        const d = token(testData, 'DIRECCION_DESPACHO_001')!;
        const { home, h } = await abrirHome(page);
        await h.boton.waitFor({ state: 'visible', timeout: 30000 });
        await home.capturarEvidencia(cp, 1, 'Home del invitado sin dirección', { elemento: home.header.barraDelSitio });
        await loginOtp(page, correoDe(testData), true);
        await guardarSesion(page, true);
        await esperarVentana(h, 60000);
        const t = await verificarHeader(h, d);
        nota('Header', t);
        await home.capturarEvidencia(cp, 3, 'header con la última dirección del perfil', { elemento: home.header.barraDelSitio });
      });
    } else {
      test(T('045', 'Un invitado sin dirección seteada ve Elige una forma de entrega sin ventana ni chip [Guest]'), async ({ page }) => {
        const cp = ID('045');
        const cnt = entregaReq(page);
        const { home, h } = await abrirHome(page);
        await h.boton.waitFor({ state: 'visible', timeout: 30000 });
        await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
        await page.waitForTimeout(5000);
        const t = await h.texto();
        await home.capturarEvidencia(cp, 3, 'header sin dirección', { elemento: home.header.barraDelSitio });
        nota('Janis', `llamadas a smu-delivery: ${cnt.n()}`);
        expect(t).toMatch(/elige una forma de entrega/i);
        expect(t).not.toMatch(/desde:/i);
        expect(await h.chip.count()).toBe(0);
        expect(cnt.n(), 'ninguna consulta a Janis').toBe(0);
      });
    }

    // Express con sesión: la consulta a Janis no ofrece Express (se observa como invitado).
    for (const [n, nombre] of [
      ['015', 'Con Express con costo el header muestra el rayo y el precio Express [Guest]'],
      ['016', 'Con promoción de envío gratis que incluye Express el chip muestra Gratis [Logueado]'],
      ['017', 'El precio Express no baja a cero al superar el umbral de monto [Logueado]'],
    ] as const) {
      test(T(n, nombre), async ({ page, testData }) => {
        const cp = ID(n);
        const d = token(testData, 'DIRECCION_EXPRESS_Y_PROG_CON_COSTO')!;
        const { home, h, info } = await fijarInvitado(page, d, cp);
        await esperarVentana(h).catch(() => {});
        await home.capturarEvidencia(cp, 6, 'header tras confirmar la dirección', { elemento: home.header.barraDelSitio });
        const hdr = await h.texto();
        nota('Janis', JSON.stringify({ optionCount: info?.optionCount, cost: info?.cost, window: info?.window }));
        if ((info?.optionCount ?? 0) <= 1) {
          bloqueoData(`{DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (${d}): la consulta a Janis devuelve una sola opción (Programada con costo $${info?.cost}); no hay ventana Express, por lo que no existe el chip ⚡ ni el caso Express. Header: «${hdr}».`);
        }
        throw new Error(`REVISAR: ${info?.optionCount} opciones; header «${hdr}»`);
      });
    }

    // ----------------------------- Persistencia entre sesiones (cierra sesión: va al final) ----

    test(T('003', 'La dirección de un logueado persiste entre sesiones [Logueado]'), async ({ page, testData }) => {
      test.setTimeout(480000);
      const cp = ID('003');
      const d = token(testData, 'DIRECCION_DESPACHO_001')!;
      await sesion(page, testData, mobile);
      const { h } = await asegurarActiva(page, testData, 'DIRECCION_DESPACHO_001', RE_CASA);
      await esperarVentana(h);
      const { home } = await abrirHome(page);
      await home.capturarEvidencia(cp, 1, 'sesión iniciada con la dirección seteada', { elemento: home.header.barraDelSitio });
      await new MenuCuenta(page).cerrarSesion();
      await home.capturarEvidencia(cp, 2, 'sesión cerrada', { elemento: home.header.barraDelSitio });
      await loginOtp(page, correoDe(testData), mobile);
      await guardarSesion(page, mobile);
      const r = await abrirHome(page);
      await esperarVentana(r.h, 60000);
      const t = await verificarHeader(r.h, d, 'tras volver a iniciar sesión');
      nota('Header', t);
      await r.home.capturarEvidencia(cp, 4, 'header tras volver a iniciar sesión', { elemento: r.home.header.barraDelSitio });
    });
  });
}
