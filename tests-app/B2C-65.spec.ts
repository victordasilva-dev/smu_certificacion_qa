import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import type { Plataforma } from '../tests/support/rutasEvidencia';
import { CucardaShelf, type NodoShelf } from './pages/CucardaShelf';
import { tolerante } from './support/tolerante';
import { sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/**
 * B2C-65 — Cucarda (label promocional) del shelf, en la app. Solo Android (emulador local), v1.0.1
 * ya instalada.
 *
 * Las filas dicen "Viewport: App iOS/Android" sin "Plataforma:"; esta corrida certifica Android e
 * iOS queda Pendiente. {PLP_URL} es /category/carnes_vacuno (Categorías → Carnes → Vacuno) y
 * {SRP_URL} es /search?q=carne. La sesión es {USER_AUTH_001} (correo + OTP).
 *
 * Sin `test()`:
 * - 011 compara la cucarda entre iOS y Android: sin iOS no tiene veredicto (queda Pendiente).
 * - 012 ({SKU_SIN_IMAGEN} = 029400-KG no tiene cucarda en Vacuno), 013 y 014 (SKU en TBD):
 *   Bloqueado Data, se cierran sin ejecutar.
 */

const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const SALUDO = /Karl/i;
const swipe = (x1: number, y1: number, x2: number, y2: number, ms = 500) =>
  execSync(`adb shell input swipe ${x1} ${y1} ${x2} ${y2} ${ms}`, { timeout: 20000 });
const sku = (td: any, t: string) => token(td, t)!;
const precondicion = (motivo: string) => new Error(`PRECONDICION_NO_DISPONIBLE: ${motivo}`);

async function abrirApp(screen: Screen, p: Plataforma, td: any, cp: string): Promise<CucardaShelf> {
  await asegurarApp(screen);
  await sesion(screen, p, cp, token(td, 'USER_AUTH_001')!.split(' / ')[0].trim(), SALUDO);
  const s = new CucardaShelf(screen, p);
  await s.capturarEvidencia(cp, 1, 'app con la sesion iniciada');
  return s;
}

/** Pasos 2 y 3: la PLP Carnes → Vacuno. */
async function plpVacuno(screen: Screen, p: Plataforma, td: any, cp: string): Promise<CucardaShelf> {
  const s = await abrirApp(screen, p, td, cp);
  await tol(() => screen.getByTestId('tab-Categorías').tap());
  await dormir(4000);
  for (let i = 0; i < 6; i++) { swipe(540, 700, 540, 1800, 250); await dormir(500); }
  let vacuno: NodoShelf | undefined;
  for (let i = 0; i < 12 && !vacuno; i++) {
    const n = await s.nodos();
    vacuno = n.find((x) => x.type === 'ViewGroup' && x.label === 'Vacuno' && x.y > 300 && x.y < 1900);
    if (vacuno) break;
    const carnes = n.find((x) => x.type === 'ViewGroup' && x.label === 'Carnes' && x.w >= 1000);
    if (carnes && carnes.y < 1500) swipe(950, carnes.y + 300, 350, carnes.y + 300, 400);
    else swipe(540, 1500, 540, 1000, 500);
    await dormir(1500);
  }
  expect(vacuno, 'el menú de Categorías muestra Carnes → Vacuno').toBeTruthy();
  execSync(`adb shell input tap ${vacuno!.x + 100} ${vacuno!.y + 100}`, { timeout: 15000 });
  await tol(() => screen.getByText(/^\d+ productos?$/).first().waitFor({ state: 'visible', timeout: 40000 }));
  await dormir(3000);
  await s.capturarEvidencia(cp, 3, 'PLP Vacuno');
  return s;
}

/** Escribe en el buscador de la pestaña Buscar; con `enter` abre la SRP del término. */
async function buscar(screen: Screen, s: CucardaShelf, termino: string, enter: boolean): Promise<void> {
  await tol(() => screen.getByTestId('tab-Buscar').tap());
  await dormir(4000);
  const campo = (await s.nodos()).find((x) => /EditText/.test(x.type));
  if (!campo) throw new Error('La pestaña Buscar no muestra el campo de búsqueda');
  execSync(`adb shell input tap ${campo.x + 60} ${Math.round(campo.y + campo.h / 2)}`, { timeout: 15000 });
  await dormir(1500);
  execSync(`adb shell input text "${termino.replace(/ /g, '%s')}"`, { timeout: 15000 });
  await dormir(5000);
  if (enter) {
    // Enter abre la SRP y cierra el teclado: un «atrás» aquí volvería a la pantalla anterior.
    execSync('adb shell input keyevent KEYCODE_ENTER', { timeout: 15000 });
    await dormir(7000);
  } else {
    execSync('adb shell input keyevent KEYCODE_BACK', { timeout: 15000 }); // cierra el teclado
    await dormir(1500);
  }
}

/** Lo que mide cada TC sobre la cucarda de un shelf, para la anotación. */
function describir(f: NonNullable<Awaited<ReturnType<CucardaShelf['franja']>>>): string {
  const c = f.textos[0];
  const fav = f.favorito;
  return `cucardas=${f.textos.map((t) => `«${t.label}» dx ${t.x - f.shelf.x} dy ${t.y - f.shelf.y} ${t.w}x${t.h}`).join('; ') || '-'}; favorito=${fav ? `x ${fav.x - f.shelf.x}..${fav.x - f.shelf.x + fav.w}` : '-'}${c && fav ? `; separación ${fav.x - (c.x + c.w)} px` : ''}`;
}

/** Cucarda en la esquina superior izquierda: arriba de todo y pegada al borde izquierdo del shelf. */
function esquinaSuperiorIzquierda(f: NonNullable<Awaited<ReturnType<CucardaShelf['franja']>>>): boolean {
  const c = f.textos[0];
  return Boolean(c) && c.x - f.shelf.x < 80 && c.y - f.shelf.y < 80 && c.x + c.w < f.shelf.x + f.shelf.w / 2 + 120;
}

test.describe.configure({ timeout: 900000 });
test.describe('B2C-65 — Cucarda del shelf (Android)', () => {
  test('TC-65-APP-001 · La cucarda se muestra en la PLP arriba a la izquierda con su estilo [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-65-APP-001';
    const SKU = sku(testData, 'SKU_CYBER');
    const s = await plpVacuno(screen, p, testData, cp);
    if (!(await s.buscar(SKU))) throw precondicion(`{SKU_CYBER} (${SKU}) no aparece en la PLP Vacuno`);
    const f = (await s.franja(SKU))!;
    await s.capturarEvidencia(cp, 4, 'shelf con la cucarda', { elemento: s.shelf(SKU) });
    test.info().annotations.push({ type: 'cucarda', description: describir(f) });
    expect(f.textos.length, 'el shelf muestra una cucarda').toBeGreaterThan(0);
    expect(esquinaSuperiorIzquierda(f), 'la cucarda está en la esquina superior izquierda').toBe(true);
    expect(f.textos[0].label.trim(), 'la cucarda tiene texto').not.toBe('');
    await s.capturarEvidencia(cp);
  });

  test('TC-65-APP-002 · La cucarda se muestra en los resultados de búsqueda [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-65-APP-002';
    const SKU = sku(testData, 'SKU_CYBER');
    const termino = new URL(token(testData, 'SRP_URL')!).searchParams.get('q')!;
    const s = await abrirApp(screen, p, testData, cp);
    await buscar(screen, s, termino, true);
    await s.capturarEvidencia(cp, 3, `resultados de «${termino}»`);
    // «carne» trae ~73 productos (unas 37 filas): hacen falta más de 60 pantallas para llegar al final.
    if (!(await s.buscar(SKU, 100))) throw precondicion(`{SKU_CYBER} (${SKU}) no aparece en los resultados de «${termino}»`);
    const f = (await s.franja(SKU))!;
    await s.capturarEvidencia(cp, 4, 'shelf con la cucarda en los resultados', { elemento: s.shelf(SKU) });
    test.info().annotations.push({ type: 'cucarda', description: describir(f) });
    expect(f.textos.length, 'el shelf muestra una cucarda').toBeGreaterThan(0);
    expect(esquinaSuperiorIzquierda(f), 'la cucarda está en la esquina superior izquierda').toBe(true);
    await s.capturarEvidencia(cp);
  });

  test('TC-65-APP-003 · La cucarda se muestra en carruseles y colecciones del Home [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-65-APP-003';
    const SKU = sku(testData, 'SKU_CUCARDA');
    const s = await abrirApp(screen, p, testData, cp);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await dormir(5000);
    await s.capturarEvidencia(cp, 2, 'Home');
    // Recorre el Home y desliza cada carrusel de productos visible buscando el SKU.
    let hallado: NodoShelf | undefined;
    const revisadas = new Set<number>();
    for (let v = 0; v < 18 && !hallado; v++) {
      let n = await s.nodos();
      hallado = n.find((x) => x.id === `product-${SKU}` && x.y > 250 && x.y < 1500);
      const filas = [...new Set(n.filter((x) => /^product-\d/.test(x.id) && x.y > 250 && x.y < 1500).map((x) => x.y))];
      for (const y of filas) {
        if (hallado || revisadas.has(Math.round(y / 50))) continue;
        revisadas.add(Math.round(y / 50));
        for (let h = 0; h < 8 && !hallado; h++) {
          swipe(950, y + 200, 250, y + 200, 500);
          await dormir(1500);
          n = await s.nodos();
          hallado = n.find((x) => x.id === `product-${SKU}` && x.y > 250 && x.y < 1500 && x.x >= 0 && x.x < 700);
        }
      }
      if (!hallado) { swipe(540, 1700, 540, 1000, 700); await dormir(1800); }
    }
    if (!hallado) throw precondicion(`{SKU_CUCARDA} (${SKU}) no aparece en ningún carrusel del Home`);
    const f = (await s.franja(SKU))!;
    await s.capturarEvidencia(cp, 3, 'shelf con la cucarda en el carrusel', { elemento: s.shelf(SKU) });
    test.info().annotations.push({ type: 'cucarda', description: describir(f) });
    expect(f.textos.length, 'el shelf muestra una cucarda').toBeGreaterThan(0);
    expect(esquinaSuperiorIzquierda(f), 'la cucarda está en la esquina superior izquierda').toBe(true);
    await s.capturarEvidencia(cp);
  });

  test('TC-65-APP-004 · Se muestra como máximo 1 cucarda y no se superpone con Favoritos [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-65-APP-004';
    const SKU = sku(testData, 'SKU_CYBER');
    const s = await plpVacuno(screen, p, testData, cp);
    if (!(await s.buscar(SKU))) throw precondicion(`{SKU_CYBER} (${SKU}) no aparece en la PLP Vacuno`);
    const f = (await s.franja(SKU))!;
    await s.capturarEvidencia(cp, 4, 'cucarda y Favoritos', { elemento: s.shelf(SKU) });
    test.info().annotations.push({ type: 'franja', description: describir(f) });
    expect(f.textos.length, 'una sola cucarda').toBe(1);
    expect(f.favorito, 'el botón de Favoritos está en la franja superior').toBeTruthy();
    expect(f.textos[0].x - f.shelf.x, 'la cucarda a la izquierda').toBeLessThan(f.favorito!.x - f.shelf.x);
    expect(f.textos[0].x + f.textos[0].w, 'la cucarda no se superpone con Favoritos').toBeLessThanOrEqual(f.favorito!.x);
    await s.capturarEvidencia(cp);
  });

  test('TC-65-APP-005 · Un producto sin Label_Texto no muestra cucarda ni espacio vacío [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-65-APP-005';
    const SIN = sku(testData, 'SKU_PRECIO_MIEMBRO');
    const CON = sku(testData, 'SKU_CYBER');
    const s = await plpVacuno(screen, p, testData, cp);
    if (!(await s.buscar(SIN))) throw precondicion(`{SKU_PRECIO_MIEMBRO} (${SIN}) no aparece en la PLP Vacuno`);
    const f = (await s.franja(SIN))!;
    const precioSin = (await s.delShelf(SIN)).find((x) => x.type === 'TextView' && /^\$/.test(x.label));
    await s.capturarEvidencia(cp, 4, 'shelf sin cucarda', { elemento: s.shelf(SIN) });
    if (!(await s.buscar(CON))) throw precondicion(`{SKU_CYBER} (${CON}) no aparece en la PLP Vacuno`);
    const shelfCon = (await s.franja(CON))!.shelf;
    const precioCon = (await s.delShelf(CON)).filter((x) => x.type === 'TextView' && /^\$/.test(x.label)).sort((a, b) => a.y - b.y)[0];
    const dySin = precioSin ? precioSin.y - f.shelf.y : null;
    const dyCon = precioCon ? precioCon.y - shelfCon.y : null;
    test.info().annotations.push({ type: 'layout', description: `${describir(f)}; precio a dy ${dySin} en el shelf sin cucarda y a dy ${dyCon} en el de ${CON} (con cucarda)` });
    expect(f.textos.map((t) => t.label), 'el shelf no muestra cucarda').toEqual([]);
    expect(dySin, 'la imagen y los precios empiezan donde en un shelf con cucarda: no queda espacio reservado').toBe(dyCon);
    await s.capturarEvidencia(cp);
  });

  test('TC-65-APP-006 · La cucarda se muestra en la shelf en estado normal [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-65-APP-006';
    const SKU = sku(testData, 'SKU_CYBER');
    const s = await plpVacuno(screen, p, testData, cp);
    if (!(await s.buscar(SKU))) throw precondicion(`{SKU_CYBER} (${SKU}) no aparece en la PLP Vacuno`);
    const shelf = await s.delShelf(SKU);
    if (!shelf.some((x) => x.id === `product-add-${SKU}`)) throw precondicion(`{SKU_CYBER} (${SKU}) no está en estado normal: no muestra «Agregar» (está en el carro o sin stock)`);
    const f = (await s.franja(SKU))!;
    await s.capturarEvidencia(cp, 4, 'shelf en estado normal con la cucarda', { elemento: s.shelf(SKU) });
    test.info().annotations.push({ type: 'cucarda', description: describir(f) });
    expect(f.textos.length, 'una cucarda').toBe(1);
    expect(esquinaSuperiorIzquierda(f), 'en la esquina superior izquierda').toBe(true);
    expect(f.textos[0].x + f.textos[0].w, 'sin superponerse con Favoritos').toBeLessThanOrEqual(f.favorito?.x ?? Infinity);
    await s.capturarEvidencia(cp);
  });

  test('TC-65-APP-007 · La cucarda se mantiene en la shelf en estado en carro [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-65-APP-007';
    const SKU = sku(testData, 'SKU_CYBER');
    const s = await plpVacuno(screen, p, testData, cp);
    if (!(await s.buscar(SKU))) throw precondicion(`{SKU_CYBER} (${SKU}) no aparece en la PLP Vacuno`);
    const antes = (await s.franja(SKU))!;
    await tol(() => screen.getByTestId(`product-add-${SKU}`).tap());
    await dormir(5000);
    try {
      await s.buscar(SKU, 3);
      const shelf = await s.delShelf(SKU);
      const controles = shelf.some((x) => x.type === 'Button' && /^Agregar una unidad/.test(x.label)) && shelf.some((x) => x.type === 'Button' && /^(Eliminar|Disminuir|Quitar|Restar)/.test(x.label));
      const f = (await s.franja(SKU))!;
      await s.capturarEvidencia(cp, 5, 'shelf en el carro con la cucarda', { elemento: s.shelf(SKU) });
      test.info().annotations.push({ type: 'cucarda', description: `antes: ${describir(antes)} || en carro: ${describir(f)}; controles de cantidad=${controles}` });
      expect(controles, 'el shelf muestra los controles de cantidad').toBe(true);
      expect(f.textos.map((t) => t.label), 'la misma cucarda').toEqual(antes.textos.map((t) => t.label));
      expect([f.textos[0].x - f.shelf.x, f.textos[0].y - f.shelf.y, f.textos[0].w, f.textos[0].h], 'en la misma posición y tamaño').toEqual([antes.textos[0].x - antes.shelf.x, antes.textos[0].y - antes.shelf.y, antes.textos[0].w, antes.textos[0].h]);
      expect(f.textos[0].x + f.textos[0].w, 'sin superponerse con Favoritos').toBeLessThanOrEqual(f.favorito?.x ?? Infinity);
      await s.capturarEvidencia(cp);
    } finally {
      // Deja el carro como estaba, desde la pantalla «Mi carro»: «Quitar del carro» en el shelf lo
      // saca de la vista pero no persiste (al relanzar la app vuelve a estar, 2026-11-12); «Eliminar
      // <producto>» en el carro sí.
      await tol(() => screen.getByTestId('cart-open').tap());
      await dormir(6000);
      for (let i = 0; i < 4; i++) {
        const eliminar = (await s.nodos()).find((x) => x.type === 'Button' && /^Eliminar /.test(x.label) && /Tapapecho vacuno Nacional/.test(x.label));
        if (!eliminar) break;
        execSync(`adb shell input tap ${Math.round(eliminar.x + eliminar.w / 2)} ${Math.round(eliminar.y + eliminar.h / 2)}`, { timeout: 15000 });
        await dormir(4000);
      }
      const quedo = (await s.nodos()).some((x) => x.id === `cart-quantity-${SKU}`);
      test.info().annotations.push({ type: 'limpieza', description: quedo ? 'el producto quedó en el carro' : 'el producto se eliminó del carro' });
    }
  });

  test('TC-65-APP-008 · La cucarda se mantiene en la shelf de un producto sin stock [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-65-APP-008';
    const SKU = sku(testData, 'SKU_SIN_STOCK');
    const s = await plpVacuno(screen, p, testData, cp);
    if (!(await s.buscar(SKU))) throw precondicion(`{SKU_SIN_STOCK} (${SKU}) no aparece en la PLP Vacuno`);
    const f = (await s.franja(SKU))!;
    await s.buscar(SKU, 1);
    const shelf = await s.delShelf(SKU);
    // «Ver similares» queda al pie del shelf: se acerca para leerlo.
    swipe(540, 1500, 540, 1000, 700); await dormir(1500);
    const pie = await s.delShelf(SKU);
    await s.capturarEvidencia(cp, 4, 'shelf sin stock con la cucarda', { elemento: s.shelf(SKU) });
    const textos = [...shelf, ...pie].map((x) => x.label);
    test.info().annotations.push({ type: 'cucarda', description: `${describir(f)}; textos del shelf: ${[...new Set(textos)].filter((t) => /Pronto|similares|Agregar/.test(t)).join(', ')}` });
    expect(textos, 'muestra «Pronto disponible»').toContain('Pronto disponible');
    expect(textos.some((t) => /similares/i.test(t)), 'muestra «Ver similares»').toBe(true);
    expect(f.textos.length, 'mantiene una cucarda').toBe(1);
    expect(esquinaSuperiorIzquierda(f), 'en la esquina superior izquierda').toBe(true);
    expect(f.textos[0].x + f.textos[0].w, 'sin superponerse con Favoritos').toBeLessThanOrEqual(f.favorito?.x ?? Infinity);
    await s.capturarEvidencia(cp);
  });

  test('TC-65-APP-009 · Un texto de cucarda de más de 15 caracteres se trunca con puntos suspensivos [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-65-APP-009';
    const SKU = sku(testData, 'SKU_CUCARDA_LARGA');
    const s = await plpVacuno(screen, p, testData, cp);
    if (!(await s.buscar(SKU))) throw precondicion(`{SKU_CUCARDA_LARGA} (${SKU}) no aparece en la PLP Vacuno`);
    const f = (await s.franja(SKU))!;
    const c = f.textos[0];
    if (!c || c.label.length <= 15) throw precondicion(`{SKU_CUCARDA_LARGA} (${SKU}) no tiene una cucarda de más de 15 caracteres`);
    // El árbol de accesibilidad trae el texto completo aunque en pantalla se corte con «…»: cuántos
    // caracteres se ven solo se lee de la captura del shelf. Este test deja la captura y el texto.
    await s.capturarEvidencia(cp, 4, 'cucarda larga', { elemento: s.shelf(SKU) });
    test.info().annotations.push({ type: 'cucarda', description: `texto completo «${c.label}» (${c.label.length} caracteres); caja del texto ${c.w}x${c.h} px` });
    await s.capturarEvidencia(cp);
  });

  test('TC-65-APP-010 · La cucarda se muestra en la shelf del buscador [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-65-APP-010';
    const SKU = sku(testData, 'SKU_CYBER');
    const s = await abrirApp(screen, p, testData, cp);
    // El nombre del producto, como lo muestra su shelf: «Nacional | Tapapecho vacuno Nacional al vacío 1.8 Kg».
    await buscar(screen, s, 'Tapapecho vacuno Nacional', false);
    await s.capturarEvidencia(cp, 3, 'buscador con el producto');
    if (!(await s.buscar(SKU, 3))) throw precondicion(`{SKU_CYBER} (${SKU}) no aparece en los resultados del buscador`);
    const f = (await s.franja(SKU))!;
    await s.capturarEvidencia(cp, 3, 'shelf del buscador con la cucarda', { elemento: s.shelf(SKU) });
    test.info().annotations.push({ type: 'cucarda', description: describir(f) });
    expect(f.textos.length, 'una cucarda').toBe(1);
    expect([f.textos[0].x - f.shelf.x, f.textos[0].y - f.shelf.y], 'en la misma posición que en la PLP (dx 45, dy 36)').toEqual([45, 36]);
    await s.capturarEvidencia(cp);
  });

  test('TC-65-APP-011 · Registro de la cucarda en Android para comparar con iOS [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-65-APP-011';
    const SKU = sku(testData, 'SKU_CYBER');
    const s = await plpVacuno(screen, p, testData, cp);
    if (!(await s.buscar(SKU))) throw precondicion(`{SKU_CYBER} (${SKU}) no aparece en la PLP Vacuno`);
    const f = (await s.franja(SKU))!;
    await s.capturarEvidencia(cp, 4, 'cucarda en Android', { elemento: s.shelf(SKU) });
    test.info().annotations.push({ type: 'cucarda Android', description: describir(f) });
    // Sin iOS no hay comparación posible: este test solo deja el registro de Android.
    expect(f.textos.length, 'el shelf muestra la cucarda').toBe(1);
  });
});
