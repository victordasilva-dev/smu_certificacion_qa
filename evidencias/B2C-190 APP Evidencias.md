# B2C-190 (app Android) - Registrar un tercero que recibe o retira el pedido - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-190 APP |
| Última actualización | 2026-11-03 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Dispositivo Android | dispositivo por ADB |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-190 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 10 |
| Aprobado | 7 |
| Rechazado | 1 |
| **Total** | **18** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-03 | 18 | TC-B2C190-APP-001, TC-B2C190-APP-003, TC-B2C190-APP-004, TC-B2C190-APP-005, TC-B2C190-APP-007, TC-B2C190-APP-008, TC-B2C190-APP-010, TC-B2C190-APP-012, TC-B2C190-APP-013, TC-B2C190-APP-014, TC-B2C190-APP-015, TC-B2C190-APP-016, TC-B2C190-APP-017, TC-B2C190-APP-018, TC-B2C190-APP-019, TC-B2C190-APP-020, TC-B2C190-APP-021, TC-B2C190-APP-022 |

## Detalle por caso de prueba

### TC-B2C190-APP-001 - Verificar que con despacho sin tercero se muestra la opción Recibe alguien más [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
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

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).

**Resultado esperado**

La sección de datos de entrega muestra la opción "¿Recibe alguien más?" y es seleccionable.

**Observación**

Android (dispositivo por ADB, v1.0.1): Despacho a domicilio sin tercero: opción «¿Recibe alguien más?» visible: true; al tocarla abre el modal: true.

**Evidencia**

![Android · Paso 1 — envios](<B2C-190 APP Evidencias/TC-B2C190-APP-001-android-p01-envios.png>)

![Android · Paso 1 — opcion recibe alguien mas](<B2C-190 APP Evidencias/TC-B2C190-APP-001-android-p01-opcion-recibe-alguien-mas.png>)

![Android · Paso 2 — modal abierto](<B2C-190 APP Evidencias/TC-B2C190-APP-001-android-p02-modal-abierto.png>)

![Android · Paso 2 — modal](<B2C-190 APP Evidencias/TC-B2C190-APP-001-android-p02-modal.png>)

---

### TC-B2C190-APP-003 - Verificar que el modal Recibe alguien más muestra todos sus elementos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-190.spec.ts |

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
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".

**Resultado esperado**

El modal muestra X, título "¿Recibe alguien más?", texto "Por tu seguridad, deberás completar todos los datos para validar la identidad de quien recibe.", campos RUT*, Nombre*, Apellido* y Teléfono* "+569" vacíos (RUT con placeholder 12.345.678-9), el CTA "Guardar datos de tercero" deshabilitado y el botón "Lo recibiré yo".

**Observación**

Android (dispositivo por ADB, v1.0.1): Elementos ausentes: ninguno. Campos vacíos: RUT «», Nombre «», Apellido «», Teléfono «». Guardar habilitado: false. Placeholder del RUT: no expuesto por la accesibilidad (ver captura). Etiqueta del CTA en el app: «Guardar datos de terceros».

**Evidencia**

![Android · Paso 1 — modal](<B2C-190 APP Evidencias/TC-B2C190-APP-003-android-p01-modal.png>)

---

### TC-B2C190-APP-004 - Verificar que con datos válidos Guardar datos de tercero envía el OTP al correo del comprador [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
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

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {RUT_TERCERO} = 11.111.111-1
- {NOMBRE_TERCERO} = María José
- {APELLIDO_TERCERO} = Pérez
- {TELEFONO_TERCERO} = +56 9 1234 5678
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO}, Apellido {APELLIDO_TERCERO} y Teléfono {TELEFONO_TERCERO}.
8. El usuario toca "Guardar datos de tercero".
9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal "Autenticación requerida".
10. El usuario verifica que {TELEFONO_TERCERO} no recibe ningún SMS ni notificación.

**Resultado esperado**

Llega un código OTP al correo del usuario comprador ({USER_AUTH_001}) y se muestra el modal "Autenticación requerida". El teléfono {TELEFONO_TERCERO} del tercero no recibe ningún SMS ni notificación.

**Observación**

Android (dispositivo por ADB, v1.0.1): Con datos válidos el botón «Guardar datos de terceros» no se habilita: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).

---

### TC-B2C190-APP-005 - Verificar que con OTP válido el tercero queda registrado y se muestra su resumen [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
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

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {RUT_TERCERO} = 11.111.111-1
- {NOMBRE_TERCERO} = María José
- {APELLIDO_TERCERO} = Pérez
- {TELEFONO_TERCERO} = +56 9 1234 5678
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO}, Apellido {APELLIDO_TERCERO} y Teléfono {TELEFONO_TERCERO}.
8. El usuario toca "Guardar datos de tercero".
9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal "Autenticación requerida".
10. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

