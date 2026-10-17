import { Locator, Page } from '@playwright/test';

/** Recuadro de un elemento, medido sobre el render real. */
export interface Caja {
  top: number;
  left: number;
  width: number;
  height: number;
}

/** Posición vertical de cada slot del shelf; `null` en los que no están renderizados. */
export interface OrdenDeSlots {
  imagen: number | null;
  cucarda: number | null;
  favoritos: number | null;
  precios: number | null;
  nombre: number | null;
  formato: number | null;
  combina: number | null;
  agregar: number | null;
}

/** Una cucarda tal como se renderiza: su texto, dónde cae dentro de la imagen y con qué estilo. */
export interface CucardaRenderizada {
  texto: string;
  /** Desplazamiento respecto de la esquina superior izquierda de la imagen del shelf. */
  dx: number;
  dy: number;
  ancho: number;
  alto: number;
  colorTexto: string;
  colorFondo: string;
  radio: string;
  fontSize: string;
  textOverflow: string;
  /** ¿Su recuadro se cruza con el del botón de favoritos? */
  solapaFavoritos: boolean;
}

/** Cómo ocupa la imagen su contenedor, para decidir si un slot ausente dejó hueco. */
export interface OcupacionDeLaImagen {
  imagen: { ancho: number; alto: number };
  contenedor: { ancho: number; alto: number; dx: number; dy: number };
  /** Nodos vacíos con recuadro visible dentro del área de la imagen: un slot reservado y sin contenido. */
  huecosVisibles: number;
  /** Elementos posicionados sobre la imagen, sin contar el botón de favoritos. */
  sobrepuestos: string[];
}

/**
 * Shelf (tarjeta) de producto de la PLP y del SRP — el objeto de la HU B2C-59.
 *
 * Es un **componente**, no una página navegable: no extiende `BasePage`.
 *
 * El shelf no tiene `data-testid` ni clase semántica, así que el ancla es el **botón de favoritos**
 * —el único elemento propio e inequívoco de cada tarjeta— y el shelf es su abuelo. Por eso el
 * locator raíz vive aquí y no en cada `test()`: una clase generada por chakra (`css-1ti2b8v`)
 * cambia con cada build, mientras que el `aria-label` del corazón sobrevive.
 *
 * El mismo componente y los mismos locators sirven en Desktop y en Mobile: lo que cambia es el
 * ancho de la tarjeta (208 px frente a 169 px) y las columnas de la grilla, no la estructura. De
 * ahí que el par Desktop/Mobile de cada TC comparta este Page Object y difiera solo en el viewport
 * y en lo que su fila espera.
 */
export class ShelfProducto {
  constructor(
    private readonly page: Page,
    /** El shelf concreto: `shelves(page).nth(i)`. */
    readonly root: Locator,
  ) {}

  /** Todos los shelves de la página, en el orden en que se renderizan. */
  static todos(page: Page): Locator {
    // Con sesión, un producto ya favorito muestra "Quitar de favoritos" (666200 en {USER_AUTH_001}, B2C-50).
    return page.locator('main div:has(> div > button:is([aria-label="Guardar en favoritos"], [aria-label="Quitar de favoritos"]))');
  }

  static enIndice(page: Page, indice: number): ShelfProducto {
    return new ShelfProducto(page, ShelfProducto.todos(page).nth(indice));
  }

  // ------------------------------------------------------------------ slots

  get favoritos(): Locator {
    return this.root.locator('button[aria-label="Guardar en favoritos"]');
  }

  get imagen(): Locator {
    return this.root.locator('img');
  }

  /**
   * Placeholder que ocupa el slot de imagen cuando no hay imagen o su carga falla.
   *
   * No es una `<img>` roto: el shelf monta otro elemento, con `role=img` y el propio texto
   * "Imagen no disponible". Por eso el fallback se comprueba con este locator y no con el `src`.
   */
  get imagenNoDisponible(): Locator {
    return this.root.locator('[role="img"][aria-label="Imagen no disponible"]');
  }

  /** Nombre del producto: un `button` con "Marca | Nombre". No es un `<a>`. */
  get nombre(): Locator {
    return this.root.locator('button').filter({ hasText: ' | ' });
  }

  /** La marca, que el shelf envuelve en su propio `span` con peso de fuente mayor. */
  get marca(): Locator {
    return this.nombre.locator('span').first();
  }

  get combinaLaPromo(): Locator {
    return this.root.locator('button').filter({ hasText: /combina la promo/i });
  }

  get agregar(): Locator {
    return this.root.getByRole('button', { name: /^agregar$/i });
  }

