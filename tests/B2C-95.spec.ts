import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP } from './support/viewports';
import { ListadoProductos } from './pages/ListadoProductos';
import { PanelFiltros } from './pages/PanelFiltros';

/**
 * B2C-95 — Filtro "Ofertas" del panel de filtros (PLP/SRP/Colección).
 *
 * Están aquí los 5 TC de la planilla que se pudieron ejecutar con la data que declaran.
 * **TC-B2C95-D-005 quedó `Bloqueado`** antes de generar su `test()`: pide navegar a una PLP, SRP
 * o Colección **sin productos en oferta** y su columna `Test data` solo declara `{PLP_URL}`
 * (carnes_vacuno), que sí tiene ofertas. Elegir otra URL del Excel de data por parecido de nombre
 * dejaría un veredicto que no se podría distinguir de una categoría equivocada — es el mismo
 * patrón por el que B2C-71 dejó bloqueados D-007 y D-020.
 *
 * Lo que la exploración fijó y gobierna cómo se leen los resultados:
 *
 * - **Ofertas no es una sección colapsable**: es un `button[role=switch]` con `aria-checked`, el
 *   único tipo de filtro con esa forma. Dentro lleva el nombre —"Ofertas 🤩", con un emoji que
 *   los TC no escriben, de ahí que el locator vaya tolerante— y, debajo, el conteo "N productos".
 * - **El conteo de la tarjeta es el de productos en oferta del contexto**, no el de la categoría:
 *   en carnes_vacuno son 3 sobre 9 productos.
 * - **Un producto en oferta se reconoce por su bloque de promoción** (`Lleva N por $X`, precio de
 *   socio, badge de descuento). El shelf no renderiza precio tachado, así que una aserción sobre
 *   `line-through` concluiría que ningún producto está en oferta.
 * - **Activar el toggle escribe `refine=c_isOnSale=true` en la URL al instante**, sin esperar a
 *   "Mostrar productos", igual que el resto de los filtros.
 *
 * Los conteos no se escriben como números literales: se leen de la propia UI y se comparan entre
 * sí (tarjeta ↔ botón ↔ encabezado del listado). Un `expect(...).toBe(3)` certificaría el
 * inventario de hoy del ambiente DEV, no el comportamiento del filtro.
 */

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

/** Los valores de la sección Marca, con la sección ya expandida. */
async function marcasDisponibles(panel: PanelFiltros): Promise<string[]> {
  await panel.expandirSeccion(/^marca/i);
  const textos = await panel.valoresDe(/^marca/i).allInnerTexts();
  return textos.map((t) => t.trim()).filter(Boolean);
}

/**
 * Marca o desmarca una marca, asegurando antes que su sección esté desplegada.
 *
 * Cada recálculo vuelve a montar el panel y la sección puede quedar colapsada: sin esta garantía
 * el clic buscaría un valor que en ese instante no está en pantalla.
 */
async function alternarMarca(panel: PanelFiltros, marca: string): Promise<void> {
  await panel.expandirSeccion(/^marca/i);
  await panel.seleccionarValor(/^marca/i, marca);
}

