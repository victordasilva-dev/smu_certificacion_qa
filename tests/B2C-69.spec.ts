import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import type { LoadedTestData } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { LoginModal } from './pages/LoginModal';
import { MenuCuenta } from './pages/MenuCuenta';

/**
 * B2C-69 — Header: área SSO, saludo, botón de membresía, minicarrito y menú Mi Cuenta.
 *
 * De los 29 TC de la planilla están aquí los 21 que se pueden correr con la data que declaran.
 * Fuera quedaron:
 * - **BM-001** — Business Manager: Fuera de alcance.
 * - **D-008, D-009, M-007, M-008** — Bloqueado Data: como invitado, "Agregar" exige elegir antes una
 *   dirección de despacho, y la fila no declara ninguna.
 * - **D-016, D-017** — Bloqueado Data: `{LINKS_MI_CUENTA_SET_001}` y `{LINK_CONFIGURADO_001}` apuntan a
 *   `/header-account-menu-links.html`, que responde "Not found": no hay de dónde saber qué links están
 *   configurados.
 *
 * El nombre registrado del cliente —del que salen las iniciales y el saludo esperados— no se declara
 * en la data: se lee del perfil que el sitio pide al iniciar sesión (`LoginModal.iniciarSesionConPerfil`).
 */

type Cuenta = 'COMPRADOR' | 'COMPRADOR_NOMBRE_LARGO' | 'COMPRADOR_SIN_MEMBRESIA' | 'COMPRADOR_MEMBRESIA';

async function homeComoInvitado(page: Page, cp: string): Promise<PaginaHabilitada> {
  const home = new PaginaHabilitada(page);
  await home.goto();
  await home.capturarEvidencia(cp, 1, 'Home sin sesión');
  return home;
}

async function homeLogueado(page: Page, testData: LoadedTestData, cuenta: Cuenta) {
  const home = new PaginaHabilitada(page);
  await home.goto();
  const perfil = await new LoginModal(page).iniciarSesionConPerfil(
    token(testData, `${cuenta}_USER`)!,
    token(testData, `${cuenta}_PASSWORD`)!,
  );
  const menu = new MenuCuenta(page);
  await expect(menu.disparador).toBeVisible({ timeout: 30000 });
  // El disparador se pinta primero con un marcador ("?") y después con las iniciales.
  await expect(menu.disparador).not.toHaveText(/^\s*\?\s*$/, { timeout: 30000 });
  return { home, perfil, menu };
}

/** Iniciales de los nombres (sin apellidos): la primera letra de cada palabra de `firstName`. */
const inicialesDe = (firstName: string) =>
  firstName.trim().split(/\s+/).map((p) => p[0]!.toUpperCase()).join('');
const primerNombre = (firstName: string) => firstName.trim().split(/\s+/)[0]!;

