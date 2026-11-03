# B2C-149 - Envío Express en método de entrega - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-149 |
| Última actualización | 2026-10-16 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-149 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 14 |
| **Total** | **14** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-16 | 14 | TC-B2C149-D-001, TC-B2C149-D-002, TC-B2C149-D-003, TC-B2C149-D-004, TC-B2C149-D-005, TC-B2C149-D-006, TC-B2C149-D-007, TC-B2C149-M-001, TC-B2C149-M-002, TC-B2C149-M-003, TC-B2C149-M-004, TC-B2C149-M-005, TC-B2C149-M-006, TC-B2C149-M-007 |

## Detalle por caso de prueba

### TC-B2C149-D-001 - Verificar que Envío Express aparece primero con rayo, tiempo estimado y precio [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (cobertura de transportadora express)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

Faltantes: {MONTO_MAXIMO_EXPRESS}

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la sección "¿Cuál es tu horario de preferencia?".

**Resultado esperado**

La primera opción es "Envío Express" con ⚡, tiempo estimado (ej. "30-60 min") y precio, habilitada; a continuación las ventanas normales con franja y precio.

**Resultado obtenido**

No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

**Observación**

Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

---

### TC-B2C149-D-002 - Verificar que con Express gratis y Normal gratis se autoselecciona Express [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_GRATIS}: Janis retorna Express gratis y Normal gratis

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_EXPRESS_Y_PROG_GRATIS} = San Isidro 41, Santiago

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

Faltantes: {MONTO_MAXIMO_EXPRESS}

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la ventana seleccionada, el subtotal y "Ir a pagar".

**Resultado esperado**

Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e "Ir a pagar" está habilitado.

**Resultado obtenido**

No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

**Observación**

Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

---

### TC-B2C149-D-003 - Verificar que con Express gratis y Normal con costo se autoselecciona Express [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}: Janis retorna Express gratis y Normal con costo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

Faltantes: {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}, {MONTO_MAXIMO_EXPRESS}

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la ventana seleccionada, el subtotal y "Ir a pagar".

**Resultado esperado**

Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e "Ir a pagar" está habilitado.

**Resultado obtenido**

No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}; sin fila en el Excel de data: {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

**Observación**

Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}; sin fila en el Excel de data: {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

---

### TC-B2C149-D-004 - Verificar que con Express con costo y Normal gratis se autoselecciona la Normal gratis [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}: Janis retorna Express con costo y Normal gratis

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

Faltantes: {MONTO_MAXIMO_EXPRESS}

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la ventana seleccionada, el subtotal y "Ir a pagar".

**Resultado esperado**

Queda seleccionada la ventana Normal gratuita más próxima (borde activo y fondo), el subtotal refleja su precio e "Ir a pagar" está habilitado.

**Resultado obtenido**

No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

**Observación**

Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

---

### TC-B2C149-D-005 - Verificar que con Express y Normal con costo se autoselecciona Express [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}: Janis retorna Express y Normal con costo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

Faltantes: {MONTO_MAXIMO_EXPRESS}

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la ventana seleccionada, el subtotal y "Ir a pagar".

**Resultado esperado**

Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e "Ir a pagar" está habilitado.

**Resultado obtenido**

No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

**Observación**

Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

---

### TC-B2C149-D-006 - Verificar que elegir Envío Express desde una Normal gratuita guarda Express y muestra el toast [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} (la Normal gratuita está seleccionada)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

Faltantes: {MONTO_MAXIMO_EXPRESS}

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "Envío Express".
6. El sistema muestra un loader sobre el selector de ventana.

**Resultado esperado**

"Fecha de entrega" muestra "[Día], [fecha], Envío Express 30-60 min", el subtotal suma el precio Express, aparece el toast "La fecha de despacho ha sido actualizada correctamente." (4 s + X) e "Ir a pagar" sigue habilitado.

**Resultado obtenido**

No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

**Observación**

Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

---

### TC-B2C149-D-007 - Verificar que un error al guardar Express muestra ME-035 y mantiene la ventana anterior [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}
- DevTools abierto con bloqueo de la request {VENTANA_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

Faltantes: {MONTO_MAXIMO_EXPRESS}, {VENTANA_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario hace clic en "Envío Express".

**Resultado esperado**

El loader se oculta, se muestra el toast "Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente." con el código ME-035 hasta cerrarlo con la X, y la Normal gratuita sigue seleccionada.

**Resultado obtenido**

No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}, {VENTANA_API_ENDPOINT}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

**Observación**

Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}, {VENTANA_API_ENDPOINT}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

---

### TC-B2C149-M-001 - Verificar que Envío Express aparece primero con rayo, tiempo estimado y precio [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (cobertura de transportadora express)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

Faltantes: {MONTO_MAXIMO_EXPRESS}

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la sección "¿Cuál es tu horario de preferencia?".

**Resultado esperado**

La primera opción es "Envío Express" con ⚡, tiempo estimado (ej. "30-60 min") y precio, habilitada; a continuación las ventanas normales con franja y precio.

**Resultado obtenido**

No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

**Observación**

Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

---

### TC-B2C149-M-002 - Verificar que con Express gratis y Normal gratis se autoselecciona Express [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_GRATIS}: Janis retorna Express gratis y Normal gratis

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_EXPRESS_Y_PROG_GRATIS} = San Isidro 41, Santiago

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

