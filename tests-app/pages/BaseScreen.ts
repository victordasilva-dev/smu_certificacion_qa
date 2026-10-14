import type { Locator, Screen } from 'mobilewright';
import { expect } from '@mobilewright/test';
import type { Plataforma } from '../../tests/support/rutasEvidencia';
import { capturarEvidenciaApp } from '../support/evidencia';

/**
 * Base de todos los Screen Objects de la app nativa: el Page Object Model de `tests-app/`.
 *
 * Mismo contrato que `tests/pages/BasePage.ts` en la web: la clase concreta declara sus locators
 * como `readonly` y sus acciones como métodos que reflejan los pasos del TC; **no lleva `expect`
 * de resultado** —eso lo decide el `test()` con el esperado del Excel—, y un método que navega a
 * otra pantalla devuelve el Screen Object de destino.
 *
 * Recibe la `plataforma` porque iOS y Android no siempre exponen el mismo árbol: cuando un
 * locator difiere, el Screen Object elige según la plataforma y el `test()` no se entera. Lo que
 * no difiere se escribe una sola vez, con `getByTestId` o `getByRole`, que mobilewright traduce a
 * los tipos nativos de cada una.
 */
export abstract class BaseScreen {
  constructor(
    protected readonly screen: Screen,
    protected readonly plataforma: Plataforma,
  ) {}

  /** Elemento que confirma que la pantalla terminó de cargar lo que el TC necesita ver. */
  abstract get readyLocator(): Locator;

  /** Espera a que la pantalla esté lista. Es una espera, no una aserción del TC. */
  async waitUntilReady(): Promise<this> {
    await expect(this.readyLocator).toBeVisible({ timeout: 30000 });
    return this;
  }

  /** Elige el locator de la plataforma en curso cuando iOS y Android difieren. */
  protected segun(locators: Record<Plataforma, Locator>): Locator {
    return locators[this.plataforma];
  }

  /**
   * Captura de evidencia con el nombre que consume el Word
   * (`test-results/evidence/<CP-ID>-<plataforma>-p<NN>-<etiqueta>.png`). Con `elemento`, solo ese
   * componente.
   */
  async capturarEvidencia(
    cpId: string,
    paso?: number | string,
    etiqueta?: string,
    opts: { elemento?: Locator } = {},
  ): Promise<string> {
    return capturarEvidenciaApp(opts.elemento ?? this.screen, cpId, this.plataforma, paso, etiqueta);
  }
}
