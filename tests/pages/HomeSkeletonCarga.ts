import { CDPSession, Locator, Page } from '@playwright/test';

/**
 * Carga del Home bajo red lenta, vista desde sus placeholders tipo skeleton (HU B2C-29).
 *
 * Es un componente aparte de `HomePage` para no tocar un POM que comparten otras suites. El
 * skeleton no tiene una marca única en el storefront: unas veces lleva la clase de Chakra y otras
 * es un bloque gris sin texto con animación CSS de pulso, así que se miden las dos formas.
 * No lleva `expect`: el veredicto lo decide el `test()`.
 */
export class HomeSkeletonCarga {
  private cdp?: CDPSession;

  constructor(private readonly page: Page) {}

  /** Placeholders con clase o atributo de skeleton. */
  get skeletonsConClase(): Locator {
    return this.page.locator('.chakra-skeleton, [class*="skeleton" i], [data-testid*="skeleton" i]');
  }

  /** Throttling equivalente al preset "Slow 3G" de DevTools (500 kbps, 400 ms de latencia). Solo Chromium. */
  async activarSlow3G(): Promise<void> {
    this.cdp = await this.page.context().newCDPSession(this.page);
    await this.cdp.send('Network.enable');
    await this.cdp.send('Network.emulateNetworkConditions', {
      offline: false,
      latency: 400,
      downloadThroughput: (500 * 1024) / 8,
      uploadThroughput: (500 * 1024) / 8,
    });
  }

  async desactivarThrottling(): Promise<void> {
    await this.cdp?.send('Network.emulateNetworkConditions', {
      offline: false,
      latency: 0,
      downloadThroughput: -1,
      uploadThroughput: -1,
    });
  }

  /** Instala (antes de navegar) un registro del máximo de skeletons vistos y de errores de carga. */
  async registrar(): Promise<void> {
    await this.page.addInitScript(() => {
      const w = window as unknown as { __sk: { max: number; primero: number; vistos: number } };
      w.__sk = { max: 0, primero: -1, vistos: 0 };
      const t0 = performance.now();
      const medir = () => {
        const conClase = document.querySelectorAll(
          '.chakra-skeleton, [class*="skeleton" i], [data-testid*="skeleton" i]',
        ).length;
        const animados = [...document.querySelectorAll('body *')].filter((e) => {
          const cs = getComputedStyle(e);
          return (
            cs.animationName !== 'none' &&
            (e as HTMLElement).getBoundingClientRect().height > 30 &&
            !(e.textContent ?? '').trim()
          );
        }).length;
        const n = conClase + animados;
        if (n > 0 && w.__sk.primero < 0) w.__sk.primero = Math.round(performance.now() - t0);
        if (n > w.__sk.max) w.__sk.max = n;
        w.__sk.vistos = n;
      };
      setInterval(medir, 50);
    });
  }

  async registro(): Promise<{ max: number; primero: number; vistos: number }> {
    return this.page.evaluate(
      () => (window as unknown as { __sk?: { max: number; primero: number; vistos: number } }).__sk ?? { max: 0, primero: -1, vistos: 0 },
    );
  }

  /** Skeletons presentes ahora mismo (con clase o animados sin texto). */
  async skeletonsAhora(): Promise<number> {
    return (await this.registro()).vistos;
  }

  get textoDeError(): Locator {
    return this.page.getByText(/algo sali[oó] mal|ocurri[oó] un error|error inesperado|tuvimos problemas/i);
  }
}
