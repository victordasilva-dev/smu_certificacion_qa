# B2C-123 APP - Sin cobertura de despacho - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-123 APP |
| Última actualización | 2026-10-14 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.7 (com.smuapp.unimarc) contra DEV |
| Dispositivo Android | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-123 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 6 |
| Aprobado | 4 |
| Rechazado | 3 |
| **Total** | **13** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-14 | 13 | TC-B2C123-APP-001, TC-B2C123-APP-002, TC-B2C123-APP-003, TC-B2C123-APP-004, TC-B2C123-APP-005, TC-B2C123-APP-006, TC-B2C123-APP-007, TC-B2C123-APP-008, TC-B2C123-APP-009, TC-B2C123-APP-010, TC-B2C123-APP-011, TC-B2C123-APP-012, TC-B2C123-APP-013 |

## Detalle por caso de prueba

### TC-B2C123-APP-001 - Verificar que una dirección nueva fuera de zona muestra el modal Aún no llegamos con sus opciones [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Duración | 27.2 s |
| Spec | tests-app/B2C-123.spec.ts:47 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App

**Data utilizada**

v1.0.7, iOS, T-551, Futrono

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Aún no llegamos a esta dirección".

**Resultado esperado**

Se muestra el modal "Aún no llegamos a esta dirección" con el mensaje "Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc" y las opciones "Continuar con esta dirección" y "Cambiar método de entrega".

**Resultado obtenido**

Con 'T-551, Futrono' se abre 'Aún no llegamos a esta dirección' con el mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc.' (la app agrega el punto final), 'Continuar con esta dirección' y 'Cambiar método de entrega'.

**Observación**

Con 'T-551, Futrono' se abre 'Aún no llegamos a esta dirección' con el mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc.' (la app agrega el punto final), 'Continuar con esta dirección' y 'Cambiar método de entrega'. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 2 — home como invitado](<B2C-123 APP Evidencias/TC-B2C123-APP-001-android-p02-home-como-invitado.png>)

![Android · Paso 5 — detalles de la direccion sin cobertura](<B2C-123 APP Evidencias/TC-B2C123-APP-001-android-p05-detalles-de-la-direccion-sin-cobertura.png>)

![Android · Paso 6 — modal aun no llegamos a esta direccion](<B2C-123 APP Evidencias/TC-B2C123-APP-001-android-p06-modal-aun-no-llegamos-a-esta-direccion.png>)

![Estado final del caso](<B2C-123 APP Evidencias/TC-B2C123-APP-001-android.png>)

---

### TC-B2C123-APP-002 - Verificar que una dirección guardada sin cobertura muestra el modal tras validar OTP [App] [Logueado]

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
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta tiene guardada la dirección T-551, Futrono
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

v1.0.7, iOS, T-551, Futrono, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El usuario selecciona la dirección guardada T-551, Futrono.
5. El usuario completa la validación OTP con el código recibido.

**Resultado esperado**

Se muestra el modal "Aún no llegamos a esta dirección" con sus opciones "Continuar con esta dirección" y "Cambiar método de entrega".

**Observación**

Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C123-APP-003 - Verificar que continuar sin carro setea la dirección con la etiqueta Despacho sin cobertura [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Duración | 40.0 s |
| Spec | tests-app/B2C-123.spec.ts:59 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro está vacío

**Data utilizada**

v1.0.7, iOS, T-551, Futrono, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Aún no llegamos a esta dirección".
7. El usuario toca "Continuar con esta dirección".
8. El sistema muestra un loader.
9. El usuario navega a otra página del sitio.

**Resultado esperado**

La dirección T-551, Futrono queda seteada y el Store Locator muestra "Despacho sin cobertura" debajo, también al navegar a otras páginas.

**Resultado obtenido**

Tras 'Continuar con esta dirección' el navbar muestra 'T-551' con 'Despacho sin cobertura' y se mantiene al pasar por Categorías y volver al Home.

**Observación**

Tras 'Continuar con esta dirección' el navbar muestra 'T-551' con 'Despacho sin cobertura' y se mantiene al pasar por Categorías y volver al Home. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 5 — detalles de la direccion sin cobertura](<B2C-123 APP Evidencias/TC-B2C123-APP-003-android-p05-detalles-de-la-direccion-sin-cobertura.png>)

![Android · Paso 6 — modal aun no llegamos a esta direccion](<B2C-123 APP Evidencias/TC-B2C123-APP-003-android-p06-modal-aun-no-llegamos-a-esta-direccion.png>)

![Android · Paso 7 — home con despacho sin cobertura](<B2C-123 APP Evidencias/TC-B2C123-APP-003-android-p07-home-con-despacho-sin-cobertura.png>)

