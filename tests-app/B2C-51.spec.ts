import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import type { Plataforma } from '../tests/support/rutasEvidencia';
import { TabBar } from './pages/TabBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { PDPScreen } from './pages/PDPScreen';
import { CombinaLaPromoModal } from './pages/CombinaLaPromoModal';
import { arrancarInvitado, visibleEn } from './support/entregaApp';
import { colorMedio, tieneTachado } from './support/pixeles';
import { tolerante } from './support/tolerante';

/**
 * B2C-51 — Bloque de precios de la PDP (app nativa).
 *
 * Las filas dicen "Viewport: App iOS/Android" sin "Plataforma:"; esta corrida (2026-10-16) certifica
 * **solo Android** con el build v1.0.7 ({APP_BUILD}) en el emulador local. iOS queda Pendiente.
 *
 * Corren 001, 002 y 015 (invitado). Quedan sin `test()` (Bloqueado Data): 005, 008–010
 * ({COMPRADOR_MEMBRESIA_USER} es un correo; la v1.0.7 solo entra con RUT), 012
 * ({SKU_NXPRECIO_UNIPAY} sin valor), 003, 004, 013, 014, 016 (usan {SKU_PROM_NxM} /
 * {SKU_PROM_NxPRECIO} sin declararlos), 006, 007 y 011 (los SKU de Unipay / Banco Estado no muestran
 * el precio especial que declaran: 674114 y 661945 sin badge, 642688 con el badge de Unipay).
 */

const PLATAFORMA = 'Android' as const;

/** Invitado con datos borrados: busca el SKU y abre su PDP. */
async function abrirPDP(screen: Screen, device: any, bundleId: string, p: Plataforma, sku: string, cp: string): Promise<PDPScreen> {
  const tabs: TabBar = await arrancarInvitado(screen, device, bundleId, p);
  await tolerante(() => tabs.tapBuscar());
  const buscar = await tolerante(() => new BuscarScreen(screen, p).waitUntilReady());
  const srp = await tolerante(() => buscar.buscar(sku));
  await tolerante(() => expect(srp.producto(sku), 'el SKU aparece en la búsqueda').toBeVisible({ timeout: 30000 }));
  await tolerante(() => srp.producto(sku).tap());
  const pdp = await tolerante(() => new PDPScreen(screen, p).waitUntilReady());
  await tolerante(() => expect(pdp.botonAgregar).toBeVisible({ timeout: 30000 }));
  await pdp.capturarEvidencia(cp, 2, 'PDP cargada');
  return pdp;
}

