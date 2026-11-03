# B2C-147 APP Android - Evidencias QA (corrida del 2026-10-30)

| Campo | Valor |
|---|---|
| Suite | B2C-147 |
| Última actualización | 2026-10-30 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Android cl.smu.unimarcapp.sfcc.qa v1.0.1 (DEV), dispositivo por ADB |
| Origen de los TC | Unimarc/B2C-147 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 18 |
| Aprobado | 2 |
| **Total** | **20** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-30 | 20 | TC-B2C147-APP-001, TC-B2C147-APP-002, TC-B2C147-APP-003, TC-B2C147-APP-004, TC-B2C147-APP-005, TC-B2C147-APP-006, TC-B2C147-APP-007, TC-B2C147-APP-008, TC-B2C147-APP-009, TC-B2C147-APP-010, TC-B2C147-APP-011, TC-B2C147-APP-012, TC-B2C147-APP-013, TC-B2C147-APP-014, TC-B2C147-APP-015, TC-B2C147-APP-016, TC-B2C147-APP-017, TC-B2C147-APP-018, TC-B2C147-APP-019, TC-B2C147-APP-020 |

## Detalle por caso de prueba

### TC-B2C147-APP-001 - Verificar que al continuar desde el carro Mis Envíos muestra el skeleton y luego Datos de entrega [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.

**Resultado esperado**

Se muestra el skeleton con el título "Datos de entrega" y placeholders grises; al completar la carga se muestra la página "Datos de entrega".

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C147-APP-002 - Verificar que un usuario sin sesión que intenta ir a Mis Envíos es redirigido al inicio de sesión [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".

**Resultado esperado**

El usuario es redirigido al flujo de inicio de sesión y la página Mis Envíos no se muestra.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: con la dirección de invitado {DIRECCION_DESPACHO_001} {SKU_VALID_001} tiene tope de 3 unidades («Máx») y el subtotal queda en $7.470, bajo el mínimo de $20.000: «Continuar con la entrega» no se habilita y no se puede llegar a Mis Envíos. Acción: declarar un SKU con stock suficiente en esa tienda o reponerlo. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: con la dirección de invitado {DIRECCION_DESPACHO_001} {SKU_VALID_001} tiene tope de 3 unidades («Máx») y el subtotal queda en $7.470, bajo el mínimo de $20.000: «Continuar con la entrega» no se habilita y no se puede llegar a Mis Envíos. Acción: declarar un SKU con stock suficiente en esa tienda o reponerlo. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — carro del invitado](<B2C-147 APP Evidencias 2026-10-30/TC-B2C147-APP-002-android-p01-carro-del-invitado.png>)

---

### TC-B2C147-APP-003 - Verificar que con despacho a domicilio la página Datos de entrega muestra todos sus elementos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la página.

**Resultado esperado**

La página muestra header simplificado con "<", título "Datos de entrega", tarjeta rosada con la dirección y chevron, "Fecha de entrega", "¿Cuándo quieres recibir tu compra?", selector de fechas, "¿Cuál es el horario de tu preferencia?", horarios con precio, "¿Recibe alguien más?", resumen de totales y CTA "Ir a pagar" habilitado.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «Datos de entrega» muestra «<», título, tarjeta con «Enviaremos tu compra a: Calle Uno 23, La Florida» y «Cambiar», «Fecha de entrega», selector de días, horarios con precio ($2.990), «¿Recibe alguien más?», resumen con Subtotal y CTA «Ir a pagar». Diferencias de texto frente al TC: los encabezados son «Día» y «Horario de preferencia» (el TC espera «¿Cuándo quieres recibir tu compra?» y «¿Cuál es el horario de tu preferencia?») y la tarjeta usa el enlace «Cambiar» en vez de un chevron. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «Datos de entrega» muestra «<», título, tarjeta con «Enviaremos tu compra a: Calle Uno 23, La Florida» y «Cambiar», «Fecha de entrega», selector de días, horarios con precio ($2.990), «¿Recibe alguien más?», resumen con Subtotal y CTA «Ir a pagar». Diferencias de texto frente al TC: los encabezados son «Día» y «Horario de preferencia» (el TC espera «¿Cuándo quieres recibir tu compra?» y «¿Cuál es el horario de tu preferencia?») y la tarjeta usa el enlace «Cambiar» en vez de un chevron. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — pagina datos de entrega arriba](<B2C-147 APP Evidencias 2026-10-30/TC-B2C147-APP-003-android-p01-pagina-datos-de-entrega-arriba.png>)

