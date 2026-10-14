import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { NavBar } from './pages/NavBar';
import { HomeScreen } from './pages/HomeScreen';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { SinCoberturaModal } from './pages/SinCoberturaModal';
import { AgotarseModal } from './pages/AgotarseModal';
import { DetalleDireccionScreen } from './pages/DetalleDireccionScreen';
import { tolerante } from './support/tolerante';
import { agregarAlCarro, arrancarInvitado, calle, elegirDireccion, invitadoConDireccion, visibleEn } from './support/entregaApp';

/**
 * B2C-123 — Sin cobertura (app nativa): el modal "Aún no llegamos a esta dirección".
 *
 * Las filas dicen "Viewport: App iOS/Android" sin "Plataforma:"; esta corrida (2026-10-14) certifica
 * **solo Android** con el build v1.0.7 ({APP_BUILD}) en el emulador local. iOS queda Pendiente.
 *
 * Quedan sin `test()`: 002 y 009 ({USER_AUTH_001} es un correo y en v1.0.7 el login solo acepta RUT),
 * 010, 011 y 012 ({COMPRADOR_DIRECCION_SIN_COBERTURA_USER} no está registrada en DEV; 012 además con
 * tokens en TBD), 008 (el carro previo pide una dirección con cobertura que la fila no declara).
 */

const PLATAFORMA = 'Android' as const;
const MENSAJE =
  'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc';
const TOAST = 'No tenemos cobertura para la dirección actual, seleccione otra dirección';

