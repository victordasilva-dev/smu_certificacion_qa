import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP_1280, MOBILE } from './support/viewports';
import { ListadoProductos } from './pages/ListadoProductos';
import { ShelfProducto } from './pages/ShelfProducto';
import { CombinaLaPromoModal } from './pages/CombinaLaPromoModal';

/**
 * B2C-74 — Modal "Combina la promo" (drawer en Desktop, bottom sheet en Mobile).
 *
 * Están aquí los 8 TC que el ambiente permite ejecutar. De los 47 de la planilla, 39 quedaron
 * `Bloqueado` antes de generar su `test()`, por dos motivos:
 *
 * - **19 se corren con sesión iniciada** y su columna `Test data` no declara ninguna cuenta.
 * - **20 necesitan operar sobre dos o más variantes combinables** —llenar la barra alternando
 *   SKU, ordenar las que no tienen stock al final, ver el modal vacío, hacer scroll interno—, y
 *   en este ambiente **el modal renderiza una sola variante por promoción** (ver abajo). Sin una
 *   segunda tarjeta no hay con qué ejecutar esos pasos.
 *
 * Lo que la exploración estableció (ver `.qa/knowledge/combina-la-promo.json`):
 *
 * - **El contexto declarado sí trae promociones combinables.** `{PLP_URL}` (carnes_vacuno) tiene
 *   tres productos con el botón: dos comparten la promo `nxp-2x12490` (M=2) y el tercero lleva
 *   `nxp-3x11001` (M=3).
 * - **El modal muestra una sola variante aunque la promoción tenga dos.** El endpoint que lo
 *   alimenta —`product-search?refine=pmid=<promo>`— responde `total: 2` con los dos SKU del
 *   grupo, y el modal pinta únicamente el producto desde el que se abrió. Eso es lo que rechaza
 *   TC-74-D-004 y su par Mobile, y no es una limitación de data: el dato llega y no se usa.
 * - **El skeleton dura ~160 ms** y no usa la clase de Chakra, así que se detecta con un
 *   muestreador instalado en la página antes de abrir el modal, no preguntando desde fuera.
 */

/** La PLP que los TC declaran en su columna `Test data`, exigida. */
function plp(testData: Parameters<typeof token>[0]): string {
  const valor = token(testData, 'PLP_URL');
  if (!valor) throw new Error('Falta {PLP_URL} en el Excel de data: los TC lo declaran');
  return new URL(valor).pathname.slice(1);
}

/**
 * Abre el listado y devuelve la primera shelf cuyo botón "Combina la promo" está visible.
 *
 * Es literalmente el paso 2 de los casos —"localizar un producto con el botón visible en su
 * shelf"—: el producto no se elige, se toma el primero del contexto declarado que cumple la
 * precondición.
 */
async function primeraShelfConPromo(
  page: Page,
  testData: Parameters<typeof token>[0],
): Promise<{ listado: ListadoProductos; shelf: ShelfProducto }> {
  const listado = new ListadoProductos(page, plp(testData));
  await listado.goto();

  const total = await listado.shelves.count();
  for (let i = 0; i < total; i++) {
    const shelf = ShelfProducto.enIndice(page, i);
    if ((await shelf.combinaLaPromo.count()) > 0) return { listado, shelf };
  }
  throw new Error(
    `Ninguna shelf de ${plp(testData)} muestra el botón "Combina la promo": la precondición del caso no se cumple en este contexto`,
  );
}

