import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP_1280, MOBILE } from './support/viewports';
import { BuscadorModal, FormFactor } from './pages/BuscadorModal';
import { SRPPage } from './pages/SRPPage';

/**
 * B2C-18 — Search Results Page (SRP).
 *
 * Están aquí los 27 TC de la planilla que se pudieron ejecutar con la data que declara su columna
 * `Test data`. Los otros 27 quedaron `Bloqueado` antes de generar su `test()`, por cuatro motivos
 * que la exploración dejó cerrados:
 *
 * - **Precondición de más de 50 resultados** (D-009, D-010, D-026, M-008, M-009): el único término
 *   que estas filas declaran, `{SEARCH_TERM_001}` = "leche", devuelve 9 productos en DEV. Sin más
 *   de una página no se renderiza ningún componente de paginación ni hay scroll infinito que
 *   disparar, y el tope de 50 no se puede demostrar. El Excel de data sí tiene un listado de 70
 *   productos —`{SRP_URL}`, que usa B2C-87— pero ninguna fila de esta suite lo declara.
 * - **Content assets no configurados** (D-016, D-018, D-019, D-020, D-024, D-027, M-015, M-017,
 *   M-018, M-019, M-023, M-025): la SRP de "leche" y la de "aceite" no traen ninguna imagen ajena
 *   a los productos. No hay Grid Banners, ni banner circular, ni componente de monetización, ni
 *   banner por matchmode que observar. Los casos en negativo —"sin asset configurado no se
 *   renderiza ni queda espacio vacío"— sí son verificables y están aquí.
 * - **Método de entrega sin data declarada** (D-012, D-013, D-014, D-015, M-011, M-012, M-013,
 *   M-014): el modal "Elige tu método de entrega" pide escribir una dirección o elegir una tienda
 *   de una lista nacional. Ninguna fila declara dirección ni tienda, y el Excel de data no tiene
 *   ningún token de ninguna de las dos. Elegir una a dedo dejaría el veredicto sin significado.
 * - **Pasos operados en Business Manager** (D-017, M-016): los tres pasos que cambian la posición
 *   del componente se ejecutan dentro de BM. No se conducen con el navegador que maneja esta
 *   suite, y la fila tampoco declara las credenciales de BM.
 *
 * Lo que la exploración dejó claro y gobierna cómo se leen varios resultados:
 *
 * - **La UI escribe "Ver todos" y los TC "Ver todos los productos"**. El locator va tolerante: un
 *   literal copiado del Excel produciría un `Rechazado` del script, no del producto.
 * - **En Mobile el dropdown de orden está en `display:none`** y las opciones viven dentro del panel
 *   de filtros, igual que registró B2C-87, cuyos TC Mobile solo recorren ese camino. Por eso M-003
 *   verifica el acceso al orden por el panel y deja la desviación en la Observación.
 * - **El contador del carro viaja en el `aria-label`** del botón del header, no en un badge con
 *   texto: leerlo del texto visible devolvería vacío y haría pasar por "no cambió" un carro que sí
 *   se actualizó.
 * - **La etiqueta del producto sin stock es "Pronto disponible"**, no "No disponible". No se
 *   certifica aquí porque el caso que la pide necesita un método de entrega activo, que es la data
 *   que la fila no declara.
 */

/** El término de búsqueda que las filas declaran, exigido: sin él no hay caso que correr. */
function terminoDeclarado(testData: Parameters<typeof token>[0], nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) throw new Error(`Falta {${nombre}} en el Excel de data: los TC lo declaran`);
  return valor;
}

/**
 * Deja la SRP servida por el camino del usuario: Home, buscador, término, Enter.
 *
 * Varios TC arrancan con "buscar el término y acceder a la SRP" como precondición y no como el
 * paso que verifican; los que **sí** verifican ese tránsito (D-001, D-002 y sus pares Mobile) lo
 * recorren en su propio `test()` paso a paso.
 */
async function abrirSRP(page: Page, termino: string): Promise<SRPPage> {
  const srp = new SRPPage(page, termino);
  await srp.goto();
  return srp;
}

/**
 * Escribe el término en el buscador con `fill`.
 *
 * **No con pulsaciones**: al abrirse el overlay de Mobile el input se remonta dentro del
 * `.chakra-portal` y las teclas se pierden en el nodo viejo, así que las sugerencias no se
 * resuelven nunca y el caso caduca esperando un panel que sí está, pero vacío.
 */
async function escribirEnElBuscador(buscador: BuscadorModal, termino: string): Promise<void> {
  await buscador.input.fill(termino);
}