  get verSimilares(): Locator {
    return this.root.getByRole('button', { name: /ver similares/i });
  }

  get prontoDisponible(): Locator {
    return this.root.getByText(/pronto disponible/i);
  }

  get patrocinado(): Locator {
    return this.root.getByText(/patrocinado/i);
  }

  /** Precios del shelf: cada importe es una hoja de texto que empieza por `$`. */
  get precios(): Locator {
    return this.root.locator('p,div').filter({ hasText: /^\$[\d.]+/ });
  }

  /** PPUM: el importe por unidad de medida que acompaña a cada precio. */
  get ppum(): Locator {
    return this.root.locator('p').filter({ hasText: /^\(\$[\d.]+ x .+\)$/ });
  }

  /** Controles de galería que la HU prohíbe cuando hay una sola imagen. */
  get controlesDeGaleria(): Locator {
    return this.root.locator(
      'button[aria-label*="Slide"], button[aria-label*="iguiente"], button[aria-label*="nterior"], [role="tablist"]',
    );
  }

  // ------------------------------------------------------------------ lecturas

  async texto(): Promise<string> {
    return (await this.root.innerText()).replace(/\n+/g, ' | ');
  }

  async caja(locator: Locator): Promise<Caja> {
    const b = await locator.boundingBox();
    if (!b) throw new Error('El elemento no tiene recuadro: no está renderizado');
    return { top: Math.round(b.y), left: Math.round(b.x), width: Math.round(b.width), height: Math.round(b.height) };
  }

  /** El nombre tal como se lee en el shelf, con su largo y si trae puntos suspensivos. */
  async nombreRenderizado(): Promise<{ texto: string; largo: number; conElipsis: boolean; marca: string }> {
    const texto = (await this.nombre.innerText()).trim();
    return {
      texto,
      largo: texto.length,
      conElipsis: /…|\.\.\./.test(texto),
      marca: (await this.marca.innerText()).trim(),
    };
  }

  /**
   * Cómo recorta el shelf el nombre largo.
   *
   * La HU pide truncar el texto con puntos suspensivos dentro de un límite de caracteres, que es
   * una cosa distinta de recortarlo visualmente con `line-clamp`: lo segundo deja el texto completo
   * en el DOM y corta al final de la última línea sin marca ninguna. Por eso el `test()` necesita
   * las dos lecturas para decidir.
   */
  async recorteDelNombre(): Promise<{
    lineClamp: string;
    textOverflow: string;
    recortadoVisualmente: boolean;
  }> {
    return this.nombre.evaluate((el) => {
      const cs = getComputedStyle(el);
      return {
        lineClamp: cs.webkitLineClamp || String((cs as CSSStyleDeclaration & { lineClamp?: string }).lineClamp ?? ''),
        textOverflow: cs.textOverflow,
        recortadoVisualmente: el.scrollHeight > el.clientHeight + 1,
      };
    });
  }

