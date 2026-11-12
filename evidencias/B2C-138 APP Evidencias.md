# B2C-138 APP - Store Locator sin dirección - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-138 APP |
| Última actualización | 2026-11-09 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador) contra DEV |
| Dispositivo Android | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-138 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 5 |
| Aprobado | 4 |
| Rechazado | 3 |
| Bloqueado | 1 |
| **Total** | **13** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-09 | 12 | TC-B2C138-APP-001, TC-B2C138-APP-002, TC-B2C138-APP-003, TC-B2C138-APP-004, TC-B2C138-APP-005, TC-B2C138-APP-006, TC-B2C138-APP-007, TC-B2C138-APP-008, TC-B2C138-APP-009, TC-B2C138-APP-011, TC-B2C138-APP-012, TC-B2C138-APP-013 |
| 2026-10-14 | 13 | TC-B2C138-APP-001, TC-B2C138-APP-002, TC-B2C138-APP-003, TC-B2C138-APP-004, TC-B2C138-APP-005, TC-B2C138-APP-006, TC-B2C138-APP-007, TC-B2C138-APP-008, TC-B2C138-APP-009, TC-B2C138-APP-010, TC-B2C138-APP-011, TC-B2C138-APP-012, TC-B2C138-APP-013 |

## Detalle por caso de prueba

### TC-B2C138-APP-001 - Verificar que el Store Locator muestra "Elige una forma de entrega" sin método seleccionado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-138.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).
2. El sistema carga el Home de la App y muestra en el Store Locator del header ícono + "Elige una forma de entrega" + chevron ∨.
3. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
4. El sistema carga la PLP y muestra en el Store Locator del header ícono + "Elige una forma de entrega" + chevron ∨.
5. El usuario abre la PDP de 000000000000675191-UN.
6. El sistema carga la PDP y muestra en el Store Locator del header ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado esperado**

En Home, PLP y PDP el Store Locator del header muestra ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado obtenido**

El Home muestra «Elige una forma de entrega»; la PLP no tiene Store Locator en el header.

**Observación**

Esperado: Store Locator con 'Elige una forma de entrega' en Home, PLP y PDP. Obtenido: el Home lo muestra, pero la PLP (primera categoría; https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno es de la web) no tiene Store Locator en el header. Es lo reportado en B2C-1165 (DESCARTADO); no se abre bug nuevo. tests-app/B2C-138.spec.ts:39. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.

**Evidencia**

![Android · Paso 2 — home](<B2C-138 APP Evidencias/TC-B2C138-APP-001-android-p02-home.png>)

![Android · Paso 4 — plp](<B2C-138 APP Evidencias/TC-B2C138-APP-001-android-p04-plp.png>)

![Android · Paso 6 — pdp 000000000000675191 un](<B2C-138 APP Evidencias/TC-B2C138-APP-001-android-p06-pdp-000000000000675191-un.png>)

![Estado al fallar la aserción](<B2C-138 APP Evidencias/TC-B2C138-APP-001-android.png>)

---

### TC-B2C138-APP-002 - Verificar que el Store Locator muestra "Elige una forma de entrega" sin método seleccionado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com
- La cuenta vhchirinos+noaddress@avatar-global.com no tiene dirección guardada ni método de entrega seleccionado

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).
2. El sistema carga el Home de la App y muestra en el Store Locator del header ícono + "Elige una forma de entrega" + chevron ∨.
3. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
4. El sistema carga la PLP y muestra en el Store Locator del header ícono + "Elige una forma de entrega" + chevron ∨.
5. El usuario abre la PDP de 000000000000675191-UN.
6. El sistema carga la PDP y muestra en el Store Locator del header ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado esperado**

Con el usuario logueado, en Home, PLP y PDP el Store Locator del header muestra ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado obtenido**

No se ejecutó: la cuenta declarada no cumple la precondición.

**Observación**

Causa: la cuenta vhchirinos+noaddress@avatar-global.com tiene una dirección guardada (Calle Uno 23, La Florida) y la precondición pide una cuenta sin dirección guardada ni método de entrega. Acción: eliminar las direcciones guardadas de la cuenta (o declarar otra sin direcciones) y re-ejecutar. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.

---

### TC-B2C138-APP-003 - Verificar que tocar el chevron del Store Locator abre el modal "Elige tu método de entrega" con X [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-138.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema abre el modal "Elige tu método de entrega" con el botón cerrar "X".

