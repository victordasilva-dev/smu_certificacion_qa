import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { HomePage, MyUsualsPage } from './pages/HomePage';
import { LoginModal } from './pages/LoginModal';
import { ShelfProducto } from './pages/ShelfProducto';

/**
 * B2C-85 — Página "Mis productos frecuentes" (My Usuals).
 *
 * Desde el 2026-10-07 las filas con sesión declaran la cuenta (`{COMPRADOR_USER}`), que fue lo que
 * las bloqueó en la corrida del 2026-09-14. En DEV esa cuenta tiene **3 productos frecuentes**
 * (`c_myUsuals` del customer): galletas con stock, carne molida con precio de membresía y un
 * tapapecho sin stock. Con eso son observables casi todos los casos; quedan fuera de esta cuenta
 * los que piden más de 50 frecuentes (D-006, M-001) y productos con precio promocional y badges de
 * campaña (D-010).
 *
 * D-003 es el único caso sin sesión: comprueba la redirección de un invitado.
 */

function tokenExigido(testData: Parameters<typeof token>[0], nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) throw new Error(`Falta {${nombre}} en el Excel de data: el TC lo declara`);
  return valor;
}

/** Inicia sesión desde el Home con la cuenta declarada. */
async function iniciarSesion(page: Page, testData: Parameters<typeof token>[0]): Promise<void> {
  await new HomePage(page).goto();
  await new LoginModal(page).iniciarSesion(
    tokenExigido(testData, 'COMPRADOR_USER'),
    tokenExigido(testData, 'COMPRADOR_PASSWORD'),
  );
}

/** Inicia sesión y abre My Usuals por URL directa (el paso 2 del TC la admite). */
async function abrirMyUsuals(page: Page, testData: Parameters<typeof token>[0]): Promise<MyUsualsPage> {
  await iniciarSesion(page, testData);
  const myUsuals = new MyUsualsPage(page);
  await myUsuals.goto();
  await expect(myUsuals.tarjetas.first(), 'la grilla carga sus tarjetas').toBeVisible({ timeout: 30000 });
  return myUsuals;
}

/** Los SKU frecuentes del cliente, tal como los guarda el atributo `c_myUsuals`. */
function capturarMyUsuals(page: Page): () => string[] | null {
  let lista: string[] | null = null;
  page.on('response', async (r) => {
    if (!/\/shopper-customers\/v1\/organizations\/[^/]+\/customers\/[^/?]+\?/.test(r.url()) || !r.ok()) return;
    const cuerpo = await r.json().catch(() => null);
    if (Array.isArray(cuerpo?.c_myUsuals)) lista = cuerpo.c_myUsuals;
  });
  return () => lista;
}

