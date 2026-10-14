import { test, expect } from './support/fixtures';
import { TabBar } from './pages/TabBar';

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
  });
}
