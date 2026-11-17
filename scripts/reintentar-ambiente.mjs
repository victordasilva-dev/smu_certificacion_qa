#!/usr/bin/env node
/**
 * Reintenta SOLO los casos que fallaron por el ambiente.
 *
 * La suite corre con `retries: 0` (QA_RETRIES): reintentar a ciegas repite también los fallos de
 * spec y de data, que vuelven a fallar igual y duplican el tiempo de la corrida —en una corrida
 * real de 14 casos de app, los reintentos se llevaron 22 de 42 minutos sin cambiar un solo
 * veredicto—. Este script lee el results.json de la corrida, separa los fallos cuyo error es de
 * ambiente (red, dispositivo, navegador caído) y vuelve a correr solo esos.
 *
 *   node scripts/reintentar-ambiente.mjs                         # web: lista los casos
 *   node scripts/reintentar-ambiente.mjs --correr                # web: los vuelve a correr
 *   node scripts/reintentar-ambiente.mjs --app android --correr  # app (results-android.json)
 *
 * Un caso que vuelve a fallar por ambiente en el reintento es `Bloqueado`, no `Rechazado`.
 * Los patrones viven aquí y se amplían cuando aparece un fallo de ambiente nuevo.
 */
import { readFileSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

export const PATRONES_AMBIENTE = [
  /WebSocket connection closed/i,
  /no XML content found in uiautomator dump/i,
  /failed to dump UI/i,
  /device allocation timed out/i,
  /net::ERR_[A-Z_]+/,
  /NS_ERROR_[A-Z_]+/,
  /ECONNRESET|ECONNREFUSED|ETIMEDOUT|EAI_AGAIN|socket hang up/i,
  /Target page, context or browser has been closed/i,
  /browserType\.launch/i,
  /Browser closed|Browser has been closed/i,
  /\b5\d\d\b.*(Bad Gateway|Service Unavailable|Gateway Timeout)/i,
  /page\.goto: Timeout \d+ms exceeded/i,
];

const args = process.argv.slice(2);
const app = args.includes('--app') ? args[args.indexOf('--app') + 1] || 'android' : null;
const correr = args.includes('--correr');
const archivo = app ? `test-results/results-${app}.json` : 'test-results/results.json';

if (!existsSync(archivo)) {
  console.error(`No existe ${archivo}: corre la suite primero (sin --reporter, que reemplaza el json).`);
  process.exit(2);
}

const r = JSON.parse(readFileSync(archivo, 'utf-8'));
const casos = [];
const recorrer = (s) => {
  (s.suites || []).forEach(recorrer);
  for (const sp of s.specs || []) {
    for (const t of sp.tests) {
      const ultimo = t.results[t.results.length - 1];
      if (!ultimo || !['failed', 'timedOut', 'interrupted'].includes(ultimo.status)) continue;
      const error = (ultimo.errors || []).map((e) => e.message || '').join('\n') || ultimo.error?.message || '';
      if (error.includes('PRECONDICION_NO_DISPONIBLE')) continue; // la data no cambia al reintentar
      const patron = PATRONES_AMBIENTE.find((p) => p.test(error));
      if (patron) casos.push({ cp: sp.title.split(' ')[0], proyecto: t.projectName, patron: String(patron) });
    }
  }
};
r.suites.forEach(recorrer);

if (!casos.length) {
  console.log('Ningún fallo de ambiente: no hay nada que reintentar.');
  process.exit(0);
}
const unicos = [...new Set(casos.map((c) => c.cp))];
for (const c of casos) console.log(`${c.cp} [${c.proyecto}] ${c.patron}`);
const grep = unicos.map((cp) => cp.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
console.log(`\n--grep "${grep}"`);

if (correr) {
  // En Windows npx es un .cmd y necesita shell; ahí el `|` del grep lo leería cmd como tubería,
  // así que el patrón va entre comillas dobles.
  const win = process.platform === 'win32';
  const patron = win ? `"${grep}"` : grep;
  const cmd = app
    ? ['mobilewright', 'test', ...(app === 'ios' ? ['-c', 'mobilewright.ios.config.ts'] : []), '--grep', patron]
    : ['playwright', 'test', '--grep', patron];
  const res = spawnSync('npx', cmd, { stdio: 'inherit', shell: win });
  process.exit(res.status ?? 1);
}
