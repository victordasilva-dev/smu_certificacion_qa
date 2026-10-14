import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CookieConsentBanner } from './CookieConsentBanner';
import { HeaderFull } from './HeaderFull';

/**
 * Página de detalle de producto (PDP) — el objeto de la HU B2C-31.
 *
 * La PDP no expone encabezados: el nombre del producto es un `<p>` dentro de
 * `unimarc-product-core` y los títulos de carrusel no existen en este ambiente, así que nada aquí
 * se localiza por `h1`/`h2`. Lo que sí es estable son los `data-testid` del bloque principal, la
 * galería y el breadcrumb, y por ahí van los locators.
 *
 * El `path` se deja vacío porque a la PDP se llega navegando desde la PLP o desde un carrusel —
 * que es lo que los TC piden— y no por su URL: `irA(sku)` existe solo para el caso de la URL
 * inválida, donde el producto no se puede alcanzar de ninguna otra forma.
 */
export class PDPPage extends BasePage {
  protected readonly path = '';

  readonly header = new HeaderFull(this.page);
  readonly cookies = new CookieConsentBanner(this.page);

  get root(): Locator {
    return this.page.locator('[data-testid="unimarc-pdp"]');
  }

  /** Bloque principal: breadcrumb + galería + info/precios/botones + tabs. */
  get core(): Locator {
    return this.page.locator('[data-testid="unimarc-product-core"]');
  }

  get readyLocator(): Locator {
    return this.core;
  }

  // ---------------------------------------------------------------- breadcrumb

  /**
   * Los niveles de categoría del breadcrumb.
   *
   * El botón "Inicio" y el nombre del producto son **hermanos** del `nav`, no items suyos: por eso
   * el recuento de niveles sale de los `sf-crumb-item` y no del texto completo de la barra.
   */
  get nivelesDeBreadcrumb(): Locator {
    return this.page.locator('[data-testid="sf-crumb-item"]');
  }

  get breadcrumb(): Locator {
    return this.page.locator('nav[aria-label="breadcrumb"]');
  }

  /**
   * El "Inicio" con el que abre el breadcrumb.
   *
   * Es un icono sin texto, así que no aparece en el `innerText` de la ruta ni entre los
   * `sf-crumb-item`: leer el breadcrumb como cadena hace concluir que la estructura arranca en la
   * categoría N1 y que falta el primer nivel que pide CA1. Su ancla es el `aria-label`.
   */
  get inicioDelBreadcrumb(): Locator {
    return this.page.locator('[aria-label="Inicio"]').first();
  }

  async rutaDeBreadcrumb(): Promise<string[]> {
    return (await this.nivelesDeBreadcrumb.allInnerTexts()).map((t) => t.trim());
  }

  /**
   * La ruta del breadcrumb una vez que dejó de crecer.
   *
   * El breadcrumb se pinta por niveles: leído en cuanto el bloque principal existe, devuelve una
   * ruta a medias. Eso no rompe el caso de forma visible —devuelve una lista más corta, no un
   * error— y por eso es peligroso: en TC-B2C31-D-001 hacía que dos lecturas del mismo producto
   * salieran distintas y que un reintento diera por bueno lo que la primera pasada había
   * detectado. Se espera a que dos lecturas seguidas coincidan antes de devolver nada.
   */
  async rutaDeBreadcrumbEstable(): Promise<string[]> {
    await this.breadcrumb.waitFor({ state: 'visible', timeout: 30000 });
    let anterior = await this.rutaDeBreadcrumb();
    for (let intento = 0; intento < 20; intento += 1) {
      await this.page.waitForTimeout(300);
      const actual = await this.rutaDeBreadcrumb();
      if (actual.length > 0 && actual.join('>') === anterior.join('>')) return actual;
      anterior = actual;
    }
    return anterior;
  }

  // ---------------------------------------------------------------- galería

  get miniaturas(): Locator {
    return this.page.locator('[data-testid="product-gallery-thumb"]');
  }

  get imagenPrincipal(): Locator {
    return this.page.locator('[data-testid="product-gallery-main"]');
  }