test.describe('B2C-95 — Filtro Ofertas en el panel de filtros', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C95-D-001 · Estructura del componente Ofertas en el panel de filtros (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C95-D-001';
      const listado = await abrirListado(page, testData);
      await listado.capturarEvidencia(cp, 1, 'PLP con productos en oferta cargada');

      const panel = await listado.abrirPanelDeFiltros();
      await listado.capturarEvidencia(cp, 2, 'panel de filtros abierto', { elemento: panel.root });

      expect(await panel.ofertasPresente(), 'el filtro Ofertas se ofrece en el panel').toBe(true);

      const posicion = await panel.posicionDeOfertas();
      const nombre = await panel.nombreDeOfertas();
      const conteo = await panel.conteoDeOfertas();
      const tarjeta = await panel.tarjetaDeOfertas();
      const activo = await panel.ofertasActivo();
      await listado.capturarEvidencia(cp, 3, 'tarjeta Ofertas con su conteo y el toggle apagado', {
        elemento: panel.switchOfertas,
      });

      // CA1, las cuatro cosas que pide, cada una por separado: posición, nombre, cantidad y
      // estado inicial del toggle. Un solo `expect` sobre el texto del componente daría por bueno
      // un panel donde Ofertas apareciera tercero.
      expect(posicion, 'Ofertas es el primer filtro de "Aplica tus filtros"').toBe(0);
      expect(nombre, 'el nombre del filtro').toMatch(/ofertas/i);
      expect(conteo, 'la tarjeta muestra la cantidad de productos en oferta').not.toBeNull();
      expect(conteo as number, 'la cantidad de productos en oferta').toBeGreaterThan(0);
      expect(
        await panel.textoDelConteoDeOfertas(),
        'la cantidad se expresa en productos',
      ).toMatch(/\d+\s+productos?/i);

      // "Formato tarjeta": el control tiene borde propio y esquinas redondeadas, y el toggle
      // queda a la derecha del texto. Se mide, porque no hay clase ni atributo que lo declare.
      expect(tarjeta.borde, 'la tarjeta tiene borde propio').not.toMatch(/^0px/);
      expect(tarjeta.radio, 'las esquinas de la tarjeta están redondeadas').toBeGreaterThan(0);
      expect(tarjeta.toggleALaDerechaDelTexto, 'el toggle va a la derecha').toBe(true);

      expect(activo, 'el toggle viene desactivado por defecto').toBe(false);

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C95-D-002 · Activacion del toggle del filtro Ofertas actualiza el conteo del boton (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C95-D-002';
      const listado = await abrirListado(page, testData);

      const panel = await listado.abrirPanelDeFiltros();
      const ofertasDeclaradas = await panel.conteoDeOfertas();
      const visualApagado = await panel.estadoVisualDeOfertas();
      await listado.capturarEvidencia(cp, 1, 'toggle Ofertas desactivado', {
        elemento: panel.switchOfertas,
      });

      await panel.alternarOfertas();
      const visualEncendido = await panel.estadoVisualDeOfertas();
      await listado.capturarEvidencia(cp, 2, 'toggle Ofertas activado', {
        elemento: panel.switchOfertas,
      });

      const conteoDelBoton = await panel.conteoDelBoton();
      await listado.capturarEvidencia(cp, 3, 'boton Mostrar productos con el conteo actualizado', {
        elemento: panel.footer,
      });

      expect(await panel.ofertasActivo(), 'el toggle queda en estado activo').toBe(true);
      // "Cambia visualmente" se comprueba con dos señales independientes —color de la pista y
      // posición de la perilla—: con una sola, un cambio de paleta sería un falso Rechazado.
      expect(visualEncendido.pista, 'el color de la pista cambia').not.toBe(visualApagado.pista);
      expect(visualEncendido.perillaEnLaDerecha, 'la perilla se desplaza a la derecha').toBe(true);
      expect(visualApagado.perillaEnLaDerecha, 'la perilla partía a la izquierda').toBe(false);

      expect(conteoDelBoton, 'el botón muestra el conteo tras activar el filtro').not.toBeNull();
      expect(conteoDelBoton, 'el conteo del botón refleja los productos en oferta').toBe(
        ofertasDeclaradas,
      );

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C95-D-003 · Aplicacion del filtro Ofertas al confirmar con Mostrar productos (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C95-D-003';
      const listado = await abrirListado(page, testData);
      const totalSinFiltrar = await listado.conteoDeclarado();

      const panel = await listado.abrirPanelDeFiltros();
      await panel.alternarOfertas();
      const conteoDelBoton = await panel.conteoDelBoton();
      await listado.capturarEvidencia(cp, 1, 'toggle Ofertas activado antes de confirmar', {
        elemento: panel.root,
      });

      await panel.aplicar();
      await listado.capturarEvidencia(cp, 2, 'listado filtrado por Ofertas con el panel cerrado');

      const conteoDelEncabezado = await listado.conteoDeclarado();
      const productos = await listado.productosConPromocion();
      await listado.capturarEvidencia(cp, 3, 'productos resultantes, todos con promocion vigente');

      expect(await panel.estaAbierto(), 'el panel se cierra al confirmar').toBe(false);
      expect(
        listado.filtrosEnLaUrl.some((f) => /isOnSale/i.test(f)),
        'la URL conserva el filtro de ofertas',
      ).toBe(true);

      // "Únicamente productos con oferta vigente": se comprueba producto a producto, y además que
      // el resultado sea un subconjunto propio del listado sin filtrar — un filtro que no filtrara
      // nada también dejaría "todos con oferta" si la categoría entera estuviera en oferta.
      expect(productos.length, 'el listado trae productos').toBeGreaterThan(0);
      expect(
        productos.filter((p) => !p.promocion).map((p) => p.nombre),
        'productos sin oferta en el listado filtrado',
      ).toEqual([]);
      expect(productos.length, 'el filtro reduce el listado').toBeLessThan(totalSinFiltrar ?? 99);

      expect(conteoDelEncabezado, 'el conteo del encabezado coincide con el del botón').toBe(
        conteoDelBoton,
      );
      expect(productos.length, 'los productos renderizados coinciden con el conteo').toBe(
        conteoDelEncabezado,
      );

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C95-D-004 · Desactivacion del filtro Ofertas recalcula el conteo sobre los filtros restantes (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C95-D-004';
      const listado = await abrirListado(page, testData);

      const panel = await listado.abrirPanelDeFiltros();
      await panel.alternarOfertas();
      await listado.capturarEvidencia(cp, 1, 'filtro Ofertas activo antes de sumar la marca', {
        elemento: panel.switchOfertas,
      });

      // La marca la elige el caso ("ej. Marca"), no la planilla: se toma de las que el propio
      // panel ofrece con Ofertas activo. Se prefiere una cuyo total sin Ofertas sea mayor que el
      // combinado, porque con una marca que tenga un solo producto el conteo sale igual antes y
      // después y el caso no distinguiría un recálculo real de un conteo que no se movió.
      const marcas = await marcasDisponibles(panel);
      expect(marcas.length, 'el panel ofrece marcas junto al filtro Ofertas').toBeGreaterThan(0);

      let marcaElegida = '';
      let conAmbos: number | null = null;
      let soloMarca: number | null = null;
      for (const [i, marca] of marcas.entries()) {
        await alternarMarca(panel, marca);
        const combinado = await panel.conteoDelBoton();
        await panel.alternarOfertas();
        const restante = await panel.conteoDelBoton();
        marcaElegida = marca;
        conAmbos = combinado;
        soloMarca = restante;
        if (restante !== null && combinado !== null && restante > combinado) break;
        // Ninguna marca más que probar: se deja el estado de este intento, que es igualmente el
        // que el caso pide (marca activa, Ofertas apagado).
        if (i === marcas.length - 1) break;
        // Se deshace el intento y se vuelve al estado inicial para evaluar la siguiente marca.
        await alternarMarca(panel, marca);
        await panel.alternarOfertas();
      }

      // El bucle deja el estado que el caso necesita: la marca elegida activa y Ofertas apagado.
      const visual = await panel.estadoVisualDeOfertas();
      const chips = await panel.chips.allInnerTexts();
      await listado.capturarEvidencia(cp, 2, 'toggle Ofertas desactivado con la marca aun activa', {
        elemento: panel.root,
      });

      expect(await panel.ofertasActivo(), 'el toggle de Ofertas vuelve a desactivado').toBe(false);
      expect(visual.perillaEnLaDerecha, 'la perilla vuelve a la izquierda').toBe(false);
      expect(
        chips.map((c) => c.trim()).some((c) => /ofertas/i.test(c)),
        'el chip de Ofertas desaparece de los filtros aplicados',
      ).toBe(false);
      expect(
        chips.map((c) => c.trim()).some((c) => c.includes(marcaElegida)),
        `el filtro de marca (${marcaElegida}) sigue aplicado`,
      ).toBe(true);
      expect(
        listado.filtrosEnLaUrl.some((f) => /isOnSale/i.test(f)),
        'la URL ya no lleva el filtro de ofertas',
      ).toBe(false);

      // El recálculo: al soltar Ofertas el conteo pasa a ser el de la marca sola. Se comprueba
      // que el botón sigue trayendo número y que no bajó —quitar un filtro nunca puede dejar
      // menos productos—, y el valor exacto se contrasta más abajo contra el listado aplicado,
      // que es la prueba de que el número corresponde a los filtros restantes y no a los previos.
      expect(soloMarca, 'el botón mantiene un conteo tras desactivar Ofertas').not.toBeNull();
      expect(
        soloMarca as number,
        `el conteo se recalcula sobre el filtro restante (${marcaElegida})`,
      ).toBeGreaterThanOrEqual(conAmbos as number);

      await panel.aplicar();
      await listado.capturarEvidencia(cp, 3, 'listado resultante con solo el filtro de marca');

      const productos = await listado.secuencia();
      const conteoDelEncabezado = await listado.conteoDeclarado();
      await listado.capturarEvidencia(cp, 4, 'productos resultantes, todos de la marca restante');

      expect(conteoDelEncabezado, 'el encabezado refleja el conteo recalculado').toBe(soloMarca);
      expect(
        productos.filter((n) => !n.toLowerCase().startsWith(marcaElegida.toLowerCase())),
        `productos ajenos a la marca ${marcaElegida}`,
      ).toEqual([]);

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C95-D-006 · Combinacion del filtro Ofertas con un filtro adicional mediante logica AND (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C95-D-006';
      const listado = await abrirListado(page, testData);

      const panel = await listado.abrirPanelDeFiltros();
      const ofertasSolas = await panel.conteoDeOfertas();
      await panel.alternarOfertas();
      await listado.capturarEvidencia(cp, 1, 'filtro Ofertas activo', {
        elemento: panel.switchOfertas,
      });

      const marcas = await marcasDisponibles(panel);
      expect(marcas.length, 'el panel ofrece un filtro adicional que combinar').toBeGreaterThan(0);
      const marca = marcas[0];
      await alternarMarca(panel, marca);
      const conteoCombinado = await panel.conteoDelBoton();
      await listado.capturarEvidencia(cp, 2, `filtro Ofertas y marca ${marca} activos a la vez`, {
        elemento: panel.root,
      });

      await panel.aplicar();
      await listado.capturarEvidencia(cp, 3, 'listado resultante de combinar ambos filtros');

      const productos = await listado.productosConPromocion();
      const conteoDelEncabezado = await listado.conteoDeclarado();
      await listado.capturarEvidencia(cp, 4, 'productos que cumplen ambos criterios');

      const filtros = listado.filtrosEnLaUrl;
      expect(filtros.some((f) => /isOnSale/i.test(f)), 'la URL conserva el filtro de ofertas').toBe(
        true,
      );
      expect(filtros.some((f) => /brand/i.test(f)), 'la URL conserva el filtro de marca').toBe(true);

      // AND: cada producto cumple las dos condiciones a la vez, y el resultado no excede a
      // ninguno de los dos filtros por separado —que es lo que pasaría con un OR—.
      expect(productos.length, 'el listado trae productos').toBeGreaterThan(0);
      expect(
        productos.filter((p) => !p.promocion).map((p) => p.nombre),
        'productos sin oferta en el resultado combinado',
      ).toEqual([]);
      expect(
        productos
          .filter((p) => !p.nombre.toLowerCase().startsWith(marca.toLowerCase()))
          .map((p) => p.nombre),
        `productos ajenos a la marca ${marca} en el resultado combinado`,
      ).toEqual([]);
      expect(
        productos.length,
        'el resultado combinado no excede al del filtro Ofertas solo',
      ).toBeLessThanOrEqual(ofertasSolas as number);
      expect(conteoDelEncabezado, 'el encabezado coincide con el conteo del botón').toBe(
        conteoCombinado,
      );

      await listado.capturarEvidencia(cp);
    });
  });
});
