# B2C-63 APP - Completa la promo - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-63 APP |
| Última actualización | 2026-11-13 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc (DEV) · cl.smu.unimarcapp.sfcc.qa |
| Dispositivo Android | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/Pendiente IOS/B2C-63 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado | 17 |
| Rechazado | 1 |
| **Total** | **18** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-13 | 1 | TC-B2C63-APP-007 |
| 2026-10-15 | 18 | TC-B2C63-APP-001, TC-B2C63-APP-002, TC-B2C63-APP-003, TC-B2C63-APP-004, TC-B2C63-APP-005, TC-B2C63-APP-006, TC-B2C63-APP-007, TC-B2C63-APP-008, TC-B2C63-APP-009, TC-B2C63-APP-010, TC-B2C63-APP-011, TC-B2C63-APP-012, TC-B2C63-APP-013, TC-B2C63-APP-014, TC-B2C63-APP-015, TC-B2C63-APP-016, TC-B2C63-APP-017, TC-B2C63-APP-018 |

## Detalle por caso de prueba

### TC-B2C63-APP-001 - Verificar que agregar la 1ª unidad desde el shelf muestra "Agrega N y ahorra más" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000664214001-UN tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

v1.0.7, 000000000664214001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000664214001-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000664214001-UN.
4. El usuario toca "Agregar" en el shelf.
5. El sistema agrega la unidad y muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.

**Resultado esperado**

Se muestra el toast "Agrega 1 y ahorra más" y la barra de progreso indica 1 de 2.

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-001-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-001-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — pdp sin barra de progreso](<B2C-63 APP Evidencias/TC-B2C63-APP-001-android-p03-pdp-sin-barra-de-progreso.png>)

---

### TC-B2C63-APP-002 - Verificar que completar el umbral desde el shelf muestra "¡Completaste la promo!" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000664214001-UN tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

v1.0.7, 000000000664214001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000664214001-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000664214001-UN.
4. El usuario toca "Agregar" en el shelf.
5. El sistema agrega la unidad y muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.
6. El usuario toca "+" en el shelf.
7. El sistema actualiza la cantidad y muestra el toast "¡Completaste la promo!" con la barra de progreso completa.

**Resultado esperado**

Con 2 unidades se muestra "¡Completaste la promo!" y la barra de progreso queda completa.

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-002-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-002-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — pdp sin barra de progreso](<B2C-63 APP Evidencias/TC-B2C63-APP-002-android-p03-pdp-sin-barra-de-progreso.png>)

---

### TC-B2C63-APP-003 - Verificar que la barra de progreso y el contador se actualizan con cada unidad [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000641229001-UN tiene una promo "Completa la promo" 3x2 vigente (mismo SKU, sin código especial)

**Data utilizada**

v1.0.7, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000641229001-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000641229001-UN.
4. El usuario toca "Agregar" y luego "+" dos veces.
5. El sistema muestra "Agrega 2 y ahorra más", luego "Agrega 1 y ahorra más" y finalmente "¡Completaste la promo!", avanzando la barra en cada paso.

**Resultado esperado**

La barra de progreso, el contador y el mensaje cambian con cada unidad sin recargar la pantalla.

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-003-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-003-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — srp 3 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-003-android-p03-srp-3-unidades-sin-toast.png>)

---

### TC-B2C63-APP-004 - Verificar que agregar desde la PDP muestra el toast y la barra de progreso [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000664214001-UN tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

v1.0.7, 000000000664214001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7, busca 000000000664214001-UN y abre su PDP.
2. El sistema carga la PDP de 000000000664214001-UN.
3. El usuario toca "Agregar".
4. El sistema agrega la unidad y muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.

**Resultado esperado**

Se muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en la PDP.

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-004-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-004-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — pdp sin barra de progreso](<B2C-63 APP Evidencias/TC-B2C63-APP-004-android-p03-pdp-sin-barra-de-progreso.png>)

---

### TC-B2C63-APP-005 - Verificar que agregar desde un modal con shelves muestra el toast [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Modal
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000664214001-UN tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

v1.0.7, 000000000664214001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario abre un modal que contiene el shelf de 000000000664214001-UN.
3. El sistema muestra el modal con el shelf.
4. El usuario toca "Agregar" en el shelf del modal.
5. El sistema agrega la unidad y muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.

**Resultado esperado**

Se muestra el toast "Agrega 1 y ahorra más" con la barra de progreso al agregar desde el modal.

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-005-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-005-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — pdp sin barra de progreso](<B2C-63 APP Evidencias/TC-B2C63-APP-005-android-p03-pdp-sin-barra-de-progreso.png>)

