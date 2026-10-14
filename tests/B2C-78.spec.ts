import { Page } from '@playwright/test';
import { test, expect } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { ModuloBomba } from './pages/ModuloBomba';
import { PDPPage } from './pages/PDPPage';
import { PLPCategoriaPage } from './pages/PLPCategoriaPage';

/**
 * B2C-78 — Módulo Bomba (variantes T5 logo lateral y T6 imagen inmersiva) del Home/Landing.
 *
 * En DEV el componente está publicado en el Home (`hp-bomba-hw`, typeId `ux_assets.bombaModule`)
 * **solo en la variante T5**, con esta configuración, que gobierna qué casos son observables:
 *
 * - `carouselControls: false`: el carrusel no trae flechas, solo barra de desplazamiento. Por eso
 *   D-003 (cuyo paso 2 es clicar los controles) queda `Bloqueado` y D-001 se aprueba con nota.
 * - `seeAllLabel` vacío: no hay enlace "Ver todos" (D-004 `Bloqueado`).
 * - Modo Colección con `frutas-y-verduras`, que en DEV tiene 6 productos: no hay una categoría
 *   con más productos que el máximo (12), así que D-017 no es observable.
 * - Los casos cuyo paso 1 es configurar Page Designer (T6, sin logo, sin fondo, sin fecha fin,
 *   variante inválida, categoría vacía o sin definir, modo OOB) quedan `Bloqueado`: el ambiente
 *   no ofrece esos estados.
 *
 * Aquí están los 8 TC observables.
 */

async function abrirModulo(page: Page) {
  const home = new HomePage(page);
  await home.goto();
  await home.recorrerCompleto();
  const modulo = new ModuloBomba(page);
  const root = await modulo.enfocar();
  return { home, modulo, root };
}

