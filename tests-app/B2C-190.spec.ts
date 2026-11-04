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
 * B2C-190 — Recibe alguien más: registro, edición y eliminación del tercero en Mis Envíos (app nativa, Android, v1.0.1).
 *
 * Las coordenadas fijas se escribieron sobre el Samsung SM-A075M (720x1600) y se escalan a la
 * pantalla en uso con `sx`/`sy` (corrida 2026-11-04 en el emulador Pixel_4_API_33, 1080x2280).
 * Un veredicto por CP-ID en .qa/run/res189.json. Cada TC es independiente (try/catch).
 */
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const textos = async (screen: Screen) => (await nodos(screen)).map((n) => n.label).filter(Boolean);
const util = (t: string[]) => t.filter((x) => !/^Notificaci|Timbre|Modo|^$/.test(x));
const RES = '.qa/run/res190.json';
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
  if (process.env.SOLO_190 && !process.env.SOLO_190.split(',').includes(cp)) return;
  nCap = 0;
  try { const [ok, obs] = await fn(); guardar(cp, ok === null ? 'REVISAR' : ok ? 'Aprobado' : 'Rechazado', obs); }
  catch (e) { guardar(cp, 'ERROR', String(e).slice(0, 200) + ' @ ' + String((e as Error).stack ?? '').split('\n').filter((l) => /B2C-190\.spec/.test(l)).slice(0, 2).join(' ; ').slice(0, 200)); }
};
const teclado = () => /mInputShown=true/.test(execSync('adb shell dumpsys input_method', { timeout: 15000 }).toString());
const [AW, AH] = (() => { const wm = execSync('adb shell wm size', { timeout: 15000 }).toString(); const m = /(\d+)x(\d+)/.exec(wm.split('Override size:').pop() ?? wm); return m ? [Number(m[1]), Number(m[2])] : [720, 1600]; })();
/** Coordenada pensada para 720x1600 (Samsung SM-A075M), escalada a la pantalla en uso. */
const sx = (x: number) => Math.round((x * AW) / 720);
const sy = (y: number) => Math.round((y * AH) / 1600);
const swipe = (x1: number, y1: number, x2: number, y2: number, ms: number) => execSync(`adb shell input swipe ${sx(x1)} ${sy(y1)} ${sx(x2)} ${sy(y2)} ${ms}`, { timeout: 15000 });
// BACK con el teclado abierto solo lo cierra; no depende de dónde dibuje cada equipo su barra de navegación.
const ocultarTeclado = async () => { if (teclado()) { execSync('adb shell input keyevent 4', { timeout: 15000 }); await pausa(1200); } };
const sinTilde = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '');

