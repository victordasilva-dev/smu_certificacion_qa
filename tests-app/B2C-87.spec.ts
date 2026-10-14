import { test, expect } from './support/fixtures';
import type { Screen } from 'mobilewright';
import type { Plataforma } from '../tests/support/rutasEvidencia';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { BuscarScreen } from './pages/BuscarScreen';
import type { ListadoScreen, ProductoListado } from './pages/ListadoScreen';
import { borrarDatosApp } from './support/grabacionAndroid';
import { proporcionRoja } from './support/pixeles';

/**
 * B2C-87 — Ordenamiento de listados en la app (modal "Selecciona tus filtros" → "Ordena tus
 * productos").
 *
 * Las filas declaran `Viewport: App iOS/Android` (sin el rótulo `Plataforma:`); se toma como
 * iOS/Android. Esta corrida (2026-10-07) certifica **solo Android**, con el build v1.0.7 que declara
 * {APP_BUILD}, por pedido del usuario.
 *
 * La PLP N2 es la equivalente a {CATEGORY_N2_URL}: se abre desde el menú de categorías por el
 * nombre de su último segmento (`/category/carnes_cerdo` → "Cerdo"). La SRP busca {SEARCH_TERM_001}.
 * Los TC con data sin cargar (cuentas con/sin historial, ranking, patrocinado, colección, proxy) o
 * que navegan a una PLP que su fila no declara quedan en Bloqueado Data y no tienen `test()`.
 */
/** Valor de un token declarado por la fila; si no está en el Excel de data, el caso no puede correr. */
function dato(testData: Parameters<typeof token>[0], nombre: string): string {
  const v = token(testData, nombre);
  if (!v) throw new Error(`Falta {${nombre}} en el Excel de data.`);
  return v;
}

const ORDEN_ESPERADO = ['Recomendado', 'Más vendido', 'Precio más bajo', 'Precio más alto', 'Pensados para ti', 'Mejor descuento'];

/** Nombre de la N2 tal como lo muestra la app, desde el último segmento de la URL de categoría. */
function nombreN2(url: string): RegExp {
  const segmento = new URL(url).pathname.split('/').pop()!.split('_').pop()!;
  return new RegExp(`^${segmento}$`, 'i');
}

async function abrirPlpN2(screen: Screen, p: Plataforma, url: string): Promise<ListadoScreen> {
  const tabs = await new TabBar(screen, p).waitUntilReady();
  const modal = await tabs.tapCategorias();
  await modal.waitUntilReady();
  const plp = await modal.tapN2(nombreN2(url));
  await expect(plp.iconoFiltros).toBeVisible();
  return plp;
}

async function abrirSrp(screen: Screen, p: Plataforma, termino: string): Promise<{ srp: ListadoScreen; buscar: BuscarScreen }> {
  const tabs = await new TabBar(screen, p).waitUntilReady();
  await tabs.tapBuscar();
  const buscar = await new BuscarScreen(screen, p).waitUntilReady();
  const srp = await buscar.buscar(termino);
  await expect(buscar.resultadoPara(termino)).toBeVisible({ timeout: 15000 });
  return { srp, buscar };
}

const precios = (l: ProductoListado[]) => l.map((x) => x.precio);
const ascendente = (n: number[]) => n.every((v, i) => i === 0 || n[i - 1] <= v);
const descendente = (n: number[]) => n.every((v, i) => i === 0 || n[i - 1] >= v);
const listar = (l: ProductoListado[]) => l.map((x) => `${x.sku}:$${x.precio}`).join(', ');

