import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { LoadedTestData } from './support/testData';
import { DESKTOP_1280, MOBILE } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { ListadoDelSku } from './pages/ListadoDelSku';
import { loginConOtp } from './support/loginOtp';
import { conCandado } from './support/candadoOtp';

/**
 * B2C-89 — Add to cart desde la shelf (botón "Agregar", stepper "En carro", cartlimit).
 *
 * D/M-007 quedaron en `Bloqueado Data` en la exploración y no tienen `test()`: no declaran el SKU
 * con la promo "Completa la promo".
 *
 * D/M-001, 003, 004 y D-005 estuvieron bloqueados porque sus SKU no tenían stock con la dirección
 * de la cuenta (La Florida). Desde el 2026-11-13 {SKU_UNITARIO} es 674797 (PLP
 * /category/lavalozas-y-lavavajillas, con "Agregar") y {SKU_STOCK_LIMITADO} 638426003 muestra
 * "Últimas unidades" en /category/lacteos-huevos-y-refrigerados_yoghurt_proteina.
 *
 * - **La sesión es correo + OTP** (el modal ya no pide RUT ni contraseña): se inicia una vez por
 *   form-factor y se reutiliza el storageState de `.qa/auth/b89-comprador-<d|m>.json`.
 * - **El badge del minicarro cuenta unidades**, no productos: 0 → 1 con "Agregar", 1 → 2 con "+".
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

const sesionPath = (mobile: boolean) => path.resolve(`.qa/auth/b89-comprador-${mobile ? 'm' : 'd'}.json`);

/** Sesión de {COMPRADOR_USER}: reutiliza el storageState del form-factor; si no sirve, correo + OTP. */
async function iniciarSesion(page: Page, testData: LoadedTestData) {
  const mobile = test.info().project.name === 'mobile';
  const ficha = sesionPath(mobile);
  if (fs.existsSync(ficha)) {
    const estado = JSON.parse(fs.readFileSync(ficha, 'utf-8'));
    await page.context().addCookies(estado.cookies ?? []);
    const origen = (estado.origins ?? [])[0];
    if (origen?.localStorage?.length) {
      await page.addInitScript((items: { name: string; value: string }[]) => {
        if (sessionStorage.getItem('__b89_ls')) return;
        for (const { name, value } of items) localStorage.setItem(name, value);
        sessionStorage.setItem('__b89_ls', '1');
      }, origen.localStorage);
    }
  }
  const home = new HomePage(page);
  await home.goto();
  await home.cookies.aceptarSiAparece();
  const conSesion = await home.header.saludo.first().waitFor({ state: 'visible', timeout: 20000 }).then(() => true, () => false);
  if (!conSesion) {
    // loginConOtp ya responde la oferta de passkey; con la sesión guardada no aparece y esperarla
    // costaba 20 s por test.
    const correo = token(testData, 'COMPRADOR_USER')!;
    await conCandado(correo, () => loginConOtp(page, correo));
    await home.header.saludo.first().waitFor({ state: 'visible', timeout: 30000 });
  }
  fs.mkdirSync(path.dirname(ficha), { recursive: true });
  await page.context().storageState({ path: ficha });
}

/** Precondición: el SKU con `unidades` en el carro, y la PLP vuelta a abrir para verlo así. */
async function conUnidadesEnElCarro(listado: ListadoDelSku, unidades: number): Promise<void> {
  const shelf = listado.shelf;
  await shelf.sacarDelCarro();
  await shelf.clicAgregar();
  await shelf.esperarCantidad(1);
  for (let n = 1; n < unidades; n++) {
    await shelf.clicAumentar();
    await shelf.esperarCantidad(n + 1);
  }
  await listado.recargar();
  await shelf.esperarCantidad(unidades);
}