![Android · Paso 2 — pagina datos de entrega abajo](<B2C-147 APP Evidencias 2026-10-30/TC-B2C147-APP-003-android-p02-pagina-datos-de-entrega-abajo.png>)

---

### TC-B2C147-APP-004 - Verificar que una dirección sin número se muestra con S/N y sin comas vacías [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_SIN_NUMERO} (sin número ni complemento)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_SIN_NUMERO} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la tarjeta de dirección.

**Resultado esperado**

La tarjeta muestra la dirección con "S/N" en lugar del número y, si no hay complemento, sin coma vacía.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: {DIRECCION_SIN_NUMERO} no está entre las direcciones guardadas de la cuenta (Casa Calle Uno 23 La Florida, Maipú, Lo Barnechea…); agregarla exige OTP y modifica la libreta de la cuenta. Acción: dejar guardada una dirección sin número en la cuenta {USER_AUTH_001}. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: {DIRECCION_SIN_NUMERO} no está entre las direcciones guardadas de la cuenta (Casa Calle Uno 23 La Florida, Maipú, Lo Barnechea…); agregarla exige OTP y modifica la libreta de la cuenta. Acción: dejar guardada una dirección sin número en la cuenta {USER_AUTH_001}. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — modal cambiar direccion](<B2C-147 APP Evidencias 2026-10-30/TC-B2C147-APP-004-android-p01-modal-cambiar-direccion.png>)

---

### TC-B2C147-APP-005 - Verificar que el selector de fechas muestra los días de Janis con el primero disponible marcado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa el selector de fechas.

**Resultado esperado**

El selector muestra los días que retorna Janis ("Hoy" + número, abreviatura de día + número), con los días sin disponibilidad deshabilitados y el primer día disponible seleccionado.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): el selector muestra 5 días (Sáb 31 oct, Dom 1, Lun 2, Mar 3, Mié 4 nov) con el primero seleccionado. «Hoy» no aparece porque no hay ventanas disponibles hoy; no había días deshabilitados que verificar. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): el selector muestra 5 días (Sáb 31 oct, Dom 1, Lun 2, Mar 3, Mié 4 nov) con el primero seleccionado. «Hoy» no aparece porque no hay ventanas disponibles hoy; no había días deshabilitados que verificar. iOS: no ejecutado.

---

### TC-B2C147-APP-006 - Verificar que el resumen de totales incluye despacho, subtotal y subtotal con Unipay [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- El carro también contiene {SKU_UNIPAY_001}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_UNIPAY_001} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa el resumen de totales.

**Resultado esperado**

El resumen muestra Despacho, Subtotal (subtotal + despacho) y Subtotal con Unipay (subtotal con descuento + despacho).

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: {SKU_UNIPAY_001} no tiene promoción Unipay en el catálogo (verificado en B2C-37 el mismo día), por lo que no se puede armar el carro con descuento Unipay. Acción: declarar un SKU con precio Unipay. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: {SKU_UNIPAY_001} no tiene promoción Unipay en el catálogo (verificado en B2C-37 el mismo día), por lo que no se puede armar el carro con descuento Unipay. Acción: declarar un SKU con precio Unipay. iOS: no ejecutado.

---

### TC-B2C147-APP-007 - Verificar que con Express disponible Envío Express queda seleccionado por defecto [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la sección de horarios.

**Resultado esperado**

La sección muestra "Envío Express 30-60min" seleccionado por defecto y las ventanas con rango horario y precio.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida) la página no ofrece «Envío Express»; solo ventanas programadas 09:00-12:00, 12:00-15:00… a $2.990. Acción: declarar una dirección con Express disponible. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida) la página no ofrece «Envío Express»; solo ventanas programadas 09:00-12:00, 12:00-15:00… a $2.990. Acción: declarar una dirección con Express disponible. iOS: no ejecutado.

---

### TC-B2C147-APP-008 - Verificar que los horarios sin capacidad de entrega se muestran deshabilitados [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio con {DIRECCION_CON_VENTANA_SIN_CAPACIDAD}, que tiene al menos una ventana sin capacidad

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_CON_VENTANA_SIN_CAPACIDAD} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario intenta seleccionar una ventana sin capacidad.

**Resultado esperado**

Las ventanas sin capacidad se muestran deshabilitadas y no se pueden seleccionar.

**Resultado obtenido**

