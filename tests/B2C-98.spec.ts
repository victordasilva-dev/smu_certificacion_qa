import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP } from './support/viewports';
import { ListadoProductos } from './pages/ListadoProductos';
import { PanelFiltros } from './pages/PanelFiltros';

/**
 * B2C-98 — Filtros "Marca", "Tipo de envase" y "Formato" del panel de filtros.
 *
 * Están aquí los 10 TC de la planilla que se pudieron ejecutar con la data que declaran. Los
 * otros cuatro —D-001, D-007, D-008 y D-013— quedaron `Bloqueado` antes de generar su `test()`,
 * los cuatro por lo mismo: necesitan los dropdowns **Tipo de envase** y **Formato**, y el único
 * contexto que la planilla declara (`{SRP_URL}`, la búsqueda "carne") no tiene ningún producto
 * con esos atributos.
 *
 * Y eso **no es un defecto del front**, que es la conclusión fácil al ver el panel: la respuesta
 * de `product-search` para ese contexto sí trae los refinements `c_tipoEnvase` y `c_formato`,
 * pero con la lista de valores **vacía**, y CA2/CA4 piden justamente que solo se muestren los
 * atributos con al menos un producto disponible. No renderizarlos es el comportamiento correcto;
 * lo que falta es un contexto donde esos atributos existan.
 *
 * Lo que la exploración fijó y gobierna cómo se leen los resultados:
 *
 * - **El buscador interno y "Ver todas" solo existen con más de 5 valores en la sección.** En un
 *   contexto pobre desaparecen del DOM, así que buscarlos ahí concluye que la UI no los ofrece.
 * - **"Ver todas" comparte el `viewBox` del SVG con los chips**, de modo que el locator de chips
 *   tuvo que estrecharse (ver `PanelFiltros.chips`); sin eso, "Ver todas" cuenta como un chip.
 * - **La marca del producto va en la primera línea del botón del nombre**, no en un nodo propio.
 * - Ninguna cifra se escribe literal: los conteos se leen de la UI y se comparan entre sí. Un
 *   `toBe(9)` certificaría el inventario de hoy de DEV, no el comportamiento del filtro.
 */

const MARCA = /^marca/i;

/** La SRP que los TC declaran en su columna `Test data`, exigida. */
function srp(testData: Parameters<typeof token>[0]): string {
  const valor = token(testData, 'SRP_URL');
  if (!valor) throw new Error('Falta {SRP_URL} en el Excel de data: los TC lo declaran');
  const url = new URL(valor);
  return `${url.pathname.slice(1)}${url.search}`;
}

async function abrirListado(
  page: Page,
  testData: Parameters<typeof token>[0],
  extra = '',
): Promise<ListadoProductos> {
  const listado = new ListadoProductos(page, srp(testData) + extra);
  await listado.goto();
  return listado;
}

/** Deja el panel abierto con la sección de marcas expandida. */
async function abrirMarcas(listado: ListadoProductos): Promise<PanelFiltros> {
  const panel = await listado.abrirPanelDeFiltros();
  await panel.expandirSeccion(MARCA);
  return panel;
}

/** Despliega el listado completo de marcas si la sección ofrece "Ver todas". */
async function todasLasMarcas(panel: PanelFiltros): Promise<string[]> {
  if (await panel.hayVerTodas(MARCA)) await panel.clicVerTodas(MARCA);
  return panel.etiquetasDeCasillas(MARCA);
}

/** Sin tildes y en minúsculas: así se compara lo que el usuario escribe con lo que lee. */
function normalizar(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}

function ordenAlfabetico(valores: string[]): string[] {
  return [...valores].sort((a, b) => a.localeCompare(b, 'es'));
}

