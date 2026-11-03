import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { capturarEvidencia } from './support/evidencia';
import { PDPPage } from './pages/PDPPage';
import { MetodoEntregaModal } from './pages/MetodoEntregaModal';
import { CarroPage } from './pages/CarroPage';

/**
 * B2C-124 — Impedimento de las precondiciones "invitado SIN dirección con productos en el carro".
 *
 * No certifica ningún TC: deja la captura que sustenta el `Bloqueado` de 002, 006, 007, 008 y 009
 * (Desktop y Mobile). Su título no empieza por un CP-ID a propósito: ningún caso de la planilla
 * tiene un `test()` aquí, y el veredicto de esas filas lo decide la comprobación, no esta corrida.
 *
 * Comprueba lo que bloquea esas precondiciones: como invitado sin dirección, «Agregar» no agrega
 * el producto; abre «Elige tu método de entrega» con "Para armar tu carro, ingresa una dirección…",
 * y el carro sigue vacío.
 */
const BLOQUEADOS = ['002', '006', '007', '008', '009'];

test.describe('B2C-124 — impedimento de la precondición sin dirección', () => {
  test.describe.configure({ timeout: 180000 });

  for (const [ff, vp, sufijo, L] of [
    ['Desktop 1440x900', DESKTOP, 'Desktop', 'D'],
    ['Mobile 390x844', MOBILE, 'Mobile', 'M'],
  ] as const) {
    test.describe(ff, () => {
      test.use(vp);

      test(`IMPEDIMENTO · Un invitado sin dirección no puede armar un carro (${sufijo})`, async ({ page, testData }) => {
        const pdp = await new PDPPage(page).abrir(token(testData, 'SKU_VALID_001')!);
        await pdp.agregarVisible.click();
        const modal = await new MetodoEntregaModal(page).esperarAbierto();
        await expect(
          modal.root.getByText(/para armar tu carro, ingresa una direcci[óo]n/i),
          'el invitado sin dirección no puede agregar: el sitio pide una dirección',
        ).toBeVisible({ timeout: 15000 });
        for (const n of BLOQUEADOS) {
          await capturarEvidencia(page, `TC-B2C124-${L}-${n}`, 1, 'invitado sin dirección: «Agregar» pide una dirección');
        }
        await modal.cerrarConX().catch(() => page.keyboard.press('Escape'));
        const carro = await new CarroPage(page).goto();
        await expect(carro.carroVacio, 'el carro del invitado sigue vacío').toBeVisible({ timeout: 30000 });
      });
    });
  }
});
