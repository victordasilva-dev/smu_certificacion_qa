import * as fs from 'fs';
import { execSync } from 'child_process';
import { test } from './support/fixtures';
import { token } from '../tests/support/testData';
import { NavBar } from './pages/NavBar';
import { TabBar } from './pages/TabBar';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { DetalleDireccionScreen } from './pages/DetalleDireccionScreen';
import { tolerante } from './support/tolerante';
import { fijarDireccionInvitado, agregarDesdePdp, esperarTabBar } from './support/invitadoConCarro';
import { borrarDatosApp } from './support/grabacionAndroid';
import { esperarCodigo, ingresarCodigo, nodos, sesion } from './support/sesionOtp';
import { MiCuentaScreen } from './pages/MiCuentaScreen';
import { asegurarApp } from './support/appLista';

/** B2C-144 — Navbar de entrega (app nativa, Android, v1.0.1). Fase de observación: lee el navbar por escenario. */
const r = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const RES = '.qa/run/res144.json';
const guardar = (cp: string, status: string, obs: string) => { const x = fs.existsSync(RES) ? JSON.parse(fs.readFileSync(RES, 'utf-8')) : {}; x[cp] = { status, obs }; fs.writeFileSync(RES, JSON.stringify(x, null, 1)); };
const verif = async (cp: string, fn: () => Promise<[boolean | null, string]>) => { if (process.env.SOLO_144 && !process.env.SOLO_144.split(',').includes(cp)) return; nCap = 0; try { const [ok, obs] = await fn(); guardar(cp, ok === null ? 'REVISAR' : ok ? 'Aprobado' : 'Rechazado', obs); } catch (e) { guardar(cp, 'ERROR', String(e).slice(0, 200) + ' @ ' + String((e as Error).stack ?? '').split('\n').filter((l) => /B2C-144\.spec/.test(l)).slice(0, 1).join('').slice(0, 110)); } };
let nCap = 0;
const cap = (cp: string, slug: string) => { fs.mkdirSync('test-results/evidence', { recursive: true }); fs.writeFileSync(`test-results/evidence/${cp}-android-p${String(++nCap).padStart(2, '0')}-${slug}.png`, execSync('adb exec-out screencap -p', { maxBuffer: 20 * 1024 * 1024, timeout: 30000 })); };

