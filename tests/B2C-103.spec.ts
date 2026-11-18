import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { PanelFiltros } from './pages/PanelFiltros';
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
 *
 * SP1 (2026-11-17): la planilla suma D-006..D-008 y los pares Mobile M-001..M-008. Los casos que
 * comparten esperado entre Desktop y Mobile se escriben una vez como función (`caso*`) y los llama
 * el `test()` de cada CP-ID; D-002/D-004/D-005 se movieron a función sin cambiar sus aserciones.
 * En DEV, "No alto en azúcares" sola y junto a "No alto en sodio" dan el mismo conteo (2): el
 * recálculo se comprueba contra el conteo anotado con solo azúcares, que es lo que pide el TC.
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

type Datos = Parameters<typeof token>[0];

const AZUCARES = /no alto en az[uú]cares/i;
const SODIO = /no alto en sodio/i;
const MARCA = /^marca/i;

/** Marca o desmarca un sello, con la sección desplegada antes (cada recálculo puede plegarla). */
async function alternarSello(panel: PanelFiltros, sello: RegExp): Promise<void> {
  await panel.expandirSeccion(SELLOS);
  await panel.seleccionarValor(SELLOS, sello);
}

/** Si el checkbox de un sello está marcado, leído con la sección desplegada. */
async function selloMarcado(panel: PanelFiltros, sello: RegExp): Promise<boolean> {
  await panel.expandirSeccion(SELLOS);
  const opcion = panel.valoresDe(SELLOS).filter({ hasText: sello }).first();
  return (await opcion.getAttribute('aria-checked')) === 'true';
}

/**
 * Deja marcados "No alto en azúcares" y "No alto en sodio" y devuelve los conteos del botón con
 * solo azúcares y con los dos. Es el estado de partida de D-006/D-008 y M-006/M-008.
 */
async function marcarAzucaresYSodio(
  panel: PanelFiltros,
): Promise<{ soloAzucares: number | null; conDos: number | null }> {
  await alternarSello(panel, AZUCARES);
  const soloAzucares = await panel.conteoDelBoton();
  await alternarSello(panel, SODIO);
  const conDos = await panel.conteoDelBoton();
  expect(await selloMarcado(panel, AZUCARES), 'No alto en azúcares marcado').toBe(true);
  expect(await selloMarcado(panel, SODIO), 'No alto en sodio marcado').toBe(true);
  expect(await panel.badgeDe(SELLOS), 'badge 2 en el dropdown').toBe(2);
  await expect(panel.chip(AZUCARES), 'chip de No alto en azúcares').toBeVisible();
  await expect(panel.chip(SODIO), 'chip de No alto en sodio').toBeVisible();
  return { soloAzucares, conDos };
}

/** Lo que queda tras quitar "No alto en sodio", por checkbox o por chip: es el mismo esperado. */
async function verificarSoloAzucares(panel: PanelFiltros, soloAzucares: number | null): Promise<void> {
  await expect(panel.chip(SODIO), 'el chip de No alto en sodio desaparece').toHaveCount(0);
  await expect(panel.chip(AZUCARES), 'se mantiene el chip de No alto en azúcares').toBeVisible();
  expect(await selloMarcado(panel, SODIO), 'el checkbox No alto en sodio queda desmarcado').toBe(false);
  expect(await selloMarcado(panel, AZUCARES), 'No alto en azúcares sigue marcado').toBe(true);
  expect(await panel.badgeDe(SELLOS), 'el badge pasa de 2 a 1').toBe(1);
  expect(soloAzucares, 'hubo conteo con solo azúcares').not.toBeNull();
  expect(await panel.conteoDelBoton(), 'el botón cuenta solo No alto en azúcares').toBe(soloAzucares);
}

