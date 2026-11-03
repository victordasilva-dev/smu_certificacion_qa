# B2C-126 APP - Evidencias QA (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-126 APP |
| Última actualización | 2026-10-29 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-126 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 11 |
| Aprobado | 1 |
| **Total** | **12** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-29 | 12 | TC-B2C126-APP-001, TC-B2C126-APP-002, TC-B2C126-APP-003, TC-B2C126-APP-004, TC-B2C126-APP-005, TC-B2C126-APP-006, TC-B2C126-APP-007, TC-B2C126-APP-008, TC-B2C126-APP-009, TC-B2C126-APP-010, TC-B2C126-APP-011, TC-B2C126-APP-012 |

## Detalle por caso de prueba

### TC-B2C126-APP-001 - Verificar que Sí, continuar elimina los no disponibles, aplica el cambio y redirige al Home [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-126.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de {DIRECCION_OTRA_TIENDA}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_STOCK_SOLO_TIENDA_A} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".
8. El usuario abre la App {APP_BUILD} y toca el ícono del carro.

**Resultado esperado**

El usuario llega al Home con {DIRECCION_OTRA_TIENDA} seteada y el carro solo contiene {SKU_VALID_001}.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.

---

### TC-B2C126-APP-002 - Verificar que tras el cambio con productos no disponibles el Home muestra el toast con Revisar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-126.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de {DIRECCION_OTRA_TIENDA}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_STOCK_SOLO_TIENDA_A} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".

**Resultado esperado**

El Home muestra el toast de alerta "Algunos de los productos ya no están disponibles" con el botón "Revisar", que persiste hasta cerrarlo con la X.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.

---

### TC-B2C126-APP-003 - Verificar que si todos los productos siguen disponibles no se muestra el toast [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-126.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene solo {SKU_VALID_001}, con stock en ambas tiendas

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".

**Resultado esperado**

El cambio se aplica y no se muestra el toast "Algunos de los productos ya no están disponibles".

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_VALID_001} no tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (al cambiar la dirección la app muestra el toast «Algunos de los productos ya no están disponibles»); la precondición pide stock en ambas tiendas. Verificado en Android.

**Observación**

Dato que no cumple la precondición: {SKU_VALID_001} no tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (al cambiar la dirección la app muestra el toast «Algunos de los productos ya no están disponibles»); la precondición pide stock en ambas tiendas. Verificado en Android.

---

### TC-B2C126-APP-004 - Verificar que Revisar lleva al carro con solo los productos disponibles [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-126.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de {DIRECCION_OTRA_TIENDA}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_STOCK_SOLO_TIENDA_A} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".
8. El usuario toca "Revisar" en el toast.

**Resultado esperado**

Se abre el carro y solo muestra {SKU_VALID_001}.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.

---

### TC-B2C126-APP-005 - Verificar que desde Mis envíos se muestra el modal Se agotaron con los productos eliminados [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-126.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de {DIRECCION_OTRA_TIENDA}
- Método de entrega activo con subtotal sobre el mínimo
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_STOCK_SOLO_TIENDA_A} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca la tarjeta de dirección y selecciona {DIRECCION_OTRA_TIENDA}.
6. El usuario completa la validación OTP.
7. El sistema muestra el modal "Algunos productos podrían agotarse".
8. El usuario toca "Sí, continuar".
9. El sistema muestra el modal "Se agotaron".

**Resultado esperado**

Se muestra el modal "Se agotaron" con X, la lista con {SKU_STOCK_SOLO_TIENDA_A} (imagen, Marca | descripción corta y cantidad) y el botón "Entendido".

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.

---

### TC-B2C126-APP-006 - Verificar que Entendido en Se agotaron lleva al carro actualizado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-126.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de {DIRECCION_OTRA_TIENDA}
- Método de entrega activo con subtotal sobre el mínimo
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_STOCK_SOLO_TIENDA_A} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca la tarjeta de dirección y selecciona {DIRECCION_OTRA_TIENDA}.
6. El usuario completa la validación OTP.
7. El sistema muestra el modal "Algunos productos podrían agotarse".
8. El usuario toca "Sí, continuar".
9. El sistema muestra el modal "Se agotaron".
10. El usuario toca "Entendido".

