# B2C-189 (app Android) - Mis Envíos: cambio de dirección o tienda - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-189 APP |
| Última actualización | 2026-11-03 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Dispositivo Android | dispositivo por ADB |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-189 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 13 |
| Aprobado | 5 |
| **Total** | **18** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-03 | 9 | TC-B2C189-APP-001, TC-B2C189-APP-002, TC-B2C189-APP-003, TC-B2C189-APP-004, TC-B2C189-APP-005, TC-B2C189-APP-006, TC-B2C189-APP-015, TC-B2C189-APP-016, TC-B2C189-APP-018 |
| 2026-10-26 | 18 | TC-B2C189-APP-001, TC-B2C189-APP-002, TC-B2C189-APP-003, TC-B2C189-APP-004, TC-B2C189-APP-005, TC-B2C189-APP-006, TC-B2C189-APP-007, TC-B2C189-APP-008, TC-B2C189-APP-009, TC-B2C189-APP-010, TC-B2C189-APP-011, TC-B2C189-APP-012, TC-B2C189-APP-013, TC-B2C189-APP-014, TC-B2C189-APP-015, TC-B2C189-APP-016, TC-B2C189-APP-017, TC-B2C189-APP-018 |

## Detalle por caso de prueba

### TC-B2C189-APP-001 - Verificar que el ícono de la tarjeta de dirección abre el Store Locator de despacho [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-189.spec.ts |

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
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).

**Resultado esperado**

Se abre el Store Locator de despacho a domicilio y Mis Envíos permanece sin cambios detrás.

**Observación**

Android (dispositivo por ADB, v1.0.1): Tarjeta: «Enviaremos tu compra a: / Casa: Calle Uno 23, La Florida». Textos al tocar «Cambiar»: ✕ | ✕ | Elige tu método de entrega | Despacho a domicilio | Despacho a domicilio | Retiro en tienda | Retiro en tienda | Calle, dirección o lugar | Activar mi ubicación actual | Activar mi ubicación actual | Dirección de despacho | Calle Uno 23, La Florida.

**Evidencia**

![Android · Paso 1 — mis envios despacho](<B2C-189 APP Evidencias/TC-B2C189-APP-001-android-p01-mis-envios-despacho.png>)

![Android · Paso 2 — store locator despacho](<B2C-189 APP Evidencias/TC-B2C189-APP-001-android-p02-store-locator-despacho.png>)

---

### TC-B2C189-APP-002 - Verificar que al cancelar el Store Locator Mis Envíos mantiene la dirección y la ventana [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-189.spec.ts |

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
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario toca la X del Store Locator sin confirmar una dirección.

**Resultado esperado**

Se vuelve a Mis Envíos con la misma dirección {DIRECCION_DESPACHO_001}, la misma ventana seleccionada y el mismo subtotal.

**Observación**

Android (dispositivo por ADB, v1.0.1): Antes: Enviaremos tu compra a: / Casa: Calle Uno 23, La Florida | Día seleccionado: Hoy 3 nov | Horario seleccionado: 12:00 - 15:00 hrs | $30.380. Después de la X: Enviaremos tu compra a: / Casa: Calle Uno 23, La Florida | Día seleccionado: Hoy 3 nov | Horario seleccionado: 12:00 - 15:00 hrs | $30.380.

**Evidencia**

![Android · Paso 1 — tras la x](<B2C-189 APP Evidencias/TC-B2C189-APP-002-android-p01-tras-la-x.png>)

---

### TC-B2C189-APP-003 - Verificar que el ícono de la tarjeta de tienda abre el Store Locator de retiro [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-189.spec.ts |

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
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de tienda.
6. El sistema abre el Store Locator de retiro en tienda (B2C-121).

**Resultado esperado**

Se abre el Store Locator de retiro en tienda y Mis Envíos permanece sin cambios detrás.

**Observación**

Android (dispositivo por ADB, v1.0.1): Tarjeta antes: «». Al tocar «Cambiar» se abrió: ✕ | ✕ | Elige tu método de entrega | Despacho a domicilio | Despacho a domicilio | Retiro en tienda | Retiro en tienda | Selecciona tu tienda Unimarc | Buscar tienda por dirección, comuna o nombre | Ir al mapa | Ir al mapa | Activar mi ubicación actual.

**Evidencia**

![Android · Paso 1 — mis envios retiro](<B2C-189 APP Evidencias/TC-B2C189-APP-003-android-p01-mis-envios-retiro.png>)

![Android · Paso 2 — store locator](<B2C-189 APP Evidencias/TC-B2C189-APP-003-android-p02-store-locator.png>)

---

### TC-B2C189-APP-004 - Verificar que al cancelar el Store Locator Mis Envíos mantiene la tienda y la ventana [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-189.spec.ts |

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
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de tienda.
6. El sistema abre el Store Locator de retiro en tienda (B2C-121).
7. El usuario toca la X del Store Locator sin confirmar una tienda.

**Resultado esperado**

Se vuelve a Mis Envíos con la misma tienda {TIENDA_RETIRO_001} y la misma ventana seleccionada.

**Observación**

