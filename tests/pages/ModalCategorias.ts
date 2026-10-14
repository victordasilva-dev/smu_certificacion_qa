import { Locator, Page } from '@playwright/test';

/** Recuadro de un elemento medido sobre el render real. */
export interface Caja {
  txt: string;
  x: number;
  y: number;
  ancho: number;
  alto: number;
}

/**
 * Modal de categorías de Mobile web (HU B2C-21).
 *
 * Se abre con el icono sandwich del header y tiene tres partes: la cabecera (título + X), el
 * carrusel horizontal de top categorías —las "píldoras", con `Todas` a la izquierda— y el cuerpo,
 * con el listado vertical de secciones N1, cada una con su carrusel de subcategorías N2.
 *
 * Es un componente, no una página navegable: no extiende `BasePage`.
 *
 * **Todo dentro del modal es `<button>`** —no hay un solo `<a>`—, así que píldoras, cabeceras N1 y
 * tarjetas N2 se distinguen por estructura y no por rol: la cabecera N1 lleva `svg` y no lleva
 * `img`; la tarjeta N2 lleva `img`; las píldoras viven en el hermano inmediato de la cabecera.
 * Distinguirlas por coordenada Y es frágil y falla mientras el modal todavía renderiza.
 */
export class ModalCategorias {
  /**
   * El modal **visible**.
   *
   * Se filtra por visibilidad a propósito: tras navegar desde una tarjeta N2 puede quedar un
   * `[role=dialog]` huérfano con altura 0, y un locator sin filtrar lo daría por bueno.
   */
  readonly root: Locator;

  constructor(private readonly page: Page) {
    this.root = page.locator('[role="dialog"]:visible');
  }

  get titulo(): Locator {
    return this.root.locator('.chakra-modal__header p');
  }

  get botonCerrar(): Locator {
    return this.root.locator('.chakra-modal__header button');
  }

  // ------------------------------------------------ carrusel de top categorías (píldoras)

  /** El contenedor del carrusel: el hermano inmediato de la cabecera del modal. */
  get carrusel(): Locator {
    return this.root.locator('header + div');
  }

  get pildoras(): Locator {
    return this.carrusel.locator('button');
  }

  get pildoraTodas(): Locator {
    return this.pildoras.first();
  }

  /** Las píldoras de categoría, sin contar el botón `Todas`. */
  pildora(nombre: string | RegExp): Locator {
    return this.pildoras.filter({ hasText: nombre });
  }

  // ------------------------------------------------ cuerpo: secciones N1 y tarjetas N2

  get cuerpo(): Locator {
    return this.root.locator('.chakra-modal__body');
  }

  /** Cabeceras de sección N1: ancho completo, con el icono '>' y sin thumbnail. */
  get cabecerasN1(): Locator {
    return this.cuerpo.locator('button:has(svg):not(:has(img))');
  }

  cabeceraN1(nombre: string | RegExp): Locator {
    return this.cabecerasN1.filter({ hasText: nombre });
  }

  /** Tarjetas de subcategoría N2: thumbnail circular + nombre. */
  get tarjetasN2(): Locator {
    return this.cuerpo.locator('button:has(img)');
  }

  tarjetaN2(nombre: string | RegExp): Locator {
    return this.tarjetasN2.filter({ hasText: nombre });
  }

  /**
   * Las tarjetas N2 que cuelgan de una sección N1.
   *
   * El modal no anida la sección con sus tarjetas en un contenedor propio: van una detrás de otra
   * en el mismo flujo. Se resuelve por posición vertical — las tarjetas entre esta cabecera y la
   * siguiente— que es exactamente lo que el usuario ve como "la fila de esa categoría".
   */
  async tarjetasDeSeccion(nombreN1: string): Promise<string[]> {
    return this.cuerpo.evaluate((body, nombre) => {
      const botones = Array.from(body.querySelectorAll('button'));
      const esCabecera = (b: Element) => !!b.querySelector('svg') && !b.querySelector('img');
      const i = botones.findIndex((b) => esCabecera(b) && (b as HTMLElement).innerText.trim() === nombre);
      if (i < 0) return [];
      const out: string[] = [];
      for (let j = i + 1; j < botones.length; j++) {
        if (esCabecera(botones[j])) break;
        out.push((botones[j] as HTMLElement).innerText.trim());
      }
      return out;
    }, nombreN1);
  }

  // ------------------------------------------------ mediciones

  /** ¿El carrusel de píldoras desborda su contenedor? (es decir, se puede deslizar). */
  async carruselDesplazableHorizontal(): Promise<{ scrollWidth: number; clientWidth: number }> {
    return this.carrusel.evaluate((el) => ({ scrollWidth: el.scrollWidth, clientWidth: el.clientWidth }));
  }

  /** Píldoras cuyo borde izquierdo cae dentro del ancho del viewport: el "primer slide". */
  async pildorasEnPrimerSlide(anchoViewport: number): Promise<string[]> {
    return this.carrusel.evaluate((el, ancho) => {
      return Array.from(el.querySelectorAll('button'))
        .filter((b) => b.getBoundingClientRect().x < ancho)
        .map((b) => (b as HTMLElement).innerText.trim());
    }, anchoViewport);
  }