test.describe('B2C-85 — Mis productos frecuentes', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C85-D-001 · Acceso y visualizacion de la pagina My Usuals con sesion activa (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C85-D-001';
      test.setTimeout(240000);
      const myUsualsDelCliente = capturarMyUsuals(page);

      // Pasos 1 y 2 — sesión con la cuenta declarada y la página por URL directa.
      const myUsuals = await abrirMyUsuals(page, testData);
      await myUsuals.capturarEvidencia(cp, 2, 'mis productos frecuentes');

      // Paso 3 — el título con el total.
      await expect(myUsuals.titulo, 'el título es "Mis productos frecuentes"').toBeVisible();
      const total = await myUsuals.totalAnunciado();
      const tarjetas = await myUsuals.tarjetas.count();
      const esperados = myUsualsDelCliente();
      expect(esperados, 'se leyó el atributo c_myUsuals del cliente').not.toBeNull();
      expect(total, `el título anuncia el total de productos (${total})`).toBe(esperados!.length);

      // Paso 4 — la grilla con todos los frecuentes, en el orden del atributo (su relevancia), y
      // cada tarjeta con imagen, nombre, precio y la acción que corresponde a su stock.
      expect(tarjetas, `la grilla muestra todos los frecuentes (${tarjetas} de ${esperados!.length})`).toBe(
        Math.min(esperados!.length, 100),
      );
      expect(await myUsuals.skusEnOrden(), 'la grilla sigue el orden de relevancia de c_myUsuals').toEqual(
        esperados!.slice(0, 100),
      );
      for (let i = 0; i < tarjetas; i++) {
        const shelf = new ShelfProducto(page, myUsuals.tarjetas.nth(i));
        await expect(shelf.imagen, `la tarjeta ${i + 1} tiene imagen`).toBeVisible();
        // El nombre se busca por el encabezado de la tarjeta: un producto sin marca no lleva el
        // "Marca | " con el que `ShelfProducto.nombre` lo reconoce.
        await expect(
          myUsuals.tarjetas.nth(i).locator('h2, h3').first(),
          `la tarjeta ${i + 1} tiene nombre`,
        ).toHaveText(/\w{3,}/);
        await expect(shelf.precios.first(), `la tarjeta ${i + 1} tiene precio`).toBeVisible();
        // La acción de carro es "Agregar", o su stepper si el producto ya está en el carro, o
        // "Ver similares" si no tiene stock.
        const accion =
          (await shelf.agregar.count()) + (await shelf.aumentar.count()) + (await shelf.verSimilares.count());
        expect(
          accion,
          `la tarjeta ${i + 1} trae "Agregar" (o su stepper si ya está en el carro, o "Ver similares" sin stock)`,
        ).toBeGreaterThan(0);
      }
      await myUsuals.capturarEvidencia(cp, 4, 'grilla con las tarjetas estandar', {
        elemento: page.locator('#app-main'),
      });

      await myUsuals.capturarEvidencia(cp);
    });

    test('TC-B2C85-D-002 · La pagina no muestra arbol de categorias, filtros ni ordenamiento (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C85-D-002';
      test.setTimeout(240000);

      const myUsuals = await abrirMyUsuals(page, testData);
      await myUsuals.capturarEvidencia(cp, 1, 'mis productos frecuentes');

      const main = page.locator('main');
      await expect(main.getByRole('button', { name: /filtr/i }), 'no hay botón de filtros').toHaveCount(0);
      await expect(main.getByText(/ordenar por/i), 'no hay control de ordenamiento').toHaveCount(0);
      await expect(main.getByRole('combobox'), 'no hay selector de orden').toHaveCount(0);
      await expect(main.getByRole('checkbox'), 'no hay filtros de categoría').toHaveCount(0);
      // Árbol de categorías: la fila de píldoras "Todo / subcategorías" de la PLP, o un listado de
      // enlaces a /category/.
      await expect(main.getByRole('button', { name: /^todo$/i }), 'no hay árbol de categorías (píldoras)').toHaveCount(0);
      await expect(main.locator('a[href*="/category/"]'), 'no hay enlaces de árbol de categorías').toHaveCount(0);
      await myUsuals.capturarEvidencia(cp, 2, 'sin arbol de categorias, filtros ni orden');

      await myUsuals.capturarEvidencia(cp);
    });

    test("TC-B2C85-D-004 · Productos sin stock muestran 'Pronto disponible' y el boton Ver similares (Desktop)", async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C85-D-004';
      test.setTimeout(240000);

      const myUsuals = await abrirMyUsuals(page, testData);
      // Paso 1 — la precondición se comprueba: al menos un frecuente sin stock.
      const sinStock = myUsuals.tarjetas.filter({ hasText: /pronto disponible/i });
      expect(await sinStock.count(), 'la cuenta tiene al menos un frecuente sin stock').toBeGreaterThan(0);

      // Paso 2 — su tarjeta.
      const shelf = new ShelfProducto(page, sinStock.first());
      await expect(shelf.prontoDisponible, 'la tarjeta muestra "Pronto disponible"').toBeVisible();
      await expect(shelf.agregar, 'no se muestra "Agregar"').toHaveCount(0);
      await expect(shelf.verSimilares, 'se muestra "Ver similares" en su lugar').toBeVisible();
      await myUsuals.capturarEvidencia(cp, 2, 'tarjeta sin stock', { elemento: sinStock.first() });

      await myUsuals.capturarEvidencia(cp);
    });

    test('TC-B2C85-D-005 · Agregar producto al carro desde la pagina de My Usuals (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C85-D-005';
      test.setTimeout(240000);

      const myUsuals = await abrirMyUsuals(page, testData);
      const conStock = myUsuals.tarjetas.filter({ has: page.getByRole('button', { name: /^agregar$/i }) });
      expect(await conStock.count(), 'la cuenta tiene al menos un frecuente con stock').toBeGreaterThan(0);
      const shelf = new ShelfProducto(page, conStock.first());
      // Se parte del producto fuera del carro, para que el conteo se lea limpio.
      await shelf.sacarDelCarro();
      const antes = (await myUsuals.header.conteoAnunciadoCarrito()) ?? 0;
      const urlAntes = page.url();
      await myUsuals.capturarEvidencia(cp, 1, `carro con ${antes} productos`);

      // Paso 2 — "Agregar" en la tarjeta.
      await shelf.agregar.click();

      // Paso 3 — el contador sube y la página no cambia.
      await expect
        .poll(async () => (await myUsuals.header.conteoAnunciadoCarrito()) ?? 0, {
          message: 'el contador del carro se actualiza',
          timeout: 20000,
        })
        .toBe(antes + 1);
      await shelf.esperarCantidad(1);
      expect(page.url(), 'el usuario permanece en My Usuals').toBe(urlAntes);
      await myUsuals.capturarEvidencia(cp, 3, 'producto agregado y contador actualizado');

      await myUsuals.capturarEvidencia(cp);
      // Limpieza: el carro de la cuenta queda como estaba.
      await shelf.sacarDelCarro();
    });

    test('TC-B2C85-D-007 · Estado de carga inicial mientras se recuperan los datos (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C85-D-007';
      test.setTimeout(240000);

      await iniciarSesion(page, testData);
      // La carga se alarga reteniendo la petición de los productos frecuentes: sin eso el estado
      // de carga dura un instante y no se puede observar.
      await page.route('**/shopper-products/v1/organizations/*/products?ids=*', async (r) => {
        await new Promise((res) => setTimeout(res, 6000));
        await r.continue();
      });

      // Paso 1 — entrar a la página.
      await page.goto('/account/my-usuals', { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(1500);

      // Paso 2 — mientras tanto, el área de la grilla muestra su estado de carga. En este sitio
      // ese estado son tarjetas placeholder (skeleton) en la grilla, no un ícono: se cuentan las
      // celdas de la grilla que todavía no tienen ni imagen ni texto.
      const indicador = await page.evaluate(() => {
        const main = document.querySelector('#app-main');
        if (!main) return null;
        const grilla = [...main.querySelectorAll('*')].find(
          (e) => getComputedStyle(e).display === 'grid' && e.children.length > 0,
        );
        if (!grilla) return null;
        const vacias = [...grilla.children].filter(
          (c) => !c.querySelector('img') && !(c as HTMLElement).innerText.trim() && c.getBoundingClientRect().height > 50,
        ).length;
        const spinner = Boolean(main.querySelector('.chakra-spinner, [role="progressbar"]'));
        return vacias > 0 || spinner ? { placeholders: vacias, spinner } : null;
      });
      await new MyUsualsPage(page).capturarEvidencia(cp, 2, 'grilla durante la carga');
      expect(
        indicador,
        'se muestra un estado de carga en el área de la grilla (placeholders o ícono)',
      ).not.toBeNull();
      test.info().annotations.push({
        type: 'estado-de-carga',
        description: `placeholders=${indicador?.placeholders} spinner=${indicador?.spinner}`,
      });
      await expect(new MyUsualsPage(page).tarjetas, 'las tarjetas aún no están mientras carga').toHaveCount(0);

      // Al llegar los datos, el indicador da paso a la grilla.
      await expect(new MyUsualsPage(page).tarjetas.first(), 'luego carga la grilla').toBeVisible({ timeout: 30000 });
      await new MyUsualsPage(page).capturarEvidencia(cp, 2, 'grilla cargada');

      await new MyUsualsPage(page).capturarEvidencia(cp);
    });

    test('TC-B2C85-D-008 · Error al cargar los datos del atributo myUsuals muestra mensaje y boton Reintentar (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C85-D-008';
      test.setTimeout(240000);

      await iniciarSesion(page, testData);
      // Paso 1 — simular el error: la petición del customer, que trae `c_myUsuals`, responde 500.
      let cortadas = 0;
      await page.route(/\/shopper-customers\/v1\/organizations\/[^/]+\/customers\/[^/?]+\?/, (r) => {
        if (r.request().method() !== 'GET') return r.continue();
        cortadas += 1;
        return r.fulfill({ status: 500, contentType: 'application/json', body: '{"title":"Internal Server Error"}' });
      });

      // Paso 2 — entrar a la página.
      await page.goto('/account/my-usuals', { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(6000);
      const myUsuals = new MyUsualsPage(page);
      await myUsuals.capturarEvidencia(cp, 2, 'pagina con el error simulado');
      expect(cortadas, 'se simuló el error al recuperar el customer').toBeGreaterThan(0);

      // Paso 3 — mensaje y botón Reintentar.
      await expect(
        page.getByText(/no podemos cargar su informaci[oó]n/i).first(),
        'se muestra "No podemos cargar su información"',
      ).toBeVisible({ timeout: 15000 });
      await expect(page.getByRole('button', { name: /reintentar/i }), 'se muestra el botón Reintentar').toBeVisible();
      await myUsuals.capturarEvidencia(cp, 3, 'mensaje de error y Reintentar');

      await myUsuals.capturarEvidencia(cp);
    });

    test('TC-B2C85-D-009 · Grilla de 5 columnas en Desktop con header y footer estandar (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C85-D-009';
      test.setTimeout(240000);

      const myUsuals = await abrirMyUsuals(page, testData);
      await myUsuals.capturarEvidencia(cp, 1, 'mis productos frecuentes');

      const columnas = await myUsuals.columnasDeLaGrilla();
      expect(columnas, `la grilla se muestra en 5 columnas (son ${columnas})`).toBe(5);
      await myUsuals.capturarEvidencia(cp, 2, 'grilla de 5 columnas', { elemento: page.locator('#app-main') });

      await expect(myUsuals.header.root.first(), 'se muestra el header estándar').toBeVisible();
      await expect(myUsuals.header.miniCarrito.first(), 'el header trae su mini carrito').toBeVisible();
      await myUsuals.footer.root.first().scrollIntoViewIfNeeded();
      await expect(myUsuals.footer.root.first(), 'se muestra el footer estándar').toBeVisible();
      await myUsuals.capturarEvidencia(cp, 3, 'footer estandar', { elemento: myUsuals.footer.root.first() });

      await myUsuals.capturarEvidencia(cp);
    });
  });

  test.describe('Desktop 1440x900 (sin sesion)', () => {
    test.use(DESKTOP);

    test('TC-B2C85-D-003 · Acceso sin sesion activa redirige al Home con el drawer de login abierto (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C85-D-003';
      test.setTimeout(240000);

      const myUsuals = new MyUsualsPage(page);
      const login = new LoginModal(page);

      // Paso 1 — sin sesión activa, navegar directo a la URL de My Usuals.
      //
      // Se navega sin exigir que la página cargue su contenido: el caso afirma que el sistema
      // redirige, así que esperar el título de My Usuals sería esperar una pantalla que no debe
      // aparecer.
      await myUsuals.navegarSinEsperarContenido();
      await myUsuals.capturarEvidencia(cp, 1, 'destino tras entrar sin sesion');

      // Paso 2 — la redirección y el estado del drawer de login.
      const destino = myUsuals.destino();
      expect(
        destino.esHome,
        `el sistema redirige al Home en vez de servir la página (terminó en "${destino.path}")`,
      ).toBe(true);

      // El drawer se identifica por su propio contenido y no por el rol: el storefront usa
      // `role="dialog"` también para el mini carro y el modal de categorías, así que un
      // `getByRole('dialog')` pelado daría por bueno el panel equivocado.
      await expect(
        login.root,
        'el drawer de inicio de sesión queda abierto sobre el Home',
      ).toBeVisible({ timeout: 20000 });
      await expect(
        login.campoRut,
        'el drawer muestra su campo de RUT, listo para iniciar sesión',
      ).toBeVisible();
      await myUsuals.capturarEvidencia(cp, 2, 'drawer de login abierto sobre el Home', {
        elemento: login.root,
      });

      await myUsuals.capturarEvidencia(cp);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C85-M-002 · Grilla de 2 columnas en Mobile/App con header y footer estandar (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C85-M-002';
      test.setTimeout(240000);

      const myUsuals = await abrirMyUsuals(page, testData);
      await myUsuals.capturarEvidencia(cp, 1, 'mis productos frecuentes en Mobile');

      const columnas = await myUsuals.columnasDeLaGrilla();
      expect(columnas, `la grilla se muestra en 2 columnas (son ${columnas})`).toBe(2);
      await myUsuals.capturarEvidencia(cp, 2, 'grilla de 2 columnas', { elemento: page.locator('#app-main') });

      await expect(myUsuals.header.root.first(), 'se muestra el header estándar').toBeVisible();
      await myUsuals.footer.root.first().scrollIntoViewIfNeeded();
      await expect(myUsuals.footer.root.first(), 'se muestra el footer estándar').toBeVisible();
      await myUsuals.capturarEvidencia(cp, 3, 'footer estandar', { elemento: myUsuals.footer.root.first() });

      await myUsuals.capturarEvidencia(cp);
    });
  });
});
