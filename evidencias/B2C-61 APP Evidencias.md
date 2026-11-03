# B2C-61 APP - Evidencias QA (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-61 APP |
| Última actualización | 2026-10-29 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-61 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 22 |
| Aprobado | 3 |
| **Total** | **25** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-29 | 25 | TC-B2C61-APP-001, TC-B2C61-APP-002, TC-B2C61-APP-003, TC-B2C61-APP-004, TC-B2C61-APP-005, TC-B2C61-APP-006, TC-B2C61-APP-007, TC-B2C61-APP-008, TC-B2C61-APP-009, TC-B2C61-APP-010, TC-B2C61-APP-011, TC-B2C61-APP-012, TC-B2C61-APP-013, TC-B2C61-APP-014, TC-B2C61-APP-015, TC-B2C61-APP-016, TC-B2C61-APP-017, TC-B2C61-APP-018, TC-B2C61-APP-019, TC-B2C61-APP-020, TC-B2C61-APP-021, TC-B2C61-APP-022, TC-B2C61-APP-023, TC-B2C61-APP-024, TC-B2C61-APP-025 |

## Detalle por caso de prueba

### TC-B2C61-APP-001 - Verificar que al setear una dirección se muestra el contenido del segmento de su tienda [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_B} para la tienda de {DIRECCION_OTRA_TIENDA} y {CONTENIDO_DEFAULT} por defecto

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {PD_LANDING_SEGMENTO_URL} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {CONTENIDO_SEGMENTO_A} = TBD
- {CONTENIDO_SEGMENTO_B} = TBD
- {CONTENIDO_DEFAULT} = TBD
- {DIRECCION_OTRA_TIENDA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.

**Resultado esperado**

La landing muestra {CONTENIDO_SEGMENTO_A}, sin interrumpir el flujo del usuario al setear la dirección.

**Resultado obtenido**

Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C61-APP-002 - Verificar que si el segmento de la tienda no tiene contenido se muestra el contenido por defecto [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- La tienda de {DIRECCION_TIENDA_SIN_SEGMENTO} no tiene segmento ni contenido configurado en BM
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_B} para la tienda de {DIRECCION_OTRA_TIENDA} y {CONTENIDO_DEFAULT} por defecto

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {PD_LANDING_SEGMENTO_URL} = TBD
- {DIRECCION_TIENDA_SIN_SEGMENTO} = TBD
- {CONTENIDO_SEGMENTO_A} = TBD
- {CONTENIDO_SEGMENTO_B} = TBD
- {CONTENIDO_DEFAULT} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_TIENDA_SIN_SEGMENTO}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.

**Resultado esperado**

La landing muestra {CONTENIDO_DEFAULT}.

**Resultado obtenido**

Falta dato: {CONTENIDO_SEGMENTO_B}, {DIRECCION_TIENDA_SIN_SEGMENTO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {CONTENIDO_SEGMENTO_B}, {DIRECCION_TIENDA_SIN_SEGMENTO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C61-APP-003 - Verificar que sin tienda asignada se muestra el contenido por defecto [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión nueva sin dirección ni tienda seteada
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_B} para la tienda de {DIRECCION_OTRA_TIENDA} y {CONTENIDO_DEFAULT} por defecto

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {PD_LANDING_SEGMENTO_URL} = TBD
- {CONTENIDO_SEGMENTO_A} = TBD
- {CONTENIDO_SEGMENTO_B} = TBD
- {CONTENIDO_DEFAULT} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD

**Pasos ejecutados**

1. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.

**Resultado esperado**

La landing muestra {CONTENIDO_DEFAULT} y el Store Locator sigue sin tienda asignada.

**Resultado obtenido**

Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C61-APP-004 - Verificar que al cambiar a otra tienda el contenido cambia en la siguiente carga de página [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_B} para la tienda de {DIRECCION_OTRA_TIENDA} y {CONTENIDO_DEFAULT} por defecto

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {PD_LANDING_SEGMENTO_URL} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {CONTENIDO_SEGMENTO_A} = TBD
- {CONTENIDO_SEGMENTO_B} = TBD
- {CONTENIDO_DEFAULT} = TBD

**Pasos ejecutados**

1. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.
2. El sistema muestra {CONTENIDO_SEGMENTO_A}.
3. El usuario toca el Store Locator del navbar.
4. El usuario ingresa {DIRECCION_OTRA_TIENDA} y la confirma.
5. El usuario revisa la landing sin recargar.
6. El usuario vuelve a cargar la landing.

**Resultado esperado**

Sin recargar sigue {CONTENIDO_SEGMENTO_A}; al volver a cargar la landing se muestra {CONTENIDO_SEGMENTO_B}.

**Resultado obtenido**

Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C61-APP-005 - Verificar que al cambiar a una dirección sin cobertura se activa Sin cobertura sin re-asignar segmento [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es {DIRECCION_DESPACHO_001}
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_B} para la tienda de {DIRECCION_OTRA_TIENDA} y {CONTENIDO_DEFAULT} por defecto

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {PD_LANDING_SEGMENTO_URL} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_SIN_COBERTURA} = TBD
- {CONTENIDO_SEGMENTO_A} = TBD
- {CONTENIDO_SEGMENTO_B} = TBD
- {CONTENIDO_DEFAULT} = TBD
- {DIRECCION_OTRA_TIENDA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Aún no llegamos a esta dirección".
7. El usuario toca la X o cierra el modal.
8. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.

**Resultado esperado**

Se muestra el flujo Sin cobertura (B2C-123) y la landing sigue mostrando {CONTENIDO_SEGMENTO_A}.

**Resultado obtenido**

Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C61-APP-006 - Verificar que el segmento del invitado persiste al navegar durante la sesión [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- La dirección {DIRECCION_DESPACHO_001} está seteada como invitado
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_B} para la tienda de {DIRECCION_OTRA_TIENDA} y {CONTENIDO_DEFAULT} por defecto

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {PD_LANDING_SEGMENTO_URL} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {CONTENIDO_SEGMENTO_A} = TBD
- {CONTENIDO_SEGMENTO_B} = TBD
- {CONTENIDO_DEFAULT} = TBD
- {DIRECCION_OTRA_TIENDA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario navega a una PLP y luego a la landing.
3. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.

**Resultado esperado**

La landing sigue mostrando {CONTENIDO_SEGMENTO_A} tras navegar.

**Resultado obtenido**

Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C61-APP-007 - Verificar que el segmento del logueado persiste en su perfil durante la sesión [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección {DIRECCION_DESPACHO_001} está seteada en la cuenta
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_B} para la tienda de {DIRECCION_OTRA_TIENDA} y {CONTENIDO_DEFAULT} por defecto

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {PD_LANDING_SEGMENTO_URL} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {CONTENIDO_SEGMENTO_A} = TBD
- {CONTENIDO_SEGMENTO_B} = TBD
- {CONTENIDO_DEFAULT} = TBD
- {DIRECCION_OTRA_TIENDA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario navega a una PLP.
3. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.

**Resultado esperado**

La landing muestra {CONTENIDO_SEGMENTO_A}.

**Resultado obtenido**

Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C61-APP-008 - Verificar que un producto con stock en la tienda activa se muestra disponible [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: PDP
- La dirección activa es {DIRECCION_DESPACHO_001}
- {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_STOCK_SOLO_TIENDA_A} = TBD

**Pasos ejecutados**

1. El usuario busca {SKU_STOCK_SOLO_TIENDA_A} en la App y abre su PDP.

**Resultado esperado**

{SKU_STOCK_SOLO_TIENDA_A} se muestra disponible con el botón "Agregar" habilitado.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}, {SKU_STOCK_SOLO_TIENDA_A}

**Observación**

Test Data pendiente: {APP_BUILD}, {SKU_STOCK_SOLO_TIENDA_A} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 2 — pdp con la direccion de despacho activa](<B2C-61 APP Evidencias/TC-B2C61-APP-008-android-p02-pdp-con-la-direccion-de-despacho-activa.png>)

![Android · Estado final](<B2C-61 APP Evidencias/TC-B2C61-APP-008-android.png>)

---

### TC-B2C61-APP-009 - Verificar que un producto sin stock en la tienda activa se muestra no disponible y sin Agregar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: SRP
- La dirección activa es {DIRECCION_OTRA_TIENDA}
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda de {DIRECCION_OTRA_TIENDA}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_OTRA_TIENDA} = TBD
- {SKU_STOCK_SOLO_TIENDA_A} = TBD
- {SEARCH_TERM_SKU_TIENDA_A} = TBD

**Pasos ejecutados**

1. El usuario busca {SEARCH_TERM_SKU_TIENDA_A}.
2. El sistema muestra resultados con el shelf de {SKU_STOCK_SOLO_TIENDA_A}.

**Resultado esperado**

{SKU_STOCK_SOLO_TIENDA_A} se muestra con etiqueta visible de no disponible y sin opción de agregar al carro.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Verificado en Android.

**Evidencia**

![Android · Paso 3 — resultados con el shelf del producto](<B2C-61 APP Evidencias/TC-B2C61-APP-009-android-p03-resultados-con-el-shelf-del-producto.png>)

![Android · Estado final](<B2C-61 APP Evidencias/TC-B2C61-APP-009-android.png>)

---

### TC-B2C61-APP-010 - Verificar que un producto inactivo para la tienda activa no aparece en catálogo ni en PDP [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: SRP
- La dirección activa es {DIRECCION_DESPACHO_001}
- {SKU_INACTIVO_TIENDA_A} está inactivo para la tienda de {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_INACTIVO_TIENDA_A} = TBD

**Pasos ejecutados**

1. El usuario busca {SKU_INACTIVO_TIENDA_A}.
2. El usuario busca {SKU_INACTIVO_TIENDA_A} en la App y abre su PDP.

**Resultado esperado**

{SKU_INACTIVO_TIENDA_A} no aparece en los resultados y su PDP no se muestra.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_INACTIVO_TIENDA_A} aparece en la búsqueda como «Pronto disponible» (producto sin stock), por lo que no se puede confirmar que esté inactivo para la tienda de {DIRECCION_DESPACHO_001}. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {SKU_INACTIVO_TIENDA_A} aparece en la búsqueda como «Pronto disponible» (producto sin stock), por lo que no se puede confirmar que esté inactivo para la tienda de {DIRECCION_DESPACHO_001}. Verificado en Android.

**Evidencia**

![Android · Paso 3 — resultados de la busqueda del producto inactivo](<B2C-61 APP Evidencias/TC-B2C61-APP-010-android-p03-resultados-de-la-busqueda-del-producto-inactivo.png>)

![Android · Estado final](<B2C-61 APP Evidencias/TC-B2C61-APP-010-android.png>)

---

### TC-B2C61-APP-011 - Verificar que al cambiar de tienda un producto sin stock en la nueva tienda queda no disponible [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_STOCK_SOLO_TIENDA_A}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {SKU_STOCK_SOLO_TIENDA_A} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse" (B2C-122).
7. El usuario toca "Sí, continuar".
8. El usuario abre la App {APP_BUILD} y toca el ícono del carro.

**Resultado esperado**

Se muestra el modal de B2C-122 y, tras continuar, {SKU_STOCK_SOLO_TIENDA_A} queda como no disponible para la nueva tienda.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA}, así que no queda no disponible al cambiar de tienda. Comprobado al ejecutar los TC 012 y 013 de la misma HU en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA}, así que no queda no disponible al cambiar de tienda. Comprobado al ejecutar los TC 012 y 013 de la misma HU en Android; este TC no se ejecutó por separado.

