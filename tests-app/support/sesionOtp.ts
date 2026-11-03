import * as fs from 'fs';
import { execSync } from 'child_process';
import { expect } from './fixtures';
import { TabBar } from '../pages/TabBar';
import { MiCuentaScreen } from '../pages/MiCuentaScreen';
import { tolerante } from './tolerante';

/**
 * Login de la app v1.0.1 por correo + código (OTP), compartido por los specs de app con [Logueado].
 *
 * El código se pide por archivo (`.qa/otp/pedidos`) y el agente lo deja en `.qa/otp/codigos`. Las
 * casillas aceptan los ceros solo al tocar las teclas del teclado numérico, así que se teclea por
 * `adb input tap` (coordenadas del Pixel 6, 1080x2400).
 */
const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const PAQUETE = 'cl.smu.unimarcapp.sfcc.qa';

export interface Nodo { type: string; id: string; label: string; x: number; y: number; w: number; h: number }
export async function nodos(screen: any): Promise<Nodo[]> {
  const out: Nodo[] = [];
  const rec = (n: any) => {
    const id = n.identifier ?? n.resourceId ?? '';
    const nombre = n.label || n.text;
    if (!id.startsWith('com.android.systemui') && (nombre || id)) {
      out.push({ type: String(n.type ?? '').split('.').pop()!, id, label: nombre ?? '', x: n.bounds?.x ?? 0, y: n.bounds?.y ?? 0, w: n.bounds?.width ?? 0, h: n.bounds?.height ?? 0 });
    }
    for (const c of n.children ?? []) rec(c);
  };
  for (const n of (await tol(() => screen.viewTree())) as any[]) rec(n);
  return out;
}
export const tiene = (n: Nodo[], re: RegExp) => n.some((x) => re.test(x.label));

const TECLA: Record<string, [number, number]> = { '1': [138, 1728], '2': [406, 1728], '3': [673, 1728], '4': [138, 1882], '5': [406, 1882], '6': [673, 1882], '7': [138, 2036], '8': [406, 2036], '9': [673, 2036], '0': [406, 2190] };
/** Resolución de la pantalla en uso (por defecto la del Pixel 6, para la que están las coordenadas fijas). */
function pantalla(): [number, number] {
  const wm = execSync('adb shell wm size', { timeout: 15000 }).toString();
  const m = /(\d+)x(\d+)/.exec(wm.split('Override size:').pop() ?? wm);
  return m ? [Number(m[1]), Number(m[2])] : [1080, 2400];
}
/** Toca una coordenada pensada para 1080x2400 escalándola a la pantalla del dispositivo. */
export function tocarEscalado(x: number, y: number): void {
  const [w, h] = pantalla();
  execSync(`adb shell input tap ${Math.round((x * w) / 1080)} ${Math.round((y * h) / 2400)}`, { timeout: 15000 });
}
function teclear(codigo: string) {
  // Fuera del Pixel 6 el teclado numérico está en otro lugar: se envían las teclas por código (KEYCODE_0 = 7).
  if (pantalla().join('x') !== '1080x2400') {
    for (const d of codigo) { execSync(`adb shell input keyevent ${7 + Number(d)}`, { timeout: 15000 }); execSync('sleep 0.8'); }
    return;
  }
  for (const d of codigo) { execSync(`adb shell input tap ${TECLA[d][0]} ${TECLA[d][1]}`, { timeout: 15000 }); execSync('sleep 0.8'); }
}
function borrarCasillas() {
  if (pantalla().join('x') !== '1080x2400') { for (let i = 0; i < 8; i++) { execSync('adb shell input keyevent KEYCODE_DEL', { timeout: 15000 }); execSync('sleep 0.3'); } return; }
  for (let i = 0; i < 14; i++) { execSync('adb shell input tap 940 2036', { timeout: 15000 }); execSync('sleep 0.6'); }
}

/**
 * Escribe un texto con `adb input text` en vez del agente de mobilecli: en el emulador ese agente
 * agota sus 10 s al enviar texto ("failed to send text … agent timed out"), mientras que el
 * teclado por adb —el mismo camino que ya usa `teclear` para el código— responde siempre.
 * Si adb falla, se vuelve a `fill`. Solo para textos sin espacios (correos).
 */
export async function escribirTexto(campo: any, texto: string): Promise<void> {
  await tol(() => campo.tap());
  await dormir(800);
  try {
    // `input text` se corta en la "@": se escribe por tramos y la arroba va con su propia tecla.
    texto.split('@').forEach((tramo, i) => {
      if (i > 0) execSync('adb shell input keyevent KEYCODE_AT', { timeout: 15000 });
      if (tramo) execSync(`adb shell input text '${tramo.replace(/'/g, '')}'`, { timeout: 20000 });
    });
    await dormir(800);
    const escrito = ((await campo.getText().catch(() => '')) || '').trim();
    if (escrito !== texto) throw new Error(`el campo quedó con "${escrito}"`);
  } catch {
    await tol(() => campo.fill(texto));
  }
}

/** Pide el código por archivo y espera a que el agente lo deje. */
export async function esperarCodigo(cp: string, correo: string, desde: Date): Promise<string> {
  const id = `${cp}-app-${Date.now()}`;
  fs.mkdirSync('.qa/otp/pedidos', { recursive: true });
  fs.mkdirSync('.qa/otp/codigos', { recursive: true });
  fs.writeFileSync(`.qa/otp/pedidos/${id}.json`, JSON.stringify({ id, cp_id: cp, correo, desde: desde.toISOString(), digitos: 6, respuesta: `.qa/otp/codigos/${id}.txt` }));
  for (let i = 0; i < 100; i++) {
    const f = `.qa/otp/codigos/${id}.txt`;
    if (fs.existsSync(f)) { const c = fs.readFileSync(f, 'utf-8').trim(); fs.rmSync(f, { force: true }); fs.rmSync(`.qa/otp/pedidos/${id}.json`, { force: true }); return c; }
    await dormir(3000);
  }
  throw new Error('OTP_NO_RECIBIDO: el código no llegó a tiempo');
}

