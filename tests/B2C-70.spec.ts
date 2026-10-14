import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import type { LoadedTestData } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { LoginModal } from './pages/LoginModal';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';

/**
 * B2C-70 — Store Locator del header: qué muestra según el método de entrega.
 *
 * De los 3 TC de la planilla solo está aquí **TC-B2C70-D-001**, el del estado sin método de
 * entrega seleccionado. Los otros dos quedaron `Bloqueado` antes de llegar a tener `test()`, y por
 * la misma raíz: los dos parten de una forma de entrega ya aplicada y ninguna de las dos filas
 * dice con qué dirección o tienda se aplica — su columna `Test data` declara solo `{BASE_URL}`.
 *
 * No es un tecnicismo. Como invitado no hay direcciones guardadas: el drawer obliga a escribir una
 * dirección concreta, y de esa dirección depende justamente lo que D-002 viene a verificar (el
 * label de precio o condición de despacho, que cambia con la cobertura de cada comuna). Elegir una
 * a dedo convertiría el veredicto en una afirmación sobre la dirección elegida, no sobre el
 * producto. Y la única vía que se resolvería dentro de la propia UI —elegir una tienda de la lista
 * que el drawer ya ofrece, sin data externa— está rota en el ambiente: confirmar la tienda abre un
 * modal de cobertura de despacho y el header no cambia (ver `.qa/knowledge/store-locator.json`).
 * D-003 suma lo suyo: pide un usuario logueado y una dirección cuyo nombre supere los 53
 * caracteres, dos datos que tampoco declara.
 *
 * El caso que sí corre no necesita nada de eso: el estado inicial del storefront ya es "sin método
 * de entrega seleccionado", así que la precondición se cumple sola al abrir la página.
 */

