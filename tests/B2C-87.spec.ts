import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { ListadoProductos } from './pages/ListadoProductos';
import { OPCIONES_DECLARADAS, tolerante } from './pages/SelectorOrden';
import { PLPCategoriaPage } from './pages/PLPCategoriaPage';
import { LoginModal } from './pages/LoginModal';
import { PaginaHabilitada } from './pages/PaginaHabilitada';

/**
 * B2C-87 — Ordenamiento del listado (PLP/SRP/Colección).
 *
 * Están aquí los 18 TC de la planilla que se pudieron ejecutar con la data que declaran. Los
 * otros 8 quedaron `Bloqueado` antes de generar su `test()`:
 *
 * - **D-010, D-022 y D-024** se ejecutan con sesión iniciada ("cliente con historial
 *   suficiente", "cliente sin historial suficiente") y su columna `Test data` no declara ninguna
 *   cuenta. Elegir una del Excel de data por parecido de nombre haría que un fallo no se pudiera
 *   distinguir de una cuenta equivocada.
 * - **D-007** pide comprobar que el orden resultante corresponde al volumen de ventas calculado
 *   por SFCC. El storefront expone la secuencia, no el ranking contra el que contrastarla, y la
 *   fila no aporta uno.
 * - **D-018** pide un listado con productos patrocinados. La fila no declara ningún SKU
 *   patrocinado y, además, el endpoint `sponsored-blocks` responde 404 en la SRP declarada.
 * - **D-011, D-012 y D-013** piden como precondición "una opción de orden distinta a la vigente
 *   seleccionada sin confirmar". Esa precondición no es alcanzable: pulsar una opción dentro del
 *   modal no registra nada (ver más abajo). Los tres mecanismos de cancelación funcionan —se
 *   comprobó en la exploración que la X, el clic fuera y Escape cierran el modal conservando el
 *   orden—, pero certificar eso sin una selección pendiente que descartar no probaría lo que el
 *   caso existe para probar.
 *
 * Lo que la exploración dejó claro y gobierna cómo se leen varios resultados:
 *
 * - **Pulsar un criterio dentro del modal de filtros no hace nada**: la consola lanza
 *   `TypeError: r is not a function`, la opción no queda marcada y la URL no cambia. El dropdown
 *   de la barra, en cambio, funciona. Es el defecto raíz de D-004 y M-002.
 * - **No existe una etiqueta visible "Ordenar por"**: el control muestra el criterio vigente y su
 *   accessible name es `Ordenar: <criterio>`. Los TC lo llaman por el nombre del diseño; el
 *   locator va por el `aria-label`, que es lo estable.
 * - **Los TC escriben los criterios sin tilde y la UI los lleva**. Los locators van tolerantes:
 *   un literal copiado del Excel produciría un `Rechazado` del script, no del producto.
 *
 * El orden vigente se comprueba contra el parámetro `sort` de la URL siempre que se puede: es la
 * señal que el front manda al backend, y no depende de cómo se etiquete el control en pantalla.
 */

/** La SRP que los TC declaran en su columna `Test data`, exigida. */
function srp(testData: Parameters<typeof token>[0]): string {
  const valor = token(testData, 'SRP_URL');
  if (!valor) throw new Error('Falta {SRP_URL} en el Excel de data: los TC lo declaran');
  const url = new URL(valor);
  return `${url.pathname.slice(1)}${url.search}`;
}

async function abrirListado(
  page: Page,
  testData: Parameters<typeof token>[0],
): Promise<ListadoProductos> {
  const listado = new ListadoProductos(page, srp(testData));
  await listado.goto();
  return listado;
}

/** Las 6 opciones que declaran las filas SP1 (CA3), en su orden. */
const SEIS_OPCIONES = ['Recomendado', 'Más vendido', 'Precio más bajo', 'Precio más alto', 'Pensados para ti', 'Mejor descuento'];

function tokenExigido(testData: Parameters<typeof token>[0], nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) throw new Error(`Falta {${nombre}} en el Excel de data: el TC lo declara`);
  return valor;
}

/** Abre el listado de una URL declarada por token (PLP o SRP). */
async function abrirPorToken(
  page: Page,
  testData: Parameters<typeof token>[0],
  nombre: string,
): Promise<ListadoProductos> {
  const url = new URL(tokenExigido(testData, nombre));
  const listado = new ListadoProductos(page, `${url.pathname.slice(1)}${url.search}`);
  await listado.goto();
  await listado.waitUntilReady();
  await page.waitForTimeout(2500);
  return listado;
}

/** Espera a que el listado quede servido con el criterio dado (`null` = sin `sort`, Recomendado). */
async function esperarListado(page: Page, sort: string | null): Promise<void> {
  // "Recomendado" viaja como `sort=recommend` cuando se elige, y sin `sort` al ingresar.
  const aceptados = sort === null ? [null, 'recommend'] : [sort];
  await expect
    .poll(() => aceptados.includes(new URL(page.url()).searchParams.get('sort')), {
      message: `el orden aplicado es ${sort ?? 'Recomendado'}`,
      timeout: 20000,
    })
    .toBe(true);
  await page.waitForTimeout(3000);
}

/** Abre el modal, marca el criterio, confirma con "Mostrar [N] productos" y espera el listado. */
async function ordenarDesdeElModal(
  page: Page,
  listado: ListadoProductos,
  criterio: string,
  sort: string | null,
): Promise<void> {
  const panel = await listado.abrirPanelDeFiltros();
  await panel.elegirOrden(tolerante(criterio));
  expect(await panel.ordenesMarcados(), `"${criterio}" queda marcado`).toEqual([criterio]);
  await panel.aplicar();
  expect(await panel.estaAbierto(), 'el modal se cierra al confirmar').toBe(false);
  await esperarListado(page, sort);
}

