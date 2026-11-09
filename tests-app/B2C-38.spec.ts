import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import type { Plataforma } from '../tests/support/rutasEvidencia';
import { TabBar } from './pages/TabBar';
import { CarroScreen } from './pages/CarroScreen';
import { tolerante } from './support/tolerante';

/** Con las animaciones del Home uiautomator a veces no vuelca la pantalla: se reintenta hasta 30 veces. */
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
import { esperarTabBar, fijarDireccionInvitado, agregarDesdePdp, abrirCarro } from './support/invitadoConCarro';
import { sesion } from './support/sesionOtp';
import { NavBar } from './pages/NavBar';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { asegurarApp } from './support/appLista';

/**
 * B2C-38 — Control de cantidad y eliminación de ítems del carro (app nativa, Android, build v1.0.7).
 *
 * Las filas de invitado no declaran una dirección y un invitado sin dirección no puede agregar al
 * carro, así que la precondición la resuelve con {DIRECCION_DESPACHO_001} (ver `invitadoConCarro.ts`).
 *
 * Quedan sin `test()`: 011, 012 y 016 (piden sesión; el Excel de data no trae el RUT de la cuenta) y
 * 013, 014 y 015 ({HERRAMIENTA_PROXY_APP} y {CART_ITEM_API_ENDPOINT} en TBD).
 */

const PLATAFORMA = 'Android' as const;
/** Antepone el nombre de la etapa al error, para saber dónde se rompió. */
async function paso<T>(nombre: string, fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch (e: any) {
    throw new Error(`[${nombre}] ${String(e?.message ?? e).split('\n')[0]}`);
  }
}

const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));

async function textos(screen: Screen): Promise<{ t: string; id: string }[]> {
  const out: { t: string; id: string }[] = [];
  const walk = (n: any) => {
    const t = (n.label ?? n.text ?? n.value ?? '').toString().trim();
    const id = (n.identifier ?? n.resourceId ?? '').toString();
    if (t || id) out.push({ t, id });
    for (const c of n.children ?? []) walk(c);
  };
  for (const n of await tol(() => screen.viewTree())) walk(n);
  return out;
}

/** "1 un." → 1 · "0,5 kg" → 0.5 · null si el ítem no está. */
async function cantidad(screen: Screen, sku: string): Promise<number | null> {
  const t = (await textos(screen)).find((x) => x.id === `cart-quantity-${sku}`);
  if (!t) return null;
  const m = /([\d.,]+)/.exec(t.t);
  return m ? Number(m[1].replace(',', '.')) : null;
}

/** El monto que sigue a "Subtotal". */
async function subtotal(screen: Screen): Promise<number> {
  const t = await textos(screen);
  const i = t.findIndex((x) => /^subtotal$/i.test(x.t));
  return Number((t[i + 1]?.t ?? '').replace(/[^\d]/g, ''));
}

function item(screen: Screen, sku: string) {
  return screen.getByTestId(`cart-item-${sku}`);
}
const mas = (screen: Screen, sku: string) => item(screen, sku).getByRole('button', { name: /^agregar una unidad/i });
const menos = (screen: Screen, sku: string) => item(screen, sku).getByRole('button', { name: /^(quitar una unidad|eliminar)/i });
const tacho = (screen: Screen, sku: string) => item(screen, sku).getByRole('button', { name: /^eliminar/i });

/** Los botones del ítem se dibujan unos segundos después que el ítem: se espera a verlos antes de tocar. */
async function tocar(screen: Screen, l: { waitFor(o: { state: 'visible'; timeout: number }): Promise<unknown>; tap(): Promise<unknown> }): Promise<void> {
  // El carro se vuelve a dibujar tras cargar (el CTA muestra puntos de carga): el toque puede perder su
  // objetivo, así que se reintenta mientras el error sea de "no encuentro el elemento".
  for (let i = 0; ; i++) {
    try {
      await tol(() => l.waitFor({ state: 'visible', timeout: 40000 }));
      await esperarCarroQuieto(screen);
      await tol(() => l.tap());
      return;
    } catch (e) {
      if (i >= 5 || !/no matching element|timed out/i.test(String(e))) throw e;
      await pausa(3000);
    }
  }
}