Android (dispositivo por ADB, v1.0.1): Antes:  | Día seleccionado: Hoy 3 nov | Horario seleccionado: 12:00 - 15:00 hrs | $27.390. Después de la X:  | Día seleccionado: Hoy 3 nov | Horario seleccionado: 12:00 - 15:00 hrs | $27.390.

**Evidencia**

![Android · Paso 1 — tras la x](<B2C-189 APP Evidencias/TC-B2C189-APP-004-android-p01-tras-la-x.png>)

---

### TC-B2C189-APP-005 - Verificar que una nueva dirección con todo disponible actualiza la tarjeta y las ventanas [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-189.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- {SKU_VALID_001} tiene stock en la tienda abastecedora de {DIRECCION_OTRA_TIENDA}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA} y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras recarga las ventanas.

**Resultado esperado**

Se vuelve a Mis Envíos con la tarjeta rosada mostrando {DIRECCION_OTRA_TIENDA}, las ventanas de la nueva dirección y una ventana seleccionada automáticamente según la regla de priorización por defecto.

**Observación**

Android (dispositivo por ADB, v1.0.1): la precondición pide que {SKU_VALID_001} tenga stock en la dirección «A. Las Conder 14791, Lo Barnechea», pero al confirmar el cambio y validar el OTP el app mostró «Se agotaron» y retiró el producto del carro; la data declarada no sirve en este ambiente. Falta stock de {SKU_VALID_001} en esa ubicación (lo carga el equipo de data). Quedó el flujo sin poder verificarse.

**Evidencia**

![Android · Paso 1 — mis envios nueva direccion](<B2C-189 APP Evidencias/TC-B2C189-APP-005-android-p01-mis-envios-nueva-direccion.png>)

---

### TC-B2C189-APP-006 - Verificar que una nueva tienda con todo disponible actualiza la tarjeta y las ventanas [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-189.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Retiro en tienda configurado con {TIENDA_RETIRO_001}
- {SKU_VALID_001} tiene stock en {TIENDA_RETIRO_002}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_001} = TBD
- {TIENDA_RETIRO_002} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de tienda.
6. El sistema abre el Store Locator de retiro en tienda (B2C-121).
7. El usuario selecciona la tienda {TIENDA_RETIRO_002} y toca "Confirmar tienda".
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras recarga las ventanas.

**Resultado esperado**

Se vuelve a Mis Envíos con la tarjeta rosada mostrando {TIENDA_RETIRO_002}, sus ventanas de retiro y una ventana seleccionada por defecto.

**Observación**

Android (dispositivo por ADB, v1.0.1): la precondición pide que {SKU_VALID_001} tenga stock en la tienda «Unimarc Los Trapenses», pero al confirmar el cambio y validar el OTP el app mostró «Se agotaron» y retiró el producto del carro; la data declarada no sirve en este ambiente. Falta stock de {SKU_VALID_001} en esa ubicación (lo carga el equipo de data). Quedó el flujo sin poder verificarse.

**Evidencia**

![Android · Paso 1 — mis envios nueva tienda](<B2C-189 APP Evidencias/TC-B2C189-APP-006-android-p01-mis-envios-nueva-tienda.png>)

---

### TC-B2C189-APP-007 - Verificar que una nueva dirección con productos no disponibles activa el flujo de no disponibles

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y 000000000000674797-UN
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- 000000000000674797-UN no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = Casa
- A. Las Conder 14791, Lo Barnechea = TBD
- 000000000000674797-UN = TBD
- 000000000000675191-UN = 000000000000675191-UN
- 11 = 11
- 20000 = 20000
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras verifica la disponibilidad.

**Resultado esperado**

Se activa el flujo de productos no disponibles de B2C-126 para 000000000000674797-UN.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Captura tomada en una búsqueda del SKU en la app.

**Evidencia**

![Android · Paso 1 — sku valid 001 sin stock](<B2C-189 APP Evidencias/TC-B2C189-APP-007-android-p01-sku-valid-001-sin-stock.png>)

---

### TC-B2C189-APP-008 - Verificar que tras resolver los productos no disponibles se redirige al carro

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y 000000000000674797-UN
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- 000000000000674797-UN no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = Casa
- A. Las Conder 14791, Lo Barnechea = TBD
- 000000000000674797-UN = TBD
- 000000000000675191-UN = 000000000000675191-UN
- 11 = 11
- 20000 = 20000
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra el flujo de productos no disponibles (B2C-126).
10. El usuario toca "Entendido" en el modal "Se agotaron".

**Resultado esperado**

El usuario llega al carro de compras sin 000000000000674797-UN.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Captura tomada en una búsqueda del SKU en la app.

**Evidencia**

![Android · Paso 1 — sku valid 001 sin stock](<B2C-189 APP Evidencias/TC-B2C189-APP-008-android-p01-sku-valid-001-sin-stock.png>)

---

### TC-B2C189-APP-009 - Verificar que si falla el servicio de ventanas tras el cambio se muestra el error ME-034

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- 000000000000675191-UN tiene stock en la tienda de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT} (activarlo después de confirmar la dirección)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- {JANIS_API_ENDPOINT} = TBD
- Calle Uno 23, La Florida = Casa
- A. Las Conder 14791, Lo Barnechea = TBD
- 000000000000675191-UN = 000000000000675191-UN
- 11 = 11
- 20000 = 20000
- {HERRAMIENTA_PROXY_APP} = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader.

