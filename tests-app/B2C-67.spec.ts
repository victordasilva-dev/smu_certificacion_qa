import * as fs from 'fs';
import * as path from 'path';
import { test, expect } from './support/fixtures';
import { SplashScreen } from './pages/SplashScreen';
import { TabBar } from './pages/TabBar';
import { NavBar } from './pages/NavBar';
import { rutaEvidencia } from '../tests/support/rutasEvidencia';
import { escalaAnimaciones, grabarColdStart, medirCarrusel, tiraDeCuadros } from './support/grabacionAndroid';

/**
 * B2C-67 — Splash de la app.
 *
 * Las filas declaran `Plataforma: App iOS/Android`. Esta corrida (2026-10-06) certifica **solo
 * Android**, con el build v1.0.7 que declara {APP_BUILD}, por pedido del usuario: los casos se
 * escriben solo con el sufijo (Android).
 *
 * Están 001, 002 y 006. El 002 cronometra el carrusel con una grabación por cuadros (~5 por segundo,
 * ver support/grabacionAndroid.ts), y por eso se corre con APP_ANIMACIONES=on: con las animaciones
 * del sistema en 0 el fade no se ve. El 005 (simular cargas de más y de menos de 1,8 s) queda en
 * Bloqueado; el 003 (Figma) y el 004 (BM) en Bloqueado Data.
 *
 * El Splash no está en el árbol de accesibilidad (es una capa sobre el Home ya montado): se reconoce
 * y se verifica en la captura (ver SplashScreen).
 */

/** Guarda una captura tomada a mano con el nombre que consume el Word. */
function guardar(cp: string, paso: number, etiqueta: string, plataforma: Parameters<typeof rutaEvidencia>[3], png: Buffer) {
  const ruta = rutaEvidencia(cp, paso, etiqueta, plataforma);
  fs.mkdirSync(path.dirname(ruta), { recursive: true });
  fs.writeFileSync(ruta, png);
}