---

### TC-B2C61-APP-012 - Verificar que al cambiar de tienda un producto que ahora tiene stock se habilita [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es {DIRECCION_OTRA_TIENDA}, donde {SKU_STOCK_SOLO_TIENDA_A} no tiene stock
- El carro está vacío

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {SKU_STOCK_SOLO_TIENDA_A} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario busca {SKU_STOCK_SOLO_TIENDA_A} en la App y abre su PDP.

**Resultado esperado**

{SKU_STOCK_SOLO_TIENDA_A} se muestra disponible con "Agregar" habilitado.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Verificado en Android.

**Evidencia**

![Android · Estado final](<B2C-61 APP Evidencias/TC-B2C61-APP-012-android.png>)

---

### TC-B2C61-APP-013 - Verificar que la PDP de un producto sin stock en la tienda activa deshabilita Agregar con mensaje [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: PDP
- La dirección activa es {DIRECCION_OTRA_TIENDA}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_OTRA_TIENDA} = TBD
- {SKU_STOCK_SOLO_TIENDA_A} = TBD

**Pasos ejecutados**

1. El usuario busca {SKU_STOCK_SOLO_TIENDA_A} en la App y abre su PDP.

**Resultado esperado**

El botón "Agregar" aparece deshabilitado, se muestra "Este producto no esta disponible para tu dirección" y no se informa disponibilidad en otras tiendas.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Verificado en Android.

**Evidencia**

![Android · Paso 2 — pdp del producto](<B2C-61 APP Evidencias/TC-B2C61-APP-013-android-p02-pdp-del-producto.png>)

![Android · Estado final](<B2C-61 APP Evidencias/TC-B2C61-APP-013-android.png>)

---

### TC-B2C61-APP-014 - Verificar que solo se muestran las promociones vigentes de la tienda activa [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: PDP
- La dirección activa es {DIRECCION_OTRA_TIENDA}
- {SKU_PROMO_SOLO_TIENDA_A} tiene una promoción vigente solo para la tienda de {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {SKU_PROMO_SOLO_TIENDA_A} = TBD

**Pasos ejecutados**

1. El usuario busca {SKU_PROMO_SOLO_TIENDA_A} en la App y abre su PDP.

**Resultado esperado**

{SKU_PROMO_SOLO_TIENDA_A} muestra su precio base, sin el descuento de la promoción de la tienda A.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_PROMO_SOLO_TIENDA_A} no tiene promoción vigente en la tienda de {DIRECCION_DESPACHO_001} (comprobado en el TC 015), así que no se puede verificar que la promoción no se muestre en otra tienda. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {SKU_PROMO_SOLO_TIENDA_A} no tiene promoción vigente en la tienda de {DIRECCION_DESPACHO_001} (comprobado en el TC 015), así que no se puede verificar que la promoción no se muestre en otra tienda. Verificado en Android.

**Evidencia**

![Android · Paso 2 — pdp en la tienda sin la promocion](<B2C-61 APP Evidencias/TC-B2C61-APP-014-android-p02-pdp-en-la-tienda-sin-la-promocion.png>)

