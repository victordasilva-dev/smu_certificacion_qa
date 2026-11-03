# B2C-127 APP - Evidencias QA (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-127 APP |
| Última actualización | 2026-10-29 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-127 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 12 |
| **Total** | **12** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-29 | 12 | TC-B2C127-APP-001, TC-B2C127-APP-002, TC-B2C127-APP-003, TC-B2C127-APP-004, TC-B2C127-APP-005, TC-B2C127-APP-006, TC-B2C127-APP-007, TC-B2C127-APP-008, TC-B2C127-APP-009, TC-B2C127-APP-010, TC-B2C127-APP-011, TC-B2C127-APP-012 |

## Detalle por caso de prueba

### TC-B2C127-APP-001 - Verificar que una dirección con cobertura sin horarios muestra el modal con sus opciones [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-127.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro está vacío

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_SIN_SLA} = TBD
- {COMPRADOR_USER}
- {COMPRADOR_PASSWORD}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Por ahora no hay horarios disponibles".

**Resultado esperado**

Se muestra el modal con imagen, el texto "Por ahora no hay horarios disponibles. Intenta cambiando el método de entrega o continúa con tu dirección, y en cuanto tengamos horarios los reflejaremos" y los botones "Continuar con esta dirección" y "Cambiar método de entrega".

**Resultado obtenido**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.

---

### TC-B2C127-APP-002 - Verificar que continuar sin carro setea la dirección con el aviso de sin horarios [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-127.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro está vacío

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_SIN_SLA} = TBD
- {COMPRADOR_USER}
- {COMPRADOR_PASSWORD}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Por ahora no hay horarios disponibles".
7. El usuario toca "Continuar con esta dirección".
8. El sistema muestra un loader.

**Resultado esperado**

La dirección {DIRECCION_SIN_SLA} queda seteada y se muestra con ⚠️ "Sin horarios disponibles".

**Resultado obtenido**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.

---

### TC-B2C127-APP-003 - Verificar que con dirección sin horarios se pueden seguir agregando productos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-127.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- La dirección {DIRECCION_SIN_SLA} está seteada en estado sin SLAs

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_SIN_SLA} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_USER}
- {COMPRADOR_PASSWORD}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home con ⚠️ "Sin horarios disponibles".
3. El usuario busca {SKU_VALID_001} en la App y lo agrega al carro.

**Resultado esperado**

{SKU_VALID_001} se agrega al carro con normalidad.

**Resultado obtenido**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.

---

### TC-B2C127-APP-004 - Verificar que con carro primero aparece No se te escapen y luego el modal sin horarios [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-127.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001}
- {DIRECCION_SIN_SLA} tiene tienda abastecedora distinta a {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_SIN_SLA} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {DIRECCION_DESPACHO_001} = Casa
- {COMPRADOR_USER}
- {COMPRADOR_PASSWORD}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".
8. El sistema muestra el modal "Por ahora no hay horarios disponibles".
9. El usuario toca "Continuar con esta dirección".

**Resultado esperado**

Tras el loader, la dirección queda con estado sin SLAs y el usuario llega al Home con el aviso ⚠️ "Sin horarios disponibles".

**Resultado obtenido**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.

---

### TC-B2C127-APP-005 - Verificar que un error al setear la dirección sin horarios muestra el toast y no la setea [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-127.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {SETEO_ENTREGA_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SETEO_ENTREGA_API_ENDPOINT} = TBD
- {DIRECCION_SIN_SLA} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {HERRAMIENTA_PROXY_APP} = TBD
- {COMPRADOR_USER}
- {COMPRADOR_PASSWORD}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Por ahora no hay horarios disponibles".
7. El usuario toca "Continuar con esta dirección".
8. El sistema muestra un loader.

**Resultado esperado**

