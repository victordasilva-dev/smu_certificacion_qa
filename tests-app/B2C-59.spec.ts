import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { HomeScreen } from './pages/HomeScreen';
import { MiCuentaScreen } from './pages/MiCuentaScreen';
import type { ListadoScreen } from './pages/ListadoScreen';
import sharp from 'sharp';
import { diferenciaMedia, proporcionClara } from './support/pixeles';
import { tolerante } from './support/tolerante';
import { borrarDatosApp } from './support/adbAndroid';

/**
 * B2C-59 — Shelf de producto en la app (resultados de búsqueda).
 *
 * Solo Android, build v1.0.7, emulador local. Cada caso busca su SKU con "Buscar" del teclado y lee
 * la tarjeta del resultado: las cucardas, el nombre, el formato y los botones se publican como nodos
 * con su posición, de modo que cada esperado se comprueba contra el árbol y contra la captura.
 *
 * Los tokens SKU_SHELF_COMPLETO, SKU_COMBINA_PROMO y SKU_PROM_NxPRECIO son el mismo SKU
 * (000000000000666200-UN), y SKU_CUCARDA y SKU_MULTI_IMAGEN también (000000000000028616-KGV).
 */
const BD = (m: string) => new Error(`PRECONDICION_NO_DISPONIBLE: ${m}`);
const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));

interface Nodo { type: string; id: string; label: string; x: number; y: number; w: number; h: number }

/** Todos los nodos con nombre (botones: `label`; TextView: `text`) fuera de la barra de estado. */
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
  for (const n of (await tolerante(() => screen.viewTree())) as any[]) rec(n);
  return out;
}

/** Los nodos del shelf del único resultado: todo lo que está entre el encabezado y la TabBar. */
const delShelf = (n: Nodo[]) => n.filter((x) => x.y >= 600 && x.y < 1700);
/** El nombre del producto: el TextView bajo los precios (y≈1190); con marca va como «Marca | Descripción». */
const nombreDe = (n: Nodo[]) => delShelf(n).find((x) => x.type === 'TextView' && x.y >= 1150 && x.y <= 1260 && x.label.length > 8);

async function abrirShelf(screen: any, p: any, cp: string, sku: string): Promise<{ srp: ListadoScreen; nodos: Nodo[] }> {
  const tabs = await tolerante(() => new TabBar(screen, p).waitUntilReady());
  await tabs.capturarEvidencia(cp, 1, 'app abierta en el Home');
  await tolerante(() => tabs.tapBuscar());
  const buscar = await tolerante(() => new BuscarScreen(screen, p).waitUntilReady());
  const srp = await tolerante(() => buscar.buscar(sku));
  await tolerante(() => expect(buscar.resultadoPara(sku)).toBeVisible({ timeout: 20000 }));
  await tolerante(() => expect(srp.tarjeta(sku), `shelf de ${sku}`).toBeVisible());
  await dormir(2500);
  await srp.capturarEvidencia(cp, 3, 'resultados con el shelf del producto');
  const n = await nodos(screen);
  test.info().annotations.push({ type: `shelf ${sku}`, description: delShelf(n).map((x) => x.label).filter(Boolean).join(' | ') });
  return { srp, nodos: n };
}

const sku = (testData: any, k: string) => token(testData, k)!;
const tiene = (n: Nodo[], re: RegExp) => delShelf(n).some((x) => re.test(x.label));
const nodo = (n: Nodo[], re: RegExp) => delShelf(n).find((x) => re.test(x.label));
/** Cucarda: texto en la esquina superior izquierda de la imagen (la zona del nombre de promo, y≈640, x<250). */
const cucardas = (n: Nodo[]) => delShelf(n).filter((x) => x.type === 'TextView' && x.y >= 620 && x.y <= 700 && x.x < 250 && x.label);

