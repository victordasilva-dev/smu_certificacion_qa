import { Locator, Page } from '@playwright/test';

/** Form-factor con el que se monta el buscador. No es el viewport: es *dónde* vive el modal. */
export type FormFactor = 'desktop' | 'mobile';

/** Los tres títulos que puede traer el contenido por defecto del modal. */
export const SECCIONES = {
  recientes: 'Tus búsquedas recientes',
  vistos: 'Lo último que viste',
  masBuscado: 'Lo más buscado',
} as const;

/**
 * Modal del buscador del header (HU B2C-100).
 *
 * Es un **componente**, no una página navegable: no extiende `BasePage`.
 *
 * **Desktop y Mobile no son el mismo nodo del DOM, y por eso el POM recibe su form-factor.** En
 * Desktop el panel se inyecta como hermano inmediato del `form` del header; en Mobile el
 * storefront monta un overlay a pantalla completa dentro de un `.chakra-portal` y **se lleva el
 * input consigo**, sacándolo del `header`. Un locator anclado a `header` deja de encontrar la
 * caja de texto en cuanto el overlay abre, así que el input se busca en toda la página y el
 * contenedor se elige según el form-factor.
 *
 * Nada aquí se cuelga de una clase de Emotion (`css-1e7hb5a`): cambian con cada build. Los
 * asideros son el `placeholder` del input, la relación `form + div`, el portal de Chakra y los
 * textos de las secciones, que son lo que el TC nombra.
 *
 * El POM expone locators y acciones; **ningún `expect` vive aquí**: dos TC ejecutan la misma
 * acción esperando cosas distintas —el clic en un chip lleva a la SRP en los dos form-factors,
 * pero el carrusel desliza en uno y no en el otro— y quién decide el veredicto es su `test()`.
 */
export class BuscadorModal {
  constructor(
    private readonly page: Page,
    private readonly formFactor: FormFactor,
  ) {}

  // --------------------------------------------------------------- la caja de texto

  /**
   * La caja de texto del buscador, esté en el header o en el overlay de Mobile.
   *
   * Se filtra por visibilidad porque el header renderiza las variantes de los dos form-factors y
   * deja la que no corresponde con altura 0.
   */
  get input(): Locator {
    return this.page
      .getByRole('textbox', { name: '¿Qué estás buscando?' })
      .locator('visible=true')
      .first();
  }

  /** La lupa, en el `right-element` que Chakra superpone al borde derecho del campo. */
  get iconoLupa(): Locator {
    return this.page
      .locator('.chakra-input__group .chakra-input__right-element svg')
      .locator('visible=true')
      .first();
  }

  /** El `maxlength` declarado por el campo. */
  async maxlength(): Promise<string | null> {
    return this.input.getAttribute('maxlength');
  }

  async valor(): Promise<string> {
    return this.input.inputValue();
  }

  // --------------------------------------------------------------- el contenedor

  /**
   * El contenedor del modal: el panel de Desktop o el overlay de Mobile.
   *
   * En Desktop es el hermano inmediato del `form` —el panel solo existe en el DOM mientras está
   * abierto, así que su ausencia *es* la respuesta a "¿está cerrado?"—. En Mobile es el hijo del
   * `.chakra-portal` que contiene la caja de texto, que es lo que lo distingue de los otros
   * portales que Chakra deja montados (cookies, drawers).
   */
  get contenedor(): Locator {
    if (this.formFactor === 'desktop') return this.page.locator('header form + div');
    return this.page
      .locator('.chakra-portal > div')
      .filter({ has: this.page.getByRole('textbox', { name: '¿Qué estás buscando?' }) })
      .first();
  }

  /**
   * El cuerpo del modal: el contenedor de las secciones.
   *
   * En Desktop es el único hijo del panel; en Mobile el overlay antepone la fila del buscador y
   * el botón "Cancelar", así que el cuerpo es el segundo.
   */
  get cuerpo(): Locator {
    return this.formFactor === 'desktop'
      ? this.contenedor.locator('> div')
      : this.contenedor.locator('> div').nth(1);
  }

