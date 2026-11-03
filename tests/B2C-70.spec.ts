import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import type { LoadedTestData } from './support/testData';
import { DESKTOP, MOBILE } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { LoginModal } from './pages/LoginModal';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { AgotarseModal } from './pages/AgotarseModal';
import { esperarOtp, marcaOtp } from './support/otp';

/**
 * B2C-70 — Store Locator del header: qué muestra según el método de entrega.
 *
 * De los 3 TC de la planilla solo está aquí **TC-B2C70-D-001**, el del estado sin método de
 * entrega seleccionado. Los otros dos quedaron `Bloqueado` antes de llegar a tener `test()`, y por
 * la misma raíz: los dos parten de una forma de entrega ya aplicada y ninguna de las dos filas
 * dice con qué dirección o tienda se aplica — su columna `Test data` declara solo `{BASE_URL}`.
 *
 * No es un tecnicismo. Como invitado no hay direcciones guardadas: el drawer obliga a escribir una
 * dirección concreta, y de esa dirección depende justamente lo que D-002 viene a verificar (el
 * label de precio o condición de despacho, que cambia con la cobertura de cada comuna). Elegir una
 * a dedo convertiría el veredicto en una afirmación sobre la dirección elegida, no sobre el
 * producto. Y la única vía que se resolvería dentro de la propia UI —elegir una tienda de la lista
 * que el drawer ya ofrece, sin data externa— está rota en el ambiente: confirmar la tienda abre un
 * modal de cobertura de despacho y el header no cambia (ver `.qa/knowledge/store-locator.json`).
 * D-003 suma lo suyo: pide un usuario logueado y una dirección cuyo nombre supere los 53
 * caracteres, dos datos que tampoco declara.
 *
 * El caso que sí corre no necesita nada de eso: el estado inicial del storefront ya es "sin método
 * de entrega seleccionado", así que la precondición se cumple sola al abrir la página.
 */


// --- Cuenta con sesión (D-002 no la usa; M-006 a M-008 sí) -------------------------------------

const SESION = path.resolve('.qa/auth/b70-user.json');

function correo(testData: LoadedTestData): string {
  return token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
}

/** Inicia sesión con {USER_AUTH_001} reutilizando su storageState; si no sirve, por correo + OTP. */
async function iniciarSesion(page: Page, testData: LoadedTestData, cuenta?: { correo: string; sesion: string }): Promise<PaginaHabilitada> {
  const SESION_C = cuenta?.sesion ?? SESION;
  const CORREO = cuenta?.correo ?? correo(testData);
  if (fs.existsSync(SESION_C)) {
    const estado = JSON.parse(fs.readFileSync(SESION_C, 'utf-8'));
    await page.context().addCookies(estado.cookies ?? []);
    const origen = (estado.origins ?? [])[0];
    if (origen?.localStorage?.length) {
      await page.addInitScript((items: { name: string; value: string }[]) => {
        if (sessionStorage.getItem('__b70_ls')) return;
        for (const { name, value } of items) localStorage.setItem(name, value);
        sessionStorage.setItem('__b70_ls', '1');
      }, origen.localStorage);
    }
  }
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  const login = new LoginModal(page);
  const conSesion = await home.header.saludo.waitFor({ state: 'visible', timeout: 20000 }).then(() => true, () => false);
  if (!conSesion) {
    const desde = marcaOtp();
    await login.pedirCodigo(CORREO);
    await login.ingresarCodigo(await esperarOtp(CORREO, desde, { digitos: 6 }));
  }
  await login.descartarPasskey();
  fs.mkdirSync(path.dirname(SESION_C), { recursive: true });
  await page.context().storageState({ path: SESION_C });
  return home;
}

