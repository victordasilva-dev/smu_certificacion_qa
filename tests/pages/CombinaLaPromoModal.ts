import { Locator, Page } from '@playwright/test';

/** Geometría del contenedor del modal, ya redondeada. */
export interface CajaDelModal {
  x: number;
  y: number;
  ancho: number;
  alto: number;
  viewport: { width: number; height: number };
}

/**
 * Modal "Combina la promo" — el objeto de la HU B2C-74.
 *
 * Es un componente, no una página: se abre desde el botón "Combina la promo" de la shelf de un
 * producto con promoción combinable, y no tiene URL propia.
 *
 * **Cambia de forma según el form-factor, pero no de estructura**: en Desktop es un drawer lateral
 * derecho de 400 px de ancho y en Mobile un bottom sheet a ancho completo anclado abajo. Por eso
 * la clase no recibe el form-factor: lo que cada TC compara es la geometría, y eso se mide.
 *
 * El modal comparte `role="dialog"` con el de login y con el del mini carro, así que **el rol solo
 * no alcanza**: se filtra por su propio encabezado. Y como la página puede tener varios diálogos
 * montados a la vez, se toma el último visible, que es el que está encima.
 */
export class CombinaLaPromoModal {
  constructor(private readonly page: Page) {}

  get root(): Locator {
    return this.page
      .locator('[role="dialog"]')
      .filter({ hasText: /combina la promo/i })
      .locator('visible=true')
      .last();
  }

  get titulo(): Locator {
    return this.root.getByText(/combina la promo/i).first();
  }

  /** La X de cierre. Su nombre accesible es "Close", no "Cerrar". */
  get botonCerrar(): Locator {
    return this.root.getByRole('button', { name: /close|cerrar/i });
  }

  get overlay(): Locator {
    return this.page.locator('.chakra-modal__overlay');
  }

  /** El contador "N / M productos" del header. */
  get contador(): Locator {
    return this.root.getByText(/\d+\s*\/\s*\d+\s*productos/i).first();
  }

  /** `{ n, m }` leídos del contador; `null` si todavía no está pintado. */
  async progreso(): Promise<{ n: number; m: number } | null> {
    if ((await this.contador.count()) === 0) return null;
    const txt = await this.contador.innerText();
    const m = txt.match(/(\d+)\s*\/\s*(\d+)/);
    return m ? { n: Number(m[1]), m: Number(m[2]) } : null;
  }

  /**
   * Los segmentos de la barra de progreso.
   *
   * La barra no tiene rol ni `data-testid`: es un contenedor cuyos hijos son todos `div` vacíos,
   * uno por unidad que pide la promo. Se localiza por esa forma —varios hijos sin texto ni
   * contenido— partiendo del contador, que es el ancla textual más cercana. Devuelve el color de
   * fondo de cada segmento, que es lo que distingue un segmento lleno de uno vacío.
   */
  async segmentosDeLaBarra(): Promise<string[]> {
    return this.root.evaluate((dialog) => {
      const contador = [...dialog.querySelectorAll('*')].find(
        (e) => e.children.length === 0 && /\d+\s*\/\s*\d+\s*productos/i.test(e.textContent ?? ''),
      );
      if (!contador) return [];
      let nodo: Element | null = contador;
      for (let i = 0; i < 4 && nodo; i++) {
        nodo = nodo.parentElement;
        if (!nodo) break;
        for (const hijo of nodo.children) {
          const partes = [...hijo.children];
          if (
            partes.length >= 2 &&
            partes.every((p) => p.children.length === 0 && !(p.textContent ?? '').trim())
          ) {
            return partes.map((p) => getComputedStyle(p).backgroundColor);
          }
        }
      }
      return [];
    });
  }

  /** Las shelves de variantes combinables que el modal renderiza. */
  get variantes(): Locator {
    return this.root.locator('div:has(> div > button[aria-label="Guardar en favoritos"])');
  }

  /** El SKU de cada variante mostrada, leído del `src` de su imagen. */
  async skusDeLasVariantes(): Promise<string[]> {
    return this.variantes.evaluateAll((els) =>
      els
        .map((e) => {
          const img = e.querySelector('img');
          const m = (img?.getAttribute('src') ?? '').match(/(\d{12,}-[A-Z]+)/);
          return m ? m[1] : null;
        })
        .filter((s): s is string => !!s),
    );
  }

