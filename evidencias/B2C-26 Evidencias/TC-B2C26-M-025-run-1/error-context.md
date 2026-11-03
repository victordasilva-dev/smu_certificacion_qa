# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: B2C-26.spec.ts >> B2C-26 pendientes · Mobile >> TC-B2C26-M-025 · Elegir dirección guardada con productos en el carro inicia B2C-122 [Mobile] (Mobile)
- Location: tests/B2C-26.spec.ts:1163:7

# Error details

```
Error: carro con productos

expect(locator).toBeVisible() failed

Locator: locator('main p').filter({ hasText: /^\d+ unidad(es)?$/i }).first()
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - carro con productos locator('main p').filter({ hasText: /^\d+ unidad(es)?$/i }).first() with timeout 30000ms
  - waiting for locator('main p').filter({ hasText: /^\d+ unidad(es)?$/i }).first()

```

```yaml
- link "Skip to Content":
  - /url: "#chakra-skip-nav"
- banner:
  - img "Unimarc"
- main:
  - paragraph: ¡Tu carro está vacío!
  - paragraph: Descubre todas las ofertas que tenemos para ti y llena tu despensa.
  - button "Ir a comprar"
- contentinfo:
  - link "Centro de ayuda Aquí encontrarás preguntas frecuentes y mucho más":
    - /url: /centro-de-ayuda
    - paragraph: Centro de ayuda
    - paragraph: Aquí encontrarás preguntas frecuentes y mucho más
  - link "Seguimiento de compra Revisa el estado y detalle de tu compra":
    - /url: /seguimiento-de-compra
    - paragraph: Seguimiento de compra
    - paragraph: Revisa el estado y detalle de tu compra
  - link "Whatsapp clientes Escríbenos de 9:00 a 20:00 horas":
    - /url: https://wa.me/56958701477
    - paragraph: Whatsapp clientes
    - paragraph: Escríbenos de 9:00 a 20:00 horas
- region
- region
- region
- region
- region
- region
```

# Test source

