import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { CarruselProductos } from './pages/CarruselProductos';

/**
 * B2C-75 — Carrusel de productos del Home/Landing (variantes T1, T2 y T3).
 *
 * De los 27 TC de la planilla, aquí están los 13 web ejecutables:
 *
 * - **9 son `-BM-`** (configuración en Page Designer): `Fuera de alcance`.
 * - **5 quedaron bloqueados en la exploración** y no tienen `test()`: T2 no está configurada en
 *   DEV (D-003, M-002), ninguna T1 tiene el título centrado (D-013), y D-010 / D-011 / D-014
 *   piden un estado que solo Page Designer produce (categoría sin productos, imagen rota, máximo
 *   configurado conocido). D-009 declara un SKU sin stock que no está en ningún carrusel.
 *
 * **Cómo se atribuye la variante.** Este componente NO publica `data-variant` (a diferencia del
 * collage de B2C-83), así que se identifica por el id de Page Designer y su disposición:
 *
 * - `hp-pc-frescura` ("Frescura y calidad") — **T1**: banner lateral izquierdo de 480 px y el
 *   carrusel a su derecha con 2 items + parcial; título a la izquierda con "Mostrar todo" en su
 *   misma fila. "Chocolates Milka" y "Especial Bebidas" son otras dos instancias T1.
 * - `hp-pc-masvendidos` ("Los más vendidos") — **T3**: título centrado sobre un carrusel de
 *   5 items, "Mostrar todo" alineado a la derecha.
 *
 * El carrusel es un Swiper con autoplay de 3 s: el POM mide con el carril quieto y detiene el
 * autoplay antes de hacer clic en una shelf.
 */

const T1 = 'hp-pc-frescura';
const T3 = 'hp-pc-masvendidos';

/** Tolerancia en px para alineaciones (bordes redondeados, sub-píxeles). */
const TOL = 6;

async function abrirCarrusel(page: Page, componenteId: string) {
  const home = new HomePage(page);
  await home.goto();
  await home.cookies.aceptarSiAparece();
  await home.recorrerCompleto();
  const carrusel = new CarruselProductos(page, componenteId);
  await expect(carrusel.root, `el Home trae el componente ${componenteId}`).toBeVisible();
  await carrusel.enfocar();
  return { home, carrusel };
}

