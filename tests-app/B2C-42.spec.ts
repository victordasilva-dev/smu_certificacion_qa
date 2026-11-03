import * as fs from 'fs';
import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import type { Plataforma } from '../tests/support/rutasEvidencia';
import { TabBar } from './pages/TabBar';
import { CarroScreen } from './pages/CarroScreen';
import { tolerante } from './support/tolerante';
import { sesion, nodos, tiene } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';
import { agregarDesdePdp, abrirCarro } from './support/invitadoConCarro';
import { agregarAlCarro, volverAlHome, arrancarInvitado } from './support/entregaApp';
import { NavBar } from './pages/NavBar';

/**
 * B2C-42 — Contratación y renovación de la membresía desde el carro (app nativa).
 * Solo Android (Pixel 6, `emulator-5556`), build v1.0.1, login por correo + OTP.
 *
 * Qué muestra la v1.0.1 (verificado el 2026-10-26): el banner del carro dice "Ahorra $N siendo
 * Diamante · Prueba y disfruta 15 días gratis · Lo quiero", y el modal (`membership-contract`) se
 * titula "Socio Diamante · Prueba gratuita". El ambiente de desarrollo no devuelve planes: el modal
 * muestra `membership-contract-no-plans` ("En este momento no hay planes disponibles para
 * contratar…"), sin selector de 3 / 6 meses y con el CTA deshabilitado. Los TC que dependen de
 * elegir un plan o de contratar no pueden verificarse en ese estado: el test captura el modal, lo
 * anota (`bloqueado`) y termina; el veredicto (Bloqueado, no Rechazado) lo decide la corrida.
 *
 * Cubiertos aquí: 001–006, 012 y 022. Sin `test()`:
 *   007, 008, 009, 013, 014, 015  la fila declara {TARJETA_CREDITO_001} como tarjeta guardada y la
 *                                 cuenta tiene guardada otra (VISA ****6623); 007 pide una cuenta sin tarjetas
 *   010, 011                      agregan una tarjeta a la cuenta
 *   016–019                       contratar o renovar exige un plan y el CTA no se habilita sin planes
 *   020, 021                      {HERRAMIENTA_PROXY_APP} y {MEMBRESIA_API_ENDPOINT} sin valor
 *   023                           {DIAS_PRUEBA_MEMBRESIA} sin valor
 */

const PLATAFORMA = 'Android' as const;
const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const SALUDO_NUEVO = /Karl|Comprador/i;
const SALUDO_EXPIRADO = /Segundo|Expirad|Karl/i;

type Cuenta = 'nuevo' | 'expirado';
const correo = (td: any, c: Cuenta) => token(td, c === 'nuevo' ? 'COMPRADOR_SIN_MEMBRESIA_USER' : 'COMPRADOR_MEMBRESIA_EXPIRADA_USER')!;

/** El nodo con ese testID del árbol de accesibilidad, con su estado (isChecked, isEnabled…). */
async function nodo(screen: Screen, id: string): Promise<any | null> {
  const hallados: any[] = [];
  const rec = (n: any) => {
    if ((n.identifier ?? n.resourceId) === id) hallados.push(n);
    for (const c of n.children ?? []) rec(c);
  };
  for (const n of (await tol(() => screen.viewTree())) as any[]) rec(n);
  return hallados[0] ?? null;
}

/** Cuenta con la que quedó la sesión de la app (la marca la escribe el propio spec tras iniciar sesión). */
const MARCA_CUENTA = '.qa/run/cuenta-membresia.txt';

/**
 * Deja la sesión en la cuenta pedida. La cuenta "nueva" y la "expirada" son alias del mismo buzón y
 * pueden compartir nombre en el saludo, así que no se decide por el saludo: se recuerda con qué cuenta
 * se inició sesión y, si cambia (o no se sabe), se cierra sesión y se vuelve a entrar por OTP.
 */
