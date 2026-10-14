import { Locator, Page } from '@playwright/test';

/**
 * Panel de filtros de la PLP/SRP/Colección — el objeto de la HU B2C-71.
 *
 * Es un componente, no una página: se abre desde la PLP y no tiene URL propia, por eso no
 * extiende `BasePage` (no habría `path` ni `goto()` que significaran nada).
 *
 * El mismo componente se presenta como panel lateral en Desktop y como drawer inferior en
 * Mobile, **con la misma clase CSS en los dos**. La diferencia se mide con la geometría
 * (`geometria()`), no se lee de una clase ni de un breakpoint.
 */
export class PanelFiltros {
  constructor(private readonly page: Page) {}

  /**
   * La raíz del panel.
   *
   * Se filtra por su encabezado y no por `role=dialog` a secas porque la página tiene otros dos
   * diálogos: el dropdown de orden y un `chakra-popover__content` **vacío** que el header deja
   * montado. Un locator por rol resuelve a cualquiera de ellos —y con el popover vacío todo lo
   * que cuelgue sale vacío sin dar ningún error, que es la forma más silenciosa de dar por bueno
   * un TC que no miró nada.
   */
  get root(): Locator {
    return this.page.locator('[role="dialog"]').filter({ hasText: /selecciona tus filtros/i });
  }

  get header(): Locator {
    return this.root.locator('header');
  }

  get titulo(): Locator {
    return this.root.getByText(/selecciona tus filtros/i).first();
  }

  /** La X del header. El accessible name viene en inglés ("Close"), no "Cerrar". */
  get botonCerrar(): Locator {
    return this.root.getByRole('button', { name: /close|cerrar/i });
  }

  /** Cuerpo con scroll interno independiente del resto de la página. */
  get cuerpo(): Locator {
    return this.root.locator('.chakra-modal__body');
  }

  get footer(): Locator {
    return this.root.locator('footer');
  }

  /**
   * El botón de aplicar.
   *
   * Se busca por su posición en el footer y no por texto: durante el recálculo el botón se queda
   * **sin texto** —su contenido pasa a ser la animación de tres puntos—, así que un locator por
   * `name: /mostrar/i` deja de encontrarlo justo en el estado que varios TC quieren observar.
   */
  get botonMostrar(): Locator {
    return this.footer.getByRole('button').first();
  }

  get seccionOrdenar(): Locator {
    return this.root.getByText(/ordena tus productos/i).first();
  }

  get seccionAplicarFiltros(): Locator {
    return this.root.getByText(/aplica tus filtros/i).first();
  }

  /** Las opciones del carrusel de orden que vive dentro del panel. */
  get opcionesDeOrden(): Locator {
    return this.root.getByText(
      /^(recomendado|más vendido|precio más bajo|precio más alto|pensados para ti|mejor descuento)$/i,
    );
  }

  /** Encabezado colapsable de cada tipo de filtro. Expone `aria-expanded`. */
  get encabezadosDeSeccion(): Locator {
    return this.root.locator('button[aria-expanded]');
  }

  seccion(nombre: string | RegExp): Locator {
    return this.root.locator('button[aria-expanded]').filter({ hasText: nombre }).first();
  }

  /** El filtro de ofertas, que la HU excluye de los desplegables: es un `switch`. */
  get switchOfertas(): Locator {
    return this.root.getByRole('switch');
  }

  // ---------------------------------------------------------------------------------------
  // Filtro "Ofertas" — lo que certifica la suite B2C-95.
  //
  // La tarjeta es el propio `button[role=switch]`: dentro lleva dos `<p>` hermanos —el nombre
  // ("Ofertas 🤩", con el emoji que los TC no escriben) y el conteo ("3 productos")— y, a la
  // derecha, el `<div>` de la pista con la perilla dentro. `innerText` los pega con saltos de
  // línea, así que nombre y conteo se leen de sus nodos y no de la cadena del botón.
  // ---------------------------------------------------------------------------------------

  /** ¿Ofrece el panel el filtro Ofertas en este contexto? CA5 lo espera ausente sin ofertas. */
  async ofertasPresente(): Promise<boolean> {
    return (await this.switchOfertas.count()) > 0;
  }

  /** El nombre que rotula la tarjeta, tal cual lo escribe la UI (emoji incluido). */
  async nombreDeOfertas(): Promise<string> {
    return (await this.switchOfertas.locator('p').first().innerText()).trim();
  }

  /**
   * El conteo de productos en oferta que muestra la tarjeta, o `null` si no lo trae.
   *
   * `null` y `0` son cosas distintas: el caso pide que la tarjeta **muestre** la cantidad, así
   * que la ausencia del dato tiene que poder distinguirse de un contexto con cero ofertas.
   */
  async conteoDeOfertas(): Promise<number | null> {
    const parrafos = this.switchOfertas.locator('p');
    if ((await parrafos.count()) < 2) return null;
    const texto = (await parrafos.nth(1).innerText()).trim();
    const m = texto.match(/(\d+)\s+productos?/i);
    return m ? Number(m[1]) : null;
  }

  /** El texto literal del conteo, para citarlo en la evidencia sin reinterpretarlo. */
  async textoDelConteoDeOfertas(): Promise<string | null> {
    const parrafos = this.switchOfertas.locator('p');
    if ((await parrafos.count()) < 2) return null;
    return (await parrafos.nth(1).innerText()).trim();
  }