El modal se cierra, Mis Envíos muestra {NOMBRE_TERCERO} y {TELEFONO_TERCERO} con la opción "Editar", ya no se muestra "¿Recibe alguien más?" y aparece el toast "Los datos de quien recibirá tu compra se guardaron correctamente." (4 s + X).

**Observación**

Android (dispositivo por ADB, v1.0.1): No se puede llegar al OTP: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).

---

### TC-B2C190-APP-007 - Verificar que Editar abre el modal con los datos del tercero precargados [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
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

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {RUT_TERCERO} = 11.111.111-1
- {NOMBRE_TERCERO} = María José
- {APELLIDO_TERCERO} = Pérez
- {TELEFONO_TERCERO} = +56 9 1234 5678
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.

**Resultado esperado**

El modal muestra {RUT_TERCERO}, {NOMBRE_TERCERO}, {APELLIDO_TERCERO} y {TELEFONO_TERCERO} precargados.

**Observación**

Android (dispositivo por ADB, v1.0.1): Requiere un tercero ya registrado, que no se puede crear: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).

---

### TC-B2C190-APP-008 - Verificar que guardar la edición actualiza el tercero sin pedir OTP [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
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

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {RUT_TERCERO} = 11.111.111-1
- {NOMBRE_TERCERO} = María José
- {APELLIDO_TERCERO} = Pérez
- {TELEFONO_TERCERO} = +56 9 1234 5678
- {NOMBRE_TERCERO_2} = Ana
- {TELEFONO_TERCERO_2} = +56 9 8765 4321
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.
7. El usuario cambia el Nombre por {NOMBRE_TERCERO_2} y el Teléfono por {TELEFONO_TERCERO_2}.
8. El usuario toca "Guardar datos de tercero".
9. El sistema muestra un loader.

**Resultado esperado**

No se solicita OTP, el modal se cierra y Mis Envíos muestra {NOMBRE_TERCERO_2} y {TELEFONO_TERCERO_2}.

**Observación**

Android (dispositivo por ADB, v1.0.1): Requiere un tercero ya registrado, que no se puede crear: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).

---

### TC-B2C190-APP-010 - Verificar que Lo recibiré yo elimina al tercero sin OTP y muestra el toast [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
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

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {RUT_TERCERO} = 11.111.111-1
- {NOMBRE_TERCERO} = María José
- {APELLIDO_TERCERO} = Pérez
- {TELEFONO_TERCERO} = +56 9 1234 5678
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.
7. El usuario toca "Lo recibiré yo".
8. El sistema muestra un loader.

**Resultado esperado**

El modal se cierra sin pedir OTP, el resumen del tercero desaparece, vuelve "¿Recibe alguien más?" y aparece el toast "Los datos fueron eliminados correctamente".

**Observación**

Android (dispositivo por ADB, v1.0.1): Requiere un tercero ya registrado, que no se puede crear: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).

---

### TC-B2C190-APP-012 - Verificar que un RUT con dígito verificador inválido muestra Ingrese un valor válido [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-190.spec.ts |

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
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {RUT_TERCERO} = 11.111.111-1
- {NOMBRE_TERCERO} = María José
- {APELLIDO_TERCERO} = Pérez
- {TELEFONO_TERCERO} = +56 9 1234 5678
- {RUT_DV_INVALIDO} = 12.345.678-0
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa {RUT_DV_INVALIDO} en RUT y sale del campo.

**Resultado esperado**

Bajo RUT se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Observación**

Android (dispositivo por ADB, v1.0.1): RUT con DV inválido «12345678-0». Errores visibles bajo: RUT. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-0», Nombre «Marcos», Teléfono «87654321».

**Evidencia**

![Android · Paso 1 — campo invalido](<B2C-190 APP Evidencias/TC-B2C190-APP-012-android-p01-campo-invalido.png>)

---

### TC-B2C190-APP-013 - Verificar que un RUT sin puntos ni guion muestra Ingrese un valor válido [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-190.spec.ts |

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
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {RUT_TERCERO} = 11.111.111-1
- {NOMBRE_TERCERO} = María José
- {APELLIDO_TERCERO} = Pérez
- {TELEFONO_TERCERO} = +56 9 1234 5678
- {RUT_SIN_FORMATO} = 123456785
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa {RUT_SIN_FORMATO} en RUT y sale del campo.

**Resultado esperado**

Bajo RUT se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Observación**