test.describe(`B2C-51 — Bloque de precios de la PDP (${PLATAFORMA})`, () => {
  test.describe.configure({ timeout: 300000 });

  test(`TC-B2C51-APP-001 · Sin promoción el bloque de precios muestra solo el precio lista sin tachar [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C51-APP-001';
    const pdp = await abrirPDP(screen, device, bundleId!, p, token(testData, 'SKU_SIN_PROMO')!, cp);
    const bloque = await tolerante(() => pdp.bloqueDePrecios());
    const precios = bloque.filter((t) => /^\$[\d.]+$/.test(t.texto));
    expect(precios.map((t) => t.texto), 'un solo precio').toHaveLength(1);
    expect(bloque.some((t) => /^antes/i.test(t.texto)), 'sin "Antes"').toBe(false);
    expect(bloque.some((t) => /^\d+%$/.test(t.texto)), 'sin badge de descuento').toBe(false);
    expect(bloque.some((t) => /por \$|c\/u/i.test(t.texto)), 'sin precio de promo').toBe(false);
    const png = await screen.screenshot();
    const c = precios[0];
    expect(await tieneTachado(png, { x: c.x, y: c.y, ancho: c.ancho, alto: c.alto }), 'precio lista sin tachar').toBe(false);
    await pdp.capturarEvidencia(cp, 3, 'bloque de precios sin promoción');
    await pdp.capturarEvidencia(cp);
  });

  test(`TC-B2C51-APP-002 · Con oferta activa se muestran Antes tachado, badge % y precio oferta [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C51-APP-002';
    const pdp = await abrirPDP(screen, device, bundleId!, p, token(testData, 'SKU_PRECIO_OFERTA')!, cp);
    const bloque = await tolerante(() => pdp.bloqueDePrecios());
    const badge = bloque.find((t) => /^\d+%$/.test(t.texto));
    const oferta = bloque.find((t) => /^\$[\d.]+$/.test(t.texto));
    const antes = bloque.find((t) => /^antes:?\s*\$[\d.]+$/i.test(t.texto));
    const ppum = bloque.find((t) => /^\(\$[\d.]+ x (kg|lt?|litro|ml|un)\)$/i.test(t.texto));
    expect(badge, 'badge "XX%"').toBeTruthy();
    expect(oferta, 'precio oferta').toBeTruthy();
    expect(antes, '"Antes" + precio lista').toBeTruthy();
    const pesos = (s: string) => Number(s.replace(/[^\d]/g, ''));
    const lista = pesos(antes!.texto);
    const venta = pesos(oferta!.texto);
    expect(venta, 'oferta < lista').toBeLessThan(lista);
    expect(Number(badge!.texto.replace('%', '')), '% = (lista − oferta) / lista × 100, redondeado').toBe(Math.round(((lista - venta) / lista) * 100));
    if (ppum) {
      // PPUM recalculado sobre la oferta: el cociente oferta / PPUM es el contenido del envase (en kg/l).
      const contenido = venta / pesos(ppum.texto);
      expect(contenido, `PPUM ${ppum.texto} coherente con la oferta`).toBeGreaterThan(0);
      expect(Math.abs(contenido * 1000 - Math.round(contenido * 1000)), 'PPUM calculado sobre la oferta').toBeLessThan(1);
    }
    const png = await screen.screenshot();
    const a = antes!;
    expect(await tieneTachado(png, { x: a.x, y: a.y, ancho: a.ancho, alto: a.alto }), 'precio lista tachado').toBe(true);
    const [r, g, b] = await colorMedio(png, { x: badge!.x, y: badge!.y, ancho: badge!.ancho, alto: badge!.alto });
    expect(r > 200 && g > 180 && b < 160, `badge con fondo amarillo (rgb ${r},${g},${b})`).toBe(true);
    await pdp.capturarEvidencia(cp, 3, 'bloque de precios con oferta');
    await pdp.capturarEvidencia(cp);
  });

  test(`TC-B2C51-APP-015 · Un producto con Combina la promo muestra el botón y abre el drawer [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C51-APP-015';
    const pdp = await abrirPDP(screen, device, bundleId!, p, token(testData, 'SKU_COMBINA_PROMO')!, cp);
    await tolerante(() => expect(pdp.botonCombinaLaPromo, '"Combina la promo" bajo el precio').toBeVisible());
    const bloque = await tolerante(() => pdp.bloqueDePrecios());
    expect(bloque.some((t) => /^lleva \d+ por \$/i.test(t.texto)), 'precio de la promo en el bloque').toBe(true);
    await tolerante(() => pdp.botonCombinaLaPromo.tap());
    const modal = new CombinaLaPromoModal(screen, p);
    // "Combina la promo" es también el texto del botón de la PDP: el drawer se reconoce por su contador.
    await tolerante(() => expect(modal.contador, 'se abre el drawer "Combina la promo" (N / M productos)').toBeVisible({ timeout: 30000 }));
    await modal.capturarEvidencia(cp, 4, 'drawer Combina la promo');
    await tolerante(() => modal.cerrar());
    await tolerante(() => expect(modal.contador, 'el drawer se cierra').toBeHidden({ timeout: 20000 }));
    // El stepper no dispara los toasts de "Completa la promo".
    await tolerante(() => pdp.botonAgregar.tap());
    expect(await visibleEn(pdp.toastCompletaLaPromo, 6000), 'sin toast de Completa la promo').toBe(false);
    await pdp.capturarEvidencia(cp, 5, 'stepper sin toasts de Completa la promo');
    await pdp.capturarEvidencia(cp);
  });
});
