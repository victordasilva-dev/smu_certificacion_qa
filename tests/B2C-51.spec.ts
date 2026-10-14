import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { PDPPage } from './pages/PDPPage';
import { LoginModal } from './pages/LoginModal';

/**
 * B2C-51 — Bloque de precios (PDP y tarjeta de producto).
 *
 * Corrida 2026-10-07 (planilla SP1): los 5 TC Mobile que quedaban pendientes. Solo M-003 y M-004
 * tienen `test()`. M-013 y M-014 piden "método de entrega activo" sin declarar dirección ni tienda,
 * y M-016 necesita el stepper de {SKU_PROM_NxM}, que hoy está sin stock ("Pronto disponible"):
 * los tres quedaron en `Bloqueado Data`.
 *
 * "Destacado" se mide por el peso visual: el precio compuesto tiene que pintarse al menos tan grande
 * como el precio unitario que va debajo. El bloque se lee con `PDPPage.bloqueDePrecios()`, que
 * separa los precios del producto de los del carrusel de similares.
 *
 * Re-corrida 2026-10-09: con los SKU ya declarados se suman D-001, M-001, M-002, M-009, M-010 y
 * M-015. Siguen sin `test()` los que piden Unipay/Banco Estado (no existen en DEV), los que necesitan
 * un segundo SKU que la fila no declara (D-002, D-003, D-004) y los de {SKU_PROM_NxM}, sin stock.
 */

function tokenExigido(testData: Parameters<typeof token>[0], nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) throw new Error(`Falta {${nombre}} en el Excel de data: el TC lo declara`);
  return valor;
}

type Bloque = Awaited<ReturnType<PDPPage['bloqueDePrecios']>>;
type Oferta = Awaited<ReturnType<PDPPage['marcasDeOferta']>>;

const aNumero = (texto: string) => Number(texto.replace(/[^\d]/g, ''));

/** El amarillo del badge (#FFE572 y vecinos): rojo y verde altos, azul bajo. */
function esAmarillo(rgb: string): boolean {
  const [r, g, b] = (rgb.match(/\d+/g) ?? []).map(Number);
  return r > 200 && g > 180 && b < 160;
}

function anotarBloque(bloque: Bloque, oferta: Oferta) {
  test.info().annotations.push({
    type: 'bloque',
    description:
      bloque.map((b) => `${b.texto} [${b.fontSize}px${b.socio ? ' socio' : ''}]`).join(' | ') +
      ` · tachados: ${oferta.tachados.map((t) => t.texto).join(', ') || '-'} · badge: ${oferta.badge?.texto ?? '-'} · Antes: ${oferta.antes}`,
  });
}

/** Los precios (sin PPUM) en orden vertical, clasificados como oferta, lista tachado o membresía. */
function ordenDePrecios(bloque: Bloque, oferta: Oferta): { texto: string; y: number; clase: 'oferta' | 'lista' | 'membresia' | 'otro' }[] {
  const precios = [
    // `bloqueDePrecios` también lista el precio tachado: se toma de `oferta.tachados`, no de aquí.
    ...bloque.filter((b) => b.tipo !== 'ppum' && !oferta.tachados.some((t) => t.texto === b.texto && Math.abs(t.y - b.y) < 4)).map((b) => ({ texto: b.texto, y: b.y, clase: (b.socio ? 'membresia' : 'oferta') as 'oferta' | 'membresia' })),
    ...oferta.tachados.map((t) => ({ texto: t.texto, y: t.y, clase: 'lista' as const })),
  ];
  return precios.sort((a, b) => a.y - b.y);
}

/** Sesión con la cuenta de membresía declarada y la PDP del SKU. */
async function pdpConMembresia(page: Page, testData: Parameters<typeof token>[0], sku: string): Promise<PDPPage> {
  const pdp = await new PDPPage(page).abrir(sku);
  await new LoginModal(page).iniciarSesion(
    tokenExigido(testData, 'COMPRADOR_MEMBRESIA_USER'),
    tokenExigido(testData, 'COMPRADOR_MEMBRESIA_PASSWORD'),
  );
  return pdp.abrir(sku);
}

/** D-001 / M-001: solo el precio lista, destacado, sin tachado ni badge, con PPUM si lo trae. */
async function sinPromocion(pdp: PDPPage, cp: string) {
  const bloque = await pdp.bloqueDePrecios();
  const oferta = await pdp.marcasDeOferta();
  anotarBloque(bloque, oferta);
  await pdp.capturarEvidencia(cp, 2, 'bloque de precios sin promoción', { elemento: pdp.core });
  const precios = bloque.filter((b) => b.tipo !== 'ppum');
  expect(precios.map((p) => p.texto), 'un solo precio (el precio lista)').toHaveLength(1);
  expect(precios[0].tipo).toBe('precio');
  expect(precios[0].socio, 'sin precio de membresía').toBe(false);
  expect(oferta.tachados, 'sin tachado').toEqual([]);
  expect(oferta.badge, 'sin badge de descuento').toBeNull();
  expect(precios[0].fontSize, 'precio lista destacado').toBeGreaterThanOrEqual(20);
  const ppum = bloque.filter((b) => b.tipo === 'ppum');
  if (ppum.length) expect(bloque.indexOf(ppum[0]), 'el PPUM va debajo del precio').toBeGreaterThan(bloque.indexOf(precios[0]));
  await pdp.capturarEvidencia(cp);
}