Se muestra el toast "Lo sentimos, no pudimos guardar tu dirección. Por favor, inténtalo nuevamente" con X y la dirección activa sigue siendo {DIRECCION_DESPACHO_001}.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C127-APP-006 - Verificar que Cambiar método de entrega vuelve al modal Elige tu método de entrega [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-127.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro está vacío

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_SIN_SLA} = TBD
- {COMPRADOR_USER}
- {COMPRADOR_PASSWORD}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Por ahora no hay horarios disponibles".
7. El usuario toca "Cambiar método de entrega".

**Resultado esperado**

Se muestra el modal "Elige tu método de entrega".

**Resultado obtenido**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.

---

### TC-B2C127-APP-007 - Verificar que desde Mis envíos una dirección sin horarios muestra la pantalla dedicada [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-127.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001}
- Método de entrega activo con subtotal sobre el mínimo
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_SIN_SLA} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {COMPRADOR_USER}
- {COMPRADOR_PASSWORD}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca la tarjeta de dirección y selecciona {DIRECCION_SIN_SLA}.
6. El usuario completa la validación OTP.

**Resultado esperado**

El usuario permanece en Mis envíos, que muestra la pantalla "Sin horarios disponibles" con opciones para cambiar la dirección o el método de entrega.

**Resultado obtenido**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android (TC 001); este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android (TC 001); este TC no se ejecutó por separado.

---

### TC-B2C127-APP-008 - Verificar que continuar con una tienda de retiro sin horarios la setea con el aviso de sin horarios [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-127.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro está vacío

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {TIENDA_RETIRO_SIN_SLA}
- {COMPRADOR_USER}
- {COMPRADOR_PASSWORD}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y toca "Confirmar tienda".
8. El sistema muestra el modal "Por ahora no hay horarios disponibles".
9. El usuario toca "Continuar con esta dirección".
10. El sistema muestra un loader.

**Resultado esperado**

Retiro en tienda en {TIENDA_RETIRO_SIN_SLA} queda seteado como método de entrega y se muestra con ⚠️ "Sin horarios disponibles".

**Resultado obtenido**

Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C127-APP-009 - Verificar que con una tienda de retiro sin horarios se pueden seguir agregando productos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-127.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Retiro en tienda en {TIENDA_RETIRO_SIN_SLA} está seteado en estado sin SLAs

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {TIENDA_RETIRO_SIN_SLA}
- {SKU_VALID_001}
- {COMPRADOR_USER}
- {COMPRADOR_PASSWORD}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home con ⚠️ "Sin horarios disponibles".
3. El usuario ingresa a la PDP de {SKU_VALID_001} y lo agrega al carro.

**Resultado esperado**

{SKU_VALID_001} se agrega al carro con normalidad y el aviso de sin horarios se mantiene.

