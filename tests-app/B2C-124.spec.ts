import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { NavBar } from './pages/NavBar';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { DetalleDireccionScreen } from './pages/DetalleDireccionScreen';
import { tolerante } from './support/tolerante';
import { esperarCodigo, ingresarCodigo, escribirTexto, nodos, tiene, tocarEscalado } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';
import { fijarDireccionInvitado, agregarDesdePdp } from './support/invitadoConCarro';

/**
 * B2C-124 — Fusión de sesión: invitado que inicia sesión (app nativa, Android, build v1.0.1).
 *
 * Se ejecutan 001, 003, 004 y 005. Los casos 002 y 006–009 piden un invitado SIN dirección con
 * productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar»
 * abre el Store Locator), así que su precondición no se puede armar.
 *
 * Cada caso que aplica la dirección del invitado a la cuenta termina devolviéndola a
 * {DIRECCION_DESPACHO_001} desde las direcciones guardadas, para que el siguiente caso parta de la
 * precondición «la última dirección de la cuenta es {DIRECCION_DESPACHO_001}».
 */
const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const paso = async <T>(nombre: string, fn: () => Promise<T>): Promise<T> => {
  try { return await fn(); } catch (e: any) { throw new Error(`[${nombre}] ${String(e?.message ?? e).split('\n')[0]}`); }
};
const SALUDO = /Karl|Comprador/i;
const correo = (td: any) => token(td, 'USER_AUTH_001')!.split('/')[0].trim();

/** Mi cuenta → Iniciar sesión → correo → Continuar. Devuelve la hora desde la que vale el código OTP. */
async function empezarLogin(screen: Screen, p: any, td: any): Promise<Date> {
  await asegurarApp(screen);
  await tol(() => screen.getByTestId('tab-Mi cuenta').tap());
  await dormir(3000);
  for (let i = 0; i < 8 && !(await screen.getByText('Iniciar sesión').first().isVisible().catch(() => false)); i++) {
    await tol(() => screen.swipe('down'));
    await dormir(800);
  }
  await tol(() => screen.getByText('Iniciar sesión').first().tap());
  await dormir(3500);
  const campo = screen.getByType('android.widget.EditText').first();
  await tol(() => campo.waitFor({ state: 'visible', timeout: 25000 }));
  const desde = new Date(Date.now() - 30000);
  await escribirTexto(campo, correo(td));
  await dormir(1500);
  await tol(() => screen.getByText('Continuar').first().tap());
  return desde;
}
const modalAutenticacion = (screen: Screen) => screen.getByText(/Autenticación requerida/).first();
/**
 * Valida el OTP del login y devuelve lo que pide la app a continuación: el modal «Algunos productos podrían agotarse»
 * ('agotarse'), directamente el modal «Autenticación requerida» de la dirección ('otp2') o nada ('ninguno').
 * El orden depende del momento: a veces la pantalla de huella aparece antes.
 */
