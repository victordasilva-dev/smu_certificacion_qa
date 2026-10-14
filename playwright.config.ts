import { defineConfig, devices } from '@playwright/test';
import { envBool, loadDotEnv } from './tests/support/dotenv';

// Playwright NO carga .env automáticamente. Cargamos el .env de la raíz del proyecto hacia
// process.env (sin sobrescribir variables ya inyectadas en el entorno), para que los tests
// puedan leer COMPRADOR_USER / COMPRADOR_PASSWORD y demás sin pasarlas inline en cada corrida.
loadDotEnv();

export default defineConfig({
  // Solo la web. Los TC de app nativa viven en tests-app/ y los corre mobilewright con su
  // propio config (mobilewright*.config.ts): quedan fuera de este testDir a propósito, porque
  // sus specs piden un dispositivo y aquí reventarían por falta de fixture.
  testDir: './tests',
  // Playwright escribe sus propios artefactos (trazas, video, captura del fallo) en el outputDir
  // y LO LIMPIA al arrancar la corrida. Por defecto ese directorio es `test-results`, el mismo
  // donde `capturarEvidencia` deja las capturas que alimentan el Word — es decir, la evidencia
  // del entregable comparte destino con algo que borra Playwright y no controlamos nosotros.
  // Confinándolo en un subdirectorio propio, `test-results/evidence/` queda fuera de su alcance.
  outputDir: 'test-results/pw',
  // Contrapartida de lo anterior: al salir del outputDir, la carpeta de evidencias dejó de
  // heredar esa limpieza, y las capturas de una corrida sobrevivirían a la siguiente. Esto la
  // vacía al arrancar, que es lo que Playwright hacía antes por nosotros.
  //
  // Solo en corridas COMPLETAS: re-ejecutar un caso dudoso con `-g <CP-ID>` no toca la evidencia
  // de los demás, porque en una corrida filtrada la limpieza pasa a hacerla caso por caso el
  // fixture `evidenciaDelCaso` de tests/support/fixtures.ts. Lo filtrado se detecta leyendo
  // `process.argv`, no la config: el `--grep` de la CLI no llega a la FullConfig del globalSetup.
  // El porqué de cada decisión está en tests/support/limpiarEvidencia.ts.
  globalSetup: './tests/support/limpiarEvidencia.ts',
  // 30 s —el valor por defecto— no alcanzan contra un storefront de desarrollo: abrir una página
  // de catálogo y esperar a que la red se calme se pasa de ese límite en chromium, y entra justo
  // en webkit. El síntoma engaña: la suite entera de un form-factor cae con "Test timeout
  // exceeded" mientras sus pares del otro pasan, y eso se lee como un defecto de Desktop que no
  // existe. La lentitud es del ambiente y no de ningún caso, así que el valor vive aquí y no
  // repetido en cada suite. Un caso que necesite más sigue pudiendo subirlo con test.setTimeout().
  timeout: 180000,
  retries: 1,
  reporter: [
    ['json', { outputFile: 'test-results/results.json' }],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    // JUnit XML es el formato que los servidores de CI (Harness, Jenkins, GitLab) leen para
    // mostrar el detalle caso por caso. Sin él, un pipeline solo sabe si la suite entera pasó o
    // falló, y hay que abrir los logs para averiguar cuál cayó. No estorba en local: es un
    // archivo más junto al JSON que ya se genera.
    ['junit', { outputFile: 'test-results/junit.xml' }],
  ],
  use: {
    trace: 'on',
    video: 'on',
    screenshot: 'on',
    // baseURL NO se fija aquí: lo resuelve por suite el fixture de tests/support/fixtures.ts,
    // a partir de `tests/data.json` que genera `qa_excel.py read` desde el Excel de data.
    // El ambiente es data de la suite, no configuración de la corrida: ponerlo aquí obligaría a
    // que todas las suites de una misma ejecución compartan ambiente, y a copiar a mano un valor
    // que la planilla ya tiene —con la deriva silenciosa que eso trae—.
    // Para una corrida puntual contra otro ambiente: BASE_URL=https://... npx playwright test
    // Headed por defecto: en una certificación QA el punto es que la persona vea correr el
    // caso, no solo leer el veredicto. Se apaga con HEADED=false en .env (CI, corridas largas)
    // o puntualmente con `npx playwright test --headed=false`.
    headless: !isHeaded(),
  },
  // Dos projects por form-factor: 'desktop' y 'mobile'. El MOTOR de navegador de cada uno
  // se elige en .env (DESKTOP_BROWSER / MOBILE_BROWSER); el VIEWPORT no va aquí, lo fija cada
  // TC con test.use(DESKTOP)/test.use(MOBILE) en su describe de form-factor (ver
  // tests/support/viewports.ts) porque el form-factor es propiedad del caso de prueba, no de
  // la corrida.
  //
  // El enrutado es POR TEST, NO POR ARCHIVO: el grep corre contra el título de cada test(), y
  // la suite entera vive en un solo archivo (tests/<SUITE>.spec.ts) donde conviven casos de
  // los dos projects. Cada test() cae en el suyo por el sufijo "(Desktop)" / "(Mobile)" de su
  // título, así un mismo `npx playwright test` corre los Desktop en DESKTOP_BROWSER y los
  // Mobile en MOBILE_BROWSER. Un test() sin sufijo no matchea ningún project y no corre en
  // ninguno, en silencio.
  projects: [
    {
      name: 'desktop',
      grep: /\(Desktop\)/,
      use: { ...engineFor('DESKTOP_BROWSER') },
    },
    {
      name: 'mobile',
      grep: /\(Mobile\)/,
      use: { ...engineFor('MOBILE_BROWSER') },
    },
  ],
});

// ¿Corremos con el navegador visible? HEADED en .env manda; si no está definida, sí.
function isHeaded(): boolean {
  return envBool('HEADED', true);
}

// Mapea el nombre de navegador de .env al preset de dispositivo de Playwright (solo el motor;
// el viewport lo pone el TC). Acepta chromium/chrome, firefox y webkit/safari.
function engineFor(envVar: string) {
  const DEVICE_BY_BROWSER: Record<string, (typeof devices)[string]> = {
    chromium: devices['Desktop Chrome'],
    chrome: devices['Desktop Chrome'],
    firefox: devices['Desktop Firefox'],
    webkit: devices['Desktop Safari'],
    safari: devices['Desktop Safari'],
  };
  const name = (process.env[envVar] || 'chromium').trim().toLowerCase();
  const device = DEVICE_BY_BROWSER[name];
  if (!device) {
    throw new Error(
      `${envVar}="${name}" no es un navegador soportado. Usa chromium, firefox o webkit en .env. ` +
        `Esta variable solo elige el motor; el viewport lo fija cada TC con test.use().`,
    );
  }
  // Mobile en firefox rompe: firefox no soporta isMobile, que los TC Mobile activan.
  if (envVar === 'MOBILE_BROWSER' && (name === 'firefox')) {
    throw new Error(
      'MOBILE_BROWSER=firefox no es válido: Firefox no soporta isMobile, que los TC Mobile activan. ' +
        'Usa chromium o webkit para mobile.',
    );
  }
  return device;
}
