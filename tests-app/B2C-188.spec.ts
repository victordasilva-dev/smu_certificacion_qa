import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { HomeScreen } from './pages/HomeScreen';
import { BuscarScreen } from './pages/BuscarScreen';
import * as disp from './support/dispositivo';
import * as fs from 'fs';
import type { Screen } from 'mobilewright';
import { ListadoScreen } from './pages/ListadoScreen';
import { agregarDesdePdp } from './support/invitadoConCarro';
import { nodos, sesion, type Nodo } from './support/sesionOtp';
import { tolerante } from './support/tolerante';

/**
 * B2C-188 — Floating Cart de la app (componente "Ir al carro" sobre la TabBar).
 *
 * Las filas no declaran `Plataforma:` y su Test data dice {APP_PLATFORM} = iOS; esta corrida
 * (2026-10-07) certifica **solo Android**, con el build v1.0.7 ({APP_BUILD}), por pedido del
 * usuario. El Floating Cart publica el testID `cart-open` (ver `TabBar.floatingPill`).
 *
 * Solo APP-001 tiene `test()`. El resto quedó en Bloqueado Data al explorar: {SKU_UNITARIO} sale
 * "Pronto disponible" para {COMPRADOR_USER} (sin stock en la tienda de su dirección); la cuenta
 * {COMPRADOR_MEMBRESIA_USER} figura como "Socio Oro" sin membresía activa; las filas sin cuenta
 * necesitan una dirección que no declaran; y las cuentas Colaborador/Diamante están en TBD.
 */
