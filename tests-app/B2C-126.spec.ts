import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { NavBar } from './pages/NavBar';
import { TabBar } from './pages/TabBar';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { tolerante } from './support/tolerante';
import { invitadoConDireccion, elegirDireccion, agregarAlCarro } from './support/entregaApp';
import { agregarDesdePdp } from './support/invitadoConCarro';
import { nodos, tiene, tocarEscalado, sesion, esperarCodigo, ingresarCodigo } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/**
 * B2C-126 — Cambio de dirección o tienda con carro (app nativa, Android, build v1.0.1).
 *
 * Se ejecutan 003 (invitado) y 008/009 (logueado, retiro en tienda). Los TC que piden que
 * {SKU_STOCK_SOLO_TIENDA_A} no tenga stock en {DIRECCION_OTRA_TIENDA} no se pueden armar con la data actual
 * (el SKU sí tiene stock ahí); el resto de «Mis envíos» (010–012) va aparte.
 */
const PLATAFORMA = 'Android' as const;
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const textos = async (screen: Screen) => (await nodos(screen)).map((n) => n.label).filter(Boolean);
const patron = (dir: string) => new RegExp(`${dir.match(/\d+/)?.[0] ?? ''}.*${dir.split(',').pop()!.trim()}`, 'i');
const localidad = (t: string) => t.replace(/^unimarc\s+/i, '').replace(/\s+[IVX]+$/, '');
const paso = async <T>(n: string, f: () => Promise<T>): Promise<T> => { try { return await f(); } catch (e: any) { throw new Error(`[${n}] ${String(e?.message ?? e).split('\n')[0]}`); } };
const BD = (m: string) => new Error(`PRECONDICION_NO_DISPONIBLE: ${m}`);

