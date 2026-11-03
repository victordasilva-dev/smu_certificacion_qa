# B2C-124 APP - Evidencias QA (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-124 APP |
| Última actualización | 2026-10-29 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-124 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado | 4 |
| Aprobado | 3 |
| Bloqueado Data | 1 |
| Rechazado | 1 |
| **Total** | **9** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-29 | 9 | TC-B2C124-APP-001, TC-B2C124-APP-002, TC-B2C124-APP-003, TC-B2C124-APP-004, TC-B2C124-APP-005, TC-B2C124-APP-006, TC-B2C124-APP-007, TC-B2C124-APP-008, TC-B2C124-APP-009 |

## Detalle por caso de prueba

### TC-B2C124-APP-001 - Verificar que la dirección del invitado se mantiene activa tras iniciar sesión y validar OTP [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-124.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con la dirección {DIRECCION_OTRA_TIENDA} seteada
- La última dirección guardada de la cuenta {USER_AUTH_001} es {DIRECCION_DESPACHO_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {DIRECCION_OTRA_TIENDA} = TBD
- {DIRECCION_DESPACHO_001} = Casa

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home con {DIRECCION_OTRA_TIENDA} en el Store Locator.
3. El usuario toca "Ingresa" e inicia sesión con la cuenta {USER_AUTH_001}.
4. El sistema muestra el modal "Autenticación requerida" para confirmar la dirección heredada.
5. El usuario ingresa el código OTP recibido y presiona "Continuar".
6. El usuario revisa el Store Locator del header.

**Resultado esperado**

El Store Locator mantiene {DIRECCION_OTRA_TIENDA} (no {DIRECCION_DESPACHO_001}) y el usuario puede cambiarla desde el Store Locator.

**Resultado obtenido**

Ejecutado en Android: tras el login y el OTP de la dirección, el Store Locator mantiene la dirección del invitado y permite cambiarla.

**Observación**

Ejecutado en Android: tras el login y el OTP de la dirección, el Store Locator mantiene la dirección del invitado y permite cambiarla. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 3 — modal algunos productos podrian agotarse tras el otp](<B2C-124 APP Evidencias/TC-B2C124-APP-001-android-p03-modal-algunos-productos-podrian-agotarse-tras-el-otp.png>)

![Android · Paso 4 — home con el store locator tras validar el otp](<B2C-124 APP Evidencias/TC-B2C124-APP-001-android-p04-home-con-el-store-locator-tras-validar-el-otp.png>)

![Android · Paso 5 — el usuario puede cambiar la direccion desde el store locator](<B2C-124 APP Evidencias/TC-B2C124-APP-001-android-p05-el-usuario-puede-cambiar-la-direccion-desde-el-store-locator.png>)

![Android · Estado final](<B2C-124 APP Evidencias/TC-B2C124-APP-001-android.png>)

---

### TC-B2C124-APP-002 - Verificar que tras la fusión los productos no disponibles quedan marcados y se notifica con un toast [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-124.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado sin dirección seteada, con {SKU_VALID_001} y {SKU_NO_DISPONIBLE_TIENDA_A} en el carro
- La última dirección guardada de la cuenta {USER_AUTH_001} es {DIRECCION_DESPACHO_001}
- {SKU_NO_DISPONIBLE_TIENDA_A} no tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE_TIENDA_A} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario toca "Ingresa" e inicia sesión con la cuenta {USER_AUTH_001}.
3. El sistema fusiona los carros.
4. El usuario abre la App {APP_BUILD} y toca el ícono del carro.

**Resultado esperado**

Se muestra el toast "Tu carro se ha actualizado" y {SKU_NO_DISPONIBLE_TIENDA_A} aparece como no disponible en el carro fusionado.

**Resultado obtenido**

Falta dato: {SKU_NO_DISPONIBLE_TIENDA_A} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

**Observación**

Falta dato: {SKU_NO_DISPONIBLE_TIENDA_A} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.

---

