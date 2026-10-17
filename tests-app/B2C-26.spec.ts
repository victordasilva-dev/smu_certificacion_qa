import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import type { Plataforma } from '../tests/support/rutasEvidencia';
import { NavBar } from './pages/NavBar';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { DireccionManualScreen } from './pages/DireccionManualScreen';
import { DetalleDireccionScreen } from './pages/DetalleDireccionScreen';
import { PermisoUbicacionDialog } from './pages/PermisoUbicacionDialog';
import { SinCoberturaModal } from './pages/SinCoberturaModal';
import { arrancarInvitado, visibleEn } from './support/entregaApp';
import { tolerante } from './support/tolerante';

/**
 * B2C-26 — Store Locator: setear el método de entrega con Despacho a domicilio (app nativa).
 *
 * Las filas dicen "Viewport: App iOS/Android" sin "Plataforma:"; esta corrida (2026-10-16) certifica
 * **solo Android** con el build v1.0.7 ({APP_BUILD}) en el emulador local. iOS queda Pendiente.
 *
 * Quedan sin `test()` (Bloqueado Data): los [Logueado] ({COMPRADOR_USER} es un correo y la v1.0.7
 * solo inicia sesión con RUT; 035 además no declara cuenta), 002, 005, 009–011, 020, 027
 * ({HERRAMIENTA_PROXY_APP} en TBD), 001, 004, 006, 007, 014, 018, 030, 031 (buscan o fijan una
 * calle que su fila no declara) y 038 ({DIRECCION_PLUS_CODE} no tiene cobertura).
 */

const PLATAFORMA = 'Android' as const;
// La hoja de regiones la rotula "Metropolitana" (el TC dice "Región Metropolitana").
const REGION_RM = 'Metropolitana';

/** Pasos 1–4: app con datos borrados → Store Locator del header → modal en "Despacho a domicilio". */
async function abrirModalInvitado(screen: Screen, device: any, bundleId: string, p: Plataforma, cp: string): Promise<MetodoEntregaModal> {
  await arrancarInvitado(screen, device, bundleId, p);
  const nav = new NavBar(screen, p);
  await tolerante(() => expect(nav.textoSinMetodo, 'sin método de entrega').toBeVisible({ timeout: 30000 }));
  await nav.capturarEvidencia(cp, 2, 'Home con el Store Locator sin método');
  await tolerante(() => nav.tapMetodoDeEntrega());
  const modal = await tolerante(() => new MetodoEntregaModal(screen, p).waitUntilReady());
  await tolerante(() => expect(modal.pestanaDespacho, 'pestaña Despacho a domicilio').toBeVisible());
  await modal.capturarEvidencia(cp, 4, 'modal Elige tu método de entrega');
  return modal;
}

/** Paso 5–6 de los TC del formulario manual: 2 caracteres en el buscador → "Agregar". */
async function abrirFormularioManual(modal: MetodoEntregaModal, cp: string): Promise<DireccionManualScreen> {
  await modal.buscar('Av');
  await tolerante(() => expect(modal.botonAgregar, '"Agregar"').toBeVisible({ timeout: 20000 }));
  const form = await tolerante(() => modal.tapAgregar());
  await tolerante(() => form.waitUntilReady());
  await form.capturarEvidencia(cp, 6, 'formulario Dirección manual');
  return form;
}

async function camposDelFormulario(form: DireccionManualScreen): Promise<void> {
  await tolerante(() => expect(form.etiquetaRegion).toBeVisible());
  await tolerante(() => expect(form.etiquetaComuna).toBeVisible());
  await tolerante(() => expect(form.etiquetaDireccion).toBeVisible());
  await tolerante(() => expect(form.etiquetaNumeracion).toBeVisible());
  await tolerante(() => expect(form.desplegableRegion, 'placeholder de Región').toHaveText(/elegir regi[óo]n/i));
  await tolerante(() => expect(form.desplegableComuna, 'placeholder de Comuna').toHaveText(/elegir comuna/i));
  await tolerante(() => expect(form.calle, 'placeholder "Calle"').toBeVisible());
  await tolerante(() => expect(form.numeracion, 'placeholder "Ej. 2160"').toBeVisible());
}

