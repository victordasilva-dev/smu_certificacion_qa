import type { Device, Screen } from 'mobilewright';
import type { Plataforma } from '../../tests/support/rutasEvidencia';
import { analizarSplash } from '../support/pixeles';

/**
 * Splash de la app (HU B2C-67). Verificado en Android, build v1.0.7 (2026-10-06):
 *
 * - En cold start se ve primero un cuadro blanco y luego, con fundido, una fotografía de marca a
 *   sangre con el logo Unimarc al centro; dura ~3 s y cada arranque muestra 1-2 imágenes.
 * - No está en el árbol de accesibilidad: es una capa sobre el Home, que ya está montado debajo
 *   (con NavBar y TapBar). Por eso se reconoce y se lee en la captura.
 *
 * No extiende BaseScreen: no hay locator que confirme que está lista.
 */
export class SplashScreen {
  constructor(
    private readonly screen: Screen,
    private readonly device: Device,
    private readonly plataforma: Plataforma,
  ) {}

  /** Cierra la app del todo y la vuelve a abrir (cold start). */
  async coldStart(bundleId: string): Promise<void> {
    await this.device.terminateApp(bundleId);
    await this.device.launchApp(bundleId);
  }

  /** Abre la app sin cerrarla antes: la trae de segundo plano. */
  async reanudar(bundleId: string): Promise<void> {
    await this.device.launchApp(bundleId);
  }

  async minimizar(): Promise<void> {
    await this.screen.pressButton('HOME');
  }

  /** Captura de la pantalla con su lectura como Splash. */
  async fotografiar() {
    const png = await this.screen.screenshot();
    return { png, ...(await analizarSplash(png)) };
  }

  /**
   * ¿La captura es el Splash? Solo por el logo rojizo al centro (el Home da 0 ahí y el cuadro blanco
   * previo también). Los bordes no entran: son lo que el TC verifica después.
   */
  static esSplash(foto: { logo: number }): boolean {
    return foto.logo > 0.3;
  }
}
