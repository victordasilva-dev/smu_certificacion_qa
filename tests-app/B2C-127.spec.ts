import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { tolerante } from './support/tolerante';
import { arrancarInvitado, elegirDireccion, invitadoConDireccion, agregarAlCarro } from './support/entregaApp';
import { nodos, tiene, tocarEscalado } from './support/sesionOtp';

/**
 * B2C-127 — Dirección sin horarios disponibles (app nativa, Android, build v1.0.1).
 * Se ejecutan 001, 002, 003, 004 y 006 como invitado; 007 (Mis envíos, con OTP) va aparte.
 */
const PLATAFORMA = 'Android' as const;
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const textos = async (screen: Screen) => (await nodos(screen)).map((n) => n.label).filter(Boolean);
const patron = (dir: string) => new RegExp(`${dir.match(/\d+/)?.[0] ?? ''}.*${dir.split(',').pop()!.trim()}`, 'i');
const SIN_HORARIOS = /Por ahora no hay horarios disponibles/i;

test.describe.configure({ timeout: 600000 });
test.describe(`B2C-127 — Dirección sin horarios (${PLATAFORMA})`, () => {
  /** Invitado sin carro → Detalles de {DIRECCION_SIN_SLA} → «Agregar dirección» → modal sin horarios. */
  async function hastaSinHorarios(screen: Screen, device: any, bundleId: string, p: any, testData: any, cp: string) {
    await arrancarInvitado(screen, device, bundleId, p);
    const dir = token(testData, 'DIRECCION_SIN_SLA')!;
    const det = await elegirDireccion(screen, p, dir, patron(dir));
    await pausa(3000);
    await tol(() => det.botonConfirmar.tap());
    await pausa(6000);
    return det;
  }

  test(`TC-B2C127-APP-001 · Una dirección con cobertura sin horarios muestra el modal con sus opciones [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C127-APP-001';
    const det = await hastaSinHorarios(screen, device, bundleId!, p, testData, cp);
    await det.capturarEvidencia(cp, 8, 'modal sin horarios');
    const t = await textos(screen);
    expect(t.some((x) => SIN_HORARIOS.test(x)), 'modal «Por ahora no hay horarios disponibles»').toBe(true);
    await expect(screen.getByRole('button', { name: /Continuar con esta direcci[oó]n/ }).first(), 'botón «Continuar con esta dirección»').toBeVisible();
    await expect(screen.getByRole('button', { name: /Cambiar m[eé]todo de entrega/ }).first(), 'botón «Cambiar método de entrega»').toBeVisible();
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C127-APP-002 · Continuar sin carro setea la dirección con el aviso de sin horarios [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C127-APP-002';
    const det = await hastaSinHorarios(screen, device, bundleId!, p, testData, cp);
    await tol(() => screen.getByRole('button', { name: /Continuar con esta direcci[oó]n/ }).first().tap());
    await pausa(8000);
    if (tiene(await nodos(screen), /inicia sesi[oó]n o reg[ií]strate/i)) { tocarEscalado(1000, 201); await pausa(3000); }
    await det.capturarEvidencia(cp, 10, 'Home tras continuar con la dirección');
    const loc = (await screen.getByTestId('delivery-open').getText().catch(() => '')) || '';
    test.info().annotations.push({ type: 'header', description: loc.replace(/\s+/g, ' ') });
    expect(loc, 'la dirección queda seteada').toMatch(/(?<!\d)1072(?!\d)/);
    expect(loc, 'con el aviso «Sin horarios disponibles»').toMatch(/Sin horarios disponibles/i);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C127-APP-003 · Con dirección sin horarios se pueden seguir agregando productos [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C127-APP-003';
    const det = await hastaSinHorarios(screen, device, bundleId!, p, testData, cp);
    await tol(() => screen.getByRole('button', { name: /Continuar con esta direcci[oó]n/ }).first().tap());
    await pausa(8000);
    if (tiene(await nodos(screen), /inicia sesi[oó]n o reg[ií]strate/i)) { tocarEscalado(1000, 201); await pausa(3000); }
    const tabs = await tol(() => new TabBar(screen, p).waitUntilReady());
    await agregarAlCarro(screen, p, tabs, token(testData, 'SKU_VALID_001')!);
    await det.capturarEvidencia(cp, 10, 'producto agregado al carro');
    const t = await textos(screen);
    expect(t.some((x) => /\d+\s*unidades?/i.test(x)) || (await tabs.floatingPill.isVisible().catch(() => false)), '{SKU_VALID_001} se agrega al carro con normalidad').toBe(true);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C127-APP-004 · Con carro primero aparece «Algunos productos podrían agotarse» y luego el modal sin horarios [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C127-APP-004';
    const tabs = await invitadoConDireccion(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await agregarAlCarro(screen, p, tabs, token(testData, 'SKU_VALID_001')!);
    const dir = token(testData, 'DIRECCION_SIN_SLA')!;
    const det = await elegirDireccion(screen, p, dir, patron(dir));
    await pausa(3000);
    await tol(() => det.botonConfirmar.tap());
    await pausa(5000);
    expect(tiene(await nodos(screen), /Algunos productos podr[ií]an agotarse/), 'primero aparece el modal «Algunos productos podrían agotarse»').toBe(true);
    await det.capturarEvidencia(cp, 9, 'modal Algunos productos podrían agotarse');
    await tol(() => screen.getByRole('button', { name: 'Sí, continuar' }).tap());
    await pausa(6000);
    if (tiene(await nodos(screen), /inicia sesi[oó]n o reg[ií]strate/i)) { tocarEscalado(1000, 201); await pausa(3000); }
    await det.capturarEvidencia(cp, 11, 'tras Sí, continuar');
    expect(tiene(await nodos(screen), SIN_HORARIOS), 'luego aparece el modal «Por ahora no hay horarios disponibles»').toBe(true);
    await tol(() => screen.getByRole('button', { name: /Continuar con esta direcci[oó]n/ }).first().tap());
    await pausa(8000);
    if (tiene(await nodos(screen), /inicia sesi[oó]n o reg[ií]strate/i)) { tocarEscalado(1000, 201); await pausa(3000); }
    const loc = (await screen.getByTestId('delivery-open').getText().catch(() => '')) || '';
    expect(loc, 'la dirección queda con el aviso «Sin horarios disponibles»').toMatch(/Sin horarios disponibles/i);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C127-APP-006 · Cambiar método de entrega vuelve al modal Elige tu método de entrega [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C127-APP-006';
    const det = await hastaSinHorarios(screen, device, bundleId!, p, testData, cp);
    await tol(() => screen.getByRole('button', { name: /Cambiar m[eé]todo de entrega/ }).first().tap());
    await pausa(4000);
    await det.capturarEvidencia(cp, 9, 'tras Cambiar método de entrega');
    expect(tiene(await nodos(screen), /Elige tu m[eé]todo de entrega/), 'se muestra el modal «Elige tu método de entrega»').toBe(true);
    await det.capturarEvidencia(cp);
  });
});