**Resultado esperado**

Se muestra el modal "Elige tu método de entrega" con el botón "X".

**Resultado obtenido**

El chevron abre «Elige tu método de entrega» con la ✕.

**Observación**

Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.

**Evidencia**

![Android · Paso 2 — home con elige una forma de entrega](<B2C-138 APP Evidencias/TC-B2C138-APP-003-android-p02-home-con-elige-una-forma-de-entrega.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-138 APP Evidencias/TC-B2C138-APP-003-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Estado final](<B2C-138 APP Evidencias/TC-B2C138-APP-003-android.png>)

---

### TC-B2C138-APP-004 - Verificar que el modal muestra las pestañas y el mensaje "Aún no tienes direcciones guardadas" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-138.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema abre el modal "Elige tu método de entrega" y muestra las pestañas ícono + "Despacho a domicilio" (activa) e ícono + "Retiro en tienda" (desactivada en gris), la imagen, el mensaje "Aún no tienes direcciones guardadas" y el texto de ayuda para ingresar una dirección.

**Resultado esperado**

El modal muestra "Despacho a domicilio" activa, "Retiro en tienda" en gris, la imagen, "Aún no tienes direcciones guardadas" y el texto de ayuda.

**Resultado obtenido**

El modal muestra «Despacho a domicilio» activa, «Retiro en tienda» en gris, la imagen, «Aún no tienes direcciones guardadas» y el texto de ayuda.

**Observación**

Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.

**Evidencia**

![Android · Paso 2 — home con elige una forma de entrega](<B2C-138 APP Evidencias/TC-B2C138-APP-004-android-p02-home-con-elige-una-forma-de-entrega.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-138 APP Evidencias/TC-B2C138-APP-004-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Estado final](<B2C-138 APP Evidencias/TC-B2C138-APP-004-android.png>)

---

### TC-B2C138-APP-005 - Verificar que el modal muestra las pestañas y el mensaje "Aún no tienes direcciones guardadas" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com
- La cuenta vhchirinos+noaddress@avatar-global.com no tiene dirección guardada ni método de entrega seleccionado

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema abre el modal "Elige tu método de entrega" y muestra las pestañas ícono + "Despacho a domicilio" (activa) e ícono + "Retiro en tienda" (desactivada en gris), la imagen, el mensaje "Aún no tienes direcciones guardadas" y el texto de ayuda para ingresar una dirección.

**Resultado esperado**

El modal muestra "Despacho a domicilio" activa, "Retiro en tienda" en gris, la imagen, "Aún no tienes direcciones guardadas" y el texto de ayuda.

**Resultado obtenido**

No se ejecutó: la cuenta declarada no cumple la precondición.

**Observación**

Causa: la cuenta vhchirinos+noaddress@avatar-global.com tiene una dirección guardada (Calle Uno 23, La Florida) y la precondición pide una cuenta sin dirección guardada ni método de entrega. Acción: eliminar las direcciones guardadas de la cuenta (o declarar otra sin direcciones) y re-ejecutar. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.

---

### TC-B2C138-APP-006 - Verificar que el buscador de dirección inicia el flujo de configuración de despacho [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-138.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" activa.
5. El usuario toca el buscador y escribe Calle Uno 23, La Florida.
6. El sistema inicia el flujo de configuración de despacho a domicilio (B2C-26).

**Resultado esperado**

Se inicia el flujo de configuración de despacho a domicilio definido en B2C-26.

**Resultado obtenido**

Al escribir la dirección en el buscador se inicia el flujo de despacho de B2C-26.

**Observación**

Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.

**Evidencia**

![Android · Paso 2 — home con elige una forma de entrega](<B2C-138 APP Evidencias/TC-B2C138-APP-006-android-p02-home-con-elige-una-forma-de-entrega.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-138 APP Evidencias/TC-B2C138-APP-006-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Estado final](<B2C-138 APP Evidencias/TC-B2C138-APP-006-android.png>)

---

### TC-B2C138-APP-007 - Verificar que "Activar ubicación actual" inicia el flujo de configuración de despacho [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-138.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)
- La App tiene permiso de ubicación del dispositivo

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" activa.
5. El usuario toca "Activar ubicación actual".
6. El sistema inicia el flujo de configuración de despacho a domicilio (B2C-26).

