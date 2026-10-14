import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { PDPPage } from './pages/PDPPage';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';

/**
 * B2C-138 — Store Locator sin método de entrega: el header y el modal "Elige tu método de entrega".
 *
 * Corren como invitado los TC cuya precondición acepta "invitado o con sesión activa" (el `read`
 * los marca `cuenta_no_declarada`, pero la rama invitado no usa cuenta). Quedan sin `test()`:
 * - D/M-002 y D/M-005 (logueado): {COMPRADOR_USER} es por RUT y el login pasó a pedir solo correo.
 * - M-003: su paso 4 repite el caso con un usuario logueado sin dirección que la fila no declara.
 * - D/M-010 y 011: como invitado el modal se abre sin pedir nada a la red (no hay request que
 *   hacer fallar) y la fila no declara qué llamada simular. Sin red, el sitio entra en modo
 *   "navegando sin conexión" y el modal ni se abre.
 */

/** El Store Locator del header en estado "sin método": ícono, texto y V (como B2C-70). */
async function sinMetodoEn(pagina: PaginaHabilitada | PDPPage, nombre: string, cp: string, paso: number): Promise<void> {
  const header = pagina.header;
  await expect(header.storeLocator, `Store Locator visible en ${nombre}`).toBeVisible();
  await pagina.capturarEvidencia(cp, paso, `Store Locator en ${nombre}`, { elemento: header.barraDelSitio });
  const c = await header.composicionDelStoreLocator();
  expect(c.texto, `texto en ${nombre}`).toMatch(/^elige una forma de entrega$/i);
  expect(c.iconos.filter((i) => i.dx < c.textoDx).length, `ícono a la izquierda en ${nombre}`).toBeGreaterThan(0);
  const v = c.iconos[c.iconos.length - 1];
  expect(v.dx, `chevron a la derecha en ${nombre}`).toBeGreaterThan(c.textoDx);
  expect(v.puntos).toHaveLength(3);
  expect(v.puntos[1].y, `chevron hacia abajo en ${nombre}`).toBeGreaterThan(v.puntos[0].y);
  expect(v.puntos[1].y).toBeGreaterThan(v.puntos[2].y);
}

/** Abre el Home y el modal desde el Store Locator. */
async function abrirModal(page: Page): Promise<{ home: PaginaHabilitada; modal: MetodoEntregaModal }> {
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  return { home, modal };
}

/** El header sigue sin método y la sesión no guardó ninguna forma de entrega. */
async function headerSinCambios(page: Page, home: PaginaHabilitada): Promise<void> {
  expect(await home.header.direccionDelStoreLocator()).toMatch(/^elige una forma de entrega$/i);
  // Tras recargar, el estado del invitado sigue siendo "sin método": nada quedó configurado.
  await page.reload({ waitUntil: 'domcontentloaded' });
  await home.waitUntilReady();
  await expect(home.header.storeLocator).toContainText(/elige una forma de entrega/i, { timeout: 30000 });
}

