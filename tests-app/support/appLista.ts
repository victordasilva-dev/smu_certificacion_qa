import { execSync } from 'child_process';

/**
 * Deja la app abierta y con la barra de pestañas visible antes de `sesion()`.
 *
 * `sesion()` (sesionOtp.ts) interpreta "no veo las pestañas" como "estoy dentro de otra pantalla" y
 * pulsa «atrás». En un emulador lento la app sigue en el splash cuando ocurre eso, y «atrás» la
 * cierra: el helper la relanza, vuelve a cerrarla, y tras seis vueltas el caso cae sin haber
 * probado nada. Aquí solo se lanza la app si no tiene el foco y, una vez en primer plano, se
 * espera —sin pulsar «atrás»— a que aparezcan las pestañas. El adb usa ANDROID_SERIAL.
 */
const PAQUETE = 'cl.smu.unimarcapp.sfcc.qa';
const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Toca una coordenada pensada para 1080x2400 (Pixel 6) escalándola a la resolución del dispositivo en uso. */
function tocarPestaña(x: number, y: number): void {
  const wm = execSync('adb shell wm size', { timeout: 15000 }).toString();
  const m = /(\d+)x(\d+)/.exec(wm.split('Override size:').pop() ?? wm);
  const [w, h] = m ? [Number(m[1]), Number(m[2])] : [1080, 2400];
  execSync(`adb shell input tap ${Math.round((x * w) / 1080)} ${Math.round((y * h) / 2400)}`, { timeout: 15000 });
}

export async function asegurarApp(screen: any, maxMs = 420000): Promise<void> {
  const fin = Date.now() + maxMs;
  let ultimoLanzamiento = 0;
  const inicio = Date.now();
  let reiniciada = false;
  while (Date.now() < fin) {
    let fallaDump = false;
    if (await screen.getByTestId('tab-Mi cuenta').isVisible().catch((e: unknown) => { fallaDump = /no XML content|idle|dump UI/i.test(String(e)); return false; })) return;
    // La Home con sesión (píldora del carro y contador) nunca queda inactiva y uiautomator no la vuelca
    // ("could not get idle state"). Si el volcado falla, lo único que puede estar a la vista es esa Home
    // (la PDP y el resto sí se vuelcan): se pasa a «Mi cuenta» tocando su pestaña por coordenadas.
    if (fallaDump && Date.now() - inicio > 15000) {
      tocarPestaña(900, 2232);
      await dormir(4000);
      continue;
    }
    // El foco que informa `dumpsys window` puede quedar pegado en un diálogo "Application Error"
    // viejo aunque la pantalla muestre otra cosa, así que no se decide por él: mientras no se
    // vean las pestañas se vuelve a poner la app al frente cada 30 s (monkey la lanza o la trae
    // al frente, y no la cierra si ya corre). Nunca se pulsa «atrás».
    // Tras un caso la app puede quedar en blanco (JS colgado): si en 240 s no hay pestañas (el splash en frío tarda varios minutos) ni PDP
    // que cerrar, se fuerza el cierre y se relanza (la sesión queda guardada en el dispositivo).
    if (!reiniciada && Date.now() - inicio > 240000) {
      reiniciada = true;
      execSync(`adb shell am force-stop ${PAQUETE}`, { timeout: 15000 });
      await dormir(2000);
      ultimoLanzamiento = 0;
    }
    if (Date.now() - ultimoLanzamiento > 30000) {
      execSync(`adb shell monkey -p ${PAQUETE} -c android.intent.category.LAUNCHER 1`, { timeout: 15000 });
      ultimoLanzamiento = Date.now();
    }
    // Si el caso anterior dejó la app dentro de una PDP (sin barra de pestañas) no hay splash que
    // proteger: se vuelve con «atrás». Solo se pulsa si la PDP está a la vista.
    if (await screen.getByTestId('pdp-gallery-page').isVisible().catch(() => false)) {
      execSync('adb shell input keyevent 4', { timeout: 15000 });
      await dormir(2500);
      continue;
    }
    await dormir(4000);
  }
}
