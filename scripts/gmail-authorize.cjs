const fs = require('node:fs');
const http = require('node:http');
const { exec } = require('node:child_process');
const { google } = require('googleapis');

const credentialsPath = '.qa/secrets/gmail-credentials.json';
const tokenPath = '.qa/secrets/gmail-token.json';
const scopes = ['https://www.googleapis.com/auth/gmail.readonly'];
const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8')).installed;

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    if (url.pathname !== '/oauth2callback' || !url.searchParams.get('code')) return;
    const oauth2 = new google.auth.OAuth2(credentials.client_id, credentials.client_secret, 'http://localhost:3000/oauth2callback');
    const { tokens } = await oauth2.getToken(url.searchParams.get('code'));
    fs.mkdirSync('.qa/secrets', { recursive: true });
    fs.writeFileSync(tokenPath, JSON.stringify(tokens, null, 2), { mode: 0o600 });
    res.end('Autorizacion completada. Puedes cerrar esta ventana.');
    console.log(`Token guardado en ${tokenPath}`);
    server.close(() => process.exit(0));
  } catch (error) {
    res.statusCode = 500;
    res.end('Error de autorizacion');
    console.error(error.message);
    server.close(() => process.exit(1));
  }
});

server.listen(3000, '127.0.0.1', () => {
  const oauth2 = new google.auth.OAuth2(credentials.client_id, credentials.client_secret, 'http://localhost:3000/oauth2callback');
  const url = oauth2.generateAuthUrl({ access_type: 'offline', scope: scopes, prompt: 'consent' });
  console.log('Abre esta URL en tu navegador y acepta el permiso Gmail de solo lectura:\n');
  console.log(url);
  exec(`xdg-open '${url}'`).on('error', () => {});
});
