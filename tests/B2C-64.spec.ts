import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { PDPPage } from './pages/PDPPage';
import { DESKTOP_1280, MOBILE } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { BuscadorModal, FormFactor } from './pages/BuscadorModal';
import { ShelfSimplificada, ShelfSimplificadaItem } from './pages/ShelfSimplificada';
import { ListadoProductos } from './pages/ListadoProductos';
import { ShelfProducto } from './pages/ShelfProducto';
import { CombinaLaPromoModal } from './pages/CombinaLaPromoModal';
import { conEstado } from './support/estadoCompartido';
import { loginConOtp } from './support/loginOtp';
import { exigir, exigirVisible } from './support/precondicion';

/**
 * B2C-64 — Shelf simplificada (modal de buscador y modales de promoción).
 *
 * De los 34 TC de la planilla **solo dos llegaron a ejecutarse**: TC-64-D-001 y TC-64-M-001, los
 * que verifican la estructura de la shelf con un producto cualquiera de los resultados. Los otros
 * 32 quedaron `Bloqueado` antes de generar su `test()`, y por un motivo que se repite fila a fila:
 *
 * - **12 se corren con sesión iniciada** (D-012…D-017 y M-012…M-017) y su columna `Test data` no
 *   declara ninguna cuenta.
 * - **19 necesitan un producto con un atributo comercial concreto** —cucarda, varias imágenes,
 *   promo NxM, promo NxPrecio, sin stock, con PPUM, con "Combina la promo" o con "Completa la
 *   promo"— y su fila declara únicamente `{BASE_URL}`. El Excel de data tiene tokens que suenan
 *   al caso (`{SKU_PROM_NxM}`, `{SKU_SIN_STOCK}`, `{SKU_PESABLE}`…), pero elegirlos por parecido
 *   de nombre haría que el veredicto hablara del producto que yo elegí y no del componente.
 * - **D-004 sí declara `{SKU_PATROCINADO}`**, y aun así quedó bloqueado: ese SKU no muestra el tag
 *   "Patrocinado" en ninguna superficie del ambiente —ni en la shelf del SRP ni en su PDP—, de
 *   modo que la precondición "producto con tag Patrocinado activo" no se cumple. Ahí el problema
 *   es la data del ambiente, no el componente, y por eso no es un rechazo.
 *
 * Lo que la exploración fijó sobre la shelf simplificada (ver
 * `.qa/knowledge/shelf-simplificada.json`):
 *
 * - **Es la misma tarjeta de [[shelf-producto]] sin los dos accionables de la completa**: no trae
 *   "Combina la promo" ni "Ver similares". El ancla sigue siendo el botón de favoritos.
 * - **El orden vertical de sus slots** es imagen (con favoritos encima) → precios → marca+nombre →
 *   label de formato → "Agregar", y es el mismo en los dos form-factors.
 * - En **Mobile** la shelf vive dentro del overlay a pantalla completa del buscador, no dentro del
 *   `header`, así que el contenedor se resuelve por form-factor igual que en [[buscador-modal]].
 */

/**
 * El término con el que se abre el modal de resultados.
 *
 * **Ninguna fila de esta planilla declara un término de búsqueda.** Para los dos casos que sí
 * corren eso no cambia el veredicto: lo que verifican es la estructura de la shelf, que es la
 * misma para cualquier producto con resultados, y se asierta sobre el primero que devuelve la
 * búsqueda, sin elegirlo. Para los demás casos —los que piden un producto con cucarda, sin stock
 * o con una promo concreta— el término sí discriminaría, y por eso esos quedaron `Bloqueado` en
 * vez de resolverse aquí con una elección.
 */
const TERMINO = 'leche';

async function abrirResultados(page: Page, ff: FormFactor): Promise<{ home: HomePage; shelf: ShelfSimplificada }> {
  const home = new HomePage(page);
  await home.goto();

  const buscador = new BuscadorModal(page, ff);
  await buscador.abrir();
  await buscador.escribir(TERMINO);
  await expect(buscador.tituloResultados, 'el modal muestra los resultados').toHaveText(
    /resultados? para/i,
    { timeout: 30000 },
  );

  return { home, shelf: new ShelfSimplificada(page, buscador) };
}