  /** El estado del toggle según `aria-checked`, que es la señal semántica. */
  async ofertasActivo(): Promise<boolean> {
    return (await this.switchOfertas.getAttribute('aria-checked')) === 'true';
  }

  /**
   * La firma visual del toggle: color de la pista y posición de la perilla dentro de ella.
   *
   * El caso pide que el toggle "cambie visualmente" de estado, y eso se comprueba con dos
   * señales independientes —el color y el desplazamiento— porque con una sola un simple cambio
   * de paleta convertiría un rediseño en un `Rechazado` del producto.
   */
  async estadoVisualDeOfertas(): Promise<{ pista: string; perillaEnLaDerecha: boolean }> {
    return this.switchOfertas.evaluate((sw) => {
      const pista = sw.lastElementChild as HTMLElement;
      const perilla = pista.firstElementChild as HTMLElement;
      const rp = pista.getBoundingClientRect();
      const rk = perilla.getBoundingClientRect();
      return {
        pista: getComputedStyle(pista).backgroundColor,
        // La perilla ocupa casi toda la altura de la pista: "a la derecha" es que su centro pase
        // del centro de la pista, no una coordenada absoluta que cambiaría con el ancho.
        perillaEnLaDerecha: rk.x + rk.width / 2 > rp.x + rp.width / 2,
      };
    });
  }

  /**
   * La forma de la tarjeta de Ofertas: dónde está, si tiene aspecto de tarjeta y si el toggle
   * queda a la derecha del texto. Es lo que CA1 describe y no se puede leer del DOM a secas.
   */
  async tarjetaDeOfertas(): Promise<{
    borde: string;
    radio: number;
    toggleALaDerechaDelTexto: boolean;
  }> {
    return this.switchOfertas.evaluate((sw) => {
      const cs = getComputedStyle(sw);
      const texto = sw.querySelector('p') as HTMLElement;
      const pista = sw.lastElementChild as HTMLElement;
      return {
        borde: `${cs.borderTopWidth} ${cs.borderTopStyle} ${cs.borderTopColor}`,
        radio: parseFloat(cs.borderTopLeftRadius) || 0,
        toggleALaDerechaDelTexto:
          pista.getBoundingClientRect().x > texto.getBoundingClientRect().right,
      };
    });
  }

  /**
   * La posición de Ofertas entre los filtros del panel (0 = primero).
   *
   * Se cuenta sobre los controles de filtro en el orden en que se renderizan —el switch y los
   * encabezados colapsables juntos—, que es lo que ve el usuario. Devuelve `-1` si no está.
   */
  async posicionDeOfertas(): Promise<number> {
    return this.root.evaluate(
      (panel) =>
        [...panel.querySelectorAll('button[aria-expanded], [role="switch"]')].findIndex(
          (el) => el.getAttribute('role') === 'switch',
        ),
    );
  }

  /** Activa o desactiva Ofertas y espera a que termine el recálculo del conteo. */
  async alternarOfertas(): Promise<void> {
    await this.switchOfertas.click();
    await this.esperarRecalculo();
  }

  // ---------------------------------------------------------------------------------------
  // Píldoras de "Estilos de alimentación" — lo que certifica la suite B2C-96.
  //
  // Es la única sección cuyos valores no son `role=checkbox`: monta una `<ul>` de `<li>` con un
  // `<button aria-pressed>` cada uno, con un `<img>` de Ok to Shop y la etiqueta como texto. El
  // estado se lee de `aria-pressed`, no del color, que es lo que sobrevive a un rediseño.
  // ---------------------------------------------------------------------------------------

  /** Las píldoras de una sección que se despliega como lista (Estilos de alimentación). */
  pildorasDe(seccion: string | RegExp): Locator {
    return this.seccion(seccion).locator('xpath=following-sibling::*[1]').locator('li > button');
  }

  /** Las etiquetas de las píldoras, en el orden en que se renderizan. */
  async etiquetasDePildoras(seccion: string | RegExp): Promise<string[]> {
    return (await this.pildorasDe(seccion).allInnerTexts()).map((t) => t.trim()).filter(Boolean);
  }

  /**
   * Estado de cada píldora: si está seleccionada, su firma visual y si trae icono.
   *
   * El icono **no cambia de archivo** al seleccionarse: conserva su `src` y se recolorea con un
   * `filter` CSS. Comparar el `src` para comprobar que "el icono se pone rojo" no detecta nada;
   * la señal es que `filter` deja de ser `none`.
   */
  async estadoDePildoras(seccion: string | RegExp): Promise<
    {
      etiqueta: string;
      seleccionada: boolean;
      borde: string;
      texto: string;
      fondo: string;
      tieneIcono: boolean;
      iconoRecoloreado: boolean;
    }[]
  > {
    return this.pildorasDe(seccion).evaluateAll((botones) =>
      botones.map((b) => {
        const cs = getComputedStyle(b);
        const img = b.querySelector('img');
        return {
          etiqueta: (b.textContent ?? '').trim(),
          seleccionada: b.getAttribute('aria-pressed') === 'true',
          borde: cs.borderTopColor,
          texto: cs.color,
          fondo: cs.backgroundColor,
          tieneIcono: !!img,
          iconoRecoloreado: !!img && getComputedStyle(img).filter !== 'none',
        };
      }),
    );
  }

