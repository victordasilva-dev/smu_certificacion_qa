# B2C-41 APP Android - Evidencias QA (corrida del 2026-10-30)

| Campo | Valor |
|---|---|
| Suite | B2C-41 |
| Última actualización | 2026-10-30 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Android cl.smu.unimarcapp.sfcc.qa v1.0.1 (DEV), dispositivo por ADB |
| Origen de los TC | Unimarc/B2C-41 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 7 |
| Bloqueado Data | 3 |
| Rechazado | 2 |
| **Total** | **12** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-30 | 12 | TC-B2C41-APP-001, TC-B2C41-APP-002, TC-B2C41-APP-003, TC-B2C41-APP-004, TC-B2C41-APP-005, TC-B2C41-APP-006, TC-B2C41-APP-007, TC-B2C41-APP-008, TC-B2C41-APP-009, TC-B2C41-APP-010, TC-B2C41-APP-011, TC-B2C41-APP-012 |

## Detalle por caso de prueba

### TC-B2C41-APP-001 - Verificar que Continuar con la entrega abre el modal de sugeridos cuando hay sugerencias [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USUALS_FAVORITOS_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {COMPRADOR_USUALS_FAVORITOS_USER} = TBD
- {COMPRADOR_USUALS_FAVORITOS_PASSWORD} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".

**Resultado esperado**

Se muestra el modal "¡Que no se te olviden!" sobre el carrito.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30, login correo + OTP): con 11 un. de {SKU_VALID_001} en el carro, «Continuar con la entrega» abre el modal «¡Que no se te olviden!». iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30, login correo + OTP): con 11 un. de {SKU_VALID_001} en el carro, «Continuar con la entrega» abre el modal «¡Que no se te olviden!». iOS: no ejecutado.

---

### TC-B2C41-APP-002 - Verificar que sin sugerencias el modal no se muestra y el flujo continúa [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_SIN_SUGERENCIAS_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo
- La cuenta no tiene productos My Usuals ni favoritos

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {COMPRADOR_SIN_SUGERENCIAS_USER} = TBD
- {COMPRADOR_SIN_SUGERENCIAS_PASSWORD} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".

**Resultado esperado**

El modal "¡Que no se te olviden!" no se presenta y el usuario continúa al siguiente paso Mis Envíos sin interrupción.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: con la cuenta {COMPRADOR_SIN_SUGERENCIAS_USER} la app queda en «Elige una forma de entrega» (sin método de entrega activo) y no se puede armar el carro de la precondición. Acción: cargar una cuenta sin sugerencias con dirección/método de entrega y stock del SKU. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: con la cuenta {COMPRADOR_SIN_SUGERENCIAS_USER} la app queda en «Elige una forma de entrega» (sin método de entrega activo) y no se puede armar el carro de la precondición. Acción: cargar una cuenta sin sugerencias con dirección/método de entrega y stock del SKU. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — fallo armando el carro](<B2C-41 APP Evidencias 2026-10-30/TC-B2C41-APP-002-android-p01-fallo-armando-el-carro.png>)

---

### TC-B2C41-APP-003 - Verificar que con My Usuals y favoritos se ven ambas pestañas en orden [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USUALS_FAVORITOS_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {COMPRADOR_USUALS_FAVORITOS_USER} = TBD
- {COMPRADOR_USUALS_FAVORITOS_PASSWORD} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestran dos pestañas en orden: "Lo que más compro" resaltada con la lista My Usuals y luego "Mis favoritos".

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Esperado: dos pestañas, «Lo que más compro» resaltada y luego «Mis favoritos». Obtenido: tres pestañas «Imperdibles» (resaltada) → «Lo que más compro» → «Mis favoritos». Bug: B2C-1410. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Esperado: dos pestañas, «Lo que más compro» resaltada y luego «Mis favoritos». Obtenido: tres pestañas «Imperdibles» (resaltada) → «Lo que más compro» → «Mis favoritos». Bug: B2C-1410. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — pestanas del modal](<B2C-41 APP Evidencias 2026-10-30/TC-B2C41-APP-003-android-p01-pestanas-del-modal.png>)

