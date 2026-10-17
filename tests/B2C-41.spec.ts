import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { LoadedTestData } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { PDPPage } from './pages/PDPPage';
import { CarroPage } from './pages/CarroPage';
import { LoginModal } from './pages/LoginModal';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { MisFavoritosPage } from './pages/MisFavoritosPage';
import { SugeridosModal } from './pages/SugeridosModal';
import { pesos } from './pages/DatosEntregaPage';
import { esperarOtp, marcaOtp } from './support/otp';

/**
 * B2C-41 — Modal "¡Que no se te olviden!": productos sugeridos antes de la entrega.
 *
 * Precondición común: sesión con la cuenta del TC, el carro con {SKU_VALID_001} ×
 * {UNIDADES_SOBRE_MINIMO} (subtotal ≥ {MONTO_MINIMO_COMPRA}) y método de entrega activo. El carro se
 * arma solo si falta. Cada cuenta guarda su sesión en `.qa/auth/` (no se commitea); si venció, se
 * vuelve a entrar con correo + OTP.
 *
 * "Imperdibles" (B2C-308, LISTO EN DEVELOPMENT) es una tercera pestaña que va primera y es la
 * activa por defecto. B2C-41 la deja fuera de su alcance, así que estos TC la ignoran: verifican la
 * presencia, el orden relativo y el contenido de "Lo que más compro" y "Mis favoritos".
 *
 * Quedan sin `test()`: D/M-002 (la cuenta sin sugerencias no tiene método de entrega), D/M-007
 * (la cuenta declarada no tiene más de 24 My Usuals) y D/M-011 ({ADD_TO_CART_API_ENDPOINT} en TBD).
 */

const SESIONES: Record<string, string> = {
  COMPRADOR_USUALS_FAVORITOS_USER: '.qa/auth/b189-user.json',
  COMPRADOR_SOLO_USUALS_USER: '.qa/auth/b41-oneclick.json',
  COMPRADOR_SOLO_FAVORITOS_USER: '.qa/auth/b41-segundo.json',
};

type Cuenta = keyof typeof SESIONES;

function correo(testData: LoadedTestData, cuenta: Cuenta): string {
  return token(testData, cuenta)!.split('/')[0].trim();
}

/** Login por correo + OTP desde "Ingresa aquí", con un posible segundo OTP y la oferta de passkey. */
async function loginConOtp(page: Page, testData: LoadedTestData, cuenta: Cuenta): Promise<void> {
  const login = new LoginModal(page);
  const desde = marcaOtp();
  await login.pedirCodigo(correo(testData, cuenta));
  const codigo = await esperarOtp(correo(testData, cuenta), desde, { digitos: 6 });
  const desde2 = marcaOtp();
  await login.escribirCodigo(codigo);
  await login.disparador.first().waitFor({ state: 'hidden', timeout: 45000 });
  const otp = new MetodoEntregaModal(page).modalOtp;
  const ahoraNo = login.ofertaPasskey.getByRole('button', { name: /^ahora no$/i });
  let respondido = false;
  const fin = Date.now() + 20000;
  while (Date.now() < fin) {
    if (!respondido && (await otp.isVisible().catch(() => false))) {
      await login.escribirCodigo(await esperarOtp(correo(testData, cuenta), desde2, { digitos: 6 }));
      await otp.waitFor({ state: 'hidden', timeout: 30000 });
      respondido = true;
      continue;
    }
    if (await ahoraNo.isVisible().catch(() => false)) await ahoraNo.click({ timeout: 5000 }).catch(() => {});
    await page.waitForTimeout(500);
  }
  await login.descartarPasskey();
}

/** Inicia sesión con la cuenta del TC: reusa su sesión guardada y, si no sirve, correo + OTP. */
async function iniciarSesion(page: Page, testData: LoadedTestData, cuenta: Cuenta): Promise<void> {
  const sesion = path.resolve(SESIONES[cuenta]);
  if (fs.existsSync(sesion)) await page.context().addCookies(JSON.parse(fs.readFileSync(sesion, 'utf-8')).cookies ?? []);
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  const conSesion = await home.header.saludo.waitFor({ state: 'visible', timeout: 30000 }).then(
    () => true,
    async () => !(await new LoginModal(page).disparador.first().isVisible().catch(() => false)),
  );
  if (!conSesion) await loginConOtp(page, testData, cuenta);
  await new LoginModal(page).descartarPasskey();
  await expect(home.header.saludo, 'sesión iniciada').toBeVisible({ timeout: 30000 });
  await expect(home.header.storeLocator, 'método de entrega activo en el header').toContainText(/\S/, { timeout: 30000 });
  fs.mkdirSync(path.dirname(sesion), { recursive: true });
  await page.context().storageState({ path: sesion });
}

