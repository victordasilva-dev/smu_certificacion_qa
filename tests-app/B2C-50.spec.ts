import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import type { Plataforma } from '../tests/support/rutasEvidencia';
import { TabBar } from './pages/TabBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { CarroScreen } from './pages/CarroScreen';
import { CombinaLaPromoModal } from './pages/CombinaLaPromoModal';
import { arrancarInvitado } from './support/entregaApp';
import { tolerante } from './support/tolerante';

/**
 * B2C-50 — Mensaje "Te faltan N para la promo" en el carro (app nativa).
 *
 * Las filas dicen "Viewport: App iOS/Android" sin "Plataforma:"; esta corrida (2026-10-16) certifica
 * **solo Android** con el build v1.0.7 ({APP_BUILD}) en el emulador local. iOS queda Pendiente.
 * En la app el invitado sí agrega al carro sin dirección (desde la búsqueda).
 *
 * Solo corren 003 y 011, que no dependen de {CANTIDAD_PROMO_COMBINA}. Quedan sin `test()`
 * (Bloqueado Data): 001, 008, 010 ({SKU_COMBINA_PROMO} lleva "Lleva 2" y {CANTIDAD_PROMO_COMBINA}
 * vale 3), 002 ({USER_AUTH_001} es un correo; la v1.0.7 solo entra con RUT) y 004–007, 009, 012
 * ({SKU_COMPLETA_PROMO_3X2} tiene una promo Combina —"Combina la promo", "Ver productos
 * combinables"—, no una Completa del mismo SKU).
 */

const PLATAFORMA = 'Android' as const;

/** Precondición: invitado con datos borrados y el carro solo con `sku` × 1, agregado desde la búsqueda. Abre el carro. */
async function carroConUnaUnidad(screen: Screen, device: any, bundleId: string, p: Plataforma, sku: string, cp: string): Promise<CarroScreen> {
  const tabs: TabBar = await arrancarInvitado(screen, device, bundleId, p);
  await tolerante(() => tabs.tapBuscar());
  const buscar = await tolerante(() => new BuscarScreen(screen, p).waitUntilReady());
  const srp = await tolerante(() => buscar.buscar(sku));
  await tolerante(() => expect(srp.botonAgregar(sku), 'el SKU tiene "Agregar"').toBeVisible({ timeout: 30000 }));
  await tolerante(() => srp.botonAgregar(sku).tap());
  await tolerante(() => expect(tabs.floatingPill, 'precondición: el carro tiene el SKU').toContainText('1 unidad', { timeout: 20000 }));
  await srp.capturarEvidencia(cp, 0, 'producto de la promo agregado al carro');
  // Paso 1–2: toca el carro y el sistema lo carga.
  await tolerante(() => tabs.tapFloatingPill());
  const carro = await tolerante(() => new CarroScreen(screen, p).waitUntilReady());
  await tolerante(() => expect(carro.cantidad(sku)).toBeVisible({ timeout: 30000 }));
  await tolerante(() => expect(carro.mensajePromo, 'mensaje "Te faltan N para la promo"').toBeVisible({ timeout: 30000 }));
  await carro.capturarEvidencia(cp, 2, 'carro con el mensaje de promo');
  return carro;
}

/** Toca el CTA "›" del mensaje y espera la hoja "Combina la promo" (el árbol puede volver vacío durante la animación). */
async function abrirCombina(screen: Screen, p: Plataforma, carro: CarroScreen): Promise<CombinaLaPromoModal> {
  await tolerante(() => carro.ctaPromoCombina.tap());
  const modal = new CombinaLaPromoModal(screen, p);
  await tolerante(() => expect(modal.titulo, 'se abre "Combina la promo"').toBeVisible({ timeout: 30000 }));
  return modal;
}

test.describe(`B2C-50 — Te faltan N para la promo en el carro (${PLATAFORMA})`, () => {
  test.describe.configure({ timeout: 300000 });

  test(`TC-B2C50-APP-003 · El CTA de la promo Combina abre el modal Combina la promo [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C50-APP-003';
    const carro = await carroConUnaUnidad(screen, device, bundleId!, p, token(testData, 'SKU_COMBINA_PROMO')!, cp);
    const modal = await abrirCombina(screen, p, carro);
    await tolerante(() => expect(modal.contador, 'progreso "1 / M productos"').toHaveText(/^1 \/ \d+ productos$/, { timeout: 15000 }));
    await tolerante(() => expect(modal.enCarro, 'el producto del carro figura "En carro"').toBeVisible());
    // Las tarjetas se pintan después del contador: se espera la primera antes de contar.
    await tolerante(() => expect(modal.botonesAgregar.first(), 'otro producto combinable con "Agregar"').toBeVisible({ timeout: 20000 }));
    expect(await tolerante(() => modal.botonesAgregar.count()), 'otros productos combinables con "Agregar"').toBeGreaterThan(0);
    await modal.capturarEvidencia(cp, 3, 'modal Combina la promo con los combinables');
    await modal.capturarEvidencia(cp);
  });

  test(`TC-B2C50-APP-011 · Agregar desde el modal Combina la promo actualiza el mensaje del carro [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C50-APP-011';
    const carro = await carroConUnaUnidad(screen, device, bundleId!, p, token(testData, 'SKU_COMBINA_PROMO')!, cp);
    const antes = (await tolerante(() => carro.mensajePromo.getText())).trim();
    const n = Number(/(\d+)/.exec(antes)![1]);
    const modal = await abrirCombina(screen, p, carro);
    await modal.capturarEvidencia(cp, 4, 'modal Combina la promo');
    await tolerante(() => modal.botonesAgregar.first().tap());
    await tolerante(() => expect(modal.contador, 'el modal suma el combinable').toHaveText(/^2 \/ \d+ productos$/, { timeout: 20000 }));
    await modal.capturarEvidencia(cp, 5, 'otro combinable agregado en el modal');
    await tolerante(() => modal.cerrar());
    await tolerante(() => expect(modal.titulo, 'el modal se cierra').toBeHidden({ timeout: 20000 }));
    if (n - 1 === 0) {
      await tolerante(() => expect(carro.llevasLaPromo.first(), '"Llevas la promo" sin recargar').toBeVisible({ timeout: 30000 }));
      await tolerante(() => expect(carro.mensajePromo, 'ya no dice "Te faltan"').toBeHidden());
    } else {
      await tolerante(() => expect(carro.mensajePromo, `"Te faltan ${n - 1}" sin recargar`).toHaveText(new RegExp(`^te faltan ${n - 1} para la promo$`, 'i'), { timeout: 30000 }));
    }
    await carro.capturarEvidencia(cp, 6, 'carro con el mensaje actualizado');
    await carro.capturarEvidencia(cp);
  });
});
