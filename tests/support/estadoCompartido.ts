import * as fs from 'fs';
import * as path from 'path';
import type { Browser, BrowserContext, BrowserContextOptions, Page } from '@playwright/test';
import type { LoadedTestData } from './testData';

/**
 * Sesión y dirección preparadas UNA vez por corrida, no una vez por `test()`.
 *
 * Iniciar sesión con OTP cuesta 1-2 min por caso (pedir el código, que el agente lo lea en Gmail,
 * escribirlo) y fijar una dirección de despacho pasa por el mapa y sus sugerencias. Repetirlo en
 * cada `test()` multiplica ese costo, gasta correos —el sitio puede limitar los envíos— y abre
 * carreras: dos casos pidiendo código para la misma cuenta se pisan el OTP.
 *
 * `estadoCompartido` hace la preparación la primera vez, guarda el `storageState` (cookies +
 * localStorage) en `.qa/auth/<clave>.json` y se lo entrega a todos los casos que pidan la misma
 * clave mientras siga vigente (`QA_SESION_TTL_MIN`, 30 min por defecto). Un candado en disco
 * serializa la preparación entre workers: el segundo worker espera al primero en vez de pedir otro
 * código.
 *
 * Uso típico, en el describe de los casos que comparten cuenta (y dirección):
 *
 *   test.describe('con la cuenta con membresía', () => {
 *     test.use({
 *       storageState: conEstado('miembro', async (page, data) => {
 *         await page.goto('/');
 *         await loginConOtp(page, token(data, 'COMPRADOR_MEMBRESIA_USER')!);
 *       }),
 *     });
 *     test('TC-...-017 · ... (Desktop)', async ({ page }) => { ... });   // ya logueado
 *   });
 *
 * La clave nombra el estado, y dos estados distintos llevan claves distintas: `miembro`,
 * `invitado-dir-lo-barnechea`, `comprador-dir-las-condes`. El estado no depende del viewport ni del
 * motor (es un JSON de cookies y storage), así que Desktop y Mobile comparten la misma clave.
 *
 * `.qa/auth/` está en `.gitignore`: el archivo lleva la sesión viva de la cuenta.
 */
export const DIR_ESTADOS = '.qa/auth';

export interface OpcionesEstado {
  /** Vigencia en minutos; por defecto `QA_SESION_TTL_MIN` o 30. */
  ttlMin?: number;
  /** Opciones del contexto donde se prepara el estado (baseURL, viewport, userAgent…). */
  contexto?: BrowserContextOptions;
}

const slug = (clave: string) => clave.replace(/[^a-z0-9._-]+/gi, '-').toLowerCase();
export const rutaEstado = (clave: string) => path.resolve(process.cwd(), DIR_ESTADOS, `${slug(clave)}.json`);

function vigente(ruta: string, ttlMin: number): boolean {
  try {
    return Date.now() - fs.statSync(ruta).mtimeMs < ttlMin * 60_000;
  } catch {
    return false;
  }
}

const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Borra el estado guardado: el próximo caso que lo pida lo vuelve a preparar. */
export function invalidarEstado(clave: string): void {
  fs.rmSync(rutaEstado(clave), { force: true });
}

/**
 * Devuelve la ruta de un `storageState` vigente para `clave`, preparándolo con `preparar` si no
 * existe o venció. Seguro entre workers: solo uno prepara; los demás esperan su resultado.
 */
export async function estadoCompartido(
  browser: Browser,
  clave: string,
  preparar: (page: Page) => Promise<void>,
  opciones: OpcionesEstado = {},
): Promise<string> {
  const ttlMin = opciones.ttlMin ?? Number(process.env.QA_SESION_TTL_MIN || 30);
  const ruta = rutaEstado(clave);
  if (vigente(ruta, ttlMin)) return ruta;

  await fs.promises.mkdir(path.dirname(ruta), { recursive: true });
  const candado = `${ruta}.lock`;
  const limite = Date.now() + 10 * 60_000; // una preparación con OTP no debería pasar de esto
  for (;;) {
    try {
      await fs.promises.mkdir(candado); // atómico: lo crea uno solo
      break;
    } catch {
      if (vigente(ruta, ttlMin)) return ruta; // otro worker lo terminó mientras esperábamos
      if (Date.now() > limite) {
        // Un candado huérfano (un worker que murió preparando) no puede trabar la corrida entera.
        await fs.promises.rm(candado, { recursive: true, force: true });
        continue;
      }
      await dormir(1000);
    }
  }

  try {
    if (vigente(ruta, ttlMin)) return ruta;
    const contexto = await browser.newContext(opciones.contexto);
    try {
      const page = await contexto.newPage();
      await preparar(page);
      await contexto.storageState({ path: ruta });
    } finally {
      await contexto.close();
    }
    return ruta;
  } finally {
    await fs.promises.rm(candado, { recursive: true, force: true });
  }
}

/**
 * Aplica un estado guardado a un contexto YA abierto: cookies ahora, y localStorage en cada
 * navegación al origen (solo las claves que el sitio todavía no tiene, para no pisar lo que el
 * caso cambie después).
 *
 * Es para el caso que no puede declarar el estado en `test.use` porque lo necesita a mitad de
 * camino —un helper como `pdpConDireccion(page, …)` que hoy fija la dirección por el mapa—:
 *
 *   const ruta = await estadoCompartido(page.context().browser()!, `invitado-dir-${dir}`, fijarDireccion, { contexto });
 *   await aplicarEstado(page.context(), ruta);
 *   await page.goto('/product/…');   // ya con la dirección puesta
 */
export async function aplicarEstado(contexto: BrowserContext, ruta: string): Promise<void> {
  const estado = JSON.parse(await fs.promises.readFile(ruta, 'utf-8')) as {
    cookies?: Parameters<BrowserContext['addCookies']>[0];
    origins?: { origin: string; localStorage: { name: string; value: string }[] }[];
  };
  if (estado.cookies?.length) await contexto.addCookies(estado.cookies);
  for (const o of estado.origins ?? []) {
    await contexto.addInitScript(
      ({ origin, items }) => {
        if (location.origin !== origin) return;
        for (const { name, value } of items) if (localStorage.getItem(name) === null) localStorage.setItem(name, value);
      },
      { origin: o.origin, items: o.localStorage },
    );
  }
}

/**
 * La misma preparación como valor de `test.use({ storageState })`: un fixture que resuelve el
 * estado con el `browser` y la data del caso.
 *
 * La preparación corre en un contexto **Desktop neutro** (solo el baseURL del caso), no en el
 * viewport del caso: el estado se comparte entre Desktop y Mobile, y el primero que llega lo
 * prepara. Si lo hiciera en Mobile, un login escrito contra el header de Desktop fallaría
 * (comprobado: "Ingresa aquí" es solo un ícono en 390 px) y dejaría a todos sin sesión.
 */
export function conEstado(
  clave: string,
  preparar: (page: Page, data: LoadedTestData) => Promise<void>,
  ttlMin?: number,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async ({ browser, testData, baseURL }: any, use: (r: string) => Promise<void>) => {
    const ruta = await estadoCompartido(browser, clave, (page) => preparar(page, testData), {
      ttlMin,
      contexto: { baseURL, viewport: { width: 1280, height: 900 } },
    });
    await use(ruta);
  };
}
