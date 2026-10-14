import { Page } from '@playwright/test';
import { test, expect } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { CollageBanners } from './pages/CollageBanners';

/**
 * B2C-83 — Collage de Banners del Home/Landing (variantes T1, T2, T4 y T5).
 *
 * Están aquí los 4 TC web ejecutables de la planilla. De los 24 que trae:
 *
 * - **6 son `-BM-`** (configuración desde Page Designer): `Fuera de alcance`.
 * - **14 quedaron `Bloqueado`**, por tres motivos que conviene no mezclar:
 *   - **T2, T4 y T5 no están configuradas** en este ambiente: D-002/M-002, D-003/M-003 y
 *     D-004/M-004 no tienen dónde observarse.
 *   - **D-010 y D-011 nombran esas mismas variantes en su precondición.** Lo que verifican —el
 *     fondo a ancho completo y que el collage sea estático— sí se puede mirar sobre T1, pero
 *     hacerlo sería certificar algo distinto de lo que pide el caso. D-010 arrastra además un
 *     segundo impedimento: exige un color de fondo distinto de blanco, y las dos instancias lo
 *     tienen transparente.
 *   - **El resto pide un estado que solo Page Designer produce**: D-006 (banner requerido
 *     faltante), D-007 (T2 con un solo banner), D-008 (variante inválida), D-012 (T4 sin banner
 *     principal), D-013 (atributo opcional sin definir) y D-014 (un banner con `target=_blank`).
 *
 * **La trampa de esta suite, y cómo se resolvió.** El Home tiene un collage —"Prende la
 * parrilla"— que parece la variante T5: estático, cinco banners, título, texto y "Mostrar todo",
 * y la propia HU invita a creerlo porque su tabla resumen dice "cinco banners → T5". Pero el
 * componente **declara `data-variant="T6"`**, una variante que esta HU no cubre. Sin ese
 * atributo, D-004 habría salido `Rechazado` por una diferencia que es de configuración, es decir
 * un defecto inventado. De ahí que todo este spec localice los componentes por la variante que el
 * DOM publica y no por su apariencia.
 *
 * Dos cosas más que gobiernan las aserciones:
 *
 * - **Page Designer da anclas estables**: cada componente vive en un `div.component` con id
 *   propio y el collage expone su variante en un `data-variant` interior. Nada depende de los
 *   hashes de Emotion ni del texto del encabezado.
 * - **Las imágenes del collage son lazy**: hay que llevar el componente al viewport y esperar
 *   antes de leer si una imagen cargó, o banners sanos se leen como caídos.
 */

/** Las variantes tal como las nombra el atributo del DOM. */
const T1 = 'T1';

async function abrirCollage(page: Page, variante: string) {
  const home = new HomePage(page);
  await home.goto();
  await home.recorrerCompleto();
  const collage = new CollageBanners(page, variante);
  const instancias = await collage.instancias();
  expect(
    instancias.map((i) => i.variante),
    `el Home trae el collage en variante ${variante} (declaradas: ` +
      `${instancias.map((i) => `${i.componenteId}=${i.variante}`).join(', ')})`,
  ).toContain(variante);
  await collage.enfocar();
  return { home, collage };
}

