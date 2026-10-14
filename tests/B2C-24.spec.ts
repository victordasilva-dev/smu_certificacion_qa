import { test, expect } from './support/fixtures';
import { DESKTOP } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';

/**
 * B2C-24 — Header sticky.
 *
 * Solo están aquí los dos TC de la suite que se pudieron ejecutar. Los otros cuatro
 * —TC-B2C24-D-001, D-002, D-005 y D-006— quedaron `Bloqueado` en la exploración porque todos
 * exigen una sesión iniciada y el SSO del ambiente no autentica con las credenciales del Excel
 * de data; un TC bloqueado no genera su `test()`.
 *
 * Dos cosas que la exploración dejó claras y que explican cómo están escritas las aserciones:
 *
 * 1. El header es **un solo elemento** que cambia de altura. El sticky no es un segundo nodo que
 *    se monte, y `position: fixed` no lo distingue del header completo porque lo es desde el
 *    primer paint, también en el tope de la página. Lo que los separa es la altura y cuántas
 *    filas conservan alto.
 * 2. La altura del header completo **no es constante**: 132px con el Store Locator sin elegir y
 *    140px con una dirección seleccionada. Por eso el umbral del sticky se mide en la corrida en
 *    lugar de compararse contra un número escrito en el spec.
 */

/**
 * Dirección con la que se deja el Store Locator en un estado observable.
 *
 * No sale del Excel de data: la planilla de B2C-24 no declara ningún token de dirección ni de
 * tienda, aunque el TC-B2C24-D-003 pida partir de una elegida. El valor concreto no cambia lo que
 * el caso verifica —que el estado sobreviva a la contracción del header—, pero pertenece a la
 * planilla como cualquier otra data, y así queda dicho en la Observación del TC.
 */
const DIRECCION_DE_PRUEBA = 'Av. Manquehue Norte 457';

test.describe('B2C-24 — Header sticky', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C24-D-003 · Scroll hacia arriba despliega el Header completo, sin re-render del Store Locator (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C24-D-003';
      test.setTimeout(180000);

      const home = new PaginaHabilitada(page, '', 'Home');
      await home.goto();
      const h = home.header;

      // Paso 1 — dejar una forma de entrega elegida en el Store Locator.
      await home.capturarEvidencia(cp, 1, 'Store Locator sin forma de entrega elegida', {
        elemento: h.root,
      });
      const drawer = await h.abrirStoreLocator();
      await drawer.elegirDespachoADomicilio(DIRECCION_DE_PRUEBA);

      const altoFull = await h.alto();
      const estadoInicial = await h.textoStoreLocator();
      expect(estadoInicial, 'el Store Locator refleja la elección').not.toMatch(
        /elige una forma de entrega/i,
      );
      await home.capturarEvidencia(cp, 1, 'Store Locator con la direccion elegida', {
        elemento: h.root,
      });

      // La marca permite distinguir después un componente conservado de uno reconstruido con el
      // mismo texto: sin ella, "mantiene su estado" y "se volvió a montar igual" se ven idénticos.
      await h.marcarStoreLocator(cp);

      // Paso 2 — scroll hacia abajo para activar el modo sticky.
      await h.scrollA(1500);
      const altoSticky = await h.alto();
      expect(altoSticky, 'el header se contrae al hacer scroll hacia abajo').toBeLessThan(altoFull);
      expect(await h.filasConAlto(), 'filas con alto en modo sticky').toBe(1);
      expect(
        await h.quedaFueraDelHeader(h.storeLocator),
        'el Store Locator queda oculto en modo sticky',
      ).toBe(true);
      await home.capturarEvidencia(cp, 2, 'header contraido a sticky', { elemento: h.root });

      // Paso 3 — scroll hacia arriba, sin llegar al tope, y verificar el header completo.
      await h.scrollA(1300);
      expect(await h.alto(), 'el header se despliega al hacer scroll hacia arriba').toBe(altoFull);
      const scrollTrasSubir = await page.evaluate(() => window.scrollY);
      expect(scrollTrasSubir, 'se desplegó sin necesidad de llegar al tope').toBeGreaterThan(0);

      // El Store Locator reaparece, con su estado y sin haberse vuelto a montar.
      await expect(h.storeLocator).toBeVisible();
      expect(await h.textoStoreLocator(), 'el Store Locator conserva su estado').toBe(estadoInicial);
      expect(
        await h.storeLocatorConservaMarca(cp),
        'el Store Locator es el mismo nodo: no hubo re-render',
      ).toBe(true);
      await expect(h.listaAccesos, 'accesos directos de vuelta').toBeVisible();
      await expect(h.botonMembresia, 'botón de membresía de vuelta').toBeVisible();
      await home.capturarEvidencia(cp, 3, 'header completo con el Store Locator intacto', {
        elemento: h.root,
      });

      // Paso 4 — volver a bajar y comprobar que se contrae de nuevo.
      await h.scrollA(1600);
      expect(await h.alto(), 'el header vuelve a contraerse').toBe(altoSticky);
      await home.capturarEvidencia(cp, 4, 'header contraido nuevamente', { elemento: h.root });

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: h.root });
    });

    test('TC-B2C24-D-004 · El Header sticky se activa solo cuando el Header full sale del viewport (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C24-D-004';
      test.setTimeout(180000);

      const home = new PaginaHabilitada(page, '', 'Home');
      await home.goto();
      const h = home.header;

      // La altura del header completo es el umbral que el caso pone a prueba, y se mide aquí
      // porque depende del estado del Store Locator (132px sin dirección elegida, 140px con una).
      const altoFull = await h.alto();
      expect(altoFull, 'altura del header completo').toBeGreaterThan(0);
      await home.capturarEvidencia(cp, 1, 'header completo en el tope de la pagina', {
        elemento: h.root,
      });

      // Paso 1 — scroll gradual por debajo del umbral: el header no debe contraerse.
      // Cada posición se sondea desde el tope (ver `altoConScrollEn`): encadenar saltos de un
      // píxel mide el throttle del componente en vez de su umbral.
      for (const y of [Math.round(altoFull / 2), altoFull - 1, altoFull]) {
        expect(await h.altoConScrollEn(y), `header a scrollY=${y}, con el full aún en el viewport`).toBe(
          altoFull,
        );
      }
      await home.capturarEvidencia(cp, 1, `header sin contraer con scrollY=${altoFull}`, {
        elemento: h.root,
      });

      // Paso 2 — un píxel más allá del umbral: el sticky aparece.
      const altoSticky = await h.altoConScrollEn(altoFull + 1);
      expect(altoSticky, `header a scrollY=${altoFull + 1}, con el full ya fuera`).toBeLessThan(
        altoFull,
      );
      expect(await h.filasConAlto(), 'filas con alto en modo sticky').toBe(1);
      await home.capturarEvidencia(cp, 2, `header contraido con scrollY=${altoFull + 1}`, {
        elemento: h.root,
      });

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: h.root });
    });
  });
});
