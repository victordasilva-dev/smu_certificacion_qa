import { Page, Response } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP_1280, MOBILE } from './support/viewports';
import { PLPCategoriaPage } from './pages/PLPCategoriaPage';
import { PLPCategoriaN1Page } from './pages/PLPCategoriaN1Page';
import { PDPPage } from './pages/PDPPage';
import { ShelfProducto } from './pages/ShelfProducto';

/**
 * B2C-59 — Shelf (tarjeta) de producto en PLP y SRP.
 *
 * Están aquí los 27 TC que se pudieron ejecutar sobre la PLP que la planilla declara en `{PLP_URL}`.
 * Los otros 19 no llegaron a tener `test()`:
 *
 * - **2 fuera de alcance**: los BM, que se conducen desde Business Manager.
 * - **17 bloqueados por falta de fixture en la PLP declarada y en el ambiente**: no hay ningún
 *   producto con "Patrocinado" (la API ni expone el atributo), ninguno sin stock —y con él se caen
 *   también "Ver similares"—, ninguno con la mecánica "Completa la promo", ninguno con dos o más
 *   imágenes, ninguno que lleve cucarda *y* promoción a la vez, ninguno sin label de formato *y*
 *   sin promoción, y ninguno cuyo "Marca | Nombre" baje de 40 caracteres. Favoritos, además, abre
 *   el modal de login cuando se corre como invitado, que es el único tipo de usuario que la fila
 *   declara. Y el par Mobile del fallback de imagen (M-012) quedó bloqueado por una limitación del
 *   motor: webkit no entrega las peticiones de imagen a la interceptación de Playwright y el front
 *   no construye el `src` con la URL que devuelve la API, así que dos de los tres escenarios del
 *   caso no se pueden forzar en Mobile (en Desktop los tres sí se verificaron).
 *
 * Tres decisiones que valen para toda la suite:
 *
 * - **El producto lo elige la propiedad que el TC nombra, dentro de la PLP declarada.** Cada caso
 *   busca en `{PLP_URL}` el shelf que cumple su precondición (con cucarda, con promoción, sin label
 *   de formato, nombre más largo que el límite…) y la aserción de la precondición va en el propio
 *   `test()`. Así el veredicto no depende de un SKU elegido a mano y la evidencia dice con qué
 *   producto se corrió.
 * - **El shelf se ancla en el botón de favoritos.** No tiene `data-testid`; el resto de los
 *   locators cuelgan de ese ancla en `ShelfProducto`.
 * - **Los casos que necesitan mockear la API entran por navegación SPA** (la PLP N1 declarada y su
 *   píldora): por URL directa el listado viene por SSR y no hay petición cliente que interceptar.
 */

/** La URL de la PLP que el TC declara en su columna `Test data`, exigida. */
function plpUrl(testData: Parameters<typeof token>[0]): string {
  const valor = token(testData, 'PLP_URL');
  if (!valor) throw new Error('Falta {PLP_URL} en el Excel de data: el TC lo declara como su origen');
  return valor;
}

const rutaDe = (url: string) => new URL(url).pathname.slice(1);
const slugDe = (url: string) => new URL(url).pathname.split('/').pop()!;

/** Abre la PLP declarada por URL directa (SSR). */
async function abrirPLP(page: Page, testData: Parameters<typeof token>[0]): Promise<PLPCategoriaPage> {
  const plp = new PLPCategoriaPage(page, rutaDe(plpUrl(testData)));
  await plp.goto();
  await expect(ShelfProducto.todos(page).first()).toBeVisible({ timeout: 60000 });
  // El listado llega por SSR, así que los botones existen en el DOM antes de que React los
  // hidrate: un clic disparado en ese hueco no hace nada y se lee como "el producto no se agrega".
  // Se espera a que la red se calme, que es cuando el bundle ya tomó el control de la página.
  await page.waitForLoadState('networkidle', { timeout: 60000 }).catch(() => {});
  return plp;
}

/**
 * Abre la PLP declarada por navegación SPA, desde su categoría padre.
 *
 * Devuelve además los `hits` de `product-search`, que es la única forma de saber cuántas imágenes
 * tiene cada producto en el catálogo —el shelf renderiza una sola— y de distinguir qué productos
 * traen promoción. `registrarRutas` corre antes de navegar, para que los mocks lleguen a tiempo.
 */
async function abrirPLPporSpa(
  page: Page,
  testData: Parameters<typeof token>[0],
  registrarRutas?: () => Promise<void>,
): Promise<{ plp: PLPCategoriaPage; hits: Hit[] }> {
  const slugN2 = slugDe(plpUrl(testData));
  const slugN1 = slugN2.split('_')[0];
  const n1 = new PLPCategoriaN1Page(page, `category/${slugN1}`);
  await n1.goto();
  if (registrarRutas) await registrarRutas();
  const espera = page
    .waitForResponse(
      (r) => r.url().includes('product-search') && r.url().includes(`cgid%3D${slugN2}`),
      { timeout: 60000 },
    )
    .catch(() => null);
  await n1.pildoraDe(slugN2).first().click();
  const resp = await espera;
  const plp = new PLPCategoriaPage(page, `category/${slugN2}`);
  await expect(plp.titulo).toBeVisible({ timeout: 60000 });
  await expect(ShelfProducto.todos(page).first()).toBeVisible({ timeout: 60000 });
  return { plp, hits: resp ? await hitsDe(resp) : [] };
}