/** Sesión de {COMPRADOR_USER} para los casos logueados: un OTP por corrida, compartido. */
const sesionComprador = conEstado('comprador', async (page, data) => {
  const correo = token(data, 'COMPRADOR_USER');
  if (!correo) throw new Error('Falta {COMPRADOR_USER} en el Excel de data: los TC lo declaran');
  await page.goto('/');
  await loginConOtp(page, correo);
});

test.describe('B2C-64 — Shelf simplificada', () => {
  test.describe('Desktop 1280x900', () => {
    test.use(DESKTOP_1280);

    test('TC-64-D-001 · Estructura y orden de slots de la shelf simplificada en el modal de buscador (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-64-D-001';
      test.setTimeout(180000);

      const { home, shelf } = await abrirResultados(page, 'desktop');
      await home.capturarEvidencia(cp, 2, 'resultados del buscador con shelves simplificadas');

      const primera = shelf.enIndice(0);
      await expect(primera.root, 'hay al menos una shelf en los resultados').toBeVisible();
      await home.capturarEvidencia(cp, 3, 'shelf simplificada del primer resultado', {
        elemento: primera.root,
      });

      // Paso 4 — los slots, en el orden que define el caso.
      const slots = await primera.slots();
      expect(slots.imagen, 'la shelf muestra la imagen del producto').not.toBeNull();
      expect(slots.favoritos, 'la shelf muestra el botón de favoritos').not.toBeNull();
      expect(slots.precio, 'la shelf muestra el bloque de precios').not.toBeNull();
      expect(slots.nombre, 'la shelf muestra la marca y el nombre').not.toBeNull();
      expect(slots.agregar, 'la shelf muestra el botón Agregar').not.toBeNull();

      expect(slots.precio!, 'los precios van debajo de la imagen').toBeGreaterThan(slots.imagen!);
      expect(slots.nombre!, 'la marca y el nombre van debajo de los precios').toBeGreaterThan(
        slots.precio!,
      );
      expect(slots.agregar!, 'el botón Agregar cierra la shelf').toBeGreaterThan(slots.nombre!);
      expect(
        slots.favoritos!,
        'el botón de favoritos va sobre la imagen, no al pie de la shelf',
      ).toBeLessThan(slots.precio!);

      // Los dos accionables que la shelf simplificada no debe traer.
      expect(await primera.tieneCombinaLaPromo(), 'la shelf no muestra "Combina la promo"').toBe(
        false,
      );
      expect(await primera.tieneVerSimilares(), 'la shelf no muestra "Ver similares"').toBe(false);

      await expect(primera.agregar, 'el botón "Agregar" está visible').toBeVisible();
      await expect(primera.agregar, 'el botón "Agregar" está habilitado').toBeEnabled();

      // eslint-disable-next-line no-console
      console.log(`[${cp}] shelf verificada: ${await primera.texto()}`);
      await home.capturarEvidencia(cp);
    });

    test('TC-64-D-002 · Label/cucarda informativa en la esquina superior izquierda de la imagen (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-64-D-002';
      test.setTimeout(180000);
      const sku = token(testData, 'SKU_MULTI_IMAGEN');
      if (!sku) throw new Error('Falta {SKU_MULTI_IMAGEN} en el Excel de data: el TC lo declara');

      // La fila no declara término: se busca por el nombre del producto declarado (de su PDP).
      const pdp = await new PDPPage(page).abrir(sku);
      const nombre = (await pdp.nombreDelProducto.innerText()).trim();
      const termino = nombre.split(' ').slice(0, 3).join(' ');

      // Pasos 1 y 2 — modal de buscador con el término y la shelf del producto.
      const home = new HomePage(page);
      await home.goto();
      const buscador = new BuscadorModal(page, 'desktop');
      await buscador.abrir();
      await buscador.escribir(termino);
      const item = new ShelfSimplificada(page, buscador).porSku(sku);
      await expect(item.root, `la shelf de ${nombre} aparece en los resultados de "${termino}"`).toBeVisible({ timeout: 30000 });
      await page.waitForTimeout(1500);
      await home.capturarEvidencia(cp, 2, `shelf simplificada de ${termino}`, { elemento: item.root });

      // Pasos 3 y 4 — presencia, posición y estilo de la cucarda.
      const m = await item.cucarda('Cyber');
      test.info().annotations.push({ type: 'cucarda', description: JSON.stringify({ termino, ...m }) });
      expect(m.cucarda, 'la cucarda "Cyber" se muestra sobre la imagen').not.toBeNull();
      const c = m.cucarda!;
      expect(c.x - m.imagen.x, 'en el borde izquierdo de la imagen').toBeLessThan(m.imagen.w / 4);
      expect(c.y - m.imagen.y, 'en el borde superior de la imagen').toBeLessThan(m.imagen.h / 4);
      expect(c.x + c.w, 'no obstruye el botón Favoritos (esquina superior derecha)').toBeLessThanOrEqual(m.favoritos.x);
      expect(m.colorTexto, 'el texto lleva el color configurado para la cucarda (#000000)').toBe('rgb(0, 0, 0)');
      await home.capturarEvidencia(cp);
    });

    test('TC-64-D-003 · Galería de imágenes en la shelf simplificada: imagen principal y navegación hasta 5 imágenes (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-64-D-003';
      test.setTimeout(180000);
      const termino = token(testData, 'SEARCH_MULTI_IMAGEN');
      if (!termino) throw new Error('Falta {SEARCH_MULTI_IMAGEN} en el Excel de data: el TC lo declara');

      // Paso 1 — modal de buscador con el término que devuelve el producto de varias imágenes.
      const home = new HomePage(page);
      await home.goto();
      const buscador = new BuscadorModal(page, 'desktop');
      await buscador.abrir();
      await buscador.escribir(termino);
      const shelves = new ShelfSimplificada(page, buscador);
      await expect(shelves.todas.first(), `el modal devuelve productos para "${termino}"`).toBeVisible({ timeout: 30000 });
      await page.waitForTimeout(2000);

      // Paso 2 — la shelf simplificada del primer resultado.
      const item = shelves.enIndice(0);
      await home.capturarEvidencia(cp, 2, `shelf simplificada de ${termino}`, { elemento: item.root });

      // Paso 3 — imagen principal visible.
      await expect(item.imagen.first(), 'la shelf muestra la imagen principal del producto').toBeVisible();
      const principal = (await item.imagen.first().getAttribute('src')) ?? '';

      // Paso 5 — como máximo 5 imágenes en la galería.
      const cantidad = await item.imagen.count();
      expect(cantidad, 'la shelf muestra como máximo 5 imágenes').toBeLessThanOrEqual(5);

      // Paso 4 — navegar entre imágenes: indicadores (dots/flechas) o rotación al pasar el mouse.
      const indicadores = await item.root
        .locator('[role="tab"], [class*="dot" i], [class*="indicator" i], button[aria-label*="siguiente" i], button[aria-label*="anterior" i]')
        .count();
      await item.imagen.first().hover();
      await page.waitForTimeout(3000);
      const tras = (await item.imagen.first().getAttribute('src')) ?? '';
      test.info().annotations.push({ type: 'galeria', description: JSON.stringify({ termino, cantidad, indicadores, rota: principal !== tras }) });
      await home.capturarEvidencia(cp, 4, 'shelf tras pasar el mouse sobre la imagen', { elemento: item.root });
      expect(
        indicadores > 0 || principal !== tras || cantidad > 1,
        `se pueden navegar las imágenes adicionales: el producto tiene 8 imágenes en su PDP y la shelf muestra ${cantidad} imagen(es), ${indicadores} indicador(es) y la imagen no cambia al pasar el mouse`,
      ).toBe(true);
      await home.capturarEvidencia(cp);
    });
  });

  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-64-M-001 · Estructura y orden de slots de la shelf simplificada en el modal de buscador (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-64-M-001';
      test.setTimeout(180000);

      const { home, shelf } = await abrirResultados(page, 'mobile');
      await home.capturarEvidencia(cp, 2, 'resultados del buscador con shelves simplificadas');

      const primera = shelf.enIndice(0);
      await expect(primera.root, 'hay al menos una shelf en los resultados').toBeVisible();
      await home.capturarEvidencia(cp, 3, 'shelf simplificada del primer resultado', {
        elemento: primera.root,
      });

      const slots = await primera.slots();
      expect(slots.imagen, 'la shelf muestra la imagen del producto').not.toBeNull();
      expect(slots.favoritos, 'la shelf muestra el botón de favoritos').not.toBeNull();
      expect(slots.precio, 'la shelf muestra el bloque de precios').not.toBeNull();
      expect(slots.nombre, 'la shelf muestra la marca y el nombre').not.toBeNull();
      expect(slots.agregar, 'la shelf muestra el botón Agregar').not.toBeNull();

      expect(slots.precio!, 'los precios van debajo de la imagen').toBeGreaterThan(slots.imagen!);
      expect(slots.nombre!, 'la marca y el nombre van debajo de los precios').toBeGreaterThan(
        slots.precio!,
      );
      expect(slots.agregar!, 'el botón Agregar cierra la shelf').toBeGreaterThan(slots.nombre!);
      expect(
        slots.favoritos!,
        'el botón de favoritos va sobre la imagen, no al pie de la shelf',
      ).toBeLessThan(slots.precio!);

      expect(await primera.tieneCombinaLaPromo(), 'la shelf no muestra "Combina la promo"').toBe(
        false,
      );
      expect(await primera.tieneVerSimilares(), 'la shelf no muestra "Ver similares"').toBe(false);

      await expect(primera.agregar, 'el botón "Agregar" está visible').toBeVisible();
      await expect(primera.agregar, 'el botón "Agregar" está habilitado').toBeEnabled();

      // eslint-disable-next-line no-console
      console.log(`[${cp}] shelf verificada: ${await primera.texto()}`);
      await home.capturarEvidencia(cp);
    });
  });

  // ============================================================ Re-ejecución 2026-11-18
  // Las filas que estaban Bloqueado por data no declarada ahora la declaran (plan de data
  // aprobado): cada caso usa SOLO el token de su fila. D/M-006 y D/M-014 ("Completa la promo")
  // siguen sin test(): el sitio no ofrece ese modal.
  for (const [vp, ff, sufijo] of [
    [DESKTOP_1280, 'desktop', 'Desktop'],
    [MOBILE, 'mobile', 'Mobile'],
  ] as const) {
    const L = ff === 'desktop' ? 'D' : 'M';
    test.describe(`${sufijo} — invitado (re-ejecución)`, () => {
      test.use(vp);

      test(`TC-64-${L}-004 · Tag Patrocinado solo en productos con la etiqueta activa (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-64-${L}-004`;
        test.setTimeout(180000);
        const termino = req(testData, 'SEARCH_PATROCINADO');
        const sku = req(testData, 'SKU_PATROCINADO');
        const { home, shelves } = await buscar(page, ff, termino);
        await expect(shelves.todas.first(), `el modal devuelve productos para "${termino}"`).toBeVisible({ timeout: 30000 });
        await home.capturarEvidencia(cp, 1, `resultados de "${termino}"`);

        // Pasos 2 y 3 — la shelf del producto patrocinado muestra el tag, bajo el nombre.
        const patro = completa(page, shelves.porSku(sku));
        await expect(patro.root, `la shelf de ${sku} aparece en los resultados`).toBeVisible({ timeout: 30000 });
        await expect(patro.root.getByText(/^patrocinado$/i), 'el tag "Patrocinado" se ve en la shelf del producto patrocinado').toBeVisible();
        const yTag = await y(patro.root.getByText(/^patrocinado$/i));
        const yNombre = await yNombreDe(patro.root);
        expect(yTag, 'el tag va bajo el nombre (zona del label de formato)').toBeGreaterThan(yNombre);
        await home.capturarEvidencia(cp, 3, 'shelf del producto patrocinado', { elemento: patro.root });

        // Pasos 4 y 5 — una shelf orgánica (otro producto de los mismos resultados) sin el tag.
        const total = await shelves.cantidad();
        let organica = null;
        for (let i = 0; i < total; i++) {
          const s = completa(page, shelves.enIndice(i));
          if (!(await s.root.locator(`a[href*="${sku}"], img[src*="${sku}"]`).count())) { organica = s; break; }
        }
        exigir(!!organica, `"${termino}" no devuelve ningún producto además de ${sku} para comparar`);
        await expect(organica!.root.getByText(/^patrocinado$/i), 'la shelf orgánica no muestra "Patrocinado"').toHaveCount(0);
        await home.capturarEvidencia(cp, 5, 'shelf de un producto organico sin el tag', { elemento: organica!.root });
        await home.capturarEvidencia(cp);
      });

      test(`TC-64-${L}-005 · Shelf simplificada dentro del modal "Combina la promo" (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-64-${L}-005`;
        test.setTimeout(180000);
        await casoCombinaLaPromo(page, testData, cp);
      });

      test(`TC-64-${L}-007 · Promo NxM visible y sin botón "Combina la promo" en la shelf simplificada (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-64-${L}-007`;
        test.setTimeout(180000);
        await casoMecanica(page, ff, cp, req(testData, 'SKU_PROM_NxM'), /\d+\s*por\s*\d+\s*a\s*\$/i, 'NxM');
      });

      test(`TC-64-${L}-008 · Promo NxPrecio visible y sin botón "Combina la promo" en la shelf simplificada (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-64-${L}-008`;
        test.setTimeout(180000);
        await casoMecanica(page, ff, cp, req(testData, 'SKU_PROM_NxPRECIO'), /lleva\s*\d+\s*por\s*\$/i, 'NxPrecio');
      });

      test(`TC-64-${L}-009 · Producto sin stock: "Pronto disponible" sin "Agregar" ni "Ver similares" (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-64-${L}-009`;
        test.setTimeout(180000);
        await casoSinStock(page, ff, cp, req(testData, 'SKU_SIN_STOCK'));
      });

      test(`TC-64-${L}-010 · Precio normal y PPUM en la shelf simplificada (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-64-${L}-010`;
        test.setTimeout(180000);
        const sku = req(testData, 'SKU_PESABLE');
        // Paso 5 — los valores del catálogo, leídos de la PDP del mismo SKU.
        const pdp = await new PDPPage(page).abrir(sku);
        const textoPdp = await page.locator('body').innerText();
        void pdp;
        const { home, item } = await shelfDe(page, ff, sku);
        await home.capturarEvidencia(cp, 2, 'shelf simplificada del producto', { elemento: item.root });
        const t = await item.root.innerText();
        const precio = (t.match(/\$[\d.]+/) ?? [])[0];
        const ppum = (t.match(/\(\$[\d.]+\s*x\s*(kg|l|un|mts|g|ml)\)/i) ?? [])[0];
        expect(precio, 'la shelf muestra el precio de lista').toBeTruthy();
        expect(ppum, 'la shelf muestra el PPUM ("($X x unidad)")').toBeTruthy();
        expect(textoPdp, `el precio ${precio} coincide con el de la PDP`).toContain(precio!);
        expect(textoPdp.replace(/\s+/g, ' '), `el PPUM ${ppum} coincide con el de la PDP`).toContain(ppum!.replace(/\s+/g, ' '));
        await home.capturarEvidencia(cp);
      });

      test(`TC-64-${L}-011 · Mecánica promocional (% de descuento) en la shelf simplificada (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-64-${L}-011`;
        test.setTimeout(180000);
        const { home, item } = await shelfDe(page, ff, req(testData, 'SKU_PROM_PCT_DESCUENTO'));
        await home.capturarEvidencia(cp, 2, 'shelf simplificada del producto con descuento', { elemento: item.root });
        const t = await item.root.innerText();
        expect(t, 'la shelf muestra el % de descuento').toMatch(/\d+\s*%/);
        expect(t, 'la shelf muestra el precio normal como "Antes:"').toMatch(/antes:\s*\$[\d.]+/i);
        const antes = Number((t.match(/antes:\s*\$([\d.]+)/i) ?? [])[1].replace(/\./g, ''));
        const ahora = Number((t.match(/\$([\d.]+)/) ?? [])[1].replace(/\./g, ''));
        expect(ahora, 'el precio con descuento es menor que el precio normal').toBeLessThan(antes);
        await home.capturarEvidencia(cp);
      });
    });

    test.describe(`${sufijo} — logueado (re-ejecución)`, { tag: '@otp' }, () => {
      test.use({ ...vp, storageState: sesionComprador });

      test(`TC-64-${L}-012 · Slots en orden de la shelf simplificada para usuario logueado (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-64-${L}-012`;
        test.setTimeout(180000);
        await exigirSesion(page);
        const { home, item } = await shelfDe(page, ff, req(testData, 'SKU_VALID_001'));
        await home.capturarEvidencia(cp, 3, 'shelf simplificada de un producto con stock', { elemento: item.root });
        const s = await item.slots();
        expect(s.imagen, 'imagen').not.toBeNull();
        expect(s.favoritos, 'favoritos').not.toBeNull();
        expect(s.precio, 'precios').not.toBeNull();
        expect(s.nombre, 'marca y nombre').not.toBeNull();
        expect(s.agregar, 'Agregar').not.toBeNull();
        expect(s.favoritos!, 'favoritos sobre la imagen').toBeLessThan(s.precio!);
        expect(s.precio!, 'precios bajo la imagen').toBeGreaterThan(s.imagen!);
        expect(s.nombre!, 'marca y nombre bajo los precios').toBeGreaterThan(s.precio!);
        expect(s.agregar!, 'Agregar cierra la shelf').toBeGreaterThan(s.nombre!);
        expect(await item.tieneCombinaLaPromo(), 'sin "Combina la promo"').toBe(false);
        expect(await item.tieneVerSimilares(), 'sin "Ver similares"').toBe(false);
        await expect(item.agregar, '"Agregar" visible').toBeVisible();
        await expect(item.agregar, '"Agregar" habilitado').toBeEnabled();
        await home.capturarEvidencia(cp);
      });

      test(`TC-64-${L}-013 · Shelf simplificada dentro del modal "Combina la promo" para usuario logueado (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-64-${L}-013`;
        test.setTimeout(180000);
        await exigirSesion(page);
        await casoCombinaLaPromo(page, testData, cp);
      });

      test(`TC-64-${L}-015 · Sin botón "Combina la promo" con promo NxM para usuario logueado (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-64-${L}-015`;
        test.setTimeout(180000);
        await exigirSesion(page);
        await casoMecanica(page, ff, cp, req(testData, 'SKU_PROM_NxM'), /\d+\s*por\s*\d+\s*a\s*\$/i, 'NxM');
      });

      test(`TC-64-${L}-016 · Producto sin stock para usuario logueado (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-64-${L}-016`;
        test.setTimeout(180000);
        await exigirSesion(page);
        await casoSinStock(page, ff, cp, req(testData, 'SKU_SIN_STOCK'));
      });

      test(`TC-64-${L}-017 · Sección de precios completa para usuario logueado (${sufijo})`, async ({ page, testData }) => {
        const cp = `TC-64-${L}-017`;
        test.setTimeout(180000);
        await exigirSesion(page);
        const { home, item } = await shelfDe(page, ff, req(testData, 'SKU_PROM_NxPRECIO'));
        await home.capturarEvidencia(cp, 3, 'seccion de precios de la shelf', { elemento: item.root });
        const t = await item.root.innerText();
        expect(t, 'precio de lista ("$X c/u")').toMatch(/\$[\d.]+\s*c\/u/i);
        expect(t, 'mecánica promocional destacada ("Lleva N por $X")').toMatch(/lleva\s*\d+\s*por\s*\$[\d.]+/i);
        expect(t, 'PPUM ("($X x unidad)")').toMatch(/\(\$[\d.]+\s*x\s*(kg|l|un|mts|g|ml)\)/i);
        await home.capturarEvidencia(cp);
      });
    });
  }

  test.describe('Mobile — invitado, cucarda y galería (re-ejecución)', () => {
    test.use(MOBILE);

    test('TC-64-M-002 · Label/cucarda informativa en la esquina superior izquierda de la imagen (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-64-M-002';
      test.setTimeout(180000);
      const { home, item } = await shelfDe(page, 'mobile', req(testData, 'SKU_CUCARDA'));
      await home.capturarEvidencia(cp, 2, 'shelf simplificada del producto con cucarda', { elemento: item.root });
      const m = await item.cucarda('Cyber');
      test.info().annotations.push({ type: 'cucarda', description: JSON.stringify(m) });
      expect(m.cucarda, 'la cucarda "Cyber" se muestra sobre la imagen').not.toBeNull();
      const c = m.cucarda!;
      expect(c.x - m.imagen.x, 'en el borde izquierdo de la imagen').toBeLessThan(m.imagen.w / 4);
      expect(c.y - m.imagen.y, 'en el borde superior de la imagen').toBeLessThan(m.imagen.h / 4);
      expect(c.x + c.w, 'no obstruye el botón Favoritos').toBeLessThanOrEqual(m.favoritos.x);
      expect(m.colorTexto, 'el texto lleva el color configurado para la cucarda (#000000)').toBe('rgb(0, 0, 0)');
      await home.capturarEvidencia(cp);
    });

    test('TC-64-M-003 · Galería de imágenes: imagen principal y navegación hasta 5 imágenes (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-64-M-003';
      test.setTimeout(180000);
      const { home, item } = await shelfDe(page, 'mobile', req(testData, 'SKU_MULTI_IMAGEN'));
      await home.capturarEvidencia(cp, 2, 'shelf simplificada del producto con varias imagenes', { elemento: item.root });
      await expect(item.imagen.first(), 'la shelf muestra la imagen principal').toBeVisible();
      const cantidad = await item.imagen.count();
      expect(cantidad, 'como máximo 5 imágenes').toBeLessThanOrEqual(5);
      const principal = (await item.imagen.first().getAttribute('src')) ?? '';
      const indicadores = await item.root
        .locator('[role="tab"], [class*="dot" i], [class*="indicator" i], button[aria-label*="siguiente" i], button[aria-label*="anterior" i]')
        .count();
      // Paso 4 — swipe horizontal sobre la imagen.
      const box = await item.imagen.first().boundingBox();
      if (box) {
        await page.mouse.move(box.x + box.width * 0.8, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width * 0.2, box.y + box.height / 2, { steps: 8 });
        await page.mouse.up();
      }
      await page.waitForTimeout(1500);
      const visibleTras = await item.imagen.evaluateAll((imgs) => {
        const r = imgs.map((i) => i.getBoundingClientRect());
        const p = imgs[0].closest('div')!.getBoundingClientRect();
        return imgs.map((i, k) => ({ src: i.getAttribute('src'), x: Math.round(r[k].left - p.left) }));
      });
      test.info().annotations.push({ type: 'galeria', description: JSON.stringify({ cantidad, indicadores, principal, visibleTras }) });
      await home.capturarEvidencia(cp, 4, 'galeria tras deslizar la imagen', { elemento: item.root });
      const tras = (await item.imagen.first().getAttribute('src')) ?? '';
      expect(
        indicadores > 0 || cantidad > 1 || principal !== tras,
        `se pueden navegar las imágenes adicionales: la shelf muestra ${cantidad} imagen(es) y ${indicadores} indicador(es)`,
      ).toBe(true);
      await home.capturarEvidencia(cp);
    });
  });
});

