import { test, expect, token } from './support/fixtures';
import { MOBILE } from './support/viewports';
import { PDPPage } from './pages/PDPPage';

/**
 * B2C-6 — Carruseles de recomendación en la PDP.
 *
 * Los TC Desktop de la planilla quedaron cerrados en corridas anteriores (ver
 * .qa/knowledge/pdp-carruseles-recomendacion.json); aquí vive el primer `test()` de la suite.
 */

function requerido(testData: Parameters<typeof token>[0], nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) throw new Error(`Falta {${nombre}} en el Excel de data: el TC lo declara en su Test data`);
  return valor;
}

test.describe('B2C-6 — Carruseles de recomendacion en la PDP', () => {
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C6-M-007 · "Recomendados para ti" no se muestra al usuario invitado (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C6-M-007';
      test.setTimeout(180000);
      const sku = requerido(testData, 'SKU_VALID_001');

      // Paso 1-2 — invitado (contexto nuevo, sin sesión ni método de entrega) entra a la PDP.
      const pdp = new PDPPage(page);
      await pdp.irA(sku);
      await pdp.waitUntilReady();
      await pdp.cookies.aceptarSiAparece();
      await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
      await pdp.capturarEvidencia(cp, 2, `PDP del SKU ${sku} cargada como invitado`);

      // Paso 3 — scroll hasta el final de la PDP.
      await pdp.scrollAlFinal();
      await pdp.capturarEvidencia(cp, 3, 'final de la pagina tras el scroll');
      await pdp.encuadrarFinDelContenido();
      await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});

      // Esperado — no hay "Recomendados para ti" y no queda hueco antes del footer.
      await expect(pdp.recomendadosParaTi, 'el invitado no ve "Recomendados para ti"').toHaveCount(0);
      await expect(pdp.footer).toBeVisible();
      const hueco = await pdp.huecoAntesDelFooter();
      expect(hueco, 'espacio vacío entre el contenido de la PDP y el footer (px)').toBeLessThanOrEqual(80);

      test.info().annotations.push({ type: 'hueco-antes-del-footer-px', description: String(hueco) });
      await pdp.capturarEvidencia(cp, 4, 'fin del contenido de la PDP y comienzo del footer, sin carrusel');
    });
  });
});
