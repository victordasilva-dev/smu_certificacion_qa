import { test, expect } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { CarruselCircular } from './pages/CarruselCircular';

/**
 * B2C-191 — Popular Categories Layout + imagen circular con título slider (Nativo).
 *
 * Están aquí los 3 TC web que se pudieron ejecutar. De los 11 de la planilla, 4 son `-BM-` y
 * quedan `Fuera de alcance` —se configuran desde Page Designer, que no se conduce con
 * Playwright—, y otros 4 quedaron `Bloqueado` antes de generar su `test()`:
 *
 * - **D-003** necesita el componente restringido a una región/comuna y usuarios dentro y fuera de
 *   esa segmentación. La restricción se define en Page Designer y su fila declara solo
 *   `{BASE_URL}`; además, en este ambiente el Home es idéntico para invitado y para usuario
 *   logueado, sin ningún componente segmentado sobre el que verificarlo.
 * - **D-004, D-005 y D-006** traen el resultado esperado como "Pendiente de definir": la propia
 *   planilla anota que la HU no tiene un CA que cubra el desborde de tiles, la publicación sin
 *   ningún tile ni el error de carga de imagen. Sin esperado no hay con qué comparar.
 *
 * **El componente que certifica esta HU es el mismo que certifica la B2C-72**: la instancia
 * `tb-categorias-hp` del Home, titulada "Categorías destacadas", con 7 tiles. Por eso se reutiliza
 * el Page Object `CarruselCircular` en vez de escribir otro. Lo que cambia entre las dos historias
 * es cómo describen su presentación —B2C-72 habla de un slider con N imágenes por slide; B2C-191,
 * de una disposición horizontal en Desktop y una grilla 3x2 en Mobile—, así que cada `test()`
 * compara contra lo que pide su propia fila.
 */

/** El título con el que este ambiente tiene instanciado el componente en el Home. */
const TITULO_DEL_COMPONENTE = /categor[ií]as destacadas/i;

test.describe('B2C-191 — Popular Categories Layout + imagen circular', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C191-D-001 · Presentacion en Desktop: banners en fila horizontal (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C191-D-001';
      test.setTimeout(180000);

      const home = new HomePage(page);
      await home.goto();
      await home.recorrerCompleto();
      await home.capturarEvidencia(cp, 1, 'Home cargado en Desktop');

      const componente = new CarruselCircular(page, TITULO_DEL_COMPONENTE);
      await componente.enfocar();
      await expect(componente.encabezado, 'el componente está presente').toBeVisible();

      // Paso 2 — título centrado y banners circulares dispuestos horizontalmente.
      expect(await componente.tituloCentrado(), 'el título va centrado').toBe(true);

      const tiles = await componente.medirTiles();
      expect(tiles.length, 'el componente trae banners').toBeGreaterThan(0);
      for (const t of tiles) {
        expect(t.nombre, 'cada banner muestra su nombre debajo de la imagen').not.toBe('');
        expect(t.radio, `el banner "${t.nombre}" es circular (radio ${t.radio})`).not.toBe('0px');
      }
      await home.capturarEvidencia(cp, 2, 'titulo y banners circulares en Desktop', {
        elemento: componente.root,
      });

      // "De forma horizontal": todos los banners comparten una única fila.
      const disposicion = await componente.disposicion();
      expect(
        disposicion.filas,
        `los banners se disponen en una sola fila horizontal (quedaron en ${disposicion.filas}: ${disposicion.porFila.join(' + ')})`,
      ).toBe(1);

      // eslint-disable-next-line no-console
      console.log(
        `[${cp}] ${tiles.length} banners en ${disposicion.filas} fila(s); tamaño: ${tiles[0].ancho}x${tiles[0].alto} px`,
      );
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C191-D-002 · Clic en un banner circular redirige a la categoria configurada (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C191-D-002';
      test.setTimeout(180000);

      const home = new HomePage(page);
      await home.goto();
      await home.recorrerCompleto();

      const componente = new CarruselCircular(page, TITULO_DEL_COMPONENTE);
      await componente.enfocar();
      await home.capturarEvidencia(cp, 1, 'componente visible en el Home', {
        elemento: componente.root,
      });

      // El destino se lee del propio banner: su nombre visible es el "Custom display name" del
      // CA4 y no tiene por qué coincidir con el de la categoría ("Orgánico" lleva a
      // frutas-y-verduras), así que comparar el texto contra la URL daría un falso negativo.
      const destino = await componente.destinoDelTile(0);
      const nombre = (await componente.medirTiles())[0].nombre;
      await componente.abrirTile(0);

      expect(
        new URL(page.url()).pathname,
        `el clic en el banner "${nombre}" lleva a la categoría que tiene configurada`,
      ).toBe(destino);
      await home.capturarEvidencia(cp, 3, 'categoria destino cargada');
      await home.capturarEvidencia(cp);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C191-M-001 · Presentacion en Mobile: banners en grilla 3x2 (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C191-M-001';
      test.setTimeout(180000);

      const home = new HomePage(page);
      await home.goto();
      await home.recorrerCompleto();
      await home.capturarEvidencia(cp, 1, 'Home cargado en Mobile');

      const componente = new CarruselCircular(page, TITULO_DEL_COMPONENTE);
      await componente.enfocar();
      await expect(componente.encabezado, 'el componente está presente en Mobile').toBeVisible();

      // Paso 2 — título centrado y banners circulares.
      expect(await componente.tituloCentrado(), 'el título va centrado').toBe(true);

      const tiles = await componente.medirTiles();
      expect(tiles.length, 'el componente trae banners').toBeGreaterThan(0);
      for (const t of tiles) {
        expect(t.nombre, 'cada banner muestra su nombre debajo de la imagen').not.toBe('');
        expect(t.radio, `el banner "${t.nombre}" es circular (radio ${t.radio})`).not.toBe('0px');
      }
      await home.capturarEvidencia(cp, 2, 'titulo y banners circulares en Mobile', {
        elemento: componente.root,
      });

      // El resultado esperado de esta fila: una grilla de 3 columnas por 2 filas. La medición va
      // al final y con su detalle en el mensaje, para que la evidencia muestre lo que sí se
      // cumplió antes de que el caso pueda romperse, y para que el fallo diga qué se renderizó.
      const disposicion = await componente.disposicion();
      const carril = await componente.carril();
      // eslint-disable-next-line no-console
      console.log(
        `[${cp}] ${tiles.length} banners en ${disposicion.filas} fila(s) de ${disposicion.porFila.join(' + ')}; ` +
          `tamaño ${tiles[0].ancho}x${tiles[0].alto} px; carril deslizable: ${carril.desplazable} ` +
          `(${carril.ancho} px de contenido sobre ${carril.visible} visibles)`,
      );

      expect(
        disposicion.filas,
        `los banners se disponen en una grilla de 2 filas; se renderizaron ${disposicion.filas} fila(s) de ${disposicion.porFila.join(' + ')} banners` +
          (carril.desplazable
            ? `, en un carril deslizable horizontalmente (${carril.ancho} px de contenido sobre ${carril.visible} visibles)`
            : ''),
      ).toBe(2);
      expect(
        disposicion.porFila[0],
        'la primera fila de la grilla muestra 3 banners',
      ).toBe(3);
      await home.capturarEvidencia(cp);
    });
  });
});
