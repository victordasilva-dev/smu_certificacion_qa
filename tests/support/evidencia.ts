import { Locator, Page } from '@playwright/test';
import { rutaEvidencia } from './rutasEvidencia';

/**
 * Captura de evidencia con nombre determinista, la que consume el Word de la corrida.
 *
 * Un TC rara vez se demuestra con una sola imagen: el estado previo, la acción y el resultado
 * son momentos distintos y el lector del documento necesita compararlos. Por eso la captura se
 * numera por paso —el mismo paso que trae la fila del Excel— en vez de dejar una sola foto del
 * final: `TC-B2C69-D-002-p02-modal-de-login-abierto.png`.
 *
 * El nombre no es cosmético. `qa_evidence.py` ordena las capturas de un TC por nombre y deduce
 * el epígrafe del propio archivo (`p02-modal-de-login-abierto` → "Paso 2 — modal de login
 * abierto"), así que el número con cero a la izquierda es lo que mantiene el orden de los pasos
 * a partir del décimo, y la etiqueta es lo que se lee bajo la imagen en el documento.
 *
 * Las rutas son **relativas a la raíz del proyecto** a propósito: el JSON de corrida las cita
 * tal cual y una ruta absoluta solo se resuelve en la máquina que corrió la suite.
 */
// El nombre de cada captura lo arma `rutasEvidencia.ts`, que comparten la web y la app nativa:
// los dos runners tienen que producir exactamente la misma convención.
export { EVIDENCE_DIR, rutaEvidencia } from './rutasEvidencia';

/** Captura la página completa, el viewport o un elemento, según lo que se le pase. */
export async function capturarEvidencia(
  objetivo: Page | Locator,
  cpId: string,
  paso?: number | string,
  etiqueta?: string,
  opts: { fullPage?: boolean } = {},
): Promise<string> {
  const path = rutaEvidencia(cpId, paso, etiqueta);
  // `animations: 'disabled'` congela transiciones y carruseles: sin eso, dos corridas del mismo
  // TC dejan capturas distintas y el Word deja de ser comparable entre entregas.
  if (typeof (objetivo as Page).goto === 'function') {
    await (objetivo as Page).screenshot({
      path,
      fullPage: opts.fullPage ?? false,
      animations: 'disabled',
    });
  } else {
    // Un elemento se captura solo si está a la vista; si el TC lo tiene fuera del scroll, esto
    // lo trae, que es justo lo que hace legible la evidencia de una página larga.
    await (objetivo as Locator).screenshot({ path, animations: 'disabled' });
  }
  return path;
}
