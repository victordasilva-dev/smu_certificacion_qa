import * as fs from 'fs';
import { test } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { tolerante } from './support/tolerante';
import { fijarDireccionInvitado } from './support/invitadoConCarro';
import { nodos } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';
import * as disp from './support/dispositivo';

const r = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
test.describe.configure({ timeout: 900000 });
test.describe('B2C-63 sonda (Android)', () => {
  test('GUEST · TC-B2C63-APP (sonda)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const sku = token(testData, 'SKU_COMPLETA_PROMO_2X1')!;
    await asegurarApp(screen);
    await fijarDireccionInvitado(screen, device, bundleId!, p, testData);
    await r(() => screen.getByTestId('tab-Home').tap()); await pausa(3000);
    const vistos: string[] = []; let hallado = -1;
    for (let i = 0; i < 12; i++) {
      const ns = await nodos(screen);
      ns.filter((n) => /^product-\d/.test(n.id)).forEach((n) => { if (!vistos.includes(n.id)) vistos.push(n.id); });
      if (ns.some((n) => n.id.includes(sku))) { hallado = i; break; }
      await disp.deslizarFijo(360, 1250, 360, 450, 400, { base: [720, 1600], timeout: 15000 }); await pausa(1200);
    }
    fs.writeFileSync('.qa/probe63-home.txt', `scrolls=${hallado}\nproductos vistos (${vistos.length}):\n` + vistos.join('\n'));
    // chip «Combina la promo» en los resultados
    const tabs = await r(() => new TabBar(screen, p).waitUntilReady());
    await r(() => tabs.tapBuscar());
    const b = await r(() => new BuscarScreen(screen, p).waitUntilReady());
    await r(() => b.buscar(sku));
    await r(() => b.resultadoPara(sku).waitFor({ state: 'visible', timeout: 30000 }));
    await pausa(1500);
    const ns = await nodos(screen);
    const chip = ns.find((n) => /Combina la promo/i.test(n.label));
    fs.writeFileSync('.qa/probe63-chip.txt', JSON.stringify(chip ?? null));
    if (chip) { await disp.tocar(chip.x + chip.w / 2, chip.y + chip.h / 2); await pausa(3500); }
    const m = await nodos(screen);
    fs.writeFileSync('.qa/probe63-modal.txt', m.map((x) => `${x.type}|${x.id}|${x.label}|${x.x},${x.y},${x.w}x${x.h}`).join('\n'));
    fs.mkdirSync('test-results/evidence', { recursive: true });
    fs.writeFileSync(`test-results/evidence/TC-B2C63-APP-SONDA-${disp.plataforma()}-modal.png`, (await disp.captura()));
  });
});
