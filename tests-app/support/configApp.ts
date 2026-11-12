import * as path from 'path';
import { defineConfig, type MobilewrightConfig } from 'mobilewright';
import { loadDotEnv } from '../../tests/support/dotenv';
import { loadTestData, token } from '../../tests/support/testData';
import type { Plataforma } from '../../tests/support/rutasEvidencia';
import { SUFIJO, TOKENS_APP, filtroDispositivo, plataformaDisponible, versionSO } from './plataformaApp';

// mobilewright tampoco carga .env: los filtros de dispositivo y APP_ANIMACIONES viven ahí.
loadDotEnv();

/**
 * Config de mobilewright para una plataforma.
 *
 * **Un config por plataforma, y no un solo config con dos projects**: cada plataforma corre en
 * una máquina distinta —Android en el emulador o equipo local, iOS en el simulador de una Mac
 * (por ejemplo, MacinCloud)—, con su propio dispositivo, sus filtros y sus reportes. El config se
 * evalúa también en cada worker, así que elegir la plataforma leyendo `--project` de la línea de
 * comandos no es fiable: en el worker esos argumentos no están. Dos archivos son explícitos y se
 * propagan solos (`testInfo.config.configFile`).
 */
export function configApp(plataforma: Plataforma): MobilewrightConfig {
  const data = loadTestData();
  const bundleId = token(data, TOKENS_APP[plataforma].bundle);
  const build = token(data, TOKENS_APP[plataforma].build);
  if (!plataformaDisponible(plataforma)) {
    // El simulador de iOS solo existe en macOS: en otra máquina no hay con qué correrlo, y caer a
    // otra cosa en silencio produciría un veredicto que no certifica nada.
    throw new Error(
      'iOS corre en el simulador de iOS, que solo existe en macOS con Xcode.\n' +
        'Clona la suite en la Mac (p. ej. la de MacinCloud), arranca un simulador ' +
        '(xcrun simctl boot "<nombre>") y corre ahí: npx mobilewright test -c mobilewright.ios.config.ts',
    );
  }

  return defineConfig({
    // Solo los specs de app. tests/ es de la web y la corre Playwright: si este testDir lo
    // incluyera, mobilewright intentaría correr los specs web pidiendo un dispositivo.
    testDir: './tests-app',
    testMatch: '**/*.spec.ts',
    // Un outputDir por plataforma y fuera de test-results/evidence, por lo mismo que en la web:
    // el runner limpia su outputDir al arrancar, y la evidencia del reporte no puede estar ahí.
    outputDir: `test-results/mw-${plataforma}`,
    globalSetup: './tests-app/support/limpiarEvidenciaApp.ts',
    // Mismo presupuesto que la web.
    timeout: 180000,
    retries: 1,
    // El árbol de accesibilidad adjunto al reporte cuando un caso falla: es lo que permite
    // distinguir "el elemento no existe" de "el locator está mal" sin volver a correr nada.
    viewTree: 'on-failure',
    // Sin bundle no hay app que lanzar. No se corta aquí para no romper `--list` en un clon sin
    // `tests/data.json`: lo corta, con un mensaje que dice de dónde sale el valor, el fixture
    // `appDeclarada` de tests-app/support/fixtures.ts, antes de pedir el dispositivo.
    bundleId,
    // El binario se instala en el dispositivo antes de cada caso. Relativo a la raíz del proyecto
    // si el Excel lo trae relativo: en Android un `.apk`; en iOS un `.zip` del `.app` de simulador.
    // APP_YA_INSTALADA=1 salta la reinstalación en cada test (un APK de 130 MB en un emulador lento
    // supera el timeout de 60 s de `installApp`). Solo vale si el build correcto ya está instalado.
    installApps: build && !process.env.APP_YA_INSTALADA ? path.resolve(process.cwd(), build) : undefined,
    reporter: [
      ['list'],
      // Un JSON y un JUnit por plataforma: correr iOS después de Android no puede pisar los
      // resultados de Android, que la Fase 8 todavía necesita para decidir veredictos.
      ['json', { outputFile: path.resolve(process.cwd(), `test-results/results-${plataforma}.json`) }],
      ['junit', { outputFile: `test-results/junit-${plataforma}.xml` }],
      ['html', { outputFolder: `mobilewright-report/${plataforma}`, open: 'never' }],
    ],
    use: {
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
          // iOS es siempre el simulador de la Mac: un iPhone conectado por cable necesitaría un
          // .ipa firmado y no es lo que se configura aquí. Android toma el emulador o el equipo
          // que vea ADB.
          deviceType: plataforma === 'ios' ? 'simulator' : undefined,
          deviceName: filtroDispositivo(plataforma),
          osVersion: versionSO(plataforma),
        },
      },
    ],
  });
}

function animaciones(): 'on' | 'off' | undefined {
  const v = process.env.APP_ANIMACIONES?.trim().toLowerCase();
  return v === 'on' || v === 'off' ? v : undefined;
}
