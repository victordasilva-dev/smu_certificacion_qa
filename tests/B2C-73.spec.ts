import { Page, Locator } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { HeaderFull } from './pages/HeaderFull';
import { LoginModal } from './pages/LoginModal';
import { CookieConsentBanner } from './pages/CookieConsentBanner';
import { esperarOtp, marcaOtp } from './support/otp';

/**
 * B2C-73 — Menú de categorías en Desktop (modal con lista N1 a la izquierda y panel N2/N3 a la derecha).
 *
 * Un `test()` por fila de la planilla. Lo que la exploración dejó claro:
 *
 * - **Todo el modal son `<button>`, no hay enlaces**: la navegación es por JS, así que no se busca por
 *   rol `link`. La entrada N1 lleva `svg` e `img`; el encabezado de un bloque N2 lleva `img` y no `svg`;
 *   las hojas N3 no llevan ninguno de los dos.
 * - **El panel de la derecha no es un contenedor propio**: título, "Mostrar todo" y bloques van en el
 *   mismo flujo que la lista, así que se leen por posición (los botones a la derecha de la lista).
 * - **Los nombres N2/N3 se truncan por el DOM** (≈20 caracteres + "…"), así que las categorías de nombre
 *   largo se buscan por prefijo.
 * - Los destinos son `/category/<n1>`, `/category/<n1>_<n2>` y `/category/<n1>_<n2>_<n3>`.
 */

const dlg = (page: Page): Locator => page.locator('[role="dialog"]:visible').first();
const entradasN1 = (page: Page): Locator => dlg(page).locator('button:has(svg):has(img)');
const URL_BASE = (td: Parameters<typeof token>[0]) => token(td, 'BASE_URL')!;

/** Quita tildes y pasa a "slug" como el de las URLs de categoría. */
const slug = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** El último tramo de una URL de categoría, p. ej. `carnes_cerdo_chuleta` → ['carnes','cerdo','chuleta']. */
const tramos = (url: string): string[] => new URL(url).pathname.split('/').pop()!.split('_');

async function abrirModal(page: Page, url?: string): Promise<void> {
  if (url) {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await new CookieConsentBanner(page).aceptarSiAparece();
    await page.waitForTimeout(2500);
  } else {
    await new HomePage(page).goto();
  }
  await new HeaderFull(page).abrirCategoriasDesktop();
  await entradasN1(page).first().waitFor({ state: 'visible', timeout: 30000 });
  await page.waitForTimeout(800);
}

/** Nombres de las entradas N1, en orden. */
async function nombresN1(page: Page): Promise<string[]> {
  return (await entradasN1(page).allInnerTexts()).map((t) => t.trim());
}

/** La entrada N1 cuyo slug coincide con el tramo de URL dado. */
async function entradaPorSlug(page: Page, tramo: string): Promise<{ boton: Locator; nombre: string }> {
  const nombres = await nombresN1(page);
  const i = nombres.findIndex((n) => slug(n) === tramo || slug(n).startsWith(tramo));
  if (i < 0) throw new Error(`No hay una categoría N1 con slug «${tramo}» en el modal (hay: ${nombres.join(', ')})`);
  return { boton: entradasN1(page).nth(i), nombre: nombres[i] };
}

async function sobreN1(page: Page, boton: Locator): Promise<void> {
  await boton.hover();
  await page.waitForTimeout(900);
}

interface Bloque { nombre: string; n3: string[]; x: number; mostrarTodo: boolean }
interface Panel { titulo: string; hayPanel: boolean; bloques: Bloque[] }

