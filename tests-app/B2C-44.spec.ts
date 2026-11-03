import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { fijarDireccionInvitado, agregarDesdePdp, abrirCarro } from './support/invitadoConCarro';
import { tolerante } from './support/tolerante';

/**
 * B2C-44 — Shelf del ítem y tarjeta de subtotales en el carro de la app.
 *
 * Solo Android, build v1.0.7, emulador local. Aunque las filas dicen «Ubicación: Home de la App»,
 * todos los casos pasan por la pantalla «Mi carro»: cada uno arma su carro de invitado (con
 * {DIRECCION_DESPACHO_001} fijada, porque un invitado sin dirección no puede agregar), lo abre y
 * revisa el ítem (`cart-item-<sku>`) o la tarjeta de subtotales.
 *
 * Sin `test()`: APP-010 ({SKU_NXM_Y_UNIPAY} sin valor en el Excel de data).
 */
const BD = (m: string) => new Error(`PRECONDICION_NO_DISPONIBLE: ${m}`);
const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));

interface Nodo { type: string; id: string; label: string; x: number; y: number; w: number; h: number }

async function nodos(screen: any): Promise<Nodo[]> {
  const out: Nodo[] = [];
  const rec = (n: any) => {
    const id = n.identifier ?? n.resourceId ?? '';
    const nombre = n.label || n.text;
    if (!id.startsWith('com.android.systemui') && (nombre || id)) {
      out.push({ type: String(n.type ?? '').split('.').pop()!, id, label: nombre ?? '', x: n.bounds?.x ?? 0, y: n.bounds?.y ?? 0, w: n.bounds?.width ?? 0, h: n.bounds?.height ?? 0 });
    }
    for (const c of n.children ?? []) rec(c);
  };
  for (const n of (await tolerante(() => screen.viewTree(), 30)) as any[]) rec(n);
  return out;
}

/**
 * Carro de invitado con `items` ([sku, cantidad]) abierto en «Mi carro»: dirección fijada, cada SKU
 * agregado desde su PDP y las unidades extra con «Agregar una unidad» desde el propio carro.
 */
async function armarCarro(screen: any, device: any, bundleId: string, p: any, testData: any, cp: string, items: [string, number][]) {
  await fijarDireccionInvitado(screen, device, bundleId, p, testData);
  for (const [k] of items) await agregarDesdePdp(screen, p, token(testData, k)!);
  const carro = await abrirCarro(screen, p);
  // Los ítems llegan después del encabezado: se espera a que aparezcan.
  for (let i = 0; i < 40; i++) {
    if ((await nodos(screen)).some((x) => x.id.startsWith('cart-item-'))) break;
    await screen.swipe('up'); await dormir(1500);
  }
  for (const [k, q] of items) {
    for (let u = 1; u < q; u++) {
      const sku = token(testData, k)!;
      // El botón «Agregar una unidad de <nombre>» del ítem: se espera a que el ítem termine de dibujarse.
      let boton: Nodo | undefined;
      for (let i = 0; i < 12 && !boton; i++) {
        const n = await nodos(screen);
        const fila = n.find((x) => x.id === `cart-item-${sku}`);
        boton = fila ? n.find((x) => x.type === 'Button' && /^Agregar una unidad de/.test(x.label) && x.y > fila.y - 5 && x.y < fila.y + 260) : undefined;
        if (!boton) { await screen.swipe('up'); await dormir(1500); }
      }
      if (!boton) throw new Error(`el carro no muestra el botón «Agregar una unidad» de ${sku}`);
      await tolerante(() => screen.getByRole('button', { name: boton!.label }).tap(), 30);
      // El carro se vuelve a pedir al servidor: se espera a que muestre la cantidad nueva antes de seguir.
      let listo = false;
      for (let i = 0; i < 40 && !listo; i++) {
        await dormir(3000);
        listo = (await nodos(screen)).some((x) => x.id === `cart-quantity-${sku}` && x.label === `${u + 1} un.`);
      }
      if (!listo) throw new Error(`el carro no actualizó la cantidad de ${sku} a ${u + 1} un. en 2 minutos`);
    }
  }
  for (let i = 0; i < 20; i++) { if ((await nodos(screen)).some((x) => x.id.startsWith('cart-item-'))) break; await dormir(3000); }
  await dormir(2000);
  await carro.capturarEvidencia(cp, 3, 'Mi carro con los productos');
  return carro;
}

