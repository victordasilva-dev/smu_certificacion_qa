import { Page, Response } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { ModalCategorias } from './pages/ModalCategorias';
import { PDPPage } from './pages/PDPPage';
import { PLPCategoriaN1Page } from './pages/PLPCategoriaN1Page';

/**
 * B2C-36 — Product List Page (PLP) N1.
 *
 * Están aquí los 10 TC de la planilla que se pudieron ejecutar. Los otros 5 quedaron `Bloqueado`
 * antes de generar su `test()`, por tres causas distintas:
 *
 * - **Data que la fila no declara**: D-004 necesita la dirección o tienda concreta con la que se
 *   cambia el contador, y D-014 además un producto sin stock. Con una tienda elegida a dedo, un
 *   contador que no cambia no distingue un defecto de dos catálogos equivalentes.
 * - **Ambiente**: D-015 exige una categoría colección publicada como "Product List Page" desde
 *   Page Designer, y en este ambiente las 14 categorías N1 del menú son taxonomía normal.
 * - **Contradicción de la propia fila**: D-006 y D-009 describen comportamiento Mobile —scroll
 *   táctil de las píldoras, swipe con el dedo, icono '>'— pero su CP-ID es `-D-` y sus
 *   precondiciones declaran Desktop 1440x900, donde las píldoras caben de sobra y la cabecera del
 *   carrusel muestra "Mostrar todo" con dos flechas.
 *
 * Tres decisiones que valen para toda la suite:
 *
 * - **La categoría la elige el catálogo, no el código.** Las filas declaran sólo `{BASE_URL}`, así
 *   que ningún `test()` nombra una categoría: todos entran por el menú del header, toman la primera
 *   N1 que el ambiente ofrezca y comprueban *en el propio test* que cumple la precondición del TC
 *   (tener subcategorías, o no tenerlas). Así el veredicto no depende de una elección nuestra.
 * - **Se entra por navegación SPA.** Por URL directa la PLP viene por SSR y no dispara ninguna
 *   petición cliente, de modo que los mocks de red de CA10, CA11 y CA12 no tendrían nada que
 *   interceptar y el orden de la taxonomía no se podría leer.
 * - **Hay que recorrer la página antes de contar carruseles.** Los carruseles N2 son lazy: al
 *   entrar sólo está el primero.
 */

/** La URL base que el TC declara en su columna `Test data`, exigida. */
function baseDeclarada(testData: Parameters<typeof token>[0]): string {
  const valor = token(testData, 'BASE_URL');
  if (!valor) throw new Error('Falta {BASE_URL} en el Excel de data: el TC lo declara');
  return valor;
}

/** Espera la taxonomía de una N1 (las N2 en el orden de Business Manager). */
function esperarTaxonomia(page: Page, timeout = 45000): Promise<Response> {
  return page.waitForResponse((r) => /\/categories\/[^/?]+\?/.test(r.url()), { timeout });
}

/** Nombres de las subcategorías que devuelve la taxonomía, en el orden configurado en BM. */
async function subcategoriasDe(resp: Response): Promise<string[]> {
  const json = (await resp.json()) as { categories?: { name: string }[] };
  return (json.categories ?? []).map((c) => c.name);
}

/** Abre el Home y el menú de categorías, y devuelve las N1 que el ambiente ofrece. */
async function abrirMenuDeCategorias(
  page: Page,
): Promise<{ home: HomePage; modal: ModalCategorias; categoriasN1: string[] }> {
  const home = await new HomePage(page).goto();
  const modal = await home.header.abrirCategoriasDesktop();
  const categoriasN1 = await modal.categoriasN1();
  expect(categoriasN1.length, 'el menú de categorías ofrece categorías N1').toBeGreaterThan(0);
  return { home, modal, categoriasN1 };
}

/** Entra a la PLP de una N1 desde el menú y devuelve la página ya lista. */
async function entrarAN1(page: Page, modal: ModalCategorias, nombre: string): Promise<PLPCategoriaN1Page> {
  await modal.irACategoriaN1(nombre);
  const plp = new PLPCategoriaN1Page(page);
  await expect(plp.titulo).toHaveText(nombre, { timeout: 60000 });
  await plp.cookies.aceptarSiAparece();
  return plp;
}

