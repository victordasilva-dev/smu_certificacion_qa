import { Locator, Page } from '@playwright/test';

/**
 * Paths del SVG que el footer usa como icono de cada sección dropdown.
 *
 * El componente NO expone `aria-expanded` ni ninguna clase estable: el estado de una sección se
 * lee por su icono y por si el panel de contenido llegó a renderizarse. Estos dos literales son
 * lo que la planilla llama "(+)" y "(-)", verificados en la exploración del 2026-09-09.
 */
export const ICONO_MAS = 'M8 3v10M3 8h10';
export const ICONO_MENOS = 'M4 10h12';

/** Las cuatro secciones dropdown, en el orden en que el footer las muestra. */
export type SeccionFooter =
  | 'Contactanos'
  | 'Servicio al cliente'
  | 'Nuestros programas'
  | 'Nuestra empresa';

export const SECCIONES: SeccionFooter[] = [
  'Contactanos',
  'Servicio al cliente',
  'Nuestros programas',
  'Nuestra empresa',
];

/**
 * La UI escribe los títulos con tilde ("Contáctanos") y la planilla de TC sin ella
 * ("Contactanos"). El locator se construye con una expresión tolerante a las dos formas para que
 * un acento no produzca un Rechazado que no es un defecto del producto sino del script.
 */
const TITULO: Record<SeccionFooter, RegExp> = {
  Contactanos: /cont[áa]ctanos/i,
  'Servicio al cliente': /servicio al cliente/i,
  'Nuestros programas': /nuestros programas/i,
  'Nuestra empresa': /nuestra empresa/i,
};

/**
 * Footer Full del storefront (HU B2C-19).
 *
 * Es un componente, no una página navegable: por eso no extiende `BasePage` —no tiene `path` ni
 * `goto()` que signifiquen algo— y se obtiene desde el Page Object de la página que lo contiene.
 *
 * Expone locators y acciones; ningún `expect` vive aquí. Los TC Desktop y Mobile ejecutan las
 * mismas acciones sobre este mismo componente y cada uno decide en su `test()` qué espera ver.
 */
export class FooterFull {
  readonly root: Locator;

  constructor(private readonly page: Page) {
    this.root = page.getByRole('contentinfo');
  }

  // ---------------------------------------------------------------- bloque estático

  /** Los tres accesos de atención al cliente, en el orden en que se muestran. */
  get accesosEstaticos(): Locator {
    return this.root.locator('a[href="/centro-de-ayuda"], a[href="/seguimiento-de-compra"], a[href^="https://wa.me/"]');
  }

  get centroDeAyuda(): Locator {
    return this.root.locator('a[href="/centro-de-ayuda"]');
  }

  get seguimientoDeCompra(): Locator {
    return this.root.locator('a[href="/seguimiento-de-compra"]');
  }

  get whatsappClientes(): Locator {
    return this.root.locator('a[href^="https://wa.me/"]');
  }

  /** El icono de un acceso estático: el TC pide que cada item lo tenga junto al texto. */
  iconoDeAcceso(acceso: Locator): Locator {
    return acceso.locator('svg');
  }

  /** El texto descriptivo de un acceso estático (el segundo párrafo, bajo el título). */
  descripcionDeAcceso(acceso: Locator): Locator {
    return acceso.locator('p').nth(1);
  }

  // ---------------------------------------------------------------- secciones dropdown

  /** El botón que abre y cierra una sección. */
  botonSeccion(seccion: SeccionFooter): Locator {
    return this.root.locator('button').filter({ hasText: TITULO[seccion] });
  }

  /**
   * El panel de contenido de una sección.
   *
   * Cuando la sección está colapsada el panel **no existe en el DOM** (no está oculto: no se
   * renderiza), así que el locator resuelve a 0 elementos. Esa es la forma de comprobar el
   * estado, porque el componente no publica `aria-expanded`.
   */
  panelSeccion(seccion: SeccionFooter): Locator {
    return this.botonSeccion(seccion).locator('xpath=following-sibling::div[1]');
  }

  /** El `path` del SVG del icono: su atributo `d` vale ICONO_MAS o ICONO_MENOS. */
  iconoSeccion(seccion: SeccionFooter): Locator {
    return this.botonSeccion(seccion).locator('svg path');
  }

  /** Clic sobre el título de una sección (expande si estaba colapsada y viceversa). */
  async clicSeccion(seccion: SeccionFooter): Promise<void> {
    await this.botonSeccion(seccion).click();
  }

  /** El enlace de una sección cuyo `href` es `ruta` (relativa, tal como la publica el content asset). */
  enlaceDeSeccion(ruta: string): Locator {
    return this.root.locator(`a[href="${ruta}"]`).first();
  }

  /**
   * Deja expandida la sección que contiene el enlace a `ruta` y la devuelve.
   *
   * El TC dice "expandir una sección" sin nombrarla: la sección es la que publica el enlace
   * declarado. Como el acordeón es exclusivo, se recorren en orden expandiendo cada una hasta dar
   * con la que lo trae; si ya estaba expandida (Contáctanos lo está por defecto) no se toca, porque
   * un clic la colapsaría.
   */
  async expandirSeccionConEnlace(ruta: string): Promise<SeccionFooter | null> {
    for (const seccion of SECCIONES) {
      if ((await this.panelSeccion(seccion).count()) === 0) await this.clicSeccion(seccion);
      await this.panelSeccion(seccion).waitFor({ state: 'attached', timeout: 5000 }).catch(() => {});
      if ((await this.panelSeccion(seccion).locator(`a[href="${ruta}"]`).count()) > 0) return seccion;
    }
    return null;
  }

  // ---------------------------------------------------------------- cookies y redes

  get politicasDeCookies(): Locator {
    return this.root.locator('a[href="/legales/cookies"]');
  }

  get tituloRedesSociales(): Locator {
    return this.root.getByText(/s[íi]guenos/i);
  }

  get redesSociales(): Locator {
    return this.root.locator(
      'a[href*="facebook.com"], a[href*="instagram.com"], a[href*="x.com"], a[href*="youtube.com"]',
    );
  }

  // ---------------------------------------------------------------- navegación

  /** Trae el footer a la vista, que es el paso "hacer scroll hasta el final" de los TC. */
  async scrollHastaElFooter(): Promise<void> {
    await this.root.scrollIntoViewIfNeeded();
  }
}