/** Los nodos del ítem: desde su contenedor hasta el siguiente ítem o la tarjeta de subtotales. */
function deItem(n: Nodo[], sku: string): Nodo[] {
  const items = n.filter((x) => x.id.startsWith('cart-item-')).sort((a, b) => a.y - b.y);
  const mio = items.find((x) => x.id === `cart-item-${sku}`);
  if (!mio) return [];
  const sig = items.find((x) => x.y > mio.y);
  const tope = sig?.y ?? mio.y + 330;
  return n.filter((x) => x.y >= mio.y && x.y < tope);
}
const sku = (testData: any, k: string) => token(testData, k)!;
const subtotales = (n: Nodo[]) => n.filter((x) => /^Subtotal/.test(x.label)).map((x) => x.label);

test.describe('B2C-44 — Shelf del ítem y subtotales del carro (Android)', () => {
  test.describe.configure({ timeout: 900000 });

  test('TC-B2C44-APP-001 · El shelf de un ítem sin promoción muestra todos sus elementos [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C44-APP-001';
    const carro = await armarCarro(screen, device, bundleId!, p, testData, cp, [['SKU_VALID_001', 2]]);
    const it = deItem(await nodos(screen), sku(testData, 'SKU_VALID_001'));
    test.info().annotations.push({ type: 'ítem', description: it.map((x) => x.label).filter(Boolean).join(' | ') });
    expect.soft(it.some((x) => x.type === 'TextView' && x.label.includes(' | ')), '«Marca | Nombre»').toBe(true);
    expect.soft(it.some((x) => /^\$[\d.]+ c\/u$/.test(x.label)), 'precio unitario «$X.XXX c/u»').toBe(true);
    expect.soft(it.some((x) => /^2 un\.$/.test(x.label) && x.x > 600), 'cantidad «2 un.» alineada a la derecha').toBe(true);
    expect.soft(it.some((x) => x.type === 'Button' && /^(Eliminar|Disminuir|Quitar|Restar)/.test(x.label)) && it.some((x) => x.type === 'Button' && /^Agregar una unidad/.test(x.label)), 'controles de cantidad (− y +)').toBe(true);
    expect.soft(it.some((x) => /Agregar instrucciones/i.test(x.label)), 'ícono lápiz + link «Agregar instrucciones»').toBe(true);
    await carro.capturarEvidencia(cp);
  });

  test('TC-B2C44-APP-002 · Un nombre de producto largo se trunca con puntos suspensivos [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C44-APP-002';
    const carro = await armarCarro(screen, device, bundleId!, p, testData, cp, [['SKU_NOMBRE_LARGO', 1]]);
    const it = deItem(await nodos(screen), sku(testData, 'SKU_NOMBRE_LARGO'));
    const nombre = it.find((x) => x.type === 'TextView' && x.label.includes(' | '));
    test.info().annotations.push({ type: 'nombre', description: `${nombre?.label} (${nombre?.label.length} caracteres)` });
    expect(nombre, 'se muestra «Marca | Nombre»').toBeTruthy();
    expect(nombre!.label.length, 'el nombre es largo').toBeGreaterThan(45);
    expect(nombre!.x + nombre!.w, 'el nombre no desborda el shelf').toBeLessThanOrEqual(1080);
    await carro.capturarEvidencia(cp);
  });

  test('TC-B2C44-APP-003 · Un pesable muestra la cantidad en kg en el shelf [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C44-APP-003';
    const carro = await armarCarro(screen, device, bundleId!, p, testData, cp, [['SKU_PESABLE', 1]]);
    const it = deItem(await nodos(screen), sku(testData, 'SKU_PESABLE'));
    const cantidad = it.find((x) => x.id.startsWith('cart-quantity-'));
    test.info().annotations.push({ type: 'cantidad', description: cantidad?.label ?? '(sin cantidad)' });
    expect(cantidad?.label, 'la cantidad se muestra como «1 kg.» alineada a la derecha').toMatch(/^1 kg\.?$/);
    expect(cantidad!.x, 'alineada a la derecha').toBeGreaterThan(600);
    await carro.capturarEvidencia(cp);
  });

  test('TC-B2C44-APP-004 · Un invitado ve "Agregar instrucciones" y al tocarlo se abre el modal [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C44-APP-004';
    const carro = await armarCarro(screen, device, bundleId!, p, testData, cp, [['SKU_VALID_001', 1]]);
    const n = await nodos(screen);
    const link = n.find((x) => /Agregar instrucciones/i.test(x.label));
    test.info().annotations.push({ type: 'ítem', description: deItem(n, sku(testData, 'SKU_VALID_001')).map((x) => x.label).filter(Boolean).join(' | ') });
    expect(link, 'ícono lápiz + link gris «Agregar instrucciones»').toBeTruthy();
    await tolerante(() => screen.getByText(/Agregar instrucciones/i).tap(), 30);
    await dormir(2500);
    await carro.capturarEvidencia(cp, 5, 'tras tocar «Agregar instrucciones»');
    expect((await nodos(screen)).some((x) => /¿Te gustaría algo en especial\?/.test(x.label)), 'se abre el modal «¿Te gustaría algo en especial?»').toBe(true);
    await carro.capturarEvidencia(cp);
  });

  for (const [n, k, titulo, pide] of [
    ['005', 'SKU_PROM_PCT_DESCUENTO', 'Un ítem con porcentaje de descuento muestra badge, precio final y precio anterior', 'pct'],
    ['006', 'SKU_PROM_PRECIO_FIJO', 'Un ítem con promoción de precio fijo muestra precio final y precio anterior', 'pct'],
    ['007', 'SKU_PROM_NxM', 'Un ítem con NxM incompleto muestra precio sin badge y el mensaje rojo «Te faltan N para la promo»', 'nxm'],
  ] as const) {
    test(`TC-B2C44-APP-${n} · ${titulo} [Guest] (Android)`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
      const cp = `TC-B2C44-APP-${n}`;
      const carro = await armarCarro(screen, device, bundleId!, p, testData, cp, [[k, 1]]);
      const it = deItem(await nodos(screen), sku(testData, k));
      test.info().annotations.push({ type: 'ítem', description: it.map((x) => x.label).filter(Boolean).join(' | ') });
      if (pide === 'pct') {
        expect.soft(it.some((x) => /^\d+%$/.test(x.label)), 'badge amarillo «X%»').toBe(true);
        expect.soft(it.some((x) => /^\$[\d.]+( c\/u)?$/.test(x.label)), 'precio final').toBe(true);
        expect.soft(it.some((x) => /^Antes:/.test(x.label)), '«Antes:» con el precio original tachado').toBe(true);
        expect.soft(it.some((x) => /^\(\$[\d.]+ x [^)]+\)$/.test(x.label)), 'PPUM').toBe(true);
      } else {
        expect.soft(it.some((x) => /^\d+%$/.test(x.label)), 'sin badge').toBe(false);
        expect.soft(it.some((x) => /^Antes:/.test(x.label)), 'sin precio tachado').toBe(false);
        expect.soft(it.some((x) => /Te faltan? \d+ para la promo/i.test(x.label)), 'mensaje rojo «Te faltan N para la promo»').toBe(true);
      }
      await carro.capturarEvidencia(cp);
    });
  }

  test('TC-B2C44-APP-011 · Un producto por peso muestra el PPUM entre paréntesis [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C44-APP-011';
    const carro = await armarCarro(screen, device, bundleId!, p, testData, cp, [['SKU_PESABLE', 1]]);
    const it = deItem(await nodos(screen), sku(testData, 'SKU_PESABLE'));
    test.info().annotations.push({ type: 'ítem', description: it.map((x) => x.label).filter(Boolean).join(' | ') });
    expect(it.some((x) => /^\(\$[\d.]+ x [^)]+\)$/.test(x.label)), 'PPUM entre paréntesis, por ejemplo «($2.990 x Kg)»').toBe(true);
    await carro.capturarEvidencia(cp);
  });

  // --- Casos que dependen de un precio Unipay vigente: se comprueba en vivo si el SKU lo muestra ---
  for (const [n, k, titulo] of [
    ['008', 'SKU_UNIPAY_001', 'Un ítem con precio Unipay muestra el precio regular y el tag Unipay'],
    ['009', 'SKU_PCT_Y_UNIPAY', 'Un ítem con descuento y promoción de medio de pago muestra ambas en orden'],
    ['012', 'SKU_PESABLE_PCT_Y_UNIPAY', 'Con descuento y medio de pago el PPUM se muestra en ambos precios'],
  ] as const) {
    test(`TC-B2C44-APP-${n} · ${titulo} [Guest] (Android)`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
      const cp = `TC-B2C44-APP-${n}`;
      const carro = await armarCarro(screen, device, bundleId!, p, testData, cp, [[k, 1]]);
      const it = deItem(await nodos(screen), sku(testData, k));
      test.info().annotations.push({ type: 'ítem', description: it.map((x) => x.label).filter(Boolean).join(' | ') });
      await carro.capturarEvidencia(cp);
      const precios = it.filter((x) => /^\$[\d.]+( c\/u)?$/.test(x.label));
      if (precios.length < 2) throw BD(`{${k}} muestra un solo precio (${precios.map((x) => x.label).join(', ')}): no tiene promo de medio de pago vigente`);
      if (n === '012') expect(it.filter((x) => /^\(\$[\d.]+ x [^)]+\)$/.test(x.label)).length, 'PPUM en ambos precios').toBeGreaterThanOrEqual(2);
    });
  }

  for (const [n, titulo] of [['013', 'La tarjeta de subtotales muestra Subtotal y Subtotal con Unipay con su ícono'], ['014', 'El monto Subtotal con Unipay descuenta solo el ahorro de los ítems Unipay'], ['015', 'Los subtotales se recalculan al aumentar la cantidad de un ítem Unipay']] as const) {
    test(`TC-B2C44-APP-${n} · ${titulo} [Guest] (Android)`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
      const cp = `TC-B2C44-APP-${n}`;
      const carro = await armarCarro(screen, device, bundleId!, p, testData, cp, [['SKU_UNIPAY_001', n === '014' ? 2 : 1], ['SKU_VALID_001', 1]]);
      const lineas = subtotales(await nodos(screen));
      test.info().annotations.push({ type: 'líneas de subtotal', description: lineas.join(' | ') });
      await carro.capturarEvidencia(cp);
      if (!lineas.some((l) => /Subtotal con Unipay/i.test(l))) throw BD('la tarjeta de subtotales solo muestra «Subtotal»: {SKU_UNIPAY_001} no tiene una promo Unipay vigente, así que no aparece «Subtotal con Unipay»');
    });
  }

  test('TC-B2C44-APP-016 · Sin ítems con descuento Unipay no se muestra Subtotal con Unipay [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C44-APP-016';
    const carro = await armarCarro(screen, device, bundleId!, p, testData, cp, [['SKU_VALID_001', 2]]);
    const n = await nodos(screen);
    test.info().annotations.push({ type: 'líneas de subtotal', description: subtotales(n).join(' | ') });
    expect(n.some((x) => x.label === 'Subtotal'), 'se muestra «Subtotal» con su monto').toBe(true);
    expect(n.some((x) => /Subtotal con Unipay/i.test(x.label)), 'no se muestra «Subtotal con Unipay»').toBe(false);
    await carro.capturarEvidencia(cp);
  });

  test('TC-B2C44-APP-017 · Al eliminar el único ítem Unipay desaparece Subtotal con Unipay [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C44-APP-017';
    const carro = await armarCarro(screen, device, bundleId!, p, testData, cp, [['SKU_UNIPAY_001', 1], ['SKU_VALID_001', 1]]);
    const lineas = subtotales(await nodos(screen));
    test.info().annotations.push({ type: 'líneas de subtotal', description: lineas.join(' | ') });
    await carro.capturarEvidencia(cp);
    if (!lineas.some((l) => /Subtotal con Unipay/i.test(l))) throw BD('con {SKU_UNIPAY_001} en el carro la tarjeta solo muestra «Subtotal»: sin promo Unipay vigente no hay «Subtotal con Unipay» que verificar que desaparezca');
  });
});