async function validarOtp(screen: Screen, cp: string, td: any, desde: Date): Promise<'agotarse' | 'otp2' | 'ninguno'> {
  await ingresarCodigo(screen, await esperarCodigo(cp, correo(td), desde));
  for (let i = 0; i < 12; i++) {
    const n = await nodos(screen);
    if (tiene(n, /Algunos productos podr[ií]an agotarse/)) return 'agotarse';
    if (tiene(n, /Ahora no/)) { await cerrarHuella(screen); continue; }
    if (i >= 2 && tiene(n, /Autenticación requerida/) && tiene(n, /Reenviar código/)) return 'otp2';
    await dormir(2000);
  }
  return 'ninguno';
}
/** Resuelve lo que pidió la app tras el login: confirma el cambio y/o valida el OTP de la dirección. */
async function aplicarDireccion(screen: Screen, cp: string, td: any, r: 'agotarse' | 'otp2' | 'ninguno'): Promise<void> {
  if (r === 'agotarse') await confirmarCambio(screen, cp, td);
  else if (r === 'otp2') await validarOtpDireccion(screen, cp, td, new Date(Date.now() - 30000));
}
/** Omite el ofrecimiento de ingresar con rostro o huella si aparece. */
async function cerrarHuella(screen: Screen): Promise<void> {
  if (tiene(await nodos(screen), /Ahora no/)) { await tol(() => screen.getByText('Ahora no').tap()); await dormir(4000); }
}
/** «Sí, continuar» del modal «Algunos productos podrían agotarse»: abre el modal «Autenticación requerida» (OTP de la dirección). */
async function continuarConElCambio(screen: Screen): Promise<Date> {
  const desde = new Date(Date.now() - 30000);
  await tol(() => screen.getByRole('button', { name: 'Sí, continuar' }).tap());
  await dormir(4000);
  await expect(modalAutenticacion(screen), 'se muestra el modal «Autenticación requerida» de la dirección').toBeVisible({ timeout: 40000 });
  return desde;
}
/** Valida el OTP de la dirección y omite la huella si se ofrece. */
async function validarOtpDireccion(screen: Screen, cp: string, td: any, desde: Date): Promise<void> {
  await ingresarCodigo(screen, await esperarCodigo(cp, correo(td), desde));
  await cerrarHuella(screen);
}
/** Con la app en el modal «Algunos productos podrían agotarse», confirma y valida el OTP de la dirección. */
async function confirmarCambio(screen: Screen, cp: string, td: any): Promise<void> {
  const desde = await continuarConElCambio(screen);
  await validarOtpDireccion(screen, cp, td, desde);
}
/** Texto del Store Locator en la Home. */
async function storeLocator(screen: Screen): Promise<string> {
  await tol(() => screen.getByTestId('tab-Home').tap());
  await dormir(3000);
  const loc = screen.getByTestId('delivery-open');
  await tol(() => loc.waitFor({ state: 'visible', timeout: 30000 }));
  return ((await loc.getText().catch(() => '')) || '').replace(/\s+/g, ' ').trim();
}
/** Con la sesión iniciada, deja {DIRECCION_DESPACHO_001} como dirección activa desde las guardadas. */
async function restaurarDireccion(screen: Screen, p: any, td: any, cp: string): Promise<void> {
  const dir = token(td, 'DIRECCION_DESPACHO_001')!;
  const calle = dir.split(',')[0].trim();
  if ((await storeLocator(screen)).includes(calle)) return;
  await tol(() => new NavBar(screen, p).tapMetodoDeEntrega());
  const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
  // La cuenta puede tener activo el retiro en tienda: las direcciones están en la pestaña de despacho.
  await tol(() => modal.pestanaDespacho.tap());
  await dormir(2500);
  const guardada = (await modal.direccionesGuardadas()).find((g) => g.descripcion.includes(calle));
  if (guardada) {
    await tol(() => modal.elegirDireccionGuardada(guardada.etiqueta));
    await dormir(6000);
    if (await modal.autenticacionRequerida.isVisible().catch(() => false)) throw new Error('restaurar la dirección pidió un OTP');
    return;
  }
  // La cuenta no la tiene guardada: se agrega buscándola como una dirección nueva.
  const desde = new Date(Date.now() - 30000);
  // El agente de mobilecli no escribe en el teclado Samsung: se teclea por adb (los espacios van como %s).
  await tol(() => modal.buscador.tap());
  await dormir(1000);
  execSync(`adb shell input text '${calle.replace(/ /g, '%s')}'`, { timeout: 20000 });
  const patron = new RegExp(`${dir.match(/\d+/)![0]}.*${dir.split(',').pop()!.trim()}.*, Chile$`, 'i');
  await tol(() => screen.getByText(patron).first().waitFor({ state: 'visible', timeout: 30000 }));
  await tol(() => screen.getByText(patron).first().tap());
  const detalle = await tol(() => new DetalleDireccionScreen(screen, p).waitUntilReady());
  await tol(() => detalle.botonConfirmar.tap());
  await dormir(5000);
  if (await modal.autenticacionRequerida.isVisible().catch(() => false)) await aplicarDireccion(screen, cp, td, await validarOtp(screen, cp, td, desde));
  await dormir(3000);
}