Falta dato: {DIRECCION_CON_VENTANA_SIN_CAPACIDAD} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {DIRECCION_CON_VENTANA_SIN_CAPACIDAD} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C147-APP-009 - Verificar que sin Express disponible queda seleccionada la ventana más próxima [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_SIN_EXPRESS}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_SIN_EXPRESS} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la sección de horarios.

**Resultado esperado**

No se muestra Envío Express y la ventana más próxima queda seleccionada con su rango horario y precio.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: {DIRECCION_SIN_EXPRESS} (Pasaje Diez 359, Peñaflor) no está guardada en la cuenta; agregarla exige OTP y modifica la libreta. Acción: guardar esa dirección en la cuenta {USER_AUTH_001}. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: {DIRECCION_SIN_EXPRESS} (Pasaje Diez 359, Peñaflor) no está guardada en la cuenta; agregarla exige OTP y modifica la libreta. Acción: guardar esa dirección en la cuenta {USER_AUTH_001}. iOS: no ejecutado.

---

### TC-B2C147-APP-010 - Verificar que con retiro en tienda la página muestra la tienda y horarios sin precio [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Retiro en tienda configurado con {TIENDA_RETIRO_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_001} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la página.

**Resultado esperado**

La tarjeta rosada muestra "Retira tu compra en" con nombre y dirección de {TIENDA_RETIRO_001}, "Fecha de retiro", "¿Cuándo quieres retirar tu compra?", horarios sin precio, resumen con Subtotal y Subtotal con Unipay, "¿Recibe alguien más?" y "Ir a pagar" habilitado.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: la cuenta no tiene el método «Retiro en tienda» con {TIENDA_RETIRO_001} (Unimarc Las Condes), igual que lo verificado en B2C-37. Acción: habilitar esa tienda de retiro en la cuenta. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: la cuenta no tiene el método «Retiro en tienda» con {TIENDA_RETIRO_001} (Unimarc Las Condes), igual que lo verificado en B2C-37. Acción: habilitar esa tienda de retiro en la cuenta. iOS: no ejecutado.

---

### TC-B2C147-APP-011 - Verificar que si el carro supera el monto máximo Express se deshabilita con un aviso [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}
- El subtotal del carro supera {MONTO_MAXIMO_EXPRESS}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {MONTO_MAXIMO_EXPRESS} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la sección de horarios y el subtotal.

**Resultado esperado**

Envío Express aparece deshabilitado, se muestra "El carro no cumple con el monto máximo para el despacho express" con X, la ventana estándar más próxima queda seleccionada y el subtotal refleja su costo.

**Resultado obtenido**

Falta dato: {MONTO_MAXIMO_EXPRESS} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {MONTO_MAXIMO_EXPRESS} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C147-APP-012 - Verificar que el aviso de monto máximo Express se cierra con la X [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}
- El subtotal del carro supera {MONTO_MAXIMO_EXPRESS}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {MONTO_MAXIMO_EXPRESS} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca la X del aviso de monto máximo.

**Resultado esperado**

El aviso se cierra y Envío Express sigue deshabilitado.

**Resultado obtenido**

Falta dato: {MONTO_MAXIMO_EXPRESS} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {MONTO_MAXIMO_EXPRESS} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C147-APP-013 - Verificar que sin ventanas disponibles se muestra la pantalla Sin horarios disponibles [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_SIN_SLA}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_SIN_SLA} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.

**Resultado esperado**

Se muestra la pantalla con imagen, título "Sin horarios disponibles", subtítulo "Lo sentimos actualmente no tenemos horarios…" con STL-041 y los CTA "Cambiar dirección" y "Volver al inicio".

**Resultado obtenido**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»); el TC necesita una dirección con cobertura y sin horarios. Comprobado ejecutando B2C-127 APP (TC 001) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»); el TC necesita una dirección con cobertura y sin horarios. Comprobado ejecutando B2C-127 APP (TC 001) en Android; este TC no se ejecutó por separado.

---

### TC-B2C147-APP-014 - Verificar que Cambiar dirección en Sin horarios disponibles abre el Store Locator [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_SIN_SLA}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_SIN_SLA} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema muestra la pantalla "Sin horarios disponibles".
5. El usuario toca "Cambiar dirección".

**Resultado esperado**

Se abre el flujo del Store Locator para cambiar la dirección.

**Resultado obtenido**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»); el TC necesita una dirección con cobertura y sin horarios. Comprobado ejecutando B2C-127 APP (TC 001) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»); el TC necesita una dirección con cobertura y sin horarios. Comprobado ejecutando B2C-127 APP (TC 001) en Android; este TC no se ejecutó por separado.

