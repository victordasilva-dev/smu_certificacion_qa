# B2C-45 APP Android - Evidencias QA (corrida del 2026-10-30)

| Campo | Valor |
|---|---|
| Suite | B2C-45 |
| Última actualización | 2026-10-30 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Android cl.smu.unimarcapp.sfcc.qa v1.0.1 (DEV), dispositivo por ADB |
| Origen de los TC | Unimarc/B2C-45 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 9 |
| Bloqueado Data | 4 |
| Rechazado | 1 |
| **Total** | **14** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-30 | 14 | TC-B2C45-APP-001, TC-B2C45-APP-002, TC-B2C45-APP-003, TC-B2C45-APP-004, TC-B2C45-APP-005, TC-B2C45-APP-006, TC-B2C45-APP-007, TC-B2C45-APP-008, TC-B2C45-APP-009, TC-B2C45-APP-010, TC-B2C45-APP-011, TC-B2C45-APP-012, TC-B2C45-APP-013, TC-B2C45-APP-014 |

## Detalle por caso de prueba

### TC-B2C45-APP-001 - Verificar que Agregar instrucciones abre el modal de nuevo comentario con sus elementos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".

**Resultado esperado**

El modal "¿Te gustaría algo en especial?" muestra X de cierre, miniatura + tienda + nombre + unidad de medida, campo "Instrucciones" con contador 0/150 y el CTA "Agregar" deshabilitado.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): el modal «¿Te gustaría algo en especial?» muestra X de cierre, miniatura, tienda, nombre y unidad, campo «Instrucciones» con contador 0/150 y «Agregar» deshabilitado. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): el modal «¿Te gustaría algo en especial?» muestra X de cierre, miniatura, tienda, nombre y unidad, campo «Instrucciones» con contador 0/150 y «Agregar» deshabilitado. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — modal de nuevo comentario](<B2C-45 APP Evidencias 2026-10-30/TC-B2C45-APP-001-android-p01-modal-de-nuevo-comentario.png>)

---

### TC-B2C45-APP-002 - Verificar que al escribir el contador se actualiza y se habilita Agregar [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo "Instrucciones".

**Resultado esperado**

El contador muestra la cantidad de caracteres de {TEXTO_INSTRUCCION_001} sobre 150 y el CTA "Agregar" queda habilitado.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al escribir {TEXTO_INSTRUCCION_001} el contador muestra 36/150 y «Agregar» queda habilitado. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al escribir {TEXTO_INSTRUCCION_001} el contador muestra 36/150 y «Agregar» queda habilitado. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — texto escrito y contador](<B2C-45 APP Evidencias 2026-10-30/TC-B2C45-APP-002-android-p01-texto-escrito-y-contador.png>)

---

### TC-B2C45-APP-003 - Verificar que el campo de instrucciones no admite más de 150 caracteres [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {TEXTO_151_CARACTERES} = Texto de 151 caracteres (ej. la letra A repetida 151 veces)
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario pega {TEXTO_151_CARACTERES} en el campo "Instrucciones".

**Resultado esperado**

El campo conserva solo 150 caracteres y el contador muestra 150/150.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al pegar un texto de 161 caracteres el campo conserva 150 y el contador muestra 150/150. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al pegar un texto de 161 caracteres el campo conserva 150 y el contador muestra 150/150. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — texto de 151 caracteres](<B2C-45 APP Evidencias 2026-10-30/TC-B2C45-APP-003-android-p01-texto-de-151-caracteres.png>)

---

