import type { Locator, Screen } from 'mobilewright';
import type { Plataforma } from '../../tests/support/rutasEvidencia';
import { BaseScreen } from './BaseScreen';
import { esIconoMas, proporcionClara } from '../support/pixeles';

/**
 * NavBar superior de la app (HU B2C-23). Verificado en Android, build v1.0.7 (2026-10-06):
 *
 * - Sección Método de entrega: `delivery-open`, a todo el ancho, con icono de moto, el texto
 *   ("Elige una forma de entrega" sin método) y un icono a la derecha.
 * - Debajo, un carrusel con el botón Membresía ("Suscríbete a UNIMARC") y los accesos directos
 *   del content asset de BM (hoy Ofertas, Marketplace, Locales y horarios).
 *
 * Los iconos no están en el árbol de accesibilidad: se leen de la captura.
 */
export class NavBar extends BaseScreen {
  constructor(screen: Screen, plataforma: Plataforma) {
    super(screen, plataforma);
  }

  get metodoDeEntrega(): Locator {
    return this.screen.getByTestId('delivery-open');
  }

  get readyLocator(): Locator {
    return this.metodoDeEntrega;
  }

  get textoSinMetodo(): Locator {
    return this.screen.getByText('Elige una forma de entrega');
  }

  /** Botón Membresía: "Suscríbete a UNIMARC" (sin membresía) o "Ver mi suscripción". */
  get botonMembresia(): Locator {
    return this.screen.getByText(/suscr[ií]bete a|ver mi suscripci[oó]n/i).first();
  }

  /** Popup de método de entrega ("Elige tu método de entrega"). */
  get popupMetodoDeEntrega(): Locator {
    return this.screen.getByText(/m[eé]todo de entrega/i);
  }

  async tapMetodoDeEntrega(): Promise<void> {
    await this.metodoDeEntrega.tap();
  }

  async cerrarPopup(): Promise<void> {
    await this.screen.getByText('✕').first().tap();
  }

  /**
   * Accesos directos: los chips del carrusel a la derecha del botón Membresía, en su misma fila.
   * Sus nombres los define el content asset de BM, por eso se leen de la pantalla.
   */
  async accesosDirectos(): Promise<string[]> {
    const membresia = await this.screen.getByText(/suscr[ií]bete a/i).first().boundingBox();
    const textos = await this.screen.getByRole('text').all();
    const nombres: string[] = [];
    for (const t of textos) {
      const c = await t.boundingBox({ timeout: 0 }).catch(() => null);
      const mismaFila = c && Math.abs(c.y + c.height / 2 - (membresia.y + membresia.height / 2)) < 30;
      if (c && mismaFila && c.x > membresia.x + membresia.width) {
        nombres.push(await t.getText({ timeout: 0 }));
      }
    }
    return nombres;
  }

  /** ¿El icono a la derecha de la sección Método de entrega es un "+"? */
  async iconoDerechoEsMas(): Promise<{ esMas: boolean; detalle: string }> {
    const caja = await this.metodoDeEntrega.boundingBox();
    const png = await this.screen.screenshot();
    const ancho = Math.round(caja.width * 0.11);
    return esIconoMas(png, {
      left: Math.round(caja.x + caja.width - ancho),
      top: Math.round(caja.y),
      width: ancho,
      height: Math.round(caja.height),
    });
  }

  /** Proporción de fondo claro de la franja del NavBar en una captura (0..1). */
  static async franjaClara(png: Buffer, caja: { x: number; y: number; width: number; height: number }) {
    return proporcionClara(png, {
      left: Math.round(caja.x), top: Math.round(caja.y), width: Math.round(caja.width), height: Math.round(caja.height),
    });
  }
}