Android (dispositivo por ADB, v1.0.1): El app autoformatea «123456789» ({RUT_SIN_FORMATO}) a «12.345.678-9», que coincide con el RUT de {RUT_TERCERO} y falla por dígito verificador inválido; no se puede aislar el formato. Falta en la data un RUT sin formato con dígito verificador válido para {RUT_SIN_FORMATO} (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — campo invalido](<B2C-190 APP Evidencias/TC-B2C190-APP-013-android-p01-campo-invalido.png>)

---

### TC-B2C190-APP-014 - Verificar que un campo obligatorio vacío muestra Ingrese un valor válido al salir del campo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-190.spec.ts |

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
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {RUT_TERCERO} = 11.111.111-1
- {NOMBRE_TERCERO} = María José
- {APELLIDO_TERCERO} = Pérez
- {TELEFONO_TERCERO} = +56 9 1234 5678
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa RUT, Apellido y Teléfono con datos válidos.
8. El usuario entra al campo Nombre y sale sin escribir.

**Resultado esperado**

Bajo Nombre se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Observación**

Android (dispositivo por ADB, v1.0.1): Nombre vacío (se entra y se sale). Errores visibles bajo: RUT, Nombre. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-9», Nombre «», Teléfono «87654321». Nota: el RUT de {RUT_TERCERO} también arrastra un error de dígito verificador en esta prueba (ver Bloqueado Data de 004).

**Evidencia**

![Android · Paso 1 — campo invalido](<B2C-190 APP Evidencias/TC-B2C190-APP-014-android-p01-campo-invalido.png>)

---

### TC-B2C190-APP-015 - Verificar que un nombre con números o símbolos muestra Ingrese un valor válido [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-190.spec.ts |

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
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {RUT_TERCERO} = 11.111.111-1
- {NOMBRE_TERCERO} = María José
- {APELLIDO_TERCERO} = Pérez
- {TELEFONO_TERCERO} = +56 9 1234 5678
- {NOMBRE_CON_NUMEROS} = Mar1a#
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa {NOMBRE_CON_NUMEROS} en Nombre y sale del campo.

**Resultado esperado**

Bajo Nombre se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Observación**

Android (dispositivo por ADB, v1.0.1): Nombre con número «Mar1a». Errores visibles bajo: RUT, Nombre. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-9», Nombre «Mar1a», Teléfono «87654321». Nota: el RUT de {RUT_TERCERO} también arrastra un error de dígito verificador en esta prueba (ver Bloqueado Data de 004).

**Evidencia**

![Android · Paso 1 — campo invalido](<B2C-190 APP Evidencias/TC-B2C190-APP-015-android-p01-campo-invalido.png>)

---

### TC-B2C190-APP-016 - Verificar que un nombre de más de 30 caracteres muestra Ingrese un valor válido [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-190.spec.ts |

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
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {RUT_TERCERO} = 11.111.111-1
- {NOMBRE_TERCERO} = María José
- {APELLIDO_TERCERO} = Pérez
- {TELEFONO_TERCERO} = +56 9 1234 5678
- {NOMBRE_31_CARACTERES} = Maria Jose Antonia Fernanda Gom (31 caracteres)
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa {NOMBRE_31_CARACTERES} en Nombre y sale del campo.

**Resultado esperado**

Bajo Nombre se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Android (dispositivo por ADB, v1.0.1): Esperado: bajo Nombre aparece «Ingrese un valor válido» al ingresar 31 caracteres («Gabriel Antonio Alberto Eduardo»). Obtenido: el campo recorta el texto a 30 caracteres («Gabriel Antonio Alberto Eduard») y no se muestra ningún error bajo Nombre. Bug: B2C-1438.

**Observación**

Android (dispositivo por ADB, v1.0.1): Esperado: bajo Nombre aparece «Ingrese un valor válido» al ingresar 31 caracteres («Gabriel Antonio Alberto Eduardo»). Obtenido: el campo recorta el texto a 30 caracteres («Gabriel Antonio Alberto Eduard») y no se muestra ningún error bajo Nombre. Bug: B2C-1438.

**Evidencia**

![Android · Paso 1 — campo invalido](<B2C-190 APP Evidencias/TC-B2C190-APP-016-android-p01-campo-invalido.png>)

---

### TC-B2C190-APP-017 - Verificar que un teléfono sin 9 dígitos muestra Ingrese un valor válido [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-190.spec.ts |

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
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {RUT_TERCERO} = 11.111.111-1
- {NOMBRE_TERCERO} = María José
- {APELLIDO_TERCERO} = Pérez
- {TELEFONO_TERCERO} = +56 9 1234 5678
- {TELEFONO_CORTO} = +56 9 1234 567 (8 dígitos)
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa {TELEFONO_CORTO} en Teléfono y sale del campo.

**Resultado esperado**

Bajo Teléfono se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Observación**

