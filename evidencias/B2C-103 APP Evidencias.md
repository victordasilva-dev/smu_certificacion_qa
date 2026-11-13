# B2C-103 APP - Filtro Sellos de advertencia - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-103 APP |
| Última actualización | 2026-11-12 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Dispositivo Android | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-103 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 7 |
| Rechazado | 1 |
| **Total** | **8** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-12 | 8 | TC-B2C103-APP-001, TC-B2C103-APP-002, TC-B2C103-APP-003, TC-B2C103-APP-004, TC-B2C103-APP-005, TC-B2C103-APP-006, TC-B2C103-APP-007, TC-B2C103-APP-008 |

## Detalle por caso de prueba

### TC-B2C103-APP-001 - Verificar que el filtro "Sellos de advertencia" se muestra como dropdown colapsado con nombre y flecha hacia abajo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-103.spec.ts:121 |

**Precondiciones**

- User type: Logueado (vhchirinos+comprador@avatar-global.com)
- Viewport: App iOS/Android
- Ubicacion: PLP de Unimarc
- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos con sellos de advertencia

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

PLP: Categorías > Carnes > Vacuno (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno)

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro y la sección "Aplica tus filtros".

**Resultado esperado**

En "Aplica tus filtros" se muestra el dropdown "Sellos de advertencia" colapsado, con su nombre y la flecha hacia abajo.

**Resultado obtenido**

En «Aplica tus filtros» la sección «Sellos de advertencia» aparece colapsada (sin opciones a la vista), con su nombre y la flecha hacia abajo.

**Observación**

La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — plp vacuno con 12 productos](<B2C-103 APP Evidencias/TC-B2C103-APP-001-android-p02-plp-vacuno-con-12-productos.png>)

![Android · Paso 4 — panel de filtros abierto](<B2C-103 APP Evidencias/TC-B2C103-APP-001-android-p04-panel-de-filtros-abierto.png>)

![Android · Paso 5 — dropdown sellos de advertencia colapsado](<B2C-103 APP Evidencias/TC-B2C103-APP-001-android-p05-dropdown-sellos-de-advertencia-colapsado.png>)

![Android · Estado final](<B2C-103 APP Evidencias/TC-B2C103-APP-001-android.png>)

---

### TC-B2C103-APP-002 - Verificar que al expandir "Sellos de advertencia" las opciones se muestran en orden fijo, como checkbox y desmarcadas [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-103.spec.ts:133 |

**Precondiciones**

- User type: Logueado (vhchirinos+comprador@avatar-global.com)
- Viewport: App iOS/Android
- Ubicacion: PLP de Unimarc
- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos con sellos de advertencia

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

PLP: Categorías > Carnes > Vacuno (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno)

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro y la sección "Aplica tus filtros".
5. El usuario toca el dropdown "Sellos de advertencia".
6. El sistema expande el dropdown y muestra las opciones con checkbox.

**Resultado esperado**

Las opciones con productos se muestran como checkbox, todas desmarcadas, respetando el orden fijo: Sin sellos > No alto en azúcares > No alto en calorías > No alto en grasas saturadas > No alto en sodio > No alto en alcohol.

**Resultado obtenido**

Las 5 opciones se muestran como checkbox y desmarcadas, pero en el orden Sin sellos > No alto en calorías > No alto en azúcares > No alto en sodio > No alto en grasas saturadas.

**Observación**

Esperado: orden fijo Sin sellos > No alto en azúcares > No alto en calorías > No alto en grasas saturadas > No alto en sodio (> No alto en alcohol). Obtenido: Sin sellos > No alto en calorías > No alto en azúcares > No alto en sodio > No alto en grasas saturadas (2 de 2 intentos). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — plp vacuno con 12 productos](<B2C-103 APP Evidencias/TC-B2C103-APP-002-android-p02-plp-vacuno-con-12-productos.png>)

![Android · Paso 4 — panel de filtros abierto](<B2C-103 APP Evidencias/TC-B2C103-APP-002-android-p04-panel-de-filtros-abierto.png>)

![Android · Paso 6 — sellos de advertencia expandido](<B2C-103 APP Evidencias/TC-B2C103-APP-002-android-p06-sellos-de-advertencia-expandido.png>)

![Android · Paso 7 — opciones de sellos de advertencia](<B2C-103 APP Evidencias/TC-B2C103-APP-002-android-p07-opciones-de-sellos-de-advertencia.png>)

![Android · Estado final](<B2C-103 APP Evidencias/TC-B2C103-APP-002-android.png>)

---

### TC-B2C103-APP-003 - Verificar que marcar un sello lo muestra marcado, agrega badge y chip y actualiza el conteo de "Mostrar productos" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-103.spec.ts:149 |

**Precondiciones**

- User type: Logueado (vhchirinos+comprador@avatar-global.com)
- Viewport: App iOS/Android
- Ubicacion: PLP de Unimarc
- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos con sellos de advertencia

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

PLP: Categorías > Carnes > Vacuno (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno)

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro y la sección "Aplica tus filtros".
5. El usuario toca el dropdown "Sellos de advertencia".
6. El sistema expande el dropdown y muestra las opciones con checkbox.
7. El usuario marca "No alto en azúcares".
8. El sistema recalcula el conteo del botón.