---

### TC-B2C63-APP-006 - Verificar que agregar desde un carrusel del Home muestra el toast [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000664214001-UN tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)
- 000000000664214001-UN aparece en un carrusel del Home

**Data utilizada**

v1.0.7, 000000000664214001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home con un carrusel que contiene 000000000664214001-UN.
3. El usuario toca "Agregar" en ese producto del carrusel.
4. El sistema agrega la unidad y muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.

**Resultado esperado**

Se muestra el toast "Agrega 1 y ahorra más" con la barra de progreso al agregar desde el carrusel.

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-006-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-006-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — pdp sin barra de progreso](<B2C-63 APP Evidencias/TC-B2C63-APP-006-android-p03-pdp-sin-barra-de-progreso.png>)

---

### TC-B2C63-APP-007 - Verificar que un usuario logueado ve el toast al agregar desde el shelf [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-13 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026) |
| Spec | tests-app/B2C-63-50-pendientes.spec.ts:33 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_COMPLETA_PROMO_2X1} tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_COMPLETA_PROMO_2X1} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com / Avatar1234.

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_2X1}.
4. El usuario toca "Agregar" en el shelf.
5. El sistema agrega la unidad y muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.

**Resultado esperado**

Se muestra el toast "Agrega 1 y ahorra más" con la barra de progreso.

**Resultado obtenido**

Se agrega la unidad, pero en lugar del toast «Agrega 1 y ahorra más» con barra de progreso aparece un tooltip «Te falta 1 para la promo» sin barra.

**Evidencia**

![Android · Paso 2 — shelf de 000000000664214001 un en los resultados](<B2C-63 APP Evidencias/TC-B2C63-APP-007-android-p02-shelf-de-000000000664214001-un-en-los-resultados.png>)

![Android · Paso 6 — shelf tras agregar](<B2C-63 APP Evidencias/TC-B2C63-APP-007-android-p06-shelf-tras-agregar.png>)

![Paso 3 — tras agregar 2](<B2C-63 APP Evidencias/B2C-1364-p03-tras-agregar-2.png>)

---

### TC-B2C63-APP-008 - Verificar que quitar una unidad tras completar vuelve el toast al estado en progreso [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000664214001-UN tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

v1.0.7, 000000000664214001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000664214001-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000664214001-UN.
4. El usuario toca "Agregar" y luego "+" hasta completar la promo.
5. El sistema actualiza la cantidad y muestra el toast "¡Completaste la promo!" con la barra de progreso completa.
6. El usuario toca "−" en el shelf.
7. El sistema actualiza la cantidad y muestra "Agrega 1 y ahorra más" con la barra en 1 de 2.

**Resultado esperado**

Tras quitar una unidad se vuelve a mostrar "Agrega 1 y ahorra más" y la barra retrocede a 1 de 2.

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-008-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-008-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — pdp sin barra de progreso](<B2C-63 APP Evidencias/TC-B2C63-APP-008-android-p03-pdp-sin-barra-de-progreso.png>)

---

### TC-B2C63-APP-009 - Verificar que la unidad siguiente a una promo completada inicia un nuevo tramo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000664214001-UN tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

v1.0.7, 000000000664214001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000664214001-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000664214001-UN.
4. El usuario toca "Agregar" y luego "+" hasta completar la promo.
5. El sistema actualiza la cantidad y muestra el toast "¡Completaste la promo!" con la barra de progreso completa.
6. El usuario toca "+" una vez más.
7. El sistema reinicia el avance y muestra "Agrega 1 y ahorra más" con la barra en 1 de 2.

**Resultado esperado**

Con 3 unidades se inicia el 2º tramo: la barra se reinicia a 1 de 2 y el contador muestra 3 unidades.

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-009-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-009-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — pdp sin barra de progreso](<B2C-63 APP Evidencias/TC-B2C63-APP-009-android-p03-pdp-sin-barra-de-progreso.png>)

---

### TC-B2C63-APP-010 - Verificar que disminuir unidades desde el shelf recalcula el progreso [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000641229001-UN tiene una promo "Completa la promo" 3x2 vigente (mismo SKU, sin código especial)

**Data utilizada**

v1.0.7, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000641229001-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000641229001-UN.
4. El usuario toca "Agregar" y luego "+" hasta tener 2 unidades.
5. El sistema muestra "Agrega 1 y ahorra más".
6. El usuario toca "−" en el shelf.
7. El sistema actualiza el carro y muestra "Agrega 2 y ahorra más".

**Resultado esperado**

