import * as fs from 'fs';
import { execSync } from 'child_process';
import { test } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { NavBar } from './pages/NavBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { PdpScreen } from './pages/PdpScreen';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { DetalleDireccionScreen } from './pages/DetalleDireccionScreen';
import { tolerante } from './support/tolerante';
import { fijarDireccionInvitado } from './support/invitadoConCarro';
import { nodos } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/**
 * B2C-51 (precios en la PDP y toasts) y B2C-122 (cambio de dirección con carro) — app nativa, Android,
 * v1.0.1. Cosecha en .qa/run/cosecha51.json (textos por estado + capturas); veredictos al leerla.
 */
const r = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const OUT = '.qa/run/cosecha51.json';
const guardar = (k: string, v: unknown) => { const x = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf-8')) : {}; x[k] = v; fs.writeFileSync(OUT, JSON.stringify(x, null, 1)); };
const cap = (cp: string, slug: string) => { fs.mkdirSync('test-results/evidence', { recursive: true }); fs.writeFileSync(`test-results/evidence/${cp}-android-${slug}.png`, execSync('adb exec-out screencap -p', { maxBuffer: 20 * 1024 * 1024, timeout: 30000 })); };
const FASE = () => process.env.FASE_51 ?? 'todo';

test.describe.configure({ timeout: 3000000 });
test.describe('B2C-51 y B2C-122 (Android)', () => {
  test('GUEST · TC-B2C51-APP y TC-B2C122-APP (cosecha)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const sku = (k: string) => token(testData, k)!;
    const tabs = new TabBar(screen, p); const pdp = new PdpScreen(screen, p); const nav = new NavBar(screen, p);
    const lim = (s: string) => s.replace(/\s+/g, ' ').trim();
    const ns = async () => (await nodos(screen)).filter((n) => n.label && !/^Notificaci|^Timbre|^Modo No/.test(n.label));
    const volverTabs = async () => { for (let i = 0; i < 5 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) { execSync('adb shell input keyevent 4', { timeout: 15000 }); await pausa(1500); } };
    const buscarSrp = async (s: string) => {
      await r(() => tabs.tapBuscar()); const b = await r(() => new BuscarScreen(screen, p).waitUntilReady());
      const srp = await r(() => b.buscar(s)); await r(() => b.resultadoPara(s).waitFor({ state: 'visible', timeout: 30000 })); await pausa(1500); return srp;
    };
    const abrirPdp = async (s: string) => { await volverTabs(); const srp = await buscarSrp(s); await r(() => srp.tarjeta(s).tap()); await r(() => pdp.waitUntilReady()); await pausa(2500); };
    const pdpTextos = async (pasos = 2) => { const v: string[] = []; for (let i = 0; i < pasos; i++) { for (const n of await ns()) { const x = lim(n.label); if (!v.includes(x)) v.push(x); } execSync('adb shell input swipe 360 1200 360 500 400', { timeout: 15000 }); await pausa(1200); } return v; };
    const tarjetaSrp = async (s: string) => { const todos = await ns(); const c = todos.find((n) => n.id === `product-${s}`); return c ? todos.filter((n) => n.x >= c.x - 2 && n.x <= c.x + c.w && n.y >= c.y - 2 && n.y <= c.y + c.h && n.id !== c.id).sort((a, b) => a.y - b.y || a.x - b.x).map((n) => `${lim(n.label)}@${n.y}`) : ['(tarjeta no encontrada)']; };

    await asegurarApp(screen);
    await fijarDireccionInvitado(screen, device, bundleId!, p, testData);

    if (FASE() === 'todo' || FASE() === '51') {
      for (const [cp, k] of [['TC-B2C51-APP-003', 'SKU_PROM_NxM'], ['TC-B2C51-APP-004', 'SKU_PROM_NxPRECIO'], ['TC-B2C51-APP-006', 'SKU_PRECIO_UNIPAY'], ['TC-B2C51-APP-007', 'SKU_PRECIO_BE'], ['TC-B2C51-APP-011', 'SKU_OFERTA_UNIPAY']] as const) {
        await abrirPdp(sku(k)); cap(cp, 'pdp'); guardar(`${cp}|pdp|${k}`, await pdpTextos(2));
        if (cp === 'TC-B2C51-APP-011') { await volverTabs(); const srp = await buscarSrp(sku(k)); void srp; cap(cp, 'shelf-srp'); guardar(`${cp}|shelf`, await tarjetaSrp(sku(k))); }
      }
      // 016: PDP de {SKU_PROM_NxM} sin «Combina la promo»
      await abrirPdp(sku('SKU_PROM_NxM')); guardar('TC-B2C51-APP-016|pdp', await pdpTextos(2)); cap('TC-B2C51-APP-016', 'pdp');
      // 013 y 014: toasts al sumar en la PDP
      await abrirPdp(sku('SKU_PROM_NxM'));
      await r(() => pdp.agregar.tap()); await pausa(3000); guardar('TC-B2C51-APP-013|tras-agregar', (await ns()).map((n) => lim(n.label)).filter((x) => /agrega|ahorra|promo|falta|complet|\d+ de \d+|un\b/i.test(x))); cap('TC-B2C51-APP-013', 'tras-agregar');
      await r(() => screen.getByRole('button', { name: /agregar una unidad/i }).first().tap()); await pausa(3000); guardar('TC-B2C51-APP-013|tras-mas', (await ns()).map((n) => lim(n.label)).filter((x) => /agrega|ahorra|promo|falta|complet|\d+ de \d+|un\b/i.test(x))); cap('TC-B2C51-APP-013', 'tras-mas');
      for (let i = 0; i < 3; i++) { await r(() => screen.getByRole('button', { name: /agregar una unidad/i }).first().tap()).catch(() => undefined); await pausa(2500); const t = (await ns()).map((n) => lim(n.label)).filter((x) => /agrega|ahorra|promo|falta|complet|\d+ de \d+|un\b/i.test(x)); guardar(`TC-B2C51-APP-014|mas-${i + 2}`, t); cap('TC-B2C51-APP-014', `mas-${i + 2}`); }
      // limpieza del carro
      await volverTabs(); await r(() => screen.getByTestId('tab-Home').tap()); await pausa(2500);
      if (await tabs.floatingPill.isVisible().catch(() => false)) { await r(() => tabs.tapFloatingPill()); await pausa(5000); for (let i = 0; i < 30; i++) { const b = screen.getByRole('button', { name: /^(eliminar( |$)|quitar )/i }).first(); if (!(await b.isVisible().catch(() => false))) { if (i > 3) break; await pausa(2000); continue; } await r(() => b.tap()).catch(() => undefined); await pausa(1800); } }
    }

    if (FASE() === 'todo' || FASE() === '122') {
      const base = token(testData, 'DIRECCION_DESPACHO_001')!; const calle = base.split(',')[0].trim();
      const cambiar = async (dir: string) => {
        await volverTabs(); await r(() => screen.getByTestId('tab-Home').tap()); await pausa(2500);
        await r(() => nav.tapMetodoDeEntrega()); const m = await r(() => new MetodoEntregaModal(screen, p).waitUntilReady());
        await r(() => m.pestanaDespacho.tap()); await pausa(2000);
        await m.elegirSugerencia(dir, new RegExp(`${dir.match(/\d+/)![0]}.*${dir.split(',').pop()!.trim()}`, 'i'));
        const det = await r(() => new DetalleDireccionScreen(screen, p).waitUntilReady()); await r(() => det.botonConfirmar.tap()); await pausa(3500);
      };
      const label = async () => { const x = (await nodos(screen)).find((n) => n.id === 'delivery-open'); return lim(x?.label ?? ''); };
      // carro con {SKU_VALID_001}
      await abrirPdp(sku('SKU_VALID_001')); await r(() => pdp.agregar.tap()); await pausa(2500);
      // 002: misma tienda abastecedora → sin modal
      await cambiar(sku('DIRECCION_MISMA_TIENDA'));
      const t2 = (await ns()).map((n) => lim(n.label)); cap('TC-B2C122-APP-002', 'tras-confirmar');
      guardar('TC-B2C122-APP-002|tras-confirmar', { modal: t2.filter((x) => /Algunos productos|agotarse|Sí, continuar|No, gracias/i.test(x)), textos: t2.slice(0, 14) });
      await volverTabs(); await r(() => screen.getByTestId('tab-Home').tap()); await pausa(3000); guardar('TC-B2C122-APP-002|navbar', await label());
      // 008: tienda distinta con un producto sin stock → flujo de no disponibles
      await abrirPdp(sku('SKU_STOCK_SOLO_TIENDA_A')); await r(() => pdp.agregar.tap()); await pausa(2500);
      await cambiar(base); await pausa(1500); void calle;
      await cambiar(sku('DIRECCION_OTRA_TIENDA'));
      const t8 = (await ns()).map((n) => lim(n.label)); cap('TC-B2C122-APP-008', 'aviso');
      guardar('TC-B2C122-APP-008|aviso', t8.slice(0, 16));
      if (t8.some((x) => /Algunos productos podr[ií]an agotarse/.test(x))) { await r(() => screen.getByRole('button', { name: 'Sí, continuar' }).tap()); await pausa(6000); const t8b = (await ns()).map((n) => lim(n.label)); cap('TC-B2C122-APP-008', 'tras-si-continuar'); guardar('TC-B2C122-APP-008|tras-si-continuar', t8b.slice(0, 16)); }
    }
  });
});