Android (dispositivo por ADB, v1.0.1): Teléfono corto «5698765» (se escribe «8765» tras el +569 fijo). Errores visibles bajo: RUT, Teléfono. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-9», Nombre «Marcos», Teléfono «8765». Nota: el RUT de {RUT_TERCERO} también arrastra un error de dígito verificador en esta prueba (ver Bloqueado Data de 004).

**Evidencia**

![Android · Paso 1 — campo invalido](<B2C-190 APP Evidencias/TC-B2C190-APP-017-android-p01-campo-invalido.png>)

---

### TC-B2C190-APP-018 - Verificar que al corregir el campo el error desaparece y se habilita el CTA [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-190.spec.ts |

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
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {RUT_TERCERO} = 11.111.111-1
- {NOMBRE_TERCERO} = María José
- {APELLIDO_TERCERO} = Pérez
- {TELEFONO_TERCERO} = +56 9 1234 5678
- {RUT_DV_INVALIDO} = 12.345.678-0
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa Nombre, Apellido y Teléfono con datos válidos.
8. El usuario ingresa {RUT_DV_INVALIDO} en RUT y sale del campo.
9. El sistema muestra "Ingrese un valor válido" bajo RUT.
10. El usuario reemplaza el RUT por {RUT_TERCERO}.

**Resultado esperado**

El mensaje de error desaparece y el CTA "Guardar datos de tercero" queda habilitado.

**Observación**

Android (dispositivo por ADB, v1.0.1): Tras reemplazar el RUT inválido por {RUT_TERCERO} el error bajo RUT persiste y el botón sigue deshabilitado: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — error visible](<B2C-190 APP Evidencias/TC-B2C190-APP-018-android-p01-error-visible.png>)

![Android · Paso 2 — corregido](<B2C-190 APP Evidencias/TC-B2C190-APP-018-android-p02-corregido.png>)

---

### TC-B2C190-APP-019 - Verificar que en la edición un dato inválido deja deshabilitado Guardar datos de tercero [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
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

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {RUT_TERCERO} = 11.111.111-1
- {NOMBRE_TERCERO} = María José
- {APELLIDO_TERCERO} = Pérez
- {TELEFONO_TERCERO} = +56 9 1234 5678
- {NOMBRE_CON_NUMEROS} = Mar1a#
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.
7. El usuario cambia el Nombre por {NOMBRE_CON_NUMEROS} y sale del campo.

**Resultado esperado**

Bajo Nombre se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Observación**

Android (dispositivo por ADB, v1.0.1): Requiere un tercero ya registrado, que no se puede crear: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — nombre invalido en edicion](<B2C-190 APP Evidencias/TC-B2C190-APP-019-android-p01-nombre-invalido-en-edicion.png>)

---

### TC-B2C190-APP-020 - Verificar que el tercero se mantiene al salir y volver a Mis Envíos en la misma sesión [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
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

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {RUT_TERCERO} = 11.111.111-1
- {NOMBRE_TERCERO} = María José
- {APELLIDO_TERCERO} = Pérez
- {TELEFONO_TERCERO} = +56 9 1234 5678
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario vuelve al carro y luego regresa a Mis Envíos con "Continuar con la entrega".

**Resultado esperado**

Mis Envíos sigue mostrando el resumen con {NOMBRE_TERCERO} y {TELEFONO_TERCERO} y la opción "Editar".

**Observación**

Android (dispositivo por ADB, v1.0.1): Requiere un tercero ya registrado, que no se puede crear: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — mis envios de vuelta](<B2C-190 APP Evidencias/TC-B2C190-APP-020-android-p01-mis-envios-de-vuelta.png>)

---

### TC-B2C190-APP-021 - Verificar que dejar Teléfono vacío muestra Ingrese un valor válido al salir del campo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-190.spec.ts |

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
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {RUT_TERCERO} = 11.111.111-1
- {NOMBRE_TERCERO} = María José
- {APELLIDO_TERCERO} = Pérez
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO} y Apellido {APELLIDO_TERCERO} con datos válidos.
8. El usuario entra al campo Teléfono y sale sin escribir nada.

**Resultado esperado**

Bajo Teléfono se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Observación**

Android (dispositivo por ADB, v1.0.1): Teléfono vacío (se entra y se sale). Errores visibles bajo: RUT, Teléfono. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-9», Nombre «Marcos», Teléfono «». Nota: el RUT de {RUT_TERCERO} también arrastra un error de dígito verificador en esta prueba (ver Bloqueado Data de 004).

**Evidencia**

![Android · Paso 1 — campo invalido](<B2C-190 APP Evidencias/TC-B2C190-APP-021-android-p01-campo-invalido.png>)

---

