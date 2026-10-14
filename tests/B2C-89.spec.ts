import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { LoadedTestData } from './support/testData';
import { DESKTOP_1280, MOBILE } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { LoginModal } from './pages/LoginModal';
import { ListadoDelSku } from './pages/ListadoDelSku';

/**
 * B2C-89 — Add to cart desde la shelf (botón "Agregar", stepper "En carro", cartlimit).
 *
 * Aquí están los 4 TC ejecutables de los 14 de la planilla. Los otros 10 quedaron en
 * `Bloqueado Data` en la exploración y no tienen `test()`:
 *
 * - **{SKU_UNITARIO} y {SKU_STOCK_LIMITADO} no tienen stock** para la cuenta declarada: con su
 *   dirección activa (La Florida) sus PDP muestran "Pronto disponible" + "Ver similares"
 *   (D/M-001, 003, 004 y 005).
 * - **D/M-007 no declaran el SKU** con la promo "Completa la promo".
 *
 * Dos decisiones que gobiernan los casos que sí corren:
 *
 * - **D/M-002 corren como invitado.** Su precondición admite "Guest o Logueado SIN dirección", y la
 *   cuenta declarada tiene una dirección activa, así que la variante logueada no es alcanzable sin
 *   borrarla. Como invitado {SKU_UNITARIO} sí tiene stock.
 * - **La PLP se deduce del SKU**, no se elige: la categoría sale del breadcrumb de su PDP. La de
 *   {SKU_UNITARIO} es un N1 que no lista el producto, y el buscador falla con su nombre
 *   ("Error: SRP-012" con consultas largas), así que D/M-002 toman su shelf del carrusel del Home
 *   donde aparece: es el mismo componente, y no se elige ningún término de búsqueda.
 */

const MENSAJE_CARTLIMIT = 'Usted ha agregado la cantidad máxima de productos';

async function iniciarSesion(page: Page, testData: LoadedTestData) {
  const home = new HomePage(page);
  await home.goto();
  await home.cookies.aceptarSiAparece();
  await new LoginModal(page).iniciarSesion(token(testData, 'COMPRADOR_USER')!, token(testData, 'COMPRADOR_PASSWORD')!);
}

/** Lleva el SKU al cartlimit: lo agrega y suma con "+" hasta que el botón se deshabilita. */
async function llenarHastaElLimite(listado: ListadoDelSku): Promise<number> {
  const shelf = listado.shelf;
  await shelf.sacarDelCarro();
  await shelf.clicAgregar();
  await shelf.esperarCantidad(1);
  for (let i = 0; i < 30 && !(await shelf.aumentar.isDisabled()); i++) {
    const antes = (await shelf.cantidadEnCarro()) ?? 0;
    await shelf.clicAumentar();
    await shelf.esperarCantidad(antes + 1);
  }
  return (await shelf.cantidadEnCarro()) ?? 0;
}

function casoSinMetodoDeEntrega(cp: string) {
  return async ({ page, testData }: { page: Page; testData: LoadedTestData }) => {
    test.setTimeout(180000);
    const sku = token(testData, 'SKU_UNITARIO')!;
    const listado = new ListadoDelSku(page, sku);

    // Paso 1 — sin método de entrega (invitado), con la shelf del SKU a la vista.
    const enfocado = await listado.abrirHomeConElSku();
    expect(enfocado, `el SKU ${sku} aparece en un carrusel de productos del Home`).toBe(true);
    await expect(listado.sinFormaDeEntrega, 'el header dice "Elige una forma de entrega"').toBeVisible();
    await listado.capturarEvidencia(cp, 1, 'invitado: Elige una forma de entrega', {
      elemento: listado.header.root,
    });

    // Paso 2 — la shelf del producto con stock.
    const shelf = listado.shelf;
    await expect(shelf.agregar, `la shelf de ${sku} ofrece Agregar`).toBeVisible();
    const antes = (await listado.header.conteoAnunciadoCarrito()) ?? 0;
    await listado.capturarEvidencia(cp, 2, `shelf del producto; carro en ${antes}`, { elemento: shelf.root });

    // Paso 3 — clic en Agregar.
    await shelf.agregar.click();
    await page.waitForTimeout(4000);
    const despues = (await listado.header.conteoAnunciadoCarrito()) ?? 0;
    const cantidad = await shelf.cantidadEnCarro();
    await listado.capturarEvidencia(cp, 3, `tras Agregar: carro en ${despues}`);

    // Pasos 4-6 — se abre el Store Locator y el producto NO entra al carro.
    await expect.soft(listado.storeLocator.root, 'se abre el Store Locator en lugar de agregar').toBeVisible({
      timeout: 1000,
    });
    expect.soft(cantidad, 'la shelf no pasa a "En carro"').toBeNull();
    expect.soft(despues, `el badge del minicarrito no cambia (${antes} → ${despues})`).toBe(antes);
    await listado.capturarEvidencia(cp, 6, `shelf: ${cantidad === null ? 'Agregar' : `En carro ${cantidad} un.`}`, {
      elemento: shelf.root,
    });
  };
}