function rel(url: string): string {
  const u = new URL(url);
  return (u.pathname + u.search).replace(/^\//, '');
}

const ROJO = 'rgb(218, 41, 28)';

test.describe('B2C-138 — Store Locator sin método de entrega', () => {
  for (const [ff, vp, sufijo, L] of [
    ['Desktop 1440x900', DESKTOP, 'Desktop', 'D'],
    ['Mobile 390x844', MOBILE, 'Mobile', 'M'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);

      test(`TC-B2C138-${L}-001 · Header muestra «Elige una forma de entrega» + ícono ∨ sin método seleccionado [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C138-${L}-001`;
        const home = await new PaginaHabilitada(page).goto();
        await home.cookies.aceptarSiAparece();
        await sinMetodoEn(home, 'Home', cp, 2);

        const plp = await new PaginaHabilitada(page, rel(token(testData, 'PLP_URL')!), 'PLP').goto();
        await sinMetodoEn(plp, 'PLP', cp, 3);

        const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
        await sinMetodoEn(pdp, 'PDP', cp, 4);
        await pdp.capturarEvidencia(cp);
      });

      if (L === 'D') {
        test(`TC-B2C138-D-003 · Clic en el Store Locator abre el modal «Elige tu método de entrega» con botón X (Desktop)`, async ({ page }) => {
          const cp = 'TC-B2C138-D-003';
          const home = await new PaginaHabilitada(page).goto();
          await home.cookies.aceptarSiAparece();
          await home.capturarEvidencia(cp, 1, 'header sin método de entrega', { elemento: home.header.barraDelSitio });
          await home.header.storeLocator.click();
          const modal = await new MetodoEntregaModal(page).esperarAbierto();
          await expect(modal.encabezado).toBeVisible();
          await modal.capturarModal(cp, 2, 'modal «Elige tu método de entrega» abierto');
          await expect(modal.botonCerrar, 'botón X').toBeVisible();
          await expect(modal.botonCerrar).toBeEnabled();
          await modal.capturarModal(cp, undefined, undefined, page);
        });
      }

      test(`TC-B2C138-${L}-004 · Estructura del modal para invitado: tabs, imagen y «sin direcciones guardadas» [Guest] (${sufijo})`, async ({ page }) => {
        const cp = `TC-B2C138-${L}-004`;
        const { modal } = await abrirModal(page);
        await modal.capturarModal(cp, 1, 'modal abierto');

        const despacho = await modal.estiloTab(modal.tabDespachoDomicilio);
        const retiro = await modal.estiloTab(modal.tabRetiroEnTienda);
        expect(despacho.activa, '«Despacho a domicilio» activa por defecto').toBe(true);
        expect(despacho.icono, 'ícono de Despacho en rojo').toBe(ROJO);
        expect(retiro.activa, '«Retiro en tienda» inactiva').toBe(false);
        expect(retiro.icono, 'Retiro en gris (no rojo)').not.toBe(ROJO);
        expect(retiro.icono, 'ícono de Retiro presente').not.toBeNull();
        expect(despacho.icono, 'ícono de Despacho presente').not.toBeNull();
        await modal.capturarModal(cp, 4, 'pestañas Despacho (activa) y Retiro (inactiva)', modal.tabDespachoDomicilio.locator('..'));

        await expect(modal.imagenContenido, 'imagen en el área de contenido').toBeVisible();
        await expect(modal.mensajeSinDirecciones).toBeVisible();
        await expect(modal.textoAyuda, 'texto de ayuda').toBeVisible();
        await modal.capturarModal(cp);
      });

      test(`TC-B2C138-${L}-006 · Buscador o «Activar ubicación actual» inicia el flujo B2C-26 (Despacho) (${sufijo})`, async ({ page }) => {
        const cp = `TC-B2C138-${L}-006`;
        const { modal } = await abrirModal(page);

        await modal.campoBusqueda.click();
        await expect(modal.campoBusqueda, 'buscador de dirección enfocado y editable').toBeFocused();
        await expect(modal.campoBusqueda).toBeEditable();
        await modal.capturarModal(cp, 1, 'buscador de dirección activo');

        // Sin permiso de geolocalización concedido: lo que se verifica es que el clic dispara la
        // obtención de la ubicación ("Buscando tu ubicación…"), que es la entrada al flujo B2C-26.
        await modal.observarCarga();
        await modal.tocarUbicacionActual();
        await expect
          .poll(async () => (await modal.cargaObservada()).texto, { message: '«Buscando tu ubicación…» tras el clic', timeout: 15000 })
          .toBe(true);
        await modal.capturarModal(cp, 3, 'flujo de ubicación iniciado', page);
        await modal.capturarModal(cp, undefined, undefined, page);
      });

      test(`TC-B2C138-${L}-007 · «Retiro en tienda» activa la pestaña e inicia el flujo B2C-121 (${sufijo})`, async ({ page }) => {
        const cp = `TC-B2C138-${L}-007`;
        const { modal } = await abrirModal(page);
        await modal.capturarModal(cp, 1, 'Despacho a domicilio activo');
        await modal.tabRetiroEnTienda.click();

        await expect.poll(async () => (await modal.estiloTab(modal.tabRetiroEnTienda)).activa, { message: 'Retiro activa' }).toBe(true);
        const retiro = await modal.estiloTab(modal.tabRetiroEnTienda);
        const despacho = await modal.estiloTab(modal.tabDespachoDomicilio);
        expect(retiro.icono, 'ícono de Retiro en rojo').toBe(ROJO);
        expect(despacho.activa, 'Despacho inactiva').toBe(false);
        expect(despacho.icono, 'Despacho en gris (no rojo)').not.toBe(ROJO);
        await modal.capturarModal(cp, 3, 'Retiro en tienda activo');

        await expect(modal.tituloSeleccionTienda, 'entrada del flujo B2C-121').toBeVisible();
        await expect(modal.campoBuscarTienda).toBeVisible();
        await modal.capturarModal(cp);
      });

      test(`TC-B2C138-${L}-008 · Cerrar el modal con el botón X deja el header en estado inicial (${sufijo})`, async ({ page }) => {
        const cp = `TC-B2C138-${L}-008`;
        const { home, modal } = await abrirModal(page);
        await modal.capturarModal(cp, 1, 'modal abierto sin selección');
        await modal.cerrarConX();
        await expect(modal.root, 'modal cerrado').toBeHidden();
        await sinMetodoEn(home, 'Home', cp, 3);
        await headerSinCambios(page, home);
        await home.capturarEvidencia(cp);
      });

      test(`TC-B2C138-${L}-009 · ${L === 'D' ? 'Clic fuera del modal lo cierra' : 'Swipe hacia abajo o tap fuera del modal lo cierra'} sin configurar método (${sufijo})`, async ({ page }) => {
        const cp = `TC-B2C138-${L}-009`;
        let { home, modal } = await abrirModal(page);
        await modal.capturarModal(cp, 1, 'modal abierto sin selección', page);

        if (L === 'M') {
          // Paso 1-2 — swipe down.
          await modal.swipeAbajo();
          await page.waitForTimeout(1500);
          await modal.capturarModal(cp, 2, 'tras el swipe hacia abajo', page);
          await expect(modal.root, 'el swipe hacia abajo cierra el modal').toBeHidden({ timeout: 5000 });
          await sinMetodoEn(home, 'Home', cp, 3);
          ({ home, modal } = await abrirModal(page));
        }

        const punto = await modal.clicFuera();
        const caja = await modal.root.boundingBox();
        expect(
          punto,
          `hay un área fuera del modal donde hacer ${L === 'D' ? 'clic' : 'tap'} (el modal mide ${Math.round(caja?.width ?? 0)}x${Math.round(caja?.height ?? 0)})`,
        ).not.toBeNull();
        await expect(modal.root, 'el clic fuera cierra el modal').toBeHidden({ timeout: 5000 });
        await sinMetodoEn(home, 'Home', cp, L === 'D' ? 3 : 6);
        await headerSinCambios(page, home);
        await home.capturarEvidencia(cp);
      });
    });
  }
});
