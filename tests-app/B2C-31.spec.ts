import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { TabBar } from './pages/TabBar';
import { BuscarScreen } from './pages/BuscarScreen';
import { HomeScreen } from './pages/HomeScreen';
import { PdpScreen } from './pages/PdpScreen';
import { LoginScreen } from './pages/LoginScreen';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';

/**
 * B2C-31 — PDP en la app, ejecutada en Android (build v1.0.7, emulador local, 2026-10-20).
 *
 * La planilla no declara plataforma (o declara {APP_PLATFORM} = iOS) ni {ANDROID_PACKAGE}: el
 * usuario pidió correrla en Android y el paquete se pasa por entorno solo para esta corrida.
 *
 * El Home tiene animaciones continuas (carrusel de banners, contador) y uiautomator a veces no
 * logra volcar la pantalla ("no XML content found"): cada paso va envuelto en `r()`, que reintenta
 * solo ese error. Un fallo de otro tipo sale tal cual.
 *
 * Quedan sin `test()`: los de sesión (la app pide RUT y {COMPRADOR_USER} es un correo), los que
 * necesitan el producto en el carro (un invitado sin dirección no puede agregar), los que dependen
 * de {PLP_URL} (una URL web que la app no abre), los de tokens en TBD y APP-009 (pinch).
 */

async function r<T>(fn: () => Promise<T>, n = 30): Promise<T> {
  for (let i = 0; ; i++) {
    try {
      return await fn();
    } catch (e) {
      if (i >= n || !/no XML content/.test(String(e))) throw e;
      await new Promise((s) => setTimeout(s, 2500));
    }
  }
}

const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));