  /** Geometría del modal frente al viewport: es lo que distingue el drawer del bottom sheet. */
  async caja(): Promise<CajaDelModal> {
    const box = await this.root.boundingBox();
    if (!box) throw new Error('El modal no tiene caja visible en el render actual.');
    const vp = this.page.viewportSize() ?? { width: 0, height: 0 };
    return {
      x: Math.round(box.x),
      y: Math.round(box.y),
      ancho: Math.round(box.width),
      alto: Math.round(box.height),
      viewport: vp,
    };
  }

  /** Color de fondo del overlay. Vacío si no hay overlay montado. */
  async fondoDelOverlay(): Promise<string> {
    if ((await this.overlay.count()) === 0) return '';
    return this.overlay.first().evaluate((el) => getComputedStyle(el).backgroundColor);
  }

  /** `true` si el scroll del fondo está bloqueado mientras el modal está abierto. */
  async fondoBloqueado(): Promise<boolean> {
    return this.page.evaluate(() => {
      const body = getComputedStyle(document.body);
      const html = getComputedStyle(document.documentElement);
      return body.overflow === 'hidden' || html.overflow === 'hidden' || body.position === 'fixed';
    });
  }

  /** La pantalla de error del modal, si el front la monta cuando falla la carga. */
  get pantallaDeError(): Locator {
    return this.root.getByText(/no pudimos|hubo un problema|intenta nuevamente|error/i).first();
  }

  get botonReintentar(): Locator {
    return this.root.getByRole('button', { name: /reintentar/i });
  }

  async estaAbierto(): Promise<boolean> {
    return (await this.root.count()) > 0;
  }

  async cerrarConX(): Promise<void> {
    await this.botonCerrar.click();
    await this.page.waitForTimeout(600);
  }

  // ------------------------------------------------------------- skeleton

  /**
   * Instala un muestreador del modal dentro de la página.
   *
   * El skeleton del modal dura ~160 ms —medido en la exploración—, así que preguntarle a
   * Playwright "¿está ahora?" desde fuera llega tarde casi siempre y el caso concluiría que nunca
   * existió. El muestreador registra cada 40 ms si el diálogo está sin variantes y con elementos
   * animados, que es como el front pinta ese estado: no usa la clase `chakra-skeleton`.
   */
  async iniciarMuestreo(): Promise<void> {
    await this.page.evaluate(() => {
      const w = window as unknown as { __qaPromo?: unknown[]; __qaPromoTimer?: number };
      w.__qaPromo = [];
      const inicio = Date.now();
      const id = window.setInterval(() => {
        const dialogos = [...document.querySelectorAll('[role="dialog"]')].filter(
          (d) => d.getBoundingClientRect().width > 0,
        );
        const d = dialogos[dialogos.length - 1];
        if (!d) return;
        const animados = [...d.querySelectorAll('*')].filter((e) => {
          const s = getComputedStyle(e);
          return s.animationName && s.animationName !== 'none';
        }).length;
        const variantes = [...d.querySelectorAll('div')].filter((x) =>
          x.querySelector(':scope > div > button[aria-label="Guardar en favoritos"]'),
        ).length;
        w.__qaPromo!.push({ t: Date.now() - inicio, animados, variantes });
        if (Date.now() - inicio > 30000) window.clearInterval(id);
      }, 40);
      w.__qaPromoTimer = id;
    });
  }

  /** `true` si durante el muestreo el modal pasó por el estado de carga. */
  async huboSkeleton(): Promise<boolean> {
    return this.page.evaluate(() => {
      const w = window as unknown as { __qaPromo?: { animados: number; variantes: number }[] };
      return (w.__qaPromo ?? []).some((m) => m.variantes === 0 && m.animados > 0);
    });
  }

  async detenerMuestreo(): Promise<void> {
    await this.page.evaluate(() => {
      const w = window as unknown as { __qaPromoTimer?: number };
      if (w.__qaPromoTimer) window.clearInterval(w.__qaPromoTimer);
    });
  }
}
