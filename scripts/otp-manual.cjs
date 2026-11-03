const fs = require('node:fs/promises');
const path = require('node:path');
const readline = require('node:readline');

const root = process.cwd();
const pedidosDir = path.join(root, '.qa', 'otp', 'pedidos');
const vistos = new Set();
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const pregunta = (texto) => new Promise((resolve) => rl.question(texto, resolve));
const pausa = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  await fs.mkdir(pedidosDir, { recursive: true });
  console.log('OTP manual activo. Deja esta terminal abierta.');
  console.log('Cuando un test solicite un OTP, escríbelo aquí y presiona Enter.');
  console.log('Usa Ctrl+C para terminar. El código se escribe solo en el archivo local que espera Playwright.\n');

  while (true) {
    let nombres = [];
    try {
      nombres = (await fs.readdir(pedidosDir)).filter((n) => n.endsWith('.json')).sort();
    } catch {
      // La carpeta puede desaparecer temporalmente; se reintenta.
    }

    for (const nombre of nombres) {
      if (vistos.has(nombre)) continue;
      const pedidoPath = path.join(pedidosDir, nombre);
      let pedido;
      try {
        pedido = JSON.parse(await fs.readFile(pedidoPath, 'utf8'));
      } catch {
        continue; // El archivo puede estar todavía escribiéndose.
      }

      vistos.add(nombre);
      console.log(`\nSolicitud OTP recibida para: ${pedido.correo || '(correo no indicado)'}`);
      console.log(`Caso: ${pedido.cp_id || 'desconocido'}${pedido.digitos ? ` · ${pedido.digitos} dígitos` : ''}`);

      let codigo = '';
      while (!/^\d{6}$/.test(codigo)) {
        codigo = (await pregunta('Ingresa el OTP de 6 dígitos: ')).trim();
        if (!/^\d{6}$/.test(codigo)) console.log('Código inválido: ingresa exactamente 6 dígitos.');
      }

      const destino = path.resolve(root, pedido.respuesta);
      await fs.mkdir(path.dirname(destino), { recursive: true });
      await fs.writeFile(destino, codigo, 'utf8');
      console.log('Respuesta entregada a Playwright. Esperando la siguiente solicitud...\n');
    }

    await pausa(400);
  }
}

main().catch((error) => {
  console.error('Error en el puente OTP:', error);
  process.exitCode = 1;
}).finally(() => {
  // En la ejecución normal main permanece activo hasta que se interrumpe con Ctrl+C.
});
