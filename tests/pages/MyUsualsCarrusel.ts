import { Locator, Page } from '@playwright/test';

/**
 * Carrusel My Usuals del Home (HU B2C-55): componente `smu.myUsualsCarousel` de Page Designer.
 *
 * Se renderiza como `section[data-testid="my-usuals-carousel"]` con el título (`h2`), el link
 * "Ver todos" a /account/my-usuals y las tarjetas del shelf estándar. Mientras carga los productos
 * muestra cinco `chakra-skeleton` en lugar de las tarjetas; si falla la lectura del cliente, el
 * contenedor de Page Designer queda con alto 0 y la sección no se monta.
 *
 * Las flechas son "Ver productos anteriores" / "Ver más productos". El carrusel solo pide al catálogo
 * los cinco primeros SKU de `c_myUsuals` (2026-11-11), así que en Desktop no hay más que desplazar.
 */
export class MyUsualsCarrusel {
  readonly root: Locator;

  constructor(private readonly page: Page) {
    this.root = page.getByTestId('my-usuals-carousel').first();
  }

  get titulo(): Locator {
    return this.root.locator('h2').first();
  }

  get verTodos(): Locator {
    return this.root.getByRole('link', { name: /^ver todos?$/i });
  }

  /**
   * Tarjetas del shelf, ancladas en el corazón de favoritos ("Guardar" o "Quitar de favoritos"). El
   * corazón está dos niveles por debajo de la tarjeta: su padre directo solo envuelve imagen y corazón.
   */
  get tarjetas(): Locator {
    return this.root.locator('div:has(> div > div > button[aria-label*="favoritos" i])');
  }

  /** Placeholders de carga. */
  get indicadoresDeCarga(): Locator {
    return this.root.locator('.chakra-skeleton, .chakra-spinner, [role="progressbar"]');
  }

  get siguiente(): Locator {
    return this.root.getByRole('button', { name: /ver m[áa]s productos/i });
  }

  /** Nombre de la tarjeta: el enlace con texto a la PDP. */
  nombreEn(tarjeta: Locator): Locator {
    return tarjeta.locator('a[href*=".html"]').filter({ hasText: /\w{3,}/ }).first();
  }

  /** SKU de cada tarjeta, en el orden del carrusel. */
  async skus(): Promise<string[]> {
    return this.tarjetas.evaluateAll((els) =>
      els.map((el) => el.querySelector('a[href*=".html"]')?.getAttribute('href')?.match(/\/([^/]+)\.html/)?.[1] ?? ''),
    );
  }

  /** SKU de las tarjetas que se ven enteras dentro del carrusel y de la ventana. */
  async skusVisibles(): Promise<string[]> {
    return this.root.evaluate((sec) => {
      const s = sec.getBoundingClientRect();
      const izq = Math.max(s.left, 0) - 2;
      const der = Math.min(s.right, window.innerWidth) + 2;
      return [...sec.querySelectorAll('button[aria-label*="favoritos" i]')]
        .map((b) => b.parentElement!.parentElement!.parentElement!)
        .filter((t) => {
          const r = t.getBoundingClientRect();
          return r.width > 0 && r.left >= izq && r.right <= der;
        })
        .map((t) => t.querySelector('a[href*=".html"]')?.getAttribute('href')?.match(/\/([^/]+)\.html/)?.[1] ?? '');
    });
  }

  /** Avanza el carrusel: la flecha si está a la vista; si no (Mobile), desplaza la pista con el dedo. */
  async avanzar(): Promise<void> {
    if (await this.siguiente.isVisible().catch(() => false)) {
      await this.siguiente.click();
    } else {
      const caja = await this.tarjetas.first().boundingBox();
      if (caja) {
        const y = caja.y + caja.height / 2;
        await this.page.mouse.move(caja.x + caja.width * 1.6, y);
        await this.page.mouse.down();
        await this.page.mouse.move(caja.x + 10, y, { steps: 12 });
        await this.page.mouse.up();
      }
      await this.root.evaluate((sec) => {
        const pista = [...sec.querySelectorAll<HTMLElement>('*')].find((e) => e.scrollWidth > e.clientWidth + 20);
        pista?.scrollBy({ left: pista.clientWidth, behavior: 'instant' as ScrollBehavior });
      });
    }
    await this.page.waitForTimeout(1500);
  }

  /** Alineación del título: `text-align` y desvío de su centro respecto del centro del carrusel. */
  async centradoDelTitulo(): Promise<{ textAlign: string; desvio: number }> {
    return this.titulo.evaluate((h) => {
      const sec = h.closest('[data-testid="my-usuals-carousel"]')!.getBoundingClientRect();
      const rango = document.createRange();
      rango.selectNodeContents(h);
      const t = rango.getBoundingClientRect();
      return {
        textAlign: getComputedStyle(h).textAlign,
        desvio: Math.round(Math.abs(t.left + t.width / 2 - (sec.left + sec.width / 2))),
      };
    });
  }

  async llevarAVista(): Promise<void> {
    await this.root.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);
  }
}
