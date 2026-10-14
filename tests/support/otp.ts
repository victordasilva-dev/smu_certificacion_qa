import * as fs from 'fs';
import * as path from 'path';
import { test } from '@playwright/test';

/**
 * Código OTP de un inicio de sesión, leído del correo por el agente.
 *
 * El spec corre en Node y no tiene acceso al buzón; quien sí lo tiene es el agente que conduce la
 * corrida, por el MCP de Gmail. Este módulo es el punto de encuentro entre los dos, por archivos:
 *
 *   1. El spec, **justo antes** de pedir el código en la UI, llama a `marcaOtp()` para fijar desde
 *      cuándo vale un correo. Un correo anterior es el OTP de otro intento, ya vencido.
 *   2. Tras pedirlo, llama a `esperarOtp(correo, desde)`. Eso deja el pedido en
 *      `.qa/otp/pedidos/<id>.json` y espera la respuesta en `.qa/otp/codigos/<id>.txt`.
 *   3. El agente ve el pedido, busca en Gmail el correo dirigido a `correo` recibido después de
 *      `desde`, extrae el código y lo escribe en el `.txt`. El spec lo lee, borra los dos archivos
 *      y sigue.
 *
 * Si el código no llega a tiempo, el caso falla con un error que empieza por `OTP_NO_RECIBIDO`:
 * es un impedimento de ambiente (buzón inaccesible, correo demorado), no un defecto del producto,
 * salvo que el TC trate justamente del envío del OTP.
 *
 * `OTP_CODE` en el entorno salta todo esto (una corrida manual con el código a mano).
 */

const RAIZ = path.resolve(process.cwd(), '.qa', 'otp');
const PEDIDOS = path.join(RAIZ, 'pedidos');
const CODIGOS = path.join(RAIZ, 'codigos');

/** Espera por defecto: el agente tiene que ver el pedido, buscar en Gmail y escribir el código. */
const ESPERA_MS = Number(process.env.OTP_TIMEOUT_MS) || 180_000;

/** Instante desde el que vale un correo. Se toma un margen hacia atrás por desfase de relojes. */
export function marcaOtp(): Date {
  return new Date(Date.now() - 30_000);
}

export interface OpcionesOtp {
  /** Cuánto esperar el código, en ms. Por defecto `OTP_TIMEOUT_MS` o 3 min. */
  timeout?: number;
  /** Largo esperado del código (ej. 6). Solo informa al agente qué buscar. */
  digitos?: number;
}

/**
 * Pide al agente el OTP enviado a `correo` después de `desde` y espera a que lo deje.
 *
 * Amplía el timeout del caso en lo que dure la espera, para que la espera del correo no se coma
 * el tiempo de los pasos que vienen después.
 */
export async function esperarOtp(correo: string, desde: Date, opciones: OpcionesOtp = {}): Promise<string> {
  const manual = process.env.OTP_CODE?.trim();
  if (manual) return manual;

  const timeout = opciones.timeout ?? ESPERA_MS;
  const info = test.info();
  info.setTimeout(info.timeout + timeout);

  const cpId = info.title.split(' ')[0];
  const id = `${cpId}-${info.project.name}-r${info.retry}-${Date.now()}`.replace(/[^\w.-]+/g, '_');
  const pedido = path.join(PEDIDOS, `${id}.json`);
  const respuesta = path.join(CODIGOS, `${id}.txt`);

  await fs.promises.mkdir(PEDIDOS, { recursive: true });
  await fs.promises.mkdir(CODIGOS, { recursive: true });
  await fs.promises.writeFile(
    pedido,
    JSON.stringify(
      {
        id,
        cp_id: cpId,
        correo,
        desde: desde.toISOString(),
        // Gmail filtra `after:` por segundos epoch.
        desde_epoch: Math.floor(desde.getTime() / 1000),
        digitos: opciones.digitos ?? null,
        respuesta: path.relative(process.cwd(), respuesta).split(path.sep).join('/'),
      },
      null,
      2,
    ),
    'utf-8',
  );

  const limite = Date.now() + timeout;
  try {
    while (Date.now() < limite) {
      const codigo = await fs.promises.readFile(respuesta, 'utf-8').catch(() => '');
      if (codigo.trim()) return codigo.trim();
      await new Promise((r) => setTimeout(r, 1000));
    }
  } finally {
    await fs.promises.rm(pedido, { force: true });
    await fs.promises.rm(respuesta, { force: true });
  }
  throw new Error(
    `OTP_NO_RECIBIDO: no llegó el código para ${correo} en ${Math.round(timeout / 1000)} s ` +
      `(pedido ${id}). Nadie respondió el pedido en .qa/otp/pedidos/.`,
  );
}
