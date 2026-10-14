import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CookieConsentBanner } from './CookieConsentBanner';
import { HeaderFull } from './HeaderFull';
import { PDPPage } from './PDPPage';

/** Un nodo del breadcrumb, con su destino: `href` null en el nodo actual. */
export interface NodoBreadcrumb {
  texto: string;
  href: string | null;
  esIcono: boolean;
}

/** Una píldora de la fila de subcategorías, con cómo se ve marcada. */
export interface Pildora {
  texto: string;
  href: string | null;
  seleccionada: boolean;
}

/**
 * PLP de una categoría de primer nivel (N1) — el objeto de la HU B2C-36.
 *
 * Convive con `PLPCategoriaPage` (B2C-35), que modela la PLP N2/N3, porque la N1 **no es la misma
 * página**: en vez de una grilla con filtros y orden, muestra una fila de píldoras y una sección
 * con carrusel por cada subcategoría N2, cada una con su propio shelf. Fusionarlas obligaría a una
 * sola clase a exponer dos estructuras distintas y a que cada `test()` adivinara cuál de las dos
 * está mirando.
 *
 * Tres cosas que la exploración dejó claras y que explican casi todos los métodos de abajo:
 *
 * - **Los carruseles N2 son lazy**: al entrar solo se pinta el primero y los demás aparecen al
 *   hacer scroll. Cualquier aserción sobre "un carrusel por cada N2" tiene que pasar antes por
 *   `recorrerPagina()`, o cuenta uno y concluye que faltan los otros.
 * - **El carrusel no usa `scrollLeft`**: el track se mueve con `transform: translateX(...)`. Por
 *   eso "se desplazó" se afirma comparando la x del recuadro de la primera tarjeta, que es lo que
 *   el usuario ve moverse, y no un atributo del contenedor.
 * - **El breadcrumb de la N1 tiene dos nodos y el primero es un icono sin texto**: su `innerText`
 *   es "Carnes" a secas. Una aserción que busque la palabra "Inicio" falla sin que el breadcrumb
 *   esté mal, así que el enlace al Home se identifica por su `aria-label`.
 */
export class PLPCategoriaN1Page extends BasePage {
  protected readonly path: string;

  readonly header = new HeaderFull(this.page);
  readonly cookies = new CookieConsentBanner(this.page);

  constructor(page: Page, path = '') {
    super(page);
    this.path = path;
  }

  get main(): Locator {
    return this.page.locator('main').first();
  }

  // ------------------------------------------------------------------ breadcrumb (CA3)

  /** El `aria-label` va con **B mayúscula**, igual que en la PLP N2/N3 y al revés que en la PDP. */
  get breadcrumb(): Locator {
    return this.page.locator('nav[aria-label="Breadcrumb"]');
  }

  /** Enlace al Home: es un icono sin texto, sólo identificable por su `aria-label`. */
  get enlaceInicio(): Locator {
    return this.breadcrumb.locator('a[aria-label="Ir al inicio"]');
  }

  /** Nodo de la categoría actual: un `div` sin `href`, por eso no responde al clic. */
  get nodoActual(): Locator {
    return this.breadcrumb.locator('> div');
  }

  // ------------------------------------------------------------- título y contador (CA4)

  get titulo(): Locator {
    return this.main.locator('h1');
  }

  /** Contador "N productos" de la cabecera. */
  get contador(): Locator {
    return this.main
      .locator('p')
      .filter({ hasText: /\d+\s+productos?/i })
      .first();
  }

  // ---------------------------------------------------------------- píldoras N2 (CA5)

  /**
   * La fila de píldoras: el `div` padre del botón "Todo".
   *
   * No hay clase ni `data-*` que la delimite, pero la píldora "Todo" sí es inequívoca y la fila es
   * exactamente su padre: sus hijos directos son las píldoras, en orden. La fila lleva
   * `overflow-x: auto`, que es el scroll horizontal que la HU pide para Mobile.
   */
  get filaDePildoras(): Locator {
    return this.main.locator('div:has(> button:text-is("Todo"))');
  }

