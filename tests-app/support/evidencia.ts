import * as fs from 'fs';
import * as path from 'path';
import type { Locator, Screen } from 'mobilewright';
import { Plataforma, rutaEvidencia } from '../../tests/support/rutasEvidencia';

export { EVIDENCE_DIR } from '../../tests/support/rutasEvidencia';

/**
 * Captura de evidencia de la app nativa, con el mismo nombre determinista que la web.
 *
 * `qa_evidence.py` no distingue de qué runner salió una captura: la ordena por nombre y deduce el
 * epígrafe del archivo. Por eso esto no inventa convención propia y usa `rutaEvidencia()`, con la
 * plataforma como segmento extra (`TC-B2C69-APP-004-ios-p02-home-con-saludo.png`), que en el Word
 * se lee "iOS · Paso 2 — home con saludo".
 *
 * Sin `paso` deja el estado final (`<CP-ID>-<plataforma>.png`). Pasa un `Locator` en vez de la
 * `Screen` cuando el TC valida un componente: a media columna del Word, una pantalla entera de
 * teléfono se lee peor que el componente solo.
 */
export async function capturarEvidenciaApp(
  objetivo: Screen | Locator,
  cpId: string,
  plataforma: Plataforma,
  paso?: number | string,
  etiqueta?: string,
): Promise<string> {
  const ruta = rutaEvidencia(cpId, paso, etiqueta, plataforma);
  const png = await objetivo.screenshot();
  await fs.promises.mkdir(path.dirname(path.resolve(process.cwd(), ruta)), { recursive: true });
  await fs.promises.writeFile(path.resolve(process.cwd(), ruta), png);
  return ruta;
}
