import * as fs from 'fs';
import * as path from 'path';
import type { FullResult, Reporter, TestCase, TestResult } from '@playwright/test/reporter';

/**
 * Reporter que **acumula** el resultado de cada caso entre corridas, en `.qa/run/resultados.json`.
 *
 * `test-results/results.json` lo reescribe cada corrida, y una corrida filtrada (`-g <CP-ID>`) deja
 * en él solo lo que acaba de correr: si una suite se certifica en tandas —un form-factor, después los
 * casos que pedían OTP, después un re-test—, al llegar a la Fase 9 ya no están la duración, las
 * anotaciones ni el error de los casos de las tandas anteriores, y hay que reconstruirlos a mano.
 *
 * Aquí cada caso guarda su **último** intento, con la llave `<CP-ID>|<project>` (un TC `Ambas` de
 * app o un par web corren en dos projects y son dos resultados), y lo que no volvió a correr se
 * conserva. La Fase 9 arma el JSON de corrida leyendo este archivo.
 *
 * Lo comparten la web (playwright.config.ts) y la app (tests-app/support/configApp.ts): mobilewright
 * usa el mismo runner y la misma interfaz de reporter.
 *
 * El archivo se empieza de cero con `QA_RESULTADOS_NUEVO=1` (p. ej. al empezar otra HU): vive en
 * `.qa/run/`, que no se commitea.
 */
export const RUTA_RESULTADOS = '.qa/run/resultados.json';

interface Registro {
  cp_id: string;
  titulo: string;
  project: string;
  archivo: string;
  estado: TestResult['status'];
  esperado: TestCase['expectedStatus'];
  reintento: number;
  duracion_s: number;
  fin: string;
  errores: string[];
  anotaciones: { type: string; description?: string }[];
  captura_fallo: string | null;
}

const sinColores = (s: string) => s.replace(/\x1b\[[0-9;]*m/g, '');
const relativa = (p?: string) => (p ? path.relative(process.cwd(), p).split(path.sep).join('/') : null);

export default class ResultadosAcumulados implements Reporter {
  private nuevos: Record<string, Registro> = {};

  onTestEnd(test: TestCase, result: TestResult): void {
    const titulo = test.title;
    const cpId = titulo.split(' ')[0];
    if (!/^TC-[A-Z0-9-]+$/i.test(cpId)) return;
    const project = test.parent.project()?.name ?? '';
    // La captura del fallo que perdura es la que el fixture deja en test-results/evidence/<CP-ID>.png
    // (o <CP-ID>-<plataforma>.png en la app); la de Playwright vive en su outputDir, que la próxima
    // corrida vacía. Se cita la que perdura si existe.
    const enEvidencia = [`${cpId}.png`, `${cpId}-${test.parent.project()?.name ?? ''}.png`]
      .map((f) => path.resolve(process.cwd(), 'test-results/evidence', f))
      .find((f) => fs.existsSync(f));
    const captura = enEvidencia
      ? { path: enEvidencia }
      : result.attachments.find((a) => a.name === 'screenshot' && a.path);
    this.nuevos[`${cpId}|${project}`] = {
      cp_id: cpId,
      titulo,
      project,
      archivo: relativa(test.location.file) ?? '',
      estado: result.status,
      esperado: test.expectedStatus,
      reintento: result.retry,
      duracion_s: Math.round(result.duration / 100) / 10,
      fin: new Date(result.startTime.getTime() + result.duration).toISOString(),
      // La primera línea de cada error alcanza para decidir el veredicto; el detalle sigue en el trace.
      errores: result.errors.map((e) => sinColores(e.message ?? e.value ?? '').split('\n').slice(0, 4).join(' / ')),
      anotaciones: test.annotations.map((a) => ({ type: a.type, description: a.description })),
      captura_fallo: result.status !== test.expectedStatus ? relativa(captura?.path) : null,
    };
  }

  async onEnd(_result: FullResult): Promise<void> {
    if (!Object.keys(this.nuevos).length) return;
    const ruta = path.resolve(process.cwd(), RUTA_RESULTADOS);
    let previos: { casos?: Record<string, Registro> } = {};
    if (process.env.QA_RESULTADOS_NUEVO !== '1') {
      try {
        previos = JSON.parse(await fs.promises.readFile(ruta, 'utf-8'));
      } catch {
        previos = {};
      }
    }
    const casos = { ...(previos.casos ?? {}), ...this.nuevos };
    await fs.promises.mkdir(path.dirname(ruta), { recursive: true });
    await fs.promises.writeFile(
      ruta,
      JSON.stringify({ actualizado: new Date().toISOString(), casos }, null, 1),
      'utf-8',
    );
  }

  printsToStdio(): boolean {
    return false;
  }
}
