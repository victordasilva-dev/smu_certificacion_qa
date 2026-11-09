import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { PdpScreen } from './pages/PdpScreen';
import { tolerante } from './support/tolerante';
import { fijarDireccionInvitado } from './support/invitadoConCarro';

/**
 * B2C-40 — Modal «Productos similares» (app nativa, Android, build v1.0.1).
 *
 * Se ejecutan los casos que abren el modal como invitado. Los demás (003, 012, 013, 014 piden sesión;
 * 006 y 009 piden {HERRAMIENTA_PROXY_APP}) quedan sin `test()`. Los que describen el contenido del modal
 * (004, 005, 007, 008, 010, 011, 015, 016, 017) no se automatizan: el modal no se abre en esta build.
 */
const PLATAFORMA = 'Android' as const;
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));

test.describe(`B2C-40 — Productos similares (${PLATAFORMA})`, () => {
  test.describe.configure({ timeout: 600000 });

  test(`TC-B2C40-APP-000 · Precondición: invitado con {DIRECCION_DESPACHO_001} (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    await fijarDireccionInvitado(screen, device, bundleId!, p, testData);
  });

  test(`TC-B2C40-APP-001 · «Ver similares» en un shelf de navegación abre el modal Productos similares [Guest] (${PLATAFORMA})`, async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C40-APP-001';
    const sku = token(testData, 'SKU_PRODS_SIMILARES')!;
    const tabs = new TabBar(screen, p);
    await tol(() => tabs.tapBuscar());
    const buscar = await tol(() => new BuscarScreen(screen, p).waitUntilReady());
    const srp = await tol(() => buscar.buscar(sku));
    await tol(() => buscar.resultadoPara(sku).waitFor({ state: 'visible', timeout: 30000 }));
    const boton = srp.tarjeta(sku).getByRole('button', { name: /ver (productos )?similares/i });
    await expect(boton, 'el shelf sin stock muestra «Ver similares»').toBeVisible();
    await srp.capturarEvidencia(cp, 3, 'shelf sin stock con el botón «Ver similares»');
    await tol(() => boton.tap());
    await pausa(8000);
    await srp.capturarEvidencia(cp, 5, 'pantalla tras tocar «Ver similares»');
    await expect(screen.getByText(/^productos similares$/i).first(), 'se abre el modal «Productos similares»').toBeVisible({ timeout: 20000 });
    await srp.capturarEvidencia(cp);
  });

  test(`TC-B2C40-APP-002 · «Ver similares» en la PDP de un producto sin stock abre el modal Productos similares [Guest] (${PLATAFORMA})`, async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C40-APP-002';
    const sku = token(testData, 'SKU_PRODS_SIMILARES')!;
    const tabs = new TabBar(screen, p);
    await tol(() => tabs.tapBuscar());
    const buscar = await tol(() => new BuscarScreen(screen, p).waitUntilReady());
    const srp = await tol(() => buscar.buscar(sku));
    await tol(() => buscar.resultadoPara(sku).waitFor({ state: 'visible', timeout: 30000 }));
    await tol(() => srp.tarjeta(sku).tap());
    const pdp = await tol(() => new PdpScreen(screen, p).waitUntilReady());
    await pausa(3000);
    await pdp.capturarEvidencia(cp, 4, 'PDP del producto sin stock');
    await expect(screen.getByText(/^ver (productos )?similares$/i).first(), 'la PDP muestra el botón «Ver similares»').toBeVisible({ timeout: 10000 });
    await pdp.capturarEvidencia(cp);
  });
});