### TC-B2C190-APP-022 - Verificar que al generar la compra los datos del tercero se eliminan de la sesión [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
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

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = 11
- {MONTO_MINIMO_COMPRA} = 20000
- {DIRECCION_DESPACHO_001} = Casa
- {RUT_TERCERO} = 12345678-9
- {NOMBRE_TERCERO} = Marcos
- {APELLIDO_TERCERO} = Gonzáles
- {TELEFONO_TERCERO} = 56987654321
- {TARJETA_ONECLICK_001} = TBD
- {COMPRADOR_ONECLICK_USER} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos) con el resumen del tercero ({NOMBRE_TERCERO} y {TELEFONO_TERCERO}) y la opción "Editar".
5. El usuario toca "Ir a pagar".
6. El sistema carga la página "Mi Pago" (Checkout).
7. El usuario toca la tarjeta {TARJETA_ONECLICK_001} y toca "Pagar y finalizar".
8. El sistema procesa el pago con éxito y muestra la Confirmación del pedido.
9. Sin cerrar sesión, el usuario agrega {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} al carro y vuelve a Mis Envíos con "Continuar con la entrega".
10. El sistema carga la página "Datos de entrega" (Mis Envíos).
11. El usuario toca "¿Recibe alguien más?".

**Resultado esperado**

En la nueva compra Mis Envíos muestra la opción "¿Recibe alguien más?" sin el resumen del tercero ni "Editar", y el modal se abre con RUT, Nombre, Apellido y Teléfono vacíos.

**Observación**