  /** Desplaza el cuerpo del modal y devuelve el scrollTop antes y después. */
  async desplazarCuerpo(px: number): Promise<{ scrollHeight: number; clientHeight: number; antes: number; despues: number }> {
    return this.cuerpo.evaluate((el, y) => {
      const antes = el.scrollTop;
      el.scrollTop = y;
      return { scrollHeight: el.scrollHeight, clientHeight: el.clientHeight, antes, despues: el.scrollTop };
    }, px);
  }

  /** Nombre visible de una píldora, tal cual quedó en el DOM (ya truncado si aplica). */
  async textoPildora(indice: number): Promise<string> {
    return (await this.pildoras.nth(indice).textContent())?.trim() ?? '';
  }

  /** Las categorías (sin `Todas`) marcadas como actuales con aria-current. */
  async categoriasMarcadasComoActuales(): Promise<string[]> {
    return this.carrusel.evaluate((el) =>
      Array.from(el.querySelectorAll('button'))
        .slice(1)
        .filter((b) => b.getAttribute('aria-current'))
        .map((b) => (b as HTMLElement).innerText.trim()),
    );
  }

  async ariaCurrentDeTodas(): Promise<string | null> {
    return this.pildoraTodas.getAttribute('aria-current');
  }

  /** Cuántas líneas ocupa el nombre de una tarjeta N2, y su alineación. */
  async metricasTarjeta(nombre: string | RegExp): Promise<{ texto: string; lineas: number; x: number; srcImagen: string }> {
    return this.tarjetaN2(nombre).evaluate((b) => {
      const candidatos = Array.from(b.querySelectorAll('p,span,div')).filter(
        (e) => (e as HTMLElement).innerText?.trim() && !e.querySelector('img'),
      );
      const nombreEl = candidatos[candidatos.length - 1] as HTMLElement;
      const cs = nombreEl ? getComputedStyle(nombreEl) : null;
      const lh = cs ? parseFloat(cs.lineHeight) : 0;
      const alto = nombreEl ? nombreEl.getBoundingClientRect().height : 0;
      const img = b.querySelector('img');
      return {
        texto: (b as HTMLElement).innerText.trim().replace(/\n/g, ' '),
        lineas: lh ? Math.round(alto / lh) : 0,
        x: Math.round(b.getBoundingClientRect().x),
        srcImagen: img ? img.getAttribute('src') || '' : '',
      };
    });
  }

  /** Los src de los thumbnails de todas las tarjetas N2. */
  async fuentesDeThumbnails(): Promise<string[]> {
    return this.cuerpo.evaluate((body) =>
      Array.from(body.querySelectorAll('button img')).map((i) => i.getAttribute('src') || ''),
    );
  }

  // ------------------------------------------------ acciones

  async clicPildora(nombre: string | RegExp): Promise<void> {
    await this.pildora(nombre).first().click();
  }

  async clicCabeceraN1(nombre: string | RegExp): Promise<void> {
    await this.cabeceraN1(nombre).first().click();
  }

  async clicTarjetaN2(nombre: string | RegExp): Promise<void> {
    await this.tarjetaN2(nombre).first().click();
  }

  /**
   * Las entradas de categoría N1 del modal, **en los dos form-factors**.
   *
   * `cabecerasN1` describe el modal de Mobile, que es el que certifica B2C-21: secciones dentro de
   * `.chakra-modal__body`, con `svg` y sin thumbnail. En Desktop el modal no es un `chakra-modal`
   * —no existe ese `__body`— y las N1 son la columna izquierda de botones que llevan **svg e
   * imagen** a la vez, mientras que las tarjetas N2 llevan imagen sin svg y las hojas N3 ninguna de
   * las dos. De ahí las dos alternativas: cada una reconoce su render y ninguna pisa a la otra.
   *
   * Buscar sólo por el selector de Mobile en Desktop no devuelve error: devuelve **cero entradas**,
   * que se lee como "el menú no ofrece categorías" cuando en realidad ofrece catorce.
   */
  get entradasN1(): Locator {
    return this.root.locator(
      'button:has(svg):has(img), .chakra-modal__body button:has(svg):not(:has(img))',
    );
  }

  /**
   * Los nombres de las categorías N1 que ofrece el modal, en el orden en que las lista.
   *
   * Lo usa B2C-36 para entrar a una PLP N1 por el menú sin nombrar ninguna categoría en el código:
   * el catálogo del ambiente es quien dice cuáles hay.
   */
  async categoriasN1(): Promise<string[]> {
    const textos = await this.entradasN1.allInnerTexts();
    return textos.map((t) => t.trim().split('\n')[0].trim()).filter(Boolean);
  }

  /**
   * Navega a la PLP de una categoría N1 desde el modal.
   *
   * Tolera las dos formas en que el modal monta la entrada N1 según el form-factor: en Mobile todo
   * es `<button>` —no hay un solo `<a>`— mientras que en Desktop la misma entrada puede venir como
   * enlace. Un locator que asuma una de las dos funciona en un viewport y se cuelga en el otro, y
   * el síntoma (un timeout esperando un `a[href]`) no dice que el elemento sí estaba, como botón.
   */
  async irACategoriaN1(nombre: string): Promise<void> {
    // Coincidencia exacta: un `hasText` suelto con "Carnes" se llevaría también una tarjeta N2
    // "Carne molida" y el TC terminaría certificando la PLP equivocada.
    const exacto = new RegExp(`^${nombre.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`);
    await this.entradasN1.filter({ hasText: exacto }).first().click();
  }

  async cerrar(): Promise<void> {
    await this.botonCerrar.click();
  }
}
