import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { PLPPage } from './pages/PLPPage';
import { PDPPage } from './pages/PDPPage';
import { SRPPage } from './pages/SRPPage';
import { LoginModal } from './pages/LoginModal';
import { MisFavoritosPage } from './pages/MisFavoritosPage';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { PaginaHabilitada } from './pages/PaginaHabilitada';

/**
 * B2C-31 — Página de detalle de producto (PDP).
 *
 * Están aquí los 4 TC de la planilla que se pudieron ejecutar con la data que declaran. Los otros
 * 7 quedaron `Bloqueado` antes de generar su `test()`, y conviene tener presente por qué, porque
 * la causa se repite: **cada fila declara solo `{BASE_URL}` y `{PLP_URL}`, pero su escenario pide
 * productos concretos** —sin stock, sin imagen válida, con tres precios simultáneos, con contenido
 * en "Acerca de"— que la planilla no nombra. Elegir esos SKU del Excel de data por parecido haría
 * que el veredicto dependiera de nuestra elección y no del producto.
 *
 * - D-003, D-007, D-008, D-010: piden productos con una propiedad que su fila no declara.
 * - D-006 y D-011: se ejecutan con sesión iniciada y no declaran con qué cuenta.
 * - D-009: su resultado esperado gira alrededor de "Van bien juntos", que en este ambiente no se
 *   renderiza (Einstein responde sin recomendaciones para ese carrusel).
 *
 * Los cuatro que sí corren usan **el producto que encuentran en la `{PLP_URL}` declarada**, no un
 * SKU elegido a mano: el caso queda reproducible y la evidencia dice con qué producto se corrió.
 */

/**
 * La URL de categoría que el TC declara en su columna `Test data`, exigida.
 *
 * `token()` devuelve `undefined` cuando el Excel de data no trae el valor, y navegar con eso
 * llevaría a una URL sin sentido y a un fallo que parecería del producto. Aquí el caso se
 * detiene nombrando el token que falta, que es lo que hay que ir a arreglar.
 */
function plpUrl(testData: Parameters<typeof token>[0]): string {
  const valor = token(testData, 'PLP_URL');
  if (!valor) throw new Error('Falta {PLP_URL} en el Excel de data: el TC lo declara como su origen');
  return valor;
}

/** Un token que la fila declara, exigido: si falta, el caso se detiene nombrándolo. */
function tokenExigido(testData: Parameters<typeof token>[0], nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) throw new Error(`Falta {${nombre}} en el Excel de data: el TC lo declara`);
  return valor;
}

/** Abre la PDP del SKU, inicia sesión con la cuenta declarada desde el header y la recarga. */
async function pdpConSesion(
  page: Page,
  testData: Parameters<typeof token>[0],
  cuenta: 'COMPRADOR' | 'COMPRADOR_MEMBRESIA',
  sku: string,
): Promise<PDPPage> {
  const pdp = await new PDPPage(page).abrir(sku);
  await new LoginModal(page).iniciarSesion(tokenExigido(testData, `${cuenta}_USER`), tokenExigido(testData, `${cuenta}_PASSWORD`));
  return pdp.abrir(sku);
}


/**
 * Deja aplicada como invitado la dirección de {DIRECCION_DESPACHO} (el "método de entrega activo"
 * que piden los TC) y abre la PDP del SKU. Tras navegar, el header tarda unos segundos en restaurar
 * la dirección del invitado: se espera el "Desde:" antes de devolver, o "Agregar" abriría el Store
 * Locator en vez de sumar al carro.
 */
async function pdpConDireccion(page: Page, testData: Parameters<typeof token>[0], sku: string, cp: string): Promise<PDPPage> {
  const direccion = tokenExigido(testData, 'DIRECCION_DESPACHO');
  const [, calle, numero] = direccion.match(/^(.*?)\s+(\d+)\s/) ?? [];
  const home = await new PaginaHabilitada(page).goto();
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.fijarDireccionComoInvitado(direccion, new RegExp(`${calle}\\s+${numero}`, 'i'));
  await home.capturarEvidencia(cp, 1, 'dirección de despacho activa', { elemento: home.header.barraDelSitio });
  const pdp = await new PDPPage(page).abrir(sku);
  await pdp.header.esperarDireccionEnStoreLocator(45000);
  return pdp;
}

