import * as fs from 'fs';
import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test } from './support/fixtures';
import { token } from '../tests/support/testData';
import { NavBar } from './pages/NavBar';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { tolerante } from './support/tolerante';
import { esperarCodigo, ingresarCodigo, nodos, sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/**
 * B2C-125 APP-018 y APP-020 — OTP al cambiar la tienda de retiro (app nativa, Android).
 * Veredicto por CP-ID en .qa/run/res125r.json.
 */
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const textos = async (screen: Screen) => (await nodos(screen)).map((n) => n.label).filter(Boolean);
const util = (t: string[]) => t.filter((x) => !/^Notificaci|Timbre|Modo|^$/.test(x));
const RES = '.qa/run/res125r.json';
const guardar = (cp: string, status: string, obs: string) => {
  const r = fs.existsSync(RES) ? JSON.parse(fs.readFileSync(RES, 'utf-8')) : {};
  r[cp] = { status, obs };
  fs.writeFileSync(RES, JSON.stringify(r, null, 1));
};
let nCap = 0;
const cap = (cp: string, slug: string) => {
  fs.mkdirSync('test-results/evidence', { recursive: true });
  const f = `test-results/evidence/${cp}-android-p${String(++nCap).padStart(2, '0')}-${slug}.png`;
  fs.writeFileSync(f, execSync('adb exec-out screencap -p', { maxBuffer: 20 * 1024 * 1024, timeout: 30000 }));
};
const teclado = () => /mInputShown=true/.test(execSync('adb shell dumpsys input_method', { timeout: 15000 }).toString());
const ocultarTeclado = async () => { if (teclado()) { execSync('adb shell input tap 564 1557', { timeout: 15000 }); await pausa(1200); } };

test.describe.configure({ timeout: 1800000 });
test.describe('B2C-125 — OTP al cambiar la tienda de retiro (Android)', () => {
  test('LOG · TC-B2C125-APP-018 y APP-020', async ({ screen, plataforma: p, testData }) => {
    const correo = token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
    const t1 = token(testData, 'TIENDA_RETIRO_001')!; // Unimarc Las Condes
    const t2 = token(testData, 'TIENDA_RETIRO_002')!; // Unimarc Los Trapenses
    await asegurarApp(screen);
    await sesion(screen, p, 'TC-B2C125-APP-018', correo, /Karl|Comprador/i);
    const nav = new NavBar(screen, p);
    const activo = async () => { await tol(() => screen.getByTestId('tab-Home').tap()); await pausa(3000); return ((await screen.getByTestId('delivery-open').getText().catch(() => '')) || '').replace(/\s+/g, ' ').trim(); };
    const volverHome = async () => { for (let i = 0; i < 4 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) { execSync('adb shell input keyevent 4', { timeout: 15000 }); await pausa(1500); } };
    const abrirRetiro = async () => {
      await volverHome();
      await tol(() => screen.getByTestId('tab-Home').tap()); await pausa(2500);
      await tol(() => nav.tapMetodoDeEntrega());
      const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
      await tol(() => modal.pestanaRetiro.tap()); await pausa(2500);
      return modal;
    };
    const confirmarTienda = async (nombre: string, busqueda: string) => {
      const modal = await abrirRetiro();
      const desde = new Date(Date.now() - 30000);
      await modal.elegirTienda(nombre, busqueda);
      return desde;
    };
    const aOtp = async () => { await tol(() => screen.getByText('Autenticación requerida').first().waitFor({ state: 'visible', timeout: 40000 })); };

    // Precondición: retiro activo en TIENDA_RETIRO_002.
    let hdr = await activo();
    if (!hdr.includes(t2.replace(/^Unimarc\s+/i, ''))) {
      const dPre = await confirmarTienda(t2, t2.replace(/^Unimarc\s+/i, ''));
      await aOtp();
      const cPre = await esperarCodigo('TC-B2C125-APP-018', correo, dPre);
      await ingresarCodigo(screen, cPre); await pausa(5000);
      hdr = await activo();
      guardar('PRECONDICION', 'info', `Retiro activo tras preparar la precondición: «${hdr}».`);
    }
    const antes = hdr;

    // ───────── APP-018 ─────────
    nCap = 0;
    const d18 = await confirmarTienda(t1, t1.replace(/^Unimarc\s+/i, ''));
    try {
      await aOtp(); await pausa(800);
      const tx = util(await textos(screen));
      cap('TC-B2C125-APP-018', 'modal-autenticacion-requerida');
      const toast = tx.some((x) => /c[oó]digo de verificaci[oó]n ha sido enviado/i.test(x));
      const enmascarado = tx.some((x) => /\*{2,}|•{2,}|@/.test(x));
      const campos = (await nodos(screen)).filter((n) => /EditText/.test(n.type)).length;
      let llego = true;
      try { await esperarCodigo('TC-B2C125-APP-018', correo, d18); } catch { llego = false; }
      guardar('TC-B2C125-APP-018', toast && enmascarado && llego ? 'Aprobado' : 'REVISAR',
        `Modal «Autenticación requerida» mostrado; toast de envío: ${toast}; correo enmascarado: ${enmascarado}; campos de ingreso: ${campos}; código recibido en el correo: ${llego}. Retiro activo antes: «${antes}». Textos: ${tx.slice(0, 16).join(' | ')}.`);
    } catch (e) { guardar('TC-B2C125-APP-018', 'ERROR', String(e).slice(0, 300)); }

    // ───────── APP-020 ─────────
    nCap = 0;
    try {
      // El modal del 018 sigue abierto: se cierra con «<».
      await ocultarTeclado();
      const cerrar = screen.getByRole('button', { name: /^(Cerrar|Volver|Atrás)/i }).first();
      if (await cerrar.isVisible().catch(() => false)) await tol(() => cerrar.tap()); else execSync('adb shell input tap 70 496', { timeout: 15000 });
      await pausa(3000);
      cap('TC-B2C125-APP-020', 'tras-cerrar-el-otp');
      const tx = util(await textos(screen));
      const sinModal = !tx.some((x) => /Autenticaci[oó]n requerida/.test(x));
      const enLocator = tx.some((x) => /Retiro en tienda|Confirmar tienda|Selecciona tu tienda/i.test(x));
      await volverHome();
      const despues = await activo();
      cap('TC-B2C125-APP-020', 'retiro-activo');
      const igual = despues === antes && !/Las Condes/i.test(despues);
      guardar('TC-B2C125-APP-020', sinModal && enLocator && igual ? 'Aprobado' : (sinModal && igual ? 'REVISAR' : 'Rechazado'),
        `Tras «<» del modal OTP: modal cerrado: ${sinModal}; Store Locator visible: ${enLocator}; retiro activo antes «${antes}» y después «${despues}». Textos: ${tx.slice(0, 14).join(' | ')}.`);
    } catch (e) { guardar('TC-B2C125-APP-020', 'ERROR', String(e).slice(0, 300)); }
  });
});