### TC-B2C124-APP-003 - Verificar que al iniciar sesión con dirección heredada se solicita la validación OTP [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-124.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con la dirección {DIRECCION_OTRA_TIENDA} seteada
- La última dirección guardada de la cuenta {USER_AUTH_001} es {DIRECCION_DESPACHO_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {DIRECCION_OTRA_TIENDA} = TBD
- {DIRECCION_DESPACHO_001} = Casa

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home con {DIRECCION_OTRA_TIENDA} en el Store Locator.
3. El usuario toca "Ingresa" e inicia sesión con la cuenta {USER_AUTH_001}.

**Resultado esperado**

Se muestra el modal "Autenticación requerida" y la dirección solo queda aplicada tras validar el OTP.

**Resultado obtenido**

Ejecutado en Android: se muestra el modal «Autenticación requerida» y la dirección del invitado queda aplicada solo tras validar el OTP.

**Observación**

Ejecutado en Android: se muestra el modal «Autenticación requerida» y la dirección del invitado queda aplicada solo tras validar el OTP. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 2 — modal autenticacion requerida con la direccion heredada](<B2C-124 APP Evidencias/TC-B2C124-APP-003-android-p02-modal-autenticacion-requerida-con-la-direccion-heredada.png>)

![Android · Paso 4 — home tras validar el otp](<B2C-124 APP Evidencias/TC-B2C124-APP-003-android-p04-home-tras-validar-el-otp.png>)

![Android · Estado final](<B2C-124 APP Evidencias/TC-B2C124-APP-003-android.png>)

---

