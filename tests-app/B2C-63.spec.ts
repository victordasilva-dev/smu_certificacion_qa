import * as fs from 'fs';
import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { HomeScreen } from './pages/HomeScreen';
import { PdpScreen } from './pages/PdpScreen';
import { tolerante } from './support/tolerante';
import { nodos } from './support/sesionOtp';
import { fijarDireccionInvitado } from './support/invitadoConCarro';
import { asegurarApp } from './support/appLista';

/**
 * B2C-63 — Toast y barra de progreso de la promo «Completa la promo» (app nativa, Android, v1.0.1).
 * Invitado con {DIRECCION_DESPACHO_001}. Un veredicto por CP-ID en .qa/run/res63.json.
 */
const r = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const RES = '.qa/run/res63.json';
const guardar = (cp: string, status: string, obs: string) => {
  const x = fs.existsSync(RES) ? JSON.parse(fs.readFileSync(RES, 'utf-8')) : {};
  x[cp] = { status, obs };
  fs.writeFileSync(RES, JSON.stringify(x, null, 1));
};
let nCap = 0;
const cap = (cp: string, slug: string) => {
  fs.mkdirSync('test-results/evidence', { recursive: true });
  const f = `test-results/evidence/${cp}-android-p${String(++nCap).padStart(2, '0')}-${slug}.png`;
  fs.writeFileSync(f, execSync('adb exec-out screencap -p', { maxBuffer: 20 * 1024 * 1024, timeout: 30000 }));
};
const verif = async (cp: string, fn: () => Promise<[boolean | null, string]>) => {
  if (process.env.SOLO_63 && !process.env.SOLO_63.split(',').includes(cp)) return;
  nCap = 0;
  try { const [ok, obs] = await fn(); guardar(cp, ok === null ? 'REVISAR' : ok ? 'Aprobado' : 'Rechazado', obs); }
  catch (e) { guardar(cp, 'ERROR', String(e).slice(0, 220) + ' @ ' + String((e as Error).stack ?? '').split('\n').filter((l) => /B2C-63\.spec/.test(l)).slice(0, 1).join('').slice(0, 120)); }
};

