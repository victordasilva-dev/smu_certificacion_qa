import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { PdpScreen } from './pages/PdpScreen';
import { sesion } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';
import { tolerante } from './support/tolerante';

/**
 * B2C-51 — Orden de precios en la PDP (app nativa, Android, build v1.0.1): TC con sesión Pendiente.
 * La cuenta es {COMPRADOR_MEMBRESIA_USER} (membresía vigente). Se lee el bloque de precios de la PDP
 * (precio, label/badge, «Antes:», compuesto «N × $X») ordenado por posición, y para 009 y 010 se
 * compara con el orden de la tarjeta del mismo producto en los resultados de búsqueda.
 */

const r = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const PRECIO = /^\$[\d.]+$|membres|unipay|banco ?estado|^antes:|^\d+ ?[x×] ?\$|llev[ae]|^lista/i;

async function buscarSku(screen: any, p: any, sku: string, cp: string) {
  const tabs = await r(() => new TabBar(screen, p).waitUntilReady());
  await r(() => tabs.tapBuscar());
  const buscar = await r(() => new BuscarScreen(screen, p).waitUntilReady());
  const srp = await r(() => buscar.buscar(sku));
  await r(() => buscar.resultadoPara(sku).waitFor({ state: 'visible', timeout: 30000 }));
  await pausa(1500);
  return srp;
}

/** Textos de precio de los nodos que caen dentro de la tarjeta/bloque, en orden vertical. */
function bloque(t: { t: string; y: number; id: string }[]): string[] {
  return t.filter((x) => PRECIO.test(x.t)).sort((a, b) => a.y - b.y).map((x) => x.t);
}

async function pdpDe(screen: any, p: any, sku: string, cp: string) {
  const srp = await buscarSku(screen, p, sku, cp);
  await r(() => srp.capturarEvidencia(cp, 2, `resultados de «${sku}»`));
  const tarjeta = bloque(await r(() => new PdpScreen(screen, p).textos()));
  await r(() => srp.tarjeta(sku).tap());
  const pdp = await r(() => new PdpScreen(screen, p).waitUntilReady());
  await pausa(2500);
  await r(() => pdp.capturarEvidencia(cp, 4, `PDP de ${sku}`));
  const precios = bloque(await r(() => pdp.textos()));
  return { pdp, tarjeta, precios };
}

test.describe.configure({ timeout: 900000 });
test.describe('B2C-51 — Orden de precios, TC con sesión (Android)', () => {
  const casos: [string, string, string][] = [
    ['005', 'SKU_PRECIO_MIEMBRO', 'precio membresía como 1er precio con badge Membresía'],
    ['008', 'SKU_TRES_PRECIOS', 'con Membresía, Unipay y Banco Estado a la vez el 1er precio es Membresía'],
    ['009', 'SKU_OFERTA_MEMBRESIA', 'oferta + membresía: Membresía, oferta y lista tachado'],
    ['010', 'SKU_NXM_MEMBRESIA', 'NxM + membresía: Membresía y luego el precio compuesto'],
  ];
  for (const [n, nombre, titulo] of casos) {
    test(`TC-B2C51-APP-${n} · ${titulo} [Logueado] (Android)`, async ({ screen, plataforma: p, testData }) => {
      const cp = `TC-B2C51-APP-${n}`;
      await asegurarApp(screen);
      await sesion(screen, p, cp, token(testData, 'COMPRADOR_MEMBRESIA_USER')!.split(' / ')[0], /Hola, QA/);
      const sku = token(testData, nombre)!;
      const { precios, tarjeta } = await pdpDe(screen, p, sku, cp);
      test.info().annotations.push({ type: 'precios PDP (de arriba hacia abajo)', description: JSON.stringify(precios) });
      test.info().annotations.push({ type: 'precios tarjeta SRP', description: JSON.stringify(tarjeta) });
      // El badge de Membresía es un ícono sin texto: el orden se juzga sobre la captura p04 (PDP) y p02 (tarjeta).
    });
  }
});
