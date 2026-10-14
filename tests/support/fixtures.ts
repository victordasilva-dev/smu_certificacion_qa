import * as fs from 'fs';
import * as path from 'path';
import { test as base, expect } from '@playwright/test';
import { EVIDENCE_DIR, esEvidenciaDe } from './rutasEvidencia';
import { LoadedTestData, baseUrl, loadTestData, token } from './testData';

/**
 * `test` de este proyecto: el de Playwright más la data de prueba ya resuelta.
 *
 * Existe para que ningún spec ni Page Object lea `process.env` por su cuenta. La data sale de
 * `tests/data.json` (o del entorno, que manda sobre el archivo) y llega a los specs como un
 * fixture, de modo que los Page Objects naveguen relativo y el ambiente se declare en un solo
 * sitio.
 *
 * El archivo de cada suite importa `test` y `expect` de aquí, no de `@playwright/test`. Como
 * vive en la raíz de tests/ (tests/<SUITE>.spec.ts), el import es `./support/fixtures`.
 */
export const test = base.extend<{ testData: LoadedTestData; evidenciaDelCaso: void }>({
  testData: async ({}, use) => {
    await use(loadTestData());
  },

  /**
   * Borra la evidencia previa **de este caso** antes de que empiece a generar la suya.
   *
   * Es lo que permite re-ejecutar un TC que quedó dudoso sin perder la evidencia de los demás.
   * El borrado en bloque vive en el `globalSetup` y solo actúa en corridas completas; aquí la
   * unidad es el caso, así que una pasada filtrada reemplaza exactamente lo que vuelve a correr.
   *
   * Hace falta borrar y no simplemente sobrescribir: las capturas llevan el número de paso y su
   * etiqueta en el nombre, de modo que si el caso cambia —un paso menos, una etiqueta reescrita—
   * la captura vieja no se pisa, se queda. Y como el JSON de corrida recoge del disco todo lo que
   * empiece por el CP-ID, esa huérfana entraría en el Word mezclada con las nuevas.
   *
   * Corre también en cada reintento, que es justo lo que se quiere: la evidencia que queda es la
   * del último intento, que es el que decide el veredicto.
   */
  evidenciaDelCaso: [
    async ({}, use, testInfo) => {
      // El CP-ID abre el título del test(); es la misma llave que une el caso con su fila del
      // Excel y con el nombre de sus capturas.
      const cpId = testInfo.title.split(' ')[0];
      const dir = path.resolve(process.cwd(), EVIDENCE_DIR);

      if (/^TC-[A-Z0-9-]+$/i.test(cpId)) {
        const previas = await fs.promises.readdir(dir).catch(() => [] as string[]);
        await Promise.all(
          previas
            // Nunca un `startsWith` del CP-ID pelado: sin el separador, el prefijo de
            // `TC-B2C87-D-001` también casaría con `TC-B2C87-D-0011`. Ver `esEvidenciaDe`.
            .filter((f) => esEvidenciaDe(f, cpId))
            .map((f) => fs.promises.rm(path.join(dir, f), { force: true })),
        );
      }

      await use();
    },
    { auto: true },
  ],

  // Sobrescribe la opción `baseURL` de Playwright, de modo que `page.goto('/cart')` y los
  // Page Objects naveguen contra el ambiente configurado sin que nadie lo pase a mano.
  baseURL: async ({ testData }, use) => {
    await use(baseUrl(testData));
  },
});

export { expect, token };