/** M-001: el dropdown en "Aplica tus filtros", colapsado, con su nombre y la flecha hacia abajo. */
async function casoColapsado(page: Page, testData: Datos, cp: string): Promise<void> {
  const listado = new ListadoProductos(page, plp(testData));
  await listado.goto();
  await listado.capturarEvidencia(cp, 2, 'PLP cargada');
  const panel = await listado.abrirPanelDeFiltros();
  await listado.capturarEvidencia(cp, 4, 'panel de filtros abierto', { elemento: panel.root });
  // `seccionAplicarFiltros` es el título de la sección, no su contenedor: "en Aplica tus filtros"
  // se comprueba como que el dropdown se renderiza debajo de ese título.
  const seccion = panel.root.locator('button[aria-expanded]').filter({ hasText: SELLOS });
  await expect(seccion, 'el panel ofrece el dropdown Sellos de advertencia').toHaveCount(1);
  const yTitulo = (await panel.seccionAplicarFiltros.boundingBox())?.y ?? Number.NaN;
  const yDropdown = (await seccion.boundingBox())?.y ?? Number.NaN;
  expect(yDropdown, 'el dropdown va dentro de "Aplica tus filtros", bajo su título').toBeGreaterThan(yTitulo);
  const estado = (await panel.estadoDeLasSecciones()).find((s) => SELLOS.test(s.nombre));
  expect(estado, 'el panel ofrece el dropdown').toBeTruthy();
  expect(estado!.nombre, 'con su nombre').toMatch(SELLOS);
  expect(estado!.expandida, 'colapsado').toBe(false);
  expect(estado!.flecha, 'flecha hacia abajo').toBe('abajo');
  await listado.capturarEvidencia(cp, 4, 'dropdown Sellos de advertencia colapsado', { elemento: seccion });
  await listado.capturarEvidencia(cp);
}

/** M-003: marcar un sello lo deja marcado, con badge 1, su chip y el conteo del botón actualizado. */
async function casoMarcarUno(page: Page, testData: Datos, cp: string): Promise<void> {
  const { listado, panel } = await abrirSellos(page, testData);
  const antes = await panel.conteoDelBoton();
  await listado.capturarEvidencia(cp, 6, `opciones desmarcadas: Mostrar ${antes} productos`, { elemento: panel.root });
  await alternarSello(panel, AZUCARES);
  const despues = await panel.conteoDelBoton();
  await listado.capturarEvidencia(cp, 8, `No alto en azucares marcado: Mostrar ${despues} productos`, {
    elemento: panel.root,
  });
  expect(await selloMarcado(panel, AZUCARES), 'el checkbox queda marcado').toBe(true);
  expect(await panel.badgeDe(SELLOS), 'el dropdown muestra el badge 1').toBe(1);
  await expect(panel.chip(AZUCARES), 'aparece el chip en Filtros aplicados').toBeVisible();
  expect(despues, 'el botón muestra un conteo').not.toBeNull();
  expect(despues as number, 'el conteo se actualiza al filtrar').toBeLessThan(antes as number);
  expect(despues as number, 'y trae productos').toBeGreaterThan(0);
  await listado.capturarEvidencia(cp);
}

/** D-006/M-006: desmarcar un sello por su checkbox. */
async function casoDesmarcar(page: Page, testData: Datos, cp: string): Promise<void> {
  const { listado, panel } = await abrirSellos(page, testData);
  const { soloAzucares, conDos } = await marcarAzucaresYSodio(panel);
  test.info().annotations.push({ type: 'conteos', description: `solo azúcares: ${soloAzucares} · azúcares + sodio: ${conDos}` });
  await listado.capturarEvidencia(cp, 4, `dos sellos marcados: badge 2, dos chips, Mostrar ${conDos} productos`, {
    elemento: panel.root,
  });
  await alternarSello(panel, SODIO);
  await listado.capturarEvidencia(cp, 5, 'No alto en sodio desmarcado', { elemento: panel.root });
  await verificarSoloAzucares(panel, soloAzucares);
  await listado.capturarEvidencia(cp);
}

/** D-008/M-008: quitar un sello con la X de su chip en Filtros aplicados. */
async function casoQuitarChip(page: Page, testData: Datos, cp: string): Promise<void> {
  const { listado, panel } = await abrirSellos(page, testData);
  const { soloAzucares, conDos } = await marcarAzucaresYSodio(panel);
  test.info().annotations.push({ type: 'conteos', description: `solo azúcares: ${soloAzucares} · azúcares + sodio: ${conDos}` });
  await listado.capturarEvidencia(cp, 2, `dos sellos marcados con sus chips: Mostrar ${conDos} productos`, {
    elemento: panel.root,
  });
  await panel.chip(SODIO).click();
  await panel.esperarRecalculo();
  await listado.capturarEvidencia(cp, 3, 'chip No alto en sodio quitado', { elemento: panel.root });
  await verificarSoloAzucares(panel, soloAzucares);
  await listado.capturarEvidencia(cp);
}

