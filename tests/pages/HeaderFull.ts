import { Locator, Page } from '@playwright/test';
import { ModalCategorias } from './ModalCategorias';
import { StoreLocator } from './StoreLocator';

/** Recuadro de un elemento, medido sobre el render real. */
export interface Caja {
  x: number;
  y: number;
  ancho: number;
  alto: number;
}

/**
 * Header completo del storefront (HU B2C-17).
 *
 * Es un componente, no una página navegable: no extiende `BasePage`. Aparece en las páginas
 * habilitadas —Home, PLP, PDP, SRP y Mi Cuenta— y cambia de forma según el form-factor: en
 * Desktop se reparte en dos filas y en Mobile en tres, con los mismos elementos redistribuidos.
 *
 * **Ambas variantes conviven en el DOM.** El header renderiza los dos juegos de elementos y
 * oculta el que no corresponde al viewport, así que un locator por rol y nombre resuelve a dos
 * nodos y rompe por strict mode —o peor, mide el que está oculto y reporta una geometría que
 * nadie ve—. Por eso todo lo que este POM expone se filtra por visibilidad, y los dos botones de
 * categorías tienen locator propio: el de Desktop lleva el texto y ningún `aria-label`, el
 * sandwich de Mobile lleva el `aria-label` y ningún texto.
 */
export class HeaderFull {
  readonly root: Locator;
  readonly modalCategorias: ModalCategorias;

  constructor(private readonly page: Page) {
    this.root = page.locator('header');
    this.modalCategorias = new ModalCategorias(page);
  }

  // ------------------------------------------------------------------ filas

  /**
   * Las filas que el usuario ve: los hijos directos del header con altura real.
   *
   * El header trae cuatro hijos en el DOM en los dos form-factors —los de la variante contraria
   * quedan colapsados a 0px—, así que contar `header > div` a secas da siempre cuatro y no
   * distingue Desktop de Mobile. Lo que los TC llaman "filas" es lo que se renderiza.
   */
  get filasVisibles(): Locator {
    return this.root.locator('> div').locator('visible=true');
  }

  // ------------------------------------------------------------------ elementos

  get logo(): Locator {
    return this.root.locator('button[aria-label="Unimarc"]').locator('visible=true');
  }

  /** Botón de categorías de Desktop: texto visible "Categorías", sin `aria-label`. */
  get categoriasDesktop(): Locator {
    return this.root.locator('button:has-text("Categorías"):not([aria-label])').locator('visible=true');
  }

  /** Icono sandwich de Mobile: `aria-label="Categorías"`, sin texto. */
  get iconoSandwich(): Locator {
    return this.root.locator('button[aria-label="Categorías"]').locator('visible=true');
  }

  get buscador(): Locator {
    return this.root.locator('input[placeholder="¿Qué estás buscando?"]').locator('visible=true');
  }

  /**
   * La lupa del buscador.
   *
   * Vive en el `right-element` del `input__group` de Chakra, no dentro del input: es el hermano
   * que Chakra superpone sobre el borde derecho del campo.
   */
  get iconoLupa(): Locator {
    return this.root
      .locator('.chakra-input__group .chakra-input__right-element svg')
      .locator('visible=true');
  }

  /** Área SSO tal como la ve un Guest. */
  get areaSSO(): Locator {
    return this.root.locator('button:has-text("Ingresa aquí")').locator('visible=true');
  }

  /** Mini carrito. El `aria-label` completo incluye el contador, por eso el prefijo. */
  get miniCarrito(): Locator {
    return this.root.locator('button[aria-label^="Mi carrito"]').locator('visible=true');
  }

  get metodoEntrega(): Locator {
    return this.root.locator('button:has-text("Elige una forma de entrega")').locator('visible=true');
  }

  get botonMembresia(): Locator {
    return this.root.locator('button:has-text("Suscríbete a")').locator('visible=true');
  }

  /** Botón de membresía para un cliente con membresía paga: "Ver mi suscripción" (B2C-69). */
  get botonVerSuscripcion(): Locator {
    return this.root.getByRole('button', { name: /ver mi suscripci[óo]n/i }).locator('visible=true');
  }

