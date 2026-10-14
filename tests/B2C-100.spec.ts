import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP_1280, MOBILE } from './support/viewports';
import { BuscadorModal, FormFactor, SECCIONES } from './pages/BuscadorModal';
import { HomePage } from './pages/HomePage';
import { LoginModal } from './pages/LoginModal';
import { MenuCuenta } from './pages/MenuCuenta';
import { ShelfProducto } from './pages/ShelfProducto';

/**
 * B2C-100 — Buscador del header: contenido por defecto y panel de sugerencias.
 *
 * Están aquí los 45 TC de la planilla que se pudieron ejecutar con la data que declaran. Los
 * otros siete quedaron `Bloqueado` antes de generar su `test()`:
 *
 * - **TC-100-D-002** se corre con sesión iniciada y su columna `Test data` solo declara
 *   `{BASE_URL}`: no dice con qué cuenta. Su par Mobile (M-002) sí declara `{COMPRADOR_USER}` y
 *   por eso ese sí corre.
 * - **D-022 / M-022, D-024 / M-024, D-025 / M-025** piden un término de búsqueda con una
 *   cardinalidad concreta en el backend —"entre 1 y 3 productos", "sin sugerencias pero con
 *   productos", "entre 1 y 3 sugerencias"— y la planilla no declara ninguno. Elegirlo a dedo
 *   probando términos contra el catálogo de DEV haría que el veredicto hablara del inventario de
 *   hoy y no del comportamiento del buscador.
 *
 * Los términos que sí usan estos `test()` —'leche', 'lec', 'lech', 'arroz', 'pan'— **salen de los
 * pasos del propio TC**, que los escribe literalmente; no se eligieron del Excel de data. El
 * término sin resultados es el que la fila describe ("término sin sentido"), y ahí cualquier
 * cadena sirve porque todas producen el mismo backend vacío.
 *
 * Lo que la exploración fijó y gobierna cómo se leen los resultados (ver
 * `.qa/knowledge/buscador-modal.json`):
 *
 * - **El modal solo abre con un clic en la caja de texto.** Escribir con el campo enfocado pero
 *   el panel cerrado no lo reabre, y eso llegó a parecer un defecto durante la exploración.
 * - **El título real dice "Resultado para" en singular** y capitaliza el término, mientras la
 *   planilla lo cita como "Resultados para 'leche'". Los locators aceptan las dos formas: un
 *   literal del Excel produciría un `Rechazado` que sería del script y no del producto.
 * - **El skeleton dura ~350 ms y no usa la clase de Chakra**, así que se detecta con un
 *   muestreador instalado en la página antes de teclear, no preguntando desde fuera.
 * - **El debounce se certifica contando peticiones**, no cronometrando: si el timer se reinicia,
 *   solo sale la consulta del término estabilizado.
 * - En **Mobile** el buscador se monta en un portal a pantalla completa y **se lleva el input
 *   fuera del `header`**, por eso el POM recibe su form-factor en vez de deducirlo del ancho.
 */

// Términos que los propios TC escriben en sus pasos.
const T3 = 'lec';
const T4 = 'lech';
const TERMINO = 'leche';
const TERMINO_GUEST = 'arroz';
const OTRO_TERMINO = 'pan';
/** "Término sin sentido" del TC: cualquier cadena sirve, todas dan el mismo backend vacío. */
const SIN_RESULTADOS = 'xkq';

/** El título del panel, tolerante al singular/plural y a la capitalización del término. */
const TITULO_RESULTADOS = /resultados?\s+para/i;

function credenciales(testData: Parameters<typeof token>[0]): { rut: string; clave: string } {
  const rut = token(testData, 'COMPRADOR_USER');
  const clave = token(testData, 'COMPRADOR_PASSWORD');
  if (!rut || !clave) {
    throw new Error('Faltan {COMPRADOR_USER}/{COMPRADOR_PASSWORD} en el Excel de data: los TC los declaran');
  }
  return { rut, clave };
}

/**
 * Término de búsqueda de los TC que no traen un token propio de término en su `Test data`.
 *
 * Sale del Excel de data (`{SEARCH_TERM_001}`), no del paso a paso: los literales de los pasos
 * ('lec') son ilustrativos. Con un término de 3 o más caracteres se dispara la búsqueda dinámica, y
 * retrocederlo a 2 es exactamente la frontera que validan D-027 / M-027.
 */
function terminoDeBusqueda(testData: Parameters<typeof token>[0]): string {
  const t = token(testData, 'SEARCH_TERM_001');
  if (!t || t.length < 3) throw new Error('{SEARCH_TERM_001} falta en el Excel de data o tiene menos de 3 caracteres');
  return t;
}

/** Home cargada, cookies aceptadas. Es el punto de entrada de todos los TC de la suite. */
async function irAlHome(page: Page): Promise<HomePage> {
  const home = new HomePage(page);
  await home.goto();
  return home;
}

/** Home con sesión iniciada por el modal del header (el login real del storefront). */
async function irAlHomeLogueado(
  page: Page,
  testData: Parameters<typeof token>[0],
): Promise<HomePage> {
  const home = await irAlHome(page);
  const { rut, clave } = credenciales(testData);
  await new LoginModal(page).iniciarSesion(rut, clave);
  return home;
}

/** Busca un término desde el buscador y espera la SRP, como haría el usuario. */
async function buscar(page: Page, buscador: BuscadorModal, termino: string): Promise<void> {
  await buscador.abrir();
  await buscador.escribir(termino);
  await buscador.input.press('Enter');
  await page.waitForURL(/\/search\?/, { timeout: 60000 });
  await page.waitForTimeout(1500);
}

/**
 * Visita `cuantos` PDP distintos partiendo de la SRP de `TERMINO`, y devuelve **los SKU** en el
 * orden en que se visitaron.
 *
 * Se llega a los productos navegando, no por URL: los TC piden "visitar PDPs distintas" sin
 * nombrar ninguno, y su columna `Test data` no declara ningún SKU. Entrando por la SRP del
 * término que el propio TC escribe, el caso no usa más data que la que declara.
 *
 * Devuelve el SKU y no el nombre porque **el shelf y el modal no rotulan igual el producto**: el
 * shelf antepone la marca ("Calo | Leche en polvo…") y el modal muestra solo el nombre, así que
 * comparar textos haría fallar el orden por una diferencia de rotulado. El SKU viaja en la URL de
 * la PDP y en el `src` del thumbnail del modal, y es el mismo en los dos sitios.
 */
