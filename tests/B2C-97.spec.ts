import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP } from './support/viewports';
import { ListadoProductos } from './pages/ListadoProductos';
import { PanelFiltros } from './pages/PanelFiltros';

/**
 * B2C-97 — Filtro "Precio" del panel de filtros (PLP/SRP/Colección).
 *
 * Los 7 TC de la planilla son ejecutables: todos declaran `{BASE_URL}` y `{PLP_URL}`, y el
 * contexto que ese token nombra —carnes_vacuno— permite observar las siete CA sin datos ajenos.
 *
 * Lo que la exploración fijó y gobierna cómo se leen los resultados:
 *
 * - **El rango que ofrece el componente sale del contexto**, no de una constante: en
 *   carnes_vacuno es 3.890 – 11.990 y coincide exactamente con el precio de venta más bajo y
 *   más alto de la grilla. Por eso CA2 se certifica comparando el componente contra el listado,
 *   y no contra números escritos a mano que certificarían el inventario de hoy de DEV.
 * - **El slider no es un `input[type=range]`**: son dos `<div role="slider">` independientes
 *   sobre un track común, y su posición solo se lee de `aria-valuenow`.
 * - **Un arrastre reproducible se hace contra el contenedor del slider**, cuyo centro es el 50%
 *   del track: el control queda en (min+max)/2 sin calcular píxeles. Arrastrarlo sobre el otro
 *   control lo llevaría al extremo, que es justo lo que CA3 no quiere observar.
 * - **El extremo superior del rango no entra en el filtro** (`refine=price=(min..max)` deja
 *   fuera al producto que cuesta exactamente el máximo). Es semántica del backend y ningún TC
 *   la declara, así que CA7 comprueba que **ningún producto mostrado cae fuera del rango** —
 *   nunca que estén todos los que caen dentro, lectura que convertiría ese borde abierto en un
 *   `Rechazado` falso.
 * - **El link "Borrar" solo existe mientras hay un rango distinto del original**, y al pulsarlo
 *   el panel colapsa todas sus secciones. Buscarlo antes de tocar el precio, o leer los campos
 *   justo después del clic, lleva a conclusiones equivocadas en las dos direcciones.
 */

const PRECIO = /^precio/i;

/** La PLP que los TC declaran en su columna `Test data`, exigida. */
function plp(testData: Parameters<typeof token>[0]): string {
  const valor = token(testData, 'PLP_URL');
  if (!valor) throw new Error('Falta {PLP_URL} en el Excel de data: los TC lo declaran');
  const url = new URL(valor);
  return `${url.pathname.slice(1)}${url.search}`;
}

async function abrirListado(
  page: Page,
  testData: Parameters<typeof token>[0],
): Promise<ListadoProductos> {
  const listado = new ListadoProductos(page, plp(testData));
  await listado.goto();
  return listado;
}

/** El estado de la sección de precio, tal como lo expone el panel. */
async function seccionDePrecio(
  panel: PanelFiltros,
): Promise<{ nombre: string; expandida: boolean; flecha: 'arriba' | 'abajo'; badge: number | null }> {
  const secciones = await panel.estadoDeLasSecciones();
  const precio = secciones.find((s) => PRECIO.test(s.nombre));
  if (!precio) throw new Error('El panel no ofrece la sección "Precio"');
  return precio;
}

/** Los precios de venta de la grilla, descartando las tarjetas que no lo expongan. */
async function preciosDelListado(listado: ListadoProductos): Promise<number[]> {
  return (await listado.precios()).filter((p) => Number.isFinite(p));
}

/** Deja el panel abierto con la sección de precio ya expandida. */
async function abrirPrecio(listado: ListadoProductos): Promise<PanelFiltros> {
  const panel = await listado.abrirPanelDeFiltros();
  await panel.expandirSeccion(PRECIO);
  return panel;
}

