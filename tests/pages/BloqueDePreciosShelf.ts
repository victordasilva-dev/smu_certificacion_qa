import { Locator, Page } from '@playwright/test';

/** Un precio tal como lo renderiza el shelf, con su PPUM y su tratamiento visual. */
export interface PrecioRenderizado {
  /** El texto literal del shelf: `$3.890`, `$7.690 c/u`, `Lleva 2 por $12.490`, `3 por 2 a $4.900`. */
  texto: string;
  /** Qué mecánica representa el formato del texto. */
  tipo: 'unitario' | 'nxprecio' | 'nxm' | 'antes';
  /** El importe en pesos, ya sin separadores de miles. */
  importe: number;
  /** Cuántas unidades cubre el importe: 1 en el unitario, N en `Lleva N por $X` y en `N por M a $X`. */
  unidades: number;
  /** El PPUM que acompaña a este precio, o `null` si el shelf no lo renderiza. */
  ppum: { texto: string; importe: number; unidad: string } | null;
  /** Si es el precio de membresía: el rombo a su izquierda y el verde petróleo del diseño. */
  deSocio: boolean;
  fontSize: number;
  fontWeight: number;
  color: string;
  tachado: boolean;
}

/**
 * Bloque de precios de un shelf de la PLP/SRP — el objeto de la HU B2C-62.
 *
 * Es un **componente** dentro de otro componente: cuelga del shelf que modela
 * {@link ShelfProducto} y no de una página, así que no extiende `BasePage`. Se construye con el
 * `root` del shelf, que `ShelfProducto` ancla en el botón de favoritos.
 *
 * **Los precios se clasifican por el formato de su texto, no por su tamaño de fuente.** Los tres
 * formatos —`$X`/`$X c/u`, `Lleva N por $X` y `N por M a $X`— dicen sin ambigüedad qué mecánica
 * representa cada importe, mientras que el tamaño solo dice cuál se destacó: son cosas distintas,
 * y justamente la HU pide comprobar que el destacado es el correcto. Clasificar por estilo haría
 * que el POM diera por buena la jerarquía que el `test()` tiene que auditar.
 *
 * El PPUM se empareja **por orden del DOM**: cada importe arrastra el suyo inmediatamente a su
 * derecha, y contar los PPUM es la forma más barata de saber cuántos precios hay renderizados.
 */
export class BloqueDePreciosShelf {
  constructor(
    private readonly page: Page,
    /** El shelf al que pertenece el bloque: `ShelfProducto.root`. */
    readonly shelf: Locator,
  ) {}

  /** El verde petróleo con que el diseño pinta el precio de socio. */
  static readonly VERDE_SOCIO = 'rgb(8, 59, 61)';

  /** El rombo que marca el precio de membresía. Es un emoji de texto, no un `img` ni un `svg`. */
  get rombo(): Locator {
    return this.shelf.getByText('\u{1F48E}');
  }

  /** Los importes del bloque, cada uno como hoja de texto. */
  get precios(): Locator {
    return this.shelf
      .locator('p,div,span')
      .filter({ hasText: /^(Antes:\s*)?(\$[\d.]+( c\/u)?|Lleva \d+ por \$[\d.]+|\d+ por \d+ a \$[\d.]+)$/ });
  }

  /** Los PPUM: uno por precio, entre paréntesis y con su unidad. */
  get ppums(): Locator {
    return this.shelf.locator('p').filter({ hasText: /^\(\$[\d.]+ x .+\)$/ });
  }

  /**
   * Badge con el porcentaje de descuento.
   *
   * Se busca **dentro del bloque de precios** y no en el shelf entero: los nombres de producto
   * traen porcentajes ("Carne molida 4% grasa"), y un locator sobre la tarjeta completa daría por
   * encontrado un badge de descuento que no existe — el falso positivo más caro de esta suite,
   * porque convertiría un producto sin promoción en uno con promoción.
   */
  get badgeDeDescuento(): Locator {
    return this.shelf
      .locator('p,div,span')
      .filter({ hasText: /^-?\d{1,3}%(\s*dcto)?$/i })
      .filter({ hasNotText: / \| / });
  }

  /** Label de medio de pago junto al precio (Unipay, Banco Estado). */
  get labelMedioDePago(): Locator {
    return this.shelf.getByText(/unipay|banco\s*estado/i);
  }

  /** Equivalencia aproximada de unidades de un producto pesable ("500 g ≈ 2 a 3 tomates"). */
  get equivalenciaDeUnidades(): Locator {
    return this.shelf.locator('p,div,span').filter({ hasText: /≈|aprox/i });
  }

  // ------------------------------------------------------------------ lecturas

