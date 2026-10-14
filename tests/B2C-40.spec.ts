import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import type { LoadedTestData } from './support/testData';
import { DESKTOP_1280, MOBILE } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { PLPCategoriaPage } from './pages/PLPCategoriaPage';
import { ShelfProducto } from './pages/ShelfProducto';
import { ModalSimilares } from './pages/ModalSimilares';
import { capturarEvidencia } from './support/evidencia';

/**
 * B2C-40 — Modal "Ver similares" de un producto sin stock.
 *
 * De los 34 TC de la planilla están aquí los 2 que se pueden correr con la data que declaran:
 * D-001 y M-001, que abren el modal desde el shelf de la PLP declarada en `{PLP_URL}`, donde hoy hay
 * un producto "Pronto disponible" con "Ver similares".
 *
 * El resto quedó en Bloqueado Data antes de tener `test()`: todos necesitan un producto sin stock y
 * declaran como tal `{SKU_PRODS_SIMILARES}` (000000000000628239-UN) —D-009/M-009, `{SKU_SIN_SIMILARES}`
 * (000000000000675191-UN)—, y los dos tienen stock en el ambiente: su PDP muestra "Agregar", no
 * "Ver similares" (verificado el 2026-09-28). Los de carro y minicarro piden además un carro con un
 * producto no disponible, y el de `{COMPRADOR_USER}` está vacío. Usar el producto de la PLP en esos
 * casos sería tomar la data de otra fila; se decidió con QA dejarlos bloqueados.
 */

/** La URL de la PLP que el TC declara, como ruta relativa. */
function rutaPLP(testData: LoadedTestData): string {
  const url = token(testData, 'PLP_URL');
  if (!url) throw new Error('Falta {PLP_URL} en el Excel de data: el TC lo declara como su contexto');
  return new URL(url).pathname.slice(1);
}

/**
 * Pasos 1-3: Home, la PLP declarada y el shelf sin stock con "Ver similares". Devuelve ese shelf.
 */
async function hastaElShelfSinStock(page: Page, testData: LoadedTestData, cp: string): Promise<ShelfProducto> {
  const home = new PaginaHabilitada(page);
  await home.goto();
  await home.capturarEvidencia(cp, 1, 'Home');

  const plp = new PLPCategoriaPage(page, rutaPLP(testData));
  await plp.goto();
  await expect(ShelfProducto.todos(page).first()).toBeVisible({ timeout: 60000 });
  // El listado llega por SSR: los botones existen antes de que React los hidrate, y un clic en ese
  // hueco no hace nada. Se espera a que la red se calme (ver B2C-59).
  await page.waitForLoadState('networkidle', { timeout: 60000 }).catch(() => {});
  await plp.capturarEvidencia(cp, 2, 'PLP declarada');

  const total = await ShelfProducto.todos(page).count();
  for (let i = 0; i < total; i++) {
    const shelf = ShelfProducto.enIndice(page, i);
    if (await shelf.verSimilares.count()) {
      await shelf.root.scrollIntoViewIfNeeded();
      await capturarEvidencia(shelf.root, cp, 3, 'producto sin stock con Ver similares');
      return shelf;
    }
  }
  throw new Error('La PLP declarada no tiene ningún producto con "Ver similares"');
}

test.describe('B2C-40 — Modal Ver similares', () => {
  test.describe('Desktop 1280x900', () => {
    test.use(DESKTOP_1280);

    test("TC-40-D-001 · Clic en 'Ver similares' desde shelf en contexto de navegacion abre el modal (Desktop)", async ({ page, testData }) => {
      const cp = 'TC-40-D-001';
      const shelf = await hastaElShelfSinStock(page, testData, cp);

      // Pasos 4-5 — clic en "Ver similares": se abre el modal.
      await shelf.verSimilares.click();
      const modal = await new ModalSimilares(page).esperarAbierto();
      await expect(modal.referenciaOriginal).toBeVisible();

      // Paso 6 — sidebar lateral derecho tipo overlay: pegado al borde derecho, alto completo, más
      // angosto que la pantalla (la página queda a la vista) y con overlay detrás.
      await expect(modal.botonesAgregar.first()).toBeVisible({ timeout: 30000 });
      const g = await modal.geometria();
      expect(g.x + g.ancho, 'borde derecho del panel = borde derecho del viewport').toBeGreaterThanOrEqual(g.anchoViewport - 1);
      expect(g.alto, 'alto completo').toBeGreaterThanOrEqual(g.altoViewport - 1);
      expect(g.ancho, 'no ocupa todo el ancho').toBeLessThan(g.anchoViewport * 0.6);
      expect(g.conOverlay, 'overlay detrás del panel').toBe(true);
      await modal.capturar(cp, 5, 'modal abierto', page);
      await modal.capturar(cp);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test("TC-40-M-001 · Tap en 'Ver similares' desde shelf en contexto de navegacion abre el modal (Mobile)", async ({ page, testData }) => {
      const cp = 'TC-40-M-001';
      const shelf = await hastaElShelfSinStock(page, testData, cp);

      // Paso 4 — tap en "Ver similares".
      await shelf.verSimilares.click();
      const modal = await new ModalSimilares(page).esperarAbierto();

      // Pasos 5-6 — bottom sheet: ancho completo, anclado al borde inferior y con la página visible
      // por encima; visible y funcional (lista de similares con "Agregar").
      await expect(modal.botonesAgregar.first()).toBeVisible({ timeout: 30000 });
      const g = await modal.geometria();
      expect(g.x, 'empieza en el borde izquierdo').toBeLessThanOrEqual(1);
      expect(g.ancho, 'ancho completo').toBeGreaterThanOrEqual(g.anchoViewport - 1);
      expect(g.y + g.alto, 'anclado al borde inferior').toBeGreaterThanOrEqual(g.altoViewport - 1);
      expect(g.y, 'la página queda visible por encima').toBeGreaterThan(0);
      await expect(modal.referenciaOriginal).toBeVisible();
      await modal.capturar(cp, 5, 'bottom sheet abierto', page);
      await modal.capturar(cp);
    });
  });
});
