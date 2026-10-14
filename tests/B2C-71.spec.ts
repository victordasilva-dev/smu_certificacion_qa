import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { PLPCategoriaPage } from './pages/PLPCategoriaPage';
import { PanelFiltros } from './pages/PanelFiltros';

/**
 * B2C-71 — Panel de filtros de la PLP/SRP/Colección.
 *
 * Están aquí los 21 TC de la planilla que se pudieron ejecutar con la data que declaran. Los
 * otros 2 quedaron `Bloqueado` antes de generar su `test()`, los dos por la misma causa: su
 * precondición pide un contexto que la categoría declarada en `Test data` no ofrece.
 *
 * - **D-007** exige un contexto "con todos los tipos de filtro disponibles" para comprobar el
 *   orden de los siete. La categoría declarada expone cuatro (Ofertas, Estilos de alimentación,
 *   Marca, Precio); de Sellos de advertencia, Tipo de envase y Formato no hay ningún valor, así
 *   que su posición no es observable.
 * - **D-020** exige un listado "con más de una página de resultados". La categoría declarada
 *   tiene 9 productos y no renderiza paginación.
 *
 * Dos cosas que la exploración dejó claras y que valen para toda la suite:
 *
 * - **El panel no es el único `role="dialog"` de la página**: conviven el dropdown de orden y un
 *   `chakra-popover__content` vacío que deja montado el header. Por eso el POM filtra por el
 *   título del panel; un locator por rol resolvería al popover vacío y los TC pasarían sin haber
 *   mirado nada.
 * - **Los literales de la UI no son los de la planilla**: la zona es "Filtros Aplicados" con A
 *   mayúscula, el estado vacío usa "…" (U+2026) donde el TC escribe tres puntos, y el botón de
 *   cierre se llama "Close". Los locators van tolerantes: un literal copiado del Excel produciría
 *   un `Rechazado` del script, no del producto.
 *
 * Y una que decide cómo se leen varios resultados: **el botón de aplicar escribe el conteo como
 * "Mostrar productos (N)"**, no "Mostrar N productos" como lo redactan los TC. Esa diferencia es
 * de forma y no se rechaza —el número es el correcto—, así que `conteoDelBoton()` acepta las dos
 * redacciones. Lo que sí se verifica es que **haya** número: que el botón no traiga ninguno es
 * otra cosa, y ahí los TC que lo exigen sí fallan.
 */

/** La PLP que el TC declara en su columna `Test data`, exigida. */
function plp(testData: Parameters<typeof token>[0]): string {
  const valor = token(testData, 'PLP_URL');
  if (!valor) throw new Error('Falta {PLP_URL} en el Excel de data: el TC lo declara');
  return new URL(valor).pathname.slice(1);
}

/** Abre la PLP declarada y su panel de filtros, que es el punto de partida de casi todos los TC. */
async function abrirPanel(
  page: Page,
  testData: Parameters<typeof token>[0],
): Promise<{ plpPage: PLPCategoriaPage; panel: PanelFiltros }> {
  const plpPage = new PLPCategoriaPage(page, plp(testData));
  await plpPage.goto();
  const panel = await plpPage.abrirPanelDeFiltros();
  return { plpPage, panel };
}

/**
 * Selecciona el primer valor disponible de una sección y devuelve su nombre.
 *
 * Los valores concretos (qué marcas, qué estilos) son data del ambiente que la fila del TC no
 * declara, así que no se escriben en el spec: se toma lo que la categoría declarada ofrezca en
 * ese momento. Así el caso sigue valiendo cuando cambie el catálogo.
 */
async function seleccionarPrimerValor(panel: PanelFiltros, seccion: RegExp): Promise<string> {
  await panel.expandirSeccion(seccion);
  const valores = panel.valoresDe(seccion);
  await expect(valores.first(), `la sección ${seccion} ofrece valores`).toBeVisible();
  const nombre = (await valores.first().innerText()).trim();
  await valores.first().click();
  await panel.esperarRecalculo();
  return nombre;
}

