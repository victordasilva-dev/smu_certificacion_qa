import { test, expect, token } from './support/fixtures';
import { DESKTOP, MOBILE } from './support/viewports';
import { HomePage } from './pages/HomePage';
import { ICONO_MAS, ICONO_MENOS, SECCIONES, SeccionFooter } from './pages/FooterFull';

/**
 * B2C-19 — Footer Full del storefront.
 *
 * Un `test()` por fila de la planilla, con el CP-ID abriendo el título: esa es la llave que une
 * cada caso con su fila y la que permite aislarlo con `-g`. El sufijo (Desktop)/(Mobile) es lo
 * que enruta el caso a su project, y con él al motor que declara .env.
 *
 * Los de content asset vacío (D-010/D-011/M-010/M-011) no están aquí: su estado de datos se
 * configura en Business Manager y no se puede producir desde el navegador. D-006/M-006 tampoco
 * (2026-10-06; desde 2026-10-09 Fuera de alcance: requieren acceso a BM para ver los assets): piden validar el contenido de las 4 secciones y la fila declara solo el de
 * Contáctanos ({CONTENIDO_SECCION_001}), así que quedan Bloqueado Data.
 *
 * D-007/M-007 declaran solo {ENLACE_SECCION_001}: el Home al que se entra es el del origen de esa
 * URL, y el enlace se busca en el footer por su ruta.
 */

/** El enlace que el TC declara, exigido: sin él no hay destino contra el cual comparar. */
function enlaceDeclarado(testData: Parameters<typeof token>[0]): URL {
  const valor = token(testData, 'ENLACE_SECCION_001');
  if (!valor) throw new Error('Falta {ENLACE_SECCION_001} en el Excel de data: el TC lo declara en su Test data');
  return new URL(valor);
}

/** Los cuatro títulos tal como el TC los enumera, para las aserciones de estructura. */
const TITULOS_SECCION: Record<SeccionFooter, RegExp> = {
  Contactanos: /cont[áa]ctanos/i,
  'Servicio al cliente': /servicio al cliente/i,
  'Nuestros programas': /nuestros programas/i,
  'Nuestra empresa': /nuestra empresa/i,
};

