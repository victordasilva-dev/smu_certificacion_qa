import { configApp } from './tests-app/support/configApp';

/**
 * Config de mobilewright para los TC de app nativa en **iOS**.
 *
 *   npx mobilewright test -c mobilewright.ios.config.ts                              # todos los (iOS)
 *   npx mobilewright test -c mobilewright.ios.config.ts --grep TC-B2C69-APP-004      # un TC
 *
 * Corre en el **simulador de iOS de una Mac con Xcode** (por ejemplo, una Mac de MacinCloud): la
 * suite se clona y se ejecuta en esa Mac. Pide un simulador arrancado (`xcrun simctl boot
 * "<nombre>"`; `IOS_DEVICE_NAME` filtra cuál) y en `{IOS_APP_BUILD}` un `.zip` del `.app`
 * compilado para simulador (`zip -r App.zip App.app`). En Windows o Linux el config se niega a
 * arrancar: ahí no hay simulador de iOS.
 */
export default configApp('ios');