test.describe(`B2C-26 — Store Locator: Despacho a domicilio (${PLATAFORMA})`, () => {
  test.describe.configure({ timeout: 360000 });

  test(`TC-B2C26-APP-003 · Una búsqueda sin resultados ofrece Agregar y abre el formulario manual vacío [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C26-APP-003';
    const modal = await abrirModalInvitado(screen, device, bundleId!, p, cp);
    await modal.buscar('zzqxw 99999');
    await tolerante(() => expect(modal.noApareceTuDireccion, '"¿No aparece tu dirección?"').toBeVisible({ timeout: 20000 }));
    await tolerante(() => expect(modal.botonAgregar, '"Agregar"').toBeVisible());
    await tolerante(() => expect(modal.sugerencias, 'sin sugerencias de Google').toHaveCount(0));
    await modal.capturarEvidencia(cp, 6, 'sin sugerencias, con Agregar');
    const form = await tolerante(() => modal.tapAgregar());
    await tolerante(() => form.waitUntilReady());
    await camposDelFormulario(form);
    await tolerante(() => expect(form.calle, 'Dirección vacía').toHaveText(/^(Calle)?$/));
    await form.capturarEvidencia(cp, 8, 'formulario Dirección manual vacío');
    await form.capturarEvidencia(cp);
  });

  test(`TC-B2C26-APP-012 · Aceptar el permiso de ubicación del sistema lleva al PIN [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C26-APP-012';
    const modal = await abrirModalInvitado(screen, device, bundleId!, p, cp);
    await tolerante(() => modal.tapActivarUbicacion());
    const permiso = new PermisoUbicacionDialog(screen, p);
    await tolerante(() => expect(permiso.mensaje, 'diálogo de permiso del sistema').toBeVisible({ timeout: 20000 }));
    await permiso.capturarEvidencia(cp, 6, 'diálogo de permiso de ubicación');
    await tolerante(() => permiso.aceptar());
    const detalle = new DetalleDireccionScreen(screen, p);
    await tolerante(() => expect(detalle.titulo, 'confirmación con PIN (B2C-99)').toBeVisible({ timeout: 45000 }));
    await tolerante(() => expect(detalle.mapa, 'mapa con el PIN').toBeVisible());
    await detalle.capturarEvidencia(cp, 9, 'Detalles de la dirección con el PIN en la ubicación actual');
    await detalle.capturarEvidencia(cp);
  });

  test(`TC-B2C26-APP-013 · Denegar el permiso de ubicación vuelve al modal sin cambios [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C26-APP-013';
    const modal = await abrirModalInvitado(screen, device, bundleId!, p, cp);
    await tolerante(() => modal.tapActivarUbicacion());
    const permiso = new PermisoUbicacionDialog(screen, p);
    await tolerante(() => expect(permiso.mensaje, 'diálogo de permiso del sistema').toBeVisible({ timeout: 20000 }));
    await permiso.capturarEvidencia(cp, 6, 'diálogo de permiso de ubicación');
    await tolerante(() => permiso.rechazar());
    await tolerante(() => expect(modal.titulo, 'vuelve a "Elige tu método de entrega"').toBeVisible({ timeout: 20000 }));
    await tolerante(() => expect(modal.sinDireccionesGuardadas, 'sin dirección seteada').toBeVisible());
    expect(await visibleEn(new DetalleDireccionScreen(screen, p).titulo, 3000), 'no abre la confirmación con PIN').toBe(false);
    await modal.capturarEvidencia(cp, 8, 'de vuelta en el modal, sin dirección');
    await tolerante(() => modal.cerrar());
    await tolerante(() => expect(new NavBar(screen, p).textoSinMetodo, 'el header sigue sin método').toBeVisible({ timeout: 15000 }));
    await modal.capturarEvidencia(cp);
  });

  test(`TC-B2C26-APP-015 · El formulario manual muestra sus campos con Continuar deshabilitado [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C26-APP-015';
    const modal = await abrirModalInvitado(screen, device, bundleId!, p, cp);
    const form = await abrirFormularioManual(modal, cp);
    await camposDelFormulario(form);
    await tolerante(() => expect(form.continuar, '"Continuar con detalle de la dirección" deshabilitado').toBeDisabled());
    await form.capturarEvidencia(cp);
  });

  test(`TC-B2C26-APP-016 · Completar los obligatorios habilita Continuar con detalle de la dirección [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C26-APP-016';
    // La fila no declara región, comuna ni calle: se toman de {DIRECCION_SIN_NUMERO} de esta misma
    // planilla (Región Metropolitana, Las Condes, "Las Condes"), solo para completar el formulario.
    const [, comuna, via] = token(testData, 'DIRECCION_SIN_NUMERO')!.split(',').map((s) => s.trim());
    const modal = await abrirModalInvitado(screen, device, bundleId!, p, cp);
    const form = await abrirFormularioManual(modal, cp);
    await tolerante(() => form.abrirRegion());
    await tolerante(() => form.elegir(REGION_RM));
    await tolerante(() => form.abrirComuna());
    await tolerante(() => form.elegir(comuna));
    await tolerante(() => expect(form.continuar, 'sigue deshabilitado sin Dirección').toBeDisabled());
    await form.capturarEvidencia(cp, 8, 'Región y Comuna elegidas, botón deshabilitado');
    await tolerante(() => form.escribirCalle(via));
    await tolerante(() => expect(form.continuar, 'habilitado con Región, Comuna y Dirección').toBeEnabled({ timeout: 10000 }));
    await form.capturarEvidencia(cp, 10, 'botón habilitado');
    await form.capturarEvidencia(cp);
  });

  test(`TC-B2C26-APP-017 · Los dropdown de Región y Comuna muestran los catálogos de Chile [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C26-APP-017';
    const modal = await abrirModalInvitado(screen, device, bundleId!, p, cp);
    const form = await abrirFormularioManual(modal, cp);
    await tolerante(() => form.abrirRegion());
    const regiones = await tolerante(() => form.opcionesDeLaHoja('Seleccionar región'));
    await form.capturarEvidencia(cp, 8, 'lista de regiones');
    expect(regiones.length, `16 regiones de Chile (${regiones.join(' | ')})`).toBe(16);
    expect(regiones, 'la Región Metropolitana figura como "Metropolitana"').toContain(REGION_RM);
    await tolerante(() => form.elegir(REGION_RM));
    await tolerante(() => form.abrirComuna());
    const comunas = await tolerante(() => form.opcionesDeLaHoja('Seleccionar comuna'));
    await form.capturarEvidencia(cp, 10, 'lista de comunas de la Región Metropolitana');
    for (const c of ['Santiago', 'Las Condes', 'La Florida', 'Maipú', 'Puente Alto']) expect(comunas, `incluye ${c}`).toContain(c);
    const ajenas = comunas.filter((c) => ['Machalí', 'Rancagua', 'Valparaíso', 'Viña del Mar', 'Concepción'].includes(c));
    expect(ajenas, `comunas de otras regiones en la lista de la RM (${comunas.length} comunas)`).toEqual([]);
    await form.capturarEvidencia(cp);
  });

  test(`TC-B2C26-APP-036 · Una dirección manual sin numeración se visualiza con S/N [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C26-APP-036';
    // {DIRECCION_SIN_NUMERO} = "Metropolitana, Las Condes, Las Condes": Región, Comuna y Dirección.
    const [, comuna, via] = token(testData, 'DIRECCION_SIN_NUMERO')!.split(',').map((s) => s.trim());
    const modal = await abrirModalInvitado(screen, device, bundleId!, p, cp);
    const form = await abrirFormularioManual(modal, cp);
    await tolerante(() => form.abrirRegion());
    await tolerante(() => form.elegir(REGION_RM));
    await tolerante(() => form.abrirComuna());
    await tolerante(() => form.elegir(comuna));
    await tolerante(() => form.escribirCalle(via));
    await form.capturarEvidencia(cp, 7, 'Región, Comuna y Dirección sin numeración');
    await tolerante(() => form.continuar.tap());
    const detalle = new DetalleDireccionScreen(screen, p);
    await tolerante(() => expect(detalle.titulo, 'confirmación con PIN (B2C-99)').toBeVisible({ timeout: 45000 }));
    await detalle.capturarEvidencia(cp, 8, 'Detalles de la dirección');
    await tolerante(() => detalle.botonConfirmar.tap());

    const sinCobertura = new SinCoberturaModal(screen, p);
    expect(await visibleEn(sinCobertura.titulo, 8000), 'precondición: la dirección tiene cobertura').toBe(false);
    const nav = new NavBar(screen, p);
    await tolerante(() => expect(nav.metodoDeEntrega, 'dirección en el header').toHaveText(new RegExp(via, 'i'), { timeout: 45000 }));
    await nav.capturarEvidencia(cp, 10, 'Store Locator del header con la dirección');
    await tolerante(() => expect(nav.metodoDeEntrega, 'S/N en el header').toHaveText(/S\/N/));
    await tolerante(() => nav.tapMetodoDeEntrega());
    await tolerante(() => modal.waitUntilReady());
    const activa = await tolerante(() => modal.direccionActiva());
    await modal.capturarEvidencia(cp, 12, 'modal con la dirección activa');
    expect(activa?.texto ?? '', 'dirección activa con S/N en el modal').toMatch(/S\/N/);
    await modal.capturarEvidencia(cp);
  });
});
