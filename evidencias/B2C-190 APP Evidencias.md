# B2C-190 (app Android) - Registrar un tercero que recibe o retira el pedido - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-190 APP |
| Última actualización | 2026-11-04 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Dispositivo Android | emulador Pixel_4_API_33 (Android 13) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-190 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 17 |
| Bloqueado Data | 1 |
| Rechazado | 1 |
| **Total** | **19** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-04 | 19 | TC-B2C190-APP-001, TC-B2C190-APP-002, TC-B2C190-APP-003, TC-B2C190-APP-004, TC-B2C190-APP-005, TC-B2C190-APP-007, TC-B2C190-APP-008, TC-B2C190-APP-010, TC-B2C190-APP-012, TC-B2C190-APP-013, TC-B2C190-APP-014, TC-B2C190-APP-015, TC-B2C190-APP-016, TC-B2C190-APP-017, TC-B2C190-APP-018, TC-B2C190-APP-019, TC-B2C190-APP-020, TC-B2C190-APP-021, TC-B2C190-APP-022 |
| 2026-11-03 | 18 | TC-B2C190-APP-001, TC-B2C190-APP-003, TC-B2C190-APP-004, TC-B2C190-APP-005, TC-B2C190-APP-007, TC-B2C190-APP-008, TC-B2C190-APP-010, TC-B2C190-APP-012, TC-B2C190-APP-013, TC-B2C190-APP-014, TC-B2C190-APP-015, TC-B2C190-APP-016, TC-B2C190-APP-017, TC-B2C190-APP-018, TC-B2C190-APP-019, TC-B2C190-APP-020, TC-B2C190-APP-021, TC-B2C190-APP-022 |

## Detalle por caso de prueba

### TC-B2C190-APP-001 - Verificar que con despacho sin tercero se muestra la opción Recibe alguien más [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- No hay un tercero registrado en la sesión

**Data utilizada**

- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {SKU_VALID_001}: 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).

**Resultado esperado**

La sección de datos de entrega muestra la opción "¿Recibe alguien más?" y es seleccionable.

**Resultado obtenido**

Despacho a domicilio sin tercero: opción «¿Recibe alguien más?» visible: true; al tocarla abre el modal: true.

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Despacho a domicilio sin tercero: opción «¿Recibe alguien más?» visible: true; al tocarla abre el modal: true.

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — opcion recibe alguien mas](<B2C-190 APP Evidencias/TC-B2C190-APP-001-android-p01-opcion-recibe-alguien-mas.png>)

![Android · Paso 2 — modal abierto](<B2C-190 APP Evidencias/TC-B2C190-APP-001-android-p02-modal-abierto.png>)

---

### TC-B2C190-APP-003 - Verificar que el modal Recibe alguien más muestra todos sus elementos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {SKU_VALID_001}: 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".

**Resultado esperado**

El modal muestra X, título "¿Recibe alguien más?", texto "Por tu seguridad, deberás completar todos los datos para validar la identidad de quien recibe.", campos RUT*, Nombre*, Apellido* y Teléfono* "+569" vacíos (RUT con placeholder 12.345.678-9), el CTA "Guardar datos de tercero" deshabilitado y el botón "Lo recibiré yo".

**Resultado obtenido**

Elementos ausentes: ninguno. Campos vacíos: RUT «», Nombre «», Apellido «», Teléfono «». Guardar habilitado: false. Placeholder del RUT: no expuesto por la accesibilidad (ver captura). Etiqueta del CTA en el app: «Guardar datos de terceros».

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Elementos ausentes: ninguno. Campos vacíos: RUT «», Nombre «», Apellido «», Teléfono «». Guardar habilitado: false. Placeholder del RUT: no expuesto por la accesibilidad (ver captura). Etiqueta del CTA en el app: «Guardar datos de terceros».

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — modal](<B2C-190 APP Evidencias/TC-B2C190-APP-003-android-p01-modal.png>)

---

### TC-B2C190-APP-004 - Verificar que con datos válidos Guardar datos de tercero envía el OTP al correo del comprador [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APELLIDO_TERCERO}: Gonzáles
- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {NOMBRE_TERCERO}: Marcos
- {RUT_TERCERO}: 12345678-5
- {SKU_VALID_001}: 000000000000675191-UN
- {TELEFONO_TERCERO}: 56987654321
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa RUT 12345678-5, Nombre Marcos, Apellido Gonzáles y Teléfono 56987654321.
8. El usuario toca "Guardar datos de tercero".
9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal "Autenticación requerida".
10. El usuario verifica que 56987654321 no recibe ningún SMS ni notificación.

**Resultado esperado**

Llega un código OTP al correo del usuario comprador ({USER_AUTH_001}) y se muestra el modal "Autenticación requerida". El teléfono {TELEFONO_TERCERO} del tercero no recibe ningún SMS ni notificación.

**Resultado obtenido**

Tras «Guardar datos de terceros» el app abrió «Autenticación requerida» y el código llegó al correo del comprador: true. NO verificable desde la automatización: que el teléfono del tercero (56987654321) no reciba SMS ni notificación (el número no es controlado por QA).

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Tras «Guardar datos de terceros» el app abrió «Autenticación requerida» y el código llegó al correo del comprador: true. NO verificable desde la automatización: que el teléfono del tercero (56987654321) no reciba SMS ni notificación (el número no es controlado por QA).

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — modal otp](<B2C-190 APP Evidencias/TC-B2C190-APP-004-android-p01-modal-otp.png>)

---

### TC-B2C190-APP-005 - Verificar que con OTP válido el tercero queda registrado y se muestra su resumen [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APELLIDO_TERCERO}: Gonzáles
- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {NOMBRE_TERCERO}: Marcos
- {RUT_TERCERO}: 12345678-5
- {SKU_VALID_001}: 000000000000675191-UN
- {TELEFONO_TERCERO}: 56987654321
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa RUT 12345678-5, Nombre Marcos, Apellido Gonzáles y Teléfono 56987654321.
8. El usuario toca "Guardar datos de tercero".
9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal "Autenticación requerida".
10. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

El modal se cierra, Mis Envíos muestra {NOMBRE_TERCERO} y {TELEFONO_TERCERO} con la opción "Editar", ya no se muestra "¿Recibe alguien más?" y aparece el toast "Los datos de quien recibirá tu compra se guardaron correctamente." (4 s + X).

**Resultado obtenido**

Resumen con nombre y teléfono y «Editar»: true; sin «¿Recibe alguien más?»: true; toast «Los datos de quien recibirá tu compra se guardaron correctamente.»: visto a los 1.9 s de validar.

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Resumen con nombre y teléfono y «Editar»: true; sin «¿Recibe alguien más?»: true; toast «Los datos de quien recibirá tu compra se guardaron correctamente.»: visto a los 1.9 s de validar.

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — toast guardado](<B2C-190 APP Evidencias/TC-B2C190-APP-005-android-p01-toast-guardado.png>)

