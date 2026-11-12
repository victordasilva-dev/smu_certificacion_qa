/**
 * Exploración de la app nativa (Fase 4): el equivalente de `playwright-cli` para `tests-app/`.
 *
 *   npm run app:explorar -- <ios|android> <flujo> [guion.ts]
 *   node tests-app/support/explorar.ts ios login .qa/explore/guiones/login.ts
 *
 * Abre la app **en la misma plataforma y con el mismo driver con que después corre la suite**
 * —iOS en el simulador de la Mac (MacinCloud); Android en el emulador o equipo local—, y por cada
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
 * Conviene cuando ya se conoce el camino y solo se quieren los árboles de cada pantalla: el guion
 * recorre el flujo entero en una sola apertura de la app, en vez de un comando por pantalla.
 *
 * Se corre con Node directamente (Node ≥ 22.18 quita los tipos sin transpilar), por eso los
 * imports relativos llevan la extensión `.ts`. `.qa/explore/` está en `.gitignore`: las capturas
 * pueden mostrar data de la cuenta de prueba.
 */
import * as fs from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';
import { android, ios } from 'mobilewright';
import { loadDotEnv } from '../../tests/support/dotenv.ts';
import { loadTestData, token } from '../../tests/support/testData.ts';
import { TOKENS_APP, filtroDispositivo, plataformaDisponible } from './plataformaApp.ts';

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

if (!plataformaDisponible(plataforma)) {
  console.error('iOS se explora en el simulador de una Mac con Xcode (p. ej. MacinCloud): corre este script ahí.');
  process.exit(1);
}

const salida = path.resolve(process.cwd(), '.qa', 'explore', `${flujo}-${plataforma}`);
await fs.promises.mkdir(salida, { recursive: true });

const launcher = plataforma === 'ios' ? ios : android;
const device = await launcher.launch({
  bundleId,
  installApps: build ? path.resolve(process.cwd(), build) : undefined,
  deviceName: filtroDispositivo(plataforma),
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
  console.log(`Explorando ${flujo} en ${plataforma} -> ${salida}`);
  await marcar('inicio');
  if (guion) {
    const mod = await import(pathToFileURL(path.resolve(process.cwd(), guion)).href);
    await (mod.default as (s: typeof screen, m: typeof marcar) => Promise<void>)(screen, marcar);
  }
} finally {
  await device.close();
}