async function esperarCantidad(screen: Screen, sku: string, valor: number | null, ms = 90000): Promise<number | null> {
  const fin = Date.now() + ms;
  let v: number | null = await cantidad(screen, sku);
  while (Date.now() < fin && v !== valor) {
    await pausa(1500);
    v = await cantidad(screen, sku);
  }
  await esperarCarroQuieto(screen);
  return v;
}

/**
 * Mientras el carro recalcula, el botón "Continuar" (`cart-checkout`) queda en `busy` y la app ignora los
 * toques: se espera a que deje de estarlo antes de interactuar.
 */
async function esperarCarroQuieto(screen: Screen, ms = 90000): Promise<void> {
  const ini = Date.now();
  const fin = ini + ms;
  while (Date.now() < fin) {
    const c = (await textos(screen)).find((x) => x.id === 'cart-checkout');
    if (!c || !/busy/i.test(c.t)) { if (Date.now() - ini > 3000) console.log(`CARRO_OCUPADO ${((Date.now() - ini) / 1000).toFixed(1)} s`); return; }
    await pausa(1500);
  }
  console.log(`CARRO_OCUPADO >${(ms / 1000).toFixed(0)} s (no terminó)`);
}

/** El carro muestra un esqueleto gris mientras carga: espera a ver un ítem o el estado vacío. */
async function esperarCarroCargado(screen: Screen, ms = 90000): Promise<boolean> {
  const ini = Date.now();
  const fin = ini + ms;
  while (Date.now() < fin) {
    const t = await textos(screen);
    if (t.some((x) => /^cart-item-/.test(x.id) || /^(reemplazar|faltantes: )/i.test(x.t))) { console.log(`CARRO_CARGADO ${((Date.now() - ini) / 1000).toFixed(1)} s`); await esperarCarroQuieto(screen); return true; }
    if (t.some((x) => /tu carro est[áa] vac[íi]o/i.test(x.t))) return false;
    await pausa(2000);
  }
  throw new Error('el carro no terminó de cargar en 90 s');
}

/** App abierta con los datos que ya tiene (dirección fijada), sin ítems en el carro. */
async function reabrirYVaciar(screen: Screen, device: any, bundleId: string, p: Plataforma): Promise<void> {
  await device.terminateApp(bundleId);
  await device.launchApp(bundleId);
  const tabs = new TabBar(screen, p);
  await esperarTabBar(tabs);
  await pausa(3000);
  // El botón flotante del carro tarda en aparecer tras abrir la app: sin esperarlo se daría por vacío un carro que no lo está.
  await tol(() => tabs.floatingPill.waitFor({ state: 'visible', timeout: 20000 })).catch(() => {});
  if (!(await tol(() => tabs.floatingPill.isVisible({ timeout: 2000 })))) return;
  await abrirCarro(screen, p);
  if (!(await esperarCarroCargado(screen))) { await tol(() => screen.goBack()); return; }
  // Con 1 unidad el control es "Eliminar <nombre>"; con más, "Quitar una unidad de <nombre>".
  // Tras cada toque la lista vuelve a mostrar el esqueleto: el carro solo se da por vacío cuando aparece
  // "¡Tu carro está vacío!", nunca porque no se vea ningún botón.
  for (let i = 0; i < 40; i++) {
    if (!(await esperarCarroCargado(screen))) break;
    const b = screen.getByRole('button', { name: /^(eliminar( |$)|quitar una unidad)/i }).first();
    try {
      await tol(() => b.tap());
    } catch (e) {
      if (!/no matching element|timed out/i.test(String(e))) throw e;
    }
    await pausa(2000);
  }
  await tol(() => screen.goBack());
  await pausa(1500);
}

