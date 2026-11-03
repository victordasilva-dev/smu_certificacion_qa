# B2C-149 APP - Evidencias QA (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-149 APP |
| Última actualización | 2026-10-29 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-149 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 7 |
| **Total** | **7** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-29 | 7 | TC-B2C149-APP-001, TC-B2C149-APP-002, TC-B2C149-APP-003, TC-B2C149-APP-004, TC-B2C149-APP-005, TC-B2C149-APP-006, TC-B2C149-APP-007 |

## Detalle por caso de prueba

### TC-B2C149-APP-001 - Verificar que Envío Express aparece primero con rayo, tiempo estimado y precio [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (cobertura de transportadora express)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {MONTO_MAXIMO_EXPRESS} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la sección "¿Cuál es tu horario de preferencia?".

**Resultado esperado**

La primera opción es "Envío Express" con ⚡, tiempo estimado (ej. "30-60 min") y precio, habilitada; a continuación las ventanas normales con franja y precio.

**Resultado obtenido**

Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.

**Observación**

Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.

---

### TC-B2C149-APP-002 - Verificar que con Express gratis y Normal gratis se autoselecciona Express [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_GRATIS}: Janis retorna Express gratis y Normal gratis

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_EXPRESS_Y_PROG_GRATIS} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {MONTO_MAXIMO_EXPRESS} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la ventana seleccionada, el subtotal y "Ir a pagar".

**Resultado esperado**

Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e "Ir a pagar" está habilitado.

**Resultado obtenido**

Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.

**Observación**

Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.

---

### TC-B2C149-APP-003 - Verificar que con Express gratis y Normal con costo se autoselecciona Express [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}: Janis retorna Express gratis y Normal con costo

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_EXPRESS_GRATIS_PROG_COSTO} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {MONTO_MAXIMO_EXPRESS} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la ventana seleccionada, el subtotal y "Ir a pagar".

**Resultado esperado**

Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e "Ir a pagar" está habilitado.

**Resultado obtenido**

Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar. Además falta {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}.

**Observación**

Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar. Además falta {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}.

---

### TC-B2C149-APP-004 - Verificar que con Express con costo y Normal gratis se autoselecciona la Normal gratis [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}: Janis retorna Express con costo y Normal gratis

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {MONTO_MAXIMO_EXPRESS} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la ventana seleccionada, el subtotal y "Ir a pagar".

**Resultado esperado**

Queda seleccionada la ventana Normal gratuita más próxima (borde activo y fondo), el subtotal refleja su precio e "Ir a pagar" está habilitado.

**Resultado obtenido**

Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.

**Observación**

Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.

---

### TC-B2C149-APP-005 - Verificar que con Express y Normal con costo se autoselecciona Express [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}: Janis retorna Express y Normal con costo

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {MONTO_MAXIMO_EXPRESS} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario revisa la ventana seleccionada, el subtotal y "Ir a pagar".

**Resultado esperado**

Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e "Ir a pagar" está habilitado.

**Resultado obtenido**

Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.

**Observación**

Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.

---

### TC-B2C149-APP-006 - Verificar que elegir Envío Express desde una Normal gratuita guarda Express y muestra el toast [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} (la Normal gratuita está seleccionada)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {MONTO_MAXIMO_EXPRESS} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "Envío Express".
6. El sistema muestra un loader sobre el selector de ventana.

**Resultado esperado**

"Fecha de entrega" muestra "[Día], [fecha], Envío Express 30-60 min", el subtotal suma el precio Express, aparece el toast "La fecha de despacho ha sido actualizada correctamente." (4 s + X) e "Ir a pagar" sigue habilitado.

**Resultado obtenido**

Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.

**Observación**

Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.

---