---

### TC-B2C147-APP-015 - Verificar que Volver al inicio en Sin horarios disponibles redirige al Home [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_SIN_SLA}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_SIN_SLA} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema muestra la pantalla "Sin horarios disponibles".
5. El usuario toca "Volver al inicio".

**Resultado esperado**

El usuario es redirigido al Home.

**Resultado obtenido**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»); el TC necesita una dirección con cobertura y sin horarios. Comprobado ejecutando B2C-127 APP (TC 001) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»); el TC necesita una dirección con cobertura y sin horarios. Comprobado ejecutando B2C-127 APP (TC 001) en Android; este TC no se ejecutó por separado.

---

### TC-B2C147-APP-016 - Verificar que un error al cargar las ventanas muestra ME-034 y Reintentar vuelve a consultar [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {JANIS_API_ENDPOINT} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema muestra la pantalla de error.
5. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en {JANIS_API_ENDPOINT}.
6. El usuario toca "Reintentar".

**Resultado esperado**

Se muestra imagen, "Ups, algo salió mal", "No logramos cargar la…" y el código ME-034 con "Reintentar" y "Volver al inicio"; al reintentar sin error se carga "Datos de entrega".

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C147-APP-017 - Verificar que Volver al inicio en el error de carga redirige al Home [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {JANIS_API_ENDPOINT} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema muestra la pantalla de error ME-034.
5. El usuario toca "Volver al inicio".

**Resultado esperado**

El usuario es redirigido al Home.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C147-APP-018 - Verificar que un fallo al guardar la selección de ventana muestra el toast ME-035 [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Página "Datos de entrega" cargada con ventana auto-seleccionada
- {HERRAMIENTA_PROXY_APP} configurado para devolver error 500/503 en la request de guardado de ventana {JANIS_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {JANIS_API_ENDPOINT} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
3. La página "Datos de entrega" carga correctamente con una ventana auto-seleccionada.
4. En {HERRAMIENTA_PROXY_APP}, activar el bloqueo/error en la request de guardado de ventana {JANIS_API_ENDPOINT}.
5. El usuario toca una ventana horaria distinta a la pre-seleccionada.
6. Observar que aparece el loader de confirmación automática.
7. Verificar que el loader desaparece con error.
8. Verificar el estado de la sección de horarios.
9. Verificar el contenido del card de entrega en el encabezado.
10. Verificar que aparece el toast de error.
11. Verificar que el toast persiste sin cerrarse automáticamente.
12. Cerrar el toast con la × y verificar que desaparece.

**Resultado esperado**

El loader desaparece y la sección de horarios revierte al estado anterior. La selección del usuario permanece visible (puede reintentar eligiendo de nuevo). El card de entrega mantiene la ventana previamente confirmada. Se muestra el toast de error: «Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente. Error: ME-035» y persiste hasta cierre manual con ×.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C147-APP-019 - Verificar que "Continuar" en el modal "No te olvides" lleva a Mis Envíos con skeleton y luego Datos de entrega [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- La cuenta tiene productos sugeridos (My Usuals o favoritos) que no están en el carro
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {HERRAMIENTA_PROXY_APP} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "No te olvides" con los productos sugeridos.
5. El usuario toca "Continuar" en el modal.

**Resultado esperado**

El modal se cierra. Se muestra el skeleton con el título "Datos de entrega" y placeholders grises; al completar la carga se muestra la página "Datos de entrega".

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C147-APP-020 - Verificar que sin ventanas disponibles en retiro en tienda se muestra la pantalla Sin horarios disponibles [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Retiro en tienda configurado con {TIENDA_SIN_SLA}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_SIN_SLA} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.

**Resultado esperado**

Se muestra la pantalla con imagen, título "Sin horarios disponibles", subtítulo "Lo sentimos actualmente no tenemos horarios…" con STL-041 y los CTA "Cambiar dirección" y "Volver al inicio".

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: la cuenta no tiene retiro en tienda configurado con {TIENDA_SIN_SLA} (Unimarc Los Lagos II). Acción: habilitar esa tienda en la cuenta o declarar una tienda sin ventanas. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: la cuenta no tiene retiro en tienda configurado con {TIENDA_SIN_SLA} (Unimarc Los Lagos II). Acción: habilitar esa tienda en la cuenta o declarar una tienda sin ventanas. iOS: no ejecutado.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "App Android cl.smu.unimarcapp.sfcc.qa v1.0.1 (DEV), dispositivo por ADB",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-147",
  "tc_file": "Unimarc/B2C-147 APP Test Cases.xlsx",
  "title": "B2C-147 APP Android - Evidencias QA (corrida del 2026-10-30)",
  "updated_at": "2026-10-30"
 },
 "history": {
  "2026-10-30": [
   "TC-B2C147-APP-001",
   "TC-B2C147-APP-002",
   "TC-B2C147-APP-003",
   "TC-B2C147-APP-004",
   "TC-B2C147-APP-005",
   "TC-B2C147-APP-006",
   "TC-B2C147-APP-007",
   "TC-B2C147-APP-008",
   "TC-B2C147-APP-009",
   "TC-B2C147-APP-010",
   "TC-B2C147-APP-011",
   "TC-B2C147-APP-012",
   "TC-B2C147-APP-013",
   "TC-B2C147-APP-014",
   "TC-B2C147-APP-015",
   "TC-B2C147-APP-016",
   "TC-B2C147-APP-017",
   "TC-B2C147-APP-018",
   "TC-B2C147-APP-019",
   "TC-B2C147-APP-020"
  ]
 },
 "results": [
  {
   "executed_at": "2026-10-30",
   "expected": "Se muestra el skeleton con el título \"Datos de entrega\" y placeholders grises; al completar la carga se muestra la página \"Datos de entrega\".",
   "id": "TC-B2C147-APP-001",
   "name": "Verificar que al continuar desde el carro Mis Envíos muestra el skeleton y luego Datos de entrega [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El usuario es redirigido al flujo de inicio de sesión y la página Mis Envíos no se muestra.",
   "id": "TC-B2C147-APP-002",
   "name": "Verificar que un usuario sin sesión que intenta ir a Mis Envíos es redirigido al inicio de sesión [App] [Guest]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: con la dirección de invitado {DIRECCION_DESPACHO_001} {SKU_VALID_001} tiene tope de 3 unidades («Máx») y el subtotal queda en $7.470, bajo el mínimo de $20.000: «Continuar con la entrega» no se habilita y no se puede llegar a Mis Envíos. Acción: declarar un SKU con stock suficiente en esa tienda o reponerlo. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: con la dirección de invitado {DIRECCION_DESPACHO_001} {SKU_VALID_001} tiene tope de 3 unidades («Máx») y el subtotal queda en $7.470, bajo el mínimo de $20.000: «Continuar con la entrega» no se habilita y no se puede llegar a Mis Envíos. Acción: declarar un SKU con stock suficiente en esa tienda o reponerlo. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — carro del invitado",
     "file": "TC-B2C147-APP-002-android-p01-carro-del-invitado.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "La página muestra header simplificado con \"<\", título \"Datos de entrega\", tarjeta rosada con la dirección y chevron, \"Fecha de entrega\", \"¿Cuándo quieres recibir tu compra?\", selector de fechas, \"¿Cuál es el horario de tu preferencia?\", horarios con precio, \"¿Recibe alguien más?\", resumen de totales y CTA \"Ir a pagar\" habilitado.",
   "id": "TC-B2C147-APP-003",
   "name": "Verificar que con despacho a domicilio la página Datos de entrega muestra todos sus elementos [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «Datos de entrega» muestra «<», título, tarjeta con «Enviaremos tu compra a: Calle Uno 23, La Florida» y «Cambiar», «Fecha de entrega», selector de días, horarios con precio ($2.990), «¿Recibe alguien más?», resumen con Subtotal y CTA «Ir a pagar». Diferencias de texto frente al TC: los encabezados son «Día» y «Horario de preferencia» (el TC espera «¿Cuándo quieres recibir tu compra?» y «¿Cuál es el horario de tu preferencia?») y la tarjeta usa el enlace «Cambiar» en vez de un chevron. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «Datos de entrega» muestra «<», título, tarjeta con «Enviaremos tu compra a: Calle Uno 23, La Florida» y «Cambiar», «Fecha de entrega», selector de días, horarios con precio ($2.990), «¿Recibe alguien más?», resumen con Subtotal y CTA «Ir a pagar». Diferencias de texto frente al TC: los encabezados son «Día» y «Horario de preferencia» (el TC espera «¿Cuándo quieres recibir tu compra?» y «¿Cuál es el horario de tu preferencia?») y la tarjeta usa el enlace «Cambiar» en vez de un chevron. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — pagina datos de entrega arriba",
     "file": "TC-B2C147-APP-003-android-p01-pagina-datos-de-entrega-arriba.png"
    },
    {
     "caption": "Android · Paso 2 — pagina datos de entrega abajo",
     "file": "TC-B2C147-APP-003-android-p02-pagina-datos-de-entrega-abajo.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la página.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "La tarjeta muestra la dirección con \"S/N\" en lugar del número y, si no hay complemento, sin coma vacía.",
   "id": "TC-B2C147-APP-004",
   "name": "Verificar que una dirección sin número se muestra con S/N y sin comas vacías [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: {DIRECCION_SIN_NUMERO} no está entre las direcciones guardadas de la cuenta (Casa Calle Uno 23 La Florida, Maipú, Lo Barnechea…); agregarla exige OTP y modifica la libreta de la cuenta. Acción: dejar guardada una dirección sin número en la cuenta {USER_AUTH_001}. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: {DIRECCION_SIN_NUMERO} no está entre las direcciones guardadas de la cuenta (Casa Calle Uno 23 La Florida, Maipú, Lo Barnechea…); agregarla exige OTP y modifica la libreta de la cuenta. Acción: dejar guardada una dirección sin número en la cuenta {USER_AUTH_001}. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_SIN_NUMERO} (sin número ni complemento)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — modal cambiar direccion",
     "file": "TC-B2C147-APP-004-android-p01-modal-cambiar-direccion.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la tarjeta de dirección.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_SIN_NUMERO} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El selector muestra los días que retorna Janis (\"Hoy\" + número, abreviatura de día + número), con los días sin disponibilidad deshabilitados y el primer día disponible seleccionado.",
   "id": "TC-B2C147-APP-005",
   "name": "Verificar que el selector de fechas muestra los días de Janis con el primero disponible marcado [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): el selector muestra 5 días (Sáb 31 oct, Dom 1, Lun 2, Mar 3, Mié 4 nov) con el primero seleccionado. «Hoy» no aparece porque no hay ventanas disponibles hoy; no había días deshabilitados que verificar. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): el selector muestra 5 días (Sáb 31 oct, Dom 1, Lun 2, Mar 3, Mié 4 nov) con el primero seleccionado. «Hoy» no aparece porque no hay ventanas disponibles hoy; no había días deshabilitados que verificar. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa el selector de fechas.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El resumen muestra Despacho, Subtotal (subtotal + despacho) y Subtotal con Unipay (subtotal con descuento + despacho).",
   "id": "TC-B2C147-APP-006",
   "name": "Verificar que el resumen de totales incluye despacho, subtotal y subtotal con Unipay [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: {SKU_UNIPAY_001} no tiene promoción Unipay en el catálogo (verificado en B2C-37 el mismo día), por lo que no se puede armar el carro con descuento Unipay. Acción: declarar un SKU con precio Unipay. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: {SKU_UNIPAY_001} no tiene promoción Unipay en el catálogo (verificado en B2C-37 el mismo día), por lo que no se puede armar el carro con descuento Unipay. Acción: declarar un SKU con precio Unipay. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- El carro también contiene {SKU_UNIPAY_001}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa el resumen de totales.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_UNIPAY_001} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "La sección muestra \"Envío Express 30-60min\" seleccionado por defecto y las ventanas con rango horario y precio.",
   "id": "TC-B2C147-APP-007",
   "name": "Verificar que con Express disponible Envío Express queda seleccionado por defecto [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida) la página no ofrece «Envío Express»; solo ventanas programadas 09:00-12:00, 12:00-15:00… a $2.990. Acción: declarar una dirección con Express disponible. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida) la página no ofrece «Envío Express»; solo ventanas programadas 09:00-12:00, 12:00-15:00… a $2.990. Acción: declarar una dirección con Express disponible. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la sección de horarios.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Las ventanas sin capacidad se muestran deshabilitadas y no se pueden seleccionar.",
   "id": "TC-B2C147-APP-008",
   "name": "Verificar que los horarios sin capacidad de entrega se muestran deshabilitados [App] [Logueado]",
   "observation": "Falta dato: {DIRECCION_CON_VENTANA_SIN_CAPACIDAD} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {DIRECCION_CON_VENTANA_SIN_CAPACIDAD} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio con {DIRECCION_CON_VENTANA_SIN_CAPACIDAD}, que tiene al menos una ventana sin capacidad",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario intenta seleccionar una ventana sin capacidad.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_CON_VENTANA_SIN_CAPACIDAD} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "No se muestra Envío Express y la ventana más próxima queda seleccionada con su rango horario y precio.",
   "id": "TC-B2C147-APP-009",
   "name": "Verificar que sin Express disponible queda seleccionada la ventana más próxima [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: {DIRECCION_SIN_EXPRESS} (Pasaje Diez 359, Peñaflor) no está guardada en la cuenta; agregarla exige OTP y modifica la libreta. Acción: guardar esa dirección en la cuenta {USER_AUTH_001}. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: {DIRECCION_SIN_EXPRESS} (Pasaje Diez 359, Peñaflor) no está guardada en la cuenta; agregarla exige OTP y modifica la libreta. Acción: guardar esa dirección en la cuenta {USER_AUTH_001}. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_SIN_EXPRESS}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la sección de horarios.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_SIN_EXPRESS} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "La tarjeta rosada muestra \"Retira tu compra en\" con nombre y dirección de {TIENDA_RETIRO_001}, \"Fecha de retiro\", \"¿Cuándo quieres retirar tu compra?\", horarios sin precio, resumen con Subtotal y Subtotal con Unipay, \"¿Recibe alguien más?\" y \"Ir a pagar\" habilitado.",
   "id": "TC-B2C147-APP-010",
   "name": "Verificar que con retiro en tienda la página muestra la tienda y horarios sin precio [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: la cuenta no tiene el método «Retiro en tienda» con {TIENDA_RETIRO_001} (Unimarc Las Condes), igual que lo verificado en B2C-37. Acción: habilitar esa tienda de retiro en la cuenta. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: la cuenta no tiene el método «Retiro en tienda» con {TIENDA_RETIRO_001} (Unimarc Las Condes), igual que lo verificado en B2C-37. Acción: habilitar esa tienda de retiro en la cuenta. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Retiro en tienda configurado con {TIENDA_RETIRO_001}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la página.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Envío Express aparece deshabilitado, se muestra \"El carro no cumple con el monto máximo para el despacho express\" con X, la ventana estándar más próxima queda seleccionada y el subtotal refleja su costo.",
   "id": "TC-B2C147-APP-011",
   "name": "Verificar que si el carro supera el monto máximo Express se deshabilita con un aviso [App] [Logueado]",
   "observation": "Falta dato: {MONTO_MAXIMO_EXPRESS} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {MONTO_MAXIMO_EXPRESS} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}\n- El subtotal del carro supera {MONTO_MAXIMO_EXPRESS}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la sección de horarios y el subtotal.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {MONTO_MAXIMO_EXPRESS} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El aviso se cierra y Envío Express sigue deshabilitado.",
   "id": "TC-B2C147-APP-012",
   "name": "Verificar que el aviso de monto máximo Express se cierra con la X [App] [Logueado]",
   "observation": "Falta dato: {MONTO_MAXIMO_EXPRESS} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {MONTO_MAXIMO_EXPRESS} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}\n- El subtotal del carro supera {MONTO_MAXIMO_EXPRESS}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca la X del aviso de monto máximo.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {MONTO_MAXIMO_EXPRESS} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Se muestra la pantalla con imagen, título \"Sin horarios disponibles\", subtítulo \"Lo sentimos actualmente no tenemos horarios…\" con STL-041 y los CTA \"Cambiar dirección\" y \"Volver al inicio\".",
   "id": "TC-B2C147-APP-013",
   "name": "Verificar que sin ventanas disponibles se muestra la pantalla Sin horarios disponibles [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»); el TC necesita una dirección con cobertura y sin horarios. Comprobado ejecutando B2C-127 APP (TC 001) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»); el TC necesita una dirección con cobertura y sin horarios. Comprobado ejecutando B2C-127 APP (TC 001) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_SIN_SLA}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_SIN_SLA} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Se abre el flujo del Store Locator para cambiar la dirección.",
   "id": "TC-B2C147-APP-014",
   "name": "Verificar que Cambiar dirección en Sin horarios disponibles abre el Store Locator [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»); el TC necesita una dirección con cobertura y sin horarios. Comprobado ejecutando B2C-127 APP (TC 001) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»); el TC necesita una dirección con cobertura y sin horarios. Comprobado ejecutando B2C-127 APP (TC 001) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_SIN_SLA}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema muestra la pantalla \"Sin horarios disponibles\".\n5. El usuario toca \"Cambiar dirección\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_SIN_SLA} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El usuario es redirigido al Home.",
   "id": "TC-B2C147-APP-015",
   "name": "Verificar que Volver al inicio en Sin horarios disponibles redirige al Home [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»); el TC necesita una dirección con cobertura y sin horarios. Comprobado ejecutando B2C-127 APP (TC 001) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»); el TC necesita una dirección con cobertura y sin horarios. Comprobado ejecutando B2C-127 APP (TC 001) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_SIN_SLA}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema muestra la pantalla \"Sin horarios disponibles\".\n5. El usuario toca \"Volver al inicio\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_SIN_SLA} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Se muestra imagen, \"Ups, algo salió mal\", \"No logramos cargar la…\" y el código ME-034 con \"Reintentar\" y \"Volver al inicio\"; al reintentar sin error se carga \"Datos de entrega\".",
   "id": "TC-B2C147-APP-016",
   "name": "Verificar que un error al cargar las ventanas muestra ME-034 y Reintentar vuelve a consultar [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema muestra la pantalla de error.\n5. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en {JANIS_API_ENDPOINT}.\n6. El usuario toca \"Reintentar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {JANIS_API_ENDPOINT} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El usuario es redirigido al Home.",
   "id": "TC-B2C147-APP-017",
   "name": "Verificar que Volver al inicio en el error de carga redirige al Home [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema muestra la pantalla de error ME-034.\n5. El usuario toca \"Volver al inicio\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {JANIS_API_ENDPOINT} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El loader desaparece y la sección de horarios revierte al estado anterior. La selección del usuario permanece visible (puede reintentar eligiendo de nuevo). El card de entrega mantiene la ventana previamente confirmada. Se muestra el toast de error: «Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente. Error: ME-035» y persiste hasta cierre manual con ×.",
   "id": "TC-B2C147-APP-018",
   "name": "Verificar que un fallo al guardar la selección de ventana muestra el toast ME-035 [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Página \"Datos de entrega\" cargada con ventana auto-seleccionada\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error 500/503 en la request de guardado de ventana {JANIS_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n3. La página \"Datos de entrega\" carga correctamente con una ventana auto-seleccionada.\n4. En {HERRAMIENTA_PROXY_APP}, activar el bloqueo/error en la request de guardado de ventana {JANIS_API_ENDPOINT}.\n5. El usuario toca una ventana horaria distinta a la pre-seleccionada.\n6. Observar que aparece el loader de confirmación automática.\n7. Verificar que el loader desaparece con error.\n8. Verificar el estado de la sección de horarios.\n9. Verificar el contenido del card de entrega en el encabezado.\n10. Verificar que aparece el toast de error.\n11. Verificar que el toast persiste sin cerrarse automáticamente.\n12. Cerrar el toast con la × y verificar que desaparece.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {JANIS_API_ENDPOINT} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El modal se cierra. Se muestra el skeleton con el título \"Datos de entrega\" y placeholders grises; al completar la carga se muestra la página \"Datos de entrega\".",
   "id": "TC-B2C147-APP-019",
   "name": "Verificar que \"Continuar\" en el modal \"No te olvides\" lleva a Mis Envíos con skeleton y luego Datos de entrega [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- La cuenta tiene productos sugeridos (My Usuals o favoritos) que no están en el carro\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"No te olvides\" con los productos sugeridos.\n5. El usuario toca \"Continuar\" en el modal.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {HERRAMIENTA_PROXY_APP} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Se muestra la pantalla con imagen, título \"Sin horarios disponibles\", subtítulo \"Lo sentimos actualmente no tenemos horarios…\" con STL-041 y los CTA \"Cambiar dirección\" y \"Volver al inicio\".",
   "id": "TC-B2C147-APP-020",
   "name": "Verificar que sin ventanas disponibles en retiro en tienda se muestra la pantalla Sin horarios disponibles [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: la cuenta no tiene retiro en tienda configurado con {TIENDA_SIN_SLA} (Unimarc Los Lagos II). Acción: habilitar esa tienda en la cuenta o declarar una tienda sin ventanas. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: la cuenta no tiene retiro en tienda configurado con {TIENDA_SIN_SLA} (Unimarc Los Lagos II). Acción: habilitar esa tienda en la cuenta o declarar una tienda sin ventanas. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Retiro en tienda configurado con {TIENDA_SIN_SLA}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_SIN_SLA} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  }
 ]
}
-->
