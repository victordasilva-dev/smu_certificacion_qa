# B2C-138 APP

| Campo | Valor |
|---|---|
| Suite | B2C-138 |
| Última actualización | 2026-10-27 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-138 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 7 |
| Rechazado | 3 |
| **Total** | **10** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-27 | 2 | TC-B2C138-APP-002, TC-B2C138-APP-005 |
| 2026-10-26 | 8 | TC-B2C138-APP-001, TC-B2C138-APP-003, TC-B2C138-APP-004, TC-B2C138-APP-006, TC-B2C138-APP-007, TC-B2C138-APP-008, TC-B2C138-APP-009, TC-B2C138-APP-010 |

## Detalle por caso de prueba

### TC-B2C138-APP-002 - Verificar que el Store Locator muestra "Elige una forma de entrega" sin método seleccionado

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-138-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com
- La cuenta daunuruco+noaddress@avatar-global.com no tiene dirección guardada ni método de entrega seleccionado

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- 000000000000675191-UN = 000000000000675191-UN
- daunuruco+noaddress@avatar-global.com = 10.101.010-4

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App y muestra en el Store Locator del header ícono + "Elige una forma de entrega" + chevron ∨.
3. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
4. El sistema carga la PLP y muestra en el Store Locator del header ícono + "Elige una forma de entrega" + chevron ∨.
5. El usuario abre la PDP de 000000000000675191-UN.
6. El sistema carga la PDP y muestra en el Store Locator del header ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado esperado**

Con el usuario logueado, en Home, PLP y PDP el Store Locator del header muestra ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): esperado: Store Locator con «Elige una forma de entrega» en Home, PLP y PDP. Obtenido con la cuenta sin dirección: la Home lo muestra (ícono + «Elige una forma de entrega» + chevron), pero la landing/PLP de categoría (la URL de categoría es de la web) y la PDP no tienen Store Locator en el header (solo «Volver» y el buscador o el nombre del producto). Es lo mismo que B2C-138-001 (reportado en B2C-1165, DESCARTADO); no se abre bug nuevo.

**Evidencia**

![Android · Paso 2 — home con el store locator del header](<B2C-138 Evidencias/TC-B2C138-APP-002-android-p02-home-con-el-store-locator-del-header.png>)

![Android · Paso 4 — plp landing sin store locator](<B2C-138 Evidencias/TC-B2C138-APP-002-android-p04-plp-landing-sin-store-locator.png>)

![Android · Paso 6 — pdp sin store locator](<B2C-138 Evidencias/TC-B2C138-APP-002-android-p06-pdp-sin-store-locator.png>)

![Android · Estado final](<B2C-138 Evidencias/TC-B2C138-APP-002-android.png>)

---

### TC-B2C138-APP-005 - Verificar que el modal muestra las pestañas y el mensaje "Aún no tienes direcciones guardadas"

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-138-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com
- La cuenta daunuruco+noaddress@avatar-global.com no tiene dirección guardada ni método de entrega seleccionado

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- daunuruco+noaddress@avatar-global.com = 10.101.010-4

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema abre el modal "Elige tu método de entrega" y muestra las pestañas ícono + "Despacho a domicilio" (activa) e ícono + "Retiro en tienda" (desactivada en gris), la imagen, el mensaje "Aún no tienes direcciones guardadas" y el texto de ayuda para ingresar una dirección.

**Resultado esperado**

El modal muestra "Despacho a domicilio" activa, "Retiro en tienda" en gris, la imagen, "Aún no tienes direcciones guardadas" y el texto de ayuda.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): al tocar el chevron del Store Locator el modal «Elige tu método de entrega» muestra «Despacho a domicilio» activa, «Retiro en tienda» en gris, la imagen, «Aún no tienes direcciones guardadas» y el texto de ayuda (con la cuenta sin dirección). Nota: el título del modal se ve con artefactos sobre el texto en la captura.

**Evidencia**

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-138 Evidencias/TC-B2C138-APP-005-android-p04-modal-elige-tu-metodo-de-entrega.png>)

---

### TC-B2C138-APP-001 - Verificar que el Store Locator muestra "Elige una forma de entrega" sin método seleccionado

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App y muestra en el Store Locator del header ícono + "Elige una forma de entrega" + chevron ∨.
3. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
4. El sistema carga la PLP y muestra en el Store Locator del header ícono + "Elige una forma de entrega" + chevron ∨.
5. El usuario abre la PDP de 000000000000675191-UN.
6. El sistema carga la PDP y muestra en el Store Locator del header ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado esperado**

En Home, PLP y PDP el Store Locator del header muestra ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado obtenido**