  /**
   * Las píldoras, en el orden en que se renderizan.
   *
   * El `.locator('a,button')` va **encadenado** a propósito: escrito como un único string CSS
   * (`'div:has(…) a,button'`) el selector se parte en dos —la coma tiene precedencia sobre el
   * descendiente— y la segunda mitad arrastra todos los botones del header.
   */
  get pildoras(): Locator {
    return this.filaDePildoras.locator('a,button');
  }

  /** La píldora "Todo". La UI la escribe así; la HU y los TC dicen "Todas". */
  get pildoraTodo(): Locator {
    return this.filaDePildoras.locator('button').filter({ hasText: /^tod(o|as)$/i });
  }

  /** Las píldoras de subcategoría: las que sí son enlaces. */
  get pildorasN2(): Locator {
    return this.filaDePildoras.locator('a');
  }

  /**
   * La píldora de una subcategoría por su slug.
   *
   * Entrar a la PLP N2 por esta píldora es lo que hace que el listado llegue por una petición
   * cliente y no por SSR, que es la única forma de interceptar su API (lo usa B2C-59 para forzar el
   * fallback de imagen). Se busca por `href` y no por el nombre visible porque el slug es lo que el
   * TC declara en `{PLP_URL}`.
   */
  pildoraDe(slugN2: string): Locator {
    return this.filaDePildoras.locator(`a[href="/category/${slugN2}"]`);
  }

  // ------------------------------------------------- secciones N2 con su carrusel (CA6/CA7)

  /** Encabezados de las secciones N2 que están renderizadas, en orden. */
  get encabezadosN2(): Locator {
    return this.main.locator('h2');
  }

  /**
   * La sección de una subcategoría N2: su encabezado, el enlace al N2, las flechas y su shelf.
   *
   * Se pide el `div` **más interno** que contenga a la vez el encabezado y tarjetas: el envoltorio
   * del `h2` no tiene tarjetas y el contenedor de toda la página tiene los cinco encabezados, así
   * que ese par de condiciones deja exactamente la sección.
   */
  seccionN2(nombre: string | RegExp): Locator {
    return this.main
      .locator('div')
      .filter({ has: this.page.locator('h2', { hasText: nombre }) })
      .filter({ has: this.page.locator('button[aria-label="Guardar en favoritos"]') })
      .last();
  }

  /** Enlace al N2 desde la cabecera del carrusel. La UI dice "Mostrar todo"; los TC, "Mostrar todos". */
  mostrarTodoDe(nombre: string | RegExp): Locator {
    return this.seccionN2(nombre).locator('a').filter({ hasText: /mostrar todo/i });
  }

  flechaSiguienteDe(nombre: string | RegExp): Locator {
    return this.seccionN2(nombre).locator('button[aria-label="Slide siguiente"]');
  }

  flechaAnteriorDe(nombre: string | RegExp): Locator {
    return this.seccionN2(nombre).locator('button[aria-label="Slide anterior"]');
  }

  // ------------------------------------------------------------------ shelf (CA1/CA9)

  /**
   * Las tarjetas de producto, ancladas en su botón de favoritos.
   *
   * Es el único elemento semántico que toda tarjeta tiene. Contarlas por el botón del nombre
   * ("Marca | Producto", como en la PLP N2) da cero en los productos sin marca —los hay en este
   * ambiente— y se lee como un shelf vacío que sí estaba renderizado.
   */
  get tarjetas(): Locator {
    return this.main.locator('button[aria-label="Guardar en favoritos"]');
  }

  /** Nombres de producto clickeables: navegan a la PDP. Son `button`, no `<a>`. */
  get nombresDeProducto(): Locator {
    return this.main.locator('button.chakra-text');
  }

  tarjetasDe(nombre: string | RegExp): Locator {
    return this.seccionN2(nombre).locator('button[aria-label="Guardar en favoritos"]');
  }

  // --------------------------------------------------------- carga y error (CA10/CA11/CA12)

  get skeletons(): Locator {
    return this.page.locator('.chakra-skeleton');
  }

