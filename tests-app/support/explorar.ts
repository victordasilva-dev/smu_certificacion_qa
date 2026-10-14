/**
 * Exploración de la app nativa (Fase 4): el equivalente de `playwright-cli` para `tests-app/`.
 *
 *   npm run app:explorar -- <ios|android> <flujo> [guion.ts]
 *   node tests-app/support/explorar.ts ios login .qa/explore/guiones/login.ts
 *
 * Abre la app **en la misma plataforma y con el mismo driver con que después corre la suite**
 * —iOS en Mobile Next Cloud; Android en local, o en la nube con ANDROID_EN_CLOUD=true—, y por cada
 * estado que se le pida deja en `.qa/explore/<flujo>-<plataforma>/` dos archivos:
 *
 *   01-inicio.json   el árbol de accesibilidad (`screen.viewTree()`), de donde salen los locators
 *   01-inicio.png    lo que se veía, para no confundir una pantalla con otra
 *
 * Sin guion registra solo la pantalla inicial. Con guion, ejecuta sus pasos en la misma sesión y
 * registra cada estado que el guion marque. El guion es un módulo que exporta una función:
 *
 *   export default async function (screen, marcar) {
 *     await screen.getByRole('button', { name: /ingresar/i }).tap();
 *     await marcar('login abierto');
 *   }
 *
 * Existe porque en la nube cada `launch` es una asignación de dispositivo —minutos de cola—, así
 * que explorar un flujo con un comando por pantalla sería lentísimo: el guion recorre el flujo
 * entero en una sola asignación.
 *
 * Se corre con Node directamente (Node ≥ 22.18 quita los tipos sin transpilar), por eso los
 * imports relativos llevan la extensión `.ts`. `.qa/explore/` está en `.gitignore`: las capturas
 * pueden mostrar data de la cuenta de prueba.
 */
import * as fs from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';
import { android, ios } from 'mobilewright';
import { MobileNextDriver } from '@mobilewright/driver-mobilenext';
import { loadDotEnv } from '../../tests/support/dotenv.ts';
import { loadTestData, token } from '../../tests/support/testData.ts';
import { TOKENS_APP, enNube, filtroDispositivo } from './plataformaApp.ts';

loadDotEnv();

const [plataforma, flujo, guion] = process.argv.slice(2);
if ((plataforma !== 'ios' && plataforma !== 'android') || !flujo) {
  console.error('Uso: node tests-app/support/explorar.ts <ios|android> <flujo> [guion.ts]');
  process.exit(2);
}

const data = loadTestData();
const bundleId = token(data, TOKENS_APP[plataforma].bundle);
const build = token(data, TOKENS_APP[plataforma].build);
if (!bundleId) {
  console.error(
    `Falta {${TOKENS_APP[plataforma].bundle}} en ${data.file}. Sale del Excel de data: cárgalo ahí y ` +
      `repite 'qa_excel.py read'.`,
  );
  process.exit(1);
}

let driver: MobileNextDriver | undefined;
if (enNube(plataforma)) {
  const apiKey = process.env.MOBILENEXT_API_KEY?.trim();
  if (!apiKey) {
    console.error('Esta plataforma corre en Mobile Next Cloud y falta MOBILENEXT_API_KEY en .env.');
    process.exit(1);
  }
  // Sin subida de reporte: una exploración no es una corrida y no debe aparecer en el dashboard.
  driver = new MobileNextDriver({ apiKey, testResult: { uploadReport: 'off' } });
}

const salida = path.resolve(process.cwd(), '.qa', 'explore', `${flujo}-${plataforma}`);
await fs.promises.mkdir(salida, { recursive: true });

const launcher = plataforma === 'ios' ? ios : android;
const device = await launcher.launch({
  bundleId,
  installApps: build ? path.resolve(process.cwd(), build) : undefined,
  deviceName: filtroDispositivo(plataforma),
  driver,
});
const { screen } = device;

let n = 0;
async function marcar(etiqueta: string): Promise<void> {
  n += 1;
  const base = `${String(n).padStart(2, '0')}-${etiqueta.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  await fs.promises.writeFile(path.join(salida, `${base}.json`), JSON.stringify(await screen.viewTree(), null, 2));
  await fs.promises.writeFile(path.join(salida, `${base}.png`), await screen.screenshot());
  console.log(`  ${base}  (.json + .png)`);
}

try {
  console.log(`Explorando ${flujo} en ${plataforma}${driver ? ' (Mobile Next Cloud)' : ' (local)'} -> ${salida}`);
  await marcar('inicio');
  if (guion) {
    const mod = await import(pathToFileURL(path.resolve(process.cwd(), guion)).href);
    await (mod.default as (s: typeof screen, m: typeof marcar) => Promise<void>)(screen, marcar);
  }
} finally {
  await device.close();
}
