import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { LoadedTestData } from './support/testData';
import { esperarOtp, marcaOtp } from './support/otp';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { LoginModal } from './pages/LoginModal';
import { PDPPage } from './pages/PDPPage';
import { CarroPage } from './pages/CarroPage';
import { CarroOpciones } from './pages/CarroOpciones';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { AgotarseModal } from './pages/AgotarseModal';
import { HomeSkeletonCarga } from './pages/HomeSkeletonCarga';

/**
 * B2C-37 — Página del carro: layout, totales, vaciar, mínimo de compra, membresía y carga.
 *
 * Los de ítems no disponibles (D-006, 007, 009–012, 015–018; M-007, 008, 010–013, 016–018) solo
 * comprueban su precondición: mientras {SKU_NO_DISPONIBLE} figure «Pronto disponible» con el
 * despacho activo no hay cómo dejarlo en el carro antes de pasar a {TIENDA_SIN_STOCK}.
 */

const SESIONES: Record<string, string> = {
  COMPRADOR_USER: '.qa/auth/b37-user.json',
  COMPRADOR_SIN_MEMBRESIA_USER: '.qa/auth/b37-user.json',
  COMPRADOR_MEMBRESIA_EXPIRADA_USER: '.qa/auth/b37-expirada.json',
};

function declarado(testData: LoadedTestData, nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) throw new Error(`Falta {${nombre}} en el Excel de data: el TC lo declara en su Test data`);
  return valor;
}

/** Candado atómico por cuenta: otros co-workers piden OTP con la misma casilla (mkdir es atómico). */
async function conCandado<T>(correo: string, fn: () => Promise<T>): Promise<T> {
  const dir = path.resolve('.qa/otp', `lock-${correo.replace(/[^\w.-]+/g, '_')}`);
  fs.mkdirSync(path.dirname(dir), { recursive: true });
  const limite = Date.now() + 15 * 60_000;
  for (;;) {
    try { fs.mkdirSync(dir); break; } catch { if (Date.now() > limite) throw new Error('OTP_CANDADO_NO_OBTENIDO'); await new Promise((r) => setTimeout(r, 20_000)); }
  }
  try { return await fn(); } finally { try { fs.rmdirSync(dir); } catch { /* ya liberado */ } }
}

/** Inicia sesión con la cuenta del token, reutilizando su storageState; si no sirve, por OTP. */
async function iniciarSesion(page: Page, testData: LoadedTestData, cuenta = 'COMPRADOR_USER'): Promise<void> {
  const correo = declarado(testData, cuenta).split('/')[0].trim();
  const sesion = path.resolve(SESIONES[cuenta]);
  if (fs.existsSync(sesion)) {
    const estado = JSON.parse(fs.readFileSync(sesion, 'utf-8'));
    await page.context().addCookies(estado.cookies ?? []);
    const origen = (estado.origins ?? [])[0];
    if (origen?.localStorage?.length) {
      await page.addInitScript((items: { name: string; value: string }[]) => {
        if (sessionStorage.getItem('__b37_ls')) return;
        for (const { name, value } of items) localStorage.setItem(name, value);
        sessionStorage.setItem('__b37_ls', '1');
      }, origen.localStorage);
    }
  }
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  const login = new LoginModal(page);
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  if (await login.disparador.isVisible().catch(() => false)) {
    test.info().setTimeout(test.info().timeout + 15 * 60_000);
    await conCandado(correo, async () => {
      const desde = marcaOtp();
      await login.pedirCodigo(correo);
      await login.ingresarCodigo(await esperarOtp(correo, desde, { digitos: 6 }));
    });
  }
  await login.descartarPasskey();
  fs.mkdirSync(path.dirname(sesion), { recursive: true });
  await page.context().storageState({ path: sesion });
}

/** Deja el carro exactamente con estos productos: lo vacía y agrega cada uno con su cantidad. */
async function dejarCarro(page: Page, testData: LoadedTestData, items: [string, number][]): Promise<CarroPage> {
  const carro = await new CarroPage(page).goto();
  await new CarroOpciones(page).cerrarToastSiEsta();
  await carro.vaciar();
  for (const [sku, n] of items) {
    const pdp = await new PDPPage(page).abrir(declarado(testData, sku));
    await pdp.fijarCantidad(n);
  }
  const c = await new CarroPage(page).goto();
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(2000);
  return c;
}

async function nombreDe(page: Page, testData: LoadedTestData, sku: string): Promise<string> {
  const pdp = await new PDPPage(page).abrir(declarado(testData, sku));
  return (await pdp.nombreDelProducto.innerText()).trim();
}

function pesos(texto: string): number {
  return Number(texto.replace(/[^\d]/g, ''));
}

/** "Algunos productos podrían agotarse" → "Sí, continuar" (si aparece) y el OTP de "Autenticación requerida". */
async function confirmarConOtp(page: Page, testData: LoadedTestData): Promise<void> {
  const correo = declarado(testData, 'COMPRADOR_USER');
  const agotarse = new AgotarseModal(page);
  const desde = marcaOtp();
  if (await agotarse.root.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) await agotarse.botonSi.click();
  const modal = new MetodoEntregaModal(page);
  if (await modal.modalOtp.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) {
    await new LoginModal(page).escribirCodigo(await esperarOtp(correo, desde, { digitos: 6 }));
    await modal.modalOtp.waitFor({ state: 'hidden', timeout: 30000 });
  }
}

/** Deja activo el despacho a {DIRECCION_DESPACHO_001} si el header muestra otra cosa. */
async function volverADespacho(page: Page, testData: LoadedTestData): Promise<void> {
  const calle = (token(testData, 'DIRECCION_DESPACHO_001') ?? 'Calle Uno 23').split(',')[0];
  const home = await new PaginaHabilitada(page).goto();
  await home.header.storeLocator.waitFor({ state: 'visible', timeout: 30000 });
  await page.waitForTimeout(3000);
  if (((await home.header.storeLocator.innerText()) ?? '').includes(calle)) return;
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.tabDespachoDomicilio.click();
  await modal.root.getByRole('button').filter({ hasText: calle }).first().click();
  await confirmarConOtp(page, testData);
  await page.waitForTimeout(3000);
}