test.describe('B2C-98 — Filtros Marca, Tipo de envase y Formato', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C98-D-002 · Estructura del filtro Marcas expandido (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C98-D-002';
      const listado = await abrirListado(page, testData);

      const panel = await listado.abrirPanelDeFiltros();
      await listado.capturarEvidencia(cp, 1, 'panel de filtros abierto en la SRP', {
        elemento: panel.root,
      });

      await panel.expandirSeccion(MARCA);
      await listado.capturarEvidencia(cp, 2, 'dropdown Marcas expandido', {
        elemento: panel.contenedorDe(MARCA),
      });

      // La precondición del caso es un contexto con más de 5 marcas, y el propio "Ver todas" es
      // la señal de que lo hay: la UI solo lo monta cuando quedan valores sin mostrar.
      expect(await panel.hayVerTodas(MARCA), 'el link "Ver todas" (contexto con más de 5 marcas)')
        .toBe(true);

      // El campo de búsqueda interno, con su placeholder. No tiene nombre accesible: el
      // placeholder es a la vez lo que el usuario lee y lo único por lo que se le puede anclar.
      expect(await panel.placeholderDelBuscador(MARCA), 'el placeholder del buscador interno')
        .toBe('Buscar marca...');

      const casillas = await panel.estadoDeCasillas(MARCA);
      expect(casillas.length, 'marcas mostradas antes de "Ver todas"').toBe(5);
      expect(
        casillas.map((c) => c.etiqueta),
        'las 5 marcas se muestran en orden alfabético',
      ).toEqual(ordenAlfabetico(casillas.map((c) => c.etiqueta)));

      // "Cada marca con su checkbox y su nombre": el rol lo da el propio locator, así que lo que
      // queda por comprobar es que ninguna venga sin nombre y que todas arranquen desmarcadas.
      for (const casilla of casillas) {
        expect(casilla.etiqueta, 'el nombre de la marca').not.toBe('');
        expect(casilla.marcada, `la marca ${casilla.etiqueta} arranca desmarcada`).toBe(false);
      }

      await listado.capturarEvidencia(cp, 3, 'buscador, 5 marcas y link Ver todas', {
        elemento: panel.contenedorDe(MARCA),
      });
      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C98-D-003 · Solo se listan marcas con al menos un producto disponible (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C98-D-003';
      const listado = await abrirListado(page, testData);

      const panel = await abrirMarcas(listado);
      const todas = await todasLasMarcas(panel);
      await listado.capturarEvidencia(cp, 1, 'listado completo de marcas del contexto', {
        elemento: panel.contenedorDe(MARCA),
      });

      // El caso pide un contexto donde alguna marca se quede sin productos. Se construye con el
      // propio contexto declarado: al activar Ofertas, el conjunto se reduce a los productos en
      // oferta y las marcas que no tienen ninguno dejan de estar disponibles.
      await panel.alternarOfertas();
      const disponibles = await panel.etiquetasDeCasillas(MARCA);
      await listado.capturarEvidencia(cp, 2, 'listado de marcas recalculado sobre el contexto', {
        elemento: panel.contenedorDe(MARCA),
      });

      const desaparecidas = todas.filter((m) => !disponibles.includes(m));
      expect(desaparecidas.length, 'marcas que dejaron de tener productos en el contexto')
        .toBeGreaterThan(0);
      expect(disponibles.length, 'el listado conserva las marcas con productos').toBeGreaterThan(0);

      // Y la comprobación de fondo: aplicado el filtro, el conjunto de marcas que ofrece el
      // dropdown tiene que ser exactamente el de las marcas presentes en la grilla. Comparar los
      // dos conjuntos cubre las dos direcciones a la vez —ninguna marca listada sin productos, y
      // ninguna marca con productos fuera del listado—, mientras que mirar solo la ausencia de
      // las desaparecidas dejaría pasar una marca listada que no tuviera nada.
      await panel.aplicar();
      await listado.waitUntilReady();
      await listado.capturarEvidencia(cp, 3, 'listado filtrado del contexto');

      const enLaGrilla = [...new Set((await listado.marcas()).filter(Boolean))];
      expect(ordenAlfabetico(enLaGrilla), 'las marcas del listado y las del dropdown coinciden')
        .toEqual(ordenAlfabetico(disponibles));
      for (const marca of desaparecidas) {
        expect(enLaGrilla, `${marca} no tiene productos en este contexto`).not.toContain(marca);
      }

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C98-D-004 · Busqueda interna filtra el listado de marcas dinamicamente (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C98-D-004';
      const listado = await abrirListado(page, testData);

      const panel = await abrirMarcas(listado);
      const todas = await todasLasMarcas(panel);
      expect(todas.length, 'marcas disponibles en el contexto').toBeGreaterThan(5);
      await listado.capturarEvidencia(cp, 1, 'listado completo de marcas antes de buscar', {
        elemento: panel.contenedorDe(MARCA),
      });

      // El texto de búsqueda sale del propio contexto —las dos primeras letras de una marca
      // real— y no de un literal: así el caso vale en cualquier catálogo.
      const termino = todas[0].slice(0, 2);
      const esperadas = todas.filter((m) => normalizar(m).includes(normalizar(termino)));

      await panel.buscarEn(MARCA, termino);
      await listado.capturarEvidencia(cp, 2, `listado filtrado por "${termino}"`, {
        elemento: panel.contenedorDe(MARCA),
      });

      const mostradas = await panel.etiquetasDeCasillas(MARCA);
      expect(ordenAlfabetico(mostradas), `el listado solo muestra las marcas que contienen "${termino}"`)
        .toEqual(ordenAlfabetico(esperadas));

      // El filtrado es de la lista, no del catálogo: no debe tocar los productos ni el conteo.
      expect(panel.refineEnLaUrl('brand'), 'buscar no aplica ningún filtro de marca').toEqual([]);

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C98-D-005 · Marcas previamente seleccionadas permanecen visibles durante la busqueda (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C98-D-005';
      const listado = await abrirListado(page, testData);

      const panel = await abrirMarcas(listado);
      const todas = await todasLasMarcas(panel);
      const seleccionada = todas[0];

      await panel.alternarCasilla(MARCA, seleccionada);
      await listado.capturarEvidencia(cp, 1, `marca ${seleccionada} seleccionada`, {
        elemento: panel.contenedorDe(MARCA),
      });

      // Hace falta un término que NO coincida con la marca ya seleccionada: es la única forma de
      // que el caso observe lo que existe para probar. Se busca entre las demás marcas del
      // contexto en vez de escribir un literal.
      const termino = todas
        .slice(1)
        .map((m) => m.slice(0, 2))
        .find((t) => !normalizar(seleccionada).includes(normalizar(t)));
      expect(termino, 'un término de búsqueda que no coincida con la marca seleccionada')
        .toBeTruthy();

      await panel.buscarEn(MARCA, termino as string);
      await listado.capturarEvidencia(cp, 2, `busqueda "${termino}" con la marca ya seleccionada`, {
        elemento: panel.contenedorDe(MARCA),
      });

      const estado = await panel.estadoDeCasillas(MARCA);
      const etiquetas = estado.map((c) => c.etiqueta);

      expect(etiquetas, 'la marca seleccionada sigue visible pese a no coincidir').toContain(
        seleccionada,
      );
      expect(
        estado.find((c) => c.etiqueta === seleccionada)?.marcada,
        'y sigue marcada',
      ).toBe(true);

      // El resto del listado sí responde a la búsqueda: sin esto, un listado que ignorara el
      // filtro pasaría el caso solo por contener la marca seleccionada.
      const resto = etiquetas.filter((m) => m !== seleccionada);
      expect(resto.length, 'la búsqueda devuelve alguna coincidencia').toBeGreaterThan(0);
      for (const marca of resto) {
        expect(normalizar(marca), `${marca} coincide con la búsqueda`).toContain(
          normalizar(termino as string),
        );
      }

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C98-D-006 · Campo de busqueda vacio restaura el listado completo de marcas (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C98-D-006';
      const listado = await abrirListado(page, testData);

      const panel = await abrirMarcas(listado);
      const todas = await todasLasMarcas(panel);

      const termino = todas[0].slice(0, 2);
      await panel.buscarEn(MARCA, termino);
      const filtradas = await panel.etiquetasDeCasillas(MARCA);
      await listado.capturarEvidencia(cp, 1, `listado con la busqueda "${termino}" activa`, {
        elemento: panel.contenedorDe(MARCA),
      });
      expect(filtradas.length, 'la búsqueda dejó el listado acotado').toBeLessThan(todas.length);

      await panel.buscarEn(MARCA, '');
      await listado.capturarEvidencia(cp, 2, 'listado restaurado con el campo vacio', {
        elemento: panel.contenedorDe(MARCA),
      });

      const restauradas = await panel.etiquetasDeCasillas(MARCA);
      expect(ordenAlfabetico(restauradas), 'con el campo vacío vuelven todas las marcas del contexto')
        .toEqual(ordenAlfabetico(todas));

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C98-D-009 · Ver todas las opciones del filtro (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C98-D-009';
      const listado = await abrirListado(page, testData);

      const panel = await abrirMarcas(listado);
      const iniciales = await panel.etiquetasDeCasillas(MARCA);
      await listado.capturarEvidencia(cp, 1, 'dropdown Marcas con el listado inicial', {
        elemento: panel.contenedorDe(MARCA),
      });
      expect(await panel.hayVerTodas(MARCA), 'el link "Ver todas" está disponible').toBe(true);

      await panel.clicVerTodas(MARCA);
      await listado.capturarEvidencia(cp, 2, 'listado completo de marcas tras Ver todas', {
        elemento: panel.contenedorDe(MARCA),
      });

      const completas = await panel.etiquetasDeCasillas(MARCA);
      expect(completas.length, 'el listado completo trae más marcas que el inicial').toBeGreaterThan(
        iniciales.length,
      );
      expect(completas, 'el listado completo conserva las marcas que ya se mostraban').toEqual(
        expect.arrayContaining(iniciales),
      );
      expect(completas, 'el listado completo va en orden alfabético').toEqual(
        ordenAlfabetico(completas),
      );

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C98-D-010 · Seleccion de un checkbox de filtro (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C98-D-010';
      const listado = await abrirListado(page, testData);
      const totalDelContexto = await listado.conteoDeclarado();

      const panel = await abrirMarcas(listado);
      const todas = await todasLasMarcas(panel);
      const elegida = todas[0];
      await listado.capturarEvidencia(cp, 1, 'dropdown de filtro expandido', {
        elemento: panel.contenedorDe(MARCA),
      });

      await panel.alternarCasilla(MARCA, elegida);
      await listado.capturarEvidencia(cp, 2, `checkbox de ${elegida} marcado`, {
        elemento: panel.contenedorDe(MARCA),
      });

      const estado = await panel.estadoDeCasillas(MARCA);
      expect(estado.find((c) => c.etiqueta === elegida)?.marcada, 'el checkbox queda marcado')
        .toBe(true);

      // El chip, el badge y el conteo son las tres señales que CA6 pide, y se leen por separado
      // porque cada una puede fallar sin las otras.
      await expect(panel.zonaFiltrosAplicados, 'la zona de filtros aplicados').toBeVisible();
      expect(await panel.textosDeChips(), 'el chip de la opción seleccionada').toEqual([elegida]);
      expect(await panel.badgeDe(MARCA), 'el badge numérico del dropdown').toBe(1);

      const conteo = await panel.conteoDelBoton();
      expect(conteo, 'el conteo del botón Mostrar productos').not.toBeNull();
      if (totalDelContexto !== null) {
        expect(conteo as number, 'el conteo recalculó sobre la marca elegida').toBeLessThan(
          totalDelContexto,
        );
      }
      await listado.capturarEvidencia(cp, 3, 'chip, badge y conteo del boton actualizados', {
        elemento: panel.root,
      });

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C98-D-011 · Logica OR entre marcas seleccionadas (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C98-D-011';
      const listado = await abrirListado(page, testData);

      const panel = await abrirMarcas(listado);
      const todas = await todasLasMarcas(panel);
      expect(todas.length, 'marcas disponibles para combinar').toBeGreaterThan(1);
      const [primera, segunda] = todas;

      // Se mide cada marca por separado antes de combinarlas: sin esos dos números, "el listado
      // muestra productos de cualquiera de las dos" no se distingue de un filtro que devuelve
      // los de una sola. La unión tiene que ser la suma, y un AND daría cero —un producto tiene
      // una marca—, así que la comprobación sí separa las dos implementaciones.
      await panel.alternarCasilla(MARCA, primera);
      const soloPrimera = await panel.conteoDelBoton();
      await panel.alternarCasilla(MARCA, primera);

      await panel.alternarCasilla(MARCA, segunda);
      const soloSegunda = await panel.conteoDelBoton();
      await panel.alternarCasilla(MARCA, primera);
      await listado.capturarEvidencia(cp, 1, `marcas ${primera} y ${segunda} seleccionadas`, {
        elemento: panel.root,
      });

      const combinado = await panel.conteoDelBoton();
      expect(soloPrimera, `conteo de ${primera}`).not.toBeNull();
      expect(soloSegunda, `conteo de ${segunda}`).not.toBeNull();
      expect(combinado, 'el conteo de las dos marcas juntas es la unión').toBe(
        (soloPrimera as number) + (soloSegunda as number),
      );
      expect(panel.refineEnLaUrl('brand').sort(), 'las dos marcas viajan en el mismo refine')
        .toEqual([primera, segunda].sort());

      await panel.aplicar();
      await listado.waitUntilReady();
      await listado.capturarEvidencia(cp, 2, 'listado filtrado por las dos marcas');

      expect(await panel.estaAbierto(), 'el panel de filtros quedó cerrado').toBe(false);

      // Producto a producto: cada uno pertenece a una de las dos marcas, y las dos están
      // representadas. Con solo lo primero, un filtro que devolviera únicamente la primera marca
      // pasaría el caso.
      const marcas = await listado.marcas();
      expect(marcas.length, 'el listado filtrado trae productos').toBeGreaterThan(0);
      for (const marca of marcas) {
        expect([primera, segunda], `el producto de ${marca} es de una de las marcas elegidas`)
          .toContain(marca);
      }
      expect(new Set(marcas).size, 'el listado incluye productos de las dos marcas').toBe(2);

      expect(await listado.conteoDeclarado(), 'el conteo del encabezado coincide con el del botón')
        .toBe(combinado);

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C98-D-012 · Deseleccion de un checkbox de filtro (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C98-D-012';
      const listado = await abrirListado(page, testData);

      const panel = await abrirMarcas(listado);
      const todas = await todasLasMarcas(panel);
      const [primera, segunda] = todas;

      // Se parte de dos opciones seleccionadas y se quita una. La precondición del caso —"al
      // menos una opción seleccionada"— se cumple igual, y así el conteo del botón puede
      // observarse actualizándose: quitando la última, el botón se queda sin número por un
      // defecto ya reportado que no es lo que este caso mide.
      await panel.alternarCasilla(MARCA, primera);
      await panel.alternarCasilla(MARCA, segunda);
      const conteoPrevio = await panel.conteoDelBoton();
      await listado.capturarEvidencia(cp, 1, `${primera} y ${segunda} seleccionadas`, {
        elemento: panel.root,
      });

      await panel.alternarCasilla(MARCA, segunda);
      await listado.capturarEvidencia(cp, 2, `checkbox de ${segunda} desmarcado`, {
        elemento: panel.root,
      });

      const estado = await panel.estadoDeCasillas(MARCA);
      expect(estado.find((c) => c.etiqueta === segunda)?.marcada, 'el checkbox vuelve a desmarcado')
        .toBe(false);

      const chips = await panel.textosDeChips();
      expect(chips, `el chip de ${segunda} desaparece`).not.toContain(segunda);
      expect(chips, `el chip de ${primera} se mantiene`).toContain(primera);

      const conteo = await panel.conteoDelBoton();
      expect(conteo, 'el conteo del botón sigue presente').not.toBeNull();
      expect(conteo, 'el conteo del botón se actualizó al quitar la opción').not.toBe(conteoPrevio);

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C98-D-014 · El chip de Precio no se muestra en Filtros aplicados aunque el refinement este activo en la URL (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C98-D-014';

      // El rango sale del propio contexto: se lee del componente de precio y se usa un tramo
      // interior, para no depender de cifras escritas a mano.
      const previo = await abrirListado(page, testData);
      const panelPrevio = await previo.abrirPanelDeFiltros();
      await panelPrevio.expandirSeccion(/^precio/i);
      const rango = await panelPrevio.rangoDePrecio();
      const desde = Math.round(rango.min + (rango.max - rango.min) * 0.1);
      const hasta = Math.round(rango.max - (rango.max - rango.min) * 0.1);

      // Paso 1: se navega con el refinement de precio ya en la URL, sin pasar por el panel.
      const listado = await abrirListado(
        page,
        testData,
        `&refine=${encodeURIComponent(`price=(${desde}..${hasta})`)}`,
      );
      await listado.capturarEvidencia(cp, 1, 'listado servido con el refinement de precio en la URL');

      const panel = await listado.abrirPanelDeFiltros();
      await listado.capturarEvidencia(cp, 2, 'panel de filtros con el refinement activo', {
        elemento: panel.root,
      });

      // El refinement tiene que estar realmente activo: si no, el caso pasaría por no haber
      // filtro en absoluto y no por la omisión que se quiere comprobar.
      expect(panel.rangoEnLaUrl(), 'el refinement de precio viaja en la URL').toEqual({
        min: desde,
        max: hasta,
      });

      const chips = await panel.textosDeChips();
      expect(chips.join(' | '), 'ningún chip cita un rango de precio').not.toMatch(
        /\$\s?[\d.]+\s*-\s*\$\s?[\d.]+/,
      );

      await listado.capturarEvidencia(cp);
    });
  });
});
