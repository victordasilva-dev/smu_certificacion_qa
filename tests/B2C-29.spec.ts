import { Page } from '@playwright/test';
import { test, expect } from './support/fixtures';
import { LoadedTestData, token } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { HomePage, MyUsualsPage } from './pages/HomePage';
import { ShelfProducto } from './pages/ShelfProducto';

/**
 * B2C-29 — Home configurable desde Page Designer.
 *
 * Están aquí los tres TC de la suite que se pudieron ejecutar. Los demás quedaron cerrados antes
 * de llegar al navegador o durante la exploración:
 *
 * - Los cuatro `-APP-` y `-BM-` son `Fuera de Alcance`: no se conducen con Playwright.
 * - TC-B2C29-D-005 y D-006 quedaron `Bloqueado` por data, con sus tokens de fecha en TBD.
 * - TC-B2C29-D-002, D-003, D-004, D-007 y D-008 exigen configurar el Home desde Page Designer
 *   —agregar componentes, publicar un cambio, provocar un error de carga, definir un segmento—,
 *   que no se hace desde el storefront.
 * - TC-B2C29-D-009, D-010 y D-012 quedaron `Bloqueado` por data: los tres necesitan una cuenta
 *   concreta —con productos frecuentes, sin ellos— y la columna `Test data` de esas filas solo
 *   declara `{BASE_URL}`. Elegir una cuenta cualquiera del Excel de data haría que el veredicto
 *   dependiera de una suposición: si el carrusel no aparece, no se sabría si es un defecto o si
 *   esa cuenta no era la del caso.
 *
 * Re-corrida 2026-10-07 (planilla `SP1/B2C-29 WEB Test Cases.xlsx`, con las cuentas ya declaradas):
 * se suman los casos de My Usuals (D-009, D-012, M-010..M-014) y el de padding/fondos (M-002).
 * El carrusel es el componente `smu.myUsualsCarousel` del Home, que se resuelve por su tipo de
 * Page Designer (ver `HomePage.componentePorTipo`). Cada caso de My Usuals **comprueba su
 * precondición** en `/account/my-usuals` antes de mirar el Home: así un "no se ve el carrusel"
 * distingue un defecto de una cuenta que no tiene frecuentes.
 *
 * Re-corrida 2026-10-09: D-010 ya declara {COMPRADOR_SIN_FRECUENTES_USER} y se suma su `test()`.
 *
 * Sobre cómo se cuentan los componentes: el Home no delimita cada bloque con una clase ni un
 * `data-attribute`, así que se cuentan por sus encabezados, filtrados por visibilidad porque el
 * DOM trae también los de la variante del otro form-factor con altura cero.
 */

type Cuenta = 'COMPRADOR' | 'COMPRADOR_FRECUENTES' | 'COMPRADOR_SIN_FRECUENTES';

/**
 * Inicia sesión desde el Home con la cuenta declarada y comprueba en "Mis productos frecuentes" que
 * la cuenta cumple la precondición del caso. Devuelve el Home ya recargado con la sesión.
 */
async function homeConCuenta(
  page: Page,
  testData: LoadedTestData,
  cuenta: Cuenta,
  cp: string,
  conFrecuentes: boolean,
): Promise<HomePage> {
  const home = new HomePage(page);
  await home.goto();
  await home.login.iniciarSesion(token(testData, `${cuenta}_USER`)!, token(testData, `${cuenta}_PASSWORD`)!);
  await expect(home.login.disparador, 'sesión iniciada').toHaveCount(0);

  const usuals = new MyUsualsPage(page);
  await usuals.goto();
  expect(
    await usuals.tieneProductosFrecuentes(),
    `precondición: la cuenta ${conFrecuentes ? 'tiene' : 'no tiene'} productos frecuentes`,
  ).toBe(conFrecuentes);
  await usuals.capturarEvidencia(
    cp,
    1,
    conFrecuentes ? 'Mis productos frecuentes de la cuenta' : 'la cuenta no tiene productos frecuentes',
  );

  await home.goto();
  await home.recorrerCompleto();
  return home;
}

/** Lleva al carrusel My Usuals y exige que se muestre con productos. */
async function carruselVisible(home: HomePage) {
  const componente = await home.componenteMyUsuals();
  expect(componente, 'el Home publica el componente My Usuals').not.toBeNull();
  await home.llevarAVista(componente!);
  expect(await home.alto(componente!), 'alto del carrusel My Usuals en el Home').toBeGreaterThan(0);
  await expect(home.shelvesEn(componente!).first(), 'productos frecuentes en el carrusel').toBeVisible();
  return componente!;
}