**Resultado esperado**

Se inicia el flujo de configuración de despacho a domicilio definido en B2C-26.

**Resultado obtenido**

Al tocar «Activar mi ubicación actual» la app muestra «No pudimos obtener tu ubicación actual. Inténtalo nuevamente.».

**Observación**

Causa: el emulador no entrega ubicación (last location=null aun con permiso concedido, ubicación activada y geo fix), y la app muestra 'No pudimos obtener tu ubicación actual. Inténtalo nuevamente.'. Acción: ejecutar en un emulador o equipo con GPS funcional y re-ejecutar. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.

**Evidencia**

![Android · Paso 2 — home con elige una forma de entrega](<B2C-138 APP Evidencias/TC-B2C138-APP-007-android-p02-home-con-elige-una-forma-de-entrega.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-138 APP Evidencias/TC-B2C138-APP-007-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Estado al fallar la aserción](<B2C-138 APP Evidencias/TC-B2C138-APP-007-android.png>)

---

### TC-B2C138-APP-008 - Verificar que la pestaña "Retiro en tienda" se activa e inicia el flujo de retiro [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-138.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" activa.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema muestra "Retiro en tienda" activa en rojo, "Despacho a domicilio" en gris e inicia el flujo de retiro en tienda (B2C-121).

**Resultado esperado**

"Retiro en tienda" queda activa en rojo, "Despacho a domicilio" en gris y se inicia el flujo definido en B2C-121.

**Resultado obtenido**

«Retiro en tienda» queda activa en rojo, «Despacho a domicilio» en gris y se inicia el flujo de B2C-121.

**Observación**

Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.

**Evidencia**

![Android · Paso 2 — home con elige una forma de entrega](<B2C-138 APP Evidencias/TC-B2C138-APP-008-android-p02-home-con-elige-una-forma-de-entrega.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-138 APP Evidencias/TC-B2C138-APP-008-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Estado final](<B2C-138 APP Evidencias/TC-B2C138-APP-008-android.png>)

---

### TC-B2C138-APP-009 - Verificar que cerrar el modal con la X mantiene el header en "Elige una forma de entrega" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-138.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" activa.
5. El usuario toca la "X" del modal.
6. El sistema cierra el modal y muestra en el Store Locator del header ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado esperado**

El modal se cierra y el header sigue mostrando ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado obtenido**

Al tocar la ✕ el modal «Elige tu método de entrega» sigue abierto.

**Observación**

Esperado: el modal se cierra y el header sigue en 'Elige una forma de entrega'. Obtenido: al tocar la ✕ el modal 'Elige tu método de entrega' sigue abierto (2 de 2 intentos en la corrida y 2 de 2 a mano). tests-app/B2C-138.spec.ts:120. Bug: B2C-1479. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.

**Evidencia**

![Android · Paso 2 — home con elige una forma de entrega](<B2C-138 APP Evidencias/TC-B2C138-APP-009-android-p02-home-con-elige-una-forma-de-entrega.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-138 APP Evidencias/TC-B2C138-APP-009-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Estado al fallar la aserción](<B2C-138 APP Evidencias/TC-B2C138-APP-009-android.png>)

---

### TC-B2C138-APP-010 - Verificar que tocar fuera del modal lo cierra y mantiene el header en "Elige una forma de entrega" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-14 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 · Android 16 (emulador Medium_Phone_API_36.1) |
| Duración | 25.0 s |
| Spec | tests-app/B2C-138.spec.ts:129 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)

**Data utilizada**

v1.0.7, iOS

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" activa.
5. El usuario toca fuera del área del modal.
6. El sistema cierra el modal y muestra en el Store Locator del header ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado esperado**

El modal se cierra y el header sigue mostrando ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado obtenido**

Esperado: tocar fuera del modal lo cierra. Obtenido: el modal ocupa toda la pantalla (no queda a la vista el Home ni la TabBar), no hay zona fuera que tocar; solo cierra con la X. Bug: B2C-1207.

**Observación**

Esperado: tocar fuera del modal lo cierra. Obtenido: el modal ocupa toda la pantalla (no queda a la vista el Home ni la TabBar), no hay zona fuera que tocar; solo cierra con la X. Bug: B2C-1207. tests-app/B2C-138.spec.ts:129. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

**Evidencia**