**Resultado esperado**

El checkbox "No alto en azúcares" queda marcado, el dropdown muestra el badge 1, aparece el chip "No alto en azúcares" en "Filtros aplicados" y el botón muestra "Mostrar [N] productos" con el conteo actualizado.

**Resultado obtenido**

Al marcar «No alto en azúcares» el checkbox queda marcado, la sección muestra el badge 1, aparece el chip «No alto en azúcares» en «Filtros aplicados» y el botón pasa de «Mostrar 12 productos» a «Mostrar 2 productos».

**Observación**

La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — plp vacuno con 12 productos](<B2C-103 APP Evidencias/TC-B2C103-APP-003-android-p02-plp-vacuno-con-12-productos.png>)

![Android · Paso 4 — panel de filtros abierto](<B2C-103 APP Evidencias/TC-B2C103-APP-003-android-p04-panel-de-filtros-abierto.png>)

![Android · Paso 6 — sellos de advertencia expandido](<B2C-103 APP Evidencias/TC-B2C103-APP-003-android-p06-sellos-de-advertencia-expandido.png>)

![Android · Paso 8 — no alto en azucares marcado](<B2C-103 APP Evidencias/TC-B2C103-APP-003-android-p08-no-alto-en-azucares-marcado.png>)

![Android · Paso 9 — chip en filtros aplicados](<B2C-103 APP Evidencias/TC-B2C103-APP-003-android-p09-chip-en-filtros-aplicados.png>)

![Android · Estado final](<B2C-103 APP Evidencias/TC-B2C103-APP-003-android.png>)

---

### TC-B2C103-APP-004 - Verificar que un sello sin productos en la PLP no se muestra en el dropdown [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-103.spec.ts:170 |

**Precondiciones**

- User type: Logueado (vhchirinos+comprador@avatar-global.com)
- Viewport: App iOS/Android
- Ubicacion: PLP de Unimarc
- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos con sellos de advertencia
- En la PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno hay al menos un sello sin productos (en DEV: "No alto en alcohol")

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

PLP: Categorías > Carnes > Vacuno (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno)

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro y la sección "Aplica tus filtros".
5. El usuario toca el dropdown "Sellos de advertencia".
6. El sistema expande el dropdown y muestra las opciones con checkbox.

**Resultado esperado**

El sello sin productos en la PLP (ej. "No alto en alcohol") no aparece en el listado del dropdown; solo se muestran los sellos con productos.

**Resultado obtenido**

El dropdown lista Sin sellos, No alto en calorías, No alto en azúcares, No alto en sodio y No alto en grasas saturadas; «No alto en alcohol» (sin productos en Vacuno) no aparece.

**Observación**

La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — plp vacuno con 12 productos](<B2C-103 APP Evidencias/TC-B2C103-APP-004-android-p02-plp-vacuno-con-12-productos.png>)

![Android · Paso 4 — panel de filtros abierto](<B2C-103 APP Evidencias/TC-B2C103-APP-004-android-p04-panel-de-filtros-abierto.png>)

![Android · Paso 6 — sellos de advertencia expandido](<B2C-103 APP Evidencias/TC-B2C103-APP-004-android-p06-sellos-de-advertencia-expandido.png>)

![Android · Paso 7 — opciones sin no alto en alcohol](<B2C-103 APP Evidencias/TC-B2C103-APP-004-android-p07-opciones-sin-no-alto-en-alcohol.png>)

![Android · Estado final](<B2C-103 APP Evidencias/TC-B2C103-APP-004-android.png>)

---

### TC-B2C103-APP-005 - Verificar que "Mostrar productos" con varios sellos cierra el panel y el encabezado muestra el mismo conteo que el botón [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-103.spec.ts:183 |

**Precondiciones**

- User type: Logueado (vhchirinos+comprador@avatar-global.com)
- Viewport: App iOS/Android
- Ubicacion: PLP de Unimarc
- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos con sellos de advertencia

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

PLP: Categorías > Carnes > Vacuno (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno)

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro y la sección "Aplica tus filtros".
5. El usuario toca el dropdown "Sellos de advertencia".
6. El sistema expande el dropdown y muestra las opciones con checkbox.
7. El usuario marca "No alto en azúcares" y "No alto en sodio".
8. El sistema marca ambos checkboxes, muestra el badge 2 en el dropdown, agrega un chip por cada sello en "Filtros aplicados" y actualiza el conteo del botón "Mostrar [N] productos".
9. El usuario toca "Mostrar [N] productos".
10. El sistema cierra el panel y actualiza el listado.

**Resultado esperado**

El panel se cierra, el listado muestra los productos según la combinación de sellos seleccionados y el conteo del encabezado de la PLP es igual al N que mostraba el botón.

**Resultado obtenido**

Con «No alto en azúcares» y «No alto en sodio» el badge es 2, hay un chip por sello y el botón dice «Mostrar 2 productos»; al tocarlo el panel se cierra y el encabezado de la PLP muestra 2 productos, los mismos 2 del listado.

**Observación**

