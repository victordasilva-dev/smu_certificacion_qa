import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP_1280, MOBILE } from './support/viewports';
import { PLPCategoriaPage } from './pages/PLPCategoriaPage';
import { ShelfProducto } from './pages/ShelfProducto';
import { BloqueDePreciosShelf, PrecioRenderizado } from './pages/BloqueDePreciosShelf';
import { PDPPage } from './pages/PDPPage';
import { LoginModal } from './pages/LoginModal';

/**
 * B2C-62 — Bloque de precios del shelf: precio, PPUM y mecánicas promocionales.
 *
 * Están aquí los 18 TC (9 Desktop + sus 9 pares Mobile) que tienen fixture en la PLP que la
 * planilla declara en `{PLP_URL}`. Los otros 37 no llegaron a tener `test()`:
 *
 * - **3 fuera de alcance**: los BM, que se configuran desde Business Manager.
 * - **10 bloqueados por cuenta no declarada**: se ejecutan con sesión iniciada —convivencia de
 *   membresía con profundización, prioridad entre membresía y medio de pago, `PriceDisplayPriority`
 *   con la membresía como tercer precio— y su columna `Test data` no dice con qué cuenta.
 * - **24 bloqueados por falta de fixture**: la PLP declarada no tiene ningún producto con promoción
 *   de % de catálogo, de precio fijo, con mecánica NxM, con "X% en X unidad", con promoción de
 *   medio de pago (ni Unipay ni Banco Estado) ni ningún pesable a granel con equivalencia de
 *   unidades. Se suman los dos pares temporales —la promo que vence y la que empieza su vigencia—,
 *   que piden mirar la PLP a ambos lados de una fecha configurada en BM.
 *
 * Dos decisiones que valen para toda la suite:
 *
 * - **El producto lo elige la mecánica que el TC nombra, dentro de la PLP declarada.** Cada caso
 *   busca en `{PLP_URL}` el shelf que cumple su precondición —sin promoción, con precio de socio,
 *   con NxPrecio— y la aserción de esa precondición va en el propio `test()`. Así el veredicto no
 *   depende de un SKU elegido a mano y la evidencia dice con qué producto se corrió. Es el mismo
 *   criterio con el que se cerró B2C-59.
 * - **El PPUM se recalcula a mano y se compara contra el renderizado.** Es la única forma de
 *   distinguir "el shelf muestra un PPUM" de "el shelf muestra el PPUM correcto", que es lo que
 *   piden CA1 y CA2. El gramaje sale del label de formato del propio shelf, no de una tabla aparte.
 */

/** Tolerancia del PPUM: el front redondea al peso, así que un peso de diferencia no es un defecto. */
const REDONDEO = 1;

/** La URL de la PLP que el TC declara en su columna `Test data`, exigida. */
function plpUrl(testData: Parameters<typeof token>[0]): string {
  const valor = token(testData, 'PLP_URL');
  if (!valor) throw new Error('Falta {PLP_URL} en el Excel de data: el TC lo declara como su origen');
  return valor;
}

const rutaDe = (url: string) => new URL(url).pathname.slice(1);

/** Abre la PLP declarada y espera a que la grilla esté hidratada. */
async function abrirPLP(page: Page, testData: Parameters<typeof token>[0]): Promise<PLPCategoriaPage> {
  const plp = new PLPCategoriaPage(page, rutaDe(plpUrl(testData)));
  await plp.goto();
  await expect(ShelfProducto.todos(page).first()).toBeVisible({ timeout: 60000 });
  await page.waitForLoadState('networkidle', { timeout: 60000 }).catch(() => {});
  return plp;
}

/** Los bloques de precios de todos los shelves de la PLP, en el orden de la grilla. */
async function bloquesDeLaPLP(page: Page): Promise<BloqueDePreciosShelf[]> {
  const total = await ShelfProducto.todos(page).count();
  return Array.from({ length: total }, (_, i) => {
    const shelf = ShelfProducto.enIndice(page, i);
    return new BloqueDePreciosShelf(page, shelf.root);
  });
}

/**
 * El primer shelf de la PLP que cumple la condición del TC, con su índice.
 *
 * Cuando ninguno la cumple, el caso no tiene fixture en la PLP declarada: se levanta un error que
 * lo dice con esas palabras, porque es un impedimento de dato y no un defecto del bloque de
 * precios. La fila declara la PLP como su origen y no un SKU, así que la alternativa —irse a
 * buscar el producto a otra categoría— sería ejecutar el caso con data que nadie declaró.
 */
async function primerShelfQue(
  page: Page,
  condicion: (precios: PrecioRenderizado[], bloque: BloqueDePreciosShelf) => Promise<boolean> | boolean,
  descripcion: string,
): Promise<{ bloque: BloqueDePreciosShelf; indice: number; precios: PrecioRenderizado[] }> {
  const bloques = await bloquesDeLaPLP(page);
  for (const [indice, bloque] of bloques.entries()) {
    const precios = await bloque.leerPrecios();
    if (await condicion(precios, bloque)) return { bloque, indice, precios };
  }
  throw new Error(
    `La PLP declarada en {PLP_URL} no tiene ningún producto ${descripcion}: el TC no tiene fixture ` +
      `y su fila no declara un SKU con el que ejecutarlo.`,
  );
}

const sinPromocion = (precios: PrecioRenderizado[]) =>
  precios.length === 1 && precios[0].tipo === 'unitario' && !precios[0].deSocio;