async function asegurarCuenta(screen: Screen, device: any, bundleId: string, p: Plataforma, cp: string, td: any, cuenta: Cuenta): Promise<void> {
  let actual = '';
  try { actual = fs.readFileSync(MARCA_CUENTA, 'utf-8').trim(); } catch { /* sin marca: se fuerza el cambio */ }
  if (actual !== cuenta) {
    // Cerrar sesión por la pantalla de Mi cuenta no es fiable en la v1.0.1: se cierra la app y se borran
    // sus datos (lo mismo que hace arrancarInvitado), lo que deja la app sin sesión.
    await arrancarInvitado(screen, device, bundleId, p);
  }
  await asegurarApp(screen);
  await sesion(screen, p, cp, correo(td, cuenta), /./);
  fs.mkdirSync('.qa/run', { recursive: true });
  fs.writeFileSync(MARCA_CUENTA, cuenta);
}

/** Deja la sesión de la cuenta, el SKU en el carro y el carro abierto. */
async function abrirCarroConSku(screen: Screen, device: any, bundleId: string, p: Plataforma, cp: string, td: any, cuenta: Cuenta): Promise<CarroScreen> {
  await asegurarCuenta(screen, device, bundleId, p, cp, td, cuenta);
  await tol(() => screen.getByTestId('tab-Home').tap());
  await dormir(3000);
  const sku = token(td, 'SKU_PRECIO_MIEMBRO')!;
  const tabs = new TabBar(screen, p);
  // La píldora del carro tarda en pintarse: se espera hasta 15 s antes de concluir que el carro está vacío.
  let conCarro = false;
  for (let i = 0; i < 6 && !conCarro; i++) {
    conCarro = await tabs.floatingPill.isVisible().catch(() => false);
    if (!conCarro) await dormir(2500);
  }
  if (!conCarro) await agregarDesdePdp(screen, p, sku);
  let carro = await abrirCarro(screen, p);
  await dormir(2500);
  // Si el carro no trae el SKU de la fila (otro producto de una corrida anterior), se agrega.
  // El carro tarda en pintar sus ítems: se espera hasta 15 s antes de concluir que falta el SKU.
  let enCarro = false;
  for (let i = 0; i < 6 && !enCarro; i++) {
    enCarro = await screen.getByTestId(`cart-item-${sku}`).isVisible().catch(() => false);
    if (!enCarro) await dormir(2500);
  }
  if (!enCarro) {
    await tol(() => screen.goBack());
    await agregarDesdePdp(screen, p, sku);
    carro = await abrirCarro(screen, p);
    await dormir(2500);
  }
  return carro;
}

/** Toca el CTA del banner y espera el modal de contratación. */
async function abrirModal(screen: Screen, cta: 'Lo quiero' | 'Renovar'): Promise<void> {
  const boton = screen.getByText(cta).first();
  await tol(() => expect(boton, `banner de membresía con "${cta}"`).toBeVisible({ timeout: 30000 }));
  await tol(() => boton.tap());
  await tol(() => expect(screen.getByTestId('membership-contract'), 'modal de contratación').toBeVisible({ timeout: 30000 }));
  await dormir(2000);
}

/** ¿El ambiente devolvió planes? Sin planes el modal muestra el aviso `membership-contract-no-plans`. */
async function sinPlanes(screen: Screen): Promise<boolean> {
  return (await nodo(screen, 'membership-contract-no-plans')) !== null;
}

function anotarBloqueo(cp: string, extra: string): void {
  test.info().annotations.push({
    type: 'bloqueado',
    description: `${cp}: el ambiente no devuelve planes ("En este momento no hay planes disponibles para contratar"). ${extra}`,
  });
}

async function observarModal(screen: Screen): Promise<string> {
  const n = await nodos(screen);
  const claves = n.map((x) => x.label).filter((l) => /Socio Diamante|Prueba gratuita|Renovar|Pagar membres|planes|cobro|tarjetas|\*\*\*\*|Acepto|Comenzar|En otro momento|Cambiar|gratis/i.test(l));
  return [...new Set(claves)].join(' | ');
}