**Resultado esperado**

Se muestra la pantalla "Ups Algo salió mal" con el código ME-034 y los botones "Reintentar" y "Volver al inicio".

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Además {HERRAMIENTA_PROXY_APP} y {JANIS_API_ENDPOINT} no tienen valor en el Excel de data: el caso exige inducir un error del servicio de ventanas. Captura tomada en una búsqueda del SKU en la app.

**Evidencia**

![Android · Paso 1 — sku valid 001 sin stock](<B2C-189 APP Evidencias/TC-B2C189-APP-009-android-p01-sku-valid-001-sin-stock.png>)

---

### TC-B2C189-APP-010 - Verificar que Reintentar vuelve a consultar las ventanas de la nueva dirección

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT} (activarlo después de confirmar la dirección)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- {JANIS_API_ENDPOINT} = TBD
- Calle Uno 23, La Florida = Casa
- A. Las Conder 14791, Lo Barnechea = TBD
- 000000000000675191-UN = 000000000000675191-UN
- 11 = 11
- 20000 = 20000
- {HERRAMIENTA_PROXY_APP} = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra la pantalla de error ME-034.
10. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en {JANIS_API_ENDPOINT}.
11. El usuario toca "Reintentar".

**Resultado esperado**

Se cargan las ventanas de A. Las Conder 14791, Lo Barnechea y Mis Envíos muestra la nueva dirección con una ventana seleccionada por defecto.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Además {HERRAMIENTA_PROXY_APP} y {JANIS_API_ENDPOINT} no tienen valor en el Excel de data: el caso exige inducir un error del servicio de ventanas. Captura tomada en una búsqueda del SKU en la app.

**Evidencia**

![Android · Paso 1 — sku valid 001 sin stock](<B2C-189 APP Evidencias/TC-B2C189-APP-010-android-p01-sku-valid-001-sin-stock.png>)

---

### TC-B2C189-APP-011 - Verificar que Volver al inicio desde el error ME-034 redirige al Home

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT} (activarlo después de confirmar la dirección)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- {JANIS_API_ENDPOINT} = TBD
- Calle Uno 23, La Florida = Casa
- A. Las Conder 14791, Lo Barnechea = TBD
- 000000000000675191-UN = 000000000000675191-UN
- 11 = 11
- 20000 = 20000
- {HERRAMIENTA_PROXY_APP} = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra la pantalla de error ME-034.
10. El usuario toca "Volver al inicio".

**Resultado esperado**

El usuario es redirigido al Home.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Además {HERRAMIENTA_PROXY_APP} y {JANIS_API_ENDPOINT} no tienen valor en el Excel de data: el caso exige inducir un error del servicio de ventanas. Captura tomada en una búsqueda del SKU en la app.

**Evidencia**

![Android · Paso 1 — sku valid 001 sin stock](<B2C-189 APP Evidencias/TC-B2C189-APP-011-android-p01-sku-valid-001-sin-stock.png>)

---

### TC-B2C189-APP-012 - Verificar que una nueva dirección sin horarios muestra la pantalla Sin horarios disponibles

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = Casa
- Av Libertador Gral Bernardo O'Higgins 1072, Maipú = TBD
- 000000000000675191-UN = 000000000000675191-UN
- 11 = 11
- 20000 = 20000
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra la pantalla "Sin horarios disponibles".
10. El usuario verifica que el código STL-041 es legible en pantalla.

**Resultado esperado**

Se muestra la pantalla "Sin horarios disponibles" con el código de trazabilidad STL-041 legible en pantalla y los botones "Cambiar dirección" y "Volver al inicio" activos.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Captura tomada en una búsqueda del SKU en la app.

**Evidencia**

![Android · Paso 1 — sku valid 001 sin stock](<B2C-189 APP Evidencias/TC-B2C189-APP-012-android-p01-sku-valid-001-sin-stock.png>)

---

### TC-B2C189-APP-013 - Verificar que Cambiar dirección en Sin horarios disponibles vuelve a abrir el Store Locator

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = Casa
- Av Libertador Gral Bernardo O'Higgins 1072, Maipú = TBD
- 000000000000675191-UN = 000000000000675191-UN
- 11 = 11
- 20000 = 20000
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra la pantalla "Sin horarios disponibles".
10. El usuario toca "Cambiar dirección".

**Resultado esperado**

Se abre el Store Locator para seleccionar otra dirección o tienda.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Captura tomada en una búsqueda del SKU en la app.

**Evidencia**

![Android · Paso 1 — sku valid 001 sin stock](<B2C-189 APP Evidencias/TC-B2C189-APP-013-android-p01-sku-valid-001-sin-stock.png>)

---

### TC-B2C189-APP-014 - Verificar que Volver al inicio desde Sin horarios disponibles redirige al Home

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = Casa
- Av Libertador Gral Bernardo O'Higgins 1072, Maipú = TBD
- 000000000000675191-UN = 000000000000675191-UN
- 11 = 11
- 20000 = 20000
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra la pantalla "Sin horarios disponibles".
10. El usuario toca "Volver al inicio".

**Resultado esperado**