test.describe.configure({ timeout: 3300000 });
test.describe('B2C-190 — Recibe alguien más (Android)', () => {
  test('LOG · TC-B2C190-APP (001-022)', async ({ screen, plataforma: p, testData }) => {
    // APP-022 (fase `compra`) se corre con la cuenta OneClick que declara su fila; el resto, con {USER_AUTH_001}.
    const COMPRA = process.env.FASE_190 === 'compra';
    const correo = (COMPRA ? token(testData, 'COMPRADOR_ONECLICK_USER')! : token(testData, 'USER_AUTH_001')!.split('/')[0]).trim();
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
          // Tras el toque el botón pasa a un loader sin texto mientras el aviso sigue en pantalla: si en la
          // vuelta siguiente ya no está, el cambio está en curso y solo se espera.
          const si = screen.getByText('Sí, continuar').first();
          if (await si.isVisible().catch(() => false)) await tol(() => si.tap()).catch(() => undefined);
          await pausa(5000);
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
        for (let u = 1; u < unid; u++) { execSync(`adb shell input tap ${sx(626)} ${sy(421)}`, { timeout: 15000 }); await pausa(2000); }
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
      swipe(360, 500, 360, 1100, 400); await pausa(1200);
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
    const prep = async (nombre: string, fn: () => Promise<any>) => { try { const r = await fn(); guardar(`PREP:${nombre}`, 'info', JSON.stringify(r ?? '')); } catch (e) { guardar(`PREP:${nombre}`, 'error', String(e).slice(0, 250) + ' @ ' + String((e as Error).stack ?? '').split('\n').filter((l) => /tests-app/.test(l)).slice(0, 3).join(' ; ').slice(0, 300)); fs.writeFileSync(`.qa/run/prep190-${nombre}.png`, execSync('adb exec-out screencap -p', { maxBuffer: 20 * 1024 * 1024, timeout: 30000 })); } };

    const FASE = process.env.FASE_190 ?? 'todo';
    const D = (k: string) => token(testData, k)!;
    const rutOk = D('RUT_TERCERO'), nomOk = D('NOMBRE_TERCERO'), apeOk = D('APELLIDO_TERCERO');
    const tel8 = (t: string) => t.replace(/^569/, '');
    const telOk = tel8(D('TELEFONO_TERCERO'));
    const INV = /Ingrese un valor v[aá]lido/;
    const ID = { rut: 'receiver-input-rut', nom: 'receiver-input-firstName', ape: 'receiver-input-lastName', tel: 'receiver-input-phone' } as const;
    type Campo = keyof typeof ID;
    const nodoDe = async (id: string) => (await nodos(screen)).find((n) => n.id === id);
    const tocarCampo = async (c: Campo) => {
      await ocultarTeclado();
      let n = await nodoDe(ID[c]);
      for (let i = 0; i < 3 && !n; i++) { swipe(360, 900, 360, 500, 300); await pausa(800); n = await nodoDe(ID[c]); }
      if (!n) throw new Error(`campo ${c} fuera del árbol de accesibilidad`);
      execSync(`adb shell input tap ${Math.round(n.x + n.w / 2)} ${Math.round(n.y + n.h / 2)}`, { timeout: 15000 });
      await pausa(900);
    };
    const escribir = async (c: Campo, v: string) => {
      await tocarCampo(c);
      try { await screen.getByTestId(ID[c]).fill(v, { timeout: 6000 }); }
      catch { execSync(`adb shell input text '${v.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ /g, '%s').replace(/'/g, '')}'`, { timeout: 20000 }); }
      await pausa(600); await ocultarTeclado();
    };
    const llenar = async (v: Partial<Record<Campo, string>>) => { for (const c of ['rut', 'nom', 'ape', 'tel'] as Campo[]) if (v[c] !== undefined && v[c] !== '') await escribir(c, v[c]!); };
    const salir = async (desde: Campo) => { const sig: Campo = desde === 'tel' ? 'ape' : desde === 'ape' ? 'nom' : desde === 'nom' ? 'ape' : 'nom'; await tocarCampo(sig); await ocultarTeclado(); await pausa(800); };
    const abrirModal = async () => { for (let i = 0; i < 4 && !(await screen.getByText('¿Recibe alguien más?').first().isVisible().catch(() => false)); i++) { swipe(360, 1100, 360, 500, 400); await pausa(1200); } await tol(() => screen.getByText('¿Recibe alguien más?').first().tap()); await tol(() => screen.getByTestId(ID.rut).waitFor({ state: 'visible', timeout: 20000 })); await pausa(1000); };
    const cerrarTercero = async () => { await ocultarTeclado(); await tol(() => screen.getByRole('button', { name: 'Cerrar' }).first().tap()); await pausa(2500); };
    const valores = async () => { const ns = await nodos(screen); const g = (id: string) => ns.find((n) => n.id === id)?.label ?? ''; return { rut: g(ID.rut), nom: g(ID.nom), ape: g(ID.ape), tel: g(ID.tel) }; };
    const cta = async () => screen.getByTestId('receiver-submit').isEnabled().catch(() => null);
    /** Campos con «Ingrese un valor válido»: cada error se asigna al campo más cercano por encima de él. */
    const errores = async () => {
      const ns = await nodos(screen);
      const campos = (Object.keys(ID) as Campo[]).map((c) => ({ c, y: ns.find((n) => n.id === ID[c])?.y ?? -1 })).filter((x) => x.y >= 0).sort((a, b) => a.y - b.y);
      const nombre = { rut: 'RUT', nom: 'Nombre', ape: 'Apellido', tel: 'Teléfono' } as const;
      return ns.filter((n) => INV.test(n.label)).map((n) => { const f = campos.filter((x) => x.y < n.y).pop(); return f ? nombre[f.c] : '?'; });
    };
    const validacion = async (cp: string, campo: Campo, valores_: Partial<Record<Campo, string>>, esperaError: boolean, nota: string) =>
      verif(cp, async () => {
        await abrirModal();
        await llenar({ rut: rutOk, nom: nomOk, ape: apeOk, tel: telOk, ...valores_ });
        if (valores_[campo] === '') { await tocarCampo(campo); }
        await salir(campo); cap(cp, 'campo-invalido');
        const e = (await errores()); const c = await cta(); const v = await valores();
        await cerrarTercero();
        const nombreCampo = { rut: 'RUT', nom: 'Nombre', ape: 'Apellido', tel: 'Teléfono' }[campo];
        const ok = esperaError ? (e as string[]).includes(nombreCampo) && c === false : !e.length && c === true;
        return [ok, `${nota} Errores visibles bajo: ${e.join(', ') || 'ninguno'}. «Guardar datos de terceros» habilitado: ${c}. Valores en los campos: RUT «${v.rut}», Nombre «${v.nom}», Teléfono «${v.tel}».`];
      });

    await asegurarApp(screen);
    await sesion(screen, p, COMPRA ? 'TC-B2C190-APP-022' : 'TC-B2C190-APP-001', correo, COMPRA ? /Hola, (?!Karl)/ : /Karl|Comprador/i);
    if (process.env.SIN_PREP) { await prep('envios', aMisEnvios); }
    if (!process.env.SIN_PREP && !COMPRA) {
      await prep('base', () => fijarBase('TC-B2C190-APP-001'));
      await prep('limpiar', limpiarCarro);
      await prep('armar', () => agregar(D('SKU_VALID_001'), unidades));
      await prep('envios', aMisEnvios);
    }

    if (FASE === 'todo' || FASE === 'validaciones') {
      await verif('TC-B2C190-APP-001', async () => {
        swipe(360, 1100, 360, 500, 400); await pausa(1200);
        const op = screen.getByText('¿Recibe alguien más?').first();
        const vis = await op.isVisible().catch(() => false); cap('TC-B2C190-APP-001', 'opcion-recibe-alguien-mas');
        await op.tap(); await pausa(2500); const abre = await screen.getByTestId(ID.rut).isVisible().catch(() => false); cap('TC-B2C190-APP-001', 'modal-abierto'); await cerrarTercero();
        return [vis && abre, `Despacho a domicilio sin tercero: opción «¿Recibe alguien más?» visible: ${vis}; al tocarla abre el modal: ${abre}.`];
      });
      await verif('TC-B2C190-APP-003', async () => {
        await abrirModal(); cap('TC-B2C190-APP-003', 'modal');
        const ns = await nodos(screen); const t = ns.map((n) => n.label);
        const vals = await valores(); const habil = await cta();
        const checks = { titulo: t.some((x) => /^¿Recibe alguien más\?$/.test(x)), texto: t.some((x) => /Por tu seguridad, deber[aá]s completar todos los datos para validar la identidad de quien recibe/.test(x)), prefijo: t.includes('+569'), cerrar: ns.some((n) => n.label === 'Cerrar'), recibireYo: t.includes('Lo recibiré yo'), guardar: t.some((x) => /Guardar datos de tercero/.test(x)) };
        const faltan = Object.entries(checks).filter(([, v]) => !v).map(([k]) => k);
        await cerrarTercero();
        return [faltan.length === 0 && habil === false && !vals.rut && !vals.nom && !vals.ape && !vals.tel, `Elementos ausentes: ${faltan.join(', ') || 'ninguno'}. Campos vacíos: RUT «${vals.rut}», Nombre «${vals.nom}», Apellido «${vals.ape}», Teléfono «${vals.tel}». Guardar habilitado: ${habil}. Placeholder del RUT: no expuesto por la accesibilidad (ver captura). Etiqueta del CTA en el app: «Guardar datos de terceros».`];
      });
      await validacion('TC-B2C190-APP-012', 'rut', { rut: D('RUT_DV_INVALIDO') }, true, `RUT con DV inválido «${D('RUT_DV_INVALIDO')}».`);
      await validacion('TC-B2C190-APP-013', 'rut', { rut: D('RUT_SIN_FORMATO') }, true, `RUT sin puntos ni guion «${D('RUT_SIN_FORMATO')}».`);
      await validacion('TC-B2C190-APP-014', 'nom', { nom: '' }, true, 'Nombre vacío (se entra y se sale).');
      await validacion('TC-B2C190-APP-015', 'nom', { nom: D('NOMBRE_CON_NUMEROS') }, true, `Nombre con número «${D('NOMBRE_CON_NUMEROS')}».`);
      await validacion('TC-B2C190-APP-016', 'nom', { nom: D('NOMBRE_31_CARACTERES') }, true, `Nombre de 31 caracteres «${D('NOMBRE_31_CARACTERES')}».`);
      await validacion('TC-B2C190-APP-017', 'tel', { tel: tel8(D('TELEFONO_CORTO')) }, true, `Teléfono corto «${D('TELEFONO_CORTO')}» (se escribe «${tel8(D('TELEFONO_CORTO'))}» tras el +569 fijo).`);
      await validacion('TC-B2C190-APP-021', 'tel', { tel: '' }, true, 'Teléfono vacío (se entra y se sale).');
      await verif('TC-B2C190-APP-018', async () => {
        await abrirModal();
        await llenar({ nom: nomOk, ape: apeOk, tel: telOk, rut: D('RUT_DV_INVALIDO') }); await salir('rut'); cap('TC-B2C190-APP-018', 'error-visible');
        const e1 = (await errores());
        await escribir('rut', rutOk); await salir('rut'); cap('TC-B2C190-APP-018', 'corregido');
        const e2 = (await errores()); const c = await cta();
        await cerrarTercero();
        return [e1.includes('RUT') && e2.length === 0 && c === true, `Con DV inválido el error bajo RUT: ${e1.includes('RUT')}. Tras reemplazar por «${rutOk}» quedan errores: ${e2.join(', ') || 'ninguno'}; Guardar habilitado: ${c}.`];
      });
    }

    if (FASE === 'todo' || FASE === 'tercero') {
      let desde = new Date(); let codigo = '';
      await verif('TC-B2C190-APP-004', async () => {
        await abrirModal(); await llenar({ rut: rutOk, nom: nomOk, ape: apeOk, tel: telOk }); await ocultarTeclado();
        desde = new Date(Date.now() - 30000);
        await tol(() => screen.getByTestId('receiver-submit').tap());
        await tol(() => screen.getByText('Autenticación requerida').first().waitFor({ state: 'visible', timeout: 40000 }));
        cap('TC-B2C190-APP-004', 'modal-otp');
        const t = util(await textos(screen));
        let llego = true; try { codigo = await esperarCodigo('TC-B2C190-APP-004', correo, desde); } catch { llego = false; }
        return [llego && t.some((x) => /Autenticaci[oó]n requerida/.test(x)), `Tras «Guardar datos de terceros» el app abrió «Autenticación requerida» y el código llegó al correo del comprador: ${llego}. NO verificable desde la automatización: que el teléfono del tercero (${D('TELEFONO_TERCERO')}) no reciba SMS ni notificación (el número no es controlado por QA).`];
      });
      await verif('TC-B2C190-APP-005', async () => {
        await ocultarTeclado(); await ingresarCodigo(screen, codigo); await pausa(6000);
        const t = util(await textos(screen)); cap('TC-B2C190-APP-005', 'resumen-del-tercero');
        const resumen = t.some((x) => x.includes(nomOk)) && t.some((x) => x.includes(telOk)) && t.some((x) => /^Editar$/.test(x));
        const sinOpcion = !t.some((x) => /^¿Recibe alguien más\?$/.test(x));
        const toast = t.some((x) => /datos de quien recibir[aá] tu compra se guardaron correctamente/i.test(x));
        return [resumen && sinOpcion && toast, `Resumen con nombre y teléfono y «Editar»: ${resumen}; sin «¿Recibe alguien más?»: ${sinOpcion}; toast de guardado: ${toast}. Textos: ${t.slice(0, 24).join(' | ')}.`];
      });
      const abrirEditar = async () => { await tol(() => screen.getByText(/^Editar$/).first().tap()); await tol(() => screen.getByTestId(ID.rut).waitFor({ state: 'visible', timeout: 20000 })); await pausa(1200); };
      await verif('TC-B2C190-APP-007', async () => {
        await abrirEditar(); cap('TC-B2C190-APP-007', 'modal-edicion'); const v = await valores();
        const lim = (s: string) => s.replace(/[.\s]/g, '');
        const ok = lim(v.rut).includes(lim(rutOk).replace('-', '')) || lim(v.rut) === lim(rutOk);
        return [ok && v.nom === nomOk && v.ape === apeOk && v.tel.replace(/\D/g, '').endsWith(telOk), `Precargado: RUT «${v.rut}» (esperado ${rutOk}), Nombre «${v.nom}», Apellido «${v.ape}», Teléfono «${v.tel}» (esperado ${telOk} tras +569).`];
      });
      await verif('TC-B2C190-APP-019', async () => {
        await escribir('nom', D('NOMBRE_CON_NUMEROS')); await salir('nom'); cap('TC-B2C190-APP-019', 'nombre-invalido-en-edicion');
        const e = (await errores()); const c = await cta();
        return [e.includes('Nombre') && c === false, `En edición con Nombre «${D('NOMBRE_CON_NUMEROS')}»: error bajo: ${e.join(', ') || 'ninguno'}; Guardar habilitado: ${c}.`];
      });
      await verif('TC-B2C190-APP-008', async () => {
        await escribir('nom', D('NOMBRE_TERCERO_2')); await escribir('tel', tel8(D('TELEFONO_TERCERO_2'))); await ocultarTeclado();
        await tol(() => screen.getByTestId('receiver-submit').tap()); await pausa(2500);
        const pideOtp = (await textos(screen)).some((x) => /Autenticaci[oó]n requerida/.test(x));
        await pausa(4000); const t = util(await textos(screen)); cap('TC-B2C190-APP-008', 'tras-guardar-la-edicion');
        const ok = !pideOtp && t.some((x) => x.includes(D('NOMBRE_TERCERO_2'))) && t.some((x) => x.includes(tel8(D('TELEFONO_TERCERO_2'))));
        return [ok, `Se pidió OTP: ${pideOtp}. Mis Envíos muestra «${D('NOMBRE_TERCERO_2')}»: ${t.some((x) => x.includes(D('NOMBRE_TERCERO_2')))}; teléfono nuevo: ${t.some((x) => x.includes(tel8(D('TELEFONO_TERCERO_2'))))}.`];
      });
      await verif('TC-B2C190-APP-020', async () => {
        await volverHome(); await tol(() => screen.getByTestId('tab-Home').tap()); await pausa(2000);
        await aMisEnvios(); const t = util(await textos(screen)); cap('TC-B2C190-APP-020', 'mis-envios-de-vuelta');
        const ok = t.some((x) => x.includes(D('NOMBRE_TERCERO_2'))) && t.some((x) => /^Editar$/.test(x));
        return [ok, `Tras salir al Home y volver a Mis Envíos con «Continuar con la entrega»: resumen del tercero visible: ${ok}. Textos: ${t.slice(0, 22).join(' | ')}.`];
      });
      await verif('TC-B2C190-APP-010', async () => {
        await tol(() => screen.getByText(/^Editar$/).first().tap()); await tol(() => screen.getByTestId('receiver-self').waitFor({ state: 'visible', timeout: 20000 }));
        await tol(() => screen.getByTestId('receiver-self').tap()); await pausa(1500);
        const pideOtp = (await textos(screen)).some((x) => /Autenticaci[oó]n requerida/.test(x));
        await pausa(3500); const t = util(await textos(screen)); cap('TC-B2C190-APP-010', 'tras-lo-recibire-yo');
        const toast = t.some((x) => /Los datos fueron eliminados correctamente/i.test(x));
        const vuelve = t.some((x) => /^¿Recibe alguien más\?$/.test(x)) && !t.some((x) => /^Editar$/.test(x));
        return [!pideOtp && toast && vuelve, `Se pidió OTP: ${pideOtp}; toast de eliminación: ${toast}; vuelve «¿Recibe alguien más?» sin resumen: ${vuelve}.`];
      });
    }

    /**
     * Re-verificación de APP-005/APP-010 centrada en el toast, que dura ~4 s: la fase `tercero` lee la
     * pantalla 5-6 s después de la acción y llega tarde. Aquí se lee el árbol en bucle desde el toque.
     */
    if (FASE === 'toast') {
      const verToast = async (re: RegExp, ms = 9000) => {
        const t0 = Date.now();
        while (Date.now() - t0 < ms) { if ((await textos(screen)).some((x) => re.test(x))) return Date.now() - t0; }
        return -1;
      };
      await verif('TC-B2C190-APP-005', async () => {
        await abrirModal(); await llenar({ rut: rutOk, nom: nomOk, ape: apeOk, tel: telOk }); await ocultarTeclado();
        const desde = new Date(Date.now() - 30000);
        await tol(() => screen.getByTestId('receiver-submit').tap());
        await tol(() => screen.getByText('Autenticación requerida').first().waitFor({ state: 'visible', timeout: 40000 }));
        await ingresarCodigo(screen, await esperarCodigo('TC-B2C190-APP-005', correo, desde), 0);
        const ms = await verToast(/datos de quien recibir[aá] tu compra se guardaron correctamente/i); cap('TC-B2C190-APP-005', 'toast-guardado');
        await pausa(4000); const t = util(await textos(screen)); cap('TC-B2C190-APP-005', 'resumen-del-tercero');
        const resumen = t.some((x) => x.includes(nomOk)) && t.some((x) => x.includes(telOk)) && t.some((x) => /^Editar$/.test(x));
        const sinOpcion = !t.some((x) => /^¿Recibe alguien más\?$/.test(x));
        return [resumen && sinOpcion && ms >= 0, `Resumen con nombre y teléfono y «Editar»: ${resumen}; sin «¿Recibe alguien más?»: ${sinOpcion}; toast «Los datos de quien recibirá tu compra se guardaron correctamente.»: ${ms >= 0 ? `visto a los ${(ms / 1000).toFixed(1)} s de validar` : 'no apareció en 9 s'}.`];
      });
      await verif('TC-B2C190-APP-010', async () => {
        await tol(() => screen.getByText(/^Editar$/).first().tap()); await tol(() => screen.getByTestId('receiver-self').waitFor({ state: 'visible', timeout: 20000 }));
        await tol(() => screen.getByTestId('receiver-self').tap());
        const ms = await verToast(/Los datos fueron eliminados correctamente/i); cap('TC-B2C190-APP-010', 'toast-eliminado');
        const pideOtp = (await textos(screen)).some((x) => /Autenticaci[oó]n requerida/.test(x));
        await pausa(3000); const t = util(await textos(screen)); cap('TC-B2C190-APP-010', 'tras-lo-recibire-yo');
        const vuelve = t.some((x) => /^¿Recibe alguien más\?$/.test(x)) && !t.some((x) => /^Editar$/.test(x));
        return [!pideOtp && ms >= 0 && vuelve, `Se pidió OTP: ${pideOtp}; toast «Los datos fueron eliminados correctamente»: ${ms >= 0 ? `visto a los ${(ms / 1000).toFixed(1)} s de tocar «Lo recibiré yo»` : 'no apareció en 9 s'}; vuelve «¿Recibe alguien más?» sin resumen: ${vuelve}.`];
      });
    }

    /**
     * APP-022, primera parte: deja la cuenta OneClick en Mis Envíos con el tercero registrado y entra a
     * «Mi Pago». El pago se automatiza después de explorar esa pantalla.
     */
    if (COMPRA) {
      const cp = 'TC-B2C190-APP-022';
      await prep('compra-base', async () => {
        try { return await fijarBase(cp); } catch {
          await home(); await tol(() => nav.tapMetodoDeEntrega());
          const m = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
          await tol(() => m.pestanaDespacho.tap()); await pausa(2500);
          await m.elegirSugerencia(base, pat(base));
          const det = await tol(() => new DetalleDireccionScreen(screen, p).waitUntilReady());
          await tol(() => det.botonConfirmar.tap());
          return resolver(cp);
        }
      });
      await prep('compra-limpiar', limpiarCarro);
      await prep('compra-armar', () => agregar(D('SKU_VALID_001'), unidades));
      await prep('compra-envios', aMisEnvios);
      await prep('compra-tercero', async () => {
        await abrirModal(); await llenar({ rut: rutOk, nom: nomOk, ape: apeOk, tel: telOk }); await ocultarTeclado();
        const desde = new Date(Date.now() - 30000);
        await tol(() => screen.getByTestId('receiver-submit').tap());
        await tol(() => screen.getByText('Autenticación requerida').first().waitFor({ state: 'visible', timeout: 40000 }));
        await ingresarCodigo(screen, await esperarCodigo(cp, correo, desde));
        cap(cp, 'mis-envios-con-tercero');
        return util(await textos(screen)).filter((x) => x.includes(nomOk) || /^Editar$/.test(x));
      });
      await prep('compra-ir-a-pagar', async () => {
        await tol(() => screen.getByText('Ir a pagar').first().tap()); await pausa(9000);
        cap(cp, 'mi-pago');
        return util(await textos(screen)).slice(0, 60);
      });
    }

    // Al final porque cambia el método de entrega; deja el despacho base de vuelta para la siguiente corrida.
    if (FASE === 'todo' || FASE === 'retiro') {
      await prep('retiro', () => fijarRetiro('TC-B2C190-APP-002', t1));
      await verif('TC-B2C190-APP-002', async () => {
        await aMisEnvios();
        const t = util(await textos(screen));
        const enRetiro = t.some((x) => x.includes(corta(t1)));
        swipe(360, 1100, 360, 500, 400); await pausa(1200);
        const op = screen.getByText('¿Recibe alguien más?').first();
        const vis = await op.isVisible().catch(() => false); cap('TC-B2C190-APP-002', 'retiro-opcion-recibe-alguien-mas');
        let abre = false;
        if (vis) { await op.tap(); await pausa(2500); abre = await screen.getByTestId(ID.rut).isVisible().catch(() => false); cap('TC-B2C190-APP-002', 'modal-abierto'); await cerrarTercero(); }
        return [enRetiro && vis && abre, `Retiro en tienda ${t1} en Mis Envíos: ${enRetiro}; opción «¿Recibe alguien más?» visible: ${vis}; al tocarla abre el modal: ${abre}.`];
      });
      await prep('volver-a-base', () => fijarBase('TC-B2C190-APP-002'));
    }
  });
});