/** D/M-001: "Agregar" desde la shelf con sesión y dirección. */
function casoAgregarLogueado(cp: string) {
  return async ({ page, testData }: { page: Page; testData: LoadedTestData }) => {
    test.setTimeout(300000);
    const sku = token(testData, 'SKU_UNITARIO')!;
    await iniciarSesion(page, testData);
    const listado = new ListadoDelSku(page, sku);
    const categoria = await listado.abrirPlp();
    const shelf = listado.shelf;
    await shelf.sacarDelCarro();

    try {
      // Paso 1 — la PLP con sesión y dirección configurada.
      await expect(listado.header.saludo.first(), 'sesión iniciada').toBeVisible();
      await listado.capturarEvidencia(cp, 1, `PLP ${categoria} con sesión y dirección`);

      // Pasos 2-3 — la shelf del producto con "Agregar".
      await expect(shelf.agregar, `la shelf de ${sku} ofrece Agregar`).toBeVisible();
      const antes = (await listado.header.conteoAnunciadoCarrito()) ?? 0;
      await listado.capturarEvidencia(cp, 3, `shelf con Agregar; carro en ${antes}`, { elemento: shelf.root });

      // Paso 4 — clic en "Agregar".
      await shelf.clicAgregar();
      await shelf.esperarCantidad(1);

      // Pasos 5-6 — 1 unidad, sin abrir la PDP, shelf en "En carro" con stepper en 1.
      expect(page.url(), 'sigue en la PLP, no abrió la PDP').toContain(categoria);
      await expect(shelf.enCarro, 'la shelf pasa a "En carro"').toBeVisible();
      expect(await shelf.cantidadEnCarro(), 'el stepper muestra 1').toBe(1);
      await listado.capturarEvidencia(cp, 6, 'shelf En carro 1 un.', { elemento: shelf.root });

      // Paso 7 — el badge del minicarro suma la unidad.
      await expect.poll(() => listado.header.conteoAnunciadoCarrito(), { message: 'el badge del minicarro se actualiza' }).toBe(antes + 1);
      await listado.capturarEvidencia(cp, 7, `badge del minicarro en ${antes + 1}`, { elemento: listado.header.root });
    } finally {
      await shelf.sacarDelCarro().catch(() => {});
    }
  };
}

/** D/M-003: stepper con qty=1 — basurero y "+", sin "−". */
function casoQtyUno(cp: string) {
  return async ({ page, testData }: { page: Page; testData: LoadedTestData }) => {
    test.setTimeout(300000);
    const sku = token(testData, 'SKU_UNITARIO')!;
    const inicial = Number(token(testData, 'UNIDADES_CARRITO_INICIAL_1'));
    await iniciarSesion(page, testData);
    const listado = new ListadoDelSku(page, sku);
    const categoria = await listado.abrirPlp();
    const shelf = listado.shelf;

    try {
      // Paso 1 — con 1 unidad en el carro, la PLP.
      await conUnidadesEnElCarro(listado, inicial);
      await listado.capturarEvidencia(cp, 1, `PLP ${categoria} con ${inicial} un. en el carro`);

      // Pasos 2-4 — "En carro 1 un." con basurero y "+", sin "−".
      expect(await shelf.cantidadEnCarro(), 'la shelf dice En carro 1 un.').toBe(1);
      await expect(shelf.quitarDelCarro, 'ícono basurero').toBeVisible();
      await expect(shelf.aumentar, 'botón +').toBeVisible();
      await expect(shelf.disminuir, 'sin botón − con qty=1').toHaveCount(0);
      await listado.capturarEvidencia(cp, 3, 'En carro 1 un.: basurero y +', { elemento: shelf.root });

      // Paso 5 — "+" lleva a 2 y el minicarro se actualiza.
      const conteo = (await listado.header.conteoAnunciadoCarrito()) ?? 0;
      await shelf.clicAumentar();
      await shelf.esperarCantidad(2);
      expect(await shelf.cantidadEnCarro(), '+ lleva la cantidad a 2').toBe(2);
      await expect.poll(() => listado.header.conteoAnunciadoCarrito(), { message: 'el minicarro suma la unidad' }).toBe(conteo + 1);
      await listado.capturarEvidencia(cp, 5, `En carro 2 un.; minicarro en ${conteo + 1}`, { elemento: shelf.root });

      // Paso 6 — "−" vuelve a 1.
      await shelf.clicDisminuir();
      await shelf.esperarCantidad(1);
      expect(await shelf.cantidadEnCarro(), '− vuelve a 1').toBe(1);
      await listado.capturarEvidencia(cp, 6, 'de vuelta en 1 un.', { elemento: shelf.root });

      // Pasos 7-8 — el basurero elimina el producto y la shelf vuelve a "Agregar".
      await shelf.clicQuitar();
      await shelf.esperarCantidad(null);
      await expect(shelf.agregar, 'la shelf vuelve a Agregar').toBeVisible();
      await expect.poll(() => listado.header.conteoAnunciadoCarrito(), { message: 'el minicarro descuenta el producto' }).toBe(conteo - 1);
      await listado.capturarEvidencia(cp, 8, `shelf en Agregar; minicarro en ${conteo - 1}`, { elemento: shelf.root });
    } finally {
      await shelf.sacarDelCarro().catch(() => {});
    }
  };
}

