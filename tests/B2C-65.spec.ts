import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP_1280, MOBILE } from './support/viewports';
import { PLPCategoriaPage } from './pages/PLPCategoriaPage';
import { ShelfProducto } from './pages/ShelfProducto';

/**
 * B2C-65 — Cucarda (label promocional) en la shelf de producto.
 *
 * Solo **3 de los 24 TC web** de la planilla llegaron a tener `test()`. Los otros 21 quedaron
 * `Bloqueado` antes de escribir código, y conviene que se entienda por qué:
 *
 * - **17 por precondición de configuración no cumplida.** Sus filas piden un producto con la
 *   cucarda configurada (`Label_Activo=true`, `Label_Texto`, colores) y en el ambiente declarado
 *   no hay ninguno: la categoría de `{PLP_URL}` llega con `c_cucardaActivo=false`, ni un solo
 *   producto de esa PLP renderiza cucarda, y los tres SKU que la planilla declara como "con
 *   cucarda" —`{SKU_CYBER}`, `{SKU_CUCARDA}` y `{SKU_CUCARDA_LARGA}`— están los tres en la PLP y
 *   los tres sin ella. La función sí existe y se vio funcionando (la promoción "Semana del pollo"
 *   pinta su cucarda en el SRP), así que esto no es un defecto de producto: es data de catálogo
 *   que falta cargar en BM y propagar con JOB1/JOB2. Correrlos igual, sobre un SKU elegido a dedo
 *   entre los que sí la tienen, daría un veredicto que no dice nada de los casos que la planilla
 *   declara.
 * - **4 porque su fila no declara la cuenta** con la que se ejecutan (D-013 a D-016 y M-013 a
 *   M-016 piden sesión iniciada y su columna `Test data` solo trae `{BASE_URL}` y `{PLP_URL}`).
 *
 * Los tres que sí se pudieron correr son los que no dependen de esa configuración ausente: el del
 * SRP, donde la cucarda de "Semana del pollo" sí está, y el par Desktop/Mobile del producto **sin**
 * cucarda, cuya precondición es justamente la que el ambiente cumple.
 *
 * Dos decisiones que valen para el archivo:
 *
 * - **El producto se busca por la propiedad que el TC nombra, no por posición.** D-002 toma del
 *   SRP declarado el shelf que lleva cucarda; D-005 y M-005 toman el SKU que su fila declara. La
 *   precondición se afirma dentro del propio `test()`, de modo que la evidencia diga con qué
 *   producto se corrió.
 * - **La cucarda se reconoce por geometría, no por clase.** Es el único elemento posicionado en
 *   absoluto con texto dentro del recuadro de la imagen; su clase (`css-9q7wso`) la genera chakra
 *   y cambia con cada build. Vive en `ShelfProducto.cucardasDetalladas()`.
 */

/** El valor de un token que la fila declara, exigido: sin él el caso no tiene origen. */
function declarado(testData: Parameters<typeof token>[0], nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) throw new Error(`Falta {${nombre}} en el Excel de data: el TC lo declara en su Test data`);
  return valor;
}

const rutaDe = (url: string) => new URL(url).pathname.slice(1) + new URL(url).search;

/**
 * Abre por URL directa el listado que el TC declara y espera a que esté servido y estable.
 *
 * Sirve igual para la PLP y para el SRP: los dos renderizan la misma grilla de shelves. El
 * listado llega por SSR, así que los nodos existen antes de que React los hidrate; se espera a
 * que la red se calme para que las medidas de geometría se tomen sobre el layout definitivo y no
 * sobre uno a medio montar.
 */
async function abrirListado(page: Page, url: string): Promise<PLPCategoriaPage> {
  const listado = new PLPCategoriaPage(page, rutaDe(url));
  await listado.goto();
  await expect(ShelfProducto.todos(page).first()).toBeVisible({ timeout: 60000 });
  await page.waitForLoadState('networkidle', { timeout: 60000 }).catch(() => {});
  return listado;
}