  /** Marca o desmarca una píldora y espera a que el conteo termine de recalcularse. */
  async alternarPildora(seccion: string | RegExp, etiqueta: string | RegExp): Promise<void> {
    await this.pildorasDe(seccion).filter({ hasText: etiqueta }).first().click();
    await this.esperarRecalculo();
  }

  /** Zona de filtros aplicados. La UI la escribe "Filtros Aplicados"; los TC, "Filtros aplicados". */
  get zonaFiltrosAplicados(): Locator {
    return this.root.getByText(/filtros aplicados/i).first();
  }

  /**
   * Los chips de filtro aplicado.
   *
   * Cada chip es **un solo** `<button>` que lleva dentro el nombre y el SVG de la X: la X no es un
   * control aparte, así que el chip entero es el botón de borrado.
   *
   * El SVG no alcanza para distinguirlos. El botón **"Ver todas"** —el que despliega el listado
   * completo de una sección con más de 5 valores— lleva un `svg` con el **mismo**
   * `viewBox="0 0 256 256"` (el icono `+`), así que un locator anclado solo en él da por chip a
   * "Ver todas" en cuanto el panel expone una sección larga. Lo que sí separa a los dos es dónde
   * va el texto: el chip lo lleva en un `<span>` hijo directo del botón, y "Ver todas" en un `<p>`
   * dentro de un `<div>`.
   */
  get chips(): Locator {
    return this.root.locator('button:has(> span):has(svg[viewBox="0 0 256 256"])');
  }

  chip(nombre: string | RegExp): Locator {
    return this.chips.filter({ hasText: nombre }).first();
  }

  /** "Limpiar", a la derecha del título de filtros aplicados. Es un `<button>`, no un `<a>`. */
  get limpiar(): Locator {
    return this.root.getByRole('button', { name: /^limpiar$/i });
  }

  /** Velo del modal, montado mientras el panel está abierto. */
  get overlay(): Locator {
    return this.page.locator('.chakra-modal__overlay');
  }

  async esperarAbierto(): Promise<this> {
    await this.root.waitFor({ state: 'visible', timeout: 20000 });
    return this;
  }

  /** Texto del botón de aplicar, ya normalizado (colapsa los espacios del markup). */
  async textoDelBoton(): Promise<string> {
    return (await this.botonMostrar.innerText()).replace(/\s+/g, ' ').trim();
  }

  /**
   * El conteo que muestra el botón, o `null` si no muestra ninguno.
   *
   * Acepta las dos formas —"Mostrar productos (3)" que usa la UI y "Mostrar 3 productos" que
   * escriben los TC— porque lo que el caso verifica es el número, no cómo se redacta. Que el
   * botón **no traiga número** sí es un dato distinto, y por eso vuelve `null` en vez de 0.
   */
  async conteoDelBoton(): Promise<number | null> {
    const texto = await this.textoDelBoton();
    const match = texto.match(/\((\d+)\)/) ?? texto.match(/mostrar\s+(\d+)\s+producto/i);
    return match ? Number(match[1]) : null;
  }

  async botonDeshabilitado(): Promise<boolean> {
    return this.botonMostrar.isDisabled();
  }

  /**
   * ¿Está el botón mostrando la animación de carga?
   *
   * Durante el recálculo el botón pierde el texto y su contenido pasa a ser un `<div>` con tres
   * hijos vacíos —los tres puntos, animados por CSS—. Buscar el literal "..." no encuentra nada:
   * la señal es que no hay texto y sí hay tres divs.
   */
  async cargando(): Promise<boolean> {
    return this.botonMostrar.evaluate((b) => {
      const texto = (b.textContent ?? '').trim();
      const puntos = b.querySelectorAll('div > div').length;
      return texto === '' && puntos >= 3;
    });
  }

  /**
   * Observa el botón durante `ms` y devuelve si llegó a verse la animación de carga.
   *
   * El recálculo dura menos de un segundo, así que una sola lectura después de la acción llega
   * tarde: hay que muestrear mientras ocurre.
   */
  async observarCargaDelBoton(accion: () => Promise<void>, ms = 6000): Promise<boolean> {
    const visto = this.botonMostrar
      .evaluate((b, limite) => {
        return new Promise<boolean>((resolve) => {
          const fin = Date.now() + limite;
          const tick = () => {
            const texto = (b.textContent ?? '').trim();
            if (texto === '' && b.querySelectorAll('div > div').length >= 3) return resolve(true);
            if (Date.now() > fin) return resolve(false);
            requestAnimationFrame(tick);
          };
          tick();
        });
      }, ms)
      .catch(() => false);
    await accion();
    return visto;
  }

  /** Los tipos de filtro visibles, en el orden en que se renderizan. */
  async tiposDeFiltro(): Promise<string[]> {
    return this.root.evaluate((panel) =>
      [...panel.querySelectorAll('button[aria-expanded], [role="switch"]')].map((el) =>
        (el.textContent ?? '')
          .trim()
          .replace(/\s+/g, ' ')
          .replace(/\s*\d+\s*$/, '')
          .replace(/\s*\d+\s+productos?$/i, '')
          .trim(),
      ),
    );
  }

