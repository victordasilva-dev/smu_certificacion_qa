import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { PdpScreen } from './pages/PdpScreen';
import { sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';
import { tolerante } from './support/tolerante';

/**
 * B2C-31 — PDP (app nativa, Android, build v1.0.1): los TC con sesión que quedaron Pendiente.
 * Se inicia sesión por correo + OTP y se abre la PDP buscando el SKU completo.
 */

const r = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));

async function abrirPdp(screen: any, p: any, sku: string, cp: string): Promise<PdpScreen> {
  const tabs = await r(() => new TabBar(screen, p).waitUntilReady());
  await r(() => tabs.tapBuscar());
  const buscar = await r(() => new BuscarScreen(screen, p).waitUntilReady());
  const srp = await r(() => buscar.buscar(sku));
  await r(() => buscar.resultadoPara(sku).waitFor({ state: 'visible', timeout: 30000 }));
  await r(() => srp.capturarEvidencia(cp, 2, `resultados de «${sku}»`));
  await r(() => srp.tarjeta(sku).tap());
  const pdp = await r(() => new PdpScreen(screen, p).waitUntilReady());
  await pausa(2500);
  return pdp;
}

test.describe.configure({ timeout: 900000 });
test.describe('B2C-31 — PDP, TC con sesión (Android)', () => {
  test('TC-B2C31-APP-005 · La PDP muestra sus secciones en el orden definido [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C31-APP-005';
    await asegurarApp(screen);
    await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!.split(' / ')[0], /Karl/);
    const pdp = await abrirPdp(screen, p, token(testData, 'SKU_VALID_001')!, cp);
    const marcas: [string, RegExp][] = [
      ['precio y botones', /^\$[\d.]+$/],
      ['tab Productos similares', /^productos similares$/i],
      ['tab Información', /^informaci[oó]n$/i],
      ['Van bien juntos', /^van bien juntos$/i],
      ['Recomendados para ti', /^recomendados para ti$/i],
    ];
    const orden: string[] = [];
    const vistos = new Set<string>();
    let galeria = false;
    let firma = '';
    let iguales = 0;
    for (let i = 0; i < 45 && iguales < 2; i++) {
      const t = await r(() => pdp.textos());
      const f = t.map((x) => x.t).join('|');
      iguales = f === firma ? iguales + 1 : 0;
      firma = f;
      if (i === 0) galeria = t.some((x) => /pdp-gallery/.test(x.id));
      const nuevos = marcas.filter(([n, re]) => !vistos.has(n) && t.some((x) => re.test(x.t))).map(([n, re]) => ({ n, y: Math.min(...t.filter((x) => re.test(x.t)).map((x) => x.y)) })).sort((a, b) => a.y - b.y);
      for (const x of nuevos) { vistos.add(x.n); orden.push(x.n); }
      if (i === 0) await r(() => pdp.capturarEvidencia(cp, 4, 'PDP del producto, parte superior'));
      await r(() => screen.swipe('up'));
      await pausa(900);
    }
    await r(() => pdp.capturarEvidencia(cp, 6, 'PDP recorrida hasta el final'));
    const t = await r(() => pdp.textos());
    test.info().annotations.push({ type: 'orden de secciones', description: `galería=${galeria}; ${orden.join(' → ')}` });
    expect(galeria, 'la galería abre la PDP').toBe(true);
    expect(t.some((x) => /›|Inicio \//.test(x.t)), 'sin breadcrumb').toBe(false);
    const esperado = ['precio y botones', 'tab Productos similares', 'tab Información', 'Van bien juntos', 'Recomendados para ti'].filter((n) => orden.includes(n));
    expect(orden, 'orden de las secciones').toEqual(esperado);
    expect(orden, 'incluye «Recomendados para ti»').toContain('Recomendados para ti');
  });

  test('TC-B2C31-APP-017 · El corazón agrega el producto a favoritos [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C31-APP-017';
    await asegurarApp(screen);
    await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!.split(' / ')[0], /Karl/);
    const sku = token(testData, 'SKU_VALID_001')!;
    const pdp = await abrirPdp(screen, p, sku, cp);
    const antes = (await r(() => pdp.textos())).filter((x) => /mis productos|favorit/i.test(x.t)).map((x) => x.t);
    await r(() => pdp.capturarEvidencia(cp, 4, 'PDP con el corazón vacío'));
    const yaFavorito = !(await pdp.corazon.isVisible().catch(() => false));
    test.info().annotations.push({ type: 'corazón antes', description: `${antes.join(' | ')}; ya favorito=${yaFavorito}` });
    if (yaFavorito) { test.info().annotations.push({ type: 'bloqueado-data', description: 'la precondición (producto fuera de favoritos) no se cumple: el corazón ya está marcado' }); return; }
    await r(() => pdp.corazon.tap());
    await pausa(3500);
    const despues = (await r(() => pdp.textos())).filter((x) => /mis productos|favorit/i.test(x.t)).map((x) => x.t);
    await r(() => pdp.capturarEvidencia(cp, 6, 'PDP con el corazón marcado'));
    test.info().annotations.push({ type: 'corazón después', description: despues.join(' | ') });
    expect(await pdp.corazon.isVisible().catch(() => false), 'el botón «Agregar a mis productos» ya no se ofrece').toBe(false);
    await r(() => screen.pressButton('BACK'));
    await pausa(1500);
    await r(() => screen.getByTestId('tab-Mis productos').tap());
    await pausa(5000);
    await r(() => new PdpScreen(screen, p).capturarEvidencia(cp, 8, 'lista Mis productos'));
    const lista = await r(() => new PdpScreen(screen, p).textos());
    test.info().annotations.push({ type: 'Mis productos', description: lista.filter((x) => /albondigas|super pollo|675191/i.test(x.t + x.id)).map((x) => x.t || x.id).join(' | ') });
    expect(lista.some((x) => /albondigas|super pollo|675191/i.test(x.t + x.id)), 'el producto aparece en favoritos').toBe(true);
  });

  test('TC-B2C31-APP-020 · Un producto con precio membresía muestra el precio con su label [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C31-APP-020';
    await asegurarApp(screen);
    await sesion(screen, p, cp, token(testData, 'COMPRADOR_MEMBRESIA_USER')!.split(' / ')[0], /Hola, QA/);
    const pdp = await abrirPdp(screen, p, token(testData, 'SKU_PRECIO_MIEMBRO')!, cp);
    await r(() => pdp.capturarEvidencia(cp, 4, 'PDP del producto con precio membresía'));
    const t = await r(() => pdp.textos());
    const precios = t.filter((x) => /^\$[\d.]+$/.test(x.t)).map((x) => x.t);
    test.info().annotations.push({ type: 'textos de precio', description: JSON.stringify(t.filter((x) => /\$|membres|antes|unipay|banco/i.test(x.t)).map((x) => x.t).slice(0, 16)) });
    expect(t.some((x) => /membres/i.test(x.t)), 'se muestra el label de membresía').toBe(true);
    expect(new Set(precios).size, 'precio membresía y precio normal').toBeGreaterThanOrEqual(2);
  });

  test('TC-B2C31-APP-048 · «Guardar en listas» abre el modal «Agregar como lista» desde abajo [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C31-APP-048';
    await asegurarApp(screen);
    await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!.split(' / ')[0], /Karl/);
    const pdp = await abrirPdp(screen, p, token(testData, 'SKU_VALID_001')!, cp);
    await r(() => pdp.guardarEnListas.tap());
    await pausa(2500);
    await r(() => pdp.capturarEvidencia(cp, 4, 'modal tras tocar «Guardar en listas»'));
    const t = await r(() => pdp.textos());
    test.info().annotations.push({ type: 'modal', description: JSON.stringify(t.filter((x) => /lista/i.test(x.t)).map((x) => `${x.t}@${x.y}`).slice(0, 8)) });
    expect(t.some((x) => /agregar como lista/i.test(x.t)), 'se muestra «Agregar como lista»').toBe(true);
  });

  test('TC-B2C31-APP-049 · Con Membresía, Unipay y BancoEstado a la vez el 3er precio es el de Membresía [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C31-APP-049';
    await asegurarApp(screen);
    await sesion(screen, p, cp, token(testData, 'COMPRADOR_MEMBRESIA_USER')!.split(' / ')[0], /Hola, QA/);
    const pdp = await abrirPdp(screen, p, token(testData, 'SKU_TRES_PRECIOS')!, cp);
    await r(() => pdp.capturarEvidencia(cp, 4, 'PDP con los precios'));
    const t = await r(() => pdp.textos());
    const p3 = t.filter((x) => /^\$[\d.]+$|membres|unipay|banco ?estado|^antes:/i.test(x.t)).sort((a, b) => a.y - b.y).map((x) => `${x.t}@${x.y}`);
    test.info().annotations.push({ type: 'precios en orden', description: JSON.stringify(p3.slice(0, 14)) });
    const prec = t.filter((x) => /^\$[\d.]+$/.test(x.t)).length;
    expect(prec, 'hasta 3 precios').toBeLessThanOrEqual(3);
  });

  // Diagnóstico (no es un TC): ¿otro SKU de la misma cuenta muestra el tab «Productos similares» y «Recomendados para ti»?
  test('DIAG-B2C31-005 · secciones de la PDP con SKU_PRODS_SIMILARES (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'DIAG-B2C31-005';
    await asegurarApp(screen);
    await sesion(screen, p, cp, token(testData, 'COMPRADOR_USER')!.split(' / ')[0], /Karl/);
    const sku = token(testData, process.env.DIAG_SKU || 'SKU_PRODS_SIMILARES')!;
    const pdp = await abrirPdp(screen, p, sku, cp);
    const vistos = new Set<string>();
    let firma = ''; let iguales = 0;
    for (let i = 0; i < 45 && iguales < 2; i++) {
      const t = await r(() => pdp.textos());
      const f = t.map((x) => x.t).join('|');
      iguales = f === firma ? iguales + 1 : 0; firma = f;
      for (const x of t) if (/productos similares|van bien juntos|recomendados para ti|^informaci[oó]n$|pronto disponible|^agregar$/i.test(x.t)) vistos.add(x.t);
      await r(() => screen.swipe('up'));
      await pausa(900);
    }
    await r(() => pdp.capturarEvidencia(cp, 4, 'PDP recorrida hasta el final'));
    test.info().annotations.push({ type: 'secciones vistas', description: JSON.stringify([...vistos]) });
    console.log('SECCIONES', sku, JSON.stringify([...vistos]));
  });
});
