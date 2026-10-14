import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { PDPPage } from './pages/PDPPage';
import { DESKTOP_1280, MOBILE } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { BuscadorModal, FormFactor } from './pages/BuscadorModal';
import { ShelfSimplificada } from './pages/ShelfSimplificada';

/**
 * B2C-64 — Shelf simplificada (modal de buscador y modales de promoción).
 *
 * De los 34 TC de la planilla **solo dos llegaron a ejecutarse**: TC-64-D-001 y TC-64-M-001, los
 * que verifican la estructura de la shelf con un producto cualquiera de los resultados. Los otros
 * 32 quedaron `Bloqueado` antes de generar su `test()`, y por un motivo que se repite fila a fila:
 *
 * - **12 se corren con sesión iniciada** (D-012…D-017 y M-012…M-017) y su columna `Test data` no
 *   declara ninguna cuenta.
 * - **19 necesitan un producto con un atributo comercial concreto** —cucarda, varias imágenes,
 *   promo NxM, promo NxPrecio, sin stock, con PPUM, con "Combina la promo" o con "Completa la
 *   promo"— y su fila declara únicamente `{BASE_URL}`. El Excel de data tiene tokens que suenan
 *   al caso (`{SKU_PROM_NxM}`, `{SKU_SIN_STOCK}`, `{SKU_PESABLE}`…), pero elegirlos por parecido
 *   de nombre haría que el veredicto hablara del producto que yo elegí y no del componente.
 * - **D-004 sí declara `{SKU_PATROCINADO}`**, y aun así quedó bloqueado: ese SKU no muestra el tag
 *   "Patrocinado" en ninguna superficie del ambiente —ni en la shelf del SRP ni en su PDP—, de
 *   modo que la precondición "producto con tag Patrocinado activo" no se cumple. Ahí el problema
 *   es la data del ambiente, no el componente, y por eso no es un rechazo.
 *
 * Lo que la exploración fijó sobre la shelf simplificada (ver
 * `.qa/knowledge/shelf-simplificada.json`):
 *
 * - **Es la misma tarjeta de [[shelf-producto]] sin los dos accionables de la completa**: no trae
 *   "Combina la promo" ni "Ver similares". El ancla sigue siendo el botón de favoritos.
 * - **El orden vertical de sus slots** es imagen (con favoritos encima) → precios → marca+nombre →
 *   label de formato → "Agregar", y es el mismo en los dos form-factors.
 * - En **Mobile** la shelf vive dentro del overlay a pantalla completa del buscador, no dentro del
 *   `header`, así que el contenedor se resuelve por form-factor igual que en [[buscador-modal]].
 */

/**
 * El término con el que se abre el modal de resultados.
 *
 * **Ninguna fila de esta planilla declara un término de búsqueda.** Para los dos casos que sí
 * corren eso no cambia el veredicto: lo que verifican es la estructura de la shelf, que es la
 * misma para cualquier producto con resultados, y se asierta sobre el primero que devuelve la
 * búsqueda, sin elegirlo. Para los demás casos —los que piden un producto con cucarda, sin stock
 * o con una promo concreta— el término sí discriminaría, y por eso esos quedaron `Bloqueado` en
 * vez de resolverse aquí con una elección.
 */
const TERMINO = 'leche';

async function abrirResultados(page: Page, ff: FormFactor): Promise<{ home: HomePage; shelf: ShelfSimplificada }> {
  const home = new HomePage(page);
  await home.goto();

  const buscador = new BuscadorModal(page, ff);
  await buscador.abrir();
  await buscador.escribir(TERMINO);
  await expect(buscador.tituloResultados, 'el modal muestra los resultados').toHaveText(
    /resultados? para/i,
    { timeout: 30000 },
  );

  return { home, shelf: new ShelfSimplificada(page, buscador) };
}

