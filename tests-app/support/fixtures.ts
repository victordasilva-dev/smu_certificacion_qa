import * as fs from 'fs';
import * as path from 'path';
import { test as base, expect } from '@mobilewright/test';
import { LoadedTestData, loadTestData, token } from '../../tests/support/testData';
import { EVIDENCE_DIR, Plataforma, esEvidenciaDe, rutaEvidencia } from '../../tests/support/rutasEvidencia';
import { TOKENS_APP } from './plataformaApp';

/**
 * `test` de los TC de app nativa: el de `@mobilewright/test` —con `screen`, `device` y
 * `bundleId`— más lo mismo que la web agrega sobre Playwright: la data resuelta y la evidencia
 * por caso.
 *
 * El archivo de cada suite de app (`tests-app/<SUITE>.spec.ts`) importa `test` y `expect` de
 * aquí, no de `@mobilewright/test`.
 */
export const test = base.extend<
  { testData: LoadedTestData; plataforma: Plataforma; appDeclarada: void; evidenciaDelCaso: void },
  {}
>({
  // Video del dispositivo en todos los casos, como la web en la corrida de certificación. Es
  // opción de worker en Playwright, y por eso se fija aquí y no en el `use` del config, que
  // mobilewright tipa solo con sus propias opciones.
  video: ['on', { scope: 'worker' }],

  testData: async ({}, use) => {
    await use(loadTestData());
  },

  plataforma: async ({ platform }, use, testInfo) => {
    // El project se llama como su plataforma y además la fija en `use.platform`.
    await use((platform ?? testInfo.project.name) as Plataforma);
  },

  /**
   * Corta el caso **antes de pedir el dispositivo** si la app de su plataforma no está en la data.
   *
   * Pedir un dispositivo a la nube cuesta minutos de cola y de plan: descubrir después que no
   * había bundle que lanzar es tirar las dos cosas. Como es `auto` y no depende de `device`,
   * Playwright lo resuelve antes que la asignación.
   */
  appDeclarada: [
    async ({ bundleId, plataforma, testData }, use) => {
      if (!bundleId) {
        const t = TOKENS_APP[plataforma].bundle;
        throw new Error(
          `No hay app que lanzar en ${plataforma}: falta {${t}} en ${testData.file}.\n` +
            `Sale del Excel de data del workspace (lo vuelca 'qa_excel.py read'). Cárgalo ahí y ` +
            `repite el read; o, para una corrida puntual, pásalo por entorno: ${t}=... npx mobilewright test`,
        );
      }
      await use();
    },
    { auto: true },
  ],

  /**
   * Borra la evidencia previa **de este caso en esta plataforma** y, si el caso falla, deja el
   * estado de la pantalla en el momento del fallo como su captura final.
   *
   * Lo primero es lo mismo que el fixture homónimo de la web: re-ejecutar un TC dudoso reemplaza
   * exactamente lo suyo, sin tocar la evidencia de los demás ni la de la otra plataforma del
   * mismo TC.
   *
   * Lo segundo es propio de la app. En la web, la captura del fallo la toma Playwright y la Fase 8
   * la copia a mano a `<CP-ID>.png`; mobilewright la adjunta al reporte como `body`, sin archivo
   * en disco que copiar. Tomarla aquí, con el dispositivo todavía conectado, deja el TC rechazado
   * con su imagen del fallo en la convención de nombre que consume el Word.
   */
  evidenciaDelCaso: [
    async ({ plataforma, screen }, use, testInfo) => {
      const cpId = testInfo.title.split(' ')[0];
      const dir = path.resolve(process.cwd(), EVIDENCE_DIR);
      const esCaso = /^TC-[A-Z0-9-]+$/i.test(cpId);

      if (esCaso) {
        const previas = await fs.promises.readdir(dir).catch(() => [] as string[]);
        await Promise.all(
          previas
            .filter((f) => esEvidenciaDe(f, cpId, plataforma))
            .map((f) => fs.promises.rm(path.join(dir, f), { force: true })),
        );
      }

      await use();

      if (esCaso && testInfo.status !== testInfo.expectedStatus) {
        try {
          const ruta = path.resolve(process.cwd(), rutaEvidencia(cpId, undefined, undefined, plataforma));
          await fs.promises.mkdir(path.dirname(ruta), { recursive: true });
          await fs.promises.writeFile(ruta, await screen.screenshot());
        } catch {
          // El dispositivo pudo desconectarse junto con el fallo. El veredicto no depende de
          // esta imagen: el caso sigue fallado y el reporte trae la captura de mobilewright.
        }
      }
    },
    { auto: true },
  ],
});

export { expect, token };