/** Quita del carro el producto `nombre` (con la confirmación, si el sitio la pide). */
async function quitarDelCarro(page: Page, nombre: string): Promise<void> {
  const carro = await new CarroPage(page).goto();
  await expect(carro.titulo).toBeVisible({ timeout: 30000 });
  const boton = page.getByRole('button', { name: `Eliminar ${nombre}`, exact: true });
  if (!(await boton.first().waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false))) return;
  await boton.locator('visible=true').first().click();
  const confirmar = page.getByRole('alertdialog').getByRole('button', { name: /^s[íi], eliminar$/i });
  if (await confirmar.waitFor({ state: 'visible', timeout: 3000 }).then(() => true, () => false)) await confirmar.click();
  await expect(page.getByRole('button', { name: `Eliminar ${nombre}`, exact: true })).toHaveCount(0, { timeout: 20000 });
}

/** Deja el carro con {SKU_VALID_001} × {UNIDADES_SOBRE_MINIMO}, ajustando desde el carro. */
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
  // Quita lo que no sea el SKU del TC (p. ej. un sugerido agregado por un caso anterior que no alcanzó a limpiar).
  const sku = token(testData, 'SKU_VALID_001')!.replace(/^0+|-.*$/g, '');
  const ajenos = await page.getByRole('button', { name: /^eliminar .+/i }).evaluateAll((bs, id) => {
    const fuera = new Set<string>();
    for (const b of bs) {
      let el: Element | null = b;
      while (el && !el.querySelector('img, a[href]')) el = el.parentElement;
      if (el && !el.innerHTML.includes(id)) fuera.add((b.getAttribute('aria-label') ?? '').replace(/^eliminar\s+/i, '').trim());
    }
    return [...fuera].filter(Boolean);
  }, sku);
  for (const nombre of ajenos) await quitarDelCarro(page, nombre);
  if (ajenos.length) carro = await new CarroPage(page).goto();
  for (let i = 0; i < 30; i++) {
    const n = Number(((await carro.totalUnidades.textContent()) ?? '').match(/\d+/)![0]);
    if (n === unidades) break;
    await (n < unidades ? carro.botonSumar : carro.botonRestar).click();
    await expect(carro.totalUnidades).not.toHaveText(new RegExp(`^${n} `), { timeout: 15000 });
  }
  await expect(carro.totalUnidades, 'unidades del SKU en el carro').toHaveText(`${unidades} unidades`);
  expect(await carro.productos(), 'el carro solo tiene el SKU del TC').toHaveLength(1);
}

/** Precondición + pasos 1–4: carro cargado → "Continuar con la entrega" → modal abierto. */
async function hastaElModal(page: Page, testData: LoadedTestData, cp: string, cuenta: Cuenta) {
  await iniciarSesion(page, testData, cuenta);
  await asegurarCarro(page, testData);

  const carro = await new CarroPage(page).goto();
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await expect(carro.titulo).toBeVisible({ timeout: 30000 });
  await expect(carro.totalUnidades).toHaveText(new RegExp(`^${token(testData, 'UNIDADES_SOBRE_MINIMO')} unidades$`));
  expect(pesos((await carro.subtotal.textContent()) ?? ''), 'subtotal ≥ mínimo de compra').toBeGreaterThanOrEqual(
    Number(token(testData, 'MONTO_MINIMO_COMPRA')),
  );
  await carro.capturarEvidencia(cp, 2, 'carro cargado');

  await carro.botonContinuarEntrega.click();
  const modal = new SugeridosModal(page);
  await expect(modal.root, 'modal "¡Que no se te olviden!"').toBeVisible({ timeout: 30000 });
  await expect(modal.cards.first()).toBeVisible({ timeout: 30000 });
  await page.waitForTimeout(1000);
  return { carro, modal };
}

