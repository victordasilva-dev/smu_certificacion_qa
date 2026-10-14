import { Locator, Page } from '@playwright/test';
import { CookiePolicyDrawer } from './CookiePolicyDrawer';

/**
 * Banner de consentimiento de cookies del storefront.
 *
 * Es el componente bajo prueba de B2C-30, y a la vez un estorbo para otras suites: en Mobile
 * 390x844 queda anclado al pie y **intercepta los clics sobre el footer**. Por eso convive aquí
 * lo que necesitan las dos audiencias — `aceptarSiAparece()` para las suites que solo quieren
 * quitarlo de en medio, y los locators y acciones granulares para los TC que lo certifican.
 *
 * Los botones se localizan **siempre scopeados al banner**: cuando el drawer de la Política de
 * cookies está abierto, su pie repite "Aceptar" y "Rechazar todas" con el mismo aria-label, y un
 * locator a nivel de página resuelve a dos elementos y rompe por strict mode.
 */
export class CookieConsentBanner {
  readonly root: Locator;
  readonly politica: CookiePolicyDrawer;

  constructor(private readonly page: Page) {
    this.root = page.locator('[data-testid="cookie-consent-banner"]');
    this.politica = new CookiePolicyDrawer(page);
  }

  get aceptar(): Locator {
    return this.root.locator('button[aria-label="Aceptar todas las cookies"]');
  }

  get rechazarTodas(): Locator {
    return this.root.locator('button[aria-label="Rechazar todas las cookies opcionales"]');
  }

  /**
   * El enlace a la Política de cookies del banner.
   *
   * Es un `<button>` y no un `<a>`: abre el drawer en la misma página en vez de navegar, así que
   * `getByRole('link')` no lo encuentra. El nombre va como regex tolerante a tildes porque la
   * planilla de TC escribe "Politica" y la UI renderiza "Política".
   */
  get enlacePolitica(): Locator {
    return this.root.getByRole('button', { name: /pol[ií]tica de cookies/i });
  }

  get mensaje(): Locator {
    return this.root.getByText(/usamos cookies para mejorar/i);
  }

  /** Abre el drawer de la Política de cookies y espera a que esté montado. */
  async abrirPolitica(): Promise<CookiePolicyDrawer> {
    await this.enlacePolitica.click();
    await this.politica.root.waitFor({ state: 'visible', timeout: 15000 });
    return this.politica;
  }

  /** Acepta desde el banner y espera a que desaparezca. */
  async clicAceptar(): Promise<void> {
    await this.aceptar.click();
    await this.root.waitFor({ state: 'detached', timeout: 15000 });
  }

  /** Rechaza las cookies opcionales desde el banner y espera a que desaparezca. */
  async clicRechazarTodas(): Promise<void> {
    await this.rechazarTodas.click();
    await this.root.waitFor({ state: 'detached', timeout: 15000 });
  }

  /**
   * Cierra el banner sin decidir, haciendo clic fuera de él.
   *
   * El punto del clic se busca en tiempo de ejecución en vez de fijarse, porque las dos formas
   * obvias de escribirlo fallan y lo hacen de manera intermitente:
   *
   * - Un punto del fondo de la página resuelve a `<html>`, y el storefront **ignora a propósito**
   *   el `mousedown` cuyo target sea el documento: el banner no se cierra y el TC caduca.
   * - Un punto sobre el contenido cae en el carrusel del hero, que es un enlace y además rota:
   *   el clic descarta el banner y acto seguido navega, la ruta nueva vuelve a montarlo, y el TC
   *   ve el banner reaparecer. Según qué imagen estuviera en pantalla, unas veces falla al
   *   comprobar que se cerró y otras al comprobar que sigue cerrado.
   *
   * Por eso se recorre el viewport hasta dar con un punto que esté fuera del banner, que resuelva
   * a un elemento real y que no pertenezca a ningún control navegable.
   */
  async cerrarSinDecidir(): Promise<{ x: number; y: number }> {
    const punto = await this.page.evaluate(() => {
      const banner = document.querySelector('[data-testid="cookie-consent-banner"]');
      const caja = banner?.getBoundingClientRect();
      const dentroDelBanner = (x: number, y: number) =>
        !!caja && x >= caja.left && x <= caja.right && y >= caja.top && y <= caja.bottom;
      const navegable = 'a, button, input, select, textarea, [role="button"], [role="link"]';
      for (let y = 8; y < window.innerHeight - 8; y += 12) {
        for (const x of [8, window.innerWidth / 2, window.innerWidth - 8]) {
          if (dentroDelBanner(x, y)) continue;
          const el = document.elementFromPoint(x, y);
          if (!el || el === document.documentElement) continue;
          if (el.closest(navegable)) continue;
          return { x, y };
        }
      }
      return null;
    });
    if (!punto) {
      throw new Error(
        'No se encontró en el viewport ningún punto fuera del banner que no sea un control navegable',
      );
    }
    await this.page.mouse.click(punto.x, punto.y);
    await this.root.waitFor({ state: 'detached', timeout: 15000 });
    return punto;
  }

  /** Estado de consentimiento persistido en la cookie del storefront. */
  async consentimientoRegistrado(): Promise<string | undefined> {
    const cookies = await this.page.context().cookies();
    return cookies.find((c) => c.name === 'smu_cookie_consent')?.value;
  }

  /** Vigencia en días de la cookie de consentimiento, o null si es de sesión / no existe. */
  async vigenciaConsentimientoEnDias(): Promise<number | null> {
    const cookies = await this.page.context().cookies();
    const cookie = cookies.find((c) => c.name === 'smu_cookie_consent');
    if (!cookie || cookie.expires === -1) return null;
    return Math.round((cookie.expires * 1000 - Date.now()) / 86400000);
  }

  /** Valor de `dw_dnt`: '0' con consentimiento aceptado, '1' con rechazo, undefined sin decisión. */
  async dnt(): Promise<string | undefined> {
    const cookies = await this.page.context().cookies();
    return cookies.find((c) => c.name === 'dw_dnt')?.value;
  }

  /** Marca de "sin decisión" que el storefront deja en sessionStorage (vive por pestaña). */
  async marcadoSinDecision(): Promise<boolean> {
    return this.page.evaluate(
      () => window.sessionStorage.getItem('smu_cookie_consent_dismissed') === '1',
    );
  }

  /** Nombres de las cookies activas en el contexto, para comprobar las esenciales. */
  async nombresDeCookies(): Promise<string[]> {
    return (await this.page.context().cookies()).map((c) => c.name);
  }

  /**
   * Acepta el banner si está presente, y espera a que desaparezca.
   *
   * Es tolerante a que no aparezca: el consentimiento queda guardado en el navegador y una
   * corrida que reutilice el estado no lo vería. Un `waitFor` estricto convertiría esa variante
   * normal en un fallo del TC.
   */
  async aceptarSiAparece(timeout = 2500): Promise<boolean> {
    // El consentimiento persiste en el contexto: a partir de la segunda navegación el banner ya
    // no aparece. La espera es corta a propósito — con un timeout largo, cada carga de página
    // regalaba esos segundos al reloj del TC, y un caso que recorre varias pantallas agotaba su
    // presupuesto esperando algo que ya no iba a salir.
    try {
      await this.aceptar.waitFor({ state: 'visible', timeout });
    } catch {
      return false;
    }
    await this.aceptar.click();
    await this.root.waitFor({ state: 'detached', timeout: 10000 });
    return true;
  }
}
