import { execSync } from 'child_process';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { PdpScreen } from './pages/PdpScreen';
import { MiCuentaScreen } from './pages/MiCuentaScreen';
import { escribirTexto, esperarCodigo, ingresarCodigo, nodos, sesion } from './support/sesionOtp';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { DetalleDireccionScreen } from './pages/DetalleDireccionScreen';
import { asegurarApp } from './support/appLista';
import { tolerante } from './support/tolerante';

/**
 * B2C-123 (010–012, cuenta {COMPRADOR_DIRECCION_SIN_COBERTURA_USER}) y B2C-144 (027, cuenta
 * {SIN_DIRECCION_USER}) — app nativa, Android, build v1.0.1.
 *
 * 123: se intenta entrar con la cuenta sin cobertura (correo + OTP). Si la app no la reconoce
 * (pide crear cuenta) los tres casos quedan bloqueados por data. El código no se ingresa aquí.
 * 144-027: invitado sin dirección que inicia sesión con la cuenta sin direcciones: el navbar de la
 * Home debe seguir en «Elige una forma de entrega».
 * La Home con sesión no se puede volcar: se entra a ella por coordenadas y se lee en la captura.
 */

const r = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const tocar = (x: number, y: number) => execSync(`adb shell input tap ${x} ${y}`, { timeout: 15000 });
const TAB_HOME: [number, number] = [176, 2230];
const TAB_CUENTA: [number, number] = [900, 2232];

/** Deja la app como invitado en la pestaña Mi cuenta. */
async function comoInvitado(screen: any, p: any) {
  await asegurarApp(screen);
  tocar(...TAB_CUENTA);
  await pausa(3500);
  if ((await r(() => nodos(screen))).some((x) => /^Hola, /.test(x.label))) {
    await r(() => new MiCuentaScreen(screen, p).cerrarSesion()).catch(() => undefined);
    await pausa(3000);
    tocar(...TAB_CUENTA);
    await pausa(3500);
    if ((await r(() => nodos(screen))).some((x) => /^Hola, /.test(x.label))) throw new Error('la sesión no se cerró');
  }
}

test.describe.configure({ timeout: 900000 });
test.describe('B2C-123 / B2C-144 — cuentas sin cobertura y sin dirección (Android)', () => {
  test('TC-B2C123-APP-010 · Una dirección que recuperó cobertura pierde la etiqueta: acceso con la cuenta sin cobertura [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C123-APP-010';
    const correo = token(testData, 'COMPRADOR_DIRECCION_SIN_COBERTURA_USER')!.split(' / ')[0];
    await comoInvitado(screen, p);
    for (let i = 0; i < 8 && !(await screen.getByText('Iniciar sesión').first().isVisible().catch(() => false)); i++) {
      await r(() => screen.swipe('down'));
      await pausa(800);
    }
    await r(() => screen.getByText('Iniciar sesión').first().tap());
    await pausa(3500);
    const campo = screen.getByType('android.widget.EditText').first();
    await r(() => campo.waitFor({ state: 'visible', timeout: 25000 }));
    await escribirTexto(campo, correo);
    await pausa(1500);
    await r(() => screen.getByText('Continuar').first().tap());
    await pausa(15000);
    const pdp = new PdpScreen(screen, p);
    await r(() => pdp.capturarEvidencia(cp, 2, 'pantalla tras ingresar el correo de la cuenta sin cobertura'));
    const t = (await r(() => pdp.textos())).map((x) => x.t).filter(Boolean);
    test.info().annotations.push({ type: 'tras Continuar', description: JSON.stringify(t.slice(0, 30)) });
    const otp = t.some((x) => /autenticaci[oó]n requerida/i.test(x));
    expect(otp, 'la app envía un OTP (la cuenta existe)').toBe(true);
  });

  test('TC-B2C144-APP-027 · Al iniciar sesión en una cuenta sin direcciones se ve «Elige una forma de entrega» [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C144-APP-027';
    const correo = token(testData, 'SIN_DIRECCION_USER')!.split(' / ')[0];
    await comoInvitado(screen, p);
    tocar(...TAB_HOME);
    await pausa(7000);
    await r(() => new PdpScreen(screen, p).capturarEvidencia(cp, 2, 'Home del invitado sin dirección'));
    tocar(...TAB_CUENTA);
    await pausa(3500);
    await sesion(screen, p, cp, correo, /Hola, QA/);
    tocar(...TAB_HOME);
    await pausa(8000);
    await r(() => new PdpScreen(screen, p).capturarEvidencia(cp, 4, 'Home tras iniciar sesión con la cuenta sin direcciones'));
  });

  test('TC-B2C144-APP-015 · Un cliente con membresía ve el chip Gratis con su ícono en el navbar [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C144-APP-015';
    const correo = token(testData, 'SIN_DIRECCION_USER')!.split(' / ')[0];
    const direccion = token(testData, 'DIRECCION_DESPACHO_001')!;
    await asegurarApp(screen);
    await sesion(screen, p, cp, correo, /Hola, QA/);
    // Precondición (autorizada por el usuario): despacho a Calle Uno 23, La Florida en la cuenta sin direcciones.
    tocar(...TAB_HOME);
    await pausa(7000);
    tocar(1012, 192);
    await pausa(3000);
    const modal = await r(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await modal.elegirSugerencia(direccion, /^Calle Uno 23/i);
    const detalle = await r(() => new DetalleDireccionScreen(screen, p).waitUntilReady());
    const desde = new Date(Date.now() - 30000);
    await r(() => detalle.botonConfirmar.tap());
    const otp = await tolerante(() => screen.getByText(/Autenticación requerida/).waitFor({ state: 'visible', timeout: 25000 }).then(() => true, () => false), 30);
    if (otp) await ingresarCodigo(screen, await esperarCodigo(cp, correo, desde));
    await pausa(12000);
    tocar(...TAB_HOME);
    await pausa(9000);
    await r(() => new PdpScreen(screen, p).capturarEvidencia(cp, 2, 'Home con despacho a Calle Uno 23 y el navbar de la cuenta con membresía'));
  });

  test('LIMPIEZA-B2C144-015 · Elimina Calle Uno 23 de la cuenta sin direcciones (Android)', async ({ screen, plataforma: p }) => {
    await asegurarApp(screen);
    tocar(...TAB_HOME);
    await pausa(7000);
    tocar(1012, 192);
    await pausa(3000);
    const modal = await r(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await pausa(2000);
    const guardadas = await r(() => modal.direccionesGuardadas());
    const fila = guardadas.find((d: any) => /Calle Uno 23/i.test(`${d.etiqueta} ${d.detalle}`));
    test.info().annotations.push({ type: 'guardadas', description: JSON.stringify(guardadas) });
    if (!fila) return;
    await r(() => modal.tapOpcionesDe(fila.etiqueta));
    await r(() => modal.confirmarEliminar.tap());
    await pausa(5000);
    await r(() => new PdpScreen(screen, p).capturarEvidencia('LIMPIEZA-B2C144-015', 2, 'modal tras eliminar la dirección'));
  });
});
