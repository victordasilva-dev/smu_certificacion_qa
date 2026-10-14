import { Locator, Page } from '@playwright/test';

/**
 * Accesos de la cuenta, lo que abre el saludo del header cuando hay sesión.
 *
 * Es un componente, no una página navegable: no extiende `BasePage`. Aquí vive solo lo que la
 * suite necesita —el cierre de sesión—, porque los TC de B2C-100 lo usan para comprobar que el
 * historial del buscador no sobrevive a un ciclo de logout/login.
 *
 * **El mismo gesto lleva a dos sitios distintos según el form-factor.** En Desktop el saludo abre
 * un diálogo flotante con los accesos, y el "Cerrar sesión" está ahí dentro. En Mobile no hay
 * diálogo: el botón **navega a `/account`** y el "Cerrar sesión" queda al final de esa página,
 * bien por debajo del pliegue. Por eso este POM no busca un `[role="dialog"]` —en Mobile no
 * existe— sino el botón de cierre allá donde haya quedado.
 *
 * El disparador tampoco se rotula igual: en Desktop el botón lleva el texto "Hola, <nombre>" y en
 * Mobile solo las iniciales ("KH"), con el saludo en el `aria-label`. Un locator por texto
 * encuentra uno y no el otro, así que se aceptan los dos rótulos.
 */
export class MenuCuenta {
  constructor(private readonly page: Page) {}

  /** El saludo del header. Solo existe con sesión iniciada. */
  get disparador(): Locator {
    return this.page
      .locator('header button[aria-label^="Hola,"], header button:has-text("Hola,")')
      .locator('visible=true')
      .first();
  }

  /**
   * Partes del disparador: las iniciales del ícono y, en Desktop, el saludo "Hola, <nombre>".
   * El botón pinta cada parte en su propia línea ("KH\nHola, Karl"); en Mobile solo las iniciales
   * (B2C-69).
   */
  async partesDelDisparador(): Promise<{ iniciales: string; saludoVisible: string | null; aria: string | null }> {
    const aria = await this.disparador.getAttribute('aria-label');
    const lineas = (await this.disparador.innerText()).split('\n').map((l) => l.trim()).filter(Boolean);
    const saludo = lineas.find((l) => /^hola,/i.test(l)) ?? null;
    const iniciales = lineas.find((l) => !/^hola,/i.test(l)) ?? '';
    return { iniciales, saludoVisible: saludo, aria };
  }

  /** El diálogo de accesos de Desktop ("¡Hola! Aquí está lo que buscas"). */
  get modal(): Locator {
    return this.page
      .locator('[role="dialog"]')
      .filter({ hasText: /aqu[íi] est[áa] lo que buscas/i })
      .locator('visible=true')
      .first();
  }

  /** Opción del diálogo de accesos, por su rótulo. */
  opcion(nombre: RegExp): Locator {
    return this.modal.getByRole('button', { name: nombre }).or(this.modal.getByRole('link', { name: nombre })).first();
  }

  /** Rótulos de las opciones del diálogo, en orden, sin el botón de cierre. */
  async opciones(): Promise<string[]> {
    const textos = await this.modal.locator('a, button').allInnerTexts();
    return textos.map((t) => t.trim()).filter((t) => t && !/^close$|^cerrar$/i.test(t));
  }

  async abrir(): Promise<void> {
    await this.disparador.click();
  }

  /** "Cerrar sesión": en el diálogo de Desktop o en la página /account de Mobile. */
  get botonCerrarSesion(): Locator {
    return this.page
      .getByRole('button', { name: /cerrar sesi[óo]n/i })
      .locator('visible=true')
      .first();
  }

  /**
   * Cierra la sesión y espera a que el header vuelva a ofrecer "Ingresa aquí".
   *
   * Devolver antes dejaría al `test()` mirando un header a medio rehidratar, donde el saludo ya no
   * está pero la sesión todavía no se ha soltado.
   */
  async cerrarSesion(): Promise<void> {
    await this.disparador.click();
    await this.botonCerrarSesion.waitFor({ state: 'visible', timeout: 30000 });

    const sesionCerrada = this.page
      .locator('header button:has-text("Ingresa aquí")')
      .locator('visible=true')
      .first();

    // El primer clic sobre "Cerrar sesión" no siempre prende: la fila está por debajo del pliegue
    // y Playwright la trae al viewport con el mismo gesto que la pulsa, de modo que el botón puede
    // recibir el clic mientras todavía se está reacomodando. El síntoma engaña —no hay error de
    // interacción, el clic "ocurre"— y el caso caduca esperando un logout que nadie llegó a pedir.
    for (let intento = 0; intento < 3; intento++) {
      await this.botonCerrarSesion.scrollIntoViewIfNeeded();
      await this.page.waitForTimeout(500);
      await this.botonCerrarSesion.click();
      try {
        await sesionCerrada.waitFor({ state: 'visible', timeout: 20000 });
        await this.page.waitForTimeout(2000);
        return;
      } catch {
        if ((await this.botonCerrarSesion.count()) === 0) break;
      }
    }
    await sesionCerrada.waitFor({ state: 'visible', timeout: 20000 });
    await this.page.waitForTimeout(2000);
  }
}
