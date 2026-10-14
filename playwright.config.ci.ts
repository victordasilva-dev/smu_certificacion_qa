import { defineConfig } from '@playwright/test';
import base from './playwright.config';

/**
 * Configuración para correr la suite en un pipeline (Harness u otro CI).
 *
 *   npx playwright test --config=playwright.config.ci.ts
 *
 * Hereda todo del config principal —testDir, retries, los projects desktop/mobile y el motor
 * por form-factor— y solo cambia lo que distingue a una corrida desatendida de una certificación
 * manual. La herencia es a propósito: si mañana se agrega un project o cambia el enrutado por
 * form-factor, el pipeline lo recibe sin que nadie tenga que acordarse de copiarlo aquí.
 *
 * Qué cambia y por qué:
 *
 * 1. **Headless forzado.** El config principal arranca headed porque en una certificación el
 *    punto es que la persona vea correr el caso. Un contenedor no tiene display, así que ahí
 *    eso es un fallo al arrancar. Se fija aquí en vez de depender de que el pipeline recuerde
 *    exportar HEADED=false: una configuración que necesita una variable para no romperse acaba
 *    rompiéndose el día que alguien clona el pipeline y no copia la variable.
 *
 * 2. **Evidencia solo de lo que falla.** En la corrida manual grabamos video, trace y captura de
 *    todo porque esa evidencia alimenta el Word que revisa el equipo. En un pipeline nadie mira
 *    la evidencia de un caso que pasó, y se acumula en cada ejecución. Medido sobre el mismo
 *    caso en verde: 23 MB con el config principal (11 MB de test-results + 12 MB de reporte)
 *    contra 0,9 MB con este. Un caso que falla sigue guardando trace, video y captura íntegros,
 *    que es cuando hacen falta.
 *
 * 3. **`forbidOnly`.** Un `test.only` olvidado en un commit hace que el pipeline corra ese caso
 *    y omita los demás **reportando verde**, que es la peor forma de fallar: nadie revisa una
 *    suite que pasó. En CI eso pasa a ser un error de configuración, no un silencio.
 *
 * Lo que NO cambia: `retries: 2` y los projects. Los reintentos se conservan porque un pipeline
 * corre contra un ambiente compartido, donde un fallo de red puntual no debería ensuciar el
 * reporte; y combinan bien con `trace: 'on-first-retry'`, que captura el trace exactamente
 * cuando algo empezó a fallar.
 */
export default defineConfig({
  ...base,

  // Un `.only` olvidado deja de ser un falso verde y pasa a ser un error de configuración.
  forbidOnly: true,

  reporter: [
    // Una línea por caso en el log del pipeline: es lo que se lee cuando algo falla y todavía
    // no se ha descargado ningún artefacto.
    ['list'],
    // Lo que consume el servidor de CI para mostrar el detalle caso por caso.
    ['junit', { outputFile: 'test-results/junit.xml' }],
    // Se sube como artefacto (S3/GCS) y es la mejor herramienta para diagnosticar un fallo sin
    // reproducirlo en local. Con la evidencia reducida ya no pesa lo que pesaba.
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],

  use: {
    ...base.use,
    headless: true,
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
});
