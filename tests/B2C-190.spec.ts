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
import { DatosEntregaPage } from './pages/DatosEntregaPage';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { AgotarseModal } from './pages/AgotarseModal';
import { RecibeAlguienMasModal } from './pages/RecibeAlguienMasModal';

/**
 * B2C-190 — "¿Recibe alguien más?": registrar a un tercero que recibe el pedido, en Datos de entrega.
 *
 * Quedan sin `test()`, y conviene que se entienda por qué:
 * - D/M-004, 005, 007, 008, 010, 018, 019 y 020: necesitan registrar (o corregir hacia) un tercero
 *   válido con {RUT_TERCERO}, y ese RUT (12.345.678-9) tiene el dígito verificador mal (el de
 *   12.345.678 es 5): el modal lo rechaza con "Ingrese un valor válido" y "Confirmar" no se habilita.
 *   Además {TELEFONO_TERCERO} trae el prefijo 569, y el campo solo acepta los 8 dígitos posteriores.
 * - D/M-006, 009 y 011: {TERCERO_API_ENDPOINT} en TBD. D/M-022: {TARJETA_ONECLICK_001} sin fila.
 *
 * El CTA del modal se llama "Confirmar" en DEV; la planilla lo llama "Guardar datos de tercero".
 * Solo D/M-003 afirma el nombre; las validaciones afirman el estado del CTA, sea cual sea su nombre.
 */

/** Sesión de {USER_AUTH_001} para esta suite. No se commitea. */
const SESION = path.resolve('.qa/auth/b190-user.json');

function correoUsuario(testData: LoadedTestData): string {
  return token(testData, 'USER_AUTH_001')!.split('/')[0].trim();
}

function declarado(testData: LoadedTestData, nombre: string): string {
  const valor = token(testData, nombre);
  if (!valor) throw new Error(`Falta {${nombre}} en el Excel de data: el TC lo declara en su Test data`);
  return valor;
}

/** Inicia sesión reutilizando el storageState; si no sirve, por correo + OTP. */
async function iniciarSesion(page: Page, testData: LoadedTestData): Promise<PaginaHabilitada> {
  if (fs.existsSync(SESION)) {
    await page.context().addCookies(JSON.parse(fs.readFileSync(SESION, 'utf-8')).cookies ?? []);
  }
  const home = await new PaginaHabilitada(page).goto();
  await home.cookies.aceptarSiAparece();
  const login = new LoginModal(page);
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  if (await login.disparador.isVisible().catch(() => false)) {
    const desde = marcaOtp();
    await login.pedirCodigo(correoUsuario(testData));
    await login.ingresarCodigo(await esperarOtp(correoUsuario(testData), desde, { digitos: 6 }));
  }
  await login.descartarPasskey();
  fs.mkdirSync(path.dirname(SESION), { recursive: true });
  await page.context().storageState({ path: SESION });
  return home;
}

/** "Algunos productos podrían agotarse" → "Sí, continuar" (si aparece) y el OTP de "Autenticación requerida". */
async function confirmarConOtp(page: Page, testData: LoadedTestData): Promise<void> {
  const agotarse = new AgotarseModal(page);
  const desde = marcaOtp();
  if (await agotarse.root.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) {
    await agotarse.botonSi.click();
  }
  const modal = new MetodoEntregaModal(page);
  if (await modal.modalOtp.waitFor({ state: 'visible', timeout: 15000 }).then(() => true, () => false)) {
    await new LoginModal(page).escribirCodigo(await esperarOtp(correoUsuario(testData), desde, { digitos: 6 }));
    await modal.modalOtp.waitFor({ state: 'hidden', timeout: 30000 });
  }
}

/** Precondición común: sesión, carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y Datos de entrega cargada. */
async function irADatosDeEntrega(page: Page, testData: LoadedTestData, cp: string): Promise<DatosEntregaPage> {
  await iniciarSesion(page, testData);
  const pdp = await new PDPPage(page).abrir(declarado(testData, 'SKU_VALID_001'));
  await pdp.fijarCantidad(Number(declarado(testData, 'UNIDADES_SOBRE_MINIMO')));
  const carro = await new CarroPage(page).goto();
  await expect(carro.botonContinuarEntrega, 'el carro supera el mínimo de compra').toBeVisible({ timeout: 30000 });
  await carro.capturarEvidencia(cp, 2, 'carro sobre el mínimo de compra');
  await carro.continuarConLaEntrega();
  const entrega = new DatosEntregaPage(page);
  await entrega.waitUntilReady();
  await expect(page.getByText(/ME-034/), 'Datos de entrega carga sin el error ME-034').toHaveCount(0);
  return entrega;
}