/** Escribe un código en las seis casillas visibles y toca «Validar». */
export async function ingresarCodigo(screen: any, codigo: string): Promise<void> {
  // Si el teclado no está abierto (el modal OTP no siempre enfoca la casilla) se toca la casilla para abrirlo.
  if (!/mInputShown=true/.test(execSync('adb shell dumpsys input_method', { timeout: 15000 }).toString())) {
    await screen.getByType('android.widget.EditText').first().tap().catch(() => undefined);
    await dormir(1500);
  }
  borrarCasillas();
  teclear(codigo);
  await dormir(2000);
  // «Validar» puede existir en el árbol pero quedar detrás del teclado: un toque ahí cae en la barra del teclado
  // Samsung (portapapeles). Se oculta el teclado con el botón de la barra de navegación antes de tocar.
  const tecladoVisible = () => /mInputShown=true/.test(execSync('adb shell dumpsys input_method', { timeout: 15000 }).toString());
  for (let i = 0; i < 3 && tecladoVisible(); i++) {
    tocarEscalado(847, 2330);
    await dormir(1500);
  }
  await tol(() => screen.getByText('Validar').tap());
  await dormir(6000);
}

/** Deja la app con sesión de `correo`: reutiliza la que hay o inicia sesión por OTP. */
export async function sesion(screen: any, p: any, cp: string, correo: string, saludo: RegExp): Promise<TabBar> {
  // Si la app quedó fuera de las pestañas, se vuelve con «atrás» (cerrarla cerraría la sesión).
  for (let i = 0; i < 6 && !(await screen.getByTestId('tab-Mi cuenta').isVisible().catch(() => false)); i++) {
    // `mCurrentFocus` de `dumpsys window` puede quedar pegado a un diálogo "Application Error" viejo
    // que además nombra el paquete, así que se decide por la actividad realmente al frente.
    const alFrente = execSync('adb shell dumpsys activity activities | grep -m1 topResumedActivity || true', { timeout: 20000 }).toString();
    if (!alFrente.includes(PAQUETE)) {
      execSync(`adb shell monkey -p ${PAQUETE} -c android.intent.category.LAUNCHER 1`, { timeout: 15000 });
      await dormir(8000);
    } else if (i < 3) {
      // Con la app al frente, lo más común es un dump que no respondió: se espera antes de «atrás».
      await dormir(6000);
    } else {
      execSync('adb shell input keyevent 4', { timeout: 15000 });
      await dormir(2000);
    }
  }
  const tabs = await tol(() => new TabBar(screen, p).waitUntilReady());
  await tol(() => screen.getByTestId('tab-Mi cuenta').tap());
  await dormir(3000);
  let n = await nodos(screen);
  if (n.some((x) => /^Hola, /.test(x.label) && saludo.test(x.label))) return tabs;
  if (n.some((x) => /^Hola, /.test(x.label))) {
    await tol(() => new MiCuentaScreen(screen, p).cerrarSesion());
    await dormir(3000);
    // Al cerrar sesión la app puede volver a la Home (que uiautomator no vuelca): se regresa a «Mi cuenta» por coordenadas.
    tocarEscalado(900, 2232);
    await dormir(4000);
  }
  // Tras cerrar sesión la página queda desplazada hacia abajo y «Iniciar sesión» puede quedar fuera de pantalla.
  for (let i = 0; i < 8 && !(await screen.getByText('Iniciar sesión').first().isVisible().catch(() => false)); i++) {
    await tol(() => screen.swipe('down'));
    await dormir(800);
  }
  await tol(() => screen.getByText('Iniciar sesión').first().tap());
  await dormir(3500);
  const campo = screen.getByType('android.widget.EditText').first();
  await tol(() => campo.waitFor({ state: 'visible', timeout: 25000 }));
  const desde = new Date(Date.now() - 30000);
  await escribirTexto(campo, correo);
  await dormir(1500);
  await tol(() => screen.getByText('Continuar').first().tap());
  await tol(() => screen.getByText(/Autenticación requerida/).waitFor({ state: 'visible', timeout: 40000 }));
  await ingresarCodigo(screen, await esperarCodigo(cp, correo, desde));
  // Tras el OTP la app puede preguntar si se cambia la dirección o el despacho: «No, gracias» deja la de la cuenta y no pide otro OTP.
  for (let i = 0; i < 6; i++) {
    n = await nodos(screen);
    if (n.some((x) => /Algunos productos podr[ií]an agotarse/.test(x.label))) { await tol(() => screen.getByRole('button', { name: 'No, gracias' }).tap()); await dormir(4000); break; }
    if (n.some((x) => /Ahora no/.test(x.label))) break;
    await dormir(2000);
  }
  n = await nodos(screen);
  if (n.some((x) => /Ahora no/.test(x.label))) { await tol(() => screen.getByText('Ahora no').tap()); await dormir(4000); }
  await tol(() => screen.getByTestId('tab-Mi cuenta').tap());
  await dormir(3000);
  n = await nodos(screen);
  expect(n.some((x) => /^Hola, /.test(x.label)), 'la sesión quedó iniciada').toBe(true);
  return tabs;
}
