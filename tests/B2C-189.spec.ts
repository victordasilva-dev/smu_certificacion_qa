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
import { esperarOtp, marcaOtp } from './support/otp';

/**
 * B2C-189 — Mis Envíos ("Datos de entrega"): cambiar la dirección o la tienda desde el ícono ▾ de
 * la tarjeta, que abre el Store Locator (B2C-26 / B2C-121) encima de `/checkout/entrega`.
 *
 * Precondición común: sesión con {USER_AUTH_001}, carro con {SKU_VALID_001} × {UNIDADES_SOBRE_MINIMO}
 * y el método del TC (despacho a {DIRECCION_DESPACHO_001} o retiro en {TIENDA_RETIRO_001}). Se arma
 * solo si falta, porque cada cambio de método con sesión pide un OTP ("Autenticación requerida").
 * El método se comprueba en la tarjeta de Mis Envíos y en el header a la vez: en la exploración del
 * 2026-10-14 la tarjeta no reflejó un cambio hecho desde ella mientras el header sí.
 *
 * Retiro va primero y despacho después: la cuenta queda en retiro al terminar la exploración, y
 * así hay un cambio de método menos (un OTP menos).
 *
 * Quedan sin `test()`: 007, 008, 015, 018 ({SKU_STOCK_SOLO_TIENDA_A} en TBD); 009–011
 * ({JANIS_API_ENDPOINT} en TBD); 017 ({VENTANA_ESPERADA_POR_REGLA} en TBD); 012–014
 * ({DIRECCION_SIN_SLA} no tiene cobertura en DEV: da "Aún no llegamos", no "Sin horarios
 * disponibles"); 016 (la "nueva dirección diferente" del paso 8 no está declarada en Test data).
 */

const SESION = path.resolve('.qa/auth/b189-user.json');

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
        if (sessionStorage.getItem('__b189_ls')) return;
        for (const { name, value } of items) localStorage.setItem(name, value);
        sessionStorage.setItem('__b189_ls', '1');
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

/** Deja activo el método del TC, desde el header; solo lo cambia si la tarjeta o el header no coinciden. */
async function asegurarMetodo(page: Page, testData: LoadedTestData, metodo: Metodo): Promise<void> {
  const destino = metodo === 'despacho' ? token(testData, 'DIRECCION_DESPACHO_001')! : token(testData, 'TIENDA_RETIRO_001')!;
  const entrega = await new DatosEntregaPage(page).goto();
  await entrega.etiquetaDestino.waitFor({ state: 'visible', timeout: 30000 }).catch(() => {});
  const etiqueta = metodo === 'despacho' ? /enviaremos tu compra a/i : /retira tu compra en/i;
  const tarjetaOk =
    etiqueta.test((await entrega.etiquetaDestino.textContent().catch(() => '')) ?? '') &&
    ((await entrega.destino.textContent().catch(() => '')) ?? '').toLowerCase().includes(destino.toLowerCase());

  const home = await new PaginaHabilitada(page).goto();
  await home.header.storeLocator.waitFor({ state: 'visible', timeout: 30000 });
  await page.waitForTimeout(3000);
  const enHeader = ((await home.header.storeLocator.innerText()) ?? '').replace(/\s+/g, ' ');
  const headerOk =
    metodo === 'despacho' ? /calle uno 23|^casa\b/i.test(enHeader.trim()) : enHeader.toLowerCase().includes(destino.toLowerCase());
  if (tarjetaOk && headerOk) return;

  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  if (metodo === 'despacho') {
    await modal.tabDespachoDomicilio.click();
    // {DIRECCION_DESPACHO_001} está guardada en la cuenta como "Casa".
    await modal.root.getByRole('button').filter({ hasText: destino }).first().click();
  } else {
    await modal.tabRetiroEnTienda.click();
    await modal.elegirTienda(destino);
  }
  await confirmarCambio(page, testData);
  await page.waitForTimeout(3000);
}

