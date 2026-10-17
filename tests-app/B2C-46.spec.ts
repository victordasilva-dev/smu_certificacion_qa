import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { CarroScreen } from './pages/CarroScreen';
import { arrancarInvitado, visibleEn } from './support/entregaApp';
import { tolerante } from './support/tolerante';

/**
 * B2C-46 — Modal "Están de vuelta" al ingresar al carro (app nativa).
 *
 * Las filas dicen "Viewport: App iOS/Android" sin "Plataforma:"; esta corrida (2026-10-16) certifica
 * **solo Android** con el build v1.0.7 ({APP_BUILD}) en el emulador local. iOS queda Pendiente.
 *
 * Solo corre 007 (invitado, carro con {SKU_VALID_001}). Quedan sin `test()`: 001–004 (exigen dejar
 * el stock en 0 y reponerlo desde BM → Fuera de alcance), 005 y 006 ({USER_AUTH_001} es un correo y
 * la v1.0.7 solo inicia sesión con RUT; 005 además con {SKU_NO_DISPONIBLE} con stock).
 */

const PLATAFORMA = 'Android' as const;

test.describe(`B2C-46 — Modal Están de vuelta (${PLATAFORMA})`, () => {
  test.describe.configure({ timeout: 300000 });

  test(`TC-B2C46-APP-007 · Un invitado sin productos no disponibles no ve el modal Están de vuelta [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C46-APP-007';
    const sku = token(testData, 'SKU_VALID_001')!;

    // Precondición: carro de invitado solo con {SKU_VALID_001}, agregado desde la SRP.
    const tabs: TabBar = await arrancarInvitado(screen, device, bundleId!, p);
    await tolerante(() => tabs.tapBuscar());
    const buscar = await tolerante(() => new BuscarScreen(screen, p).waitUntilReady());
    const srp = await tolerante(() => buscar.buscar(sku));
    await tolerante(() => expect(srp.botonAgregar(sku), 'el SKU tiene "Agregar" (con stock)').toBeVisible({ timeout: 30000 }));
    await tolerante(() => srp.botonAgregar(sku).tap());
    await tolerante(() => expect(tabs.floatingPill, 'precondición: el carro tiene el SKU').toContainText('1 unidad', { timeout: 20000 }));
    await srp.capturarEvidencia(cp, 0, 'carro de invitado con el SKU disponible');

    // Paso 1–2: toca el carro y el sistema lo carga.
    await tolerante(() => tabs.tapFloatingPill());
    const carro = await tolerante(() => new CarroScreen(screen, p).waitUntilReady());
    await tolerante(() => expect(carro.item(sku), '{SKU_VALID_001} en el carro').toBeVisible({ timeout: 30000 }));
    await tolerante(() => expect(carro.cantidad(sku)).toContainText('1'));
    expect(await visibleEn(carro.modalEstanDeVuelta, 8000), 'sin modal "Están de vuelta"').toBe(false);
    await carro.capturarEvidencia(cp, 2, 'carro en su estado habitual, sin modal');
    await carro.capturarEvidencia(cp);
  });
});
