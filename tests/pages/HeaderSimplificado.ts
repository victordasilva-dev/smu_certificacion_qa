import { Locator, Page } from '@playwright/test';

/**
 * Header Simplificado de las páginas del flujo de compra y de SSO (HU B2C-20).
 *
 * Es la contraparte del Footer Simplificado: solo el logo, sin navegación. El TC lo usa para
 * confirmar que en el flujo de compra conviven header y footer simplificados y que el header
 * **no** se contrae a sticky al hacer scroll.
 */
export class HeaderSimplificado {
  readonly root: Locator;

  constructor(private readonly page: Page) {
    this.root = page.getByRole('banner');
  }

  get logo(): Locator {
    return this.root.getByRole('img', { name: /unimarc/i });
  }

  /** Enlaces de navegación: el header completo trae varios; el simplificado, ninguno. */
  get enlaces(): Locator {
    return this.root.locator('a');
  }

  get botones(): Locator {
    return this.root.locator('button');
  }

  /**
   * La propiedad CSS `position` del header.
   *
   * Es la prueba sólida del "sin comportamiento sticky": un carro vacío no genera scroll, así que
   * comprobar solo que el header no se movió no distinguiría un header estático de uno sticky en
   * una página que nunca se desplaza.
   */
  async position(): Promise<string> {
    return this.root.evaluate((el) => getComputedStyle(el).position);
  }

  /** Distancia del header al borde superior del viewport, para observarla antes y después. */
  async top(): Promise<number> {
    return this.root.evaluate((el) => Math.round(el.getBoundingClientRect().top));
  }

  async alto(): Promise<number> {
    return this.root.evaluate((el) => Math.round(el.getBoundingClientRect().height));
  }

  // --------------------------------------------------------------- B2C-25

  /**
   * Todo lo que el header renderiza y el usuario puede ver o accionar, contado por tipo.
   *
   * El CA1 dice "únicamente el logo", y eso se comprueba mejor contando lo que **no** hay que
   * afirmando lo que sí: un header que además trajera un buscador o un enlace seguiría teniendo
   * su logo, y una aserción sobre el logo solo lo daría por bueno.
   *
   * `imgs` va aparte de `svgs` a propósito: el logo es un `<svg role="img">` y no un `<img>`, así
   * que contar etiquetas `img` para encontrarlo da cero y hace pensar que el logo falta.
   */
  async inventario(): Promise<{
    botones: number;
    enlaces: number;
    imgs: number;
    svgs: number;
    inputs: number;
    texto: string;
  }> {
    return this.root.evaluate((el) => ({
      botones: el.querySelectorAll('button').length,
      enlaces: el.querySelectorAll('a').length,
      imgs: el.querySelectorAll('img').length,
      svgs: el.querySelectorAll('svg').length,
      inputs: el.querySelectorAll('input, select, textarea').length,
      texto: (el as HTMLElement).innerText.trim(),
    }));
  }

  /** Caja del logo, para comprobar que está renderizado y dónde. */
  async cajaLogo(): Promise<{ x: number; ancho: number; alto: number }> {
    const box = await this.logo.boundingBox();
    if (!box) throw new Error('El logo del Header Simplificado no tiene caja visible.');
    return { x: Math.round(box.x), ancho: Math.round(box.width), alto: Math.round(box.height) };
  }

  /**
   * Si el logo es accionable: envuelto en un enlace o un botón, o con el cursor de mano.
   *
   * El TC comprueba que el clic no redirige, pero un logo que no redirige *y además* no invita a
   * pulsarlo son dos cosas distintas, y la segunda es la que evita que el usuario lo intente.
   */
  async logoEsInteractivo(): Promise<boolean> {
    return this.logo.evaluate((el) => {
      const contenedorAccionable = !!el.closest('a, button, [role="link"], [role="button"]');
      const cursor = getComputedStyle(el.parentElement ?? el).cursor;
      return contenedorAccionable || cursor === 'pointer';
    });
  }

  async clicLogo(): Promise<void> {
    await this.logo.click({ force: true });
  }
}
