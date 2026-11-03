import * as fs from 'fs';
import * as path from 'path';
import { Page } from '@playwright/test';
import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { LoadedTestData } from './support/testData';
import { esperarOtp, marcaOtp } from './support/otp';
import { PaginaHabilitada } from './pages/PaginaHabilitada';
import { LoginModal } from './pages/LoginModal';
import { PDPPage } from './pages/PDPPage';
import { CarroPage } from './pages/CarroPage';
import { CarroOpciones } from './pages/CarroOpciones';
import { InstruccionesModal } from './pages/InstruccionesModal';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';

/**
 * B2C-45 — Instrucciones al picker en un ítem del carro.
 *
 * Quedan sin `test()`: D/M-012 a 014 ({COMENTARIO_API_ENDPOINT} en TBD).
 *
 * D/M-004: su precondición dice que {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos y el valor
 * cargado tiene 36: se ejecutan los pasos y, como la nota se muestra truncada (regla de D/M-005), el
 * caso se da por no ejecutable con esa data. D/M-006 (invitado) ya declara {DIRECCION_DESPACHO_003}.
 *
 * El CTA del modal nuevo se llama "Agregar comentario" (la planilla dice "Agregar").
 */

const SESION = path.resolve('.qa/auth/b190-user.json');

function declarado(testData: LoadedTestData, nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) throw new Error(`Falta {${nombre}} en el Excel de data: el TC lo declara en su Test data`);
  return valor;
}

async function iniciarSesion(page: Page, testData: LoadedTestData): Promise<void> {
  const correo = declarado(testData, 'USER_AUTH_001').split('/')[0].trim();
  if (fs.existsSync(SESION)) await page.context().addCookies(JSON.parse(fs.readFileSync(SESION, 'utf-8')).cookies ?? []);
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  const login = new LoginModal(page);
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  if (await login.disparador.isVisible().catch(() => false)) {
    const desde = marcaOtp();
    await login.pedirCodigo(correo);
    await login.ingresarCodigo(await esperarOtp(correo, desde, { digitos: 6 }));
  }
  await login.descartarPasskey();
  await page.context().storageState({ path: SESION });
}

/** Precondición: el carro con solo {SKU_VALID_001} x 1, sin instrucciones (vaciar las borra). */
async function carroSinInstruccion(page: Page, testData: LoadedTestData): Promise<CarroPage> {
  await iniciarSesion(page, testData);
  const carro = await new CarroPage(page).goto();
  await new CarroOpciones(page).cerrarToastSiEsta();
  await carro.vaciar();
  await (await new PDPPage(page).abrir(declarado(testData, 'SKU_VALID_001'))).fijarCantidad(1);
  const c = await new CarroPage(page).goto();
  await new CarroOpciones(page).cerrarToastSiEsta();
  return c;
}

/** Precondición: además, la instrucción {TEXTO_INSTRUCCION_001} guardada. */
async function carroConInstruccion(page: Page, testData: LoadedTestData): Promise<CarroPage> {
  const carro = await carroSinInstruccion(page, testData);
  const modal = await new InstruccionesModal(page).abrir();
  await modal.escribir(declarado(testData, 'TEXTO_INSTRUCCION_001'));
  await modal.agregar.click();
  await modal.root.waitFor({ state: 'hidden', timeout: 20000 });
  await modal.abrirEdicion.waitFor({ state: 'visible', timeout: 20000 });
  await new CarroOpciones(page).cerrarToastSiEsta();
  return carro;
}

/** "Nota: " + los primeros 30 caracteres + "…", como lo muestra el shelf. */
function notaTruncada(texto: string): RegExp {
  const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`^Nota:\\s*${esc(texto.slice(0, 30).trim())}\\s*…`);
}