**Resultado obtenido**

Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C127-APP-010 - Verificar que con carro al cambiar a una tienda de retiro sin horarios primero aparece No se te escapen y luego el modal sin horarios [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-127.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es {DIRECCION_DESPACHO_001} (despacho a domicilio)
- El carro contiene {SKU_VALID_001}
- {TIENDA_RETIRO_SIN_SLA} es una tienda abastecedora distinta a la de {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {TIENDA_RETIRO_SIN_SLA}
- {SKU_VALID_001}
- {DIRECCION_DESPACHO_001}
- {COMPRADOR_USER}
- {COMPRADOR_PASSWORD}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y toca "Confirmar tienda".
8. El sistema muestra el modal "Algunos productos podrían agotarse".
9. El usuario toca "Sí, continuar".
10. El sistema muestra el modal "Por ahora no hay horarios disponibles".
11. El usuario toca "Continuar con esta dirección".

**Resultado esperado**

Tras el loader, retiro en tienda en {TIENDA_RETIRO_SIN_SLA} queda con estado sin SLAs y el usuario llega al Home con el aviso ⚠️ "Sin horarios disponibles".

**Resultado obtenido**

Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C127-APP-011 - Verificar que un error al setear una tienda de retiro sin horarios muestra el toast y no la setea [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-127.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es {DIRECCION_DESPACHO_001} (despacho a domicilio)
- El carro está vacío
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {SETEO_ENTREGA_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {SETEO_ENTREGA_API_ENDPOINT}
- {TIENDA_RETIRO_SIN_SLA}
- {DIRECCION_DESPACHO_001}
- {HERRAMIENTA_PROXY_APP}
- {COMPRADOR_USER}
- {COMPRADOR_PASSWORD}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y toca "Confirmar tienda".
8. El sistema muestra el modal "Por ahora no hay horarios disponibles".
9. El usuario toca "Continuar con esta dirección".
10. El sistema muestra un loader.

**Resultado esperado**

Se muestra el toast "Lo sentimos, no pudimos guardar tu dirección. Por favor, inténtalo nuevamente" con X; retiro en tienda no queda seteado y el método activo sigue siendo despacho a {DIRECCION_DESPACHO_001}.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP}, {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP}, {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C127-APP-012 - Verificar que Cambiar método de entrega desde el modal sin horarios de una tienda de retiro vuelve a Elige tu método de entrega [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-127.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro está vacío

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {TIENDA_RETIRO_SIN_SLA}
- {COMPRADOR_USER}
- {COMPRADOR_PASSWORD}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y toca "Confirmar tienda".
8. El sistema muestra el modal "Por ahora no hay horarios disponibles".
9. El usuario toca "Cambiar método de entrega".

**Resultado esperado**

Se muestra el modal "Elige tu método de entrega" y {TIENDA_RETIRO_SIN_SLA} no queda seteada como método de entrega.

**Resultado obtenido**

Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

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
  "suite": "B2C-127 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-127 APP Test Cases.xlsx",
  "title": "B2C-127 APP - Evidencias QA (Android)",
  "updated_at": "2026-10-29"
 },
 "history": {
  "2026-10-29": [
   "TC-B2C127-APP-001",
   "TC-B2C127-APP-002",
   "TC-B2C127-APP-003",
   "TC-B2C127-APP-004",
   "TC-B2C127-APP-005",
   "TC-B2C127-APP-006",
   "TC-B2C127-APP-007",
   "TC-B2C127-APP-008",
   "TC-B2C127-APP-009",
   "TC-B2C127-APP-010",
   "TC-B2C127-APP-011",
   "TC-B2C127-APP-012"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el modal con imagen, el texto \"Por ahora no hay horarios disponibles. Intenta cambiando el método de entrega o continúa con tu dirección, y en cuanto tengamos horarios los reflejaremos\" y los botones \"Continuar con esta dirección\" y \"Cambiar método de entrega\".",
   "form_factor": "app",
   "id": "TC-B2C127-APP-001",
   "name": "Verificar que una dirección con cobertura sin horarios muestra el modal con sus opciones [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro está vacío",
   "spec": "tests-app/B2C-127.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Por ahora no hay horarios disponibles\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_SIN_SLA} = TBD\n- {COMPRADOR_USER} \n- {COMPRADOR_PASSWORD}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La dirección {DIRECCION_SIN_SLA} queda seteada y se muestra con ⚠️ \"Sin horarios disponibles\".",
   "form_factor": "app",
   "id": "TC-B2C127-APP-002",
   "name": "Verificar que continuar sin carro setea la dirección con el aviso de sin horarios [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro está vacío",
   "spec": "tests-app/B2C-127.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Por ahora no hay horarios disponibles\".\n7. El usuario toca \"Continuar con esta dirección\".\n8. El sistema muestra un loader.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_SIN_SLA} = TBD\n- {COMPRADOR_USER}\n- {COMPRADOR_PASSWORD}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{SKU_VALID_001} se agrega al carro con normalidad.",
   "form_factor": "app",
   "id": "TC-B2C127-APP-003",
   "name": "Verificar que con dirección sin horarios se pueden seguir agregando productos [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección {DIRECCION_SIN_SLA} está seteada en estado sin SLAs",
   "spec": "tests-app/B2C-127.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home con ⚠️ \"Sin horarios disponibles\".\n3. El usuario busca {SKU_VALID_001} en la App y lo agrega al carro.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_SIN_SLA} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_USER} \n- {COMPRADOR_PASSWORD}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Tras el loader, la dirección queda con estado sin SLAs y el usuario llega al Home con el aviso ⚠️ \"Sin horarios disponibles\".",
   "form_factor": "app",
   "id": "TC-B2C127-APP-004",
   "name": "Verificar que con carro primero aparece No se te escapen y luego el modal sin horarios [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001}\n- {DIRECCION_SIN_SLA} tiene tienda abastecedora distinta a {DIRECCION_DESPACHO_001}",
   "spec": "tests-app/B2C-127.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".\n8. El sistema muestra el modal \"Por ahora no hay horarios disponibles\".\n9. El usuario toca \"Continuar con esta dirección\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_SIN_SLA} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {DIRECCION_DESPACHO_001} = Casa\n- {COMPRADOR_USER} \n- {COMPRADOR_PASSWORD}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast \"Lo sentimos, no pudimos guardar tu dirección. Por favor, inténtalo nuevamente\" con X y la dirección activa sigue siendo {DIRECCION_DESPACHO_001}.",
   "form_factor": "app",
   "id": "TC-B2C127-APP-005",
   "name": "Verificar que un error al setear la dirección sin horarios muestra el toast y no la setea [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {SETEO_ENTREGA_API_ENDPOINT}",
   "spec": "tests-app/B2C-127.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Por ahora no hay horarios disponibles\".\n7. El usuario toca \"Continuar con esta dirección\".\n8. El sistema muestra un loader.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SETEO_ENTREGA_API_ENDPOINT} = TBD\n- {DIRECCION_SIN_SLA} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {HERRAMIENTA_PROXY_APP} = TBD\n- {COMPRADOR_USER} \n- {COMPRADOR_PASSWORD}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el modal \"Elige tu método de entrega\".",
   "form_factor": "app",
   "id": "TC-B2C127-APP-006",
   "name": "Verificar que Cambiar método de entrega vuelve al modal Elige tu método de entrega [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro está vacío",
   "spec": "tests-app/B2C-127.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Por ahora no hay horarios disponibles\".\n7. El usuario toca \"Cambiar método de entrega\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_SIN_SLA} = TBD\n- {COMPRADOR_USER} \n- {COMPRADOR_PASSWORD}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El usuario permanece en Mis envíos, que muestra la pantalla \"Sin horarios disponibles\" con opciones para cambiar la dirección o el método de entrega.",
   "form_factor": "app",
   "id": "TC-B2C127-APP-007",
   "name": "Verificar que desde Mis envíos una dirección sin horarios muestra la pantalla dedicada [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android (TC 001); este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {DIRECCION_SIN_SLA} tiene hoy horarios de despacho (al confirmarla el Store Locator muestra «Desde: Vie 30/10, 09:00 hrs» y no el modal «Por ahora no hay horarios disponibles»), y el TC necesita una dirección con cobertura y sin horarios. Verificado en Android (TC 001); este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001}\n- Método de entrega activo con subtotal sobre el mínimo\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests-app/B2C-127.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca la tarjeta de dirección y selecciona {DIRECCION_SIN_SLA}.\n6. El usuario completa la validación OTP.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_SIN_SLA} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {COMPRADOR_USER} \n- {COMPRADOR_PASSWORD}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Retiro en tienda en {TIENDA_RETIRO_SIN_SLA} queda seteado como método de entrega y se muestra con ⚠️ \"Sin horarios disponibles\".",
   "form_factor": "app",
   "id": "TC-B2C127-APP-008",
   "name": "Verificar que continuar con una tienda de retiro sin horarios la setea con el aviso de sin horarios [App] [Logueado]",
   "observation": "Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro está vacío",
   "spec": "tests-app/B2C-127.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y toca \"Confirmar tienda\".\n8. El sistema muestra el modal \"Por ahora no hay horarios disponibles\".\n9. El usuario toca \"Continuar con esta dirección\".\n10. El sistema muestra un loader.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {TIENDA_RETIRO_SIN_SLA}\n- {COMPRADOR_USER} \n- {COMPRADOR_PASSWORD}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{SKU_VALID_001} se agrega al carro con normalidad y el aviso de sin horarios se mantiene.",
   "form_factor": "app",
   "id": "TC-B2C127-APP-009",
   "name": "Verificar que con una tienda de retiro sin horarios se pueden seguir agregando productos [App] [Logueado]",
   "observation": "Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Retiro en tienda en {TIENDA_RETIRO_SIN_SLA} está seteado en estado sin SLAs",
   "spec": "tests-app/B2C-127.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home con ⚠️ \"Sin horarios disponibles\".\n3. El usuario ingresa a la PDP de {SKU_VALID_001} y lo agrega al carro.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {TIENDA_RETIRO_SIN_SLA}\n- {SKU_VALID_001}\n- {COMPRADOR_USER} \n- {COMPRADOR_PASSWORD}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Tras el loader, retiro en tienda en {TIENDA_RETIRO_SIN_SLA} queda con estado sin SLAs y el usuario llega al Home con el aviso ⚠️ \"Sin horarios disponibles\".",
   "form_factor": "app",
   "id": "TC-B2C127-APP-010",
   "name": "Verificar que con carro al cambiar a una tienda de retiro sin horarios primero aparece No se te escapen y luego el modal sin horarios [App] [Logueado]",
   "observation": "Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es {DIRECCION_DESPACHO_001} (despacho a domicilio)\n- El carro contiene {SKU_VALID_001}\n- {TIENDA_RETIRO_SIN_SLA} es una tienda abastecedora distinta a la de {DIRECCION_DESPACHO_001}",
   "spec": "tests-app/B2C-127.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y toca \"Confirmar tienda\".\n8. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n9. El usuario toca \"Sí, continuar\".\n10. El sistema muestra el modal \"Por ahora no hay horarios disponibles\".\n11. El usuario toca \"Continuar con esta dirección\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {TIENDA_RETIRO_SIN_SLA}\n- {SKU_VALID_001}\n- {DIRECCION_DESPACHO_001}\n- {COMPRADOR_USER} \n- {COMPRADOR_PASSWORD}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast \"Lo sentimos, no pudimos guardar tu dirección. Por favor, inténtalo nuevamente\" con X; retiro en tienda no queda seteado y el método activo sigue siendo despacho a {DIRECCION_DESPACHO_001}.",
   "form_factor": "app",
   "id": "TC-B2C127-APP-011",
   "name": "Verificar que un error al setear una tienda de retiro sin horarios muestra el toast y no la setea [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP}, {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP}, {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es {DIRECCION_DESPACHO_001} (despacho a domicilio)\n- El carro está vacío\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {SETEO_ENTREGA_API_ENDPOINT}",
   "spec": "tests-app/B2C-127.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y toca \"Confirmar tienda\".\n8. El sistema muestra el modal \"Por ahora no hay horarios disponibles\".\n9. El usuario toca \"Continuar con esta dirección\".\n10. El sistema muestra un loader.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {SETEO_ENTREGA_API_ENDPOINT}\n- {TIENDA_RETIRO_SIN_SLA}\n- {DIRECCION_DESPACHO_001}\n- {HERRAMIENTA_PROXY_APP}\n- {COMPRADOR_USER} \n- {COMPRADOR_PASSWORD}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el modal \"Elige tu método de entrega\" y {TIENDA_RETIRO_SIN_SLA} no queda seteada como método de entrega.",
   "form_factor": "app",
   "id": "TC-B2C127-APP-012",
   "name": "Verificar que Cambiar método de entrega desde el modal sin horarios de una tienda de retiro vuelve a Elige tu método de entrega [App] [Logueado]",
   "observation": "Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro está vacío",
   "spec": "tests-app/B2C-127.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y toca \"Confirmar tienda\".\n8. El sistema muestra el modal \"Por ahora no hay horarios disponibles\".\n9. El usuario toca \"Cambiar método de entrega\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {TIENDA_RETIRO_SIN_SLA}\n- {COMPRADOR_USER} \n- {COMPRADOR_PASSWORD}"
  }
 ]
}
-->
