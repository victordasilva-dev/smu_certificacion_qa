import { test, expect } from './support/fixtures';
import { TabBar } from './pages/TabBar';
import { CategoriasModal } from './pages/CategoriasModal';
import { ListadoScreen } from './pages/ListadoScreen';
import { tolerante } from './support/tolerante';

/**
 * B2C-21 — Modal de categorías de la app.
 *
 * Las filas declaran `Plataforma: App iOS/Android`. Esta corrida (2026-10-06) certifica **solo
 * Android**, con el build v1.0.7 que declara {APP_BUILD}, por pedido del usuario: los casos se
 * escriben solo con el sufijo (Android). iOS queda sin correr hasta que haya clave de Mobile Next.
 *
 * TC-B2C21-APP-002 (icono sandwich del header): en v1.0.7 la app no muestra ningún header con
 * icono sandwich en Home, modal de categorías, Buscar, Mis productos ni Mi cuenta. El usuario lo
 * trata como defecto, así que su `test()` lo exige y falla.
 *
 * Las N1/N2 que se verifican son las que la app muestra hoy ("Carnes" → "Cerdo", "Frutas y
 * Verduras" → "Frutas"): el TC pide "las categorías N1 activas", y esas las define el catálogo.
 */
for (const plataforma of ['Android'] as const) {
  test.describe(`B2C-21 — Modal de categorias (${plataforma})`, () => {
    test(`TC-B2C21-APP-001 · Apertura del modal de categorias desde el tab Categorias de la TabBar (${plataforma})`, async ({
      screen,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C21-APP-001';
      const tabs = new TabBar(screen, p);

      // Paso 1 — una pantalla cualquiera: el Home tras abrir la app.
      await tabs.waitUntilReady();
      await expect(tabs.selectorDeEntrega).toBeVisible();
      await tabs.capturarEvidencia(cp, 1, 'home con la TabBar');

      // Paso 2 — tap en el tab Categorías.
      const modal = await tabs.tapCategorias();

      // Esperado — el modal se despliega con las categorías N1.
      await expect(modal.todas).toBeVisible();
      await expect(modal.texto('Carnes').first()).toBeVisible();
      await expect(modal.texto('Frutas y Verduras').first()).toBeVisible();
      await modal.capturarEvidencia(cp, 3, 'modal de categorias con las N1');
    });

    test(`TC-B2C21-APP-002 · Apertura del modal de categorias con el icono sandwich del header (${plataforma})`, async ({
      screen,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C21-APP-002';
      const tabs = new TabBar(screen, p);

      // Paso 1 — una pantalla cualquiera: el Home tras abrir la app.
      await tabs.waitUntilReady();
      await tabs.capturarEvidencia(cp, 1, 'home: header sin icono sandwich');

      // Paso 2 — tap en el icono sandwich del header.
      await expect(tabs.iconoSandwich, 'el header muestra el icono sandwich').toBeVisible({ timeout: 10000 });
      const modal = await tabs.tapIconoSandwich();

      // Esperado — el modal se despliega con las categorías N1.
      await expect(modal.todas).toBeVisible();
      await modal.capturarEvidencia(cp, 3, 'modal de categorias con las N1');
    });

    test(`TC-B2C21-APP-003 · Estructura del modal de categorias (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C21-APP-003';
      const tabs = new TabBar(screen, p);
      await tabs.waitUntilReady();

      // Paso 1 — abrir el modal.
      const modal = await tabs.tapCategorias();
      await modal.waitUntilReady();

      // Paso 2 / esperado — buscador, '<', 'Todas', carrusel N1 y N2 debajo de cada top categoría.
      await expect(modal.buscador).toBeVisible();
      await expect(modal.volver).toBeVisible();
      await expect(modal.todas).toBeVisible();
      // Cada N1 aparece dos veces: como chip del carrusel y como título de su sección.
      expect(await modal.texto('Carnes').count()).toBeGreaterThanOrEqual(2);
      expect(await modal.texto('Frutas y Verduras').count()).toBeGreaterThanOrEqual(2);
      // N2 bajo su N1.
      await expect(modal.texto('Cerdo').first()).toBeVisible();
      await expect(modal.texto('Frutas').first()).toBeVisible();
      await modal.capturarEvidencia(cp, 2, 'buscador, icono <, Todas, carrusel N1 y subcategorias N2');
    });

    test(`TC-B2C21-APP-004 · Cierre del modal mediante el icono '<' (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C21-APP-004';
      const tabs = new TabBar(screen, p);
      await tabs.waitUntilReady();

      // Paso 1 — abrir el modal.
      const modal = await tabs.tapCategorias();
      await modal.waitUntilReady();
      await modal.capturarEvidencia(cp, 1, 'modal de categorias abierto');

      // Paso 2 — tap en '<'.
      await modal.tapVolver();

      // Esperado — el modal se cierra.
      await expect(modal.todas).not.toBeVisible();
      await expect(modal.volver).not.toBeVisible();
      await expect(tabs.selectorDeEntrega).toBeVisible();
      await tabs.capturarEvidencia(cp, 3, 'modal cerrado, de vuelta en el home');
    });

    test(`TC-B2C21-APP-005 · Modal de categorias se cierra al tocar otro tab de la TabBar (${plataforma})`, async ({
      screen,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C21-APP-005';
      const tabs = new TabBar(screen, p);
      await tabs.waitUntilReady();

      // Paso 1 — abrir el modal.
      const modal = await tabs.tapCategorias();
      await modal.waitUntilReady();
      await modal.capturarEvidencia(cp, 1, 'modal de categorias abierto');

      // Paso 2 — tocar otro tab (Buscar).
      await tabs.tapBuscar();

      // Esperado — el modal se cierra y la app muestra la sección Buscar.
      await expect(modal.todas).not.toBeVisible();
      await expect(tabs.pantallaBuscar).toBeVisible();
      await tabs.capturarEvidencia(cp, 3, 'modal cerrado y pantalla Buscar');
    });

    // 006–017 (2026-11-09): las filas no declaran Test data; por pedido del usuario se corren con la
    // app ya instalada y el estado de catálogo que pide cada TC se identifica en el propio menú.
    // Si el menú no tiene una categoría que lo cumpla, el TC es PRECONDICION_NO_DISPONIBLE.

    test(`TC-B2C21-APP-006 · Comportamiento del carrusel de top categorias (pildoras) (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C21-APP-006';
      const modal = await abrirMenu(screen, p);
      const antes = await modal.chips();
      const enteros = antes.filter((c) => c.texto !== 'Todas' && c.x + c.ancho <= 1080);
      await modal.capturarEvidencia(cp, 2, 'carrusel de top categorias, primer slide');
      await modal.deslizarChips();
      const despues = await modal.chips();
      await modal.capturarEvidencia(cp, 3, 'carrusel tras deslizar');
      const nuevos = despues.filter((c) => !antes.some((a) => a.texto === c.texto));
      test.info().annotations.push({ type: 'chips', description: `antes: ${antes.map((c) => c.texto).join(' | ')} — después: ${despues.map((c) => c.texto).join(' | ')}` });
      expect(antes[0]?.texto, 'el carrusel abre con «Todas»').toBe('Todas');
      expect(enteros.length, 'hasta 3 botones por slide además de «Todas»').toBeGreaterThan(0);
      expect(enteros.length).toBeLessThanOrEqual(3);
      expect(nuevos.length, 'al deslizar se accede al resto de las top categorías').toBeGreaterThan(0);
    });

    test(`TC-B2C21-APP-007 · Redireccion al hacer tap en una top categoria del carrusel (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C21-APP-007';
      const modal = await abrirMenu(screen, p);
      const chip = (await modal.chips()).find((c) => c.texto !== 'Todas' && c.x + c.ancho <= 1080 && !/recetas/i.test(c.texto));
      if (!chip) throw new Error('PRECONDICION_NO_DISPONIBLE: el carrusel no muestra ninguna top categoría N1 entera en el primer slide');
      await modal.capturarEvidencia(cp, 1, `modal con la top categoria ${chip.texto}`);
      const plp = await modal.tapChip(chip.texto);
      await plp.waitUntilReady();
      const titulo = await plp.titulo();
      await plp.capturarEvidencia(cp, 3, `tras tocar ${chip.texto}`);
      test.info().annotations.push({ type: 'destino', description: `chip «${chip.texto}» → título «${titulo}»` });
      await expect(modal.todas, 'el menú se cierra').not.toBeVisible();
      expect(titulo, 'la PLP de la N1 seleccionada').toBe(chip.texto);
    });

    test(`TC-B2C21-APP-008 · Estructura del menu de categorias N1 y subcategorias N2 (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C21-APP-008';
      const modal = await abrirMenu(screen, p);
      const s = await modal.buscarSeccion((x) => x.n2.length >= 4 && x.n2.every((t) => !t.iniciales));
      if (!s) throw new Error('PRECONDICION_NO_DISPONIBLE: el menú no tiene una N1 con 4 o más N2 activas para ver el carrusel');
      await modal.capturarEvidencia(cp, 2, `seccion ${s.n1.texto} con su carrusel N2`);
      // Android recorta la caja del tile que asoma al ancho de pantalla: entero es el que tiene el ancho del primero.
      const ancho = s.n2[0].ancho;
      const enteras = s.n2.filter((t) => t.ancho >= ancho * 0.9);
      const cortada = s.n2.find((t) => t.ancho < ancho * 0.9 && t.x + t.ancho >= 1070);
      const secciones = await modal.secciones();
      test.info().annotations.push({ type: 'seccion', description: `${s.n1.texto}: ${s.n2.map((t) => `${t.nombre.replace(/\n/g, ' ')} [${t.x},${t.ancho}]`).join(' | ')}` });
      expect(s.n1.ancho, 'la fila N1 ocupa el ancho (nombre + «>»)').toBeGreaterThanOrEqual(1000);
      expect(enteras.length, '3 slides enteros').toBe(3);
      expect(cortada, 'y medio slide asomando (3.5 visibles)').toBeTruthy();
      expect(secciones.length, 'las secciones N1 se apilan verticalmente').toBeGreaterThanOrEqual(2);
      expect(secciones.every((x, i) => i === 0 || x.n1.y > secciones[i - 1].n1.y)).toBe(true);
    });

    test(`TC-B2C21-APP-009 · Deslizamiento vertical del menu con mas de 3 top categorias (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C21-APP-009';
      const modal = await abrirMenu(screen, p);
      const vistas = new Set((await modal.secciones()).map((s) => s.n1.texto));
      await modal.capturarEvidencia(cp, 1, 'menu antes de deslizar');
      for (let i = 0; i < 3; i++) await screen.swipe('up');
      const nuevas = (await modal.secciones()).map((s) => s.n1.texto).filter((t) => !vistas.has(t));
      await modal.capturarEvidencia(cp, 3, 'menu tras deslizar verticalmente');
      test.info().annotations.push({ type: 'secciones', description: `antes: ${[...vistas].join(' | ')} — nuevas: ${nuevas.join(' | ')}` });
      expect(nuevas.length, 'al deslizar aparecen el resto de las top categorías').toBeGreaterThan(0);
    });

    test(`TC-B2C21-APP-010 · Categoria N1 sin subcategorias N2 solo muestra nombre e icono (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C21-APP-010';
      const modal = await abrirMenu(screen, p);
      const s = await modal.buscarSeccion((x) => x.n2.length === 0);
      if (!s) throw new Error('PRECONDICION_NO_DISPONIBLE: el menú no tiene ninguna N1 sin subcategorías N2');
      await modal.capturarEvidencia(cp, 3, `${s.n1.texto} sin carrusel N2`);
      test.info().annotations.push({ type: 'n1', description: `${s.n1.texto}: siguiente fila a ${s.siguiente!.y - s.n1.y}px` });
      expect(s.n2.length, 'sin carrusel de N2').toBe(0);
      expect(s.siguiente!.y - (s.n1.y + s.n1.alto), 'solo la fila con nombre e icono').toBeLessThan(150);
    });

    test(`TC-B2C21-APP-011 · Redireccion al hacer tap en el nombre de una categoria N1 (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C21-APP-011';
      const modal = await abrirMenu(screen, p);
      const s = (await modal.secciones()).find((x) => !/recetas/i.test(x.n1.texto) && !x.n1.texto.endsWith('...'));
      if (!s) throw new Error('PRECONDICION_NO_DISPONIBLE: no hay una sección N1 visible');
      await modal.capturarEvidencia(cp, 1, `modal con la seccion ${s.n1.texto}`);
      const plp = await modal.tapSeccionN1(s.n1.texto);
      await plp.waitUntilReady();
      const titulo = await plp.titulo();
      await plp.capturarEvidencia(cp, 3, `tras tocar ${s.n1.texto}`);
      test.info().annotations.push({ type: 'destino', description: `N1 «${s.n1.texto}» → título «${titulo}»` });
      await expect(modal.todas, 'el menú se cierra').not.toBeVisible();
      expect(titulo, 'la PLP de la N1 seleccionada').toBe(s.n1.texto);
    });

    test(`TC-B2C21-APP-012 · Redireccion al hacer tap en una categoria N2 (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C21-APP-012';
      const modal = await abrirMenu(screen, p);
      const s = (await modal.secciones()).find((x) => !/recetas/i.test(x.n1.texto) && x.n2.some((t) => t.x + t.ancho <= 1080));
      if (!s) throw new Error('PRECONDICION_NO_DISPONIBLE: no hay una N1 con subcategorías N2 visibles');
      const n2 = s.n2.find((t) => t.x + t.ancho <= 1080 && !t.nombre.includes('\n'))!;
      await modal.capturarEvidencia(cp, 1, `modal con la N2 ${n2.nombre}`);
      await screen.getByText(n2.nombre, { exact: true }).first().tap();
      const plp = new ListadoScreen(screen, p);
      await plp.waitUntilReady();
      const titulo = await plp.titulo();
      await plp.capturarEvidencia(cp, 3, `tras tocar ${n2.nombre}`);
      test.info().annotations.push({ type: 'destino', description: `N2 «${n2.nombre}» (${s.n1.texto}) → título «${titulo}»` });
      expect(titulo, 'la PLP de la N2 seleccionada').toBe(n2.nombre);
    });

    test(`TC-B2C21-APP-013 · Carrusel N2 con una sola subcategoria se alinea a la izquierda sin deslizamiento (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C21-APP-013';
      const modal = await abrirMenu(screen, p);
      const s = await modal.buscarSeccion((x) => x.n2.length === 1);
      if (!s) throw new Error('PRECONDICION_NO_DISPONIBLE: el menú no tiene ninguna N1 con exactamente una N2');
      await modal.capturarEvidencia(cp, 2, `${s.n1.texto} con una sola N2`);
      const antes = s.n2[0];
      await modal.deslizarN2(s);
      const despues = (await modal.secciones()).find((x) => x.n1.texto === s.n1.texto)!.n2[0];
      await modal.capturarEvidencia(cp, 3, 'tras intentar deslizar el carrusel');
      test.info().annotations.push({ type: 'tile', description: `${s.n1.texto} → ${antes.nombre.replace(/\n/g, ' ')}: x antes ${antes.x}, después ${despues?.x}` });
      expect(antes.x, 'alineado a la izquierda (mismo margen que la fila N1)').toBeLessThanOrEqual(s.n1.x + 60);
      expect(despues?.x, 'el carrusel no se desliza').toBe(antes.x);
    });

    test(`TC-B2C21-APP-014 · Nombre de top categoria N1 mayor a 20 caracteres se trunca con puntos suspensivos (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C21-APP-014';
      const modal = await abrirMenu(screen, p);
      let largo = (await modal.chips()).find((c) => /(\.\.\.|…)$/.test(c.texto));
      for (let i = 0; i < 6 && !largo; i++) {
        await modal.deslizarChips();
        largo = (await modal.chips()).find((c) => /(\.\.\.|…)$/.test(c.texto));
      }
      if (!largo) throw new Error('PRECONDICION_NO_DISPONIBLE: el carrusel no tiene ninguna top categoría con nombre de más de 20 caracteres');
      await modal.capturarEvidencia(cp, 3, `top categoria ${largo.texto}`);
      const plp = await modal.tapChip(largo.texto);
      await plp.waitUntilReady();
      const completo = await plp.titulo();
      await plp.capturarEvidencia(cp, 3, `nombre completo ${completo}`);
      const visible = largo.texto.replace(/(\.\.\.|…)$/, '');
      test.info().annotations.push({ type: 'nombre', description: `menú «${largo.texto}» — completo «${completo}» (${completo.length} car.)` });
      expect(completo.length, 'el nombre completo supera los 20 caracteres').toBeGreaterThan(20);
      expect(visible, 'se muestran los primeros 20 caracteres').toBe(completo.slice(0, 20));
    });

    test(`TC-B2C21-APP-015 · Nombre de categoria N2 entre 15 y 28 caracteres se ajusta a 2 lineas sin cortar palabras (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C21-APP-015';
      const modal = await abrirMenu(screen, p);
      const largo = (t: { nombre: string }) => t.nombre.replace(/\n/g, ' ').length;
      const s = await modal.buscarSeccion((x) => x.n2.some((t) => largo(t) >= 15 && largo(t) <= 28 && !/(\.\.\.|…)$/.test(t.nombre)));
      if (!s) throw new Error('PRECONDICION_NO_DISPONIBLE: el menú no tiene una N2 con nombre de entre 15 y 28 caracteres');
      const n2 = s.n2.find((t) => largo(t) >= 15 && largo(t) <= 28 && !/(\.\.\.|…)$/.test(t.nombre))!;
      await modal.capturarEvidencia(cp, 3, `N2 ${n2.nombre.replace(/\n/g, ' ')}`);
      await screen.getByText(n2.nombre).first().tap();
      const plp = new ListadoScreen(screen, p);
      await plp.waitUntilReady();
      const completo = await plp.titulo();
      const lineas = n2.nombre.split('\n');
      const palabras = completo.split(/\s+/);
      test.info().annotations.push({ type: 'nombre', description: `menú ${JSON.stringify(n2.nombre)} — completo «${completo}»` });
      expect(lineas.length, 'máximo 2 líneas').toBeLessThanOrEqual(2);
      expect(lineas.join(' '), 'el nombre se muestra completo').toBe(completo);
      for (const l of lineas) expect(l.split(/\s+/).every((w) => palabras.includes(w)), `«${l}» sin palabras cortadas`).toBe(true);
    });

    test(`TC-B2C21-APP-016 · Nombre de categoria N2 mayor a 28 caracteres se trunca en el limite de palabra (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C21-APP-016';
      const modal = await abrirMenu(screen, p);
      const s = await modal.buscarSeccion((x) => x.n2.some((t) => /(\.\.\.|…)$/.test(t.nombre) && t.x + t.ancho <= 1080));
      if (!s) throw new Error('PRECONDICION_NO_DISPONIBLE: el menú no tiene una N2 truncada (nombre de más de 28 caracteres) visible entera');
      const n2 = s.n2.find((t) => /(\.\.\.|…)$/.test(t.nombre) && t.x + t.ancho <= 1080)!;
      await modal.capturarEvidencia(cp, 3, `N2 ${n2.nombre.replace(/\n/g, ' ')}`);
      await screen.getByText(n2.nombre).first().tap();
      const plp = new ListadoScreen(screen, p);
      await plp.waitUntilReady();
      const completo = await plp.titulo();
      await plp.capturarEvidencia(cp, 3, `nombre completo ${completo}`);
      const visible = n2.nombre.replace(/(\.\.\.|…)$/, '').replace(/\n/g, ' ').trim();
      test.info().annotations.push({ type: 'nombre', description: `menú ${JSON.stringify(n2.nombre)} — completo «${completo}» (${completo.length} car.)` });
      expect(completo.length, 'el nombre completo supera los 28 caracteres').toBeGreaterThan(28);
      expect(n2.nombre.split('\n').length, 'máximo 2 líneas').toBeLessThanOrEqual(2);
      expect(completo.startsWith(visible), 'lo visible es el comienzo del nombre').toBe(true);
      expect([' ', ''].includes(completo.charAt(visible.length)), 'corta en el límite de una palabra').toBe(true);
    });

    test(`TC-B2C21-APP-017 · Categoria sin thumbnail muestra imagen placeholder (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C21-APP-017';
      const modal = await abrirMenu(screen, p);
      // Sin thumbnail configurado la app no dibuja imagen: el tile lleva las iniciales del nombre.
      const s = await modal.buscarSeccion((x) => x.n2.some((t) => t.iniciales));
      if (!s) throw new Error('PRECONDICION_NO_DISPONIBLE: el menú no muestra ninguna categoría sin thumbnail');
      const sin = s.n2.filter((t) => t.iniciales);
      await modal.capturarEvidencia(cp, 3, `${s.n1.texto}: categorias sin thumbnail`);
      test.info().annotations.push({ type: 'sin-thumbnail', description: sin.map((t) => `${t.nombre} → «${t.iniciales}»`).join(' | ') });
      expect(sin.map((t) => t.iniciales), 'imagen placeholder genérica, no las iniciales del nombre').toEqual(sin.map(() => null));
    });
  });
}

async function abrirMenu(screen: any, p: any): Promise<CategoriasModal> {
  const tabs = new TabBar(screen, p);
  await tolerante(() => tabs.waitUntilReady());
  const modal = await tabs.tapCategorias();
  await tolerante(() => modal.waitUntilReady());
  return modal;
}
