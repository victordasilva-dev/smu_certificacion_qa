# ¿Recibe alguien más? (tercero que recibe)

| Campo | Valor |
|---|---|
| Suite | B2C-190 |
| Última actualización | 2026-10-19 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-190 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 24 |
| Aprobado | 16 |
| Rechazado | 4 |
| **Total** | **44** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-19 | 44 | TC-B2C190-D-001, TC-B2C190-D-002, TC-B2C190-D-003, TC-B2C190-D-004, TC-B2C190-D-005, TC-B2C190-D-006, TC-B2C190-D-007, TC-B2C190-D-008, TC-B2C190-D-009, TC-B2C190-D-010, TC-B2C190-D-011, TC-B2C190-D-012, TC-B2C190-D-013, TC-B2C190-D-014, TC-B2C190-D-015, TC-B2C190-D-016, TC-B2C190-D-017, TC-B2C190-D-018, TC-B2C190-D-019, TC-B2C190-D-020, TC-B2C190-D-021, TC-B2C190-D-022, TC-B2C190-M-001, TC-B2C190-M-002, TC-B2C190-M-003, TC-B2C190-M-004, TC-B2C190-M-005, TC-B2C190-M-006, TC-B2C190-M-007, TC-B2C190-M-008, TC-B2C190-M-009, TC-B2C190-M-010, TC-B2C190-M-011, TC-B2C190-M-012, TC-B2C190-M-013, TC-B2C190-M-014, TC-B2C190-M-015, TC-B2C190-M-016, TC-B2C190-M-017, TC-B2C190-M-018, TC-B2C190-M-019, TC-B2C190-M-020, TC-B2C190-M-021, TC-B2C190-M-022 |

## Detalle por caso de prueba

### TC-B2C190-D-001 - Verificar que con despacho sin tercero se muestra la opción Recibe alguien más [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- No hay un tercero registrado en la sesión

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).

**Resultado esperado**

La sección de datos de entrega muestra la opción "¿Recibe alguien más?" y es seleccionable.

**Resultado obtenido**

Datos de entrega (despacho a Calle Uno 23, La Florida) muestra '¿Recibe alguien más?' y al tocarla abre su modal.

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-D-001-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 4 — datos de entrega con recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-D-001-p04-datos-de-entrega-con-recibe-alguien-mas.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-D-001.png>)

---

### TC-B2C190-D-002 - Verificar que con retiro en tienda sin tercero se muestra la opción Recibe alguien más [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Retiro en tienda configurado con {TIENDA_RETIRO_001}
- No hay un tercero registrado en la sesión

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).

**Resultado esperado**

La sección de datos de entrega muestra la opción "¿Recibe alguien más?" y es seleccionable.

**Resultado obtenido**

Con retiro en Unimarc Las Condes, Datos de entrega muestra '¿Recibe alguien más?' y abre su modal. Al terminar se restauró el despacho a Calle Uno 23.

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-D-002-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 4 — datos de entrega con retiro y recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-D-002-p04-datos-de-entrega-con-retiro-y-recibe-alguien-mas.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-D-002.png>)

---

### TC-B2C190-D-003 - Verificar que el modal Recibe alguien más muestra todos sus elementos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".

**Resultado esperado**

El modal muestra X, título "¿Recibe alguien más?", texto "Por tu seguridad, deberás completar todos los datos para validar la identidad de quien recibe.", campos RUT*, Nombre*, Apellido* y Teléfono* "+569" vacíos (RUT con placeholder 12.345.678-9), el CTA "Guardar datos de tercero" deshabilitado y el botón "Lo recibiré yo".

**Resultado obtenido**

Esperado: CTA 'Guardar datos de tercero' deshabilitado y botón 'Lo recibiré yo'. Obtenido: el CTA se llama 'Confirmar' (deshabilitado, eso sí cumple) y no existe el botón 'Lo recibiré yo'. El resto coincide: X, título, texto de seguridad, campos RUT*, Nombre*, Apellido* y Teléfono* vacíos, RUT con placeholder 12.345.678-9 y prefijo +569. tests/B2C-190.spec.ts (D/M-003).

**Observación**

Esperado: CTA 'Guardar datos de tercero' deshabilitado y botón 'Lo recibiré yo'. Obtenido: el CTA se llama 'Confirmar' (deshabilitado, eso sí cumple) y no existe el botón 'Lo recibiré yo'. El resto coincide: X, título, texto de seguridad, campos RUT*, Nombre*, Apellido* y Teléfono* vacíos, RUT con placeholder 12.345.678-9 y prefijo +569. tests/B2C-190.spec.ts (D/M-003).

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-D-003-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 6 — modal recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-D-003-p06-modal-recibe-alguien-mas.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-D-003.png>)

---

### TC-B2C190-D-004 - Verificar que con datos válidos Guardar datos de tercero envía el OTP al correo del comprador [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO}, Apellido {APELLIDO_TERCERO} y Teléfono {TELEFONO_TERCERO}.
8. El usuario hace clic en "Guardar datos de tercero".
9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal "Autenticación requerida".
10. El usuario verifica que {TELEFONO_TERCERO} no recibe ningún SMS ni notificación.

**Resultado esperado**

Llega un código OTP al correo del usuario comprador ({USER_AUTH_001}) y se muestra el modal "Autenticación requerida". El teléfono {TELEFONO_TERCERO} del tercero no recibe ningún SMS ni notificación.

**Resultado obtenido**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

**Observación**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

---

### TC-B2C190-D-005 - Verificar que con OTP válido el tercero queda registrado y se muestra su resumen [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO}, Apellido {APELLIDO_TERCERO} y Teléfono {TELEFONO_TERCERO}.
8. El usuario hace clic en "Guardar datos de tercero".
9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal "Autenticación requerida".
10. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

El modal se cierra, Mis Envíos muestra {NOMBRE_TERCERO} y {TELEFONO_TERCERO} con la opción "Editar", ya no se muestra "¿Recibe alguien más?" y aparece el toast "Los datos de quien recibirá tu compra se guardaron correctamente." (4 s + X).

**Resultado obtenido**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

**Observación**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

---

### TC-B2C190-D-006 - Verificar que un error al guardar el tercero muestra el banner ME-038 y no lo registra [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- DevTools abierto con bloqueo de la request {TERCERO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{TERCERO_API_ENDPOINT} = None

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO}, Apellido {APELLIDO_TERCERO} y Teléfono {TELEFONO_TERCERO}.
8. El usuario hace clic en "Guardar datos de tercero".
9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal "Autenticación requerida".
10. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

El modal se cierra, el tercero no queda registrado, "Datos de entrega" muestra el banner "No pudimos guardar los datos de quien recibirá tu compra. Inténtalo nuevamente." (ME-038) y "¿Recibe alguien más?" sigue visible.

**Resultado obtenido**

Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.

**Observación**

Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.

---

### TC-B2C190-D-007 - Verificar que Editar abre el modal con los datos del tercero precargados [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.

**Resultado esperado**

El modal muestra {RUT_TERCERO}, {NOMBRE_TERCERO}, {APELLIDO_TERCERO} y {TELEFONO_TERCERO} precargados.

**Resultado obtenido**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

**Observación**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

---

### TC-B2C190-D-008 - Verificar que guardar la edición actualiza el tercero sin pedir OTP [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO_2} = Apolinario

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO_2} = 56987654322

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.
7. El usuario cambia el Nombre por {NOMBRE_TERCERO_2} y el Teléfono por {TELEFONO_TERCERO_2}.
8. El usuario hace clic en "Guardar datos de tercero".
9. El sistema muestra un loader.

**Resultado esperado**

No se solicita OTP, el modal se cierra y Mis Envíos muestra {NOMBRE_TERCERO_2} y {TELEFONO_TERCERO_2}.

**Resultado obtenido**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

**Observación**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

---

### TC-B2C190-D-009 - Verificar que un error al actualizar el tercero muestra ME-039 y conserva los datos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}
- DevTools abierto con bloqueo de la request {TERCERO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO_2} = Apolinario

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{TERCERO_API_ENDPOINT} = None

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.
7. El usuario cambia el Nombre por {NOMBRE_TERCERO_2}.
8. El usuario hace clic en "Guardar datos de tercero".

**Resultado esperado**

El modal se cierra, se muestra "No pudimos actualizar los datos de quien recibirá tu compra. Inténtalo nuevamente." (ME-039) con X, y la tarjeta mantiene {NOMBRE_TERCERO} con "Editar" disponible.

**Resultado obtenido**

Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.

**Observación**

Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.

---

### TC-B2C190-D-010 - Verificar que Lo recibiré yo elimina al tercero sin OTP y muestra el toast [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.
7. El usuario hace clic en "Lo recibiré yo".
8. El sistema muestra un loader.

**Resultado esperado**

El modal se cierra sin pedir OTP, el resumen del tercero desaparece, vuelve "¿Recibe alguien más?" y aparece el toast "Los datos fueron eliminados correctamente".

**Resultado obtenido**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

**Observación**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

---

