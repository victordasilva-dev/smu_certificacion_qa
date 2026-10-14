import { Page } from '@playwright/test';
import { test, expect } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { SliderBannersTitulo } from './pages/SliderBannersTitulo';

/**
 * B2C-82 — Slider de Banners con Título (variante **T7**).
 *
 * Están aquí los 5 TC web ejecutables de la planilla. De los 13 que trae:
 *
 * - **3 son `-BM-`** (configuración desde Page Designer): `Fuera de alcance`.
 * - **5 quedaron `Bloqueado`**, por dos motivos que conviene no mezclar:
 *   - **El slider no desborda en Desktop**: los 4 items configurados caben enteros en el carril de
 *     1280 px, los dos controles se renderizan *deshabilitados* y el Swiper reporta
 *     `isBeginning && isEnd`. D-002 y D-004 piden explícitamente "más items de los que caben en un
 *     slide", así que no tienen precondición que observar.
 *   - **El resto pide un estado que solo Page Designer produce**: D-005 (menos de 2 items),
 *     D-006 (un item sin imagen, título o enlace) y D-007 (componente *sin* pretítulo — aquí el
 *     pretítulo está configurado, y su ausencia no se puede provocar desde el storefront).
 *
 * En este ambiente la única instancia de T7 es el bloque **"Cada día, una ocasión"** del Home, con
 * 4 items (Asaíto, Picoteo, Orgánico, Colaciones), enlace "Mostrar todo" a `/search?q=ofertas` y
 * sin autoplay.
 *
 * Tres cosas que gobiernan las aserciones:
 *
 * - **T7 se reconoce por el título por item**: sus slides llevan imagen *y* un párrafo de texto
 *   propio dentro del mismo `<a>`. El Home monta ocho Swipers y sus clases son hashes de Emotion,
 *   así que ese rasgo es el único filtro estable; los carruseles de producto se descartan antes,
 *   por traer botón "Agregar".
 * - **"Entero" y "asoma" son preguntas distintas**: los casos de presentación piden "N items
 *   visibles **+ parcial**", que es exactamente la diferencia entre las dos.
 * - **Cuántos items caben es una propiedad del carril, no de cuántos haya configurados**: se mide
 *   el ancho del item contra el ancho del carril, así que la conclusión no depende de que el
 *   ambiente tenga 4 items o 10.
 */

/**
 * Por qué estos casos no se ejecutan.
 *
 * La suite se corrió el 2026-09-14 contra el bloque "Cada día, una ocasión" creyéndolo T7, y ese
 * bloque es la **variante T4 del Carrusel de Banners** (HU B2C-79): se identifica en Page Designer
 * como `tb-banner-t4-hp`, y los criterios medibles de T4 —4 a 5 banners en Desktop, 1 + parcial en
 * Mobile— son exactamente lo que muestra, mientras T7 pide 5-6 y 2 + parcial.
 *
 * La variante T7 no está configurada en este ambiente, así que los casos quedan `Bloqueado`. Se
 * dejan *skipped* y no borrados porque el día que T7 se publique el trabajo es revisar a qué
 * componente apunta `SliderBannersTitulo.localizar()` —su filtro actual encuentra justamente el
 * bloque T4— y no reescribir los casos. Mientras tanto no pueden correr: pasarían contra el
 * componente equivocado y volverían a producir el mismo falso veredicto, que ya costó dos bugs
 * descartados (B2C-781 y B2C-782).
 */
const T7_NO_CONFIGURADA =
  'La variante T7 no está configurada en este ambiente: el bloque contra el que corría este caso ' +
  'es la variante T4 del Carrusel de Banners (HU B2C-79). El caso queda Bloqueado hasta que T7 se ' +
  'publique en el Home.';

async function abrirSlider(page: Page) {
  const home = new HomePage(page);
  await home.goto();
  await home.recorrerCompleto();
  const slider = new SliderBannersTitulo(page);
  const cuantos = await slider.localizar();
  expect(cuantos, 'el Home trae el slider de banners con título (variante T7)').toBeGreaterThan(0);
  await slider.enfocar();
  return { home, slider };
}

