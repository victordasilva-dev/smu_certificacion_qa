import { Locator, Page } from '@playwright/test';

/** Lo que Page Designer declara para el componente (el `data` de su entrada en el HTML). */
export interface ConfigModuloBomba {
  id: string;
  presentation?: string;
  carouselControls?: boolean;
  carouselAutoPlay?: boolean;
  carouselAutoPlaySpeed?: number;
  populationMode?: string;
  category?: string;
  maxProducts?: string;
  endDate?: string;
  expiredMessage?: string;
  seeAllLabel?: string;
  logoCtaUrl?: string;
  slidesDesktop?: number;
  slidesMobile?: number;
  layoutBackground?: string;
  logoImage?: { url?: string };
  backgroundImage?: { url?: string };
  [k: string]: unknown;
}

/**
 * Módulo Bomba del Home/Landing — el objeto de la HU B2C-78.
 *
 * Es un componente, no una página: no extiende `BasePage`. No expone clase ni `data-*`
 * semántico (sus clases son hashes de Emotion), así que el ancla es la que da Page Designer: el
 * `typeId` `ux_assets.bombaModule` que el HTML trae embebido junto al `id` de la instancia, y ese
 * `id` es el del `div.component` que la pinta. Anclar por el `typeId` y no por el `id`
 * (`hp-bomba-hw` en DEV) evita depender del nombre que alguien le puso a la instancia.
 */
export class ModuloBomba {
  private static readonly TIPO = 'ux_assets.bombaModule';

  constructor(private readonly page: Page) {}

  /**
   * La configuración publicada del componente, leída del JSON de Page Designer embebido en el
   * HTML. Se recorta el objeto por balanceo de llaves desde el `{"data":` que precede al `typeId`.
   */
  async config(): Promise<ConfigModuloBomba | null> {
    return this.page.evaluate((tipo) => {
      const html = document.documentElement.outerHTML
        .replace(/\\+"/g, '"')
        .replace(/\\u002F/g, '/');
      const i = html.indexOf(`"typeId":"${tipo}"`);
      if (i === -1) return null;
      const ini = html.lastIndexOf('{"data":{', i);
      if (ini === -1) return null;
      let prof = 0;
      let fin = -1;
      for (let k = ini + 8; k < html.length; k++) {
        const c = html[k];
        if (c === '{') prof++;
        else if (c === '}') {
          prof--;
          if (prof === 0) {
            fin = k;
            break;
          }
        }
      }
      try {
        const data = JSON.parse(html.slice(ini + 8, fin + 1));
        const id = html.slice(fin, i).match(/"id":"([^"]+)"/)?.[1] ?? '';
        return { ...data, id };
      } catch {
        return null;
      }
    }, ModuloBomba.TIPO);
  }

  /** El `div.component` de la instancia; resuelve el id desde la configuración. */
  async root(): Promise<Locator> {
    const cfg = await this.config();
    if (!cfg?.id) throw new Error('El Módulo Bomba no está publicado en esta página');
    return this.page.locator(`div.component[id="${cfg.id}"]`);
  }