// ---------------------------------------------------------------- ayudas de la re-ejecución

/**
 * La tarjeta completa de una shelf simplificada. El locator del POM ancla en el div cuyo hijo trae
 * el botón de favoritos, que en el render actual es solo la zona de la imagen: para leer precios,
 * labels y botones hace falta el ancestro más cercano que también contiene el precio.
 */
function completa(page: Page, item: ShelfSimplificadaItem): ShelfSimplificadaItem {
  return new ShelfSimplificadaItem(
    page,
    item.root.locator('xpath=ancestor-or-self::div[.//button[@aria-label="Guardar en favoritos"] and contains(., "$")][1]'),
  );
}

function req(testData: Parameters<typeof token>[0], nombre: string): string {
  const v = token(testData, nombre);
  if (!v) throw new Error(`Falta {${nombre}} en el Excel de data: la fila del TC lo declara`);
  return v;
}

async function y(l: import('@playwright/test').Locator): Promise<number> {
  const b = await l.first().boundingBox();
  if (!b) throw new Error('elemento sin caja visible');
  return b.y;
}

/** Posición vertical del texto "Marca | Nombre" de la tarjeta (el menor elemento que lo contiene). */
async function yNombreDe(root: import('@playwright/test').Locator): Promise<number> {
  return root.evaluate((el) => {
    const c = [...el.querySelectorAll('*')].filter((e) => / \| /.test(e.textContent ?? ''));
    const hoja = c.find((e) => ![...e.children].some((h) => / \| /.test(h.textContent ?? ''))) ?? el;
    return hoja.getBoundingClientRect().top;
  });
}

