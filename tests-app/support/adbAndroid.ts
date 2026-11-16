import { execFileSync, spawn } from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import sharp from 'sharp';
import { soloAndroid } from './dispositivo';

/**
 * Lecturas y grabaciones del dispositivo que solo existen en Android (adb). Borrar los datos de la
 * app, los permisos de ubicación y fijar la ubicación están en `dispositivo.ts`, que tiene su
 * equivalente en iOS; lo que queda aquí corta el caso en iOS con `SoloAndroidError`.
 */

function adb(args: string[], serial?: string): Buffer {
  return execFileSync('adb', [...(serial ? ['-s', serial] : []), ...args], { maxBuffer: 64e6 });
}

/** Coordenadas que el emulador entrega hoy como ubicación del dispositivo (último fix de GPS). */
export function ubicacionDelDispositivo(serial?: string): { lat: number; lon: number } | null {
  soloAndroid('ubicacionDelDispositivo', 'lee `dumpsys location`');
  const salida = adb(['shell', 'dumpsys', 'location'], serial).toString();
  const m = /last location=Location\[(?:gps|fused) (-?\d+\.\d+),(-?\d+\.\d+)/.exec(salida);
  return m ? { lat: Number(m[1]), lon: Number(m[2]) } : null;
}

export interface CuadroFranja {
  /** Milisegundos desde que arrancó la acción. */
  ms: number;
  /** Proporción (0..1) de píxeles gris claro uniforme: los bloques de un skeleton de carga. */
  gris: number;
  /** Proporción (0..1) de píxeles oscuros: texto ya renderizado. */
  oscuro: number;
  /** PNG reducido de la franja, para la evidencia. */
  png: Buffer;
}

/**
 * Graba por cuadros (~5 por segundo) una franja horizontal de la pantalla mientras corre `accion`.
 * `screen.screenshot()` tarda 1-3 s, demasiado para ver un estado de carga de menos de un segundo;
 * aquí un bucle dentro del dispositivo toma `screencap` y guarda solo la franja pedida.
 */
export async function grabarFranja(
  accion: () => Promise<void>,
  opts: { top: number; alto: number; segundos: number; serial?: string },
): Promise<CuadroFranja[]> {
  soloAndroid('grabarFranja', 'graba cuadros con `screencap` dentro del dispositivo Android');
  const { top, alto, segundos, serial } = opts;
  const cab = adb(['exec-out', 'screencap'], serial).subarray(0, 16);
  const W = cab.readUInt32LE(0);
  const fila = W * 4;
  const n = Math.ceil(segundos * 5.5);
  const DIR = '/data/local/tmp/qa-franja';
  adb(['shell', `rm -rf ${DIR}; mkdir -p ${DIR}`], serial);
  const bucle = spawn('adb', [...(serial ? ['-s', serial] : []), 'shell',
    `i=0; while [ $i -lt ${n} ]; do t=$(date +%s%N); screencap ${DIR}/f.raw; ` +
      `dd if=${DIR}/f.raw of=${DIR}/$i.fr bs=${fila} skip=${top} count=${alto} 2>/dev/null; ` +
      `echo "$i $t" >> ${DIR}/t.txt; i=$((i+1)); done; rm -f ${DIR}/f.raw`]);
  const fin = new Promise((r) => bucle.on('exit', r));
  const t0 = Number(adb(['shell', 'date +%s%N'], serial).toString().trim());
  await accion();
  await fin;

  const local = fs.mkdtempSync(path.join(os.tmpdir(), 'qa-franja-'));
  try {
    adb(['pull', DIR, local], serial);
    adb(['shell', `rm -rf ${DIR}`], serial);
    const dir = path.join(local, path.basename(DIR));
    const cuadros: CuadroFranja[] = [];
    for (const l of fs.readFileSync(path.join(dir, 't.txt'), 'utf8').trim().split('\n')) {
      const [i, t] = l.split(' ').map(Number);
      const buf = fs.readFileSync(path.join(dir, `${i}.fr`));
      if (buf.length < fila * alto) continue;
      const img = sharp(buf, { raw: { width: W, height: alto, channels: 4 } }).removeAlpha();
      const d = await img.clone().raw().toBuffer();
      let gris = 0;
      let oscuro = 0;
      for (let k = 0; k < d.length; k += 3) {
        const [r, g, b] = [d[k], d[k + 1], d[k + 2]];
        if (Math.max(r, g, b) - Math.min(r, g, b) < 8 && r >= 205 && r <= 242) gris++;
        if (r < 110 && g < 110 && b < 110) oscuro++;
      }
      const total = d.length / 3;
      cuadros.push({
        ms: Math.round((t - t0) / 1e6),
        gris: gris / total,
        oscuro: oscuro / total,
        png: await img.clone().resize(360).png().toBuffer(),
      });
    }
    return cuadros;
  } finally {
    fs.rmSync(local, { recursive: true, force: true });
  }
}