### TC-B2C45-APP-004 - Verificar que confirmar la instrucción la guarda y el shelf muestra la nota [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones
- {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo "Instrucciones".
6. El usuario toca "Agregar".
7. El sistema muestra loading en el CTA mientras guarda.

**Resultado esperado**

El modal se cierra, el shelf muestra "Nota: {TEXTO_INSTRUCCION_001}" + "Editar instrucciones" y aparece el toast "Tu instrucción fue agregada con éxito" (4 s + X).

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: {TEXTO_INSTRUCCION_001} tiene 36 caracteres y la precondición exige 30 o menos. Observado igualmente: al agregar, el modal se cierra, aparece el toast «Tu instrucción fue agregada con éxito» y el shelf muestra «Nota: Primera intrucción de entrega …» (truncada) + «Editar instrucciones». Acción: declarar un texto de 30 caracteres o menos. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: {TEXTO_INSTRUCCION_001} tiene 36 caracteres y la precondición exige 30 o menos. Observado igualmente: al agregar, el modal se cierra, aparece el toast «Tu instrucción fue agregada con éxito» y el shelf muestra «Nota: Primera intrucción de entrega …» (truncada) + «Editar instrucciones». Acción: declarar un texto de 30 caracteres o menos. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — guardando](<B2C-45 APP Evidencias 2026-10-30/TC-B2C45-APP-004-android-p01-guardando.png>)

![Android · Paso 2 — shelf con la nota](<B2C-45 APP Evidencias 2026-10-30/TC-B2C45-APP-004-android-p02-shelf-con-la-nota.png>)

---

### TC-B2C45-APP-005 - Verificar que una nota de más de 30 caracteres se trunca con puntos suspensivos en el shelf [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones
- {TEXTO_INSTRUCCION_LARGO} tiene entre 31 y 150 caracteres

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {TEXTO_INSTRUCCION_LARGO} = Por favor elegir plátanos verdes y firmes, sin manchas (54 caracteres)
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario escribe {TEXTO_INSTRUCCION_LARGO} en el campo "Instrucciones".
6. El usuario toca "Agregar".

**Resultado esperado**

El shelf muestra "Nota:" + los primeros 30 caracteres de {TEXTO_INSTRUCCION_LARGO} seguidos de "…".

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): con {TEXTO_INSTRUCCION_LARGO} el shelf muestra «Nota: Éste texto debe ser suficiente…» (30 caracteres + «…»). iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): con {TEXTO_INSTRUCCION_LARGO} el shelf muestra «Nota: Éste texto debe ser suficiente…» (30 caracteres + «…»). iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — shelf con nota truncada](<B2C-45 APP Evidencias 2026-10-30/TC-B2C45-APP-005-android-p01-shelf-con-nota-truncada.png>)

---

### TC-B2C45-APP-006 - Verificar que un invitado puede agregar una instrucción al picker [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_VALID_001} sin instrucciones

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo "Instrucciones".
6. El usuario toca "Agregar".

**Resultado esperado**

El comentario se guarda: el shelf muestra "Nota: {TEXTO_INSTRUCCION_001}" + "Editar instrucciones" y aparece el toast de confirmación.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Esperado: el invitado agrega la instrucción y el shelf muestra la nota con el toast. Obtenido: en el carro del invitado el shelf no ofrece «Agregar instrucciones» (con cuenta logueada sí aparece). Bug: B2C-1412. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Esperado: el invitado agrega la instrucción y el shelf muestra la nota con el toast. Obtenido: en el carro del invitado el shelf no ofrece «Agregar instrucciones» (con cuenta logueada sí aparece). Bug: B2C-1412. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — carro de invitado sin agregar instrucciones](<B2C-45 APP Evidencias 2026-10-30/TC-B2C45-APP-006-android-p01-carro-de-invitado-sin-agregar-instrucciones.png>)

---

### TC-B2C45-APP-007 - Verificar que Editar instrucciones abre el modal con el comentario precargado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.

**Resultado esperado**

El modal muestra {TEXTO_INSTRUCCION_001} precargado, el contador con su cantidad de caracteres y las opciones "Confirmar" y "Eliminar comentario".

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «Editar instrucciones» abre el modal con el comentario precargado, contador 36/150 y los botones «Confirmar» y «Eliminar comentario». iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «Editar instrucciones» abre el modal con el comentario precargado, contador 36/150 y los botones «Confirmar» y «Eliminar comentario». iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — modal de edicion](<B2C-45 APP Evidencias 2026-10-30/TC-B2C45-APP-007-android-p01-modal-de-edicion.png>)

---

### TC-B2C45-APP-008 - Verificar que confirmar la edición reemplaza el comentario y muestra el toast [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)
- {TEXTO_INSTRUCCION_002} = Paltas maduras para hoy (23 caracteres)
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario reemplaza el texto por {TEXTO_INSTRUCCION_002}.
6. El usuario toca "Confirmar".
7. El sistema muestra loading en el CTA mientras actualiza.