### TC-B2C190-D-011 - Verificar que un error al eliminar el tercero muestra ME-040, cierra el modal y conserva los datos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}
- DevTools abierto con bloqueo de la request {TERCERO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{TERCERO_API_ENDPOINT} = None

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.
7. El usuario hace clic en "Lo recibiré yo".

**Resultado esperado**

Se muestra "No pudimos actualizar los datos de quién recibirá tu compra. Intentalo nuevamente" (ME-040), el modal se cierra y Mis Envíos mantiene {NOMBRE_TERCERO} y {TELEFONO_TERCERO}.

**Resultado obtenido**

Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.

**Observación**

Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.

---

### TC-B2C190-D-012 - Verificar que un RUT con dígito verificador inválido muestra Ingrese un valor válido [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_DV_INVALIDO} = 12345678-0

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa {RUT_DV_INVALIDO} en RUT y sale del campo.

**Resultado esperado**

Bajo RUT se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Con {RUT_DV_INVALIDO} (12345678-0) bajo RUT se muestra 'Ingrese un valor válido' y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Observación**

Con {RUT_DV_INVALIDO} (12345678-0) bajo RUT se muestra 'Ingrese un valor válido' y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-D-012-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 6 — modal recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-D-012-p06-modal-recibe-alguien-mas.png>)

![Paso 8 — campo rut tras salir](<B2C-190 Evidencias/TC-B2C190-D-012-p08-campo-rut-tras-salir.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-D-012.png>)

---

### TC-B2C190-D-013 - Verificar que un RUT sin puntos ni guion muestra Ingrese un valor válido [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_SIN_FORMATO} = 123456789

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa {RUT_SIN_FORMATO} en RUT y sale del campo.

**Resultado esperado**

Bajo RUT se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Con {RUT_SIN_FORMATO} (123456789) el campo lo autoformatea a 12.345.678-9 y muestra 'Ingrese un valor válido' bajo RUT; el CTA queda deshabilitado. El error aparece porque ese número tiene el dígito verificador incorrecto, no por la falta de puntos y guion (el campo los agrega solo). Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Observación**

Con {RUT_SIN_FORMATO} (123456789) el campo lo autoformatea a 12.345.678-9 y muestra 'Ingrese un valor válido' bajo RUT; el CTA queda deshabilitado. El error aparece porque ese número tiene el dígito verificador incorrecto, no por la falta de puntos y guion (el campo los agrega solo). Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-D-013-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 6 — modal recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-D-013-p06-modal-recibe-alguien-mas.png>)

![Paso 8 — campo rut tras salir](<B2C-190 Evidencias/TC-B2C190-D-013-p08-campo-rut-tras-salir.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-D-013.png>)

---

### TC-B2C190-D-014 - Verificar que un campo obligatorio vacío muestra Ingrese un valor válido al salir del campo [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa RUT, Apellido y Teléfono con datos válidos.
8. El usuario entra al campo Nombre y sale sin escribir.

**Resultado esperado**

Bajo Nombre se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Al entrar y salir de Nombre sin escribir se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. El RUT 'válido' que usa la fila ({RUT_TERCERO}) también queda marcado inválido por su dígito verificador. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Observación**

Al entrar y salir de Nombre sin escribir se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. El RUT 'válido' que usa la fila ({RUT_TERCERO}) también queda marcado inválido por su dígito verificador. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-D-014-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 6 — modal recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-D-014-p06-modal-recibe-alguien-mas.png>)

![Paso 8 — campo nombre tras salir](<B2C-190 Evidencias/TC-B2C190-D-014-p08-campo-nombre-tras-salir.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-D-014.png>)

---

### TC-B2C190-D-015 - Verificar que un nombre con números o símbolos muestra Ingrese un valor válido [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_CON_NUMEROS} = Mar1a

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa {NOMBRE_CON_NUMEROS} en Nombre y sale del campo.

**Resultado esperado**

Bajo Nombre se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Con {NOMBRE_CON_NUMEROS} ('Mar1a') se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Observación**

Con {NOMBRE_CON_NUMEROS} ('Mar1a') se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-D-015-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 6 — modal recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-D-015-p06-modal-recibe-alguien-mas.png>)

![Paso 8 — campo nombre tras salir](<B2C-190 Evidencias/TC-B2C190-D-015-p08-campo-nombre-tras-salir.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-D-015.png>)

---

### TC-B2C190-D-016 - Verificar que un nombre de más de 30 caracteres muestra Ingrese un valor válido [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_31_CARACTERES} = Gabriel Antonio Alberto Eduardo

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa {NOMBRE_31_CARACTERES} en Nombre y sale del campo.

**Resultado esperado**

Bajo Nombre se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Esperado: con {NOMBRE_31_CARACTERES} ('Gabriel Antonio Alberto Eduardo', 31 caracteres) se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. Obtenido: el campo corta la entrada a 30 caracteres ('Gabriel Antonio Alberto Eduard', maxlength 30) y no muestra ningún error. tests/B2C-190.spec.ts (D/M-016).

**Observación**

Esperado: con {NOMBRE_31_CARACTERES} ('Gabriel Antonio Alberto Eduardo', 31 caracteres) se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. Obtenido: el campo corta la entrada a 30 caracteres ('Gabriel Antonio Alberto Eduard', maxlength 30) y no muestra ningún error. tests/B2C-190.spec.ts (D/M-016).

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-D-016-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 6 — modal recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-D-016-p06-modal-recibe-alguien-mas.png>)

![Paso 8 — campo nombre tras salir](<B2C-190 Evidencias/TC-B2C190-D-016-p08-campo-nombre-tras-salir.png>)

![Estado al fallar la aserción](<B2C-190 Evidencias/TC-B2C190-D-016.png>)

---

### TC-B2C190-D-017 - Verificar que un teléfono sin 9 dígitos muestra Ingrese un valor válido [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_CORTO} = 5698765

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa {TELEFONO_CORTO} en Teléfono y sale del campo.

**Resultado esperado**

Bajo Teléfono se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Con {TELEFONO_CORTO} ('5698765', 7 dígitos) se muestra 'Ingrese un valor válido' bajo Teléfono y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Observación**

Con {TELEFONO_CORTO} ('5698765', 7 dígitos) se muestra 'Ingrese un valor válido' bajo Teléfono y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-D-017-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 6 — modal recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-D-017-p06-modal-recibe-alguien-mas.png>)

![Paso 8 — campo telefono tras salir](<B2C-190 Evidencias/TC-B2C190-D-017-p08-campo-telefono-tras-salir.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-D-017.png>)

---

### TC-B2C190-D-018 - Verificar que al corregir el campo el error desaparece y se habilita el CTA [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_DV_INVALIDO} = 12345678-0

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa Nombre, Apellido y Teléfono con datos válidos.
8. El usuario ingresa {RUT_DV_INVALIDO} en RUT y sale del campo.
9. El sistema muestra "Ingrese un valor válido" bajo RUT.
10. El usuario reemplaza el RUT por {RUT_TERCERO}.

**Resultado esperado**

El mensaje de error desaparece y el CTA "Guardar datos de tercero" queda habilitado.

**Resultado obtenido**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

**Observación**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

---

### TC-B2C190-D-019 - Verificar que en la edición un dato inválido deja deshabilitado Guardar datos de tercero [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_CON_NUMEROS} = Mar1a

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.
7. El usuario cambia el Nombre por {NOMBRE_CON_NUMEROS} y sale del campo.

**Resultado esperado**

Bajo Nombre se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

**Observación**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

---

### TC-B2C190-D-020 - Verificar que el tercero se mantiene al salir y volver a Mis Envíos en la misma sesión [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario vuelve al carro y luego regresa a Mis Envíos con "Continuar con la entrega".

**Resultado esperado**

Mis Envíos sigue mostrando el resumen con {NOMBRE_TERCERO} y {TELEFONO_TERCERO} y la opción "Editar".

**Resultado obtenido**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

**Observación**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

---

### TC-B2C190-D-021 - Verificar que dejar Teléfono vacío muestra Ingrese un valor válido al salir del campo [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO} y Apellido {APELLIDO_TERCERO} con datos válidos.
8. El usuario entra al campo Teléfono y sale sin escribir nada.

**Resultado esperado**

Bajo Teléfono se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Al entrar y salir de Teléfono sin escribir se muestra 'Ingrese un valor válido' bajo Teléfono y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Observación**

Al entrar y salir de Teléfono sin escribir se muestra 'Ingrese un valor válido' bajo Teléfono y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-D-021-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 6 — modal recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-D-021-p06-modal-recibe-alguien-mas.png>)

![Paso 8 — campo telefono tras salir](<B2C-190 Evidencias/TC-B2C190-D-021-p08-campo-telefono-tras-salir.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-D-021.png>)

---

### TC-B2C190-M-001 - Verificar que con despacho sin tercero se muestra la opción Recibe alguien más [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- No hay un tercero registrado en la sesión

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).

**Resultado esperado**

La sección de datos de entrega muestra la opción "¿Recibe alguien más?" y es seleccionable.

**Resultado obtenido**

Datos de entrega (despacho a Calle Uno 23, La Florida) muestra '¿Recibe alguien más?' y al tocarla abre su modal.

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-M-001-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 4 — datos de entrega con recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-M-001-p04-datos-de-entrega-con-recibe-alguien-mas.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-M-001.png>)

---

### TC-B2C190-M-002 - Verificar que con retiro en tienda sin tercero se muestra la opción Recibe alguien más [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Retiro en tienda configurado con {TIENDA_RETIRO_001}
- No hay un tercero registrado en la sesión

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).

**Resultado esperado**

La sección de datos de entrega muestra la opción "¿Recibe alguien más?" y es seleccionable.

**Resultado obtenido**

Con retiro en Unimarc Las Condes, Datos de entrega muestra '¿Recibe alguien más?' y abre su modal. Al terminar se restauró el despacho a Calle Uno 23.

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-M-002-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 4 — datos de entrega con retiro y recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-M-002-p04-datos-de-entrega-con-retiro-y-recibe-alguien-mas.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-M-002.png>)

---