  /** Lleva el componente a la vista y le da tiempo a su carga diferida. */
  async enfocar(): Promise<Locator> {
    const root = await this.root();
    await root.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);
    return root;
  }

  async logo(): Promise<Locator> {
    return (await this.root()).locator('img').first();
  }

  async enlaceDelLogo(): Promise<Locator> {
    return (await this.root()).locator('a:has(img)').first();
  }

  /** El bomba badge: la cuenta regresiva "N días : N horas : N minutos : N segundos". */
  async cuentaRegresiva(): Promise<Locator> {
    return (await this.root())
      .locator('div')
      .filter({ hasText: /d[ií]as?\s*:.*segundos?/i })
      .last();
  }

  async swiper(): Promise<Locator> {
    return (await this.root()).locator('.swiper').first();
  }

  async slides(): Promise<Locator> {
    return (await this.root()).locator('.swiper-slide');
  }

  /** Controles prev/next del carrusel, si la instancia los tiene. */
  async controles(): Promise<Locator> {
    return (await this.root()).locator(
      'button:is([aria-label*="anterior" i], [aria-label*="siguiente" i], [aria-label*="prev" i], [aria-label*="next" i]), .swiper-button-prev, .swiper-button-next',
    );
  }

  /** Cuántas tarjetas caben enteras en el ancho de la pantalla. */
  async slidesVisibles(): Promise<number> {
    return (await this.root()).evaluate((el) =>
      [...el.querySelectorAll('.swiper-slide')].filter((s) => {
        const b = s.getBoundingClientRect();
        return b.width > 0 && b.left >= -2 && b.right <= window.innerWidth + 2;
      }).length,
    );
  }

  /** Estado del Swiper: índice activo, desplazamiento y autoplay declarados por la instancia. */
  async estadoDelCarrusel(): Promise<{
    indiceActivo: number;
    traslado: number;
    autoplayActivo: boolean;
    autoplayDelayMs: number | null;
  }> {
    return (await this.swiper()).evaluate((el) => {
      const sw = (el as HTMLElement & { swiper?: any }).swiper;
      return {
        indiceActivo: sw?.activeIndex ?? -1,
        traslado: Math.round(sw?.translate ?? 0),
        autoplayActivo: Boolean(sw?.autoplay?.running),
        autoplayDelayMs: sw?.params?.autoplay?.delay ?? null,
      };
    });
  }

  /** Ayuda de automatización: con autoplay la tarjeta nunca está quieta y el clic no ocurre. */
  async detenerAutoplay(): Promise<void> {
    await (await this.swiper()).evaluate((el) => {
      (el as HTMLElement & { swiper?: any }).swiper?.autoplay?.stop();
    });
    await this.page.waitForTimeout(800);
  }

  /** Si el carrusel está en su último tramo (no puede avanzar más hacia la izquierda). */
  async estaAlFinal(): Promise<boolean> {
    return (await this.swiper()).evaluate(
      (el) => Boolean((el as HTMLElement & { swiper?: any }).swiper?.isEnd),
    );
  }

  /**
   * Arrastra el carrusel con el puntero (el Swiper trae `simulateTouch`). `haciaAtras` desliza
   * de izquierda a derecha, para cuando el autoplay ya dejó el carrusel al final.
   */
  async arrastrar(haciaAtras = false): Promise<void> {
    const caja = await (await this.swiper()).boundingBox();
    if (!caja) throw new Error('El carrusel no tiene caja visible para arrastrar');
    const y = caja.y + caja.height / 2;
    const desde = caja.x + caja.width * (haciaAtras ? 0.1 : 0.85);
    const hasta = caja.x + caja.width * (haciaAtras ? 0.85 : 0.1);
    await this.page.mouse.move(desde, y);
    await this.page.mouse.down();
    for (let i = 1; i <= 6; i++) {
      await this.page.mouse.move(desde + ((hasta - desde) * i) / 6, y, { steps: 2 });
      await this.page.waitForTimeout(40);
    }
    await this.page.mouse.up();
    await this.page.waitForTimeout(1500);
  }

  /** La primera tarjeta que está entera dentro de la pantalla. */
  async indiceDeTarjetaVisible(): Promise<number> {
    return (await this.root()).evaluate((el) => {
      const i = [...el.querySelectorAll('.swiper-slide')].findIndex((s) => {
        const b = s.getBoundingClientRect();
        return b.width > 0 && b.left >= -2 && b.right <= window.innerWidth + 2;
      });
      return i === -1 ? 0 : i;
    });
  }

  /** Nombre y destino de una tarjeta: el enlace con texto lleva el nombre; el de imagen, la PDP. */
  async tarjeta(i: number): Promise<{ nombre: string; href: string; sku: string }> {
    return (await this.slides()).nth(i).evaluate((s) => {
      const enlaces = [...s.querySelectorAll('a')] as HTMLAnchorElement[];
      const conTexto = enlaces.find((a) => (a.textContent ?? '').trim());
      const img = s.querySelector('img') as HTMLImageElement | null;
      const href = (enlaces[0]?.getAttribute('href') ?? '').split('?')[0];
      return {
        nombre: (img?.alt || conTexto?.textContent || '').trim(),
        href,
        sku: href.match(/\/([^/]+)\.html$/)?.[1] ?? '',
      };
    });
  }

  /** Tarjeta en el índice dado, como locator, para clicar o capturar. */
  async slide(i: number): Promise<Locator> {
    return (await this.slides()).nth(i);
  }

  /** Geometría del bloque y de su contenido, para la estructura común y la presentación. */
  async geometria(): Promise<{
    viewport: number;
    componente: { x: number; ancho: number };
    fondo: string;
    logo: { x: number; y: number; ancho: number; alto: number } | null;
    cuenta: { x: number; y: number; ancho: number; derecha: number } | null;
    carruselX: number;
    carruselDerecha: number;
    headerX: number;
  }> {
    const root = await this.root();
    return root.evaluate((el) => {
      const r = (e: Element) => e.getBoundingClientRect();
      const conFondo = [el, ...el.querySelectorAll('div')].find(
        (d) => getComputedStyle(d).backgroundColor !== 'rgba(0, 0, 0, 0)',
      ) as HTMLElement | undefined;
      const logo = el.querySelector('img');
      const cuenta = [...el.querySelectorAll('div')]
        .filter((d) => /d[ií]as?\s*:/i.test(d.textContent ?? '') && /segundos?/i.test(d.textContent ?? ''))
        .pop();
      const sw = el.querySelector('.swiper');
      const headerLogo = document.querySelector('header button[aria-label="Unimarc"], header a[aria-label="Unimarc"]');
      const fondoR = r(conFondo ?? el);
      return {
        viewport: document.documentElement.clientWidth,
        componente: { x: Math.round(fondoR.x), ancho: Math.round(fondoR.width) },
        fondo: conFondo ? getComputedStyle(conFondo).backgroundColor : 'rgba(0, 0, 0, 0)',
        logo: logo
          ? {
              x: Math.round(r(logo).x),
              y: Math.round(r(logo).y - r(el).y),
              ancho: Math.round(r(logo).width),
              alto: Math.round(r(logo).height),
            }
          : null,
        cuenta: cuenta
          ? {
              x: Math.round(r(cuenta).x),
              y: Math.round(r(cuenta).y - r(el).y),
              ancho: Math.round(r(cuenta).width),
              derecha: Math.round(r(cuenta).right),
            }
          : null,
        carruselX: sw ? Math.round(r(sw).x) : -1,
        carruselDerecha: sw ? Math.round(r(sw).right) : -1,
        headerX: headerLogo ? Math.round(r(headerLogo).x) : -1,
      };
    });
  }

  /** Estado de la imagen del logo: si cargó y qué ocupa su lugar si no. */
  async estadoDelLogo(): Promise<{ hayImg: boolean; cargada: boolean; texto: string; alto: number }> {
    return (await this.root()).evaluate((el) => {
      const zona = (el.querySelector('a') ?? el) as HTMLElement;
      const img = zona.querySelector('img') as HTMLImageElement | null;
      return {
        hayImg: Boolean(img),
        cargada: Boolean(img && img.complete && img.naturalWidth > 0),
        texto: (zona.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 120),
        alto: Math.round((img ?? zona).getBoundingClientRect().height),
      };
    });
  }
}