### TC-B2C124-APP-004 - Verificar que salir del OTP sin validar inicia sesión sin aplicar la dirección del invitado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-124.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con la dirección {DIRECCION_OTRA_TIENDA} seteada
- La última dirección guardada de la cuenta {USER_AUTH_001} es {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {DIRECCION_OTRA_TIENDA} = TBD
- {DIRECCION_DESPACHO_001} = Casa

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home con {DIRECCION_OTRA_TIENDA} en el Store Locator.
3. El usuario toca "Ingresa" e inicia sesión con la cuenta {USER_AUTH_001}.
4. El sistema muestra el modal "Autenticación requerida".
5. El usuario toca la X del modal OTP.
6. El usuario revisa el Store Locator y la libreta de direcciones de Mi cuenta.

**Resultado esperado**

La sesión queda iniciada, se muestra el toast "Verificacion pendiente. Tu dirección no fue guardada.", {DIRECCION_OTRA_TIENDA} no queda aplicada y no se agrega a la libreta de direcciones; el carro no se actualiza.

**Resultado obtenido**

Esperado: la dirección del invitado no queda aplicada tras salir del OTP sin validar. Obtenido: se muestra el toast «Verificación pendiente. Tu dirección no fue guardada.» pero el Store Locator sigue mostrando «Avenida Las Condes 14791, Lo Barnechea» (la del invitado). Bug B2C-1401. spec: tests-app/B2C-124.spec.ts:208

**Observación**

Esperado: la dirección del invitado no queda aplicada tras salir del OTP sin validar. Obtenido: se muestra el toast «Verificación pendiente. Tu dirección no fue guardada.» pero el Store Locator sigue mostrando «Avenida Las Condes 14791, Lo Barnechea» (la del invitado). Bug B2C-1401. spec: tests-app/B2C-124.spec.ts:208

**Evidencia**

![Android · Paso 3 — modal autenticacion requerida de la direccion](<B2C-124 APP Evidencias/TC-B2C124-APP-004-android-p03-modal-autenticacion-requerida-de-la-direccion.png>)

![Android · Paso 5 — pantalla tras salir del otp](<B2C-124 APP Evidencias/TC-B2C124-APP-004-android-p05-pantalla-tras-salir-del-otp.png>)

![Android · Paso 7 — home con la sesion iniciada](<B2C-124 APP Evidencias/TC-B2C124-APP-004-android-p07-home-con-la-sesion-iniciada.png>)

![Android · Estado final](<B2C-124 APP Evidencias/TC-B2C124-APP-004-android.png>)

---

### TC-B2C124-APP-005 - Verificar que con carro y cambio de tienda el OTP exitoso muestra el modal No se te escapen [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-124.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con la dirección {DIRECCION_OTRA_TIENDA} seteada y {SKU_VALID_001} en el carro
- La última dirección guardada de la cuenta {USER_AUTH_001} es {DIRECCION_DESPACHO_001}
- {DIRECCION_OTRA_TIENDA} tiene tienda abastecedora distinta a {DIRECCION_DESPACHO_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {DIRECCION_OTRA_TIENDA} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home con {DIRECCION_OTRA_TIENDA} en el Store Locator.
3. El usuario toca "Ingresa" e inicia sesión con la cuenta {USER_AUTH_001}.
4. El sistema muestra el modal "Autenticación requerida" para confirmar la dirección heredada.
5. El usuario ingresa el código OTP recibido y presiona "Continuar".
6. El sistema muestra el modal "Algunos productos podrían agotarse".
7. El usuario toca "Sí, continuar".

**Resultado esperado**

La dirección {DIRECCION_OTRA_TIENDA} queda aplicada, el carro se actualiza, el modal se cierra y continúa el flujo de B2C-126.

**Resultado obtenido**

Ejecutado en Android: tras el login la app muestra el modal «Algunos productos podrían agotarse» (no «No se te escapen»); al confirmar y validar el OTP la dirección del invitado queda aplicada y el carro conserva el producto.

**Observación**

Ejecutado en Android: tras el login la app muestra el modal «Algunos productos podrían agotarse» (no «No se te escapen»); al confirmar y validar el OTP la dirección del invitado queda aplicada y el carro conserva el producto. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 3 — pantalla tras validar el otp del login](<B2C-124 APP Evidencias/TC-B2C124-APP-005-android-p03-pantalla-tras-validar-el-otp-del-login.png>)

![Android · Paso 4 — pantalla tras validar el otp de la direccion](<B2C-124 APP Evidencias/TC-B2C124-APP-005-android-p04-pantalla-tras-validar-el-otp-de-la-direccion.png>)

![Android · Paso 5 — home con la direccion del invitado y el carro](<B2C-124 APP Evidencias/TC-B2C124-APP-005-android-p05-home-con-la-direccion-del-invitado-y-el-carro.png>)

![Android · Estado final](<B2C-124 APP Evidencias/TC-B2C124-APP-005-android.png>)

---

### TC-B2C124-APP-006 - Verificar que al iniciar sesión los productos únicos de ambos carros se mantienen con sus cantidades [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-124.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado sin dirección seteada
- La cuenta {USER_AUTH_001} tiene la dirección {DIRECCION_DESPACHO_001} seteada
- El carro invitado contiene {SKU_VALID_001} x 2
- El carro guardado de la cuenta {USER_AUTH_001} contiene {SKU_UNITARIO} x 1 (preparado iniciando sesión previamente con esa cuenta, agregando los productos y cerrando sesión)
- {SKU_VALID_001} y {SKU_UNITARIO} tienen stock en la tienda abastecedora de {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {SKU_VALID_001}
- {SKU_UNITARIO}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home sin dirección seteada en el Store Locator.
3. El usuario toca "Ingresa" e inicia sesión con la cuenta {USER_AUTH_001}.
4. El sistema autentica al usuario y ejecuta la fusión de carros.
5. El usuario toca el ícono del carro.
6. El sistema carga el carrito.
7. El usuario revisa los productos y cantidades del carro.

**Resultado esperado**

Se muestra el toast "Tu carro se ha actualizado"; el carro fusionado contiene {SKU_VALID_001} x 2 (del invitado) y {SKU_UNITARIO} x 1 (de la cuenta), ambos disponibles.

**Resultado obtenido**

Causa: la precondición pide un invitado SIN dirección con productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar» abre el Store Locator). Acción: reformular la precondición del TC.

**Observación**

Causa: la precondición pide un invitado SIN dirección con productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar» abre el Store Locator). Acción: reformular la precondición del TC.

---

