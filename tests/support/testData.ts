import * as fs from 'fs';
import * as path from 'path';

/**
 * Data de prueba del proyecto: `tests/data.json`, un único archivo para todas las suites.
 *
 * **Es un archivo generado, no se edita a mano.** Lo produce `qa_excel.py read` desde el Excel de
 * data del workspace QA en cada corrida de la skill. Así el ambiente y las cuentas tienen un solo
 * dueño —la planilla—: copiarlos a mano a un segundo sitio crea dos fuentes de verdad que se
 * desincronizan en silencio, y la suite acaba certificando el ambiente equivocado reportando
 * verde. Para cambiar un valor se cambia en el Excel y se vuelve a correr el `read`.
 *
 * **No se commitea**: lleva la data tal cual, credenciales incluidas, y está en `.gitignore`. La
 * consecuencia está en el diseño de este módulo: como el archivo no viaja con el repositorio, en
 * una máquina o un pipeline sin el workspace QA la data tiene que poder entrar por otra vía. Por
 * eso `token()` consulta **el entorno antes que el archivo**, y por eso que el archivo falte no
 * es un error en sí mismo — solo lo es cuando el valor tampoco está en el entorno.
 *
 * Nota: al ser global, todas las suites comparten estos valores. Si alguna vez dos suites
 * necesitan ambientes distintos a la vez, hay que pasar el de la excepción por variable de
 * entorno.
 */
export interface TestData {
  /** Cuándo se generó, en ISO. Lo pone `qa_excel.py read`. */
  generated_at?: string;
  /** Excel de data del que salieron los valores. */
  source?: string;
  /** Mapa token → valor. Las llaves se aceptan con o sin `{}`. */
  tokens: Record<string, string>;
  /** Tokens que la planilla declara pero no tiene resueltos (TBD). */
  tokens_sin_resolver?: string[];
}

/** Lo que se carga en memoria: la data del archivo más si el archivo existía. */
export interface LoadedTestData extends TestData {
  file: string;
  /** true si no había `tests/data.json`: la data solo puede venir del entorno. */
  missing: boolean;
}

const DATA_FILE = path.resolve(process.cwd(), 'tests', 'data.json');
let cached: LoadedTestData | undefined;

/**
 * Carga `tests/data.json`.
 *
 * Que el archivo **no exista** no es un error por sí solo: una corrida puntual puede traer todo
 * por entorno (`BASE_URL=… npx playwright test`), y fallar aquí dejaría inútil justo ese escape.
 * El error se levanta más tarde y solo si un valor concreto falta en los dos sitios.
 *
 * Un archivo presente pero corrupto sí falla de inmediato: eso no es "no hay data", es data en
 * la que no se puede confiar, y seguir sería adivinar.
 */
export function loadTestData(): LoadedTestData {
  if (cached) return cached;

  if (!fs.existsSync(DATA_FILE)) {
    cached = { file: DATA_FILE, tokens: {}, missing: true };
    return cached;
  }

  let parsed: TestData;
  try {
    parsed = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8')) as TestData;
  } catch (e) {
    throw new Error(`La data de prueba (${DATA_FILE}) no es JSON válido: ${e}`);
  }
  if (!parsed.tokens || typeof parsed.tokens !== 'object') {
    throw new Error(
      `La data de prueba (${DATA_FILE}) no trae el objeto 'tokens'.\n` +
        `Formato esperado: { "tokens": { "BASE_URL": "https://..." } }`,
    );
  }

  cached = { ...parsed, file: DATA_FILE, missing: false };
  return cached;
}

/**
 * Valor de un token, con el entorno por encima del archivo.
 *
 * La precedencia es deliberada y cubre dos casos: los secretos, que no se commitean y entran
 * como variables del pipeline; y una corrida puntual contra otro ambiente sin tocar el archivo.
 */
export function token(data: LoadedTestData, name: string): string | undefined {
  const bare = name.replace(/^\{|\}$/g, '');
  const fromEnv = process.env[bare]?.trim();
  if (fromEnv) return fromEnv;
  const value = data.tokens[bare] ?? data.tokens[`{${bare}}`];
  return value?.trim() || undefined;
}

/**
 * El ambiente contra el que corren los specs. Es el token que toda la suite necesita sí o sí.
 *
 * Sin fallback a propósito: un default silencioso mandaría la corrida a un sitio que no es el
 * que se quiere certificar, y los TC fallarían por el motivo equivocado — se pierde tiempo
 * buscando un bug que no existe.
 */
export function baseUrl(data: LoadedTestData): string {
  const value = token(data, 'BASE_URL');
  if (!value) {
    throw new Error(
      data.missing
        ? `No hay ambiente: falta ${data.file}.\n` +
          `Ese archivo lo genera la skill desde el Excel de data del workspace:\n` +
          `  python .claude/skills/qa-executor/scripts/qa_excel.py read --workspace "<workspace>"\n` +
          `O pasa el ambiente solo para esta corrida:  BASE_URL=https://... npx playwright test`
        : `Falta BASE_URL en ${data.file} (generado el ${data.generated_at ?? 'sin fecha'}).\n` +
          `Ese archivo salió del Excel de data ${data.source ?? 'de origen desconocido'}: si ` +
          `tienes el workspace, carga el token ahí y vuelve a correr el read; si el archivo te ` +
          `llegó ya hecho, pídelo corregido a quien lo genera.\n` +
          `Para desbloquear esta corrida: BASE_URL=https://... npx playwright test`,
    );
  }
  return value.replace(/\/+$/, '');
}
