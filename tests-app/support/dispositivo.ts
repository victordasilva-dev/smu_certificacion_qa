import { execFileSync, execSync } from 'child_process';
import type { Device, Locator, Screen } from 'mobilewright';
import type { Plataforma } from '../../tests/support/rutasEvidencia';

/**
 * Las acciones sobre el dispositivo que la UI no ofrece por locator, en un solo sitio y por
 * plataforma: tocar o deslizar por coordenadas, «atrás», teclear, el teclado, capturas, permisos,
 * borrar los datos de la app, la ubicación.
 *
 * **Ningún spec ni Screen Object llama a `adb` (ni a `simctl`) directamente**: llama aquí. En
 * Android cada función ejecuta el mismo comando `adb` que la suite usaba antes de existir este
 * módulo —el comportamiento en Android no cambia—; en iOS usa la API de mobilewright o `xcrun
 * simctl` sobre el simulador del caso. Lo que no tiene equivalente seguro en iOS **falla con
 * `SoloAndroidError`** en vez de improvisar: un toque en una coordenada medida en un Pixel cae en
 * cualquier parte del iPhone y produce un `Rechazado` que no dice nada de la app.
 *
 * El contexto (plataforma, screen, device, bundle) lo fija el fixture `dispositivoDelCaso` antes
 * de cada test, así que las funciones no reciben el `screen`. Los TC corren de a uno: hay un solo
 * contexto vivo a la vez.
 *
 * El `adb` usa `ANDROID_SERIAL` si hay más de un equipo, como antes.
 */

export class SoloAndroidError extends Error {
  constructor(que: string, porque = 'no tiene equivalente en iOS') {
    super(
      `${que}: ${porque}. Este paso del spec está atado a Android; para correrlo en iOS, ` +
        `reemplázalo por un locator (o una rama segun({ ios, android }) del Screen Object) ` +
        `explorando el simulador.`,
    );
    this.name = 'SoloAndroidError';
  }
}

interface Contexto {
  plataforma: Plataforma;
  screen: Screen;
  device: Device;
  bundleId: string;
  /** Build del caso (`{IOS_APP_BUILD}` / `{ANDROID_APP_BUILD}`): lo pide `borrarDatosApp` en iOS. */
  build?: string;
}

let ctx: Contexto | undefined;

/** Lo llama el fixture antes de cada caso. */
export function fijarDispositivo(c: Contexto): void {
  ctx = c;
}

function actual(): Contexto {
  if (!ctx) throw new Error('dispositivo.ts sin contexto: el test debe importar `test` de ./support/fixtures');
  return ctx;
}

export const plataforma = (): Plataforma => actual().plataforma;
export const esIos = (): boolean => actual().plataforma === 'ios';
/** Bundle de la app del caso (el paquete en Android). Reemplaza al `PAQUETE` escrito a mano. */
export const bundle = (): string => actual().bundleId;

/** Lanza `SoloAndroidError` si el caso corre en iOS. Para helpers que solo existen en Android. */
export function soloAndroid(que: string, porque?: string): void {
  if (esIos()) throw new SoloAndroidError(que, porque);
}

// ─── adb (Android) ──────────────────────────────────────────────────────────────────────────────

/** `adb shell <cmd>` con el mismo timeout que usaba la suite. Devuelve la salida. */
export function adbShell(cmd: string, timeout = 15000): string {
  return execSync(`adb shell ${cmd}`, { timeout, maxBuffer: 64 * 1024 * 1024 }).toString();
}

const pausa = (ms: number) => new Promise((r) => setTimeout(r, ms));
/** Pausa fija entre teclas o toques (lo que antes era `execSync('sleep 0.8')`). */
export const pausaMs = (ms: number): Promise<unknown> => pausa(ms);

/**
 * Comando de adb sin equivalente de UI para un helper puntual de Android (`dumpsys`, `wm`,
 * `settings`…). En iOS lanza `SoloAndroidError`: quien lo llama tiene que tener su rama iOS.
 */
export function adbSoloAndroid(cmd: string, timeout = 15000): string {
  soloAndroid(`adb shell ${cmd.split(' ').slice(0, 2).join(' ')}`);
  return adbShell(cmd, timeout);
}

// ─── Pantalla ───────────────────────────────────────────────────────────────────────────────────

/**
 * Tamaño de la pantalla en las unidades de las coordenadas del árbol: píxeles en Android
 * (`wm size`, con el override si lo hay), puntos en iOS.
 */