  /**
   * Estado de cada sección colapsable: si está expandida y hacia dónde apunta su flecha.
   *
   * La flecha usa **siempre el mismo path**; lo que cambia es el `transform` (rotación de 180°),
   * así que la dirección se lee del estilo computado y no del atributo `d`.
   */
  async estadoDeLasSecciones(): Promise<
    { nombre: string; expandida: boolean; flecha: 'arriba' | 'abajo'; badge: number | null }[]
  > {
    return this.root.evaluate((panel) =>
      [...panel.querySelectorAll('button[aria-expanded]')].map((b) => {
        const svg = b.querySelector('svg');
        // La rotación se saca del ángulo real de la matriz, no comparando su texto con
        // "matrix(-1,...)": la flecha gira con una transición de 150 ms y durante ese tramo los
        // coeficientes son intermedios, así que una comparación literal lee "abajo" en una sección
        // que ya se está abriendo.
        const bruto = svg ? getComputedStyle(svg).transform : 'none';
        let grados = 0;
        if (bruto && bruto !== 'none') {
          try {
            const m = new DOMMatrixReadOnly(bruto);
            grados = (Math.atan2(m.b, m.a) * 180) / Math.PI;
          } catch {
            grados = 0;
          }
        }
        const invertida = Math.abs(grados) > 90;

        // El nombre y el badge se leen de sus nodos, no del texto del botón: `textContent`
        // concatena sin separador ("Marca" + "2" = "Marca2") y deja el badge invisible para
        // cualquier expresión que lo busque al final de la cadena.
        const titulo = b.querySelector('p');
        const badge = [...b.querySelectorAll('div')]
          .map((d) => (d.textContent ?? '').trim())
          .filter((t) => /^\d+$/.test(t))[0];
        return {
          nombre: (titulo?.textContent ?? b.textContent ?? '').trim().replace(/\s+/g, ' '),
          expandida: b.getAttribute('aria-expanded') === 'true',
          flecha: (invertida ? 'arriba' : 'abajo') as 'arriba' | 'abajo',
          badge: badge ? Number(badge) : null,
        };
      }),
    );
  }

  /**
   * Expande una sección solo si está colapsada.
   *
   * `alternarSeccion` es lo que piden los TC que verifican el toggle; para los que solo necesitan
   * llegar a los valores, alternar a ciegas cerraría una sección ya abierta —por ejemplo después
   * de `expandirTodas()`— y dejaría el caso buscando opciones que acaba de ocultar.
   */
  async expandirSeccion(nombre: string | RegExp): Promise<void> {
    const encabezado = this.seccion(nombre);
    if ((await encabezado.getAttribute('aria-expanded')) === 'true') return;
    await this.alternarSeccion(nombre);
  }

  /** Abre o cierra una sección y espera a que su `aria-expanded` refleje el cambio. */
  async alternarSeccion(nombre: string | RegExp): Promise<void> {
    const encabezado = this.seccion(nombre);
    const antes = await encabezado.getAttribute('aria-expanded');
    await encabezado.click();
    await this.page.waitForFunction(
      ([el, previo]) => (el as Element).getAttribute('aria-expanded') !== previo,
      [await encabezado.elementHandle(), antes] as const,
      { timeout: 10000 },
    );
    // La flecha gira con una transición de 150 ms que arranca después de que `aria-expanded`
    // cambia: sin esta espera, leer su orientación devuelve un estado a medio camino.
    await this.page.waitForTimeout(400);
  }

  /**
   * Los valores seleccionables de una sección ya expandida.
   *
   * Se llega a ellos por el **hermano siguiente** del encabezado: al expandirse, la sección monta
   * su contenedor de valores justo después del `button[aria-expanded]`, dentro del mismo bloque.
   * No sirve envolver el encabezado en un `filter({ has })` —el locator de dentro se resuelve
   * contra la raíz del panel y no contra el `div` candidato, así que no casa con nada— y tampoco
   * un descendiente del propio encabezado, que solo contiene el título y la flecha.
   *
   * Los tipos no comparten forma y el locator cubre las tres: Marca despliega `role=checkbox`,
   * Estilos de alimentación una lista de `<button>` y Precio un rango con dos campos. Un POM que
   * asumiera checkbox para todo no encontraría ni los estilos ni el precio, y concluiría que esas
   * secciones se muestran sin valores disponibles — que es justo lo contrario de lo que pasa.
   */
  valoresDe(nombre: string | RegExp): Locator {
    return this.seccion(nombre)
      .locator('xpath=following-sibling::*[1]')
      .locator('[role="checkbox"], li > button, input');
  }

  /**
   * Selecciona un valor y espera a que termine el recálculo.
   *
   * Se espera a que el botón vuelva a tener texto: mientras recalcula se queda vacío, y leer el
   * conteo en ese hueco devuelve `null` como si el botón no trajera número.
   */
  async seleccionarValor(seccion: string | RegExp, valor: string | RegExp): Promise<void> {
    await this.valoresDe(seccion).filter({ hasText: valor }).first().click();
    await this.esperarRecalculo();
  }

  async esperarRecalculo(): Promise<void> {
    await this.page.waitForTimeout(300);
    await this.botonMostrar
      .evaluate(
        (b) =>
          new Promise<void>((resolve) => {
            const fin = Date.now() + 20000;
            const tick = () => {
              if ((b.textContent ?? '').trim() !== '' || Date.now() > fin) return resolve();
              requestAnimationFrame(tick);
            };
            tick();
          }),
      )
      .catch(() => undefined);
    await this.page.waitForTimeout(500);
  }

  get precioMinimo(): Locator {
    return this.root.getByRole('textbox', { name: /precio m[ií]nimo/i });
  }

  get precioMaximo(): Locator {
    return this.root.getByRole('textbox', { name: /precio m[áa]ximo/i });
  }

