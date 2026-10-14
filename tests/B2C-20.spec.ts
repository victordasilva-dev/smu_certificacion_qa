import { test, expect } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { CarroPage } from './pages/CarroPage';
import { SSOPage } from './pages/SSOPage';
import { FooterSimplificado, ITEMS_SOPORTE } from './pages/FooterSimplificado';

/**
 * B2C-20 — Footer Simplificado.
 *
 * En las páginas del flujo de compra y en SSO el footer renderiza únicamente el Content Asset
 * `footer-support-block` con sus 3 accesos. Un `test()` por fila de la planilla, con el CP-ID
 * abriendo el título.
 *
 * Los seis TC de esta suite son `-D-`, así que todos llevan el sufijo (Desktop) y corren en el
 * project `desktop` (motor chromium). El viewport es harina de otro costal: lo declara cada TC, y
 * TC-B2C20-D-003 valida explícitamente la disposición de Mobile — ver la nota en su describe.
 *
 * TC-B2C20-D-005 no está aquí: exige vaciar el Content Asset en Business Manager, fuera del
 * alcance de la automatización web. Queda Bloqueado en la planilla, con su causa.
 */

test.describe('B2C-20 — Footer Simplificado', () => {
  // ================================================================= DESKTOP 1440x900
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C20-D-001 · En las paginas del flujo de compra y SSO, el footer muestra solo el bloque footer-support-block con sus 3 items (Desktop)', async ({
      page,
    }) => {
      // Este TC recorre tres pantallas (Carro, los dos destinos configurados y SSO) con una
      // recarga del Carro entre medio: no cabe en el timeout por defecto, y agotarlo no diría
      // nada sobre el footer.
      test.setTimeout(120000);

      const cp = 'TC-B2C20-D-001';
      const carro = new CarroPage(page);

      // Paso 1 — hacer scroll hasta el footer en el Carro.
      await carro.goto();
      await carro.scrollAlFinal();
      await carro.footer.scrollHastaElFooter();
      await carro.capturarEvidencia(cp, 1, 'footer del Carro con los 3 items', {
        elemento: carro.footer.root,
      });

      // El bloque son exactamente los 3 items configurados, cada uno con icono y texto.
      await expect(carro.footer.items).toHaveCount(3);
      for (const item of ITEMS_SOPORTE) {
        await expect(carro.footer.item(item)).toBeVisible();
        await expect(carro.footer.item(item)).toContainText(carro.footer.tituloEsperado(item));
        await expect(carro.footer.iconoDe(item).first()).toBeVisible();
        await expect(carro.footer.descripcionDe(item)).not.toBeEmpty();
      }

      // Paso 2 — hacer clic en cada uno de los 3 items y comprobar que redirige a su enlace.
      // WhatsApp abre wa.me (dominio externo): se verifica el destino configurado sin navegar
      // fuera del storefront, que dejaría la sesión en una página ajena al caso.
      for (const item of ['Centro de ayuda', 'Seguimiento de compra'] as const) {
        const destino = await carro.footer.hrefDe(item);
        expect(destino).toBeTruthy();
        await carro.footer.clicItem(item);
        await page.waitForURL(`**${destino}`, { timeout: 30000 });
        expect(new URL(page.url()).pathname).toBe(destino);
        await carro.goto();
        await carro.scrollAlFinal();
      }
      const whatsapp = await carro.footer.hrefDe('WhatsApp clientes');
      expect(whatsapp).toMatch(/^https:\/\/wa\.me\//);
      await carro.capturarEvidencia(cp, 2, 'los 3 items con su enlace configurado', {
        elemento: carro.footer.root,
      });

      // Paso 3 — repetir en una pantalla de SSO.
      const sso = new SSOPage(page);
      await sso.goto();
      await expect(sso.formularioAcceso).toBeVisible();
      await expect(sso.footer.items).toHaveCount(3);
      for (const item of ITEMS_SOPORTE) {
        await expect(sso.footer.item(item)).toBeVisible();
        await expect(sso.footer.item(item)).toContainText(sso.footer.tituloEsperado(item));
      }
      await sso.capturarEvidencia(cp, 3, 'mismo bloque de 3 items en la pantalla de SSO', {
        elemento: sso.footer.root,
      });

      await sso.capturarEvidencia(cp, undefined, undefined, { elemento: sso.footer.root });
    });

    test('TC-B2C20-D-002 · En Desktop el footer simplificado muestra los items en forma horizontal (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C20-D-002';
      const carro = new CarroPage(page);

      // Paso 1 — ver el footer simplificado en Desktop.
      await carro.goto();
      await carro.scrollAlFinal();
      await carro.footer.scrollHastaElFooter();
      await carro.capturarEvidencia(cp, 1, 'footer simplificado en Desktop 1440x900', {
        elemento: carro.footer.root,
      });

      // Paso 2 — verificar la disposición horizontal de los items.
      const cajas = await carro.footer.cajasDeItems();
      expect(cajas).toHaveLength(3);
      expect(FooterSimplificado.esHorizontal(cajas)).toBe(true);
      expect(FooterSimplificado.esVertical(cajas)).toBe(false);

      await carro.capturarEvidencia(cp, 2, 'los 3 items alineados en una misma fila', {
        elemento: carro.footer.root,
      });
      await carro.capturarEvidencia(cp, undefined, undefined, { elemento: carro.footer.root });
    });

    test('TC-B2C20-D-004 · El footer simplificado no muestra ningun otro Content Asset del Footer Full (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C20-D-004';
      const carro = new CarroPage(page);

      // Paso 1 — ver el footer en el flujo de compra.
      await carro.goto();
      await carro.scrollAlFinal();
      await carro.footer.scrollHastaElFooter();
      await carro.capturarEvidencia(cp, 1, 'footer del flujo de compra', {
        elemento: carro.footer.root,
      });

      // Paso 2 — verificar la ausencia de las secciones del Footer Full.
      await expect(carro.footer.items).toHaveCount(3);
      await expect(carro.footer.botonesDeSeccion).toHaveCount(0);
      await expect(carro.footer.enlaceCookies).toHaveCount(0);
      await expect(carro.footer.redesSociales).toHaveCount(0);

      await carro.capturarEvidencia(cp, 2, 'sin secciones dropdown, cookies ni redes sociales', {
        elemento: carro.footer.root,
      });
      await carro.capturarEvidencia(cp, undefined, undefined, { elemento: carro.footer.root });
    });

    test('TC-B2C20-D-006 · El Footer Simplificado se renderiza junto al Header Simplificado, sin Footer Full ni comportamiento sticky (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C20-D-006';
      const carro = new CarroPage(page);

      // Paso 1 — verificar el Header y el Footer en el Carro.
      await carro.goto();
      await expect(carro.header.root).toBeVisible();
      await expect(carro.header.logo).toBeVisible();
      await expect(carro.header.enlaces).toHaveCount(0);
      await expect(carro.header.botones).toHaveCount(0);
      await expect(carro.footer.items).toHaveCount(3);
      await carro.capturarEvidencia(cp, 1, 'header simplificado con solo el logo', {
        elemento: carro.header.root,
      });

      // Paso 2 — hacer scroll y confirmar que el header no se contrae a sticky.
      const posicionAntes = await carro.header.position();
      const altoAntes = await carro.header.alto();
      await carro.scrollAlFinal();
      const posicionDespues = await carro.header.position();
      const altoDespues = await carro.header.alto();

      expect(posicionAntes).toBe('static');
      expect(posicionDespues).toBe('static');
      expect(altoDespues).toBe(altoAntes);
      await carro.capturarEvidencia(cp, 2, 'header sin contraerse tras el scroll', {
        elemento: carro.header.root,
      });

      // Paso 3 — confirmar que no aparece el Footer Full.
      await expect(carro.footer.botonesDeSeccion).toHaveCount(0);
      await expect(carro.footer.enlaceCookies).toHaveCount(0);
      await expect(carro.footer.redesSociales).toHaveCount(0);
      await carro.capturarEvidencia(cp, 3, 'footer simplificado, sin Footer Full', {
        elemento: carro.footer.root,
      });

      await carro.capturarEvidencia(cp, undefined, undefined, { elemento: carro.footer.root });
    });
  });

  // ================================================================= MOBILE 390x844
  //
  // TC-B2C20-D-003 valida la disposición VERTICAL, que es la de Mobile. Su fila declara
  // "Viewport: Desktop 1440x900" en Precondiciones, pero el nombre del caso, sus pasos y su
  // resultado esperado hablan de Mobile: a 1440x900 el footer es horizontal por diseño (lo
  // afirma el propio TC-B2C20-D-002) y el caso fallaría sin que exista defecto alguno.
  //
  // Se ejecuta por tanto en el viewport que el escenario describe, y la contradicción de la fila
  // queda registrada en la Observación de la planilla. El sufijo (Desktop) se mantiene porque el
  // CP-ID es -D- y es lo que enruta el test a su project: el project fija el MOTOR (chromium), el
  // describe fija el VIEWPORT. Son ejes independientes.
  test.describe('Mobile 390x844 (viewport del escenario)', () => {
    test.use(MOBILE);

    test('TC-B2C20-D-003 · En Mobile el footer simplificado muestra los items en forma vertical (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C20-D-003';
      const carro = new CarroPage(page);

      // Paso 1 — ver el footer simplificado en Mobile.
      await carro.goto();
      await carro.scrollAlFinal();
      await carro.footer.scrollHastaElFooter();
      await carro.capturarEvidencia(cp, 1, 'footer simplificado en Mobile 390x844', {
        elemento: carro.footer.root,
      });

      // Paso 2 — verificar la disposición vertical de los items.
      const cajas = await carro.footer.cajasDeItems();
      expect(cajas).toHaveLength(3);
      expect(FooterSimplificado.esVertical(cajas)).toBe(true);
      expect(FooterSimplificado.esHorizontal(cajas)).toBe(false);

      await carro.capturarEvidencia(cp, 2, 'los 3 items apilados en una misma columna', {
        elemento: carro.footer.root,
      });
      await carro.capturarEvidencia(cp, undefined, undefined, { elemento: carro.footer.root });
    });
  });
});