test.describe('B2C-69 — Header: SSO, membresía, minicarrito y Mi Cuenta', () => {
  // ================================================================ Desktop 1440x900
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test("TC-B2C69-D-001 · Header Desktop muestra el boton 'Ingresa aqui' para usuario no logueado (Desktop)", async ({ page }) => {
      const cp = 'TC-B2C69-D-001';
      const home = await homeComoInvitado(page, cp);
      await expect(home.header.areaSSO).toBeVisible();
      await expect(home.header.areaSSO).toHaveText(/ingresa aqu[íi]/i);
      await expect(home.header.areaSSO.locator('svg')).toHaveCount(1);
      await home.capturarEvidencia(cp, undefined, undefined, { elemento: home.header.areaSSO });
    });

    test("TC-B2C69-D-002 · Clic en 'Ingresa aqui' abre el modal de Login en Desktop (Desktop)", async ({ page }) => {
      const cp = 'TC-B2C69-D-002';
      const home = await homeComoInvitado(page, cp);
      const login = new LoginModal(page);
      await login.disparador.click();
      await expect(login.root).toBeVisible({ timeout: 30000 });
      await expect(login.campoRut).toBeVisible();
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C69-D-003 · Area SSO Desktop muestra el icono con iniciales y el saludo con el nombre del usuario logueado (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C69-D-003';
      const { home, perfil, menu } = await homeLogueado(page, testData, 'COMPRADOR');
      const partes = await menu.partesDelDisparador();
      expect(partes.iniciales, `iniciales de los nombres "${perfil.firstName}" (sin apellidos)`).toBe(inicialesDe(perfil.firstName));
      expect(partes.saludoVisible).toBe(`Hola, ${primerNombre(perfil.firstName)}`);
      await home.capturarEvidencia(cp, undefined, undefined, { elemento: menu.disparador });
    });

    test('TC-B2C69-D-004 · Nombre largo en el saludo Desktop se trunca a 15 caracteres mas puntos suspensivos (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C69-D-004';
      const { home, perfil, menu } = await homeLogueado(page, testData, 'COMPRADOR_NOMBRE_LARGO');
      const nombre = primerNombre(perfil.firstName);
      expect(nombre.length, 'la cuenta declarada tiene un primer nombre de más de 15 caracteres').toBeGreaterThan(15);
      const partes = await menu.partesDelDisparador();
      const mostrado = partes.saludoVisible!.replace(/^hola,\s*/i, '');
      // 15 caracteres del primer nombre + puntos suspensivos. El sitio usa el carácter "…" (U+2026)
      // y la planilla escribe "..."; los dos son la misma elipsis, y se acepta cualquiera.
      expect(mostrado).toMatch(new RegExp(`^${nombre.slice(0, 15)}(\\.\\.\\.|…)$`));
      await home.capturarEvidencia(cp, undefined, undefined, { elemento: menu.disparador });
    });

    test("TC-B2C69-D-005 · Cliente logueado sin membresia paga muestra el boton 'Suscribete a Unimarc' en Desktop (Desktop)", async ({ page, testData }) => {
      const cp = 'TC-B2C69-D-005';
      const { home } = await homeLogueado(page, testData, 'COMPRADOR_SIN_MEMBRESIA');
      await home.capturarEvidencia(cp, 3, 'header del cliente sin membresía', { elemento: home.header.barraDelSitio });
      await expect(home.header.botonMembresia, 'botón "Suscríbete a Unimarc"').toBeVisible({ timeout: 20000 });
      await home.capturarEvidencia(cp);
    });

    test("TC-B2C69-D-006 · Cliente logueado con membresia paga muestra 'Ver mi suscripcion' en Desktop (Desktop)", async ({ page, testData }) => {
      const cp = 'TC-B2C69-D-006';
      const { home } = await homeLogueado(page, testData, 'COMPRADOR_MEMBRESIA');
      await expect(home.header.botonVerSuscripcion).toBeVisible({ timeout: 20000 });
      await expect(home.header.botonMembresia).toHaveCount(0);
      await home.capturarEvidencia(cp, undefined, undefined, { elemento: home.header.barraDelSitio });
    });

    test('TC-B2C69-D-007 · Icono del minicarrito Desktop muestra badge en 0 cuando el carro esta vacio (Desktop)', async ({ page }) => {
      const cp = 'TC-B2C69-D-007';
      const home = await homeComoInvitado(page, cp);
      expect(await home.header.conteoAnunciadoCarrito(), 'el carro está vacío').toBe(0);
      await home.capturarEvidencia(cp, 2, 'icono del carrito', { elemento: home.header.miniCarrito.first() });
      await expect(home.header.badgeCarrito, 'badge numérico visible en el icono del carrito').toHaveText('0');
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C69-D-010 · Clic en el minicarrito Desktop abre el modal con el resumen del carrito (Desktop)', async ({ page }) => {
      const cp = 'TC-B2C69-D-010';
      const home = await homeComoInvitado(page, cp);
      await home.header.miniCarrito.first().click();
      const miniCarro = page.locator('[role="dialog"]').filter({ hasText: /mini carro/i }).locator('visible=true').first();
      await expect(miniCarro).toBeVisible({ timeout: 20000 });
      await expect(page).toHaveURL(/\/$|\/\?/);
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C69-D-011 · Clic en el nombre del cliente Desktop abre el modal del menu de Mi Cuenta (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C69-D-011';
      const { home, menu } = await homeLogueado(page, testData, 'COMPRADOR');
      await menu.abrir();
      await expect(menu.modal).toBeVisible({ timeout: 20000 });
      const opciones = await menu.opciones();
      for (const fija of [/^mi cuenta$/i, /^mis compras$/i, /^mi membres[íi]a$/i, /^mis favoritos$/i, /^cerrar sesi[óo]n$/i]) {
        expect(opciones.some((o) => fija.test(o)), `opción fija ${fija}`).toBe(true);
      }
      await home.capturarEvidencia(cp, undefined, undefined, { elemento: menu.modal });
    });

    for (const [cp, rotulo, tokenUrl, nombre] of [
      ['TC-B2C69-D-012', /^mi cuenta$/i, 'MI_CUENTA_URL', "Clic en 'Mi cuenta' del modal Desktop redirige a la pagina de Mi cuenta"],
      ['TC-B2C69-D-013', /^mis compras$/i, 'MIS_COMPRAS_URL', "Clic en 'Mis compras' del modal Desktop redirige a el historial de pedidos"],
      ['TC-B2C69-D-014', /^mi membres[íi]a$/i, 'MI_MEMBRESIA_URL', "Clic en 'Mi membresia' del modal Desktop redirige a la pagina de Mi membresia"],
      ['TC-B2C69-D-015', /^mis favoritos$/i, 'MIS_FAVORITOS_URL', "Clic en 'Mis Favoritos' del modal Desktop redirige a la pagina de Mis Favoritos"],
    ] as const) {
      test(`${cp} · ${nombre} (Desktop)`, async ({ page, testData }) => {
        const { home, menu } = await homeLogueado(page, testData, 'COMPRADOR');
        await menu.abrir();
        await expect(menu.modal).toBeVisible({ timeout: 20000 });
        await home.capturarEvidencia(cp, 3, 'modal de Mi Cuenta abierto', { elemento: menu.modal });
        await menu.opcion(rotulo).click();
        const destino = new URL(token(testData, tokenUrl)!).pathname.replace(/\/$/, '');
        await expect(page).toHaveURL(new RegExp(`${destino}/?(\\?.*)?$`), { timeout: 30000 });
        await page.waitForTimeout(3000);
        await home.capturarEvidencia(cp);
      });
    }

    test('TC-B2C69-D-018 · Cerrar sesion desde el modal Mi Cuenta Desktop cierra la sesion y actualiza el header (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C69-D-018';
      const { home, menu } = await homeLogueado(page, testData, 'COMPRADOR');
      await menu.abrir();
      await expect(menu.modal).toBeVisible({ timeout: 20000 });
      await home.capturarEvidencia(cp, 3, 'modal de Mi Cuenta abierto', { elemento: menu.modal });
      await menu.opcion(/^cerrar sesi[óo]n$/i).click();
      await expect(home.header.areaSSO).toBeVisible({ timeout: 30000 });
      await expect(menu.modal).toBeHidden();
      await home.capturarEvidencia(cp, undefined, undefined, { elemento: home.header.barraDelSitio });
    });
  });

  // ================================================================ Mobile 390x844
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test("TC-B2C69-M-001 · Header Mobile muestra el boton 'Ingresa aqui' para usuario no logueado (Mobile)", async ({ page }) => {
      const cp = 'TC-B2C69-M-001';
      const home = await homeComoInvitado(page, cp);
      await expect(home.header.areaSSO).toBeVisible();
      await expect(home.header.areaSSO).toHaveText(/ingresa aqu[íi]/i);
      await expect(home.header.areaSSO.locator('svg')).toHaveCount(1);
      await home.capturarEvidencia(cp, undefined, undefined, { elemento: home.header.areaSSO });
    });

    test("TC-B2C69-M-002 · Clic en 'Ingresa aqui' abre el modal de Login en Mobile (Mobile)", async ({ page }) => {
      const cp = 'TC-B2C69-M-002';
      const home = await homeComoInvitado(page, cp);
      const login = new LoginModal(page);
      await login.disparador.click();
      await expect(login.root).toBeVisible({ timeout: 30000 });
      await expect(login.campoRut).toBeVisible();
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C69-M-003 · Area SSO Mobile muestra solo el icono, sin el saludo, para usuario logueado (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C69-M-003';
      const { home, perfil, menu } = await homeLogueado(page, testData, 'COMPRADOR');
      const partes = await menu.partesDelDisparador();
      expect(partes.iniciales, `iniciales de los nombres "${perfil.firstName}"`).toBe(inicialesDe(perfil.firstName));
      expect(partes.saludoVisible, 'sin saludo textual en Mobile').toBeNull();
      await home.capturarEvidencia(cp, undefined, undefined, { elemento: home.header.barraDelSitio });
    });

    test("TC-B2C69-M-004 · Cliente logueado sin membresia paga muestra el boton 'Suscribete a Unimarc' en Mobile (Mobile)", async ({ page, testData }) => {
      const cp = 'TC-B2C69-M-004';
      const { home } = await homeLogueado(page, testData, 'COMPRADOR_SIN_MEMBRESIA');
      await home.capturarEvidencia(cp, 3, 'header del cliente sin membresía', { elemento: home.header.barraDelSitio });
      await expect(home.header.botonMembresia, 'botón "Suscríbete a Unimarc"').toBeVisible({ timeout: 20000 });
      await home.capturarEvidencia(cp);
    });

    test("TC-B2C69-M-005 · Cliente logueado con membresia paga muestra 'Ver mi suscripcion' en Mobile (Mobile)", async ({ page, testData }) => {
      const cp = 'TC-B2C69-M-005';
      const { home } = await homeLogueado(page, testData, 'COMPRADOR_MEMBRESIA');
      await expect(home.header.botonVerSuscripcion).toBeVisible({ timeout: 20000 });
      await expect(home.header.botonMembresia).toHaveCount(0);
      await home.capturarEvidencia(cp, undefined, undefined, { elemento: home.header.barraDelSitio });
    });

    test('TC-B2C69-M-006 · Icono del minicarrito Mobile muestra badge en 0 cuando el carro esta vacio (Mobile)', async ({ page }) => {
      const cp = 'TC-B2C69-M-006';
      const home = await homeComoInvitado(page, cp);
      expect(await home.header.conteoAnunciadoCarrito(), 'el carro está vacío').toBe(0);
      await home.capturarEvidencia(cp, 2, 'icono del carrito', { elemento: home.header.miniCarrito.first() });
      await expect(home.header.badgeCarrito, 'badge numérico visible en el icono del carrito').toHaveText('0');
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C69-M-009 · Clic en el minicarrito Mobile navega a la pagina del carro de compras (Mobile)', async ({ page }) => {
      const cp = 'TC-B2C69-M-009';
      const home = await homeComoInvitado(page, cp);
      await home.header.miniCarrito.first().click();
      await expect(page).toHaveURL(/\/cart(\?.*)?$/, { timeout: 30000 });
      await page.waitForTimeout(2000);
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C69-M-010 · Clic en el icono del cliente Mobile redirige directamente a Mi cuenta (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C69-M-010';
      const { home, menu } = await homeLogueado(page, testData, 'COMPRADOR');
      await home.capturarEvidencia(cp, 2, 'header con el icono del cliente', { elemento: home.header.barraDelSitio });
      await menu.abrir();
      const destino = new URL(token(testData, 'MI_CUENTA_URL')!).pathname.replace(/\/$/, '');
      await expect(page).toHaveURL(new RegExp(`${destino}/?(\\?.*)?$`), { timeout: 30000 });
      await expect(menu.modal).toHaveCount(0);
      await page.waitForTimeout(2000);
      await home.capturarEvidencia(cp);
    });
  });
});
