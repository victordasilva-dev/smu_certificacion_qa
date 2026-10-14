import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { CookieConsentBanner } from './CookieConsentBanner';
import { FooterSimplificado } from './FooterSimplificado';
import { HeaderSimplificado } from './HeaderSimplificado';

/**
 * Carro de compra: la página del flujo de compra donde B2C-20 valida el Footer Simplificado.
 *
 * Su `readyLocator` es el footer porque es el componente bajo prueba: la página está lista para
 * el TC cuando el footer existe, sin depender de que el carro tenga productos.
 */
export class CarroPage extends BasePage {
  protected readonly path = 'cart';

  readonly footer = new FooterSimplificado(this.page);
  readonly header = new HeaderSimplificado(this.page);
  readonly cookies = new CookieConsentBanner(this.page);

  get readyLocator(): Locator {
    return this.footer.root;
  }

  async goto(): Promise<this> {
    await super.goto();
    await this.cookies.aceptarSiAparece();
    await this.waitUntilReady();
    return this;
  }

  // --- Carro con productos (B2C-148) --------------------------------------------------------

  get titulo(): Locator {
    return this.page.getByRole('heading', { name: /^mi carro$/i });
  }

  get carroVacio(): Locator {
    return this.page.getByText(/tu carro est[áa] vac[íi]o/i);
  }

  /** "11 unidades", bajo "Mis productos". */
  get totalUnidades(): Locator {
    return this.page.locator('main p').filter({ hasText: /^\d+ unidad(es)?$/i }).first();
  }

  get subtotal(): Locator {
    return this.page.locator('main p').filter({ hasText: /^subtotal$/i }).first().locator('xpath=following-sibling::p[1]');
  }

  /** "Sumar <producto>" / "Restar <producto>" del primer ítem. */
  get botonSumar(): Locator {
    return this.page.getByRole('button', { name: /^sumar /i }).first();
  }

  get botonRestar(): Locator {
    return this.page.getByRole('button', { name: /^restar /i }).first();
  }

  get botonContinuarEntrega(): Locator {
    return this.page.getByRole('button', { name: /^continuar con la entrega$/i });
  }

  /** "¡Que no se te olviden!": los sugeridos que se abren al continuar. */
  get modalSugeridos(): Locator {
    return this.page.getByRole('dialog').filter({ hasText: /que no se te olviden/i });
  }

  get continuarSugeridos(): Locator {
    return this.page.getByRole('button', { name: /^continuar$/i }).locator('visible=true').last();
  }

  /** "Continuar con la entrega" y, si aparece el modal de sugeridos, su "Continuar". */
  async continuarConLaEntrega(): Promise<void> {
    await this.botonContinuarEntrega.click();
    const destino = this.page.waitForURL(/\/checkout\/entrega/, { timeout: 30000 }).then(() => 'checkout' as const);
    const sugeridos = this.modalSugeridos.waitFor({ state: 'visible', timeout: 30000 }).then(() => 'modal' as const);
    if ((await Promise.race([destino, sugeridos])) === 'modal') {
      await this.continuarSugeridos.click();
      await this.page.waitForURL(/\/checkout\/entrega/, { timeout: 30000 });
    }
    destino.catch(() => {});
    sugeridos.catch(() => {});
  }

  // --- Fusión de carros (B2C-168) -------------------------------------------------------------

  /** Botón "Eliminar <nombre>" de cada producto: da la lista de productos del carro por nombre. */
  get botonesEliminar(): Locator {
    return this.page.getByRole('button', { name: /^eliminar .+/i });
  }

  /** Nombres de los productos del carro, sin repetir (cada ítem tiene dos botones "Eliminar <nombre>"). */
  async productos(): Promise<string[]> {
    const nombres = await this.botonesEliminar.evaluateAll((bs) =>
      bs.map((b) => (b.getAttribute('aria-label') ?? '').replace(/^eliminar\s+/i, '').trim()),
    );
    return [...new Set(nombres.filter(Boolean))];
  }

  /** "2 un." del ítem `nombre`: el contenedor más interno que tiene su "Eliminar" y una cantidad. */
  cantidadDe(nombre: string): Locator {
    return this.page
      .locator('main div')
      .filter({ has: this.page.getByRole('button', { name: `Eliminar ${nombre}`, exact: true }) })
      .filter({ hasText: /\d+ un\./ })
      .last()
      .getByText(/^\d+ un\.$/);
  }

  get botonVaciarCarro(): Locator {
    return this.page.getByRole('button', { name: /^vaciar carro$/i });
  }

  /**
   * Vacía el carro. En Desktop: "Vaciar carro" → alertdialog "Vaciar el carro" → "Sí, eliminar". En
   * Mobile 390x844 no hay "Vaciar carro": se elimina ítem por ítem con su "Eliminar <nombre>".
   */
  async vaciar(): Promise<void> {
    await this.carroVacio.or(this.botonesEliminar.first()).first().waitFor({ state: 'visible', timeout: 30000 });
    if (await this.carroVacio.isVisible()) return;
    if (await this.botonVaciarCarro.isVisible().catch(() => false)) {
      await this.botonVaciarCarro.click();
      await this.page.getByRole('alertdialog').getByRole('button', { name: /^s[íi], eliminar$/i }).click();
    } else {
      for (let i = 0; i < 30 && !(await this.carroVacio.isVisible()); i++) {
        const antes = await this.botonesEliminar.count();
        await this.botonesEliminar.locator('visible=true').first().click();
        const confirmar = this.page.getByRole('alertdialog').getByRole('button', { name: /^s[íi], eliminar$/i });
        if (await confirmar.waitFor({ state: 'visible', timeout: 2000 }).then(() => true, () => false)) await confirmar.click();
        await this.page
          .waitForFunction(
            (n) => document.querySelectorAll('button[aria-label^="Eliminar "]').length < n,
            antes,
            { timeout: 15000 },
          )
          .catch(() => {});
      }
    }
    await this.carroVacio.waitFor({ state: 'visible', timeout: 30000 });
  }

  /** Lleva la página al final, que es el paso "hacer scroll hasta el footer" de los TC. */
  async scrollAlFinal(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await this.page.waitForTimeout(800);
  }
}