### TC-B2C190-M-003 - Verificar que el modal Recibe alguien más muestra todos sus elementos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".

**Resultado esperado**

El modal muestra X, título "¿Recibe alguien más?", texto "Por tu seguridad, deberás completar todos los datos para validar la identidad de quien recibe.", campos RUT*, Nombre*, Apellido* y Teléfono* "+569" vacíos (RUT con placeholder 12.345.678-9), el CTA "Guardar datos de tercero" deshabilitado y el botón "Lo recibiré yo".

**Resultado obtenido**

Esperado: CTA 'Guardar datos de tercero' deshabilitado y botón 'Lo recibiré yo'. Obtenido: el CTA se llama 'Confirmar' (deshabilitado, eso sí cumple) y no existe el botón 'Lo recibiré yo'. El resto coincide: X, título, texto de seguridad, campos RUT*, Nombre*, Apellido* y Teléfono* vacíos, RUT con placeholder 12.345.678-9 y prefijo +569. tests/B2C-190.spec.ts (D/M-003).

**Observación**

Esperado: CTA 'Guardar datos de tercero' deshabilitado y botón 'Lo recibiré yo'. Obtenido: el CTA se llama 'Confirmar' (deshabilitado, eso sí cumple) y no existe el botón 'Lo recibiré yo'. El resto coincide: X, título, texto de seguridad, campos RUT*, Nombre*, Apellido* y Teléfono* vacíos, RUT con placeholder 12.345.678-9 y prefijo +569. tests/B2C-190.spec.ts (D/M-003).

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-M-003-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 6 — modal recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-M-003-p06-modal-recibe-alguien-mas.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-M-003.png>)

---

### TC-B2C190-M-004 - Verificar que con datos válidos Guardar datos de tercero envía el OTP al correo del comprador [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
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

**Resultado obtenido**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

**Observación**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

---

### TC-B2C190-M-005 - Verificar que con OTP válido el tercero queda registrado y se muestra su resumen [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
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

**Resultado obtenido**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

**Observación**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

---

### TC-B2C190-M-006 - Verificar que un error al guardar el tercero muestra el banner ME-038 y no lo registra [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- DevTools abierto con bloqueo de la request {TERCERO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{TERCERO_API_ENDPOINT} = None

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
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

El modal se cierra, el tercero no queda registrado, "Datos de entrega" muestra el banner "No pudimos guardar los datos de quien recibirá tu compra. Inténtalo nuevamente." (ME-038) y "¿Recibe alguien más?" sigue visible.

**Resultado obtenido**

Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.

**Observación**

Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.

---

### TC-B2C190-M-007 - Verificar que Editar abre el modal con los datos del tercero precargados [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.

**Resultado esperado**

El modal muestra {RUT_TERCERO}, {NOMBRE_TERCERO}, {APELLIDO_TERCERO} y {TELEFONO_TERCERO} precargados.

**Resultado obtenido**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

**Observación**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

---

### TC-B2C190-M-008 - Verificar que guardar la edición actualiza el tercero sin pedir OTP [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO_2} = Apolinario

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO_2} = 56987654322

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
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

**Resultado obtenido**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

**Observación**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

---

### TC-B2C190-M-009 - Verificar que un error al actualizar el tercero muestra ME-039 y conserva los datos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}
- DevTools abierto con bloqueo de la request {TERCERO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO_2} = Apolinario

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{TERCERO_API_ENDPOINT} = None

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.
7. El usuario cambia el Nombre por {NOMBRE_TERCERO_2}.
8. El usuario toca "Guardar datos de tercero".

**Resultado esperado**

El modal se cierra, se muestra "No pudimos actualizar los datos de quien recibirá tu compra. Inténtalo nuevamente." (ME-039) con X, y la tarjeta mantiene {NOMBRE_TERCERO} con "Editar" disponible.

**Resultado obtenido**

Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.

**Observación**

Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.

---

### TC-B2C190-M-010 - Verificar que Lo recibiré yo elimina al tercero sin OTP y muestra el toast [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
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

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

**Observación**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

---

### TC-B2C190-M-011 - Verificar que un error al eliminar el tercero muestra ME-040, cierra el modal y conserva los datos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}
- DevTools abierto con bloqueo de la request {TERCERO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{TERCERO_API_ENDPOINT} = None

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.
7. El usuario toca "Lo recibiré yo".

**Resultado esperado**

Se muestra "No pudimos actualizar los datos de quién recibirá tu compra. Intentalo nuevamente" (ME-040), el modal se cierra y Mis Envíos mantiene {NOMBRE_TERCERO} y {TELEFONO_TERCERO}.

**Resultado obtenido**

Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.

**Observación**

Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.

---

### TC-B2C190-M-012 - Verificar que un RUT con dígito verificador inválido muestra Ingrese un valor válido [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_DV_INVALIDO} = 12345678-0

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa {RUT_DV_INVALIDO} en RUT y sale del campo.

**Resultado esperado**

Bajo RUT se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Con {RUT_DV_INVALIDO} (12345678-0) bajo RUT se muestra 'Ingrese un valor válido' y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Observación**

Con {RUT_DV_INVALIDO} (12345678-0) bajo RUT se muestra 'Ingrese un valor válido' y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-M-012-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 6 — modal recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-M-012-p06-modal-recibe-alguien-mas.png>)

![Paso 8 — campo rut tras salir](<B2C-190 Evidencias/TC-B2C190-M-012-p08-campo-rut-tras-salir.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-M-012.png>)

---

### TC-B2C190-M-013 - Verificar que un RUT sin puntos ni guion muestra Ingrese un valor válido [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_SIN_FORMATO} = 123456789

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa {RUT_SIN_FORMATO} en RUT y sale del campo.

**Resultado esperado**

Bajo RUT se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Con {RUT_SIN_FORMATO} (123456789) el campo lo autoformatea a 12.345.678-9 y muestra 'Ingrese un valor válido' bajo RUT; el CTA queda deshabilitado. El error aparece porque ese número tiene el dígito verificador incorrecto, no por la falta de puntos y guion (el campo los agrega solo). Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Observación**

Con {RUT_SIN_FORMATO} (123456789) el campo lo autoformatea a 12.345.678-9 y muestra 'Ingrese un valor válido' bajo RUT; el CTA queda deshabilitado. El error aparece porque ese número tiene el dígito verificador incorrecto, no por la falta de puntos y guion (el campo los agrega solo). Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-M-013-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 6 — modal recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-M-013-p06-modal-recibe-alguien-mas.png>)

![Paso 8 — campo rut tras salir](<B2C-190 Evidencias/TC-B2C190-M-013-p08-campo-rut-tras-salir.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-M-013.png>)

---

### TC-B2C190-M-014 - Verificar que un campo obligatorio vacío muestra Ingrese un valor válido al salir del campo [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
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

Al entrar y salir de Nombre sin escribir se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. El RUT 'válido' que usa la fila ({RUT_TERCERO}) también queda marcado inválido por su dígito verificador. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Observación**

Al entrar y salir de Nombre sin escribir se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. El RUT 'válido' que usa la fila ({RUT_TERCERO}) también queda marcado inválido por su dígito verificador. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-M-014-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 6 — modal recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-M-014-p06-modal-recibe-alguien-mas.png>)

![Paso 8 — campo nombre tras salir](<B2C-190 Evidencias/TC-B2C190-M-014-p08-campo-nombre-tras-salir.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-M-014.png>)

---

### TC-B2C190-M-015 - Verificar que un nombre con números o símbolos muestra Ingrese un valor válido [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_CON_NUMEROS} = Mar1a

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa {NOMBRE_CON_NUMEROS} en Nombre y sale del campo.

**Resultado esperado**

Bajo Nombre se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Con {NOMBRE_CON_NUMEROS} ('Mar1a') se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Observación**

Con {NOMBRE_CON_NUMEROS} ('Mar1a') se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-M-015-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 6 — modal recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-M-015-p06-modal-recibe-alguien-mas.png>)

![Paso 8 — campo nombre tras salir](<B2C-190 Evidencias/TC-B2C190-M-015-p08-campo-nombre-tras-salir.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-M-015.png>)

---

### TC-B2C190-M-016 - Verificar que un nombre de más de 30 caracteres muestra Ingrese un valor válido [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_31_CARACTERES} = Gabriel Antonio Alberto Eduardo

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
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

Esperado: con {NOMBRE_31_CARACTERES} ('Gabriel Antonio Alberto Eduardo', 31 caracteres) se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. Obtenido: el campo corta la entrada a 30 caracteres ('Gabriel Antonio Alberto Eduard', maxlength 30) y no muestra ningún error. tests/B2C-190.spec.ts (D/M-016).

**Observación**

Esperado: con {NOMBRE_31_CARACTERES} ('Gabriel Antonio Alberto Eduardo', 31 caracteres) se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. Obtenido: el campo corta la entrada a 30 caracteres ('Gabriel Antonio Alberto Eduard', maxlength 30) y no muestra ningún error. tests/B2C-190.spec.ts (D/M-016).

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-M-016-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 6 — modal recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-M-016-p06-modal-recibe-alguien-mas.png>)

![Paso 8 — campo nombre tras salir](<B2C-190 Evidencias/TC-B2C190-M-016-p08-campo-nombre-tras-salir.png>)

![Estado al fallar la aserción](<B2C-190 Evidencias/TC-B2C190-M-016.png>)

---

### TC-B2C190-M-017 - Verificar que un teléfono sin 9 dígitos muestra Ingrese un valor válido [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_CORTO} = 5698765

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa los demás campos con datos válidos.
8. El usuario ingresa {TELEFONO_CORTO} en Teléfono y sale del campo.