  /**
   * Todos los precios del bloque, en el orden en que se renderizan, con su PPUM y su estilo.
   *
   * El emparejamiento precio → PPUM se hace recorriendo las hojas en orden del DOM: el PPUM que
   * sigue a un importe es el suyo. Es lo que se observó en los dos viewports y en las tres
   * mecánicas presentes en el ambiente, y es más estable que emparejar por coordenadas, que se
   * rompe en cuanto una fila envuelve.
   */
  async leerPrecios(): Promise<PrecioRenderizado[]> {
    return this.shelf.evaluate((shelf) => {
      const RE_PRECIO = /^(Antes:\s*)?(\$[\d.]+( c\/u)?|Lleva \d+ por \$[\d.]+|\d+ por \d+ a \$[\d.]+)$/;
      const RE_PPUM = /^\(\$([\d.]+) x (.+)\)$/;
      const ROMBO = '\u{1F48E}';
      const aNumero = (t: string) => Number((t.match(/\$([\d.]+)/)?.[1] ?? '0').replace(/\./g, ''));

      const hojas = [...shelf.querySelectorAll('p,div,span')].filter(
        (e) => e.children.length === 0 && (e.textContent ?? '').trim(),
      );

      const precios: PrecioRenderizado[] = [];
      let romboPendiente = false;

      for (const el of hojas) {
        const texto = (el.textContent ?? '').trim();

        if (texto === ROMBO) {
          romboPendiente = true;
          continue;
        }

        const ppum = texto.match(RE_PPUM);
        if (ppum && precios.length) {
          const ultimo = precios[precios.length - 1];
          if (!ultimo.ppum) {
            ultimo.ppum = {
              texto,
              importe: Number(ppum[1].replace(/\./g, '')),
              unidad: ppum[2].trim(),
            };
          }
          continue;
        }

        if (!RE_PRECIO.test(texto)) continue;

        const cs = getComputedStyle(el);
        const nxprecio = texto.match(/^Lleva (\d+) por/);
        const nxm = texto.match(/^(\d+) por (\d+) a/);
        precios.push({
          texto,
          tipo: /^Antes:/.test(texto)
            ? 'antes'
            : nxprecio
              ? 'nxprecio'
              : nxm
                ? 'nxm'
                : 'unitario',
          importe: aNumero(texto),
          unidades: Number(nxprecio?.[1] ?? nxm?.[1] ?? 1),
          ppum: null,
          // El rombo precede al precio de socio en el DOM; el color lo confirma cuando el emoji
          // no se renderiza como hoja propia (pasa según la fuente del sistema).
          deSocio: romboPendiente || cs.color === 'rgb(8, 59, 61)',
          fontSize: parseFloat(cs.fontSize),
          fontWeight: Number(cs.fontWeight),
          color: cs.color,
          tachado: cs.textDecorationLine.includes('line-through'),
        });
        romboPendiente = false;
      }

      return precios;
    }) as Promise<PrecioRenderizado[]>;
  }

  /**
   * El precio que el shelf destaca: el de mayor tamaño de fuente, y a igualdad el primero.
   *
   * Es la lectura de "precio principal" que pide la HU. No se resuelve por posición —el orden
   * vertical no es jerarquía— sino por el tamaño, que es lo que el ojo lee primero.
   */
  async precioDestacado(): Promise<PrecioRenderizado | null> {
    const precios = await this.leerPrecios();
    if (!precios.length) return null;
    return precios.reduce((a, b) => (b.fontSize > a.fontSize ? b : a));
  }

  /** Cuántos precios hay renderizados a la vez. */
  async cantidadDePrecios(): Promise<number> {
    return (await this.leerPrecios()).length;
  }

  /** ¿Este shelf tiene alguna mecánica promocional visible? */
  async tienePromocion(): Promise<boolean> {
    const precios = await this.leerPrecios();
    return (
      precios.length > 1 ||
      precios.some((p) => p.tipo !== 'unitario' || p.deSocio) ||
      (await this.badgeDeDescuento.count()) > 0
    );
  }

  /** El resumen del bloque en una línea, para las observaciones del reporte. */
  async resumen(): Promise<string> {
    const precios = await this.leerPrecios();
    return precios
      .map((p) => `${p.deSocio ? '[socio] ' : ''}${p.texto}${p.ppum ? ` ${p.ppum.texto}` : ''}`)
      .join(' · ');
  }

  /**
   * La cantidad del producto expresada en la unidad estándar del PPUM, leída del label de formato.
   *
   * Es lo que permite recalcular el PPUM a mano —precio / cantidad— y comprobar que el shelf lo
   * calcula sobre el precio que corresponde. Devuelve `null` cuando el producto no trae label:
   * sin él no hay cálculo posible y el `test()` debe elegir otro producto, no inventar el gramaje.
   */
  async cantidadEnUnidadEstandar(): Promise<{ cantidad: number; unidad: string } | null> {
    return this.shelf.evaluate((shelf) => {
      const hojas = [...shelf.querySelectorAll('p,div,span')]
        .filter((e) => e.children.length === 0)
        .map((e) => (e.textContent ?? '').trim());
      const label = hojas.find((t) => /^[\d.,]+\s*(kg|g|gr|lt|l|ml|cc|un)\.?$/i.test(t));
      if (!label) return null;
      const [, valor, unidad] = label.match(/^([\d.,]+)\s*(kg|g|gr|lt|l|ml|cc|un)\.?$/i)!;
      const numero = Number(valor.replace(',', '.'));
      const u = unidad.toLowerCase();
      if (u === 'kg') return { cantidad: numero, unidad: 'kg' };
      if (u === 'g' || u === 'gr') return { cantidad: numero / 1000, unidad: 'kg' };
      if (u === 'lt' || u === 'l') return { cantidad: numero, unidad: 'lt' };
      if (u === 'ml' || u === 'cc') return { cantidad: numero / 1000, unidad: 'lt' };
      return { cantidad: numero, unidad: 'un' };
    });
  }
}
