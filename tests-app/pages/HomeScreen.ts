import type { Locator } from 'mobilewright';
import { BaseScreen } from './BaseScreen';
import { ListadoScreen } from './ListadoScreen';

/**
 * Home de la app. Verificado en Android, build v1.0.7 (2026-10-06): selector de entrega arriba
 * (`delivery-open`), carrusel de banners y la vitrina "Los más vendidos" con su "Mostrar todo".
 */
export class HomeScreen extends BaseScreen {
  get selectorDeEntrega(): Locator {
    return this.screen.getByTestId('delivery-open');
  }

  /** Título de la primera vitrina: visible solo con la página arriba del todo. */
  get losMasVendidos(): Locator {
    return this.screen.getByText('Los más vendidos');
  }

  get readyLocator(): Locator {
    return this.selectorDeEntrega;
  }

  /** "Mostrar todo" de "Los más vendidos": abre la landing de la categoría de esa vitrina. */
  async tapMostrarTodo(): Promise<ListadoScreen> {
    await this.screen.getByRole('button', { name: 'Mostrar todo' }).first().tap();
    return new ListadoScreen(this.screen, this.plataforma);
  }

  /**
   * Recorre el Home de arriba abajo (B2C-29) hasta que aparece `fin` o deja de haber contenido
   * nuevo. Devuelve los textos del contenido —sin el NavBar de arriba ni la TabBar flotante de
   * abajo— con su posición horizontal, y una captura por pantalla.
   */
  async recorrer(fin: RegExp, maxPantallas = 25): Promise<{ textos: { t: string; x: number; ancho: number }[]; pantallas: Buffer[] }> {
    const textos: { t: string; x: number; ancho: number }[] = [];
    const pantallas: Buffer[] = [];
    let sinNuevos = 0;
    for (let i = 0; i < maxPantallas && sinNuevos < 2; i++) {
      const nodos: { t: string; x: number; y: number; ancho: number }[] = [];
      const visitar = (n: any) => {
        const t = (n.text ?? n.label ?? '').trim();
        const r = n.rect ?? n.bounds;
        const id = String(n.identifier ?? n.resourceId ?? '');
        if (t && r && /TextView|StaticText/.test(String(n.type ?? '')) && !id.startsWith('com.android.systemui')) {
          nodos.push({ t, x: r.x, y: r.y, ancho: r.width });
        }
        for (const c of n.children ?? []) visitar(c);
      };
      for (const n of await this.screen.viewTree()) visitar(n);
      pantallas.push(await this.screen.screenshot());
      // Fuera: el NavBar (arriba) y la TabBar flotante (abajo).
      const contenido = nodos.filter((n) => n.y > 260 && n.y < 2150);
      const antes = textos.length;
      for (const n of contenido) if (!textos.some((v) => v.t === n.t && v.x === n.x)) textos.push({ t: n.t, x: n.x, ancho: n.ancho });
      sinNuevos = textos.length === antes ? sinNuevos + 1 : 0;
      if (contenido.some((n) => fin.test(n.t))) break;
      await this.screen.swipe('up');
    }
    return { textos, pantallas };
  }

  /** Tarjeta de un producto en las vitrinas del Home (`product-<sku>`). */
  producto(sku: string): Locator {
    return this.screen.getByTestId(`product-${sku}`);
  }

  /** "Agregar" de la tarjeta (`product-add-<sku>`); desaparece cuando el producto está en el carro. */
  botonAgregar(sku: string): Locator {
    return this.screen.getByTestId(`product-add-${sku}`);
  }

  /** "+" del stepper de la tarjeta (`product-increment-<sku>`, nombre "Agregar una unidad"). */
  botonSumar(sku: string): Locator {
    return this.screen.getByTestId(`product-increment-${sku}`);
  }

  /**
   * "−" del stepper de la tarjeta: no tiene testID. Con 1 unidad se llama "Quitar del carro" y con
   * más, "Quitar una unidad…"; es el único "Quitar" de la tarjeta.
   */
  botonQuitar(sku: string): Locator {
    return this.producto(sku).getByRole('button', { name: /^quitar/i });
  }

  /**
   * Lleva la tarjeta del SKU a la vista. Está en el carrusel horizontal "Los más vendidos": el
   * scroll vertical la deja asomada por la derecha, con el "Agregar" o el stepper fuera de pantalla,
   * así que además se desliza el carrusel hacia la izquierda hasta que sus botones se vean.
   */
  async mostrarProducto(sku: string): Promise<void> {
    await this.producto(sku).scrollIntoViewIfNeeded();
    for (let i = 0; i < 4; i++) {
      if ((await this.botonAgregar(sku).isVisible({ timeout: 0 })) || (await this.botonSumar(sku).isVisible({ timeout: 0 }))) return;
      // El gesto va sobre la tarjeta más centrada de la misma fila: la del SKU asoma en el borde y
      // deslizar desde ahí no arrastra el carrusel, y desde la de la izquierda el gesto sale de la
      // pantalla ("negative coordinates").
      const fila = await this.tarjetaDeLaMismaFila(sku);
      await this.producto(fila).swipe({ direction: 'left' });
    }
  }

  /** El SKU de la tarjeta más centrada en pantalla de la fila del carrusel donde está `sku`. */
  private async tarjetaDeLaMismaFila(sku: string): Promise<string> {
    const tarjetas: { sku: string; x: number; y: number }[] = [];
    const recorrer = (n: any) => {
      const id = n.identifier ?? n.resourceId ?? '';
      const m = /^product-(\d[\w-]*)$/.exec(id);
      const r = n.rect ?? n.bounds;
      if (m && r) tarjetas.push({ sku: m[1], x: r.x, y: r.y });
      for (const c of n.children ?? []) recorrer(c);
    };
    for (const n of await this.screen.viewTree()) recorrer(n);
    const propia = tarjetas.find((t) => t.sku === sku);
    if (!propia) return sku;
    const fila = tarjetas
      .filter((t) => Math.abs(t.y - propia.y) < 20 && t.x >= 0)
      .sort((a, b) => Math.abs(a.x - 400) - Math.abs(b.x - 400));
    return fila[0]?.sku ?? sku;
  }

  /**
   * Deja el SKU en el carro con al menos una unidad: si la tarjeta ofrece "Agregar", lo agrega; si ya
   * muestra el stepper, no toca nada. Es la precondición "al menos 1 producto en el carrito".
   */
  async asegurarEnCarro(sku: string): Promise<void> {
    await this.mostrarProducto(sku);
    if (await this.botonAgregar(sku).isVisible({ timeout: 3000 })) await this.botonAgregar(sku).tap();
    await this.botonSumar(sku).waitFor({ state: 'visible', timeout: 20000 });
  }

  /** Desplaza el contenido hacia abajo (gesto hacia arriba). */
  async desplazarHaciaAbajo(veces = 2): Promise<void> {
    for (let i = 0; i < veces; i++) await this.screen.swipe('up');
  }
}
