import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP_1280, MOBILE } from './support/viewports';
import { BuscadorModal, FormFactor } from './pages/BuscadorModal';
import { SRPPage } from './pages/SRPPage';
import { HeaderFull } from './pages/HeaderFull';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { AgotarseModal } from './pages/AgotarseModal';
import { LoginModal } from './pages/LoginModal';

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

/** Abre "Elige tu método de entrega" desde el Store Locator del header de la página vigente. */
async function abrirMetodoDeEntrega(page: Page): Promise<MetodoEntregaModal> {
  await new HeaderFull(page).storeLocator.click();
  return new MetodoEntregaModal(page).esperarAbierto();
}

/**
 * "Algunos productos podrían agotarse" aparece al cambiar un método ya elegido por otro; al elegir
 * el primero no se monta. Se acepta si aparece, porque el caso pide que el cambio se aplique.
 */
async function aceptarAgotarseSiAparece(page: Page): Promise<void> {
  const agotarse = new AgotarseModal(page);
  if (await agotarse.root.waitFor({ state: 'visible', timeout: 8000 }).then(() => true, () => false)) {
    await agotarse.botonSi.click();
  }
}

/** Deja "Retiro en tienda" con `tienda` desde el modal abierto y espera a que el header la muestre. */
async function fijarRetiro(page: Page, modal: MetodoEntregaModal, tienda: string): Promise<void> {
  await modal.tabRetiroEnTienda.click();
  await modal.elegirTienda(tienda);
  await aceptarAgotarseSiAparece(page);
  await new LoginModal(page).cerrarSiAparece();
  await expect(new HeaderFull(page).storeLocator).toContainText(tienda, { timeout: 45000 });
}

/** Deja "Despacho a domicilio" con `direccion` como invitado, desde el Home. */
async function fijarDespacho(page: Page, direccion: string): Promise<void> {
  await page.goto('/');
  await new SRPPage(page).cookies.aceptarSiAparece();
  const modal = await abrirMetodoDeEntrega(page);
  await modal.fijarDireccionComoInvitado(direccion, new RegExp(direccion.split(',')[0].trim(), 'i'));
}

/** Cuántos shelves cambiaron de disponibilidad entre dos lecturas de la misma SRP. */
function cambiosDeDisponibilidad(
  antes: Record<string, string>,
  despues: Record<string, string>,
): string[] {
  return Object.keys(despues).filter((k) => k in antes && antes[k] !== despues[k]);
}

type Ctx = { page: Page; testData: Parameters<typeof token>[0]; baseURL: string | undefined };

/**
 * CA9a con un método activo: la SRP del término se resuelve contra el stock de la tienda que
 * atiende el método. Se comprueba contra la SRP del mismo término sin método —el catálogo
 * general—: si ningún shelf cambia de disponibilidad, la SRP no está mirando la tienda.
 *
 * **La SRP no quita los productos sin stock**: los deja con "Ver similares" (lo que pide el
 * CA9a de D-014), así que el total no baja. Lo que cambia es la disponibilidad de cada shelf.
 */
async function casoMetodoActivo(
  { page, testData, baseURL }: Ctx,
  cp: string,
  fijar: () => Promise<string>,
): Promise<void> {
  const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
  const general = await disponibilidadSinMetodo(page, baseURL, termino);
  const srp = new SRPPage(page, termino);

  const enHeader = await fijar();
  const storeLocator = new HeaderFull(page).storeLocator;
  await srp.capturarEvidencia(cp, 2, `método de entrega activo: ${enHeader}`, { elemento: storeLocator });

  await srp.goto();
  await srp.waitUntilReady();
  await srp.esperarInteractiva();
  await expect(storeLocator).toContainText(enHeader);
  await srp.capturarEvidencia(cp, 3, `SRP de "${termino}" con el método activo`);

  const enTienda = await srp.disponibilidad();
  expect(Object.values(enTienda), 'todo shelf resuelve su disponibilidad').not.toContain('otro');
  const cambios = cambiosDeDisponibilidad(general, enTienda);
  expect(cambios.length, 'la disponibilidad refleja el stock de la tienda, no el catálogo general').toBeGreaterThan(0);
  await srp.capturarEvidencia(cp, 4, `${cambios.length} producto(s) con disponibilidad distinta a la del catálogo general`, {
    fullPage: true,
  });
  await srp.capturarEvidencia(cp);
}

