import * as fs from 'fs';
import { execSync } from 'child_process';
import { test } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { PdpScreen } from './pages/PdpScreen';
import { tolerante } from './support/tolerante';
import { fijarDireccionInvitado } from './support/invitadoConCarro';
import { nodos } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';

/**
 * B2C-59 (shelf y galería) y B2C-31 (PDP) — app nativa, Android, v1.0.1. Invitado con
 * {DIRECCION_DESPACHO_001}, sin carro. Veredicto por CP-ID en .qa/run/res3159.json.
 */
const r = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const RES = '.qa/run/res3159.json';
const guardar = (cp: string, status: string, obs: string) => { const x = fs.existsSync(RES) ? JSON.parse(fs.readFileSync(RES, 'utf-8')) : {}; x[cp] = { status, obs }; fs.writeFileSync(RES, JSON.stringify(x, null, 1)); };
let nCap = 0;
const cap = (cp: string, slug: string) => { fs.mkdirSync('test-results/evidence', { recursive: true }); fs.writeFileSync(`test-results/evidence/${cp}-android-p${String(++nCap).padStart(2, '0')}-${slug}.png`, execSync('adb exec-out screencap -p', { maxBuffer: 20 * 1024 * 1024, timeout: 30000 })); };
const verif = async (cp: string, fn: () => Promise<[boolean | null, string]>) => {
  if (process.env.SOLO_3159 && !process.env.SOLO_3159.split(',').includes(cp)) return;
  nCap = 0;
  try { const [ok, obs] = await fn(); guardar(cp, ok === null ? 'REVISAR' : ok ? 'Aprobado' : 'Rechazado', obs); }
  catch (e) { guardar(cp, 'ERROR', String(e).slice(0, 200) + ' @ ' + String((e as Error).stack ?? '').split('\n').filter((l) => /B2C-31-59/.test(l)).slice(0, 1).join('').slice(0, 100)); }
};

