import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { PLPCategoriaPage } from './pages/PLPCategoriaPage';
import { HomePage } from './pages/HomePage';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';

/**
 * B2C-35 — Listado de productos por categoría (PLP N2/N3).
 *
 * Están aquí los 6 TC de la planilla que se pudieron ejecutar con la data que declaran. Los otros
 * 9 quedaron `Bloqueado` antes de generar su `test()`, por dos causas que conviene separar:
 *
 * - **Data que la fila no declara**: D-001 (se ejecuta con sesión y no dice con qué cuenta),
 *   D-004 y D-010 (necesitan una dirección o tienda concreta), D-005 (una categoría N2 *sin*
 *   subcategorías), D-011 (una categoría con banners configurados y otra sin ellos) y D-013 (una
 *   categoría top con SEO y otra sin él).
 * - **Ambiente**: D-008, D-009 y D-014 exigen 50 productos o más de cinco páginas, y en este
 *   ambiente ninguna categoría N2/N3 pasa de 37 productos.
 *
 * Dos cosas que valen para toda la suite y que la exploración dejó claras:
 *
 * - La UI escribe "Todo" donde los TC dicen "Todas", y el `aria-label` del breadcrumb va con B
 *   mayúscula al revés que en la PDP. Los locators son tolerantes a lo primero y exactos en lo
 *   segundo, porque el atributo distingue mayúsculas.
 * - El modal de filtros y el dropdown de orden son los dos `role="dialog"` con `aria-modal`. Un
 *   locator por rol daría por bueno el que estuviera abierto, así que ambos se filtran por su
 *   contenido propio.
 */

/** La categoría N2 que el TC declara en su columna `Test data`, exigida. */
function categoriaN2(testData: Parameters<typeof token>[0]): string {
  const valor = token(testData, 'CATEGORY_N2_URL');
  if (!valor) throw new Error('Falta {CATEGORY_N2_URL} en el Excel de data: el TC lo declara');
  return valor;
}

/** La categoría N3 que el TC declara en su columna `Test data`, exigida. */
function categoriaN3(testData: Parameters<typeof token>[0]): string {
  const valor = token(testData, 'CATEGORY_N3_URL');
  if (!valor) throw new Error('Falta {CATEGORY_N3_URL} en el Excel de data: el TC lo declara');
  return valor;
}

/** Un token que la fila declara, exigido. */
function tokenExigido(testData: Parameters<typeof token>[0], nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) throw new Error(`Falta {${nombre}} en el Excel de data: el TC lo declara`);
  return valor;
}

const rutaDe = (url: string) => new URL(url).pathname.slice(1);
const slugDe = (url: string) => new URL(url).pathname.split('/').pop()!;