interface Hit {
  id: string;
  imagenes: number;
  conPromocion: boolean;
}

async function hitsDe(resp: Response): Promise<Hit[]> {
  const json = (await resp.json()) as {
    hits?: { productId: string; imageGroups?: { images?: unknown[] }[]; productPromotions?: unknown[] }[];
  };
  return (json.hits ?? []).map((h) => ({
    id: h.productId,
    imagenes: (h.imageGroups ?? []).reduce((a, g) => a + (g.images ?? []).length, 0),
    conPromocion: Array.isArray(h.productPromotions) && h.productPromotions.length > 0,
  }));
}

/** Todos los shelves de la página como Page Objects. */
async function shelvesDe(page: Page): Promise<ShelfProducto[]> {
  const total = await ShelfProducto.todos(page).count();
  return Array.from({ length: total }, (_, i) => ShelfProducto.enIndice(page, i));
}

/**
 * El primer shelf que cumple la precondición del TC.
 *
 * Devuelve `null` cuando ninguno la cumple, y entonces el `test()` falla diciendo que la PLP
 * declarada no ofrece el producto que el caso pide — que es información distinta de un defecto.
 */
async function primerShelf(
  page: Page,
  cumple: (s: ShelfProducto) => Promise<boolean>,
): Promise<ShelfProducto | null> {
  for (const s of await shelvesDe(page)) {
    if (await cumple(s)) return s;
  }
  return null;
}

const conCucarda = async (s: ShelfProducto) => (await s.cucardas()).length > 0;
const sinCucarda = async (s: ShelfProducto) => (await s.cucardas()).length === 0;
const conPromo = async (s: ShelfProducto) => (await s.combinaLaPromo.count()) > 0;
const sinPromo = async (s: ShelfProducto) => (await s.combinaLaPromo.count()) === 0;
const conFormato = async (s: ShelfProducto) => (await s.labelDeFormato()) !== null;
const sinFormato = async (s: ShelfProducto) => (await s.labelDeFormato()) === null;
const nombreDeMasDe = (limite: number) => async (s: ShelfProducto) =>
  (await s.nombreRenderizado()).largo > limite;
const nombreDeHasta = (limite: number) => async (s: ShelfProducto) =>
  (await s.nombreRenderizado()).largo <= limite;

/**
 * Agrega el producto del shelf al carro, reintentando mientras el botón no reaccione.
 *
 * El listado llega por SSR y el botón existe en el DOM antes de que React lo hidrate: el primer clic
 * puede caer en ese hueco y no hacer nada, sin error ninguno. El reintento distingue ese hueco de un
 * defecto: si tras tres clics espaciados el shelf sigue ofreciendo "Agregar", el problema es del
 * producto y el `test()` lo reporta.
 */
async function agregarAlCarro(shelf: ShelfProducto, intentos = 3): Promise<void> {
  for (let i = 0; i < intentos; i += 1) {
    await shelf.clicAgregar();
    try {
      await shelf.enCarro.waitFor({ state: 'visible', timeout: 12000 });
      return;
    } catch {
      if (i === intentos - 1) return;
    }
  }
}

/** Número de artículos que declara el mini carrito del header. */
async function articulosEnCarrito(page: Page): Promise<number> {
  const label = await page.locator('header button[aria-label^="Mi carrito"]').first().getAttribute('aria-label');
  const m = (label ?? '').match(/(\d+)\s*$/);
  return m ? Number(m[1]) : -1;
}