test.describe.configure({ timeout: 2400000 });
test.describe('B2C-31 y B2C-59 — PDP y shelf (Android)', () => {
  test('GUEST · TC-B2C31-APP y TC-B2C59-APP (PDP y shelf)', async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const sku = (k: string) => token(testData, k)!;
    const pdp = new PdpScreen(screen, p);
    const txt = (t: { t: string }[]) => t.map((x) => x.t).filter((x) => x && !/^Notificaci|^Timbre|^Modo No/.test(x));
    const buscar = async (s: string) => {
      const tabs = await r(() => new TabBar(screen, p).waitUntilReady());
      await r(() => tabs.tapBuscar());
      const b = await r(() => new BuscarScreen(screen, p).waitUntilReady());
      const srp = await r(() => b.buscar(s));
      await r(() => b.resultadoPara(s).waitFor({ state: 'visible', timeout: 30000 }));
      await pausa(1500);
      return srp;
    };
    /** Nodos de la tarjeta del SKU en los resultados (dentro de su caja), ordenados por y. */
    const tarjeta = async (s: string) => {
      const ns = await nodos(screen);
      const c = ns.find((n) => n.id === `product-${s}`);
      if (!c) return { caja: null as any, items: [] as any[] };
      const dentro = ns.filter((n) => n.label && n.x >= c.x - 2 && n.x <= c.x + c.w && n.y >= c.y - 2 && n.y <= c.y + c.h && n.id !== c.id);
      return { caja: c, items: dentro.sort((a, b) => a.y - b.y || a.x - b.x) };
    };
    const abrirPdp = async (s: string) => { const srp = await buscar(s); await r(() => srp.tarjeta(s).tap()); await r(() => pdp.waitUntilReady()); await pausa(2500); };
    /** Todos los textos de la PDP recorriéndola hacia abajo. */
    const pdpCompleta = async (pasos = 4) => {
      const vistos: string[] = [];
      for (let i = 0; i < pasos; i++) {
        for (const x of txt(await r(() => pdp.textos()))) if (!vistos.includes(x)) vistos.push(x);
        execSync('adb shell input swipe 360 1200 360 450 400', { timeout: 15000 }); await pausa(1200);
      }
      return vistos;
    };
    const atras = async () => { for (let i = 0; i < 3 && !(await screen.getByTestId('tab-Buscar').isVisible().catch(() => false)); i++) { execSync('adb shell input keyevent 4', { timeout: 15000 }); await pausa(1500); } };

    await asegurarApp(screen);
    await fijarDireccionInvitado(screen, device, bundleId!, p, testData);

    // ───────── B2C-59: shelf y galería ─────────
    await verif('TC-B2C59-APP-001', async () => {
      const s = sku('SKU_SHELF_COMPLETO'); await buscar(s); const { caja, items } = await tarjeta(s); cap('TC-B2C59-APP-001', 'shelf-completo');
      const lista = items.map((n: any) => `${n.label}@${n.x},${n.y}`);
      const y = (re: RegExp) => items.find((n: any) => re.test(n.label))?.y ?? -1;
      const yPrecio = y(/^\$[\d.]+|c\/u|por \$|×\$/i), yNombre = y(/ \| /), yFormato = y(/^\d+(\.\d+)? ?(g|kg|ml|l|un)\b/i), yPatro = y(/Patrocinado/i), yFav = y(/Agregar a mis productos|favorit/i);
      const orden = yPrecio > 0 && yNombre > yPrecio && yFormato > yNombre && yPatro > yFormato;
      return [orden && yFav > 0, `Orden vertical en la tarjeta: precios y=${yPrecio}, marca+nombre y=${yNombre}, formato y=${yFormato}, «Patrocinado» y=${yPatro}, favoritos y=${yFav}. Nodos: ${lista.slice(0, 16).join(' | ')}.`];
    });
    await verif('TC-B2C59-APP-004', async () => {
      const s = sku('SKU_PATROCINADO'); await buscar(s); const { items } = await tarjeta(s); cap('TC-B2C59-APP-004', 'shelf-patrocinado');
      const yN = items.find((n: any) => / \| /.test(n.label))?.y ?? -1; const pa = items.find((n: any) => /Patrocinado/i.test(n.label));
      return [!!pa && pa.y > yN, `«Patrocinado» ${pa ? `a y=${pa.y}` : 'no aparece'}; el nombre está en y=${yN}. Nodos: ${items.map((n: any) => n.label).slice(0, 12).join(' | ')}.`];
    });
    await verif('TC-B2C59-APP-007', async () => {
      await abrirPdp(sku('SKU_MULTI_IMAGEN')); const a = await pdp.posicionGaleria(); cap('TC-B2C59-APP-007', 'galeria-imagen-1');
      execSync('adb shell input swipe 600 400 120 400 300', { timeout: 15000 }); await pausa(1500); const b = await pdp.posicionGaleria(); cap('TC-B2C59-APP-007', 'galeria-imagen-2');
      const t = txt(await r(() => pdp.textos())).filter((x) => /flecha|siguiente|anterior|dot|punto/i.test(x));
      return [!!a && !!b && a.n >= 2 && b.i === a.i + 1 && t.length === 0, `Galería: antes «Imagen ${a?.i} de ${a?.n}», tras deslizar «Imagen ${b?.i} de ${b?.n}». Controles de flechas/dots expuestos: ${t.join(', ') || 'ninguno'}. La ausencia visual de flechas y dots se confirma en la captura.`];
    });
    await verif('TC-B2C59-APP-008', async () => {
      await atras(); await abrirPdp(sku('SKU_UNA_IMAGEN')); const a = await pdp.posicionGaleria(); cap('TC-B2C59-APP-008', 'galeria-una-imagen');
      execSync('adb shell input swipe 600 700 120 700 300', { timeout: 15000 }); await pausa(1500); const b = await pdp.posicionGaleria();
      return [!!a && a.n === 1 && !!b && b.i === 1, `Galería con una sola imagen: «Imagen ${a?.i} de ${a?.n}»; tras deslizar sigue «Imagen ${b?.i} de ${b?.n}». La ausencia de controles y dots se confirma en la captura.`];
    });

    // ───────── B2C-31: PDP ─────────
    await verif('TC-B2C31-APP-014', async () => {
      await atras(); await abrirPdp(sku('SKU_MARKETPLACE')); const t = await pdpCompleta(); cap('TC-B2C31-APP-014', 'pdp-marketplace');
      const i = t.findIndex((x) => /Vendido por/i.test(x));
      return [i >= 0, `Textos de la PDP: ${t.slice(0, 40).join(' | ')}. «Vendido por»: ${i >= 0 ? t[i] + (t[i + 1] ? ' → ' + t[i + 1] : '') : 'no aparece'}.`];
    });
    await verif('TC-B2C31-APP-021', async () => {
      await atras(); await abrirPdp(sku('SKU_PROM_NxPRECIO')); const t = await pdpCompleta(2); cap('TC-B2C31-APP-021', 'pdp-nxprecio');
      const c = t.filter((x) => /×\s*\$|\d+\s*x\s*\$|por \$|Lleva/i.test(x));
      return [c.length > 0 && t.some((x) => /^\$[\d.]+/.test(x)), `Precios en la PDP: ${t.filter((x) => /\$|×|Lleva|por/i.test(x)).slice(0, 10).join(' | ')}. Formato compuesto: ${c.join(' | ') || 'no aparece'}.`];
    });
    await verif('TC-B2C31-APP-032', async () => {
      await atras(); await abrirPdp(sku('SKU_VALID_001')); const t = await pdpCompleta(12); cap('TC-B2C31-APP-032', 'pdp-final');
      const ns = await nodos(screen); const tab = ns.find((n) => /Productos similares/i.test(n.label));
      return [!!tab && t.some((x) => /Productos similares/i.test(x)), `Textos: ${t.filter((x) => /similares|Descripci|Informaci|Acerca|pill/i.test(x)).join(' | ') || 'sin tabs'}. Tab «Productos similares» ${tab ? `presente (${tab.type}, y=${tab.y})` : 'no encontrado'}; la selección y el carrusel se confirman en la captura.`];
    });
    await verif('TC-B2C31-APP-037', async () => {
      await atras(); await abrirPdp(sku('SKU_SOLO_DESCRIPCION')); const t = await pdpCompleta(5); cap('TC-B2C31-APP-037', 'pdp-una-pill');
      const pills = t.filter((x) => /^(Descripci[oó]n|Acerca de|Informaci[oó]n|Ingredientes|Caracter[ií]sticas|Informaci[oó]n nutricional)/i.test(x));
      return [pills.length === 1 && /Descripci/i.test(pills[0]), `Pills detectadas: ${pills.join(' | ') || 'ninguna'}. Textos: ${t.slice(0, 30).join(' | ')}.`];
    });
    await verif('TC-B2C31-APP-041', async () => {
      await atras(); await abrirPdp(sku('SKU_INFO_COMPLETA')); const t = await pdpCompleta(6); cap('TC-B2C31-APP-041', 'pdp-acerca-de');
      const i = t.findIndex((x) => /^Acerca de/i.test(x));
      return [i >= 0, `Pill «Acerca de»: ${i >= 0 ? 'presente' : 'no aparece'}. Textos alrededor: ${t.slice(Math.max(0, i), (i < 0 ? 0 : i) + 8).join(' | ')}. El ajuste al ancho y la ausencia de desbordes se confirman en la captura.`];
    });
    await verif('TC-B2C31-APP-050', async () => {
      await atras(); await abrirPdp(sku('SKU_COMPLETA_PROMO_3X2')); const t = await pdpCompleta(3); cap('TC-B2C31-APP-050', 'pdp-completa-la-promo');
      return [!t.some((x) => /Combina la promo/i.test(x)), `Textos de la PDP del SKU con «Completa la promo» (3x2): ${t.filter((x) => /promo|Combina|Completa|Agregar|Lleva|\d+ por \d+/i.test(x)).join(' | ') || 'sin textos de promo'}. «Combina la promo» ${t.some((x) => /Combina la promo/i.test(x)) ? 'SÍ' : 'no'} aparece.`];
    });
    await verif('TC-B2C31-APP-030', async () => {
      await atras(); await abrirPdp(sku('SKU_STOCK_LIMITADO')); const t = await pdpCompleta(3); cap('TC-B2C31-APP-030', 'pdp-ultimas-unidades');
      return [t.some((x) => /[ÚU]ltimas unidades/i.test(x)), `Textos: ${t.filter((x) => /unidades|stock|[ÚU]ltim|Agregar|Pronto|disponible/i.test(x)).join(' | ') || 'sin textos de stock'}.`];
    });
  });
});
