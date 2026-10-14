import { Page } from '@playwright/test';
import { test, expect } from './support/fixtures';
import { DESKTOP_1280, MOBILE } from './support/viewports';
import { BuscadorModal, FormFactor } from './pages/BuscadorModal';
import { SRPPage } from './pages/SRPPage';

/**
 * B2C-101 — Tolerancia del buscador (Einstein Search): typos, fragmentos y búsqueda semántica.
 *
 * **El término sale del paso a paso de cada TC, no del token de `Test data`.** Decisión del
 * usuario (2026-10-01): los `{SEARCH_*}` que declaran las filas valen otra cosa ("yogurth",
 * "desayuno"…) y no calzan con el resultado esperado, que habla de "leche", "tomate" o "asado".
 * El término de cada caso es el literal que su paso 3 manda escribir, y está en `TERMINOS`.
 *
 * Están aquí 10 de los 14 TC. D-002/M-002 y D-005/M-005 quedaron `Bloqueado Data` antes de
 * generar su `test()`: en DEV no hay ningún pan de molde (ni "pan de molde" bien escrito lo trae),
 * y ningún producto se llama exactamente "Leche Entera", así que no hay exactos y parciales que
 * ordenar.
 *
 * Re-corrida 2026-10-09 con los tokens ({SEARCH_TYPO_MULTI} = "arroz integrl", {SEARCH_EXACT_001} =
 * "papas fritas marco polo"): siguen sin `test()`. DEV no tiene ningún arroz integral ("arroz",
 * "arroz integral" y "arroz integrl" traen los mismos 2 productos) y "papas fritas marco polo"
 * trae un solo producto, sin exactos y parciales que ordenar.
 *
 * Lo que la exploración fijó:
 *
 * - "lechhe" y "tomatee" devuelven lo mismo que "leche" y "tomate": la corrección tipográfica actúa.
 * - "pastel de choclo" devuelve un único producto, "Galleta mini Dos en Uno chocolate", aunque el
 *   catálogo tiene carne molida (6) y choclo (1).
 * - "asado" devuelve 72 productos y abre con "Carbonada Plato Listo", cuatro carnes molidas, una
 *   papilla y cúrcuma; los cortes de parrilla empiezan en la posición 8.
 */

/** El término que el paso 3 de cada TC manda escribir. */
const TERMINOS = {
  '001': 'lechhe',
  '003': 'tomatee',
  '004': 'leche',
  '006': 'pastel de choclo',
  '007': 'asado',
} as const;

/**
 * Lo que cuenta como "relacionado" para los TC semánticos.
 *
 * Sale de los ejemplos del resultado esperado de cada TC ("carne molida, choclo, cebolla, leche,
 * mantequilla"; "carnes para asado, carbón, parrillas, condimentos para asado") ampliado con los
 * ingredientes y cortes de la misma familia. Queda escrito aquí para que el criterio se pueda
 * discutir, en vez de vivir en la cabeza de quien leyó la captura.
 */
const PASTEL_DE_CHOCLO =
  /choclo|carne molida|cebolla|leche|mantequilla|aceituna|huevo|pollo|pasas|comino|albahaca|az[uú]car|pino/i;
const ASADO =
  /asado|parriller|parrilla|carb[oó]n\b|le[ñn]a|chimichurri|aliño|lomo|entra[ñn]a|punta de|costill|abastero|tapapecho|malaya|chuleta|chorizo|longaniza|prieta|plateada|choclillo|posta|t-bone|trutro|alitas/i;

/**
 * Recorre los pasos del TC: Home → clic en el buscador → escribir el término → Enter → SRP.
 *
 * El texto entra con `fill` y no con pulsaciones: en Mobile el input se remonta dentro del
 * `.chakra-portal` al abrir el overlay y las teclas se pierden en el nodo viejo (flujo
 * buscador-modal).
 */
async function buscarDesdeElHome(
  page: Page,
  formFactor: FormFactor,
  cp: string,
  termino: string,
): Promise<SRPPage> {
  const srp = new SRPPage(page, termino);
  await page.goto('/');
  await srp.cookies.aceptarSiAparece();
  await srp.capturarEvidencia(cp, 1, 'Home cargado');

  const buscador = new BuscadorModal(page, formFactor);
  await buscador.abrir();
  await buscador.input.fill(termino);
  await expect(buscador.input).toHaveValue(termino);
  await srp.capturarEvidencia(cp, 3, `término "${termino}" escrito en el buscador`);

  await buscador.input.press('Enter');
  await page.waitForURL(/\/search\?q=/, { timeout: 30000 });
  // La SRP con resultados termina en la barra de filtros; la de "Sin resultados" no la tiene, así
  // que se espera a cualquiera de los dos desenlaces y el veredicto lo decide la aserción.
  await expect(srp.botonFiltros.or(srp.textoSinResultados).first()).toBeVisible({ timeout: 30000 });
  await srp.capturarEvidencia(cp, 5, 'SRP resultante');
  return srp;
}

