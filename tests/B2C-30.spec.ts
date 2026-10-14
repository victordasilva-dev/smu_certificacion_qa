import { test, expect } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaConConsentimiento } from './pages/PaginaConConsentimiento';

/**
 * B2C-30 — Consentimiento de cookies en el storefront.
 *
 * Están aquí los 13 TC de la planilla que se pudieron ejecutar. Los otros 7 quedaron `Bloqueado`
 * antes de generar su `test()`:
 *
 * - D-013 y D-015, por data: los tokens de fecha están en TBD en el Excel de data, y D-015 se
 *   ejecuta con una cuenta registrada "con productos frecuentes" que su columna `Test data` no
 *   declara (además, su resultado esperado dice "Pendiente de definir").
 * - D-006 y D-007, porque verifican cuatro categorías de cookies esenciales —Sesión,
 *   Carrito/Estado, Preferencias, Experiencia básica— y ni la planilla ni la HU declaran qué
 *   cookie concreta corresponde a cada categoría. Elegir el mapeo aquí haría que el veredicto
 *   dependiera de una suposición nuestra.
 * - D-008, D-009 y D-014, porque el ambiente DEV no integra Google Analytics/GTM, Marketing Cloud
 *   ni retargeting: no hay script ni llamada de red de esos proveedores. Sin ellos no se puede
 *   comprobar ni su activación con consentimiento Aceptado ni su desactivación con Rechazado, y
 *   un verde sobre "no hay llamadas" no diría nada del gating que la HU entrega.
 *
 * Dos detalles que valen para toda la suite:
 *
 * - La UI lleva tildes ("más segura", "Política de cookies") y la planilla las escribe sin ellas.
 *   Todos los textos se comprueban con regex tolerante: con el literal del Excel, el TC fallaría
 *   por un defecto del script y no del producto.
 * - `PaginaConConsentimiento` navega sin aceptar el banner, a diferencia de `HomePage` y
 *   `StorefrontPage`, que lo descartan en su `goto()` para poder trabajar. Aquí el banner es el
 *   objeto bajo prueba.
 */

