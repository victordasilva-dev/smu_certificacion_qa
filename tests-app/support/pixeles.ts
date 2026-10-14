import sharp from 'sharp';

/**
 * Lectura de color sobre una captura, para lo que el árbol de accesibilidad no expone: el tab
 * activo de la TabBar (rojo) o si una pantalla es el splash. `sharp` llega con mobilewright.
 */
async function pixeles(png: Buffer, recorte?: { left: number; top: number; width: number; height: number }) {
  let img = sharp(png);
  if (recorte) img = img.extract(recorte);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  return { data, ch: info.channels, total: info.width * info.height };
}

/** Proporción (0..1) de píxeles rojos de marca (R alto, G y B bajos). */
export async function proporcionRoja(png: Buffer, recorte?: Parameters<typeof pixeles>[1]): Promise<number> {
  const { data, ch, total } = await pixeles(png, recorte);
  let n = 0;
  for (let i = 0; i < data.length; i += ch) if (data[i] > 180 && data[i + 1] < 90 && data[i + 2] < 90) n++;
  return n / total;
}

/** Proporción (0..1) de píxeles casi blancos: el fondo claro de la TabBar. */
export async function proporcionClara(png: Buffer, recorte?: Parameters<typeof pixeles>[1]): Promise<number> {
  const { data, ch, total } = await pixeles(png, recorte);
  let n = 0;
  for (let i = 0; i < data.length; i += ch) if (data[i] > 225 && data[i + 1] > 225 && data[i + 2] > 225) n++;
  return n / total;
}

/**
 * ¿El icono oscuro dentro del recorte es un "+"? Un "+" tiene un trazo horizontal y uno vertical
 * que cruzan casi todo su ancho y alto; un chevron (v) solo tiene trazos diagonales cortos.
 * Calibrado en v1.0.7: el chevron del NavBar mide 36x19 px con trazos rectos de 8 y 5 px.
 */
export async function esIconoMas(png: Buffer, recorte: Parameters<typeof pixeles>[1]): Promise<{ esMas: boolean; detalle: string }> {
  const { data, ch } = await pixeles(png, recorte);
  const w = recorte!.width;
  const h = recorte!.height;
  const oscuro = (x: number, y: number) => {
    const i = (y * w + x) * ch;
    return data[i] < 110 && data[i + 1] < 110 && data[i + 2] < 110;
  };
  let [x0, x1, y0, y1] = [w, -1, h, -1];
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++)
      if (oscuro(x, y)) [x0, x1, y0, y1] = [Math.min(x0, x), Math.max(x1, x), Math.min(y0, y), Math.max(y1, y)];
  if (x1 < 0) return { esMas: false, detalle: 'sin icono oscuro en la zona' };
  const corrida = (horizontal: boolean) => {
    let mejor = 0;
    const [aIni, aFin, bIni, bFin] = horizontal ? [y0, y1, x0, x1] : [x0, x1, y0, y1];
    for (let a = aIni; a <= aFin; a++) {
      let run = 0;
      for (let b = bIni; b <= bFin; b++) {
        run = (horizontal ? oscuro(b, a) : oscuro(a, b)) ? run + 1 : 0;
        mejor = Math.max(mejor, run);
      }
    }
    return mejor;
  };
  const [ancho, alto, hRun, vRun] = [x1 - x0 + 1, y1 - y0 + 1, corrida(true), corrida(false)];
  return {
    esMas: hRun >= 0.7 * ancho && vRun >= 0.7 * alto,
    detalle: `icono ${ancho}x${alto} px, trazo horizontal ${hRun} px, vertical ${vRun} px`,
  };
}

/** Proporción (0..1) de píxeles rojizos (R domina a G y B), aunque estén desvaídos por un fundido. */
export async function proporcionRojiza(png: Buffer, recorte?: Parameters<typeof pixeles>[1]): Promise<number> {
  const { data, ch, total } = await pixeles(png, recorte);
  let n = 0;
  for (let i = 0; i < data.length; i += ch) if (data[i] - Math.max(data[i + 1], data[i + 2]) > 50) n++;
  return n / total;
}

/**
 * Lectura de una captura como posible Splash, con regiones relativas al tamaño de pantalla:
 * - `logo`: proporción rojiza al centro (el logo Unimarc; entra con fundido, por eso "rojiza").
 * - `bordes`: proporción de fondo claro en cuatro franjas de borde (bajo la barra de estado, sobre
 *   la barra de gestos y los costados). El Splash es una imagen a sangre: ~0 en las cuatro. El Home,
 *   con NavBar y TapBar claros, da ~0,9.
 */
export async function analizarSplash(png: Buffer) {
  const { width: w = 0, height: h = 0 } = await sharp(png).metadata();
  const r = (x: number, y: number, ancho: number, alto: number) => ({
    left: Math.round(w * x), top: Math.round(h * y), width: Math.round(w * ancho), height: Math.round(h * alto),
  });
  return {
    logo: await proporcionRojiza(png, r(0.41, 0.45, 0.18, 0.08)),
    bordes: {
      arriba: await proporcionClara(png, r(0, 0.03, 1, 0.054)),
      abajo: await proporcionClara(png, r(0, 0.917, 1, 0.054)),
      izquierda: await proporcionClara(png, r(0, 0.03, 0.037, 0.94)),
      derecha: await proporcionClara(png, r(0.963, 0.03, 0.037, 0.94)),
    },
  };
}

/** Diferencia media por canal (0..255) entre dos capturas del mismo elemento; 0 = idénticas. */
export async function diferenciaMedia(a: Buffer, b: Buffer): Promise<number> {
  const { width = 1, height = 1 } = await sharp(a).metadata();
  const da = await sharp(a).removeAlpha().raw().toBuffer();
  const db = await sharp(b).resize(width, height, { fit: 'fill' }).removeAlpha().raw().toBuffer();
  let s = 0;
  for (let i = 0; i < da.length; i++) s += Math.abs(da[i] - db[i]);
  return s / da.length;
}

/**
 * Proporción (0..1) de píxeles casi negros en la franja superior de una captura de elemento. Sirve
 * para leer el borde de selección de las opciones de orden de B2C-87: la marcada tiene un borde
 * negro grueso (~0,22 en las 14 filas de arriba) y las demás uno gris claro (0).
 */
export async function bordeSuperiorOscuro(png: Buffer, filas = 14): Promise<number> {
  const { width = 1, height = 1 } = await sharp(png).metadata();
  return proporcionOscura(png, { left: 0, top: 0, width, height: Math.min(filas, height) });
}

async function proporcionOscura(png: Buffer, recorte: { left: number; top: number; width: number; height: number }) {
  const { data, ch, total } = await pixeles(png, recorte);
  let n = 0;
  for (let i = 0; i < data.length; i += ch) if (data[i] < 80 && data[i + 1] < 80 && data[i + 2] < 80) n++;
  return n / total;
}