  /** Los extremos del rango de precio que ofrece la sección, ya en números. */
  async rangoDePrecio(): Promise<{ min: number; max: number }> {
    const limpiar = (v: string) => Number(v.replace(/[^\d]/g, ''));
    return {
      min: limpiar(await this.precioMinimo.inputValue()),
      max: limpiar(await this.precioMaximo.inputValue()),
    };
  }

  /**
   * Lleva el rango de precio a un tramo sin productos, para los TC de conteo cero.
   *
   * Fija el mínimo en el máximo del rango: el extremo superior no entra en el filtro, así que la
   * combinación queda vacía. Es la única vía a cero que no necesita datos ajenos a la categoría
   * —un valor fuera del rango el campo ni siquiera lo confirma, se queda escrito sin filtrar—.
   */
  async llevarPrecioATramoVacio(): Promise<void> {
    await this.alternarSeccion(/^precio/i);
    const { max } = await this.rangoDePrecio();
    await this.precioMinimo.fill(String(max));
    await this.precioMinimo.press('Tab');
    await this.esperarRecalculo();
  }

  // ---------------------------------------------------------------------------------------
  // Filtro "Marca" (y las demás secciones de checkbox) — lo que certifica la suite B2C-98.
  //
  // Su contenedor monta, en este orden: el buscador interno, la lista de `role=checkbox` y el
  // botón "Ver todas". Dos rarezas que gobiernan cómo se lee todo lo de aquí abajo:
  //
  // - **El buscador y "Ver todas" solo existen cuando la sección tiene más de 5 valores.** En un
  //   contexto pobre desaparecen del DOM, y buscarlos ahí concluye que la UI no los ofrece.
  // - **"Ver todas" comparte el `viewBox` del SVG con los chips**, por eso el locator de `chips`
  //   exige además un `<span>` hijo directo.
  // ---------------------------------------------------------------------------------------

  /** El buscador interno de una sección. No tiene `aria-label`: se ancla en su placeholder. */
  buscadorDe(seccion: string | RegExp): Locator {
    return this.contenedorDe(seccion).locator('input[placeholder]');
  }

  /** El contenedor de valores que la sección monta al expandirse. */
  contenedorDe(seccion: string | RegExp): Locator {
    return this.seccion(seccion).locator('xpath=following-sibling::*[1]');
  }

  /** El placeholder del buscador, o `null` si la sección no lo ofrece en este contexto. */
  async placeholderDelBuscador(seccion: string | RegExp): Promise<string | null> {
    const campo = this.buscadorDe(seccion);
    if (!(await campo.count())) return null;
    return campo.getAttribute('placeholder');
  }

  /** Los valores de una sección de checkbox (Marca, Tipo de envase, Formato). */
  casillasDe(seccion: string | RegExp): Locator {
    return this.contenedorDe(seccion).getByRole('checkbox');
  }

  /**
   * Etiqueta y estado de cada casilla, en el orden en que se renderizan.
   *
   * El estado sale de `aria-checked` y no del estilo: es la señal semántica y la que sobrevive a
   * un rediseño de la casilla.
   */
  async estadoDeCasillas(
    seccion: string | RegExp,
  ): Promise<{ etiqueta: string; marcada: boolean }[]> {
    return this.casillasDe(seccion).evaluateAll((casillas) =>
      casillas.map((c) => ({
        etiqueta: ((c.querySelector('p') ?? c).textContent ?? '').trim(),
        marcada: c.getAttribute('aria-checked') === 'true',
      })),
    );
  }

  /** Solo las etiquetas, que es lo que comparan los TC de orden y de filtrado del listado. */
  async etiquetasDeCasillas(seccion: string | RegExp): Promise<string[]> {
    return (await this.estadoDeCasillas(seccion)).map((c) => c.etiqueta);
  }

  /** Escribe en el buscador interno de la sección. El filtrado es en cliente, sin recálculo. */
  async buscarEn(seccion: string | RegExp, texto: string): Promise<void> {
    await this.buscadorDe(seccion).fill(texto);
    // El filtrado es local y no dispara product-search: basta con dejar que React repinte.
    await this.page.waitForTimeout(800);
  }

  /** El link "Ver todas" de una sección. Desaparece al desplegar el listado completo. */
  verTodas(seccion: string | RegExp): Locator {
    return this.contenedorDe(seccion).getByRole('button', { name: /ver todas/i });
  }

  async hayVerTodas(seccion: string | RegExp): Promise<boolean> {
    return (await this.verTodas(seccion).count()) > 0;
  }

  async clicVerTodas(seccion: string | RegExp): Promise<void> {
    await this.verTodas(seccion).click();
    await this.page.waitForTimeout(800);
  }

  /** Marca o desmarca un valor y espera a que termine el recálculo del conteo. */
  async alternarCasilla(seccion: string | RegExp, etiqueta: string | RegExp): Promise<void> {
    await this.casillasDe(seccion).filter({ hasText: etiqueta }).first().click();
    await this.esperarRecalculo();
  }

  /** Los textos de los chips activos, para comprobar qué refleja "Filtros Aplicados". */
  async textosDeChips(): Promise<string[]> {
    if (!(await this.chips.count())) return [];
    return (await this.chips.allInnerTexts()).map((t) => t.replace(/\s+/g, ' ').trim());
  }