  /**
   * Badge numérico del mini carrito: el elemento visible dentro del botón cuyo texto es solo un
   * número. El `aria-label` del botón lleva el conteo ("número de artículos: 0") aunque el badge no
   * se pinte, así que el badge se busca por lo que se ve, no por el `aria-label` (B2C-69).
   */
  get badgeCarrito(): Locator {
    return this.miniCarrito.first().getByText(/^\s*\d+\s*$/).locator('visible=true');
  }

  /** Conteo que anuncia el `aria-label` del mini carrito ("Mi carrito, número de artículos: N"). */
  async conteoAnunciadoCarrito(): Promise<number | null> {
    const aria = await this.miniCarrito.first().getAttribute('aria-label');
    const m = aria?.match(/(\d+)\s*$/);
    return m ? Number(m[1]) : null;
  }

  // ------------------------------------------------------- accesos directos

  /**
   * El contenedor con scroll horizontal de los accesos directos — el "carrusel" del CA7.
   *
   * Envuelve también al botón de membresía, y ese detalle no es anecdótico: es lo que hace que
   * en Mobile ambos compartan fila y se desplacen juntos.
   */
  get carruselAccesos(): Locator {
    return this.root.locator('div.unimarc-header-shortcuts').locator('visible=true');
  }

  /** La lista de accesos directos. Hay una por form-factor en el DOM; esta es la que se ve. */
  get listaAccesos(): Locator {
    return this.root.locator('ul.header-shortcuts').locator('visible=true');
  }

  get accesos(): Locator {
    return this.listaAccesos.locator('li');
  }

  // ------------------------------------------------------------- acciones

  /** Clic en el logo. Devuelve la promesa de navegación ya resuelta por el `test()`. */
  async clicLogo(): Promise<void> {
    await this.logo.click();
  }

  /** Abre el modal de categorías desde Desktop y espera a que su cuerpo renderice. */
  async abrirCategoriasDesktop(): Promise<ModalCategorias> {
    await this.categoriasDesktop.click();
    await this.esperarModalCategorias();
    return this.modalCategorias;
  }

  /** Abre el modal de categorías desde el sandwich de Mobile. */
  async abrirCategoriasMobile(): Promise<ModalCategorias> {
    await this.iconoSandwich.click();
    await this.esperarModalCategorias();
    return this.modalCategorias;
  }

  /**
   * Las tarjetas de categoría del modal, en cualquiera de sus dos variantes.
   *
   * Se localizan por el thumbnail y no por la estructura de Chakra a propósito: **los modales de
   * Desktop y de Mobile no comparten armazón**. El de Mobile se arma con
   * `.chakra-modal__header` + `.chakra-modal__body`; el de Desktop no tiene ninguno de los dos,
   * así que un locator escrito contra el de Mobile espera para siempre en Desktop. Lo que sí
   * tienen los dos es un listado de categorías con imagen, y con eso alcanza para saber que el
   * contenido ya renderizó.
   */
  get itemsModalCategorias(): Locator {
    return this.modalCategorias.root.locator('button:has(img)');
  }

  /**
   * El modal se pinta en dos tiempos —primero el armazón y después el contenido—, así que medir
   * su caja apenas aparece devuelve la de la animación de entrada y no la definitiva.
   */
  private async esperarModalCategorias(): Promise<void> {
    await this.modalCategorias.root.waitFor({ state: 'visible', timeout: 30000 });
    await this.itemsModalCategorias.first().waitFor({ state: 'visible', timeout: 30000 });
    await this.page.waitForTimeout(600);
  }

  /** Desplaza el carrusel de accesos hasta el final, como haría un swipe del usuario. */
  async deslizarAccesosAlFinal(): Promise<void> {
    await this.carruselAccesos.evaluate((el) => {
      el.scrollLeft = el.scrollWidth;
    });
    await this.page.waitForTimeout(800);
  }

  // ------------------------------------------------------------- geometría