![Android · Paso 9 — categorias](<B2C-123 APP Evidencias/TC-B2C123-APP-003-android-p09-categorias.png>)

![Estado final del caso](<B2C-123 APP Evidencias/TC-B2C123-APP-003-android.png>)

---

### TC-B2C123-APP-004 - Verificar que continuar con carro y otra tienda abastecedora muestra el modal No se te escapen [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Duración | 52.0 s |
| Spec | tests-app/B2C-123.spec.ts:77 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es Calle Uno 23, La Florida
- El carro contiene 000000000000675191-UN
- La tienda por defecto de T-551, Futrono es distinta a la de Calle Uno 23, La Florida

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, T-551, Futrono, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Aún no llegamos a esta dirección".
7. El usuario toca "Continuar con esta dirección".
8. El sistema muestra un loader y verifica la disponibilidad de productos.

**Resultado esperado**

Se muestra el modal "Algunos productos podrían agotarse" (B2C-126).

**Resultado obtenido**

Con 'Calle Uno 23, La Florida' activa y el carro con 000000000000675191-UN, al confirmar 'T-551, Futrono' y continuar aparece 'Algunos productos podrían agotarse' (B2C-126).

**Observación**

Con 'Calle Uno 23, La Florida' activa y el carro con 000000000000675191-UN, al confirmar 'T-551, Futrono' y continuar aparece 'Algunos productos podrían agotarse' (B2C-126). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 2 — home con direccion y carro](<B2C-123 APP Evidencias/TC-B2C123-APP-004-android-p02-home-con-direccion-y-carro.png>)

![Android · Paso 5 — detalles de la direccion sin cobertura](<B2C-123 APP Evidencias/TC-B2C123-APP-004-android-p05-detalles-de-la-direccion-sin-cobertura.png>)

![Android · Paso 6 — modal aun no llegamos a esta direccion](<B2C-123 APP Evidencias/TC-B2C123-APP-004-android-p06-modal-aun-no-llegamos-a-esta-direccion.png>)

![Estado final del caso](<B2C-123 APP Evidencias/TC-B2C123-APP-004-android.png>)

---

### TC-B2C123-APP-005 - Verificar que Cambiar método de entrega vuelve al modal Elige tu método de entrega [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Duración | 30.5 s |
| Spec | tests-app/B2C-123.spec.ts:89 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App

**Data utilizada**

v1.0.7, iOS, T-551, Futrono

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Aún no llegamos a esta dirección".
7. El usuario toca "Cambiar método de entrega".

**Resultado esperado**

El modal "Aún no llegamos a esta dirección" se cierra y se muestra el modal "Elige tu método de entrega".

**Resultado obtenido**

'Cambiar método de entrega' cierra 'Aún no llegamos a esta dirección' y vuelve 'Elige tu método de entrega'.

**Observación**

'Cambiar método de entrega' cierra 'Aún no llegamos a esta dirección' y vuelve 'Elige tu método de entrega'. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 5 — detalles de la direccion sin cobertura](<B2C-123 APP Evidencias/TC-B2C123-APP-005-android-p05-detalles-de-la-direccion-sin-cobertura.png>)

![Android · Paso 6 — modal aun no llegamos a esta direccion](<B2C-123 APP Evidencias/TC-B2C123-APP-005-android-p06-modal-aun-no-llegamos-a-esta-direccion.png>)

![Estado final del caso](<B2C-123 APP Evidencias/TC-B2C123-APP-005-android.png>)

---

### TC-B2C123-APP-006 - Verificar que una nueva dirección con cobertura se setea y vuelve a la página de origen [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Duración | 33.3 s |
| Spec | tests-app/B2C-123.spec.ts:99 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, T-551, Futrono, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App y navega a una PLP.
2. El usuario toca el Store Locator del navbar.
3. El usuario ingresa T-551, Futrono y la confirma.
4. El sistema muestra el modal "Aún no llegamos a esta dirección".
5. El usuario toca "Cambiar método de entrega".
6. El usuario ingresa Calle Uno 23, La Florida y la confirma.

**Resultado esperado**

El modal se cierra, el Store Locator muestra Calle Uno 23, La Florida y el usuario vuelve a la PLP.

**Resultado obtenido**

Esperado: desde la PLP, Store Locator → sin cobertura → 'Cambiar método de entrega' → Calle Uno 23, La Florida y volver a la PLP. Obtenido: la PLP de la app (listado de 'Mostrar todo' de 'Los más vendidos'; {PLP_URL} es de la web) no muestra el Store Locator, así que el flujo no puede empezar desde ahí. Es lo reportado en B2C-1165 (DESCARTADO); no se abre bug nuevo.

