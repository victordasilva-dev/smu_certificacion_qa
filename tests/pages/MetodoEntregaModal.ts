import { Locator, Page, Request, Response } from '@playwright/test';
import { capturarEvidencia } from '../support/evidencia';

/**
 * Modal "Elige tu método de entrega" que abre el Store Locator del header (B2C-26).
 *
 * Es el mismo drawer que `StoreLocator` usa como atajo para dejar una dirección aplicada (B2C-24),
 * pero B2C-26 lo certifica por dentro: el buscador de Google, el pie "¿No aparece tu dirección?",
 * el formulario manual, las direcciones guardadas, la pantalla de error y el modal de permisos de
 * ubicación. Por eso vive en su propia clase en vez de engordar aquella.
 *
 * Es un componente, no una página navegable: no extiende `BasePage`.
 *
 * **El drawer comparte `role="dialog"` con el de login, el de categorías y el de permisos de
 * ubicación**, que además se monta ENCIMA del drawer sin cerrarlo. Cada raíz se filtra por su
 * propio contenido: con el rol pelado, el caso daría por bueno el modal equivocado.
 */
export class MetodoEntregaModal {
  /** El drawer, en cualquiera de sus pantallas: búsqueda, formulario manual o error. */
  readonly root: Locator;

  /** El modal "Unimarc no tiene acceso a tu localización", que se monta sobre el drawer. */
  readonly modalPermisos: Locator;

  constructor(private readonly page: Page) {
    this.root = page
      .locator('[role="dialog"]')
      .filter({ hasText: /elige tu m[ée]todo de entrega|direcci[óo]n manual/i })
      .locator('visible=true')
      .first();
    this.modalPermisos = page
      .locator('[role="dialog"]')
      .filter({ hasText: /no tiene acceso a tu localizaci[óo]n/i })
      .locator('visible=true')
      .first();
  }

  // --- Pantalla de búsqueda -----------------------------------------------------------------

  get encabezado(): Locator {
    return this.root.getByText(/elige tu m[ée]todo de entrega/i).first();
  }

  get tabDespachoDomicilio(): Locator {
    return this.root.getByRole('button', { name: /despacho a domicilio/i });
  }

  /**
   * "Calle, dirección o lugar". Su nombre accesible es el placeholder ("Ej: Av. Manquehue…"), no
   * la etiqueta que se ve encima: se ancla por el primer textbox del drawer.
   */
  get campoBusqueda(): Locator {
    return this.root.getByRole('textbox').first();
  }

  get botonUbicacionActual(): Locator {
    return this.root.getByRole('button', { name: /activar mi ubicaci[óo]n actual/i });
  }

  /** Sugerencias de Google: cada una es un `option` del `listbox` bajo el buscador. */
  get sugerencias(): Locator {
    return this.root.getByRole('listbox').getByRole('option');
  }

  /** Pie del drawer: "¿No aparece tu dirección?" + "Agregar". */
  get pie(): Locator {
    return this.root.getByRole('contentinfo');
  }

  get textoNoApareceDireccion(): Locator {
    return this.root.getByText(/no aparece tu direcci[óo]n/i);
  }

  get botonAgregar(): Locator {
    return this.root.getByRole('button', { name: /^agregar$/i });
  }

  /** Bloque "Dirección de despacho": la dirección activa, separada de las guardadas. */
  get bloqueDireccionDespacho(): Locator {
    return this.root.getByText(/^direcci[óo]n de despacho$/i);
  }

  get tituloDireccionesGuardadas(): Locator {
    return this.root.getByText(/^direcciones guardadas$/i);
  }

  // --- Pantalla de error ----------------------------------------------------------------------

  get tituloError(): Locator {
    return this.root.getByText(/ups, algo sali[óo] mal/i);
  }

  get mensajeError(): Locator {
    return this.root.getByText(/no logramos cargar la informaci[óo]n de los m[ée]todos de entrega/i);
  }

