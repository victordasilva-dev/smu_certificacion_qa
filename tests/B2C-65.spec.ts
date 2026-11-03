import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP_1280, MOBILE } from './support/viewports';
import { PLPCategoriaPage } from './pages/PLPCategoriaPage';
import { ShelfProducto } from './pages/ShelfProducto';
import type { Browser } from '@playwright/test';
import { BuscadorModal, FormFactor } from './pages/BuscadorModal';
import { ShelfSimplificada } from './pages/ShelfSimplificada';
import { HomePage } from './pages/HomePage';
import { PDPPage } from './pages/PDPPage';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { LoginModal } from './pages/LoginModal';
import { esperarOtp, marcaOtp } from './support/otp';
import fs from 'fs';
import path from 'path';

/**
 * B2C-65 — Cucarda (label promocional) en la shelf de producto.
 *
 * Solo **3 de los 24 TC web** de la planilla llegaron a tener `test()`. Los otros 21 quedaron
 * `Bloqueado` antes de escribir código, y conviene que se entienda por qué:
 *
 * - **17 por precondición de configuración no cumplida.** Sus filas piden un producto con la
 *   cucarda configurada (`Label_Activo=true`, `Label_Texto`, colores) y en el ambiente declarado
 *   no hay ninguno: la categoría de `{PLP_URL}` llega con `c_cucardaActivo=false`, ni un solo
 *   producto de esa PLP renderiza cucarda, y los tres SKU que la planilla declara como "con
 *   cucarda" —`{SKU_CYBER}`, `{SKU_CUCARDA}` y `{SKU_CUCARDA_LARGA}`— están los tres en la PLP y
 *   los tres sin ella. La función sí existe y se vio funcionando (la promoción "Semana del pollo"
 *   pinta su cucarda en el SRP), así que esto no es un defecto de producto: es data de catálogo
 *   que falta cargar en BM y propagar con JOB1/JOB2. Correrlos igual, sobre un SKU elegido a dedo
 *   entre los que sí la tienen, daría un veredicto que no dice nada de los casos que la planilla
 *   declara.
 * - **4 porque su fila no declara la cuenta** con la que se ejecutan (D-013 a D-016 y M-013 a
 *   M-016 piden sesión iniciada y su columna `Test data` solo trae `{BASE_URL}` y `{PLP_URL}`).
 *
 * Los tres que sí se pudieron correr son los que no dependen de esa configuración ausente: el del
 * SRP, donde la cucarda de "Semana del pollo" sí está, y el par Desktop/Mobile del producto **sin**
 * cucarda, cuya precondición es justamente la que el ambiente cumple.
 *
 * Dos decisiones que valen para el archivo:
 *
 * - **El producto se busca por la propiedad que el TC nombra, no por posición.** D-002 toma del
 *   SRP declarado el shelf que lleva cucarda; D-005 y M-005 toman el SKU que su fila declara. La
 *   precondición se afirma dentro del propio `test()`, de modo que la evidencia diga con qué
 *   producto se corrió.
 * - **La cucarda se reconoce por geometría, no por clase.** Es el único elemento posicionado en
 *   absoluto con texto dentro del recuadro de la imagen; su clase (`css-9q7wso`) la genera chakra
 *   y cambia con cada build. Vive en `ShelfProducto.cucardasDetalladas()`.
 */

/** El valor de un token que la fila declara, exigido: sin él el caso no tiene origen. */
function declarado(testData: Parameters<typeof token>[0], nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) throw new Error(`Falta {${nombre}} en el Excel de data: el TC lo declara en su Test data`);
  return valor;
}

const rutaDe = (url: string) => new URL(url).pathname.slice(1) + new URL(url).search;

/**
 * Abre por URL directa el listado que el TC declara y espera a que esté servido y estable.
 *
 * Sirve igual para la PLP y para el SRP: los dos renderizan la misma grilla de shelves. El
 * listado llega por SSR, así que los nodos existen antes de que React los hidrate; se espera a
 * que la red se calme para que las medidas de geometría se tomen sobre el layout definitivo y no
 * sobre uno a medio montar.
 */
async function abrirListado(page: Page, url: string): Promise<PLPCategoriaPage> {
  const listado = new PLPCategoriaPage(page, rutaDe(url));
  await listado.goto();
  await expect(ShelfProducto.todos(page).first()).toBeVisible({ timeout: 60000 });
  await page.waitForLoadState('networkidle', { timeout: 60000 }).catch(() => {});
  return listado;
}


const SESION_COMPRADOR = path.resolve('.qa/auth/b65-comprador.json');