/** D/M-004: stepper con qty>1 — "−" y "+" en tiempo real; en 1, basurero. */
function casoQtyMayorAUno(cp: string) {
  return async ({ page, testData }: { page: Page; testData: LoadedTestData }) => {
    test.setTimeout(300000);
    const sku = token(testData, 'SKU_UNITARIO')!;
    const inicial = Number(token(testData, 'UNIDADES_CARRITO_INICIAL_2'));
    await iniciarSesion(page, testData);
    const listado = new ListadoDelSku(page, sku);
    const categoria = await listado.abrirPlp();
    const shelf = listado.shelf;

    try {
      // Paso 1 — con 2 unidades en el carro, la PLP.
      await conUnidadesEnElCarro(listado, inicial);
      await listado.capturarEvidencia(cp, 1, `PLP ${categoria} con ${inicial} un. en el carro`);
      // Marca para el paso 6: una recarga la borraría.
      await page.evaluate(() => ((window as unknown as { __b89SinRecarga: boolean }).__b89SinRecarga = true));

      // Paso 2 — stepper "−" + 2 + "+".
      expect(await shelf.cantidadEnCarro(), 'el stepper muestra 2').toBe(2);
      await expect(shelf.disminuir, 'botón −').toBeVisible();
      await expect(shelf.aumentar, 'botón +').toBeVisible();
      await listado.capturarEvidencia(cp, 2, 'stepper − 2 +', { elemento: shelf.root });

      // Paso 3 — "+" a 3 y el minicarro suma.
      const conteo = (await listado.header.conteoAnunciadoCarrito()) ?? 0;
      await shelf.clicAumentar();
      await shelf.esperarCantidad(3);
      expect(await shelf.cantidadEnCarro(), '+ lleva a 3').toBe(3);
      await expect.poll(() => listado.header.conteoAnunciadoCarrito(), { message: 'el minicarro suma' }).toBe(conteo + 1);
      await listado.capturarEvidencia(cp, 3, `En carro 3 un.; minicarro en ${conteo + 1}`, { elemento: shelf.root });

      // Paso 4 — "−" vuelve a 2.
      await shelf.clicDisminuir();
      await shelf.esperarCantidad(2);
      expect(await shelf.cantidadEnCarro(), '− vuelve a 2').toBe(2);
      await expect.poll(() => listado.header.conteoAnunciadoCarrito(), { message: 'el minicarro resta' }).toBe(conteo);
      await listado.capturarEvidencia(cp, 4, `En carro 2 un.; minicarro en ${conteo}`, { elemento: shelf.root });

      // Paso 5 — "−" a 1: aparece el basurero y desaparece el "−".
      await shelf.clicDisminuir();
      await shelf.esperarCantidad(1);
      expect(await shelf.cantidadEnCarro(), '− lleva a 1').toBe(1);
      await expect(shelf.quitarDelCarro, 'en 1 aparece el basurero').toBeVisible();
      await expect(shelf.disminuir, 'en 1 desaparece el −').toHaveCount(0);
      await listado.capturarEvidencia(cp, 5, 'En carro 1 un.: basurero y +', { elemento: shelf.root });

      // Paso 6 — todo sin recargar la página.
      const sinRecarga = await page.evaluate(() => (window as unknown as { __b89SinRecarga?: boolean }).__b89SinRecarga === true);
      expect(sinRecarga, 'las actualizaciones ocurrieron sin recargar la página').toBe(true);
    } finally {
      await shelf.sacarDelCarro().catch(() => {});
    }
  };
}