Con 1 unidad el progreso y el mensaje se recalculan ("Agrega 2 y ahorra más").

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-010-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-010-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — srp 3 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-010-android-p03-srp-3-unidades-sin-toast.png>)

---

### TC-B2C63-APP-011 - Verificar que eliminar el producto desde el shelf resetea el progreso y oculta el toast [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000664214001-UN tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)

**Data utilizada**

v1.0.7, 000000000664214001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000664214001-UN y toca "Buscar" en el teclado.
3. El sistema muestra los resultados con el shelf de 000000000664214001-UN.
4. El usuario toca "Agregar".
5. El sistema agrega la unidad y muestra el toast "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.
6. El usuario toca "−" hasta llegar a 0 unidades.
7. El sistema quita el producto del carro y deja de mostrar el progreso de la promo.

**Resultado esperado**

El producto sale del carro, el shelf vuelve a mostrar "Agregar" y no se muestran toast ni barra de progreso.

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-011-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-011-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — pdp sin barra de progreso](<B2C-63 APP Evidencias/TC-B2C63-APP-011-android-p03-pdp-sin-barra-de-progreso.png>)

---

### TC-B2C63-APP-012 - Verificar que disminuir unidades desde un modal actualiza el progreso y el mensaje promocional [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Modal
- Método de entrega activo: Despacho a domicilio a Calle Uno 23, La Florida
- 000000000664214001-UN tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)
- El carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, 000000000664214001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario abre un modal que contiene el shelf de 000000000664214001-UN (desde la PLP o un carrusel).
3. El sistema muestra el modal con el shelf en 2 unidades y la promo completada.
4. El usuario toca "−" en el shelf del modal.
5. El sistema actualiza la cantidad a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

Dentro del modal el contador queda en 1, la barra de progreso retrocede a 1 de 2 y el mensaje cambia a "Agrega 1 y ahorra más"; el carro queda con 1 unidad.

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-012-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-012-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — pdp sin barra de progreso](<B2C-63 APP Evidencias/TC-B2C63-APP-012-android-p03-pdp-sin-barra-de-progreso.png>)

---

### TC-B2C63-APP-013 - Verificar que quitar unidades desde la PDP actualiza el contador, la barra de progreso y el mensaje promocional [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- Método de entrega activo: Despacho a domicilio a Calle Uno 23, La Florida
- 000000000664214001-UN tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)
- El carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, 000000000664214001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario abre la PDP de 000000000664214001-UN.
3. El sistema carga la PDP con el contador en 2 y la barra de progreso completa.
4. El usuario toca "−" en el stepper de la PDP.
5. El sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

En la PDP el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra "Agrega 1 y ahorra más".

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-013-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-013-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — pdp sin barra de progreso](<B2C-63 APP Evidencias/TC-B2C63-APP-013-android-p03-pdp-sin-barra-de-progreso.png>)

---

### TC-B2C63-APP-014 - Verificar que quitar unidades desde un carrusel del Home actualiza el contador, la barra de progreso y el mensaje promocional [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Método de entrega activo: Despacho a domicilio a Calle Uno 23, La Florida
- 000000000664214001-UN tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)
- El carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)
- 000000000664214001-UN aparece en un carrusel del Home

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, 000000000664214001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario ubica 000000000664214001-UN en un carrusel del Home.
3. El sistema muestra el shelf del carrusel con el contador en 2 y la barra de progreso completa.
4. El usuario toca "−" en el shelf del carrusel.
5. El sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

En el carrusel el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra "Agrega 1 y ahorra más".

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-014-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-014-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — pdp sin barra de progreso](<B2C-63 APP Evidencias/TC-B2C63-APP-014-android-p03-pdp-sin-barra-de-progreso.png>)

---

### TC-B2C63-APP-015 - Verificar que completar un segundo ciclo promocional muestra nuevamente el toast "¡Completaste la promo!" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo: Despacho a domicilio a Calle Uno 23, La Florida
- 000000000664214001-UN tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)
- El carro contiene 000000000664214001-UN x 3 (1er ciclo completado y 2º ciclo en 1 de 2)

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, 000000000664214001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000664214001-UN y toca "Buscar" en el teclado.
3. El sistema muestra el shelf de 000000000664214001-UN con el contador en 3 y la barra de progreso en 1 de 2.
4. El usuario toca "+" en el shelf.
5. El sistema actualiza el contador a 4, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

Con 4 unidades se muestra nuevamente el toast "¡Completaste la promo!", la barra de progreso queda completa y el contador muestra 4.

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-015-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-015-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — pdp sin barra de progreso](<B2C-63 APP Evidencias/TC-B2C63-APP-015-android-p03-pdp-sin-barra-de-progreso.png>)

