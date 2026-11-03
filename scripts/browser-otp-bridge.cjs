const fs = require('node:fs/promises');
const path = require('node:path');
const http = require('node:http');
const crypto = require('node:crypto');

const root = process.cwd();
const pedidosDir = path.join(root, '.qa/otp/pedidos');
const tokenFile = path.join(root, '.qa/otp/browser-token');
const port = 8765;

async function getToken() {
  await fs.mkdir(path.dirname(tokenFile), { recursive: true });
  try { return (await fs.readFile(tokenFile, 'utf8')).trim(); }
  catch {
    const token = crypto.randomBytes(32).toString('hex');
    await fs.writeFile(tokenFile, token, { mode: 0o600 });
    return token;
  }
}

async function activeRequest() {
  const names = (await fs.readdir(pedidosDir).catch(() => []))
    .filter((name) => name.endsWith('.json')).sort().reverse();
  for (const name of names) {
    try {
      const request = JSON.parse(await fs.readFile(path.join(pedidosDir, name), 'utf8'));
      if (Date.now() - new Date(request.desde).getTime() > 10 * 60 * 1000) continue;
      return request;
    } catch { /* Pedido incompleto; revisar el siguiente. */ }
  }
  return null;
}

function json(res, status, value) {
  res.writeHead(status, { 'content-type': 'application/json', 'cache-control': 'no-store' });
  res.end(JSON.stringify(value));
}

async function readBody(req) {
  let body = '';
  for await (const chunk of req) {
    body += chunk;
    if (body.length > 4096) throw new Error('body too large');
  }
  return JSON.parse(body || '{}');
}

const server = http.createServer(async (req, res) => {
  try {
    const token = await getToken();
    if (req.method === 'GET' && req.url === '/config') return json(res, 200, { token });
    if (req.method === 'GET' && req.url === '/active') {
      const request = await activeRequest();
      if (!request) return json(res, 200, { request: null });
      return json(res, 200, { request: {
        id: request.id, cp_id: request.cp_id, correo: request.correo,
        desde_epoch: request.desde_epoch,
      } });
    }
    if (req.method === 'POST' && req.url === '/otp') {
      const body = await readBody(req);
      if (body.token !== token || !/^\d{6}$/.test(body.code || '')) return json(res, 403, { ok: false });
      const request = await activeRequest();
      if (!request || request.id !== body.id) return json(res, 409, { ok: false });
      const response = path.resolve(root, request.respuesta);
      const allowed = path.resolve(root, '.qa/otp/codigos') + path.sep;
      if (!response.startsWith(allowed)) return json(res, 400, { ok: false });
      await fs.writeFile(response, body.code, { mode: 0o600 });
      console.log(`OTP entregado para ${request.cp_id}`);
      return json(res, 200, { ok: true });
    }
    return json(res, 404, { ok: false });
  } catch (error) {
    console.error(`Puente OTP navegador: ${error.message}`);
    return json(res, 400, { ok: false });
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Puente de OTP por navegador activo en 127.0.0.1:${port}. No imprime códigos.`);
});