  get errorDeCarga(): Locator {
    return this.page.getByText(/tuvimos problemas en cargar tus productos/i);
  }

  get codigoDeError(): Locator {
    return this.page.getByText(/NAV-005/i);
  }

  get reintentar(): Locator {
    return this.page.getByRole('button', { name: /reintentar/i });
  }

  get readyLocator(): Locator {
    return this.titulo;
  }

  /**
   * Abre la PDP del primer producto que pinta la página y devuelve su nombre junto con la PDP
   * (B2C-26 M-035 recorre "una PDP" sin que la planilla diga cuál).
   */
  async abrirPrimerProducto(): Promise<{ nombre: string; pdp: PDPPage }> {
    // En Mobile 390x844 el nombre "Marca | Producto" de la tarjeta es un enlace a la PDP (`.html`),
    // no el `button.chakra-text` de `nombresDeProducto`: se toma el enlace, que existe en los dos.
    const primero = this.main.locator('a[href$=".html"]').filter({ hasText: ' | ' }).locator('visible=true').first();
    await primero.waitFor({ state: 'visible', timeout: 30000 });
    const nombre = (await primero.innerText()).trim();
    await primero.click();
    const pdp = new PDPPage(this.page);
    await pdp.waitUntilReady();
    return { nombre, pdp };
  }

  async goto(): Promise<this> {
    await super.goto();
    await this.cookies.aceptarSiAparece();
    await this.waitUntilReady();
    return this;
  }

  // ------------------------------------------------------------------------ acciones

  /**
   * Recorre la página hasta el final y vuelve arriba, para que los carruseles lazy se monten.
   *
   * Sin esto, una categoría con cinco subcategorías muestra un solo `h2` y la aserción de CA1
   * concluiría que faltan cuatro carruseles que en realidad aún no se habían pedido.
   */
  async recorrerPagina(pasos = 8, espera = 700): Promise<void> {
    for (let i = 0; i < pasos; i += 1) {
      await this.page.mouse.wheel(0, 900);
      await this.page.waitForTimeout(espera);
    }
    await this.page.waitForTimeout(1500);
    await this.page.evaluate(() => window.scrollTo(0, 0));
    await this.page.waitForTimeout(800);
  }

  /** Número de productos que declara el contador de la cabecera. */
  async productosDeclarados(): Promise<number | null> {
    if (!(await this.contador.count())) return null;
    const texto = await this.contador.innerText();
    const match = texto.match(/(\d+)/);
    return match ? Number(match[1]) : null;
  }

  /**
   * Los nodos del breadcrumb con su destino; `esIcono` marca el de Inicio, que no lleva texto.
   *
   * Se recorren las **hojas** del `nav` y no sus hijos directos: según el nivel, el envoltorio de
   * los nodos de texto cambia de profundidad, y una lectura por hijos devuelve un solo nodo con
   * "Frutas y Verduras Frutas" dentro. Los separadores se descartan exigiendo que el texto tenga
   * alguna letra o dígito.
   */
  async nodosDeBreadcrumb(): Promise<NodoBreadcrumb[]> {
    return this.breadcrumb.evaluate((nav) => {
      const nodos: { texto: string; href: string | null; esIcono: boolean }[] = [];
      const inicio = nav.querySelector('a[aria-label="Ir al inicio"]');
      if (inicio) nodos.push({ texto: '', href: inicio.getAttribute('href'), esIcono: true });
      for (const el of [...nav.querySelectorAll('*')]) {
        if (el.children.length) continue;
        const texto = (el.textContent ?? '').trim();
        if (!texto || !/[\p{L}\p{N}]/u.test(texto)) continue;
        const enlace = el.closest('a');
        nodos.push({ texto, href: enlace ? enlace.getAttribute('href') : null, esIcono: false });
      }
      return nodos;
    });
  }