  /** El badge numérico de una sección, o `null` si no muestra ninguno. */
  async badgeDe(seccion: string | RegExp): Promise<number | null> {
    const secciones = await this.estadoDeLasSecciones();
    const nombre = typeof seccion === 'string' ? new RegExp(seccion, 'i') : seccion;
    return secciones.find((s) => nombre.test(s.nombre))?.badge ?? null;
  }

  /** Los valores que un tipo de filtro deja en la URL (`refine=brand=A|B`), ya separados. */
  refineEnLaUrl(atributo: string): string[] {
    const refines = new URL(this.page.url()).searchParams.getAll('refine');
    const propio = refines.find((r) => r.startsWith(`${atributo}=`));
    return propio ? propio.slice(atributo.length + 1).split('|') : [];
  }

  // ---------------------------------------------------------------------------------------
  // Filtro "Precio" — lo que certifica la suite B2C-97.
  //
  // Es la única sección cuyos valores no son opciones seleccionables: un rango con dos campos
  // numéricos y un range slider de doble control. Los campos llevan el nombre accesible
  // ("Precio mínimo" / "Precio máximo") pero el rótulo **visible** son dos `<p>` sueltos
  // ("Mínimo" + "(en CLP)"), así que lo que el usuario lee y lo que expone el DOM no son el
  // mismo texto y hay que poder mirar los dos.
  // ---------------------------------------------------------------------------------------

  /** El encabezado colapsable de la sección de precio. */
  get seccionPrecio(): Locator {
    return this.seccion(/^precio/i);
  }

  /** El contenedor que la sección monta al expandirse: los dos campos y el slider. */
  get cuerpoDePrecio(): Locator {
    return this.seccionPrecio.locator('xpath=following-sibling::*[1]');
  }

  /**
   * El rótulo que se ve encima de cada campo.
   *
   * No es el nombre accesible: la UI escribe "Mínimo" y "(en CLP)" en dos `<p>` hermanos,
   * mientras el `aria-label` del input dice "Precio mínimo". El caso describe lo que el usuario
   * lee, así que se comprueban los dos y se reporta la diferencia en vez de darla por buena.
   */
  async rotulosDePrecio(): Promise<{ minimo: string; maximo: string }> {
    const textos = await this.cuerpoDePrecio.evaluate((cuerpo) =>
      [...cuerpo.querySelectorAll('input')].map((input) => {
        const bloque = input.closest('div')?.parentElement as HTMLElement | null;
        return (bloque?.innerText ?? '').replace(/\s+/g, ' ').trim();
      }),
    );
    return { minimo: textos[0] ?? '', maximo: textos[1] ?? '' };
  }

  /** El sufijo de moneda que la UI pega a la derecha de cada campo. */
  async monedasDePrecio(): Promise<string[]> {
    return this.cuerpoDePrecio.evaluate((cuerpo) =>
      [...cuerpo.querySelectorAll('.chakra-input__right-element')].map((e) =>
        (e.textContent ?? '').trim(),
      ),
    );
  }

  /** ¿Se pueden editar los dos campos? CA2 los pide editables, no solo presentes. */
  async preciosEditables(): Promise<{ minimo: boolean; maximo: boolean }> {
    return {
      minimo: await this.precioMinimo.isEditable(),
      maximo: await this.precioMaximo.isEditable(),
    };
  }

  /** El contenedor del slider de precio: su centro es el 50% exacto del rango. */
  get sliderDePrecio(): Locator {
    return this.cuerpoDePrecio.locator('.chakra-slider').first();
  }

  /** Los dos controles del slider, en orden (0 = mínimo, 1 = máximo). */
  get controlesDePrecio(): Locator {
    return this.cuerpoDePrecio.getByRole('slider');
  }

  /**
   * Posición y límites de cada control del slider.
   *
   * Es la única lectura fiable de dónde está el slider: no hay `input[type=range]` ni `value`
   * que consultar, solo los `aria-value*` de cada thumb. Que los dos expongan su propio
   * `aria-valuenow` es además lo que hace comprobable que son **controles independientes**.
   */
  async controlesDelSlider(): Promise<{ valor: number; min: number; max: number }[]> {
    return this.controlesDePrecio.evaluateAll((thumbs) =>
      thumbs.map((t) => ({
        valor: Number(t.getAttribute('aria-valuenow')),
        min: Number(t.getAttribute('aria-valuemin')),
        max: Number(t.getAttribute('aria-valuemax')),
      })),
    );
  }

  /**
   * Arrastra un control del slider hasta el punto medio del rango.
   *
   * El destino es el **contenedor** del slider, cuyo centro cae en el 50% del track: así el
   * arrastre llega a un valor intermedio reproducible —(min+max)/2— sin calcular píxeles ni
   * depender del ancho del panel. Arrastrarlo sobre el otro control lo llevaría al extremo, que
   * es justo el caso que CA3 no quiere observar.
   */
  async arrastrarControlDePrecio(cual: 'minimo' | 'maximo'): Promise<void> {
    const thumb = this.controlesDePrecio.nth(cual === 'minimo' ? 0 : 1);
    await thumb.dragTo(this.sliderDePrecio);
    await this.esperarRecalculo();
  }

  /**
   * Escribe un valor en uno de los campos y lo confirma con Enter.
   *
   * Enter y la pérdida de foco son las dos formas que el caso admite; se usa Enter porque es la
   * que el paso describe primero y la que no arrastra el foco a otro control del panel.
   */
  async escribirPrecio(cual: 'minimo' | 'maximo', valor: number): Promise<void> {
    const campo = cual === 'minimo' ? this.precioMinimo : this.precioMaximo;
    await campo.fill(String(valor));
    await campo.press('Enter');
    await this.esperarRecalculo();
  }