En Vacuno los productos «No alto en azúcares» también son «No alto en sodio», así que el conteo no baja al sumar el segundo sello. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — plp vacuno con 12 productos](<B2C-103 APP Evidencias/TC-B2C103-APP-005-android-p02-plp-vacuno-con-12-productos.png>)

![Android · Paso 4 — panel de filtros abierto](<B2C-103 APP Evidencias/TC-B2C103-APP-005-android-p04-panel-de-filtros-abierto.png>)

![Android · Paso 6 — sellos de advertencia expandido](<B2C-103 APP Evidencias/TC-B2C103-APP-005-android-p06-sellos-de-advertencia-expandido.png>)

![Android · Paso 8 — chips de los dos sellos](<B2C-103 APP Evidencias/TC-B2C103-APP-005-android-p08-chips-de-los-dos-sellos.png>)

![Android · Paso 8 — no alto en azucares y no alto en sodio marcados](<B2C-103 APP Evidencias/TC-B2C103-APP-005-android-p08-no-alto-en-azucares-y-no-alto-en-sodio-marcados.png>)

![Android · Paso 10 — listado con 2 productos](<B2C-103 APP Evidencias/TC-B2C103-APP-005-android-p10-listado-con-2-productos.png>)

![Android · Estado final](<B2C-103 APP Evidencias/TC-B2C103-APP-005-android.png>)

---

### TC-B2C103-APP-006 - Verificar que desmarcar un sello actualiza el checkbox, baja el badge, quita su chip y recalcula el conteo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-103.spec.ts:209 |

**Precondiciones**

- User type: Logueado (vhchirinos+comprador@avatar-global.com)
- Viewport: App iOS/Android
- Ubicacion: PLP de Unimarc
- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos con sellos de advertencia

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

PLP: Categorías > Carnes > Vacuno (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno)

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro y la sección "Aplica tus filtros".
5. El usuario toca el dropdown "Sellos de advertencia".
6. El sistema expande el dropdown y muestra las opciones con checkbox.
7. El usuario marca "No alto en azúcares" y "No alto en sodio".
8. El sistema marca ambos checkboxes, muestra el badge 2 en el dropdown, agrega un chip por cada sello en "Filtros aplicados" y actualiza el conteo del botón "Mostrar [N] productos".
9. El usuario desmarca "No alto en sodio".
10. El sistema recalcula el conteo del botón.

**Resultado esperado**

El checkbox "No alto en sodio" queda desmarcado, el badge baja de 2 a 1, el chip "No alto en sodio" desaparece (se mantiene "No alto en azúcares") y el botón muestra el conteo considerando solo "No alto en azúcares".

**Resultado obtenido**

Al desmarcar «No alto en sodio» su checkbox queda desmarcado, «No alto en azúcares» sigue marcado, el badge baja de 2 a 1, queda solo el chip «No alto en azúcares» y el botón muestra 2, el conteo de solo «No alto en azúcares».

**Observación**

El conteo con un sello y con los dos es el mismo (2) en Vacuno. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — plp vacuno con 12 productos](<B2C-103 APP Evidencias/TC-B2C103-APP-006-android-p02-plp-vacuno-con-12-productos.png>)

![Android · Paso 4 — panel de filtros abierto](<B2C-103 APP Evidencias/TC-B2C103-APP-006-android-p04-panel-de-filtros-abierto.png>)

![Android · Paso 6 — sellos de advertencia expandido](<B2C-103 APP Evidencias/TC-B2C103-APP-006-android-p06-sellos-de-advertencia-expandido.png>)

![Android · Paso 8 — no alto en azucares y no alto en sodio marcados](<B2C-103 APP Evidencias/TC-B2C103-APP-006-android-p08-no-alto-en-azucares-y-no-alto-en-sodio-marcados.png>)

![Android · Paso 9 — no alto en sodio desmarcado](<B2C-103 APP Evidencias/TC-B2C103-APP-006-android-p09-no-alto-en-sodio-desmarcado.png>)

![Android · Paso 10 — chips tras desmarcar](<B2C-103 APP Evidencias/TC-B2C103-APP-006-android-p10-chips-tras-desmarcar.png>)

![Android · Estado final](<B2C-103 APP Evidencias/TC-B2C103-APP-006-android.png>)

---

### TC-B2C103-APP-007 - Verificar que un sello combinado con otro tipo de filtro aplica lógica AND [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-103.spec.ts:238 |

**Precondiciones**

- User type: Logueado (vhchirinos+comprador@avatar-global.com)
- Viewport: App iOS/Android
- Ubicacion: PLP de Unimarc
- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos con sellos de advertencia
- En la PLP hay al menos una marca con productos que tienen y que no tienen el sello "No alto en azúcares"

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

PLP: Categorías > Carnes > Vacuno (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno)

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro y la sección "Aplica tus filtros".
5. El usuario toca el dropdown "Sellos de advertencia".
6. El sistema expande el dropdown y muestra las opciones con checkbox.
7. El usuario marca "No alto en azúcares".
8. El sistema actualiza el conteo del botón.
9. El usuario expande "Marca" y selecciona una marca.
10. El sistema recalcula el conteo del botón.
11. El usuario toca "Mostrar [N] productos".
12. El sistema cierra el panel y actualiza el listado.

