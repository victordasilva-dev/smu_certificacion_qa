import * as fs from 'fs';
import * as path from 'path';
import { test, expect } from './support/fixtures';
import { NavBar } from './pages/NavBar';
import { TabBar } from './pages/TabBar';
import { HomeScreen } from './pages/HomeScreen';
import { MiCuentaScreen } from './pages/MiCuentaScreen';
import { rutaEvidencia } from '../tests/support/rutasEvidencia';
import { proporcionRojiza } from './support/pixeles';

/**
 * B2C-23 — NavBar de la app.
 *
 * Las filas declaran `Plataforma: App iOS/Android`. Esta corrida (2026-10-06) certifica **solo
 * Android**, con el build v1.0.7 que declara {APP_BUILD}, por pedido del usuario: los casos se
 * escriben solo con el sufijo (Android). iOS queda sin correr hasta que haya clave de Mobile Next.
 *
 * Solo están los TC que corren como invitado sin método de entrega y sin más data que el build.
 * Los que piden cuenta, dirección o condición de despacho, checkout o el content asset de BM vacío
 * quedan en Bloqueado Data; el 009 (página 404/500) en Bloqueado; los BM, Fuera de Alcance.
 */
for (const plataforma of ['Android'] as const) {
  test.describe(`B2C-23 — NavBar (${plataforma})`, () => {
    test(`TC-B2C23-APP-001 · Estructura y composicion del NavBar (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C23-APP-001';
      const nav = await new NavBar(screen, p).waitUntilReady();

      // Paso 1 — una pantalla antes del checkout: el Home.
      await nav.capturarEvidencia(cp, 1, 'home con el NavBar');

      // Paso 2 — posición, ancho y contenido.
      const caja = await nav.metodoDeEntrega.boundingBox();
      const pantalla = await new TabBar(screen, p).tab('Home').boundingBox();
      const accesos = await nav.accesosDirectos();
      await nav.capturarEvidencia(cp, 2, 'NavBar con metodo de entrega, membresia y accesos', {
        elemento: nav.metodoDeEntrega,
      });

      // Esperado — fijo arriba, a todo el ancho, con Método de entrega, Membresía y accesos directos.
      expect(caja.y, 'el NavBar está en la parte superior').toBeLessThan(200);
      expect(caja.x, 'el NavBar arranca en el borde izquierdo').toBe(0);
      expect(caja.width, 'el NavBar ocupa el ancho completo').toBeGreaterThanOrEqual(pantalla.x + pantalla.width);
      await expect(nav.botonMembresia, 'botón Membresía').toBeVisible();
      expect(accesos.length, `accesos directos (${accesos.join(', ')})`).toBeGreaterThan(0);
    });

    test(`TC-B2C23-APP-002 · Estado sin metodo de entrega seleccionado (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C23-APP-002';
      const nav = await new NavBar(screen, p).waitUntilReady();

      // Paso 1 — invitado sin método de entrega: el Home.
      await nav.capturarEvidencia(cp, 1, 'home sin metodo de entrega');

      // Paso 2 — contenido de la sección Método de entrega.
      await nav.capturarEvidencia(cp, 2, 'seccion metodo de entrega', { elemento: nav.metodoDeEntrega });
      await expect(nav.textoSinMetodo).toBeVisible();
      const icono = await nav.iconoDerechoEsMas();

      // Esperado — icono, 'Elige una forma de entrega' y el icono más.
      expect(icono.esMas, `icono más a la derecha (${icono.detalle})`).toBe(true);
    });

    test(`TC-B2C23-APP-005 · Tap en el NavBar abre el popup Metodo de entrega (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C23-APP-005';
      const nav = await new NavBar(screen, p).waitUntilReady();

      // Paso 1 — una pantalla cualquiera: el Home.
      await nav.capturarEvidencia(cp, 1, 'home con el NavBar');

      // Paso 2 — tap en el NavBar.
      await nav.tapMetodoDeEntrega();

      // Esperado — se abre el popup Método de entrega.
      await expect(nav.popupMetodoDeEntrega).toBeVisible();
      await nav.capturarEvidencia(cp, 3, 'popup metodo de entrega');
      await nav.cerrarPopup();
    });

    test(`TC-B2C23-APP-006 · El NavBar permanece visible durante el scroll vertical (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C23-APP-006';
      const nav = await new NavBar(screen, p).waitUntilReady();
      const home = new HomeScreen(screen, p);
      const inicio = await nav.metodoDeEntrega.boundingBox();

      // Paso 1 — una pantalla con scroll: el Home.
      await nav.capturarEvidencia(cp, 1, 'home arriba');

      // Paso 2 — scroll hacia abajo.
      await home.desplazarHaciaAbajo(2);
      await expect(home.losMasVendidos).not.toBeVisible();
      await expect(nav.metodoDeEntrega, 'NavBar visible tras el scroll hacia abajo').toBeVisible();
      expect((await nav.metodoDeEntrega.boundingBox()).y, 'NavBar en la misma posición').toBe(inicio.y);
      await nav.capturarEvidencia(cp, 2, 'NavBar visible con el home desplazado');

      // Paso 2 — scroll hacia arriba.
      await screen.swipe('down');
      await screen.swipe('down');
      await expect(nav.metodoDeEntrega, 'NavBar visible tras el scroll hacia arriba').toBeVisible();
      expect((await nav.metodoDeEntrega.boundingBox()).y, 'NavBar en la misma posición').toBe(inicio.y);
      await nav.capturarEvidencia(cp, 3, 'NavBar visible tras volver arriba');
    });

    test(`TC-B2C23-APP-008 · El NavBar se oculta en paginas especiales (Splash, Login/SSO, Cortina de mantencion) (${plataforma})`, async ({
      screen,
      device,
      bundleId,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C23-APP-008';
      const nav = await new NavBar(screen, p).waitUntilReady();
      const caja = await nav.metodoDeEntrega.boundingBox();

      // Paso 1 — el splash: se relanza la app y se fotografía antes de que termine de cargar.
      // El árbol no sirve aquí: el splash es una capa encima del Home, ya montado con su NavBar.
      // Se reconoce el splash por el logo rojizo al centro (entra con fundido) y por no tener la
      // TapBar abajo; lo que se verifica después es la franja del NavBar, arriba.
      const home = await new TabBar(screen, p).tab('Home').boundingBox();
      const tapbar = { x: home.x, y: home.y, width: home.width * 5, height: home.height };
      let splash: Buffer | undefined;
      for (let intento = 0; intento < 5 && !splash; intento++) {
        await device.terminateApp(bundleId!);
        await device.launchApp(bundleId!);
        const foto = await screen.screenshot();
        const logo = await proporcionRojiza(foto, { left: 440, top: 1070, width: 200, height: 200 });
        const conTapBar = (await NavBar.franjaClara(foto, tapbar)) > 0.5;
        await test.info().attach(`intento-${intento}-logo-${logo.toFixed(2)}`, { body: foto, contentType: 'image/png' });
        if (logo > 0.3 && !conTapBar) splash = foto;
      }
      if (!splash) throw new Error('Ambiente: no se alcanzó a fotografiar el splash en 5 relanzamientos.');
      const ruta = rutaEvidencia(cp, 1, 'splash sin NavBar', p);
      fs.mkdirSync(path.dirname(ruta), { recursive: true });
      fs.writeFileSync(ruta, splash);

      // Paso 2 — sin NavBar en el splash: la franja del NavBar no tiene su fondo claro.
      expect(await NavBar.franjaClara(splash, caja), 'la franja del NavBar en el splash no muestra el NavBar').toBeLessThan(0.3);

      // Paso 3 — Login/SSO: Mi cuenta → Iniciar sesión.
      const tabs = await new TabBar(screen, p).waitUntilReady();
      await tabs.tapCuenta();
      const login = await (await new MiCuentaScreen(screen, p).waitUntilReady()).tapIniciarSesion();
      await login.waitUntilReady();
      await login.capturarEvidencia(cp, 3, 'login sin NavBar');
      await expect(nav.metodoDeEntrega, 'sin NavBar en el Login').not.toBeVisible();
      await login.tapCerrar();

      // Paso 4 — la cortina de mantención no está activa en el ambiente ("si aplica"): no se valida.
    });

    test(`TC-B2C23-APP-010 · El NavBar reemplaza su presentacion por el buscador en la PLP N1 (${plataforma})`, async ({
      screen,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C23-APP-010';
      const nav = await new NavBar(screen, p).waitUntilReady();
      const tabs = new TabBar(screen, p);

      // Paso 1 — PLP N1 de una categoría: menú de categorías → primera N1.
      const modal = await tabs.tapCategorias();
      await modal.waitUntilReady();
      const plp = await modal.tapPrimeraN1();
      await expect(plp.chipTodo, 'PLP N1 (chips Todo + N2)').toBeVisible();

      // Paso 2 — contenido del NavBar.
      await plp.capturarEvidencia(cp, 2, 'PLP N1 con Atras y buscador');

      // Esperado — '<' (Atrás) y el buscador '¿Qué estás buscando?' en lugar del NavBar habitual.
      await expect(plp.volver, "'<' (Atrás)").toBeVisible();
      await expect(screen.getByText('¿Qué estás buscando?'), 'buscador con placeholder').toBeVisible();
      await expect(nav.metodoDeEntrega, 'sin la presentación habitual del NavBar').not.toBeVisible();
    });
  });
}