  /** Caja de un locator, ya redondeada. Falla si el elemento no tiene caja. */
  async caja(locator: Locator): Promise<Caja> {
    const box = await locator.boundingBox();
    if (!box) throw new Error('El elemento no tiene caja visible en el render actual.');
    return {
      x: Math.round(box.x),
      y: Math.round(box.y),
      ancho: Math.round(box.width),
      alto: Math.round(box.height),
    };
  }

  /** Coordenada X de un locator: con esto los `test()` verifican el orden de una fila. */
  async x(locator: Locator): Promise<number> {
    return (await this.caja(locator)).x;
  }

  /** Índice (base 0) de la fila visible que contiene a `locator`, según su centro vertical. */
  async filaDe(locator: Locator): Promise<number> {
    const objetivo = await this.caja(locator);
    const centro = objetivo.y + objetivo.alto / 2;
    const total = await this.filasVisibles.count();
    for (let i = 0; i < total; i++) {
      const fila = await this.caja(this.filasVisibles.nth(i));
      if (centro >= fila.y && centro <= fila.y + fila.alto) return i;
    }
    return -1;
  }

  /** `true` si el elemento entra completo en el viewport horizontal. */
  async entraEnPantalla(locator: Locator): Promise<boolean> {
    const c = await this.caja(locator);
    const ancho = this.page.viewportSize()?.width ?? 0;
    return c.x >= 0 && c.x + c.ancho <= ancho;
  }

  /** Métricas de scroll del carrusel de accesos. */
  async scrollAccesos(): Promise<{ scrollWidth: number; clientWidth: number; desbordado: boolean }> {
    return this.carruselAccesos.evaluate((el) => ({
      scrollWidth: el.scrollWidth,
      clientWidth: el.clientWidth,
      desbordado: el.scrollWidth > el.clientWidth,
    }));
  }

  // ------------------------------------------------------- modo sticky (B2C-24)

  /**
   * El botón del Store Locator, sea cual sea su estado.
   *
   * Su texto cambia con lo que el usuario haya elegido: "Elige una forma de entrega" mientras no
   * hay nada, y la dirección con su plazo y su costo una vez seleccionada — que es justamente lo
   * que el TC-B2C24-D-003 compara antes y después del ciclo de scroll. Por eso el locator acepta
   * los dos textos en vez de fijar uno: escrito contra el estado inicial, dejaría de encontrar el
   * botón en cuanto el caso hace lo que vino a hacer.
   *
   * No hay `data-testid` ni `aria-label` donde agarrarse, y las clases de Emotion (`css-mmd41v`)
   * cambian con cada build, así que el texto es el asidero menos frágil disponible hoy. Un
   * `data-testid` en este botón lo volvería trivial.
   *
   * Con una dirección aplicada el botón no dice "despacho": muestra la calle, "Desde: <día y
   * hora>" y el costo ("Calle Uno 23, La Florida · Desde: Lun 28/09, 15:00 hrs. · $2.990"). Por
   * eso el filtro acepta también "Desde:" (B2C-26).
   */
  get storeLocator(): Locator {
    return this.root
      .getByRole('button')
      .filter({ hasText: /elige una forma de entrega|despacho|retiro en tienda|desde:/i })
      .locator('visible=true')
      .first();
  }

  /**
   * El saludo de la sesión iniciada. En Desktop se ve el texto "Hola, <nombre>"; en Mobile solo el
   * avatar con las iniciales, y el saludo queda como nombre accesible del botón (B2C-148).
   */
  get saludo(): Locator {
    return this.page
      .getByText(/^hola,/i)
      .or(this.page.getByRole('button', { name: /^hola,/i }))
      .locator('visible=true')
      .first();
  }

  /**
   * El header del sitio y nada más. `root` (`header`) también encuentra la cabecera de cualquier
   * modal de Chakra abierto —el drawer del Store Locator tiene la suya—, y con el drawer abierto
   * una aserción sobre `root` choca con dos elementos. Este es el único con `role="banner"`
   * explícito (B2C-26).
   */
  get barraDelSitio(): Locator {
    return this.page.locator('header[role="banner"]');
  }

  /**
   * La dirección que muestra el Store Locator: la primera línea del botón, sin el plazo ni el
   * costo. Con nada aplicado devuelve "Elige una forma de entrega".
   */
  async direccionDelStoreLocator(): Promise<string> {
    return ((await this.storeLocator.locator('p').first().textContent()) ?? '').trim();
  }