async function exigirSesion(page: Page): Promise<void> {
  await page.goto('/');
  const ingresa = page.getByRole('button', { name: /ingresa aqu[ií]/i }).filter({ visible: true });
  await page.waitForTimeout(3000);
  exigir((await ingresa.count()) === 0, 'la sesión de {COMPRADOR_USER} no quedó iniciada (el header sigue mostrando «Ingresa aquí»)');
}

async function buscar(page: Page, ff: FormFactor, termino: string) {
  const home = new HomePage(page);
  await home.goto();
  const buscador = new BuscadorModal(page, ff);
  await buscador.abrir();
  await buscador.escribir(termino);
  await expect(buscador.tituloResultados, 'el modal muestra los resultados').toHaveText(/resultados? para/i, { timeout: 30000 });
  await page.waitForTimeout(1500);
  return { home, buscador, shelves: new ShelfSimplificada(page, buscador) };
}

/** Busca el SKU declarado (el término es el propio SKU, que el buscador encuentra) y devuelve su shelf. */
async function shelfDe(page: Page, ff: FormFactor, sku: string) {
  const { home, shelves } = await buscar(page, ff, sku);
  const item = completa(page, shelves.porSku(sku));
  await exigirVisible(item.root, `el buscador no devuelve ${sku}`);
  await home.capturarEvidencia(test.info().title.split(' ')[0], 1, `modal de buscador con ${sku}`);
  return { home, item };
}

