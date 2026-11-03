import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { NavBar } from './pages/NavBar';
import { PdpScreen } from './pages/PdpScreen';
import { AgotarseModal, PromptLogin } from './pages/AgotarseModal';
import { agregarAlCarro, calle, elegirDireccion, invitadoConDireccion } from './support/entregaApp';
import { escribirTexto, esperarCodigo, ingresarCodigo } from './support/sesionOtp';
import { tolerante } from './support/tolerante';

/**
 * B2C-122 — TC 010 (invitado que inicia sesión desde el prompt de «Sí, continuar», app nativa,
 * Android, build v1.0.1). Mismos pasos que 122-009 hasta el prompt; luego se inicia sesión con
 * {COMPRADOR_USER} por correo + OTP y se mira si la app pide un segundo OTP para confirmar la
 * dirección heredada del invitado (B2C-124). El segundo código no se ingresa, para no cambiar la
 * dirección activa de la cuenta.
 */

const r = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));

function patronSugerencia(direccion: string): RegExp {
  const numero = direccion.match(/\d+/)?.[0] ?? '';
  const comuna = direccion.split(',').pop()!.trim();
  return new RegExp(`${numero}.*${comuna.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');
}

test.describe.configure({ timeout: 900000 });
test.describe('B2C-122 — invitado que inicia sesión desde el prompt (Android)', () => {
  test('TC-B2C122-APP-010 · Un invitado que inicia sesión desde el prompt pasa al flujo invitado a logueado [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C122-APP-010';
    const dir = token(testData, 'DIRECCION_DESPACHO_001')!;
    const otra = token(testData, 'DIRECCION_OTRA_TIENDA')!;
    const correo = token(testData, 'COMPRADOR_USER')!.split(' / ')[0];
    const tabs = await invitadoConDireccion(screen, device, bundleId!, p, dir);
    await agregarAlCarro(screen, p, tabs, token(testData, 'SKU_VALID_001')!);
    const nav = new NavBar(screen, p);
    void calle;
    const detalle = await elegirDireccion(screen, p, otra, patronSugerencia(otra));
    await r(() => detalle.capturarEvidencia(cp, 2, 'Detalles de la nueva dirección'));
    await r(() => detalle.botonConfirmar.tap());
    const agotarse = new AgotarseModal(screen, p);
    await r(() => expect(agotarse.titulo, 'se abre «Algunos productos podrían agotarse»').toBeVisible({ timeout: 30000 }));
    await r(() => agotarse.botonSi.tap());
    const prompt = new PromptLogin(screen, p);
    await r(() => expect(prompt.titulo, 'se muestra el prompt de inicio de sesión').toBeVisible({ timeout: 60000 }));
    await r(() => prompt.capturarEvidencia(cp, 4, 'prompt de inicio de sesión'));
    // Inicio de sesión con la cuenta (correo + OTP).
    const campo = screen.getByType('android.widget.EditText').first();
    await r(() => campo.waitFor({ state: 'visible', timeout: 25000 }));
    const desde = new Date(Date.now() - 30000);
    await escribirTexto(campo, correo);
    await pausa(1500);
    await r(() => screen.getByText('Continuar').first().tap());
    await r(() => screen.getByText(/Autenticación requerida/).waitFor({ state: 'visible', timeout: 40000 }));
    await ingresarCodigo(screen, await esperarCodigo(cp, correo, desde));
    // ¿Pide un segundo OTP para confirmar la dirección heredada?
    await pausa(6000);
    const textos = (await r(() => new PdpScreen(screen, p).textos())).map((x) => x.t).filter(Boolean);
    await r(() => prompt.capturarEvidencia(cp, 6, 'pantalla tras validar el OTP del inicio de sesión'));
    test.info().annotations.push({ type: 'tras el login', description: JSON.stringify(textos.slice(0, 30)) });
    const segundoOtp = textos.some((x) => /autenticaci[oó]n requerida|confirma(r)? (tu|la) direcci[oó]n|c[oó]digo/i.test(x));
    expect(segundoOtp, 'la app solicita un OTP para confirmar la dirección heredada').toBe(true);
    void nav;
  });
});