Faltantes: {MONTO_MAXIMO_EXPRESS}

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la ventana seleccionada, el subtotal y "Ir a pagar".

**Resultado esperado**

Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e "Ir a pagar" está habilitado.

**Resultado obtenido**

No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

**Observación**

Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

---

### TC-B2C149-M-003 - Verificar que con Express gratis y Normal con costo se autoselecciona Express [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}: Janis retorna Express gratis y Normal con costo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

Faltantes: {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}, {MONTO_MAXIMO_EXPRESS}

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la ventana seleccionada, el subtotal y "Ir a pagar".

**Resultado esperado**

Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e "Ir a pagar" está habilitado.

**Resultado obtenido**

No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}; sin fila en el Excel de data: {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

**Observación**

Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}; sin fila en el Excel de data: {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

---

### TC-B2C149-M-004 - Verificar que con Express con costo y Normal gratis se autoselecciona la Normal gratis [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}: Janis retorna Express con costo y Normal gratis

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

Faltantes: {MONTO_MAXIMO_EXPRESS}

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la ventana seleccionada, el subtotal y "Ir a pagar".

**Resultado esperado**

Queda seleccionada la ventana Normal gratuita más próxima (borde activo y fondo), el subtotal refleja su precio e "Ir a pagar" está habilitado.

**Resultado obtenido**

No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

**Observación**

Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

---

### TC-B2C149-M-005 - Verificar que con Express y Normal con costo se autoselecciona Express [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}: Janis retorna Express y Normal con costo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

Faltantes: {MONTO_MAXIMO_EXPRESS}

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la ventana seleccionada, el subtotal y "Ir a pagar".

**Resultado esperado**

Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e "Ir a pagar" está habilitado.

**Resultado obtenido**

No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

**Observación**

Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

---

### TC-B2C149-M-006 - Verificar que elegir Envío Express desde una Normal gratuita guarda Express y muestra el toast [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} (la Normal gratuita está seleccionada)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

Faltantes: {MONTO_MAXIMO_EXPRESS}

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "Envío Express".
6. El sistema muestra un loader sobre el selector de ventana.

**Resultado esperado**

"Fecha de entrega" muestra "[Día], [fecha], Envío Express 30-60 min", el subtotal suma el precio Express, aparece el toast "La fecha de despacho ha sido actualizada correctamente." (4 s + X) e "Ir a pagar" sigue habilitado.

**Resultado obtenido**

No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

**Observación**

Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

---

### TC-B2C149-M-007 - Verificar que un error al guardar Express muestra ME-035 y mantiene la ventana anterior [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}
- DevTools abierto con bloqueo de la request {VENTANA_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = Calle Uno 23, La Florida

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

Faltantes: {MONTO_MAXIMO_EXPRESS}, {VENTANA_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "Envío Express".

**Resultado esperado**

El loader se oculta, se muestra el toast "Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente." con el código ME-035 hasta cerrarlo con la X, y la Normal gratuita sigue seleccionada.

**Resultado obtenido**

No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}, {VENTANA_API_ENDPOINT}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

**Observación**

Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}, {VENTANA_API_ENDPOINT}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "webkit"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-149",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-149 Test Cases.xlsx",
  "title": "B2C-149 - Envío Express en método de entrega - Evidencias QA",
  "updated_at": "2026-10-16"
 },
 "history": {
  "2026-10-16": [
   "TC-B2C149-D-001",
   "TC-B2C149-D-002",
   "TC-B2C149-D-003",
   "TC-B2C149-D-004",
   "TC-B2C149-D-005",
   "TC-B2C149-D-006",
   "TC-B2C149-D-007",
   "TC-B2C149-M-001",
   "TC-B2C149-M-002",
   "TC-B2C149-M-003",
   "TC-B2C149-M-004",
   "TC-B2C149-M-005",
   "TC-B2C149-M-006",
   "TC-B2C149-M-007"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "La primera opción es \"Envío Express\" con ⚡, tiempo estimado (ej. \"30-60 min\") y precio, habilitada; a continuación las ventanas normales con franja y precio.",
   "form_factor": "desktop",
   "id": "TC-B2C149-D-001",
   "name": "Verificar que Envío Express aparece primero con rayo, tiempo estimado y precio [Desktop] [Logueado]",
   "observation": "Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "observed": "No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (cobertura de transportadora express)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la sección \"¿Cuál es tu horario de preferencia?\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\nFaltantes: {MONTO_MAXIMO_EXPRESS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e \"Ir a pagar\" está habilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C149-D-002",
   "name": "Verificar que con Express gratis y Normal gratis se autoselecciona Express [Desktop] [Logueado]",
   "observation": "Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "observed": "No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_GRATIS}: Janis retorna Express gratis y Normal gratis",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la ventana seleccionada, el subtotal y \"Ir a pagar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_EXPRESS_Y_PROG_GRATIS} = San Isidro 41, Santiago\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\nFaltantes: {MONTO_MAXIMO_EXPRESS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e \"Ir a pagar\" está habilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C149-D-003",
   "name": "Verificar que con Express gratis y Normal con costo se autoselecciona Express [Desktop] [Logueado]",
   "observation": "Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}; sin fila en el Excel de data: {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "observed": "No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}; sin fila en el Excel de data: {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}: Janis retorna Express gratis y Normal con costo",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la ventana seleccionada, el subtotal y \"Ir a pagar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\nFaltantes: {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}, {MONTO_MAXIMO_EXPRESS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "Queda seleccionada la ventana Normal gratuita más próxima (borde activo y fondo), el subtotal refleja su precio e \"Ir a pagar\" está habilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C149-D-004",
   "name": "Verificar que con Express con costo y Normal gratis se autoselecciona la Normal gratis [Desktop] [Logueado]",
   "observation": "Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "observed": "No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}: Janis retorna Express con costo y Normal gratis",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la ventana seleccionada, el subtotal y \"Ir a pagar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\nFaltantes: {MONTO_MAXIMO_EXPRESS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e \"Ir a pagar\" está habilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C149-D-005",
   "name": "Verificar que con Express y Normal con costo se autoselecciona Express [Desktop] [Logueado]",
   "observation": "Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "observed": "No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}: Janis retorna Express y Normal con costo",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la ventana seleccionada, el subtotal y \"Ir a pagar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\nFaltantes: {MONTO_MAXIMO_EXPRESS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "\"Fecha de entrega\" muestra \"[Día], [fecha], Envío Express 30-60 min\", el subtotal suma el precio Express, aparece el toast \"La fecha de despacho ha sido actualizada correctamente.\" (4 s + X) e \"Ir a pagar\" sigue habilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C149-D-006",
   "name": "Verificar que elegir Envío Express desde una Normal gratuita guarda Express y muestra el toast [Desktop] [Logueado]",
   "observation": "Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "observed": "No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} (la Normal gratuita está seleccionada)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"Envío Express\".\n6. El sistema muestra un loader sobre el selector de ventana.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\nFaltantes: {MONTO_MAXIMO_EXPRESS}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "El loader se oculta, se muestra el toast \"Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente.\" con el código ME-035 hasta cerrarlo con la X, y la Normal gratuita sigue seleccionada.",
   "form_factor": "desktop",
   "id": "TC-B2C149-D-007",
   "name": "Verificar que un error al guardar Express muestra ME-035 y mantiene la ventana anterior [Desktop] [Logueado]",
   "observation": "Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}, {VENTANA_API_ENDPOINT}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "observed": "No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}, {VENTANA_API_ENDPOINT}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}\n- DevTools abierto con bloqueo de la request {VENTANA_API_ENDPOINT} (Network request blocking)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario hace clic en \"Envío Express\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\nFaltantes: {MONTO_MAXIMO_EXPRESS}, {VENTANA_API_ENDPOINT}",
   "viewport": "1440x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "La primera opción es \"Envío Express\" con ⚡, tiempo estimado (ej. \"30-60 min\") y precio, habilitada; a continuación las ventanas normales con franja y precio.",
   "form_factor": "mobile",
   "id": "TC-B2C149-M-001",
   "name": "Verificar que Envío Express aparece primero con rayo, tiempo estimado y precio [Mobile] [Logueado]",
   "observation": "Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "observed": "No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (cobertura de transportadora express)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la sección \"¿Cuál es tu horario de preferencia?\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\nFaltantes: {MONTO_MAXIMO_EXPRESS}",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e \"Ir a pagar\" está habilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C149-M-002",
   "name": "Verificar que con Express gratis y Normal gratis se autoselecciona Express [Mobile] [Logueado]",
   "observation": "Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "observed": "No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_GRATIS}: Janis retorna Express gratis y Normal gratis",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la ventana seleccionada, el subtotal y \"Ir a pagar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_EXPRESS_Y_PROG_GRATIS} = San Isidro 41, Santiago\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\nFaltantes: {MONTO_MAXIMO_EXPRESS}",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e \"Ir a pagar\" está habilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C149-M-003",
   "name": "Verificar que con Express gratis y Normal con costo se autoselecciona Express [Mobile] [Logueado]",
   "observation": "Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}; sin fila en el Excel de data: {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "observed": "No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}; sin fila en el Excel de data: {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}: Janis retorna Express gratis y Normal con costo",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la ventana seleccionada, el subtotal y \"Ir a pagar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\nFaltantes: {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}, {MONTO_MAXIMO_EXPRESS}",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "Queda seleccionada la ventana Normal gratuita más próxima (borde activo y fondo), el subtotal refleja su precio e \"Ir a pagar\" está habilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C149-M-004",
   "name": "Verificar que con Express con costo y Normal gratis se autoselecciona la Normal gratis [Mobile] [Logueado]",
   "observation": "Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "observed": "No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}: Janis retorna Express con costo y Normal gratis",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la ventana seleccionada, el subtotal y \"Ir a pagar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\nFaltantes: {MONTO_MAXIMO_EXPRESS}",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e \"Ir a pagar\" está habilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C149-M-005",
   "name": "Verificar que con Express y Normal con costo se autoselecciona Express [Mobile] [Logueado]",
   "observation": "Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "observed": "No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}: Janis retorna Express y Normal con costo",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la ventana seleccionada, el subtotal y \"Ir a pagar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\nFaltantes: {MONTO_MAXIMO_EXPRESS}",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "\"Fecha de entrega\" muestra \"[Día], [fecha], Envío Express 30-60 min\", el subtotal suma el precio Express, aparece el toast \"La fecha de despacho ha sido actualizada correctamente.\" (4 s + X) e \"Ir a pagar\" sigue habilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C149-M-006",
   "name": "Verificar que elegir Envío Express desde una Normal gratuita guarda Express y muestra el toast [Mobile] [Logueado]",
   "observation": "Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "observed": "No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} (la Normal gratuita está seleccionada)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Envío Express\".\n6. El sistema muestra un loader sobre el selector de ventana.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\nFaltantes: {MONTO_MAXIMO_EXPRESS}",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "El loader se oculta, se muestra el toast \"Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente.\" con el código ME-035 hasta cerrarlo con la X, y la Normal gratuita sigue seleccionada.",
   "form_factor": "mobile",
   "id": "TC-B2C149-M-007",
   "name": "Verificar que un error al guardar Express muestra ME-035 y mantiene la ventana anterior [Mobile] [Logueado]",
   "observation": "Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}, {VENTANA_API_ENDPOINT}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "observed": "No ejecutado: Causa: falta data de prueba (en TBD/vacío en el Excel de data: {MONTO_MAXIMO_EXPRESS}, {VENTANA_API_ENDPOINT}). Acción: cargar el/los valor(es) en el Excel de data y re-ejecutar el caso.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}\n- DevTools abierto con bloqueo de la request {VENTANA_API_ENDPOINT} (Network request blocking)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Envío Express\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = Calle Uno 23, La Florida\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\nFaltantes: {MONTO_MAXIMO_EXPRESS}, {VENTANA_API_ENDPOINT}",
   "viewport": "390x844"
  }
 ]
}
-->