Android (dispositivo por ADB, v1.0.1): Requiere registrar un tercero y luego pagar con OneClick; el tercero no se puede crear: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).

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
  "suite": "B2C-190 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-190 APP Test Cases.xlsx",
  "title": "B2C-190 (app Android) - Registrar un tercero que recibe o retira el pedido - Evidencias QA",
  "updated_at": "2026-11-03"
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
  ]
 },
 "results": [
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "La sección de datos de entrega muestra la opción \"¿Recibe alguien más?\" y es seleccionable.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-001",
   "name": "Verificar que con despacho sin tercero se muestra la opción Recibe alguien más [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Despacho a domicilio sin tercero: opción «¿Recibe alguien más?» visible: true; al tocarla abre el modal: true.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- No hay un tercero registrado en la sesión",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — envios",
     "file": "TC-B2C190-APP-001-android-p01-envios.png"
    },
    {
     "caption": "Android · Paso 1 — opcion recibe alguien mas",
     "file": "TC-B2C190-APP-001-android-p01-opcion-recibe-alguien-mas.png"
    },
    {
     "caption": "Android · Paso 2 — modal abierto",
     "file": "TC-B2C190-APP-001-android-p02-modal-abierto.png"
    },
    {
     "caption": "Android · Paso 2 — modal",
     "file": "TC-B2C190-APP-001-android-p02-modal.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El modal muestra X, título \"¿Recibe alguien más?\", texto \"Por tu seguridad, deberás completar todos los datos para validar la identidad de quien recibe.\", campos RUT*, Nombre*, Apellido* y Teléfono* \"+569\" vacíos (RUT con placeholder 12.345.678-9), el CTA \"Guardar datos de tercero\" deshabilitado y el botón \"Lo recibiré yo\".",
   "form_factor": "app",
   "id": "TC-B2C190-APP-003",
   "name": "Verificar que el modal Recibe alguien más muestra todos sus elementos [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Elementos ausentes: ninguno. Campos vacíos: RUT «», Nombre «», Apellido «», Teléfono «». Guardar habilitado: false. Placeholder del RUT: no expuesto por la accesibilidad (ver captura). Etiqueta del CTA en el app: «Guardar datos de terceros».",
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
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Llega un código OTP al correo del usuario comprador ({USER_AUTH_001}) y se muestra el modal \"Autenticación requerida\". El teléfono {TELEFONO_TERCERO} del tercero no recibe ningún SMS ni notificación.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-004",
   "name": "Verificar que con datos válidos Guardar datos de tercero envía el OTP al correo del comprador [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Con datos válidos el botón «Guardar datos de terceros» no se habilita: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO}, Apellido {APELLIDO_TERCERO} y Teléfono {TELEFONO_TERCERO}.\n8. El usuario toca \"Guardar datos de tercero\".\n9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal \"Autenticación requerida\".\n10. El usuario verifica que {TELEFONO_TERCERO} no recibe ningún SMS ni notificación.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {RUT_TERCERO} = 11.111.111-1\n- {NOMBRE_TERCERO} = María José\n- {APELLIDO_TERCERO} = Pérez\n- {TELEFONO_TERCERO} = +56 9 1234 5678\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El modal se cierra, Mis Envíos muestra {NOMBRE_TERCERO} y {TELEFONO_TERCERO} con la opción \"Editar\", ya no se muestra \"¿Recibe alguien más?\" y aparece el toast \"Los datos de quien recibirá tu compra se guardaron correctamente.\" (4 s + X).",
   "form_factor": "app",
   "id": "TC-B2C190-APP-005",
   "name": "Verificar que con OTP válido el tercero queda registrado y se muestra su resumen [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): No se puede llegar al OTP: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO}, Apellido {APELLIDO_TERCERO} y Teléfono {TELEFONO_TERCERO}.\n8. El usuario toca \"Guardar datos de tercero\".\n9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal \"Autenticación requerida\".\n10. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {RUT_TERCERO} = 11.111.111-1\n- {NOMBRE_TERCERO} = María José\n- {APELLIDO_TERCERO} = Pérez\n- {TELEFONO_TERCERO} = +56 9 1234 5678\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El modal muestra {RUT_TERCERO}, {NOMBRE_TERCERO}, {APELLIDO_TERCERO} y {TELEFONO_TERCERO} precargados.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-007",
   "name": "Verificar que Editar abre el modal con los datos del tercero precargados [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Requiere un tercero ya registrado, que no se puede crear: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {RUT_TERCERO} = 11.111.111-1\n- {NOMBRE_TERCERO} = María José\n- {APELLIDO_TERCERO} = Pérez\n- {TELEFONO_TERCERO} = +56 9 1234 5678\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "No se solicita OTP, el modal se cierra y Mis Envíos muestra {NOMBRE_TERCERO_2} y {TELEFONO_TERCERO_2}.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-008",
   "name": "Verificar que guardar la edición actualiza el tercero sin pedir OTP [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Requiere un tercero ya registrado, que no se puede crear: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.\n7. El usuario cambia el Nombre por {NOMBRE_TERCERO_2} y el Teléfono por {TELEFONO_TERCERO_2}.\n8. El usuario toca \"Guardar datos de tercero\".\n9. El sistema muestra un loader.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {RUT_TERCERO} = 11.111.111-1\n- {NOMBRE_TERCERO} = María José\n- {APELLIDO_TERCERO} = Pérez\n- {TELEFONO_TERCERO} = +56 9 1234 5678\n- {NOMBRE_TERCERO_2} = Ana\n- {TELEFONO_TERCERO_2} = +56 9 8765 4321\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El modal se cierra sin pedir OTP, el resumen del tercero desaparece, vuelve \"¿Recibe alguien más?\" y aparece el toast \"Los datos fueron eliminados correctamente\".",
   "form_factor": "app",
   "id": "TC-B2C190-APP-010",
   "name": "Verificar que Lo recibiré yo elimina al tercero sin OTP y muestra el toast [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Requiere un tercero ya registrado, que no se puede crear: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.\n7. El usuario toca \"Lo recibiré yo\".\n8. El sistema muestra un loader.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {RUT_TERCERO} = 11.111.111-1\n- {NOMBRE_TERCERO} = María José\n- {APELLIDO_TERCERO} = Pérez\n- {TELEFONO_TERCERO} = +56 9 1234 5678\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Bajo RUT se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-012",
   "name": "Verificar que un RUT con dígito verificador inválido muestra Ingrese un valor válido [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): RUT con DV inválido «12345678-0». Errores visibles bajo: RUT. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-0», Nombre «Marcos», Teléfono «87654321».",
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
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa {RUT_DV_INVALIDO} en RUT y sale del campo.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {RUT_TERCERO} = 11.111.111-1\n- {NOMBRE_TERCERO} = María José\n- {APELLIDO_TERCERO} = Pérez\n- {TELEFONO_TERCERO} = +56 9 1234 5678\n- {RUT_DV_INVALIDO} = 12.345.678-0\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Bajo RUT se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-013",
   "name": "Verificar que un RUT sin puntos ni guion muestra Ingrese un valor válido [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): El app autoformatea «123456789» ({RUT_SIN_FORMATO}) a «12.345.678-9», que coincide con el RUT de {RUT_TERCERO} y falla por dígito verificador inválido; no se puede aislar el formato. Falta en la data un RUT sin formato con dígito verificador válido para {RUT_SIN_FORMATO} (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — campo invalido",
     "file": "TC-B2C190-APP-013-android-p01-campo-invalido.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa {RUT_SIN_FORMATO} en RUT y sale del campo.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {RUT_TERCERO} = 11.111.111-1\n- {NOMBRE_TERCERO} = María José\n- {APELLIDO_TERCERO} = Pérez\n- {TELEFONO_TERCERO} = +56 9 1234 5678\n- {RUT_SIN_FORMATO} = 123456785\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Bajo Nombre se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-014",
   "name": "Verificar que un campo obligatorio vacío muestra Ingrese un valor válido al salir del campo [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Nombre vacío (se entra y se sale). Errores visibles bajo: RUT, Nombre. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-9», Nombre «», Teléfono «87654321». Nota: el RUT de {RUT_TERCERO} también arrastra un error de dígito verificador en esta prueba (ver Bloqueado Data de 004).",
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
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT, Apellido y Teléfono con datos válidos.\n8. El usuario entra al campo Nombre y sale sin escribir.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {RUT_TERCERO} = 11.111.111-1\n- {NOMBRE_TERCERO} = María José\n- {APELLIDO_TERCERO} = Pérez\n- {TELEFONO_TERCERO} = +56 9 1234 5678\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Bajo Nombre se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-015",
   "name": "Verificar que un nombre con números o símbolos muestra Ingrese un valor válido [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Nombre con número «Mar1a». Errores visibles bajo: RUT, Nombre. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-9», Nombre «Mar1a», Teléfono «87654321». Nota: el RUT de {RUT_TERCERO} también arrastra un error de dígito verificador en esta prueba (ver Bloqueado Data de 004).",
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
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa {NOMBRE_CON_NUMEROS} en Nombre y sale del campo.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {RUT_TERCERO} = 11.111.111-1\n- {NOMBRE_TERCERO} = María José\n- {APELLIDO_TERCERO} = Pérez\n- {TELEFONO_TERCERO} = +56 9 1234 5678\n- {NOMBRE_CON_NUMEROS} = Mar1a#\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Bajo Nombre se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-016",
   "name": "Verificar que un nombre de más de 30 caracteres muestra Ingrese un valor válido [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Esperado: bajo Nombre aparece «Ingrese un valor válido» al ingresar 31 caracteres («Gabriel Antonio Alberto Eduardo»). Obtenido: el campo recorta el texto a 30 caracteres («Gabriel Antonio Alberto Eduard») y no se muestra ningún error bajo Nombre. Bug: B2C-1438.",
   "observed": "Android (dispositivo por ADB, v1.0.1): Esperado: bajo Nombre aparece «Ingrese un valor válido» al ingresar 31 caracteres («Gabriel Antonio Alberto Eduardo»). Obtenido: el campo recorta el texto a 30 caracteres («Gabriel Antonio Alberto Eduard») y no se muestra ningún error bajo Nombre. Bug: B2C-1438.",
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
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa {NOMBRE_31_CARACTERES} en Nombre y sale del campo.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {RUT_TERCERO} = 11.111.111-1\n- {NOMBRE_TERCERO} = María José\n- {APELLIDO_TERCERO} = Pérez\n- {TELEFONO_TERCERO} = +56 9 1234 5678\n- {NOMBRE_31_CARACTERES} = Maria Jose Antonia Fernanda Gom (31 caracteres)\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Bajo Teléfono se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-017",
   "name": "Verificar que un teléfono sin 9 dígitos muestra Ingrese un valor válido [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Teléfono corto «5698765» (se escribe «8765» tras el +569 fijo). Errores visibles bajo: RUT, Teléfono. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-9», Nombre «Marcos», Teléfono «8765». Nota: el RUT de {RUT_TERCERO} también arrastra un error de dígito verificador en esta prueba (ver Bloqueado Data de 004).",
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
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa {TELEFONO_CORTO} en Teléfono y sale del campo.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {RUT_TERCERO} = 11.111.111-1\n- {NOMBRE_TERCERO} = María José\n- {APELLIDO_TERCERO} = Pérez\n- {TELEFONO_TERCERO} = +56 9 1234 5678\n- {TELEFONO_CORTO} = +56 9 1234 567 (8 dígitos)\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El mensaje de error desaparece y el CTA \"Guardar datos de tercero\" queda habilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-018",
   "name": "Verificar que al corregir el campo el error desaparece y se habilita el CTA [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Tras reemplazar el RUT inválido por {RUT_TERCERO} el error bajo RUT persiste y el botón sigue deshabilitado: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).",
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
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa Nombre, Apellido y Teléfono con datos válidos.\n8. El usuario ingresa {RUT_DV_INVALIDO} en RUT y sale del campo.\n9. El sistema muestra \"Ingrese un valor válido\" bajo RUT.\n10. El usuario reemplaza el RUT por {RUT_TERCERO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {RUT_TERCERO} = 11.111.111-1\n- {NOMBRE_TERCERO} = María José\n- {APELLIDO_TERCERO} = Pérez\n- {TELEFONO_TERCERO} = +56 9 1234 5678\n- {RUT_DV_INVALIDO} = 12.345.678-0\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Bajo Nombre se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-019",
   "name": "Verificar que en la edición un dato inválido deja deshabilitado Guardar datos de tercero [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Requiere un tercero ya registrado, que no se puede crear: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — nombre invalido en edicion",
     "file": "TC-B2C190-APP-019-android-p01-nombre-invalido-en-edicion.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.\n7. El usuario cambia el Nombre por {NOMBRE_CON_NUMEROS} y sale del campo.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {RUT_TERCERO} = 11.111.111-1\n- {NOMBRE_TERCERO} = María José\n- {APELLIDO_TERCERO} = Pérez\n- {TELEFONO_TERCERO} = +56 9 1234 5678\n- {NOMBRE_CON_NUMEROS} = Mar1a#\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Mis Envíos sigue mostrando el resumen con {NOMBRE_TERCERO} y {TELEFONO_TERCERO} y la opción \"Editar\".",
   "form_factor": "app",
   "id": "TC-B2C190-APP-020",
   "name": "Verificar que el tercero se mantiene al salir y volver a Mis Envíos en la misma sesión [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Requiere un tercero ya registrado, que no se puede crear: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — mis envios de vuelta",
     "file": "TC-B2C190-APP-020-android-p01-mis-envios-de-vuelta.png"
    }
   ],
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario vuelve al carro y luego regresa a Mis Envíos con \"Continuar con la entrega\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {RUT_TERCERO} = 11.111.111-1\n- {NOMBRE_TERCERO} = María José\n- {APELLIDO_TERCERO} = Pérez\n- {TELEFONO_TERCERO} = +56 9 1234 5678\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Bajo Teléfono se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-021",
   "name": "Verificar que dejar Teléfono vacío muestra Ingrese un valor válido al salir del campo [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Teléfono vacío (se entra y se sale). Errores visibles bajo: RUT, Teléfono. «Guardar datos de terceros» habilitado: false. Valores en los campos: RUT «12.345.678-9», Nombre «Marcos», Teléfono «». Nota: el RUT de {RUT_TERCERO} también arrastra un error de dígito verificador en esta prueba (ver Bloqueado Data de 004).",
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
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO} y Apellido {APELLIDO_TERCERO} con datos válidos.\n8. El usuario entra al campo Teléfono y sale sin escribir nada.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {RUT_TERCERO} = 11.111.111-1\n- {NOMBRE_TERCERO} = María José\n- {APELLIDO_TERCERO} = Pérez\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "En la nueva compra Mis Envíos muestra la opción \"¿Recibe alguien más?\" sin el resumen del tercero ni \"Editar\", y el modal se abre con RUT, Nombre, Apellido y Teléfono vacíos.",
   "form_factor": "app",
   "id": "TC-B2C190-APP-022",
   "name": "Verificar que al generar la compra los datos del tercero se eliminan de la sesión [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Requiere registrar un tercero y luego pagar con OneClick; el tercero no se puede crear: el RUT {RUT_TERCERO} (12345678-9) no tiene un dígito verificador válido (el de 12.345.678 es 5): el app marca «Ingrese un valor válido» bajo RUT y deja «Guardar datos de terceros» deshabilitado, por lo que no se puede registrar al tercero. Falta en la data un RUT con dígito verificador válido para {RUT_TERCERO} (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_ONECLICK_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001} y una ventana de entrega seleccionada\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}\n- La cuenta ya aceptó los Términos y Condiciones en una visita previa al Checkout\n- La cuenta tiene enrolada la tarjeta {TARJETA_ONECLICK_001}",
   "spec": "tests-app/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos) con el resumen del tercero ({NOMBRE_TERCERO} y {TELEFONO_TERCERO}) y la opción \"Editar\".\n5. El usuario toca \"Ir a pagar\".\n6. El sistema carga la página \"Mi Pago\" (Checkout).\n7. El usuario toca la tarjeta {TARJETA_ONECLICK_001} y toca \"Pagar y finalizar\".\n8. El sistema procesa el pago con éxito y muestra la Confirmación del pedido.\n9. Sin cerrar sesión, el usuario agrega {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} al carro y vuelve a Mis Envíos con \"Continuar con la entrega\".\n10. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n11. El usuario toca \"¿Recibe alguien más?\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = 11\n- {MONTO_MINIMO_COMPRA} = 20000\n- {DIRECCION_DESPACHO_001} = Casa\n- {RUT_TERCERO} = 12345678-9\n- {NOMBRE_TERCERO} = Marcos\n- {APELLIDO_TERCERO} = Gonzáles\n- {TELEFONO_TERCERO} = 56987654321\n- {TARJETA_ONECLICK_001} = TBD\n- {COMPRADOR_ONECLICK_USER} = TBD"
  }
 ]
}
-->