test.describe('B2C-78 — Módulo Bomba', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C78-D-001 · Presentacion T5 en Desktop: logo, bomba badge y carrusel (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C78-D-001';
      test.setTimeout(240000);

      // Paso 1 — la página con el componente en su variante T5.
      const { home, modulo, root } = await abrirModulo(page);
      const cfg = await modulo.config();
      expect(cfg?.presentation, 'la instancia publicada es la variante T5 (logo)').toMatch(/t5/i);
      await home.capturarEvidencia(cp, 1, 'modulo bomba T5 en el Home', { elemento: root });

      // Paso 2 — fondo, logo arriba a la izquierda, badge arriba a la derecha, carrusel de 4-5.
      const geo = await modulo.geometria();
      expect(geo.fondo, 'el bloque tiene color de fondo').not.toBe('rgba(0, 0, 0, 0)');
      expect(geo.logo, 'el componente muestra el logo').not.toBeNull();
      expect(geo.cuenta, 'el componente muestra el bomba badge (cuenta regresiva)').not.toBeNull();
      expect(
        geo.logo!.x,
        `el logo está a la izquierda (x=${geo.logo!.x}) y el badge a la derecha (x=${geo.cuenta!.x})`,
      ).toBeLessThan(geo.cuenta!.x);
      expect(geo.logo!.y, 'el logo está en la parte superior del componente').toBeLessThan(80);
      expect(geo.cuenta!.y, 'el badge está en la parte superior del componente').toBeLessThan(80);
      await expect(await modulo.cuentaRegresiva(), 'el badge muestra la cuenta regresiva').toHaveText(
        /\d+\s*d[ií]as?\s*:\s*\d+\s*horas?\s*:\s*\d+\s*minutos?\s*:\s*\d+\s*segundos?/i,
      );
      const visibles = await modulo.slidesVisibles();
      expect(visibles, `el carrusel muestra 4-5 ítems (son ${visibles})`).toBeGreaterThanOrEqual(4);
      expect(visibles, `el carrusel muestra 4-5 ítems (son ${visibles})`).toBeLessThanOrEqual(5);
      // Los controles los decide la configuración: en DEV vienen desactivados.
      const controles = await (await modulo.controles()).count();
      expect(
        controles > 0,
        `los controles se muestran según la configuración (carouselControls=${cfg?.carouselControls})`,
      ).toBe(Boolean(cfg?.carouselControls));
      await home.capturarEvidencia(cp, 2, 'logo, badge y carrusel', { elemento: root });

      // Paso 3 — el logo redirige a su enlace.
      const enlace = await modulo.enlaceDelLogo();
      const destino = await enlace.getAttribute('href');
      expect(destino, 'el logo tiene enlace configurado').toBeTruthy();
      await enlace.click();
      await page.waitForURL((u) => u.pathname !== '/', { timeout: 30000 });
      await page.waitForTimeout(2500);
      expect(new URL(page.url()).pathname, `el logo lleva a ${destino}`).toBe(destino);
      await home.capturarEvidencia(cp, 3, 'destino del logo');

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C78-D-005 · Clic en la shelf de un producto redirige a su PDP (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C78-D-005';
      test.setTimeout(240000);

      const { home, modulo, root } = await abrirModulo(page);
      await home.capturarEvidencia(cp, 1, 'carrusel del modulo bomba', { elemento: root });

      // Paso 2 — clic en la imagen de una tarjeta (el autoplay se detiene para poder clicar).
      await modulo.detenerAutoplay();
      const i = await modulo.indiceDeTarjetaVisible();
      const tarjeta = await modulo.tarjeta(i);
      await (await modulo.slide(i)).locator('a:has(img)').first().click();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(3000);
      await home.capturarEvidencia(cp, 2, `PDP tras pulsar "${tarjeta.nombre}"`);

      // Paso 3 — la PDP del producto elegido, con su contenido.
      expect(new URL(page.url()).pathname, 'el clic lleva a la PDP del producto').toBe(tarjeta.href);
      const pdp = new PDPPage(page);
      await expect(pdp.core, 'la PDP carga la ficha del producto').toBeVisible({ timeout: 30000 });
      await home.capturarEvidencia(cp, 3, 'PDP del producto cargada');

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C78-D-006 · Agregar producto con stock al carro desde el Modulo Bomba actualiza el indicador (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C78-D-006';
      test.setTimeout(240000);

      const { home, modulo, root } = await abrirModulo(page);
      await modulo.detenerAutoplay();
      const antes = (await home.header.conteoAnunciadoCarrito()) ?? 0;
      await home.capturarEvidencia(cp, 1, `carro con ${antes} productos`);

      // Paso 2 — "Agregar" en una tarjeta con stock (las que tienen el botón lo tienen).
      const i = await modulo.indiceDeTarjetaVisible();
      const slide = await modulo.slide(i);
      const tarjeta = await modulo.tarjeta(i);
      const agregar = slide.getByRole('button', { name: /^agregar$/i });
      await expect(agregar, `"${tarjeta.nombre}" tiene stock (botón Agregar)`).toBeVisible();
      await agregar.click();

      // Paso 3 — el indicador del carro sube.
      await expect
        .poll(async () => (await home.header.conteoAnunciadoCarrito()) ?? 0, {
          message: 'el indicador del carro se actualiza con la nueva cantidad',
          timeout: 20000,
        })
        .toBe(antes + 1);
      await expect(slide, 'la tarjeta pasa al stepper de cantidad').toContainText(/1/);
      await home.capturarEvidencia(cp, 3, `"${tarjeta.nombre}" agregado`, { elemento: root });
      await home.capturarEvidencia(cp, 3, 'indicador del carro actualizado', {
        elemento: home.header.miniCarrito.first(),
      });

      await home.capturarEvidencia(cp);
    });

    test("TC-B2C78-D-012 · Error en la carga de una imagen (logo, fondo o badge) muestra estado 'imagen no disponible' (Desktop)", async ({
      page,
      browser,
    }) => {
      const cp = 'TC-B2C78-D-012';
      test.setTimeout(240000);

      // Paso 1 — identificar la imagen del logo. Se lee la configuración en un contexto aparte:
      // si la imagen entra en la caché de la página del caso, la recarga la sirve de ahí y la
      // petición bloqueada nunca sale (mismo efecto que en B2C-77).
      const ctxPrevio = await browser.newContext(DESKTOP);
      const previa = await ctxPrevio.newPage();
      await new HomePage(previa).goto();
      const cfg = await new ModuloBomba(previa).config();
      await ctxPrevio.close();
      const archivo = (cfg?.logoImage?.url ?? '').split('?')[0].split('/').pop() ?? '';
      expect(archivo, 'se identificó el archivo del logo').not.toBe('');
      let cortadas = 0;
      await page.route(
        (u) => u.href.includes(archivo),
        (r) => {
          cortadas += 1;
          return r.abort();
        },
      );

      // Paso 2 — el Home con el logo caído.
      const { home, modulo, root } = await abrirModulo(page);
      await home.capturarEvidencia(cp, 2, 'modulo bomba con el logo caido', { elemento: root });
      expect(cortadas, `se cortó la petición de ${archivo}`).toBeGreaterThan(0);

      // Paso 3 — el logo muestra "imagen no disponible" y el resto sigue normal.
      const logo = await modulo.estadoDelLogo();
      expect(logo.cargada, 'el logo no cargó, que es la condición del caso').toBe(false);
      expect(
        logo.texto,
        `el lugar del logo muestra un estado de imagen no disponible; se observó: "${logo.texto}" (alto ${logo.alto}px, img=${logo.hayImg})`,
      ).toMatch(/imagen no disponible/i);
      await expect(await modulo.cuentaRegresiva(), 'el badge sigue visible').toBeVisible();
      expect(await modulo.slidesVisibles(), 'el carrusel sigue mostrando productos').toBeGreaterThan(0);
      await home.capturarEvidencia(cp, 3, 'estado del componente con el logo caido', { elemento: root });

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C78-D-013 · Estructura comun: fondo a todo el ancho de pantalla y padding alineado al Header (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C78-D-013';
      test.setTimeout(240000);

      const { home, modulo } = await abrirModulo(page);
      await home.capturarEvidencia(cp, 1, 'modulo bomba en el Home');

      // Paso 2 — el fondo de borde a borde.
      const geo = await modulo.geometria();
      expect(geo.fondo, 'el bloque tiene color de fondo').not.toBe('rgba(0, 0, 0, 0)');
      expect(geo.componente.x, 'el fondo arranca en el borde izquierdo').toBe(0);
      expect(
        geo.componente.ancho,
        `el fondo abarca el ancho de la pantalla (${geo.componente.ancho} de ${geo.viewport})`,
      ).toBe(geo.viewport);
      await home.capturarEvidencia(cp, 2, 'fondo de borde a borde');

      // Paso 3 — logo, badge y carrusel con el padding lateral del Header.
      expect(geo.headerX, 'se midió dónde arranca el contenido del Header').toBeGreaterThan(0);
      expect(geo.logo!.x, `el logo arranca donde el Header (${geo.headerX}px)`).toBe(geo.headerX);
      expect(geo.carruselX, `el carrusel arranca donde el Header (${geo.headerX}px)`).toBe(geo.headerX);
      expect(
        geo.cuenta!.derecha,
        `el badge termina con el mismo margen derecho (${geo.viewport - geo.headerX}px)`,
      ).toBe(geo.viewport - geo.headerX);
      await home.capturarEvidencia(cp, 3, 'contenido alineado con el Header', {
        elemento: await modulo.root(),
      });

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C78-D-015 · Atributo opcional faltante se omite sin afectar el resto del componente (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C78-D-015';
      test.setTimeout(240000);

      // Paso 1 — la instancia de DEV ya trae atributos opcionales sin definir: el alt del logo
      // (no hay campo de alt configurado) y la etiqueta "Ver todos" (`seeAllLabel` vacío).
      const { home, modulo, root } = await abrirModulo(page);
      const cfg = await modulo.config();
      const altConfigurado = Object.keys(cfg ?? {}).filter((k) => /alt/i.test(k) && cfg![k]);
      expect(altConfigurado, 'la instancia no tiene alt de logo configurado').toEqual([]);
      expect(cfg?.seeAllLabel ?? '', 'la instancia no tiene etiqueta "Ver todos"').toBe('');
      await home.capturarEvidencia(cp, 2, 'modulo bomba con opcionales sin definir', { elemento: root });

      // Paso 3 — el componente se renderiza completo.
      const logo = await modulo.estadoDelLogo();
      expect(logo.cargada, 'el logo se muestra').toBe(true);
      await expect(await modulo.cuentaRegresiva(), 'el badge se muestra').toBeVisible();
      expect(await modulo.slidesVisibles(), 'el carrusel muestra productos').toBeGreaterThan(0);

      // Paso 4 — solo se omite lo asociado al opcional: no hay enlace "Ver todos" y el logo cae
      // a un alt genérico, sin afectar al resto.
      await expect(
        root.locator('a, button').filter({ hasText: /ver todos?|mostrar todo/i }),
        'sin etiqueta configurada no se muestra el enlace "Ver todos"',
      ).toHaveCount(0);
      const alt = await (await modulo.logo()).getAttribute('alt');
      await home.capturarEvidencia(cp, 4, `logo con alt "${alt}" y sin enlace Ver todos`, { elemento: root });

      await home.capturarEvidencia(cp);
    });
  });

  test.describe('Desktop 1440x900 — re-corrida 2026-10-09', () => {
    test.use(DESKTOP);

    test('TC-B2C78-D-017 · El carrusel en modo Coleccion no muestra mas productos que el maximo configurado (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C78-D-017';
      test.setTimeout(240000);

      // Paso 1 — la instancia publicada: modo Colección, su categoría y su máximo. La fila no la
      // configura: se certifica sobre la que ya está publicada en el Home de DEV.
      const { home, modulo, root } = await abrirModulo(page);
      const cfg = await modulo.config();
      expect(cfg?.populationMode, 'el componente está en modo Colección').toBe('collection');
      const maximo = Number(cfg?.maxProducts);
      const categoria = String(cfg?.category ?? '');
      expect(maximo, 'máximo configurado').toBeGreaterThan(0);

      // Precondición — la categoría tiene más productos que el máximo.
      const plp = new PLPCategoriaPage(page, `category/${categoria}`);
      await plp.goto();
      const enCategoria = await plp.productosDeclarados();
      await plp.capturarEvidencia(cp, 1, `categoría ${categoria} con ${enCategoria} productos`);
      expect(enCategoria ?? 0, `la categoría ${categoria} tiene más productos que el máximo (${maximo})`).toBeGreaterThan(maximo);

      // Pasos 2 y 3 — el Home en Desktop y los productos del carrusel, recorrido entero.
      await home.goto();
      await home.recorrerCompleto();
      await modulo.enfocar();
      await modulo.detenerAutoplay();
      const total = await (await modulo.slides()).count();
      const skus = new Set<string>();
      for (let i = 0; i < total; i++) skus.add((await modulo.tarjeta(i)).sku);
      test.info().annotations.push({ type: 'conteo', description: `máximo ${maximo} · categoría ${categoria}: ${enCategoria} · carrusel: ${skus.size} productos (${total} slides)` });
      await home.capturarEvidencia(cp, 3, `carrusel con ${skus.size} productos (máximo ${maximo})`, { elemento: root });

      // Esperado — como máximo la cantidad configurada.
      expect(skus.size, `productos distintos en el carrusel (máximo ${maximo})`).toBeLessThanOrEqual(maximo);
      expect(skus.size, 'con una categoría más grande, el carrusel llega al máximo').toBe(maximo);
      await home.capturarEvidencia(cp);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C78-M-001 · Presentacion T5 en Mobile: carrusel con 2 items (Mobile)', async ({ page }) => {
      const cp = 'TC-B2C78-M-001';
      test.setTimeout(240000);

      const { home, modulo, root } = await abrirModulo(page);
      await home.capturarEvidencia(cp, 1, 'modulo bomba en el Home Mobile');

      const geo = await modulo.geometria();
      expect(geo.logo, 'el componente muestra el logo').not.toBeNull();
      expect(geo.cuenta, 'el componente muestra el bomba badge').not.toBeNull();
      await expect(await modulo.cuentaRegresiva(), 'el badge muestra la cuenta regresiva').toHaveText(
        /\d+\s*d[ií]as?\s*:.*segundos?/i,
      );
      const visibles = await modulo.slidesVisibles();
      expect(visibles, `el carrusel muestra 2 ítems por slide (son ${visibles})`).toBe(2);
      await home.capturarEvidencia(cp, 2, 'logo, badge y carrusel de 2 items', { elemento: root });

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C78-M-003 · Deslizamiento tactil del carrusel en Mobile (Mobile)', async ({ page }) => {
      const cp = 'TC-B2C78-M-003';
      test.setTimeout(240000);

      const { home, modulo, root } = await abrirModulo(page);
      // El autoplay se detiene para que el avance medido sea el del gesto y no el automático.
      await modulo.detenerAutoplay();
      const antes = await modulo.estadoDelCarrusel();
      const primera = await modulo.tarjeta(await modulo.indiceDeTarjetaVisible());
      await home.capturarEvidencia(cp, 1, 'carrusel antes de deslizar', { elemento: root });

      // Con 6 tarjetas y 2 visibles, el autoplay puede haber dejado el carrusel al final: en ese
      // caso el gesto va hacia atrás, que es el único sentido con recorrido.
      const alFinal = await modulo.estaAlFinal();
      await modulo.arrastrar(alFinal);
      const despues = await modulo.estadoDelCarrusel();
      const ahora = await modulo.tarjeta(await modulo.indiceDeTarjetaVisible());
      await home.capturarEvidencia(cp, 2, 'carrusel tras deslizar', { elemento: root });

      expect(
        despues.indiceActivo,
        `el carrusel se desplaza al deslizar ${alFinal ? 'hacia atrás' : 'hacia adelante'} (índice ${antes.indiceActivo} → ${despues.indiceActivo})`,
      ).not.toBe(antes.indiceActivo);
      expect(ahora.nombre, 'el deslizamiento muestra otros productos').not.toBe(primera.nombre);

      await home.capturarEvidencia(cp);
    });
  });
});