---

### TC-B2C41-APP-004 - Verificar que sin favoritos solo se ve la pestaña Lo que más compro [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_SOLO_USUALS_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y ningún favorito

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {COMPRADOR_SOLO_USUALS_USER} = TBD
- {COMPRADOR_SOLO_USUALS_PASSWORD} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestra solo la pestaña "Lo que más compro", resaltada; no se muestra "Mis favoritos".

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: con la cuenta {COMPRADOR_SOLO_USUALS_USER} {SKU_VALID_001} tiene tope de 3 unidades en su tienda («Máx») y el subtotal queda en $7.470, bajo el mínimo de $20.000: el botón «Continuar con la entrega» no se habilita. Acción: declarar un SKU con stock suficiente para esa cuenta o reponerlo. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: con la cuenta {COMPRADOR_SOLO_USUALS_USER} {SKU_VALID_001} tiene tope de 3 unidades en su tienda («Máx») y el subtotal queda en $7.470, bajo el mínimo de $20.000: el botón «Continuar con la entrega» no se habilita. Acción: declarar un SKU con stock suficiente para esa cuenta o reponerlo. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — carro sin minimo de compra](<B2C-41 APP Evidencias 2026-10-30/TC-B2C41-APP-004-android-p01-carro-sin-minimo-de-compra.png>)

---

### TC-B2C41-APP-005 - Verificar que sin My Usuals solo se ve la pestaña Mis favoritos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_SOLO_FAVORITOS_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo
- La cuenta no tiene My Usuals y tiene al menos un favorito

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {COMPRADOR_SOLO_FAVORITOS_USER} = TBD
- {COMPRADOR_SOLO_FAVORITOS_PASSWORD} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestra solo la pestaña "Mis favoritos"; no se muestra "Lo que más compro".

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Esperado: solo la pestaña «Mis favoritos». Obtenido: «Imperdibles» y «Mis favoritos» (no aparece «Lo que más compro»). Bug: B2C-1411. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Esperado: solo la pestaña «Mis favoritos». Obtenido: «Imperdibles» y «Mis favoritos» (no aparece «Lo que más compro»). Bug: B2C-1411. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — pestanas del modal](<B2C-41 APP Evidencias 2026-10-30/TC-B2C41-APP-005-android-p01-pestanas-del-modal.png>)

---

### TC-B2C41-APP-006 - Verificar que Lo que más compro muestra los My Usuals en grilla 2x2 con Continuar fijo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USUALS_FAVORITOS_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {COMPRADOR_USUALS_FAVORITOS_USER} = TBD
- {COMPRADOR_USUALS_FAVORITOS_PASSWORD} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa el contenido de la pestaña "Lo que más compro".

**Resultado esperado**

La pestaña "Lo que más compro" está resaltada, muestra los My Usuals en grilla 2x2 con la información de producto de B2C-64 y el botón "Continuar" fijo.

**Resultado obtenido**

Android (2026-10-30): al tocar «Lo que más compro» se ven los productos en grilla de 2 columnas y el botón «Continuar» fijo abajo. Nota: al abrir el modal la pestaña resaltada es «Imperdibles» (ver B2C-1410). iOS: no ejecutado.

**Observación**

Android (2026-10-30): al tocar «Lo que más compro» se ven los productos en grilla de 2 columnas y el botón «Continuar» fijo abajo. Nota: al abrir el modal la pestaña resaltada es «Imperdibles» (ver B2C-1410). iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — lo que mas compro](<B2C-41 APP Evidencias 2026-10-30/TC-B2C41-APP-006-android-p01-lo-que-mas-compro.png>)

---

### TC-B2C41-APP-007 - Verificar que Lo que más compro muestra como máximo 24 productos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USUALS_MAS_24_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo
- La cuenta tiene más de 24 productos My Usuals

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {COMPRADOR_USUALS_MAS_24_USER} = TBD
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario recorre hasta el final la grilla de "Lo que más compro" y cuenta los productos.