/** El slug de la categoría en curso, leído de la URL. */
const slugDe = (page: Page) => new URL(page.url()).pathname.split('/').pop()!;

test.describe('B2C-36 — Product List Page (PLP) N1', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C36-D-001 · La PLP N1 muestra breadcrumb, titulo con contador, pildoras, carrusel N2 y shelf, cada uno renderizado de forma independiente (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C36-D-001';
      test.setTimeout(300000);
      expect(baseDeclarada(testData)).toContain('http');

      // Paso 1 — entrar a una categoría N1 y ver su estructura.
      const { modal, categoriasN1 } = await abrirMenuDeCategorias(page);
      const taxonomia = esperarTaxonomia(page);
      const plp = await entrarAN1(page, modal, categoriasN1[0]);
      const subcategorias = await subcategoriasDe(await taxonomia);
      expect(
        subcategorias.length,
        `la categoría "${categoriasN1[0]}" tiene subcategorías N2 (precondición del TC)`,
      ).toBeGreaterThan(0);

      await expect(plp.breadcrumb, 'la PLP N1 trae breadcrumb').toBeVisible();
      await expect(plp.titulo, 'la PLP N1 trae el título de la categoría').toBeVisible();
      await expect(plp.contador, 'la PLP N1 trae el contador de productos').toBeVisible();
      await expect(plp.pildoraTodo, 'la PLP N1 trae la píldora Todas').toBeVisible();
      await plp.capturarEvidencia(cp, 1, 'cabecera de la PLP N1');

      // Paso 2 — el orden descendente que declara la HU, y un carrusel con shelf por cada N2.
      await plp.recorrerPagina();
      const encabezados = (await plp.encabezadosN2.allInnerTexts()).map((t) => t.trim());
      expect(encabezados, 'hay una sección por cada subcategoría N2').toEqual(subcategorias);
      for (const nombre of subcategorias) {
        expect(
          await plp.tarjetasDe(nombre).count(),
          `la sección "${nombre}" trae su shelf de productos`,
        ).toBeGreaterThan(0);
      }

      const orden = await plp.ordenDeComponentes();
      expect(orden.breadcrumb, 'el breadcrumb abre la página').not.toBeNull();
      expect(orden.breadcrumb!).toBeLessThan(orden.titulo!);
      expect(orden.titulo!, 'el título va antes del contador').toBeLessThanOrEqual(orden.contador!);
      expect(orden.contador!, 'el contador va antes de las píldoras').toBeLessThan(orden.pildoras!);
      expect(orden.pildoras!, 'las píldoras van antes del primer carrusel N2').toBeLessThan(
        orden.primeraSeccionN2!,
      );
      expect(orden.primeraSeccionN2!, 'el shelf va dentro de la sección, bajo su título').toBeLessThan(
        orden.primerShelf!,
      );
      await plp.capturarEvidencia(cp, 2, 'secciones N2 con su shelf', { fullPage: true });

      // Paso 3 — un componente lento no bloquea a los demás: se retrasa el shelf de una sola N2. El
      // slug se lee de su píldora *antes* de volver al menú, que es la única página donde está.
      const lenta = subcategorias[0];
      const slugLento = await plp.slugDeSubcategoria(lenta);
      const { modal: modal2, categoriasN1: n1b } = await abrirMenuDeCategorias(page);
      await page.route('**/product-search*', async (route) => {
        // El retraso se hace con un `sleep` propio y no con `page.waitForTimeout`: cuando el test
        // termina con la petición aún en vuelo, el reloj de la página ya está cerrado y el callback
        // revienta con "Test ended", que se lee como un fallo del TC cuando todas sus aserciones
        // habían pasado.
        if (route.request().url().includes(`cgid%3D${slugLento}`)) {
          await new Promise((listo) => setTimeout(listo, 15000));
        }
        return route.fallback();
      });
      const plp2 = await entrarAN1(page, modal2, n1b[0]);
      await plp2.recorrerPagina(6, 600);
      await expect(plp2.titulo, 'el título no espera al componente lento').toBeVisible();
      await expect(plp2.pildoraTodo, 'las píldoras no esperan al componente lento').toBeVisible();
      expect(
        await plp2.tarjetas.count(),
        'los shelves de las demás subcategorías se renderizaron sin esperar al lento',
      ).toBeGreaterThan(0);
      await plp2.capturarEvidencia(cp, 3, 'la pagina carga con un componente lento pendiente', {
        fullPage: true,
      });
      await page.unrouteAll({ behavior: 'ignoreErrors' });
      await plp2.capturarEvidencia(cp);
    });

    test('TC-B2C36-D-002 · La PLP N1 se carga correctamente desde el menu de categorias, URL directa, banner del Home o carrusel del Home (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C36-D-002';
      test.setTimeout(300000);
      expect(baseDeclarada(testData)).toContain('http');

      // Paso 1 — menú de navegación por categorías.
      const { modal, categoriasN1 } = await abrirMenuDeCategorias(page);
      const plpMenu = await entrarAN1(page, modal, categoriasN1[0]);
      expect(page.url(), 'el menú lleva a la PLP de la categoría').toContain('/category/');
      await expect(plpMenu.titulo).toHaveText(categoriasN1[0]);
      const slug = slugDe(page);
      await plpMenu.capturarEvidencia(cp, 1, 'PLP N1 abierta desde el menu de categorias');

      // Paso 2 — URL directa de la categoría.
      const plpDirecta = await new PLPCategoriaN1Page(page, `category/${slug}`).goto();
      expect(new URL(page.url()).pathname, 'la URL directa carga esa misma PLP').toBe(
        `/category/${slug}`,
      );
      await expect(plpDirecta.titulo).toHaveText(categoriasN1[0]);
      await expect(plpDirecta.contador, 'la PLP por URL directa trae su contador').toBeVisible();
      await plpDirecta.capturarEvidencia(cp, 2, 'PLP N1 abierta por URL directa');

      // Paso 3 — banner del Home vinculado a una categoría N1. Se pregunta primero cuál banner está
      // a la vista: el hero rota y el primero del DOM suele ser el que ya salió de pantalla.
      const home = await new HomePage(page).goto();
      const banner = await home.bannerDeCategoriaEnPantalla();
      await home.bannersDeCategoria.nth(banner.indice).click();
      const plpBanner = new PLPCategoriaN1Page(page);
      await expect(plpBanner.titulo, 'el banner carga una PLP con su título').toBeVisible({
        timeout: 60000,
      });
      expect(new URL(page.url()).pathname, 'el banner lleva a la categoría que declara su href').toBe(
        banner.href,
      );
      await plpBanner.capturarEvidencia(cp, 3, 'PLP N1 abierta desde un banner del Home');

      // Paso 4 — carrusel del Home vinculado a una categoría N1.
      const home2 = await new HomePage(page).goto();
      const cta = home2.ctasDeCarrusel.first();
      const destino = await cta.getAttribute('href');
      await cta.click();
      const plpCarrusel = new PLPCategoriaN1Page(page);
      await expect(plpCarrusel.titulo, 'el carrusel carga una PLP con su título').toBeVisible({
        timeout: 60000,
      });
      expect(new URL(page.url()).pathname, 'el carrusel del Home lleva a su categoría').toBe(destino);
      await expect(plpCarrusel.contador, 'la PLP cargada trae su contador').toBeVisible();
      await plpCarrusel.capturarEvidencia(cp, 4, 'PLP N1 abierta desde un carrusel del Home');
      await plpCarrusel.capturarEvidencia(cp);
    });

    test('TC-B2C36-D-003 · El breadcrumb de la PLP N1 muestra Inicio > Categoria N1, con Inicio clickeable y la categoria actual no clickeable (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C36-D-003';
      test.setTimeout(240000);
      expect(baseDeclarada(testData)).toContain('http');

      // Paso 1 — el breadcrumb de la PLP N1.
      const { modal, categoriasN1 } = await abrirMenuDeCategorias(page);
      const plp = await entrarAN1(page, modal, categoriasN1[0]);
      const nodos = await plp.nodosDeBreadcrumb();
      expect(nodos.length, 'el breadcrumb de una N1 tiene dos nodos: Inicio y la categoría').toBe(2);
      expect(nodos[0].esIcono, 'el primer nodo es el icono de Inicio').toBe(true);
      expect(nodos[0].href, 'el icono de Inicio enlaza al Home').toBe('/');
      expect(nodos[1].texto, 'el segundo nodo es el nombre de la categoría N1').toBe(categoriasN1[0]);
      expect(nodos[1].href, 'la categoría actual no lleva enlace').toBeNull();
      await plp.capturarEvidencia(cp, 1, 'breadcrumb de la PLP N1', { elemento: plp.breadcrumb });

      // Paso 3 (antes del clic en Inicio, que abandona la página) — la categoría actual no responde.
      const urlAntes = page.url();
      await plp.nodoActual.click();
      await page.waitForTimeout(3000);
      expect(page.url(), 'el clic en el nombre de la categoría no navega').toBe(urlAntes);
      await plp.capturarEvidencia(cp, 3, 'la categoria actual no responde al clic');

      // Paso 2 — "Inicio" redirige al Home.
      await plp.enlaceInicio.click();
      await page.waitForTimeout(4000);
      expect(new URL(page.url()).pathname, 'Inicio redirige al Home').toBe('/');
      await plp.capturarEvidencia(cp, 2, 'Inicio redirige al Home');
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C36-D-005 · Las pildoras muestran Todas seleccionada por defecto y las subcategorias N2 en el orden de Business Manager; sin N2 no se renderizan (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C36-D-005';
      test.setTimeout(420000);
      expect(baseDeclarada(testData)).toContain('http');

      // Paso 1 — una N1 con subcategorías: "Todas" primera, seleccionada y sin enlace, y las N2 en
      // el orden que devuelve la taxonomía, que es el configurado en Business Manager.
      const { modal, categoriasN1 } = await abrirMenuDeCategorias(page);
      const taxonomia = esperarTaxonomia(page);
      const plp = await entrarAN1(page, modal, categoriasN1[0]);
      const subcategorias = await subcategoriasDe(await taxonomia);
      expect(subcategorias.length, 'la categoría elegida tiene subcategorías N2').toBeGreaterThan(0);

      const pildoras = await plp.estadoDeLasPildoras();
      expect(pildoras[0].texto, 'la primera píldora es Todas (la UI la escribe "Todo")').toMatch(
        /^tod(o|as)$/i,
      );
      expect(pildoras[0].seleccionada, 'Todas aparece seleccionada por defecto').toBe(true);
      expect(pildoras[0].href, 'Todas no es clickeable: no lleva enlace').toBeNull();
      expect(
        pildoras.slice(1).map((p) => p.texto),
        'las píldoras N2 siguen el orden configurado en Business Manager',
      ).toEqual(subcategorias);
      await plp.capturarEvidencia(cp, 1, 'pildoras con Todas seleccionada', {
        elemento: plp.filaDePildoras,
      });

      // Paso 2 — una N1 sin subcategorías: ni fila de píldoras ni carruseles, grid de productos
      // directo. Cuál es esa categoría lo dice el catálogo: se recorren las N1 del menú hasta dar
      // con una que no renderice píldoras, en vez de nombrar una que la fila no declara.
      let sinSubcategorias: string | null = null;
      for (const nombre of categoriasN1) {
        const candidata = await new PLPCategoriaN1Page(
          page,
          `category/${slugCandidato(nombre)}`,
        ).goto();
        if ((await candidata.pildoraTodo.count()) === 0) {
          sinSubcategorias = nombre;
          break;
        }
      }
      expect(
        sinSubcategorias,
        'el ambiente ofrece alguna categoría N1 sin subcategorías N2 (precondición del TC)',
      ).not.toBeNull();

      const plpSinN2 = new PLPCategoriaN1Page(page);
      await expect(plpSinN2.titulo, 'la PLP sin subcategorías trae su título').toBeVisible();
      expect(
        await plpSinN2.filaDePildoras.count(),
        `la categoría "${sinSubcategorias}" no renderiza la fila de píldoras`,
      ).toBe(0);
      expect(
        await plpSinN2.encabezadosN2.count(),
        'sin subcategorías no hay carruseles N2',
      ).toBe(0);
      expect(
        await plpSinN2.tarjetas.count(),
        'la página muestra directamente el grid de productos',
      ).toBeGreaterThan(0);
      await plpSinN2.capturarEvidencia(cp, 2, 'categoria N1 sin subcategorias muestra el grid', {
        fullPage: true,
      });
      await plpSinN2.capturarEvidencia(cp);
    });

    test('TC-B2C36-D-007 · Hacer clic en una pildora de subcategoria N2 navega a la PLP N2 correspondiente y resetea los filtros previos (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C36-D-007';
      test.setTimeout(300000);
      expect(baseDeclarada(testData)).toContain('http');

      // Paso 1 — clic en una píldora de subcategoría N2 desde la PLP N1.
      const { modal, categoriasN1 } = await abrirMenuDeCategorias(page);
      const plp = await entrarAN1(page, modal, categoriasN1[0]);
      const n1 = categoriasN1[0];
      const slugN1 = slugDe(page);
      const contadorN1 = await plp.productosDeclarados();
      expect(await plp.pildorasN2.count(), 'la PLP N1 ofrece píldoras de subcategoría').toBeGreaterThan(
        0,
      );
      const pildora = plp.pildorasN2.first();
      const nombreN2 = (await pildora.innerText()).trim();
      const destino = await pildora.getAttribute('href');
      await plp.capturarEvidencia(cp, 1, `pildora ${nombreN2} en la PLP N1`, {
        elemento: plp.filaDePildoras,
      });
      await pildora.click();

      // Paso 2 — URL, título, conteo, breadcrumb y panel de filtros de la PLP N2.
      const n2 = new PLPCategoriaN1Page(page);
      await expect(n2.titulo, 'la PLP N2 carga con su título').toBeVisible({ timeout: 60000 });
      expect(new URL(page.url()).pathname, 'la URL refleja la subcategoría N2').toBe(destino);
      await expect(n2.titulo, 'el título es el de la subcategoría N2').toHaveText(nombreN2);
      const contadorN2 = await n2.productosDeclarados();
      expect(contadorN2, 'la PLP N2 trae su propio conteo de productos').not.toBeNull();
      expect(
        contadorN2!,
        'el conteo de la N2 es un subconjunto del de la N1',
      ).toBeLessThanOrEqual(contadorN1 ?? Number.MAX_SAFE_INTEGER);

      const nodos = await n2.nodosDeBreadcrumb();
      const textos = nodos.map((n) => n.texto).filter(Boolean);
      expect(textos, 'el breadcrumb se actualiza a Inicio > N1 > N2').toEqual([n1, nombreN2]);
      const nodoN1 = nodos.find((n) => n.texto === n1);
      expect(nodoN1?.href, 'el nodo de la categoría N1 enlaza a su PLP').toBe(`/category/${slugN1}`);
      expect(
        nodos[nodos.length - 1].href,
        'el nodo de la subcategoría actual no lleva enlace',
      ).toBeNull();

      // El panel de filtros llega limpio: ni refinamiento ni orden en la URL, y ningún control
      // marcado dentro del modal.
      expect(page.url(), 'la URL de la N2 no arrastra filtros ni orden previos').not.toMatch(
        /refine|[?&]sort=/,
      );
      const modalFiltros = page.locator('[role="dialog"]').filter({ hasText: /selecciona tus filtros/i });
      await page.locator('button[aria-label="Abrir filtros"]').click();
      await expect(modalFiltros, 'el panel de filtros se abre en la PLP N2').toBeVisible({
        timeout: 30000,
      });
      expect(
        await modalFiltros.locator('input:checked').count(),
        'el panel de filtros llega reseteado, sin nada aplicado',
      ).toBe(0);
      await n2.capturarEvidencia(cp, 2, 'PLP N2 con el panel de filtros reseteado');
      await n2.capturarEvidencia(cp);
    });

    test('TC-B2C36-D-008 · En Desktop, el carrusel de una subcategoria N2 permite desplazamiento con controles y Mostrar todos redirige a la PLP N2 (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C36-D-008';
      test.setTimeout(300000);
      expect(baseDeclarada(testData)).toContain('http');

      const { modal, categoriasN1 } = await abrirMenuDeCategorias(page);
      const taxonomia = esperarTaxonomia(page);
      const plp = await entrarAN1(page, modal, categoriasN1[0]);
      const subcategorias = await subcategoriasDe(await taxonomia);
      await plp.recorrerPagina();

      // Paso 1 — los controles de desplazamiento del carrusel N2. "Se desplazó" se mide en la x de
      // la primera tarjeta: el track se mueve con transform, no con scrollLeft.
      const conCarrusel = await primeraSeccionDesplazable(plp, subcategorias);
      expect(
        conCarrusel,
        'alguna subcategoría trae más tarjetas de las que caben, con controles de desplazamiento',
      ).not.toBeNull();
      const seccion = conCarrusel!;
      await plp.seccionN2(seccion).scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      await plp.capturarEvidencia(cp, 1, `carrusel de ${seccion} antes de desplazar`, {
        elemento: plp.seccionN2(seccion),
      });

      const xInicial = await plp.xDePrimeraTarjetaDe(seccion);
      await plp.flechaSiguienteDe(seccion).click();
      await page.waitForTimeout(2000);
      const xAvanzada = await plp.xDePrimeraTarjetaDe(seccion);
      expect(xAvanzada, 'el control "siguiente" desplaza el carrusel').toBeLessThan(xInicial);
      await plp.capturarEvidencia(cp, 1, `carrusel de ${seccion} desplazado`, {
        elemento: plp.seccionN2(seccion),
      });

      await plp.flechaAnteriorDe(seccion).click();
      await page.waitForTimeout(2000);
      const xVuelta = await plp.xDePrimeraTarjetaDe(seccion);
      expect(xVuelta, 'el control "anterior" devuelve el carrusel').toBeGreaterThan(xAvanzada);

      // Paso 2 — "Mostrar todos" de una subcategoría redirige a su PLP N2.
      const enlace = plp.mostrarTodoDe(seccion);
      const destino = await enlace.getAttribute('href');
      await enlace.click();
      const n2 = new PLPCategoriaN1Page(page);
      await expect(n2.titulo, 'se carga la PLP N2').toBeVisible({ timeout: 60000 });
      expect(new URL(page.url()).pathname, 'Mostrar todos redirige a la PLP de esa N2').toBe(destino);
      await expect(n2.titulo, 'el título es el de la subcategoría').toHaveText(seccion);
      await n2.capturarEvidencia(cp, 2, 'PLP N2 abierta desde Mostrar todos');
      await n2.capturarEvidencia(cp);
    });

    test('TC-B2C36-D-010 · Hacer clic en una tarjeta del shelf de productos de la PLP N1 carga la PDP del producto seleccionado (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C36-D-010';
      test.setTimeout(240000);
      expect(baseDeclarada(testData)).toContain('http');

      // Paso 1 — clic en una tarjeta del shelf.
      const { modal, categoriasN1 } = await abrirMenuDeCategorias(page);
      const plp = await entrarAN1(page, modal, categoriasN1[0]);
      await expect(plp.nombresDeProducto.first(), 'el shelf trae tarjetas').toBeVisible({
        timeout: 60000,
      });
      const nombre = await plp.primerProducto();
      await plp.capturarEvidencia(cp, 1, 'tarjeta del shelf en la PLP N1');
      await plp.nombresDeProducto.first().click();

      // Paso 2 — la PDP del producto seleccionado. El nombre de la tarjeta viene como
      // "Marca | Producto" y la PDP nombra sólo el producto, así que se compara contra esa mitad.
      // La PDP no tiene `h1`: su bloque principal es `[data-testid="unimarc-product-core"]` y el
      // nombre es un `<p>`, que es lo que ya modela `PDPPage` (B2C-31).
      const producto = nombre.includes(' | ') ? nombre.split(' | ')[1].trim() : nombre;
      await page.waitForURL(/\/product\//, { timeout: 60000 });
      const pdp = new PDPPage(page);
      await expect(pdp.core, 'la PDP carga su bloque principal').toBeVisible({ timeout: 60000 });
      await expect(pdp.nombreDelProducto, 'la PDP es la del producto seleccionado').toHaveText(
        producto,
      );
      await pdp.capturarEvidencia(cp, 2, 'PDP del producto seleccionado');
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C36-D-011 · Mientras se obtienen los datos, la PLP N1 muestra skeletons por componente que se reemplazan de forma independiente (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C36-D-011';
      test.setTimeout(300000);
      expect(baseDeclarada(testData)).toContain('http');

      const { modal, categoriasN1 } = await abrirMenuDeCategorias(page);

      // La taxonomía se retrasa poco y los productos mucho: así se ven los tres momentos que pide
      // CA10 —todo en skeleton, la estructura ya pintada con el shelf aún pendiente, y el contenido
      // completo— sin depender de la latencia real del ambiente.
      await page.route('**/shopper-products/**', async (route) => {
        await page.waitForTimeout(4000);
        return route.fallback();
      });
      await page.route('**/product-search*', async (route) => {
        await page.waitForTimeout(14000);
        return route.fallback();
      });

      // Paso 1 — los skeletons durante la carga.
      await modal.irACategoriaN1(categoriasN1[0]);
      const plp = new PLPCategoriaN1Page(page);
      await expect(plp.skeletons.first(), 'la PLP N1 muestra skeletons mientras carga').toBeVisible({
        timeout: 30000,
      });
      const cuantos = await plp.skeletons.count();
      expect(cuantos, 'los skeletons representan la estructura de la página, no un solo bloque').toBeGreaterThan(
        5,
      );
      await plp.capturarEvidencia(cp, 1, 'skeletons de carga de la PLP N1');

      // Paso 2 — cada componente se reemplaza al recibir sus datos: título y píldoras ya están
      // mientras el shelf sigue pendiente.
      await expect(plp.titulo, 'el título se pinta sin esperar a los productos').toBeVisible({
        timeout: 60000,
      });
      await expect(plp.pildoraTodo, 'las píldoras se pintan sin esperar a los productos').toBeVisible({
        timeout: 60000,
      });
      expect(
        await plp.tarjetas.count(),
        'el shelf todavía no tiene tarjetas: no bloqueó al resto',
      ).toBe(0);
      await plp.capturarEvidencia(cp, 2, 'estructura pintada con el shelf aun pendiente');

      // Y al llegar los datos, los skeletons dan paso al contenido real.
      await expect(plp.tarjetas.first(), 'el shelf se rellena al llegar sus datos').toBeVisible({
        timeout: 60000,
      });
      await expect(plp.skeletons, 'no queda ningún skeleton al terminar la carga').toHaveCount(0, {
        timeout: 60000,
      });
      await plp.capturarEvidencia(cp, 3, 'contenido real en lugar de los skeletons');
      await page.unrouteAll({ behavior: 'ignoreErrors' });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C36-D-012 · Un error al cargar los productos del shelf muestra el mensaje de error con la opcion de Reintentar (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C36-D-012';
      test.setTimeout(300000);
      expect(baseDeclarada(testData)).toContain('http');

      const { modal, categoriasN1 } = await abrirMenuDeCategorias(page);

      // Paso 1 — forzar el error del servicio de productos. Se entra por el menú a propósito: por
      // URL directa la PLP viene por SSR y el mock no tendría nada que interceptar.
      await page.route('**/shopper-search/**/product-search*', (route) =>
        route.fulfill({ status: 503, contentType: 'application/json', body: '{"detail":"error"}' }),
      );
      await modal.irACategoriaN1(categoriasN1[0]);
      const plp = new PLPCategoriaN1Page(page);

      // Paso 2 — el mensaje de error con su opción de reintento.
      await expect(plp.errorDeCarga, 'se muestra el mensaje de error de carga de productos').toBeVisible(
        { timeout: 60000 },
      );
      await expect(plp.reintentar, 'se ofrece la opción de reintentar').toBeVisible();
      await plp.capturarEvidencia(cp, 2, 'pantalla de error al cargar los productos');

      // Paso 3 — "Reintentar" vuelve a pedir los productos: con el servicio ya restablecido, la PLP
      // carga. Que el clic reintente de verdad se comprueba contando las peticiones que dispara.
      await page.unroute('**/shopper-search/**/product-search*');
      let peticiones = 0;
      page.on('request', (req) => {
        if (req.url().includes('product-search')) peticiones += 1;
      });
      await plp.reintentar.click();
      await expect(plp.titulo, 'tras reintentar, la PLP N1 carga').toBeVisible({ timeout: 90000 });
      await expect(plp.errorDeCarga, 'el mensaje de error desaparece').toHaveCount(0);
      expect(peticiones, 'Reintentar vuelve a pedir los productos').toBeGreaterThan(0);
      await plp.capturarEvidencia(cp, 3, 'la PLP carga tras Reintentar');
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C36-D-013 · Un error en un componente secundario (carrusel N2 o pildoras) no bloquea la carga del resto de la PLP N1 (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C36-D-013';
      test.setTimeout(300000);
      expect(baseDeclarada(testData)).toContain('http');

      // Primero, con todo sano, se averigua qué subcategorías tiene la categoría y cuál se va a
      // romper: sin eso no hay con qué comparar el "resto de la página".
      const primera = await abrirMenuDeCategorias(page);
      const taxonomia = esperarTaxonomia(page);
      const plpSana = await entrarAN1(page, primera.modal, primera.categoriasN1[0]);
      const subcategorias = await subcategoriasDe(await taxonomia);
      expect(subcategorias.length, 'la categoría tiene más de una subcategoría N2').toBeGreaterThan(1);
      const roto = subcategorias[0];
      const slugRoto = await plpSana.slugDeSubcategoria(roto);
      await plpSana.recorrerPagina();
      await plpSana.capturarEvidencia(cp, 1, 'la PLP N1 con todos sus carruseles', { fullPage: true });

      // Paso 1 — forzar el error en el carrusel de una sola subcategoría.
      const { modal, categoriasN1 } = await abrirMenuDeCategorias(page);
      await page.route('**/product-search*', (route) => {
        const url = route.request().url();
        if (url.includes(`cgid%3D${slugRoto}`)) {
          return route.fulfill({ status: 503, contentType: 'application/json', body: '{}' });
        }
        return route.fallback();
      });
      const plp = await entrarAN1(page, modal, categoriasN1[0]);
      await plp.recorrerPagina();

      // Paso 2 — ese carrusel no se muestra y el resto de la página carga con normalidad.
      const encabezados = (await plp.encabezadosN2.allInnerTexts()).map((t) => t.trim());
      expect(encabezados, `la sección "${roto}" no se renderiza`).not.toContain(roto);
      expect(
        encabezados,
        'las demás secciones N2 se cargan con normalidad',
      ).toEqual(subcategorias.filter((s) => s !== roto));
      await expect(plp.titulo, 'el título carga con normalidad').toBeVisible();
      await expect(plp.contador, 'el contador carga con normalidad').toBeVisible();
      await expect(plp.pildoraTodo, 'las píldoras cargan con normalidad').toBeVisible();
      expect(
        await plp.pildorasN2.count(),
        'las píldoras siguen ofreciendo todas las subcategorías',
      ).toBe(subcategorias.length);
      expect(
        await plp.tarjetas.count(),
        'los shelves de las demás subcategorías traen productos',
      ).toBeGreaterThan(0);
      await expect(
        plp.errorDeCarga,
        'el fallo de un componente no levanta la pantalla de error de la página',
      ).toHaveCount(0);
      await plp.capturarEvidencia(cp, 2, `la PLP carga sin el carrusel de ${roto}`, {
        fullPage: true,
      });
      await page.unrouteAll({ behavior: 'ignoreErrors' });
      await plp.capturarEvidencia(cp);
    });
  });
});

/**
 * La primera subcategoría cuyo carrusel tiene controles de desplazamiento.
 *
 * Una subcategoría con dos o tres productos no desborda el ancho y no renderiza flechas: pedirle
 * que se desplace sería exigirle algo que la HU no dice. El TC habla del carrusel que sí tiene
 * controles, así que se busca ése.
 */
async function primeraSeccionDesplazable(
  plp: PLPCategoriaN1Page,
  subcategorias: string[],
): Promise<string | null> {
  for (const nombre of subcategorias) {
    if (await plp.flechaSiguienteDe(nombre).count()) return nombre;
  }
  return null;
}

/** El slug probable de una categoría a partir de su nombre visible, para recorrer el menú. */
function slugCandidato(nombre: string): string {
  return nombre
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