  /** `true` si el modal está desplegado. */
  async estaAbierto(): Promise<boolean> {
    return (await this.contenedor.count()) > 0 && (await this.contenedor.first().isVisible());
  }

  /** Botón "Cancelar" del overlay de Mobile (no existe en Desktop). */
  get botonCancelar(): Locator {
    return this.contenedor.getByRole('button', { name: /^cancelar$/i });
  }

  // --------------------------------------------------------------- acciones

  /**
   * Abre el modal haciendo clic en la caja de texto.
   *
   * **Es el único gesto que lo abre**: con el panel cerrado, escribir en el input enfocado no lo
   * reabre, y eso produce la ilusión de que el buscador no responde. Durante la exploración ese
   * detalle llegó a parecer un defecto ("con 0 resultados el modal no se renderiza") que se
   * desmontó al repetir la prueba desde una página recién cargada.
   */
  async abrir(): Promise<this> {
    // Se reintenta el clic porque el panel solo nace de ese gesto y hay momentos —justo después
    // de que se desmonte el modal de login, con su overlay todavía desvaneciéndose— en los que el
    // clic se lo come la capa que se va. Sin reintento, el caso caduca esperando un panel que
    // nunca se pidió, y el fallo se lee como si el buscador no respondiera.
    for (let intento = 0; intento < 3; intento++) {
      // El panel abre al **enfocar** el campo, no al pulsarlo: si el foco ya está ahí —lo queda
      // tras enviar una búsqueda con Enter— hacer clic no dispara nada y el modal no aparece
      // nunca. Soltar el foco antes devuelve el gesto a lo que el TC describe, "hacer clic en la
      // caja de texto", en vez de dejar al caso esperando un panel que nadie pidió.
      await this.input.evaluate((el) => (el as HTMLInputElement).blur());
      await this.page.waitForTimeout(200);
      await this.input.click();
      try {
        await this.contenedor.first().waitFor({ state: 'visible', timeout: 10000 });
        return this;
      } catch {
        await this.page.waitForTimeout(1500);
      }
    }
    await this.contenedor.first().waitFor({ state: 'visible', timeout: 10000 });
    return this;
  }

  /** Escribe en el buscador tecla a tecla, como el usuario. */
  async escribir(texto: string, delay = 120): Promise<void> {
    await this.input.pressSequentially(texto, { delay });
  }

  /** Borra `n` caracteres desde el final. */
  async borrar(n: number): Promise<void> {
    for (let i = 0; i < n; i++) await this.input.press('Backspace');
  }

  async cerrarConEscape(): Promise<void> {
    await this.input.press('Escape');
    await this.page.waitForTimeout(500);
  }

  async clicFuera(): Promise<void> {
    // Un punto del `main` bien abajo del modal: lo que el TC llama "un área fuera del modal".
    await this.page.locator('main').first().click({ position: { x: 5, y: 5 }, force: true });
    await this.page.waitForTimeout(500);
  }

  async cancelar(): Promise<void> {
    await this.botonCancelar.click();
    await this.page.waitForTimeout(500);
  }

  // --------------------------------------------------- contenido por defecto

  /** Las secciones del contenido por defecto, en el orden en que se renderizan. */
  get secciones(): Locator {
    return this.cuerpo
      .locator('> div')
      .filter({ hasText: new RegExp(Object.values(SECCIONES).join('|')) });
  }

  /** Los títulos de las secciones visibles, en orden. Es lo que compara el TC del orden. */
  async titulosDeSecciones(): Promise<string[]> {
    const n = await this.secciones.count();
    const out: string[] = [];
    for (let i = 0; i < n; i++) {
      out.push((await this.secciones.nth(i).locator('p').first().innerText()).trim());
    }
    return out;
  }

  /** Una sección concreta del contenido por defecto. */
  seccion(titulo: string): Locator {
    return this.cuerpo.locator('> div').filter({ hasText: titulo }).first();
  }

  /** `true` si esa sección está renderizada. */
  async haySeccion(titulo: string): Promise<boolean> {
    if (!(await this.estaAbierto())) return false;
    return (await this.cuerpo.locator('> div').filter({ hasText: titulo }).count()) > 0;
  }