  /**
   * Las cucardas del shelf: hojas de texto corto cuyo recuadro cae **dentro** del de la imagen.
   *
   * No hay atributo que las identifique, y por eso se reconocen por geometría: es lo que distingue
   * la cucarda del label de formato o del nombre, que viven debajo de la imagen. Devuelve también
   * la posición relativa dentro de la imagen, que es lo que el TC usa para exigir la esquina
   * superior izquierda.
   */
  async cucardas(): Promise<{ texto: string; dx: number; dy: number }[]> {
    return this.root.evaluate((shelf) => {
      const img = shelf.querySelector('img') ?? shelf.querySelector('[role="img"]');
      if (!img) return [];
      const ri = img.getBoundingClientRect();
      const hojas = [...shelf.querySelectorAll('p,div,span')].filter(
        (e) => e.children.length === 0 && (e.textContent ?? '').trim(),
      );
      const fuera = /^\$|^\(|x kg|agregar|combina|similares|imagen no disponible|en carro|\bun\.$/i;
      return hojas
        .map((e) => {
          const r = e.getBoundingClientRect();
          return { texto: (e.textContent ?? '').trim(), r };
        })
        .filter(
          (h) =>
            h.texto.length <= 24 &&
            !fuera.test(h.texto) &&
            h.r.top >= ri.top - 2 &&
            h.r.bottom <= ri.bottom + 2 &&
            h.r.left >= ri.left - 2 &&
            h.r.right <= ri.right + 2,
        )
        .map((h) => ({
          texto: h.texto,
          dx: Math.round(h.r.left - ri.left),
          dy: Math.round(h.r.top - ri.top),
        }));
    });
  }

  /** El label de formato (gramaje), o `null` si el producto no lo trae. */
  async labelDeFormato(): Promise<string | null> {
    return this.root.evaluate((shelf) => {
      const hojas = [...shelf.querySelectorAll('p,div,span')]
        .filter((e) => e.children.length === 0)
        .map((e) => (e.textContent ?? '').trim());
      return hojas.find((t) => /^[\d.,]+\s*(kg|g|gr|lt|ml|un|cc)\.?$/i.test(t)) ?? null;
    });
  }

  /** Posición vertical de cada slot, para comprobar el orden que declara la HU. */
  async ordenDeSlots(): Promise<OrdenDeSlots> {
    return this.root.evaluate((shelf) => {
      const y = (el: Element | null) => (el ? Math.round(el.getBoundingClientRect().top) : null);
      const hojas = [...shelf.querySelectorAll('p,div,span,button')].filter(
        (e) => e.children.length === 0 && (e.textContent ?? '').trim(),
      );
      const texto = (el: Element) => (el.textContent ?? '').trim();
      const img = shelf.querySelector('img') ?? shelf.querySelector('[role="img"]');
      const ri = img?.getBoundingClientRect();
      const cucarda =
        hojas.find((e) => {
          if (!ri) return false;
          const r = e.getBoundingClientRect();
          const t = texto(e);
          return (
            t.length <= 24 &&
            !/^\$|^\(|agregar|combina|imagen no disponible/i.test(t) &&
            r.top >= ri.top - 2 &&
            r.bottom <= ri.bottom + 2
          );
        }) ?? null;
      return {
        imagen: y(img),
        cucarda: y(cucarda),
        favoritos: y(shelf.querySelector('button[aria-label="Guardar en favoritos"]')),
        precios: y(hojas.find((e) => /^\$[\d.]+/.test(texto(e))) ?? null),
        nombre: y([...shelf.querySelectorAll('button')].find((b) => texto(b).includes(' | ')) ?? null),
        formato: y(hojas.find((e) => /^[\d.,]+\s*(kg|g|gr|lt|ml|un|cc)\.?$/i.test(texto(e))) ?? null),
        combina: y(hojas.find((e) => /combina la promo/i.test(texto(e))) ?? null),
        agregar:
          y([...shelf.querySelectorAll('button')].find((b) => /^agregar$/i.test(texto(b))) ?? null),
      };
    });
  }

  /** ¿La galería del shelf tiene contenido desplazable horizontalmente? */
  async galeriaDesplazable(): Promise<{ scrollWidth: number; clientWidth: number }> {
    return this.root.evaluate((shelf) => {
      const cand = [...shelf.querySelectorAll('div')].find((d) => d.scrollWidth > d.clientWidth + 5);
      const img = shelf.querySelector('img');
      const base = cand ?? img?.parentElement ?? shelf;
      return { scrollWidth: base.scrollWidth, clientWidth: base.clientWidth };
    });
  }

  /** El `src` de la imagen visible, para comparar antes y después del hover. */
  async srcDeLaImagen(): Promise<string | null> {
    if (!(await this.imagen.count())) return null;
    return this.imagen.first().getAttribute('src');
  }

  /**
   * Cuántos elementos vacíos con recuadro visible hay entre el nombre y el botón de acción.
   *
   * Es la lectura de "el layout se redistribuye, no queda espacio vacío" cuando un slot condicional
   * —el botón "Combina la promo"— no aplica. No sirve comparar la distancia entre el nombre y el
   * botón contra la de otro shelf: las tarjetas de la grilla tienen altura uniforme y el CTA queda
   * anclado abajo, así que ese hueco cambia con la cantidad de precios de cada producto y no dice
   * nada del slot ausente. Lo que sí lo dice es si quedó un nodo reservado y vacío.
   */
  async placeholdersVaciosBajoElNombre(): Promise<number> {
    return this.root.evaluate((shelf) => {
      const texto = (el: Element) => (el.textContent ?? '').trim();
      const nombre = [...shelf.querySelectorAll('button')].find((b) => texto(b).includes(' | '));
      const cta = [...shelf.querySelectorAll('button')].find((b) => /^agregar$|ver similares/i.test(texto(b)));
      if (!nombre || !cta) return -1;
      const desde = nombre.getBoundingClientRect().bottom;
      const hasta = cta.getBoundingClientRect().top;
      return [...shelf.querySelectorAll('div,span,p,button')].filter((e) => {
        const r = e.getBoundingClientRect();
        return (
          !texto(e) &&
          e.children.length === 0 &&
          r.height > 8 &&
          r.width > 8 &&
          r.top >= desde - 1 &&
          r.bottom <= hasta + 1
        );
      }).length;
    });
  }

  /**
   * El shelf de un SKU concreto.
   *
   * El shelf no expone el `productId` en ningún atributo: el único rastro del SKU en el DOM es el
   * `src` de la imagen (`.../large/<SKU>-01.jpg`). Por eso la búsqueda va por ahí y no por un
   * `data-*` que no existe.
   */
  static porSku(page: Page, sku: string): ShelfProducto {
    // Algunas imágenes no llevan el SKU en el src (carne molida 666200, B2C-50): el link a la PDP
    // (`/<slug>/<SKU>.html`) sí lo lleva.
    return new ShelfProducto(
      page,
      ShelfProducto.todos(page).filter({ has: page.locator(`img[src*="${sku}"], a[href*="${sku}"]`) }),
    );
  }

  /**
   * Las cucardas del shelf con su geometría y su estilo resueltos sobre el render real.
   *
   * Amplía `cucardas()` con lo que los TC de B2C-65 necesitan comparar —colores, radio, recorte y
   * si se cruza con el botón de favoritos— y estrecha el criterio de búsqueda: la cucarda es el
   * único elemento **posicionado en absoluto con texto** dentro del recuadro de la imagen, mientras
   * que `cucardas()` barre cualquier hoja de texto y por eso necesita una lista de exclusiones.
   *
   * No se ancla en la clase (`css-9q7wso`): la genera chakra y cambia con cada build.
   */
  async cucardasDetalladas(): Promise<CucardaRenderizada[]> {
    return this.root.evaluate((shelf) => {
      const img = shelf.querySelector('img') ?? shelf.querySelector('[role="img"]');
      if (!img) return [];
      const ri = img.getBoundingClientRect();
      const fav = shelf.querySelector('button[aria-label="Guardar en favoritos"]')?.getBoundingClientRect();
      return [...shelf.querySelectorAll('div,span,p')]
        .filter((e) => {
          const cs = getComputedStyle(e);
          const r = e.getBoundingClientRect();
          return (
            cs.position === 'absolute' &&
            (e.textContent ?? '').trim() !== '' &&
            r.top >= ri.top - 2 &&
            r.bottom <= ri.bottom + 2 &&
            r.left >= ri.left - 2 &&
            r.right <= ri.right + 2
          );
        })
        .map((e) => {
          const r = e.getBoundingClientRect();
          const cs = getComputedStyle(e);
          return {
            texto: (e.textContent ?? '').trim(),
            dx: Math.round(r.left - ri.left),
            dy: Math.round(r.top - ri.top),
            ancho: Math.round(r.width),
            alto: Math.round(r.height),
            colorTexto: cs.color,
            colorFondo: cs.backgroundColor,
            radio: cs.borderRadius,
            fontSize: cs.fontSize,
            textOverflow: cs.textOverflow,
            solapaFavoritos: !fav
              ? false
              : !(r.right <= fav.left || r.left >= fav.right || r.bottom <= fav.top || r.top >= fav.bottom),
          };
        });
    });
  }

  /**
   * Cómo ocupa la imagen el espacio del slot.
   *
   * Es la lectura de "no hay espacio vacío ni placeholder reservado" cuando el producto no trae
   * cucarda: no basta con que no haya texto, porque un slot reservado y vacío también se ve como
   * un hueco. Lo que distingue un caso del otro es que la imagen llene su contenedor y que no
   * quede ningún nodo vacío con recuadro visible dentro de esa área.
   */
  async ocupacionDeLaImagen(): Promise<OcupacionDeLaImagen> {
    return this.root.evaluate((shelf) => {
      const img = (shelf.querySelector('img') ?? shelf.querySelector('[role="img"]')) as HTMLElement | null;
      if (!img) throw new Error('El shelf no tiene imagen ni placeholder');
      const ri = img.getBoundingClientRect();
      const rc = (img.parentElement ?? img).getBoundingClientRect();
      const dentro = (r: DOMRect) =>
        r.top >= ri.top - 2 && r.bottom <= ri.bottom + 2 && r.left >= ri.left - 2 && r.right <= ri.right + 2;
      const huecos = [...shelf.querySelectorAll('div,span,p')].filter((e) => {
        const r = e.getBoundingClientRect();
        return (
          (e.textContent ?? '').trim() === '' &&
          e.children.length === 0 &&
          r.width > 6 &&
          r.height > 6 &&
          dentro(r)
        );
      });
      const sobre = [...shelf.querySelectorAll('*')]
        .filter((e) => {
          if (e === img) return false;
          if (e.getAttribute('aria-label') === 'Guardar en favoritos') return false;
          if (e.closest('button[aria-label="Guardar en favoritos"]')) return false;
          return getComputedStyle(e).position === 'absolute' && dentro(e.getBoundingClientRect());
        })
        .map((e) => `${e.tagName}:${(e.textContent ?? '').trim().slice(0, 30) || '(sin texto)'}`);
      return {
        imagen: { ancho: Math.round(ri.width), alto: Math.round(ri.height) },
        contenedor: {
          ancho: Math.round(rc.width),
          alto: Math.round(rc.height),
          dx: Math.round(rc.left - ri.left),
          dy: Math.round(rc.top - ri.top),
        },
        huecosVisibles: huecos.length,
        sobrepuestos: sobre,
      };
    });
  }

  // ------------------------------------------------------------------ acciones

  async hover(): Promise<void> {
    await this.root.scrollIntoViewIfNeeded();
    await this.root.hover();
    await this.page.waitForTimeout(2000);
  }

  async clicAgregar(): Promise<void> {
    await this.agregar.scrollIntoViewIfNeeded();
    await this.agregar.click();
  }

  async clicFavoritos(): Promise<void> {
    await this.favoritos.scrollIntoViewIfNeeded();
    await this.favoritos.click();
  }

  async clicImagen(): Promise<void> {
    await this.root.scrollIntoViewIfNeeded();
    await this.imagen.first().click();
  }

  async clicNombre(): Promise<void> {
    await this.root.scrollIntoViewIfNeeded();
    await this.nombre.first().click();
  }

  /** Estado del shelf tras agregar: el botón deja su lugar al stepper. */
  get enCarro(): Locator {
    return this.root.getByText(/en carro/i);
  }

  // ------------------------------------------------------------------ stepper (B2C-89)

  /**
   * La shelf de un SKU por el enlace a su PDP o por el `src` de su imagen: en la PLP Desktop el
   * nombre es un botón sin href, en Mobile y en el buscador es un enlace; la imagen está en ambos.
   */
  static porEnlaceOImagen(page: Page, sku: string): ShelfProducto {
    return new ShelfProducto(
      page,
      ShelfProducto.todos(page).filter({ has: page.locator(`a[href*="${sku}"], img[src*="${sku}"]`) }).first(),
    );
  }

  /** Basurero: con qty=1 ocupa el lugar del "−". */
  get quitarDelCarro(): Locator {
    return this.root.getByRole('button', { name: 'Quitar del carro' });
  }

  get disminuir(): Locator {
    return this.root.getByRole('button', { name: 'Disminuir cantidad' });
  }

  get aumentar(): Locator {
    return this.root.getByRole('button', { name: 'Aumentar cantidad' });
  }

  /** Mensaje bajo el stepper al llegar al cartlimit. */
  get mensajeCantidadMaxima(): Locator {
    return this.root.getByText(/cantidad m[aá]xima/i);
  }

  /** Cantidad que muestra el bloque "En carro N un.", o null si el shelf no está en el carro. */
  async cantidadEnCarro(): Promise<number | null> {
    const t = (await this.root.innerText()).replace(/\s+/g, ' ');
    const m = t.match(/en carro\s*(\d+)\s*un/i);
    return m ? Number(m[1]) : null;
  }

  /** Espera a que la cantidad del stepper llegue a `n` (el basket responde por red). */
  async esperarCantidad(n: number | null, timeout = 15000): Promise<void> {
    const hasta = Date.now() + timeout;
    while (Date.now() < hasta) {
      if ((await this.cantidadEnCarro()) === n) return;
      await this.page.waitForTimeout(300);
    }
  }

  async clicAumentar(): Promise<void> {
    await this.aumentar.click();
  }

  async clicDisminuir(): Promise<void> {
    await this.disminuir.click();
  }

  async clicQuitar(): Promise<void> {
    await this.quitarDelCarro.click();
  }

  /** Deja el producto fuera del carro, baje de la cantidad que esté. */
  async sacarDelCarro(): Promise<void> {
    for (let i = 0; i < 30 && (await this.cantidadEnCarro()) !== null; i++) {
      const cantidad = await this.cantidadEnCarro();
      if (await this.quitarDelCarro.count()) await this.clicQuitar();
      else await this.clicDisminuir();
      await this.esperarCantidad(cantidad === 1 ? null : (cantidad ?? 1) - 1);
    }
  }
}
