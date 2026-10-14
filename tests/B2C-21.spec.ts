import { test, expect, token } from './support/fixtures';
import { MOBILE } from './support/viewports';
import { StorefrontPage } from './pages/StorefrontPage';

/**
 * B2C-21 — Modal de categorías en Mobile web.
 *
 * Un `test()` por fila de la planilla, con el CP-ID abriendo el título y el sufijo (Mobile) que
 * enruta el caso al project `mobile` (motor webkit).
 *
 * Los cinco TC `-APP-` de la suite no están aquí: son de la app nativa, que no se conduce con
 * Playwright. Quedan `Fuera de alcance` en la planilla, no `Bloqueado`.
 */

/** El ancho del viewport que declaran los TC, para medir qué entra en el primer slide. */
const ANCHO_MOBILE = 390;

test.describe('B2C-21 — Modal de categorias Mobile web', () => {
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C21-M-001 · Apertura del modal de categorias con el icono sandwich en Mobile web (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C21-M-001';
      const home = new StorefrontPage(page);

      // Paso 1 — navegar a una pantalla en Mobile web.
      await home.goto();
      await home.capturarEvidencia(cp, 1, 'Home en Mobile con el icono sandwich en el header');

      // Paso 2 y 3 — clic en el icono sandwich y verificar la apertura.
      const modal = await home.abrirModalCategorias();
      await expect(modal.root).toBeVisible();
      await expect(modal.titulo).toHaveText(/categor[íi]as/i);

      // Se despliega mostrando las categorías N1 activas.
      expect(await modal.cabecerasN1.count()).toBeGreaterThan(0);
      expect(await modal.pildoras.count()).toBeGreaterThan(1);
      await home.capturarEvidencia(cp, 3, 'modal de categorias desplegado', { elemento: modal.root });

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: modal.root });
    });

    test('TC-B2C21-M-002 · Estructura del modal de categorias en Mobile web (Mobile)', async ({ page }) => {
      const cp = 'TC-B2C21-M-002';
      const home = new StorefrontPage(page);

      // Paso 1 — abrir el modal.
      await home.goto();
      const modal = await home.abrirModalCategorias();
      await home.capturarEvidencia(cp, 1, 'modal de categorias abierto', { elemento: modal.root });

      // Paso 2 — verificar título, icono X, botón 'Todas' y el carrusel de N1.
      await expect(modal.titulo).toHaveText(/categor[íi]as/i);
      await expect(modal.botonCerrar).toBeVisible();
      await expect(modal.pildoraTodas).toHaveText(/todas/i);
      expect(await modal.pildoras.count()).toBeGreaterThan(1);

      // El carrusel de N2 debajo de cada top categoría.
      expect(await modal.cabecerasN1.count()).toBeGreaterThan(0);
      expect(await modal.tarjetasN2.count()).toBeGreaterThan(0);
      const conSubcategorias = await modal.tarjetasDeSeccion('Carnes');
      expect(conSubcategorias.length).toBeGreaterThan(0);

      await home.capturarEvidencia(cp, 2, 'titulo, X, boton Todas y carrusel de categorias N1', {
        elemento: modal.root,
      });
      await home.capturarEvidencia(cp, undefined, undefined, { elemento: modal.root });
    });

    test('TC-B2C21-M-003 · Comportamiento del carrusel de top categorias (pildoras) (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C21-M-003';
      const home = new StorefrontPage(page);

      // Paso 1 — abrir el modal (el ambiente tiene más de 3 top categorías configuradas).
      await home.goto();
      const modal = await home.abrirModalCategorias();
      expect(await modal.pildoras.count()).toBeGreaterThan(4);
      await home.capturarEvidencia(cp, 1, 'carrusel de top categorias', { elemento: modal.carrusel });

      // Paso 2 — el botón 'Todas' y los botones visibles en el primer slide.
      await expect(modal.pildoraTodas).toHaveText(/todas/i);
      const primerSlide = await modal.pildorasEnPrimerSlide(ANCHO_MOBILE);
      expect(primerSlide[0]).toMatch(/todas/i);
      // 'Todas' más como mucho 3 categorías asomando en el ancho del viewport.
      expect(primerSlide.length - 1).toBeLessThanOrEqual(3);
      await home.capturarEvidencia(cp, 2, 'boton Todas y los botones del primer slide', {
        elemento: modal.carrusel,
      });

      // Paso 3 — el carrusel se desliza horizontalmente para llegar al resto.
      const { scrollWidth, clientWidth } = await modal.carruselDesplazableHorizontal();
      expect(scrollWidth).toBeGreaterThan(clientWidth);
      await home.capturarEvidencia(cp, 3, 'el carrusel desborda su contenedor y admite deslizamiento', {
        elemento: modal.carrusel,
      });

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: modal.root });
    });

    test('TC-B2C21-M-004 · Redireccion al hacer clic en una top categoria del carrusel (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C21-M-004';
      const home = new StorefrontPage(page);

      // Paso 1 — abrir el modal.
      await home.goto();
      const modal = await home.abrirModalCategorias();
      await home.capturarEvidencia(cp, 1, 'modal abierto con el carrusel de top categorias', {
        elemento: modal.carrusel,
      });

      // Paso 2 — clic sobre una top categoría del carrusel.
      await modal.clicPildora('Carnes');

      // Paso 3 — verificar la redirección a la PLP de la categoría N1.
      await page.waitForURL(/\/category\/carnes$/, { timeout: 30000 });
      expect(new URL(page.url()).pathname).toBe('/category/carnes');
      await expect(modal.root).not.toBeVisible();
      await home.capturarEvidencia(cp, 3, 'PLP de la categoria N1 Carnes');

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C21-M-005 · Estructura del menu de categorias N1 y subcategorias N2 (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C21-M-005';
      const home = new StorefrontPage(page);

      // Paso 1 — abrir el modal.
      await home.goto();
      const modal = await home.abrirModalCategorias();

      // Paso 2 — nombre e icono '>' de una categoría N1.
      const carnes = modal.cabeceraN1('Carnes').first();
      await expect(carnes).toBeVisible();
      await expect(carnes).toContainText(/carnes/i);
      await expect(carnes.locator('svg')).toHaveCount(1);
      await home.capturarEvidencia(cp, 2, 'cabecera de la categoria N1 con su icono >', { elemento: carnes });

      // Paso 3 — carrusel de subcategorías N2: thumbnail + nombre.
      const subcategorias = await modal.tarjetasDeSeccion('Carnes');
      expect(subcategorias.length).toBeGreaterThan(0);
      const primera = modal.tarjetaN2(subcategorias[0]).first();
      await expect(primera.locator('img')).toHaveCount(1);
      await expect(primera).toContainText(subcategorias[0]);
      await home.capturarEvidencia(cp, 3, 'carrusel de subcategorias N2 con thumbnail y nombre', {
        elemento: modal.cuerpo,
      });

      // Paso 4 — las secciones de las distintas N1 se muestran apiladas verticalmente.
      const cajas = await modal.cabecerasN1.evaluateAll((els) =>
        els.map((e) => ({ x: Math.round(e.getBoundingClientRect().x), y: Math.round(e.getBoundingClientRect().y) })),
      );
      expect(cajas.length).toBeGreaterThan(1);
      const xs = cajas.map((c) => c.x);
      expect(Math.max(...xs) - Math.min(...xs)).toBeLessThan(10); // misma columna
      for (let i = 1; i < cajas.length; i++) {
        expect(cajas[i].y).toBeGreaterThan(cajas[i - 1].y); // una debajo de otra
      }
      await home.capturarEvidencia(cp, 4, 'secciones N1 apiladas verticalmente', { elemento: modal.cuerpo });

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: modal.root });
    });

    test('TC-B2C21-M-006 · Deslizamiento vertical del menu cuando hay mas de 3 top categorias (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C21-M-006';
      const home = new StorefrontPage(page);

      // Paso 1 — abrir el modal (el ambiente tiene más de 3 top categorías).
      await home.goto();
      const modal = await home.abrirModalCategorias();
      expect(await modal.cabecerasN1.count()).toBeGreaterThan(3);
      await home.capturarEvidencia(cp, 1, 'inicio del listado de categorias', { elemento: modal.cuerpo });

      // Paso 2 — deslizar verticalmente el menú.
      const scroll = await modal.desplazarCuerpo(600);
      expect(scroll.scrollHeight).toBeGreaterThan(scroll.clientHeight);
      expect(scroll.despues).toBeGreaterThan(scroll.antes);

      // Paso 3 — se visualizan las categorías adicionales.
      const ultima = modal.cabecerasN1.last();
      await expect(ultima).toBeVisible();
      await home.capturarEvidencia(cp, 3, 'categorias adicionales tras deslizar el menu', {
        elemento: modal.cuerpo,
      });

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: modal.root });
    });

    test('TC-B2C21-M-007 · Categoria N1 sin subcategorias N2 solo muestra nombre e icono (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C21-M-007';
      const sinSub = token(testData, 'CATEGORY_N1_WO_SUB')!;
      const home = new StorefrontPage(page);

      // Paso 1 — abrir el modal.
      await home.goto();
      const modal = await home.abrirModalCategorias();

      // Paso 2 — ubicar la categoría N1 sin subcategorías activas.
      const cabecera = modal.cabeceraN1(sinSub).first();
      await cabecera.scrollIntoViewIfNeeded();
      await expect(cabecera).toBeVisible();
      await home.capturarEvidencia(cp, 2, `cabecera de la categoria ${sinSub}`, { elemento: cabecera });

      // Paso 3 — solo nombre e icono '>'; sin carrusel de N2.
      await expect(cabecera).toContainText(sinSub);
      await expect(cabecera.locator('svg')).toHaveCount(1);
      await expect(cabecera.locator('img')).toHaveCount(0);
      expect(await modal.tarjetasDeSeccion(sinSub)).toHaveLength(0);
      await home.capturarEvidencia(cp, 3, `${sinSub} sin carrusel de subcategorias`, { elemento: modal.cuerpo });

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: modal.root });
    });

    test('TC-B2C21-M-008 · Redireccion al hacer clic en el nombre o icono de una categoria N1 (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C21-M-008';
      const home = new StorefrontPage(page);

      // Paso 1 — abrir el modal.
      await home.goto();
      const modal = await home.abrirModalCategorias();
      await home.capturarEvidencia(cp, 1, 'cabecera de la categoria N1 Frutas y Verduras', {
        elemento: modal.cabeceraN1('Frutas y Verduras').first(),
      });

      // Paso 2 — clic sobre el nombre de una categoría N1.
      await modal.clicCabeceraN1('Frutas y Verduras');

      // Paso 3 — verificar la redirección a la PLP de esa N1.
      await page.waitForURL(/\/category\/frutas-y-verduras$/, { timeout: 30000 });
      expect(new URL(page.url()).pathname).toBe('/category/frutas-y-verduras');
      await expect(modal.root).not.toBeVisible();
      await home.capturarEvidencia(cp, 3, 'PLP de la categoria N1 Frutas y Verduras');

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C21-M-009 · Redireccion al hacer clic en la imagen o nombre de una categoria N2 (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C21-M-009';
      const home = new StorefrontPage(page);

      // Paso 1 — abrir el modal.
      await home.goto();
      const modal = await home.abrirModalCategorias();
      await home.capturarEvidencia(cp, 1, 'tarjeta de la subcategoria N2 Cerdo', {
        elemento: modal.tarjetaN2('Cerdo').first(),
      });

      // Paso 2 — clic sobre una subcategoría N2.
      await modal.clicTarjetaN2('Cerdo');

      // Paso 3 — verificar la redirección a la PLP de esa N2.
      await page.waitForURL(/\/category\/carnes_cerdo$/, { timeout: 30000 });
      expect(new URL(page.url()).pathname).toBe('/category/carnes_cerdo');
      await home.capturarEvidencia(cp, 3, 'PLP de la subcategoria N2 Cerdo');

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C21-M-010 · Cierre del modal mediante el icono X en Mobile web (Mobile)', async ({ page }) => {
      const cp = 'TC-B2C21-M-010';
      const home = new StorefrontPage(page);

      // Paso 1 — abrir el modal.
      await home.goto();
      const modal = await home.abrirModalCategorias();
      await expect(modal.root).toBeVisible();
      await home.capturarEvidencia(cp, 1, 'modal de categorias abierto', { elemento: modal.root });

      // Paso 2 — clic en el icono 'X'.
      await modal.cerrar();

      // Paso 3 — el modal se cierra. Se comprueba por visibilidad y no por presencia: el modal
      // se desmonta con una animación de slide y puede seguir un instante en el DOM.
      await expect(modal.root).not.toBeVisible({ timeout: 15000 });
      await home.capturarEvidencia(cp, 3, 'modal cerrado, se ve de nuevo la pantalla');

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C21-M-011 · Carrusel N2 con una sola subcategoria se alinea a la izquierda sin deslizamiento (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C21-M-011';
      const home = new StorefrontPage(page);

      // Paso 1 — abrir el modal.
      await home.goto();
      const modal = await home.abrirModalCategorias();

      // Paso 2 — ubicar una categoría N1 con exactamente una subcategoría N2 activa.
      const seccion = 'Panadería y Pastelería';
      const subcategorias = await modal.tarjetasDeSeccion(seccion);
      expect(subcategorias).toHaveLength(1);
      const cabecera = modal.cabeceraN1(seccion).first();
      await cabecera.scrollIntoViewIfNeeded();
      await home.capturarEvidencia(cp, 2, `${seccion} con una unica subcategoria`, { elemento: modal.cuerpo });

      // Paso 3 — el único item se alinea a la izquierda y no hay deslizamiento horizontal.
      const unica = await modal.metricasTarjeta(subcategorias[0]);
      const bordeIzquierdoCabecera = await cabecera.evaluate((el) => Math.round(el.getBoundingClientRect().x));
      expect(unica.x).toBe(bordeIzquierdoCabecera);
      await home.capturarEvidencia(cp, 3, 'el unico item alineado a la izquierda', { elemento: modal.cuerpo });

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: modal.root });
    });

    test('TC-B2C21-M-012 · Apertura del modal estando dentro de la PLP de una categoria N2 muestra todas las secciones desde el inicio (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C21-M-012';
      // Paso 1 — navegar a la PLP de una categoría N2.
      const plp = new StorefrontPage(page, 'category/carnes_cerdo');
      await plp.goto();
      await plp.capturarEvidencia(cp, 1, 'PLP de la subcategoria N2 Cerdo');

      // Paso 2 — abrir el modal con el icono sandwich.
      const modal = await plp.abrirModalCategorias();
      await plp.capturarEvidencia(cp, 2, 'modal abierto desde la PLP', { elemento: modal.root });

      // Paso 3 — todas las secciones desde el inicio, ninguna categoría preseleccionada.
      const scroll = await modal.desplazarCuerpo(0);
      expect(scroll.antes).toBe(0);
      expect(await modal.cabecerasN1.count()).toBeGreaterThan(1);
      await expect(modal.cabecerasN1.first()).toBeVisible();

      // 'Todas' es el estado neutro por defecto; ninguna categoría queda marcada como actual.
      expect(await modal.ariaCurrentDeTodas()).toBe('true');
      expect(await modal.categoriasMarcadasComoActuales()).toEqual([]);
      await plp.capturarEvidencia(cp, 3, 'listado completo desde el inicio, sin categoria preseleccionada', {
        elemento: modal.root,
      });

      await plp.capturarEvidencia(cp, undefined, undefined, { elemento: modal.root });
    });

    test('TC-B2C21-M-013 · Nombre de top categoria N1 mayor a 20 caracteres se trunca con puntos suspensivos (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C21-M-013';
      const nombreLargo = token(testData, 'LONG_NAME_CATEGORY_N1')!;
      expect(nombreLargo.length).toBeGreaterThan(20);
      const home = new StorefrontPage(page);

      // Pasos 1 y 2 — la categoría de nombre largo ya está configurada; abrir el modal.
      await home.goto();
      const modal = await home.abrirModalCategorias();
      await home.capturarEvidencia(cp, 2, 'carrusel de top categorias', { elemento: modal.carrusel });

      // Paso 3 — el nombre se muestra truncado a 20 caracteres con puntos suspensivos.
      const esperado = nombreLargo.slice(0, 20);
      const pildora = modal.pildoras.filter({ hasText: esperado }).first();
      await expect(pildora).toBeVisible();
      const visible = (await pildora.textContent())?.trim() ?? '';
      expect(visible.startsWith(esperado)).toBe(true);
      expect(visible).toMatch(/(…|\.\.\.)$/);
      expect(visible.replace(/(…|\.\.\.)$/, '')).toHaveLength(20);

      await home.capturarEvidencia(cp, 3, 'nombre de top categoria truncado a 20 caracteres', {
        elemento: pildora,
      });
      await home.capturarEvidencia(cp, undefined, undefined, { elemento: modal.carrusel });
    });

    test('TC-B2C21-M-014 · Nombre de categoria N2 entre 15 y 28 caracteres se ajusta a 2 lineas sin cortar palabras (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C21-M-014';
      // El escenario pide una N2 de 15 a 28 caracteres. {LONG_NAME_CATEGORY_N2} trae un nombre de
      // 34, que es el de TC-B2C21-M-015: no sirve para este caso. Se usa una subcategoría real del
      // ambiente que sí cumple la precondición de la fila, y queda dicho en la Observación.
      const nombreN2 = 'Fiambres y embutidos'; // 20 caracteres
      expect(nombreN2.length).toBeGreaterThanOrEqual(15);
      expect(nombreN2.length).toBeLessThanOrEqual(28);

      const home = new StorefrontPage(page);
      await home.goto();
      const modal = await home.abrirModalCategorias();

      // Paso 2 — desplegar el carrusel N2 correspondiente.
      const tarjeta = modal.tarjetaN2(nombreN2).first();
      await tarjeta.scrollIntoViewIfNeeded();
      await expect(tarjeta).toBeVisible();
      await home.capturarEvidencia(cp, 2, `tarjeta de la subcategoria ${nombreN2}`, { elemento: tarjeta });

      // Paso 3 — el nombre se muestra completo, en 2 líneas como máximo y sin cortar palabras.
      const m = await modal.metricasTarjeta(nombreN2);
      expect(m.texto).toBe(nombreN2);
      expect(m.texto).not.toMatch(/(…|\.\.\.)/);
      expect(m.lineas).toBeLessThanOrEqual(2);
      await home.capturarEvidencia(cp, 3, 'nombre completo en dos lineas sin cortar palabras', {
        elemento: tarjeta,
      });

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: tarjeta });
    });

    test('TC-B2C21-M-015 · Nombre de categoria N2 mayor a 28 caracteres se trunca en el limite de palabra con puntos suspensivos (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C21-M-015';
      const nombreLargo = token(testData, 'LONG_NAME_CATEGORY_N2')!;
      expect(nombreLargo.length).toBeGreaterThan(28);

      const home = new StorefrontPage(page);
      await home.goto();
      const modal = await home.abrirModalCategorias();

      // Paso 2 — desplegar el carrusel N2 correspondiente.
      const prefijo = nombreLargo.slice(0, 15);
      const tarjeta = modal.tarjetasN2.filter({ hasText: prefijo }).first();
      await tarjeta.scrollIntoViewIfNeeded();
      await expect(tarjeta).toBeVisible();
      await home.capturarEvidencia(cp, 2, 'tarjeta de la subcategoria de nombre largo', { elemento: tarjeta });

      // Paso 3 — el truncado debe caer en el límite de palabra: ninguna palabra a la mitad.
      const m = await modal.metricasTarjeta(prefijo);
      const mostrado = m.texto;
      await home.capturarEvidencia(cp, 3, 'nombre de la subcategoria tal como se muestra', {
        elemento: tarjeta,
      });

      expect(mostrado).toMatch(/(…|\.\.\.)$/);
      const sinPuntos = mostrado.replace(/(…|\.\.\.)$/, '').trimEnd();
      // El texto mostrado tiene que terminar en una palabra completa del nombre original.
      const palabras = nombreLargo.split(/\s+/);
      const ultimaMostrada = sinPuntos.split(/\s+/).pop() ?? '';
      expect(palabras).toContain(ultimaMostrada);

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: tarjeta });
    });

    test('TC-B2C21-M-016 · Categoria sin thumbnail configurada en Business Manager muestra imagen placeholder (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C21-M-016';
      const home = new StorefrontPage(page);

      // Pasos 1 y 2 — abrir el modal e identificar una categoría sin thumbnail configurada.
      await home.goto();
      const modal = await home.abrirModalCategorias();
      const fuentes = await modal.fuentesDeThumbnails();
      const conPlaceholder = fuentes.filter((s) => /placeholder/i.test(s));
      expect(conPlaceholder.length).toBeGreaterThan(0);
      await home.capturarEvidencia(cp, 2, 'modal con las tarjetas de subcategoria', { elemento: modal.cuerpo });

      // Paso 3 — la tarjeta muestra una imagen placeholder genérica.
      const quesos = await modal.metricasTarjeta('Quesos');
      expect(quesos.srcImagen).toMatch(/placeholder/i);
      const tarjeta = modal.tarjetaN2('Quesos').first();
      await tarjeta.scrollIntoViewIfNeeded();
      await expect(tarjeta.locator('img')).toBeVisible();
      await home.capturarEvidencia(cp, 3, 'tarjeta con imagen placeholder generica', { elemento: tarjeta });

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: tarjeta });
    });
  });
});
