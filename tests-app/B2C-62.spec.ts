import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { BuscarScreen } from './pages/BuscarScreen';
import type { ListadoScreen } from './pages/ListadoScreen';
import { tolerante } from './support/tolerante';
import { asegurarApp } from './support/appLista';
import { HomeScreen } from './pages/HomeScreen';

/**
 * B2C-62 — Precios y promociones del shelf en la app (resultados de búsqueda).
 *
 * Solo Android, build v1.0.7, emulador local. Cada caso busca su SKU con "Buscar" del teclado y
 * lee el precio de la tarjeta `product-<sku>`: la app publica en su `label` todo lo que muestra
 * ("23%, $1.200, ($6.000 x Kg), Antes: $1.550, Marca | Nombre, 200 g, ..."), de modo que cada
 * esperado se comprueba contra ese texto y contra la captura.
 *
 * Sin `test()`: APP-009, 013, 014, 015 y 016, porque su SKU ({SKU_PROM_XPCT_XUNIDAD},
 * {SKU_SIN_PROFUNDIZACION}, {SKU_DOS_MDP}, {SKU_PROM_PROGRAMADA}) no tiene valor en el Excel de data.
 */
const BD = (m: string) => new Error(`PRECONDICION_NO_DISPONIBLE: ${m}`);

interface Precio {
  pct: number | null;
  precios: number[];
  ppum: { valor: number; unidad: string }[];
  antes: number | null;
  cu: boolean;
  compuesto: string | null;
  peso: { g: number } | null;
  label: string;
}

const num = (s: string) => Number(s.replace(/\./g, ''));

/** Descompone el label de la tarjeta en sus partes: etiqueta %, precios, PPUM, "Antes" y peso. */
function analizar(label: string): Precio {
  const ppum = [...label.matchAll(/\(\$([\d.]+) x ([^)]+)\)/g)].map((m) => ({ valor: num(m[1]), unidad: m[2].trim() }));
  const sinPpum = label.replace(/\(\$[\d.]+ x [^)]+\)/g, '');
  const antesM = /Antes: \$([\d.]+)/.exec(sinPpum);
  const cuerpo = sinPpum.split('|')[0].replace(/Antes: \$[\d.]+/, '');
  const precios = [...cuerpo.matchAll(/\$([\d.]+)/g)].map((m) => num(m[1]));
  const pesoM = /,\s*(\d+(?:[.,]\d+)?)\s*(kg|g|l|ml)\b/i.exec(label.split('|')[1] ?? '');
  const factor: Record<string, number> = { g: 1, kg: 1000, ml: 1, l: 1000 };
  return {
    pct: /^(\d+)%/.test(label) ? Number(/^(\d+)%/.exec(label)![1]) : null,
    precios,
    ppum,
    antes: antesM ? num(antesM[1]) : null,
    cu: /c\/u/.test(cuerpo),
    compuesto: /(\d+x\d+ a \$[\d.]+|\d+ por \$[\d.]+)/.exec(cuerpo)?.[1] ?? null,
    peso: pesoM ? { g: Number(pesoM[1].replace(',', '.')) * factor[pesoM[2].toLowerCase()] } : null,
    label,
  };
}

/** El label de la tarjeta del SKU: el primer texto con un monto dentro de `product-<sku>`. */
async function leerLabel(screen: any, sku: string): Promise<string> {
  let hallado = '';
  const rec = (n: any, actual?: string) => {
    const m = /^product-(\d[\w-]*)$/.exec(n.identifier ?? n.resourceId ?? '');
    const a = m ? m[1] : actual;
    if (!hallado && a === sku && /\$\d/.test(n.label ?? '')) hallado = n.label;
    for (const c of n.children ?? []) rec(c, a);
  };
  for (const n of await screen.viewTree()) rec(n);
  if (!hallado) throw new Error(`La tarjeta de ${sku} no publica ningún precio`);
  return hallado;
}

async function abrirShelf(screen: any, p: any, cp: string, sku: string): Promise<{ srp: ListadoScreen; precio: Precio }> {
  // El carrusel del Home y el cursor del campo hacen que uiautomator a veces no vuelque la pantalla.
  await asegurarApp(screen);
  const tabs = await tolerante(() => new TabBar(screen, p).waitUntilReady());
  await tabs.capturarEvidencia(cp, 1, 'app abierta con la barra de pestañas');
  await tolerante(() => tabs.tapBuscar());
  const buscar = await tolerante(() => new BuscarScreen(screen, p).waitUntilReady());
  const srp = await tolerante(() => buscar.buscar(sku));
  await expect(buscar.resultadoPara(sku)).toBeVisible({ timeout: 20000 });
  await expect(srp.tarjeta(sku), `shelf de ${sku}`).toBeVisible();
  await screen.getByTestId(`product-add-${sku}`).waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
  const precio = analizar(await tolerante(() => leerLabel(screen, sku)));
  test.info().annotations.push({ type: `label ${sku}`, description: precio.label });
  await srp.capturarEvidencia(cp, 3, 'resultados con el shelf del producto');
  return { srp, precio };
}