/** Exige que el Home no muestre el carrusel My Usuals ni le reserve espacio. */
async function sinCarrusel(home: HomePage) {
  const componente = await home.componenteMyUsuals();
  if (componente) {
    expect(await home.alto(componente), 'alto que ocupa el carrusel My Usuals (espacio vacío)').toBe(0);
    await expect(home.shelvesEn(componente), 'productos en el carrusel My Usuals').toHaveCount(0);
  }
  await expect(home.carruselMyUsuals.locator('visible=true'), 'título de My Usuals').toHaveCount(0);
}

test.describe('B2C-29 — Home configurable desde Page Designer', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C29-D-001 · Home Desktop carga sin autenticacion y muestra los componentes configurados en PD (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C29-D-001';
      test.setTimeout(120000);

      // Pasos 1 y 2 — navegar al Home sin sesión y comprobar que no pide login.
      const home = new HomePage(page);
      await home.goto();
      expect(new URL(page.url()).pathname, 'el Home no redirige a una pantalla de acceso').toBe('/');
      await expect(
        home.header.areaSSO,
        'el header ofrece iniciar sesión, señal de que no hay sesión activa',
      ).toBeVisible();
      await home.capturarEvidencia(cp, 2, 'Home cargado sin solicitar login');

      // Paso 3 — recorrer la página y verificar los componentes.
      await home.recorrerCompleto();
      const titulos = await home.titulosDeComponentes();
      expect(titulos.length, 'componentes configurados visibles en el Home').toBeGreaterThan(0);

      // Ningún componente llega roto: el CA2 habla de que se muestran los configurados.
      const imgs = await home.imagenes();
      expect(imgs.total, 'imágenes de los componentes del Home').toBeGreaterThan(0);
      expect(imgs.rotas, 'imágenes que no cargaron').toBe(0);

      await home.capturarEvidencia(cp, 3, `Home con sus ${titulos.length} componentes`, {
        fullPage: true,
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C29-D-011 · My Usuals no se muestra para usuario no logueado (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C29-D-011';
      test.setTimeout(120000);

      // Paso 1 — navegar al Home sin sesión.
      const home = new HomePage(page);
      await home.goto();
      await expect(home.header.areaSSO, 'no hay sesión activa').toBeVisible();
      await home.recorrerCompleto();
      await home.capturarEvidencia(cp, 1, 'Home sin sesion iniciada', { fullPage: true });

      // Paso 2 — el carrusel no está.
      await expect(home.carruselMyUsuals, 'el carrusel de productos frecuentes').toHaveCount(0);
      await home.capturarEvidencia(cp, 2, 'Home sin el carrusel My Usuals');

      await home.capturarEvidencia(cp);
    });

    // Re-corrida 2026-10-09: la fila ya declara {COMPRADOR_SIN_FRECUENTES_USER}.
    test('TC-B2C29-D-010 · My Usuals no se muestra para usuario logueado sin productos frecuentes (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C29-D-010';
      test.setTimeout(180000);

      // Pasos 1 y 2 — sesión con {COMPRADOR_SIN_FRECUENTES_USER} (sin frecuentes, comprobado) y Home.
      const home = await homeConCuenta(page, testData, 'COMPRADOR_SIN_FRECUENTES', cp, false);
      await home.capturarEvidencia(cp, 2, 'Home con sesion iniciada', { fullPage: true });

      // Paso 3 — donde iría My Usuals no hay carrusel ni espacio vacío.
      await sinCarrusel(home);
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C29-D-009 · Carrusel My Usuals se muestra para usuario logueado con productos frecuentes (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C29-D-009';
      test.setTimeout(180000);

      // Pasos 1 y 2 — sesión con la cuenta declarada (con frecuentes) y vuelta al Home.
      const home = await homeConCuenta(page, testData, 'COMPRADOR', cp, true);
      await home.capturarEvidencia(cp, 2, 'Home con sesion iniciada');

      // Paso 3 — el carrusel muestra los frecuentes y el CTA "Ver todo".
      const carrusel = await carruselVisible(home);
      await expect(home.ctaVerTodoEn(carrusel), 'CTA Ver todo del carrusel').toBeVisible();
      await home.capturarEvidencia(cp, 3, 'carrusel My Usuals', { elemento: carrusel });
      await home.capturarEvidencia(cp);
    });

    test("TC-B2C29-D-012 · Clic en el CTA 'Ver todo' del carrusel My Usuals navega a la coleccion completa (Desktop)", async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C29-D-012';
      test.setTimeout(180000);

      // Pasos 1 y 2 — sesión con la cuenta declarada y carrusel en el Home.
      const home = await homeConCuenta(page, testData, 'COMPRADOR', cp, true);
      const carrusel = await carruselVisible(home);
      await home.capturarEvidencia(cp, 2, 'carrusel My Usuals', { elemento: carrusel });

      // Pasos 3 y 4 — "Ver todo" lleva a la colección completa.
      await home.ctaVerTodoEn(carrusel).click();
      await expect(page, 'redirección a la colección de productos frecuentes').toHaveURL(/\/account\/my-usuals/);
      await expect(new MyUsualsPage(page).titulo).toBeVisible();
      await home.capturarEvidencia(cp, 4, 'coleccion completa de productos frecuentes');
      await home.capturarEvidencia(cp);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C29-M-001 · Home Mobile carga sin autenticacion y muestra los componentes configurados en PD (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C29-M-001';
      test.setTimeout(120000);

      // Pasos 1 y 2 — navegar al Home sin sesión y comprobar que no pide login.
      const home = new HomePage(page);
      await home.goto();
      expect(new URL(page.url()).pathname, 'el Home no redirige a una pantalla de acceso').toBe('/');
      await expect(home.header.areaSSO, 'no hay sesión activa').toBeVisible();
      await home.capturarEvidencia(cp, 2, 'Home cargado sin solicitar login');

      // Paso 3 — recorrer la página y verificar los componentes.
      await home.recorrerCompleto();
      const titulos = await home.titulosDeComponentes();
      expect(titulos.length, 'componentes configurados visibles en el Home').toBeGreaterThan(0);

      const imgs = await home.imagenes();
      expect(imgs.total, 'imágenes de los componentes del Home').toBeGreaterThan(0);
      expect(imgs.rotas, 'imágenes que no cargaron').toBe(0);

      await home.capturarEvidencia(cp, 3, `Home con sus ${titulos.length} componentes`, {
        fullPage: true,
      });
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C29-M-002 · Verificar que los componentes de la Home tienen padding lateral y los fondos ocupan todo el ancho (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C29-M-002';
      test.setTimeout(120000);

      // Pasos 1 y 2 — Home como invitado.
      const home = new HomePage(page);
      await home.goto();
      await home.capturarEvidencia(cp, 2, 'Home cargado');

      // Paso 3 — bordes de cada componente.
      await home.recorrerCompleto();
      const ancho = page.viewportSize()!.width;
      const bordes = await home.bordesDeComponentes();
      expect(bordes.length, 'componentes medidos').toBeGreaterThan(0);
      const sinPadding = bordes
        .filter((b) => b.izq < 8 || b.der < 8)
        .map((b) => `${b.id} (izq ${b.izq}, der ${b.der})`);
      expect(sinPadding, 'componentes con contenido pegado al borde de la pantalla').toEqual([]);
      const conFondo = bordes.filter((b) => b.fondo);
      const fondoRecortado = conFondo
        .filter((b) => b.fondo!.x !== 0 || b.fondo!.ancho !== ancho)
        .map((b) => `${b.id} (fondo x=${b.fondo!.x}, ancho ${b.fondo!.ancho} de ${ancho})`);
      expect(fondoRecortado, 'componentes cuyo fondo no va de extremo a extremo').toEqual([]);
      test.info().annotations.push({
        type: 'medicion',
        description: `${bordes.length} componentes; padding mínimo ${Math.min(...bordes.map((b) => Math.min(b.izq, b.der)))} px; ${conFondo.length} con fondo de color a ${ancho} px: ${conFondo.map((b) => b.id).join(', ')}`,
      });

      for (const [i, b] of conFondo.slice(0, 2).entries()) {
        const c = home.main.locator(`div.component[id="${b.id}"]`);
        await home.llevarAVista(c);
        await home.capturarEvidencia(cp, 3, `componente con fondo ${i + 1} de extremo a extremo`, { elemento: c });
      }
      await home.capturarEvidencia(cp, 3, 'Home completa con padding lateral', { fullPage: true });
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C29-M-010 · Verificar que el carrusel My Usuals muestra los productos frecuentes del usuario (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C29-M-010';
      test.setTimeout(180000);

      // Pasos 1 a 3 — sesión con {COMPRADOR_FRECUENTES_USER}.
      const home = await homeConCuenta(page, testData, 'COMPRADOR_FRECUENTES', cp, true);
      await home.capturarEvidencia(cp, 3, 'Home con sesion iniciada');

      // Paso 4 — carrusel con los frecuentes y el CTA "Ver todo".
      const carrusel = await carruselVisible(home);
      await expect(home.ctaVerTodoEn(carrusel), 'CTA Ver todo del carrusel').toBeVisible();
      await home.capturarEvidencia(cp, 4, 'carrusel My Usuals', { elemento: carrusel });
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C29-M-011 · Verificar que "Ver todo" del carrusel My Usuals abre la colección completa (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C29-M-011';
      test.setTimeout(180000);

      // Pasos 1 a 4 — sesión y carrusel en el Home.
      const home = await homeConCuenta(page, testData, 'COMPRADOR_FRECUENTES', cp, true);
      const carrusel = await carruselVisible(home);
      await home.capturarEvidencia(cp, 4, 'carrusel My Usuals', { elemento: carrusel });

      // Pasos 5 y 6 — "Ver todo" abre la colección completa.
      await home.ctaVerTodoEn(carrusel).click();
      await expect(page, 'colección de productos frecuentes').toHaveURL(/\/account\/my-usuals/);
      await expect(new MyUsualsPage(page).titulo).toBeVisible();
      await home.capturarEvidencia(cp, 6, 'coleccion completa de productos frecuentes');
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C29-M-012 · Verificar que "Agregar" en el carrusel My Usuals suma el producto al carro (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C29-M-012';
      test.setTimeout(180000);

      // Pasos 1 a 4 — sesión y carrusel en el Home.
      const home = await homeConCuenta(page, testData, 'COMPRADOR_FRECUENTES', cp, true);
      const carrusel = await carruselVisible(home);
      await home.capturarEvidencia(cp, 4, 'carrusel My Usuals', { elemento: carrusel });

      // Paso 5 — contador del carro y "Agregar" en un producto del carrusel.
      const antes = (await home.header.conteoAnunciadoCarrito()) ?? 0;
      const shelf = new ShelfProducto(
        page,
        home.shelvesEn(carrusel).filter({ has: page.getByRole('button', { name: /^agregar$/i }) }).first(),
      );
      await shelf.clicAgregar();

      // Paso 6 — contador +1 y stepper con 1 unidad.
      await shelf.esperarCantidad(1);
      expect(await shelf.cantidadEnCarro(), 'unidades en el stepper del producto').toBe(1);
      await expect
        .poll(() => home.header.conteoAnunciadoCarrito(), { message: 'contador del carro' })
        .toBe(antes + 1);
      await home.capturarEvidencia(cp, 6, 'producto con stepper y contador del carro', { elemento: carrusel });
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C29-M-013 · Verificar que un usuario logueado sin productos frecuentes no ve el carrusel My Usuals (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C29-M-013';
      test.setTimeout(180000);

      // Pasos 1 a 4 — sesión con {COMPRADOR_SIN_FRECUENTES_USER} y Home.
      const home = await homeConCuenta(page, testData, 'COMPRADOR_SIN_FRECUENTES', cp, false);
      await home.capturarEvidencia(cp, 4, 'Home con sesion iniciada', { fullPage: true });

      // Esperado — sin carrusel y sin espacio vacío.
      await sinCarrusel(home);
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C29-M-014 · Verificar que un usuario invitado no ve el carrusel My Usuals (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C29-M-014';
      test.setTimeout(120000);

      // Pasos 1 a 3 — Home como invitado, recorrida completa.
      const home = new HomePage(page);
      await home.goto();
      await expect(home.header.areaSSO, 'no hay sesión activa').toBeVisible();
      await home.recorrerCompleto();
      await home.capturarEvidencia(cp, 3, 'Home de invitado completa', { fullPage: true });

      // Esperado — sin carrusel y sin espacio vacío.
      await sinCarrusel(home);
      await home.capturarEvidencia(cp);
    });
  });
});
