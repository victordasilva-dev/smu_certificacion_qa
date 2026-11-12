import { configApp } from './tests-app/support/configApp';

/**
 * Config de mobilewright para los TC de app nativa en **Android**.
 *
 *   npx mobilewright test                              # todos los (Android) de tests-app/
 *   npx mobilewright test --grep TC-B2C69-APP-004      # un TC, por CP-ID
 *
 * Corre en local: el emulador o el equipo conectado por ADB, vía mobilecli. iOS tiene su propio
 * config, `mobilewright.ios.config.ts`, porque corre en otra máquina —el simulador de una Mac— (el
 * porqué completo está en tests-app/support/configApp.ts).
 *
 * Este es el `mobilewright.config.ts` —el nombre que mobilewright busca sin `-c`— y es Android a
 * propósito: además de ser el que corre en local, que es lo que los comandos de mobilewright
 * (`screenshot`, `inspect`) esperan, su existencia es lo que impide que `npx mobilewright test` a
 * secas caiga en el `playwright.config.ts` de la web y corra los specs web como si fueran de app.
 */
export default configApp('android');