test.describe('B2C-45 — Instrucciones al picker', () => {
  for (const [ff, vp, L, sufijo] of [
    ['Desktop 1440x900', DESKTOP, 'D', 'Desktop'],
    ['Mobile 390x844', MOBILE, 'M', 'Mobile'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);
      test.describe.configure({ timeout: 300000 });
      const id = (n: string) => `TC-B2C45-${L}-${n}`;

      test(`${id('001')} · «Agregar instrucciones» abre el modal de nuevo comentario con sus elementos [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('001');
        const carro = await carroSinInstruccion(page, testData);
        const modal = await new InstruccionesModal(page).abrir();
        await carro.capturarEvidencia(cp, 4, 'modal «¿Te gustaría algo en especial?»', { elemento: modal.root });
        await expect.soft(modal.cerrar, 'X de cierre').toBeVisible();
        await expect.soft(modal.root.locator('img').first(), 'miniatura').toBeVisible();
        await expect.soft(modal.root.getByText(/^unimarc /i).first(), 'tienda').toBeVisible();
        await expect.soft(modal.root.getByText(/^\d+ (un|kg)\.$/i).first(), 'unidad de medida').toBeVisible();
        await expect.soft(modal.campo, 'campo «Instrucciones» vacío').toHaveValue('');
        await expect.soft(modal.contador, 'contador 0/150').toHaveText('0 / 150 caracteres');
        await expect.soft(modal.agregar, 'CTA «Agregar» deshabilitado').toBeDisabled();
        await modal.cerrar.click();
      });

      test(`${id('002')} · Al escribir, el contador se actualiza y se habilita «Agregar» [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('002');
        const texto = declarado(testData, 'TEXTO_INSTRUCCION_001');
        const carro = await carroSinInstruccion(page, testData);
        const modal = await new InstruccionesModal(page).abrir();
        await modal.escribir(texto);
        await carro.capturarEvidencia(cp, 5, 'instrucción escrita', { elemento: modal.root });
        await expect(modal.contador, `contador ${texto.length}/150`).toHaveText(`${texto.length} / 150 caracteres`);
        await expect(modal.agregar, 'CTA «Agregar» habilitado').toBeEnabled();
        await modal.cerrar.click();
      });

      test(`${id('003')} · El campo de instrucciones no admite más de 150 caracteres [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('003');
        const texto = declarado(testData, 'TEXTO_151_CARACTERES');
        const carro = await carroSinInstruccion(page, testData);
        const modal = await new InstruccionesModal(page).abrir();
        // Paso 5: "pegar" el texto: `fill` lo inserta de una vez, como un pegado.
        await modal.campo.fill(texto);
        await carro.capturarEvidencia(cp, 5, `texto de ${texto.length} caracteres pegado`, { elemento: modal.root });
        const valor = await modal.campo.inputValue();
        test.info().annotations.push({ type: 'largo en el campo', description: String(valor.length) });
        expect(valor.length, 'el campo conserva solo 150 caracteres').toBe(150);
        await expect(modal.contador, 'contador 150/150').toHaveText('150 / 150 caracteres');
        await modal.cerrar.click();
      });

      test(`${id('005')} · Una nota de más de 30 caracteres se trunca con «…» en el shelf [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('005');
        const texto = declarado(testData, 'TEXTO_INSTRUCCION_LARGO');
        const carro = await carroSinInstruccion(page, testData);
        const modal = await new InstruccionesModal(page).abrir();
        await modal.escribir(texto);
        await modal.agregar.click();
        await modal.root.waitFor({ state: 'hidden', timeout: 20000 });
        await expect(modal.nota, 'el shelf muestra la nota').toBeVisible({ timeout: 20000 });
        await carro.capturarEvidencia(cp, 6, 'nota truncada en el shelf');
        await expect(modal.nota, '«Nota:» + 30 caracteres + «…»').toHaveText(notaTruncada(texto));
      });

      test(`${id('007')} · «Editar instrucciones» abre el modal con el comentario precargado [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('007');
        const texto = declarado(testData, 'TEXTO_INSTRUCCION_001');
        const carro = await carroConInstruccion(page, testData);
        const modal = await new InstruccionesModal(page).editar();
        await carro.capturarEvidencia(cp, 4, 'modal de edición', { elemento: modal.root });
        await expect(modal.campo, 'comentario precargado').toHaveValue(texto);
        await expect(modal.contador, 'contador con su cantidad de caracteres').toHaveText(`${texto.length} / 150 caracteres`);
        await expect(modal.confirmar, '«Confirmar»').toBeVisible();
        await expect(modal.eliminarComentario, '«Eliminar comentario»').toBeVisible();
        await modal.cerrar.click();
      });

      test(`${id('008')} · Confirmar la edición reemplaza el comentario y muestra el toast [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('008');
        const nuevo = declarado(testData, 'TEXTO_INSTRUCCION_002');
        const carro = await carroConInstruccion(page, testData);
        const modal = await new InstruccionesModal(page).editar();
        await modal.escribir(nuevo);
        await modal.confirmar.click();
        await expect(modal.toast(/tu instrucci[oó]n fue agregada con [ée]xito/i), 'toast «Tu instrucción fue agregada con éxito»').toBeVisible({ timeout: 20000 });
        await modal.root.waitFor({ state: 'hidden', timeout: 20000 });
        await carro.capturarEvidencia(cp, 7, 'shelf con la nota reemplazada');
        // {TEXTO_INSTRUCCION_002} tiene más de 30 caracteres: el shelf lo muestra truncado (regla de D/M-005).
        await expect(modal.nota, 'el shelf muestra la nueva nota (truncada a 30)').toHaveText(notaTruncada(nuevo));
      });

      test(`${id('009')} · «Eliminar comentario» muestra el modal de confirmación [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('009');
        const carro = await carroConInstruccion(page, testData);
        const modal = await new InstruccionesModal(page).editar();
        await modal.eliminarComentario.click();
        await expect(modal.confirmacionBorrado, 'modal de confirmación').toBeVisible({ timeout: 15000 });
        await carro.capturarEvidencia(cp, 6, 'confirmación «Eliminar comentario»', { elemento: modal.confirmacionBorrado });
        await expect.soft(modal.confirmacionBorrado.locator('img, svg').first(), 'imagen').toBeVisible();
        await expect.soft(modal.confirmacionBorrado.getByText(/^eliminar comentario$/i).first(), 'título').toBeVisible();
        await expect.soft(modal.confirmacionBorrado.getByText(/¿desea(s)? eliminar tu instrucci[oó]n/i), 'subtítulo').toBeVisible();
        await expect.soft(modal.siEliminar, '«Sí, eliminar»').toBeVisible();
        await expect.soft(modal.noGracias, '«No, gracias»').toBeVisible();
        await modal.noGracias.click();
      });

      test(`${id('010')} · «Sí, eliminar» quita la instrucción y el shelf vuelve a «Agregar instrucciones» [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('010');
        const carro = await carroConInstruccion(page, testData);
        const modal = await new InstruccionesModal(page).editar();
        await modal.eliminarComentario.click();
        await modal.siEliminar.click();
        await expect(modal.toast(/tu comentario se ha eliminado/i), 'toast «Tu comentario se ha eliminado»').toBeVisible({ timeout: 20000 });
        await carro.capturarEvidencia(cp, 8, 'shelf sin nota');
        await expect(modal.nota, 'la nota desaparece del shelf').toBeHidden({ timeout: 15000 });
        await expect(modal.abrirNuevo, 'vuelve «Agregar instrucciones»').toBeVisible();
      });

      test(`${id('011')} · «No, gracias» vuelve al modal de edición sin eliminar el comentario [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('011');
        const texto = declarado(testData, 'TEXTO_INSTRUCCION_001');
        const carro = await carroConInstruccion(page, testData);
        const modal = await new InstruccionesModal(page).editar();
        await modal.eliminarComentario.click();
        await modal.noGracias.click();
        await expect(modal.confirmacionBorrado, 'se cierra la confirmación').toBeHidden({ timeout: 10000 });
        await expect(modal.root, 'vuelve el modal de edición').toBeVisible();
        await expect(modal.campo, 'el comentario sigue sin cambios').toHaveValue(texto);
        await carro.capturarEvidencia(cp, 7, 'modal de edición tras «No, gracias»', { elemento: modal.root });
        await modal.cerrar.click();
      });

      test(`${id('004')} · Confirmar la instrucción la guarda y el shelf muestra la nota [Logueado] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('004');
        const texto = declarado(testData, 'TEXTO_INSTRUCCION_001');
        const carro = await carroSinInstruccion(page, testData);
        const modal = await new InstruccionesModal(page).abrir();
        await modal.escribir(texto);
        await carro.capturarEvidencia(cp, 5, 'modal con la instrucción escrita', { elemento: modal.root });
        await modal.agregar.click();
        await expect(modal.toast(/tu instrucci[oó]n fue agregada con [ée]xito/i), 'toast «Tu instrucción fue agregada con éxito»').toBeVisible({ timeout: 20000 });
        await modal.root.waitFor({ state: 'hidden', timeout: 20000 });
        await carro.capturarEvidencia(cp, 7, 'shelf con la nota');
        await expect(modal.abrirEdicion, '«Editar instrucciones» en el shelf').toBeVisible();
        const nota = ((await modal.nota.innerText()) ?? '').replace(/\s+/g, ' ').trim();
        test.info().annotations.push({ type: 'nota', description: nota });
        if (texto.length > 30) throw new Error(`PRECONDICION_NO_DISPONIBLE: {TEXTO_INSTRUCCION_001} ('${texto}') tiene ${texto.length} caracteres y la precondición pide 30 o menos: la instrucción se guarda y el toast aparece, pero el shelf la muestra truncada («${nota}») y nunca como «Nota: {TEXTO_INSTRUCCION_001}» completo`);
        await expect(modal.nota, 'el shelf muestra «Nota: {TEXTO_INSTRUCCION_001}»').toHaveText(`Nota: ${texto}`);
      });

      test(`${id('006')} · Un invitado puede agregar una instrucción al picker [Guest] (${sufijo})`, async ({ page, testData }) => {
        const cp = id('006');
        const texto = declarado(testData, 'TEXTO_INSTRUCCION_001');
        const dir = declarado(testData, 'DIRECCION_DESPACHO_003');
        const n = dir.match(/\d{2,}/)![0];
        const home = await new PaginaHabilitada(page).goto();
        await home.cookies.aceptarSiAparece();
        await home.header.storeLocator.click();
        const entrega = await new MetodoEntregaModal(page).esperarAbierto();
        await entrega.fijarDireccionComoInvitado(dir, new RegExp(`(?<!\\d)${n}(?!\\d)`));
        await (await new PDPPage(page).abrir(declarado(testData, 'SKU_VALID_001'))).fijarCantidad(1);
        const carro = await new CarroPage(page).goto();
        await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
        const modal = await new InstruccionesModal(page).abrir();
        await carro.capturarEvidencia(cp, 4, 'modal «¿Te gustaría algo en especial?»', { elemento: modal.root });
        await modal.escribir(texto);
        await modal.agregar.click();
        await expect(modal.toast(/tu instrucci[oó]n fue agregada con [ée]xito/i), 'toast de confirmación').toBeVisible({ timeout: 20000 });
        await modal.root.waitFor({ state: 'hidden', timeout: 20000 });
        await carro.capturarEvidencia(cp, 7, 'shelf con la nota del invitado');
        await expect(modal.abrirEdicion, '«Editar instrucciones» en el shelf').toBeVisible();
        // {TEXTO_INSTRUCCION_001} tiene más de 30 caracteres: el shelf lo muestra truncado (regla de D/M-005).
        await expect(modal.nota, 'el shelf muestra la nota guardada (truncada a 30)').toHaveText(notaTruncada(texto));
      });
    });
  }
});