/** "Continuar" fijo: visible al pie del modal y en el mismo lugar tras desplazar el área de productos. */
async function continuarFijo(page: Page, modal: SugeridosModal): Promise<{ antes: number; despues: number; desplazo: boolean }> {
  await expect(modal.continuar).toBeVisible();
  const antes = (await modal.continuar.boundingBox())!.y;
  const desplazo = await modal.cuerpo.evaluate((el) => {
    const inicial = el.scrollTop;
    el.scrollTop = el.scrollHeight;
    return el.scrollTop > inicial;
  });
  await page.waitForTimeout(800);
  const despues = (await modal.continuar.boundingBox())!.y;
  return { antes, despues, desplazo };
}

test.describe('B2C-41 — Modal "¡Que no se te olviden!": productos sugeridos', () => {
  test.describe.configure({ timeout: 300000 });

  for (const [ff, vp, sufijo, L] of [
    ['Desktop 1440x900', DESKTOP, 'Desktop', 'D'],
    ['Mobile 390x844', MOBILE, 'Mobile', 'M'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);
      const accion = L === 'D' ? 'clic' : 'toque';

      test(`TC-B2C41-${L}-001 · Continuar con la entrega abre el modal de sugeridos cuando hay sugerencias [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C41-${L}-001`;
        const { carro, modal } = await hastaElModal(page, testData, cp, 'COMPRADOR_USUALS_FAVORITOS_USER');
        await expect(modal.titulo, 'título "¡Que no se te olviden!"').toBeVisible();
        await expect(page, 'el modal se abre sobre el carro').toHaveURL(/\/cart/);
        await carro.capturarEvidencia(cp, 3, `modal abierto tras el ${accion} en "Continuar con la entrega"`);
        await carro.capturarEvidencia(cp);
      });

      test(`TC-B2C41-${L}-003 · Con My Usuals y favoritos se ven ambas pestañas en orden [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C41-${L}-003`;
        const { carro, modal } = await hastaElModal(page, testData, cp, 'COMPRADOR_USUALS_FAVORITOS_USER');
        await carro.capturarEvidencia(cp, 4, 'modal abierto', { elemento: modal.root });
        const nombres = (await modal.nombresPestanas()).filter((n) => !/imperdibles/i.test(n));
        expect(nombres, 'pestañas de B2C-41 en orden (sin Imperdibles, de B2C-308)').toEqual(['Lo que más compro', 'Mis favoritos']);
        await modal.abrirPestana(modal.loQueMasCompro);
        await expect(modal.loQueMasCompro, '"Lo que más compro" resaltada').toHaveAttribute('aria-selected', 'true');
        expect((await modal.nombres()).length, 'lista My Usuals con productos').toBeGreaterThan(0);
        await carro.capturarEvidencia(cp, 5, 'pestañas "Lo que más compro" y "Mis favoritos"', { elemento: modal.root });
        await carro.capturarEvidencia(cp);
      });

      test(`TC-B2C41-${L}-004 · Sin favoritos solo se ve la pestaña Lo que más compro [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C41-${L}-004`;
        const { carro, modal } = await hastaElModal(page, testData, cp, 'COMPRADOR_SOLO_USUALS_USER');
        await carro.capturarEvidencia(cp, 4, 'modal abierto', { elemento: modal.root });
        const nombres = (await modal.nombresPestanas()).filter((n) => !/imperdibles/i.test(n));
        expect(nombres, 'solo "Lo que más compro" (sin Imperdibles, de B2C-308)').toEqual(['Lo que más compro']);
        await expect(modal.misFavoritos, 'no se muestra "Mis favoritos"').toHaveCount(0);
        await modal.abrirPestana(modal.loQueMasCompro);
        await expect(modal.loQueMasCompro, '"Lo que más compro" resaltada').toHaveAttribute('aria-selected', 'true');
        await carro.capturarEvidencia(cp, 5, 'solo "Lo que más compro"', { elemento: modal.root });
        await carro.capturarEvidencia(cp);
      });

      test(`TC-B2C41-${L}-005 · Sin My Usuals solo se ve la pestaña Mis favoritos [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C41-${L}-005`;
        const { carro, modal } = await hastaElModal(page, testData, cp, 'COMPRADOR_SOLO_FAVORITOS_USER');
        await carro.capturarEvidencia(cp, 4, 'modal abierto', { elemento: modal.root });
        const nombres = (await modal.nombresPestanas()).filter((n) => !/imperdibles/i.test(n));
        expect(nombres, 'solo "Mis favoritos" (sin Imperdibles, de B2C-308)').toEqual(['Mis favoritos']);
        await expect(modal.loQueMasCompro, 'no se muestra "Lo que más compro"').toHaveCount(0);
        await modal.abrirPestana(modal.misFavoritos);
        await carro.capturarEvidencia(cp, 5, 'solo "Mis favoritos"', { elemento: modal.root });
        await carro.capturarEvidencia(cp);
      });

      test(`TC-B2C41-${L}-006 · Lo que más compro muestra los My Usuals en grilla 2x2 con Continuar fijo [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C41-${L}-006`;
        const { carro, modal } = await hastaElModal(page, testData, cp, 'COMPRADOR_USUALS_FAVORITOS_USER');
        await carro.capturarEvidencia(cp, 4, 'modal abierto', { elemento: modal.root });
        await modal.abrirPestana(modal.loQueMasCompro);
        await expect(modal.loQueMasCompro, '"Lo que más compro" resaltada').toHaveAttribute('aria-selected', 'true');
        const n = (await modal.nombres()).length;
        expect(n, 'My Usuals en la pestaña').toBeGreaterThan(0);
        expect(n, 'tope de 24').toBeLessThanOrEqual(24);
        if (n > 1) expect(await modal.columnas(), 'grilla de 2 columnas').toBe(2);
        const primera = modal.card((await modal.cards.first().getAttribute('aria-label'))!);
        await expect(primera.getByText(/^\$[\d.]+$/).first(), 'precio (B2C-64)').toBeVisible();
        await expect(primera.getByRole('button', { name: /guardar en favoritos|quitar de favoritos/i }), 'favorito (B2C-64)').toBeVisible();
        await expect(primera.getByRole('button', { name: /^agregar$|aumentar cantidad/i }).first(), 'Agregar o stepper (B2C-64)').toBeVisible();
        await carro.capturarEvidencia(cp, 5, 'My Usuals en grilla 2x2 con "Continuar" al pie', { elemento: modal.root });
        const { antes, despues, desplazo } = await continuarFijo(page, modal);
        if (desplazo) expect(Math.abs(despues - antes), '"Continuar" fijo al desplazar').toBeLessThanOrEqual(2);
        await carro.capturarEvidencia(cp, 5, 'tras desplazar: "Continuar" en el mismo lugar', { elemento: modal.root });
        await carro.capturarEvidencia(cp);
      });

      test(`TC-B2C41-${L}-008 · La pestaña Mis favoritos muestra los favoritos en grilla 2x2 sin tope [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C41-${L}-008`;
        await iniciarSesion(page, testData, 'COMPRADOR_USUALS_FAVORITOS_USER');
        // Los favoritos de la cuenta, para comparar con la pestaña: cada fila tiene "Quitar <nombre> de favoritos".
        const favoritos = await new MisFavoritosPage(page).goto();
        const quitar = page.getByRole('button', { name: /^quitar .+ de favoritos$/i });
        await quitar.first().waitFor({ state: 'visible', timeout: 30000 });
        await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
        const deLaCuenta = [...new Set((await quitar.evaluateAll((bs) => bs.map((b) => b.getAttribute('aria-label') ?? ''))).map((t) => t.replace(/^quitar\s+|\s+de favoritos$/gi, '').trim()))];
        await favoritos.capturarEvidencia(cp, 1, `Mis favoritos de la cuenta (${deLaCuenta.length})`);

        const { carro, modal } = await hastaElModal(page, testData, cp, 'COMPRADOR_USUALS_FAVORITOS_USER');
        await modal.abrirPestana(modal.misFavoritos);
        await expect(modal.misFavoritos, '"Mis favoritos" resaltada').toHaveAttribute('aria-selected', 'true');
        const enModal = await modal.nombres();
        expect([...enModal].sort(), 'todos los favoritos de la cuenta').toEqual([...deLaCuenta].sort());
        if (enModal.length > 1) expect(await modal.columnas(), 'grilla de 2 columnas').toBe(2);
        const primera = modal.card((await modal.cards.first().getAttribute('aria-label'))!);
        await expect(primera.getByText(/^\$[\d.]+$/).first(), 'precio (B2C-64)').toBeVisible();
        await expect(modal.continuar, '"Continuar" al pie').toBeVisible();
        await carro.capturarEvidencia(cp, 6, `"Mis favoritos" resaltada con ${enModal.length} productos`, { elemento: modal.root });
        await carro.capturarEvidencia(cp);
      });

      test(`TC-B2C41-${L}-009 · Agregar un sugerido lo suma al carro y el modal sigue abierto [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C41-${L}-009`;
        const { carro, modal } = await hastaElModal(page, testData, cp, 'COMPRADOR_USUALS_FAVORITOS_USER');
        await carro.capturarEvidencia(cp, 4, 'modal abierto', { elemento: modal.root });
        const antes = Number(((await carro.totalUnidades.textContent()) ?? '').match(/\d+/)![0]);
        const agregar = modal.botonesAgregar.first();
        await agregar.scrollIntoViewIfNeeded();
        const nombre = (await agregar.evaluate((b) => {
          let el: Element | null = b;
          while (el && !el.querySelector('a[aria-label]')) el = el.parentElement;
          return el?.querySelector('a[aria-label]')?.getAttribute('aria-label') ?? '';
        })).trim();
        const card = modal.card(nombre);
        let huboLoading = false;
        const vigia = (async () => {
          const fin = Date.now() + 5000;
          while (Date.now() < fin && !huboLoading) {
            huboLoading = (await card.locator('.chakra-spinner, [aria-busy="true"], [data-loading]').count().catch(() => 0)) > 0;
            await new Promise((r) => setTimeout(r, 50));
          }
        })();
        await agregar.click();
        await vigia;
        await expect(card.getByText(/^en carro$/i), `"${nombre}" queda en el carro`).toBeVisible({ timeout: 20000 });
        await carro.capturarEvidencia(cp, 6, `"${nombre}" agregado desde el modal`, { elemento: modal.root });
        await expect(carro.totalUnidades, 'el contador del carro se actualiza').not.toHaveText(`${antes} unidades`, { timeout: 15000 });
        await expect(modal.root, 'el modal sigue abierto').toBeVisible();
        await expect(modal.continuar, '"Continuar" habilitado').toBeEnabled();
        expect(huboLoading, 'loading en la card mientras procesa').toBe(true);
        await carro.capturarEvidencia(cp);
        await quitarDelCarro(page, nombre);
      });

      test(`TC-B2C41-${L}-010 · Continuar cierra el modal de sugeridos y sigue a Mis Envíos [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C41-${L}-010`;
        const { carro, modal } = await hastaElModal(page, testData, cp, 'COMPRADOR_USUALS_FAVORITOS_USER');
        await carro.capturarEvidencia(cp, 4, 'modal abierto', { elemento: modal.root });
        await modal.continuar.click();
        await expect(modal.root, 'el modal se cierra').toBeHidden({ timeout: 30000 });
        await expect(page, 'sigue al paso de entrega (Mis Envíos)').toHaveURL(/\/checkout\/entrega/, { timeout: 30000 });
        await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
        await carro.capturarEvidencia(cp);
      });

      if (L === 'M') {
        test(`TC-B2C41-M-012 · Al hacer scroll en el modal el botón Continuar permanece fijo [Logueado] (Mobile)`, async ({ page, testData }) => {
          const cp = 'TC-B2C41-M-012';
          const { carro, modal } = await hastaElModal(page, testData, cp, 'COMPRADOR_USUALS_FAVORITOS_USER');
          await carro.capturarEvidencia(cp, 4, 'modal abierto, inicio de la lista');
          const alto = page.viewportSize()!.height;
          const { antes, despues, desplazo } = await continuarFijo(page, modal);
          expect(desplazo, 'el área de productos se desplaza').toBe(true);
          expect(Math.abs(despues - antes), '"Continuar" no se mueve').toBeLessThanOrEqual(2);
          expect(despues, '"Continuar" en la parte inferior').toBeGreaterThan(alto * 0.75);
          await expect(modal.continuar).toBeInViewport();
          await carro.capturarEvidencia(cp, 5, 'final de la lista: "Continuar" fijo al pie');
          await carro.capturarEvidencia(cp);
        });
      }
    });
  }
});
