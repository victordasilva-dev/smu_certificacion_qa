import { test, expect } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { CarruselCircular } from './pages/CarruselCircular';

/**
 * B2C-72 — Layout Carrusel + imagen circular (Round Category Tile) del Home/Landing.
 *
 * Están aquí los 6 TC web de la planilla. Los otros 4 son `-BM-`: se configuran desde Business
 * Manager / Page Designer, que no se conduce con Playwright, y quedan `Fuera de alcance` sin
 * generar `test()` — no es un impedimento que alguien deba destrabar, es cobertura que esta
 * automatización no cubre.
 *
 * Los 6 TC declaran solo `{BASE_URL}` y sitúan el componente en "Home o Landing". En este
 * ambiente no hay Landing, y el Home sí trae el componente configurado bajo el título
 * **"Categorías destacadas"**, con 7 tiles: ese es el que se certifica.
 *
 * Tres cosas que la exploración dejó claras y que gobiernan cómo están escritas las aserciones:
 *
 * - **El componente no tiene clase ni `data-*` semántico**: sus clases son hashes de Emotion que
 *   cambian en cada build. El ancla estable es el título visible, y el POM sube desde ahí.
 * - **La forma circular no está en el `<img>`** (su `border-radius` es 0) sino en el envoltorio de
 *   aspect-ratio que lo recorta. Medir el radio de la imagen daría "cuadrado" sobre algo que en
 *   pantalla es un círculo.
 * - **El nombre visible del tile no es el de su categoría destino** — "Orgánico" lleva a
 *   `/category/frutas-y-verduras`, que es el *Custom display name* de CA4. La redirección se
 *   verifica contra el `href` del propio tile, nunca contra su texto.
 */

/** El título con el que este ambiente tiene instanciado el componente en el Home. */
const TITULO_DEL_COMPONENTE = /categor[ií]as destacadas/i;

/** El tamaño de imagen que declara la HU para el tile circular. */
const LADO_ESPERADO = 150;

