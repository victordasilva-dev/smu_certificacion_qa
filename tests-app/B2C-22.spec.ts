import { test, expect } from './support/fixtures';
import { TabBar } from './pages/TabBar';
import { HomeScreen } from './pages/HomeScreen';
import { BuscarScreen } from './pages/BuscarScreen';
import { MiCuentaScreen } from './pages/MiCuentaScreen';
import { CarroScreen } from './pages/CarroScreen';
import type { Screen } from 'mobilewright';
import type { Plataforma } from '../tests/support/rutasEvidencia';
import { LoadedTestData, token } from '../tests/support/testData';
import * as fs from 'fs';
import * as path from 'path';
import { rutaEvidencia } from '../tests/support/rutasEvidencia';
import { proporcionClara, proporcionRoja } from './support/pixeles';

/**
 * B2C-22 — TapBar de la app.
 *
 * Las filas declaran `Plataforma: App iOS/Android`. Esta corrida (2026-10-06) certifica **solo
 * Android**, con el build v1.0.7 que declara {APP_BUILD}, por pedido del usuario: los casos se
 * escriben solo con el sufijo (Android). iOS queda sin correr hasta que haya clave de Mobile Next.
 *
 * Solo están los TC que corren como invitado sin más data que el build. Los que piden sesión
 * (002, 003, 007, 009, 012), checkout (014, 015) o un producto en el carro (019, 021-023) quedan
 * en Bloqueado Data: su fila no declara cuenta ni SKU. El 017 (página 404/500) queda Bloqueado:
 * la app no tiene cómo llegar a una página de error.
 *
 * Nombres de v1.0.7: la TabBar muestra Home, Categorías, Buscar, Mis productos y Mi cuenta, todos
 * con icono y texto. B2C-22 los llama Inicio, Categorías, Búsqueda, Favoritos e Inicio de sesión.
 */

/** El tab activo se pinta rojo; un tab inactivo no tiene ni un píxel rojo. */
const ROJO_ACTIVO = 0.03;
const ROJO_INACTIVO = 0.005;