### TC-B2C124-APP-007 - Verificar que al iniciar sesión un producto duplicado queda con la cantidad del carro invitado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-124.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado sin dirección seteada
- La cuenta {USER_AUTH_001} tiene la dirección {DIRECCION_DESPACHO_001} seteada
- El carro invitado contiene {SKU_VALID_001} x 2
- El carro guardado de la cuenta {USER_AUTH_001} contiene {SKU_VALID_001} x 5 (preparado iniciando sesión previamente con esa cuenta, agregando los productos y cerrando sesión)
- {SKU_VALID_001} tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {SKU_VALID_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home sin dirección seteada en el Store Locator.
3. El usuario toca "Ingresa" e inicia sesión con la cuenta {USER_AUTH_001}.
4. El sistema autentica al usuario y ejecuta la fusión de carros.
5. El usuario toca el ícono del carro.
6. El sistema carga el carrito.
7. El usuario revisa la cantidad de {SKU_VALID_001}.

**Resultado esperado**

Se muestra el toast "Tu carro se ha actualizado"; {SKU_VALID_001} queda con cantidad 2 (la del invitado), no 5 ni 7, y aparece una sola vez en el carro.

**Resultado obtenido**

Causa: la precondición pide un invitado SIN dirección con productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar» abre el Store Locator). Acción: reformular la precondición del TC.

**Observación**

Causa: la precondición pide un invitado SIN dirección con productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar» abre el Store Locator). Acción: reformular la precondición del TC.

---

### TC-B2C124-APP-008 - Verificar que al iniciar sesión el carro resultante combina únicos y duplicados con totales recalculados [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-124.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado sin dirección seteada
- La cuenta {USER_AUTH_001} tiene la dirección {DIRECCION_DESPACHO_001} seteada
- El carro invitado contiene {SKU_VALID_001} x 2 y {SKU_NOMBRE_CORTO} x 1
- El carro guardado de la cuenta {USER_AUTH_001} contiene {SKU_VALID_001} x 4 y {SKU_UNITARIO} x 1 (preparado iniciando sesión previamente con esa cuenta, agregando los productos y cerrando sesión)
- Los tres productos tienen stock en la tienda abastecedora de {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {SKU_VALID_001}
- {SKU_NOMBRE_CORTO}
- {SKU_UNITARIO}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home sin dirección seteada en el Store Locator.
3. El usuario toca "Ingresa" e inicia sesión con la cuenta {USER_AUTH_001}.
4. El sistema autentica al usuario y ejecuta la fusión de carros.
5. El usuario toca el ícono del carro.
6. El sistema carga el carrito.
7. El usuario revisa productos, cantidades y la tarjeta de totales.

**Resultado esperado**

Se muestra el toast "Tu carro se ha actualizado"; el carro contiene {SKU_VALID_001} x 2, {SKU_NOMBRE_CORTO} x 1 y {SKU_UNITARIO} x 1 (3 productos), y el subtotal corresponde a la suma de precio × cantidad de esos productos en la tienda de {DIRECCION_DESPACHO_001}.

**Resultado obtenido**

Causa: la precondición pide un invitado SIN dirección con productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar» abre el Store Locator). Acción: reformular la precondición del TC.

**Observación**

Causa: la precondición pide un invitado SIN dirección con productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar» abre el Store Locator). Acción: reformular la precondición del TC.

---

### TC-B2C124-APP-009 - Verificar que si el invitado no tenía dirección al iniciar sesión se carga la dirección de la cuenta sin pedir OTP [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-124.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado sin dirección seteada
- La cuenta {USER_AUTH_001} tiene la dirección {DIRECCION_DESPACHO_001} seteada
- El carro invitado contiene {SKU_VALID_001} x 1
- {SKU_VALID_001} tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {SKU_VALID_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home sin dirección seteada en el Store Locator.
3. El usuario toca "Ingresa" e inicia sesión con la cuenta {USER_AUTH_001}.
4. El sistema autentica al usuario y ejecuta la fusión de carros.
5. El usuario revisa si se muestra el modal "Autenticación requerida" y el Store Locator.
6. El usuario toca el ícono del carro.
7. El sistema carga el carrito.

**Resultado esperado**

No se muestra el modal "Autenticación requerida" (no hay dirección heredada); el Store Locator muestra {DIRECCION_DESPACHO_001} y el carro contiene {SKU_VALID_001} x 1 disponible para esa tienda.

**Resultado obtenido**

Causa: la precondición pide un invitado SIN dirección con productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar» abre el Store Locator). Acción: reformular la precondición del TC.

**Observación**