![Android · Estado final](<B2C-61 APP Evidencias/TC-B2C61-APP-014-android.png>)

---

### TC-B2C61-APP-015 - Verificar que la promoción de la tienda activa se refleja en el precio con descuento [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: PDP
- La dirección activa es {DIRECCION_DESPACHO_001}
- {SKU_PROMO_SOLO_TIENDA_A} tiene una promoción vigente solo para la tienda de {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_PROMO_SOLO_TIENDA_A} = TBD

**Pasos ejecutados**

1. El usuario busca {SKU_PROMO_SOLO_TIENDA_A} en la App y abre su PDP.

**Resultado esperado**

{SKU_PROMO_SOLO_TIENDA_A} muestra el precio con el descuento de la promoción de la tienda A.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_PROMO_SOLO_TIENDA_A} no muestra promoción vigente en la tienda de {DIRECCION_DESPACHO_001}. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {SKU_PROMO_SOLO_TIENDA_A} no muestra promoción vigente en la tienda de {DIRECCION_DESPACHO_001}. Verificado en Android.

**Evidencia**

![Android · Paso 2 — pdp en la tienda con la promocion](<B2C-61 APP Evidencias/TC-B2C61-APP-015-android-p02-pdp-en-la-tienda-con-la-promocion.png>)

![Android · Estado final](<B2C-61 APP Evidencias/TC-B2C61-APP-015-android.png>)

---

### TC-B2C61-APP-016 - Verificar que un usuario sin Unipay ve el ahorro potencial de la promoción Unipay [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: PDP
- La dirección activa es {DIRECCION_DESPACHO_001}
- El usuario no tiene Unipay contratado

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_UNIPAY_001} = TBD

**Pasos ejecutados**

1. El usuario busca {SKU_UNIPAY_001} en la App y abre su PDP.

**Resultado esperado**

Se muestra el precio Unipay de {SKU_UNIPAY_001} como ahorro potencial.

**Resultado obtenido**

Ejecutado en Android: la PDP muestra «Promoción % Unipay» y el precio Unipay como ahorro potencial.

**Observación**

Ejecutado en Android: la PDP muestra «Promoción % Unipay» y el precio Unipay como ahorro potencial. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 2 — pdp del producto con promocion unipay](<B2C-61 APP Evidencias/TC-B2C61-APP-016-android-p02-pdp-del-producto-con-promocion-unipay.png>)

![Android · Estado final](<B2C-61 APP Evidencias/TC-B2C61-APP-016-android.png>)

---

### TC-B2C61-APP-017 - Verificar que los datos de entrega seleccionados quedan asociados al basket con su warehouseId [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- {SKU_VALID_001} tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001} (warehouseId {WAREHOUSE_ID_DESPACHO_001})
- {HERRAMIENTA_PROXY_APP} configurado para inspeccionar la request {CART_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {WAREHOUSE_ID_DESPACHO_001}
- {SKU_VALID_001}
- {CART_API_ENDPOINT}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y toca "Continuar".
8. El usuario busca {SKU_VALID_001} y toca "Agregar".
9. El usuario toca el ícono del carro.
10. El usuario revisa en {HERRAMIENTA_PROXY_APP} la respuesta de {CART_API_ENDPOINT} (basket): dirección de envío y warehouseId.
11. El usuario cierra y vuelve a abrir la App, y abre el carro.
12. El usuario vuelve a revisar la respuesta de {CART_API_ENDPOINT}.

**Resultado esperado**

El basket contiene {SKU_VALID_001} y tiene asociados la dirección de envío {DIRECCION_DESPACHO_001} y el warehouseId {WAREHOUSE_ID_DESPACHO_001}; tras recargar, el basket mantiene la misma dirección y warehouseId.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C61-APP-018 - Verificar que al cambiar a una tienda válida con cobertura y sin segmento configurado se aplica el contenido por defecto [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- {DIRECCION_TIENDA_SIN_SEGMENTO} tiene cobertura y SLAs, y su tienda abastecedora (distinta a la de {DIRECCION_DESPACHO_001}) no tiene segmento configurado en BM
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_B} para la tienda de {DIRECCION_OTRA_TIENDA} y {CONTENIDO_DEFAULT} por defecto

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {USER_AUTH_001}
- {PD_LANDING_SEGMENTO_URL}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_OTRA_TIENDA}
- {DIRECCION_TIENDA_SIN_SEGMENTO}
- {CONTENIDO_SEGMENTO_A}
- {CONTENIDO_SEGMENTO_B}
- {CONTENIDO_DEFAULT}

**Pasos ejecutados**

1. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.
2. El sistema muestra {CONTENIDO_SEGMENTO_A}.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_TIENDA_SIN_SEGMENTO}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y toca "Continuar".
8. El usuario revisa que no se muestre el modal "Aún no llegamos a esta dirección" y que la dirección quede seteada.
9. El usuario vuelve a cargar la landing.

**Resultado esperado**

La dirección {DIRECCION_TIENDA_SIN_SEGMENTO} queda seteada sin pasar por el flujo Sin cobertura (B2C-123) y, al volver a cargar la landing, se muestra {CONTENIDO_DEFAULT} (fallback), no {CONTENIDO_SEGMENTO_A}.

**Resultado obtenido**