![Android · Paso 2 — home con elige una forma de entrega](<B2C-138 APP Evidencias/TC-B2C138-APP-010-android-p02-home-con-elige-una-forma-de-entrega.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-138 APP Evidencias/TC-B2C138-APP-010-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Android · Paso 5 — modal abierto no queda zona fuera](<B2C-138 APP Evidencias/TC-B2C138-APP-010-android-p05-modal-abierto-no-queda-zona-fuera.png>)

![Estado al fallar la aserción](<B2C-138 APP Evidencias/TC-B2C138-APP-010-android.png>)

---

### TC-B2C138-APP-011 - Verificar que un error al cargar el modal muestra la pantalla de error dentro del modal [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema mantiene el modal abierto y muestra en su interior la pantalla de error con el mensaje correspondiente y los botones "Reintentar" y "Volver al Inicio".

**Resultado esperado**

El modal permanece abierto con la pantalla de error, "Reintentar" y "Volver al Inicio", y el header sigue mostrando ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado obtenido**

No se ejecutó: falta data de prueba.

**Observación**

Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta de proxy de la app para forzar el error en *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc y re-ejecutar. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.

---

### TC-B2C138-APP-012 - Verificar que "Reintentar" vuelve a cargar el selector de método de entrega [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema mantiene el modal abierto y muestra en su interior la pantalla de error con el mensaje correspondiente y los botones "Reintentar" y "Volver al Inicio".
5. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc.
6. El usuario toca "Reintentar".
7. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" activa.

**Resultado esperado**

El modal carga el selector "Elige tu método de entrega" con sus pestañas.

**Resultado obtenido**

No se ejecutó: falta data de prueba.

**Observación**

Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta de proxy de la app para forzar el error en *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc y re-ejecutar. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.

---

### TC-B2C138-APP-013 - Verificar que "Volver al Inicio" del error del modal redirige al Home [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc

**Data utilizada**

Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional).

**Pasos ejecutados**

1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).
2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
3. El sistema carga la PLP con el Store Locator en el header.
4. El usuario toca el chevron ∨ del Store Locator en el header.
5. El sistema mantiene el modal abierto y muestra en su interior la pantalla de error con el mensaje correspondiente y los botones "Reintentar" y "Volver al Inicio".
6. El usuario toca "Volver al Inicio".
7. El sistema cierra el modal y redirige al Home de la App.

**Resultado esperado**

El usuario queda en el Home de la App.

**Resultado obtenido**

No se ejecutó: falta data de prueba.

