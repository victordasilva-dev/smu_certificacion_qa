import * as fs from 'fs';
import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { tolerante } from './support/tolerante';
import { agregarDesdePdp, fijarDireccionInvitado } from './support/invitadoConCarro';
import { nodos, sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/**
 * B2C-147 — Página «Datos de entrega» (Mis Envíos) en la app nativa, Android, build v1.0.1.
 * Un veredicto por CP-ID en .qa/run/res147.json.
 */
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const textos = async (screen: Screen) => (await nodos(screen)).map((n) => n.label).filter(Boolean);
const RES = '.qa/run/res147.json';
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
const verif = async (cp: string, fn: () => Promise<[boolean, string]>) => {
  nCap = 0;
  try { const [ok, obs] = await fn(); guardar(cp, ok ? 'Aprobado' : 'Rechazado', obs); }
  catch (e) { guardar(cp, 'ERROR', String(e).slice(0, 300)); }
};
const util = (t: string[]) => t.filter((x) => !/^Notificaci|Timbre|Modo|^$/.test(x));

async function limpiarCarro(screen: Screen, p: any) {
  const tabs = new TabBar(screen, p);
  if (await tabs.floatingPill.isVisible().catch(() => false)) {
    await tol(() => tabs.tapFloatingPill());
    await pausa(5000);
    for (let i = 0; i < 40; i++) {
      const b = screen.getByRole('button', { name: /^(eliminar( |$)|quitar una unidad)/i }).first();
      if (!(await b.isVisible().catch(() => false))) { if ((await textos(screen)).some((x) => /carro est[aá] vac[ií]o/i.test(x)) || i > 6) break; await pausa(2500); continue; }
      await tol(() => b.tap()).catch(() => {});
      await pausa(2500);
    }
    await tol(() => screen.goBack());
    await pausa(2000);
  }
}
async function armarCarro(screen: Screen, p: any, testData: any) {
  const tabs = new TabBar(screen, p);
  await agregarDesdePdp(screen, p, token(testData, 'SKU_VALID_001')!).catch((e) => { if (!/no matching element/.test(String(e))) throw e; });
  for (let i = 0; i < 5 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) { await tol(() => screen.goBack()); await pausa(1500); }
  await tol(() => screen.getByTestId('tab-Home').tap());
  await pausa(3000);
  await tol(() => tabs.tapFloatingPill());
  await pausa(6000);
  for (let u = 1; u < Number(token(testData, 'UNIDADES_SOBRE_MINIMO') ?? 11); u++) { execSync('adb shell input tap 626 421', { timeout: 15000 }); await pausa(2000); }
  await pausa(3000);
}
/** «Continuar con la entrega» y, si aparece el modal de sugeridos, «Continuar». */
async function irADatosDeEntrega(screen: Screen) {
  await tol(() => screen.getByText(/Continuar con la entrega/).first().tap());
  await pausa(6000);
  if ((await textos(screen)).some((x) => /Que no se te olviden/i.test(x))) {
    await tol(() => screen.getByRole('button', { name: 'Continuar' }).first().tap());
    await pausa(6000);
  }
}

test.describe.configure({ timeout: 1500000 });
test.describe('B2C-147 — Datos de entrega (Android)', () => {
  test('LOG · TC-B2C147-APP-003/005/007 (cuenta logueada, despacho a domicilio)', async ({ screen, plataforma: p, testData }) => {
    const correo = token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
    await asegurarApp(screen);
    await sesion(screen, p, 'TC-B2C147-APP-003', correo, /Karl|Comprador/i);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
    await limpiarCarro(screen, p);
    await armarCarro(screen, p, testData);
    await irADatosDeEntrega(screen);
    const arriba = util(await textos(screen));
    fs.writeFileSync('.qa/probe147-arriba.txt', arriba.join('\n'));
    cap('TC-B2C147-APP-003', 'pagina-datos-de-entrega-arriba');
    execSync('adb shell input swipe 360 1100 360 500 400', { timeout: 15000 }); await pausa(1500);
    const abajo = util(await textos(screen));
    fs.writeFileSync('.qa/probe147-abajo.txt', abajo.join('\n'));
    cap('TC-B2C147-APP-003', 'pagina-datos-de-entrega-abajo');
    const todo = [...arriba, ...abajo].join(' | ');
    const falta = ['Datos de entrega', 'Fecha de entrega', 'Cuándo quieres recibir tu compra', 'horario de tu preferencia', 'Recibe alguien más', 'Ir a pagar', 'Subtotal'].filter((x) => !new RegExp(x, 'i').test(todo));
    await verif('TC-B2C147-APP-003', async () => [falta.length === 0, `Elementos ausentes: ${falta.join(', ') || 'ninguno'}. Textos: ${todo.slice(0, 700)}`]);
    await verif('TC-B2C147-APP-005', async () => [/Hoy/.test(todo), `Textos de la sección de fechas: ${arriba.filter((x) => /Hoy|Lun|Mar|Mié|Jue|Vie|Sáb|Dom|^\d{1,2}$/.test(x)).join(' | ')}`]);
    await verif('TC-B2C147-APP-007', async () => [/Env[ií]o Express/i.test(todo), `Envío Express presente: ${/Env[ií]o Express/i.test(todo)}. Horarios: ${todo.match(/\d{2}:\d{2} - \d{2}:\d{2} hrs[^|]*\|[^|]*/g)?.slice(0, 3).join(' ; ')}`]);
    // Qué direcciones/tiendas tiene guardadas la cuenta (para decidir 004, 009, 010 y 020)
    execSync('adb shell input swipe 360 500 360 1100 400', { timeout: 15000 }); await pausa(1500);
    await screen.getByText(/Cambiar/).first().tap().catch(() => {});
    await pausa(4000);
    cap('TC-B2C147-APP-004', 'modal-cambiar-direccion');
    fs.writeFileSync('.qa/probe147-cambiar.txt', util(await textos(screen)).join('\n'));
  });

  test('GUEST · TC-B2C147-APP-002 (invitado)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    await asegurarApp(screen);
    await fijarDireccionInvitado(screen, device, bundleId, p, testData);
    await armarCarro(screen, p, testData);
    await verif('TC-B2C147-APP-002', async () => {
      cap('TC-B2C147-APP-002', 'carro-del-invitado');
      await tol(() => screen.getByText(/Continuar con la entrega/).first().tap());
      await pausa(6000); cap('TC-B2C147-APP-002', 'tras-continuar-con-la-entrega');
      const t = util(await textos(screen));
      const login = t.some((x) => /Iniciar sesi[oó]n|Ingresa|correo|Bienvenid/i.test(x));
      const envios = t.some((x) => /Datos de entrega/i.test(x));
      return [login && !envios, `Textos tras «Continuar con la entrega»: ${t.slice(0, 18).join(' | ')}. Pantalla de inicio de sesión: ${login}; «Datos de entrega»: ${envios}.`];
    });
  });
});