**Observación**

Esperado: desde la PLP, Store Locator → sin cobertura → 'Cambiar método de entrega' → Calle Uno 23, La Florida y volver a la PLP. Obtenido: la PLP de la app (listado de 'Mostrar todo' de 'Los más vendidos'; {PLP_URL} es de la web) no muestra el Store Locator, así que el flujo no puede empezar desde ahí. Es lo reportado en B2C-1165 (DESCARTADO); no se abre bug nuevo. tests-app/B2C-123.spec.ts:99. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — plp](<B2C-123 APP Evidencias/TC-B2C123-APP-006-android-p01-plp.png>)

![Estado al fallar la aserción](<B2C-123 APP Evidencias/TC-B2C123-APP-006-android.png>)

---

### TC-B2C123-APP-007 - Verificar que con dirección sin cobertura agregar un producto se bloquea con un toast [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Duración | 48.9 s |
| Spec | tests-app/B2C-123.spec.ts:120 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección T-551, Futrono está activa con la etiqueta "Despacho sin cobertura"

**Data utilizada**

v1.0.7, iOS, T-551, Futrono, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home con la etiqueta "Despacho sin cobertura".
3. El usuario busca 000000000000675191-UN en la App y lo agrega al carro.

**Resultado esperado**

Se muestra el toast de error "No tenemos cobertura para la dirección actual, seleccione otra dirección" con X de cierre manual y 000000000000675191-UN no se agrega al carro.

**Resultado obtenido**

Esperado: toast 'No tenemos cobertura para la dirección actual, seleccione otra dirección' con X. Obtenido: 'Cambia tu dirección de despacho para poder agregar productos.'. La X y el bloqueo sí se cumplen (el SKU no se agrega). Bug: B2C-1205.

**Observación**

Esperado: toast 'No tenemos cobertura para la dirección actual, seleccione otra dirección' con X. Obtenido: 'Cambia tu dirección de despacho para poder agregar productos.'. La X y el bloqueo sí se cumplen (el SKU no se agrega). Bug: B2C-1205. tests-app/B2C-123.spec.ts:120. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 2 — home con despacho sin cobertura](<B2C-123 APP Evidencias/TC-B2C123-APP-007-android-p02-home-con-despacho-sin-cobertura.png>)

![Android · Paso 3 — toast al agregar](<B2C-123 APP Evidencias/TC-B2C123-APP-007-android-p03-toast-al-agregar.png>)

![Android · Paso 5 — detalles de la direccion sin cobertura](<B2C-123 APP Evidencias/TC-B2C123-APP-007-android-p05-detalles-de-la-direccion-sin-cobertura.png>)

![Android · Paso 6 — modal aun no llegamos a esta direccion](<B2C-123 APP Evidencias/TC-B2C123-APP-007-android-p06-modal-aun-no-llegamos-a-esta-direccion.png>)

![Estado al fallar la aserción](<B2C-123 APP Evidencias/TC-B2C123-APP-007-android.png>)

---

### TC-B2C123-APP-008 - Verificar que con dirección sin cobertura los productos del carro quedan no disponibles [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contenía 000000000000675191-UN antes de continuar con la dirección sin cobertura
- La dirección T-551, Futrono está activa con la etiqueta "Despacho sin cobertura"

**Data utilizada**

v1.0.7, iOS, T-551, Futrono, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.

**Resultado esperado**

000000000000675191-UN se muestra marcado como no disponible en el carro.

**Observación**

Causa: la precondición pide el carro con {SKU_VALID_001} antes de aplicar la dirección sin cobertura, y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'). Acción: declarar en la fila la dirección con cobertura con la que se arma el carro. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C123-APP-009 - Verificar que continuar con la dirección sin cobertura desde Mis envíos lleva al Home [App] [Logueado]

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
- El carro contiene 000000000000675191-UN
- Método de entrega activo con cobertura
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

v1.0.7, iOS, T-551, Futrono, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega" y luego "Continuar" en el modal de sugeridos si aparece.
4. El sistema carga la página "Datos de entrega" (Mis Envíos).
5. El usuario toca la tarjeta de dirección e ingresa T-551, Futrono.
6. El usuario completa la validación OTP.
7. El sistema muestra el modal "Aún no llegamos a esta dirección".
8. El usuario toca "Continuar con esta dirección".

**Resultado esperado**

El usuario es redirigido al Home con T-551, Futrono seteada y la etiqueta de sin cobertura.

