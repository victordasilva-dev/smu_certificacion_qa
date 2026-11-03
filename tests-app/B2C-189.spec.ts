import * as fs from 'fs';
import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test } from './support/fixtures';
import { token } from '../tests/support/testData';
import { NavBar } from './pages/NavBar';
import { TabBar } from './pages/TabBar';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { DetalleDireccionScreen } from './pages/DetalleDireccionScreen';
import { tolerante } from './support/tolerante';
import { agregarDesdePdp } from './support/invitadoConCarro';
import { esperarCodigo, ingresarCodigo, nodos, sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/**
 * B2C-189 — Mis Envíos: cambio de dirección/tienda desde la tarjeta (app nativa, Android, v1.0.1).
 * Un veredicto por CP-ID en .qa/run/res189.json. Cada TC es independiente (try/catch).
 */
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const textos = async (screen: Screen) => (await nodos(screen)).map((n) => n.label).filter(Boolean);
const util = (t: string[]) => t.filter((x) => !/^Notificaci|Timbre|Modo|^$/.test(x));
const RES = '.qa/run/res189.json';
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
const sinTilde = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '');

test.describe.configure({ timeout: 3300000 });
test.describe('B2C-189 — Mis Envíos: cambio de dirección o tienda (Android)', () => {
  test('LOG · TC-B2C189-APP (001-018)', async ({ screen, plataforma: p, testData }) => {
    const correo = token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
    const base = token(testData, 'DIRECCION_DESPACHO_001')!;
    const otra = token(testData, 'DIRECCION_OTRA_TIENDA')!;
    const misma = token(testData, 'DIRECCION_MISMA_TIENDA')!;
    const t1 = token(testData, 'TIENDA_RETIRO_001')!;
    const t2 = token(testData, 'TIENDA_RETIRO_002')!;
    const skuA = token(testData, 'SKU_STOCK_SOLO_TIENDA_A')!;
    const unidades = Number(token(testData, 'UNIDADES_SOBRE_MINIMO') ?? 11);
    const corta = (t: string) => t.replace(/^Unimarc\s+/i, '');
    const num = (d: string) => d.match(/\d+/)![0];
    const pat = (d: string) => new RegExp(`${num(d)}.*${d.split(',').pop()!.trim()}`, 'i');
    const nav = new NavBar(screen, p);
    const tabs = new TabBar(screen, p);

    const volverHome = async () => { for (let i = 0; i < 5 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) { execSync('adb shell input keyevent 4', { timeout: 15000 }); await pausa(1500); } };
    const home = async () => { await volverHome(); await tol(() => screen.getByTestId('tab-Home').tap()); await pausa(2500); };
    const activo = async () => { await home(); return ((await screen.getByTestId('delivery-open').getText().catch(() => '')) || '').replace(/\s+/g, ' ').trim(); };

    /** Resuelve lo que aparezca tras confirmar un cambio: OTP, «Algunos productos podrían agotarse». */
    const resolver = async (cp: string, detenerEnAgotaron = false) => {
      const log: string[] = [];
      for (let i = 0; i < 10; i++) {
        const t = util(await textos(screen));
        if (t.some((x) => /Autenticaci[oó]n requerida/.test(x))) {
          log.push('OTP');
          const c = await esperarCodigo(cp, correo, new Date(Date.now() - 45000));
          await ocultarTeclado();
          await ingresarCodigo(screen, c); await pausa(5000);
        } else if (t.some((x) => /Algunos productos podr[ií]an agotarse/.test(x))) {
          log.push('aviso-agotarse');
          await tol(() => screen.getByRole('button', { name: 'Sí, continuar' }).tap()); await pausa(5000);
        } else if (t.some((x) => /Se agotaron/i.test(x))) { log.push('se-agotaron'); if (detenerEnAgotaron) break; await pausa(2000); break; }
        else if (i > 1) break;
        else await pausa(3000);
      }
      return log;
    };

    const limpiarCarro = async () => {
      await home();
      if (await tabs.floatingPill.isVisible().catch(() => false)) {
        await tol(() => tabs.tapFloatingPill()); await pausa(5000);
        for (let i = 0; i < 40; i++) {
          const b = screen.getByRole('button', { name: /^(eliminar( |$)|quitar una unidad)/i }).first();
          if (!(await b.isVisible().catch(() => false))) { if ((await textos(screen)).some((x) => /carro est[aá] vac[ií]o/i.test(x)) || i > 6) break; await pausa(2500); continue; }
          await tol(() => b.tap()).catch(() => {}); await pausa(2500);
        }
        await tol(() => screen.goBack()); await pausa(2000);
      }
    };
    const agregar = async (sku: string, unid = 1) => {
      await agregarDesdePdp(screen, p, sku).catch((e) => { if (!/no matching element/.test(String(e))) throw e; });
      await home();
      if (unid > 1) {
        await tol(() => tabs.tapFloatingPill()); await pausa(6000);
        for (let u = 1; u < unid; u++) { execSync('adb shell input tap 626 421', { timeout: 15000 }); await pausa(2000); }
        await pausa(2000); await tol(() => screen.goBack()); await pausa(2000);
      }
    };
    const aMisEnvios = async () => {
      await home();
      await tol(() => tabs.tapFloatingPill()); await pausa(6000);
      await tol(() => screen.getByText(/Continuar con la entrega/).first().tap()); await pausa(6000);
      if ((await textos(screen)).some((x) => /Que no se te olviden/i.test(x))) { await tol(() => screen.getByRole('button', { name: 'Continuar' }).first().tap()); await pausa(6000); }
      await tol(() => screen.getByText('Datos de entrega').first().waitFor({ state: 'visible', timeout: 30000 }));
    };
    const snap = async () => {
      execSync('adb shell input swipe 360 500 360 1100 400', { timeout: 15000 }); await pausa(1200);
      const t = util(await textos(screen));
      const i0 = t.indexOf('Datos de entrega');
      const rest = t.slice(i0 + 1);
      const fin = rest.findIndex((x) => /^Fecha|^Día/.test(x));
      const tarjeta = rest.slice(0, fin < 0 ? 4 : fin).filter((x) => !/^Cambiar$|^Volver$/.test(x)).join(' / ');
      return { tarjeta, dia: t.find((x) => /^Día seleccionado/.test(x)) ?? '', hor: t.find((x) => /^Horario seleccionado/.test(x)) ?? '', sub: t[t.indexOf('Subtotal') + 1] ?? '', todo: t };
    };
    const igual = (a: any, b: any) => a.tarjeta === b.tarjeta && a.dia === b.dia && a.hor === b.hor && a.sub === b.sub;
    const abrirCambiar = async () => {
      await tol(() => screen.getByText(/^Cambiar$/).first().tap()); await pausa(3500);
      return tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    };
    const cerrarModal = async () => { await ocultarTeclado(); await tol(() => new MetodoEntregaModal(screen, p).cerrar()); await pausa(3000); };
    const cambiarDireccion = async (cp: string, dir: string, detener = false) => {
      const modal = await abrirCambiar();
      await tol(() => modal.pestanaDespacho.tap()); await pausa(2000);
      await modal.elegirSugerencia(dir, pat(dir));
      const det = await tol(() => new DetalleDireccionScreen(screen, p).waitUntilReady());
      await tol(() => det.botonConfirmar.tap());
      return resolver(cp, detener);
    };
    const cambiarTienda = async (cp: string, tienda: string, detener = false) => {
      const modal = await abrirCambiar();
      await tol(() => modal.pestanaRetiro.tap()); await pausa(2000);
      await modal.elegirTienda(tienda, corta(tienda));
      return resolver(cp, detener);
    };
    /** Fija el despacho/retiro desde el navbar (preparación, sin veredicto). */
    const fijarRetiro = async (cp: string, tienda: string) => {
      await home(); await tol(() => nav.tapMetodoDeEntrega());
      const m = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
      await tol(() => m.pestanaRetiro.tap()); await pausa(2500);
      await m.elegirTienda(tienda, corta(tienda));
      return resolver(cp);
    };
    const fijarBase = async (cp: string) => {
      await home(); await tol(() => nav.tapMetodoDeEntrega());
      const m = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
      await tol(() => m.pestanaDespacho.tap()); await pausa(2500);
      const g = (await m.direccionesGuardadas()).find((x) => x.descripcion.includes(base.split(',')[0].trim()));
      if (!g) throw new Error('La dirección base no está entre las guardadas');
      await tol(() => m.elegirDireccionGuardada(g.etiqueta)); await pausa(5000);
      return resolver(cp);
    };
    const prep = async (nombre: string, fn: () => Promise<any>) => { try { const r = await fn(); guardar(`PREP:${nombre}`, 'info', JSON.stringify(r ?? '')); } catch (e) { guardar(`PREP:${nombre}`, 'error', String(e).slice(0, 250)); } };

    await asegurarApp(screen);
    await sesion(screen, p, 'TC-B2C189-APP-003', correo, /Karl|Comprador/i);

    const FASE = process.env.FASE_189 ?? 'todo';
    // ═════ Fase RETIRO: 003, 004, 006 ═════
    if (FASE === 'todo') {
    await prep('limpiar-carro', limpiarCarro);
    await prep('retiro-t1', () => fijarRetiro('TC-B2C189-APP-003', t1));
    await prep('armar-carro', () => agregar(token(testData, 'SKU_VALID_001')!, unidades));
    await prep('mis-envios-retiro', aMisEnvios);
    let s0: any = null;
    await verif('TC-B2C189-APP-003', async () => {
      s0 = await snap(); cap('TC-B2C189-APP-003', 'mis-envios-retiro');
      await abrirCambiar(); cap('TC-B2C189-APP-003', 'store-locator');
      const t = util(await textos(screen));
      const ok = t.some((x) => /Elige tu m[eé]todo de entrega/.test(x)) && t.some((x) => /Selecciona tu tienda/i.test(x));
      return [ok, `Tarjeta antes: «${s0.tarjeta}». Al tocar «Cambiar» se abrió: ${t.slice(0, 12).join(' | ')}.`];
    });
    await verif('TC-B2C189-APP-004', async () => {
      await cerrarModal(); cap('TC-B2C189-APP-004', 'tras-la-x');
      const s1 = await snap();
      return [igual(s0, s1), `Antes: ${s0.tarjeta} | ${s0.dia} | ${s0.hor} | ${s0.sub}. Después de la X: ${s1.tarjeta} | ${s1.dia} | ${s1.hor} | ${s1.sub}.`];
    });
    await verif('TC-B2C189-APP-006', async () => {
      const a = await snap(); const log = await cambiarTienda('TC-B2C189-APP-006', t2);
      await pausa(4000); cap('TC-B2C189-APP-006', 'mis-envios-nueva-tienda');
      const s1 = await snap();
      const ok = new RegExp(corta(t2), 'i').test(s1.tarjeta + ' ' + s1.todo.join(' ')) && s1.todo.includes('Datos de entrega');
      return [ok, `Flujo: ${log.join(' > ')}. Tarjeta antes «${a.tarjeta}» / ${a.hor}; después «${s1.tarjeta}» / ${s1.hor} / ${s1.sub}.`];
    });

    }
    if (FASE === 'todo' || FASE === 'despacho') {
    // ═════ Fase DESPACHO: 001, 002, 016, 005 ═════
    await prep('base', () => fijarBase('TC-B2C189-APP-001'));
    await prep('limpiar-carro-2', limpiarCarro);
    await prep('armar-carro-2', () => agregar(token(testData, 'SKU_VALID_001')!, unidades));
    await prep('mis-envios-despacho', aMisEnvios);
    let d0: any = null;
    await verif('TC-B2C189-APP-001', async () => {
      d0 = await snap(); cap('TC-B2C189-APP-001', 'mis-envios-despacho');
      await abrirCambiar(); cap('TC-B2C189-APP-001', 'store-locator-despacho');
      const t = util(await textos(screen));
      const ok = t.some((x) => /Elige tu m[eé]todo de entrega/.test(x)) && t.some((x) => /Direcci[oó]n de despacho|Direcciones guardadas|Calle, direcci[oó]n o lugar/.test(x));
      return [ok, `Tarjeta: «${d0.tarjeta}». Textos al tocar «Cambiar»: ${t.slice(0, 12).join(' | ')}.`];
    });
    await verif('TC-B2C189-APP-002', async () => {
      await cerrarModal(); cap('TC-B2C189-APP-002', 'tras-la-x');
      const s1 = await snap();
      return [igual(d0, s1), `Antes: ${d0.tarjeta} | ${d0.dia} | ${d0.hor} | ${d0.sub}. Después de la X: ${s1.tarjeta} | ${s1.dia} | ${s1.hor} | ${s1.sub}.`];
    });
    await verif('TC-B2C189-APP-016', async () => {
      const a = await snap();
      const m = await abrirCambiar(); await tol(() => m.pestanaDespacho.tap()); await pausa(1500);
      await m.buscar(otra); await pausa(3000); cap('TC-B2C189-APP-016', 'busqueda-sin-confirmar');
      await cerrarModal(); cap('TC-B2C189-APP-016', 'tras-la-x');
      const s1 = await snap();
      return [igual(a, s1), `Antes: ${a.tarjeta} | ${a.dia} | ${a.hor} | ${a.sub}. Con «${otra}» escrita sin confirmar y tras la X: ${s1.tarjeta} | ${s1.dia} | ${s1.hor} | ${s1.sub}.`];
    });
    await verif('TC-B2C189-APP-005', async () => {
      const a = await snap(); const log = await cambiarDireccion('TC-B2C189-APP-005', otra);
      await pausa(4000); cap('TC-B2C189-APP-005', 'mis-envios-nueva-direccion');
      const s1 = await snap();
      const ok = s1.todo.includes('Datos de entrega') && new RegExp(num(otra)).test(s1.tarjeta);
      return [ok, `Flujo: ${log.join(' > ')}. Tarjeta antes «${a.tarjeta}» / ${a.hor}; después «${s1.tarjeta}» / ${s1.hor} / ${s1.sub}.`];
    });

    }
    // ═════ Fase NO DISPONIBLES: 015, 007, 008 ═════
    await prep('base-2', () => fijarBase('TC-B2C189-APP-015'));
    await prep('limpiar-carro-3', limpiarCarro);
    await prep('armar-carro-3', () => agregar(token(testData, 'SKU_VALID_001')!, unidades));
    await prep('agregar-skuA', () => agregar(skuA, 1));
    await prep('mis-envios-2', aMisEnvios);
    let itemsAntes = 0;
    await verif('TC-B2C189-APP-015', async () => {
      const a = await snap(); const log = await cambiarDireccion('TC-B2C189-APP-015', misma);
      await pausa(4000); cap('TC-B2C189-APP-015', 'mis-envios-misma-tienda');
      const s1 = await snap();
      const sinModal = !s1.todo.some((x) => /Se agotaron|Algunos productos/i.test(x)) && log.every((x) => x === 'OTP');
      const ok = sinModal && s1.todo.includes('Datos de entrega') && new RegExp(num(misma)).test(s1.tarjeta);
      return [ok, `Flujo: ${log.join(' > ')}. Tarjeta antes «${a.tarjeta}» / ${a.hor}; después «${s1.tarjeta}» / ${s1.hor} / ${s1.sub}. Subtotal intacto: ${a.sub === s1.sub}.`];
    });
    await prep('base-3', () => fijarBase('TC-B2C189-APP-007'));
    await prep('limpiar-carro-4', limpiarCarro);
    await prep('armar-carro-4', () => agregar(token(testData, 'SKU_VALID_001')!, unidades));
    await prep('agregar-skuA-b', () => agregar(skuA, 1));
    await prep('mis-envios-3', aMisEnvios);
    let log7: string[] = [];
    await verif('TC-B2C189-APP-007', async () => {
      itemsAntes = (await screen.getByRole('button', { name: /^eliminar/i }).all().catch(() => [])).length;
      log7 = await cambiarDireccion('TC-B2C189-APP-007', otra, true);
      await pausa(3000); cap('TC-B2C189-APP-007', 'flujo-no-disponibles');
      const t = util(await textos(screen));
      const ok = t.some((x) => /Se agotaron/i.test(x));
      return [ok, `Flujo: ${log7.join(' > ')}. Textos: ${t.slice(0, 16).join(' | ')}.`];
    });
    await verif('TC-B2C189-APP-008', async () => {
      await tol(() => screen.getByRole('button', { name: /Entendido/i }).first().tap()); await pausa(6000);
      cap('TC-B2C189-APP-008', 'tras-entendido');
      const t = util(await textos(screen));
      const enCarro = t.some((x) => /Continuar con la entrega|Mi carro|Carro|Subtotal/i.test(x)) && !t.some((x) => /Datos de entrega/.test(x));
      return [enCarro, `Tras «Entendido»: ${t.slice(0, 18).join(' | ')}.`];
    });

    // ═════ 018: retiro con producto no disponible ═════
    await prep('retiro-t1-2', () => fijarRetiro('TC-B2C189-APP-018', t1));
    await prep('limpiar-carro-5', limpiarCarro);
    await prep('armar-carro-5', () => agregar(token(testData, 'SKU_VALID_001')!, unidades));
    await prep('agregar-skuA-2', () => agregar(skuA, 1));
    await prep('mis-envios-4', aMisEnvios);
    await verif('TC-B2C189-APP-018', async () => {
      const log = await cambiarTienda('TC-B2C189-APP-018', t2, true);
      await pausa(3000); cap('TC-B2C189-APP-018', 'flujo-no-disponibles');
      const t = util(await textos(screen));
      return [t.some((x) => /Se agotaron/i.test(x)), `Flujo: ${log.join(' > ')}. Textos: ${t.slice(0, 16).join(' | ')}.`];
    });
  });
});