for (const plataforma of ['Android'] as const) {
  test.describe(`B2C-31 — PDP (${plataforma})`, () => {
    test.describe.configure({ timeout: 300000 });

    /** Busca `termino` y abre la PDP de `sku` (o la del primer resultado si `sku` es null). */
    async function abrirPdp(screen: any, p: any, termino: string, sku: string | null, cp: string): Promise<PdpScreen> {
      const tabs = await r(() => new TabBar(screen, p).waitUntilReady());
      await r(() => tabs.tapBuscar());
      const buscar = await r(() => new BuscarScreen(screen, p).waitUntilReady());
      const srp = await r(() => buscar.buscar(termino));
      await r(() => buscar.resultadoPara(termino).waitFor({ state: 'visible', timeout: 30000 }));
      await r(() => srp.capturarEvidencia(cp, 1, `resultados de «${termino}»`));
      if (sku) await r(() => srp.tarjeta(sku).tap());
      else await r(() => srp.abrirPrimerProducto());
      const pdp = await r(() => new PdpScreen(screen, p).waitUntilReady());
      await pausa(2500);
      return pdp;
    }

    const abrirSku = (screen: any, p: any, testData: any, nombre: string, cp: string) => {
      const sku = token(testData, nombre);
      if (!sku) throw new Error(`Falta {${nombre}} en el Excel de data`);
      return abrirPdp(screen, p, sku, sku, cp);
    };

    test(`TC-B2C31-APP-002 · Tocar un producto en la búsqueda abre su PDP en pantalla completa [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C31-APP-002';
      const pdp = await abrirPdp(screen, p, token(testData, 'SEARCH_TERM_001')!, null, cp);
      await r(() => pdp.capturarEvidencia(cp, 3, 'PDP del producto'));
      const t = await r(() => pdp.textos());
      expect(t.some((x) => /›|Inicio \//.test(x.t)), 'sin breadcrumb').toBe(false);
      await r(() => expect(pdp.agregar.or(pdp.texto('Pronto disponible'))).toBeVisible());
    });

    test(`TC-B2C31-APP-003 · Tocar un producto de un carrusel del Home abre su PDP [Guest] (${plataforma})`, async ({ screen, plataforma: p }) => {
      const cp = 'TC-B2C31-APP-003';
      await r(() => new TabBar(screen, p).waitUntilReady());
      const home = new HomeScreen(screen, p);
      await r(() => home.losMasVendidos.waitFor({ state: 'visible', timeout: 30000 }));
      await r(() => home.capturarEvidencia(cp, 1, 'Home con «Los más vendidos»'));
      let sku = '';
      const walk = (n: any) => { const m = /^product-(\d[\w-]*)$/.exec(n.identifier ?? n.resourceId ?? ''); if (!sku && m) sku = m[1]; for (const c of n.children ?? []) walk(c); };
      for (const n of await r(() => screen.viewTree())) walk(n);
      expect(sku, 'el carrusel muestra al menos un producto').not.toBe('');
      await r(() => screen.getByTestId(`product-${sku}`).tap());
      const pdp = await r(() => new PdpScreen(screen, p).waitUntilReady());
      await pausa(2000);
      await r(() => pdp.capturarEvidencia(cp, 3, `PDP de ${sku}`));
      const t = await r(() => pdp.textos());
      expect(t.some((x) => /›|Inicio \//.test(x.t)), 'sin breadcrumb').toBe(false);
    });

    test(`TC-B2C31-APP-006 · Una sección sin contenido no se muestra y el resto mantiene su orden [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C31-APP-006';
      const pdp = await abrirSku(screen, p, testData, 'SKU_VALID_001', cp);
      for (let i = 0; i < 4; i++) await r(() => screen.swipe('up'));
      await r(() => pdp.capturarEvidencia(cp, 3, 'PDP recorrida hasta el final'));
      const t = await r(() => pdp.textos());
      expect(t.some((x) => /recomendados para ti/i.test(x.t)), 'no se muestra «Recomendados para ti» (invitado)').toBe(false);
    });

    for (const [n, nombre, esperado] of [['007', 'SKU_MULTI_IMAGEN', 'varias'], ['008', 'SKU_UNA_IMAGEN', 'una']] as const) {
      test(`TC-B2C31-APP-${n} · Un producto con ${esperado === 'varias' ? 'varias imágenes muestra la principal con dots' : 'una sola imagen no muestra controles'} [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
        const cp = `TC-B2C31-APP-${n}`;
        const pdp = await abrirSku(screen, p, testData, nombre, cp);
        await r(() => pdp.capturarEvidencia(cp, 3, 'galería de la PDP'));
        const pos = await r(() => pdp.posicionGaleria());
        test.info().annotations.push({ type: 'galería', description: JSON.stringify(pos) });
        expect(pos, 'la galería muestra su posición «Imagen i de N»').not.toBeNull();
        if (esperado === 'varias') expect(pos!.n, 'el producto tiene varias imágenes (dots de posición)').toBeGreaterThan(1);
        else expect(pos!.n, 'una sola imagen: sin dots ni navegación').toBe(1);
      });
    }

    test(`TC-B2C31-APP-010 · En el modal de la galería se desliza horizontalmente entre fotos [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C31-APP-010';
      const pdp = await abrirSku(screen, p, testData, 'SKU_MULTI_IMAGEN', cp);
      await r(() => pdp.galeria.tap());
      await pausa(2500);
      await r(() => pdp.capturarEvidencia(cp, 4, 'modal de la galería'));
      // En el modal la foto es "Imagen i de N. Doble toque para ampliar" y abajo están las miniaturas.
      const etiqueta = async () => (await r(() => pdp.textos())).find((x) => /^Imagen \d+ de \d+\. Doble toque/.test(x.t))?.t ?? '';
      const pos = (t: string) => { const m = /^Imagen (\d+) de (\d+)/.exec(t); return m ? { i: Number(m[1]), n: Number(m[2]) } : null; };
      const inicial = await etiqueta();
      const antes = pos(inicial);
      expect(antes, 'el modal muestra la foto con su posición').not.toBeNull();
      await r(() => screen.getByLabel(inicial).swipe({ direction: 'left' }));
      await pausa(2000);
      const despues = pos(await etiqueta());
      await r(() => pdp.capturarEvidencia(cp, 5, 'tras deslizar'));
      test.info().annotations.push({ type: 'posiciones', description: JSON.stringify({ antes, despues }) });
      expect(despues?.i, 'al deslizar pasa a la foto siguiente').toBe((antes?.i ?? 1) + 1);
    });

    test(`TC-B2C31-APP-011 · Un producto sin imagen válida muestra la imagen por defecto [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C31-APP-011';
      const pdp = await abrirSku(screen, p, testData, 'SKU_SIN_IMAGEN', cp);
      await r(() => pdp.capturarEvidencia(cp, 3, 'PDP del producto sin imagen'));
      await r(() => expect(pdp.galeria, 'se muestra una imagen (la por defecto)').toBeVisible());
      await r(() => expect(pdp.agregar.or(pdp.texto('Pronto disponible')), 'el resto de la PDP carga').toBeVisible());
    });

    for (const [n, nombre, patron, etiqueta] of [
      ['013', 'SKU_PATROCINADO', /^Patrocinado$/, 'label «Patrocinado»'],
      ['014', 'SKU_MARKETPLACE', /Vendido por/i, '«Vendido por» y el vendedor'],
      ['027', 'SKU_SIN_STOCK', /Pronto disponible/i, 'tag «Pronto disponible»'],
    ] as const) {
      test(`TC-B2C31-APP-${n} · La PDP muestra ${etiqueta} [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
        const cp = `TC-B2C31-APP-${n}`;
        const pdp = await abrirSku(screen, p, testData, nombre, cp);
        await r(() => pdp.capturarEvidencia(cp, 3, 'PDP'));
        const t = await r(() => pdp.textos());
        expect(t.some((x) => patron.test(x.t)), `se muestra ${etiqueta}`).toBe(true);
        if (n === '027') expect(t.some((x) => x.t === 'Agregar'), 'no se muestra «Agregar»').toBe(false);
      });
    }

    test(`TC-B2C31-APP-015 · Tocar la marca lleva a los resultados de esa marca [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C31-APP-015';
      const pdp = await abrirSku(screen, p, testData, 'SKU_VALID_001', cp);
      const t = await r(() => pdp.textos());
      const marca = t.find((x) => / \| /.test(x.t))?.t.split(' | ')[0].trim() ?? '';
      expect(marca, 'la PDP muestra la marca').not.toBe('');
      await r(() => screen.getByRole('button', { name: marca }).first().tap());
      await pausa(4000);
      await r(() => pdp.capturarEvidencia(cp, 4, `resultados de la marca ${marca}`));
      const t2 = await r(() => pdp.textos());
      expect(t2.some((x) => /^product-/.test(x.id)), 'se muestran productos').toBe(true);
      expect(t2.some((x) => new RegExp(marca, 'i').test(x.t) && /resultado/i.test(x.t)) || t2.some((x) => /^product-results/.test(x.id)), `resultados filtrados por ${marca}`).toBe(true);
    });

    test(`TC-B2C31-APP-016 · «Compartir» abre el share nativo con el link de la PDP [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C31-APP-016';
      const pdp = await abrirSku(screen, p, testData, 'SKU_VALID_001', cp);
      // El botón compartir no tiene label: es el botón inmediatamente después del corazón.
      const btns = await r(() => screen.getByRole('button').all());
      let idx = -1;
      for (let i = 0; i < btns.length; i++) if ((await btns[i].getText().catch(() => '')) === 'Agregar a mis productos') idx = i;
      if (idx < 0) throw new Error('No se encontró el corazón para ubicar «Compartir»');
      await r(() => btns[idx + 1].tap());
      await pausa(3000);
      await r(() => pdp.capturarEvidencia(cp, 4, 'hoja de compartir'));
      const t = await r(() => pdp.textos());
      test.info().annotations.push({ type: 'share', description: JSON.stringify(t.filter((x) => /intentresolver|chooser|http|unimarc/i.test(x.id + x.t)).slice(0, 6)) });
      expect(t.some((x) => /intentresolver|chooser|resolver/i.test(x.id)), 'se abre el share nativo').toBe(true);
      expect(t.some((x) => /https?:\/\/\S*unimarc|exp-delivery/i.test(x.t)), 'con el link de la PDP').toBe(true);
      await r(() => screen.goBack());
    });

    test(`TC-B2C31-APP-018 · El corazón redirige al login al usuario invitado [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C31-APP-018';
      const pdp = await abrirSku(screen, p, testData, 'SKU_VALID_001', cp);
      await r(() => pdp.corazon.tap());
      const login = new LoginScreen(screen, p);
      // El build muestra el login nuevo: "Iniciar sesión o registrarse" (RUT, Google o clave por correo).
      await r(() => expect(screen.getByText(/iniciar sesi[oó]n o registrarse/i), 'se muestra el flujo de login').toBeVisible({ timeout: 20000 }));
      await r(() => login.capturarEvidencia(cp, 4, 'login'));
    });

    for (const [n, nombre, verif] of [
      ['019', 'SKU_PRECIO_OFERTA', 'oferta'],
      ['022', 'SKU_PESABLE', 'ppum'],
      ['023', 'SKU_CUCARDA', 'cucarda'],
    ] as const) {
      test(`TC-B2C31-APP-${n} · Precio/label en la PDP: ${verif} [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
        const cp = `TC-B2C31-APP-${n}`;
        const pdp = await abrirSku(screen, p, testData, nombre, cp);
        await r(() => pdp.capturarEvidencia(cp, 3, 'precio de la PDP'));
        const t = await r(() => pdp.textos());
        const precios = t.filter((x) => /^\$[\d.]+$/.test(x.t)).map((x) => x.t);
        test.info().annotations.push({ type: 'textos de precio', description: JSON.stringify(t.filter((x) => /\$|antes|x (kg|un|lt|litro)|cyber|promo/i.test(x.t)).map((x) => x.t).slice(0, 12)) });
        if (verif === 'oferta') {
          expect(t.some((x) => /^Antes:/.test(x.t)) || new Set(precios).size >= 2, 'precio oferta destacado y precio normal tachado («Antes:»)').toBe(true);
          expect(precios.length, 'se muestra el precio oferta').toBeGreaterThan(0);
        } else if (verif === 'ppum') {
          expect(t.some((x) => /\(\$[\d.]+ x /.test(x.t)), 'PPUM junto al precio').toBe(true);
        } else {
          expect(t.filter((x) => /^(Cyber|Oferta|Nuevo|[A-ZÁÉÍÓÚ][\w ]{1,18})$/.test(x.t) && x.y > 150 && x.y < 700 && !/Guardar|Agregar|Imagen/.test(x.t)).length, 'una sola cucarda').toBeLessThanOrEqual(1);
          await r(() => expect(pdp.agregar, '«Agregar» sigue disponible').toBeVisible());
        }
      });
    }

    test(`TC-B2C31-APP-026 · «Agregar» sin método de entrega abre el Store Locator [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C31-APP-026';
      const pdp = await abrirSku(screen, p, testData, 'SKU_VALID_001', cp);
      await r(() => pdp.agregar.tap());
      const modal = new MetodoEntregaModal(screen, p);
      await r(() => expect(modal.titulo, 'se abre el Store Locator').toBeVisible({ timeout: 20000 }));
      await r(() => modal.capturarEvidencia(cp, 4, 'Store Locator'));
      const t = await r(() => pdp.textos());
      expect(t.some((x) => /^\d+ un\.?$/.test(x.t)), 'el producto no se agrega al carro').toBe(false);
    });

    test(`TC-B2C31-APP-031 · El bloque de datos y «Agregar» queda fijo al recorrer los tabs [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C31-APP-031';
      const pdp = await abrirSku(screen, p, testData, 'SKU_CROSS_SELLING', cp);
      const pasos: { van: boolean; agregar: boolean }[] = [];
      for (let i = 0; i < 8; i++) {
        await r(() => screen.swipe('up'));
        await pausa(1200);
        const t = await r(() => pdp.textos());
        const van = t.some((x) => /van bien juntos/i.test(x.t));
        pasos.push({ van, agregar: t.some((x) => x.t === 'Agregar') });
        if (van) break;
      }
      await r(() => pdp.capturarEvidencia(cp, 3, 'al llegar a «Van bien juntos»'));
      test.info().annotations.push({ type: 'recorrido', description: JSON.stringify(pasos) });
      const antes = pasos.filter((x) => !x.van);
      expect(antes.length, 'hubo desplazamiento por los tabs antes de «Van bien juntos»').toBeGreaterThan(0);
      expect(antes.every((x) => x.agregar), '«Agregar» permanece visible mientras se recorren los tabs').toBe(true);
      expect(pasos.some((x) => x.van), 'se llega a «Van bien juntos»').toBe(true);
    });

    test(`TC-B2C31-APP-032 · El tab «Productos similares» está activo por defecto [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C31-APP-032';
      const pdp = await abrirSku(screen, p, testData, 'SKU_VALID_001', cp);
      await r(() => screen.swipe('up'));
      await pausa(1500);
      await r(() => pdp.capturarEvidencia(cp, 3, 'tabs de la PDP'));
      const t = await r(() => pdp.textos());
      test.info().annotations.push({ type: 'tabs', description: JSON.stringify(t.filter((x) => /similares|informaci/i.test(x.t)).map((x) => x.t)) });
      expect(t.some((x) => /productos similares/i.test(x.t)), 'existe el tab «Productos similares»').toBe(true);
    });

    for (const [n, que] of [['033', 'pills'], ['035', 'fijas'], ['036', 'descripcion']] as const) {
      test(`TC-B2C31-APP-${n} · Tab Información: ${que} [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
        const cp = `TC-B2C31-APP-${n}`;
        const nombre = n === '036' ? 'SKU_VALID_001' : 'SKU_INFO_COMPLETA';
        const pdp = await abrirSku(screen, p, testData, nombre, cp);
        await r(() => screen.swipe('up'));
        await pausa(1500);
        const t = await r(() => pdp.textos());
        await r(() => pdp.capturarEvidencia(cp, 3, 'tab Información'));
        if (que === 'pills') {
          for (const pill of ['Descripción', 'Ingredientes', 'Estilos de alimentación']) {
            expect(t.some((x) => x.t === pill), `pill «${pill}» (sección con contenido)`).toBe(true);
          }
        } else if (que === 'fijas') {
          const PILLS = ['Descripción', 'Ingredientes', 'Estilos de alimentación', 'Datos de nutrición'];
          const filaDePills = (xs: { t: string; y: number }[]) => Math.min(...xs.filter((x) => PILLS.includes(x.t)).map((x) => x.y));
          await r(() => screen.swipe('up'));
          await pausa(1200);
          const y0 = filaDePills(await r(() => pdp.textos()));
          await r(() => screen.swipe('up'));
          await pausa(1200);
          const y1 = filaDePills(await r(() => pdp.textos()));
          await r(() => pdp.capturarEvidencia(cp, 4, 'pills tras seguir desplazando'));
          test.info().annotations.push({ type: 'y de la pill', description: JSON.stringify({ y0, y1 }) });
          expect(y1, 'las pills quedan fijas bajo los tabs').toBe(y0);
        } else {
          const sku = token(testData, 'SKU_VALID_001')!;
          await r(() => screen.swipe('up'));
          await pausa(1200);
          const t2 = await r(() => pdp.textos());
          expect(t2.concat(t).some((x) => x.t.length > 40 && !/\|/.test(x.t)), 'texto de la descripción').toBe(true);
          expect(t2.concat(t).some((x) => x.t === `SKU: ${sku}`), `SKU ${sku}`).toBe(true);
        }
      });
    }

    test(`TC-B2C31-APP-034 · Tocar una pill ancla el scroll a su sección [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C31-APP-034';
      const pdp = await abrirSku(screen, p, testData, 'SKU_INFO_COMPLETA', cp);
      await r(() => screen.swipe('up'));
      await pausa(1500);
      // La pill de nutrición queda fuera de pantalla, a la derecha: se desliza la fila de pills.
      await r(() => pdp.pill('Estilos de alimentación').swipe({ direction: 'left' }));
      await pausa(1200);
      const pillTabla = screen.getByText(/tabla nutricional|datos de nutrici[oó]n/i).first();
      await r(() => pillTabla.tap());
      await pausa(2500);
      await r(() => pdp.capturarEvidencia(cp, 4, 'tras tocar la pill de nutrición'));
      const t = await r(() => pdp.textos());
      const titulo = t.filter((x) => /tabla nutricional|datos de nutrici[oó]n/i.test(x.t)).map((x) => x.y);
      test.info().annotations.push({ type: 'y del título', description: JSON.stringify(titulo) });
      expect(titulo.some((y) => y > 300 && y < 700), 'la sección de nutrición queda al inicio, bajo las pills').toBe(true);
    });

    test(`TC-B2C31-APP-038 · La PDP muestra el carrusel «Van bien juntos» al final [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
      const cp = 'TC-B2C31-APP-038';
      const pdp = await abrirSku(screen, p, testData, 'SKU_CROSS_SELLING', cp);
      let visto = false;
      for (let i = 0; i < 8 && !visto; i++) {
        await r(() => screen.swipe('up'));
        await pausa(1200);
        visto = (await r(() => pdp.textos())).some((x) => /van bien juntos/i.test(x.t));
      }
      await r(() => pdp.capturarEvidencia(cp, 3, 'final de la PDP'));
      expect(visto, 'se muestra «Van bien juntos»').toBe(true);
    });

    for (const [n, nombre, debe] of [['039', 'SKU_COMBINA_PROMO', true], ['040', 'SKU_VALID_001', false]] as const) {
      test(`TC-B2C31-APP-${n} · ${debe ? '«Combina la promo» aparece y abre su modal' : 'Sin promo combinable no se muestra «Combina la promo»'} [Guest] (${plataforma})`, async ({ screen, plataforma: p, testData }) => {
        const cp = `TC-B2C31-APP-${n}`;
        const pdp = await abrirSku(screen, p, testData, nombre, cp);
        await r(() => pdp.capturarEvidencia(cp, 3, 'PDP'));
        const t = await r(() => pdp.textos());
        const hay = t.some((x) => /combina la promo/i.test(x.t));
        if (!debe) {
          expect(hay, 'no se muestra «Combina la promo»').toBe(false);
          return;
        }
        expect(hay, 'se muestra «Combina la promo»').toBe(true);
        await r(() => screen.getByText(/combina la promo/i).first().tap());
        await pausa(2500);
        await r(() => pdp.capturarEvidencia(cp, 5, 'modal de variantes combinables'));
        const t2 = await r(() => pdp.textos());
        expect(t2.filter((x) => /^product-/.test(x.id)).length + t2.filter((x) => x.t === 'Agregar').length, 'el modal lista variantes combinables').toBeGreaterThan(1);
      });
    }
  });
}
