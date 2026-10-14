// Viewports que declaran los TC en su columna Precondiciones. Los valores salen del TC,
// no al revés: si otra suite valida en 1366x768, esas son otras constantes. Estas existen
// solo para no repetir los números en cada describe. El motor de navegador NO va aquí — lo
// pone el project desde .env.
//
// Se aplican con test.use() en un describe ANIDADO por form-factor, dentro del describe raíz
// de la suite. No es un capricho de estilo: test.use() no se puede llamar dentro de un test(),
// solo a nivel de archivo o de describe, y como toda la suite vive en un archivo
// (tests/<SUITE>.spec.ts), agrupar por viewport es lo que permite que los TC Desktop y Mobile
// convivan sin pisarse el uno al otro:
//
//   test.describe('B2C-69 — …', () => {
//     test.describe('Desktop 1440x900', () => {
//       test.use(DESKTOP);
//       test('TC-B2C69-D-002 · … (Desktop)', async ({ page }) => { … });
//     });
//     test.describe('Mobile 390x844', () => {
//       test.use(MOBILE);
//       test('TC-B2C69-M-009 · … (Mobile)', async ({ page }) => { … });
//     });
//   });
export const DESKTOP = { viewport: { width: 1440, height: 900 } };
export const MOBILE = { viewport: { width: 390, height: 844 } };

/**
 * Desktop 1280x900 — el viewport que declaran los TC de B2C-59 en sus precondiciones.
 *
 * Convive con `DESKTOP` (1440x900) a propósito: el número sale de la fila del TC, no de una
 * constante universal, y dos suites pueden certificar anchos distintos del mismo componente.
 */
export const DESKTOP_1280 = { viewport: { width: 1280, height: 900 } };