Esperado: Store Locator con 'Elige una forma de entrega' en Home, PLP y PDP. Obtenido: el Home lo muestra, pero la PLP (listado de 'Mostrar todo'; {PLP_URL} es de la web) y la PDP de 000000000000675191-UN no tienen Store Locator en el header. Es lo reportado en B2C-1165 (DESCARTADO); no se abre bug nuevo. tests-app/B2C-138.spec.ts:39. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C138-APP-003 - Verificar que tocar el chevron del Store Locator abre el modal "Elige tu método de entrega" con X

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema abre el modal "Elige tu método de entrega" con el botón cerrar "X".

**Resultado esperado**

Se muestra el modal "Elige tu método de entrega" con el botón "X".

**Resultado obtenido**

Al tocar el Store Locator del navbar se abre 'Elige tu método de entrega' con la X (✕) de cierre. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C138-APP-004 - Verificar que el modal muestra las pestañas y el mensaje "Aún no tienes direcciones guardadas"

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema abre el modal "Elige tu método de entrega" y muestra las pestañas ícono + "Despacho a domicilio" (activa) e ícono + "Retiro en tienda" (desactivada en gris), la imagen, el mensaje "Aún no tienes direcciones guardadas" y el texto de ayuda para ingresar una dirección.

**Resultado esperado**

El modal muestra "Despacho a domicilio" activa, "Retiro en tienda" en gris, la imagen, "Aún no tienes direcciones guardadas" y el texto de ayuda.

**Resultado obtenido**

El modal muestra 'Despacho a domicilio' activa (ícono en rojo) y 'Retiro en tienda' en gris, la imagen, 'Aún no tienes direcciones guardadas' y el texto de ayuda 'Para armar tu carro, ingresa una dirección…'. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C138-APP-006 - Verificar que el buscador de dirección inicia el flujo de configuración de despacho

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Calle Uno 23, La Florida = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" activa.
5. El usuario toca el buscador y escribe Calle Uno 23, La Florida.
6. El sistema inicia el flujo de configuración de despacho a domicilio (B2C-26).

**Resultado esperado**

Se inicia el flujo de configuración de despacho a domicilio definido en B2C-26.

**Resultado obtenido**

Al escribir Calle Uno 23, La Florida en el buscador y elegir la sugerencia se abre 'Detalles de la dirección' (flujo de B2C-26). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C138-APP-007 - Verificar que "Activar ubicación actual" inicia el flujo de configuración de despacho

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)
- La App tiene permiso de ubicación del dispositivo

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" activa.
5. El usuario toca "Activar ubicación actual".
6. El sistema inicia el flujo de configuración de despacho a domicilio (B2C-26).

**Resultado esperado**

Se inicia el flujo de configuración de despacho a domicilio definido en B2C-26.

**Resultado obtenido**

Con permiso de ubicación concedido (emulador ubicado en La Florida, Santiago), 'Activar mi ubicación actual' abre 'Detalles de la dirección' (flujo de B2C-26). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C138-APP-008 - Verificar que la pestaña "Retiro en tienda" se activa e inicia el flujo de retiro

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" activa.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema muestra "Retiro en tienda" activa en rojo, "Despacho a domicilio" en gris e inicia el flujo de retiro en tienda (B2C-121).

**Resultado esperado**

"Retiro en tienda" queda activa en rojo, "Despacho a domicilio" en gris y se inicia el flujo definido en B2C-121.

**Resultado obtenido**

Al tocar 'Retiro en tienda' queda activa con el ícono en rojo, 'Despacho a domicilio' pasa a gris y se muestra 'Selecciona tu tienda Unimarc' (flujo de B2C-121). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C138-APP-009 - Verificar que cerrar el modal con la X mantiene el header en "Elige una forma de entrega"

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" activa.
5. El usuario toca la "X" del modal.
6. El sistema cierra el modal y muestra en el Store Locator del header ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado esperado**

El modal se cierra y el header sigue mostrando ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado obtenido**

La X cierra el modal y el navbar sigue mostrando 'Elige una forma de entrega'. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

### TC-B2C138-APP-010 - Verificar que tocar fuera del modal lo cierra y mantiene el header en "Elige una forma de entrega"

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin método de entrega seleccionado (App recién instalada o con datos borrados)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el chevron ∨ del Store Locator en el header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" activa.
5. El usuario toca fuera del área del modal.
6. El sistema cierra el modal y muestra en el Store Locator del header ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado esperado**

El modal se cierra y el header sigue mostrando ícono + "Elige una forma de entrega" + chevron ∨.

**Resultado obtenido**