test.describe.configure({ timeout: 2400000 });
test.describe('B2C-144 — Navbar de entrega (Android)', () => {
  test('GUEST · TC-B2C144-APP (invitado)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    if (process.env.FASE_144 && process.env.FASE_144 !== 'inv') return;
    const base = token(testData, 'DIRECCION_DESPACHO_001')!; const calle = base.split(',')[0].trim();
    const nav = new NavBar(screen, p); const tabs = new TabBar(screen, p);
    const home = async () => { for (let i = 0; i < 4 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) { execSync('adb shell input keyevent 4', { timeout: 15000 }); await pausa(1500); } await r(() => screen.getByTestId('tab-Home').tap()); await pausa(3000); };
    const label = async () => { await pausa(1500); const ns = await nodos(screen); return (ns.find((n) => n.id === 'delivery-open')?.label ?? '').replace(/\s+/g, ' '); };
    const chip = (l: string) => (l.match(/(\$[\d.]+|Gratis|Despacho gratis)\s*$/)?.[1] ?? '');
    await asegurarApp(screen);
    await fijarDireccionInvitado(screen, device, bundleId, p, testData);

    await verif('TC-B2C144-APP-001', async () => {
      const l = await label(); cap('TC-B2C144-APP-001', 'navbar-tras-setear');
      const ok = l.includes(calle) && /Desde: .*\d{2}:\d{2}/.test(l) && !!chip(l);
      return [ok, `Tras fijar {DIRECCION_DESPACHO_001} el navbar muestra «${l}»: dirección ${l.includes(calle)}, próxima ventana ${/Desde:/.test(l)}, chip de precio «${chip(l)}».`];
    });
    await verif('TC-B2C144-APP-008', async () => {
      const antes = await label(); const vistos: string[] = [antes];
      for (const t of ['tab-Buscar', 'tab-Home', 'tab-Mis productos', 'tab-Home', 'tab-Mi cuenta', 'tab-Home']) { await r(() => screen.getByTestId(t).tap()); await pausa(2500); if (t === 'tab-Home') vistos.push(await label()); }
      cap('TC-B2C144-APP-008', 'navbar-tras-navegar');
      return [vistos.every((v) => v === antes), `Navbar al volver al Home tras navegar por Buscar, Mis productos y Mi cuenta: ${vistos.map((v) => `«${v}»`).join(' → ')}.`];
    });
    await verif('TC-B2C144-APP-002', async () => {
      const antes = await label();
      await device.terminateApp(bundleId); await device.launchApp(bundleId); await pausa(9000);
      for (let i = 0; i < 5 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) await pausa(3000);
      await r(() => screen.getByTestId('tab-Home').tap()); const despues = await label(); cap('TC-B2C144-APP-002', 'navbar-tras-reabrir');
      return [despues.includes(calle) && /Desde:/.test(despues), `Antes de cerrar y reabrir el app: «${antes}». Después (sin borrar datos): «${despues}».`];
    });
    await verif('TC-B2C144-APP-009', async () => {
      await home();
      const m = await r(() => tabs.tapCategorias()); await pausa(2500);
      fs.writeFileSync('.qa/probe144-categorias.txt', (await nodos(screen)).map((x) => `${x.type}|${x.id}|${x.label}|${x.x},${x.y},${x.w}x${x.h}`).join('\n')); cap('TC-B2C144-APP-009', 'menu-categorias');
      void m; { const n = (await nodos(screen)).find((x) => x.type === 'ViewGroup' && x.label === 'Carnes' && x.w > 600); if (!n) throw new Error('no se encontró el encabezado N1 «Carnes» en el menú'); execSync(`adb shell input tap ${Math.round(n.x + n.w / 2)} ${Math.round(n.y + n.h / 2)}`, { timeout: 15000 }); } await pausa(4500);
      const ns = await nodos(screen); const hayNavbar = ns.some((n) => n.id === 'delivery-open' && n.y < 300);
      const buscador = ns.some((n) => /buscar|search/i.test(`${n.id} ${n.label}`) && n.y < 320);
      cap('TC-B2C144-APP-009', 'plp-n1');
      return [!hayNavbar && buscador, `En la PLP de categoría N1: navbar de entrega visible: ${hayNavbar}; barra de búsqueda arriba: ${buscador}. Textos superiores: ${ns.filter((n) => n.y < 320 && n.label && !/^Notificaci|^Timbre|^Modo No/.test(n.label)).map((n) => n.label).slice(0, 8).join(' | ')}.`];
    });
    await verif('TC-B2C144-APP-010', async () => {
      await home(); const antes = await label();
      const dir = token(testData, 'DIRECCION_OTRA_TIENDA')!; const num = dir.match(/\d+/)![0];
      await r(() => nav.tapMetodoDeEntrega());
      const m = await r(() => new MetodoEntregaModal(screen, p).waitUntilReady());
      await r(() => m.pestanaDespacho.tap()); await pausa(2000);
      await m.elegirSugerencia(dir, new RegExp(`${num}.*${dir.split(',').pop()!.trim()}`, 'i'));
      const det = await r(() => new DetalleDireccionScreen(screen, p).waitUntilReady());
      await r(() => det.botonConfirmar.tap()); await pausa(2000);
      for (let i = 0; i < 6 && !(await label()).includes(num); i++) await pausa(3000);
      const despues = await label(); cap('TC-B2C144-APP-010', 'navbar-nueva-direccion');
      return [despues.includes(num) && /Desde:/.test(despues) && !!chip(despues), `Antes: «${antes}». Tras cambiar a {DIRECCION_OTRA_TIENDA}: «${despues}» (nueva dirección ${despues.includes(num)}, ventana ${/Desde:/.test(despues)}, chip «${chip(despues)}»).`];
    });
    await verif('TC-B2C144-APP-011', async () => {
      await home(); const t1 = token(testData, 'TIENDA_RETIRO_001')!;
      await r(() => nav.tapMetodoDeEntrega());
      const m = await r(() => new MetodoEntregaModal(screen, p).waitUntilReady());
      await r(() => m.pestanaRetiro.tap()); await pausa(2000);
      await m.elegirTienda(t1, t1.replace(/^Unimarc\s+/i, ''));
      await pausa(4000); const l = await label(); cap('TC-B2C144-APP-011', 'navbar-retiro');
      return [l.includes(t1.replace(/^Unimarc\s+/i, '')) && /Desde:/.test(l) && /Gratis/i.test(l), `Con retiro en {TIENDA_RETIRO_001} el navbar muestra «${l}». El color verde y la ausencia de ícono del chip se confirman en la captura.`];
    });
  });

  test('LOG · TC-B2C144-APP (cuenta Club)', async ({ screen, plataforma: p, testData }) => {
    if (['inv', 'diamante', 'nueva'].includes(process.env.FASE_144 ?? '')) return;
    const correo = token(testData, 'COMPRADOR_CLUB_USER')!.split('/')[0].trim();
    const base = token(testData, 'DIRECCION_DESPACHO_001')!; const calle = base.split(',')[0].trim();
    const umbral = Number(token(testData, 'UMBRAL_DESPACHO_GRATIS_CLUB') ?? 40000);
    const sku = token(testData, 'SKU_VALID_001')!;
    const nav = new NavBar(screen, p); const tabs = new TabBar(screen, p);
    const home = async () => { for (let i = 0; i < 5 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) { execSync('adb shell input keyevent 4', { timeout: 15000 }); await pausa(1500); } await r(() => screen.getByTestId('tab-Home').tap()); await pausa(3000); };
    const label = async () => { await pausa(1500); const ns = await nodos(screen); return (ns.find((n) => n.id === 'delivery-open')?.label ?? '').replace(/\s+/g, ' '); };
    const chip = (l: string) => (l.match(/(\$[\d.]+|Despacho gratis|Gratis)\s*$/)?.[1] ?? '');
    const ocultar = async () => { if (/mInputShown=true/.test(execSync('adb shell dumpsys input_method', { timeout: 15000 }).toString())) { execSync('adb shell input tap 564 1557', { timeout: 15000 }); await pausa(1000); } };
    const subtotal = async () => { const ns = await nodos(screen); const s = ns.find((n) => n.label === 'Subtotal'); const v = s ? ns.find((n) => /^\$[\d.]+$/.test(n.label) && Math.abs(n.y - s.y) < 40) : undefined; return v ? Number(v.label.replace(/\D/g, '')) : -1; };
    const abrirCarro = async () => {
      await home();
      for (let i = 0; i < 6 && !(await tabs.floatingPill.isVisible().catch(() => false)); i++) { await pausa(4000); if (i === 2) await home(); }
      try { await r(() => tabs.tapFloatingPill()); }
      catch (e) { const ns = await nodos(screen); fs.writeFileSync('.qa/probe144-carro.txt', ns.map((x) => `${x.type}|${x.id}|${x.label}|${x.x},${x.y},${x.w}x${x.h}`).join('\n')); cap('TC-B2C144-APP-DEBUG', 'sin-pill'); throw e; }
      await pausa(5000);
    };
    const limpiar = async () => {
      await home();
      if (await tabs.floatingPill.isVisible().catch(() => false)) {
        await r(() => tabs.tapFloatingPill()); await pausa(5000);
        for (let i = 0; i < 40; i++) { const b = screen.getByRole('button', { name: /^(eliminar( |$)|quitar una unidad)/i }).first(); if (!(await b.isVisible().catch(() => false))) { if (i > 4) break; await pausa(2000); continue; } await r(() => b.tap()).catch(() => {}); await pausa(2000); }
        await r(() => screen.goBack()); await pausa(2000);
      }
    };
    const resolverOtp = async (cp: string) => {
      for (let i = 0; i < 8; i++) {
        const t = (await nodos(screen)).map((n) => n.label);
        if (t.some((x) => /Autenticaci[oó]n requerida/.test(x))) { const c = await esperarCodigo(cp, correo, new Date(Date.now() - 45000)); await ocultar(); await ingresarCodigo(screen, c); await pausa(5000); }
        else if (t.some((x) => /Algunos productos podr[ií]an agotarse|No se te escapen/.test(x))) return 'aviso';
        else if (i > 1) return 'ok'; else await pausa(3000);
      }
      return 'ok';
    };
    const fijarBase = async () => {
      await home(); await r(() => nav.tapMetodoDeEntrega());
      const m = await r(() => new MetodoEntregaModal(screen, p).waitUntilReady());
      await r(() => m.pestanaDespacho.tap()); await pausa(2500);
      const g = (await m.direccionesGuardadas()).find((x) => x.descripcion.includes(calle));
      if (!g) throw new Error('la dirección base no está entre las guardadas');
      await r(() => m.elegirDireccionGuardada(g.etiqueta)); await pausa(4000); await resolverOtp('TC-B2C144-APP-003');
    };
    const prep = async (n: string, fn: () => Promise<unknown>) => { try { await fn(); } catch (e) { guardar(`PREP:${n}`, 'error', String(e).slice(0, 200)); } };

    await asegurarApp(screen);
    await sesion(screen, p, 'TC-B2C144-APP-012', correo, /Karl|Comprador/i);
    await prep('base', fijarBase);
    await prep('limpiar', limpiar);
    await prep('carro-1', () => agregarDesdePdp(screen, p, sku));

    await verif('TC-B2C144-APP-012', async () => {
      await home(); const l = await label(); cap('TC-B2C144-APP-012', 'chip-bajo-el-umbral');
      await abrirCarro(); const st = await subtotal(); cap('TC-B2C144-APP-012', 'carro');
      return [st > 0 && st < umbral && /^\$[\d.]+$/.test(chip(l)), `Cuenta Club con carro de ${st} (< ${umbral}): navbar «${l}», chip «${chip(l)}» en pesos. El color amarillo se confirma en la captura.`];
    });
    await verif('TC-B2C144-APP-013', async () => {
      await abrirCarro(); let st = await subtotal();
      for (let i = 0; i < 40 && st < umbral; i++) { execSync('adb shell input tap 626 421', { timeout: 15000 }); await pausa(1800); st = await subtotal(); }
      await home(); const l = await label(); cap('TC-B2C144-APP-013', 'chip-sobre-el-umbral');
      return [st > umbral && /Despacho gratis|Gratis/i.test(chip(l)), `Carro de ${st} (> ${umbral}): navbar «${l}», chip «${chip(l)}».`];
    });
    await verif('TC-B2C144-APP-014', async () => {
      const arriba = chip(await label());
      await abrirCarro(); let st = await subtotal();
      for (let i = 0; i < 40 && st >= umbral; i++) { await r(() => screen.getByRole('button', { name: /^quitar una unidad/i }).first().tap()).catch(() => undefined); await pausa(1800); st = await subtotal(); }
      await home(); const abajo = chip(await label()); cap('TC-B2C144-APP-014', 'chip-bajo-el-umbral');
      await abrirCarro(); let st2 = await subtotal();
      for (let i = 0; i < 40 && st2 < umbral; i++) { execSync('adb shell input tap 626 421', { timeout: 15000 }); await pausa(1800); st2 = await subtotal(); }
      await home(); const otraVez = chip(await label()); cap('TC-B2C144-APP-014', 'chip-sobre-el-umbral');
      return [/gratis/i.test(arriba) && /^\$[\d.]+$/.test(abajo) && /gratis/i.test(otraVez), `Sobre el umbral: «${arriba}»; tras quitar unidades (carro ${st}): «${abajo}»; al volver a superarlo (carro ${st2}): «${otraVez}». El navbar cambió sin cerrar ni reabrir el app.`];
    });
    await prep('limpiar-2', limpiar);
    await prep('carro-2', () => agregarDesdePdp(screen, p, sku));

    await verif('TC-B2C144-APP-034', async () => {
      const otra = token(testData, 'DIRECCION_OTRA_TIENDA')!; const num = otra.match(/\d+/)![0];
      await home(); const antes = await label();
      await r(() => nav.tapMetodoDeEntrega());
      const m = await r(() => new MetodoEntregaModal(screen, p).waitUntilReady());
      await r(() => m.pestanaDespacho.tap()); await pausa(2000);
      await m.elegirSugerencia(otra, new RegExp(`${num}.*${otra.split(',').pop()!.trim()}`, 'i'));
      const det = await r(() => new DetalleDireccionScreen(screen, p).waitUntilReady());
      await r(() => det.botonConfirmar.tap());
      let flujo = await resolverOtp('TC-B2C144-APP-034'); cap('TC-B2C144-APP-034', 'aviso-tienda-distinta');
      const t = (await nodos(screen)).map((n) => n.label);
      const aviso = t.find((x) => /Algunos productos podr[ií]an agotarse|No se te escapen/.test(x)) ?? '';
      if (aviso) await r(() => screen.getByRole('button', { name: 'No, gracias' }).tap());
      await pausa(4000); await home(); const despues = await label(); cap('TC-B2C144-APP-034', 'navbar-tras-cancelar');
      await abrirCarro(); const st = await subtotal(); cap('TC-B2C144-APP-034', 'carro-tras-cancelar'); await home();
      return [!!aviso && despues.includes(calle) && !despues.includes(num) && st > 0, `Aviso mostrado: «${aviso || 'ninguno'}» (flujo ${flujo}). Navbar antes «${antes}»; después de «No, gracias» «${despues}»; carro con subtotal ${st}.`];
    });

    // 003: cerrar sesión y volver a entrar con la misma cuenta
    await verif('TC-B2C144-APP-003', async () => {
      await prep('base-3', fijarBase); await home();
      await r(() => screen.getByTestId('tab-Mi cuenta').tap()); await pausa(3000);
      await r(() => new MiCuentaScreen(screen, p).cerrarSesion()); await pausa(4000);
      await sesion(screen, p, 'TC-B2C144-APP-003', correo, /Karl|Comprador/i);
      await home(); const l = await label(); cap('TC-B2C144-APP-003', 'navbar-tras-volver-a-entrar');
      return [l.includes(calle) && /Desde:/.test(l), `Tras cerrar sesión y volver a entrar con la misma cuenta el navbar muestra «${l}».`];
    });
    await prep('limpiar-3', limpiar);
  });

  test('LOG · TC-B2C144-APP-016 (cuenta Diamante)', async ({ screen, plataforma: p, testData }) => {
    if (['inv', 'club', 'nueva'].includes(process.env.FASE_144 ?? '')) return;
    const correo = token(testData, 'COMPRADOR_DIAMANTE_USER')!.split('/')[0].trim();
    const home = async () => { for (let i = 0; i < 5 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) { execSync('adb shell input keyevent 4', { timeout: 15000 }); await pausa(1500); } await r(() => screen.getByTestId('tab-Home').tap()); await pausa(3500); };
    await asegurarApp(screen);
    await sesion(screen, p, 'TC-B2C144-APP-016', correo, /^Hola, (?!Karl)/);
    await verif('TC-B2C144-APP-016', async () => {
      const base = token(testData, 'DIRECCION_DESPACHO_001')!; const calle = base.split(',')[0].trim();
      const leer = async () => { const ns = await nodos(screen); return (ns.find((n) => n.id === 'delivery-open')?.label ?? '').replace(/\s+/g, ' '); };
      await home(); let l = await leer();
      for (let i = 0; i < 10 && !/Desde:/.test(l); i++) { await pausa(4000); l = await leer(); }
      const inicial = l;
      let fijada = 'la dirección activa ya era la base';
      if (!l.includes(calle)) {
        const nav = new NavBar(screen, p);
        await r(() => nav.tapMetodoDeEntrega());
        const m = await r(() => new MetodoEntregaModal(screen, p).waitUntilReady());
        await r(() => m.pestanaDespacho.tap()); await pausa(2500);
        const g = (await m.direccionesGuardadas()).find((x) => x.descripcion.includes(calle));
        if (!g) { cap('TC-B2C144-APP-016', 'sin-direccion-base'); return [null, `La cuenta Diamante tiene activa «${inicial}» y no tiene guardada la dirección {DIRECCION_DESPACHO_001}; no se puede cumplir la precondición «Despacho a {DIRECCION_DESPACHO_001}».`]; }
        await r(() => m.elegirDireccionGuardada(g.etiqueta)); await pausa(4000);
        for (let i = 0; i < 8; i++) { const t = (await nodos(screen)).map((n) => n.label); if (t.some((x) => /Autenticaci[oó]n requerida/.test(x))) { const c = await esperarCodigo('TC-B2C144-APP-016', correo, new Date(Date.now() - 45000)); await ingresarCodigo(screen, c); await pausa(5000); } else if (i > 1) break; else await pausa(3000); }
        await home(); l = await leer(); for (let i = 0; i < 10 && !/Desde:/.test(l); i++) { await pausa(4000); l = await leer(); }
        fijada = 'se fijó la dirección base desde las guardadas';
      }
      cap('TC-B2C144-APP-016', 'navbar-diamante');
      return [/Gratis/i.test(l), `Cuenta Diamante (${fijada}): navbar «${l}». El color azul y el 💎 del chip se confirman en la captura.`];
    });
  });

  test('LOG · TC-B2C144-APP-026 y 042 (cuenta con direcciones)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    if (['inv', 'club', 'diamante'].includes(process.env.FASE_144 ?? '')) return;
    const correo = token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
    const base = token(testData, 'DIRECCION_DESPACHO_001')!; const calle = base.split(',')[0].trim();
    const sinNum = token(testData, 'DIRECCION_SIN_NUMERO')!; const [region, comuna, via] = sinNum.split(',').map((x) => x.trim());
    const nav = new NavBar(screen, p); const tabs = new TabBar(screen, p);
    const home = async () => { for (let i = 0; i < 5 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) { execSync('adb shell input keyevent 4', { timeout: 15000 }); await pausa(1500); } await r(() => screen.getByTestId('tab-Home').tap()); await pausa(3000); };
    const label = async () => { await pausa(1500); const ns = await nodos(screen); return (ns.find((n) => n.id === 'delivery-open')?.label ?? '').replace(/\s+/g, ' '); };
    const ocultar = async () => { if (/mInputShown=true/.test(execSync('adb shell dumpsys input_method', { timeout: 15000 }).toString())) { execSync('adb shell input tap 564 1557', { timeout: 15000 }); await pausa(1000); } };

    // 026: invitado sin dirección que inicia sesión carga la última dirección de la cuenta
    await verif('TC-B2C144-APP-026', async () => {
      await device.terminateApp(bundleId); borrarDatosApp(bundleId, process.env.ANDROID_SERIAL); await device.launchApp(bundleId); await esperarTabBar(tabs);
      const sinDir = await label(); cap('TC-B2C144-APP-026', 'invitado-sin-direccion');
      await sesion(screen, p, 'TC-B2C144-APP-026', correo, /Karl|Comprador/i);
      await home(); let l = await label(); for (let i = 0; i < 8 && !/Desde:/.test(l); i++) { await pausa(4000); l = await label(); }
      cap('TC-B2C144-APP-026', 'navbar-tras-iniciar-sesion');
      return [l.includes(calle) && /Desde:/.test(l), `Invitado sin dirección (navbar «${sinDir}») inicia sesión: el navbar muestra «${l}».`];
    });

    // 042: dirección manual sin numeración
    await verif('TC-B2C144-APP-042', async () => {
      await home(); await r(() => nav.tapMetodoDeEntrega());
      const m = await r(() => new MetodoEntregaModal(screen, p).waitUntilReady());
      await r(() => m.pestanaDespacho.tap()); await pausa(2000);
      await m.buscar(via.slice(0, 2)); await pausa(1500); await ocultar();
      const f = await r(() => m.tapAgregar()); await r(() => f.waitUntilReady());
      await f.abrirRegion(); await f.elegir(region); await pausa(1200);
      await f.abrirComuna(); await f.elegir(comuna); await pausa(1200);
      await f.escribirCalle(via); await ocultar(); cap('TC-B2C144-APP-042', 'formulario-sin-numeracion');
      await r(() => f.continuar.tap());
      const det = await r(() => new DetalleDireccionScreen(screen, p).waitUntilReady());
      await r(() => det.botonConfirmar.tap()); await pausa(3000);
      for (let i = 0; i < 8; i++) { const t = (await nodos(screen)).map((n) => n.label); if (t.some((x) => /Autenticaci[oó]n requerida/.test(x))) { const c = await esperarCodigo('TC-B2C144-APP-042', correo, new Date(Date.now() - 45000)); await ocultar(); await ingresarCodigo(screen, c); await pausa(5000); } else if (t.some((x) => /Algunos productos podr[ií]an agotarse/.test(x))) { await r(() => screen.getByRole('button', { name: 'No, gracias' }).tap()); await pausa(3000); } else if (i > 1) break; else await pausa(3000); }
      await home(); let l = await label(); for (let i = 0; i < 8 && !/Desde:/.test(l); i++) { await pausa(4000); l = await label(); }
      cap('TC-B2C144-APP-042', 'navbar-sin-numeracion');
      return [/S\/N/.test(l) && /Desde:/.test(l), `Dirección manual {DIRECCION_SIN_NUMERO} sin numeración: el navbar muestra «${l}».`];
    });
  });
});