/**
 * D-007/M-007: un sello combinado con Marca (AND).
 *
 * La marca la elige el caso ("seleccionar una marca"), pero su precondición exige una con productos
 * que tienen y que no tienen el sello: se recorre la lista del panel y se toma la primera cuyo
 * conteo sin el sello sea mayor que con él. Si ninguna lo cumple, el caso no se puede probar con
 * esta PLP y se corta como precondición, no como defecto.
 */
async function casoSelloYMarca(page: Page, testData: Datos, cp: string): Promise<void> {
  const slug = plp(testData);
  const { listado, panel } = await abrirSellos(page, testData);
  await alternarSello(panel, AZUCARES);
  const conSello = await panel.conteoDelBoton();
  await listado.capturarEvidencia(cp, 3, `No alto en azucares marcado: Mostrar ${conSello} productos`, {
    elemento: panel.root,
  });

  await panel.expandirSeccion(MARCA);
  const marcas = (await panel.valoresDe(MARCA).allInnerTexts()).map((t) => t.trim()).filter(Boolean);
  let elegida = '';
  let combinado: number | null = null;
  const probadas: string[] = [];
  for (const marca of marcas) {
    await panel.expandirSeccion(MARCA);
    await panel.seleccionarValor(MARCA, marca);
    const conAmbos = await panel.conteoDelBoton();
    await alternarSello(panel, AZUCARES);
    const soloMarca = await panel.conteoDelBoton();
    await alternarSello(panel, AZUCARES);
    probadas.push(`${marca}: ${soloMarca} sin sello / ${conAmbos} con sello`);
    if (conAmbos !== null && soloMarca !== null && conAmbos > 0 && soloMarca > conAmbos) {
      elegida = marca;
      combinado = await panel.conteoDelBoton();
      break;
    }
    await panel.expandirSeccion(MARCA);
    await panel.seleccionarValor(MARCA, marca);
  }
  test.info().annotations.push({ type: 'marcas', description: probadas.join(' · ') });
  if (!elegida) {
    throw new Error(
      `PRECONDICION_NO_DISPONIBLE: en ${slug} ninguna marca tiene productos con y sin "No alto en azúcares" (${probadas.join('; ')})`,
    );
  }
  await listado.capturarEvidencia(cp, 5, `marca ${elegida} sumada: Mostrar ${combinado} productos`, {
    elemento: panel.root,
  });
  expect(combinado as number, 'al agregar la marca el conteo no aumenta').toBeLessThanOrEqual(conSello as number);

  await panel.aplicar();
  expect(await panel.estaAbierto(), 'el panel se cierra').toBe(false);
  await expect
    .poll(() => listado.conteoDeclarado(), { timeout: 20000, message: 'conteo del encabezado' })
    .toBe(combinado);
  await listado.capturarEvidencia(cp, 6, `listado: ${elegida} y No alto en azucares`);
  const marcasDelListado = await listado.marcas();
  const nombres = await listado.secuencia();
  expect(marcasDelListado.length, 'el listado trae productos').toBeGreaterThan(0);
  expect(
    marcasDelListado.filter((m) => m.toLowerCase() !== elegida.toLowerCase()),
    `productos ajenos a la marca ${elegida}`,
  ).toEqual([]);

  // "Cumplen No alto en azúcares": el shelf no muestra el sello, así que cada producto del
  // resultado se busca en el listado filtrado solo por el sello (misma PLP, sin la marca).
  const soloSello = new URL(page.url());
  const refines = soloSello.searchParams.getAll('refine').filter((r) => /okts/i.test(r));
  soloSello.searchParams.delete('refine');
  refines.forEach((r) => soloSello.searchParams.append('refine', r));
  const otra = await page.context().newPage();
  const conElSello = new ListadoProductos(otra, `${slug.split('?')[0]}${soloSello.search}`);
  await conElSello.goto();
  const nombresConSello = await conElSello.secuencia();
  await otra.close();
  expect(
    nombres.filter((n) => !nombresConSello.includes(n)),
    'productos del resultado que no están entre los que cumplen No alto en azúcares',
  ).toEqual([]);
  await listado.capturarEvidencia(cp);
}