for (const plataforma of ['Android'] as const) {
  test.describe(`B2C-87 — Ordenamiento (${plataforma})`, () => {
    test(`TC-B2C87-APP-002 · Confirmar un orden desde el modal cierra el modal y reordena el listado (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C87-APP-002';
      const plp = await abrirPlpN2(screen, p, dato(testData, 'CATEGORY_N2_URL'));
      await plp.capturarEvidencia(cp, 2, 'PLP N2');

      const modal = await plp.abrirFiltros();
      await modal.waitUntilReady();
      await modal.elegir('Precio más bajo');
      await modal.capturarEvidencia(cp, 6, 'Precio más bajo marcado');
      await modal.confirmar();

      await expect(modal.titulo, 'el modal se cierra').not.toBeVisible();
      const lista = await plp.leerProductos(10);
      await plp.capturarEvidencia(cp, 8, 'listado ordenado por Precio más bajo');
      expect(ascendente(precios(lista)), `listado de menor a mayor precio (${listar(lista)})`).toBe(true);
    });

    test(`TC-B2C87-APP-003 · Ordena tus productos muestra las 6 opciones en orden y con seleccion unica (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C87-APP-003';
      const plp = await abrirPlpN2(screen, p, dato(testData, 'CATEGORY_N2_URL'));
      const modal = await plp.abrirFiltros();
      await modal.waitUntilReady();
      const opciones = (await modal.opciones()).map((o) => o.nombre);
      await modal.capturarEvidencia(cp, 4, 'opciones de Ordena tus productos');

      await modal.elegir('Precio más alto');
      await modal.elegir('Más vendido');
      const marcadas = await modal.marcadas();
      await modal.capturarEvidencia(cp, 6, 'Más vendido marcado');

      expect(marcadas, 'solo queda marcada "Más vendido"').toEqual(['Más vendido']);
      expect(opciones, `las 6 opciones en el orden de la HU (obtenido: ${opciones.join(' / ')})`).toEqual(ORDEN_ESPERADO);
    });

    test(`TC-B2C87-APP-004 · Recomendado vuelve al orden por defecto de la categoria (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C87-APP-004';
      const plp = await abrirPlpN2(screen, p, dato(testData, 'CATEGORY_N2_URL'));
      const inicial = await plp.leerProductos(10);
      await plp.capturarEvidencia(cp, 3, 'PLP al ingresar');

      let modal = await plp.abrirFiltros();
      await modal.waitUntilReady();
      await modal.elegir('Precio más bajo');
      await modal.confirmar();
      await expect(modal.titulo).not.toBeVisible();
      await plp.capturarEvidencia(cp, 9, 'ordenado por Precio más bajo');

      modal = await plp.abrirFiltros();
      await modal.waitUntilReady();
      await modal.elegir('Recomendado');
      await modal.confirmar();
      await expect(modal.titulo).not.toBeVisible();
      const final = await plp.leerProductos(10);
      await plp.capturarEvidencia(cp, 15, 'ordenado por Recomendado');

      expect(final.map((x) => x.sku), `mismos 10 primeros que al ingresar (inicial: ${listar(inicial)})`).toEqual(inicial.map((x) => x.sku));
    });

    for (const [cp, criterio, prueba, texto] of [
      ['TC-B2C87-APP-006', 'Precio más bajo', ascendente, 'de menor a mayor'],
      ['TC-B2C87-APP-007', 'Precio más alto', descendente, 'de mayor a menor'],
    ] as const) {
      test(`${cp} · ${criterio} ordena por precio de venta (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
        const plp = await abrirPlpN2(screen, p, dato(testData, 'CATEGORY_N2_URL'));
        const modal = await plp.abrirFiltros();
        await modal.waitUntilReady();
        await modal.elegir(criterio);
        await modal.confirmar();
        await expect(modal.titulo).not.toBeVisible();
        const lista = await plp.leerProductos(15);
        await plp.capturarEvidencia(cp, 8, `listado ordenado por ${criterio}`);

        expect(lista.some((x) => x.conDescuento), `el listado incluye un producto con descuento (${listar(lista)})`).toBe(true);
        expect(prueba(precios(lista)), `${texto} por precio de venta (con descuento) (${listar(lista)})`).toBe(true);
      });
    }

    for (const [cp, nombre, cerrar] of [
      ['TC-B2C87-APP-009', 'cerrar el modal con la X', 'x'],
      ['TC-B2C87-APP-010', 'tocar fuera del modal', 'fuera'],
    ] as const) {
      test(`${cp} · ${nombre} no cambia el ordenamiento vigente (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
        const plp = await abrirPlpN2(screen, p, dato(testData, 'CATEGORY_N2_URL'));
        const inicial = await plp.leerProductos(5);
        await plp.capturarEvidencia(cp, 3, 'PLP en Recomendado');

        const modal = await plp.abrirFiltros();
        await modal.waitUntilReady();
        await modal.elegir('Precio más alto');
        await modal.capturarEvidencia(cp, 6, 'Precio más alto tocado sin confirmar');
        if (cerrar === 'x') await modal.cerrarConX();
        else await modal.tocarFuera();

        await expect(modal.titulo, 'el modal se cierra').not.toBeVisible();
        const final = await plp.leerProductos(5);
        await plp.capturarEvidencia(cp, 8, 'listado tras cerrar el modal');
        expect(final.map((x) => x.sku), `mismos 5 primeros (antes: ${listar(inicial)}; después: ${listar(final)})`).toEqual(
          inicial.map((x) => x.sku),
        );
      });
    }

    test(`TC-B2C87-APP-011 · Al reabrir el modal se muestra marcado el ultimo orden confirmado (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C87-APP-011';
      const plp = await abrirPlpN2(screen, p, dato(testData, 'CATEGORY_N2_URL'));
      let modal = await plp.abrirFiltros();
      await modal.waitUntilReady();
      await modal.elegir('Precio más bajo');
      await modal.confirmar();
      await expect(modal.titulo).not.toBeVisible();

      modal = await plp.abrirFiltros();
      await modal.waitUntilReady();
      const marcadas = await modal.marcadas();
      await modal.capturarEvidencia(cp, 10, 'modal reabierto');
      expect(marcadas, '"Precio más bajo" marcado al reabrir').toEqual(['Precio más bajo']);
    });

    test(`TC-B2C87-APP-013 · El icono de filtros muestra el bullet de seleccion activa con un orden aplicado (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C87-APP-013';
      const plp = await abrirPlpN2(screen, p, dato(testData, 'CATEGORY_N2_URL'));
      const antes = await plp.iconoFiltros.screenshot();
      await plp.capturarEvidencia(cp, 2, 'icono de filtros sin orden aplicado', { elemento: plp.iconoFiltros });

      const modal = await plp.abrirFiltros();
      await modal.waitUntilReady();
      await modal.elegir('Precio más alto');
      await modal.confirmar();
      await expect(modal.titulo).not.toBeVisible();
      await plp.capturarEvidencia(cp, 8, 'icono de filtros con Precio más alto aplicado', { elemento: plp.iconoFiltros });
      const despues = await plp.iconoFiltros.screenshot();

      // El bullet es un punto rojo en la esquina del icono: se cuentan los píxeles rojos.
      const rojoAntes = await proporcionRoja(antes);
      const rojoDespues = await proporcionRoja(despues);
      expect(rojoAntes, 'sin orden aplicado no hay bullet').toBeLessThan(0.002);
      expect(rojoDespues, `el icono muestra el bullet (rojo ${(rojoDespues * 100).toFixed(1)} %)`).toBeGreaterThan(0.005);
    });

    test(`TC-B2C87-APP-014 · Recomendado viene activo por defecto al ingresar a un listado (${plataforma})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
      const cp = 'TC-B2C87-APP-014';
      // Precondición: app con datos borrados (como recién instalada).
      await device.terminateApp(bundleId!);
      borrarDatosApp(bundleId!, process.env.ANDROID_SERIAL);
      await device.launchApp(bundleId!);
      // Tras borrar los datos, el primer arranque deja a uiautomator sin poder volcar la UI unos
      // segundos ("no XML content"): se reintenta la espera del Home hasta 60 s antes de seguir.
      const tabs = new TabBar(screen, p);
      for (let intento = 0; ; intento++) {
        try {
          await tabs.waitUntilReady();
          break;
        } catch (e) {
          if (intento >= 20 || !/no XML content|dump UI/.test(String(e))) throw e;
          await new Promise((r) => setTimeout(r, 3000));
        }
      }

      const plp = await abrirPlpN2(screen, p, dato(testData, 'CATEGORY_N2_URL'));
      await plp.capturarEvidencia(cp, 2, 'PLP N2 tras borrar datos');
      const modal = await plp.abrirFiltros();
      await modal.waitUntilReady();
      const marcadas = await modal.marcadas();
      await modal.capturarEvidencia(cp, 4, 'modal con Recomendado');
      expect(marcadas, '"Recomendado" marcado por defecto').toEqual(['Recomendado']);
    });

    test(`TC-B2C87-APP-020 · La SRP ofrece las mismas 6 opciones de ordenamiento en el mismo orden (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C87-APP-020';
      const { srp } = await abrirSrp(screen, p, dato(testData, 'SEARCH_TERM_001'));
      await srp.capturarEvidencia(cp, 2, 'SRP');
      const modal = await srp.abrirFiltros();
      await modal.waitUntilReady();
      const opciones = (await modal.opciones()).map((o) => o.nombre);
      await modal.capturarEvidencia(cp, 4, 'opciones de Ordena tus productos en la SRP');
      expect(opciones, `las 6 opciones en el orden de la HU (obtenido: ${opciones.join(' / ')})`).toEqual(ORDEN_ESPERADO);
    });

    test(`TC-B2C87-APP-021 · Recomendado en la SRP ordena por relevancia del termino buscado (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C87-APP-021';
      const termino = dato(testData, 'SEARCH_TERM_001');
      const { srp } = await abrirSrp(screen, p, termino);
      let modal = await srp.abrirFiltros();
      await modal.waitUntilReady();
      await modal.elegir('Precio más bajo');
      await modal.confirmar();
      await expect(modal.titulo).not.toBeVisible();
      await srp.capturarEvidencia(cp, 8, 'SRP ordenada por Precio más bajo');

      modal = await srp.abrirFiltros();
      await modal.waitUntilReady();
      await modal.elegir('Recomendado');
      await modal.confirmar();
      await expect(modal.titulo).not.toBeVisible();
      const lista = await srp.leerProductos(5);
      await srp.capturarEvidencia(cp, 14, 'SRP ordenada por Recomendado');

      const raiz = termino.toLowerCase().slice(0, 4);
      const nombres = lista.map((x) => x.nombre);
      expect(
        nombres.every((n) => n.toLowerCase().includes(raiz)),
        `los primeros resultados corresponden a "${termino}" (${nombres.join(' / ')})`,
      ).toBe(true);
    });

    test(`TC-B2C87-APP-022 · Precio mas bajo en la SRP ordena de forma ascendente por precio de venta (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C87-APP-022';
      const { srp } = await abrirSrp(screen, p, dato(testData, 'SEARCH_TERM_001'));
      const modal = await srp.abrirFiltros();
      await modal.waitUntilReady();
      await modal.elegir('Precio más bajo');
      await modal.confirmar();
      await expect(modal.titulo).not.toBeVisible();
      const lista = await srp.leerProductos(12);
      await srp.capturarEvidencia(cp, 8, 'SRP ordenada por Precio más bajo');
      expect(ascendente(precios(lista)), `resultados de menor a mayor precio de venta (${listar(lista)})`).toBe(true);
    });
  });
}