  /**
   * El mensaje de validación del rango, o `null` si la UI no muestra ninguno.
   *
   * Los campos no marcan `aria-invalid` ni `aria-describedby`, así que el mensaje solo se puede
   * localizar por su texto dentro de la sección. `null` y cadena vacía son cosas distintas: el
   * caso pide que el mensaje **exista**, y la ausencia tiene que poder distinguirse.
   */
  async mensajeDeValidacionDePrecio(): Promise<string | null> {
    if (!(await this.cuerpoDePrecio.count())) return null;
    return this.cuerpoDePrecio.evaluate((c) => {
      const p = [...c.querySelectorAll('p')].find((x) =>
        /(no puede|debe ser|mayor|menor|inv[aá]lid)/i.test(x.textContent ?? ''),
      );
      return p ? (p.textContent ?? '').trim() : null;
    });
  }

  /**
   * El link "Borrar" de la sección de precio.
   *
   * **Solo existe mientras hay un rango distinto del original**: con el rango intacto no está en
   * el DOM. Buscarlo antes de tocar el precio lleva a concluir que la UI no ofrece CA6 cuando sí
   * lo hace. Es un `<button>` con aspecto de link (subrayado), no un `<a>`.
   */
  get borrarPrecio(): Locator {
    return this.cuerpoDePrecio.getByRole('button', { name: /^borrar$/i });
  }

  async hayBorrarEnPrecio(): Promise<boolean> {
    return (await this.borrarPrecio.count()) > 0;
  }

  /**
   * Pulsa "Borrar" y espera al recálculo.
   *
   * Ojo con lo que deja detrás: además de quitar el filtro, **el panel colapsa todas sus
   * secciones**, así que leer los campos justo después devuelve vacío porque el contenido está
   * desmontado. Para comprobar que el rango volvió al original hay que volver a expandir.
   */
  async clicBorrarPrecio(): Promise<void> {
    await this.borrarPrecio.click();
    await this.esperarRecalculo();
  }

  /** El chip del rango de precio dentro de "Filtros Aplicados", si lo hay. */
  get chipDePrecio(): Locator {
    return this.chips.filter({ hasText: /\$\s?[\d.]+\s*-\s*\$\s?[\d.]+/ }).first();
  }

  async textoDelChipDePrecio(): Promise<string | null> {
    if (!(await this.chipDePrecio.count())) return null;
    return (await this.chipDePrecio.innerText()).replace(/\s+/g, ' ').trim();
  }

  /** El badge numérico de la sección de precio, o `null` si no lo muestra. */
  async badgeDePrecio(): Promise<number | null> {
    const secciones = await this.estadoDeLasSecciones();
    return secciones.find((s) => /^precio/i.test(s.nombre))?.badge ?? null;
  }

  /** El `refine=price=(min..max)` que el filtro deja en la URL, o `null` si no hay ninguno. */
  rangoEnLaUrl(): { min: number; max: number } | null {
    const refines = new URL(this.page.url()).searchParams.getAll('refine');
    const precio = refines.find((r) => r.startsWith('price='));
    const m = precio?.match(/\((\d+)\.\.(\d+)\)/);
    return m ? { min: Number(m[1]), max: Number(m[2]) } : null;
  }

  /** Aplica los filtros seleccionados y espera a que el panel se desmonte. */
  async aplicar(): Promise<void> {
    await this.botonMostrar.click();
    await this.root.waitFor({ state: 'detached', timeout: 20000 }).catch(() => undefined);
  }

  async cerrarConLaX(): Promise<void> {
    await this.botonCerrar.click();
    await this.root.waitFor({ state: 'detached', timeout: 20000 }).catch(() => undefined);
  }

  async estaAbierto(): Promise<boolean> {
    return (await this.root.count()) > 0 && (await this.root.first().isVisible());
  }

  /**
   * Geometría del panel frente al viewport: es lo que distingue el panel lateral del drawer.
   *
   * Desktop y Mobile comparten la clase CSS, así que la forma se mide. `lateral` = ocupa el alto
   * y no el ancho; `drawer` = ocupa el ancho y está pegado al borde inferior.
   */
  async geometria(): Promise<{
    x: number;
    y: number;
    ancho: number;
    alto: number;
    abajo: number;
    vw: number;
    vh: number;
    ocupaElAncho: boolean;
    pegadoAbajo: boolean;
    ocupaElAlto: boolean;
  }> {
    return this.root.evaluate((panel) => {
      const r = panel.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      return {
        x: Math.round(r.x),
        y: Math.round(r.y),
        ancho: Math.round(r.width),
        alto: Math.round(r.height),
        abajo: Math.round(r.bottom),
        vw,
        vh,
        ocupaElAncho: r.width >= vw * 0.95,
        // "Pegado abajo" es que el borde inferior llegue al del viewport. Se comprueba con >= y no
        // con una diferencia absoluta porque el drawer desborda unos píxeles por el redondeo de
        // WebKit: exigir coincidencia exacta convertiría ese ruido en un fallo del producto.
        pegadoAbajo: r.bottom >= vh - 8,
        ocupaElAlto: r.height >= vh * 0.8,
      };
    });
  }