test.describe('B2C-97 — Filtro Precio en el panel de filtros', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C97-D-001 · Visualizacion del dropdown Precio colapsado (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C97-D-001';
      const listado = await abrirListado(page, testData);

      const panel = await listado.abrirPanelDeFiltros();
      await listado.capturarEvidencia(cp, 1, 'panel de filtros abierto en la PLP', {
        elemento: panel.root,
      });

      const precio = await seccionDePrecio(panel);
      await listado.capturarEvidencia(cp, 2, 'dropdown Precio colapsado', {
        elemento: panel.seccionPrecio,
      });

      // CA1 pide tres cosas del estado inicial: que el dropdown esté con su nombre, que esté
      // colapsado y que la flecha apunte hacia abajo. El nombre se comprueba aparte porque es
      // lo que el usuario lee.
      expect(precio.nombre, 'el nombre del dropdown').toMatch(PRECIO);
      expect(precio.expandida, 'el dropdown Precio arranca colapsado').toBe(false);
      expect(precio.flecha, 'la flecha del dropdown colapsado').toBe('abajo');

      // "Colapsado" tiene que significar también que su contenido no está a la vista: con la
      // sección cerrada, los campos del rango no se muestran.
      expect(await panel.precioMinimo.count(), 'campos de precio visibles en colapsado').toBe(0);

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C97-D-002 · Estructura del componente Precio al expandirse (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C97-D-002';
      const listado = await abrirListado(page, testData);
      const precios = await preciosDelListado(listado);
      expect(precios.length, 'productos con precio legible en la grilla').toBeGreaterThan(1);

      const panel = await listado.abrirPanelDeFiltros();
      await listado.capturarEvidencia(cp, 1, 'panel de filtros abierto', { elemento: panel.root });

      await panel.expandirSeccion(PRECIO);
      await listado.capturarEvidencia(cp, 2, 'dropdown Precio expandido', {
        elemento: panel.cuerpoDePrecio,
      });

      const rotulos = await panel.rotulosDePrecio();
      const rango = await panel.rangoDePrecio();
      const controles = await panel.controlesDelSlider();
      const editables = await panel.preciosEditables();

      // Los dos campos, editables y rotulados como el mínimo y el máximo en CLP. La UI los
      // rotula "Mínimo (en CLP)" y el nombre accesible es "Precio mínimo": dicen lo mismo con
      // otras palabras que las del TC, y eso queda anotado en la observación, no en la aserción.
      await expect(panel.precioMinimo, 'el campo de precio mínimo').toBeVisible();
      await expect(panel.precioMaximo, 'el campo de precio máximo').toBeVisible();
      expect(editables.minimo && editables.maximo, 'los dos campos son editables').toBe(true);
      expect(rotulos.minimo, 'el rótulo del campo mínimo').toMatch(/m[ií]nimo/i);
      expect(rotulos.minimo, 'la moneda del campo mínimo').toMatch(/CLP/i);
      expect(rotulos.maximo, 'el rótulo del campo máximo').toMatch(/m[áa]ximo/i);
      expect(rotulos.maximo, 'la moneda del campo máximo').toMatch(/CLP/i);

      // "El valor real del contexto": el rango que ofrece el componente tiene que ser el del
      // catálogo que se está mirando, y eso se comprueba contra la grilla. Un número literal
      // certificaría el inventario de hoy de DEV en vez del comportamiento del filtro.
      expect(rango.min, 'el precio mínimo del contexto').toBe(Math.min(...precios));
      expect(rango.max, 'el precio máximo del contexto').toBe(Math.max(...precios));

      // El slider: dos controles, independientes (cada uno con su propio valor) y arrancando en
      // los mismos extremos que los campos.
      expect(controles.length, 'controles del slider').toBe(2);
      expect(controles[0].valor, 'el control izquierdo arranca en el mínimo').toBe(rango.min);
      expect(controles[1].valor, 'el control derecho arranca en el máximo').toBe(rango.max);
      expect(controles[0].min, 'el límite inferior del slider').toBe(rango.min);
      expect(controles[1].max, 'el límite superior del slider').toBe(rango.max);

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C97-D-003 · Ajuste del rango de precio mediante el slider (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C97-D-003';
      const listado = await abrirListado(page, testData);
      const totalDeLaCategoria = await listado.conteoDeclarado();

      const panel = await abrirPrecio(listado);
      const original = await panel.rangoDePrecio();
      await listado.capturarEvidencia(cp, 1, 'dropdown Precio expandido en su rango original', {
        elemento: panel.cuerpoDePrecio,
      });

      // Se arrastra el control del mínimo hasta el centro del slider: un valor intermedio
      // reproducible, que es lo que el caso quiere observar (ni el extremo, ni el original).
      const esperado = Math.round((original.min + original.max) / 2);
      await panel.arrastrarControlDePrecio('minimo');
      await listado.capturarEvidencia(cp, 2, 'control minimo arrastrado a un nuevo valor', {
        elemento: panel.cuerpoDePrecio,
      });

      const controles = await panel.controlesDelSlider();
      const campos = await panel.rangoDePrecio();
      const chip = await panel.textoDelChipDePrecio();
      const conteo = await panel.conteoDelBoton();

      expect(controles[0].valor, 'el control arrastrado quedó en el centro del rango').toBe(
        esperado,
      );

      // CA3, primera parte: el campo numérico correspondiente se actualiza **solo** por haber
      // movido el control, sin escribir nada.
      expect(campos.min, 'el campo de precio mínimo sigue al control del slider').toBe(
        controles[0].valor,
      );
      expect(campos.max, 'el campo de precio máximo no se movió').toBe(original.max);

      // Segunda parte: el chip del rango aparece en "Filtros Aplicados".
      await expect(panel.zonaFiltrosAplicados, 'la zona de filtros aplicados').toBeVisible();
      expect(chip, 'el chip del rango de precio').not.toBeNull();
      expect(chip as string, 'el chip cita el rango seleccionado').toMatch(
        /\$\s?[\d.]+\s*-\s*\$\s?[\d.]+/,
      );
      await listado.capturarEvidencia(cp, 3, 'chip del rango en Filtros Aplicados', {
        elemento: panel.chipDePrecio,
      });

      // Tercera: el conteo del botón se pone a recalcular. Se comprueba que trae número y que
      // ese número es menor que el total de la categoría —es decir, que responde al filtro—;
      // `null` sería el botón sin conteo, que es un estado distinto y con significado propio.
      expect(conteo, 'el conteo del botón Mostrar productos').not.toBeNull();
      if (totalDeLaCategoria !== null) {
        expect(conteo as number, 'el conteo recalculó sobre el rango').toBeLessThan(
          totalDeLaCategoria,
        );
      }
      await listado.capturarEvidencia(cp, 4, 'boton Mostrar productos con el conteo recalculado', {
        elemento: panel.botonMostrar,
      });

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C97-D-004 · Ajuste del rango de precio mediante los campos numericos (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C97-D-004';
      const listado = await abrirListado(page, testData);
      const totalDeLaCategoria = await listado.conteoDeclarado();

      const panel = await abrirPrecio(listado);
      const original = await panel.rangoDePrecio();
      await listado.capturarEvidencia(cp, 1, 'dropdown Precio expandido en su rango original', {
        elemento: panel.cuerpoDePrecio,
      });

      // Un valor dentro del rango del contexto y distinto de los extremos: sale del propio
      // rango, así el caso no depende del catálogo que tenga el ambiente.
      const nuevoMinimo = Math.round((original.min + original.max) / 2);
      await panel.escribirPrecio('minimo', nuevoMinimo);
      await listado.capturarEvidencia(cp, 2, 'nuevo minimo escrito y confirmado con Enter', {
        elemento: panel.cuerpoDePrecio,
      });

      const controles = await panel.controlesDelSlider();
      const campos = await panel.rangoDePrecio();
      const chip = await panel.textoDelChipDePrecio();
      const conteo = await panel.conteoDelBoton();

      expect(campos.min, 'el campo conserva el valor ingresado').toBe(nuevoMinimo);

      // CA4: el slider se ajusta al valor escrito. Es la dirección contraria a la de CA3 y por
      // eso son dos casos: allí mandaba el control, aquí manda el campo.
      expect(controles[0].valor, 'el control del slider siguió al campo').toBe(nuevoMinimo);
      expect(controles[1].valor, 'el control del máximo no se movió').toBe(original.max);

      await expect(panel.zonaFiltrosAplicados, 'la zona de filtros aplicados').toBeVisible();
      expect(chip, 'el chip con el rango de precios').not.toBeNull();
      expect(chip as string, 'el chip cita el rango ingresado').toMatch(
        /\$\s?[\d.]+\s*-\s*\$\s?[\d.]+/,
      );
      await listado.capturarEvidencia(cp, 3, 'chip del rango y conteo del boton actualizados', {
        elemento: panel.root,
      });

      expect(conteo, 'el conteo del botón Mostrar productos').not.toBeNull();
      if (totalDeLaCategoria !== null) {
        expect(conteo as number, 'el conteo recalculó sobre el rango').toBeLessThan(
          totalDeLaCategoria,
        );
      }

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C97-D-005 · Validacion cuando el precio minimo supera al maximo (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C97-D-005';
      const listado = await abrirListado(page, testData);
      const totalDeLaCategoria = await listado.conteoDeclarado();

      const panel = await abrirPrecio(listado);
      const original = await panel.rangoDePrecio();
      await listado.capturarEvidencia(cp, 1, 'dropdown Precio expandido en su rango original', {
        elemento: panel.cuerpoDePrecio,
      });

      // Un mínimo por encima del máximo vigente, derivado del propio rango del contexto.
      await panel.escribirPrecio('minimo', original.max + 1000);
      await listado.capturarEvidencia(cp, 2, 'mensaje de validacion del rango invalido', {
        elemento: panel.cuerpoDePrecio,
      });

      const mensaje = await panel.mensajeDeValidacionDePrecio();
      expect(mensaje, 'el mensaje de validación del rango').not.toBeNull();
      expect(mensaje as string, 'el mensaje explica que el mínimo no puede superar al máximo')
        .toMatch(/m[ií]nimo.*(no puede superar|mayor).*m[áa]ximo/i);

      // "El filtro no se aplica": ni chip, ni rango en la URL, ni conteo filtrado.
      expect(await panel.textoDelChipDePrecio(), 'no debe haber chip de precio').toBeNull();
      expect(panel.rangoEnLaUrl(), 'no debe haber rango de precio en la URL').toBeNull();

      // Paso 3 del TC: intentar aplicar de todos modos. El botón no está deshabilitado, así que
      // se pulsa y se comprueba que el listado sigue sin filtrar. El panel se cierra al hacerlo
      // —eso queda anotado en la observación—, pero nada del filtro llega al listado.
      await panel.aplicar();
      await listado.waitUntilReady();
      await listado.capturarEvidencia(cp, 3, 'listado sin filtrar tras intentar aplicar');

      expect(new URL(page.url()).searchParams.getAll('refine').join(','), 'refine en la URL')
        .not.toMatch(/price/);
      if (totalDeLaCategoria !== null) {
        expect(await listado.conteoDeclarado(), 'el listado sigue sin filtrar por precio').toBe(
          totalDeLaCategoria,
        );
      }

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C97-D-006 · Borrar el filtro de precio desde el componente (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C97-D-006';
      const listado = await abrirListado(page, testData);

      const panel = await abrirPrecio(listado);
      const original = await panel.rangoDePrecio();

      // Precondición del caso: un rango distinto del original, ya aplicado.
      await panel.escribirPrecio('minimo', Math.round((original.min + original.max) / 2));
      await listado.capturarEvidencia(cp, 1, 'rango de precio distinto al original aplicado', {
        elemento: panel.cuerpoDePrecio,
      });
      expect(panel.rangoEnLaUrl(), 'el rango quedó aplicado antes de borrarlo').not.toBeNull();

      // El link "Borrar" solo existe mientras hay un rango distinto del original: comprobarlo
      // aquí es parte del caso, y explica por qué no se busca antes de tocar el precio.
      expect(await panel.hayBorrarEnPrecio(), 'el link Borrar dentro del componente').toBe(true);
      await listado.capturarEvidencia(cp, 2, 'link Borrar dentro del componente de precio', {
        elemento: panel.cuerpoDePrecio,
      });

      await panel.clicBorrarPrecio();

      // Borrar colapsa todas las secciones del panel: hay que volver a expandir Precio para
      // poder leer los campos, que quedaron desmontados.
      await panel.expandirSeccion(PRECIO);
      await listado.capturarEvidencia(cp, 3, 'componente de precio de vuelta en su rango original', {
        elemento: panel.cuerpoDePrecio,
      });

      const rango = await panel.rangoDePrecio();
      const controles = await panel.controlesDelSlider();

      expect(rango.min, 'el campo mínimo volvió al rango original').toBe(original.min);
      expect(rango.max, 'el campo máximo volvió al rango original').toBe(original.max);
      expect(controles[0].valor, 'el control izquierdo volvió a su posición inicial').toBe(
        original.min,
      );
      expect(controles[1].valor, 'el control derecho volvió a su posición inicial').toBe(
        original.max,
      );

      // Y el filtro queda eliminado, no solo visualmente: sin chip y sin rango en la URL.
      expect(await panel.textoDelChipDePrecio(), 'el chip del rango desapareció').toBeNull();
      expect(panel.rangoEnLaUrl(), 'el rango de precio salió de la URL').toBeNull();

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C97-D-007 · Aplicar el filtro de precio y cerrar el panel (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C97-D-007';
      const listado = await abrirListado(page, testData);

      const panel = await abrirPrecio(listado);
      const original = await panel.rangoDePrecio();

      const nuevoMinimo = Math.round((original.min + original.max) / 2);
      await panel.escribirPrecio('minimo', nuevoMinimo);
      const conteoDelBoton = await panel.conteoDelBoton();
      const chipAntes = await panel.textoDelChipDePrecio();
      await listado.capturarEvidencia(cp, 1, 'rango de precio seleccionado antes de aplicar', {
        elemento: panel.root,
      });
      expect(conteoDelBoton, 'el botón trae el conteo del rango seleccionado').not.toBeNull();

      await panel.aplicar();
      await listado.waitUntilReady();
      await listado.capturarEvidencia(cp, 2, 'listado filtrado con el panel ya cerrado');

      // El panel se cierra.
      expect(await panel.estaAbierto(), 'el panel de filtros quedó cerrado').toBe(false);

      // El listado muestra únicamente productos dentro del rango. Se comprueba que ninguno cae
      // fuera y NO que estén todos los que caen dentro: el extremo superior no entra en el
      // `refine`, y exigir la lista completa convertiría ese borde abierto en un falso fallo.
      const precios = await preciosDelListado(listado);
      expect(precios.length, 'el listado filtrado trae productos').toBeGreaterThan(0);
      for (const precio of precios) {
        expect(precio, `el producto de $${precio} cae dentro del rango`).toBeGreaterThanOrEqual(
          nuevoMinimo,
        );
        expect(precio, `el producto de $${precio} cae dentro del rango`).toBeLessThanOrEqual(
          original.max,
        );
      }

      // El conteo del encabezado coincide con el que mostraba el botón.
      expect(await listado.conteoDeclarado(), 'el conteo del encabezado de la PLP').toBe(
        conteoDelBoton,
      );

      // Los chips reflejan la selección activa. Viven dentro del panel, así que se comprueban
      // reabriéndolo: es lo que ve el usuario que vuelve a los filtros.
      const reabierto = await listado.abrirPanelDeFiltros();
      await listado.capturarEvidencia(cp, 3, 'chips de Filtros Aplicados al reabrir el panel', {
        elemento: reabierto.root,
      });
      expect(await reabierto.textoDelChipDePrecio(), 'el chip del rango sigue activo').toBe(
        chipAntes,
      );

      await listado.capturarEvidencia(cp);
    });
  });
});