  /** "Error: <uuid>", el código de referencia que el cliente puede dictar a soporte. */
  get codigoError(): Locator {
    return this.root.getByText(/^error:\s*\S+/i);
  }

  get botonReintentar(): Locator {
    return this.root.getByRole('button', { name: /^reintentar$/i });
  }

  get botonVolverAlInicio(): Locator {
    return this.root.getByRole('button', { name: /volver al inicio/i });
  }

  // --- Formulario "Dirección manual" ----------------------------------------------------------

  get encabezadoManual(): Locator {
    return this.root.getByText(/^direcci[óo]n manual$/i);
  }

  /** Región y Comuna son `<select>` nativos: el rol es combobox, y no admiten texto libre. */
  get selectRegion(): Locator {
    return this.root.getByRole('combobox').nth(0);
  }

  get selectComuna(): Locator {
    return this.root.getByRole('combobox').nth(1);
  }

  get campoCalle(): Locator {
    return this.root.getByRole('textbox', { name: /^calle$/i });
  }

  get campoNumeracion(): Locator {
    return this.root.getByRole('textbox', { name: /ej\. 2160/i });
  }

  /**
   * "Continuar con detalles de la dirección". La planilla lo escribe en singular ("detalle"); la
   * UI lo dice en plural. El locator acepta los dos para no confundir un typo con un defecto.
   */
  get botonContinuarManual(): Locator {
    return this.root.getByRole('button', { name: /continuar con detalles? de la direcci[óo]n/i });
  }

  // --- Modal de permisos de ubicación ---------------------------------------------------------

  get botonCerrarPermisos(): Locator {
    return this.modalPermisos.getByRole('button', { name: /^cerrar$/i });
  }

  // --- Toast ----------------------------------------------------------------------------------

  /** Toast de GPS: vive fuera del drawer, así que se busca en la página. */
  get toastUbicacion(): Locator {
    return this.page.getByText(/no pudimos obtener tu ubicaci[óo]n actual/i).first();
  }

  get toastErrorCambio(): Locator {
    return this.page.getByText(/no pudimos cambiar tu direcci[óo]n/i).first();
  }

  get toastErrorEliminar(): Locator {
    return this.page.getByText(/no pudimos eliminar tu direcci[óo]n/i).first();
  }

  get toastEliminada(): Locator {
    return this.page.getByText(/tu direcci[óo]n fue eliminada con [ée]xito/i).first();
  }

  // --- Dirección activa y direcciones guardadas ------------------------------------------------

  /**
   * El texto de la dirección activa, el párrafo que sigue a "Dirección de despacho". No es una
   * tarjeta de la lista: es un bloque propio, separado de "Direcciones guardadas".
   */
  get direccionActiva(): Locator {
    return this.root.locator('p').filter({ hasText: /^direcci[óo]n de despacho$/i }).locator('xpath=following-sibling::*[1]');
  }

  /**
   * La tarjeta de una dirección guardada, por su etiqueta ("Casa", "Otra Casa"). Cada tarjeta es un
   * contenedor con dos botones hijos: la dirección en sí y el menú ⋮ "Opciones de la dirección".
   * El contenedor de las pestañas también tiene botones hijos, pero ninguno con la etiqueta.
   */
  tarjetaGuardada(etiqueta: string): Locator {
    return this.root
      .locator('div:has(> button p)')
      .filter({ has: this.page.getByText(etiqueta, { exact: true }) })
      .first();
  }

  menuOpciones(etiqueta: string): Locator {
    return this.tarjetaGuardada(etiqueta).getByRole('button', { name: /opciones de la direcci[óo]n/i });
  }