**Resultado esperado**

Al agregar la marca el conteo del botón disminuye o se mantiene (nunca aumenta); el listado muestra solo productos de la marca seleccionada que cumplen "No alto en azúcares" y el conteo del encabezado coincide con el del botón.

**Resultado obtenido**

«No alto en azúcares» deja 2 productos; al agregar la marca Fundo Rio Alegre (4 productos en Vacuno, solo 2 con el sello) el conteo se mantiene en 2; el listado muestra 2 productos, todos de Fundo Rio Alegre, y el encabezado coincide con el botón.

**Observación**

El TC no nombra la marca: se usó Fundo Rio Alegre, que cumple la precondición (tiene productos con y sin el sello; el spec lo comprueba antes de los pasos). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — plp vacuno con 12 productos](<B2C-103 APP Evidencias/TC-B2C103-APP-007-android-p02-plp-vacuno-con-12-productos.png>)

![Android · Paso 4 — panel de filtros abierto](<B2C-103 APP Evidencias/TC-B2C103-APP-007-android-p04-panel-de-filtros-abierto.png>)

![Android · Paso 6 — sellos de advertencia expandido](<B2C-103 APP Evidencias/TC-B2C103-APP-007-android-p06-sellos-de-advertencia-expandido.png>)

![Android · Paso 8 — no alto en azucares marcado 2](<B2C-103 APP Evidencias/TC-B2C103-APP-007-android-p08-no-alto-en-azucares-marcado-2.png>)

![Android · Paso 10 — no alto en azucares y fundo rio alegre 2](<B2C-103 APP Evidencias/TC-B2C103-APP-007-android-p10-no-alto-en-azucares-y-fundo-rio-alegre-2.png>)

![Android · Paso 12 — listado con no alto en azucares y fundo rio alegre](<B2C-103 APP Evidencias/TC-B2C103-APP-007-android-p12-listado-con-no-alto-en-azucares-y-fundo-rio-alegre.png>)

![Android · Estado final](<B2C-103 APP Evidencias/TC-B2C103-APP-007-android.png>)

---

### TC-B2C103-APP-008 - Verificar que quitar un sello desde su chip en "Filtros aplicados" desmarca el checkbox y actualiza badge y conteo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-12 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador |
| Spec | tests-app/B2C-103.spec.ts:270 |

**Precondiciones**

- User type: Logueado (vhchirinos+comprador@avatar-global.com)
- Viewport: App iOS/Android
- Ubicacion: PLP de Unimarc
- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos con sellos de advertencia

**Data utilizada**

App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)

Cuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)

PLP: Categorías > Carnes > Vacuno (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno)

**Pasos ejecutados**

1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro y la sección "Aplica tus filtros".
5. El usuario toca el dropdown "Sellos de advertencia".
6. El sistema expande el dropdown y muestra las opciones con checkbox.
7. El usuario marca "No alto en azúcares" y "No alto en sodio".
8. El sistema marca ambos checkboxes, muestra el badge 2 en el dropdown, agrega un chip por cada sello en "Filtros aplicados" y actualiza el conteo del botón "Mostrar [N] productos".
9. El usuario toca la X del chip "No alto en sodio" en "Filtros aplicados".
10. El sistema elimina el chip y recalcula el conteo del botón.

**Resultado esperado**

El chip "No alto en sodio" desaparece, su checkbox queda desmarcado en el dropdown, el badge baja de 2 a 1 y el botón muestra el conteo considerando solo "No alto en azúcares".

**Resultado obtenido**

Al tocar la X del chip «No alto en sodio» el chip desaparece (queda «No alto en azúcares»), su checkbox queda desmarcado, el badge baja de 2 a 1 y el botón muestra 2, el conteo de solo «No alto en azúcares».

**Observación**

Pasó en el reintento 1; el primer intento falló al ubicar la sección en el panel (desplazamiento del script, no de la app). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — plp vacuno con 12 productos](<B2C-103 APP Evidencias/TC-B2C103-APP-008-android-p02-plp-vacuno-con-12-productos.png>)

![Android · Paso 4 — panel de filtros abierto](<B2C-103 APP Evidencias/TC-B2C103-APP-008-android-p04-panel-de-filtros-abierto.png>)

![Android · Paso 6 — sellos de advertencia expandido](<B2C-103 APP Evidencias/TC-B2C103-APP-008-android-p06-sellos-de-advertencia-expandido.png>)

![Android · Paso 8 — chips de los dos sellos](<B2C-103 APP Evidencias/TC-B2C103-APP-008-android-p08-chips-de-los-dos-sellos.png>)

![Android · Paso 10 — chip no alto en sodio quitado](<B2C-103 APP Evidencias/TC-B2C103-APP-008-android-p10-chip-no-alto-en-sodio-quitado.png>)

![Android · Paso 10 — no alto en sodio desmarcado en el dropdown](<B2C-103 APP Evidencias/TC-B2C103-APP-008-android-p10-no-alto-en-sodio-desmarcado-en-el-dropdown.png>)

