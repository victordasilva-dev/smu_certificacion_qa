import { Page } from '@playwright/test';
import { test, expect } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { TabsCarrusel } from './pages/TabsCarrusel';
import { PDPPage } from './pages/PDPPage';

/**
 * B2C-77 — Componente Tabs + Carrusel de productos del Home/Landing.
 *
 * Están aquí los 9 TC web ejecutables de la planilla. De los 20 que trae:
 *
 * - **5 son `-BM-`** (configuración desde Page Designer): `Fuera de alcance`, no se automatizan.
 * - **6 quedaron `Bloqueado`** porque su paso 1 es configurar Page Designer y el ambiente no
 *   ofrece el estado que piden: D-005 (una tab con categoría sin productos), D-006 (todas las tabs
 *   sin productos), D-007 (el componente con menos de 2 o más de 10 tabs), D-008 (una tab sin
 *   Label), D-011 (una tab con categoría inexistente u offline) y D-012 (una tab inicial distinta
 *   de la primera). En DEV las 9 tabs tienen Label y productos, y la activa al cargar es la
 *   primera, así que ninguno de esos comportamientos es observable.
 *
 * En este ambiente el componente está instanciado en el Home bajo el título **"Nuestras marcas"**,
 * con 9 tabs de marca.
 *
 * Cuatro cosas que la exploración dejó claras y que gobiernan las aserciones:
 *
 * - **No hay `[role=tablist]` ni `[role=tabpanel]`**: solo `role=tab` con `aria-selected`. Un
 *   locator por tablist no encuentra nada.
 * - **El autoplay impide clicar una shelf**: Playwright espera a que el elemento esté quieto y la
 *   tarjeta nunca lo está, así que el clic agota su timeout. `pauseOnMouseEnter` viene en `false`.
 *   Los TC que necesitan clicar paran el autoplay antes — es una ayuda de automatización y no
 *   cambia lo que el caso verifica.
 * - **El href de "Mostrar todo" cambia con la tab activa**, así que la redirección se comprueba
 *   contra el href vigente en el momento del clic, no contra un destino fijo.
 * - **La UI escribe "Mostrar todo" donde los TC dicen "Ver todos"**, y los Labels de tab vienen
 *   truncados a 12 caracteres. Los locators van tolerantes.
 */

/** El título con el que este ambiente tiene instanciado el componente. */
const TITULO = /nuestras marcas/i;

/** Abre el Home, recorre sus componentes diferidos y enfoca el de tabs. */
async function abrirComponente(page: Page) {
  const home = new HomePage(page);
  await home.goto();
  await home.recorrerCompleto();
  const componente = new TabsCarrusel(page, TITULO);
  await componente.enfocar();
  return { home, componente };
}

/**
 * Cuenta los productos distintos que lista la PLP abierta (enlaces a PDP de `main`), recorriendo la
 * página hasta que deja de crecer. Se usa en Mobile, donde la PLP no muestra el contador.
 */
async function contarProductosDeLaPLP(page: Page): Promise<number> {
  const contar = () =>
    page.locator('main a[href$=".html"]').evaluateAll(
      (as) => new Set(as.map((a) => (a as HTMLAnchorElement).pathname)).size,
    );
  let previo = -1;
  let actual = await contar();
  for (let i = 0; i < 15 && actual !== previo; i++) {
    previo = actual;
    await page.mouse.wheel(0, 4000);
    await page.waitForTimeout(1200);
    actual = await contar();
  }
  return actual;
}