/** D-005: "+" deshabilitado con el carro al máximo de stock del producto. */
function casoMaximoStock(cp: string) {
  return async ({ page, testData }: { page: Page; testData: LoadedTestData }) => {
    test.setTimeout(180000);
    const sku = token(testData, 'SKU_STOCK_LIMITADO')!;
    await iniciarSesion(page, testData);
    const listado = new ListadoDelSku(page, sku);
    const categoria = await listado.abrirPlp();
    const shelf = listado.shelf;

    try {
      // Precondición y paso 1 — el carro con el máximo disponible del producto, en la PLP.
      const maximo = await llenarHastaElLimite(listado);
      await listado.capturarEvidencia(cp, 1, `PLP ${categoria}: producto al máximo (${maximo} un.)`);

      // Paso 2 — la shelf en "En carro" con el stepper.
      expect(maximo, 'la shelf está en estado En carro').toBeGreaterThan(0);
      await listado.capturarEvidencia(cp, 2, `shelf En carro ${maximo} un.`, { elemento: shelf.root });

      // Paso 3 — "+" deshabilitado.
      await expect(shelf.aumentar, 'el botón + está deshabilitado al máximo de stock').toBeDisabled();

      // Pasos 4-5 — intentar "+" no suma unidades.
      const conteo = await listado.header.conteoAnunciadoCarrito();
      await shelf.aumentar.click({ force: true }).catch(() => {});
      await page.waitForTimeout(2500);
      expect(await shelf.cantidadEnCarro(), 'la cantidad se mantiene en el máximo').toBe(maximo);
      expect(await listado.header.conteoAnunciadoCarrito(), 'el carro no suma unidades').toBe(conteo);
      await listado.capturarEvidencia(cp, 5, `tras intentar +: sigue en ${maximo} un.`, { elemento: shelf.root });
    } finally {
      await shelf.sacarDelCarro().catch(() => {});
    }
  };
}

/** Lleva el SKU al cartlimit: lo agrega y suma con "+" hasta que el botón se deshabilita. */
async function llenarHastaElLimite(listado: ListadoDelSku): Promise<number> {
  const shelf = listado.shelf;
  await shelf.sacarDelCarro();
  await shelf.clicAgregar();
  await shelf.esperarCantidad(1);
  // Se detiene al deshabilitarse el "+" o cuando un clic deja de sumar: en la shelf de la PLP el
  // "+" puede seguir habilitado en el tope (638426003 en 5 un.), y esperar 15 s por cada vuelta
  // hacía caducar el caso en vez de llegar a la aserción.
  for (let i = 0; i < 30 && !(await shelf.aumentar.isDisabled()); i++) {
    const antes = (await shelf.cantidadEnCarro()) ?? 0;
    await shelf.clicAumentar();
    await shelf.esperarCantidad(antes + 1, 6000);
    if ((await shelf.cantidadEnCarro()) === antes) break;
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
      "TC-89-D-001 · Agregar producto al carro desde la shelf con usuario logueado y dirección configurada (Desktop)",
      casoAgregarLogueado('TC-89-D-001'),
    );

    test(
      "TC-89-D-003 · Estado 'En carro' con qty=1: muestra basurero (eliminar) y botón '+' (Desktop)",
      casoQtyUno('TC-89-D-003'),
    );

    test(
      "TC-89-D-004 · Estado 'En carro' con qty>1: muestra botón '−' y '+' con actualización en tiempo real (Desktop)",
      casoQtyMayorAUno('TC-89-D-004'),
    );

    test(
      "TC-89-D-005 · Botón '+' se deshabilita al alcanzar el máximo de stock disponible en el carrito (Desktop)",
      casoMaximoStock('TC-89-D-005'),
    );

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
      "TC-89-M-001 · Agregar producto al carro desde la shelf con usuario logueado y dirección configurada (Mobile)",
      casoAgregarLogueado('TC-89-M-001'),
    );

    test(
      "TC-89-M-003 · Estado 'En carro' con qty=1: muestra basurero y botón '+' en Mobile (Mobile)",
      casoQtyUno('TC-89-M-003'),
    );

    test(
      "TC-89-M-004 · Estado 'En carro' con qty>1: muestra '−' y '+' con actualización en tiempo real (Mobile)",
      casoQtyMayorAUno('TC-89-M-004'),
    );

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
