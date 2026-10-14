import * as fs from 'fs';
import * as path from 'path';

/**
 * Carga el `.env` de la raíz del proyecto hacia `process.env`, sin pisar lo que ya venga del
 * entorno.
 *
 * Ni Playwright ni mobilewright cargan `.env` por su cuenta. Vive aquí y no copiado en cada
 * config porque ahora son tres los que lo necesitan —`playwright.config.ts` y los dos
 * `mobilewright*.config.ts`—, y tres copias de un parser terminan leyendo el mismo archivo de
 * tres formas distintas.
 *
 * Parser mínimo a propósito: el `.env` de este proyecto son pares KEY=VALUE, y no vale traer
 * una dependencia para leerlo.
 */
export function loadDotEnv(): void {
  try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (!fs.existsSync(envPath)) return;
    for (const raw of fs.readFileSync(envPath, 'utf-8').split(/\r?\n/)) {
      const line = raw.trim();
      if (!line || line.startsWith('#')) continue;
      const eq = line.indexOf('=');
      if (eq === -1) continue;
      const key = line.slice(0, eq).trim();
      let val = line.slice(eq + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (process.env[key] === undefined) process.env[key] = val;
    }
  } catch {
    // .env ausente o ilegible: se sigue con el entorno tal cual (las credenciales pueden venir inline).
  }
}

/** true/1/yes/si, para no pelear con cómo lo escriba cada quien. */
export function envBool(name: string, porDefecto: boolean): boolean {
  const raw = process.env[name];
  if (raw === undefined || raw.trim() === '') return porDefecto;
  return ['true', '1', 'yes', 'y', 'si', 'sí'].includes(raw.trim().toLowerCase());
}