![Android · Paso 2 — resumen del tercero](<B2C-190 APP Evidencias/TC-B2C190-APP-005-android-p02-resumen-del-tercero.png>)

---

### TC-B2C190-APP-007 - Verificar que Editar abre el modal con los datos del tercero precargados [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}

**Data utilizada**

- {APELLIDO_TERCERO}: Gonzáles
- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {NOMBRE_TERCERO}: Marcos
- {RUT_TERCERO}: 12345678-5
- {SKU_VALID_001}: 000000000000675191-UN
- {TELEFONO_TERCERO}: 56987654321
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.

**Resultado esperado**

El modal muestra {RUT_TERCERO}, {NOMBRE_TERCERO}, {APELLIDO_TERCERO} y {TELEFONO_TERCERO} precargados.

**Resultado obtenido**

Precargado: RUT «12.345.678-5» (esperado 12345678-5), Nombre «Marcos», Apellido «Gonzáles», Teléfono «87654321» (esperado 87654321 tras +569).

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Precargado: RUT «12.345.678-5» (esperado 12345678-5), Nombre «Marcos», Apellido «Gonzáles», Teléfono «87654321» (esperado 87654321 tras +569).

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — modal edicion](<B2C-190 APP Evidencias/TC-B2C190-APP-007-android-p01-modal-edicion.png>)

---

### TC-B2C190-APP-008 - Verificar que guardar la edición actualiza el tercero sin pedir OTP [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}

**Data utilizada**

- {APELLIDO_TERCERO}: Gonzáles
- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {NOMBRE_TERCERO_2}: Apolinario
- {NOMBRE_TERCERO}: Marcos
- {RUT_TERCERO}: 12345678-5
- {SKU_VALID_001}: 000000000000675191-UN
- {TELEFONO_TERCERO_2}: 56987654322
- {TELEFONO_TERCERO}: 56987654321
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.
7. El usuario cambia el Nombre por Apolinario y el Teléfono por 56987654322.
8. El usuario toca "Guardar datos de tercero".
9. El sistema muestra un loader.

**Resultado esperado**

No se solicita OTP, el modal se cierra y Mis Envíos muestra {NOMBRE_TERCERO_2} y {TELEFONO_TERCERO_2}.

**Resultado obtenido**

Se pidió OTP: false. Mis Envíos muestra «Apolinario»: true; teléfono nuevo: true.

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Se pidió OTP: false. Mis Envíos muestra «Apolinario»: true; teléfono nuevo: true.

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — tras guardar la edicion](<B2C-190 APP Evidencias/TC-B2C190-APP-008-android-p01-tras-guardar-la-edicion.png>)

---

### TC-B2C190-APP-010 - Verificar que Lo recibiré yo elimina al tercero sin OTP y muestra el toast [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}

**Data utilizada**

- {APELLIDO_TERCERO}: Gonzáles
- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {NOMBRE_TERCERO}: Marcos
- {RUT_TERCERO}: 12345678-5
- {SKU_VALID_001}: 000000000000675191-UN
- {TELEFONO_TERCERO}: 56987654321
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.
7. El usuario toca "Lo recibiré yo".
8. El sistema muestra un loader.

**Resultado esperado**

El modal se cierra sin pedir OTP, el resumen del tercero desaparece, vuelve "¿Recibe alguien más?" y aparece el toast "Los datos fueron eliminados correctamente".

**Resultado obtenido**

Se pidió OTP: false; toast «Los datos fueron eliminados correctamente»: visto a los 1.3 s de tocar «Lo recibiré yo»; vuelve «¿Recibe alguien más?» sin resumen: true.

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Se pidió OTP: false; toast «Los datos fueron eliminados correctamente»: visto a los 1.3 s de tocar «Lo recibiré yo»; vuelve «¿Recibe alguien más?» sin resumen: true.

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — toast eliminado](<B2C-190 APP Evidencias/TC-B2C190-APP-010-android-p01-toast-eliminado.png>)

![Android · Paso 2 — tras lo recibire yo](<B2C-190 APP Evidencias/TC-B2C190-APP-010-android-p02-tras-lo-recibire-yo.png>)

---

### TC-B2C190-APP-012 - Verificar que un RUT con dígito verificador inválido muestra Ingrese un valor válido [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APELLIDO_TERCERO}: Gonzáles
- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {NOMBRE_TERCERO}: Marcos
- {RUT_DV_INVALIDO}: 12345678-0
- {RUT_TERCERO}: 12345678-5
- {SKU_VALID_001}: 000000000000675191-UN
- {TELEFONO_TERCERO}: 56987654321
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa 12345678-0 en RUT y sale del campo.

**Resultado esperado**

Bajo RUT se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

RUT con DV inválido «12345678-0». Errores visibles bajo: RUT. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-0», Nombre «Marcos», Teléfono «87654321».

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): RUT con DV inválido «12345678-0». Errores visibles bajo: RUT. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-0», Nombre «Marcos», Teléfono «87654321».

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — campo invalido](<B2C-190 APP Evidencias/TC-B2C190-APP-012-android-p01-campo-invalido.png>)

---

### TC-B2C190-APP-013 - Verificar que un RUT sin puntos ni guion muestra Ingrese un valor válido [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APELLIDO_TERCERO}: Gonzáles
- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {NOMBRE_TERCERO}: Marcos
- {RUT_SIN_FORMATO}: 123456785
- {RUT_TERCERO}: 12345678-5
- {SKU_VALID_001}: 000000000000675191-UN
- {TELEFONO_TERCERO}: 56987654321
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa 123456785 en RUT y sale del campo.

**Resultado esperado**

Bajo RUT se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

El app autoformatea el RUT sin puntos ni guion {RUT_SIN_FORMATO} (123456785) a «12.345.678-5», que cumple el formato y el dígito verificador del CA10, por lo que no muestra «Ingrese un valor válido» y deja «Guardar datos de terceros» habilitado. Con un DV inválido (APP-012) sí muestra el error. El esperado del TC es más estricto que el CA10 ("formato chileno con puntos y guion"): ajustar el esperado del TC o confirmar con el PO si el formato lo debe escribir el usuario.

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): El app autoformatea el RUT sin puntos ni guion {RUT_SIN_FORMATO} (123456785) a «12.345.678-5», que cumple el formato y el dígito verificador del CA10, por lo que no muestra «Ingrese un valor válido» y deja «Guardar datos de terceros» habilitado. Con un DV inválido (APP-012) sí muestra el error. El esperado del TC es más estricto que el CA10 ("formato chileno con puntos y guion"): ajustar el esperado del TC o confirmar con el PO si el formato lo debe escribir el usuario.

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — campo invalido](<B2C-190 APP Evidencias/TC-B2C190-APP-013-android-p01-campo-invalido.png>)

