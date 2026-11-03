import * as fs from 'fs';
import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { tolerante } from './support/tolerante';
import { agregarDesdePdp } from './support/invitadoConCarro';
import { nodos, tiene, tocarEscalado, sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/**
 * B2C-41 — Modal de sugeridos «¡Que no se te olviden!» (app nativa, Android, build v1.0.1).
 */
const PLATAFORMA = 'Android' as const;
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const textos = async (screen: Screen) => (await nodos(screen)).map((n) => n.label).filter(Boolean);
const correoDe = (td: any, k: string) => token(td, k)!.split('/')[0].trim();

test.describe.configure({ timeout: 900000 });
test.describe(`B2C-41 — Modal de sugeridos (${PLATAFORMA})`, () => {
  /** Sesión de la cuenta, carro con {SKU_VALID_001} x N y el carro abierto. */
  async function carroListo(screen: Screen, p: any, cp: string, testData: any, cuentaToken: string, saludo: RegExp) {
    await asegurarApp(screen);
    await sesion(screen, p, cp, correoDe(testData, cuentaToken), saludo);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
    const tabs = new TabBar(screen, p);
    if (await tabs.floatingPill.isVisible().catch(() => false)) {
      await tol(() => tabs.tapFloatingPill());
      await pausa(5000);
      for (let i = 0; i < 40; i++) {
        const b = screen.getByRole('button', { name: /^(eliminar( |$)|quitar una unidad)/i }).first();
        if (!(await b.isVisible().catch(() => false))) { if (tiene(await nodos(screen), /carro est[aá] vac[ií]o/i) || i > 6) break; await pausa(2500); continue; }
        await tol(() => b.tap()).catch(() => {});
        await pausa(2500);
      }
      await tol(() => screen.goBack());
      await pausa(2000);
    }
    await agregarDesdePdp(screen, p, token(testData, 'SKU_VALID_001')!).catch((e) => { if (!/no matching element/.test(String(e))) throw e; });
    for (let i = 0; i < 5 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) { await tol(() => screen.goBack()); await pausa(1500); }
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
    await tol(() => tabs.tapFloatingPill());
    await pausa(6000);
    // «+» de la fila del producto en el carro (720x1600): sube la cantidad hasta superar el mínimo de compra.
    for (let u = 1; u < Number(token(testData, 'UNIDADES_SOBRE_MINIMO') ?? 11); u++) { execSync('adb shell input tap 626 421', { timeout: 15000 }); await pausa(2000); }
    await pausa(3000);
  }

  test(`TC-B2C41-APP-001 · Continuar con la entrega abre el modal de sugeridos cuando hay sugerencias [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C41-APP-001';
    await carroListo(screen, p, cp, testData, 'COMPRADOR_USUALS_FAVORITOS_USER', /Karl|Comprador/i);
    await tol(() => screen.getByText(/Continuar con la entrega/).first().tap());
    await pausa(6000);
    const t = await textos(screen);
    fs.writeFileSync('.qa/probe41-modal.txt', t.filter((x) => !/^Notificaci|Timbre|Modo/.test(x)).join('\n'));
    await expect(screen.getByText(/Que no se te olviden/i).first(), 'se muestra el modal «¡Que no se te olviden!»').toBeVisible({ timeout: 20000 });
  });

  // ── Verificación por cuenta: una sesión y un carro por cuenta, un veredicto por CP-ID (.qa/run/res41.json) ──
  const RES = '.qa/run/res41.json';
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
  const abrirModal = async (screen: Screen) => {
    await tol(() => screen.getByText(/Continuar con la entrega/).first().tap());
    await pausa(6000);
  };
  const pestanas = async (screen: Screen) => {
    const t = await textos(screen);
    return ['Imperdibles', 'Lo que más compro', 'Mis favoritos'].filter((x) => t.includes(x));
  };
  const cerrarModalYCarro = async (screen: Screen) => {
    for (let i = 0; i < 4; i++) { execSync('adb shell input keyevent 4', { timeout: 15000 }); await pausa(1500); }
  };
  const grupo = (titulo: string, cuenta: string, saludo: RegExp, cuerpo: (screen: Screen, p: any, td: any) => Promise<void>) =>
    test(titulo, async ({ screen, plataforma: p, testData }) => {
      try { await carroListo(screen, p, `TC-B2C41-APP-${titulo.slice(0, 3)}`, testData, cuenta, saludo); }
      catch (e) { cap(`TC-B2C41-APP-${titulo.slice(0, 3)}`, 'fallo-armando-el-carro'); throw e; }
      await cuerpo(screen, p, testData);
    });

  grupo('FAV · TC-B2C41-APP-003/006/008/012/009/010 (cuenta con My Usuals y favoritos)', 'COMPRADOR_USUALS_FAVORITOS_USER', /Karl|Comprador/i, async (screen) => {
    await abrirModal(screen);
    await verif('TC-B2C41-APP-003', async () => {
      const ps = await pestanas(screen); cap('TC-B2C41-APP-003', 'pestanas-del-modal');
      return [ps.length === 2 && ps[0] === 'Lo que más compro' && ps[1] === 'Mis favoritos', `Pestañas visibles en orden: ${ps.join(' → ')}.`];
    });
    await verif('TC-B2C41-APP-006', async () => {
      await tol(() => screen.getByText('Lo que más compro').first().tap()); await pausa(3000);
      cap('TC-B2C41-APP-006', 'lo-que-mas-compro');
      const n = await nodos(screen); const cards = n.filter((x) => /^\$[\d.]+,/.test(x.label) && x.w > 250);
      const cols = new Set(cards.map((c) => Math.round(c.x / 40))).size;
      const cont = n.find((x) => x.label === 'Continuar');
      return [cards.length >= 2 && cols === 2 && !!cont, `Cards visibles: ${cards.length}, columnas: ${cols}, botón «Continuar» ${cont ? 'visible' : 'ausente'} (y=${cont?.y}).`];
    });
    await verif('TC-B2C41-APP-012', async () => {
      const antes = (await nodos(screen)).find((x) => x.label === 'Continuar');
      for (let i = 0; i < 8; i++) { await screen.swipe('up').catch(() => {}); await pausa(900); }
      cap('TC-B2C41-APP-012', 'scroll-hasta-el-final');
      const desp = (await nodos(screen)).find((x) => x.label === 'Continuar');
      return [!!antes && !!desp && Math.abs(antes.y - desp.y) < 5, `«Continuar» antes del scroll y=${antes?.y}, después y=${desp?.y}.`];
    });
    await verif('TC-B2C41-APP-008', async () => {
      await tol(() => screen.getByText('Mis favoritos').first().tap()); await pausa(3000);
      cap('TC-B2C41-APP-008', 'mis-favoritos');
      const n = await nodos(screen); const cards = n.filter((x) => /^\$[\d.]+,/.test(x.label) && x.w > 250);
      const cols = new Set(cards.map((c) => Math.round(c.x / 40))).size;
      const cont = n.find((x) => x.label === 'Continuar');
      return [cards.length >= 1 && cols <= 2 && !!cont, `Cards visibles: ${cards.length}, columnas: ${cols}, botón «Continuar» ${cont ? 'visible' : 'ausente'}.`];
    });
    await verif('TC-B2C41-APP-009', async () => {
      const antes = (await textos(screen)).filter((x) => x === 'Agregar').length;
      await tol(() => screen.getByRole('button', { name: 'Agregar' }).first().tap()); await pausa(4000);
      cap('TC-B2C41-APP-009', 'tras-agregar-un-sugerido');
      const t = await textos(screen); const despues = t.filter((x) => x === 'Agregar').length;
      const abierto = t.some((x) => /Que no se te olviden/i.test(x));
      return [abierto && t.includes('Continuar') && despues < antes, `Botones «Agregar» antes: ${antes}, después: ${despues}; modal ${abierto ? 'sigue abierto' : 'se cerró'}. El contador del carro queda detrás del modal y no se pudo leer.`];
    });
    await verif('TC-B2C41-APP-010', async () => {
      await tol(() => screen.getByRole('button', { name: 'Continuar' }).first().tap()); await pausa(6000);
      cap('TC-B2C41-APP-010', 'tras-continuar');
      const t = await textos(screen);
      return [!t.some((x) => /Que no se te olviden/i.test(x)) && t.some((x) => /Mis Env[ií]os|Env[ií]o|Retiro/i.test(x)), `Pantalla tras «Continuar»: ${t.filter((x) => x.length < 40).slice(0, 12).join(' | ')}.`];
    });
  });

  const simple = (cp: string, cuenta: string, fn: (screen: Screen) => Promise<[boolean, string]>) =>
    grupo(`${cp.slice(-3)} · ${cp}`, cuenta, /^\b$/, async (screen) => { await abrirModal(screen); await verif(cp, () => fn(screen)); });

  simple('TC-B2C41-APP-002', 'COMPRADOR_SIN_SUGERENCIAS_USER', async (screen) => {
    cap('TC-B2C41-APP-002', 'tras-continuar-con-la-entrega');
    const t = await textos(screen); const modal = t.some((x) => /Que no se te olviden/i.test(x));
    return [!modal, `Modal «¡Que no se te olviden!» ${modal ? 'SE MUESTRA' : 'no se muestra'} (pestañas: ${(await pestanas(screen)).join(', ') || 'ninguna'}).`];
  });
  simple('TC-B2C41-APP-004', 'COMPRADOR_SOLO_USUALS_USER', async (screen) => {
    const ps = await pestanas(screen); cap('TC-B2C41-APP-004', 'pestanas-del-modal');
    return [ps.length === 1 && ps[0] === 'Lo que más compro', `Pestañas visibles: ${ps.join(', ') || 'ninguna'}.`];
  });
  simple('TC-B2C41-APP-005', 'COMPRADOR_SOLO_FAVORITOS_USER', async (screen) => {
    const ps = await pestanas(screen); cap('TC-B2C41-APP-005', 'pestanas-del-modal');
    return [ps.length === 1 && ps[0] === 'Mis favoritos', `Pestañas visibles: ${ps.join(', ') || 'ninguna'}.`];
  });
  simple('TC-B2C41-APP-007', 'COMPRADOR_USUALS_MAS_24_USER', async (screen) => {
    await tol(() => screen.getByText('Lo que más compro').first().tap()); await pausa(3000);
    const vistos = new Set<string>(); let sinNuevos = 0;
    for (let i = 0; i < 80 && sinNuevos < 4; i++) {
      const antes = vistos.size;
      (await nodos(screen)).filter((x) => /^\$[\d.]+,/.test(x.label) && x.w > 250).forEach((x) => vistos.add(x.label));
      sinNuevos = vistos.size === antes ? sinNuevos + 1 : 0;
      execSync('adb shell input swipe 360 1200 360 850 400', { timeout: 15000 }); await pausa(900);
    }
    cap('TC-B2C41-APP-007', 'final-de-lo-que-mas-compro');
    return [vistos.size === 24, `Productos distintos contados al recorrer «Lo que más compro» hasta el final: ${vistos.size}.`];
  });
});