test.describe('B2C-83 — Collage de Banners', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C83-D-001 · Presentacion T1 en Desktop: banner ancho completo sin padding lateral (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C83-D-001';
      test.setTimeout(240000);

      // Paso 1 y 2 — el componente en variante T1, en pantalla.
      const { home, collage } = await abrirCollage(page, T1);
      await home.capturarEvidencia(cp, 1, 'collage en variante T1 en el Home', {
        elemento: collage.root,
      });

      const geo = await collage.geometria();
      const banners = await collage.medirBanners();
      await home.capturarEvidencia(cp, 2, 'banner a ancho completo', { elemento: collage.root });

      // T1 es un banner único.
      expect(banners.length, 'la variante T1 muestra un único banner').toBe(1);

      // Ancho completo de la pantalla y sin padding lateral: las dos mitades del esperado.
      expect(
        geo.x,
        `el componente arranca en el borde izquierdo de la pantalla (x=${geo.x})`,
      ).toBe(0);
      expect(
        geo.ancho,
        `el componente ocupa el ancho completo (${geo.ancho}px de ${geo.viewport}px de viewport)`,
      ).toBe(geo.viewport);
      expect(geo.paddingIzquierdo, 'el componente no deja padding a la izquierda').toBe(0);
      expect(geo.paddingDerecho, 'el componente no deja padding a la derecha').toBe(0);

      // Y el banner en sí, no solo su contenedor, llega de borde a borde.
      const banner = banners[0];
      expect(banner.x, `el banner arranca en x=${banner.x}`).toBe(0);
      expect(
        banner.ancho,
        `el banner ocupa el ancho completo (${banner.ancho}px de ${geo.viewport}px)`,
      ).toBe(geo.viewport);
      expect(banner.imagenCargada, `la imagen de "${banner.alt}" carga`).toBe(true);

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C83-D-005 · Clic en un banner del collage redirige a la URL configurada (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C83-D-005';
      test.setTimeout(240000);

      // Paso 1 — el collage en pantalla. El caso admite cualquier variante; se usa la única
      // configurada que esta HU cubre.
      const { home, collage } = await abrirCollage(page, T1);
      await home.capturarEvidencia(cp, 1, 'collage con su banner', { elemento: collage.root });

      // Paso 2 — pulsar un banner.
      const banner = (await collage.medirBanners())[0];
      const destino = banner.href;
      expect(destino, `el banner "${banner.alt}" tiene URL configurada`).toBeTruthy();
      await home.capturarEvidencia(cp, 2, `banner a pulsar: ${banner.alt}`, {
        elemento: collage.banners.first(),
      });

      await collage.banners.first().locator('a').first().click();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2000);

      // Paso 3 — el destino es el que el banner declara, no el que sugiere su nombre.
      const url = new URL(page.url());
      expect(
        url.pathname + url.search,
        `el clic en "${banner.alt}" lleva a su URL configurada (${destino})`,
      ).toBe(destino);
      await home.capturarEvidencia(cp, 3, 'destino cargado');

      await home.capturarEvidencia(cp);
    });

    test('TC-B2C83-D-009 · Error en la carga de imagen de un banner muestra imagen no disponible (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C83-D-009';
      test.setTimeout(240000);

      // Paso 1 — producir el error de carga. En este ambiente ninguna imagen del collage está
      // rota, así que se corta su petición: por identificador de archivo y no por URL exacta,
      // porque el <img> lleva srcset con varios anchos y basta con que cargue una variante.
      const preludio = await abrirCollage(page, T1);
      const urlImagen = await preludio.collage.urlDeImagen(0);
      const afectado = (await preludio.collage.medirBanners())[0].alt;
      const archivo = (urlImagen.split('?')[0].split('/').pop() ?? '').replace(/\.[a-z]+$/i, '');
      expect(archivo, 'se pudo identificar el archivo de imagen a bloquear').not.toBe('');

      let peticionesCortadas = 0;
      await page.route(
        (url) => url.href.includes(archivo),
        (ruta) => {
          peticionesCortadas += 1;
          return ruta.abort();
        },
      );

      // Paso 2 — recargar con la imagen caída. Hay que pedir revalidación: tras la primera carga
      // la imagen queda en caché y una recarga normal la sirve de ahí sin emitir petición, con lo
      // que la ruta que la bloquea nunca se dispara.
      await page.setExtraHTTPHeaders({ 'Cache-Control': 'no-cache', Pragma: 'no-cache' });
      await page.reload({ waitUntil: 'domcontentloaded' });
      const home = new HomePage(page);
      await home.recorrerCompleto();
      const collage = new CollageBanners(page, T1);
      await collage.enfocar();
      await home.capturarEvidencia(cp, 2, 'collage con la imagen caida', {
        elemento: collage.root,
      });

      expect(
        peticionesCortadas,
        `se cortó la petición de la imagen de "${afectado}"`,
      ).toBeGreaterThan(0);

      // Paso 3 — el banner afectado. Se le da tiempo al estado de error en vez de medirlo de una
      // sola pasada: el reemplazo lo haría el componente al recibir el error de la imagen, no el
      // navegador al pintar, y una medición inmediata daría un falso negativo intermitente.
      const hueco = await collage
        .banners.first()
        .evaluate(async (s) => {
          const lee = () => ({
            hayImg: Boolean(s.querySelector('img')),
            imagenCargada: (() => {
              const i = s.querySelector('img') as HTMLImageElement | null;
              return Boolean(i && i.complete && i.naturalWidth > 0);
            })(),
            alto: Math.round(s.getBoundingClientRect().height),
            texto: (s.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 160),
          });
          for (let i = 0; i < 20; i++) {
            if (/imagen no disponible/i.test(lee().texto)) break;
            await new Promise((r) => setTimeout(r, 1000));
          }
          return lee();
        });
      await home.capturarEvidencia(cp, 3, 'banner con la imagen caida', {
        elemento: collage.banners.first(),
      });

      expect(
        hueco.imagenCargada,
        `la imagen de "${afectado}" no cargó, que es la condición del caso`,
      ).toBe(false);
      expect(
        hueco.alto,
        `el banner conserva su espacio (${hueco.alto}px) en vez de colapsar`,
      ).toBeGreaterThan(0);
      expect(
        hueco.texto,
        `el banner afectado muestra el estado "imagen no disponible" (el banner deja ` +
          `${hueco.hayImg ? 'el <img> roto en su sitio' : 'el hueco sin <img>'} y se lee: ` +
          `"${hueco.texto}")`,
      ).toMatch(/imagen no disponible/i);

      // El resto del collage. En T1 no hay más banners, así que la comprobación es sobre el
      // conjunto realmente presente y el `test()` no puede afirmar más que eso.
      const resto = (await collage.medirBanners()).slice(1);
      expect(
        resto.every((b) => b.imagenCargada),
        `el resto de los banners del collage conserva su imagen (${resto.length} banners)`,
      ).toBe(true);

      await home.capturarEvidencia(cp);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C83-M-001 · Presentacion T1 en Mobile: banner con padding lateral (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C83-M-001';
      test.setTimeout(240000);

      // Paso 1 y 2 — el componente en variante T1, en Mobile.
      const { home, collage } = await abrirCollage(page, T1);
      await home.capturarEvidencia(cp, 1, 'collage en variante T1 en Mobile', {
        elemento: collage.root,
      });

      const geo = await collage.geometria();
      const banners = await collage.medirBanners();
      await home.capturarEvidencia(cp, 2, 'banner con padding lateral', { elemento: collage.root });

      expect(banners.length, 'la variante T1 muestra un único banner').toBe(1);

      // Lo contrario que en Desktop: aquí el banner sí deja margen a los lados.
      const banner = banners[0];
      const margenDerecho = geo.viewport - (banner.x + banner.ancho);
      expect(
        banner.x,
        `el banner deja padding a la izquierda (arranca en x=${banner.x} de ${geo.viewport}px)`,
      ).toBeGreaterThan(0);
      expect(
        margenDerecho,
        `el banner deja padding a la derecha (${margenDerecho}px hasta el borde)`,
      ).toBeGreaterThan(0);
      expect(
        banner.ancho,
        `el banner (${banner.ancho}px) no ocupa el ancho completo (${geo.viewport}px)`,
      ).toBeLessThan(geo.viewport);
      expect(banner.imagenCargada, `la imagen de "${banner.alt}" carga`).toBe(true);

      await home.capturarEvidencia(cp);
    });
  });
});