---

### TC-B2C63-APP-016 - Verificar que disminuir de 4 a 3 unidades con dos ciclos completos recalcula el progreso promocional [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Resultados de búsqueda
- Método de entrega activo: Despacho a domicilio a Calle Uno 23, La Florida
- 000000000664214001-UN tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)
- El carro contiene 000000000664214001-UN x 4 (dos ciclos completos)

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, 000000000664214001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario busca 000000000664214001-UN y toca "Buscar" en el teclado.
3. El sistema muestra el shelf de 000000000664214001-UN con el contador en 4 y la barra de progreso completa.
4. El usuario toca "−" en el shelf.
5. El sistema actualiza el contador a 3, retrocede la barra de progreso a 1 de 2 y muestra "Agrega 1 y ahorra más".

**Resultado esperado**

Con 3 unidades el contador muestra 3, la barra de progreso queda en 1 de 2 (2º ciclo en progreso) y el mensaje cambia a "Agrega 1 y ahorra más"; el 1er ciclo sigue completo.

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-016-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-016-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — pdp sin barra de progreso](<B2C-63 APP Evidencias/TC-B2C63-APP-016-android-p03-pdp-sin-barra-de-progreso.png>)

---

### TC-B2C63-APP-017 - Verificar que el progreso promocional iniciado en el Home se mantiene al seguir agregando desde la PDP [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Método de entrega activo: Despacho a domicilio a Calle Uno 23, La Florida
- 000000000664214001-UN tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)
- Carro vacío
- 000000000664214001-UN aparece en un carrusel del Home

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, 000000000664214001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario toca "Agregar" en el shelf de 000000000664214001-UN en un carrusel del Home.
3. El sistema agrega la unidad y muestra "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.
4. El usuario abre la PDP de 000000000664214001-UN.
5. El sistema carga la PDP con el contador en 1 y la barra de progreso en 1 de 2.
6. El usuario toca "+" en el stepper de la PDP.
7. El sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

La PDP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra "¡Completaste la promo!".

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-017-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-017-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — pdp sin barra de progreso](<B2C-63 APP Evidencias/TC-B2C63-APP-017-android-p03-pdp-sin-barra-de-progreso.png>)

---

### TC-B2C63-APP-018 - Verificar que el progreso promocional iniciado en el Home se mantiene al seguir agregando desde los resultados de búsqueda [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-15 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Método de entrega activo: Despacho a domicilio a Calle Uno 23, La Florida
- 000000000664214001-UN tiene una promo "Completa la promo" 2x1 vigente (mismo SKU, sin código especial)
- Carro vacío
- 000000000664214001-UN aparece en un carrusel del Home

**Data utilizada**

v1.0.7, iOS, Calle Uno 23, La Florida, 000000000664214001-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario toca "Agregar" en el shelf de 000000000664214001-UN en un carrusel del Home.
3. El sistema agrega la unidad y muestra "Agrega 1 y ahorra más" con la barra de progreso en 1 de 2.
4. El usuario busca 000000000664214001-UN y toca "Buscar" en el teclado.
5. El sistema muestra el shelf de 000000000664214001-UN con el contador en 1 y la barra de progreso en 1 de 2.
6. El usuario toca "+" en el shelf.
7. El sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast "¡Completaste la promo!".

**Resultado esperado**

El shelf de los resultados conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra "¡Completaste la promo!".

**Resultado obtenido**

Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).

**Observación**

Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 1 — srp 1 unidad sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-018-android-p01-srp-1-unidad-sin-toast.png>)

![Android · Paso 2 — srp 2 unidades sin toast](<B2C-63 APP Evidencias/TC-B2C63-APP-018-android-p02-srp-2-unidades-sin-toast.png>)