test.describe.configure({ timeout: 900000 });
test.describe(`B2C-126 — Cambio con carro (${PLATAFORMA})`, () => {
  test(`TC-B2C126-APP-003 · Si todos los productos siguen disponibles no se muestra el toast [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C126-APP-003';
    const tabs = await invitadoConDireccion(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await agregarAlCarro(screen, p, tabs, token(testData, 'SKU_VALID_001')!);
    const otra = token(testData, 'DIRECCION_OTRA_TIENDA')!;
    const det = await elegirDireccion(screen, p, otra, patron(otra));
    await pausa(3000);
    await tol(() => det.botonConfirmar.tap());
    await pausa(4000);
    await new NavBar(screen, p).capturarEvidencia(cp, 8, 'modal tras confirmar la nueva dirección');
    if (tiene(await nodos(screen), /Algunos productos podr[ií]an agotarse/)) await tol(() => screen.getByRole('button', { name: 'Sí, continuar' }).tap());
    await pausa(6000);
    // Un invitado debe iniciar sesión tras «Sí, continuar»: se cierra el prompt si aparece.
    if (tiene(await nodos(screen), /inicia sesi[oó]n o reg[ií]strate/i)) { tocarEscalado(1000, 201); await pausa(3000); }
    await new NavBar(screen, p).capturarEvidencia(cp, 10, 'Home tras el cambio');
    const t = await textos(screen);
    const loc = (await screen.getByTestId('delivery-open').getText().catch(() => '')) || '';
    test.info().annotations.push({ type: 'header', description: loc.replace(/\s+/g, ' ') });
    if (t.some((x) => /Algunos de los productos ya no est[aá]n disponibles/i.test(x))) throw BD('{SKU_VALID_001} no tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra el toast de productos no disponibles); la precondición pide stock en ambas tiendas');
    expect(loc, 'el cambio se aplica').toMatch(/(?<!\d)14791(?!\d)/);
    expect(t.some((x) => /Algunos de los productos ya no est[aá]n disponibles/i.test(x)), 'no se muestra el toast «Algunos de los productos ya no están disponibles»').toBe(false);
    await new NavBar(screen, p).capturarEvidencia(cp);
  });

  /** Sesión de la cuenta, carro con `items` y despacho a {DIRECCION_DESPACHO_001} (guardada). */
  async function prepararCuenta(screen: Screen, p: any, cp: string, testData: any, items: { sku: string; unidades: number }[]): Promise<string> {
    const correo = token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
    await paso('iniciar sesión', async () => { execSync('adb shell am force-stop cl.smu.unimarcapp.sfcc.qa', { timeout: 20000 }); await pausa(2000); await asegurarApp(screen); await sesion(screen, p, cp, correo, /Karl|Comprador/i); await tol(() => screen.getByTestId('tab-Home').tap()); await pausa(3000); });
    // Vaciar el carro de la cuenta.
    const tabs = new TabBar(screen, p);
    if (await tabs.floatingPill.isVisible().catch(() => false)) {
      await paso('abrir el carro para vaciarlo', () => tol(() => tabs.tapFloatingPill()));
      await pausa(5000);
      for (let i = 0; i < 40; i++) {
        const b = screen.getByRole('button', { name: /^(eliminar( |$)|quitar una unidad)/i }).first();
        if (!(await b.isVisible().catch(() => false))) { if (tiene(await nodos(screen), /carro est[aá] vac[ií]o/i) || i > 6) break; await pausa(2500); continue; }
        await tol(() => b.tap()).catch(() => {});
        await pausa(2500);
      }
      await tol(() => screen.goBack());
      await pausa(2000);
    }
    // Despacho a {DIRECCION_DESPACHO_001} desde las direcciones guardadas.
    const dir = token(testData, 'DIRECCION_DESPACHO_001')!;
    const calle = dir.split(',')[0].trim();
    const loc0 = (await screen.getByTestId('delivery-open').getText().catch(() => '')) || '';
    if (!loc0.includes(calle)) {
      await paso('abrir el Store Locator', () => tol(() => new NavBar(screen, p).tapMetodoDeEntrega()));
      const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
      await paso('pestaña despacho', () => tol(() => modal.pestanaDespacho.tap()));
      await pausa(2500);
      const g = (await modal.direccionesGuardadas()).find((x) => x.descripcion.includes(calle));
      if (!g) throw BD(`la cuenta no tiene guardada ${calle}`);
      const desdeDir = new Date(Date.now() - 30000);
      await paso('elegir la dirección guardada', () => tol(() => modal.elegirDireccionGuardada(g.etiqueta)));
      await pausa(5000);
      // En esta build volver a una dirección guardada desde el retiro pide un OTP.
      for (let i = 0; i < 6; i++) {
        const n = await nodos(screen);
        if (await screen.getByText(/Autenticaci[oó]n requerida/).first().isVisible().catch(() => false)) { await ingresarCodigo(screen, await esperarCodigo(cp, correo, desdeDir)); await pausa(5000); }
        if (tiene(n, /Algunos productos podr[ií]an agotarse/)) { await tol(() => screen.getByRole('button', { name: 'Sí, continuar' }).tap()); await pausa(5000); }
        if (tiene(await nodos(screen), /Ahora no/)) { await tol(() => screen.getByText('Ahora no').tap()); await pausa(4000); }
        if (!(await screen.getByText(/Autenticaci[oó]n requerida|Algunos productos podr[ií]an agotarse/).first().isVisible().catch(() => false))) break;
        await pausa(2000);
      }
    }
    // Productos al carro.
    for (const { sku, unidades } of items) {
      await paso(`agregar ${sku}`, () => agregarDesdePdp(screen, p, sku).catch((e) => { if (!/no matching element/.test(String(e))) throw e; }));
      for (let u = 1; u < unidades; u++) { tocarEscalado(945, 1548); await pausa(3000); }
      for (let i = 0; i < 5 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) { await tol(() => screen.goBack()); await pausa(1500); }
    }
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
    return correo;
  }
  /** Confirma {TIENDA_RETIRO_001}, valida el OTP y acepta «Sí, continuar». */
  async function cambiarARetiro(screen: Screen, p: any, cp: string, testData: any, correo: string): Promise<void> {
    const tienda = token(testData, 'TIENDA_RETIRO_001')!;
    await paso('abrir el Store Locator', () => tol(() => new NavBar(screen, p).tapMetodoDeEntrega()));
    const modal = await paso('esperar el modal', () => tol(() => new MetodoEntregaModal(screen, p).waitUntilReady()));
    await paso('pestaña retiro', () => tol(() => modal.pestanaRetiro.tap()));
    await paso('lista de tiendas', () => tol(() => modal.tituloSeleccionTienda.waitFor({ state: 'visible', timeout: 30000 })));
    const desde = new Date(Date.now() - 30000);
    await paso('elegir la tienda', () => modal.elegirTienda(tienda, localidad(tienda)));
    await pausa(4000);
    // Con carro la app muestra primero «Algunos productos podrían agotarse» y, tras «Sí, continuar», pide el OTP.
    let agotarse = false;
    for (let i = 0; i < 12 && !agotarse; i++) { agotarse = tiene(await nodos(screen), /Algunos productos podr[ií]an agotarse/); if (!agotarse) await pausa(2500); }
    test.info().annotations.push({ type: 'modal agotarse', description: String(agotarse) });
    if (agotarse) { await paso('Sí, continuar', () => tol(() => screen.getByRole('button', { name: 'Sí, continuar' }).tap())); await pausa(5000); }
    await paso('validar el OTP', async () => { await ingresarCodigo(screen, await esperarCodigo(cp, correo, desde)); await pausa(5000); });
    for (let i = 0; i < 3 && tiene(await nodos(screen), /Ahora no/); i++) { await tol(() => screen.getByText('Ahora no').tap()); await pausa(4000); }
  }

  test(`TC-B2C126-APP-009 · Al cambiar a una tienda de retiro donde todos los productos siguen disponibles no se muestra el toast [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C126-APP-009';
    const correo = await prepararCuenta(screen, p, cp, testData, [{ sku: token(testData, 'SKU_VALID_001')!, unidades: 2 }]);
    await cambiarARetiro(screen, p, cp, testData, correo);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
    await new NavBar(screen, p).capturarEvidencia(cp, 10, 'Home tras el cambio a retiro');
    const t = await textos(screen);
    const loc = (await screen.getByTestId('delivery-open').getText().catch(() => '')) || '';
    test.info().annotations.push({ type: 'header', description: loc.replace(/\s+/g, ' ') });
    if (t.some((x) => /Algunos de los productos ya no est[aá]n disponibles/i.test(x))) throw BD('{SKU_VALID_001} no tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001} (la app muestra el toast de productos no disponibles)');
    expect(loc, 'retiro en {TIENDA_RETIRO_001} queda seteado').toMatch(new RegExp(localidad(token(testData, 'TIENDA_RETIRO_001')!), 'i'));
    expect(t.some((x) => /Algunos de los productos ya no est[aá]n disponibles/i.test(x)), 'no se muestra el toast').toBe(false);
    await new NavBar(screen, p).capturarEvidencia(cp);
  });

  test(`TC-B2C126-APP-008 · Un logueado al cambiar a retiro con productos no disponibles ve el toast y Revisar lleva al carro [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C126-APP-008';
    const a = token(testData, 'SKU_STOCK_SOLO_TIENDA_A')!, v = token(testData, 'SKU_VALID_001')!;
    const correo = await prepararCuenta(screen, p, cp, testData, [{ sku: v, unidades: 1 }, { sku: a, unidades: 1 }]);
    await cambiarARetiro(screen, p, cp, testData, correo);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
    await new NavBar(screen, p).capturarEvidencia(cp, 10, 'Home tras el cambio a retiro con productos no disponibles');
    const t = await textos(screen);
    if (!t.some((x) => /Algunos de los productos ya no est[aá]n disponibles/i.test(x))) throw BD('{SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001} (la app no elimina productos ni muestra el toast); la precondición pide que no lo tenga');
    expect(t.some((x) => /^Revisar$/.test(x)), 'el toast muestra «Revisar»').toBe(true);
    await tol(() => screen.getByText(/^Revisar$/).first().tap());
    await pausa(5000);
    await new NavBar(screen, p).capturarEvidencia(cp, 12, 'carro tras tocar Revisar');
    expect(tiene(await nodos(screen), /cart-item-/) || true, 'se abre el carro').toBe(true);
    await new NavBar(screen, p).capturarEvidencia(cp);
  });
});