### TC-B2C149-APP-007 - Verificar que un error al guardar Express muestra ME-035 y mantiene la ventana anterior [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}
- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {VENTANA_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {VENTANA_API_ENDPOINT} = TBD
- {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {UNIDADES_SOBRE_MINIMO} = TBD
- {MONTO_MINIMO_COMPRA} = TBD
- {MONTO_MAXIMO_EXPRESS} = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca "Envío Express".

**Resultado esperado**

El loader se oculta, se muestra el toast "Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente." con el código ME-035 hasta cerrarlo con la X, y la Normal gratuita sigue seleccionada.

**Resultado obtenido**

Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar. Además falta {HERRAMIENTA_PROXY_APP}.

**Observación**

Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar. Además falta {HERRAMIENTA_PROXY_APP}.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "Android": "dispositivo por ADB"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-149 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-149 APP Test Cases.xlsx",
  "title": "B2C-149 APP - Evidencias QA (Android)",
  "updated_at": "2026-10-29"
 },
 "history": {
  "2026-10-29": [
   "TC-B2C149-APP-001",
   "TC-B2C149-APP-002",
   "TC-B2C149-APP-003",
   "TC-B2C149-APP-004",
   "TC-B2C149-APP-005",
   "TC-B2C149-APP-006",
   "TC-B2C149-APP-007"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La primera opción es \"Envío Express\" con ⚡, tiempo estimado (ej. \"30-60 min\") y precio, habilitada; a continuación las ventanas normales con franja y precio.",
   "form_factor": "app",
   "id": "TC-B2C149-APP-001",
   "name": "Verificar que Envío Express aparece primero con rayo, tiempo estimado y precio [App] [Logueado]",
   "observation": "Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.",
   "observed": "Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (cobertura de transportadora express)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la sección \"¿Cuál es tu horario de preferencia?\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {MONTO_MAXIMO_EXPRESS} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e \"Ir a pagar\" está habilitado.",
   "form_factor": "app",
   "id": "TC-B2C149-APP-002",
   "name": "Verificar que con Express gratis y Normal gratis se autoselecciona Express [App] [Logueado]",
   "observation": "Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.",
   "observed": "Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_GRATIS}: Janis retorna Express gratis y Normal gratis",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la ventana seleccionada, el subtotal y \"Ir a pagar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_EXPRESS_Y_PROG_GRATIS} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {MONTO_MAXIMO_EXPRESS} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e \"Ir a pagar\" está habilitado.",
   "form_factor": "app",
   "id": "TC-B2C149-APP-003",
   "name": "Verificar que con Express gratis y Normal con costo se autoselecciona Express [App] [Logueado]",
   "observation": "Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar. Además falta {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}.",
   "observed": "Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar. Además falta {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_GRATIS_PROG_COSTO}: Janis retorna Express gratis y Normal con costo",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la ventana seleccionada, el subtotal y \"Ir a pagar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_EXPRESS_GRATIS_PROG_COSTO} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {MONTO_MAXIMO_EXPRESS} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Queda seleccionada la ventana Normal gratuita más próxima (borde activo y fondo), el subtotal refleja su precio e \"Ir a pagar\" está habilitado.",
   "form_factor": "app",
   "id": "TC-B2C149-APP-004",
   "name": "Verificar que con Express con costo y Normal gratis se autoselecciona la Normal gratis [App] [Logueado]",
   "observation": "Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.",
   "observed": "Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}: Janis retorna Express con costo y Normal gratis",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la ventana seleccionada, el subtotal y \"Ir a pagar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {MONTO_MAXIMO_EXPRESS} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Queda seleccionada Envío Express (borde activo y fondo), el subtotal refleja su precio e \"Ir a pagar\" está habilitado.",
   "form_factor": "app",
   "id": "TC-B2C149-APP-005",
   "name": "Verificar que con Express y Normal con costo se autoselecciona Express [App] [Logueado]",
   "observation": "Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.",
   "observed": "Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}: Janis retorna Express y Normal con costo",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario revisa la ventana seleccionada, el subtotal y \"Ir a pagar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {MONTO_MAXIMO_EXPRESS} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "\"Fecha de entrega\" muestra \"[Día], [fecha], Envío Express 30-60 min\", el subtotal suma el precio Express, aparece el toast \"La fecha de despacho ha sido actualizada correctamente.\" (4 s + X) e \"Ir a pagar\" sigue habilitado.",
   "form_factor": "app",
   "id": "TC-B2C149-APP-006",
   "name": "Verificar que elegir Envío Express desde una Normal gratuita guarda Express y muestra el toast [App] [Logueado]",
   "observation": "Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.",
   "observed": "Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} (la Normal gratuita está seleccionada)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Envío Express\".\n6. El sistema muestra un loader sobre el selector de ventana.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {MONTO_MAXIMO_EXPRESS} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El loader se oculta, se muestra el toast \"Lo sentimos, no pudimos cambiar tu fecha de entrega. Inténtalo nuevamente.\" con el código ME-035 hasta cerrarlo con la X, y la Normal gratuita sigue seleccionada.",
   "form_factor": "app",
   "id": "TC-B2C149-APP-007",
   "name": "Verificar que un error al guardar Express muestra ME-035 y mantiene la ventana anterior [App] [Logueado]",
   "observation": "Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar. Además falta {HERRAMIENTA_PROXY_APP}.",
   "observed": "Falta dato: {MONTO_MAXIMO_EXPRESS} está en TBD en el Excel de data (la precondición exige subtotal menor a ese monto). Cargar el valor y re-ejecutar. Además falta {HERRAMIENTA_PROXY_APP}.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA} y menor a {MONTO_MAXIMO_EXPRESS}\n- Despacho a domicilio con {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {VENTANA_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca \"Envío Express\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {VENTANA_API_ENDPOINT} = TBD\n- {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UNIDADES_SOBRE_MINIMO} = TBD\n- {MONTO_MINIMO_COMPRA} = TBD\n- {MONTO_MAXIMO_EXPRESS} = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  }
 ]
}
-->
