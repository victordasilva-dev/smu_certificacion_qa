import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP } from './support/viewports';
import { ListadoProductos } from './pages/ListadoProductos';
import { PanelFiltros } from './pages/PanelFiltros';

/**
 * B2C-96 — Filtro "Estilos de alimentación" del panel de filtros (PLP/SRP/Colección).
 *
 * Están aquí los 4 TC de la planilla que se pudieron ejecutar con la data que declaran. Los otros
 * dos quedaron `Bloqueado` antes de generar su `test()`, los dos por el mismo motivo —la columna
 * `Test data` solo declara `{PLP_URL}` (carnes_vacuno) y esa categoría no permite observar lo que
 * el caso existe para probar—:
 *
 * - **D-005 (CA4, lógica OR)**: los 7 estilos de la categoría devuelven **2 productos cada uno**, y
 *   seleccionando los 7 a la vez el botón sigue diciendo "Mostrar productos (2)". Los mismos dos
 *   productos llevan los siete atributos, así que cualquier subconjunto da el mismo resultado y
 *   **OR y AND son indistinguibles**: una aserción de unión pasaría igual contra una
 *   implementación AND. Verde sin haber probado nada es peor que un bloqueo honesto.
 * - **D-006 (CA5, filtro ausente sin atributos)**: pide un contexto donde ningún producto tenga
 *   atributos de Ok to Shop, y el único declarado sí los tiene.
 *
 * Lo que la exploración fijó y gobierna cómo se leen los resultados:
 *
 * - **Las píldoras no son checkboxes**: son `<button aria-pressed>` dentro de una `<ul>`, con un
 *   `<img>` de Ok to Shop y la etiqueta como texto. El estado se lee de `aria-pressed`.
 * - **El icono no cambia de archivo al seleccionarse**: conserva su `src` y se recolorea con un
 *   `filter` CSS, así que "el icono se pone rojo" se comprueba sobre el `filter`, no sobre el `src`.
 * - **El orden alfabético se compara con `localeCompare('es')`**: "Libre de maní" lleva tilde y un
 *   orden binario la mandaría detrás de "Libre de mariscos", convirtiendo un orden correcto en un
 *   falso `Rechazado`.
 *
 * Los conteos no se escriben como números literales: se leen de la UI y se comparan entre sí (el
 * total de la categoría, el del botón y el del encabezado). Un `toBe(2)` certificaría el
 * inventario de hoy de DEV, no el comportamiento del filtro.
 */

const ESTILOS = /^estilos de alimentaci[óo]n/i;

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

/** El estado de la sección de estilos, tal como lo expone el panel. */
async function seccionDeEstilos(
  panel: PanelFiltros,
): Promise<{ nombre: string; expandida: boolean; flecha: 'arriba' | 'abajo'; badge: number | null }> {
  const secciones = await panel.estadoDeLasSecciones();
  const estilos = secciones.find((s) => ESTILOS.test(s.nombre));
  if (!estilos) throw new Error('El panel no ofrece la sección "Estilos de alimentación"');
  return estilos;
}