![Android · Paso 3 — pdp sin barra de progreso](<B2C-63 APP Evidencias/TC-B2C63-APP-018-android-p03-pdp-sin-barra-de-progreso.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026)"
  },
  "environment": "App Unimarc (DEV) · cl.smu.unimarcapp.sfcc.qa",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-63 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/Pendiente IOS/B2C-63 APP Test Cases.xlsx",
  "title": "B2C-63 APP - Completa la promo - Evidencias QA",
  "updated_at": "2026-11-13"
 },
 "history": {
  "2026-10-15": [
   "TC-B2C63-APP-001",
   "TC-B2C63-APP-002",
   "TC-B2C63-APP-003",
   "TC-B2C63-APP-004",
   "TC-B2C63-APP-005",
   "TC-B2C63-APP-006",
   "TC-B2C63-APP-007",
   "TC-B2C63-APP-008",
   "TC-B2C63-APP-009",
   "TC-B2C63-APP-010",
   "TC-B2C63-APP-011",
   "TC-B2C63-APP-012",
   "TC-B2C63-APP-013",
   "TC-B2C63-APP-014",
   "TC-B2C63-APP-015",
   "TC-B2C63-APP-016",
   "TC-B2C63-APP-017",
   "TC-B2C63-APP-018"
  ],
  "2026-11-13": [
   "TC-B2C63-APP-007"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "Se muestra el toast \"Agrega 1 y ahorra más\" y la barra de progreso indica 1 de 2.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-001",
   "name": "Verificar que agregar la 1ª unidad desde el shelf muestra \"Agrega N y ahorra más\" [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000664214001-UN tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-001-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-001-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — pdp sin barra de progreso",
     "file": "TC-B2C63-APP-001-android-p03-pdp-sin-barra-de-progreso.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000664214001-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000664214001-UN.\n4. El usuario toca \"Agregar\" en el shelf.\n5. El sistema agrega la unidad y muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.",
   "test_data": "v1.0.7, 000000000664214001-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "Con 2 unidades se muestra \"¡Completaste la promo!\" y la barra de progreso queda completa.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-002",
   "name": "Verificar que completar el umbral desde el shelf muestra \"¡Completaste la promo!\" [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000664214001-UN tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-002-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-002-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — pdp sin barra de progreso",
     "file": "TC-B2C63-APP-002-android-p03-pdp-sin-barra-de-progreso.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000664214001-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000664214001-UN.\n4. El usuario toca \"Agregar\" en el shelf.\n5. El sistema agrega la unidad y muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n6. El usuario toca \"+\" en el shelf.\n7. El sistema actualiza la cantidad y muestra el toast \"¡Completaste la promo!\" con la barra de progreso completa.",
   "test_data": "v1.0.7, 000000000664214001-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "La barra de progreso, el contador y el mensaje cambian con cada unidad sin recargar la pantalla.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-003",
   "name": "Verificar que la barra de progreso y el contador se actualizan con cada unidad [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000641229001-UN tiene una promo \"Completa la promo\" 3x2 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-003-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-003-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — srp 3 unidades sin toast",
     "file": "TC-B2C63-APP-003-android-p03-srp-3-unidades-sin-toast.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000641229001-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000641229001-UN.\n4. El usuario toca \"Agregar\" y luego \"+\" dos veces.\n5. El sistema muestra \"Agrega 2 y ahorra más\", luego \"Agrega 1 y ahorra más\" y finalmente \"¡Completaste la promo!\", avanzando la barra en cada paso.",
   "test_data": "v1.0.7, 000000000641229001-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "Se muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en la PDP.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-004",
   "name": "Verificar que agregar desde la PDP muestra el toast y la barra de progreso [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000664214001-UN tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-004-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-004-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — pdp sin barra de progreso",
     "file": "TC-B2C63-APP-004-android-p03-pdp-sin-barra-de-progreso.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7, busca 000000000664214001-UN y abre su PDP.\n2. El sistema carga la PDP de 000000000664214001-UN.\n3. El usuario toca \"Agregar\".\n4. El sistema agrega la unidad y muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.",
   "test_data": "v1.0.7, 000000000664214001-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "Se muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso al agregar desde el modal.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-005",
   "name": "Verificar que agregar desde un modal con shelves muestra el toast [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Modal\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000664214001-UN tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-005-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-005-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — pdp sin barra de progreso",
     "file": "TC-B2C63-APP-005-android-p03-pdp-sin-barra-de-progreso.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario abre un modal que contiene el shelf de 000000000664214001-UN.\n3. El sistema muestra el modal con el shelf.\n4. El usuario toca \"Agregar\" en el shelf del modal.\n5. El sistema agrega la unidad y muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.",
   "test_data": "v1.0.7, 000000000664214001-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "Se muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso al agregar desde el carrusel.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-006",
   "name": "Verificar que agregar desde un carrusel del Home muestra el toast [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000664214001-UN tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)\n- 000000000664214001-UN aparece en un carrusel del Home",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-006-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-006-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — pdp sin barra de progreso",
     "file": "TC-B2C63-APP-006-android-p03-pdp-sin-barra-de-progreso.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home con un carrusel que contiene 000000000664214001-UN.\n3. El usuario toca \"Agregar\" en ese producto del carrusel.\n4. El sistema agrega la unidad y muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.",
   "test_data": "v1.0.7, 000000000664214001-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (actualizada 11-11-2026)",
   "executed_at": "2026-11-13",
   "expected": "Se muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-007",
   "name": "Verificar que un usuario logueado ve el toast al agregar desde el shelf [App] [Logueado]",
   "observed": "Se agrega la unidad, pero en lugar del toast «Agrega 1 y ahorra más» con barra de progreso aparece un tooltip «Te falta 1 para la promo» sin barra.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_COMPLETA_PROMO_2X1} tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — shelf de 000000000664214001 un en los resultados",
     "file": "TC-B2C63-APP-007-android-p02-shelf-de-000000000664214001-un-en-los-resultados.png"
    },
    {
     "caption": "Android · Paso 6 — shelf tras agregar",
     "file": "TC-B2C63-APP-007-android-p06-shelf-tras-agregar.png"
    },
    {
     "caption": "Paso 3 — tras agregar 2",
     "file": "B2C-1364-p03-tras-agregar-2.png"
    }
   ],
   "spec": "tests-app/B2C-63-50-pendientes.spec.ts:33",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_COMPLETA_PROMO_2X1} y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de {SKU_COMPLETA_PROMO_2X1}.\n4. El usuario toca \"Agregar\" en el shelf.\n5. El sistema agrega la unidad y muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_COMPLETA_PROMO_2X1} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com / Avatar1234."
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "Tras quitar una unidad se vuelve a mostrar \"Agrega 1 y ahorra más\" y la barra retrocede a 1 de 2.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-008",
   "name": "Verificar que quitar una unidad tras completar vuelve el toast al estado en progreso [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000664214001-UN tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-008-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-008-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — pdp sin barra de progreso",
     "file": "TC-B2C63-APP-008-android-p03-pdp-sin-barra-de-progreso.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000664214001-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000664214001-UN.\n4. El usuario toca \"Agregar\" y luego \"+\" hasta completar la promo.\n5. El sistema actualiza la cantidad y muestra el toast \"¡Completaste la promo!\" con la barra de progreso completa.\n6. El usuario toca \"−\" en el shelf.\n7. El sistema actualiza la cantidad y muestra \"Agrega 1 y ahorra más\" con la barra en 1 de 2.",
   "test_data": "v1.0.7, 000000000664214001-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "Con 3 unidades se inicia el 2º tramo: la barra se reinicia a 1 de 2 y el contador muestra 3 unidades.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-009",
   "name": "Verificar que la unidad siguiente a una promo completada inicia un nuevo tramo [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000664214001-UN tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-009-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-009-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — pdp sin barra de progreso",
     "file": "TC-B2C63-APP-009-android-p03-pdp-sin-barra-de-progreso.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000664214001-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000664214001-UN.\n4. El usuario toca \"Agregar\" y luego \"+\" hasta completar la promo.\n5. El sistema actualiza la cantidad y muestra el toast \"¡Completaste la promo!\" con la barra de progreso completa.\n6. El usuario toca \"+\" una vez más.\n7. El sistema reinicia el avance y muestra \"Agrega 1 y ahorra más\" con la barra en 1 de 2.",
   "test_data": "v1.0.7, 000000000664214001-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "Con 1 unidad el progreso y el mensaje se recalculan (\"Agrega 2 y ahorra más\").",
   "form_factor": "app",
   "id": "TC-B2C63-APP-010",
   "name": "Verificar que disminuir unidades desde el shelf recalcula el progreso [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000641229001-UN tiene una promo \"Completa la promo\" 3x2 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-010-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-010-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — srp 3 unidades sin toast",
     "file": "TC-B2C63-APP-010-android-p03-srp-3-unidades-sin-toast.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000641229001-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000641229001-UN.\n4. El usuario toca \"Agregar\" y luego \"+\" hasta tener 2 unidades.\n5. El sistema muestra \"Agrega 1 y ahorra más\".\n6. El usuario toca \"−\" en el shelf.\n7. El sistema actualiza el carro y muestra \"Agrega 2 y ahorra más\".",
   "test_data": "v1.0.7, 000000000641229001-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "El producto sale del carro, el shelf vuelve a mostrar \"Agregar\" y no se muestran toast ni barra de progreso.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-011",
   "name": "Verificar que eliminar el producto desde el shelf resetea el progreso y oculta el toast [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000664214001-UN tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-011-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-011-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — pdp sin barra de progreso",
     "file": "TC-B2C63-APP-011-android-p03-pdp-sin-barra-de-progreso.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000664214001-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra los resultados con el shelf de 000000000664214001-UN.\n4. El usuario toca \"Agregar\".\n5. El sistema agrega la unidad y muestra el toast \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n6. El usuario toca \"−\" hasta llegar a 0 unidades.\n7. El sistema quita el producto del carro y deja de mostrar el progreso de la promo.",
   "test_data": "v1.0.7, 000000000664214001-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "Dentro del modal el contador queda en 1, la barra de progreso retrocede a 1 de 2 y el mensaje cambia a \"Agrega 1 y ahorra más\"; el carro queda con 1 unidad.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-012",
   "name": "Verificar que disminuir unidades desde un modal actualiza el progreso y el mensaje promocional [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Modal\n- Método de entrega activo: Despacho a domicilio a Calle Uno 23, La Florida\n- 000000000664214001-UN tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)\n- El carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-012-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-012-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — pdp sin barra de progreso",
     "file": "TC-B2C63-APP-012-android-p03-pdp-sin-barra-de-progreso.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario abre un modal que contiene el shelf de 000000000664214001-UN (desde la PLP o un carrusel).\n3. El sistema muestra el modal con el shelf en 2 unidades y la promo completada.\n4. El usuario toca \"−\" en el shelf del modal.\n5. El sistema actualiza la cantidad a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, 000000000664214001-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "En la PDP el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra \"Agrega 1 y ahorra más\".",
   "form_factor": "app",
   "id": "TC-B2C63-APP-013",
   "name": "Verificar que quitar unidades desde la PDP actualiza el contador, la barra de progreso y el mensaje promocional [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo: Despacho a domicilio a Calle Uno 23, La Florida\n- 000000000664214001-UN tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)\n- El carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-013-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-013-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — pdp sin barra de progreso",
     "file": "TC-B2C63-APP-013-android-p03-pdp-sin-barra-de-progreso.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario abre la PDP de 000000000664214001-UN.\n3. El sistema carga la PDP con el contador en 2 y la barra de progreso completa.\n4. El usuario toca \"−\" en el stepper de la PDP.\n5. El sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, 000000000664214001-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "En el carrusel el contador queda en 1, la barra de progreso retrocede a 1 de 2 y se muestra \"Agrega 1 y ahorra más\".",
   "form_factor": "app",
   "id": "TC-B2C63-APP-014",
   "name": "Verificar que quitar unidades desde un carrusel del Home actualiza el contador, la barra de progreso y el mensaje promocional [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Método de entrega activo: Despacho a domicilio a Calle Uno 23, La Florida\n- 000000000664214001-UN tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)\n- El carro contiene 000000000664214001-UN x 2 (promo 2x1 completada)\n- 000000000664214001-UN aparece en un carrusel del Home",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-014-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-014-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — pdp sin barra de progreso",
     "file": "TC-B2C63-APP-014-android-p03-pdp-sin-barra-de-progreso.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario ubica 000000000664214001-UN en un carrusel del Home.\n3. El sistema muestra el shelf del carrusel con el contador en 2 y la barra de progreso completa.\n4. El usuario toca \"−\" en el shelf del carrusel.\n5. El sistema actualiza el contador a 1, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, 000000000664214001-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "Con 4 unidades se muestra nuevamente el toast \"¡Completaste la promo!\", la barra de progreso queda completa y el contador muestra 4.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-015",
   "name": "Verificar que completar un segundo ciclo promocional muestra nuevamente el toast \"¡Completaste la promo!\" [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo: Despacho a domicilio a Calle Uno 23, La Florida\n- 000000000664214001-UN tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)\n- El carro contiene 000000000664214001-UN x 3 (1er ciclo completado y 2º ciclo en 1 de 2)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-015-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-015-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — pdp sin barra de progreso",
     "file": "TC-B2C63-APP-015-android-p03-pdp-sin-barra-de-progreso.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000664214001-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra el shelf de 000000000664214001-UN con el contador en 3 y la barra de progreso en 1 de 2.\n4. El usuario toca \"+\" en el shelf.\n5. El sistema actualiza el contador a 4, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, 000000000664214001-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "Con 3 unidades el contador muestra 3, la barra de progreso queda en 1 de 2 (2º ciclo en progreso) y el mensaje cambia a \"Agrega 1 y ahorra más\"; el 1er ciclo sigue completo.",
   "form_factor": "app",
   "id": "TC-B2C63-APP-016",
   "name": "Verificar que disminuir de 4 a 3 unidades con dos ciclos completos recalcula el progreso promocional [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Resultados de búsqueda\n- Método de entrega activo: Despacho a domicilio a Calle Uno 23, La Florida\n- 000000000664214001-UN tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)\n- El carro contiene 000000000664214001-UN x 4 (dos ciclos completos)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-016-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-016-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — pdp sin barra de progreso",
     "file": "TC-B2C63-APP-016-android-p03-pdp-sin-barra-de-progreso.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario busca 000000000664214001-UN y toca \"Buscar\" en el teclado.\n3. El sistema muestra el shelf de 000000000664214001-UN con el contador en 4 y la barra de progreso completa.\n4. El usuario toca \"−\" en el shelf.\n5. El sistema actualiza el contador a 3, retrocede la barra de progreso a 1 de 2 y muestra \"Agrega 1 y ahorra más\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, 000000000664214001-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "La PDP conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra \"¡Completaste la promo!\".",
   "form_factor": "app",
   "id": "TC-B2C63-APP-017",
   "name": "Verificar que el progreso promocional iniciado en el Home se mantiene al seguir agregando desde la PDP [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Método de entrega activo: Despacho a domicilio a Calle Uno 23, La Florida\n- 000000000664214001-UN tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)\n- Carro vacío\n- 000000000664214001-UN aparece en un carrusel del Home",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-017-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-017-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — pdp sin barra de progreso",
     "file": "TC-B2C63-APP-017-android-p03-pdp-sin-barra-de-progreso.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario toca \"Agregar\" en el shelf de 000000000664214001-UN en un carrusel del Home.\n3. El sistema agrega la unidad y muestra \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n4. El usuario abre la PDP de 000000000664214001-UN.\n5. El sistema carga la PDP con el contador en 1 y la barra de progreso en 1 de 2.\n6. El usuario toca \"+\" en el stepper de la PDP.\n7. El sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, 000000000664214001-UN"
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador local Medium_Phone_API_36.1)",
   "executed_at": "2026-10-15",
   "expected": "El shelf de los resultados conserva el progreso iniciado en el Home (contador 1, barra 1 de 2) y al agregar la 2ª unidad muestra \"¡Completaste la promo!\".",
   "form_factor": "app",
   "id": "TC-B2C63-APP-018",
   "name": "Verificar que el progreso promocional iniciado en el Home se mantiene al seguir agregando desde los resultados de búsqueda [App] [Guest]",
   "observation": "Causa: en la app v1.0.7 (APK del 06-10) el componente 'Completa la promo' no aparece. En la SRP como invitado, sin dirección y con {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida), al agregar y sumar 1, 2 y 3 unidades de {SKU_COMPLETA_PROMO_2X1} (000000000664214001-UN, cucarda '2x1 a $2.550') y de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, cucarda '3x2 a $4.900') no se muestran el toast 'Agrega N y ahorra más' / '¡Completaste la promo!' ni la barra de progreso; tampoco en la PDP. El descuento NxM sí se aplica en el carro. La tarea APP B2C-366 está en LISTO EN DEVELOPMENT y no consta que este build la incluya. Acción: entregar un build de la app con B2C-366 y confirmar que los SKU tienen la promo del tipo 'Completa la promo' (en la web el 2x1 mostraba 'Combina la promo'). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' (y {APP_PLATFORM} = iOS en las filas 012-018): se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Sin toast ni barra de progreso al agregar/sumar unidades (ver capturas de la exploración).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Método de entrega activo: Despacho a domicilio a Calle Uno 23, La Florida\n- 000000000664214001-UN tiene una promo \"Completa la promo\" 2x1 vigente (mismo SKU, sin código especial)\n- Carro vacío\n- 000000000664214001-UN aparece en un carrusel del Home",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — srp 1 unidad sin toast",
     "file": "TC-B2C63-APP-018-android-p01-srp-1-unidad-sin-toast.png"
    },
    {
     "caption": "Android · Paso 2 — srp 2 unidades sin toast",
     "file": "TC-B2C63-APP-018-android-p02-srp-2-unidades-sin-toast.png"
    },
    {
     "caption": "Android · Paso 3 — pdp sin barra de progreso",
     "file": "TC-B2C63-APP-018-android-p03-pdp-sin-barra-de-progreso.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario toca \"Agregar\" en el shelf de 000000000664214001-UN en un carrusel del Home.\n3. El sistema agrega la unidad y muestra \"Agrega 1 y ahorra más\" con la barra de progreso en 1 de 2.\n4. El usuario busca 000000000664214001-UN y toca \"Buscar\" en el teclado.\n5. El sistema muestra el shelf de 000000000664214001-UN con el contador en 1 y la barra de progreso en 1 de 2.\n6. El usuario toca \"+\" en el shelf.\n7. El sistema actualiza el contador a 2, completa la barra de progreso y muestra el toast \"¡Completaste la promo!\".",
   "test_data": "v1.0.7, iOS, Calle Uno 23, La Florida, 000000000664214001-UN"
  }
 ]
}
-->