/** "Algunos productos podrían agotarse" → "Sí, continuar" y, si aparece, el OTP de "Autenticación requerida". */
async function confirmarCambio(page: Page, testData: LoadedTestData, correoOtp?: string): Promise<void> {
  const agotarse = new AgotarseModal(page);
  const desde = marcaOtp();
  if (await agotarse.root.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) {
    await agotarse.botonSi.click();
  }
  const modal = new MetodoEntregaModal(page);
  if (await modal.modalOtp.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) {
    await new LoginModal(page).escribirCodigo(await esperarOtp(correoOtp ?? correo(testData), desde, { digitos: 6 }));
    await modal.modalOtp.waitFor({ state: 'hidden', timeout: 30000 });
  }
  await page.waitForTimeout(3000);
}

/**
 * Deja activa, con sesión iniciada, la dirección guardada que coincide con `patron`. Si la cuenta
 * no la tiene guardada, el caso no puede armar su precondición: error `PRECONDICION`.
 */
async function activarDireccionGuardada(page: Page, testData: LoadedTestData, patron: RegExp, descripcion: string, cuenta?: { correo: string; sesion: string }): Promise<PaginaHabilitada> {
  const home = await iniciarSesion(page, testData, cuenta);
  await home.header.storeLocator.waitFor({ state: 'visible', timeout: 30000 });
  await page.waitForTimeout(3000);
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.tabDespachoDomicilio.click();
  const guardada = modal.root.getByRole('button').filter({ hasText: patron }).first();
  if (!(await guardada.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false))) {
    throw new Error(`PRECONDICION: la cuenta no tiene guardada la dirección ${descripcion}.`);
  }
  await guardada.click();
  await confirmarCambio(page, testData, cuenta?.correo);
  return home;
}

/** Devuelve la cuenta a {DIRECCION_DESPACHO_001} ("Casa") para no dejar su estado cambiado. Mejor esfuerzo. */
async function restaurarCasa(page: Page, testData: LoadedTestData): Promise<void> {
  try {
    const destino = token(testData, 'DIRECCION_DESPACHO_001')!;
    const home = await new PaginaHabilitada(page).goto();
    await home.header.storeLocator.waitFor({ state: 'visible', timeout: 30000 });
    if (/calle uno 23|^casa\b/i.test((await home.header.direccionDelStoreLocator()).trim())) return;
    await home.header.storeLocator.click();
    const modal = await new MetodoEntregaModal(page).esperarAbierto();
    await modal.tabDespachoDomicilio.click();
    await modal.root.getByRole('button').filter({ hasText: destino }).first().click();
    await confirmarCambio(page, testData);
  } catch { /* la limpieza no cambia el veredicto */ }
}

/** Lo que el Store Locator muestra en su primera línea, con la dirección ya cargada de la cuenta. */
async function direccionMostrada(home: PaginaHabilitada, page: Page): Promise<string> {
  await page.reload({ waitUntil: 'domcontentloaded' });
  await home.waitUntilReady();
  return home.header.esperarDireccionEnStoreLocator(45000);
}