function escapar(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

test.describe(`B2C-123 — Sin cobertura (${PLATAFORMA})`, () => {
  test.describe.configure({ timeout: 360000 });

  /** Pasos 1–6: invitado (sin dirección o con la del TC) → Store Locator → {DIRECCION_SIN_COBERTURA} → "Aún no llegamos". */
  async function hastaSinCobertura(screen: any, p: any, testData: any, cp: string) {
    const dir = token(testData, 'DIRECCION_SIN_COBERTURA')!;
    const detalle = await elegirDireccion(screen, p, dir, new RegExp(`^${escapar(calle(dir))}`, 'i'));
    await detalle.capturarEvidencia(cp, 5, 'Detalles de la dirección sin cobertura');
    await tolerante(() => detalle.botonConfirmar.tap());
    const modal = new SinCoberturaModal(screen, p);
    await tolerante(() => expect(modal.titulo, 'se abre «Aún no llegamos a esta dirección»').toBeVisible({ timeout: 30000 }));
    await modal.capturarEvidencia(cp, 6, 'modal Aún no llegamos a esta dirección');
    return modal;
  }

  test(`TC-B2C123-APP-001 · Dirección nueva fuera de zona muestra el modal Aún no llegamos con sus opciones [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C123-APP-001';
    await arrancarInvitado(screen, device, bundleId!, p);
    await new HomeScreen(screen, p).capturarEvidencia(cp, 2, 'Home como invitado');
    const modal = await hastaSinCobertura(screen, p, testData, cp);
    // La app cierra el mensaje con punto; el esperado no lo trae: se acepta el punto final.
    await tolerante(() => expect(modal.mensaje, 'mensaje del modal').toHaveText(new RegExp(`^${escapar(MENSAJE)}\\.?$`)));
    await tolerante(() => expect(modal.continuar, '"Continuar con esta dirección"').toBeVisible());
    await tolerante(() => expect(modal.cambiarMetodo, '"Cambiar método de entrega"').toBeVisible());
    await modal.capturarEvidencia(cp);
  });

  test(`TC-B2C123-APP-003 · Continuar sin carro setea la dirección con la etiqueta Despacho sin cobertura [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C123-APP-003';
    const tabs = await arrancarInvitado(screen, device, bundleId!, p);
    const modal = await hastaSinCobertura(screen, p, testData, cp);
    await tolerante(() => modal.continuar.tap());
    const nav = new NavBar(screen, p);
    const dir = token(testData, 'DIRECCION_SIN_COBERTURA')!;
    await tolerante(() => expect(nav.metodoDeEntrega, 'la dirección queda seteada').toContainText(calle(dir), { timeout: 45000 }));
    await tolerante(() => expect(nav.metodoDeEntrega, 'etiqueta «Despacho sin cobertura»').toContainText('Despacho sin cobertura'));
    await new HomeScreen(screen, p).capturarEvidencia(cp, 7, 'Home con Despacho sin cobertura');
    // Paso 9: navegar a otra página (Categorías) y volver; la etiqueta se mantiene.
    await tolerante(() => tabs.tab('Categorías').tap());
    await new HomeScreen(screen, p).capturarEvidencia(cp, 9, 'Categorías');
    await tolerante(() => tabs.tab('Home').tap());
    await tolerante(() => expect(nav.metodoDeEntrega, 'la etiqueta se mantiene al volver').toContainText('Despacho sin cobertura', { timeout: 20000 }));
    await new HomeScreen(screen, p).capturarEvidencia(cp);
  });

  test(`TC-B2C123-APP-004 · Continuar con carro y otra tienda abastecedora muestra el modal de agotarse [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C123-APP-004';
    const tabs = await invitadoConDireccion(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await agregarAlCarro(screen, p, tabs, token(testData, 'SKU_VALID_001')!);
    await new HomeScreen(screen, p).capturarEvidencia(cp, 2, 'Home con dirección y carro');
    const modal = await hastaSinCobertura(screen, p, testData, cp);
    await tolerante(() => modal.continuar.tap());
    const agotarse = new AgotarseModal(screen, p);
    await tolerante(() => expect(agotarse.titulo, 'se muestra «Algunos productos podrían agotarse»').toBeVisible({ timeout: 45000 }));
    await agotarse.capturarEvidencia(cp);
  });

  test(`TC-B2C123-APP-005 · Cambiar método de entrega vuelve al modal Elige tu método de entrega [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C123-APP-005';
    await arrancarInvitado(screen, device, bundleId!, p);
    const modal = await hastaSinCobertura(screen, p, testData, cp);
    await tolerante(() => modal.cambiarMetodo.tap());
    await tolerante(() => expect(modal.titulo, 'el modal «Aún no llegamos» se cierra').toBeHidden({ timeout: 15000 }));
    await tolerante(() => expect(new MetodoEntregaModal(screen, p).titulo, 'se muestra «Elige tu método de entrega»').toBeVisible({ timeout: 15000 }));
    await modal.capturarEvidencia(cp);
  });

  test(`TC-B2C123-APP-006 · Una nueva dirección con cobertura se setea y vuelve a la página de origen [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C123-APP-006';
    await arrancarInvitado(screen, device, bundleId!, p);
    // Paso 1: la PLP de la app es el listado de "Mostrar todo" de "Los más vendidos" ({PLP_URL} es la de la web).
    const plp = await tolerante(() => new HomeScreen(screen, p).tapMostrarTodo());
    await tolerante(() => plp.waitUntilReady());
    await plp.capturarEvidencia(cp, 1, 'PLP');
    const nav = new NavBar(screen, p);
    await tolerante(() => expect(nav.metodoDeEntrega, 'la PLP muestra el Store Locator').toBeVisible({ timeout: 15000 }));
    const modal = await hastaSinCobertura(screen, p, testData, cp);
    await tolerante(() => modal.cambiarMetodo.tap());
    const dir = token(testData, 'DIRECCION_DESPACHO_001')!;
    const metodo = await tolerante(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await metodo.elegirSugerencia(dir, new RegExp(`^${escapar(calle(dir))}`, 'i'));
    const detalle = await tolerante(() => new DetalleDireccionScreen(screen, p).waitUntilReady());
    await tolerante(() => detalle.botonConfirmar.tap());
    await tolerante(() => expect(nav.metodoDeEntrega, 'el Store Locator muestra la dirección').toContainText(calle(dir), { timeout: 45000 }));
    await tolerante(() => expect(plp.readyLocator, 'vuelve a la PLP').toBeVisible({ timeout: 15000 }));
    await plp.capturarEvidencia(cp);
  });

  test(`TC-B2C123-APP-007 · Con dirección sin cobertura agregar un producto se bloquea con un toast [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C123-APP-007';
    const tabs = await arrancarInvitado(screen, device, bundleId!, p);
    const modal = await hastaSinCobertura(screen, p, testData, cp);
    await tolerante(() => modal.continuar.tap());
    const nav = new NavBar(screen, p);
    await tolerante(() => expect(nav.metodoDeEntrega, 'precondición: Despacho sin cobertura').toContainText('Despacho sin cobertura', { timeout: 45000 }));
    const home = await tolerante(() => new HomeScreen(screen, p).waitUntilReady());
    await home.capturarEvidencia(cp, 2, 'Home con Despacho sin cobertura');
    const sku = token(testData, 'SKU_VALID_001')!;
    await tolerante(() => home.mostrarProducto(sku));
    await tolerante(() => home.botonAgregar(sku).tap());
    const toast = modal.toast(/^(cambia tu direcci[oó]n|no tenemos cobertura)/i);
    await tolerante(() => expect(toast, 'se muestra un toast de error').toBeVisible({ timeout: 15000 }));
    await home.capturarEvidencia(cp, 3, 'toast al agregar');
    expect(await visibleEn(tabs.floatingPill, 3000), `${sku} no se agrega al carro`).toBe(false);
    await tolerante(() => expect(screen.getByRole('button', { name: 'Cerrar aviso' }).last(), 'el toast tiene X de cierre').toBeVisible());
    await tolerante(() => expect(toast, 'texto del toast').toHaveText(TOAST));
    await home.capturarEvidencia(cp);
  });

  test(`TC-B2C123-APP-013 · Seleccionar una tienda de retiro sin cobertura de despacho muestra el modal Aún no llegamos [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C123-APP-013';
    await arrancarInvitado(screen, device, bundleId!, p);
    await tolerante(() => new NavBar(screen, p).tapMetodoDeEntrega());
    const metodo = await tolerante(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await tolerante(() => metodo.pestanaRetiro.tap());
    const tienda = token(testData, 'TIENDA_RETIRO_SIN_COBERTURA')!;
    // El buscador filtra por localidad: "Unimarc Los Lagos II" → "Los Lagos".
    await metodo.elegirTienda(tienda, tienda.replace(/^unimarc\s+/i, '').replace(/\s+[IVX]+$/, ''));
    const modal = new SinCoberturaModal(screen, p);
    const retiro = await visibleEn(modal.tituloRetiro, 20000);
    await modal.capturarEvidencia(cp, 7, retiro ? 'modal Esta tienda aún no está disponible para retiro' : 'tras confirmar la tienda');
    await tolerante(() => expect(modal.titulo, 'se muestra «Aún no llegamos a esta dirección»').toBeVisible({ timeout: 10000 }));
    await tolerante(() => expect(modal.mensaje).toHaveText(new RegExp(`^${escapar(MENSAJE)}\\.?$`)));
    await tolerante(() => expect(modal.continuar).toBeVisible());
    await tolerante(() => expect(modal.cambiarMetodo).toBeVisible());
    await modal.capturarEvidencia(cp);
  });
});
