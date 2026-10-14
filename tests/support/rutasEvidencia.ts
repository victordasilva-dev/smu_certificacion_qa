/**
 * Nombres de la evidencia de la corrida: la convención que consume el Word.
 *
 * Vive aparte de `evidencia.ts` porque la usan dos runners: Playwright para la web y
 * mobilewright para la app nativa. Aquí no se importa nada de Playwright a propósito: lo que
 * tiene que ser idéntico en los dos es el **nombre** del archivo, porque `qa_evidence.py` ordena
 * las capturas y deduce el epígrafe a partir de él. Si cada runner lo armara por su cuenta, las
 * dos convenciones se separarían con el tiempo.
 *
 *   web  →  TC-B2C69-D-002-p02-modal-de-login-abierto.png   ·  TC-B2C69-D-002.png (estado final)
 *   app  →  TC-B2C69-APP-004-ios-p02-home-con-saludo.png    ·  TC-B2C69-APP-004-ios.png
 *
 * La app lleva la plataforma en el nombre porque un mismo TC de app puede declarar
 * `Plataforma: Ambas` y correr en iOS y en Android: sin ese segmento, las capturas de una
 * plataforma pisarían las de la otra, y el Word mostraría una mezcla de las dos corridas.
 *
 * Las rutas son **relativas a la raíz del proyecto**: el JSON de corrida las cita tal cual, y una
 * ruta absoluta solo se resuelve en la máquina que corrió la suite.
 */
export const EVIDENCE_DIR = 'test-results/evidence';

export type Plataforma = 'ios' | 'android';

/**
 * `<CP-ID>[-<plataforma>].png` para el estado final; `<CP-ID>[-<plataforma>]-p<NN>-<etiqueta>.png`
 * para un paso. La plataforma solo la pasa la app.
 */
export function rutaEvidencia(
  cpId: string,
  paso?: number | string,
  etiqueta?: string,
  plataforma?: Plataforma,
): string {
  const base = plataforma ? `${cpId}-${plataforma}` : cpId;
  if (paso === undefined || paso === null || paso === '') {
    return `${EVIDENCE_DIR}/${base}.png`;
  }
  const nn = String(paso).padStart(2, '0');
  const slug = slugificar(etiqueta);
  return slug ? `${EVIDENCE_DIR}/${base}-p${nn}-${slug}.png` : `${EVIDENCE_DIR}/${base}-p${nn}.png`;
}

/**
 * ¿Este archivo de evidencia es de este caso (y de esta plataforma, si se pasa)?
 *
 * Igualdad exacta con `<base>.png` o prefijo `<base>-p`, nunca un `startsWith` del CP-ID pelado:
 * sin el separador, el prefijo de `TC-B2C87-D-001` también casaría con `TC-B2C87-D-0011`, y el de
 * `TC-B2C87-APP-001` con las capturas de otra plataforma del mismo caso.
 */
export function esEvidenciaDe(archivo: string, cpId: string, plataforma?: Plataforma): boolean {
  const base = plataforma ? `${cpId}-${plataforma}` : cpId;
  return archivo === `${base}.png` || archivo.startsWith(`${base}-p`);
}

/** ¿Es evidencia de un TC de app nativa? El segmento `-APP-` del CP-ID lo dice. */
export function esEvidenciaDeApp(archivo: string): boolean {
  return /-APP-/i.test(archivo);
}

/** ¿Es evidencia de app de esta plataforma? */
export function esEvidenciaDeAppEn(archivo: string, plataforma: Plataforma): boolean {
  if (!esEvidenciaDeApp(archivo)) return false;
  const p = plataforma.toLowerCase();
  return new RegExp(`-${p}(\\.png$|-p\\d)`, 'i').test(archivo);
}

export function slugificar(texto?: string): string {
  return (texto ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}