test.describe('B2C-70 — Store Locator del header', () => {
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C70-D-001 · Sin metodo de entrega seleccionado, el Store Locator muestra el icono, el texto Elige una forma de entrega y el icono V (Desktop)', async ({
      page,
    }) => {
      // Paso 1 — acceder sin método de entrega seleccionado a una página habilitada. La fila
      // declara {BASE_URL} y ninguna ruta más, así que la página habilitada es el Home; el
      // contexto del navegador nace limpio, que es la precondición del caso.
      const pagina = new PaginaHabilitada(page);
      await pagina.goto();
      await pagina.capturarEvidencia('TC-B2C70-D-001', 1, 'Home sin método de entrega seleccionado');

      // Paso 2 — verificar el contenido del Store Locator en el header.
      const locator = pagina.header.storeLocator;
      await expect(locator).toBeVisible();
      await pagina.capturarEvidencia('TC-B2C70-D-001', 2, 'botón del Store Locator en el header', {
        elemento: locator,
      });

      const composicion = await pagina.header.composicionDelStoreLocator();

      // El texto, tal como lo declara el resultado esperado.
      expect(composicion.texto).toMatch(/^elige una forma de entrega$/i);

      // El icono del método, a la izquierda del texto. Se comprueba que alguno empiece antes que
      // el texto y no dónde está exactamente: el slot lo ocupan dos svg que se turnan deslizándose,
      // y su posición cambia entre dos lecturas del mismo estado.
      const aLaIzquierda = composicion.iconos.filter((i) => i.dx < composicion.textoDx);
      expect(aLaIzquierda.length).toBeGreaterThan(0);

      // El "icono V": el del extremo derecho. Se exige que sea una V de verdad —tres puntos con el
      // del medio más abajo que los extremos— en vez de comparar el path contra un literal, que
      // envejecería en cuanto rediseñen el icono sin cambiarle la forma.
      const chevron = composicion.iconos[composicion.iconos.length - 1];
      expect(chevron.dx).toBeGreaterThan(composicion.textoDx);
      expect(chevron.puntos).toHaveLength(3);
      const [inicio, medio, fin] = chevron.puntos;
      expect(medio.y).toBeGreaterThan(inicio.y);
      expect(medio.y).toBeGreaterThan(fin.y);

      // Estado final: el header completo, para que la evidencia muestre el componente en su sitio
      // y no solo el recorte del botón.
      await pagina.capturarEvidencia('TC-B2C70-D-001', undefined, undefined, {
        elemento: pagina.header.root,
      });
    });

    test('TC-B2C70-D-002 · Con un método de entrega activo, el Store Locator muestra el ícono del método, la dirección y el label de precio al navegar (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C70-D-002';
      const direccion = token(testData, 'DIRECCION_DESPACHO_001')!;
      const calle = direccion.split(',')[0].trim();
      const home = new PaginaHabilitada(page);
      await home.goto();
      await home.cookies.aceptarSiAparece();
      // Paso 1 — configurar un método de entrega con dirección ({DIRECCION_DESPACHO_001}).
      await home.header.storeLocator.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await modal.fijarDireccionComoInvitado(direccion, new RegExp(calle, 'i'));
      await page.reload({ waitUntil: 'domcontentloaded' });
      await home.waitUntilReady();

      // Paso 2 — navegar a distintas páginas y verificar el Store Locator en cada una: Home y, desde un producto, su PDP.
      const verificar = async (pagina: PaginaHabilitada, nombre: string, paso: number) => {
        await expect(pagina.header.storeLocator, `dirección en el Store Locator (${nombre})`).toContainText(calle, { timeout: 30000 });
        expect(await iconoActivo(pagina), `ícono de Despacho a domicilio activo (${nombre})`).toBe('despacho');
        expect(await pagina.header.direccionDelStoreLocator(), `dirección (${nombre})`).toBe(calle);
        await expect(labelDePrecio(pagina), `label de precio (${nombre})`).toHaveText(/^\$\s?[\d.]+$|^gratis$/i);
        await pagina.capturarEvidencia(cp, paso, `Store Locator en ${nombre}`, { elemento: pagina.header.barraDelSitio });
      };
      await verificar(home, 'Home', 2);
      await page.locator('a[href$=".html"]').locator('visible=true').first().click();
      await page.waitForLoadState('domcontentloaded');
      const pdp = new PaginaHabilitada(page, new URL(page.url()).pathname.replace(/^\//, ''), 'PDP');
      await pdp.waitUntilReady();
      await verificar(pdp, 'la PDP', 4);
      await pdp.capturarEvidencia(cp);
    });
  });

  /**
   * SP2 (2026-10-12): la planilla agregó los TC Mobile. Sus filas traen los tokens en la columna
   * "Descripción" y la descripción en "Test data" (columnas intercambiadas): se toman como declarados.
   * Solo M-001 (invitado) y M-002 ({SIN_DIRECCION_USER}, sin método de entrega) son ejecutables; el
   * resto quedó en Bloqueado Data (direcciones/tiendas en TBD, cuentas sin fila o {USER_AUTH_001}).
   */
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    /** Verifica en una página el Store Locator "sin método": ícono, texto y V. */
    async function sinMetodoEn(pagina: PaginaHabilitada, cp: string, paso: number): Promise<void> {
      const locator = pagina.header.storeLocator;
      await expect(locator, `Store Locator visible en ${pagina.nombre}`).toBeVisible();
      await pagina.capturarEvidencia(cp, paso, `Store Locator en ${pagina.nombre}`, { elemento: pagina.header.root });
      const c = await pagina.header.composicionDelStoreLocator();
      expect(c.texto, `texto en ${pagina.nombre}`).toMatch(/^elige una forma de entrega$/i);
      expect(c.iconos.filter((i) => i.dx < c.textoDx).length, `ícono en ${pagina.nombre}`).toBeGreaterThan(0);
      const v = c.iconos[c.iconos.length - 1];
      expect(v.dx, `ícono V a la derecha en ${pagina.nombre}`).toBeGreaterThan(c.textoDx);
      expect(v.puntos).toHaveLength(3);
      expect(v.puntos[1].y).toBeGreaterThan(v.puntos[0].y);
      expect(v.puntos[1].y).toBeGreaterThan(v.puntos[2].y);
    }

    /** Pasos de Home, PLP y búsqueda con las rutas que declara la fila. */
    async function recorrer(page: Page, testData: LoadedTestData, cp: string, desde: number): Promise<void> {
      const rutas: [string, string][] = [
        ['', 'Home'],
        [rel(token(testData, 'PLP_URL')!), 'PLP'],
        [rel(token(testData, 'SRP_URL')!), 'búsqueda'],
      ];
      let paso = desde;
      for (const [ruta, nombre] of rutas) {
        const pagina = new PaginaHabilitada(page, ruta, nombre);
        await pagina.goto();
        await sinMetodoEn(pagina, cp, paso);
        paso += 2;
      }
    }

    test('TC-B2C70-M-001 · Verificar que el Store Locator muestra "Elige una forma de entrega" sin método seleccionado (Mobile)', async ({ page, testData }) => {
      // Contexto nuevo = sesión nueva sin método de entrega (precondición).
      await recorrer(page, testData, 'TC-B2C70-M-001', 2);
      await page.screenshot({ path: 'test-results/evidence/TC-B2C70-M-001.png' });
    });

    test('TC-B2C70-M-002 · Verificar que el Store Locator muestra "Elige una forma de entrega" sin método seleccionado (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C70-M-002';
      const home = new PaginaHabilitada(page);
      await home.goto();
      await home.cookies.aceptarSiAparece();
      await new LoginModal(page).iniciarSesion(token(testData, 'SIN_DIRECCION_USER')!, token(testData, 'SIN_DIRECCION_PASSWORD')!);
      await recorrer(page, testData, cp, 4);
      await page.screenshot({ path: `test-results/evidence/${cp}.png` });
    });

    test('TC-B2C70-M-003 · Verificar que el Store Locator muestra ícono de despacho, dirección y label de precio [Guest] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C70-M-003';
      const direccion = token(testData, 'DIRECCION_DESPACHO_001')!;
      const calle = direccion.split(',')[0].trim();
      const home = new PaginaHabilitada(page);
      await home.goto();
      await home.cookies.aceptarSiAparece();
      // Precondición: Despacho a domicilio seleccionado en la sesión con la dirección declarada (B2C-4).
      await home.header.storeLocator.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await modal.fijarDireccionComoInvitado(direccion, new RegExp(calle, 'i'));

      await page.reload({ waitUntil: 'domcontentloaded' });
      await home.waitUntilReady();
      await expect(home.header.storeLocator, 'dirección en el Store Locator').toContainText(calle, { timeout: 30000 });
      await home.capturarEvidencia(cp, 2, 'Store Locator con Despacho a domicilio', { elemento: home.header.barraDelSitio });
      expect(await iconoActivo(home), 'ícono de Despacho a domicilio activo').toBe('despacho');
      expect(await home.header.direccionDelStoreLocator()).toBe(calle);
      await expect(labelDePrecio(home), 'label de precio').toHaveText(/^\$\s?[\d.]+$|^gratis$/i);
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C70-M-004 · Verificar que el Store Locator muestra ícono de retiro, tienda y label de precio [Guest] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C70-M-004';
      const tienda = token(testData, 'TIENDA_RETIRO_001')!;
      const home = new PaginaHabilitada(page);
      await home.goto();
      await home.cookies.aceptarSiAparece();
      // Precondición: Retiro en tienda seleccionado en la sesión con la tienda declarada (B2C-4).
      await home.header.storeLocator.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await modal.tabRetiroEnTienda.click();
      await expect(modal.tituloSeleccionTienda).toBeVisible();
      // El buscador de tiendas filtra por ubicación, no por nombre: si la tienda no está en la lista
      // inicial, se filtra por la comuna que trae su nombre ("Las Condes").
      const opcion = modal.root.locator('button').filter({ hasText: tienda }).filter({ has: page.locator('input[type="radio"]') }).first();
      await page.waitForTimeout(3000);
      if (!(await opcion.isVisible())) {
        await modal.campoBuscarTienda.click();
        await modal.campoBuscarTienda.pressSequentially(tienda.replace(/^unimarc\s+/i, '').replace(/\s+[IVX]+$/, ''), { delay: 80 });
      }
      await expect(opcion, `tienda ${tienda} en la lista`).toBeVisible({ timeout: 30000 });
      await opcion.click();
      await modal.root.getByRole('button', { name: /confirmar tienda/i }).click();
      // Al confirmar, al invitado se le ofrece iniciar sesión: se cierra y sigue como invitado.
      const login = page.locator('[role="dialog"]').filter({ hasText: /hola, ingresa aqu/i }).locator('visible=true').first();
      await login.waitFor({ state: 'visible', timeout: 30000 }).catch(() => undefined);
      if (await login.isVisible()) await login.getByRole('button', { name: /^cerrar$/i }).click();

      await page.reload({ waitUntil: 'domcontentloaded' });
      await home.waitUntilReady();
      await expect(home.header.storeLocator, 'tienda en el Store Locator').toContainText(tienda, { timeout: 30000 });
      await home.capturarEvidencia(cp, 2, 'Store Locator con Retiro en tienda', { elemento: home.header.barraDelSitio });
      expect(await iconoActivo(home), 'ícono de Retiro en tienda activo').toBe('retiro');
      expect(await home.header.direccionDelStoreLocator()).toBe(tienda);
      await expect(labelDePrecio(home), 'label de precio').toHaveText(/^\$\s?[\d.]+$|^gratis$/i);
      await home.capturarEvidencia(cp);
    });
  });

  test.describe('Mobile 390x844 · cuenta con sesión', () => {
    test.use(MOBILE);
    test.describe.configure({ timeout: 480000 });

    test.afterEach(async ({ page, testData }, testInfo) => {
      if (/M-00[678]/.test(testInfo.title)) await restaurarCasa(page, testData);
    });

    test('TC-B2C70-M-006 · Verificar que el Store Locator trunca a 42 caracteres con "…" una dirección larga [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C70-M-006';
      const larga = token(testData, 'DIRECCION_LARGA_001')!;
      const home = await activarDireccionGuardada(page, testData, /avenida libertador general bernardo o.higgins/i, larga);
      const mostrada = await direccionMostrada(home, page);
      await home.capturarEvidencia(cp, 2, 'Store Locator con la dirección larga', { elemento: home.header.barraDelSitio });
      expect(mostrada, `los primeros 42 caracteres de «${larga}» + "…"`).toBe(larga.slice(0, 42) + '…');
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C70-M-007 · Verificar que el Store Locator muestra completa sin "…" una dirección de 42 caracteres [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C70-M-007';
      const exacta = token(testData, 'DIRECCION_42_CHARS')!;
      expect(exacta.length, 'la dirección declarada tiene 42 caracteres').toBe(42);
      const home = await activarDireccionGuardada(page, testData, /av libertador gral bernardo o.higgins/i, exacta);
      const mostrada = await direccionMostrada(home, page);
      await home.capturarEvidencia(cp, 2, 'Store Locator con la dirección de 42 caracteres', { elemento: home.header.barraDelSitio });
      expect(mostrada, `«${exacta}» completa y sin "…"`).toBe(exacta);
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C70-M-008 · Verificar que el Store Locator trunca a 42 caracteres con "…" una tienda de nombre largo [Logueado] (Mobile)', async ({ page, testData }) => {
      const tienda = token(testData, 'TIENDA_NOMBRE_LARGO_001')!;
      // Precondición: la tienda debe tener un nombre de más de 42 caracteres para que haya truncamiento.
      if (tienda.length <= 42) {
        throw new Error(`PRECONDICION: {TIENDA_NOMBRE_LARGO_001} («${tienda}») tiene ${tienda.length} caracteres: no supera los 42, así que el nombre no se trunca.`);
      }
      const cp = 'TC-B2C70-M-008';
      const home = await iniciarSesion(page, testData);
      await home.header.storeLocator.click();
      const modal = await new MetodoEntregaModal(page).esperarAbierto();
      await modal.tabRetiroEnTienda.click();
      await modal.elegirTienda(tienda);
      await confirmarCambio(page, testData);
      const mostrada = await direccionMostrada(home, page);
      await home.capturarEvidencia(cp, 2, 'Store Locator con la tienda de nombre largo', { elemento: home.header.barraDelSitio });
      expect(mostrada, `los primeros 42 caracteres de «${tienda}» + "…"`).toBe(tienda.slice(0, 42) + '…');
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C70-M-005 · Verificar que el Store Locator mantiene método, dirección y label de precio al navegar [Mobile] [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C70-M-005';
      const cuenta = { correo: token(testData, 'COMPRADOR_CON_DIRECCION_USER')!.split('/')[0].trim(), sesion: path.resolve('.qa/auth/b70-condireccion.json') };
      const home = await iniciarSesion(page, testData, cuenta);
      const enHome = await direccionMostrada(home, page);
      await home.capturarEvidencia(cp, 2, 'Home: Store Locator con método, dirección y label', { elemento: home.header.barraDelSitio });
      expect(await iconoActivo(home), 'Home: ícono de Despacho activo').toBe('despacho');
      await expect(labelDePrecio(home), 'Home: label de precio').toHaveText(/^\$\s?[\d.]+$|^gratis$/i);
      const labelHome = (await labelDePrecio(home).innerText()).trim();
      for (const [nombre, url] of [['PLP', token(testData, 'PLP_URL')!], ['búsqueda', token(testData, 'SRP_URL')!]] as const) {
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        await home.header.storeLocator.waitFor({ state: 'visible', timeout: 45000 });
        const dir = await home.header.esperarDireccionEnStoreLocator(45000);
        await home.capturarEvidencia(cp, nombre === 'PLP' ? 3 : 4, `${nombre}: Store Locator`, { elemento: home.header.barraDelSitio });
        expect(dir, `${nombre}: misma dirección que en el Home`).toBe(enHome);
        expect(await iconoActivo(home), `${nombre}: mismo ícono de Despacho`).toBe('despacho');
        await expect(labelDePrecio(home), `${nombre}: label de precio`).toHaveText(labelHome);
      }
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C70-M-015 · Verificar que el header muestra una dirección con el caracter especial "+" sin alterarlo [Mobile] [Logueado] (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-B2C70-M-015';
      const direccion = token(testData, 'DIRECCION_CARACTERES_ESPECIALES')!;
      const cuenta = { correo: token(testData, 'COMPRADOR_CON_DIRECCION_USER')!.split('/')[0].trim(), sesion: path.resolve('.qa/auth/b70-condireccion.json') };
      const home = await activarDireccionGuardada(page, testData, new RegExp(direccion.split('/')[0].trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), direccion, cuenta);
      const enHome = await direccionMostrada(home, page);
      await home.capturarEvidencia(cp, 2, 'Home: dirección con «+»', { elemento: home.header.barraDelSitio });
      expect(enHome, 'Home: el «+» se muestra literal').toContain('+');
      expect(enHome, 'Home: sin «%2B» ni «&#43;»').not.toMatch(/%2b|&#43;/i);
      await page.goto(token(testData, 'PLP_URL')!, { waitUntil: 'domcontentloaded' });
      await home.waitUntilReady();
      const enPlp = await home.header.esperarDireccionEnStoreLocator(45000);
      await home.capturarEvidencia(cp, 3, 'PLP: dirección con «+»', { elemento: home.header.barraDelSitio });
      expect(enPlp, 'PLP: misma dirección').toBe(enHome);
      await page.reload({ waitUntil: 'domcontentloaded' });
      await home.waitUntilReady();
      const trasRecarga = await home.header.esperarDireccionEnStoreLocator(45000);
      expect(trasRecarga, 'tras recargar: misma dirección con «+»').toBe(enHome);
      await home.capturarEvidencia(cp);
    });
  });

  test.describe('Desktop 1440x900 y Mobile 390x844 · cuenta con sesión', () => {
    test.use(DESKTOP);
    test.describe.configure({ timeout: 480000 });

    test.afterEach(async ({ page, testData }) => { await restaurarCasa(page, testData); });

    test('TC-B2C70-D-003 · La direccion o tienda mostrada se trunca a 53 caracteres en Desktop y 42 en Mobile, agregando puntos suspensivos (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-B2C70-D-003';
      const larga = token(testData, 'DIRECCION_LARGA_001')!;
      const home = await activarDireccionGuardada(page, testData, /avenida libertador general bernardo o.higgins/i, larga);
      const enDesktop = await direccionMostrada(home, page);
      await home.capturarEvidencia(cp, 2, 'Desktop: Store Locator con la dirección larga', { elemento: home.header.barraDelSitio });
      await page.setViewportSize({ width: 390, height: 844 });
      const enMobile = await direccionMostrada(home, page);
      await home.capturarEvidencia(cp, 3, 'Mobile: Store Locator con la dirección larga', { elemento: home.header.barraDelSitio });
      expect.soft(enDesktop, `Desktop: los primeros 53 caracteres de «${larga}» + "…"`).toBe(larga.slice(0, 53) + '…');
      expect.soft(enMobile, `Mobile: los primeros 42 caracteres de «${larga}» + "…"`).toBe(larga.slice(0, 42) + '…');
      await home.capturarEvidencia(cp);
    });
  });

});

