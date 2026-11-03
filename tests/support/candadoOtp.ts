import * as fs from 'fs';
import * as path from 'path';
import { test } from '@playwright/test';

/**
 * Candado por correo para no mezclar OTPs entre dos corridas que usan la misma casilla.
 * `mkdir` es atómico: quien lo crea es el dueño; los demás esperan 20 s y reintentan (máx. 10 min).
 * También respeta un candado de otro co-worker aunque sanitice el correo con otros separadores.
 */
const RAIZ = path.resolve(process.cwd(), '.qa', 'otp');
const alnum = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

export async function conCandado<T>(correo: string, fn: () => Promise<T>): Promise<T> {
  fs.mkdirSync(RAIZ, { recursive: true });
  const propio = path.join(RAIZ, `lock-${correo.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`);
  const objetivo = 'lock' + alnum(correo);
  const ajeno = () =>
    fs.readdirSync(RAIZ).some((n) => n.startsWith('lock-') && alnum(n) === objetivo && path.join(RAIZ, n) !== propio);
  const fin = Date.now() + 600_000;
  for (;;) {
    if (!ajeno()) {
      try {
        fs.mkdirSync(propio);
        break;
      } catch (e) {
        if ((e as NodeJS.ErrnoException).code !== 'EEXIST') throw e;
      }
    }
    if (Date.now() > fin) throw new Error('CANDADO_OTP_NO_OBTENIDO: la casilla sigue en uso tras 10 min');
    test.info().setTimeout(test.info().timeout + 20_000);
    await new Promise((r) => setTimeout(r, 20_000));
  }
  try {
    return await fn();
  } finally {
    try {
      fs.rmdirSync(propio);
    } catch {
      /* ya liberado */
    }
  }
}