Falta dato: {CONTENIDO_SEGMENTO_B}, {DIRECCION_TIENDA_SIN_SEGMENTO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {CONTENIDO_SEGMENTO_B}, {DIRECCION_TIENDA_SIN_SEGMENTO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C61-APP-019 - Verificar que un usuario sin dirección con productos en el carro no puede avanzar al pago [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {SIN_DIRECCION_USER} / {SIN_DIRECCION_PASSWORD}, sin direcciones guardadas
- Sin dirección ni tienda seteada en el Store Locator (navegación con la tienda por defecto)
- El carro está vacío

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {SIN_DIRECCION_USER}
- {SIN_DIRECCION_PASSWORD}
- {SKU_VALID_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario verifica que el Store Locator no tiene dirección ni tienda seteada.
4. El usuario busca {SKU_VALID_001} y toca "Agregar".
5. El usuario toca el ícono del carro.
6. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
7. El usuario intenta avanzar al pago sin seleccionar dirección ni tienda.

**Resultado esperado**

El sistema no permite avanzar al pago: solicita seleccionar una dirección o tienda con cobertura (Store Locator) y no se puede completar la compra mientras no haya una dirección válida.

**Resultado obtenido**

Ejecutado en Android con la cuenta sin direcciones: al tocar «Agregar» sin dirección se abre el modal «Elige tu método de entrega».

**Observación**

Ejecutado en Android con la cuenta sin direcciones: al tocar «Agregar» sin dirección se abre el modal «Elige tu método de entrega». iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 3 — home sin direccion ni tienda seteada](<B2C-61 APP Evidencias/TC-B2C61-APP-019-android-p03-home-sin-direccion-ni-tienda-seteada.png>)

![Android · Paso 5 — pantalla tras tocar agregar sin direccion](<B2C-61 APP Evidencias/TC-B2C61-APP-019-android-p05-pantalla-tras-tocar-agregar-sin-direccion.png>)

![Android · Estado final](<B2C-61 APP Evidencias/TC-B2C61-APP-019-android.png>)

---

### TC-B2C61-APP-020 - Verificar que al pasar de retiro en tienda a despacho a domicilio se asigna el segmento de la tienda abastecedora de la dirección [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- El método de entrega activo es Retiro en tienda en {TIENDA_RETIRO_001}
- {DIRECCION_DESPACHO_001} es una dirección guardada de la cuenta, con cobertura y SLAs
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de {TIENDA_RETIRO_001} y {CONTENIDO_DEFAULT} por defecto

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {PD_LANDING_SEGMENTO_URL}
- {TIENDA_RETIRO_001}
- {DIRECCION_DESPACHO_001}
- {CONTENIDO_SEGMENTO_A}
- {CONTENIDO_SEGMENTO_RETIRO}
- {CONTENIDO_DEFAULT}

**Pasos ejecutados**

1. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.
2. El sistema muestra {CONTENIDO_SEGMENTO_RETIRO}.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega".
5. El usuario toca la pestaña "Despacho a domicilio", elige la dirección guardada {DIRECCION_DESPACHO_001} y toca "Confirmar".
6. El usuario vuelve a cargar la landing.

**Resultado esperado**

La dirección guardada {DIRECCION_DESPACHO_001} queda como método de entrega activo sin pedir OTP y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_A} (segmento de la tienda abastecedora de la dirección).

**Resultado obtenido**

Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C61-APP-021 - Verificar que al pasar de despacho a domicilio a retiro en tienda se asigna el segmento de la tienda de retiro [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es {DIRECCION_DESPACHO_001} (despacho a domicilio)
- {TIENDA_RETIRO_001} tiene cobertura y SLAs, y su tienda abastecedora es distinta a la de {DIRECCION_DESPACHO_001}
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de {TIENDA_RETIRO_001} y {CONTENIDO_DEFAULT} por defecto

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {PD_LANDING_SEGMENTO_URL}
- {DIRECCION_DESPACHO_001}
- {TIENDA_RETIRO_001}
- {CONTENIDO_SEGMENTO_A}
- {CONTENIDO_SEGMENTO_RETIRO}
- {CONTENIDO_DEFAULT}

**Pasos ejecutados**

1. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.
2. El sistema muestra {CONTENIDO_SEGMENTO_A}.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega".
5. El usuario toca la pestaña "Retiro en tienda", elige {TIENDA_RETIRO_001} y toca "Confirmar".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y toca "Continuar".
8. El usuario vuelve a cargar la landing.

**Resultado esperado**

Retiro en tienda en {TIENDA_RETIRO_001} queda como método de entrega activo y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_RETIRO} (segmento de la tienda de retiro), no {CONTENIDO_SEGMENTO_A}.

**Resultado obtenido**

Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C61-APP-022 - Verificar que con retiro en tienda el stock mostrado corresponde a la tienda de retiro [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- El método de entrega activo es Retiro en tienda en {TIENDA_RETIRO_001}
- {SKU_STOCK_SOLO_TIENDA_RETIRO_001} tiene stock en {TIENDA_RETIRO_001} y no tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {TIENDA_RETIRO_001}
- {DIRECCION_DESPACHO_001}
- {SKU_STOCK_SOLO_TIENDA_RETIRO_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y busca {SKU_STOCK_SOLO_TIENDA_RETIRO_001}.
2. El sistema muestra el resultado de búsqueda.
3. El usuario toca el producto.
4. El sistema carga la PDP.
5. El usuario revisa la disponibilidad del producto.

**Resultado esperado**

{SKU_STOCK_SOLO_TIENDA_RETIRO_001} se muestra disponible, con el botón "Agregar" habilitado, porque tiene stock en la tienda de retiro activa {TIENDA_RETIRO_001}.

**Resultado obtenido**

Falta dato: {SKU_STOCK_SOLO_TIENDA_RETIRO_001} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {SKU_STOCK_SOLO_TIENDA_RETIRO_001} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C61-APP-023 - Verificar que al elegir una tienda de retiro sin cobertura se activa Sin cobertura sin re-asignar segmento [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es {DIRECCION_DESPACHO_001} (despacho a domicilio)
- {TIENDA_RETIRO_SIN_COBERTURA} no tiene cobertura
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de {TIENDA_RETIRO_001} y {CONTENIDO_DEFAULT} por defecto

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {PD_LANDING_SEGMENTO_URL}
- {DIRECCION_DESPACHO_001}
- {TIENDA_RETIRO_SIN_COBERTURA}
- {CONTENIDO_SEGMENTO_A}
- {CONTENIDO_DEFAULT}

**Pasos ejecutados**

1. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.
2. El sistema muestra {CONTENIDO_SEGMENTO_A}.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega".
5. El usuario toca la pestaña "Retiro en tienda", elige {TIENDA_RETIRO_SIN_COBERTURA} y toca "Confirmar".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y toca "Continuar".
8. El sistema muestra el modal "Aún no llegamos a esta dirección".
9. El usuario cierra el modal con la X.
10. El usuario vuelve a cargar la landing.

**Resultado esperado**

Se muestra el flujo Sin cobertura (B2C-123) y, al volver a cargar la landing, sigue mostrándose {CONTENIDO_SEGMENTO_A}: el segmento no se re-asigna.

**Resultado obtenido**

Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C61-APP-024 - Verificar que al continuar con una dirección de despacho sin horarios se asigna el segmento de su tienda abastecedora [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_SLA} tiene cobertura y no tiene SLAs disponibles; su tienda abastecedora es distinta a la de {DIRECCION_DESPACHO_001}
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de {TIENDA_RETIRO_001} y {CONTENIDO_DEFAULT} por defecto
- En BM, el segmento de la tienda abastecedora de {DIRECCION_SIN_SLA} tiene el contenido {CONTENIDO_SEGMENTO_SIN_SLA}

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {PD_LANDING_SEGMENTO_URL}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_SLA}
- {CONTENIDO_SEGMENTO_A}
- {CONTENIDO_SEGMENTO_SIN_SLA}

**Pasos ejecutados**

1. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.
2. El sistema muestra {CONTENIDO_SEGMENTO_A}.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y toca "Continuar".
8. El sistema muestra el modal "Por ahora no hay horarios disponibles".
9. El usuario toca "Continuar con esta dirección".
10. El usuario vuelve a cargar la landing.

**Resultado esperado**

{DIRECCION_SIN_SLA} queda seteada con el aviso "Dirección sin horarios disponibles" y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_SIN_SLA} (segmento de su tienda abastecedora).

**Resultado obtenido**

Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {CONTENIDO_SEGMENTO_SIN_SLA}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {CONTENIDO_SEGMENTO_SIN_SLA}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C61-APP-025 - Verificar que al continuar con una tienda de retiro sin horarios se asigna el segmento de esa tienda [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-61.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es {DIRECCION_DESPACHO_001} (despacho a domicilio)
- {TIENDA_RETIRO_SIN_SLA} tiene cobertura y no tiene SLAs disponibles
- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de {TIENDA_RETIRO_001} y {CONTENIDO_DEFAULT} por defecto
- En BM, el segmento de {TIENDA_RETIRO_SIN_SLA} tiene el contenido {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA}

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {PD_LANDING_SEGMENTO_URL}
- {DIRECCION_DESPACHO_001}
- {TIENDA_RETIRO_SIN_SLA}
- {CONTENIDO_SEGMENTO_A}
- {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA}

**Pasos ejecutados**

1. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.
2. El sistema muestra {CONTENIDO_SEGMENTO_A}.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega".
5. El usuario toca la pestaña "Retiro en tienda", elige {TIENDA_RETIRO_SIN_SLA} y toca "Confirmar".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y toca "Continuar".
8. El sistema muestra el modal "Por ahora no hay horarios disponibles".
9. El usuario toca "Continuar con esta dirección".
10. El usuario vuelve a cargar la landing.

**Resultado esperado**

Retiro en tienda en {TIENDA_RETIRO_SIN_SLA} queda seteado con el aviso "Dirección sin horarios disponibles" y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA} (segmento de la tienda de retiro).

**Resultado obtenido**

Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA}, {PD_LANDING_SEGMENTO_URL}, {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA}, {PD_LANDING_SEGMENTO_URL}, {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

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
  "suite": "B2C-61 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-61 APP Test Cases.xlsx",
  "title": "B2C-61 APP - Evidencias QA (Android)",
  "updated_at": "2026-10-29"
 },
 "history": {
  "2026-10-29": [
   "TC-B2C61-APP-001",
   "TC-B2C61-APP-002",
   "TC-B2C61-APP-003",
   "TC-B2C61-APP-004",
   "TC-B2C61-APP-005",
   "TC-B2C61-APP-006",
   "TC-B2C61-APP-007",
   "TC-B2C61-APP-008",
   "TC-B2C61-APP-009",
   "TC-B2C61-APP-010",
   "TC-B2C61-APP-011",
   "TC-B2C61-APP-012",
   "TC-B2C61-APP-013",
   "TC-B2C61-APP-014",
   "TC-B2C61-APP-015",
   "TC-B2C61-APP-016",
   "TC-B2C61-APP-017",
   "TC-B2C61-APP-018",
   "TC-B2C61-APP-019",
   "TC-B2C61-APP-020",
   "TC-B2C61-APP-021",
   "TC-B2C61-APP-022",
   "TC-B2C61-APP-023",
   "TC-B2C61-APP-024",
   "TC-B2C61-APP-025"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La landing muestra {CONTENIDO_SEGMENTO_A}, sin interrumpir el flujo del usuario al setear la dirección.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-001",
   "name": "Verificar que al setear una dirección se muestra el contenido del segmento de su tienda [App] [Guest]",
   "observation": "Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_B} para la tienda de {DIRECCION_OTRA_TIENDA} y {CONTENIDO_DEFAULT} por defecto",
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {PD_LANDING_SEGMENTO_URL} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {CONTENIDO_SEGMENTO_A} = TBD\n- {CONTENIDO_SEGMENTO_B} = TBD\n- {CONTENIDO_DEFAULT} = TBD\n- {DIRECCION_OTRA_TIENDA} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La landing muestra {CONTENIDO_DEFAULT}.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-002",
   "name": "Verificar que si el segmento de la tienda no tiene contenido se muestra el contenido por defecto [App] [Guest]",
   "observation": "Falta dato: {CONTENIDO_SEGMENTO_B}, {DIRECCION_TIENDA_SIN_SEGMENTO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {CONTENIDO_SEGMENTO_B}, {DIRECCION_TIENDA_SIN_SEGMENTO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- La tienda de {DIRECCION_TIENDA_SIN_SEGMENTO} no tiene segmento ni contenido configurado en BM\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_B} para la tienda de {DIRECCION_OTRA_TIENDA} y {CONTENIDO_DEFAULT} por defecto",
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_TIENDA_SIN_SEGMENTO}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {PD_LANDING_SEGMENTO_URL} = TBD\n- {DIRECCION_TIENDA_SIN_SEGMENTO} = TBD\n- {CONTENIDO_SEGMENTO_A} = TBD\n- {CONTENIDO_SEGMENTO_B} = TBD\n- {CONTENIDO_DEFAULT} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La landing muestra {CONTENIDO_DEFAULT} y el Store Locator sigue sin tienda asignada.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-003",
   "name": "Verificar que sin tienda asignada se muestra el contenido por defecto [App] [Guest]",
   "observation": "Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión nueva sin dirección ni tienda seteada\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_B} para la tienda de {DIRECCION_OTRA_TIENDA} y {CONTENIDO_DEFAULT} por defecto",
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {PD_LANDING_SEGMENTO_URL} = TBD\n- {CONTENIDO_SEGMENTO_A} = TBD\n- {CONTENIDO_SEGMENTO_B} = TBD\n- {CONTENIDO_DEFAULT} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Sin recargar sigue {CONTENIDO_SEGMENTO_A}; al volver a cargar la landing se muestra {CONTENIDO_SEGMENTO_B}.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-004",
   "name": "Verificar que al cambiar a otra tienda el contenido cambia en la siguiente carga de página [App] [Guest]",
   "observation": "Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_B} para la tienda de {DIRECCION_OTRA_TIENDA} y {CONTENIDO_DEFAULT} por defecto",
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.\n2. El sistema muestra {CONTENIDO_SEGMENTO_A}.\n3. El usuario toca el Store Locator del navbar.\n4. El usuario ingresa {DIRECCION_OTRA_TIENDA} y la confirma.\n5. El usuario revisa la landing sin recargar.\n6. El usuario vuelve a cargar la landing.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {PD_LANDING_SEGMENTO_URL} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {CONTENIDO_SEGMENTO_A} = TBD\n- {CONTENIDO_SEGMENTO_B} = TBD\n- {CONTENIDO_DEFAULT} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el flujo Sin cobertura (B2C-123) y la landing sigue mostrando {CONTENIDO_SEGMENTO_A}.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-005",
   "name": "Verificar que al cambiar a una dirección sin cobertura se activa Sin cobertura sin re-asignar segmento [App] [Guest]",
   "observation": "Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_B} para la tienda de {DIRECCION_OTRA_TIENDA} y {CONTENIDO_DEFAULT} por defecto",
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n7. El usuario toca la X o cierra el modal.\n8. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {PD_LANDING_SEGMENTO_URL} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_SIN_COBERTURA} = TBD\n- {CONTENIDO_SEGMENTO_A} = TBD\n- {CONTENIDO_SEGMENTO_B} = TBD\n- {CONTENIDO_DEFAULT} = TBD\n- {DIRECCION_OTRA_TIENDA} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La landing sigue mostrando {CONTENIDO_SEGMENTO_A} tras navegar.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-006",
   "name": "Verificar que el segmento del invitado persiste al navegar durante la sesión [App] [Guest]",
   "observation": "Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección {DIRECCION_DESPACHO_001} está seteada como invitado\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_B} para la tienda de {DIRECCION_OTRA_TIENDA} y {CONTENIDO_DEFAULT} por defecto",
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario navega a una PLP y luego a la landing.\n3. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {PD_LANDING_SEGMENTO_URL} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {CONTENIDO_SEGMENTO_A} = TBD\n- {CONTENIDO_SEGMENTO_B} = TBD\n- {CONTENIDO_DEFAULT} = TBD\n- {DIRECCION_OTRA_TIENDA} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La landing muestra {CONTENIDO_SEGMENTO_A}.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-007",
   "name": "Verificar que el segmento del logueado persiste en su perfil durante la sesión [App] [Logueado]",
   "observation": "Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {CONTENIDO_SEGMENTO_B}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección {DIRECCION_DESPACHO_001} está seteada en la cuenta\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_B} para la tienda de {DIRECCION_OTRA_TIENDA} y {CONTENIDO_DEFAULT} por defecto",
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario navega a una PLP.\n3. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {PD_LANDING_SEGMENTO_URL} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {CONTENIDO_SEGMENTO_A} = TBD\n- {CONTENIDO_SEGMENTO_B} = TBD\n- {CONTENIDO_DEFAULT} = TBD\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{SKU_STOCK_SOLO_TIENDA_A} se muestra disponible con el botón \"Agregar\" habilitado.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-008",
   "name": "Verificar que un producto con stock en la tienda activa se muestra disponible [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD}, {SKU_STOCK_SOLO_TIENDA_A} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}, {SKU_STOCK_SOLO_TIENDA_A}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: PDP\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — pdp con la direccion de despacho activa",
     "file": "TC-B2C61-APP-008-android-p02-pdp-con-la-direccion-de-despacho-activa.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C61-APP-008-android.png"
    }
   ],
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario busca {SKU_STOCK_SOLO_TIENDA_A} en la App y abre su PDP.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_STOCK_SOLO_TIENDA_A} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{SKU_STOCK_SOLO_TIENDA_A} se muestra con etiqueta visible de no disponible y sin opción de agregar al carro.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-009",
   "name": "Verificar que un producto sin stock en la tienda activa se muestra no disponible y sin Agregar [App] [Guest]",
   "observation": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: SRP\n- La dirección activa es {DIRECCION_OTRA_TIENDA}\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda de {DIRECCION_OTRA_TIENDA}",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — resultados con el shelf del producto",
     "file": "TC-B2C61-APP-009-android-p03-resultados-con-el-shelf-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C61-APP-009-android.png"
    }
   ],
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario busca {SEARCH_TERM_SKU_TIENDA_A}.\n2. El sistema muestra resultados con el shelf de {SKU_STOCK_SOLO_TIENDA_A}.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {SKU_STOCK_SOLO_TIENDA_A} = TBD\n- {SEARCH_TERM_SKU_TIENDA_A} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{SKU_INACTIVO_TIENDA_A} no aparece en los resultados y su PDP no se muestra.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-010",
   "name": "Verificar que un producto inactivo para la tienda activa no aparece en catálogo ni en PDP [App] [Guest]",
   "observation": "Dato que no cumple la precondición: {SKU_INACTIVO_TIENDA_A} aparece en la búsqueda como «Pronto disponible» (producto sin stock), por lo que no se puede confirmar que esté inactivo para la tienda de {DIRECCION_DESPACHO_001}. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {SKU_INACTIVO_TIENDA_A} aparece en la búsqueda como «Pronto disponible» (producto sin stock), por lo que no se puede confirmar que esté inactivo para la tienda de {DIRECCION_DESPACHO_001}. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: SRP\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {SKU_INACTIVO_TIENDA_A} está inactivo para la tienda de {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — resultados de la busqueda del producto inactivo",
     "file": "TC-B2C61-APP-010-android-p03-resultados-de-la-busqueda-del-producto-inactivo.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C61-APP-010-android.png"
    }
   ],
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario busca {SKU_INACTIVO_TIENDA_A}.\n2. El usuario busca {SKU_INACTIVO_TIENDA_A} en la App y abre su PDP.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_INACTIVO_TIENDA_A} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el modal de B2C-122 y, tras continuar, {SKU_STOCK_SOLO_TIENDA_A} queda como no disponible para la nueva tienda.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-011",
   "name": "Verificar que al cambiar de tienda un producto sin stock en la nueva tienda queda no disponible [App] [Guest]",
   "observation": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA}, así que no queda no disponible al cambiar de tienda. Comprobado al ejecutar los TC 012 y 013 de la misma HU en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA}, así que no queda no disponible al cambiar de tienda. Comprobado al ejecutar los TC 012 y 013 de la misma HU en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_STOCK_SOLO_TIENDA_A}",
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\" (B2C-122).\n7. El usuario toca \"Sí, continuar\".\n8. El usuario abre la App {APP_BUILD} y toca el ícono del carro.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {SKU_STOCK_SOLO_TIENDA_A} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{SKU_STOCK_SOLO_TIENDA_A} se muestra disponible con \"Agregar\" habilitado.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-012",
   "name": "Verificar que al cambiar de tienda un producto que ahora tiene stock se habilita [App] [Guest]",
   "observation": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es {DIRECCION_OTRA_TIENDA}, donde {SKU_STOCK_SOLO_TIENDA_A} no tiene stock\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C61-APP-012-android.png"
    }
   ],
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario busca {SKU_STOCK_SOLO_TIENDA_A} en la App y abre su PDP.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {SKU_STOCK_SOLO_TIENDA_A} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El botón \"Agregar\" aparece deshabilitado, se muestra \"Este producto no esta disponible para tu dirección\" y no se informa disponibilidad en otras tiendas.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-013",
   "name": "Verificar que la PDP de un producto sin stock en la tienda activa deshabilita Agregar con mensaje [App] [Guest]",
   "observation": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: PDP\n- La dirección activa es {DIRECCION_OTRA_TIENDA}",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — pdp del producto",
     "file": "TC-B2C61-APP-013-android-p02-pdp-del-producto.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C61-APP-013-android.png"
    }
   ],
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario busca {SKU_STOCK_SOLO_TIENDA_A} en la App y abre su PDP.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {SKU_STOCK_SOLO_TIENDA_A} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{SKU_PROMO_SOLO_TIENDA_A} muestra su precio base, sin el descuento de la promoción de la tienda A.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-014",
   "name": "Verificar que solo se muestran las promociones vigentes de la tienda activa [App] [Guest]",
   "observation": "Dato que no cumple la precondición: {SKU_PROMO_SOLO_TIENDA_A} no tiene promoción vigente en la tienda de {DIRECCION_DESPACHO_001} (comprobado en el TC 015), así que no se puede verificar que la promoción no se muestre en otra tienda. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {SKU_PROMO_SOLO_TIENDA_A} no tiene promoción vigente en la tienda de {DIRECCION_DESPACHO_001} (comprobado en el TC 015), así que no se puede verificar que la promoción no se muestre en otra tienda. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: PDP\n- La dirección activa es {DIRECCION_OTRA_TIENDA}\n- {SKU_PROMO_SOLO_TIENDA_A} tiene una promoción vigente solo para la tienda de {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — pdp en la tienda sin la promocion",
     "file": "TC-B2C61-APP-014-android-p02-pdp-en-la-tienda-sin-la-promocion.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C61-APP-014-android.png"
    }
   ],
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario busca {SKU_PROMO_SOLO_TIENDA_A} en la App y abre su PDP.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {SKU_PROMO_SOLO_TIENDA_A} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{SKU_PROMO_SOLO_TIENDA_A} muestra el precio con el descuento de la promoción de la tienda A.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-015",
   "name": "Verificar que la promoción de la tienda activa se refleja en el precio con descuento [App] [Guest]",
   "observation": "Dato que no cumple la precondición: {SKU_PROMO_SOLO_TIENDA_A} no muestra promoción vigente en la tienda de {DIRECCION_DESPACHO_001}. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {SKU_PROMO_SOLO_TIENDA_A} no muestra promoción vigente en la tienda de {DIRECCION_DESPACHO_001}. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: PDP\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {SKU_PROMO_SOLO_TIENDA_A} tiene una promoción vigente solo para la tienda de {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — pdp en la tienda con la promocion",
     "file": "TC-B2C61-APP-015-android-p02-pdp-en-la-tienda-con-la-promocion.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C61-APP-015-android.png"
    }
   ],
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario busca {SKU_PROMO_SOLO_TIENDA_A} en la App y abre su PDP.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_PROMO_SOLO_TIENDA_A} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el precio Unipay de {SKU_UNIPAY_001} como ahorro potencial.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-016",
   "name": "Verificar que un usuario sin Unipay ve el ahorro potencial de la promoción Unipay [App] [Guest]",
   "observation": "Ejecutado en Android: la PDP muestra «Promoción % Unipay» y el precio Unipay como ahorro potencial. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: la PDP muestra «Promoción % Unipay» y el precio Unipay como ahorro potencial.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: PDP\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El usuario no tiene Unipay contratado",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — pdp del producto con promocion unipay",
     "file": "TC-B2C61-APP-016-android-p02-pdp-del-producto-con-promocion-unipay.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C61-APP-016-android.png"
    }
   ],
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario busca {SKU_UNIPAY_001} en la App y abre su PDP.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_UNIPAY_001} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El basket contiene {SKU_VALID_001} y tiene asociados la dirección de envío {DIRECCION_DESPACHO_001} y el warehouseId {WAREHOUSE_ID_DESPACHO_001}; tras recargar, el basket mantiene la misma dirección y warehouseId.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-017",
   "name": "Verificar que los datos de entrega seleccionados quedan asociados al basket con su warehouseId [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- {SKU_VALID_001} tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001} (warehouseId {WAREHOUSE_ID_DESPACHO_001})\n- {HERRAMIENTA_PROXY_APP} configurado para inspeccionar la request {CART_API_ENDPOINT}",
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y toca \"Continuar\".\n8. El usuario busca {SKU_VALID_001} y toca \"Agregar\".\n9. El usuario toca el ícono del carro.\n10. El usuario revisa en {HERRAMIENTA_PROXY_APP} la respuesta de {CART_API_ENDPOINT} (basket): dirección de envío y warehouseId.\n11. El usuario cierra y vuelve a abrir la App, y abre el carro.\n12. El usuario vuelve a revisar la respuesta de {CART_API_ENDPOINT}.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {WAREHOUSE_ID_DESPACHO_001}\n- {SKU_VALID_001}\n- {CART_API_ENDPOINT}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La dirección {DIRECCION_TIENDA_SIN_SEGMENTO} queda seteada sin pasar por el flujo Sin cobertura (B2C-123) y, al volver a cargar la landing, se muestra {CONTENIDO_DEFAULT} (fallback), no {CONTENIDO_SEGMENTO_A}.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-018",
   "name": "Verificar que al cambiar a una tienda válida con cobertura y sin segmento configurado se aplica el contenido por defecto [App] [Logueado]",
   "observation": "Falta dato: {CONTENIDO_SEGMENTO_B}, {DIRECCION_TIENDA_SIN_SEGMENTO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {CONTENIDO_SEGMENTO_B}, {DIRECCION_TIENDA_SIN_SEGMENTO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- {DIRECCION_TIENDA_SIN_SEGMENTO} tiene cobertura y SLAs, y su tienda abastecedora (distinta a la de {DIRECCION_DESPACHO_001}) no tiene segmento configurado en BM\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_B} para la tienda de {DIRECCION_OTRA_TIENDA} y {CONTENIDO_DEFAULT} por defecto",
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.\n2. El sistema muestra {CONTENIDO_SEGMENTO_A}.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_TIENDA_SIN_SEGMENTO}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y toca \"Continuar\".\n8. El usuario revisa que no se muestre el modal \"Aún no llegamos a esta dirección\" y que la dirección quede seteada.\n9. El usuario vuelve a cargar la landing.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {USER_AUTH_001}\n- {PD_LANDING_SEGMENTO_URL}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_OTRA_TIENDA}\n- {DIRECCION_TIENDA_SIN_SEGMENTO}\n- {CONTENIDO_SEGMENTO_A}\n- {CONTENIDO_SEGMENTO_B}\n- {CONTENIDO_DEFAULT}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El sistema no permite avanzar al pago: solicita seleccionar una dirección o tienda con cobertura (Store Locator) y no se puede completar la compra mientras no haya una dirección válida.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-019",
   "name": "Verificar que un usuario sin dirección con productos en el carro no puede avanzar al pago [App] [Logueado]",
   "observation": "Ejecutado en Android con la cuenta sin direcciones: al tocar «Agregar» sin dirección se abre el modal «Elige tu método de entrega». iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android con la cuenta sin direcciones: al tocar «Agregar» sin dirección se abre el modal «Elige tu método de entrega».",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {SIN_DIRECCION_USER} / {SIN_DIRECCION_PASSWORD}, sin direcciones guardadas\n- Sin dirección ni tienda seteada en el Store Locator (navegación con la tienda por defecto)\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — home sin direccion ni tienda seteada",
     "file": "TC-B2C61-APP-019-android-p03-home-sin-direccion-ni-tienda-seteada.png"
    },
    {
     "caption": "Android · Paso 5 — pantalla tras tocar agregar sin direccion",
     "file": "TC-B2C61-APP-019-android-p05-pantalla-tras-tocar-agregar-sin-direccion.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C61-APP-019-android.png"
    }
   ],
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario verifica que el Store Locator no tiene dirección ni tienda seteada.\n4. El usuario busca {SKU_VALID_001} y toca \"Agregar\".\n5. El usuario toca el ícono del carro.\n6. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n7. El usuario intenta avanzar al pago sin seleccionar dirección ni tienda.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {SIN_DIRECCION_USER}\n- {SIN_DIRECCION_PASSWORD}\n- {SKU_VALID_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La dirección guardada {DIRECCION_DESPACHO_001} queda como método de entrega activo sin pedir OTP y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_A} (segmento de la tienda abastecedora de la dirección).",
   "form_factor": "app",
   "id": "TC-B2C61-APP-020",
   "name": "Verificar que al pasar de retiro en tienda a despacho a domicilio se asigna el segmento de la tienda abastecedora de la dirección [App] [Logueado]",
   "observation": "Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- El método de entrega activo es Retiro en tienda en {TIENDA_RETIRO_001}\n- {DIRECCION_DESPACHO_001} es una dirección guardada de la cuenta, con cobertura y SLAs\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de {TIENDA_RETIRO_001} y {CONTENIDO_DEFAULT} por defecto",
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.\n2. El sistema muestra {CONTENIDO_SEGMENTO_RETIRO}.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\".\n5. El usuario toca la pestaña \"Despacho a domicilio\", elige la dirección guardada {DIRECCION_DESPACHO_001} y toca \"Confirmar\".\n6. El usuario vuelve a cargar la landing.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {PD_LANDING_SEGMENTO_URL}\n- {TIENDA_RETIRO_001}\n- {DIRECCION_DESPACHO_001}\n- {CONTENIDO_SEGMENTO_A}\n- {CONTENIDO_SEGMENTO_RETIRO}\n- {CONTENIDO_DEFAULT}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Retiro en tienda en {TIENDA_RETIRO_001} queda como método de entrega activo y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_RETIRO} (segmento de la tienda de retiro), no {CONTENIDO_SEGMENTO_A}.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-021",
   "name": "Verificar que al pasar de despacho a domicilio a retiro en tienda se asigna el segmento de la tienda de retiro [App] [Logueado]",
   "observation": "Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es {DIRECCION_DESPACHO_001} (despacho a domicilio)\n- {TIENDA_RETIRO_001} tiene cobertura y SLAs, y su tienda abastecedora es distinta a la de {DIRECCION_DESPACHO_001}\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de {TIENDA_RETIRO_001} y {CONTENIDO_DEFAULT} por defecto",
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.\n2. El sistema muestra {CONTENIDO_SEGMENTO_A}.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\".\n5. El usuario toca la pestaña \"Retiro en tienda\", elige {TIENDA_RETIRO_001} y toca \"Confirmar\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y toca \"Continuar\".\n8. El usuario vuelve a cargar la landing.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {PD_LANDING_SEGMENTO_URL}\n- {DIRECCION_DESPACHO_001}\n- {TIENDA_RETIRO_001}\n- {CONTENIDO_SEGMENTO_A}\n- {CONTENIDO_SEGMENTO_RETIRO}\n- {CONTENIDO_DEFAULT}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{SKU_STOCK_SOLO_TIENDA_RETIRO_001} se muestra disponible, con el botón \"Agregar\" habilitado, porque tiene stock en la tienda de retiro activa {TIENDA_RETIRO_001}.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-022",
   "name": "Verificar que con retiro en tienda el stock mostrado corresponde a la tienda de retiro [App] [Logueado]",
   "observation": "Falta dato: {SKU_STOCK_SOLO_TIENDA_RETIRO_001} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {SKU_STOCK_SOLO_TIENDA_RETIRO_001} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- El método de entrega activo es Retiro en tienda en {TIENDA_RETIRO_001}\n- {SKU_STOCK_SOLO_TIENDA_RETIRO_001} tiene stock en {TIENDA_RETIRO_001} y no tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001}",
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y busca {SKU_STOCK_SOLO_TIENDA_RETIRO_001}.\n2. El sistema muestra el resultado de búsqueda.\n3. El usuario toca el producto.\n4. El sistema carga la PDP.\n5. El usuario revisa la disponibilidad del producto.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {TIENDA_RETIRO_001}\n- {DIRECCION_DESPACHO_001}\n- {SKU_STOCK_SOLO_TIENDA_RETIRO_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el flujo Sin cobertura (B2C-123) y, al volver a cargar la landing, sigue mostrándose {CONTENIDO_SEGMENTO_A}: el segmento no se re-asigna.",
   "form_factor": "app",
   "id": "TC-B2C61-APP-023",
   "name": "Verificar que al elegir una tienda de retiro sin cobertura se activa Sin cobertura sin re-asignar segmento [App] [Logueado]",
   "observation": "Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es {DIRECCION_DESPACHO_001} (despacho a domicilio)\n- {TIENDA_RETIRO_SIN_COBERTURA} no tiene cobertura\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de {TIENDA_RETIRO_001} y {CONTENIDO_DEFAULT} por defecto",
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.\n2. El sistema muestra {CONTENIDO_SEGMENTO_A}.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\".\n5. El usuario toca la pestaña \"Retiro en tienda\", elige {TIENDA_RETIRO_SIN_COBERTURA} y toca \"Confirmar\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y toca \"Continuar\".\n8. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n9. El usuario cierra el modal con la X.\n10. El usuario vuelve a cargar la landing.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {PD_LANDING_SEGMENTO_URL}\n- {DIRECCION_DESPACHO_001}\n- {TIENDA_RETIRO_SIN_COBERTURA}\n- {CONTENIDO_SEGMENTO_A}\n- {CONTENIDO_DEFAULT}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{DIRECCION_SIN_SLA} queda seteada con el aviso \"Dirección sin horarios disponibles\" y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_SIN_SLA} (segmento de su tienda abastecedora).",
   "form_factor": "app",
   "id": "TC-B2C61-APP-024",
   "name": "Verificar que al continuar con una dirección de despacho sin horarios se asigna el segmento de su tienda abastecedora [App] [Logueado]",
   "observation": "Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {CONTENIDO_SEGMENTO_SIN_SLA}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {CONTENIDO_SEGMENTO_SIN_SLA}, {PD_LANDING_SEGMENTO_URL} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_SLA} tiene cobertura y no tiene SLAs disponibles; su tienda abastecedora es distinta a la de {DIRECCION_DESPACHO_001}\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de {TIENDA_RETIRO_001} y {CONTENIDO_DEFAULT} por defecto\n- En BM, el segmento de la tienda abastecedora de {DIRECCION_SIN_SLA} tiene el contenido {CONTENIDO_SEGMENTO_SIN_SLA}",
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.\n2. El sistema muestra {CONTENIDO_SEGMENTO_A}.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y toca \"Continuar\".\n8. El sistema muestra el modal \"Por ahora no hay horarios disponibles\".\n9. El usuario toca \"Continuar con esta dirección\".\n10. El usuario vuelve a cargar la landing.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {PD_LANDING_SEGMENTO_URL}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_SLA}\n- {CONTENIDO_SEGMENTO_A}\n- {CONTENIDO_SEGMENTO_SIN_SLA}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Retiro en tienda en {TIENDA_RETIRO_SIN_SLA} queda seteado con el aviso \"Dirección sin horarios disponibles\" y, al volver a cargar la landing, se muestra {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA} (segmento de la tienda de retiro).",
   "form_factor": "app",
   "id": "TC-B2C61-APP-025",
   "name": "Verificar que al continuar con una tienda de retiro sin horarios se asigna el segmento de esa tienda [App] [Logueado]",
   "observation": "Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA}, {PD_LANDING_SEGMENTO_URL}, {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {CONTENIDO_SEGMENTO_RETIRO}, {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA}, {PD_LANDING_SEGMENTO_URL}, {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es {DIRECCION_DESPACHO_001} (despacho a domicilio)\n- {TIENDA_RETIRO_SIN_SLA} tiene cobertura y no tiene SLAs disponibles\n- En BM, la landing {PD_LANDING_SEGMENTO_URL} tiene un componente con contenido {CONTENIDO_SEGMENTO_A} para el segmento de la tienda de {DIRECCION_DESPACHO_001}, {CONTENIDO_SEGMENTO_RETIRO} para el segmento de {TIENDA_RETIRO_001} y {CONTENIDO_DEFAULT} por defecto\n- En BM, el segmento de {TIENDA_RETIRO_SIN_SLA} tiene el contenido {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA}",
   "spec": "tests-app/B2C-61.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la landing equivalente a {PD_LANDING_SEGMENTO_URL} en la App.\n2. El sistema muestra {CONTENIDO_SEGMENTO_A}.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\".\n5. El usuario toca la pestaña \"Retiro en tienda\", elige {TIENDA_RETIRO_SIN_SLA} y toca \"Confirmar\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y toca \"Continuar\".\n8. El sistema muestra el modal \"Por ahora no hay horarios disponibles\".\n9. El usuario toca \"Continuar con esta dirección\".\n10. El usuario vuelve a cargar la landing.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {PD_LANDING_SEGMENTO_URL}\n- {DIRECCION_DESPACHO_001}\n- {TIENDA_RETIRO_SIN_SLA}\n- {CONTENIDO_SEGMENTO_A}\n- {CONTENIDO_SEGMENTO_TIENDA_SIN_SLA}"
  }
 ]
}
-->
