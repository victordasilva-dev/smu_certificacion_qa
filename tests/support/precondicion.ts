import { Locator } from '@playwright/test';

/**
 * Fallar rápido cuando la data del caso no sirve.
 *
 * Un `test()` cuya precondición no se cumple —el SKU no está en la PLP declarada, la cuenta no
 * tiene el estado pedido, el botón que el caso necesita no existe— no debe gastar su timeout
 * entero esperando algo que no va a aparecer: hoy eso son 180 s por caso, y con un reintento, el
 * doble. Estas funciones comprueban la precondición con una espera corta y, si no se cumple,
 * cortan el caso con `PRECONDICION_NO_DISPONIBLE: <qué falta>`.
 *
 * Ese prefijo es un contrato con el resto del molde:
 *  - el fixture `evidenciaDelCaso` (tests/support/fixtures.ts) no repite el caso en el reintento;
 *  - la Fase 8 de la skill lo traduce a `Bloqueado Data` (o `Bloqueado`), nunca a `Rechazado`.
 *
 * Úsalas ANTES de lo que el caso valida. Una aserción sobre el resultado esperado sigue siendo
 * `expect(...)`: si falla ahí, es un `Rechazado` legítimo.
 */
export const PREFIJO_PRECONDICION = 'PRECONDICION_NO_DISPONIBLE';

export class PrecondicionNoDisponible extends Error {
  constructor(queFalta: string) {
    super(`${PREFIJO_PRECONDICION}: ${queFalta}`);
    this.name = 'PrecondicionNoDisponible';
  }
}

/** Corta el caso si `condicion` es falsa. */
export function exigir(condicion: unknown, queFalta: string): asserts condicion {
  if (!condicion) throw new PrecondicionNoDisponible(queFalta);
}

/**
 * Espera hasta `timeout` ms a que el locator sea visible; si no aparece, corta el caso como
 * precondición no disponible. 15 s alcanzan para un elemento que sí está en una página ya cargada
 * de un ambiente lento; lo que no apareció en 15 s no va a aparecer en 180.
 */
export async function exigirVisible(locator: Locator, queFalta: string, timeout = 15000): Promise<void> {
  const visible = await locator
    .first()
    .waitFor({ state: 'visible', timeout })
    .then(() => true, () => false);
  if (!visible) throw new PrecondicionNoDisponible(queFalta);
}

/** Igual que `exigirVisible`, pero devuelve el locator (para encadenar). */
export async function hallarOFallar(locator: Locator, queFalta: string, timeout = 15000): Promise<Locator> {
  await exigirVisible(locator, queFalta, timeout);
  return locator.first();
}
