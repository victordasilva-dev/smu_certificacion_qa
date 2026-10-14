import * as path from 'path';
import { defineConfig, type MobilewrightConfig } from 'mobilewright';
import { MobileNextDriver } from '@mobilewright/driver-mobilenext';
import { loadDotEnv } from '../../tests/support/dotenv';
import { loadTestData, token } from '../../tests/support/testData';
import type { Plataforma } from '../../tests/support/rutasEvidencia';
import { SUFIJO, TOKENS_APP, enNube, filtroDispositivo, versionSO } from './plataformaApp';

// mobilewright tampoco carga .env: MOBILENEXT_API_KEY, ANDROID_EN_CLOUD y los filtros de
// dispositivo viven ahí.
loadDotEnv();

/**
 * Config de mobilewright para una plataforma.
 *
 * **Un config por plataforma, y no un solo config con dos projects**, por una limitación
 * comprobada en mobilewright 0.0.60: el `driver` —local o nube— es de nivel superior, no de
 * project. Con los dos projects en un mismo config, iOS y Android compartirían driver, y no hay
 * forma de mandar uno a la nube y dejar el otro en el emulador local. Además el config se evalúa
 * también en cada worker, así que elegir el driver leyendo `--project` de la línea de comandos no
 * es fiable: en el worker esos argumentos no están. Dos archivos son explícitos y se propagan
 * solos (`testInfo.config.configFile`).
 */
export function configApp(plataforma: Plataforma): MobilewrightConfig {
  const data = loadTestData();
  const bundleId = token(data, TOKENS_APP[plataforma].bundle);
  const build = token(data, TOKENS_APP[plataforma].build);
  const nube = enNube(plataforma);

  return defineConfig({
    // Solo los specs de app. tests/ es de la web y la corre Playwright: si este testDir lo
    // incluyera, mobilewright intentaría correr los specs web pidiendo un dispositivo.
    testDir: './tests-app',
    testMatch: '**/*.spec.ts',
    // Un outputDir por plataforma y fuera de test-results/evidence, por lo mismo que en la web:
    // el runner limpia su outputDir al arrancar, y la evidencia del Word no puede estar ahí.
    outputDir: `test-results/mw-${plataforma}`,
    globalSetup: './tests-app/support/limpiarEvidenciaApp.ts',
    // Mismo presupuesto que la web. La espera en la cola de la nube NO sale de aquí: corre con
    // su propio reloj (`allocationTimeout`), así que un dispositivo que tarda en asignarse no se
    // come el tiempo del caso.
    timeout: 180000,
    retries: 2,
    // El árbol de accesibilidad adjunto al reporte cuando un caso falla: es lo que permite
    // distinguir "el elemento no existe" de "el locator está mal" sin volver a correr nada.
    viewTree: 'on-failure',
    // Sin bundle no hay app que lanzar. No se corta aquí para no romper `--list` en un clon sin
    // `tests/data.json`: lo corta, con un mensaje que dice de dónde sale el valor, el fixture
    // `appDeclarada` de tests-app/support/fixtures.ts, antes de pedir el dispositivo.
    bundleId,
    // El binario se sube e instala en cada dispositivo asignado. Relativo a la raíz del proyecto
    // si el Excel lo trae relativo.
    installApps: build ? path.resolve(process.cwd(), build) : undefined,
    reporter: [
      ['list'],
      // Un JSON y un JUnit por plataforma: correr iOS después de Android no puede pisar los
      // resultados de Android, que la Fase 8 todavía necesita para decidir veredictos. La ruta
      // va absoluta porque, con el driver de la nube, mobilewright reutiliza este mismo JSON
      // para subir el resultado; con una relativa escribiría una segunda copia en un temporal.
      ['json', { outputFile: path.resolve(process.cwd(), `test-results/results-${plataforma}.json`) }],
      ['junit', { outputFile: `test-results/junit-${plataforma}.xml` }],
      ['html', { outputFolder: `mobilewright-report/${plataforma}`, open: 'never' }],
    ],
    use: {
      // 15 min es el default de mobilewright. Se deja configurable porque la cola de la nube
      // depende del plan contratado y de la hora, no de la suite.
      allocationTimeout: Number(process.env.APP_ALLOCATION_TIMEOUT) || 15 * 60_000,
      // Animaciones del sistema en el dispositivo. Sin definir no se tocan: apagarlas cambia la
      // configuración del emulador de quien corre, y eso no se hace sin pedirlo. Con `off` se
      // evita el fallo intermitente de Android "failed to dump UI ... no XML content found in
      // uiautomator dump", que ocurre cuando se lee el árbol mientras algo anima (un splash, un
      // carrusel): comprobado con la app de Unimarc, en el primer arranque en frío.
      animations: animaciones(),
    },
    projects: [
      {
        name: plataforma,
        // Enrutado por el sufijo del título, igual que (Desktop)/(Mobile) en la web: un test()
        // sin sufijo no corre en ningún project, en silencio.
        grep: SUFIJO[plataforma],
        use: {
          platform: plataforma,
          // En la nube se piden dispositivos reales: un simulador no instala un .ipa firmado
          // para dispositivo, y es hardware real lo que se quiere certificar.
          deviceType: nube ? 'real' : undefined,
          deviceName: filtroDispositivo(plataforma),
          osVersion: versionSO(plataforma),
        },
      },
    ],
    driver: nube ? driverNube(plataforma) : undefined,
  });
}

function animaciones(): 'on' | 'off' | undefined {
  const v = process.env.APP_ANIMACIONES?.trim().toLowerCase();
  return v === 'on' || v === 'off' ? v : undefined;
}

function driverNube(plataforma: Plataforma): MobileNextDriver {
  const apiKey = process.env.MOBILENEXT_API_KEY?.trim();
  if (!apiKey) {
    // Nunca se cae a local en silencio: un iOS "corrido" contra lo que haya conectado no
    // certifica nada, y en Windows ni siquiera hay con qué correrlo.
    throw new Error(
      `${plataforma === 'ios' ? 'iOS' : 'Android con ANDROID_EN_CLOUD=true'} corre en Mobile Next ` +
        `Cloud y falta MOBILENEXT_API_KEY.\n` +
        `Sácala de https://app.mobilenext.ai y ponla en el .env del proyecto (nunca en el Excel ` +
        `de data: es un secreto de la máquina, no data de la suite).`,
    );
  }
  const subida = process.env.MOBILENEXT_SUBIR_REPORTE?.trim().toLowerCase();
  // `--list` no corre nada, pero con el driver de la nube mobilewright igual registra una corrida
  // en el dashboard (comprobado en 0.0.60): cada listado dejaría allí una corrida vacía.
  const soloLista = process.argv.includes('--list');
  return new MobileNextDriver({
    apiKey,
    testResult: {
      // Por defecto se sube el reporte al dashboard de Mobile Next en cada corrida; es donde
      // queda el video del dispositivo real. 'off' si el cliente no quiere el reporte fuera.
      uploadReport: soloLista ? 'off' : subida === 'off' || subida === 'on-failure' ? subida : 'on',
      name: process.env.QA_SUITE?.trim() || `qa-executor ${plataforma}`,
      tags: ['qa-executor', plataforma],
    },
  });
}