  /** Etiqueta y línea de dirección de cada tarjeta guardada, en el orden en que se muestran. */
  async direccionesGuardadas(): Promise<{ etiqueta: string; direccion: string; tieneMenu: boolean }[]> {
    return this.root.locator('div:has(> button p)').evaluateAll((tarjetas) =>
      tarjetas
        .map((t) => {
          const ps = Array.from(t.querySelectorAll(':scope > button p')).map((p) => (p.textContent ?? '').trim());
          const tieneMenu = !!Array.from(t.querySelectorAll(':scope > button')).find((b) =>
            /opciones de la direcci/i.test(b.getAttribute('aria-label') ?? ''),
          );
          return { etiqueta: ps[0] ?? '', direccion: ps[1] ?? '', tieneMenu };
        })
        .filter((t) => t.etiqueta && t.direccion),
    );
  }

  /** La etiqueta de la tarjeta guardada que corresponde a la dirección activa. */
  async etiquetaDeLaActiva(): Promise<string> {
    const activa = ((await this.direccionActiva.textContent()) ?? '').trim();
    const guardadas = await this.direccionesGuardadas();
    const tarjeta = guardadas.find((g) => g.direccion.startsWith(activa));
    if (!tarjeta) throw new Error(`Ninguna dirección guardada coincide con la activa "${activa}"`);
    return tarjeta.etiqueta;
  }

  async elegirGuardada(etiqueta: string): Promise<void> {
    await this.tarjetaGuardada(etiqueta).locator(':scope > button').first().click();
  }

  // --- Eliminar dirección -----------------------------------------------------------------------

  /** "¿Quieres eliminar tu dirección?", otro role=dialog montado sobre el drawer. */
  get modalEliminar(): Locator {
    return this.page
      .locator('[role="dialog"]')
      .filter({ hasText: /quieres eliminar tu direcci[óo]n/i })
      .locator('visible=true')
      .first();
  }

  get botonAceptarEliminar(): Locator {
    return this.modalEliminar.getByRole('button', { name: /^aceptar$/i });
  }

  get botonNoGracias(): Locator {
    return this.modalEliminar.getByRole('button', { name: /^no gracias$/i });
  }

  async pedirEliminar(etiqueta: string): Promise<void> {
    await this.menuOpciones(etiqueta).click();
    await this.page.getByText(/^eliminar direcci[óo]n$/i).locator('visible=true').first().click();
    await this.modalEliminar.waitFor({ state: 'visible', timeout: 15000 });
  }

  // --- Flujos a los que deriva el drawer --------------------------------------------------------

  /**
   * La confirmación con PIN (B2C-99). Tiene dos pantallas y las dos son B2C-99: "Agregar nueva
   * dirección" (mapa con el PIN, a la que llega la búsqueda de Google) y "Detalles de la dirección"
   * (a la que llegan el GPS y el formulario manual), según el CA1 y el CA4 de B2C-99.
   */
  get confirmacionPin(): Locator {
    return this.page
      .locator('[role="dialog"]')
      .filter({ hasText: /agregar nueva direcci[óo]n|detalles de la direcci[óo]n/i })
      .locator('visible=true')
      .first();
  }

  get mapaConfirmacion(): Locator {
    return this.confirmacionPin.getByRole('region', { name: /^mapa$/i }).first();
  }

  /**
   * Las coordenadas en las que está centrado el mapa de B2C-99, que es donde quedó el PIN. Google
   * Maps las publica en el enlace "Abre esta zona en Google Maps" (`maps?ll=<lat>,<lng>`).
   */
  async centroDelMapa(): Promise<{ lat: number; lng: number }> {
    const enlace = this.confirmacionPin.locator('a[href*="maps.google.com/maps?ll="]').first();
    await enlace.waitFor({ state: 'attached', timeout: 30000 });
    const href = (await enlace.getAttribute('href')) ?? '';
    const [, lat, lng] = href.match(/ll=(-?[\d.]+),(-?[\d.]+)/) ?? [];
    return { lat: Number(lat), lng: Number(lng) };
  }

  /** "Aún no llegamos a esta dirección": el flujo Sin cobertura (B2C-123). */
  get modalSinCobertura(): Locator {
    return this.page
      .locator('[role="dialog"]')
      .filter({ hasText: /a[uú]n no llegamos a esta direcci[óo]n/i })
      .locator('visible=true')
      .first();
  }