El usuario es redirigido al Home.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Captura tomada en una búsqueda del SKU en la app.

**Evidencia**

![Android · Paso 1 — sku valid 001 sin stock](<B2C-189 APP Evidencias/TC-B2C189-APP-014-android-p01-sku-valid-001-sin-stock.png>)

---

### TC-B2C189-APP-015 - Verificar que una dirección de la misma tienda abastecedora se actualiza sin validar productos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-189.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y {SKU_STOCK_SOLO_TIENDA_A}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- {DIRECCION_MISMA_TIENDA} es atendida por la misma tienda abastecedora que {DIRECCION_DESPACHO_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_MISMA_TIENDA} = TBD
- {SKU_STOCK_SOLO_TIENDA_A} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección {DIRECCION_MISMA_TIENDA} y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.

**Resultado esperado**

Mis Envíos muestra {DIRECCION_MISMA_TIENDA} con sus ventanas recargadas, sin modal de productos no disponibles y con el carro intacto.

**Observación**

Android (dispositivo por ADB, v1.0.1): la precondición pide que {DIRECCION_MISMA_TIENDA} sea atendida por la misma tienda abastecedora que {DIRECCION_DESPACHO_001}; al confirmar la dirección y validar el OTP el app mostró «Se agotaron» y retiró «Super Pollo | Albóndigas congelado 300 g» del carro, en vez de actualizar sin validar productos. La data declarada no cumple la precondición en este ambiente. Falta confirmar la dirección de la misma tienda abastecedora o cargar su stock (lo hace el equipo de data).

**Evidencia**

![Android · Paso 1 — mis envios misma tienda](<B2C-189 APP Evidencias/TC-B2C189-APP-015-android-p01-mis-envios-misma-tienda.png>)

---

### TC-B2C189-APP-016 - Verificar que Mis Envíos mantiene su estado mientras el Store Locator completa parcialmente el flujo sin confirmar [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-189.spec.ts |

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
- {DIRECCION_OTRA_TIENDA} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario anota la dirección activa ({DIRECCION_DESPACHO_001}), la ventana seleccionada y el subtotal visibles en Mis Envíos.
6. El usuario toca el ícono ▾ de la tarjeta de dirección.
7. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
8. El usuario ingresa una nueva dirección diferente a {DIRECCION_DESPACHO_001} en el buscador del Store Locator pero NO la confirma.
9. El usuario toca la X del Store Locator.
10. El sistema cierra el Store Locator y vuelve a Mis Envíos.
11. El usuario verifica la dirección, la ventana seleccionada y el subtotal en Mis Envíos.

**Resultado esperado**

Mis Envíos muestra {DIRECCION_DESPACHO_001}, la misma ventana seleccionada y el mismo subtotal anotados en el paso 5, sin ningún cambio producido por la interacción parcial en el Store Locator.

**Observación**

Android (dispositivo por ADB, v1.0.1): Antes: Enviaremos tu compra a: / Casa: Calle Uno 23, La Florida | Día seleccionado: Hoy 3 nov | Horario seleccionado: 12:00 - 15:00 hrs | $30.380. Con «A. Las Conder 14791, Lo Barnechea» escrita sin confirmar y tras la X: Enviaremos tu compra a: / Casa: Calle Uno 23, La Florida | Día seleccionado: Hoy 3 nov | Horario seleccionado: 12:00 - 15:00 hrs | $30.380.

**Evidencia**

![Android · Paso 1 — busqueda sin confirmar](<B2C-189 APP Evidencias/TC-B2C189-APP-016-android-p01-busqueda-sin-confirmar.png>)

![Android · Paso 2 — tras la x](<B2C-189 APP Evidencias/TC-B2C189-APP-016-android-p02-tras-la-x.png>)

---

### TC-B2C189-APP-017 - Verificar que la ventana seleccionada automáticamente tras el cambio cumple la regla de priorización de B2C-147 CA4

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- A. Las Conder 14791, Lo Barnechea tiene múltiples ventanas de entrega disponibles
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = Casa
- A. Las Conder 14791, Lo Barnechea = TBD
- 000000000000675191-UN = 000000000000675191-UN
- 11 = 11
- 20000 = 20000
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com
- {VENTANA_ESPERADA_POR_REGLA} = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras recarga las ventanas.
10. El sistema regresa a Mis Envíos con las ventanas de A. Las Conder 14791, Lo Barnechea.
11. El usuario anota la ventana que queda seleccionada automáticamente.
12. El usuario compara la ventana seleccionada con {VENTANA_ESPERADA_POR_REGLA}.

**Resultado esperado**

La ventana seleccionada automáticamente es {VENTANA_ESPERADA_POR_REGLA}, cumpliendo la regla de priorización por defecto definida en B2C-147 CA4. Ninguna otra ventana queda marcada como seleccionada.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Además {VENTANA_ESPERADA_POR_REGLA} no tiene valor en el Excel de data. Captura tomada en una búsqueda del SKU en la app.

**Evidencia**

![Android · Paso 1 — sku valid 001 sin stock](<B2C-189 APP Evidencias/TC-B2C189-APP-017-android-p01-sku-valid-001-sin-stock.png>)

---