**Resultado esperado**

El modal se cierra y el usuario llega al carro sin {SKU_STOCK_SOLO_TIENDA_A}.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.

---

### TC-B2C126-APP-007 - Verificar que la X del modal Se agotaron también lleva al carro actualizado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-126.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}
- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de {DIRECCION_OTRA_TIENDA}
- Método de entrega activo con subtotal sobre el mínimo
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_STOCK_SOLO_TIENDA_A} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca la tarjeta de dirección y selecciona {DIRECCION_OTRA_TIENDA}.
6. El usuario completa la validación OTP.
7. El sistema muestra el modal "Algunos productos podrían agotarse".
8. El usuario toca "Sí, continuar".
9. El sistema muestra el modal "Se agotaron".
10. El usuario toca la X del modal.

**Resultado esperado**

El modal se cierra y el usuario llega al carro sin {SKU_STOCK_SOLO_TIENDA_A}.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.

---

### TC-B2C126-APP-008 - Verificar que un logueado al cambiar a una tienda de retiro con productos no disponibles los ve eliminados, con toast y Revisar al carro [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-126.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001} (despacho a domicilio)
- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}
- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la de {DIRECCION_DESPACHO_001}
- {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001} y no tiene stock en {TIENDA_RETIRO_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {TIENDA_RETIRO_001}
- {SKU_VALID_001}
- {SKU_STOCK_SOLO_TIENDA_A}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca "Confirmar tienda".
8. El sistema muestra el modal "Autenticación requerida" (B2C-125).
9. El usuario ingresa el código OTP recibido y toca "Continuar".
10. El sistema muestra el modal "Algunos productos podrían agotarse".
11. El usuario toca "Sí, continuar".
12. El sistema redirige al Home.
13. El usuario toca "Revisar" en el toast.

**Resultado esperado**

El sistema elimina {SKU_STOCK_SOLO_TIENDA_A} del carro, aplica el cambio en la cuenta del cliente y redirige al Home con retiro en {TIENDA_RETIRO_001} seteado en el Store Locator; el Home muestra el toast de alerta "Algunos de los productos ya no están disponibles" con el botón "Revisar" (persiste hasta cerrarlo con la X); al tocar "Revisar" se abre el carro solo con {SKU_VALID_001}.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001}; al cambiar a retiro con login y OTP la app no elimina el producto ni muestra el toast «Algunos de los productos ya no están disponibles». Comprobado ejecutando el TC 008 en Android.

**Observación**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001}; al cambiar a retiro con login y OTP la app no elimina el producto ni muestra el toast «Algunos de los productos ya no están disponibles». Comprobado ejecutando el TC 008 en Android.

**Evidencia**

![Android · Paso 10 — home tras el cambio a retiro con productos no disponibles](<B2C-126 APP Evidencias/TC-B2C126-APP-008-android-p10-home-tras-el-cambio-a-retiro-con-productos-no-disponibles.png>)

![Android · Estado final](<B2C-126 APP Evidencias/TC-B2C126-APP-008-android.png>)

---