test.describe('B2C-70 — Store Locator del header', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C70-D-001 · Sin metodo de entrega seleccionado, el Store Locator muestra el icono, el texto Elige una forma de entrega y el icono V (Desktop)', async ({
      page,
    }) => {
      // Paso 1 — acceder sin método de entrega seleccionado a una página habilitada. La fila
      // declara {BASE_URL} y ninguna ruta más, así que la página habilitada es el Home; el
      // contexto del navegador nace limpio, que es la precondición del caso.
      const pagina = new PaginaHabilitada(page);
      await pagina.goto();
      await pagina.capturarEvidencia('TC-B2C70-D-001', 1, 'Home sin método de entrega seleccionado');

      // Paso 2 — verificar el contenido del Store Locator en el header.
      const locator = pagina.header.storeLocator;
      await expect(locator).toBeVisible();
      await pagina.capturarEvidencia('TC-B2C70-D-001', 2, 'botón del Store Locator en el header', {
        elemento: locator,
      });

      const composicion = await pagina.header.composicionDelStoreLocator();

      // El texto, tal como lo declara el resultado esperado.
      expect(composicion.texto).toMatch(/^elige una forma de entrega$/i);

      // El icono del método, a la izquierda del texto. Se comprueba que alguno empiece antes que
      // el texto y no dónde está exactamente: el slot lo ocupan dos svg que se turnan deslizándose,
      // y su posición cambia entre dos lecturas del mismo estado.
      const aLaIzquierda = composicion.iconos.filter((i) => i.dx < composicion.textoDx);
      expect(aLaIzquierda.length).toBeGreaterThan(0);

      // El "icono V": el del extremo derecho. Se exige que sea una V de verdad —tres puntos con el
      // del medio más abajo que los extremos— en vez de comparar el path contra un literal, que
      // envejecería en cuanto rediseñen el icono sin cambiarle la forma.
      const chevron = composicion.iconos[composicion.iconos.length - 1];
      expect(chevron.dx).toBeGreaterThan(composicion.textoDx);
      expect(chevron.puntos).toHaveLength(3);
      const [inicio, medio, fin] = chevron.puntos;
      expect(medio.y).toBeGreaterThan(inicio.y);
      expect(medio.y).toBeGreaterThan(fin.y);

      // Estado final: el header completo, para que la evidencia muestre el componente en su sitio
      // y no solo el recorte del botón.
      await pagina.capturarEvidencia('TC-B2C70-D-001', undefined, undefined, {
        elemento: pagina.header.root,
      });
    });
  });

  /**
   * SP2 (2026-10-12): la planilla agregó los TC Mobile. Sus filas traen los tokens en la columna
   * "Descripción" y la descripción en "Test data" (columnas intercambiadas): se toman como declarados.
   * Solo M-001 (invitado) y M-002 ({SIN_DIRECCION_USER}, sin método de entrega) son ejecutables; el
   * resto quedó en Bloqueado Data (direcciones/tiendas en TBD, cuentas sin fila o {USER_AUTH_001}).
   */
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    /** Verifica en una página el Store Locator "sin método": ícono, texto y V. */
    async function sinMetodoEn(pagina: PaginaHabilitada, cp: string, paso: number): Promise<void> {
      const locator = pagina.header.storeLocator;
      await expect(locator, `Store Locator visible en ${pagina.nombre}`).toBeVisible();
      await pagina.capturarEvidencia(cp, paso, `Store Locator en ${pagina.nombre}`, { elemento: pagina.header.root });
      const c = await pagina.header.composicionDelStoreLocator();
      expect(c.texto, `texto en ${pagina.nombre}`).toMatch(/^elige una forma de entrega$/i);
      expect(c.iconos.filter((i) => i.dx < c.textoDx).length, `ícono en ${pagina.nombre}`).toBeGreaterThan(0);
      const v = c.iconos[c.iconos.length - 1];
      expect(v.dx, `ícono V a la derecha en ${pagina.nombre}`).toBeGreaterThan(c.textoDx);
      expect(v.puntos).toHaveLength(3);
      expect(v.puntos[1].y).toBeGreaterThan(v.puntos[0].y);
      expect(v.puntos[1].y).toBeGreaterThan(v.puntos[2].y);
    }

    /** Pasos de Home, PLP y búsqueda con las rutas que declara la fila. */
    async function recorrer(page: Page, testData: LoadedTestData, cp: string, desde: number): Promise<void> {
      const rutas: [string, string][] = [
        ['', 'Home'],
        [rel(token(testData, 'PLP_URL')!), 'PLP'],
        [rel(token(testData, 'SRP_URL')!), 'búsqueda'],
      ];
      let paso = desde;
      for (const [ruta, nombre] of rutas) {
        const pagina = new PaginaHabilitada(page, ruta, nombre);
        await pagina.goto();
        await sinMetodoEn(pagina, cp, paso);
        paso += 2;
      }
    }

    test('TC-B2C70-M-001 · Verificar que el Store Locator muestra "Elige una forma de entrega" sin método seleccionado (Mobile)', async ({ page, testData }) => {
      // Contexto nuevo = sesión nueva sin método de entrega (precondición).
      await recorrer(page, testData, 'TC-B2C70-M-001', 2);
      await page.screenshot({ path: 'test-results/evidence/TC-B2C70-M-001.png' });
    });

    test('TC-B2C70-M-002 · Verificar que el Store Locator muestra "Elige una forma de entrega" sin método seleccionado (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C70-M-002';
      const home = new PaginaHabilitada(page);
      await home.goto();
      await home.cookies.aceptarSiAparece();
      await new LoginModal(page).iniciarSesion(token(testData, 'SIN_DIRECCION_USER')!, token(testData, 'SIN_DIRECCION_PASSWORD')!);
      await recorrer(page, testData, cp, 4);
      await page.screenshot({ path: `test-results/evidence/${cp}.png` });
    });

    test('TC-B2C70-M-003 · Verificar que el Store Locator muestra ícono de despacho, dirección y label de precio [Guest] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C70-M-003';
      const direccion = token(testData, 'DIRECCION_DESPACHO_001')!;
      const calle = direccion.split(',')[0].trim();
      const home = new PaginaHabilitada(page);
      await home.goto();
      await home.cookies.aceptarSiAparece();
      // Precondición: Despacho a domicilio seleccionado en la sesión con la dirección declarada (B2C-4).
      await home.header.storeLocator.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await modal.fijarDireccionComoInvitado(direccion, new RegExp(calle, 'i'));

      await page.reload({ waitUntil: 'domcontentloaded' });
      await home.waitUntilReady();
      await expect(home.header.storeLocator, 'dirección en el Store Locator').toContainText(calle, { timeout: 30000 });
      await home.capturarEvidencia(cp, 2, 'Store Locator con Despacho a domicilio', { elemento: home.header.barraDelSitio });
      expect(await iconoActivo(home), 'ícono de Despacho a domicilio activo').toBe('despacho');
      expect(await home.header.direccionDelStoreLocator()).toBe(calle);
      await expect(labelDePrecio(home), 'label de precio').toHaveText(/^\$\s?[\d.]+$|^gratis$/i);
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C70-M-004 · Verificar que el Store Locator muestra ícono de retiro, tienda y label de precio [Guest] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C70-M-004';
      const tienda = token(testData, 'TIENDA_RETIRO_001')!;
      const home = new PaginaHabilitada(page);
      await home.goto();
      await home.cookies.aceptarSiAparece();
      // Precondición: Retiro en tienda seleccionado en la sesión con la tienda declarada (B2C-4).
      await home.header.storeLocator.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await modal.tabRetiroEnTienda.click();
      await expect(modal.tituloSeleccionTienda).toBeVisible();
      // El buscador de tiendas filtra por ubicación, no por nombre: si la tienda no está en la lista
      // inicial, se filtra por la comuna que trae su nombre ("Las Condes").
      const opcion = modal.root.locator('button').filter({ hasText: tienda }).filter({ has: page.locator('input[type="radio"]') }).first();
      await page.waitForTimeout(3000);
      if (!(await opcion.isVisible())) {
        await modal.campoBuscarTienda.click();
        await modal.campoBuscarTienda.pressSequentially(tienda.replace(/^unimarc\s+/i, '').replace(/\s+[IVX]+$/, ''), { delay: 80 });
      }
      await expect(opcion, `tienda ${tienda} en la lista`).toBeVisible({ timeout: 30000 });
      await opcion.click();
      await modal.root.getByRole('button', { name: /confirmar tienda/i }).click();
      // Al confirmar, al invitado se le ofrece iniciar sesión: se cierra y sigue como invitado.
      const login = page.locator('[role="dialog"]').filter({ hasText: /hola, ingresa aqu/i }).locator('visible=true').first();
      await login.waitFor({ state: 'visible', timeout: 30000 }).catch(() => undefined);
      if (await login.isVisible()) await login.getByRole('button', { name: /^cerrar$/i }).click();

      await page.reload({ waitUntil: 'domcontentloaded' });
      await home.waitUntilReady();
      await expect(home.header.storeLocator, 'tienda en el Store Locator').toContainText(tienda, { timeout: 30000 });
      await home.capturarEvidencia(cp, 2, 'Store Locator con Retiro en tienda', { elemento: home.header.barraDelSitio });
      expect(await iconoActivo(home), 'ícono de Retiro en tienda activo').toBe('retiro');
      expect(await home.header.direccionDelStoreLocator()).toBe(tienda);
      await expect(labelDePrecio(home), 'label de precio').toHaveText(/^\$\s?[\d.]+$|^gratis$/i);
      await home.capturarEvidencia(cp);
    });
  });
});