---

### TC-B2C190-APP-014 - Verificar que un campo obligatorio vacío muestra Ingrese un valor válido al salir del campo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APELLIDO_TERCERO}: Gonzáles
- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {NOMBRE_TERCERO}: Marcos
- {RUT_TERCERO}: 12345678-5
- {SKU_VALID_001}: 000000000000675191-UN
- {TELEFONO_TERCERO}: 56987654321
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa RUT, Apellido y Teléfono con datos válidos.
8. El usuario entra al campo Nombre y sale sin escribir.

**Resultado esperado**

Bajo Nombre se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Nombre vacío (se entra y se sale). Errores visibles bajo: Nombre. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-5», Nombre «», Teléfono «87654321».

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Nombre vacío (se entra y se sale). Errores visibles bajo: Nombre. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-5», Nombre «», Teléfono «87654321».

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — campo invalido](<B2C-190 APP Evidencias/TC-B2C190-APP-014-android-p01-campo-invalido.png>)

---

### TC-B2C190-APP-015 - Verificar que un nombre con números o símbolos muestra Ingrese un valor válido [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APELLIDO_TERCERO}: Gonzáles
- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {NOMBRE_CON_NUMEROS}: Mar1a
- {NOMBRE_TERCERO}: Marcos
- {RUT_TERCERO}: 12345678-5
- {SKU_VALID_001}: 000000000000675191-UN
- {TELEFONO_TERCERO}: 56987654321
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa Mar1a en Nombre y sale del campo.

**Resultado esperado**

Bajo Nombre se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Nombre con número «Mar1a». Errores visibles bajo: Nombre. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-5», Nombre «Mar1a», Teléfono «87654321».

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Nombre con número «Mar1a». Errores visibles bajo: Nombre. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-5», Nombre «Mar1a», Teléfono «87654321».

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — campo invalido](<B2C-190 APP Evidencias/TC-B2C190-APP-015-android-p01-campo-invalido.png>)

---

### TC-B2C190-APP-016 - Verificar que un nombre de más de 30 caracteres muestra Ingrese un valor válido [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APELLIDO_TERCERO}: Gonzáles
- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {NOMBRE_31_CARACTERES}: Gabriel Antonio Alberto Eduardo
- {NOMBRE_TERCERO}: Marcos
- {RUT_TERCERO}: 12345678-5
- {SKU_VALID_001}: 000000000000675191-UN
- {TELEFONO_TERCERO}: 56987654321
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa Gabriel Antonio Alberto Eduardo en Nombre y sale del campo.

**Resultado esperado**

Bajo Nombre se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Esperado: bajo Nombre aparece «Ingrese un valor válido» al ingresar 31 caracteres ({NOMBRE_31_CARACTERES}). Obtenido: el campo recorta el texto a 30 caracteres («Gabriel Antonio Alberto Eduard»), no muestra error y «Guardar datos de terceros» queda habilitado. Spec: tests-app/B2C-190.spec.ts (validacion APP-016). Bug: B2C-1438.

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Esperado: bajo Nombre aparece «Ingrese un valor válido» al ingresar 31 caracteres ({NOMBRE_31_CARACTERES}). Obtenido: el campo recorta el texto a 30 caracteres («Gabriel Antonio Alberto Eduard»), no muestra error y «Guardar datos de terceros» queda habilitado. Spec: tests-app/B2C-190.spec.ts (validacion APP-016). Bug: B2C-1438.

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — campo invalido](<B2C-190 APP Evidencias/TC-B2C190-APP-016-android-p01-campo-invalido.png>)

---

### TC-B2C190-APP-017 - Verificar que un teléfono sin 9 dígitos muestra Ingrese un valor válido [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APELLIDO_TERCERO}: Gonzáles
- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {NOMBRE_TERCERO}: Marcos
- {RUT_TERCERO}: 12345678-5
- {SKU_VALID_001}: 000000000000675191-UN
- {TELEFONO_CORTO}: 5698765
- {TELEFONO_TERCERO}: 56987654321
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa 5698765 en Teléfono y sale del campo.

**Resultado esperado**

Bajo Teléfono se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Teléfono corto «5698765» (se escribe «8765» tras el +569 fijo). Errores visibles bajo: Teléfono. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-5», Nombre «Marcos», Teléfono «8765».

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Teléfono corto «5698765» (se escribe «8765» tras el +569 fijo). Errores visibles bajo: Teléfono. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-5», Nombre «Marcos», Teléfono «8765».

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — campo invalido](<B2C-190 APP Evidencias/TC-B2C190-APP-017-android-p01-campo-invalido.png>)

---

### TC-B2C190-APP-018 - Verificar que al corregir el campo el error desaparece y se habilita el CTA [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APELLIDO_TERCERO}: Gonzáles
- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {NOMBRE_TERCERO}: Marcos
- {RUT_DV_INVALIDO}: 12345678-0
- {RUT_TERCERO}: 12345678-5
- {SKU_VALID_001}: 000000000000675191-UN
- {TELEFONO_TERCERO}: 56987654321
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa Nombre, Apellido y Teléfono con datos válidos.
8. El usuario ingresa 12345678-0 en RUT y sale del campo.
9. El sistema muestra "Ingrese un valor válido" bajo RUT.
10. El usuario reemplaza el RUT por 12345678-5.

**Resultado esperado**

El mensaje de error desaparece y el CTA "Guardar datos de tercero" queda habilitado.

**Resultado obtenido**

Con DV inválido el error bajo RUT: true. Tras reemplazar por «12345678-5» quedan errores: ninguno; Guardar habilitado: true.

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Con DV inválido el error bajo RUT: true. Tras reemplazar por «12345678-5» quedan errores: ninguno; Guardar habilitado: true.

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — error visible](<B2C-190 APP Evidencias/TC-B2C190-APP-018-android-p01-error-visible.png>)

![Android · Paso 2 — corregido](<B2C-190 APP Evidencias/TC-B2C190-APP-018-android-p02-corregido.png>)

---

### TC-B2C190-APP-019 - Verificar que en la edición un dato inválido deja deshabilitado Guardar datos de tercero [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}

**Data utilizada**

- {APELLIDO_TERCERO}: Gonzáles
- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {NOMBRE_CON_NUMEROS}: Mar1a
- {NOMBRE_TERCERO}: Marcos
- {RUT_TERCERO}: 12345678-5
- {SKU_VALID_001}: 000000000000675191-UN
- {TELEFONO_TERCERO}: 56987654321
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.
7. El usuario cambia el Nombre por Mar1a y sale del campo.

**Resultado esperado**

Bajo Nombre se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

En edición con Nombre «Mar1a»: error bajo: Nombre; Guardar habilitado: false.

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): En edición con Nombre «Mar1a»: error bajo: Nombre; Guardar habilitado: false.

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — nombre invalido en edicion](<B2C-190 APP Evidencias/TC-B2C190-APP-019-android-p01-nombre-invalido-en-edicion.png>)