Causa: la precondición pide un invitado SIN dirección con productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar» abre el Store Locator). Acción: reformular la precondición del TC.

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
  "suite": "B2C-124 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-124 APP Test Cases.xlsx",
  "title": "B2C-124 APP - Evidencias QA (Android)",
  "updated_at": "2026-10-29"
 },
 "history": {
  "2026-10-29": [
   "TC-B2C124-APP-001",
   "TC-B2C124-APP-002",
   "TC-B2C124-APP-003",
   "TC-B2C124-APP-004",
   "TC-B2C124-APP-005",
   "TC-B2C124-APP-006",
   "TC-B2C124-APP-007",
   "TC-B2C124-APP-008",
   "TC-B2C124-APP-009"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El Store Locator mantiene {DIRECCION_OTRA_TIENDA} (no {DIRECCION_DESPACHO_001}) y el usuario puede cambiarla desde el Store Locator.",
   "form_factor": "app",
   "id": "TC-B2C124-APP-001",
   "name": "Verificar que la dirección del invitado se mantiene activa tras iniciar sesión y validar OTP [App] [Guest]",
   "observation": "Ejecutado en Android: tras el login y el OTP de la dirección, el Store Locator mantiene la dirección del invitado y permite cambiarla. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: tras el login y el OTP de la dirección, el Store Locator mantiene la dirección del invitado y permite cambiarla.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con la dirección {DIRECCION_OTRA_TIENDA} seteada\n- La última dirección guardada de la cuenta {USER_AUTH_001} es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — modal algunos productos podrian agotarse tras el otp",
     "file": "TC-B2C124-APP-001-android-p03-modal-algunos-productos-podrian-agotarse-tras-el-otp.png"
    },
    {
     "caption": "Android · Paso 4 — home con el store locator tras validar el otp",
     "file": "TC-B2C124-APP-001-android-p04-home-con-el-store-locator-tras-validar-el-otp.png"
    },
    {
     "caption": "Android · Paso 5 — el usuario puede cambiar la direccion desde el store locator",
     "file": "TC-B2C124-APP-001-android-p05-el-usuario-puede-cambiar-la-direccion-desde-el-store-locator.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C124-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-124.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home con {DIRECCION_OTRA_TIENDA} en el Store Locator.\n3. El usuario toca \"Ingresa\" e inicia sesión con la cuenta {USER_AUTH_001}.\n4. El sistema muestra el modal \"Autenticación requerida\" para confirmar la dirección heredada.\n5. El usuario ingresa el código OTP recibido y presiona \"Continuar\".\n6. El usuario revisa el Store Locator del header.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {DIRECCION_DESPACHO_001} = Casa"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast \"Tu carro se ha actualizado\" y {SKU_NO_DISPONIBLE_TIENDA_A} aparece como no disponible en el carro fusionado.",
   "form_factor": "app",
   "id": "TC-B2C124-APP-002",
   "name": "Verificar que tras la fusión los productos no disponibles quedan marcados y se notifica con un toast [App] [Guest]",
   "observation": "Falta dato: {SKU_NO_DISPONIBLE_TIENDA_A} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "observed": "Falta dato: {SKU_NO_DISPONIBLE_TIENDA_A} está en TBD en el Excel de data. Cargar el valor y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado sin dirección seteada, con {SKU_VALID_001} y {SKU_NO_DISPONIBLE_TIENDA_A} en el carro\n- La última dirección guardada de la cuenta {USER_AUTH_001} es {DIRECCION_DESPACHO_001}\n- {SKU_NO_DISPONIBLE_TIENDA_A} no tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001}",
   "spec": "tests-app/B2C-124.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario toca \"Ingresa\" e inicia sesión con la cuenta {USER_AUTH_001}.\n3. El sistema fusiona los carros.\n4. El usuario abre la App {APP_BUILD} y toca el ícono del carro.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE_TIENDA_A} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el modal \"Autenticación requerida\" y la dirección solo queda aplicada tras validar el OTP.",
   "form_factor": "app",
   "id": "TC-B2C124-APP-003",
   "name": "Verificar que al iniciar sesión con dirección heredada se solicita la validación OTP [App] [Guest]",
   "observation": "Ejecutado en Android: se muestra el modal «Autenticación requerida» y la dirección del invitado queda aplicada solo tras validar el OTP. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: se muestra el modal «Autenticación requerida» y la dirección del invitado queda aplicada solo tras validar el OTP.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con la dirección {DIRECCION_OTRA_TIENDA} seteada\n- La última dirección guardada de la cuenta {USER_AUTH_001} es {DIRECCION_DESPACHO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — modal autenticacion requerida con la direccion heredada",
     "file": "TC-B2C124-APP-003-android-p02-modal-autenticacion-requerida-con-la-direccion-heredada.png"
    },
    {
     "caption": "Android · Paso 4 — home tras validar el otp",
     "file": "TC-B2C124-APP-003-android-p04-home-tras-validar-el-otp.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C124-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-124.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home con {DIRECCION_OTRA_TIENDA} en el Store Locator.\n3. El usuario toca \"Ingresa\" e inicia sesión con la cuenta {USER_AUTH_001}.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {DIRECCION_DESPACHO_001} = Casa"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La sesión queda iniciada, se muestra el toast \"Verificacion pendiente. Tu dirección no fue guardada.\", {DIRECCION_OTRA_TIENDA} no queda aplicada y no se agrega a la libreta de direcciones; el carro no se actualiza.",
   "form_factor": "app",
   "id": "TC-B2C124-APP-004",
   "name": "Verificar que salir del OTP sin validar inicia sesión sin aplicar la dirección del invitado [App] [Guest]",
   "observation": "Esperado: la dirección del invitado no queda aplicada tras salir del OTP sin validar. Obtenido: se muestra el toast «Verificación pendiente. Tu dirección no fue guardada.» pero el Store Locator sigue mostrando «Avenida Las Condes 14791, Lo Barnechea» (la del invitado). Bug B2C-1401. spec: tests-app/B2C-124.spec.ts:208",
   "observed": "Esperado: la dirección del invitado no queda aplicada tras salir del OTP sin validar. Obtenido: se muestra el toast «Verificación pendiente. Tu dirección no fue guardada.» pero el Store Locator sigue mostrando «Avenida Las Condes 14791, Lo Barnechea» (la del invitado). Bug B2C-1401. spec: tests-app/B2C-124.spec.ts:208",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con la dirección {DIRECCION_OTRA_TIENDA} seteada\n- La última dirección guardada de la cuenta {USER_AUTH_001} es {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — modal autenticacion requerida de la direccion",
     "file": "TC-B2C124-APP-004-android-p03-modal-autenticacion-requerida-de-la-direccion.png"
    },
    {
     "caption": "Android · Paso 5 — pantalla tras salir del otp",
     "file": "TC-B2C124-APP-004-android-p05-pantalla-tras-salir-del-otp.png"
    },
    {
     "caption": "Android · Paso 7 — home con la sesion iniciada",
     "file": "TC-B2C124-APP-004-android-p07-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C124-APP-004-android.png"
    }
   ],
   "spec": "tests-app/B2C-124.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home con {DIRECCION_OTRA_TIENDA} en el Store Locator.\n3. El usuario toca \"Ingresa\" e inicia sesión con la cuenta {USER_AUTH_001}.\n4. El sistema muestra el modal \"Autenticación requerida\".\n5. El usuario toca la X del modal OTP.\n6. El usuario revisa el Store Locator y la libreta de direcciones de Mi cuenta.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {DIRECCION_DESPACHO_001} = Casa"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La dirección {DIRECCION_OTRA_TIENDA} queda aplicada, el carro se actualiza, el modal se cierra y continúa el flujo de B2C-126.",
   "form_factor": "app",
   "id": "TC-B2C124-APP-005",
   "name": "Verificar que con carro y cambio de tienda el OTP exitoso muestra el modal No se te escapen [App] [Guest]",
   "observation": "Ejecutado en Android: tras el login la app muestra el modal «Algunos productos podrían agotarse» (no «No se te escapen»); al confirmar y validar el OTP la dirección del invitado queda aplicada y el carro conserva el producto. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: tras el login la app muestra el modal «Algunos productos podrían agotarse» (no «No se te escapen»); al confirmar y validar el OTP la dirección del invitado queda aplicada y el carro conserva el producto.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con la dirección {DIRECCION_OTRA_TIENDA} seteada y {SKU_VALID_001} en el carro\n- La última dirección guardada de la cuenta {USER_AUTH_001} es {DIRECCION_DESPACHO_001}\n- {DIRECCION_OTRA_TIENDA} tiene tienda abastecedora distinta a {DIRECCION_DESPACHO_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — pantalla tras validar el otp del login",
     "file": "TC-B2C124-APP-005-android-p03-pantalla-tras-validar-el-otp-del-login.png"
    },
    {
     "caption": "Android · Paso 4 — pantalla tras validar el otp de la direccion",
     "file": "TC-B2C124-APP-005-android-p04-pantalla-tras-validar-el-otp-de-la-direccion.png"
    },
    {
     "caption": "Android · Paso 5 — home con la direccion del invitado y el carro",
     "file": "TC-B2C124-APP-005-android-p05-home-con-la-direccion-del-invitado-y-el-carro.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C124-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-124.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home con {DIRECCION_OTRA_TIENDA} en el Store Locator.\n3. El usuario toca \"Ingresa\" e inicia sesión con la cuenta {USER_AUTH_001}.\n4. El sistema muestra el modal \"Autenticación requerida\" para confirmar la dirección heredada.\n5. El usuario ingresa el código OTP recibido y presiona \"Continuar\".\n6. El sistema muestra el modal \"Algunos productos podrían agotarse\".\n7. El usuario toca \"Sí, continuar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {DIRECCION_OTRA_TIENDA} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast \"Tu carro se ha actualizado\"; el carro fusionado contiene {SKU_VALID_001} x 2 (del invitado) y {SKU_UNITARIO} x 1 (de la cuenta), ambos disponibles.",
   "form_factor": "app",
   "id": "TC-B2C124-APP-006",
   "name": "Verificar que al iniciar sesión los productos únicos de ambos carros se mantienen con sus cantidades [App] [Guest]",
   "observation": "Causa: la precondición pide un invitado SIN dirección con productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar» abre el Store Locator). Acción: reformular la precondición del TC.",
   "observed": "Causa: la precondición pide un invitado SIN dirección con productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar» abre el Store Locator). Acción: reformular la precondición del TC.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado sin dirección seteada\n- La cuenta {USER_AUTH_001} tiene la dirección {DIRECCION_DESPACHO_001} seteada\n- El carro invitado contiene {SKU_VALID_001} x 2\n- El carro guardado de la cuenta {USER_AUTH_001} contiene {SKU_UNITARIO} x 1 (preparado iniciando sesión previamente con esa cuenta, agregando los productos y cerrando sesión)\n- {SKU_VALID_001} y {SKU_UNITARIO} tienen stock en la tienda abastecedora de {DIRECCION_DESPACHO_001}",
   "spec": "tests-app/B2C-124.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home sin dirección seteada en el Store Locator.\n3. El usuario toca \"Ingresa\" e inicia sesión con la cuenta {USER_AUTH_001}.\n4. El sistema autentica al usuario y ejecuta la fusión de carros.\n5. El usuario toca el ícono del carro.\n6. El sistema carga el carrito.\n7. El usuario revisa los productos y cantidades del carro.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {SKU_VALID_001}\n- {SKU_UNITARIO}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast \"Tu carro se ha actualizado\"; {SKU_VALID_001} queda con cantidad 2 (la del invitado), no 5 ni 7, y aparece una sola vez en el carro.",
   "form_factor": "app",
   "id": "TC-B2C124-APP-007",
   "name": "Verificar que al iniciar sesión un producto duplicado queda con la cantidad del carro invitado [App] [Guest]",
   "observation": "Causa: la precondición pide un invitado SIN dirección con productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar» abre el Store Locator). Acción: reformular la precondición del TC.",
   "observed": "Causa: la precondición pide un invitado SIN dirección con productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar» abre el Store Locator). Acción: reformular la precondición del TC.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado sin dirección seteada\n- La cuenta {USER_AUTH_001} tiene la dirección {DIRECCION_DESPACHO_001} seteada\n- El carro invitado contiene {SKU_VALID_001} x 2\n- El carro guardado de la cuenta {USER_AUTH_001} contiene {SKU_VALID_001} x 5 (preparado iniciando sesión previamente con esa cuenta, agregando los productos y cerrando sesión)\n- {SKU_VALID_001} tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001}",
   "spec": "tests-app/B2C-124.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home sin dirección seteada en el Store Locator.\n3. El usuario toca \"Ingresa\" e inicia sesión con la cuenta {USER_AUTH_001}.\n4. El sistema autentica al usuario y ejecuta la fusión de carros.\n5. El usuario toca el ícono del carro.\n6. El sistema carga el carrito.\n7. El usuario revisa la cantidad de {SKU_VALID_001}.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {SKU_VALID_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast \"Tu carro se ha actualizado\"; el carro contiene {SKU_VALID_001} x 2, {SKU_NOMBRE_CORTO} x 1 y {SKU_UNITARIO} x 1 (3 productos), y el subtotal corresponde a la suma de precio × cantidad de esos productos en la tienda de {DIRECCION_DESPACHO_001}.",
   "form_factor": "app",
   "id": "TC-B2C124-APP-008",
   "name": "Verificar que al iniciar sesión el carro resultante combina únicos y duplicados con totales recalculados [App] [Guest]",
   "observation": "Causa: la precondición pide un invitado SIN dirección con productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar» abre el Store Locator). Acción: reformular la precondición del TC.",
   "observed": "Causa: la precondición pide un invitado SIN dirección con productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar» abre el Store Locator). Acción: reformular la precondición del TC.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado sin dirección seteada\n- La cuenta {USER_AUTH_001} tiene la dirección {DIRECCION_DESPACHO_001} seteada\n- El carro invitado contiene {SKU_VALID_001} x 2 y {SKU_NOMBRE_CORTO} x 1\n- El carro guardado de la cuenta {USER_AUTH_001} contiene {SKU_VALID_001} x 4 y {SKU_UNITARIO} x 1 (preparado iniciando sesión previamente con esa cuenta, agregando los productos y cerrando sesión)\n- Los tres productos tienen stock en la tienda abastecedora de {DIRECCION_DESPACHO_001}",
   "spec": "tests-app/B2C-124.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home sin dirección seteada en el Store Locator.\n3. El usuario toca \"Ingresa\" e inicia sesión con la cuenta {USER_AUTH_001}.\n4. El sistema autentica al usuario y ejecuta la fusión de carros.\n5. El usuario toca el ícono del carro.\n6. El sistema carga el carrito.\n7. El usuario revisa productos, cantidades y la tarjeta de totales.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {SKU_VALID_001}\n- {SKU_NOMBRE_CORTO}\n- {SKU_UNITARIO}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "No se muestra el modal \"Autenticación requerida\" (no hay dirección heredada); el Store Locator muestra {DIRECCION_DESPACHO_001} y el carro contiene {SKU_VALID_001} x 1 disponible para esa tienda.",
   "form_factor": "app",
   "id": "TC-B2C124-APP-009",
   "name": "Verificar que si el invitado no tenía dirección al iniciar sesión se carga la dirección de la cuenta sin pedir OTP [App] [Guest]",
   "observation": "Causa: la precondición pide un invitado SIN dirección con productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar» abre el Store Locator). Acción: reformular la precondición del TC.",
   "observed": "Causa: la precondición pide un invitado SIN dirección con productos en el carro, y en la app un invitado sin dirección no puede agregar al carro («Agregar» abre el Store Locator). Acción: reformular la precondición del TC.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado sin dirección seteada\n- La cuenta {USER_AUTH_001} tiene la dirección {DIRECCION_DESPACHO_001} seteada\n- El carro invitado contiene {SKU_VALID_001} x 1\n- {SKU_VALID_001} tiene stock en la tienda abastecedora de {DIRECCION_DESPACHO_001}",
   "spec": "tests-app/B2C-124.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home sin dirección seteada en el Store Locator.\n3. El usuario toca \"Ingresa\" e inicia sesión con la cuenta {USER_AUTH_001}.\n4. El sistema autentica al usuario y ejecuta la fusión de carros.\n5. El usuario revisa si se muestra el modal \"Autenticación requerida\" y el Store Locator.\n6. El usuario toca el ícono del carro.\n7. El sistema carga el carrito.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {SKU_VALID_001}"
  }
 ]
}
-->