/**
 * Qué método marca el ícono del Store Locator. Los dos íconos (moto y edificio) están siempre en el
 * botón; el activo va en rojo y el otro en gris (rgb(189,189,189)).
 */
async function iconoActivo(pagina: PaginaHabilitada): Promise<'despacho' | 'retiro' | null> {
  return pagina.header.storeLocator.evaluate((b) => {
    const svgs = [...b.querySelectorAll('svg')];
    const rojo = (s?: Element) => !!s && getComputedStyle(s).color === 'rgb(218, 41, 28)';
    const despacho = svgs.find((s) => (s.querySelector('path')?.getAttribute('d') ?? '').startsWith('M20.25 9'));
    const retiro = svgs.find((s) => (s.querySelector('path')?.getAttribute('d') ?? '').startsWith('M21.75 16.5'));
    if (rojo(despacho) && !rojo(retiro)) return 'despacho';
    if (rojo(retiro) && !rojo(despacho)) return 'retiro';
    return null;
  });
}

/** El chip del costo o condición de despacho ("$2.990", "Gratis"). */
function labelDePrecio(pagina: PaginaHabilitada) {
  return pagina.header.storeLocator.locator('[data-testid="header-delivery-chip"]');
}

function rel(url: string): string {
  const u = new URL(url);
  return (u.pathname + u.search).replace(/^\//, '');
}
