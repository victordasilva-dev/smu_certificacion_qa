import { test, token } from './support/fixtures';
import { DESKTOP } from './support/viewports';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { HeaderEntrega } from './pages/HeaderEntrega';

test.use(DESKTOP);
for (const modo of ['idle', 'nav']) {
  test(`sonda ${modo} (Desktop)`, async ({ page, testData }) => {
    test.setTimeout(500000);
    const t0 = Date.now();
    const log = (m: string) => console.log(`S ${modo} ${Math.round((Date.now() - t0) / 1000)}s ${m}`);
    page.on('request', (r) => { if (/smu-delivery/.test(r.url())) log(`REQ ${r.method()} ${r.url().replace(/^.*organizations\/[^/]+\//, '').slice(0, 60)}`); });
    page.on('framenavigated', (f) => { if (f === page.mainFrame()) log(`NAV ${f.url().replace(/^https?:\/\/[^/]+/, '')}`); });
    const home = await new PaginaHabilitada(page).goto();
    await home.cookies.aceptarSiAparece();
    const h = new HeaderEntrega(page, home.header);
    await h.boton.click();
    const modal = await new MetodoEntregaModal(page).esperarAbierto();
    const d = token(testData, 'DIRECCION_DESPACHO_001')!;
    await modal.elegirSugerencia(d.split(',')[0], /(?<!\d)23(?!\d)/);
    await modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
    await modal.confirmacionPin.getByRole('button', { name: /^agregar direcci[óo]n$/i }).click();
    for (let k = 0; k < 40 && !/desde:/i.test(await h.texto()); k++) await page.waitForTimeout(1500);
    log('DIRECCION SETEADA');
    let ultimo = '';
    for (let i = 0; i < 70; i++) {
      if (modo === 'nav' && i % 4 === 0) { await home.header.logo.first().click({ timeout: 4000 }).catch(() => {}); }
      const t = await h.texto();
      const e = /desde:/i.test(t) ? 'ventana' : /elige una forma/i.test(t) ? 'ELIGE' : 'otro';
      if (e !== ultimo) { log(`HEADER ${e}`); ultimo = e; }
      const ls = await page.evaluate(() => Object.keys(localStorage).join(',') + ' | ' + document.cookie.split(';').map(c=>c.split('=')[0].trim()).join(',')).catch(()=>'');
      if (i % 12 === 0) log('STORAGE ' + ls.slice(0, 300));
      await page.waitForTimeout(5000);
    }
  });
}
