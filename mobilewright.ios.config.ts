import { configApp } from './tests-app/support/configApp';

/**
 * Config de mobilewright para los TC de app nativa en **iOS**, siempre en Mobile Next Cloud.
 *
 *   npx mobilewright test -c mobilewright.ios.config.ts                              # todos los (iOS)
 *   npx mobilewright test -c mobilewright.ios.config.ts --grep TC-B2C69-APP-004      # un TC
 *
 * Pide `MOBILENEXT_API_KEY` en `.env` y el `.ipa` **firmado para dispositivo** (ad-hoc,
 * development o enterprise) en el token `{IOS_APP_BUILD}` del Excel de data: los dispositivos de
 * la nube son reales, y un `.app` de simulador no se instala en ellos.
 */
export default configApp('ios');