async function casoMecanica(page: Page, ff: FormFactor, cp: string, sku: string, re: RegExp, nombre: string) {
  const { home, item } = await shelfDe(page, ff, sku);
  await home.capturarEvidencia(cp, 2, `shelf simplificada del producto ${nombre}`, { elemento: item.root });
  expect(await item.root.innerText(), `la mecánica ${nombre} se ve en la sección de precios`).toMatch(re);
  expect(await item.tieneCombinaLaPromo(), 'la shelf no muestra "Combina la promo >"').toBe(false);
  await home.capturarEvidencia(cp);
}

async function casoSinStock(page: Page, ff: FormFactor, cp: string, sku: string) {
  const { home, item } = await shelfDe(page, ff, sku);
  await home.capturarEvidencia(cp, 2, 'shelf simplificada del producto sin stock', { elemento: item.root });
  const pronto = item.root.getByText(/pronto disponible/i);
  await expect(pronto, 'la etiqueta "Pronto disponible" se muestra').toBeVisible();
  const precio = item.root.getByText(/\$[\d.]+/).first();
  expect(await y(pronto), '"Pronto disponible" va debajo del precio').toBeGreaterThan(await y(precio));
  await expect(item.agregar, 'sin botón "Agregar"').toHaveCount(0);
  expect(await item.tieneVerSimilares(), 'sin botón "Ver similares"').toBe(false);
  await expect(item.imagen.first(), 'la imagen se mantiene').toBeVisible();
  await expect(item.favoritos, 'favoritos se mantiene').toBeVisible();
  expect(await item.root.innerText(), 'marca y nombre se mantienen').toMatch(/\S\s*\|\s*\S/);
  await home.capturarEvidencia(cp);
}

