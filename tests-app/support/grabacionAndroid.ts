import { execFileSync, spawn } from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import sharp from 'sharp';

/**
 * Grabación por cuadros de un cold start en Android, para medir tiempos del Splash (HU B2C-67).
 *
 * `screen.screenshot()` tarda 1-3 s y el Splash dura ~4 s: no alcanza para medir. Aquí un bucle
 * dentro del dispositivo toma `screencap` cada ~0,2 s con su marca de tiempo, y de cada cuadro
 * guarda solo dos franjas (la del NavBar y una central con el logo y la foto) para no llenar el
 * almacenamiento del emulador (un cuadro entero pesa ~10 MB). Solo Android: usa adb.
 */
export interface Cuadro {
  /** Milisegundos desde que se lanzó la app. */
  ms: number;
  /** Proporción rojiza del logo al centro: > 0,3 es el Splash (nativo o fotográfico). */
  logo: number;
  /** Proporción de fondo claro en la franja del NavBar: ~1 en el splash nativo blanco y en el Home. */
  navClara: number;
  /** Firma de la franja central (grilla 16x4 RGB) para comparar cuadros. */
  firma: number[];
  /** PNG reducido de la franja central, para la evidencia. */
  png: Buffer;
}

const DIR = '/data/local/tmp/qa-splash';

function adb(serial: string | undefined, args: string[], opts: { maxBuffer?: number } = {}): Buffer {
  return execFileSync('adb', [...(serial ? ['-s', serial] : []), ...args], { maxBuffer: opts.maxBuffer ?? 64e6 });
}

/** Escala de animaciones del sistema (1 = normal, 0 = desactivadas). */
export function escalaAnimaciones(serial?: string): number {
  return Number(adb(serial, ['shell', 'settings', 'get', 'global', 'animator_duration_scale']).toString().trim());
}

export async function grabarColdStart(paquete: string, segundos: number, serial?: string): Promise<Cuadro[]> {
  const cab = adb(serial, ['exec-out', 'screencap']).subarray(0, 16);
  const W = cab.readUInt32LE(0);
  const H = cab.readUInt32LE(4);
  const fila = W * 4;
  const nav = [Math.round(H * 0.03), Math.round(H * 0.054)];
  const cen = [Math.round(H * 0.4), Math.round(H * 0.2)];
  const n = Math.ceil(segundos * 5.5);

  adb(serial, ['shell', `am force-stop ${paquete}; rm -rf ${DIR}; mkdir -p ${DIR}`]);
  const bucle = spawn('adb', [...(serial ? ['-s', serial] : []), 'shell',
    `i=0; while [ $i -lt ${n} ]; do t=$(date +%s%N); screencap ${DIR}/f.raw; ` +
      `dd if=${DIR}/f.raw of=${DIR}/$i.nav bs=${fila} skip=${nav[0]} count=${nav[1]} 2>/dev/null; ` +
      `dd if=${DIR}/f.raw of=${DIR}/$i.cen bs=${fila} skip=${cen[0]} count=${cen[1]} 2>/dev/null; ` +
      `echo "$i $t" >> ${DIR}/t.txt; i=$((i+1)); done; rm -f ${DIR}/f.raw`]);
  const fin = new Promise((r) => bucle.on('exit', r));
  await new Promise((r) => setTimeout(r, 400));
  const t0 = Number(adb(serial, ['shell', `date +%s%N; monkey -p ${paquete} -c android.intent.category.LAUNCHER 1 >/dev/null 2>&1`]).toString().trim());
  await fin;

  const local = fs.mkdtempSync(path.join(os.tmpdir(), 'qa-splash-'));
  try {
    adb(serial, ['pull', DIR, local]);
    adb(serial, ['shell', `rm -rf ${DIR}`]);
    const dir = path.join(local, path.basename(DIR));
    const lineas = fs.readFileSync(path.join(dir, 't.txt'), 'utf8').trim().split('\n');
    const cuadros: Cuadro[] = [];
    for (const l of lineas) {
      const [i, t] = l.split(' ').map(Number);
      const leer = (ext: string, alto: number) => {
        const buf = fs.readFileSync(path.join(dir, `${i}.${ext}`));
        if (buf.length < fila * alto) return null;
        return sharp(buf, { raw: { width: W, height: alto, channels: 4 } }).removeAlpha();
      };
      const nv = leer('nav', nav[1]);
      const cn = leer('cen', cen[1]);
      if (!nv || !cn) continue;
      const proporcion = async (img: ReturnType<typeof sharp>, f: (r: number, g: number, b: number) => boolean) => {
        const d = await img.raw().toBuffer();
        let c = 0;
        for (let k = 0; k < d.length; k += 3) if (f(d[k], d[k + 1], d[k + 2])) c++;
        return c / (d.length / 3);
      };
      cuadros.push({
        ms: Math.round((t - t0) / 1e6),
        navClara: await proporcion(nv, (r, g, b) => r > 225 && g > 225 && b > 225),
        logo: await proporcion(
          cn.clone().extract({ left: Math.round(W * 0.41), top: Math.round(H * 0.05), width: Math.round(W * 0.18), height: Math.round(H * 0.08) }),
          (r, g, b) => r - Math.max(g, b) > 50,
        ),
        firma: Array.from(await cn.clone().resize(16, 4, { fit: 'fill' }).raw().toBuffer()),
        png: await cn.clone().resize(270, Math.round((cen[1] * 270) / W)).png().toBuffer(),
      });
    }
    return cuadros;
  } finally {
    fs.rmSync(local, { recursive: true, force: true });
  }
}