**Observación**

Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C123-APP-010 - Verificar que al iniciar sesión una dirección que recuperó cobertura pierde la etiqueta [App] [Logueado]

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
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com
- La última dirección activa del perfil fue marcada sin cobertura en una sesión anterior
- La zona de esa dirección ya tiene cobertura en Janis

**Data utilizada**

v1.0.7, iOS, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema re-verifica la cobertura de la dirección guardada.
3. El usuario busca 000000000000675191-UN en la App y lo agrega al carro.

**Resultado esperado**

El Store Locator muestra la dirección sin "Despacho sin cobertura" y 000000000000675191-UN se agrega al carro con normalidad.

**Observación**

Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no está registrada en DEV (el login web abre 'Crear cuenta') y además es un correo, que la app v1.0.7 no acepta para iniciar sesión (solo RUT). Acción: declarar una cuenta registrada con RUT y dejarla en el estado que pide el TC. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C123-APP-011 - Verificar que al iniciar sesión una dirección que sigue sin cobertura mantiene la etiqueta [App] [Logueado]

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
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com
- La última dirección activa del perfil está sin cobertura y Janis sigue sin cobertura para esas coordenadas

**Data utilizada**

v1.0.7, iOS, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema re-verifica la cobertura de la dirección guardada.

**Resultado esperado**

El Store Locator mantiene la dirección con la etiqueta "Despacho sin cobertura".

**Observación**

Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no está registrada en DEV (el login web abre 'Crear cuenta') y además es un correo, que la app v1.0.7 no acepta para iniciar sesión (solo RUT). Acción: declarar una cuenta registrada con RUT y dejarla en el estado que pide el TC. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C123-APP-012 - Verificar que si la re-verificación falla se mantiene el último estado sin cobertura [App] [Logueado]

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
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com
- La última dirección activa del perfil está sin cobertura
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT}

**Data utilizada**

