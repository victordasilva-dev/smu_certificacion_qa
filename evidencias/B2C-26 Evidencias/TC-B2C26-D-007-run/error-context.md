# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: B2C-26.spec.ts >> B2C-26 pendientes · Desktop >> TC-B2C26-D-007 · Denegar ubicación vuelve al modal y concederla lleva a B2C-99 [Desktop] (Desktop)
- Location: tests/B2C-26.spec.ts:1035:7

# Error details

```
Error: al conceder, se abre B2C-99

expect(locator).toBeVisible() failed

Locator: locator('[role="dialog"]').filter({ hasText: /agregar nueva direcci[óo]n|detalles de la direcci[óo]n/i }).visible().first()
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - al conceder, se abre B2C-99 locator('[role="dialog"]').filter({ hasText: /agregar nueva direcci[óo]n|detalles de la direcci[óo]n/i }).visible().first() with timeout 30000ms
  - waiting for locator('[role="dialog"]').filter({ hasText: /agregar nueva direcci[óo]n|detalles de la direcci[óo]n/i }).visible().first()

```

```yaml
- banner
- region
- region
- region
- region
- region
- region
- dialog:
  - button "Cerrar"
  - paragraph: Unimarc no tiene acceso a tu localización
  - paragraph: Para que podamos mostrarte tiendas cercanas, direcciones de despacho y mejorar tu experiencia, puedes ir a la configuración de tu navegador para permitir el acceso. Tu información es privada y solo se usará para este fin.
  - button "Cancelar"
```

# Test source

