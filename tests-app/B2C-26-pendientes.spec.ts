import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import type { Plataforma } from '../tests/support/rutasEvidencia';
import { NavBar } from './pages/NavBar';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { DetalleDireccionScreen } from './pages/DetalleDireccionScreen';
import { SinCoberturaModal } from './pages/SinCoberturaModal';
import { arrancarInvitado, visibleEn } from './support/entregaApp';
import { tolerante } from './support/tolerante';
import { sesion, esperarCodigo, ingresarCodigo } from './support/sesionOtp';
import { MiCuentaScreen } from './pages/MiCuentaScreen';
import { asegurarApp } from './support/appLista';

/**
 * B2C-26 — Store Locator (app nativa): los TC que estaban Pendiente y no tenían `test()`.
 * Solo Android (Pixel 6, `emulator-5556`), build v1.0.1. Los TC ya decididos (003, 012, 013, 015,
 * 016, 017, 036) viven en `B2C-26.spec.ts` y no se repiten aquí.
 *
 * Cubiertos aquí (la data sale de la columna `Test data` o de los propios pasos del TC):
 *   Guest      006 ("Providencia" viene en el paso 5), 038 ({DIRECCION_PLUS_CODE})
 *   Logueado   024, 025, 028, 034 ({COMPRADOR_USER}; el login es por correo + OTP en la v1.0.1)
 *
 * Los Logueado 008, 019 y 033 viven en `B2C-26-logueado.spec.ts`.
 *
 * Sin `test()` por falta de un dato que la fila no declara, o de una condición de ambiente:
 *   001, 004      el texto de calle a buscar no está declarado
 *   007, 030, 031 la dirección que el invitado debe tener activa no está declarada
 *   018           Región, Comuna, Dirección y Numeración del formulario no están declarados
 *   029, 032      la dirección que el TC manda "configurar desde el Store Locator" no está declarada
 *   035           falta la Región y la Comuna "con cobertura" (la Dirección y el 120 sí están)
 *   014           exige un emulador sin señal de ubicación: cambia el estado del dispositivo
 *   021, 022, 023 la fila no dice cuál dirección guardada está fuera de zona / sin ventanas, ni
 *                 qué producto va en el carro
 *   026, 037      borran / agregan una dirección del perfil de {COMPRADOR_USER}: modifica la cuenta
 *   002, 005, 009, 010, 011, 020, 027   {HERRAMIENTA_PROXY_APP} sin valor y sin alternativa en el repo
 */

const PLATAFORMA = 'Android' as const;
const SALUDO = /Karl|Comprador/i;
const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const correo = (td: any) => token(td, 'COMPRADOR_USER')!;
const SIN_METODO = /Elige una forma de entrega/i;

/** Pasos 1–4 de los TC Guest: app con datos borrados → Store Locator del header → modal. */
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

/** Texto del Store Locator del header, o null si la pantalla no lo muestra. */
async function storeLocator(screen: Screen): Promise<string | null> {
  const loc = screen.getByTestId('delivery-open');
  for (let i = 0; i < 8; i++) {
    if (await loc.isVisible().catch(() => false)) return ((await loc.getText().catch(() => '')) || '').replace(/\s+/g, ' ').trim() || '(sin texto)';
    await dormir(1500);
  }
  return null;
}

const escapar = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

