import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import type { Plataforma } from '../tests/support/rutasEvidencia';
import { HomeScreen } from './pages/HomeScreen';
import { MyUsualsCarruselScreen, type NodoApp } from './pages/MyUsualsCarruselScreen';
import { tolerante } from './support/tolerante';
import { sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/**
 * B2C-55 — Carrusel My Usuals en el Home de la app. Solo Android (emulador local), build v1.0.1.
 *
 * Las filas dicen "Viewport: App iOS/Android" sin "Plataforma:"; esta corrida certifica Android e
 * iOS queda Pendiente. La v1.0.1 entra por correo + código (OTP) con las cuentas declaradas:
 * {COMPRADOR_USUALS_MAS_24_USER} (29 frecuentes en c_myUsuals, 27 en la página) y
 * {COMPRADOR_5_FRECUENTES_USER} (exactamente 5). El orden de referencia de APP-001 es la página
 * «Mis productos frecuentes» a la que lleva «Ver todos», que sigue el orden de c_myUsuals (B2C-85).
 *
 * Sin `test()`: 002, 008 y 009 (tokens en TBD) → Bloqueado Data; 010 (con 10 s de latencia en el
 * emulador el carrusel aparece ya cargado: la app guarda el Home en caché) y 011 (el error del
 * atributo no se puede provocar en la app sin apoyo de Desarrollo) → Bloqueado.
 */

const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const COMPRADOR = /Karl/i;
const CINCO = /Compador/i;
const correo = (td: any, cuenta: string) => token(td, `${cuenta}_USER`)!;

/** Sesión de la cuenta y el Home con el carrusel My Usuals a la vista (pasos 1 a 4). */
async function homeConCarrusel(screen: Screen, p: Plataforma, td: any, cp: string) {
  await asegurarApp(screen);
  await sesion(screen, p, cp, correo(td, 'COMPRADOR_USUALS_MAS_24'), COMPRADOR);
  const home = new HomeScreen(screen, p);
  await tol(() => screen.getByTestId('tab-Home').tap());
  await dormir(4000);
  const carrusel = new MyUsualsCarruselScreen(screen, p);
  await carrusel.alInicioDelHome();
  await home.capturarEvidencia(cp, 3, 'Home con la sesion iniciada');
  expect(await carrusel.llevarAVista(), 'el Home muestra el carrusel My Usuals').toBe(true);
  expect((await carrusel.tarjetas()).length, 'el carrusel muestra productos').toBeGreaterThan(0);
  await carrusel.capturarEvidencia(cp, 4, 'carrusel My Usuals');
  return { home, carrusel };
}

test.describe.configure({ timeout: 900000 });
test.describe('B2C-55 — Carrusel My Usuals (Android)', () => {
  test('TC-B2C55-APP-001 · Orden de relevancia de myUsualsProducts [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C55-APP-001';
    const { carrusel } = await homeConCarrusel(screen, p, testData, cp);
    const skus = await carrusel.todosLosSkus();
    await carrusel.capturarEvidencia(cp, 5, 'final del carrusel');

    // Orden de referencia: «Ver todos» → Mis productos frecuentes.
    await carrusel.llevarAVista();
    await tol(() => carrusel.verTodos.tap());
    await tol(() => screen.getByText(/^\d+ productos?$/).waitFor({ state: 'visible', timeout: 30000 }));
    await dormir(2000);
    const pagina: string[] = [];
    for (let i = 0; i < 4 && pagina.length < skus.length; i++) {
      const n: NodoApp[] = await carrusel.nodos();
      for (const x of n.filter((x) => /^product-\d/.test(x.id)).sort((a, b) => a.y - b.y || a.x - b.x)) {
        const sku = x.id.replace(/^product-/, '');
        if (!pagina.includes(sku)) pagina.push(sku);
      }
      if (i === 0) await carrusel.capturarEvidencia(cp, 6, 'Mis productos frecuentes (orden de referencia)');
      await screen.swipe('up');
      await dormir(1500);
    }
    test.info().annotations.push({ type: 'orden', description: `carrusel ${skus.join(',')} | página ${pagina.join(',')}` });
    expect(skus, 'el carrusel sigue el orden de relevancia de los productos frecuentes').toEqual(pagina.slice(0, skus.length));
    await carrusel.capturarEvidencia(cp);
  });

  test('TC-B2C55-APP-003 · Titulo configurado centrado [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C55-APP-003';
    const { carrusel } = await homeConCarrusel(screen, p, testData, cp);
    const t = await carrusel.titulo();
    expect(t?.label, 'el carrusel tiene título').toMatch(/\S{3,}/);
    const medida = await carrusel.desvioDelTitulo();
    test.info().annotations.push({ type: 'titulo', description: `"${t?.label}" caja ${t?.x}..${(t?.x ?? 0) + (t?.w ?? 0)}, texto ${medida?.textoX.join('..')}, desvío ${medida?.desvio}px` });
    expect(medida, 'se midió el texto del título').not.toBeNull();
    expect(medida!.desvio, 'el título queda centrado sobre el carrusel').toBeLessThanOrEqual(12);
    await carrusel.capturarEvidencia(cp, 5, 'titulo del carrusel');
    await carrusel.capturarEvidencia(cp);
  });

  test('TC-B2C55-APP-004 · Cada producto usa la shelf estandar [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C55-APP-004';
    const { carrusel } = await homeConCarrusel(screen, p, testData, cp);
    const revisadas: string[] = [];
    const sinStock: string[] = [];
    for (let paso = 0; paso < 6; paso++) {
      const n = await carrusel.nodos();
      // Android informa la caja recortada de la tarjeta que asoma (x=1024, ancho 56): solo cuentan las enteras.
      for (const t of (await carrusel.tarjetas()).filter((t) => t.x >= 0 && t.x + t.w <= 1082 && t.w > 400)) {
        const sku = t.id.replace(/^product-/, '');
        if (revisadas.includes(sku)) continue;
        const dentro = n.filter((x) => x.x >= t.x && x.x < t.x + t.w && x.y >= t.y && x.y < t.y + t.h);
        const textos = dentro.filter((x) => x.type === 'TextView').map((x) => x.label);
        expect(await carrusel.proporcionImagen(t), `la tarjeta ${sku} tiene imagen`).toBeGreaterThan(0.05);
        expect(textos.some((x) => /^\$[\d.]+/.test(x)), `la tarjeta ${sku} tiene precio`).toBe(true);
        expect(textos.some((x) => /[a-záéíóúñ]{3,}.*\s.*[a-záéíóúñ]{3,}/i.test(x) && !/^\$/.test(x) && !/Agregar|Pronto/.test(x)), `la tarjeta ${sku} tiene nombre`).toBe(true);
        const agregar = dentro.some((x) => x.id === `product-add-${sku}` || /^Agregar una unidad/.test(x.label));
        // Sin stock, el shelf cambia «Agregar» por «Ver similares» (CA5 de la misma HU).
        if (!agregar && dentro.some((x) => /Ver productos similares/.test(x.label))) sinStock.push(sku);
        else expect(agregar, `la tarjeta ${sku} tiene el botón «Agregar»`).toBe(true);
        revisadas.push(sku);
      }
      if (paso === 0) await carrusel.capturarEvidencia(cp, 5, 'tarjetas del shelf estandar');
      await carrusel.avanzar();
    }
    test.info().annotations.push({ type: 'tarjetas', description: `revisadas ${revisadas.join(',')}; sin stock ${sinStock.join(',') || '-'}` });
    expect(revisadas.length, 'se revisaron todas las tarjetas del carrusel').toBeGreaterThanOrEqual(5);
    await carrusel.capturarEvidencia(cp, 6, 'ultimas tarjetas del carrusel');
    await carrusel.capturarEvidencia(cp);
  });

  test('TC-B2C55-APP-005 · Link "Ver todos" [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C55-APP-005';
    const { carrusel } = await homeConCarrusel(screen, p, testData, cp);
    await expect(carrusel.verTodos, 'el componente muestra el link «Ver todos»').toBeVisible();
    await carrusel.capturarEvidencia(cp, 5, 'link Ver todos');
    await carrusel.capturarEvidencia(cp);
  });

  test('TC-B2C55-APP-006 · 2 productos visibles a la vez [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C55-APP-006';
    const { carrusel } = await homeConCarrusel(screen, p, testData, cp);
    const iniciales = await carrusel.skusVisibles();
    await carrusel.capturarEvidencia(cp, 5, `${iniciales.length} productos visibles sin desplazar`);
    expect(iniciales.length, 'el carrusel muestra 2 productos a la vez').toBe(2);
    await carrusel.avanzar();
    const nuevos = (await carrusel.skusVisibles()).filter((s) => !iniciales.includes(s));
    await carrusel.capturarEvidencia(cp, 6, 'carrusel tras deslizarlo');
    const total = await carrusel.todosLosSkus();
    test.info().annotations.push({ type: 'desplazamiento', description: `nuevas al deslizar ${nuevos.length}; productos en el carrusel ${total.length}` });
    expect(nuevos.length, 'al deslizar se ven productos que no estaban a la vista').toBeGreaterThan(0);
    await carrusel.capturarEvidencia(cp);
  });

  test('TC-B2C55-APP-007 · No se muestra con exactamente 5 frecuentes [Logueado] (Android)', async ({ screen, plataforma: p, testData }) => {
    const cp = 'TC-B2C55-APP-007';
    await asegurarApp(screen);
    await sesion(screen, p, cp, correo(testData, 'COMPRADOR_5_FRECUENTES'), CINCO);
    const home = new HomeScreen(screen, p);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await dormir(4000);
    const carrusel = new MyUsualsCarruselScreen(screen, p);
    await carrusel.alInicioDelHome();
    await home.capturarEvidencia(cp, 3, 'Home con la sesion iniciada');
    const encontrado = await carrusel.llevarAVista();
    // Al pie del Home: el bloque «Contrata la membresía» va justo después de «Especial Bebidas».
    let n = await carrusel.nodos();
    for (let i = 0; i < 8; i++) {
      const m = n.find((x) => /^Contrata la membres[íi]a/.test(x.label) && x.type === 'ViewGroup');
      if (m && m.y > 700 && m.y < 1500) break;
      if (m && m.y >= 1500) await screen.swipe('up');
      else execSync('adb shell input swipe 540 900 540 1500 400', { timeout: 20000 });
      await dormir(1200);
      n = await carrusel.nodos();
    }
    const membresia = n.find((x) => /^Contrata la membres[íi]a/.test(x.label) && x.type === 'ViewGroup');
    const tarjetasArriba = n.filter((x) => /^product-\d/.test(x.id) && membresia && x.y < membresia.y);
    const finAnterior = Math.max(...tarjetasArriba.map((x) => x.y + x.h), 0);
    const hueco = membresia && tarjetasArriba.length ? membresia.y - finAnterior : null;
    await home.capturarEvidencia(cp, 5, 'pie del Home sin el carrusel My Usuals');
    test.info().annotations.push({ type: 'hueco', description: `carrusel encontrado ${encontrado}; espacio entre el último carrusel y «Contrata la membresía» ${hueco}px` });
    expect(encontrado, 'el Home no muestra el carrusel My Usuals').toBe(false);
    expect(n.some((x) => /Ver todos mis productos frecuentes/.test(x.label)), 'no aparece «Ver todos» del carrusel').toBe(false);
    if (hueco !== null) expect(hueco, 'no queda un espacio vacío en el lugar del carrusel').toBeLessThan(250);
    await home.capturarEvidencia(cp);
  });
});