/** Deja el carro con exactamente {SKU_VALID_001} × {UNIDADES_SOBRE_MINIMO}. */
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

/** Precondición + pasos 1–4: carro → "Continuar con la entrega" → Mis Envíos. */
async function hastaMisEnvios(page: Page, testData: LoadedTestData, cp: string, metodo: Metodo) {
  await iniciarSesion(page, testData);
  await asegurarMetodo(page, testData, metodo);
  await asegurarCarro(page, testData);

  const carro = await new CarroPage(page).goto();
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await expect(carro.titulo).toBeVisible({ timeout: 30000 });
  await carro.capturarEvidencia(cp, 2, 'carro cargado');

  await carro.continuarConLaEntrega();
  const entrega = new DatosEntregaPage(page);
  await entrega.waitUntilReady();
  await expect(entrega.horariosSeleccionados).toHaveCount(1, { timeout: 30000 });
  await expect(entrega.botonCambiarUbicacion, 'ícono ▾ de la tarjeta').toBeVisible();
  await entrega.capturarEvidencia(cp, 4, `Mis Envíos (${metodo})`);
  return entrega;
}

/** Lo que el TC compara antes y después: destino, ventana seleccionada y subtotal. */
async function estado(entrega: DatosEntregaPage) {
  const limpio = async (l: import('@playwright/test').Locator) =>
    ((await l.first().innerText({ timeout: 15000 }).catch(() => '')) ?? '').replace(/\s+/g, ' ').trim();
  return {
    destino: await limpio(entrega.destino),
    horario: await limpio(entrega.horariosSeleccionados),
    subtotal: await limpio(entrega.subtotal),
    url: entrega.url,
  };
}

/** Clic en ▾ y espera el drawer; devuelve el modal. */
async function abrirStoreLocator(page: Page, entrega: DatosEntregaPage): Promise<MetodoEntregaModal> {
  await entrega.botonCambiarUbicacion.click();
  return new MetodoEntregaModal(page).esperarAbierto();
}