test.describe.configure({ timeout: 900000 });
test.describe(`B2C-42 — Membresía desde el carro (${PLATAFORMA})`, () => {
  test(`TC-B2C42-APP-001 · "Lo quiero" abre el modal de contratación con la oferta de prueba [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C42-APP-001';
    const carro = await abrirCarroConSku(screen, device, bundleId!, p, cp, testData, 'nuevo');
    await carro.capturarEvidencia(cp, 2, 'carro con el banner de membresía');
    await abrirModal(screen, 'Lo quiero');
    const visto = await observarModal(screen);
    test.info().annotations.push({ type: 'modal', description: visto });
    await carro.capturarEvidencia(cp, 4, 'modal de contratación');
    if (await sinPlanes(screen)) {
      anotarBloqueo(cp, 'El modal se titula "Socio Diamante · Prueba gratuita" (el TC espera "Pagar membresia"), sin selector de planes ni texto de cobro; el CTA queda deshabilitado.');
      return;
    }
    expect(tiene(await nodos(screen), /Pagar membres/i), 'título "Pagar membresia"').toBe(true);
    expect((await nodo(screen, 'membership-contract-cta'))?.isEnabled, 'CTA deshabilitado').toBe(false);
    expect((await nodo(screen, 'membership-contract-terms'))?.isChecked, 'TyC desactivado').toBe(false);
  });

  test(`TC-B2C42-APP-003 · Para un cliente Nuevo cada plan muestra ícono, 15 días gratis y precio [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C42-APP-003';
    const carro = await abrirCarroConSku(screen, device, bundleId!, p, cp, testData, 'nuevo');
    await abrirModal(screen, 'Lo quiero');
    await carro.capturarEvidencia(cp, 4, 'modal de contratación');
    test.info().annotations.push({ type: 'modal', description: await observarModal(screen) });
    if (await sinPlanes(screen)) { anotarBloqueo(cp, 'No hay planes de 3 ni de 6 meses que revisar.'); return; }
    const n = await nodos(screen);
    expect(tiene(n, /3 meses/i) && tiene(n, /6 meses/i), 'planes de 3 y 6 meses').toBe(true);
    expect(tiene(n, /15 d[ií]as gratis/i), 'texto "15 días gratis"').toBe(true);
  });

  test(`TC-B2C42-APP-005 · Seleccionar el plan de 3 meses actualiza el precio a $14.990 [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C42-APP-005';
    const carro = await abrirCarroConSku(screen, device, bundleId!, p, cp, testData, 'nuevo');
    await abrirModal(screen, 'Lo quiero');
    await carro.capturarEvidencia(cp, 4, 'modal de contratación');
    test.info().annotations.push({ type: 'modal', description: await observarModal(screen) });
    if (await sinPlanes(screen)) { anotarBloqueo(cp, 'No hay plan de 3 meses que seleccionar.'); return; }
    await tol(() => screen.getByText(/3 meses/i).first().tap());
    await dormir(1500);
    expect(tiene(await nodos(screen), /\$14\.990/), 'resumen con $14.990').toBe(true);
  });

  test(`TC-B2C42-APP-006 · Seleccionar el plan de 6 meses actualiza el precio a $24.990 [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C42-APP-006';
    const carro = await abrirCarroConSku(screen, device, bundleId!, p, cp, testData, 'nuevo');
    await abrirModal(screen, 'Lo quiero');
    await carro.capturarEvidencia(cp, 4, 'modal de contratación');
    test.info().annotations.push({ type: 'modal', description: await observarModal(screen) });
    if (await sinPlanes(screen)) { anotarBloqueo(cp, 'No hay plan de 6 meses que seleccionar.'); return; }
    await tol(() => screen.getByText(/6 meses/i).first().tap());
    await dormir(1500);
    expect(tiene(await nodos(screen), /\$24\.990/), 'resumen con $24.990').toBe(true);
  });

  test(`TC-B2C42-APP-012 · Activar el toggle de TyC lo deja marcado como aceptado [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C42-APP-012';
    const carro = await abrirCarroConSku(screen, device, bundleId!, p, cp, testData, 'nuevo');
    await abrirModal(screen, 'Lo quiero');
    const antes = await nodo(screen, 'membership-contract-terms');
    expect(antes, 'checkbox de términos y condiciones').not.toBeNull();
    expect(antes.isChecked, 'precondición: TyC desactivado').toBe(false);
    await carro.capturarEvidencia(cp, 4, 'TyC sin aceptar');
    await tol(() => screen.getByTestId('membership-contract-terms').tap());
    await dormir(1500);
    const despues = await nodo(screen, 'membership-contract-terms');
    test.info().annotations.push({ type: 'TyC', description: `antes: ${antes.isChecked}; después: ${despues?.isChecked}` });
    await carro.capturarEvidencia(cp, 6, 'TyC aceptados');
    expect(despues?.isChecked, 'el toggle de TyC queda marcado como aceptado').toBe(true);
    await carro.capturarEvidencia(cp);
  });

  test(`TC-B2C42-APP-022 · Sin ahorro de membresía suficiente no se muestra el banner [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C42-APP-022';
    const sku = token(testData, 'SKU_VALID_001')!;
    const skuMiembro = token(testData, 'SKU_PRECIO_MIEMBRO')!;
    const carro = await abrirCarroConSku(screen, device, bundleId!, p, cp, testData, 'nuevo');
    // El carro debe quedar solo con {SKU_VALID_001}: se quita el producto de precio de miembro.
    await tol(() => screen.getByText(/^Eliminar /).first().tap());
    await dormir(3000);
    for (const confirmar of ['Eliminar', 'Aceptar', 'Sí, eliminar']) {
      const b = screen.getByRole('button', { name: confirmar });
      if (await b.isVisible().catch(() => false)) { await tol(() => b.tap()); await dormir(2500); break; }
    }
    test.info().annotations.push({ type: 'carro', description: `quitado ${skuMiembro}; textos: ${(await nodos(screen)).map((x) => x.label).filter((l) => /un\.|Mi carro|carro est|Lo quiero|Diamante/i.test(l)).join(' | ')}` });
    // {SKU_VALID_001} se agrega desde "Los más vendidos" del Home (no aparece buscándolo por SKU).
    await volverAlHome(screen, new NavBar(screen, p));
    await agregarAlCarro(screen, p, new TabBar(screen, p), sku);
    await abrirCarro(screen, p);
    await dormir(3000);
    await carro.capturarEvidencia(cp, 4, 'carro solo con el producto sin precio de miembro');
    const n = await nodos(screen);
    test.info().annotations.push({ type: 'carro final', description: n.map((x) => x.label).filter((l) => /un\.|Diamante|Lo quiero|Renovar|Subtotal/i.test(l)).join(' | ') });
    expect(await screen.getByTestId(`cart-item-${sku}`).isVisible().catch(() => false), 'precondición: el carro contiene {SKU_VALID_001}').toBe(true);
    expect(tiene(n, /Diamante/i), 'no se muestra el banner de membresía').toBe(false);
    expect(tiene(n, /^Lo quiero$|^Renovar$/), 'no hay punto de entrada al modal de contratación').toBe(false);
  });

  test(`TC-B2C42-APP-002 · Renovar abre el modal de renovación con cobro inmediato [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C42-APP-002';
    const carro = await abrirCarroConSku(screen, device, bundleId!, p, cp, testData, 'expirado');
    await carro.capturarEvidencia(cp, 2, 'carro con el banner de renovación');
    await abrirModal(screen, 'Renovar');
    const visto = await observarModal(screen);
    test.info().annotations.push({ type: 'modal', description: visto });
    await carro.capturarEvidencia(cp, 4, 'modal de renovación');
    if (await sinPlanes(screen)) {
      anotarBloqueo(cp, 'El modal no muestra selector de planes ni el texto de cobro inmediato; el CTA queda deshabilitado.');
      return;
    }
    expect(tiene(await nodos(screen), /Renovar membres/i), 'título "Renovar membresia"').toBe(true);
  });

  test(`TC-B2C42-APP-004 · Para un cliente Expirado los planes no muestran 15 días gratis [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C42-APP-004';
    const carro = await abrirCarroConSku(screen, device, bundleId!, p, cp, testData, 'expirado');
    await abrirModal(screen, 'Renovar');
    await carro.capturarEvidencia(cp, 4, 'modal de renovación');
    test.info().annotations.push({ type: 'modal', description: await observarModal(screen) });
    if (await sinPlanes(screen)) { anotarBloqueo(cp, 'No hay planes que revisar.'); return; }
    const n = await nodos(screen);
    expect(tiene(n, /3 meses/i) && tiene(n, /6 meses/i), 'planes de 3 y 6 meses').toBe(true);
    expect(tiene(n, /15 d[ií]as gratis/i), 'los planes no muestran "15 días gratis"').toBe(false);
  });
});
