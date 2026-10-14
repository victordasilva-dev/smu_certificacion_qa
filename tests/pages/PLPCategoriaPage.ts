import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CookieConsentBanner } from './CookieConsentBanner';
import { HeaderFull } from './HeaderFull';
import { PanelFiltros } from './PanelFiltros';

/**
 * Listado de productos de una categoría (PLP) — el objeto de la HU B2C-35.
 *
 * Convive con `PLPPage`, que nació para B2C-31 con lo justo para llegar a una PDP desde el
 * listado. Aquí la PLP **es** lo que se certifica —breadcrumb, título, contador, orden, filtros,
 * píldoras, grilla y estados de error—, así que esta clase la modela entera. Fusionarlas dejaría
 * a B2C-31 arrastrando media suite de locators que no usa.
 */
export class PLPCategoriaPage extends BasePage {
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

  /**
   * Breadcrumb de la PLP.
   *
   * El `aria-label` va con **B mayúscula**, al revés que en la PDP, donde es `breadcrumb`. El
   * atributo se compara respetando mayúsculas, así que un selector escrito para una pantalla no
   * encuentra el de la otra — y el fallo se lee como "la PLP no tiene breadcrumb", que es
   * exactamente la conclusión equivocada.
   */
  get breadcrumb(): Locator {
    return this.page.locator('nav[aria-label="Breadcrumb"]');
  }

  get titulo(): Locator {
    return this.main.locator('h1');
  }

  /** Contador "N productos" que acompaña al título. */
  get contador(): Locator {
    return this.main.locator('p').filter({ hasText: /\d+\s+productos?/i }).first();
  }

  /** Control de orden. El `aria-label` lleva el valor vigente, por eso se busca por prefijo. */
  get botonOrdenar(): Locator {
    return this.page.locator('button[aria-label^="Ordenar"]');
  }

  get botonFiltros(): Locator {
    return this.page.locator('button[aria-label="Abrir filtros"]');
  }

  /**
   * El modal de filtros.
   *
   * Se filtra por su encabezado y no por `role=dialog` a secas: el dropdown de orden es también un
   * `dialog` con `aria-modal`, así que un locator por rol da por bueno el que esté abierto y el TC
   * pasa sin haber mirado el componente que le toca.
   */
  get modalFiltros(): Locator {
    return this.page.locator('[role="dialog"]').filter({ hasText: /selecciona tus filtros/i });
  }

  /** El dropdown de orden, distinguido del modal de filtros por sus opciones. */
  get dropdownOrden(): Locator {
    return this.page
      .locator('[role="dialog"]')
      .filter({ hasText: /precio m[áa]s bajo/i })
      .filter({ hasNotText: /selecciona tus filtros/i });
  }

  /**
   * Las tarjetas de producto de la grilla, por su nombre "Marca | Nombre": un botón en Desktop y un
   * enlace a la PDP en Mobile (en Desktop los enlaces de la tarjeta son solo de imagen, sin texto).
   */
  get tarjetas(): Locator {
    return this.main.locator('button, a[href$=".html"]').filter({ hasText: ' | ' });
  }

  /** La píldora que vuelve a la categoría padre. La UI la escribe "Todo"; los TC, "Todas". */
  get pildoraTodo(): Locator {
    return this.main.getByText(/^tod(o|as)$/i);
  }

  /** Las píldoras de subcategoría (N3) que cuelgan del N2 en curso. */
  pildorasDeSubcategoria(slugN2: string): Locator {
    return this.main.locator(`a[href^="/category/${slugN2}_"]`);
  }

  get readyLocator(): Locator {
    return this.titulo;
  }

  async goto(): Promise<this> {
    await super.goto();
    await this.cookies.aceptarSiAparece();
    await this.waitUntilReady();
    return this;
  }

  /** Número de productos que declara el contador de la cabecera. */
  async productosDeclarados(): Promise<number | null> {
    if (!(await this.contador.count())) return null;
    const texto = await this.contador.innerText();
    const match = texto.match(/(\d+)/);
    return match ? Number(match[1]) : null;
  }