test.describe('B2C-189 — Mis Envíos: cambiar dirección o tienda desde la tarjeta', () => {
  test.describe.configure({ timeout: 300000 });

  for (const [ff, vp, sufijo, L, verbo] of [
    ['Desktop 1440x900', DESKTOP, 'Desktop', 'D', 'clic'],
    ['Mobile 390x844', MOBILE, 'Mobile', 'M', 'toque'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);

      for (const [metodo, nAbrir, nCancelar, nCambiar, cosa] of [
        ['retiro', '003', '004', '006', 'tienda'],
        ['despacho', '001', '002', '005', 'dirección'],
      ] as const) {
        const tab = (m: MetodoEntregaModal) => (metodo === 'despacho' ? m.tabDespachoDomicilio : m.tabRetiroEnTienda);

        test(`TC-B2C189-${L}-${nAbrir} · El ícono de la tarjeta de ${cosa} abre el Store Locator de ${metodo} [Logueado] (${sufijo})`, async ({ page, testData }) => {
          const cp = `TC-B2C189-${L}-${nAbrir}`;
          const entrega = await hastaMisEnvios(page, testData, cp, metodo);
          const antes = await estado(entrega);
          const detras = ((await entrega.contenido.textContent()) ?? '').replace(/\s+/g, ' ').trim();

          const modal = await abrirStoreLocator(page, entrega);
          await expect(tab(modal), `pestaña ${metodo} activa`).toHaveAttribute('aria-pressed', 'true');
          await modal.capturarModal(cp, 6, `Store Locator de ${metodo}`, page);
          expect(page.url(), 'se queda en Mis Envíos').toBe(antes.url);
          expect(((await entrega.contenido.textContent()) ?? '').replace(/\s+/g, ' ').trim(), 'Mis Envíos sin cambios detrás').toBe(detras);
          await modal.capturarModal(cp, undefined, undefined, page);
        });

        test(`TC-B2C189-${L}-${nCancelar} · Al cancelar el Store Locator Mis Envíos mantiene la ${cosa} y la ventana [Logueado] (${sufijo})`, async ({ page, testData }) => {
          const cp = `TC-B2C189-${L}-${nCancelar}`;
          const entrega = await hastaMisEnvios(page, testData, cp, metodo);
          const antes = await estado(entrega);
          const destino = metodo === 'despacho' ? token(testData, 'DIRECCION_DESPACHO_001')! : token(testData, 'TIENDA_RETIRO_001')!;

          const modal = await abrirStoreLocator(page, entrega);
          await modal.capturarModal(cp, 6, `Store Locator de ${metodo}`, page);
          await modal.cerrarConX();

          await expect(entrega.destino, `misma ${cosa}`).toContainText(destino);
          expect(await estado(entrega), 'misma ventana y subtotal').toEqual(antes);
          await entrega.capturarEvidencia(cp, 7, `Mis Envíos tras cerrar con la X`);
          await entrega.capturarEvidencia(cp);
        });

        test(`TC-B2C189-${L}-${nCambiar} · Una nueva ${cosa} con todo disponible actualiza la tarjeta y las ventanas [Logueado] (${sufijo})`, async ({ page, testData }) => {
          const cp = `TC-B2C189-${L}-${nCambiar}`;
          const entrega = await hastaMisEnvios(page, testData, cp, metodo);

          const modal = await abrirStoreLocator(page, entrega);
          await modal.capturarModal(cp, 6, `Store Locator de ${metodo}`, page);
          let esperado: RegExp;
          if (metodo === 'despacho') {
            // {DIRECCION_OTRA_TIENDA} = "A. Las Conder 14791, Lo Barnechea": Google la normaliza a
            // "Avenida Las Condes 14791"; se elige la sugerencia con el número y la comuna del token.
            const dir = token(testData, 'DIRECCION_OTRA_TIENDA')!;
            const numero = dir.match(/\d+/)![0];
            const comuna = dir.split(',').pop()!.trim();
            await modal.agregarDireccion(dir, new RegExp(`${numero}[\\s\\S]*${escapar(comuna)}`, 'i'));
            esperado = new RegExp(numero);
          } else {
            const tienda = token(testData, 'TIENDA_RETIRO_002')!;
            await modal.elegirTienda(tienda);
            esperado = new RegExp(escapar(tienda), 'i');
          }
          await modal.capturarModal(cp, 7, `${cosa} nueva confirmada`, page);

          await page.evaluate(() => {
            const w = window as unknown as { __qaLoader: boolean };
            w.__qaLoader = false;
            new MutationObserver(() => {
              if (document.querySelector('.chakra-spinner, [class*="skeleton"]')) w.__qaLoader = true;
            }).observe(document.body, { childList: true, subtree: true });
          });
          await confirmarCambio(page, testData);
          await entrega.capturarEvidencia(cp, 8, 'OTP validado');

          await expect(page, 'vuelve a Mis Envíos').toHaveURL(/\/checkout\/entrega/, { timeout: 30000 });
          await expect(modal.root, 'el Store Locator se cierra').toBeHidden({ timeout: 30000 });
          await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
          const huboLoader = await page.evaluate(() => (window as unknown as { __qaLoader: boolean }).__qaLoader).catch(() => false);
          await expect(entrega.horariosSeleccionados, 'una ventana seleccionada por defecto').toHaveCount(1, { timeout: 30000 });
          await entrega.capturarEvidencia(cp, 9, 'Mis Envíos tras el cambio');
          await expect(entrega.destino, `la tarjeta muestra la ${cosa} nueva`).toHaveText(esperado, { timeout: 15000 });
          expect(huboLoader, 'loader mientras recarga las ventanas').toBe(true);
          await entrega.capturarEvidencia(cp);
        });
      }
    });
  }
});
