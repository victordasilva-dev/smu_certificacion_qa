import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { CarroPage } from './pages/CarroPage';
import { ShelfCarro } from './pages/ShelfCarro';

/**
 * B2C-46 — Modal "Están de vuelta" (productos no disponibles que recuperan stock).
 *
 * Solo D-007 y M-007 tienen `test()`: invitado con un carro sin no disponibles. Los de sesión
 * iniciada usan {USER_AUTH_001}, que no inicia sesión (Bloqueado Data, como en B2C-39/45), y
 * D/M-002 necesita bajar y reponer el inventario en BM: quedó Fuera de alcance por decisión de QA.
 */
test.describe('B2C-46 — Modal Están de vuelta', () => {
  for (const [ff, vp, sufijo, L] of [
    ['Desktop 1440x900', DESKTOP, 'Desktop', 'D'],
    ['Mobile 390x844', MOBILE, 'Mobile', 'M'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);

      test(`TC-B2C46-${L}-007 · Un invitado sin productos no disponibles no ve el modal (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-B2C46-${L}-007`;
        const nombre = await ShelfCarro.agregarDesdeBusqueda(page, token(testData, 'SKU_VALID_001')!);

        // Pasos 1-2 — entra al carro, que solo tiene {SKU_VALID_001} disponible.
        const carro = await new CarroPage(page).goto();
        const shelf = new ShelfCarro(page, nombre);
        await shelf.root.waitFor({ state: 'visible', timeout: 30000 });
        // El modal, si existiera, se abre al cargar el carro: se le da tiempo de aparecer antes
        // de afirmar que no está.
        await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
        await page.waitForTimeout(3000);
        await carro.capturarEvidencia(cp, 2, 'carro cargado');

        await expect(page.getByText(/est[áa]n de vuelta/i), 'sin modal "Están de vuelta"').toHaveCount(0);
        await expect(page.getByText(/volvieron a estar disponibles/i)).toHaveCount(0);
        await expect(shelf.precioUnitario, 'carrito en su estado habitual').toBeVisible();
        await carro.capturarEvidencia(cp);
      });
    });
  }
});