**Resultado esperado**

El modal se cierra, el shelf muestra "Nota: {TEXTO_INSTRUCCION_002}" (el anterior se reemplaza) y aparece el toast "Tu instrucción fue agregada con éxito" (4 s + X).

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al reemplazar por {TEXTO_INSTRUCCION_002} y tocar «Confirmar» el modal se cierra, el shelf muestra la nota nueva (truncada a 30 caracteres + «…», según la regla de B2C45-APP-005, pues el texto tiene 62) y aparece el toast «Tu instrucción fue agregada con éxito». iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al reemplazar por {TEXTO_INSTRUCCION_002} y tocar «Confirmar» el modal se cierra, el shelf muestra la nota nueva (truncada a 30 caracteres + «…», según la regla de B2C45-APP-005, pues el texto tiene 62) y aparece el toast «Tu instrucción fue agregada con éxito». iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — actualizando](<B2C-45 APP Evidencias 2026-10-30/TC-B2C45-APP-008-android-p01-actualizando.png>)

![Android · Paso 2 — shelf con la nota nueva](<B2C-45 APP Evidencias 2026-10-30/TC-B2C45-APP-008-android-p02-shelf-con-la-nota-nueva.png>)

---

### TC-B2C45-APP-009 - Verificar que Eliminar comentario muestra el modal de confirmación [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario toca "Eliminar comentario".
6. El sistema muestra el modal de confirmación "Eliminar comentario".

**Resultado esperado**

El modal muestra imagen, título "Eliminar comentario", subtítulo "¿Desea eliminar tu instrucción" y las opciones "Sí, eliminar" y "No, gracias".

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «Eliminar comentario» abre el modal con imagen, título «Eliminar comentario», subtítulo «¿Deseas eliminar tu instrucción?» (el TC escribe «Desea») y las opciones «Sí, eliminar» y «No, gracias». iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «Eliminar comentario» abre el modal con imagen, título «Eliminar comentario», subtítulo «¿Deseas eliminar tu instrucción?» (el TC escribe «Desea») y las opciones «Sí, eliminar» y «No, gracias». iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — modal eliminar comentario](<B2C-45 APP Evidencias 2026-10-30/TC-B2C45-APP-009-android-p01-modal-eliminar-comentario.png>)

---

### TC-B2C45-APP-010 - Verificar que Sí, eliminar quita la instrucción y el shelf vuelve a Agregar instrucciones [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario toca "Eliminar comentario".
6. El sistema muestra el modal de confirmación "Eliminar comentario".
7. El usuario toca "Sí, eliminar".
8. El sistema muestra loading en el CTA mientras elimina.

**Resultado esperado**

El modal se cierra, la nota desaparece del shelf, se muestra "Agregar instrucciones" y aparece el toast "Tu comentario se ha eliminado" (4 s + X).

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «Sí, eliminar» cierra el modal, la nota desaparece, el shelf vuelve a «Agregar instrucciones» y aparece el toast «Tu comentario se ha eliminado». iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «Sí, eliminar» cierra el modal, la nota desaparece, el shelf vuelve a «Agregar instrucciones» y aparece el toast «Tu comentario se ha eliminado». iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — eliminando](<B2C-45 APP Evidencias 2026-10-30/TC-B2C45-APP-010-android-p01-eliminando.png>)

![Android · Paso 2 — shelf sin nota](<B2C-45 APP Evidencias 2026-10-30/TC-B2C45-APP-010-android-p02-shelf-sin-nota.png>)

---

### TC-B2C45-APP-011 - Verificar que No, gracias vuelve al modal de edición sin eliminar el comentario [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario toca "Eliminar comentario".
6. El sistema muestra el modal de confirmación "Eliminar comentario".
7. El usuario toca "No, gracias".

**Resultado esperado**

Se cierra el modal de confirmación y se vuelve al modal de edición con {TEXTO_INSTRUCCION_001} sin cambios.

