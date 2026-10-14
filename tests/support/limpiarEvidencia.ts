import * as fs from 'fs';
import * as path from 'path';
import type { FullConfig } from '@playwright/test';
import { EVIDENCE_DIR, esEvidenciaDeApp } from './rutasEvidencia';

/**
 * Vacía de `test-results/evidence/` la evidencia **web** al arrancar una corrida **completa**.
 * La de los TC de app nativa no se toca: es de otro runner (ver `vaciarEvidencia`).
 *
 * Existe por una consecuencia del `outputDir` propio de Playwright (`test-results/pw`): al sacar
 * la evidencia de su terreno, dejó de heredar la limpieza que él hacía, y las capturas de una
 * corrida vivirían para siempre. Eso es peor que perderlas: el JSON de corrida recoge las capturas
 * del disco por nombre, así que una imagen de la semana pasada entraría en el Word de hoy sin que
 * nada lo delate —un documento que el cliente lee como la evidencia de esta certificación—.
 *
 * **Pero no borra nada cuando la corrida está filtrada.** Re-ejecutar un caso que quedó dudoso
 * (`-g TC-B2C87-D-008`) es parte normal del flujo, y con un borrado indiscriminado esa pasada se
 * llevaba por delante la evidencia de los otros veinticinco TC: el Word quedaba con un solo caso
 * ilustrado y había que repetir la suite entera de media hora para recuperarla. En una corrida
 * filtrada la limpieza la hace, caso por caso, el fixture `evidenciaDelCaso` de `fixtures.ts`:
 * cada test borra lo suyo justo antes de generarlo, así que lo que se reemplaza es exactamente lo
 * que se vuelve a ejecutar y lo demás queda intacto.
 *
 * Se borra al empezar y no al terminar a propósito: si la corrida se corta a la mitad, lo que
 * quedó en disco es de esa corrida y sirve para entender qué pasó.
 */
async function limpiarEvidencia(_config: FullConfig): Promise<void> {
  if (corridaFiltrada()) return;
  // La web solo barre lo suyo: las capturas de los TC de app las deja mobilewright, que es otro
  // runner y corre en otro momento. Sin este filtro, correr la web después de la app se llevaba
  // la evidencia de la app, y el Word de la corrida quedaba con esos casos sin ilustrar.
  await vaciarEvidencia((archivo) => !esEvidenciaDeApp(archivo));
}

/**
 * Borra de `test-results/evidence/` los archivos que cumplan el filtro, y deja el resto.
 *
 * Existe porque hay dos runners escribiendo en la misma carpeta —Playwright para la web y
 * mobilewright para la app nativa—, y cada uno corre cuando le toca. La limpieza en bloque de
 * uno no puede tocar lo del otro: por eso el filtro, y por eso ninguno hace `rm -rf` de la carpeta.
 */
export async function vaciarEvidencia(filtro: (archivo: string) => boolean): Promise<void> {
  const dir = path.resolve(process.cwd(), EVIDENCE_DIR);
  // Que no exista es el caso normal de la primera corrida, no un error.
  await fs.promises.mkdir(dir, { recursive: true });
  const archivos = await fs.promises.readdir(dir);
  await Promise.all(
    archivos.filter(filtro).map((f) => fs.promises.rm(path.join(dir, f), { recursive: true, force: true })),
  );
}

/** Banderas de la CLI que acotan la corrida a una parte de la suite. */
const BANDERAS_QUE_FILTRAN = [
  '-g',
  '--grep',
  '--grep-invert',
  '-p',
  '--project',
  '--last-failed',
  '--shard',
  '--only-changed',
];

/**
 * ¿Esta corrida ejecuta solo una parte de la suite?
 *
 * **Se lee de `process.argv` y no de la configuración**, aunque parezca lo natural. El `--grep`
 * de la línea de comandos no llega a la `FullConfig` que recibe el `globalSetup`: Playwright lo
 * aplica más adelante, al seleccionar los tests, y aquí `config.grep` sigue valiendo `/.*​/`
 * aunque se haya pasado `-g`. Comprobado en 1.61.1 con `-g TC-B2C87-D-017`: la config llegaba sin
 * filtrar y la evidencia de los otros veinticinco casos se borraba igual. Los argumentos crudos
 * son la única señal disponible en este punto del arranque.
 *
 * No cuenta como filtrar **pasar el archivo de la suite** (`npx playwright test tests/B2C-87.spec.ts`):
 * la suite es la unidad de una corrida completa y nombrar su archivo es la forma normal de correrla
 * entera.
 *
 * `QA_EVIDENCIA_PARCIAL=1` queda como salida explícita para cualquier forma de acotar que no esté
 * en la lista. Ante la duda conviene pasarlo: conservar evidencia de más se nota al revisar el
 * Word, y borrarla de menos obliga a repetir la suite entera.
 */
export function corridaFiltrada(argv: string[] = process.argv.slice(2)): boolean {
  if (process.env.QA_EVIDENCIA_PARCIAL === '1') return true;

  return argv.some((arg) =>
    BANDERAS_QUE_FILTRAN.some((bandera) => arg === bandera || arg.startsWith(`${bandera}=`)),
  );
}

export default limpiarEvidencia;
