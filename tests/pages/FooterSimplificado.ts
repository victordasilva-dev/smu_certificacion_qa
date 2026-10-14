import { Locator, Page } from '@playwright/test';

/** Los tres accesos del Content Asset footer-support-block, en el orden en que se muestran. */
export type ItemSoporte = 'Centro de ayuda' | 'Seguimiento de compra' | 'WhatsApp clientes';

export const ITEMS_SOPORTE: ItemSoporte[] = [
  'Centro de ayuda',
  'Seguimiento de compra',
  'WhatsApp clientes',
];

/**
 * La UI escribe "Whatsapp clientes" (p minúscula) y la planilla "WhatsApp clientes". El locator se
 * arma por `href`, que es estable, y el texto se comprueba con una expresión tolerante a esa
 * diferencia: un literal exacto produciría un Rechazado que sería del script, no del producto.
 */
const HREF: Record<ItemSoporte, string> = {
  'Centro de ayuda': 'a[href="/centro-de-ayuda"]',
  'Seguimiento de compra': 'a[href="/seguimiento-de-compra"]',
  'WhatsApp clientes': 'a[href^="https://wa.me/"]',
};

const TITULO: Record<ItemSoporte, RegExp> = {
  'Centro de ayuda': /centro de ayuda/i,
  'Seguimiento de compra': /seguimiento de compra/i,
  'WhatsApp clientes': /whatsapp clientes/i,
};

export interface CajaItem {
  href: string | null;
  x: number;
  y: number;
  ancho: number;
  alto: number;
}

/**
 * Footer Simplificado (HU B2C-20).
 *
 * En las páginas del flujo de compra y en SSO el footer renderiza únicamente el Content Asset
 * `footer-support-block`. Es un componente, no una página navegable: no extiende `BasePage`.
 *
 * Expone locators, acciones y **mediciones**; ningún `expect` vive aquí. La disposición
 * (horizontal en Desktop, vertical en Mobile) se comprueba con geometría real y no con clases CSS,
 * porque las clases son hashes de Chakra que cambian sin aviso — y porque lo que el TC afirma es
 * dónde se ven los items, no cómo se llama su clase.
 */
export class FooterSimplificado {
  readonly root: Locator;

  constructor(private readonly page: Page) {
    this.root = page.getByRole('contentinfo');
  }

  /** Todos los enlaces del footer. En el simplificado son exactamente los 3 de soporte. */
  get items(): Locator {
    return this.root.locator('a');
  }

  item(nombre: ItemSoporte): Locator {
    return this.root.locator(HREF[nombre]);
  }

  tituloEsperado(nombre: ItemSoporte): RegExp {
    return TITULO[nombre];
  }

  /** El icono del item: el TC pide icono + texto descriptivo en cada acceso. */
  iconoDe(nombre: ItemSoporte): Locator {
    return this.item(nombre).locator('svg');
  }

  /** El texto descriptivo (segundo párrafo, bajo el título). */
  descripcionDe(nombre: ItemSoporte): Locator {
    return this.item(nombre).locator('p').nth(1);
  }

  /** El destino configurado en el content asset para ese acceso. */
  async hrefDe(nombre: ItemSoporte): Promise<string | null> {
    return this.item(nombre).getAttribute('href');
  }

  async clicItem(nombre: ItemSoporte): Promise<void> {
    await this.item(nombre).click();
  }

  // ------------------------------------------------- ausencia del Footer Full

  /** Botones de sección dropdown: el Footer Full tiene 4; el simplificado, ninguno. */
  get botonesDeSeccion(): Locator {
    return this.root.locator('button');
  }

  get enlaceCookies(): Locator {
    return this.root.locator('a[href="/legales/cookies"]');
  }

  get redesSociales(): Locator {
    return this.root.locator(
      'a[href*="facebook.com"], a[href*="instagram.com"], a[href*="x.com"], a[href*="youtube.com"]',
    );
  }

  // ------------------------------------------------- geometría

  /**
   * Posición y tamaño de cada item, para decidir si están en fila o apilados.
   *
   * Se mide sobre el render real porque eso es lo que el TC observa. Comparar clases CSS diría
   * qué pretende el diseño, no qué ve el usuario.
   */
  async cajasDeItems(): Promise<CajaItem[]> {
    return this.root.evaluate((footer) => {
      return Array.from(footer.querySelectorAll('a')).map((a) => {
        const r = a.getBoundingClientRect();
        return {
          href: a.getAttribute('href'),
          x: Math.round(r.x),
          y: Math.round(r.y),
          ancho: Math.round(r.width),
          alto: Math.round(r.height),
        };
      });
    });
  }

  /** Todos los items comparten fila (misma Y) y difieren en X. */
  static esHorizontal(cajas: CajaItem[], tolerancia = 10): boolean {
    const ys = cajas.map((c) => c.y);
    const xs = cajas.map((c) => c.x);
    return Math.max(...ys) - Math.min(...ys) < tolerancia && Math.max(...xs) - Math.min(...xs) >= tolerancia;
  }

  /** Todos los items comparten columna (misma X) y se escalonan en Y. */
  static esVertical(cajas: CajaItem[], tolerancia = 10): boolean {
    const ys = cajas.map((c) => c.y);
    const xs = cajas.map((c) => c.x);
    return Math.max(...xs) - Math.min(...xs) < tolerancia && Math.max(...ys) - Math.min(...ys) >= tolerancia;
  }

  async scrollHastaElFooter(): Promise<void> {
    await this.root.scrollIntoViewIfNeeded();
  }
}