**Resultado esperado**

Bajo Teléfono se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Con {TELEFONO_CORTO} ('5698765', 7 dígitos) se muestra 'Ingrese un valor válido' bajo Teléfono y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Observación**

Con {TELEFONO_CORTO} ('5698765', 7 dígitos) se muestra 'Ingrese un valor válido' bajo Teléfono y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-M-017-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 6 — modal recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-M-017-p06-modal-recibe-alguien-mas.png>)

![Paso 8 — campo telefono tras salir](<B2C-190 Evidencias/TC-B2C190-M-017-p08-campo-telefono-tras-salir.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-M-017.png>)

---

### TC-B2C190-M-018 - Verificar que al corregir el campo el error desaparece y se habilita el CTA [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_DV_INVALIDO} = 12345678-0

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
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

**Resultado obtenido**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

**Observación**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

---

### TC-B2C190-M-019 - Verificar que en la edición un dato inválido deja deshabilitado Guardar datos de tercero [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_CON_NUMEROS} = Mar1a

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "Editar" en el resumen del tercero.
6. El sistema abre el modal de edición con los datos precargados.
7. El usuario cambia el Nombre por {NOMBRE_CON_NUMEROS} y sale del campo.

**Resultado esperado**

Bajo Nombre se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

**Observación**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

---

### TC-B2C190-M-020 - Verificar que el tercero se mantiene al salir y volver a Mis Envíos en la misma sesión [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario vuelve al carro y luego regresa a Mis Envíos con "Continuar con la entrega".

**Resultado esperado**

Mis Envíos sigue mostrando el resumen con {NOMBRE_TERCERO} y {TELEFONO_TERCERO} y la opción "Editar".

**Resultado obtenido**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

**Observación**

Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).

---

### TC-B2C190-M-021 - Verificar que dejar Teléfono vacío muestra Ingrese un valor válido al salir del campo [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "¿Recibe alguien más?".
6. El sistema abre el modal "¿Recibe alguien más?".
7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO} y Apellido {APELLIDO_TERCERO} con datos válidos.
8. El usuario entra al campo Teléfono y sale sin escribir nada.

**Resultado esperado**

Bajo Teléfono se muestra "Ingrese un valor válido" y el CTA "Guardar datos de tercero" queda deshabilitado.

**Resultado obtenido**

Al entrar y salir de Teléfono sin escribir se muestra 'Ingrese un valor válido' bajo Teléfono y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Observación**

Al entrar y salir de Teléfono sin escribir se muestra 'Ingrese un valor válido' bajo Teléfono y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-190 Evidencias/TC-B2C190-M-021-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 6 — modal recibe alguien mas](<B2C-190 Evidencias/TC-B2C190-M-021-p06-modal-recibe-alguien-mas.png>)

![Paso 8 — campo telefono tras salir](<B2C-190 Evidencias/TC-B2C190-M-021-p08-campo-telefono-tras-salir.png>)

![Estado final](<B2C-190 Evidencias/TC-B2C190-M-021.png>)

---

### TC-B2C190-D-022 - Verificar que al generar la compra los datos del tercero se eliminan de la sesión [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_ONECLICK_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001} y una ventana de entrega seleccionada
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}
- La cuenta ya aceptó los Términos y Condiciones en una visita previa al Checkout
- La cuenta tiene enrolada la tarjeta {TARJETA_ONECLICK_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_ONECLICK_PASSWORD} = (contraseña)

{COMPRADOR_ONECLICK_USER} = daunuruco+oneclick@avatar-global.com

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TARJETA_ONECLICK_001} = None

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos) con el resumen del tercero ({NOMBRE_TERCERO} y {TELEFONO_TERCERO}) y la opción "Editar".
5. El usuario hace clic en "Ir a pagar".
6. El sistema carga la página "Mi Pago" (Checkout).
7. El usuario hace clic en la tarjeta {TARJETA_ONECLICK_001} y hace clic en "Pagar y finalizar".
8. El sistema procesa el pago con éxito y muestra la Confirmación del pedido.
9. Sin cerrar sesión, el usuario agrega {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} al carro y vuelve a Mis Envíos con "Continuar con la entrega".
10. El sistema carga la página "Datos de entrega" (Mis Envíos).
11. El usuario hace clic en "¿Recibe alguien más?".

**Resultado esperado**

En la nueva compra Mis Envíos muestra la opción "¿Recibe alguien más?" sin el resumen del tercero ni "Editar", y el modal se abre con RUT, Nombre, Apellido y Teléfono vacíos.

**Resultado obtenido**

Causa: {TARJETA_ONECLICK_001} no tiene fila en el Excel de data, y además se necesita registrar un tercero válido ({RUT_TERCERO} tiene el dígito verificador incorrecto). Acción: cargar la tarjeta OneClick de prueba y un RUT de tercero válido.

**Observación**

Causa: {TARJETA_ONECLICK_001} no tiene fila en el Excel de data, y además se necesita registrar un tercero válido ({RUT_TERCERO} tiene el dígito verificador incorrecto). Acción: cargar la tarjeta OneClick de prueba y un RUT de tercero válido.

---

### TC-B2C190-M-022 - Verificar que al generar la compra los datos del tercero se eliminan de la sesión [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-190.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_ONECLICK_USER}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001} y una ventana de entrega seleccionada
- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}
- La cuenta ya aceptó los Términos y Condiciones en una visita previa al Checkout
- La cuenta tiene enrolada la tarjeta {TARJETA_ONECLICK_001}

**Data utilizada**

{APELLIDO_TERCERO} = Gonzáles

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMPRADOR_ONECLICK_PASSWORD} = (contraseña)

{COMPRADOR_ONECLICK_USER} = daunuruco+oneclick@avatar-global.com

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{NOMBRE_TERCERO} = Marcos

{RUT_TERCERO} = 12345678-9

{SKU_VALID_001} = 000000000000675191-UN

{TARJETA_ONECLICK_001} = None

{TELEFONO_TERCERO} = 56987654321

{UNIDADES_SOBRE_MINIMO} = 11

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
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

**Resultado obtenido**

Causa: {TARJETA_ONECLICK_001} no tiene fila en el Excel de data, y además se necesita registrar un tercero válido ({RUT_TERCERO} tiene el dígito verificador incorrecto). Acción: cargar la tarjeta OneClick de prueba y un RUT de tercero válido.

**Observación**