export async function tamanoPantalla(): Promise<[number, number]> {
  if (esIos()) {
    const s = await actual().device.screenSize();
    return [s.width, s.height];
  }
  const wm = adbShell('wm size');
  const m = /(\d+)x(\d+)/.exec(wm.split('Override size:').pop() ?? wm);
  return m ? [Number(m[1]), Number(m[2])] : [1080, 2400];
}

/** Captura de la pantalla completa como PNG. Android: `adb exec-out screencap -p`. */
export async function captura(): Promise<Buffer> {
  if (esIos()) return actual().screen.screenshot();
  return execSync('adb exec-out screencap -p', { maxBuffer: 64 * 1024 * 1024, timeout: 30000 });
}

// ─── Toques y gestos ────────────────────────────────────────────────────────────────────────────

/**
 * Toca una coordenada **sacada del árbol de vistas** de esta misma corrida (`bounds` de un nodo):
 * vale en las dos plataformas porque la coordenada y el toque usan las mismas unidades.
 */
export async function tocar(x: number, y: number): Promise<void> {
  if (esIos()) return actual().screen.tap(Math.round(x), Math.round(y));
  adbShell(`input tap ${Math.round(x)} ${Math.round(y)}`);
}

/** Toca el centro (o `dx`,`dy` desde la esquina) de un nodo del árbol. */
export async function tocarNodo(n: { x: number; y: number; w: number; h: number }, dx?: number, dy?: number): Promise<void> {
  return tocar(n.x + (dx ?? n.w / 2), n.y + (dy ?? n.h / 2));
}

/**
 * Toca una coordenada **medida a mano en un Android** (p. ej. un botón que el árbol no expone).
 * En Android es el `input tap` de siempre; en iOS lanza `SoloAndroidError`, porque esa coordenada
 * no apunta a nada en un iPhone. Cada uso es una deuda: reemplazarlo por un locator.
 */
export async function tocarFijo(x: number, y: number): Promise<void> {
  soloAndroid(`tocarFijo(${x}, ${y})`, 'es una coordenada medida en un Android');
  adbShell(`input tap ${Math.round(x)} ${Math.round(y)}`);
}

/**
 * `tocarFijo` para una coordenada medida en `base` (por defecto 1080x2400, Pixel 6) que se escala a
 * la resolución del equipo Android en uso. En iOS, `SoloAndroidError`.
 */
export async function tocarEscalado(x: number, y: number, base: [number, number] = [1080, 2400]): Promise<void> {
  soloAndroid(`tocarEscalado(${x}, ${y})`, `es una coordenada medida en un Android de ${base.join('x')}`);
  const [w, h] = await tamanoPantalla();
  adbShell(`input tap ${Math.round((x * w) / base[0])} ${Math.round((y * h) / base[1])}`);
}

/**
 * Desliza entre dos puntos **del árbol de esta corrida** en `ms` milisegundos (Android: `input
 * swipe`; iOS: un gesto de un dedo).
 */
export async function deslizar(x1: number, y1: number, x2: number, y2: number, ms = 400, timeout = 20000): Promise<void> {
  const r = Math.round;
  if (esIos()) {
    return actual().screen.gesture({ pointers: [[{ x: r(x1), y: r(y1), time: 0 }, { x: r(x2), y: r(y2), time: ms }]] });
  }
  adbShell(`input swipe ${r(x1)} ${r(y1)} ${r(x2)} ${r(y2)} ${ms}`, timeout);
}

export interface OpcionesFijo {
  /** Resolución en la que se midieron las coordenadas. Por defecto 1080x2400. */
  base?: [number, number];
  /** En Android, escalar a la resolución del equipo (como hacían los specs con `sx`/`sy`). Por defecto no. */
  escalarAndroid?: boolean;
  timeout?: number;
}

/**
 * Desliza entre dos puntos **medidos a mano en un Android** de `base`. En Android es el `input
 * swipe` de siempre —sin escalar, salvo `escalarAndroid`—. En iOS el gesto se escala
 * proporcionalmente a la pantalla: un desplazamiento solo necesita la dirección y una distancia
 * parecida, no un punto exacto. (Para tocar, en cambio, ver `tocarFijo`.)
 */
