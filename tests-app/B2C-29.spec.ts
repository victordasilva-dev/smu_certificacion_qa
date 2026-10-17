import { test, expect } from './support/fixtures';
import { NavBar } from './pages/NavBar';
import { HomeScreen } from './pages/HomeScreen';
import { LoginScreen } from './pages/LoginScreen';
import { arrancarInvitado, visibleEn } from './support/entregaApp';
import { fondosDeExtremoAExtremo } from './support/pixeles';
import { tolerante } from './support/tolerante';

/**
 * B2C-29 — Home configurable desde Page Designer (app nativa).
 *
 * Las filas dicen "Viewport: App iOS/Android" sin "Plataforma:"; esta corrida (2026-10-16) certifica
 * **solo Android** con el build v1.0.7 ({APP_BUILD}) en el emulador local. iOS queda Pendiente.
 *
 * Quedan sin `test()`: los [Logueado] y 019 (todas las cuentas declaradas son correos y la v1.0.7
 * solo inicia sesión con RUT) → Bloqueado Data; 003, 004 y 005 (exigen configurar o ver Page
 * Designer) → Fuera de alcance; 006 y 007 (la vigencia de {COMPONENTE_PROGRAMADO} empieza el
 * 2026-09-01 y termina el 2026-12-12: ningún borde se puede observar en la corrida) → Bloqueado.
 */

const PLATAFORMA = 'Android' as const;
/** El último bloque del Home: el texto legal del pie. */
const FIN_DEL_HOME = /^T[ÉE]RMINOS Y CONDICIONES/i;
/** Cómo podría titularse el carrusel My Usuals (smu.myUsualsCarousel; en la web, "Mis productos frecuentes"). */
const MY_USUALS = /frecuentes|my ?usuals|lo que (m[áa]s|siempre) compras|tus productos/i;

test.describe(`B2C-29 — Home configurable desde Page Designer (${PLATAFORMA})`, () => {
  test.describe.configure({ timeout: 360000 });

  test(`TC-B2C29-APP-001 · La Home carga sin iniciar sesión y muestra los componentes de Page Designer [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C29-APP-001';
    await arrancarInvitado(screen, device, bundleId!, p);
    const home = await tolerante(() => new HomeScreen(screen, p).waitUntilReady());
    await tolerante(() => expect(home.losMasVendidos, 'carrusel "Los más vendidos"').toBeVisible({ timeout: 30000 }));
    expect(await visibleEn(new LoginScreen(screen, p).readyLocator, 2000), 'no pide iniciar sesión').toBe(false);
    await home.capturarEvidencia(cp, 2, 'Home sin sesión');

    const { textos } = await tolerante(() => home.recorrer(FIN_DEL_HOME));
    const t = textos.map((x) => x.t);
    for (const bloque of ['Los más vendidos', 'Categorías destacadas', 'Nuestras marcas']) expect(t, `componente "${bloque}"`).toContain(bloque);
    expect(t.some((x) => /^d[íi]as$/.test(x)), 'módulo con cuenta regresiva').toBe(true);
    expect(t.some((x) => FIN_DEL_HOME.test(x)), 'llega al final de la Home').toBe(true);
    await home.capturarEvidencia(cp, 3, 'final de la Home');
    await home.capturarEvidencia(cp);
  });

  test(`TC-B2C29-APP-002 · Los componentes tienen padding lateral y los fondos ocupan todo el ancho [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C29-APP-002';
    await arrancarInvitado(screen, device, bundleId!, p);
    const home = await tolerante(() => new HomeScreen(screen, p).waitUntilReady());
    await tolerante(() => expect(home.losMasVendidos).toBeVisible({ timeout: 30000 }));
    await home.capturarEvidencia(cp, 2, 'inicio de la Home');

    const { textos, pantallas } = await tolerante(() => home.recorrer(FIN_DEL_HOME));
    const pegados = textos.filter((x) => x.x < 16);
    expect(pegados.map((x) => `${x.t} (x=${x.x})`), 'textos pegados al borde izquierdo (sin padding)').toEqual([]);
    // Desde y=300: arriba el NavBar translúcido deja ver el contenido que pasa por detrás.
    let bloques = 0;
    let cortados = 0;
    for (const png of pantallas) {
      const f = await fondosDeExtremoAExtremo(png, 300, 2150);
      bloques += f.bloques;
      cortados += f.cortados;
    }
    await home.capturarEvidencia(cp, 3, 'componentes con fondo de color');
    expect(bloques, 'hay componentes con color de fondo que medir').toBeGreaterThan(0);
    expect(cortados, `fondos de color que no llegan al borde derecho (de ${bloques})`).toBe(0);
    await home.capturarEvidencia(cp);
  });

  test(`TC-B2C29-APP-014 · Un usuario invitado no ve el carrusel My Usuals [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p }) => {
    const cp = 'TC-B2C29-APP-014';
    await arrancarInvitado(screen, device, bundleId!, p);
    const home = await tolerante(() => new HomeScreen(screen, p).waitUntilReady());
    await tolerante(() => expect(new NavBar(screen, p).textoSinMetodo, 'invitado sin sesión').toBeVisible({ timeout: 30000 }));
    await home.capturarEvidencia(cp, 2, 'Home como invitado');
    const { textos } = await tolerante(() => home.recorrer(FIN_DEL_HOME));
    expect(textos.some((x) => FIN_DEL_HOME.test(x.t)), 'se recorrió la Home completa').toBe(true);
    expect(textos.filter((x) => MY_USUALS.test(x.t)).map((x) => x.t), 'sin carrusel My Usuals').toEqual([]);
    await home.capturarEvidencia(cp, 3, 'final de la Home sin My Usuals');
    await home.capturarEvidencia(cp);
  });
});