test.describe('B2C-71 — Panel de filtros de la PLP', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C71-D-001 · Estructura del panel de filtros (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-001';
      test.setTimeout(180000);

      // Paso 1 — la PLP declarada.
      const plpPage = new PLPCategoriaPage(page, plp(testData));
      await plpPage.goto();
      const totalDeclarado = await plpPage.productosDeclarados();
      await plpPage.capturarEvidencia(cp, 1, 'PLP con el boton Filtros');

      // Paso 2 — abrir el panel.
      const panel = await plpPage.abrirPanelDeFiltros();
      await plpPage.capturarEvidencia(cp, 2, 'panel de filtros abierto', { elemento: panel.root });

      // Paso 3 — header, secciones y botón, en ese orden.
      await expect(panel.titulo, 'el header trae el título').toBeVisible();
      await expect(panel.botonCerrar, 'el header trae el botón X').toBeVisible();
      await expect(panel.seccionOrdenar, 'existe la sección Ordena tus productos').toBeVisible();
      expect(
        await panel.opcionesDeOrden.count(),
        'la sección Ordenar presenta su carrusel de opciones',
      ).toBeGreaterThan(1);
      await expect(panel.seccionAplicarFiltros, 'existe la sección Aplica tus filtros').toBeVisible();
      await expect(panel.botonMostrar, 'existe el botón inferior').toBeVisible();

      const y = await panel.root.evaluate((p) => {
        const top = (sel: string) => {
          const el = p.querySelector(sel);
          return el ? Math.round(el.getBoundingClientRect().top) : null;
        };
        const porTexto = (re: RegExp) => {
          const el = [...p.querySelectorAll('p, h2, header')].find((e) =>
            re.test((e.textContent ?? '').trim()),
          );
          return el ? Math.round(el.getBoundingClientRect().top) : null;
        };
        return {
          header: top('header'),
          ordenar: porTexto(/ordena tus productos/i),
          aplicar: porTexto(/aplica tus filtros/i),
          boton: top('footer'),
        };
      });
      expect(y.header, 'el header va primero').toBeLessThan(y.ordenar!);
      expect(y.ordenar, 'Ordenar va antes de Aplica tus filtros').toBeLessThan(y.aplicar!);
      expect(y.aplicar, 'el botón inferior va al final').toBeLessThan(y.boton!);

      // Los tipos de filtro son desplegables, salvo Ofertas, que la HU excluye expresamente.
      const secciones = await panel.estadoDeLasSecciones();
      expect(secciones.length, 'hay tipos de filtro desplegables').toBeGreaterThan(0);
      expect(
        await panel.switchOfertas.count(),
        'Ofertas se presenta como switch y no como desplegable',
      ).toBeGreaterThan(0);
      await plpPage.capturarEvidencia(cp, 3, 'secciones del panel', { elemento: panel.root });

      // El botón fijo con el conteo. Aquí es donde el panel recién abierto se separa de CA1: dice
      // "Mostrar productos" a secas, sin el número de la categoría.
      const conteo = await panel.conteoDelBoton();
      await plpPage.capturarEvidencia(cp, 3, 'boton inferior', { elemento: panel.footer });
      expect(
        conteo,
        `el botón muestra el conteo de productos; dice "${await panel.textoDelBoton()}"`,
      ).not.toBeNull();
      expect(conteo, 'el conteo del botón coincide con el de la categoría').toBe(totalDeclarado);

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-002 · El boton Mostrar productos permanece fijo durante la navegacion del panel (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-002';
      test.setTimeout(180000);

      // Paso 1 — panel abierto.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const inicial = await panel.posicionDelBoton();
      await plpPage.capturarEvidencia(cp, 1, 'panel abierto con el boton visible', {
        elemento: panel.root,
      });

      // Paso 2 — expandir secciones hasta que el contenido desborde.
      await panel.expandirTodas();
      const scroll = await panel.scrollInterno();
      const trasExpandir = await panel.posicionDelBoton();
      expect(trasExpandir.visible, 'el botón sigue visible tras expandir las secciones').toBe(true);
      await plpPage.capturarEvidencia(cp, 2, 'secciones expandidas', { elemento: panel.root });

      // Paso 3 — scroll dentro del panel.
      expect(
        scroll.desplazable,
        'con las secciones expandidas el panel tiene contenido que desplazar',
      ).toBe(true);
      await panel.desplazarCuerpo(scroll.alto);
      await page.waitForTimeout(600);
      await plpPage.capturarEvidencia(cp, 3, 'panel desplazado hasta el final', {
        elemento: panel.root,
      });

      // Paso 4 — el botón no se movió ni se ocultó.
      const trasScroll = await panel.posicionDelBoton();
      expect(trasScroll.visible, 'el botón sigue visible tras el scroll').toBe(true);
      expect(
        Math.abs(trasScroll.arriba - inicial.arriba),
        'el botón no se desplaza al navegar por el panel',
      ).toBeLessThanOrEqual(2);

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-003 · Expansion y colapso de una seccion de filtro cambia el icono de flecha (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-003';
      test.setTimeout(180000);

      // Paso 1 — panel abierto, con una sección colapsada.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const inicial = await panel.estadoDeLasSecciones();
      const objetivo = inicial.find((s) => !s.expandida)!;
      expect(objetivo, 'el panel trae alguna sección colapsada').toBeTruthy();
      expect(objetivo.flecha, 'la sección colapsada apunta hacia abajo').toBe('abajo');
      await plpPage.capturarEvidencia(cp, 1, 'seccion colapsada', { elemento: panel.root });

      // Paso 2 y 3 — expandir y verificar.
      await panel.alternarSeccion(objetivo.nombre);
      const expandida = (await panel.estadoDeLasSecciones()).find(
        (s) => s.nombre === objetivo.nombre,
      )!;
      expect(expandida.expandida, `${objetivo.nombre} queda expandida`).toBe(true);
      expect(
        await panel.valoresDe(objetivo.nombre).count(),
        'la sección expandida muestra sus opciones',
      ).toBeGreaterThan(0);
      expect(expandida.flecha, 'la flecha pasa a apuntar hacia arriba').toBe('arriba');
      await plpPage.capturarEvidencia(cp, 3, 'seccion expandida con flecha hacia arriba', {
        elemento: panel.root,
      });

      // Paso 4 y 5 — colapsar y verificar.
      await panel.alternarSeccion(objetivo.nombre);
      const colapsada = (await panel.estadoDeLasSecciones()).find(
        (s) => s.nombre === objetivo.nombre,
      )!;
      expect(colapsada.expandida, `${objetivo.nombre} vuelve a quedar colapsada`).toBe(false);
      expect(colapsada.flecha, 'la flecha vuelve a apuntar hacia abajo').toBe('abajo');
      await plpPage.capturarEvidencia(cp, 5, 'seccion colapsada con flecha hacia abajo', {
        elemento: panel.root,
      });

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-004 · Multiples secciones de filtro pueden estar abiertas simultaneamente (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-004';
      test.setTimeout(180000);

      // Paso 1 — panel abierto, con varias secciones colapsadas.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const colapsadas = (await panel.estadoDeLasSecciones()).filter((s) => !s.expandida);
      expect(colapsadas.length, 'el panel trae al menos dos secciones colapsadas').toBeGreaterThan(1);
      await plpPage.capturarEvidencia(cp, 1, 'secciones colapsadas', { elemento: panel.root });

      // Paso 2 — expandir la primera.
      const [primera, segunda] = colapsadas;
      await panel.alternarSeccion(primera.nombre);
      await plpPage.capturarEvidencia(cp, 2, `${primera.nombre} expandida`, {
        elemento: panel.root,
      });

      // Paso 3 — expandir la segunda sin tocar la primera.
      await panel.alternarSeccion(segunda.nombre);
      await plpPage.capturarEvidencia(cp, 3, `${primera.nombre} y ${segunda.nombre} expandidas`, {
        elemento: panel.root,
      });

      // Paso 4 — ambas siguen abiertas.
      const estado = await panel.estadoDeLasSecciones();
      expect(
        estado.find((s) => s.nombre === primera.nombre)?.expandida,
        `${primera.nombre} sigue expandida tras abrir ${segunda.nombre}`,
      ).toBe(true);
      expect(
        estado.find((s) => s.nombre === segunda.nombre)?.expandida,
        `${segunda.nombre} queda expandida`,
      ).toBe(true);

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-005 · Acceso al panel de filtros en Desktop: panel lateral con scroll interno (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-005';
      test.setTimeout(180000);

      // Paso 1 — la PLP declarada.
      const plpPage = new PLPCategoriaPage(page, plp(testData));
      await plpPage.goto();
      await plpPage.capturarEvidencia(cp, 1, 'PLP en Desktop');

      // Paso 2 — clic en Filtros.
      const panel = await plpPage.abrirPanelDeFiltros();
      await plpPage.capturarEvidencia(cp, 2, 'panel lateral abierto');

      // Paso 3 — es un panel lateral, no un drawer inferior, y su scroll es propio.
      const g = await panel.geometria();
      expect(g.ocupaElAncho, `el panel no ocupa todo el ancho (${g.ancho} de ${g.vw})`).toBe(false);
      expect(g.ocupaElAlto, `el panel se extiende a lo alto (${g.alto} de ${g.vh})`).toBe(true);

      await panel.expandirTodas();
      const scroll = await panel.scrollInterno();
      expect(scroll.desplazable, 'el panel tiene scroll propio').toBe(true);

      const paginaAntes = await page.evaluate(() => Math.round(window.scrollY));
      await panel.desplazarCuerpo(scroll.alto);
      await page.waitForTimeout(600);
      const paginaDespues = await page.evaluate(() => Math.round(window.scrollY));
      expect(
        paginaDespues,
        'desplazar el panel no mueve la página de atrás: el scroll es independiente',
      ).toBe(paginaAntes);
      await plpPage.capturarEvidencia(cp, 3, 'panel desplazado, pagina quieta');

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-006 · Solo se muestran tipos de filtro con al menos un valor con productos disponibles (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-006';
      test.setTimeout(180000);

      // Paso 1 y 2 — el contexto declarado, con el panel abierto. Es un contexto válido para este
      // caso justamente porque no tiene valores de todos los tipos que declara la HU.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const tipos = await panel.tiposDeFiltro();
      await plpPage.capturarEvidencia(cp, 2, 'tipos de filtro del contexto', {
        elemento: panel.root,
      });

      // Paso 3 — los tipos sin valores disponibles no aparecen.
      const declaradosPorLaHU = [
        /oferta/i,
        /estilos de alimentaci/i,
        /sellos de advertencia/i,
        /^marca/i,
        /^precio/i,
        /tipo de envase/i,
        /^formato/i,
      ];
      const ausentes = declaradosPorLaHU.filter((re) => !tipos.some((t) => re.test(t)));
      expect(
        ausentes.length,
        `este contexto debe tener algún tipo sin valores; muestra ${tipos.join(', ')}`,
      ).toBeGreaterThan(0);

      // Y los que sí aparecen tienen al menos un valor cada uno.
      for (const seccion of await panel.estadoDeLasSecciones()) {
        if (!seccion.expandida) await panel.alternarSeccion(seccion.nombre);
        expect(
          await panel.valoresDe(seccion.nombre).count(),
          `el tipo "${seccion.nombre}" se muestra porque tiene valores disponibles`,
        ).toBeGreaterThan(0);
      }
      await plpPage.capturarEvidencia(cp, 3, 'cada tipo visible con sus valores', {
        elemento: panel.root,
      });

      await plpPage.capturarEvidencia(cp);
    });

    // Re-corrida 2026-10-09: la categoría declarada ya expone los siete tipos de filtro.
    test('TC-B2C71-D-007 · Orden de los tipos de filtro en el panel (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C71-D-007';
      test.setTimeout(180000);

      // Paso 1 — el panel en {PLP_URL}, que ahora tiene los siete tipos (precondición, comprobada:
      // cada desplegable tiene al menos un valor).
      const { plpPage, panel } = await abrirPanel(page, testData);
      const tipos = await panel.tiposDeFiltro();
      await plpPage.capturarEvidencia(cp, 1, 'panel de filtros con todos los tipos', { elemento: panel.root });
      const valores: string[] = [];
      for (const seccion of await panel.estadoDeLasSecciones()) {
        if (!seccion.expandida) await panel.alternarSeccion(seccion.nombre);
        const n = await panel.valoresDe(seccion.nombre).count();
        valores.push(`${seccion.nombre}: ${n}`);
        expect(n, `precondición: "${seccion.nombre}" tiene valores disponibles`).toBeGreaterThan(0);
      }
      test.info().annotations.push({ type: 'tipos', description: `${tipos.join(' > ')} · valores: ${valores.join(', ')}` });

      // Paso 2 — el orden de aparición de las secciones.
      const orden = [/^ofertas?/i, /^estilos de alimentaci[óo]n/i, /^sellos de advertencia/i, /^marca/i, /^precio/i, /^tipo de envase/i, /^formato/i];
      expect(tipos, 'los siete tipos de filtro').toHaveLength(orden.length);
      orden.forEach((re, i) => expect(tipos[i], `posición ${i + 1}`).toMatch(re));
      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-008 · Aplicacion progresiva al seleccionar un filtro sin presionar Mostrar productos (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-008';
      test.setTimeout(180000);

      // Paso 1 — panel abierto.
      const { plpPage, panel } = await abrirPanel(page, testData);
      await panel.expandirSeccion(/^marca/i);
      const valores = panel.valoresDe(/^marca/i);
      await expect(valores.first()).toBeVisible();
      const antes = await panel.conteoDelBoton();
      await plpPage.capturarEvidencia(cp, 1, 'panel abierto con Marca desplegada', {
        elemento: panel.root,
      });

      // Paso 2 y 3 — seleccionar un valor y observar el botón y el fondo, sin aplicar.
      const conAnimacion = await panel.observarCargaDelBoton(async () => {
        await valores.first().click();
      });
      await plpPage.capturarEvidencia(cp, 2, 'boton durante el recalculo', {
        elemento: panel.footer,
      });
      expect(conAnimacion, 'el botón muestra la animación de carga mientras recalcula').toBe(true);

      const velo = await panel.estiloDelOverlay();
      expect(velo, 'hay un velo sobre la página de fondo').not.toBeNull();
      expect(
        velo!.opacidadDelVelo,
        `el velo oscurece la página de fondo (${velo!.fondo})`,
      ).toBeGreaterThan(0);

      await panel.esperarRecalculo();
      const despues = await panel.conteoDelBoton();
      expect(despues, 'el conteo del botón se actualiza al completar el recálculo').not.toBeNull();
      expect(despues, 'el conteo refleja la nueva selección').not.toBe(antes);
      await plpPage.capturarEvidencia(cp, 3, 'conteo actualizado tras el recalculo', {
        elemento: panel.root,
      });

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-009 · Estructura de la zona de filtros aplicados (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-009';
      test.setTimeout(180000);

      // Paso 1 — aplicar al menos un filtro.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const valor = await seleccionarPrimerValor(panel, /^marca/i);
      await plpPage.capturarEvidencia(cp, 1, `filtro "${valor}" activo`, { elemento: panel.root });

      // Paso 2 — reabrir el panel para mirarlo desde cero.
      await panel.aplicar();
      const reabierto = await plpPage.abrirPanelDeFiltros();
      await plpPage.capturarEvidencia(cp, 2, 'panel reabierto', { elemento: reabierto.root });

      // Paso 3 — la zona, los chips y el link Limpiar.
      await expect(
        reabierto.zonaFiltrosAplicados,
        'aparece la sección de filtros aplicados',
      ).toBeVisible();
      await expect(reabierto.chip(valor), `hay un chip para "${valor}"`).toBeVisible();
      expect(
        await reabierto.chips.count(),
        'hay un chip por cada filtro activo',
      ).toBe(1);
      expect(
        await reabierto.chip(valor).locator('svg').count(),
        'el chip trae su botón x',
      ).toBeGreaterThan(0);
      await expect(reabierto.limpiar, 'existe el link Limpiar').toBeVisible();

      const posiciones = await reabierto.root.evaluate((p) => {
        const titulo = [...p.querySelectorAll('p')].find((e) =>
          /filtros aplicados/i.test(e.textContent ?? ''),
        )!;
        const limpiar = [...p.querySelectorAll('button')].find(
          (e) => (e.textContent ?? '').trim().toLowerCase() === 'limpiar',
        )!;
        return {
          tituloX: Math.round(titulo.getBoundingClientRect().left),
          limpiarX: Math.round(limpiar.getBoundingClientRect().left),
          zonaY: Math.round(titulo.getBoundingClientRect().top),
          panelY: Math.round(p.getBoundingClientRect().top),
        };
      });
      expect(posiciones.limpiarX, 'Limpiar va a la derecha del título').toBeGreaterThan(
        posiciones.tituloX,
      );
      await plpPage.capturarEvidencia(cp, 3, 'zona de filtros aplicados', {
        elemento: reabierto.root,
      });

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-010 · Eliminacion individual de un filtro desde el chip (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-010';
      test.setTimeout(180000);

      // Paso 1 — un filtro activo con su chip visible.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const valor = await seleccionarPrimerValor(panel, /^marca/i);
      await expect(panel.chip(valor), `el chip de "${valor}" está visible`).toBeVisible();
      const conteoConFiltro = await panel.conteoDelBoton();
      await plpPage.capturarEvidencia(cp, 1, `chip de "${valor}" visible`, {
        elemento: panel.root,
      });

      // Paso 2 — clic en la x del chip.
      await panel.chip(valor).click();
      await panel.esperarRecalculo();
      await plpPage.capturarEvidencia(cp, 2, 'tras eliminar el chip', { elemento: panel.root });

      // Paso 3 — el chip desaparece, el conteo cambia y el valor queda deseleccionado.
      await expect(panel.chip(valor), 'el chip desaparece de Filtros aplicados').toHaveCount(0);
      const conteoSinFiltro = await panel.conteoDelBoton();
      expect(conteoSinFiltro, 'el conteo del botón se actualiza').not.toBe(conteoConFiltro);

      await panel.expandirSeccion(/^marca/i);
      const seleccionados = await panel
        .valoresDe(/^marca/i)
        .filter({ hasText: valor })
        .first()
        .getAttribute('aria-checked');
      expect(
        seleccionados,
        `"${valor}" queda deseleccionado dentro de su sección`,
      ).not.toBe('true');
      await plpPage.capturarEvidencia(cp, 3, 'valor deseleccionado en su dropdown', {
        elemento: panel.root,
      });

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-011 · Badge numerico de seleccionados por seccion de filtro (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-011';
      test.setTimeout(180000);

      // Paso 1 — seleccionar 2 o más valores dentro de una sección.
      const { plpPage, panel } = await abrirPanel(page, testData);
      await panel.expandirSeccion(/^marca/i);
      const valores = panel.valoresDe(/^marca/i);
      expect(
        await valores.count(),
        'la sección ofrece al menos dos valores para seleccionar',
      ).toBeGreaterThan(1);
      await valores.nth(0).click();
      await panel.esperarRecalculo();
      await valores.nth(1).click();
      await panel.esperarRecalculo();
      await plpPage.capturarEvidencia(cp, 1, 'dos valores seleccionados', { elemento: panel.root });

      // Paso 2 — colapsar la sección.
      await panel.alternarSeccion(/^marca/i);
      await plpPage.capturarEvidencia(cp, 2, 'seccion colapsada', { elemento: panel.root });

      // Paso 3 — el badge con la cantidad de opciones activas.
      const marca = (await panel.estadoDeLasSecciones()).find((s) => /^marca/i.test(s.nombre))!;
      expect(marca.expandida, 'la sección quedó colapsada').toBe(false);
      expect(marca.badge, 'el dropdown colapsado muestra el badge numérico').toBe(2);
      await plpPage.capturarEvidencia(cp, 3, 'badge numerico junto al nombre', {
        elemento: panel.seccion(/^marca/i),
      });

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-012 · El boton Mostrar productos refleja el conteo correcto segun la seleccion (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-012';
      test.setTimeout(300000);

      // Paso 1 — panel abierto.
      const { plpPage, panel } = await abrirPanel(page, testData);
      await panel.expandirSeccion(/^marca/i);
      const valores = panel.valoresDe(/^marca/i);
      await plpPage.capturarEvidencia(cp, 1, 'panel abierto', { elemento: panel.root });

      // Paso 2 y 3 — seleccionar un filtro y verificar el número tras el recálculo.
      const animacion = await panel.observarCargaDelBoton(async () => {
        await valores.nth(0).click();
      });
      await panel.esperarRecalculo();
      const unFiltro = await panel.conteoDelBoton();
      expect(animacion, 'el botón anima mientras actualiza el número').toBe(true);
      expect(unFiltro, 'el botón muestra un número tras seleccionar').not.toBeNull();
      await plpPage.capturarEvidencia(cp, 3, `boton con ${unFiltro} productos`, {
        elemento: panel.footer,
      });

      // El número debe ser el real: se contrasta aplicando y contando la grilla.
      await panel.aplicar();
      expect(
        await plpPage.productosDeclarados(),
        'el número del botón era el de los productos que cumplen el filtro',
      ).toBe(unFiltro);

      // Paso 4 — un filtro adicional y la misma verificación.
      const reabierto = await plpPage.abrirPanelDeFiltros();
      await reabierto.expandirSeccion(/^marca/i);
      const masValores = reabierto.valoresDe(/^marca/i);
      expect(await masValores.count(), 'quedan más valores por sumar').toBeGreaterThan(1);
      await masValores.nth(1).click();
      await reabierto.esperarRecalculo();
      const dosFiltros = await reabierto.conteoDelBoton();
      expect(dosFiltros, 'el botón vuelve a mostrar un número').not.toBeNull();
      expect(dosFiltros, 'el número cambia al sumar otro valor del mismo tipo').not.toBe(unFiltro);
      await plpPage.capturarEvidencia(cp, 4, `boton con ${dosFiltros} productos`, {
        elemento: reabierto.footer,
      });

      await reabierto.aplicar();
      expect(
        await plpPage.productosDeclarados(),
        'el número del botón seguía siendo el real',
      ).toBe(dosFiltros);

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-013 · Aplicar filtros y cerrar el panel (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-013';
      test.setTimeout(180000);

      // Paso 1 — seleccionar uno o más filtros.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const valor = await seleccionarPrimerValor(panel, /^marca/i);
      const conteoDelBoton = await panel.conteoDelBoton();
      await plpPage.capturarEvidencia(cp, 1, `filtro "${valor}" seleccionado`, {
        elemento: panel.root,
      });

      // Paso 2 — presionar Mostrar productos.
      await panel.aplicar();
      await page.waitForTimeout(1500);
      await plpPage.capturarEvidencia(cp, 2, 'listado filtrado tras aplicar');

      // Paso 3 — panel cerrado, listado filtrado y conteo del encabezado igual al del botón.
      expect(await panel.estaAbierto(), 'el panel se cierra al aplicar').toBe(false);
      const tarjetas = await plpPage.tarjetas.count();
      expect(tarjetas, 'el listado muestra los productos que cumplen el filtro').toBeGreaterThan(0);
      expect(
        await plpPage.productosDeclarados(),
        'el conteo del encabezado coincide con el que mostraba el botón',
      ).toBe(conteoDelBoton);
      await plpPage.capturarEvidencia(cp, 3, 'encabezado con el conteo filtrado');

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-014 · Limpieza total de filtros desde el link Limpiar (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-014';
      test.setTimeout(180000);

      // Paso 1 — aplicar filtros y un criterio de ordenamiento.
      const plpPage = new PLPCategoriaPage(page, plp(testData));
      await plpPage.goto();
      const totalSinFiltros = await plpPage.productosDeclarados();
      await plpPage.ordenarPor(/precio m[áa]s bajo/i);
      const ordenAplicado = await plpPage.botonOrdenar.getAttribute('aria-label');

      const panel = await plpPage.abrirPanelDeFiltros();
      const valor = await seleccionarPrimerValor(panel, /^marca/i);
      await expect(panel.zonaFiltrosAplicados, 'hay filtros aplicados').toBeVisible();
      await plpPage.capturarEvidencia(cp, 1, `filtro "${valor}" y orden aplicados`, {
        elemento: panel.root,
      });

      // Paso 2 — clic en Limpiar.
      await panel.limpiar.click();
      await panel.esperarRecalculo();
      await plpPage.capturarEvidencia(cp, 2, 'tras pulsar Limpiar', { elemento: panel.root });

      // Paso 3 — zona vacía, botón con el total y orden intacto.
      await expect(
        panel.zonaFiltrosAplicados,
        'la zona de filtros aplicados desaparece',
      ).toHaveCount(0);
      await expect(panel.chips, 'no queda ningún chip').toHaveCount(0);
      expect(
        await plpPage.botonOrdenar.getAttribute('aria-label'),
        'el criterio de ordenamiento se mantiene',
      ).toBe(ordenAplicado);
      const conteo = await panel.conteoDelBoton();
      await plpPage.capturarEvidencia(cp, 3, 'boton tras limpiar', { elemento: panel.footer });
      expect(
        conteo,
        `el botón muestra el total sin filtros; dice "${await panel.textoDelBoton()}"`,
      ).toBe(totalSinFiltros);

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-015 · Combinacion de multiples filtros: logica de interseccion AND/OR (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-015';
      test.setTimeout(300000);

      // Paso 1 — un valor de dos tipos de filtro distintos.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const secciones = await panel.estadoDeLasSecciones();
      const conValores = secciones.filter((s) => !/^precio/i.test(s.nombre));
      expect(
        conValores.length,
        'el contexto ofrece al menos dos tipos de filtro combinables',
      ).toBeGreaterThan(1);

      const [tipoA, tipoB] = conValores;
      await panel.expandirSeccion(tipoA.nombre);
      const valoresA = panel.valoresDe(tipoA.nombre);
      const primeroA = (await valoresA.first().innerText()).trim();
      await valoresA.first().click();
      await panel.esperarRecalculo();
      const soloA = await panel.conteoDelBoton();

      await panel.expandirSeccion(tipoB.nombre);
      const valoresB = panel.valoresDe(tipoB.nombre);
      await expect(valoresB.first(), `${tipoB.nombre} conserva valores disponibles`).toBeVisible();
      const primeroB = (await valoresB.first().innerText()).trim();
      await valoresB.first().click();
      await panel.esperarRecalculo();
      const ambos = await panel.conteoDelBoton();
      await plpPage.capturarEvidencia(cp, 1, `"${primeroA}" + "${primeroB}" seleccionados`, {
        elemento: panel.root,
      });

      // Paso 2 y 3 — AND entre tipos: la intersección nunca supera a cada tipo por separado.
      await panel.aplicar();
      await page.waitForTimeout(1500);
      const tras = await plpPage.productosDeclarados();
      expect(tras, 'el listado refleja la combinación').toBe(ambos);
      expect(
        ambos!,
        `la combinación (${ambos}) no supera al primer tipo por separado (${soloA}): es AND`,
      ).toBeLessThanOrEqual(soloA!);
      await plpPage.capturarEvidencia(cp, 3, 'listado con ambos criterios');

      // Paso 4 — OR dentro del mismo tipo: sumar un segundo valor no reduce el resultado.
      const reabierto = await plpPage.abrirPanelDeFiltros();
      await reabierto.expandirSeccion(tipoA.nombre);
      const masA = reabierto.valoresDe(tipoA.nombre);
      test.skip(
        (await masA.count()) < 2,
        `${tipoA.nombre} no ofrece un segundo valor con este contexto`,
      );
      await masA.nth(1).click();
      await reabierto.esperarRecalculo();
      const conDosDeA = await reabierto.conteoDelBoton();
      await plpPage.capturarEvidencia(cp, 4, `dos valores de ${tipoA.nombre}`, {
        elemento: reabierto.root,
      });
      expect(
        conDosDeA!,
        `sumar un valor del mismo tipo no quita resultados (${ambos} → ${conDosDeA}): es OR`,
      ).toBeGreaterThanOrEqual(ambos!);

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-016 · Comportamiento del boton X del header: cierra (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-016';
      test.setTimeout(180000);

      // Paso 1 — aplicar uno o más filtros.
      const plpPage = new PLPCategoriaPage(page, plp(testData));
      await plpPage.goto();
      const totalSinFiltros = await plpPage.productosDeclarados();
      const panel = await plpPage.abrirPanelDeFiltros();
      const valor = await seleccionarPrimerValor(panel, /^marca/i);
      await panel.aplicar();
      await page.waitForTimeout(1500);
      const conFiltro = await plpPage.productosDeclarados();
      await plpPage.capturarEvidencia(cp, 1, `listado filtrado por "${valor}"`);

      // Paso 2 — reabrir y pulsar la X del header.
      const reabierto = await plpPage.abrirPanelDeFiltros();
      await expect(reabierto.zonaFiltrosAplicados, 'el filtro sigue activo').toBeVisible();
      await plpPage.capturarEvidencia(cp, 2, 'panel reabierto con el filtro activo', {
        elemento: reabierto.root,
      });
      await reabierto.cerrarConLaX();
      await page.waitForTimeout(2000);
      await plpPage.capturarEvidencia(cp, 3, 'listado tras pulsar la X');

      // Paso 3 — la X cierra el panel y CONSERVA los filtros.
      //
      // El criterio se invirtió: hasta el 2026-09-14 el caso pedía que la X limpiara como
      // "Limpiar", el front nunca lo hizo y por eso quedó Rechazado (bug B2C-778, ya descartado).
      // La fila del Excel ahora describe lo contrario —se mantienen los filtros, el panel se
      // cierra y el listado sigue filtrado—, que es lo que el front venía haciendo: cambió el
      // criterio, no el producto.
      expect(await reabierto.estaAbierto(), 'el panel se cierra').toBe(false);

      // "Los filtros se mantienen" se comprueba por partida doble: en la URL, que es donde vive
      // el estado del filtrado, y en el listado, que debe seguir mostrando el conteo filtrado y
      // no el total de la categoría.
      expect(page.url(), 'la URL conserva el filtro aplicado').toMatch(/refine=/);
      const trasLaX = await plpPage.productosDeclarados();
      expect(
        trasLaX,
        `el listado sigue filtrado en ${conFiltro} productos tras pulsar la X; quedó en ${trasLaX}`,
      ).toBe(conFiltro);

      // El listado declara su total en un contador que puede no estar; sin esos dos números no
      // hay forma de afirmar que el filtro acotó nada, así que se comprueba antes de compararlos.
      expect(totalSinFiltros, 'el listado sin filtros declara su total').not.toBeNull();
      expect(conFiltro, 'el listado filtrado declara su total').not.toBeNull();
      expect(
        conFiltro as number,
        `el filtro "${valor}" acota de verdad el listado (sin filtros son ${totalSinFiltros})`,
      ).toBeLessThan(totalSinFiltros as number);

      // Y al reabrir el panel, el filtro sigue seleccionado.
      const trasCerrar = await plpPage.abrirPanelDeFiltros();
      await expect(
        trasCerrar.zonaFiltrosAplicados,
        'el filtro sigue aplicado al reabrir el panel',
      ).toBeVisible();
      // La etiqueta empieza por "panel" a propósito: el Word ordena las capturas de un mismo paso
      // por nombre, y así esta queda después de la del listado, en el orden en que ocurrieron.
      await plpPage.capturarEvidencia(cp, 3, 'panel reabierto: el filtro sigue aplicado', {
        elemento: trasCerrar.root,
      });
      await trasCerrar.cerrarConLaX();

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-017 · Conteo en cero: el boton se deshabilita (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-017';
      test.setTimeout(180000);

      // Paso 1 — una combinación de filtros sin productos. Se consigue con el propio rango de
      // precio de la categoría: su extremo superior no entra en el filtro, así que fijar el mínimo
      // en el máximo deja el tramo vacío sin recurrir a datos ajenos al contexto declarado.
      const { plpPage, panel } = await abrirPanel(page, testData);
      await panel.llevarPrecioATramoVacio();
      await plpPage.capturarEvidencia(cp, 1, 'combinacion sin productos', { elemento: panel.root });

      // Paso 2 — el texto y el estado del botón.
      const conteo = await panel.conteoDelBoton();
      const texto = await panel.textoDelBoton();
      await plpPage.capturarEvidencia(cp, 2, 'boton con conteo cero', { elemento: panel.footer });
      expect(conteo, `el botón muestra el conteo 0; dice "${texto}"`).toBe(0);
      expect(await panel.botonDeshabilitado(), 'el botón aparece deshabilitado').toBe(true);

      // Paso 3 — el panel no se cierra solo.
      await page.waitForTimeout(2000);
      expect(await panel.estaAbierto(), 'el panel permanece abierto').toBe(true);
      await plpPage.capturarEvidencia(cp, 3, 'panel abierto con el boton deshabilitado', {
        elemento: panel.root,
      });

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-018 · Estado de carga (overlay) al aplicar filtros (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-018';
      test.setTimeout(180000);

      // Paso 1 — seleccionar filtros y aplicar, observando el listado mientras carga.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const valor = await seleccionarPrimerValor(panel, /^marca/i);
      await plpPage.capturarEvidencia(cp, 1, `filtro "${valor}" seleccionado`, {
        elemento: panel.root,
      });

      // Paso 2 — el velo sobre el listado durante la carga. Se muestrea mientras ocurre: leerlo
      // después de la acción siempre llegaría tarde y daría por inexistente algo que dura menos
      // de un segundo.
      const huboVelo = await plpPage.observarVeloDelListado(async () => {
        await panel.botonMostrar.click();
      });
      await plpPage.capturarEvidencia(cp, 2, 'listado durante la carga');

      // Paso 3 — al terminar, el listado filtrado y sin velo.
      await page.waitForTimeout(2500);
      expect(await plpPage.tarjetas.count(), 'el listado muestra los productos filtrados')
        .toBeGreaterThan(0);
      expect(
        (await plpPage.velosSobreElListado()).length,
        'al completar la carga no queda ningún velo',
      ).toBe(0);
      await plpPage.capturarEvidencia(cp, 3, 'listado filtrado sin velo');

      expect(
        huboVelo,
        'mientras carga se muestra un overlay difuminado sobre el listado',
      ).toBe(true);

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-019 · Persistencia de filtros al cambiar el criterio de ordenamiento (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-019';
      test.setTimeout(180000);

      // Paso 1 — aplicar uno o más filtros.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const valor = await seleccionarPrimerValor(panel, /^marca/i);
      await panel.aplicar();
      await page.waitForTimeout(1500);
      const conteoFiltrado = await plpPage.productosDeclarados();
      await plpPage.capturarEvidencia(cp, 1, `listado filtrado por "${valor}"`);

      // Paso 2 — cambiar el criterio de ordenamiento.
      await plpPage.ordenarPor(/precio m[áa]s bajo/i);
      await page.waitForTimeout(1500);
      await plpPage.capturarEvidencia(cp, 2, 'orden cambiado con el filtro activo');

      // Paso 3 — los filtros siguen ahí.
      expect(page.url(), 'la URL conserva el filtro tras reordenar').toMatch(/refine=/);
      expect(page.url(), 'la URL registra el nuevo orden').toMatch(/sort=/);
      expect(
        await plpPage.productosDeclarados(),
        'el listado sigue acotado a los mismos productos',
      ).toBe(conteoFiltrado);

      const reabierto = await plpPage.abrirPanelDeFiltros();
      await expect(
        reabierto.chip(valor),
        `el chip de "${valor}" sigue en Filtros aplicados`,
      ).toBeVisible();
      await plpPage.capturarEvidencia(cp, 3, 'filtro intacto tras reordenar', {
        elemento: reabierto.root,
      });

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-021 · Estado sin resultados al aplicar una combinacion de filtros (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-021';
      test.setTimeout(180000);

      // Paso 1 — una combinación de filtros que no arroja productos.
      const { plpPage, panel } = await abrirPanel(page, testData);
      await panel.llevarPrecioATramoVacio();
      expect(await panel.conteoDelBoton(), 'la combinación no arroja productos').toBe(0);
      await plpPage.capturarEvidencia(cp, 1, 'combinacion sin resultados', {
        elemento: panel.root,
      });

      // Paso 2 — completar la acción. El botón queda deshabilitado en conteo 0 (CA15), así que se
      // usa la acción equivalente que el propio TC contempla: cerrar el panel, que es lo único que
      // le queda al usuario para ver el listado resultante.
      const deshabilitado = await panel.botonDeshabilitado();
      if (deshabilitado) {
        await panel.cerrarConLaX();
      } else {
        await panel.aplicar();
      }
      await page.waitForTimeout(2500);
      expect(await panel.estaAbierto(), 'el panel se cierra').toBe(false);
      await plpPage.capturarEvidencia(cp, 2, 'panel cerrado sobre el listado vacio');

      // Paso 3 — el estado vacío completo.
      await expect(plpPage.imagenSinResultados, 'el estado vacío trae imagen').toBeVisible();
      await expect(plpPage.tituloSinResultados, 'trae el título').toBeVisible();
      await expect(plpPage.descripcionSinResultados, 'trae la descripción').toBeVisible();
      await expect(plpPage.codigoSinResultados, 'trae el código de error PLP-013').toBeVisible();
      await expect(plpPage.botonLimpiarFiltros, 'trae el botón Limpiar filtros').toBeVisible();
      await plpPage.capturarEvidencia(cp, 3, 'estado vacio con codigo PLP-013');

      // Paso 4 — el resto de la página sigue en pie.
      await expect(plpPage.header.root, 'el header sigue visible').toBeVisible();
      await expect(plpPage.header.buscador, 'el buscador sigue visible').toBeVisible();
      // "Navegación" es la del sitio —el acceso a categorías y los enlaces del header—, que es lo
      // que el TC pide que siga siendo usable para salir del estado vacío. El breadcrumb de la
      // categoría sí desaparece con la grilla, y eso queda como observación de la corrida.
      await expect(
        plpPage.header.categoriasDesktop,
        'la navegación por categorías sigue visible',
      ).toBeVisible();
      await expect(
        plpPage.header.root.getByRole('link', { name: /ofertas|locales/i }).first(),
        'los enlaces de navegación del header siguen visibles',
      ).toBeVisible();
      await plpPage.capturarEvidencia(cp, 4, 'header, buscador y navegacion visibles');

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-D-022 · Clic en Limpiar filtros desde el estado vacio restaura el listado (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-D-022';
      test.setTimeout(180000);

      // Precondición — llegar al estado vacío.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const totalSinFiltros = await plpPage.productosDeclarados();
      await panel.llevarPrecioATramoVacio();
      if (await panel.botonDeshabilitado()) {
        await panel.cerrarConLaX();
      } else {
        await panel.aplicar();
      }
      await page.waitForTimeout(2500);
      await expect(plpPage.tituloSinResultados, 'se llegó al estado vacío').toBeVisible();
      await plpPage.capturarEvidencia(cp, 1, 'estado vacio visible');

      // Paso 1 — clic en Limpiar filtros.
      await plpPage.botonLimpiarFiltros.click();
      await page.waitForTimeout(3000);
      await plpPage.capturarEvidencia(cp, 1, 'tras pulsar Limpiar filtros');

      // Paso 2 — sin filtros activos y con el listado restaurado.
      await expect(plpPage.tituloSinResultados, 'el estado vacío desaparece').toHaveCount(0);
      expect(page.url(), 'la URL no conserva filtros').not.toMatch(/refine=/);
      expect(
        await plpPage.tarjetas.count(),
        'el listado vuelve a mostrar productos',
      ).toBeGreaterThan(0);
      expect(
        await plpPage.productosDeclarados(),
        'el listado se restaura con todos los productos de la categoría',
      ).toBe(totalSinFiltros);
      await plpPage.capturarEvidencia(cp, 2, 'listado restaurado');

      await plpPage.capturarEvidencia(cp);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C71-M-001 · Acceso al panel de filtros en Mobile: modal drawer con overlay oscuro (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-001';
      test.setTimeout(180000);

      // Paso 1 — la PLP declarada, en Mobile.
      const plpPage = new PLPCategoriaPage(page, plp(testData));
      await plpPage.goto();
      await plpPage.capturarEvidencia(cp, 1, 'PLP en Mobile');

      // Paso 2 — tap en Filtros.
      const panel = await plpPage.abrirPanelDeFiltros();
      await plpPage.capturarEvidencia(cp, 2, 'panel abierto en Mobile');

      // Paso 3 — drawer desde abajo, con overlay oscuro. Desktop y Mobile comparten la clase CSS
      // del componente, así que la forma se mide contra el viewport en vez de leerse de una clase.
      const g = await panel.geometria();
      expect(g.ocupaElAncho, `el drawer ocupa el ancho del viewport (${g.ancho} de ${g.vw})`).toBe(
        true,
      );
      expect(g.pegadoAbajo, `el drawer nace desde abajo (bottom ${g.abajo} de ${g.vh})`).toBe(true);
      expect(g.y, 'el drawer no cubre la pantalla entera: deja ver la página arriba').toBeGreaterThan(
        0,
      );

      const velo = await panel.estiloDelOverlay();
      expect(velo, 'hay overlay de fondo').not.toBeNull();
      expect(velo!.opacidadDelVelo, `el overlay es oscuro (${velo!.fondo})`).toBeGreaterThan(0);
      await plpPage.capturarEvidencia(cp, 3, 'drawer inferior con overlay oscuro');

      await plpPage.capturarEvidencia(cp);
    });

    // Corrida 2026-10-07 (planilla SP1): los pares Mobile de los TC Desktop, con el mismo cuerpo.
    test('TC-B2C71-M-002 · Verificar que el botón "Mostrar productos" permanece fijo al recorrer el panel (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-002';
      test.setTimeout(180000);

      // Paso 1 — panel abierto.
      const { plpPage, panel } = await abrirPanel(page, testData);
      // En Mobile el panel entra como drawer desde abajo: se mide cuando terminó de entrar.
      await page.waitForTimeout(1500);
      const inicial = await panel.posicionDelBoton();
      await plpPage.capturarEvidencia(cp, 1, 'panel abierto con el boton visible', {
        elemento: panel.root,
      });

      // Paso 2 — expandir secciones hasta que el contenido desborde.
      await panel.expandirTodas();
      const scroll = await panel.scrollInterno();
      const trasExpandir = await panel.posicionDelBoton();
      expect(trasExpandir.visible, 'el botón sigue visible tras expandir las secciones').toBe(true);
      await plpPage.capturarEvidencia(cp, 2, 'secciones expandidas', { elemento: panel.root });

      // Paso 3 — scroll dentro del panel.
      expect(
        scroll.desplazable,
        'con las secciones expandidas el panel tiene contenido que desplazar',
      ).toBe(true);
      await panel.desplazarCuerpo(scroll.alto);
      await page.waitForTimeout(600);
      await plpPage.capturarEvidencia(cp, 3, 'panel desplazado hasta el final', {
        elemento: panel.root,
      });

      // Paso 4 — el botón no se movió ni se ocultó.
      const trasScroll = await panel.posicionDelBoton();
      expect(trasScroll.visible, 'el botón sigue visible tras el scroll').toBe(true);
      expect(
        Math.abs(trasScroll.arriba - inicial.arriba),
        'el botón no se desplaza al navegar por el panel',
      ).toBeLessThanOrEqual(2);

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-M-003 · Verificar que tocar el encabezado de una sección la expande o colapsa y cambia la flecha (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-003';
      test.setTimeout(180000);

      // Paso 1 — panel abierto, con una sección colapsada.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const inicial = await panel.estadoDeLasSecciones();
      const objetivo = inicial.find((s) => !s.expandida)!;
      expect(objetivo, 'el panel trae alguna sección colapsada').toBeTruthy();
      expect(objetivo.flecha, 'la sección colapsada apunta hacia abajo').toBe('abajo');
      await plpPage.capturarEvidencia(cp, 1, 'seccion colapsada', { elemento: panel.root });

      // Paso 2 y 3 — expandir y verificar.
      await panel.alternarSeccion(objetivo.nombre);
      const expandida = (await panel.estadoDeLasSecciones()).find(
        (s) => s.nombre === objetivo.nombre,
      )!;
      expect(expandida.expandida, `${objetivo.nombre} queda expandida`).toBe(true);
      expect(
        await panel.valoresDe(objetivo.nombre).count(),
        'la sección expandida muestra sus opciones',
      ).toBeGreaterThan(0);
      expect(expandida.flecha, 'la flecha pasa a apuntar hacia arriba').toBe('arriba');
      await plpPage.capturarEvidencia(cp, 3, 'seccion expandida con flecha hacia arriba', {
        elemento: panel.root,
      });

      // Paso 4 y 5 — colapsar y verificar.
      await panel.alternarSeccion(objetivo.nombre);
      const colapsada = (await panel.estadoDeLasSecciones()).find(
        (s) => s.nombre === objetivo.nombre,
      )!;
      expect(colapsada.expandida, `${objetivo.nombre} vuelve a quedar colapsada`).toBe(false);
      expect(colapsada.flecha, 'la flecha vuelve a apuntar hacia abajo').toBe('abajo');
      await plpPage.capturarEvidencia(cp, 5, 'seccion colapsada con flecha hacia abajo', {
        elemento: panel.root,
      });

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-M-004 · Verificar que varias secciones de filtro pueden quedar abiertas a la vez (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-004';
      test.setTimeout(180000);

      // Paso 1 — panel abierto, con varias secciones colapsadas.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const colapsadas = (await panel.estadoDeLasSecciones()).filter((s) => !s.expandida);
      expect(colapsadas.length, 'el panel trae al menos dos secciones colapsadas').toBeGreaterThan(1);
      await plpPage.capturarEvidencia(cp, 1, 'secciones colapsadas', { elemento: panel.root });

      // Paso 2 — expandir la primera.
      const [primera, segunda] = colapsadas;
      await panel.alternarSeccion(primera.nombre);
      await plpPage.capturarEvidencia(cp, 2, `${primera.nombre} expandida`, {
        elemento: panel.root,
      });

      // Paso 3 — expandir la segunda sin tocar la primera.
      await panel.alternarSeccion(segunda.nombre);
      await plpPage.capturarEvidencia(cp, 3, `${primera.nombre} y ${segunda.nombre} expandidas`, {
        elemento: panel.root,
      });

      // Paso 4 — ambas siguen abiertas.
      const estado = await panel.estadoDeLasSecciones();
      expect(
        estado.find((s) => s.nombre === primera.nombre)?.expandida,
        `${primera.nombre} sigue expandida tras abrir ${segunda.nombre}`,
      ).toBe(true);
      expect(
        estado.find((s) => s.nombre === segunda.nombre)?.expandida,
        `${segunda.nombre} queda expandida`,
      ).toBe(true);

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-M-006 · Verificar que el panel muestra solo tipos de filtro con valores disponibles (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-006';
      test.setTimeout(180000);

      // Paso 1 y 2 — el contexto declarado, con el panel abierto. Es un contexto válido para este
      // caso justamente porque no tiene valores de todos los tipos que declara la HU.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const tipos = await panel.tiposDeFiltro();
      await plpPage.capturarEvidencia(cp, 2, 'tipos de filtro del contexto', {
        elemento: panel.root,
      });

      // Paso 3 — los tipos sin valores disponibles no aparecen.
      const declaradosPorLaHU = [
        /oferta/i,
        /estilos de alimentaci/i,
        /sellos de advertencia/i,
        /^marca/i,
        /^precio/i,
        /tipo de envase/i,
        /^formato/i,
      ];
      const ausentes = declaradosPorLaHU.filter((re) => !tipos.some((t) => re.test(t)));
      expect(
        ausentes.length,
        `este contexto debe tener algún tipo sin valores; muestra ${tipos.join(', ')}`,
      ).toBeGreaterThan(0);

      // Y los que sí aparecen tienen al menos un valor cada uno.
      for (const seccion of await panel.estadoDeLasSecciones()) {
        if (!seccion.expandida) await panel.alternarSeccion(seccion.nombre);
        expect(
          await panel.valoresDe(seccion.nombre).count(),
          `el tipo "${seccion.nombre}" se muestra porque tiene valores disponibles`,
        ).toBeGreaterThan(0);
      }
      await plpPage.capturarEvidencia(cp, 3, 'cada tipo visible con sus valores', {
        elemento: panel.root,
      });

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-M-008 · Verificar que seleccionar un filtro recalcula el conteo con animación y fondo oscurecido (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-008';
      test.setTimeout(180000);

      // Paso 1 — panel abierto.
      const { plpPage, panel } = await abrirPanel(page, testData);
      await panel.expandirSeccion(/^marca/i);
      const valores = panel.valoresDe(/^marca/i);
      await expect(valores.first()).toBeVisible();
      const antes = await panel.conteoDelBoton();
      await plpPage.capturarEvidencia(cp, 1, 'panel abierto con Marca desplegada', {
        elemento: panel.root,
      });

      // Paso 2 y 3 — seleccionar un valor y observar el botón y el fondo, sin aplicar.
      const conAnimacion = await panel.observarCargaDelBoton(async () => {
        await valores.first().click();
      });
      await plpPage.capturarEvidencia(cp, 2, 'boton durante el recalculo', {
        elemento: panel.footer,
      });
      expect(conAnimacion, 'el botón muestra la animación de carga mientras recalcula').toBe(true);

      const velo = await panel.estiloDelOverlay();
      expect(velo, 'hay un velo sobre la página de fondo').not.toBeNull();
      expect(
        velo!.opacidadDelVelo,
        `el velo oscurece la página de fondo (${velo!.fondo})`,
      ).toBeGreaterThan(0);

      await panel.esperarRecalculo();
      const despues = await panel.conteoDelBoton();
      expect(despues, 'el conteo del botón se actualiza al completar el recálculo').not.toBeNull();
      expect(despues, 'el conteo refleja la nueva selección').not.toBe(antes);
      await plpPage.capturarEvidencia(cp, 3, 'conteo actualizado tras el recalculo', {
        elemento: panel.root,
      });

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-M-009 · Verificar que con filtros activos el panel muestra "Filtros aplicados" con chips y "Limpiar" (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-009';
      test.setTimeout(180000);

      // Paso 1 — aplicar al menos un filtro.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const valor = await seleccionarPrimerValor(panel, /^marca/i);
      await plpPage.capturarEvidencia(cp, 1, `filtro "${valor}" activo`, { elemento: panel.root });

      // Paso 2 — reabrir el panel para mirarlo desde cero.
      await panel.aplicar();
      const reabierto = await plpPage.abrirPanelDeFiltros();
      await plpPage.capturarEvidencia(cp, 2, 'panel reabierto', { elemento: reabierto.root });

      // Paso 3 — la zona, los chips y el link Limpiar.
      await expect(
        reabierto.zonaFiltrosAplicados,
        'aparece la sección de filtros aplicados',
      ).toBeVisible();
      await expect(reabierto.chip(valor), `hay un chip para "${valor}"`).toBeVisible();
      expect(
        await reabierto.chips.count(),
        'hay un chip por cada filtro activo',
      ).toBe(1);
      expect(
        await reabierto.chip(valor).locator('svg').count(),
        'el chip trae su botón x',
      ).toBeGreaterThan(0);
      await expect(reabierto.limpiar, 'existe el link Limpiar').toBeVisible();

      const posiciones = await reabierto.root.evaluate((p) => {
        const titulo = [...p.querySelectorAll('p')].find((e) =>
          /filtros aplicados/i.test(e.textContent ?? ''),
        )!;
        const limpiar = [...p.querySelectorAll('button')].find(
          (e) => (e.textContent ?? '').trim().toLowerCase() === 'limpiar',
        )!;
        return {
          tituloX: Math.round(titulo.getBoundingClientRect().left),
          limpiarX: Math.round(limpiar.getBoundingClientRect().left),
          zonaY: Math.round(titulo.getBoundingClientRect().top),
          panelY: Math.round(p.getBoundingClientRect().top),
        };
      });
      expect(posiciones.limpiarX, 'Limpiar va a la derecha del título').toBeGreaterThan(
        posiciones.tituloX,
      );
      await plpPage.capturarEvidencia(cp, 3, 'zona de filtros aplicados', {
        elemento: reabierto.root,
      });

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-M-010 · Verificar que tocar la × de un chip quita ese filtro y actualiza el conteo (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-010';
      test.setTimeout(180000);

      // Paso 1 — un filtro activo con su chip visible.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const valor = await seleccionarPrimerValor(panel, /^marca/i);
      await expect(panel.chip(valor), `el chip de "${valor}" está visible`).toBeVisible();
      const conteoConFiltro = await panel.conteoDelBoton();
      await plpPage.capturarEvidencia(cp, 1, `chip de "${valor}" visible`, {
        elemento: panel.root,
      });

      // Paso 2 — clic en la x del chip.
      await panel.chip(valor).click();
      await panel.esperarRecalculo();
      await plpPage.capturarEvidencia(cp, 2, 'tras eliminar el chip', { elemento: panel.root });

      // Paso 3 — el chip desaparece, el conteo cambia y el valor queda deseleccionado.
      await expect(panel.chip(valor), 'el chip desaparece de Filtros aplicados').toHaveCount(0);
      const conteoSinFiltro = await panel.conteoDelBoton();
      expect(conteoSinFiltro, 'el conteo del botón se actualiza').not.toBe(conteoConFiltro);

      await panel.expandirSeccion(/^marca/i);
      const seleccionados = await panel
        .valoresDe(/^marca/i)
        .filter({ hasText: valor })
        .first()
        .getAttribute('aria-checked');
      expect(
        seleccionados,
        `"${valor}" queda deseleccionado dentro de su sección`,
      ).not.toBe('true');
      await plpPage.capturarEvidencia(cp, 3, 'valor deseleccionado en su dropdown', {
        elemento: panel.root,
      });

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-M-011 · Verificar que una sección con valores elegidos muestra un badge rojo con la cantidad (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-011';
      test.setTimeout(180000);

      // Paso 1 — seleccionar 2 o más valores dentro de una sección.
      const { plpPage, panel } = await abrirPanel(page, testData);
      await panel.expandirSeccion(/^marca/i);
      const valores = panel.valoresDe(/^marca/i);
      expect(
        await valores.count(),
        'la sección ofrece al menos dos valores para seleccionar',
      ).toBeGreaterThan(1);
      await valores.nth(0).click();
      await panel.esperarRecalculo();
      await valores.nth(1).click();
      await panel.esperarRecalculo();
      await plpPage.capturarEvidencia(cp, 1, 'dos valores seleccionados', { elemento: panel.root });

      // Paso 2 — colapsar la sección.
      await panel.alternarSeccion(/^marca/i);
      await plpPage.capturarEvidencia(cp, 2, 'seccion colapsada', { elemento: panel.root });

      // Paso 3 — el badge con la cantidad de opciones activas.
      const marca = (await panel.estadoDeLasSecciones()).find((s) => /^marca/i.test(s.nombre))!;
      expect(marca.expandida, 'la sección quedó colapsada').toBe(false);
      expect(marca.badge, 'el dropdown colapsado muestra el badge numérico').toBe(2);
      await plpPage.capturarEvidencia(cp, 3, 'badge numerico junto al nombre', {
        elemento: panel.seccion(/^marca/i),
      });

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-M-012 · Verificar que el botón "Mostrar productos" refleja el conteo de la selección (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-012';
      test.setTimeout(300000);

      // Paso 1 — panel abierto.
      const { plpPage, panel } = await abrirPanel(page, testData);
      await panel.expandirSeccion(/^marca/i);
      const valores = panel.valoresDe(/^marca/i);
      await plpPage.capturarEvidencia(cp, 1, 'panel abierto', { elemento: panel.root });

      // Paso 2 y 3 — seleccionar un filtro y verificar el número tras el recálculo.
      const animacion = await panel.observarCargaDelBoton(async () => {
        await valores.nth(0).click();
      });
      await panel.esperarRecalculo();
      const unFiltro = await panel.conteoDelBoton();
      expect(animacion, 'el botón anima mientras actualiza el número').toBe(true);
      expect(unFiltro, 'el botón muestra un número tras seleccionar').not.toBeNull();
      await plpPage.capturarEvidencia(cp, 3, `boton con ${unFiltro} productos`, {
        elemento: panel.footer,
      });

      // El número debe ser el real: se contrasta aplicando y contando la grilla.
      await panel.aplicar();
      expect(
        await plpPage.productosDeclarados(),
        'el número del botón era el de los productos que cumplen el filtro',
      ).toBe(unFiltro);

      // Paso 4 — un filtro adicional y la misma verificación.
      const reabierto = await plpPage.abrirPanelDeFiltros();
      await reabierto.expandirSeccion(/^marca/i);
      const masValores = reabierto.valoresDe(/^marca/i);
      expect(await masValores.count(), 'quedan más valores por sumar').toBeGreaterThan(1);
      await masValores.nth(1).click();
      await reabierto.esperarRecalculo();
      const dosFiltros = await reabierto.conteoDelBoton();
      expect(dosFiltros, 'el botón vuelve a mostrar un número').not.toBeNull();
      expect(dosFiltros, 'el número cambia al sumar otro valor del mismo tipo').not.toBe(unFiltro);
      await plpPage.capturarEvidencia(cp, 4, `boton con ${dosFiltros} productos`, {
        elemento: reabierto.footer,
      });

      await reabierto.aplicar();
      expect(
        await plpPage.productosDeclarados(),
        'el número del botón seguía siendo el real',
      ).toBe(dosFiltros);

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-M-013 · Verificar que "Mostrar productos" cierra el panel y aplica los filtros al listado (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-013';
      test.setTimeout(180000);

      // Paso 1 — seleccionar uno o más filtros.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const valor = await seleccionarPrimerValor(panel, /^marca/i);
      const conteoDelBoton = await panel.conteoDelBoton();
      await plpPage.capturarEvidencia(cp, 1, `filtro "${valor}" seleccionado`, {
        elemento: panel.root,
      });

      // Paso 2 — presionar Mostrar productos.
      await panel.aplicar();
      await page.waitForTimeout(1500);
      await plpPage.capturarEvidencia(cp, 2, 'listado filtrado tras aplicar');

      // Paso 3 — panel cerrado, listado filtrado y conteo del encabezado igual al del botón.
      expect(await panel.estaAbierto(), 'el panel se cierra al aplicar').toBe(false);
      const tarjetas = await plpPage.tarjetas.count();
      expect(tarjetas, 'el listado muestra los productos que cumplen el filtro').toBeGreaterThan(0);
      expect(
        await plpPage.productosDeclarados(),
        'el conteo del encabezado coincide con el que mostraba el botón',
      ).toBe(conteoDelBoton);
      await plpPage.capturarEvidencia(cp, 3, 'encabezado con el conteo filtrado');

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-M-015 · Verificar que filtros de distintos tipos se combinan con AND y del mismo tipo con OR (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-015';
      test.setTimeout(300000);

      // Paso 1 — un valor de dos tipos de filtro distintos.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const secciones = await panel.estadoDeLasSecciones();
      const conValores = secciones.filter((s) => !/^precio/i.test(s.nombre));
      expect(
        conValores.length,
        'el contexto ofrece al menos dos tipos de filtro combinables',
      ).toBeGreaterThan(1);

      const [tipoA, tipoB] = conValores;
      await panel.expandirSeccion(tipoA.nombre);
      const valoresA = panel.valoresDe(tipoA.nombre);
      const primeroA = (await valoresA.first().innerText()).trim();
      await valoresA.first().click();
      await panel.esperarRecalculo();
      const soloA = await panel.conteoDelBoton();

      await panel.expandirSeccion(tipoB.nombre);
      const valoresB = panel.valoresDe(tipoB.nombre);
      await expect(valoresB.first(), `${tipoB.nombre} conserva valores disponibles`).toBeVisible();
      const primeroB = (await valoresB.first().innerText()).trim();
      await valoresB.first().click();
      await panel.esperarRecalculo();
      const ambos = await panel.conteoDelBoton();
      await plpPage.capturarEvidencia(cp, 1, `"${primeroA}" + "${primeroB}" seleccionados`, {
        elemento: panel.root,
      });

      // Paso 2 y 3 — AND entre tipos: la intersección nunca supera a cada tipo por separado.
      await panel.aplicar();
      await page.waitForTimeout(1500);
      const tras = await plpPage.productosDeclarados();
      expect(tras, 'el listado refleja la combinación').toBe(ambos);
      expect(
        ambos!,
        `la combinación (${ambos}) no supera al primer tipo por separado (${soloA}): es AND`,
      ).toBeLessThanOrEqual(soloA!);
      await plpPage.capturarEvidencia(cp, 3, 'listado con ambos criterios');

      // Paso 4 — OR dentro del mismo tipo: sumar un segundo valor no reduce el resultado.
      const reabierto = await plpPage.abrirPanelDeFiltros();
      await reabierto.expandirSeccion(tipoA.nombre);
      const masA = reabierto.valoresDe(tipoA.nombre);
      test.skip(
        (await masA.count()) < 2,
        `${tipoA.nombre} no ofrece un segundo valor con este contexto`,
      );
      await masA.nth(1).click();
      await reabierto.esperarRecalculo();
      const conDosDeA = await reabierto.conteoDelBoton();
      await plpPage.capturarEvidencia(cp, 4, `dos valores de ${tipoA.nombre}`, {
        elemento: reabierto.root,
      });
      expect(
        conDosDeA!,
        `sumar un valor del mismo tipo no quita resultados (${ambos} → ${conDosDeA}): es OR`,
      ).toBeGreaterThanOrEqual(ambos!);

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-M-016 · Verificar que la X cierra el panel y mantiene los filtros seleccionados (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-016';
      test.setTimeout(180000);

      // Paso 1 — aplicar uno o más filtros.
      const plpPage = new PLPCategoriaPage(page, plp(testData));
      await plpPage.goto();
      const totalSinFiltros = await plpPage.productosDeclarados();
      const panel = await plpPage.abrirPanelDeFiltros();
      const valor = await seleccionarPrimerValor(panel, /^marca/i);
      await panel.aplicar();
      await page.waitForTimeout(1500);
      const conFiltro = await plpPage.productosDeclarados();
      await plpPage.capturarEvidencia(cp, 1, `listado filtrado por "${valor}"`);

      // Paso 2 — reabrir y pulsar la X del header.
      const reabierto = await plpPage.abrirPanelDeFiltros();
      await expect(reabierto.zonaFiltrosAplicados, 'el filtro sigue activo').toBeVisible();
      await plpPage.capturarEvidencia(cp, 2, 'panel reabierto con el filtro activo', {
        elemento: reabierto.root,
      });
      await reabierto.cerrarConLaX();
      await page.waitForTimeout(2000);
      await plpPage.capturarEvidencia(cp, 3, 'listado tras pulsar la X');

      // Paso 3 — la X cierra el panel y CONSERVA los filtros.
      //
      // El criterio se invirtió: hasta el 2026-09-14 el caso pedía que la X limpiara como
      // "Limpiar", el front nunca lo hizo y por eso quedó Rechazado (bug B2C-778, ya descartado).
      // La fila del Excel ahora describe lo contrario —se mantienen los filtros, el panel se
      // cierra y el listado sigue filtrado—, que es lo que el front venía haciendo: cambió el
      // criterio, no el producto.
      expect(await reabierto.estaAbierto(), 'el panel se cierra').toBe(false);

      // "Los filtros se mantienen" se comprueba por partida doble: en la URL, que es donde vive
      // el estado del filtrado, y en el listado, que debe seguir mostrando el conteo filtrado y
      // no el total de la categoría.
      expect(page.url(), 'la URL conserva el filtro aplicado').toMatch(/refine=/);
      const trasLaX = await plpPage.productosDeclarados();
      expect(
        trasLaX,
        `el listado sigue filtrado en ${conFiltro} productos tras pulsar la X; quedó en ${trasLaX}`,
      ).toBe(conFiltro);

      // El listado declara su total en un contador que puede no estar; sin esos dos números no
      // hay forma de afirmar que el filtro acotó nada, así que se comprueba antes de compararlos.
      expect(totalSinFiltros, 'el listado sin filtros declara su total').not.toBeNull();
      expect(conFiltro, 'el listado filtrado declara su total').not.toBeNull();
      expect(
        conFiltro as number,
        `el filtro "${valor}" acota de verdad el listado (sin filtros son ${totalSinFiltros})`,
      ).toBeLessThan(totalSinFiltros as number);

      // Y al reabrir el panel, el filtro sigue seleccionado.
      const trasCerrar = await plpPage.abrirPanelDeFiltros();
      await expect(
        trasCerrar.zonaFiltrosAplicados,
        'el filtro sigue aplicado al reabrir el panel',
      ).toBeVisible();
      // La etiqueta empieza por "panel" a propósito: el Word ordena las capturas de un mismo paso
      // por nombre, y así esta queda después de la del listado, en el orden en que ocurrieron.
      await plpPage.capturarEvidencia(cp, 3, 'panel reabierto: el filtro sigue aplicado', {
        elemento: trasCerrar.root,
      });
      await trasCerrar.cerrarConLaX();

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-M-017 · Verificar que con 0 resultados el botón muestra 0 y queda deshabilitado (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-017';
      test.setTimeout(180000);

      // Paso 1 — una combinación de filtros sin productos. Se consigue con el propio rango de
      // precio de la categoría: su extremo superior no entra en el filtro, así que fijar el mínimo
      // en el máximo deja el tramo vacío sin recurrir a datos ajenos al contexto declarado.
      const { plpPage, panel } = await abrirPanel(page, testData);
      await panel.llevarPrecioATramoVacio();
      await plpPage.capturarEvidencia(cp, 1, 'combinacion sin productos', { elemento: panel.root });

      // Paso 2 — el texto y el estado del botón.
      const conteo = await panel.conteoDelBoton();
      const texto = await panel.textoDelBoton();
      await plpPage.capturarEvidencia(cp, 2, 'boton con conteo cero', { elemento: panel.footer });
      expect(conteo, `el botón muestra el conteo 0; dice "${texto}"`).toBe(0);
      expect(await panel.botonDeshabilitado(), 'el botón aparece deshabilitado').toBe(true);

      // Paso 3 — el panel no se cierra solo.
      await page.waitForTimeout(2000);
      expect(await panel.estaAbierto(), 'el panel permanece abierto').toBe(true);
      await plpPage.capturarEvidencia(cp, 3, 'panel abierto con el boton deshabilitado', {
        elemento: panel.root,
      });

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-M-019 · Verificar que los filtros se mantienen al cambiar el ordenamiento (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-019';
      test.setTimeout(180000);

      // Paso 1 — aplicar uno o más filtros.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const valor = await seleccionarPrimerValor(panel, /^marca/i);
      await panel.aplicar();
      await page.waitForTimeout(1500);
      const conteoFiltrado = await plpPage.productosDeclarados();
      await plpPage.capturarEvidencia(cp, 1, `listado filtrado por "${valor}"`);

      // Paso 2 — cambiar el criterio de ordenamiento.
      // En Mobile no hay dropdown "Ordenar por": el orden se elige en el panel ("Ordena tus
      // productos") y se confirma con el botón, como dicen los pasos del TC.
      const panelOrden = await plpPage.abrirPanelDeFiltros();
      await panelOrden.elegirOrden(/precio m[áa]s bajo/i);
      await panelOrden.aplicar();
      await page.waitForTimeout(1500);
      await plpPage.capturarEvidencia(cp, 2, 'orden cambiado con el filtro activo');

      // Paso 3 — los filtros siguen ahí.
      expect(page.url(), 'la URL conserva el filtro tras reordenar').toMatch(/refine=/);
      expect(page.url(), 'la URL registra el nuevo orden').toMatch(/sort=/);
      expect(
        await plpPage.productosDeclarados(),
        'el listado sigue acotado a los mismos productos',
      ).toBe(conteoFiltrado);

      const reabierto = await plpPage.abrirPanelDeFiltros();
      await expect(
        reabierto.chip(valor),
        `el chip de "${valor}" sigue en Filtros aplicados`,
      ).toBeVisible();
      await plpPage.capturarEvidencia(cp, 3, 'filtro intacto tras reordenar', {
        elemento: reabierto.root,
      });

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-M-020 · Verificar que sin productos para los filtros se muestra el estado vacío con PLP-013 (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-020';
      test.setTimeout(180000);

      // Paso 1 — una combinación de filtros que no arroja productos.
      const { plpPage, panel } = await abrirPanel(page, testData);
      await panel.llevarPrecioATramoVacio();
      expect(await panel.conteoDelBoton(), 'la combinación no arroja productos').toBe(0);
      await plpPage.capturarEvidencia(cp, 1, 'combinacion sin resultados', {
        elemento: panel.root,
      });

      // Paso 2 — completar la acción. El botón queda deshabilitado en conteo 0 (CA15), así que se
      // usa la acción equivalente que el propio TC contempla: cerrar el panel, que es lo único que
      // le queda al usuario para ver el listado resultante.
      const deshabilitado = await panel.botonDeshabilitado();
      if (deshabilitado) {
        await panel.cerrarConLaX();
      } else {
        await panel.aplicar();
      }
      await page.waitForTimeout(2500);
      expect(await panel.estaAbierto(), 'el panel se cierra').toBe(false);
      await plpPage.capturarEvidencia(cp, 2, 'panel cerrado sobre el listado vacio');

      // Paso 3 — el estado vacío completo.
      await expect(plpPage.imagenSinResultados, 'el estado vacío trae imagen').toBeVisible();
      await expect(plpPage.tituloSinResultados, 'trae el título').toBeVisible();
      await expect(plpPage.descripcionSinResultados, 'trae la descripción').toBeVisible();
      await expect(plpPage.codigoSinResultados, 'trae el código de error PLP-013').toBeVisible();
      await expect(plpPage.botonLimpiarFiltros, 'trae el botón Limpiar filtros').toBeVisible();
      await plpPage.capturarEvidencia(cp, 3, 'estado vacio con codigo PLP-013');

      // Paso 4 — el resto de la página sigue en pie.
      await expect(plpPage.header.root, 'el header sigue visible').toBeVisible();
      await expect(plpPage.header.buscador, 'el buscador sigue visible').toBeVisible();
      // "Navegación" es la del sitio —el acceso a categorías y los enlaces del header—, que es lo
      // que el TC pide que siga siendo usable para salir del estado vacío. El breadcrumb de la
      // categoría sí desaparece con la grilla, y eso queda como observación de la corrida.
      await expect(
        plpPage.header.iconoSandwich,
        'la navegación por categorías sigue visible',
      ).toBeVisible();
      await expect(
        plpPage.header.root.getByRole('link', { name: /ofertas|locales/i }).first(),
        'los enlaces de navegación del header siguen visibles',
      ).toBeVisible();
      await plpPage.capturarEvidencia(cp, 4, 'header, buscador y navegacion visibles');

      await plpPage.capturarEvidencia(cp);
    });

    test('TC-B2C71-M-021 · Verificar que "Limpiar filtros" del estado vacío restaura el listado completo (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C71-M-021';
      test.setTimeout(180000);

      // Precondición — llegar al estado vacío.
      const { plpPage, panel } = await abrirPanel(page, testData);
      const totalSinFiltros = await plpPage.productosDeclarados();
      await panel.llevarPrecioATramoVacio();
      if (await panel.botonDeshabilitado()) {
        await panel.cerrarConLaX();
      } else {
        await panel.aplicar();
      }
      await page.waitForTimeout(2500);
      await expect(plpPage.tituloSinResultados, 'se llegó al estado vacío').toBeVisible();
      await plpPage.capturarEvidencia(cp, 1, 'estado vacio visible');

      // Paso 1 — clic en Limpiar filtros.
      await plpPage.botonLimpiarFiltros.click();
      await page.waitForTimeout(3000);
      await plpPage.capturarEvidencia(cp, 1, 'tras pulsar Limpiar filtros');

      // Paso 2 — sin filtros activos y con el listado restaurado.
      await expect(plpPage.tituloSinResultados, 'el estado vacío desaparece').toHaveCount(0);
      expect(page.url(), 'la URL no conserva filtros').not.toMatch(/refine=/);
      expect(
        await plpPage.tarjetas.count(),
        'el listado vuelve a mostrar productos',
      ).toBeGreaterThan(0);
      expect(
        await plpPage.productosDeclarados(),
        'el listado se restaura con todos los productos de la categoría',
      ).toBe(totalSinFiltros);
      await plpPage.capturarEvidencia(cp, 2, 'listado restaurado');

      await plpPage.capturarEvidencia(cp);
    });
  });
});