/** Deja activo el despacho a {DIRECCION_DESPACHO_001} desde el Store Locator del header. */
async function volverADespacho(page: Page, testData: LoadedTestData): Promise<void> {
  const direccion = declarado(testData, 'DIRECCION_DESPACHO_001');
  const home = await new PaginaHabilitada(page).goto();
  await home.header.storeLocator.waitFor({ state: 'visible', timeout: 30000 });
  await page.waitForTimeout(3000);
  const enHeader = ((await home.header.storeLocator.innerText()) ?? '').replace(/\s+/g, ' ');
  if (enHeader.includes(direccion.split(',')[0])) return;
  await home.header.storeLocator.click();
  const modal = await new MetodoEntregaModal(page).esperarAbierto();
  await modal.tabDespachoDomicilio.click();
  await modal.root.getByRole('button').filter({ hasText: direccion.split(',')[0] }).first().click();
  await confirmarConOtp(page, testData);
  await page.waitForTimeout(3000);
}

/** Caso de validación: completa los campos que el TC da por válidos, aplica el valor inválido y sale del campo. */
async function casoValidacion(
  page: Page,
  testData: LoadedTestData,
  cp: string,
  campo: 'rut' | 'nombre' | 'telefono',
  valorInvalido: string | null,
) {
  test.setTimeout(300000);
  const entrega = await irADatosDeEntrega(page, testData, cp);
  const modal = await new RecibeAlguienMasModal(page).abrir();
  await entrega.capturarEvidencia(cp, 6, 'modal «¿Recibe alguien más?»', { elemento: modal.root });
  const validos = {
    rut: declarado(testData, 'RUT_TERCERO'),
    nombre: declarado(testData, 'NOMBRE_TERCERO'),
    telefono: declarado(testData, 'TELEFONO_TERCERO'),
  };
  const campos = { rut: modal.rut, nombre: modal.nombre, telefono: modal.telefono };
  for (const c of ['rut', 'nombre', 'telefono'] as const) {
    if (c !== campo) await modal.escribir(campos[c], validos[c]);
  }
  await modal.escribir(modal.apellido, declarado(testData, 'APELLIDO_TERCERO'));
  if (valorInvalido === null) {
    await campos[campo].click();
    await campos[campo].fill('');
  } else {
    await modal.escribir(campos[campo], valorInvalido);
  }
  await modal.salir();
  const valor = await campos[campo].inputValue();
  test.info().annotations.push({ type: 'valor en el campo', description: JSON.stringify({ campo, valor, largo: valor.length }) });
  await entrega.capturarEvidencia(cp, 8, `campo ${campo} tras salir`, { elemento: modal.root });
  await expect(modal.errorDe(campo), `bajo ${campo} se muestra «Ingrese un valor válido»`).toBeVisible({ timeout: 10000 });
  await expect(modal.cta, 'el CTA del modal queda deshabilitado').toBeDisabled();
  await entrega.capturarEvidencia(cp);
}