export function distancia(a: number[], b: number[]): number {
  let d = 0;
  for (let j = 0; j < a.length; j++) d += Math.abs(a[j] - b[j]);
  return d / a.length;
}

export interface CarruselMedido {
  /** Imágenes del carrusel fotográfico, con el instante en que cada una quedó estable. */
  imagenes: { desdeMs: number; hastaMs: number }[];
  /** Cuadros intermedios (mezcla de dos imágenes) entre imágenes consecutivas: el fade. */
  cuadrosDeFundido: number[];
  /** Intervalo entre el inicio de imágenes consecutivas, en ms (sin la última, que se corta). */
  intervalosMs: number[];
  /** Momento en que aparece el Home (franja del NavBar clara y sin logo). */
  homeMs?: number;
}

/**
 * Lee el carrusel en la grabación. Un cuadro del Splash fotográfico es el que tiene el logo y la
 * franja del NavBar oscura (la foto a sangre); el splash nativo blanco tiene logo pero franja clara.
 * Un cuadro es "estable" si casi no cambia respecto del anterior; dos tramos estables con firmas
 * distintas son dos imágenes, y los cuadros entre ellos, el fundido.
 */
export function medirCarrusel(cuadros: Cuadro[]): CarruselMedido {
  const foto = cuadros.map((c) => c.logo > 0.3 && c.navClara < 0.3);
  const imagenes: { desdeMs: number; hastaMs: number; firma: number[] }[] = [];
  const fundidos: number[] = [];
  let enTransicion = 0;
  for (let k = 1; k < cuadros.length; k++) {
    if (!foto[k]) continue;
    const estable = distancia(cuadros[k].firma, cuadros[k - 1].firma) < 12 && foto[k - 1];
    const actual = imagenes[imagenes.length - 1];
    if (estable) {
      if (actual && distancia(cuadros[k].firma, actual.firma) < 25) {
        actual.hastaMs = cuadros[k].ms;
      } else {
        if (actual) fundidos.push(enTransicion);
        imagenes.push({ desdeMs: cuadros[k - 1].ms, hastaMs: cuadros[k].ms, firma: cuadros[k].firma });
      }
      enTransicion = 0;
    } else if (imagenes.length) {
      enTransicion++;
    }
  }
  const home = cuadros.find((c) => c.logo < 0.1 && c.navClara > 0.8 && c.ms > (imagenes[0]?.desdeMs ?? 0));
  const intervalos = imagenes.slice(1).map((im, k) => im.desdeMs - imagenes[k].desdeMs);
  return {
    imagenes: imagenes.map(({ desdeMs, hastaMs }) => ({ desdeMs, hastaMs })),
    cuadrosDeFundido: fundidos,
    intervalosMs: intervalos,
    homeMs: home?.ms,
  };
}

/** Tira de evidencia: las franjas centrales de los cuadros indicados, con su tiempo. */
export async function tiraDeCuadros(cuadros: Cuadro[], columnas = 4): Promise<Buffer> {
  const { width = 270, height = 120 } = await sharp(cuadros[0].png).metadata();
  const filas = Math.ceil(cuadros.length / columnas);
  const celda = { w: width + 8, h: height + 26 };
  return sharp({ create: { width: celda.w * columnas, height: celda.h * filas, channels: 3, background: '#ffffff' } })
    .composite(
      cuadros.flatMap((c, i) => {
        const left = (i % columnas) * celda.w;
        const top = Math.floor(i / columnas) * celda.h;
        const rotulo = Buffer.from(
          `<svg width="${width}" height="24"><text x="2" y="17" font-family="Arial" font-size="16">t = ${(c.ms / 1000).toFixed(2)} s</text></svg>`,
        );
        return [
          { input: rotulo, left, top },
          { input: c.png, left, top: top + 24 },
        ];
      }),
    )
    .png()
    .toBuffer();
}

/** Borra los datos de la app (estado de recién instalada) con `pm clear`. Solo Android. */
export function borrarDatosApp(paquete: string, serial?: string): void {
  adb(serial, ['shell', 'pm', 'clear', paquete]);
}