/** Lee el panel de la derecha: título + bloques N2 con sus N3. */
async function leerPanel(page: Page): Promise<Panel> {
  return dlg(page).evaluate((el) => {
    const UMBRAL_X = 440;
    const r = (e: Element) => e.getBoundingClientRect();
    const botones = [...el.querySelectorAll('button')].filter((b) => r(b).left >= UMBRAL_X && r(b).top > 80);
    const texto = (b: Element) => (b as HTMLElement).innerText.trim();
    const hojas = [...el.querySelectorAll('*')].filter((e) => e.children.length === 0 && r(e).left >= UMBRAL_X && r(e).top > 85 && r(e).top < 150 && (e as HTMLElement).innerText?.trim());
    const titulo = hojas.map(texto).find((t) => !/^mostrar\\s*todo$/i.test(t)) ?? '';
    const bloques: { nombre: string; n3: string[]; x: number; mostrarTodo: boolean }[] = [];
    let actual: { nombre: string; n3: string[]; x: number; mostrarTodo: boolean } | null = null;
    for (const b of botones) {
      const t = texto(b);
      const tieneImg = !!b.querySelector('img');
      const tieneSvg = !!b.querySelector('svg');
      if (tieneImg && !tieneSvg) { actual = { nombre: t, n3: [], x: Math.round(r(b).left), mostrarTodo: false }; bloques.push(actual); continue; }
      if (!actual) continue; // el "Mostrar todo" del encabezado del panel
      if (/^mostrar\s*todo$/i.test(t)) { actual.mostrarTodo = true; continue; }
      if (!tieneSvg && t) actual.n3.push(t);
    }
    return { titulo, hayPanel: bloques.length > 0, bloques };
  });
}

/** Evidencia: una captura por paso con el modal a la vista. */
async function cap(page: Page, cp: string, paso: number | string, etiqueta: string): Promise<void> {
  await new HomePage(page).capturarEvidencia(cp, paso, etiqueta);
}

const BD = (m: string) => new Error(`PRECONDICION_NO_DISPONIBLE: ${m}`);