test.describe('B2C-75 — Carrusel de productos', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C75-D-001 · Presentacion T1 en Desktop con titulo a la izquierda: banner lateral + carrusel + enlace Mostrar todo junto al titulo (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C75-D-001';
      test.setTimeout(180000);

      // Pasos 1-2 — el componente T1 (título a la izquierda) en Desktop.
      const { home, carrusel } = await abrirCarrusel(page, T1);
      await home.capturarEvidencia(cp, 2, 'componente T1 en el Home', { elemento: carrusel.root });

      // Paso 3 — disposición del banner y el carrusel.
      const g = await carrusel.geometria();
      expect(g.banner, 'el componente T1 muestra un banner').not.toBeNull();
      expect(g.banner!.derecha, 'el banner queda a la izquierda del carrusel').toBeLessThanOrEqual(g.carrusel.x);
      expect(g.banner!.x, 'el banner arranca en la zona lateral izquierda').toBeLessThan(g.viewport / 4);
      expect(g.itemsCompletos, 'el carrusel muestra 2 items completos').toBe(2);
      expect(g.itemsVisibles - g.itemsCompletos, '... más uno parcial').toBeGreaterThanOrEqual(1);
      await home.capturarEvidencia(cp, 3, 'banner a la izquierda y carrusel con 2 items + parcial', {
        elemento: carrusel.root,
      });

      // Paso 4 — "Mostrar todo" a la derecha del título, en su misma fila; etiqueta sobre el banner.
      expect(g.titulo, 'el componente tiene título').not.toBeNull();
      expect(g.mostrarTodo, 'el componente muestra el enlace Mostrar todo').not.toBeNull();
      expect(g.titulo!.x, 'el título está a la izquierda (alineado con el carrusel)').toBeLessThanOrEqual(
        g.carrusel.x + TOL,
      );
      expect(g.mostrarTodo!.x, 'Mostrar todo está a la derecha del título').toBeGreaterThan(g.titulo!.derecha);
      expect(
        g.mostrarTodo!.y < g.titulo!.abajo && g.mostrarTodo!.abajo > g.titulo!.y,
        `Mostrar todo comparte fila con el título (título y=${g.titulo!.y}-${g.titulo!.abajo}, enlace y=${g.mostrarTodo!.y}-${g.mostrarTodo!.abajo})`,
      ).toBe(true);
      const etiquetas = await carrusel.etiquetasDelBanner();
      for (const e of etiquetas) {
        expect(e.dentroDelBanner, `la etiqueta "${e.texto}" se pinta sobre el banner`).toBe(true);
      }
      await home.capturarEvidencia(cp, 4, `Mostrar todo junto al título; etiqueta ${etiquetas.map((e) => e.texto).join(', ') || '(no configurada)'}`, {
        elemento: carrusel.root,
      });
    });

    test('TC-B2C75-D-002 · Clic en el banner de la variante T1 navega al enlace configurado (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C75-D-002';
      test.setTimeout(180000);

      const { home, carrusel } = await abrirCarrusel(page, T1);
      const href = await carrusel.banner.getAttribute('href');
      expect(href, 'el banner declara un enlace').toBeTruthy();
      await home.capturarEvidencia(cp, 1, 'banner de la variante T1', { elemento: carrusel.root });

      // Paso 2 — clic en el banner.
      await carrusel.clicBanner();

      // Paso 3 — la navegación llega al enlace configurado.
      const destino = new URL(href!, page.url()).pathname;
      await expect(page, `el clic lleva a ${destino}`).toHaveURL((u) => u.pathname === destino, { timeout: 30000 });
      await page.waitForTimeout(1500);
      await home.capturarEvidencia(cp, 3, `página de destino del banner (${destino})`);
    });

    test('TC-B2C75-D-004 · Presentacion T3 en Desktop: titulo centrado y carrusel con 5 items (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C75-D-004';
      test.setTimeout(180000);

      const { home, carrusel } = await abrirCarrusel(page, T3);
      await home.capturarEvidencia(cp, 1, 'componente T3 en el Home', { elemento: carrusel.root });

      // Paso 2 — título, fondo y carrusel.
      const g = await carrusel.geometria();
      const centroTitulo = g.titulo!.x + g.titulo!.ancho / 2;
      const centroCarrusel = g.carrusel.x + g.carrusel.ancho / 2;
      expect(
        Math.abs(centroTitulo - centroCarrusel),
        `el título está centrado (centro ${centroTitulo} vs ${centroCarrusel})`,
      ).toBeLessThanOrEqual(TOL * 2);
      expect(g.fondo, 'el bloque pinta un color de fondo').not.toBeNull();
      expect(g.carrusel.y, 'el carrusel está debajo del título').toBeGreaterThanOrEqual(g.titulo!.abajo);
      expect(g.itemsVisibles, 'el carrusel muestra 5 items').toBe(5);
      await home.capturarEvidencia(cp, 2, `título centrado, fondo ${g.fondo?.color}, 5 items`, {
        elemento: carrusel.root,
      });

      // Paso 3 — "Mostrar todo" alineado a la derecha.
      expect(g.mostrarTodo, 'el componente muestra Mostrar todo').not.toBeNull();
      expect(
        Math.abs(g.mostrarTodo!.derecha - g.carrusel.derecha),
        `Mostrar todo está alineado al borde derecho (${g.mostrarTodo!.derecha} vs ${g.carrusel.derecha})`,
      ).toBeLessThanOrEqual(TOL);
      await home.capturarEvidencia(cp, 3, 'Mostrar todo alineado a la derecha', { elemento: carrusel.root });
    });

    test('TC-B2C75-D-005 · Navegacion por el carrusel con controles y autoplay en Desktop (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C75-D-005';
      test.setTimeout(180000);

      const { home, carrusel } = await abrirCarrusel(page, T1);
      await carrusel.esperarQuieto();
      await home.capturarEvidencia(cp, 1, 'carrusel antes de navegar', { elemento: carrusel.root });

      // Paso 2 — clic en el control Siguiente.
      const antes = await carrusel.desplazamiento();
      await carrusel.clicSiguiente();
      await carrusel.esperarQuieto();
      const trasClic = await carrusel.desplazamiento();
      expect(trasClic, `el carrusel avanza con el control (${antes} → ${trasClic})`).not.toBe(antes);
      await home.capturarEvidencia(cp, 2, 'carrusel tras clic en Siguiente', { elemento: carrusel.root });

      // Paso 3 — sin interactuar, el carrusel se desplaza solo cada 3 s.
      await page.mouse.move(5, 5);
      const quieto = await carrusel.desplazamiento();
      const t0 = Date.now();
      await expect
        .poll(() => carrusel.desplazamiento(), { timeout: 5000, intervals: [200] })
        .not.toBe(quieto);
      const segundos = (Date.now() - t0) / 1000;
      expect(segundos, `el autoplay avanza en ~3 s (${segundos.toFixed(1)} s)`).toBeLessThanOrEqual(4);
      await carrusel.esperarQuieto();
      await home.capturarEvidencia(cp, 3, `avance automático sin interacción (${segundos.toFixed(1)} s)`, {
        elemento: carrusel.root,
      });
    });

    test('TC-B2C75-D-006 · Clic en Mostrar todo redirige al destino configurado (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C75-D-006';
      test.setTimeout(180000);
      const categoria = new URL(token(testData, 'CATEGORY_N1_URL')!).pathname;

      const { home, carrusel } = await abrirCarrusel(page, T3);
      const href = await carrusel.mostrarTodo.getAttribute('href');
      await home.capturarEvidencia(cp, 1, `carrusel con Mostrar todo (${href})`, { elemento: carrusel.root });

      // Paso 2 — clic en Mostrar todo.
      await carrusel.clicMostrarTodo();

      // Paso 3 — redirige al destino configurado.
      const destino = new URL(href!, page.url()).pathname;
      expect(destino, 'el enlace apunta a la categoría declarada en el TC').toBe(categoria);
      await expect(page, `redirige a ${destino}`).toHaveURL((u) => u.pathname === destino, { timeout: 30000 });
      await page.waitForTimeout(1500);
      await home.capturarEvidencia(cp, 3, `PLP de destino (${destino})`);
    });

    test('TC-B2C75-D-007 · Clic en la shelf de un producto redirige a su PDP (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C75-D-007';
      test.setTimeout(180000);
      const sku = token(testData, 'SKU_VALID_001')!;

      const { home, carrusel } = await abrirCarrusel(page, T3);
      const shelf = await carrusel.traerShelf(sku);
      await home.capturarEvidencia(cp, 1, `shelf del producto ${sku} en el carrusel`, { elemento: carrusel.root });
      await expect(shelf).toBeVisible();

      // Paso 2 — clic en el nombre del producto.
      await carrusel.clicProducto(sku);

      // Paso 3 — la PDP del producto seleccionado.
      await expect(page, `redirige a la PDP del SKU ${sku}`).toHaveURL(new RegExp(`${sku}\\.html`), {
        timeout: 30000,
      });
      await page.waitForTimeout(1500);
      await home.capturarEvidencia(cp, 3, 'PDP del producto seleccionado');
    });

    test('TC-B2C75-D-008 · Agregar producto con stock al carro desde el carrusel actualiza el indicador (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C75-D-008';
      test.setTimeout(180000);
      const sku = token(testData, 'SKU_VALID_001')!;

      const { home, carrusel } = await abrirCarrusel(page, T3);
      const antes = (await home.header.conteoAnunciadoCarrito()) ?? 0;
      await carrusel.traerShelf(sku);
      await home.capturarEvidencia(cp, 1, `carrusel con el producto ${sku}; carro en ${antes}`, {
        elemento: carrusel.root,
      });

      // Paso 2 — Agregar desde la shelf.
      await carrusel.clicAgregar(sku);

      // Paso 3 — el indicador del carro se actualiza.
      await expect
        .poll(async () => (await home.header.conteoAnunciadoCarrito()) ?? 0, { timeout: 20000 })
        .toBeGreaterThan(antes);
      const despues = await home.header.conteoAnunciadoCarrito();
      await home.capturarEvidencia(cp, 2, 'shelf tras Agregar', { elemento: carrusel.shelfDe(sku) });
      await home.capturarEvidencia(cp, 3, `indicador del carro en ${despues}`, { elemento: home.header.root });
    });

    test('TC-B2C75-D-012 · Estructura comun del componente: fondo a todo el ancho de pantalla y padding alineado al Header (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C75-D-012';
      test.setTimeout(180000);

      const { home, carrusel } = await abrirCarrusel(page, T1);
      await home.capturarEvidencia(cp, 1, 'componente en el Home', { elemento: carrusel.root });

      // Paso 2 — el bloque va de borde a borde.
      const g = await carrusel.geometria();
      expect(g.componente.x, 'el componente arranca en el borde izquierdo').toBe(0);
      expect(g.componente.ancho, `el componente ocupa todo el ancho (${g.componente.ancho}/${g.viewport})`).toBe(
        g.viewport,
      );

      // Paso 3 — el contenido se alinea con el padding lateral del Header.
      const logo = await home.header.logo.first().boundingBox();
      const carro = await home.header.miniCarrito.first().boundingBox();
      const izq = Math.round(logo!.x);
      const der = Math.round(carro!.x + carro!.width);
      const contenidoIzq = g.banner?.x ?? g.carrusel.x;
      const contenidoDer = Math.max(g.carrusel.derecha, g.mostrarTodo?.derecha ?? 0);
      expect(Math.abs(contenidoIzq - izq), `borde izquierdo: contenido ${contenidoIzq} vs Header ${izq}`).toBeLessThanOrEqual(TOL);
      expect(Math.abs(contenidoDer - der), `borde derecho: contenido ${contenidoDer} vs Header ${der}`).toBeLessThanOrEqual(TOL);
      await page.evaluate(() => window.scrollTo(0, 0));
      await home.capturarEvidencia(cp, 3, `Header con padding ${izq}px / ${g.viewport - der}px`, {
        elemento: home.header.root,
      });
      await carrusel.enfocar();
      await home.capturarEvidencia(cp, 3, `contenido del componente de x=${contenidoIzq} a x=${contenidoDer}`);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C75-M-001 · Presentacion T1 en Mobile: banner arriba + carrusel debajo (Mobile)', async ({ page }) => {
      const cp = 'TC-B2C75-M-001';
      test.setTimeout(180000);

      const { home, carrusel } = await abrirCarrusel(page, T1);
      await home.capturarEvidencia(cp, 1, 'componente T1 en Mobile', { elemento: carrusel.root });

      // Paso 2 — banner arriba, carrusel debajo con 2 items.
      const g = await carrusel.geometria();
      expect(g.banner, 'el componente T1 muestra un banner').not.toBeNull();
      expect(g.banner!.abajo, 'el banner queda arriba del carrusel').toBeLessThanOrEqual(g.carrusel.y);
      expect(g.itemsVisibles, 'el carrusel muestra 2 items por slide').toBe(2);
      await home.capturarEvidencia(cp, 2, 'banner arriba y carrusel con 2 items debajo', { elemento: carrusel.root });
    });

    test('TC-B2C75-M-003 · Presentacion T3 en Mobile: carrusel con 2 items (Mobile)', async ({ page }) => {
      const cp = 'TC-B2C75-M-003';
      test.setTimeout(180000);

      const { home, carrusel } = await abrirCarrusel(page, T3);
      await home.capturarEvidencia(cp, 1, 'componente T3 en Mobile', { elemento: carrusel.root });

      // Paso 2 — título centrado y carrusel debajo con 2 items.
      const g = await carrusel.geometria();
      const centroTitulo = g.titulo!.x + g.titulo!.ancho / 2;
      const centroCarrusel = g.carrusel.x + g.carrusel.ancho / 2;
      expect(
        Math.abs(centroTitulo - centroCarrusel),
        `el título está centrado (centro ${centroTitulo} vs ${centroCarrusel})`,
      ).toBeLessThanOrEqual(TOL * 2);
      expect(g.carrusel.y, 'el carrusel está debajo del título').toBeGreaterThanOrEqual(g.titulo!.abajo);
      expect(g.itemsVisibles, 'el carrusel muestra 2 items por slide').toBe(2);
      await home.capturarEvidencia(cp, 2, 'título centrado y 2 items', { elemento: carrusel.root });

      // Paso 3 — "Mostrar todo" presente y alineado a la derecha.
      expect(g.mostrarTodo, 'el componente muestra Mostrar todo').not.toBeNull();
      expect(
        Math.abs(g.mostrarTodo!.derecha - g.carrusel.derecha),
        `Mostrar todo está alineado a la derecha (${g.mostrarTodo!.derecha} vs ${g.carrusel.derecha})`,
      ).toBeLessThanOrEqual(TOL);
      await home.capturarEvidencia(cp, 3, 'Mostrar todo alineado a la derecha', { elemento: carrusel.root });
    });

    test('TC-B2C75-M-004 · Deslizamiento tactil del carrusel en Mobile (Mobile)', async ({ page }) => {
      const cp = 'TC-B2C75-M-004';
      test.setTimeout(180000);

      const { home, carrusel } = await abrirCarrusel(page, T3);
      await carrusel.detenerAutoplay();
      const antes = await carrusel.desplazamiento();
      await home.capturarEvidencia(cp, 1, 'carrusel antes de deslizar', { elemento: carrusel.root });

      // Paso 2 — deslizar horizontalmente sobre el carrusel.
      await carrusel.deslizar();
      await carrusel.esperarQuieto();
      const despues = await carrusel.desplazamiento();
      expect(despues, `el carrusel se desplaza al deslizar (${antes} → ${despues})`).toBeLessThan(antes);
      await home.capturarEvidencia(cp, 2, 'carrusel tras deslizar: muestra otros productos', {
        elemento: carrusel.root,
      });
    });
  });
});