test.describe('B2C-77 — Tabs + Carrusel de productos', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C77-D-001 · Presentacion de Tabs + Carrusel en Desktop (Desktop)', async ({ page }) => {
      const cp = 'TC-B2C77-D-001';
      test.setTimeout(240000);

      // Paso 1 — la página con el componente.
      const { home, componente } = await abrirComponente(page);
      await home.capturarEvidencia(cp, 1, 'componente en el Home');

      // Paso 2 — la fila de tabs y el carrusel.
      const geo = await componente.fondoYAlineacion();
      expect(geo.fondo, 'el componente muestra un fondo').not.toBe('rgba(0, 0, 0, 0)');
      await expect(componente.encabezado, 'el componente trae su título').toBeVisible();
      await expect(componente.verTodos, 'el encabezado trae el enlace Mostrar todo').toBeVisible();

      const tabs = await componente.nombresDeTabs();
      expect(tabs.length, 'la fila de tabs trae tabs').toBeGreaterThan(1);
      const activa = await componente.tabActiva();
      expect(activa, 'hay una tab activa por defecto').not.toBeNull();
      expect(activa, 'la tab activa por defecto es la primera').toBe(tabs[0]);
      await home.capturarEvidencia(cp, 2, 'fila de tabs y carrusel', { elemento: componente.root });

      const visibles = await componente.shelvesVisibles();
      expect(
        visibles,
        `el carrusel muestra 4-5 items de la tab activa (son ${visibles})`,
      ).toBeGreaterThanOrEqual(4);
      expect(visibles, `el carrusel no muestra más de 5 items (son ${visibles})`).toBeLessThanOrEqual(5);
      await expect(componente.barraDeslizamiento, 'el carrusel trae su slide bar').toBeAttached();

      // Paso 3 — el autoplay. El intervalo se lee de la configuración del propio carrusel:
      // cronometrar el movimiento mide los 3 s de espera más la transición y convierte un valor
      // exacto en una medición con margen.
      const cfg = await componente.configuracionDelCarrusel();
      expect(cfg.autoplayActivo, 'el carrusel se desplaza automáticamente').toBe(true);
      expect(cfg.autoplayDelayMs, 'el desplazamiento automático ocurre cada 3 segundos').toBe(3000);

      const antes = await componente.desplazamientoDelCarrusel();
      await page.waitForTimeout(4000);
      const despues = await componente.desplazamientoDelCarrusel();
      expect(despues, 'tras esperar, el carrusel se movió solo').not.toBe(antes);
      await home.capturarEvidencia(cp, 3, 'carrusel tras el desplazamiento automatico', {
        elemento: componente.root,
      });

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C77-D-002 · Clic en otra tab cambia el carrusel a los productos de esa tab (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C77-D-002';
      test.setTimeout(240000);

      // Paso 1 — el componente, con al menos 2 tabs.
      const { home, componente } = await abrirComponente(page);
      const tabs = await componente.nombresDeTabs();
      expect(tabs.length, 'el componente tiene al menos 2 tabs configuradas').toBeGreaterThan(1);
      const productosAntes = await componente.productos();
      await home.capturarEvidencia(cp, 1, `tab "${tabs[0]}" activa`, { elemento: componente.root });

      // Paso 2 — clic en una tab distinta de la activa. Se elige la primera cuyo carrusel traiga
      // productos: en este ambiente hay tabs con un solo producto y el caso necesita comparar dos
      // listados distintos, no medir cuántos trae cada colección.
      let otra = tabs[1];
      for (const candidata of tabs.slice(1)) {
        await componente.activarTab(candidata);
        if ((await componente.productos()).length > 0) {
          otra = candidata;
          break;
        }
      }
      await componente.activarTab(otra);
      await home.capturarEvidencia(cp, 2, `tab "${otra}" seleccionada`, {
        elemento: componente.root,
      });

      // Paso 3 — la tab queda activa y el carrusel trae sus productos.
      expect(await componente.tabActiva(), `"${otra}" queda como tab activa`).toBe(otra);
      const productosDespues = await componente.productos();
      expect(productosDespues.length, 'la nueva tab trae productos').toBeGreaterThan(0);
      expect(
        productosDespues.join('|'),
        'el carrusel muestra los productos de la tab seleccionada, distintos de los anteriores',
      ).not.toBe(productosAntes.join('|'));
      await home.capturarEvidencia(cp, 3, 'carrusel con los productos de la nueva tab', {
        elemento: componente.root,
      });

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C77-D-003 · Clic en Ver todos redirige al destino configurado (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C77-D-003';
      test.setTimeout(240000);

      // Paso 1 — el componente visible.
      const { home, componente } = await abrirComponente(page);
      const activa = await componente.tabActiva();
      await home.capturarEvidencia(cp, 1, `componente con la tab "${activa}" activa`, {
        elemento: componente.root,
      });

      // Paso 2 — clic en el enlace. El destino se lee del href vigente: cambia con la tab activa,
      // así que un destino fijo certificaría otra cosa.
      const destino = await componente.verTodos.getAttribute('href');
      expect(destino, 'el enlace declara un destino').toBeTruthy();
      await componente.verTodos.click();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2500);
      await home.capturarEvidencia(cp, 2, 'destino tras pulsar Mostrar todo');

      // Paso 3 — se redirigió al destino de la colección de la tab activa.
      expect(
        new URL(page.url()).pathname,
        `el enlace de la tab "${activa}" lleva a ${destino}`,
      ).toBe(destino);
      await expect(
        page.locator('main').getByRole('heading').first(),
        'el destino carga su contenido',
      ).toBeVisible({ timeout: 30000 });
      await home.capturarEvidencia(cp, 3, 'coleccion de la tab activa cargada');

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C77-D-004 · Clic en la shelf de un producto redirige a su PDP (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C77-D-004';
      test.setTimeout(240000);

      // Paso 1 — el componente visible.
      const { home, componente } = await abrirComponente(page);
      await home.capturarEvidencia(cp, 1, 'carrusel de la tab activa', { elemento: componente.root });

      // Paso 2 — clic en la shelf. `abrirShelf` detiene antes el autoplay: sin eso la tarjeta
      // nunca queda quieta y el clic agota su timeout sin llegar a ocurrir.
      const producto = await componente.abrirShelf();
      await home.capturarEvidencia(cp, 2, `PDP tras pulsar "${producto}"`);

      // Paso 3 — se llegó a la PDP del producto seleccionado.
      expect(
        new URL(page.url()).pathname,
        `el clic en la shelf lleva a una PDP (URL: ${page.url()})`,
      ).toMatch(/\/product\/|\.html$/); // la PDP vive hoy en /<slug>/<sku>.html
      // La PDP se reconoce por su propio contenedor, que es lo que modela el POM de B2C-31/B2C-59:
      // esta pantalla no expone un heading en `main`, así que buscarlo daría por no cargada una
      // página que sí está.
      const pdp = new PDPPage(page);
      await expect(pdp.core, 'la PDP carga su contenido').toBeVisible({ timeout: 30000 });
      await home.capturarEvidencia(cp, 3, 'PDP del producto cargada');

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C77-D-009 · Error en la carga de imagen de un producto muestra estado imagen no disponible (Desktop)', async ({
      page,
      browser,
    }) => {
      const cp = 'TC-B2C77-D-009';
      test.setTimeout(240000);

      // Paso 1 — producir el error de carga. En este ambiente ninguna imagen del Home está rota,
      // así que la condición se fuerza bloqueando **la petición de una sola imagen**. Cambiar el
      // `src` desde el DOM no sirve: el `<img>` lleva `srcset` y el navegador sigue resolviendo
      // por ahí.
      //
      // En WebKit la imagen ya cargada se sirve desde la caché aunque se pida revalidación, y la
      // petición bloqueada nunca llega a salir. Por eso la shelf a afectar se identifica en un
      // contexto aparte y la carga con la imagen caída se hace en la página del caso, que todavía
      // tiene la caché vacía.
      const ctxPrevio = await browser.newContext(DESKTOP);
      const pagePrevia = await ctxPrevio.newPage();
      const preludio = new TabsCarrusel(pagePrevia, TITULO);
      const homePrevio = new HomePage(pagePrevia);
      await homePrevio.goto();
      await homePrevio.recorrerCompleto();
      await preludio.enfocar();
      const iVisible = await preludio.indiceDeShelfVisible();
      const urlImagen = await preludio.urlDeImagen(iVisible);
      // La shelf se identifica por el nombre de su botón, no por el `alt` de la imagen: cuando la
      // carga falla el componente quita el <img> del slide, así que el alt desaparece justo en el
      // caso que este TC quiere mirar y el cruce se queda sin llave.
      const shelfObjetivo = (await preludio.estadoDeLasShelves())[iVisible];
      const productoAfectado = shelfObjetivo.nombre;
      await ctxPrevio.close();
      const home = new HomePage(page);

      // Se corta por el identificador del archivo y no por la URL exacta: el `<img>` lleva un
      // `srcset` con el mismo archivo en varios anchos, y bloquear una sola variante deja que el
      // navegador cargue otra, con lo que la imagen nunca llega a fallar.
      const archivo = (urlImagen.split('?')[0].split('/').pop() ?? '').replace(/\.[a-z]+$/i, '');
      expect(archivo, 'se pudo identificar el archivo de imagen a bloquear').not.toBe('');
      expect(productoAfectado, 'la shelf a afectar se pudo identificar por su imagen').not.toBe('');
      let peticionesCortadas = 0;
      await page.route(
        (url) => url.href.includes(archivo),
        (ruta) => {
          peticionesCortadas += 1;
          return ruta.abort();
        },
      );

      // Paso 2 — cargar el Home con la imagen caída, en la página del caso (caché vacía).
      await home.goto();
      await home.recorrerCompleto();
      const componente = new TabsCarrusel(page, TITULO);
      await componente.enfocar();
      await home.capturarEvidencia(cp, 2, 'carrusel con la imagen caida', {
        elemento: componente.root,
      });

      // Paso 3 — la shelf afectada, el resto del componente y la estabilidad de la página.
      //
      // La shelf se ubica por su POSICIÓN y no por su nombre: al fallar la imagen el componente
      // reemplaza el contenido de la tarjeta —se lleva por delante el <img>, su alt y el nombre
      // del producto—, así que ninguna de esas llaves sobrevive al caso que el TC quiere mirar.
      const estado = await componente.estadoDeLasShelves();
      expect(
        peticionesCortadas,
        `se cortó la petición de la imagen de "${productoAfectado}"`,
      ).toBeGreaterThan(0);
      const afectada = estado[iVisible];
      expect(afectada, 'la shelf afectada sigue presente en el carrusel').toBeTruthy();
      expect(
        afectada.imagenCargada,
        `la imagen de "${productoAfectado}" no cargó, que es la condición del caso`,
      ).toBe(false);

      const hueco = await componente.estadoDeImagenDe(iVisible);
      await home.capturarEvidencia(cp, 3, 'shelf sin imagen disponible', {
        elemento: componente.shelves.nth(iVisible),
      });
      expect(
        hueco.texto,
        `la shelf afectada muestra un estado de imagen no disponible; se observó: "${hueco.texto}"`,
      ).toMatch(/imagen no disponible/i);
      expect(
        hueco.alto,
        `la shelf conserva el espacio de la imagen (${hueco.alto}px) en vez de colapsar`,
      ).toBeGreaterThan(0);

      // El resto del componente, con normalidad, y la página entera en pie.
      const resto = estado.filter((_, i) => i !== iVisible);
      expect(
        resto.every((s) => s.imagenCargada),
        `el resto de las shelves muestra su imagen con normalidad; sin cargar: ${resto
          .filter((s) => !s.imagenCargada)
          .map((s) => s.nombre)
          .join(', ')}`,
      ).toBe(true);
      expect(
        resto.every((s) => s.tienePrecio && s.tieneAgregar),
        'el resto de las shelves conserva precio y acción de agregar',
      ).toBe(true);
      await expect(componente.encabezado, 'el componente sigue en pie').toBeVisible();
      await expect(componente.verTodos, 'el encabezado sigue completo').toBeVisible();
      expect(await componente.tabs.count(), 'la fila de tabs sigue completa').toBeGreaterThan(1);
      await home.capturarEvidencia(cp, 3, 'componente completo con la shelf afectada', {
        elemento: componente.root,
      });

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C77-D-010 · Estructura comun: fondo a todo el ancho y padding alineado al Header (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C77-D-010';
      test.setTimeout(240000);

      // Paso 1 — el componente visible.
      const { home, componente } = await abrirComponente(page);
      await home.capturarEvidencia(cp, 1, 'componente en el Home');

      // Paso 2 — el fondo, de borde a borde y sin padding lateral.
      const geo = await componente.fondoYAlineacion();
      expect(geo.fondo, 'el bloque tiene color de fondo').not.toBe('rgba(0, 0, 0, 0)');
      expect(geo.fondoX, 'el fondo arranca en el borde izquierdo de la pantalla').toBe(0);
      expect(
        geo.fondoAncho,
        `el fondo abarca el ancho total de la pantalla (${geo.fondoAncho} de ${geo.viewport})`,
      ).toBe(geo.viewport);
      expect(geo.fondoPaddingLateral, 'el fondo no tiene padding lateral').toBe('0px');
      await home.capturarEvidencia(cp, 2, 'fondo de borde a borde');

      // Paso 3 — el contenido interior, alineado con el Header.
      const header = await componente.inicioDelContenidoDelHeader();
      expect(header, 'se pudo medir dónde arranca el contenido del Header').toBeGreaterThan(0);
      expect(geo.tituloX, `el título arranca donde el Header (${header}px)`).toBe(header);
      expect(geo.tabsX, `la fila de tabs arranca donde el Header (${header}px)`).toBe(header);
      expect(geo.carruselX, `el carrusel arranca donde el Header (${header}px)`).toBe(header);
      await home.capturarEvidencia(cp, 3, 'contenido alineado con el Header', {
        elemento: componente.root,
      });

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C77-D-013 · El carrusel de la tab activa no muestra mas productos que el maximo configurado (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C77-D-013';
      test.setTimeout(300000);

      // Paso 1 y 2 — una tab cuya colección tiene más productos que el máximo. Se busca entre las
      // tabs del componente la que más productos muestre: el máximo por defecto que declara la HU
      // es 12, así que una tab que llegue a ese número es la que permite ver el tope.
      const { home, componente } = await abrirComponente(page);
      const tabs = await componente.nombresDeTabs();
      const conteos: { tab: string; productos: number; destino: string | null }[] = [];
      for (const t of tabs) {
        await componente.activarTab(t);
        conteos.push({
          tab: t,
          productos: await componente.shelves.count(),
          destino: await componente.verTodos.getAttribute('href'),
        });
      }
      const tope = conteos.reduce((a, b) => (b.productos > a.productos ? b : a));
      await componente.activarTab(tope.tab);
      await home.capturarEvidencia(cp, 2, `tab "${tope.tab}" activa`, { elemento: componente.root });

      // La colección de esa tab tiene que traer más productos que el carrusel, o el caso no
      // prueba nada: se comprueba abriendo su destino y leyendo el contador de la PLP.
      await componente.verTodos.click();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2500);
      const enLaColeccion = await page
        .locator('main')
        .locator('p')
        .filter({ hasText: /\d+\s+productos?/i })
        .first()
        .innerText()
        .then((t) => Number(t.replace(/[^\d]/g, '')))
        .catch(() => 0);
      await home.capturarEvidencia(cp, 2, `coleccion de "${tope.tab}" con ${enLaColeccion} productos`);
      expect(
        enLaColeccion,
        `la colección de "${tope.tab}" tiene más productos que los ${tope.productos} del carrusel`,
      ).toBeGreaterThan(tope.productos);

      // Paso 3 — recorrer el carrusel entero y contar.
      expect(
        tope.productos,
        `el carrusel de "${tope.tab}" se detiene en el máximo de 12 productos aunque su colección tenga ${enLaColeccion}`,
      ).toBe(12);
      const excedidas = conteos.filter((c) => c.productos > 12);
      expect(
        excedidas.map((c) => `${c.tab}:${c.productos}`).join(', '),
        'ninguna tab supera el máximo de productos',
      ).toBe('');

      await home.capturarEvidencia(cp);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C77-M-001 · Presentacion de Tabs + Carrusel en Mobile (Mobile)', async ({ page }) => {
      const cp = 'TC-B2C77-M-001';
      test.setTimeout(240000);

      // Paso 1 — la página con el componente, en Mobile.
      const { home, componente } = await abrirComponente(page);
      await home.capturarEvidencia(cp, 1, 'componente en el Home Mobile');

      // Paso 2 — fondo, título, fila de tabs y carrusel.
      const geo = await componente.fondoYAlineacion();
      expect(geo.fondo, 'el componente muestra un fondo').not.toBe('rgba(0, 0, 0, 0)');
      await expect(componente.encabezado, 'el componente trae su título').toBeVisible();

      const tabs = await componente.nombresDeTabs();
      expect(tabs.length, 'la fila de tabs trae tabs').toBeGreaterThan(1);
      const activa = await componente.tabActiva();
      expect(activa, 'hay una tab activa por defecto').not.toBeNull();
      expect(activa, 'la tab activa por defecto es la primera').toBe(tabs[0]);
      await home.capturarEvidencia(cp, 2, 'fila de tabs y carrusel en Mobile', {
        elemento: componente.root,
      });

      const visibles = await componente.shelvesVisibles();
      expect(visibles, `el carrusel muestra 2 items en Mobile (son ${visibles})`).toBe(2);
      expect((await componente.productos()).length, 'el carrusel trae productos').toBeGreaterThan(0);

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C77-M-002 · Deslizamiento del carrusel y de la fila de tabs en Mobile (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C77-M-002';
      test.setTimeout(240000);

      // Paso 1 — el componente, con más tabs de las que caben en el ancho de pantalla.
      const { home, componente } = await abrirComponente(page);
      const carril = await componente.carrilDeTabs();
      expect(
        carril.desplazable,
        `hay más tabs de las que caben (${carril.ancho}px sobre ${carril.visible}px visibles)`,
      ).toBe(true);
      await home.capturarEvidencia(cp, 1, 'componente en Mobile', { elemento: componente.root });

      // Paso 2 — deslizar el carrusel de productos. El Swiper trae `simulateTouch`, así que el
      // arrastre con el puntero entra por la misma tubería de input que usaría el dedo.
      const antesCarrusel = await componente.configuracionDelCarrusel();
      const visiblesAntes = await componente.productos();
      await componente.arrastrarCarrusel();
      const trasCarrusel = await componente.configuracionDelCarrusel();
      await home.capturarEvidencia(cp, 2, 'carrusel tras el deslizamiento', {
        elemento: componente.root,
      });
      expect(
        trasCarrusel.indiceActivo!,
        `el carrusel avanza al deslizarlo (índice ${antesCarrusel.indiceActivo} → ${trasCarrusel.indiceActivo})`,
      ).toBeGreaterThan(antesCarrusel.indiceActivo!);
      expect(visiblesAntes.length, 'la tab activa tiene más productos que los visibles').toBeGreaterThan(2);

      // Paso 3 — deslizar la fila de tabs. Es un scroller nativo: solo se mueve con input real,
      // por eso se empuja con la rueda horizontal y no con eventos fabricados desde la página.
      const tabsAntes = await componente.tabsVisibles();
      await componente.desplazarFilaDeTabs(400);
      const carrilTras = await componente.carrilDeTabs();
      const tabsDespues = await componente.tabsVisibles();
      await home.capturarEvidencia(cp, 3, 'fila de tabs desplazada', { elemento: componente.root });

      expect(
        carrilTras.scrollLeft,
        `la fila de tabs se desplaza (${carril.scrollLeft} → ${carrilTras.scrollLeft})`,
      ).toBeGreaterThan(carril.scrollLeft);
      expect(
        tabsDespues.join('|'),
        'el desplazamiento deja a la vista tabs que antes no se veían',
      ).not.toBe(tabsAntes.join('|'));

      // Y todas las tabs configuradas quedan alcanzables recorriendo el carril.
      await componente.desplazarFilaDeTabs(carrilTras.ancho);
      const ultimas = await componente.tabsVisibles();
      const todas = await componente.nombresDeTabs();
      expect(
        ultimas,
        'llegando al final del carril se alcanza la última tab configurada',
      ).toContain(todas[todas.length - 1]);

      await home.capturarEvidencia(cp);
    });
    test('TC-B2C77-M-006 · Verificar que "Mostrar todo" lleva al destino configurado de la tab activa (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C77-M-006';
      test.setTimeout(240000);

      // Paso 1 — el componente visible.
      const { home, componente } = await abrirComponente(page);
      const activa = await componente.tabActiva();
      await home.capturarEvidencia(cp, 1, `componente con la tab "${activa}" activa`, {
        elemento: componente.root,
      });

      // Paso 2 — clic en el enlace. El destino se lee del href vigente: cambia con la tab activa,
      // así que un destino fijo certificaría otra cosa.
      const destino = await componente.verTodos.getAttribute('href');
      expect(destino, 'el enlace declara un destino').toBeTruthy();
      await componente.verTodos.click();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2500);
      await home.capturarEvidencia(cp, 2, 'destino tras pulsar Mostrar todo');

      // Paso 3 — se redirigió al destino de la colección de la tab activa.
      expect(
        new URL(page.url()).pathname,
        `el enlace de la tab "${activa}" lleva a ${destino}`,
      ).toBe(destino);
      await expect(
        page.locator('main').getByRole('heading').first(),
        'el destino carga su contenido',
      ).toBeVisible({ timeout: 30000 });
      await home.capturarEvidencia(cp, 3, 'coleccion de la tab activa cargada');

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C77-M-007 · Verificar que tocar la shelf de un producto abre su PDP (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C77-M-007';
      test.setTimeout(240000);

      // Paso 1 — el componente visible.
      const { home, componente } = await abrirComponente(page);
      await home.capturarEvidencia(cp, 1, 'carrusel de la tab activa', { elemento: componente.root });

      // Paso 2 — clic en la shelf. `abrirShelf` detiene antes el autoplay: sin eso la tarjeta
      // nunca queda quieta y el clic agota su timeout sin llegar a ocurrir.
      const producto = await componente.abrirShelf();
      await home.capturarEvidencia(cp, 2, `PDP tras pulsar "${producto}"`);

      // Paso 3 — se llegó a la PDP del producto seleccionado.
      expect(
        new URL(page.url()).pathname,
        `el clic en la shelf lleva a una PDP (URL: ${page.url()})`,
      ).toMatch(/\/product\/|\.html$/); // Mobile enlaza la PDP como /<slug>/<sku>.html
      // La PDP se reconoce por su propio contenedor, que es lo que modela el POM de B2C-31/B2C-59:
      // esta pantalla no expone un heading en `main`, así que buscarlo daría por no cargada una
      // página que sí está.
      const pdp = new PDPPage(page);
      await expect(pdp.core, 'la PDP carga su contenido').toBeVisible({ timeout: 30000 });
      await home.capturarEvidencia(cp, 3, 'PDP del producto cargada');

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C77-M-013 · Verificar que una imagen de producto con error muestra el estado de imagen no disponible (Mobile)', async ({
      page,
      browser,
    }) => {
      const cp = 'TC-B2C77-M-013';
      test.setTimeout(240000);

      // Paso 1 — producir el error de carga. En este ambiente ninguna imagen del Home está rota,
      // así que la condición se fuerza bloqueando **la petición de una sola imagen**. Cambiar el
      // `src` desde el DOM no sirve: el `<img>` lleva `srcset` y el navegador sigue resolviendo
      // por ahí.
      //
      // En WebKit la imagen ya cargada se sirve desde la caché aunque se pida revalidación, y la
      // petición bloqueada nunca llega a salir. Por eso la shelf a afectar se identifica en un
      // contexto aparte y la carga con la imagen caída se hace en la página del caso, que todavía
      // tiene la caché vacía.
      const ctxPrevio = await browser.newContext(MOBILE);
      const pagePrevia = await ctxPrevio.newPage();
      const preludio = new TabsCarrusel(pagePrevia, TITULO);
      const homePrevio = new HomePage(pagePrevia);
      await homePrevio.goto();
      await homePrevio.recorrerCompleto();
      await preludio.enfocar();
      const iVisible = await preludio.indiceDeShelfVisible();
      const urlImagen = await preludio.urlDeImagen(iVisible);
      // La shelf se identifica por el nombre de su botón, no por el `alt` de la imagen: cuando la
      // carga falla el componente quita el <img> del slide, así que el alt desaparece justo en el
      // caso que este TC quiere mirar y el cruce se queda sin llave.
      const shelfObjetivo = (await preludio.estadoDeLasShelves())[iVisible];
      const productoAfectado = shelfObjetivo.nombre;
      await ctxPrevio.close();
      const home = new HomePage(page);

      // Se corta por el identificador del archivo y no por la URL exacta: el `<img>` lleva un
      // `srcset` con el mismo archivo en varios anchos, y bloquear una sola variante deja que el
      // navegador cargue otra, con lo que la imagen nunca llega a fallar.
      const archivo = (urlImagen.split('?')[0].split('/').pop() ?? '').replace(/\.[a-z]+$/i, '');
      expect(archivo, 'se pudo identificar el archivo de imagen a bloquear').not.toBe('');
      expect(productoAfectado, 'la shelf a afectar se pudo identificar por su imagen').not.toBe('');
      let peticionesCortadas = 0;
      await page.route(
        (url) => url.href.includes(archivo),
        (ruta) => {
          peticionesCortadas += 1;
          return ruta.abort();
        },
      );

      // Paso 2 — cargar el Home con la imagen caída, en la página del caso (caché vacía).
      await home.goto();
      await home.recorrerCompleto();
      const componente = new TabsCarrusel(page, TITULO);
      await componente.enfocar();
      await home.capturarEvidencia(cp, 2, 'carrusel con la imagen caida', {
        elemento: componente.root,
      });

      // Paso 3 — la shelf afectada, el resto del componente y la estabilidad de la página.
      //
      // La shelf se ubica por su POSICIÓN y no por su nombre: al fallar la imagen el componente
      // reemplaza el contenido de la tarjeta —se lleva por delante el <img>, su alt y el nombre
      // del producto—, así que ninguna de esas llaves sobrevive al caso que el TC quiere mirar.
      const estado = await componente.estadoDeLasShelves();
      expect(
        peticionesCortadas,
        `se cortó la petición de la imagen de "${productoAfectado}"`,
      ).toBeGreaterThan(0);
      const afectada = estado[iVisible];
      expect(afectada, 'la shelf afectada sigue presente en el carrusel').toBeTruthy();
      expect(
        afectada.imagenCargada,
        `la imagen de "${productoAfectado}" no cargó, que es la condición del caso`,
      ).toBe(false);

      const hueco = await componente.estadoDeImagenDe(iVisible);
      await home.capturarEvidencia(cp, 3, 'shelf sin imagen disponible', {
        elemento: componente.shelves.nth(iVisible),
      });
      expect(
        hueco.texto,
        `la shelf afectada muestra un estado de imagen no disponible; se observó: "${hueco.texto}"`,
      ).toMatch(/imagen no disponible/i);
      expect(
        hueco.alto,
        `la shelf conserva el espacio de la imagen (${hueco.alto}px) en vez de colapsar`,
      ).toBeGreaterThan(0);

      // El resto del componente, con normalidad, y la página entera en pie.
      const resto = estado.filter((_, i) => i !== iVisible);
      expect(
        resto.every((s) => s.imagenCargada),
        `el resto de las shelves muestra su imagen con normalidad; sin cargar: ${resto
          .filter((s) => !s.imagenCargada)
          .map((s) => s.nombre)
          .join(', ')}`,
      ).toBe(true);
      expect(
        resto.every((s) => s.tienePrecio && s.tieneAgregar),
        'el resto de las shelves conserva precio y acción de agregar',
      ).toBe(true);
      await expect(componente.encabezado, 'el componente sigue en pie').toBeVisible();
      await expect(componente.verTodos, 'el encabezado sigue completo').toBeVisible();
      expect(await componente.tabs.count(), 'la fila de tabs sigue completa').toBeGreaterThan(1);
      await home.capturarEvidencia(cp, 3, 'componente completo con la shelf afectada', {
        elemento: componente.root,
      });

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C77-M-015 · Verificar que el carrusel de la tab activa no supera el máximo de productos (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C77-M-015';
      test.setTimeout(300000);

      // Paso 1 y 2 — una tab cuya colección tiene más productos que el máximo. Se busca entre las
      // tabs del componente la que más productos muestre: el máximo por defecto que declara la HU
      // es 12, así que una tab que llegue a ese número es la que permite ver el tope.
      const { home, componente } = await abrirComponente(page);
      const tabs = await componente.nombresDeTabs();
      const conteos: { tab: string; productos: number; destino: string | null }[] = [];
      for (const t of tabs) {
        await componente.activarTab(t);
        conteos.push({
          tab: t,
          productos: await componente.shelves.count(),
          destino: await componente.verTodos.getAttribute('href'),
        });
      }
      const tope = conteos.reduce((a, b) => (b.productos > a.productos ? b : a));
      await componente.activarTab(tope.tab);
      await home.capturarEvidencia(cp, 2, `tab "${tope.tab}" activa`, { elemento: componente.root });

      // La colección de esa tab tiene que traer más productos que el carrusel, o el caso no
      // prueba nada: se comprueba abriendo su destino y leyendo el contador de la PLP.
      await componente.verTodos.click();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2500);
      // En Mobile la PLP no muestra el contador "N productos" (bug B2C-1138), así que el tamaño de
      // la colección se mide contando las tarjetas distintas que lista la PLP.
      const enLaColeccion = await contarProductosDeLaPLP(page);
      await home.capturarEvidencia(cp, 2, `coleccion de "${tope.tab}" con ${enLaColeccion} productos`);
      expect(
        enLaColeccion,
        `la colección de "${tope.tab}" tiene más productos que los ${tope.productos} del carrusel`,
      ).toBeGreaterThan(tope.productos);

      // Paso 3 — recorrer el carrusel entero y contar.
      expect(
        tope.productos,
        `el carrusel de "${tope.tab}" se detiene en el máximo de 12 productos aunque su colección tenga ${enLaColeccion}`,
      ).toBe(12);
      const excedidas = conteos.filter((c) => c.productos > 12);
      expect(
        excedidas.map((c) => `${c.tab}:${c.productos}`).join(', '),
        'ninguna tab supera el máximo de productos',
      ).toBe('');

      await home.capturarEvidencia(cp);
    });
  });
});
