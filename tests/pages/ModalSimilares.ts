import { Locator, Page } from '@playwright/test';
import { capturarEvidencia } from '../support/evidencia';

/** Recuadro del panel y del viewport, medidos sobre el render real. */
export interface GeometriaDelPanel {
  x: number;
  y: number;
  ancho: number;
  alto: number;
  anchoViewport: number;
  altoViewport: number;
  /** ¿Hay un overlay de Chakra visible detrás del panel? */
  conOverlay: boolean;
}

/**
 * Modal "Ver similares" (B2C-40): el que abre el botón "Ver similares" de un producto sin stock.
 *
 * Es un componente, no una página navegable: no extiende `BasePage`.
 *
 * Es un Drawer de Chakra: **panel lateral derecho** en Desktop (448 px de ancho y alto completo,
 * pegado al borde derecho) y **panel inferior** en Mobile (ancho completo, anclado abajo, con la
 * página visible por encima). Comparte `role="dialog"` con el drawer del Store Locator, el de
 * login y el de categorías, así que se filtra por su propio encabezado, "Productos similares",
 * y por el bloque "Estás reemplazando:", que solo tiene este modal.
 */
export class ModalSimilares {
  readonly root: Locator;

  constructor(private readonly page: Page) {
    this.root = page
      .locator('[role="dialog"]')
      .filter({ hasText: /est[áa]s reemplazando/i })
      .locator('visible=true')
      .first();
  }

  get titulo(): Locator {
    return this.root.getByText(/^productos similares$/i).first();
  }

  /** Botón de cierre del encabezado. Su nombre accesible es "Close" (el de Chakra, sin traducir). */
  get botonCerrar(): Locator {
    return this.root.getByRole('button', { name: /^(close|cerrar)$/i });
  }

  /** "Estás reemplazando:" + miniatura y "Marca | Nombre" del producto sin stock. */
  get referenciaOriginal(): Locator {
    return this.root.getByText(/est[áa]s reemplazando/i);
  }

  /** Los botones "Agregar" de los similares: uno por tarjeta de la lista. */
  get botonesAgregar(): Locator {
    return this.root.getByRole('button', { name: /^agregar$/i });
  }

  get botonReemplazar(): Locator {
    return this.root.getByRole('button', { name: /reemplazar productos?/i });
  }

  async esperarAbierto(): Promise<this> {
    await this.titulo.waitFor({ state: 'visible', timeout: 30000 });
    return this;
  }

  /** Nombre "Marca | Nombre" del producto que se está reemplazando. */
  async nombreDelOriginal(): Promise<string> {
    const bloque = this.referenciaOriginal.locator('xpath=..');
    const lineas = (await bloque.innerText()).split('\n').map((l) => l.trim()).filter(Boolean);
    return lineas.find((l) => / \| /.test(l)) ?? '';
  }

  /**
   * Dónde quedó el panel respecto del viewport, y si hay overlay detrás. Es lo que distingue un
   * "sidebar lateral derecho" (Desktop) de un "bottom sheet" (Mobile) sin depender de clases de
   * Chakra: el primero toca el borde derecho con alto completo; el segundo toca el borde inferior
   * con ancho completo y deja ver la página arriba.
   */
  async geometria(): Promise<GeometriaDelPanel> {
    const caja = await this.root.boundingBox();
    if (!caja) throw new Error('El modal "Ver similares" no tiene recuadro: no está renderizado');
    const vp = this.page.viewportSize() ?? { width: 0, height: 0 };
    const conOverlay = await this.page.locator('.chakra-modal__overlay').locator('visible=true').count() > 0;
    return {
      x: Math.round(caja.x),
      y: Math.round(caja.y),
      ancho: Math.round(caja.width),
      alto: Math.round(caja.height),
      anchoViewport: vp.width,
      altoViewport: vp.height,
      conOverlay,
    };
  }

  async capturar(cpId: string, paso?: number | string, etiqueta?: string, destino: Locator | Page = this.root): Promise<string> {
    return capturarEvidencia(destino, cpId, paso, etiqueta);
  }
}
