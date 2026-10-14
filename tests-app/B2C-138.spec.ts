import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { NavBar } from './pages/NavBar';
import { HomeScreen } from './pages/HomeScreen';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { DetalleDireccionScreen } from './pages/DetalleDireccionScreen';
import { tolerante } from './support/tolerante';
import { arrancarInvitado, calle } from './support/entregaApp';

/**
 * B2C-138 — Store Locator sin dirección (app nativa): "Elige una forma de entrega" en el navbar y el
 * modal "Elige tu método de entrega" vacío.
 *
 * Las filas dicen "Viewport: App iOS/Android" sin "Plataforma:"; esta corrida (2026-10-14) certifica
 * **solo Android** con el build v1.0.7 ({APP_BUILD}) en el emulador local. iOS queda Pendiente.
 *
 * Quedan sin `test()`: 002 y 005 ({SIN_DIRECCION_USER} es un correo y en v1.0.7 el login solo acepta
 * RUT), 011–013 ({HERRAMIENTA_PROXY_APP} y {STORE_LOCATOR_API_ENDPOINT} en TBD).
 */

const PLATAFORMA = 'Android' as const;
const PAQUETE = 'com.smuapp.unimarc';

test.describe(`B2C-138 — Store Locator sin dirección (${PLATAFORMA})`, () => {
  test.describe.configure({ timeout: 300000 });

  /** Pasos 1–4: invitado recién instalado → toca el chevron del Store Locator → modal abierto. */
  async function abrirModal(screen: any, device: any, bundleId: string, p: any, cp: string) {
    await arrancarInvitado(screen, device, bundleId, p);
    const nav = new NavBar(screen, p);
    await tolerante(() => expect(nav.metodoDeEntrega, 'Home: «Elige una forma de entrega»').toContainText('Elige una forma de entrega', { timeout: 20000 }));
    await new HomeScreen(screen, p).capturarEvidencia(cp, 2, 'Home con «Elige una forma de entrega»');
    await tolerante(() => nav.tapMetodoDeEntrega());
    const modal = await tolerante(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await modal.capturarEvidencia(cp, 4, 'modal Elige tu método de entrega');
    return { nav, modal };
  }

  test(`TC-B2C138-APP-001 · El Store Locator muestra Elige una forma de entrega sin método seleccionado [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C138-APP-001';
    await arrancarInvitado(screen, device, bundleId!, p);
    const nav = new NavBar(screen, p);
    const home = await tolerante(() => new HomeScreen(screen, p).waitUntilReady());
    await tolerante(() => expect(nav.metodoDeEntrega, 'Home: «Elige una forma de entrega»').toContainText('Elige una forma de entrega', { timeout: 20000 }));
    await home.capturarEvidencia(cp, 2, 'Home');
    // Paso 3: la PLP de la app es el listado de "Mostrar todo" ({PLP_URL} es de la web).
    const plp = await tolerante(() => home.tapMostrarTodo());
    await tolerante(() => plp.waitUntilReady());
    await plp.capturarEvidencia(cp, 4, 'PLP');
    const enPlp = await tolerante(() => nav.metodoDeEntrega.isVisible({ timeout: 8000 }));
    // Paso 5: la PDP de {SKU_VALID_001} desde la vitrina del Home.
    for (let i = 0; i < 3 && !(await tolerante(() => home.readyLocator.isVisible({ timeout: 2000 }))); i++) await tolerante(() => screen.pressButton('BACK'));
    const sku = token(testData, 'SKU_VALID_001')!;
    await tolerante(() => home.mostrarProducto(sku));
    await tolerante(() => home.producto(sku).tap());
    await tolerante(() => expect(screen.getByTestId('pdp-gallery-page').first(), 'la PDP carga').toBeVisible({ timeout: 20000 }));
    await home.capturarEvidencia(cp, 6, `PDP ${sku}`);
    const enPdp = await tolerante(() => nav.metodoDeEntrega.isVisible({ timeout: 8000 }));
    expect(enPlp, 'PLP: el Store Locator del header muestra «Elige una forma de entrega»').toBe(true);
    expect(enPdp, 'PDP: el Store Locator del header muestra «Elige una forma de entrega»').toBe(true);
    await home.capturarEvidencia(cp);
  });

  test(`TC-B2C138-APP-003 · Tocar el chevron del Store Locator abre el modal Elige tu método de entrega con X [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C138-APP-003';
    const { modal } = await abrirModal(screen, device, bundleId!, p, cp);
    await tolerante(() => expect(screen.getByText('✕').first(), 'el modal tiene la X').toBeVisible());
    await modal.capturarEvidencia(cp);
  });

  test(`TC-B2C138-APP-004 · El modal muestra las pestañas y el mensaje Aún no tienes direcciones guardadas [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C138-APP-004';
    const { modal } = await abrirModal(screen, device, bundleId!, p, cp);
    await tolerante(() => expect(modal.pestanaDespacho).toBeVisible());
    await tolerante(() => expect(modal.pestanaRetiro).toBeVisible());
    const rojoDespacho = await tolerante(() => modal.pixelesRojosDelIcono(modal.pestanaDespacho));
    const rojoRetiro = await tolerante(() => modal.pixelesRojosDelIcono(modal.pestanaRetiro));
    await tolerante(() => expect(modal.sinDireccionesGuardadas, '«Aún no tienes direcciones guardadas»').toBeVisible());
    await tolerante(() => expect(screen.getByText(/^Para armar tu carro, ingresa una direcci[oó]n/), 'texto de ayuda').toBeVisible());
    await modal.capturarEvidencia(cp);
    expect(rojoDespacho, '«Despacho a domicilio» activa (ícono en rojo)').toBeGreaterThan(30);
    expect(rojoRetiro, '«Retiro en tienda» en gris (sin rojo)').toBeLessThan(10);
  });

  test(`TC-B2C138-APP-006 · El buscador de dirección inicia el flujo de configuración de despacho [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C138-APP-006';
    const { modal } = await abrirModal(screen, device, bundleId!, p, cp);
    const dir = token(testData, 'DIRECCION_DESPACHO_001')!;
    await modal.elegirSugerencia(dir, new RegExp(`^${calle(dir)}`, 'i'));
    const detalle = new DetalleDireccionScreen(screen, p);
    await tolerante(() => expect(detalle.titulo, 'se inicia el flujo de B2C-26 («Detalles de la dirección»)').toBeVisible({ timeout: 30000 }));
    await detalle.capturarEvidencia(cp);
  });

  test(`TC-B2C138-APP-007 · Activar ubicación actual inicia el flujo de configuración de despacho [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C138-APP-007';
    const { modal } = await abrirModal(screen, device, bundleId!, p, cp);
    // Precondición: la app tiene permiso de ubicación. El emulador se ubica en Santiago (La Florida).
    const { execSync } = await import('child_process');
    for (const perm of ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION']) execSync(`adb shell pm grant ${PAQUETE} android.permission.${perm}`);
    execSync('adb emu geo fix -70.5980 -33.5230');
    await tolerante(() => modal.tapActivarUbicacion());
    const detalle = new DetalleDireccionScreen(screen, p);
    await tolerante(() => expect(detalle.titulo, 'se inicia el flujo de B2C-26 («Detalles de la dirección»)').toBeVisible({ timeout: 30000 }));
    await detalle.capturarEvidencia(cp);
  });

  test(`TC-B2C138-APP-008 · La pestaña Retiro en tienda se activa e inicia el flujo de retiro [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C138-APP-008';
    const { modal } = await abrirModal(screen, device, bundleId!, p, cp);
    await tolerante(() => modal.pestanaRetiro.tap());
    await tolerante(() => expect(modal.tituloSeleccionTienda, 'se inicia el flujo de retiro (B2C-121)').toBeVisible({ timeout: 15000 }));
    const rojoRetiro = await tolerante(() => modal.pixelesRojosDelIcono(modal.pestanaRetiro));
    const rojoDespacho = await tolerante(() => modal.pixelesRojosDelIcono(modal.pestanaDespacho));
    await modal.capturarEvidencia(cp);
    expect(rojoRetiro, '«Retiro en tienda» activa en rojo').toBeGreaterThan(30);
    expect(rojoDespacho, '«Despacho a domicilio» en gris').toBeLessThan(10);
  });

  test(`TC-B2C138-APP-009 · Cerrar el modal con la X mantiene el header en Elige una forma de entrega [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C138-APP-009';
    const { nav, modal } = await abrirModal(screen, device, bundleId!, p, cp);
    await tolerante(() => modal.cerrar());
    await tolerante(() => expect(modal.titulo, 'el modal se cierra').toBeHidden({ timeout: 15000 }));
    await tolerante(() => expect(nav.metodoDeEntrega, 'el header sigue en «Elige una forma de entrega»').toContainText('Elige una forma de entrega'));
    await new HomeScreen(screen, p).capturarEvidencia(cp);
  });

  test(`TC-B2C138-APP-010 · Tocar fuera del modal lo cierra y mantiene el header en Elige una forma de entrega [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C138-APP-010';
    const { nav, modal } = await abrirModal(screen, device, bundleId!, p, cp);
    // Para tocar fuera del modal tiene que quedar a la vista algo de la pantalla de atrás (el Home).
    // Se comprueba eso en vez de tocar por coordenadas: en v1.0.7 el modal ocupa toda la pantalla.
    const homeVisible = await tolerante(() => nav.metodoDeEntrega.isVisible({ timeout: 3000 }));
    const tabsVisibles = await tolerante(() => screen.getByTestId('tab-Home').isVisible({ timeout: 3000 }));
    await modal.capturarEvidencia(cp, 5, 'modal abierto: no queda zona fuera');
    expect(homeVisible || tabsVisibles, 'hay una zona fuera del modal que tocar para cerrarlo').toBe(true);
    await tolerante(() => expect(nav.metodoDeEntrega).toContainText('Elige una forma de entrega'));
    await new HomeScreen(screen, p).capturarEvidencia(cp);
  });
});