test.describe('B2C-190 — ¿Recibe alguien más?', () => {
  for (const [ff, vp, L, sufijo] of [
    ['Desktop 1440x900', DESKTOP, 'D', 'Desktop'],
    ['Mobile 390x844', MOBILE, 'M', 'Mobile'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);

      test(`TC-B2C190-${L}-001 · Con despacho sin tercero se muestra la opción «¿Recibe alguien más?» [Logueado] (${sufijo})`, async ({ page, testData }) => {
        test.setTimeout(300000);
        const cp = `TC-B2C190-${L}-001`;
        const entrega = await irADatosDeEntrega(page, testData, cp);
        await expect(entrega.contenido, 'despacho a la dirección declarada').toContainText(declarado(testData, 'DIRECCION_DESPACHO_001').split(',')[0]);
        const modal = new RecibeAlguienMasModal(page);
        await expect(modal.disparador, 'se muestra «¿Recibe alguien más?»').toBeVisible({ timeout: 20000 });
        await entrega.capturarEvidencia(cp, 4, 'Datos de entrega con «¿Recibe alguien más?»');
        await modal.abrir();
        await expect(modal.root, 'la opción es seleccionable: abre su modal').toBeVisible();
        await entrega.capturarEvidencia(cp);
      });

      test(`TC-B2C190-${L}-003 · El modal «¿Recibe alguien más?» muestra todos sus elementos [Logueado] (${sufijo})`, async ({ page, testData }) => {
        test.setTimeout(300000);
        const cp = `TC-B2C190-${L}-003`;
        const entrega = await irADatosDeEntrega(page, testData, cp);
        const modal = await new RecibeAlguienMasModal(page).abrir();
        await entrega.capturarEvidencia(cp, 6, 'modal «¿Recibe alguien más?»', { elemento: modal.root });
        await expect.soft(modal.cerrar, 'X para cerrar').toBeVisible();
        await expect.soft(modal.titulo, 'título').toHaveText(/^¿recibe alguien m[áa]s\?$/i);
        await expect.soft(modal.textoSeguridad, 'texto de seguridad').toHaveText(
          'Por tu seguridad, deberás completar todos los datos para validar la identidad de quien recibe.',
        );
        for (const [nombre, campo] of [['RUT', modal.rut], ['Nombre', modal.nombre], ['Apellido', modal.apellido], ['Teléfono', modal.telefono]] as const) {
          await expect.soft(campo, `campo ${nombre}* vacío`).toHaveValue('');
        }
        await expect.soft(modal.rut, 'RUT con placeholder 12.345.678-9').toHaveAttribute('placeholder', '12.345.678-9');
        await expect.soft(modal.prefijoTelefono, 'Teléfono con prefijo «+569»').toBeVisible();
        await expect.soft(modal.cta, 'CTA «Guardar datos de tercero»').toHaveText(/^guardar datos de tercero$/i);
        await expect.soft(modal.cta, 'CTA deshabilitado').toBeDisabled();
        await expect.soft(modal.loRecibireYo, 'botón «Lo recibiré yo»').toBeVisible();
        await entrega.capturarEvidencia(cp);
      });

      test(`TC-B2C190-${L}-012 · Un RUT con dígito verificador inválido muestra «Ingrese un valor válido» [Logueado] (${sufijo})`, async ({ page, testData }) => {
        await casoValidacion(page, testData, `TC-B2C190-${L}-012`, 'rut', declarado(testData, 'RUT_DV_INVALIDO'));
      });

      test(`TC-B2C190-${L}-013 · Un RUT sin puntos ni guion muestra «Ingrese un valor válido» [Logueado] (${sufijo})`, async ({ page, testData }) => {
        await casoValidacion(page, testData, `TC-B2C190-${L}-013`, 'rut', declarado(testData, 'RUT_SIN_FORMATO'));
      });

      test(`TC-B2C190-${L}-014 · Un campo obligatorio vacío muestra «Ingrese un valor válido» al salir [Logueado] (${sufijo})`, async ({ page, testData }) => {
        await casoValidacion(page, testData, `TC-B2C190-${L}-014`, 'nombre', null);
      });

      test(`TC-B2C190-${L}-015 · Un nombre con números o símbolos muestra «Ingrese un valor válido» [Logueado] (${sufijo})`, async ({ page, testData }) => {
        await casoValidacion(page, testData, `TC-B2C190-${L}-015`, 'nombre', declarado(testData, 'NOMBRE_CON_NUMEROS'));
      });

      test(`TC-B2C190-${L}-016 · Un nombre de más de 30 caracteres muestra «Ingrese un valor válido» [Logueado] (${sufijo})`, async ({ page, testData }) => {
        await casoValidacion(page, testData, `TC-B2C190-${L}-016`, 'nombre', declarado(testData, 'NOMBRE_31_CARACTERES'));
      });

      test(`TC-B2C190-${L}-017 · Un teléfono sin 9 dígitos muestra «Ingrese un valor válido» [Logueado] (${sufijo})`, async ({ page, testData }) => {
        await casoValidacion(page, testData, `TC-B2C190-${L}-017`, 'telefono', declarado(testData, 'TELEFONO_CORTO'));
      });

      test(`TC-B2C190-${L}-021 · Dejar Teléfono vacío muestra «Ingrese un valor válido» al salir [Logueado] (${sufijo})`, async ({ page, testData }) => {
        await casoValidacion(page, testData, `TC-B2C190-${L}-021`, 'telefono', null);
      });

      test(`TC-B2C190-${L}-002 · Con retiro en tienda sin tercero se muestra la opción «¿Recibe alguien más?» [Logueado] (${sufijo})`, async ({ page, testData }) => {
        test.setTimeout(480000);
        const cp = `TC-B2C190-${L}-002`;
        await iniciarSesion(page, testData);
        try {
          // Precondición: retiro en {TIENDA_RETIRO_001}.
          const home = await new PaginaHabilitada(page).goto();
          await home.header.storeLocator.click();
          const metodo = await new MetodoEntregaModal(page).esperarAbierto();
          await metodo.tabRetiroEnTienda.click();
          await metodo.elegirTienda(declarado(testData, 'TIENDA_RETIRO_001'));
          await confirmarConOtp(page, testData);
          await page.waitForTimeout(3000);
          const entrega = await irADatosDeEntrega(page, testData, cp);
          await expect(entrega.contenido, 'retiro en la tienda declarada').toContainText(declarado(testData, 'TIENDA_RETIRO_001').replace(/^unimarc\s+/i, ''));
          const modal = new RecibeAlguienMasModal(page);
          await expect(modal.disparador, 'se muestra «¿Recibe alguien más?»').toBeVisible({ timeout: 20000 });
          await entrega.capturarEvidencia(cp, 4, 'Datos de entrega con retiro y «¿Recibe alguien más?»');
          await modal.abrir();
          await expect(modal.root, 'la opción es seleccionable: abre su modal').toBeVisible();
          await entrega.capturarEvidencia(cp);
        } finally {
          await volverADespacho(page, testData);
        }
      });
    });
  }
});