![Android · Estado final](<B2C-103 APP Evidencias/TC-B2C103-APP-008-android.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador"
  },
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-103 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-103 APP Test Cases.xlsx",
  "title": "B2C-103 APP - Filtro Sellos de advertencia - Evidencias QA",
  "updated_at": "2026-11-12"
 },
 "history": {
  "2026-11-12": [
   "TC-B2C103-APP-001",
   "TC-B2C103-APP-002",
   "TC-B2C103-APP-003",
   "TC-B2C103-APP-004",
   "TC-B2C103-APP-005",
   "TC-B2C103-APP-006",
   "TC-B2C103-APP-007",
   "TC-B2C103-APP-008"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "En \"Aplica tus filtros\" se muestra el dropdown \"Sellos de advertencia\" colapsado, con su nombre y la flecha hacia abajo.",
   "form_factor": "app",
   "id": "TC-B2C103-APP-001",
   "name": "Verificar que el filtro \"Sellos de advertencia\" se muestra como dropdown colapsado con nombre y flecha hacia abajo [App] [Logueado]",
   "observation": "La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "En «Aplica tus filtros» la sección «Sellos de advertencia» aparece colapsada (sin opciones a la vista), con su nombre y la flecha hacia abajo.",
   "platform": "Android",
   "preconditions": "- User type: Logueado (vhchirinos+comprador@avatar-global.com)\n- Viewport: App iOS/Android\n- Ubicacion: PLP de Unimarc\n- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos con sellos de advertencia",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — plp vacuno con 12 productos",
     "file": "TC-B2C103-APP-001-android-p02-plp-vacuno-con-12-productos.png"
    },
    {
     "caption": "Android · Paso 4 — panel de filtros abierto",
     "file": "TC-B2C103-APP-001-android-p04-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Android · Paso 5 — dropdown sellos de advertencia colapsado",
     "file": "TC-B2C103-APP-001-android-p05-dropdown-sellos-de-advertencia-colapsado.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C103-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-103.spec.ts:121",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro y la sección \"Aplica tus filtros\".",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\nPLP: Categorías > Carnes > Vacuno (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "Las opciones con productos se muestran como checkbox, todas desmarcadas, respetando el orden fijo: Sin sellos > No alto en azúcares > No alto en calorías > No alto en grasas saturadas > No alto en sodio > No alto en alcohol.",
   "form_factor": "app",
   "id": "TC-B2C103-APP-002",
   "name": "Verificar que al expandir \"Sellos de advertencia\" las opciones se muestran en orden fijo, como checkbox y desmarcadas [App] [Logueado]",
   "observation": "Esperado: orden fijo Sin sellos > No alto en azúcares > No alto en calorías > No alto en grasas saturadas > No alto en sodio (> No alto en alcohol). Obtenido: Sin sellos > No alto en calorías > No alto en azúcares > No alto en sodio > No alto en grasas saturadas (2 de 2 intentos). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "Las 5 opciones se muestran como checkbox y desmarcadas, pero en el orden Sin sellos > No alto en calorías > No alto en azúcares > No alto en sodio > No alto en grasas saturadas.",
   "platform": "Android",
   "preconditions": "- User type: Logueado (vhchirinos+comprador@avatar-global.com)\n- Viewport: App iOS/Android\n- Ubicacion: PLP de Unimarc\n- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos con sellos de advertencia",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — plp vacuno con 12 productos",
     "file": "TC-B2C103-APP-002-android-p02-plp-vacuno-con-12-productos.png"
    },
    {
     "caption": "Android · Paso 4 — panel de filtros abierto",
     "file": "TC-B2C103-APP-002-android-p04-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Android · Paso 6 — sellos de advertencia expandido",
     "file": "TC-B2C103-APP-002-android-p06-sellos-de-advertencia-expandido.png"
    },
    {
     "caption": "Android · Paso 7 — opciones de sellos de advertencia",
     "file": "TC-B2C103-APP-002-android-p07-opciones-de-sellos-de-advertencia.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C103-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-103.spec.ts:133",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro y la sección \"Aplica tus filtros\".\n5. El usuario toca el dropdown \"Sellos de advertencia\".\n6. El sistema expande el dropdown y muestra las opciones con checkbox.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\nPLP: Categorías > Carnes > Vacuno (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "El checkbox \"No alto en azúcares\" queda marcado, el dropdown muestra el badge 1, aparece el chip \"No alto en azúcares\" en \"Filtros aplicados\" y el botón muestra \"Mostrar [N] productos\" con el conteo actualizado.",
   "form_factor": "app",
   "id": "TC-B2C103-APP-003",
   "name": "Verificar que marcar un sello lo muestra marcado, agrega badge y chip y actualiza el conteo de \"Mostrar productos\" [App] [Logueado]",
   "observation": "La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "Al marcar «No alto en azúcares» el checkbox queda marcado, la sección muestra el badge 1, aparece el chip «No alto en azúcares» en «Filtros aplicados» y el botón pasa de «Mostrar 12 productos» a «Mostrar 2 productos».",
   "platform": "Android",
   "preconditions": "- User type: Logueado (vhchirinos+comprador@avatar-global.com)\n- Viewport: App iOS/Android\n- Ubicacion: PLP de Unimarc\n- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos con sellos de advertencia",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — plp vacuno con 12 productos",
     "file": "TC-B2C103-APP-003-android-p02-plp-vacuno-con-12-productos.png"
    },
    {
     "caption": "Android · Paso 4 — panel de filtros abierto",
     "file": "TC-B2C103-APP-003-android-p04-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Android · Paso 6 — sellos de advertencia expandido",
     "file": "TC-B2C103-APP-003-android-p06-sellos-de-advertencia-expandido.png"
    },
    {
     "caption": "Android · Paso 8 — no alto en azucares marcado",
     "file": "TC-B2C103-APP-003-android-p08-no-alto-en-azucares-marcado.png"
    },
    {
     "caption": "Android · Paso 9 — chip en filtros aplicados",
     "file": "TC-B2C103-APP-003-android-p09-chip-en-filtros-aplicados.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C103-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-103.spec.ts:149",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro y la sección \"Aplica tus filtros\".\n5. El usuario toca el dropdown \"Sellos de advertencia\".\n6. El sistema expande el dropdown y muestra las opciones con checkbox.\n7. El usuario marca \"No alto en azúcares\".\n8. El sistema recalcula el conteo del botón.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\nPLP: Categorías > Carnes > Vacuno (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "El sello sin productos en la PLP (ej. \"No alto en alcohol\") no aparece en el listado del dropdown; solo se muestran los sellos con productos.",
   "form_factor": "app",
   "id": "TC-B2C103-APP-004",
   "name": "Verificar que un sello sin productos en la PLP no se muestra en el dropdown [App] [Logueado]",
   "observation": "La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "El dropdown lista Sin sellos, No alto en calorías, No alto en azúcares, No alto en sodio y No alto en grasas saturadas; «No alto en alcohol» (sin productos en Vacuno) no aparece.",
   "platform": "Android",
   "preconditions": "- User type: Logueado (vhchirinos+comprador@avatar-global.com)\n- Viewport: App iOS/Android\n- Ubicacion: PLP de Unimarc\n- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos con sellos de advertencia\n- En la PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno hay al menos un sello sin productos (en DEV: \"No alto en alcohol\")",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — plp vacuno con 12 productos",
     "file": "TC-B2C103-APP-004-android-p02-plp-vacuno-con-12-productos.png"
    },
    {
     "caption": "Android · Paso 4 — panel de filtros abierto",
     "file": "TC-B2C103-APP-004-android-p04-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Android · Paso 6 — sellos de advertencia expandido",
     "file": "TC-B2C103-APP-004-android-p06-sellos-de-advertencia-expandido.png"
    },
    {
     "caption": "Android · Paso 7 — opciones sin no alto en alcohol",
     "file": "TC-B2C103-APP-004-android-p07-opciones-sin-no-alto-en-alcohol.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C103-APP-004-android.png"
    }
   ],
   "spec": "tests-app/B2C-103.spec.ts:170",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro y la sección \"Aplica tus filtros\".\n5. El usuario toca el dropdown \"Sellos de advertencia\".\n6. El sistema expande el dropdown y muestra las opciones con checkbox.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\nPLP: Categorías > Carnes > Vacuno (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "El panel se cierra, el listado muestra los productos según la combinación de sellos seleccionados y el conteo del encabezado de la PLP es igual al N que mostraba el botón.",
   "form_factor": "app",
   "id": "TC-B2C103-APP-005",
   "name": "Verificar que \"Mostrar productos\" con varios sellos cierra el panel y el encabezado muestra el mismo conteo que el botón [App] [Logueado]",
   "observation": "En Vacuno los productos «No alto en azúcares» también son «No alto en sodio», así que el conteo no baja al sumar el segundo sello. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "Con «No alto en azúcares» y «No alto en sodio» el badge es 2, hay un chip por sello y el botón dice «Mostrar 2 productos»; al tocarlo el panel se cierra y el encabezado de la PLP muestra 2 productos, los mismos 2 del listado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado (vhchirinos+comprador@avatar-global.com)\n- Viewport: App iOS/Android\n- Ubicacion: PLP de Unimarc\n- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos con sellos de advertencia",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — plp vacuno con 12 productos",
     "file": "TC-B2C103-APP-005-android-p02-plp-vacuno-con-12-productos.png"
    },
    {
     "caption": "Android · Paso 4 — panel de filtros abierto",
     "file": "TC-B2C103-APP-005-android-p04-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Android · Paso 6 — sellos de advertencia expandido",
     "file": "TC-B2C103-APP-005-android-p06-sellos-de-advertencia-expandido.png"
    },
    {
     "caption": "Android · Paso 8 — chips de los dos sellos",
     "file": "TC-B2C103-APP-005-android-p08-chips-de-los-dos-sellos.png"
    },
    {
     "caption": "Android · Paso 8 — no alto en azucares y no alto en sodio marcados",
     "file": "TC-B2C103-APP-005-android-p08-no-alto-en-azucares-y-no-alto-en-sodio-marcados.png"
    },
    {
     "caption": "Android · Paso 10 — listado con 2 productos",
     "file": "TC-B2C103-APP-005-android-p10-listado-con-2-productos.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C103-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-103.spec.ts:183",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro y la sección \"Aplica tus filtros\".\n5. El usuario toca el dropdown \"Sellos de advertencia\".\n6. El sistema expande el dropdown y muestra las opciones con checkbox.\n7. El usuario marca \"No alto en azúcares\" y \"No alto en sodio\".\n8. El sistema marca ambos checkboxes, muestra el badge 2 en el dropdown, agrega un chip por cada sello en \"Filtros aplicados\" y actualiza el conteo del botón \"Mostrar [N] productos\".\n9. El usuario toca \"Mostrar [N] productos\".\n10. El sistema cierra el panel y actualiza el listado.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\nPLP: Categorías > Carnes > Vacuno (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "El checkbox \"No alto en sodio\" queda desmarcado, el badge baja de 2 a 1, el chip \"No alto en sodio\" desaparece (se mantiene \"No alto en azúcares\") y el botón muestra el conteo considerando solo \"No alto en azúcares\".",
   "form_factor": "app",
   "id": "TC-B2C103-APP-006",
   "name": "Verificar que desmarcar un sello actualiza el checkbox, baja el badge, quita su chip y recalcula el conteo [App] [Logueado]",
   "observation": "El conteo con un sello y con los dos es el mismo (2) en Vacuno. La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "Al desmarcar «No alto en sodio» su checkbox queda desmarcado, «No alto en azúcares» sigue marcado, el badge baja de 2 a 1, queda solo el chip «No alto en azúcares» y el botón muestra 2, el conteo de solo «No alto en azúcares».",
   "platform": "Android",
   "preconditions": "- User type: Logueado (vhchirinos+comprador@avatar-global.com)\n- Viewport: App iOS/Android\n- Ubicacion: PLP de Unimarc\n- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos con sellos de advertencia",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — plp vacuno con 12 productos",
     "file": "TC-B2C103-APP-006-android-p02-plp-vacuno-con-12-productos.png"
    },
    {
     "caption": "Android · Paso 4 — panel de filtros abierto",
     "file": "TC-B2C103-APP-006-android-p04-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Android · Paso 6 — sellos de advertencia expandido",
     "file": "TC-B2C103-APP-006-android-p06-sellos-de-advertencia-expandido.png"
    },
    {
     "caption": "Android · Paso 8 — no alto en azucares y no alto en sodio marcados",
     "file": "TC-B2C103-APP-006-android-p08-no-alto-en-azucares-y-no-alto-en-sodio-marcados.png"
    },
    {
     "caption": "Android · Paso 9 — no alto en sodio desmarcado",
     "file": "TC-B2C103-APP-006-android-p09-no-alto-en-sodio-desmarcado.png"
    },
    {
     "caption": "Android · Paso 10 — chips tras desmarcar",
     "file": "TC-B2C103-APP-006-android-p10-chips-tras-desmarcar.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C103-APP-006-android.png"
    }
   ],
   "spec": "tests-app/B2C-103.spec.ts:209",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro y la sección \"Aplica tus filtros\".\n5. El usuario toca el dropdown \"Sellos de advertencia\".\n6. El sistema expande el dropdown y muestra las opciones con checkbox.\n7. El usuario marca \"No alto en azúcares\" y \"No alto en sodio\".\n8. El sistema marca ambos checkboxes, muestra el badge 2 en el dropdown, agrega un chip por cada sello en \"Filtros aplicados\" y actualiza el conteo del botón \"Mostrar [N] productos\".\n9. El usuario desmarca \"No alto en sodio\".\n10. El sistema recalcula el conteo del botón.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\nPLP: Categorías > Carnes > Vacuno (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "Al agregar la marca el conteo del botón disminuye o se mantiene (nunca aumenta); el listado muestra solo productos de la marca seleccionada que cumplen \"No alto en azúcares\" y el conteo del encabezado coincide con el del botón.",
   "form_factor": "app",
   "id": "TC-B2C103-APP-007",
   "name": "Verificar que un sello combinado con otro tipo de filtro aplica lógica AND [App] [Logueado]",
   "observation": "El TC no nombra la marca: se usó Fundo Rio Alegre, que cumple la precondición (tiene productos con y sin el sello; el spec lo comprueba antes de los pasos). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "«No alto en azúcares» deja 2 productos; al agregar la marca Fundo Rio Alegre (4 productos en Vacuno, solo 2 con el sello) el conteo se mantiene en 2; el listado muestra 2 productos, todos de Fundo Rio Alegre, y el encabezado coincide con el botón.",
   "platform": "Android",
   "preconditions": "- User type: Logueado (vhchirinos+comprador@avatar-global.com)\n- Viewport: App iOS/Android\n- Ubicacion: PLP de Unimarc\n- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos con sellos de advertencia\n- En la PLP hay al menos una marca con productos que tienen y que no tienen el sello \"No alto en azúcares\"",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — plp vacuno con 12 productos",
     "file": "TC-B2C103-APP-007-android-p02-plp-vacuno-con-12-productos.png"
    },
    {
     "caption": "Android · Paso 4 — panel de filtros abierto",
     "file": "TC-B2C103-APP-007-android-p04-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Android · Paso 6 — sellos de advertencia expandido",
     "file": "TC-B2C103-APP-007-android-p06-sellos-de-advertencia-expandido.png"
    },
    {
     "caption": "Android · Paso 8 — no alto en azucares marcado 2",
     "file": "TC-B2C103-APP-007-android-p08-no-alto-en-azucares-marcado-2.png"
    },
    {
     "caption": "Android · Paso 10 — no alto en azucares y fundo rio alegre 2",
     "file": "TC-B2C103-APP-007-android-p10-no-alto-en-azucares-y-fundo-rio-alegre-2.png"
    },
    {
     "caption": "Android · Paso 12 — listado con no alto en azucares y fundo rio alegre",
     "file": "TC-B2C103-APP-007-android-p12-listado-con-no-alto-en-azucares-y-fundo-rio-alegre.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C103-APP-007-android.png"
    }
   ],
   "spec": "tests-app/B2C-103.spec.ts:238",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro y la sección \"Aplica tus filtros\".\n5. El usuario toca el dropdown \"Sellos de advertencia\".\n6. El sistema expande el dropdown y muestra las opciones con checkbox.\n7. El usuario marca \"No alto en azúcares\".\n8. El sistema actualiza el conteo del botón.\n9. El usuario expande \"Marca\" y selecciona una marca.\n10. El sistema recalcula el conteo del botón.\n11. El usuario toca \"Mostrar [N] productos\".\n12. El sistema cierra el panel y actualiza el listado.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\nPLP: Categorías > Carnes > Vacuno (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador",
   "executed_at": "2026-11-12",
   "expected": "El chip \"No alto en sodio\" desaparece, su checkbox queda desmarcado en el dropdown, el badge baja de 2 a 1 y el botón muestra el conteo considerando solo \"No alto en azúcares\".",
   "form_factor": "app",
   "id": "TC-B2C103-APP-008",
   "name": "Verificar que quitar un sello desde su chip en \"Filtros aplicados\" desmarca el checkbox y actualiza badge y conteo [App] [Logueado]",
   "observation": "Pasó en el reintento 1; el primer intento falló al ubicar la sección en el panel (desplazamiento del script, no de la app). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 ya instalada en el emulador, a pedido del usuario. iOS queda Pendiente.",
   "observed": "Al tocar la X del chip «No alto en sodio» el chip desaparece (queda «No alto en azúcares»), su checkbox queda desmarcado, el badge baja de 2 a 1 y el botón muestra 2, el conteo de solo «No alto en azúcares».",
   "platform": "Android",
   "preconditions": "- User type: Logueado (vhchirinos+comprador@avatar-global.com)\n- Viewport: App iOS/Android\n- Ubicacion: PLP de Unimarc\n- La PLP https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno tiene productos con sellos de advertencia",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — plp vacuno con 12 productos",
     "file": "TC-B2C103-APP-008-android-p02-plp-vacuno-con-12-productos.png"
    },
    {
     "caption": "Android · Paso 4 — panel de filtros abierto",
     "file": "TC-B2C103-APP-008-android-p04-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Android · Paso 6 — sellos de advertencia expandido",
     "file": "TC-B2C103-APP-008-android-p06-sellos-de-advertencia-expandido.png"
    },
    {
     "caption": "Android · Paso 8 — chips de los dos sellos",
     "file": "TC-B2C103-APP-008-android-p08-chips-de-los-dos-sellos.png"
    },
    {
     "caption": "Android · Paso 10 — chip no alto en sodio quitado",
     "file": "TC-B2C103-APP-008-android-p10-chip-no-alto-en-sodio-quitado.png"
    },
    {
     "caption": "Android · Paso 10 — no alto en sodio desmarcado en el dropdown",
     "file": "TC-B2C103-APP-008-android-p10-no-alto-en-sodio-desmarcado-en-el-dropdown.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C103-APP-008-android.png"
    }
   ],
   "spec": "tests-app/B2C-103.spec.ts:270",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1, inicia sesión con vhchirinos+comprador@avatar-global.com y navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro y la sección \"Aplica tus filtros\".\n5. El usuario toca el dropdown \"Sellos de advertencia\".\n6. El sistema expande el dropdown y muestra las opciones con checkbox.\n7. El usuario marca \"No alto en azúcares\" y \"No alto en sodio\".\n8. El sistema marca ambos checkboxes, muestra el badge 2 en el dropdown, agrega un chip por cada sello en \"Filtros aplicados\" y actualiza el conteo del botón \"Mostrar [N] productos\".\n9. El usuario toca la X del chip \"No alto en sodio\" en \"Filtros aplicados\".\n10. El sistema elimina el chip y recalcula el conteo del botón.",
   "test_data": "App: v1.0.1 (cl.smu.unimarcapp.sfcc.qa, ya instalada)\nCuenta: vhchirinos+comprador@avatar-global.com (login por correo + código OTP)\nPLP: Categorías > Carnes > Vacuno (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno)"
  }
 ]
}
-->
