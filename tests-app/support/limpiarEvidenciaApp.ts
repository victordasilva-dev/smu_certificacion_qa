import type { FullConfig } from '@playwright/test';
import { corridaFiltrada, vaciarEvidencia } from '../../tests/support/limpiarEvidencia';
import { Plataforma, esEvidenciaDeAppEn } from '../../tests/support/rutasEvidencia';

/**
 * `globalSetup` de mobilewright: la contraparte de `tests/support/limpiarEvidencia.ts` para la app.
 *
 * Borra al arrancar una corrida **completa** la evidencia de app **de las plataformas de este
 * config**, y nada más. Las tres corridas —web, Android, iOS— escriben en la misma
 * `test-results/evidence/` y cada una arranca cuando le toca: si iOS vaciara la carpeta entera,
 * se llevaría la evidencia de la web y de Android que la Fase 9 todavía tiene que meter en el Word.
 *
 * En una corrida filtrada (`--grep <CP-ID>`, `--project`, `--shard`) no borra nada: la limpieza la
 * hace caso por caso el fixture `evidenciaDelCaso` de tests-app/support/fixtures.ts, igual que en
 * la web. La detección es la misma (`corridaFiltrada`, que lee `process.argv`), y
 * `QA_EVIDENCIA_PARCIAL=1` sigue siendo la salida explícita.
 */
async function limpiarEvidenciaApp(config: FullConfig): Promise<void> {
  if (corridaFiltrada()) return;

  const plataformas = new Set(
    config.projects
      .map((p) => (p.use as { platform?: Plataforma }).platform ?? (p.name as Plataforma))
      .filter((p): p is Plataforma => p === 'ios' || p === 'android'),
  );
  if (plataformas.size === 0) return;

  await vaciarEvidencia((archivo) => [...plataformas].some((p) => esEvidenciaDeAppEn(archivo, p)));
}

export default limpiarEvidenciaApp;
