import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import type { LoadedTestData } from '../tests/support/testData';
import type { Plataforma } from '../tests/support/rutasEvidencia';
import { TabBar } from './pages/TabBar';
import { NavBar } from './pages/NavBar';
import { HomeScreen } from './pages/HomeScreen';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { DetalleDireccionScreen } from './pages/DetalleDireccionScreen';
import { AgotarseModal, PromptLogin } from './pages/AgotarseModal';
import { borrarDatosApp } from './support/grabacionAndroid';
import { tolerante } from './support/tolerante';

/**
 * B2C-122 — Modal "Algunos productos podrían agotarse" al cambiar a otra tienda abastecedora con
 * carro (app nativa).
 *
 * Las filas dicen "Viewport: App iOS/Android" sin "Plataforma:" y {APP_PLATFORM} = iOS; esta corrida
 * (2026-10-14) certifica **solo Android**, con el build v1.0.7 ({APP_BUILD}), en el emulador local:
 * iOS queda Pendiente (no hay MOBILENEXT_API_KEY ni .ipa).
 *
 * Precondición común (invitado): app con datos borrados, {DIRECCION_DESPACHO_001} fijada desde el
 * Store Locator y {SKU_VALID_001} agregado desde "Los más vendidos" del Home.
 *
 * Quedan sin `test()`: 005, 006, 013 ({HERRAMIENTA_PROXY_APP} / {SETEO_ENTREGA_API_ENDPOINT} en TBD),
 * 008 ({SKU_STOCK_SOLO_TIENDA_A} en TBD), 010 y 011 ({USER_AUTH_001} es un correo y en v1.0.7
 * "Clave de acceso por correo" está deshabilitado: la app solo entra con RUT).
 */

const PLATAFORMA = 'Android' as const;