/** Invitado: fija la dirección del token como despacho y agrega {SKU_VALID_001} (como B2C-122). */
async function carroInvitado(page: Page, testData: LoadedTestData, tokenDireccion: string): Promise<CarroPage> {
  const direccion = declarado(testData, tokenDireccion);
  const n = direccion.match(/\d{2,}/)?.[0];
  if (!n) throw new Error(`La dirección '${direccion}' no trae número para elegir la sugerencia`);
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.fijarDireccionComoInvitado(direccion, new RegExp(`(?<!\\d)${n}(?!\\d)`));
  const pdp = await new PDPPage(page).abrir(declarado(testData, 'SKU_VALID_001'));
  await pdp.agregarVisible.click();
  await expect(pdp.header.miniCarrito, 'el carro contiene el SKU').toHaveAttribute('aria-label', /\b1\b/, { timeout: 15000 });
  const carro = await new CarroPage(page).goto();
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(2000);
  return carro;
}

/**
 * Bloquea la request del carro: {CART_API_ENDPOINT} lleva el id de un cliente fijo, y cada cuenta
 * pide la suya, así que se bloquea esa misma ruta para cualquier id de cliente.
 */
async function bloquearCarro(page: Page, testData: LoadedTestData): Promise<() => Promise<void>> {
  const base = declarado(testData, 'CART_API_ENDPOINT').replace(/^\*:\/\//, '').split('/customers/')[0];
  const coincide = (u: URL) => `${u.host}${u.pathname}`.startsWith(base + '/customers/') && /\/baskets$/.test(u.pathname);
  const bloqueo = (r: import('@playwright/test').Route) => r.abort();
  await page.route(coincide, bloqueo);
  return () => page.unroute(coincide, bloqueo);
}

/** El monto que sigue a una etiqueta de la tarjeta de totales ("Subtotal con Unipay" → $X). */
async function montoTras(etiqueta: import('@playwright/test').Locator): Promise<number> {
  return pesos(await etiqueta.locator('xpath=following-sibling::*[1]').innerText());
}

test.describe('B2C-37 — Página del carro', () => {
  for (const [ff, vp, L, sufijo] of [
    ['Desktop 1440x900', DESKTOP, 'D', 'Desktop'],
    ['Mobile 390x844', MOBILE, 'M', 'Mobile'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);
      test.describe.configure({ timeout: 360000 });
      const movil = L === 'M';
      /** El CP-ID de este form-factor: la numeración Mobile no siempre coincide con la Desktop. */
      const id = (d: string, m = d) => `TC-B2C37-${L}-${movil ? m : d}`;

      test(`${id('001')} · El carrito muestra el layout con ítems disponibles sin Unipay [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('001');
        await iniciarSesion(page, testData);
        const carro = await dejarCarro(page, testData, [['SKU_VALID_001', 1]]);
        const op = new CarroOpciones(page);
        await carro.capturarEvidencia(cp, 2, 'carrito con un ítem disponible');
        await expect.soft(carro.titulo, 'header simplificado con «Mi Carro»').toBeVisible();
        await expect.soft(page.getByRole('button', { name: /^volver$/i }), 'flecha «<» de volver').toBeVisible();
        await expect.soft(op.acordeonDisponibles, 'acordeón de disponibles expandido').toHaveAttribute('aria-expanded', 'true');
        await expect.soft(op.lineaSubtotal, 'tarjeta de totales con «Subtotal»').toBeVisible();
        await expect.soft(op.lineaSubtotalUnipay, 'sin «Subtotal con Unipay»').toHaveCount(0);
        await expect.soft(op.cta, 'CTA de la tarjeta de totales').toBeVisible();
        await expect.soft(carro.footer.root, 'footer simplificado').toBeVisible();
        if (movil) {
          await expect.soft(op.masOpciones, 'ícono de menú ⋯').toBeVisible();
        } else {
          await expect.soft(page.getByRole('button', { name: /^guardar como lista$/i }), '«Guardar como lista»').toBeVisible();
          await expect.soft(page.getByRole('button', { name: /^vaciar carro$/i }), '«Vaciar carro»').toBeVisible();
        }
        await carro.capturarEvidencia(cp);
      });

      if (movil) {
        test(`TC-B2C37-M-003 · El menú ⋯ muestra «Guardar como lista» y «Vaciar carro» [Logueado] (${sufijo})`, async ({ page, testData }) => {
          const cp = 'TC-B2C37-M-003';
          await iniciarSesion(page, testData);
          const carro = await dejarCarro(page, testData, [['SKU_VALID_001', 1]]);
          const op = new CarroOpciones(page);
          await op.abrirMenu();
          await carro.capturarEvidencia(cp, 4, 'menú ⋯ abierto');
          await expect(op.menuItem(/^guardar como lista$/i), '«Guardar como lista»').toBeVisible();
          await expect(op.menuItem(/^vaciar carro$/i), '«Vaciar carro»').toBeVisible();
          for (const n of [/^guardar como lista$/i, /^vaciar carro$/i]) {
            expect.soft(await op.menuItem(n).locator('svg, img').count(), `ícono junto a ${n}`).toBeGreaterThan(0);
          }
          await carro.capturarEvidencia(cp);
        });
      }

      test(`${id('004', '006')} · «Guardar como lista» inicia el flujo de guardado de lista [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('004', '006');
        await iniciarSesion(page, testData);
        const carro = await dejarCarro(page, testData, [['SKU_VALID_001', 1]]);
        const op = new CarroOpciones(page);
        if (movil) {
          await op.abrirMenu();
          await op.menuItem(/^guardar como lista$/i).click();
        } else {
          await op.guardarComoLista.click();
        }
        await expect(op.dialogoGuardarLista, 'se abre el flujo «Agregar como lista» (B2C-54)').toBeVisible({ timeout: 20000 });
        await carro.capturarEvidencia(cp, undefined, undefined, { elemento: op.dialogoGuardarLista });
      });

      test(`${id('005')} · «Continuar con la entrega» avanza al paso Datos de entrega [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('005');
        await iniciarSesion(page, testData);
        const carro = await dejarCarro(page, testData, [['SKU_VALID_001', Number(declarado(testData, 'UNIDADES_SOBRE_MINIMO'))]]);
        await expect(carro.botonContinuarEntrega, 'CTA habilitado sobre el mínimo').toBeEnabled({ timeout: 30000 });
        await carro.capturarEvidencia(cp, 2, 'carro sobre el mínimo');
        await carro.continuarConLaEntrega();
        await expect(page, 'queda en Datos de entrega').toHaveURL(/\/checkout\/entrega/, { timeout: 30000 });
        await expect(page.getByRole('heading', { name: /datos de entrega/i })).toBeVisible({ timeout: 30000 });
        await carro.capturarEvidencia(cp);
      });

      test(`${id('013', '014')} · Cada ítem disponible muestra imagen, nombre, precios, cantidad y controles [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('013', '014');
        await iniciarSesion(page, testData);
        const nombre = await nombreDe(page, testData, 'SKU_VALID_001');
        const carro = await dejarCarro(page, testData, [['SKU_VALID_001', 2]]);
        const item = page.locator('main').last().locator('div').filter({ has: page.getByRole('button', { name: `Sumar ${nombre}` }) }).filter({ has: page.locator('img') }).last();
        await carro.capturarEvidencia(cp, 2, 'ítem disponible', { elemento: item });
        await expect.soft(item.locator('img').first(), 'imagen').toBeVisible();
        await expect.soft(item.getByText(new RegExp(nombre.slice(0, 20).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))).first(), 'nombre').toBeVisible();
        await expect.soft(item.getByText(/\$[\d.]+ c\/u/).first(), 'precio unitario').toBeVisible();
        await expect.soft(item.getByText(/^\d+ un\.$/).first(), 'cantidad actual').toBeVisible();
        await expect.soft(page.getByRole('button', { name: `Sumar ${nombre}` }), 'control +').toBeVisible();
        await expect.soft(page.getByRole('button', { name: `Restar ${nombre}` }), 'control −').toBeVisible();
        await expect.soft(page.getByRole('button', { name: `Eliminar ${nombre}` }).first(), 'acción de eliminar').toBeVisible();
        await carro.capturarEvidencia(cp);
      });

      test(`${id('014', '015')} · Los ítems disponibles se ordenan del agregado más reciente al más antiguo [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('014', '015');
        await iniciarSesion(page, testData);
        const esperado = [
          await nombreDe(page, testData, 'SKU_VALID_001'),
          await nombreDe(page, testData, 'SKU_PESABLE'),
          await nombreDe(page, testData, 'SKU_UNITARIO'),
        ];
        const carro = await dejarCarro(page, testData, [['SKU_UNITARIO', 1], ['SKU_PESABLE', 1], ['SKU_VALID_001', 1]]);
        const orden = await new CarroOpciones(page).nombresEnOrden();
        test.info().annotations.push({ type: 'orden', description: JSON.stringify(orden) });
        await carro.capturarEvidencia(cp, 6, 'orden de los ítems');
        expect(orden, 'del más reciente al más antiguo').toEqual(esperado);
      });

      test(`${id('019')} · «Vaciar carro» abre el modal de confirmación con su contenido [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('019');
        await iniciarSesion(page, testData);
        const carro = await dejarCarro(page, testData, [['SKU_VALID_001', 1], ['SKU_UNITARIO', 1]]);
        const op = new CarroOpciones(page);
        await op.abrirVaciar(movil);
        await carro.capturarEvidencia(cp, 4, 'modal «Vaciar el carro»', { elemento: op.modalVaciar });
        await expect.soft(op.modalVaciar.locator('img, svg').first(), 'imagen').toBeVisible();
        await expect.soft(op.modalVaciar.getByText(/^vaciar el carro$/i), 'título').toBeVisible();
        await expect.soft(op.modalVaciar.getByText('¿Deseas eliminar todos los productos de tu carro?'), 'subtítulo').toBeVisible();
        await expect.soft(op.botonSiEliminar, '«Sí, eliminar»').toBeVisible();
        await expect.soft(op.botonNoGracias, '«No, gracias»').toBeVisible();
        await expect.soft(op.botonCerrarModal, 'ícono X').toBeVisible();
        const x = await op.botonCerrarModal.boundingBox();
        const m = await op.modalVaciar.boundingBox();
        if (x && m) {
          test.info().annotations.push({ type: 'posición de la X', description: JSON.stringify({ x: x.x - m.x, ancho: m.width }) });
          expect.soft(x.x - m.x, 'la X está en la esquina superior izquierda').toBeLessThan(m.width / 2);
        }
        await op.botonNoGracias.click();
      });

      test(`${id('020')} · El modal muestra el estado de carga al confirmar el vaciado [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('020');
        await iniciarSesion(page, testData);
        const carro = await dejarCarro(page, testData, [['SKU_VALID_001', 1], ['SKU_UNITARIO', 1]]);
        const op = new CarroOpciones(page);
        await op.abrirVaciar(movil);
        // Solo latencia (sin limitar el ancho de banda): alarga la respuesta del vaciado sin que la
        // página entera se vuelva inmanejable, que es lo que pasaba con el perfil Slow 3G completo.
        const cdp = await page.context().newCDPSession(page);
        await cdp.send('Network.enable');
        await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 3000, downloadThroughput: -1, uploadThroughput: -1 });
        await op.botonSiEliminar.click();
        await page.waitForTimeout(300);
        const enCarga = await op.botonSiEliminar.evaluate((b) => ({
          busy: b.getAttribute('aria-busy') === 'true' || b.hasAttribute('data-loading') || !!b.querySelector('.chakra-spinner, [class*="spinner" i]'),
          texto: (b.textContent ?? '').trim(),
        })).catch(() => ({ busy: false, texto: '(sin botón)' }));
        const noDeshabilitado = await op.botonNoGracias.isDisabled().catch(() => false);
        await carro.capturarEvidencia(cp, 6, 'modal procesando el vaciado', { elemento: op.modalVaciar });
        await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
        test.info().annotations.push({ type: 'estado de carga', description: JSON.stringify({ ...enCarga, noDeshabilitado }) });
        expect.soft(enCarga.busy, '«Sí, eliminar» se muestra como indicador de carga').toBe(true);
        expect.soft(noDeshabilitado, '«No, gracias» queda deshabilitado').toBe(true);
        await op.tituloVacio.waitFor({ state: 'visible', timeout: 60000 }).catch(() => {});
      });

      test(`${id('021')} · «Sí, eliminar» vacía el carro y muestra el estado de carro vacío [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('021');
        await iniciarSesion(page, testData);
        const carro = await dejarCarro(page, testData, [['SKU_VALID_001', 1], ['SKU_UNITARIO', 1]]);
        const op = new CarroOpciones(page);
        await op.abrirVaciar(movil);
        await op.botonSiEliminar.click();
        await expect(op.tituloVacio, '«¡Tu carro está vacío!»').toBeVisible({ timeout: 30000 });
        await expect(op.subtituloVacio, 'subtítulo').toHaveText('Descubre todas las ofertas que tenemos para ti y llena tu despensa.');
        await expect(op.irAComprar, '«Ir a comprar»').toBeVisible();
        await carro.capturarEvidencia(cp);
      });

      for (const [d, cierre] of [['022', 'No, gracias'], ['023', 'X']] as const) {
        test(`${id(d)} · ${cierre === 'X' ? 'La «X»' : '«No, gracias»'} cierra el modal sin cambios en el carro [Logueado] (${sufijo})`, async ({ page, testData }) => {
          const cp = id(d);
          await iniciarSesion(page, testData);
          const carro = await dejarCarro(page, testData, [['SKU_VALID_001', 1], ['SKU_UNITARIO', 1]]);
          const op = new CarroOpciones(page);
          const antes = await op.nombresEnOrden();
          await op.abrirVaciar(movil);
          await (cierre === 'X' ? op.botonCerrarModal : op.botonNoGracias).click();
          await expect(op.modalVaciar, 'el modal se cierra').toBeHidden({ timeout: 15000 });
          expect(await op.nombresEnOrden(), 'el carro conserva sus productos').toEqual(antes);
          await carro.capturarEvidencia(cp);
        });
      }

      test(`${id('027')} · El carrito sin ítems muestra el estado vacío con «Ir a Comprar» [Guest] (${sufijo})`, async ({ page }) => {
        const cp = id('027');
        const carro = await new CarroPage(page).goto();
        const op = new CarroOpciones(page);
        await expect(op.tituloVacio, 'estado de carro vacío').toBeVisible({ timeout: 30000 });
        await expect(op.subtituloVacio, 'mensaje que invita a agregar productos').toBeVisible();
        await expect(op.irAComprar, 'CTA «Ir a Comprar»').toBeVisible();
        await carro.capturarEvidencia(cp);
      });

      test(`${id('028')} · «Ir a Comprar» del carro vacío redirige al Home [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('028');
        await new CarroPage(page).goto();
        const op = new CarroOpciones(page);
        await op.irAComprar.click({ timeout: 30000 });
        const base = declarado(testData, 'BASE_URL').replace(/\/$/, '');
        await expect(page, 'queda en el Home').toHaveURL(new RegExp(`^${base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/?(\\?.*)?$`), { timeout: 30000 });
        await new PaginaHabilitada(page).capturarEvidencia(cp);
      });

      test(`${id('034')} · Bajo el mínimo se muestra el faltante y el CTA queda deshabilitado [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('034');
        const minimo = Number(declarado(testData, 'MONTO_MINIMO_COMPRA'));
        await iniciarSesion(page, testData);
        const carro = await dejarCarro(page, testData, [['SKU_VALID_001', 1]]);
        const op = new CarroOpciones(page);
        await expect(op.toastMinimo, 'toast «¡Solo te faltan $X para ir a pagar!»').toBeVisible({ timeout: 20000 });
        const subtotal = pesos(await carro.subtotal.innerText());
        await carro.capturarEvidencia(cp, 2, 'toast de monto mínimo y CTA');
        expect(await op.faltante(), `faltante = ${minimo} − ${subtotal}`).toBe(minimo - subtotal);
        await expect(op.cta, 'CTA deshabilitado').toBeDisabled();
        await expect(op.cta, 'label «Mínimo de compra $Y»').toHaveText(new RegExp(`m[íi]nimo de compra \\$${minimo.toLocaleString('es-CL').replace('.', '\\.')}`, 'i'));
      });

      test(`${id('035')} · El faltante del toast se actualiza al cambiar la cantidad [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('035');
        const minimo = Number(declarado(testData, 'MONTO_MINIMO_COMPRA'));
        await iniciarSesion(page, testData);
        const nombre = await nombreDe(page, testData, 'SKU_VALID_001');
        const carro = await dejarCarro(page, testData, [['SKU_VALID_001', 1]]);
        const op = new CarroOpciones(page);
        await expect(op.toastMinimo).toBeVisible({ timeout: 20000 });
        await carro.capturarEvidencia(cp, 2, 'toast con 1 unidad');
        await page.getByRole('button', { name: `Sumar ${nombre}` }).click();
        await expect.poll(async () => (await carro.cantidadDe(nombre).innerText()).trim(), { timeout: 20000 }).toMatch(/^2 un\.$/);
        await page.waitForTimeout(2000);
        const subtotal = pesos(await carro.subtotal.innerText());
        await expect(op.toastMinimo, 'el toast sigue visible con el nuevo faltante').toBeVisible({ timeout: 15000 });
        await carro.capturarEvidencia(cp, 4, 'toast con 2 unidades');
        await expect.poll(() => op.faltante(), { message: `faltante = ${minimo} − ${subtotal}`, timeout: 15000 }).toBe(minimo - subtotal);
      });

      test(`${id('036')} · La X cierra el toast de monto mínimo [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('036');
        await iniciarSesion(page, testData);
        const carro = await dejarCarro(page, testData, [['SKU_VALID_001', 1]]);
        const op = new CarroOpciones(page);
        await expect(op.toastMinimo).toBeVisible({ timeout: 20000 });
        await op.toastMinimo.getByRole('button', { name: /^cerrar el aviso$/i }).click();
        await expect(op.toastMinimo, 'el toast deja de mostrarse').toBeHidden({ timeout: 10000 });
        await expect(op.cta, 'el CTA sigue deshabilitado').toBeDisabled();
        await carro.capturarEvidencia(cp);
      });

      test(`${id('038')} · Al alcanzar el mínimo se oculta el toast y se habilita el CTA [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('038');
        const meta = Number(declarado(testData, 'UNIDADES_SOBRE_MINIMO'));
        await iniciarSesion(page, testData);
        const nombre = await nombreDe(page, testData, 'SKU_VALID_001');
        const carro = await dejarCarro(page, testData, [['SKU_VALID_001', 1]]);
        const op = new CarroOpciones(page);
        await expect(op.toastMinimo).toBeVisible({ timeout: 20000 });
        for (let i = 1; i < meta; i++) {
          await op.cerrarToastSiEsta();
          await page.getByRole('button', { name: `Sumar ${nombre}` }).click();
          await expect.poll(async () => (await carro.cantidadDe(nombre).innerText()).trim(), { timeout: 20000 }).toBe(`${i + 1} un.`);
        }
        await page.waitForTimeout(2500);
        await carro.capturarEvidencia(cp, 4, `carro con ${meta} unidades`);
        await expect(carro.botonContinuarEntrega, '«Continuar con la entrega» habilitado').toBeEnabled({ timeout: 20000 });
        await expect(op.toastMinimo, 'el toast desaparece').toBeHidden({ timeout: 15000 });
      });

      test(`${id('040')} · «Lo quiero» abre el flujo de contratación de membresía [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('040');
        await iniciarSesion(page, testData, 'COMPRADOR_SIN_MEMBRESIA_USER');
        const carro = await dejarCarro(page, testData, [['SKU_VALID_001', 1]]);
        const op = new CarroOpciones(page);
        const banner = await op.bannerMembresia.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false);
        await carro.capturarEvidencia(cp, 2, 'carro de la cuenta sin membresía');
        if (!banner) throw new Error('PRECONDICION_NO_DISPONIBLE: el carro de {COMPRADOR_SIN_MEMBRESIA_USER} no muestra el banner de membresía; la cuenta no cumple «nunca tuvo membresía» o el carro no tiene ahorro Diamante');
        await page.getByRole('button', { name: /^lo quiero$/i }).click();
        await page.waitForTimeout(4000);
        await carro.capturarEvidencia(cp);
        await expect(page.getByText(/membres[íi]a|diamante|15 d[íi]as gratis/i).first(), 'se abre el flujo de contratación (B2C-42)').toBeVisible({ timeout: 20000 });
      });

      for (const [d, cta] of [['041', null], ['042', 'Renovar']] as const) {
        test(`${id(d)} · ${cta ? '«Renovar» abre el flujo de renovación de membresía' : 'El carrito muestra el banner de renovación para membresía expirada'} [Logueado] (${sufijo})`, async ({ page, testData }) => {
          const cp = id(d);
          await iniciarSesion(page, testData, 'COMPRADOR_MEMBRESIA_EXPIRADA_USER');
          const items: [string, number][] = [['SKU_VALID_001', 1]];
          if (!cta) items.push(['SKU_OFERTA_MEMBRESIA', 1]);
          const carro = await dejarCarro(page, testData, items);
          const op = new CarroOpciones(page);
          const visible = await op.bannerMembresia.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false);
          await carro.capturarEvidencia(cp, 2, 'carro de la cuenta con membresía expirada');
          if (!visible) throw new Error('PRECONDICION_NO_DISPONIBLE: el carro de {COMPRADOR_MEMBRESIA_EXPIRADA_USER} no muestra ningún banner de membresía');
          const texto = (await op.bannerMembresia.innerText()).replace(/\s+/g, ' ');
          test.info().annotations.push({ type: 'banner', description: texto });
          await expect(page.getByText(/ahorrar[íi]as \$[\d.]+ siendo diamante/i).first(), 'banner «Ahorrarías $X siendo Diamante»').toBeVisible();
          await expect(page.getByText(/vuelve, te extra[ñn]amos/i).first(), '«Vuelve, te extrañamos.»').toBeVisible();
          await expect(page.getByRole('button', { name: /^renovar$/i }), 'CTA «Renovar»').toBeVisible();
          if (cta) {
            await page.getByRole('button', { name: /^renovar$/i }).click();
            await page.waitForTimeout(4000);
            await carro.capturarEvidencia(cp);
            await expect(page.getByText(/membres[íi]a|diamante/i).first(), 'se abre el flujo de renovación (B2C-42)').toBeVisible({ timeout: 20000 });
          } else {
            await carro.capturarEvidencia(cp);
          }
        });
      }

      for (const d of ['044', '045'] as const) {
        test(`${id(d)} · ${d === '044' ? 'Se muestra el skeleton de carga mientras se procesa' : 'El skeleton se reemplaza por el contenido sin parpadeo'} [Logueado] (${sufijo})`, async ({ page, testData }) => {
          const cp = id(d);
          await iniciarSesion(page, testData);
          const nombre = await nombreDe(page, testData, 'SKU_VALID_001');
          await dejarCarro(page, testData, [['SKU_VALID_001', 1]]);
          const sk = new HomeSkeletonCarga(page);
          await sk.registrar();
          await sk.activarSlow3G();
          await page.goto('cart', { waitUntil: 'commit' });
          const carro = new CarroPage(page);
          await expect.poll(() => sk.skeletonsAhora(), { message: 'aparece el skeleton', timeout: 60000, intervals: [200] }).toBeGreaterThan(0);
          await carro.capturarEvidencia(cp, 2, 'skeleton de carga del carrito');
          await sk.desactivarThrottling();
          await expect(page.getByRole('button', { name: `Sumar ${nombre}` }), 'el carrito carga su contenido').toBeVisible({ timeout: 90000 });
          const r = await sk.registro();
          test.info().annotations.push({ type: 'skeleton', description: JSON.stringify(r) });
          expect(r.max, 'se registró skeleton durante la carga').toBeGreaterThan(0);
          if (d === '045') {
            await page.waitForTimeout(1500);
            expect(await sk.skeletonsAhora(), 'no quedan skeletons tras la carga').toBe(0);
          }
          await carro.capturarEvidencia(cp);
        });
      }

      test(`${id('037')} · Con Retiro y sobre el mínimo se habilita «Continuar con la entrega» [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('037');
        await iniciarSesion(page, testData);
        try {
          const home = await new PaginaHabilitada(page).goto();
          await home.header.storeLocator.click();
          const metodo = await new MetodoEntregaModal(page).esperarAbierto();
          await metodo.tabRetiroEnTienda.click();
          await metodo.elegirTienda(declarado(testData, 'TIENDA_RETIRO_001'));
          await confirmarConOtp(page, testData);
          await page.waitForTimeout(3000);
          const carro = await dejarCarro(page, testData, [['SKU_VALID_001', Number(declarado(testData, 'UNIDADES_SOBRE_MINIMO'))]]);
          const op = new CarroOpciones(page);
          await carro.capturarEvidencia(cp, 2, 'carro con retiro sobre el mínimo');
          await expect(carro.botonContinuarEntrega, '«Continuar con la entrega» habilitado').toBeEnabled({ timeout: 20000 });
          await expect(op.toastMinimo, 'sin toast de monto faltante').toBeHidden();
        } finally {
          await volverADespacho(page, testData);
        }
      });

      test(`${id('002', '004')} · Al invitado ${movil ? 'el menú ⋯ muestra solo «Vaciar carro»' : 'el carrito no muestra «Guardar como lista»'} [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('002', '004');
        const carro = await carroInvitado(page, testData, movil ? 'DIRECCION_DESPACHO_003' : 'DIRECCION_DESPACHO_002');
        const op = new CarroOpciones(page);
        if (movil) {
          await op.abrirMenu();
          await carro.capturarEvidencia(cp, 3, 'menú ⋯ del invitado');
          await expect(op.menuItem(/^vaciar carro$/i), '«Vaciar carro» en el menú').toBeVisible();
          await expect(op.menu.locator('svg, img').first(), 'ícono del ítem').toBeVisible();
          await expect(op.menuItem(/^guardar como lista$/i), 'sin «Guardar como lista»').toHaveCount(0);
        } else {
          await carro.capturarEvidencia(cp, 2, 'columna derecha del carro invitado');
          await expect(page.getByRole('button', { name: /^vaciar carro$/i }).locator('visible=true').first(), 'botón «Vaciar carro»').toBeVisible();
          await expect(page.getByRole('button', { name: /^guardar como lista$/i }).locator('visible=true'), 'sin «Guardar como lista»').toHaveCount(0);
        }
        await carro.capturarEvidencia(cp);
      });

      test(`${id('043')} · El carrito no muestra el banner de membresía al usuario invitado [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('043');
        const carro = await carroInvitado(page, testData, movil ? 'DIRECCION_DESPACHO_003' : 'DIRECCION_DESPACHO_001');
        const op = new CarroOpciones(page);
        await expect(op.lineaSubtotal, 'el carro invitado cargó').toBeVisible({ timeout: 20000 });
        await carro.capturarEvidencia(cp);
        await expect(op.bannerMembresia, 'sin banner de membresía').toBeHidden();
      });

      test(`${id('003', '002')} · La tarjeta de totales muestra «Subtotal con Unipay» con descuento Unipay [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('003', '002');
        await iniciarSesion(page, testData);
        const carro = await dejarCarro(page, testData, [['SKU_UNIPAY_001', 1]]);
        const op = new CarroOpciones(page);
        await expect(op.lineaSubtotal, 'línea «Subtotal»').toBeVisible({ timeout: 20000 });
        await carro.capturarEvidencia(cp);
        await expect(op.lineaSubtotalUnipay.locator('visible=true').first(), 'línea «Subtotal con Unipay»').toBeVisible();
        const subtotal = pesos(await carro.subtotal.innerText());
        const unipay = await montoTras(op.lineaSubtotalUnipay.locator('visible=true').first());
        test.info().annotations.push({ type: 'totales', description: `Subtotal $${subtotal} · Subtotal con Unipay $${unipay}` });
        expect(unipay, '«Subtotal con Unipay» menor al «Subtotal»').toBeLessThan(subtotal);
      });

      test(`${id('024')} · El carrito muestra el toast de restricción de alcohol [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('024');
        await iniciarSesion(page, testData);
        const nombre = await nombreDe(page, testData, 'SKU_ALCOHOL');
        await dejarCarro(page, testData, [['SKU_ALCOHOL', 1]]);
        const carro = await new CarroPage(page).goto();
        const op = new CarroOpciones(page);
        await expect(op.toastAlcohol, 'toast «Información importante»').toBeVisible({ timeout: 20000 });
        await carro.capturarEvidencia(cp);
        await expect(op.toastAlcohol, 'mensaje de carnet').toContainText('Deberás mostrar tu carnet al recibir compras de bebidas alcohólicas.');
        await expect(op.cerrarToastAlcohol, 'ícono «X»').toBeVisible();
        await expect(page.getByRole('button', { name: `Sumar ${nombre}` }), '{SKU_ALCOHOL} sigue en el carrito').toBeVisible();
      });

      test(`${id('025')} · La «X» cierra el toast de restricción de alcohol [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('025');
        await iniciarSesion(page, testData);
        const nombre = await nombreDe(page, testData, 'SKU_ALCOHOL');
        await dejarCarro(page, testData, [['SKU_ALCOHOL', 1]]);
        const carro = await new CarroPage(page).goto();
        const op = new CarroOpciones(page);
        await expect(op.toastAlcohol, 'toast «Información importante»').toBeVisible({ timeout: 20000 });
        await carro.capturarEvidencia(cp, 2, 'toast de alcohol visible');
        await op.cerrarToastAlcohol.click();
        await expect(page.getByText(/deber[áa]s mostrar tu carnet/i).locator('visible=true'), 'el toast deja de mostrarse').toHaveCount(0, { timeout: 3000 });
        await carro.capturarEvidencia(cp);
        await expect(page.getByRole('button', { name: `Sumar ${nombre}` }), '{SKU_ALCOHOL} sigue en el carrito').toBeVisible();
      });

      test(`${id('026')} · El toast de restricción de alcohol desaparece a los 4 segundos [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('026');
        await iniciarSesion(page, testData);
        await dejarCarro(page, testData, [['SKU_ALCOHOL', 1]]);
        const carro = await new CarroPage(page).goto();
        const op = new CarroOpciones(page);
        await expect(op.toastAlcohol, 'toast «Información importante»').toBeVisible({ timeout: 20000 });
        const inicio = Date.now();
        await carro.capturarEvidencia(cp, 2, 'toast de alcohol al aparecer');
        const texto = page.getByText(/deber[áa]s mostrar tu carnet/i).locator('visible=true');
        const oculto = await expect(texto).toHaveCount(0, { timeout: 15000 }).then(() => true, () => false);
        const duracion = (Date.now() - inicio) / 1000;
        test.info().annotations.push({ type: 'duración del toast', description: `${duracion.toFixed(1)} s${oculto ? '' : ' (seguía visible)'}` });
        await carro.capturarEvidencia(cp, 3, oculto ? `toast oculto a los ${duracion.toFixed(1)} s` : 'toast todavía visible a los 15 s');
        expect(oculto, 'el toast se oculta solo').toBe(true);
        expect(duracion, 'se oculta a los 4 segundos (±1 s)').toBeLessThanOrEqual(5);
        await carro.capturarEvidencia(cp);
      });

      test(`${id('029')} · El carrito muestra el estado de error CRT-020 sin ítems parciales [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('029');
        await iniciarSesion(page, testData);
        await dejarCarro(page, testData, [['SKU_VALID_001', 1]]);
        await bloquearCarro(page, testData);
        const carro = await new CarroPage(page).goto();
        const op = new CarroOpciones(page);
        await expect(op.tituloError, 'título «No pudimos mostrar tu carro»').toBeVisible({ timeout: 30000 });
        await carro.capturarEvidencia(cp);
        await expect.soft(op.mensajeError, 'mensaje del error').toBeVisible();
        await expect.soft(op.volverAlInicio, 'CTA «Volver al inicio»').toBeVisible();
        await expect.soft(op.reintentar, 'CTA «Reintentar»').toBeVisible();
        await expect.soft(op.codigoError, '«Error: CRT-020»').toBeVisible();
        await expect.soft(page.locator('main img').locator('visible=true').first(), 'imagen del estado de error').toBeVisible();
        await expect(page.getByRole('button', { name: /^sumar /i }), 'sin ítems del carro').toHaveCount(0);
        await expect(op.lineaSubtotal, 'sin totales del carro').toBeHidden();
      });

      test(`${id('030')} · «Volver al inicio» del error de carga navega al Home [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('030');
        await iniciarSesion(page, testData);
        await dejarCarro(page, testData, [['SKU_VALID_001', 1]]);
        await bloquearCarro(page, testData);
        const carro = await new CarroPage(page).goto();
        const op = new CarroOpciones(page);
        await expect(op.codigoError, 'estado de error CRT-020').toBeVisible({ timeout: 30000 });
        await carro.capturarEvidencia(cp, 2, 'estado de error CRT-020');
        await op.volverAlInicio.click();
        const base = declarado(testData, 'BASE_URL').replace(/\/$/, '');
        await expect(page, 'queda en el Home').toHaveURL(new RegExp(`^${base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/?(\\?.*)?$`), { timeout: 30000 });
        await new PaginaHabilitada(page).capturarEvidencia(cp);
      });

      test(`${id('031')} · «Reintentar» vuelve a cargar el contenido del carrito [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('031');
        await iniciarSesion(page, testData);
        const nombre = await nombreDe(page, testData, 'SKU_VALID_001');
        await dejarCarro(page, testData, [['SKU_VALID_001', 1]]);
        const desbloquear = await bloquearCarro(page, testData);
        const carro = await new CarroPage(page).goto();
        const op = new CarroOpciones(page);
        await expect(op.codigoError, 'estado de error CRT-020').toBeVisible({ timeout: 30000 });
        await carro.capturarEvidencia(cp, 2, 'estado de error CRT-020');
        await desbloquear();
        await op.reintentar.click();
        await expect(page.getByRole('button', { name: `Sumar ${nombre}` }), 'el carrito carga y muestra {SKU_VALID_001}').toBeVisible({ timeout: 30000 });
        await carro.capturarEvidencia(cp);
      });

      test(`${id('046')} · El skeleton se reemplaza por el estado de error si la carga falla [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('046');
        await iniciarSesion(page, testData);
        await dejarCarro(page, testData, [['SKU_VALID_001', 1]]);
        await bloquearCarro(page, testData);
        const sk = new HomeSkeletonCarga(page);
        await sk.registrar();
        await sk.activarSlow3G();
        await page.goto('cart', { waitUntil: 'commit' });
        const carro = new CarroPage(page);
        const op = new CarroOpciones(page);
        await expect.poll(() => sk.skeletonsAhora(), { message: 'aparece el skeleton', timeout: 60000, intervals: [200] }).toBeGreaterThan(0);
        await carro.capturarEvidencia(cp, 2, 'skeleton de carga del carrito');
        await expect(op.codigoError, 'el skeleton se reemplaza por el error CRT-020').toBeVisible({ timeout: 120000 });
        await expect(op.tituloError, '«No pudimos mostrar tu carro»').toBeVisible();
        await sk.desactivarThrottling();
        await page.waitForTimeout(1500);
        expect(await sk.skeletonsAhora(), 'no quedan skeletons junto al error').toBe(0);
        await carro.capturarEvidencia(cp);
      });

      test(`${id('039')} · El carrito muestra el banner de membresía para cliente sin membresía previa [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('039');
        await iniciarSesion(page, testData, 'COMPRADOR_SIN_MEMBRESIA_USER');
        const carro = await dejarCarro(page, testData, [['SKU_VALID_001', 1], ['SKU_OFERTA_MEMBRESIA', 1]]);
        const op = new CarroOpciones(page);
        const visible = await op.bannerMembresia.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false);
        await carro.capturarEvidencia(cp);
        if (!visible) throw new Error('PRECONDICION_NO_DISPONIBLE: el carro de {COMPRADOR_SIN_MEMBRESIA_USER} no muestra ningún banner de membresía');
        const texto = (await op.bannerMembresia.innerText()).replace(/\s+/g, ' ');
        test.info().annotations.push({ type: 'banner', description: texto });
        await expect(page.getByText(/ahorra \$[\d.]+ siendo diamante/i).first(), 'banner «Ahorra $X siendo Diamante»').toBeVisible();
        await expect(page.getByText(/prueba y disfruta 15 d[íi]as gratis/i).first(), '«Prueba y disfruta 15 días gratis.»').toBeVisible();
        await expect(page.getByRole('button', { name: /^lo quiero$/i }), 'CTA «Lo quiero»').toBeVisible();
        expect(pesos(texto.match(/\$[\d.]+/)?.[0] ?? ''), '$X calculado sobre el carro').toBeGreaterThan(0);
      });

      if (movil) {
        test(`TC-B2C37-M-047 · La tarjeta de totales queda fija al hacer scroll en la lista de productos [Logueado] (${sufijo})`, async ({ page, testData }) => {
          const cp = 'TC-B2C37-M-047';
          await iniciarSesion(page, testData);
          const skus = declarado(testData, 'SKUS_CARRUSEL').split(',').map((s) => s.trim()).filter(Boolean);
          const carro = await new CarroPage(page).goto();
          await new CarroOpciones(page).cerrarToastSiEsta();
          await carro.vaciar();
          for (const sku of [...skus, declarado(testData, 'SKU_UNIPAY_001')]) await new PDPPage(page).abrir(sku).then((p) => p.fijarCantidad(1));
          await new CarroPage(page).goto();
          await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
          await page.waitForTimeout(2000);
          const op = new CarroOpciones(page);
          await expect(op.cta, 'CTA de la tarjeta de totales').toBeVisible({ timeout: 20000 });
          const alto = await page.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);
          if (alto < 100) throw new Error('PRECONDICION_NO_DISPONIBLE: la lista no supera la altura visible de la pantalla');
          await carro.capturarEvidencia(cp, 2, 'carro al inicio de la lista');
          const antes = await op.cta.boundingBox();
          for (const f of [0.5, 1]) {
            await page.mouse.wheel(0, alto * f);
            await page.waitForTimeout(800);
            const ahora = await op.cta.boundingBox();
            expect.soft(Math.abs((ahora?.y ?? -1) - (antes?.y ?? -2)), `CTA fijo al ${f * 100}% del scroll`).toBeLessThan(2);
          }
          await carro.capturarEvidencia(cp, 3, 'carro al final de la lista');
          await expect.soft(op.lineaSubtotal.locator('visible=true').first(), '«Subtotal» visible al final').toBeInViewport();
          await expect.soft(op.lineaSubtotalUnipay.locator('visible=true').first(), '«Subtotal con Unipay» visible al final').toBeInViewport();
          await expect(op.cta, '«Continuar con la entrega» visible al final').toBeInViewport();
          await carro.capturarEvidencia(cp);
        });
      }

      // Ítems no disponibles: hoy se re-verifica en vivo si {SKU_NO_DISPONIBLE} se puede dejar en el carro.
      for (const cpNd of movil
        ? ['007', '008', '010', '011', '012', '013', '016', '017', '018']
        : ['006', '007', '009', '010', '011', '012', '015', '016', '017', '018']) {
        test(`TC-B2C37-${L}-${cpNd} · Precondición: {SKU_NO_DISPONIBLE} en el carro [Logueado] (${sufijo})`, async ({ page, testData }) => {
          const cp = `TC-B2C37-${L}-${cpNd}`;
          await iniciarSesion(page, testData);
          const pdp = await new PDPPage(page).abrir(declarado(testData, 'SKU_NO_DISPONIBLE'));
          await page.waitForTimeout(3000);
          const pronto = await page.getByText(/^pronto disponible$/i).locator('visible=true').first().isVisible().catch(() => false);
          const agregable = await pdp.agregarVisible.isVisible().catch(() => false);
          await pdp.capturarEvidencia(cp);
          if (pronto || !agregable) {
            throw new Error('PRECONDICION_NO_DISPONIBLE: {SKU_NO_DISPONIBLE} figura «Pronto disponible» sin «Agregar» con el despacho activo; no se puede dejar en el carro antes de pasar a {TIENDA_SIN_STOCK}');
          }
          throw new Error('{SKU_NO_DISPONIBLE} ya se puede agregar: falta automatizar el resto del caso');
        });
      }

      for (const n of ['032', '033']) {
        test(`${id(n)} · ${n === '032' ? 'El error al vaciar muestra el toast CRT-076 y conserva los ítems' : 'El toast de error CRT-076 permanece hasta cerrarlo con la X'} [Logueado] (${sufijo})`, async ({ page, testData }) => {
          const cp = id(n);
          await iniciarSesion(page, testData);
          const carro = await dejarCarro(page, testData, [['SKU_VALID_001', 1], ['SKU_UNITARIO', 1]]);
          const op = new CarroOpciones(page);
          const antes = await carro.productos();
          // {VACIAR_CARRO_API_ENDPOINT} (patrón con el id de otro carro): «Vaciar carro» borra ítem por ítem con
          // DELETE .../shopper-baskets/v2/.../baskets/<id>/items/<itemId> (observado en la red) y se bloquean esas llamadas.
          await page.route((u) => /\/shopper-baskets\/v2\/.*\/baskets\/[^/]+\/items\/[^/]+$/.test(u.pathname), (r) => (r.request().method() === 'DELETE' ? r.abort() : r.continue()));
          await op.abrirVaciar(movil);
          await carro.capturarEvidencia(cp, 4, 'modal «Vaciar el carro»', { elemento: op.modalVaciar });
          await op.botonSiEliminar.click();
          const toast = page.getByText(/CRT-076/).first();
          await expect(toast, 'toast «No pudimos vaciar tu carro… [CRT-076]»').toBeVisible({ timeout: 30000 });
          await carro.capturarEvidencia(cp, 6, 'toast CRT-076');
          if (n === '032') {
            expect(await carro.productos(), 'el carro conserva sus ítems').toEqual(antes);
          } else {
            await page.waitForTimeout(11000);
            await expect(toast, 'el toast sigue visible a los 10 s').toBeVisible();
            await page.getByRole('status').filter({ hasText: /CRT-076/ }).getByRole('button').first().click();
            await expect(toast, 'solo se cierra con la X').toBeHidden({ timeout: 10000 });
          }
          await carro.capturarEvidencia(cp);
        });
      }
    });
  }
});