  /** El "Limpiar" de una sección. */
  limpiarDe(titulo: string): Locator {
    return this.seccion(titulo).getByRole('button', { name: /^limpiar$/i });
  }

  /**
   * Los chips de una sección: los botones del bloque de contenido.
   *
   * El contenido es el último hijo de la sección —el primero es la cabecera con el título y el
   * "Limpiar"—, así que el "Limpiar" queda fuera por construcción y no hay que excluirlo por
   * texto.
   */
  chipsDe(titulo: string): Locator {
    return this.seccion(titulo).locator('> div').last().locator('> button');
  }

  async textosDeChips(titulo: string): Promise<string[]> {
    return (await this.chipsDe(titulo).allInnerTexts()).map((t) => t.trim()).filter(Boolean);
  }

  /**
   * Cuántas filas ocupan los chips de una sección, medido sobre el render real.
   *
   * Se cuentan las coordenadas `y` distintas y no los saltos de línea del CSS: lo que el TC llama
   * "fluyen a una segunda fila" es dónde los ve el usuario.
   */
  async filasDeChips(titulo: string): Promise<number> {
    return this.chipsDe(titulo).evaluateAll((els) => {
      const ys = els.map((e) => Math.round(e.getBoundingClientRect().top));
      return new Set(ys).size;
    });
  }

  /** `true` si algún chip está recortado: su texto no cabe en su propia caja. */
  async hayChipTruncado(titulo: string): Promise<boolean> {
    return this.chipsDe(titulo).evaluateAll((els) =>
      els.some((e) => e.scrollWidth > e.clientWidth + 1),
    );
  }

  // ------------------------------------------------ "Lo último que viste"

  /** Los productos vistos: botones con [IMG, P] dentro de la sección. */
  get productosVistos(): Locator {
    return this.chipsDe(SECCIONES.vistos);
  }

  /**
   * Nombre, thumbnail y SKU (que viaja en el `src` de la imagen) de cada producto visto.
   *
   * `conImagen` mira que haya un `img` con `src`, no que el bitmap ya esté decodificado: los
   * thumbnails cargan de forma diferida y un `naturalWidth > 0` leído en el instante en que se
   * abre el modal falla por el orden de carga, no porque falte la imagen. Lo que el TC llama
   * "muestra imagen thumbnail" es que el slot esté renderizado y apuntando al producto; que se
   * vea pintada lo comprueba el `test()` con un `toBeVisible()` sobre el locator.
   */
  async detalleDeVistos(): Promise<{ nombre: string; conImagen: boolean; sku: string | null }[]> {
    return this.productosVistos.evaluateAll((els) =>
      els.map((e) => {
        const img = e.querySelector('img');
        const p = e.querySelector('p');
        const src = img?.getAttribute('src') ?? '';
        const m = src.match(/(\d{12,}-[A-Z]+)/);
        return {
          nombre: (p?.textContent ?? '').trim(),
          conImagen: !!img && src.trim().length > 0,
          sku: m ? m[1] : null,
        };
      }),
    );
  }

  /** La imagen del producto visto en la posición `i`. */
  imagenDeVisto(i: number): Locator {
    return this.productosVistos.nth(i).locator('img');
  }

  /** El nombre (texto) del producto visto en la posición `i`. */
  nombreDeVisto(i: number): Locator {
    return this.productosVistos.nth(i).locator('p');
  }

  // --------------------------------------------------- panel de resultados

  /**
   * El título del panel de resultados.
   *
   * El producto escribe "Resultado para “Leche”" —singular y con el término capitalizado— y la
   * planilla lo cita como "Resultados para 'leche'". Quien compara es el `test()`; aquí solo se
   * devuelve el texto tal cual se renderiza.
   */
  get tituloResultados(): Locator {
    return this.cuerpo.locator('p').first();
  }

  async textoTituloResultados(): Promise<string> {
    return (await this.tituloResultados.innerText()).replace(/\s+/g, ' ').trim();
  }

  /** La cantidad que anuncia el título ("9 productos" → 9). `null` si no la trae. */
  async cantidadAnunciada(): Promise<number | null> {
    const txt = await this.textoTituloResultados();
    const m = txt.match(/(\d+)\s+productos?/i);
    return m ? Number(m[1]) : null;
  }