  /**
   * Espera a que el Store Locator muestre una dirección. Tras el login el header se pinta primero
   * con "Elige una forma de entrega" y recién después con la dirección activa de la cuenta: leerlo
   * de inmediato da el estado intermedio, no el de la sesión (B2C-26).
   */
  async esperarDireccionEnStoreLocator(timeout = 30000): Promise<string> {
    await this.root
      .getByRole('button')
      .filter({ hasText: /desde:/i })
      .locator('visible=true')
      .first()
      .waitFor({ state: 'visible', timeout });
    return this.direccionDelStoreLocator();
  }

  /** Abre el drawer del Store Locator y espera a que su contenido esté a la vista. */
  async abrirStoreLocator(): Promise<StoreLocator> {
    const drawer = new StoreLocator(this.page);
    await this.storeLocator.click();
    await drawer.root.waitFor({ state: 'visible', timeout: 30000 });
    await drawer.campoDireccion.waitFor({ state: 'visible', timeout: 30000 });
    return drawer;
  }

  /**
   * Qué hay dentro del botón del Store Locator, medido sobre el render real (B2C-70).
   *
   * El TC pide comprobar tres piezas —el icono del método, el texto y el "icono V"— y ninguna
   * tiene `data-testid`: lo único que las distingue es dónde caen respecto del texto. De ahí que
   * la lectura devuelva la posición de cada icono relativa al botón, y no una lista de locators.
   *
   * De cada icono se devuelven además los **puntos de su trazo** cuando el path es una polilínea
   * corta. Es lo que permite afirmar que el chevron es una "V" —el punto del medio más abajo que
   * los extremos— en vez de comparar el atributo `d` contra un literal, que cambiaría en cuanto
   * alguien rediseñe el icono sin cambiar su forma.
   *
   * Ojo con el icono de la izquierda: **son dos svg que se turnan deslizándose** por un slot de
   * 36 px, así que su `dx` cambia entre dos lecturas del mismo estado. Lo estable es que siempre
   * hay alguno que empieza antes que el texto; una aserción sobre su posición exacta no lo es.
   */
  async composicionDelStoreLocator(): Promise<{
    texto: string;
    textoDx: number;
    iconos: { dx: number; ancho: number; alto: number; puntos: { x: number; y: number }[] }[];
  }> {
    return this.storeLocator.evaluate((boton) => {
      const caja = boton.getBoundingClientRect();

      const hoja = [...boton.querySelectorAll('p,span,div')].find(
        (e) => e.children.length === 0 && (e.textContent ?? '').trim(),
      );
      const rt = hoja?.getBoundingClientRect();

      const iconos = [...boton.querySelectorAll('svg')].map((svg) => {
        const r = svg.getBoundingClientRect();
        const d = svg.querySelector('path')?.getAttribute('d') ?? '';
        // Un path de polilínea ("M5 7.5L10 12.5L15 7.5") se deja leer como puntos; uno de
        // contorno, con curvas, no — y ahí `puntos` queda vacío, que es la respuesta correcta.
        const puntos = /^[ML][\d.\s,L]+$/.test(d.trim())
          ? d
              .trim()
              .split(/[ML]/)
              .filter(Boolean)
              .map((par) => {
                const [x, y] = par.trim().split(/[\s,]+/).map(Number);
                return { x, y };
              })
              .filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y))
          : [];
        return {
          dx: Math.round(r.left - caja.left),
          ancho: Math.round(r.width),
          alto: Math.round(r.height),
          puntos,
        };
      });

      return {
        texto: (hoja?.textContent ?? '').trim(),
        textoDx: rt ? Math.round(rt.left - caja.left) : -1,
        iconos,
      };
    });
  }

  /** Alto renderizado del header. Es lo que distingue el modo full del sticky. */
  async alto(): Promise<number> {
    return this.root.evaluate((el) => Math.round(el.getBoundingClientRect().height));
  }

  /** `position` calculada del header. Es `fixed` siempre, incluso en el tope de la página. */
  async position(): Promise<string> {
    return this.root.evaluate((el) => getComputedStyle(el).position);
  }

  /** Cuántas filas del header conservan altura. En sticky queda una sola. */
  async filasConAlto(): Promise<number> {
    return this.root.evaluate(
      (el) =>
        Array.from(el.children).filter((c) => c.getBoundingClientRect().height > 0).length,
    );
  }

  /**
   * Desplaza la página y espera a que la contracción del header termine.
   *
   * La espera no es un margen de cortesía: el colapso es animado, y mientras dura, las filas que
   * se están ocultando siguen devolviendo una caja con ancho y alto. Medir en ese instante cuenta
   * como visible lo que el usuario ya no ve.
   */
  async scrollA(y: number): Promise<void> {
    await this.page.evaluate((destino) => window.scrollTo(0, destino), y);
    await this.page.waitForTimeout(1200);
  }

  /**
   * `true` si el elemento quedó fuera del área visible del header.
   *
   * Es un criterio geométrico y no un `toBeVisible()` a propósito: **los dos form-factors ocultan
   * sus filas de manera distinta**. En Desktop la fila pasa a `display:none` y sus hijos dejan de
   * tener caja, pero en Mobile queda con altura 0 y `display:block`, así que los botones de
   * dentro se desbordan y Playwright los sigue dando por visibles aunque estén recortados. Lo que
   * el TC llama "queda oculto" es esto: el elemento ya no cae dentro del recuadro del header.
   */
  async quedaFueraDelHeader(locator: Locator): Promise<boolean> {
    // Un locator filtrado por visibilidad no resuelve a nada cuando la fila pasó a `display:none`
    // —así oculta Desktop—, y esperar su caja agotaría el timeout del caso en vez de responder la
    // pregunta. Que no haya elemento visible ya es la respuesta: el usuario no lo ve.
    if ((await locator.count()) === 0) return true;
    const header = await this.caja(this.root);
    const box = await locator.boundingBox({ timeout: 5000 }).catch(() => null);
    if (!box) return true;
    const centro = box.y + box.height / 2;
    return centro < header.y || centro > header.y + header.alto;
  }

  /**
   * Alto del header en una posición de scroll concreta, sondeada desde el tope.
   *
   * Vuelve arriba antes de cada medición a propósito. El componente reacciona al *movimiento* de
   * scroll, no solo a la posición: encadenando sondas de un píxel (132 → 133) el salto es tan
   * pequeño que no lo registra y devuelve el header sin contraer, lo que haría fallar el caso por
   * un artefacto de la medición y no por el producto. Sondeado desde el tope, el umbral sale
   * limpio y repetible, y además es el escenario que describe el TC: scroll desde el tope de la
   * página.
   */
  async altoConScrollEn(y: number): Promise<number> {
    await this.scrollA(0);
    await this.scrollA(y);
    return this.alto();
  }

  /**
   * Marca el nodo del Store Locator para reconocerlo más tarde.
   *
   * Es como se comprueba el "sin re-render" del CA3: si tras el ciclo de scroll la marca sigue
   * ahí, React conservó el elemento en vez de volver a montarlo. Comparar solo el texto no
   * distinguiría un componente preservado de uno reconstruido con el mismo estado.
   */
  async marcarStoreLocator(marca: string): Promise<void> {
    await this.storeLocator.evaluate((el, m) => {
      (el as HTMLElement & { __qaMarca?: string }).__qaMarca = m;
    }, marca);
  }

  /** `true` si el nodo del Store Locator sigue siendo el que se marcó. */
  async storeLocatorConservaMarca(marca: string): Promise<boolean> {
    return this.storeLocator.evaluate(
      (el, m) => (el as HTMLElement & { __qaMarca?: string }).__qaMarca === m,
      marca,
    );
  }

  /** El texto del Store Locator, normalizado, para comparar su estado antes y después. */
  async textoStoreLocator(): Promise<string> {
    return this.storeLocator.evaluate((el) =>
      (el as HTMLElement).innerText.replace(/\s+/g, ' ').trim(),
    );
  }
}