/** Deja el carro con [SKU, cantidad en unidades de "+"] y lo deja abierto. */
async function armarCarro(screen: Screen, p: Plataforma, items: [string, number][]): Promise<CarroScreen> {
  for (const [sku] of items) await paso(`agregar ${sku} desde la PDP`, () => agregarDesdePdp(screen, p, sku));
  const carro = await paso('abrir el carro', () => abrirCarro(screen, p));
  await paso('esperar a que cargue el carro', () => esperarCarroCargado(screen));
  for (const [sku, n] of items) {
    for (let i = 1; i < n; i++) {
      await paso(`tocar + de ${sku}`, () => tocar(screen, mas(screen, sku)));
      await paso(`esperar cantidad ${i + 1}`, async () => { await esperarCantidad(screen, sku, i + 1, 90000); });
    }
  }
  return carro;
}

test.describe(`B2C-38 — Cantidad e ítems del carro (${PLATAFORMA})`, () => {
  test.describe.configure({ timeout: 600000 });

  test(`TC-B2C38-APP-000 · Precondición: invitado con {DIRECCION_DESPACHO_001} (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    await fijarDireccionInvitado(screen, device, bundleId!, p, testData);
  });

  test(`TC-B2C38-APP-001 · El + de un producto estándar suma 1 unidad y actualiza el precio [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C38-APP-001';
    const v = token(testData, 'SKU_VALID_001')!;
    await paso('vaciar el carro', () => reabrirYVaciar(screen, device, bundleId!, p));
    const carro = await armarCarro(screen, p, [[v, 1]]);
    const antes = await subtotal(screen);
    await carro.capturarEvidencia(cp, 2, 'carro con 1 unidad');
    await tocar(screen, mas(screen, v));
    const q = await esperarCantidad(screen, v, 2);
    await carro.capturarEvidencia(cp, 4, 'carro tras tocar +');
    expect(q, 'la cantidad pasa de 1 a 2').toBe(2);
    expect(await subtotal(screen), 'el subtotal se recalcula').toBe(antes * 2);
    await carro.capturarEvidencia(cp);
  });

  test(`TC-B2C38-APP-002 · El − de un producto estándar con 2 unidades resta 1 unidad [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C38-APP-002';
    const v = token(testData, 'SKU_VALID_001')!;
    await paso('vaciar el carro', () => reabrirYVaciar(screen, device, bundleId!, p));
    const carro = await armarCarro(screen, p, [[v, 2]]);
    expect(await esperarCantidad(screen, v, 2), 'precondición: 2 unidades').toBe(2);
    const antes = await subtotal(screen);
    await carro.capturarEvidencia(cp, 2, 'carro con 2 unidades');
    await tocar(screen, menos(screen, v));
    const q = await esperarCantidad(screen, v, 1);
    await carro.capturarEvidencia(cp, 4, 'carro tras tocar −');
    expect(q, 'la cantidad pasa de 2 a 1').toBe(1);
    expect(await subtotal(screen), 'el subtotal se recalcula').toBe(antes / 2);
    await expect(tacho(screen, v), 'el control − pasa a mostrarse como tacho').toBeVisible();
    await carro.capturarEvidencia(cp);
  });

  test(`TC-B2C38-APP-003 · Con 1 unidad el − se muestra como tacho y elimina el ítem sin confirmar [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C38-APP-003';
    const v = token(testData, 'SKU_VALID_001')!, u = token(testData, 'SKU_UNITARIO')!;
    await paso('vaciar el carro', () => reabrirYVaciar(screen, device, bundleId!, p));
    const carro = await armarCarro(screen, p, [[v, 1], [u, 1]]);
    await expect(tacho(screen, v), 'el − de {SKU_VALID_001} se muestra como tacho').toBeVisible();
    const antes = await subtotal(screen);
    await carro.capturarEvidencia(cp, 3, 'ítem con tacho');
    await tocar(screen, tacho(screen, v));
    const q = await esperarCantidad(screen, v, null);
    await carro.capturarEvidencia(cp, 5, 'carro tras tocar el tacho');
    expect(q, 'el ítem se elimina sin pedir confirmación').toBeNull();
    expect(await subtotal(screen), 'el subtotal se recalcula').toBeLessThan(antes);
    expect(await cantidad(screen, u), '{SKU_UNITARIO} se mantiene').toBe(1);
    await carro.capturarEvidencia(cp);
  });

  test(`TC-B2C38-APP-010 · El swipe to delete quita un ítem disponible sin confirmación [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C38-APP-010';
    const v = token(testData, 'SKU_VALID_001')!, u = token(testData, 'SKU_UNITARIO')!;
    await paso('vaciar el carro', () => reabrirYVaciar(screen, device, bundleId!, p));
    const carro = await armarCarro(screen, p, [[v, 1], [u, 2]]);
    const antes = await subtotal(screen);
    await carro.capturarEvidencia(cp, 2, 'carro con {SKU_VALID_001} x1 y {SKU_UNITARIO} x2');
    await tol(() => item(screen, u).waitFor({ state: 'visible', timeout: 40000 }));
    await tol(() => item(screen, u).swipe({ direction: 'left' }));
    await pausa(1500);
    await carro.capturarEvidencia(cp, 3, 'ítem deslizado');
    await tol(() => screen.getByText(/^eliminar$/i).first().tap());
    const q = await esperarCantidad(screen, u, null);
    await carro.capturarEvidencia(cp, 5, 'carro tras el swipe');
    expect(q, '{SKU_UNITARIO} se elimina sin confirmación').toBeNull();
    expect(await subtotal(screen), 'el subtotal se recalcula').toBeLessThan(antes);
    await carro.capturarEvidencia(cp);
  });
  // El pesable {SKU_PESABLE} (mangos granel 500 g) se cuenta en «un.»: cada unidad son 0,5 kg y el precio c/u es el de 0,5 kg.
  test(`TC-B2C38-APP-004 · El + de un producto pesable suma 0,5 kg y actualiza el precio según el peso [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C38-APP-004';
    const w = token(testData, 'SKU_PESABLE')!;
    await paso('vaciar el carro', () => reabrirYVaciar(screen, device, bundleId!, p));
    const carro = await armarCarro(screen, p, [[w, 1]]);
    expect(await esperarCantidad(screen, w, 1), 'precondición: 1 un. (0,5 kg)').toBe(1);
    const antes = await subtotal(screen);
    await carro.capturarEvidencia(cp, 2, 'carro con el pesable en 1 un. (0,5 kg)');
    await tocar(screen, mas(screen, w));
    const q = await esperarCantidad(screen, w, 2);
    await carro.capturarEvidencia(cp, 4, 'carro tras tocar +');
    expect(q, 'la cantidad sube un paso (0,5 kg → 1 kg)').toBe(2);
    expect(await subtotal(screen), 'el precio se actualiza según el peso').toBe(antes * 2);
    await carro.capturarEvidencia(cp);
  });

  test(`TC-B2C38-APP-005 · El − de un producto pesable resta 0,5 kg y actualiza el precio [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C38-APP-005';
    const w = token(testData, 'SKU_PESABLE')!;
    await paso('vaciar el carro', () => reabrirYVaciar(screen, device, bundleId!, p));
    const carro = await armarCarro(screen, p, [[w, 2]]);
    expect(await esperarCantidad(screen, w, 2), 'precondición: 2 un. (1 kg)').toBe(2);
    const antes = await subtotal(screen);
    await carro.capturarEvidencia(cp, 2, 'carro con el pesable en 2 un. (1 kg)');
    await tocar(screen, menos(screen, w));
    const q = await esperarCantidad(screen, w, 1);
    await carro.capturarEvidencia(cp, 4, 'carro tras tocar −');
    expect(q, 'la cantidad baja un paso (1 kg → 0,5 kg)').toBe(1);
    expect(await subtotal(screen), 'el precio se actualiza según el peso').toBe(antes / 2);
    await expect(tacho(screen, w), 'el control − pasa a mostrarse como tacho').toBeVisible();
    await carro.capturarEvidencia(cp);
  });

  test(`TC-B2C38-APP-006 · Un pesable en 0,5 kg muestra el tacho y se elimina sin confirmar [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C38-APP-006';
    const w = token(testData, 'SKU_PESABLE')!, v = token(testData, 'SKU_VALID_001')!;
    await paso('vaciar el carro', () => reabrirYVaciar(screen, device, bundleId!, p));
    const carro = await armarCarro(screen, p, [[w, 1], [v, 1]]);
    await expect(tacho(screen, w), 'el − del pesable en 0,5 kg se muestra como tacho').toBeVisible();
    const antes = await subtotal(screen);
    await carro.capturarEvidencia(cp, 3, 'pesable con tacho');
    await tocar(screen, tacho(screen, w));
    const q = await esperarCantidad(screen, w, null);
    await carro.capturarEvidencia(cp, 5, 'carro tras tocar el tacho');
    expect(q, 'el pesable se elimina sin pedir confirmación').toBeNull();
    expect(await subtotal(screen), 'el resumen de precios se recalcula').toBeLessThan(antes);
    expect(await cantidad(screen, v), '{SKU_VALID_001} se mantiene').toBe(1);
    await carro.capturarEvidencia(cp);
  });

  /** Toca + hasta que el control pasa a «Máx»; devuelve si se vio el toast de máximo y la cantidad final. */
  async function subirAlMaximo(screen: Screen, sku: string, tope: number): Promise<{ toast: boolean; q: number | null; clics: number }> {
    const maxBtn = item(screen, sku).getByText(/^m[áa]x$/i);
    let toast = false, clics = 0;
    for (; clics < tope; clics++) {
      if (await tol(() => maxBtn.isVisible({ timeout: 1500 }))) break;
      const antes = await cantidad(screen, sku);
      await tocar(screen, mas(screen, sku));
      const fin = Date.now() + 90000;
      while (Date.now() < fin) {
        const t = await textos(screen);
        if (t.some((x) => /alcanzaste el m[áa]ximo/i.test(x.t))) toast = true;
        if ((await cantidad(screen, sku)) !== antes) break;
        await pausa(1200);
      }
      await esperarCarroQuieto(screen);
    }
    if ((await textos(screen)).some((x) => /alcanzaste el m[áa]ximo/i.test(x.t))) toast = true;
    return { toast, q: await cantidad(screen, sku), clics };
  }

  test(`TC-B2C38-APP-007 · Al llegar al cartlimit se muestra el toast de máximo y el botón Máx deshabilitado [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C38-APP-007';
    const s = token(testData, 'SKU_CAR_LIMIT')!;
    await paso('vaciar el carro', () => reabrirYVaciar(screen, device, bundleId!, p));
    const carro = await armarCarro(screen, p, [[s, 1]]);
    const r = await subirAlMaximo(screen, s, 12);
    await carro.capturarEvidencia(cp, 4, 'carro al llegar al cartlimit');
    await expect(item(screen, s).getByText(/^m[áa]x$/i), 'el + se reemplaza por «Máx»').toBeVisible();
    expect(r.toast, 'se muestra el toast «Alcanzaste el máximo de productos»').toBe(true);
    expect(r.q, 'la cantidad queda en el cartlimit (5)').toBe(5);
    await tol(() => item(screen, s).getByText(/^m[áa]x$/i).tap()).catch(() => {});
    await pausa(1500);
    expect(await cantidad(screen, s), 'tocar «Máx» no agrega unidades').toBe(5);
    await carro.capturarEvidencia(cp);
  });

  test(`TC-B2C38-APP-008 · Al llegar al stock disponible se muestra el toast de máximo y el botón Máx deshabilitado [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C38-APP-008';
    const s = token(testData, 'SKU_STOCK_LIMITADO')!;
    await paso('vaciar el carro', () => reabrirYVaciar(screen, device, bundleId!, p));
    const carro = await armarCarro(screen, p, [[s, 1]]);
    const r = await subirAlMaximo(screen, s, 40);
    await carro.capturarEvidencia(cp, 4, 'carro al llegar al stock disponible');
    await expect(item(screen, s).getByText(/^m[áa]x$/i), 'el + se reemplaza por «Máx»').toBeVisible();
    expect(r.toast, 'se muestra el toast «Alcanzaste el máximo de productos»').toBe(true);
    expect(r.q, `la cantidad queda en el stock disponible (${r.clics + 1} unidades con ${r.clics} toques)`).toBeLessThan(Number(token(testData, 'CART_LIMIT_QTY') ?? 30));
    await carro.capturarEvidencia(cp);
  });

  test(`TC-B2C38-APP-017 · Al llegar al stock disponible de un pesable se muestra el toast de máximo y el botón Máx deshabilitado [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C38-APP-017';
    const w = token(testData, 'SKU_PESABLE_STOCK_LIMITADO')!;
    await paso('vaciar el carro', () => reabrirYVaciar(screen, device, bundleId!, p));
    const carro = await armarCarro(screen, p, [[w, 1]]);
    const r = await subirAlMaximo(screen, w, 20);
    await carro.capturarEvidencia(cp, 4, 'carro al llegar al stock del pesable');
    await expect(item(screen, w).getByText(/^m[áa]x$/i), 'el + se reemplaza por «Máx»').toBeVisible();
    expect(r.toast, 'se muestra el toast «Alcanzaste el máximo de productos»').toBe(true);
    expect(r.q, 'la cantidad queda en el stock disponible').toBeGreaterThan(1);
    await carro.capturarEvidencia(cp);
  });
  test(`TC-B2C38-APP-016 · Al quedar bajo el mínimo de compra se deshabilita Continuar con la entrega [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C38-APP-016';
    const v = token(testData, 'SKU_VALID_001')!;
    const minimo = Number(token(testData, 'MONTO_MINIMO_COMPRA')!);
    const unidades = Number(token(testData, 'UNIDADES_SOBRE_MINIMO')!);
    const correo = token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
    await paso('iniciar sesión', async () => { await asegurarApp(screen); await sesion(screen, p, cp, correo, /Karl|Comprador/i); });
    await paso('vaciar el carro', () => reabrirYVaciar(screen, device, bundleId!, p));
    const carro = await armarCarro(screen, p, [[v, unidades]]);
    expect(await subtotal(screen), 'precondición: subtotal mayor o igual al mínimo de compra').toBeGreaterThanOrEqual(minimo);
    await carro.capturarEvidencia(cp, 2, `carro con ${unidades} unidades sobre el mínimo`);
    for (let i = 0; i < unidades && (await subtotal(screen)) >= minimo; i++) {
      const q = await cantidad(screen, v);
      await tocar(screen, menos(screen, v));
      await esperarCantidad(screen, v, (q ?? 1) - 1);
    }
    await carro.capturarEvidencia(cp, 4, 'carro bajo el mínimo de compra');
    expect(await subtotal(screen), 'el subtotal queda bajo el mínimo').toBeLessThan(minimo);
    await esperarCarroQuieto(screen);
    let cta = '';
    for (let i = 0; i < 20 && !/m[ií]nimo de compra/i.test(cta); i++) { cta = (await textos(screen)).find((x) => /m[ií]nimo de compra/i.test(x.t))?.t ?? ''; if (!/m[ií]nimo de compra/i.test(cta)) await pausa(2000); }
    expect(cta, '«Continuar con la entrega» se deshabilita y muestra el mínimo de compra').toMatch(/m[ií]nimo de compra/i);
    await carro.capturarEvidencia(cp);
  });
  /** Cambia a retiro en la tienda `nombre` (la tienda donde el SKU no tiene stock). */
  async function cambiarATienda(screen: Screen, p: Plataforma, nombre: string): Promise<void> {
    await tol(() => new NavBar(screen, p).tapMetodoDeEntrega());
    const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await tol(() => modal.pestanaRetiro.tap());
    const campo = screen.getByPlaceholder('comuna o nombre', { exact: false });
    await tol(() => campo.tap());
    await tol(() => campo.fill(nombre.replace(/^Unimarc\s+/i, '')));
    const fila = screen.getByText(new RegExp(`^${nombre.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\. `, 'i')).first();
    await tol(() => fila.waitFor({ state: 'visible', timeout: 30000 }));
    await tol(() => fila.tap());
    await tol(() => screen.getByRole('button', { name: 'Confirmar tienda' }).tap());
    await pausa(4000);
    if ((await textos(screen)).some((x) => /Algunos productos podr[ií]an agotarse/.test(x.t))) {
      await tol(() => screen.getByRole('button', { name: 'Sí, continuar' }).tap());
      await pausa(5000);
    }
    if ((await textos(screen)).some((x) => /Autenticaci[oó]n requerida/.test(x.t))) throw new Error('cambiar de tienda pidió un OTP');
  }

  /** Deja a la cuenta con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} en el carro y la tienda activa sin stock del segundo. */
  async function carroConNoDisponible(screen: Screen, device: any, bundleId: string, p: Plataforma, testData: any, cp: string): Promise<CarroScreen> {
    const v = token(testData, 'SKU_VALID_001')!, nd = token(testData, 'SKU_NO_DISPONIBLE')!;
    const correo = token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
    await paso('iniciar sesión', async () => { await asegurarApp(screen); await sesion(screen, p, cp, correo, /Karl|Comprador/i); });
    await paso('vaciar el carro', () => reabrirYVaciar(screen, device, bundleId, p));
    await paso('agregar los productos', async () => { await agregarDesdePdp(screen, p, v); await agregarDesdePdp(screen, p, nd); });
    await paso('cambiar a la tienda sin stock', () => cambiarATienda(screen, p, token(testData, 'TIENDA_SIN_STOCK')!));
    const carro = await paso('abrir el carro', () => abrirCarro(screen, p));
    await paso('esperar a que cargue el carro', () => esperarCarroCargado(screen));
    return carro;
  }

  test.skip(`TC-B2C38-APP-011 · El ícono de eliminar quita un ítem no disponible sin confirmación [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C38-APP-011';
    const v = token(testData, 'SKU_VALID_001')!;
    const carro = await carroConNoDisponible(screen, device, bundleId!, p, testData, cp);
    await expect(screen.getByText(/^faltantes: /i).first(), 'precondición: el ítem aparece como no disponible').toBeVisible();
    await carro.capturarEvidencia(cp, 3, 'carro con un ítem no disponible');
    await tol(() => screen.getByText(/^eliminar$/i).first().tap());
    await pausa(3000);
    await esperarCarroQuieto(screen);
    await carro.capturarEvidencia(cp, 5, 'carro tras eliminar el ítem no disponible');
    expect((await textos(screen)).some((x) => /^faltantes: /i.test(x.t)), 'el ítem no disponible se elimina sin confirmación').toBe(false);
    expect(await cantidad(screen, v), '{SKU_VALID_001} se mantiene').toBe(1);
    await carro.capturarEvidencia(cp);
  });

  test.skip(`TC-B2C38-APP-012 · El swipe to delete quita un ítem no disponible sin confirmación [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C38-APP-012';
    const v = token(testData, 'SKU_VALID_001')!, nd = token(testData, 'SKU_NO_DISPONIBLE')!;
    const carro = await carroConNoDisponible(screen, device, bundleId!, p, testData, cp);
    await expect(screen.getByText(/^faltantes: /i).first(), 'precondición: el ítem aparece como no disponible').toBeVisible();
    await carro.capturarEvidencia(cp, 3, 'carro con un ítem no disponible');
    await tol(() => item(screen, nd).swipe({ direction: 'left' }));
    await pausa(1500);
    await carro.capturarEvidencia(cp, 4, 'ítem deslizado');
    let tocado = false;
    for (const e of await screen.getByText(/^eliminar$/i).all()) {
      const c = await e.boundingBox();
      if (c.width > 150) { await tol(() => e.tap()); tocado = true; break; }
    }
    expect(tocado, 'el swipe revela el botón rojo «Eliminar»').toBe(true);
    await pausa(3000);
    await esperarCarroQuieto(screen);
    await carro.capturarEvidencia(cp, 6, 'carro tras el swipe');
    expect((await textos(screen)).some((x) => /^faltantes: /i.test(x.t)), 'el ítem no disponible se elimina sin confirmación').toBe(false);
    expect(await cantidad(screen, v), '{SKU_VALID_001} se mantiene').toBe(1);
    await carro.capturarEvidencia(cp);
  });
});