test.describe.configure({ timeout: 900000 });
test.describe(`B2C-26 — Store Locator, TC pendientes (${PLATAFORMA})`, () => {
  test(`TC-B2C26-APP-006 · Un resultado de Google sin calle usa el texto escrito como Calle y continúa al PIN [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C26-APP-006';
    const comuna = 'Providencia'; // paso 5 del TC: "el nombre de una comuna (ej. "Providencia")"
    const modal = await abrirModalInvitado(screen, device, bundleId!, p, cp);
    await tolerante(() => modal.elegirSugerencia(comuna, new RegExp(`^${comuna}`, 'i')));
    const detalle = new DetalleDireccionScreen(screen, p);
    await tolerante(() => expect(detalle.titulo, 'confirmación con PIN (B2C-99)').toBeVisible({ timeout: 45000 }));
    await detalle.capturarEvidencia(cp, 8, 'Detalles de la dirección con la comuna elegida');
    const direccion = await tolerante(() => detalle.direccion());
    test.info().annotations.push({ type: 'dirección en B2C-99', description: direccion });
    expect(direccion, 'Calle = el texto escrito').toMatch(new RegExp(comuna, 'i'));
    expect(direccion, 'Región prellenada desde Google').toMatch(/Metropolitana/i);
    await detalle.capturarEvidencia(cp);
  });

  test(`TC-B2C26-APP-038 · Al buscar un Plus Code de Google la dirección se agrega sin problemas [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C26-APP-038';
    const plus = token(testData, 'DIRECCION_PLUS_CODE')!; // "HG74+86G Las Condes, Chile"
    const modal = await abrirModalInvitado(screen, device, bundleId!, p, cp);
    await modal.buscar(plus);
    // El token ya termina en ", Chile", así que el texto del buscador casaría con cualquier regex
    // que busque la sugerencia por ese final. La fila de Google trae dos renglones ("HG74+86G Las
    // Condes" / "Chile"): se toca el primero con texto exacto, que el buscador no iguala.
    const sugerencia = screen.getByText(plus.replace(/,\s*Chile$/i, ''), { exact: true });
    await tolerante(() => sugerencia.waitFor({ state: 'visible', timeout: 30000 }));
    await modal.capturarEvidencia(cp, 6, 'sugerencia de Google para el Plus Code');
    await tolerante(() => sugerencia.tap());
    const detalle = new DetalleDireccionScreen(screen, p);
    await tolerante(() => expect(detalle.titulo, 'confirmación con PIN (B2C-99)').toBeVisible({ timeout: 45000 }));
    await detalle.capturarEvidencia(cp, 8, 'Detalles de la dirección con el Plus Code');
    const direccion = await tolerante(() => detalle.direccion());
    test.info().annotations.push({ type: 'dirección en B2C-99', description: direccion });
    expect(direccion, 'Comuna Las Condes precargada').toMatch(/Las Condes/i);
    expect(direccion, 'Región Metropolitana precargada').toMatch(/Metropolitana/i);
    await tolerante(() => detalle.botonConfirmar.tap());
    expect(await visibleEn(new SinCoberturaModal(screen, p).titulo, 8000), 'la dirección tiene cobertura (sin mensaje de error)').toBe(false);
    const nav = new NavBar(screen, p);
    await tolerante(() => expect(nav.metodoDeEntrega, 'el header muestra la dirección seteada').toHaveText(/Las Condes/i, { timeout: 45000 }));
    await nav.capturarEvidencia(cp, 10, 'Store Locator del header con la dirección');
    await nav.capturarEvidencia(cp);
  });

  test(`TC-B2C26-APP-024 · El menú ⋮ aparece solo en las direcciones guardadas no activas [Logueado] (${PLATAFORMA})`, async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C26-APP-024';
    await asegurarApp(screen);
    await sesion(screen, p, cp, correo(testData), SALUDO);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await dormir(3000);
    const nav = await tol(() => new NavBar(screen, p).waitUntilReady());
    await tol(() => nav.tapMetodoDeEntrega());
    const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await dormir(2500);
    await modal.capturarEvidencia(cp, 4, 'modal con la dirección activa y las guardadas');
    const activa = await modal.direccionActiva();
    const guardadas = await modal.direccionesGuardadas();
    test.info().annotations.push({ type: 'modal', description: `activa: ${activa?.texto ?? '(ninguna)'} (menú ⋮: ${activa?.conMenu}); guardadas: ${guardadas.map((g) => `${g.etiqueta}=${g.conMenu}`).join(' | ')}` });
    expect(activa, 'la dirección activa aparece marcada').not.toBeNull();
    expect(guardadas.length, 'al menos una dirección guardada no activa').toBeGreaterThan(0);
    expect(activa!.conMenu, 'la dirección activa no muestra el menú ⋮').toBe(false);
    for (const g of guardadas) expect.soft(g.conMenu, `"${g.etiqueta}" muestra el menú ⋮`).toBe(true);
    await modal.capturarEvidencia(cp);
  });

  test(`TC-B2C26-APP-025 · "No gracias" en la confirmación de eliminar mantiene la dirección [Logueado] (${PLATAFORMA})`, async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C26-APP-025';
    await asegurarApp(screen);
    await sesion(screen, p, cp, correo(testData), SALUDO);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await dormir(3000);
    const nav = await tol(() => new NavBar(screen, p).waitUntilReady());
    await tol(() => nav.tapMetodoDeEntrega());
    const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await dormir(2500);
    const antes = await modal.direccionesGuardadas();
    expect(antes.length, 'hay una dirección guardada no activa').toBeGreaterThan(0);
    const objetivo = antes[0].etiqueta;
    await modal.capturarEvidencia(cp, 4, 'modal con las direcciones guardadas');
    await tol(() => modal.tapOpcionesDe(objetivo));
    // En la v1.0.7 el ⋮ abre directo la confirmación; si la v1.0.1 muestra antes una opción
    // "Eliminar dirección", se toca. Nunca se toca "Aceptar".
    if (!(await modal.confirmarEliminar.isVisible().catch(() => false))) {
      await tol(() => screen.getByText(/eliminar direcci[oó]n/i).first().tap());
    }
    await tol(() => expect(modal.confirmarEliminar, 'modal "¿Quieres eliminar tu dirección?"').toBeVisible({ timeout: 20000 }));
    await modal.capturarEvidencia(cp, 6, 'confirmación de eliminar con Aceptar y No gracias');
    await tol(() => modal.tapNoGracias());
    await dormir(2000);
    expect(await visibleEn(modal.confirmarEliminar, 3000), 'el modal de confirmación se cierra').toBe(false);
    const despues = await modal.direccionesGuardadas();
    test.info().annotations.push({ type: 'guardadas', description: `antes: ${antes.map((g) => g.etiqueta).join(' | ')}; después: ${despues.map((g) => g.etiqueta).join(' | ')}` });
    expect(despues.map((g) => g.etiqueta), 'la dirección sigue en la lista').toContain(objetivo);
    expect(despues.length, 'no se eliminó ninguna dirección').toBe(antes.length);
    await modal.capturarEvidencia(cp);
  });

  test(`TC-B2C26-APP-028 · El header del logueado sin dirección en sesión muestra la de su última compra [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C26-APP-028';
    await arrancarInvitado(screen, device, bundleId!, p);
    const nav0 = new NavBar(screen, p);
    await tolerante(() => expect(nav0.textoSinMetodo, 'precondición: sin dirección activa en la sesión').toBeVisible({ timeout: 30000 }));
    await nav0.capturarEvidencia(cp, 2, 'Home sin dirección activa');
    await sesion(screen, p, cp, correo(testData), SALUDO);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await dormir(4000);
    const header = await storeLocator(screen);
    test.info().annotations.push({ type: 'Store Locator tras el login', description: header ?? '(no se muestra)' });
    await new NavBar(screen, p).capturarEvidencia(cp, 6, 'Store Locator del header tras iniciar sesión');
    expect(header, 'el header muestra el Store Locator').not.toBeNull();
    expect(header, 'ya no pide elegir una forma de entrega').not.toMatch(SIN_METODO);
    expect(header, 'muestra "Desde" con la ventana de la última compra').toMatch(/Desde/i);
    await new NavBar(screen, p).capturarEvidencia(cp);
  });

  test(`TC-B2C26-APP-034 · Al reiniciar sesión se recupera la dirección de la última compra o la última seteada [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C26-APP-034';
    await arrancarInvitado(screen, device, bundleId!, p);
    const nav0 = new NavBar(screen, p);
    const antes = await storeLocator(screen);
    await nav0.capturarEvidencia(cp, 2, 'Home antes de iniciar sesión');
    await sesion(screen, p, cp, correo(testData), SALUDO);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await dormir(4000);
    const despues = await storeLocator(screen);
    test.info().annotations.push({ type: 'Store Locator', description: `antes: ${antes ?? '(no se muestra)'}; después del login: ${despues ?? '(no se muestra)'}` });
    await new NavBar(screen, p).capturarEvidencia(cp, 6, 'Store Locator del header tras iniciar sesión');
    expect(despues, 'el header muestra el Store Locator').not.toBeNull();
    expect(despues, 'el header muestra una dirección (no pide elegir una forma de entrega)').not.toMatch(SIN_METODO);
    await new NavBar(screen, p).capturarEvidencia(cp);
  });
  test(`TC-B2C26-APP-026 · "Aceptar" elimina la dirección y muestra el toast de éxito [Logueado] (${PLATAFORMA})`, async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C26-APP-026';
    await asegurarApp(screen);
    await sesion(screen, p, cp, correo(testData), SALUDO);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await dormir(3000);
    const nav = await tol(() => new NavBar(screen, p).waitUntilReady());
    await tol(() => nav.tapMetodoDeEntrega());
    const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await dormir(2500);
    const antes = await modal.direccionesGuardadas();
    // Se elimina una dirección duplicada ("Calle Uno 23 (N)", la de N más alto) para no perder
    // "Casa" ni las direcciones con nombre propio de la cuenta.
    const duplicadas = antes.filter((g) => /^Calle Uno 23 \(\d+\)$/.test(g.etiqueta))
      .sort((a, b) => Number(b.etiqueta.match(/\d+/g)!.pop()) - Number(a.etiqueta.match(/\d+/g)!.pop()));
    expect(duplicadas.length, 'hay una dirección duplicada no activa que eliminar').toBeGreaterThan(0);
    const objetivo = duplicadas[0].etiqueta;
    test.info().annotations.push({ type: 'dirección eliminada', description: `${objetivo}; guardadas antes: ${antes.map((g) => g.etiqueta).join(' | ')}` });
    await modal.capturarEvidencia(cp, 4, 'modal con las direcciones guardadas');
    await tol(() => modal.tapOpcionesDe(objetivo));
    if (!(await modal.confirmarEliminar.isVisible().catch(() => false))) {
      await tol(() => screen.getByText(/eliminar direcci[oó]n/i).first().tap());
    }
    await tol(() => expect(modal.confirmarEliminar, 'modal "¿Quieres eliminar tu dirección?"').toBeVisible({ timeout: 20000 }));
    await modal.capturarEvidencia(cp, 6, 'confirmación de eliminar');
    await tol(() => screen.getByRole('button', { name: 'Aceptar' }).tap());
    const toast = screen.getByText(/Tu direcci[oó]n fue eliminada con [eé]xito/i);
    await tol(() => expect(toast, 'toast "Tu dirección fue eliminada con éxito."').toBeVisible({ timeout: 30000 }));
    await modal.capturarEvidencia(cp, 8, 'toast de éxito tras eliminar');
    await tol(() => expect(toast, 'el toast se cierra solo (a los 4 s)').not.toBeVisible({ timeout: 12000 }));
    const despues = await modal.direccionesGuardadas();
    test.info().annotations.push({ type: 'guardadas después', description: despues.map((g) => g.etiqueta).join(' | ') });
    expect(despues.map((g) => g.etiqueta), 'la dirección desaparece de la lista').not.toContain(objetivo);
    expect(despues.length, 'la lista tiene una dirección menos').toBe(antes.length - 1);
    await modal.capturarEvidencia(cp);
  });

  test(`TC-B2C26-APP-037 · Una dirección sin numeración se guarda en el perfil con "S/N" [Logueado] (${PLATAFORMA})`, async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C26-APP-037';
    // {DIRECCION_SIN_NUMERO} = "Metropolitana, Las Condes, Las Condes": Región, Comuna y Dirección.
    const [region, comuna, via] = token(testData, 'DIRECCION_SIN_NUMERO')!.split(',').map((s) => s.trim());
    await asegurarApp(screen);
    await sesion(screen, p, cp, correo(testData), SALUDO);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await dormir(3000);
    const nav = await tol(() => new NavBar(screen, p).waitUntilReady());
    await tol(() => nav.tapMetodoDeEntrega());
    const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await dormir(2500);
    await modal.capturarEvidencia(cp, 4, 'modal del logueado');
    await modal.buscar('Av');
    await tol(() => expect(modal.botonAgregar, '"Agregar"').toBeVisible({ timeout: 20000 }));
    const form = await tol(() => modal.tapAgregar());
    await tol(() => form.waitUntilReady());
    await tol(() => form.abrirRegion());
    await tol(() => form.elegir(region));
    await tol(() => form.abrirComuna());
    await tol(() => form.elegir(comuna));
    await tol(() => form.escribirCalle(via));
    await form.capturarEvidencia(cp, 7, 'Región, Comuna y Dirección sin numeración');
    await tol(() => form.continuar.tap());
    const detalle = new DetalleDireccionScreen(screen, p);
    await tol(() => expect(detalle.titulo, 'confirmación con PIN (B2C-99)').toBeVisible({ timeout: 45000 }));
    await detalle.capturarEvidencia(cp, 8, 'Detalles de la dirección');
    const desde = new Date(Date.now() - 30000);
    await tol(() => detalle.botonConfirmar.tap());
    // El flujo puede pedir OTP (B2C-125) tras un loader: se espera hasta 45 s a que aparezca el
    // modal y el código se busca en Gmail como en el login.
    if (await visibleEn(modal.autenticacionRequerida, 45000)) {
      await ingresarCodigo(screen, await esperarCodigo(cp, correo(testData), desde));
    }
    expect(await visibleEn(new SinCoberturaModal(screen, p).titulo, 6000), 'precondición: la dirección tiene cobertura').toBe(false);
    await tol(() => expect(nav.metodoDeEntrega, 'dirección seteada en el header').toHaveText(new RegExp(via, 'i'), { timeout: 60000 }));
    await nav.capturarEvidencia(cp, 10, 'Store Locator del header con la dirección nueva');
    // Paso 9: la dirección nueva en el modal con "S/N".
    await tol(() => nav.tapMetodoDeEntrega());
    await tol(() => modal.waitUntilReady());
    await dormir(2500);
    const antesTextos = (await modal.textos()).map((t) => t.texto);
    await modal.capturarEvidencia(cp, 12, 'modal con la dirección nueva');
    test.info().annotations.push({ type: 'modal tras guardar', description: antesTextos.filter((t) => /S\/N|Las Condes/i.test(t)).join(' | ') });
    expect(antesTextos.some((t) => /S\/N/.test(t)), 'la dirección nueva se muestra con S/N en el modal').toBe(true);
    await tol(() => modal.cerrar());
    // Paso 10: cerrar sesión, volver a entrar y revisar de nuevo.
    await tol(() => screen.getByTestId('tab-Mi cuenta').tap());
    await dormir(3000);
    await tol(() => new MiCuentaScreen(screen, p).cerrarSesion());
    await dormir(4000);
    await sesion(screen, p, cp, correo(testData), SALUDO);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await dormir(3000);
    await tol(() => new NavBar(screen, p).tapMetodoDeEntrega());
    await tol(() => modal.waitUntilReady());
    await dormir(2500);
    const despuesTextos = (await modal.textos()).map((t) => t.texto);
    await modal.capturarEvidencia(cp, 14, 'modal tras volver a iniciar sesión');
    test.info().annotations.push({ type: 'modal tras relogin', description: despuesTextos.filter((t) => /S\/N|Las Condes/i.test(t)).join(' | ') });
    expect(despuesTextos.some((t) => /S\/N/.test(t)), 'la dirección sigue con S/N tras volver a iniciar sesión').toBe(true);
    await modal.capturarEvidencia(cp);
  });
});