/** "A. Las Conder 14791, Lo Barnechea" → la sugerencia de Google con el mismo número y comuna. */
function patronSugerencia(direccion: string): RegExp {
  const numero = direccion.match(/\d+/)?.[0] ?? '';
  const comuna = direccion.split(',').pop()!.trim();
  return new RegExp(`${numero}.*${comuna.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');
}

/** Texto del navbar con la dirección activa ("Calle Uno 23, Desde: …"): la calle sin la comuna. */
function calle(direccion: string): string {
  return direccion.split(',')[0].trim();
}

/** true si el locator aparece antes del plazo; un fallo de ambiente del emulador se reintenta y, si persiste, se propaga. */
async function visibleEn(l: { waitFor(o: { state: 'visible'; timeout: number }): Promise<unknown> }, ms: number): Promise<boolean> {
  return tolerante(() => l.waitFor({ state: 'visible', timeout: ms }).then(() => true, (e) => {
    if (/no XML content|dump UI|send text|agent timed out|deadline exceeded/i.test(String(e))) throw e;
    return false;
  }));
}

async function esperarTabBar(tabs: TabBar): Promise<void> {
  for (let intento = 0; ; intento++) {
    try {
      await tolerante(() => tabs.waitUntilReady());
      return;
    } catch (e) {
      if (intento >= 20 || !/no XML content|dump UI/.test(String(e))) throw e;
      await new Promise((r) => setTimeout(r, 3000));
    }
  }
}

/** Abre el Store Locator, busca la dirección y toca su sugerencia: deja "Detalles de la dirección". */
async function elegirDireccion(screen: Screen, p: Plataforma, direccion: string, patron: RegExp): Promise<DetalleDireccionScreen> {
  await tolerante(() => new NavBar(screen, p).tapMetodoDeEntrega());
  const modal = await tolerante(() => new MetodoEntregaModal(screen, p).waitUntilReady());
  await modal.elegirSugerencia(direccion, patron);
  return tolerante(() => new DetalleDireccionScreen(screen, p).waitUntilReady());
}

/** Toast de error del servicio al fijar la dirección ("Lo sentimos, no pudimos procesar tu solicitud…"). */
function toastError(screen: Screen) {
  return screen.getByText(/no pudimos procesar tu solicitud/i);
}

/**
 * Precondición + pasos 1–2: invitado con {DIRECCION_DESPACHO_001} y {SKU_VALID_001} en el carro, en
 * el Home. Fijar la dirección a veces devuelve el toast de error del servicio (intermitente en DEV,
 * 2026-10-14): eso es ambiente para la precondición, así que se vuelve a empezar hasta 3 veces.
 */
async function prepararInvitado(screen: Screen, device: any, bundleId: string, p: Plataforma, testData: LoadedTestData, cp: string) {
  const dir = token(testData, 'DIRECCION_DESPACHO_001')!;
  const tabs = new TabBar(screen, p);
  const nav = new NavBar(screen, p);
  for (let intento = 1; ; intento++) {
    await device.terminateApp(bundleId);
    borrarDatosApp(bundleId, process.env.ANDROID_SERIAL);
    await device.launchApp(bundleId);
    await esperarTabBar(tabs);
    const detalle = await elegirDireccion(screen, p, dir, new RegExp(`^${calle(dir)}`, 'i'));
    await tolerante(() => detalle.botonConfirmar.tap());
    const fijada = await visibleEn(nav.metodoDeEntrega.filter({ hasText: calle(dir) }), 45000);
    if (fijada) break;
    const error = await visibleEn(toastError(screen), 1000);
    if (intento >= 3) throw new Error(`precondición: no se pudo fijar ${dir} en ${intento} intentos${error ? ' (toast "no pudimos procesar tu solicitud")' : ''}`);
  }

  const home = await tolerante(() => new HomeScreen(screen, p).waitUntilReady());
  // El stepper del SKU queda fuera de pantalla en el carrusel: el carro se confirma con el Floating Cart.
  const sku = token(testData, 'SKU_VALID_001')!;
  await tolerante(() => home.mostrarProducto(sku));
  if (await visibleEn(home.botonAgregar(sku), 3000)) await tolerante(() => home.botonAgregar(sku).tap());
  await tolerante(() => expect(tabs.floatingPill, 'precondición: el carro tiene el SKU').toContainText('1 unidad', { timeout: 20000 }));
  await home.capturarEvidencia(cp, 2, 'Home con dirección y carro');
  return { tabs, nav, home };
}

/** Pasos 3–6: Store Locator → {DIRECCION_OTRA_TIENDA} → "Confirmar/Agregar dirección" → hoja de agotarse. */
async function abrirAgotarse(screen: Screen, p: Plataforma, testData: LoadedTestData, cp: string) {
  const otra = token(testData, 'DIRECCION_OTRA_TIENDA')!;
  const detalle = await elegirDireccion(screen, p, otra, patronSugerencia(otra));
  await detalle.capturarEvidencia(cp, 5, 'Detalles de la nueva dirección');
  await tolerante(() => detalle.botonConfirmar.tap());
  const agotarse = new AgotarseModal(screen, p);
  await tolerante(() => expect(agotarse.titulo, 'se abre "Algunos productos podrían agotarse"').toBeVisible({ timeout: 30000 }));
  await agotarse.capturarEvidencia(cp, 6, 'modal Algunos productos podrían agotarse');
  return { agotarse, detalle };
}

/** Vuelve al Home con BACK hasta que el navbar esté a la vista. */
async function volverAlHome(screen: Screen, nav: NavBar): Promise<void> {
  for (let i = 0; i < 4 && !(await tolerante(() => nav.metodoDeEntrega.isVisible({ timeout: 2000 }))); i++) {
    await tolerante(() => screen.pressButton('BACK'));
  }
  await tolerante(() => expect(nav.metodoDeEntrega).toBeVisible({ timeout: 15000 }));
}

test.describe(`B2C-122 — Modal de productos que podrían agotarse (${PLATAFORMA})`, () => {
  test.describe.configure({ timeout: 360000 });

  test(`TC-B2C122-APP-001 · Al cambiar a una dirección de otra tienda abastecedora con carro aparece el modal [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C122-APP-001';
    await prepararInvitado(screen, device, bundleId!, p, testData, cp);
    const { agotarse } = await abrirAgotarse(screen, p, testData, cp);
    await expect(agotarse.texto, 'texto del modal').toHaveText(
      'Al cambiar la dirección o tipo de despacho, puede que algunos productos no se encuentren en esta ubicación o tienda. ¿Deseas continuar?',
    );
    await tolerante(() => expect(agotarse.botonSi, '"Sí, continuar"').toBeVisible());
    await tolerante(() => expect(agotarse.botonNo, '"No, gracias"').toBeVisible());
    await tolerante(() => expect(agotarse.botonCerrar, 'ícono X').toBeVisible());
    await agotarse.capturarEvidencia(cp);
  });

  test(`TC-B2C122-APP-002 · Si la nueva dirección usa la misma tienda abastecedora el cambio se aplica sin modal [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C122-APP-002';
    const { nav } = await prepararInvitado(screen, device, bundleId!, p, testData, cp);
    const misma = token(testData, 'DIRECCION_MISMA_TIENDA')!;
    const detalle = await elegirDireccion(screen, p, misma, patronSugerencia(misma));
    await detalle.capturarEvidencia(cp, 5, 'Detalles de la dirección de la misma tienda');
    await tolerante(() => detalle.botonConfirmar.tap());
    const agotarse = new AgotarseModal(screen, p);
    const aparecio = await visibleEn(agotarse.titulo, 10000);
    if (aparecio) await agotarse.capturarEvidencia(cp, 5, 'modal de agotarse (inesperado)');
    expect(aparecio, 'no se muestra el modal "Algunos productos podrían agotarse"').toBe(false);
    await tolerante(() => expect(nav.metodoDeEntrega, 'el Store Locator queda con la dirección nueva').toContainText('Artigas 3250', { timeout: 45000 }));
    await new HomeScreen(screen, p).capturarEvidencia(cp);
  });

  for (const [n, accion] of [['003', 'No, gracias'], ['004', 'X']] as const) {
    test(`TC-B2C122-APP-${n} · ${accion === 'X' ? 'La X del modal' : 'No, gracias'} cierra el modal sin aplicar el cambio [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
      const cp = `TC-B2C122-APP-${n}`;
      const { nav, tabs } = await prepararInvitado(screen, device, bundleId!, p, testData, cp);
      const { agotarse } = await abrirAgotarse(screen, p, testData, cp);
      await tolerante(() => (accion === 'X' ? agotarse.botonCerrar : agotarse.botonNo).tap());
      await tolerante(() => expect(agotarse.titulo, 'el modal se cierra').toBeHidden({ timeout: 15000 }));
      await agotarse.capturarEvidencia(cp, 7, `tras ${accion}`);
      await volverAlHome(screen, nav);
      const dir = token(testData, 'DIRECCION_DESPACHO_001')!;
      await tolerante(() => expect(nav.metodoDeEntrega, 'la dirección activa sigue siendo la original').toContainText(calle(dir)));
      await tolerante(() => expect(tabs.floatingPill, `el carro mantiene ${token(testData, 'SKU_VALID_001')}`).toContainText('1 unidad'));
      await new HomeScreen(screen, p).capturarEvidencia(cp);
    });
  }

  test(`TC-B2C122-APP-007 · Si todo está disponible y hay horarios el cambio se aplica y se mantiene la página [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C122-APP-007';
    const { nav } = await prepararInvitado(screen, device, bundleId!, p, testData, cp);
    const { agotarse } = await abrirAgotarse(screen, p, testData, cp);
    await tolerante(() => agotarse.botonSi.tap());
    await tolerante(() => expect(agotarse.titulo, 'el modal se cierra').toBeHidden({ timeout: 60000 }));
    // Como invitado, tras "Sí, continuar" la app ofrece iniciar sesión (TC-009); se cierra para ver la página.
    const prompt = new PromptLogin(screen, p);
    if (await visibleEn(prompt.titulo, 30000)) {
      await prompt.capturarEvidencia(cp, 7, 'prompt de inicio de sesión');
      await tolerante(() => prompt.botonCerrar.tap());
    }
    const otra = token(testData, 'DIRECCION_OTRA_TIENDA')!;
    await tolerante(() => expect(nav.metodoDeEntrega, 'el Store Locator muestra la dirección nueva').toContainText(otra.match(/\d+/)![0], { timeout: 45000 }));
    await tolerante(() => expect(new HomeScreen(screen, p).readyLocator, 'sigue en el Home, desde donde abrió el modal').toBeVisible());
    await new HomeScreen(screen, p).capturarEvidencia(cp);
  });

  test(`TC-B2C122-APP-009 · Tras el cambio el invitado ve el prompt de login y puede seguir como invitado [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C122-APP-009';
    const { nav } = await prepararInvitado(screen, device, bundleId!, p, testData, cp);
    const { agotarse } = await abrirAgotarse(screen, p, testData, cp);
    await tolerante(() => agotarse.botonSi.tap());
    const prompt = new PromptLogin(screen, p);
    await tolerante(() => expect(prompt.titulo, 'se muestra el prompt de inicio de sesión').toBeVisible({ timeout: 60000 }));
    await prompt.capturarEvidencia(cp, 8, 'prompt de inicio de sesión');
    await tolerante(() => prompt.botonCerrar.tap());
    await tolerante(() => expect(prompt.titulo).toBeHidden({ timeout: 15000 }));
    const otra = token(testData, 'DIRECCION_OTRA_TIENDA')!;
    await tolerante(() => expect(nav.metodoDeEntrega, 'sigue como invitado con la dirección nueva').toContainText(otra.match(/\d+/)![0], { timeout: 45000 }));
    await tolerante(() => new TabBar(screen, p).tab('Mi cuenta').tap());
    await tolerante(() => expect(screen.getByTestId('account-login'), 'sigue como invitado (Mi cuenta ofrece "Iniciar sesión")').toBeVisible({ timeout: 20000 }));
    await new HomeScreen(screen, p).capturarEvidencia(cp);
  });

  test(`TC-B2C122-APP-012 · Tras cerrar el modal con No, gracias o X el cliente regresa al Store Locator sin cambios [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C122-APP-012';
    const { nav, tabs } = await prepararInvitado(screen, device, bundleId!, p, testData, cp);
    const dir = token(testData, 'DIRECCION_DESPACHO_001')!;
    for (const [accion, paso] of [['No, gracias', 7], ['X', 11]] as const) {
      const { agotarse, detalle } = await abrirAgotarse(screen, p, testData, cp);
      await tolerante(() => (accion === 'X' ? agotarse.botonCerrar : agotarse.botonNo).tap());
      await tolerante(() => expect(agotarse.titulo, `con ${accion} el modal se cierra`).toBeHidden({ timeout: 15000 }));
      await tolerante(() => expect(detalle.titulo, `con ${accion} el flujo del Store Locator sigue abierto (pantalla anterior)`).toBeVisible({ timeout: 10000 }));
      await detalle.capturarEvidencia(cp, paso, `Store Locator tras ${accion}`);
      await volverAlHome(screen, nav);
      await tolerante(() => expect(nav.metodoDeEntrega, `con ${accion} la dirección activa sigue siendo la original`).toContainText(calle(dir)));
      await tolerante(() => expect(tabs.floatingPill, `con ${accion} el carro mantiene el SKU`).toContainText('1 unidad'));
    }
    await new HomeScreen(screen, p).capturarEvidencia(cp);
  });
});
