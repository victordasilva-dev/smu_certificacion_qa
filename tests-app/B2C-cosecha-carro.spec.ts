import * as fs from 'fs';
import { execSync } from 'child_process';
import { test } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { PdpScreen } from './pages/PdpScreen';
import { tolerante } from './support/tolerante';
import { fijarDireccionInvitado } from './support/invitadoConCarro';
import { nodos } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/**
 * Cosecha del carro y de la PDP con carro (app nativa, Android, v1.0.1): B2C-31 (024, 025, 028, 029),
 * B2C-50 (Te faltan N) y B2C-44 (precios y subtotales). Registra los textos en cada estado en
 * .qa/run/cosecha.json y una captura por paso; los veredictos se deciden leyendo la cosecha.
 */
const r = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const OUT = '.qa/run/cosecha.json';
const guardar = (k: string, v: unknown) => { const x = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf-8')) : {}; x[k] = v; fs.writeFileSync(OUT, JSON.stringify(x, null, 1)); };
const cap = (cp: string, slug: string) => { fs.mkdirSync('test-results/evidence', { recursive: true }); fs.writeFileSync(`test-results/evidence/${cp}-android-${slug}.png`, execSync('adb exec-out screencap -p', { maxBuffer: 20 * 1024 * 1024, timeout: 30000 })); };
const FASE = () => process.env.FASE_COSECHA ?? 'todo';

test.describe.configure({ timeout: 3000000 });
test.describe('Cosecha de carro y PDP (Android)', () => {
  test('GUEST · TC-B2C31-APP, TC-B2C50-APP y TC-B2C44-APP (cosecha)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const sku = (k: string) => token(testData, k)!;
    const tabs = new TabBar(screen, p); const pdp = new PdpScreen(screen, p);
    const lim = (s: string) => s.replace(/\s+/g, ' ').trim();
    const ns = async () => (await nodos(screen)).filter((n) => n.label && !/^Notificaci|^Timbre|^Modo No/.test(n.label));
    const buscarSrp = async (s: string) => {
      await r(() => tabs.tapBuscar());
      const b = await r(() => new BuscarScreen(screen, p).waitUntilReady());
      const srp = await r(() => b.buscar(s));
      await r(() => b.resultadoPara(s).waitFor({ state: 'visible', timeout: 30000 }));
      await pausa(1500); return srp;
    };
    const volverTabs = async () => { for (let i = 0; i < 5 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) { execSync('adb shell input keyevent 4', { timeout: 15000 }); await pausa(1500); } };
    const agregarSku = async (s: string, veces = 1) => {
      await volverTabs(); const srp = await buscarSrp(s); await r(() => srp.tarjeta(s).tap()); await r(() => pdp.waitUntilReady()); await pausa(1500);
      await r(() => pdp.agregar.tap()); await pausa(2500);
      for (let i = 1; i < veces; i++) { await r(() => screen.getByRole('button', { name: /agregar una unidad/i }).first().tap()); await pausa(1800); }
    };
    const abrirCarro = async () => { await volverTabs(); await r(() => screen.getByTestId('tab-Home').tap()); await pausa(2500); for (let i = 0; i < 6 && !(await tabs.floatingPill.isVisible().catch(() => false)); i++) await pausa(3000); await r(() => tabs.tapFloatingPill()); await pausa(5000); };
    const vaciar = async () => {
      await volverTabs(); await r(() => screen.getByTestId('tab-Home').tap()); await pausa(2500);
      if (!(await tabs.floatingPill.isVisible().catch(() => false))) return;
      await r(() => tabs.tapFloatingPill()); await pausa(5000);
      for (let i = 0; i < 40; i++) { const b = screen.getByRole('button', { name: /^(eliminar( |$)|quitar )/i }).first(); if (!(await b.isVisible().catch(() => false))) { if (i > 3) break; await pausa(2000); continue; } await r(() => b.tap()).catch(() => undefined); await pausa(1800); }
      await volverTabs();
    };
    /** Textos del carro por ítem (dentro de `cart-item-<sku>`) + los de la tarjeta de subtotales. */
    const leerCarro = async (skus: string[]) => {
      const todos = await ns(); const out: Record<string, string[]> = {};
      for (const s of skus) {
        const c = todos.find((n) => n.id === `cart-item-${s}`);
        out[s] = c ? todos.filter((n) => n.y >= c.y - 2 && n.y <= c.y + c.h && n.id !== c.id).sort((a, b) => a.y - b.y || a.x - b.x).map((n) => `${n.label}@${n.x},${n.y}`) : ['(ítem no encontrado)'];
      }
      const i0 = todos.findIndex((n) => /^Subtotal/.test(n.label));
      out.subtotales = todos.filter((n) => /Subtotal|Unipay|^\$[\d.]+$|Total/.test(n.label)).map((n) => `${n.label}@${n.x},${n.y}`);
      out.todo = todos.map((n) => lim(n.label)).slice(0, 80); void i0;
      return out;
    };
    /** Toca el «+» del ítem (botón más a la derecha dentro de su tarjeta) o el «−» (el más a la izquierda). */
    const tocarEnItem = async (s: string, lado: 'mas' | 'menos') => {
      const todos = await nodos(screen); const c = todos.find((n) => n.id === `cart-item-${s}`); if (!c) throw new Error(`no está el ítem ${s} en el carro`);
      const bs = todos.filter((n) => n.type === 'Button' && n.y >= c.y && n.y <= c.y + c.h && n.x >= c.x).sort((a, b) => a.x - b.x);
      const b = lado === 'mas' ? bs[bs.length - 1] : bs[0]; if (!b) throw new Error('sin botones en el ítem');
      execSync(`adb shell input tap ${Math.round(b.x + b.w / 2)} ${Math.round(b.y + b.h / 2)}`, { timeout: 15000 }); await pausa(2200);
    };
    const paso = async (cp: string, clave: string, skus: string[]) => { const d = await leerCarro(skus); guardar(`${cp}|${clave}`, d); cap(cp, clave.replace(/\W+/g, '-')); return d; };

    await asegurarApp(screen);
    await fijarDireccionInvitado(screen, device, bundleId, p, testData);

    // ───────── B2C-31: PDP con carro (024, 025, 028, 029) ─────────
    if (FASE() === 'todo' || FASE() === '31') {
      await volverTabs(); const s1 = sku('SKU_VALID_001');
      const srp = await buscarSrp(s1); await r(() => srp.tarjeta(s1).tap()); await r(() => pdp.waitUntilReady()); await pausa(1500);
      const antes = (await ns()).map((n) => lim(n.label)).filter((x) => /Agregar|unidad|\$/.test(x)).slice(0, 14);
      await r(() => pdp.agregar.tap()); await pausa(3000);
      const t1 = (await ns()).map((n) => `${lim(n.label)}[${n.type}${n.id ? ':' + n.id : ''}]`).filter((x) => /unidad|Agregar|Quitar|\d un|\$|Eliminar/i.test(x)).slice(0, 20);
      guardar('TC-B2C31-APP-024|tras-agregar', { antes, despues: t1, pill: await tabs.textoDelPill().catch(() => '') }); cap('TC-B2C31-APP-024', 'pdp-tras-agregar');
      await r(() => screen.getByRole('button', { name: /agregar una unidad/i }).first().tap()); await pausa(2500);
      const t2 = (await ns()).map((n) => `${lim(n.label)}[${n.type}]`).filter((x) => /unidad|Agregar|Quitar|\d un|\$/i.test(x)).slice(0, 20);
      guardar('TC-B2C31-APP-025|tras-sumar', { despues: t2, pill: await tabs.textoDelPill().catch(() => '') }); cap('TC-B2C31-APP-025', 'pdp-tras-sumar');
      await vaciar();
      // 028: stock limitado
      const sl = sku('SKU_STOCK_LIMITADO'); await volverTabs(); const srp2 = await buscarSrp(sl); await r(() => srp2.tarjeta(sl).tap()); await r(() => pdp.waitUntilReady()); await pausa(1500);
      await r(() => pdp.agregar.tap()); await pausa(2500);
      const reg: string[] = [];
      for (let i = 0; i < 9; i++) {
        const mas = screen.getByRole('button', { name: /agregar una unidad/i }).first();
        const hab = await mas.isEnabled().catch(() => null); const cant = (await ns()).map((n) => lim(n.label)).find((x) => /^\d+ un\.?$|^\d+$/.test(x)) ?? '';
        reg.push(`unidad ${i + 1}: cantidad «${cant}», «+» habilitado=${hab}`);
        if (hab === false || hab === null) break; await r(() => mas.tap()); await pausa(2000);
      }
      guardar('TC-B2C31-APP-028|hasta-el-stock', reg); cap('TC-B2C31-APP-028', 'pdp-stock-limite');
      await vaciar();
      // 029: cartlimit
      const cl = sku('SKU_CAR_LIMIT'); await volverTabs(); const srp3 = await buscarSrp(cl); await r(() => srp3.tarjeta(cl).tap()); await r(() => pdp.waitUntilReady()); await pausa(1500);
      await r(() => pdp.agregar.tap()); await pausa(2500);
      const reg2: string[] = [];
      for (let i = 0; i < 25; i++) {
        const mas = screen.getByRole('button', { name: /agregar una unidad/i }).first();
        const hab = await mas.isEnabled().catch(() => null); const msg = (await ns()).map((n) => lim(n.label)).find((x) => /cantidad m[aá]xima/i.test(x)) ?? '';
        const cant = (await ns()).map((n) => lim(n.label)).find((x) => /^\d+ un\.?$|^\d+$/.test(x)) ?? '';
        reg2.push(`unidad ${i + 1}: cantidad «${cant}», «+» habilitado=${hab}${msg ? `, mensaje «${msg}»` : ''}`);
        if (hab === false || hab === null || msg) break; await r(() => mas.tap()); await pausa(1800);
      }
      guardar('TC-B2C31-APP-029|hasta-el-cartlimit', reg2); cap('TC-B2C31-APP-029', 'pdp-cartlimit');
      await vaciar();
    }

    // ───────── B2C-50: «Te faltan N para la promo» en el carro ─────────
    if (FASE() === 'todo' || FASE() === '50') {
      const s3 = sku('SKU_COMPLETA_PROMO_3X2'); const sv = sku('SKU_VALID_001');
      await agregarSku(s3, 1); await abrirCarro();
      await paso('TC-B2C50-APP-004', 'qty1-3x2', [s3]);
      await tocarEnItem(s3, 'mas'); await paso('TC-B2C50-APP-005', 'qty2-3x2', [s3]);
      await tocarEnItem(s3, 'mas'); await paso('TC-B2C50-APP-006', 'qty3-3x2', [s3]);
      await paso('TC-B2C50-APP-007', 'qty3-precio', [s3]);
      await tocarEnItem(s3, 'mas'); await paso('TC-B2C50-APP-009', 'qty4-3x2', [s3]);
      await vaciar();
      await agregarSku(s3, 1); await agregarSku(sv, 1); await abrirCarro();
      await paso('TC-B2C50-APP-012', 'antes-de-eliminar', [s3, sv]);
      try { await tocarEnItem(s3, 'menos'); } catch { /* se informa en la cosecha */ }
      await paso('TC-B2C50-APP-012', 'tras-eliminar', [s3, sv]);
      await vaciar();
      const sc = sku('SKU_COMBINA_PROMO');
      await agregarSku(sc, 1); await abrirCarro();
      await paso('TC-B2C50-APP-001', 'qty1-combina', [sc]);
      await tocarEnItem(sc, 'mas'); await tocarEnItem(sc, 'mas'); await paso('TC-B2C50-APP-008', 'qty3-combina', [sc]);
      await tocarEnItem(sc, 'mas'); await paso('TC-B2C50-APP-010', 'qty4-combina', [sc]);
      await vaciar();
    }

    // ───────── B2C-44: precios y subtotales en el carro ─────────
    if (FASE() === 'todo' || FASE() === '44') {
      for (const [cp, k] of [['TC-B2C44-APP-005', 'SKU_PROM_PCT_DESCUENTO'], ['TC-B2C44-APP-008', 'SKU_UNIPAY_001'], ['TC-B2C44-APP-009', 'SKU_PCT_Y_UNIPAY']] as const) {
        const s = sku(k); await agregarSku(s, 1); await abrirCarro(); await paso(cp, `item-${k}`, [s]); await vaciar();
      }
      // 012 usa el SKU pesable con % y Unipay (mismo SKU que el de 005)
      { const s = sku('SKU_PESABLE_PCT_Y_UNIPAY'); await agregarSku(s, 1); await abrirCarro(); await paso('TC-B2C44-APP-012', 'item-pesable', [s]); await vaciar(); }
      const su = sku('SKU_UNIPAY_001'); const sv = sku('SKU_VALID_001');
      await agregarSku(su, 1); await agregarSku(sv, 1); await abrirCarro();
      await paso('TC-B2C44-APP-013', 'subtotales-1-unipay', [su, sv]);
      await tocarEnItem(su, 'mas'); await paso('TC-B2C44-APP-014', 'subtotales-2-unipay', [su, sv]);
      await paso('TC-B2C44-APP-015', 'tras-aumentar', [su, sv]);
      await tocarEnItem(su, 'menos'); await tocarEnItem(su, 'menos');
      await paso('TC-B2C44-APP-017', 'tras-eliminar-unipay', [su, sv]);
      await vaciar();
    }
  });
});