  get botonVerTodos(): Locator {
    return this.cuerpo.getByRole('button', { name: /^ver todos$/i });
  }

  async hayVerTodos(): Promise<boolean> {
    return (await this.botonVerTodos.count()) > 0;
  }

  /**
   * Los chips de autocompletado del panel de resultados.
   *
   * Son los botones que cuelgan directamente de un bloque del cuerpo y llevan texto: "Ver todos"
   * vive en la cabecera —también un bloque— y por eso se excluye por nombre, y las flechas del
   * carrusel no traen texto, así que caen solas.
   */
  get chipsAutocompletado(): Locator {
    return this.cuerpo.locator('> div > button').filter({ hasNotText: /^ver todos$/i });
  }

  async textosDeAutocompletado(): Promise<string[]> {
    return (await this.chipsAutocompletado.allInnerTexts()).map((t) => t.trim()).filter(Boolean);
  }

  /** Las tarjetas de producto del carrusel. El ancla es el botón de favoritos, como en el shelf. */
  get productosDelCarrusel(): Locator {
    return this.cuerpo.locator('div:has(> div > button[aria-label="Guardar en favoritos"])');
  }

  /** El bloque del carrusel: el último hijo del cuerpo cuando hay productos. */
  get carrusel(): Locator {
    return this.cuerpo.locator('> div').last();
  }

  /** `true` si el carrusel está renderizado (hay al menos una tarjeta). */
  async hayCarrusel(): Promise<boolean> {
    if (!(await this.estaAbierto())) return false;
    return (await this.productosDelCarrusel.count()) > 0;
  }

  /** Las flechas de navegación del carrusel: botones sin texto, con svg. */
  get flechasDelCarrusel(): Locator {
    return this.carrusel.locator('> button');
  }

  /**
   * Cómo se desplaza el carrusel, medido sobre el render.
   *
   * Devuelve el elemento que efectivamente scrollea (el propio bloque o el contenedor interno) y
   * si hay desborde horizontal. Es la diferencia entre el carrusel deslizable que pide el TC y
   * una grilla estática, que es lo que Mobile renderiza hoy.
   */
  async desplazamientoDelCarrusel(): Promise<{
    deslizable: boolean;
    scrollWidth: number;
    clientWidth: number;
    display: string;
    columnas: number;
  }> {
    await this.instalarBuscadorDeScroller();
    return this.carrusel.evaluate((el) => {
      const w = window as unknown as { __qaScroller?: (e: Element) => HTMLElement };
      const scroller = w.__qaScroller!(el);
      const s = getComputedStyle(scroller);
      return {
        deslizable: scroller.scrollWidth > scroller.clientWidth + 1,
        scrollWidth: scroller.scrollWidth,
        clientWidth: scroller.clientWidth,
        display: s.display,
        columnas: s.gridTemplateColumns === 'none' ? 0 : s.gridTemplateColumns.split(/\s+/).length,
      };
    });
  }

  /** Posición horizontal actual del carrusel. */
  async scrollDelCarrusel(): Promise<number> {
    await this.instalarBuscadorDeScroller();
    return this.carrusel.evaluate((el) => {
      const w = window as unknown as { __qaScroller?: (e: Element) => HTMLElement };
      return Math.round(w.__qaScroller!(el).scrollLeft);
    });
  }

  /**
   * Deja en la página la función que localiza el elemento que **realmente** scrollea.
   *
   * Hay que distinguirlo del bloque que lo envuelve: el contenedor del carrusel también reporta
   * `scrollWidth > clientWidth` —lo desborda su propio hijo— pero su `scrollLeft` se queda en 0
   * pase lo que pase. Tomándolo a él, el caso de la flecha lee 0 antes y 0 después y concluye que
   * el carrusel no se movió, cuando en la captura del fallo se ve perfectamente desplazado. Lo que
   * distingue al scroller de verdad es su `overflow-x`: solo `auto` o `scroll` producen scroll.
   */
  private async instalarBuscadorDeScroller(): Promise<void> {
    await this.page.evaluate(() => {
      const w = window as unknown as { __qaScroller?: (e: Element) => HTMLElement };
      w.__qaScroller = (raiz: Element) => {
        const desborda = (c: Element) => {
          const s = getComputedStyle(c);
          return (
            ['auto', 'scroll'].includes(s.overflowX) && c.scrollWidth > c.clientWidth + 1
          );
        };
        const interno = Array.from(raiz.querySelectorAll<HTMLElement>('*')).find(desborda);
        return interno ?? (raiz as HTMLElement);
      };
    });
  }

