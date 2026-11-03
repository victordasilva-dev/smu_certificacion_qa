import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { NavBar } from './pages/NavBar';
import { PdpScreen } from './pages/PdpScreen';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { SinCoberturaModal } from './pages/SinCoberturaModal';
import { sesion, esperarCodigo, ingresarCodigo } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';
import { tolerante } from './support/tolerante';
import { execSync } from 'child_process';

/**
 * B2C-123 — dirección guardada sin cobertura (app nativa, Android, build v1.0.1), TC 002: con la
 * cuenta {COMPRADOR_USER} se elige la dirección guardada {DIRECCION_SIN_COBERTURA} en el Store
 * Locator y, tras el OTP, se espera el modal «Aún no llegamos a esta dirección». Si la cuenta no la
 * tiene guardada, el caso queda bloqueado por data. Para no cambiar la dirección activa de la cuenta
 * el caso se cierra con «Cambiar método de entrega».
 */

const r = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));

test.describe.configure({ timeout: 900000 });
test.describe('B2C-123 — dirección guardada sin cobertura, con sesión (Android)', () => {
  test('TC-B2C123-APP-002 · Una dirección guardada sin cobertura muestra el modal tras validar OTP [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C123-APP-002';
    const correo = token(testData, 'COMPRADOR_USER')!.split(' / ')[0];
    const dir = token(testData, 'DIRECCION_SIN_COBERTURA')!;
    await asegurarApp(screen);
    await sesion(screen, p, cp, correo, /Karl/);
    // La Home con sesión no se puede volcar: se entra y se abre el Store Locator por coordenadas.
    execSync('adb shell input tap 176 2230', { timeout: 15000 });
    await pausa(6000);
    execSync('adb shell input tap 1012 192', { timeout: 15000 });
    await pausa(3000);
    const modal = await r(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await pausa(2000);
    await r(() => modal.capturarEvidencia(cp, 2, 'Store Locator con las direcciones guardadas'));
    const t = (await r(() => new PdpScreen(screen, p).textos())).map((x) => x.t).filter(Boolean);
    test.info().annotations.push({ type: 'direcciones guardadas', description: JSON.stringify(t.slice(0, 40)) });
    const calle = dir.split(',')[0].trim();
    const fila = t.find((x) => x.includes(calle));
    if (!fila) { test.info().annotations.push({ type: 'bloqueado-data', description: `la cuenta no tiene guardada la dirección ${dir}` }); return; }
    const etiqueta = t[t.indexOf(fila) - 1] ?? fila;
    const desde = new Date(Date.now() - 30000);
    await r(() => screen.getByText(fila, { exact: false }).first().tap());
    await r(() => screen.getByText(/Autenticación requerida/).waitFor({ state: 'visible', timeout: 40000 }));
    await ingresarCodigo(screen, await esperarCodigo(cp, correo, desde));
    const sin = new SinCoberturaModal(screen, p);
    await r(() => expect(sin.titulo, 'se muestra «Aún no llegamos a esta dirección»').toBeVisible({ timeout: 40000 }));
    await r(() => sin.capturarEvidencia(cp, 4, 'modal Aún no llegamos a esta dirección'));
    expect(await sin.continuar.isVisible().catch(() => false), 'opción «Continuar con esta dirección»').toBe(true);
    expect(await sin.cambiarMetodo.isVisible().catch(() => false), 'opción «Cambiar método de entrega»').toBe(true);
    await r(() => sin.cambiarMetodo.tap());
    void etiqueta;
    void NavBar;
  });
});
