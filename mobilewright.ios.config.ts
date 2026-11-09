import { configApp } from './tests-app/support/configApp';

/**
 * Config de mobilewright para los TC de app nativa en **iOS**.
 *
 *   npx mobilewright test -c mobilewright.ios.config.ts                              # todos los (iOS)
 *   npx mobilewright test -c mobilewright.ios.config.ts --grep TC-B2C69-APP-004      # un TC
 *
 * Dónde corre lo decide `IOS_EN_CLOUD` en `.env`:
 *  - `true` (por defecto): Mobile Next Cloud, dispositivo real. Pide `MOBILENEXT_API_KEY` y el
 *    `.ipa` **firmado para dispositivo** (ad-hoc, development o enterprise) en `{IOS_APP_BUILD}`:
 *    un `.app` de simulador no se instala en un dispositivo real.
 *  - `false`: simulador de iOS de esta Mac (solo macOS, con Xcode). Pide un simulador arrancado
 *    (`xcrun simctl boot "<nombre>"`) y un `.zip` del `.app` de simulador en `{IOS_APP_BUILD}`.
 */
export default configApp('ios');