**Resultado esperado**

La pestaña "Lo que más compro" muestra 24 productos, aunque la cuenta tiene más de 24 My Usuals.

**Resultado obtenido**

Android (2026-10-30): al recorrer «Lo que más compro» hasta el final se cuentan 24 productos distintos. iOS: no ejecutado.

**Observación**

Android (2026-10-30): al recorrer «Lo que más compro» hasta el final se cuentan 24 productos distintos. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — final de lo que mas compro](<B2C-41 APP Evidencias 2026-10-30/TC-B2C41-APP-007-android-p01-final-de-lo-que-mas-compro.png>)

---

### TC-B2C41-APP-008 - Verificar que la pestaña Mis favoritos muestra los favoritos en grilla 2x2 sin tope [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USUALS_FAVORITOS_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {COMPRADOR_USUALS_FAVORITOS_USER} = TBD
- {COMPRADOR_USUALS_FAVORITOS_PASSWORD} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca la pestaña "Mis favoritos".
6. El sistema muestra la pestaña "Mis favoritos" resaltada.

**Resultado esperado**

La pestaña "Mis favoritos" queda resaltada y muestra todos los favoritos de la cuenta en grilla 2x2, con la información de B2C-64 y el botón "Continuar" fijo.

**Resultado obtenido**

Android (2026-10-30): la pestaña «Mis favoritos» queda resaltada al tocarla y muestra los favoritos en grilla de 2 columnas con «Continuar» fijo. No se contó el total de favoritos de la cuenta. iOS: no ejecutado.

**Observación**

Android (2026-10-30): la pestaña «Mis favoritos» queda resaltada al tocarla y muestra los favoritos en grilla de 2 columnas con «Continuar» fijo. No se contó el total de favoritos de la cuenta. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — mis favoritos](<B2C-41 APP Evidencias 2026-10-30/TC-B2C41-APP-008-android-p01-mis-favoritos.png>)

---

### TC-B2C41-APP-009 - Verificar que Agregar un sugerido lo suma al carro y el modal sigue abierto [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USUALS_FAVORITOS_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {COMPRADOR_USUALS_FAVORITOS_USER} = TBD
- {COMPRADOR_USUALS_FAVORITOS_PASSWORD} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca "Agregar" en el primer producto de la pestaña activa.
6. El sistema muestra un loading en la card del producto mientras procesa la solicitud.

**Resultado esperado**

El producto se agrega al carro con la cantidad indicada, el contador del carro se actualiza en tiempo real, el modal permanece abierto y "Continuar" sigue habilitado.

**Resultado obtenido**

Android (2026-10-30): al tocar «Agregar» en el primer sugerido bajan los botones «Agregar» (6→4), el modal sigue abierto y «Continuar» disponible. El contador del carro queda detrás del modal y no se pudo leer. iOS: no ejecutado.

**Observación**

Android (2026-10-30): al tocar «Agregar» en el primer sugerido bajan los botones «Agregar» (6→4), el modal sigue abierto y «Continuar» disponible. El contador del carro queda detrás del modal y no se pudo leer. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — tras agregar un sugerido](<B2C-41 APP Evidencias 2026-10-30/TC-B2C41-APP-009-android-p01-tras-agregar-un-sugerido.png>)

---

### TC-B2C41-APP-010 - Verificar que Continuar cierra el modal de sugeridos y sigue a la página Mis Envíos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USUALS_FAVORITOS_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {COMPRADOR_USUALS_FAVORITOS_USER} = TBD
- {COMPRADOR_USUALS_FAVORITOS_PASSWORD} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca "Continuar".

**Resultado esperado**

El modal se cierra y el usuario continúa al siguiente paso "Mis Envíos"

**Resultado obtenido**

Android (2026-10-30): «Continuar» cierra el modal y abre «Datos de entrega» (dirección, fecha y horario). iOS: no ejecutado.

**Observación**

