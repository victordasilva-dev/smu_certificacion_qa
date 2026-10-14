import { envBool } from '../../tests/support/dotenv.ts';

/**
 * Lo que distingue a cada plataforma de la app, en un solo sitio: lo leen el config de
 * mobilewright, los fixtures y el script de exploración.
 *
 * Los imports de este módulo llevan la extensión `.ts` a propósito: `explorar.ts` lo corre Node
 * directamente (sin transpilar), y Node solo resuelve un import relativo de TypeScript si trae su
 * extensión. El loader de Playwright/mobilewright la acepta igual, así que sirve a los dos.
 */

/**
 * Tokens del Excel de data que identifican la app de cada plataforma.
 *
 * El bundle y el binario son **data de la suite**, igual que `BASE_URL` para la web: cambian con
 * cada build que se certifica, y el que los tiene es la planilla, no la máquina. Por eso salen de
 * `tests/data.json` (que genera `qa_excel.py read`) y no del `.env`. Los nombres son convención
 * del workspace: `qa_excel.py` exige que la fila del TC los declare en su columna `Test data`.
 */
export const TOKENS_APP = {
  ios: { bundle: 'IOS_BUNDLE_ID', build: 'IOS_APP_BUILD' },
  android: { bundle: 'ANDROID_PACKAGE', build: 'ANDROID_APP_BUILD' },
} as const;

/** Sufijo del título del `test()` que lo enruta al project de cada plataforma. */
export const SUFIJO = { ios: /\(iOS\)/, android: /\(Android\)/ } as const;

/**
 * ¿Esta plataforma corre en Mobile Next Cloud?
 *
 * iOS **siempre**: en Windows no hay simulador de iOS, así que la nube no es una opción sino el
 * único camino. Android corre en local por defecto (emulador o equipo por ADB, vía mobilecli), y
 * `ANDROID_EN_CLOUD=true` lo manda a la nube cuando la máquina no tiene emulador o se quiere
 * certificar en hardware real.
 */
export function enNube(plataforma: 'ios' | 'android'): boolean {
  return plataforma === 'ios' || envBool('ANDROID_EN_CLOUD', false);
}

/** `IOS_DEVICE_NAME=iPhone 1[56]` → /iPhone 1[56]/i. Vacío → sin filtro. */
export function filtroDispositivo(plataforma: 'ios' | 'android'): RegExp | undefined {
  const v = process.env[`${plataforma.toUpperCase()}_DEVICE_NAME`]?.trim();
  return v ? new RegExp(v, 'i') : undefined;
}

/** `IOS_OS_VERSION=17` (cualquier 17.x), `26.0` o `>=17 <19`. Vacío → cualquiera. */
export function versionSO(plataforma: 'ios' | 'android'): string | undefined {
  return process.env[`${plataforma.toUpperCase()}_OS_VERSION`]?.trim() || undefined;
}