const conPrecioDeSocio = (precios: PrecioRenderizado[]) => precios.some((p) => p.deSocio);

const conNxPrecio = (precios: PrecioRenderizado[]) => precios.some((p) => p.tipo === 'nxprecio');

/** El PPUM que debería mostrar un precio, calculado a mano sobre el propio precio. */
const ppumEsperado = (precio: PrecioRenderizado, cantidadPorUnidad: number) =>
  Math.round(precio.importe / (cantidadPorUnidad * precio.unidades));

/*
 * Corrida 2026-10-07 (planilla SP1): los casos que ahora declaran SKU. Cada uno abre el shelf del
 * SKU declarado; cuando la fila declara la PLP se usa esa, y cuando solo declara el SKU, la PLP es
 * la categoría por defecto del producto (el último nivel de su breadcrumb), de modo que el caso no
 * corre con un producto elegido a mano.
 */

function tokenExigido(testData: Parameters<typeof token>[0], nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) throw new Error(`Falta {${nombre}} en el Excel de data: el TC lo declara`);
  return valor;
}

/** Abre la PLP (declarada o la categoría por defecto del SKU) y devuelve el bloque del shelf del SKU. */
async function shelfDelSku(
  page: Page,
  sku: string,
  urlPlp?: string,
): Promise<{ plp: PLPCategoriaPage; bloque: BloqueDePreciosShelf; ruta: string }> {
  let ruta = urlPlp ? new URL(urlPlp).pathname : '';
  if (!ruta) {
    const pdp = await new PDPPage(page).abrir(sku);
    ruta = (await pdp.categoriaPorDefecto()) ?? '';
    if (!ruta) throw new Error(`El producto ${sku} no expone su categoría en el breadcrumb de la PDP`);
  }
  const plp = new PLPCategoriaPage(page, ruta.replace(/^\//, ''));
  await plp.goto();
  await expect(ShelfProducto.todos(page).first()).toBeVisible({ timeout: 60000 });
  await page.waitForLoadState('networkidle', { timeout: 60000 }).catch(() => {});
  const shelf = ShelfProducto.porEnlaceOImagen(page, sku);
  await shelf.root.scrollIntoViewIfNeeded();
  await expect(shelf.root, `el shelf de ${sku} está en ${ruta}`).toBeVisible({ timeout: 30000 });
  await page.waitForTimeout(1500);
  return { plp, bloque: new BloqueDePreciosShelf(page, shelf.root), ruta };
}

/** Los TC nuevos de la corrida, registrados en el describe del form-factor que los llama. */
function casosConSkuDeclarado(ff: 'D' | 'M', etiqueta: 'Desktop' | 'Mobile'): void {
  test(`TC-B2C62-${ff}-004 · Mostrar precio/kg + PPUM (${etiqueta})`, async ({ page, testData }) => {
    const cp = `TC-B2C62-${ff}-004`;
    test.setTimeout(180000);
    const sku = tokenExigido(testData, 'SKU_PESABLE_CON_PESO_PROMEDIO');
    const { plp, bloque } = await shelfDelSku(page, sku, tokenExigido(testData, 'PLP_URL_PESABLES'));
    const precios = await bloque.leerPrecios();
    const cantidad = await bloque.cantidadEnUnidadEstandar();
    test.info().annotations.push({ type: 'bloque', description: `${await bloque.resumen()} | formato ${JSON.stringify(cantidad)}` });
    await plp.capturarEvidencia(cp, 2, 'shelf del producto pesable', { elemento: bloque.shelf });

    const principal = precios.find((p) => !p.deSocio && !p.tachado);
    expect(principal, 'el shelf muestra el precio').toBeTruthy();
    expect(principal!.ppum?.unidad, 'y su precio por kg (PPUM x kg)').toBe('kg');
    expect(cantidad, 'el formato del shelf permite verificar el PPUM').not.toBeNull();
    expect(
      Math.abs(principal!.ppum!.importe - ppumEsperado(principal!, cantidad!.cantidad)),
      `PPUM ${principal!.ppum!.texto} coherente con ${principal!.texto} por ${cantidad!.cantidad} kg`,
    ).toBeLessThanOrEqual(REDONDEO);
    await plp.capturarEvidencia(cp);
  });

  test(`TC-B2C62-${ff}-006 · Mostrar etiqueta %, precio promo y 'Antes' tachado (${etiqueta})`, async ({ page, testData }) => {
    const cp = `TC-B2C62-${ff}-006`;
    test.setTimeout(180000);
    const sku = tokenExigido(testData, 'SKU_PROM_PCT_DESCUENTO');
    const { plp, bloque, ruta } = await shelfDelSku(page, sku);
    const precios = await bloque.leerPrecios();
    const textoShelf = (await bloque.shelf.innerText()).replace(/\s+/g, ' ');
    test.info().annotations.push({ type: 'bloque', description: `${ruta} | ${await bloque.resumen()} | badge ${(await bloque.badgeDeDescuento.allInnerTexts()).join(',')}` });
    await plp.capturarEvidencia(cp, 2, 'shelf con promo de % de descuento', { elemento: bloque.shelf });

    // Paso 3 — la etiqueta con el % de descuento.
    await expect(bloque.badgeDeDescuento.first(), 'etiqueta con el % de descuento').toBeVisible();
    // Paso 4 — el precio promocional destacado como principal.
    const destacado = await bloque.precioDestacado();
    expect(destacado?.tachado, 'el precio destacado es el promocional, no el tachado').toBe(false);
    expect(destacado?.deSocio, 'el destacado no es el de socio').toBe(false);
    // Paso 5 — el precio anterior tachado con la etiqueta "Antes".
    const tachado = precios.find((p) => p.tachado || p.tipo === 'antes');
    expect(tachado, 'el precio anterior se muestra tachado').toBeTruthy();
    expect(textoShelf, 'el precio anterior lleva la etiqueta "Antes"').toMatch(/antes/i);
    // Paso 6 — el PPUM calculado sobre el precio promocional.
    expect(destacado?.ppum, 'el precio promocional muestra su PPUM').not.toBeNull();
    await plp.capturarEvidencia(cp);
  });

  test(`TC-B2C62-${ff}-007 · Renderizar % no redondo desde precio fijo igual que % off (${etiqueta})`, async ({ page, testData }) => {
    const cp = `TC-B2C62-${ff}-007`;
    test.setTimeout(180000);
    const sku = tokenExigido(testData, 'SKU_PROM_PRECIO_FIJO');
    const { plp, bloque, ruta } = await shelfDelSku(page, sku);
    const precios = await bloque.leerPrecios();
    const badge = (await bloque.badgeDeDescuento.first().innerText()).trim();
    test.info().annotations.push({ type: 'bloque', description: `${ruta} | ${await bloque.resumen()} | badge ${badge}` });
    await plp.capturarEvidencia(cp, 2, 'shelf con promo de precio fijo', { elemento: bloque.shelf });

    const fijo = precios.find((p) => !p.tachado && !p.deSocio);
    const regular = precios.find((p) => p.tachado || p.tipo === 'antes');
    expect(fijo && regular, 'el shelf muestra el precio fijo y el regular de referencia').toBeTruthy();
    const calculado = ((regular!.importe - fijo!.importe) / regular!.importe) * 100;
    const mostrado = Number(badge.match(/(\d{1,3})/)?.[1]);
    test.info().annotations.push({ type: 'calculo', description: `(${regular!.importe} - ${fijo!.importe}) / ${regular!.importe} = ${calculado.toFixed(2)}% → etiqueta ${badge}` });
    expect(Math.abs(mostrado - calculado), `la etiqueta ${badge} es el % calculado desde el precio fijo (${calculado.toFixed(2)}%)`).toBeLessThan(1);
    // Mismo componente que una promo % off estándar: el badge de descuento del bloque de precios.
    await expect(bloque.badgeDeDescuento.first(), 'se renderiza con la etiqueta de descuento estándar').toBeVisible();
    await plp.capturarEvidencia(cp);
  });

  test(`TC-B2C62-${ff}-008 · Mostrar etiqueta NxM y precio unitario regular (${etiqueta})`, async ({ page, testData }) => {
    const cp = `TC-B2C62-${ff}-008`;
    test.setTimeout(180000);
    const sku = tokenExigido(testData, 'SKU_PROM_NxM');
    const { plp, bloque } = await shelfDelSku(page, sku, tokenExigido(testData, 'PLP_URL_NxM'));
    const precios = await bloque.leerPrecios();
    test.info().annotations.push({ type: 'bloque', description: await bloque.resumen() });
    await plp.capturarEvidencia(cp, 2, 'shelf con promo NxM', { elemento: bloque.shelf });

    const nxm = precios.find((p) => p.tipo === 'nxm' && !p.deSocio);
    expect(nxm, 'la etiqueta con la mecánica NxM y el precio total de la oferta').toBeTruthy();
    const [, n, m] = nxm!.texto.match(/^(\d+) por (\d+) a/)!;
    const cu = precios.find((p) => /c\/u$/.test(p.texto) && !p.deSocio);
    expect(cu, 'el precio unitario en formato "$X c/u"').toBeTruthy();
    expect(cu!.importe, `"$X c/u" es el precio regular: ${nxm!.texto} = ${m} unidades pagadas → ${nxm!.importe / Number(m)} c/u`).toBe(
      Math.round(nxm!.importe / Number(m)),
    );
    test.info().annotations.push({ type: 'mecanica', description: `${n}x${m}` });
    await plp.capturarEvidencia(cp);
  });

  test(`TC-B2C62-${ff}-009 · Mostrar PPUM promocional y PPUM referencial en NxM (${etiqueta})`, async ({ page, testData }) => {
    const cp = `TC-B2C62-${ff}-009`;
    test.setTimeout(180000);
    const sku = tokenExigido(testData, 'SKU_PROM_NxM');
    const { plp, bloque } = await shelfDelSku(page, sku, tokenExigido(testData, 'PLP_URL_NxM'));
    const precios = await bloque.leerPrecios();
    const cantidad = await bloque.cantidadEnUnidadEstandar();
    test.info().annotations.push({ type: 'bloque', description: `${await bloque.resumen()} | formato ${JSON.stringify(cantidad)}` });
    await plp.capturarEvidencia(cp, 2, 'PPUM del shelf con promo NxM', { elemento: bloque.shelf });

    const nxm = precios.find((p) => p.tipo === 'nxm' && !p.deSocio);
    const cu = precios.find((p) => /c\/u$/.test(p.texto) && !p.deSocio);
    expect(nxm?.ppum, 'PPUM promocional sobre el total NxM').toBeTruthy();
    expect(cu?.ppum, 'PPUM referencial sobre el precio unitario regular').toBeTruthy();
    expect(cantidad, 'el formato del shelf permite verificar los PPUM').not.toBeNull();
    expect(Math.abs(nxm!.ppum!.importe - ppumEsperado(nxm!, cantidad!.cantidad)), `PPUM promocional ${nxm!.ppum!.texto}`).toBeLessThanOrEqual(REDONDEO + 2);
    expect(Math.abs(cu!.ppum!.importe - ppumEsperado(cu!, cantidad!.cantidad)), `PPUM referencial ${cu!.ppum!.texto}`).toBeLessThanOrEqual(REDONDEO);
    expect(nxm!.ppum!.importe, 'los dos PPUM son distinguibles').not.toBe(cu!.ppum!.importe);
    await plp.capturarEvidencia(cp);
  });

  test(`TC-B2C62-${ff}-022 · Tres precios simultaneos: oferta + lista + membresia (${etiqueta})`, async ({ page, testData }) => {
    const cp = `TC-B2C62-${ff}-022`;
    test.setTimeout(240000);
    const sku = tokenExigido(testData, 'SKU_PRECIO_OFERTA');

    // Paso 1 — sesión con la cuenta con membresía.
    const pdp = await new PDPPage(page).abrir(sku);
    await new LoginModal(page).iniciarSesion(
      tokenExigido(testData, 'COMPRADOR_MEMBRESIA_USER'),
      tokenExigido(testData, 'COMPRADOR_MEMBRESIA_PASSWORD'),
    );
    const ruta = (await pdp.categoriaPorDefecto()) ?? '';

    // Paso 2 — el shelf del producto con oferta y precio de membresía.
    const { plp, bloque } = await shelfDelSku(page, sku, new URL(ruta, page.url()).toString());
    const precios = await bloque.leerPrecios();
    test.info().annotations.push({ type: 'bloque', description: `${ruta} | ${await bloque.resumen()}` });
    await plp.capturarEvidencia(cp, 2, 'shelf con oferta, lista y membresia', { elemento: bloque.shelf });

    const destacado = await bloque.precioDestacado();
    expect(destacado && !destacado.tachado && !destacado.deSocio, 'precio oferta en acento como principal').toBe(true);
    expect(precios.some((p) => p.tachado || p.tipo === 'antes'), 'precio lista tachado como referencia').toBe(true);
    expect(precios.some((p) => p.deSocio), 'precio de membresía como tercer precio').toBe(true);
    await expect(bloque.rombo.first(), 'con su label identificador de membresía').toBeVisible();
    expect(precios.length, 'no se superan 3 precios').toBeLessThanOrEqual(3);
    await plp.capturarEvidencia(cp);
  });
}

test.describe('B2C-62 — Bloque de precios del shelf (precio, PPUM y promociones)', () => {
  // Cada caso abre la PLP del ambiente de desarrollo y espera a que la red se calme antes de leer
  // los precios, un tramo que en chromium se pasa de los 30 s que Playwright da por defecto. El
  // timeout que lo cubre vive en playwright.config.ts, no aquí: la lentitud es del ambiente y la
  // comparten todas las suites, así que repetirlo por archivo sería mantener el mismo número en
  // doce sitios.

  // ------------------------------------------------------------------ Desktop
  test.describe('Desktop 1280x900', () => {
    test.use(DESKTOP_1280);

    test('TC-B2C62-D-001 · Mostrar precio normal formateado en CLP sin promo (Desktop)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      await plp.capturarEvidencia('TC-B2C62-D-001', 1, 'PLP declarada con la grilla de productos');

      const { bloque, precios } = await primerShelfQue(page, sinPromocion, 'sin promoción activa');
      await plp.capturarEvidencia('TC-B2C62-D-001', 2, 'bloque de precios del producto sin promoción', {
        elemento: bloque.shelf,
      });

      // Paso 3 — el precio se muestra formateado en CLP, con punto de miles y sin decimales.
      expect(precios[0].texto).toMatch(/^\$\d{1,3}(\.\d{3})*$/);

      // Paso 4 — ni tachado ni badge de descuento.
      expect(precios[0].tachado).toBe(false);
      await expect(bloque.badgeDeDescuento).toHaveCount(0);

      // Paso 5 — ninguna etiqueta de promoción en el bloque de precios.
      expect(precios.filter((p) => p.tipo !== 'unitario')).toHaveLength(0);
      await expect(bloque.rombo).toHaveCount(0);
      await plp.capturarEvidencia('TC-B2C62-D-001', 3, 'precio en CLP sin tachado ni badge', {
        elemento: bloque.shelf,
      });
    });

    test('TC-B2C62-D-002 · Mostrar PPUM con unidad estandar sin promo (Desktop)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      const { bloque, precios } = await primerShelfQue(
        page,
        async (p, b) => sinPromocion(p) && (await b.cantidadEnUnidadEstandar()) !== null,
        'sin promoción y con unidad de medida configurada',
      );
      await plp.capturarEvidencia('TC-B2C62-D-002', 2, 'shelf sin promoción con su label de formato', {
        elemento: bloque.shelf,
      });

      // Paso 3 — el PPUM es visible en el bloque de precios.
      await expect(bloque.ppums.first()).toBeVisible();
      expect(precios[0].ppum).not.toBeNull();

      // Paso 4 — usa la unidad estándar declarada para el SKU.
      const medida = (await bloque.cantidadEnUnidadEstandar())!;
      expect(precios[0].ppum!.unidad).toBe(medida.unidad);

      // Paso 5 — el valor coincide con el cálculo manual precio / cantidad.
      expect(
        Math.abs(precios[0].ppum!.importe - ppumEsperado(precios[0], medida.cantidad)),
      ).toBeLessThanOrEqual(REDONDEO);
      await plp.capturarEvidencia('TC-B2C62-D-002', 5, 'PPUM con la unidad estándar del SKU', {
        elemento: bloque.shelf,
      });
    });

    test('TC-B2C62-D-003 · PPUM calculado sobre precio efectivo, no regular (Desktop)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      const { bloque } = await primerShelfQue(
        page,
        async (p, b) => conPrecioDeSocio(p) && (await b.cantidadEnUnidadEstandar()) !== null,
        'con precio de membresía o de medio de pago activo',
      );
      const precios = await bloque.leerPrecios();
      await plp.capturarEvidencia('TC-B2C62-D-003', 2, 'shelf con precio de membresía activo', {
        elemento: bloque.shelf,
      });

      // Paso 3 — el precio efectivo es el de membresía; el regular, el de lista.
      const efectivo = precios.find((p) => p.deSocio)!;
      const regular = precios.find((p) => !p.deSocio && p.tipo === 'unitario')!;
      expect(efectivo.importe).toBeLessThan(regular.importe);

      // Pasos 4 y 5 — el PPUM del precio efectivo coincide con el cálculo sobre el precio efectivo.
      const medida = (await bloque.cantidadEnUnidadEstandar())!;
      expect(efectivo.ppum).not.toBeNull();
      expect(
        Math.abs(efectivo.ppum!.importe - ppumEsperado(efectivo, medida.cantidad)),
      ).toBeLessThanOrEqual(REDONDEO);

      // Paso 6 — y NO coincide con el cálculo sobre el precio regular.
      expect(efectivo.ppum!.importe).toBeLessThan(ppumEsperado(regular, medida.cantidad));
      await plp.capturarEvidencia('TC-B2C62-D-003', 6, 'PPUM del precio de socio sobre el precio efectivo', {
        elemento: bloque.shelf,
      });
    });

    test('TC-B2C62-D-010 · Mostrar etiqueta NxPrecio y precio unitario regular (Desktop)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      const { bloque, precios } = await primerShelfQue(page, conNxPrecio, 'con promoción NxPrecio activa');
      await plp.capturarEvidencia('TC-B2C62-D-010', 2, 'shelf con promoción NxPrecio', {
        elemento: bloque.shelf,
      });

      // Paso 3 — la etiqueta trae la mecánica y el precio total.
      const compuesto = precios.find((p) => p.tipo === 'nxprecio' && !p.deSocio)!;
      expect(compuesto.texto).toMatch(/^Lleva \d+ por \$\d{1,3}(\.\d{3})*$/);

      // Paso 4 — el precio unitario corresponde al precio regular, sin la promoción aplicada.
      const unitario = precios.find((p) => p.tipo === 'unitario' && !p.deSocio)!;
      expect(unitario.texto).toMatch(/^\$\d{1,3}(\.\d{3})* c\/u$/);
      expect(unitario.importe * compuesto.unidades).toBeGreaterThan(compuesto.importe);
      await plp.capturarEvidencia('TC-B2C62-D-010', 4, 'etiqueta NxPrecio junto al precio unitario', {
        elemento: bloque.shelf,
      });
    });

    test('TC-B2C62-D-011 · Mostrar PPUM promocional y PPUM referencial en NxPrecio (Desktop)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      const { bloque } = await primerShelfQue(
        page,
        async (p, b) => conNxPrecio(p) && (await b.cantidadEnUnidadEstandar()) !== null,
        'con promoción NxPrecio y unidad de medida configurada',
      );
      const precios = await bloque.leerPrecios();
      const medida = (await bloque.cantidadEnUnidadEstandar())!;
      await plp.capturarEvidencia('TC-B2C62-D-011', 2, 'shelf con NxPrecio y sus PPUM', {
        elemento: bloque.shelf,
      });

      // Paso 3 — PPUM promocional calculado sobre el total de la mecánica.
      const compuesto = precios.find((p) => p.tipo === 'nxprecio' && !p.deSocio)!;
      expect(compuesto.ppum).not.toBeNull();
      expect(
        Math.abs(compuesto.ppum!.importe - ppumEsperado(compuesto, medida.cantidad)),
      ).toBeLessThanOrEqual(REDONDEO);

      // Paso 4 — PPUM referencial calculado sobre el precio unitario regular.
      const unitario = precios.find((p) => p.tipo === 'unitario' && !p.deSocio)!;
      expect(unitario.ppum).not.toBeNull();
      expect(
        Math.abs(unitario.ppum!.importe - ppumEsperado(unitario, medida.cantidad)),
      ).toBeLessThanOrEqual(REDONDEO);

      // Paso 5 — ambos visibles a la vez y distinguibles: son importes distintos.
      expect(compuesto.ppum!.importe).not.toBe(unitario.ppum!.importe);
      await plp.capturarEvidencia('TC-B2C62-D-011', 5, 'PPUM promocional y PPUM referencial simultáneos', {
        elemento: bloque.shelf,
      });
    });

    test('TC-B2C62-D-014 · Renderizar promo membresia % dcto como precio fijo (Desktop)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      const { bloque, precios } = await primerShelfQue(
        page,
        conPrecioDeSocio,
        'con promoción de membresía activa',
      );
      await plp.capturarEvidencia('TC-B2C62-D-014', 2, 'shelf con promoción de membresía', {
        elemento: bloque.shelf,
      });

      // Paso 3 — el precio de membresía se muestra como importe fijo en CLP, no como pill de %.
      const socio = precios.find((p) => p.deSocio)!;
      expect(socio.texto).toMatch(/^\$\d{1,3}(\.\d{3})*$/);

      // Paso 4 — el importe es el precio efectivo, menor que el regular.
      const regular = precios.find((p) => !p.deSocio && p.tipo === 'unitario')!;
      expect(socio.importe).toBeLessThan(regular.importe);

      // Paso 5 — no se renderiza el porcentaje como pill independiente.
      await expect(bloque.badgeDeDescuento).toHaveCount(0);
      await plp.capturarEvidencia('TC-B2C62-D-014', 5, 'precio de membresía como importe fijo, sin pill de %', {
        elemento: bloque.shelf,
      });
    });

    test('TC-B2C62-D-019 · Sin precios $0 ni promos duplicadas o inconsistentes (Desktop)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      await plp.capturarEvidencia('TC-B2C62-D-019', 1, 'PLP declarada completa', { fullPage: true });

      const bloques = await bloquesDeLaPLP(page);
      const porShelf = await Promise.all(bloques.map((b) => b.leerPrecios()));

      // Paso 2 — ningún shelf muestra un precio de $0.
      expect(porShelf.flat().filter((p) => p.importe === 0)).toHaveLength(0);

      // Paso 3 — ninguna etiqueta de promoción duplicada dentro del mismo shelf. Los dos
      // "Lleva N por ..." de un shelf con socio NO son un duplicado: son precios distintos y su
      // texto lo refleja, así que la comparación va sobre el texto exacto.
      for (const precios of porShelf) {
        const textos = precios.map((p) => p.texto);
        expect(textos).toHaveLength(new Set(textos).size);
      }

      // Paso 4 — los precios del bloque son coherentes entre sí.
      for (const precios of porShelf) {
        const regular = precios.find((p) => p.tipo === 'unitario' && !p.deSocio);
        const socio = precios.find((p) => p.deSocio && p.tipo === 'unitario');
        if (regular && socio) expect(socio.importe).toBeLessThan(regular.importe);
        const compuesto = precios.find((p) => p.tipo !== 'unitario' && !p.deSocio);
        if (regular && compuesto) {
          expect(compuesto.importe).toBeLessThan(regular.importe * compuesto.unidades);
        }
      }
      await plp.capturarEvidencia('TC-B2C62-D-019', 4, 'bloques de precios coherentes en toda la grilla');
    });

    test('TC-B2C62-D-020 · Un solo precio (lista) cuando no hay promo (Desktop)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      const { bloque, precios } = await primerShelfQue(page, sinPromocion, 'sin promoción activa');
      await plp.capturarEvidencia('TC-B2C62-D-020', 2, 'shelf del producto sin promoción', {
        elemento: bloque.shelf,
      });

      // Pasos 3 y 4 — un único precio de referencia, sin tachado ni segundo o tercer precio.
      expect(precios).toHaveLength(1);
      expect(precios[0].tachado).toBe(false);
      await expect(bloque.rombo).toHaveCount(0);
      await plp.capturarEvidencia('TC-B2C62-D-020', 4, 'bloque de precios con un solo elemento', {
        elemento: bloque.shelf,
      });
    });

    test('TC-B2C62-D-026 · Precio compuesto NxM/NxPrecio como uno de los precios simultaneos (Desktop)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      const { bloque, precios } = await primerShelfQue(
        page,
        (p) => conNxPrecio(p) || p.some((x) => x.tipo === 'nxm'),
        'con promoción NxM o NxPrecio activa',
      );
      await plp.capturarEvidencia('TC-B2C62-D-026', 2, 'shelf con precio compuesto', {
        elemento: bloque.shelf,
      });

      // Paso 3 — el precio compuesto se muestra en su formato.
      const compuesto = precios.find((p) => p.tipo !== 'unitario' && !p.deSocio)!;
      expect(compuesto.texto).toMatch(/^(Lleva \d+ por \$[\d.]+|\d+ por \d+ a \$[\d.]+)$/);

      // El compuesto es el precio principal del bloque (el destacado) y el lista queda como
      // referencia tachada o gris. Van como aserciones blandas para que la corrida informe de las
      // dos desviaciones a la vez: son la misma regla de jerarquía vista desde sus dos lados, y
      // cortar en la primera dejaría la segunda sin comprobar.
      const destacado = (await bloque.precioDestacado())!;
      expect
        .soft(destacado.texto, 'el precio destacado del bloque debe ser el compuesto')
        .toBe(compuesto.texto);

      // Paso 4 — el precio lista acompaña al compuesto como referencia: tachado o en gris.
      const lista = precios.find((p) => p.tipo === 'unitario' && !p.deSocio)!;
      const gris = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(lista.color);
      const esGris = gris ? Number(gris[1]) >= 100 && Number(gris[1]) === Number(gris[2]) : false;
      expect
        .soft(
          lista.tachado || esGris,
          `el precio lista "${lista.texto}" debe mostrarse como referencia tachada o gris; se renderiza ` +
            `en ${lista.color} a ${lista.fontSize}px sin tachado`,
        )
        .toBe(true);

      // Paso 5 — el máximo de 3 precios simultáneos que fija CA11.
      expect(precios.length).toBeLessThanOrEqual(3);
      await plp.capturarEvidencia('TC-B2C62-D-026', 5, 'jerarquía del bloque con precio compuesto', {
        elemento: bloque.shelf,
      });
    });

    casosConSkuDeclarado('D', 'Desktop');
  });

  // ------------------------------------------------------------------- Mobile
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C62-M-001 · Mostrar precio normal formateado en CLP sin promo (Mobile)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      await plp.capturarEvidencia('TC-B2C62-M-001', 1, 'PLP declarada con la grilla de productos');

      const { bloque, precios } = await primerShelfQue(page, sinPromocion, 'sin promoción activa');
      await plp.capturarEvidencia('TC-B2C62-M-001', 2, 'bloque de precios del producto sin promoción', {
        elemento: bloque.shelf,
      });

      expect(precios[0].texto).toMatch(/^\$\d{1,3}(\.\d{3})*$/);
      expect(precios[0].tachado).toBe(false);
      await expect(bloque.badgeDeDescuento).toHaveCount(0);
      expect(precios.filter((p) => p.tipo !== 'unitario')).toHaveLength(0);
      await expect(bloque.rombo).toHaveCount(0);
      await plp.capturarEvidencia('TC-B2C62-M-001', 3, 'precio en CLP sin tachado ni badge', {
        elemento: bloque.shelf,
      });
    });

    test('TC-B2C62-M-002 · Mostrar PPUM con unidad estandar sin promo (Mobile)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      const { bloque, precios } = await primerShelfQue(
        page,
        async (p, b) => sinPromocion(p) && (await b.cantidadEnUnidadEstandar()) !== null,
        'sin promoción y con unidad de medida configurada',
      );
      await plp.capturarEvidencia('TC-B2C62-M-002', 2, 'shelf sin promoción con su label de formato', {
        elemento: bloque.shelf,
      });

      await expect(bloque.ppums.first()).toBeVisible();
      expect(precios[0].ppum).not.toBeNull();
      const medida = (await bloque.cantidadEnUnidadEstandar())!;
      expect(precios[0].ppum!.unidad).toBe(medida.unidad);
      expect(
        Math.abs(precios[0].ppum!.importe - ppumEsperado(precios[0], medida.cantidad)),
      ).toBeLessThanOrEqual(REDONDEO);
      await plp.capturarEvidencia('TC-B2C62-M-002', 5, 'PPUM con la unidad estándar del SKU', {
        elemento: bloque.shelf,
      });
    });

    test('TC-B2C62-M-003 · PPUM calculado sobre precio efectivo, no regular (Mobile)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      const { bloque } = await primerShelfQue(
        page,
        async (p, b) => conPrecioDeSocio(p) && (await b.cantidadEnUnidadEstandar()) !== null,
        'con precio de membresía o de medio de pago activo',
      );
      const precios = await bloque.leerPrecios();
      await plp.capturarEvidencia('TC-B2C62-M-003', 2, 'shelf con precio de membresía activo', {
        elemento: bloque.shelf,
      });

      const efectivo = precios.find((p) => p.deSocio)!;
      const regular = precios.find((p) => !p.deSocio && p.tipo === 'unitario')!;
      expect(efectivo.importe).toBeLessThan(regular.importe);

      const medida = (await bloque.cantidadEnUnidadEstandar())!;
      expect(efectivo.ppum).not.toBeNull();
      expect(
        Math.abs(efectivo.ppum!.importe - ppumEsperado(efectivo, medida.cantidad)),
      ).toBeLessThanOrEqual(REDONDEO);
      expect(efectivo.ppum!.importe).toBeLessThan(ppumEsperado(regular, medida.cantidad));
      await plp.capturarEvidencia('TC-B2C62-M-003', 6, 'PPUM del precio de socio sobre el precio efectivo', {
        elemento: bloque.shelf,
      });
    });

    test('TC-B2C62-M-010 · Mostrar etiqueta NxPrecio y precio unitario regular (Mobile)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      const { bloque, precios } = await primerShelfQue(page, conNxPrecio, 'con promoción NxPrecio activa');
      await plp.capturarEvidencia('TC-B2C62-M-010', 2, 'shelf con promoción NxPrecio', {
        elemento: bloque.shelf,
      });

      const compuesto = precios.find((p) => p.tipo === 'nxprecio' && !p.deSocio)!;
      expect(compuesto.texto).toMatch(/^Lleva \d+ por \$\d{1,3}(\.\d{3})*$/);

      const unitario = precios.find((p) => p.tipo === 'unitario' && !p.deSocio)!;
      expect(unitario.texto).toMatch(/^\$\d{1,3}(\.\d{3})* c\/u$/);
      expect(unitario.importe * compuesto.unidades).toBeGreaterThan(compuesto.importe);
      await plp.capturarEvidencia('TC-B2C62-M-010', 4, 'etiqueta NxPrecio junto al precio unitario', {
        elemento: bloque.shelf,
      });
    });

    test('TC-B2C62-M-011 · Mostrar PPUM promocional y PPUM referencial en NxPrecio (Mobile)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      const { bloque } = await primerShelfQue(
        page,
        async (p, b) => conNxPrecio(p) && (await b.cantidadEnUnidadEstandar()) !== null,
        'con promoción NxPrecio y unidad de medida configurada',
      );
      const precios = await bloque.leerPrecios();
      const medida = (await bloque.cantidadEnUnidadEstandar())!;
      await plp.capturarEvidencia('TC-B2C62-M-011', 2, 'shelf con NxPrecio y sus PPUM', {
        elemento: bloque.shelf,
      });

      const compuesto = precios.find((p) => p.tipo === 'nxprecio' && !p.deSocio)!;
      expect(compuesto.ppum).not.toBeNull();
      expect(
        Math.abs(compuesto.ppum!.importe - ppumEsperado(compuesto, medida.cantidad)),
      ).toBeLessThanOrEqual(REDONDEO);

      const unitario = precios.find((p) => p.tipo === 'unitario' && !p.deSocio)!;
      expect(unitario.ppum).not.toBeNull();
      expect(
        Math.abs(unitario.ppum!.importe - ppumEsperado(unitario, medida.cantidad)),
      ).toBeLessThanOrEqual(REDONDEO);

      expect(compuesto.ppum!.importe).not.toBe(unitario.ppum!.importe);
      await plp.capturarEvidencia('TC-B2C62-M-011', 5, 'PPUM promocional y PPUM referencial simultáneos', {
        elemento: bloque.shelf,
      });
    });

    test('TC-B2C62-M-014 · Renderizar promo membresia % dcto como precio fijo (Mobile)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      const { bloque, precios } = await primerShelfQue(
        page,
        conPrecioDeSocio,
        'con promoción de membresía activa',
      );
      await plp.capturarEvidencia('TC-B2C62-M-014', 2, 'shelf con promoción de membresía', {
        elemento: bloque.shelf,
      });

      const socio = precios.find((p) => p.deSocio)!;
      expect(socio.texto).toMatch(/^\$\d{1,3}(\.\d{3})*$/);
      const regular = precios.find((p) => !p.deSocio && p.tipo === 'unitario')!;
      expect(socio.importe).toBeLessThan(regular.importe);
      await expect(bloque.badgeDeDescuento).toHaveCount(0);
      await plp.capturarEvidencia('TC-B2C62-M-014', 5, 'precio de membresía como importe fijo, sin pill de %', {
        elemento: bloque.shelf,
      });
    });

    test('TC-B2C62-M-019 · Sin precios $0 ni promos duplicadas o inconsistentes (Mobile)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      await plp.capturarEvidencia('TC-B2C62-M-019', 1, 'PLP declarada completa', { fullPage: true });

      const bloques = await bloquesDeLaPLP(page);
      const porShelf = await Promise.all(bloques.map((b) => b.leerPrecios()));

      expect(porShelf.flat().filter((p) => p.importe === 0)).toHaveLength(0);

      for (const precios of porShelf) {
        const textos = precios.map((p) => p.texto);
        expect(textos).toHaveLength(new Set(textos).size);
      }

      for (const precios of porShelf) {
        const regular = precios.find((p) => p.tipo === 'unitario' && !p.deSocio);
        const socio = precios.find((p) => p.deSocio && p.tipo === 'unitario');
        if (regular && socio) expect(socio.importe).toBeLessThan(regular.importe);
        const compuesto = precios.find((p) => p.tipo !== 'unitario' && !p.deSocio);
        if (regular && compuesto) {
          expect(compuesto.importe).toBeLessThan(regular.importe * compuesto.unidades);
        }
      }
      await plp.capturarEvidencia('TC-B2C62-M-019', 4, 'bloques de precios coherentes en toda la grilla');
    });

    test('TC-B2C62-M-020 · Un solo precio (lista) cuando no hay promo (Mobile)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      const { bloque, precios } = await primerShelfQue(page, sinPromocion, 'sin promoción activa');
      await plp.capturarEvidencia('TC-B2C62-M-020', 2, 'shelf del producto sin promoción', {
        elemento: bloque.shelf,
      });

      expect(precios).toHaveLength(1);
      expect(precios[0].tachado).toBe(false);
      await expect(bloque.rombo).toHaveCount(0);
      await plp.capturarEvidencia('TC-B2C62-M-020', 4, 'bloque de precios con un solo elemento', {
        elemento: bloque.shelf,
      });
    });

    test('TC-B2C62-M-026 · Precio compuesto NxM/NxPrecio como uno de los precios simultaneos (Mobile)', async ({
      page,
      testData,
    }) => {
      const plp = await abrirPLP(page, testData);
      const { bloque, precios } = await primerShelfQue(
        page,
        (p) => conNxPrecio(p) || p.some((x) => x.tipo === 'nxm'),
        'con promoción NxM o NxPrecio activa',
      );
      await plp.capturarEvidencia('TC-B2C62-M-026', 2, 'shelf con precio compuesto', {
        elemento: bloque.shelf,
      });

      const compuesto = precios.find((p) => p.tipo !== 'unitario' && !p.deSocio)!;
      expect(compuesto.texto).toMatch(/^(Lleva \d+ por \$[\d.]+|\d+ por \d+ a \$[\d.]+)$/);

      const destacado = (await bloque.precioDestacado())!;
      expect
        .soft(destacado.texto, 'el precio destacado del bloque debe ser el compuesto')
        .toBe(compuesto.texto);

      const lista = precios.find((p) => p.tipo === 'unitario' && !p.deSocio)!;
      const gris = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(lista.color);
      const esGris = gris ? Number(gris[1]) >= 100 && Number(gris[1]) === Number(gris[2]) : false;
      expect
        .soft(
          lista.tachado || esGris,
          `el precio lista "${lista.texto}" debe mostrarse como referencia tachada o gris; se renderiza ` +
            `en ${lista.color} a ${lista.fontSize}px sin tachado`,
        )
        .toBe(true);

      expect(precios.length).toBeLessThanOrEqual(3);
      await plp.capturarEvidencia('TC-B2C62-M-026', 5, 'jerarquía del bloque con precio compuesto', {
        elemento: bloque.shelf,
      });
    });

    casosConSkuDeclarado('M', 'Mobile');
  });
});