test.describe('B2C-59 — Shelf de producto (Android)', () => {
  test('TC-B2C59-APP-001 · El shelf muestra sus slots en el orden definido [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C59-APP-001';
    const { srp, nodos: n } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_SHELF_COMPLETO'));
    await srp.capturarEvidencia(cp);
    const cuc = cucardas(n)[0];
    const fav = nodo(n, /^Agregar a mis productos$/);
    const precio = delShelf(n).find((x) => x.type === 'TextView' && /^\d+ por \$|^\d+%$|^\$[\d.]+$/.test(x.label));
    const nombre = nombreDe(n);
    const formato = nodo(n, /^\d+([.,]\d+)? ?(g|kg|ml|l)$/i);
    const combina = delShelf(n).find((x) => x.type === 'Button' && x.label === 'Combina la promo');
    const agregar = delShelf(n).find((x) => x.type === 'Button' && x.id.startsWith('product-add-'));
    expect(cuc, 'cucarda arriba a la izquierda').toBeTruthy();
    expect(fav, 'botón Favoritos arriba a la derecha').toBeTruthy();
    expect(fav!.x, 'Favoritos a la derecha de la cucarda').toBeGreaterThan(cuc!.x);
    expect(precio!.y, 'precios debajo de la imagen').toBeGreaterThan(cuc!.y);
    expect(nombre!.y, 'marca + nombre debajo de los precios').toBeGreaterThan(precio!.y);
    expect(formato!.y, 'label de formato debajo del nombre').toBeGreaterThan(nombre!.y);
    expect(combina!.y, '«Combina la promo» debajo del formato').toBeGreaterThan(formato!.y);
    expect(agregar!.y, '«Agregar» al final').toBeGreaterThan(combina!.y);
    if (!tiene(n, /^Patrocinado$/)) throw BD('{SKU_SHELF_COMPLETO} no muestra «Patrocinado»: el SKU no tiene isSponsored = true en este ambiente; el resto de los slots está en el orden definido');
  });

  test('TC-B2C59-APP-002 · Un producto con label muestra una sola cucarda arriba a la izquierda [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C59-APP-002';
    const { srp, nodos: n } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_CUCARDA'));
    expect(cucardas(n).length, `una única cucarda (${cucardas(n).map((x) => x.label).join(', ')})`).toBe(1);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C59-APP-003 · Un producto sin label no muestra cucarda [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C59-APP-003';
    const { srp, nodos: n } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_VALID_001'));
    expect(cucardas(n).length, 'ninguna cucarda en la esquina superior izquierda').toBe(0);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C59-APP-004 · Un producto patrocinado muestra "Patrocinado" bajo el nombre [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C59-APP-004';
    const { srp, nodos: n } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_PATROCINADO'));
    await srp.capturarEvidencia(cp);
    if (!tiene(n, /^Patrocinado$/)) throw BD('{SKU_PATROCINADO} no muestra «Patrocinado» en la app: el escenario isSponsored = true no tiene fixture en este ambiente');
    expect(nodo(n, /^Patrocinado$/)!.y, '«Patrocinado» bajo el nombre').toBeGreaterThan(nombreDe(n)!.y);
  });

  test('TC-B2C59-APP-005 · Un producto no patrocinado no muestra "Patrocinado" [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C59-APP-005';
    const { srp } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_VALID_001'));
    await expect(srp.patrocinado, 'el shelf no muestra "Patrocinado"').not.toBeVisible();
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C59-APP-006 · Tocar la imagen o el nombre del shelf abre la PDP del producto [Guest] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C59-APP-006';
    const tabs = await tolerante(() => new TabBar(screen, p).waitUntilReady());
    await tabs.capturarEvidencia(cp, 1, 'app abierta en el Home');
    // {PLP_URL} es la de la web: en la app la PLP es una subcategoría de la landing de "Mostrar todo".
    const landing = await tolerante(() => new HomeScreen(screen, p).tapMostrarTodo());
    await tolerante(() => landing.waitUntilReady());
    const plp = await tolerante(() => landing.tapPrimeraSubcategoria());
    await tolerante(() => plp.waitUntilReady());
    await dormir(2500);
    const [primero] = await tolerante(() => plp.leerProductos(1));
    await plp.capturarEvidencia(cp, 2, 'PLP con su listado');
    const nombre = primero.nombre.split(' | ')[1]?.slice(0, 18) ?? primero.nombre.slice(0, 18);
    // Imagen: la tarjeta completa es el área táctil (la imagen no publica un nodo propio); nombre: su texto.
    await tolerante(() => plp.tarjeta(primero.sku).tap());
    await dormir(3000);
    const pdp = (await nodos(screen)).some((x) => /Descripción|Información|Agregar|Guardar en listas/i.test(x.label) && x.type !== 'TabBar') && !(await plp.filtros.isVisible().catch(() => false));
    await plp.capturarEvidencia(cp, 4, 'tras tocar la imagen');
    expect(pdp, 'tocar la imagen abre la PDP').toBe(true);
    await tolerante(() => screen.goBack());
    await dormir(2500);
    await tolerante(() => expect(plp.filtros, 'al volver se regresa a la PLP de origen').toBeVisible({ timeout: 15000 }));
    await tolerante(() => screen.getByText(new RegExp(nombre.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))).first().tap());
    await dormir(3000);
    await plp.capturarEvidencia(cp, 6, 'tras tocar el nombre');
    expect(!(await plp.filtros.isVisible().catch(() => false)), 'tocar el nombre abre la PDP').toBe(true);
    await tolerante(() => screen.goBack());
    await dormir(2500);
    await tolerante(() => expect(plp.filtros, 'al volver se regresa a la PLP de origen').toBeVisible({ timeout: 15000 }));
    await plp.capturarEvidencia(cp);
  });

  for (const [n, k, galeria] of [['007', 'SKU_MULTI_IMAGEN', true], ['008', 'SKU_UNA_IMAGEN', false]] as const) {
    test(`TC-B2C59-APP-${n} · ${galeria ? 'Un producto con varias imágenes permite deslizarlas una a una' : 'Un producto con una sola imagen no se desliza ni muestra controles'} [Guest] (Android)`, async ({ screen, plataforma: p, testData }) => {
      const cp = `TC-B2C59-APP-${n}`;
      const s = sku(testData, k);
      const { srp, nodos: nn } = await abrirShelf(screen, p, cp, s);
      const caja = delShelf(nn).find((x) => x.type === 'ViewGroup' && x.w > 300 && x.h > 600) ?? { x: 42, y: 608, w: 480, h: 900 };
      const zonaImagen = async () => sharp(await tolerante(() => screen.screenshot())).extract({ left: Math.round(caja.x), top: Math.round(caja.y + 30), width: Math.round(caja.w), height: 330 }).png().toBuffer();
      const antes = await zonaImagen();
      await tolerante(() => screen.swipe('left', { startX: Math.round(caja.x + caja.w * 0.7), startY: Math.round(caja.y + 200), distance: 140, duration: 900 }));
      await dormir(1500);
      const despues = await zonaImagen();
      if (!(await srp.filtros.isVisible().catch(() => false)) && (await nodos(screen)).some((x) => /Guardar en listas/i.test(x.label))) {
        await srp.capturarEvidencia(cp, 5, 'el gesto abrió la PDP');
        throw new Error('GESTO_ABRE_PDP: el deslizamiento horizontal sobre el shelf abre la PDP del producto en vez de recorrer la galería; no se puede medir la galería con este gesto');
      }
      const dif = await diferenciaMedia(antes, despues);
      test.info().annotations.push({ type: 'diferencia de la tarjeta tras deslizar', description: dif.toFixed(3) });
      await srp.capturarEvidencia(cp, 5, 'shelf tras deslizar la imagen');
      const controles = delShelf(await nodos(screen)).filter((x) => /siguiente|anterior|next|prev|dot|indicador/i.test(`${x.label} ${x.id}`));
      expect(controles.length, 'no se muestran flechas ni dots').toBe(0);
      if (galeria) expect(dif, 'la imagen cambia al deslizar (galería)').toBeGreaterThan(2);
      else expect(dif, 'la imagen no se desplaza').toBeLessThan(0.5);
      expect(nn.length).toBeGreaterThan(0);
      await srp.capturarEvidencia(cp);
    });
  }

  test('TC-B2C59-APP-009 · Un producto pesable muestra el label de formato bajo el nombre [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C59-APP-009';
    const { srp, nodos: n } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_PESABLE'));
    const formato = nodo(n, /^\d+([.,]\d+)? ?(g|gr\.?|kg|ml|l)$/i);
    expect(formato, 'label de formato con la cantidad de medida').toBeTruthy();
    expect(formato!.y, 'debajo del nombre').toBeGreaterThan(nombreDe(n)!.y);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C59-APP-010 · Una promo que combina productos muestra "Combina la promo" y abre el modal [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C59-APP-010';
    const { srp, nodos: n } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_COMBINA_PROMO'));
    const combina = delShelf(n).find((x) => x.type === 'Button' && x.label === 'Combina la promo');
    const agregar = delShelf(n).find((x) => x.type === 'Button' && x.id.startsWith('product-add-'));
    expect(combina, '«Combina la promo >» en el shelf').toBeTruthy();
    expect(combina!.y, 'antes de «Agregar»').toBeLessThan(agregar!.y);
    await tolerante(() => screen.getByRole('button', { name: 'Combina la promo' }).tap());
    await dormir(3000);
    await srp.capturarEvidencia(cp, 5, 'tras tocar «Combina la promo»');
    const despues = await nodos(screen);
    test.info().annotations.push({ type: 'tras tocar', description: despues.map((x) => x.label).filter(Boolean).slice(0, 25).join(' | ') });
    expect(despues.some((x) => /cerrar|volver|close/i.test(x.label)), 'se abre un modal con su botón de cierre').toBe(true);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C59-APP-011 · Un producto sin promo vigente no muestra "Combina la promo" [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C59-APP-011';
    const { srp, nodos: n } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_SIN_PROMO'));
    expect(tiene(n, /^Combina la promo$/), 'no se muestra «Combina la promo»').toBe(false);
    const nombre = nombreDe(n)!;
    const agregar = delShelf(n).find((x) => x.type === 'Button' && x.id.startsWith('product-add-'))!;
    const ultimo = delShelf(n).filter((x) => x.type === 'TextView' && x.y > nombre.y && x.y < agregar.y).sort((a, b) => b.y - a.y)[0] ?? nombre;
    const hueco = agregar.y - (ultimo.y + ultimo.h);
    test.info().annotations.push({ type: 'espacio entre el último texto y «Agregar» (px)', description: String(hueco) });
    expect(hueco, 'el shelf no deja espacio vacío en lugar de «Combina la promo»').toBeLessThan(60);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C59-APP-012 · Un producto sin imagen válida muestra la imagen por defecto de Unimarc [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C59-APP-012';
    const { srp } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_SIN_IMAGEN'));
    await dormir(4000);
    const png = await tolerante(() => screen.screenshot());
    // Zona de la imagen de la tarjeta (bajo el encabezado y sobre los precios), sin el botón de Favoritos.
    const blanca = await proporcionClara(png, { left: 60, top: 660, width: 380, height: 300 });
    test.info().annotations.push({ type: 'proporción blanca de la zona de imagen', description: blanca.toFixed(3) });
    await srp.capturarEvidencia(cp, 5, 'zona de la imagen del shelf');
    expect(blanca, 'la zona de la imagen muestra la imagen por defecto (no queda vacía)').toBeLessThan(0.97);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C59-APP-013 · Un producto sin stock muestra "Pronto disponible" y "Ver similares" [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C59-APP-013';
    const { srp, nodos: n } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_SIN_STOCK'));
    const pronto = nodo(n, /^Pronto disponible$/);
    expect(pronto, '«Pronto disponible» bajo el precio').toBeTruthy();
    expect(delShelf(n).some((x) => x.id.startsWith('product-add-')), 'no se muestra «Agregar»').toBe(false);
    expect(tiene(n, /^Combina la promo$/), 'no se muestra «Combina la promo»').toBe(false);
    expect(tiene(n, /^Ver similares$/), '«Ver similares»').toBe(true);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C59-APP-014 · "Ver similares" abre el modal de productos similares [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C59-APP-014';
    const { srp } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_SIN_STOCK'));
    await tolerante(() => screen.getByRole('button', { name: 'Ver productos similares' }).tap());
    await dormir(7000);
    await srp.capturarEvidencia(cp, 5, 'tras tocar «Ver similares»');
    const despues = await nodos(screen);
    test.info().annotations.push({ type: 'tras tocar', description: despues.map((x) => x.label).filter(Boolean).slice(0, 25).join(' | ') });
    expect(despues.some((x) => /similares/i.test(x.label) && x.y < 700) || despues.some((x) => /cerrar|volver|close/i.test(x.label)), 'se abre el modal de productos similares').toBe(true);
    await srp.capturarEvidencia(cp);
  });

  for (const [n, k, largo] of [['015', 'SKU_NOMBRE_LARGO', true], ['016', 'SKU_NOMBRE_CORTO', false]] as const) {
    test(`TC-B2C59-APP-${n} · "Marca | Descripción" ${largo ? 'larga se trunca a 40 caracteres con "…"' : 'de hasta 40 caracteres se muestra completa'} [Guest] (Android)`, async ({ screen, plataforma: p, testData }) => {
      const cp = `TC-B2C59-APP-${n}`;
      const { srp, nodos: nn } = await abrirShelf(screen, p, cp, sku(testData, k));
      const texto = nombreDe(nn)!.label;
      test.info().annotations.push({ type: 'Marca | Descripción', description: `${texto} (${texto.length} caracteres)` });
      if (largo) {
        expect(texto.length, 'el original supera 40 caracteres').toBeGreaterThan(40);
        // El árbol publica el texto completo: lo visible lo corta el layout, no el texto. La captura muestra dónde.
        const visibles = texto.replace(/\s+/g, ' ').length;
        expect(Math.min(visibles, 40), 'se muestran como máximo 40 caracteres seguidos de «…»').toBeLessThanOrEqual(40);
        expect(texto.endsWith('…') && texto.length <= 41, `el texto publicado por la app está truncado a 40 caracteres con «…» (publica ${texto.length} caracteres completos)`).toBe(true);
      } else {
        expect(texto.length, 'el original tiene 40 caracteres o menos').toBeLessThanOrEqual(40);
        expect(texto.includes('…'), 'sin puntos suspensivos').toBe(false);
      }
      await srp.capturarEvidencia(cp);
    });
  }

  test('TC-B2C59-APP-017 · "Agregar" del shelf suma el producto al carro [Guest] (Android)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C59-APP-017';
    // Carro vacío de partida: el carro del invitado persiste entre corridas.
    await device.terminateApp(bundleId!).catch(() => {});
    borrarDatosApp(bundleId!, process.env.ANDROID_SERIAL);
    await device.launchApp(bundleId!);
    const s = sku(testData, 'SKU_VALID_001');
    const { srp } = await abrirShelf(screen, p, cp, s);
    await tolerante(() => screen.getByTestId(`product-add-${s}`).tap());
    await dormir(4000);
    await srp.capturarEvidencia(cp, 5, 'tras tocar «Agregar»');
    const n = await nodos(screen);
    test.info().annotations.push({ type: 'tras tocar «Agregar»', description: n.map((x) => x.label).filter(Boolean).slice(0, 30).join(' | ') });
    if (n.some((x) => /elige tu m[eé]todo de entrega|selecciona tu direcci[oó]n/i.test(x.label))) {
      throw BD('al tocar «Agregar» como invitado la app pide elegir el método de entrega y no hay una dirección de invitado con cobertura declarada en el Excel de data');
    }
    expect(n.some((x) => /^1 unidades?$/i.test(x.label)) || n.some((x) => x.label === '1' && x.y > 1000 && x.y < 1700), 'el shelf o el carro flotante muestran 1 unidad').toBe(true);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C59-APP-018 · El botón Favoritos del shelf marca el producto como favorito [Logueado] (Android)', async ({ screen, plataforma: p }) => {
    const cp = 'TC-B2C59-APP-018';
    const tabs = await tolerante(() => new TabBar(screen, p).waitUntilReady());
    await tabs.capturarEvidencia(cp, 1, 'app abierta en el Home');
    await tolerante(() => screen.getByTestId('tab-Mi cuenta').tap());
    const cuenta = await tolerante(() => new MiCuentaScreen(screen, p).waitUntilReady());
    const login = await tolerante(() => cuenta.tapIniciarSesion());
    await tolerante(() => login.waitUntilReady());
    await login.capturarEvidencia(cp, 3, 'pantalla de inicio de sesión de la app');
    throw BD('la app inicia sesión con RUT y contraseña ({USER_AUTH_001} es un correo con contraseña y no hay un RUT de cuenta de prueba en el Excel de data), así que no se puede dejar al usuario logueado');
  });

  test('TC-B2C59-APP-019 · Un producto con "Completa la promo" no muestra "Combina la promo" [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C59-APP-019';
    const { srp, nodos: n } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_COMPLETA_PROMO_2X1'));
    expect(tiene(n, /^Combina la promo$/), 'el shelf no muestra «Combina la promo»').toBe(false);
    await srp.capturarEvidencia(cp);
  });

  test('TC-B2C59-APP-020 · La sección de precios del shelf sigue las reglas de B2C-62 [Guest] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C59-APP-020';
    const { srp, nodos: n } = await abrirShelf(screen, p, cp, sku(testData, 'SKU_PROM_NxPRECIO'));
    const s = delShelf(n);
    const precios = s.filter((x) => x.type === 'TextView' && /^(\d+ por )?\$[\d.]+( c\/u)?$/.test(x.label));
    const ppum = s.filter((x) => /^\(\$[\d.]+ x [^)]+\)$/.test(x.label));
    expect(precios.some((x) => /^\d+ por \$/.test(x.label)), 'mecánica NxPrecio («N por $X»)').toBe(true);
    expect(precios.some((x) => /c\/u$/.test(x.label)), 'precio unitario («$X c/u»)').toBe(true);
    expect(ppum.length, 'PPUM del total y del unitario').toBeGreaterThanOrEqual(2);
    expect(precios.length, 'sin superar 3 precios').toBeLessThanOrEqual(3);
    await srp.capturarEvidencia(cp);
  });
});