### TC-B2C126-APP-009 - Verificar que al cambiar a una tienda de retiro donde todos los productos siguen disponibles no se elimina nada ni se muestra el toast [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-126.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001} (despacho a domicilio)
- El carro contiene {SKU_VALID_001} x 2
- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la de {DIRECCION_DESPACHO_001}
- {SKU_VALID_001} tiene stock en ambas tiendas
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {TIENDA_RETIRO_001}
- {SKU_VALID_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca "Confirmar tienda".
8. El sistema muestra el modal "Autenticación requerida" (B2C-125).
9. El usuario ingresa el código OTP recibido y toca "Continuar".
10. El sistema muestra el modal "Algunos productos podrían agotarse".
11. El usuario toca "Sí, continuar".
12. El usuario revisa la pantalla tras el cambio.
13. El usuario abre el carro.

**Resultado esperado**

Retiro en {TIENDA_RETIRO_001} queda seteado en el Store Locator, no se muestra el toast "Algunos de los productos ya no están disponibles" y el carro mantiene {SKU_VALID_001} x 2 sin productos eliminados.

**Resultado obtenido**

Ejecutado en Android con login y OTP: con {SKU_VALID_001} x2 en el carro, al cambiar a retiro en {TIENDA_RETIRO_001} el Store Locator la muestra y no aparece el toast. La cantidad del carro no se comprobó por separado.

**Observación**

Ejecutado en Android con login y OTP: con {SKU_VALID_001} x2 en el carro, al cambiar a retiro en {TIENDA_RETIRO_001} el Store Locator la muestra y no aparece el toast. La cantidad del carro no se comprobó por separado. iOS: pendiente (falta MOBILENEXT_API_KEY).

---

### TC-B2C126-APP-010 - Verificar que desde Mis envíos al cambiar a retiro en tienda se muestra el modal Se agotaron con los productos eliminados [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-126.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Método de entrega activo: despacho a {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}, con subtotal sobre el mínimo
- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la de {DIRECCION_DESPACHO_001}
- {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001} y no tiene stock en {TIENDA_RETIRO_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {TIENDA_RETIRO_001}
- {SKU_VALID_001}
- {SKU_STOCK_SOLO_TIENDA_A}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección; en el Store Locator toca la pestaña "Retiro en tienda".
6. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca "Confirmar tienda".
7. El usuario completa la validación OTP.
8. El sistema muestra el modal "Algunos productos podrían agotarse".
9. El usuario toca "Sí, continuar".
10. El sistema muestra el modal "Se agotaron".

**Resultado esperado**

Se muestra el modal "Se agotaron" con X, el título "Se agotaron", la lista con {SKU_STOCK_SOLO_TIENDA_A} (imagen, Marca | descripción corta y cantidad) y el botón "Entendido"; el usuario sigue en el contexto de Mis envíos.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001}; al cambiar a retiro con login y OTP la app no elimina el producto ni muestra el toast «Algunos de los productos ya no están disponibles». Comprobado ejecutando el TC 008 en Android (TC 008); este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001}; al cambiar a retiro con login y OTP la app no elimina el producto ni muestra el toast «Algunos de los productos ya no están disponibles». Comprobado ejecutando el TC 008 en Android (TC 008); este TC no se ejecutó por separado.

---

### TC-B2C126-APP-011 - Verificar que Entendido en Se agotaron tras cambiar a retiro en tienda desde Mis envíos lleva al carro actualizado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-126.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Método de entrega activo: despacho a {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}, con subtotal sobre el mínimo
- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la de {DIRECCION_DESPACHO_001}
- {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001} y no tiene stock en {TIENDA_RETIRO_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {TIENDA_RETIRO_001}
- {SKU_VALID_001}
- {SKU_STOCK_SOLO_TIENDA_A}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección; en el Store Locator toca la pestaña "Retiro en tienda".
6. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca "Confirmar tienda".
7. El usuario completa la validación OTP.
8. El sistema muestra el modal "Algunos productos podrían agotarse".
9. El usuario toca "Sí, continuar".
10. El sistema muestra el modal "Se agotaron".
11. El usuario toca "Entendido".

**Resultado esperado**

El modal se cierra y el usuario llega al carro sin {SKU_STOCK_SOLO_TIENDA_A}, solo con {SKU_VALID_001}, y con retiro en {TIENDA_RETIRO_001} como método de entrega.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001}; al cambiar a retiro con login y OTP la app no elimina el producto ni muestra el toast «Algunos de los productos ya no están disponibles». Comprobado ejecutando el TC 008 en Android (TC 008); este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001}; al cambiar a retiro con login y OTP la app no elimina el producto ni muestra el toast «Algunos de los productos ya no están disponibles». Comprobado ejecutando el TC 008 en Android (TC 008); este TC no se ejecutó por separado.