test.describe('B2C-51 — Bloque de precios', () => {
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    for (const caso of [
      {
        cp: 'TC-B2C51-M-003',
        titulo: 'Verificar que con promo NxM se muestra el precio compuesto "N por M a $X"',
        tokenSku: 'SKU_PROM_NxM',
        formato: /^\d+\s+por\s+\d+\s+a\s+\$[\d.]+$/i,
      },
      {
        cp: 'TC-B2C51-M-004',
        titulo: 'Verificar que con promo NxPrecio se muestra "Lleva N por $X"',
        tokenSku: 'SKU_PROM_NxPRECIO',
        formato: /^lleva\s+\d+\s+por\s+\$[\d.]+$/i,
      },
    ]) {
      test(`${caso.cp} · ${caso.titulo} (Mobile)`, async ({ page, testData }) => {
        const { cp } = caso;
        test.setTimeout(120000);
        const sku = tokenExigido(testData, caso.tokenSku);

        // Pasos 1 y 2 — la PDP del SKU con la promo.
        const pdp = await new PDPPage(page).abrir(sku);
        const bloque = await pdp.bloqueDePrecios();
        test.info().annotations.push({ type: 'bloque', description: bloque.map((b) => `${b.texto} [${b.fontSize}px/${b.fontWeight}${b.socio ? ' socio' : ''}]`).join(' | ') });
        await pdp.capturarEvidencia(cp, 2, 'bloque de precios de la PDP', { elemento: pdp.core });

        // Esperado — compuesto principal destacado, con su PPUM, y debajo el unitario con su PPUM.
        const i = bloque.findIndex((b) => b.tipo === 'compuesto' && !b.socio);
        expect(i, 'se muestra el precio compuesto de la promo').toBeGreaterThanOrEqual(0);
        const compuesto = bloque[i];
        expect(compuesto.texto, 'con el formato de la mecánica').toMatch(caso.formato);
        expect(bloque[i + 1]?.tipo, 'acompañado del PPUM estimado según la promo').toBe('ppum');
        const j = bloque.findIndex((b, k) => k > i && b.tipo === 'precio' && !b.socio);
        expect(j, 'debajo se muestra el precio unitario original').toBeGreaterThan(i);
        expect(bloque[j + 1]?.tipo, 'con su PPUM original').toBe('ppum');
        const unitario = bloque[j];
        expect(
          compuesto.fontSize,
          `el compuesto "${compuesto.texto}" (${compuesto.fontSize}px/${compuesto.fontWeight}) es el precio destacado frente al unitario "${unitario.texto}" (${unitario.fontSize}px/${unitario.fontWeight})`,
        ).toBeGreaterThanOrEqual(unitario.fontSize);
        await pdp.capturarEvidencia(cp);
      });
    }

    // ---------------------------------------------- re-corrida 2026-10-09: SKU ya declarados

    test('TC-B2C51-M-001 · Verificar que sin promocion el bloque de precios muestra solo el precio lista sin tachar (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C51-M-001';
      test.setTimeout(120000);
      const pdp = await new PDPPage(page).abrir(tokenExigido(testData, 'SKU_SIN_PROMO'));
      await sinPromocion(pdp, cp);
    });

    test('TC-B2C51-M-002 · Verificar que con oferta activa se muestran Antes tachado, badge % y precio oferta (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C51-M-002';
      test.setTimeout(120000);

      // Pasos 1 y 2 — PDP de {SKU_PRECIO_OFERTA}.
      const pdp = await new PDPPage(page).abrir(tokenExigido(testData, 'SKU_PRECIO_OFERTA'));
      const bloque = await pdp.bloqueDePrecios();
      const oferta = await pdp.marcasDeOferta();
      anotarBloque(bloque, oferta);
      await pdp.capturarEvidencia(cp, 2, 'bloque de precios con oferta', { elemento: pdp.core });

      // Esperado — precio oferta con su PPUM recalculado, badge XX% amarillo correcto y lista tachado.
      const principal = bloque.find((b) => b.tipo === 'precio' && !b.socio)!;
      expect(principal, 'precio oferta').toBeTruthy();
      expect(oferta.tachados.length, 'precio lista tachado').toBe(1);
      const lista = aNumero(oferta.tachados[0].texto);
      const precioOferta = aNumero(principal.texto);
      expect(oferta.badge, 'badge de descuento').not.toBeNull();
      expect(oferta.badge!.texto.replace(/\s/g, '')).toBe(`${Math.round(((lista - precioOferta) / lista) * 100)}%`);
      expect(esAmarillo(oferta.badge!.fondo), `badge en amarillo (${oferta.badge!.fondo})`).toBe(true);
      expect(bloque[bloque.indexOf(principal) + 1]?.tipo, 'PPUM del precio oferta').toBe('ppum');
      expect(oferta.antes, 'el precio lista tachado va precedido de "Antes"').toBe(true);
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C51-M-009 · Verificar que oferta + membresia muestra oferta, lista tachado y badge Membresia (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C51-M-009';
      test.setTimeout(180000);

      // Precondición y pasos 1-2 — sesión con {COMPRADOR_MEMBRESIA_USER} y PDP de {SKU_OFERTA_MEMBRESIA}.
      const pdp = await pdpConMembresia(page, testData, tokenExigido(testData, 'SKU_OFERTA_MEMBRESIA'));
      const bloque = await pdp.bloqueDePrecios();
      const oferta = await pdp.marcasDeOferta();
      anotarBloque(bloque, oferta);
      await pdp.capturarEvidencia(cp, 2, 'bloque de precios oferta + membresía', { elemento: pdp.core });

      // Esperado — 1: oferta · 2: lista tachado · 3: badge Membresía; no más de 3 precios.
      const precios = ordenDePrecios(bloque, oferta);
      test.info().annotations.push({ type: 'orden', description: precios.map((p) => p.clase).join(' > ') });
      expect(precios.length, 'no hay más de 3 precios').toBeLessThanOrEqual(3);
      expect(precios.map((p) => p.clase), 'orden de los precios').toEqual(['oferta', 'lista', 'membresia']);
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C51-M-010 · Verificar que NxM + membresia muestra el precio compuesto y el badge Membresia (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C51-M-010';
      test.setTimeout(180000);

      // Precondición y pasos 1-2 — sesión con {COMPRADOR_MEMBRESIA_USER} y PDP de {SKU_NXM_MEMBRESIA}.
      const pdp = await pdpConMembresia(page, testData, tokenExigido(testData, 'SKU_NXM_MEMBRESIA'));
      const bloque = await pdp.bloqueDePrecios();
      anotarBloque(bloque, await pdp.marcasDeOferta());
      await pdp.capturarEvidencia(cp, 2, 'bloque de precios NxM + membresía', { elemento: pdp.core });

      // Esperado — 1: compuesto destacado · 3: badge Membresía; no más de 3 precios.
      const precios = bloque.filter((b) => b.tipo !== 'ppum');
      expect(precios.length, 'no hay más de 3 precios').toBeLessThanOrEqual(3);
      const compuesto = precios[0];
      expect(compuesto.tipo, 'el primer precio es el compuesto de la promo').toBe('compuesto');
      expect(compuesto.socio).toBe(false);
      const otros = precios.filter((p) => p !== compuesto && !p.socio);
      for (const o of otros)
        expect.soft(compuesto.fontSize, `el compuesto "${compuesto.texto}" (${compuesto.fontSize}px) es el destacado frente a "${o.texto}" (${o.fontSize}px)`).toBeGreaterThanOrEqual(o.fontSize);
      expect(precios.findIndex((p) => p.socio), 'el precio de Membresía (💎) es el tercero').toBe(2);
      await pdp.capturarEvidencia(cp);
    });

    test('TC-B2C51-M-015 · Verificar que un producto con Combina la promo muestra el boton y abre el drawer (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C51-M-015';
      test.setTimeout(120000);

      // Pasos 1 y 2 — PDP de {SKU_COMBINA_PROMO}: "Combina la promo" bajo el precio.
      const pdp = await new PDPPage(page).abrir(tokenExigido(testData, 'SKU_COMBINA_PROMO'));
      const boton = pdp.combinaLaPromo;
      await expect(boton).toBeVisible();
      const ultimoPrecio = (await pdp.bloqueDePrecios()).at(-1)!;
      expect((await boton.boundingBox())!.y, 'el botón va bajo el bloque de precios').toBeGreaterThan(ultimoPrecio.y);
      await pdp.capturarEvidencia(cp, 2, 'botón Combina la promo bajo el precio', { elemento: pdp.core });

      // Pasos 3 y 4 — el drawer para elegir la combinación, sin toasts de "Completa la promo".
      await boton.click();
      await expect(pdp.drawerCombinaLaPromo).toBeVisible({ timeout: 15000 });
      await expect(pdp.drawerCombinaLaPromo).toContainText(/\d+\s*\/\s*\d+\s*productos/i);
      await expect(page.getByText(/te falta|completaste la promo/i)).toHaveCount(0);
      await pdp.capturarEvidencia(cp, 4, 'drawer Combina la promo', { elemento: pdp.drawerCombinaLaPromo });
      await pdp.capturarEvidencia(cp);
    });
  });

  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C51-D-001 · Sin promocion activa el bloque de precios muestra solo el precio lista destacado sin tachado (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C51-D-001';
      test.setTimeout(120000);
      const pdp = await new PDPPage(page).abrir(tokenExigido(testData, 'SKU_SIN_PROMO'));
      await sinPromocion(pdp, cp);
    });
  });
});
