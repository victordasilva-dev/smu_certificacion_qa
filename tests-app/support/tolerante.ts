/**
 * Reintenta una operación sobre la UI cuando falla por ambiente del emulador: uiautomator sin XML
 * ("no XML content found in uiautomator dump", típico con el cursor de un EditText o el mapa de
 * Google en pantalla) o el agente de mobilecli que no responde al enviar texto. Cualquier otro
 * error —una aserción que no se cumple— se propaga tal cual.
 */
const AMBIENTE = /no XML content|dump UI|send text|agent timed out|deadline exceeded/i;

export async function tolerante<T>(fn: () => Promise<T>, intentos = 6): Promise<T> {
  for (let i = 0; ; i++) {
    try {
      return await fn();
    } catch (e) {
      if (i >= intentos - 1 || !AMBIENTE.test(String(e))) throw e;
      await new Promise((r) => setTimeout(r, 2500));
    }
  }
}