  // --------------------------------------------------- skeleton y peticiones

  /**
   * Instala un muestreador del panel dentro de la página.
   *
   * El skeleton dura ~350 ms, así que preguntarle a Playwright "¿está ahora?" desde fuera casi
   * siempre llega tarde y el TC concluiría que nunca existió. El muestreador registra cada 40 ms
   * si el panel está sin texto y con elementos animados —así es como el storefront pinta el
   * skeleton: no usa la clase `chakra-skeleton` de Chakra, solo animación CSS—, y el `test()`
   * pregunta después por lo que ocurrió.
   */
  async iniciarMuestreo(): Promise<void> {
    const selectorPanel =
      this.formFactor === 'desktop' ? 'header form + div' : '.chakra-portal > div > div:nth-child(2)';
    await this.page.evaluate((sel) => {
      const w = window as unknown as { __qaMuestras?: unknown[]; __qaTimer?: number };
      w.__qaMuestras = [];
      const inicio = Date.now();
      const id = window.setInterval(() => {
        const p = document.querySelector(sel);
        if (!p) return;
        const texto = (p as HTMLElement).innerText.trim();
        const animados = Array.from(p.querySelectorAll('*')).filter((e) => {
          const s = getComputedStyle(e);
          return s.animationName && s.animationName !== 'none';
        }).length;
        w.__qaMuestras!.push({ t: Date.now() - inicio, vacio: texto.length === 0, animados });
        if (Date.now() - inicio > 30000) window.clearInterval(id);
      }, 40);
      w.__qaTimer = id;
    }, selectorPanel);
  }

  /** `true` si durante el muestreo el panel pasó por el estado de skeleton. */
  async huboSkeleton(): Promise<boolean> {
    return this.page.evaluate(() => {
      const w = window as unknown as {
        __qaMuestras?: { vacio: boolean; animados: number }[];
      };
      return (w.__qaMuestras ?? []).some((m) => m.vacio && m.animados > 0);
    });
  }

  async detenerMuestreo(): Promise<void> {
    await this.page.evaluate(() => {
      const w = window as unknown as { __qaTimer?: number };
      if (w.__qaTimer) window.clearInterval(w.__qaTimer);
    });
  }

  /**
   * Cuenta las peticiones de sugerencias por término mientras corre `accion`.
   *
   * Es como se certifica el debounce sin cronometrar nada: si el timer se reinicia al teclear,
   * solo sale la consulta del término estabilizado.
   */
  async terminosConsultados(accion: () => Promise<void>): Promise<string[]> {
    const terminos: string[] = [];
    const escucha = (url: string) => {
      const m = url.match(/search-suggestions\?[^ ]*?[?&]q=([^&]+)/);
      if (m) terminos.push(decodeURIComponent(m[1]));
    };
    const handler = (req: { url: () => string }) => escucha(req.url());
    this.page.on('request', handler);
    try {
      await accion();
    } finally {
      this.page.off('request', handler);
    }
    return terminos;
  }

  // --------------------------------------------------------------- geometría

  /** `true` si no queda hueco entre el último bloque del cuerpo y el borde del modal. */
  async sinEspacioVacio(): Promise<boolean> {
    return this.cuerpo.evaluate((body) => {
      const hijos = Array.from(body.children).filter(
        (c) => c.getBoundingClientRect().height > 0,
      );
      if (hijos.length === 0) return body.getBoundingClientRect().height < 8;
      const ultimo = hijos[hijos.length - 1].getBoundingClientRect();
      const caja = body.getBoundingClientRect();
      // Margen de 24 px: el cuerpo tiene padding propio, y eso no es "espacio vacío" sino diseño.
      return caja.bottom - ultimo.bottom <= 24;
    });
  }
}