---

### TC-B2C190-APP-020 - Verificar que el tercero se mantiene al salir y volver a Mis Envíos en la misma sesión [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}

**Data utilizada**

- {APELLIDO_TERCERO}: Gonzáles
- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {NOMBRE_TERCERO}: Marcos
- {RUT_TERCERO}: 12345678-5
- {SKU_VALID_001}: 000000000000675191-UN
- {TELEFONO_TERCERO}: 56987654321
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario vuelve al carro y luego regresa a Mis Envíos con "Continuar con la entrega".

**Resultado esperado**

Mis Envíos sigue mostrando el resumen con {NOMBRE_TERCERO} y {TELEFONO_TERCERO} y la opción "Editar".

**Resultado obtenido**

Tras salir al Home y volver a Mis Envíos con «Continuar con la entrega»: resumen del tercero visible: true..

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Tras salir al Home y volver a Mis Envíos con «Continuar con la entrega»: resumen del tercero visible: true..

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — mis envios de vuelta](<B2C-190 APP Evidencias/TC-B2C190-APP-020-android-p01-mis-envios-de-vuelta.png>)

---

### TC-B2C190-APP-021 - Verificar que dejar Teléfono vacío muestra Ingrese un valor válido al salir del campo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APELLIDO_TERCERO}: Gonzáles
- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {NOMBRE_TERCERO}: Marcos
- {RUT_TERCERO}: 12345678-5
- {SKU_VALID_001}: 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa RUT 12345678-5, Nombre Marcos y Apellido Gonzáles con datos válidos.
8. El usuario entra al campo Teléfono y sale sin escribir nada.

**Resultado esperado**

Bajo Teléfono se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Teléfono vacío (se entra y se sale). Errores visibles bajo: Teléfono. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-5», Nombre «Marcos», Teléfono «».

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Teléfono vacío (se entra y se sale). Errores visibles bajo: Teléfono. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-5», Nombre «Marcos», Teléfono «».

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — campo invalido](<B2C-190 APP Evidencias/TC-B2C190-APP-021-android-p01-campo-invalido.png>)

---

### TC-B2C190-APP-022 - Verificar que al generar la compra los datos del tercero se eliminan de la sesión [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_ONECLICK_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001} y una ventana de entrega seleccionada
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}
- La cuenta ya aceptó los Términos y Condiciones en una visita previa al Checkout
- La cuenta tiene enrolada la tarjeta {TARJETA_ONECLICK_001}

**Data utilizada**

- {APELLIDO_TERCERO}: Gonzáles
- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {COMPRADOR_ONECLICK_USER}: vhchirinos+oneclick@avatar-global.com
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {NOMBRE_TERCERO}: Marcos
- {RUT_TERCERO}: 12345678-5
- {SKU_VALID_001}: 000000000000675191-UN
- {TARJETA_ONECLICK_001}: 4051885600446620
- {TELEFONO_TERCERO}: 56987654321
- {UNIDADES_SOBRE_MINIMO}: 11

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos) con el resumen del tercero (Marcos y 56987654321) y la opción "Editar".
5. El usuario toca "Ir a pagar".
6. El sistema carga la página "Mi Pago" (Checkout).
7. El usuario toca la tarjeta 4051885600446620 y toca "Pagar y finalizar".
8. El sistema procesa el pago con éxito y muestra la Confirmación del pedido.
9. Sin cerrar sesión, el usuario agrega 000000000000675191-UN x 11 al carro y vuelve a Mis Envíos con "Continuar con la entrega".
10. El sistema carga la página "Datos de entrega" (Mis Envíos).
11. El usuario toca "¿Recibe alguien más?".

**Resultado esperado**

En la nueva compra Mis Envíos muestra la opción "¿Recibe alguien más?" sin el resumen del tercero ni "Editar", y el modal se abre con RUT, Nombre, Apellido y Teléfono vacíos.

**Resultado obtenido**

Causa: la tarjeta {TARJETA_ONECLICK_001} (terminada en 6620) no está inscrita en {COMPRADOR_ONECLICK_USER}: «Mis tarjetas» solo tiene VISA BANCO DE CHILE Crédito ****6623 y Mastercard ****1122. Se llegó hasta «Mi pago» con el tercero registrado; no se pagó. Acción requerida: inscribir la tarjeta declarada en la cuenta o declarar en la data la tarjeta inscrita, y re-ejecutar.

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Causa: la tarjeta {TARJETA_ONECLICK_001} (terminada en 6620) no está inscrita en {COMPRADOR_ONECLICK_USER}: «Mis tarjetas» solo tiene VISA BANCO DE CHILE Crédito ****6623 y Mastercard ****1122. Se llegó hasta «Mi pago» con el tercero registrado; no se pagó. Acción requerida: inscribir la tarjeta declarada en la cuenta o declarar en la data la tarjeta inscrita, y re-ejecutar.

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — mis envios con tercero](<B2C-190 APP Evidencias/TC-B2C190-APP-022-android-p01-mis-envios-con-tercero.png>)

![Android · Paso 2 — mi pago](<B2C-190 APP Evidencias/TC-B2C190-APP-022-android-p02-mi-pago.png>)

---

### TC-B2C190-APP-002 - Verificar que con retiro en tienda sin tercero se muestra la opción Recibe alguien más [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-04 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | emulador Pixel_4_API_33 (Android 13) |
| Spec | tests-app/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Retiro en tienda configurado con {TIENDA_RETIRO_001}
- No hay un tercero registrado en la sesión

**Data utilizada**

- {APP_BUILD}: v1.0.1
- {APP_PLATFORM}: Android
- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida
- {MONTO_MINIMO_COMPRA}: 20000
- {SKU_VALID_001}: 000000000000675191-UN
- {TIENDA_RETIRO_001}: Unimarc Las Condes
- {UNIDADES_SOBRE_MINIMO}: 11
- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).

**Resultado esperado**

La sección de datos de entrega muestra la opción "¿Recibe alguien más?" y es seleccionable.

**Resultado obtenido**

Retiro en tienda Unimarc Las Condes en Mis Envíos: true; opción «¿Recibe alguien más?» visible: true; al tocarla abre el modal: true.

**Observación**

Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Retiro en tienda Unimarc Las Condes en Mis Envíos: true; opción «¿Recibe alguien más?» visible: true; al tocarla abre el modal: true.

iOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.

**Evidencia**

![Android · Paso 1 — retiro opcion recibe alguien mas](<B2C-190 APP Evidencias/TC-B2C190-APP-002-android-p01-retiro-opcion-recibe-alguien-mas.png>)