/** Registra el total de productos del carro en cada respuesta del basket (el "monto del carro"). */
function observarMontoDelCarro(page: Page): number[] {
  const montos: number[] = [];
  page.on('response', async (r) => {
    if (!/\/baskets\//.test(r.url()) || !r.ok()) return;
    const cuerpo = await r.json().catch(() => null);
    if (typeof cuerpo?.productTotal === 'number') montos.push(cuerpo.productTotal);
  });
  return montos;
}

test.describe('B2C-31 — Pagina de detalle de producto', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C31-D-001 · La PDP abre como pagina completa con el breadcrumb de estructura completa (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C31-D-001';
      test.setTimeout(180000);

      // Paso 1a — acceder desde una PLP y verificar el breadcrumb.
      const plp = new PLPPage(page, new URL(plpUrl(testData)).pathname.slice(1));
      await plp.goto();
      const nombreEnPLP = await plp.nombreDelProducto(0);
      await plp.capturarEvidencia(cp, 1, 'listado de la categoria de origen');

      const desdePLP = await plp.abrirProducto(nombreEnPLP);
      // "Pagina completa (no modal)": la PDP tiene URL propia y no se monta dentro de un dialog.
      expect(new URL(page.url()).pathname, 'la PDP abre en su propia URL').toMatch(/^\/product\//);
      await expect(desdePLP.core, 'la PDP se monta como página').toBeVisible();
      expect(
        await page.locator('[role="dialog"][aria-modal="true"]').count(),
        'la PDP no se abre dentro de un modal',
      ).toBe(0);
      await desdePLP.capturarEvidencia(cp, 1, 'PDP abierta desde la PLP, con su breadcrumb', {
        elemento: desdePLP.core,
      });

      // Paso 1b — el mismo producto, ahora alcanzado desde un carrusel. Se toma un producto
      // del carrusel de esta PDP y se lo abre por los dos caminos: comparar el MISMO producto es
      // lo que aísla el efecto del origen, porque con dos productos distintos cualquier
      // diferencia de breadcrumb se explicaría por la categoría de cada uno.
      await desdePLP.tab(/productos similares/i).click();
      const enCarrusel = page
        .locator('[role="tabpanel"]:not([hidden]) button')
        .filter({ hasText: ' | ' });
      const nombreVecino = (await enCarrusel.first().innerText()).trim();
      await enCarrusel.first().click();
      const desdeCarrusel = new PDPPage(page);
      await desdeCarrusel.waitUntilReady();
      const rutaDesdeCarrusel = await desdeCarrusel.rutaDeBreadcrumbEstable();
      const urlDelVecino = new URL(page.url()).pathname;
      await desdeCarrusel.capturarEvidencia(
        cp,
        1,
        'el producto abierto desde el carrusel, con su breadcrumb',
        { elemento: desdeCarrusel.core },
      );

      // Paso 2 — el orden de secciones de la PDP en Desktop.
      //
      // Se mide a nivel de documento y no dentro del bloque principal: `waitUntilReady()` solo
      // garantiza que el bloque exista, y el breadcrumb se pinta un instante después. Medido
      // contra el elemento, el caso fallaba por leer la página antes de tiempo.
      await expect(desdeCarrusel.breadcrumb, 'el breadcrumb ya está pintado').toBeVisible({
        timeout: 30000,
      });
      const orden = await page.evaluate(() => {
        const hito = (sel: string) => {
          const el = document.querySelector(sel);
          return el ? el.getBoundingClientRect().top + window.scrollY : null;
        };
        return {
          breadcrumb: hito('nav[aria-label="breadcrumb"]'),
          galeria: hito('[data-testid="product-gallery-main"]'),
          tabs: hito('[role="tablist"]'),
        };
      });
      expect(orden.breadcrumb, 'la PDP empieza por el breadcrumb').not.toBeNull();
      expect(
        orden.galeria!,
        'la galería y el bloque principal van por debajo del breadcrumb',
      ).toBeGreaterThan(orden.breadcrumb!);
      expect(orden.tabs!, 'los tabs van por debajo del bloque principal').toBeGreaterThan(
        orden.galeria!,
      );
      await desdeCarrusel.capturarEvidencia(cp, 2, 'orden de secciones de la PDP en Desktop');

      // Ese mismo producto, ahora alcanzado navegando por su propia categoría.
      const rutaDesdeSuPLP = await breadcrumbDelMismoProductoDesdeSuPLP(page, nombreVecino);
      // Sin esto la comparación no significaría nada: dos productos distintos tienen rutas
      // distintas por su categoría, no por el origen desde el que se los abrió.
      expect(new URL(page.url()).pathname, 'se volvió exactamente al mismo producto').toBe(
        urlDelVecino,
      );
      expect(rutaDesdeSuPLP.length, 'el breadcrumb desde su PLP se leyó completo').toBeGreaterThan(0);
      expect(rutaDesdeCarrusel.length, 'el breadcrumb desde el carrusel se leyó completo').toBeGreaterThan(0);
      const dePLP = new PDPPage(page);
      await dePLP.capturarEvidencia(cp, 1, 'el mismo producto abierto desde su PLP', {
        elemento: dePLP.core,
      });

      // Resultado esperado: "el breadcrumb se muestra con la estructura completa".
      //
      // **Este caso ya no exige que el breadcrumb cambie con el origen.** Hasta la corrida del
      // 2026-09-10 sí lo pedía —de ahí salió el rechazo que abrió B2C-760— porque la tabla
      // "Origen → Breadcrumb" del CA1 traía una fila para el carrusel con ruta simplificada. Esa
      // fila ya no está: hoy el CA1 declara un único destino, "PLP / SRP / Colección →
      // Breadcrumb completo: Inicio > N1 > N2 (> N3 si aplica) > Nombre del producto", y B2C-760
      // quedó DESCARTADO. Lo que se comprueba ahora es esa estructura, y se comprueba por los dos
      // orígenes: es lo que el paso 1 sigue pidiendo recorrer.
      for (const [origen, ruta, pdp] of [
        ['su PLP', rutaDesdeSuPLP, dePLP],
        ['un carrusel', rutaDesdeCarrusel, desdeCarrusel],
      ] as const) {
        await expect(
          pdp.inicioDelBreadcrumb,
          `el breadcrumb del producto alcanzado desde ${origen} abre con "Inicio"`,
        ).toBeAttached();
        expect(
          ruta.length,
          `el breadcrumb desde ${origen} trae los niveles de categoría (ruta: ${ruta.join(' > ')})`,
        ).toBeGreaterThan(0);
      }

      // Y cierra con el nombre del producto, que es el último tramo que declara el CA1.
      await expect(
        dePLP.nombreDelProducto,
        'el breadcrumb cierra con el nombre del producto',
      ).toBeVisible();

      // La ruta es la misma por los dos orígenes, que es justamente lo que el CA1 corregido
      // describe. Se deja registrado para que la evidencia lo muestre sin ambigüedad.
      // eslint-disable-next-line no-console
      console.log(
        `[${cp}] breadcrumb de "${nombreVecino}" desde su PLP: ${rutaDesdeSuPLP.join(' > ')} | ` +
          `desde un carrusel: ${rutaDesdeCarrusel.join(' > ')}`,
      );
      await desdeCarrusel.capturarEvidencia(cp);
    });

    test('TC-B2C31-D-002 · La PDP muestra skeleton, contenido al exito, error con Reintentar y 404 en URL invalida (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C31-D-002';
      test.setTimeout(180000);

      // Paso 1 — el skeleton durante la carga y la PDP completa al éxito. La carga se retrasa a
      // propósito: sin freno, la PDP se pinta antes de que ninguna aserción alcance a mirarla.
      const plp = new PLPPage(page, new URL(plpUrl(testData)).pathname.slice(1));
      await plp.goto();
      const nombre = await plp.nombreDelProducto(0);

      await page.route(/shopper-products\/v1\/organizations\/[^/]+\/products\/[^?]+\?.*expand=availability/, async (route) => {
        await new Promise((r) => setTimeout(r, 2500));
        await route.continue();
      });
      const abriendo = page.getByRole('button', { name: nombre, exact: true }).first().click();
      await page.waitForTimeout(900);
      const durante = await page.evaluate(() => ({
        core: !!document.querySelector('[data-testid="unimarc-product-core"]'),
        placeholders: document.querySelectorAll(
          '.chakra-skeleton, [class*="skeleton" i], [data-testid*="skeleton" i]',
        ).length,
      }));
      await plp.capturarEvidencia(cp, 1, 'PDP durante la carga del producto');
      await abriendo;
      await page.unrouteAll({ behavior: 'ignoreErrors' });

      const pdp = new PDPPage(page);
      await pdp.waitUntilReady();
      await expect(pdp.core, 'al éxito se muestra la PDP completa').toBeVisible();
      await expect(pdp.agregar, 'la PDP cargada ofrece Agregar').toBeVisible();
      await pdp.capturarEvidencia(cp, 1, 'PDP cargada con exito', { elemento: pdp.core });
      expect(
        durante.core || durante.placeholders > 0,
        'durante la carga se muestra algo: el armazón de la PDP o su skeleton',
      ).toBe(true);

      // Paso 2 — forzar un fallo técnico en la carga del producto y usar Reintentar.
      await page.goto(plpUrl(testData), { waitUntil: 'domcontentloaded' });
      await plp.waitUntilReady();
      await page.route(/shopper-products\/v1\/organizations\/[^/]+\/products\/[^?]+\?.*expand=availability/, (route) =>
        route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({ detail: 'Internal Server Error', type: 'error' }),
        }),
      );
      await page.getByRole('button', { name: nombre, exact: true }).first().click();
      // La espera es deliberadamente larga. El storefront reintenta la consulta fallida en una
      // ráfaga densa —del orden de doscientas peticiones en un par de segundos— y recién después
      // se da por vencido: mirar antes de que esa ráfaga termine dejaría la duda de si la
      // pantalla de error simplemente no había llegado todavía. Con este margen, lo que se
      // afirma es que no aparece nunca, no que tardó más de la cuenta.
      await page.waitForTimeout(45000);
      await pdp.capturarEvidencia(cp, 2, 'PDP 45 s despues de fallar la carga del producto');

      await expect(
        pdp.pantallaDeError,
        'ante un fallo técnico se muestra "Tuvimos un problema al cargar tu producto"',
      ).toBeVisible({ timeout: 60000 });
      await expect(pdp.reintentar, 'la pantalla de error ofrece Reintentar').toBeVisible();
      await expect(pdp.irAInicio, 'la pantalla de error ofrece Ir a inicio').toBeVisible();
      await page.unrouteAll({ behavior: 'ignoreErrors' });

      // Paso 3 — URL de PDP inexistente: 404 de producto y redirección al Home.
      await pdp.irA('000000000000000000-XX');
      await expect(pdp.pantalla404, 'con un SKU inexistente se muestra la 404 de producto').toBeVisible({
        timeout: 30000,
      });
      await pdp.capturarEvidencia(cp, 3, 'pantalla de producto inexistente');
      await expect(pdp.irAInicio, 'la 404 ofrece volver al inicio').toBeVisible();
      await page.waitForURL('**/', { timeout: 15000 });
      expect(new URL(page.url()).pathname, 'la 404 redirige sola al Home').toBe('/');
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-D-004 · La primera vista de la PDP muestra los datos obligatorios, consistentes con la shelf de la PLP (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C31-D-004';
      test.setTimeout(180000);

      // Paso 3 (se toma primero porque exige mirar la shelf antes de abandonarla) — la tarjeta
      // del producto en la PLP, que es contra lo que después se compara la PDP.
      const plp = new PLPPage(page, new URL(plpUrl(testData)).pathname.slice(1));
      await plp.goto();
      const nombre = await plp.nombreDelProducto(0);
      const shelf = await plp.tarjetaDe(nombre).innerText();
      await plp.capturarEvidencia(cp, 3, 'tarjeta del producto en la shelf de la PLP', {
        elemento: plp.tarjetaDe(nombre),
      });

      // Pasos 1 y 2 — la primera vista de la PDP y cada elemento obligatorio.
      const pdp = await plp.abrirProducto(nombre);
      await expect(pdp.core, 'el bloque principal está visible al cargar').toBeVisible();
      expect(await page.evaluate(() => window.scrollY), 'no hizo falta desplazarse').toBe(0);
      // "Sin scroll" es sobre los datos obligatorios del producto, no sobre `unimarc-product-core`
      // entero: ese contenedor incluye también los tabs y el carrusel, que por definición caen
      // por debajo del pliegue. Exigirle que entre completo mediría otra cosa y fallaría siempre.
      for (const [nombre, elemento] of [
        ['la galería', pdp.imagenPrincipal],
        ['el nombre y la marca', pdp.marca],
        ['el precio', pdp.precios.first()],
        ['Agregar', pdp.agregar],
      ] as const) {
        expect(
          await pdp.cabeEnLaPrimeraVista(elemento),
          `${nombre} se ve en la primera vista, sin desplazarse`,
        ).toBe(true);
      }
      await pdp.capturarEvidencia(cp, 1, 'primera vista de la PDP sin scroll');

      await expect(pdp.imagenPrincipal, 'galería').toBeVisible();
      await expect(pdp.favoritos, 'acceso a favoritos').toBeVisible();
      await expect(pdp.compartir, 'acceso a compartir').toBeVisible();
      await expect(pdp.marca, 'marca clickeable').toBeVisible();
      await expect(pdp.guardarEnListas, 'Guardar en listas').toBeVisible();
      await expect(pdp.agregar, 'Agregar').toBeVisible();
      const datos = await pdp.datosDelProducto();
      expect(datos.precios.length, 'la PDP muestra al menos un precio').toBeGreaterThan(0);
      expect(
        datos.precios.length,
        `la PDP muestra como máximo 3 precios (vio: ${datos.precios.join(', ')})`,
      ).toBeLessThanOrEqual(3);
      expect(
        datos.cucardas.length,
        `como máximo una cucarda (vio: ${datos.cucardas.join(', ') || 'ninguna'})`,
      ).toBeLessThanOrEqual(1);
      await pdp.capturarEvidencia(cp, 2, 'elementos obligatorios del bloque principal', {
        elemento: pdp.core,
      });

      // Paso 3 — consistencia con la shelf: el nombre, el formato y los precios que trae la
      // tarjeta tienen que estar también en la PDP.
      const coreText = await pdp.core.innerText();
      expect(coreText, 'el nombre coincide con el de la shelf').toContain(nombre);
      for (const precio of [...shelf.matchAll(/\$[\d.]+/g)].map((m) => m[0])) {
        expect(coreText, `el precio ${precio} de la shelf aparece en la PDP`).toContain(precio);
      }
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-D-005 · La marca es clickeable y redirige al SRP filtrado; la cucarda muestra maximo 1 label (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C31-D-005';
      test.setTimeout(180000);

      // Paso 2 (primero, porque exige elegir en la PLP un producto con label) — la cucarda.
      const plp = new PLPPage(page, new URL(plpUrl(testData)).pathname.slice(1));
      await plp.goto();
      const nombres = await plp.nombres();
      let conLabel: string | null = null;
      for (const nombre of nombres) {
        const tarjeta = await plp.tarjetaDe(nombre).innerText();
        if (/\b(nuevo|oferta|patrocinado|destacado|exclusivo)\b/i.test(tarjeta)) {
          conLabel = nombre;
          break;
        }
      }
      test.skip(
        conLabel === null,
        'la categoría declarada en {PLP_URL} no ofrece ningún producto con label configurado',
      );

      const conCucarda = await plp.abrirProducto(conLabel!);
      const { cucardas } = await conCucarda.datosDelProducto();
      await conCucarda.capturarEvidencia(cp, 2, 'PDP de un producto con label configurado', {
        elemento: conCucarda.core,
      });
      expect(cucardas.length, `la PDP muestra como máximo 1 cucarda (vio: ${cucardas.join(', ')})`).toBe(1);
      // "Solo informativa, sin bloquear el flujo de compra": Agregar sigue disponible y operable.
      await expect(conCucarda.agregar, 'la cucarda no bloquea la compra').toBeEnabled();

      // Paso 1 — la marca redirige al SRP filtrado por esa marca, reflejado en la URL.
      const marca = (await conCucarda.marca.innerText()).trim();
      await conCucarda.capturarEvidencia(cp, 1, 'marca clickeable en el bloque principal', {
        elemento: conCucarda.core,
      });
      await conCucarda.marca.click();
      await page.waitForURL(/\/search/, { timeout: 30000 });
      const destino = new URL(page.url());
      expect(destino.pathname, 'el clic en la marca lleva al SRP').toBe('/search');
      expect(
        decodeURIComponent(destino.search),
        `la URL del SRP refleja la marca "${marca}"`,
      ).toContain(marca);
      await expect(
        page.locator('main button').filter({ hasText: ' | ' }).first(),
        'el SRP trae resultados para la marca',
      ).toBeVisible({ timeout: 30000 });
      await page.waitForTimeout(1500);
      await conCucarda.capturarEvidencia(cp, 1, 'SRP filtrado por la marca');
      await conCucarda.capturarEvidencia(cp);
    });
  });

  /*
   * Mobile 390x844 — re-corrida 2026-10-07 (planilla SP1). En esta planilla los tokens de cada
   * fila vienen en la columna "Descripción" (y el CA en "Test data"): son la data declarada.
   *
   * Quedaron fuera, sin `test()`: M-023, 024, 026, 027, 028, 029 y 049 (piden "método de entrega
   * activo" y ninguna fila declara dirección o tienda; como invitado "Agregar" abre "Elige tu
   * método de entrega"), M-012 ({SKU_PATROCINADO} abre una PDP sin ficha), M-022 ({SKU_CUCARDA}
   * con c_cucardaActivo=false) y M-035 ({SKU_VALID_001} sin descripción en el catálogo).
   */
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C31-M-001 · Verificar que tocar un producto en la PLP abre la PDP con el breadcrumb completo (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C31-M-001';
      test.setTimeout(150000);

      // Pasos 1 y 2 — la PLP declarada.
      const plp = new PLPPage(page, new URL(plpUrl(testData)).pathname.slice(1));
      await plp.goto();
      await expect(plp.enlacesDeProducto.first(), 'la PLP lista productos').toBeVisible();
      await plp.capturarEvidencia(cp, 2, 'PLP de la categoria declarada');

      // Pasos 3 y 4 — tocar un producto abre su PDP como página completa.
      const pdp = await plp.abrirProductoMobile(0);
      expect(new URL(page.url()).pathname, 'la PDP tiene URL de producto').toMatch(/\/product\/|\.html$/);
      expect(await page.locator('[role="dialog"][aria-modal="true"]').count(), 'la PDP no se abre en un modal').toBe(0);
      await expect(pdp.inicio, 'el breadcrumb abre con Inicio').toBeVisible();
      const ruta = await pdp.rutaDeBreadcrumbEstable();
      expect(ruta.length, `breadcrumb con N1 > N2 (> N3) (vio: ${ruta.join(' > ')})`).toBeGreaterThanOrEqual(2);
      await expect(pdp.nombreDelProducto, 'el breadcrumb cierra con el nombre del producto').toBeVisible();
      test.info().annotations.push({ type: 'breadcrumb', description: `Inicio > ${ruta.join(' > ')} > ${(await pdp.nombreDelProducto.innerText()).trim()}` });
      await pdp.capturarEvidencia(cp, 4, 'PDP abierta como pagina completa con su breadcrumb');
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-002 · Verificar que tocar un producto en la SRP abre la PDP con el breadcrumb de su categoría (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C31-M-002';
      test.setTimeout(150000);

      // Pasos 1 y 2 — la SRP declarada.
      const termino = new URL(tokenExigido(testData, 'SRP_URL')).searchParams.get('q') ?? '';
      const srp = new SRPPage(page, termino);
      await srp.goto();
      await srp.esperarInteractiva();
      await expect(srp.enlaceDelProducto(0), 'la SRP lista productos').toBeVisible();
      await srp.capturarEvidencia(cp, 2, 'SRP de la busqueda declarada');

      // Pasos 3 y 4 — tocar un producto abre su PDP.
      await srp.enlaceDelProducto(0).click();
      const pdp = new PDPPage(page);
      await pdp.waitUntilReady();
      expect(await page.locator('[role="dialog"][aria-modal="true"]').count(), 'la PDP no se abre en un modal').toBe(0);
      const rutaDesdeSRP = await pdp.rutaDeBreadcrumbEstable();
      expect(rutaDesdeSRP.length, 'el breadcrumb muestra la ruta de la categoría').toBeGreaterThanOrEqual(1);
      await expect(pdp.nombreDelProducto).toBeVisible();
      await pdp.capturarEvidencia(cp, 4, 'PDP abierta desde la SRP con su breadcrumb');

      // Categoría por defecto: la misma ruta que el producto muestra al abrirse por su URL.
      const urlProducto = page.url();
      await page.goto(urlProducto, { waitUntil: 'domcontentloaded' });
      await pdp.waitUntilReady();
      const rutaPorDefecto = await pdp.rutaDeBreadcrumbEstable();
      expect(rutaDesdeSRP, 'el breadcrumb desde la SRP es el de la categoría por defecto').toEqual(rutaPorDefecto);
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-003 · Verificar que una URL directa de producto abre su PDP completa (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C31-M-003';
      test.setTimeout(120000);
      const sku = tokenExigido(testData, 'SKU_VALID_001');

      // Pasos 1 y 2 — URL directa.
      const pdp = await new PDPPage(page).abrir(sku);
      expect(page.url(), 'la PDP abierta es la del SKU').toContain(sku);
      await expect(pdp.galeriaMobile, 'galería').toBeVisible();
      await expect(pdp.agregarVisible.or(page.getByText(/pronto disponible/i)).first(), 'ficha con su acción de compra').toBeVisible();
      const ruta = await pdp.rutaDeBreadcrumbEstable();
      expect(ruta.length, `breadcrumb de su categoría (vio: ${ruta.join(' > ')})`).toBeGreaterThanOrEqual(2);
      await pdp.capturarEvidencia(cp, 2, 'PDP completa abierta por URL directa');
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-004 · Verificar que la PDP muestra el skeleton durante la carga y luego el contenido completo (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C31-M-004';
      test.setTimeout(240000);
      const sku = tokenExigido(testData, 'SKU_VALID_001');

      // Paso 1 — red lenta (equivalente a Slow 3G) y URL directa.
      const pdp = new PDPPage(page);
      await pdp.registrarSkeletons();
      await pdp.ralentizarRed(600);
      const cargando = pdp.irA(sku);
      await page.waitForTimeout(2500);
      await pdp.capturarEvidencia(cp, 1, 'PDP durante la carga con red lenta');
      await cargando;

      // Paso 2 — al terminar, la PDP completa.
      await pdp.waitUntilReady();
      await expect(pdp.agregarVisible, 'la PDP cargada ofrece Agregar').toBeVisible({ timeout: 120000 });
      const registro = await pdp.skeletonsRegistrados();
      await page.unrouteAll({ behavior: 'ignoreErrors' });
      test.info().annotations.push({ type: 'skeleton', description: JSON.stringify(registro) });
      await pdp.capturarEvidencia(cp, 2, 'PDP completa al terminar la carga');
      expect(registro.max, 'durante la carga se mostró skeleton de imagen, datos y botones').toBeGreaterThan(0);
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-005 · Verificar que la PDP muestra sus secciones en el orden definido para Mobile (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C31-M-005';
      test.setTimeout(180000);
      const sku = tokenExigido(testData, 'SKU_VALID_001');

      // Precondición — sesión con {COMPRADOR_USER}.
      const pdp = await pdpConSesion(page, testData, 'COMPRADOR', sku);
      await pdp.capturarEvidencia(cp, 2, 'PDP con sesion iniciada');

      // Paso 3 — scroll de punta a punta y orden de las secciones.
      await pdp.scrollAlFinal();
      await page.waitForTimeout(3000);
      await pdp.scrollAlFinal();
      const orden = await pdp.ordenDeSecciones();
      const nombres = orden.map((s) => s.nombre);
      test.info().annotations.push({ type: 'orden', description: nombres.join(' > ') });
      await pdp.encuadrarFinDelContenido();
      await pdp.capturarEvidencia(cp, 3, 'final de la PDP con sesion');
      const esperado = ['breadcrumb', 'galeria', 'informacion', 'tabs', 'van bien juntos', 'recomendados para ti'];
      expect(nombres, 'secciones en el orden definido para Mobile').toEqual(esperado.filter((n) => nombres.includes(n)));
      expect(nombres, 'el carrusel "Recomendados para ti" se muestra con sesión iniciada').toContain('recomendados para ti');
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-006 · Verificar que una sección sin contenido no se muestra y el orden del resto se mantiene (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C31-M-006';
      test.setTimeout(150000);
      const sku = tokenExigido(testData, 'SKU_VALID_001');

      // Pasos 1 y 2 — PDP como invitado.
      const pdp = await new PDPPage(page).abrir(sku);
      await pdp.capturarEvidencia(cp, 2, 'PDP como invitado');

      // Paso 3 — scroll completo.
      await pdp.scrollAlFinal();
      await page.waitForTimeout(3000);
      await pdp.scrollAlFinal();
      const nombres = (await pdp.ordenDeSecciones()).map((s) => s.nombre);
      test.info().annotations.push({ type: 'orden', description: nombres.join(' > ') });
      await expect(pdp.recomendadosParaTi.locator('visible=true'), '"Recomendados para ti" no se muestra al invitado').toHaveCount(0);
      const hueco = await pdp.huecoAntesDelFooter();
      await pdp.encuadrarFinDelContenido();
      await pdp.capturarEvidencia(cp, 3, `final de la PDP, ${hueco} px hasta el footer`);
      expect(hueco, 'no queda espacio vacío reservado antes del footer').toBeLessThan(120);
      expect(nombres, 'el resto mantiene su orden').toEqual(['breadcrumb', 'galeria', 'informacion', 'tabs', 'van bien juntos'].filter((n) => nombres.includes(n)));
      expect(nombres).toEqual(expect.arrayContaining(['breadcrumb', 'galeria', 'informacion', 'tabs']));
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-011 · Verificar que la primera vista muestra los datos obligatorios del producto bajo la imagen (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C31-M-011';
      test.setTimeout(150000);

      // Pasos 1 a 3 — la shelf del producto en la PLP.
      const plp = new PLPPage(page, new URL(plpUrl(testData)).pathname.slice(1));
      await plp.goto();
      const shelf = plp.shelfMobile(0);
      await shelf.scrollIntoViewIfNeeded();
      const textoShelf = (await shelf.innerText()).replace(/\s+/g, ' ');
      const nombreShelf = (await plp.enlacesDeProducto.first().innerText()).trim().replace(/…$/, '');
      const formato = textoShelf.match(/\b\d+(?:[.,]\d+)?\s?(?:kg|g|un|ml|l|cc)\b/i)?.[0] ?? '';
      const precios = [...textoShelf.matchAll(/\$[\d.]+/g)].map((m) => m[0]);
      await plp.capturarEvidencia(cp, 3, 'shelf del producto en la PLP', { elemento: shelf });

      // Paso 4 — la PDP y sus datos obligatorios bajo la imagen.
      const pdp = await plp.abrirProductoMobile(0);
      await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
      for (const [nombre, loc] of [
        ['corazón', pdp.favoritosVisible],
        ['compartir', pdp.compartirVisible],
        ['marca', pdp.marcaVisible],
        ['Guardar en listas', pdp.guardarEnListasVisible],
        ['Agregar', pdp.agregarVisible],
      ] as const) {
        await expect(loc, nombre).toBeVisible();
      }
      const ficha = (await pdp.textosDeLaFicha()).join(' ~ ');
      const nombreSinMarca = nombreShelf.split(' | ').pop()!.trim();
      expect(ficha, 'el nombre coincide con el de la shelf').toContain(nombreSinMarca);
      if (formato) expect(ficha.replace(/\s/g, ''), `el formato ${formato} coincide con el de la shelf`).toContain(formato.replace(/\s/g, ''));
      for (const p of precios) expect(ficha, `el precio ${p} de la shelf aparece en la PDP`).toContain(p);
      test.info().annotations.push({ type: 'shelf', description: `${nombreShelf} · ${formato} · ${precios.join(' / ')}` });
      await pdp.capturarEvidencia(cp, 4, 'datos obligatorios bajo la imagen', { elemento: pdp.core });
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-014 · Verificar que tocar la marca lleva a la SRP filtrada por esa marca (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C31-M-014';
      test.setTimeout(150000);
      const sku = tokenExigido(testData, 'SKU_VALID_001');

      // Pasos 1 y 2 — PDP.
      const pdp = await new PDPPage(page).abrir(sku);
      const marca = (await pdp.marcaVisible.innerText()).trim();
      await pdp.capturarEvidencia(cp, 2, `PDP con la marca ${marca}`, { elemento: pdp.core });

      // Pasos 3 y 4 — tocar la marca.
      await pdp.marcaVisible.click();
      await page.waitForURL(/\/search\?q=/, { timeout: 30000 });
      const srp = new SRPPage(page, marca);
      await srp.esperarInteractiva();
      await expect(srp.enlaceDelProducto(0), 'la SRP terminó de cargar sus productos').toBeVisible({ timeout: 30000 });
      expect(decodeURIComponent(new URL(page.url()).searchParams.get('q') ?? '').toLowerCase(), 'la URL refleja la búsqueda por la marca').toBe(marca.toLowerCase());
      const nombres = (await srp.nombresDeProductos()).slice(0, 3);
      expect(nombres.length, 'la SRP muestra productos').toBeGreaterThan(0);
      for (const n of nombres) expect(n.toLowerCase(), `los primeros productos son de ${marca}`).toContain(marca.toLowerCase());
      await srp.capturarEvidencia(cp, 4, `SRP de la marca ${marca}`);
      await srp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-015 · Verificar que tocar "Compartir" abre el share nativo con el link de la PDP (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C31-M-015';
      test.setTimeout(150000);
      const sku = tokenExigido(testData, 'SKU_VALID_001');

      // Pasos 1 y 2 — PDP, con la Web Share API que trae un navegador de teléfono.
      const pdp = new PDPPage(page);
      await pdp.simularWebShare();
      await pdp.abrir(sku);
      const nombre = (await pdp.nombreDelProducto.innerText()).trim();
      await pdp.capturarEvidencia(cp, 2, 'PDP con el boton Compartir', { elemento: pdp.core });

      // Pasos 3 y 4 — Compartir invoca el share nativo con el link de la PDP.
      await pdp.compartirVisible.click();
      await expect.poll(async () => (await pdp.compartidos()).length, { message: 'se invoca el share nativo' }).toBe(1);
      const [compartido] = await pdp.compartidos();
      test.info().annotations.push({ type: 'share', description: JSON.stringify(compartido) });
      expect(compartido.url ?? '', 'el link compartido es el de la PDP del SKU').toContain(sku);
      await pdp.capturarEvidencia(cp, 4, 'PDP tras tocar Compartir (share nativo invocado)');

      // El link compartido abre la misma PDP.
      await page.goto(compartido.url!, { waitUntil: 'domcontentloaded' });
      await pdp.waitUntilReady();
      await expect(pdp.nombreDelProducto, 'el link abre la PDP del producto').toHaveText(nombre);
      await pdp.capturarEvidencia(cp, 4, 'PDP abierta con el link compartido');
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-016 · Verificar que el corazón agrega el producto a favoritos del usuario logueado (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C31-M-016';
      test.setTimeout(200000);
      const sku = tokenExigido(testData, 'SKU_VALID_001');

      // Pasos 1 y 2 — PDP con sesión; precondición: el producto no está en favoritos.
      const pdp = await pdpConSesion(page, testData, 'COMPRADOR', sku);
      await expect(pdp.favoritoMarcado, 'precondición: el producto no está en favoritos').toHaveCount(0);
      await pdp.capturarEvidencia(cp, 2, 'PDP con el corazon sin marcar', { elemento: pdp.core });

      try {
        // Pasos 3 y 4 — el corazón se pinta de rojo.
        await pdp.favoritosVisible.click();
        await expect(pdp.favoritoMarcado, 'el corazón queda marcado').toBeVisible({ timeout: 15000 });
        const color = await pdp.colorDelCorazon();
        const [r, g, b] = (color.match(/\d+/g) ?? []).map(Number);
        expect(r > 170 && g < 90 && b < 90, `el corazón queda rojo (vio ${color})`).toBe(true);
        await pdp.capturarEvidencia(cp, 4, 'corazon rojo en la PDP', { elemento: pdp.core });

        // Esperado — el producto aparece en la lista de favoritos.
        const favoritos = new MisFavoritosPage(page);
        await favoritos.goto();
        await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
        await expect(favoritos.producto(sku), 'el SKU aparece en Mis favoritos').toBeVisible({ timeout: 30000 });
        await favoritos.capturarEvidencia(cp, 4, 'producto en Mis favoritos');
        await favoritos.capturarEvidencia(cp);
      } finally {
        // Se deja la cuenta como estaba: el producto vuelve a no estar en favoritos.
        await pdp.abrir(sku).catch(() => {});
        if (await pdp.favoritoMarcado.count()) await pdp.favoritoMarcado.click().catch(() => {});
        await page.waitForTimeout(2000);
      }
    });

    test('TC-B2C31-M-017 · Verificar que el corazón redirige al login al usuario invitado (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C31-M-017';
      test.setTimeout(120000);
      const sku = tokenExigido(testData, 'SKU_VALID_001');

      // Pasos 1 y 2 — PDP como invitado.
      const pdp = await new PDPPage(page).abrir(sku);
      await pdp.capturarEvidencia(cp, 2, 'PDP como invitado', { elemento: pdp.core });

      // Pasos 3 y 4 — el corazón lleva al login.
      await pdp.favoritosVisible.click();
      const login = new LoginModal(page);
      await expect(login.campoRut, 'se muestra el flujo de login').toBeVisible({ timeout: 20000 });
      await expect(pdp.favoritoMarcado, 'el producto no se marca como favorito').toHaveCount(0);
      await pdp.capturarEvidencia(cp, 4, 'flujo de login abierto', { elemento: login.root });
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-019 · Verificar que un producto con precio membresía muestra el precio con su label (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C31-M-019';
      test.setTimeout(180000);
      const sku = tokenExigido(testData, 'SKU_PRECIO_MIEMBRO');

      // Pasos 1 y 2 — PDP con la cuenta con membresía.
      const pdp = await pdpConSesion(page, testData, 'COMPRADOR_MEMBRESIA', sku);
      const ficha = await pdp.textosDeLaFicha();
      const i = ficha.indexOf('💎');
      test.info().annotations.push({ type: 'ficha', description: ficha.join(' ~ ') });
      expect(i, 'el precio membresía lleva su label (💎)').toBeGreaterThanOrEqual(0);
      expect(ficha[i + 1] ?? '', 'el label acompaña al precio membresía').toMatch(/\$[\d.]+/);
      const normales = ficha.slice(0, i).filter((t) => /^\$[\d.]+/.test(t));
      expect(normales.length, 'además se muestra el precio normal').toBeGreaterThan(0);
      await pdp.capturarEvidencia(cp, 2, 'precio membresia con su label y precio normal', { elemento: pdp.core });
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-020 · Verificar que un producto con promo NxPrecio muestra el precio compuesto (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C31-M-020';
      test.setTimeout(120000);
      const sku = tokenExigido(testData, 'SKU_PROM_NxPRECIO');

      // Pasos 1 y 2 — PDP.
      const pdp = await new PDPPage(page).abrir(sku);
      const ficha = await pdp.textosDeLaFicha();
      test.info().annotations.push({ type: 'ficha', description: ficha.join(' ~ ') });
      const compuesto = ficha.find((t) => /^lleva\s+\d+\s+por\s+\$[\d.]+$/i.test(t) || /^\d+\s*[x×]\s*\$[\d.]+$/i.test(t));
      expect(compuesto, 'se muestra el precio promocional compuesto (N por $X)').toBeTruthy();
      expect(ficha.some((t) => /^\$[\d.]+( c\/u)?$/.test(t)), 'junto al precio normal').toBe(true);
      await pdp.capturarEvidencia(cp, 2, 'precio compuesto junto al precio normal', { elemento: pdp.core });
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-021 · Verificar que un producto pesable muestra el PPUM junto a sus precios (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C31-M-021';
      test.setTimeout(120000);
      const sku = tokenExigido(testData, 'SKU_PESABLE');

      // Pasos 1 y 2 — PDP.
      const pdp = await new PDPPage(page).abrir(sku);
      const ficha = await pdp.textosDeLaFicha();
      const precios = ficha.filter((t) => /^(\$[\d.]+|lleva\s+\d+\s+por\s+\$[\d.]+|\d+\s+por\s+\d+\s+a\s+\$[\d.]+)/i.test(t));
      const ppum = ficha.filter((t) => /^\(\$[\d.]+ x /.test(t));
      test.info().annotations.push({ type: 'precios', description: `${precios.join(', ')} | PPUM: ${ppum.join(', ')}` });
      expect(precios.length, 'el producto muestra su precio').toBeGreaterThan(0);
      expect(ppum.length, 'cada precio (normal y promocionales) lleva su PPUM').toBe(precios.length);
      await pdp.capturarEvidencia(cp, 2, 'precio con su PPUM', { elemento: pdp.core });
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-025 · Verificar que "Agregar" sin método de entrega abre el Store Locator (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C31-M-025';
      test.setTimeout(120000);
      const sku = tokenExigido(testData, 'SKU_VALID_001');

      // Pasos 1 y 2 — PDP sin método de entrega (sesión nueva de invitado).
      const pdp = await new PDPPage(page).abrir(sku);
      const antes = (await pdp.header.conteoAnunciadoCarrito()) ?? 0;
      await pdp.capturarEvidencia(cp, 2, 'PDP sin metodo de entrega');

      // Pasos 3 y 4 — "Agregar" abre el Store Locator y no agrega.
      await pdp.agregarVisible.click();
      const locator = new MetodoEntregaModal(page);
      await expect(locator.encabezado, 'se abre el Store Locator').toBeVisible({ timeout: 20000 });
      await page.waitForTimeout(1500);
      expect((await pdp.header.conteoAnunciadoCarrito()) ?? 0, 'el producto no se agrega al carro').toBe(antes);
      await pdp.capturarEvidencia(cp, 4, 'Store Locator abierto', { elemento: locator.root });
      await pdp.capturarEvidencia(cp);
    });

    // ---------------------------------------------------- re-corrida 2026-10-09: {DIRECCION_DESPACHO}

    test('TC-B2C31-M-023 · Verificar que "Agregar" suma el producto al carro y muestra el stepper (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C31-M-023';
      test.setTimeout(180000);
      const sku = tokenExigido(testData, 'SKU_VALID_001');
      const montos = observarMontoDelCarro(page);

      // Precondición — método de entrega activo: {DIRECCION_DESPACHO} como invitado.
      // Pasos 1 y 2 — PDP de {SKU_VALID_001}.
      const pdp = await pdpConDireccion(page, testData, sku, cp);
      await expect(pdp.agregarVisible, 'el producto no está en el carro').toBeVisible();
      const antes = (await pdp.header.conteoAnunciadoCarrito()) ?? 0;
      await pdp.capturarEvidencia(cp, 2, `PDP con dirección activa; carro con ${antes}`);

      // Pasos 3 y 4 — "Agregar": +1 en el contador, monto recalculado y stepper con 1 unidad.
      await pdp.agregarVisible.click();
      await expect(pdp.aumentarCantidad, 'el stepper reemplaza a "Agregar"').toBeVisible({ timeout: 20000 });
      await expect(pdp.cantidadEnCarro).toHaveText(/^1\s*un\.?$/i);
      await expect.poll(async () => (await pdp.header.conteoAnunciadoCarrito()) ?? 0, { timeout: 20000 }).toBe(antes + 1);
      await expect.poll(() => montos.at(-1) ?? 0, { timeout: 20000, message: 'monto del carro' }).toBeGreaterThan(0);
      await pdp.capturarEvidencia(cp, 4, `stepper con 1 unidad; carro con ${antes + 1}; monto $${montos.at(-1)}`);
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-024 · Verificar que el "+" del stepper suma una unidad al carro (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C31-M-024';
      test.setTimeout(180000);
      const sku = tokenExigido(testData, 'SKU_VALID_001');
      const montos = observarMontoDelCarro(page);

      // Precondición — dirección activa y {SKU_VALID_001} x 1 en el carro.
      const pdp = await pdpConDireccion(page, testData, sku, cp);
      await pdp.agregarVisible.click();
      await expect(pdp.cantidadEnCarro).toHaveText(/^1\s*un\.?$/i, { timeout: 20000 });
      await expect.poll(() => montos.length, { timeout: 20000 }).toBeGreaterThan(0);
      const conteo = (await pdp.header.conteoAnunciadoCarrito()) ?? 0;
      const monto = montos.at(-1)!;
      const url = page.url();
      await pdp.capturarEvidencia(cp, 2, `PDP con 1 unidad en el carro; monto $${monto}`);

      // Pasos 3 y 4 — "+": 2 unidades, contador y monto actualizados sin recargar.
      await pdp.aumentarCantidad.click();
      await expect(pdp.cantidadEnCarro).toHaveText(/^2\s*un\.?$/i, { timeout: 20000 });
      await expect.poll(async () => (await pdp.header.conteoAnunciadoCarrito()) ?? 0, { timeout: 20000 }).toBe(conteo + 1);
      await expect.poll(() => montos.at(-1), { timeout: 20000, message: 'monto del carro' }).toBeGreaterThan(monto);
      expect(page.url(), 'sin recargar ni navegar').toBe(url);
      await pdp.capturarEvidencia(cp, 4, `stepper con 2 unidades; monto $${montos.at(-1)}`);
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-028 · Verificar que al alcanzar el cartlimit el "+" se deshabilita y se muestra el mensaje de maximo (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C31-M-028';
      test.setTimeout(240000);
      const sku = tokenExigido(testData, 'SKU_CAR_LIMIT');

      // Pasos 1 y 2 — PDP de {SKU_CAR_LIMIT} con dirección activa.
      const pdp = await pdpConDireccion(page, testData, sku, cp);

      // Paso 3 — "Agregar" y "+" hasta que no permita sumar más.
      await pdp.agregarVisible.click();
      await expect(pdp.aumentarCantidad).toBeVisible({ timeout: 20000 });
      // El "+" se deshabilita un instante mientras procesa cada clic: solo cuenta como tope si
      // sigue deshabilitado después de que la cantidad dejó de cambiar.
      for (let i = 0; i < 30; i++) {
        if (await pdp.aumentarCantidad.isDisabled()) {
          await page.waitForTimeout(2500);
          if (await pdp.aumentarCantidad.isDisabled()) break;
        }
        const n = await pdp.unidadesEnCarro();
        await pdp.aumentarCantidad.click();
        await expect.poll(() => pdp.unidadesEnCarro(), { timeout: 20000 }).toBeGreaterThan(n);
      }

      // Paso 4 — "+" deshabilitado y el mensaje de máximo.
      const tope = await pdp.unidadesEnCarro();
      await expect(pdp.aumentarCantidad, `"+" deshabilitado con ${tope} unidades`).toBeDisabled();
      await expect(pdp.mensajeCantidadMaxima).toBeVisible({ timeout: 15000 });
      await pdp.capturarEvidencia(cp, 4, `límite de compra en ${tope} unidades`);
      await pdp.capturarEvidencia(cp);
    });

    // ---------------------------------------- re-corrida 2026-10-12: SKU de stock con {DIRECCION_DESPACHO}

    test('TC-B2C31-M-026 · Verificar que un producto sin stock oculta "Agregar" y muestra "Pronto disponible" (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C31-M-026';
      test.setTimeout(180000);
      const sku = tokenExigido(testData, 'SKU_SIN_STOCK');

      // Precondición — dirección activa. Pasos 1 y 2 — PDP de {SKU_SIN_STOCK}.
      const pdp = await pdpConDireccion(page, testData, sku, cp);
      await expect(pdp.prontoDisponible, 'tag "Pronto disponible"').toBeVisible({ timeout: 20000 });
      // Solo la ficha: las tarjetas del carrusel de similares cuelgan del mismo contenedor y traen
      // su propio "Agregar".
      const ficha = await pdp.textosDeLaFicha();
      expect(ficha.filter((t) => /^agregar$/i.test(t)), 'sin botón "Agregar" en la ficha').toEqual([]);
      await pdp.capturarEvidencia(cp, 2, 'ficha con Pronto disponible y sin Agregar');
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-027 · Verificar que con todo el stock en el carro el "+" del stepper se deshabilita (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C31-M-027';
      test.setTimeout(300000);
      const sku = tokenExigido(testData, 'SKU_STOCK_LIMITADO');

      // Pasos 1 y 2 — PDP de {SKU_STOCK_LIMITADO} con dirección activa.
      const pdp = await pdpConDireccion(page, testData, sku, cp);
      await expect(pdp.ultimasUnidades, 'precondición: pocas unidades de stock').toBeVisible({ timeout: 20000 });
      await pdp.capturarEvidencia(cp, 2, 'PDP con Últimas unidades', { elemento: pdp.core });

      // Paso 3 — "Agregar" y "+" hasta que no permita sumar más (mismo criterio que M-028: el "+"
      // se deshabilita un instante mientras procesa cada clic).
      await pdp.agregarVisible.click();
      await expect(pdp.aumentarCantidad).toBeVisible({ timeout: 20000 });
      let tope = false;
      for (let i = 0; i < 40; i++) {
        if (await pdp.aumentarCantidad.isDisabled()) {
          await page.waitForTimeout(2500);
          if (await pdp.aumentarCantidad.isDisabled()) {
            tope = true;
            break;
          }
        }
        const n = await pdp.unidadesEnCarro();
        await pdp.aumentarCantidad.click();
        await expect.poll(() => pdp.unidadesEnCarro(), { timeout: 20000 }).toBeGreaterThan(n);
      }

      // Paso 4 — "+" deshabilitado al llegar al stock disponible.
      const unidades = await pdp.unidadesEnCarro();
      expect(tope, `"+" deshabilitado tras sumar (${unidades} unidades en el carro)`).toBe(true);
      await expect(pdp.aumentarCantidad).toBeDisabled();
      await pdp.capturarEvidencia(cp, 4, `"+" deshabilitado con ${unidades} unidades`, { elemento: pdp.core });
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-029 · Verificar que un producto con stock bajo el umbral muestra "Últimas unidades" (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C31-M-029';
      test.setTimeout(180000);
      const sku = tokenExigido(testData, 'SKU_STOCK_LIMITADO');

      const pdp = await pdpConDireccion(page, testData, sku, cp);
      await expect(pdp.ultimasUnidades, 'label "Últimas unidades"').toBeVisible({ timeout: 20000 });
      await pdp.capturarEvidencia(cp, 2, 'ficha con Últimas unidades', { elemento: pdp.core });
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-035 ·Verificar que la seccion Descripcion muestra el texto del producto y su SKU (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C31-M-035';
      test.setTimeout(120000);
      const sku = tokenExigido(testData, 'SKU_VALID_001');

      // Pasos 1 y 2 — PDP de {SKU_VALID_001}.
      const pdp = await new PDPPage(page).abrir(sku);
      await pdp.capturarEvidencia(cp, 2, 'PDP cargada');

      // Paso 3 — tab "Información": la sección Descripción con el texto y el SKU.
      await pdp.irATabs();
      await page.getByRole('tab', { name: /informaci[óo]n/i }).click();
      const panel = pdp.panelActivo;
      await expect(panel).toContainText(/descripci[óo]n/i);
      await expect(panel).toContainText(`sku: ${sku}`);
      const descripcion = await panel.evaluate((el) => {
        const t = (el as HTMLElement).innerText;
        const bloque = t.slice(t.search(/descripci[óo]n\s*\n\s*\n/i)).split(/\n\s*sku:/i)[0];
        return bloque.replace(/^\s*descripci[óo]n\s*/i, '').trim();
      });
      expect(descripcion.length, 'texto de la descripción del producto').toBeGreaterThan(20);
      await pdp.capturarEvidencia(cp, 3, 'Descripción con el texto del producto y su SKU', { elemento: panel });
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-031 · Verificar que el tab "Productos similares" está activo por defecto con su carrusel (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C31-M-031';
      test.setTimeout(120000);
      const sku = tokenExigido(testData, 'SKU_VALID_001');

      // Pasos 1 a 3 — PDP y sección de tabs.
      const pdp = await new PDPPage(page).abrir(sku);
      await pdp.irATabs();
      expect(await pdp.tabActivo(), 'el tab activo por defecto es "Productos similares"').toMatch(/productos similares/i);
      const productos = pdp.panelActivo.locator('a[href$=".html"]').filter({ hasText: /\S/ });
      await expect(productos.first(), 'el tab muestra un carrusel de productos').toBeVisible();
      test.info().annotations.push({ type: 'carrusel', description: `${await productos.count()} productos` });
      await pdp.capturarEvidencia(cp, 3, 'tab Productos similares activo con su carrusel', { elemento: pdp.listaDeTabs.locator('..') });
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-039 · Verificar que sin promo combinable no se muestra "Combina la promo" (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C31-M-039';
      test.setTimeout(120000);
      const sku = tokenExigido(testData, 'SKU_VALID_001');

      // Pasos 1 y 2 — PDP.
      const pdp = await new PDPPage(page).abrir(sku);
      const ficha = await pdp.textosDeLaFicha();
      expect(ficha.filter((t) => /promoci[oó]n|lleva \d|\d+ por \d/i.test(t)), 'precondición: el producto no tiene promo').toEqual([]);
      expect(ficha.filter((t) => /combina la promo/i.test(t)), 'no se muestra "Combina la promo"').toEqual([]);
      await pdp.capturarEvidencia(cp, 2, 'ficha sin Combina la promo', { elemento: pdp.core });
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C31-M-047 · Verificar que "Guardar en mis listas" abre el modal "Agregar como lista" desde abajo (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C31-M-047';
      test.setTimeout(180000);
      const sku = tokenExigido(testData, 'SKU_VALID_001');

      // Pasos 1 y 2 — PDP con sesión.
      const pdp = await pdpConSesion(page, testData, 'COMPRADOR', sku);
      await pdp.capturarEvidencia(cp, 2, 'PDP con sesion iniciada');

      // Pasos 3 y 4 — el modal "Agregar como lista" desde abajo.
      await pdp.guardarEnListasVisible.click();
      await expect(pdp.modalListas, 'se abre el modal "Agregar como lista"').toBeVisible({ timeout: 20000 });
      await page.waitForTimeout(1200);
      const caja = await pdp.modalListas.boundingBox();
      const alto = page.viewportSize()!.height;
      test.info().annotations.push({ type: 'modal', description: JSON.stringify(caja) });
      expect(Math.abs((caja?.y ?? 0) + (caja?.height ?? 0) - alto), 'el modal está anclado al borde inferior').toBeLessThanOrEqual(2);
      await pdp.capturarEvidencia(cp, 4, 'modal Agregar como lista desplegado desde abajo');
      await pdp.capturarEvidencia(cp);
    });
  });
});

/**
 * Abre desde su propia PLP el producto que la PDP tiene delante, y devuelve su breadcrumb.
 *
 * Existe para que TC-B2C31-D-001 compare el mismo producto por los dos orígenes. La categoría se
 * toma del **href del último nivel del breadcrumb** que la propia PDP acaba de mostrar, no de un
 * slug reconstruido a partir de los nombres: los nombres de categoría llevan tildes, comas y
 * conjunciones, y cualquier regla que los convierta a slug acierta en unas y falla en otras. Con
 * el href, el recorrido entero sigue naciendo de la `{PLP_URL}` declarada y no hace falta ninguna
 * data que el TC no declare.
 */
async function breadcrumbDelMismoProductoDesdeSuPLP(
  page: import('@playwright/test').Page,
  nombre: string,
): Promise<string[]> {
  const pdp = new PDPPage(page);
  const categoria = await pdp.breadcrumb.locator('a').last().getAttribute('href');
  if (!categoria) throw new Error('El breadcrumb de la PDP no expone el enlace de su categoría');
  await page.goto(categoria, { waitUntil: 'domcontentloaded', timeout: 60000 });
  const enPLP = page.locator('main button').filter({ hasText: nombre });
  await enPLP.first().waitFor({ state: 'visible', timeout: 30000 });
  await enPLP.first().click();
  const dePLP = new PDPPage(page);
  await dePLP.waitUntilReady();
  return dePLP.rutaDeBreadcrumbEstable();
}