**Observación**

Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta de proxy de la app para forzar el error en *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc y re-ejecutar. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local"
  },
  "environment": "App Unimarc cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador) contra DEV",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-138 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-138 APP Test Cases.xlsx",
  "title": "B2C-138 APP - Store Locator sin dirección - Evidencias QA",
  "updated_at": "2026-11-09"
 },
 "history": {
  "2026-10-14": [
   "TC-B2C138-APP-001",
   "TC-B2C138-APP-002",
   "TC-B2C138-APP-003",
   "TC-B2C138-APP-004",
   "TC-B2C138-APP-005",
   "TC-B2C138-APP-006",
   "TC-B2C138-APP-007",
   "TC-B2C138-APP-008",
   "TC-B2C138-APP-009",
   "TC-B2C138-APP-010",
   "TC-B2C138-APP-011",
   "TC-B2C138-APP-012",
   "TC-B2C138-APP-013"
  ],
  "2026-11-09": [
   "TC-B2C138-APP-001",
   "TC-B2C138-APP-002",
   "TC-B2C138-APP-003",
   "TC-B2C138-APP-004",
   "TC-B2C138-APP-005",
   "TC-B2C138-APP-006",
   "TC-B2C138-APP-007",
   "TC-B2C138-APP-008",
   "TC-B2C138-APP-009",
   "TC-B2C138-APP-011",
   "TC-B2C138-APP-012",
   "TC-B2C138-APP-013"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "En Home, PLP y PDP el Store Locator del header muestra ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-001",
   "name": "Verificar que el Store Locator muestra \"Elige una forma de entrega\" sin método seleccionado [App] [Guest]",
   "observation": "Esperado: Store Locator con 'Elige una forma de entrega' en Home, PLP y PDP. Obtenido: el Home lo muestra, pero la PLP (primera categoría; https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno es de la web) no tiene Store Locator en el header. Es lo reportado en B2C-1165 (DESCARTADO); no se abre bug nuevo. tests-app/B2C-138.spec.ts:39. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.",
   "observed": "El Home muestra «Elige una forma de entrega»; la PLP no tiene Store Locator en el header.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home",
     "file": "TC-B2C138-APP-001-android-p02-home.png"
    },
    {
     "caption": "Android · Paso 4 — plp",
     "file": "TC-B2C138-APP-001-android-p04-plp.png"
    },
    {
     "caption": "Android · Paso 6 — pdp 000000000000675191 un",
     "file": "TC-B2C138-APP-001-android-p06-pdp-000000000000675191-un.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C138-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-138.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).\n2. El sistema carga el Home de la App y muestra en el Store Locator del header ícono + \"Elige una forma de entrega\" + chevron ∨.\n3. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n4. El sistema carga la PLP y muestra en el Store Locator del header ícono + \"Elige una forma de entrega\" + chevron ∨.\n5. El usuario abre la PDP de 000000000000675191-UN.\n6. El sistema carga la PDP y muestra en el Store Locator del header ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional)."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "Con el usuario logueado, en Home, PLP y PDP el Store Locator del header muestra ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-002",
   "name": "Verificar que el Store Locator muestra \"Elige una forma de entrega\" sin método seleccionado [App] [Logueado]",
   "observation": "Causa: la cuenta vhchirinos+noaddress@avatar-global.com tiene una dirección guardada (Calle Uno 23, La Florida) y la precondición pide una cuenta sin dirección guardada ni método de entrega. Acción: eliminar las direcciones guardadas de la cuenta (o declarar otra sin direcciones) y re-ejecutar. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.",
   "observed": "No se ejecutó: la cuenta declarada no cumple la precondición.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com\n- La cuenta vhchirinos+noaddress@avatar-global.com no tiene dirección guardada ni método de entrega seleccionado",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).\n2. El sistema carga el Home de la App y muestra en el Store Locator del header ícono + \"Elige una forma de entrega\" + chevron ∨.\n3. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n4. El sistema carga la PLP y muestra en el Store Locator del header ícono + \"Elige una forma de entrega\" + chevron ∨.\n5. El usuario abre la PDP de 000000000000675191-UN.\n6. El sistema carga la PDP y muestra en el Store Locator del header ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional)."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "Se muestra el modal \"Elige tu método de entrega\" con el botón \"X\".",
   "form_factor": "app",
   "id": "TC-B2C138-APP-003",
   "name": "Verificar que tocar el chevron del Store Locator abre el modal \"Elige tu método de entrega\" con X [App] [Guest]",
   "observation": "Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.",
   "observed": "El chevron abre «Elige tu método de entrega» con la ✕.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con elige una forma de entrega",
     "file": "TC-B2C138-APP-003-android-p02-home-con-elige-una-forma-de-entrega.png"
    },
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C138-APP-003-android-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C138-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-138.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con el botón cerrar \"X\".",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional)."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "El modal muestra \"Despacho a domicilio\" activa, \"Retiro en tienda\" en gris, la imagen, \"Aún no tienes direcciones guardadas\" y el texto de ayuda.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-004",
   "name": "Verificar que el modal muestra las pestañas y el mensaje \"Aún no tienes direcciones guardadas\" [App] [Guest]",
   "observation": "Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.",
   "observed": "El modal muestra «Despacho a domicilio» activa, «Retiro en tienda» en gris, la imagen, «Aún no tienes direcciones guardadas» y el texto de ayuda.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con elige una forma de entrega",
     "file": "TC-B2C138-APP-004-android-p02-home-con-elige-una-forma-de-entrega.png"
    },
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C138-APP-004-android-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C138-APP-004-android.png"
    }
   ],
   "spec": "tests-app/B2C-138.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema abre el modal \"Elige tu método de entrega\" y muestra las pestañas ícono + \"Despacho a domicilio\" (activa) e ícono + \"Retiro en tienda\" (desactivada en gris), la imagen, el mensaje \"Aún no tienes direcciones guardadas\" y el texto de ayuda para ingresar una dirección.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional)."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "El modal muestra \"Despacho a domicilio\" activa, \"Retiro en tienda\" en gris, la imagen, \"Aún no tienes direcciones guardadas\" y el texto de ayuda.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-005",
   "name": "Verificar que el modal muestra las pestañas y el mensaje \"Aún no tienes direcciones guardadas\" [App] [Logueado]",
   "observation": "Causa: la cuenta vhchirinos+noaddress@avatar-global.com tiene una dirección guardada (Calle Uno 23, La Florida) y la precondición pide una cuenta sin dirección guardada ni método de entrega. Acción: eliminar las direcciones guardadas de la cuenta (o declarar otra sin direcciones) y re-ejecutar. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.",
   "observed": "No se ejecutó: la cuenta declarada no cumple la precondición.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com\n- La cuenta vhchirinos+noaddress@avatar-global.com no tiene dirección guardada ni método de entrega seleccionado",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema abre el modal \"Elige tu método de entrega\" y muestra las pestañas ícono + \"Despacho a domicilio\" (activa) e ícono + \"Retiro en tienda\" (desactivada en gris), la imagen, el mensaje \"Aún no tienes direcciones guardadas\" y el texto de ayuda para ingresar una dirección.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional)."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "Se inicia el flujo de configuración de despacho a domicilio definido en B2C-26.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-006",
   "name": "Verificar que el buscador de dirección inicia el flujo de configuración de despacho [App] [Guest]",
   "observation": "Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.",
   "observed": "Al escribir la dirección en el buscador se inicia el flujo de despacho de B2C-26.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con elige una forma de entrega",
     "file": "TC-B2C138-APP-006-android-p02-home-con-elige-una-forma-de-entrega.png"
    },
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C138-APP-006-android-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C138-APP-006-android.png"
    }
   ],
   "spec": "tests-app/B2C-138.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" activa.\n5. El usuario toca el buscador y escribe Calle Uno 23, La Florida.\n6. El sistema inicia el flujo de configuración de despacho a domicilio (B2C-26).",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional)."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "Se inicia el flujo de configuración de despacho a domicilio definido en B2C-26.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-007",
   "name": "Verificar que \"Activar ubicación actual\" inicia el flujo de configuración de despacho [App] [Guest]",
   "observation": "Causa: el emulador no entrega ubicación (last location=null aun con permiso concedido, ubicación activada y geo fix), y la app muestra 'No pudimos obtener tu ubicación actual. Inténtalo nuevamente.'. Acción: ejecutar en un emulador o equipo con GPS funcional y re-ejecutar. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.",
   "observed": "Al tocar «Activar mi ubicación actual» la app muestra «No pudimos obtener tu ubicación actual. Inténtalo nuevamente.».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)\n- La App tiene permiso de ubicación del dispositivo",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con elige una forma de entrega",
     "file": "TC-B2C138-APP-007-android-p02-home-con-elige-una-forma-de-entrega.png"
    },
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C138-APP-007-android-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C138-APP-007-android.png"
    }
   ],
   "spec": "tests-app/B2C-138.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" activa.\n5. El usuario toca \"Activar ubicación actual\".\n6. El sistema inicia el flujo de configuración de despacho a domicilio (B2C-26).",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional)."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "\"Retiro en tienda\" queda activa en rojo, \"Despacho a domicilio\" en gris y se inicia el flujo definido en B2C-121.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-008",
   "name": "Verificar que la pestaña \"Retiro en tienda\" se activa e inicia el flujo de retiro [App] [Guest]",
   "observation": "Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.",
   "observed": "«Retiro en tienda» queda activa en rojo, «Despacho a domicilio» en gris y se inicia el flujo de B2C-121.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con elige una forma de entrega",
     "file": "TC-B2C138-APP-008-android-p02-home-con-elige-una-forma-de-entrega.png"
    },
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C138-APP-008-android-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C138-APP-008-android.png"
    }
   ],
   "spec": "tests-app/B2C-138.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" activa.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema muestra \"Retiro en tienda\" activa en rojo, \"Despacho a domicilio\" en gris e inicia el flujo de retiro en tienda (B2C-121).",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional)."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "El modal se cierra y el header sigue mostrando ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-009",
   "name": "Verificar que cerrar el modal con la X mantiene el header en \"Elige una forma de entrega\" [App] [Guest]",
   "observation": "Esperado: el modal se cierra y el header sigue en 'Elige una forma de entrega'. Obtenido: al tocar la ✕ el modal 'Elige tu método de entrega' sigue abierto (2 de 2 intentos en la corrida y 2 de 2 a mano). tests-app/B2C-138.spec.ts:120. Bug: B2C-1479. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.",
   "observed": "Al tocar la ✕ el modal «Elige tu método de entrega» sigue abierto.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con elige una forma de entrega",
     "file": "TC-B2C138-APP-009-android-p02-home-con-elige-una-forma-de-entrega.png"
    },
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C138-APP-009-android-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C138-APP-009-android.png"
    }
   ],
   "spec": "tests-app/B2C-138.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" activa.\n5. El usuario toca la \"X\" del modal.\n6. El sistema cierra el modal y muestra en el Store Locator del header ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional)."
  },
  {
   "device": "sdk_gphone64_x86_64 · Android 16 (emulador Medium_Phone_API_36.1)",
   "duration_s": 25.0,
   "executed_at": "2026-10-14",
   "expected": "El modal se cierra y el header sigue mostrando ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-010",
   "name": "Verificar que tocar fuera del modal lo cierra y mantiene el header en \"Elige una forma de entrega\" [App] [Guest]",
   "observation": "Esperado: tocar fuera del modal lo cierra. Obtenido: el modal ocupa toda la pantalla (no queda a la vista el Home ni la TabBar), no hay zona fuera que tocar; solo cierra con la X. Bug: B2C-1207. tests-app/B2C-138.spec.ts:129. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "observed": "Esperado: tocar fuera del modal lo cierra. Obtenido: el modal ocupa toda la pantalla (no queda a la vista el Home ni la TabBar), no hay zona fuera que tocar; solo cierra con la X. Bug: B2C-1207.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con elige una forma de entrega",
     "file": "TC-B2C138-APP-010-android-p02-home-con-elige-una-forma-de-entrega.png"
    },
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C138-APP-010-android-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Android · Paso 5 — modal abierto no queda zona fuera",
     "file": "TC-B2C138-APP-010-android-p05-modal-abierto-no-queda-zona-fuera.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C138-APP-010-android.png"
    }
   ],
   "spec": "tests-app/B2C-138.spec.ts:129",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" activa.\n5. El usuario toca fuera del área del modal.\n6. El sistema cierra el modal y muestra en el Store Locator del header ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "test_data": "v1.0.7, iOS"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "El modal permanece abierto con la pantalla de error, \"Reintentar\" y \"Volver al Inicio\", y el header sigue mostrando ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-011",
   "name": "Verificar que un error al cargar el modal muestra la pantalla de error dentro del modal [App] [Guest]",
   "observation": "Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta de proxy de la app para forzar el error en *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc y re-ejecutar. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.",
   "observed": "No se ejecutó: falta data de prueba.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema mantiene el modal abierto y muestra en su interior la pantalla de error con el mensaje correspondiente y los botones \"Reintentar\" y \"Volver al Inicio\".",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional)."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "El modal carga el selector \"Elige tu método de entrega\" con sus pestañas.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-012",
   "name": "Verificar que \"Reintentar\" vuelve a cargar el selector de método de entrega [App] [Guest]",
   "observation": "Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta de proxy de la app para forzar el error en *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc y re-ejecutar. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.",
   "observed": "No se ejecutó: falta data de prueba.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema mantiene el modal abierto y muestra en su interior la pantalla de error con el mensaje correspondiente y los botones \"Reintentar\" y \"Volver al Inicio\".\n5. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc.\n6. El usuario toca \"Reintentar\".\n7. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" activa.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional)."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "El usuario queda en el Home de la App.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-013",
   "name": "Verificar que \"Volver al Inicio\" del error del modal redirige al Home [App] [Guest]",
   "observation": "Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data. Acción: definir la herramienta de proxy de la app para forzar el error en *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc y re-ejecutar. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó Android=Android. iOS no certificado.",
   "observed": "No se ejecutó: falta data de prueba.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador).\n2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n3. El sistema carga la PLP con el Store Locator en el header.\n4. El usuario toca el chevron ∨ del Store Locator en el header.\n5. El sistema mantiene el modal abierto y muestra en su interior la pantalla de error con el mensaje correspondiente y los botones \"Reintentar\" y \"Volver al Inicio\".\n6. El usuario toca \"Volver al Inicio\".\n7. El sistema cierra el modal y redirige al Home de la App.",
   "test_data": "Datos del Excel de data referenciados por la fila (cuentas descritas en lenguaje funcional)."
  }
 ]
}
-->