test.describe('B2C-35 — Listado de productos por categoria', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C35-D-002 · La PLP N2/N3 muestra su estructura completa en el orden definido (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C35-D-002';
      test.setTimeout(180000);

      // Paso 1 — el orden de los componentes en una PLP N2.
      const n2 = new PLPCategoriaPage(page, rutaDe(categoriaN2(testData)));
      await n2.goto();
      await expect(n2.breadcrumb, 'la PLP trae breadcrumb').toBeVisible();
      await expect(n2.titulo, 'la PLP trae el título de la categoría').toBeVisible();
      await expect(n2.contador, 'la PLP trae el contador de productos').toBeVisible();
      await expect(n2.botonFiltros, 'la PLP ofrece Filtros').toBeVisible();
      await expect(n2.botonOrdenar, 'la PLP ofrece el control de orden').toBeVisible();
      await expect(n2.pildoraTodo.first(), 'la PLP N2 trae la píldora de la categoría').toBeVisible();
      expect(await n2.tarjetas.count(), 'la PLP trae la grilla de productos').toBeGreaterThan(0);
      await n2.capturarEvidencia(cp, 1, 'estructura de la PLP N2');

      const ordenN2 = await n2.ordenDeComponentes();
      // El orden que declara la HU, entre los componentes que esta categoría sí configura. Los
      // opcionales —banner principal, grid de banners, SEO, paginación— tienen sus propios TC
      // (D-011, D-013, D-014) y aquí solo se comprueba que no rompan la secuencia de los demás.
      const secuencia: (keyof typeof ordenN2)[] = [
        'breadcrumb',
        'titulo',
        'contador',
        'pildoras',
        'grilla',
      ];
      const presentes = secuencia.filter((c) => ordenN2[c] !== null);
      for (let i = 1; i < presentes.length; i += 1) {
        expect(
          ordenN2[presentes[i]]!,
          `${presentes[i]} va por debajo de ${presentes[i - 1]}`,
        ).toBeGreaterThanOrEqual(ordenN2[presentes[i - 1]]!);
      }

      // Paso 2 — repetir en una PLP N3, a la que se llega desde la píldora de la propia N2.
      const slugN2 = slugDe(categoriaN2(testData));
      await n2.pildorasDeSubcategoria(slugN2).first().click();
      const n3 = new PLPCategoriaPage(page);
      await n3.waitUntilReady();
      await expect(n3.breadcrumb, 'la PLP N3 trae breadcrumb').toBeVisible();
      await expect(n3.titulo, 'la PLP N3 trae título').toBeVisible();
      await expect(n3.contador, 'la PLP N3 trae contador').toBeVisible();
      await expect(n3.botonFiltros, 'la PLP N3 ofrece Filtros').toBeVisible();
      await expect(n3.botonOrdenar, 'la PLP N3 ofrece el control de orden').toBeVisible();
      expect(await n3.tarjetas.count(), 'la PLP N3 trae grilla').toBeGreaterThan(0);
      await n3.capturarEvidencia(cp, 2, 'estructura de la PLP N3');

      const ordenN3 = await n3.ordenDeComponentes();
      const presentesN3 = secuencia.filter((c) => ordenN3[c] !== null);
      for (let i = 1; i < presentesN3.length; i += 1) {
        expect(
          ordenN3[presentesN3[i]]!,
          `en la N3, ${presentesN3[i]} va por debajo de ${presentesN3[i - 1]}`,
        ).toBeGreaterThanOrEqual(ordenN3[presentesN3[i - 1]]!);
      }
      await n3.capturarEvidencia(cp);
    });

    test('TC-B2C35-D-003 · El breadcrumb es clickeable en Desktop salvo el nodo actual (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C35-D-003';
      test.setTimeout(180000);

      // Paso 1 — hacer clic en cada nodo del breadcrumb de una PLP N3.
      const url = categoriaN3(testData);
      const plp = new PLPCategoriaPage(page, rutaDe(url));
      await plp.goto();
      await expect(plp.breadcrumb).toBeVisible();
      const nodos = await plp.nodosDeBreadcrumb();
      await plp.capturarEvidencia(cp, 1, 'breadcrumb de la PLP N3', { elemento: plp.breadcrumb });

      expect(nodos.length, 'el breadcrumb muestra la ruta de la categoría').toBeGreaterThan(1);
      const actual = nodos[nodos.length - 1];
      const intermedios = nodos.slice(0, -1);
      expect(
        intermedios.every((n) => n.href),
        `todos los nodos intermedios navegan (vio: ${intermedios.map((n) => `${n.texto}→${n.href}`).join(', ')})`,
      ).toBe(true);
      expect(actual.href, `el nodo actual "${actual.texto}" no es un enlace`).toBeNull();

      // Cada nodo intermedio lleva efectivamente a su categoría.
      for (const nodo of intermedios.filter((n) => n.href!.startsWith('/category/'))) {
        await plp.breadcrumb.getByRole('link', { name: nodo.texto, exact: true }).first().click();
        await page.waitForURL(`**${nodo.href}`, { timeout: 30000 });
        expect(new URL(page.url()).pathname, `"${nodo.texto}" navega a su categoría`).toBe(nodo.href);
        await page.goBack();
        await plp.waitUntilReady();
      }
      await plp.capturarEvidencia(cp, 1, 'PLP tras recorrer los nodos del breadcrumb');
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-D-006 · Clic en pildora N3 navega reseteando filtros y desde N3 las pildoras del N2 padre siguen visibles (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C35-D-006';
      test.setTimeout(180000);

      // Paso 1 — desde la PLP N2, con un orden aplicado, hacer clic en una píldora N3.
      const urlN2 = categoriaN2(testData);
      const slugN2 = slugDe(urlN2);
      const n2 = new PLPCategoriaPage(page, rutaDe(urlN2));
      await n2.goto();
      const tituloN2 = await n2.titulo.innerText();
      // "Resetea filtros": se deja un criterio aplicado antes de navegar, para que el reseteo sea
      // observable. Sin esto el caso comprobaría que no hay filtros donde nunca los hubo.
      await n2.ordenarPor(/precio m[áa]s bajo/i);
      expect(new URL(page.url()).search, 'queda un criterio aplicado en la N2').toContain('sort=');
      await n2.capturarEvidencia(cp, 1, 'PLP N2 con un orden aplicado');

      const pildora = n2.pildorasDeSubcategoria(slugN2).first();
      const destino = await pildora.getAttribute('href');
      const nombrePildora = (await pildora.innerText()).trim();
      await pildora.click();

      const n3 = new PLPCategoriaPage(page);
      await n3.waitUntilReady();
      expect(new URL(page.url()).pathname, 'la URL pasa a la subcategoría').toBe(destino);
      expect(new URL(page.url()).search, 'la navegación resetea los filtros aplicados').not.toContain(
        'sort=',
      );
      expect((await n3.titulo.innerText()).trim(), 'el título cambia al de la N3').not.toBe(
        tituloN2.trim(),
      );
      await expect(n3.contador, 'el contador se actualiza').toBeVisible();
      const ruta = await n3.nodosDeBreadcrumb();
      expect(
        ruta[ruta.length - 1].texto,
        'el breadcrumb termina en la subcategoría abierta',
      ).toContain(nombrePildora);
      await n3.capturarEvidencia(cp, 1, 'PLP N3 abierta desde la pildora');

      // Paso 2 — en la N3, la píldora actual queda seleccionada y "Todo" vuelve al N2 padre.
      //
      // Se espera por el estado de las píldoras en vez de leerlo de una vez: se pintan un instante
      // después que el título, y una lectura temprana devuelve una lista sin la actual. El fallo
      // no era claro —`undefined` al buscar la píldora— y hacía que el caso fallara en el primer
      // intento y pasara en el reintento, que es la peor forma de fallar. Esperar por el texto no
      // alcanzaba: el nombre de la subcategoría aparece también en el breadcrumb, así que el
      // locator se resolvía antes de que existiera ninguna píldora.
      await expect
        .poll(async () => (await n3.estadoDeLasPildoras(slugN2)).map((p) => p.texto), {
          message: 'las píldoras del N2 padre terminan de montarse en la PLP N3',
          timeout: 30000,
        })
        .toContain(nombrePildora);
      const pildoras = await n3.estadoDeLasPildoras(slugN2);
      const actual = pildoras.find((p) => p.texto === nombrePildora);
      expect(actual, `la píldora "${nombrePildora}" sigue visible en la PLP N3`).toBeTruthy();
      expect(actual!.seleccionada, `la píldora "${nombrePildora}" aparece seleccionada`).toBe(true);
      expect(
        pildoras.filter((p) => !/^tod(o|as)$/i.test(p.texto)).length,
        'las píldoras del N2 padre siguen visibles desde la N3',
      ).toBeGreaterThan(1);
      await n3.capturarEvidencia(cp, 2, 'pildoras del N2 padre con la actual seleccionada');

      await n3.pildoraTodo.first().click();
      await page.waitForURL(`**${new URL(urlN2).pathname}`, { timeout: 30000 });
      expect(new URL(page.url()).pathname, '"Todo" vuelve al N2 padre').toBe(
        new URL(urlN2).pathname,
      );
      await n3.capturarEvidencia(cp);
    });

    test('TC-B2C35-D-007 · Filtros abre el modal y el dropdown Ordenar por reordena el listado (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C35-D-007';
      test.setTimeout(180000);

      const plp = new PLPCategoriaPage(page, rutaDe(categoriaN2(testData)));
      await plp.goto();

      // Paso 1 — clic en "Filtros".
      const modal = await plp.abrirFiltros();
      await expect(modal, 'el modal de filtros se abre').toBeVisible();
      expect(await modal.getAttribute('aria-modal'), 'se abre como modal').toBe('true');
      await expect(
        modal.getByText(/aplica tus filtros/i),
        'el modal trae la sección de filtros',
      ).toBeVisible();
      await plp.capturarEvidencia(cp, 1, 'modal de filtros abierto', { elemento: modal });
      await page.keyboard.press('Escape');
      await expect(modal, 'el modal se cierra').toBeHidden();

      // Paso 2 — elegir una opción del dropdown Ordenar por.
      const antes = await plp.ordenDeLaGrilla();
      expect(antes.length, 'la grilla trae productos que ordenar').toBeGreaterThan(1);
      await plp.capturarEvidencia(cp, 2, 'listado antes de ordenar');

      await plp.ordenarPor(/precio m[áa]s bajo/i);
      const despues = await plp.ordenDeLaGrilla();
      await plp.capturarEvidencia(cp, 2, 'listado ordenado por precio mas bajo');

      // El TC pide que "el listado se reordene según la opción elegida", y eso es lo que se
      // afirma: que el criterio quede aplicado y que la secuencia de productos cambie. No se
      // comprueba la monotonía numérica porque el caso no declara **con qué precio** ordena el
      // sistema —el de lista o el promocional— y las tarjetas en oferta muestran los dos. Elegir
      // uno sería inventar la especificación y el veredicto dependería de esa elección.
      expect(
        await plp.botonOrdenar.getAttribute('aria-label'),
        'el control refleja el criterio elegido',
      ).toMatch(/precio m[áa]s bajo/i);
      expect(new URL(page.url()).search, 'el criterio queda reflejado en la URL').toContain('sort=');
      expect(despues, 'el listado se reordena al elegir el criterio').not.toEqual(antes);
      expect(despues.length, 'el listado conserva sus productos tras reordenar').toBe(antes.length);
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-D-012 · La PLP muestra el error NAV-005 con Reintentar y al 3er reintento redirige al Home (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C35-D-012';
      test.setTimeout(240000);

      const urlN2 = categoriaN2(testData);
      const slugN2 = slugDe(urlN2);
      const plp = new PLPCategoriaPage(page, rutaDe(urlN2));
      await plp.goto();
      await plp.capturarEvidencia(cp, 1, 'PLP cargada con normalidad');

      // Pasos 1 y 2 — simular una demora mayor a la que la HU tolera y entrar a una PLP.
      //
      // La entrada tiene que ser por navegación dentro del sitio: en una carga directa por URL los
      // productos vienen ya renderizados desde el servidor y no hay consulta que demorar, así que
      // el caso no llegaría nunca a su escenario.
      await page.route('**/shopper-search/**/product-search*', async (route) => {
        await new Promise((r) => setTimeout(r, 12000));
        await route.abort('timedout');
      });
      await plp.pildorasDeSubcategoria(slugN2).first().click();

      await expect(
        plp.errorDeCarga,
        'tras la demora se muestra "Tuvimos problemas en cargar tus productos"',
      ).toBeVisible({ timeout: 60000 });
      await expect(plp.codigoDeError, 'se muestra el código Error: NAV-005').toBeVisible();
      await expect(plp.reintentar, 'se ofrece Reintentar').toBeVisible();
      await plp.capturarEvidencia(cp, 2, 'pantalla de error NAV-005');

      // Paso 3 — reintentar tres veces con el servicio todavía caído.
      const urlDelError = new URL(page.url()).pathname;
      for (let intento = 1; intento <= 3; intento += 1) {
        await plp.reintentar.click();
        await page.waitForTimeout(4000);
      }
      await plp.capturarEvidencia(cp, 3, 'PLP tras el tercer reintento');

      expect(new URL(page.url()).pathname, 'al tercer reintento la PLP redirige al Home').toBe('/');
      expect(new URL(page.url()).pathname, 'ya no se queda en la PLP con el error').not.toBe(
        urlDelError,
      );
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-D-015 · Al volver de la PDP con atras, la PLP restaura el scroll exacto sin recargar (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C35-D-015';
      test.setTimeout(180000);

      // Paso 1 — hacer scroll en la grilla y entrar a una PDP desde una tarjeta visible.
      const plp = new PLPCategoriaPage(page, rutaDe(categoriaN2(testData)));
      await plp.goto();
      const alto = await page.evaluate(() => document.body.scrollHeight);
      const destino = Math.min(1200, Math.max(600, Math.round(alto / 3)));
      const scrollPrevio = await plp.desplazarA(destino);
      expect(scrollPrevio, 'la grilla se desplazó antes de entrar a la PDP').toBeGreaterThan(0);
      await plp.capturarEvidencia(cp, 1, 'PLP desplazada antes de entrar a la PDP');

      const tarjeta = plp.tarjetas.filter({ visible: true }).first();
      const nombre = (await tarjeta.innerText()).trim();
      await tarjeta.click();
      await page.waitForURL('**/product/**', { timeout: 30000 });
      await plp.capturarEvidencia(cp, 1, 'PDP abierta desde la tarjeta');

      // Paso 2 — volver con el botón atrás del navegador.
      await page.goBack();
      await plp.waitUntilReady();
      await page.waitForTimeout(4000);
      const scrollRestaurado = await plp.posicionDeScroll();
      await plp.capturarEvidencia(cp, 2, 'PLP tras volver con el boton atras');

      expect(
        Math.abs(scrollRestaurado - scrollPrevio),
        `el scroll se restaura a la posición exacta previa (salió de ${scrollPrevio} y volvió a ${scrollRestaurado})`,
      ).toBeLessThanOrEqual(100);
      // `boundingBox()` devuelve la caja relativa a la página, así que la posición dentro del
      // viewport es su `y` menos el scroll actual.
      const caja = await plp.tarjetas.filter({ hasText: nombre }).first().boundingBox();
      const alturaViewport = page.viewportSize()!.height;
      const dentroDelViewport =
        caja !== null && caja.y - scrollRestaurado >= 0 && caja.y - scrollRestaurado < alturaViewport;
      expect(dentroDelViewport, 'la tarjeta desde la que se navegó queda visible').toBe(true);
      await plp.capturarEvidencia(cp);
    });
  });

  /*
   * Mobile 390x844 — corrida 2026-10-07 (planilla SP1). Los tokens de cada fila vienen en la
   * columna "Descripción" (el CA en "Test data"): son la data declarada.
   *
   * Sin `test()`: M-024 (pide "método de entrega activo" y la fila no declara dirección ni tienda)
   * y M-029 ({CATEGORY_N2_URL} SÍ tiene banner circular, así que su precondición no se cumple).
   *
   * Los casos de carga lenta y error (M-035 a M-038) entran a la N2 desde el menú de categorías del
   * Home: por URL directa la grilla llega renderizada desde el servidor y no hay consulta de
   * productos que retener o bloquear.
   */
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    /** Home → menú de categorías → tarjeta de la N2 declarada. Devuelve la PLP ya cargada (o en carga). */
    async function n2DesdeElMenu(page: Page, urlN2: string, esperar = true): Promise<PLPCategoriaPage> {
      const nombre = await PLPCategoriaPage.nombreDeCategoria(page, urlN2);
      const home = new HomePage(page);
      await home.goto();
      const menu = await home.header.abrirCategoriasMobile();
      await menu.clicTarjetaN2(new RegExp(`^\\s*${nombre.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`));
      const plp = new PLPCategoriaPage(page);
      if (esperar) await plp.waitUntilReady();
      return plp;
    }

    test('TC-B2C35-M-001 · Verificar que el menú de categorías abre la PLP N2 seleccionada (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-001';
      test.setTimeout(150000);
      const urlN2 = categoriaN2(testData);
      const nombre = await PLPCategoriaPage.nombreDeCategoria(page, urlN2);

      // Pasos 1 a 3 — Home y menú de categorías.
      const home = new HomePage(page);
      await home.goto();
      const menu = await home.header.abrirCategoriasMobile();
      await home.capturarEvidencia(cp, 3, 'menu de categorias abierto');
      await menu.clicTarjetaN2(new RegExp(`^\\s*${nombre}\\s*$`));

      // Paso 4 — la PLP N2.
      const plp = new PLPCategoriaPage(page);
      await plp.waitUntilReady();
      expect(new URL(page.url()).pathname, 'la URL coincide con {CATEGORY_N2_URL}').toBe(new URL(urlN2).pathname);
      await expect(plp.titulo, 'la PLP de la N2 elegida').toHaveText(nombre);
      await expect(plp.enlacesDeProducto.first(), 'con su listado').toBeVisible();
      await plp.capturarEvidencia(cp, 4, `PLP N2 ${nombre}`);
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-002 · Verificar que una URL directa de categoría N3 abre su PLP (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-002';
      test.setTimeout(120000);
      const urlN3 = categoriaN3(testData);
      const plp = new PLPCategoriaPage(page, rutaDe(urlN3));
      await plp.goto();
      expect(new URL(page.url()).pathname).toBe(new URL(urlN3).pathname);
      await expect(plp.titulo, 'título de la N3').toHaveText(await PLPCategoriaPage.nombreDeCategoria(page, urlN3));
      await expect(plp.enlacesDeProducto.first(), 'listado de productos').toBeVisible();
      await plp.capturarEvidencia(cp, 2, 'PLP N3 por URL directa');
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-005 · Verificar que la PLP N2 muestra sus componentes en el orden definido (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-005';
      test.setTimeout(150000);
      const plp = new PLPCategoriaPage(page, rutaDe(categoriaN2(testData)));
      await plp.goto();
      await plp.capturarEvidencia(cp, 2, 'PLP N2 cargada');

      // Paso 3 — recorrido completo.
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(2500);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(1000);
      const orden = await plp.ordenDeComponentesMobile();
      test.info().annotations.push({ type: 'orden', description: JSON.stringify(orden) });
      await plp.capturarEvidencia(cp, 3, 'PLP N2 completa', { fullPage: true });

      expect(orden.ordenarPor, 'no se muestra el dropdown "Ordenar por"').toBeNull();
      const secuencia = (['breadcrumb', 'titulo', 'filtros', 'pildoras', 'grilla'] as const).map((k) => [k, orden[k]] as const);
      for (const [k, v] of secuencia) expect(v, `se muestra ${k}`).not.toBeNull();
      expect(orden.breadcrumb!).toBeLessThan(orden.titulo!);
      expect(orden.titulo!, 'título antes que Filtros').toBeLessThan(orden.filtros!);
      expect(orden.filtros!, 'Filtros antes o en la fila de las píldoras').toBeLessThanOrEqual(orden.pildoras!);
      expect(orden.pildoras!, 'píldoras antes que la grilla').toBeLessThan(orden.grilla!);
      expect(orden.contador, 'junto al título se muestra la cantidad de productos').not.toBeNull();
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-006 · Verificar que el breadcrumb trunca los nodos intermedios con "…" (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-006';
      test.setTimeout(120000);
      const urlN3 = categoriaN3(testData);
      const plp = new PLPCategoriaPage(page, rutaDe(urlN3));
      await plp.goto();
      await expect(plp.inicioDelBreadcrumb, 'ícono de Inicio').toBeVisible();
      await expect(plp.puntosDelBreadcrumb, '"…" en lugar de los nodos intermedios').toBeVisible();
      const nodos = await plp.nodosVisiblesDeBreadcrumb();
      test.info().annotations.push({ type: 'breadcrumb', description: nodos.map((n) => n.texto).join(' > ') });
      expect(nodos.map((n) => n.texto), 'Inicio > … > categoría actual').toEqual([expect.stringMatching(/^(\.\.\.|…)$/), await plp.titulo.innerText()]);
      await plp.capturarEvidencia(cp, 2, 'breadcrumb truncado', { elemento: plp.breadcrumb });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-007 · Verificar que tocar "…" del breadcrumb expande los nodos intermedios (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-007';
      test.setTimeout(120000);
      const plp = new PLPCategoriaPage(page, rutaDe(categoriaN3(testData)));
      await plp.goto();
      await plp.capturarEvidencia(cp, 2, 'breadcrumb truncado', { elemento: plp.breadcrumb });

      // Pasos 3 y 4 — tocar "…".
      await plp.puntosDelBreadcrumb.click();
      await page.waitForTimeout(1000);
      const nodos = await plp.nodosVisiblesDeBreadcrumb();
      test.info().annotations.push({ type: 'breadcrumb', description: nodos.map((n) => `${n.texto}(${n.href})`).join(' > ') });
      await expect(plp.inicioDelBreadcrumb, 'Inicio').toBeVisible();
      expect(nodos.length, 'ruta completa N1 > N2 > N3').toBe(3);
      expect(nodos[0].href, 'N1').toMatch(/^\/category\/[^_]+$/);
      expect(nodos[1].href, 'N2').toMatch(/^\/category\/[^_]+_[^_]+$/);
      expect(nodos[2].texto, 'N3 actual').toBe((await plp.titulo.innerText()).trim());
      await plp.capturarEvidencia(cp, 4, 'breadcrumb expandido Inicio > N1 > N2 > N3', { elemento: plp.breadcrumb });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-008 · Verificar que la PLP muestra el título de la categoría y la cantidad de productos (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-008';
      test.setTimeout(120000);
      const plp = new PLPCategoriaPage(page, rutaDe(categoriaN2(testData)));
      await plp.goto();
      await expect(plp.titulo, 'título de la categoría').toBeVisible();
      await plp.capturarEvidencia(cp, 2, 'cabecera de la PLP N2', { elemento: plp.main });
      await expect(plp.contadorVisible, 'la cantidad total de productos junto al título').toBeVisible({ timeout: 10000 });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-010 · Verificar que las píldoras de la N2 muestran "Todas" activa y las N3 en el orden de BM (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-010';
      test.setTimeout(120000);
      const urlN2 = categoriaN2(testData);
      const plp = new PLPCategoriaPage(page, rutaDe(urlN2));
      await plp.goto();
      await expect.poll(async () => (await plp.estadoDeLasPildoras(slugDe(urlN2))).length, { timeout: 30000 }).toBeGreaterThan(1);
      // Las tarjetas del banner circular también enlazan a subcategorías: la fila de píldoras
      // empieza en "Todo".
      const todas = await plp.estadoDeLasPildoras(slugDe(urlN2));
      const pildoras = todas.slice(Math.max(0, todas.findIndex((p) => /^tod(o|as)$/i.test(p.texto))));
      test.info().annotations.push({ type: 'pildoras', description: pildoras.map((p) => `${p.texto}${p.seleccionada ? '*' : ''}`).join(', ') });
      expect(pildoras[0].texto, 'la primera píldora es "Todas" (la UI la escribe "Todo")').toMatch(/^tod(o|as)$/i);
      expect(pildoras[0].seleccionada, '"Todas" aparece seleccionada').toBe(true);
      const n3 = pildoras.slice(1);
      expect(n3.length, 'le siguen las N3 activas').toBeGreaterThan(0);
      for (const p of n3) expect(p.href ?? '', `${p.texto} es una N3 de la categoría`).toMatch(new RegExp(`^/category/${slugDe(urlN2)}_`));
      await plp.capturarEvidencia(cp, 2, 'pildoras de la N2 con Todas activa', { elemento: plp.pildoraTodo.locator('visible=true').first().locator('xpath=ancestor::*[3]') });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-011 · Verificar que la píldora "Todas" de la PLP N2 vuelve a la PLP N1 padre (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-011';
      test.setTimeout(120000);
      const urlN1 = tokenExigido(testData, 'CATEGORY_N1_URL');
      const plp = new PLPCategoriaPage(page, rutaDe(categoriaN2(testData)));
      await plp.goto();
      await plp.capturarEvidencia(cp, 2, 'PLP N2');
      const todo = plp.pildoraTodo.locator('visible=true').first();
      test.info().annotations.push({ type: 'todo', description: `href=${await todo.getAttribute('href')}` });
      await todo.click();
      await page.waitForTimeout(5000);
      test.info().annotations.push({ type: 'tras clic', description: page.url() });
      await plp.capturarEvidencia(cp, 3, 'PLP tras tocar Todo');
      await page.waitForURL(`**${new URL(urlN1).pathname}`, { timeout: 25000 });
      await plp.waitUntilReady();
      expect(new URL(page.url()).pathname, 'se muestra la PLP N1 padre').toBe(new URL(urlN1).pathname);
      await plp.capturarEvidencia(cp, 4, 'PLP N1 padre');
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-012 · Verificar que las píldoras se desplazan horizontalmente sin romper el layout (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-012';
      test.setTimeout(120000);
      const plp = new PLPCategoriaPage(page, rutaDe(categoriaN2(testData)));
      await plp.goto();
      const fila = await plp.filaDePildoras();
      expect(fila, 'las píldoras no caben en 390 px y la fila tiene scroll horizontal').not.toBeNull();
      await plp.capturarEvidencia(cp, 2, 'fila de pildoras al inicio');
      const r = await plp.deslizarPildoras(250);
      test.info().annotations.push({ type: 'scroll', description: JSON.stringify({ fila, ...r }) });
      expect(r.despues, 'las píldoras se desplazan horizontalmente').toBeGreaterThan(r.antes);
      expect(r.scrollYDespues, 'la página no se mueve verticalmente').toBe(r.scrollYAntes);
      expect(r.anchoDoc, 'la página no se deforma (sin scroll horizontal del documento)').toBeLessThanOrEqual(390);
      await plp.capturarEvidencia(cp, 4, 'pildoras desplazadas');
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-013 · Verificar que tocar una píldora N3 navega a su PLP y resetea los filtros (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-013';
      test.setTimeout(180000);
      const urlN2 = categoriaN2(testData);
      const plp = new PLPCategoriaPage(page, rutaDe(urlN2));
      await plp.goto();

      // Pasos 3 y 4 — aplicar un filtro (Ofertas) desde "Filtros".
      const panel = await plp.abrirPanelDeFiltros();
      await panel.alternarOfertas();
      await panel.botonMostrar.click();
      await page.waitForTimeout(3000);
      const conFiltro = new URL(page.url()).search;
      expect(conFiltro, 'queda un filtro aplicado en la N2').not.toBe('');
      await plp.capturarEvidencia(cp, 4, 'PLP N2 con filtro Ofertas aplicado');

      // Pasos 5 y 6 — píldora N3.
      const pildora = plp.pildorasDeSubcategoria(slugDe(urlN2)).locator('visible=true').first();
      const destino = await pildora.getAttribute('href');
      const nombre = (await pildora.innerText()).trim();
      await pildora.click();
      await page.waitForURL(`**${destino}**`, { timeout: 30000 });
      await plp.waitUntilReady();
      expect(new URL(page.url()).pathname, 'URL de la N3').toBe(destino);
      expect(new URL(page.url()).search, 'sin filtros en la URL').toBe('');
      await expect(plp.titulo, 'título de la N3').toHaveText(nombre);
      const nodos = await plp.nodosVisiblesDeBreadcrumb();
      expect(nodos[nodos.length - 1].texto, 'breadcrumb termina en la N3').toBe(nombre);
      const panelN3 = await plp.abrirPanelDeFiltros();
      expect(await panelN3.ofertasActivo(), 'el panel queda sin filtros aplicados').toBe(false);
      await plp.capturarEvidencia(cp, 6, 'panel de filtros de la N3 sin filtros', { elemento: panelN3.root });
      await page.keyboard.press('Escape');
      await expect(plp.contadorVisible, 'el conteo corresponde a la N3').toBeVisible({ timeout: 10000 });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-015 · Verificar que desde una PLP N3 se ven las píldoras de la N2 con la actual seleccionada (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-015';
      test.setTimeout(120000);
      const urlN3 = categoriaN3(testData);
      const slugN2 = slugDe(urlN3).split('_').slice(0, 2).join('_');
      const plp = new PLPCategoriaPage(page, rutaDe(urlN3));
      await plp.goto();
      const nombre = (await plp.titulo.innerText()).trim();
      await expect.poll(async () => (await plp.estadoDeLasPildoras(slugN2)).map((p) => p.texto), { timeout: 30000 }).toContain(nombre);
      const pildoras = (await plp.estadoDeLasPildoras(slugN2)).filter((p) => p.href !== `/category/${slugN2.split('_')[0]}`);
      const actual = pildoras.find((p) => p.texto === nombre);
      test.info().annotations.push({ type: 'pildoras', description: pildoras.map((p) => `${p.texto}${p.seleccionada ? '*' : ''}`).join(', ') });
      expect(pildoras.filter((p) => !/^tod(o|as)$/i.test(p.texto)).length, 'se ven las píldoras del N2 padre').toBeGreaterThan(1);
      expect(actual?.seleccionada, `la píldora de la N3 actual (${nombre}) aparece seleccionada`).toBe(true);
      await plp.capturarEvidencia(cp, 2, 'pildoras del N2 con la N3 actual seleccionada');
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-016 · Verificar que la píldora "Todas" de la PLP N3 vuelve a la PLP N2 padre (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-016';
      test.setTimeout(120000);
      const urlN2 = categoriaN2(testData);
      const plp = new PLPCategoriaPage(page, rutaDe(categoriaN3(testData)));
      await plp.goto();
      await plp.capturarEvidencia(cp, 2, 'PLP N3');
      await plp.pildoraTodo.locator('visible=true').first().click();
      await page.waitForURL(`**${new URL(urlN2).pathname}`, { timeout: 30000 });
      await plp.waitUntilReady();
      expect(new URL(page.url()).pathname, 'se muestra la PLP N2 padre').toBe(new URL(urlN2).pathname);
      await plp.capturarEvidencia(cp, 4, 'PLP N2 padre');
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-017 · Verificar que tocar "Filtros" abre el modal de filtros (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-017';
      test.setTimeout(120000);
      const plp = new PLPCategoriaPage(page, rutaDe(categoriaN2(testData)));
      await plp.goto();
      const panel = await plp.abrirPanelDeFiltros();
      await expect(panel.titulo, 'modal de filtros de B2C-71').toBeVisible();
      await expect(panel.seccionAplicarFiltros).toBeVisible();
      await plp.capturarEvidencia(cp, 4, 'modal de filtros abierto', { elemento: panel.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-019 · Verificar que cada producto de la grilla muestra imagen, nombre, precio y "Agregar" (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-019';
      test.setTimeout(150000);
      const plp = new PLPCategoriaPage(page, rutaDe(categoriaN2(testData)));
      await plp.goto();
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(3000);
      await page.evaluate(() => window.scrollTo(0, 0));
      const tarjetas = await plp.contenidoDeLasTarjetas();
      test.info().annotations.push({ type: 'tarjetas', description: JSON.stringify(tarjetas) });
      expect(tarjetas.length, 'la grilla trae productos').toBeGreaterThan(0);
      // Un producto sin stock reemplaza "Agregar" por "Pronto disponible" + "Ver similares" (CA10a):
      // eso no es una tarjeta incompleta.
      const incompletas = tarjetas.filter((t) => !t.imagen || !t.nombre || !t.precio || !(t.agregar || t.sinStock)).map((t) => `${t.nombre || '(sin nombre)'} [imagen ${t.imagen}, precio ${t.precio}, agregar ${t.agregar}]`);
      await plp.capturarEvidencia(cp, 2, 'grilla de productos');
      expect(incompletas, 'cada producto muestra imagen, nombre, precio y "Agregar"').toEqual([]);
      await plp.capturarEvidencia(cp);
    });

    // Re-corrida 2026-10-09: la fila ya declara {DIRECCION_DESPACHO}.
    test('TC-B2C35-M-022 · Verificar que con Despacho a domicilio la PLP muestra la disponibilidad de la tienda asignada (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-022';
      test.setTimeout(240000);
      const direccion = tokenExigido(testData, 'DIRECCION_DESPACHO');
      const [, calle, numero] = direccion.match(/^(.*?)\s+(\d+)\s/) ?? [];

      // Precondición — Despacho a domicilio activo con {DIRECCION_DESPACHO}, como invitado.
      const home = await new HomePage(page).goto();
      await home.header.storeLocator.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await modal.fijarDireccionComoInvitado(direccion, new RegExp(`${calle}\\s+${numero}`, 'i'));
      await home.capturarEvidencia(cp, 0, 'Despacho a domicilio activo', { elemento: home.header.barraDelSitio });

      // Pasos 1 y 2 — PLP N2 con el listado; la tienda que el sitio asigna a la dirección.
      const plp = new PLPCategoriaPage(page, rutaDe(categoriaN2(testData)));
      const tienda = plp.observarTiendaAsignada();
      await plp.goto();
      await plp.header.esperarDireccionEnStoreLocator(45000);
      const enPantalla = await plp.disponibilidadPorSku();
      await expect.poll(() => !!tienda.inventoryId && !!tienda.authorization, { timeout: 30000, message: 'tienda asignada a la dirección' }).toBe(true);
      await plp.capturarEvidencia(cp, 2, `PLP N2 con la tienda ${tienda.tienda} asignada`);

      // Esperado — cada producto se muestra disponible solo si tiene stock en esa tienda.
      const skus = Object.keys(enPantalla);
      expect(skus.length, 'productos en la grilla').toBeGreaterThan(0);
      const enTienda = await plp.disponibilidadEnInventario(skus, tienda.inventoryId!, tienda);
      const distintos = skus.filter((s) => enPantalla[s] !== enTienda[s]);
      test.info().annotations.push({
        type: 'disponibilidad',
        description: `tienda ${tienda.tienda} (${tienda.inventoryId}): ${skus.length} productos, ${skus.filter((s) => !enPantalla[s]).length} sin stock en pantalla`,
      });
      expect(distintos, 'productos cuya disponibilidad en pantalla no coincide con el stock de la tienda asignada').toEqual([]);
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-021 · Verificar que sin método de entrega la PLP muestra la disponibilidad general del catálogo (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-021';
      test.setTimeout(120000);
      const plp = new PLPCategoriaPage(page, rutaDe(categoriaN2(testData)));
      await plp.goto();
      await expect(page.getByText(/elige una forma de entrega/i).first(), 'precondición: sin método de entrega').toBeVisible();
      const tarjetas = await plp.contenidoDeLasTarjetas();
      test.info().annotations.push({ type: 'tarjetas', description: `${tarjetas.length} productos, ${tarjetas.filter((t) => t.agregar).length} con Agregar` });
      expect(tarjetas.length, 'la PLP muestra productos').toBeGreaterThan(0);
      expect(tarjetas.filter((t) => t.agregar).length, 'con la disponibilidad general del catálogo (se pueden agregar)').toBeGreaterThan(0);
      await plp.capturarEvidencia(cp, 2, 'PLP sin metodo de entrega');
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-027 · Verificar que sin banner principal configurado no se muestra ni deja espacio vacío (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-027';
      test.setTimeout(120000);
      const plp = new PLPCategoriaPage(page, rutaDe(categoriaN2(testData)));
      await plp.goto();
      const entre = await plp.entreBreadcrumbYTitulo();
      test.info().annotations.push({ type: 'entre', description: JSON.stringify(entre) });
      await plp.capturarEvidencia(cp, 2, `breadcrumb y titulo (${entre.separacion} px)`);
      expect(entre.imagenes, 'no hay banner entre el breadcrumb y el título').toBe(0);
      expect(entre.separacion, 'el título aparece directamente debajo, sin espacio vacío').toBeLessThan(60);
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-031 · Verificar que sin grid de banners asignado el componente no se muestra (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-031';
      test.setTimeout(120000);
      const plp = new PLPCategoriaPage(page, rutaDe(categoriaN2(testData)));
      await plp.goto();
      const entre = await plp.entreBreadcrumbYTitulo();
      test.info().annotations.push({ type: 'entre', description: JSON.stringify(entre) });
      await plp.capturarEvidencia(cp, 2, `sobre el titulo (${entre.separacion} px)`);
      expect(entre.imagenes, 'no se muestra el grid de banners sobre el título').toBe(0);
      expect(entre.separacion, 'no queda espacio vacío sobre el título').toBeLessThan(60);
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-034 · Verificar que la PLP muestra skeletons por componente mientras carga (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-034';
      test.setTimeout(240000);
      const plp = new PLPCategoriaPage(page, rutaDe(categoriaN2(testData)));
      await plp.registrarSkeletons();
      await plp.ralentizarRed(600);
      const cargando = page.goto(`/${rutaDe(categoriaN2(testData))}`, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await page.waitForTimeout(2500);
      await plp.capturarEvidencia(cp, 2, 'PLP durante la carga con red lenta');
      await cargando;
      await plp.waitUntilReady();
      await expect(plp.enlacesDeProducto.first()).toBeVisible({ timeout: 120000 });
      const max = await plp.skeletonsRegistrados();
      await plp.liberarProductos();
      test.info().annotations.push({ type: 'skeleton', description: `max ${max}` });
      await plp.capturarEvidencia(cp, 2, 'PLP con el contenido real');
      expect(max, 'durante la carga se ven skeletons').toBeGreaterThan(0);
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-035 · Verificar que los componentes que ya cargaron se muestran sin esperar a los demás (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-035';
      test.setTimeout(180000);
      const urlN2 = categoriaN2(testData);
      const nombre = await PLPCategoriaPage.nombreDeCategoria(page, urlN2);
      const plpRetenida = new PLPCategoriaPage(page);
      await plpRetenida.retenerProductos(slugDe(urlN2), 6000);

      // Paso 1 — entrar a la N2 (por el menú, para que la grilla se pida desde el navegador).
      const plp = await n2DesdeElMenu(page, urlN2, false);
      await expect(plp.titulo, 'el título ya muestra su contenido real').toHaveText(nombre, { timeout: 15000 });
      await page.waitForTimeout(1000);
      const estado = {
        breadcrumb: await plp.breadcrumb.isVisible(),
        pildoras: await plp.pildoraTodo.locator('visible=true').count(),
        productos: await plp.enlacesDeProducto.count(),
        skeletons: await plp.skeletonsAhora(),
      };
      test.info().annotations.push({ type: 'durante', description: JSON.stringify(estado) });
      await plp.capturarEvidencia(cp, 2, 'cabecera real con la grilla aun cargando');
      expect(estado.breadcrumb, 'breadcrumb con su contenido real').toBe(true);
      expect(estado.pildoras, 'píldoras con su contenido real').toBeGreaterThan(0);
      expect(estado.productos, 'la grilla todavía no tiene productos').toBe(0);
      expect(estado.skeletons, 'la grilla muestra skeleton mientras tanto').toBeGreaterThan(0);
      await expect(plp.enlacesDeProducto.first(), 'luego la grilla carga').toBeVisible({ timeout: 30000 });
      await plp.liberarProductos();
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-036 · Verificar que tras 8 segundos sin respuesta la PLP muestra el error con reintento (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-036';
      test.setTimeout(180000);
      const urlN2 = categoriaN2(testData);
      const plpRetenida = new PLPCategoriaPage(page);
      await plpRetenida.retenerProductos(slugDe(urlN2), 20000, true);

      const plp = await n2DesdeElMenu(page, urlN2, false);
      const inicio = Date.now();
      await page.waitForTimeout(3000);
      await plp.capturarEvidencia(cp, 2, 'PLP con la consulta de productos retenida');
      await expect(plp.errorDeCarga, 'a los 8 s se muestra "Tuvimos problemas en cargar tus productos"').toBeVisible({ timeout: 14000 });
      const segundos = Math.round((Date.now() - inicio) / 1000);
      test.info().annotations.push({ type: 'tiempo', description: `error visible a los ~${segundos} s del clic` });
      await expect(plp.codigoDeError, '"Error NAV-005"').toBeVisible();
      await expect(plp.reintentar, '"Reintentar"').toBeVisible();
      await plp.capturarEvidencia(cp, 2, `pantalla de error a los ${segundos} s`);
      await plp.liberarProductos();
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-037 · Verificar que un error del servicio de productos muestra NAV-005 con "Reintentar" (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-037';
      test.setTimeout(180000);
      const urlN2 = categoriaN2(testData);
      const plpBloqueada = new PLPCategoriaPage(page);
      await plpBloqueada.bloquearProductos(slugDe(urlN2));
      const plp = await n2DesdeElMenu(page, urlN2, false);
      await expect(plp.errorDeCarga, 'mensaje "Tuvimos problemas en cargar tus productos"').toBeVisible({ timeout: 30000 });
      await expect(plp.codigoDeError, '"Error NAV-005"').toBeVisible();
      await expect(plp.reintentar, '"Reintentar"').toBeVisible();
      await plp.capturarEvidencia(cp, 2, 'pantalla de error NAV-005');
      await plp.liberarProductos();
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C35-M-038 · Verificar que "Reintentar" vuelve a cargar los productos de la PLP (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C35-M-038';
      test.setTimeout(180000);
      const urlN2 = categoriaN2(testData);
      const plpBloqueada = new PLPCategoriaPage(page);
      await plpBloqueada.bloquearProductos(slugDe(urlN2));
      const plp = await n2DesdeElMenu(page, urlN2, false);
      await expect(plp.codigoDeError, 'pantalla de error con "Error NAV-005"').toBeVisible({ timeout: 30000 });
      await plp.capturarEvidencia(cp, 2, 'pantalla de error NAV-005');

      // Paso 3 — quitar el bloqueo y tocar Reintentar.
      await plp.liberarProductos();
      await plp.reintentar.click();
      await expect(plp.enlacesDeProducto.first(), 'la PLP carga la grilla de productos').toBeVisible({ timeout: 30000 });
      await plp.capturarEvidencia(cp, 4, 'grilla cargada tras Reintentar');
      await plp.capturarEvidencia(cp);
    });
  });
});
