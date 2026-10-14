import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaHabilitada, rutaDesdeUrl } from './pages/PaginaHabilitada';

/**
 * B2C-17 — Header del storefront.
 *
 * Un `test()` por fila de la planilla, con el CP-ID abriendo el título y el sufijo
 * (Desktop)/(Mobile) que enruta cada caso a su project y, con él, a su motor.
 *
 * Los tres TC `-BM-` de la suite no están aquí: se ejecutan en Business Manager, que no se
 * conduce con Playwright. Quedan `Fuera de Alcance` en la planilla, no `Bloqueado`.
 *
 * La superficie **Landing** que las precondiciones enumeran tampoco aparece: en el ambiente DEV
 * ninguna landing responde (todas devuelven "Not found"). Los TC que la abarcan lo dicen en su
 * Observación; inventar una URL que sí cargue sería certificar otra cosa.
 */

type DatosDePrueba = Parameters<typeof token>[0];

/**
 * El valor de un token, o un fallo que dice cuál falta.
 *
 * `token()` devuelve `undefined` cuando el Excel de data no trae el valor, y dejar que ese
 * `undefined` siga viaje construiría una ruta como `/undefined`: el TC fallaría con un error de
 * navegación que no explica nada. Nombrar el token que falta convierte ese ruido en un bloqueo
 * de data legible.
 */
function tokenObligatorio(testData: DatosDePrueba, nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) {
    throw new Error(
      `Falta {${nombre}} en el Excel de data del workspace QA: sin ese valor no se puede ` +
        `abrir la superficie que el TC pide. Cárgalo en la planilla y vuelve a correr el read.`,
    );
  }
  return valor;
}

/** Las superficies habilitadas que sí existen en el ambiente, con su ruta sacada de la data. */
function paginasHabilitadas(testData: DatosDePrueba) {
  return [
    { nombre: 'Home', path: '' },
    { nombre: 'PLP', path: rutaDesdeUrl(tokenObligatorio(testData, 'PLP_URL')) },
    { nombre: 'PDP', path: `product/${tokenObligatorio(testData, 'SKU_VALID_001')}` },
    { nombre: 'SRP', path: rutaDesdeUrl(tokenObligatorio(testData, 'SRP_URL')) },
    { nombre: 'Mi Cuenta', path: rutaDesdeUrl(tokenObligatorio(testData, 'MIS_COMPRAS_URL')) },
  ];
}