/** Inicia sesión con {COMPRADOR_USER}: reutiliza su storageState y, si no sirve, pide el OTP por correo. */
async function iniciarSesionComprador(page: Page, testData: Parameters<typeof token>[0]): Promise<void> {
  const origen = [SESION_COMPRADOR, path.resolve('.qa/auth/b41-comprador.json')].find((f) => fs.existsSync(f));
  if (origen) {
    const estado = JSON.parse(fs.readFileSync(origen, 'utf-8'));
    await page.context().addCookies(estado.cookies ?? []);
  }
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  const login = new LoginModal(page);
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  if (await login.disparador.isVisible().catch(() => false)) {
    const correo = declarado(testData, 'COMPRADOR_USER');
    const desde = marcaOtp();
    await login.pedirCodigo(correo);
    await login.ingresarCodigo(await esperarOtp(correo, desde, { digitos: 6 }));
    fs.mkdirSync(path.dirname(SESION_COMPRADOR), { recursive: true });
    await page.context().storageState({ path: SESION_COMPRADOR });
  }
  await login.descartarPasskey();
  expect(await login.disparador.isVisible().catch(() => false), 'la sesión del comprador quedó iniciada').toBe(false);
}

/** Pasos 1–2 de D/M-014: estado normal y "en carro". El tercero (sin stock) no tiene producto declarado. */
async function casoEstadosLogueado(page: Page, testData: Parameters<typeof token>[0], cp: string) {
  test.setTimeout(240000);
  await iniciarSesionComprador(page, testData);
  await casoEstadoNormal(page, testData, cp + '-n', true);
  await casoEstadoEnCarro(page, testData, cp, true);
  throw new Error('PRECONDICION_NO_DISPONIBLE: el paso 4 pide un producto con cucarda y sin stock y la fila no declara ninguno ({SKU_SIN_STOCK} no está en su Test data y en el ambiente tiene stock)');
}

/** El primer shelf del listado que lleva cucarda, o `null` si no hay ninguno. */
async function primerShelfConCucarda(page: Page): Promise<ShelfProducto | null> {
  const total = await ShelfProducto.todos(page).count();
  for (let i = 0; i < total; i++) {
    const shelf = ShelfProducto.enIndice(page, i);
    await shelf.root.scrollIntoViewIfNeeded().catch(() => {});
    if ((await shelf.cucardasDetalladas()).length > 0) return shelf;
  }
  return null;
}


// ====================================================================== casos compartidos
// Desktop y Mobile verifican el mismo comportamiento con el mismo Page Object; lo que cambia es el
// viewport (lo fija el describe) y lo que cada fila espera. Cada función recibe el CP-ID para que
// la evidencia quede atada a su fila.


/** El shelf del SKU que la fila declara, exigiendo que esté una sola vez en el listado. */
async function shelfDelSku(page: Page, sku: string): Promise<ShelfProducto> {
  const shelf = ShelfProducto.porSku(page, sku);
  await expect(shelf.root, `el SKU declarado ${sku} está en el listado`).toHaveCount(1, { timeout: 30000 });
  await shelf.root.scrollIntoViewIfNeeded();
  return shelf;
}

/** Exige la cucarda única del shelf, en la esquina superior izquierda y sin tapar a Favoritos. */
async function afirmarCucardaEnEsquina(shelf: ShelfProducto, descripcion: string) {
  const cucardas = await shelf.cucardasDetalladas();
  expect(cucardas.length, `${descripcion}: el shelf muestra una cucarda`).toBe(1);
  const c = cucardas[0];
  const imagen = await shelf.caja(shelf.imagen.first().or(shelf.imagenNoDisponible.first()).first());
  expect(c.dx, 'la cucarda arranca en el cuarto izquierdo de la imagen').toBeLessThan(imagen.width / 4);
  expect(c.dy, 'la cucarda arranca en el cuarto superior de la imagen').toBeLessThan(imagen.height / 4);
  expect(c.solapaFavoritos, 'la cucarda no se cruza con el botón de favoritos').toBe(false);
  return c;
}