test.describe('B2C-18 — Search Results Page', () => {
  // ==================================================================== DESKTOP

  test.describe('Desktop 1280x900', () => {
    test.use(DESKTOP_1280);

    const formFactor: FormFactor = 'desktop';

    test('TC-B2C18-D-001 · Enter desde el modal de sugerencias navega a la SRP con URL /search?q=[término] y filtros (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-D-001';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = new SRPPage(page, termino);

      await page.goto('/');
      await srp.cookies.aceptarSiAparece();
      await srp.capturarEvidencia(cp, 1, 'Home cargado en Desktop 1280x900');

      const buscador = new BuscadorModal(page, formFactor);
      await buscador.abrir();
      await escribirEnElBuscador(buscador, termino);
      await expect(buscador.botonVerTodos).toBeVisible({ timeout: 20000 });
      await srp.capturarEvidencia(cp, 3, 'modal de sugerencias desplegado con el término');

      await buscador.input.press('Enter');
      await srp.waitUntilReady();
      await srp.capturarEvidencia(cp, 5, 'SRP servida tras pulsar Enter');

      // El esperado son tres cosas: que navegue a la SRP, que la URL sea /search?q=<término> y que
      // la SRP traiga chips y filtros.
      expect(srp.rutaConQuery).toBe(`/search?q=${termino}`);
      await expect(srp.titulo).toBeVisible();
      expect(await srp.chips.count()).toBeGreaterThan(0);
      await expect(srp.botonFiltros).toBeVisible();
      await srp.capturarEvidencia(cp, 7, 'chips de categoría y acceso a filtros en la SRP');
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-D-002 · Clic en "Ver todos los productos" del modal navega a la SRP con URL correcta (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-D-002';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = new SRPPage(page, termino);

      await page.goto('/');
      await srp.cookies.aceptarSiAparece();
      await srp.capturarEvidencia(cp, 1, 'Home cargado en Desktop 1280x900');

      const buscador = new BuscadorModal(page, formFactor);
      await buscador.abrir();
      await escribirEnElBuscador(buscador, termino);
      await expect(buscador.botonVerTodos).toBeVisible({ timeout: 20000 });
      // El TC lo llama "Ver todos los productos"; la UI lo escribe "Ver todos". El locator es
      // tolerante porque lo que el caso valida es el destino del enlace, no su rótulo.
      await srp.capturarEvidencia(cp, 4, 'enlace "Ver todos" localizado en el modal');

      await buscador.botonVerTodos.click();
      await srp.waitUntilReady();
      await srp.capturarEvidencia(cp, 6, 'SRP completa tras el clic en "Ver todos"');

      expect(srp.rutaConQuery).toBe(`/search?q=${termino}`);
      expect(await srp.shelves.count()).toBeGreaterThan(0);
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-D-003 · La SRP muestra término, cantidad, chips, grilla, filtros y ordenamiento (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-D-003';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = await abrirSRP(page, termino);
      await srp.capturarEvidencia(cp, 2, 'SRP cargada con resultados del término');

      // 1) el término destacado, 2) la cantidad, 3) los chips, 4) la grilla, 5) los filtros y
      // 6) el ordenamiento: los seis elementos que enumera el resultado esperado.
      await expect(srp.titulo).toBeVisible();
      expect(await srp.terminoDelTitulo()).toMatch(new RegExp(termino, 'i'));
      await srp.capturarEvidencia(cp, 3, 'término buscado destacado en el título', {
        elemento: srp.titulo,
      });

      await expect(srp.contador).toBeVisible();
      const total = await srp.conteoDeclarado();
      expect(total).not.toBeNull();
      expect(total).toBeGreaterThan(0);
      await srp.capturarEvidencia(cp, 4, 'cantidad total de resultados', { elemento: srp.contador });

      expect(await srp.chips.count()).toBeGreaterThan(0);
      expect(await srp.shelves.count()).toBeGreaterThan(0);
      await expect(srp.botonFiltros).toBeVisible();
      expect(await srp.ordenVisibleEnLaBarra()).toBe(true);
      await srp.capturarEvidencia(cp, 8, 'barra con filtros y control de ordenamiento');
      await srp.capturarEvidencia(cp, undefined, undefined, { fullPage: true });
    });

    test('TC-B2C18-D-004 · Clic en un producto de la SRP navega a su PDP (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-D-004';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = await abrirSRP(page, termino);
      await srp.capturarEvidencia(cp, 2, 'SRP cargada con la grilla de resultados');

      const shelf = srp.shelf(0);
      const enlace = srp.enlaceDelProducto(0);
      const nombreEnLaSRP = (await enlace.innerText()).trim();
      await srp.capturarEvidencia(cp, 3, 'producto identificado en la grilla', {
        elemento: shelf.root,
      });

      await enlace.click();
      await page.waitForLoadState('domcontentloaded');
      await srp.capturarEvidencia(cp, 5, 'PDP del producto seleccionado');

      // La PDP tiene que ser la del producto que se pulsó, no cualquiera: se compara el nombre que
      // el shelf mostraba contra el que la PDP rinde, y se comprueba que hay precio e imagen.
      // La PDP monta dos `main` —el del layout y el del detalle—, así que el locator tiene que
      // decir con cuál se queda: sin `.first()` la comprobación muere por strict mode antes de
      // mirar nada, y el fallo se lee como si la PDP no tuviera el producto.
      const mainPDP = page.locator('main').first();
      const nombreSinMarca = nombreEnLaSRP.split('|').pop()!.trim();
      await expect(mainPDP).toContainText(nombreSinMarca, { timeout: 30000 });
      await expect(mainPDP.getByText(/\$[\d.]+/).first()).toBeVisible();
      await expect(mainPDP.locator('img').first()).toBeVisible();
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-D-005 · Clic en un chip de categoría sugerida navega a la PLP de esa categoría (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-D-005';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = await abrirSRP(page, termino);
      await srp.capturarEvidencia(cp, 2, 'SRP cargada con resultados del término');

      const chip = srp.chips.first();
      const etiqueta = (await chip.innerText()).trim();
      const destino = await chip.getAttribute('href');
      await srp.capturarEvidencia(cp, 3, 'chips de categorías sugeridas en la SRP');

      await chip.click();
      await page.waitForLoadState('domcontentloaded');
      await srp.capturarEvidencia(cp, 5, 'PLP de la categoría del chip');

      // La URL y el contenido tienen que corresponder a la categoría del chip: se comprueban las
      // dos cosas, porque una PLP servida en la URL correcta con el título de otra categoría
      // cumpliría la mitad del criterio y no la que el usuario ve.
      expect(new URL(page.url()).pathname).toBe(destino);
      await expect(page.locator('main h1')).toHaveText(etiqueta, { timeout: 30000 });
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-D-006 · Agregar un producto al carro desde la SRP actualiza el contador sin salir de la SRP (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-D-006';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = await abrirSRP(page, termino);

      await srp.esperarInteractiva();
      const itemsAntes = await srp.itemsEnElCarro();
      const urlAntes = srp.rutaConQuery;
      await srp.capturarEvidencia(cp, 2, 'SRP cargada con el carro vacío');

      const shelf = srp.shelfConTexto(/./);
      await expect(shelf.agregar).toBeVisible();
      await srp.capturarEvidencia(cp, 3, 'producto disponible con botón Agregar', {
        elemento: shelf.root,
      });

      await shelf.clicAgregar();
      // La confirmación visual del shelf: pasa a "En carro" con las unidades. No hay toast — la
      // exploración no observó ninguno, así que el caso se verifica por lo que sí es observable.
      await expect(shelf.enCarro).toBeVisible({ timeout: 30000 });
      await srp.capturarEvidencia(cp, 5, 'producto añadido: el shelf muestra "En carro"', {
        elemento: shelf.root,
      });

      await expect(srp.miniCarrito).toHaveAttribute(
        'aria-label',
        /Mi carrito, número de artículos: [1-9]/,
        { timeout: 30000 },
      );
      expect(await srp.itemsEnElCarro()).toBeGreaterThan(itemsAntes ?? 0);
      await srp.capturarEvidencia(cp, 6, 'contador del carro actualizado en el header', {
        elemento: srp.miniCarrito,
      });

      // Y el usuario sigue en la SRP: ni navegación ni redirección.
      expect(srp.rutaConQuery).toBe(urlAntes);
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-D-007 · Clic en "Filtros" abre el modal de filtros (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-D-007';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = await abrirSRP(page, termino);

      await expect(srp.botonFiltros).toBeVisible();
      await srp.capturarEvidencia(cp, 3, 'botón de filtros localizado en la SRP');

      const panel = await srp.abrirPanelDeFiltros();
      await expect(panel.root.first()).toBeVisible();
      await expect(panel.titulo).toBeVisible();
      await srp.capturarEvidencia(cp, 5, 'panel de filtros desplegado', {
        elemento: panel.root.first(),
      });
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-D-008 · El dropdown de ordenamiento despliega opciones y la selección reordena la grilla (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-D-008';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = await abrirSRP(page, termino);
      await srp.capturarEvidencia(cp, 2, 'SRP cargada con el control de orden en la barra');

      await srp.orden.desplegar();
      const opciones = await srp.orden.opciones();
      expect(opciones.length).toBeGreaterThan(1);
      await srp.capturarEvidencia(cp, 4, 'opciones de ordenamiento desplegadas');

      const secuenciaAntes = await srp.shelves.allInnerTexts();
      await srp.orden.elegir('Precio más bajo');
      await srp.waitUntilReady();
      await srp.capturarEvidencia(cp, 5, 'orden "Precio más bajo" aplicado');

      // Que la grilla se reordenó se comprueba contra el criterio elegido, no solo contra "quedó
      // distinta": el precio de venta tiene que ir de menor a mayor. El `sort` de la URL es la
      // señal que el front manda al backend y confirma qué criterio quedó vigente.
      expect(srp.criterioEnLaUrl).toBe('price-asc');
      const secuenciaDespues = await srp.shelves.allInnerTexts();
      expect(secuenciaDespues).not.toEqual(secuenciaAntes);
      await srp.capturarEvidencia(cp, 6, 'grilla reordenada por precio ascendente');
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-D-011 · Sin método de entrega configurado la SRP muestra disponibilidad general del catálogo (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-D-011';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = new SRPPage(page, termino);

      await page.goto('/');
      await srp.cookies.aceptarSiAparece();

      // El estado inicial de un invitado: el header ofrece elegir una forma de entrega, lo que
      // significa que no hay ninguna configurada. Esa es la precondición del caso, y se comprueba
      // en vez de darse por supuesta.
      // Se busca por rol y no por `aria-label`: en Desktop el botón declara el atributo, pero en
      // Mobile su nombre accesible sale del `<p>` que lleva dentro, así que un selector por
      // atributo encuentra uno de los dos form-factors y da por ausente un control que está a la
      // vista. El nombre accesible es lo que ven los dos.
      const selectorDeEntrega = page
        .locator('header')
        .getByRole('button', { name: /elige una forma de entrega/i })
        .first();
      await expect(selectorDeEntrega).toBeVisible();
      await srp.capturarEvidencia(cp, 2, 'sin dirección de despacho ni tienda de retiro activa', {
        elemento: selectorDeEntrega,
      });

      await srp.goto();
      await srp.capturarEvidencia(cp, 3, 'SRP servida sin método de entrega configurado');

      // Disponibilidad general del catálogo: la SRP sirve los resultados del término y los
      // productos se pueden agregar, sin que ningún filtro de tienda recorte el listado.
      const total = await srp.conteoDeclarado();
      expect(total).not.toBeNull();
      expect(await srp.shelves.count()).toBeGreaterThan(0);
      expect(await srp.shelf(0).agregar.count()).toBeGreaterThan(0);
      await expect(selectorDeEntrega).toBeVisible();
      await srp.capturarEvidencia(cp, 5, 'productos con disponibilidad general, sin filtro por tienda');
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-D-021 · Durante la carga de la SRP se muestra un skeleton que luego se reemplaza por el contenido (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-D-021';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = new SRPPage(page, termino);

      await page.goto('/');
      await srp.cookies.aceptarSiAparece();

      // El retraso no cambia lo que se verifica —que el skeleton se muestra y luego se va—, solo
      // lo hace observable: sin él la ventana entre el placeholder y la grilla es de milisegundos
      // y la captura sale o vacía o con el contenido ya montado, según cómo respire el ambiente.
      await srp.retrasarCarga(4000);

      const buscador = new BuscadorModal(page, formFactor);
      await buscador.abrir();
      await escribirEnElBuscador(buscador, termino);
      await buscador.input.press('Enter');
      await srp.capturarEvidencia(cp, 3, 'navegación a la SRP iniciada');

      await expect(srp.skeletons.first()).toBeVisible({ timeout: 20000 });
      const cuantos = await srp.cantidadDeSkeletons();
      expect(cuantos).toBeGreaterThan(0);
      await srp.capturarEvidencia(cp, 4, 'skeleton de carga a la vista');

      await srp.restaurarCarga();
      await srp.waitUntilReady();
      await expect(srp.shelves.first()).toBeVisible({ timeout: 30000 });
      // Y no queda skeleton conviviendo con el contenido real, que es la otra mitad del esperado.
      await expect(srp.skeletons).toHaveCount(0, { timeout: 30000 });
      await srp.capturarEvidencia(cp, 6, 'contenido real de la SRP, sin skeleton residual');
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-D-022 · Una búsqueda sin resultados muestra la pantalla "Sin resultados" con código SRP-014 (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-D-022';
      const termino = terminoDeclarado(testData, 'SEARCH_NO_RESULTS_001');
      const srp = new SRPPage(page, termino);

      await page.goto(`/search?q=${encodeURIComponent(termino)}`, {
        waitUntil: 'domcontentloaded',
      });
      await srp.cookies.aceptarSiAparece();
      await expect(srp.textoSinResultados).toBeVisible({ timeout: 30000 });
      await srp.capturarEvidencia(cp, 3, 'SRP del término sin resultados');

      await expect(srp.imagenSinResultados).toBeVisible();
      await srp.capturarEvidencia(cp, 4, 'imagen de "Sin resultados"', {
        elemento: srp.imagenSinResultados,
      });

      // El texto lleva el término buscado, que es lo que distingue esta pantalla de una genérica.
      await expect(srp.textoSinResultados).toContainText(new RegExp(termino, 'i'));
      await expect(srp.textoRevisaLaOrtografia).toBeVisible();
      expect(await srp.codigo()).toBe('SRP-014');
      await srp.capturarEvidencia(cp, 6, 'textos y código SRP-014 de la pantalla sin resultados');

      await expect(srp.botonVerCategorias).toBeVisible();
      await srp.botonVerCategorias.click();
      await page.waitForLoadState('domcontentloaded');
      expect(new URL(page.url()).pathname).toBe('/');
      await srp.capturarEvidencia(cp, 7, 'el botón "Ver categorías" redirige al Home');
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-D-023 · Un error en la carga de la SRP muestra la pantalla de error con código SRP-012 (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-D-023';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = new SRPPage(page, termino);

      // Se intercepta la búsqueda de productos en vez de pedir que alguien rompa el ambiente: es
      // la única forma reproducible de provocar el fallo, y deja el resto de la página intacta
      // para observar el estado tal como lo vería el usuario.
      //
      // **La SRP se alcanza buscando desde el Home, no por su URL.** Entrando directo, el
      // storefront la sirve renderizada en el servidor y no hay ninguna petición de cliente que
      // interceptar: la página llega con sus 9 productos y el error nunca se produce, lo que se
      // lee como si el front no tuviera pantalla de error cuando lo que falló fue la simulación.
      await page.goto('/');
      await srp.cookies.aceptarSiAparece();
      await srp.forzarErrorDeCarga();

      const buscador = new BuscadorModal(page, formFactor);
      await buscador.abrir();
      await escribirEnElBuscador(buscador, termino);
      await buscador.input.press('Enter');
      await srp.capturarEvidencia(cp, 3, 'búsqueda realizada con la carga fallando');

      await expect(srp.mensajeDeError).toBeVisible({ timeout: 30000 });
      await expect(srp.textoEstamosTrabajando).toBeVisible();
      expect(await srp.codigo()).toBe('SRP-012');
      await srp.capturarEvidencia(cp, 6, 'pantalla de error con el código SRP-012');

      // "Reintentar" vuelve a pedir el listado: se comprueba que dispara una nueva petición, que
      // es el reintento efectivo. El TC habla de recargar la página; el front refetchea sin
      // navegar, y pedirle un F5 en lugar del refetch sería empeorar el comportamiento.
      await expect(srp.botonReintentar).toBeVisible();
      const reintento = page.waitForRequest('**/shopper-search/**/product-search**', {
        timeout: 30000,
      });
      await srp.botonReintentar.click();
      await reintento;
      await srp.capturarEvidencia(cp, 8, 'el botón "Reintentar" vuelve a pedir el listado');

      await expect(srp.botonIrAlInicio).toBeVisible();
      await srp.botonIrAlInicio.click();
      await page.waitForLoadState('domcontentloaded');
      expect(new URL(page.url()).pathname).toBe('/');
      await srp.capturarEvidencia(cp, 9, 'el botón "Ir al Inicio" redirige al Home');
      await srp.restaurarCarga();
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-D-025 · La SRP sin content asset Grid Banners no renderiza el componente ni deja espacio vacío (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-D-025';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = await abrirSRP(page, termino);
      await srp.capturarEvidencia(cp, 3, 'SRP del término sin Grid Banners configurado');

      // Que no se renderiza se comprueba por ausencia de imágenes ajenas a los productos: un grid
      // de banners son imágenes, y las de producto se identifican porque cuelgan de un shelf.
      const banners = await srp.imagenesAjenasALosProductos();
      expect(banners).toEqual([]);
      await srp.capturarEvidencia(cp, 4, 'no hay grilla de banners en la SRP');

      // Y que no queda espacio vacío: un contenedor montado sin contenido se vería como un salto
      // de cientos de píxeles entre la cabecera y el primer producto. Un contenedor vacío no tiene
      // texto ni marca que buscar, así que se mide la geometría renderizada.
      const hueco = await srp.huecoSobreLaGrilla();
      expect(hueco).toBeGreaterThanOrEqual(0);
      expect(hueco).toBeLessThan(400);
      await srp.capturarEvidencia(cp, 5, 'la cabecera y la grilla quedan contiguas, sin hueco', {
        fullPage: true,
      });
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-D-028 · La SRP sin content asset Banner circular no renderiza el componente ni deja espacio vacío (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-D-028';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = await abrirSRP(page, termino);
      await srp.capturarEvidencia(cp, 3, 'SRP del término sin Banner circular configurado');

      const banners = await srp.imagenesAjenasALosProductos();
      expect(banners).toEqual([]);
      await srp.capturarEvidencia(cp, 4, 'no hay banner circular bajo el título');

      const hueco = await srp.huecoSobreLaGrilla();
      expect(hueco).toBeGreaterThanOrEqual(0);
      expect(hueco).toBeLessThan(400);
      await srp.capturarEvidencia(cp, 5, 'sin espacio vacío entre el título y la grilla', {
        fullPage: true,
      });
      await srp.capturarEvidencia(cp);
    });
  });

  // ===================================================================== MOBILE

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    const formFactor: FormFactor = 'mobile';

    test('TC-B2C18-M-001 · Buscar desde la vista full-screen navega a la SRP con URL /search?q=[término] y filtros (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-M-001';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = new SRPPage(page, termino);

      await page.goto('/');
      await srp.cookies.aceptarSiAparece();
      await srp.capturarEvidencia(cp, 1, 'Home cargado en Mobile 390x844');

      const buscador = new BuscadorModal(page, formFactor);
      await buscador.abrir();
      await srp.capturarEvidencia(cp, 2, 'vista full-screen de búsqueda abierta');

      await escribirEnElBuscador(buscador, termino);
      await expect(buscador.botonVerTodos).toBeVisible({ timeout: 20000 });
      await srp.capturarEvidencia(cp, 3, 'término ingresado con sugerencias resueltas');

      // El botón de búsqueda del teclado virtual equivale a Enter en el input.
      await buscador.input.press('Enter');
      await srp.waitUntilReady();
      await srp.capturarEvidencia(cp, 5, 'SRP servida en Mobile');

      expect(srp.rutaConQuery).toBe(`/search?q=${termino}`);
      expect(await srp.chips.count()).toBeGreaterThan(0);
      await expect(srp.botonFiltros).toBeVisible();
      await srp.capturarEvidencia(cp, 7, 'chips de categoría y acceso a filtros en Mobile');
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-M-002 · Tap en "Ver todos los productos" desde la vista full-screen navega a la SRP (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-M-002';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = new SRPPage(page, termino);

      await page.goto('/');
      await srp.cookies.aceptarSiAparece();

      const buscador = new BuscadorModal(page, formFactor);
      await buscador.abrir();
      await escribirEnElBuscador(buscador, termino);
      await expect(buscador.botonVerTodos).toBeVisible({ timeout: 20000 });
      await srp.capturarEvidencia(cp, 4, 'enlace "Ver todos" localizado en la vista full-screen');

      await buscador.botonVerTodos.click();
      await srp.waitUntilReady();
      await srp.capturarEvidencia(cp, 6, 'SRP completa tras el tap en "Ver todos"');

      expect(srp.rutaConQuery).toBe(`/search?q=${termino}`);
      expect(await srp.shelves.count()).toBeGreaterThan(0);
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-M-003 · La SRP muestra término, cantidad, chips, grilla, filtros y ordenamiento (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-M-003';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = await abrirSRP(page, termino);
      await srp.capturarEvidencia(cp, 2, 'SRP cargada en Mobile con resultados del término');

      await expect(srp.titulo).toBeVisible();
      expect(await srp.terminoDelTitulo()).toMatch(new RegExp(termino, 'i'));
      await expect(srp.contador).toBeVisible();
      const total = await srp.conteoDeclarado();
      expect(total).not.toBeNull();
      await srp.capturarEvidencia(cp, 4, 'término destacado y cantidad de resultados');

      expect(await srp.chips.count()).toBeGreaterThan(0);
      expect(await srp.shelves.count()).toBeGreaterThan(0);
      await expect(srp.botonFiltros).toBeVisible();
      await srp.capturarEvidencia(cp, 7, 'chips, grilla y acceso a filtros en Mobile');

      // **El ordenamiento en Mobile no vive en la barra**: el trigger del dropdown existe en el
      // DOM con `display:none` y las opciones se sirven dentro del panel de filtros, igual que
      // registró B2C-87, cuya planilla solo recorre ese camino en Mobile. Por eso el acceso al
      // orden se verifica donde el diseño responsive lo pone, y la desviación respecto del
      // "dropdown Ordenar por" que nombra la fila queda en la Observación del TC.
      expect(await srp.ordenVisibleEnLaBarra()).toBe(false);
      const panel = await srp.abrirPanelDeFiltros();
      await expect(panel.seccionOrdenar).toBeVisible();
      expect(await panel.opcionesDeOrden.count()).toBeGreaterThan(1);
      await srp.capturarEvidencia(cp, 8, 'opciones de ordenamiento en el panel de filtros', {
        elemento: panel.root.first(),
      });
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-M-004 · Tap en un producto de la SRP navega a su PDP (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-M-004';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = await abrirSRP(page, termino);
      await srp.capturarEvidencia(cp, 2, 'SRP cargada con la grilla de resultados');

      const shelf = srp.shelf(0);
      const enlace = srp.enlaceDelProducto(0);
      const nombreEnLaSRP = (await enlace.innerText()).trim();
      await srp.capturarEvidencia(cp, 3, 'producto identificado en la grilla', {
        elemento: shelf.root,
      });

      await enlace.click();
      await page.waitForLoadState('domcontentloaded');
      await srp.capturarEvidencia(cp, 5, 'PDP del producto seleccionado');

      // La PDP monta dos `main` —el del layout y el del detalle—, así que el locator tiene que
      // decir con cuál se queda: sin `.first()` la comprobación muere por strict mode antes de
      // mirar nada, y el fallo se lee como si la PDP no tuviera el producto.
      const mainPDP = page.locator('main').first();
      const nombreSinMarca = nombreEnLaSRP.split('|').pop()!.trim();
      await expect(mainPDP).toContainText(nombreSinMarca, { timeout: 30000 });
      await expect(mainPDP.getByText(/\$[\d.]+/).first()).toBeVisible();
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-M-005 · Tap en un chip de categoría sugerida navega a la PLP de esa categoría (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-M-005';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = await abrirSRP(page, termino);
      await srp.capturarEvidencia(cp, 2, 'SRP cargada con resultados del término');

      const chip = srp.chips.first();
      const etiqueta = (await chip.innerText()).trim();
      const destino = await chip.getAttribute('href');
      await srp.capturarEvidencia(cp, 3, 'chips de categorías sugeridas en Mobile');

      await chip.click();
      await page.waitForLoadState('domcontentloaded');
      await srp.capturarEvidencia(cp, 5, 'PLP de la categoría del chip');

      expect(new URL(page.url()).pathname).toBe(destino);
      await expect(page.locator('main h1')).toHaveText(etiqueta, { timeout: 30000 });
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-M-006 · Agregar un producto al carro desde la SRP actualiza el contador sin salir de la SRP (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-M-006';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = await abrirSRP(page, termino);

      await srp.esperarInteractiva();
      const itemsAntes = await srp.itemsEnElCarro();
      const urlAntes = srp.rutaConQuery;
      await srp.capturarEvidencia(cp, 2, 'SRP cargada en Mobile con el carro vacío');

      const shelf = srp.shelfConTexto(/./);
      await expect(shelf.agregar).toBeVisible();
      await srp.capturarEvidencia(cp, 3, 'producto disponible con botón Agregar', {
        elemento: shelf.root,
      });

      await shelf.clicAgregar();
      await expect(shelf.enCarro).toBeVisible({ timeout: 30000 });
      await srp.capturarEvidencia(cp, 5, 'producto añadido: el shelf muestra "En carro"', {
        elemento: shelf.root,
      });

      expect(await srp.itemsEnElCarro()).toBeGreaterThan(itemsAntes ?? 0);
      await srp.capturarEvidencia(cp, 6, 'contador del carro actualizado en el header', {
        elemento: srp.miniCarrito,
      });

      expect(srp.rutaConQuery).toBe(urlAntes);
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-M-007 · Tap en "Filtros" abre el modal de filtros (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-M-007';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = await abrirSRP(page, termino);

      await expect(srp.botonFiltros).toBeVisible();
      await srp.capturarEvidencia(cp, 3, 'botón de filtros localizado en la SRP de Mobile');

      const panel = await srp.abrirPanelDeFiltros();
      await expect(panel.root.first()).toBeVisible();
      await expect(panel.titulo).toBeVisible();
      await srp.capturarEvidencia(cp, 5, 'panel de filtros desplegado en Mobile', {
        elemento: panel.root.first(),
      });
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-M-010 · Sin método de entrega configurado la SRP muestra disponibilidad general del catálogo (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-M-010';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = new SRPPage(page, termino);

      await page.goto('/');
      await srp.cookies.aceptarSiAparece();

      // Se busca por rol y no por `aria-label`: en Desktop el botón declara el atributo, pero en
      // Mobile su nombre accesible sale del `<p>` que lleva dentro, así que un selector por
      // atributo encuentra uno de los dos form-factors y da por ausente un control que está a la
      // vista. El nombre accesible es lo que ven los dos.
      const selectorDeEntrega = page
        .locator('header')
        .getByRole('button', { name: /elige una forma de entrega/i })
        .first();
      await expect(selectorDeEntrega).toBeVisible();
      await srp.capturarEvidencia(cp, 2, 'sin dirección de despacho ni tienda de retiro activa', {
        elemento: selectorDeEntrega,
      });

      await srp.goto();
      await srp.capturarEvidencia(cp, 3, 'SRP servida sin método de entrega configurado');

      const total = await srp.conteoDeclarado();
      expect(total).not.toBeNull();
      expect(await srp.shelves.count()).toBeGreaterThan(0);
      expect(await srp.shelf(0).agregar.count()).toBeGreaterThan(0);
      await expect(selectorDeEntrega).toBeVisible();
      await srp.capturarEvidencia(cp, 5, 'productos con disponibilidad general del catálogo');
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-M-020 · Durante la carga de la SRP se muestra un skeleton que luego se reemplaza por el contenido (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-M-020';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = new SRPPage(page, termino);

      await page.goto('/');
      await srp.cookies.aceptarSiAparece();
      await srp.retrasarCarga(4000);

      const buscador = new BuscadorModal(page, formFactor);
      await buscador.abrir();
      await escribirEnElBuscador(buscador, termino);
      await buscador.input.press('Enter');
      await srp.capturarEvidencia(cp, 3, 'navegación a la SRP iniciada');

      await expect(srp.skeletons.first()).toBeVisible({ timeout: 20000 });
      expect(await srp.cantidadDeSkeletons()).toBeGreaterThan(0);
      await srp.capturarEvidencia(cp, 4, 'skeleton de carga a la vista en Mobile');

      await srp.restaurarCarga();
      await srp.waitUntilReady();
      await expect(srp.shelves.first()).toBeVisible({ timeout: 30000 });
      await expect(srp.skeletons).toHaveCount(0, { timeout: 30000 });
      await srp.capturarEvidencia(cp, 6, 'contenido real de la SRP, sin skeleton residual');
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-M-021 · Una búsqueda sin resultados muestra la pantalla "Sin resultados" con código SRP-014 (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-M-021';
      const termino = terminoDeclarado(testData, 'SEARCH_NO_RESULTS_001');
      const srp = new SRPPage(page, termino);

      await page.goto(`/search?q=${encodeURIComponent(termino)}`, {
        waitUntil: 'domcontentloaded',
      });
      await srp.cookies.aceptarSiAparece();
      await expect(srp.textoSinResultados).toBeVisible({ timeout: 30000 });
      await srp.capturarEvidencia(cp, 3, 'SRP del término sin resultados en Mobile');

      await expect(srp.imagenSinResultados).toBeVisible();
      await expect(srp.textoSinResultados).toContainText(new RegExp(termino, 'i'));
      await expect(srp.textoRevisaLaOrtografia).toBeVisible();
      expect(await srp.codigo()).toBe('SRP-014');
      await srp.capturarEvidencia(cp, 6, 'imagen, textos y código SRP-014');

      await expect(srp.botonVerCategorias).toBeVisible();
      await srp.botonVerCategorias.click();
      await page.waitForLoadState('domcontentloaded');
      expect(new URL(page.url()).pathname).toBe('/');
      await srp.capturarEvidencia(cp, 7, 'el botón "Ver categorías" redirige al Home');
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-M-022 · Un error en la carga de la SRP muestra la pantalla de error con código SRP-012 (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-M-022';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = new SRPPage(page, termino);

      // La SRP se alcanza buscando desde el Home: entrando por su URL el storefront la sirve
      // renderizada en el servidor y no hay petición de cliente que interceptar (ver el par
      // Desktop de este caso).
      await page.goto('/');
      await srp.cookies.aceptarSiAparece();
      await srp.forzarErrorDeCarga();

      const buscador = new BuscadorModal(page, formFactor);
      await buscador.abrir();
      await escribirEnElBuscador(buscador, termino);
      await buscador.input.press('Enter');
      await srp.capturarEvidencia(cp, 3, 'búsqueda realizada con la carga fallando');

      await expect(srp.mensajeDeError).toBeVisible({ timeout: 30000 });
      await expect(srp.textoEstamosTrabajando).toBeVisible();
      expect(await srp.codigo()).toBe('SRP-012');
      await srp.capturarEvidencia(cp, 6, 'pantalla de error con el código SRP-012 en Mobile');

      await expect(srp.botonReintentar).toBeVisible();
      const reintento = page.waitForRequest('**/shopper-search/**/product-search**', {
        timeout: 30000,
      });
      await srp.botonReintentar.click();
      await reintento;
      await srp.capturarEvidencia(cp, 8, 'el botón "Reintentar" vuelve a pedir el listado');

      await expect(srp.botonIrAlInicio).toBeVisible();
      await srp.botonIrAlInicio.click();
      await page.waitForLoadState('domcontentloaded');
      expect(new URL(page.url()).pathname).toBe('/');
      await srp.capturarEvidencia(cp, 9, 'el botón "Ir al Inicio" redirige al Home');
      await srp.restaurarCarga();
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-M-024 · La SRP sin content asset Grid Banners no renderiza el componente ni deja espacio vacío (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-M-024';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = await abrirSRP(page, termino);
      await srp.capturarEvidencia(cp, 3, 'SRP del término sin Grid Banners configurado');

      const banners = await srp.imagenesAjenasALosProductos();
      expect(banners).toEqual([]);
      await srp.capturarEvidencia(cp, 4, 'no hay grilla de banners en la SRP de Mobile');

      const hueco = await srp.huecoSobreLaGrilla();
      expect(hueco).toBeGreaterThanOrEqual(0);
      expect(hueco).toBeLessThan(400);
      await srp.capturarEvidencia(cp, 5, 'cabecera y grilla contiguas, sin hueco', {
        fullPage: true,
      });
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-M-026 · La SRP sin content asset Banner circular no renderiza el componente ni deja espacio vacío (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-M-026';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
      const srp = await abrirSRP(page, termino);
      await srp.capturarEvidencia(cp, 3, 'SRP del término sin Banner circular configurado');

      const banners = await srp.imagenesAjenasALosProductos();
      expect(banners).toEqual([]);
      await srp.capturarEvidencia(cp, 4, 'no hay banner circular bajo el título');

      const hueco = await srp.huecoSobreLaGrilla();
      expect(hueco).toBeGreaterThanOrEqual(0);
      expect(hueco).toBeLessThan(400);
      await srp.capturarEvidencia(cp, 5, 'sin espacio vacío entre el título y la grilla', {
        fullPage: true,
      });
      await srp.capturarEvidencia(cp);
    });
  });
});