  get zoomAcercar(): Locator {
    return this.page.locator('[data-testid="product-gallery-zoom-in"]');
  }

  // ---------------------------------------------------------------- info y acciones

  /** Nombre del producto, tal como lo muestra el breadcrumb al final de la ruta. */
  get nombreDelProducto(): Locator {
    return this.core.locator('p').filter({ hasNotText: /^\$/ }).first();
  }

  /** Enlace de la marca. En este storefront apunta a una búsqueda, no a un filtro de marca. */
  get marca(): Locator {
    return this.core.locator('a[href^="/search"]');
  }

  get favoritos(): Locator {
    return this.core.getByRole('button', { name: /guardar en favoritos/i }).first();
  }

  get compartir(): Locator {
    return this.core.getByRole('button', { name: /compartir/i }).first();
  }

  get guardarEnListas(): Locator {
    return this.core.getByRole('button', { name: /guardar en listas/i }).first();
  }

  get agregar(): Locator {
    return this.core.getByRole('button', { name: 'Agregar', exact: true }).first();
  }

  /**
   * Precio, PPUM y cucardas **del producto**, sin lo que aportan los carruseles.
   *
   * `unimarc-product-core` no envuelve solo la ficha: cuelgan de él también los tabs y el
   * carrusel de productos similares, con un precio por tarjeta. Contando sobre el contenedor
   * entero, un producto con un solo precio aparenta tener siete, y el máximo de 3 que pide la HU
   * falla por elementos que no son de este producto. Por eso se excluyen los subárboles de los
   * tabs antes de mirar nada.
   */
  async datosDelProducto(): Promise<{ precios: string[]; ppum: string[]; cucardas: string[] }> {
    return this.core.evaluate((core) => {
      const fuera = new Set<Element>();
      core.querySelectorAll('[role="tablist"], [role="tabpanel"]').forEach((el) => {
        fuera.add(el);
        el.querySelectorAll('*').forEach((hijo) => fuera.add(hijo));
      });
      const hojas = [...core.querySelectorAll('p, span, div')]
        .filter((el) => !fuera.has(el) && el.children.length === 0)
        .map((el) => (el.textContent ?? '').trim())
        .filter(Boolean);

      const precios = hojas.filter((t) => /^\$\s?[\d.]+/.test(t));
      const ppum = hojas.filter((t) => /^\(\$[\d.]+ x /.test(t));
      const cucardas = [
        ...new Set(hojas.filter((t) => /^(nuevo|oferta|club unimarc|patrocinado|destacado|exclusivo)$/i.test(t))),
      ];
      return { precios, ppum, cucardas };
    });
  }

  /** Los precios visibles del producto, para las aserciones que necesitan un locator. */
  get precios(): Locator {
    return this.core.locator('p').filter({ hasText: /^\$\s?[\d.]+/ });
  }

  // ---------------------------------------------------------------- tabs

  get tabs(): Locator {
    return this.page.getByRole('tab');
  }

  tab(nombre: RegExp): Locator {
    return this.page.getByRole('tab', { name: nombre });
  }

  async tabActivo(): Promise<string | null> {
    const activo = this.page.locator('[role="tab"][aria-selected="true"]');
    return (await activo.count()) ? (await activo.first().innerText()).trim() : null;
  }

  // ---------------------------------------------------------------- carruseles de recomendación (B2C-6)

  /** Título del carrusel "Recomendados para ti". Solo se espera con sesión iniciada. */
  get recomendadosParaTi(): Locator {
    return this.page.getByText(/recomendados para ti/i);
  }

  get footer(): Locator {
    return this.page.locator('footer').first();
  }

  /**
   * Lleva la PDP hasta el final, como el usuario que hace scroll.
   *
   * Se baja en dos tiempos porque los carruseles se montan tarde: el primer scroll dispara la
   * carga diferida y la página crece, así que con uno solo no se llega al final real.
   */
  async scrollAlFinal(): Promise<void> {
    for (let i = 0; i < 3; i += 1) {
      await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    }
  }

  /** Deja en pantalla el final del contenido de la PDP junto con el comienzo del footer. */
  async encuadrarFinDelContenido(): Promise<void> {
    await this.page.evaluate(() => {
      const footer = document.querySelector('footer');
      if (footer) window.scrollTo(0, footer.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.85);
    });
  }

  /**
   * Distancia en px entre el último contenido visible de la PDP y el footer.
   *
   * Un carrusel que no se renderiza puede dejar su contenedor con alto reservado: eso es el
   * "espacio vacío" que el TC pide descartar. Se mide contra los hijos de la raíz de la PDP con
   * alto > 0, que es donde cuelgan los slots de los carruseles.
   */
  async huecoAntesDelFooter(): Promise<number> {
    return this.page.evaluate(() => {
      const pdp = document.querySelector('[data-testid="unimarc-pdp"]');
      const footer = document.querySelector('footer');
      if (!pdp || !footer) return Number.NaN;
      const fondos = [...pdp.querySelectorAll('*')]
        .map((el) => el.getBoundingClientRect())
        .filter((r) => r.height > 0 && r.width > 0)
        .map((r) => r.bottom);
      return Math.round(footer.getBoundingClientRect().top - Math.max(...fondos));
    });
  }

  // ---------------------------------------------------------------- estados

  /** Pantalla de producto inexistente. */
  get pantalla404(): Locator {
    return this.page.getByText(/el producto que buscas no existe o ya no est/i);
  }

  get irAInicio(): Locator {
    return this.page.getByRole('button', { name: /ir a la p[áa]gina de inicio/i });
  }

  /** Pantalla de fallo técnico de carga que declara la HU (CA21). */
  get pantallaDeError(): Locator {
    return this.page.getByText(/tuvimos un problema al cargar tu producto/i);
  }

  get reintentar(): Locator {
    return this.page.getByRole('button', { name: /reintentar/i });
  }

  /** Navega a la PDP por SKU. Solo para el caso de la URL inválida. */
  async irA(sku: string): Promise<this> {
    await this.page.goto(`/product/${sku}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    return this;
  }

  /**
   * La categoría por defecto del producto: el destino del último nivel del breadcrumb. Sirve para
   * llegar a la PLP de un SKU declarado cuando la fila no declara la PLP (B2C-62).
   */
  async categoriaPorDefecto(): Promise<string | null> {
    if ((await this.nivelesDeBreadcrumb.count()) === 0) return null;
    return this.nivelesDeBreadcrumb.last().locator('a').first().getAttribute('href');
  }

  /** Abre la PDP por SKU (`/product/<SKU>`, que redirige a la URL canónica `.html`) y espera la ficha. */
  async abrir(sku: string): Promise<this> {
    await this.irA(sku);
    await this.cookies.aceptarSiAparece();
    await this.waitUntilReady();
    await this.page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    return this;
  }

  // ---------------------------------------------------------------- Mobile (B2C-31 M)

  /** El "Inicio" con que abre el breadcrumb: un botón con ese nombre accesible, hermano del `nav`. */
  get inicio(): Locator {
    return this.page.locator('main').getByRole('button', { name: 'Inicio', exact: true }).first();
  }

  /** Galería en Mobile: imagen a ancho completo. */
  get galeriaMobile(): Locator {
    return this.page.locator('[data-testid="product-gallery-main-mobile"]').locator('visible=true').first();
  }

  get listaDeTabs(): Locator {
    return this.page.getByRole('tablist').first();
  }

  get panelActivo(): Locator {
    return this.page.locator('[role="tabpanel"]:not([hidden])').first();
  }

  get vanBienJuntos(): Locator {
    return this.page.getByText(/van bien juntos/i);
  }

  /** El corazón ya marcado: el botón cambia su `aria-label` a "Quitar de favoritos". */
  get favoritoMarcado(): Locator {
    return this.core.getByRole('button', { name: /quitar de favoritos/i }).first();
  }

  /** Color de relleno del corazón de la ficha. */
  async colorDelCorazon(): Promise<string> {
    return this.core
      .locator('button[aria-label*="favorito" i]')
      .first()
      .evaluate((b) => getComputedStyle(b.querySelector('svg path') ?? b).fill);
  }

  /** Modal "Agregar como lista" que abre "Guardar en listas". */
  get modalListas(): Locator {
    return this.page.locator('[role="dialog"]').filter({ hasText: /agregar como lista/i }).locator('visible=true').first();
  }

  /** Botón "Guardar en listas" que se ve (en Mobile hay uno por variante de layout). */
  get guardarEnListasVisible(): Locator {
    return this.page.locator('button:has-text("Guardar en listas")').locator('visible=true').first();
  }

  /** Corazón visible de la ficha. */
  get favoritosVisible(): Locator {
    return this.core.locator('button[aria-label*="favorito" i]').locator('visible=true').first();
  }

  get compartirVisible(): Locator {
    return this.core.getByRole('button', { name: /compartir/i }).locator('visible=true').first();
  }

  get agregarVisible(): Locator {
    return this.core.getByRole('button', { name: 'Agregar', exact: true }).locator('visible=true').first();
  }

  // ---------------------------------------------------------------- Combina la promo (B2C-51)

  /** El botón "😎 Combina la promo" de la ficha (no los de las tarjetas del carrusel). */
  get combinaLaPromo(): Locator {
    return this.core.getByRole('button', { name: /combina la promo/i }).locator('visible=true').first();
  }

  /** El drawer "Combina la promo" ("0 / N productos" + una tarjeta por variante). */
  get drawerCombinaLaPromo(): Locator {
    return this.page.locator('[role="dialog"]').filter({ hasText: /combina la promo/i }).locator('visible=true').first();
  }

  // ---------------------------------------------------------------- oferta (B2C-51)

  /**
   * Los textos de la ficha que se pintan tachados (precio lista de una oferta), con su color, y
   * el badge de descuento ("23%") con su fondo. Fuera de tabs y carruseles, como `textosDeLaFicha`.
   */
  async marcasDeOferta(): Promise<{
    tachados: { texto: string; color: string; y: number }[];
    badge: { texto: string; fondo: string } | null;
    antes: boolean;
  }> {
    return this.core.evaluate((core) => {
      const fuera = new Set<Element>();
      core.querySelectorAll('[role="tablist"], [role="tabpanel"]').forEach((el) => {
        fuera.add(el);
        el.querySelectorAll('*').forEach((h) => fuera.add(h));
      });
      const hojas = [...core.querySelectorAll('*')].filter(
        (el) => !fuera.has(el) && el.children.length === 0 && (el as HTMLElement).offsetParent !== null,
      ) as HTMLElement[];
      const tachados = hojas
        .filter((el) => getComputedStyle(el).textDecorationLine.includes('line-through'))
        .map((el) => ({
          texto: (el.textContent ?? '').trim(),
          color: getComputedStyle(el).color,
          y: Math.round(el.getBoundingClientRect().top + window.scrollY),
        }));
      const b = hojas.find((el) => /^\d+\s?%$/.test((el.textContent ?? '').trim()));
      const badge = b ? { texto: (b.textContent ?? '').trim(), fondo: getComputedStyle(b).backgroundColor } : null;
      const antes = hojas.some((el) => /^antes:?/i.test((el.textContent ?? '').trim()));
      return { tachados, badge, antes };
    });
  }

  // ---------------------------------------------------------------- stepper (B2C-31 M-023..028)

  /**
   * El stepper que reemplaza a "Agregar" cuando el producto está en el carro: "En carro" + "N un."
   * y los botones "Quitar del carro" y "Aumentar cantidad" (sus nombres accesibles).
   */
  get aumentarCantidad(): Locator {
    return this.core.getByRole('button', { name: 'Aumentar cantidad' }).locator('visible=true').first();
  }

  get quitarDelCarro(): Locator {
    return this.core.getByRole('button', { name: 'Quitar del carro' }).locator('visible=true').first();
  }

  /** "N un." / "N kg", el texto que sigue a "En carro". */
  get cantidadEnCarro(): Locator {
    return this.core.getByText(/^en carro$/i).first().locator('xpath=following-sibling::*[1]');
  }

  async unidadesEnCarro(): Promise<number> {
    const texto = (await this.cantidadEnCarro.innerText()).trim();
    return Number(texto.match(/[\d.,]+/)?.[0]?.replace(',', '.') ?? NaN);
  }

  /** Tag "Pronto disponible" de la ficha: el producto sin stock para el método de entrega activo. */
  get prontoDisponible(): Locator {
    return this.core.getByText(/^pronto disponible$/i).locator('visible=true').first();
  }

  /** Label FOMO "Últimas unidades" de la ficha (stock visible bajo el umbral). */
  get ultimasUnidades(): Locator {
    return this.core.getByText(/^[úu]ltimas unidades$/i).locator('visible=true').first();
  }

  /** Aviso del cartlimit ("Usted ha agregado la cantidad máxima de productos"). */
  get mensajeCantidadMaxima(): Locator {
    return this.page.getByText(/usted ha agregado la cantidad m[aá]xima de productos/i).first();
  }

  get marcaVisible(): Locator {
    return this.core.locator('a[href^="/search"]').locator('visible=true').first();
  }

  /**
   * Los textos de la ficha (fuera de tabs y carruseles), en orden de pantalla.
   *
   * Generaliza `datosDelProducto`: ahí viven los precios, el 💎 del precio de socio, los textos
   * "Lleva N por $X", "Pronto disponible" y el botón "Combina la promo" del producto, sin los de
   * las tarjetas del carrusel de similares, que cuelgan del mismo contenedor.
   */
  async textosDeLaFicha(): Promise<string[]> {
    return this.core.evaluate((core) => {
      const fuera = new Set<Element>();
      core.querySelectorAll('[role="tablist"], [role="tabpanel"]').forEach((el) => {
        fuera.add(el);
        el.querySelectorAll('*').forEach((h) => fuera.add(h));
      });
      return [...core.querySelectorAll('*')]
        .filter((el) => !fuera.has(el) && el.children.length === 0 && (el as HTMLElement).offsetParent !== null)
        .map((el) => (el.textContent ?? '').trim())
        .filter(Boolean);
    });
  }

  /**
   * El bloque de precios de la ficha, en orden vertical, con el peso visual de cada texto (B2C-51).
   *
   * Cada entrada es un precio ("$7.690", "$2.450 c/u", "Lleva 2 por $12.490", "3 por 2 a $4.900")
   * o un PPUM ("($15.380 x kg)"), con su tamaño de fuente y peso: "destacado" se mide por eso.
   * `socio` marca el precio que sigue al 💎 (precio de membresía).
   */
  async bloqueDePrecios(): Promise<
    { texto: string; tipo: 'precio' | 'compuesto' | 'ppum'; fontSize: number; fontWeight: number; y: number; socio: boolean }[]
  > {
    return this.core.evaluate((core) => {
      const fuera = new Set<Element>();
      core.querySelectorAll('[role="tablist"], [role="tabpanel"]').forEach((el) => {
        fuera.add(el);
        el.querySelectorAll('*').forEach((h) => fuera.add(h));
      });
      const hojas = [...core.querySelectorAll('*')].filter(
        (el) => !fuera.has(el) && el.children.length === 0 && (el as HTMLElement).offsetParent !== null,
      ) as HTMLElement[];
      type Entrada = { texto: string; tipo: 'precio' | 'compuesto' | 'ppum'; fontSize: number; fontWeight: number; y: number; socio: boolean };
      const out: Entrada[] = [];
      let socio = false;
      for (const el of hojas) {
        const t = (el.textContent ?? '').trim();
        if (t === '💎') {
          socio = true;
          continue;
        }
        let tipo: Entrada['tipo'] | null = null;
        if (/^\(\$[\d.]+ x /.test(t)) tipo = 'ppum';
        else if (/^(lleva\s+\d+\s+por\s+\$[\d.]+|\d+\s+por\s+\d+\s+a\s+\$[\d.]+)$/i.test(t)) tipo = 'compuesto';
        else if (/^\$[\d.]+(\s*c\/u)?$/.test(t)) tipo = 'precio';
        if (!tipo) continue;
        const cs = getComputedStyle(el);
        out.push({
          texto: t,
          tipo,
          fontSize: parseFloat(cs.fontSize),
          fontWeight: Number(cs.fontWeight),
          y: Math.round(el.getBoundingClientRect().top + window.scrollY),
          socio: tipo !== 'ppum' && socio,
        });
        if (tipo !== 'ppum') socio = false;
      }
      return out;
    });
  }

  /**
   * Las secciones de la PDP en el orden vertical en que se ven, de las que estén presentes.
   *
   * Breadcrumb, galería, bloque de info (ancla: Agregar), tabs, "Van bien juntos" y "Recomendados
   * para ti". Lo que no se renderiza no aparece en la lista.
   */
  async ordenDeSecciones(): Promise<{ nombre: string; y: number }[]> {
    const secciones: [string, Locator][] = [
      ['breadcrumb', this.breadcrumb.locator('visible=true').first()],
      ['galeria', this.galeriaMobile],
      // El bloque de información se ancla en la marca: el "Agregar" visible puede ser el de la
      // barra fija inferior, cuya posición depende del scroll y no del orden de la página.
      ['informacion', this.marcaVisible],
      ['tabs', this.listaDeTabs],
      ['van bien juntos', this.vanBienJuntos.locator('visible=true').first()],
      ['recomendados para ti', this.recomendadosParaTi.locator('visible=true').first()],
    ];
    const vistas: { nombre: string; y: number }[] = [];
    for (const [nombre, loc] of secciones) {
      if ((await loc.count()) === 0) continue;
      const y = await loc.evaluate((el) => el.getBoundingClientRect().top + window.scrollY).catch(() => null);
      if (y !== null) vistas.push({ nombre, y: Math.round(y) });
    }
    return vistas.sort((a, b) => a.y - b.y);
  }

  /** Lleva a la vista la lista de tabs. */
  async irATabs(): Promise<void> {
    await this.listaDeTabs.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(1500);
  }

  // ---------------------------------------------------------------- carga lenta y skeleton

  /**
   * Retrasa cada petición de la página, a la manera de un "Slow 3G": webkit no tiene el throttling
   * de red de DevTools, así que se frena por ruta. Se llama antes de navegar.
   */
  async ralentizarRed(ms = 600): Promise<void> {
    await this.page.route('**/*', async (route) => {
      await new Promise((r) => setTimeout(r, ms));
      await route.continue().catch(() => {});
    });
  }

  /**
   * Registra, desde antes del primer byte, si la página pasó por un estado de skeleton y si la
   * ficha (`unimarc-product-core`) ya estaba montada en ese momento. Un muestreo desde fuera se
   * pierde estados que duran milisegundos.
   */
  async registrarSkeletons(): Promise<void> {
    await this.page.addInitScript(() => {
      const w = window as unknown as { __skeleton: { max: number; conFicha: boolean; muestras: number } };
      w.__skeleton = { max: 0, conFicha: false, muestras: 0 };
      const medir = () => {
        const n = document.querySelectorAll('.chakra-skeleton, [class*="skeleton" i], [data-testid*="skeleton" i]').length;
        w.__skeleton.muestras += 1;
        if (n > w.__skeleton.max) w.__skeleton.max = n;
        if (n > 0 && document.querySelector('[data-testid="unimarc-product-core"]')) w.__skeleton.conFicha = true;
      };
      new MutationObserver(medir).observe(document, { childList: true, subtree: true, attributes: true });
      setInterval(medir, 50);
    });
  }

  async skeletonsRegistrados(): Promise<{ max: number; conFicha: boolean; muestras: number }> {
    return this.page.evaluate(() => (window as unknown as { __skeleton: { max: number; conFicha: boolean; muestras: number } }).__skeleton);
  }

  // ---------------------------------------------------------------- compartir

  /**
   * Instala una Web Share API que registra lo que la página comparte. Un navegador de teléfono
   * real la trae y abre con ella el share nativo; el webkit de Playwright no, y sin ella la PDP
   * cae a su diálogo propio ("Copiar enlace"), que no es el camino que certifica el TC.
   */
  async simularWebShare(): Promise<void> {
    await this.page.addInitScript(() => {
      const w = window as unknown as { __compartidos: unknown[] };
      w.__compartidos = [];
      Object.defineProperty(navigator, 'share', {
        configurable: true,
        value: async (datos: unknown) => {
          w.__compartidos.push(datos);
        },
      });
      Object.defineProperty(navigator, 'canShare', { configurable: true, value: () => true });
    });
  }

  async compartidos(): Promise<{ title?: string; url?: string; text?: string }[]> {
    return this.page.evaluate(() => (window as unknown as { __compartidos: { title?: string; url?: string }[] }).__compartidos ?? []);
  }

  /** ¿Queda el bloque principal completo dentro del viewport, sin necesidad de scroll? */
  async cabeEnLaPrimeraVista(elemento: Locator): Promise<boolean> {
    const caja = await elemento.boundingBox();
    const viewport = this.page.viewportSize();
    if (!caja || !viewport) return false;
    return caja.y >= 0 && caja.y + caja.height <= viewport.height;
  }

  // ---------------------------------------------------------------- ficha del producto (B2C-168)

  /**
   * El bloque de compra del producto, sin los carruseles: el contenedor más interno que tiene el
   * enlace de la marca (`/search?q=…`) y un "Agregar" o el stepper. `core` también envuelve
   * "Productos similares", cuyas tarjetas traen su propio "Agregar" y su propio "En carro": con un
   * producto similar en el carro, `cantidadEnCarro` leía la cantidad de ese otro producto. No se
   * ancla en "Compartir": en Mobile está junto a la imagen, fuera del bloque de compra (B2C-168).
   */
  get ficha(): Locator {
    return this.core
      .locator('div')
      .filter({ has: this.page.locator('a[href^="/search"]') })
      .filter({ has: this.page.getByRole('button', { name: /^(agregar|aumentar cantidad)$/i }) })
      .filter({ hasNot: this.page.getByRole('tablist') })
      .last();
  }

  /** "N un." de la ficha. */
  get cantidadEnFicha(): Locator {
    return this.ficha.getByText(/^en carro$/i).first().locator('xpath=following-sibling::*[1]');
  }

  /** Deja exactamente `n` unidades del producto en el carro, desde el stepper de la ficha. */
  async fijarCantidad(n: number): Promise<void> {
    const enCarro = async () =>
      (await this.cantidadEnFicha.isVisible().catch(() => false))
        ? Number(((await this.cantidadEnFicha.innerText()).match(/\d+/) ?? ['0'])[0])
        : 0;
    if ((await enCarro()) === 0 && n > 0) {
      await this.ficha.getByRole('button', { name: 'Agregar', exact: true }).locator('visible=true').first().click({ timeout: 20000 });
      await this.cantidadEnFicha.waitFor({ state: 'visible', timeout: 15000 });
    }
    for (let i = 0; i < 20; i++) {
      const v = await enCarro();
      if (v === n) return;
      const boton = v < n ? /^aumentar cantidad$/i : /^(disminuir cantidad|quitar del carro)$/i;
      await this.ficha.getByRole('button', { name: boton }).locator('visible=true').first().click({ timeout: 20000 });
      await this.page.waitForTimeout(2000);
    }
    throw new Error(`No se pudo dejar ${n} unidades en el carro (quedaron ${await enCarro()})`);
  }

  /** Nombre del producto tal como lo nombra el carro ("Eliminar <nombre>"): el título de la página. */
  async nombreParaElCarro(): Promise<string> {
    return (await this.page.title()).trim();
  }
}