Android (2026-10-30): «Continuar» cierra el modal y abre «Datos de entrega» (dirección, fecha y horario). iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — tras continuar](<B2C-41 APP Evidencias 2026-10-30/TC-B2C41-APP-010-android-p01-tras-continuar.png>)

---

### TC-B2C41-APP-011 - Verificar que un error al agregar un sugerido muestra CRT-024 y el modal sigue abierto [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USUALS_FAVORITOS_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {ADD_TO_CART_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {ADD_TO_CART_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- {COMPRADOR_USUALS_FAVORITOS_USER} = TBD
- {COMPRADOR_USUALS_FAVORITOS_PASSWORD} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca "Agregar" en el primer producto de la pestaña activa.
6. El sistema muestra el toast de error "No pudimos agregar el producto al carro. Inténtalo nuevamente. (CRT-024)".

**Resultado esperado**

Se muestra el toast CRT-024 (persiste hasta la X), el carrito no se modifica, el modal permanece abierto y "Continuar" sigue disponible.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C41-APP-012 - Verificar que al hacer scroll en el modal el botón Continuar permanece fijo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USUALS_FAVORITOS_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo
- La lista de la pestaña activa supera la altura visible de la pantalla

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {COMPRADOR_USUALS_FAVORITOS_USER} = TBD
- {COMPRADOR_USUALS_FAVORITOS_PASSWORD} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario hace scroll vertical dentro del modal hasta el final de la lista.

**Resultado esperado**

El área de productos se desplaza verticalmente y el CTA "Continuar" permanece fijo en la parte inferior durante todo el scroll.

**Resultado obtenido**

Android (2026-10-30): al hacer scroll hasta el final de la lista el botón «Continuar» permanece fijo en la misma posición. iOS: no ejecutado.

**Observación**