export async function deslizarFijo(
  x1: number, y1: number, x2: number, y2: number, ms = 400, o: OpcionesFijo = {},
): Promise<void> {
  const base = o.base ?? [1080, 2400];
  if (!esIos() && !o.escalarAndroid) {
    adbShell(`input swipe ${x1} ${y1} ${x2} ${y2} ${ms}`, o.timeout ?? 20000);
    return;
  }
  const [w, h] = await tamanoPantalla();
  const sx = (x: number) => Math.round(esIos() ? Math.min(w - 1, Math.max(1, (x * w) / base[0])) : (x * w) / base[0]);
  const sy = (y: number) => Math.round(esIos() ? Math.min(h - 1, Math.max(1, (y * h) / base[1])) : (y * h) / base[1]);
  return deslizar(sx(x1), sy(y1), sx(x2), sy(y2), ms, o.timeout ?? 20000);
}

/**
 * «Atrás». Android: la tecla BACK (`keyevent 4`). iOS no tiene botón atrás: se desliza desde el
 * borde izquierdo, que es el gesto de volver de una pantalla apilada. No cierra modales ni el
 * teclado en iOS —para eso hay que tocar su botón por locator—.
 */
export async function atras(): Promise<void> {
  if (esIos()) {
    const [w, h] = await tamanoPantalla();
    return deslizar(2, h / 2, w * 0.7, h / 2, 300);
  }
  adbShell('input keyevent 4');
}

/**
 * Reemplazo de `screen.goBack()`, que en iOS **no hace nada** (y el caso seguiría en la pantalla
 * equivocada sin avisar). Android: el mismo `screen.goBack()` de mobilecli; iOS: `atras()`.
 */
export async function volver(): Promise<void> {
  if (esIos()) return atras();
  return actual().screen.goBack();
}

// ─── Teclado ────────────────────────────────────────────────────────────────────────────────────

/**
 * Escribe en el campo con foco. Android: `adb shell input text`, porque en el emulador el agente
 * de mobilecli agota sus 10 s al enviar texto; los espacios van como `%s`, las comillas se
 * quitan, y la «@» —donde `input text` se corta— va con su propia tecla. iOS: `typeText` del
 * driver.
 */
export async function escribir(texto: string, timeout = 20000): Promise<void> {
  if (esIos()) return actual().device.driver.typeText(texto);
  texto.split('@').forEach((tramo, i) => {
    if (i > 0) adbShell('input keyevent KEYCODE_AT');
    if (tramo) adbShell(`input text '${tramo.replace(/['"]/g, '').replace(/ /g, '%s')}'`, timeout);
  });
}

/** Teclas con nombre. Android: su `KEYCODE_*`; iOS: la tecla del teclado por hardware del simulador. */
const TECLAS = {
  borrar: { android: 'KEYCODE_DEL', ios: 'backspace' },
  enter: { android: 'KEYCODE_ENTER', ios: 'enter' },
  fin: { android: 'KEYCODE_MOVE_END', ios: 'cmd+right' },
} as const;
export type Tecla = keyof typeof TECLAS | `${number}`;

/** Pulsa una tecla `veces` veces, con `pausaMs` entre cada una. Un dígito ('0'…'9') es su tecla. */
export async function tecla(t: Tecla, veces = 1, pausaMs = 0): Promise<void> {
  for (let i = 0; i < veces; i++) {
    if (/^\d$/.test(t)) {
      if (esIos()) await actual().device.driver.typeText(t);
      else adbShell(`input keyevent ${7 + Number(t)}`); // KEYCODE_0 = 7
    } else {
      const k = TECLAS[t as keyof typeof TECLAS];
      if (esIos()) await actual().device.driver.pressKeys([k.ios]);
      else adbShell(`input keyevent ${k.android}`);
    }
    if (pausaMs) await pausa(pausaMs);
  }
}

/** Teclea un código dígito a dígito (las casillas del OTP no aceptan pegar). */
export async function teclearDigitos(codigo: string, pausaMs = 800): Promise<void> {
  for (const d of codigo) await tecla(d as Tecla, 1, pausaMs);
}

/** ¿Está el teclado en pantalla? Android: `dumpsys input_method`; iOS: un nodo `Keyboard` en el árbol. */
export async function tecladoVisible(): Promise<boolean> {
  if (esIos()) {
    const hay = (ns: any[]): boolean => ns.some((n) => /Keyboard/i.test(String(n.type ?? '')) || hay(n.children ?? []));
    return hay(await actual().screen.viewTree().catch(() => []));
  }
  return /mInputShown=true/.test(adbShell('dumpsys input_method'));
}

/**
 * Oculta el teclado si está abierto. Android: toca `tocarAndroid` (la coordenada neutra que cada
 * spec ya usaba) o, sin ella, BACK. iOS: la tecla de cierre del teclado si tiene una
 * («Listo», «Done», «Intro»…) y si no, un toque arriba de la pantalla, fuera del contenido.
 */