/** Los productos del listado por el destino de su enlace (en Mobile el nombre es un enlace). */
async function enlacesDelListado(page: Page): Promise<string[]> {
  return page.locator('main a[href$=".html"]').evaluateAll((as) => [
    ...new Set(as.map((a) => (a as HTMLAnchorElement).pathname)),
  ]);
}

/** Los nombres de los productos del listado, en orden (el enlace con texto de cada tarjeta). */
async function nombresDelListado(page: Page): Promise<string[]> {
  return page.locator('main a[href$=".html"]').evaluateAll((as) => {
    const vistos = new Map<string, string>();
    for (const a of as as HTMLAnchorElement[]) {
      const t = (a.textContent ?? '').trim();
      if (t && !vistos.has(a.pathname)) vistos.set(a.pathname, t);
    }
    return [...vistos.values()];
  });
}

/** Pone en cero el registro de skeletons, para medir solo los del refresco que sigue. */
async function reiniciarSkeletons(page: Page): Promise<void> {
  await page.evaluate(() => {
    const w = window as unknown as { __skeleton?: { max: number } };
    if (w.__skeleton) w.__skeleton.max = 0;
  });
}

/**
 * Inicia sesión con {COMPRADOR_SIN_HISTORIAL_USER} y devuelve cuántos pedidos tiene, leído del
 * historial de compras de la cuenta (`/account/mis-compras` pide `customers/{id}/orders`): es la
 * comprobación de la precondición "sin historial".
 */
async function iniciarSesionSinHistorial(page: Page, testData: Parameters<typeof token>[0]): Promise<number> {
  await new PaginaHabilitada(page).goto();
  await new LoginModal(page).iniciarSesion(
    tokenExigido(testData, 'COMPRADOR_SIN_HISTORIAL_USER'),
    tokenExigido(testData, 'COMPRADOR_SIN_HISTORIAL_PASSWORD'),
  );
  let total: number | null = null;
  page.on('response', async (r) => {
    if (!/\/customers\/[^/]+\/orders(\?|$)/.test(r.url()) || !r.ok()) return;
    const cuerpo = await r.json().catch(() => null);
    if (typeof cuerpo?.total === 'number') total = Math.max(total ?? 0, cuerpo.total);
  });
  await page.goto('/account/mis-compras');
  await expect.poll(() => total, { timeout: 30000, message: 'historial de compras de la cuenta' }).not.toBeNull();
  return total!;
}

