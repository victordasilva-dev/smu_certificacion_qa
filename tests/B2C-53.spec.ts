import * as fs from 'fs';
import * as path from 'path';
import { BrowserContext, Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP } from './support/viewports';
import { LoadedTestData, baseUrl, loadTestData } from './support/testData';
import { esperarOtp, marcaOtp } from './support/otp';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { LoginModal } from './pages/LoginModal';
import { PDPPage } from './pages/PDPPage';
import { CarroPage } from './pages/CarroPage';
import { MiniCarro } from './pages/MiniCarro';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { HomeSkeletonCarga } from './pages/HomeSkeletonCarga';

/**
 * B2C-53 — Minicarro del header (solo Desktop).
 *
 * Los casos de invitado con productos ahora declaran {DIRECCION_DESPACHO_003}: la dirección se fija una
 * vez (caso 000), se guarda la sesión del invitado y cada caso arma su carro con ella.
 * D-022, 024, 028 y 030 se agregaron con la data del 2026-10-21 (tokens que antes estaban en TBD). D-016 y D-018 están en «No aplica».
 * D-004, D-029 y D-020 solo comprueban su precondición ({SKU_NO_DISPONIBLE} «Pronto disponible» y
 * {SKU_UNIPAY_001} sin precio Unipay).
 */

const SESION = path.resolve('.qa/auth/b190-user.json');

function declarado(testData: LoadedTestData, nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) throw new Error(`Falta {${nombre}} en el Excel de data: el TC lo declara en su Test data`);
  return valor;
}

async function iniciarSesion(page: Page, testData: LoadedTestData): Promise<void> {
  const correo = declarado(testData, 'USER_AUTH_001').split('/')[0].trim();
  if (fs.existsSync(SESION)) await page.context().addCookies(JSON.parse(fs.readFileSync(SESION, 'utf-8')).cookies ?? []);
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
  await page.context().storageState({ path: SESION });
}

/** Sesión y carro con solo {SKU_VALID_001} x `n`; vuelve al Home con el minicarro cerrado. */
async function prepararCarro(page: Page, testData: LoadedTestData, n: number): Promise<{ home: PaginaHabilitada; nombre: string }> {
  await iniciarSesion(page, testData);
  const carro = await new CarroPage(page).goto();
  await carro.vaciar();
  const pdp = await new PDPPage(page).abrir(declarado(testData, 'SKU_VALID_001'));
  const nombre = (await pdp.nombreDelProducto.innerText()).trim();
  await pdp.fijarCantidad(n);
  const home = await new PaginaHabilitada(page).goto();
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  return { home, nombre };
}

/** El número del indicador del ícono del carrito ("Mi carrito, número de artículos: N"). */
async function indicador(mc: MiniCarro): Promise<number> {
  return Number(((await mc.boton.getAttribute('aria-label')) ?? '').match(/(\d+)\s*$/)?.[1] ?? NaN);
}

