import * as fs from 'fs';
import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { tolerante } from './support/tolerante';
import { agregarDesdePdp, fijarDireccionInvitado, abrirCarro } from './support/invitadoConCarro';
import { nodos, sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/**
 * B2C-45 — Instrucciones (comentarios) por producto en el carro (app nativa, Android, build v1.0.1).
 * Una sesión y un carro; un veredicto por CP-ID en .qa/run/res45.json.
 */
const PLATAFORMA = 'Android' as const;
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const textos = async (screen: Screen) => (await nodos(screen)).map((n) => n.label).filter(Boolean);
const RES = '.qa/run/res45.json';
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
const ocultarTeclado = async () => {
  if (/mInputShown=true/.test(execSync('adb shell dumpsys input_method', { timeout: 15000 }).toString())) {
    execSync('adb shell input tap 564 1557', { timeout: 15000 });
    await pausa(1200);
  }
};
const resumen = (t: string[]) => t.filter((x) => !/^Notificaci|Timbre|Modo|^$/.test(x)).slice(0, 25).join(' | ');

test.describe.configure({ timeout: 1500000 });
test.describe(`B2C-45 — Instrucciones por producto (${PLATAFORMA})`, () => {
  test('LOG · TC-B2C45-APP-001/002/003/004/005/007/008/009/010/011 (cuenta logueada)', async ({ screen, plataforma: p, testData }) => {
    const T1 = token(testData, 'TEXTO_INSTRUCCION_001')!;
    const T2 = token(testData, 'TEXTO_INSTRUCCION_002')!;
    const TL = token(testData, 'TEXTO_INSTRUCCION_LARGO')!;
    const T151 = token(testData, 'TEXTO_151_CARACTERES')!;
    const correo = token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
    await asegurarApp(screen);
    await sesion(screen, p, 'TC-B2C45-APP-001', correo, /Karl|Comprador/i);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
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
    await agregarDesdePdp(screen, p, token(testData, 'SKU_VALID_001')!).catch((e) => { if (!/no matching element/.test(String(e))) throw e; });
    for (let i = 0; i < 5 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) { await tol(() => screen.goBack()); await pausa(1500); }
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
    await tol(() => tabs.tapFloatingPill());
    await pausa(6000);
    // cierra el aviso de monto mínimo si tapa la fila
    await screen.getByRole('button', { name: /cerrar/i }).first().tap().catch(() => {});

    const campo = () => screen.getByType('android.widget.EditText').first();
    const escribir = async (txt: string) => { await tol(() => campo().tap()); await pausa(800); await tol(() => campo().fill(txt)); await pausa(1500); };
    const sinModal = async () => !(await textos(screen)).some((x) => /algo en especial/i.test(x));

    await verif('TC-B2C45-APP-001', async () => {
      await tol(() => screen.getByText(/^Agregar instrucciones$/).first().tap()); await pausa(3000);
      cap('TC-B2C45-APP-001', 'modal-de-nuevo-comentario');
      const t = await textos(screen);
      const ok = t.some((x) => /algo en especial/i.test(x)) && t.some((x) => /^0\/150( caracteres)?$/.test(x));
      const agregar = await screen.getByRole('button', { name: 'Agregar' }).first().isEnabled().catch(() => null);
      fs.writeFileSync('.qa/probe45-modal.txt', t.join('\n'));
      return [ok && agregar === false, `Textos del modal: ${resumen(t)}. «Agregar» habilitado: ${agregar}.`];
    });
    await verif('TC-B2C45-APP-002', async () => {
      await escribir(T1); cap('TC-B2C45-APP-002', 'texto-escrito-y-contador');
      const t = await textos(screen);
      const agregar = await screen.getByRole('button', { name: 'Agregar' }).first().isEnabled().catch(() => null);
      return [t.some((x) => x.startsWith(`${T1.length}/150`)) && agregar === true, `Contador esperado ${T1.length}/150; contadores vistos: ${t.filter((x) => /^\d+\/150/.test(x)).join(', ') || 'ninguno'}; «Agregar» habilitado: ${agregar}.`];
    });
    await verif('TC-B2C45-APP-003', async () => {
      await escribir(T151); cap('TC-B2C45-APP-003', 'texto-de-151-caracteres');
      const t = await textos(screen);
      return [t.some((x) => x.startsWith('150/150')), `Texto de ${T151.length} caracteres; contadores vistos: ${t.filter((x) => /^\d+\/150/.test(x)).join(', ') || 'ninguno'}.`];
    });
    await verif('TC-B2C45-APP-004', async () => {
      await escribir(T1); await ocultarTeclado();
      await tol(() => screen.getByRole('button', { name: 'Agregar' }).first().tap());
      await pausa(1500); cap('TC-B2C45-APP-004', 'guardando');
      await pausa(2500); cap('TC-B2C45-APP-004', 'shelf-con-la-nota');
      const t = await textos(screen);
      const nota = t.find((x) => /^Nota:/.test(x));
      return [await sinModal() && !!nota && t.some((x) => /Editar instrucciones/.test(x)) && t.some((x) => /instrucci[oó]n fue agregada/i.test(x)), `Nota en el shelf: «${nota}»; toast visible: ${t.some((x) => /instrucci[oó]n fue agregada/i.test(x))}.`];
    });
    await pausa(5000);
    await verif('TC-B2C45-APP-007', async () => {
      await tol(() => screen.getByText(/Editar instrucciones/).first().tap()); await pausa(3000);
      cap('TC-B2C45-APP-007', 'modal-de-edicion');
      const t = await textos(screen);
      const campoTxt = await campo().getText().catch(() => '');
      return [campoTxt === T1 && t.some((x) => /Confirmar/.test(x)) && t.some((x) => /Eliminar comentario/.test(x)), `Campo precargado: «${campoTxt}»; contador: ${t.filter((x) => /^\d+\/150/.test(x)).join(', ')}; botones: ${t.filter((x) => /Confirmar|Eliminar comentario/.test(x)).join(', ')}.`];
    });
    await verif('TC-B2C45-APP-008', async () => {
      await escribir(T2); await ocultarTeclado();
      await tol(() => screen.getByRole('button', { name: 'Confirmar' }).first().tap());
      await pausa(1500); cap('TC-B2C45-APP-008', 'actualizando');
      await pausa(2500); cap('TC-B2C45-APP-008', 'shelf-con-la-nota-nueva');
      const t = await textos(screen); const nota = t.find((x) => /^Nota:/.test(x));
      return [await sinModal() && !!nota && !/Primera/.test(nota) && t.some((x) => /instrucci[oó]n fue agregada/i.test(x)), `Nota en el shelf: «${nota}»; toast visible: ${t.some((x) => /instrucci[oó]n fue agregada/i.test(x))}.`];
    });
    await pausa(5000);
    await tol(() => screen.getByText(/Editar instrucciones/).first().tap()); await pausa(3000);
    await verif('TC-B2C45-APP-009', async () => {
      await tol(() => screen.getByText(/Eliminar comentario/).first().tap()); await pausa(3000);
      cap('TC-B2C45-APP-009', 'modal-eliminar-comentario');
      const t = await textos(screen);
      return [t.some((x) => /Eliminar comentario/.test(x)) && t.some((x) => /Desea eliminar|Desea eliminar tu instrucci/i.test(x)) && t.some((x) => /S[ií], eliminar/.test(x)) && t.some((x) => /No, gracias/.test(x)), `Textos: ${resumen(t)}.`];
    });
    await verif('TC-B2C45-APP-011', async () => {
      await tol(() => screen.getByText(/No, gracias/).first().tap()); await pausa(3000);
      cap('TC-B2C45-APP-011', 'vuelta-al-modal-de-edicion');
      const campoTxt = await campo().getText().catch(() => '');
      return [campoTxt === T2, `Campo tras «No, gracias»: «${campoTxt}».`];
    });
    await verif('TC-B2C45-APP-010', async () => {
      await ocultarTeclado();
      await tol(() => screen.getByText(/Eliminar comentario/).first().tap()); await pausa(3000);
      await tol(() => screen.getByText(/S[ií], eliminar/).first().tap());
      await pausa(1500); cap('TC-B2C45-APP-010', 'eliminando');
      await pausa(2500); cap('TC-B2C45-APP-010', 'shelf-sin-nota');
      const t = await textos(screen);
      return [await sinModal() && !t.some((x) => /^Nota:/.test(x)) && t.some((x) => /^Agregar instrucciones$/.test(x)) && t.some((x) => /comentario se ha eliminado/i.test(x)), `Nota presente: ${t.some((x) => /^Nota:/.test(x))}; «Agregar instrucciones»: ${t.some((x) => /^Agregar instrucciones$/.test(x))}; toast: ${t.some((x) => /comentario se ha eliminado/i.test(x))}.`];
    });
    await pausa(5000);
    await verif('TC-B2C45-APP-005', async () => {
      await tol(() => screen.getByText(/^Agregar instrucciones$/).first().tap()); await pausa(3000);
      await escribir(TL); await ocultarTeclado();
      await tol(() => screen.getByRole('button', { name: 'Agregar' }).first().tap());
      await pausa(4000); cap('TC-B2C45-APP-005', 'shelf-con-nota-truncada');
      const nota = (await textos(screen)).find((x) => /^Nota:/.test(x)) ?? '';
      const esp = `Nota: ${TL.slice(0, 30)}…`;
      return [nota.replace(/\s+/g, ' ') === esp, `Nota en el shelf: «${nota}»; esperada «${esp}».`];
    });
  });

  test('GUEST · TC-B2C45-APP-006 (invitado)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const T1 = token(testData, 'TEXTO_INSTRUCCION_001')!;
    await asegurarApp(screen);
    await fijarDireccionInvitado(screen, device, bundleId!, p, testData);
    await agregarDesdePdp(screen, p, token(testData, 'SKU_VALID_001')!);
    await abrirCarro(screen, p);
    await pausa(3000);
    await verif('TC-B2C45-APP-006', async () => {
      await tol(() => screen.getByText(/^Agregar instrucciones$/).first().tap()); await pausa(3000);
      cap('TC-B2C45-APP-006', 'modal-de-nuevo-comentario-invitado');
      const campo = screen.getByType('android.widget.EditText').first();
      await tol(() => campo.tap()); await pausa(800); await tol(() => campo.fill(T1)); await pausa(1500);
      await ocultarTeclado();
      await tol(() => screen.getByRole('button', { name: 'Agregar' }).first().tap());
      await pausa(1500); cap('TC-B2C45-APP-006', 'guardando');
      const t = await textos(screen); const nota = t.find((x) => /^Nota:/.test(x));
      const toast = t.some((x) => /instrucci[oó]n fue agregada/i.test(x));
      await pausa(2500); cap('TC-B2C45-APP-006', 'shelf-con-la-nota');
      return [!!nota && t.some((x) => /Editar instrucciones/.test(x)) && toast, `Invitado: nota en el shelf «${nota}»; «Editar instrucciones» visible; toast de confirmación: ${toast}.`];
    });
  });
});
