import * as fs from 'fs';
import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test } from './support/fixtures';
import { token } from '../tests/support/testData';
import { NavBar } from './pages/NavBar';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { DetalleDireccionScreen } from './pages/DetalleDireccionScreen';
import { tolerante } from './support/tolerante';
import { nodos } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/** B2C-125 — comprobación puntual del toast de envío y del temporizador inicial con otra dirección nueva ({DIRECCION_SIN_EXPRESS}); no valida el código. */
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const textos = async (screen: Screen) => (await nodos(screen)).map((n) => n.label).filter(Boolean);

test.describe.configure({ timeout: 600000 });
test('B2C-125 · toast de envío y temporizador inicial (dirección nueva alternativa)', async ({ screen, plataforma: p, testData }) => {
  const dir = token(testData, 'DIRECCION_SIN_EXPRESS')!;
  const numero = dir.match(/\d+/)![0]; const comuna = dir.split(',').pop()!.trim();
  await asegurarApp(screen);
  const nav = new NavBar(screen, p);
  await tol(() => screen.getByTestId('tab-Home').tap()); await pausa(2500);
  await tol(() => nav.tapMetodoDeEntrega());
  const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
  await tol(() => modal.pestanaDespacho.tap()); await pausa(2500);
  await modal.elegirSugerencia(dir, new RegExp(`${numero}.*${comuna}`, 'i'));
  const detalle = await tol(() => new DetalleDireccionScreen(screen, p).waitUntilReady());
  await tol(() => detalle.botonConfirmar.tap());
  const log: string[] = [];
  const t0 = Date.now();
  for (let i = 0; i < 14; i++) {
    const t = (await textos(screen)).filter((x) => !/^Notificaci|Timbre|Modo|^$/.test(x));
    log.push(`${((Date.now() - t0) / 1000).toFixed(1)}s: ${t.filter((x) => /c[oó]digo|Autenticaci|Reenviar|enviado/i.test(x)).join(' | ')}`);
    if (i === 1 || i === 3) fs.writeFileSync(`test-results/evidence/TC-B2C125-APP-001-android-p0${i}-toast-y-temporizador.png`, execSync('adb exec-out screencap -p', { maxBuffer: 20 * 1024 * 1024, timeout: 30000 }));
    await pausa(700);
  }
  fs.writeFileSync('.qa/run/toast125.txt', log.join('\n'));
  execSync('adb shell input tap 639 496', { timeout: 15000 });
  await pausa(3000);
});