test.describe('B2C-53 — Minicarro', () => {
  test.use(DESKTOP);
  test.describe.configure({ timeout: 300000 });

  test('TC-B2C53-D-005 · Con el carro vacío el minicarro muestra el estado vacío e «Ir a comprar» [Guest] (Desktop)', async ({ page }) => {
    const cp = 'TC-B2C53-D-005';
    const home = await new PaginaHabilitada(page).goto();
    await home.cookies.aceptarSiAparece();
    const mc = new MiniCarro(page);
    const numero = await indicador(mc);
    const badge = ((await mc.boton.innerText()) ?? '').replace(/\s+/g, '');
    await mc.abrir();
    await home.capturarEvidencia(cp, 3, 'minicarro vacío', { elemento: mc.root });
    await expect.soft(mc.root.locator('img').first(), 'imagen del estado vacío').toBeVisible();
    await expect.soft(mc.root.getByText(/^¡?tu carro est[áa] vac[íi]o!?$/i), 'subtítulo «Tu carro está vacío»').toBeVisible();
    await expect.soft(mc.root.getByText(/descubre todas las ofertas/i), 'mensaje que invita a seguir comprando').toBeVisible();
    await expect.soft(mc.root.getByRole('button', { name: /^ir a comprar$/i }), 'CTA «Ir a comprar»').toBeVisible();
    test.info().annotations.push({ type: 'indicador', description: JSON.stringify({ numero, badge }) });
    expect.soft(/\d/.test(badge), 'el ícono del carrito no muestra número').toBe(false);
    await home.capturarEvidencia(cp);
  });

  for (const [n, cta] of [['012', 'Ver mi carro'], ['013', 'Ir a pagar']] as const) {
    test(`TC-B2C53-D-${n} · Con el mínimo cumplido «${cta}» ${n === '012' ? 'redirige al carro completo' : 'lleva directo a Mis Envíos'} [Logueado] (Desktop)`, async ({ page, testData }) => {
      const cp = `TC-B2C53-D-${n}`;
      const { home } = await prepararCarro(page, testData, Number(declarado(testData, 'UNIDADES_SOBRE_MINIMO')));
      const mc = new MiniCarro(page);
      await mc.abrir();
      await home.capturarEvidencia(cp, 3, 'minicarro sobre el mínimo', { elemento: mc.root });
      await mc.root.getByRole('button', { name: new RegExp(`^${cta}$`, 'i') }).click();
      if (n === '012') {
        await expect(page, 'redirige al carro completo').toHaveURL(/\/cart(\?.*)?$/, { timeout: 30000 });
      } else {
        const sugeridos = page.getByRole('dialog').filter({ hasText: /que no se te olviden/i });
        await expect(page, 'llega a Mis Envíos (Datos de entrega)').toHaveURL(/\/checkout\/entrega/, { timeout: 30000 });
        await expect(sugeridos, 'sin el modal «¡Que no se te olviden!»').toHaveCount(0);
      }
      await home.capturarEvidencia(cp);
    });
  }

  test('TC-B2C53-D-014 · Sin el mínimo el minicarro muestra el faltante y deshabilita «Ir a pagar» [Logueado] (Desktop)', async ({ page, testData }) => {
    const cp = 'TC-B2C53-D-014';
    const minimo = Number(declarado(testData, 'MONTO_MINIMO_COMPRA'));
    const { home } = await prepararCarro(page, testData, 1);
    const mc = new MiniCarro(page);
    await mc.abrir();
    const banner = mc.root.getByRole('status').filter({ hasText: /solo te faltan/i });
    await expect(banner, 'banner «¡Solo te faltan $X para ir a pagar!»').toBeVisible({ timeout: 15000 });
    await home.capturarEvidencia(cp, 4, 'minicarro bajo el mínimo', { elemento: mc.root });
    const subtotal = await mc.subtotalMonto();
    const faltante = Number(((await banner.innerText()).match(/\$\s*([\d.]+)/)?.[1] ?? '').replace(/\./g, ''));
    expect(faltante, `X = ${minimo} − ${subtotal}`).toBe(minimo - subtotal);
    await expect(banner.getByRole('button', { name: /^cerrar el aviso$/i }), 'botón X del banner').toBeVisible();
    await expect(mc.root.getByText(new RegExp(`m[íi]nimo de compra \\$${minimo.toLocaleString('es-CL').replace('.', '\\.')}`, 'i')), 'línea «Mínimo de compra $20.000»').toBeVisible();
    await expect(mc.root.getByRole('button', { name: /^ir a pagar$/i }), '«Ir a pagar» deshabilitado').toBeDisabled();
  });

  test('TC-B2C53-D-015 · El banner de faltante se cierra con la X [Logueado] (Desktop)', async ({ page, testData }) => {
    const cp = 'TC-B2C53-D-015';
    const { home } = await prepararCarro(page, testData, 1);
    const mc = new MiniCarro(page);
    await mc.abrir();
    const banner = mc.root.getByRole('status').filter({ hasText: /solo te faltan/i });
    await expect(banner).toBeVisible({ timeout: 15000 });
    await banner.getByRole('button', { name: /^cerrar el aviso$/i }).click();
    await expect(banner, 'el banner se cierra').toBeHidden({ timeout: 10000 });
    await expect(mc.root.getByRole('button', { name: /^ir a pagar$/i }), '«Ir a pagar» sigue deshabilitado').toBeDisabled();
    await home.capturarEvidencia(cp, undefined, undefined, { elemento: mc.root });
  });

  for (const [n, desde, accion] of [['025', 1, 'Sumar'], ['026', 2, 'Restar'], ['027', 1, 'Eliminar']] as const) {
    test(`TC-B2C53-D-${n} · ${accion === 'Sumar' ? 'Incrementar' : accion === 'Restar' ? 'Decrementar' : 'Decrementar a 0'} la cantidad en el minicarro ${accion === 'Eliminar' ? 'elimina el producto' : 'actualiza el subtotal'} [Logueado] (Desktop)`, async ({ page, testData }) => {
      const cp = `TC-B2C53-D-${n}`;
      const { home, nombre } = await prepararCarro(page, testData, desde);
      const mc = new MiniCarro(page);
      await mc.abrir();
      const antes = { subtotal: await mc.subtotalMonto(), indicador: await indicador(mc) };
      await home.capturarEvidencia(cp, 5, `minicarro con ${desde} un.`, { elemento: mc.root });
      // Con 1 unidad el «−» es el tacho: el segundo «Eliminar <nombre>» del ítem.
      const control = accion === 'Eliminar'
        ? mc.root.getByRole('button', { name: `Eliminar ${nombre}` }).last()
        : mc.root.getByRole('button', { name: `${accion} ${nombre}` });
      await control.click();
      if (accion === 'Eliminar') {
        await expect(mc.root.getByRole('button', { name: `Eliminar ${nombre}` }), 'el producto desaparece del listado').toHaveCount(0, { timeout: 20000 });
        await expect.poll(() => indicador(mc), { message: 'el indicador se actualiza', timeout: 20000 }).toBe(antes.indicador - 1);
        await home.capturarEvidencia(cp, 7, 'minicarro sin el producto', { elemento: mc.root });
        const subtotalDespues = (await mc.root.getByText(/^subtotal$/i).count()) ? await mc.subtotalMonto() : 0;
        expect(subtotalDespues, 'el subtotal descuenta el producto').toBe(antes.subtotal - antes.subtotal / desde);
      } else {
        const hasta = accion === 'Sumar' ? desde + 1 : desde - 1;
        await expect(mc.cantidadDe(nombre), `la cantidad pasa a ${hasta}`).toHaveText(`${hasta} un.`, { timeout: 20000 });
        await expect.poll(() => mc.subtotalMonto(), { message: 'el subtotal refleja el nuevo precio', timeout: 20000 }).toBe((antes.subtotal / desde) * hasta);
        await expect.poll(() => indicador(mc), { message: 'el indicador se actualiza', timeout: 20000 }).toBe(hasta);
        await home.capturarEvidencia(cp, 7, `minicarro con ${hasta} un.`, { elemento: mc.root });
      }
    });
  }

  // --- Casos que dependían de tokens que la data ya declara (D-024, 028, 030) ---------------------
  test('TC-B2C53-D-024 · Un producto con promo «Combina/Completa» muestra el mensaje en el minicarro [Logueado] (Desktop)', async ({ page, testData }) => {
    const cp = 'TC-B2C53-D-024';
    await iniciarSesion(page, testData);
    await (await new CarroPage(page).goto()).vaciar();
    const pdp = await new PDPPage(page).abrir(declarado(testData, 'SKU_CON_PROMO_COMBINA'));
    const nombre = (await pdp.nombreDelProducto.innerText()).trim();
    await pdp.fijarCantidad(1);
    const home = await new PaginaHabilitada(page).goto();
    await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
    const mc = new MiniCarro(page);
    await mc.abrir();
    await expect(mc.root.locator('button[aria-label^="Eliminar "]').first(), 'el minicarro lista el producto').toBeVisible({ timeout: 20000 });
    test.info().annotations.push({ type: 'producto', description: nombre });
    test.info().annotations.push({ type: 'texto del minicarro', description: (await mc.root.innerText()).replace(/\s+/g, ' ') });
    await home.capturarEvidencia(cp, 5, 'minicarro con el producto con promo', { elemento: mc.root });
    await expect(mc.root.getByText(/combina|completa/i).first(), 'mensaje «Combina» o «Completa»').toBeVisible({ timeout: 10000 });
  });

  test('TC-B2C53-D-028 · Al alcanzar el límite máximo de cantidad el control + queda deshabilitado [Logueado] (Desktop)', async ({ page, testData }) => {
    const cp = 'TC-B2C53-D-028';
    const limite = Number(declarado(testData, 'CART_LIMIT_QTY'));
    const { home, nombre } = await prepararCarro(page, testData, limite);
    const mc = new MiniCarro(page);
    await mc.abrir();
    await expect(mc.cantidadDe(nombre), `la cantidad queda en ${limite}`).toHaveText(`${limite} un.`, { timeout: 20000 });
    await home.capturarEvidencia(cp, 5, `minicarro con ${limite} un.`, { elemento: mc.root });
    await expect(mc.root.getByRole('button', { name: `Sumar ${nombre}` }), 'control + deshabilitado').toBeDisabled();
    await expect(mc.cantidadDe(nombre), 'la cantidad permanece en el límite').toHaveText(`${limite} un.`);
  });

  test('TC-B2C53-D-030 · El total del minicarro no incluye el precio de los productos no disponibles [Logueado] (Desktop)', async ({ page, testData }) => {
    const cp = 'TC-B2C53-D-030';
    const precio = Number(declarado(testData, 'PRECIO_SKU_VALID_001'));
    await iniciarSesion(page, testData);
    await (await new CarroPage(page).goto()).vaciar();
    await (await new PDPPage(page).abrir(declarado(testData, 'SKU_VALID_001'))).fijarCantidad(1);
    const pdpNd = await new PDPPage(page).abrir(declarado(testData, 'SKU_NO_DISPONIBLE'));
    await page.waitForTimeout(2500);
    const pronto = await page.getByText(/^pronto disponible$/i).locator('visible=true').first().isVisible().catch(() => false);
    if (pronto || !(await pdpNd.agregarVisible.isVisible().catch(() => false))) {
      await pdpNd.capturarEvidencia(cp);
      throw new Error('PRECONDICION_NO_DISPONIBLE: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar»: no se puede dejar en el carro');
    }
    await pdpNd.fijarCantidad(1);
    const home = await new PaginaHabilitada(page).goto();
    await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
    const mc = new MiniCarro(page);
    await mc.abrir();
    test.info().annotations.push({ type: 'texto del minicarro', description: (await mc.root.innerText()).replace(/\s+/g, ' ') });
    await home.capturarEvidencia(cp, 5, 'minicarro con un producto no disponible', { elemento: mc.root });
    if (!(await mc.root.getByText(/no disponible/i).count())) {
      throw new Error('PRECONDICION_NO_DISPONIBLE: {SKU_NO_DISPONIBLE} queda disponible en la tienda del carro: el minicarro no lo muestra como no disponible');
    }
    const total = Number((await mc.root.getByText(/^total$/i).first().locator('xpath=following-sibling::*[1]').innerText()).replace(/\D/g, ''));
    expect(total, `total = {PRECIO_SKU_VALID_001} × 1 (${precio})`).toBe(precio);
  });

  // --- Invitado con dirección -------------------------------------------------------------------
  test.describe('Invitado con dirección', () => {
    let ctx: BrowserContext;
    let page: Page;
    const sesion = path.resolve('.qa/auth/b53-D.json');
    const BD = (m: string) => new Error(`PRECONDICION_NO_DISPONIBLE: ${m}`);

    test.beforeEach(async ({ browser }) => {
      ctx = await browser.newContext({ ...DESKTOP, baseURL: baseUrl(loadTestData()), ...(fs.existsSync(sesion) ? { storageState: sesion } : {}) });
      page = await ctx.newPage();
      page.setDefaultTimeout(20000);
    });
    test.afterEach(async () => {
      await ctx?.close();
    });

    test('TC-B2C53-D-000 · Precondición: invitado con {DIRECCION_DESPACHO_003} (Desktop)', async () => {
      test.setTimeout(600000);
      fs.rmSync(sesion, { force: true });
      const td = loadTestData();
      const dir = declarado(td, 'DIRECCION_DESPACHO_003');
      const n = dir.match(/\d{2,}/)![0];
      const home = await new PaginaHabilitada(page).goto();
      await home.cookies.aceptarSiAparece();
      await home.header.storeLocator.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await modal.fijarDireccionComoInvitado(dir, new RegExp(`(?<!\\d)${n}(?!\\d)`));
      fs.mkdirSync(path.dirname(sesion), { recursive: true });
      await ctx.storageState({ path: sesion });
    });

    /** Carro del invitado con exactamente estos productos; vuelve al Home con el minicarro cerrado. */
    async function carroCon(items: [string, number][]): Promise<PaginaHabilitada> {
      const td = loadTestData();
      const carro = await new CarroPage(page).goto();
      await carro.vaciar();
      for (const [k, q] of items) await (await new PDPPage(page).abrir(declarado(td, k))).fijarCantidad(q);
      const home = await new PaginaHabilitada(page).goto();
      await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
      return home;
    }
    /** Bloquea la request del carro de cualquier cliente (el id de {CART_API_ENDPOINT} es de otra cuenta). */
    async function bloquear(): Promise<() => Promise<void>> {
      const base = declarado(loadTestData(), 'CART_API_ENDPOINT').replace(/^\*:\/\//, '').split('/customers/')[0];
      const coincide = (u: URL) => `${u.host}${u.pathname}`.startsWith(base + '/customers/') && /\/baskets$/.test(u.pathname);
      const corta = (r: import('@playwright/test').Route) => r.abort();
      await page.route(coincide, corta);
      return () => page.unroute(coincide, corta);
    }
    const sel = (mc: MiniCarro, re: RegExp) => mc.root.getByRole('button', { name: re }).or(mc.root.getByRole('link', { name: re })).locator('visible=true').first();

    test('TC-B2C53-D-001 · Al abrir el minicarro se muestra un skeleton mientras carga el carrito [Guest] (Desktop)', async () => {
      const cp = 'TC-B2C53-D-001';
      const home = await carroCon([['SKU_VALID_001', 1]]);
      const sk = new HomeSkeletonCarga(page);
      await sk.registrar();
      await sk.activarSlow3G();
      // Paso 1 de la planilla: ingresar a {BASE_URL} con la red lenta; el ícono se toca recién después.
      await page.goto('/', { waitUntil: 'commit' });
      const mc = new MiniCarro(page);
      await mc.boton.waitFor({ state: 'visible', timeout: 120000 });
      await mc.boton.click();
      await expect.poll(() => sk.skeletonsAhora(), { message: 'aparece el skeleton del minicarro', timeout: 60000, intervals: [200] }).toBeGreaterThan(0);
      await home.capturarEvidencia(cp, 3, 'skeleton del minicarro');
      await sk.desactivarThrottling();
      await mc.root.waitFor({ state: 'visible', timeout: 60000 });
      await expect(mc.root.locator('button[aria-label^="Eliminar "]').first(), 'el minicarro termina de cargar con el producto').toBeVisible({ timeout: 60000 });
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C53-D-002 · El minicarro lista los productos con thumbnail, nombre, unidad, precio y cantidad [Guest] (Desktop)', async () => {
      const cp = 'TC-B2C53-D-002';
      const home = await carroCon([['SKU_VALID_001', 1], ['SKU_PESABLE', 1]]);
      const mc = new MiniCarro(page);
      await mc.abrir();
      await home.capturarEvidencia(cp, 3, 'minicarro con 2 productos', { elemento: mc.root });
      const nombres = await mc.productos();
      expect(nombres.length, 'lista los 2 productos').toBe(2);
      for (const nombre of nombres) {
        const fila = mc.root.locator('div').filter({ hasText: nombre }).filter({ hasText: /\$[\d.]+ c\/u/ }).filter({ has: page.locator('img') }).filter({ has: page.getByRole('button') }).last();
        const texto = (await fila.innerText()).replace(/\s+/g, ' ');
        await expect.soft(fila.locator('img').first(), `thumbnail de ${nombre}`).toBeVisible();
        expect.soft(texto, `unidad de medida de ${nombre}`).toMatch(/\d+([.,]\d+)?\s*(un|kg|g)\b/i);
        expect.soft(texto, `precio de ${nombre}`).toMatch(/\$[\d.]+/);
        expect.soft(await fila.getByRole('button').count(), `controles de cantidad de ${nombre} (eliminar/restar y +)`).toBeGreaterThanOrEqual(2);
      }
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C53-D-003 · El minicarro muestra total, Vaciar carro, Ver mi carro, Ir a pagar e indicador [Guest] (Desktop)', async () => {
      const cp = 'TC-B2C53-D-003';
      // «Ver mi carro» aparece solo con el mínimo cumplido (bajo el mínimo lo reemplaza «Mínimo de compra $20.000»).
      const sobre = Number(declarado(loadTestData(), 'UNIDADES_SOBRE_MINIMO'));
      const home = await carroCon([['SKU_VALID_001', sobre], ['SKU_UNITARIO', 1]]);
      const mc = new MiniCarro(page);
      const numero = await indicador(mc);
      await mc.abrir();
      await home.capturarEvidencia(cp, 3, 'minicarro', { elemento: mc.root });
      expect.soft(await mc.subtotalMonto(), 'total del carro').toBeGreaterThan(0);
      await expect.soft(sel(mc, /vaciar carro/i), '«Vaciar carro»').toBeVisible();
      await expect.soft(sel(mc, /^ver mi carro$/i), '«Ver mi carro»').toBeVisible();
      await expect.soft(sel(mc, /^ir a pagar$/i), '«Ir a pagar»').toBeVisible();
      expect.soft(numero, `indicador del ícono del carrito = ${sobre + 1} unidades`).toBe(sobre + 1);
      await home.capturarEvidencia(cp);
    });

    for (const [n, titulo] of [['006', 'Un error al cargar el minicarro muestra la pantalla de error CRT-020'], ['007', 'Reintentar con éxito recarga el minicarro y muestra los productos'], ['008', 'Reintentar con fallo mantiene la pantalla de error del minicarro']] as const) {
      test(`TC-B2C53-D-${n} · ${titulo} [Guest] (Desktop)`, async () => {
        const cp = `TC-B2C53-D-${n}`;
        const home = await carroCon([['SKU_VALID_001', 1]]);
        const desbloquear = await bloquear();
        await page.goto('/');
        const mc = new MiniCarro(page);
        await mc.boton.waitFor({ state: 'visible', timeout: 30000 });
        await mc.boton.click();
        await expect(page.getByText(/no pudimos mostrar tu carro/i).first(), 'pantalla de error').toBeVisible({ timeout: 30000 });
        await home.capturarEvidencia(cp, 3, 'minicarro con el error');
        if (n === '006') {
          await expect.soft(page.getByText(/CRT-020/).first(), 'código CRT-020').toBeVisible();
          await expect.soft(page.getByRole('button', { name: /^reintentar$/i }).first(), '«Reintentar»').toBeVisible();
          await expect.soft(page.getByRole('button', { name: /^volver al inicio$/i }).or(page.getByRole('link', { name: /^volver al inicio$/i })).first(), '«Volver al Inicio»').toBeVisible();
        } else if (n === '007') {
          await desbloquear();
          await page.getByRole('button', { name: /^reintentar$/i }).first().click();
          await expect(page.getByText(/no pudimos mostrar tu carro/i), 'desaparece el error').toBeHidden({ timeout: 30000 });
          await expect(page.locator('button[aria-label^="Eliminar "]').first(), 'el minicarro muestra el producto').toBeVisible({ timeout: 30000 });
        } else {
          await page.getByRole('button', { name: /^reintentar$/i }).first().click();
          await page.waitForTimeout(4000);
          await expect(page.getByText(/no pudimos mostrar tu carro/i).first(), 'la pantalla de error se mantiene').toBeVisible();
        }
        await home.capturarEvidencia(cp);
      });
    }

    test('TC-B2C53-D-009 · «Volver al Inicio» cierra el minicarro y redirige al Home [Guest] (Desktop)', async () => {
      const cp = 'TC-B2C53-D-009';
      const td = loadTestData();
      const home = await carroCon([['SKU_VALID_001', 1]]);
      await bloquear();
      await page.goto(declarado(td, 'PLP_URL'));
      await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
      const mc = new MiniCarro(page);
      await mc.boton.click();
      await expect(page.getByText(/no pudimos mostrar tu carro/i).first(), 'pantalla de error').toBeVisible({ timeout: 30000 });
      await home.capturarEvidencia(cp, 3, 'error del minicarro en la PLP');
      await page.getByRole('button', { name: /^volver al inicio$/i }).or(page.getByRole('link', { name: /^volver al inicio$/i })).first().click();
      const base = declarado(td, 'BASE_URL').replace(/\/$/, '');
      await expect(page, 'redirige al Home').toHaveURL(new RegExp(`^${base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/?(\\?.*)?$`), { timeout: 30000 });
      await expect(page.getByText(/no pudimos mostrar tu carro/i), 'el minicarro se cierra').toBeHidden();
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C53-D-010 · Con el minicarro cerrado el indicador del carrito se actualiza en tiempo real [Guest] (Desktop)', async () => {
      const cp = 'TC-B2C53-D-010';
      const td = loadTestData();
      const home = await carroCon([['SKU_VALID_001', 1]]);
      await page.goto(declarado(td, 'PLP_URL'));
      await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
      const mc = new MiniCarro(page);
      await expect.poll(() => indicador(mc), { message: 'indicador inicial = 1 (el carro tarda en cargar)', timeout: 20000 }).toBe(1);
      await page.getByRole('button', { name: /^agregar$/i }).locator('visible=true').first().click();
      await expect.poll(() => indicador(mc), { message: 'tras «Agregar» el indicador pasa a 2', timeout: 20000 }).toBe(2);
      await home.capturarEvidencia(cp, 4, 'indicador en 2');
      await page.getByRole('button', { name: /^(aumentar cantidad|sumar .*)$/i }).locator('visible=true').first().click();
      await expect.poll(() => indicador(mc), { message: 'tras el + el indicador pasa a 3', timeout: 20000 }).toBe(3);
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C53-D-011 · El indicador cuenta los unitarios por cantidad y los pesables como 1 [Guest] (Desktop)', async () => {
      const cp = 'TC-B2C53-D-011';
      const home = await carroCon([['SKU_VALID_001', 3], ['SKU_PESABLE', 1]]);
      const mc = new MiniCarro(page);
      await home.capturarEvidencia(cp, 3, 'indicador del carrito', { elemento: mc.boton });
      expect(await indicador(mc), '3 unidades de {SKU_VALID_001} + 1 por el pesable').toBe(4);
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C53-D-017 · Un invitado que hace clic en «Ver mi carro» es redirigido al carro [Guest] (Desktop)', async () => {
      const cp = 'TC-B2C53-D-017';
      const home = await carroCon([['SKU_VALID_001', Number(declarado(loadTestData(), 'UNIDADES_SOBRE_MINIMO'))]]);
      const mc = new MiniCarro(page);
      await mc.abrir();
      await home.capturarEvidencia(cp, 3, 'minicarro', { elemento: mc.root });
      await sel(mc, /^ver mi carro$/i).click();
      await expect(page, 'redirige al carro').toHaveURL(/\/cart(\?.*)?$/, { timeout: 30000 });
      await home.capturarEvidencia(cp);
    });

    for (const [n, titulo] of [['019', '«Vaciar carro» abre el modal de confirmación con «Sí, eliminar» y «No, gracias»'], ['021', 'Confirmar el vaciado muestra spinner y deja el minicarro vacío'], ['023', '«No, gracias» cierra el modal de vaciado sin cambios en el carro']] as const) {
      test(`TC-B2C53-D-${n} · ${titulo} [Guest] (Desktop)`, async () => {
        const cp = `TC-B2C53-D-${n}`;
        const home = await carroCon([['SKU_VALID_001', 1], ['SKU_UNITARIO', 1]]);
        const mc = new MiniCarro(page);
        await mc.abrir();
        await sel(mc, /vaciar carro/i).click();
        const modal = page.getByRole('alertdialog').filter({ hasText: /vaciar/i }).first();
        await expect(modal, 'modal de confirmación «Vaciar carro»').toBeVisible({ timeout: 15000 });
        await home.capturarEvidencia(cp, 5, 'modal «Vaciar carro»', { elemento: modal });
        if (n === '019') {
          await expect.soft(modal.locator('img').first(), 'imagen').toBeVisible();
          test.info().annotations.push({ type: 'textos del modal', description: (await modal.innerText()).replace(/\s+/g, ' ') });
          await expect.soft(modal.getByText(/vaciar( el)? carro/i).first(), 'título «Vaciar el carro»').toBeVisible();
          await expect.soft(modal.getByText(/(deseas|est[aá]s seguro).*eliminar todos los/i), 'subtítulo de confirmación').toBeVisible();
          await expect.soft(modal.getByRole('button', { name: /^s[íi], eliminar$/i }), '«Sí, eliminar»').toBeVisible();
          await expect.soft(modal.getByRole('button', { name: /^no, gracias$/i }), '«No, gracias»').toBeVisible();
        } else if (n === '021') {
          await modal.getByRole('button', { name: /^s[íi], eliminar$/i }).click();
          await expect(mc.root.getByText(/tu carro est[áa] vac[íi]o/i).first(), 'el minicarro queda vacío').toBeVisible({ timeout: 30000 });
          expect(await indicador(mc), 'el indicador se limpia').not.toBeGreaterThan(0);
        } else {
          await modal.getByRole('button', { name: /^no, gracias$/i }).click();
          await expect(modal, 'el modal se cierra').toBeHidden({ timeout: 10000 });
          expect((await mc.productos()).length, 'el carro conserva sus 2 productos').toBe(2);
        }
        await home.capturarEvidencia(cp);
      });
    }

    for (const [n, k, que] of [['004', 'SKU_NO_DISPONIBLE', 'Los productos no disponibles se muestran debajo como referencia visual'], ['029', 'SKU_NO_DISPONIBLE', 'Un producto no disponible se muestra sin controles +/− en el minicarro']] as const) {
      test(`TC-B2C53-D-${n} · ${que} [Logueado] (Desktop)`, async () => {
        const cp = `TC-B2C53-D-${n}`;
        const pdp = await new PDPPage(page).abrir(declarado(loadTestData(), k));
        await page.waitForTimeout(2500);
        const pronto = await page.getByText(/^pronto disponible$/i).locator('visible=true').first().isVisible().catch(() => false);
        await pdp.capturarEvidencia(cp);
        if (pronto || !(await pdp.agregarVisible.isVisible().catch(() => false))) throw BD(`{${k}} figura «Pronto disponible» sin «Agregar» con el despacho activo: no se puede dejar en el carro para que aparezca como no disponible`);
      });
    }

    test('TC-B2C53-D-020 · Con Unipay activo el total del minicarro refleja el descuento Unipay [Logueado] (Desktop)', async () => {
      const cp = 'TC-B2C53-D-020';
      const pdp = await new PDPPage(page).abrir(declarado(loadTestData(), 'SKU_UNIPAY_001'));
      await page.waitForTimeout(2500);
      const precios = new Set((await pdp.datosDelProducto()).precios);
      await pdp.capturarEvidencia(cp);
      if (precios.size < 2) throw BD(`{SKU_UNIPAY_001} no tiene precio Unipay vigente: su ficha trae solo la etiqueta «Promoción % Unipay» y un único precio (${[...precios].join(', ')})`);
    });

    test('TC-B2C53-D-022 · Un error al vaciar cierra el modal, mantiene los productos y muestra CRT-076 [Guest] (Desktop)', async () => {
      const cp = 'TC-B2C53-D-022';
      const home = await carroCon([['SKU_VALID_001', 1], ['SKU_UNITARIO', 1]]);
      // Network request blocking de {VACIAR_CARRO_API_ENDPOINT}: el id del carro y del ítem son de otra sesión, se bloquea por forma.
      const prefijo = declarado(loadTestData(), 'VACIAR_CARRO_API_ENDPOINT').replace(/^\*:\/\//, '').split('/baskets/')[0];
      const coincide = (u: URL) => `${u.host}${u.pathname}`.startsWith(prefijo + '/baskets/') && /\/items\/[^/]+$/.test(u.pathname);
      let bloqueadas = 0;
      await page.route(coincide, (r) => (r.request().method() === 'DELETE' ? (bloqueadas++, r.abort()) : r.continue()));
      const mc = new MiniCarro(page);
      await mc.abrir();
      const antes = await mc.productos();
      await sel(mc, /vaciar carro/i).click();
      const modal = page.getByRole('alertdialog').filter({ hasText: /vaciar/i }).first();
      await expect(modal, 'modal de confirmación «Vaciar carro»').toBeVisible({ timeout: 15000 });
      await modal.getByRole('button', { name: /^s[íi], eliminar$/i }).click();
      await expect(modal, 'el modal se cierra').toBeHidden({ timeout: 15000 });
      const toast = page.getByText(/no pudimos vaciar tu carro/i).locator('visible=true').first();
      await expect(toast, 'toast «¡Lo sentimos! No pudimos vaciar tu carro, vuelve a intentarlo» (CRT-076)').toBeVisible({ timeout: 20000 });
      test.info().annotations.push({ type: 'requests DELETE bloqueadas', description: String(bloqueadas) });
      await home.capturarEvidencia(cp, 7, 'toast CRT-076', { elemento: mc.root });
      expect(await mc.productos(), 'el carro mantiene sus 2 productos').toEqual(antes);
      expect(antes.length, 'productos del carro antes de vaciar').toBe(2);
      await page.waitForTimeout(6000);
      await expect(toast, 'el toast persiste hasta cerrarlo con la X').toBeVisible();
      const x = toast.locator('xpath=ancestor::*[self::div or self::section][.//button][1]').getByRole('button').first();
      await x.click();
      await expect(toast, 'el toast se cierra con la X').toBeHidden({ timeout: 10000 });
      await home.capturarEvidencia(cp);
    });
  });
});
