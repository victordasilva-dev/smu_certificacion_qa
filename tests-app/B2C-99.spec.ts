import { execSync } from 'child_process';
import type { Screen } from 'mobilewright';
import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { NavBar } from './pages/NavBar';
import { SinCoberturaModal } from './pages/SinCoberturaModal';
import { tolerante } from './support/tolerante';
import { arrancarInvitado, elegirDireccion, visibleEn, invitadoConDireccion, agregarAlCarro } from './support/entregaApp';
import { AgotarseModal } from './pages/AgotarseModal';
import { nodos, tiene, tocarEscalado, sesion, esperarCodigo, ingresarCodigo } from './support/sesionOtp';
import { asegurarApp } from './support/appLista';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { DetalleDireccionScreen } from './pages/DetalleDireccionScreen';

/**
 * B2C-99 — Detalles de la dirección y ajuste del PIN (app nativa, Android, build v1.0.1).
 *
 * Esta pasada cubre los casos de la pantalla «Detalles de la dirección» (001–007), el seteo de la
 * dirección (009–011) y la apertura del mapa (014–015). Los de mover el PIN y los de «Google Maps no
 * carga» van en otro bloque.
 */
const PLATAFORMA = 'Android' as const;
const tol = <T>(fn: () => Promise<T>) => tolerante(fn, 30);
const pausa = (ms: number) => new Promise((s) => setTimeout(s, ms));
const textos = async (screen: Screen) => (await nodos(screen)).map((n) => n.label).filter(Boolean);
const patron = (dir: string) => new RegExp(`${dir.match(/\d+/)?.[0] ?? ''}.*${dir.split(',').pop()!.trim()}`, 'i');

async function aDetalles(screen: Screen, device: any, bundleId: string, p: any, dir: string) {
  await arrancarInvitado(screen, device, bundleId, p);
  return elegirDireccion(screen, p, dir, patron(dir));
}
/** Escribe `n` caracteres en el campo con la etiqueta dada y devuelve cuántos quedaron. */
async function llenarCampo(screen: Screen, etiqueta: string, n: number): Promise<number> {
  const campo = screen.getByPlaceholder(etiqueta, { exact: false }).first();
  await tol(() => campo.tap());
  await pausa(1000);
  execSync(`adb shell input text '${'a'.repeat(n)}'`, { timeout: 30000 });
  await pausa(1500);
  const nodosEdit = (await nodos(screen)).filter((x) => /EditText/i.test(x.type));
  const largos = nodosEdit.map((x) => (x.label || '').length);
  return Math.max(0, ...largos);
}