  /** Los nodos del breadcrumb, con su destino: `href` null en el nodo actual. */
  async nodosDeBreadcrumb(): Promise<{ texto: string; href: string | null }[]> {
    return this.breadcrumb.evaluate((nav) =>
      [...nav.querySelectorAll('a, p, span, li')]
        .filter((el) => el.children.length === 0 && (el.textContent ?? '').trim())
        .map((el) => ({
          texto: (el.textContent ?? '').trim(),
          href: el.tagName === 'A' ? el.getAttribute('href') : null,
        })),
    );
  }

  /**
   * Posición vertical de cada componente de la PLP, para comprobar su orden.
   *
   * Devuelve `null` en los que no están configurados en esa categoría —banner principal, grid de
   * banners, SEO, paginación—, que es información y no un fallo: la HU dice que un componente sin
   * configurar no se renderiza. Quién decide qué hacer con esos nulos es el `test()`.
   */
  async ordenDeComponentes(): Promise<Record<string, number | null>> {
    return this.page.evaluate(() => {
      const y = (el: Element | null) =>
        el ? Math.round(el.getBoundingClientRect().top + window.scrollY) : null;
      const main = document.querySelector('main');
      const porTexto = (re: RegExp) =>
        [...(main?.querySelectorAll('p, h1, h2, a') ?? [])].find((el) =>
          re.test((el.textContent ?? '').trim()),
        ) ?? null;
      return {
        breadcrumb: y(document.querySelector('nav[aria-label="Breadcrumb"]')),
        titulo: y(main?.querySelector('h1') ?? null),
        contador: y(porTexto(/^\d+\s+productos?$/i)),
        filtros: y(document.querySelector('button[aria-label="Abrir filtros"]')),
        orden: y(document.querySelector('button[aria-label^="Ordenar"]')),
        pildoras: y(porTexto(/^tod(o|as)$/i)),
        grilla: y(
          [...(main?.querySelectorAll('button') ?? [])].find((b) =>
            (b.textContent ?? '').includes(' | '),
          ) ?? null,
        ),
        paginacion: y(
          [...(main?.querySelectorAll('nav') ?? [])].find(
            (n) => n.getAttribute('aria-label') !== 'Breadcrumb' && /\d/.test(n.textContent ?? ''),
          ) ?? null,
        ),
      };
    });
  }

  /** Abre el modal de filtros y espera a que esté montado. */
  async abrirFiltros(): Promise<Locator> {
    await this.botonFiltros.click();
    await this.modalFiltros.waitFor({ state: 'visible', timeout: 15000 });
    return this.modalFiltros;
  }

  /** Abre el dropdown de orden y espera a que esté montado. */
  async abrirOrden(): Promise<Locator> {
    await this.botonOrdenar.click();
    await this.dropdownOrden.waitFor({ state: 'visible', timeout: 15000 });
    return this.dropdownOrden;
  }

  /** Elige una opción del dropdown de orden y espera a que el listado se rehaga. */
  async ordenarPor(opcion: RegExp): Promise<void> {
    const dropdown = await this.abrirOrden();
    await dropdown.getByRole('button', { name: opcion }).click();
    await this.page.waitForTimeout(3000);
  }

  /**
   * Los precios de la grilla **agrupados por tarjeta**, en el orden en que se renderizan.
   *
   * Una lista plana de todos los importes no sirve para comprobar un orden: una tarjeta en oferta
   * muestra dos o tres precios —el vigente, el de socio y el "Antes:" tachado— y esos importes
   * extra rompen la secuencia sin que el listado esté mal ordenado. Aquí cada tarjeta aporta sus
   * precios juntos, y es el `test()` el que decide cuál representa a la tarjeta.
   *
   * El agrupado se apoya en el orden del DOM: dentro de una tarjeta los precios van antes del
   * nombre, así que al encontrar un nombre ("Marca | Producto") se cierra la tarjeta en curso.
   */
  async preciosPorTarjeta(): Promise<number[][]> {
    return this.main.evaluate((main) => {
      const tarjetas: number[][] = [];
      let actual: number[] = [];
      const hojas = [...main.querySelectorAll('p, button')];
      for (const el of hojas) {
        const texto = (el.textContent ?? '').trim();
        if (el.tagName === 'P' && /^\$[\d.]+$/.test(texto)) {
          actual.push(Number(texto.replace(/[^\d]/g, '')));
          continue;
        }
        if (el.tagName === 'BUTTON' && texto.includes(' | ')) {
          if (actual.length) tarjetas.push(actual);
          actual = [];
        }
      }
      if (actual.length) tarjetas.push(actual);
      return tarjetas;
    });
  }