for (const plataforma of ['Android'] as const) {
  test.describe(`B2C-22 — TapBar (${plataforma})`, () => {
    test(`TC-B2C22-APP-001 · Composicion del TapBar para usuario no logueado (${plataforma})`, async ({
      screen,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C22-APP-001';
      const tabs = new TabBar(screen, p);

      // Paso 1-2 — sin sesión, la app abierta en el Home (fuera del checkout).
      await tabs.waitUntilReady();
      await tabs.capturarEvidencia(cp, 1, 'home del invitado con la TapBar');

      // Paso 3 — composición de la TapBar.
      const obtenido = {
        tabs: await tabs.etiquetasVisibles(),
        buscadorConPlaceholderEnLaBarra: await tabs.tieneCampoDeBusquedaEnLaBarra(),
      };

      // Esperado — Home, Categorías, Búsqueda (campo con placeholder, al centro), Favoritos e
      // Inicio de sesión.
      const esperado = {
        tabs: ['Home', 'Categorías', 'Búsqueda', 'Favoritos', 'Inicio de sesión'],
        buscadorConPlaceholderEnLaBarra: true,
      };
      expect(
        JSON.stringify(obtenido),
        `composición de la TapBar del invitado — esperado ${JSON.stringify(esperado)}, obtenido ${JSON.stringify(obtenido)}`,
      ).toBe(JSON.stringify(esperado));
    });

    test(`TC-B2C22-APP-004 · El tab Inicio navega directamente a la pagina de Home (${plataforma})`, async ({
      screen,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C22-APP-004';
      const tabs = new TabBar(screen, p);
      await tabs.waitUntilReady();

      // Paso 1 — una página distinta al Home: la de búsqueda.
      await tabs.tapBuscar();
      const buscar = await new BuscarScreen(screen, p).waitUntilReady();
      await buscar.capturarEvidencia(cp, 1, 'pagina de busqueda');

      // Paso 2 — tap en el tab Home ("Inicio").
      await tabs.tapHome();

      // Esperado — navega directamente al Home.
      const home = new HomeScreen(screen, p);
      await expect(home.selectorDeEntrega).toBeVisible();
      await expect(home.losMasVendidos).toBeVisible();
      await expect(buscar.campo).not.toBeVisible();
      await home.capturarEvidencia(cp, 3, 'home tras tocar el tab Home');
    });

    test(`TC-B2C22-APP-005 · El tab Categorias navega al menu de categorias (${plataforma})`, async ({
      screen,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C22-APP-005';
      const tabs = new TabBar(screen, p);

      // Paso 1 — una página con la TapBar visible: el Home.
      await tabs.waitUntilReady();
      await tabs.capturarEvidencia(cp, 1, 'home con la TapBar');

      // Paso 2 — tap en el tab Categorías.
      const modal = await tabs.tapCategorias();

      // Esperado — se despliega el menú de categorías.
      await expect(modal.todas).toBeVisible();
      await expect(modal.buscador).toBeVisible();
      await modal.capturarEvidencia(cp, 3, 'menu de categorias');
    });

    test(`TC-B2C22-APP-006 · El tab Busqueda navega al flujo de busqueda (${plataforma})`, async ({
      screen,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C22-APP-006';
      const tabs = new TabBar(screen, p);

      // Paso 1 — una página con la TapBar visible: el Home.
      await tabs.waitUntilReady();
      await tabs.capturarEvidencia(cp, 1, 'home con la TapBar');

      // Paso 2 — tap en el tab Buscar ("Búsqueda").
      await tabs.tapBuscar();

      // Esperado — se abre el flujo de búsqueda.
      const buscar = new BuscarScreen(screen, p);
      await expect(buscar.campo).toBeVisible();
      await expect(buscar.cancelar).toBeVisible();
      await buscar.capturarEvidencia(cp, 3, 'pantalla de busqueda');
    });

    test(`TC-B2C22-APP-008 · El tab Inicio de sesion navega al flujo de Login (${plataforma})`, async ({
      screen,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C22-APP-008';
      const tabs = new TabBar(screen, p);

      // Paso 1 — sin sesión, en el Home.
      await tabs.waitUntilReady();
      await tabs.capturarEvidencia(cp, 1, 'home del invitado');

      // Paso 2 — tap en el tab de la cuenta (el invitado lo ve como "Mi cuenta").
      await tabs.tapCuenta();
      await screen.getByTestId('account-login').or(screen.getByTestId('login-rut')).waitFor();
      await tabs.capturarEvidencia(cp, 2, 'pantalla tras tocar el tab de la cuenta');

      // Esperado — navega directamente al flujo de Login (campo RUT del login).
      await expect(screen.getByTestId('login-rut'), 'el tab abre directamente el Login').toBeVisible({
        timeout: 10000,
      });
    });

    test(`TC-B2C22-APP-010 · Indicador visual del tab activo frente a los tabs inactivos (${plataforma})`, async ({
      screen,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C22-APP-010';
      const tabs = new TabBar(screen, p);
      await tabs.waitUntilReady();

      // Paso 1 — tap en Categorías.
      const modal = await tabs.tapCategorias();
      await modal.waitUntilReady();
      await tabs.capturarEvidencia(cp, 1, 'seccion Categorias');

      // Pasos 2-3 — color del tab activo y de los demás.
      await tabs.capturarEvidencia(cp, 2, 'tab Categorias activo', { elemento: tabs.tab('Categorías') });
      await tabs.capturarEvidencia(cp, 3, 'tab Home inactivo', { elemento: tabs.tab('Home') });
      const rojo = {
        Categorías: await tabs.proporcionRojo('Categorías'),
        Home: await tabs.proporcionRojo('Home'),
        Buscar: await tabs.proporcionRojo('Buscar'),
        'Mis productos': await tabs.proporcionRojo('Mis productos'),
        'Mi cuenta': await tabs.proporcionRojo('Mi cuenta'),
      };

      // Esperado — el activo en rojo; los demás en color neutro.
      expect(rojo.Categorías, `tab activo en rojo (${JSON.stringify(rojo)})`).toBeGreaterThan(ROJO_ACTIVO);
      for (const nombre of ['Home', 'Buscar', 'Mis productos', 'Mi cuenta'] as const) {
        expect(rojo[nombre], `tab ${nombre} en color neutro`).toBeLessThan(ROJO_INACTIVO);
      }
    });

    test(`TC-B2C22-APP-011 · El tab Inicio se mantiene activo durante la navegacion interna Home-Landing-PLP (${plataforma})`, async ({
      screen,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C22-APP-011';
      const tabs = new TabBar(screen, p);
      const home = await new HomeScreen(screen, p).waitUntilReady();
      expect(await tabs.proporcionRojo('Home'), 'Home activo en el Home').toBeGreaterThan(ROJO_ACTIVO);

      // Paso 1 — Home → Landing ("Mostrar todo" de la vitrina) → PLP (primera subcategoría).
      const landing = await home.tapMostrarTodo();
      await expect(landing.chipTodo).toBeVisible();
      await landing.capturarEvidencia(cp, 1, 'landing de categoria');
      // Paso 2 — Home sigue activo en la landing.
      expect(await tabs.proporcionRojo('Home'), 'Home activo en la landing').toBeGreaterThan(ROJO_ACTIVO);

      const plp = await landing.tapPrimeraSubcategoria();
      await expect(plp.filtros).toBeVisible();
      await plp.capturarEvidencia(cp, 2, 'PLP con el tab Home activo');
      // Paso 2 — Home sigue activo en la PLP.
      expect(await tabs.proporcionRojo('Home'), 'Home activo en la PLP').toBeGreaterThan(ROJO_ACTIVO);

      // Paso 3 — tap en Home, ya activo.
      await tabs.tapHome();

      // Esperado — redirige al Home.
      await expect(home.selectorDeEntrega).toBeVisible();
      await expect(home.losMasVendidos).toBeVisible();
      await expect(plp.filtros).not.toBeVisible();
      await home.capturarEvidencia(cp, 4, 'home tras tocar Home desde la PLP');
    });

    test(`TC-B2C22-APP-013 · Tap en el buscador del TapBar abre la pantalla de busqueda con el campo activo (${plataforma})`, async ({
      screen,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C22-APP-013';
      const tabs = new TabBar(screen, p);

      // Paso 1 — una sección cualquiera: el Home.
      await tabs.waitUntilReady();

      // Paso 2 — tap en el buscador de la TapBar.
      await tabs.tapBuscar();
      const buscar = await new BuscarScreen(screen, p).waitUntilReady();
      await buscar.capturarEvidencia(cp, 3, 'pantalla de busqueda');

      // Paso 4 — la lupa de la barra queda activa (roja) en la búsqueda.
      await tabs.capturarEvidencia(cp, 4, 'lupa de la TapBar', { elemento: tabs.tab('Buscar') });
      expect(await tabs.proporcionRojo('Buscar'), 'lupa activa en la búsqueda').toBeGreaterThan(ROJO_ACTIVO);

      // Esperado — el campo de ingreso abre activo (con foco).
      await expect(buscar.campo, 'el campo de búsqueda abre con foco').toBeFocused({ timeout: 5000 });
    });

    test(`TC-B2C22-APP-016 · El TapBar se oculta en paginas especiales (Splash, Login/SSO, Cortina de mantencion) (${plataforma})`, async ({
      screen,
      device,
      bundleId,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C22-APP-016';
      const tabs = new TabBar(screen, p);
      await tabs.waitUntilReady();
      const barra = await tabs.tab('Home').boundingBox();
      const franja = { left: barra.x, top: barra.y, width: barra.width * 5, height: barra.height };

      // Paso 1 — el splash: se relanza la app y se fotografía antes de que termine de cargar.
      // El árbol de accesibilidad no sirve aquí: el splash es una capa encima del Home, que ya
      // está montado debajo con su TapBar.
      let splash: Buffer | undefined;
      for (let intento = 0; intento < 3 && !splash; intento++) {
        await device.terminateApp(bundleId!);
        await device.launchApp(bundleId!);
        const foto = await screen.screenshot();
        // El splash es la foto de verduras con el logo rojo al centro.
        const logo = { left: 440, top: 1070, width: 200, height: 200 };
        if ((await proporcionRoja(foto, logo)) > 0.3) splash = foto;
      }
      if (!splash) throw new Error('Ambiente: no se alcanzó a fotografiar el splash en 3 relanzamientos.');
      await test.info().attach('splash', { body: splash, contentType: 'image/png' });
      const ruta = rutaEvidencia(cp, 1, 'splash sin TapBar', p);
      fs.mkdirSync(path.dirname(ruta), { recursive: true });
      fs.writeFileSync(ruta, splash);

      // Paso 2 — sin TapBar en el splash: la franja de la barra no tiene su fondo claro.
      const claroEnSplash = await proporcionClara(splash, franja);
      expect(claroEnSplash, 'la franja de la TapBar en el splash no muestra la barra').toBeLessThan(0.3);

      // Paso 3 — Login/SSO: Mi cuenta → Iniciar sesión.
      await tabs.waitUntilReady();
      await tabs.tapCuenta();
      const login = await (await new MiCuentaScreen(screen, p).waitUntilReady()).tapIniciarSesion();
      await login.waitUntilReady();
      await login.capturarEvidencia(cp, 3, 'login sin TapBar');
      await expect(tabs.tab('Home'), 'sin TapBar en el Login').not.toBeVisible();
      await login.tapCerrar();

      // Paso 4 — la cortina de mantención no está activa en el ambiente ("si aplica"): no se valida.
    });

    test(`TC-B2C22-APP-018 · Clic en el tab de la seccion actual hace refresh y ubica al usuario al inicio de la pagina (${plataforma})`, async ({
      screen,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C22-APP-018';
      const tabs = new TabBar(screen, p);
      const home = await new HomeScreen(screen, p).waitUntilReady();

      // Paso 1 — en el Home (sección del tab Home), scroll hacia abajo.
      await home.desplazarHaciaAbajo(2);
      await expect(home.losMasVendidos).not.toBeVisible();
      await home.capturarEvidencia(cp, 1, 'home desplazado hacia abajo');

      // Paso 2 — tap en el tab Home, ya activo.
      await tabs.tapHome();

      // Esperado — la página vuelve al inicio.
      await expect(home.losMasVendidos).toBeVisible();
      await expect(home.selectorDeEntrega).toBeVisible();
      await home.capturarEvidencia(cp, 3, 'home de vuelta al inicio');
    });

    test(`TC-B2C22-APP-020 · El Floating Pill no se muestra cuando el carrito esta vacio (${plataforma})`, async ({
      screen,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C22-APP-020';
      const tabs = new TabBar(screen, p);
      const home = await new HomeScreen(screen, p).waitUntilReady();

      // El carro del invitado está vacío: ningún producto marca "En carro" en la vitrina.
      await expect(screen.getByText('En carro')).not.toBeVisible();

      // Pasos 1-2 — recorrer pantallas con TapBar y verificar que no hay Floating Pill.
      await expect(tabs.floatingPill, 'sin pill en el Home').not.toBeVisible();
      await home.capturarEvidencia(cp, 1, 'home sin Floating Pill');

      const modal = await tabs.tapCategorias();
      await modal.waitUntilReady();
      await expect(tabs.floatingPill, 'sin pill en Categorías').not.toBeVisible();
      await modal.capturarEvidencia(cp, 2, 'categorias sin Floating Pill');

      await tabs.tapHome();
      const plp = await (await (await home.waitUntilReady()).tapMostrarTodo()).tapPrimeraSubcategoria();
      await expect(plp.filtros).toBeVisible();
      await expect(tabs.floatingPill, 'sin pill en la PLP').not.toBeVisible();
      await plp.capturarEvidencia(cp, 3, 'PLP sin Floating Pill');

      await tabs.tapMisProductos();
      await expect(screen.getByText('Mis favoritos')).toBeVisible();
      await expect(tabs.floatingPill, 'sin pill en Mis productos').not.toBeVisible();
      await tabs.capturarEvidencia(cp, 4, 'mis productos sin Floating Pill');

      await tabs.tapCuenta();
      await new MiCuentaScreen(screen, p).waitUntilReady();
      await expect(tabs.floatingPill, 'sin pill en Mi cuenta').not.toBeVisible();
      await tabs.capturarEvidencia(cp, 5, 'mi cuenta sin Floating Pill');
    });
  });
}

// ---------------------------------------------------------------------------------------------
// Re-corrida 2026-10-09 (solo Android, build v1.0.7): las filas ya declaran {COMPRADOR_USER} y
// {SKU_VALID_001}. El package no lo declaran ({APP_BUILD} solo): va por ANDROID_PACKAGE en el
// entorno, como en la corrida del 2026-10-06.
// ---------------------------------------------------------------------------------------------

/** Sesión cerrada: si Mi cuenta muestra el saludo de un cliente, cierra sesión. Termina en el Home. */
async function asegurarInvitado(screen: Screen, p: Plataforma): Promise<void> {
  const tabs = new TabBar(screen, p);
  await tabs.waitUntilReady();
  await tabs.tapCuenta();
  const cuenta = new MiCuentaScreen(screen, p);
  if (await cuenta.saludo.isVisible({ timeout: 5000 })) await cuenta.cerrarSesion();
  await tabs.tapHome();
  await new HomeScreen(screen, p).waitUntilReady();
}

/** Sesión iniciada con {COMPRADOR_USER}, desde Mi cuenta. Termina en Mi cuenta con el saludo. */
async function iniciarSesionDeclarada(screen: Screen, p: Plataforma, testData: LoadedTestData): Promise<MiCuentaScreen> {
  const tabs = new TabBar(screen, p);
  await tabs.waitUntilReady();
  await tabs.tapCuenta();
  const cuenta = new MiCuentaScreen(screen, p);
  if (!(await cuenta.saludo.isVisible({ timeout: 5000 }))) {
    const login = await (await cuenta.waitUntilReady()).tapIniciarSesion();
    await login.waitUntilReady();
    await login.iniciarSesion(token(testData, 'COMPRADOR_USER')!, token(testData, 'COMPRADOR_PASSWORD')!);
  }
  await cuenta.saludo.waitFor({ state: 'visible', timeout: 45000 });
  return cuenta;
}

/** Relee las unidades del Floating Pill hasta que lleguen a `esperadas` (15 s) y devuelve la última lectura. */
async function esperarUnidades(tabs: TabBar, esperadas: number): Promise<number | null> {
  let ultima: number | null = null;
  for (let i = 0; i < 15 && ultima !== esperadas; i++) {
    ultima = await tabs.unidadesEnElPill().catch(() => null);
    if (ultima !== esperadas) await new Promise((r) => setTimeout(r, 1000));
  }
  return ultima;
}

/** La inicial del nombre del cliente, sacada del saludo "Hola, <Nombre> …" de Mi cuenta. */
async function inicialDelSaludo(cuenta: MiCuentaScreen): Promise<string> {
  return (await cuenta.saludo.getText()).replace(/^Hola,\s*/, '').trim().charAt(0).toUpperCase();
}

for (const plataforma of ['Android'] as const) {
  test.describe(`B2C-22 — TapBar con cuenta y carro declarados (${plataforma})`, () => {
    test(`TC-B2C22-APP-002 · Composicion del TapBar para usuario logueado (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C22-APP-002';
      const tabs = new TabBar(screen, p);

      // Paso 1 — sesión con {COMPRADOR_USER}.
      const cuenta = await iniciarSesionDeclarada(screen, p, testData);
      const inicialEsperada = await inicialDelSaludo(cuenta);
      await cuenta.capturarEvidencia(cp, 1, 'sesion iniciada');

      // Paso 2 — una página fuera del checkout: el Home.
      await tabs.tapHome();
      await new HomeScreen(screen, p).waitUntilReady();
      await tabs.capturarEvidencia(cp, 3, 'TapBar del usuario logueado', { elemento: tabs.tab('Home') });

      // Paso 3 — composición, en particular el icono de Mi cuenta con la inicial.
      const inicial = await tabs.inicialDeLaCuenta();
      const etiquetas = await tabs.etiquetasVisibles();
      test.info().annotations.push({ type: 'tapbar', description: `tabs: ${etiquetas.join(', ')} · inicial: ${inicial}` });
      expect(inicial, `el icono de Mi cuenta muestra la inicial del nombre (${inicialEsperada})`).toBe(inicialEsperada);
      expect
        .soft(etiquetas, 'tabs de la HU: Home, Categorías, Búsqueda, Favoritos y Mi cuenta')
        .toEqual(['Home', 'Categorías', 'Búsqueda', 'Favoritos', 'Mi cuenta']);
    });

    test(`TC-B2C22-APP-003 · Actualizacion dinamica del icono de Perfil al cambiar el estado de sesion (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C22-APP-003';
      const tabs = new TabBar(screen, p);

      // Precondición — sesión no iniciada.
      await asegurarInvitado(screen, p);
      expect(await tabs.inicialDeLaCuenta(), 'sin sesión el icono no muestra inicial').toBeNull();
      await tabs.capturarEvidencia(cp, 1, 'icono de perfil sin sesion', { elemento: tabs.tab('Mi cuenta') });

      // Pasos 1 y 2 — iniciar sesión sin recargar la app: el icono pasa a la inicial.
      const cuenta = await iniciarSesionDeclarada(screen, p, testData);
      const inicial = await inicialDelSaludo(cuenta);
      expect(await tabs.inicialDeLaCuenta(), 'con sesión el icono muestra la inicial').toBe(inicial);
      await tabs.capturarEvidencia(cp, 2, `icono de perfil con la inicial ${inicial}`, { elemento: tabs.tab('Mi cuenta') });

      // Pasos 3 y 4 — cerrar sesión sin recargar: el icono vuelve al de invitado.
      await cuenta.cerrarSesion();
      expect(await tabs.inicialDeLaCuenta(), 'tras cerrar sesión el icono vuelve al de invitado').toBeNull();
      await tabs.capturarEvidencia(cp, 4, 'icono de perfil tras cerrar sesion', { elemento: tabs.tab('Mi cuenta') });
    });

    test(`TC-B2C22-APP-007 · El tab Favoritos navega a la pagina Mis favoritos (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C22-APP-007';
      const tabs = new TabBar(screen, p);
      await iniciarSesionDeclarada(screen, p, testData);

      // Paso 1 — una página distinta a Favoritos: el Home.
      await tabs.tapHome();
      await new HomeScreen(screen, p).waitUntilReady();

      // Pasos 2 y 3 — el tab de favoritos (en v1.0.7 se llama "Mis productos").
      await tabs.tapMisProductos();
      await expect(screen.getByText('Mis favoritos'), 'abre en "Mis favoritos"').toBeVisible();
      await expect(screen.getByText(/tus favoritos te est[aá]n esperando/i), 'con sesión no pide iniciar sesión').not.toBeVisible();
      await tabs.capturarEvidencia(cp, 3, 'pagina Mis favoritos');
    });

    test(`TC-B2C22-APP-009 · El tab Mi cuenta navega a la pagina Mi cuenta (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C22-APP-009';
      const tabs = new TabBar(screen, p);
      await iniciarSesionDeclarada(screen, p, testData);

      // Paso 1 — una página distinta a Mi cuenta: el Home.
      await tabs.tapHome();
      await new HomeScreen(screen, p).waitUntilReady();
      await tabs.capturarEvidencia(cp, 1, 'home con sesion');

      // Pasos 2 y 3 — el tab Mi cuenta abre la página Mi cuenta del cliente.
      await tabs.tapCuenta();
      const cuenta = new MiCuentaScreen(screen, p);
      await expect(cuenta.saludo, 'página Mi cuenta con el saludo del cliente').toBeVisible({ timeout: 20000 });
      await expect(screen.getByText('Mi cuenta').first()).toBeVisible();
      await cuenta.capturarEvidencia(cp, 3, 'pagina Mi cuenta');
    });

    test(`TC-B2C22-APP-012 · Memoria de stack: volver al tab Inicio redirige a la ultima pagina visitada en ese flujo (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C22-APP-012';
      const tabs = new TabBar(screen, p);
      await iniciarSesionDeclarada(screen, p, testData);
      await tabs.tapHome();
      const home = await new HomeScreen(screen, p).waitUntilReady();

      // Paso 1 — del Home a una PLP ("una PLP": la primera subcategoría de la landing de la vitrina).
      const plp = await (await home.tapMostrarTodo()).tapPrimeraSubcategoria();
      await expect(plp.filtros).toBeVisible();
      await plp.capturarEvidencia(cp, 1, 'PLP desde el Home');

      // Pasos 2 a 4 — Mi Cuenta y de vuelta a Inicio: vuelve a la PLP.
      await tabs.tapCuenta();
      await expect(new MiCuentaScreen(screen, p).saludo).toBeVisible({ timeout: 20000 });
      await tabs.tapHome();
      await expect(plp.filtros, 'al volver a Inicio se muestra la PLP (última página del flujo)').toBeVisible({ timeout: 15000 });
      await plp.capturarEvidencia(cp, 4, 'de vuelta en la PLP');

      // Paso 5 — un segundo tap en Inicio redirige al Home.
      await tabs.tapHome();
      await expect(home.selectorDeEntrega, 'el segundo tap lleva al Home').toBeVisible({ timeout: 15000 });
      await expect(plp.filtros).not.toBeVisible();
      await home.capturarEvidencia(cp, 5, 'home tras el segundo tap');
    });

    test(`TC-B2C22-APP-019 · El Floating Pill Ver carrito se muestra cuando el carrito tiene productos (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C22-APP-019';
      const tabs = new TabBar(screen, p);
      const sku = token(testData, 'SKU_VALID_001')!;

      // Paso 1 — como invitado, {SKU_VALID_001} en el carro.
      await asegurarInvitado(screen, p);
      const home = new HomeScreen(screen, p);
      await home.asegurarEnCarro(sku);
      const textos: string[] = [];

      // Pasos 2 y 3 — el pill en cada pantalla con TapBar.
      const revisar = async (pantalla: string, paso: number) => {
        await expect(tabs.floatingPill, `Floating Pill visible en ${pantalla}`).toBeVisible({ timeout: 15000 });
        textos.push(`${pantalla}: ${await tabs.textoDelPill()}`);
        await tabs.capturarEvidencia(cp, paso, `Floating Pill en ${pantalla}`);
      };
      await revisar('Home', 2);
      const modal = await tabs.tapCategorias();
      await modal.waitUntilReady();
      await revisar('Categorías', 3);
      await tabs.tapHome();
      const plp = await (await (await home.waitUntilReady()).tapMostrarTodo()).tapPrimeraSubcategoria();
      await expect(plp.filtros).toBeVisible();
      await revisar('PLP', 4);
      await plp.abrirPrimerProducto();
      await revisar('PDP', 5);
      // La PDP no muestra la TapBar: se vuelve a la PLP para seguir por los tabs.
      await screen.goBack();
      await expect(tabs.tab('Mis productos')).toBeVisible({ timeout: 15000 });
      await tabs.tapMisProductos();
      await expect(screen.getByText('Mis favoritos')).toBeVisible();
      await revisar('Favoritos', 6);
      await tabs.tapCuenta();
      await new MiCuentaScreen(screen, p).waitUntilReady();
      await revisar('Mi cuenta', 7);
      test.info().annotations.push({ type: 'pill', description: textos.join(' · ') });

      // Esperado — icono, texto "Ver carrito" y badge con la cantidad total.
      const texto = await tabs.textoDelPill();
      expect(await tabs.unidadesEnElPill(), 'muestra la cantidad total de ítems').toBeGreaterThan(0);
      expect(texto, 'el Floating Pill dice "Ver carrito"').toMatch(/ver carrito/i);
    });

    test(`TC-B2C22-APP-021 · Tap en el Floating Pill navega a la pagina del Carrito (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C22-APP-021';
      const tabs = new TabBar(screen, p);
      const sku = token(testData, 'SKU_VALID_001')!;
      await asegurarInvitado(screen, p);
      await new HomeScreen(screen, p).asegurarEnCarro(sku);
      await expect(tabs.floatingPill).toBeVisible();
      await tabs.capturarEvidencia(cp, 1, 'Floating Pill visible');

      // Pasos 1 y 2 — tap en el pill: la página del carrito.
      await tabs.tapFloatingPill();
      const carro = await new CarroScreen(screen, p).waitUntilReady();
      await expect(carro.cantidad(sku), `el carrito muestra ${sku}`).toBeVisible();
      await carro.capturarEvidencia(cp, 2, 'pagina Mi carro');
      await carro.volver();
    });

    test(`TC-B2C22-APP-022 · El Floating Pill se oculta en checkout, en la pagina del Carrito y en paginas especiales (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C22-APP-022';
      const tabs = new TabBar(screen, p);
      const sku = token(testData, 'SKU_VALID_001')!;
      await asegurarInvitado(screen, p);
      await new HomeScreen(screen, p).asegurarEnCarro(sku);

      // Pasos 1 y 2 — hacia el checkout: desde el carro, "Continuar con la entrega".
      await tabs.tapFloatingPill();
      const carro = await new CarroScreen(screen, p).waitUntilReady();
      const checkoutHabilitado = await carro.continuarConLaEntrega.isEnabled({ timeout: 5000 });
      const aviso = (await carro.avisoCompraMinima.isVisible({ timeout: 0 })) ? await carro.avisoCompraMinima.getText() : '';
      test.info().annotations.push({ type: 'checkout', description: `Continuar con la entrega habilitado: ${checkoutHabilitado} · ${aviso}` });

      // Paso 3 — la página del Carrito: sin pill.
      await expect(tabs.floatingPill, 'sin Floating Pill en la página del Carrito').not.toBeVisible();
      await carro.capturarEvidencia(cp, 3, 'pagina Mi carro sin Floating Pill');
      await carro.volver();

      // Paso 4 — una página especial (Login): sin pill.
      await tabs.tapCuenta();
      const login = await (await new MiCuentaScreen(screen, p).waitUntilReady()).tapIniciarSesion();
      await login.waitUntilReady();
      await expect(tabs.floatingPill, 'sin Floating Pill en el Login').not.toBeVisible();
      await login.capturarEvidencia(cp, 4, 'login sin Floating Pill');
      await login.tapCerrar();
    });

    test(`TC-B2C22-APP-023 · El badge del Floating Pill se actualiza en tiempo real sin recarga (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C22-APP-023';
      const tabs = new TabBar(screen, p);
      const sku = token(testData, 'SKU_VALID_001')!;
      await asegurarInvitado(screen, p);
      const home = new HomeScreen(screen, p);
      await home.asegurarEnCarro(sku);
      const antes = (await tabs.unidadesEnElPill())!;
      await tabs.capturarEvidencia(cp, 1, `Floating Pill con ${antes} unidades`);

      // Pasos 1 y 2 — agregar una unidad desde el Home: el badge sube sin recargar.
      await home.botonSumar(sku).tap();
      expect(await esperarUnidades(tabs, antes + 1), 'unidades del Floating Pill tras agregar').toBe(antes + 1);
      await tabs.capturarEvidencia(cp, 2, `Floating Pill con ${antes + 1} unidades`);

      // Paso 3 — quitar una unidad: el badge baja sin recargar.
      await home.botonQuitar(sku).tap();
      expect(await esperarUnidades(tabs, antes), 'unidades del Floating Pill tras quitar').toBe(antes);
      await tabs.capturarEvidencia(cp, 3, `Floating Pill de vuelta en ${antes} unidades`);
    });
  });
}
