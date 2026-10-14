import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP_1280, MOBILE } from './support/viewports';
import { BuscadorModal, FormFactor } from './pages/BuscadorModal';
import { HomePage } from './pages/HomePage';
import { SRPPage } from './pages/SRPPage';

/**
 * B2C-104 — URL de la SRP: formato /search?q=<término>, enlace directo y destino de banner.
 *
 * **Los términos salen de los tokens de `Test data`**, no del paso a paso: "leche", "pan de molde" y
 * "tomate" son ejemplos de la planilla (decisión del usuario, 2026-10-01, segunda corrida).
 * D/M-001 usan el término de `{SRP_URL}` como búsqueda de una palabra y `{SEARCH_EXACT_001}` como
 * multi-palabra; D/M-002 buscan el término de `{QUERY_URL_001}`.
 *
 * **D-003 y M-003 no configuran nada en Business Manager.** Sus pasos 1 a 3 publican un banner con
 * destino `/search?q=ofertas`; en DEV no hay ninguno con ese destino, y el usuario decidió
 * (2026-10-01) certificar los pasos 4 a 7 sobre un banner de Page Designer ya publicado con URL de
 * SRP — "Parrilla — banner principal", `/search?q=parrilla` — en vez de tocar el CMS compartido.
 */

const BANNER_SRP = 'parrilla';

type Data = Parameters<typeof token>[0];

/** Un token que la fila declara, exigido: sin él no hay caso que correr. */
function declarado(testData: Data, nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) throw new Error(`Falta {${nombre}} en el Excel de data: el TC lo declara`);
  return valor;
}

/** El término `q` de un token que es una URL de SRP (`https://…/search?q=carne` o `/search?q=carnes`). */
function terminoDeLaUrl(testData: Data, nombre: string): string {
  const q = new URL(declarado(testData, nombre), 'http://x').searchParams.get('q');
  if (!q) throw new Error(`{${nombre}} no trae el parámetro q`);
  return q;
}

/** Home → clic en el buscador → término → Enter. Devuelve la SRP servida. */
async function buscarDesdeElHome(page: Page, formFactor: FormFactor, termino: string): Promise<SRPPage> {
  const home = new HomePage(page);
  await home.goto();
  const buscador = new BuscadorModal(page, formFactor);
  await buscador.abrir();
  await buscador.input.fill(termino);
  await expect(buscador.input).toHaveValue(termino);
  await buscador.input.press('Enter');
  await page.waitForURL(/\/search\?q=/, { timeout: 30000 });
  const srp = new SRPPage(page, termino);
  await srp.waitUntilReady();
  return srp;
}

/** Lo que va después del host: `/search?q=leche`. */
function rutaDe(page: Page): string {
  const url = new URL(page.url());
  return url.pathname + url.search;
}

test.describe('B2C-104 — URL de la SRP', () => {
  for (const [formFactor, describe, viewport, letra] of [
    ['desktop', 'Desktop 1280x900', DESKTOP_1280, 'D'],
    ['mobile', 'Mobile 390x844', MOBILE, 'M'],
  ] as const) {
    const sufijo = formFactor === 'desktop' ? '(Desktop)' : '(Mobile)';

    test.describe(describe, () => {
      test.use(viewport);

      test(`TC-104-${letra}-001 · La URL de la SRP sigue el formato /search?q=[término] con el término codificado ${sufijo}`, async ({
        page,
        testData,
      }) => {
        const cp = `TC-104-${letra}-001`;
        const simple = terminoDeLaUrl(testData, 'SRP_URL');
        const multi = declarado(testData, 'SEARCH_EXACT_001');

        const una = await buscarDesdeElHome(page, formFactor, simple);
        await una.capturarEvidencia(cp, 3, `SRP de "${simple}"`);
        expect(rutaDe(page)).toBe(`/search?q=${encodeURIComponent(simple)}`);
        await expect(una.titulo).toContainText(simple);

        const varias = await buscarDesdeElHome(page, formFactor, multi);
        await varias.capturarEvidencia(cp, 6, `SRP de "${multi}"`);
        // "/search?q=pan+de+molde o /search?q=pan%20de%20molde": cualquiera de las dos codificaciones.
        const palabras = multi.split(' ').map((p) => encodeURIComponent(p));
        expect(rutaDe(page)).toMatch(new RegExp(`^/search\\?q=${palabras.join('(\\+|%20)')}$`));
        expect(new URL(page.url()).searchParams.get('q')).toBe(multi);
        await expect(varias.titulo).toContainText(multi);
        await varias.capturarEvidencia(cp);
      });

      test(`TC-104-${letra}-002 · La URL de la SRP se puede copiar y abrir directamente en otra pestaña ${sufijo}`, async ({
        page,
        context,
        testData,
      }) => {
        const cp = `TC-104-${letra}-002`;
        const termino = terminoDeLaUrl(testData, 'QUERY_URL_001');

        const srp = await buscarDesdeElHome(page, formFactor, termino);
        const url = page.url();
        expect(rutaDe(page)).toBe(declarado(testData, 'QUERY_URL_001'));
        await srp.capturarEvidencia(cp, 2, `SRP de "${termino}" desde el buscador`);

        // Pestaña nueva: se navega a la URL copiada, sin pasar por el Home ni por el buscador.
        const pestana = await context.newPage();
        await pestana.goto(url);
        const directa = new SRPPage(pestana, termino);
        await directa.waitUntilReady();
        await directa.capturarEvidencia(cp, 5, 'URL pegada en una pestaña nueva');

        expect(pestana.url()).toBe(url);
        await expect(directa.titulo).toContainText(termino);
        await expect(directa.textoSinResultados).toHaveCount(0);
        expect(await directa.shelves.count()).toBeGreaterThan(0);
        await directa.capturarEvidencia(cp);
      });

      test(`TC-104-${letra}-003 · Un banner con URL de SRP como destino redirige a los resultados correctos ${sufijo}`, async ({
        page,
      }) => {
        const cp = `TC-104-${letra}-003`;
        const home = new HomePage(page);
        await home.goto();

        const banner = home.bannerHaciaLaSRP(BANNER_SRP);
        await banner.scrollIntoViewIfNeeded();
        await expect(banner).toBeVisible();
        await home.capturarEvidencia(cp, 5, `banner con destino /search?q=${BANNER_SRP}`, { elemento: banner });

        await banner.click();
        await page.waitForURL(/\/search\?q=/, { timeout: 30000 });
        const srp = new SRPPage(page, BANNER_SRP);
        await srp.waitUntilReady();
        await srp.capturarEvidencia(cp, 7, `SRP de "${BANNER_SRP}" tras el clic`);

        expect(rutaDe(page)).toBe(`/search?q=${BANNER_SRP}`);
        await expect(srp.titulo).toContainText(BANNER_SRP);
        await expect(srp.textoSinResultados).toHaveCount(0);
        expect(await srp.shelves.count()).toBeGreaterThan(0);
        await srp.capturarEvidencia(cp);
      });
    });
  }
});