### TC-B2C189-APP-018 - Verificar que una nueva tienda de retiro con producto no disponible activa el flujo de no disponibles [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-189.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y {SKU_STOCK_SOLO_TIENDA_A}
- Retiro en tienda configurado con {TIENDA_RETIRO_001}
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en {TIENDA_RETIRO_002}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_001} = TBD
- {TIENDA_RETIRO_002} = TBD
- {SKU_STOCK_SOLO_TIENDA_A} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de tienda.
6. El sistema abre el Store Locator de retiro en tienda (B2C-121).
7. El usuario selecciona la tienda {TIENDA_RETIRO_002} y toca "Confirmar tienda".
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras verifica la disponibilidad de productos.

**Resultado esperado**

Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.

**Observación**

Android (dispositivo por ADB, v1.0.1): la precondición pide que {SKU_STOCK_SOLO_TIENDA_A} no tenga stock en {TIENDA_RETIRO_002}; al cambiar a esa tienda y validar el OTP el flujo «Se agotaron» listó solo «Super Pollo | Albóndigas congelado 300 g» y no el producto de la precondición, que siguió disponible. La data declarada no cumple la precondición en este ambiente. Falta un producto sin stock en {TIENDA_RETIRO_002} (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — flujo no disponibles](<B2C-189 APP Evidencias/TC-B2C189-APP-018-android-p01-flujo-no-disponibles.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "dispositivo por ADB"
  },
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-189 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-189 APP Test Cases.xlsx",
  "title": "B2C-189 (app Android) - Mis Envíos: cambio de dirección o tienda - Evidencias QA",
  "updated_at": "2026-11-03"
 },
 "history": {
  "2026-10-26": [
   "TC-B2C189-APP-001",
   "TC-B2C189-APP-002",
   "TC-B2C189-APP-003",
   "TC-B2C189-APP-004",
   "TC-B2C189-APP-005",
   "TC-B2C189-APP-006",
   "TC-B2C189-APP-007",
   "TC-B2C189-APP-008",
   "TC-B2C189-APP-009",
   "TC-B2C189-APP-010",
   "TC-B2C189-APP-011",
   "TC-B2C189-APP-012",
   "TC-B2C189-APP-013",
   "TC-B2C189-APP-014",
   "TC-B2C189-APP-015",
   "TC-B2C189-APP-016",
   "TC-B2C189-APP-017",
   "TC-B2C189-APP-018"
  ],
  "2026-11-03": [
   "TC-B2C189-APP-001",
   "TC-B2C189-APP-002",
   "TC-B2C189-APP-003",
   "TC-B2C189-APP-004",
   "TC-B2C189-APP-005",
   "TC-B2C189-APP-006",
   "TC-B2C189-APP-015",
   "TC-B2C189-APP-016",
   "TC-B2C189-APP-018"
  ]
 },
 "results": [
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se abre el Store Locator de despacho a domicilio y Mis Envíos permanece sin cambios detrás.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-001",
   "name": "Verificar que el ícono de la tarjeta de dirección abre el Store Locator de despacho [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Tarjeta: «Enviaremos tu compra a: / Casa: Calle Uno 23, La Florida». Textos al tocar «Cambiar»: ✕ | ✕ | Elige tu método de entrega | Despacho a domicilio | Despacho a domicilio | Retiro en tienda | Retiro en tienda | Calle, dirección o lugar | Activar mi ubicación actual | Activar mi ubicación actual | Dirección de despacho | Calle Uno 23, La Florida.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — mis envios despacho",
     "file": "TC-B2C189-APP-001-android-p01-mis-envios-despacho.png"
    },
    {
     "caption": "Android · Paso 2 — store locator despacho",
     "file": "TC-B2C189-APP-001-android-p02-store-locator-despacho.png"
    }
   ],
   "spec": "tests-app/B2C-189.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se vuelve a Mis Envíos con la misma dirección {DIRECCION_DESPACHO_001}, la misma ventana seleccionada y el mismo subtotal.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-002",
   "name": "Verificar que al cancelar el Store Locator Mis Envíos mantiene la dirección y la ventana [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Antes: Enviaremos tu compra a: / Casa: Calle Uno 23, La Florida | Día seleccionado: Hoy 3 nov | Horario seleccionado: 12:00 - 15:00 hrs | $30.380. Después de la X: Enviaremos tu compra a: / Casa: Calle Uno 23, La Florida | Día seleccionado: Hoy 3 nov | Horario seleccionado: 12:00 - 15:00 hrs | $30.380.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — tras la x",
     "file": "TC-B2C189-APP-002-android-p01-tras-la-x.png"
    }
   ],
   "spec": "tests-app/B2C-189.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario toca la X del Store Locator sin confirmar una dirección.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se abre el Store Locator de retiro en tienda y Mis Envíos permanece sin cambios detrás.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-003",
   "name": "Verificar que el ícono de la tarjeta de tienda abre el Store Locator de retiro [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Tarjeta antes: «». Al tocar «Cambiar» se abrió: ✕ | ✕ | Elige tu método de entrega | Despacho a domicilio | Despacho a domicilio | Retiro en tienda | Retiro en tienda | Selecciona tu tienda Unimarc | Buscar tienda por dirección, comuna o nombre | Ir al mapa | Ir al mapa | Activar mi ubicación actual.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Retiro en tienda configurado con {TIENDA_RETIRO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — mis envios retiro",
     "file": "TC-B2C189-APP-003-android-p01-mis-envios-retiro.png"
    },
    {
     "caption": "Android · Paso 2 — store locator",
     "file": "TC-B2C189-APP-003-android-p02-store-locator.png"
    }
   ],
   "spec": "tests-app/B2C-189.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se vuelve a Mis Envíos con la misma tienda {TIENDA_RETIRO_001} y la misma ventana seleccionada.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-004",
   "name": "Verificar que al cancelar el Store Locator Mis Envíos mantiene la tienda y la ventana [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Antes:  | Día seleccionado: Hoy 3 nov | Horario seleccionado: 12:00 - 15:00 hrs | $27.390. Después de la X:  | Día seleccionado: Hoy 3 nov | Horario seleccionado: 12:00 - 15:00 hrs | $27.390.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Retiro en tienda configurado con {TIENDA_RETIRO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — tras la x",
     "file": "TC-B2C189-APP-004-android-p01-tras-la-x.png"
    }
   ],
   "spec": "tests-app/B2C-189.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).\n7. El usuario toca la X del Store Locator sin confirmar una tienda.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se vuelve a Mis Envíos con la tarjeta rosada mostrando {DIRECCION_OTRA_TIENDA}, las ventanas de la nueva dirección y una ventana seleccionada automáticamente según la regla de priorización por defecto.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-005",
   "name": "Verificar que una nueva dirección con todo disponible actualiza la tarjeta y las ventanas [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): la precondición pide que {SKU_VALID_001} tenga stock en la dirección «A. Las Conder 14791, Lo Barnechea», pero al confirmar el cambio y validar el OTP el app mostró «Se agotaron» y retiró el producto del carro; la data declarada no sirve en este ambiente. Falta stock de {SKU_VALID_001} en esa ubicación (lo carga el equipo de data). Quedó el flujo sin poder verificarse.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- {SKU_VALID_001} tiene stock en la tienda abastecedora de {DIRECCION_OTRA_TIENDA}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — mis envios nueva direccion",
     "file": "TC-B2C189-APP-005-android-p01-mis-envios-nueva-direccion.png"
    }
   ],
   "spec": "tests-app/B2C-189.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA} y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras recarga las ventanas.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se vuelve a Mis Envíos con la tarjeta rosada mostrando {TIENDA_RETIRO_002}, sus ventanas de retiro y una ventana seleccionada por defecto.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-006",
   "name": "Verificar que una nueva tienda con todo disponible actualiza la tarjeta y las ventanas [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): la precondición pide que {SKU_VALID_001} tenga stock en la tienda «Unimarc Los Trapenses», pero al confirmar el cambio y validar el OTP el app mostró «Se agotaron» y retiró el producto del carro; la data declarada no sirve en este ambiente. Falta stock de {SKU_VALID_001} en esa ubicación (lo carga el equipo de data). Quedó el flujo sin poder verificarse.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Retiro en tienda configurado con {TIENDA_RETIRO_001}\n- {SKU_VALID_001} tiene stock en {TIENDA_RETIRO_002}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — mis envios nueva tienda",
     "file": "TC-B2C189-APP-006-android-p01-mis-envios-nueva-tienda.png"
    }
   ],
   "spec": "tests-app/B2C-189.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).\n7. El usuario selecciona la tienda {TIENDA_RETIRO_002} y toca \"Confirmar tienda\".\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras recarga las ventanas.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD\n- {TIENDA_RETIRO_002} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se activa el flujo de productos no disponibles de B2C-126 para 000000000000674797-UN.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-007",
   "name": "Verificar que una nueva dirección con productos no disponibles activa el flujo de no disponibles",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Captura tomada en una búsqueda del SKU en la app.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y 000000000000674797-UN\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- 000000000000674797-UN no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — sku valid 001 sin stock",
     "file": "TC-B2C189-APP-007-android-p01-sku-valid-001-sin-stock.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras verifica la disponibilidad.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = Casa\n- A. Las Conder 14791, Lo Barnechea = TBD\n- 000000000000674797-UN = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = 11\n- 20000 = 20000\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El usuario llega al carro de compras sin 000000000000674797-UN.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-008",
   "name": "Verificar que tras resolver los productos no disponibles se redirige al carro",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Captura tomada en una búsqueda del SKU en la app.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y 000000000000674797-UN\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- 000000000000674797-UN no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — sku valid 001 sin stock",
     "file": "TC-B2C189-APP-008-android-p01-sku-valid-001-sin-stock.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra el flujo de productos no disponibles (B2C-126).\n10. El usuario toca \"Entendido\" en el modal \"Se agotaron\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = Casa\n- A. Las Conder 14791, Lo Barnechea = TBD\n- 000000000000674797-UN = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = 11\n- 20000 = 20000\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra la pantalla \"Ups Algo salió mal\" con el código ME-034 y los botones \"Reintentar\" y \"Volver al inicio\".",
   "form_factor": "app",
   "id": "TC-B2C189-APP-009",
   "name": "Verificar que si falla el servicio de ventanas tras el cambio se muestra el error ME-034",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Además {HERRAMIENTA_PROXY_APP} y {JANIS_API_ENDPOINT} no tienen valor en el Excel de data: el caso exige inducir un error del servicio de ventanas. Captura tomada en una búsqueda del SKU en la app.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- 000000000000675191-UN tiene stock en la tienda de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT} (activarlo después de confirmar la dirección)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — sku valid 001 sin stock",
     "file": "TC-B2C189-APP-009-android-p01-sku-valid-001-sin-stock.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- {JANIS_API_ENDPOINT} = TBD\n- Calle Uno 23, La Florida = Casa\n- A. Las Conder 14791, Lo Barnechea = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = 11\n- 20000 = 20000\n- {HERRAMIENTA_PROXY_APP} = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se cargan las ventanas de A. Las Conder 14791, Lo Barnechea y Mis Envíos muestra la nueva dirección con una ventana seleccionada por defecto.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-010",
   "name": "Verificar que Reintentar vuelve a consultar las ventanas de la nueva dirección",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Además {HERRAMIENTA_PROXY_APP} y {JANIS_API_ENDPOINT} no tienen valor en el Excel de data: el caso exige inducir un error del servicio de ventanas. Captura tomada en una búsqueda del SKU en la app.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT} (activarlo después de confirmar la dirección)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — sku valid 001 sin stock",
     "file": "TC-B2C189-APP-010-android-p01-sku-valid-001-sin-stock.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla de error ME-034.\n10. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en {JANIS_API_ENDPOINT}.\n11. El usuario toca \"Reintentar\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- {JANIS_API_ENDPOINT} = TBD\n- Calle Uno 23, La Florida = Casa\n- A. Las Conder 14791, Lo Barnechea = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = 11\n- 20000 = 20000\n- {HERRAMIENTA_PROXY_APP} = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El usuario es redirigido al Home.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-011",
   "name": "Verificar que Volver al inicio desde el error ME-034 redirige al Home",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Además {HERRAMIENTA_PROXY_APP} y {JANIS_API_ENDPOINT} no tienen valor en el Excel de data: el caso exige inducir un error del servicio de ventanas. Captura tomada en una búsqueda del SKU en la app.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT} (activarlo después de confirmar la dirección)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — sku valid 001 sin stock",
     "file": "TC-B2C189-APP-011-android-p01-sku-valid-001-sin-stock.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla de error ME-034.\n10. El usuario toca \"Volver al inicio\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- {JANIS_API_ENDPOINT} = TBD\n- Calle Uno 23, La Florida = Casa\n- A. Las Conder 14791, Lo Barnechea = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = 11\n- 20000 = 20000\n- {HERRAMIENTA_PROXY_APP} = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra la pantalla \"Sin horarios disponibles\" con el código de trazabilidad STL-041 legible en pantalla y los botones \"Cambiar dirección\" y \"Volver al inicio\" activos.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-012",
   "name": "Verificar que una nueva dirección sin horarios muestra la pantalla Sin horarios disponibles",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Captura tomada en una búsqueda del SKU en la app.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — sku valid 001 sin stock",
     "file": "TC-B2C189-APP-012-android-p01-sku-valid-001-sin-stock.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla \"Sin horarios disponibles\".\n10. El usuario verifica que el código STL-041 es legible en pantalla.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = Casa\n- Av Libertador Gral Bernardo O'Higgins 1072, Maipú = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = 11\n- 20000 = 20000\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se abre el Store Locator para seleccionar otra dirección o tienda.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-013",
   "name": "Verificar que Cambiar dirección en Sin horarios disponibles vuelve a abrir el Store Locator",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Captura tomada en una búsqueda del SKU en la app.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — sku valid 001 sin stock",
     "file": "TC-B2C189-APP-013-android-p01-sku-valid-001-sin-stock.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla \"Sin horarios disponibles\".\n10. El usuario toca \"Cambiar dirección\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = Casa\n- Av Libertador Gral Bernardo O'Higgins 1072, Maipú = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = 11\n- 20000 = 20000\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El usuario es redirigido al Home.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-014",
   "name": "Verificar que Volver al inicio desde Sin horarios disponibles redirige al Home",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Captura tomada en una búsqueda del SKU en la app.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — sku valid 001 sin stock",
     "file": "TC-B2C189-APP-014-android-p01-sku-valid-001-sin-stock.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla \"Sin horarios disponibles\".\n10. El usuario toca \"Volver al inicio\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = Casa\n- Av Libertador Gral Bernardo O'Higgins 1072, Maipú = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = 11\n- 20000 = 20000\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Mis Envíos muestra {DIRECCION_MISMA_TIENDA} con sus ventanas recargadas, sin modal de productos no disponibles y con el carro intacto.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-015",
   "name": "Verificar que una dirección de la misma tienda abastecedora se actualiza sin validar productos [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): la precondición pide que {DIRECCION_MISMA_TIENDA} sea atendida por la misma tienda abastecedora que {DIRECCION_DESPACHO_001}; al confirmar la dirección y validar el OTP el app mostró «Se agotaron» y retiró «Super Pollo | Albóndigas congelado 300 g» del carro, en vez de actualizar sin validar productos. La data declarada no cumple la precondición en este ambiente. Falta confirmar la dirección de la misma tienda abastecedora o cargar su stock (lo hace el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y {SKU_STOCK_SOLO_TIENDA_A}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- {DIRECCION_MISMA_TIENDA} es atendida por la misma tienda abastecedora que {DIRECCION_DESPACHO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — mis envios misma tienda",
     "file": "TC-B2C189-APP-015-android-p01-mis-envios-misma-tienda.png"
    }
   ],
   "spec": "tests-app/B2C-189.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección {DIRECCION_MISMA_TIENDA} y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_MISMA_TIENDA} = TBD\n- {SKU_STOCK_SOLO_TIENDA_A} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Mis Envíos muestra {DIRECCION_DESPACHO_001}, la misma ventana seleccionada y el mismo subtotal anotados en el paso 5, sin ningún cambio producido por la interacción parcial en el Store Locator.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-016",
   "name": "Verificar que Mis Envíos mantiene su estado mientras el Store Locator completa parcialmente el flujo sin confirmar [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Antes: Enviaremos tu compra a: / Casa: Calle Uno 23, La Florida | Día seleccionado: Hoy 3 nov | Horario seleccionado: 12:00 - 15:00 hrs | $30.380. Con «A. Las Conder 14791, Lo Barnechea» escrita sin confirmar y tras la X: Enviaremos tu compra a: / Casa: Calle Uno 23, La Florida | Día seleccionado: Hoy 3 nov | Horario seleccionado: 12:00 - 15:00 hrs | $30.380.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — busqueda sin confirmar",
     "file": "TC-B2C189-APP-016-android-p01-busqueda-sin-confirmar.png"
    },
    {
     "caption": "Android · Paso 2 — tras la x",
     "file": "TC-B2C189-APP-016-android-p02-tras-la-x.png"
    }
   ],
   "spec": "tests-app/B2C-189.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario anota la dirección activa ({DIRECCION_DESPACHO_001}), la ventana seleccionada y el subtotal visibles en Mis Envíos.\n6. El usuario toca el ícono ▾ de la tarjeta de dirección.\n7. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n8. El usuario ingresa una nueva dirección diferente a {DIRECCION_DESPACHO_001} en el buscador del Store Locator pero NO la confirma.\n9. El usuario toca la X del Store Locator.\n10. El sistema cierra el Store Locator y vuelve a Mis Envíos.\n11. El usuario verifica la dirección, la ventana seleccionada y el subtotal en Mis Envíos.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La ventana seleccionada automáticamente es {VENTANA_ESPERADA_POR_REGLA}, cumpliendo la regla de priorización por defecto definida en B2C-147 CA4. Ninguna otra ventana queda marcada como seleccionada.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-017",
   "name": "Verificar que la ventana seleccionada automáticamente tras el cambio cumple la regla de priorización de B2C-147 CA4",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro con {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (11 unidades de 000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') y ese producto figura como 'Pronto disponible' con botón 'Ver similares' en lugar de 'Agregar' (sin stock): no se puede agregar al carro y, sin carro, no se llega a 'Datos de entrega' (Mis Envíos). Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock. Además {VENTANA_ESPERADA_POR_REGLA} no tiene valor en el Excel de data. Captura tomada en una búsqueda del SKU en la app.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- A. Las Conder 14791, Lo Barnechea tiene múltiples ventanas de entrega disponibles\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — sku valid 001 sin stock",
     "file": "TC-B2C189-APP-017-android-p01-sku-valid-001-sin-stock.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras recarga las ventanas.\n10. El sistema regresa a Mis Envíos con las ventanas de A. Las Conder 14791, Lo Barnechea.\n11. El usuario anota la ventana que queda seleccionada automáticamente.\n12. El usuario compara la ventana seleccionada con {VENTANA_ESPERADA_POR_REGLA}.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = Casa\n- A. Las Conder 14791, Lo Barnechea = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = 11\n- 20000 = 20000\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com\n- {VENTANA_ESPERADA_POR_REGLA} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-018",
   "name": "Verificar que una nueva tienda de retiro con producto no disponible activa el flujo de no disponibles [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): la precondición pide que {SKU_STOCK_SOLO_TIENDA_A} no tenga stock en {TIENDA_RETIRO_002}; al cambiar a esa tienda y validar el OTP el flujo «Se agotaron» listó solo «Super Pollo | Albóndigas congelado 300 g» y no el producto de la precondición, que siguió disponible. La data declarada no cumple la precondición en este ambiente. Falta un producto sin stock en {TIENDA_RETIRO_002} (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y {SKU_STOCK_SOLO_TIENDA_A}\n- Retiro en tienda configurado con {TIENDA_RETIRO_001}\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en {TIENDA_RETIRO_002}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — flujo no disponibles",
     "file": "TC-B2C189-APP-018-android-p01-flujo-no-disponibles.png"
    }
   ],
   "spec": "tests-app/B2C-189.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).\n7. El usuario selecciona la tienda {TIENDA_RETIRO_002} y toca \"Confirmar tienda\".\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras verifica la disponibilidad de productos.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD\n- {TIENDA_RETIRO_002} = TBD\n- {SKU_STOCK_SOLO_TIENDA_A} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  }
 ]
}
-->