test.describe('B2C-19 — Footer Full', () => {
  // ==================================================================== DESKTOP 1440x900
  test.describe('Desktop 1440x900', () => {
    test.use(DESKTOP);

    test('TC-B2C19-D-001 · Footer Full Desktop muestra la estructura completa con todas sus secciones (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C19-D-001';
      const home = new HomePage(page);

      // Paso 1 — navegar al Home con viewport Desktop 1440x900.
      await home.goto();
      await home.capturarEvidencia(cp, 1, 'Home cargado en Desktop 1440x900');

      // Paso 2 — hacer scroll hasta el final de la página.
      await home.footer.scrollHastaElFooter();
      await home.capturarEvidencia(cp, 2, 'footer a la vista tras el scroll', {
        elemento: home.footer.root,
      });

      // Paso 3 — visualizar el footer.
      // Resultado esperado: bloque estático + secciones dropdown + cookies + redes sociales.
      const f = home.footer;
      await expect(f.centroDeAyuda).toBeVisible();
      await expect(f.seguimientoDeCompra).toBeVisible();
      await expect(f.whatsappClientes).toBeVisible();
      await expect(f.centroDeAyuda).toContainText(/centro de ayuda/i);
      await expect(f.seguimientoDeCompra).toContainText(/seguimiento de compra/i);
      await expect(f.whatsappClientes).toContainText(/whatsapp clientes/i);

      for (const seccion of SECCIONES) {
        await expect(f.botonSeccion(seccion)).toBeVisible();
        await expect(f.botonSeccion(seccion)).toContainText(TITULOS_SECCION[seccion]);
      }

      await expect(f.politicasDeCookies).toBeVisible();
      await expect(f.politicasDeCookies).toContainText(/pol[íi]ticas de cookies/i);
      await expect(f.tituloRedesSociales).toBeVisible();
      expect(await f.redesSociales.count()).toBeGreaterThan(0);

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: f.root });
    });

    test('TC-B2C19-D-002 · Seccion Contactanos aparece expandida por defecto al cargar el Footer Full en Desktop (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C19-D-002';
      const home = new HomePage(page);

      // Paso 1 — primera carga de la página.
      await home.goto();
      await home.capturarEvidencia(cp, 1, 'primera carga del Home en Desktop');

      // Paso 2 — scroll hasta el footer.
      await home.footer.scrollHastaElFooter();
      await home.capturarEvidencia(cp, 2, 'footer a la vista', { elemento: home.footer.root });

      // Paso 3 — visualizar el estado de las secciones dropdown.
      // Esperado: Contactanos expandida; las otras tres colapsadas.
      const f = home.footer;
      await expect(f.panelSeccion('Contactanos')).toHaveCount(1);
      await expect(f.iconoSeccion('Contactanos')).toHaveAttribute('d', ICONO_MENOS);

      for (const seccion of ['Servicio al cliente', 'Nuestros programas', 'Nuestra empresa'] as SeccionFooter[]) {
        await expect(f.panelSeccion(seccion)).toHaveCount(0);
        await expect(f.iconoSeccion(seccion)).toHaveAttribute('d', ICONO_MAS);
      }

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: f.root });
    });

    test('TC-B2C19-D-003 · Expandir una seccion dropdown colapsada del Footer Full Desktop muestra su contenido y cambia el icono (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C19-D-003';
      const home = new HomePage(page);
      const f = home.footer;

      // Pasos 1 y 2 — navegar y hacer scroll hasta el footer.
      await home.goto();
      await f.scrollHastaElFooter();

      // Precondición del TC: "Servicio al cliente" colapsada.
      await expect(f.panelSeccion('Servicio al cliente')).toHaveCount(0);
      await expect(f.iconoSeccion('Servicio al cliente')).toHaveAttribute('d', ICONO_MAS);
      await home.capturarEvidencia(cp, 2, 'seccion Servicio al cliente colapsada con icono (+)', {
        elemento: f.root,
      });

      // Paso 3 — clic sobre el título de la sección.
      await f.clicSeccion('Servicio al cliente');

      // Esperado: la sección se expande y el icono cambia de (+) a (-).
      await expect(f.panelSeccion('Servicio al cliente')).toHaveCount(1);
      await expect(f.panelSeccion('Servicio al cliente')).toBeVisible();
      await expect(f.iconoSeccion('Servicio al cliente')).toHaveAttribute('d', ICONO_MENOS);
      await home.capturarEvidencia(cp, 3, 'seccion expandida con su contenido e icono (-)', {
        elemento: f.root,
      });

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: f.root });
    });

    test('TC-B2C19-D-004 · Colapsar una seccion dropdown expandida del Footer Full Desktop oculta su contenido y revierte el icono (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C19-D-004';
      const home = new HomePage(page);
      const f = home.footer;

      // Paso 1 — navegar y expandir la sección "Servicio al cliente".
      await home.goto();
      await f.scrollHastaElFooter();
      await f.clicSeccion('Servicio al cliente');
      await expect(f.panelSeccion('Servicio al cliente')).toHaveCount(1);
      await home.capturarEvidencia(cp, 1, 'seccion Servicio al cliente expandida con icono (-)', {
        elemento: f.root,
      });

      // Paso 2 — clic nuevamente sobre el título de la sección.
      await f.clicSeccion('Servicio al cliente');

      // Esperado: la sección se colapsa y el icono vuelve a (+).
      await expect(f.panelSeccion('Servicio al cliente')).toHaveCount(0);
      await expect(f.iconoSeccion('Servicio al cliente')).toHaveAttribute('d', ICONO_MAS);
      await home.capturarEvidencia(cp, 2, 'seccion colapsada, contenido oculto e icono (+)', {
        elemento: f.root,
      });

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: f.root });
    });

    test('TC-B2C19-D-005 · Expandir una seccion dropdown diferente colapsa automaticamente la anterior en el Footer Full Desktop (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C19-D-005';
      const home = new HomePage(page);
      const f = home.footer;

      // Paso 1 — navegar y hacer scroll: "Contactanos" viene expandida por defecto.
      await home.goto();
      await f.scrollHastaElFooter();
      await expect(f.panelSeccion('Contactanos')).toHaveCount(1);
      await home.capturarEvidencia(cp, 1, 'estado inicial con Contactanos expandida', {
        elemento: f.root,
      });

      // Paso 2 — clic sobre el título de "Servicio al cliente".
      await f.clicSeccion('Servicio al cliente');

      // Esperado: se expande la nueva, se colapsa Contactanos, y no queda más de una expandida.
      await expect(f.panelSeccion('Servicio al cliente')).toHaveCount(1);
      await expect(f.iconoSeccion('Servicio al cliente')).toHaveAttribute('d', ICONO_MENOS);
      await expect(f.panelSeccion('Contactanos')).toHaveCount(0);
      await expect(f.iconoSeccion('Contactanos')).toHaveAttribute('d', ICONO_MAS);

      let expandidas = 0;
      for (const seccion of SECCIONES) {
        expandidas += await f.panelSeccion(seccion).count();
      }
      expect(expandidas).toBe(1);

      await home.capturarEvidencia(cp, 2, 'Servicio al cliente expandida y Contactanos colapsada', {
        elemento: f.root,
      });
      await home.capturarEvidencia(cp, undefined, undefined, { elemento: f.root });
    });

    test('TC-B2C19-D-008 · Footer Full Desktop muestra los accesos estaticos de atencion al cliente con icono y texto descriptivo (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C19-D-008';
      const home = new HomePage(page);
      const f = home.footer;

      // Pasos 1 y 2 — navegar y hacer scroll hasta el footer.
      await home.goto();
      await f.scrollHastaElFooter();
      await home.capturarEvidencia(cp, 2, 'footer a la vista', { elemento: f.root });

      // Paso 3 — visualizar el bloque estático.
      // Esperado: los tres items, cada uno con icono y texto descriptivo.
      const accesos = [
        { locator: f.centroDeAyuda, titulo: /centro de ayuda/i },
        { locator: f.seguimientoDeCompra, titulo: /seguimiento de compra/i },
        { locator: f.whatsappClientes, titulo: /whatsapp clientes/i },
      ];

      for (const acceso of accesos) {
        await expect(acceso.locator).toBeVisible();
        await expect(acceso.locator).toContainText(acceso.titulo);
        await expect(f.iconoDeAcceso(acceso.locator).first()).toBeVisible();
        await expect(f.descripcionDeAcceso(acceso.locator)).toBeVisible();
        await expect(f.descripcionDeAcceso(acceso.locator)).not.toBeEmpty();
      }

      await home.capturarEvidencia(cp, 3, 'bloque estatico con icono y texto descriptivo', {
        elemento: f.accesosEstaticos.first().locator('xpath=..'),
      });
      await home.capturarEvidencia(cp, undefined, undefined, { elemento: f.root });
    });

    test('TC-B2C19-D-009 · Clic en un acceso estatico del Footer Full Desktop redirige al enlace configurado (Desktop)', async ({
      page,
    }) => {
      const cp = 'TC-B2C19-D-009';
      const home = new HomePage(page);
      const f = home.footer;

      // Pasos 1 y 2 — navegar y hacer scroll hasta el footer.
      await home.goto();
      await f.scrollHastaElFooter();

      // El destino configurado en el content asset para este acceso.
      const destino = await f.centroDeAyuda.getAttribute('href');
      expect(destino).toBeTruthy();
      await home.capturarEvidencia(cp, 2, 'acceso Centro de ayuda en el footer', {
        elemento: f.centroDeAyuda,
      });

      // Paso 3 — clic en uno de los accesos estáticos (Centro de ayuda).
      await f.centroDeAyuda.click();
      await page.waitForURL(`**${destino}`, { timeout: 30000 });

      // Esperado: se redirige al enlace configurado en el content asset para ese acceso.
      expect(new URL(page.url()).pathname).toBe(destino);
      await home.capturarEvidencia(cp, 3, 'navegacion al destino configurado /centro-de-ayuda');
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C19-D-007 · Clic en un enlace de una seccion del Footer Full Desktop redirige al destino configurado (Desktop)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C19-D-007';
      test.setTimeout(120000);
      const enlace = enlaceDeclarado(testData);
      const home = new HomePage(page);
      const f = home.footer;

      // Paso 1 — Home del sitio del enlace declarado.
      await home.gotoOrigenDe(enlace.href);
      await f.scrollHastaElFooter();

      // Paso 2 — expandir la sección que publica el enlace.
      const seccion = await f.expandirSeccionConEnlace(enlace.pathname);
      expect(seccion, `ninguna sección del footer publica el enlace ${enlace.pathname}`).not.toBeNull();
      await expect(f.enlaceDeSeccion(enlace.pathname)).toBeVisible();
      await home.capturarEvidencia(cp, 2, `seccion ${seccion} expandida con el enlace ${enlace.pathname}`, {
        elemento: f.panelSeccion(seccion!),
      });

      // Paso 3 — clic en el enlace.
      await f.enlaceDeSeccion(enlace.pathname).click();
      await page.waitForURL(`**${enlace.pathname}`, { timeout: 30000 });

      // Esperado: se redirige al destino configurado para el enlace.
      expect(page.url()).toBe(enlace.href);
      await page.waitForLoadState('domcontentloaded');
      await home.capturarEvidencia(cp, 3, `navegacion al destino configurado ${enlace.pathname}`);
    });
  });

  // ==================================================================== MOBILE 390x844
  test.describe('Mobile 390x844', () => {
    test.use(MOBILE);

    test('TC-B2C19-M-001 · Footer Full Mobile muestra la estructura completa con todas sus secciones (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C19-M-001';
      const home = new HomePage(page);

      // Paso 1 — navegar al Home con viewport Mobile 390x844.
      await home.goto();
      await home.capturarEvidencia(cp, 1, 'Home cargado en Mobile 390x844');

      // Paso 2 — hacer scroll hasta el final de la página.
      await home.footer.scrollHastaElFooter();
      await home.capturarEvidencia(cp, 2, 'footer a la vista tras el scroll', {
        elemento: home.footer.root,
      });

      // Paso 3 — visualizar el footer.
      const f = home.footer;
      await expect(f.centroDeAyuda).toBeVisible();
      await expect(f.seguimientoDeCompra).toBeVisible();
      await expect(f.whatsappClientes).toBeVisible();
      await expect(f.centroDeAyuda).toContainText(/centro de ayuda/i);
      await expect(f.seguimientoDeCompra).toContainText(/seguimiento de compra/i);
      await expect(f.whatsappClientes).toContainText(/whatsapp clientes/i);

      for (const seccion of SECCIONES) {
        await expect(f.botonSeccion(seccion)).toBeVisible();
        await expect(f.botonSeccion(seccion)).toContainText(TITULOS_SECCION[seccion]);
      }

      await expect(f.politicasDeCookies).toBeVisible();
      await expect(f.politicasDeCookies).toContainText(/pol[íi]ticas de cookies/i);
      await expect(f.tituloRedesSociales).toBeVisible();
      expect(await f.redesSociales.count()).toBeGreaterThan(0);

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: f.root });
    });

    test('TC-B2C19-M-002 · Seccion Contactanos aparece expandida por defecto al cargar el Footer Full en Mobile (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C19-M-002';
      const home = new HomePage(page);

      await home.goto();
      await home.capturarEvidencia(cp, 1, 'primera carga del Home en Mobile');

      await home.footer.scrollHastaElFooter();
      await home.capturarEvidencia(cp, 2, 'footer a la vista', { elemento: home.footer.root });

      const f = home.footer;
      await expect(f.panelSeccion('Contactanos')).toHaveCount(1);
      await expect(f.iconoSeccion('Contactanos')).toHaveAttribute('d', ICONO_MENOS);

      for (const seccion of ['Servicio al cliente', 'Nuestros programas', 'Nuestra empresa'] as SeccionFooter[]) {
        await expect(f.panelSeccion(seccion)).toHaveCount(0);
        await expect(f.iconoSeccion(seccion)).toHaveAttribute('d', ICONO_MAS);
      }

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: f.root });
    });

    test('TC-B2C19-M-003 · Expandir una seccion dropdown colapsada del Footer Full Mobile muestra su contenido y cambia el icono (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C19-M-003';
      const home = new HomePage(page);
      const f = home.footer;

      await home.goto();
      await f.scrollHastaElFooter();

      await expect(f.panelSeccion('Servicio al cliente')).toHaveCount(0);
      await expect(f.iconoSeccion('Servicio al cliente')).toHaveAttribute('d', ICONO_MAS);
      await home.capturarEvidencia(cp, 2, 'seccion Servicio al cliente colapsada con icono (+)', {
        elemento: f.root,
      });

      // Paso 3 — pulsar sobre el título de la sección.
      await f.clicSeccion('Servicio al cliente');

      await expect(f.panelSeccion('Servicio al cliente')).toHaveCount(1);
      await expect(f.panelSeccion('Servicio al cliente')).toBeVisible();
      await expect(f.iconoSeccion('Servicio al cliente')).toHaveAttribute('d', ICONO_MENOS);
      await home.capturarEvidencia(cp, 3, 'seccion expandida con su contenido e icono (-)', {
        elemento: f.root,
      });

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: f.root });
    });

    test('TC-B2C19-M-004 · Colapsar una seccion dropdown expandida del Footer Full Mobile oculta su contenido y revierte el icono (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C19-M-004';
      const home = new HomePage(page);
      const f = home.footer;

      await home.goto();
      await f.scrollHastaElFooter();
      await f.clicSeccion('Servicio al cliente');
      await expect(f.panelSeccion('Servicio al cliente')).toHaveCount(1);
      await home.capturarEvidencia(cp, 1, 'seccion Servicio al cliente expandida con icono (-)', {
        elemento: f.root,
      });

      await f.clicSeccion('Servicio al cliente');

      await expect(f.panelSeccion('Servicio al cliente')).toHaveCount(0);
      await expect(f.iconoSeccion('Servicio al cliente')).toHaveAttribute('d', ICONO_MAS);
      await home.capturarEvidencia(cp, 2, 'seccion colapsada, contenido oculto e icono (+)', {
        elemento: f.root,
      });

      await home.capturarEvidencia(cp, undefined, undefined, { elemento: f.root });
    });

    test('TC-B2C19-M-005 · Expandir una seccion dropdown diferente colapsa automaticamente la anterior en el Footer Full Mobile (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C19-M-005';
      const home = new HomePage(page);
      const f = home.footer;

      await home.goto();
      await f.scrollHastaElFooter();
      await expect(f.panelSeccion('Contactanos')).toHaveCount(1);
      await home.capturarEvidencia(cp, 1, 'estado inicial con Contactanos expandida', {
        elemento: f.root,
      });

      await f.clicSeccion('Servicio al cliente');

      await expect(f.panelSeccion('Servicio al cliente')).toHaveCount(1);
      await expect(f.iconoSeccion('Servicio al cliente')).toHaveAttribute('d', ICONO_MENOS);
      await expect(f.panelSeccion('Contactanos')).toHaveCount(0);
      await expect(f.iconoSeccion('Contactanos')).toHaveAttribute('d', ICONO_MAS);

      let expandidas = 0;
      for (const seccion of SECCIONES) {
        expandidas += await f.panelSeccion(seccion).count();
      }
      expect(expandidas).toBe(1);

      await home.capturarEvidencia(cp, 2, 'Servicio al cliente expandida y Contactanos colapsada', {
        elemento: f.root,
      });
      await home.capturarEvidencia(cp, undefined, undefined, { elemento: f.root });
    });

    test('TC-B2C19-M-008 · Footer Full Mobile muestra los accesos estaticos de atencion al cliente con icono y texto descriptivo (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C19-M-008';
      const home = new HomePage(page);
      const f = home.footer;

      await home.goto();
      await f.scrollHastaElFooter();
      await home.capturarEvidencia(cp, 2, 'footer a la vista', { elemento: f.root });

      const accesos = [
        { locator: f.centroDeAyuda, titulo: /centro de ayuda/i },
        { locator: f.seguimientoDeCompra, titulo: /seguimiento de compra/i },
        { locator: f.whatsappClientes, titulo: /whatsapp clientes/i },
      ];

      for (const acceso of accesos) {
        await expect(acceso.locator).toBeVisible();
        await expect(acceso.locator).toContainText(acceso.titulo);
        await expect(f.iconoDeAcceso(acceso.locator).first()).toBeVisible();
        await expect(f.descripcionDeAcceso(acceso.locator)).toBeVisible();
        await expect(f.descripcionDeAcceso(acceso.locator)).not.toBeEmpty();
      }

      await home.capturarEvidencia(cp, 3, 'bloque estatico con icono y texto descriptivo', {
        elemento: f.accesosEstaticos.first().locator('xpath=..'),
      });
      await home.capturarEvidencia(cp, undefined, undefined, { elemento: f.root });
    });

    test('TC-B2C19-M-009 · Clic en un acceso estatico del Footer Full Mobile redirige al enlace configurado (Mobile)', async ({
      page,
    }) => {
      const cp = 'TC-B2C19-M-009';
      const home = new HomePage(page);
      const f = home.footer;

      await home.goto();
      await f.scrollHastaElFooter();

      const destino = await f.centroDeAyuda.getAttribute('href');
      expect(destino).toBeTruthy();
      await home.capturarEvidencia(cp, 2, 'acceso Centro de ayuda en el footer', {
        elemento: f.centroDeAyuda,
      });

      // Paso 3 — pulsar en uno de los accesos estáticos (Centro de ayuda).
      await f.centroDeAyuda.click();
      await page.waitForURL(`**${destino}`, { timeout: 30000 });

      expect(new URL(page.url()).pathname).toBe(destino);
      await home.capturarEvidencia(cp, 3, 'navegacion al destino configurado /centro-de-ayuda');
      await home.capturarEvidencia(cp);
    });

    test('TC-B2C19-M-007 · Clic en un enlace de una seccion del Footer Full Mobile redirige al destino configurado (Mobile)', async ({
      page,
      testData,
    }) => {
      const cp = 'TC-B2C19-M-007';
      test.setTimeout(120000);
      const enlace = enlaceDeclarado(testData);
      const home = new HomePage(page);
      const f = home.footer;

      // Paso 1 — Home del sitio del enlace declarado.
      await home.gotoOrigenDe(enlace.href);
      await f.scrollHastaElFooter();

      // Paso 2 — expandir la sección que publica el enlace.
      const seccion = await f.expandirSeccionConEnlace(enlace.pathname);
      expect(seccion, `ninguna sección del footer publica el enlace ${enlace.pathname}`).not.toBeNull();
      await expect(f.enlaceDeSeccion(enlace.pathname)).toBeVisible();
      await home.capturarEvidencia(cp, 2, `seccion ${seccion} expandida con el enlace ${enlace.pathname}`, {
        elemento: f.panelSeccion(seccion!),
      });

      // Paso 3 — pulsar en el enlace.
      await f.enlaceDeSeccion(enlace.pathname).click();
      await page.waitForURL(`**${enlace.pathname}`, { timeout: 30000 });

      // Esperado: se redirige al destino configurado para el enlace.
      expect(page.url()).toBe(enlace.href);
      await page.waitForLoadState('domcontentloaded');
      await home.capturarEvidencia(cp, 3, `navegacion al destino configurado ${enlace.pathname}`);
    });
  });
});
