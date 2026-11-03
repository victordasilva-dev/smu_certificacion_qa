import * as fs from 'fs';
import * as path from 'path';
import { BrowserContext, Locator, Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { baseUrl, loadTestData } from './support/testData';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { PDPPage } from './pages/PDPPage';
import { CarroPage } from './pages/CarroPage';

/**
 * B2C-44 — Shelf del carro: elementos, promociones, PPUM y tarjeta de subtotales (invitado).
 *
 * Los casos de invitado no declaraban una dirección; ahora declaran {DIRECCION_DESPACHO_003}. El carro
 * se arma UNA vez por form-factor (dirección + los 9 SKU) y cada caso revisa su producto en él, en
 * vez de rehacerlo por caso. Los casos 010 quedan sin `test()`: {SKU_NXM_Y_UNIPAY} está en TBD.
 *
 * Un caso que depende de una promoción Unipay se da por no ejecutable si la ficha del producto
 * tampoco muestra Unipay (la data no tiene la promoción vigente); si la ficha la muestra y el carro
 * no, es un defecto y falla.
 */

const SKUS: [string, number][] = [
  ['SKU_VALID_001', 2], ['SKU_NOMBRE_LARGO', 1], ['SKU_PROM_PCT_DESCUENTO', 1], ['SKU_PROM_PRECIO_FIJO', 1], ['SKU_PROM_NxM', 1],
  ['SKU_UNIPAY_001', 1], ['SKU_PCT_Y_UNIPAY', 1], ['SKU_PESABLE', 1], ['SKU_PESABLE_PCT_Y_UNIPAY', 1],
];
const pesos = (t: string) => Number(t.replace(/[^\d]/g, ''));
const BD = (m: string) => new Error(`PRECONDICION_NO_DISPONIBLE: ${m}`);

test.describe('B2C-44 — Shelf del carro', () => {
  for (const [ff, vp, L, sufijo] of [
    ['Desktop 1440x900', DESKTOP, 'D', 'Desktop'],
    ['Mobile 390x844', MOBILE, 'M', 'Mobile'],
  ] as const) {
    test.describe(ff, () => {
      test.describe.configure({ timeout: 300000 });
      let ctx: BrowserContext;
      let page: Page;
      const nombres: Record<string, string> = {};

      // Playwright reinicia su proceso tras cada prueba que falla: el carro no puede armarse en un beforeAll
      // (se rehacería en cada fallo). Se arma una vez en el caso 000, se guarda la sesión del invitado y cada
      // caso abre su navegador con ella; el carro vive en el servidor.
      const sesion = path.resolve(`.qa/auth/b44-${L}.json`);
      const archivoNombres = path.resolve(`.qa/auth/b44-${L}-nombres.json`);

      test.beforeEach(async ({ browser }) => {
        const td = loadTestData();
        ctx = await browser.newContext({ ...vp, baseURL: baseUrl(td), ...(fs.existsSync(sesion) ? { storageState: sesion } : {}) });
        page = await ctx.newPage();
        page.setDefaultTimeout(20000);
        if (fs.existsSync(archivoNombres)) Object.assign(nombres, JSON.parse(fs.readFileSync(archivoNombres, 'utf-8')));
      });
      test.afterEach(async () => {
        await ctx?.close();
      });

      test(`TC-B2C44-${L}-000 · Precondición: invitado con {DIRECCION_DESPACHO_003} y el carro armado (${sufijo})`, async () => {
        test.setTimeout(1200000);
        fs.rmSync(sesion, { force: true });
        const td = loadTestData();
        const dir = token(td, 'DIRECCION_DESPACHO_003')!;
        const n = dir.match(/\d{2,}/)![0];
        const home = await new PaginaHabilitada(page).goto();
        await home.cookies.aceptarSiAparece();
        await home.header.storeLocator.click();
        const modal = await new MetodoEntregaModal(page).esperarAbierto();
        await modal.fijarDireccionComoInvitado(dir, new RegExp(`(?<!\\d)${n}(?!\\d)`));
        page.setDefaultTimeout(30000);
        for (const [k, q] of SKUS) {
          const pdp = await new PDPPage(page).abrir(token(td, k)!);
          nombres[k] = (await pdp.nombreDelProducto.innerText()).trim();
          await pdp.fijarCantidad(q);
        }
        fs.mkdirSync(path.dirname(sesion), { recursive: true });
        await ctx.storageState({ path: sesion });
        fs.writeFileSync(archivoNombres, JSON.stringify(nombres));
      });

      const id = (n: string) => `TC-B2C44-${L}-${n}`;
      const carro = () => new CarroPage(page);
      const shelf = (k: string): Locator =>
        page.locator('main div')
          .filter({ has: page.getByRole('button', { name: `Eliminar ${nombres[k]}`, exact: true }) })
          .filter({ hasText: /\d+\s*(un|kg)/i })
          .filter({ hasText: /\$[\d.]+/ })
          .last();
      async function irAlCarro(): Promise<void> {
        await carro().goto();
        await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
        await shelf('SKU_VALID_001').waitFor({ state: 'visible', timeout: 30000 });
      }
      /**
       * ¿La ficha muestra una promoción Unipay vigente? Hace falta que mencione Unipay Y traiga un segundo precio:
       * {SKU_UNIPAY_001} solo trae la etiqueta «Promoción % Unipay» y un único precio, sin nada que verificar.
       */
      async function fichaTieneUnipay(k: string): Promise<boolean> {
        const pdp = await new PDPPage(page).abrir(token(loadTestData(), k)!);
        await page.waitForTimeout(2500);
        const t = await pdp.core.innerText();
        const precios = new Set((await pdp.datosDelProducto()).precios.map((x) => x.replace(/\s*c\/u/i, '').trim()));
        return /unipay/i.test(t) && precios.size >= 2;
      }
      const textoDe = async (k: string) => (await shelf(k).innerText()).replace(/\s+/g, ' ');

      test(`${id('001')} · El shelf de un ítem sin promoción muestra todos sus elementos [Guest] (${sufijo})`, async () => {
        const cp = id('001');
        await irAlCarro();
        const s = shelf('SKU_VALID_001');
        await carro().capturarEvidencia(cp, 3, 'shelf de {SKU_VALID_001}', { elemento: s });
        const eliminar = s.getByRole('button', { name: /^eliminar /i }).first();
        const texto = await textoDe('SKU_VALID_001');
        expect.soft((await eliminar.innerText()).trim(), 'ícono X arriba a la derecha (sin texto «Eliminar»)').toBe('');
        const img = await s.locator('img').first().boundingBox();
        expect.soft(Math.round(img?.width ?? 0), 'imagen de 90 px de ancho').toBe(90);
        expect.soft(Math.round(img?.height ?? 0), 'imagen de 90 px de alto').toBe(90);
        expect.soft(texto, '«Marca | Nombre»').toMatch(/\S+ \| /);
        expect.soft(texto, 'precio unitario «$X.XXX c/u»').toMatch(/\$[\d.]+ c\/u/);
        expect.soft(texto, 'cantidad «N un.»').toMatch(/\b2 un\./);
        expect.soft(await s.getByRole('button', { name: /^(sumar|restar|aumentar|disminuir|quitar)/i }).count(), 'controles de cantidad').toBeGreaterThanOrEqual(2);
        expect.soft(texto, 'link «Agregar instrucciones»').toMatch(/agregar instrucciones/i);
        await carro().capturarEvidencia(cp);
      });

      test(`${id('002')} · Un nombre de producto largo se trunca con puntos suspensivos [Guest] (${sufijo})`, async () => {
        const cp = id('002');
        await irAlCarro();
        const s = shelf('SKU_NOMBRE_LARGO');
        const nombre = s.getByText(nombres.SKU_NOMBRE_LARGO.slice(0, 25)).first();
        const m = await nombre.evaluate((e) => {
          const cands = [e as HTMLElement, (e as HTMLElement).parentElement as HTMLElement, (e as HTMLElement).parentElement?.parentElement as HTMLElement].filter(Boolean);
          const puntos = cands.some((c) => { const cs = getComputedStyle(c); return cs.textOverflow === 'ellipsis' || (cs.webkitLineClamp && cs.webkitLineClamp !== 'none'); });
          const desborda = cands.some((c) => c.scrollWidth > c.clientWidth + 1 || c.scrollHeight > c.clientHeight + 1);
          const caja = cands[cands.length - 1].getBoundingClientRect();
          return { puntos, desborda, ancho: (e as HTMLElement).getBoundingClientRect().right, contenedor: caja.right };
        });
        await carro().capturarEvidencia(cp, 3, 'shelf de {SKU_NOMBRE_LARGO}', { elemento: s });
        test.info().annotations.push({ type: 'nombre', description: JSON.stringify(m) });
        if (!m.puntos && !m.desborda) throw BD('el nombre de {SKU_NOMBRE_LARGO} cabe completo en una línea: no hay forma de ver el truncado con este SKU');
        expect.soft(m.puntos, 'el nombre se trunca con «…»').toBe(true);
        expect.soft(m.ancho, 'el texto no desborda el shelf').toBeLessThanOrEqual(m.contenedor + 1);
        await carro().capturarEvidencia(cp);
      });

      test(`${id('003')} · Un pesable muestra la cantidad en kg en el shelf [Guest] (${sufijo})`, async () => {
        const cp = id('003');
        await irAlCarro();
        const s = shelf('SKU_PESABLE');
        await carro().capturarEvidencia(cp, 3, 'shelf de {SKU_PESABLE}', { elemento: s });
        const texto = await textoDe('SKU_PESABLE');
        test.info().annotations.push({ type: 'shelf pesable', description: texto });
        expect(texto, 'la cantidad se muestra en kg («N,N kg»)').toMatch(/\d+([.,]\d+)?\s*kg\b(?!\))/i);
        await carro().capturarEvidencia(cp);
      });

      test(`${id('004')} · Un invitado ve «Agregar instrucciones» y al tocarlo se abre el modal [Guest] (${sufijo})`, async () => {
        const cp = id('004');
        await irAlCarro();
        const s = shelf('SKU_VALID_001');
        await carro().capturarEvidencia(cp, 3, 'shelf con «Agregar instrucciones»', { elemento: s });
        const link = s.getByText(/agregar instrucciones/i).first();
        await expect(link, 'link «Agregar instrucciones»').toBeVisible();
        await link.click();
        const modal = page.getByText(/te gustar[ií]a algo en especial/i).first();
        await expect(modal, 'se abre el modal «¿Te gustaría algo en especial?»').toBeVisible({ timeout: 15000 });
        await carro().capturarEvidencia(cp);
        await page.keyboard.press('Escape');
      });

      test(`${id('005')} · Un ítem con porcentaje de descuento muestra badge, precio final y precio anterior [Guest] (${sufijo})`, async () => {
        const cp = id('005');
        await irAlCarro();
        const s = shelf('SKU_PROM_PCT_DESCUENTO');
        await carro().capturarEvidencia(cp, 3, 'shelf de {SKU_PROM_PCT_DESCUENTO}', { elemento: s });
        const texto = await textoDe('SKU_PROM_PCT_DESCUENTO');
        test.info().annotations.push({ type: 'shelf', description: texto });
        expect.soft(texto, 'badge amarillo «X%»').toMatch(/\d+\s*%/);
        expect.soft(texto, 'precio con descuento «$X c/u»').toMatch(/\$[\d.]+ c\/u/);
        expect.soft(texto, '«Antes:» con el precio original').toMatch(/antes:?\s*\$[\d.]+/i);
        await carro().capturarEvidencia(cp);
      });

      test(`${id('006')} · Un ítem con promoción de precio fijo muestra precio final y precio anterior [Guest] (${sufijo})`, async () => {
        const cp = id('006');
        await irAlCarro();
        const s = shelf('SKU_PROM_PRECIO_FIJO');
        await carro().capturarEvidencia(cp, 3, 'shelf de {SKU_PROM_PRECIO_FIJO}', { elemento: s });
        const texto = await textoDe('SKU_PROM_PRECIO_FIJO');
        test.info().annotations.push({ type: 'shelf', description: texto });
        expect.soft(texto, 'precio final «$X c/u»').toMatch(/\$[\d.]+ c\/u/);
        expect.soft(texto, '«Antes:» con el precio anterior tachado').toMatch(/antes:?\s*\$[\d.]+/i);
        await carro().capturarEvidencia(cp);
      });

      test(`${id('007')} · Un ítem con NxM incompleto muestra precio sin badge y el mensaje rojo «Te faltan N» [Guest] (${sufijo})`, async () => {
        const cp = id('007');
        await irAlCarro();
        const s = shelf('SKU_PROM_NxM');
        await carro().capturarEvidencia(cp, 3, 'shelf de {SKU_PROM_NxM}', { elemento: s });
        const texto = await textoDe('SKU_PROM_NxM');
        expect.soft(texto, 'precio unitario «$X c/u»').toMatch(/\$[\d.]+ c\/u/);
        expect.soft(texto, 'sin badge de porcentaje').not.toMatch(/\d+\s*%/);
        expect.soft(texto, 'sin precio tachado «Antes:»').not.toMatch(/antes:/i);
        const msg = s.getByText(/te faltan \d+ para la promo/i).first();
        await expect.soft(msg, 'mensaje «Te faltan N para la promo»').toBeVisible();
        const rojo = await msg.evaluate((e) => { const m = getComputedStyle(e as HTMLElement).color.match(/\d+/g)!.map(Number); return m[0] > 150 && m[1] < 90 && m[2] < 90; }, undefined, { timeout: 5000 }).catch(() => false);
        expect.soft(rojo, 'el mensaje es rojo').toBe(true);
        await carro().capturarEvidencia(cp);
      });

      for (const [n, k, desc] of [
        ['008', 'SKU_UNIPAY_001', 'Un ítem con precio Unipay muestra el precio regular y el tag Unipay'],
        ['009', 'SKU_PCT_Y_UNIPAY', 'Un ítem con descuento y promoción de medio de pago muestra ambas en orden'],
        ['012', 'SKU_PESABLE_PCT_Y_UNIPAY', 'Con descuento y medio de pago el PPUM se muestra en ambos precios'],
      ] as const) {
        test(`${id(n)} · ${desc} [Guest] (${sufijo})`, async () => {
          const cp = id(n);
          await irAlCarro();
          const s = shelf(k);
          await carro().capturarEvidencia(cp, 3, `shelf de {${k}}`, { elemento: s });
          const texto = await textoDe(k);
          test.info().annotations.push({ type: 'shelf', description: texto });
          const enFicha = await fichaTieneUnipay(k);
          if (!enFicha && !/unipay/i.test(texto)) throw BD(`{${k}} no tiene promoción Unipay vigente: ni su ficha ni el carro muestran un precio Unipay (el carro solo trae «${texto.match(/\$[\d.]+ c\/u/)?.[0] ?? ''}»)`);
          expect.soft(texto, 'tag Unipay con su precio').toMatch(/unipay/i);
          if (n !== '008') expect.soft(texto, 'descuento (badge y «Antes:»)').toMatch(/\d+\s*%|antes:/i);
          if (n === '012') expect.soft((texto.match(/\(\$[\d.]+ x /gi) ?? []).length, 'PPUM en ambos precios').toBeGreaterThanOrEqual(2);
          await carro().capturarEvidencia(cp);
        });
      }

      test(`${id('011')} · Un producto por peso muestra el precio por unidad de medida entre paréntesis [Guest] (${sufijo})`, async () => {
        const cp = id('011');
        await irAlCarro();
        const s = shelf('SKU_PESABLE');
        await carro().capturarEvidencia(cp, 3, 'shelf de {SKU_PESABLE}', { elemento: s });
        const texto = await textoDe('SKU_PESABLE');
        test.info().annotations.push({ type: 'shelf pesable', description: texto });
        expect(texto, 'PPUM entre paréntesis, p. ej. «($2.990 x Kg)»').toMatch(/\(\$[\d.]+ x kg\)/i);
        await carro().capturarEvidencia(cp);
      });

      // --- Tarjeta de subtotales ---------------------------------------------------------------
      const tarjeta = () => page.locator('main').last();
      for (const [n, desc] of [
        ['013', 'La tarjeta de subtotales muestra Subtotal y Subtotal con Unipay con su ícono'],
        ['014', 'El monto Subtotal con Unipay descuenta solo el ahorro de los ítems Unipay'],
        ['015', 'Los subtotales se recalculan al aumentar la cantidad de un ítem Unipay'],
        ['017', 'Al eliminar el único ítem Unipay desaparece Subtotal con Unipay'],
      ] as const) {
        test(`${id(n)} · ${desc} [Guest] (${sufijo})`, async () => {
          const cp = id(n);
          await irAlCarro();
          await carro().capturarEvidencia(cp, 3, 'tarjeta de subtotales', { elemento: tarjeta() });
          const hay = await tarjeta().getByText(/^subtotal con unipay$/i).count();
          if (!hay && !(await fichaTieneUnipay('SKU_UNIPAY_001'))) throw BD('{SKU_UNIPAY_001} no tiene promoción Unipay vigente: ni su ficha ni la tarjeta del carro muestran «Subtotal con Unipay»; el carro solo trae «Subtotal»');
          await expect(tarjeta().getByText(/^subtotal con unipay$/i).first(), 'línea «Subtotal con Unipay»').toBeVisible();
          await carro().capturarEvidencia(cp);
        });
      }

      test(`${id('016')} · Sin ítems con descuento Unipay no se muestra Subtotal con Unipay [Guest] (${sufijo})`, async () => {
        const cp = id('016');
        await irAlCarro();
        const t = tarjeta();
        await carro().capturarEvidencia(cp, 3, 'tarjeta de subtotales', { elemento: t });
        await expect.soft(t.getByText(/^subtotal$/i).first(), 'línea «Subtotal»').toBeVisible();
        expect.soft(pesos(await carro().subtotal.innerText()), 'monto del Subtotal').toBeGreaterThan(0);
        await expect.soft(t.getByText(/subtotal con unipay/i), 'sin «Subtotal con Unipay»').toHaveCount(0);
        await carro().capturarEvidencia(cp);
      });
    });
  }
});
