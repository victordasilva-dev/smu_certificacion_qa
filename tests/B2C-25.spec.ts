import { test, expect, token } from './support/fixtures';
import { DESKTOP } from './support/viewports';
import { PaginaDelFlujo, PANTALLAS_SSO } from './pages/PaginaDelFlujo';
import { PaginaHabilitada, rutaDesdeUrl } from './pages/PaginaHabilitada';

/**
 * B2C-25 — Header Simplificado.
 *
 * Están aquí los tres TC que se pudieron ejecutar. Los dos de estructura —TC-B2C25-D-001 y
 * TC-B2C25-M-001— quedaron `Bloqueado` en la exploración: recorren las siete pantallas del flujo
 * y cuatro de ellas no son alcanzables en el ambiente (las tres de Checkout y Confirmación exigen
 * superar el mínimo de compra y pagar; el Login con OTP no es una página sino una opción del modal
 * de login). Un TC bloqueado no genera su `test()`.
 *
 * El Header Simplificado se distingue del completo por dos cosas que conviene tener presentes al
 * leer las aserciones: está en `position: static` —el completo está en `fixed` incluso en el tope
 * de la página— y su logo es un `<svg role="img">`, no un `<img>`, así que se localiza por rol.
 */

type DatosDePrueba = Parameters<typeof token>[0];

/** El valor de un token, o un fallo que nombra el que falta. */
function tokenObligatorio(testData: DatosDePrueba, nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) {
    throw new Error(
      `Falta {${nombre}} en el Excel de data del workspace QA: sin ese valor no se puede abrir la ` +
        `pantalla que el TC pide. Cárgalo en la planilla y vuelve a correr el read.`,
    );
  }
  return valor;
}

