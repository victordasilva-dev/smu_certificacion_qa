const fs = require('node:fs/promises');
const path = require('node:path');
const { google } = require('googleapis');

const root = process.cwd();
const requestsDir = path.join(root, '.qa/otp/pedidos');
const credentials = require(path.join(root, '.qa/secrets/gmail-credentials.json')).installed;
const token = require(path.join(root, '.qa/secrets/gmail-token.json'));
const auth = new google.auth.OAuth2(credentials.client_id, credentials.client_secret, 'http://localhost:3000/oauth2callback');
auth.setCredentials(token);
const gmail = google.gmail({ version: 'v1', auth });
let running = false;
let backoffMs = 0;

function decode(data = '') {
  return Buffer.from(data.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8');
}
function flatten(payload) {
  const parts = [];
  if (payload?.body?.data) parts.push(decode(payload.body.data));
  for (const part of payload?.parts ?? []) parts.push(...flatten(part));
  return parts.join('\n');
}
function extract(text) {
  const plain = text.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ');
  const aroundCode = plain.match(/(?:c[oó]digo|code)[^\d]{0,120}((?:\d\s*){6})/i);
  return aroundCode?.[1]?.replace(/\D/g, '') ?? null;
}
async function findCode(request) {
  const q = `to:${request.correo} subject:("Tu código de verificación") after:${request.desde_epoch}`;
  const list = await gmail.users.messages.list({ userId: 'me', q, maxResults: 1 });
  const item = list.data.messages?.[0];
  if (!item?.id) return null;
  const message = await gmail.users.messages.get({ userId: 'me', id: item.id, format: 'full' });
  if (Number(message.data.internalDate ?? 0) < new Date(request.desde).getTime()) return null;
  return extract(flatten(message.data.payload));
}
async function tick() {
  if (running) return;
  running = true;
  try {
  await fs.mkdir(requestsDir, { recursive: true });
  const names = (await fs.readdir(requestsDir)).filter((n) => n.endsWith('.json')).sort().reverse();
  for (const name of names) {
    const file = path.join(requestsDir, name);
    let request;
    try { request = JSON.parse(await fs.readFile(file, 'utf8')); } catch { continue; }
    // The OTP bridge is single-worker. Only service the newest live request so stale requests
    // cannot consume quota or receive a code intended for the active test.
    if (Date.now() - new Date(request.desde).getTime() > 10 * 60 * 1000) continue;
    const code = await findCode(request);
    if (!code) return;
    const response = path.resolve(root, request.respuesta);
    await fs.mkdir(path.dirname(response), { recursive: true });
    await fs.writeFile(response, code, { mode: 0o600 });
    console.log(`OTP entregado para ${request.cp_id}`);
    return;
  }
  } finally { running = false; }
}
console.log('Puente Gmail OTP activo. No imprime códigos.');
async function loop() {
  while (true) {
    try {
      await tick();
      backoffMs = 0;
    } catch (e) {
      const status = e?.code || e?.response?.status;
      if (status === 429 || status === 403) {
        backoffMs = Math.min(backoffMs ? backoffMs * 2 : 30000, 5 * 60 * 1000);
        console.error(`Gmail limitó las consultas; reintento en ${Math.round(backoffMs / 1000)} s.`);
      } else {
        backoffMs = 30000;
        console.error('Gmail OTP:', e.message);
      }
    }
    await new Promise((resolve) => setTimeout(resolve, backoffMs || 15000));
  }
}
loop();
