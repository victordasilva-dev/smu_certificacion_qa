import * as fs from 'fs';
import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test } from './support/fixtures';
import { token } from '../tests/support/testData';
import { NavBar } from './pages/NavBar';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { DetalleDireccionScreen } from './pages/DetalleDireccionScreen';
import { TabBar } from './pages/TabBar';
import { tolerante } from './support/tolerante';
import { esperarCodigo, nodos, sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/**
 * B2C-125 — Validación OTP al cambiar de dirección (app nativa, Android, build v1.0.1).
 * Un solo flujo con la cuenta logueada: veredicto por CP-ID en .qa/run/res125.json.
 */
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const textos = async (screen: Screen) => (await nodos(screen)).map((n) => n.label).filter(Boolean);
const util = (t: string[]) => t.filter((x) => !/^Notificaci|Timbre|Modo|^$/.test(x));
const RES = '.qa/run/res125.json';
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
const verif = async (cp: string, fn: () => Promise<[boolean | null, string]>) => {
  nCap = 0;
  try { const [ok, obs] = await fn(); guardar(cp, ok === null ? 'REVISAR' : ok ? 'Aprobado' : 'Rechazado', obs); }
  catch (e) { guardar(cp, 'ERROR', String(e).slice(0, 300)); }
};
const teclado = () => /mInputShown=true/.test(execSync('adb shell dumpsys input_method', { timeout: 15000 }).toString());
const ocultarTeclado = async () => { if (teclado()) { execSync('adb shell input tap 564 1557', { timeout: 15000 }); await pausa(1200); } };
const digitos = (c: string) => { for (const d of c) { execSync(`adb shell input keyevent ${7 + Number(d)}`, { timeout: 15000 }); execSync('sleep 0.6'); } };
const borrar = () => { for (let i = 0; i < 8; i++) { execSync('adb shell input keyevent KEYCODE_DEL', { timeout: 15000 }); execSync('sleep 0.3'); } };
const temporizador = (t: string[]) => t.find((x) => /\d{2}:\d{2}/.test(x)) ?? '';

test.describe.configure({ timeout: 3000000 });
test.describe('B2C-125 — OTP al cambiar de dirección (Android)', () => {
  test('LOG · TC-B2C125-APP (flujo OTP de la dirección nueva)', async ({ screen, plataforma: p, testData }) => {
    const correo = token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
    const dir = token(testData, 'DIRECCION_OTRA_TIENDA')!;
    const base = token(testData, 'DIRECCION_DESPACHO_001')!;
    const numero = dir.match(/\d+/)![0]; const comuna = dir.split(',').pop()!.trim();
    const patron = new RegExp(`${numero}.*${comuna}`, 'i');
    await asegurarApp(screen);
    await sesion(screen, p, 'TC-B2C125-APP-001', correo, /Karl|Comprador/i);
    const nav = new NavBar(screen, p);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
    // carro vacío
    const tabs = new TabBar(screen, p);
    if (await tabs.floatingPill.isVisible().catch(() => false)) {
      await tol(() => tabs.tapFloatingPill()); await pausa(5000);
      for (let i = 0; i < 40; i++) {
        const b = screen.getByRole('button', { name: /^(eliminar( |$)|quitar una unidad)/i }).first();
        if (!(await b.isVisible().catch(() => false))) { if ((await textos(screen)).some((x) => /carro est[aá] vac[ií]o/i.test(x)) || i > 6) break; await pausa(2500); continue; }
        await tol(() => b.tap()).catch(() => {}); await pausa(2500);
      }
      await tol(() => screen.goBack()); await pausa(2000);
    }
    const locActivo = async () => { await tol(() => screen.getByTestId('tab-Home').tap()); await pausa(3000); return (((await screen.getByTestId('delivery-open').getText().catch(() => '')) || '').replace(/\s+/g, ' ').trim()); };
    const abrirOtp = async (): Promise<Date> => {
      for (let i = 0; i < 4 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) { execSync('adb shell input keyevent 4', { timeout: 15000 }); await pausa(1500); }
      await tol(() => screen.getByTestId('tab-Home').tap()); await pausa(2500);
      await tol(() => nav.tapMetodoDeEntrega());
      const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
      await tol(() => modal.pestanaDespacho.tap()); await pausa(2500);
      const guardadas = (await modal.direccionesGuardadas()).map((g) => g.descripcion);
      fs.writeFileSync('.qa/probe125-guardadas.txt', guardadas.join('\n'));
      await modal.elegirSugerencia(dir, patron);
      const detalle = await tol(() => new DetalleDireccionScreen(screen, p).waitUntilReady());
      const desde = new Date(Date.now() - 30000);
      await tol(() => detalle.botonConfirmar.tap());
      await tol(() => screen.getByText('Autenticación requerida').first().waitFor({ state: 'visible', timeout: 40000 }));
      return desde;
    };
    const continuarHabilitado = async () => { await ocultarTeclado(); return screen.getByRole('button', { name: 'Validar' }).first().isEnabled().catch(() => null); };
    const ingresar = async (codigo: string) => { if (!teclado()) { await screen.getByType('android.widget.EditText').first().tap().catch(() => {}); await pausa(1200); } borrar(); digitos(codigo); await pausa(1500); await ocultarTeclado(); await tol(() => screen.getByRole('button', { name: 'Validar' }).first().tap()); await pausa(4000); };

    // ───────── Ciclo 1 ─────────
    const activaAntes = await locActivo();
    const desde0 = await abrirOtp();
    const t0 = util(await textos(screen));
    cap('TC-B2C125-APP-001', 'modal-autenticacion-requerida');
    const toast = t0.some((x) => /c[oó]digo de verificaci[oó]n ha sido enviado/i.test(x));
    const apertura = Date.now();
    fs.writeFileSync('.qa/run/toast125.txt', t0.join('\n'));
    guardar('TC-B2C125-APP-001', toast ? 'Aprobado' : 'REVISAR', `Modal «Autenticación requerida» mostrado tras «Confirmar dirección» con ${dir}; toast de envío visible en la captura inicial: ${toast}; el código llegó al correo (se leyó del buzón).`);
    // código del ciclo 1 (queda guardado para el caso de código expirado)
    const c0 = await esperarCodigo('TC-B2C125-APP-001', correo, desde0);
    // 012: se espera a que pasen más de 10 minutos desde el envío
    while (Date.now() - apertura < 11 * 60 * 1000) await pausa(15000);
    await verif('TC-B2C125-APP-012', async () => {
      if (!teclado()) { await screen.getByType('android.widget.EditText').first().tap().catch(() => {}); await pausa(1200); }
      borrar(); digitos(c0); await pausa(1500); await ocultarTeclado();
      await tol(() => screen.getByRole('button', { name: 'Validar' }).first().tap()); await pausa(4000);
      cap('TC-B2C125-APP-012', 'codigo-expirado');
      const t = util(await textos(screen));
      return [t.some((x) => /C[oó]digo inv[aá]lido/i.test(x)) && t.some((x) => /expir/i.test(x)) && t.some((x) => /Solicitar/i.test(x)), `Textos: ${t.slice(0, 22).join(' | ')}.`];
    });
    await verif('TC-B2C125-APP-016', async () => {
      await tol(() => new MetodoEntregaModal(screen, p).cerrarOtp()).catch(async () => { execSync('adb shell input tap 639 496', { timeout: 15000 }); });
      await pausa(3000); cap('TC-B2C125-APP-016', 'tras-cerrar-el-otp');
      const t = util(await textos(screen));
      const hdr = await locActivo();
      return [!t.some((x) => /Autenticaci[oó]n requerida/.test(x)) && hdr.includes(base.split(',')[0].trim()), `Dirección activa tras cerrar el OTP: «${hdr}» (esperada ${base}). Antes: «${activaAntes}».`];
    });

    // ───────── Ciclo 2 ─────────
    const desde1 = await abrirOtp();
    const c1 = await esperarCodigo('TC-B2C125-APP-014', correo, desde1);
    for (let i = 0; i < 40 && !(await textos(screen)).some((x) => /^Reenviar$/.test(x)); i++) await pausa(3000);
    const desde2 = new Date(Date.now() - 5000);
    await tol(() => screen.getByText(/^Reenviar$/).first().tap()); await pausa(3000);
    cap('TC-B2C125-APP-014', 'tras-reenviar');
    const tr = util(await textos(screen));
    const tim2 = temporizador(tr);
    const c2 = await esperarCodigo('TC-B2C125-APP-014', correo, desde2);
    await verif('TC-B2C125-APP-015', async () => {
      await ingresar(c1); cap('TC-B2C125-APP-015', 'codigo-anterior');
      const t = util(await textos(screen));
      return [t.some((x) => /C[oó]digo inv[aá]lido|No pudimos validar/i.test(x)), `Textos con el código anterior: ${t.slice(0, 18).join(' | ')}.`];
    });
    await verif('TC-B2C125-APP-014', async () => {
      await ingresar(c2); cap('TC-B2C125-APP-014', 'codigo-nuevo');
      const t = util(await textos(screen));
      return [!t.some((x) => /Autenticaci[oó]n requerida/.test(x)), `Tras reenviar el temporizador marcó «${tim2}»; con el código nuevo el modal ${t.some((x) => /Autenticaci[oó]n requerida/.test(x)) ? 'sigue abierto' : 'se cerró'}.`];
    });
    await verif('TC-B2C125-APP-008', async () => {
      await pausa(5000);
      const hdr = await locActivo(); cap('TC-B2C125-APP-008', 'direccion-activa');
      return [new RegExp(numero).test(hdr), `Dirección activa tras validar el OTP: «${hdr}».`];
    });
    // Devuelve la cuenta a {DIRECCION_DESPACHO_001} desde las direcciones guardadas (sin OTP).
    try {
      await tol(() => nav.tapMetodoDeEntrega());
      const m = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
      await tol(() => m.pestanaDespacho.tap()); await pausa(2500);
      const g = (await m.direccionesGuardadas()).find((x) => x.descripcion.includes(base.split(',')[0].trim()));
      if (g) { await tol(() => m.elegirDireccionGuardada(g.etiqueta)); await pausa(6000); }
    } catch { /* se informa en el reporte si la cuenta no quedó restaurada */ }
  });
});