test.describe('B2C-96 — Filtro Estilos de alimentacion en el panel de filtros', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C96-D-001 · Visualizacion del dropdown Estilos de alimentacion colapsado (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C96-D-001';
      const listado = await abrirListado(page, testData);

      const panel = await listado.abrirPanelDeFiltros();
      await listado.capturarEvidencia(cp, 1, 'panel de filtros abierto en la PLP', {
        elemento: panel.root,
      });

      const estilos = await seccionDeEstilos(panel);
      await listado.capturarEvidencia(cp, 2, 'dropdown Estilos de alimentacion colapsado', {
        elemento: panel.seccion(ESTILOS),
      });

      // CA1 pide tres cosas del estado inicial: que esté, que esté colapsado y que la flecha
      // apunte hacia abajo. El nombre se comprueba aparte porque es lo que el usuario lee.
      expect(estilos.nombre, 'el nombre del dropdown').toMatch(ESTILOS);
      expect(estilos.expandida, 'el dropdown viene colapsado').toBe(false);
      expect(estilos.flecha, 'la flecha apunta hacia abajo').toBe('abajo');
      await expect(panel.seccion(ESTILOS), 'el dropdown está a la vista').toBeVisible();

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C96-D-002 · Estructura del filtro expandido: pildoras en orden alfabetico (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C96-D-002';
      const listado = await abrirListado(page, testData);

      const panel = await listado.abrirPanelDeFiltros();
      await listado.capturarEvidencia(cp, 1, 'dropdown colapsado antes de expandir', {
        elemento: panel.seccion(ESTILOS),
      });

      await panel.expandirSeccion(ESTILOS);
      const estilos = await seccionDeEstilos(panel);
      const pildoras = await panel.estadoDePildoras(ESTILOS);
      await listado.capturarEvidencia(cp, 2, 'pildoras de estilos de alimentacion desplegadas', {
        elemento: panel.root,
      });

      expect(pildoras.length, 'el dropdown despliega píldoras').toBeGreaterThan(0);

      // Icono y etiqueta, píldora por píldora: una sola que llegue sin icono es una desviación
      // del caso, y un `some()` la dejaría pasar.
      expect(
        pildoras.filter((p) => !p.tieneIcono).map((p) => p.etiqueta),
        'píldoras sin icono representativo',
      ).toEqual([]);
      expect(
        pildoras.filter((p) => !p.etiqueta).length,
        'píldoras sin etiqueta',
      ).toBe(0);

      // Orden alfabético con criterio español: "Libre de maní" lleva tilde y una comparación
      // binaria la ordenaría detrás de "Libre de mariscos".
      const etiquetas = pildoras.map((p) => p.etiqueta);
      const alfabetico = [...etiquetas].sort((a, b) => a.localeCompare(b, 'es'));
      expect(etiquetas, 'las píldoras salen en orden alfabético').toEqual(alfabetico);

      expect(estilos.expandida, 'el dropdown queda expandido').toBe(true);
      expect(estilos.flecha, 'la flecha cambia hacia arriba').toBe('arriba');
      await listado.capturarEvidencia(cp, 3, 'flecha del dropdown apuntando hacia arriba', {
        elemento: panel.seccion(ESTILOS),
      });

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C96-D-003 · Seleccion de una pildora de estilo de alimentacion (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C96-D-003';
      const listado = await abrirListado(page, testData);
      const totalDeLaCategoria = await listado.conteoDeclarado();

      const panel = await listado.abrirPanelDeFiltros();
      await panel.expandirSeccion(ESTILOS);
      const antes = await panel.estadoDePildoras(ESTILOS);
      await listado.capturarEvidencia(cp, 1, 'pildoras sin seleccionar', { elemento: panel.root });

      const elegida = antes[0].etiqueta;
      await panel.alternarPildora(ESTILOS, elegida);

      const despues = await panel.estadoDePildoras(ESTILOS);
      const pildora = despues.find((p) => p.etiqueta === elegida);
      const otra = despues.find((p) => p.etiqueta !== elegida);
      await listado.capturarEvidencia(cp, 2, `pildora ${elegida} resaltada`, {
        elemento: panel.root,
      });

      const seccion = await seccionDeEstilos(panel);
      const chips = (await panel.chips.allInnerTexts()).map((c) => c.trim());
      const conteo = await panel.conteoDelBoton();
      await listado.capturarEvidencia(cp, 3, 'badge, chip aplicado y conteo del boton', {
        elemento: panel.root,
      });

      // El resaltado se comprueba por las tres señales que describe el caso —estado, borde e
      // icono—, y el borde se contrasta contra el de una píldora sin seleccionar en la misma
      // corrida: así el caso sigue valiendo si mañana cambia el rojo de la paleta.
      expect(pildora?.seleccionada, 'la píldora queda seleccionada').toBe(true);
      expect(pildora?.borde, 'el borde de la píldora cambia').not.toBe(otra?.borde);
      expect(pildora?.iconoRecoloreado, 'el icono de la píldora se recolorea').toBe(true);
      expect(otra?.iconoRecoloreado, 'el icono de una píldora sin seleccionar no se recolorea').toBe(
        false,
      );

      expect(seccion.badge, 'el badge del dropdown muestra la cantidad seleccionada').toBe(1);
      expect(chips, `el chip "${elegida}" se agrega a Filtros aplicados`).toContain(elegida);

      expect(conteo, 'el botón muestra el conteo tras seleccionar').not.toBeNull();
      expect(conteo as number, 'el conteo del botón filtra sobre el total').toBeLessThan(
        totalDeLaCategoria ?? 99,
      );

      await listado.capturarEvidencia(cp);
    });

    test('TC-B2C96-D-004 · Deseleccion de una pildora de estilo de alimentacion (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C96-D-004';
      const listado = await abrirListado(page, testData);
      const totalDeLaCategoria = await listado.conteoDeclarado();

      const panel = await listado.abrirPanelDeFiltros();
      await panel.expandirSeccion(ESTILOS);
      const inicial = await panel.estadoDePildoras(ESTILOS);
      const elegida = inicial[0].etiqueta;

      // La precondición del caso es tener una píldora ya seleccionada: se deja así y desde ahí se
      // observa la desselección, que es lo que el TC certifica.
      await panel.alternarPildora(ESTILOS, elegida);
      const conteoConFiltro = await panel.conteoDelBoton();
      await listado.capturarEvidencia(cp, 1, `pildora ${elegida} seleccionada`, {
        elemento: panel.root,
      });

      await panel.alternarPildora(ESTILOS, elegida);
      const despues = await panel.estadoDePildoras(ESTILOS);
      const pildora = despues.find((p) => p.etiqueta === elegida);
      const sinSeleccionar = inicial.find((p) => p.etiqueta === elegida);
      const seccion = await seccionDeEstilos(panel);
      const chips = (await panel.chips.allInnerTexts()).map((c) => c.trim());
      const conteo = await panel.conteoDelBoton();
      await listado.capturarEvidencia(cp, 2, 'pildora de vuelta en su estado normal', {
        elemento: panel.root,
      });

      // "Vuelve a su estado normal" se compara contra la firma que tenía esa misma píldora antes
      // de tocarla, no contra un color escrito a mano en el spec.
      expect(pildora?.seleccionada, 'la píldora queda sin seleccionar').toBe(false);
      expect(pildora?.borde, 'el borde vuelve al de una píldora normal').toBe(sinSeleccionar?.borde);
      expect(pildora?.texto, 'el texto vuelve a su color normal').toBe(sinSeleccionar?.texto);
      expect(pildora?.iconoRecoloreado, 'el icono deja de estar recoloreado').toBe(false);

      expect(chips, `el chip "${elegida}" desaparece de Filtros aplicados`).not.toContain(elegida);
      expect(seccion.badge, 'el badge del dropdown desaparece').toBeNull();

      // El conteo se recalcula: vuelve al total de la categoría, distinto del que mostraba con el
      // filtro puesto. Comprobar solo que "hay un número" daría por bueno un botón congelado.
      expect(conteo, 'el botón mantiene un conteo tras deseleccionar').not.toBeNull();
      expect(conteo, 'el conteo vuelve al total de la categoría').toBe(totalDeLaCategoria);
      expect(conteo, 'el conteo cambió respecto del que mostraba con el filtro').not.toBe(
        conteoConFiltro,
      );

      await listado.capturarEvidencia(cp);
    });
  });
});