async function casoOrdenFijo(page: Page, testData: Datos, cp: string): Promise<void> {
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
}

async function casoSinProductos(page: Page, testData: Datos, cp: string): Promise<void> {
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
}

async function casoCombinarSellos(page: Page, testData: Datos, cp: string): Promise<void> {
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

    test('TC-B2C103-D-002 · Estructura del componente Sellos de advertencia expandido, orden fijo (Desktop)', async ({ page, testData }) => {
      await casoOrdenFijo(page, testData, 'TC-B2C103-D-002');
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
      await casoSinProductos(page, testData, 'TC-B2C103-D-004');
    });

    test('TC-B2C103-D-005 · Combinacion de sellos de advertencia al aplicar el filtro (Desktop)', async ({ page, testData }) => {
      await casoCombinarSellos(page, testData, 'TC-B2C103-D-005');
    });

    test('TC-B2C103-D-006 · Deseleccion de un sello de advertencia actualiza checkbox, badge, chip y conteo (Desktop)', async ({ page, testData }) => {
      await casoDesmarcar(page, testData, 'TC-B2C103-D-006');
    });
    test('TC-B2C103-D-007 · Aplicacion de sellos de advertencia junto con otro tipo de filtro, logica AND (Desktop)', async ({ page, testData }) => {
      await casoSelloYMarca(page, testData, 'TC-B2C103-D-007');
    });
    test('TC-B2C103-D-008 · Eliminacion de un sello de advertencia desde el chip de Filtros aplicados (Desktop)', async ({ page, testData }) => {
      await casoQuitarChip(page, testData, 'TC-B2C103-D-008');
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C103-M-001 · Sellos de advertencia se muestra como dropdown colapsado con nombre y flecha hacia abajo (Mobile)', async ({ page, testData }) => {
      await casoColapsado(page, testData, 'TC-B2C103-M-001');
    });
    test('TC-B2C103-M-002 · Al expandir Sellos de advertencia las opciones van en orden fijo, como checkbox y desmarcadas (Mobile)', async ({ page, testData }) => {
      await casoOrdenFijo(page, testData, 'TC-B2C103-M-002');
    });
    test('TC-B2C103-M-003 · Marcar un sello lo muestra marcado, agrega badge y chip y actualiza el conteo (Mobile)', async ({ page, testData }) => {
      await casoMarcarUno(page, testData, 'TC-B2C103-M-003');
    });
    test('TC-B2C103-M-004 · Un sello sin productos en la PLP no se muestra en el dropdown (Mobile)', async ({ page, testData }) => {
      await casoSinProductos(page, testData, 'TC-B2C103-M-004');
    });
    test('TC-B2C103-M-005 · Mostrar productos con varios sellos cierra el panel y el encabezado muestra el conteo del boton (Mobile)', async ({ page, testData }) => {
      await casoCombinarSellos(page, testData, 'TC-B2C103-M-005');
    });
    test('TC-B2C103-M-006 · Desmarcar un sello actualiza el checkbox, baja el badge, quita su chip y recalcula el conteo (Mobile)', async ({ page, testData }) => {
      await casoDesmarcar(page, testData, 'TC-B2C103-M-006');
    });
    test('TC-B2C103-M-007 · Un sello combinado con otro tipo de filtro aplica logica AND (Mobile)', async ({ page, testData }) => {
      await casoSelloYMarca(page, testData, 'TC-B2C103-M-007');
    });
    test('TC-B2C103-M-008 · Quitar un sello desde su chip desmarca el checkbox y actualiza badge y conteo (Mobile)', async ({ page, testData }) => {
      await casoQuitarChip(page, testData, 'TC-B2C103-M-008');
    });
  });
});