for (const plataforma of ['Android'] as const) {
  test.describe(`B2C-188 — Floating Cart (${plataforma})`, () => {
    test(`TC-B2C-188-APP-001 · El Floating Cart no se muestra con el carrito vacío (${plataforma})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
      const cp = 'TC-B2C-188-APP-001';
      test.setTimeout(240000);
      // Precondición: invitado con el carro vacío → app con datos borrados (recién instalada).
      await device.terminateApp(bundleId!);
      await disp.borrarDatosApp(bundleId!);
      await device.launchApp(bundleId!);
      const tabs = new TabBar(screen, p);
      for (let intento = 0; ; intento++) {
        try {
          await tabs.waitUntilReady();
          break;
        } catch (e) {
          if (intento >= 20 || !/no XML content|dump UI/.test(String(e))) throw e;
          await new Promise((r) => setTimeout(r, 3000));
        }
      }

      // Paso 2 — Home.
      const home = await new HomeScreen(screen, p).waitUntilReady();
      await expect(tabs.floatingPill, 'Home: el Floating Cart no se muestra').not.toBeVisible({ timeout: 4000 });
      await home.capturarEvidencia(cp, 2, 'Home sin Floating Cart');

      // PLP — "Mostrar todo" de "Los más vendidos" abre el listado de la categoría.
      const plp = await home.tapMostrarTodo();
      await plp.waitUntilReady();
      await expect(tabs.floatingPill, 'PLP: el Floating Cart no se muestra').not.toBeVisible({ timeout: 4000 });
      await plp.capturarEvidencia(cp, 2, 'PLP sin Floating Cart');

      // PDP — el primer producto del listado.
      const sku = await plp.abrirPrimerProducto();
      await expect(screen.getByTestId('pdp-gallery-page').first(), 'la PDP carga').toBeVisible({ timeout: 20000 });
      await expect(tabs.floatingPill, 'PDP: el Floating Cart no se muestra').not.toBeVisible({ timeout: 4000 });
      await plp.capturarEvidencia(cp, 2, `PDP ${sku} sin Floating Cart`);

      // SRP — búsqueda del término de prueba del Excel de data. La PDP oculta la TabBar: se vuelve
      // atrás hasta que la TabBar esté a la vista.
      for (let i = 0; i < 3 && !(await tabs.tab('Buscar').isVisible({ timeout: 1500 })); i++) {
        await screen.pressButton('BACK');
      }
      await tabs.tapBuscar();
      const buscar = await new BuscarScreen(screen, p).waitUntilReady();
      const termino = token(testData, 'SEARCH_TERM_001') ?? '';
      expect(termino, '{SEARCH_TERM_001} en el Excel de data').not.toBe('');
      const srp = await buscar.buscar(termino);
      await expect(buscar.resultadoPara(termino)).toBeVisible({ timeout: 15000 });
      await expect(tabs.floatingPill, 'SRP: el Floating Cart no se muestra').not.toBeVisible({ timeout: 4000 });
      await srp.capturarEvidencia(cp, 3, 'SRP sin Floating Cart');
    });
  });
}

/**
 * Corrida 2026-11-16 (solo Android, app ya instalada): los TC con sesión iniciada que la planilla
 * revisada ya puede correr. La data cambió desde octubre: las cuentas son correos (login por OTP) y
 * {SKU_UNITARIO} es Quix Lavalozas 500 ml ($3.990). Cada `test()` arma su propio carro: limpia el
 * de la cuenta, agrega {SKU_UNITARIO} desde su PDP y sube las unidades desde la SRP.
 */
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((r) => setTimeout(r, ms));
const PRECIO_UN = 3990;
const pesos = (n: number) => '$' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

let nCap = 0;
async function cap(cp: string, slug: string): Promise<void> {
  fs.mkdirSync('test-results/evidence', { recursive: true });
  const f = `test-results/evidence/${cp}-${disp.plataforma()}-p${String(++nCap).padStart(2, '0')}-${slug}.png`;
  fs.writeFileSync(f, await disp.captura());
}

/** El Floating Cart y la TabBar tal como están en pantalla (null si no se ven). */
async function estado(screen: Screen): Promise<{ pill: Nodo | null; tab: Nodo | null; textos: string[] }> {
  const n = await nodos(screen);
  return { pill: n.find((x) => x.id === 'cart-open') ?? null, tab: n.find((x) => x.id === 'tab-Home') ?? null, textos: n.map((x) => x.label) };
}
const sobreTabBar = (e: { pill: Nodo | null; tab: Nodo | null }) => !!e.pill && !!e.tab && e.pill.y + e.pill.h <= e.tab.y + 2;

async function aHome(screen: Screen): Promise<void> {
  for (let i = 0; i < 5 && !(await screen.getByTestId('tab-Home').isVisible().catch(() => false)); i++) { await disp.atras(); await pausa(1500); }
  await tol(() => screen.getByTestId('tab-Home').tap());
  await pausa(3000);
}

/** Deja el carro de la cuenta vacío desde «Mi carro». */
async function vaciarCarro(screen: Screen, p: any): Promise<void> {
  await aHome(screen);
  const tabs = new TabBar(screen, p);
  if (!(await tabs.floatingPill.isVisible().catch(() => false))) return;
  await tol(() => tabs.tapFloatingPill());
  await pausa(5000);
  for (let i = 0; i < 60; i++) {
    const b = screen.getByRole('button', { name: /^(eliminar( |$)|quitar una unidad)/i }).first();
    if (!(await b.isVisible().catch(() => false))) {
      if ((await estado(screen)).textos.some((x) => /carro est[aá] vac[ií]o/i.test(x)) || i > 6) break;
      await pausa(2500);
      continue;
    }
    await tol(() => b.tap()).catch(() => undefined);
    await pausa(1800);
  }
  await disp.volver();
  await pausa(2000);
}

/** Desde la SRP de {SKU_UNITARIO}, suma (o resta) unidades con los botones de su tarjeta. */
async function ajustarEnSrp(screen: Screen, sku: string, delta: number): Promise<void> {
  const btn = delta > 0 ? screen.getByTestId(`product-increment-${sku}`) : screen.getByRole('button', { name: /^Quitar (una unidad|del carro)$/ }).first();
  for (let i = 0; i < Math.abs(delta); i++) { await tol(() => btn.tap()); await pausa(1800); }
  await pausa(2500);
}

/** Carro de la cuenta con `unidades` de {SKU_UNITARIO}; deja la app en la SRP del SKU. */
async function carroCon(screen: Screen, p: any, sku: string, unidades: number): Promise<void> {
  await vaciarCarro(screen, p);
  await agregarDesdePdp(screen, p, sku);
  if (unidades > 1) await ajustarEnSrp(screen, sku, unidades - 1);
  const e = await estado(screen);
  const n = Number(e.pill?.label.match(/(\d+) unidades/)?.[1] ?? 0);
  if (n !== unidades) throw new Error(`PRECONDICION_NO_DISPONIBLE: el carro quedó con ${n} unidades en vez de ${unidades} (${e.pill?.label ?? 'sin Floating Cart'})`);
}

async function irAPlp(screen: Screen, p: any): Promise<ListadoScreen> {
  await aHome(screen);
  const l = await tol(() => new HomeScreen(screen, p).tapMostrarTodo());
  await tol(() => l.waitUntilReady());
  await pausa(2500);
  return l;
}
async function irASrp(screen: Screen, p: any, termino: string): Promise<void> {
  await aHome(screen);
  await tol(() => new TabBar(screen, p).tapBuscar());
  const b = await tol(() => new BuscarScreen(screen, p).waitUntilReady());
  await tol(() => b.buscar(termino));
  await pausa(6000);
}

test.describe.configure({ timeout: 900000 });
for (const plataforma of ['Android'] as const) {
  test.describe(`B2C-188 — Floating Cart con sesión (${plataforma})`, () => {
    test.beforeEach(() => { nCap = 0; });

    test(`TC-B2C-188-APP-002 · Floating Cart con el conteo de 10 unidades [Logueado] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C-188-APP-002';
      const sku = token(testData, 'SKU_UNITARIO')!;
      await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!, /Hola, /);
      await carroCon(screen, p, sku, 10);
      await aHome(screen);
      const e = await estado(screen);
      await cap(cp, 'home-floating-cart-10-unidades');
      expect(e.pill?.label, 'el componente muestra 10').toMatch(/^10 unidades/);
      expect(e.tab, 'la TabBar sigue visible').not.toBeNull();
      expect(sobreTabBar(e), `anclado sobre la TabBar (pill y=${e.pill?.y}+${e.pill?.h}, tab y=${e.tab?.y})`).toBe(true);
    });

    test(`TC-B2C-188-APP-003 · Icono, unidades e Ir al carro sobre la TabBar en Home, PLP, PDP y SRP [Logueado] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C-188-APP-003';
      const sku = token(testData, 'SKU_UNITARIO')!;
      await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!, /Hola, /);
      await carroCon(screen, p, sku, 2);
      const revisar = async (donde: string) => {
        const e = await estado(screen);
        await cap(cp, `${donde.toLowerCase()}-floating-cart`);
        expect.soft(e.pill?.label ?? '', `${donde}: unidades e «Ir al carro»`).toMatch(/^2 unidades.*Ir al carro/);
        expect.soft(e.tab, `${donde}: TabBar visible a la vez`).not.toBeNull();
        expect.soft(sobreTabBar(e), `${donde}: encima de la TabBar`).toBe(true);
      };
      await aHome(screen); await revisar('Home');
      const l = await irAPlp(screen, p); await revisar('PLP');
      await tol(() => l.abrirPrimerProducto()); await pausa(5000); await revisar('PDP');
      await irASrp(screen, p, sku); await revisar('SRP');
    });

    test(`TC-B2C-188-APP-010 · Barra de progreso y monto restante para despacho gratis [Logueado] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C-188-APP-010';
      const sku = token(testData, 'SKU_UNITARIO')!;
      await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!, /Hola, /);
      await carroCon(screen, p, sku, 8);
      const e = await estado(screen);
      await cap(cp, 'barra-de-progreso-subtotal-31920');
      expect(e.pill?.label ?? '').toContain(`Te faltan ${pesos(60000 - 8 * PRECIO_UN)} para despacho GRATIS`);
    });

    test(`TC-B2C-188-APP-011 · La barra de progreso se actualiza al modificar el carrito [Logueado] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C-188-APP-011';
      const sku = token(testData, 'SKU_UNITARIO')!;
      await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!, /Hola, /);
      await carroCon(screen, p, sku, 10);
      const antes = await estado(screen);
      await cap(cp, 'antes-subtotal-39900');
      expect(antes.pill?.label ?? '').toContain(`Te faltan ${pesos(60000 - 10 * PRECIO_UN)}`);
      await ajustarEnSrp(screen, sku, 4);
      const despues = await estado(screen);
      await cap(cp, 'despues-subtotal-55860');
      expect(despues.pill?.label ?? '').toMatch(/^14 unidades/);
      expect(despues.pill?.label ?? '').toContain(`Te faltan ${pesos(60000 - 14 * PRECIO_UN)}`);
    });

    test(`TC-B2C-188-APP-012 · Umbral de $60.000 para cliente sin segmento [Logueado] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C-188-APP-012';
      const sku = token(testData, 'SKU_UNITARIO')!;
      await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!, /Hola, /);
      await carroCon(screen, p, sku, 5);
      const e = await estado(screen);
      await cap(cp, 'umbral-60000');
      expect(e.pill?.label ?? '').toContain(`Te faltan ${pesos(60000 - 5 * PRECIO_UN)}`);
    });

    test(`TC-B2C-188-APP-015 · «¡Ya tienes despacho GRATIS!» y toast al alcanzar el umbral [Logueado] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C-188-APP-015';
      const sku = token(testData, 'SKU_UNITARIO')!;
      await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!, /Hola, /);
      await carroCon(screen, p, sku, 15);
      await cap(cp, 'justo-bajo-el-umbral-59850');
      await tol(() => screen.getByTestId(`product-increment-${sku}`).tap());
      const t0 = Date.now();
      const visto: { ms: number; toast: boolean; pill: string }[] = [];
      for (let i = 0; i < 8; i++) {
        const e = await estado(screen);
        visto.push({ ms: Date.now() - t0, toast: e.textos.some((x) => /^¡?Despacho GRATIS!?$/i.test(x.trim())), pill: e.pill?.label ?? '' });
        if (i === 0) await cap(cp, 'al-alcanzar-el-umbral');
        await pausa(400);
      }
      await cap(cp, 'estado-despacho-gratis');
      fs.writeFileSync('.qa/run/b188-015-toast.json', JSON.stringify(visto, null, 1));
      const final = visto[visto.length - 1].pill;
      expect(final, 'mensaje de despacho gratis logrado').toMatch(/Ya tienes despacho GRATIS/i);
      expect(final, 'sin monto restante').not.toMatch(/Te faltan/);
      expect(visto.some((v) => v.toast), `toast «Despacho Gratis» (${JSON.stringify(visto.map((v) => [v.ms, v.toast]))})`).toBe(true);
    });

    test(`TC-B2C-188-APP-016 · Vuelve a la barra de progreso al bajar del umbral [Logueado] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C-188-APP-016';
      const sku = token(testData, 'SKU_UNITARIO')!;
      await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!, /Hola, /);
      await carroCon(screen, p, sku, 16);
      const antes = await estado(screen);
      await cap(cp, 'con-despacho-gratis');
      expect(antes.pill?.label ?? '').toMatch(/Ya tienes despacho GRATIS/i);
      await ajustarEnSrp(screen, sku, -1);
      const despues = await estado(screen);
      await cap(cp, 'bajo-el-umbral');
      expect(despues.pill?.label ?? '').toContain(`Te faltan ${pesos(60000 - 15 * PRECIO_UN)}`);
      expect(despues.pill?.label ?? '').not.toMatch(/Ya tienes despacho GRATIS/i);
    });

    test(`TC-B2C-188-APP-018 · «Ir al carro» abre el carro y el Floating Cart sigue al volver [Logueado] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C-188-APP-018';
      const sku = token(testData, 'SKU_UNITARIO')!;
      await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!, /Hola, /);
      await carroCon(screen, p, sku, 2);
      await aHome(screen);
      const antes = (await estado(screen)).pill?.label ?? '';
      await cap(cp, 'home-con-floating-cart');
      await tol(() => screen.getByText('Ir al carro').tap());
      await pausa(5000);
      const carro = await estado(screen);
      await cap(cp, 'mi-carro');
      expect(carro.textos, 'abre «Mi carro»').toContain('Mi carro');
      await disp.volver();
      await pausa(3000);
      const despues = await estado(screen);
      await cap(cp, 'al-volver');
      expect(despues.pill?.label ?? '', 'mismo conteo al volver').toMatch(/^2 unidades/);
      expect(despues.pill?.label).toBe(antes);
    });

    test(`TC-B2C-188-APP-019 · Floating Cart en Home, PLP, PDP, SRP y Mi Cuenta [Logueado] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C-188-APP-019';
      const sku = token(testData, 'SKU_UNITARIO')!;
      await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!, /Hola, /);
      await carroCon(screen, p, sku, 2);
      const ver = async (donde: string) => {
        const e = await estado(screen);
        await cap(cp, donde.toLowerCase().replace(/ /g, '-'));
        expect.soft(e.pill, `${donde}: el Floating Cart se muestra`).not.toBeNull();
      };
      await aHome(screen); await ver('Home');
      const l = await irAPlp(screen, p); await ver('PLP');
      await tol(() => l.abrirPrimerProducto()); await pausa(5000); await ver('PDP');
      await irASrp(screen, p, sku); await ver('SRP');
      await aHome(screen); await tol(() => screen.getByTestId('tab-Mi cuenta').tap()); await pausa(4000); await ver('Mi Cuenta');
    });

    test(`TC-B2C-188-APP-020 · Floating Cart oculto en Login, Carrito, Checkout, error y mantenimiento [Logueado] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C-188-APP-020';
      const sku = token(testData, 'SKU_UNITARIO')!;
      await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!, /Hola, /);
      await carroCon(screen, p, sku, 6);
      await aHome(screen);
      await tol(() => new TabBar(screen, p).tapFloatingPill());
      await pausa(5000);
      const carro = await estado(screen);
      await cap(cp, 'carrito');
      expect(carro.textos).toContain('Mi carro');
      expect(carro.pill, 'Carrito: no se muestra').toBeNull();
      await tol(() => screen.getByTestId('cart-checkout').tap());
      await pausa(8000);
      if ((await estado(screen)).textos.some((x) => /Que no se te olviden/i.test(x))) { await tol(() => screen.getByRole('button', { name: 'Continuar' }).first().tap()); await pausa(6000); }
      const chk = await estado(screen);
      await cap(cp, 'checkout');
      expect(chk.textos.some((x) => /Datos de entrega|Checkout|Pago/i.test(x)), `llegó al checkout (${chk.textos.slice(0, 12).join(' / ')})`).toBe(true);
      expect(chk.pill, 'Checkout: no se muestra').toBeNull();
      throw new Error('PRECONDICION_NO_DISPONIBLE: Carrito y Checkout verificados sin Floating Cart; SSO/Login (con sesión y conteo ≥ 1 no se llega), página de error y cortina de mantenimiento no se pueden provocar en DEV');
    });

    test(`TC-B2C-188-APP-023 · Floating Cart fijo sobre la TabBar durante el scroll [Logueado] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C-188-APP-023';
      const sku = token(testData, 'SKU_UNITARIO')!;
      await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!, /Hola, /);
      await carroCon(screen, p, sku, 2);
      await irAPlp(screen, p);
      const a = await estado(screen); await cap(cp, 'plp-inicio');
      await disp.deslizarFijo(540, 1600, 540, 600, 500, { base: [1080, 2280] }); await pausa(2500);
      const b = await estado(screen); await cap(cp, 'plp-tras-scroll-abajo');
      await disp.deslizarFijo(540, 600, 540, 1600, 500, { base: [1080, 2280] }); await pausa(2500);
      const c = await estado(screen); await cap(cp, 'plp-tras-scroll-arriba');
      for (const [n, e] of [['inicio', a], ['abajo', b], ['arriba', c]] as const) {
        expect.soft(sobreTabBar(e), `${n}: sobre la TabBar sin superponerse (pill ${e.pill?.y}+${e.pill?.h}, tab ${e.tab?.y})`).toBe(true);
      }
      expect(b.pill?.y, 'misma posición tras scroll abajo').toBe(a.pill?.y);
      expect(c.pill?.y, 'misma posición tras scroll arriba').toBe(a.pill?.y);
    });

    test(`TC-B2C-188-APP-017 · Despacho gratis permanente con membresía [Logueado] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C-188-APP-017';
      const sku = token(testData, 'SKU_UNITARIO')!;
      await sesion(screen, p, cp, token(testData, 'COMPRADOR_MEMBRESIA_USER')!, /(?!)/); // fuerza el login con esta cuenta
      await aHome(screen);
      await cap(cp, 'cuenta-membresia');
      for (const [u, slug] of [[1, 'subtotal-bajo'], [8, 'subtotal-medio'], [16, 'subtotal-alto']] as const) {
        await carroCon(screen, p, sku, u);
        const e = await estado(screen);
        await cap(cp, slug);
        expect.soft(e.pill?.label ?? '', `${u} un.: estado despacho gratis`).toMatch(/despacho gratis/i);
        expect.soft(e.pill?.label ?? '', `${u} un.: sin monto restante`).not.toMatch(/Te faltan/);
      }
    });

    test(`TC-B2C-188-APP-013 · Umbral de $40.000 para Colaborador [Logueado] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C-188-APP-013';
      const sku = token(testData, 'SKU_UNITARIO')!;
      await sesion(screen, p, cp, token(testData, 'COMPRADOR_COLABORADOR_USER')!, /(?!)/); // fuerza el login con esta cuenta
      await carroCon(screen, p, sku, 2);
      const e = await estado(screen);
      await cap(cp, 'umbral-colaborador');
      expect(e.pill?.label ?? '').toContain(`Te faltan ${pesos(40000 - 2 * PRECIO_UN)}`);
    });

    test(`TC-B2C-188-APP-014 · Umbral de $20.000 para Diamante [Logueado] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C-188-APP-014';
      const sku = token(testData, 'SKU_UNITARIO')!;
      await sesion(screen, p, cp, token(testData, 'COMPRADOR_DIAMANTE_USER')!, /(?!)/); // fuerza el login con esta cuenta
      await carroCon(screen, p, sku, 2);
      const e = await estado(screen);
      await cap(cp, 'umbral-diamante');
      expect(e.pill?.label ?? '').toContain(`Te faltan ${pesos(20000 - 2 * PRECIO_UN)}`);
      throw new Error('PRECONDICION_NO_DISPONIBLE: Diamante verificado; el paso 4 pide una cuenta Colaborador + Diamante que la fila no declara');
    });
  });
}
