import { test, expect } from './support/fixtures';
import { token } from '../tests/support/testData';
import { CarroScreen } from './pages/CarroScreen';
import { HomeScreen } from './pages/HomeScreen';
import { tolerante } from './support/tolerante';
import { agregarAlCarro, arrancarInvitado, visibleEn } from './support/entregaApp';

/**
 * B2C-168 — Fusión de carros invitado → logueado (app nativa).
 *
 * Re-ejecución solo Android (build v1.0.7) del 2026-10-14 de una planilla archivada en Fuera de
 * alcance. Solo APP-001 tiene `test()`: el resto inicia sesión con {USER_AUTH_001}, que es un correo,
 * y en v1.0.7 el login solo acepta RUT; 012 tiene {SKU_UNIPAY_001} en TBD y 014 {EMAIL_NUEVO_REGISTRO}
 * sin fila.
 *
 * En la app un invitado sin dirección sí puede agregar desde la vitrina del Home (comprobado el
 * 2026-10-14), así que la precondición de APP-001 ({SKU_VALID_001} × 1) se arma sin dirección.
 */

const PLATAFORMA = 'Android' as const;

test.describe(`B2C-168 — Fusión de carros (${PLATAFORMA})`, () => {
  test.describe.configure({ timeout: 300000 });

  test(`TC-B2C168-APP-001 · Inicia sesión o regístrate desde el carro abre el modal de inicio de sesión [Guest] (${PLATAFORMA})`, async ({ screen, device, bundleId, plataforma: p, testData }) => {
    const cp = 'TC-B2C168-APP-001';
    const tabs = await arrancarInvitado(screen, device, bundleId!, p);
    await agregarAlCarro(screen, p, tabs, token(testData, 'SKU_VALID_001')!);
    await new HomeScreen(screen, p).capturarEvidencia(cp, 1, 'Home con el SKU en el carro');
    await tolerante(() => tabs.floatingPill.tap());
    const carro = await tolerante(() => new CarroScreen(screen, p).waitUntilReady());
    await tolerante(() => expect(carro.cantidad(token(testData, 'SKU_VALID_001')!), 'el carro tiene el SKU x 1').toHaveText(/^1 un/, { timeout: 20000 }));
    // El botón del pie (`cart-checkout`) carga su rótulo después del carro: se le dan 60 s.
    const boton = screen.getByRole('button', { name: /inicia sesi[oó]n o reg[ií]strate/i });
    const aparece = await visibleEn(boton, 60000);
    await carro.capturarEvidencia(cp, 2, aparece ? 'carro con «Inicia sesión o regístrate»' : 'carro: el botón del pie sigue cargando');
    expect(aparece, 'el carro ofrece «Inicia sesión o regístrate»').toBe(true);
    await tolerante(() => boton.tap());
    await tolerante(() => expect(screen.getByText(/iniciar sesi[oó]n o registrarse|inicia sesi[oó]n o reg[ií]strate/i).first(), 'se muestra el modal de inicio de sesión').toBeVisible({ timeout: 20000 }));
    await carro.capturarEvidencia(cp);
  });
});