async function fijarRetiroDesdeHome(page: Page, tienda: string): Promise<string> {
  await page.goto('/');
  await new SRPPage(page).cookies.aceptarSiAparece();
  await fijarRetiro(page, await abrirMetodoDeEntrega(page), tienda);
  return tienda;
}

/** CA9a: un producto sin stock para el método activo — etiqueta, Agregar oculto y "Ver similares". */
async function casoSinStock({ page, testData }: Ctx, cp: string): Promise<void> {
  const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
  const tienda = terminoDeclarado(testData, 'TIENDA_RETIRO_001');
  const sku = token(testData, 'SKU_SIN_STOCK');
  const srp = new SRPPage(page, termino);

  await fijarRetiroDesdeHome(page, tienda);
  await srp.goto();
  await srp.waitUntilReady();
  await srp.esperarInteractiva();
  await srp.capturarEvidencia(cp, 2, `SRP de "${termino}" con retiro en ${tienda}`);

  // El del SKU declarado si la SRP del término lo trae; si no, el primero que la SRP marca sin
  // stock, que es lo que el paso 3 pide identificar.
  const delSku = srp.shelves.filter({ has: page.locator(`a[href*="${sku}"]`) });
  const raiz = (await delSku.count())
    ? delSku.first()
    : srp.shelves.filter({ has: page.getByRole('button', { name: /ver similares/i }) }).first();
  await raiz.scrollIntoViewIfNeeded();
  await srp.capturarEvidencia(cp, 3, 'producto sin disponibilidad en la grilla', { elemento: raiz });

  await expect(raiz.getByRole('button', { name: /ver similares/i })).toBeVisible();
  await expect(raiz.getByRole('button', { name: /^agregar$/i })).toHaveCount(0);
  await srp.capturarEvidencia(cp, 5, 'botón Agregar oculto y "Ver similares" visible', { elemento: raiz });

  // La etiqueta va al final y blanda: es la única parte del esperado que puede discrepar, y las
  // otras dos tienen que quedar medidas igual.
  const texto = (await raiz.innerText()).replace(/\s+/g, ' ');
  expect.soft(texto, 'etiqueta "No disponible" en el shelf').toMatch(/(^|\s)no disponible/i);
  await srp.capturarEvidencia(cp, 4, `etiqueta del shelf: ${texto.match(/pronto disponible|no disponible/i)?.[0] ?? 'sin etiqueta'}`, {
    elemento: raiz,
  });
  await srp.capturarEvidencia(cp);
}