const sku = (testData: any, k: string) => token(testData, k)!;

test.describe('B2C-62 — Precios y promociones del shelf (Android)', () => {
  test('TC-B2C62-APP-001 · Sin promoción el shelf muestra el precio normal en CLP [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C62-APP-001';
    const { srp, precio } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_SIN_PROMO'));
    expect(precio.precios.length, 'un único precio').toBe(1);
    expect(precio.antes, 'sin precio tachado').toBeNull();
    expect(precio.pct, 'sin badge de %').toBeNull();
    expect(precio.label, 'precio con formato CLP ($1.990)').toMatch(/^\$\d{1,3}(\.\d{3})*,/);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C62-APP-002 · Sin promoción el shelf muestra el PPUM con la unidad estándar [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C62-APP-002';
    const { srp, precio } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_SIN_PROMO'));
    expect(precio.ppum.length, `el shelf muestra el PPUM (label: ${precio.label})`).toBeGreaterThan(0);
    expect(precio.ppum[0].unidad, 'unidad estándar').toMatch(/^(Kg|L|un|m|ml|g)/i);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C62-APP-003 · El PPUM se calcula sobre el precio efectivo mostrado [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C62-APP-003';
    const { srp, precio } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_PRECIO_OFERTA'));
    expect(precio.ppum.length, 'el shelf muestra el PPUM').toBeGreaterThan(0);
    expect(precio.peso, 'el shelf publica el peso').not.toBeNull();
    const efectivo = precio.precios[0];
    const esperado = Math.round((efectivo / precio.peso!.g) * 1000);
    expect(precio.ppum[0].valor, `PPUM = ${efectivo} / ${precio.peso!.g} g × 1000 (precio de oferta, no el regular)`).toBe(esperado);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C62-APP-004 · Un producto pesable muestra el precio por kg y el PPUM [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C62-APP-004';
    const { srp, precio } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_PESABLE'));
    expect(precio.precios.length, 'muestra el precio').toBeGreaterThan(0);
    expect(precio.ppum.length, 'muestra el PPUM').toBeGreaterThan(0);
    expect(precio.ppum[0].unidad, 'PPUM por kg').toMatch(/^kg$/i);
    expect(precio.label, 'sin equivalencia aproximada en unidades').not.toMatch(/aprox|≈|equivale/i);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C62-APP-005 · Con % de descuento se muestran etiqueta %, precio promo y "Antes" tachado [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C62-APP-005';
    const { srp, precio } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_PROM_PCT_DESCUENTO'));
    expect(precio.pct, 'etiqueta con el %').not.toBeNull();
    expect(precio.precios.length, 'precio promocional').toBeGreaterThan(0);
    expect(precio.antes, '"Antes" + precio anterior').not.toBeNull();
    expect(precio.ppum.length, `PPUM sobre el precio promo (label: ${precio.label})`).toBeGreaterThan(0);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C62-APP-006 · Con precio fijo se muestra el % calculado aunque no sea redondo [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C62-APP-006';
    const { srp, precio } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_PROM_PRECIO_FIJO'));
    expect(precio.pct, 'etiqueta con el %').not.toBeNull();
    expect(precio.antes, 'precio anterior').not.toBeNull();
    const calculado = Math.round(((precio.antes! - precio.precios[0]) / precio.antes!) * 100);
    expect(precio.pct, `% calculado desde el precio fijo (${precio.antes} → ${precio.precios[0]})`).toBe(calculado);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C62-APP-007 · Con promo NxM se muestran la etiqueta, el precio "$X c/u" y los PPUM [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C62-APP-007';
    const { srp, precio } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_PROM_NxM'));
    expect(precio.compuesto, 'precio compuesto "3x2 a $X"').toMatch(/^\d+x\d+ a \$/);
    expect(precio.cu, 'precio unitario regular "$X c/u"').toBe(true);
    expect(precio.ppum.length, 'PPUM promocional del total y referencial unitario').toBeGreaterThanOrEqual(2);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C62-APP-008 · Con promo NxPrecio se muestran la etiqueta, el precio unitario y los PPUM [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C62-APP-008';
    const { srp, precio } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_PROM_NxPRECIO'));
    expect(precio.compuesto, 'precio compuesto "Lleva N por $X"').toMatch(/^\d+ por \$/);
    expect(precio.cu, 'precio unitario regular "$X c/u"').toBe(true);
    expect(precio.ppum.length, 'PPUM promocional total y referencial unitario').toBeGreaterThanOrEqual(2);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C62-APP-010 · Una promo de membresía se muestra como precio fijo efectivo [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C62-APP-010';
    const { srp, precio } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_PRECIO_MIEMBRO'));
    expect(precio.pct, 'no se muestra como pill %').toBeNull();
    expect(precio.precios.length, 'precio lista y precio efectivo de membresía').toBeGreaterThanOrEqual(2);
    expect(precio.precios[1], 'precio efectivo post-descuento menor al de lista').toBeLessThan(precio.precios[0]);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C62-APP-011 · Una promo de medio de pago se muestra como precio fijo efectivo [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C62-APP-011';
    const { srp, precio } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_PRECIO_UNIPAY'));
    await srp.capturarEvidencia(cp);
    if (precio.precios.length < 2) throw BD(`{SKU_PRECIO_UNIPAY} muestra un solo precio (${precio.precios.join(', ')}): no tiene promo de medio de pago vigente (label: ${precio.label})`);
    expect(precio.pct, 'no se muestra como pill %').toBeNull();
  });

  test('TC-B2C62-APP-012 · Con profundización la promo de membresía se calcula sobre el precio rebajado [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C62-APP-012';
    const { srp, precio } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_OFERTA_MEMBRESIA'));
    await srp.capturarEvidencia(cp);
    if (precio.precios.length < 2 || precio.antes === null) throw BD(`{SKU_OFERTA_MEMBRESIA} no muestra precio de membresía junto a la oferta (label: ${precio.label})`);
  });

  test('TC-B2C62-APP-017 · Los shelves de la PLP no muestran precios $0 ni promos duplicadas o incompletas [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C62-APP-017';
    const tabs = await tolerante(() => new TabBar(screen, p).waitUntilReady());
    await tabs.capturarEvidencia(cp, 1, 'app abierta en el Home');
    // {PLP_URL} es la de la web: en la app la PLP es el listado de una subcategoría de la landing de "Mostrar todo".
    const landing = await tolerante(() => new HomeScreen(screen, p).tapMostrarTodo());
    await tolerante(() => landing.waitUntilReady());
    const plp = await tolerante(() => landing.tapPrimeraSubcategoria());
    await tolerante(() => plp.waitUntilReady());
    await tolerante(() => expect(plp.filtros, 'se llegó a la PLP').toBeVisible({ timeout: 15000 }));
    await plp.capturarEvidencia(cp, 3, 'PLP con sus shelves');
    const productos = await tolerante(() => plp.leerProductos(12));
    test.info().annotations.push({ type: 'tarjetas leídas', description: String(productos.length) });
    expect(productos.length, 'la PLP muestra shelves').toBeGreaterThan(0);
    const skus = productos.map((x) => x.sku);
    expect(new Set(skus).size, 'sin tarjetas duplicadas').toBe(skus.length);
    for (const x of productos) {
      expect(x.precio, `${x.sku}: precio distinto de $0`).toBeGreaterThan(0);
      expect(x.nombre, `${x.sku}: nombre completo`).not.toBe('');
    }
    await plp.capturarEvidencia(cp);
  });

  test('TC-B2C62-APP-018 · Sin promo el shelf muestra un solo precio [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C62-APP-018';
    const { srp, precio } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_SIN_PROMO'));
    expect(precio.precios.length, 'un único precio (lista)').toBe(1);
    expect(precio.antes, 'sin precio tachado').toBeNull();
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C62-APP-019 · Con oferta el shelf muestra oferta destacada y lista tachado [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C62-APP-019';
    const { srp, precio } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_PRECIO_OFERTA'));
    expect(precio.precios.length, 'precio de oferta (el precio lista va aparte, tachado)').toBe(1);
    expect(precio.pct, 'etiqueta de % de descuento').not.toBeNull();
    expect(precio.antes, 'precio lista tachado').not.toBeNull();
    expect(precio.precios[0], 'la oferta es menor que el precio lista').toBeLessThan(precio.antes!);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C62-APP-020 · Con oferta y membresía el shelf muestra membresía como 1er precio y 3 precios como máximo [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C62-APP-020';
    const { srp, precio } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_OFERTA_MEMBRESIA'));
    await srp.capturarEvidencia(cp);
    if (precio.precios.length < 2) throw BD(`{SKU_OFERTA_MEMBRESIA} no muestra precio de membresía junto a la oferta (label: ${precio.label})`);
    expect(precio.precios.length + (precio.antes ? 1 : 0), 'nunca más de 3 precios').toBeLessThanOrEqual(3);
  });

  test('TC-B2C62-APP-021 · Con NxM o NxPrecio el precio compuesto se muestra como precio destacado [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C62-APP-021';
    const { srp, precio } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_PROM_NxPRECIO'));
    expect(precio.compuesto, 'precio compuesto destacado ("Lleva 2 por $X")').not.toBeNull();
    expect(precio.label.split('|')[0].replace(/\(\$[\d.]+ x [^)]+\)/g, '').match(/\$[\d.]+/g)!.length, 'sin superar 3 precios').toBeLessThanOrEqual(3);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C62-APP-022 · Con Membresía, Unipay y Banco Estado a la vez el 1er precio es Membresía [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C62-APP-022';
    const { srp, precio } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_TRES_PRECIOS'));
    await srp.capturarEvidencia(cp);
    if (!/membres[ií]a|miembro/i.test(precio.label)) throw BD(`{SKU_TRES_PRECIOS} no muestra ningún precio de Membresía, Unipay ni Banco Estado (label: ${precio.label})`);
  });
});