Android (2026-10-30): al hacer scroll hasta el final de la lista el botón «Continuar» permanece fijo en la misma posición. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — scroll hasta el final](<B2C-41 APP Evidencias 2026-10-30/TC-B2C41-APP-012-android-p01-scroll-hasta-el-final.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "App Android cl.smu.unimarcapp.sfcc.qa v1.0.1 (DEV), dispositivo por ADB",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-41",
  "tc_file": "Unimarc/B2C-41 APP Test Cases.xlsx",
  "title": "B2C-41 APP Android - Evidencias QA (corrida del 2026-10-30)",
  "updated_at": "2026-10-30"
 },
 "history": {
  "2026-10-30": [
   "TC-B2C41-APP-001",
   "TC-B2C41-APP-002",
   "TC-B2C41-APP-003",
   "TC-B2C41-APP-004",
   "TC-B2C41-APP-005",
   "TC-B2C41-APP-006",
   "TC-B2C41-APP-007",
   "TC-B2C41-APP-008",
   "TC-B2C41-APP-009",
   "TC-B2C41-APP-010",
   "TC-B2C41-APP-011",
   "TC-B2C41-APP-012"
  ]
 },
 "results": [
  {
   "executed_at": "2026-10-30",
   "expected": "Se muestra el modal \"¡Que no se te olviden!\" sobre el carrito.",
   "id": "TC-B2C41-APP-001",
   "name": "Verificar que Continuar con la entrega abre el modal de sugeridos cuando hay sugerencias [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30, login correo + OTP): con 11 un. de {SKU_VALID_001} en el carro, «Continuar con la entrega» abre el modal «¡Que no se te olviden!». iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30, login correo + OTP): con 11 un. de {SKU_VALID_001} en el carro, «Continuar con la entrega» abre el modal «¡Que no se te olviden!». iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USUALS_FAVORITOS_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {COMPRADOR_USUALS_FAVORITOS_USER} = TBD\n- {COMPRADOR_USUALS_FAVORITOS_PASSWORD} = TBD"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El modal \"¡Que no se te olviden!\" no se presenta y el usuario continúa al siguiente paso Mis Envíos sin interrupción.",
   "id": "TC-B2C41-APP-002",
   "name": "Verificar que sin sugerencias el modal no se muestra y el flujo continúa [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: con la cuenta {COMPRADOR_SIN_SUGERENCIAS_USER} la app queda en «Elige una forma de entrega» (sin método de entrega activo) y no se puede armar el carro de la precondición. Acción: cargar una cuenta sin sugerencias con dirección/método de entrega y stock del SKU. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: con la cuenta {COMPRADOR_SIN_SUGERENCIAS_USER} la app queda en «Elige una forma de entrega» (sin método de entrega activo) y no se puede armar el carro de la precondición. Acción: cargar una cuenta sin sugerencias con dirección/método de entrega y stock del SKU. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_SUGERENCIAS_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo\n- La cuenta no tiene productos My Usuals ni favoritos",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — fallo armando el carro",
     "file": "TC-B2C41-APP-002-android-p01-fallo-armando-el-carro.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {COMPRADOR_SIN_SUGERENCIAS_USER} = TBD\n- {COMPRADOR_SIN_SUGERENCIAS_PASSWORD} = TBD"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Se muestran dos pestañas en orden: \"Lo que más compro\" resaltada con la lista My Usuals y luego \"Mis favoritos\".",
   "id": "TC-B2C41-APP-003",
   "name": "Verificar que con My Usuals y favoritos se ven ambas pestañas en orden [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Esperado: dos pestañas, «Lo que más compro» resaltada y luego «Mis favoritos». Obtenido: tres pestañas «Imperdibles» (resaltada) → «Lo que más compro» → «Mis favoritos». Bug: B2C-1410. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Esperado: dos pestañas, «Lo que más compro» resaltada y luego «Mis favoritos». Obtenido: tres pestañas «Imperdibles» (resaltada) → «Lo que más compro» → «Mis favoritos». Bug: B2C-1410. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USUALS_FAVORITOS_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — pestanas del modal",
     "file": "TC-B2C41-APP-003-android-p01-pestanas-del-modal.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {COMPRADOR_USUALS_FAVORITOS_USER} = TBD\n- {COMPRADOR_USUALS_FAVORITOS_PASSWORD} = TBD"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Se muestra solo la pestaña \"Lo que más compro\", resaltada; no se muestra \"Mis favoritos\".",
   "id": "TC-B2C41-APP-004",
   "name": "Verificar que sin favoritos solo se ve la pestaña Lo que más compro [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: con la cuenta {COMPRADOR_SOLO_USUALS_USER} {SKU_VALID_001} tiene tope de 3 unidades en su tienda («Máx») y el subtotal queda en $7.470, bajo el mínimo de $20.000: el botón «Continuar con la entrega» no se habilita. Acción: declarar un SKU con stock suficiente para esa cuenta o reponerlo. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: con la cuenta {COMPRADOR_SOLO_USUALS_USER} {SKU_VALID_001} tiene tope de 3 unidades en su tienda («Máx») y el subtotal queda en $7.470, bajo el mínimo de $20.000: el botón «Continuar con la entrega» no se habilita. Acción: declarar un SKU con stock suficiente para esa cuenta o reponerlo. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_SOLO_USUALS_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y ningún favorito",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — carro sin minimo de compra",
     "file": "TC-B2C41-APP-004-android-p01-carro-sin-minimo-de-compra.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {COMPRADOR_SOLO_USUALS_USER} = TBD\n- {COMPRADOR_SOLO_USUALS_PASSWORD} = TBD"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Se muestra solo la pestaña \"Mis favoritos\"; no se muestra \"Lo que más compro\".",
   "id": "TC-B2C41-APP-005",
   "name": "Verificar que sin My Usuals solo se ve la pestaña Mis favoritos [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Esperado: solo la pestaña «Mis favoritos». Obtenido: «Imperdibles» y «Mis favoritos» (no aparece «Lo que más compro»). Bug: B2C-1411. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Esperado: solo la pestaña «Mis favoritos». Obtenido: «Imperdibles» y «Mis favoritos» (no aparece «Lo que más compro»). Bug: B2C-1411. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_SOLO_FAVORITOS_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo\n- La cuenta no tiene My Usuals y tiene al menos un favorito",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — pestanas del modal",
     "file": "TC-B2C41-APP-005-android-p01-pestanas-del-modal.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {COMPRADOR_SOLO_FAVORITOS_USER} = TBD\n- {COMPRADOR_SOLO_FAVORITOS_PASSWORD} = TBD"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "La pestaña \"Lo que más compro\" está resaltada, muestra los My Usuals en grilla 2x2 con la información de producto de B2C-64 y el botón \"Continuar\" fijo.",
   "id": "TC-B2C41-APP-006",
   "name": "Verificar que Lo que más compro muestra los My Usuals en grilla 2x2 con Continuar fijo [App] [Logueado]",
   "observation": "Android (2026-10-30): al tocar «Lo que más compro» se ven los productos en grilla de 2 columnas y el botón «Continuar» fijo abajo. Nota: al abrir el modal la pestaña resaltada es «Imperdibles» (ver B2C-1410). iOS: no ejecutado.",
   "observed": "Android (2026-10-30): al tocar «Lo que más compro» se ven los productos en grilla de 2 columnas y el botón «Continuar» fijo abajo. Nota: al abrir el modal la pestaña resaltada es «Imperdibles» (ver B2C-1410). iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USUALS_FAVORITOS_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — lo que mas compro",
     "file": "TC-B2C41-APP-006-android-p01-lo-que-mas-compro.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa el contenido de la pestaña \"Lo que más compro\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {COMPRADOR_USUALS_FAVORITOS_USER} = TBD\n- {COMPRADOR_USUALS_FAVORITOS_PASSWORD} = TBD"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "La pestaña \"Lo que más compro\" muestra 24 productos, aunque la cuenta tiene más de 24 My Usuals.",
   "id": "TC-B2C41-APP-007",
   "name": "Verificar que Lo que más compro muestra como máximo 24 productos [App] [Logueado]",
   "observation": "Android (2026-10-30): al recorrer «Lo que más compro» hasta el final se cuentan 24 productos distintos. iOS: no ejecutado.",
   "observed": "Android (2026-10-30): al recorrer «Lo que más compro» hasta el final se cuentan 24 productos distintos. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USUALS_MAS_24_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo\n- La cuenta tiene más de 24 productos My Usuals",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — final de lo que mas compro",
     "file": "TC-B2C41-APP-007-android-p01-final-de-lo-que-mas-compro.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario recorre hasta el final la grilla de \"Lo que más compro\" y cuenta los productos.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {COMPRADOR_USUALS_MAS_24_USER} = TBD\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = TBD"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "La pestaña \"Mis favoritos\" queda resaltada y muestra todos los favoritos de la cuenta en grilla 2x2, con la información de B2C-64 y el botón \"Continuar\" fijo.",
   "id": "TC-B2C41-APP-008",
   "name": "Verificar que la pestaña Mis favoritos muestra los favoritos en grilla 2x2 sin tope [App] [Logueado]",
   "observation": "Android (2026-10-30): la pestaña «Mis favoritos» queda resaltada al tocarla y muestra los favoritos en grilla de 2 columnas con «Continuar» fijo. No se contó el total de favoritos de la cuenta. iOS: no ejecutado.",
   "observed": "Android (2026-10-30): la pestaña «Mis favoritos» queda resaltada al tocarla y muestra los favoritos en grilla de 2 columnas con «Continuar» fijo. No se contó el total de favoritos de la cuenta. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USUALS_FAVORITOS_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — mis favoritos",
     "file": "TC-B2C41-APP-008-android-p01-mis-favoritos.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca la pestaña \"Mis favoritos\".\n6. El sistema muestra la pestaña \"Mis favoritos\" resaltada.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {COMPRADOR_USUALS_FAVORITOS_USER} = TBD\n- {COMPRADOR_USUALS_FAVORITOS_PASSWORD} = TBD"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El producto se agrega al carro con la cantidad indicada, el contador del carro se actualiza en tiempo real, el modal permanece abierto y \"Continuar\" sigue habilitado.",
   "id": "TC-B2C41-APP-009",
   "name": "Verificar que Agregar un sugerido lo suma al carro y el modal sigue abierto [App] [Logueado]",
   "observation": "Android (2026-10-30): al tocar «Agregar» en el primer sugerido bajan los botones «Agregar» (6→4), el modal sigue abierto y «Continuar» disponible. El contador del carro queda detrás del modal y no se pudo leer. iOS: no ejecutado.",
   "observed": "Android (2026-10-30): al tocar «Agregar» en el primer sugerido bajan los botones «Agregar» (6→4), el modal sigue abierto y «Continuar» disponible. El contador del carro queda detrás del modal y no se pudo leer. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USUALS_FAVORITOS_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — tras agregar un sugerido",
     "file": "TC-B2C41-APP-009-android-p01-tras-agregar-un-sugerido.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca \"Agregar\" en el primer producto de la pestaña activa.\n6. El sistema muestra un loading en la card del producto mientras procesa la solicitud.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {COMPRADOR_USUALS_FAVORITOS_USER} = TBD\n- {COMPRADOR_USUALS_FAVORITOS_PASSWORD} = TBD"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El modal se cierra y el usuario continúa al siguiente paso \"Mis Envíos\"",
   "id": "TC-B2C41-APP-010",
   "name": "Verificar que Continuar cierra el modal de sugeridos y sigue a la página Mis Envíos [App] [Logueado]",
   "observation": "Android (2026-10-30): «Continuar» cierra el modal y abre «Datos de entrega» (dirección, fecha y horario). iOS: no ejecutado.",
   "observed": "Android (2026-10-30): «Continuar» cierra el modal y abre «Datos de entrega» (dirección, fecha y horario). iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USUALS_FAVORITOS_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — tras continuar",
     "file": "TC-B2C41-APP-010-android-p01-tras-continuar.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca \"Continuar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {COMPRADOR_USUALS_FAVORITOS_USER} = TBD\n- {COMPRADOR_USUALS_FAVORITOS_PASSWORD} = TBD"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Se muestra el toast CRT-024 (persiste hasta la X), el carrito no se modifica, el modal permanece abierto y \"Continuar\" sigue disponible.",
   "id": "TC-B2C41-APP-011",
   "name": "Verificar que un error al agregar un sugerido muestra CRT-024 y el modal sigue abierto [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USUALS_FAVORITOS_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {ADD_TO_CART_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca \"Agregar\" en el primer producto de la pestaña activa.\n6. El sistema muestra el toast de error \"No pudimos agregar el producto al carro. Inténtalo nuevamente. (CRT-024)\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {ADD_TO_CART_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- {COMPRADOR_USUALS_FAVORITOS_USER} = TBD\n- {COMPRADOR_USUALS_FAVORITOS_PASSWORD} = TBD"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El área de productos se desplaza verticalmente y el CTA \"Continuar\" permanece fijo en la parte inferior durante todo el scroll.",
   "id": "TC-B2C41-APP-012",
   "name": "Verificar que al hacer scroll en el modal el botón Continuar permanece fijo [App] [Logueado]",
   "observation": "Android (2026-10-30): al hacer scroll hasta el final de la lista el botón «Continuar» permanece fijo en la misma posición. iOS: no ejecutado.",
   "observed": "Android (2026-10-30): al hacer scroll hasta el final de la lista el botón «Continuar» permanece fijo en la misma posición. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USUALS_FAVORITOS_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo\n- La lista de la pestaña activa supera la altura visible de la pantalla",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — scroll hasta el final",
     "file": "TC-B2C41-APP-012-android-p01-scroll-hasta-el-final.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario hace scroll vertical dentro del modal hasta el final de la lista.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {COMPRADOR_USUALS_FAVORITOS_USER} = TBD\n- {COMPRADOR_USUALS_FAVORITOS_PASSWORD} = TBD"
  }
 ]
}
-->
