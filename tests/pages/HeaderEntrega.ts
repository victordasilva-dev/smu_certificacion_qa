import { Locator, Page } from '@playwright/test';
import { HeaderFull } from './HeaderFull';

/**
 * Lo que el Store Locator del header muestra de la entrega: dirección (o tienda), ventana
 * «Desde: …» y chip de precio (`data-testid="header-delivery-chip"`). Componente, no página.
 */
export class HeaderEntrega {
  constructor(private readonly page: Page, readonly header: HeaderFull) {}

  get boton(): Locator {
    return this.header.storeLocator;
  }

  /** El header completo: con retiro en tienda el selector no es un `button`, así que se lee de la barra. */
  get zona(): Locator {
    return this.header.barraDelSitio;
  }

  get chip(): Locator {
    return this.zona.getByTestId('header-delivery-chip').locator('visible=true').first();
  }

  async texto(): Promise<string> {
    return ((await this.zona.innerText().catch(() => '')) ?? '').replace(/\s+/g, ' ').trim();
  }

  async textoChip(): Promise<string> {
    return ((await this.chip.innerText().catch(() => '')) ?? '').replace(/\s+/g, ' ').trim();
  }

  async iconosEnChip(): Promise<number> {
    return this.chip.locator('svg, img').count().catch(() => 0);
  }

  /** Matiz (0-360) del fondo del chip, para distinguir amarillo / verde / naranja. */
  async colorChip(): Promise<{ css: string; matiz: number }> {
    return this.chip.evaluate((el) => {
      let n: Element | null = el;
      let css = 'rgba(0, 0, 0, 0)';
      while (n) {
        css = getComputedStyle(n).backgroundColor;
        if (!/rgba\(0, 0, 0, 0\)|transparent/.test(css)) break;
        n = n.parentElement;
      }
      const [r, g, b] = (css.match(/[\d.]+/g) ?? ['0', '0', '0']).map(Number);
      const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
      let h = 0;
      if (d) h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
      return { css, matiz: Math.round(((h * 60) + 360) % 360) };
    });
  }

  /** Un loader a pantalla completa (spinner / overlay que cubre casi todo el viewport). */
  async hayLoaderCompleto(): Promise<boolean> {
    return this.page.evaluate(() => {
      const vw = innerWidth, vh = innerHeight;
      return Array.from(document.querySelectorAll('.chakra-spinner, [role="progressbar"], [class*="overlay" i], [class*="loader" i]')).some((e) => {
        const r = (e as HTMLElement).getBoundingClientRect();
        const s = getComputedStyle(e as HTMLElement);
        return s.visibility !== 'hidden' && s.display !== 'none' && r.width >= vw * 0.8 && r.height >= vh * 0.8;
      });
    });
  }
}