test.describe.configure({ timeout: 2400000 });
test.describe('B2C-63 — Toast de la promo Completa la promo (Android)', () => {
  test('GUEST · TC-B2C63-APP (001-018)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const sku2 = token(testData, 'SKU_COMPLETA_PROMO_2X1')!;
    const sku3 = token(testData, 'SKU_COMPLETA_PROMO_3X2')!;
    const home = new HomeScreen(screen, p);
    const pdp = new PdpScreen(screen, p);
    const FASE = process.env.FASE_63 ?? 'todo';

    const promo = async () => {
      const t = await r(() => pdp.textos());
      const toast = (t.find((x) => /agrega\s+\d+\s+y\s+ahorra|completaste la promo/i.test(x.t))?.t ?? '').replace(/\s+/g, ' ');
      const prog = t.find((x) => /^\d+ de \d+$/.test(x.t))?.t ?? '';
      return { toast, prog, textos: t.filter((x) => /agrega|ahorra|promo|\d+ de \d+|complet/i.test(x.t)).map((x) => x.t).slice(0, 8) };
    };
    /** Espera hasta que el toast case con `re` (o se agota) y devuelve lo observado. */
    const esperar = async (re: RegExp | null, ms = 12000) => {
      let s = await promo();
      for (let i = 0; i < ms / 700; i++) {
        if (re ? re.test(s.toast) : !s.toast) break;
        await pausa(700); s = await promo();
      }
      return s;
    };
    const buscar = async (sku: string) => {
      const tabs = await r(() => new TabBar(screen, p).waitUntilReady());
      await r(() => tabs.tapBuscar());
      const b = await r(() => new BuscarScreen(screen, p).waitUntilReady());
      const srp = await r(() => b.buscar(sku));
      await r(() => b.resultadoPara(sku).waitFor({ state: 'visible', timeout: 30000 }));
      await pausa(1500);
      return srp;
    };
    const agregar = async (sku: string) => { await r(() => home.botonAgregar(sku).tap()); };
    const sumar = async (sku: string) => { await r(() => home.botonSumar(sku).tap()); };
    const quitar = async (sku: string) => { await r(() => home.botonQuitar(sku).tap()); };

    await asegurarApp(screen);
    await fijarDireccionInvitado(screen, device, bundleId, p, testData);

    if (FASE === 'todo' || FASE === 'srp') {
      // ── Cadena sobre el shelf de los resultados (2x1): 001 → 002 → 009 → 015 → 016 → 008 → 011
      await buscar(sku2);
      await verif('TC-B2C63-APP-001', async () => {
        await agregar(sku2); const s = await esperar(/agrega 1 y ahorra m[aá]s/i); cap('TC-B2C63-APP-001', 'toast-1-de-2');
        return [/agrega 1 y ahorra m[aá]s/i.test(s.toast) && (!s.prog || /^1 de 2$/.test(s.prog)), `Tras «Agregar»: toast «${s.toast}», progreso «${s.prog || 'no expuesto por la accesibilidad'}». Textos: ${s.textos.join(' | ')}.`];
      });
      await verif('TC-B2C63-APP-002', async () => {
        await sumar(sku2); const s = await esperar(/completaste la promo/i); cap('TC-B2C63-APP-002', 'promo-completa');
        return [/completaste la promo/i.test(s.toast) && (!s.prog || /^2 de 2$/.test(s.prog)), `Con 2 unidades: toast «${s.toast}», progreso «${s.prog || 'no expuesto'}». Textos: ${s.textos.join(' | ')}.`];
      });
      await verif('TC-B2C63-APP-009', async () => {
        await sumar(sku2); const s = await esperar(/agrega 1 y ahorra m[aá]s/i); cap('TC-B2C63-APP-009', 'nuevo-tramo');
        return [/agrega 1 y ahorra m[aá]s/i.test(s.toast) && (!s.prog || /^1 de 2$/.test(s.prog)), `Con 3 unidades: toast «${s.toast}», progreso «${s.prog || 'no expuesto'}». Textos: ${s.textos.join(' | ')}.`];
      });
      await verif('TC-B2C63-APP-015', async () => {
        await sumar(sku2); const s = await esperar(/completaste la promo/i); cap('TC-B2C63-APP-015', 'segundo-ciclo');
        return [/completaste la promo/i.test(s.toast) && (!s.prog || /^2 de 2$/.test(s.prog)), `Con 4 unidades: toast «${s.toast}», progreso «${s.prog || 'no expuesto'}». Textos: ${s.textos.join(' | ')}.`];
      });
      await verif('TC-B2C63-APP-016', async () => {
        await quitar(sku2); const s = await esperar(/agrega 1 y ahorra m[aá]s/i); cap('TC-B2C63-APP-016', 'de-4-a-3');
        return [/agrega 1 y ahorra m[aá]s/i.test(s.toast) && (!s.prog || /^1 de 2$/.test(s.prog)), `De 4 a 3 unidades: toast «${s.toast}», progreso «${s.prog || 'no expuesto'}». Textos: ${s.textos.join(' | ')}.`];
      });
      await verif('TC-B2C63-APP-008', async () => {
        await quitar(sku2); await esperar(/completaste la promo/i, 6000);   // 3 → 2: promo completa
        await quitar(sku2); const s = await esperar(/agrega 1 y ahorra m[aá]s/i); cap('TC-B2C63-APP-008', 'quitar-tras-completar');
        return [/agrega 1 y ahorra m[aá]s/i.test(s.toast) && (!s.prog || /^1 de 2$/.test(s.prog)), `Tras quitar una unidad con la promo completa: toast «${s.toast}», progreso «${s.prog || 'no expuesto'}». (Se llegó a 2 unidades antes de quitar.)`];
      });
      await verif('TC-B2C63-APP-011', async () => {
        await quitar(sku2); const s = await esperar(null, 8000); await pausa(1500); cap('TC-B2C63-APP-011', 'producto-eliminado');
        const hayAgregar = await r(() => home.botonAgregar(sku2).isVisible().catch(() => false));
        return [!s.toast && !s.prog && hayAgregar, `Tras quitar hasta 0: toast «${s.toast}», progreso «${s.prog}», el shelf vuelve a «Agregar»: ${hayAgregar}.`];
      });

      // ── Cadena 3x2: 003 → 010
      await buscar(sku3);
      await verif('TC-B2C63-APP-003', async () => {
        await agregar(sku3); const a = await esperar(/agrega 2 y ahorra m[aá]s/i); cap('TC-B2C63-APP-003', 'agrega-2');
        await sumar(sku3); const b = await esperar(/agrega 1 y ahorra m[aá]s/i); cap('TC-B2C63-APP-003', 'agrega-1');
        await sumar(sku3); const c = await esperar(/completaste la promo/i); cap('TC-B2C63-APP-003', 'completa');
        return [/agrega 2 y ahorra/i.test(a.toast) && /agrega 1 y ahorra/i.test(b.toast) && /completaste/i.test(c.toast), `Secuencia: «${a.toast}» (${a.prog || 'sin barra expuesta'}) → «${b.toast}» (${b.prog || '-'}) → «${c.toast}» (${c.prog || '-'}).`];
      });
      await verif('TC-B2C63-APP-010', async () => {
        await quitar(sku3); const a = await esperar(/agrega 1 y ahorra m[aá]s/i, 6000);   // 3 → 2
        await quitar(sku3); const b = await esperar(/agrega 2 y ahorra m[aá]s/i); cap('TC-B2C63-APP-010', 'de-2-a-1');
        return [/agrega 1 y ahorra/i.test(a.toast) && /agrega 2 y ahorra/i.test(b.toast), `Con 2 unidades: «${a.toast}»; tras quitar a 1 unidad: «${b.toast}» (${b.prog || 'barra no expuesta'}).`];
      });
      await quitar(sku3).catch(() => undefined); await pausa(1500);
    }

    if (FASE === 'todo' || FASE === 'resto') {
      const sumarPdp = async () => { await r(() => screen.getByRole('button', { name: /agregar una unidad/i }).first().tap()); };
      const quitarPdp = async () => { await r(() => screen.getByRole('button', { name: /^quitar/i }).first().tap()); };
      const pdpDe = async (sku: string) => { const srp = await buscar(sku); await r(() => srp.tarjeta(sku).tap()); await r(() => pdp.waitUntilReady()); await pausa(1500); };
      const limpiar = async () => { for (let i = 0; i < 6; i++) { const q = screen.getByRole('button', { name: /^quitar/i }).first(); if (!(await q.isVisible().catch(() => false))) break; await r(() => q.tap()).catch(() => undefined); await pausa(1200); } };
      const toastRe = /agrega \d+ y ahorra|completaste la promo/i;

      // ── PDP: 004 y 013
      await pdpDe(sku2);
      await verif('TC-B2C63-APP-004', async () => {
        await r(() => pdp.agregar.tap()); const s = await esperar(/agrega 1 y ahorra m[aá]s/i); cap('TC-B2C63-APP-004', 'pdp-tras-agregar');
        return [/agrega 1 y ahorra m[aá]s/i.test(s.toast) && (!s.prog || /^1 de 2$/.test(s.prog)), `En la PDP tras «Agregar»: toast «${s.toast}», progreso «${s.prog || 'no expuesto'}». Textos de promo: ${s.textos.join(' | ') || 'ninguno'}.`];
      });
      await verif('TC-B2C63-APP-013', async () => {
        await sumarPdp(); await esperar(/completaste la promo/i, 6000);
        await quitarPdp(); const s = await esperar(/agrega 1 y ahorra m[aá]s/i); cap('TC-B2C63-APP-013', 'pdp-tras-quitar');
        return [/agrega 1 y ahorra m[aá]s/i.test(s.toast) && (!s.prog || /^1 de 2$/.test(s.prog)), `En la PDP con 2 → 1 unidad: toast «${s.toast}», progreso «${s.prog || 'no expuesto'}». Textos de promo: ${s.textos.join(' | ') || 'ninguno'}.`];
      });
      await limpiar();

      // ── Modal «Combina la promo» desde los resultados: 005 y 012
      const nodosTxt = async () => (await nodos(screen)).map((n) => n.label).filter((x) => x && !/^Notificaci|^Timbre|^Modo No/.test(x));
      const tocarNodo = async (re: RegExp, tipo?: RegExp) => {
        const n = (await nodos(screen)).find((x) => re.test(x.label) && (!tipo || tipo.test(x.type)));
        if (!n) throw new Error(`no hay un nodo «${re}»`);
        execSync(`adb shell input tap ${Math.round(n.x + n.w / 2)} ${Math.round(n.y + n.h / 2)}`, { timeout: 15000 });
      };
      const estadoModal = async () => { const t = await nodosTxt(); return { toast: (t.find((x) => /agrega\s+\d+\s+y\s+ahorra|completaste la promo/i.test(x)) ?? '').replace(/\s+/g, ' '), cont: t.find((x) => /^\d+ \/ \d+ productos$/.test(x)) ?? '', textos: t.slice(0, 18) }; };
      let enModal = false;
      for (let i = 0; i < 4 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) { execSync('adb shell input keyevent 4', { timeout: 15000 }); await pausa(1500); }
      try {
        await buscar(sku2);
        await tocarNodo(/Combina la promo/i, /Button|ViewGroup/); await pausa(3500);
        enModal = (await nodosTxt()).some((x) => /productos$/.test(x)); cap('TC-B2C63-APP-005', 'modal-combina-la-promo');
      } catch (e) { guardar('PREP:modal', 'error', String(e).slice(0, 200) + ' | textos: ' + (await nodosTxt().catch(() => [])).slice(0, 14).join(' | ')); cap('TC-B2C63-APP-005', 'fallo-abrir-modal'); }
      await verif('TC-B2C63-APP-005', async () => {
        if (!enModal) return [null, 'No se pudo abrir el modal «Combina la promo» desde el shelf.'];
        await tocarNodo(/^Agregar$/, /ViewGroup/); await pausa(2500); const s = await estadoModal(); cap('TC-B2C63-APP-005', 'modal-tras-agregar'); fs.writeFileSync('.qa/probe63-modal2.txt', (await nodos(screen)).map((x) => `${x.type}|${x.id}|${x.label}|${x.x},${x.y},${x.w}x${x.h}`).join('\n'));
        return [/agrega 1 y ahorra m[aá]s/i.test(s.toast), `En el modal «Combina la promo» tras «Agregar»: toast «${s.toast || 'no se muestra'}»; contador «${s.cont}». Textos: ${s.textos.join(' | ')}.`];
      });
      await verif('TC-B2C63-APP-012', async () => {
        if (!enModal) return [null, 'No se pudo abrir el modal.'];
        if ((await nodosTxt()).some((x) => /^Agregar$/.test(x))) { await tocarNodo(/^Agregar$/, /ViewGroup/); await pausa(2500); }
        execSync('adb shell input tap 267 1078', { timeout: 15000 }); await pausa(2500); const a = await estadoModal(); cap('TC-B2C63-APP-012', 'modal-con-2-unidades');
        execSync('adb shell input tap 114 1078', { timeout: 15000 }); await pausa(2500); const s = await estadoModal(); cap('TC-B2C63-APP-012', 'modal-tras-quitar');
        return [/agrega 1 y ahorra m[aá]s/i.test(s.toast), `En el modal con 2 unidades: toast «${a.toast || 'no se muestra'}», contador «${a.cont}»; tras «−»: toast «${s.toast || 'no se muestra'}», contador «${s.cont}». Textos: ${s.textos.join(' | ')}.`];
      });
      execSync('adb shell input keyevent 4', { timeout: 15000 }); await pausa(1500); execSync('adb shell input keyevent 4', { timeout: 15000 }); await pausa(1500); await limpiar();

      // ── Carrusel del Home: 006, 014, 017, 018
      await r(() => screen.getByTestId('tab-Home').tap()); await pausa(3000);
      let enHome = false;
      try { await home.mostrarProducto(sku2); enHome = await r(() => home.botonAgregar(sku2).isVisible().catch(() => false)); } catch { enHome = false; }
      const sinCarrusel = 'El SKU de la promo no aparece en ningún carrusel del Home (precondición del TC: {SKU_COMPLETA_PROMO_2X1} en un carrusel).';
      await verif('TC-B2C63-APP-006', async () => {
        if (!enHome) return [null, sinCarrusel];
        await agregar(sku2); const s = await esperar(/agrega 1 y ahorra m[aá]s/i); cap('TC-B2C63-APP-006', 'home-tras-agregar');
        return [/agrega 1 y ahorra m[aá]s/i.test(s.toast) && (!s.prog || /^1 de 2$/.test(s.prog)), `En el carrusel del Home tras «Agregar»: toast «${s.toast}», progreso «${s.prog || 'no expuesto'}». Textos de promo: ${s.textos.join(' | ') || 'ninguno'}.`];
      });
      await verif('TC-B2C63-APP-014', async () => {
        if (!enHome) return [null, sinCarrusel];
        await sumar(sku2); await esperar(/completaste la promo/i, 6000);
        await quitar(sku2); const s = await esperar(/agrega 1 y ahorra m[aá]s/i); cap('TC-B2C63-APP-014', 'home-tras-quitar');
        return [/agrega 1 y ahorra m[aá]s/i.test(s.toast) && (!s.prog || /^1 de 2$/.test(s.prog)), `En el carrusel con 2 → 1 unidad: toast «${s.toast}», progreso «${s.prog || 'no expuesto'}». Textos de promo: ${s.textos.join(' | ') || 'ninguno'}.`];
      });
      // 017: el progreso del Home (1 unidad) se mantiene en la PDP y al sumar se completa
      await verif('TC-B2C63-APP-017', async () => {
        if (!enHome) return [null, sinCarrusel];
        await pdpDe(sku2); const a = await promo(); cap('TC-B2C63-APP-017', 'pdp-con-1-unidad');
        await sumarPdp(); const b = await esperar(/completaste la promo/i); cap('TC-B2C63-APP-017', 'pdp-tras-sumar');
        return [/completaste la promo/i.test(b.toast) && (!a.prog || /^1 de 2$/.test(a.prog)), `PDP con 1 unidad (agregada desde el Home): toast «${a.toast}», progreso «${a.prog || 'no expuesto'}»; tras «+»: toast «${b.toast}».`];
      });
      // 018: 1 unidad desde el Home, luego la búsqueda conserva el progreso y al sumar se completa
      await verif('TC-B2C63-APP-018', async () => {
        if (!enHome) return [null, sinCarrusel];
        await quitarPdp().catch(() => undefined); await pausa(1500);
        const srp = await buscar(sku2); void srp; const a = await promo(); cap('TC-B2C63-APP-018', 'busqueda-con-1-unidad');
        await sumar(sku2); const b = await esperar(/completaste la promo/i); cap('TC-B2C63-APP-018', 'busqueda-tras-sumar');
        return [/completaste la promo/i.test(b.toast) && (!a.prog || /^1 de 2$/.test(a.prog)), `Resultados con 1 unidad: toast «${a.toast}», progreso «${a.prog || 'no expuesto'}»; tras «+»: toast «${b.toast}».`];
      });
      await limpiar(); void toastRe;
    }
  });
});