---

### TC-B2C126-APP-012 - Verificar que la X de Se agotaron tras cambiar a retiro en tienda desde Mis envíos también lleva al carro actualizado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-126.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Método de entrega activo: despacho a {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}, con subtotal sobre el mínimo
- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la de {DIRECCION_DESPACHO_001}
- {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001} y no tiene stock en {TIENDA_RETIRO_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {TIENDA_RETIRO_001}
- {SKU_VALID_001}
- {SKU_STOCK_SOLO_TIENDA_A}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca el ícono ▾ de la tarjeta de dirección; en el Store Locator toca la pestaña "Retiro en tienda".
6. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca "Confirmar tienda".
7. El usuario completa la validación OTP.
8. El sistema muestra el modal "Algunos productos podrían agotarse".
9. El usuario toca "Sí, continuar".
10. El sistema muestra el modal "Se agotaron".
11. El usuario toca la X del modal.

**Resultado esperado**

El modal se cierra y el usuario llega al carro sin {SKU_STOCK_SOLO_TIENDA_A}, solo con {SKU_VALID_001}, y con retiro en {TIENDA_RETIRO_001} como método de entrega (mismo comportamiento que "Entendido").

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001}; al cambiar a retiro con login y OTP la app no elimina el producto ni muestra el toast «Algunos de los productos ya no están disponibles». Comprobado ejecutando el TC 008 en Android (TC 008); este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001}; al cambiar a retiro con login y OTP la app no elimina el producto ni muestra el toast «Algunos de los productos ya no están disponibles». Comprobado ejecutando el TC 008 en Android (TC 008); este TC no se ejecutó por separado.

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
  "suite": "B2C-126 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-126 APP Test Cases.xlsx",
  "title": "B2C-126 APP - Evidencias QA (Android)",
  "updated_at": "2026-10-29"
 },
 "history": {
  "2026-10-29": [
   "TC-B2C126-APP-001",
   "TC-B2C126-APP-002",
   "TC-B2C126-APP-003",
   "TC-B2C126-APP-004",
   "TC-B2C126-APP-005",
   "TC-B2C126-APP-006",
   "TC-B2C126-APP-007",
   "TC-B2C126-APP-008",
   "TC-B2C126-APP-009",
   "TC-B2C126-APP-010",
   "TC-B2C126-APP-011",
   "TC-B2C126-APP-012"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El usuario llega al Home con {DIRECCION_OTRA_TIENDA} seteada y el carro solo contiene {SKU_VALID_001}.",
   "form_factor": "app",
   "id": "TC-B2C126-APP-001",
   "name": "Verificar que Sí, continuar elimina los no disponibles, aplica el cambio y redirige al Home [App] [Guest]",
   "observation": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de {DIRECCION_OTRA_TIENDA}",
   "spec": "tests-app/B2C-126.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".\n8. El usuario abre la App {APP_BUILD} y toca el ícono del carro.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_STOCK_SOLO_TIENDA_A} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El Home muestra el toast de alerta \"Algunos de los productos ya no están disponibles\" con el botón \"Revisar\", que persiste hasta cerrarlo con la X.",
   "form_factor": "app",
   "id": "TC-B2C126-APP-002",
   "name": "Verificar que tras el cambio con productos no disponibles el Home muestra el toast con Revisar [App] [Guest]",
   "observation": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de {DIRECCION_OTRA_TIENDA}",
   "spec": "tests-app/B2C-126.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_STOCK_SOLO_TIENDA_A} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El cambio se aplica y no se muestra el toast \"Algunos de los productos ya no están disponibles\".",
   "form_factor": "app",
   "id": "TC-B2C126-APP-003",
   "name": "Verificar que si todos los productos siguen disponibles no se muestra el toast [App] [Guest]",
   "observation": "Dato que no cumple la precondición: {SKU_VALID_001} no tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (al cambiar la dirección la app muestra el toast «Algunos de los productos ya no están disponibles»); la precondición pide stock en ambas tiendas. Verificado en Android.",
   "observed": "Dato que no cumple la precondición: {SKU_VALID_001} no tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (al cambiar la dirección la app muestra el toast «Algunos de los productos ya no están disponibles»); la precondición pide stock en ambas tiendas. Verificado en Android.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene solo {SKU_VALID_001}, con stock en ambas tiendas",
   "spec": "tests-app/B2C-126.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se abre el carro y solo muestra {SKU_VALID_001}.",
   "form_factor": "app",
   "id": "TC-B2C126-APP-004",
   "name": "Verificar que Revisar lleva al carro con solo los productos disponibles [App] [Guest]",
   "observation": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de {DIRECCION_OTRA_TIENDA}",
   "spec": "tests-app/B2C-126.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".\n8. El usuario toca \"Revisar\" en el toast.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_STOCK_SOLO_TIENDA_A} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el modal \"Se agotaron\" con X, la lista con {SKU_STOCK_SOLO_TIENDA_A} (imagen, Marca | descripción corta y cantidad) y el botón \"Entendido\".",
   "form_factor": "app",
   "id": "TC-B2C126-APP-005",
   "name": "Verificar que desde Mis envíos se muestra el modal Se agotaron con los productos eliminados [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de {DIRECCION_OTRA_TIENDA}\n- Método de entrega activo con subtotal sobre el mínimo\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests-app/B2C-126.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca la tarjeta de dirección y selecciona {DIRECCION_OTRA_TIENDA}.\n6. El usuario completa la validación OTP.\n7. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n8. El usuario toca \"Sí, continuar\".\n9. El sistema muestra el modal \"Se agotaron\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_STOCK_SOLO_TIENDA_A} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El modal se cierra y el usuario llega al carro sin {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "app",
   "id": "TC-B2C126-APP-006",
   "name": "Verificar que Entendido en Se agotaron lleva al carro actualizado [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de {DIRECCION_OTRA_TIENDA}\n- Método de entrega activo con subtotal sobre el mínimo\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests-app/B2C-126.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca la tarjeta de dirección y selecciona {DIRECCION_OTRA_TIENDA}.\n6. El usuario completa la validación OTP.\n7. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n8. El usuario toca \"Sí, continuar\".\n9. El sistema muestra el modal \"Se agotaron\".\n10. El usuario toca \"Entendido\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_STOCK_SOLO_TIENDA_A} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El modal se cierra y el usuario llega al carro sin {SKU_STOCK_SOLO_TIENDA_A}.",
   "form_factor": "app",
   "id": "TC-B2C126-APP-007",
   "name": "Verificar que la X del modal Se agotaron también lleva al carro actualizado [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda de {DIRECCION_OTRA_TIENDA} (la app muestra «Agregar»), y la precondición pide que no lo tenga. Comprobado ejecutando B2C-61 APP (TC 009, 012 y 013) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}\n- {SKU_STOCK_SOLO_TIENDA_A} no tiene stock en la tienda abastecedora de {DIRECCION_OTRA_TIENDA}\n- Método de entrega activo con subtotal sobre el mínimo\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests-app/B2C-126.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca la tarjeta de dirección y selecciona {DIRECCION_OTRA_TIENDA}.\n6. El usuario completa la validación OTP.\n7. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n8. El usuario toca \"Sí, continuar\".\n9. El sistema muestra el modal \"Se agotaron\".\n10. El usuario toca la X del modal.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_STOCK_SOLO_TIENDA_A} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El sistema elimina {SKU_STOCK_SOLO_TIENDA_A} del carro, aplica el cambio en la cuenta del cliente y redirige al Home con retiro en {TIENDA_RETIRO_001} seteado en el Store Locator; el Home muestra el toast de alerta \"Algunos de los productos ya no están disponibles\" con el botón \"Revisar\" (persiste hasta cerrarlo con la X); al tocar \"Revisar\" se abre el carro solo con {SKU_VALID_001}.",
   "form_factor": "app",
   "id": "TC-B2C126-APP-008",
   "name": "Verificar que un logueado al cambiar a una tienda de retiro con productos no disponibles los ve eliminados, con toast y Revisar al carro [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001}; al cambiar a retiro con login y OTP la app no elimina el producto ni muestra el toast «Algunos de los productos ya no están disponibles». Comprobado ejecutando el TC 008 en Android.",
   "observed": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001}; al cambiar a retiro con login y OTP la app no elimina el producto ni muestra el toast «Algunos de los productos ya no están disponibles». Comprobado ejecutando el TC 008 en Android.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001} (despacho a domicilio)\n- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}\n- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la de {DIRECCION_DESPACHO_001}\n- {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001} y no tiene stock en {TIENDA_RETIRO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 10 — home tras el cambio a retiro con productos no disponibles",
     "file": "TC-B2C126-APP-008-android-p10-home-tras-el-cambio-a-retiro-con-productos-no-disponibles.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C126-APP-008-android.png"
    }
   ],
   "spec": "tests-app/B2C-126.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca \"Confirmar tienda\".\n8. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n9. El usuario ingresa el código OTP recibido y toca \"Continuar\".\n10. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n11. El usuario toca \"Sí, continuar\".\n12. El sistema redirige al Home.\n13. El usuario toca \"Revisar\" en el toast.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {TIENDA_RETIRO_001}\n- {SKU_VALID_001}\n- {SKU_STOCK_SOLO_TIENDA_A}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Retiro en {TIENDA_RETIRO_001} queda seteado en el Store Locator, no se muestra el toast \"Algunos de los productos ya no están disponibles\" y el carro mantiene {SKU_VALID_001} x 2 sin productos eliminados.",
   "form_factor": "app",
   "id": "TC-B2C126-APP-009",
   "name": "Verificar que al cambiar a una tienda de retiro donde todos los productos siguen disponibles no se elimina nada ni se muestra el toast [App] [Logueado]",
   "observation": "Ejecutado en Android con login y OTP: con {SKU_VALID_001} x2 en el carro, al cambiar a retiro en {TIENDA_RETIRO_001} el Store Locator la muestra y no aparece el toast. La cantidad del carro no se comprobó por separado. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android con login y OTP: con {SKU_VALID_001} x2 en el carro, al cambiar a retiro en {TIENDA_RETIRO_001} el Store Locator la muestra y no aparece el toast. La cantidad del carro no se comprobó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001} (despacho a domicilio)\n- El carro contiene {SKU_VALID_001} x 2\n- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la de {DIRECCION_DESPACHO_001}\n- {SKU_VALID_001} tiene stock en ambas tiendas\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests-app/B2C-126.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca \"Confirmar tienda\".\n8. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n9. El usuario ingresa el código OTP recibido y toca \"Continuar\".\n10. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n11. El usuario toca \"Sí, continuar\".\n12. El usuario revisa la pantalla tras el cambio.\n13. El usuario abre el carro.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {TIENDA_RETIRO_001}\n- {SKU_VALID_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el modal \"Se agotaron\" con X, el título \"Se agotaron\", la lista con {SKU_STOCK_SOLO_TIENDA_A} (imagen, Marca | descripción corta y cantidad) y el botón \"Entendido\"; el usuario sigue en el contexto de Mis envíos.",
   "form_factor": "app",
   "id": "TC-B2C126-APP-010",
   "name": "Verificar que desde Mis envíos al cambiar a retiro en tienda se muestra el modal Se agotaron con los productos eliminados [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001}; al cambiar a retiro con login y OTP la app no elimina el producto ni muestra el toast «Algunos de los productos ya no están disponibles». Comprobado ejecutando el TC 008 en Android (TC 008); este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001}; al cambiar a retiro con login y OTP la app no elimina el producto ni muestra el toast «Algunos de los productos ya no están disponibles». Comprobado ejecutando el TC 008 en Android (TC 008); este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Método de entrega activo: despacho a {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}, con subtotal sobre el mínimo\n- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la de {DIRECCION_DESPACHO_001}\n- {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001} y no tiene stock en {TIENDA_RETIRO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests-app/B2C-126.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección; en el Store Locator toca la pestaña \"Retiro en tienda\".\n6. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca \"Confirmar tienda\".\n7. El usuario completa la validación OTP.\n8. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n9. El usuario toca \"Sí, continuar\".\n10. El sistema muestra el modal \"Se agotaron\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {TIENDA_RETIRO_001}\n- {SKU_VALID_001}\n- {SKU_STOCK_SOLO_TIENDA_A}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El modal se cierra y el usuario llega al carro sin {SKU_STOCK_SOLO_TIENDA_A}, solo con {SKU_VALID_001}, y con retiro en {TIENDA_RETIRO_001} como método de entrega.",
   "form_factor": "app",
   "id": "TC-B2C126-APP-011",
   "name": "Verificar que Entendido en Se agotaron tras cambiar a retiro en tienda desde Mis envíos lleva al carro actualizado [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001}; al cambiar a retiro con login y OTP la app no elimina el producto ni muestra el toast «Algunos de los productos ya no están disponibles». Comprobado ejecutando el TC 008 en Android (TC 008); este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001}; al cambiar a retiro con login y OTP la app no elimina el producto ni muestra el toast «Algunos de los productos ya no están disponibles». Comprobado ejecutando el TC 008 en Android (TC 008); este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Método de entrega activo: despacho a {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}, con subtotal sobre el mínimo\n- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la de {DIRECCION_DESPACHO_001}\n- {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001} y no tiene stock en {TIENDA_RETIRO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests-app/B2C-126.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección; en el Store Locator toca la pestaña \"Retiro en tienda\".\n6. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca \"Confirmar tienda\".\n7. El usuario completa la validación OTP.\n8. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n9. El usuario toca \"Sí, continuar\".\n10. El sistema muestra el modal \"Se agotaron\".\n11. El usuario toca \"Entendido\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {TIENDA_RETIRO_001}\n- {SKU_VALID_001}\n- {SKU_STOCK_SOLO_TIENDA_A}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El modal se cierra y el usuario llega al carro sin {SKU_STOCK_SOLO_TIENDA_A}, solo con {SKU_VALID_001}, y con retiro en {TIENDA_RETIRO_001} como método de entrega (mismo comportamiento que \"Entendido\").",
   "form_factor": "app",
   "id": "TC-B2C126-APP-012",
   "name": "Verificar que la X de Se agotaron tras cambiar a retiro en tienda desde Mis envíos también lleva al carro actualizado [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001}; al cambiar a retiro con login y OTP la app no elimina el producto ni muestra el toast «Algunos de los productos ya no están disponibles». Comprobado ejecutando el TC 008 en Android (TC 008); este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {TIENDA_RETIRO_001}; al cambiar a retiro con login y OTP la app no elimina el producto ni muestra el toast «Algunos de los productos ya no están disponibles». Comprobado ejecutando el TC 008 en Android (TC 008); este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Método de entrega activo: despacho a {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} y {SKU_STOCK_SOLO_TIENDA_A}, con subtotal sobre el mínimo\n- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la de {DIRECCION_DESPACHO_001}\n- {SKU_STOCK_SOLO_TIENDA_A} tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001} y no tiene stock en {TIENDA_RETIRO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests-app/B2C-126.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca el ícono ▾ de la tarjeta de dirección; en el Store Locator toca la pestaña \"Retiro en tienda\".\n6. El usuario selecciona la tienda {TIENDA_RETIRO_001} y toca \"Confirmar tienda\".\n7. El usuario completa la validación OTP.\n8. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n9. El usuario toca \"Sí, continuar\".\n10. El sistema muestra el modal \"Se agotaron\".\n11. El usuario toca la X del modal.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {TIENDA_RETIRO_001}\n- {SKU_VALID_001}\n- {SKU_STOCK_SOLO_TIENDA_A}"
  }
 ]
}
-->