test.describe('B2C-64 — Shelf simplificada', () => {
  test.describe('Desktop 1280x900', () => {
    test.use(DESKTOP_1280);

    test('TC-64-D-001 · Estructura y orden de slots de la shelf simplificada en el modal de buscador (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-64-D-001';
      test.setTimeout(180000);

      const { home, shelf } = await abrirResultados(page, 'desktop');
      await home.capturarEvidencia(cp, 2, 'resultados del buscador con shelves simplificadas');

      const primera = shelf.enIndice(0);
      await expect(primera.root, 'hay al menos una shelf en los resultados').toBeVisible();
      await home.capturarEvidencia(cp, 3, 'shelf simplificada del primer resultado', {
        elemento: primera.root,
      });

      // Paso 4 — los slots, en el orden que define el caso.
      const slots = await primera.slots();
      expect(slots.imagen, 'la shelf muestra la imagen del producto').not.toBeNull();
      expect(slots.favoritos, 'la shelf muestra el botón de favoritos').not.toBeNull();
      expect(slots.precio, 'la shelf muestra el bloque de precios').not.toBeNull();
      expect(slots.nombre, 'la shelf muestra la marca y el nombre').not.toBeNull();
      expect(slots.agregar, 'la shelf muestra el botón Agregar').not.toBeNull();

      expect(slots.precio!, 'los precios van debajo de la imagen').toBeGreaterThan(slots.imagen!);
      expect(slots.nombre!, 'la marca y el nombre van debajo de los precios').toBeGreaterThan(
        slots.precio!,
      );
      expect(slots.agregar!, 'el botón Agregar cierra la shelf').toBeGreaterThan(slots.nombre!);
      expect(
        slots.favoritos!,
        'el botón de favoritos va sobre la imagen, no al pie de la shelf',
      ).toBeLessThan(slots.precio!);

      // Los dos accionables que la shelf simplificada no debe traer.
      expect(await primera.tieneCombinaLaPromo(), 'la shelf no muestra "Combina la promo"').toBe(
        false,
      );
      expect(await primera.tieneVerSimilares(), 'la shelf no muestra "Ver similares"').toBe(false);

      await expect(primera.agregar, 'el botón "Agregar" está visible').toBeVisible();
      await expect(primera.agregar, 'el botón "Agregar" está habilitado').toBeEnabled();

      // eslint-disable-next-line no-console
      console.log(`[${cp}] shelf verificada: ${await primera.texto()}`);
      await home.capturarEvidencia(cp);
    });

    test('TC-64-D-002 · Label/cucarda informativa en la esquina superior izquierda de la imagen (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-64-D-002';
      test.setTimeout(180000);
      const sku = token(testData, 'SKU_MULTI_IMAGEN');
      if (!sku) throw new Error('Falta {SKU_MULTI_IMAGEN} en el Excel de data: el TC lo declara');

      // La fila no declara término: se busca por el nombre del producto declarado (de su PDP).
      const pdp = await new PDPPage(page).abrir(sku);
      const nombre = (await pdp.nombreDelProducto.innerText()).trim();
      const termino = nombre.split(' ').slice(0, 3).join(' ');

      // Pasos 1 y 2 — modal de buscador con el término y la shelf del producto.
      const home = new HomePage(page);
      await home.goto();
      const buscador = new BuscadorModal(page, 'desktop');
      await buscador.abrir();
      await buscador.escribir(termino);
      const item = new ShelfSimplificada(page, buscador).porSku(sku);
      await expect(item.root, `la shelf de ${nombre} aparece en los resultados de "${termino}"`).toBeVisible({ timeout: 30000 });
      await page.waitForTimeout(1500);
      await home.capturarEvidencia(cp, 2, `shelf simplificada de ${termino}`, { elemento: item.root });

      // Pasos 3 y 4 — presencia, posición y estilo de la cucarda.
      const m = await item.cucarda('Cyber');
      test.info().annotations.push({ type: 'cucarda', description: JSON.stringify({ termino, ...m }) });
      expect(m.cucarda, 'la cucarda "Cyber" se muestra sobre la imagen').not.toBeNull();
      const c = m.cucarda!;
      expect(c.x - m.imagen.x, 'en el borde izquierdo de la imagen').toBeLessThan(m.imagen.w / 4);
      expect(c.y - m.imagen.y, 'en el borde superior de la imagen').toBeLessThan(m.imagen.h / 4);
      expect(c.x + c.w, 'no obstruye el botón Favoritos (esquina superior derecha)').toBeLessThanOrEqual(m.favoritos.x);
      expect(m.colorTexto, 'el texto lleva el color configurado para la cucarda (#000000)').toBe('rgb(0, 0, 0)');
      await home.capturarEvidencia(cp);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-64-M-001 · Estructura y orden de slots de la shelf simplificada en el modal de buscador (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-64-M-001';
      test.setTimeout(180000);

      const { home, shelf } = await abrirResultados(page, 'mobile');
      await home.capturarEvidencia(cp, 2, 'resultados del buscador con shelves simplificadas');

      const primera = shelf.enIndice(0);
      await expect(primera.root, 'hay al menos una shelf en los resultados').toBeVisible();
      await home.capturarEvidencia(cp, 3, 'shelf simplificada del primer resultado', {
        elemento: primera.root,
      });

      const slots = await primera.slots();
      expect(slots.imagen, 'la shelf muestra la imagen del producto').not.toBeNull();
      expect(slots.favoritos, 'la shelf muestra el botón de favoritos').not.toBeNull();
      expect(slots.precio, 'la shelf muestra el bloque de precios').not.toBeNull();
      expect(slots.nombre, 'la shelf muestra la marca y el nombre').not.toBeNull();
      expect(slots.agregar, 'la shelf muestra el botón Agregar').not.toBeNull();

      expect(slots.precio!, 'los precios van debajo de la imagen').toBeGreaterThan(slots.imagen!);
      expect(slots.nombre!, 'la marca y el nombre van debajo de los precios').toBeGreaterThan(
        slots.precio!,
      );
      expect(slots.agregar!, 'el botón Agregar cierra la shelf').toBeGreaterThan(slots.nombre!);
      expect(
        slots.favoritos!,
        'el botón de favoritos va sobre la imagen, no al pie de la shelf',
      ).toBeLessThan(slots.precio!);

      expect(await primera.tieneCombinaLaPromo(), 'la shelf no muestra "Combina la promo"').toBe(
        false,
      );
      expect(await primera.tieneVerSimilares(), 'la shelf no muestra "Ver similares"').toBe(false);

      await expect(primera.agregar, 'el botón "Agregar" está visible').toBeVisible();
      await expect(primera.agregar, 'el botón "Agregar" está habilitado').toBeEnabled();

      // eslint-disable-next-line no-console
      console.log(`[${cp}] shelf verificada: ${await primera.texto()}`);
      await home.capturarEvidencia(cp);
    });
  });
});