async function visitarPDPs(page: Page, cuantos: number): Promise<string[]> {
  const visitados: string[] = [];
  for (let i = 0; i < cuantos; i++) {
    await page.goto(`/search?q=${TERMINO}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await ShelfProducto.todos(page).first().waitFor({ state: 'visible', timeout: 60000 });
    // La SRP enlaza la PDP desde la imagen (y, según el build, desde el nombre); la PDP vive en
    // /<slug>/<sku>.html o, en builds anteriores, en /product/<sku>.
    const shelf = ShelfProducto.enIndice(page, i).root;
    const enlace = shelf.locator('a[href$=".html"], a[href*="/product/"]').first();
    if (await enlace.count()) await enlace.click();
    else await ShelfProducto.enIndice(page, i).nombre.first().click();
    await page.waitForURL(/\/product\/|\.html$/, { timeout: 60000 });
    await page.waitForTimeout(2500);
    const sku = (new URL(page.url()).pathname.split('/').pop() ?? '').replace(/\.html$/, '');
    visitados.push(sku);
  }
  return visitados;
}

/** Término declarado por token en la fila del TC, exigido. */
function terminoDeclarado(testData: Parameters<typeof token>[0], nombre: string): string {
  const t = token(testData, nombre);
  if (!t) throw new Error(`Falta {${nombre}} en el Excel de data: el TC lo declara`);
  return t;
}

/**
 * Comprueba el carrusel con pocos productos (CA15b): solo los disponibles, alineados a la
 * izquierda, sin huecos ni flechas, y "Ver todos" solo si el backend tiene más de los visibles.
 */
async function verificarCarruselCorto(buscador: BuscadorModal): Promise<{ total: number; visibles: number }> {
  const total = (await buscador.cantidadAnunciada())!;
  const visibles = await buscador.productosDelCarrusel.count();
  expect(total, `el término devuelve entre 1 y 3 productos (devuelve ${total})`).toBeGreaterThanOrEqual(1);
  expect(total, `el término devuelve entre 1 y 3 productos (devuelve ${total})`).toBeLessThanOrEqual(3);
  expect(visibles, 'el carrusel muestra solo los productos disponibles').toBe(total);
  const geo = await buscador.carrusel.evaluate((c) => {
    const cajas = [...c.querySelectorAll('button[aria-label*="favoritos" i]')]
      .map((b) => b.closest('div:has(> div > button)') as HTMLElement | null)
      .filter(Boolean)
      .map((e) => e!.getBoundingClientRect());
    const r = c.getBoundingClientRect();
    // Celdas sin producto: hijos del contenedor de tarjetas que ocupan lugar y no traen favoritos.
    const pista = c.querySelector('button[aria-label*="favoritos" i]')?.closest('div:has(> div > button)')?.parentElement;
    const vacias = pista
      ? [...pista.children].filter(
          (h) => (h as HTMLElement).getBoundingClientRect().width > 0 && !h.querySelector('button[aria-label*="favoritos" i]'),
        ).length
      : 0;
    return { x: r.x, primera: cajas[0]?.x ?? -1, vacias };
  });
  expect(geo.vacias, 'no hay placeholders ni celdas vacías para los slots faltantes').toBe(0);
  expect(Math.abs(geo.primera - geo.x), 'los productos arrancan alineados a la izquierda').toBeLessThanOrEqual(24);
  expect(await buscador.flechasDelCarrusel.count(), 'el carrusel no muestra flechas de navegación').toBe(0);
  expect(await buscador.hayVerTodos(), `"Ver todos" aparece solo si el backend tiene más de los ${visibles} visibles`).toBe(
    total > visibles,
  );
  return { total, visibles };
}

/** Distancia entre el título del panel y el bloque que lo sigue: un hueco delata una sección vacía. */
async function huecoBajoElTitulo(buscador: BuscadorModal): Promise<number> {
  return buscador.tituloResultados.evaluate((t) => {
    let bloque: Element | null = t;
    while (bloque && !bloque.nextElementSibling && bloque.parentElement) bloque = bloque.parentElement;
    const siguiente = bloque?.nextElementSibling as HTMLElement | null;
    if (!siguiente) return 0;
    return Math.round(siguiente.getBoundingClientRect().top - t.getBoundingClientRect().bottom);
  });
}

/** El buscador del form-factor que corre este describe. */
function buscadorDe(page: Page, ff: FormFactor): BuscadorModal {
  return new BuscadorModal(page, ff);
}

test.describe('B2C-100 — Buscador: contenido por defecto y panel de sugerencias', () => {
  // ==================================================================== DESKTOP
  test.describe('Desktop 1280x900', () => {
    test.use(DESKTOP_1280);
    const FF: FormFactor = 'desktop';

    test('TC-100-D-001 · El buscador es accesible desde el header full, el sticky y otras páginas (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-100-D-001';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await expect(buscador.input).toBeVisible();
      await expect(buscador.input).toHaveAttribute('placeholder', '¿Qué estás buscando?');
      await expect(buscador.iconoLupa).toBeVisible();
      await home.capturarEvidencia(cp, 1, 'buscador en el header full', {
        elemento: home.header.root,
      });

      // El header sticky: tras el scroll queda una sola fila, y el TC pide que el buscador siga ahí.
      await home.header.scrollA(800);
      expect(await home.header.filasConAlto()).toBe(1);
      await expect(buscador.input).toBeVisible();
      await home.capturarEvidencia(cp, 4, 'buscador en el header sticky', {
        elemento: home.header.root,
      });

      // Otra página: la SRP a la que lleva una búsqueda, y desde ella una PDP.
      await page.goto(`/search?q=${TERMINO}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await expect(buscador.input).toBeVisible({ timeout: 60000 });
      await home.capturarEvidencia(cp, 6, 'buscador accesible en la SRP', {
        elemento: home.header.root,
      });

      await ShelfProducto.todos(page).first().waitFor({ state: 'visible', timeout: 60000 });
      await ShelfProducto.enIndice(page, 0).nombre.first().click();
      await page.waitForURL(/\/product\//, { timeout: 60000 });
      await expect(buscador.input).toBeVisible({ timeout: 60000 });
      await home.capturarEvidencia(cp, 6, 'buscador accesible en la PDP', {
        elemento: home.header.root,
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-003 · Las búsquedas recientes son chips de la sesión activa y no persisten (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-D-003';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      await buscar(page, buscador, TERMINO);
      await buscar(page, buscador, OTRO_TERMINO);

      await buscador.abrir();
      const chips = await buscador.textosDeChips(SECCIONES.recientes);
      expect(chips).toEqual(expect.arrayContaining([TERMINO, OTRO_TERMINO]));
      // "Chips horizontales": todos comparten línea, que es lo que el TC llama disposición horizontal.
      expect(await buscador.filasDeChips(SECCIONES.recientes)).toBe(1);
      await home.capturarEvidencia(cp, 3, 'chips de búsquedas recientes de la sesión', {
        elemento: buscador.contenedor.first(),
      });

      await buscador.cerrarConEscape();
      await new MenuCuenta(page).cerrarSesion();
      await home.capturarEvidencia(cp, 5, 'sesión cerrada');

      const { rut, clave } = credenciales(testData);
      await new LoginModal(page).iniciarSesion(rut, clave);
      await buscador.abrir();
      expect(await buscador.haySeccion(SECCIONES.recientes)).toBe(false);
      await home.capturarEvidencia(cp, 8, 'sesión nueva sin búsquedas recientes', {
        elemento: buscador.contenedor.first(),
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-004 · Clic en un chip de búsqueda reciente redirige a la SRP (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-D-004';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      await buscar(page, buscador, TERMINO);
      await buscador.abrir();
      const primero = (await buscador.chipsDe(SECCIONES.recientes).first().innerText()).trim();
      await home.capturarEvidencia(cp, 1, `chip de búsqueda reciente "${primero}"`, {
        elemento: buscador.contenedor.first(),
      });

      await buscador.chipsDe(SECCIONES.recientes).first().click();
      await page.waitForURL(/\/search\?/, { timeout: 60000 });
      expect(new URL(page.url()).searchParams.get('q')).toBe(primero);
      await home.capturarEvidencia(cp, 3, `SRP del término "${primero}"`);
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-005 · "Lo último que viste" lista los PDP visitados en orden inverso (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-D-005';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      const visitados = await visitarPDPs(page, 3);
      await irAlHome(page);
      await buscador.abrir();
      await home.capturarEvidencia(cp, 3, 'sección "Lo último que viste" en el modal', {
        elemento: buscador.contenedor.first(),
      });

      const vistos = await buscador.detalleDeVistos();
      expect(vistos.length).toBeGreaterThanOrEqual(2);
      expect(vistos.length).toBeLessThanOrEqual(6);
      await expect(buscador.imagenDeVisto(0)).toBeVisible();
      for (const v of vistos) {
        expect(v.conImagen).toBe(true);
        expect(v.nombre.length).toBeGreaterThan(0);
      }
      // Cronológico inverso: el último PDP visitado encabeza la lista.
      expect(vistos[0].sku).toBe(visitados[visitados.length - 1]);
      await home.capturarEvidencia(cp, 5, 'orden cronológico inverso de los vistos', {
        elemento: buscador.seccion(SECCIONES.vistos),
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-006 · Clic en imagen o nombre de un producto visto abre su PDP (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-D-006';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      await visitarPDPs(page, 2);
      await irAlHome(page);
      await buscador.abrir();
      const vistos = await buscador.detalleDeVistos();
      const skuEsperado = vistos[0].sku;
      await home.capturarEvidencia(cp, 1, 'primer producto de "Lo último que viste"', {
        elemento: buscador.seccion(SECCIONES.vistos),
      });

      await buscador.imagenDeVisto(0).click();
      await page.waitForURL(/\/product\//, { timeout: 60000 });
      if (skuEsperado) expect(page.url()).toContain(skuEsperado);
      await home.capturarEvidencia(cp, 3, 'PDP alcanzada desde la imagen');

      await irAlHome(page);
      await buscador.abrir();
      await buscador.nombreDeVisto(0).click();
      await page.waitForURL(/\/product\//, { timeout: 60000 });
      if (skuEsperado) expect(page.url()).toContain(skuEsperado);
      await home.capturarEvidencia(cp, 6, 'PDP alcanzada desde el nombre');
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-007 · Sin búsquedas en la sesión, "Tus búsquedas recientes" no se renderiza (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-D-007';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      expect(await buscador.haySeccion(SECCIONES.recientes)).toBe(false);
      expect(await buscador.haySeccion(SECCIONES.masBuscado)).toBe(true);
      expect(await buscador.sinEspacioVacio()).toBe(true);
      await home.capturarEvidencia(cp, 3, 'modal sin la sección de búsquedas recientes', {
        elemento: buscador.contenedor.first(),
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-008 · Sin visitas a PDP, "Lo último que viste" no se renderiza (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-D-008';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      expect(await buscador.haySeccion(SECCIONES.vistos)).toBe(false);
      expect(await buscador.haySeccion(SECCIONES.masBuscado)).toBe(true);
      expect(await buscador.sinEspacioVacio()).toBe(true);
      await home.capturarEvidencia(cp, 3, 'modal sin la sección "Lo último que viste"', {
        elemento: buscador.contenedor.first(),
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-009 · Guest sin historial ve únicamente "Lo más buscado" (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-100-D-009';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      expect(await buscador.titulosDeSecciones()).toEqual([SECCIONES.masBuscado]);
      await home.capturarEvidencia(cp, 3, 'modal del Guest con solo "Lo más buscado"', {
        elemento: buscador.contenedor.first(),
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-010 · Guest con una búsqueda ve recientes y más buscado, no "Lo último que viste" (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-100-D-010';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscar(page, buscador, TERMINO_GUEST);
      await irAlHome(page);
      await buscador.abrir();

      expect(await buscador.textosDeChips(SECCIONES.recientes)).toContain(TERMINO_GUEST);
      await expect(buscador.limpiarDe(SECCIONES.recientes)).toBeVisible();
      expect(await buscador.haySeccion(SECCIONES.masBuscado)).toBe(true);
      expect(await buscador.haySeccion(SECCIONES.vistos)).toBe(false);
      await home.capturarEvidencia(cp, 3, `modal del Guest con el chip "${TERMINO_GUEST}"`, {
        elemento: buscador.contenedor.first(),
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-011 · "Lo más buscado" muestra hasta 6 chips en un máximo de 2 filas (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-100-D-011';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      const chips = await buscador.textosDeChips(SECCIONES.masBuscado);
      expect(chips.length).toBeGreaterThan(0);
      expect(chips.length).toBeLessThanOrEqual(6);
      expect(await buscador.filasDeChips(SECCIONES.masBuscado)).toBeLessThanOrEqual(2);
      expect(await buscador.hayChipTruncado(SECCIONES.masBuscado)).toBe(false);
      await home.capturarEvidencia(cp, 3, `"Lo más buscado" con ${chips.length} chips`, {
        elemento: buscador.seccion(SECCIONES.masBuscado),
      });

      // "Orden consistente": el mismo listado al reabrir el modal.
      await buscador.cerrarConEscape();
      await buscador.abrir();
      expect(await buscador.textosDeChips(SECCIONES.masBuscado)).toEqual(chips);
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-012 · Clic en un chip de "Lo más buscado" redirige a la SRP (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-100-D-012';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      const primero = (await buscador.chipsDe(SECCIONES.masBuscado).first().innerText()).trim();
      await home.capturarEvidencia(cp, 1, `chip "${primero}" de "Lo más buscado"`, {
        elemento: buscador.seccion(SECCIONES.masBuscado),
      });

      await buscador.chipsDe(SECCIONES.masBuscado).first().click();
      await page.waitForURL(/\/search\?/, { timeout: 60000 });
      expect(new URL(page.url()).searchParams.get('q')).toBe(primero);
      await home.capturarEvidencia(cp, 3, `SRP del término "${primero}"`);
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-013 · "Limpiar" borra las búsquedas recientes y la sección no reaparece (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-100-D-013';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscar(page, buscador, TERMINO_GUEST);
      await irAlHome(page);
      await buscador.abrir();
      expect(await buscador.haySeccion(SECCIONES.recientes)).toBe(true);
      await home.capturarEvidencia(cp, 1, 'sección de recientes antes de limpiar', {
        elemento: buscador.contenedor.first(),
      });

      await buscador.limpiarDe(SECCIONES.recientes).click();
      await page.waitForTimeout(800);
      expect(await buscador.haySeccion(SECCIONES.recientes)).toBe(false);
      expect(await buscador.sinEspacioVacio()).toBe(true);
      await home.capturarEvidencia(cp, 3, 'sección de recientes ya eliminada', {
        elemento: buscador.contenedor.first(),
      });

      await buscador.cerrarConEscape();
      await buscador.abrir();
      expect(await buscador.haySeccion(SECCIONES.recientes)).toBe(false);
      await home.capturarEvidencia(cp, 6, 'modal reabierto: la sección no reaparece', {
        elemento: buscador.contenedor.first(),
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-014 · "Limpiar" borra "Lo último que viste" y la sección no reaparece (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-D-014';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      await visitarPDPs(page, 2);
      await irAlHome(page);
      await buscador.abrir();
      expect(await buscador.haySeccion(SECCIONES.vistos)).toBe(true);
      await home.capturarEvidencia(cp, 1, 'sección "Lo último que viste" antes de limpiar', {
        elemento: buscador.contenedor.first(),
      });

      await buscador.limpiarDe(SECCIONES.vistos).click();
      await page.waitForTimeout(800);
      expect(await buscador.haySeccion(SECCIONES.vistos)).toBe(false);
      await home.capturarEvidencia(cp, 3, 'sección eliminada', {
        elemento: buscador.contenedor.first(),
      });

      await buscador.cerrarConEscape();
      await buscador.abrir();
      expect(await buscador.haySeccion(SECCIONES.vistos)).toBe(false);
      await home.capturarEvidencia(cp, 5, 'modal reabierto: la sección no reaparece', {
        elemento: buscador.contenedor.first(),
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-015 · Con 1 o 2 caracteres el modal mantiene el contenido por defecto (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-D-015';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      await buscar(page, buscador, TERMINO);
      await irAlHome(page);
      await buscador.abrir();
      const porDefecto = await buscador.titulosDeSecciones();
      expect(porDefecto.length).toBeGreaterThan(0);
      await home.capturarEvidencia(cp, 1, 'contenido por defecto del modal', {
        elemento: buscador.contenedor.first(),
      });

      await buscador.iniciarMuestreo();
      const consultados = await buscador.terminosConsultados(async () => {
        await buscador.escribir(TERMINO.slice(0, 1));
        await page.waitForTimeout(1500);
        expect(await buscador.titulosDeSecciones()).toEqual(porDefecto);
        await buscador.escribir(TERMINO.slice(1, 2));
        await page.waitForTimeout(1500);
      });
      expect(await buscador.titulosDeSecciones()).toEqual(porDefecto);
      expect(await buscador.huboSkeleton()).toBe(false);
      expect(consultados).toEqual([]);
      await buscador.detenerMuestreo();
      await home.capturarEvidencia(cp, 7, 'con 2 caracteres sigue el contenido por defecto', {
        elemento: buscador.contenedor.first(),
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-016 · Al tercer carácter se dispara la búsqueda dinámica con skeleton (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-100-D-016';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      await buscador.iniciarMuestreo();
      await home.capturarEvidencia(cp, 1, 'modal abierto antes de escribir', {
        elemento: buscador.contenedor.first(),
      });

      await buscador.escribir(T3, 60);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });
      expect(await buscador.huboSkeleton()).toBe(true);
      await buscador.detenerMuestreo();

      // Resultados reales, sin haber pulsado Enter: la URL sigue siendo la del Home.
      expect(new URL(page.url()).pathname).toBe('/');
      expect((await buscador.textosDeAutocompletado()).length + (await buscador.productosDelCarrusel.count())).toBeGreaterThan(0);
      await home.capturarEvidencia(cp, 4, `resultados reales para "${T3}"`, {
        elemento: buscador.contenedor.first(),
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-017 · El debounce reinicia el timer y al borrar a <3 vuelve el contenido por defecto (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-100-D-017';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      const consultados = await buscador.terminosConsultados(async () => {
        // Las cuatro teclas de corrido: si el timer se reinicia, solo se consulta el término final.
        await buscador.escribir(T4, 40);
        await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });
        await page.waitForTimeout(1500);
      });
      expect(consultados).toEqual([T4]);
      expect(consultados).not.toContain(T3);
      await home.capturarEvidencia(cp, 3, `resultados del término estabilizado "${T4}"`, {
        elemento: buscador.contenedor.first(),
      });

      await buscador.borrar(2);
      await page.waitForTimeout(2000);
      expect(await buscador.valor()).toBe(T4.slice(0, 2));
      expect(await buscador.titulosDeSecciones()).toContain(SECCIONES.masBuscado);
      await home.capturarEvidencia(cp, 5, 'con 2 caracteres vuelve el contenido por defecto', {
        elemento: buscador.contenedor.first(),
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-018 · Estructura del panel de sugerencias con resultados (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-100-D-018';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      await buscador.escribir(TERMINO);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });

      const titulo = await buscador.textoTituloResultados();
      expect(titulo.toLowerCase()).toContain(TERMINO);
      const anunciados = await buscador.cantidadAnunciada();
      expect(anunciados).not.toBeNull();
      expect(anunciados!).toBeGreaterThan(0);
      await home.capturarEvidencia(cp, 3, `título "${titulo}"`, {
        elemento: buscador.contenedor.first(),
      });

      const chips = await buscador.textosDeAutocompletado();
      expect(chips.length).toBeGreaterThan(0);
      expect(chips.length).toBeLessThanOrEqual(4);

      const productos = await buscador.productosDelCarrusel.count();
      expect(productos).toBeGreaterThan(0);
      expect(productos).toBeLessThanOrEqual(4);
      await expect(buscador.flechasDelCarrusel.first()).toBeVisible();
      expect((await buscador.desplazamientoDelCarrusel()).deslizable).toBe(true);
      await home.capturarEvidencia(cp, 5, `carrusel con ${productos} productos y flechas`, {
        elemento: buscador.carrusel,
      });

      await expect(buscador.botonVerTodos).toBeVisible();
      await buscador.botonVerTodos.click();
      await page.waitForURL(/\/search\?/, { timeout: 60000 });
      expect(new URL(page.url()).searchParams.get('q')).toBe(TERMINO);
      await home.capturarEvidencia(cp, 9, 'SRP completa tras "Ver todos"');
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-019 · El modal se cierra con Escape y con clic fuera, limpiando el campo (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-100-D-019';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);
      const urlInicial = page.url();

      await buscador.abrir();
      await buscador.escribir(TERMINO);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });
      await home.capturarEvidencia(cp, 1, 'modal abierto con término escrito', {
        elemento: buscador.contenedor.first(),
      });

      await buscador.cerrarConEscape();
      expect(await buscador.estaAbierto()).toBe(false);
      expect(await buscador.valor()).toBe('');
      expect(page.url()).toBe(urlInicial);
      await home.capturarEvidencia(cp, 3, 'modal cerrado con Escape y buscador limpio', {
        elemento: home.header.root,
      });

      await buscador.abrir();
      await buscador.escribir(TERMINO);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });
      await buscador.clicFuera();
      expect(await buscador.estaAbierto()).toBe(false);
      expect(await buscador.valor()).toBe('');
      expect(page.url()).toBe(urlInicial);
      await home.capturarEvidencia(cp, 8, 'modal cerrado con clic fuera y buscador limpio', {
        elemento: home.header.root,
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-020 · El campo acepta 100 caracteres y no admite el 101 (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-100-D-020';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      expect(await buscador.maxlength()).toBe('100');

      const cien = 'a'.repeat(100);
      await buscador.input.fill(cien);
      expect((await buscador.valor()).length).toBe(100);
      await home.capturarEvidencia(cp, 3, 'campo con 100 caracteres', {
        elemento: home.header.root,
      });

      await buscador.input.press('b');
      expect((await buscador.valor()).length).toBe(100);
      expect(await buscador.valor()).toBe(cien);

      // Ningún mensaje de error visible al usuario.
      const errores = page.getByText(/m[áa]ximo|l[íi]mite|error|no puedes/i);
      expect(await errores.locator('visible=true').count()).toBe(0);
      await home.capturarEvidencia(cp, 5, 'el carácter 101 no se acepta y no hay mensaje de error', {
        elemento: home.header.root,
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-021 · Con 0 productos en backend el carrusel no se renderiza (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-100-D-021';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      await buscador.escribir(SIN_RESULTADOS);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });
      expect(await buscador.cantidadAnunciada()).toBe(0);
      await home.capturarEvidencia(cp, 2, `panel del término sin productos "${SIN_RESULTADOS}"`, {
        elemento: buscador.contenedor.first(),
      });

      expect(await buscador.hayCarrusel()).toBe(false);
      expect(await buscador.hayVerTodos()).toBe(false);
      expect(await buscador.sinEspacioVacio()).toBe(true);
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-002 · Logueado con búsquedas y PDPs vistas, el modal muestra las 3 secciones en orden (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-D-002';
      // Paso 1 — sesión con historial: las búsquedas y las visitas se hacen en la propia sesión.
      // Las búsquedas recientes viven en el estado del front y una recarga completa las descarta,
      // así que primero se visitan las PDP (navegan por URL) y después se busca, volviendo al Home
      // con el logo del header en vez de recargar.
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);
      await visitarPDPs(page, 2);
      await irAlHome(page);
      await buscar(page, buscador, TERMINO);
      await page.locator('header button[aria-label="Unimarc"]').first().click();
      await page.waitForURL((u) => u.pathname === '/', { timeout: 30000 });
      await page.waitForTimeout(2500);

      // Pasos 3-4 — clic en la caja sin escribir: el overlay se expande debajo del buscador.
      await buscador.abrir();
      const cajaInput = await buscador.input.boundingBox();
      const cajaModal = await buscador.contenedor.first().boundingBox();
      expect(cajaModal!.y, 'el modal se expande debajo del buscador').toBeGreaterThanOrEqual(cajaInput!.y + cajaInput!.height - 4);
      await home.capturarEvidencia(cp, 4, 'modal overlay bajo el buscador');

      // Pasos 5-8 — las 3 secciones, en orden, con "Limpiar" en las dos primeras.
      expect(await buscador.titulosDeSecciones(), 'las 3 secciones en el orden descrito').toEqual([
        SECCIONES.recientes,
        SECCIONES.vistos,
        SECCIONES.masBuscado,
      ]);
      await expect(buscador.limpiarDe(SECCIONES.recientes), '"Limpiar" en búsquedas recientes').toBeVisible();
      await expect(buscador.limpiarDe(SECCIONES.vistos), '"Limpiar" en lo último que viste').toBeVisible();
      await home.capturarEvidencia(cp, 8, 'las 3 secciones en orden', { elemento: buscador.contenedor.first() });
      await home.capturarEvidencia(cp);
    });
    test('TC-100-D-022 · Con 1 a 3 productos el carrusel muestra solo los disponibles, sin flechas ni huecos (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-D-022';
      const termino = terminoDeclarado(testData, 'SEARCH_1A3_PRODUCTOS');
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      await buscador.escribir(termino);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });
      const { total, visibles } = await verificarCarruselCorto(buscador);
      await home.capturarEvidencia(cp, 2, `carrusel con ${visibles} de ${total} productos`, {
        elemento: buscador.contenedor.first(),
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-024 · Sin sugerencias de autocompletado la sección de chips no se renderiza ni deja hueco (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-D-024';
      const termino = terminoDeclarado(testData, 'SEARCH_1A3_PRODUCTOS');
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      await buscador.escribir(termino);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });
      await page.waitForTimeout(1500);
      expect(await buscador.textosDeAutocompletado(), 'la sección de chips de sugerencias no se renderiza').toEqual([]);
      const hueco = await huecoBajoElTitulo(buscador);
      expect(hueco, `no queda espacio vacío donde iría la sección de sugerencias (${hueco} px)`).toBeLessThanOrEqual(40);
      expect(await buscador.sinEspacioVacio(), 'el modal no deja espacio vacío al pie').toBe(true);
      await expect(buscador.tituloResultados, 'el título del modal se muestra').toBeVisible();
      const total = (await buscador.cantidadAnunciada()) ?? 0;
      expect(await buscador.hayCarrusel(), 'el carrusel se muestra si hay productos').toBe(total > 0);
      await home.capturarEvidencia(cp, 2, `modal sin sugerencias para "${termino}" (${total} productos)`, {
        elemento: buscador.contenedor.first(),
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-023 · Con 4 o más productos el carrusel desliza, muestra flechas y "Ver todos" (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-100-D-023';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      await buscador.escribir(TERMINO);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });

      const total = await buscador.cantidadAnunciada();
      expect(total!).toBeGreaterThanOrEqual(4);
      expect(await buscador.productosDelCarrusel.count()).toBe(4);
      await home.capturarEvidencia(cp, 2, `carrusel con 4 productos de ${total} totales`, {
        elemento: buscador.carrusel,
      });

      const desp = await buscador.desplazamientoDelCarrusel();
      expect(desp.deslizable).toBe(true);
      await expect(buscador.flechasDelCarrusel.nth(1)).toBeVisible();

      const antes = await buscador.scrollDelCarrusel();
      await buscador.flechasDelCarrusel.nth(1).click();
      await page.waitForTimeout(1200);
      expect(await buscador.scrollDelCarrusel()).toBeGreaterThan(antes);
      await home.capturarEvidencia(cp, 5, 'el carrusel avanza con la flecha derecha', {
        elemento: buscador.carrusel,
      });

      await expect(buscador.botonVerTodos).toBeVisible();
      await buscador.botonVerTodos.click();
      await page.waitForURL(/\/search\?/, { timeout: 60000 });
      expect(new URL(page.url()).searchParams.get('q')).toBe(TERMINO);
      await home.capturarEvidencia(cp, 7, 'SRP completa tras "Ver todos"');
      await home.capturarEvidencia(cp);
    });

    test('TC-100-D-026 · Sin productos ni sugerencias, el modal solo muestra el título con 0 resultados (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-100-D-026';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      await buscador.escribir(SIN_RESULTADOS);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });

      const titulo = await buscador.textoTituloResultados();
      expect(titulo.toLowerCase()).toContain(SIN_RESULTADOS);
      expect(await buscador.cantidadAnunciada()).toBe(0);
      expect(await buscador.textosDeAutocompletado()).toEqual([]);
      expect(await buscador.hayCarrusel()).toBe(false);
      expect(await buscador.hayVerTodos()).toBe(false);
      await home.capturarEvidencia(cp, 2, `modal con "${titulo}"`, {
        elemento: buscador.contenedor.first(),
      });
      await home.capturarEvidencia(cp);
    });
    test('TC-100-D-027 · Al retroceder a 2 caracteres el modal restaura el contenido por defecto (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-D-027';
      const termino = terminoDeBusqueda(testData);
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      // Precondición: historial de búsquedas en la sesión activa. Se vuelve al Home con el logo y
      // no con `goto('/')`: las búsquedas recientes viven en el estado del front, y una recarga
      // completa las descarta (D-003 lo confirma sin recargar).
      await buscar(page, buscador, termino);
      await home.header.clicLogo();
      await page.waitForURL((u) => new URL(u).pathname === '/', { timeout: 60000 });

      await buscador.abrir();
      const porDefecto = await buscador.titulosDeSecciones();
      expect(porDefecto).toContain(SECCIONES.recientes);
      await home.capturarEvidencia(cp, 1, 'contenido por defecto del modal', {
        elemento: buscador.contenedor.first(),
      });

      await buscador.escribir(termino, 60);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });
      await home.capturarEvidencia(cp, 2, `resultados dinámicos para "${termino}"`, {
        elemento: buscador.contenedor.first(),
      });

      // Retroceder hasta 2 caracteres: ninguna consulta debe salir con menos de 3.
      await buscador.iniciarMuestreo();
      const consultados = await buscador.terminosConsultados(async () => {
        await buscador.borrar(termino.length - 2);
        await page.waitForTimeout(2000);
      });
      await buscador.detenerMuestreo();
      expect(await buscador.valor()).toBe(termino.slice(0, 2));
      expect(consultados.filter((t) => t.length < 3)).toEqual([]);
      await expect(buscador.tituloResultados).not.toHaveText(TITULO_RESULTADOS);
      expect(await buscador.hayCarrusel()).toBe(false);
      expect(await buscador.huboSkeleton()).toBe(false);
      expect(await buscador.titulosDeSecciones()).toEqual(porDefecto);
      await home.capturarEvidencia(cp, 6, `con "${termino.slice(0, 2)}" vuelve el contenido por defecto`, {
        elemento: buscador.contenedor.first(),
      });
      await home.capturarEvidencia(cp);
    });
  });

  // ===================================================================== MOBILE
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);
    const FF: FormFactor = 'mobile';

    test('TC-100-M-001 · El buscador es accesible desde el tabbar y el header (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-100-M-001';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await expect(buscador.input).toBeVisible();
      await expect(buscador.input).toHaveAttribute('placeholder', '¿Qué estás buscando?');
      await expect(buscador.iconoLupa).toBeVisible();
      await home.capturarEvidencia(cp, 2, 'buscador en el header Mobile', {
        elemento: home.header.root,
      });

      /**
       * El tabbar inferior del CA: una barra fija anclada al pie del viewport, con un icono de
       * búsqueda. Se busca por geometría y no por un selector concreto porque el TC no nombra
       * ninguno: cualquier elemento fijo que ocupe el ancho al pie de la pantalla contaría. Se mide en
       * el Home —antes de navegar— porque la PDP tiene su propia barra fija de compra al pie, que
       * no es un tabbar; la aserción va al final para que los demás pasos dejen su evidencia.
       */
      const tabbar = await page.evaluate(() => {
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        return Array.from(document.querySelectorAll('body *')).some((el) => {
          const s = getComputedStyle(el);
          if (s.position !== 'fixed') return false;
          const r = el.getBoundingClientRect();
          return r.width > vw * 0.8 && r.height > 0 && r.bottom >= vh - 8 && r.top > vh * 0.6;
        });
      });
      await home.capturarEvidencia(cp, 3, tabbar ? 'tabbar inferior del Home' : 'pie del viewport del Home: no hay tabbar inferior');

      // Header sticky: tras el scroll el buscador sigue en el header fijo.
      await home.header.scrollA(1200);
      await expect(buscador.input).toBeVisible();
      await expect(buscador.input).toBeInViewport();
      await home.capturarEvidencia(cp, 5, 'buscador en el header sticky');

      // Otras páginas, navegando como el usuario: una PLP desde el "Mostrar todo" de un carrusel
      // del Home y, desde ella, una PDP. Sin URL ni SKU: la fila no declara ninguno.
      await home.header.scrollA(0);
      await home.ctasDeCarrusel.first().click();
      await page.waitForURL(/\/category\//, { timeout: 60000 });
      await expect(buscador.input).toBeVisible({ timeout: 60000 });
      await home.capturarEvidencia(cp, 6, 'buscador accesible en la PLP', {
        elemento: home.header.root,
      });

      // Por la imagen: en la PLP el nombre del shelf es un enlace, no el `button` que expone
      // `ShelfProducto.nombre` para la SRP.
      await ShelfProducto.todos(page).first().waitFor({ state: 'visible', timeout: 60000 });
      await ShelfProducto.enIndice(page, 0).imagen.first().click();
      await page.waitForURL(/\.html|\/product\//, { timeout: 60000 });
      await expect(buscador.input).toBeVisible({ timeout: 60000 });
      await home.capturarEvidencia(cp, 6, 'buscador accesible en la PDP', {
        elemento: home.header.root,
      });

      expect(tabbar, 'debería existir un tabbar inferior con el icono de búsqueda').toBe(true);
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-002 · La pantalla completa de búsqueda muestra las 3 secciones y "Cancelar" (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-M-002';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      await buscar(page, buscador, TERMINO);
      await visitarPDPs(page, 2);
      await irAlHome(page);

      await buscador.abrir();
      const caja = await buscador.contenedor.first().boundingBox();
      const vp = page.viewportSize()!;
      expect(caja!.width).toBeGreaterThanOrEqual(vp.width - 2);
      expect(caja!.height).toBeGreaterThanOrEqual(vp.height - 2);
      await home.capturarEvidencia(cp, 3, 'overlay a pantalla completa');

      await expect(buscador.botonCancelar).toBeVisible();
      const cajaCancelar = await buscador.botonCancelar.boundingBox();
      const cajaInput = await buscador.input.boundingBox();
      expect(cajaCancelar!.x).toBeGreaterThan(cajaInput!.x + cajaInput!.width - 2);
      await home.capturarEvidencia(cp, 4, '"Cancelar" a la derecha del buscador');

      expect(await buscador.titulosDeSecciones()).toEqual([
        SECCIONES.recientes,
        SECCIONES.vistos,
        SECCIONES.masBuscado,
      ]);
      await expect(buscador.limpiarDe(SECCIONES.recientes)).toBeVisible();
      await expect(buscador.limpiarDe(SECCIONES.vistos)).toBeVisible();
      await home.capturarEvidencia(cp, 5, 'las 3 secciones en orden');
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-003 · Las búsquedas recientes son chips de la sesión activa y no persisten (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-M-003';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      await buscar(page, buscador, TERMINO);
      await buscar(page, buscador, OTRO_TERMINO);

      await buscador.abrir();
      const chips = await buscador.textosDeChips(SECCIONES.recientes);
      expect(chips).toEqual(expect.arrayContaining([TERMINO, OTRO_TERMINO]));
      expect(await buscador.filasDeChips(SECCIONES.recientes)).toBe(1);
      await home.capturarEvidencia(cp, 3, 'chips de búsquedas recientes');

      await buscador.cancelar();
      await new MenuCuenta(page).cerrarSesion();
      const { rut, clave } = credenciales(testData);
      await new LoginModal(page).iniciarSesion(rut, clave);
      await home.capturarEvidencia(cp, 4, 'sesión reiniciada');

      await buscador.abrir();
      expect(await buscador.haySeccion(SECCIONES.recientes)).toBe(false);
      await home.capturarEvidencia(cp, 5, 'sesión nueva sin búsquedas recientes');
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-004 · Tap en un chip de búsqueda reciente redirige a la SRP (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-M-004';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      await buscar(page, buscador, TERMINO);
      await buscador.abrir();
      const primero = (await buscador.chipsDe(SECCIONES.recientes).first().innerText()).trim();
      await home.capturarEvidencia(cp, 1, `chip de búsqueda reciente "${primero}"`);

      await buscador.chipsDe(SECCIONES.recientes).first().click();
      await page.waitForURL(/\/search\?/, { timeout: 60000 });
      expect(new URL(page.url()).searchParams.get('q')).toBe(primero);
      await home.capturarEvidencia(cp, 3, `SRP del término "${primero}"`);
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-005 · "Lo último que viste" muestra thumbnails y nombres de los PDP visitados (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-M-005';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      const visitados = await visitarPDPs(page, 3);
      await irAlHome(page);
      await buscador.abrir();
      await home.capturarEvidencia(cp, 3, 'sección "Lo último que viste"');

      const vistos = await buscador.detalleDeVistos();
      expect(vistos.length).toBeGreaterThanOrEqual(2);
      expect(vistos.length).toBeLessThanOrEqual(6);
      await expect(buscador.imagenDeVisto(0)).toBeVisible();
      for (const v of vistos) {
        expect(v.conImagen).toBe(true);
        expect(v.nombre.length).toBeGreaterThan(0);
      }
      expect(vistos[0].sku).toBe(visitados[visitados.length - 1]);
      await home.capturarEvidencia(cp, 4, `${vistos.length} productos vistos, el más reciente primero`);
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-006 · Tap en imagen o nombre de un producto visto abre su PDP (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-M-006';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      await visitarPDPs(page, 2);
      await irAlHome(page);
      await buscador.abrir();
      const vistos = await buscador.detalleDeVistos();
      const skuEsperado = vistos[0].sku;
      await home.capturarEvidencia(cp, 1, 'primer producto de "Lo último que viste"');

      await buscador.imagenDeVisto(0).click();
      await page.waitForURL(/\/product\//, { timeout: 60000 });
      if (skuEsperado) expect(page.url()).toContain(skuEsperado);
      await home.capturarEvidencia(cp, 3, 'PDP alcanzada desde la imagen');

      await irAlHome(page);
      await buscador.abrir();
      await buscador.nombreDeVisto(0).click();
      await page.waitForURL(/\/product\//, { timeout: 60000 });
      if (skuEsperado) expect(page.url()).toContain(skuEsperado);
      await home.capturarEvidencia(cp, 5, 'PDP alcanzada desde el nombre');
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-007 · Sin búsquedas en la sesión, "Tus búsquedas recientes" no se renderiza (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-M-007';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      expect(await buscador.haySeccion(SECCIONES.recientes)).toBe(false);
      expect(await buscador.haySeccion(SECCIONES.masBuscado)).toBe(true);
      expect(await buscador.sinEspacioVacio()).toBe(true);
      await home.capturarEvidencia(cp, 3, 'pantalla de búsqueda sin la sección de recientes');
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-008 · Sin visitas a PDP, "Lo último que viste" no se renderiza (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-M-008';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      expect(await buscador.haySeccion(SECCIONES.vistos)).toBe(false);
      expect(await buscador.haySeccion(SECCIONES.masBuscado)).toBe(true);
      expect(await buscador.sinEspacioVacio()).toBe(true);
      await home.capturarEvidencia(cp, 3, 'pantalla de búsqueda sin "Lo último que viste"');
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-009 · Guest sin historial ve únicamente "Lo más buscado" (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-100-M-009';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      expect(await buscador.titulosDeSecciones()).toEqual([SECCIONES.masBuscado]);
      await home.capturarEvidencia(cp, 2, 'pantalla del Guest con solo "Lo más buscado"');
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-010 · Guest con una búsqueda ve recientes y más buscado, no "Lo último que viste" (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-100-M-010';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscar(page, buscador, TERMINO_GUEST);
      await irAlHome(page);
      await buscador.abrir();

      expect(await buscador.textosDeChips(SECCIONES.recientes)).toContain(TERMINO_GUEST);
      await expect(buscador.limpiarDe(SECCIONES.recientes)).toBeVisible();
      expect(await buscador.haySeccion(SECCIONES.masBuscado)).toBe(true);
      expect(await buscador.haySeccion(SECCIONES.vistos)).toBe(false);
      await home.capturarEvidencia(cp, 3, `pantalla del Guest con el chip "${TERMINO_GUEST}"`);
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-011 · "Lo más buscado" muestra hasta 6 chips en un máximo de 2 filas (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-100-M-011';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      const chips = await buscador.textosDeChips(SECCIONES.masBuscado);
      expect(chips.length).toBeGreaterThan(0);
      expect(chips.length).toBeLessThanOrEqual(6);
      expect(await buscador.filasDeChips(SECCIONES.masBuscado)).toBeLessThanOrEqual(2);
      expect(await buscador.hayChipTruncado(SECCIONES.masBuscado)).toBe(false);
      await home.capturarEvidencia(cp, 3, `"Lo más buscado" con ${chips.length} chips`);

      await buscador.cancelar();
      await buscador.abrir();
      expect(await buscador.textosDeChips(SECCIONES.masBuscado)).toEqual(chips);
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-012 · Tap en un chip de "Lo más buscado" redirige a la SRP (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-100-M-012';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      const primero = (await buscador.chipsDe(SECCIONES.masBuscado).first().innerText()).trim();
      await home.capturarEvidencia(cp, 1, `chip "${primero}" de "Lo más buscado"`);

      await buscador.chipsDe(SECCIONES.masBuscado).first().click();
      await page.waitForURL(/\/search\?/, { timeout: 60000 });
      expect(new URL(page.url()).searchParams.get('q')).toBe(primero);
      await home.capturarEvidencia(cp, 2, `SRP del término "${primero}"`);
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-013 · "Limpiar" borra las búsquedas recientes y la sección no reaparece (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-100-M-013';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscar(page, buscador, TERMINO_GUEST);
      await irAlHome(page);
      await buscador.abrir();
      expect(await buscador.haySeccion(SECCIONES.recientes)).toBe(true);
      await home.capturarEvidencia(cp, 1, 'sección de recientes antes de limpiar');

      await buscador.limpiarDe(SECCIONES.recientes).click();
      await page.waitForTimeout(800);
      expect(await buscador.haySeccion(SECCIONES.recientes)).toBe(false);
      await home.capturarEvidencia(cp, 2, 'sección eliminada');

      await buscador.cancelar();
      await buscador.abrir();
      expect(await buscador.haySeccion(SECCIONES.recientes)).toBe(false);
      await home.capturarEvidencia(cp, 4, 'pantalla reabierta: la sección no reaparece');
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-014 · "Limpiar" borra "Lo último que viste" y la sección no reaparece (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-M-014';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      await visitarPDPs(page, 2);
      await irAlHome(page);
      await buscador.abrir();
      expect(await buscador.haySeccion(SECCIONES.vistos)).toBe(true);
      await home.capturarEvidencia(cp, 1, 'sección "Lo último que viste" antes de limpiar');

      await buscador.limpiarDe(SECCIONES.vistos).click();
      await page.waitForTimeout(800);
      expect(await buscador.haySeccion(SECCIONES.vistos)).toBe(false);
      await home.capturarEvidencia(cp, 2, 'sección eliminada');

      await buscador.cancelar();
      await buscador.abrir();
      expect(await buscador.haySeccion(SECCIONES.vistos)).toBe(false);
      await home.capturarEvidencia(cp, 4, 'pantalla reabierta: la sección no reaparece');
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-015 · Con 1 o 2 caracteres la pantalla mantiene el contenido por defecto (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-M-015';
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      await buscar(page, buscador, TERMINO);
      await irAlHome(page);
      await buscador.abrir();
      const porDefecto = await buscador.titulosDeSecciones();
      expect(porDefecto.length).toBeGreaterThan(0);
      await home.capturarEvidencia(cp, 1, 'contenido por defecto');

      await buscador.iniciarMuestreo();
      await buscador.escribir(TERMINO.slice(0, 1));
      await page.waitForTimeout(1500);
      expect(await buscador.titulosDeSecciones()).toEqual(porDefecto);
      await buscador.escribir(TERMINO.slice(1, 2));
      await page.waitForTimeout(1500);
      expect(await buscador.titulosDeSecciones()).toEqual(porDefecto);
      expect(await buscador.huboSkeleton()).toBe(false);
      await buscador.detenerMuestreo();
      await home.capturarEvidencia(cp, 3, 'con 2 caracteres sigue el contenido por defecto');
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-016 · Al tercer carácter se dispara la búsqueda dinámica con skeleton (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-100-M-016';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      await buscador.iniciarMuestreo();
      await home.capturarEvidencia(cp, 1, 'pantalla de búsqueda antes de escribir');

      await buscador.escribir(T3, 60);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });
      expect(await buscador.huboSkeleton()).toBe(true);
      await buscador.detenerMuestreo();

      expect(new URL(page.url()).pathname).toBe('/');
      await home.capturarEvidencia(cp, 3, `resultados reales para "${T3}"`);
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-017 · El debounce reinicia el timer y al borrar a <3 vuelve el contenido por defecto (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-100-M-017';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      const consultados = await buscador.terminosConsultados(async () => {
        await buscador.escribir(T4, 40);
        await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });
        await page.waitForTimeout(1500);
      });
      expect(consultados).toEqual([T4]);
      await home.capturarEvidencia(cp, 2, `resultados del término estabilizado "${T4}"`);

      await buscador.borrar(2);
      await page.waitForTimeout(2000);
      expect(await buscador.valor()).toBe(T4.slice(0, 2));
      expect(await buscador.titulosDeSecciones()).toContain(SECCIONES.masBuscado);
      await home.capturarEvidencia(cp, 3, 'con 2 caracteres vuelve el contenido por defecto');
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-018 · Estructura de la pantalla de sugerencias con resultados (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-100-M-018';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      await buscador.escribir(TERMINO);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });

      const titulo = await buscador.textoTituloResultados();
      expect(titulo.toLowerCase()).toContain(TERMINO);
      expect(await buscador.cantidadAnunciada()).not.toBeNull();
      await home.capturarEvidencia(cp, 2, `título "${titulo}"`);

      const chips = await buscador.textosDeAutocompletado();
      expect(chips.length).toBeGreaterThan(0);
      expect(chips.length).toBeLessThanOrEqual(4);

      const productos = await buscador.productosDelCarrusel.count();
      expect(productos).toBeGreaterThan(0);
      expect(productos).toBeLessThanOrEqual(4);
      expect(await buscador.flechasDelCarrusel.count()).toBe(0);
      await home.capturarEvidencia(cp, 4, `carrusel con ${productos} productos, sin flechas`);

      await expect(buscador.botonVerTodos).toBeVisible();

      // El CA pide un carrusel deslizable: el bloque tiene que desbordar horizontalmente.
      const desp = await buscador.desplazamientoDelCarrusel();
      expect(
        desp.deslizable,
        `el carrusel debería deslizarse; se renderiza como ${desp.display} de ${desp.columnas} columnas sin desborde horizontal`,
      ).toBe(true);

      await buscador.botonVerTodos.click();
      await page.waitForURL(/\/search\?/, { timeout: 60000 });
      expect(new URL(page.url()).searchParams.get('q')).toBe(TERMINO);
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-019 · "Cancelar" cierra la pantalla de búsqueda y limpia el campo (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-100-M-019';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);
      const urlInicial = page.url();

      await buscador.abrir();
      await buscador.escribir(TERMINO);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });
      await home.capturarEvidencia(cp, 1, 'pantalla de búsqueda con término escrito');

      await buscador.cancelar();
      expect(await buscador.estaAbierto()).toBe(false);
      expect(await buscador.valor()).toBe('');
      expect(page.url()).toBe(urlInicial);
      await home.capturarEvidencia(cp, 3, 'pantalla cerrada y buscador limpio', {
        elemento: home.header.root,
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-020 · El campo acepta 100 caracteres y no admite el 101 (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-100-M-020';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      expect(await buscador.maxlength()).toBe('100');

      const cien = 'a'.repeat(100);
      await buscador.input.fill(cien);
      expect((await buscador.valor()).length).toBe(100);
      await home.capturarEvidencia(cp, 2, 'campo con 100 caracteres');

      await buscador.input.press('b');
      expect(await buscador.valor()).toBe(cien);

      const errores = page.getByText(/m[áa]ximo|l[íi]mite|error|no puedes/i);
      expect(await errores.locator('visible=true').count()).toBe(0);
      await home.capturarEvidencia(cp, 4, 'el carácter 101 no se acepta y no hay mensaje de error');
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-021 · Con 0 productos en backend el carrusel no se renderiza (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-100-M-021';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      await buscador.escribir(SIN_RESULTADOS);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });
      expect(await buscador.cantidadAnunciada()).toBe(0);
      await home.capturarEvidencia(cp, 1, `pantalla del término sin productos "${SIN_RESULTADOS}"`);

      expect(await buscador.hayCarrusel()).toBe(false);
      expect(await buscador.sinEspacioVacio()).toBe(true);
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-022 · Con 1 a 3 productos el carrusel muestra solo los disponibles, sin flechas ni huecos (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-M-022';
      const termino = terminoDeclarado(testData, 'SEARCH_1A3_PRODUCTOS');
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      await buscador.escribir(termino);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });
      const { total, visibles } = await verificarCarruselCorto(buscador);
      await home.capturarEvidencia(cp, 2, `carrusel con ${visibles} de ${total} productos`, {
        elemento: buscador.contenedor.first(),
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-024 · Sin sugerencias de autocompletado la sección de chips no se renderiza ni deja hueco (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-M-024';
      const termino = terminoDeclarado(testData, 'SEARCH_SIN_SUGERENCIAS');
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      await buscador.escribir(termino);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });
      await page.waitForTimeout(1500);
      expect(await buscador.textosDeAutocompletado(), 'la sección de chips de sugerencias no se renderiza').toEqual([]);
      const hueco = await huecoBajoElTitulo(buscador);
      expect(hueco, `no queda espacio vacío donde iría la sección de sugerencias (${hueco} px)`).toBeLessThanOrEqual(40);
      expect(await buscador.sinEspacioVacio(), 'el modal no deja espacio vacío al pie').toBe(true);
      await expect(buscador.tituloResultados, 'el título del modal se muestra').toBeVisible();
      const total = (await buscador.cantidadAnunciada()) ?? 0;
      expect(await buscador.hayCarrusel(), 'el carrusel se muestra si hay productos').toBe(total > 0);
      await home.capturarEvidencia(cp, 2, `modal sin sugerencias para "${termino}" (${total} productos)`, {
        elemento: buscador.contenedor.first(),
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-023 · Con 4 o más productos el carrusel se desliza por swipe y sin flechas (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-100-M-023';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      await buscador.escribir(TERMINO);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });

      const total = await buscador.cantidadAnunciada();
      expect(total!).toBeGreaterThanOrEqual(4);
      expect(await buscador.productosDelCarrusel.count()).toBe(4);
      expect(await buscador.flechasDelCarrusel.count()).toBe(0);
      await expect(buscador.botonVerTodos).toBeVisible();
      await home.capturarEvidencia(cp, 2, `carrusel con 4 productos de ${total} totales`);

      const desp = await buscador.desplazamientoDelCarrusel();
      await home.capturarEvidencia(cp, 3, 'disposición del bloque de productos');
      expect(
        desp.deslizable,
        `el carrusel debería deslizarse por swipe horizontal; se renderiza como ${desp.display} de ${desp.columnas} columnas con scrollWidth ${desp.scrollWidth} = clientWidth ${desp.clientWidth}`,
      ).toBe(true);
      await home.capturarEvidencia(cp);
    });

    test('TC-100-M-026 · Sin productos ni sugerencias, solo se muestra el título con 0 resultados (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-100-M-026';
      const home = await irAlHome(page);
      const buscador = buscadorDe(page, FF);

      await buscador.abrir();
      await buscador.escribir(SIN_RESULTADOS);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });

      const titulo = await buscador.textoTituloResultados();
      expect(titulo.toLowerCase()).toContain(SIN_RESULTADOS);
      expect(await buscador.cantidadAnunciada()).toBe(0);
      expect(await buscador.textosDeAutocompletado()).toEqual([]);
      expect(await buscador.hayCarrusel()).toBe(false);
      expect(await buscador.hayVerTodos()).toBe(false);
      await home.capturarEvidencia(cp, 2, `pantalla con "${titulo}"`);
      await home.capturarEvidencia(cp);
    });
    test('TC-100-M-027 · Al retroceder a 2 caracteres la pantalla restaura el contenido por defecto (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-100-M-027';
      const termino = terminoDeBusqueda(testData);
      const home = await irAlHomeLogueado(page, testData);
      const buscador = buscadorDe(page, FF);

      // Precondición: historial de búsquedas en la sesión activa. Se vuelve al Home con el logo y
      // no con `goto('/')`: las búsquedas recientes viven en el estado del front, y una recarga
      // completa las descarta (D-003 lo confirma sin recargar).
      await buscar(page, buscador, termino);
      await home.header.clicLogo();
      await page.waitForURL((u) => new URL(u).pathname === '/', { timeout: 60000 });

      await buscador.abrir();
      const porDefecto = await buscador.titulosDeSecciones();
      expect(porDefecto).toContain(SECCIONES.recientes);
      await home.capturarEvidencia(cp, 1, 'contenido por defecto de la pantalla');

      await buscador.escribir(termino, 60);
      await expect(buscador.tituloResultados).toHaveText(TITULO_RESULTADOS, { timeout: 30000 });
      await home.capturarEvidencia(cp, 2, `resultados dinámicos para "${termino}"`);

      // Retroceder hasta 2 caracteres: ninguna consulta debe salir con menos de 3.
      await buscador.iniciarMuestreo();
      const consultados = await buscador.terminosConsultados(async () => {
        await buscador.borrar(termino.length - 2);
        await page.waitForTimeout(2000);
      });
      await buscador.detenerMuestreo();
      expect(await buscador.valor()).toBe(termino.slice(0, 2));
      expect(consultados.filter((t) => t.length < 3)).toEqual([]);
      await expect(buscador.tituloResultados).not.toHaveText(TITULO_RESULTADOS);
      expect(await buscador.hayCarrusel()).toBe(false);
      expect(await buscador.huboSkeleton()).toBe(false);
      expect(await buscador.titulosDeSecciones()).toEqual(porDefecto);
      await home.capturarEvidencia(cp, 6, `con "${termino.slice(0, 2)}" vuelve el contenido por defecto`);
      await home.capturarEvidencia(cp);
    });
  });
});