/** El estilo aplicado: no puede leerse el valor de BM, sí que haya un par de colores propios. */
function afirmarEstiloAplicado(c: { colorTexto: string; colorFondo: string; texto: string }) {
  expect(c.texto, 'la cucarda lleva texto').not.toBe('');
  expect(c.colorTexto, 'la cucarda aplica un color de texto propio').toMatch(/^rgba?\(/);
  expect(c.colorFondo, 'el fondo de la cucarda no es transparente').not.toMatch(/rgba\(0, 0, 0, 0\)/);
  expect(c.colorTexto, 'texto y fondo no son del mismo color').not.toBe(c.colorFondo);
}

/** TC "cucarda visible en la PLP del SKU declarado": posición, texto y estilo. */
async function casoCucardaEnPLP(page: Page, testData: Parameters<typeof token>[0], cp: string, textoEsperado: string) {
  test.setTimeout(180000);
  const plp = await abrirListado(page, declarado(testData, 'PLP_URL'));
  await plp.capturarEvidencia(cp, 1, 'PLP declarada');
  const sku = declarado(testData, 'SKU_CYBER');
  const shelf = await shelfDelSku(page, sku);
  await plp.capturarEvidencia(cp, 2, `shelf del SKU ${sku}`, { elemento: shelf.root });
  const c = await afirmarCucardaEnEsquina(shelf, 'SKU_CYBER');
  test.info().annotations.push({ type: 'cucarda', description: JSON.stringify(c) });
  await plp.capturarEvidencia(cp, 3, `cucarda en dx ${c.dx} dy ${c.dy}`, { elemento: shelf.imagen.first() });
  expect(c.texto, `el texto de la cucarda es el configurado ("${textoEsperado}")`).toBe(textoEsperado);
  afirmarEstiloAplicado(c);
  await plp.capturarEvidencia(cp);
}

/** TC "máximo 1 cucarda y sin cruzarse con Favoritos". */
async function casoMaximoUnaCucarda(page: Page, testData: Parameters<typeof token>[0], cp: string) {
  test.setTimeout(180000);
  const plp = await abrirListado(page, declarado(testData, 'PLP_URL'));
  const shelf = await shelfDelSku(page, declarado(testData, 'SKU_CYBER'));
  await plp.capturarEvidencia(cp, 1, 'shelf del producto con cucarda', { elemento: shelf.root });
  const cucardas = await shelf.cucardasDetalladas();
  expect(cucardas.length, 'solo aparece una cucarda en la shelf').toBe(1);
  const c = cucardas[0];
  const fav = await shelf.caja(shelf.favoritos);
  const img = await shelf.caja(shelf.imagen.first());
  expect(c.dx, 'la cucarda está en la esquina superior izquierda').toBeLessThan(img.width / 4);
  expect(c.dy, 'la cucarda está arriba').toBeLessThan(img.height / 4);
  expect(fav.left - img.left, 'Favoritos está en la mitad derecha de la imagen').toBeGreaterThan(img.width / 2);
  expect(fav.top - img.top, 'Favoritos está arriba').toBeLessThan(img.height / 4);
  expect(c.solapaFavoritos, 'la cucarda y Favoritos no se solapan').toBe(false);
  await plp.capturarEvidencia(cp, 2, 'cucarda a la izquierda y Favoritos a la derecha', { elemento: shelf.imagen.first() });
  await plp.capturarEvidencia(cp);
}

/** Agrega el producto al carro con reintento, como en B2C-59. */
async function agregarYEsperar(shelf: ShelfProducto, intentos = 3): Promise<void> {
  for (let i = 0; i < intentos; i += 1) {
    await shelf.clicAgregar();
    try {
      await shelf.enCarro.waitFor({ state: 'visible', timeout: 12000 });
      return;
    } catch {
      /* reintenta */
    }
  }
}

/** TC "estado normal": Agregar visible y cucarda en su sitio. `sku` null = primer shelf con cucarda. */
async function casoEstadoNormal(page: Page, testData: Parameters<typeof token>[0], cp: string, usarSku: boolean) {
  test.setTimeout(180000);
  const plp = await abrirListado(page, declarado(testData, 'PLP_URL'));
  const shelf = usarSku ? await shelfDelSku(page, declarado(testData, 'SKU_CYBER')) : await primerShelfConCucarda(page);
  expect(shelf, 'la PLP declarada tiene un producto con cucarda').not.toBeNull();
  await shelf!.root.scrollIntoViewIfNeeded();
  await plp.capturarEvidencia(cp, 1, 'shelf con cucarda en estado normal', { elemento: shelf!.root });
  await expect(shelf!.agregar, 'el producto muestra el botón "Agregar"').toBeVisible();
  expect(await shelf!.cantidadEnCarro(), 'el producto no está en el carro').toBeNull();
  const c = await afirmarCucardaEnEsquina(shelf!, 'estado normal');
  afirmarEstiloAplicado(c);
  await plp.capturarEvidencia(cp, 2, `cucarda "${c.texto}" en dx ${c.dx} dy ${c.dy}`, { elemento: shelf!.imagen.first() });
  await plp.capturarEvidencia(cp);
}

/** TC "estado en carro": la cucarda no se mueve ni se oculta al aparecer el stepper. */
async function casoEstadoEnCarro(page: Page, testData: Parameters<typeof token>[0], cp: string, usarSku: boolean) {
  test.setTimeout(180000);
  const plp = await abrirListado(page, declarado(testData, 'PLP_URL'));
  const shelf = usarSku ? await shelfDelSku(page, declarado(testData, 'SKU_CYBER')) : await primerShelfConCucarda(page);
  expect(shelf, 'la PLP declarada tiene un producto con cucarda').not.toBeNull();
  await shelf!.root.scrollIntoViewIfNeeded();
  const antes = await afirmarCucardaEnEsquina(shelf!, 'antes de agregar');
  await plp.capturarEvidencia(cp, 1, 'shelf antes de agregar', { elemento: shelf!.root });
  // Precondición: una unidad ya en el carro.
  await agregarYEsperar(shelf!);
  await expect(shelf!.enCarro, 'el shelf pasa a estado "En carro"').toBeVisible({ timeout: 30000 });
  await expect(shelf!.aumentar, 'el shelf muestra el control de cantidad (+)').toBeVisible();
  expect(await shelf!.cantidadEnCarro(), 'hay 1 unidad en el carro').toBe(1);
  await plp.capturarEvidencia(cp, 2, 'shelf con controles de cantidad', { elemento: shelf!.root });
  const despues = await afirmarCucardaEnEsquina(shelf!, 'en carro');
  expect(despues.texto, 'la cucarda mantiene su texto').toBe(antes.texto);
  expect(despues.dx, 'la cucarda no se desplaza en x').toBe(antes.dx);
  expect(despues.dy, 'la cucarda no se desplaza en y').toBe(antes.dy);
  expect(despues.colorFondo, 'la cucarda mantiene su fondo').toBe(antes.colorFondo);
  expect(despues.colorTexto, 'la cucarda mantiene el color de texto').toBe(antes.colorTexto);
  await plp.capturarEvidencia(cp, 3, 'cucarda intacta en el estado En carro', { elemento: shelf!.imagen.first() });
  await plp.capturarEvidencia(cp);
}

/** TC de truncado: el texto largo debe verse cortado con "..." dentro del máximo del canal. */
async function casoTruncado(page: Page, testData: Parameters<typeof token>[0], cp: string, maximo: number) {
  test.setTimeout(180000);
  const plp = await abrirListado(page, declarado(testData, 'PLP_URL'));
  const sku = declarado(testData, 'SKU_CUCARDA_LARGA');
  const shelf = await shelfDelSku(page, sku);
  await plp.capturarEvidencia(cp, 1, `shelf del SKU ${sku}`, { elemento: shelf.root });
  const m = await shelf.truncadoDeLaCucarda();
  expect(m, 'el producto declarado muestra una cucarda').not.toBeNull();
  test.info().annotations.push({ type: 'truncado', description: JSON.stringify(m) });
  expect(m!.textoDom.length, `el texto configurado supera los ${maximo} caracteres`).toBeGreaterThan(maximo);
  const cuc = (await shelf.cucardasDetalladas(true))[0];
  expect.soft(cuc.solapaFavoritos, 'la cucarda no se cruza con el botón de favoritos').toBe(false);
  await plp.capturarEvidencia(cp, 2, `cucarda de ${m!.textoDom.length} caracteres`, { elemento: shelf.imagen.first() });
  expect.soft(m!.desborda, 'la cucarda no se sale de la imagen').toBe(false);
  expect(
    m!.conElipsis,
    `el texto visible se trunca con "..." (texto "${m!.textoDom}", text-overflow: ${m!.textOverflow}, ancho del texto ${m!.anchoDelTexto}px, ancho de la cucarda ${m!.anchoDeLaCucarda}px)`,
  ).toBe(true);
  await plp.capturarEvidencia(cp);
}

/** TC de la shelf simplificada dentro del modal del buscador. */
async function casoModalBuscador(
  page: Page,
  testData: Parameters<typeof token>[0],
  cp: string,
  ff: FormFactor,
  terminoDeSrp: boolean,
) {
  test.setTimeout(180000);
  const sku = declarado(testData, 'SKU_CYBER');
  let termino: string;
  if (terminoDeSrp) {
    termino = new URL(declarado(testData, 'SRP_URL')).searchParams.get('q') ?? '';
  } else {
    const pdp = await new PDPPage(page).abrir(sku);
    termino = (await pdp.nombreDelProducto.innerText()).trim().split(' ').slice(0, 3).join(' ');
  }
  expect(termino, 'hay un término de búsqueda').not.toBe('');
  const home = new HomePage(page);
  await home.goto();
  const buscador = new BuscadorModal(page, ff);
  await buscador.abrir();
  await buscador.escribir(termino);
  const item = new ShelfSimplificada(page, buscador).porSku(sku);
  await expect(item.root, `la shelf del SKU declarado aparece en los resultados de "${termino}"`).toBeVisible({ timeout: 30000 });
  await page.waitForTimeout(1500);
  await home.capturarEvidencia(cp, 1, `modal de buscador con "${termino}"`);
  await home.capturarEvidencia(cp, 2, 'shelf simplificada del producto', { elemento: item.root });
  const m = await item.cucarda('Cyber');
  test.info().annotations.push({ type: 'cucarda', description: JSON.stringify({ termino, ...m }) });
  expect(m.cucarda, 'la cucarda "Cyber" se muestra sobre la imagen').not.toBeNull();
  const c = m.cucarda!;
  expect(c.x - m.imagen.x, 'en el borde izquierdo de la imagen').toBeLessThan(m.imagen.w / 4);
  expect(c.y - m.imagen.y, 'en el borde superior de la imagen').toBeLessThan(m.imagen.h / 4);
  expect(c.x + c.w, 'no obstruye Favoritos').toBeLessThanOrEqual(m.favoritos.x);
  expect(m.colorTexto, 'la cucarda aplica un color de texto propio').toMatch(/^rgba?\(/);
  await home.capturarEvidencia(cp);
}

/** TC "SRP desde el buscador en Mobile": entrar a la SRP con Enter y ver la cucarda. */
async function casoSrpDesdeBuscador(page: Page, testData: Parameters<typeof token>[0], cp: string, ff: FormFactor) {
  test.setTimeout(180000);
  const sku = declarado(testData, 'SKU_CYBER');
  const pdp = await new PDPPage(page).abrir(sku);
  const termino = (await pdp.nombreDelProducto.innerText()).trim().split(' ').slice(0, 3).join(' ');
  const home = new HomePage(page);
  await home.goto();
  const buscador = new BuscadorModal(page, ff);
  await buscador.abrir();
  await buscador.escribir(termino);
  await page.keyboard.press('Enter');
  await page.waitForURL(/\/search\?q=/, { timeout: 30000 });
  await expect(ShelfProducto.todos(page).first()).toBeVisible({ timeout: 60000 });
  await page.waitForLoadState('networkidle', { timeout: 60000 }).catch(() => {});
  await home.capturarEvidencia(cp, 1, `resultados de "${termino}"`);
  const shelf = await shelfDelSku(page, sku);
  await home.capturarEvidencia(cp, 2, 'shelf del producto en la SRP', { elemento: shelf.root });
  const c = await afirmarCucardaEnEsquina(shelf, 'SRP');
  afirmarEstiloAplicado(c);
  expect(c.texto, 'texto de la cucarda').toBe('Cyber');
  await home.capturarEvidencia(cp, 3, `cucarda "${c.texto}" en dx ${c.dx} dy ${c.dy}`, { elemento: shelf.imagen.first() });
  await home.capturarEvidencia(cp);
}

/** Lee las cucardas de la PLP en un viewport, indexadas por SKU. */
async function cucardasPorSku(page: Page, url: string) {
  const plp = await abrirListado(page, url);
  const total = await ShelfProducto.todos(page).count();
  const mapa: Record<string, { texto: string; colorTexto: string; colorFondo: string; radio: string; ancho: number; alto: number; fontSize: string }> = {};
  for (let i = 0; i < total; i++) {
    const s = ShelfProducto.enIndice(page, i);
    await s.root.scrollIntoViewIfNeeded().catch(() => {});
    const cs = await s.cucardasDetalladas(true);
    if (!cs.length) continue;
    const src = (await s.imagen.first().getAttribute('src')) ?? `idx${i}`;
    const sku = src.match(/\/([0-9]+-[A-Z]+)-\d+\./)?.[1] ?? src;
    mapa[sku] = { texto: cs[0].texto, colorTexto: cs[0].colorTexto, colorFondo: cs[0].colorFondo, radio: cs[0].radio, ancho: cs[0].ancho, alto: cs[0].alto, fontSize: cs[0].fontSize };
  }
  return { plp, mapa };
}

/** TC "mismo contenido en Desktop y Mobile". */
async function casoMismoEnAmbosCanales(page: Page, browser: Browser, testData: Parameters<typeof token>[0], cp: string, esDesktop: boolean) {
  test.setTimeout(240000);
  const url = declarado(testData, 'PLP_URL');
  const vpDesktop = { width: 1280, height: 900 };
  const vpMobile = { width: 390, height: 844 };
  const ctxOtro = await browser.newContext({ viewport: esDesktop ? vpMobile : vpDesktop });
  try {
    const otra = await ctxOtro.newPage();
    const propio = await cucardasPorSku(page, url);
    await propio.plp.capturarEvidencia(cp, 1, esDesktop ? 'PLP en Desktop 1280x900' : 'PLP en Mobile 390x844');
    const ajeno = await cucardasPorSku(otra, url);
    await ajeno.plp.capturarEvidencia(cp, 2, esDesktop ? 'misma PLP en Mobile 390x844' : 'misma PLP en Desktop 1280x900');
    const d = esDesktop ? propio.mapa : ajeno.mapa;
    const m = esDesktop ? ajeno.mapa : propio.mapa;
    test.info().annotations.push({ type: 'cucardas', description: JSON.stringify({ desktop: d, mobile: m }) });
    const skus = Object.keys(d);
    expect(skus.length, 'la PLP declarada tiene productos con cucarda').toBeGreaterThan(0);
    expect(Object.keys(m).sort(), 'los mismos productos llevan cucarda en ambos canales').toEqual(skus.sort());
    for (const sku of skus) {
      expect(m[sku].texto, `texto de la cucarda de ${sku}`).toBe(d[sku].texto);
      expect(m[sku].colorTexto, `color de texto de ${sku}`).toBe(d[sku].colorTexto);
      expect(m[sku].colorFondo, `color de fondo de ${sku}`).toBe(d[sku].colorFondo);
    }
    // El tamaño se adapta al canal: la cucarda nunca excede el ancho de la imagen de su viewport.
    for (const sku of skus) expect(m[sku].ancho, `la cucarda de ${sku} cabe en Mobile`).toBeLessThanOrEqual(vpMobile.width / 2);
  } finally {
    await ctxOtro.close();
  }
  await new PLPCategoriaPage(page, rutaDe(url)).capturarEvidencia(cp);
}

/** TC "cucarda sobre imagen placeholder": se simula el fallo de la imagen del producto. */
async function casoSobrePlaceholder(page: Page, testData: Parameters<typeof token>[0], cp: string) {
  test.setTimeout(240000);
  const url = declarado(testData, 'PLP_URL');
  // Referencia: el estilo de la cucarda con imagen real.
  const real = await cucardasPorSku(page, url);
  const conImagen = Object.entries(real.mapa);
  expect(conImagen.length, 'la PLP declarada tiene productos con cucarda').toBeGreaterThan(0);
  const [skuRef, estiloRef] = conImagen[0];
  await real.plp.capturarEvidencia(cp, 1, `PLP con imagen real: cucarda "${estiloRef.texto}"`);
  // Se invalida la imagen de los productos: el shelf debe caer a su placeholder.
  await page.route(/\/[0-9]+-[A-Z]+-\d+\.(jpg|jpeg|png|webp)/i, (r) => r.abort());
  await page.goto(url);
  await expect(ShelfProducto.todos(page).first()).toBeVisible({ timeout: 60000 });
  await page.waitForLoadState('networkidle', { timeout: 60000 }).catch(() => {});
  const total = await ShelfProducto.todos(page).count();
  let hallada: ShelfProducto | null = null;
  for (let i = 0; i < total; i++) {
    const s = ShelfProducto.enIndice(page, i);
    await s.root.scrollIntoViewIfNeeded().catch(() => {});
    if ((await s.imagenNoDisponible.count()) > 0 && (await s.cucardasDetalladas()).some((c) => c.texto === estiloRef.texto)) {
      hallada = s;
      break;
    }
  }
  expect(hallada, `un producto con cucarda "${estiloRef.texto}" (${skuRef}) muestra el placeholder de imagen y conserva su cucarda`).not.toBeNull();
  await hallada!.root.scrollIntoViewIfNeeded();
  await expect(hallada!.imagenNoDisponible.first(), 'la imagen muestra el placeholder').toBeVisible();
  await real.plp.capturarEvidencia(cp, 2, 'shelf con placeholder y cucarda', { elemento: hallada!.root });
  const c = await afirmarCucardaEnEsquina(hallada!, 'sobre el placeholder');
  expect(c.texto, 'mismo texto que sobre la imagen real').toBe(estiloRef.texto);
  expect(c.colorTexto, 'mismo color de texto que sobre la imagen real').toBe(estiloRef.colorTexto);
  expect(c.colorFondo, 'mismo color de fondo que sobre la imagen real').toBe(estiloRef.colorFondo);
  await real.plp.capturarEvidencia(cp, 3, 'cucarda sobre el placeholder', { elemento: hallada!.root });
  await real.plp.capturarEvidencia(cp);
}

test.describe('B2C-65 — Cucarda en la shelf de producto', () => {
  // --------------------------------------------------------------- Desktop 1280x900
  test.describe('Desktop 1280x900', () => {
    test.use(DESKTOP_1280);

    test('TC-65-D-002 · Cucarda visible en SRP (buscador) con estilo configurado (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-65-D-002';
      test.setTimeout(180000);

      // Pasos 1 y 2: el término de búsqueda del caso viaja dentro de {SRP_URL}, que es lo que la
      // fila declara como data; abrirla es entrar a la SRP con ese término ya aplicado.
      const srp = await abrirListado(page, declarado(testData, 'SRP_URL'));
      await srp.capturarEvidencia(cp, 1, 'resultados de busqueda del termino declarado');

      // Paso 3: localizar el producto con cucarda entre los resultados.
      const shelf = await primerShelfConCucarda(page);
      expect(shelf, 'el SRP declarado devuelve al menos un producto con cucarda').not.toBeNull();
      await shelf!.root.scrollIntoViewIfNeeded();
      await srp.capturarEvidencia(cp, 3, 'shelf con cucarda en los resultados', { elemento: shelf!.root });

      const cucardas = await shelf!.cucardasDetalladas();
      expect(cucardas.length, 'el shelf muestra una sola cucarda').toBe(1);
      const cucarda = cucardas[0];

      // Paso 4: esquina superior izquierda de la imagen.
      const imagen = await shelf!.caja(shelf!.imagen.first());
      expect(cucarda.dx, 'la cucarda arranca en el cuarto izquierdo de la imagen').toBeLessThan(imagen.width / 4);
      expect(cucarda.dy, 'la cucarda arranca en el cuarto superior de la imagen').toBeLessThan(imagen.height / 4);
      expect(cucarda.solapaFavoritos, 'la cucarda no se cruza con el botón de favoritos').toBe(false);
      await srp.capturarEvidencia(cp, 4, `cucarda en dx ${cucarda.dx} dy ${cucarda.dy} de la imagen`, {
        elemento: shelf!.imagen.first(),
      });

      // Paso 5: texto y colores. Los valores exactos configurados en BM no son legibles desde el
      // storefront —el SSR no expone ningún atributo Label_*—, así que lo que el caso puede
      // afirmar es que la cucarda lleva texto y un par de colores propios aplicados, y que ese
      // estilo es el mismo en todos los productos que la muestran. Un estilo que variara entre
      // shelves sí delataría que no viene de una configuración única.
      expect(cucarda.texto, 'la cucarda lleva el texto configurado').not.toBe('');
      expect(cucarda.colorTexto, 'la cucarda aplica un color de texto propio').toMatch(/^rgba?\(/);
      expect(cucarda.colorFondo, 'la cucarda aplica un color de fondo propio').toMatch(/^rgb\(/);
      expect(cucarda.colorFondo, 'el fondo de la cucarda no es transparente').not.toMatch(/rgba\(0, 0, 0, 0\)/);
      expect(cucarda.colorTexto, 'el texto y el fondo de la cucarda no son del mismo color').not.toBe(
        cucarda.colorFondo,
      );

      const estilos = new Set<string>();
      const total = await ShelfProducto.todos(page).count();
      for (let i = 0; i < total; i++) {
        for (const c of await ShelfProducto.enIndice(page, i).cucardasDetalladas()) {
          estilos.add(`${c.texto}|${c.colorTexto}|${c.colorFondo}|${c.radio}|${c.fontSize}`);
        }
      }
      expect(
        [...estilos],
        'todas las cucardas del SRP comparten texto y colores, como corresponde a una única configuración',
      ).toHaveLength(1);

      await srp.capturarEvidencia(cp);
    });

    test('TC-65-D-005 · Producto sin Label_Texto no muestra cucarda ni espacio vacío (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-65-D-005';
      test.setTimeout(180000);

      // Paso 1: la PLP declarada.
      const plp = await abrirListado(page, declarado(testData, 'PLP_URL'));
      await plp.capturarEvidencia(cp, 1, 'PLP declarada');

      // Paso 2: el producto que la fila declara como "SKU sin cucarda".
      const sku = declarado(testData, 'SKU_PRECIO_MIEMBRO');
      const shelf = ShelfProducto.porSku(page, sku);
      await expect(shelf.root, `el SKU declarado ${sku} está en la PLP`).toHaveCount(1);
      await shelf.root.scrollIntoViewIfNeeded();
      await plp.capturarEvidencia(cp, 2, `shelf del SKU declarado ${sku}`, { elemento: shelf.root });

      // Paso 3: ninguna cucarda sobre la imagen.
      expect(await shelf.cucardasDetalladas(), 'no se muestra ninguna cucarda sobre la imagen').toEqual([]);

      // Paso 4: el espacio no queda reservado. No basta con que no haya texto: un slot reservado y
      // vacío también dejaría hueco. Lo que lo distingue es que la imagen llene su contenedor y que
      // no quede ningún nodo vacío con recuadro visible dentro de esa área.
      const ocupacion = await shelf.ocupacionDeLaImagen();
      expect(ocupacion.huecosVisibles, 'no queda ningún placeholder vacío sobre la imagen').toBe(0);
      expect(ocupacion.contenedor.ancho, 'la imagen ocupa todo el ancho de su contenedor').toBe(
        ocupacion.imagen.ancho,
      );
      expect(ocupacion.contenedor.alto, 'la imagen ocupa todo el alto de su contenedor').toBe(ocupacion.imagen.alto);
      expect(ocupacion.sobrepuestos, 'sobre la imagen no queda nada salvo el botón de favoritos').toEqual([]);
      await plp.capturarEvidencia(cp, 4, 'imagen sin cucarda ni hueco reservado', {
        elemento: shelf.imagen.first(),
      });

      await plp.capturarEvidencia(cp);
    });

    test('TC-65-D-001 · Cucarda visible en PLP con posición y estilo configurados (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-65-D-001';
      await casoCucardaEnPLP(page, testData, cp, 'Cyber');
    });

    test('TC-65-D-004 · Máximo 1 cucarda por producto — no se superpone con botón Favoritos (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-65-D-004';
      await casoMaximoUnaCucarda(page, testData, cp);
    });

    test('TC-65-D-006 · Cucarda visible en estado normal (producto disponible, no en carro) (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-65-D-006';
      await casoEstadoNormal(page, testData, cp, true);
    });

    test('TC-65-D-007 · Cucarda visible en estado \'en carro\' (controles de cantidad visibles) (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-65-D-007';
      await casoEstadoEnCarro(page, testData, cp, true);
    });

    test('TC-65-D-009 · Texto de cucarda >20 caracteres se trunca con \'...\' en Desktop (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-65-D-009';
      await casoTruncado(page, testData, cp, 20);
    });

    test('TC-65-D-010 · Cucarda visible en shelf simplificada dentro de modal de buscador (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-65-D-010';
      await casoModalBuscador(page, testData, cp, 'desktop', true);
    });

    test('TC-65-D-011 · Cucarda muestra mismo texto, colores e ícono en Desktop y Mobile (Desktop)', async ({ page, browser, testData }) => {
      const cp = 'TC-65-D-011';
      await casoMismoEnAmbosCanales(page, browser, testData, cp, true);
    });

    test('TC-65-D-012 · Cucarda visible sobre imagen placeholder cuando el producto no tiene imagen válida (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-65-D-012';
      await casoSobrePlaceholder(page, testData, cp);
    });

    test('TC-65-D-013 · Cucarda visible en PLP para usuario logueado (Desktop)', async ({ page, testData }) => {
      const cp = 'TC-65-D-013';
      await iniciarSesionComprador(page, testData);
      await casoCucardaEnPLP(page, testData, cp, 'Cyber');
    });

    test('TC-65-D-014 · Cucarda consistente en todos los estados de la shelf para usuario logueado (Desktop)', async ({ page, testData }) => {
      await casoEstadosLogueado(page, testData, 'TC-65-D-014');
    });
  });

  // --------------------------------------------------------------- Mobile 390x844
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-65-M-005 · Producto sin Label_Texto no muestra cucarda ni espacio vacío (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-65-M-005';
      test.setTimeout(180000);

      const plp = await abrirListado(page, declarado(testData, 'PLP_URL'));
      await plp.capturarEvidencia(cp, 1, 'PLP declarada en Mobile');

      const sku = declarado(testData, 'SKU_PRECIO_MIEMBRO');
      const shelf = ShelfProducto.porSku(page, sku);
      await expect(shelf.root, `el SKU declarado ${sku} está en la PLP`).toHaveCount(1);
      await shelf.root.scrollIntoViewIfNeeded();
      await plp.capturarEvidencia(cp, 2, `shelf del SKU declarado ${sku}`, { elemento: shelf.root });

      expect(await shelf.cucardasDetalladas(), 'no se muestra ninguna cucarda sobre la imagen').toEqual([]);

      const ocupacion = await shelf.ocupacionDeLaImagen();
      expect(ocupacion.huecosVisibles, 'no queda ningún placeholder vacío sobre la imagen').toBe(0);
      expect(ocupacion.contenedor.ancho, 'la imagen ocupa todo el ancho de su contenedor').toBe(
        ocupacion.imagen.ancho,
      );
      expect(ocupacion.contenedor.alto, 'la imagen ocupa todo el alto de su contenedor').toBe(ocupacion.imagen.alto);
      expect(ocupacion.sobrepuestos, 'sobre la imagen no queda nada salvo el botón de favoritos').toEqual([]);
      await plp.capturarEvidencia(cp, 3, 'imagen sin cucarda ni hueco reservado', {
        elemento: shelf.imagen.first(),
      });

      await plp.capturarEvidencia(cp);
    });

    test('TC-65-M-001 · Cucarda visible en PLP con posición y estilo configurados (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-65-M-001';
      await casoCucardaEnPLP(page, testData, cp, 'Cyber');
    });

    test('TC-65-M-002 · Cucarda visible en SRP (buscador) con estilo configurado (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-65-M-002';
      await casoSrpDesdeBuscador(page, testData, cp, 'mobile');
    });

    test('TC-65-M-004 · Máximo 1 cucarda por producto — no se superpone con botón Favoritos (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-65-M-004';
      await casoMaximoUnaCucarda(page, testData, cp);
    });

    test('TC-65-M-006 · Cucarda visible en estado normal (producto disponible, no en carro) (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-65-M-006';
      await casoEstadoNormal(page, testData, cp, false);
    });

    test('TC-65-M-007 · Cucarda visible en estado \'en carro\' (controles de cantidad visibles) (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-65-M-007';
      await casoEstadoEnCarro(page, testData, cp, false);
    });

    test('TC-65-M-009 · Texto de cucarda >15 caracteres se trunca con \'...\' en Mobile (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-65-M-009';
      await casoTruncado(page, testData, cp, 15);
    });

    test('TC-65-M-010 · Cucarda visible en shelf simplificada dentro de modal de buscador (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-65-M-010';
      await casoModalBuscador(page, testData, cp, 'mobile', false);
    });

    test('TC-65-M-011 · Cucarda muestra mismo texto, colores e ícono en Desktop y Mobile (Mobile)', async ({ page, browser, testData }) => {
      const cp = 'TC-65-M-011';
      await casoMismoEnAmbosCanales(page, browser, testData, cp, false);
    });

    test('TC-65-M-012 · Cucarda visible sobre imagen placeholder cuando el producto no tiene imagen válida (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-65-M-012';
      await casoSobrePlaceholder(page, testData, cp);
    });

    test('TC-65-M-013 · Cucarda visible en PLP para usuario logueado (Mobile)', async ({ page, testData }) => {
      const cp = 'TC-65-M-013';
      await iniciarSesionComprador(page, testData);
      await casoCucardaEnPLP(page, testData, cp, 'Cyber');
    });

    test('TC-65-M-014 · Cucarda consistente en todos los estados de la shelf para usuario logueado (Mobile)', async ({ page, testData }) => {
      await casoEstadosLogueado(page, testData, 'TC-65-M-014');
    });
  });
});