  /**
   * ¿Cómo se ve marcada cada píldora?
   *
   * El storefront no expone `aria-current` ni `aria-selected` en las píldoras —ni aquí ni en la
   * PLP N2—: la seleccionada se distingue sólo por estilo, borde oscuro y peso de fuente mayor.
   * Por eso la selección se lee del estilo computado, que es donde una aserción por rol no
   * encontraría nada.
   */
  async estadoDeLasPildoras(): Promise<Pildora[]> {
    return this.filaDePildoras.evaluate((fila) =>
      [...fila.children].map((el) => {
        const cs = getComputedStyle(el);
        const rgb = /rgb\((\d+), (\d+), (\d+)\)/.exec(cs.borderTopColor);
        const luminancia = rgb ? (Number(rgb[1]) + Number(rgb[2]) + Number(rgb[3])) / 3 : 255;
        return {
          texto: (el.textContent ?? '').trim(),
          href: el.getAttribute('href'),
          seleccionada: luminancia < 120 || Number(cs.fontWeight) >= 500,
        };
      }),
    );
  }

  /** ¿La fila de píldoras desborda el ancho disponible? (el scroll horizontal de CA5b). */
  async pildorasDesbordan(): Promise<{ scrollWidth: number; clientWidth: number }> {
    return this.filaDePildoras.evaluate((fila) => ({
      scrollWidth: fila.scrollWidth,
      clientWidth: fila.clientWidth,
    }));
  }

  /**
   * Posición vertical de cada componente de la cabecera, para comprobar el orden de CA1.
   *
   * `null` en el que no esté renderizado —una N1 sin subcategorías no tiene píldoras ni secciones—,
   * que es información y no un fallo: quién decide qué hacer con ese nulo es el `test()`.
   */
  async ordenDeComponentes(): Promise<Record<string, number | null>> {
    return this.page.evaluate(() => {
      const y = (el: Element | null) =>
        el ? Math.round(el.getBoundingClientRect().top + window.scrollY) : null;
      const main = document.querySelector('main');
      const pildoraTodo = [...(main?.querySelectorAll('button') ?? [])].find((b) =>
        /^tod(o|as)$/i.test((b.textContent ?? '').trim()),
      );
      return {
        breadcrumb: y(document.querySelector('nav[aria-label="Breadcrumb"]')),
        titulo: y(main?.querySelector('h1') ?? null),
        contador:
          y(
            [...(main?.querySelectorAll('p') ?? [])].find((p) =>
              /^\d+\s+productos?$/i.test((p.textContent ?? '').trim()),
            ) ?? null,
          ) ?? null,
        pildoras: y(pildoraTodo?.parentElement ?? null),
        primeraSeccionN2: y(main?.querySelector('h2') ?? null),
        primerShelf: y(main?.querySelector('button[aria-label="Guardar en favoritos"]') ?? null),
      };
    });
  }

  /** La x del recuadro de la primera tarjeta de una sección: con eso se ve si el carrusel se movió. */
  async xDePrimeraTarjetaDe(nombre: string | RegExp): Promise<number> {
    const caja = await this.tarjetasDe(nombre).first().boundingBox();
    if (!caja) throw new Error(`La sección "${nombre}" no tiene tarjetas a la vista`);
    return Math.round(caja.x);
  }

  /** Nombre (y destino) de la primera tarjeta del shelf, para comprobar a qué PDP lleva. */
  async primerProducto(): Promise<string> {
    return (await this.nombresDeProducto.first().innerText()).trim();
  }

  /**
   * El slug de una subcategoría, leído de su propia píldora.
   *
   * Hace falta para interceptar *su* petición de productos, que viaja con el `cgid`
   * (`carnes_cordero-y-otros`) y no con el nombre visible ("Cordero y otros"). Se lee de la página
   * que ya está abierta: deducirlo del nombre con un slugificador acierta en la mayoría y falla
   * justo en los que llevan coma o "y".
   */
  async slugDeSubcategoria(nombre: string): Promise<string> {
    const href = await this.pildorasN2.filter({ hasText: nombre }).first().getAttribute('href');
    if (!href) throw new Error(`No se encontró la píldora de la subcategoría "${nombre}"`);
    return href.split('/').pop()!;
  }
}