test.describe('B2C-74 — Modal "Combina la promo"', () => {
  test.describe('Desktop 1280x900', () => {
    test.use(DESKTOP_1280);

    test('TC-74-D-001 · Apertura del sidebar como drawer lateral derecho con overlay (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-74-D-001';
      test.setTimeout(180000);

      const { listado, shelf } = await primeraShelfConPromo(page, testData);
      await listado.capturarEvidencia(cp, 2, 'shelf con el boton "Combina la promo"', {
        elemento: shelf.root,
      });

      await shelf.combinaLaPromo.click();
      const modal = new CombinaLaPromoModal(page);
      await expect(modal.root, 'el modal se abre').toBeVisible({ timeout: 30000 });
      await listado.capturarEvidencia(cp, 4, 'drawer abierto sobre el listado');

      // Pasos 4 y 5 — el drawer entra por la derecha y mide 400 px.
      const caja = await modal.caja();
      expect(caja.ancho, 'el sidebar mide 400 px de ancho').toBe(400);
      expect(
        caja.x + caja.ancho,
        `el sidebar queda anclado al borde derecho del viewport (${caja.viewport.width} px)`,
      ).toBeGreaterThanOrEqual(caja.viewport.width - 24);
      expect(caja.x, 'el sidebar no ocupa la mitad izquierda de la pantalla').toBeGreaterThan(
        caja.viewport.width / 2,
      );

      // Paso 6 — el overlay semitransparente sobre el contenido de la página.
      const fondo = await modal.fondoDelOverlay();
      expect(fondo, 'hay overlay sobre la página').not.toBe('');
      const alfa = Number((fondo.match(/rgba?\([^)]*?,\s*([\d.]+)\)/) ?? [])[1] ?? '1');
      expect(alfa, `el overlay es semitransparente (${fondo})`).toBeLessThan(1);

      expect(await modal.fondoBloqueado(), 'el scroll del fondo queda bloqueado').toBe(true);
      await listado.capturarEvidencia(cp, 6, 'overlay semitransparente sobre el listado');
      await listado.capturarEvidencia(cp);
    });

    test('TC-74-D-004 · Contenido del modal: header, barra de progreso, contador y grid de variantes (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-74-D-004';
      test.setTimeout(180000);

      const { listado, shelf } = await primeraShelfConPromo(page, testData);
      const skuDeOrigen = await shelf.imagen.first().getAttribute('src');
      await shelf.combinaLaPromo.click();

      const modal = new CombinaLaPromoModal(page);
      await expect(modal.root, 'el modal se abre').toBeVisible({ timeout: 30000 });
      await expect(modal.variantes.first(), 'el modal termina de cargar').toBeVisible({
        timeout: 30000,
      });
      await listado.capturarEvidencia(cp, 3, 'modal "Combina la promo" abierto');

      // Pasos 3 y 4 — el header.
      await expect(modal.titulo, 'el header muestra el título "Combina la promo"').toBeVisible();
      await expect(modal.botonCerrar, 'el header muestra el botón X de cierre').toBeVisible();

      const caja = await modal.caja();
      const cajaX = await modal.botonCerrar.boundingBox();
      expect(
        cajaX!.x,
        'la X está en la esquina superior derecha del drawer',
      ).toBeGreaterThan(caja.x + caja.ancho / 2);

      // Paso 5 — la barra tiene un segmento por cada unidad que pide la promo, y el contador
      // arranca en 0. El número de unidades lo declara la propia promo del contexto, no el TC.
      const progreso = await modal.progreso();
      expect(progreso, 'el modal muestra el contador "N / M productos"').not.toBeNull();
      expect(progreso!.n, 'el contador arranca en 0').toBe(0);

      const segmentos = await modal.segmentosDeLaBarra();
      expect(
        segmentos.length,
        `la barra se divide en tantos segmentos como unidades pide la promo (${progreso!.m})`,
      ).toBe(progreso!.m);
      const vacio = segmentos[0];
      expect(
        segmentos.every((s) => s === vacio),
        'los segmentos arrancan todos vacíos',
      ).toBe(true);
      await listado.capturarEvidencia(cp, 5, `barra con ${segmentos.length} segmentos vacios y contador 0/${progreso!.m}`, {
        elemento: modal.root,
      });

      // Paso 6 — el grid con las shelves de TODAS las variantes combinables. El backend las
      // entrega: `product-search?refine=pmid=<promo>` responde con el grupo completo.
      const mostradas = await modal.skusDeLasVariantes();
      const delBackend = await page.evaluate(async (sku) => {
        const tok = localStorage.getItem('access_token_Unimarc');
        const base =
          '/mobify/proxy/api/search/shopper-search/v1/organizations/f_ecom_bmkg_dev/product-search';
        const uno = await fetch(
          `${base}?siteId=Unimarc&q=${sku}&currency=CLP&locale=es-CL&expand=promotions&limit=5`,
          { headers: tok ? { Authorization: `Bearer ${tok}` } : {} },
        ).then((r) => r.json());
        const hit = (uno.hits ?? []).find((h: { productId: string }) => h.productId === sku);
        const pmid = hit?.productPromotions?.[0]?.promotionId;
        if (!pmid) return { pmid: null, ids: [] as string[] };
        const grupo = await fetch(
          `${base}?siteId=Unimarc&refine=pmid%3D${encodeURIComponent(pmid)}&currency=CLP&locale=es-CL&limit=25`,
          { headers: tok ? { Authorization: `Bearer ${tok}` } : {} },
        ).then((r) => r.json());
        return { pmid, ids: (grupo.hits ?? []).map((h: { productId: string }) => h.productId) };
      }, (skuDeOrigen ?? '').match(/(\d{12,}-[A-Z]+)/)?.[1] ?? '');

      // eslint-disable-next-line no-console
      console.log(
        `[${cp}] promo ${delBackend.pmid}: el backend entrega ${delBackend.ids.length} variante(s) ` +
          `(${delBackend.ids.join(', ')}) y el modal muestra ${mostradas.length} (${mostradas.join(', ')})`,
      );

      expect(
        mostradas.length,
        `el grid muestra todas las variantes combinables de la promo ${delBackend.pmid}; el backend ` +
          `entrega ${delBackend.ids.length} (${delBackend.ids.join(', ')}) y el modal renderiza ` +
          `${mostradas.length} (${mostradas.join(', ')})`,
      ).toBe(delBackend.ids.length);
      await listado.capturarEvidencia(cp);
    });

    test('TC-74-D-017 · Skeleton de carga mientras el modal carga los productos (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-74-D-017';
      test.setTimeout(180000);

      const { listado, shelf } = await primeraShelfConPromo(page, testData);
      const modal = new CombinaLaPromoModal(page);
      await modal.iniciarMuestreo();

      await shelf.combinaLaPromo.click();
      await expect(modal.root, 'el modal se abre').toBeVisible({ timeout: 30000 });
      await expect(modal.variantes.first(), 'el modal termina de cargar').toBeVisible({
        timeout: 30000,
      });

      expect(
        await modal.huboSkeleton(),
        'el modal pasa por un estado de carga antes de mostrar los productos',
      ).toBe(true);
      await modal.detenerMuestreo();
      await listado.capturarEvidencia(cp, 3, 'modal ya cargado tras el skeleton', {
        elemento: modal.root,
      });
      await listado.capturarEvidencia(cp);
    });

    test('TC-74-D-018 · Error al cargar los productos del modal: pantalla de error con Reintentar (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-74-D-018';
      test.setTimeout(180000);

      const { listado, shelf } = await primeraShelfConPromo(page, testData);

      // El fallo se provoca sobre el endpoint que alimenta el modal, que es el único que se
      // consulta al abrirlo: así el resto de la página sigue sana y lo que se observa es la
      // reacción del modal, no la de la PLP.
      await page.route('**/product-search?*pmid*', (route) =>
        route.fulfill({ status: 500, contentType: 'application/json', body: '{"detail":"error"}' }),
      );

      await shelf.combinaLaPromo.click();
      await expect(modalDe(page).root, 'el modal se abre').toBeVisible({ timeout: 30000 });
      await page.waitForTimeout(8000);
      await listado.capturarEvidencia(cp, 3, 'modal tras fallar la carga de los productos', {
        elemento: modalDe(page).root,
      });

      const modal = modalDe(page);
      await expect(
        modal.pantallaDeError,
        'ante el fallo de carga el modal muestra una pantalla de error',
      ).toBeVisible({ timeout: 30000 });
      await expect(modal.botonReintentar, 'la pantalla de error ofrece "Reintentar"').toBeVisible();
      await listado.capturarEvidencia(cp);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-74-M-001 · Apertura del bottom sheet anclado abajo y a ancho completo (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-74-M-001';
      test.setTimeout(180000);

      const { listado, shelf } = await primeraShelfConPromo(page, testData);
      await listado.capturarEvidencia(cp, 2, 'shelf con el boton "Combina la promo"', {
        elemento: shelf.root,
      });

      await shelf.combinaLaPromo.click();
      const modal = new CombinaLaPromoModal(page);
      await expect(modal.root, 'el modal se abre').toBeVisible({ timeout: 30000 });
      await listado.capturarEvidencia(cp, 3, 'bottom sheet abierto');

      const caja = await modal.caja();
      expect(caja.ancho, 'el bottom sheet ocupa el ancho del viewport').toBeGreaterThanOrEqual(
        caja.viewport.width - 2,
      );
      // "Anclado abajo" es que su borde inferior ALCANCE el del viewport, no que coincida al píxel:
      // en WebKit el sheet desborda unos píxeles —aquí llegó a 861 sobre 844— y una comprobación
      // por igualdad, aunque sea con tolerancia, convierte ese redondeo en un fallo del producto.
      // Es la misma trampa que ya anotaba [[plp-panel-filtros]] para el drawer de filtros.
      expect(
        caja.y + caja.alto,
        `el bottom sheet llega al borde inferior del viewport (${caja.y}+${caja.alto} sobre ${caja.viewport.height})`,
      ).toBeGreaterThanOrEqual(caja.viewport.height - 8);

      const fondo = await modal.fondoDelOverlay();
      expect(fondo, 'hay overlay sobre la página').not.toBe('');
      expect(await modal.fondoBloqueado(), 'el scroll del fondo queda bloqueado').toBe(true);
      await listado.capturarEvidencia(cp);
    });

    test('TC-74-M-004 · Contenido del bottom sheet: header, barra de progreso, contador y grid (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-74-M-004';
      test.setTimeout(180000);

      const { listado, shelf } = await primeraShelfConPromo(page, testData);
      const skuDeOrigen = await shelf.imagen.first().getAttribute('src');
      await shelf.combinaLaPromo.click();

      const modal = new CombinaLaPromoModal(page);
      await expect(modal.root, 'el modal se abre').toBeVisible({ timeout: 30000 });
      await expect(modal.variantes.first(), 'el modal termina de cargar').toBeVisible({
        timeout: 30000,
      });
      await listado.capturarEvidencia(cp, 3, 'bottom sheet "Combina la promo" abierto');

      await expect(modal.titulo, 'el header muestra el título "Combina la promo"').toBeVisible();
      await expect(modal.botonCerrar, 'el header muestra el botón X de cierre').toBeVisible();

      const progreso = await modal.progreso();
      expect(progreso, 'el modal muestra el contador "N / M productos"').not.toBeNull();
      expect(progreso!.n, 'el contador arranca en 0').toBe(0);

      const segmentos = await modal.segmentosDeLaBarra();
      expect(
        segmentos.length,
        `la barra se divide en tantos segmentos como unidades pide la promo (${progreso!.m})`,
      ).toBe(progreso!.m);
      await listado.capturarEvidencia(cp, 5, `barra con ${segmentos.length} segmentos y contador 0/${progreso!.m}`, {
        elemento: modal.root,
      });

      const mostradas = await modal.skusDeLasVariantes();
      const delBackend = await page.evaluate(async (sku) => {
        const tok = localStorage.getItem('access_token_Unimarc');
        const base =
          '/mobify/proxy/api/search/shopper-search/v1/organizations/f_ecom_bmkg_dev/product-search';
        const uno = await fetch(
          `${base}?siteId=Unimarc&q=${sku}&currency=CLP&locale=es-CL&expand=promotions&limit=5`,
          { headers: tok ? { Authorization: `Bearer ${tok}` } : {} },
        ).then((r) => r.json());
        const hit = (uno.hits ?? []).find((h: { productId: string }) => h.productId === sku);
        const pmid = hit?.productPromotions?.[0]?.promotionId;
        if (!pmid) return { pmid: null, ids: [] as string[] };
        const grupo = await fetch(
          `${base}?siteId=Unimarc&refine=pmid%3D${encodeURIComponent(pmid)}&currency=CLP&locale=es-CL&limit=25`,
          { headers: tok ? { Authorization: `Bearer ${tok}` } : {} },
        ).then((r) => r.json());
        return { pmid, ids: (grupo.hits ?? []).map((h: { productId: string }) => h.productId) };
      }, (skuDeOrigen ?? '').match(/(\d{12,}-[A-Z]+)/)?.[1] ?? '');

      // eslint-disable-next-line no-console
      console.log(
        `[${cp}] promo ${delBackend.pmid}: el backend entrega ${delBackend.ids.length} variante(s) ` +
          `y el bottom sheet muestra ${mostradas.length} (${mostradas.join(', ')})`,
      );

      expect(
        mostradas.length,
        `el grid muestra todas las variantes combinables de la promo ${delBackend.pmid}; el backend ` +
          `entrega ${delBackend.ids.length} (${delBackend.ids.join(', ')}) y el modal renderiza ` +
          `${mostradas.length} (${mostradas.join(', ')})`,
      ).toBe(delBackend.ids.length);
      await listado.capturarEvidencia(cp);
    });

    test('TC-74-M-017 · Skeleton de carga mientras el bottom sheet carga los productos (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-74-M-017';
      test.setTimeout(180000);

      const { listado, shelf } = await primeraShelfConPromo(page, testData);
      const modal = new CombinaLaPromoModal(page);
      await modal.iniciarMuestreo();

      await shelf.combinaLaPromo.click();
      await expect(modal.root, 'el modal se abre').toBeVisible({ timeout: 30000 });
      await expect(modal.variantes.first(), 'el modal termina de cargar').toBeVisible({
        timeout: 30000,
      });

      expect(
        await modal.huboSkeleton(),
        'el modal pasa por un estado de carga antes de mostrar los productos',
      ).toBe(true);
      await modal.detenerMuestreo();
      await listado.capturarEvidencia(cp, 3, 'bottom sheet ya cargado tras el skeleton', {
        elemento: modal.root,
      });
      await listado.capturarEvidencia(cp);
    });

    test('TC-74-M-018 · Error al cargar los productos del bottom sheet: pantalla de error con Reintentar (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-74-M-018';
      test.setTimeout(180000);

      const { listado, shelf } = await primeraShelfConPromo(page, testData);

      await page.route('**/product-search?*pmid*', (route) =>
        route.fulfill({ status: 500, contentType: 'application/json', body: '{"detail":"error"}' }),
      );

      await shelf.combinaLaPromo.click();
      await expect(modalDe(page).root, 'el modal se abre').toBeVisible({ timeout: 30000 });
      await page.waitForTimeout(8000);
      await listado.capturarEvidencia(cp, 3, 'bottom sheet tras fallar la carga', {
        elemento: modalDe(page).root,
      });

      const modal = modalDe(page);
      await expect(
        modal.pantallaDeError,
        'ante el fallo de carga el modal muestra una pantalla de error',
      ).toBeVisible({ timeout: 30000 });
      await expect(modal.botonReintentar, 'la pantalla de error ofrece "Reintentar"').toBeVisible();
      await listado.capturarEvidencia(cp);
    });
  });
});

/** Atajo para los casos que construyen el modal después de provocar el fallo de red. */
function modalDe(page: Page): CombinaLaPromoModal {
  return new CombinaLaPromoModal(page);
}
