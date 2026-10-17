# B2C-189 APP - Cambio de dirección o tienda desde Mis Envíos - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-189 APP |
| Última actualización | 2026-10-14 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.7 (com.smuapp.unimarc) contra DEV |
| Dispositivo Android | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-189 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 18 |
| **Total** | **18** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-14 | 18 | TC-B2C189-APP-001, TC-B2C189-APP-002, TC-B2C189-APP-003, TC-B2C189-APP-004, TC-B2C189-APP-005, TC-B2C189-APP-006, TC-B2C189-APP-007, TC-B2C189-APP-008, TC-B2C189-APP-009, TC-B2C189-APP-010, TC-B2C189-APP-011, TC-B2C189-APP-012, TC-B2C189-APP-013, TC-B2C189-APP-014, TC-B2C189-APP-015, TC-B2C189-APP-016, TC-B2C189-APP-017, TC-B2C189-APP-018 |

## Detalle por caso de prueba

### TC-B2C189-APP-001 - Verificar que el ícono de la tarjeta de dirección abre el Store Locator de despacho [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).

**Resultado esperado**

Se abre el Store Locator de despacho a domicilio y Mis Envíos permanece sin cambios detrás.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-002 - Verificar que al cancelar el Store Locator Mis Envíos mantiene la dirección y la ventana [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario toca la X del Store Locator sin confirmar una dirección.

**Resultado esperado**

Se vuelve a Mis Envíos con la misma dirección Calle Uno 23, La Florida, la misma ventana seleccionada y el mismo subtotal.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-003 - Verificar que el ícono de la tarjeta de tienda abre el Store Locator de retiro [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes

**Data utilizada**

v1.0.7, iOS, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de tienda.
6. El sistema abre el Store Locator de retiro en tienda (B2C-121).

**Resultado esperado**

Se abre el Store Locator de retiro en tienda y Mis Envíos permanece sin cambios detrás.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-004 - Verificar que al cancelar el Store Locator Mis Envíos mantiene la tienda y la ventana [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes

**Data utilizada**

v1.0.7, iOS, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de tienda.
6. El sistema abre el Store Locator de retiro en tienda (B2C-121).
7. El usuario toca la X del Store Locator sin confirmar una tienda.

**Resultado esperado**

Se vuelve a Mis Envíos con la misma tienda Unimarc Las Condes y la misma ventana seleccionada.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-005 - Verificar que una nueva dirección con todo disponible actualiza la tarjeta y las ventanas [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras recarga las ventanas.

**Resultado esperado**

Se vuelve a Mis Envíos con la tarjeta rosada mostrando A. Las Conder 14791, Lo Barnechea, las ventanas de la nueva dirección y una ventana seleccionada automáticamente según la regla de priorización por defecto.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-006 - Verificar que una nueva tienda con todo disponible actualiza la tarjeta y las ventanas [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Retiro en tienda configurado con Unimarc Las Condes
- 000000000000675191-UN tiene stock en Unimarc Los Trapenses
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

v1.0.7, iOS, 20000, 000000000000675191-UN, Unimarc Las Condes, Unimarc Los Trapenses, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de tienda.
6. El sistema abre el Store Locator de retiro en tienda (B2C-121).
7. El usuario selecciona la tienda Unimarc Los Trapenses y toca "Confirmar tienda".
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras recarga las ventanas.

**Resultado esperado**

Se vuelve a Mis Envíos con la tarjeta rosada mostrando Unimarc Los Trapenses, sus ventanas de retiro y una ventana seleccionada por defecto.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-007 - Verificar que una nueva dirección con productos no disponibles activa el flujo de no disponibles [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras verifica la disponibilidad.

**Resultado esperado**

Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {SKU_STOCK_SOLO_TIENDA_A} está vacío en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-008 - Verificar que tras resolver los productos no disponibles se redirige al carro [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
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

El usuario llega al carro de compras sin {SKU_STOCK_SOLO_TIENDA_A}.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {SKU_STOCK_SOLO_TIENDA_A} está vacío en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-009 - Verificar que si falla el servicio de ventanas tras el cambio se muestra el error ME-034 [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- 000000000000675191-UN tiene stock en la tienda de A. Las Conder 14791, Lo Barnechea
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT} (activarlo después de confirmar la dirección)

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
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

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {HERRAMIENTA_PROXY_APP} y {JANIS_API_ENDPOINT} están vacíos en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-010 - Verificar que Reintentar vuelve a consultar las ventanas de la nueva dirección [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT} (activarlo después de confirmar la dirección)

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
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

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {HERRAMIENTA_PROXY_APP} y {JANIS_API_ENDPOINT} están vacíos en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-011 - Verificar que Volver al inicio desde el error ME-034 redirige al Home [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT} (activarlo después de confirmar la dirección)

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
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

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {HERRAMIENTA_PROXY_APP} y {JANIS_API_ENDPOINT} están vacíos en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-012 - Verificar que una nueva dirección sin horarios muestra la pantalla Sin horarios disponibles [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
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

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {DIRECCION_SIN_SLA} no tiene cobertura en DEV (comprobado en B2C-189 web: 'Aún no llegamos a esta dirección'), así que no lleva a 'Sin horarios disponibles'; hace falta una dirección con cobertura y sin SLA. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-013 - Verificar que Cambiar dirección en Sin horarios disponibles vuelve a abrir el Store Locator [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
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

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {DIRECCION_SIN_SLA} no tiene cobertura en DEV (comprobado en B2C-189 web: 'Aún no llegamos a esta dirección'), así que no lleva a 'Sin horarios disponibles'; hace falta una dirección con cobertura y sin SLA. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-014 - Verificar que Volver al inicio desde Sin horarios disponibles redirige al Home [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
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

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {DIRECCION_SIN_SLA} no tiene cobertura en DEV (comprobado en B2C-189 web: 'Aún no llegamos a esta dirección'), así que no lleva a 'Sin horarios disponibles'; hace falta una dirección con cobertura y sin SLA. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-015 - Verificar que una dirección de la misma tienda abastecedora se actualiza sin validar productos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- Gral. José Artigas 3250, Ñuñoa es atendida por la misma tienda abastecedora que Calle Uno 23, La Florida
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, Gral. José Artigas 3250, Ñuñoa, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección.
6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
7. El usuario ingresa la dirección Gral. José Artigas 3250, Ñuñoa y la confirma.
8. El usuario completa la validación OTP con el código recibido en el correo.

**Resultado esperado**

Mis Envíos muestra Gral. José Artigas 3250, Ñuñoa con sus ventanas recargadas, sin modal de productos no disponibles y con el carro intacto.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {SKU_STOCK_SOLO_TIENDA_A} está vacío en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-016 - Verificar que Mis Envíos mantiene su estado mientras el Store Locator completa parcialmente el flujo sin confirmar [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario anota la dirección activa (Calle Uno 23, La Florida), la ventana seleccionada y el subtotal visibles en Mis Envíos.
6. El usuario toca el ícono ▾ de la tarjeta de dirección.
7. El sistema abre el Store Locator de despacho a domicilio (B2C-26).
8. El usuario ingresa una nueva dirección diferente a Calle Uno 23, La Florida en el buscador del Store Locator pero NO la confirma.
9. El usuario toca la X del Store Locator.
10. El sistema cierra el Store Locator y vuelve a Mis Envíos.
11. El usuario verifica la dirección, la ventana seleccionada y el subtotal en Mis Envíos.

**Resultado esperado**

Mis Envíos muestra Calle Uno 23, La Florida, la misma ventana seleccionada y el mismo subtotal anotados en el paso 5, sin ningún cambio producido por la interacción parcial en el Store Locator.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-017 - Verificar que la ventana seleccionada automáticamente tras el cambio cumple la regla de priorización de B2C-147 CA4 [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Despacho a domicilio configurado con Calle Uno 23, La Florida
- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea
- A. Las Conder 14791, Lo Barnechea tiene múltiples ventanas de entrega disponibles
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com, {VENTANA_ESPERADA_POR_REGLA}

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
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

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {VENTANA_ESPERADA_POR_REGLA} está vacío en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C189-APP-018 - Verificar que una nueva tienda de retiro con producto no disponible activa el flujo de no disponibles [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}
- Retiro en tienda configurado con Unimarc Las Condes
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en Unimarc Los Trapenses
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

v1.0.7, iOS, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, Unimarc Las Condes, Unimarc Los Trapenses, 11, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de tienda.
6. El sistema abre el Store Locator de retiro en tienda (B2C-121).
7. El usuario selecciona la tienda Unimarc Los Trapenses y toca "Confirmar tienda".
8. El usuario completa la validación OTP con el código recibido en el correo.
9. El sistema muestra un loader mientras verifica la disponibilidad de productos.

**Resultado esperado**

Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.

**Observación**

Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {SKU_STOCK_SOLO_TIENDA_A} está vacío en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)"
  },
  "environment": "App Unimarc v1.0.7 (com.smuapp.unimarc) contra DEV",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-189 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-189 APP Test Cases.xlsx",
  "title": "B2C-189 APP - Cambio de dirección o tienda desde Mis Envíos - Evidencias QA",
  "updated_at": "2026-10-14"
 },
 "history": {
  "2026-10-14": [
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
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se abre el Store Locator de despacho a domicilio y Mis Envíos permanece sin cambios detrás.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-001",
   "name": "Verificar que el ícono de la tarjeta de dirección abre el Store Locator de despacho [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se vuelve a Mis Envíos con la misma dirección Calle Uno 23, La Florida, la misma ventana seleccionada y el mismo subtotal.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-002",
   "name": "Verificar que al cancelar el Store Locator Mis Envíos mantiene la dirección y la ventana [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario toca la X del Store Locator sin confirmar una dirección.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se abre el Store Locator de retiro en tienda y Mis Envíos permanece sin cambios detrás.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-003",
   "name": "Verificar que el ícono de la tarjeta de tienda abre el Store Locator de retiro [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).",
   "test_data": "v1.0.7, iOS, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se vuelve a Mis Envíos con la misma tienda Unimarc Las Condes y la misma ventana seleccionada.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-004",
   "name": "Verificar que al cancelar el Store Locator Mis Envíos mantiene la tienda y la ventana [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).\n7. El usuario toca la X del Store Locator sin confirmar una tienda.",
   "test_data": "v1.0.7, iOS, 20000, 000000000000675191-UN, Unimarc Las Condes, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se vuelve a Mis Envíos con la tarjeta rosada mostrando A. Las Conder 14791, Lo Barnechea, las ventanas de la nueva dirección y una ventana seleccionada automáticamente según la regla de priorización por defecto.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-005",
   "name": "Verificar que una nueva dirección con todo disponible actualiza la tarjeta y las ventanas [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras recarga las ventanas.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se vuelve a Mis Envíos con la tarjeta rosada mostrando Unimarc Los Trapenses, sus ventanas de retiro y una ventana seleccionada por defecto.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-006",
   "name": "Verificar que una nueva tienda con todo disponible actualiza la tarjeta y las ventanas [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Retiro en tienda configurado con Unimarc Las Condes\n- 000000000000675191-UN tiene stock en Unimarc Los Trapenses\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).\n7. El usuario selecciona la tienda Unimarc Los Trapenses y toca \"Confirmar tienda\".\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras recarga las ventanas.",
   "test_data": "v1.0.7, iOS, 20000, 000000000000675191-UN, Unimarc Las Condes, Unimarc Los Trapenses, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-007",
   "name": "Verificar que una nueva dirección con productos no disponibles activa el flujo de no disponibles [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {SKU_STOCK_SOLO_TIENDA_A} está vacío en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras verifica la disponibilidad.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El usuario llega al carro de compras sin {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-008",
   "name": "Verificar que tras resolver los productos no disponibles se redirige al carro [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {SKU_STOCK_SOLO_TIENDA_A} está vacío en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra el flujo de productos no disponibles (B2C-126).\n10. El usuario toca \"Entendido\" en el modal \"Se agotaron\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se muestra la pantalla \"Ups Algo salió mal\" con el código ME-034 y los botones \"Reintentar\" y \"Volver al inicio\".",
   "form_factor": "app",
   "id": "TC-B2C189-APP-009",
   "name": "Verificar que si falla el servicio de ventanas tras el cambio se muestra el error ME-034 [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {HERRAMIENTA_PROXY_APP} y {JANIS_API_ENDPOINT} están vacíos en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- 000000000000675191-UN tiene stock en la tienda de A. Las Conder 14791, Lo Barnechea\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT} (activarlo después de confirmar la dirección)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se cargan las ventanas de A. Las Conder 14791, Lo Barnechea y Mis Envíos muestra la nueva dirección con una ventana seleccionada por defecto.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-010",
   "name": "Verificar que Reintentar vuelve a consultar las ventanas de la nueva dirección [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {HERRAMIENTA_PROXY_APP} y {JANIS_API_ENDPOINT} están vacíos en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT} (activarlo después de confirmar la dirección)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla de error ME-034.\n10. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en {JANIS_API_ENDPOINT}.\n11. El usuario toca \"Reintentar\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El usuario es redirigido al Home.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-011",
   "name": "Verificar que Volver al inicio desde el error ME-034 redirige al Home [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {HERRAMIENTA_PROXY_APP} y {JANIS_API_ENDPOINT} están vacíos en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT} (activarlo después de confirmar la dirección)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla de error ME-034.\n10. El usuario toca \"Volver al inicio\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se muestra la pantalla \"Sin horarios disponibles\" con el código de trazabilidad STL-041 legible en pantalla y los botones \"Cambiar dirección\" y \"Volver al inicio\" activos.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-012",
   "name": "Verificar que una nueva dirección sin horarios muestra la pantalla Sin horarios disponibles [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {DIRECCION_SIN_SLA} no tiene cobertura en DEV (comprobado en B2C-189 web: 'Aún no llegamos a esta dirección'), así que no lleva a 'Sin horarios disponibles'; hace falta una dirección con cobertura y sin SLA. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla \"Sin horarios disponibles\".\n10. El usuario verifica que el código STL-041 es legible en pantalla.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se abre el Store Locator para seleccionar otra dirección o tienda.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-013",
   "name": "Verificar que Cambiar dirección en Sin horarios disponibles vuelve a abrir el Store Locator [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {DIRECCION_SIN_SLA} no tiene cobertura en DEV (comprobado en B2C-189 web: 'Aún no llegamos a esta dirección'), así que no lleva a 'Sin horarios disponibles'; hace falta una dirección con cobertura y sin SLA. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla \"Sin horarios disponibles\".\n10. El usuario toca \"Cambiar dirección\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El usuario es redirigido al Home.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-014",
   "name": "Verificar que Volver al inicio desde Sin horarios disponibles redirige al Home [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {DIRECCION_SIN_SLA} no tiene cobertura en DEV (comprobado en B2C-189 web: 'Aún no llegamos a esta dirección'), así que no lleva a 'Sin horarios disponibles'; hace falta una dirección con cobertura y sin SLA. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Av Libertador Gral Bernardo O'Higgins 1072, Maipú y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra la pantalla \"Sin horarios disponibles\".\n10. El usuario toca \"Volver al inicio\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, Av Libertador Gral Bernardo O'Higgins 1072, Maipú, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Mis Envíos muestra Gral. José Artigas 3250, Ñuñoa con sus ventanas recargadas, sin modal de productos no disponibles y con el carro intacto.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-015",
   "name": "Verificar que una dirección de la misma tienda abastecedora se actualiza sin validar productos [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {SKU_STOCK_SOLO_TIENDA_A} está vacío en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- Gral. José Artigas 3250, Ñuñoa es atendida por la misma tienda abastecedora que Calle Uno 23, La Florida\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección Gral. José Artigas 3250, Ñuñoa y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, Gral. José Artigas 3250, Ñuñoa, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Mis Envíos muestra Calle Uno 23, La Florida, la misma ventana seleccionada y el mismo subtotal anotados en el paso 5, sin ningún cambio producido por la interacción parcial en el Store Locator.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-016",
   "name": "Verificar que Mis Envíos mantiene su estado mientras el Store Locator completa parcialmente el flujo sin confirmar [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario anota la dirección activa (Calle Uno 23, La Florida), la ventana seleccionada y el subtotal visibles en Mis Envíos.\n6. El usuario toca el ícono ▾ de la tarjeta de dirección.\n7. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n8. El usuario ingresa una nueva dirección diferente a Calle Uno 23, La Florida en el buscador del Store Locator pero NO la confirma.\n9. El usuario toca la X del Store Locator.\n10. El sistema cierra el Store Locator y vuelve a Mis Envíos.\n11. El usuario verifica la dirección, la ventana seleccionada y el subtotal en Mis Envíos.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "La ventana seleccionada automáticamente es {VENTANA_ESPERADA_POR_REGLA}, cumpliendo la regla de priorización por defecto definida en B2C-147 CA4. Ninguna otra ventana queda marcada como seleccionada.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-017",
   "name": "Verificar que la ventana seleccionada automáticamente tras el cambio cumple la regla de priorización de B2C-147 CA4 [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {VENTANA_ESPERADA_POR_REGLA} está vacío en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Despacho a domicilio configurado con Calle Uno 23, La Florida\n- 000000000000675191-UN tiene stock en la tienda abastecedora de A. Las Conder 14791, Lo Barnechea\n- A. Las Conder 14791, Lo Barnechea tiene múltiples ventanas de entrega disponibles\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección.\n6. El sistema abre el Store Locator de despacho a domicilio (B2C-26).\n7. El usuario ingresa la dirección A. Las Conder 14791, Lo Barnechea y la confirma.\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras recarga las ventanas.\n10. El sistema regresa a Mis Envíos con las ventanas de A. Las Conder 14791, Lo Barnechea.\n11. El usuario anota la ventana que queda seleccionada automáticamente.\n12. El usuario compara la ventana seleccionada con {VENTANA_ESPERADA_POR_REGLA}.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, A. Las Conder 14791, Lo Barnechea, 20000, 000000000000675191-UN, 11, vhchirinos+comprador@avatar-global.com, {VENTANA_ESPERADA_POR_REGLA}"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se activa el flujo de productos no disponibles de B2C-126 para {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "app",
   "id": "TC-B2C189-APP-018",
   "name": "Verificar que una nueva tienda de retiro con producto no disponible activa el flujo de no disponibles [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} (vhchirinos+comprador@avatar-global.com) es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Además, {SKU_STOCK_SOLO_TIENDA_A} está vacío en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y {APP_PLATFORM} = iOS en el Excel de data: se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000 y {SKU_STOCK_SOLO_TIENDA_A}\n- Retiro en tienda configurado con Unimarc Las Condes\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en Unimarc Los Trapenses\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de tienda.\n6. El sistema abre el Store Locator de retiro en tienda (B2C-121).\n7. El usuario selecciona la tienda Unimarc Los Trapenses y toca \"Confirmar tienda\".\n8. El usuario completa la validación OTP con el código recibido en el correo.\n9. El sistema muestra un loader mientras verifica la disponibilidad de productos.",
   "test_data": "v1.0.7, iOS, 20000, {SKU_STOCK_SOLO_TIENDA_A}, 000000000000675191-UN, Unimarc Las Condes, Unimarc Los Trapenses, 11, vhchirinos+comprador@avatar-global.com"
  }
 ]
}
-->