function casoCartlimit(cp: string) {
  return async ({ page, testData }: { page: Page; testData: LoadedTestData }) => {
    test.setTimeout(300000);
    const sku = token(testData, 'SKU_CAR_LIMIT')!;
    await iniciarSesion(page, testData);
    const listado = new ListadoDelSku(page, sku);
    const categoria = await listado.abrirPlp();
    const shelf = listado.shelf;

    try {
      // Precondición y paso 1 — el carro con la cantidad igual al cartlimit, en la PLP.
      const limite = await llenarHastaElLimite(listado);
      await listado.capturarEvidencia(cp, 1, `PLP ${categoria}: producto en el cartlimit (${limite} un.)`);

      // Paso 2 — la shelf en estado "En carro" con el stepper.
      expect(limite, 'la shelf está en estado En carro').toBeGreaterThan(1);
      await listado.capturarEvidencia(cp, 2, `shelf En carro ${limite} un.`, { elemento: shelf.root });

      // Paso 3 — "+" deshabilitado.
      await expect(shelf.aumentar, 'el botón + está deshabilitado en el cartlimit').toBeDisabled();

      // Paso 4 — el mensaje informativo con el texto de la HU.
      const mostrado = (await shelf.mensajeCantidadMaxima.count())
        ? ((await shelf.mensajeCantidadMaxima.first().innerText()) ?? '').trim()
        : '(ninguno)';
      await listado.capturarEvidencia(cp, 4, `mensaje mostrado: "${mostrado}"`, { elemento: shelf.root });
      expect.soft(mostrado, 'mensaje informativo del cartlimit').toBe(MENSAJE_CARTLIMIT);

      // Pasos 5-6 — intentar "+" no suma unidades.
      const conteo = await listado.header.conteoAnunciadoCarrito();
      await shelf.aumentar.click({ force: true }).catch(() => {});
      await page.waitForTimeout(2500);
      expect.soft(await shelf.cantidadEnCarro(), 'la cantidad se mantiene en el cartlimit').toBe(limite);
      expect.soft(await listado.header.conteoAnunciadoCarrito(), 'el carro no suma unidades').toBe(conteo);
      await listado.capturarEvidencia(cp, 5, `tras intentar +: sigue en ${limite} un.`, { elemento: shelf.root });
    } finally {
      await shelf.sacarDelCarro().catch(() => {});
    }
  };
}

test.describe('B2C-89 — Add to cart desde la shelf', () => {
  test.describe('Desktop 1280x900', () => {
    test.use(DESKTOP_1280);

    test(
      "TC-89-D-002 · Clic en 'Agregar' sin método de entrega configurado abre el Store Locator (Desktop)",
      casoSinMetodoDeEntrega('TC-89-D-002'),
    );

    test(
      "TC-89-D-006 · Cartlimit: botón '+' deshabilitado al alcanzar el límite de compra con mensaje informativo (Desktop)",
      casoCartlimit('TC-89-D-006'),
    );
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test(
      "TC-89-M-002 · Tap en 'Agregar' sin método de entrega configurado abre el Store Locator (Mobile)",
      casoSinMetodoDeEntrega('TC-89-M-002'),
    );

    test(
      "TC-89-M-006 · Cartlimit: botón '+' deshabilitado al alcanzar el límite de compra con mensaje (Mobile)",
      casoCartlimit('TC-89-M-006'),
    );
  });
});