```ts
  1071 |     const activa = await etiquetaActiva(modal);
  1072 |     const otra = guardadas.find((g) => g.etiqueta !== activa);
  1073 |     await capturarEvidencia(page, cp, 4, 'direcciones guardadas disponibles');
  1074 |     if (!otra) throw new Error('PRECONDICION_NO_DISPONIBLE: la cuenta solo muestra la dirección activa; no hay una dirección guardada distinta para ejecutar las ramas de B2C-26 D-011.');
  1075 | 
  1076 |     const desde = marcaOtp();
  1077 |     await modal.elegirGuardada(otra.etiqueta);
  1078 |     await otpSiAparece(page, testData, desde, 45000);
  1079 |     const derivacion = page.getByText(/sin horarios disponibles|a[uú]n no llegamos|algunos productos podr[ií]an agotarse/i).locator('visible=true').first();
  1080 |     const cambio = new HeaderFull(page).storeLocator;
  1081 |     await expect.poll(async () => (await derivacion.isVisible().catch(() => false)) || /desde:|\d{1,2}:\d{2}/i.test(await cambio.innerText().catch(() => '')), { timeout: 45000 }).toBe(true);
  1082 |     await capturarEvidencia(page, cp, 6, 'resultado al elegir otra dirección guardada');
  1083 |   });
  1084 | 
  1085 |   test('TC-B2C26-D-013 · La dirección del header respeta historial y dirección seteada en sesión [Desktop] (Desktop)', async ({ page, browser, testData }) => {
  1086 |     const cp = 'TC-B2C26-D-013';
  1087 |     await page.context().clearCookies();
  1088 |     await new PaginaHabilitada(page).goto();
  1089 |     await page.evaluate(() => localStorage.clear());
  1090 |     await page.reload({ waitUntil: 'domcontentloaded' });
  1091 |     await loginConOtp(page, testData, 'COMPRADOR_USER');
  1092 |     const conHistorial = await new HeaderFull(page).esperarDireccionEnStoreLocator(45000);
  1093 |     await capturarEvidencia(page, cp, 4, `dirección tras iniciar sesión con historial: ${conHistorial}`);
  1094 |     expect(conHistorial, 'el header presenta una dirección válida').toMatch(/\S+/);
  1095 | 
  1096 |     const nueva = await ventanaNueva(browser, page, testData);
  1097 |     const direccion = token(testData, 'DIRECCION_DESPACHO')!;
  1098 |     const { home } = await fijarComoInvitado(nueva, direccion);
  1099 |     await loginConOtp(nueva, testData, 'COMPRADOR_MEMBRESIA_USER');
  1100 |     const sinHistorial = await home.header.esperarDireccionEnStoreLocator(45000);
  1101 |     await capturarEvidencia(nueva, cp, 8, `dirección seteada en sesión sin historial: ${sinHistorial}`);
  1102 |     expect(sinHistorial.toLowerCase()).toContain(partes(direccion).calle.toLowerCase());
  1103 |     await nueva.context().close();
  1104 |   });
  1105 | });
  1106 | 
  1107 | test.describe('B2C-26 pendientes · Mobile', () => {
  1108 |   test.use(MOBILE);
  1109 | 
  1110 |   test('TC-B2C26-M-006 · Resultado de Google sin calle usa el texto como Calle y continúa al PIN [Mobile] (Mobile)', async ({ page }) => {
  1111 |     const cp = 'TC-B2C26-M-006';
  1112 |     const { modal } = await abrirModal(page);
  1113 |     const consultas = modal.observarConsultasAGoogle();
  1114 |     await modal.campoBusqueda.click();
  1115 |     await modal.campoBusqueda.pressSequentially('Providencia', { delay: 70 });
  1116 |     await expect(modal.sugerencias.first(), 'resultado de Google para la búsqueda indicada').toBeVisible({ timeout: 30000 });
  1117 |     await capturarEvidencia(page, cp, 6, 'resultados de Google para Providencia');
  1118 |     const sugerenciaComuna = consultas.respuestas.some((x) => /"(locality|administrative_area_level_\d|sublocality)"/i.test(x));
  1119 |     expect(sugerenciaComuna, 'Google debe ofrecer un resultado de comuna sin calle').toBe(true);
  1120 |     await modal.sugerencias.first().click();
  1121 |     await expect(modal.confirmacionPin).toBeVisible({ timeout: 30000 });
  1122 |     await modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
  1123 |     await expect(modal.confirmacionPin.getByRole('textbox').first()).toHaveValue(/Providencia/i);
  1124 |     await capturarEvidencia(page, cp);
  1125 |   });
  1126 | 
  1127 |   test('TC-B2C26-M-014 · Denegar ubicación vuelve al modal de entrega sin cambios [Mobile] (Mobile)', async ({ page, testData }) => {
  1128 |     const cp = 'TC-B2C26-M-014';
  1129 |     const origen = token(testData, 'BASE_URL')!.replace(/\/+$/, '');
  1130 |     await page.context().grantPermissions([], { origin: origen });
  1131 |     const { modal } = await abrirModal(page);
  1132 |     const antes = await modal.direccionActiva.textContent().catch(() => '');
  1133 |     await modal.tocarUbicacionActual();
  1134 |     await expect(modal.modalPermisos, 'aviso al denegar ubicación').toBeVisible({ timeout: 20000 });
  1135 |     await capturarEvidencia(modal.modalPermisos, cp, 6, 'aviso de permisos de ubicación');
  1136 |     await modal.cerrarModalPermisos();
  1137 |     await expect(modal.encabezado).toBeVisible();
  1138 |     expect(await modal.direccionActiva.textContent().catch(() => '')).toBe(antes);
  1139 |     await modal.capturarModal(cp);
  1140 |   });
  1141 | 
  1142 |   test('TC-B2C26-M-024 · Elegir dirección guardada sin horarios con carro vacío [Mobile] (Mobile)', async ({ page, testData }) => {
  1143 |     const cp = 'TC-B2C26-M-024';
  1144 |     await iniciarSesion(page, testData);
  1145 |     const carro = await new CarroPage(page).goto();
  1146 |     await expect(carro.carroVacio.or(carro.totalUnidades)).toBeVisible({ timeout: 30000 });
  1147 |     if (!(await carro.carroVacio.isVisible())) await carro.vaciar();
  1148 |     await expect(carro.carroVacio).toBeVisible({ timeout: 30000 });
  1149 |     await setearDireccionLogueado(page, testData, token(testData, 'DIRECCION_SIN_SLA')!, cp);
  1150 |     await asegurarCasa(page, testData);
  1151 |     const { modal } = await abrirModalLogueado(page, testData);
  1152 |     const objetivo = token(testData, 'DIRECCION_SIN_SLA')!.split(',')[0].toLowerCase();
  1153 |     const guardada = (await modal.direccionesGuardadas()).find((g) => g.direccion.toLowerCase().includes(objetivo));
  1154 |     if (!guardada) throw new Error('PRECONDICION_NO_DISPONIBLE: la dirección de DIRECCION_SIN_SLA no aparece como dirección guardada de la cuenta.');
  1155 |     await modal.capturarModal(cp, 4, `dirección guardada ${guardada.etiqueta}`);
  1156 |     const desde = marcaOtp();
  1157 |     await modal.elegirGuardada(guardada.etiqueta);
  1158 |     await otpSiAparece(page, testData, desde, 45000);
  1159 |     await expect(page.getByText(/sin horarios disponibles/i).locator('visible=true').first(), 'flujo B2C-127').toBeVisible({ timeout: 45000 });
  1160 |     await capturarEvidencia(page, cp);
  1161 |   });
  1162 | 
  1163 |   test('TC-B2C26-M-025 · Elegir dirección guardada con productos en el carro inicia B2C-122 [Mobile] (Mobile)', async ({ page, testData }) => {
  1164 |     const cp = 'TC-B2C26-M-025';
  1165 |     await iniciarSesion(page, testData);
  1166 |     const { modal: inicial } = await abrirModalLogueado(page, testData);
  1167 |     const direccionesIniciales = await inicial.direccionesGuardadas();
  1168 |     if (direccionesIniciales.length < 2) throw new Error('PRECONDICION_NO_DISPONIBLE: la cuenta no tiene dos direcciones guardadas para cambiar el despacho con productos en el carro.');
  1169 |     await inicial.botonCerrar.click();
  1170 |     const carro = await new CarroPage(page).goto();
> 1171 |     await expect(carro.totalUnidades, 'carro con productos').toBeVisible({ timeout: 30000 });
       |                                                              ^ Error: carro con productos
  1172 |     const home = await new PaginaHabilitada(page).goto();
  1173 |     await home.header.storeLocator.click();
  1174 |     const modal = await new MetodoEntregaModal(page).esperarAbierto();
  1175 |     const activa = await etiquetaActiva(modal);
  1176 |     const otra = (await modal.direccionesGuardadas()).find((g) => g.etiqueta !== activa);
  1177 |     if (!otra) throw new Error('PRECONDICION_NO_DISPONIBLE: no hay dirección guardada distinta de la activa.');
  1178 |     await modal.capturarModal(cp, 4, 'direcciones antes del cambio con productos en el carro');
  1179 |     const desde = marcaOtp();
  1180 |     await modal.elegirGuardada(otra.etiqueta);
  1181 |     await otpSiAparece(page, testData, desde, 45000);
  1182 |     const agotarse = new AgotarseModal(page);
  1183 |     await expect(agotarse.root, 'flujo de validación del carro B2C-122').toBeVisible({ timeout: 45000 });
  1184 |     await capturarEvidencia(agotarse.root, cp, 6, 'flujo con productos en el carro');
  1185 |   });
  1186 | 
  1187 |   test('TC-B2C26-M-031 · El header refleja una dirección de sesión sin historial [Mobile] (Mobile)', async ({ page, testData }) => {
  1188 |     const cp = 'TC-B2C26-M-031';
  1189 |     const { home, modal } = await abrirModalLogueado(page, testData, 'COMPRADOR_MEMBRESIA_USER');
  1190 |     const anteriores = await modal.direccionesGuardadas();
  1191 |     const direccion = token(testData, 'DIRECCION_DESPACHO')!;
  1192 |     await modal.campoBusqueda.click();
  1193 |     await modal.campoBusqueda.pressSequentially(direccion, { delay: 60 });
  1194 |     await modal.sugerencias.filter({ hasText: sugerenciaDe(direccion) }).first().click();
  1195 |     await expect(modal.confirmacionPin).toBeVisible({ timeout: 30000 });
  1196 |     const desde = marcaOtp();
  1197 |     await confirmarDetalles(modal);
  1198 |     await otpSiAparece(page, testData, desde, 45000);
  1199 |     const activa = await home.header.esperarDireccionEnStoreLocator(45000);
  1200 |     await expect.poll(async () => await textoHeader(page), { timeout: 45000 }).toContain(partes(direccion).calle);
  1201 |     await home.header.storeLocator.click();
  1202 |     const revisada = await new MetodoEntregaModal(page).esperarAbierto();
  1203 |     await expect(revisada.direccionActiva).toContainText(partes(direccion).calle);
  1204 |     await capturarEvidencia(page, cp, 6, `dirección activa de sesión ${activa}`);
  1205 |     // El usuario de prueba parte sin direcciones; si se guardó una nueva, se elimina al terminar.
  1206 |     const nuevas = (await revisada.direccionesGuardadas()).filter((g) => !anteriores.some((a) => a.etiqueta === g.etiqueta));
  1207 |     if (nuevas.length) {
  1208 |       await revisada.pedirEliminar(nuevas[0].etiqueta);
  1209 |       await revisada.botonAceptarEliminar.click();
  1210 |       await revisada.toastEliminada.waitFor({ state: 'visible', timeout: 20000 }).catch(() => {});
  1211 |     }
  1212 |   });
  1213 | 
  1214 |   test('TC-B2C26-M-034 · Iniciar sesión con dirección de invitado activa inicia la asociación [Mobile] (Mobile)', async ({ page, testData }) => {
  1215 |     const cp = 'TC-B2C26-M-034';
  1216 |     const direccion = token(testData, 'DIRECCION_DESPACHO')!;
  1217 |     const { home } = await fijarComoInvitado(page, direccion);
  1218 |     await capturarEvidencia(home.header.barraDelSitio, cp, 4, 'dirección de invitado antes del login');
  1219 |     await loginConOtp(page, testData, 'COMPRADOR_USER');
  1220 |     const modal = new MetodoEntregaModal(page);
  1221 |     await expect.poll(async () => (await modal.modalOtp.isVisible().catch(() => false)) || /camino la fuente/i.test(await textoHeader(page)), { timeout: 45000 }).toBe(true);
  1222 |     if (await modal.modalOtp.isVisible().catch(() => false)) await otpSiAparece(page, testData, marcaOtp(), 45000);
  1223 |     await expect.poll(async () => await textoHeader(page), { timeout: 45000 }).toContain(partes(direccion).calle);
  1224 |     await capturarEvidencia(page, cp);
  1225 |   });
  1226 | });
  1227 | 
  1228 | // ---------------------------------------------------------------------- flujos compartidos D/M
  1229 | 
  1230 | async function ubicacionConcedida(page: Page, testData: LoadedTestData, cp: string): Promise<void> {
  1231 |   const lat = Number(token(testData, 'LATITUD_DESPACHO')), lng = Number(token(testData, 'LONGITUD_DESPACHO'));
  1232 |   await new MetodoEntregaModal(page).concederUbicacion(lat, lng);
  1233 |   const { modal } = await abrirModal(page);
  1234 |   await modal.observarCarga();
  1235 |   await modal.tocarUbicacionActual();
  1236 |   await expect(modal.confirmacionPin, 'B2C-99').toBeVisible({ timeout: 30000 });
  1237 |   const carga = await modal.cargaObservada();
  1238 |   expect(carga.texto || carga.spinner, `loader (${JSON.stringify(carga)})`).toBe(true);
  1239 |   const centro = await modal.centroDelMapa();
  1240 |   expect(Math.abs(centro.lat - lat), `PIN en la ubicación (${centro.lat},${centro.lng})`).toBeLessThan(0.002);
  1241 |   expect(Math.abs(centro.lng - lng)).toBeLessThan(0.002);
  1242 |   await capturarEvidencia(page, cp);
  1243 | }
  1244 | 
  1245 | async function caracteresEspeciales(page: Page, testData: LoadedTestData, cp: string): Promise<void> {
  1246 |   const calle = token(testData, 'DIRECCION_CARACTERES_ESPECIALES')!;
  1247 |   const { modal } = await abrirModal(page);
  1248 |   await abrirFormularioManual(modal, 'Pa');
  1249 |   await modal.elegirRegion('Metropolitana');
  1250 |   await modal.elegirComuna('Las Condes');
  1251 |   await modal.campoCalle.fill(calle);
  1252 |   await modal.campoNumeracion.fill('120');
  1253 |   await expect(modal.campoCalle, 'texto tal como se escribió').toHaveValue(calle);
  1254 |   await expect(modal.root.getByText(/inv[áa]lid|no permitid|caracteres/i), 'sin mensaje de error').toHaveCount(0);
  1255 |   await expect(modal.botonContinuarManual).toBeEnabled();
  1256 |   await modal.capturarModal(cp, 8, 'formulario con caracteres especiales');
  1257 |   await modal.observarCarga();
  1258 |   await modal.botonContinuarManual.click();
  1259 |   await expect(modal.confirmacionPin).toBeVisible({ timeout: 30000 });
  1260 |   expect((await modal.cargaObservada()).spinner, 'loader').toBe(true);
  1261 |   await expect(modal.confirmacionPin, `calle precargada «${calle}»`).toContainText(calle);
  1262 |   await capturarEvidencia(page, cp);
  1263 | }
  1264 | 
  1265 | /** {DIRECCION_SIN_NUMERO} = "Región, Comuna, Calle". */
  1266 | function sinNumero(testData: LoadedTestData): { region: string; comuna: string; calle: string } {
  1267 |   const [region, comuna, calle] = token(testData, 'DIRECCION_SIN_NUMERO')!.split(',').map((s) => s.trim());
  1268 |   return { region, comuna, calle };
  1269 | }
  1270 | 
  1271 | async function confirmarDetalles(modal: MetodoEntregaModal): Promise<void> {
```