test.describe('B2C-59 — Shelf de producto en PLP y SRP', () => {
  // ==================================================================== DESKTOP
  test.describe('Desktop 1280x900', () => {
    test.use(DESKTOP_1280);

    test('TC-B2C59-D-002 · Mostrar cucarda cuando label esta configurado (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-D-002';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, conCucarda);
      expect(shelf, 'la PLP declarada ofrece un producto con cucarda configurada').not.toBeNull();
      const cucardas = await shelf!.cucardas();
      expect(cucardas.length, 'se muestra como máximo 1 cucarda en el shelf').toBe(1);
      expect(cucardas[0].texto, 'la cucarda lleva el texto del atributo label').not.toBe('');

      const imagen = await shelf!.caja(shelf!.imagen.first());
      expect(cucardas[0].dx, 'la cucarda va en la mitad izquierda de la imagen').toBeLessThan(imagen.width / 2);
      expect(cucardas[0].dy, 'la cucarda va en la mitad superior de la imagen').toBeLessThan(imagen.height / 2);
      await plp.capturarEvidencia(cp, 1, `cucarda ${cucardas[0].texto} sobre la imagen`, { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-D-003 · Ocultar cucarda cuando label=null (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-D-003';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, sinCucarda);
      expect(shelf, 'la PLP declarada ofrece un producto sin cucarda').not.toBeNull();
      expect(await shelf!.cucardas(), 'no se muestra ninguna cucarda sobre la imagen').toEqual([]);
      // "El área no muestra elemento placeholder vacío": sobre la imagen no queda ningún nodo con
      // recuadro visible y sin texto, que es como se vería un placeholder reservado.
      const placeholders = await shelf!.root.evaluate((shelf) => {
        const img = shelf.querySelector('img') ?? shelf.querySelector('[role="img"]');
        if (!img) return -1;
        const ri = img.getBoundingClientRect();
        return [...shelf.querySelectorAll('div,span,p')].filter((e) => {
          const r = e.getBoundingClientRect();
          return (
            !(e.textContent ?? '').trim() &&
            e.children.length === 0 &&
            r.width > 8 &&
            r.height > 8 &&
            r.top >= ri.top - 2 &&
            r.bottom <= ri.bottom + 2
          );
        }).length;
      });
      expect(placeholders, 'el área de la cucarda no deja un placeholder vacío').toBe(0);
      await plp.capturarEvidencia(cp, 1, 'shelf sin cucarda sobre la imagen', { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-D-005 · Ocultar Patrocinado cuando isSponsored=false (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-D-005';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const todos = await shelvesDe(page);
      expect(todos.length, 'la PLP declarada trae shelves').toBeGreaterThan(0);
      for (const s of todos) {
        expect(
          await s.patrocinado.count(),
          'ningún shelf de un producto no patrocinado muestra el texto "Patrocinado"',
        ).toBe(0);
      }
      await plp.capturarEvidencia(cp, 1, 'shelves sin el label Patrocinado', { fullPage: true });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-D-006 · Click en shelf navega a PDP y preserva breadcrumb (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-D-006';
      test.setTimeout(240000);
      const plp = await abrirPLP(page, testData);
      const categoria = (await plp.titulo.innerText()).trim();

      // Paso 3 — clic sobre la imagen del producto.
      const shelf = ShelfProducto.enIndice(page, 0);
      const nombre = (await shelf.nombreRenderizado()).texto;
      await plp.capturarEvidencia(cp, 2, 'shelf en la PLP de origen', { elemento: shelf.root });
      await shelf.clicImagen();
      await page.waitForURL(/\/product\//, { timeout: 60000 });
      const urlDesdeImagen = page.url();

      // Pasos 4 y 5 — la PDP del producto, con el contexto de origen en el breadcrumb.
      const pdp = new PDPPage(page);
      await expect(pdp.core, 'se carga la PDP del producto').toBeVisible({ timeout: 60000 });
      // El breadcrumb de la PDP se pinta por niveles: leerlo en cuanto aparece el bloque principal
      // devuelve una ruta a medias —o vacía— sin dar error, así que se espera a que se estabilice.
      const crumbs = (await pdp.rutaDeBreadcrumbEstable()).map((t) => t.trim());
      expect(crumbs, 'el breadcrumb de la PDP refleja la categoría de origen').toContain(categoria);
      await pdp.capturarEvidencia(cp, 4, 'PDP abierta desde la imagen del shelf');

      // Pasos 6 a 8 — volver y repetir por el nombre: misma PDP.
      await page.goBack();
      await expect(ShelfProducto.todos(page).first()).toBeVisible({ timeout: 60000 });
      await ShelfProducto.enIndice(page, 0).clicNombre();
      await page.waitForURL(/\/product\//, { timeout: 60000 });
      expect(page.url(), 'el nombre lleva a la misma PDP que la imagen').toBe(urlDesdeImagen);
      expect(nombre, 'el producto es el del shelf').toContain(' | ');
      await pdp.capturarEvidencia(cp, 8, 'misma PDP abierta desde el nombre del shelf');
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C59-D-008 · Galeria sin controles de navegacion cuando N=1 (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-D-008';
      test.setTimeout(240000);
      const { plp, hits } = await abrirPLPporSpa(page, testData);
      expect(hits.length, 'se pudo leer el catálogo de la PLP declarada').toBeGreaterThan(0);

      const indice = hits.findIndex((h) => h.imagenes === 1);
      expect(indice, 'la PLP declarada ofrece un producto con exactamente 1 imagen').toBeGreaterThanOrEqual(0);
      const shelf = ShelfProducto.enIndice(page, indice);

      await expect(shelf.imagen.first(), 'la imagen del shelf se muestra').toBeVisible();
      expect(await shelf.controlesDeGaleria.count(), 'no se muestran flechas ni dots de navegación').toBe(0);
      await plp.capturarEvidencia(cp, 2, 'imagen unica sin controles de navegacion', { elemento: shelf.root });

      const antes = await shelf.srcDeLaImagen();
      await shelf.hover();
      const despues = await shelf.srcDeLaImagen();
      expect(despues, 'con una sola imagen el hover no rota la imagen').toBe(antes);
      expect(await shelf.controlesDeGaleria.count(), 'el hover tampoco revela controles').toBe(0);
      await plp.capturarEvidencia(cp, 4, 'la imagen permanece estatica tras el hover', { elemento: shelf.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-D-009 · Mostrar label de formato en producto pesable (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-D-009';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, conFormato);
      expect(shelf, 'la PLP declarada ofrece un producto con label de formato').not.toBeNull();
      const formato = await shelf!.labelDeFormato();
      expect(formato, 'el label de formato trae cantidad y unidad de medida').toMatch(
        /^[\d.,]+\s*(kg|g|gr|lt|ml|un|cc)\.?$/i,
      );

      const orden = await shelf!.ordenDeSlots();
      expect(orden.formato!, 'el label de formato va debajo del nombre').toBeGreaterThan(orden.nombre!);

      // Coherencia con el catálogo: la unidad del label es la misma que la del PPUM del precio.
      const unidadLabel = formato!.match(/(kg|g|gr|lt|ml|un|cc)/i)![1].toLowerCase();
      const ppum = (await shelf!.ppum.first().innerText()).trim();
      const unidadPpum = ppum.match(/x\s*(kg|g|gr|lt|ml|un|cc)/i)?.[1].toLowerCase();
      expect(unidadPpum, `la unidad del PPUM (${ppum}) coincide con la del label (${formato})`).toBe(unidadLabel);
      await plp.capturarEvidencia(cp, 3, `label de formato ${formato} bajo el nombre`, { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-D-010 · Mostrar boton Combina la promo con promo NxM/NxPrecio (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-D-010';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, conPromo);
      expect(shelf, 'la PLP declarada ofrece un producto con promoción NxM/NxPrecio').not.toBeNull();
      await expect(shelf!.combinaLaPromo, 'el botón "Combina la promo" es visible en el shelf').toBeVisible();

      const orden = await shelf!.ordenDeSlots();
      expect(orden.combina!, 'el botón aparece antes del botón "Agregar"').toBeLessThan(orden.agregar!);
      await plp.capturarEvidencia(cp, 3, 'boton Combina la promo antes de Agregar', { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-D-011 · Ocultar boton Combina la promo sin promo vigente (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-D-011';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, sinPromo);
      expect(shelf, 'la PLP declarada ofrece un producto sin promoción vigente').not.toBeNull();
      expect(await shelf!.combinaLaPromo.count(), 'el botón "Combina la promo" está ausente').toBe(0);

      // "El layout no muestra espacio vacío": no queda ningún nodo reservado y vacío entre el nombre
      // y el CTA, que es donde habría estado el botón.
      expect(
        await shelf!.placeholdersVaciosBajoElNombre(),
        'el layout se redistribuye: no queda un placeholder vacío donde iría el botón',
      ).toBe(0);
      await plp.capturarEvidencia(cp, 3, 'shelf sin el boton Combina la promo', { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-D-012 · Fallback a imagen por defecto Unimarc (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-D-012';
      test.setTimeout(300000);

      // Escenario 1 — producto sin imagen configurada en catálogo: se quita la imagen del propio
      // dato que devuelve la API, así el front no tiene ninguna URL que pedir.
      const { plp } = await abrirPLPporSpa(page, testData, async () => {
        await page.route('**/product-search*', async (route) => {
          const resp = await route.fetch();
          const json = (await resp.json()) as { hits?: Record<string, unknown>[] };
          (json.hits ?? []).forEach((h) => {
            delete h.image;
            delete h.imageGroups;
          });
          return route.fulfill({ response: resp, json });
        });
      });
      const sinImagen = ShelfProducto.enIndice(page, 0);
      await expect(sinImagen.imagenNoDisponible, 'sin imagen en catálogo se muestra la imagen por defecto').toBeVisible(
        { timeout: 30000 },
      );
      expect(await sinImagen.precios.count(), 'el precio se renderiza con normalidad').toBeGreaterThan(0);
      await expect(sinImagen.nombre.first(), 'el nombre se renderiza con normalidad').toBeVisible();
      await plp.capturarEvidencia(cp, 2, 'fallback con producto sin imagen en catalogo', { elemento: sinImagen.root });
      await page.unrouteAll({ behavior: 'ignoreErrors' });

      // Escenario 2 — URL de imagen inválida (HTTP 4xx).
      await page.route(/dw\/image|demandware\.static/, (route) =>
        route.fulfill({ status: 404, contentType: 'text/plain', body: 'not found' }),
      );
      await plp.goto();
      const url404 = ShelfProducto.enIndice(page, 0);
      await expect(url404.imagenNoDisponible, 'con URL inválida se muestra la imagen por defecto').toBeVisible({
        timeout: 30000,
      });
      expect(await url404.precios.count(), 'el precio se renderiza con normalidad').toBeGreaterThan(0);
      await expect(url404.agregar.or(url404.enCarro).first(), 'el CTA se renderiza con normalidad').toBeVisible();
      await plp.capturarEvidencia(cp, 3, 'fallback con URL de imagen invalida', { elemento: url404.root });
      await page.unrouteAll({ behavior: 'ignoreErrors' });

      // Escenario 3 — archivo de imagen corrupto/truncado: URL válida que devuelve bytes que el
      // navegador no puede decodificar.
      await page.route(/dw\/image|demandware\.static/, (route) =>
        route.fulfill({ status: 200, contentType: 'image/jpeg', body: Buffer.from([0xff, 0xd8, 0xff, 0x00, 0x01]) }),
      );
      await plp.goto();
      const corrupta = ShelfProducto.enIndice(page, 0);
      await expect(corrupta.imagenNoDisponible, 'con archivo corrupto se muestra la imagen por defecto').toBeVisible({
        timeout: 30000,
      });
      expect(await corrupta.precios.count(), 'el precio se renderiza con normalidad').toBeGreaterThan(0);
      await plp.capturarEvidencia(cp, 4, 'fallback con archivo de imagen corrupto', { elemento: corrupta.root });

      // Paso 6 — ni mensajes de error ni shelves rotos en la página.
      await expect(page.getByText(/tuvimos problemas|error/i), 'la página no muestra errores').toHaveCount(0);
      expect(await ShelfProducto.todos(page).count(), 'los demás shelves siguen en pie').toBeGreaterThan(1);
      await plp.capturarEvidencia(cp, 6, 'la PLP completa sin errores con el fallback aplicado', { fullPage: true });
      await page.unrouteAll({ behavior: 'ignoreErrors' });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-D-015 · Truncamiento de marca y descripcion a 60 caracteres (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-D-015';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, nombreDeMasDe(60));
      expect(shelf, 'la PLP declarada ofrece un producto cuyo "Marca | Nombre" supera 60 caracteres').not.toBeNull();
      const nombre = await shelf!.nombreRenderizado();
      const recorte = await shelf!.recorteDelNombre();
      await plp.capturarEvidencia(cp, 2, `nombre de ${nombre.largo} caracteres en el shelf`, { elemento: shelf!.root });

      expect(nombre.texto, 'el separador "|" aparece entre la marca y la descripción').toContain(' | ');
      expect(nombre.marca, 'la marca se muestra como elemento propio').not.toBe('');
      expect(
        nombre.conElipsis,
        `el texto se trunca con puntos suspensivos (recorte observado: line-clamp ${recorte.lineClamp}, text-overflow ${recorte.textOverflow})`,
      ).toBe(true);
      expect(nombre.largo, 'el texto queda dentro del límite de 60 caracteres').toBeLessThanOrEqual(60);
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-D-016 · Agregar al carro desde el shelf (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-D-016';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, async (s) => (await s.agregar.count()) > 0);
      expect(shelf, 'la PLP declarada ofrece un producto con stock y botón Agregar').not.toBeNull();
      const antes = await articulosEnCarrito(page);
      await plp.capturarEvidencia(cp, 2, 'shelf con el boton Agregar', { elemento: shelf!.root });

      await agregarAlCarro(shelf!);
      await expect(shelf!.enCarro, 'el shelf refleja el nuevo estado ("En carro")').toBeVisible({ timeout: 30000 });
      await expect
        .poll(async () => articulosEnCarrito(page), {
          message: 'el contador del mini carrito se actualiza',
          timeout: 30000,
        })
        .toBe(antes + 1);
      await plp.capturarEvidencia(cp, 4, 'shelf en estado En carro tras agregar', { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-D-019 · Mostrar bloque de precios y mecanica promocional (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-D-019';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, conPromo);
      expect(shelf, 'la PLP declarada ofrece un producto con promoción vigente').not.toBeNull();
      expect(await shelf!.precios.count(), 'el bloque de precios está presente en el shelf').toBeGreaterThan(0);
      expect(await shelf!.ppum.count(), 'el bloque trae el PPUM de sus precios').toBeGreaterThan(0);

      const texto = await shelf!.texto();
      expect(
        texto,
        'la mecánica promocional vigente se muestra en el bloque (precio compuesto o badge de descuento)',
      ).toMatch(/lleva\s+\d+\s+por\s+\$|\d+\s+por\s+\d+\s+a\s+\$|\d{1,2}%/i);
      await plp.capturarEvidencia(cp, 3, 'bloque de precios con la mecanica promocional', { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-D-021 · Label de formato ausente en producto no pesable (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-D-021';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, sinFormato);
      expect(shelf, 'la PLP declarada ofrece un producto sin label de formato').not.toBeNull();
      expect(await shelf!.labelDeFormato(), 'no se muestra ningún label de formato bajo el nombre').toBeNull();

      const orden = await shelf!.ordenDeSlots();
      expect(orden.formato, 'el slot de formato no está renderizado').toBeNull();
      expect(orden.nombre, 'el nombre sí se renderiza').not.toBeNull();
      await plp.capturarEvidencia(cp, 3, 'shelf no pesable sin label de formato', { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-D-022 · Sin truncamiento cuando el texto esta dentro del limite de 60 caracteres (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C59-D-022';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, nombreDeHasta(60));
      expect(shelf, 'la PLP declarada ofrece un producto con nombre de 60 caracteres o menos').not.toBeNull();
      const nombre = await shelf!.nombreRenderizado();
      expect(nombre.largo, 'el nombre está dentro del límite').toBeLessThanOrEqual(60);
      expect(nombre.conElipsis, 'el texto se muestra completo, sin puntos suspensivos').toBe(false);
      expect(nombre.texto, 'el separador "|" aparece entre la marca y la descripción').toContain(' | ');
      expect(nombre.texto.startsWith(nombre.marca), 'la marca abre el texto, como elemento propio').toBe(true);
      const recorte = await shelf!.recorteDelNombre();
      expect(recorte.recortadoVisualmente, 'el texto no queda recortado en el shelf').toBe(false);
      await plp.capturarEvidencia(cp, 3, `nombre completo de ${nombre.largo} caracteres`, { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test("TC-B2C59-D-004 · Mostrar 'Patrocinado' cuando isSponsored=true (Desktop)", async ({ page, testData }) => {
      const cp = 'TC-B2C59-D-004';
      test.setTimeout(180000);
      const sku = token(testData, 'SKU_SPONSOR');
      if (!sku) throw new Error('Falta {SKU_SPONSOR} en el Excel de data: el TC lo declara');

      // Paso 1 — la PLP declarada con el producto patrocinado declarado.
      const plp = await abrirPLP(page, testData);
      const shelf = ShelfProducto.porEnlaceOImagen(page, sku);
      await shelf.root.scrollIntoViewIfNeeded();
      await expect(shelf.root, `el shelf de {SKU_SPONSOR} (${sku}) está en la PLP declarada`).toBeVisible();
      await page.waitForTimeout(1500);

      // Pasos 2 y 3 — "Patrocinado" debajo del nombre del producto.
      await plp.capturarEvidencia(cp, 2, 'shelf del producto patrocinado', { elemento: shelf.root });
      await expect(shelf.patrocinado, 'el shelf muestra el texto "Patrocinado"').toBeVisible({ timeout: 10000 });
      // En Desktop el nombre es un botón y en Mobile un enlace: los dos llevan "Marca | Nombre".
      const nombre = await shelf.caja(shelf.root.locator('a, button').filter({ hasText: ' | ' }).first());
      const patro = await shelf.caja(shelf.patrocinado.first());
      expect(patro.top, '"Patrocinado" aparece debajo del nombre').toBeGreaterThanOrEqual(nombre.top);
      await plp.capturarEvidencia(cp);
    });
  });

  // ===================================================================== MOBILE
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C59-M-002 · Mostrar cucarda cuando label esta configurado (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-M-002';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, conCucarda);
      expect(shelf, 'la PLP declarada ofrece un producto con cucarda configurada').not.toBeNull();
      const cucardas = await shelf!.cucardas();
      expect(cucardas.length, 'se muestra como máximo 1 cucarda en el shelf').toBe(1);
      expect(cucardas[0].texto, 'la cucarda lleva el texto del atributo label').not.toBe('');

      const imagen = await shelf!.caja(shelf!.imagen.first());
      expect(cucardas[0].dx, 'la cucarda va en la mitad izquierda de la imagen').toBeLessThan(imagen.width / 2);
      expect(cucardas[0].dy, 'la cucarda va en la mitad superior de la imagen').toBeLessThan(imagen.height / 2);
      await plp.capturarEvidencia(cp, 1, `cucarda ${cucardas[0].texto} sobre la imagen`, { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-M-003 · Ocultar cucarda cuando label=null (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-M-003';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, sinCucarda);
      expect(shelf, 'la PLP declarada ofrece un producto sin cucarda').not.toBeNull();
      expect(await shelf!.cucardas(), 'no se muestra ninguna cucarda sobre la imagen').toEqual([]);
      await plp.capturarEvidencia(cp, 2, 'shelf sin cucarda sobre la imagen', { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-M-005 · Ocultar Patrocinado cuando isSponsored=false (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-M-005';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const todos = await shelvesDe(page);
      expect(todos.length, 'la PLP declarada trae shelves').toBeGreaterThan(0);
      for (const s of todos) {
        expect(await s.patrocinado.count(), 'ningún shelf muestra el texto "Patrocinado"').toBe(0);
      }
      await plp.capturarEvidencia(cp, 2, 'shelves sin el label Patrocinado', { fullPage: true });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-M-006 · Tap en shelf navega a PDP y preserva breadcrumb (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-M-006';
      test.setTimeout(240000);
      const plp = await abrirPLP(page, testData);
      const categoria = (await plp.titulo.innerText()).trim();

      const shelf = ShelfProducto.enIndice(page, 0);
      await plp.capturarEvidencia(cp, 2, 'shelf en la PLP de origen', { elemento: shelf.root });
      await shelf.clicImagen();
      await page.waitForURL(/\/product\//, { timeout: 60000 });
      const urlDesdeImagen = page.url();

      const pdp = new PDPPage(page);
      await expect(pdp.core, 'se carga la PDP del producto').toBeVisible({ timeout: 60000 });
      // El breadcrumb de la PDP se pinta por niveles: leerlo en cuanto aparece el bloque principal
      // devuelve una ruta a medias —o vacía— sin dar error, así que se espera a que se estabilice.
      const crumbs = (await pdp.rutaDeBreadcrumbEstable()).map((t) => t.trim());
      expect(crumbs, 'el breadcrumb de la PDP refleja la categoría de origen').toContain(categoria);
      await pdp.capturarEvidencia(cp, 4, 'PDP abierta desde la imagen del shelf');

      await page.goBack();
      await expect(ShelfProducto.todos(page).first()).toBeVisible({ timeout: 60000 });
      await ShelfProducto.enIndice(page, 0).clicNombre();
      await page.waitForURL(/\/product\//, { timeout: 60000 });
      expect(page.url(), 'el nombre lleva a la misma PDP que la imagen').toBe(urlDesdeImagen);
      await pdp.capturarEvidencia(cp, 8, 'misma PDP abierta desde el nombre del shelf');
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C59-M-008 · Galeria sin controles de navegacion cuando N=1 (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-M-008';
      test.setTimeout(240000);
      const { plp, hits } = await abrirPLPporSpa(page, testData);
      expect(hits.length, 'se pudo leer el catálogo de la PLP declarada').toBeGreaterThan(0);

      const indice = hits.findIndex((h) => h.imagenes === 1);
      expect(indice, 'la PLP declarada ofrece un producto con exactamente 1 imagen').toBeGreaterThanOrEqual(0);
      const shelf = ShelfProducto.enIndice(page, indice);

      await expect(shelf.imagen.first(), 'la imagen del shelf se muestra').toBeVisible();
      expect(await shelf.controlesDeGaleria.count(), 'no se muestran flechas ni dots de navegación').toBe(0);
      const galeria = await shelf.galeriaDesplazable();
      expect(
        galeria.scrollWidth,
        'con una sola imagen la galería no tiene contenido que desplazar',
      ).toBeLessThanOrEqual(galeria.clientWidth + 5);
      await plp.capturarEvidencia(cp, 2, 'imagen unica sin controles ni scroll de galeria', { elemento: shelf.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-M-009 · Mostrar label de formato en producto pesable (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-M-009';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, conFormato);
      expect(shelf, 'la PLP declarada ofrece un producto con label de formato').not.toBeNull();
      const formato = await shelf!.labelDeFormato();
      expect(formato, 'el label de formato trae cantidad y unidad de medida').toMatch(
        /^[\d.,]+\s*(kg|g|gr|lt|ml|un|cc)\.?$/i,
      );
      const orden = await shelf!.ordenDeSlots();
      expect(orden.formato!, 'el label de formato va debajo del nombre').toBeGreaterThan(orden.nombre!);

      const unidadLabel = formato!.match(/(kg|g|gr|lt|ml|un|cc)/i)![1].toLowerCase();
      const ppum = (await shelf!.ppum.first().innerText()).trim();
      expect(ppum.match(/x\s*(kg|g|gr|lt|ml|un|cc)/i)?.[1].toLowerCase(), 'la unidad del PPUM coincide con la del label').toBe(
        unidadLabel,
      );
      await plp.capturarEvidencia(cp, 3, `label de formato ${formato} bajo el nombre`, { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-M-010 · Mostrar boton Combina la promo con promo NxM/NxPrecio (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-M-010';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, conPromo);
      expect(shelf, 'la PLP declarada ofrece un producto con promoción NxM/NxPrecio').not.toBeNull();
      await expect(shelf!.combinaLaPromo, 'el botón "Combina la promo" es visible en el shelf').toBeVisible();
      const orden = await shelf!.ordenDeSlots();
      expect(orden.combina!, 'el botón aparece antes del botón "Agregar"').toBeLessThan(orden.agregar!);
      await plp.capturarEvidencia(cp, 2, 'boton Combina la promo antes de Agregar', { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-M-011 · Ocultar boton Combina la promo sin promo vigente (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-M-011';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, sinPromo);
      expect(shelf, 'la PLP declarada ofrece un producto sin promoción vigente').not.toBeNull();
      expect(await shelf!.combinaLaPromo.count(), 'el botón "Combina la promo" está ausente').toBe(0);

      expect(
        await shelf!.placeholdersVaciosBajoElNombre(),
        'el layout se redistribuye: no queda un placeholder vacío donde iría el botón',
      ).toBe(0);
      await plp.capturarEvidencia(cp, 2, 'shelf sin el boton Combina la promo', { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-M-015 · Truncamiento de marca y descripcion a 40 caracteres (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-M-015';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, nombreDeMasDe(40));
      expect(shelf, 'la PLP declarada ofrece un producto cuyo "Marca | Nombre" supera 40 caracteres').not.toBeNull();
      const nombre = await shelf!.nombreRenderizado();
      const recorte = await shelf!.recorteDelNombre();
      await plp.capturarEvidencia(cp, 2, `nombre de ${nombre.largo} caracteres en el shelf`, { elemento: shelf!.root });

      expect(nombre.texto, 'el separador "|" aparece entre la marca y la descripción').toContain(' | ');
      expect(
        nombre.conElipsis,
        `el texto se trunca con puntos suspensivos (recorte observado: line-clamp ${recorte.lineClamp}, text-overflow ${recorte.textOverflow})`,
      ).toBe(true);
      expect(nombre.largo, 'el texto queda dentro del límite de 40 caracteres').toBeLessThanOrEqual(40);
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-M-016 · Agregar al carro desde el shelf (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-M-016';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, async (s) => (await s.agregar.count()) > 0);
      expect(shelf, 'la PLP declarada ofrece un producto con stock y botón Agregar').not.toBeNull();
      const antes = await articulosEnCarrito(page);
      await plp.capturarEvidencia(cp, 2, 'shelf con el boton Agregar', { elemento: shelf!.root });

      await agregarAlCarro(shelf!);
      await expect(shelf!.enCarro, 'el shelf refleja el nuevo estado ("En carro")').toBeVisible({ timeout: 30000 });
      await expect
        .poll(async () => articulosEnCarrito(page), {
          message: 'el contador del mini carrito se actualiza',
          timeout: 30000,
        })
        .toBe(antes + 1);
      await plp.capturarEvidencia(cp, 4, 'shelf en estado En carro tras agregar', { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-M-019 · Mostrar bloque de precios y mecanica promocional (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-M-019';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, conPromo);
      expect(shelf, 'la PLP declarada ofrece un producto con promoción vigente').not.toBeNull();
      expect(await shelf!.precios.count(), 'el bloque de precios está presente en el shelf').toBeGreaterThan(0);
      expect(await shelf!.ppum.count(), 'el bloque trae el PPUM de sus precios').toBeGreaterThan(0);
      expect(await shelf!.texto(), 'la mecánica promocional vigente se muestra en el bloque').toMatch(
        /lleva\s+\d+\s+por\s+\$|\d+\s+por\s+\d+\s+a\s+\$|\d{1,2}%/i,
      );
      await plp.capturarEvidencia(cp, 3, 'bloque de precios con la mecanica promocional', { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C59-M-021 · Label de formato ausente en producto no pesable (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C59-M-021';
      test.setTimeout(180000);
      const plp = await abrirPLP(page, testData);

      const shelf = await primerShelf(page, sinFormato);
      expect(shelf, 'la PLP declarada ofrece un producto sin label de formato').not.toBeNull();
      expect(await shelf!.labelDeFormato(), 'no se muestra ningún label de formato bajo el nombre').toBeNull();
      const orden = await shelf!.ordenDeSlots();
      expect(orden.formato, 'el slot de formato no está renderizado').toBeNull();
      await plp.capturarEvidencia(cp, 3, 'shelf no pesable sin label de formato', { elemento: shelf!.root });
      await plp.capturarEvidencia(cp);
    });

    test("TC-B2C59-M-004 · Mostrar 'Patrocinado' cuando isSponsored=true (Mobile)", async ({ page, testData }) => {
      const cp = 'TC-B2C59-M-004';
      test.setTimeout(180000);
      const sku = token(testData, 'SKU_SPONSOR');
      if (!sku) throw new Error('Falta {SKU_SPONSOR} en el Excel de data: el TC lo declara');

      // Paso 1 — la PLP declarada con el producto patrocinado declarado.
      const plp = await abrirPLP(page, testData);
      const shelf = ShelfProducto.porEnlaceOImagen(page, sku);
      await shelf.root.scrollIntoViewIfNeeded();
      await expect(shelf.root, `el shelf de {SKU_SPONSOR} (${sku}) está en la PLP declarada`).toBeVisible();
      await page.waitForTimeout(1500);

      // Pasos 2 y 3 — "Patrocinado" debajo del nombre del producto.
      await plp.capturarEvidencia(cp, 2, 'shelf del producto patrocinado', { elemento: shelf.root });
      await expect(shelf.patrocinado, 'el shelf muestra el texto "Patrocinado"').toBeVisible({ timeout: 10000 });
      // En Desktop el nombre es un botón y en Mobile un enlace: los dos llevan "Marca | Nombre".
      const nombre = await shelf.caja(shelf.root.locator('a, button').filter({ hasText: ' | ' }).first());
      const patro = await shelf.caja(shelf.patrocinado.first());
      expect(patro.top, '"Patrocinado" aparece debajo del nombre').toBeGreaterThanOrEqual(nombre.top);
      await plp.capturarEvidencia(cp);
    });
  });
});
