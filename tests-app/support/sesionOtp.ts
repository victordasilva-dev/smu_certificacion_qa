import * as fs from 'fs';
import { expect } from './fixtures';
import { TabBar } from '../pages/TabBar';
import { MiCuentaScreen } from '../pages/MiCuentaScreen';
import { tolerante } from './tolerante';
import {
  abrirApp, appAlFrente, atras, campoDeTexto, escribir, esIos, ocultarTeclado, tamanoPantalla, tecla,
  teclearDigitos, tecladoVisible, tocarEscalado, tocarFijo,
} from './dispositivo';

export { tocarEscalado };

/**
 * Login de la app v1.0.1 por correo + código (OTP), compartido por los specs de app con [Logueado].
 *
 * El código se pide por archivo (`.qa/otp/pedidos`) y el agente lo deja en `.qa/otp/codigos`. Las
 * casillas aceptan los ceros solo al tocar las teclas del teclado numérico, así que en un Pixel 6
 * (1080x2400) se teclea tocando esas teclas; en otro Android, por código de tecla, y en iOS con
 * `typeText`. Las acciones de dispositivo van por `./dispositivo` (adb en Android, mobilewright en iOS).
 */
const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);

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
/** ¿Es un Pixel 6 (1080x2400), el equipo para el que están medidas las teclas de `TECLA`? */
async function esPixel6(): Promise<boolean> {
  return !esIos() && (await tamanoPantalla()).join('x') === '1080x2400';
}
async function teclear(codigo: string): Promise<void> {
  // Fuera del Pixel 6 el teclado numérico está en otro lugar: se envían las teclas por código (KEYCODE_0 = 7).
  if (!(await esPixel6())) return teclearDigitos(codigo, 800);
  for (const d of codigo) { await tocarFijo(TECLA[d][0], TECLA[d][1]); await dormir(800); }
}
async function borrarCasillas(): Promise<void> {
  if (!(await esPixel6())) return tecla('borrar', 8, 300);
  for (let i = 0; i < 14; i++) { await tocarFijo(940, 2036); await dormir(600); }
}

/**
 * Escribe un texto con `escribir()` de `./dispositivo` —en Android, `adb input text` en vez del
 * agente del dispositivo, que en el emulador agota sus 10 s al enviar texto ("failed to send text …
 * agent timed out")—. Si falla, se vuelve a `fill`. Solo para textos sin espacios (correos).
 */
export async function escribirTexto(campo: any, texto: string): Promise<void> {
  await tol(() => campo.tap());
  await dormir(800);
  try {
    await escribir(texto);
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

/**
 * Escribe un código en las seis casillas visibles y toca «Validar». `espera` es la pausa tras
 * «Validar»: 0 para quien necesita leer un toast que la app muestra justo al validar (B2C-190 APP-005).
 */
export async function ingresarCodigo(screen: any, codigo: string, espera = 6000): Promise<void> {
  // Si el teclado no está abierto (el modal OTP no siempre enfoca la casilla) se toca la casilla para abrirlo.
  if (!(await tecladoVisible())) {
    await campoDeTexto(screen).first().tap().catch(() => undefined);
    await dormir(1500);
  }
  await borrarCasillas();
  await teclear(codigo);
  await dormir(2000);
  // «Validar» puede existir en el árbol pero quedar detrás del teclado: un toque ahí cae en la barra del teclado
  // Samsung (portapapeles). Se oculta el teclado con el botón de la barra de navegación antes de tocar.
  for (let i = 0; i < 3 && (await tecladoVisible()); i++) {
    // Fuera del Pixel 6 esa coordenada cae en el botón de cambiar teclado (abre «Choose input method», Pixel 4):
    // ahí se cierra con BACK, que con el teclado abierto solo lo oculta. En iOS, la tecla de cierre del teclado.
    if (esIos()) await ocultarTeclado();
    else if (await esPixel6()) await tocarEscalado(847, 2330);
    else await atras();
    await dormir(1500);
  }
  await tol(() => screen.getByText('Validar').tap());
  await dormir(espera);
}

/** Deja la app con sesión de `correo`: reutiliza la que hay o inicia sesión por OTP. */
export async function sesion(screen: any, p: any, cp: string, correo: string, saludo: RegExp): Promise<TabBar> {
  // Si la app quedó fuera de las pestañas, se vuelve con «atrás» (cerrarla cerraría la sesión).
  for (let i = 0; i < 6 && !(await screen.getByTestId('tab-Mi cuenta').isVisible().catch(() => false)); i++) {
    // `mCurrentFocus` de `dumpsys window` puede quedar pegado a un diálogo "Application Error" viejo
    // que además nombra el paquete, así que se decide por la actividad realmente al frente.
    if (!(await appAlFrente())) {
      await abrirApp();
      await dormir(8000);
    } else if (i < 3) {
      // Con la app al frente, lo más común es un dump que no respondió: se espera antes de «atrás».
      await dormir(6000);
    } else {
      await atras();
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
    // En iOS el árbol sí se vuelca: se toca la pestaña por su testId.
    if (esIos()) await tol(() => screen.getByTestId('tab-Mi cuenta').tap());
    else await tocarEscalado(900, 2232);
    await dormir(4000);
  }
  // Tras cerrar sesión la página queda desplazada hacia abajo y «Iniciar sesión» puede quedar fuera de pantalla.
  for (let i = 0; i < 8 && !(await screen.getByText('Iniciar sesión').first().isVisible().catch(() => false)); i++) {
    await tol(() => screen.swipe('down'));
    await dormir(800);
  }
  await tol(() => screen.getByText('Iniciar sesión').first().tap());
  await dormir(3500);
  const campo = campoDeTexto(screen).first();
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