![Android · Paso 2 — modal abierto](<B2C-190 APP Evidencias/TC-B2C190-APP-002-android-p02-modal-abierto.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "emulador Pixel_4_API_33 (Android 13)"
  },
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-190 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-190 APP Test Cases.xlsx",
  "title": "B2C-190 (app Android) - Registrar un tercero que recibe o retira el pedido - Evidencias QA",
  "updated_at": "2026-11-04"
 },
 "history": {
  "2026-11-03": [
   "TC-B2C190-APP-001",
   "TC-B2C190-APP-003",
   "TC-B2C190-APP-004",
   "TC-B2C190-APP-005",
   "TC-B2C190-APP-007",
   "TC-B2C190-APP-008",
   "TC-B2C190-APP-010",
   "TC-B2C190-APP-012",
   "TC-B2C190-APP-013",
   "TC-B2C190-APP-014",
   "TC-B2C190-APP-015",
   "TC-B2C190-APP-016",
   "TC-B2C190-APP-017",
   "TC-B2C190-APP-018",
   "TC-B2C190-APP-019",
   "TC-B2C190-APP-020",
   "TC-B2C190-APP-021",
   "TC-B2C190-APP-022"
  ],
  "2026-11-04": [
   "TC-B2C190-APP-001",
   "TC-B2C190-APP-002",
   "TC-B2C190-APP-003",
   "TC-B2C190-APP-004",
   "TC-B2C190-APP-005",
   "TC-B2C190-APP-007",
   "TC-B2C190-APP-008",
   "TC-B2C190-APP-010",
   "TC-B2C190-APP-012",
   "TC-B2C190-APP-013",
   "TC-B2C190-APP-014",
   "TC-B2C190-APP-015",
   "TC-B2C190-APP-016",
   "TC-B2C190-APP-017",
   "TC-B2C190-APP-018",
   "TC-B2C190-APP-019",
   "TC-B2C190-APP-020",
   "TC-B2C190-APP-021",
   "TC-B2C190-APP-022"
  ]
 },
 "results": [
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "La sección de datos de entrega muestra la opción \"¿Recibe alguien más?\" y es seleccionable.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-001",
   "name": "Verificar que con despacho sin tercero se muestra la opción Recibe alguien más [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Despacho a domicilio sin tercero: opción «¿Recibe alguien más?» visible: true; al tocarla abre el modal: true.\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "Despacho a domicilio sin tercero: opción «¿Recibe alguien más?» visible: true; al tocarla abre el modal: true.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- No hay un tercero registrado en la sesión",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — opcion recibe alguien mas",
     "file": "TC-B2C190-APP-001-android-p01-opcion-recibe-alguien-mas.png"
    },
    {
     "caption": "Android · Paso 2 — modal abierto",
     "file": "TC-B2C190-APP-001-android-p02-modal-abierto.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).",
   "test_data": "- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {SKU_VALID_001}: 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "El modal muestra X, título \"¿Recibe alguien más?\", texto \"Por tu seguridad, deberás completar todos los datos para validar la identidad de quien recibe.\", campos RUT*, Nombre*, Apellido* y Teléfono* \"+569\" vacíos (RUT con placeholder 12.345.678-9), el CTA \"Guardar datos de tercero\" deshabilitado y el botón \"Lo recibiré yo\".",
   "form_factor": "app",
   "id": "TC-B2C190-APP-003",
   "name": "Verificar que el modal Recibe alguien más muestra todos sus elementos [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Elementos ausentes: ninguno. Campos vacíos: RUT «», Nombre «», Apellido «», Teléfono «». Guardar habilitado: false. Placeholder del RUT: no expuesto por la accesibilidad (ver captura). Etiqueta del CTA en el app: «Guardar datos de terceros».\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "Elementos ausentes: ninguno. Campos vacíos: RUT «», Nombre «», Apellido «», Teléfono «». Guardar habilitado: false. Placeholder del RUT: no expuesto por la accesibilidad (ver captura). Etiqueta del CTA en el app: «Guardar datos de terceros».",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — modal",
     "file": "TC-B2C190-APP-003-android-p01-modal.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".",
   "test_data": "- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {SKU_VALID_001}: 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "Llega un código OTP al correo del usuario comprador ({USER_AUTH_001}) y se muestra el modal \"Autenticación requerida\". El teléfono {TELEFONO_TERCERO} del tercero no recibe ningún SMS ni notificación.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-004",
   "name": "Verificar que con datos válidos Guardar datos de tercero envía el OTP al correo del comprador [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Tras «Guardar datos de terceros» el app abrió «Autenticación requerida» y el código llegó al correo del comprador: true. NO verificable desde la automatización: que el teléfono del tercero (56987654321) no reciba SMS ni notificación (el número no es controlado por QA).\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "Tras «Guardar datos de terceros» el app abrió «Autenticación requerida» y el código llegó al correo del comprador: true. NO verificable desde la automatización: que el teléfono del tercero (56987654321) no reciba SMS ni notificación (el número no es controlado por QA).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — modal otp",
     "file": "TC-B2C190-APP-004-android-p01-modal-otp.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT 12345678-5, Nombre Marcos, Apellido Gonzáles y Teléfono 56987654321.\n8. El usuario toca \"Guardar datos de tercero\".\n9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal \"Autenticación requerida\".\n10. El usuario verifica que 56987654321 no recibe ningún SMS ni notificación.",
   "test_data": "- {APELLIDO_TERCERO}: Gonzáles\n- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {NOMBRE_TERCERO}: Marcos\n- {RUT_TERCERO}: 12345678-5\n- {SKU_VALID_001}: 000000000000675191-UN\n- {TELEFONO_TERCERO}: 56987654321\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "El modal se cierra, Mis Envíos muestra {NOMBRE_TERCERO} y {TELEFONO_TERCERO} con la opción \"Editar\", ya no se muestra \"¿Recibe alguien más?\" y aparece el toast \"Los datos de quien recibirá tu compra se guardaron correctamente.\" (4 s + X).",
   "form_factor": "app",
   "id": "TC-B2C190-APP-005",
   "name": "Verificar que con OTP válido el tercero queda registrado y se muestra su resumen [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Resumen con nombre y teléfono y «Editar»: true; sin «¿Recibe alguien más?»: true; toast «Los datos de quien recibirá tu compra se guardaron correctamente.»: visto a los 1.9 s de validar.\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "Resumen con nombre y teléfono y «Editar»: true; sin «¿Recibe alguien más?»: true; toast «Los datos de quien recibirá tu compra se guardaron correctamente.»: visto a los 1.9 s de validar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — toast guardado",
     "file": "TC-B2C190-APP-005-android-p01-toast-guardado.png"
    },
    {
     "caption": "Android · Paso 2 — resumen del tercero",
     "file": "TC-B2C190-APP-005-android-p02-resumen-del-tercero.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT 12345678-5, Nombre Marcos, Apellido Gonzáles y Teléfono 56987654321.\n8. El usuario toca \"Guardar datos de tercero\".\n9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal \"Autenticación requerida\".\n10. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "- {APELLIDO_TERCERO}: Gonzáles\n- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {NOMBRE_TERCERO}: Marcos\n- {RUT_TERCERO}: 12345678-5\n- {SKU_VALID_001}: 000000000000675191-UN\n- {TELEFONO_TERCERO}: 56987654321\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "El modal muestra {RUT_TERCERO}, {NOMBRE_TERCERO}, {APELLIDO_TERCERO} y {TELEFONO_TERCERO} precargados.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-007",
   "name": "Verificar que Editar abre el modal con los datos del tercero precargados [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Precargado: RUT «12.345.678-5» (esperado 12345678-5), Nombre «Marcos», Apellido «Gonzáles», Teléfono «87654321» (esperado 87654321 tras +569).\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "Precargado: RUT «12.345.678-5» (esperado 12345678-5), Nombre «Marcos», Apellido «Gonzáles», Teléfono «87654321» (esperado 87654321 tras +569).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — modal edicion",
     "file": "TC-B2C190-APP-007-android-p01-modal-edicion.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.",
   "test_data": "- {APELLIDO_TERCERO}: Gonzáles\n- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {NOMBRE_TERCERO}: Marcos\n- {RUT_TERCERO}: 12345678-5\n- {SKU_VALID_001}: 000000000000675191-UN\n- {TELEFONO_TERCERO}: 56987654321\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "No se solicita OTP, el modal se cierra y Mis Envíos muestra {NOMBRE_TERCERO_2} y {TELEFONO_TERCERO_2}.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-008",
   "name": "Verificar que guardar la edición actualiza el tercero sin pedir OTP [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Se pidió OTP: false. Mis Envíos muestra «Apolinario»: true; teléfono nuevo: true.\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "Se pidió OTP: false. Mis Envíos muestra «Apolinario»: true; teléfono nuevo: true.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — tras guardar la edicion",
     "file": "TC-B2C190-APP-008-android-p01-tras-guardar-la-edicion.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.\n7. El usuario cambia el Nombre por Apolinario y el Teléfono por 56987654322.\n8. El usuario toca \"Guardar datos de tercero\".\n9. El sistema muestra un loader.",
   "test_data": "- {APELLIDO_TERCERO}: Gonzáles\n- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {NOMBRE_TERCERO_2}: Apolinario\n- {NOMBRE_TERCERO}: Marcos\n- {RUT_TERCERO}: 12345678-5\n- {SKU_VALID_001}: 000000000000675191-UN\n- {TELEFONO_TERCERO_2}: 56987654322\n- {TELEFONO_TERCERO}: 56987654321\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "El modal se cierra sin pedir OTP, el resumen del tercero desaparece, vuelve \"¿Recibe alguien más?\" y aparece el toast \"Los datos fueron eliminados correctamente\".",
   "form_factor": "app",
   "id": "TC-B2C190-APP-010",
   "name": "Verificar que Lo recibiré yo elimina al tercero sin OTP y muestra el toast [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Se pidió OTP: false; toast «Los datos fueron eliminados correctamente»: visto a los 1.3 s de tocar «Lo recibiré yo»; vuelve «¿Recibe alguien más?» sin resumen: true.\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "Se pidió OTP: false; toast «Los datos fueron eliminados correctamente»: visto a los 1.3 s de tocar «Lo recibiré yo»; vuelve «¿Recibe alguien más?» sin resumen: true.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — toast eliminado",
     "file": "TC-B2C190-APP-010-android-p01-toast-eliminado.png"
    },
    {
     "caption": "Android · Paso 2 — tras lo recibire yo",
     "file": "TC-B2C190-APP-010-android-p02-tras-lo-recibire-yo.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.\n7. El usuario toca \"Lo recibiré yo\".\n8. El sistema muestra un loader.",
   "test_data": "- {APELLIDO_TERCERO}: Gonzáles\n- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {NOMBRE_TERCERO}: Marcos\n- {RUT_TERCERO}: 12345678-5\n- {SKU_VALID_001}: 000000000000675191-UN\n- {TELEFONO_TERCERO}: 56987654321\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "Bajo RUT se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-012",
   "name": "Verificar que un RUT con dígito verificador inválido muestra Ingrese un valor válido [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): RUT con DV inválido «12345678-0». Errores visibles bajo: RUT. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-0», Nombre «Marcos», Teléfono «87654321».\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "RUT con DV inválido «12345678-0». Errores visibles bajo: RUT. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-0», Nombre «Marcos», Teléfono «87654321».",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — campo invalido",
     "file": "TC-B2C190-APP-012-android-p01-campo-invalido.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa 12345678-0 en RUT y sale del campo.",
   "test_data": "- {APELLIDO_TERCERO}: Gonzáles\n- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {NOMBRE_TERCERO}: Marcos\n- {RUT_DV_INVALIDO}: 12345678-0\n- {RUT_TERCERO}: 12345678-5\n- {SKU_VALID_001}: 000000000000675191-UN\n- {TELEFONO_TERCERO}: 56987654321\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "Bajo RUT se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-013",
   "name": "Verificar que un RUT sin puntos ni guion muestra Ingrese un valor válido [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): El app autoformatea el RUT sin puntos ni guion {RUT_SIN_FORMATO} (123456785) a «12.345.678-5», que cumple el formato y el dígito verificador del CA10, por lo que no muestra «Ingrese un valor válido» y deja «Guardar datos de terceros» habilitado. Con un DV inválido (APP-012) sí muestra el error. El esperado del TC es más estricto que el CA10 (\"formato chileno con puntos y guion\"): ajustar el esperado del TC o confirmar con el PO si el formato lo debe escribir el usuario.\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "El app autoformatea el RUT sin puntos ni guion {RUT_SIN_FORMATO} (123456785) a «12.345.678-5», que cumple el formato y el dígito verificador del CA10, por lo que no muestra «Ingrese un valor válido» y deja «Guardar datos de terceros» habilitado. Con un DV inválido (APP-012) sí muestra el error. El esperado del TC es más estricto que el CA10 (\"formato chileno con puntos y guion\"): ajustar el esperado del TC o confirmar con el PO si el formato lo debe escribir el usuario.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — campo invalido",
     "file": "TC-B2C190-APP-013-android-p01-campo-invalido.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa 123456785 en RUT y sale del campo.",
   "test_data": "- {APELLIDO_TERCERO}: Gonzáles\n- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {NOMBRE_TERCERO}: Marcos\n- {RUT_SIN_FORMATO}: 123456785\n- {RUT_TERCERO}: 12345678-5\n- {SKU_VALID_001}: 000000000000675191-UN\n- {TELEFONO_TERCERO}: 56987654321\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "Bajo Nombre se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-014",
   "name": "Verificar que un campo obligatorio vacío muestra Ingrese un valor válido al salir del campo [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Nombre vacío (se entra y se sale). Errores visibles bajo: Nombre. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-5», Nombre «», Teléfono «87654321».\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "Nombre vacío (se entra y se sale). Errores visibles bajo: Nombre. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-5», Nombre «», Teléfono «87654321».",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — campo invalido",
     "file": "TC-B2C190-APP-014-android-p01-campo-invalido.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT, Apellido y Teléfono con datos válidos.\n8. El usuario entra al campo Nombre y sale sin escribir.",
   "test_data": "- {APELLIDO_TERCERO}: Gonzáles\n- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {NOMBRE_TERCERO}: Marcos\n- {RUT_TERCERO}: 12345678-5\n- {SKU_VALID_001}: 000000000000675191-UN\n- {TELEFONO_TERCERO}: 56987654321\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "Bajo Nombre se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-015",
   "name": "Verificar que un nombre con números o símbolos muestra Ingrese un valor válido [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Nombre con número «Mar1a». Errores visibles bajo: Nombre. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-5», Nombre «Mar1a», Teléfono «87654321».\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "Nombre con número «Mar1a». Errores visibles bajo: Nombre. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-5», Nombre «Mar1a», Teléfono «87654321».",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — campo invalido",
     "file": "TC-B2C190-APP-015-android-p01-campo-invalido.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa Mar1a en Nombre y sale del campo.",
   "test_data": "- {APELLIDO_TERCERO}: Gonzáles\n- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {NOMBRE_CON_NUMEROS}: Mar1a\n- {NOMBRE_TERCERO}: Marcos\n- {RUT_TERCERO}: 12345678-5\n- {SKU_VALID_001}: 000000000000675191-UN\n- {TELEFONO_TERCERO}: 56987654321\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "Bajo Nombre se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-016",
   "name": "Verificar que un nombre de más de 30 caracteres muestra Ingrese un valor válido [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Esperado: bajo Nombre aparece «Ingrese un valor válido» al ingresar 31 caracteres ({NOMBRE_31_CARACTERES}). Obtenido: el campo recorta el texto a 30 caracteres («Gabriel Antonio Alberto Eduard»), no muestra error y «Guardar datos de terceros» queda habilitado. Spec: tests-app/B2C-190.spec.ts (validacion APP-016). Bug: B2C-1438.\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "Esperado: bajo Nombre aparece «Ingrese un valor válido» al ingresar 31 caracteres ({NOMBRE_31_CARACTERES}). Obtenido: el campo recorta el texto a 30 caracteres («Gabriel Antonio Alberto Eduard»), no muestra error y «Guardar datos de terceros» queda habilitado. Spec: tests-app/B2C-190.spec.ts (validacion APP-016). Bug: B2C-1438.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — campo invalido",
     "file": "TC-B2C190-APP-016-android-p01-campo-invalido.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa Gabriel Antonio Alberto Eduardo en Nombre y sale del campo.",
   "test_data": "- {APELLIDO_TERCERO}: Gonzáles\n- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {NOMBRE_31_CARACTERES}: Gabriel Antonio Alberto Eduardo\n- {NOMBRE_TERCERO}: Marcos\n- {RUT_TERCERO}: 12345678-5\n- {SKU_VALID_001}: 000000000000675191-UN\n- {TELEFONO_TERCERO}: 56987654321\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "Bajo Teléfono se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-017",
   "name": "Verificar que un teléfono sin 9 dígitos muestra Ingrese un valor válido [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Teléfono corto «5698765» (se escribe «8765» tras el +569 fijo). Errores visibles bajo: Teléfono. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-5», Nombre «Marcos», Teléfono «8765».\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "Teléfono corto «5698765» (se escribe «8765» tras el +569 fijo). Errores visibles bajo: Teléfono. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-5», Nombre «Marcos», Teléfono «8765».",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — campo invalido",
     "file": "TC-B2C190-APP-017-android-p01-campo-invalido.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa 5698765 en Teléfono y sale del campo.",
   "test_data": "- {APELLIDO_TERCERO}: Gonzáles\n- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {NOMBRE_TERCERO}: Marcos\n- {RUT_TERCERO}: 12345678-5\n- {SKU_VALID_001}: 000000000000675191-UN\n- {TELEFONO_CORTO}: 5698765\n- {TELEFONO_TERCERO}: 56987654321\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "El mensaje de error desaparece y el CTA \"Guardar datos de tercero\" queda habilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-018",
   "name": "Verificar que al corregir el campo el error desaparece y se habilita el CTA [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Con DV inválido el error bajo RUT: true. Tras reemplazar por «12345678-5» quedan errores: ninguno; Guardar habilitado: true.\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "Con DV inválido el error bajo RUT: true. Tras reemplazar por «12345678-5» quedan errores: ninguno; Guardar habilitado: true.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — error visible",
     "file": "TC-B2C190-APP-018-android-p01-error-visible.png"
    },
    {
     "caption": "Android · Paso 2 — corregido",
     "file": "TC-B2C190-APP-018-android-p02-corregido.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa Nombre, Apellido y Teléfono con datos válidos.\n8. El usuario ingresa 12345678-0 en RUT y sale del campo.\n9. El sistema muestra \"Ingrese un valor válido\" bajo RUT.\n10. El usuario reemplaza el RUT por 12345678-5.",
   "test_data": "- {APELLIDO_TERCERO}: Gonzáles\n- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {NOMBRE_TERCERO}: Marcos\n- {RUT_DV_INVALIDO}: 12345678-0\n- {RUT_TERCERO}: 12345678-5\n- {SKU_VALID_001}: 000000000000675191-UN\n- {TELEFONO_TERCERO}: 56987654321\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "Bajo Nombre se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-019",
   "name": "Verificar que en la edición un dato inválido deja deshabilitado Guardar datos de tercero [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): En edición con Nombre «Mar1a»: error bajo: Nombre; Guardar habilitado: false.\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "En edición con Nombre «Mar1a»: error bajo: Nombre; Guardar habilitado: false.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — nombre invalido en edicion",
     "file": "TC-B2C190-APP-019-android-p01-nombre-invalido-en-edicion.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.\n7. El usuario cambia el Nombre por Mar1a y sale del campo.",
   "test_data": "- {APELLIDO_TERCERO}: Gonzáles\n- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {NOMBRE_CON_NUMEROS}: Mar1a\n- {NOMBRE_TERCERO}: Marcos\n- {RUT_TERCERO}: 12345678-5\n- {SKU_VALID_001}: 000000000000675191-UN\n- {TELEFONO_TERCERO}: 56987654321\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "Mis Envíos sigue mostrando el resumen con {NOMBRE_TERCERO} y {TELEFONO_TERCERO} y la opción \"Editar\".",
   "form_factor": "app",
   "id": "TC-B2C190-APP-020",
   "name": "Verificar que el tercero se mantiene al salir y volver a Mis Envíos en la misma sesión [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Tras salir al Home y volver a Mis Envíos con «Continuar con la entrega»: resumen del tercero visible: true..\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "Tras salir al Home y volver a Mis Envíos con «Continuar con la entrega»: resumen del tercero visible: true..",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — mis envios de vuelta",
     "file": "TC-B2C190-APP-020-android-p01-mis-envios-de-vuelta.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario vuelve al carro y luego regresa a Mis Envíos con \"Continuar con la entrega\".",
   "test_data": "- {APELLIDO_TERCERO}: Gonzáles\n- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {NOMBRE_TERCERO}: Marcos\n- {RUT_TERCERO}: 12345678-5\n- {SKU_VALID_001}: 000000000000675191-UN\n- {TELEFONO_TERCERO}: 56987654321\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "Bajo Teléfono se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-021",
   "name": "Verificar que dejar Teléfono vacío muestra Ingrese un valor válido al salir del campo [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Teléfono vacío (se entra y se sale). Errores visibles bajo: Teléfono. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-5», Nombre «Marcos», Teléfono «».\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "Teléfono vacío (se entra y se sale). Errores visibles bajo: Teléfono. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-5», Nombre «Marcos», Teléfono «».",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — campo invalido",
     "file": "TC-B2C190-APP-021-android-p01-campo-invalido.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT 12345678-5, Nombre Marcos y Apellido Gonzáles con datos válidos.\n8. El usuario entra al campo Teléfono y sale sin escribir nada.",
   "test_data": "- {APELLIDO_TERCERO}: Gonzáles\n- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {NOMBRE_TERCERO}: Marcos\n- {RUT_TERCERO}: 12345678-5\n- {SKU_VALID_001}: 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "En la nueva compra Mis Envíos muestra la opción \"¿Recibe alguien más?\" sin el resumen del tercero ni \"Editar\", y el modal se abre con RUT, Nombre, Apellido y Teléfono vacíos.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-022",
   "name": "Verificar que al generar la compra los datos del tercero se eliminan de la sesión [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Causa: la tarjeta {TARJETA_ONECLICK_001} (terminada en 6620) no está inscrita en {COMPRADOR_ONECLICK_USER}: «Mis tarjetas» solo tiene VISA BANCO DE CHILE Crédito ****6623 y Mastercard ****1122. Se llegó hasta «Mi pago» con el tercero registrado; no se pagó. Acción requerida: inscribir la tarjeta declarada en la cuenta o declarar en la data la tarjeta inscrita, y re-ejecutar.\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "Causa: la tarjeta {TARJETA_ONECLICK_001} (terminada en 6620) no está inscrita en {COMPRADOR_ONECLICK_USER}: «Mis tarjetas» solo tiene VISA BANCO DE CHILE Crédito ****6623 y Mastercard ****1122. Se llegó hasta «Mi pago» con el tercero registrado; no se pagó. Acción requerida: inscribir la tarjeta declarada en la cuenta o declarar en la data la tarjeta inscrita, y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_ONECLICK_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001} y una ventana de entrega seleccionada\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}\n- La cuenta ya aceptó los Términos y Condiciones en una visita previa al Checkout\n- La cuenta tiene enrolada la tarjeta {TARJETA_ONECLICK_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — mis envios con tercero",
     "file": "TC-B2C190-APP-022-android-p01-mis-envios-con-tercero.png"
    },
    {
     "caption": "Android · Paso 2 — mi pago",
     "file": "TC-B2C190-APP-022-android-p02-mi-pago.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos) con el resumen del tercero (Marcos y 56987654321) y la opción \"Editar\".\n5. El usuario toca \"Ir a pagar\".\n6. El sistema carga la página \"Mi Pago\" (Checkout).\n7. El usuario toca la tarjeta 4051885600446620 y toca \"Pagar y finalizar\".\n8. El sistema procesa el pago con éxito y muestra la Confirmación del pedido.\n9. Sin cerrar sesión, el usuario agrega 000000000000675191-UN x 11 al carro y vuelve a Mis Envíos con \"Continuar con la entrega\".\n10. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n11. El usuario toca \"¿Recibe alguien más?\".",
   "test_data": "- {APELLIDO_TERCERO}: Gonzáles\n- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {COMPRADOR_ONECLICK_USER}: vhchirinos+oneclick@avatar-global.com\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {NOMBRE_TERCERO}: Marcos\n- {RUT_TERCERO}: 12345678-5\n- {SKU_VALID_001}: 000000000000675191-UN\n- {TARJETA_ONECLICK_001}: 4051885600446620\n- {TELEFONO_TERCERO}: 56987654321\n- {UNIDADES_SOBRE_MINIMO}: 11"
  },
  {
   "device": "emulador Pixel_4_API_33 (Android 13)",
   "executed_at": "2026-11-04",
   "expected": "La sección de datos de entrega muestra la opción \"¿Recibe alguien más?\" y es seleccionable.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-002",
   "name": "Verificar que con retiro en tienda sin tercero se muestra la opción Recibe alguien más [App] [Logueado]",
   "observation": "Android (emulador Pixel_4_API_33 (Android 13), v1.0.1): Retiro en tienda Unimarc Las Condes en Mis Envíos: true; opción «¿Recibe alguien más?» visible: true; al tocarla abre el modal: true.\niOS: Bloqueado Data. La fila no declara {IOS_BUNDLE_ID} ni {IOS_APP_BUILD} en 'Test data' y el Excel de data no los tiene. Acción requerida: cargar ambos tokens, declararlos en la fila y re-ejecutar iOS.",
   "observed": "Retiro en tienda Unimarc Las Condes en Mis Envíos: true; opción «¿Recibe alguien más?» visible: true; al tocarla abre el modal: true.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Retiro en tienda configurado con {TIENDA_RETIRO_001}\n- No hay un tercero registrado en la sesión",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — retiro opcion recibe alguien mas",
     "file": "TC-B2C190-APP-002-android-p01-retiro-opcion-recibe-alguien-mas.png"
    },
    {
     "caption": "Android · Paso 2 — modal abierto",
     "file": "TC-B2C190-APP-002-android-p02-modal-abierto.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).",
   "test_data": "- {APP_BUILD}: v1.0.1\n- {APP_PLATFORM}: Android\n- {DIRECCION_DESPACHO_001}: Calle Uno 23, La Florida\n- {MONTO_MINIMO_COMPRA}: 20000\n- {SKU_VALID_001}: 000000000000675191-UN\n- {TIENDA_RETIRO_001}: Unimarc Las Condes\n- {UNIDADES_SOBRE_MINIMO}: 11\n- {USER_AUTH_001}: vhchirinos+comprador@avatar-global.com"
  }
 ]
}
-->