  /** "Autenticación requerida": validación OTP por correo (B2C-125). */
  get modalOtp(): Locator {
    return this.page
      .locator('[role="dialog"]')
      .filter({ hasText: /autenticaci[óo]n requerida/i })
      .locator('visible=true')
      .first();
  }

  async cerrarOtp(): Promise<void> {
    await this.modalOtp.getByRole('button', { name: /^close$|^cerrar$/i }).click();
    await this.modalOtp.waitFor({ state: 'hidden', timeout: 15000 });
  }

  // --- Indicadores de carga ---------------------------------------------------------------------

  /**
   * Empieza a registrar si aparece un indicador de carga: un skeleton, un spinner (el de los
   * botones de Chakra), un `aria-busy` o el texto "Buscando tu ubicación…". Los loaders de este
   * drawer duran menos de un segundo; una aserción de visibilidad llega tarde, así que se observa
   * el DOM desde antes de la acción y se pregunta después.
   */
  async observarCarga(): Promise<void> {
    await this.page.evaluate(() => {
      const w = window as unknown as { __qaCarga: { skeleton: boolean; spinner: boolean; texto: boolean } };
      w.__qaCarga = { skeleton: false, spinner: false, texto: false };
      const revisar = (n: Node) => {
        // "Buscando tu ubicación…" llega como texto nuevo dentro del botón que ya estaba: se
        // revisa el elemento que lo contiene.
        if (n.nodeType === Node.TEXT_NODE) {
          if (/buscando tu ubicaci/i.test(n.textContent ?? '')) w.__qaCarga.texto = true;
          return;
        }
        if (!(n instanceof Element)) return;
        const todos = [n, ...Array.from(n.querySelectorAll('*'))];
        for (const el of todos) {
          const clase = typeof el.className === 'string' ? el.className : el.getAttribute('class') ?? '';
          if (/skeleton/i.test(clase)) w.__qaCarga.skeleton = true;
          if (/spinner|loader|loading/i.test(clase) || el.getAttribute('aria-busy') === 'true' || el.hasAttribute('data-loading'))
            w.__qaCarga.spinner = true;
          if (/buscando tu ubicaci/i.test(el.textContent ?? '')) w.__qaCarga.texto = true;
        }
      };
      new MutationObserver((ms) =>
        ms.forEach((m) => {
          m.addedNodes.forEach(revisar);
          if (m.type === 'attributes' || m.type === 'characterData') revisar(m.target);
        }),
      ).observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['class', 'aria-busy', 'data-loading'],
      });
    });
  }

  async cargaObservada(): Promise<{ skeleton: boolean; spinner: boolean; texto: boolean }> {
    return this.page.evaluate(() => (window as unknown as { __qaCarga: { skeleton: boolean; spinner: boolean; texto: boolean } }).__qaCarga);
  }

  // --- Acciones de alto nivel -------------------------------------------------------------------

  /** Escribe en el buscador y toca la sugerencia de Google que contiene `texto`. */
  async elegirSugerencia(busqueda: string, texto: RegExp): Promise<void> {
    await this.escribirEnBuscador(busqueda);
    const sugerencia = this.sugerencias.filter({ hasText: texto }).first();
    await sugerencia.waitFor({ state: 'visible', timeout: 30000 });
    await sugerencia.click();
  }

  /**
   * Deja una dirección de despacho aplicada como invitado, de punta a punta: sugerencia de Google,
   * B2C-99 ("Continuar con detalles" y "Agregar dirección") y espera a que el header la muestre.
   */
  async fijarDireccionComoInvitado(busqueda: string, texto: RegExp): Promise<void> {
    await this.elegirSugerencia(busqueda, texto);
    await this.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
    await this.confirmacionPin.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
    await this.page
      .locator('header[role="banner"] button')
      .filter({ hasText: /desde:/i })
      .locator('visible=true')
      .first()
      .waitFor({ state: 'visible', timeout: 45000 });
  }

  /**
   * Con sesión iniciada: elige la sugerencia de Google y la guarda ("Continuar con detalles de la
   * dirección" → "Agregar dirección"). Después el sitio abre "Algunos productos podrían agotarse"
   * y luego el OTP de "Autenticación requerida" (B2C-189, explorado 2026-10-14).
   */
  async agregarDireccion(busqueda: string, texto: RegExp): Promise<void> {
    await this.elegirSugerencia(busqueda, texto);
    await this.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
    await this.confirmacionPin.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
  }

  /** Pestaña Retiro en tienda: busca la tienda sin la marca (el buscador no encuentra el nombre completo) y la confirma. */
  async elegirTienda(nombre: string): Promise<void> {
    await this.campoBuscarTienda.fill(nombre.replace(/^unimarc\s+/i, ''));
    await this.root.getByText(nombre, { exact: true }).first().click();
    await this.root.getByRole('button', { name: /^confirmar tienda$/i }).click();
  }

  /**
   * Completa el formulario "Dirección manual". La región no la trae la dirección del Excel de data
   * (solo calle, número y comuna): se busca la región cuyo catálogo de comunas contiene la comuna.
   */
  async completarFormularioManual(calle: string, numero: string, comuna: string): Promise<string> {
    for (const region of await this.opciones(this.selectRegion)) {
      await this.elegirRegion(region);
      const comunas = await this.opciones(this.selectComuna);
      if (comunas.includes(comuna)) {
        await this.elegirComuna(comuna);
        await this.campoCalle.fill(calle);
        await this.campoNumeracion.fill(numero);
        return region;
      }
    }
    throw new Error(`Ninguna región del catálogo lista la comuna "${comuna}"`);
  }

  // --- Evidencia -----------------------------------------------------------------------------

  /**
   * Captura del drawer (o de otro destino: el modal de permisos, o la página entera cuando lo que
   * se verifica es un toast que vive fuera del drawer). Sin `paso`, el estado final del caso.
   */
  async capturarModal(
    cpId: string,
    paso?: number | string,
    etiqueta?: string,
    destino: Locator | Page = this.root,
  ): Promise<string> {
    return capturarEvidencia(destino, cpId, paso, etiqueta);
  }

  // --- Acciones -------------------------------------------------------------------------------

  async esperarAbierto(): Promise<this> {
    await this.encabezado.waitFor({ state: 'visible', timeout: 30000 });
    return this;
  }

  // --- Estado inicial sin direcciones (B2C-138) -------------------------------------------------

  get botonCerrar(): Locator {
    return this.root.getByRole('button', { name: /^cerrar$/i }).first();
  }

  get tabRetiroEnTienda(): Locator {
    return this.root.getByRole('button', { name: /retiro en tienda/i });
  }

  get mensajeSinDirecciones(): Locator {
    return this.root.getByText(/a[uú]n no tienes direcciones guardadas/i);
  }

  /** "Para armar tu carro, ingresa una dirección…": el texto de ayuda bajo el mensaje. */
  get textoAyuda(): Locator {
    return this.root.getByText(/ingresa una direcci[óo]n/i);
  }

  /** La ilustración del área de contenido (la pitahaya). */
  get imagenContenido(): Locator {
    return this.root.locator('img').locator('visible=true').first();
  }

  /** Cabecera de la pestaña Retiro: "Selecciona tu tienda Unimarc" (entrada de B2C-121). */
  get tituloSeleccionTienda(): Locator {
    return this.root.getByText(/selecciona tu tienda unimarc/i);
  }

  get campoBuscarTienda(): Locator {
    return this.root.getByRole('textbox', { name: /buscar tienda/i });
  }

  /**
   * Estado visual de una pestaña: `aria-pressed`, color del texto y relleno del ícono. La pestaña
   * activa pinta el ícono en rojo (rgb(218, 41, 28)); la inactiva, texto e ícono en gris.
   */
  async estiloTab(tab: Locator): Promise<{ activa: boolean; texto: string; icono: string | null }> {
    return tab.evaluate((b) => {
      const relleno = Array.from(b.querySelectorAll('svg *'))
        .map((s) => getComputedStyle(s).fill)
        .find((f) => f && f !== 'none');
      return { activa: b.getAttribute('aria-pressed') === 'true', texto: getComputedStyle(b).color, icono: relleno ?? null };
    });
  }

  async cerrarConX(): Promise<void> {
    await this.botonCerrar.click();
    await this.root.waitFor({ state: 'hidden', timeout: 15000 });
  }

  /** Clic en el primer punto del viewport que quede fuera del drawer, o `null` si no hay ninguno. */
  async clicFuera(): Promise<{ x: number; y: number } | null> {
    const caja = await this.root.boundingBox();
    const vp = this.page.viewportSize();
    if (!caja || !vp) return null;
    const puntos = [
      { x: caja.x + caja.width + 40, y: vp.height / 2 },
      { x: caja.x - 40, y: vp.height / 2 },
      { x: vp.width / 2, y: caja.y + caja.height + 20 },
      { x: vp.width / 2, y: caja.y - 20 },
    ].filter((p) => p.x > 0 && p.x < vp.width && p.y > 0 && p.y < vp.height);
    if (!puntos.length) return null;
    await this.page.mouse.click(puntos[0].x, puntos[0].y);
    return puntos[0];
  }

  /**
   * Swipe hacia abajo con eventos táctiles reales sobre la cabecera del drawer (de su borde
   * superior hasta el 90 % del alto del viewport). El drawer de Chakra solo reaccionaría si el
   * sitio le hubiera montado un gesto de arrastre.
   */
  async swipeAbajo(): Promise<void> {
    const caja = await this.root.boundingBox();
    const vp = this.page.viewportSize();
    if (!caja || !vp) throw new Error('El drawer no tiene recuadro: no está renderizado');
    await this.root.evaluate(
      (el, { x, y0, y1 }) => {
        const objetivo = document.elementFromPoint(x, y0) ?? el;
        const toque = (y: number) => new Touch({ identifier: 1, target: objetivo, clientX: x, clientY: y, pageX: x, pageY: y });
        const lanzar = (tipo: string, y: number, activo: boolean) =>
          objetivo.dispatchEvent(
            new TouchEvent(tipo, { bubbles: true, cancelable: true, touches: activo ? [toque(y)] : [], targetTouches: activo ? [toque(y)] : [], changedTouches: [toque(y)] }),
          );
        // WebKit de escritorio puede no exponer el constructor `Touch`: entonces queda solo el
        // arrastre con el mouse de abajo.
        try {
          lanzar('touchstart', y0, true);
          for (let i = 1; i <= 10; i++) lanzar('touchmove', y0 + ((y1 - y0) * i) / 10, true);
          lanzar('touchend', y1, false);
        } catch {
          /* sin soporte de Touch */
        }
      },
      { x: caja.x + caja.width / 2, y0: caja.y + 30, y1: vp.height * 0.9 },
    );
    // Un arrastre con el mouse cubre la otra forma en que suelen implementarse estos gestos.
    await this.page.mouse.move(caja.x + caja.width / 2, caja.y + 30);
    await this.page.mouse.down();
    await this.page.mouse.move(caja.x + caja.width / 2, vp.height * 0.9, { steps: 10 });
    await this.page.mouse.up();
  }

  async escribirEnBuscador(texto: string): Promise<void> {
    await this.campoBusqueda.fill(texto);
  }

  async tocarAgregar(): Promise<void> {
    await this.botonAgregar.click();
    await this.encabezadoManual.waitFor({ state: 'visible', timeout: 30000 });
  }

  async tocarUbicacionActual(): Promise<void> {
    await this.botonUbicacionActual.click();
  }

  async cerrarModalPermisos(): Promise<void> {
    await this.botonCerrarPermisos.click();
    await this.modalPermisos.waitFor({ state: 'hidden', timeout: 15000 });
  }

  async reintentar(): Promise<void> {
    await this.botonReintentar.click();
  }

  async volverAlInicio(): Promise<void> {
    await this.botonVolverAlInicio.click();
  }

  /** Textos de las opciones de un `<select>`, sin el placeholder ("Elegir …"). */
  async opciones(select: Locator): Promise<string[]> {
    const textos = await select.locator('option').allTextContents();
    return textos.map((t) => t.trim()).filter((t) => t && !/^elegir /i.test(t));
  }

  /** Texto de la opción elegida en un `<select>` (el placeholder cuenta como elegida). */
  async seleccionada(select: Locator): Promise<string> {
    return select.evaluate((el: HTMLSelectElement) => el.options[el.selectedIndex]?.text?.trim() ?? '');
  }

  async elegirRegion(nombre: string): Promise<void> {
    await this.selectRegion.selectOption({ label: nombre });
  }

  async elegirComuna(nombre: string): Promise<void> {
    await this.selectComuna.selectOption({ label: nombre });
  }

  // --- Simulaciones de falla (las que los TC piden hacer con DevTools) ------------------------

  /**
   * Hace fallar la carga de las direcciones guardadas, que es lo que el TC hace a mano con
   * "Network request blocking" en DevTools.
   *
   * Al abrir el drawer, el sitio pide el cliente (`shopper-customers/.../customers/{id}`), que es
   * quien trae las direcciones; con esa respuesta en 500 el drawer muestra "Ups, algo salió mal".
   * La regex exige que la ruta termine en el id del cliente: `/customers/{id}/baskets` y
   * `/product-lists` son otras llamadas y tienen que seguir respondiendo, o se rompería el header.
   *
   * Hay que activarla **después** del login: el login también pide el cliente, y con la ruta
   * cortada la sesión no terminaría de armarse.
   *
   * **Y hay que esperar a que los datos del cliente queden viejos.** El sitio los trae armados
   * desde el servidor y los reutiliza mientras son recientes: abrir el drawer no los vuelve a pedir
   * hasta que pasan unos 60 s (medido el 2026-09-28: la primera petición salió a los ~62 s de
   * iniciar sesión, y la pantalla de error apareció al abrir el drawer después de eso). Ni abrir el
   * drawer enseguida ni recargar la página sirven —la recarga vuelve a servirlos desde el servidor—,
   * y así fallaron las dos primeras corridas de B2C-26. El tester que bloquea la petición en
   * DevTools cae en el mismo caso sin notarlo, porque tarda más que eso en preparar el bloqueo.
   */
  async forzarErrorCargaDirecciones(): Promise<void> {
    await this.page.route(RUTA_CLIENTE, (route) =>
      route.request().method() === 'GET'
        ? route.fulfill({ status: 500, contentType: 'application/json', body: '{"title":"simulado"}' })
        : route.continue(),
    );
    await this.page.waitForTimeout(ESPERA_DATOS_VIEJOS_MS);
  }

  async restaurarCargaDirecciones(): Promise<void> {
    await this.page.unroute(RUTA_CLIENTE);
  }

  /**
   * Permiso de ubicación concedido pero sin coordenadas: el equivalente de DevTools > Sensors >
   * "Location unavailable". Se instala antes de navegar para que valga en toda la sesión, también
   * al reintentar.
   */
  async simularUbicacionNoDisponible(): Promise<void> {
    await this.page.context().grantPermissions(['geolocation']);
    await this.page.addInitScript(() => {
      const error = { code: 2, message: 'Position unavailable', PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 };
      navigator.geolocation.getCurrentPosition = (_ok, ko) => {
        setTimeout(() => ko && ko(error as GeolocationPositionError), 300);
      };
      navigator.geolocation.watchPosition = (_ok, ko) => {
        setTimeout(() => ko && ko(error as GeolocationPositionError), 300);
        return 1;
      };
    });
  }

  /**
   * Google Maps caído: aborta todo lo que va a `maps.googleapis.com`, que es lo que el TC bloquea en
   * DevTools. Se instala antes de navegar, para que el SDK de Maps tampoco llegue a cargar.
   */
  async simularFallaGoogle(): Promise<void> {
    await this.page.route(/maps\.googleapis\.com/, (route) => route.abort());
  }

  /**
   * Error de API al cambiar la dirección activa: el POST `smu-delivery/.../apply` que dispara el
   * clic en una dirección guardada responde 500 (el bloqueo de DevTools del TC).
   */
  async simularErrorCambioDireccion(): Promise<void> {
    await this.page.route(RUTA_APLICAR, (route) =>
      route.request().method() === 'POST'
        ? route.fulfill({ status: 500, contentType: 'application/json', body: '{"title":"simulado"}' })
        : route.continue(),
    );
  }

  async restaurarCambioDireccion(): Promise<void> {
    await this.page.unroute(RUTA_APLICAR);
  }

  /** Error al eliminar: el DELETE `shopper-customers/.../addresses/{nombre}` responde 500. */
  async simularErrorEliminar(): Promise<void> {
    await this.page.route(RUTA_DIRECCION, (route) =>
      route.request().method() === 'DELETE'
        ? route.fulfill({ status: 500, contentType: 'application/json', body: '{"title":"simulado"}' })
        : route.continue(),
    );
  }

  /** Geolocalización concedida en las coordenadas dadas (las del Excel de data). */
  async concederUbicacion(lat: number, lng: number): Promise<void> {
    await this.page.context().grantPermissions(['geolocation']);
    await this.page.context().setGeolocation({ latitude: lat, longitude: lng });
  }

  /**
   * Registra las consultas de autocompletado a Google Places que dispara el buscador.
   *
   * El sitio las hace con el SDK de Maps (`AutocompletionService.GetPredictionsJson`, JSONP), no
   * con `fetch` a una API propia: es la única huella de red que permite afirmar "no se consultó a
   * Google" o leer qué tipo de resultado devolvió. Se engancha antes de escribir y se lee después.
   */
  observarConsultasAGoogle(): ConsultasAGoogle {
    const consultas: ConsultasAGoogle = { pedidas: [], respuestas: [] };
    const alPedir = (r: Request) => {
      if (/AutocompletionService\.GetPredictions/i.test(r.url())) consultas.pedidas.push(r.url());
    };
    const alResponder = async (r: Response) => {
      if (!/AutocompletionService\.GetPredictions/i.test(r.url())) return;
      consultas.respuestas.push(await r.text().catch(() => ''));
    };
    this.page.on('request', alPedir);
    this.page.on('response', alResponder);
    return consultas;
  }
}

/** Margen para que los datos del cliente dejen de ser recientes (ver `forzarErrorCargaDirecciones`). */
const ESPERA_DATOS_VIEJOS_MS = 70_000;

/** GET del cliente logueado, que trae las direcciones guardadas (ver `forzarErrorCargaDirecciones`). */
const RUTA_CLIENTE = /\/shopper-customers\/v1\/organizations\/[^/]+\/customers\/[^/?]+\?/;

/** POST que aplica una dirección guardada como activa. */
const RUTA_APLICAR = /\/smu-delivery\/v1\/organizations\/[^/]+\/apply/;

/** Una dirección de la libreta del cliente (el DELETE de eliminar va aquí). */
const RUTA_DIRECCION = /\/shopper-customers\/v1\/organizations\/[^/]+\/customers\/[^/]+\/addresses\//;

export interface ConsultasAGoogle {
  pedidas: string[];
  respuestas: string[];
}