test.describe('B2C-87 — Ordenamiento del listado', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C87-D-001 · Acceso al ordenamiento desde el Dropdown Ordenar por (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-D-001';
      const listado = await abrirListado(page, testData);
      await listado.capturarEvidencia(cp, 1, 'SRP cargada con el control de orden en la barra');

      await listado.orden.desplegar();
      await listado.capturarEvidencia(cp, 2, 'dropdown de orden desplegado');

      const opciones = await listado.orden.opciones();
      await listado.capturarEvidencia(cp, 3, 'opciones de ordenamiento a la vista');

      // El resultado esperado es que el sistema despliegue las opciones al interactuar con el
      // control: se comprueba que quedó desplegado y que ofrece criterios, no cuáles son —de eso
      // se ocupa D-003.
      expect(await listado.orden.estaDesplegado(), 'el dropdown quedó desplegado').toBe(true);
      expect(opciones.length, 'el dropdown despliega opciones de ordenamiento').toBeGreaterThan(0);

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-D-002 · Acceso al ordenamiento desde el Modal de filtros (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-D-002';
      const listado = await abrirListado(page, testData);
      await listado.capturarEvidencia(cp, 1, 'SRP cargada');

      const panel = await listado.abrirPanelDeFiltros();
      await listado.capturarEvidencia(cp, 2, 'modal de filtros abierto', { elemento: panel.root });

      await expect(panel.seccionOrdenar, 'la sección Ordena tus productos').toBeVisible();
      const opciones = await panel.nombresDeOrden();
      await listado.capturarEvidencia(cp, 3, 'seccion Ordena tus productos con sus opciones', {
        elemento: panel.root,
      });

      expect(opciones.length, 'la sección despliega opciones de ordenamiento').toBeGreaterThan(0);

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-D-003 · Opciones de ordenamiento disponibles, en orden y de seleccion unica (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-D-003';
      const listado = await abrirListado(page, testData);

      await listado.orden.desplegar();
      await listado.capturarEvidencia(cp, 1, 'selector de ordenamiento abierto');

      const opciones = await listado.orden.opciones();
      await listado.capturarEvidencia(cp, 2, 'listado de opciones ofrecidas');

      // CA3 enumera los cinco criterios y su orden. Se compara la lista completa, no solo que
      // los cinco estén: un criterio de más también es una desviación del caso.
      expect(opciones, 'las opciones ofrecidas y su orden').toEqual([...OPCIONES_DECLARADAS]);

      const marcadas = await listado.orden.opcionesMarcadas();
      await listado.capturarEvidencia(cp, 3, 'opcion marcada como seleccionada');
      expect(marcadas, 'la selección es única').toHaveLength(1);

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-D-004 · Seleccion y confirmacion del orden desde el modal de filtros (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-D-004';
      const listado = await abrirListado(page, testData);

      const panel = await listado.abrirPanelDeFiltros();
      await listado.capturarEvidencia(cp, 1, 'modal de filtros abierto', { elemento: panel.root });

      await panel.elegirOrden(tolerante('Precio más bajo'));
      await listado.capturarEvidencia(cp, 2, 'tras pulsar Precio mas bajo en el modal', {
        elemento: panel.root,
      });

      // Paso 2 del TC: la opción tiene que quedar marcada. Es lo primero que el caso exige y lo
      // que hace que el paso 3 signifique algo.
      expect(
        await panel.ordenesMarcados(),
        'la opción pulsada queda marcada en el modal',
      ).toContain('Precio más bajo');

      await panel.aplicar();
      await listado.capturarEvidencia(cp, 3, 'listado tras confirmar el orden');

      expect(await panel.estaAbierto(), 'el modal se cerró').toBe(false);
      expect(listado.criterioEnLaUrl, 'el orden aplicado').toBe('price-asc');
      expect(await listado.orden.criterioVigente(), 'el dropdown muestra la opción elegida').toMatch(
        tolerante('Precio más bajo'),
      );

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-D-005 · Seleccion y confirmacion del orden desde el Dropdown (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-D-005';
      const listado = await abrirListado(page, testData);

      await listado.orden.desplegar();
      await listado.capturarEvidencia(cp, 1, 'dropdown Ordenar por desplegado');

      await listado.orden.elegir('Precio más alto');
      await listado.capturarEvidencia(cp, 2, 'listado refrescado con el nuevo orden');

      expect(await listado.orden.estaDesplegado(), 'el dropdown se cerró').toBe(false);
      expect(listado.criterioEnLaUrl, 'el orden aplicado').toBe('price-desc');
      expect(await listado.orden.criterioVigente(), 'el dropdown muestra la opción elegida').toMatch(
        tolerante('Precio más alto'),
      );

      // Paso 4: el modal tiene que reflejar la misma selección que el dropdown.
      const panel = await listado.abrirPanelDeFiltros();
      await listado.capturarEvidencia(cp, 3, 'modal de filtros abierto tras ordenar', {
        elemento: panel.root,
      });
      await listado.capturarEvidencia(cp);

      expect(
        await panel.ordenesMarcados(),
        'el modal refleja el criterio vigente del dropdown',
      ).toContain('Precio más alto');
    });

    test('TC-B2C87-D-006 · Ordenamiento por Recomendado aplica la regla por defecto (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-D-006';
      const listado = await abrirListado(page, testData);

      // La regla Best Matches se configura en BM y no es observable desde el storefront; lo que
      // sí es observable es que "Recomendado" reproduce el orden con el que el sistema sirve el
      // listado por defecto, que es esa misma regla aplicada.
      const porDefecto = await listado.secuencia();
      await listado.capturarEvidencia(cp, 1, 'listado servido por defecto');

      await listado.orden.elegir('Precio más bajo');
      await listado.capturarEvidencia(cp, 2, 'listado ordenado por precio, antes de volver');

      await listado.orden.elegir('Recomendado');
      await listado.capturarEvidencia(cp, 3, 'listado tras confirmar Recomendado');

      expect(listado.criterioEnLaUrl, 'el criterio aplicado').toBe('recommend');
      expect(await listado.secuencia(), 'Recomendado reproduce el orden por defecto').toEqual(
        porDefecto,
      );

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-D-008 · Ordenamiento por Precio mas bajo (ascendente) (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-D-008';
      const listado = await abrirListado(page, testData);

      await listado.orden.desplegar();
      await listado.capturarEvidencia(cp, 1, 'selector de ordenamiento abierto');

      await listado.orden.elegir('Precio más bajo');
      await listado.capturarEvidencia(cp, 2, 'listado ordenado por precio ascendente');

      const precios = await listado.precios();
      expect(precios.length, 'el listado trae productos con precio').toBeGreaterThan(1);
      expect(precios.some(Number.isNaN), 'todos los precios se pudieron leer').toBe(false);
      expect(precios, 'los precios quedan en orden ascendente').toEqual(
        [...precios].sort((a, b) => a - b),
      );

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-D-009 · Ordenamiento por Precio mas alto (descendente) (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-D-009';
      const listado = await abrirListado(page, testData);

      await listado.orden.desplegar();
      await listado.capturarEvidencia(cp, 1, 'selector de ordenamiento abierto');

      await listado.orden.elegir('Precio más alto');
      await listado.capturarEvidencia(cp, 2, 'listado ordenado por precio descendente');

      const precios = await listado.precios();
      expect(precios.length, 'el listado trae productos con precio').toBeGreaterThan(1);
      expect(precios.some(Number.isNaN), 'todos los precios se pudieron leer').toBe(false);
      expect(precios, 'los precios quedan en orden descendente').toEqual(
        [...precios].sort((a, b) => b - a),
      );

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-D-014 · Persistencia del ordenamiento al reabrir el selector (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-D-014';
      const listado = await abrirListado(page, testData);

      await listado.orden.elegir('Precio más alto');
      await listado.capturarEvidencia(cp, 1, 'criterio distinto al default confirmado');

      await listado.orden.desplegar();
      await listado.capturarEvidencia(cp, 2, 'selector reabierto con el criterio marcado');

      expect(
        await listado.orden.opcionesMarcadas(),
        'el selector muestra marcado el último criterio confirmado',
      ).toEqual(['Precio más alto']);

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-D-015 · Cambiar el orden no afecta los filtros activos ni el conteo (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-D-015';
      const listado = await abrirListado(page, testData);

      // El filtro concreto es data del ambiente que la fila no declara: se toma el que la SRP
      // ofrezca en ese momento, para que el caso siga valiendo cuando cambie el catálogo.
      const panel = await listado.abrirPanelDeFiltros();
      await panel.switchOfertas.first().click();
      await panel.esperarRecalculo();
      await listado.capturarEvidencia(cp, 1, 'filtro aplicado en el modal', {
        elemento: panel.root,
      });
      await panel.aplicar();

      const filtrosAntes = listado.filtrosEnLaUrl;
      const conteoAntes = await listado.conteoDeclarado();
      const secuenciaAntes = await listado.secuencia();
      await listado.capturarEvidencia(cp, 2, 'listado filtrado antes de cambiar el orden');

      expect(filtrosAntes.length, 'hay al menos un filtro activo').toBeGreaterThan(0);

      await listado.orden.elegir('Precio más alto');
      await listado.capturarEvidencia(cp, 3, 'listado filtrado tras cambiar el orden');

      expect(listado.filtrosEnLaUrl, 'los filtros activos se mantienen').toEqual(filtrosAntes);
      expect(await listado.conteoDeclarado(), 'el conteo de productos se mantiene').toBe(
        conteoAntes,
      );
      const secuenciaDespues = await listado.secuencia();
      expect([...secuenciaDespues].sort(), 'el conjunto de productos es el mismo').toEqual(
        [...secuenciaAntes].sort(),
      );

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-D-016 · El icono de filtros muestra indicador bullet con orden distinto al default (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-D-016';
      const listado = await abrirListado(page, testData);

      const iconoPorDefecto = await listado.marcadoDeLaZonaDeFiltros();
      await listado.capturarEvidencia(cp, 1, 'icono de filtros con el orden por defecto', {
        elemento: listado.botonFiltros,
      });

      await listado.orden.elegir('Precio más bajo');
      await listado.capturarEvidencia(cp, 2, 'icono de filtros con un orden distinto al default', {
        elemento: listado.botonFiltros,
      });

      expect(listado.criterioEnLaUrl, 'hay un orden distinto al default').toBe('price-asc');
      // El caso no especifica qué forma tiene el bullet, así que se compara el marcado de la zona
      // del icono contra el estado por defecto: un indicador, sea un badge o un estilo, cambiaría
      // algo. Que no cambie nada significa que no apareció ninguno.
      expect(
        await listado.marcadoDeLaZonaDeFiltros(),
        'el icono de filtros cambia al haber un orden distinto al default',
      ).not.toBe(iconoPorDefecto);

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-D-017 · Orden por defecto Recomendado al ingresar por primera vez (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-D-017';
      const listado = await abrirListado(page, testData);
      await listado.capturarEvidencia(cp, 1, 'ingreso sin criterio de ordenamiento previo');

      expect(listado.criterioEnLaUrl, 'no hay criterio previo en la URL').toBeNull();
      expect(
        await listado.orden.criterioVigente(),
        'el sistema muestra Recomendado como criterio activo',
      ).toMatch(tolerante('Recomendado'));

      await listado.orden.desplegar();
      await listado.capturarEvidencia(cp, 2, 'selector con Recomendado marcado');
      expect(await listado.orden.opcionesMarcadas(), 'Recomendado es el criterio marcado').toEqual([
        'Recomendado',
      ]);

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-D-019 · Estado de error al aplicar el ordenamiento (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-D-019';
      const listado = await abrirListado(page, testData);
      await listado.capturarEvidencia(cp, 1, 'listado servido correctamente');

      await listado.forzarErrorDelListado();
      await listado.orden.elegir('Más vendido');
      await listado.capturarEvidencia(cp, 2, 'estado de error tras confirmar el orden');

      await expect(listado.mensajeDeError, 'el mensaje destacado del error').toBeVisible();
      await expect(listado.botonReintentar, 'el botón Reintentar').toBeVisible();
      await expect(listado.botonIrAlInicio, 'el botón Ir al inicio').toBeVisible();
      await expect(
        page.getByText(/estamos trabajando para solucionarlo/i),
        'el texto de acompañamiento',
      ).toBeVisible();
      await expect(listado.codigoDeError, 'el código de error que declara el caso').toHaveText(
        /PLP-013/,
      );

      await listado.capturarEvidencia(cp);
      await listado.restaurarListado();
    });

    test('TC-B2C87-D-020 · El boton Reintentar del estado de error recarga la pagina (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-D-020';
      const listado = await abrirListado(page, testData);

      await listado.forzarErrorDelListado();
      await listado.orden.elegir('Más vendido');
      await expect(listado.mensajeDeError, 'el estado de error está a la vista').toBeVisible();
      await listado.capturarEvidencia(cp, 1, 'estado de error visible');

      // "La página se recarga" se comprueba por lo observable: que el listado se vuelva a pedir.
      // Contar las peticiones cubre tanto una recarga del documento como un refetch del cliente.
      let peticiones = 0;
      page.on('request', (req) => {
        if (/product-search/.test(req.url())) peticiones += 1;
      });

      await listado.botonReintentar.click();
      await page.waitForTimeout(3000);
      await listado.capturarEvidencia(cp, 2, 'listado tras pulsar Reintentar');

      expect(peticiones, 'Reintentar vuelve a pedir el listado').toBeGreaterThan(0);

      await listado.capturarEvidencia(cp);
      await listado.restaurarListado();
    });

    test('TC-B2C87-D-021 · El boton Ir al inicio del estado de error redirige al Home (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-D-021';
      const listado = await abrirListado(page, testData);

      await listado.forzarErrorDelListado();
      await listado.orden.elegir('Más vendido');
      await expect(listado.mensajeDeError, 'el estado de error está a la vista').toBeVisible();
      await listado.capturarEvidencia(cp, 1, 'estado de error visible');

      await listado.botonIrAlInicio.click();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2000);
      await listado.capturarEvidencia(cp, 2, 'Home tras pulsar Ir al inicio');

      expect(new URL(page.url()).pathname, 'el sistema redirige al Home').toBe('/');

      await listado.capturarEvidencia(cp);
      await listado.restaurarListado();
    });

    test('TC-B2C87-D-023 · Ordenamiento en SRP: mismas opciones y Recomendado por relevancia (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-D-023';
      const listado = await abrirListado(page, testData);
      await listado.capturarEvidencia(cp, 1, 'SRP del termino buscado');

      const porRelevancia = await listado.secuencia();

      await listado.orden.desplegar();
      await listado.capturarEvidencia(cp, 2, 'opciones de ordenamiento en la SRP');
      const opciones = await listado.orden.opciones();

      await listado.orden.elegir('Precio más bajo');
      await listado.orden.elegir('Recomendado');
      await listado.capturarEvidencia(cp, 3, 'SRP tras confirmar Recomendado');

      // Parte 1: las opciones de la SRP son las de CA3 y en el mismo orden.
      expect(opciones, 'las opciones de la SRP y su orden').toEqual([...OPCIONES_DECLARADAS]);
      // Parte 2: Recomendado devuelve el listado al orden de relevancia del término buscado, que
      // es el que la SRP sirve al entrar.
      expect(listado.criterioEnLaUrl, 'el criterio aplicado').toBe('recommend');
      expect(
        await listado.secuencia(),
        'Recomendado ordena por relevancia respecto al término buscado',
      ).toEqual(porRelevancia);

      await listado.capturarEvidencia(cp);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C87-M-001 · Acceso al ordenamiento desde el Modal de filtros (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-M-001';
      const listado = await abrirListado(page, testData);
      await listado.capturarEvidencia(cp, 1, 'SRP cargada en Mobile');

      const panel = await listado.abrirPanelDeFiltros();
      await listado.capturarEvidencia(cp, 2, 'modal de filtros abierto en Mobile', {
        elemento: panel.root,
      });

      await expect(panel.seccionOrdenar, 'la sección Ordena tus productos').toBeVisible();
      const opciones = await panel.nombresDeOrden();
      await listado.capturarEvidencia(cp, 3, 'seccion Ordena tus productos en Mobile', {
        elemento: panel.root,
      });

      expect(opciones.length, 'la sección despliega opciones de ordenamiento').toBeGreaterThan(0);

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-M-002 · Seleccion y confirmacion del orden desde el modal de filtros (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-M-002';
      const listado = await abrirListado(page, testData);

      const panel = await listado.abrirPanelDeFiltros();
      await listado.capturarEvidencia(cp, 1, 'modal de filtros abierto en Mobile', {
        elemento: panel.root,
      });

      await panel.elegirOrden(tolerante('Precio más bajo'));
      await listado.capturarEvidencia(cp, 2, 'tras pulsar Precio mas bajo en el modal', {
        elemento: panel.root,
      });

      expect(
        await panel.ordenesMarcados(),
        'la opción pulsada queda marcada en el modal',
      ).toContain('Precio más bajo');

      await panel.aplicar();
      await listado.capturarEvidencia(cp, 3, 'listado tras confirmar el orden en Mobile');

      expect(await panel.estaAbierto(), 'el modal se cerró').toBe(false);
      expect(listado.criterioEnLaUrl, 'el orden aplicado').toBe('price-asc');

      await listado.capturarEvidencia(cp);
    });
  });
  // ---------------------------------------------------------------------------------------------
  // Filas 28-49 de la planilla (SP1): casos Mobile nuevos. Reusan los CP-ID M-001 y M-002 de las
  // filas 4 y 7 —que son otros casos, ya cerrados—, por eso van en un describe propio: se corren
  // con `-g "Mobile 390x844 SP1"` y no se mezclan con los de arriba.
  //
  // Sus tokens están en la columna Descripción (la columna Test data trae el CA): {CATEGORY_N2_URL},
  // {SRP_URL}, {PLP_URL_NxM} y {BRAND_001}.
  // ---------------------------------------------------------------------------------------------
  test.describe('Mobile 390x844 SP1', () => {
    test.use(MOBILE);

    test('TC-B2C87-M-002 · Verificar que confirmar un orden desde el modal cierra el modal y reordena el listado (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-M-002';
      // El registro de skeletons se instala antes de navegar (es un init script).
      const skeletons = new PLPCategoriaPage(page);
      await skeletons.registrarSkeletons();
      const listado = await abrirPorToken(page, testData, 'CATEGORY_N2_URL');

      const panel = await listado.abrirPanelDeFiltros();
      await panel.elegirOrden(tolerante('Precio más bajo'));
      expect(await panel.ordenesMarcados(), 'la opción "Precio más bajo" queda marcada').toEqual(['Precio más bajo']);
      await listado.capturarEvidencia(cp, 6, 'Precio mas bajo marcado', { elemento: panel.root.first() });

      // La consulta del listado se ralentiza para que el refresco dure lo suficiente como para
      // observar su estado de carga (sin eso se resuelve en un instante).
      await skeletons.ralentizarRed(1500);
      await reiniciarSkeletons(page);
      await panel.aplicar();
      await esperarListado(page, 'price-asc');
      expect(await panel.estaAbierto(), 'el modal se cierra').toBe(false);
      expect(await skeletons.skeletonsRegistrados(), 'se muestra el skeleton de carga al refrescar').toBeGreaterThan(0);
      const precios = await listado.precios();
      expect(precios.some(Number.isNaN), 'todos los precios se pudieron leer').toBe(false);
      expect(precios, 'el listado queda de menor a mayor precio de venta').toEqual([...precios].sort((a, b) => a - b));
      await listado.capturarEvidencia(cp, 8, 'listado ordenado por Precio mas bajo');

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-M-003 · Verificar que "Ordena tus productos" muestra las 6 opciones en orden y con selección única (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-M-003';
      const listado = await abrirPorToken(page, testData, 'CATEGORY_N2_URL');
      const panel = await listado.abrirPanelDeFiltros();
      expect(await panel.nombresDeOrden(), 'las 6 opciones en el orden declarado').toEqual(SEIS_OPCIONES);
      await listado.capturarEvidencia(cp, 4, 'las 6 opciones de orden', { elemento: panel.seccionOrdenar });

      await panel.elegirOrden(tolerante('Precio más alto'));
      await panel.elegirOrden(tolerante('Más vendido'));
      expect(await panel.ordenesMarcados(), 'solo queda marcada "Más vendido"').toEqual(['Más vendido']);
      await listado.capturarEvidencia(cp, 6, 'solo Mas vendido marcado', { elemento: panel.seccionOrdenar });

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-M-004 · Verificar que "Recomendado" vuelve al orden por defecto de la categoría (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-M-004';
      const listado = await abrirPorToken(page, testData, 'CATEGORY_N2_URL');
      const inicial = (await enlacesDelListado(page)).slice(0, 10);
      expect(inicial.length, 'el listado trae productos').toBeGreaterThan(1);
      await listado.capturarEvidencia(cp, 3, 'listado inicial');

      await ordenarDesdeElModal(page, listado, 'Precio más bajo', 'price-asc');
      await listado.capturarEvidencia(cp, 9, 'listado por Precio mas bajo');
      await ordenarDesdeElModal(page, listado, 'Recomendado', null);
      await listado.capturarEvidencia(cp, 15, 'listado por Recomendado');

      expect((await enlacesDelListado(page)).slice(0, 10), 'los 10 primeros vuelven al orden anotado').toEqual(inicial);
      await listado.capturarEvidencia(cp);
    });

    for (const [cpId, criterio, sort, sentido] of [
      ['TC-B2C87-M-006', 'Precio más bajo', 'price-asc', 'ascendente'],
      ['TC-B2C87-M-007', 'Precio más alto', 'price-desc', 'descendente'],
    ] as const) {
      const titulo =
        cpId === 'TC-B2C87-M-006'
          ? 'Verificar que "Precio más bajo" ordena de forma ascendente por precio de venta'
          : 'Verificar que "Precio más alto" ordena de forma descendente por precio de venta';
      test(`${cpId} · ${titulo} (Mobile)`, async ({ page, testData }) => {
        const cp = cpId;
        const listado = await abrirPorToken(page, testData, 'CATEGORY_N2_URL');
        await ordenarDesdeElModal(page, listado, criterio, sort);
        await listado.capturarEvidencia(cp, 8, `listado por ${criterio}`);

        const precios = await listado.precios();
        const promos = await listado.productosConPromocion();
        expect(promos.some((p) => p.promocion), 'el listado incluye al menos un producto con descuento').toBe(true);
        expect(precios.some(Number.isNaN), 'todos los precios de venta se pudieron leer').toBe(false);
        const esperado = [...precios].sort((a, b) => (sentido === 'ascendente' ? a - b : b - a));
        expect(precios, `los precios de venta quedan en orden ${sentido}`).toEqual(esperado);
        await listado.capturarEvidencia(cp);
      });
    }

    for (const [cpId, como] of [
      ['TC-B2C87-M-009', 'X'],
      ['TC-B2C87-M-010', 'fuera'],
    ] as const) {
      const titulo =
        como === 'X'
          ? 'Verificar que cerrar el modal con la X no cambia el ordenamiento vigente'
          : 'Verificar que tocar fuera del modal lo cierra sin cambiar el ordenamiento vigente';
      test(`${cpId} · ${titulo} (Mobile)`, async ({ page, testData }) => {
        const cp = cpId;
        const listado = await abrirPorToken(page, testData, 'CATEGORY_N2_URL');
        expect(listado.criterioEnLaUrl, 'la PLP carga con el orden por defecto (Recomendado)').toBeNull();
        const primeros = (await enlacesDelListado(page)).slice(0, 5);
        await listado.capturarEvidencia(cp, 3, 'listado inicial');

        const panel = await listado.abrirPanelDeFiltros();
        await panel.elegirOrden(tolerante('Precio más alto'));
        await listado.capturarEvidencia(cp, 6, 'Precio mas alto marcado sin confirmar', { elemento: panel.root.first() });
        if (como === 'X') {
          await panel.cerrarConLaX();
        } else {
          // Fuera del modal: la franja superior, sobre el velo que cubre la página.
          await page.mouse.click(195, 40);
          await panel.root.first().waitFor({ state: 'detached', timeout: 15000 }).catch(() => undefined);
        }
        await page.waitForTimeout(2000);

        expect(await panel.estaAbierto(), 'el modal se cierra').toBe(false);
        await listado.capturarEvidencia(cp, 8, 'listado tras cerrar el modal');
        expect.soft((await enlacesDelListado(page)).slice(0, 5), 'los 5 primeros productos no cambian').toEqual(primeros);
        expect(listado.criterioEnLaUrl, 'el orden vigente sigue siendo Recomendado').toBeNull();
        await listado.capturarEvidencia(cp);
      });
    }

    test('TC-B2C87-M-011 · Verificar que al reabrir el modal se muestra marcado el último orden confirmado (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-M-011';
      const listado = await abrirPorToken(page, testData, 'CATEGORY_N2_URL');
      await ordenarDesdeElModal(page, listado, 'Precio más bajo', 'price-asc');
      await listado.capturarEvidencia(cp, 8, 'listado por Precio mas bajo');

      const panel = await listado.abrirPanelDeFiltros();
      expect(await panel.ordenesMarcados(), 'al reabrir, "Precio más bajo" aparece marcado').toEqual(['Precio más bajo']);
      await listado.capturarEvidencia(cp, 10, 'modal reabierto', { elemento: panel.seccionOrdenar });
      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-M-012 · Verificar que cambiar el orden mantiene el filtro de marca activo y la cantidad de productos (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-M-012';
      const marca = tokenExigido(testData, 'BRAND_001');
      const patronMarca = new RegExp(`^${marca.split('').join("'?")}`, 'i');
      const listado = await abrirPorToken(page, testData, 'PLP_URL_NxM');

      // Pasos 3-6 — filtrar por la marca declarada.
      let panel = await listado.abrirPanelDeFiltros();
      await panel.expandirSeccion(/^marca$/i);
      await panel.alternarCasilla(/^marca$/i, patronMarca);
      await panel.esperarRecalculo();
      const conteoFiltrado = await panel.conteoDelBoton();
      await panel.aplicar();
      await page.waitForTimeout(3000);
      const filtros = listado.filtrosEnLaUrl;
      expect(filtros.join(','), `el filtro de marca ${marca} queda aplicado`).toMatch(/brand/i);
      const cantidad = await listado.shelves.count();
      expect(cantidad, 'el listado filtrado tiene la cantidad que anunció el botón').toBe(conteoFiltrado);
      await listado.capturarEvidencia(cp, 6, `listado filtrado por ${marca}`);

      // Pasos 8-13 — ordenar por Precio más alto.
      await ordenarDesdeElModal(page, listado, 'Precio más alto', 'price-desc');
      await listado.capturarEvidencia(cp, 13, 'listado filtrado y ordenado por Precio mas alto');

      expect(listado.filtrosEnLaUrl, `el filtro ${marca} sigue activo`).toEqual(filtros);
      expect(await listado.shelves.count(), 'la cantidad de productos es la misma').toBe(cantidad);
      const precios = await listado.precios();
      expect(precios, 'solo cambia el orden: de mayor a menor precio').toEqual([...precios].sort((a, b) => b - a));
      panel = await listado.abrirPanelDeFiltros();
      await expect(panel.chip(patronMarca), `el chip de ${marca} sigue en Filtros aplicados`).toBeVisible();
      await listado.capturarEvidencia(cp, 13, 'filtro de marca todavia activo', { elemento: panel.root.first() });
      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-M-013 · Verificar que el ícono de filtros muestra el bullet de selección activa con un orden aplicado (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-M-013';
      const listado = await abrirPorToken(page, testData, 'CATEGORY_N2_URL');
      const iconoPorDefecto = await listado.marcadoDeLaZonaDeFiltros();
      await listado.capturarEvidencia(cp, 2, 'icono de filtros con el orden por defecto', {
        elemento: listado.botonFiltros,
      });

      await ordenarDesdeElModal(page, listado, 'Precio más alto', 'price-desc');
      await listado.capturarEvidencia(cp, 8, 'icono de filtros con Precio mas alto aplicado', {
        elemento: listado.botonFiltros,
      });
      // El caso no dice qué forma tiene el bullet: se compara el marcado de la zona del ícono con
      // el del estado por defecto. Un indicador, sea un elemento o un estilo, lo cambiaría.
      expect(
        await listado.marcadoDeLaZonaDeFiltros(),
        'el ícono de filtros muestra el indicador de selección activa',
      ).not.toBe(iconoPorDefecto);
      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-M-014 · Verificar que "Recomendado" viene activo por defecto al ingresar a un listado (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-M-014';
      // Cada test corre en un contexto nuevo: es la sesión de incógnito que pide la precondición.
      const listado = await abrirPorToken(page, testData, 'CATEGORY_N2_URL');
      expect(listado.criterioEnLaUrl, 'el listado entra sin criterio de orden (Recomendado)').toBeNull();
      const panel = await listado.abrirPanelDeFiltros();
      await listado.capturarEvidencia(cp, 4, 'modal al ingresar por primera vez', { elemento: panel.seccionOrdenar });
      expect(await panel.ordenesMarcados(), '"Recomendado" aparece marcado al ingresar').toEqual(['Recomendado']);
      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-M-020 · Verificar que la SRP ofrece las mismas 6 opciones de ordenamiento en el mismo orden (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-M-020';
      const listado = await abrirPorToken(page, testData, 'SRP_URL');
      const panel = await listado.abrirPanelDeFiltros();
      await listado.capturarEvidencia(cp, 4, 'opciones de orden en la SRP', { elemento: panel.seccionOrdenar });
      expect(await panel.nombresDeOrden(), 'la SRP muestra las 6 opciones en el orden declarado').toEqual(SEIS_OPCIONES);
      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-M-021 · Verificar que "Recomendado" en la SRP ordena por relevancia del término buscado (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-M-021';
      const termino = new URL(tokenExigido(testData, 'SRP_URL')).searchParams.get('q') ?? '';
      const listado = await abrirPorToken(page, testData, 'SRP_URL');
      await ordenarDesdeElModal(page, listado, 'Precio más bajo', 'price-asc');
      await listado.capturarEvidencia(cp, 8, 'SRP por Precio mas bajo');
      await ordenarDesdeElModal(page, listado, 'Recomendado', null);
      await listado.capturarEvidencia(cp, 14, 'SRP por Recomendado');

      const primeros = (await nombresDelListado(page)).slice(0, 5);
      expect(primeros.length, 'la SRP trae resultados').toBeGreaterThan(0);
      const relevantes = primeros.filter((n) => new RegExp(termino, 'i').test(n));
      expect(
        relevantes,
        `los primeros resultados corresponden al término "${termino}": ${primeros.join(' / ')}`,
      ).toEqual(primeros);
      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C87-M-022 · Verificar que "Precio más bajo" en la SRP ordena de forma ascendente por precio de venta (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C87-M-022';
      const listado = await abrirPorToken(page, testData, 'SRP_URL');
      await ordenarDesdeElModal(page, listado, 'Precio más bajo', 'price-asc');
      await listado.capturarEvidencia(cp, 8, 'SRP por Precio mas bajo');
      const precios = await listado.precios();
      expect(precios.some(Number.isNaN), 'todos los precios de venta se pudieron leer').toBe(false);
      expect(precios, 'los resultados quedan de menor a mayor precio de venta').toEqual([...precios].sort((a, b) => a - b));
      await listado.capturarEvidencia(cp);
    });
  });

  // ---------------------------------------------------------------------------------------------
  // Re-corrida 2026-10-09: D-022 y M-019 ya declaran {COMPRADOR_SIN_HISTORIAL_USER}.
  // ---------------------------------------------------------------------------------------------
  test.describe('Pensados para ti sin historial — 2026-10-09', () => {
    for (const caso of [
      { cp: 'TC-B2C87-D-022', vista: DESKTOP, origen: 'SRP_URL', ff: 'Desktop', titulo: "'Pensados para ti' sin historial suficiente aplica fallback transparente a 'Recomendado'" },
      { cp: 'TC-B2C87-M-019', vista: MOBILE, origen: 'CATEGORY_N2_URL', ff: 'Mobile', titulo: 'Verificar que "Pensados para ti" sin historial ordena como "Recomendado" sin mostrar error' },
    ] as const) {
      test.describe(`${caso.ff} ${caso.vista.viewport.width}x${caso.vista.viewport.height}`, () => {
        test.use(caso.vista);

        test(`${caso.cp} · ${caso.titulo} (${caso.ff})`, async ({ page, testData }) => {
          const { cp } = caso;
          test.setTimeout(240000);

          // Precondición — sesión con {COMPRADOR_SIN_HISTORIAL_USER}, sin compras en su historial.
          const pedidos = await iniciarSesionSinHistorial(page, testData);
          test.info().annotations.push({ type: 'historial', description: `pedidos de la cuenta: ${pedidos}` });
          expect(pedidos, 'precondición: la cuenta no tiene historial de compras').toBe(0);

          // Pasos 1-3 — el listado ordenado por "Recomendado"; se anotan los 10 primeros.
          const listado = await abrirPorToken(page, testData, caso.origen);
          const recomendado = (await enlacesDelListado(page)).slice(0, 10);
          expect(recomendado.length, 'el listado trae productos').toBeGreaterThan(1);
          await listado.capturarEvidencia(cp, 1, 'listado por Recomendado');

          // Pasos siguientes — "Pensados para ti" desde el modal y confirmar.
          const panel = await listado.abrirPanelDeFiltros();
          await panel.elegirOrden(tolerante('Pensados para ti'));
          await panel.aplicar();
          await expect
            .poll(() => new URL(page.url()).searchParams.get('sort'), { timeout: 20000, message: 'se aplica un orden' })
            .not.toBeNull();
          await page.waitForTimeout(3000);
          const sort = new URL(page.url()).searchParams.get('sort');
          await listado.capturarEvidencia(cp, 2, `listado por Pensados para ti (sort=${sort})`);

          // Esperado — mismos 10 primeros, "Pensados para ti" sigue marcado y sin mensajes de error.
          await expect(page.getByText(/tuvimos un problema|error plp-/i)).toHaveCount(0);
          expect((await enlacesDelListado(page)).slice(0, 10), 'los 10 primeros son los de "Recomendado"').toEqual(recomendado);
          const reabierto = await listado.abrirPanelDeFiltros();
          expect(await reabierto.ordenesMarcados(), '"Pensados para ti" sigue marcado').toEqual(['Pensados para ti']);
          await listado.capturarEvidencia(cp, 3, 'modal con Pensados para ti marcado', { elemento: reabierto.root.first() });
          await listado.capturarEvidencia(cp);
        });
      });
    }
  });
});