test.describe.configure({ timeout: 900000 });
test.describe('B2C-124 — Fusión de sesión (Android)', () => {
  test('TC-B2C124-APP-000 · Precondición: la cuenta queda con {DIRECCION_DESPACHO_001} como última dirección (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C124-APP-000';
    await device.terminateApp(bundleId!);
    execSync(`adb shell pm clear ${bundleId}`, { timeout: 30000 });
    await device.launchApp(bundleId!);
    const desde = await paso('iniciar el login', () => empezarLogin(screen, p, testData));
    await tol(() => modalAutenticacion(screen).waitFor({ state: 'visible', timeout: 40000 }));
    await aplicarDireccion(screen, cp, testData, await validarOtp(screen, cp, testData, desde));
    await paso('restaurar la dirección', () => restaurarDireccion(screen, p, testData, cp));
  });

  test('TC-B2C124-APP-001 · La dirección del invitado se mantiene activa tras iniciar sesión y validar OTP [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C124-APP-001';
    const otra = token(testData, 'DIRECCION_OTRA_TIENDA')!;
    await paso('fijar dirección del invitado', () => fijarDireccionInvitado(screen, device, bundleId!, p, testData, 'DIRECCION_OTRA_TIENDA'));
    const desde = await paso('iniciar el login', () => empezarLogin(screen, p, testData));
    await tol(() => modalAutenticacion(screen).waitFor({ state: 'visible', timeout: 40000 }));
    const r = await validarOtp(screen, cp, testData, desde);
    if (r === 'agotarse') await new TabBar(screen, p).capturarEvidencia(cp, 3, 'modal «Algunos productos podrían agotarse» tras el OTP');
    await paso('aplicar la dirección con el OTP', () => aplicarDireccion(screen, cp, testData, r));
    const loc = await paso('leer el Store Locator', () => storeLocator(screen));
    await new NavBar(screen, p).capturarEvidencia(cp, 4, 'Home con el Store Locator tras validar el OTP');
    test.info().annotations.push({ type: 'Store Locator', description: loc });
    expect(loc, `el Store Locator mantiene ${otra}`).toMatch(/14791|Barnechea/i);
    expect(loc, 'no se reemplaza por la dirección guardada de la cuenta').not.toMatch(/Calle Uno 23/i);
    await tol(() => new NavBar(screen, p).tapMetodoDeEntrega());
    const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await modal.capturarEvidencia(cp, 5, 'el usuario puede cambiar la dirección desde el Store Locator');
    await expect(modal.buscador, 'el modal permite cambiar la dirección').toBeVisible();
    await modal.capturarEvidencia(cp);
    await screen.goBack();
    await paso('restaurar la dirección', () => restaurarDireccion(screen, p, testData, cp));
  });
  test('TC-B2C124-APP-003 · Al iniciar sesión con dirección heredada se solicita la validación OTP [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C124-APP-003';
    await paso('fijar dirección del invitado', () => fijarDireccionInvitado(screen, device, bundleId!, p, testData, 'DIRECCION_OTRA_TIENDA'));
    const desde = await paso('iniciar el login', () => empezarLogin(screen, p, testData));
    await expect(modalAutenticacion(screen), 'se muestra el modal «Autenticación requerida»').toBeVisible({ timeout: 40000 });
    await new TabBar(screen, p).capturarEvidencia(cp, 2, 'modal «Autenticación requerida» con la dirección heredada');
    await aplicarDireccion(screen, cp, testData, await validarOtp(screen, cp, testData, desde));
    const loc = await paso('leer el Store Locator', () => storeLocator(screen));
    await new NavBar(screen, p).capturarEvidencia(cp, 4, 'Home tras validar el OTP');
    expect(loc, 'la dirección del invitado queda aplicada tras validar el OTP').toMatch(/14791|Barnechea/i);
    await new NavBar(screen, p).capturarEvidencia(cp);
    await paso('restaurar la dirección', () => restaurarDireccion(screen, p, testData, cp));
  });

  test('TC-B2C124-APP-004 · Salir del OTP sin validar inicia sesión sin aplicar la dirección del invitado [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C124-APP-004';
    await paso('fijar dirección del invitado', () => fijarDireccionInvitado(screen, device, bundleId!, p, testData, 'DIRECCION_OTRA_TIENDA'));
    const desde = await paso('iniciar el login', () => empezarLogin(screen, p, testData));
    await expect(modalAutenticacion(screen), 'se muestra «Autenticación requerida» del login').toBeVisible({ timeout: 40000 });
    const r = await validarOtp(screen, cp, testData, desde);
    expect(r !== 'ninguno', 'la app pide validar la dirección con un OTP').toBe(true);
    if (r === 'agotarse') await continuarConElCambio(screen);
    await new TabBar(screen, p).capturarEvidencia(cp, 3, 'modal «Autenticación requerida» de la dirección');
    // Se sale del OTP de la dirección sin validar: X del modal.
    tocarEscalado(958, 745);
    let toast = false;
    for (let i = 0; i < 10 && !toast; i++) { toast = tiene(await nodos(screen), /Verificaci[oó]n pendiente/i); if (!toast) await dormir(800); }
    await new TabBar(screen, p).capturarEvidencia(cp, 5, 'pantalla tras salir del OTP');
    await cerrarHuella(screen);
    expect(toast, 'toast «Verificacion pendiente. Tu dirección no fue guardada.»').toBe(true);
    await tol(() => screen.getByTestId('tab-Mi cuenta').tap());
    await dormir(3000);
    expect(tiene(await nodos(screen), /^Hola, /), 'la sesión queda iniciada').toBe(true);
    const loc = await paso('leer el Store Locator', () => storeLocator(screen));
    await new NavBar(screen, p).capturarEvidencia(cp, 7, 'Home con la sesión iniciada');
    test.info().annotations.push({ type: 'Store Locator', description: loc });
    expect(loc, 'la dirección del invitado no queda aplicada').not.toMatch(/14791|Barnechea/i);
    await tol(() => new NavBar(screen, p).tapMetodoDeEntrega());
    const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await tol(() => modal.pestanaDespacho.tap());
    await dormir(2500);
    expect((await modal.direccionesGuardadas()).some((g) => /14791|Barnechea/i.test(g.descripcion)), 'no se agrega a la libreta de direcciones').toBe(false);
    await modal.capturarEvidencia(cp);
  });

  test('TC-B2C124-APP-005 · Con carro y cambio de tienda el OTP exitoso muestra el modal «No se te escapen» [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C124-APP-005';
    await paso('fijar dirección del invitado', () => fijarDireccionInvitado(screen, device, bundleId!, p, testData, 'DIRECCION_OTRA_TIENDA'));
    await agregarDesdePdp(screen, p, token(testData, 'SKU_VALID_001')!);
    const desde = await paso('iniciar el login', () => empezarLogin(screen, p, testData));
    await expect(modalAutenticacion(screen), 'se muestra el modal «Autenticación requerida»').toBeVisible({ timeout: 40000 });
    const r = await validarOtp(screen, cp, testData, desde);
    expect(r !== 'ninguno', 'la app pide validar la dirección con un OTP').toBe(true);
    await new TabBar(screen, p).capturarEvidencia(cp, 3, 'pantalla tras validar el OTP del login');
    await aplicarDireccion(screen, cp, testData, r);
    await new TabBar(screen, p).capturarEvidencia(cp, 4, 'pantalla tras validar el OTP de la dirección');
    test.info().annotations.push({ type: 'modal tras el login', description: r });
    const loc = await paso('leer el Store Locator', () => storeLocator(screen));
    await new NavBar(screen, p).capturarEvidencia(cp, 5, 'Home con la dirección del invitado y el carro');
    expect(loc, `la dirección ${token(testData, 'DIRECCION_OTRA_TIENDA')} queda aplicada`).toMatch(/14791|Barnechea/i);
    await expect(screen.getByText(/1 unidades?/).first(), 'el carro conserva el producto').toBeVisible({ timeout: 20000 });
    await new TabBar(screen, p).capturarEvidencia(cp);
  });
});