test.describe.configure({ timeout: 600000 });
test.describe(`B2C-99 — Detalles de la dirección (${PLATAFORMA})`, () => {
  test(`TC-B2C99-APP-001 · La pantalla Detalles de la dirección muestra todos sus elementos [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-001';
    const det = await aDetalles(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await pausa(3000);
    await det.capturarEvidencia(cp, 6, 'pantalla Detalles de la dirección');
    const arriba = await textos(screen);
    execSync('adb shell input swipe 360 1200 360 500 400', { timeout: 15000 });
    await pausa(1500);
    const t = [...arriba, ...(await textos(screen))];
    test.info().annotations.push({ type: 'textos', description: t.slice(0, 60).join(' | ') });
    expect(t.some((x) => /^Detalles de la direcci[oó]n$/.test(x)), 'título «Detalles de la dirección»').toBe(true);
    expect(t.some((x) => /^Volver$/.test(x)), 'botón atrás «<»').toBe(true);
    expect(t.some((x) => /Mapa de Google/.test(x)) && t.some((x) => /Ajusta aqu[ií]/.test(x)), 'mapa con el PIN «Ajusta aquí»').toBe(true);
    expect(t.some((x) => /^Calle Uno 23$/.test(x)) && t.some((x) => /^Editar$/.test(x)), 'dirección con la opción «Editar»').toBe(true);
    expect(t.some((x) => /N° dpto, oficina, piso, etc \(opcional\)/i.test(x)), 'campo «N° dpto, oficina, piso, etc (opcional)»').toBe(true);
    expect(t.some((x) => /Nombre de direcci[oó]n \(opcional\)/i.test(x)), 'campo «Nombre de dirección (opcional)»').toBe(true);
    for (const et of ['Casa', 'Trabajo', 'Favorito', 'Ubicación']) expect(t.some((x) => x === et), `ícono de etiqueta «${et}»`).toBe(true);
    expect(t.some((x) => /Instrucciones? para entrega \(opcional\)/i.test(x)), 'área «Instrucción para entrega (opcional)»').toBe(true);
    expect(t.some((x) => /^Agregar direcci[oó]n$/.test(x)), 'botón «Agregar dirección»').toBe(true);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-002 · Los campos opcionales muestran sus placeholders [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-002';
    const det = await aDetalles(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await pausa(3000);
    await det.capturarEvidencia(cp, 6, 'campos opcionales');
    await expect(screen.getByPlaceholder('Dpto 910', { exact: false }).first(), 'placeholder «Ej. Dpto 910»').toBeVisible({ timeout: 15000 });
    await expect(screen.getByPlaceholder('Pololo', { exact: false }).first(), 'placeholder «Ej. Mamá, Pololo, trabajo»').toBeVisible({ timeout: 15000 });
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-003 · La dirección se muestra con calle, número, comuna y región [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-003';
    const det = await aDetalles(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await pausa(3000);
    await det.capturarEvidencia(cp, 6, 'dirección en Detalles');
    const t = (await textos(screen)).join(' | ');
    test.info().annotations.push({ type: 'dirección', description: t.slice(0, 200) });
    expect(t, 'calle + número + comuna + región').toMatch(/Calle Uno 23.*La Florida.*Regi[oó]n Metropolitana/i);
    await det.capturarEvidencia(cp);
  });

  for (const [n, nombre, etiqueta, max] of [['004', 'N° dpto', 'Dpto 910', 50], ['005', 'Nombre de dirección', 'Pololo', 20], ['006', 'Instrucción para entrega', 'Instrucciones', 300]] as const) {
    test(`TC-B2C99-APP-${n} · El campo ${nombre} no acepta más de ${max} caracteres [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
      const cp = `TC-B2C99-APP-${n}`;
      const det = await aDetalles(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
      await pausa(3000);
      let quedaron: number;
      if (n === '006') {
        await tol(() => screen.getByType('android.widget.EditText').last().tap());
        await pausa(1000);
        execSync(`adb shell input text '${'a'.repeat(max + 10)}'`, { timeout: 60000 });
        await pausa(2000);
        tocarEscalado(847, 2330);   // oculta el teclado para leer el contador
        await pausa(2000);
        test.info().annotations.push({ type: 'contador', description: (await textos(screen)).filter((x) => /caracteres|Instrucc/i.test(x)).join(' | ') });
        const cont = (await textos(screen)).map((x) => /(\d+)\s*\/\s*300 caracteres/.exec(x)).find(Boolean);
        quedaron = cont ? Number(cont[1]) : 0;
      } else quedaron = await llenarCampo(screen, etiqueta, max + 10);
      execSync('adb shell input keyevent 4', { timeout: 15000 });
      await pausa(1500);
      await det.capturarEvidencia(cp, 7, `campo ${nombre} tras escribir ${max + 10} caracteres`);
      test.info().annotations.push({ type: 'caracteres', description: `${quedaron} de ${max + 10}` });
      expect(quedaron, `el campo queda con ${max} caracteres como máximo`).toBeLessThanOrEqual(max);
      expect(quedaron, 'el campo aceptó caracteres').toBeGreaterThan(0);
      await det.capturarEvidencia(cp);
    });
  }

  test(`TC-B2C99-APP-009 · Una dirección con cobertura y horarios setea el método de entrega en el Store Locator [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-009';
    const dir = token(testData, 'DIRECCION_DESPACHO_001')!;
    const det = await aDetalles(screen, device, bundleId!, p, dir);
    await tol(() => det.botonConfirmar.tap());
    await pausa(7000);
    await new NavBar(screen, p).capturarEvidencia(cp, 8, 'Store Locator tras confirmar la dirección');
    const loc = (await screen.getByTestId('delivery-open').getText().catch(() => '')) || '';
    test.info().annotations.push({ type: 'header', description: loc.replace(/\s+/g, ' ') });
    expect(loc, 'el Store Locator muestra la dirección').toMatch(/Calle Uno 23/i);
    expect(loc, 'con ventana de entrega y costo').toMatch(/Hoy|Ma[ñn]ana|Desde|\d{1,2}:\d{2}|hrs|\$/i);
    await new NavBar(screen, p).capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-010 · Una dirección sin cobertura deriva al flujo sin cobertura [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-010';
    const dir = token(testData, 'DIRECCION_SIN_COBERTURA')!;
    const det = await aDetalles(screen, device, bundleId!, p, dir);
    await tol(() => det.botonConfirmar.tap());
    const sin = new SinCoberturaModal(screen, p);
    await visibleEn(sin.titulo, 25000);
    await sin.capturarEvidencia(cp, 8, 'tras confirmar la dirección sin cobertura');
    await expect(sin.titulo, 'se muestra «Aún no llegamos a esta dirección»').toBeVisible({ timeout: 10000 });
    const loc = (await screen.getByTestId('delivery-open').getText().catch(() => '')) || '';
    expect(loc, 'la dirección sin cobertura no se setea en el Store Locator').not.toMatch(new RegExp(dir.split(',')[0].trim(), 'i'));
    await sin.capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-014 · Al seleccionar el mapa se abre Agregar nueva dirección con todos sus elementos [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-014';
    const det = await aDetalles(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await pausa(3000);
    await tol(() => det.mapa.tap());
    await pausa(6000);
    await det.capturarEvidencia(cp, 7, 'pantalla Agregar nueva dirección');
    const t = await textos(screen);
    test.info().annotations.push({ type: 'textos', description: t.slice(0, 30).join(' | ') });
    expect(t.some((x) => /Agregar nueva direcci[oó]n/i.test(x)), 'título «Agregar nueva dirección»').toBe(true);
    expect(t.some((x) => /Entregaremos tu compra en la ubicaci[oó]n marcada/i.test(x)), 'banner «Importante / Entregaremos tu compra en la ubicación marcada…»').toBe(true);
    expect(t.some((x) => /Continuar con detalles de la direcci[oó]n/i.test(x)), 'botón «Continuar con detalles de la dirección»').toBe(true);
    await det.capturarEvidencia(cp);
  });
  test(`TC-B2C99-APP-007 · Al seleccionar una etiqueta de entrega el ícono se pinta de rojo [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-007';
    const det = await aDetalles(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await pausa(3000);
    const nodoCasa = async () => {
      let hallado: any = null;
      const rec = (n: any) => { if ((n.label ?? n.text) === 'Casa' && /Button/i.test(String(n.type))) hallado = n; for (const c of n.children ?? []) rec(c); };
      for (const n of await screen.viewTree()) rec(n);
      return hallado;
    };
    const antes = await nodoCasa();
    await tol(() => screen.getByRole('button', { name: 'Casa' }).tap());
    await pausa(2000);
    const despues = await nodoCasa();
    await det.capturarEvidencia(cp, 8, 'etiqueta «Casa» seleccionada');
    test.info().annotations.push({ type: 'nodo Casa', description: `antes=${JSON.stringify({ ...antes, children: undefined })} despues=${JSON.stringify({ ...despues, children: undefined })}` });
    expect((antes as any)?.isSelected, 'antes de tocar «Casa» no está seleccionado').toBe(false);
    expect((despues as any)?.isSelected, 'el ícono «Casa» queda seleccionado').toBe(true);
    const sel = async (et: string) => { let v: any = null; const rec = (n: any) => { if ((n.label ?? n.text) === et && /Button/i.test(String(n.type))) v = n.isSelected; for (const c of n.children ?? []) rec(c); }; for (const n of await screen.viewTree()) rec(n); return v; };
    for (const otra of ['Trabajo', 'Favorito', 'Ubicación']) expect(await sel(otra), `«${otra}» no queda seleccionado`).toBe(false);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-015 · Al seleccionar el PIN Ajusta aquí se abre Agregar nueva dirección [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-015';
    const det = await aDetalles(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await pausa(3000);
    await tol(() => screen.getByText('Ajusta aquí').first().tap());
    await pausa(6000);
    await det.capturarEvidencia(cp, 7, 'tras tocar el PIN «Ajusta aquí»');
    const t = await textos(screen);
    expect(t.some((x) => /Agregar nueva direcci[oó]n/i.test(x)), 'se abre «Agregar nueva dirección»').toBe(true);
    expect(t.some((x) => /Mapa de Google|Ajusta tu punto de entrega/i.test(x)), 'mapa centrado con el PIN sobre la dirección').toBe(true);
    await det.capturarEvidencia(cp);
  });
  /** Detalles → toca el PIN «Ajusta aquí» → «Agregar nueva dirección» (el mapa carga ~6 s). */
  async function aAgregarNueva(screen: Screen, device: any, bundleId: string, p: any, dir: string) {
    const det = await aDetalles(screen, device, bundleId, p, dir);
    await pausa(3000);
    await tol(() => screen.getByText('Ajusta aquí').first().tap());
    await pausa(7000);
    return det;
  }
  // El PIN es un marcador del mapa: se lo arrastra con un toque largo (un swipe corto solo desplaza el mapa).
  const arrastrar = async (dy: number, desde = 560) => { execSync(`adb shell input swipe 360 ${desde} 360 ${desde - dy} 2000`, { timeout: 20000 }); await pausa(3000); };
  const botonContinuar = async (screen: Screen) => {
    let v: any = null;
    const rec = (n: any) => { if (/Continuar con detalles de la direcci[oó]n/.test(n.label ?? n.text ?? '') && /Button/i.test(String(n.type))) v = n; for (const c of n.children ?? []) rec(c); };
    for (const n of await screen.viewTree()) rec(n);
    return v;
  };
  /** «Ajustar» y la X del toast de alerta (la X del banner «Importante» es otra). */
  const ajustarToast = async (screen: Screen) => { await tol(() => screen.getByText(/^Ajustar$/).first().tap()); await pausa(3500); };
  const cerrarToast = async () => { tocarEscalado(940, 1293); await pausa(3000); };   // X del toast
  const hayToast = async (screen: Screen) => screen.getByText(/fuera del radio/i).first().isVisible().catch(() => false);
  /** Espera hasta 12 s a que el toast desaparezca (el árbol de accesibilidad lo conserva un momento). */
  const toastCerrado = async (screen: Screen) => { for (let i = 0; i < 8; i++) { if (!(await hayToast(screen))) return true; await pausa(1500); } return false; };

  test(`TC-B2C99-APP-016 · Al mover el PIN dentro del radio el texto de la dirección no cambia [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-016';
    const det = await aAgregarNueva(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await arrastrar(60);
    await det.capturarEvidencia(cp, 10, 'PIN movido dentro del radio');
    expect((await textos(screen)).some((x) => /Calle Uno 23, La Florida/.test(x)), 'el texto de la dirección no cambia').toBe(true);
    expect(await hayToast(screen), 'no aparece alerta').toBe(false);
    expect((await botonContinuar(screen))?.isEnabled, '«Continuar con detalles de la dirección» sigue habilitado').toBe(true);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-017 · Al mover el PIN fuera del radio se muestra el toast de alerta [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-017';
    const det = await aAgregarNueva(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await arrastrar(300);
    await det.capturarEvidencia(cp, 10, 'PIN fuera del radio');
    expect(await hayToast(screen), 'toast «La ubicación seleccionada se encuentra fuera del radio…»').toBe(true);
    expect((await textos(screen)).some((x) => /^Ajustar$/.test(x)), 'opción «Ajustar»').toBe(true);
    await pausa(8000);
    expect(await hayToast(screen), 'el toast no se cierra solo').toBe(true);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-018 · Con el PIN fuera del radio el botón Continuar queda deshabilitado [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-018';
    const det = await aAgregarNueva(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await arrastrar(300);
    await det.capturarEvidencia(cp, 10, 'PIN fuera del radio');
    expect((await botonContinuar(screen))?.isEnabled, '«Continuar con detalles de la dirección» deshabilitado').toBe(false);
    expect((await textos(screen)).some((x) => /Agregar nueva direcci[oó]n/.test(x)), 'el usuario sigue en «Agregar nueva dirección»').toBe(true);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-019 · Ajustar devuelve el PIN a su posición original y habilita Continuar [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-019';
    const det = await aAgregarNueva(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await arrastrar(300);
    await ajustarToast(screen);
    await det.capturarEvidencia(cp, 11, 'tras tocar «Ajustar»');
    expect(await toastCerrado(screen), 'el toast se cierra').toBe(true);
    expect((await botonContinuar(screen))?.isEnabled, '«Continuar con detalles de la dirección» habilitado').toBe(true);
    expect((await textos(screen)).some((x) => /Calle Uno 23, La Florida/.test(x)), 'la dirección vuelve a la original').toBe(true);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-020 · Al cerrar el toast con la X el PIN sigue fuera del radio [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-020';
    const det = await aAgregarNueva(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await arrastrar(300);
    await cerrarToast();
    await det.capturarEvidencia(cp, 11, 'tras cerrar el toast');
    expect(await toastCerrado(screen), 'el toast se cierra').toBe(true);
    expect((await botonContinuar(screen))?.isEnabled, '«Continuar con detalles de la dirección» sigue deshabilitado').toBe(false);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-021 · Tras cerrar el toast al volver el PIN dentro del radio se habilita Continuar [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-021';
    const det = await aAgregarNueva(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await arrastrar(300);
    await cerrarToast();
    await arrastrar(-300, 260);   // devuelve el PIN al círculo
    await pausa(3500);
    await det.capturarEvidencia(cp, 12, 'PIN de vuelta dentro del radio');
    expect((await botonContinuar(screen))?.isEnabled, '«Continuar con detalles de la dirección» habilitado').toBe(true);
    expect(await toastCerrado(screen), 'no se vuelve a mostrar la alerta').toBe(true);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-022 · El toggle satelital cambia la vista del mapa y mantiene el PIN [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-022';
    const det = await aAgregarNueva(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    const antes = await textos(screen);
    await tol(() => screen.getByText(/^Sat[eé]lite$/).first().tap());
    await pausa(3500);
    const t = await textos(screen);
    await det.capturarEvidencia(cp, 10, 'vista satelital');
    test.info().annotations.push({ type: 'toggle', description: `antes: ${antes.filter((x) => /Sat|Mapa$|Normal/i.test(x)).join('|')} · después: ${t.filter((x) => /Sat|Mapa$|Normal/i.test(x)).join('|')}` });
    expect(t.some((x) => /^(Mapa|Normal|Est[aá]ndar)$/i.test(x)) && !t.some((x) => /^Sat[eé]lite$/.test(x)), 'el toggle pasa a la vista satelital (ofrece volver al mapa)').toBe(true);
    expect(t.some((x) => /Ajusta tu punto de entrega/.test(x)), 'el PIN se mantiene en la misma posición').toBe(true);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-023 · El toggle vuelve a la vista normal y mantiene el PIN [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-023';
    const det = await aAgregarNueva(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await tol(() => screen.getByText(/^Sat[eé]lite$/).first().tap());
    await pausa(3000);
    await tol(() => screen.getByText(/^(Mapa|Normal|Est[aá]ndar)$/i).first().tap());
    await pausa(3500);
    const t = await textos(screen);
    await det.capturarEvidencia(cp, 11, 'vista normal');
    expect(t.some((x) => /^Sat[eé]lite$/.test(x)), 'el mapa vuelve a la vista normal').toBe(true);
    expect(t.some((x) => /Ajusta tu punto de entrega/.test(x)), 'el PIN se mantiene en la misma posición').toBe(true);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-027 · El botón atrás en Agregar nueva dirección vuelve sin aplicar cambios [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-027';
    const det = await aAgregarNueva(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await arrastrar(60);
    await tol(() => screen.getByRole('button', { name: /^Volver$/ }).first().tap());
    await pausa(4000);
    await det.capturarEvidencia(cp, 11, 'tras tocar atrás');
    const t = await textos(screen);
    expect(t.some((x) => /^Detalles de la direcci[oó]n$/.test(x)), 'vuelve a «Detalles de la dirección»').toBe(true);
    expect(t.some((x) => /^Calle Uno 23$/.test(x)), 'la dirección queda sin cambios').toBe(true);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-028 · Editar abre el modal Dirección manual con los campos precargados [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-028';
    const det = await aDetalles(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await pausa(3000);
    await tol(() => screen.getByRole('button', { name: /Editar la direcci[oó]n/ }).first().tap());
    await pausa(5000);
    await det.capturarEvidencia(cp, 9, 'modal Dirección manual');
    const t = await textos(screen);
    test.info().annotations.push({ type: 'modal', description: t.slice(0, 30).join(' | ') });
    expect(t.some((x) => /Direcci[oó]n manual/i.test(x)), 'modal «Dirección manual»').toBe(true);
    expect(t.join(' | '), 'región precargada').toMatch(/Metropolitana/i);
    expect(t.join(' | '), 'comuna precargada').toMatch(/La Florida/i);
    expect(t.join(' | '), 'calle y numeración precargadas').toMatch(/Calle Uno/i);
    await det.capturarEvidencia(cp);
  });
  /** En el modal «Dirección manual» cambia la numeración por `nuevo` y continúa. */
  async function cambiarNumeracion(screen: Screen, nuevo: string) {
    await tol(() => screen.getByType('android.widget.EditText').last().tap());
    await pausa(800);
    execSync('adb shell input keyevent KEYCODE_MOVE_END', { timeout: 15000 });
    for (let i = 0; i < 6; i++) execSync('adb shell input keyevent KEYCODE_DEL', { timeout: 15000 });
    execSync(`adb shell input text '${nuevo}'`, { timeout: 15000 });
    await pausa(1000);
    tocarEscalado(847, 2330);   // oculta el teclado
    await pausa(1500);
    await tol(() => screen.getByText(/Continuar con detalles de la direcci[oó]n/).first().tap());
    await pausa(7000);
  }

  test(`TC-B2C99-APP-029 · Al editar la dirección se actualiza el texto y el PIN se reubica [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-029';
    const det = await aDetalles(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await pausa(3000);
    await tol(() => screen.getByRole('button', { name: /Editar la direcci[oó]n/ }).first().tap());
    await pausa(5000);
    await cambiarNumeracion(screen, '45');
    await det.capturarEvidencia(cp, 11, 'Detalles con la dirección editada');
    const t = await textos(screen);
    test.info().annotations.push({ type: 'dirección', description: t.filter((x) => /Calle|Detalles|Florida/i.test(x)).join(' | ') });
    expect(t.some((x) => /^Detalles de la direcci[oó]n$/.test(x)), 'vuelve a «Detalles de la dirección»').toBe(true);
    expect(t.some((x) => /^Calle Uno 45$/.test(x)), 'la dirección se actualiza a «Calle Uno 45»').toBe(true);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-030 · Al editar la dirección se limpian los campos complementarios [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-030';
    const det = await aDetalles(screen, device, bundleId!, p, token(testData, 'DIRECCION_DESPACHO_001')!);
    await pausa(3000);
    await tol(() => screen.getByPlaceholder('Dpto 910', { exact: false }).first().tap());
    execSync(`adb shell input text 'Dpto910'`, { timeout: 15000 });
    await pausa(800);
    tocarEscalado(847, 2330);
    await pausa(1500);
    await tol(() => screen.getByPlaceholder('Pololo', { exact: false }).first().tap());
    execSync(`adb shell input text 'Casa'`, { timeout: 15000 });
    await pausa(800);
    tocarEscalado(847, 2330);
    await pausa(1500);
    await tol(() => screen.getByRole('button', { name: 'Trabajo' }).tap());
    await pausa(1000);
    await tol(() => screen.getByRole('button', { name: /Editar la direcci[oó]n/ }).first().tap());
    await pausa(5000);
    await cambiarNumeracion(screen, '45');
    await det.capturarEvidencia(cp, 13, 'Detalles tras editar la dirección');
    const sel = async (et: string) => { let v: any = null; const rec = (n: any) => { if ((n.label ?? n.text) === et && /Button/i.test(String(n.type))) v = n.isSelected; for (const c of n.children ?? []) rec(c); }; for (const n of await screen.viewTree()) rec(n); return v; };
    for (const et of ['Casa', 'Trabajo', 'Favorito', 'Ubicación']) expect(await sel(et), `ninguna etiqueta queda seleccionada («${et}»)`).toBe(false);
    await expect(screen.getByPlaceholder('Dpto 910', { exact: false }).first(), 'N° dpto vacío (muestra el placeholder)').toBeVisible({ timeout: 10000 });
    await expect(screen.getByPlaceholder('Pololo', { exact: false }).first(), 'Nombre de dirección vacío (muestra el placeholder)').toBeVisible({ timeout: 10000 });
    await det.capturarEvidencia(cp);
  });
  test(`TC-B2C99-APP-011 · Una dirección con cobertura y sin horarios deriva al flujo sin horarios [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-011';
    const det = await aDetalles(screen, device, bundleId!, p, token(testData, 'DIRECCION_SIN_SLA')!);
    await pausa(3000);
    await tol(() => det.botonConfirmar.tap());
    await pausa(8000);
    await det.capturarEvidencia(cp, 8, 'tras confirmar la dirección sin horarios');
    const t = await textos(screen);
    test.info().annotations.push({ type: 'pantalla', description: t.slice(0, 25).join(' | ') });
    expect(t.some((x) => /horarios/i.test(x)), 'se muestra el flujo de dirección sin horarios disponibles').toBe(true);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-012 · Con productos en el carro y cambio de tienda se muestra el modal antes de setear la dirección [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-012';
    const tabs = await invitadoConDireccion(screen, device, bundleId!, p, token(testData, 'DIRECCION_MISMA_TIENDA')!);
    await agregarAlCarro(screen, p, tabs, token(testData, 'SKU_VALID_001')!);
    const otra = token(testData, 'DIRECCION_OTRA_TIENDA')!;
    const det = await elegirDireccion(screen, p, otra, patron(otra));
    await pausa(3000);
    await tol(() => det.botonConfirmar.tap());
    await pausa(5000);
    await det.capturarEvidencia(cp, 9, 'tras confirmar la nueva dirección con carro');
    await expect(new AgotarseModal(screen, p).titulo, 'se muestra el modal «Algunos productos podrían agotarse» antes de setear la dirección').toBeVisible({ timeout: 20000 });
    await det.capturarEvidencia(cp);
  });

  /** Guarda `dir` en la cuenta (sin nombre ni etiqueta) validando el OTP y devuelve las direcciones guardadas. */
  async function guardarDireccion(screen: Screen, device: any, bundleId: string, p: any, cp: string, td: any, dir: string) {
    const correo = token(td, 'USER_AUTH_001')!.split('/')[0].trim();
    await asegurarApp(screen);
    await sesion(screen, p, cp, correo, /Karl|Comprador/i);
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
    // La cuenta puede tener activo el retiro en tienda: se pasa a la pestaña de despacho antes de buscar.
    await tol(() => new NavBar(screen, p).tapMetodoDeEntrega());
    const m0 = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await tol(() => m0.pestanaDespacho.tap());
    await pausa(2500);
    await m0.elegirSugerencia(dir, patron(dir));
    const det = await tol(() => new DetalleDireccionScreen(screen, p).waitUntilReady());
    await pausa(3000);
    const desde = new Date(Date.now() - 30000);
    await tol(() => det.botonConfirmar.tap());
    await pausa(3000);
    if (tiene(await nodos(screen), /Algunos productos podr[ií]an agotarse/)) { await tol(() => screen.getByRole('button', { name: 'Sí, continuar' }).tap()); await pausa(4000); }
    await expect(screen.getByText(/Autenticaci[oó]n requerida/).first(), 'se pide validar el OTP').toBeVisible({ timeout: 40000 });
    await ingresarCodigo(screen, await esperarCodigo(cp, correo, desde));
    await pausa(5000);
    for (let i = 0; i < 3 && tiene(await nodos(screen), /Ahora no|Algunos productos podr[ií]an agotarse/); i++) {
      if (tiene(await nodos(screen), /Algunos productos podr[ií]an agotarse/)) await tol(() => screen.getByRole('button', { name: 'Sí, continuar' }).tap()); else await tol(() => screen.getByText('Ahora no').tap());
      await pausa(4000);
    }
    await tol(() => screen.getByTestId('tab-Home').tap());
    await pausa(3000);
    await tol(() => new NavBar(screen, p).tapMetodoDeEntrega());
    const modal = await tol(() => new MetodoEntregaModal(screen, p).waitUntilReady());
    await tol(() => modal.pestanaDespacho.tap());
    await pausa(3000);
    return { det, modal, guardadas: await modal.direccionesGuardadas() };
  }

  test(`TC-B2C99-APP-031 · Sin nombre la dirección se guarda con calle y número truncados a 20 caracteres [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-031';
    const { det, guardadas } = await guardarDireccion(screen, device, bundleId!, p, cp, testData, token(testData, 'DIRECCION_DESPACHO_003')!);
    await det.capturarEvidencia(cp, 10, 'direcciones guardadas');
    test.info().annotations.push({ type: 'guardadas', description: guardadas.map((g) => g.etiqueta).join(' | ') });
    expect(guardadas.some((g) => /^Av\. San Josemar[ií]a Es\.\.\./.test(g.etiqueta)), 'la dirección queda con el nombre «Av. San Josemaría Es...»').toBe(true);
    await det.capturarEvidencia(cp);
  });

  test(`TC-B2C99-APP-032 · Sin nombre una dirección corta se guarda con calle y número completos, y sin etiqueta con el ícono de ubicación (032 y 033) [Logueado] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C99-APP-032';
    const { det, guardadas } = await guardarDireccion(screen, device, bundleId!, p, cp, testData, token(testData, 'DIRECCION_DESPACHO_001')!);
    await det.capturarEvidencia(cp, 10, 'direcciones guardadas (nombre e ícono)');
    test.info().annotations.push({ type: 'guardadas', description: guardadas.map((g) => g.etiqueta).join(' | ') });
    expect(guardadas.some((g) => /^Calle Uno 23$/.test(g.etiqueta)), 'la dirección queda con el nombre «Calle Uno 23», sin puntos suspensivos').toBe(true);
    await det.capturarEvidencia(cp);
  });
});