/** Sin resultados: ni la pantalla SRP-014 ni su texto a la vista. */
async function esperarConResultados(srp: SRPPage): Promise<void> {
  await expect(srp.textoSinResultados, 'se mostró la pantalla "Sin resultados"').toHaveCount(0);
  await expect(srp.imagenSinResultados).toHaveCount(0);
  await expect(srp.shelves.first()).toBeVisible();
}

function listado(nombres: string[], relacionado: RegExp): string {
  return nombres.map((n, i) => `${i + 1}. ${n}${relacionado.test(n) ? '' : ' [ajeno]'}`).join(' · ');
}

test.describe('B2C-101 — Tolerancia del buscador', () => {
  for (const [formFactor, describe, viewport, letra] of [
    ['desktop', 'Desktop 1280x900', DESKTOP_1280, 'D'],
    ['mobile', 'Mobile 390x844', MOBILE, 'M'],
  ] as const) {
    const sufijo = formFactor === 'desktop' ? '(Desktop)' : '(Mobile)';

    test.describe(describe, () => {
      test.use(viewport);

      test(`TC-B2C-101-${letra}-001 · Error tipográfico simple muestra productos del término corregido ${sufijo}`, async ({
        page,
      }) => {
        const cp = `TC-B2C-101-${letra}-001`;
        const srp = await buscarDesdeElHome(page, formFactor, cp, TERMINOS['001']);

        await esperarConResultados(srp);
        const nombres = await srp.nombresDeProductos();
        const conLeche = nombres.filter((n) => /leche/i.test(n));
        expect(conLeche.length, `nombres: ${nombres.join(' · ')}`).toBeGreaterThan(nombres.length / 2);
        await srp.capturarEvidencia(cp);
      });

      test(`TC-B2C-101-${letra}-003 · Error tipográfico leve renderiza al menos un resultado y no "Sin resultados" ${sufijo}`, async ({
        page,
      }) => {
        const cp = `TC-B2C-101-${letra}-003`;
        const srp = await buscarDesdeElHome(page, formFactor, cp, TERMINOS['003']);

        await esperarConResultados(srp);
        const nombres = await srp.nombresDeProductos();
        expect(nombres.filter((n) => /tomate/i.test(n)).length, `nombres: ${nombres.join(' · ')}`).toBeGreaterThanOrEqual(1);
        await srp.capturarEvidencia(cp);
      });

      test(`TC-B2C-101-${letra}-004 · Búsqueda por fragmento lista variantes que contienen el fragmento ${sufijo}`, async ({
        page,
      }) => {
        const cp = `TC-B2C-101-${letra}-004`;
        const termino = TERMINOS['004'];
        const srp = await buscarDesdeElHome(page, formFactor, cp, termino);

        await esperarConResultados(srp);
        const nombres = await srp.nombresDeProductos();
        const conFragmento = nombres.filter((n) => n.toLowerCase().includes(termino));
        // Múltiples variantes con el fragmento, y no solo productos de nombre idéntico al fragmento.
        expect(conFragmento.length, `nombres: ${nombres.join(' · ')}`).toBeGreaterThan(1);
        expect(conFragmento.some((n) => n.trim().toLowerCase() !== termino)).toBe(true);
        await srp.capturarEvidencia(cp);
      });

      test(`TC-B2C-101-${letra}-006 · Búsqueda semántica muestra productos relacionados al concepto ${sufijo}`, async ({
        page,
      }) => {
        const cp = `TC-B2C-101-${letra}-006`;
        const srp = await buscarDesdeElHome(page, formFactor, cp, TERMINOS['006']);

        await esperarConResultados(srp);
        const nombres = await srp.nombresDeProductos();
        const relacionados = nombres.filter((n) => PASTEL_DE_CHOCLO.test(n));
        // Contextualmente relevantes: la mayoría de la grilla pertenece al concepto buscado.
        expect(
          relacionados.length,
          `relacionados ${relacionados.length}/${nombres.length}: ${listado(nombres, PASTEL_DE_CHOCLO)}`,
        ).toBeGreaterThan(nombres.length / 2);
        await srp.capturarEvidencia(cp);
      });

      test(`TC-B2C-101-${letra}-007 · Búsqueda semántica ordena por relevancia al concepto ${sufijo}`, async ({
        page,
      }) => {
        const cp = `TC-B2C-101-${letra}-007`;
        const srp = await buscarDesdeElHome(page, formFactor, cp, TERMINOS['007']);

        await esperarConResultados(srp);
        const nombres = await srp.nombresDeProductos();
        // "Los artículos más directamente relacionados aparecen en las primeras posiciones": se
        // exige que las cinco primeras lo sean.
        const primeras = nombres.slice(0, 5);
        expect(primeras.every((n) => ASADO.test(n)), `primeras posiciones: ${listado(primeras, ASADO)}`).toBe(true);
        await srp.capturarEvidencia(cp);
      });
    });
  }
});