v1.0.7, iOS, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com, {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema intenta re-verificar la cobertura y la llamada falla.

**Resultado esperado**

El Store Locator mantiene la etiqueta "Despacho sin cobertura" sin cambios.

**Observación**

Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no está registrada en DEV (el login web abre 'Crear cuenta') y además es un correo, que la app v1.0.7 no acepta para iniciar sesión (solo RUT). Acción: declarar una cuenta registrada con RUT y dejarla en el estado que pide el TC. Además, {HERRAMIENTA_PROXY_APP} y {JANIS_API_ENDPOINT} están en TBD en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C123-APP-013 - Verificar que seleccionar una tienda de retiro sin cobertura de despacho muestra el modal Aún no llegamos [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |
| Duración | 38.4 s |
| Spec | tests-app/B2C-123.spec.ts:141 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App

**Data utilizada**

v1.0.7, iOS, Unimarc Los Lagos II

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega".
5. El usuario selecciona la pestaña "Retiro en tienda".
6. El usuario selecciona la tienda Unimarc Los Lagos II.
7. El sistema verifica cobertura de despacho y detecta que la tienda no está dentro de la zona.

**Resultado esperado**

Se muestra el modal "Aún no llegamos a esta dirección" con el mensaje "Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc" y las opciones "Continuar con esta dirección" y "Cambiar método de entrega".

**Resultado obtenido**

Esperado: modal 'Aún no llegamos a esta dirección' con su mensaje y 'Continuar con esta dirección' / 'Cambiar método de entrega'. Obtenido con 'Unimarc Los Lagos II': 'Esta tienda aún no está disponible para retiro', 'Prueba con otra tienda dentro de nuestra zona de cobertura o cambia tu método de entrega a despacho a domicilio.' y 'Continuar con esta tienda' / 'Cambiar método de entrega'. Bug: B2C-1206.

**Observación**

Esperado: modal 'Aún no llegamos a esta dirección' con su mensaje y 'Continuar con esta dirección' / 'Cambiar método de entrega'. Obtenido con 'Unimarc Los Lagos II': 'Esta tienda aún no está disponible para retiro', 'Prueba con otra tienda dentro de nuestra zona de cobertura o cambia tu método de entrega a despacho a domicilio.' y 'Continuar con esta tienda' / 'Cambiar método de entrega'. Bug: B2C-1206. tests-app/B2C-123.spec.ts:141. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 7 — modal esta tienda aun no esta disponible para retiro](<B2C-123 APP Evidencias/TC-B2C123-APP-013-android-p07-modal-esta-tienda-aun-no-esta-disponible-para-retiro.png>)

![Estado al fallar la aserción](<B2C-123 APP Evidencias/TC-B2C123-APP-013-android.png>)

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
  "suite": "B2C-123 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-123 APP Test Cases.xlsx",
  "title": "B2C-123 APP - Sin cobertura de despacho - Evidencias QA",
  "updated_at": "2026-10-14"
 },
 "history": {
  "2026-10-14": [
   "TC-B2C123-APP-001",
   "TC-B2C123-APP-002",
   "TC-B2C123-APP-003",
   "TC-B2C123-APP-004",
   "TC-B2C123-APP-005",
   "TC-B2C123-APP-006",
   "TC-B2C123-APP-007",
   "TC-B2C123-APP-008",
   "TC-B2C123-APP-009",
   "TC-B2C123-APP-010",
   "TC-B2C123-APP-011",
   "TC-B2C123-APP-012",
   "TC-B2C123-APP-013"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "duration_s": 27.2,
   "executed_at": "2026-10-14",
   "expected": "Se muestra el modal \"Aún no llegamos a esta dirección\" con el mensaje \"Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc\" y las opciones \"Continuar con esta dirección\" y \"Cambiar método de entrega\".",
   "form_factor": "app",
   "id": "TC-B2C123-APP-001",
   "name": "Verificar que una dirección nueva fuera de zona muestra el modal Aún no llegamos con sus opciones [App] [Guest]",
   "observation": "Con 'T-551, Futrono' se abre 'Aún no llegamos a esta dirección' con el mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc.' (la app agrega el punto final), 'Continuar con esta dirección' y 'Cambiar método de entrega'. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Con 'T-551, Futrono' se abre 'Aún no llegamos a esta dirección' con el mensaje 'Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc.' (la app agrega el punto final), 'Continuar con esta dirección' y 'Cambiar método de entrega'.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home como invitado",
     "file": "TC-B2C123-APP-001-android-p02-home-como-invitado.png"
    },
    {
     "caption": "Android · Paso 5 — detalles de la direccion sin cobertura",
     "file": "TC-B2C123-APP-001-android-p05-detalles-de-la-direccion-sin-cobertura.png"
    },
    {
     "caption": "Android · Paso 6 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-APP-001-android-p06-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C123-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-123.spec.ts:47",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Aún no llegamos a esta dirección\".",
   "test_data": "v1.0.7, iOS, T-551, Futrono"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "Se muestra el modal \"Aún no llegamos a esta dirección\" con sus opciones \"Continuar con esta dirección\" y \"Cambiar método de entrega\".",
   "form_factor": "app",
   "id": "TC-B2C123-APP-002",
   "name": "Verificar que una dirección guardada sin cobertura muestra el modal tras validar OTP [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta tiene guardada la dirección T-551, Futrono\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El usuario selecciona la dirección guardada T-551, Futrono.\n5. El usuario completa la validación OTP con el código recibido.",
   "test_data": "v1.0.7, iOS, T-551, Futrono, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "duration_s": 40.0,
   "executed_at": "2026-10-14",
   "expected": "La dirección T-551, Futrono queda seteada y el Store Locator muestra \"Despacho sin cobertura\" debajo, también al navegar a otras páginas.",
   "form_factor": "app",
   "id": "TC-B2C123-APP-003",
   "name": "Verificar que continuar sin carro setea la dirección con la etiqueta Despacho sin cobertura [App] [Guest]",
   "observation": "Tras 'Continuar con esta dirección' el navbar muestra 'T-551' con 'Despacho sin cobertura' y se mantiene al pasar por Categorías y volver al Home. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Tras 'Continuar con esta dirección' el navbar muestra 'T-551' con 'Despacho sin cobertura' y se mantiene al pasar por Categorías y volver al Home.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — detalles de la direccion sin cobertura",
     "file": "TC-B2C123-APP-003-android-p05-detalles-de-la-direccion-sin-cobertura.png"
    },
    {
     "caption": "Android · Paso 6 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-APP-003-android-p06-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Android · Paso 7 — home con despacho sin cobertura",
     "file": "TC-B2C123-APP-003-android-p07-home-con-despacho-sin-cobertura.png"
    },
    {
     "caption": "Android · Paso 9 — categorias",
     "file": "TC-B2C123-APP-003-android-p09-categorias.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C123-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-123.spec.ts:59",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n7. El usuario toca \"Continuar con esta dirección\".\n8. El sistema muestra un loader.\n9. El usuario navega a otra página del sitio.",
   "test_data": "v1.0.7, iOS, T-551, Futrono, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "duration_s": 52.0,
   "executed_at": "2026-10-14",
   "expected": "Se muestra el modal \"Algunos productos podrían agotarse\" (B2C-126).",
   "form_factor": "app",
   "id": "TC-B2C123-APP-004",
   "name": "Verificar que continuar con carro y otra tienda abastecedora muestra el modal No se te escapen [App] [Guest]",
   "observation": "Con 'Calle Uno 23, La Florida' activa y el carro con 000000000000675191-UN, al confirmar 'T-551, Futrono' y continuar aparece 'Algunos productos podrían agotarse' (B2C-126). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Con 'Calle Uno 23, La Florida' activa y el carro con 000000000000675191-UN, al confirmar 'T-551, Futrono' y continuar aparece 'Algunos productos podrían agotarse' (B2C-126).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es Calle Uno 23, La Florida\n- El carro contiene 000000000000675191-UN\n- La tienda por defecto de T-551, Futrono es distinta a la de Calle Uno 23, La Florida",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con direccion y carro",
     "file": "TC-B2C123-APP-004-android-p02-home-con-direccion-y-carro.png"
    },
    {
     "caption": "Android · Paso 5 — detalles de la direccion sin cobertura",
     "file": "TC-B2C123-APP-004-android-p05-detalles-de-la-direccion-sin-cobertura.png"
    },
    {
     "caption": "Android · Paso 6 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-APP-004-android-p06-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C123-APP-004-android.png"
    }
   ],
   "spec": "tests-app/B2C-123.spec.ts:77",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n7. El usuario toca \"Continuar con esta dirección\".\n8. El sistema muestra un loader y verifica la disponibilidad de productos.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, T-551, Futrono, 000000000000675191-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "duration_s": 30.5,
   "executed_at": "2026-10-14",
   "expected": "El modal \"Aún no llegamos a esta dirección\" se cierra y se muestra el modal \"Elige tu método de entrega\".",
   "form_factor": "app",
   "id": "TC-B2C123-APP-005",
   "name": "Verificar que Cambiar método de entrega vuelve al modal Elige tu método de entrega [App] [Guest]",
   "observation": "'Cambiar método de entrega' cierra 'Aún no llegamos a esta dirección' y vuelve 'Elige tu método de entrega'. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "'Cambiar método de entrega' cierra 'Aún no llegamos a esta dirección' y vuelve 'Elige tu método de entrega'.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — detalles de la direccion sin cobertura",
     "file": "TC-B2C123-APP-005-android-p05-detalles-de-la-direccion-sin-cobertura.png"
    },
    {
     "caption": "Android · Paso 6 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-APP-005-android-p06-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C123-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-123.spec.ts:89",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección T-551, Futrono, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n7. El usuario toca \"Cambiar método de entrega\".",
   "test_data": "v1.0.7, iOS, T-551, Futrono"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "duration_s": 33.3,
   "executed_at": "2026-10-14",
   "expected": "El modal se cierra, el Store Locator muestra Calle Uno 23, La Florida y el usuario vuelve a la PLP.",
   "form_factor": "app",
   "id": "TC-B2C123-APP-006",
   "name": "Verificar que una nueva dirección con cobertura se setea y vuelve a la página de origen [App] [Guest]",
   "observation": "Esperado: desde la PLP, Store Locator → sin cobertura → 'Cambiar método de entrega' → Calle Uno 23, La Florida y volver a la PLP. Obtenido: la PLP de la app (listado de 'Mostrar todo' de 'Los más vendidos'; {PLP_URL} es de la web) no muestra el Store Locator, así que el flujo no puede empezar desde ahí. Es lo reportado en B2C-1165 (DESCARTADO); no se abre bug nuevo. tests-app/B2C-123.spec.ts:99. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Esperado: desde la PLP, Store Locator → sin cobertura → 'Cambiar método de entrega' → Calle Uno 23, La Florida y volver a la PLP. Obtenido: la PLP de la app (listado de 'Mostrar todo' de 'Los más vendidos'; {PLP_URL} es de la web) no muestra el Store Locator, así que el flujo no puede empezar desde ahí. Es lo reportado en B2C-1165 (DESCARTADO); no se abre bug nuevo.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — plp",
     "file": "TC-B2C123-APP-006-android-p01-plp.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C123-APP-006-android.png"
    }
   ],
   "spec": "tests-app/B2C-123.spec.ts:99",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App y navega a una PLP.\n2. El usuario toca el Store Locator del navbar.\n3. El usuario ingresa T-551, Futrono y la confirma.\n4. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n5. El usuario toca \"Cambiar método de entrega\".\n6. El usuario ingresa Calle Uno 23, La Florida y la confirma.",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, T-551, Futrono, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "duration_s": 48.9,
   "executed_at": "2026-10-14",
   "expected": "Se muestra el toast de error \"No tenemos cobertura para la dirección actual, seleccione otra dirección\" con X de cierre manual y 000000000000675191-UN no se agrega al carro.",
   "form_factor": "app",
   "id": "TC-B2C123-APP-007",
   "name": "Verificar que con dirección sin cobertura agregar un producto se bloquea con un toast [App] [Guest]",
   "observation": "Esperado: toast 'No tenemos cobertura para la dirección actual, seleccione otra dirección' con X. Obtenido: 'Cambia tu dirección de despacho para poder agregar productos.'. La X y el bloqueo sí se cumplen (el SKU no se agrega). Bug: B2C-1205. tests-app/B2C-123.spec.ts:120. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Esperado: toast 'No tenemos cobertura para la dirección actual, seleccione otra dirección' con X. Obtenido: 'Cambia tu dirección de despacho para poder agregar productos.'. La X y el bloqueo sí se cumplen (el SKU no se agrega). Bug: B2C-1205.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección T-551, Futrono está activa con la etiqueta \"Despacho sin cobertura\"",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con despacho sin cobertura",
     "file": "TC-B2C123-APP-007-android-p02-home-con-despacho-sin-cobertura.png"
    },
    {
     "caption": "Android · Paso 3 — toast al agregar",
     "file": "TC-B2C123-APP-007-android-p03-toast-al-agregar.png"
    },
    {
     "caption": "Android · Paso 5 — detalles de la direccion sin cobertura",
     "file": "TC-B2C123-APP-007-android-p05-detalles-de-la-direccion-sin-cobertura.png"
    },
    {
     "caption": "Android · Paso 6 — modal aun no llegamos a esta direccion",
     "file": "TC-B2C123-APP-007-android-p06-modal-aun-no-llegamos-a-esta-direccion.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C123-APP-007-android.png"
    }
   ],
   "spec": "tests-app/B2C-123.spec.ts:120",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home con la etiqueta \"Despacho sin cobertura\".\n3. El usuario busca 000000000000675191-UN en la App y lo agrega al carro.",
   "test_data": "v1.0.7, iOS, T-551, Futrono, 000000000000675191-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "000000000000675191-UN se muestra marcado como no disponible en el carro.",
   "form_factor": "app",
   "id": "TC-B2C123-APP-008",
   "name": "Verificar que con dirección sin cobertura los productos del carro quedan no disponibles [App] [Guest]",
   "observation": "Causa: la precondición pide el carro con {SKU_VALID_001} antes de aplicar la dirección sin cobertura, y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'). Acción: declarar en la fila la dirección con cobertura con la que se arma el carro. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contenía 000000000000675191-UN antes de continuar con la dirección sin cobertura\n- La dirección T-551, Futrono está activa con la etiqueta \"Despacho sin cobertura\"",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.",
   "test_data": "v1.0.7, iOS, T-551, Futrono, 000000000000675191-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El usuario es redirigido al Home con T-551, Futrono seteada y la etiqueta de sin cobertura.",
   "form_factor": "app",
   "id": "TC-B2C123-APP-009",
   "name": "Verificar que continuar con la dirección sin cobertura desde Mis envíos lleva al Home [App] [Logueado]",
   "observation": "Causa: {USER_AUTH_001} es un correo y en la app v1.0.7 el login solo acepta RUT: 'Clave de acceso por correo' está deshabilitado. Acción: declarar una cuenta con RUT y contraseña, o entregar un build con el acceso por correo habilitado. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN\n- Método de entrega activo con cobertura\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\" y luego \"Continuar\" en el modal de sugeridos si aparece.\n4. El sistema carga la página \"Datos de entrega\" (Mis Envíos).\n5. El usuario toca la tarjeta de dirección e ingresa T-551, Futrono.\n6. El usuario completa la validación OTP.\n7. El sistema muestra el modal \"Aún no llegamos a esta dirección\".\n8. El usuario toca \"Continuar con esta dirección\".",
   "test_data": "v1.0.7, iOS, T-551, Futrono, 000000000000675191-UN, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El Store Locator muestra la dirección sin \"Despacho sin cobertura\" y 000000000000675191-UN se agrega al carro con normalidad.",
   "form_factor": "app",
   "id": "TC-B2C123-APP-010",
   "name": "Verificar que al iniciar sesión una dirección que recuperó cobertura pierde la etiqueta [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no está registrada en DEV (el login web abre 'Crear cuenta') y además es un correo, que la app v1.0.7 no acepta para iniciar sesión (solo RUT). Acción: declarar una cuenta registrada con RUT y dejarla en el estado que pide el TC. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com\n- La última dirección activa del perfil fue marcada sin cobertura en una sesión anterior\n- La zona de esa dirección ya tiene cobertura en Janis",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema re-verifica la cobertura de la dirección guardada.\n3. El usuario busca 000000000000675191-UN en la App y lo agrega al carro.",
   "test_data": "v1.0.7, iOS, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com, 000000000000675191-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El Store Locator mantiene la dirección con la etiqueta \"Despacho sin cobertura\".",
   "form_factor": "app",
   "id": "TC-B2C123-APP-011",
   "name": "Verificar que al iniciar sesión una dirección que sigue sin cobertura mantiene la etiqueta [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no está registrada en DEV (el login web abre 'Crear cuenta') y además es un correo, que la app v1.0.7 no acepta para iniciar sesión (solo RUT). Acción: declarar una cuenta registrada con RUT y dejarla en el estado que pide el TC. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com\n- La última dirección activa del perfil está sin cobertura y Janis sigue sin cobertura para esas coordenadas",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema re-verifica la cobertura de la dirección guardada.",
   "test_data": "v1.0.7, iOS, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-14",
   "expected": "El Store Locator mantiene la etiqueta \"Despacho sin cobertura\" sin cambios.",
   "form_factor": "app",
   "id": "TC-B2C123-APP-012",
   "name": "Verificar que si la re-verificación falla se mantiene el último estado sin cobertura [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_DIRECCION_SIN_COBERTURA_USER} (vhchirinos+nocobertura@avatar-global.com) no está registrada en DEV (el login web abre 'Crear cuenta') y además es un correo, que la app v1.0.7 no acepta para iniciar sesión (solo RUT). Acción: declarar una cuenta registrada con RUT y dejarla en el estado que pide el TC. Además, {HERRAMIENTA_PROXY_APP} y {JANIS_API_ENDPOINT} están en TBD en el Excel de data. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+nocobertura@avatar-global.com\n- La última dirección activa del perfil está sin cobertura\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema intenta re-verificar la cobertura y la llamada falla.",
   "test_data": "v1.0.7, iOS, {COMPRADOR_DIRECCION_SIN_COBERTURA_PASSWORD}, vhchirinos+nocobertura@avatar-global.com, {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "duration_s": 38.4,
   "executed_at": "2026-10-14",
   "expected": "Se muestra el modal \"Aún no llegamos a esta dirección\" con el mensaje \"Revisa que esté correcta, prueba con otra dentro de nuestra zona de cobertura o cambia tu método de entrega a una de nuestras tiendas Unimarc\" y las opciones \"Continuar con esta dirección\" y \"Cambiar método de entrega\".",
   "form_factor": "app",
   "id": "TC-B2C123-APP-013",
   "name": "Verificar que seleccionar una tienda de retiro sin cobertura de despacho muestra el modal Aún no llegamos [App] [Guest]",
   "observation": "Esperado: modal 'Aún no llegamos a esta dirección' con su mensaje y 'Continuar con esta dirección' / 'Cambiar método de entrega'. Obtenido con 'Unimarc Los Lagos II': 'Esta tienda aún no está disponible para retiro', 'Prueba con otra tienda dentro de nuestra zona de cobertura o cambia tu método de entrega a despacho a domicilio.' y 'Continuar con esta tienda' / 'Cambiar método de entrega'. Bug: B2C-1206. tests-app/B2C-123.spec.ts:141. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Esperado: modal 'Aún no llegamos a esta dirección' con su mensaje y 'Continuar con esta dirección' / 'Cambiar método de entrega'. Obtenido con 'Unimarc Los Lagos II': 'Esta tienda aún no está disponible para retiro', 'Prueba con otra tienda dentro de nuestra zona de cobertura o cambia tu método de entrega a despacho a domicilio.' y 'Continuar con esta tienda' / 'Cambiar método de entrega'. Bug: B2C-1206.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App",
   "screenshots": [
    {
     "caption": "Android · Paso 7 — modal esta tienda aun no esta disponible para retiro",
     "file": "TC-B2C123-APP-013-android-p07-modal-esta-tienda-aun-no-esta-disponible-para-retiro.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C123-APP-013-android.png"
    }
   ],
   "spec": "tests-app/B2C-123.spec.ts:141",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\".\n5. El usuario selecciona la pestaña \"Retiro en tienda\".\n6. El usuario selecciona la tienda Unimarc Los Lagos II.\n7. El sistema verifica cobertura de despacho y detecta que la tienda no está dentro de la zona.",
   "test_data": "v1.0.7, iOS, Unimarc Los Lagos II"
  }
 ]
}
-->