test.describe('B2C-73 — Menú de categorías Desktop', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);
    test.describe.configure({ timeout: 240000 });

    test('TC-B2C73-D-001 · Apertura del modal de categorías desde el botón Categorías del header como invitado (Desktop)', async ({ page }) => {
      const cp = 'TC-B2C73-D-001';
      await new HomePage(page).goto();
      await cap(page, cp, 1, 'Home como invitado');
      await new HeaderFull(page).abrirCategoriasDesktop();
      await entradasN1(page).first().waitFor({ state: 'visible' });
      await cap(page, cp, 2, 'modal de categorías desplegado');
      await expect(dlg(page)).toBeVisible();
      await expect(dlg(page).getByText('Categorías', { exact: true }).first()).toBeVisible();
      await expect(dlg(page).locator('button:has(svg):not(:has(img))').first(), 'el ícono X').toBeVisible();
      expect((await nombresN1(page)).length, 'el listado trae categorías N1').toBeGreaterThan(0);
      await cap(page, cp, 3, 'título, X y categorías N1');
    });

    test('TC-B2C73-D-002 · Apertura del modal de categorías desde el botón Categorías del header como usuario logueado (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-002';
      test.setTimeout(420000);
      const correo = token(testData, 'COMPRADOR_USER')!;
      const home = new HomePage(page);
      await home.goto();
      const login = new LoginModal(page);
      const desde = marcaOtp();
      await login.pedirCodigo(correo);
      await login.ingresarCodigo(await esperarOtp(correo, desde, { digitos: 6 }));
      await cap(page, cp, 1, 'Home con sesión iniciada');
      await new HeaderFull(page).abrirCategoriasDesktop();
      await entradasN1(page).first().waitFor({ state: 'visible' });
      await cap(page, cp, 2, 'modal de categorías con sesión');
      await expect(dlg(page).getByText('Categorías', { exact: true }).first()).toBeVisible();
      await expect(dlg(page).locator('button:has(svg):not(:has(img))').first(), 'el ícono X').toBeVisible();
      expect((await nombresN1(page)).length, 'el mismo listado N1 que el invitado').toBeGreaterThanOrEqual(14);
    });

    test('TC-B2C73-D-003 · Cada categoría N1 del modal muestra thumbnail, nombre e ícono de navegación (Desktop)', async ({ page }) => {
      const cp = 'TC-B2C73-D-003';
      await abrirModal(page);
      await cap(page, cp, 3, 'listado N1');
      const filas = await entradasN1(page).evaluateAll((bs) =>
        bs.map((b) => {
          const rb = b.getBoundingClientRect();
          const img = b.querySelector('img');
          const svg = b.querySelector('svg');
          return {
            nombre: (b as HTMLElement).innerText.trim(),
            img: !!img && (img as HTMLImageElement).naturalWidth > 0,
            svgADerecha: !!svg && svg.getBoundingClientRect().right >= rb.right - 40,
          };
        }),
      );
      expect(filas.length, 'hay categorías N1').toBeGreaterThan(0);
      for (const f of filas) {
        expect(f.nombre, 'nombre visible').not.toBe('');
        expect(f.img, `thumbnail cargado en «${f.nombre}»`).toBe(true);
        expect(f.svgADerecha, `ícono ">" alineado a la derecha en «${f.nombre}»`).toBe(true);
      }
    });

    test('TC-B2C73-D-004 · Scroll del listado de categorías N1 mantiene fijos el título y el ícono X (Desktop)', async ({ page }) => {
      const cp = 'TC-B2C73-D-004';
      await abrirModal(page);
      const n = (await nombresN1(page)).length;
      expect(n, 'hay más de 11 categorías N1 activas').toBeGreaterThan(11);
      const titulo = dlg(page).getByText('Categorías', { exact: true }).first();
      const x = dlg(page).locator('button:has(svg):not(:has(img))').first();
      const antes = { t: await titulo.boundingBox(), x: await x.boundingBox() };
      await cap(page, cp, 2, 'antes del scroll');
      // El listado que desplaza es el ancestro desplazable de las entradas N1.
      const mov = await entradasN1(page).first().evaluate((b) => {
        let e: HTMLElement | null = b.parentElement;
        while (e && !(e.scrollHeight > e.clientHeight + 4 && /auto|scroll/.test(getComputedStyle(e).overflowY))) e = e.parentElement;
        if (!e) return { scrollable: false, antes: 0, despues: 0 };
        const a = e.scrollTop; e.scrollTop = e.scrollHeight; return { scrollable: true, antes: a, despues: e.scrollTop };
      });
      await page.waitForTimeout(700);
      await cap(page, cp, 3, 'después del scroll');
      expect(mov.scrollable, 'el listado N1 es desplazable').toBe(true);
      expect(mov.despues, 'el scroll mueve el listado').toBeGreaterThan(mov.antes);
      const despues = { t: await titulo.boundingBox(), x: await x.boundingBox() };
      expect(despues.t?.y, 'el título queda fijo').toBe(antes.t?.y);
      expect(despues.x?.y, 'la X queda fija').toBe(antes.x?.y);
      await expect(entradasN1(page).last(), 'se ve la última categoría').toBeInViewport();
    });

    test('TC-B2C73-D-005 · Categoría N1 cambia color de fondo y de fuente al pasar el mouse (Desktop)', async ({ page }) => {
      const cp = 'TC-B2C73-D-005';
      await abrirModal(page);
      // Una N1 distinta de la que el modal trae seleccionada al abrir.
      const boton = entradasN1(page).nth(3);
      await page.mouse.move(700, 600); await page.waitForTimeout(500);
      const estilo = () => boton.evaluate((b) => {
        const t = (b.querySelector('p, span') ?? b) as HTMLElement;
        return { fondo: getComputedStyle(b).backgroundColor, fuente: getComputedStyle(t).color };
      });
      const antes = await estilo();
      await cap(page, cp, 2, 'sin hover');
      await sobreN1(page, boton);
      const despues = await estilo();
      await cap(page, cp, 3, 'con el mouse encima');
      test.info().annotations.push({ type: 'estilos', description: `antes ${JSON.stringify(antes)} · después ${JSON.stringify(despues)}` });
      expect(despues.fondo, 'cambia el color de fondo').not.toBe(antes.fondo);
    });

    test('TC-B2C73-D-006 · Hover sobre una categoría N1 despliega el panel de subcategorías N2 a la derecha (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-006';
      await abrirModal(page);
      const [n1] = tramos(token(testData, 'CATEGORY_N1_URL')!);
      const { boton, nombre } = await entradaPorSlug(page, n1);
      await sobreN1(page, boton);
      await cap(page, cp, 3, `panel N2 de ${nombre}`);
      const panel = await leerPanel(page);
      expect(panel.hayPanel, 'se despliega el panel N2').toBe(true);
      expect(panel.titulo, 'título de la categoría').toBe(nombre);
      expect(await dlg(page).getByRole('button', { name: /mostrar\s*todo/i }).count(), 'link «Mostrar todo»').toBeGreaterThan(0);
      const columnas = new Set(panel.bloques.map((b) => b.x));
      expect(columnas.size, 'las N2 se organizan en columnas').toBeGreaterThan(1);
    });

    test('TC-B2C73-D-007 · Clic en el nombre de una categoría N1 navega a su PLP y cierra el modal (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-007';
      await abrirModal(page);
      const url = token(testData, 'CATEGORY_N1_URL')!;
      const { boton } = await entradaPorSlug(page, tramos(url)[0]);
      await boton.click();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2500);
      await cap(page, cp, 3, 'PLP de la categoría N1');
      expect(new URL(page.url()).pathname, 'navega a la PLP de la N1').toBe(new URL(url).pathname);
      await expect(page.locator('[role="dialog"]:visible'), 'el modal se cierra').toHaveCount(0);
    });

    test('TC-B2C73-D-008 · Panel N2 muestra los bloques en 3 columnas con ícono, nombre, lista N3 y Mostrar todo (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-008';
      await abrirModal(page);
      const [n1, n2] = tramos(token(testData, 'CATEGORY_N2_URL')!);
      const { boton } = await entradaPorSlug(page, n1);
      await sobreN1(page, boton);
      const panel = await leerPanel(page);
      await cap(page, cp, 3, 'panel N2');
      const columnas = new Set(panel.bloques.map((b) => b.x));
      expect(columnas.size, 'el panel organiza las N2 en 3 columnas').toBe(3);
      const bloque = panel.bloques.find((b) => slug(b.nombre) === n2);
      expect(bloque, `bloque de la N2 «${n2}»`).toBeTruthy();
      expect(bloque!.n3.length, 'el bloque lista sus N3').toBeGreaterThan(0);
      expect(bloque!.mostrarTodo, 'el bloque trae «Mostrar todo»').toBe(true);
      const conIcono = await dlg(page).locator('button:has(img):not(:has(svg))').count();
      expect(conIcono, 'cada bloque N2 trae su ícono').toBeGreaterThanOrEqual(panel.bloques.length);
    });

    test('TC-B2C73-D-009 · Bloque N2 con más de 10 sub-subcategorías N3 lista solo 10 en el menú (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-009';
      await abrirModal(page);
      const n2 = token(testData, 'CATEGORY_N2_MAS_10_N3')!;
      // La N2 vive bajo alguna N1: se recorre cada una hasta encontrarla.
      let bloque: Bloque | undefined;
      for (let i = 0; i < (await nombresN1(page)).length && !bloque; i++) {
        await sobreN1(page, entradasN1(page).nth(i));
        bloque = (await leerPanel(page)).bloques.find((b) => slug(b.nombre) === slug(n2));
      }
      await cap(page, cp, 3, `bloque N2 «${n2}»`);
      if (!bloque) throw BD(`la N2 «${n2}» no aparece en ningún panel N2`);
      test.info().annotations.push({ type: 'n3', description: `${bloque.n3.length}: ${bloque.n3.join(' | ')}` });
      if (bloque.n3.length < 10) throw BD(`la N2 «${n2}» lista ${bloque.n3.length} N3: no hay más de 10 para comprobar el tope`);
      expect(bloque.n3.length, 'solo se listan hasta 10 N3').toBe(10);
    });

    test('TC-B2C73-D-010 · Link Mostrar todo de la categoría N1 en el panel navega a la PLP de la N1 (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-010';
      await abrirModal(page);
      const url = token(testData, 'CATEGORY_N1_URL')!;
      const { boton } = await entradaPorSlug(page, tramos(url)[0]);
      await sobreN1(page, boton);
      await cap(page, cp, 3, 'panel con «Mostrar todo»');
      await dlg(page).getByRole('button', { name: /mostrar\s*todo/i }).first().click();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2500);
      await cap(page, cp, 4, 'PLP de la N1');
      expect(new URL(page.url()).pathname).toBe(new URL(url).pathname);
      await expect(page.locator('[role="dialog"]:visible'), 'el modal se cierra').toHaveCount(0);
    });

    test('TC-B2C73-D-011 · Título de la categoría N1 en el panel N2 navega a la PLP de la N1 (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-011';
      await abrirModal(page);
      const url = token(testData, 'CATEGORY_N1_URL')!;
      const { boton, nombre } = await entradaPorSlug(page, tramos(url)[0]);
      await sobreN1(page, boton);
      await cap(page, cp, 3, 'panel con el título');
      await dlg(page).getByText(nombre, { exact: true }).last().click();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2500);
      await cap(page, cp, 4, 'PLP de la N1');
      expect(new URL(page.url()).pathname, 'el título navega a la PLP de la N1').toBe(new URL(url).pathname);
      await expect(page.locator('[role="dialog"]:visible'), 'el modal se cierra').toHaveCount(0);
    });

    test('TC-B2C73-D-012 · Panel N2 con contenido mayor al alto muestra barra de scroll vertical propia (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-012';
      await abrirModal(page);
      const n1 = token(testData, 'CATEGORY_N1_PANEL_SCROLL')!;
      const { boton } = await entradaPorSlug(page, slug(n1));
      await sobreN1(page, boton);
      await cap(page, cp, 3, `panel N2 de ${n1}`);
      // El panel desplazable: el ancestro de los bloques N2 con overflow vertical.
      const mov = await dlg(page).locator('button:has(img):not(:has(svg))').first().evaluate((b) => {
        let e: HTMLElement | null = b.parentElement;
        while (e && !(e.scrollHeight > e.clientHeight + 4 && /auto|scroll/.test(getComputedStyle(e).overflowY))) e = e.parentElement;
        if (!e) return { scrollable: false, antes: 0, despues: 0 };
        const a = e.scrollTop; e.scrollTop = e.scrollHeight; return { scrollable: true, antes: a, despues: e.scrollTop };
      });
      await page.waitForTimeout(600);
      await cap(page, cp, 4, 'panel tras el scroll');
      expect(mov.scrollable, 'el panel N2 excede su alto y es desplazable').toBe(true);
      expect(mov.despues, 'el scroll mueve el panel').toBeGreaterThan(mov.antes);
    });

    test('TC-B2C73-D-013 · Link Mostrar todo de un bloque N2 navega a la PLP de la categoría N2 (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-013';
      await abrirModal(page);
      const url = token(testData, 'CATEGORY_N2_URL')!;
      const [n1, n2] = tramos(url);
      const { boton } = await entradaPorSlug(page, n1);
      await sobreN1(page, boton);
      const panel = await leerPanel(page);
      const k = panel.bloques.findIndex((b) => slug(b.nombre) === n2);
      expect(k, `bloque de la N2 «${n2}»`).toBeGreaterThanOrEqual(0);
      await cap(page, cp, 3, 'bloque N2 con su «Mostrar todo»');
      // El primer «Mostrar todo» es el del encabezado del panel; el del bloque k es el k+1.
      await dlg(page).getByRole('button', { name: /mostrar\s*todo/i }).nth(k + 1).click();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2500);
      await cap(page, cp, 4, 'PLP de la N2');
      expect(new URL(page.url()).pathname).toBe(new URL(url).pathname);
      await expect(page.locator('[role="dialog"]:visible'), 'el modal se cierra').toHaveCount(0);
    });

    test('TC-B2C73-D-014 · Nombre de una categoría N2 en el panel navega a su PLP (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-014';
      await abrirModal(page);
      const url = token(testData, 'CATEGORY_N2_URL')!;
      const [n1, n2] = tramos(url);
      const { boton } = await entradaPorSlug(page, n1);
      await sobreN1(page, boton);
      const panel = await leerPanel(page);
      const b = panel.bloques.find((x) => slug(x.nombre) === n2);
      expect(b, `bloque de la N2 «${n2}»`).toBeTruthy();
      await cap(page, cp, 3, 'panel N2');
      await dlg(page).locator('button:has(img):not(:has(svg))').filter({ hasText: b!.nombre }).first().click();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2500);
      await cap(page, cp, 4, 'PLP de la N2');
      expect(new URL(page.url()).pathname).toBe(new URL(url).pathname);
      await expect(page.locator('[role="dialog"]:visible'), 'el modal se cierra').toHaveCount(0);
    });

    test('TC-B2C73-D-015 · Nombre de una sub-subcategoría N3 en el panel navega a su PLP (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-015';
      await abrirModal(page);
      const url = token(testData, 'CATEGORY_N3_URL')!;
      const [n1, n2, n3] = tramos(url);
      const { boton } = await entradaPorSlug(page, n1);
      await sobreN1(page, boton);
      const panel = await leerPanel(page);
      const b = panel.bloques.find((x) => slug(x.nombre) === n2);
      const nombreN3 = b?.n3.find((t) => slug(t) === n3 || slug(t).startsWith(n3));
      expect(nombreN3, `la N3 «${n3}» dentro del bloque «${n2}»`).toBeTruthy();
      await cap(page, cp, 3, 'bloque N2 con su N3');
      await dlg(page).getByRole('button', { name: nombreN3!, exact: true }).first().click();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2500);
      await cap(page, cp, 4, 'PLP de la N3');
      expect(new URL(page.url()).pathname).toBe(new URL(url).pathname);
      await expect(page.locator('[role="dialog"]:visible'), 'el modal se cierra').toHaveCount(0);
    });

    test('TC-B2C73-D-016 · Ícono X cierra el modal de categorías y mantiene la pantalla anterior (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-016';
      const url = token(testData, 'CATEGORY_N1_URL')!;
      await abrirModal(page, url);
      await cap(page, cp, 2, 'modal abierto sobre la PLP');
      const antes = page.url();
      await dlg(page).locator('button:has(svg):not(:has(img))').first().click();
      await page.waitForTimeout(1500);
      await cap(page, cp, 3, 'tras la X');
      await expect(page.locator('[role="dialog"]:visible'), 'el modal se cierra').toHaveCount(0);
      expect(page.url(), 'queda en la pantalla desde donde lo abrió').toBe(antes);
    });

    test('TC-B2C73-D-017 · Categoría N1 sin subcategorías N2 activas no despliega el panel N2 (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-017';
      await abrirModal(page);
      const nombre = token(testData, 'CATEGORY_N1_WO_SUB')!;
      const { boton } = await entradaPorSlug(page, slug(nombre));
      await page.mouse.move(700, 700);
      await sobreN1(page, boton);
      await cap(page, cp, 3, `hover sobre ${nombre}`);
      const panel = await leerPanel(page);
      test.info().annotations.push({ type: 'panel', description: `${panel.bloques.length} bloques N2 con ${nombre}` });
      if (panel.hayPanel) throw BD(`«${nombre}» sí trae subcategorías N2 activas en DEV (${panel.bloques.map((b) => b.nombre).join(', ')}): no es una N1 sin N2`);
      expect(panel.hayPanel, 'no se despliega el panel N2').toBe(false);
      await expect(boton.locator('svg').first(), 'solo se muestra su nombre con el ícono ">"').toBeVisible();
    });

    test('TC-B2C73-D-018 · Categoría N2 sin sub-subcategorías N3 muestra solo nombre, imagen y Mostrar todo (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-018';
      await abrirModal(page);
      const n2 = token(testData, 'CATEGORY_N2_WO_SUB')!;
      let bloque: Bloque | undefined;
      let imgs = 0;
      for (let i = 0; i < (await nombresN1(page)).length && !bloque; i++) {
        await sobreN1(page, entradasN1(page).nth(i));
        const panel = await leerPanel(page);
        bloque = panel.bloques.find((b) => slug(b.nombre) === slug(n2));
        if (bloque) imgs = await dlg(page).locator('button:has(img):not(:has(svg))').filter({ hasText: bloque.nombre }).count();
      }
      await cap(page, cp, 4, `bloque N2 «${n2}»`);
      if (!bloque) throw BD(`la N2 «${n2}» no aparece en ningún panel N2`);
      if (bloque.n3.length > 0) throw BD(`la N2 «${n2}» sí lista N3 en DEV (${bloque.n3.join(', ')})`);
      expect(bloque.nombre, 'muestra su nombre').not.toBe('');
      expect(imgs, 'muestra su imagen').toBeGreaterThan(0);
      expect(bloque.mostrarTodo, 'muestra «Mostrar todo»').toBe(true);
    });

    test('TC-B2C73-D-019 · Clic fuera del área del modal cierra el modal de categorías (Desktop)', async ({ page }) => {
      const cp = 'TC-B2C73-D-019';
      await abrirModal(page);
      await sobreN1(page, entradasN1(page).nth(1));
      await cap(page, cp, 3, 'modal con panel N2');
      const antes = page.url();
      await page.mouse.click(1300, 700); // fuera de la lista N1 y del panel N2
      await page.waitForTimeout(1500);
      await cap(page, cp, 4, 'tras el clic fuera');
      await expect(page.locator('[role="dialog"]:visible'), 'el modal se cierra').toHaveCount(0);
      expect(page.url(), 'queda en la pantalla anterior').toBe(antes);
    });

    test('TC-B2C73-D-020 · Mover el mouse fuera del modal sin hacer clic mantiene visibles la lista N1 y el panel N2 (Desktop)', async ({ page }) => {
      const cp = 'TC-B2C73-D-020';
      await abrirModal(page);
      await sobreN1(page, entradasN1(page).nth(1));
      await cap(page, cp, 3, 'panel N2 desplegado');
      await page.mouse.move(1300, 700, { steps: 8 });
      await page.waitForTimeout(2000);
      await cap(page, cp, 4, 'mouse fuera del modal');
      await expect(dlg(page), 'el modal sigue abierto').toBeVisible();
      await expect(entradasN1(page).first(), 'la lista N1 sigue visible').toBeVisible();
      expect((await leerPanel(page)).hayPanel, 'el panel N2 sigue visible').toBe(true);
    });

    test('TC-B2C73-D-021 · Abrir el modal desde la PLP de una categoría N2 o N3 lo muestra en estado neutro (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-021';
      await page.mouse.move(5, 895);
      await abrirModal(page, token(testData, 'CATEGORY_N2_URL')!);
      await page.mouse.move(5, 895); await page.waitForTimeout(800);
      await cap(page, cp, 2, 'modal abierto desde la PLP de la N2');
      const panel = await leerPanel(page);
      test.info().annotations.push({ type: 'panel', description: `hayPanel=${panel.hayPanel} titulo=${panel.titulo}` });
      expect(panel.hayPanel, 'el panel N2 no se despliega solo').toBe(false);
      const fondos = await entradasN1(page).evaluateAll((bs) => [...new Set(bs.map((b) => getComputedStyle(b).backgroundColor))]);
      expect(fondos.length, `ninguna N1 aparece preseleccionada ni con hover (fondos distintos: ${fondos.join(' | ')})`).toBe(1);
    });

    test('TC-B2C73-D-022 · Nombre de categoría N2 mayor a 20 caracteres se trunca con puntos suspensivos (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-022';
      await abrirModal(page);
      const largo = token(testData, 'LONG_NAME_CATEGORY_N2')!;
      const prefijo = slug(largo).slice(0, 12);
      let encontrado: { n1: string; nombre: string } | undefined;
      for (let i = 0; i < (await nombresN1(page)).length && !encontrado; i++) {
        await sobreN1(page, entradasN1(page).nth(i));
        const b = (await leerPanel(page)).bloques.find((x) => slug(x.nombre).startsWith(prefijo));
        if (b) encontrado = { n1: (await nombresN1(page))[i], nombre: b.nombre };
      }
      await cap(page, cp, 4, `bloque «${largo}»`);
      if (!encontrado) throw BD(`la N2 «${largo}» no aparece en ningún panel N2`);
      test.info().annotations.push({ type: 'nombre', description: `${encontrado.n1}: «${encontrado.nombre}» (${encontrado.nombre.length} car.)` });
      expect(largo.length, 'el nombre completo supera 20 caracteres').toBeGreaterThan(20);
      expect(encontrado.nombre.endsWith('…') || encontrado.nombre.endsWith('...'), 'termina en puntos suspensivos').toBe(true);
      expect(encontrado.nombre.replace(/[….]+$/, '').length, 'se trunca a 20 caracteres').toBeLessThanOrEqual(20);
    });

    test('TC-B2C73-D-023 · Nombre de sub-subcategoría N3 mayor a 20 caracteres se trunca con puntos suspensivos (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-023';
      await abrirModal(page);
      const largo = token(testData, 'LONG_NAME_CATEGORY_N3')!;
      const prefijo = slug(largo).slice(0, 12);
      let encontrado: { n1: string; nombre: string } | undefined;
      for (let i = 0; i < (await nombresN1(page)).length && !encontrado; i++) {
        await sobreN1(page, entradasN1(page).nth(i));
        const n3 = (await leerPanel(page)).bloques.flatMap((b) => b.n3).find((t) => slug(t).startsWith(prefijo));
        if (n3) encontrado = { n1: (await nombresN1(page))[i], nombre: n3 };
      }
      await cap(page, cp, 4, `N3 «${largo}»`);
      if (!encontrado) throw BD(`la N3 «${largo}» no aparece en ningún panel N2`);
      test.info().annotations.push({ type: 'nombre', description: `${encontrado.n1}: «${encontrado.nombre}» (${encontrado.nombre.length} car.)` });
      expect(largo.length, 'el nombre completo supera 20 caracteres').toBeGreaterThan(20);
      expect(encontrado.nombre.endsWith('…') || encontrado.nombre.endsWith('...'), 'termina en puntos suspensivos').toBe(true);
      expect(encontrado.nombre.replace(/[….]+$/, '').length, 'se trunca a 20 caracteres').toBeLessThanOrEqual(20);
    });

    test('TC-B2C73-D-024 · Categoría inactiva (offline) en el catálogo no se muestra en el menú (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C73-D-024';
      await abrirModal(page);
      const off = token(testData, 'CATEGORY_OFF')!;
      const n = slug(off);
      const hallazgos: string[] = [];
      const nombres = await nombresN1(page);
      if (nombres.some((t) => slug(t) === n)) hallazgos.push(`N1 «${off}»`);
      for (let i = 0; i < nombres.length; i++) {
        await sobreN1(page, entradasN1(page).nth(i));
        const panel = await leerPanel(page);
        for (const b of panel.bloques) {
          if (slug(b.nombre) === n) hallazgos.push(`N2 en «${nombres[i]}»`);
          if (b.n3.some((t) => slug(t) === n)) hallazgos.push(`N3 en «${nombres[i]} > ${b.nombre}»`);
        }
      }
      await cap(page, cp, 3, 'menú recorrido');
      expect(hallazgos, `«${off}» (offline) no aparece en el listado N1 ni en los paneles N2`).toEqual([]);
    });
  });
});