test.describe('B2C-30 — Consentimiento de cookies', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C30-D-001 · Banner de cookies visible en primera visita en Desktop (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C30-D-001';
      test.setTimeout(120000);

      // Paso 1 — el contexto de Playwright nace sin cookies, que es la sesión limpia del TC.
      // Pasos 2 y 3 — navegar al Home y mirar el pie de la pantalla.
      const home = new PaginaConConsentimiento(page);
      await home.goto();
      const banner = await home.esperarBanner();
      await home.capturarEvidencia(cp, 2, 'Home cargado en primera visita');

      await expect(banner.mensaje, 'el banner trae el texto de consentimiento').toBeVisible();
      await expect(
        banner.enlacePolitica,
        'el banner ofrece el acceso a la Política de cookies',
      ).toBeVisible();
      await expect(banner.aceptar, 'el banner ofrece "Aceptar"').toBeVisible();
      await expect(banner.rechazarTodas, 'el banner ofrece "Rechazar todas"').toBeVisible();
      await expect(banner.aceptar).toHaveText(/aceptar/i);
      await expect(banner.rechazarTodas).toHaveText(/rechazar todas/i);
      await home.capturarEvidencia(cp, 3, 'banner de cookies al pie de la pantalla', {
        elemento: banner.root,
      });

      // "Banner fijo en la parte inferior": position fixed y anclado al pie del viewport.
      const anclaje = await banner.root.evaluate((el) => {
        const caja = el.getBoundingClientRect();
        return {
          position: getComputedStyle(el).position,
          distanciaAlPie: window.innerHeight - caja.bottom,
        };
      });
      expect(anclaje.position, 'el banner está fijo respecto del viewport').toBe('fixed');
      expect(anclaje.distanciaAlPie, 'el banner queda anclado a la parte inferior').toBeLessThan(120);

      // "El contenido principal no queda bloqueado y el usuario puede navegar libremente".
      const bloqueo = await home.contenidoBloqueado();
      expect(bloqueo.scrollBloqueado, 'la página no queda con el scroll congelado').toBe(false);
      expect(bloqueo.hayBackdrop, 'no hay un backdrop que intercepte los clics').toBe(false);
      expect(
        bloqueo.porcentajeDeViewportTapado,
        'el banner ocupa solo una franja del viewport',
      ).toBeLessThan(35);
      const desplazamiento = await home.desplazar(600);
      expect(desplazamiento, 'la página se puede desplazar con el banner presente').toBeGreaterThan(0);
      await expect(banner.root, 'el banner sigue visible tras desplazar').toBeVisible();
      await home.capturarEvidencia(cp, 3, 'contenido navegable con el banner presente');
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C30-D-002 · Aceptar cookies habilita los servicios opcionales y oculta el banner (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C30-D-002';
      test.setTimeout(120000);

      // Paso 1 — llegar a una página con el banner visible y sin decisión previa.
      const home = new PaginaConConsentimiento(page);
      await home.goto();
      const banner = await home.esperarBanner();
      expect(await banner.consentimientoRegistrado(), 'no hay decisión previa').toBeUndefined();
      await home.capturarEvidencia(cp, 1, 'banner visible sin decisión previa', {
        elemento: banner.root,
      });

      // Paso 2 — aceptar.
      await banner.clicAceptar();
      await expect(banner.root, 'el banner desaparece tras aceptar').toBeHidden();
      await home.capturarEvidencia(cp, 2, 'Home sin banner tras aceptar');

      // "El sistema registra el consentimiento" y "las cookies opcionales quedan habilitadas":
      // el storefront lo materializa en la cookie de consentimiento y en dw_dnt, el flag con el
      // que Commerce Cloud habilita o corta el seguimiento de la sesión.
      expect(await banner.consentimientoRegistrado(), 'el consentimiento queda registrado').toBe(
        'accepted',
      );
      // dw_dnt no se escribe en el mismo tick que el clic: el storefront confirma el
      // consentimiento contra el backend y recién entonces fija el flag. Se espera por el valor
      // en vez de leerlo una vez, que es lo que hacía fallar el caso sin que nada estuviera mal.
      await expect
        .poll(() => banner.dnt(), {
          message: 'el seguimiento queda habilitado para la sesión (dw_dnt=0)',
          timeout: 20000,
        })
        .toBe('0');
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C30-D-003 · Banner no reaparece en visitas posteriores tras aceptar cookies (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C30-D-003';
      test.setTimeout(120000);

      // Paso 1 — aceptar en la primera visita.
      const primeraVisita = new PaginaConConsentimiento(page);
      await primeraVisita.goto();
      const banner = await primeraVisita.esperarBanner();
      await banner.clicAceptar();
      await primeraVisita.capturarEvidencia(cp, 1, 'consentimiento aceptado en la primera visita');

      // Paso 2 — cerrar la pestaña y volver a abrir el sitio. Una pestaña nueva del mismo
      // contexto es la nueva visita del TC: conserva las cookies del navegador y estrena
      // sessionStorage, igual que quien vuelve al sitio más tarde.
      const nuevaPestana = await page.context().newPage();
      const segundaVisita = new PaginaConConsentimiento(nuevaPestana);
      await segundaVisita.goto();

      // Paso 3 — navegar por el sitio.
      await segundaVisita.desplazar(600);
      await expect(
        segundaVisita.cookies.root,
        'el banner no vuelve a aparecer mientras el consentimiento esté vigente',
      ).toBeHidden();
      expect(await segundaVisita.cookies.consentimientoRegistrado()).toBe('accepted');
      await segundaVisita.capturarEvidencia(cp, 3, 'nueva visita sin banner');
      await segundaVisita.capturarEvidencia(cp);
      await nuevaPestana.close();
    });

    test('TC-B2C30-D-004 · Cierre sin accion registra estado sin decision y desactiva SDKs opcionales (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C30-D-004';
      test.setTimeout(120000);

      // Paso 1 — página con el banner visible.
      const home = new PaginaConConsentimiento(page);
      await home.goto();
      const banner = await home.esperarBanner();
      await home.capturarEvidencia(cp, 1, 'banner visible sin decisión previa', {
        elemento: banner.root,
      });

      // Paso 2 — hacer clic fuera del banner, sin elegir ninguna opción. El clic va sobre un
      // elemento real de la página: el storefront ignora el que cae sobre el fondo puro (<html>).
      await banner.cerrarSinDecidir();
      await expect(banner.root, 'el banner se cierra sin haber elegido').toBeHidden();
      await home.capturarEvidencia(cp, 2, 'Home tras cerrar el banner sin decidir');

      expect(
        await banner.marcadoSinDecision(),
        'el sistema registra el estado como "sin decisión"',
      ).toBe(true);
      expect(
        await banner.consentimientoRegistrado(),
        'no se registra ningún consentimiento',
      ).toBeUndefined();
      // Sin decisión, el storefront no habilita el seguimiento: no fija dw_dnt=0 ni monta la capa
      // de datos de analítica, que es donde este storefront vuelca los eventos de marketing.
      expect(await banner.dnt(), 'no se habilita el seguimiento de la sesión').not.toBe('0');
      expect(
        await page.evaluate(() => typeof (window as { dataLayer?: unknown }).dataLayer),
        'la capa de datos de analítica no se inicializa',
      ).toBe('undefined');
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C30-D-005 · Banner reaparece en la proxima sesion tras cierre sin accion (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C30-D-005';
      test.setTimeout(120000);

      // Paso 1 — dejar el banner sin decisión en una sesión.
      const primeraSesion = new PaginaConConsentimiento(page);
      await primeraSesion.goto();
      const banner = await primeraSesion.esperarBanner();
      await banner.cerrarSinDecidir();
      expect(await banner.marcadoSinDecision()).toBe(true);
      await primeraSesion.capturarEvidencia(cp, 1, 'banner cerrado sin decisión');

      // Paso 2 — iniciar una nueva sesión. El estado "sin decisión" vive en sessionStorage, que es
      // por pestaña: una pestaña nueva es exactamente la sesión nueva que describe el TC.
      const nuevaSesion = await page.context().newPage();
      const segundaSesion = new PaginaConConsentimiento(nuevaSesion);
      await segundaSesion.goto();

      // Paso 3 — navegar a una página del sitio.
      await expect(
        segundaSesion.cookies.root,
        'el banner reaparece al inicio de la nueva sesión',
      ).toBeVisible({ timeout: 30000 });
      await segundaSesion.capturarEvidencia(cp, 3, 'banner de nuevo visible en la nueva sesión', {
        elemento: segundaSesion.cookies.root,
      });
      await segundaSesion.capturarEvidencia(cp);
      await nuevaSesion.close();
    });

    test('TC-B2C30-D-010 · Acceso a Politica de cookies abre modal en Desktop (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C30-D-010';
      test.setTimeout(120000);

      // Paso 1 — página con el banner visible.
      const home = new PaginaConConsentimiento(page);
      await home.goto();
      const banner = await home.esperarBanner();
      await home.capturarEvidencia(cp, 1, 'banner visible con el enlace a la política', {
        elemento: banner.root,
      });

      // Paso 2 — abrir la Política de cookies.
      const politica = await banner.abrirPolitica();
      await expect(politica.root, 'se abre el contenedor de la Política de cookies').toBeVisible();
      expect(await politica.esModal(), 'el contenedor se abre en modo modal').toBe(true);
      await expect(politica.titulo, 'trae el título de la política').toHaveText(
        /pol[ií]tica de cookies/i,
      );
      expect(
        await politica.secciones.count(),
        'trae el contenido de la política, no solo el armazón',
      ).toBeGreaterThan(0);
      await home.capturarEvidencia(cp, 2, 'Política de cookies abierta sobre el Home');

      // "El banner permanece visible en la pagina original hasta que el usuario elija".
      await expect(banner.root, 'el banner sigue visible mientras se lee la política').toBeVisible();
      expect(
        await banner.consentimientoRegistrado(),
        'abrir la política no decide por el usuario',
      ).toBeUndefined();
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C30-D-011 · Rechazar todas registra el rechazo y oculta el banner (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C30-D-011';
      test.setTimeout(120000);

      // Paso 1 — página con el banner visible.
      const home = new PaginaConConsentimiento(page);
      await home.goto();
      const banner = await home.esperarBanner();
      const esencialesAntes = await banner.nombresDeCookies();
      await home.capturarEvidencia(cp, 1, 'banner visible antes de rechazar', {
        elemento: banner.root,
      });

      // Paso 2 — rechazar todas.
      await banner.clicRechazarTodas();
      await expect(banner.root, 'el banner desaparece tras rechazar').toBeHidden();
      await home.capturarEvidencia(cp, 2, 'Home sin banner tras rechazar todas');

      expect(await banner.consentimientoRegistrado(), 'el rechazo queda registrado').toBe('rejected');
      await expect
        .poll(() => banner.dnt(), {
          message: 'el seguimiento queda cortado para la sesión (dw_dnt=1)',
          timeout: 20000,
        })
        .toBe('1');
      // "Solo permanecen activas las cookies necesarias": las que el sitio ya tenía puestas antes
      // de cualquier decisión —las que por definición no requieren consentimiento— siguen ahí.
      const despues = await banner.nombresDeCookies();
      for (const cookie of esencialesAntes) {
        expect(
          despues,
          `la cookie ${cookie}, activa antes de decidir, sobrevive al rechazo`,
        ).toContain(cookie);
      }
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C30-D-012 · Banner no reaparece en visitas posteriores tras rechazar todas (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C30-D-012';
      test.setTimeout(120000);

      // Paso 1 — rechazar en la primera visita.
      const primeraVisita = new PaginaConConsentimiento(page);
      await primeraVisita.goto();
      const banner = await primeraVisita.esperarBanner();
      await banner.clicRechazarTodas();
      await primeraVisita.capturarEvidencia(cp, 1, 'rechazo registrado en la primera visita');

      // Paso 2 — nueva visita en una pestaña nueva del mismo navegador.
      const nuevaPestana = await page.context().newPage();
      const segundaVisita = new PaginaConConsentimiento(nuevaPestana);
      await segundaVisita.goto();

      // Paso 3 — navegar por el sitio.
      await segundaVisita.desplazar(600);
      await expect(
        segundaVisita.cookies.root,
        'el banner no vuelve a aparecer mientras el rechazo esté vigente',
      ).toBeHidden();
      expect(await segundaVisita.cookies.consentimientoRegistrado()).toBe('rejected');
      await segundaVisita.capturarEvidencia(cp, 3, 'nueva visita sin banner tras el rechazo');
      await segundaVisita.capturarEvidencia(cp);
      await nuevaPestana.close();
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C30-M-001 · Banner de cookies visible en primera visita en Mobile (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C30-M-001';
      test.setTimeout(120000);

      const home = new PaginaConConsentimiento(page);
      await home.goto();
      const banner = await home.esperarBanner();
      await home.capturarEvidencia(cp, 2, 'Home Mobile cargado en primera visita');

      await expect(banner.mensaje, 'el banner trae el texto de consentimiento').toBeVisible();
      await expect(banner.enlacePolitica, 'ofrece el acceso a la Política de cookies').toBeVisible();
      await expect(banner.aceptar, 'ofrece "Aceptar"').toBeVisible();
      await expect(banner.rechazarTodas, 'ofrece "Rechazar todas"').toBeVisible();
      await home.capturarEvidencia(cp, 3, 'banner de cookies al pie de la pantalla', {
        elemento: banner.root,
      });

      const anclaje = await banner.root.evaluate((el) => {
        const caja = el.getBoundingClientRect();
        return {
          position: getComputedStyle(el).position,
          distanciaAlPie: window.innerHeight - caja.bottom,
        };
      });
      expect(anclaje.position, 'el banner está fijo respecto del viewport').toBe('fixed');
      expect(anclaje.distanciaAlPie, 'el banner queda anclado a la parte inferior').toBeLessThan(120);

      const bloqueo = await home.contenidoBloqueado();
      expect(bloqueo.scrollBloqueado, 'la página no queda con el scroll congelado').toBe(false);
      expect(bloqueo.hayBackdrop, 'no hay un backdrop que intercepte los clics').toBe(false);
      expect(
        bloqueo.porcentajeDeViewportTapado,
        'el banner ocupa solo una franja del viewport',
      ).toBeLessThan(35);
      const desplazamiento = await home.desplazar(600);
      expect(desplazamiento, 'la página se puede desplazar con el banner presente').toBeGreaterThan(0);
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C30-M-002 · Aceptar cookies habilita los servicios opcionales y oculta el banner (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C30-M-002';
      test.setTimeout(120000);

      const home = new PaginaConConsentimiento(page);
      await home.goto();
      const banner = await home.esperarBanner();
      expect(await banner.consentimientoRegistrado(), 'no hay decisión previa').toBeUndefined();
      await home.capturarEvidencia(cp, 1, 'banner visible sin decisión previa', {
        elemento: banner.root,
      });

      await banner.clicAceptar();
      await expect(banner.root, 'el banner desaparece tras aceptar').toBeHidden();
      await home.capturarEvidencia(cp, 2, 'Home Mobile sin banner tras aceptar');

      expect(await banner.consentimientoRegistrado(), 'el consentimiento queda registrado').toBe(
        'accepted',
      );
      // dw_dnt no se escribe en el mismo tick que el clic: el storefront confirma el
      // consentimiento contra el backend y recién entonces fija el flag. Se espera por el valor
      // en vez de leerlo una vez, que es lo que hacía fallar el caso sin que nada estuviera mal.
      await expect
        .poll(() => banner.dnt(), {
          message: 'el seguimiento queda habilitado para la sesión (dw_dnt=0)',
          timeout: 20000,
        })
        .toBe('0');
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C30-M-003 · Acceso a Politica de cookies abre drawer en Mobile (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C30-M-003';
      test.setTimeout(120000);

      const home = new PaginaConConsentimiento(page);
      await home.goto();
      const banner = await home.esperarBanner();
      await home.capturarEvidencia(cp, 1, 'banner visible con el enlace a la política', {
        elemento: banner.root,
      });

      const politica = await banner.abrirPolitica();
      await expect(politica.root, 'se abre el contenedor de la Política de cookies').toBeVisible();
      await expect(politica.titulo, 'trae el título de la política').toHaveText(
        /pol[ií]tica de cookies/i,
      );
      expect(await politica.secciones.count(), 'trae el contenido de la política').toBeGreaterThan(0);

      // "Drawer" en Mobile: un panel anclado a un borde que ocupa el ancho de la pantalla, no una
      // ventana centrada. Se comprueba por geometría, que es lo que distingue una cosa de la otra.
      const caja = await politica.caja();
      const viewport = page.viewportSize()!;
      expect(caja.width, 'el panel ocupa el ancho de la pantalla').toBeGreaterThanOrEqual(
        viewport.width * 0.95,
      );
      expect(
        Math.abs(caja.y + caja.height - viewport.height),
        'el panel queda anclado al borde inferior',
      ).toBeLessThan(8);
      await home.capturarEvidencia(cp, 2, 'drawer de la Política de cookies abierto');

      await expect(banner.root, 'el banner sigue visible mientras se lee la política').toBeVisible();
      expect(
        await banner.consentimientoRegistrado(),
        'abrir la política no decide por el usuario',
      ).toBeUndefined();
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C30-M-004 · Cierre sin accion registra estado sin decision y desactiva SDKs opcionales (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C30-M-004';
      test.setTimeout(120000);

      const home = new PaginaConConsentimiento(page);
      await home.goto();
      const banner = await home.esperarBanner();
      await home.capturarEvidencia(cp, 1, 'banner visible sin decisión previa', {
        elemento: banner.root,
      });

      await banner.cerrarSinDecidir();
      await expect(banner.root, 'el banner se cierra sin haber elegido').toBeHidden();
      await home.capturarEvidencia(cp, 2, 'Home Mobile tras cerrar el banner sin decidir');

      expect(
        await banner.marcadoSinDecision(),
        'el sistema registra el estado como "sin decisión"',
      ).toBe(true);
      expect(
        await banner.consentimientoRegistrado(),
        'no se registra ningún consentimiento',
      ).toBeUndefined();
      expect(await banner.dnt(), 'no se habilita el seguimiento de la sesión').not.toBe('0');
      expect(
        await page.evaluate(() => typeof (window as { dataLayer?: unknown }).dataLayer),
        'la capa de datos de analítica no se inicializa',
      ).toBe('undefined');
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C30-M-011 · Rechazar todas registra el rechazo y oculta el banner (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C30-M-011';
      test.setTimeout(120000);

      const home = new PaginaConConsentimiento(page);
      await home.goto();
      const banner = await home.esperarBanner();
      const esencialesAntes = await banner.nombresDeCookies();
      await home.capturarEvidencia(cp, 1, 'banner visible antes de rechazar', {
        elemento: banner.root,
      });

      await banner.clicRechazarTodas();
      await expect(banner.root, 'el banner desaparece tras rechazar').toBeHidden();
      await home.capturarEvidencia(cp, 2, 'Home Mobile sin banner tras rechazar todas');

      expect(await banner.consentimientoRegistrado(), 'el rechazo queda registrado').toBe('rejected');
      await expect
        .poll(() => banner.dnt(), {
          message: 'el seguimiento queda cortado para la sesión (dw_dnt=1)',
          timeout: 20000,
        })
        .toBe('1');
      const despues = await banner.nombresDeCookies();
      for (const cookie of esencialesAntes) {
        expect(
          despues,
          `la cookie ${cookie}, activa antes de decidir, sobrevive al rechazo`,
        ).toContain(cookie);
      }
      await home.capturarEvidencia(cp);
    });
  });
});