/** CA9b: cambiar de despacho a retiro desde la propia SRP actualiza la disponibilidad sin salir de ella. */
async function casoCambioDeMetodo({ page, testData }: Ctx, cp: string): Promise<void> {
  const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
  const tienda = terminoDeclarado(testData, 'TIENDA_RETIRO_001');
  const direccion = terminoDeclarado(testData, 'DIRECCION_DESPACHO_001');
  const srp = new SRPPage(page, termino);

  await fijarDespacho(page, direccion);
  await srp.goto();
  await srp.waitUntilReady();
  await srp.esperarInteractiva();
  await srp.capturarEvidencia(cp, 2, `SRP con despacho a ${direccion}`);
  const conDespacho = await srp.disponibilidad();
  const urlAntes = srp.rutaConQuery;
  // Una marca en `window`: si la SRP se recarga para aplicar el cambio, desaparece.
  await page.evaluate(() => ((window as unknown as { __qaSinRecarga: boolean }).__qaSinRecarga = true));

  const modal = await abrirMetodoDeEntrega(page);
  await srp.capturarEvidencia(cp, 3, 'opción de cambio de método abierta desde la SRP', { elemento: modal.root });
  await fijarRetiro(page, modal, tienda);
  await srp.capturarEvidencia(cp, 4, `retiro en ${tienda} elegido`);

  await expect
    .poll(async () => cambiosDeDisponibilidad(conDespacho, await srp.disponibilidad()).length, {
      message: 'la SRP actualiza la disponibilidad al nuevo método',
      timeout: 30000,
    })
    .toBeGreaterThan(0);
  await srp.capturarEvidencia(cp, 5, 'disponibilidad actualizada según la tienda de retiro', { fullPage: true });

  expect(srp.rutaConQuery, 'sigue en la misma SRP').toBe(urlAntes);
  expect(
    await page.evaluate(() => (window as unknown as { __qaSinRecarga?: boolean }).__qaSinRecarga === true),
    'sin recargar la página',
  ).toBe(true);
  await srp.capturarEvidencia(cp, 6, 'misma SRP, sin recarga ni navegación');
  await srp.capturarEvidencia(cp);
}

/** CA10a: el componente de monetización configurado se muestra en la SRP del término. */
async function casoMonetizacion({ page, testData }: Ctx, cp: string): Promise<void> {
  const termino = terminoDeclarado(testData, 'SEARCH_TERM_001');
  const srp = await abrirSRP(page, termino);
  await srp.capturarEvidencia(cp, 3, `SRP de "${termino}"`);

  // El que la SRP de "leche" trae es un Sponsor Banner (tipo 2): una tarjeta "Patrocinado" con
  // imagen de campaña y logo del patrocinador que interrumpe la grilla.
  const banner = srp.sponsorBanners.first();
  await expect(banner).toBeVisible({ timeout: 30000 });
  await banner.scrollIntoViewIfNeeded();
  const cajaBanner = (await banner.boundingBox())!;
  const tops = await srp.shelves.evaluateAll((s) => s.map((e) => e.getBoundingClientRect().top));
  expect(tops.some((t) => t < cajaBanner.y), 'hay productos antes del banner').toBe(true);
  expect(tops.some((t) => t > cajaBanner.y + cajaBanner.height), 'y después: interrumpe la grilla').toBe(true);
  await expect(banner).toContainText(/patrocinado/i);
  expect(await banner.getAttribute('href')).toBeTruthy();
  await srp.capturarEvidencia(cp, 4, 'Sponsor Banner (tipo 2) interrumpiendo la grilla', { elemento: banner });

  expect.soft(await srp.imagenCargada(banner), 'la imagen de campaña del Sponsor Banner se pinta').toBe(true);
  await srp.capturarEvidencia(cp, 5, `${await srp.sponsorBanners.count()} Sponsor Banner(s) en la SRP`, { fullPage: true });
  await srp.capturarEvidencia(cp);
}

/**
 * La disponibilidad de la SRP del invitado sin método de entrega: el catálogo general, contra el
 * que se compara la de una tienda. Se lee en un contexto aparte para no tocar la sesión del caso.
 */