for (const plataforma of ['Android'] as const) {
  test.describe(`B2C-67 — Splash (${plataforma})`, () => {
    test(`TC-B2C67-APP-001 · En cold start la app muestra el Splash a pantalla completa sin UI navegacional (${plataforma})`, async ({
      screen,
      device,
      bundleId,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C67-APP-001';
      const splash = new SplashScreen(screen, device, p);
      await new TabBar(screen, p).waitUntilReady();

      // Pasos 1-2 — cerrar la app del todo y abrirla (cold start), fotografiando hasta ver el Splash.
      let foto: Awaited<ReturnType<SplashScreen['fotografiar']>> | undefined;
      for (let intento = 0; intento < 5 && !foto; intento++) {
        await splash.coldStart(bundleId!);
        for (let cuadro = 0; cuadro < 2 && !foto; cuadro++) {
          const f = await splash.fotografiar();
          if (SplashScreen.esSplash(f)) foto = f;
        }
      }
      if (!foto) throw new Error('Ambiente: no se alcanzó a fotografiar el Splash en 5 arranques en frío.');
      guardar(cp, 2, 'splash en cold start', p, foto.png);

      // Paso 3 — sin UI navegacional y la imagen a pantalla completa: las cuatro franjas de borde
      // (donde estarían NavBar, TapBar y márgenes) las cubre la imagen, sin fondo claro.
      for (const [borde, claro] of Object.entries(foto.bordes)) {
        expect(claro, `franja ${borde}: imagen a sangre, sin UI ni margen claro`).toBeLessThan(0.3);
      }

      // Luego la app sigue al Home, ya con su UI navegacional.
      const nav = await new NavBar(screen, p).waitUntilReady();
      await nav.capturarEvidencia(cp, 3, 'home tras el splash');
    });

    test(`TC-B2C67-APP-002 · Las imagenes del carrusel del Splash transicionan con fade cada 1.8 segundos (${plataforma})`, async ({
      screen,
      bundleId,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C67-APP-002';
      await new TabBar(screen, p).waitUntilReady();
      const serial = process.env.ANDROID_SERIAL;
      const escala = escalaAnimaciones(serial);
      if (escala !== 1) throw new Error(`Ambiente: escala de animaciones del sistema en ${escala}; correr con APP_ANIMACIONES=on.`);

      // Paso 1 — cold start grabado por cuadros, cronometrando el carrusel.
      const cuadros = await grabarColdStart(bundleId!, 6, serial);
      const carrusel = medirCarrusel(cuadros);
      const tira = cuadros.filter((c) => c.logo > 0.3 || (carrusel.homeMs !== undefined && c.ms <= carrusel.homeMs));
      guardar(cp, 1, 'cuadros del splash con su tiempo', p, await tiraDeCuadros(tira.slice(0, 20)));
      await test.info().attach('medicion-carrusel', { body: JSON.stringify(carrusel, null, 2), contentType: 'application/json' });
      const resumen =
        `imágenes estables desde ${carrusel.imagenes.map((i) => (i.desdeMs / 1000).toFixed(2) + ' s').join(', ')}; ` +
        `intervalos ${carrusel.intervalosMs.map((ms) => (ms / 1000).toFixed(2) + ' s').join(', ')}; ` +
        `Home a los ${((carrusel.homeMs ?? 0) / 1000).toFixed(2)} s`;
      expect(carrusel.imagenes.length, `el carrusel muestra más de una imagen (${resumen})`).toBeGreaterThan(1);

      // Paso 2 — la transición es un fade: hay cuadros intermedios que mezclan las dos imágenes.
      for (const n of carrusel.cuadrosDeFundido) expect(n, `transición con fade (${resumen})`).toBeGreaterThan(0);

      // Paso 3 — el carrusel se corta antes de las 6 imágenes si la app ya está lista.
      expect(carrusel.homeMs, `la app pasa al Home (${resumen})`).toBeDefined();
      expect(carrusel.imagenes.length, `se corta antes de completar 6 (${resumen})`).toBeLessThan(6);

      // Esperado — las imágenes transicionan cada 1,8 s (tolerancia ±0,3 s por el muestreo de ~0,2 s).
      for (const ms of carrusel.intervalosMs) {
        expect(Math.abs(ms - 1800), `transición cada 1,8 s (${resumen})`).toBeLessThanOrEqual(300);
      }
    });

    test(`TC-B2C67-APP-006 · Al reanudar desde segundo plano no se muestra el Splash y se reanuda en la misma pantalla (${plataforma})`, async ({
      screen,
      device,
      bundleId,
      plataforma: p,
    }) => {
      const cp = 'TC-B2C67-APP-006';
      const splash = new SplashScreen(screen, device, p);
      const tabs = await new TabBar(screen, p).waitUntilReady();

      // Paso 1 — una pantalla específica (Categorías) y minimizar la app sin cerrarla.
      const modal = await tabs.tapCategorias();
      await modal.waitUntilReady();
      await modal.capturarEvidencia(cp, 1, 'categorias antes de minimizar');
      await splash.minimizar();
      await expect(modal.todas, 'la app quedó en segundo plano').not.toBeVisible();

      // Paso 2 — reabrirla (sin cerrarla).
      await splash.reanudar(bundleId!);
      const primera = await splash.fotografiar();
      guardar(cp, 2, 'primer cuadro al reanudar', p, primera.png);

      // Paso 3 — sin Splash ni loader, en la misma pantalla.
      expect(SplashScreen.esSplash(primera), `sin Splash al reanudar (logo ${primera.logo.toFixed(2)})`).toBe(false);
      await expect(modal.todas, 'se reanuda en Categorías').toBeVisible({ timeout: 3000 });
      await modal.capturarEvidencia(cp, 3, 'categorias al reanudar');
    });
  });
}