test.describe('B2C-72 — Layout Carrusel + imagen circular', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C72-D-001 · Layout Carrusel + imagen circular: titulo centrado y slider de 6 imagenes por slide (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C72-D-001';
      test.setTimeout(180000);

      // Paso 1 — el Home, que es donde este ambiente tiene configurado el componente.
      const home = new HomePage(page);
      await home.goto();
      await home.recorrerCompleto();
      await home.capturarEvidencia(cp, 1, 'Home cargado');

      // Paso 2 — localizar el componente.
      const carrusel = new CarruselCircular(page, TITULO_DEL_COMPONENTE);
      await carrusel.enfocar();
      await expect(carrusel.encabezado, 'el componente está presente en la página').toBeVisible();
      await home.capturarEvidencia(cp, 2, 'componente localizado', { elemento: carrusel.root });

      // Paso 3 — título centrado sobre el slider, imágenes circulares de 150x150 y 6 por slide.
      expect(await carrusel.tituloCentrado(), 'el título va centrado sobre el slider').toBe(true);

      const tiles = await carrusel.medirTiles();
      expect(tiles.length, 'el slider trae imágenes').toBeGreaterThan(0);
      await home.capturarEvidencia(cp, 3, 'slider de imagenes circulares', {
        elemento: carrusel.root,
      });

      for (const t of tiles) {
        expect(t.radio, `el tile "${t.nombre}" se recorta en círculo (radio ${t.radio})`).not.toBe(
          '0px',
        );
        expect(t.ancho, `el tile "${t.nombre}" mide ${LADO_ESPERADO} px de ancho`).toBe(
          LADO_ESPERADO,
        );
        expect(t.alto, `el tile "${t.nombre}" mide ${LADO_ESPERADO} px de alto`).toBe(
          LADO_ESPERADO,
        );
      }

      expect(
        await carrusel.tilesPorSlide(),
        'en Desktop se ven 6 imágenes por slide',
      ).toBe(6);

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C72-D-002 · Los controles de deslizamiento navegan el carrusel horizontalmente (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C72-D-002';
      test.setTimeout(180000);

      // Paso 1 — el componente visible, con más imágenes de las que caben en un slide.
      const home = new HomePage(page);
      await home.goto();
      await home.recorrerCompleto();
      const carrusel = new CarruselCircular(page, TITULO_DEL_COMPONENTE);
      await carrusel.enfocar();

      const inicial = await carrusel.carril();
      expect(
        inicial.desplazable,
        'el componente tiene más imágenes de las que caben en un slide',
      ).toBe(true);
      const antes = await carrusel.medirTiles();
      await home.capturarEvidencia(cp, 1, 'carrusel en su posicion inicial', {
        elemento: carrusel.root,
      });

      // Paso 2 — clic en el control de deslizamiento.
      await expect(carrusel.botonSiguiente, 'el carrusel ofrece control de avance').toBeVisible();
      await carrusel.deslizarConControl('siguiente');
      await home.capturarEvidencia(cp, 2, 'carrusel tras pulsar el control', {
        elemento: carrusel.root,
      });

      // Paso 3 — se desplazó horizontalmente y muestra el siguiente set de imágenes.
      const tras = await carrusel.carril();
      expect(
        tras.scrollLeft,
        `el carrusel se desplaza horizontalmente (de ${inicial.scrollLeft} a ${tras.scrollLeft})`,
      ).toBeGreaterThan(inicial.scrollLeft);

      const despues = await carrusel.medirTiles();
      const visiblesAntes = antes.filter((t) => t.visibleEnElSlide).map((t) => t.nombre);
      const visiblesDespues = despues.filter((t) => t.visibleEnElSlide).map((t) => t.nombre);
      expect(
        visiblesDespues.join('|'),
        'el slide muestra un conjunto de imágenes distinto del inicial',
      ).not.toBe(visiblesAntes.join('|'));
      await home.capturarEvidencia(cp, 3, 'siguiente set de imagenes', { elemento: carrusel.root });

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C72-D-003 · Clic en un elemento del slider redirige a la categoria destino (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C72-D-003';
      test.setTimeout(180000);

      // Paso 1 — el componente visible.
      const home = new HomePage(page);
      await home.goto();
      await home.recorrerCompleto();
      const carrusel = new CarruselCircular(page, TITULO_DEL_COMPONENTE);
      await carrusel.enfocar();
      await home.capturarEvidencia(cp, 1, 'carrusel visible en el Home', {
        elemento: carrusel.root,
      });

      // Paso 2 — clic en una imagen circular. El destino se toma del propio tile: su nombre
      // visible es un "Custom display name" y no tiene por qué coincidir con el slug.
      const destino = await carrusel.destinoDelTile(0);
      const nombre = (await carrusel.medirTiles())[0].nombre;
      await carrusel.abrirTile(0);
      await home.capturarEvidencia(cp, 2, `destino tras pulsar "${nombre}"`);

      // Paso 3 — se redirigió a la categoría que el elemento tenía configurada.
      expect(
        new URL(page.url()).pathname,
        `el clic en "${nombre}" lleva a su categoría destino (${destino})`,
      ).toBe(destino);
      await expect(
        page.locator('main').getByRole('heading').first(),
        'la categoría destino carga su contenido',
      ).toBeVisible({ timeout: 30000 });
      await home.capturarEvidencia(cp, 3, 'categoria destino cargada');

      await home.capturarEvidencia(cp);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C72-M-001 · Layout Carrusel + imagen circular: titulo centrado y hasta 3 imagenes por slide (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C72-M-001';
      test.setTimeout(180000);

      // Paso 1 — el Home en Mobile.
      const home = new HomePage(page);
      await home.goto();
      await home.recorrerCompleto();
      await home.capturarEvidencia(cp, 1, 'Home cargado en Mobile');

      // Paso 2 — localizar el componente.
      const carrusel = new CarruselCircular(page, TITULO_DEL_COMPONENTE);
      await carrusel.enfocar();
      await expect(carrusel.encabezado, 'el componente está presente en Mobile').toBeVisible();
      await home.capturarEvidencia(cp, 2, 'componente localizado en Mobile', {
        elemento: carrusel.root,
      });

      // Paso 3 — título centrado, imágenes circulares y hasta 3 por slide.
      //
      // **Este caso ya no exige los 150x150 px.** Su par de Desktop (D-001) sí los pide, y hasta
      // la corrida del 2026-09-15 este también: de ahí salió el rechazo que abrió B2C-780. La
      // planilla de hoy ya no los menciona para Mobile, y es coherente con la geometría —tres
      // tiles de 150 px son 450 px sobre un viewport de 390, así que el tamaño y las 3 por slide
      // no podían cumplirse a la vez—. Se sigue midiendo el tile, pero para dejar constancia del
      // valor observado en la evidencia, no para decidir el veredicto.
      expect(await carrusel.tituloCentrado(), 'el título va centrado sobre el slider').toBe(true);

      const tiles = await carrusel.medirTiles();
      expect(tiles.length, 'el slider trae imágenes').toBeGreaterThan(0);
      await home.capturarEvidencia(cp, 3, 'slider de imagenes circulares en Mobile', {
        elemento: carrusel.root,
      });

      for (const t of tiles) {
        expect(t.radio, `el tile "${t.nombre}" se recorta en círculo (radio ${t.radio})`).not.toBe(
          '0px',
        );
      }

      const porSlide = await carrusel.tilesPorSlide();
      expect(porSlide, `en Mobile se ven hasta 3 imágenes por slide (son ${porSlide})`)
        .toBeLessThanOrEqual(3);
      expect(porSlide, 'el slide muestra al menos una imagen').toBeGreaterThan(0);

      const medidas = tiles.map((t) => `${t.nombre} ${t.ancho}x${t.alto}`).join(', ');
      // eslint-disable-next-line no-console
      console.log(
        `[${cp}] tamaño observado de los tiles en Mobile: ${medidas} ` +
          `(Desktop los renderiza a ${LADO_ESPERADO}x${LADO_ESPERADO})`,
      );

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C72-M-002 · El carrusel se desplaza horizontalmente con el gesto (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C72-M-002';
      test.setTimeout(180000);

      // Paso 1 — el componente visible, con más imágenes de las que caben en un slide.
      const home = new HomePage(page);
      await home.goto();
      await home.recorrerCompleto();
      const carrusel = new CarruselCircular(page, TITULO_DEL_COMPONENTE);
      await carrusel.enfocar();

      const inicial = await carrusel.carril();
      expect(
        inicial.desplazable,
        'el componente tiene más imágenes de las que caben en un slide',
      ).toBe(true);
      const antes = await carrusel.tilesVisibles();
      await home.capturarEvidencia(cp, 1, 'carrusel en su posicion inicial', {
        elemento: carrusel.root,
      });

      // Paso 2 — deslizar horizontalmente sobre el carrusel.
      //
      // El carril es un scroller nativo, y eso decide con qué se conduce: los eventos táctiles
      // fabricados desde la página no lo mueven —ni con `hasTouch` ni por la API heredada que
      // WebKit exige: se despachan sin error y dejan el `scrollLeft` en 0—, porque el scroll
      // nativo lo resuelve el compositor a partir de input real. La rueda con delta horizontal sí
      // entra por esa vía. No es un dedo, y el resultado lo deja dicho; pero es input del usuario
      // y produce el desplazamiento que el resultado esperado describe.
      expect(await carrusel.marcarCarril(), 'se ubicó el carril desplazable').toBe(true);
      await carrusel.deslizarConRueda(300);
      await home.capturarEvidencia(cp, 2, 'carrusel tras el deslizamiento', {
        elemento: carrusel.root,
      });

      // Paso 3 — se desplazó horizontalmente y muestra más imágenes circulares.
      const tras = await carrusel.carril();
      expect(
        tras.scrollLeft,
        `el carrusel se desplaza horizontalmente (de ${inicial.scrollLeft} a ${tras.scrollLeft})`,
      ).toBeGreaterThan(inicial.scrollLeft);

      const despues = await carrusel.tilesVisibles();
      const nuevas = despues.filter((t) => !antes.includes(t));
      expect(
        nuevas.length,
        `el desplazamiento deja a la vista imágenes circulares que antes no se veían (${
          nuevas.join(', ') || 'ninguna'
        })`,
      ).toBeGreaterThan(0);
      await home.capturarEvidencia(cp, 3, 'mas imagenes circulares a la vista', {
        elemento: carrusel.root,
      });

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C72-M-003 · Pulsar un elemento del slider redirige a la categoria destino (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C72-M-003';
      test.setTimeout(180000);

      // Paso 1 — el componente visible en Mobile.
      const home = new HomePage(page);
      await home.goto();
      await home.recorrerCompleto();
      const carrusel = new CarruselCircular(page, TITULO_DEL_COMPONENTE);
      await carrusel.enfocar();
      await home.capturarEvidencia(cp, 1, 'carrusel visible en Mobile', {
        elemento: carrusel.root,
      });

      // Paso 2 — pulsar una imagen circular.
      const destino = await carrusel.destinoDelTile(0);
      const nombre = (await carrusel.medirTiles())[0].nombre;
      await carrusel.abrirTile(0);
      await home.capturarEvidencia(cp, 2, `destino tras pulsar "${nombre}"`);

      // Paso 3 — se redirigió a la categoría configurada para ese elemento.
      expect(
        new URL(page.url()).pathname,
        `pulsar "${nombre}" lleva a su categoría destino (${destino})`,
      ).toBe(destino);
      await expect(
        page.locator('main').getByRole('heading').first(),
        'la categoría destino carga su contenido',
      ).toBeVisible({ timeout: 30000 });
      await home.capturarEvidencia(cp, 3, 'categoria destino cargada en Mobile');

      await home.capturarEvidencia(cp);
    });
  });
});