Causa: {TARJETA_ONECLICK_001} no tiene fila en el Excel de data, y además se necesita registrar un tercero válido ({RUT_TERCERO} tiene el dígito verificador incorrecto). Acción: cargar la tarjeta OneClick de prueba y un RUT de tercero válido.

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "chromium"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-190",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-190 WEB Test Cases.xlsx",
  "title": "¿Recibe alguien más? (tercero que recibe)",
  "updated_at": "2026-10-19"
 },
 "history": {
  "2026-10-19": [
   "TC-B2C190-D-001",
   "TC-B2C190-D-002",
   "TC-B2C190-D-003",
   "TC-B2C190-D-004",
   "TC-B2C190-D-005",
   "TC-B2C190-D-006",
   "TC-B2C190-D-007",
   "TC-B2C190-D-008",
   "TC-B2C190-D-009",
   "TC-B2C190-D-010",
   "TC-B2C190-D-011",
   "TC-B2C190-D-012",
   "TC-B2C190-D-013",
   "TC-B2C190-D-014",
   "TC-B2C190-D-015",
   "TC-B2C190-D-016",
   "TC-B2C190-D-017",
   "TC-B2C190-D-018",
   "TC-B2C190-D-019",
   "TC-B2C190-D-020",
   "TC-B2C190-D-021",
   "TC-B2C190-D-022",
   "TC-B2C190-M-001",
   "TC-B2C190-M-002",
   "TC-B2C190-M-003",
   "TC-B2C190-M-004",
   "TC-B2C190-M-005",
   "TC-B2C190-M-006",
   "TC-B2C190-M-007",
   "TC-B2C190-M-008",
   "TC-B2C190-M-009",
   "TC-B2C190-M-010",
   "TC-B2C190-M-011",
   "TC-B2C190-M-012",
   "TC-B2C190-M-013",
   "TC-B2C190-M-014",
   "TC-B2C190-M-015",
   "TC-B2C190-M-016",
   "TC-B2C190-M-017",
   "TC-B2C190-M-018",
   "TC-B2C190-M-019",
   "TC-B2C190-M-020",
   "TC-B2C190-M-021",
   "TC-B2C190-M-022"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La sección de datos de entrega muestra la opción \"¿Recibe alguien más?\" y es seleccionable.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-001",
   "name": "Verificar que con despacho sin tercero se muestra la opción Recibe alguien más [Desktop] [Logueado]",
   "observed": "Datos de entrega (despacho a Calle Uno 23, La Florida) muestra '¿Recibe alguien más?' y al tocarla abre su modal.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- No hay un tercero registrado en la sesión",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-D-001-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 4 — datos de entrega con recibe alguien mas",
     "file": "TC-B2C190-D-001-p04-datos-de-entrega-con-recibe-alguien-mas.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-D-001.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La sección de datos de entrega muestra la opción \"¿Recibe alguien más?\" y es seleccionable.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-002",
   "name": "Verificar que con retiro en tienda sin tercero se muestra la opción Recibe alguien más [Desktop] [Logueado]",
   "observed": "Con retiro en Unimarc Las Condes, Datos de entrega muestra '¿Recibe alguien más?' y abre su modal. Al terminar se restauró el despacho a Calle Uno 23.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Retiro en tienda configurado con {TIENDA_RETIRO_001}\n- No hay un tercero registrado en la sesión",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-D-002-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 4 — datos de entrega con retiro y recibe alguien mas",
     "file": "TC-B2C190-D-002-p04-datos-de-entrega-con-retiro-y-recibe-alguien-mas.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-D-002.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El modal muestra X, título \"¿Recibe alguien más?\", texto \"Por tu seguridad, deberás completar todos los datos para validar la identidad de quien recibe.\", campos RUT*, Nombre*, Apellido* y Teléfono* \"+569\" vacíos (RUT con placeholder 12.345.678-9), el CTA \"Guardar datos de tercero\" deshabilitado y el botón \"Lo recibiré yo\".",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-003",
   "name": "Verificar que el modal Recibe alguien más muestra todos sus elementos [Desktop] [Logueado]",
   "observation": "Esperado: CTA 'Guardar datos de tercero' deshabilitado y botón 'Lo recibiré yo'. Obtenido: el CTA se llama 'Confirmar' (deshabilitado, eso sí cumple) y no existe el botón 'Lo recibiré yo'. El resto coincide: X, título, texto de seguridad, campos RUT*, Nombre*, Apellido* y Teléfono* vacíos, RUT con placeholder 12.345.678-9 y prefijo +569. tests/B2C-190.spec.ts (D/M-003).",
   "observed": "Esperado: CTA 'Guardar datos de tercero' deshabilitado y botón 'Lo recibiré yo'. Obtenido: el CTA se llama 'Confirmar' (deshabilitado, eso sí cumple) y no existe el botón 'Lo recibiré yo'. El resto coincide: X, título, texto de seguridad, campos RUT*, Nombre*, Apellido* y Teléfono* vacíos, RUT con placeholder 12.345.678-9 y prefijo +569. tests/B2C-190.spec.ts (D/M-003).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-D-003-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 6 — modal recibe alguien mas",
     "file": "TC-B2C190-D-003-p06-modal-recibe-alguien-mas.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-D-003.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Llega un código OTP al correo del usuario comprador ({USER_AUTH_001}) y se muestra el modal \"Autenticación requerida\". El teléfono {TELEFONO_TERCERO} del tercero no recibe ningún SMS ni notificación.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-004",
   "name": "Verificar que con datos válidos Guardar datos de tercero envía el OTP al correo del comprador [Desktop] [Logueado]",
   "observation": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "observed": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO}, Apellido {APELLIDO_TERCERO} y Teléfono {TELEFONO_TERCERO}.\n8. El usuario hace clic en \"Guardar datos de tercero\".\n9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal \"Autenticación requerida\".\n10. El usuario verifica que {TELEFONO_TERCERO} no recibe ningún SMS ni notificación.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El modal se cierra, Mis Envíos muestra {NOMBRE_TERCERO} y {TELEFONO_TERCERO} con la opción \"Editar\", ya no se muestra \"¿Recibe alguien más?\" y aparece el toast \"Los datos de quien recibirá tu compra se guardaron correctamente.\" (4 s + X).",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-005",
   "name": "Verificar que con OTP válido el tercero queda registrado y se muestra su resumen [Desktop] [Logueado]",
   "observation": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "observed": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO}, Apellido {APELLIDO_TERCERO} y Teléfono {TELEFONO_TERCERO}.\n8. El usuario hace clic en \"Guardar datos de tercero\".\n9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal \"Autenticación requerida\".\n10. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El modal se cierra, el tercero no queda registrado, \"Datos de entrega\" muestra el banner \"No pudimos guardar los datos de quien recibirá tu compra. Inténtalo nuevamente.\" (ME-038) y \"¿Recibe alguien más?\" sigue visible.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-006",
   "name": "Verificar que un error al guardar el tercero muestra el banner ME-038 y no lo registra [Desktop] [Logueado]",
   "observation": "Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.",
   "observed": "Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- DevTools abierto con bloqueo de la request {TERCERO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO}, Apellido {APELLIDO_TERCERO} y Teléfono {TELEFONO_TERCERO}.\n8. El usuario hace clic en \"Guardar datos de tercero\".\n9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal \"Autenticación requerida\".\n10. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{TERCERO_API_ENDPOINT} = None\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El modal muestra {RUT_TERCERO}, {NOMBRE_TERCERO}, {APELLIDO_TERCERO} y {TELEFONO_TERCERO} precargados.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-007",
   "name": "Verificar que Editar abre el modal con los datos del tercero precargados [Desktop] [Logueado]",
   "observation": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "observed": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "No se solicita OTP, el modal se cierra y Mis Envíos muestra {NOMBRE_TERCERO_2} y {TELEFONO_TERCERO_2}.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-008",
   "name": "Verificar que guardar la edición actualiza el tercero sin pedir OTP [Desktop] [Logueado]",
   "observation": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "observed": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.\n7. El usuario cambia el Nombre por {NOMBRE_TERCERO_2} y el Teléfono por {TELEFONO_TERCERO_2}.\n8. El usuario hace clic en \"Guardar datos de tercero\".\n9. El sistema muestra un loader.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO_2} = Apolinario\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO_2} = 56987654322\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El modal se cierra, se muestra \"No pudimos actualizar los datos de quien recibirá tu compra. Inténtalo nuevamente.\" (ME-039) con X, y la tarjeta mantiene {NOMBRE_TERCERO} con \"Editar\" disponible.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-009",
   "name": "Verificar que un error al actualizar el tercero muestra ME-039 y conserva los datos [Desktop] [Logueado]",
   "observation": "Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.",
   "observed": "Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}\n- DevTools abierto con bloqueo de la request {TERCERO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.\n7. El usuario cambia el Nombre por {NOMBRE_TERCERO_2}.\n8. El usuario hace clic en \"Guardar datos de tercero\".",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO_2} = Apolinario\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{TERCERO_API_ENDPOINT} = None\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El modal se cierra sin pedir OTP, el resumen del tercero desaparece, vuelve \"¿Recibe alguien más?\" y aparece el toast \"Los datos fueron eliminados correctamente\".",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-010",
   "name": "Verificar que Lo recibiré yo elimina al tercero sin OTP y muestra el toast [Desktop] [Logueado]",
   "observation": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "observed": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.\n7. El usuario hace clic en \"Lo recibiré yo\".\n8. El sistema muestra un loader.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Se muestra \"No pudimos actualizar los datos de quién recibirá tu compra. Intentalo nuevamente\" (ME-040), el modal se cierra y Mis Envíos mantiene {NOMBRE_TERCERO} y {TELEFONO_TERCERO}.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-011",
   "name": "Verificar que un error al eliminar el tercero muestra ME-040, cierra el modal y conserva los datos [Desktop] [Logueado]",
   "observation": "Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.",
   "observed": "Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}\n- DevTools abierto con bloqueo de la request {TERCERO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.\n7. El usuario hace clic en \"Lo recibiré yo\".",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{TERCERO_API_ENDPOINT} = None\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Bajo RUT se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-012",
   "name": "Verificar que un RUT con dígito verificador inválido muestra Ingrese un valor válido [Desktop] [Logueado]",
   "observation": "Con {RUT_DV_INVALIDO} (12345678-0) bajo RUT se muestra 'Ingrese un valor válido' y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "observed": "Con {RUT_DV_INVALIDO} (12345678-0) bajo RUT se muestra 'Ingrese un valor válido' y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-D-012-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 6 — modal recibe alguien mas",
     "file": "TC-B2C190-D-012-p06-modal-recibe-alguien-mas.png"
    },
    {
     "caption": "Paso 8 — campo rut tras salir",
     "file": "TC-B2C190-D-012-p08-campo-rut-tras-salir.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-D-012.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa {RUT_DV_INVALIDO} en RUT y sale del campo.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_DV_INVALIDO} = 12345678-0\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Bajo RUT se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-013",
   "name": "Verificar que un RUT sin puntos ni guion muestra Ingrese un valor válido [Desktop] [Logueado]",
   "observation": "Con {RUT_SIN_FORMATO} (123456789) el campo lo autoformatea a 12.345.678-9 y muestra 'Ingrese un valor válido' bajo RUT; el CTA queda deshabilitado. El error aparece porque ese número tiene el dígito verificador incorrecto, no por la falta de puntos y guion (el campo los agrega solo). Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "observed": "Con {RUT_SIN_FORMATO} (123456789) el campo lo autoformatea a 12.345.678-9 y muestra 'Ingrese un valor válido' bajo RUT; el CTA queda deshabilitado. El error aparece porque ese número tiene el dígito verificador incorrecto, no por la falta de puntos y guion (el campo los agrega solo). Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-D-013-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 6 — modal recibe alguien mas",
     "file": "TC-B2C190-D-013-p06-modal-recibe-alguien-mas.png"
    },
    {
     "caption": "Paso 8 — campo rut tras salir",
     "file": "TC-B2C190-D-013-p08-campo-rut-tras-salir.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-D-013.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa {RUT_SIN_FORMATO} en RUT y sale del campo.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_SIN_FORMATO} = 123456789\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Bajo Nombre se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-014",
   "name": "Verificar que un campo obligatorio vacío muestra Ingrese un valor válido al salir del campo [Desktop] [Logueado]",
   "observation": "Al entrar y salir de Nombre sin escribir se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. El RUT 'válido' que usa la fila ({RUT_TERCERO}) también queda marcado inválido por su dígito verificador. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "observed": "Al entrar y salir de Nombre sin escribir se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. El RUT 'válido' que usa la fila ({RUT_TERCERO}) también queda marcado inválido por su dígito verificador. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-D-014-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 6 — modal recibe alguien mas",
     "file": "TC-B2C190-D-014-p06-modal-recibe-alguien-mas.png"
    },
    {
     "caption": "Paso 8 — campo nombre tras salir",
     "file": "TC-B2C190-D-014-p08-campo-nombre-tras-salir.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-D-014.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT, Apellido y Teléfono con datos válidos.\n8. El usuario entra al campo Nombre y sale sin escribir.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Bajo Nombre se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-015",
   "name": "Verificar que un nombre con números o símbolos muestra Ingrese un valor válido [Desktop] [Logueado]",
   "observation": "Con {NOMBRE_CON_NUMEROS} ('Mar1a') se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "observed": "Con {NOMBRE_CON_NUMEROS} ('Mar1a') se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-D-015-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 6 — modal recibe alguien mas",
     "file": "TC-B2C190-D-015-p06-modal-recibe-alguien-mas.png"
    },
    {
     "caption": "Paso 8 — campo nombre tras salir",
     "file": "TC-B2C190-D-015-p08-campo-nombre-tras-salir.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-D-015.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa {NOMBRE_CON_NUMEROS} en Nombre y sale del campo.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_CON_NUMEROS} = Mar1a\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Bajo Nombre se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-016",
   "name": "Verificar que un nombre de más de 30 caracteres muestra Ingrese un valor válido [Desktop] [Logueado]",
   "observation": "Esperado: con {NOMBRE_31_CARACTERES} ('Gabriel Antonio Alberto Eduardo', 31 caracteres) se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. Obtenido: el campo corta la entrada a 30 caracteres ('Gabriel Antonio Alberto Eduard', maxlength 30) y no muestra ningún error. tests/B2C-190.spec.ts (D/M-016).",
   "observed": "Esperado: con {NOMBRE_31_CARACTERES} ('Gabriel Antonio Alberto Eduardo', 31 caracteres) se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. Obtenido: el campo corta la entrada a 30 caracteres ('Gabriel Antonio Alberto Eduard', maxlength 30) y no muestra ningún error. tests/B2C-190.spec.ts (D/M-016).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-D-016-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 6 — modal recibe alguien mas",
     "file": "TC-B2C190-D-016-p06-modal-recibe-alguien-mas.png"
    },
    {
     "caption": "Paso 8 — campo nombre tras salir",
     "file": "TC-B2C190-D-016-p08-campo-nombre-tras-salir.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C190-D-016.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa {NOMBRE_31_CARACTERES} en Nombre y sale del campo.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_31_CARACTERES} = Gabriel Antonio Alberto Eduardo\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Bajo Teléfono se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-017",
   "name": "Verificar que un teléfono sin 9 dígitos muestra Ingrese un valor válido [Desktop] [Logueado]",
   "observation": "Con {TELEFONO_CORTO} ('5698765', 7 dígitos) se muestra 'Ingrese un valor válido' bajo Teléfono y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "observed": "Con {TELEFONO_CORTO} ('5698765', 7 dígitos) se muestra 'Ingrese un valor válido' bajo Teléfono y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-D-017-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 6 — modal recibe alguien mas",
     "file": "TC-B2C190-D-017-p06-modal-recibe-alguien-mas.png"
    },
    {
     "caption": "Paso 8 — campo telefono tras salir",
     "file": "TC-B2C190-D-017-p08-campo-telefono-tras-salir.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-D-017.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa {TELEFONO_CORTO} en Teléfono y sale del campo.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_CORTO} = 5698765\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El mensaje de error desaparece y el CTA \"Guardar datos de tercero\" queda habilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-018",
   "name": "Verificar que al corregir el campo el error desaparece y se habilita el CTA [Desktop] [Logueado]",
   "observation": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "observed": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa Nombre, Apellido y Teléfono con datos válidos.\n8. El usuario ingresa {RUT_DV_INVALIDO} en RUT y sale del campo.\n9. El sistema muestra \"Ingrese un valor válido\" bajo RUT.\n10. El usuario reemplaza el RUT por {RUT_TERCERO}.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_DV_INVALIDO} = 12345678-0\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Bajo Nombre se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-019",
   "name": "Verificar que en la edición un dato inválido deja deshabilitado Guardar datos de tercero [Desktop] [Logueado]",
   "observation": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "observed": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.\n7. El usuario cambia el Nombre por {NOMBRE_CON_NUMEROS} y sale del campo.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_CON_NUMEROS} = Mar1a\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Mis Envíos sigue mostrando el resumen con {NOMBRE_TERCERO} y {TELEFONO_TERCERO} y la opción \"Editar\".",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-020",
   "name": "Verificar que el tercero se mantiene al salir y volver a Mis Envíos en la misma sesión [Desktop] [Logueado]",
   "observation": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "observed": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario vuelve al carro y luego regresa a Mis Envíos con \"Continuar con la entrega\".",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Bajo Teléfono se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-021",
   "name": "Verificar que dejar Teléfono vacío muestra Ingrese un valor válido al salir del campo [Desktop] [Logueado]",
   "observation": "Al entrar y salir de Teléfono sin escribir se muestra 'Ingrese un valor válido' bajo Teléfono y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "observed": "Al entrar y salir de Teléfono sin escribir se muestra 'Ingrese un valor válido' bajo Teléfono y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-D-021-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 6 — modal recibe alguien mas",
     "file": "TC-B2C190-D-021-p06-modal-recibe-alguien-mas.png"
    },
    {
     "caption": "Paso 8 — campo telefono tras salir",
     "file": "TC-B2C190-D-021-p08-campo-telefono-tras-salir.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-D-021.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO} y Apellido {APELLIDO_TERCERO} con datos válidos.\n8. El usuario entra al campo Teléfono y sale sin escribir nada.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La sección de datos de entrega muestra la opción \"¿Recibe alguien más?\" y es seleccionable.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-001",
   "name": "Verificar que con despacho sin tercero se muestra la opción Recibe alguien más [Mobile] [Logueado]",
   "observed": "Datos de entrega (despacho a Calle Uno 23, La Florida) muestra '¿Recibe alguien más?' y al tocarla abre su modal.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- No hay un tercero registrado en la sesión",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-M-001-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 4 — datos de entrega con recibe alguien mas",
     "file": "TC-B2C190-M-001-p04-datos-de-entrega-con-recibe-alguien-mas.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-M-001.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "La sección de datos de entrega muestra la opción \"¿Recibe alguien más?\" y es seleccionable.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-002",
   "name": "Verificar que con retiro en tienda sin tercero se muestra la opción Recibe alguien más [Mobile] [Logueado]",
   "observed": "Con retiro en Unimarc Las Condes, Datos de entrega muestra '¿Recibe alguien más?' y abre su modal. Al terminar se restauró el despacho a Calle Uno 23.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Retiro en tienda configurado con {TIENDA_RETIRO_001}\n- No hay un tercero registrado en la sesión",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-M-002-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 4 — datos de entrega con retiro y recibe alguien mas",
     "file": "TC-B2C190-M-002-p04-datos-de-entrega-con-retiro-y-recibe-alguien-mas.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-M-002.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El modal muestra X, título \"¿Recibe alguien más?\", texto \"Por tu seguridad, deberás completar todos los datos para validar la identidad de quien recibe.\", campos RUT*, Nombre*, Apellido* y Teléfono* \"+569\" vacíos (RUT con placeholder 12.345.678-9), el CTA \"Guardar datos de tercero\" deshabilitado y el botón \"Lo recibiré yo\".",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-003",
   "name": "Verificar que el modal Recibe alguien más muestra todos sus elementos [Mobile] [Logueado]",
   "observation": "Esperado: CTA 'Guardar datos de tercero' deshabilitado y botón 'Lo recibiré yo'. Obtenido: el CTA se llama 'Confirmar' (deshabilitado, eso sí cumple) y no existe el botón 'Lo recibiré yo'. El resto coincide: X, título, texto de seguridad, campos RUT*, Nombre*, Apellido* y Teléfono* vacíos, RUT con placeholder 12.345.678-9 y prefijo +569. tests/B2C-190.spec.ts (D/M-003).",
   "observed": "Esperado: CTA 'Guardar datos de tercero' deshabilitado y botón 'Lo recibiré yo'. Obtenido: el CTA se llama 'Confirmar' (deshabilitado, eso sí cumple) y no existe el botón 'Lo recibiré yo'. El resto coincide: X, título, texto de seguridad, campos RUT*, Nombre*, Apellido* y Teléfono* vacíos, RUT con placeholder 12.345.678-9 y prefijo +569. tests/B2C-190.spec.ts (D/M-003).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-M-003-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 6 — modal recibe alguien mas",
     "file": "TC-B2C190-M-003-p06-modal-recibe-alguien-mas.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-M-003.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Llega un código OTP al correo del usuario comprador ({USER_AUTH_001}) y se muestra el modal \"Autenticación requerida\". El teléfono {TELEFONO_TERCERO} del tercero no recibe ningún SMS ni notificación.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-004",
   "name": "Verificar que con datos válidos Guardar datos de tercero envía el OTP al correo del comprador [Mobile] [Logueado]",
   "observation": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "observed": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO}, Apellido {APELLIDO_TERCERO} y Teléfono {TELEFONO_TERCERO}.\n8. El usuario toca \"Guardar datos de tercero\".\n9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal \"Autenticación requerida\".\n10. El usuario verifica que {TELEFONO_TERCERO} no recibe ningún SMS ni notificación.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El modal se cierra, Mis Envíos muestra {NOMBRE_TERCERO} y {TELEFONO_TERCERO} con la opción \"Editar\", ya no se muestra \"¿Recibe alguien más?\" y aparece el toast \"Los datos de quien recibirá tu compra se guardaron correctamente.\" (4 s + X).",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-005",
   "name": "Verificar que con OTP válido el tercero queda registrado y se muestra su resumen [Mobile] [Logueado]",
   "observation": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "observed": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO}, Apellido {APELLIDO_TERCERO} y Teléfono {TELEFONO_TERCERO}.\n8. El usuario toca \"Guardar datos de tercero\".\n9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal \"Autenticación requerida\".\n10. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El modal se cierra, el tercero no queda registrado, \"Datos de entrega\" muestra el banner \"No pudimos guardar los datos de quien recibirá tu compra. Inténtalo nuevamente.\" (ME-038) y \"¿Recibe alguien más?\" sigue visible.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-006",
   "name": "Verificar que un error al guardar el tercero muestra el banner ME-038 y no lo registra [Mobile] [Logueado]",
   "observation": "Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.",
   "observed": "Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- DevTools abierto con bloqueo de la request {TERCERO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO}, Apellido {APELLIDO_TERCERO} y Teléfono {TELEFONO_TERCERO}.\n8. El usuario toca \"Guardar datos de tercero\".\n9. El sistema muestra un loader, envía el OTP al correo del comprador y abre el modal \"Autenticación requerida\".\n10. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{TERCERO_API_ENDPOINT} = None\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El modal muestra {RUT_TERCERO}, {NOMBRE_TERCERO}, {APELLIDO_TERCERO} y {TELEFONO_TERCERO} precargados.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-007",
   "name": "Verificar que Editar abre el modal con los datos del tercero precargados [Mobile] [Logueado]",
   "observation": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "observed": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "No se solicita OTP, el modal se cierra y Mis Envíos muestra {NOMBRE_TERCERO_2} y {TELEFONO_TERCERO_2}.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-008",
   "name": "Verificar que guardar la edición actualiza el tercero sin pedir OTP [Mobile] [Logueado]",
   "observation": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "observed": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.\n7. El usuario cambia el Nombre por {NOMBRE_TERCERO_2} y el Teléfono por {TELEFONO_TERCERO_2}.\n8. El usuario toca \"Guardar datos de tercero\".\n9. El sistema muestra un loader.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO_2} = Apolinario\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO_2} = 56987654322\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El modal se cierra, se muestra \"No pudimos actualizar los datos de quien recibirá tu compra. Inténtalo nuevamente.\" (ME-039) con X, y la tarjeta mantiene {NOMBRE_TERCERO} con \"Editar\" disponible.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-009",
   "name": "Verificar que un error al actualizar el tercero muestra ME-039 y conserva los datos [Mobile] [Logueado]",
   "observation": "Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.",
   "observed": "Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}\n- DevTools abierto con bloqueo de la request {TERCERO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.\n7. El usuario cambia el Nombre por {NOMBRE_TERCERO_2}.\n8. El usuario toca \"Guardar datos de tercero\".",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO_2} = Apolinario\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{TERCERO_API_ENDPOINT} = None\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El modal se cierra sin pedir OTP, el resumen del tercero desaparece, vuelve \"¿Recibe alguien más?\" y aparece el toast \"Los datos fueron eliminados correctamente\".",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-010",
   "name": "Verificar que Lo recibiré yo elimina al tercero sin OTP y muestra el toast [Mobile] [Logueado]",
   "observation": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "observed": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.\n7. El usuario toca \"Lo recibiré yo\".\n8. El sistema muestra un loader.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Se muestra \"No pudimos actualizar los datos de quién recibirá tu compra. Intentalo nuevamente\" (ME-040), el modal se cierra y Mis Envíos mantiene {NOMBRE_TERCERO} y {TELEFONO_TERCERO}.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-011",
   "name": "Verificar que un error al eliminar el tercero muestra ME-040, cierra el modal y conserva los datos [Mobile] [Logueado]",
   "observation": "Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.",
   "observed": "Causa: {TERCERO_API_ENDPOINT} está en TBD en el Excel de data; el caso necesita forzar el error del servicio de terceros. Acción: cargar el endpoint (o el mecanismo para simular el error) en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}\n- DevTools abierto con bloqueo de la request {TERCERO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.\n7. El usuario toca \"Lo recibiré yo\".",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{TERCERO_API_ENDPOINT} = None\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Bajo RUT se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-012",
   "name": "Verificar que un RUT con dígito verificador inválido muestra Ingrese un valor válido [Mobile] [Logueado]",
   "observation": "Con {RUT_DV_INVALIDO} (12345678-0) bajo RUT se muestra 'Ingrese un valor válido' y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "observed": "Con {RUT_DV_INVALIDO} (12345678-0) bajo RUT se muestra 'Ingrese un valor válido' y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-M-012-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 6 — modal recibe alguien mas",
     "file": "TC-B2C190-M-012-p06-modal-recibe-alguien-mas.png"
    },
    {
     "caption": "Paso 8 — campo rut tras salir",
     "file": "TC-B2C190-M-012-p08-campo-rut-tras-salir.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-M-012.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa {RUT_DV_INVALIDO} en RUT y sale del campo.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_DV_INVALIDO} = 12345678-0\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Bajo RUT se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-013",
   "name": "Verificar que un RUT sin puntos ni guion muestra Ingrese un valor válido [Mobile] [Logueado]",
   "observation": "Con {RUT_SIN_FORMATO} (123456789) el campo lo autoformatea a 12.345.678-9 y muestra 'Ingrese un valor válido' bajo RUT; el CTA queda deshabilitado. El error aparece porque ese número tiene el dígito verificador incorrecto, no por la falta de puntos y guion (el campo los agrega solo). Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "observed": "Con {RUT_SIN_FORMATO} (123456789) el campo lo autoformatea a 12.345.678-9 y muestra 'Ingrese un valor válido' bajo RUT; el CTA queda deshabilitado. El error aparece porque ese número tiene el dígito verificador incorrecto, no por la falta de puntos y guion (el campo los agrega solo). Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-M-013-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 6 — modal recibe alguien mas",
     "file": "TC-B2C190-M-013-p06-modal-recibe-alguien-mas.png"
    },
    {
     "caption": "Paso 8 — campo rut tras salir",
     "file": "TC-B2C190-M-013-p08-campo-rut-tras-salir.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-M-013.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa {RUT_SIN_FORMATO} en RUT y sale del campo.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_SIN_FORMATO} = 123456789\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Bajo Nombre se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-014",
   "name": "Verificar que un campo obligatorio vacío muestra Ingrese un valor válido al salir del campo [Mobile] [Logueado]",
   "observation": "Al entrar y salir de Nombre sin escribir se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. El RUT 'válido' que usa la fila ({RUT_TERCERO}) también queda marcado inválido por su dígito verificador. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "observed": "Al entrar y salir de Nombre sin escribir se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. El RUT 'válido' que usa la fila ({RUT_TERCERO}) también queda marcado inválido por su dígito verificador. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-M-014-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 6 — modal recibe alguien mas",
     "file": "TC-B2C190-M-014-p06-modal-recibe-alguien-mas.png"
    },
    {
     "caption": "Paso 8 — campo nombre tras salir",
     "file": "TC-B2C190-M-014-p08-campo-nombre-tras-salir.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-M-014.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT, Apellido y Teléfono con datos válidos.\n8. El usuario entra al campo Nombre y sale sin escribir.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Bajo Nombre se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-015",
   "name": "Verificar que un nombre con números o símbolos muestra Ingrese un valor válido [Mobile] [Logueado]",
   "observation": "Con {NOMBRE_CON_NUMEROS} ('Mar1a') se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "observed": "Con {NOMBRE_CON_NUMEROS} ('Mar1a') se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-M-015-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 6 — modal recibe alguien mas",
     "file": "TC-B2C190-M-015-p06-modal-recibe-alguien-mas.png"
    },
    {
     "caption": "Paso 8 — campo nombre tras salir",
     "file": "TC-B2C190-M-015-p08-campo-nombre-tras-salir.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-M-015.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa {NOMBRE_CON_NUMEROS} en Nombre y sale del campo.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_CON_NUMEROS} = Mar1a\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Bajo Nombre se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-016",
   "name": "Verificar que un nombre de más de 30 caracteres muestra Ingrese un valor válido [Mobile] [Logueado]",
   "observation": "Esperado: con {NOMBRE_31_CARACTERES} ('Gabriel Antonio Alberto Eduardo', 31 caracteres) se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. Obtenido: el campo corta la entrada a 30 caracteres ('Gabriel Antonio Alberto Eduard', maxlength 30) y no muestra ningún error. tests/B2C-190.spec.ts (D/M-016).",
   "observed": "Esperado: con {NOMBRE_31_CARACTERES} ('Gabriel Antonio Alberto Eduardo', 31 caracteres) se muestra 'Ingrese un valor válido' bajo Nombre y el CTA queda deshabilitado. Obtenido: el campo corta la entrada a 30 caracteres ('Gabriel Antonio Alberto Eduard', maxlength 30) y no muestra ningún error. tests/B2C-190.spec.ts (D/M-016).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-M-016-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 6 — modal recibe alguien mas",
     "file": "TC-B2C190-M-016-p06-modal-recibe-alguien-mas.png"
    },
    {
     "caption": "Paso 8 — campo nombre tras salir",
     "file": "TC-B2C190-M-016-p08-campo-nombre-tras-salir.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C190-M-016.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa {NOMBRE_31_CARACTERES} en Nombre y sale del campo.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_31_CARACTERES} = Gabriel Antonio Alberto Eduardo\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Bajo Teléfono se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-017",
   "name": "Verificar que un teléfono sin 9 dígitos muestra Ingrese un valor válido [Mobile] [Logueado]",
   "observation": "Con {TELEFONO_CORTO} ('5698765', 7 dígitos) se muestra 'Ingrese un valor válido' bajo Teléfono y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "observed": "Con {TELEFONO_CORTO} ('5698765', 7 dígitos) se muestra 'Ingrese un valor válido' bajo Teléfono y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-M-017-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 6 — modal recibe alguien mas",
     "file": "TC-B2C190-M-017-p06-modal-recibe-alguien-mas.png"
    },
    {
     "caption": "Paso 8 — campo telefono tras salir",
     "file": "TC-B2C190-M-017-p08-campo-telefono-tras-salir.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-M-017.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa los demás campos con datos válidos.\n8. El usuario ingresa {TELEFONO_CORTO} en Teléfono y sale del campo.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_CORTO} = 5698765\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "El mensaje de error desaparece y el CTA \"Guardar datos de tercero\" queda habilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-018",
   "name": "Verificar que al corregir el campo el error desaparece y se habilita el CTA [Mobile] [Logueado]",
   "observation": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "observed": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa Nombre, Apellido y Teléfono con datos válidos.\n8. El usuario ingresa {RUT_DV_INVALIDO} en RUT y sale del campo.\n9. El sistema muestra \"Ingrese un valor válido\" bajo RUT.\n10. El usuario reemplaza el RUT por {RUT_TERCERO}.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_DV_INVALIDO} = 12345678-0\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Bajo Nombre se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-019",
   "name": "Verificar que en la edición un dato inválido deja deshabilitado Guardar datos de tercero [Mobile] [Logueado]",
   "observation": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "observed": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Editar\" en el resumen del tercero.\n6. El sistema abre el modal de edición con los datos precargados.\n7. El usuario cambia el Nombre por {NOMBRE_CON_NUMEROS} y sale del campo.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_CON_NUMEROS} = Mar1a\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Mis Envíos sigue mostrando el resumen con {NOMBRE_TERCERO} y {TELEFONO_TERCERO} y la opción \"Editar\".",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-020",
   "name": "Verificar que el tercero se mantiene al salir y volver a Mis Envíos en la misma sesión [Mobile] [Logueado]",
   "observation": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "observed": "Causa: el caso necesita registrar (o dejar) un tercero válido con {RUT_TERCERO} (12345678-9), y ese RUT tiene el dígito verificador incorrecto (el de 12.345.678 es 5): el modal lo marca 'Ingrese un valor válido' y 'Confirmar' no se habilita, así que no se puede registrar al tercero. Además {TELEFONO_TERCERO} (56987654321) trae el prefijo 569 y el campo solo admite los 8 dígitos posteriores (queda '56987654'). Acción: cargar en el Excel de data un RUT de tercero válido y el teléfono sin el prefijo +569 (8 dígitos).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario vuelve al carro y luego regresa a Mis Envíos con \"Continuar con la entrega\".",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "Bajo Teléfono se muestra \"Ingrese un valor válido\" y el CTA \"Guardar datos de tercero\" queda deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-021",
   "name": "Verificar que dejar Teléfono vacío muestra Ingrese un valor válido al salir del campo [Mobile] [Logueado]",
   "observation": "Al entrar y salir de Teléfono sin escribir se muestra 'Ingrese un valor válido' bajo Teléfono y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "observed": "Al entrar y salir de Teléfono sin escribir se muestra 'Ingrese un valor válido' bajo Teléfono y el CTA queda deshabilitado. Nota: el CTA del modal se llama 'Confirmar' en DEV (la planilla lo nombra 'Guardar datos de tercero').",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C190-M-021-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 6 — modal recibe alguien mas",
     "file": "TC-B2C190-M-021-p06-modal-recibe-alguien-mas.png"
    },
    {
     "caption": "Paso 8 — campo telefono tras salir",
     "file": "TC-B2C190-M-021-p08-campo-telefono-tras-salir.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C190-M-021.png"
    }
   ],
   "spec": "tests/B2C-190.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"¿Recibe alguien más?\".\n6. El sistema abre el modal \"¿Recibe alguien más?\".\n7. El usuario completa RUT {RUT_TERCERO}, Nombre {NOMBRE_TERCERO} y Apellido {APELLIDO_TERCERO} con datos válidos.\n8. El usuario entra al campo Teléfono y sale sin escribir nada.",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "En la nueva compra Mis Envíos muestra la opción \"¿Recibe alguien más?\" sin el resumen del tercero ni \"Editar\", y el modal se abre con RUT, Nombre, Apellido y Teléfono vacíos.",
   "form_factor": "desktop",
   "id": "TC-B2C190-D-022",
   "name": "Verificar que al generar la compra los datos del tercero se eliminan de la sesión [Desktop] [Logueado]",
   "observation": "Causa: {TARJETA_ONECLICK_001} no tiene fila en el Excel de data, y además se necesita registrar un tercero válido ({RUT_TERCERO} tiene el dígito verificador incorrecto). Acción: cargar la tarjeta OneClick de prueba y un RUT de tercero válido.",
   "observed": "Causa: {TARJETA_ONECLICK_001} no tiene fila en el Excel de data, y además se necesita registrar un tercero válido ({RUT_TERCERO} tiene el dígito verificador incorrecto). Acción: cargar la tarjeta OneClick de prueba y un RUT de tercero válido.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_ONECLICK_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001} y una ventana de entrega seleccionada\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}\n- La cuenta ya aceptó los Términos y Condiciones en una visita previa al Checkout\n- La cuenta tiene enrolada la tarjeta {TARJETA_ONECLICK_001}",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos) con el resumen del tercero ({NOMBRE_TERCERO} y {TELEFONO_TERCERO}) y la opción \"Editar\".\n5. El usuario hace clic en \"Ir a pagar\".\n6. El sistema carga la página \"Mi Pago\" (Checkout).\n7. El usuario hace clic en la tarjeta {TARJETA_ONECLICK_001} y hace clic en \"Pagar y finalizar\".\n8. El sistema procesa el pago con éxito y muestra la Confirmación del pedido.\n9. Sin cerrar sesión, el usuario agrega {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} al carro y vuelve a Mis Envíos con \"Continuar con la entrega\".\n10. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n11. El usuario hace clic en \"¿Recibe alguien más?\".",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_ONECLICK_PASSWORD} = (contraseña)\n{COMPRADOR_ONECLICK_USER} = daunuruco+oneclick@avatar-global.com\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TARJETA_ONECLICK_001} = None\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-19",
   "expected": "En la nueva compra Mis Envíos muestra la opción \"¿Recibe alguien más?\" sin el resumen del tercero ni \"Editar\", y el modal se abre con RUT, Nombre, Apellido y Teléfono vacíos.",
   "form_factor": "mobile",
   "id": "TC-B2C190-M-022",
   "name": "Verificar que al generar la compra los datos del tercero se eliminan de la sesión [Mobile] [Logueado]",
   "observation": "Causa: {TARJETA_ONECLICK_001} no tiene fila en el Excel de data, y además se necesita registrar un tercero válido ({RUT_TERCERO} tiene el dígito verificador incorrecto). Acción: cargar la tarjeta OneClick de prueba y un RUT de tercero válido.",
   "observed": "Causa: {TARJETA_ONECLICK_001} no tiene fila en el Excel de data, y además se necesita registrar un tercero válido ({RUT_TERCERO} tiene el dígito verificador incorrecto). Acción: cargar la tarjeta OneClick de prueba y un RUT de tercero válido.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_ONECLICK_USER}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Despacho a domicilio configurado con {DIRECCION_DESPACHO_001} y una ventana de entrega seleccionada\n- Hay un tercero registrado en la sesión con {NOMBRE_TERCERO} {APELLIDO_TERCERO} y {TELEFONO_TERCERO}\n- La cuenta ya aceptó los Términos y Condiciones en una visita previa al Checkout\n- La cuenta tiene enrolada la tarjeta {TARJETA_ONECLICK_001}",
   "spec": "tests/B2C-190.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos) con el resumen del tercero ({NOMBRE_TERCERO} y {TELEFONO_TERCERO}) y la opción \"Editar\".\n5. El usuario toca \"Ir a pagar\".\n6. El sistema carga la página \"Mi Pago\" (Checkout).\n7. El usuario toca la tarjeta {TARJETA_ONECLICK_001} y toca \"Pagar y finalizar\".\n8. El sistema procesa el pago con éxito y muestra la Confirmación del pedido.\n9. Sin cerrar sesión, el usuario agrega {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} al carro y vuelve a Mis Envíos con \"Continuar con la entrega\".\n10. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n11. El usuario toca \"¿Recibe alguien más?\".",
   "test_data": "{APELLIDO_TERCERO} = Gonzáles\n{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMPRADOR_ONECLICK_PASSWORD} = (contraseña)\n{COMPRADOR_ONECLICK_USER} = daunuruco+oneclick@avatar-global.com\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{NOMBRE_TERCERO} = Marcos\n{RUT_TERCERO} = 12345678-9\n{SKU_VALID_001} = 000000000000675191-UN\n{TARJETA_ONECLICK_001} = None\n{TELEFONO_TERCERO} = 56987654321\n{UNIDADES_SOBRE_MINIMO} = 11",
   "viewport": "390x844"
  }
 ]
}
-->