test.describe('B2C-25 — Header Simplificado', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C25-D-002 · Reemplazo inmediato del Header Full por el Header Simplificado, sin animacion (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C25-D-002';
      test.setTimeout(120000);

      // Paso 1 — ubicarse en una página con Header Full.
      const home = new PaginaHabilitada(page, '', 'Home');
      await home.goto();
      const altoFull = await home.header.root.evaluate((el) =>
        Math.round(el.getBoundingClientRect().height),
      );
      const botonesFull = await home.header.root.evaluate((el) => el.querySelectorAll('button').length);
      expect(botonesFull, 'el Home trae el Header Full, con sus controles').toBeGreaterThan(1);
      await home.capturarEvidencia(cp, 1, 'Home con el Header Full', { elemento: home.header.root });

      // Paso 2 — navegar al Carro.
      const rutaCarro = rutaDesdeUrl(tokenObligatorio(testData, 'CART_URL'));
      const carro = new PaginaDelFlujo(page, rutaCarro, 'Carro');
      await carro.goto();

      // Paso 3 — el header de la pantalla de destino, observado desde que existe.
      // Lo que el CA2 descarta es que el Header Full llegue a verse en el destino y se transforme
      // a la vista, así que no basta con mirar cómo quedó: se muestrea el header durante dos
      // segundos y se comprueba que en ninguna muestra trae controles del Header Full ni una
      // altura distinta. Una animación intermedia dejaría alturas escalonadas en ese registro.
      const muestras = await page.evaluate(() => {
        return new Promise<Array<{ alto: number; botones: number }>>((resolve) => {
          const registro: Array<{ alto: number; botones: number }> = [];
          const iv = setInterval(() => {
            const h = document.querySelector('header');
            if (h) {
              registro.push({
                alto: Math.round(h.getBoundingClientRect().height),
                botones: h.querySelectorAll('button').length,
              });
            }
          }, 40);
          setTimeout(() => {
            clearInterval(iv);
            resolve(registro);
          }, 2000);
        });
      });

      expect(muestras.length, 'muestras del header tras la navegación').toBeGreaterThan(10);
      const alturas = [...new Set(muestras.map((m) => m.alto))];
      expect(alturas, 'el header no pasa por alturas intermedias: no hay animación').toHaveLength(1);
      expect(
        muestras.every((m) => m.botones === 0),
        'en ningún momento se ven los controles del Header Full',
      ).toBe(true);

      // El header mostrado es el Simplificado, en su estado definitivo.
      const inv = await carro.header.inventario();
      expect(inv.botones, 'botones en el Header Simplificado').toBe(0);
      expect(inv.enlaces, 'enlaces en el Header Simplificado').toBe(0);
      expect(inv.svgs, 'el logo del Header Simplificado').toBe(1);
      expect(await carro.header.position(), 'position del Header Simplificado').toBe('static');
      expect(alturas[0], 'el Header Simplificado es más bajo que el completo').toBeLessThan(altoFull);

      await carro.capturarEvidencia(cp, 3, 'Carro con el Header Simplificado', {
        elemento: carro.header.root,
      });

      await carro.capturarEvidencia(cp, undefined, undefined, { elemento: carro.header.root });
    });

    test('TC-B2C25-D-003 · El logo del Header Simplificado no es interactivo (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C25-D-003';

      // Paso 1 — una página del flujo de compra.
      const carro = new PaginaDelFlujo(
        page,
        rutaDesdeUrl(tokenObligatorio(testData, 'CART_URL')),
        'Carro',
      );
      await carro.goto();
      const urlAntes = page.url();
      await expect(carro.header.logo).toBeVisible();
      await carro.capturarEvidencia(cp, 1, 'Carro con el Header Simplificado', {
        elemento: carro.header.root,
      });

      // El logo no invita siquiera a pulsarlo: no está envuelto en un enlace ni en un botón.
      expect(await carro.header.logoEsInteractivo(), 'el logo es accionable').toBe(false);

      // Pasos 2 y 3 — clic sobre el logo y comprobación de que no hubo redirección.
      await carro.header.clicLogo();
      await page.waitForTimeout(3000);
      expect(page.url(), 'la URL tras el clic en el logo').toBe(urlAntes);
      expect(new URL(page.url()).pathname, 'el usuario sigue en la página del flujo').not.toBe('/');
      await carro.capturarEvidencia(cp, 3, 'el usuario permanece en el Carro tras el clic', {
        elemento: carro.header.root,
      });

      await carro.capturarEvidencia(cp);
    });

    test('TC-B2C25-D-004 · El Header Simplificado no participa del comportamiento sticky (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C25-D-004';
      test.setTimeout(120000);

      // Paso 1 — una página del flujo con contenido scrolleable.
      // El TC nombra Checkout - Mis Envíos y admite cualquier otra del flujo que desborde el
      // viewport. El Carro no sirve: no genera scroll ni con un producto dentro. Se usa la primera
      // pantalla SSO que sí desborde, para que el scroll del paso 2 sea real y no un no-op.
      let pagina: PaginaDelFlujo | null = null;
      for (const p of PANTALLAS_SSO) {
        const candidata = new PaginaDelFlujo(page, p.path, p.nombre);
        await candidata.goto();
        if (await candidata.hayScroll()) {
          pagina = candidata;
          break;
        }
      }
      expect(pagina, 'alguna pantalla del flujo con contenido scrolleable').not.toBeNull();
      const flujo = pagina!;

      const altoInicial = await flujo.header.alto();
      const topInicial = await flujo.header.top();
      const positionInicial = await flujo.header.position();
      await flujo.capturarEvidencia(cp, 1, `${flujo.nombre} antes de hacer scroll`, {
        elemento: flujo.header.root,
      });

      // `static` es la prueba de fondo: un header que no está posicionado no puede quedarse fijo
      // ni contraerse, mientras que el Header Full está en `fixed` desde el primer paint.
      expect(positionInicial, 'position del Header Simplificado').toBe('static');

      // Paso 2 — scroll hacia abajo, más allá de la altura del header.
      await flujo.scrollA(400);
      const scrollReal = await page.evaluate(() => window.scrollY);
      expect(scrollReal, 'la página se desplazó de verdad').toBeGreaterThan(0);

      // Paso 3 — el header conserva su estado original: no se contrajo ni cambió de posicionamiento.
      expect(await flujo.header.alto(), 'la altura del header durante el scroll').toBe(altoInicial);
      expect(await flujo.header.position(), 'position durante el scroll').toBe('static');

      const inv = await flujo.header.inventario();
      expect(inv.botones, 'botones durante el scroll').toBe(0);
      expect(inv.svgs, 'el logo sigue siendo lo único que muestra').toBe(1);

      // Al no ser fijo, el header se va con el contenido en vez de quedarse pegado arriba: su
      // borde superior sube tanto como el scroll. Un sticky habría dejado `top` en 0.
      expect(await flujo.header.top(), 'el header acompaña al contenido').toBeLessThan(topInicial);
      await flujo.capturarEvidencia(cp, 3, `${flujo.nombre} después de hacer scroll`);

      await flujo.capturarEvidencia(cp);
    });
  });
});
