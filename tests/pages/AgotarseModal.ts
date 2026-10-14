import { Locator, Page } from '@playwright/test';
import { capturarEvidencia } from '../support/evidencia';

/**
 * Modal "Algunos productos podrían agotarse" (B2C-122/B2C-126).
 *
 * Aparece al confirmar una dirección de otra tienda abastecedora con el carro cargado, encima del
 * drawer "Elige tu método de entrega", que sigue abierto detrás. Con la X o "No, gracias" se cierra
 * y el drawer queda como estaba; con "Sí, continuar" el botón pasa a "Loading..." con spinner y
 * luego se cierra todo con la dirección nueva aplicada (explorado el 2026-10-13).
 *
 * Es un componente, no una página: no extiende `BasePage`.
 */
export class AgotarseModal {
  readonly root: Locator;

  constructor(private readonly page: Page) {
    this.root = page.getByRole('dialog').filter({ hasText: /algunos productos podr[íi]an agotarse/i }).locator('visible=true').first();
  }

  get titulo(): Locator {
    return this.root.getByText(/^algunos productos podr[íi]an agotarse$/i);
  }

  get texto(): Locator {
    return this.root.getByText(/^al cambiar la direcci[óo]n/i);
  }

  get botonSi(): Locator {
    return this.root.getByRole('button', { name: /^s[íi], continuar$/i });
  }

  get botonNo(): Locator {
    return this.root.getByRole('button', { name: /^no, gracias$/i });
  }

  get botonCerrar(): Locator {
    return this.root.getByRole('button', { name: /^cerrar$/i });
  }

  /**
   * Empieza a registrar si algún botón del modal pasa a estado de carga. Se llama antes del clic:
   * el spinner dura lo que tarda el cambio en aplicarse, y un snapshot después del clic llega tarde.
   */
  async observarSpinner(): Promise<void> {
    await this.root.evaluate((el) => {
      const w = window as unknown as { __qaSpinner: string[] };
      w.__qaSpinner = [];
      new MutationObserver(() => {
        for (const b of Array.from(el.querySelectorAll('button'))) {
          const conSpinner = b.querySelector('.chakra-spinner, [class*="spinner"], [role="progressbar"]') !== null;
          const texto = (b as HTMLElement).innerText.trim();
          if (conSpinner || /^loading/i.test(texto)) w.__qaSpinner.push(texto || '(spinner)');
        }
      }).observe(el, { subtree: true, childList: true, attributes: true, characterData: true });
    });
  }

  /** Lo que se vio en estado de carga desde `observarSpinner()` (vacío si nada). */
  async spinnerObservado(): Promise<string[]> {
    return this.page.evaluate(() => (window as unknown as { __qaSpinner?: string[] }).__qaSpinner ?? []);
  }

  async capturar(cpId: string, paso?: number | string, etiqueta?: string, destino: Locator | Page = this.root): Promise<string> {
    return capturarEvidencia(destino, cpId, paso, etiqueta);
  }
}