  /**
   * ¿Cómo se ve marcada cada píldora?
   *
   * El storefront no expone `aria-current` ni `aria-selected` en las píldoras: la seleccionada se
   * distingue solo por estilo —borde oscuro y peso de fuente mayor—. Por eso la selección se lee
   * del estilo computado, y no por rol, que es donde una aserción "accesible" no encontraría nada.
   */
  /**
   * Espera a que la píldora de una subcategoría esté montada antes de leer su estado.
   *
   * Se busca por texto exacto en vez de armar una expresión regular con el nombre: los nombres de
   * categoría traen espacios y acentos, y escaparlos para una regex es una fuente de errores
   * gratuita cuando el locator ya sabe comparar texto exacto.
   */
  /** Los nombres de los productos de la grilla, en el orden en que se renderizan. */
  async ordenDeLaGrilla(): Promise<string[]> {
    return (await this.tarjetas.allInnerTexts()).map((t) => t.trim());
  }

  async esperarPildora(nombre: string): Promise<void> {
    await this.main
      .getByText(nombre, { exact: true })
      .first()
      .waitFor({ state: 'visible', timeout: 30000 });
  }

  async estadoDeLasPildoras(
    slugN2: string,
  ): Promise<{ texto: string; href: string | null; seleccionada: boolean }[]> {
    return this.main.evaluate((main, slug) => {
      const pildoras = [...main.querySelectorAll('a, button')].filter((el) => {
        const href = el.getAttribute('href') ?? '';
        const texto = (el.textContent ?? '').trim();
        return href.startsWith(`/category/${slug}`) || /^tod(o|as)$/i.test(texto);
      });
      return pildoras.map((el) => {
        const cs = getComputedStyle(el);
        const borde = cs.borderTopColor;
        const oscuro = /rgb\((\d+), (\d+), (\d+)\)/.exec(borde);
        const luminancia = oscuro
          ? (Number(oscuro[1]) + Number(oscuro[2]) + Number(oscuro[3])) / 3
          : 255;
        return {
          texto: (el.textContent ?? '').trim(),
          href: el.getAttribute('href'),
          seleccionada: luminancia < 120 || Number(cs.fontWeight) >= 500,
        };
      });
    }, slugN2);
  }

  /**
   * Abre el panel de filtros y devuelve su Page Object.
   *
   * Convive con `abrirFiltros()`, que devuelve el locator crudo y es lo que usa B2C-35 para mirar
   * el modal por encima. B2C-71 certifica el panel entero, así que necesita el componente
   * modelado; devolver el POM evita que el `test()` reconstruya selectores por su cuenta.
   */
  async abrirPanelDeFiltros(): Promise<PanelFiltros> {
    const panel = new PanelFiltros(this.page);
    await this.botonFiltros.click();
    await panel.esperarAbierto();
    return panel;
  }

  get panelDeFiltros(): PanelFiltros {
    return new PanelFiltros(this.page);
  }

  // --- Estado sin resultados tras filtrar (CA18 de B2C-71) -------------------------------------
  //
  // La UI escribe el título con el carácter "…" (U+2026) y "más" con tilde, mientras los TC lo
  // escriben con tres puntos y sin tildes. Los locators van con regex tolerante: un literal
  // copiado de la planilla no encontraría nada y el TC quedaría rechazado por el script, no por
  // el producto.