**Resultado obtenido**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «No, gracias» vuelve al modal de edición con el texto sin cambios. iOS: no ejecutado.

**Observación**

Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «No, gracias» vuelve al modal de edición con el texto sin cambios. iOS: no ejecutado.

**Evidencia**

![Android · Paso 1 — vuelta al modal de edicion](<B2C-45 APP Evidencias 2026-10-30/TC-B2C45-APP-011-android-p01-vuelta-al-modal-de-edicion.png>)

---

### TC-B2C45-APP-012 - Verificar que un error al guardar una instrucción nueva muestra CRT-026 [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {COMENTARIO_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {COMENTARIO_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)
- {HERRAMIENTA_PROXY_APP} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo "Instrucciones".
6. El usuario toca "Agregar".

**Resultado esperado**

El modal se cierra, aparece el toast "No pudimos agregar tu comentario. Vuelve a intentarlo." (CRT-026) hasta cerrarlo con la X y el shelf mantiene "Agregar instrucciones".

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C45-APP-013 - Verificar que un error al eliminar desde el modal de edición muestra CRT-027 [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {COMENTARIO_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {COMENTARIO_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)
- {HERRAMIENTA_PROXY_APP} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario toca "Eliminar comentario".
6. El sistema muestra el modal de confirmación "Eliminar comentario".
7. El usuario toca "Sí, eliminar".

**Resultado esperado**

El modal se cierra, aparece el toast "No pudimos eliminar tu comentario. Inténtalo nuevamente." (CRT-027) hasta cerrarlo con la X y la nota permanece en el shelf.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C45-APP-014 - Verificar que un error al editar muestra CRT-075 y el comentario original se mantiene [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-30 |
| Plataforma | Android |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {COMENTARIO_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {COMENTARIO_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)
- {TEXTO_INSTRUCCION_002} = Paltas maduras para hoy (23 caracteres)
- {HERRAMIENTA_PROXY_APP} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario reemplaza el texto por {TEXTO_INSTRUCCION_002}.
6. El usuario toca "Confirmar".

**Resultado esperado**

El modal se cierra, aparece el toast "No pudimos editar tu comentario. Inténtalo nuevamente." (CRT-075) hasta cerrarlo con la X y el shelf mantiene {TEXTO_INSTRUCCION_001}.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "App Android cl.smu.unimarcapp.sfcc.qa v1.0.1 (DEV), dispositivo por ADB",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-45",
  "tc_file": "Unimarc/B2C-45 APP Test Cases.xlsx",
  "title": "B2C-45 APP Android - Evidencias QA (corrida del 2026-10-30)",
  "updated_at": "2026-10-30"
 },
 "history": {
  "2026-10-30": [
   "TC-B2C45-APP-001",
   "TC-B2C45-APP-002",
   "TC-B2C45-APP-003",
   "TC-B2C45-APP-004",
   "TC-B2C45-APP-005",
   "TC-B2C45-APP-006",
   "TC-B2C45-APP-007",
   "TC-B2C45-APP-008",
   "TC-B2C45-APP-009",
   "TC-B2C45-APP-010",
   "TC-B2C45-APP-011",
   "TC-B2C45-APP-012",
   "TC-B2C45-APP-013",
   "TC-B2C45-APP-014"
  ]
 },
 "results": [
  {
   "executed_at": "2026-10-30",
   "expected": "El modal \"¿Te gustaría algo en especial?\" muestra X de cierre, miniatura + tienda + nombre + unidad de medida, campo \"Instrucciones\" con contador 0/150 y el CTA \"Agregar\" deshabilitado.",
   "id": "TC-B2C45-APP-001",
   "name": "Verificar que Agregar instrucciones abre el modal de nuevo comentario con sus elementos [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): el modal «¿Te gustaría algo en especial?» muestra X de cierre, miniatura, tienda, nombre y unidad, campo «Instrucciones» con contador 0/150 y «Agregar» deshabilitado. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): el modal «¿Te gustaría algo en especial?» muestra X de cierre, miniatura, tienda, nombre y unidad, campo «Instrucciones» con contador 0/150 y «Agregar» deshabilitado. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — modal de nuevo comentario",
     "file": "TC-B2C45-APP-001-android-p01-modal-de-nuevo-comentario.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El contador muestra la cantidad de caracteres de {TEXTO_INSTRUCCION_001} sobre 150 y el CTA \"Agregar\" queda habilitado.",
   "id": "TC-B2C45-APP-002",
   "name": "Verificar que al escribir el contador se actualiza y se habilita Agregar [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al escribir {TEXTO_INSTRUCCION_001} el contador muestra 36/150 y «Agregar» queda habilitado. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al escribir {TEXTO_INSTRUCCION_001} el contador muestra 36/150 y «Agregar» queda habilitado. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — texto escrito y contador",
     "file": "TC-B2C45-APP-002-android-p01-texto-escrito-y-contador.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El campo conserva solo 150 caracteres y el contador muestra 150/150.",
   "id": "TC-B2C45-APP-003",
   "name": "Verificar que el campo de instrucciones no admite más de 150 caracteres [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al pegar un texto de 161 caracteres el campo conserva 150 y el contador muestra 150/150. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al pegar un texto de 161 caracteres el campo conserva 150 y el contador muestra 150/150. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — texto de 151 caracteres",
     "file": "TC-B2C45-APP-003-android-p01-texto-de-151-caracteres.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario pega {TEXTO_151_CARACTERES} en el campo \"Instrucciones\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TEXTO_151_CARACTERES} = Texto de 151 caracteres (ej. la letra A repetida 151 veces)\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El modal se cierra, el shelf muestra \"Nota: {TEXTO_INSTRUCCION_001}\" + \"Editar instrucciones\" y aparece el toast \"Tu instrucción fue agregada con éxito\" (4 s + X).",
   "id": "TC-B2C45-APP-004",
   "name": "Verificar que confirmar la instrucción la guarda y el shelf muestra la nota [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: {TEXTO_INSTRUCCION_001} tiene 36 caracteres y la precondición exige 30 o menos. Observado igualmente: al agregar, el modal se cierra, aparece el toast «Tu instrucción fue agregada con éxito» y el shelf muestra «Nota: Primera intrucción de entrega …» (truncada) + «Editar instrucciones». Acción: declarar un texto de 30 caracteres o menos. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Causa: {TEXTO_INSTRUCCION_001} tiene 36 caracteres y la precondición exige 30 o menos. Observado igualmente: al agregar, el modal se cierra, aparece el toast «Tu instrucción fue agregada con éxito» y el shelf muestra «Nota: Primera intrucción de entrega …» (truncada) + «Editar instrucciones». Acción: declarar un texto de 30 caracteres o menos. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones\n- {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — guardando",
     "file": "TC-B2C45-APP-004-android-p01-guardando.png"
    },
    {
     "caption": "Android · Paso 2 — shelf con la nota",
     "file": "TC-B2C45-APP-004-android-p02-shelf-con-la-nota.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".\n6. El usuario toca \"Agregar\".\n7. El sistema muestra loading en el CTA mientras guarda.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El shelf muestra \"Nota:\" + los primeros 30 caracteres de {TEXTO_INSTRUCCION_LARGO} seguidos de \"…\".",
   "id": "TC-B2C45-APP-005",
   "name": "Verificar que una nota de más de 30 caracteres se trunca con puntos suspensivos en el shelf [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): con {TEXTO_INSTRUCCION_LARGO} el shelf muestra «Nota: Éste texto debe ser suficiente…» (30 caracteres + «…»). iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): con {TEXTO_INSTRUCCION_LARGO} el shelf muestra «Nota: Éste texto debe ser suficiente…» (30 caracteres + «…»). iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones\n- {TEXTO_INSTRUCCION_LARGO} tiene entre 31 y 150 caracteres",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — shelf con nota truncada",
     "file": "TC-B2C45-APP-005-android-p01-shelf-con-nota-truncada.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_LARGO} en el campo \"Instrucciones\".\n6. El usuario toca \"Agregar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TEXTO_INSTRUCCION_LARGO} = Por favor elegir plátanos verdes y firmes, sin manchas (54 caracteres)\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El comentario se guarda: el shelf muestra \"Nota: {TEXTO_INSTRUCCION_001}\" + \"Editar instrucciones\" y aparece el toast de confirmación.",
   "id": "TC-B2C45-APP-006",
   "name": "Verificar que un invitado puede agregar una instrucción al picker [App] [Guest]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Esperado: el invitado agrega la instrucción y el shelf muestra la nota con el toast. Obtenido: en el carro del invitado el shelf no ofrece «Agregar instrucciones» (con cuenta logueada sí aparece). Bug: B2C-1412. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): Esperado: el invitado agrega la instrucción y el shelf muestra la nota con el toast. Obtenido: en el carro del invitado el shelf no ofrece «Agregar instrucciones» (con cuenta logueada sí aparece). Bug: B2C-1412. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — carro de invitado sin agregar instrucciones",
     "file": "TC-B2C45-APP-006-android-p01-carro-de-invitado-sin-agregar-instrucciones.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".\n6. El usuario toca \"Agregar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El modal muestra {TEXTO_INSTRUCCION_001} precargado, el contador con su cantidad de caracteres y las opciones \"Confirmar\" y \"Eliminar comentario\".",
   "id": "TC-B2C45-APP-007",
   "name": "Verificar que Editar instrucciones abre el modal con el comentario precargado [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «Editar instrucciones» abre el modal con el comentario precargado, contador 36/150 y los botones «Confirmar» y «Eliminar comentario». iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «Editar instrucciones» abre el modal con el comentario precargado, contador 36/150 y los botones «Confirmar» y «Eliminar comentario». iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — modal de edicion",
     "file": "TC-B2C45-APP-007-android-p01-modal-de-edicion.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El modal se cierra, el shelf muestra \"Nota: {TEXTO_INSTRUCCION_002}\" (el anterior se reemplaza) y aparece el toast \"Tu instrucción fue agregada con éxito\" (4 s + X).",
   "id": "TC-B2C45-APP-008",
   "name": "Verificar que confirmar la edición reemplaza el comentario y muestra el toast [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al reemplazar por {TEXTO_INSTRUCCION_002} y tocar «Confirmar» el modal se cierra, el shelf muestra la nota nueva (truncada a 30 caracteres + «…», según la regla de B2C45-APP-005, pues el texto tiene 62) y aparece el toast «Tu instrucción fue agregada con éxito». iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): al reemplazar por {TEXTO_INSTRUCCION_002} y tocar «Confirmar» el modal se cierra, el shelf muestra la nota nueva (truncada a 30 caracteres + «…», según la regla de B2C45-APP-005, pues el texto tiene 62) y aparece el toast «Tu instrucción fue agregada con éxito». iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — actualizando",
     "file": "TC-B2C45-APP-008-android-p01-actualizando.png"
    },
    {
     "caption": "Android · Paso 2 — shelf con la nota nueva",
     "file": "TC-B2C45-APP-008-android-p02-shelf-con-la-nota-nueva.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario reemplaza el texto por {TEXTO_INSTRUCCION_002}.\n6. El usuario toca \"Confirmar\".\n7. El sistema muestra loading en el CTA mientras actualiza.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)\n- {TEXTO_INSTRUCCION_002} = Paltas maduras para hoy (23 caracteres)\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El modal muestra imagen, título \"Eliminar comentario\", subtítulo \"¿Desea eliminar tu instrucción\" y las opciones \"Sí, eliminar\" y \"No, gracias\".",
   "id": "TC-B2C45-APP-009",
   "name": "Verificar que Eliminar comentario muestra el modal de confirmación [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «Eliminar comentario» abre el modal con imagen, título «Eliminar comentario», subtítulo «¿Deseas eliminar tu instrucción?» (el TC escribe «Desea») y las opciones «Sí, eliminar» y «No, gracias». iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «Eliminar comentario» abre el modal con imagen, título «Eliminar comentario», subtítulo «¿Deseas eliminar tu instrucción?» (el TC escribe «Desea») y las opciones «Sí, eliminar» y «No, gracias». iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — modal eliminar comentario",
     "file": "TC-B2C45-APP-009-android-p01-modal-eliminar-comentario.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario toca \"Eliminar comentario\".\n6. El sistema muestra el modal de confirmación \"Eliminar comentario\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El modal se cierra, la nota desaparece del shelf, se muestra \"Agregar instrucciones\" y aparece el toast \"Tu comentario se ha eliminado\" (4 s + X).",
   "id": "TC-B2C45-APP-010",
   "name": "Verificar que Sí, eliminar quita la instrucción y el shelf vuelve a Agregar instrucciones [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «Sí, eliminar» cierra el modal, la nota desaparece, el shelf vuelve a «Agregar instrucciones» y aparece el toast «Tu comentario se ha eliminado». iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «Sí, eliminar» cierra el modal, la nota desaparece, el shelf vuelve a «Agregar instrucciones» y aparece el toast «Tu comentario se ha eliminado». iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — eliminando",
     "file": "TC-B2C45-APP-010-android-p01-eliminando.png"
    },
    {
     "caption": "Android · Paso 2 — shelf sin nota",
     "file": "TC-B2C45-APP-010-android-p02-shelf-sin-nota.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario toca \"Eliminar comentario\".\n6. El sistema muestra el modal de confirmación \"Eliminar comentario\".\n7. El usuario toca \"Sí, eliminar\".\n8. El sistema muestra loading en el CTA mientras elimina.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "Se cierra el modal de confirmación y se vuelve al modal de edición con {TEXTO_INSTRUCCION_001} sin cambios.",
   "id": "TC-B2C45-APP-011",
   "name": "Verificar que No, gracias vuelve al modal de edición sin eliminar el comentario [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «No, gracias» vuelve al modal de edición con el texto sin cambios. iOS: no ejecutado.",
   "observed": "Android (dispositivo por ADB, app v1.0.1, 2026-10-30): «No, gracias» vuelve al modal de edición con el texto sin cambios. iOS: no ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — vuelta al modal de edicion",
     "file": "TC-B2C45-APP-011-android-p01-vuelta-al-modal-de-edicion.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario toca \"Eliminar comentario\".\n6. El sistema muestra el modal de confirmación \"Eliminar comentario\".\n7. El usuario toca \"No, gracias\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El modal se cierra, aparece el toast \"No pudimos agregar tu comentario. Vuelve a intentarlo.\" (CRT-026) hasta cerrarlo con la X y el shelf mantiene \"Agregar instrucciones\".",
   "id": "TC-B2C45-APP-012",
   "name": "Verificar que un error al guardar una instrucción nueva muestra CRT-026 [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {COMENTARIO_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".\n6. El usuario toca \"Agregar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {COMENTARIO_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)\n- {HERRAMIENTA_PROXY_APP} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El modal se cierra, aparece el toast \"No pudimos eliminar tu comentario. Inténtalo nuevamente.\" (CRT-027) hasta cerrarlo con la X y la nota permanece en el shelf.",
   "id": "TC-B2C45-APP-013",
   "name": "Verificar que un error al eliminar desde el modal de edición muestra CRT-027 [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {COMENTARIO_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario toca \"Eliminar comentario\".\n6. El sistema muestra el modal de confirmación \"Eliminar comentario\".\n7. El usuario toca \"Sí, eliminar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {COMENTARIO_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)\n- {HERRAMIENTA_PROXY_APP} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "executed_at": "2026-10-30",
   "expected": "El modal se cierra, aparece el toast \"No pudimos editar tu comentario. Inténtalo nuevamente.\" (CRT-075) hasta cerrarlo con la X y el shelf mantiene {TEXTO_INSTRUCCION_001}.",
   "id": "TC-B2C45-APP-014",
   "name": "Verificar que un error al editar muestra CRT-075 y el comentario original se mantiene [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {COMENTARIO_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario reemplaza el texto por {TEXTO_INSTRUCCION_002}.\n6. El usuario toca \"Confirmar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {COMENTARIO_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TEXTO_INSTRUCCION_001} = Plátanos verdes, por favor (26 caracteres)\n- {TEXTO_INSTRUCCION_002} = Paltas maduras para hoy (23 caracteres)\n- {HERRAMIENTA_PROXY_APP} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  }
 ]
}
-->