Esperado: tocar fuera del modal lo cierra. Obtenido: el modal ocupa toda la pantalla (no queda a la vista el Home ni la TabBar), no hay zona fuera que tocar; solo cierra con la X. Bug: B2C-1207. tests-app/B2C-138.spec.ts:129. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Pixel 6 · Android 14 (emulador)"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-138",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-138 APP Test Cases.xlsx",
  "title": "B2C-138 APP",
  "updated_at": "2026-10-27"
 },
 "history": {
  "2026-10-26": [
   "TC-B2C138-APP-001",
   "TC-B2C138-APP-003",
   "TC-B2C138-APP-004",
   "TC-B2C138-APP-006",
   "TC-B2C138-APP-007",
   "TC-B2C138-APP-008",
   "TC-B2C138-APP-009",
   "TC-B2C138-APP-010"
  ],
  "2026-10-27": [
   "TC-B2C138-APP-002",
   "TC-B2C138-APP-005"
  ]
 },
 "results": [
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Con el usuario logueado, en Home, PLP y PDP el Store Locator del header muestra ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-002",
   "name": "Verificar que el Store Locator muestra \"Elige una forma de entrega\" sin método seleccionado",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): esperado: Store Locator con «Elige una forma de entrega» en Home, PLP y PDP. Obtenido con la cuenta sin dirección: la Home lo muestra (ícono + «Elige una forma de entrega» + chevron), pero la landing/PLP de categoría (la URL de categoría es de la web) y la PDP no tienen Store Locator en el header (solo «Volver» y el buscador o el nombre del producto). Es lo mismo que B2C-138-001 (reportado en B2C-1165, DESCARTADO); no se abre bug nuevo.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com\n- La cuenta daunuruco+noaddress@avatar-global.com no tiene dirección guardada ni método de entrega seleccionado",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con el store locator del header",
     "file": "TC-B2C138-APP-002-android-p02-home-con-el-store-locator-del-header.png"
    },
    {
     "caption": "Android · Paso 4 — plp landing sin store locator",
     "file": "TC-B2C138-APP-002-android-p04-plp-landing-sin-store-locator.png"
    },
    {
     "caption": "Android · Paso 6 — pdp sin store locator",
     "file": "TC-B2C138-APP-002-android-p06-pdp-sin-store-locator.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C138-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-138-pendientes.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App y muestra en el Store Locator del header ícono + \"Elige una forma de entrega\" + chevron ∨.\n3. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n4. El sistema carga la PLP y muestra en el Store Locator del header ícono + \"Elige una forma de entrega\" + chevron ∨.\n5. El usuario abre la PDP de 000000000000675191-UN.\n6. El sistema carga la PDP y muestra en el Store Locator del header ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- 000000000000675191-UN = 000000000000675191-UN\n- daunuruco+noaddress@avatar-global.com = 10.101.010-4"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El modal muestra \"Despacho a domicilio\" activa, \"Retiro en tienda\" en gris, la imagen, \"Aún no tienes direcciones guardadas\" y el texto de ayuda.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-005",
   "name": "Verificar que el modal muestra las pestañas y el mensaje \"Aún no tienes direcciones guardadas\"",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): al tocar el chevron del Store Locator el modal «Elige tu método de entrega» muestra «Despacho a domicilio» activa, «Retiro en tienda» en gris, la imagen, «Aún no tienes direcciones guardadas» y el texto de ayuda (con la cuenta sin dirección). Nota: el título del modal se ve con artefactos sobre el texto en la captura.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com\n- La cuenta daunuruco+noaddress@avatar-global.com no tiene dirección guardada ni método de entrega seleccionado",
   "screenshots": [
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C138-APP-005-android-p04-modal-elige-tu-metodo-de-entrega.png"
    }
   ],
   "spec": "tests-app/B2C-138-pendientes.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema abre el modal \"Elige tu método de entrega\" y muestra las pestañas ícono + \"Despacho a domicilio\" (activa) e ícono + \"Retiro en tienda\" (desactivada en gris), la imagen, el mensaje \"Aún no tienes direcciones guardadas\" y el texto de ayuda para ingresar una dirección.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- daunuruco+noaddress@avatar-global.com = 10.101.010-4"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "En Home, PLP y PDP el Store Locator del header muestra ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-001",
   "name": "Verificar que el Store Locator muestra \"Elige una forma de entrega\" sin método seleccionado",
   "observed": "Esperado: Store Locator con 'Elige una forma de entrega' en Home, PLP y PDP. Obtenido: el Home lo muestra, pero la PLP (listado de 'Mostrar todo'; {PLP_URL} es de la web) y la PDP de 000000000000675191-UN no tienen Store Locator en el header. Es lo reportado en B2C-1165 (DESCARTADO); no se abre bug nuevo. tests-app/B2C-138.spec.ts:39. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App y muestra en el Store Locator del header ícono + \"Elige una forma de entrega\" + chevron ∨.\n3. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n4. El sistema carga la PLP y muestra en el Store Locator del header ícono + \"Elige una forma de entrega\" + chevron ∨.\n5. El usuario abre la PDP de 000000000000675191-UN.\n6. El sistema carga la PDP y muestra en el Store Locator del header ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el modal \"Elige tu método de entrega\" con el botón \"X\".",
   "form_factor": "app",
   "id": "TC-B2C138-APP-003",
   "name": "Verificar que tocar el chevron del Store Locator abre el modal \"Elige tu método de entrega\" con X",
   "observed": "Al tocar el Store Locator del navbar se abre 'Elige tu método de entrega' con la X (✕) de cierre. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con el botón cerrar \"X\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El modal muestra \"Despacho a domicilio\" activa, \"Retiro en tienda\" en gris, la imagen, \"Aún no tienes direcciones guardadas\" y el texto de ayuda.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-004",
   "name": "Verificar que el modal muestra las pestañas y el mensaje \"Aún no tienes direcciones guardadas\"",
   "observed": "El modal muestra 'Despacho a domicilio' activa (ícono en rojo) y 'Retiro en tienda' en gris, la imagen, 'Aún no tienes direcciones guardadas' y el texto de ayuda 'Para armar tu carro, ingresa una dirección…'. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema abre el modal \"Elige tu método de entrega\" y muestra las pestañas ícono + \"Despacho a domicilio\" (activa) e ícono + \"Retiro en tienda\" (desactivada en gris), la imagen, el mensaje \"Aún no tienes direcciones guardadas\" y el texto de ayuda para ingresar una dirección.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se inicia el flujo de configuración de despacho a domicilio definido en B2C-26.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-006",
   "name": "Verificar que el buscador de dirección inicia el flujo de configuración de despacho",
   "observed": "Al escribir Calle Uno 23, La Florida en el buscador y elegir la sugerencia se abre 'Detalles de la dirección' (flujo de B2C-26). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" activa.\n5. El usuario toca el buscador y escribe Calle Uno 23, La Florida.\n6. El sistema inicia el flujo de configuración de despacho a domicilio (B2C-26).",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Calle Uno 23, La Florida = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se inicia el flujo de configuración de despacho a domicilio definido en B2C-26.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-007",
   "name": "Verificar que \"Activar ubicación actual\" inicia el flujo de configuración de despacho",
   "observed": "Con permiso de ubicación concedido (emulador ubicado en La Florida, Santiago), 'Activar mi ubicación actual' abre 'Detalles de la dirección' (flujo de B2C-26). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)\n- La App tiene permiso de ubicación del dispositivo",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" activa.\n5. El usuario toca \"Activar ubicación actual\".\n6. El sistema inicia el flujo de configuración de despacho a domicilio (B2C-26).",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "\"Retiro en tienda\" queda activa en rojo, \"Despacho a domicilio\" en gris y se inicia el flujo definido en B2C-121.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-008",
   "name": "Verificar que la pestaña \"Retiro en tienda\" se activa e inicia el flujo de retiro",
   "observed": "Al tocar 'Retiro en tienda' queda activa con el ícono en rojo, 'Despacho a domicilio' pasa a gris y se muestra 'Selecciona tu tienda Unimarc' (flujo de B2C-121). Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" activa.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema muestra \"Retiro en tienda\" activa en rojo, \"Despacho a domicilio\" en gris e inicia el flujo de retiro en tienda (B2C-121).",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El modal se cierra y el header sigue mostrando ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-009",
   "name": "Verificar que cerrar el modal con la X mantiene el header en \"Elige una forma de entrega\"",
   "observed": "La X cierra el modal y el navbar sigue mostrando 'Elige una forma de entrega'. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" activa.\n5. El usuario toca la \"X\" del modal.\n6. El sistema cierra el modal y muestra en el Store Locator del header ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El modal se cierra y el header sigue mostrando ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "form_factor": "app",
   "id": "TC-B2C138-APP-010",
   "name": "Verificar que tocar fuera del modal lo cierra y mantiene el header en \"Elige una forma de entrega\"",
   "observed": "Esperado: tocar fuera del modal lo cierra. Obtenido: el modal ocupa toda la pantalla (no queda a la vista el Home ni la TabBar), no hay zona fuera que tocar; solo cierra con la X. Bug: B2C-1207. tests-app/B2C-138.spec.ts:129. Corrida solo Android (build v1.0.7, com.smuapp.unimarc); la fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. iOS queda Pendiente (sin MOBILENEXT_API_KEY ni .ipa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin método de entrega seleccionado (App recién instalada o con datos borrados)",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el chevron ∨ del Store Locator en el header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" activa.\n5. El usuario toca fuera del área del modal.\n6. El sistema cierra el modal y muestra en el Store Locator del header ícono + \"Elige una forma de entrega\" + chevron ∨.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS"
  }
 ]
}
-->