```ts
  953  |       expect.soft(texto, 'calle y numeración').toMatch(new RegExp(`${escapar(p.calle)}\\s+${p.numero}`, 'i'));
  954  |       expect.soft(texto, `comuna (${p.comuna})`).toMatch(new RegExp(escapar(p.comuna), 'i'));
  955  |     });
  956  | 
  957  |     test('TC-B2C26-M-033 · La dirección del invitado no persiste al cerrar el navegador [Guest] (Mobile)', async ({ page, browser, testData }) => {
  958  |       const cp = 'TC-B2C26-M-033';
  959  |       const { home, enHeader } = await fijarComoInvitado(page, token(testData, 'DIRECCION_DESPACHO')!);
  960  |       await capturarEvidencia(home.header.barraDelSitio, cp, 4, `header: «${enHeader}»`);
  961  |       await page.context().close();
  962  |       const otra = await ventanaNueva(browser, page, testData);
  963  |       const home2 = await new PaginaHabilitada(otra).goto();
  964  |       await expect(home2.header.storeLocator).toContainText(/elige una forma de entrega/i, { timeout: 30000 });
  965  |       await capturarEvidencia(otra, cp);
  966  |       await otra.context().close();
  967  |     });
  968  | 
  969  |     test('TC-B2C26-M-035 · La dirección activa se mantiene en el header al navegar por el sitio [Logueado] (Mobile)', async ({ page, testData }) => {
  970  |       const cp = 'TC-B2C26-M-035';
  971  |       await iniciarSesion(page, testData);
  972  |       const home = await new PaginaHabilitada(page).goto();
  973  |       const activa = await home.header.esperarDireccionEnStoreLocator();
  974  |       const vistos = await recorrerSitio(page, testData, cp, home);
  975  |       for (const [pagina, valor] of Object.entries(vistos)) expect.soft(valor, `Store Locator en ${pagina}`).toBe(activa);
  976  |       await capturarEvidencia(page, cp);
  977  |     });
  978  | 
  979  |     test('TC-B2C26-M-036 · Al reiniciar sesión se recupera la dirección de la última compra o la última seteada [Logueado] (Mobile)', async ({ page, testData }) => {
  980  |       const cp = 'TC-B2C26-M-036';
  981  |       const home = await iniciarSesion(page, testData);
  982  |       const antes = await home.header.esperarDireccionEnStoreLocator();
  983  |       await capturarEvidencia(home.header.barraDelSitio, cp, 3, `dirección activa «${antes}»`);
  984  |       await new MenuCuenta(page).cerrarSesion();
  985  |       await capturarEvidencia(page, cp, 4, 'sesión cerrada');
  986  |       await loginConOtp(page, testData);
  987  |       await page.context().storageState({ path: SESION });
  988  |       const despues = await new HeaderFull(page).esperarDireccionEnStoreLocator(45000);
  989  |       await capturarEvidencia(new HeaderFull(page).barraDelSitio, cp, 5, `tras volver a iniciar sesión: «${despues}»`);
  990  |       expect(despues, 'misma dirección (última compra / última seteada)').toBe(antes);
  991  |     });
  992  | 
  993  |     test('TC-B2C26-M-037 · El formulario manual acepta +, - y / en la dirección [Guest] (Mobile)', async ({ page, testData }) => {
  994  |       await caracteresEspeciales(page, testData, 'TC-B2C26-M-037');
  995  |     });
  996  | 
  997  |     test('TC-B2C26-M-038 · Dirección manual sin numeración se ve con «S/N» [Guest] (Mobile)', async ({ page, testData }) => {
  998  |       await sinNumeroInvitado(page, testData, 'TC-B2C26-M-038');
  999  |     });
  1000 | 
  1001 |     test('TC-B2C26-M-039 · Dirección sin numeración se guarda en el perfil con «S/N» [Logueado] (Mobile)', async ({ page, testData }) => {
  1002 |       await sinNumeroLogueado(page, testData, 'TC-B2C26-M-039');
  1003 |     });
  1004 | 
  1005 |     test('TC-B2C26-M-040 · Plus Code de Google se agrega sin problemas [Guest] (Mobile)', async ({ page, testData }) => {
  1006 |       await plusCode(page, testData, 'TC-B2C26-M-040');
  1007 |     });
  1008 |   });
  1009 | });
  1010 | 
  1011 | // Casos pendientes cuyos valores se resolvieron desde la maestra de datos vigente.
  1012 | test.describe('B2C-26 pendientes · Desktop', () => {
  1013 |   test.use(DESKTOP);
  1014 | 
  1015 |   test('TC-B2C26-D-004 · El invitado ve su dirección activa y el logueado ve las guardadas y Google/GPS [Desktop] (Desktop)', async ({ page, testData }) => {
  1016 |     const cp = 'TC-B2C26-D-004';
  1017 |     const direccion = token(testData, 'DIRECCION_DESPACHO')!;
  1018 |     const { home } = await fijarComoInvitado(page, direccion);
  1019 |     await home.header.storeLocator.click();
  1020 |     let modal = await new MetodoEntregaModal(page).esperarAbierto();
  1021 |     await expect(modal.bloqueDireccionDespacho).toBeVisible();
  1022 |     await expect(modal.direccionActiva).toContainText(new RegExp(escapar(partes(direccion).calle), 'i'));
  1023 |     await capturarEvidencia(page, cp, 4, 'dirección activa del invitado');
  1024 | 
  1025 |     await modal.botonCerrar.click();
  1026 |     await loginConOtp(page, testData);
  1027 |     modal = new MetodoEntregaModal(page);
  1028 |     await expect(modal.tituloDireccionesGuardadas).toBeVisible({ timeout: 30000 });
  1029 |     await expect(modal.campoBusqueda).toBeVisible();
  1030 |     await expect(modal.botonUbicacionActual).toBeVisible();
  1031 |     expect(await modal.direccionesGuardadas()).toHaveLength(1);
  1032 |     await capturarEvidencia(page, cp, 8, 'dirección activa y métodos del usuario logueado');
  1033 |   });
  1034 | 
  1035 |   test('TC-B2C26-D-007 · Denegar ubicación vuelve al modal y concederla lleva a B2C-99 [Desktop] (Desktop)', async ({ page, testData }) => {
  1036 |     const cp = 'TC-B2C26-D-007';
  1037 |     const origen = token(testData, 'BASE_URL')!.replace(/\/+$/, '');
  1038 |     await page.context().grantPermissions([], { origin: origen });
  1039 |     const { modal } = await abrirModal(page);
  1040 |     await modal.capturarModal(cp, 4, 'modal de entrega antes del permiso');
  1041 |     await modal.tocarUbicacionActual();
  1042 |     await expect(modal.modalPermisos, 'aviso cuando se deniega el permiso').toBeVisible({ timeout: 20000 });
  1043 |     await capturarEvidencia(modal.modalPermisos, cp, 6, 'permiso de ubicación denegado');
  1044 |     await modal.cerrarModalPermisos();
  1045 |     await expect(modal.encabezado).toBeVisible();
  1046 |     await expect(modal.botonUbicacionActual).toBeVisible();
  1047 | 
  1048 |     const lat = Number(token(testData, 'LATITUD_DESPACHO'));
  1049 |     const lng = Number(token(testData, 'LONGITUD_DESPACHO'));
  1050 |     await modal.concederUbicacion(lat, lng);
  1051 |     await modal.observarCarga();
  1052 |     await modal.tocarUbicacionActual();
> 1053 |     await expect(modal.confirmacionPin, 'al conceder, se abre B2C-99').toBeVisible({ timeout: 30000 });
       |                                                                        ^ Error: al conceder, se abre B2C-99
  1054 |     const centro = await modal.centroDelMapa();
  1055 |     expect(Math.abs(centro.lat - lat)).toBeLessThan(0.002);
  1056 |     expect(Math.abs(centro.lng - lng)).toBeLessThan(0.002);
  1057 |     await capturarEvidencia(page, cp);
  1058 |   });
  1059 | 
  1060 |   test('TC-B2C26-D-011 · Seleccionar dirección guardada distinta deriva al flujo correspondiente [Desktop] (Desktop)', async ({ page, testData }) => {
  1061 |     const cp = 'TC-B2C26-D-011';
  1062 |     const { modal } = await abrirModalLogueado(page, testData);
  1063 |     const guardadas = await modal.direccionesGuardadas();
  1064 |     const activa = await etiquetaActiva(modal);
  1065 |     const otra = guardadas.find((g) => g.etiqueta !== activa);
  1066 |     await capturarEvidencia(page, cp, 4, 'direcciones guardadas disponibles');
  1067 |     if (!otra) throw new Error('PRECONDICION_NO_DISPONIBLE: la cuenta solo muestra la dirección activa; no hay una dirección guardada distinta para ejecutar las ramas de B2C-26 D-011.');
  1068 | 
  1069 |     const desde = marcaOtp();
  1070 |     await modal.elegirGuardada(otra.etiqueta);
  1071 |     await otpSiAparece(page, testData, desde, 45000);
  1072 |     const derivacion = page.getByText(/sin horarios disponibles|a[uú]n no llegamos|algunos productos podr[ií]an agotarse/i).locator('visible=true').first();
  1073 |     const cambio = new HeaderFull(page).storeLocator;
  1074 |     await expect.poll(async () => (await derivacion.isVisible().catch(() => false)) || /desde:|\d{1,2}:\d{2}/i.test(await cambio.innerText().catch(() => '')), { timeout: 45000 }).toBe(true);
  1075 |     await capturarEvidencia(page, cp, 6, 'resultado al elegir otra dirección guardada');
  1076 |   });
  1077 | 
  1078 |   test('TC-B2C26-D-013 · La dirección del header respeta historial y dirección seteada en sesión [Desktop] (Desktop)', async ({ page, browser, testData }) => {
  1079 |     const cp = 'TC-B2C26-D-013';
  1080 |     await page.context().clearCookies();
  1081 |     await new PaginaHabilitada(page).goto();
  1082 |     await page.evaluate(() => localStorage.clear());
  1083 |     await page.reload({ waitUntil: 'domcontentloaded' });
  1084 |     await loginConOtp(page, testData, 'COMPRADOR_USER');
  1085 |     const conHistorial = await new HeaderFull(page).esperarDireccionEnStoreLocator(45000);
  1086 |     await capturarEvidencia(page, cp, 4, `dirección tras iniciar sesión con historial: ${conHistorial}`);
  1087 |     expect(conHistorial, 'el header presenta una dirección válida').toMatch(/\S+/);
  1088 | 
  1089 |     const nueva = await ventanaNueva(browser, page, testData);
  1090 |     const direccion = token(testData, 'DIRECCION_DESPACHO')!;
  1091 |     const { home } = await fijarComoInvitado(nueva, direccion);
  1092 |     await loginConOtp(nueva, testData, 'COMPRADOR_MEMBRESIA_USER');
  1093 |     const sinHistorial = await home.header.esperarDireccionEnStoreLocator(45000);
  1094 |     await capturarEvidencia(nueva, cp, 8, `dirección seteada en sesión sin historial: ${sinHistorial}`);
  1095 |     expect(sinHistorial.toLowerCase()).toContain(partes(direccion).calle.toLowerCase());
  1096 |     await nueva.context().close();
  1097 |   });
  1098 | });
  1099 | 
  1100 | test.describe('B2C-26 pendientes · Mobile', () => {
  1101 |   test.use(MOBILE);
  1102 | 
  1103 |   test('TC-B2C26-M-006 · Resultado de Google sin calle usa el texto como Calle y continúa al PIN [Mobile] (Mobile)', async ({ page }) => {
  1104 |     const cp = 'TC-B2C26-M-006';
  1105 |     const { modal } = await abrirModal(page);
  1106 |     const consultas = modal.observarConsultasAGoogle();
  1107 |     await modal.campoBusqueda.click();
  1108 |     await modal.campoBusqueda.pressSequentially('Providencia', { delay: 70 });
  1109 |     await expect(modal.sugerencias.first(), 'resultado de Google para la búsqueda indicada').toBeVisible({ timeout: 30000 });
  1110 |     await capturarEvidencia(page, cp, 6, 'resultados de Google para Providencia');
  1111 |     const sugerenciaComuna = consultas.respuestas.some((x) => /"(locality|administrative_area_level_\d|sublocality)"/i.test(x));
  1112 |     expect(sugerenciaComuna, 'Google debe ofrecer un resultado de comuna sin calle').toBe(true);
  1113 |     await modal.sugerencias.first().click();
  1114 |     await expect(modal.confirmacionPin).toBeVisible({ timeout: 30000 });
  1115 |     await modal.confirmacionPin.getByRole('button', { name: /continuar con detalles de la direcci[óo]n/i }).click();
  1116 |     await expect(modal.confirmacionPin.getByRole('textbox').first()).toHaveValue(/Providencia/i);
  1117 |     await capturarEvidencia(page, cp);
  1118 |   });
  1119 | 
  1120 |   test('TC-B2C26-M-014 · Denegar ubicación vuelve al modal de entrega sin cambios [Mobile] (Mobile)', async ({ page, testData }) => {
  1121 |     const cp = 'TC-B2C26-M-014';
  1122 |     const origen = token(testData, 'BASE_URL')!.replace(/\/+$/, '');
  1123 |     await page.context().grantPermissions([], { origin: origen });
  1124 |     const { modal } = await abrirModal(page);
  1125 |     const antes = await modal.direccionActiva.textContent().catch(() => '');
  1126 |     await modal.tocarUbicacionActual();
  1127 |     await expect(modal.modalPermisos, 'aviso al denegar ubicación').toBeVisible({ timeout: 20000 });
  1128 |     await capturarEvidencia(modal.modalPermisos, cp, 6, 'aviso de permisos de ubicación');
  1129 |     await modal.cerrarModalPermisos();
  1130 |     await expect(modal.encabezado).toBeVisible();
  1131 |     expect(await modal.direccionActiva.textContent().catch(() => '')).toBe(antes);
  1132 |     await modal.capturarModal(cp);
  1133 |   });
  1134 | 
  1135 |   test('TC-B2C26-M-024 · Elegir dirección guardada sin horarios con carro vacío [Mobile] (Mobile)', async ({ page, testData }) => {
  1136 |     const cp = 'TC-B2C26-M-024';
  1137 |     await iniciarSesion(page, testData);
  1138 |     const carro = await new CarroPage(page).goto();
  1139 |     await expect(carro.carroVacio.or(carro.totalUnidades)).toBeVisible({ timeout: 30000 });
  1140 |     if (!(await carro.carroVacio.isVisible())) await carro.vaciar();
  1141 |     await expect(carro.carroVacio).toBeVisible({ timeout: 30000 });
  1142 |     await setearDireccionLogueado(page, testData, token(testData, 'DIRECCION_SIN_SLA')!, cp);
  1143 |     await asegurarCasa(page, testData);
  1144 |     const { modal } = await abrirModalLogueado(page, testData);
  1145 |     const objetivo = token(testData, 'DIRECCION_SIN_SLA')!.split(',')[0].toLowerCase();
  1146 |     const guardada = (await modal.direccionesGuardadas()).find((g) => g.direccion.toLowerCase().includes(objetivo));
  1147 |     if (!guardada) throw new Error('PRECONDICION_NO_DISPONIBLE: la dirección de DIRECCION_SIN_SLA no aparece como dirección guardada de la cuenta.');
  1148 |     await modal.capturarModal(cp, 4, `dirección guardada ${guardada.etiqueta}`);
  1149 |     const desde = marcaOtp();
  1150 |     await modal.elegirGuardada(guardada.etiqueta);
  1151 |     await otpSiAparece(page, testData, desde, 45000);
  1152 |     await expect(page.getByText(/sin horarios disponibles/i).locator('visible=true').first(), 'flujo B2C-127').toBeVisible({ timeout: 45000 });
  1153 |     await capturarEvidencia(page, cp);
```