async function casoCombinaLaPromo(page: Page, testData: Parameters<typeof token>[0], cp: string) {
  const listado = new ListadoProductos(page, new URL(req(testData, 'PLP_URL')).pathname.slice(1));
  await listado.goto();
  let shelf: ShelfProducto | null = null;
  const total = await listado.shelves.count();
  for (let i = 0; i < total && !shelf; i++) {
    const s = ShelfProducto.enIndice(page, i);
    if ((await s.combinaLaPromo.count()) > 0) shelf = s;
  }
  exigir(!!shelf, 'ninguna shelf de la PLP declarada muestra "Combina la promo"');
  await shelf!.combinaLaPromo.first().scrollIntoViewIfNeeded();
  await listado.capturarEvidencia(cp, 1, 'PLP con el boton "Combina la promo"', { elemento: shelf!.root });
  await shelf!.combinaLaPromo.first().click();
  const modal = new CombinaLaPromoModal(page);
  await expect(modal.root, 'se abre el modal "Combina la promo"').toBeVisible({ timeout: 20000 });
  await expect(modal.variantes.first(), 'el modal muestra shelves simplificadas').toBeVisible({ timeout: 20000 });
  await page.waitForTimeout(1500);
  await listado.capturarEvidencia(cp, 3, 'modal "Combina la promo" con sus shelves');
  const v = modal.variantes.first().locator('xpath=ancestor-or-self::div[.//button[@aria-label="Guardar en favoritos"] and contains(., "$")][1]');
  const t = await v.innerText();
  await expect(v.locator('img').first(), 'imagen').toBeVisible();
  await expect(v.locator('button[aria-label="Guardar en favoritos"]').first(), 'botón Favoritos').toBeVisible();
  expect(t, 'precios').toMatch(/\$[\d.]+/);
  expect(t, 'marca + nombre').toMatch(/\S\s*\|\s*\S/);
  const agregarOCantidad = v.getByRole('button', { name: /^agregar$|aumentar|sumar/i });
  expect(await agregarOCantidad.count(), 'botón "Agregar" (o el control de cantidad si ya está en el carro)').toBeGreaterThan(0);
  expect(t, 'sin "Combina la promo"').not.toMatch(/combina la promo/i);
  expect(t, 'sin "Ver similares"').not.toMatch(/ver similares/i);
  await listado.capturarEvidencia(cp, 4, 'shelf simplificada dentro del modal', { elemento: v });
  await listado.capturarEvidencia(cp);
}
