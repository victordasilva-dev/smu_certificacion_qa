import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP } from './support/viewports';
import { ListadoProductos } from './pages/ListadoProductos';

/**
 * B2C-103 — Filtro "Sellos de advertencia" (Ok to Shop) del panel de filtros.
 *
 * De los 5 TC de la planilla **solo uno llegó a ejecutarse**: TC-B2C103-D-001, que es el que
 * comprueba que el dropdown se muestra. Los otros cuatro quedaron `Bloqueado` antes de generar su
 * `test()` porque su precondición es tener ese dropdown delante —"panel de filtros abierto",
 * "dropdown expandido con opciones disponibles", "dos o más sellos seleccionados"— y en el
 * ambiente el componente no se renderiza. Escribirles un `test()` habría producido cuatro fallos
 * que dicen lo mismo que el primero y cuatro bugs por un único componente ausente.
 *
 * Lo que la exploración estableció (ver `.qa/knowledge/plp-filtro-sellos-advertencia.json`):
 *
 * - **El panel no trae la sección en ningún contexto probado**: en `{PLP_URL}` (carnes_vacuno),
 *   en carnes_cerdo, en carnes_cerdo_chuleta y en la SRP muestra siempre las mismas cuatro
 *   —Ofertas, Estilos de alimentación, Marca y Precio—.
 * - **Y eso no es CA4 funcionando bien.** La conclusión fácil sería que en DEV no hay productos
 *   con sellos, como pasó con "Tipo de envase" y "Formato" en B2C-98; pero allí los refinements
 *   llegaban con la lista de valores vacía, y aquí llegan **con valores y con conteo**: en
 *   carnes_vacuno, cinco de los seis sellos de CA2 tienen 2 productos cada uno. Por eso el caso
 *   se cierra como defecto y no como contexto pobre, y por eso el `test()` deja constancia de los
 *   refinements que el backend sí ofrece: sin ese dato, el veredicto sería discutible.
 *
 * Re-corrida 2026-10-09: el dropdown ya se renderiza en `{PLP_URL}` (5 sellos con productos;
 * "No alto en alcohol" no tiene), así que D-002..D-005 tienen su `test()`.
 *
 * El caso se ejecuta contra `{PLP_URL}`, que es el único contexto que su columna `Test data`
 * declara. Las otras categorías se miraron para describir el defecto, no para juzgarlo.
 */

/** Los seis sellos que CA2 fija, en su orden de negocio. */
const SELLOS_DE_LA_HU = [
  'Sin sellos',
  'No alto en azúcares',
  'No alto en calorías',
  'No alto en grasas saturadas',
  'No alto en sodio',
  'No alto en alcohol',
];

const SELLOS = /sellos de advertencia/i;

/** La PLP que los TC declaran en su columna `Test data`, exigida. */
function plp(testData: Parameters<typeof token>[0]): string {
  const valor = token(testData, 'PLP_URL');
  if (!valor) throw new Error('Falta {PLP_URL} en el Excel de data: los TC lo declaran');
  const url = new URL(valor);
  return `${url.pathname.slice(1)}${url.search}`;
}

/**
 * Los refinements de sellos que el backend ofrece para el contexto que se está mirando.
 *
 * Se piden desde la propia página para reutilizar su sesión, y con el token del storage porque el
 * proxy responde 401 sin la cabecera —y un 401 sin mirar el status se lee como "esta categoría no
 * tiene sellos", que es justo la conclusión contraria a la verdadera.
 */
async function sellosEnElBackend(
  page: Page,
  slug: string,
): Promise<{ id: string; label: string; valores: number }[]> {
  return page.evaluate(async (cgid) => {
    const tok = localStorage.getItem('access_token_Unimarc');
    const url =
      '/mobify/proxy/api/search/shopper-search/v1/organizations/f_ecom_bmkg_dev/product-search' +
      `?siteId=Unimarc&refine=cgid%3D${encodeURIComponent(cgid)}&currency=CLP&locale=es-CL&limit=1`;
    const r = await fetch(url, { headers: tok ? { Authorization: `Bearer ${tok}` } : {} });
    if (!r.ok) throw new Error(`product-search respondió ${r.status}`);
    const j = await r.json();
    return (j.refinements ?? [])
      .filter((x: { attributeId: string }) => /^c_okts/i.test(x.attributeId))
      .map((x: { attributeId: string; label: string; values?: unknown[] }) => ({
        id: x.attributeId,
        label: x.label,
        valores: (x.values ?? []).length,
      }));
  }, slug);
}