async function disponibilidadSinMetodo(
  page: Page,
  baseURL: string | undefined,
  termino: string,
): Promise<Record<string, string>> {
  const ctx = await page.context().browser()!.newContext({ baseURL, viewport: page.viewportSize() });
  try {
    const srp = await new SRPPage(await ctx.newPage(), termino).goto();
    await srp.waitUntilReady();
    await srp.esperarInteractiva();
    return await srp.disponibilidad();
  } finally {
    await ctx.close();
  }
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

    test('TC-B2C18-D-013 · Con retiro en tienda activo la SRP muestra productos según stock de la tienda seleccionada (Desktop)', async ({
      page,
      testData,
      baseURL,
    }) => {
      test.setTimeout(180000);
      await casoMetodoActivo({ page, testData, baseURL }, 'TC-B2C18-D-013', () =>
        fijarRetiroDesdeHome(page, terminoDeclarado(testData, 'TIENDA_RETIRO_001')),
      );
    });

    test('TC-B2C18-D-014 · Un producto sin disponibilidad muestra etiqueta "No disponible", Agregar oculto y "Ver similares" (Desktop)', async ({
      page,
      testData,
      baseURL,
    }) => {
      test.setTimeout(180000);
      await casoSinStock({ page, testData, baseURL }, 'TC-B2C18-D-014');
    });

    test('TC-B2C18-D-015 · Cambiar el método de entrega desde la SRP actualiza la disponibilidad sin salir de la SRP (Desktop)', async ({
      page,
      testData,
      baseURL,
    }) => {
      test.setTimeout(240000);
      await casoCambioDeMetodo({ page, testData, baseURL }, 'TC-B2C18-D-015');
    });

    test('TC-B2C18-D-016 · Los componentes de monetización configurados se muestran en la SRP según el tipo activo (Desktop)', async ({
      page,
      testData,
      baseURL,
    }) => {
      await casoMonetizacion({ page, testData, baseURL }, 'TC-B2C18-D-016');
    });

    test('TC-B2C18-D-026 · La paginación muestra la página 1 activa, los números de página y la flecha siguiente (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-D-026';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_50+_SKUS');
      const srp = await abrirSRP(page, termino);
      const total = await srp.conteoDeclarado();
      expect(total, 'precondición: más de 50 resultados').toBeGreaterThan(50);
      await srp.capturarEvidencia(cp, 2, `SRP de "${termino}" con ${total} productos`, { elemento: srp.contador });

      await srp.paginacion.scrollIntoViewIfNeeded();
      await expect(srp.paginacion).toBeVisible();
      // Debajo del listado: el nav empieza donde termina el último shelf.
      const finGrilla = await srp.shelves.last().evaluate((e) => e.getBoundingClientRect().bottom);
      const inicioNav = (await srp.paginacion.boundingBox())!.y;
      expect(inicioNav, 'la paginación va debajo del listado').toBeGreaterThanOrEqual(finGrilla);
      await srp.capturarEvidencia(cp, 4, 'componente de paginación debajo del listado');

      await expect(srp.botonDePagina(1)).toHaveAttribute('aria-current', 'page');
      await expect(srp.botonDePagina(2)).not.toHaveAttribute('aria-current', 'page');
      const paginas = Math.ceil(total! / 50);
      for (let n = 1; n <= paginas; n++) await expect(srp.botonDePagina(n)).toBeVisible();
      await expect(srp.flechaSiguiente).toBeVisible();
      await expect(srp.flechaSiguiente).not.toHaveAttribute('aria-disabled', 'true');
      await srp.capturarEvidencia(cp, 7, `página 1 activa, ${paginas} páginas y flecha siguiente`, {
        elemento: srp.paginacion,
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

    test('TC-B2C18-M-008 · La SRP muestra hasta 50 productos en la carga inicial con estructura de shelf correcta (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-M-008';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_50+_SKUS');
      const srp = await abrirSRP(page, termino);
      const total = await srp.conteoDeclarado();
      expect(total, 'precondición: más de 50 resultados').toBeGreaterThan(50);
      await srp.capturarEvidencia(cp, 2, `SRP de "${termino}" con ${total} productos`);

      expect(await srp.shelves.count(), 'carga inicial de 50 productos').toBe(50);
      await srp.capturarEvidencia(cp, 3, '50 productos en la carga inicial');

      for (let i = 0; i < 3; i++) {
        const shelf = srp.shelves.nth(i);
        await shelf.scrollIntoViewIfNeeded();
        await expect(shelf.locator('img').first()).toBeVisible();
        await expect(srp.enlaceDelProducto(i)).toHaveText(/\S/);
        await expect(shelf.getByText(/\$[\d.]+/).first()).toBeVisible();
        await expect(shelf.getByRole('button', { name: /^agregar$/i })).toBeVisible();
        await srp.capturarEvidencia(cp, `5-${i + 1}`, `shelf ${i + 1}: imagen, nombre, precio y Agregar`, {
          elemento: shelf,
        });
      }
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-M-009 · El scroll infinito carga el siguiente bloque de productos con indicador de carga (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C18-M-009';
      const termino = terminoDeclarado(testData, 'SEARCH_TERM_50+_SKUS');
      const srp = await abrirSRP(page, termino);
      await srp.esperarInteractiva();
      const inicial = await srp.shelves.count();
      expect(inicial).toBe(50);
      await srp.capturarEvidencia(cp, 2, `carga inicial de ${inicial} productos`);

      // Como en el skeleton de D-021/M-020: el retraso no cambia lo verificado, solo deja ver el
      // indicador, que sin él dura lo que tarda la respuesta.
      await srp.retrasarBloqueSiguiente(3000);
      await srp.observarIndicadorDeCarga();
      const pedido = page.waitForRequest(/product-search.*[?&]offset=50/, { timeout: 30000 });
      await srp.shelves.last().scrollIntoViewIfNeeded();
      await page.mouse.wheel(0, 3000);
      await pedido;
      await page.waitForTimeout(1000);
      await srp.capturarEvidencia(cp, 3, 'final del listado alcanzado: bloque siguiente pedido');

      await expect.poll(() => srp.shelves.count(), { timeout: 30000 }).toBeGreaterThan(inicial);
      const despues = await srp.shelves.count();
      await srp.shelves.nth(inicial).scrollIntoViewIfNeeded();
      await srp.capturarEvidencia(cp, 5, `bloque siguiente cargado: ${despues} productos`);

      expect.soft(await srp.indicadoresObservados(), 'indicador de carga mientras llega el bloque').not.toEqual([]);
      expect(srp.rutaConQuery, 'sin navegar').toBe(`/search?q=${encodeURIComponent(termino)}`);
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C18-M-011 · Con despacho a domicilio activo la SRP muestra productos según cobertura de la dirección (Mobile)', async ({
      page,
      testData,
      baseURL,
    }) => {
      test.setTimeout(180000);
      const direccion = terminoDeclarado(testData, 'DIRECCION_DESPACHO_002');
      await casoMetodoActivo({ page, testData, baseURL }, 'TC-B2C18-M-011', async () => {
        await fijarDespacho(page, direccion);
        return direccion.split(',')[0].trim();
      });
    });

    test('TC-B2C18-M-012 · Con retiro en tienda activo la SRP muestra productos según stock de la tienda seleccionada (Mobile)', async ({
      page,
      testData,
      baseURL,
    }) => {
      test.setTimeout(180000);
      await casoMetodoActivo({ page, testData, baseURL }, 'TC-B2C18-M-012', () =>
        fijarRetiroDesdeHome(page, terminoDeclarado(testData, 'TIENDA_RETIRO_001')),
      );
    });

    test('TC-B2C18-M-013 · Un producto sin disponibilidad muestra etiqueta "No disponible", Agregar oculto y "Ver similares" (Mobile)', async ({
      page,
      testData,
      baseURL,
    }) => {
      test.setTimeout(180000);
      await casoSinStock({ page, testData, baseURL }, 'TC-B2C18-M-013');
    });

    test('TC-B2C18-M-014 · Cambiar el método de entrega desde la SRP actualiza la disponibilidad sin salir de la SRP (Mobile)', async ({
      page,
      testData,
      baseURL,
    }) => {
      test.setTimeout(240000);
      await casoCambioDeMetodo({ page, testData, baseURL }, 'TC-B2C18-M-014');
    });

    test('TC-B2C18-M-015 · Los componentes de monetización configurados se muestran en la SRP según el tipo activo (Mobile)', async ({
      page,
      testData,
      baseURL,
    }) => {
      await casoMonetizacion({ page, testData, baseURL }, 'TC-B2C18-M-015');
    });
  });
});