  /** El velo del panel, con lo que hace falta para decir si oscurece y si desenfoca. */
  async estiloDelOverlay(): Promise<{
    fondo: string;
    opacidadDelVelo: number;
    desenfoca: boolean;
  } | null> {
    if (!(await this.overlay.count())) return null;
    return this.overlay.first().evaluate((el) => {
      const cs = getComputedStyle(el);
      const alpha = cs.backgroundColor.match(/rgba?\([^)]*,\s*([\d.]+)\s*\)/);
      return {
        fondo: cs.backgroundColor,
        opacidadDelVelo: alpha ? Number(alpha[1]) : 1,
        desenfoca: cs.backdropFilter !== 'none' && cs.backdropFilter !== '',
      };
    });
  }

  /** ¿Puede desplazarse el contenido del panel sin mover la página de atrás? */
  async scrollInterno(): Promise<{ desplazable: boolean; alto: number; visible: number }> {
    return this.cuerpo.evaluate((body) => ({
      desplazable: body.scrollHeight > body.clientHeight + 4,
      alto: body.scrollHeight,
      visible: body.clientHeight,
    }));
  }

  async desplazarCuerpo(y: number): Promise<number> {
    return this.cuerpo.evaluate((body, destino) => {
      body.scrollTop = destino;
      return body.scrollTop;
    }, y);
  }

  /** Expande todas las secciones colapsadas, para forzar el scroll interno. */
  async expandirTodas(): Promise<void> {
    const colapsadas = this.root.locator('button[aria-expanded="false"]');
    for (let i = await colapsadas.count(); i > 0; i = await colapsadas.count()) {
      await colapsadas.first().click();
      await this.page.waitForTimeout(400);
      if ((await colapsadas.count()) >= i) break;
    }
  }

  /** Posición del botón de aplicar dentro del viewport, para comprobar que no se mueve. */
  async posicionDelBoton(): Promise<{ arriba: number; visible: boolean }> {
    return this.botonMostrar.evaluate((b) => {
      const r = b.getBoundingClientRect();
      return {
        arriba: Math.round(r.top),
        visible: r.top >= 0 && r.bottom <= window.innerHeight + 1 && r.height > 0,
      };
    });
  }

  // ---------------------------------------------------------------------------------------
  // Sección "Ordena tus productos" — lo que usa la suite B2C-87.
  //
  // El control de cada criterio **no es un `<button>` ni tiene rol**: es un `<div>` con
  // `cursor: pointer` que envuelve un `<img>` (su icono) y un `<p>` con el nombre. Por eso todo
  // lo de aquí abajo se ancla en el `<p>` y sube al padre, y por eso un `getByRole('button')`
  // dentro del panel no encuentra ninguna opción de orden.
  // ---------------------------------------------------------------------------------------

  /** Los nombres de los criterios que la sección ofrece, en el orden en que se renderizan. */
  async nombresDeOrden(): Promise<string[]> {
    return (await this.opcionesDeOrden.allInnerTexts()).map((t) => t.trim()).filter(Boolean);
  }

  /** El control clicable de un criterio: el `<p>` del nombre, que es quien recibe el clic. */
  opcionDeOrden(nombre: string | RegExp): Locator {
    return this.root.getByText(nombre, { exact: typeof nombre === 'string' }).first();
  }

  /** Pulsa un criterio dentro del panel, sin confirmar. */
  async elegirOrden(nombre: string | RegExp): Promise<void> {
    await this.opcionDeOrden(nombre).click();
    await this.page.waitForTimeout(600);
  }

  /**
   * Los criterios que la sección muestra como seleccionados.
   *
   * La sección no expone `aria-checked` ni una clase propia para el activo, así que la marca
   * hay que leerla de lo que se ve: fondo, borde, opacidad y grosor de letra. Se toma la firma
   * visual de cada criterio y se devuelven los que **difieren de la mayoría** — así el método
   * sigue valiendo si mañana el activo se marca con un borde en vez de con un fondo, sin tener
   * que adivinar de antemano qué forma tendrá el indicador.
   *
   * Cuando los seis se ven igual, no hay ninguno marcado y la lista sale vacía. Esa lista vacía
   * es un resultado, no un fallo del método: es lo que varios TC necesitan poder observar.
   */
  async ordenesMarcados(): Promise<string[]> {
    return this.opcionesDeOrden.evaluateAll((nodos) => {
      const firmas = nodos.map((n) => {
        const control = (n.parentElement ?? n) as HTMLElement;
        const cs = getComputedStyle(control);
        // Desde que la sección muestra un ícono por criterio, la marca del activo es el borde del
        // recuadro del ícono (hermano del texto), no el contenedor: se suma su estilo a la firma.
        const recuadro = (control.querySelector('img, svg')?.parentElement ?? control) as HTMLElement;
        const rs = getComputedStyle(recuadro);
        return {
          nombre: (n.textContent ?? '').trim(),
          firma: [
            cs.backgroundColor,
            cs.borderWidth,
            cs.borderColor,
            cs.opacity,
            getComputedStyle(n as HTMLElement).fontWeight,
            rs.borderTopWidth,
            rs.borderTopColor,
            rs.backgroundColor,
          ].join('|'),
        };
      });
      const veces = new Map<string, number>();
      for (const f of firmas) veces.set(f.firma, (veces.get(f.firma) ?? 0) + 1);
      const mayoria = [...veces.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
      return firmas.filter((f) => f.firma !== mayoria).map((f) => f.nombre);
    });
  }
}