  get estadoVacio(): Locator {
    return this.main.filter({ hasText: /no hay productos con estos filtros/i });
  }

  get tituloSinResultados(): Locator {
    return this.page.getByText(/ups[.…\s]*no hay productos con estos filtros/i);
  }

  get descripcionSinResultados(): Locator {
    return this.page.getByText(/prueba eliminando algunos filtros para ver m[áa]s resultados/i);
  }

  get codigoSinResultados(): Locator {
    return this.page.getByText(/PLP-013/i);
  }

  get imagenSinResultados(): Locator {
    return this.main.locator('img').first();
  }

  get botonLimpiarFiltros(): Locator {
    return this.page.getByRole('button', { name: /limpiar filtros/i });
  }

  /**
   * ¿Hay un velo de carga sobre el listado?
   *
   * Busca cualquier elemento posicionado que cubra la grilla y sea semitransparente, esté
   * desenfocado o tenga fondo claro — sin atarse a una clase, que es justo lo que un rediseño
   * cambia. Devuelve lo que encontró para que el `test()` decida.
   */
  async velosSobreElListado(): Promise<{ fondo: string; opacidad: string; desenfoca: boolean }[]> {
    return this.page.evaluate(() => {
      const main = document.querySelector('main');
      if (!main) return [];
      const caja = main.getBoundingClientRect();
      return [...document.querySelectorAll('main *, body > div')]
        .filter((el) => {
          const cs = getComputedStyle(el);
          const r = el.getBoundingClientRect();
          if (cs.position !== 'absolute' && cs.position !== 'fixed') return false;
          if (r.width < caja.width * 0.5 || r.height < 150) return false;
          const semitransparente = Number(cs.opacity) < 1;
          const claro = /rgba?\(\s*255/.test(cs.backgroundColor);
          const desenfoca = cs.backdropFilter !== 'none' && cs.backdropFilter !== '';
          return semitransparente || claro || desenfoca;
        })
        .map((el) => {
          const cs = getComputedStyle(el);
          return {
            fondo: cs.backgroundColor,
            opacidad: cs.opacity,
            desenfoca: cs.backdropFilter !== 'none' && cs.backdropFilter !== '',
          };
        });
    });
  }

  /**
   * Muestrea el listado durante `ms` mientras corre `accion`, y dice si llegó a verse un velo.
   *
   * La carga dura menos de un segundo: una lectura posterior a la acción siempre llega tarde y
   * concluiría que el velo no existe sin haberlo buscado mientras ocurría.
   */
  async observarVeloDelListado(accion: () => Promise<void>, ms = 8000): Promise<boolean> {
    const visto = this.page
      .evaluate((limite) => {
        return new Promise<boolean>((resolve) => {
          const main = document.querySelector('main');
          if (!main) return resolve(false);
          const fin = Date.now() + limite;
          const tick = () => {
            const caja = main.getBoundingClientRect();
            const hay = [...document.querySelectorAll('main *, body > div')].some((el) => {
              const cs = getComputedStyle(el);
              const r = el.getBoundingClientRect();
              if (cs.position !== 'absolute' && cs.position !== 'fixed') return false;
              if (r.width < caja.width * 0.5 || r.height < 150) return false;
              if (el.closest('[role="dialog"]')) return false;
              if (el.classList.contains('chakra-modal__overlay')) return false;
              return (
                Number(cs.opacity) < 1 ||
                /rgba?\(\s*255/.test(cs.backgroundColor) ||
                (cs.backdropFilter !== 'none' && cs.backdropFilter !== '')
              );
            });
            if (hay) return resolve(true);
            if (Date.now() > fin) return resolve(false);
            requestAnimationFrame(tick);
          };
          tick();
        });
      }, ms)
      .catch(() => false);
    await accion();
    return visto;
  }

  /** Pantalla de error de carga de productos que declara la HU (CA16). */
  get errorDeCarga(): Locator {
    return this.page.getByText(/tuvimos problemas en cargar tus productos/i);
  }

  get codigoDeError(): Locator {
    return this.page.getByText(/NAV-005/i);
  }

  get reintentar(): Locator {
    return this.page.getByRole('button', { name: /reintentar/i });
  }

  get irAlInicio(): Locator {
    return this.page.getByRole('button', { name: /ir al inicio/i });
  }

  // --- Mobile 390x844 (B2C-35 M) ----------------------------------------------------------------
  //
  // En Mobile cambian tres cosas respecto de Desktop: el nombre de cada tarjeta es un enlace
  // (`a[href$=".html"]`, truncado con "…") y no un botón; el breadcrumb de una N3 se trunca a
  // Inicio > "…" > actual, con un botón "Mostrar todas las categorías"; y "Filtros" comparte fila
  // con las píldoras. El contador "N productos" existe en el DOM pero oculto.

  /** Nombre de la categoría de una URL de PLP, leído del `<h1>` que sirve el SSR. */
  static async nombreDeCategoria(page: Page, url: string): Promise<string> {
    const html = await (await page.request.get(url)).text();
    const h1 = html.match(/<h1[^>]*>([^<]+)<\/h1>/i)?.[1] ?? '';
    return h1.trim();
  }

  /** Contador "N productos" que efectivamente se ve. */
  get contadorVisible(): Locator {
    return this.main.locator('p').filter({ hasText: /^\s*\d+\s+productos?\s*$/i }).locator('visible=true').first();
  }

  get inicioDelBreadcrumb(): Locator {
    return this.breadcrumb.locator('a[aria-label="Ir al inicio"]');
  }

  /** El "…" que reemplaza a los nodos intermedios del breadcrumb en Mobile. */
  get puntosDelBreadcrumb(): Locator {
    return this.breadcrumb.getByRole('button', { name: /mostrar todas las categor/i });
  }

  /** Los nodos del breadcrumb que se ven, sin el ícono de Inicio. */
  async nodosVisiblesDeBreadcrumb(): Promise<{ texto: string; href: string | null }[]> {
    return this.breadcrumb.evaluate((nav) =>
      [...nav.querySelectorAll('a, p, button')]
        .filter((el) => (el as HTMLElement).offsetParent !== null && (el.textContent ?? '').trim() && el.getAttribute('aria-label') !== 'Ir al inicio')
        .map((el) => ({ texto: (el.textContent ?? '').trim(), href: el.tagName === 'A' ? el.getAttribute('href') : null })),
    );
  }

  /** Enlaces-nombre de las tarjetas de la grilla en Mobile. */
  get enlacesDeProducto(): Locator {
    return this.main.locator('a[href$=".html"]').filter({ hasText: /\S/ });
  }

  /** Las tarjetas de la grilla (ancladas en el corazón de favoritos, como `ShelfProducto`). */
  get shelvesMobile(): Locator {
    return this.main.locator('div:has(> div > button[aria-label="Guardar en favoritos"])').filter({ has: this.page.locator('a[href$=".html"]') });
  }

  /** Lo que muestra cada tarjeta de la grilla: imagen, nombre, precio y si ofrece Agregar. */
  async contenidoDeLasTarjetas(): Promise<{ nombre: string; imagen: boolean; precio: boolean; agregar: boolean; sinStock: boolean }[]> {
    // Las imágenes cargan en diferido: cada tarjeta se lleva a la vista antes de medir.
    const total = await this.shelvesMobile.count();
    for (let i = 0; i < total; i += 1) {
      await this.shelvesMobile.nth(i).scrollIntoViewIfNeeded().catch(() => {});
      await this.page.waitForTimeout(250);
    }
    await this.page.waitForTimeout(1500);
    return this.shelvesMobile.evaluateAll((tarjetas) =>
      tarjetas.map((t) => {
        const texto = (t as HTMLElement).innerText;
        const img = t.querySelector('img') as HTMLImageElement | null;
        return {
          nombre: ([...t.querySelectorAll('a[href$=".html"]')].map((a) => (a.textContent ?? '').trim()).find(Boolean) ?? ''),
          imagen: !!img && img.naturalWidth > 0,
          precio: /\$\s?[\d.]+/.test(texto),
          agregar: [...t.querySelectorAll('button')].some((b) => /^agregar$/i.test((b.textContent ?? '').trim())),
          sinStock: /pronto disponible/i.test(texto),
        };
      }),
    );
  }

  /**
   * SKU de cada tarjeta de la grilla (de la URL `.html` del producto) y su disponibilidad en
   * pantalla: `true` si ofrece "Agregar", `false` si muestra "Pronto disponible" (B2C-35 M-022).
   */
  async disponibilidadPorSku(): Promise<Record<string, boolean>> {
    await this.contenidoDeLasTarjetas();
    const filas = await this.shelvesMobile.evaluateAll((tarjetas) =>
      tarjetas.map((t) => {
        const href = t.querySelector('a[href$=".html"]')?.getAttribute('href') ?? '';
        const sku = href.match(/(\d{6,}-[A-Z]+)\.html$/)?.[1] ?? '';
        const texto = (t as HTMLElement).innerText;
        const agregar = [...t.querySelectorAll('button')].some((b) => /^agregar$/i.test((b.textContent ?? '').trim()));
        return { sku, disponible: agregar && !/pronto disponible/i.test(texto) };
      }),
    );
    return Object.fromEntries(filas.filter((f) => f.sku).map((f) => [f.sku, f.disponible]));
  }

  /**
   * Empieza a registrar la tienda que el sitio asigna a la dirección (`/stores?ids=<id>`, que trae
   * su `inventoryId`) y el token con que el sitio consulta productos. Se engancha antes de navegar.
   */
  observarTiendaAsignada(): { inventoryId?: string; tienda?: string; authorization?: string; productos?: string } {
    const estado: { inventoryId?: string; tienda?: string; authorization?: string; productos?: string } = {};
    this.page.on('request', (r) => {
      if (/\/shopper-products\/v1\/organizations\/[^/]+\/products\?ids=/.test(r.url()) && !estado.authorization) {
        estado.authorization = r.headers()['authorization'];
        estado.productos = r.url().split('?')[0];
      }
    });
    this.page.on('response', async (r) => {
      if (!/\/stores\?ids=/.test(r.url()) || !r.ok()) return;
      const cuerpo = await r.json().catch(() => null);
      const tienda = cuerpo?.data?.[0];
      if (tienda?.inventoryId) Object.assign(estado, { inventoryId: tienda.inventoryId, tienda: String(tienda.id) });
    });
    return estado;
  }

  /**
   * Disponibilidad (`orderable`) de los SKU en el inventario de una tienda, consultada a la misma
   * API de productos que usa el sitio, con su token. Es la fuente de verdad del "stock de la tienda
   * asignada" contra la que se compara lo que muestra la grilla.
   */
  async disponibilidadEnInventario(
    skus: string[],
    inventoryId: string,
    acceso: { authorization?: string; productos?: string },
  ): Promise<Record<string, boolean>> {
    const resultado: Record<string, boolean> = {};
    for (let i = 0; i < skus.length; i += 20) {
      const ids = skus.slice(i, i + 20).join(',');
      const url = `${acceso.productos}?ids=${encodeURIComponent(ids)}&inventoryIds=${inventoryId}&siteId=Unimarc&locale=es-CL&currency=CLP`;
      const res = await this.page.request.get(url, { headers: { authorization: acceso.authorization ?? '', accept: 'application/json' } });
      const cuerpo = await res.json();
      for (const p of cuerpo.data ?? []) {
        const inv = (p.inventories ?? []).find((x: { id: string }) => x.id === inventoryId);
        resultado[p.id] = !!inv?.orderable && (inv?.ats ?? 0) > 0;
      }
    }
    return resultado;
  }

  /** La fila de píldoras: el contenedor con scroll horizontal que contiene "Todo". */
  async filaDePildoras(): Promise<{ scrollWidth: number; clientWidth: number; scrollLeft: number } | null> {
    return this.main.evaluate((main) => {
      const todo = [...main.querySelectorAll('a, button')].find((e) => /^tod(o|as)$/i.test((e.textContent ?? '').trim()));
      let el = todo?.parentElement ?? null;
      while (el && el.scrollWidth <= el.clientWidth + 1) el = el.parentElement;
      return el ? { scrollWidth: el.scrollWidth, clientWidth: el.clientWidth, scrollLeft: Math.round(el.scrollLeft) } : null;
    });
  }

  /**
   * Desliza la fila de píldoras como lo haría un dedo: rueda horizontal sobre la fila. Devuelve
   * el desplazamiento de la fila y si la página se movió o se deformó (scroll vertical o ancho del
   * documento).
   */
  async deslizarPildoras(px: number): Promise<{ antes: number; despues: number; scrollYAntes: number; scrollYDespues: number; anchoDoc: number }> {
    const todo = this.pildoraTodo.locator('visible=true').first();
    await todo.scrollIntoViewIfNeeded();
    const antes = (await this.filaDePildoras())?.scrollLeft ?? 0;
    const scrollYAntes = await this.posicionDeScroll();
    const caja = await todo.boundingBox();
    await this.page.mouse.move((caja?.x ?? 0) + 150, (caja?.y ?? 0) + (caja?.height ?? 0) / 2);
    await this.page.mouse.wheel(px, 0);
    await this.page.waitForTimeout(1200);
    return {
      antes,
      despues: (await this.filaDePildoras())?.scrollLeft ?? 0,
      scrollYAntes,
      scrollYDespues: await this.posicionDeScroll(),
      anchoDoc: await this.page.evaluate(() => document.documentElement.scrollWidth),
    };
  }

  /** Qué hay entre el breadcrumb y el título: separación en px e imágenes intercaladas. */
  async entreBreadcrumbYTitulo(): Promise<{ separacion: number; imagenes: number }> {
    return this.page.evaluate(() => {
      const bc = document.querySelector('nav[aria-label="Breadcrumb"]')!.getBoundingClientRect();
      const h1 = document.querySelector('main h1')!.getBoundingClientRect();
      const imagenes = [...document.querySelectorAll('main img')].filter((i) => {
        const r = i.getBoundingClientRect();
        return r.height > 0 && r.top >= bc.bottom - 1 && r.bottom <= h1.top + 1;
      }).length;
      return { separacion: Math.round(h1.top - bc.bottom), imagenes };
    });
  }

  /** Posición vertical de cada componente en Mobile (null = no está o no se ve). */
  async ordenDeComponentesMobile(): Promise<Record<string, number | null>> {
    return this.page.evaluate(() => {
      const vis = (el: Element | null | undefined) => (el && (el as HTMLElement).offsetParent !== null ? el : null);
      const y = (el: Element | null | undefined) => (vis(el) ? Math.round(el!.getBoundingClientRect().top + window.scrollY) : null);
      const main = document.querySelector('main')!;
      const visibles = (sel: string) => [...main.querySelectorAll(sel)].filter((e) => (e as HTMLElement).offsetParent !== null);
      const ordenar = [...document.querySelectorAll('button[aria-label^="Ordenar"]')].find((b) => (b as HTMLElement).offsetParent !== null && b.getBoundingClientRect().height > 0);
      return {
        breadcrumb: y(document.querySelector('nav[aria-label="Breadcrumb"]')),
        titulo: y(main.querySelector('h1')),
        contador: y(visibles('p').find((p) => /^\s*\d+\s+productos?\s*$/i.test(p.textContent ?? ''))),
        filtros: y(visibles('button[aria-label="Abrir filtros"]')[0]),
        pildoras: y(visibles('a, button').find((e) => /^tod(o|as)$/i.test((e.textContent ?? '').trim()))),
        grilla: y(visibles('a[href$=".html"]').find((a) => (a.textContent ?? '').includes(' | '))),
        ordenarPor: ordenar ? Math.round(ordenar.getBoundingClientRect().top + window.scrollY) : null,
      };
    });
  }

  // --- carga lenta, skeleton y errores (CA15/CA16) ----------------------------------------------

  /** Registra, desde antes del primer byte, el máximo de nodos de skeleton que se vieron. */
  async registrarSkeletons(): Promise<void> {
    await this.page.addInitScript(() => {
      const w = window as unknown as { __skeleton: { max: number } };
      w.__skeleton = { max: 0 };
      const medir = () => {
        // El storefront pinta varios skeletons sin la clase de Chakra: bloques grises con una
        // animación CSS de pulso. Se cuentan las dos formas.
        const conClase = document.querySelectorAll('.chakra-skeleton, [class*="skeleton" i], [data-testid*="skeleton" i]').length;
        const animados = [...document.querySelectorAll('main *')].filter((e) => {
          const cs = getComputedStyle(e);
          return cs.animationName !== 'none' && (e as HTMLElement).getBoundingClientRect().height > 30 && !(e.textContent ?? '').trim();
        }).length;
        const n = conClase + animados;
        if (n > w.__skeleton.max) w.__skeleton.max = n;
      };
      new MutationObserver(medir).observe(document, { childList: true, subtree: true, attributes: true });
      setInterval(medir, 50);
    });
  }

  async skeletonsRegistrados(): Promise<number> {
    return this.page.evaluate(() => (window as unknown as { __skeleton?: { max: number } }).__skeleton?.max ?? 0);
  }

  /** Nodos de skeleton en pantalla ahora mismo. */
  async skeletonsAhora(): Promise<number> {
    return this.page.evaluate(() => {
      const conClase = document.querySelectorAll('.chakra-skeleton, [class*="skeleton" i]').length;
      const animados = [...document.querySelectorAll('main *')].filter((e) => {
        const cs = getComputedStyle(e);
        return cs.animationName !== 'none' && (e as HTMLElement).getBoundingClientRect().height > 30 && !(e.textContent ?? '').trim();
      }).length;
      return conClase + animados;
    });
  }

  /** Retrasa cada petición de la página (equivalente a "Slow 3G": webkit no trae ese throttling). */
  async ralentizarRed(ms = 600): Promise<void> {
    await this.page.route('**/*', async (route) => {
      await new Promise((r) => setTimeout(r, ms));
      await route.continue().catch(() => {});
    });
  }

  /**
   * La consulta de productos de la PLP de una categoría. Solo existe cuando se llega navegando
   * dentro del sitio: por URL directa la grilla llega renderizada desde el servidor.
   */
  private consultaDeProductos(slug: string): RegExp {
    return new RegExp(`/shopper-search/.*/product-search\\?.*refine=cgid%3D${slug}(&|$)`);
  }

  /** Retiene la consulta de productos `ms` y luego la deja pasar (o la corta si `abortar`). */
  async retenerProductos(slug: string, ms: number, abortar = false): Promise<void> {
    await this.page.route(this.consultaDeProductos(slug), async (route) => {
      await new Promise((r) => setTimeout(r, ms));
      if (abortar) await route.abort('timedout').catch(() => {});
      else await route.continue().catch(() => {});
    });
  }

  /** Bloquea la consulta de productos (Network request blocking). */
  async bloquearProductos(slug: string): Promise<void> {
    await this.page.route(this.consultaDeProductos(slug), (route) => route.abort('blockedbyclient'));
  }

  async liberarProductos(): Promise<void> {
    await this.page.unrouteAll({ behavior: 'ignoreErrors' });
  }

  async desplazarA(y: number): Promise<number> {
    await this.page.evaluate((destino) => window.scrollTo(0, destino), y);
    await this.page.waitForTimeout(1200);
    return this.page.evaluate(() => Math.round(window.scrollY));
  }

  async posicionDeScroll(): Promise<number> {
    return this.page.evaluate(() => Math.round(window.scrollY));
  }
}