/** Abre {PLP_URL}, el panel de filtros y expande "Sellos de advertencia" (precondición de D-002..D-005). */
async function abrirSellos(page: Page, testData: Parameters<typeof token>[0]) {
  const listado = new ListadoProductos(page, plp(testData));
  await listado.goto();
  const panel = await listado.abrirPanelDeFiltros();
  const estado = (await panel.estadoDeLasSecciones()).find((x) => SELLOS.test(x.nombre));
  expect(estado, 'el panel ofrece el dropdown "Sellos de advertencia"').toBeTruthy();
  if (!estado!.expandida) await panel.alternarSeccion(SELLOS);
  await expect(panel.valoresDe(SELLOS).first()).toBeVisible();
  return { listado, panel };
}

test.describe('B2C-103 — Filtro Sellos de advertencia (Ok to Shop)', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C103-D-001 · Visualización del dropdown "Sellos de advertencia" colapsado (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C103-D-001';
      const slug = plp(testData);

      const listado = new ListadoProductos(page, slug);
      await listado.goto();
      await listado.capturarEvidencia(cp, 1, 'listado de la PLP antes de abrir los filtros');

      const panel = await listado.abrirPanelDeFiltros();
      await listado.capturarEvidencia(cp, 1, 'panel de filtros abierto', {
        elemento: panel.root,
      });

      const tipos = await panel.tiposDeFiltro();
      const secciones = await panel.estadoDeLasSecciones();

      // Lo que el backend sí ofrece para este mismo contexto. No decide el veredicto: está para
      // que quien lea la evidencia pueda distinguir "no hay datos" de "el front no los pinta".
      const delBackend = await sellosEnElBackend(page, slug.split('/').pop() ?? '');
      const conProductos = delBackend.filter((r) => r.valores > 0);
      // eslint-disable-next-line no-console
      console.log(
        `[${cp}] tipos de filtro en el panel: ${tipos.join(' · ')} | ` +
          `refinements de sellos con productos en el backend: ${
            conProductos.map((r) => `${r.label}(${r.valores})`).join(', ') || 'ninguno'
          }`,
      );

      await listado.capturarEvidencia(cp, 2, 'secciones que ofrece el panel', {
        elemento: panel.seccionAplicarFiltros,
      });

      const seccion = panel.root
        .locator('button[aria-expanded]')
        .filter({ hasText: SELLOS });

      expect(
        await seccion.count(),
        `el panel debería ofrecer el dropdown "Sellos de advertencia"; ofrece ${tipos.join(
          ' · ',
        )}. El backend entrega para este contexto ${conProductos.length} de los ${
          SELLOS_DE_LA_HU.length
        } sellos de CA2 con productos disponibles`,
      ).toBeGreaterThan(0);

      // A partir de aquí el caso solo se ejecuta si el dropdown existe: nombre visible, flecha
      // hacia abajo y estado colapsado, que es lo que pide el resultado esperado.
      const estado = secciones.find((s) => SELLOS.test(s.nombre))!;
      expect(estado.expandida, 'el dropdown arranca colapsado').toBe(false);
      expect(estado.flecha, 'la flecha del dropdown colapsado apunta hacia abajo').toBe('abajo');
      await listado.capturarEvidencia(cp, 2, 'dropdown "Sellos de advertencia" colapsado', {
        elemento: seccion,
      });
      await listado.capturarEvidencia(cp);
    });

    // ------------------------------------------------- re-corrida 2026-10-09: el dropdown ya se ve

    test('TC-B2C103-D-002 · Estructura del componente Sellos de advertencia expandido, orden fijo (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C103-D-002';
      const { listado, panel } = await abrirSellos(page, testData);

      // Paso 3 — las opciones en el orden fijo de CA2, como checkbox y desmarcadas.
      const opciones = panel.valoresDe(SELLOS);
      const nombres = (await opciones.allInnerTexts()).map((t) => t.trim());
      const roles = await opciones.evaluateAll((es) => es.map((e) => e.getAttribute('role')));
      const marcadas = await opciones.evaluateAll((es) => es.map((e) => e.getAttribute('aria-checked')));
      test.info().annotations.push({ type: 'opciones', description: nombres.join(' · ') });
      await listado.capturarEvidencia(cp, 3, `opciones de Sellos de advertencia (${nombres.length})`, { elemento: panel.root });
      expect(nombres, 'las 5 opciones, en el orden fijo de CA2').toEqual(SELLOS_DE_LA_HU.slice(0, 5));
      expect(roles.every((r) => r === 'checkbox'), 'en formato checkbox').toBe(true);
      expect(marcadas.every((m) => m !== 'true'), 'todas desmarcadas en el estado inicial').toBe(true);
      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C103-D-003 · Seleccion de un checkbox de sello de advertencia (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C103-D-003';
      const { listado, panel } = await abrirSellos(page, testData);

      // Paso 2 — marcar "No alto en azúcares" (el ejemplo del TC, presente en el contexto).
      const opcion = panel.valoresDe(SELLOS).filter({ hasText: /no alto en az[uú]cares/i }).first();
      await expect(opcion).toHaveAttribute('aria-checked', 'false');
      await panel.seleccionarValor(SELLOS, /no alto en az[uú]cares/i);

      // Paso 3 — queda marcado.
      await expect(opcion, 'el checkbox queda marcado').toHaveAttribute('aria-checked', 'true');
      await listado.capturarEvidencia(cp, 3, 'No alto en azúcares marcado', { elemento: panel.root });
      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C103-D-004 · Solo se muestran sellos con productos disponibles (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C103-D-004';
      const slug = plp(testData);
      const { listado, panel } = await abrirSellos(page, testData);

      // Paso 1 — el sello sin productos en el contexto, según los refinements del backend.
      const delBackend = await sellosEnElBackend(page, slug.split('/').pop() ?? '');
      test.info().annotations.push({ type: 'backend', description: delBackend.map((r) => `${r.label}(${r.valores})`).join(', ') });
      expect(
        delBackend.some((r) => /alcohol/i.test(r.label) && r.valores > 0),
        'precondición: "alcohol" no tiene productos en el contexto (no hay refinement de alcohol con valores)',
      ).toBe(false);

      // Pasos 2 y 3 — "No alto en alcohol" (sin productos) no aparece; los demás sí.
      const nombres = (await panel.valoresDe(SELLOS).allInnerTexts()).map((t) => t.trim());
      await listado.capturarEvidencia(cp, 3, `opciones: ${nombres.join(', ')}`, { elemento: panel.root });
      expect(nombres, 'el sello sin productos no se muestra').not.toContain('No alto en alcohol');
      expect(nombres.length, 'se muestran los sellos que sí tienen productos').toBeGreaterThan(0);
      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C103-D-005 · Combinacion de sellos de advertencia al aplicar el filtro (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C103-D-005';
      const { listado, panel } = await abrirSellos(page, testData);

      // Paso 1 — "No alto en azúcares" y "No alto en sodio" (los ejemplos del TC).
      await panel.seleccionarValor(SELLOS, /no alto en az[uú]cares/i);
      const conUno = await panel.conteoDelBoton();
      await panel.seleccionarValor(SELLOS, /no alto en sodio/i);
      const conDos = await panel.conteoDelBoton();
      await listado.capturarEvidencia(cp, 1, `dos sellos marcados: Mostrar ${conDos} productos`, { elemento: panel.root });

      // Pasos 2 y 3 — el panel se cierra y el encabezado cuenta lo mismo que el botón.
      await panel.aplicar();
      expect(await panel.estaAbierto(), 'el panel se cierra').toBe(false);
      await expect.poll(() => listado.conteoDeclarado(), { timeout: 20000, message: 'conteo del encabezado' }).toBe(conDos);
      test.info().annotations.push({
        type: 'conteos',
        description: `solo azúcares: ${conUno} · azúcares + sodio: ${conDos} · filtros en la URL: ${listado.filtrosEnLaUrl.join(' & ')}`,
      });
      expect(conDos ?? 0, 'el listado combinado trae productos').toBeGreaterThan(0);
      await listado.capturarEvidencia(cp, 3, `listado filtrado (${conDos} productos)`);
      await listado.capturarEvidencia(cp);
    });
  });
});