/** El primer shelf del listado que lleva cucarda, o `null` si no hay ninguno. */
async function primerShelfConCucarda(page: Page): Promise<ShelfProducto | null> {
  const total = await ShelfProducto.todos(page).count();
  for (let i = 0; i < total; i++) {
    const shelf = ShelfProducto.enIndice(page, i);
    await shelf.root.scrollIntoViewIfNeeded().catch(() => {});
    if ((await shelf.cucardasDetalladas()).length > 0) return shelf;
  }
  return null;
}

test.describe('B2C-65 — Cucarda en la shelf de producto', () => {
  // --------------------------------------------------------------- Desktop 1280x900
  test.describe('Desktop 1280x900', () => {
    test.use(DESKTOP_1280);

    test('TC-65-D-002 · Cucarda visible en SRP (buscador) con estilo configurado (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-65-D-002';
      test.setTimeout(180000);

      // Pasos 1 y 2: el término de búsqueda del caso viaja dentro de {SRP_URL}, que es lo que la
      // fila declara como data; abrirla es entrar a la SRP con ese término ya aplicado.
      const srp = await abrirListado(page, declarado(testData, 'SRP_URL'));
      await srp.capturarEvidencia(cp, 1, 'resultados de busqueda del termino declarado');

      // Paso 3: localizar el producto con cucarda entre los resultados.
      const shelf = await primerShelfConCucarda(page);
      expect(shelf, 'el SRP declarado devuelve al menos un producto con cucarda').not.toBeNull();
      await shelf!.root.scrollIntoViewIfNeeded();
      await srp.capturarEvidencia(cp, 3, 'shelf con cucarda en los resultados', { elemento: shelf!.root });

      const cucardas = await shelf!.cucardasDetalladas();
      expect(cucardas.length, 'el shelf muestra una sola cucarda').toBe(1);
      const cucarda = cucardas[0];

      // Paso 4: esquina superior izquierda de la imagen.
      const imagen = await shelf!.caja(shelf!.imagen.first());
      expect(cucarda.dx, 'la cucarda arranca en el cuarto izquierdo de la imagen').toBeLessThan(imagen.width / 4);
      expect(cucarda.dy, 'la cucarda arranca en el cuarto superior de la imagen').toBeLessThan(imagen.height / 4);
      expect(cucarda.solapaFavoritos, 'la cucarda no se cruza con el botón de favoritos').toBe(false);
      await srp.capturarEvidencia(cp, 4, `cucarda en dx ${cucarda.dx} dy ${cucarda.dy} de la imagen`, {
        elemento: shelf!.imagen.first(),
      });

      // Paso 5: texto y colores. Los valores exactos configurados en BM no son legibles desde el
      // storefront —el SSR no expone ningún atributo Label_*—, así que lo que el caso puede
      // afirmar es que la cucarda lleva texto y un par de colores propios aplicados, y que ese
      // estilo es el mismo en todos los productos que la muestran. Un estilo que variara entre
      // shelves sí delataría que no viene de una configuración única.
      expect(cucarda.texto, 'la cucarda lleva el texto configurado').not.toBe('');
      expect(cucarda.colorTexto, 'la cucarda aplica un color de texto propio').toMatch(/^rgba?\(/);
      expect(cucarda.colorFondo, 'la cucarda aplica un color de fondo propio').toMatch(/^rgb\(/);
      expect(cucarda.colorFondo, 'el fondo de la cucarda no es transparente').not.toMatch(/rgba\(0, 0, 0, 0\)/);
      expect(cucarda.colorTexto, 'el texto y el fondo de la cucarda no son del mismo color').not.toBe(
        cucarda.colorFondo,
      );

      const estilos = new Set<string>();
      const total = await ShelfProducto.todos(page).count();
      for (let i = 0; i < total; i++) {
        for (const c of await ShelfProducto.enIndice(page, i).cucardasDetalladas()) {
          estilos.add(`${c.texto}|${c.colorTexto}|${c.colorFondo}|${c.radio}|${c.fontSize}`);
        }
      }
      expect(
        [...estilos],
        'todas las cucardas del SRP comparten texto y colores, como corresponde a una única configuración',
      ).toHaveLength(1);

      await srp.capturarEvidencia(cp);
    });

    test('TC-65-D-005 · Producto sin Label_Texto no muestra cucarda ni espacio vacío (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-65-D-005';
      test.setTimeout(180000);

      // Paso 1: la PLP declarada.
      const plp = await abrirListado(page, declarado(testData, 'PLP_URL'));
      await plp.capturarEvidencia(cp, 1, 'PLP declarada');

      // Paso 2: el producto que la fila declara como "SKU sin cucarda".
      const sku = declarado(testData, 'SKU_PRECIO_MIEMBRO');
      const shelf = ShelfProducto.porSku(page, sku);
      await expect(shelf.root, `el SKU declarado ${sku} está en la PLP`).toHaveCount(1);
      await shelf.root.scrollIntoViewIfNeeded();
      await plp.capturarEvidencia(cp, 2, `shelf del SKU declarado ${sku}`, { elemento: shelf.root });

      // Paso 3: ninguna cucarda sobre la imagen.
      expect(await shelf.cucardasDetalladas(), 'no se muestra ninguna cucarda sobre la imagen').toEqual([]);

      // Paso 4: el espacio no queda reservado. No basta con que no haya texto: un slot reservado y
      // vacío también dejaría hueco. Lo que lo distingue es que la imagen llene su contenedor y que
      // no quede ningún nodo vacío con recuadro visible dentro de esa área.
      const ocupacion = await shelf.ocupacionDeLaImagen();
      expect(ocupacion.huecosVisibles, 'no queda ningún placeholder vacío sobre la imagen').toBe(0);
      expect(ocupacion.contenedor.ancho, 'la imagen ocupa todo el ancho de su contenedor').toBe(
        ocupacion.imagen.ancho,
      );
      expect(ocupacion.contenedor.alto, 'la imagen ocupa todo el alto de su contenedor').toBe(ocupacion.imagen.alto);
      expect(ocupacion.sobrepuestos, 'sobre la imagen no queda nada salvo el botón de favoritos').toEqual([]);
      await plp.capturarEvidencia(cp, 4, 'imagen sin cucarda ni hueco reservado', {
        elemento: shelf.imagen.first(),
      });

      await plp.capturarEvidencia(cp);
    });
  });

  // --------------------------------------------------------------- Mobile 390x844
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-65-M-005 · Producto sin Label_Texto no muestra cucarda ni espacio vacío (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-65-M-005';
      test.setTimeout(180000);

      const plp = await abrirListado(page, declarado(testData, 'PLP_URL'));
      await plp.capturarEvidencia(cp, 1, 'PLP declarada en Mobile');

      const sku = declarado(testData, 'SKU_PRECIO_MIEMBRO');
      const shelf = ShelfProducto.porSku(page, sku);
      await expect(shelf.root, `el SKU declarado ${sku} está en la PLP`).toHaveCount(1);
      await shelf.root.scrollIntoViewIfNeeded();
      await plp.capturarEvidencia(cp, 2, `shelf del SKU declarado ${sku}`, { elemento: shelf.root });

      expect(await shelf.cucardasDetalladas(), 'no se muestra ninguna cucarda sobre la imagen').toEqual([]);

      const ocupacion = await shelf.ocupacionDeLaImagen();
      expect(ocupacion.huecosVisibles, 'no queda ningún placeholder vacío sobre la imagen').toBe(0);
      expect(ocupacion.contenedor.ancho, 'la imagen ocupa todo el ancho de su contenedor').toBe(
        ocupacion.imagen.ancho,
      );
      expect(ocupacion.contenedor.alto, 'la imagen ocupa todo el alto de su contenedor').toBe(ocupacion.imagen.alto);
      expect(ocupacion.sobrepuestos, 'sobre la imagen no queda nada salvo el botón de favoritos').toEqual([]);
      await plp.capturarEvidencia(cp, 3, 'imagen sin cucarda ni hueco reservado', {
        elemento: shelf.imagen.first(),
      });

      await plp.capturarEvidencia(cp);
    });
  });
});
