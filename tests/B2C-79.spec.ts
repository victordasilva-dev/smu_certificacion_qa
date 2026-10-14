import { Page } from '@playwright/test';
import { test, expect } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { CarruselBanners } from './pages/CarruselBanners';

/**
 * B2C-79 — Carrusel de Banners del Home/Landing (variantes T1, T2 y T4).
 *
 * Están aquí los 10 TC web ejecutables de la planilla. De los 29 que trae:
 *
 * - **8 son `-BM-`** (configuración desde Page Designer): `Fuera de alcance`.
 * - **11 quedaron `Bloqueado`**, por dos motivos distintos que conviene no mezclar:
 *   - **La variante T2 no está configurada** en este ambiente: D-002 y M-002 no tienen dónde
 *     observarse. Los únicos dos carruseles de banners del Home son T1 y T4.
 *   - **El resto pide un estado que solo Page Designer produce** y que el ambiente no tiene:
 *     D-005 (indicadores habilitados — aquí ninguna variante los renderiza), D-008 (menos de 2
 *     banners), D-009 (variante inválida), D-011 (un banner sin URL — los 7 configurados tienen),
 *     D-012 (imagen Mobile sin configurar), D-013 y D-014 (autoplay y velocidad *sin configurar*,
 *     que desde el storefront no se distingue de configurados con ese mismo valor), D-015 y D-016
 *     (indicadores y controles desactivados).
 *
 * En este ambiente hay dos variantes instanciadas en el Home: **T1** es el hero de arriba, sin
 * título propio, con 3 banners de 1440x420 y autoplay cada 5 s; **T4** es el bloque "Cada día, una
 * ocasión", con 4 banners altos, enlace "Mostrar todo" y sin autoplay.
 *
 * Tres cosas que gobiernan las aserciones:
 *
 * - **Un carrusel de banners se reconoce por lo que no tiene**: ningún slide con botón "Agregar".
 *   El Home monta ocho Swipers y sus clases son hashes de Emotion, así que ese es el filtro.
 * - **Hay que parar el autoplay antes de medir**: con T1 en movimiento las medidas salen a mitad
 *   de transición y se cuentan cero banners enteros donde hay uno.
 * - **"Entero" y "asoma" son preguntas distintas**: T1 muestra un banner y nada más, mientras que
 *   T4 en Mobile muestra uno entero *y el siguiente asomando*, que es justo lo que su caso pide.
 */

/** Índice de cada variante entre los carruseles de banners del Home. */
const T1 = 0;
const T4 = 1;

async function abrirCarrusel(page: Page, indice: number) {
  const home = new HomePage(page);
  await home.goto();
  await home.recorrerCompleto();
  const carrusel = new CarruselBanners(page, indice);
  const cuantos = await carrusel.localizar();
  expect(cuantos, 'el Home trae los carruseles de banners esperados').toBeGreaterThan(indice);
  await carrusel.enfocar();
  return { home, carrusel };
}

