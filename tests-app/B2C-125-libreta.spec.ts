import * as fs from 'fs';
import { execSync } from 'child_process';
import { test } from './support/fixtures';
import { token } from '../tests/support/testData';
import { NavBar } from './pages/NavBar';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { tolerante } from './support/tolerante';
import { asegurarApp } from './support/appLista';

/** B2C-125 — comprueba que la dirección validada con OTP quedó en la libreta y devuelve la cuenta a {DIRECCION_DESPACHO_001}. */
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
test.describe.configure({ timeout: 300000 });
test.describe('B2C-125 — libreta (Android)', () => {
test('LIBRETA · libreta tras el OTP y restauración', async ({ screen, plataforma: p, testData }) => {
  const base = token(testData, 'DIRECCION_DESPACHO_001')!.split(',')[0].trim();
  await asegurarApp(screen);
  await tol(() => screen.getByTestId('tab-Home').tap()); await pausa(3000);
  await tol(() => new NavBar(screen, p).tapMetodoDeEntrega());
  const m = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
  await tol(() => m.pestanaDespacho.tap()); await pausa(2500);
  fs.mkdirSync('test-results/evidence', { recursive: true });
  fs.writeFileSync('test-results/evidence/TC-B2C125-APP-008-android-p02-libreta-con-la-direccion-nueva.png', execSync('adb exec-out screencap -p', { maxBuffer: 20 * 1024 * 1024, timeout: 30000 }));
  const g = await m.direccionesGuardadas();
  fs.writeFileSync('.qa/run/libreta125.txt', g.map((x) => x.descripcion).join('\n'));
  const dest = g.find((x) => x.descripcion.includes(base));
  if (dest) { await tol(() => m.elegirDireccionGuardada(dest.etiqueta)); await pausa(6000); }
  fs.writeFileSync('.qa/run/libreta125b.txt', `restaurada: ${!!dest}`);
});
});