test.describe('B2C-17 — Header del storefront', () => {
  // ==================================================================== Desktop
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C17-D-001 · Estructura del Header en Desktop: filas con sus elementos (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C17-D-001';
      // Recorre las cinco superficies habilitadas con una navegacion completa en cada una, asi
      // que no entra en el timeout por defecto de 30s. El tiempo largo es del caso, no una
      // espera escondida: cada pagina se carga de verdad y se le mide el header.
      test.setTimeout(240000);

      const paginas = paginasHabilitadas(testData);

      for (const [i, p] of paginas.entries()) {
        const pagina = new PaginaHabilitada(page, p.path, p.nombre);
        await pagina.goto();
        const h = pagina.header;

        // Paso 2 — presencia y orden de las filas del header en cada página.
        // CA2 define para Desktop dos filas: (1) Logo + Categorías + Buscador + Área SSO +
        // mini carrito, (2) Método de entrega + Accesos directos + Botón Membresía.
        await expect(h.root, `header ausente en ${p.nombre}`).toBeVisible();
        expect(await h.filasVisibles.count(), `filas visibles en ${p.nombre}`).toBe(2);

        // Fila 1 y sus cinco elementos.
        for (const [nombre, loc] of [
          ['logo', h.logo],
          ['Categorías', h.categoriasDesktop],
          ['buscador', h.buscador],
          ['área SSO', h.areaSSO],
          ['mini carrito', h.miniCarrito],
        ] as const) {
          await expect(loc, `${nombre} ausente en ${p.nombre}`).toBeVisible();
          expect(await h.filaDe(loc), `${nombre} fuera de la fila 1 en ${p.nombre}`).toBe(0);
        }

        // El orden de la fila 1, de izquierda a derecha.
        const xLogo = await h.x(h.logo);
        const xCat = await h.x(h.categoriasDesktop);
        const xBuscador = await h.x(h.buscador);
        const xSSO = await h.x(h.areaSSO);
        const xCarrito = await h.x(h.miniCarrito);
        expect(
          [xLogo, xCat, xBuscador, xSSO, xCarrito],
          `orden de la fila 1 en ${p.nombre}`,
        ).toEqual([...[xLogo, xCat, xBuscador, xSSO, xCarrito]].sort((a, b) => a - b));

        // Fila 2 y sus tres bloques.
        for (const [nombre, loc] of [
          ['método de entrega', h.metodoEntrega],
          ['accesos directos', h.listaAccesos],
          ['botón Membresía', h.botonMembresia],
        ] as const) {
          await expect(loc, `${nombre} ausente en ${p.nombre}`).toBeVisible();
          expect(await h.filaDe(loc), `${nombre} fuera de la fila 2 en ${p.nombre}`).toBe(1);
        }

        const xEntrega = await h.x(h.metodoEntrega);
        const xAccesos = await h.x(h.listaAccesos);
        const xMembresia = await h.x(h.botonMembresia);
        expect([xEntrega, xAccesos, xMembresia], `orden de la fila 2 en ${p.nombre}`).toEqual(
          [...[xEntrega, xAccesos, xMembresia]].sort((a, b) => a - b),
        );

        await pagina.capturarEvidencia(cp, i + 1, `header en ${p.nombre}`, { elemento: h.root });
      }

      const cierre = new PaginaHabilitada(page, '', 'Home');
      await cierre.goto();
      await cierre.capturarEvidencia(cp, undefined, undefined, { elemento: cierre.header.root });
    });

    test('TC-B2C17-D-002 · Clic en el logo redirige al Home en Desktop (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C17-D-002';

      // Paso 1 — una página habilitada distinta del Home.
      const plp = new PaginaHabilitada(page, rutaDesdeUrl(tokenObligatorio(testData, 'PLP_URL')), 'PLP');
      await plp.goto();
      expect(new URL(page.url()).pathname).not.toBe('/');
      await plp.capturarEvidencia(cp, 1, 'PLP abierta, distinta del Home');

      // Paso 2 — el logo se visualiza.
      await expect(plp.header.logo).toBeVisible();
      const caja = await plp.header.caja(plp.header.logo);
      expect(caja.ancho, 'ancho del logo').toBeGreaterThan(0);
      expect(caja.alto, 'alto del logo').toBeGreaterThan(0);
      await plp.capturarEvidencia(cp, 2, 'logo de Unimarc en el header', {
        elemento: plp.header.logo,
      });

      // Pasos 3 y 4 — clic en el logo y redirección al Home.
      await plp.header.clicLogo();
      await page.waitForURL((u) => new URL(u).pathname === '/', { timeout: 30000 });
      expect(new URL(page.url()).pathname).toBe('/');
      await plp.capturarEvidencia(cp, 4, 'Home tras el clic en el logo');

      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C17-D-003 · Buscador visible en el Header con placeholder e icono de lupa (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C17-D-003';

      // Paso 1 — una página habilitada.
      const home = new PaginaHabilitada(page, '', 'Home');
      await home.goto();
      await home.capturarEvidencia(cp, 1, 'Home con el header cargado', {
        elemento: home.header.root,
      });

      // Pasos 2 y 3 — el buscador, su placeholder y su icono.
      // El literal del TC va sin tildes ("¿Que estas buscando?") y la UI sí las lleva, así que
      // el locator es tolerante: la diferencia es de la planilla, no del producto.
      await expect(home.header.buscador).toBeVisible();
      await expect(home.header.buscador).toHaveAttribute(
        'placeholder',
        /¿qu[ée] est[áa]s buscando\?/i,
      );
      await expect(home.header.iconoLupa).toBeVisible();
      await home.capturarEvidencia(cp, 3, 'buscador con placeholder e icono de lupa', {
        elemento: home.header.buscador,
      });

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: home.header.root });
    });

    test("TC-B2C17-D-004 · Clic en 'Categorias' abre el modal de categorias en Desktop (Desktop)", async ({
      page,
    }) => {
      const cp = 'TC-B2C17-D-004';

      // Paso 1 — una página habilitada.
      const home = new PaginaHabilitada(page, '', 'Home');
      await home.goto();
      await expect(home.header.categoriasDesktop).toBeVisible();
      await home.capturarEvidencia(cp, 1, "boton 'Categorias' en el header", {
        elemento: home.header.root,
      });

      // Pasos 2 y 3 — clic y apertura del modal.
      const modal = await home.header.abrirCategoriasDesktop();
      await expect(modal.root).toBeVisible();
      // Se comprueba sobre el modal entero y no sobre `.chakra-modal__header p`: ese titulo solo
      // existe en la variante Mobile, y el TC valida la apertura, no el armazon (eso es B2C-73).
      await expect(modal.root).toContainText(/categor[íi]as/i);

      // Ubicado a la izquierda: su borde izquierdo queda pegado al de la página y el espacio
      // libre que deja a la derecha es mayor que el de la izquierda. Medirlo así —y no contra
      // un ancho fijo— es lo que hace que la aserción valga en los dos form-factors.
      const caja = await home.header.caja(modal.root);
      const anchoViewport = page.viewportSize()!.width;
      const libreDerecha = anchoViewport - (caja.x + caja.ancho);
      expect(caja.x, 'margen izquierdo del modal').toBeLessThanOrEqual(16);
      expect(libreDerecha, 'espacio libre a la derecha del modal').toBeGreaterThanOrEqual(caja.x);
      await home.capturarEvidencia(cp, 3, 'modal de categorias desplegado a la izquierda');

      await home.capturarEvidencia(cp);
    });
  });

  // ===================================================================== Mobile
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C17-M-001 · Estructura del Header en Mobile: 3 filas con sus elementos (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C17-M-001';
      // Recorre las cinco superficies habilitadas con una navegacion completa en cada una, asi
      // que no entra en el timeout por defecto de 30s. El tiempo largo es del caso, no una
      // espera escondida: cada pagina se carga de verdad y se le mide el header.
      test.setTimeout(240000);

      const paginas = paginasHabilitadas(testData);

      for (const [i, p] of paginas.entries()) {
        const pagina = new PaginaHabilitada(page, p.path, p.nombre);
        await pagina.goto();
        const h = pagina.header;

        await expect(h.root, `header ausente en ${p.nombre}`).toBeVisible();

        // La planilla define para Mobile TRES filas: (1) Método de entrega, (2) Logo + Área SSO +
        // Mini carrito + Icono sandwich + Buscador, (3) Botón Membresía **junto a** la sección de
        // accesos directos.
        //
        // Antes pedía cuatro, con Membresía y accesos en filas separadas, y contra eso el caso
        // quedó Rechazado (bug B2C-758). La fila del Excel se corrigió el 2026-09-14 y ahora
        // describe las tres, que es lo que el front venía renderizando: lo que cambió es el
        // criterio, no el producto.
        expect(await h.filasVisibles.count(), `filas visibles en ${p.nombre}`).toBe(3);

        // Fila 1 — método de entrega, solo.
        await expect(h.metodoEntrega, `método de entrega ausente en ${p.nombre}`).toBeVisible();
        expect(await h.filaDe(h.metodoEntrega), `método de entrega en ${p.nombre}`).toBe(0);

        // Fila 2 — los cinco elementos de la barra principal.
        for (const [nombre, loc] of [
          ['logo', h.logo],
          ['icono sandwich', h.iconoSandwich],
          ['buscador', h.buscador],
          ['área SSO', h.areaSSO],
          ['mini carrito', h.miniCarrito],
        ] as const) {
          await expect(loc, `${nombre} ausente en ${p.nombre}`).toBeVisible();
          expect(await h.filaDe(loc), `${nombre} fuera de la fila 2 en ${p.nombre}`).toBe(1);
        }

        // Fila 3 — el botón de membresía y la sección de accesos directos, compartiéndola.
        await expect(h.botonMembresia, `botón Membresía ausente en ${p.nombre}`).toBeVisible();
        expect(await h.filaDe(h.botonMembresia), `botón Membresía en ${p.nombre}`).toBe(2);

        await expect(h.listaAccesos, `accesos directos ausentes en ${p.nombre}`).toBeVisible();
        expect(await h.filaDe(h.listaAccesos), `accesos directos en ${p.nombre}`).toBe(2);

        await pagina.capturarEvidencia(cp, i + 1, `header en ${p.nombre}`, { elemento: h.root });
      }

      const cierre = new PaginaHabilitada(page, '', 'Home');
      await cierre.goto();
      await cierre.capturarEvidencia(cp, undefined, undefined, { elemento: cierre.header.root });
    });

    test('TC-B2C17-M-002 · Clic en el logo redirige al Home en Mobile (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C17-M-002';

      // Paso 1 — una página habilitada distinta del Home.
      const plp = new PaginaHabilitada(page, rutaDesdeUrl(tokenObligatorio(testData, 'PLP_URL')), 'PLP');
      await plp.goto();
      expect(new URL(page.url()).pathname).not.toBe('/');
      await plp.capturarEvidencia(cp, 1, 'PLP abierta, distinta del Home');

      // Paso 2 — el logo se visualiza.
      await expect(plp.header.logo).toBeVisible();
      const caja = await plp.header.caja(plp.header.logo);
      expect(caja.ancho, 'ancho del logo').toBeGreaterThan(0);
      expect(caja.alto, 'alto del logo').toBeGreaterThan(0);
      await plp.capturarEvidencia(cp, 2, 'logo de Unimarc en el header', {
        elemento: plp.header.logo,
      });

      // Pasos 3 y 4 — clic en el logo y redirección al Home.
      await plp.header.clicLogo();
      await page.waitForURL((u) => new URL(u).pathname === '/', { timeout: 30000 });
      expect(new URL(page.url()).pathname).toBe('/');
      await plp.capturarEvidencia(cp, 4, 'Home tras el clic en el logo');

      await plp.capturarEvidencia(cp);
    });

    test('TC-B2C17-M-003 · Clic en el icono sandwich abre el modal de categorias en Mobile (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C17-M-003';

      // Paso 1 — una página habilitada.
      const home = new PaginaHabilitada(page, '', 'Home');
      await home.goto();
      await expect(home.header.iconoSandwich).toBeVisible();
      await home.capturarEvidencia(cp, 1, 'icono sandwich en el header', {
        elemento: home.header.root,
      });

      // Pasos 2 y 3 — clic y apertura del modal.
      const modal = await home.header.abrirCategoriasMobile();
      await expect(modal.root).toBeVisible();
      // Se comprueba sobre el modal entero y no sobre `.chakra-modal__header p`: ese titulo solo
      // existe en la variante Mobile, y el TC valida la apertura, no el armazon (eso es B2C-73).
      await expect(modal.root).toContainText(/categor[íi]as/i);

      const caja = await home.header.caja(modal.root);
      const anchoViewport = page.viewportSize()!.width;
      const libreDerecha = anchoViewport - (caja.x + caja.ancho);
      expect(caja.x, 'margen izquierdo del modal').toBeLessThanOrEqual(16);
      expect(libreDerecha, 'espacio libre a la derecha del modal').toBeGreaterThanOrEqual(caja.x);
      await home.capturarEvidencia(cp, 3, 'modal de categorias desplegado a la izquierda');

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C17-M-004 · Accesos directos en carrusel horizontal en Mobile (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C17-M-004';

      // Pasos 1 y 2 — el header en Mobile, con los accesos que trae configurados el ambiente.
      const home = new PaginaHabilitada(page, '', 'Home');
      await home.goto();
      const h = home.header;
      await expect(h.listaAccesos).toBeVisible();

      const total = await h.accesos.count();
      expect(total, 'accesos directos configurados').toBeGreaterThan(0);

      // La precondición del caso: los accesos superan el ancho disponible. Si no lo superaran,
      // no habría carrusel que validar y el TC estaría probando otra cosa.
      const scroll = await h.scrollAccesos();
      expect(scroll.desbordado, 'los accesos superan el ancho disponible').toBe(true);
      await home.capturarEvidencia(cp, 2, 'accesos directos en el header Mobile', {
        elemento: h.root,
      });

      // Paso 3 — sin wrapping vertical: todos los accesos comparten la misma línea.
      const ys: number[] = [];
      for (let i = 0; i < total; i++) ys.push((await h.caja(h.accesos.nth(i))).y);
      expect(Math.max(...ys) - Math.min(...ys), 'desviación vertical entre accesos').toBeLessThanOrEqual(2);

      // Con el carrusel al inicio, el último acceso todavía no entra en pantalla: eso es lo que
      // hace necesario el deslizamiento.
      const ultimo = h.accesos.nth(total - 1);
      expect(await h.entraEnPantalla(ultimo), 'último acceso visible sin deslizar').toBe(false);
      await home.capturarEvidencia(cp, 3, 'ultimo acceso fuera de pantalla antes de deslizar', {
        elemento: h.root,
      });

      // Paso 4 — deslizar y comprobar que todos los items quedan accesibles.
      await h.deslizarAccesosAlFinal();
      for (let i = 0; i < total; i++) {
        expect(
          await h.entraEnPantalla(h.accesos.nth(i)),
          `acceso ${i + 1} accesible tras deslizar`,
        ).toBe(true);
      }
      await home.capturarEvidencia(cp, 4, 'todos los accesos accesibles tras deslizar', {
        elemento: h.root,
      });

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: h.root });
    });
  });
});
