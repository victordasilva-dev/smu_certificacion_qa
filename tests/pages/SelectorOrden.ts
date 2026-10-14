import { Locator, Page } from '@playwright/test';

/** Los cinco criterios que CA3 declara, en el orden en que el caso los exige. */
export const OPCIONES_DECLARADAS = [
  'Recomendado',
  'Más vendido',
  'Precio más bajo',
  'Precio más alto',
  'Pensados para ti',
] as const;

/**
 * Los TC escriben los criterios sin tilde ("Mas vendido") y la UI los lleva ("Más vendido").
 * Un locator con el literal del Excel no encuentra nada y produciría un `Rechazado` del script
 * en vez de un defecto del producto, así que el texto se busca tolerante a la tilde.
 */
export function tolerante(nombre: string): RegExp {
  const patron = nombre
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/a/gi, '[aá]')
    .replace(/e/gi, '[eé]')
    .replace(/i/gi, '[ií]')
    .replace(/o/gi, '[oó]')
    .replace(/u/gi, '[uú]');
  return new RegExp(`^${patron}$`, 'i');
}

/**
 * Dropdown de orden de la barra del listado — el que los TC llaman "Ordenar por".
 *
 * Es un componente y no una página, por eso no extiende `BasePage`: no tiene `path` ni `goto()`
 * que signifiquen nada.
 *
 * Dos cosas que la exploración dejó claras y que gobiernan todos los locators de esta clase:
 *
 * - **No existe una etiqueta visible "Ordenar por"**. El control muestra el criterio vigente
 *   ("Recomendado") y su accessible name es `Ordenar: <criterio>`. Anclarse en el prefijo del
 *   `aria-label` es lo único estable, porque el resto del nombre cambia con cada selección.
 * - **Su panel es un `role="dialog"` más de la página**, junto al panel de filtros y a un
 *   `chakra-popover__content` vacío del header. Se resuelve por el `aria-controls` del propio
 *   trigger y no por rol: un `getByRole('dialog')` pelado da por bueno el diálogo equivocado y
 *   todo lo que cuelgue de él sale vacío sin dar error.
 */
export class SelectorOrden {
  constructor(private readonly page: Page) {}

  /** El trigger. Su accessible name es `Ordenar: <criterio vigente>`. */
  get trigger(): Locator {
    return this.page.locator('button[aria-label^="Ordenar:"]');
  }

  /**
   * El panel desplegado, resuelto por el `aria-controls` del trigger.
   *
   * Hay que leer el atributo en tiempo de ejecución porque el id lo genera Chakra en cada
   * render; por eso es un método `async` y no un getter de `Locator`.
   */
  async panel(): Promise<Locator> {
    const id = await this.trigger.getAttribute('aria-controls');
    if (!id) throw new Error('El dropdown de orden no expone aria-controls');
    // Selector por atributo y no `#id`: Chakra genera ids con `:` (`popover-content-:R1a:`),
    // que en un selector de id habría que escapar. `CSS.escape` no existe en Node, donde corre
    // el locator, así que la forma que funciona es la comparación por atributo.
    return this.page.locator(`[id="${id}"]`);
  }

  /** El criterio que el control muestra como vigente, leído del `aria-label`. */
  async criterioVigente(): Promise<string> {
    const etiqueta = (await this.trigger.getAttribute('aria-label')) ?? '';
    return etiqueta.replace(/^Ordenar:\s*/i, '').trim();
  }

  async estaDesplegado(): Promise<boolean> {
    return (await this.trigger.getAttribute('aria-expanded')) === 'true';
  }

  /** Despliega el dropdown si no lo estaba y espera a que el panel se monte. */
  async desplegar(): Promise<this> {
    if (!(await this.estaDesplegado())) {
      await this.trigger.click();
    }
    await (await this.panel()).waitFor({ state: 'visible', timeout: 15000 });
    return this;
  }

  /** Los nombres de las opciones ofrecidas, en el orden en que se renderizan. */
  async opciones(): Promise<string[]> {
    const panel = await this.panel();
    return (await panel.getByRole('button').allInnerTexts()).map((t) => t.trim()).filter(Boolean);
  }

  opcion(nombre: string): Locator {
    return this.page.locator('[role="dialog"]').getByRole('button', { name: tolerante(nombre) });
  }

  /**
   * Los nombres de las opciones marcadas como seleccionadas.
   *
   * La marca **no** es una clase ni un `aria-checked`: la opción activa lleva un hijo extra —el
   * `<div>` del check— frente al único `<span>` de las demás. Las clases generadas por Chakra
   * cambian entre builds; el recuento de hijos no. Devuelve una lista y no un único nombre
   * porque "la selección es única" es justo lo que algunos TC tienen que comprobar, y para eso
   * hace falta poder observar que hubiera más de una.
   */
  async opcionesMarcadas(): Promise<string[]> {
    const panel = await this.panel();
    return panel.evaluate((raiz) =>
      [...raiz.querySelectorAll('button')]
        .filter((b) => b.children.length > 1)
        .map((b) => (b.textContent ?? '').trim()),
    );
  }

  /**
   * Despliega el dropdown, elige un criterio y espera a que el listado se sirva.
   *
   * **No se espera a que el trigger vuelva a estar visible.** Cuando el reordenamiento falla, la
   * barra de controles se desmonta entera y la deja en su lugar el estado de error: esperar el
   * trigger convertiría ese escenario —que es justo lo que los TC de CA17 quieren provocar— en un
   * timeout del script en vez de en la observación del error. Se espera a que la red se aquiete,
   * que vale para los dos desenlaces.
   */
  async elegir(nombre: string): Promise<void> {
    await this.desplegar();
    await this.opcion(nombre).click();
    await this.page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => undefined);
  }
}
