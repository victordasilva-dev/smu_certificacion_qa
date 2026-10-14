import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { HomeScreen } from './pages/HomeScreen';
import { BuscarScreen } from './pages/BuscarScreen';
import { borrarDatosApp } from './support/grabacionAndroid';

/**
 * B2C-188 — Floating Cart de la app (componente "Ir al carro" sobre la TabBar).
 *
 * Las filas no declaran `Plataforma:` y su Test data dice {APP_PLATFORM} = iOS; esta corrida
 * (2026-10-07) certifica **solo Android**, con el build v1.0.7 ({APP_BUILD}), por pedido del
 * usuario. El Floating Cart publica el testID `cart-open` (ver `TabBar.floatingPill`).
 *
 * Solo APP-001 tiene `test()`. El resto quedó en Bloqueado Data al explorar: {SKU_UNITARIO} sale
 * "Pronto disponible" para {COMPRADOR_USER} (sin stock en la tienda de su dirección); la cuenta
 * {COMPRADOR_MEMBRESIA_USER} figura como "Socio Oro" sin membresía activa; las filas sin cuenta
 * necesitan una dirección que no declaran; y las cuentas Colaborador/Diamante están en TBD.
 */
for (const plataforma of ['Android'] as const) {
  test.describe(`B2C-188 — Floating Cart (${plataforma})`, () => {
    test(`TC-B2C-188-APP-001 · El Floating Cart no se muestra con el carrito vacío (${plataforma})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
      const cp = 'TC-B2C-188-APP-001';
      test.setTimeout(240000);
      // Precondición: invitado con el carro vacío → app con datos borrados (recién instalada).
      await device.terminateApp(bundleId!);
      borrarDatosApp(bundleId!, process.env.ANDROID_SERIAL);
      await device.launchApp(bundleId!);
      const tabs = new TabBar(screen, p);
      for (let intento = 0; ; intento++) {
        try {
          await tabs.waitUntilReady();
          break;
        } catch (e) {
          if (intento >= 20 || !/no XML content|dump UI/.test(String(e))) throw e;
          await new Promise((r) => setTimeout(r, 3000));
        }
      }

      // Paso 2 — Home.
      const home = await new HomeScreen(screen, p).waitUntilReady();
      await expect(tabs.floatingPill, 'Home: el Floating Cart no se muestra').not.toBeVisible({ timeout: 4000 });
      await home.capturarEvidencia(cp, 2, 'Home sin Floating Cart');

      // PLP — "Mostrar todo" de "Los más vendidos" abre el listado de la categoría.
      const plp = await home.tapMostrarTodo();
      await plp.waitUntilReady();
      await expect(tabs.floatingPill, 'PLP: el Floating Cart no se muestra').not.toBeVisible({ timeout: 4000 });
      await plp.capturarEvidencia(cp, 2, 'PLP sin Floating Cart');

      // PDP — el primer producto del listado.
      const sku = await plp.abrirPrimerProducto();
      await expect(screen.getByTestId('pdp-gallery-page').first(), 'la PDP carga').toBeVisible({ timeout: 20000 });
      await expect(tabs.floatingPill, 'PDP: el Floating Cart no se muestra').not.toBeVisible({ timeout: 4000 });
      await plp.capturarEvidencia(cp, 2, `PDP ${sku} sin Floating Cart`);

      // SRP — búsqueda del término de prueba del Excel de data. La PDP oculta la TabBar: se vuelve
      // atrás hasta que la TabBar esté a la vista.
      for (let i = 0; i < 3 && !(await tabs.tab('Buscar').isVisible({ timeout: 1500 })); i++) {
        await screen.pressButton('BACK');
      }
      await tabs.tapBuscar();
      const buscar = await new BuscarScreen(screen, p).waitUntilReady();
      const termino = token(testData, 'SEARCH_TERM_001') ?? '';
      expect(termino, '{SEARCH_TERM_001} en el Excel de data').not.toBe('');
      const srp = await buscar.buscar(termino);
      await expect(buscar.resultadoPara(termino)).toBeVisible({ timeout: 15000 });
      await expect(tabs.floatingPill, 'SRP: el Floating Cart no se muestra').not.toBeVisible({ timeout: 4000 });
      await srp.capturarEvidencia(cp, 3, 'SRP sin Floating Cart');
    });
  });
}
