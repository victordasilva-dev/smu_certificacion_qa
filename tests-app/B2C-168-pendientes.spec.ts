import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { CarroScreen } from './pages/CarroScreen';
import { PdpScreen } from './pages/PdpScreen';
import { HomeScreen } from './pages/HomeScreen';
import { arrancarInvitado } from './support/entregaApp';
import { escribirTexto, esperarCodigo, ingresarCodigo } from './support/sesionOtp';
import { tolerante } from './support/tolerante';

/**
 * B2C-168 — fusión de carros invitado → logueado (app nativa, Android, build v1.0.1), TC 002.
 * La Home con carro no se puede volcar (uiautomator no la ve inactiva), así que el SKU se agrega
 * desde los resultados de búsqueda y el carro se abre con «Ir al carro».
 */

const r = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));

test.describe.configure({ timeout: 1200000 });
test.describe('B2C-168 — fusión de carros, TC pendientes (Android)', () => {
  test('TC-B2C168-APP-002 · El login desde el carro fusiona, muestra los sugeridos y lleva a Datos de entrega [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C168-APP-002';
    const sku = token(testData, 'SKU_VALID_001')!;
    const correo = token(testData, 'COMPRADOR_USER')!.split(' / ')[0];
    const tabs = await arrancarInvitado(screen, device, bundleId!, p);
    // Precondición: invitado con el SKU x 1 en el carro (desde la búsqueda).
    await r(() => tabs.tapBuscar());
    const buscar = await r(() => new BuscarScreen(screen, p).waitUntilReady());
    const srp = await r(() => buscar.buscar(sku));
    await r(() => buscar.resultadoPara(sku).waitFor({ state: 'visible', timeout: 30000 }));
    const home = new HomeScreen(screen, p);
    await r(() => home.botonAgregar(sku).tap());
    await pausa(4000);
    await r(() => srp.capturarEvidencia(cp, 2, 'invitado con el SKU en el carro'));
    // Pasos 1–3: carro → «Inicia sesión o regístrate».
    await r(() => screen.getByText('Ir al carro').first().tap());
    const carro = await r(() => new CarroScreen(screen, p).waitUntilReady());
    const boton = screen.getByRole('button', { name: /inicia sesi[oó]n o reg[ií]strate/i });
    await r(() => boton.waitFor({ state: 'visible', timeout: 60000 }));
    await r(() => carro.capturarEvidencia(cp, 4, 'carro del invitado'));
    await r(() => boton.tap());
    // Paso 4: inicio de sesión por correo + OTP.
    const campo = screen.getByType('android.widget.EditText').first();
    await r(() => campo.waitFor({ state: 'visible', timeout: 30000 }));
    const desde = new Date(Date.now() - 30000);
    await escribirTexto(campo, correo);
    await pausa(1500);
    await r(() => screen.getByText('Continuar').first().tap());
    await r(() => screen.getByText(/Autenticación requerida/).waitFor({ state: 'visible', timeout: 40000 }));
    await ingresarCodigo(screen, await esperarCodigo(cp, correo, desde));
    // Paso 5: tras la fusión, el modal de sugeridos.
    const sugeridos = screen.getByText(/que no se te olviden/i);
    const aparece = await tolerante(() => sugeridos.waitFor({ state: 'visible', timeout: 60000 }).then(() => true, () => false), 30);
    await r(() => new PdpScreen(screen, p).capturarEvidencia(cp, 6, aparece ? 'modal ¡Que no se te olviden!' : 'pantalla tras la fusión'));
    const t = (await r(() => new PdpScreen(screen, p).textos())).map((x) => x.t).filter(Boolean);
    test.info().annotations.push({ type: 'tras la fusión', description: JSON.stringify(t.slice(0, 30)) });
    expect(aparece, 'se muestra el modal «¡Que no se te olviden!»').toBe(true);
    // Paso 6: «Continuar» → Datos de entrega.
    await r(() => screen.getByRole('button', { name: /^continuar$/i }).first().tap());
    await r(() => expect(screen.getByText(/datos de entrega/i).first(), 'se muestra «Datos de entrega»').toBeVisible({ timeout: 60000 }));
    await r(() => new PdpScreen(screen, p).capturarEvidencia(cp, 8, 'Datos de entrega'));
    void TabBar;
  });
});