export async function ocultarTeclado(tocarAndroid?: [number, number]): Promise<void> {
  if (!(await tecladoVisible())) return;
  if (!esIos()) {
    if (tocarAndroid) adbShell(`input tap ${tocarAndroid[0]} ${tocarAndroid[1]}`);
    else adbShell('input keyevent 4');
    return;
  }
  const { screen } = actual();
  const cerrar = screen.getByText(/^(Listo|Done|Intro|Return|Aceptar|OK)$/i).last();
  if (await cerrar.isVisible().catch(() => false)) return cerrar.tap();
  const [w, h] = await tamanoPantalla();
  await screen.tap(Math.round(w / 2), Math.round(h * 0.06));
}

/**
 * El primer campo de texto de la pantalla. Android: `android.widget.EditText` (el tipo que la
 * suite usaba); iOS: el rol `textfield` (TextField, SecureTextField, SearchField).
 */
export function campoDeTexto(screen: Screen = actual().screen): Locator {
  return esIos() ? screen.getByRole('textfield') : screen.getByType('android.widget.EditText');
}

// ─── App ────────────────────────────────────────────────────────────────────────────────────────

/** ¿Está la app del caso al frente? Android: `dumpsys activity` (topResumedActivity); iOS: la app en primer plano. */
export async function appAlFrente(id = bundle()): Promise<boolean> {
  if (esIos()) return (await actual().device.getForegroundApp().catch(() => ({ bundleId: '' }))).bundleId === id;
  return adbShell('dumpsys activity activities | grep -m1 topResumedActivity || true', 20000).includes(id);
}

/** Texto de la ventana con foco (Android `mCurrentFocus`; iOS el bundle en primer plano). Para detectar diálogos del sistema. */
export async function ventanaConFoco(): Promise<string> {
  if (esIos()) return (await actual().device.getForegroundApp().catch(() => ({ bundleId: '' }))).bundleId;
  return adbShell('dumpsys window | grep mCurrentFocus || true', 20000);
}

/** Lanza la app, o la trae al frente si ya corre (Android: `monkey`, que no la reinicia). */
export async function abrirApp(id = bundle()): Promise<void> {
  if (esIos()) return actual().device.launchApp(id);
  adbShell(`monkey -p ${id} -c android.intent.category.LAUNCHER 1`);
}

/** Cierra la app (Android `am force-stop`; iOS `terminateApp`). */
export async function cerrarApp(id = bundle()): Promise<void> {
  if (esIos()) return actual().device.terminateApp(id);
  adbShell(`am force-stop ${id}`, 20000);
}

/**
 * Deja la app como recién instalada: sin sesión, sin datos y sin permisos. Android: `pm clear`.
 * iOS no tiene equivalente: se desinstala y se reinstala el build del caso (`{IOS_APP_BUILD}`).
 * Deja la app detenida; hay que lanzarla después.
 */
export async function borrarDatosApp(id = bundle()): Promise<void> {
  if (!esIos()) {
    adbShell(`pm clear ${id}`, 30000);
    return;
  }
  const { device, build } = actual();
  if (!build) throw new Error('borrarDatosApp en iOS reinstala la app y no hay build del caso: falta {IOS_APP_BUILD} en la data');
  await device.uninstallApp(id).catch(() => undefined);
  await device.installApp(build);
}

const PERMISOS_UBICACION = ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'];

/**
 * Otorga o quita el permiso de ubicación sin pasar por el diálogo del sistema. Android: `pm
 * grant|revoke`; iOS: `xcrun simctl privacy <udid> grant|revoke location`.
 */
export async function permisoUbicacion(otorgar: boolean, id = bundle()): Promise<void> {
  if (esIos()) {
    execFileSync('xcrun', ['simctl', 'privacy', actual().device.id, otorgar ? 'grant' : 'revoke', 'location', id], { timeout: 30000 });
    return;
  }
  for (const p of PERMISOS_UBICACION) {
    try {
      adbShell(`pm ${otorgar ? 'grant' : 'revoke'} ${id} android.permission.${p}`);
    } catch (e) {
      if (otorgar) throw e; // revocar un permiso no otorgado falla y no importa
    }
  }
}

/** Fija la ubicación GPS del dispositivo. Android: `adb emu geo fix` (solo emulador); iOS: `setGeolocation`. */
export async function fijarUbicacion(lat: number, lon: number): Promise<void> {
  if (esIos()) return actual().device.setGeolocation({ latitude: lat, longitude: lon });
  execSync(`adb emu geo fix ${lon} ${lat}`, { timeout: 15000 });
}