test.describe('B2C-82 — Slider de Banners con Título (T7)', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C82-D-001 · Presentacion en Desktop: 5-6 banners con titulo debajo de cada imagen (Desktop)', async ({
      page,
    }) => {
      test.skip(true, T7_NO_CONFIGURADA);
      const cp = 'TC-B2C82-D-001';
      test.setTimeout(240000);

      // Paso 1 y 2 — el componente en pantalla, con su encabezado y su slider.
      const { home, slider } = await abrirSlider(page);
      await home.capturarEvidencia(cp, 1, 'slider de banners con titulo en el Home', {
        elemento: slider.contenedor,
      });

      const cabecera = await slider.encabezado();
      await home.capturarEvidencia(cp, 2, 'encabezado del componente', {
        elemento: slider.contenedor,
      });

      expect(cabecera.pretitulo, 'el componente muestra su pretítulo').not.toBe('');
      expect(cabecera.textoSeccion, 'el componente muestra su texto').not.toBe('');
      expect(cabecera.mostrarTodoTexto, 'el componente muestra el enlace "Mostrar todo"').toMatch(
        /mostrar todo|ver todos?/i,
      );
      expect(
        cabecera.mostrarTodoAlaDerecha,
        'el enlace "Mostrar todo" queda alineado a la derecha del encabezado',
      ).toBe(true);

      // Cada item lleva su título como texto real debajo de la imagen: es el rasgo propio de T7.
      const items = await slider.items();
      expect(items.length, 'el slider trae items').toBeGreaterThan(0);
      for (const item of items) {
        expect(item.titulo, `el item "${item.alt}" muestra su título`).not.toBe('');
        expect(
          item.tituloDebajoPx,
          `el título de "${item.alt}" va debajo de su imagen`,
        ).toBeGreaterThan(0);
      }

      // Cuántos items se ven a la vez. Se mide también la capacidad del carril para que la
      // conclusión no dependa de cuántos items tenga configurados este ambiente.
      const cap = await slider.capacidad();
      const anchoItem = items[0].anchoImagen;
      const caben = Math.floor(cap.anchoCarril / anchoItem);
      const visibles = items.filter((i) => i.entero).length;
      const asoman = items.filter((i) => i.asoma).length;
      expect(
        visibles,
        `se ven ${visibles} items enteros y ${asoman} asomando, de los ${items.length} ` +
          `configurados; en un carril de ${cap.anchoCarril}px con items de ${anchoItem}px caben ` +
          `como mucho ${caben}, así que ni con más items configurados llegaría a 5`,
      ).toBeGreaterThanOrEqual(5);
      expect(visibles, 'el slider muestra entre 5 y 6 items visibles').toBeLessThanOrEqual(6);

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C82-D-003 · Clic en la imagen o el titulo de un banner redirige a la URL configurada (Desktop)', async ({
      page,
    }) => {
      test.skip(true, T7_NO_CONFIGURADA);
      const cp = 'TC-B2C82-D-003';
      test.setTimeout(240000);

      // Paso 1 — el componente en pantalla.
      const { home, slider } = await abrirSlider(page);
      await home.capturarEvidencia(cp, 1, 'slider con sus banners', { elemento: slider.contenedor });

      // Paso 2 — pulsar el título de un item visible. Se elige el título y no la imagen porque el
      // caso admite los dos y el título es el elemento que solo T7 tiene: si el enlace estuviera
      // puesto únicamente sobre la imagen, esta comprobación lo detectaría.
      const i = await slider.indiceDeItemVisible();
      const item = (await slider.items())[i];
      const destino = item.href;
      expect(destino, `el banner "${item.titulo}" tiene URL configurada`).toBeTruthy();
      await home.capturarEvidencia(cp, 2, `banner a pulsar: ${item.titulo}`, {
        elemento: slider.slides.nth(i),
      });

      await slider.tituloDe(i).click();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2000);

      // Paso 3 — el destino es el que el banner declara, no el que sugiere su nombre.
      const url = new URL(page.url());
      expect(
        url.pathname + url.search,
        `el clic en "${item.titulo}" lleva a su URL configurada (${destino})`,
      ).toBe(destino);
      await home.capturarEvidencia(cp, 3, 'destino cargado');

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C82-D-008 · Error en la carga de imagen de un banner muestra imagen no disponible (Desktop)', async ({
      page,
    }) => {
      test.skip(true, T7_NO_CONFIGURADA);
      const cp = 'TC-B2C82-D-008';
      test.setTimeout(240000);

      // Paso 1 — producir el error de carga en un solo banner. En este ambiente ninguna imagen
      // está rota, así que se corta su petición: por identificador de archivo y no por URL exacta,
      // porque el <img> lleva srcset con varios anchos y basta con que cargue una variante.
      const preludio = await abrirSlider(page);
      const iObjetivo = await preludio.slider.indiceDeItemVisible();
      const urlImagen = await preludio.slider.urlDeImagen(iObjetivo);
      const afectadoNombre = (await preludio.slider.items())[iObjetivo].titulo;
      const archivo = (urlImagen.split('?')[0].split('/').pop() ?? '').replace(/\.[a-z]+$/i, '');
      expect(archivo, 'se pudo identificar el archivo de imagen a bloquear').not.toBe('');

      let peticionesCortadas = 0;
      await page.route(
        (url) => url.href.includes(archivo),
        (ruta) => {
          peticionesCortadas += 1;
          return ruta.abort();
        },
      );

      // Paso 2 — recargar con la imagen caída. Hay que pedir revalidación: tras la primera carga
      // la imagen queda en caché y una recarga normal la sirve de ahí sin emitir petición, con lo
      // que la ruta que la bloquea nunca se dispara.
      await page.setExtraHTTPHeaders({ 'Cache-Control': 'no-cache', Pragma: 'no-cache' });
      await page.reload({ waitUntil: 'domcontentloaded' });
      const home = new HomePage(page);
      await home.recorrerCompleto();
      const slider = new SliderBannersTitulo(page);
      await slider.localizar();
      await slider.enfocar();
      await home.capturarEvidencia(cp, 2, 'slider con la imagen caida', {
        elemento: slider.contenedor,
      });

      expect(
        peticionesCortadas,
        `se cortó la petición de la imagen de "${afectadoNombre}"`,
      ).toBeGreaterThan(0);

      // Paso 3 — el banner afectado. Se mira **por posición**: cuando la imagen falla el
      // componente puede reemplazar la tarjeta entera por su estado de error, y con ella
      // desaparecen el alt y el título por los que se la habría buscado.
      //
      // Y hay que **esperar** a ese estado en vez de medirlo de una sola pasada: el reemplazo lo
      // hace el componente al recibir el error de la imagen, no el navegador al pintar, así que
      // una medición inmediata tras la recarga alcanza a leer la tarjeta todavía con su título
      // original y da un falso negativo intermitente.
      await expect(
        slider.slides.nth(iObjetivo),
        'el banner afectado muestra el estado de imagen no disponible',
      ).toContainText(/imagen no disponible/i, { timeout: 20000 });

      const hueco = await slider.estadoDeImagenDe(iObjetivo);
      await home.capturarEvidencia(cp, 3, 'banner sin imagen disponible', {
        elemento: slider.slides.nth(iObjetivo),
      });
      expect(
        hueco.alto,
        `el banner conserva su espacio (${hueco.alto}px) en vez de colapsar`,
      ).toBeGreaterThan(0);

      // El resto del slider sigue mostrándose y funcionando con normalidad.
      const items = await slider.items();
      const resto = items.filter((_, i) => i !== iObjetivo);
      expect(
        resto.every((b) => b.imagenCargada),
        'el resto de los banners conserva su imagen',
      ).toBe(true);

      await home.capturarEvidencia(cp);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C82-M-001 · Presentacion en Mobile: 2 banners + parcial con titulo debajo de cada imagen (Mobile)', async ({
      page,
    }) => {
      test.skip(true, T7_NO_CONFIGURADA);
      const cp = 'TC-B2C82-M-001';
      test.setTimeout(240000);

      // Paso 1 y 2 — el componente en pantalla, con su encabezado y su slider.
      const { home, slider } = await abrirSlider(page);
      await home.capturarEvidencia(cp, 1, 'slider de banners con titulo en Mobile', {
        elemento: slider.contenedor,
      });

      const cabecera = await slider.encabezado();
      expect(cabecera.pretitulo, 'el componente muestra su pretítulo').not.toBe('');
      expect(cabecera.textoSeccion, 'el componente muestra su texto').not.toBe('');
      await home.capturarEvidencia(cp, 2, 'encabezado y primeros banners', {
        elemento: slider.contenedor,
      });

      // Cada item lleva su título debajo de la imagen, igual que en Desktop.
      const items = await slider.items();
      for (const item of items) {
        expect(item.titulo, `el item "${item.alt}" muestra su título`).not.toBe('');
        expect(
          item.tituloDebajoPx,
          `el título de "${item.alt}" va debajo de su imagen`,
        ).toBeGreaterThan(0);
      }

      // "2 items visibles + parcial": dos enteros y un tercero asomando.
      const cap = await slider.capacidad();
      const enteros = items.filter((i) => i.entero).length;
      const asoman = items.filter((i) => i.asoma).length;
      expect(
        enteros,
        `se ven ${enteros} items enteros y ${asoman} asomando, en un carril de ` +
          `${cap.anchoCarril}px con items de ${items[0].anchoImagen}px`,
      ).toBe(2);
      expect(asoman, 'además de los 2 enteros, un tercer item asoma parcialmente').toBe(3);

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C82-M-002 · Deslizamiento tactil del slider en Mobile (Mobile)', async ({
      page,
    }) => {
      test.skip(true, T7_NO_CONFIGURADA);
      const cp = 'TC-B2C82-M-002';
      test.setTimeout(240000);

      // Paso 1 — el componente en pantalla, con más items de los que caben (precondición del caso).
      const { home, slider } = await abrirSlider(page);
      const antes = await slider.capacidad();
      expect(
        antes.desbordable,
        `el slider tiene más contenido (${antes.anchoContenido}px) del que cabe en el carril ` +
          `(${antes.anchoCarril}px), que es la precondición del caso`,
      ).toBe(true);
      const visiblesAntes = (await slider.items())
        .filter((i) => i.asoma)
        .map((i) => i.titulo)
        .join(' | ');
      await home.capturarEvidencia(cp, 1, 'slider antes de deslizar', {
        elemento: slider.contenedor,
      });

      // Paso 2 — deslizar horizontalmente sobre el slider. El gesto se ejecuta con input real de
      // puntero, que el navegador procesa por la misma vía que un arrastre táctil.
      await slider.arrastrar();
      await home.capturarEvidencia(cp, 2, 'slider despues de deslizar', {
        elemento: slider.contenedor,
      });

      const despues = await slider.capacidad();
      const visiblesDespues = (await slider.items())
        .filter((i) => i.asoma)
        .map((i) => i.titulo)
        .join(' | ');

      expect(
        despues.translate,
        `el slider se desplazó horizontalmente (de ${antes.translate} a ${despues.translate})`,
      ).not.toBe(antes.translate);
      expect(
        visiblesDespues,
        `tras deslizar se ven items distintos (antes: ${visiblesAntes}; después: ${visiblesDespues})`,
      ).not.toBe(visiblesAntes);

      await home.capturarEvidencia(cp);
    });
  });
});