/**
 * Qué método marca el ícono del Store Locator. Los dos íconos (moto y edificio) están siempre en el
 * botón; el activo va en rojo y el otro en gris (rgb(189,189,189)).
 */
async function iconoActivo(pagina: PaginaHabilitada): Promise<'despacho' | 'retiro' | null> {
  return pagina.header.storeLocator.evaluate((b) => {
    const svgs = [...b.querySelectorAll('svg')];
    const rojo = (s?: Element) => !!s && getComputedStyle(s).color === 'rgb(218, 41, 28)';
    const despacho = svgs.find((s) => (s.querySelector('path')?.getAttribute('d') ?? '').startsWith('M20.25 9'));
    const retiro = svgs.find((s) => (s.querySelector('path')?.getAttribute('d') ?? '').startsWith('M21.75 16.5'));
    if (rojo(despacho) && !rojo(retiro)) return 'despacho';
    if (rojo(retiro) && !rojo(despacho)) return 'retiro';
    return null;
  });
}

/** El chip del costo o condición de despacho ("$2.990", "Gratis"). */
function labelDePrecio(pagina: PaginaHabilitada) {
  return pagina.header.storeLocator.locator('[data-testid="header-delivery-chip"]');
}

function rel(url: string): string {
  const u = new URL(url);
  return (u.pathname + u.search).replace(/^\//, '');
}