test.describe('B2C-79 — Carrusel de Banners', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C79-D-001 · Presentacion T1 en Desktop: banner unico ancho completo con controles laterales (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C79-D-001';
      test.setTimeout(240000);

      // Paso 1 y 2 — la variante full-width, quieta para poder medirla.
      const { home, carrusel } = await abrirCarrusel(page, T1);
      await carrusel.detenerAutoplay();
      await home.capturarEvidencia(cp, 1, 'variante full-width en el Home', {
        elemento: carrusel.root,
      });

      // Paso 3 — un único banner por slide, a ancho completo del componente.
      const geo = await carrusel.geometria();
      const banners = await carrusel.banners();
      expect(banners.length, 'el carrusel trae banners').toBeGreaterThan(1);
      expect(
        banners.filter((b) => b.entero).length,
        `se muestra un único banner por slide (enteros: ${banners.filter((b) => b.entero).length})`,
      ).toBe(1);

      const visible = banners.find((b) => b.entero)!;
      expect(
        visible.ancho,
        `el banner ocupa el ancho completo del componente (${visible.ancho} de ${geo.ancho})`,
      ).toBe(geo.ancho);
      await home.capturarEvidencia(cp, 3, 'banner a ancho completo', { elemento: carrusel.root });

      // Controles laterales y slide-bar para rotar entre banners.
      await expect(carrusel.botonAnterior, 'el carrusel trae control lateral de retroceso').toBeVisible();
      await expect(carrusel.botonSiguiente, 'el carrusel trae control lateral de avance').toBeVisible();
      await expect(carrusel.slideBar, 'el carrusel trae su slide-bar').toBeAttached();
      await home.capturarEvidencia(cp, 3, 'controles y slide-bar', { elemento: carrusel.root });

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C79-D-003 · Presentacion T4 en Desktop: slider con varios banners, titulo y Mostrar todo (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C79-D-003';
      test.setTimeout(240000);

      // Paso 1 y 2 — la variante de banners altos.
      const { home, carrusel } = await abrirCarrusel(page, T4);
      await carrusel.detenerAutoplay();
      await home.capturarEvidencia(cp, 1, 'variante con titulo y texto', { elemento: carrusel.root });

      // Título y enlace "Mostrar todo", alineado a la derecha del encabezado.
      await expect(carrusel.titulo, 'el componente muestra su título').toBeVisible();
      await expect(carrusel.mostrarTodo, 'el componente muestra el enlace Mostrar todo').toBeVisible();
      const alineacion = await carrusel.contenedor.evaluate((cont) => {
        const h = cont.querySelector('h1, h2, h3')!;
        const a = [...cont.querySelectorAll('a')].find((x) =>
          /mostrar todo/i.test(x.textContent ?? ''),
        )!;
        return {
          tituloDerecha: Math.round(h.getBoundingClientRect().right),
          enlaceIzquierda: Math.round(a.getBoundingClientRect().left),
        };
      });
      expect(
        alineacion.enlaceIzquierda,
        'el enlace Mostrar todo va a la derecha del título',
      ).toBeGreaterThan(alineacion.tituloDerecha);
      await home.capturarEvidencia(cp, 2, 'encabezado con titulo y Mostrar todo', {
        elemento: carrusel.contenedor,
      });

      // Paso 3 — varios banners visibles simultáneamente.
      //
      // Se cuentan los que se ven de forma sustancial (al menos el 90 % de su ancho dentro del
      // carril) y no los que caben *exactos*: cuando la página tiene barra de scroll vertical el
      // carril pierde unos 15 px y el último banner queda recortado un 5 %, lo que haría contar
      // tres donde el usuario ve cuatro. El recorte es un detalle de renderizado, no lo que el
      // caso mide, así que el mensaje reporta las dos cifras para que quede a la vista.
      const banners = await carrusel.banners();
      const visibles = banners.filter((b) => b.visible >= 0.9).length;
      const enteros = banners.filter((b) => b.entero).length;
      const detalle = `visibles: ${visibles}, enteros sin recorte: ${enteros}, de ${banners.length} configurados`;
      expect(
        visibles,
        `el slider muestra 4-5 banners simultáneamente (${detalle})`,
      ).toBeGreaterThanOrEqual(4);
      expect(visibles, `el slider no muestra más de 5 banners (${detalle})`).toBeLessThanOrEqual(5);
      await home.capturarEvidencia(cp, 3, `slider con ${visibles} banners visibles`, {
        elemento: carrusel.root,
      });

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C79-D-004 · Autoplay del carrusel rota los banners cada N segundos configurados (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C79-D-004';
      test.setTimeout(240000);

      // Paso 1 — el carrusel con autoplay activo.
      const { home, carrusel } = await abrirCarrusel(page, T1);
      const cfg = await carrusel.configuracion();
      expect(cfg.autoplayActivo, 'el carrusel tiene el autoplay activo').toBe(true);
      expect(cfg.autoplayDelayMs, 'el autoplay declara su intervalo').not.toBeNull();
      const inicial = cfg.indiceActivo;
      await home.capturarEvidencia(cp, 1, 'banner inicial', { elemento: carrusel.root });

      // Paso 2 — esperar el intervalo configurado sin interactuar.
      await page.waitForTimeout(cfg.autoplayDelayMs! + 2500);
      const tras = await carrusel.configuracion();
      await home.capturarEvidencia(cp, 2, 'banner tras la rotacion automatica', {
        elemento: carrusel.root,
      });

      // Paso 3 — rotó solo, al ritmo que declara su configuración.
      expect(
        tras.indiceActivo,
        `el carrusel rota solo cada ${cfg.autoplayDelayMs} ms (índice ${inicial} → ${tras.indiceActivo})`,
      ).not.toBe(inicial);

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C79-D-006 · Clic en un banner redirige a la URL configurada (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C79-D-006';
      test.setTimeout(240000);

      // Paso 1 — el carrusel visible.
      const { home, carrusel } = await abrirCarrusel(page, T1);
      await carrusel.detenerAutoplay();
      await home.capturarEvidencia(cp, 1, 'carrusel de banners', { elemento: carrusel.root });

      // Paso 2 — clic en un banner. El destino se lee del propio banner: es lo que el
      // administrador configuró para él, y no tiene por qué deducirse de su nombre.
      const { alt, href } = await carrusel.abrirBanner();
      expect(href, 'el banner declara su URL configurada').toBeTruthy();
      await home.capturarEvidencia(cp, 2, `destino tras pulsar "${alt}"`);

      // Paso 3 — se redirigió a esa URL.
      expect(
        new URL(page.url()).pathname,
        `el clic en "${alt}" lleva a su URL configurada (${href})`,
      ).toBe(href);
      await expect(
        page.locator('main').getByRole('heading').first(),
        'el destino carga su contenido',
      ).toBeVisible({ timeout: 30000 });
      await home.capturarEvidencia(cp, 3, 'destino cargado');

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C79-D-007 · Clic en Mostrar todo redirige a la URL configurada (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C79-D-007';
      test.setTimeout(240000);

      // Paso 1 — el componente que trae el enlace.
      const { home, carrusel } = await abrirCarrusel(page, T4);
      await expect(carrusel.mostrarTodo, 'el componente trae el enlace Mostrar todo').toBeVisible();
      const destino = await carrusel.mostrarTodo.getAttribute('href');
      expect(destino, 'el enlace declara su URL configurada').toBeTruthy();
      await home.capturarEvidencia(cp, 1, 'encabezado con Mostrar todo', {
        elemento: carrusel.contenedor,
      });

      // Paso 2 — clic en el enlace.
      await carrusel.mostrarTodo.click();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2500);
      await home.capturarEvidencia(cp, 2, 'destino tras pulsar Mostrar todo');

      // Paso 3 — se redirigió a la URL configurada.
      const url = new URL(page.url());
      expect(
        url.pathname + url.search,
        `Mostrar todo lleva a su URL configurada (${destino})`,
      ).toBe(destino);
      await home.capturarEvidencia(cp, 3, 'destino cargado');

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C79-D-010 · Banner con imagen rota muestra imagen no disponible y el resto del carrusel sigue funcionando (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C79-D-010';
      test.setTimeout(240000);

      // Paso 1 — producir el error de carga en un solo banner. En este ambiente ninguna imagen
      // está rota, así que se corta su petición: por identificador de archivo y no por URL exacta,
      // porque el <img> lleva srcset con varios anchos y basta con que cargue una variante.
      const preludio = await abrirCarrusel(page, T1);
      await preludio.carrusel.detenerAutoplay();
      const iObjetivo = await preludio.carrusel.indiceDeBannerVisible();
      const urlImagen = await preludio.carrusel.urlDeImagen(iObjetivo);
      const bannerAfectado = (await preludio.carrusel.banners())[iObjetivo].alt;
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
      const carrusel = new CarruselBanners(page, T1);
      await carrusel.localizar();
      await carrusel.enfocar();
      await carrusel.detenerAutoplay();
      await home.capturarEvidencia(cp, 2, 'carrusel con la imagen caida', {
        elemento: carrusel.root,
      });

      // Paso 3 — el banner afectado y el resto del carrusel.
      expect(
        peticionesCortadas,
        `se cortó la petición de la imagen de "${bannerAfectado}"`,
      ).toBeGreaterThan(0);

      const banners = await carrusel.banners();
      const afectado = banners[iObjetivo];
      expect(
        afectado.imagenCargada,
        `la imagen de "${bannerAfectado}" no cargó, que es la condición del caso`,
      ).toBe(false);

      const hueco = await carrusel.estadoDeImagenDe(iObjetivo);
      await home.capturarEvidencia(cp, 3, 'banner sin imagen disponible', {
        elemento: carrusel.slides.nth(iObjetivo),
      });
      expect(
        hueco.alto,
        `el banner conserva su espacio (${hueco.alto}px) en vez de colapsar`,
      ).toBeGreaterThan(0);

      // El resto del carrusel sigue funcionando: sus imágenes cargan y los controles responden.
      const resto = banners.filter((_, i) => i !== iObjetivo);
      expect(
        resto.every((b) => b.imagenCargada),
        `el resto de los banners muestra su imagen; sin cargar: ${resto
          .filter((b) => !b.imagenCargada)
          .map((b) => b.alt)
          .join(', ')}`,
      ).toBe(true);

      const antes = await carrusel.configuracion();
      await carrusel.avanzarConControl();
      const tras = await carrusel.configuracion();
      expect(
        tras.indiceActivo,
        'el carrusel sigue navegando con sus controles pese a la imagen rota',
      ).not.toBe(antes.indiceActivo);
      await home.capturarEvidencia(cp, 3, 'carrusel navegando tras la imagen rota', {
        elemento: carrusel.root,
      });

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C79-D-017 · Clic en los controles de navegacion avanza el carrusel manualmente (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C79-D-017';
      test.setTimeout(240000);

      // Paso 1 — el carrusel quieto, para que el avance que se mida sea el del clic y no el del
      // autoplay.
      const { home, carrusel } = await abrirCarrusel(page, T1);
      await carrusel.detenerAutoplay();
      const antes = await carrusel.configuracion();
      const visiblesAntes = (await carrusel.banners()).filter((b) => b.entero).map((b) => b.alt);
      await home.capturarEvidencia(cp, 1, 'carrusel en su posicion inicial', {
        elemento: carrusel.root,
      });

      // Paso 2 — clic en el control de avance.
      await expect(carrusel.botonSiguiente, 'el carrusel ofrece control de avance').toBeVisible();
      await carrusel.avanzarConControl();
      await home.capturarEvidencia(cp, 2, 'carrusel tras pulsar la flecha', {
        elemento: carrusel.root,
      });

      // Paso 3 — avanzó de slide.
      const tras = await carrusel.configuracion();
      expect(
        tras.indiceActivo,
        `el carrusel avanza al pulsar el control (índice ${antes.indiceActivo} → ${tras.indiceActivo})`,
      ).not.toBe(antes.indiceActivo);
      const visiblesDespues = (await carrusel.banners()).filter((b) => b.entero).map((b) => b.alt);
      expect(
        visiblesDespues.join('|'),
        'el slide muestra un banner distinto del inicial',
      ).not.toBe(visiblesAntes.join('|'));
      await home.capturarEvidencia(cp, 3, 'siguiente banner a la vista', { elemento: carrusel.root });

      await home.capturarEvidencia(cp);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C79-M-001 · Presentacion T1 en Mobile: banner con padding lateral (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C79-M-001';
      test.setTimeout(240000);

      // Paso 1 y 2 — la variante full-width en Mobile, quieta para medirla.
      const { home, carrusel } = await abrirCarrusel(page, T1);
      await carrusel.detenerAutoplay();
      await home.capturarEvidencia(cp, 1, 'variante full-width en Mobile', {
        elemento: carrusel.root,
      });

      // Paso 3 — un solo banner a la vez, y el componente con padding lateral.
      const geo = await carrusel.geometria();
      const banners = await carrusel.banners();
      expect(
        banners.filter((b) => b.entero).length,
        `se muestra un solo banner a la vez (enteros: ${banners.filter((b) => b.entero).length})`,
      ).toBe(1);
      expect(
        geo.x,
        `el componente deja padding lateral (arranca en x=${geo.x} de un viewport de ${geo.viewport})`,
      ).toBeGreaterThan(0);
      expect(
        geo.ancho,
        `el componente no ocupa el ancho completo (${geo.ancho} de ${geo.viewport})`,
      ).toBeLessThan(geo.viewport);
      await home.capturarEvidencia(cp, 3, 'banner con padding lateral', { elemento: carrusel.root });

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C79-M-003 · Presentacion T4 en Mobile: 1 banner mas parcial del siguiente (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C79-M-003';
      test.setTimeout(240000);

      // Paso 1 y 2 — la variante de banners altos en Mobile.
      const { home, carrusel } = await abrirCarrusel(page, T4);
      await carrusel.detenerAutoplay();
      await home.capturarEvidencia(cp, 1, 'variante con titulo en Mobile', {
        elemento: carrusel.root,
      });

      // Paso 3 — un banner entero y el siguiente asomando. Son dos preguntas distintas: contar
      // solo los que caben enteros diría "uno" sin decir nada del efecto que el caso verifica.
      const banners = await carrusel.banners();
      const enteros = banners.filter((b) => b.entero).length;
      const asoman = banners.filter((b) => b.asoma).length;
      expect(enteros, `se muestra un banner entero (son ${enteros})`).toBe(1);
      expect(
        asoman,
        `además del banner entero asoma el siguiente (a la vista asoman ${asoman})`,
      ).toBeGreaterThan(1);
      await home.capturarEvidencia(cp, 3, 'un banner mas el parcial del siguiente', {
        elemento: carrusel.root,
      });

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C79-M-004 · Deslizamiento del carrusel de banners en Mobile (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C79-M-004';
      test.setTimeout(240000);

      // Paso 1 — el carrusel quieto, para que el avance medido sea el del gesto.
      const { home, carrusel } = await abrirCarrusel(page, T1);
      await carrusel.detenerAutoplay();
      const antes = await carrusel.configuracion();
      const visiblesAntes = (await carrusel.banners()).filter((b) => b.asoma).map((b) => b.alt);
      await home.capturarEvidencia(cp, 1, 'carrusel en su posicion inicial', {
        elemento: carrusel.root,
      });

      // Paso 2 — deslizar horizontalmente. El Swiper trae `simulateTouch`, así que el arrastre de
      // puntero entra por la misma tubería de input que usaría el dedo. No es un dedo —eso solo se
      // certifica en un dispositivo real— pero es input del usuario y produce el desplazamiento
      // que el resultado esperado describe.
      await carrusel.arrastrar();
      await home.capturarEvidencia(cp, 2, 'carrusel tras el deslizamiento', {
        elemento: carrusel.root,
      });

      // Paso 3 — navegó a otro banner.
      const tras = await carrusel.configuracion();
      expect(
        tras.indiceActivo,
        `el carrusel avanza al deslizarlo (índice ${antes.indiceActivo} → ${tras.indiceActivo})`,
      ).not.toBe(antes.indiceActivo);
      const visiblesDespues = (await carrusel.banners()).filter((b) => b.asoma).map((b) => b.alt);
      expect(
        visiblesDespues.join('|'),
        'el deslizamiento deja a la vista banners que antes no se veían',
      ).not.toBe(visiblesAntes.join('|'));
      await home.capturarEvidencia(cp, 3, 'otro banner a la vista', { elemento: carrusel.root });

      await home.capturarEvidencia(cp);
    });
  });
});
