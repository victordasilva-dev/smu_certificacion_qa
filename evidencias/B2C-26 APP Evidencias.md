# B2C-26 APP - Setear método de entrega con Despacho a domicilio (Android) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-26 APP |
| Última actualización | 2026-10-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.7 (DEV) |
| Dispositivo Android | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-26 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 31 |
| Aprobado | 5 |
| Rechazado | 2 |
| **Total** | **38** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-16 | 38 | TC-B2C26-APP-001, TC-B2C26-APP-002, TC-B2C26-APP-003, TC-B2C26-APP-004, TC-B2C26-APP-005, TC-B2C26-APP-006, TC-B2C26-APP-007, TC-B2C26-APP-008, TC-B2C26-APP-009, TC-B2C26-APP-010, TC-B2C26-APP-011, TC-B2C26-APP-012, TC-B2C26-APP-013, TC-B2C26-APP-014, TC-B2C26-APP-015, TC-B2C26-APP-016, TC-B2C26-APP-017, TC-B2C26-APP-018, TC-B2C26-APP-019, TC-B2C26-APP-020, TC-B2C26-APP-021, TC-B2C26-APP-022, TC-B2C26-APP-023, TC-B2C26-APP-024, TC-B2C26-APP-025, TC-B2C26-APP-026, TC-B2C26-APP-027, TC-B2C26-APP-028, TC-B2C26-APP-029, TC-B2C26-APP-030, TC-B2C26-APP-031, TC-B2C26-APP-032, TC-B2C26-APP-033, TC-B2C26-APP-034, TC-B2C26-APP-035, TC-B2C26-APP-036, TC-B2C26-APP-037, TC-B2C26-APP-038 |

## Detalle por caso de prueba

### TC-B2C26-APP-001 - Verificar que con 3 o más caracteres se sugieren direcciones de Google y una completa lleva al PIN [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 3 o más caracteres de una calle en "Calle, dirección o lugar".
6. El sistema muestra sugerencias de Google en tiempo real, sin tocar "Buscar" en el teclado.
7. El usuario toca una sugerencia con dirección completa (calle y número).
8. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99).

**Resultado esperado**

Se muestran sugerencias en tiempo real y, al tocar una dirección completa, se redirige a la confirmación con PIN (B2C-99).

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: el caso busca o fija 'una calle'/'una dirección de despacho' que su columna Test data no declara (solo {APP_BUILD}); los valores del paso a paso son ejemplos. Acción: declarar el token de la dirección a usar. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-002 - Verificar que con menos de 3 caracteres no se muestran sugerencias y se ofrece agregar manualmente [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado
- {HERRAMIENTA_PROXY_APP} registrando el tráfico de la App

**Data utilizada**

v1.0.7, {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en "Calle, dirección o lugar".
6. El sistema no muestra sugerencias y muestra "¿No aparece tu dirección?" + opción "Agregar".

**Resultado esperado**

No se muestran sugerencias ni se registran requests a Google en {HERRAMIENTA_PROXY_APP} y se muestra "¿No aparece tu dirección?" + opción "Agregar".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data (no hay con qué forzar el error de la API). Acción: definir la herramienta de proxy y su configuración para la app. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-003 - Verificar que una búsqueda sin resultados ofrece "Agregar" y abre el formulario manual vacío [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Duración | 29.2 s |
| Spec | tests-app/B2C-26.spec.ts:67 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe un texto sin coincidencias (ej. "zzqxw 99999") en "Calle, dirección o lugar".
6. El sistema no muestra sugerencias de Google y muestra "¿No aparece tu dirección?" + opción "Agregar" al final de la lista.
7. El usuario toca "Agregar".
8. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160"). Todos los campos están vacíos.

**Resultado esperado**

Se muestra "Agregar" y al tocarla se abre el formulario "Dirección manual" con todos los campos vacíos.

**Resultado obtenido**

Con 'zzqxw 99999' no hay sugerencias de Google y aparecen '¿No aparece tu dirección?' + 'Agregar'; 'Agregar' abre 'Dirección manual' con Región, Comuna, Dirección y Numeración vacíos.

**Observación**

Con 'zzqxw 99999' no hay sugerencias de Google y aparecen '¿No aparece tu dirección?' + 'Agregar'; 'Agregar' abre 'Dirección manual' con Región, Comuna, Dirección y Numeración vacíos. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — home con el store locator sin metodo](<B2C-26 APP Evidencias/TC-B2C26-APP-003-android-p02-home-con-el-store-locator-sin-metodo.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-26 APP Evidencias/TC-B2C26-APP-003-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Android · Paso 6 — sin sugerencias con agregar](<B2C-26 APP Evidencias/TC-B2C26-APP-003-android-p06-sin-sugerencias-con-agregar.png>)

![Android · Paso 8 — formulario direccion manual vacio](<B2C-26 APP Evidencias/TC-B2C26-APP-003-android-p08-formulario-direccion-manual-vacio.png>)

![Estado final del caso](<B2C-26 APP Evidencias/TC-B2C26-APP-003-android.png>)

---

### TC-B2C26-APP-004 - Verificar que la opción "Agregar" aparece al final de la lista también cuando hay resultados [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 3 o más caracteres de una calle existente en "Calle, dirección o lugar".
6. El sistema muestra las sugerencias de Google y, después de la última, "¿No aparece tu dirección?" + opción "Agregar".

**Resultado esperado**

Con resultados, "¿No aparece tu dirección?" + opción "Agregar" aparece como último elemento de la lista.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: el caso busca o fija 'una calle'/'una dirección de despacho' que su columna Test data no declara (solo {APP_BUILD}); los valores del paso a paso son ejemplos. Acción: declarar el token de la dirección a usar. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-005 - Verificar que un error de la API de Google ofrece agregar la dirección manualmente [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de Google Places (maps.googleapis.com)

**Data utilizada**

v1.0.7, {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 3 o más caracteres de una calle en "Calle, dirección o lugar".
6. El sistema no muestra sugerencias de Google y muestra la opción "Agregar dirección manualmente".
7. El usuario toca la opción de agregar manualmente.
8. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").

**Resultado esperado**

Se muestra la opción de ingreso manual y el usuario puede continuar con el formulario "Dirección manual".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data (no hay con qué forzar el error de la API). Acción: definir la herramienta de proxy y su configuración para la app. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-006 - Verificar que un resultado de Google sin calle usa el texto escrito como Calle y continúa al PIN [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe el nombre de una comuna (ej. "Providencia") en "Calle, dirección o lugar".
6. El sistema muestra sugerencias de Google, entre ellas un resultado de tipo comuna.
7. El usuario toca el resultado de tipo comuna.
8. El sistema continúa a la confirmación con PIN (B2C-99) con Calle = texto escrito y Región y Comuna prellenadas desde el resultado.

**Resultado esperado**

En B2C-99 el campo Calle contiene el texto escrito por el usuario y Región y Comuna vienen prellenadas desde Google.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: el caso busca o fija 'una calle'/'una dirección de despacho' que su columna Test data no declara (solo {APP_BUILD}); los valores del paso a paso son ejemplos. Acción: declarar el token de la dirección a usar. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-007 - Verificar que el modal del invitado muestra su dirección activa marcada con el formato definido [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- En la sesión actual se configuró una dirección de despacho como invitado

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal con "Despacho a domicilio" seleccionada y muestra en "Dirección de Despacho" la dirección activa marcada.

**Resultado esperado**

La dirección activa aparece marcada con el formato: nombre, calle, número (si aplica), complemento (si aplica), comuna y región.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: el caso busca o fija 'una calle'/'una dirección de despacho' que su columna Test data no declara (solo {APP_BUILD}); los valores del paso a paso son ejemplos. Acción: declarar el token de la dirección a usar. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-008 - Verificar que el modal del logueado muestra skeleton y luego la dirección activa y las guardadas [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".

**Resultado esperado**

Tras el skeleton se muestra la dirección activa marcada (separada de las guardadas), cada dirección guardada con etiqueta, calle, número, complemento, comuna y región, y las opciones de búsqueda Google y "Activar mi ubicación actual".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-009 - Verificar que un error al cargar los métodos de entrega muestra la pantalla de error con código [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección activa
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de carga de direcciones guardadas

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario anota la dirección activa del header.
4. El usuario toca el Store Locator del header.
5. El sistema reemplaza el modal por la pantalla de error "Ups, algo salió mal" con el mensaje "No logramos cargar la información de los métodos de entrega. Intenta otra vez.", un código de error y los botones "Reintentar" y "Volver al inicio".

**Resultado esperado**

Se muestra la pantalla de error completa con código de referencia y los 2 botones, y la dirección activa anotada no cambia.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Además causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data (no hay con qué forzar el error de la API). Acción: definir la herramienta de proxy y su configuración para la app. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-010 - Verificar que "Reintentar" vuelve a cargar los métodos de entrega [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene direcciones guardadas
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de carga de direcciones guardadas

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra la pantalla de error "Ups, algo salió mal".
5. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en la request de carga de direcciones guardadas y toca "Reintentar".
6. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".

**Resultado esperado**

El modal "Elige tu método de entrega" se carga con la dirección activa y las direcciones guardadas.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Además causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data (no hay con qué forzar el error de la API). Acción: definir la herramienta de proxy y su configuración para la app. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-011 - Verificar que "Volver al inicio" cierra la pantalla de error y regresa al Home [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene direcciones guardadas
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de carga de direcciones guardadas

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario navega a una PLP.
3. El sistema carga la PLP.
4. El usuario toca el Store Locator del header.
5. El sistema muestra la pantalla de error "Ups, algo salió mal".
6. El usuario toca "Volver al inicio".
7. El sistema cierra el modal y redirige al Home de la App.

**Resultado esperado**

El modal se cierra y el usuario queda en el Home de la App.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Además causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data (no hay con qué forzar el error de la API). Acción: definir la herramienta de proxy y su configuración para la app. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-012 - Verificar que aceptar el permiso de ubicación del sistema operativo lleva al PIN [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Duración | 28.4 s |
| Spec | tests-app/B2C-26.spec.ts:83 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado
- La App no tiene permiso de ubicación (nunca otorgado)

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario toca "Activar mi ubicación actual".
6. El sistema operativo muestra el diálogo de permiso de ubicación.
7. El usuario acepta el permiso de ubicación.
8. El sistema obtiene las coordenadas GPS.
9. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99).

**Resultado esperado**

Se redirige a B2C-99 con el PIN en la ubicación actual del dispositivo.

**Resultado obtenido**

'Activar mi ubicación actual' muestra el diálogo de permiso de Android; al aceptarlo ('While using the app') abre 'Detalles de la dirección' (B2C-99) con el mapa y el PIN en la ubicación del emulador.

**Observación**

'Activar mi ubicación actual' muestra el diálogo de permiso de Android; al aceptarlo ('While using the app') abre 'Detalles de la dirección' (B2C-99) con el mapa y el PIN en la ubicación del emulador. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — home con el store locator sin metodo](<B2C-26 APP Evidencias/TC-B2C26-APP-012-android-p02-home-con-el-store-locator-sin-metodo.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-26 APP Evidencias/TC-B2C26-APP-012-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Android · Paso 6 — dialogo de permiso de ubicacion](<B2C-26 APP Evidencias/TC-B2C26-APP-012-android-p06-dialogo-de-permiso-de-ubicacion.png>)

![Android · Paso 9 — detalles de la direccion con el pin en la ubicacion actual](<B2C-26 APP Evidencias/TC-B2C26-APP-012-android-p09-detalles-de-la-direccion-con-el-pin-en-la-ubicacion-actual.png>)

![Estado final del caso](<B2C-26 APP Evidencias/TC-B2C26-APP-012-android.png>)

---

### TC-B2C26-APP-013 - Verificar que denegar el permiso de ubicación del sistema operativo vuelve al modal sin cambios [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Duración | 27.9 s |
| Spec | tests-app/B2C-26.spec.ts:98 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado
- La App no tiene permiso de ubicación (nunca otorgado)

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario toca "Activar mi ubicación actual".
6. El sistema operativo muestra el diálogo de permiso de ubicación.
7. El usuario deniega el permiso de ubicación.
8. El sistema cierra la solicitud de permiso y vuelve a "Elige tu método de entrega".

**Resultado esperado**

El usuario vuelve a "Elige tu método de entrega" sin dirección seteada y sin cambios.

**Resultado obtenido**

Al denegar el permiso ('Don’t allow') vuelve a 'Elige tu método de entrega' sin dirección ('Aún no tienes direcciones guardadas'), sin abrir el PIN, y el header sigue en 'Elige una forma de entrega'.

**Observación**

Al denegar el permiso ('Don’t allow') vuelve a 'Elige tu método de entrega' sin dirección ('Aún no tienes direcciones guardadas'), sin abrir el PIN, y el header sigue en 'Elige una forma de entrega'. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — home con el store locator sin metodo](<B2C-26 APP Evidencias/TC-B2C26-APP-013-android-p02-home-con-el-store-locator-sin-metodo.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-26 APP Evidencias/TC-B2C26-APP-013-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Android · Paso 6 — dialogo de permiso de ubicacion](<B2C-26 APP Evidencias/TC-B2C26-APP-013-android-p06-dialogo-de-permiso-de-ubicacion.png>)

![Android · Paso 8 — de vuelta en el modal sin direccion](<B2C-26 APP Evidencias/TC-B2C26-APP-013-android-p08-de-vuelta-en-el-modal-sin-direccion.png>)

![Estado final del caso](<B2C-26 APP Evidencias/TC-B2C26-APP-013-android.png>)

---

### TC-B2C26-APP-014 - Verificar que una falla al obtener coordenadas muestra el toast de error y permite reintentar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado
- La App tiene concedido el permiso de ubicación
- Ubicación del dispositivo sin señal: simulador iOS con Features > Location = None / emulador Android sin ubicación

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario toca "Activar mi ubicación actual".
6. El sistema muestra el toast "No pudimos obtener tu ubicación actual. Inténtalo nuevamente." y mantiene el modal abierto.
7. El usuario escribe 3 o más caracteres en "Calle, dirección o lugar".
8. El sistema muestra sugerencias de Google.

**Resultado esperado**

Se muestra el toast de error y el usuario puede seguir con otro método (búsqueda de Google) o volver a tocar "Activar mi ubicación actual".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: el caso busca o fija 'una calle'/'una dirección de despacho' que su columna Test data no declara (solo {APP_BUILD}); los valores del paso a paso son ejemplos. Acción: declarar el token de la dirección a usar. (Explorado 2026-10-16: con el permiso concedido y la ubicación del emulador apagada, 'Activar mi ubicación actual' sí muestra 'No pudimos obtener tu ubicación actual. Inténtalo nuevamente.' y el modal sigue abierto; falta el paso 7, que escribe una calle no declarada.) Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

**Evidencia**

![Exploración: toast con la ubicación del emulador apagada](<B2C-26 APP Evidencias/10-gps-off.png>)

---

### TC-B2C26-APP-015 - Verificar que el formulario manual muestra sus campos con el botón Continuar deshabilitado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Duración | 27.9 s |
| Spec | tests-app/B2C-26.spec.ts:115 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").

**Resultado esperado**

Se muestran los 4 campos con sus placeholders y el botón "Continuar con detalle de la dirección" está deshabilitado.

**Resultado obtenido**

'Dirección manual' muestra Región * ('Elegir región'), Comuna * ('Elegir comuna'), Dirección * ('Calle') y 'Numeración (opcional)' ('Ej: 2160'); 'Continuar con detalles de la dirección' deshabilitado. El botón dice 'detalles' (el TC: 'detalle').

**Observación**

'Dirección manual' muestra Región * ('Elegir región'), Comuna * ('Elegir comuna'), Dirección * ('Calle') y 'Numeración (opcional)' ('Ej: 2160'); 'Continuar con detalles de la dirección' deshabilitado. El botón dice 'detalles' (el TC: 'detalle'). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — home con el store locator sin metodo](<B2C-26 APP Evidencias/TC-B2C26-APP-015-android-p02-home-con-el-store-locator-sin-metodo.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-26 APP Evidencias/TC-B2C26-APP-015-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Android · Paso 6 — formulario direccion manual](<B2C-26 APP Evidencias/TC-B2C26-APP-015-android-p06-formulario-direccion-manual.png>)

![Estado final del caso](<B2C-26 APP Evidencias/TC-B2C26-APP-015-android.png>)

---

### TC-B2C26-APP-016 - Verificar que completar los campos obligatorios habilita "Continuar con detalle de la dirección" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Duración | 38.3 s |
| Spec | tests-app/B2C-26.spec.ts:124 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").
7. El usuario elige una Región y una Comuna.
8. El sistema mantiene deshabilitado el botón.
9. El usuario escribe una calle en Dirección.
10. El sistema habilita "Continuar con detalle de la dirección".

**Resultado esperado**

El botón permanece deshabilitado mientras falta Dirección y se habilita al completar Región, Comuna y Dirección.

**Resultado obtenido**

Con Región Metropolitana y Las Condes el botón sigue deshabilitado; al escribir la Dirección se habilita. La fila no declara región, comuna ni calle: se usaron las de {DIRECCION_SIN_NUMERO} de esta planilla, solo para completar el formulario. La hoja rotula la región como 'Metropolitana'.

**Observación**

Con Región Metropolitana y Las Condes el botón sigue deshabilitado; al escribir la Dirección se habilita. La fila no declara región, comuna ni calle: se usaron las de {DIRECCION_SIN_NUMERO} de esta planilla, solo para completar el formulario. La hoja rotula la región como 'Metropolitana'. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — home con el store locator sin metodo](<B2C-26 APP Evidencias/TC-B2C26-APP-016-android-p02-home-con-el-store-locator-sin-metodo.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-26 APP Evidencias/TC-B2C26-APP-016-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Android · Paso 6 — formulario direccion manual](<B2C-26 APP Evidencias/TC-B2C26-APP-016-android-p06-formulario-direccion-manual.png>)

![Android · Paso 8 — region y comuna elegidas boton deshabilitado](<B2C-26 APP Evidencias/TC-B2C26-APP-016-android-p08-region-y-comuna-elegidas-boton-deshabilitado.png>)

![Android · Paso 10 — boton habilitado](<B2C-26 APP Evidencias/TC-B2C26-APP-016-android-p10-boton-habilitado.png>)

![Estado final del caso](<B2C-26 APP Evidencias/TC-B2C26-APP-016-android.png>)

---

### TC-B2C26-APP-017 - Verificar que los dropdown de Región y Comuna muestran los catálogos de Chile [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Duración | 46.1 s |
| Spec | tests-app/B2C-26.spec.ts:143 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").
7. El usuario despliega Región.
8. El sistema lista las regiones de Chile.
9. El usuario elige "Región Metropolitana" y despliega Comuna.
10. El sistema lista solo las comunas de la Región Metropolitana.

**Resultado esperado**

Región muestra las regiones de Chile y Comuna solo las comunas de la región elegida (no es texto libre).

**Resultado obtenido**

Región lista las 16 regiones de Chile (la RM como 'Metropolitana') y Comuna es un catálogo (no texto libre), pero la lista de comunas de la Región Metropolitana (39) incluye Machalí, que es de O'Higgins. Mismo defecto del bug B2C-1164 (DESCARTADO): queda Rechazado sin bug nuevo. 3 de 3 intentos. tests-app/B2C-26.spec.ts:158.

**Observación**

Región lista las 16 regiones de Chile (la RM como 'Metropolitana') y Comuna es un catálogo (no texto libre), pero la lista de comunas de la Región Metropolitana (39) incluye Machalí, que es de O'Higgins. Mismo defecto del bug B2C-1164 (DESCARTADO): queda Rechazado sin bug nuevo. 3 de 3 intentos. tests-app/B2C-26.spec.ts:158. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — home con el store locator sin metodo](<B2C-26 APP Evidencias/TC-B2C26-APP-017-android-p02-home-con-el-store-locator-sin-metodo.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-26 APP Evidencias/TC-B2C26-APP-017-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Android · Paso 6 — formulario direccion manual](<B2C-26 APP Evidencias/TC-B2C26-APP-017-android-p06-formulario-direccion-manual.png>)

![Android · Paso 8 — lista de regiones](<B2C-26 APP Evidencias/TC-B2C26-APP-017-android-p08-lista-de-regiones.png>)

![Android · Paso 10 — lista de comunas de la region metropolitana](<B2C-26 APP Evidencias/TC-B2C26-APP-017-android-p10-lista-de-comunas-de-la-region-metropolitana.png>)

![Estado al fallar la aserción](<B2C-26 APP Evidencias/TC-B2C26-APP-017-android.png>)

---

### TC-B2C26-APP-018 - Verificar que continuar desde el formulario manual lleva al PIN con la dirección precargada [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").
7. El usuario completa Región, Comuna, Dirección y Numeración y toca "Continuar con detalle de la dirección".
8. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).

**Resultado esperado**

En B2C-99 se muestran precargadas Región, Comuna, Calle y Numeración y el PIN queda ubicado sobre esa dirección.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: el caso completa Región, Comuna, Dirección y Numeración de una dirección que su fila no declara (solo {APP_BUILD}). Acción: declarar el token de la dirección a ingresar. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-019 - Verificar que elegir una dirección guardada la setea sin PIN ni OTP y mantiene la pantalla [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PLP
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas con cobertura y horarios
- El carro está vacío

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El usuario navega a una PLP.
3. El sistema carga la PLP.
4. El usuario toca el Store Locator del header.
5. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
6. El usuario toca una dirección guardada distinta de la activa.
7. El sistema muestra un loader, valida cobertura y SLAs y cierra el modal.

**Resultado esperado**

El header muestra la nueva dirección, el usuario sigue en la PLP y no se pidió PIN ni OTP.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-020 - Verificar que un error de API al cambiar de dirección muestra toast y mantiene la dirección anterior [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas
- Después de abrir el modal, {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de cambio de dirección activa

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario anota la dirección activa del header.
4. El usuario toca el Store Locator del header.
5. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
6. El usuario toca una dirección guardada distinta de la activa.
7. El sistema muestra el modal con la lista de direcciones y el toast "Lo sentimos, no pudimos cambiar tu dirección. Inténtalo nuevamente."

**Resultado esperado**

Se muestra el toast de error, el modal vuelve a la lista y la dirección activa sigue siendo la anotada.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Además causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data (no hay con qué forzar el error de la API). Acción: definir la herramienta de proxy y su configuración para la app. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-021 - Verificar que elegir una dirección guardada sin cobertura deriva al flujo Sin cobertura [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección guardada fuera de la zona de reparto actual

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
5. El usuario toca la dirección guardada sin cobertura.
6. El sistema muestra un loader y deriva al flujo Sin cobertura (B2C-123).

**Resultado esperado**

Se inicia el flujo Sin cobertura definido en B2C-123.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-022 - Verificar que una dirección guardada sin horarios y sin carrito deriva a Sin horarios disponibles [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección guardada con cobertura y sin ventanas horarias
- El carro está vacío

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
5. El usuario toca la dirección guardada sin horarios disponibles.
6. El sistema muestra un loader y deriva al flujo Sin horarios disponibles (B2C-127).

**Resultado esperado**

Se inicia el flujo Sin horarios disponibles definido en B2C-127.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-023 - Verificar que elegir una dirección guardada con productos en el carro inicia el flujo de B2C-122 [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas con cobertura
- El carro tiene al menos un producto

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
5. El usuario toca una dirección guardada distinta de la activa.
6. El sistema muestra un loader y inicia el flujo de B2C-122.

**Resultado esperado**

Se inicia el flujo definido en B2C-122 (vía B2C-144).

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-024 - Verificar que el menú ⋮ aparece solo en las direcciones guardadas no activas [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".

**Resultado esperado**

Cada dirección guardada no activa muestra el menú ⋮ y la dirección activa no lo muestra.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-025 - Verificar que "No gracias" en la confirmación de eliminar mantiene la dirección [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
5. El usuario toca ⋮ en una dirección no activa y luego "Eliminar dirección".
6. El sistema muestra el modal "¿Quieres eliminar tu dirección?" con "Aceptar" y "No gracias".
7. El usuario toca "No gracias".
8. El sistema cierra el modal de confirmación.

**Resultado esperado**

El modal de confirmación se cierra y la dirección sigue en la lista.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-026 - Verificar que "Aceptar" elimina la dirección y muestra el toast de éxito [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
5. El usuario toca ⋮ en una dirección no activa y luego "Eliminar dirección".
6. El sistema muestra el modal "¿Quieres eliminar tu dirección?".
7. El usuario toca "Aceptar".
8. El sistema muestra un loader, quita la dirección de la lista, cierra el modal de confirmación y muestra el toast "Tu dirección fue eliminada con éxito.".

**Resultado esperado**

La dirección desaparece de la lista y el toast de éxito se cierra solo a los 4 segundos.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-027 - Verificar que un error al eliminar muestra el toast de error y la dirección permanece [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa
- Después de abrir el modal, {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de eliminación de dirección

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
5. El usuario toca ⋮ en una dirección no activa y luego "Eliminar dirección".
6. El sistema muestra el modal "¿Quieres eliminar tu dirección?".
7. El usuario toca "Aceptar".
8. El sistema muestra un loader y luego el toast "Lo sentimos, no pudimos eliminar tu dirección. Inténtalo nuevamente.".

**Resultado esperado**

Se muestra el toast de error (se cierra solo con la X) y la dirección sigue en la lista.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Además causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data (no hay con qué forzar el error de la API). Acción: definir la herramienta de proxy y su configuración para la app. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-028 - Verificar que el header del logueado sin dirección en sesión muestra la de su última compra [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos una compra completada
- Sin dirección activa en la sesión (App recién instalada o con datos borrados)

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra en el Store Locator del header la dirección de la última compra completada.

**Resultado esperado**

El header muestra ícono de despacho + dirección de la última compra + "Desde" + fecha + horario + label de precio o condición de despacho.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-029 - Verificar que el header del logueado sin historial muestra la dirección seteada en la sesión [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com no tiene historial de compras

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario configura una dirección de despacho desde el Store Locator.
4. El sistema muestra la dirección seteada en el Store Locator del header.
5. El usuario toca el Store Locator del header.
6. El sistema abre el modal con la dirección seteada marcada como activa.

**Resultado esperado**

El header muestra la dirección seteada en la sesión y el modal la muestra como activa.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-030 - Verificar que el header del invitado muestra la dirección de la sesión con el formato definido [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario configura una dirección de despacho desde el Store Locator.
4. El sistema muestra la dirección en el Store Locator del header.

**Resultado esperado**

El header muestra ícono de despacho + calle + numeración (si aplica) + comuna + ícono de edición.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: el caso busca o fija 'una calle'/'una dirección de despacho' que su columna Test data no declara (solo {APP_BUILD}); los valores del paso a paso son ejemplos. Acción: declarar el token de la dirección a usar. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-031 - Verificar que la dirección del invitado no persiste al cerrar y volver a abrir la App [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

v1.0.7

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario configura una dirección de despacho desde el Store Locator.
4. El sistema muestra la dirección en el header.
5. El usuario cierra la App por completo (la quita de las apps recientes) y la vuelve a abrir.
6. El sistema carga el Home con "Elige una forma de entrega" en el Store Locator.

**Resultado esperado**

Tras cerrar y reabrir la App, el header vuelve a "Elige una forma de entrega" y la dirección anterior no se muestra.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: el caso busca o fija 'una calle'/'una dirección de despacho' que su columna Test data no declara (solo {APP_BUILD}); los valores del paso a paso son ejemplos. Acción: declarar el token de la dirección a usar. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-032 - Verificar que iniciar sesión con dirección de invitado activa inicia el flujo de asociación [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario configura una dirección de despacho desde el Store Locator.
4. El sistema muestra la dirección en el header.
5. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
6. El sistema autentica al usuario e inicia el flujo de asociación de dirección (B2C-124).

**Resultado esperado**

Se inicia el flujo de asociación de dirección definido en B2C-124.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-033 - Verificar que la dirección activa se mantiene en el header al navegar por la App [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección activa

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home con la dirección activa en el Store Locator.
3. El usuario navega a una PLP, abre una PDP, busca un producto y abre el Carro.
4. El sistema muestra la misma dirección activa en el Store Locator en cada pantalla, sin solicitar reconfigurarla.

**Resultado esperado**

En Home, PLP, PDP, resultados de búsqueda y Carro el header muestra la misma dirección activa y no se pide volver a configurarla.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-034 - Verificar que al reiniciar sesión se recupera la dirección de la última compra o la última seteada [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección activa

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario anota la dirección activa del header.
4. El usuario cierra sesión y vuelve a iniciar sesión con la cuenta vhchirinos+comprador@avatar-global.com.
5. El sistema autentica al usuario y muestra una dirección en el Store Locator del header.

**Resultado esperado**

El header muestra la dirección de la última compra completada o, si no hay historial, la última dirección seteada.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-035 - Verificar que el formulario manual acepta los caracteres especiales +, - y / en la dirección [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

v1.0.7, Pasaje Los Aromos 3-A / Lote 5+

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").
7. El usuario selecciona una Región y una Comuna con cobertura, escribe Pasaje Los Aromos 3-A / Lote 5+ en Dirección y 120 en Numeración.
8. El sistema mantiene el texto tal como se escribió, sin mensaje de error, y habilita "Continuar con detalle de la dirección".
9. El usuario toca "Continuar con detalle de la dirección".
10. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).

**Resultado esperado**

El campo Dirección acepta "+", "-" y "/" sin error y sin eliminar caracteres, y en B2C-99 la calle se muestra precargada como "Pasaje Los Aromos 3-A / Lote 5+".

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: el título es [Logueado] y la fila no declara ninguna cuenta (Test data solo trae {APP_BUILD} y {DIRECCION_CARACTERES_ESPECIALES}). Acción: declarar el token de la cuenta (con RUT, por el login de la v1.0.7). Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-036 - Verificar que una dirección manual sin numeración se visualiza con "S/N" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |
| Duración | 59.6 s |
| Spec | tests-app/B2C-26.spec.ts:162 |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado
- La dirección a ingresar tiene cobertura y horarios disponibles

**Data utilizada**

v1.0.7, Metropolitana, Las Condes, Las Condes

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").
7. El usuario completa Región, Comuna y Dirección con Metropolitana, Las Condes, Las Condes, deja Numeración vacío y toca "Continuar con detalle de la dirección".
8. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).
9. El usuario confirma la dirección en B2C-99 y completa el flujo hasta dejarla seteada.
10. El sistema cierra el flujo y muestra la dirección en el Store Locator del header.
11. El usuario toca el Store Locator del header.
12. El sistema abre el modal con la dirección activa marcada en "Dirección de despacho".

**Resultado esperado**

La dirección activa se muestra con "S/N" en el lugar de la numeración (calle, S/N, comuna y región) en el modal y en el Store Locator del header.

**Resultado obtenido**

Esperado: la dirección activa con 'S/N' en lugar de la numeración, en el modal y en el header. Obtenido: Región Metropolitana / Las Condes / Dirección 'Las Condes' sin numeración → header 'Las Condes, Desde: Hoy 16/10, 15:00 hrs., $2.990' y modal 'Las Condes, Las Condes, Metropolitana', sin 'S/N' (3 de 3 intentos). {DIRECCION_SIN_NUMERO} = 'Metropolitana, Las Condes, Las Condes' se tomó como Región, Comuna y Dirección. tests-app/B2C-26.spec.ts:185. Bug: B2C-1224.

**Observación**

Esperado: la dirección activa con 'S/N' en lugar de la numeración, en el modal y en el header. Obtenido: Región Metropolitana / Las Condes / Dirección 'Las Condes' sin numeración → header 'Las Condes, Desde: Hoy 16/10, 15:00 hrs., $2.990' y modal 'Las Condes, Las Condes, Metropolitana', sin 'S/N' (3 de 3 intentos). {DIRECCION_SIN_NUMERO} = 'Metropolitana, Las Condes, Las Condes' se tomó como Región, Comuna y Dirección. tests-app/B2C-26.spec.ts:185. Bug: B2C-1224. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — home con el store locator sin metodo](<B2C-26 APP Evidencias/TC-B2C26-APP-036-android-p02-home-con-el-store-locator-sin-metodo.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-26 APP Evidencias/TC-B2C26-APP-036-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Android · Paso 6 — formulario direccion manual](<B2C-26 APP Evidencias/TC-B2C26-APP-036-android-p06-formulario-direccion-manual.png>)

![Android · Paso 7 — region comuna y direccion sin numeracion](<B2C-26 APP Evidencias/TC-B2C26-APP-036-android-p07-region-comuna-y-direccion-sin-numeracion.png>)

![Android · Paso 8 — detalles de la direccion](<B2C-26 APP Evidencias/TC-B2C26-APP-036-android-p08-detalles-de-la-direccion.png>)

![Android · Paso 10 — store locator del header con la direccion](<B2C-26 APP Evidencias/TC-B2C26-APP-036-android-p10-store-locator-del-header-con-la-direccion.png>)

![Android · Paso 12 — modal con la direccion activa](<B2C-26 APP Evidencias/TC-B2C26-APP-036-android-p12-modal-con-la-direccion-activa.png>)

![Estado al fallar la aserción](<B2C-26 APP Evidencias/TC-B2C26-APP-036-android.png>)

---

### TC-B2C26-APP-037 - Verificar que una dirección sin numeración se guarda en el perfil con "S/N" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- La dirección a ingresar tiene cobertura y horarios disponibles
- El carro está vacío

**Data utilizada**

v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, Metropolitana, Las Condes, Las Condes

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa, las direcciones guardadas y el buscador "Calle, dirección o lugar".
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").
7. El usuario completa Región, Comuna y Dirección con Metropolitana, Las Condes, Las Condes, deja Numeración vacío y toca "Continuar con detalle de la dirección".
8. El usuario confirma la dirección en B2C-99 y completa el flujo (incluido el OTP de B2C-125 si se solicita) hasta dejarla seteada.
9. El usuario toca el Store Locator del header y revisa la dirección nueva en la lista.
10. El usuario cierra sesión, vuelve a iniciar sesión con vhchirinos+comprador@avatar-global.com y abre nuevamente el Store Locator.

**Resultado esperado**

La dirección nueva queda guardada en el perfil y se muestra con "S/N" como numeración en el modal, antes y después de volver a iniciar sesión.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

---

### TC-B2C26-APP-038 - Verificar que al buscar un Plus Code de Google la dirección se agrega sin problemas [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

v1.0.7, HG74+86G Las Condes, Chile

**Pasos ejecutados**

1. El usuario abre la App v1.0.7.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe HG74+86G Las Condes, Chile en "Calle, dirección o lugar".
6. El sistema muestra la sugerencia de Google correspondiente al Plus Code (Las Condes).
7. El usuario toca la sugerencia.
8. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99) con la dirección precargada.
9. El usuario confirma la dirección.
10. El sistema cierra el modal y actualiza el Store Locator del header.

**Resultado esperado**

Google muestra la sugerencia del Plus Code sin errores; al tocarla se redirige a la confirmación con PIN (B2C-99) con Región Metropolitana y Comuna Las Condes precargadas y el PIN sobre la ubicación del Plus Code; al confirmar, el modal se cierra y el Store Locator del header muestra la dirección seteada, sin mensajes de error.

**Resultado obtenido**

No se ejecutó.

**Observación**

Causa: {DIRECCION_PLUS_CODE} = 'HG74+86G Las Condes, Chile' no tiene cobertura en DEV: la sugerencia sí aparece y la confirmación con PIN trae 'Las Condes, Región Metropolitana', pero al confirmar se abre 'Aún no llegamos a esta dirección' (2026-10-16), no se setea la dirección sin errores. Acción: declarar un Plus Code dentro de la zona de cobertura. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.

**Evidencia**

![Exploración: el Plus Code abre 'Aún no llegamos a esta dirección'](<B2C-26 APP Evidencias/08-tras-pluscode.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk"
  },
  "environment": "App Unimarc v1.0.7 (DEV)",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-26 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-26 APP Test Cases.xlsx",
  "title": "B2C-26 APP - Setear método de entrega con Despacho a domicilio (Android) - Evidencias QA",
  "updated_at": "2026-10-16"
 },
 "history": {
  "2026-10-16": [
   "TC-B2C26-APP-001",
   "TC-B2C26-APP-002",
   "TC-B2C26-APP-003",
   "TC-B2C26-APP-004",
   "TC-B2C26-APP-005",
   "TC-B2C26-APP-006",
   "TC-B2C26-APP-007",
   "TC-B2C26-APP-008",
   "TC-B2C26-APP-009",
   "TC-B2C26-APP-010",
   "TC-B2C26-APP-011",
   "TC-B2C26-APP-012",
   "TC-B2C26-APP-013",
   "TC-B2C26-APP-014",
   "TC-B2C26-APP-015",
   "TC-B2C26-APP-016",
   "TC-B2C26-APP-017",
   "TC-B2C26-APP-018",
   "TC-B2C26-APP-019",
   "TC-B2C26-APP-020",
   "TC-B2C26-APP-021",
   "TC-B2C26-APP-022",
   "TC-B2C26-APP-023",
   "TC-B2C26-APP-024",
   "TC-B2C26-APP-025",
   "TC-B2C26-APP-026",
   "TC-B2C26-APP-027",
   "TC-B2C26-APP-028",
   "TC-B2C26-APP-029",
   "TC-B2C26-APP-030",
   "TC-B2C26-APP-031",
   "TC-B2C26-APP-032",
   "TC-B2C26-APP-033",
   "TC-B2C26-APP-034",
   "TC-B2C26-APP-035",
   "TC-B2C26-APP-036",
   "TC-B2C26-APP-037",
   "TC-B2C26-APP-038"
  ]
 },
 "results": [
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestran sugerencias en tiempo real y, al tocar una dirección completa, se redirige a la confirmación con PIN (B2C-99).",
   "form_factor": "app",
   "id": "TC-B2C26-APP-001",
   "name": "Verificar que con 3 o más caracteres se sugieren direcciones de Google y una completa lleva al PIN [App] [Guest]",
   "observation": "Causa: el caso busca o fija 'una calle'/'una dirección de despacho' que su columna Test data no declara (solo {APP_BUILD}); los valores del paso a paso son ejemplos. Acción: declarar el token de la dirección a usar. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 3 o más caracteres de una calle en \"Calle, dirección o lugar\".\n6. El sistema muestra sugerencias de Google en tiempo real, sin tocar \"Buscar\" en el teclado.\n7. El usuario toca una sugerencia con dirección completa (calle y número).\n8. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99).",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "No se muestran sugerencias ni se registran requests a Google en {HERRAMIENTA_PROXY_APP} y se muestra \"¿No aparece tu dirección?\" + opción \"Agregar\".",
   "form_factor": "app",
   "id": "TC-B2C26-APP-002",
   "name": "Verificar que con menos de 3 caracteres no se muestran sugerencias y se ofrece agregar manualmente [App] [Guest]",
   "observation": "Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data (no hay con qué forzar el error de la API). Acción: definir la herramienta de proxy y su configuración para la app. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado\n- {HERRAMIENTA_PROXY_APP} registrando el tráfico de la App",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en \"Calle, dirección o lugar\".\n6. El sistema no muestra sugerencias y muestra \"¿No aparece tu dirección?\" + opción \"Agregar\".",
   "test_data": "v1.0.7, {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "duration_s": 29.2,
   "executed_at": "2026-10-16",
   "expected": "Se muestra \"Agregar\" y al tocarla se abre el formulario \"Dirección manual\" con todos los campos vacíos.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-003",
   "name": "Verificar que una búsqueda sin resultados ofrece \"Agregar\" y abre el formulario manual vacío [App] [Guest]",
   "observation": "Con 'zzqxw 99999' no hay sugerencias de Google y aparecen '¿No aparece tu dirección?' + 'Agregar'; 'Agregar' abre 'Dirección manual' con Región, Comuna, Dirección y Numeración vacíos. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "Con 'zzqxw 99999' no hay sugerencias de Google y aparecen '¿No aparece tu dirección?' + 'Agregar'; 'Agregar' abre 'Dirección manual' con Región, Comuna, Dirección y Numeración vacíos.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con el store locator sin metodo",
     "file": "TC-B2C26-APP-003-android-p02-home-con-el-store-locator-sin-metodo.png"
    },
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C26-APP-003-android-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Android · Paso 6 — sin sugerencias con agregar",
     "file": "TC-B2C26-APP-003-android-p06-sin-sugerencias-con-agregar.png"
    },
    {
     "caption": "Android · Paso 8 — formulario direccion manual vacio",
     "file": "TC-B2C26-APP-003-android-p08-formulario-direccion-manual-vacio.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C26-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-26.spec.ts:67",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe un texto sin coincidencias (ej. \"zzqxw 99999\") en \"Calle, dirección o lugar\".\n6. El sistema no muestra sugerencias de Google y muestra \"¿No aparece tu dirección?\" + opción \"Agregar\" al final de la lista.\n7. El usuario toca \"Agregar\".\n8. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\"). Todos los campos están vacíos.",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Con resultados, \"¿No aparece tu dirección?\" + opción \"Agregar\" aparece como último elemento de la lista.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-004",
   "name": "Verificar que la opción \"Agregar\" aparece al final de la lista también cuando hay resultados [App] [Guest]",
   "observation": "Causa: el caso busca o fija 'una calle'/'una dirección de despacho' que su columna Test data no declara (solo {APP_BUILD}); los valores del paso a paso son ejemplos. Acción: declarar el token de la dirección a usar. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 3 o más caracteres de una calle existente en \"Calle, dirección o lugar\".\n6. El sistema muestra las sugerencias de Google y, después de la última, \"¿No aparece tu dirección?\" + opción \"Agregar\".",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra la opción de ingreso manual y el usuario puede continuar con el formulario \"Dirección manual\".",
   "form_factor": "app",
   "id": "TC-B2C26-APP-005",
   "name": "Verificar que un error de la API de Google ofrece agregar la dirección manualmente [App] [Guest]",
   "observation": "Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data (no hay con qué forzar el error de la API). Acción: definir la herramienta de proxy y su configuración para la app. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de Google Places (maps.googleapis.com)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 3 o más caracteres de una calle en \"Calle, dirección o lugar\".\n6. El sistema no muestra sugerencias de Google y muestra la opción \"Agregar dirección manualmente\".\n7. El usuario toca la opción de agregar manualmente.\n8. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").",
   "test_data": "v1.0.7, {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "En B2C-99 el campo Calle contiene el texto escrito por el usuario y Región y Comuna vienen prellenadas desde Google.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-006",
   "name": "Verificar que un resultado de Google sin calle usa el texto escrito como Calle y continúa al PIN [App] [Guest]",
   "observation": "Causa: el caso busca o fija 'una calle'/'una dirección de despacho' que su columna Test data no declara (solo {APP_BUILD}); los valores del paso a paso son ejemplos. Acción: declarar el token de la dirección a usar. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe el nombre de una comuna (ej. \"Providencia\") en \"Calle, dirección o lugar\".\n6. El sistema muestra sugerencias de Google, entre ellas un resultado de tipo comuna.\n7. El usuario toca el resultado de tipo comuna.\n8. El sistema continúa a la confirmación con PIN (B2C-99) con Calle = texto escrito y Región y Comuna prellenadas desde el resultado.",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La dirección activa aparece marcada con el formato: nombre, calle, número (si aplica), complemento (si aplica), comuna y región.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-007",
   "name": "Verificar que el modal del invitado muestra su dirección activa marcada con el formato definido [App] [Guest]",
   "observation": "Causa: el caso busca o fija 'una calle'/'una dirección de despacho' que su columna Test data no declara (solo {APP_BUILD}); los valores del paso a paso son ejemplos. Acción: declarar el token de la dirección a usar. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- En la sesión actual se configuró una dirección de despacho como invitado",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal con \"Despacho a domicilio\" seleccionada y muestra en \"Dirección de Despacho\" la dirección activa marcada.",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Tras el skeleton se muestra la dirección activa marcada (separada de las guardadas), cada dirección guardada con etiqueta, calle, número, complemento, comuna y región, y las opciones de búsqueda Google y \"Activar mi ubicación actual\".",
   "form_factor": "app",
   "id": "TC-B2C26-APP-008",
   "name": "Verificar que el modal del logueado muestra skeleton y luego la dirección activa y las guardadas [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra la pantalla de error completa con código de referencia y los 2 botones, y la dirección activa anotada no cambia.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-009",
   "name": "Verificar que un error al cargar los métodos de entrega muestra la pantalla de error con código [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Además causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data (no hay con qué forzar el error de la API). Acción: definir la herramienta de proxy y su configuración para la app. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección activa\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de carga de direcciones guardadas",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario anota la dirección activa del header.\n4. El usuario toca el Store Locator del header.\n5. El sistema reemplaza el modal por la pantalla de error \"Ups, algo salió mal\" con el mensaje \"No logramos cargar la información de los métodos de entrega. Intenta otra vez.\", un código de error y los botones \"Reintentar\" y \"Volver al inicio\".",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El modal \"Elige tu método de entrega\" se carga con la dirección activa y las direcciones guardadas.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-010",
   "name": "Verificar que \"Reintentar\" vuelve a cargar los métodos de entrega [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Además causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data (no hay con qué forzar el error de la API). Acción: definir la herramienta de proxy y su configuración para la app. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene direcciones guardadas\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de carga de direcciones guardadas",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra la pantalla de error \"Ups, algo salió mal\".\n5. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en la request de carga de direcciones guardadas y toca \"Reintentar\".\n6. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El modal se cierra y el usuario queda en el Home de la App.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-011",
   "name": "Verificar que \"Volver al inicio\" cierra la pantalla de error y regresa al Home [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Además causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data (no hay con qué forzar el error de la API). Acción: definir la herramienta de proxy y su configuración para la app. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene direcciones guardadas\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de carga de direcciones guardadas",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario navega a una PLP.\n3. El sistema carga la PLP.\n4. El usuario toca el Store Locator del header.\n5. El sistema muestra la pantalla de error \"Ups, algo salió mal\".\n6. El usuario toca \"Volver al inicio\".\n7. El sistema cierra el modal y redirige al Home de la App.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "duration_s": 28.4,
   "executed_at": "2026-10-16",
   "expected": "Se redirige a B2C-99 con el PIN en la ubicación actual del dispositivo.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-012",
   "name": "Verificar que aceptar el permiso de ubicación del sistema operativo lleva al PIN [App] [Guest]",
   "observation": "'Activar mi ubicación actual' muestra el diálogo de permiso de Android; al aceptarlo ('While using the app') abre 'Detalles de la dirección' (B2C-99) con el mapa y el PIN en la ubicación del emulador. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "'Activar mi ubicación actual' muestra el diálogo de permiso de Android; al aceptarlo ('While using the app') abre 'Detalles de la dirección' (B2C-99) con el mapa y el PIN en la ubicación del emulador.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado\n- La App no tiene permiso de ubicación (nunca otorgado)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con el store locator sin metodo",
     "file": "TC-B2C26-APP-012-android-p02-home-con-el-store-locator-sin-metodo.png"
    },
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C26-APP-012-android-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Android · Paso 6 — dialogo de permiso de ubicacion",
     "file": "TC-B2C26-APP-012-android-p06-dialogo-de-permiso-de-ubicacion.png"
    },
    {
     "caption": "Android · Paso 9 — detalles de la direccion con el pin en la ubicacion actual",
     "file": "TC-B2C26-APP-012-android-p09-detalles-de-la-direccion-con-el-pin-en-la-ubicacion-actual.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C26-APP-012-android.png"
    }
   ],
   "spec": "tests-app/B2C-26.spec.ts:83",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario toca \"Activar mi ubicación actual\".\n6. El sistema operativo muestra el diálogo de permiso de ubicación.\n7. El usuario acepta el permiso de ubicación.\n8. El sistema obtiene las coordenadas GPS.\n9. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99).",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "duration_s": 27.9,
   "executed_at": "2026-10-16",
   "expected": "El usuario vuelve a \"Elige tu método de entrega\" sin dirección seteada y sin cambios.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-013",
   "name": "Verificar que denegar el permiso de ubicación del sistema operativo vuelve al modal sin cambios [App] [Guest]",
   "observation": "Al denegar el permiso ('Don’t allow') vuelve a 'Elige tu método de entrega' sin dirección ('Aún no tienes direcciones guardadas'), sin abrir el PIN, y el header sigue en 'Elige una forma de entrega'. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "Al denegar el permiso ('Don’t allow') vuelve a 'Elige tu método de entrega' sin dirección ('Aún no tienes direcciones guardadas'), sin abrir el PIN, y el header sigue en 'Elige una forma de entrega'.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado\n- La App no tiene permiso de ubicación (nunca otorgado)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con el store locator sin metodo",
     "file": "TC-B2C26-APP-013-android-p02-home-con-el-store-locator-sin-metodo.png"
    },
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C26-APP-013-android-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Android · Paso 6 — dialogo de permiso de ubicacion",
     "file": "TC-B2C26-APP-013-android-p06-dialogo-de-permiso-de-ubicacion.png"
    },
    {
     "caption": "Android · Paso 8 — de vuelta en el modal sin direccion",
     "file": "TC-B2C26-APP-013-android-p08-de-vuelta-en-el-modal-sin-direccion.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C26-APP-013-android.png"
    }
   ],
   "spec": "tests-app/B2C-26.spec.ts:98",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario toca \"Activar mi ubicación actual\".\n6. El sistema operativo muestra el diálogo de permiso de ubicación.\n7. El usuario deniega el permiso de ubicación.\n8. El sistema cierra la solicitud de permiso y vuelve a \"Elige tu método de entrega\".",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra el toast de error y el usuario puede seguir con otro método (búsqueda de Google) o volver a tocar \"Activar mi ubicación actual\".",
   "form_factor": "app",
   "id": "TC-B2C26-APP-014",
   "name": "Verificar que una falla al obtener coordenadas muestra el toast de error y permite reintentar [App] [Guest]",
   "observation": "Causa: el caso busca o fija 'una calle'/'una dirección de despacho' que su columna Test data no declara (solo {APP_BUILD}); los valores del paso a paso son ejemplos. Acción: declarar el token de la dirección a usar. (Explorado 2026-10-16: con el permiso concedido y la ubicación del emulador apagada, 'Activar mi ubicación actual' sí muestra 'No pudimos obtener tu ubicación actual. Inténtalo nuevamente.' y el modal sigue abierto; falta el paso 7, que escribe una calle no declarada.) Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado\n- La App tiene concedido el permiso de ubicación\n- Ubicación del dispositivo sin señal: simulador iOS con Features > Location = None / emulador Android sin ubicación",
   "screenshots": [
    {
     "caption": "Exploración: toast con la ubicación del emulador apagada",
     "file": "10-gps-off.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario toca \"Activar mi ubicación actual\".\n6. El sistema muestra el toast \"No pudimos obtener tu ubicación actual. Inténtalo nuevamente.\" y mantiene el modal abierto.\n7. El usuario escribe 3 o más caracteres en \"Calle, dirección o lugar\".\n8. El sistema muestra sugerencias de Google.",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "duration_s": 27.9,
   "executed_at": "2026-10-16",
   "expected": "Se muestran los 4 campos con sus placeholders y el botón \"Continuar con detalle de la dirección\" está deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-015",
   "name": "Verificar que el formulario manual muestra sus campos con el botón Continuar deshabilitado [App] [Guest]",
   "observation": "'Dirección manual' muestra Región * ('Elegir región'), Comuna * ('Elegir comuna'), Dirección * ('Calle') y 'Numeración (opcional)' ('Ej: 2160'); 'Continuar con detalles de la dirección' deshabilitado. El botón dice 'detalles' (el TC: 'detalle'). La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "'Dirección manual' muestra Región * ('Elegir región'), Comuna * ('Elegir comuna'), Dirección * ('Calle') y 'Numeración (opcional)' ('Ej: 2160'); 'Continuar con detalles de la dirección' deshabilitado. El botón dice 'detalles' (el TC: 'detalle').",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con el store locator sin metodo",
     "file": "TC-B2C26-APP-015-android-p02-home-con-el-store-locator-sin-metodo.png"
    },
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C26-APP-015-android-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Android · Paso 6 — formulario direccion manual",
     "file": "TC-B2C26-APP-015-android-p06-formulario-direccion-manual.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C26-APP-015-android.png"
    }
   ],
   "spec": "tests-app/B2C-26.spec.ts:115",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "duration_s": 38.3,
   "executed_at": "2026-10-16",
   "expected": "El botón permanece deshabilitado mientras falta Dirección y se habilita al completar Región, Comuna y Dirección.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-016",
   "name": "Verificar que completar los campos obligatorios habilita \"Continuar con detalle de la dirección\" [App] [Guest]",
   "observation": "Con Región Metropolitana y Las Condes el botón sigue deshabilitado; al escribir la Dirección se habilita. La fila no declara región, comuna ni calle: se usaron las de {DIRECCION_SIN_NUMERO} de esta planilla, solo para completar el formulario. La hoja rotula la región como 'Metropolitana'. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "Con Región Metropolitana y Las Condes el botón sigue deshabilitado; al escribir la Dirección se habilita. La fila no declara región, comuna ni calle: se usaron las de {DIRECCION_SIN_NUMERO} de esta planilla, solo para completar el formulario. La hoja rotula la región como 'Metropolitana'.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con el store locator sin metodo",
     "file": "TC-B2C26-APP-016-android-p02-home-con-el-store-locator-sin-metodo.png"
    },
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C26-APP-016-android-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Android · Paso 6 — formulario direccion manual",
     "file": "TC-B2C26-APP-016-android-p06-formulario-direccion-manual.png"
    },
    {
     "caption": "Android · Paso 8 — region y comuna elegidas boton deshabilitado",
     "file": "TC-B2C26-APP-016-android-p08-region-y-comuna-elegidas-boton-deshabilitado.png"
    },
    {
     "caption": "Android · Paso 10 — boton habilitado",
     "file": "TC-B2C26-APP-016-android-p10-boton-habilitado.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C26-APP-016-android.png"
    }
   ],
   "spec": "tests-app/B2C-26.spec.ts:124",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario elige una Región y una Comuna.\n8. El sistema mantiene deshabilitado el botón.\n9. El usuario escribe una calle en Dirección.\n10. El sistema habilita \"Continuar con detalle de la dirección\".",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "duration_s": 46.1,
   "executed_at": "2026-10-16",
   "expected": "Región muestra las regiones de Chile y Comuna solo las comunas de la región elegida (no es texto libre).",
   "form_factor": "app",
   "id": "TC-B2C26-APP-017",
   "name": "Verificar que los dropdown de Región y Comuna muestran los catálogos de Chile [App] [Guest]",
   "observation": "Región lista las 16 regiones de Chile (la RM como 'Metropolitana') y Comuna es un catálogo (no texto libre), pero la lista de comunas de la Región Metropolitana (39) incluye Machalí, que es de O'Higgins. Mismo defecto del bug B2C-1164 (DESCARTADO): queda Rechazado sin bug nuevo. 3 de 3 intentos. tests-app/B2C-26.spec.ts:158. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "Región lista las 16 regiones de Chile (la RM como 'Metropolitana') y Comuna es un catálogo (no texto libre), pero la lista de comunas de la Región Metropolitana (39) incluye Machalí, que es de O'Higgins. Mismo defecto del bug B2C-1164 (DESCARTADO): queda Rechazado sin bug nuevo. 3 de 3 intentos. tests-app/B2C-26.spec.ts:158.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con el store locator sin metodo",
     "file": "TC-B2C26-APP-017-android-p02-home-con-el-store-locator-sin-metodo.png"
    },
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C26-APP-017-android-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Android · Paso 6 — formulario direccion manual",
     "file": "TC-B2C26-APP-017-android-p06-formulario-direccion-manual.png"
    },
    {
     "caption": "Android · Paso 8 — lista de regiones",
     "file": "TC-B2C26-APP-017-android-p08-lista-de-regiones.png"
    },
    {
     "caption": "Android · Paso 10 — lista de comunas de la region metropolitana",
     "file": "TC-B2C26-APP-017-android-p10-lista-de-comunas-de-la-region-metropolitana.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C26-APP-017-android.png"
    }
   ],
   "spec": "tests-app/B2C-26.spec.ts:143",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario despliega Región.\n8. El sistema lista las regiones de Chile.\n9. El usuario elige \"Región Metropolitana\" y despliega Comuna.\n10. El sistema lista solo las comunas de la Región Metropolitana.",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "En B2C-99 se muestran precargadas Región, Comuna, Calle y Numeración y el PIN queda ubicado sobre esa dirección.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-018",
   "name": "Verificar que continuar desde el formulario manual lleva al PIN con la dirección precargada [App] [Guest]",
   "observation": "Causa: el caso completa Región, Comuna, Dirección y Numeración de una dirección que su fila no declara (solo {APP_BUILD}). Acción: declarar el token de la dirección a ingresar. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario completa Región, Comuna, Dirección y Numeración y toca \"Continuar con detalle de la dirección\".\n8. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El header muestra la nueva dirección, el usuario sigue en la PLP y no se pidió PIN ni OTP.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-019",
   "name": "Verificar que elegir una dirección guardada la setea sin PIN ni OTP y mantiene la pantalla [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PLP\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas con cobertura y horarios\n- El carro está vacío",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El usuario navega a una PLP.\n3. El sistema carga la PLP.\n4. El usuario toca el Store Locator del header.\n5. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n6. El usuario toca una dirección guardada distinta de la activa.\n7. El sistema muestra un loader, valida cobertura y SLAs y cierra el modal.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra el toast de error, el modal vuelve a la lista y la dirección activa sigue siendo la anotada.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-020",
   "name": "Verificar que un error de API al cambiar de dirección muestra toast y mantiene la dirección anterior [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Además causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data (no hay con qué forzar el error de la API). Acción: definir la herramienta de proxy y su configuración para la app. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas\n- Después de abrir el modal, {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de cambio de dirección activa",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario anota la dirección activa del header.\n4. El usuario toca el Store Locator del header.\n5. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n6. El usuario toca una dirección guardada distinta de la activa.\n7. El sistema muestra el modal con la lista de direcciones y el toast \"Lo sentimos, no pudimos cambiar tu dirección. Inténtalo nuevamente.\"",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se inicia el flujo Sin cobertura definido en B2C-123.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-021",
   "name": "Verificar que elegir una dirección guardada sin cobertura deriva al flujo Sin cobertura [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección guardada fuera de la zona de reparto actual",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca la dirección guardada sin cobertura.\n6. El sistema muestra un loader y deriva al flujo Sin cobertura (B2C-123).",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se inicia el flujo Sin horarios disponibles definido en B2C-127.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-022",
   "name": "Verificar que una dirección guardada sin horarios y sin carrito deriva a Sin horarios disponibles [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección guardada con cobertura y sin ventanas horarias\n- El carro está vacío",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca la dirección guardada sin horarios disponibles.\n6. El sistema muestra un loader y deriva al flujo Sin horarios disponibles (B2C-127).",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se inicia el flujo definido en B2C-122 (vía B2C-144).",
   "form_factor": "app",
   "id": "TC-B2C26-APP-023",
   "name": "Verificar que elegir una dirección guardada con productos en el carro inicia el flujo de B2C-122 [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas con cobertura\n- El carro tiene al menos un producto",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca una dirección guardada distinta de la activa.\n6. El sistema muestra un loader y inicia el flujo de B2C-122.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Cada dirección guardada no activa muestra el menú ⋮ y la dirección activa no lo muestra.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-024",
   "name": "Verificar que el menú ⋮ aparece solo en las direcciones guardadas no activas [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El modal de confirmación se cierra y la dirección sigue en la lista.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-025",
   "name": "Verificar que \"No gracias\" en la confirmación de eliminar mantiene la dirección [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca ⋮ en una dirección no activa y luego \"Eliminar dirección\".\n6. El sistema muestra el modal \"¿Quieres eliminar tu dirección?\" con \"Aceptar\" y \"No gracias\".\n7. El usuario toca \"No gracias\".\n8. El sistema cierra el modal de confirmación.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La dirección desaparece de la lista y el toast de éxito se cierra solo a los 4 segundos.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-026",
   "name": "Verificar que \"Aceptar\" elimina la dirección y muestra el toast de éxito [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca ⋮ en una dirección no activa y luego \"Eliminar dirección\".\n6. El sistema muestra el modal \"¿Quieres eliminar tu dirección?\".\n7. El usuario toca \"Aceptar\".\n8. El sistema muestra un loader, quita la dirección de la lista, cierra el modal de confirmación y muestra el toast \"Tu dirección fue eliminada con éxito.\".",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se muestra el toast de error (se cierra solo con la X) y la dirección sigue en la lista.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-027",
   "name": "Verificar que un error al eliminar muestra el toast de error y la dirección permanece [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Además causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data (no hay con qué forzar el error de la API). Acción: definir la herramienta de proxy y su configuración para la app. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa\n- Después de abrir el modal, {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de eliminación de dirección",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca ⋮ en una dirección no activa y luego \"Eliminar dirección\".\n6. El sistema muestra el modal \"¿Quieres eliminar tu dirección?\".\n7. El usuario toca \"Aceptar\".\n8. El sistema muestra un loader y luego el toast \"Lo sentimos, no pudimos eliminar tu dirección. Inténtalo nuevamente.\".",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El header muestra ícono de despacho + dirección de la última compra + \"Desde\" + fecha + horario + label de precio o condición de despacho.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-028",
   "name": "Verificar que el header del logueado sin dirección en sesión muestra la de su última compra [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta vhchirinos+comprador@avatar-global.com tiene al menos una compra completada\n- Sin dirección activa en la sesión (App recién instalada o con datos borrados)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra en el Store Locator del header la dirección de la última compra completada.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El header muestra la dirección seteada en la sesión y el modal la muestra como activa.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-029",
   "name": "Verificar que el header del logueado sin historial muestra la dirección seteada en la sesión [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com no tiene historial de compras",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario configura una dirección de despacho desde el Store Locator.\n4. El sistema muestra la dirección seteada en el Store Locator del header.\n5. El usuario toca el Store Locator del header.\n6. El sistema abre el modal con la dirección seteada marcada como activa.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El header muestra ícono de despacho + calle + numeración (si aplica) + comuna + ícono de edición.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-030",
   "name": "Verificar que el header del invitado muestra la dirección de la sesión con el formato definido [App] [Guest]",
   "observation": "Causa: el caso busca o fija 'una calle'/'una dirección de despacho' que su columna Test data no declara (solo {APP_BUILD}); los valores del paso a paso son ejemplos. Acción: declarar el token de la dirección a usar. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario configura una dirección de despacho desde el Store Locator.\n4. El sistema muestra la dirección en el Store Locator del header.",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Tras cerrar y reabrir la App, el header vuelve a \"Elige una forma de entrega\" y la dirección anterior no se muestra.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-031",
   "name": "Verificar que la dirección del invitado no persiste al cerrar y volver a abrir la App [App] [Guest]",
   "observation": "Causa: el caso busca o fija 'una calle'/'una dirección de despacho' que su columna Test data no declara (solo {APP_BUILD}); los valores del paso a paso son ejemplos. Acción: declarar el token de la dirección a usar. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario configura una dirección de despacho desde el Store Locator.\n4. El sistema muestra la dirección en el header.\n5. El usuario cierra la App por completo (la quita de las apps recientes) y la vuelve a abrir.\n6. El sistema carga el Home con \"Elige una forma de entrega\" en el Store Locator.",
   "test_data": "v1.0.7"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Se inicia el flujo de asociación de dirección definido en B2C-124.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-032",
   "name": "Verificar que iniciar sesión con dirección de invitado activa inicia el flujo de asociación [App] [Guest]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario configura una dirección de despacho desde el Store Locator.\n4. El sistema muestra la dirección en el header.\n5. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n6. El sistema autentica al usuario e inicia el flujo de asociación de dirección (B2C-124).",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "En Home, PLP, PDP, resultados de búsqueda y Carro el header muestra la misma dirección activa y no se pide volver a configurarla.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-033",
   "name": "Verificar que la dirección activa se mantiene en el header al navegar por la App [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección activa",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home con la dirección activa en el Store Locator.\n3. El usuario navega a una PLP, abre una PDP, busca un producto y abre el Carro.\n4. El sistema muestra la misma dirección activa en el Store Locator en cada pantalla, sin solicitar reconfigurarla.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El header muestra la dirección de la última compra completada o, si no hay historial, la última dirección seteada.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-034",
   "name": "Verificar que al reiniciar sesión se recupera la dirección de la última compra o la última seteada [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La cuenta vhchirinos+comprador@avatar-global.com tiene una dirección activa",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario anota la dirección activa del header.\n4. El usuario cierra sesión y vuelve a iniciar sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n5. El sistema autentica al usuario y muestra una dirección en el Store Locator del header.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "El campo Dirección acepta \"+\", \"-\" y \"/\" sin error y sin eliminar caracteres, y en B2C-99 la calle se muestra precargada como \"Pasaje Los Aromos 3-A / Lote 5+\".",
   "form_factor": "app",
   "id": "TC-B2C26-APP-035",
   "name": "Verificar que el formulario manual acepta los caracteres especiales +, - y / en la dirección [App] [Logueado]",
   "observation": "Causa: el título es [Logueado] y la fila no declara ninguna cuenta (Test data solo trae {APP_BUILD} y {DIRECCION_CARACTERES_ESPECIALES}). Acción: declarar el token de la cuenta (con RUT, por el login de la v1.0.7). Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario selecciona una Región y una Comuna con cobertura, escribe Pasaje Los Aromos 3-A / Lote 5+ en Dirección y 120 en Numeración.\n8. El sistema mantiene el texto tal como se escribió, sin mensaje de error, y habilita \"Continuar con detalle de la dirección\".\n9. El usuario toca \"Continuar con detalle de la dirección\".\n10. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).",
   "test_data": "v1.0.7, Pasaje Los Aromos 3-A / Lote 5+"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "duration_s": 59.6,
   "executed_at": "2026-10-16",
   "expected": "La dirección activa se muestra con \"S/N\" en el lugar de la numeración (calle, S/N, comuna y región) en el modal y en el Store Locator del header.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-036",
   "name": "Verificar que una dirección manual sin numeración se visualiza con \"S/N\" [App] [Guest]",
   "observation": "Esperado: la dirección activa con 'S/N' en lugar de la numeración, en el modal y en el header. Obtenido: Región Metropolitana / Las Condes / Dirección 'Las Condes' sin numeración → header 'Las Condes, Desde: Hoy 16/10, 15:00 hrs., $2.990' y modal 'Las Condes, Las Condes, Metropolitana', sin 'S/N' (3 de 3 intentos). {DIRECCION_SIN_NUMERO} = 'Metropolitana, Las Condes, Las Condes' se tomó como Región, Comuna y Dirección. tests-app/B2C-26.spec.ts:185. Bug: B2C-1224. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "observed": "Esperado: la dirección activa con 'S/N' en lugar de la numeración, en el modal y en el header. Obtenido: Región Metropolitana / Las Condes / Dirección 'Las Condes' sin numeración → header 'Las Condes, Desde: Hoy 16/10, 15:00 hrs., $2.990' y modal 'Las Condes, Las Condes, Metropolitana', sin 'S/N' (3 de 3 intentos). {DIRECCION_SIN_NUMERO} = 'Metropolitana, Las Condes, Las Condes' se tomó como Región, Comuna y Dirección. tests-app/B2C-26.spec.ts:185. Bug: B2C-1224.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado\n- La dirección a ingresar tiene cobertura y horarios disponibles",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con el store locator sin metodo",
     "file": "TC-B2C26-APP-036-android-p02-home-con-el-store-locator-sin-metodo.png"
    },
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C26-APP-036-android-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Android · Paso 6 — formulario direccion manual",
     "file": "TC-B2C26-APP-036-android-p06-formulario-direccion-manual.png"
    },
    {
     "caption": "Android · Paso 7 — region comuna y direccion sin numeracion",
     "file": "TC-B2C26-APP-036-android-p07-region-comuna-y-direccion-sin-numeracion.png"
    },
    {
     "caption": "Android · Paso 8 — detalles de la direccion",
     "file": "TC-B2C26-APP-036-android-p08-detalles-de-la-direccion.png"
    },
    {
     "caption": "Android · Paso 10 — store locator del header con la direccion",
     "file": "TC-B2C26-APP-036-android-p10-store-locator-del-header-con-la-direccion.png"
    },
    {
     "caption": "Android · Paso 12 — modal con la direccion activa",
     "file": "TC-B2C26-APP-036-android-p12-modal-con-la-direccion-activa.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C26-APP-036-android.png"
    }
   ],
   "spec": "tests-app/B2C-26.spec.ts:162",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario completa Región, Comuna y Dirección con Metropolitana, Las Condes, Las Condes, deja Numeración vacío y toca \"Continuar con detalle de la dirección\".\n8. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).\n9. El usuario confirma la dirección en B2C-99 y completa el flujo hasta dejarla seteada.\n10. El sistema cierra el flujo y muestra la dirección en el Store Locator del header.\n11. El usuario toca el Store Locator del header.\n12. El sistema abre el modal con la dirección activa marcada en \"Dirección de despacho\".",
   "test_data": "v1.0.7, Metropolitana, Las Condes, Las Condes"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "La dirección nueva queda guardada en el perfil y se muestra con \"S/N\" como numeración en el modal, antes y después de volver a iniciar sesión.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-037",
   "name": "Verificar que una dirección sin numeración se guarda en el perfil con \"S/N\" [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_USER} es un correo (vhchirinos+comprador@…) y en la app v1.0.7 'Clave de acceso por correo' viene deshabilitado: solo se inicia sesión con RUT + contraseña. Acción: declarar en la fila una cuenta con RUT o liberar un build con login por correo. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- La dirección a ingresar tiene cobertura y horarios disponibles\n- El carro está vacío",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa, las direcciones guardadas y el buscador \"Calle, dirección o lugar\".\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario completa Región, Comuna y Dirección con Metropolitana, Las Condes, Las Condes, deja Numeración vacío y toca \"Continuar con detalle de la dirección\".\n8. El usuario confirma la dirección en B2C-99 y completa el flujo (incluido el OTP de B2C-125 si se solicita) hasta dejarla seteada.\n9. El usuario toca el Store Locator del header y revisa la dirección nueva en la lista.\n10. El usuario cierra sesión, vuelve a iniciar sesión con vhchirinos+comprador@avatar-global.com y abre nuevamente el Store Locator.",
   "test_data": "v1.0.7, contraseña de la cuenta, vhchirinos+comprador@avatar-global.com, Metropolitana, Las Condes, Las Condes"
  },
  {
   "device": "Medium Phone API 36.1 · Android 16 (emulador local) · unimarc-v1.0.7.apk",
   "executed_at": "2026-10-16",
   "expected": "Google muestra la sugerencia del Plus Code sin errores; al tocarla se redirige a la confirmación con PIN (B2C-99) con Región Metropolitana y Comuna Las Condes precargadas y el PIN sobre la ubicación del Plus Code; al confirmar, el modal se cierra y el Store Locator del header muestra la dirección seteada, sin mensajes de error.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-038",
   "name": "Verificar que al buscar un Plus Code de Google la dirección se agrega sin problemas [App] [Guest]",
   "observation": "Causa: {DIRECCION_PLUS_CODE} = 'HG74+86G Las Condes, Chile' no tiene cobertura en DEV: la sugerencia sí aparece y la confirmación con PIN trae 'Las Condes, Región Metropolitana', pero al confirmar se abre 'Aún no llegamos a esta dirección' (2026-10-16), no se setea la dirección sin errores. Acción: declarar un Plus Code dentro de la zona de cobertura. Nota: la fila no declara 'Plataforma:' (solo 'Viewport: App iOS/Android'); se tomó como Android, build {APP_BUILD} = v1.0.7.",
   "observed": "No se ejecutó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "screenshots": [
    {
     "caption": "Exploración: el Plus Code abre 'Aún no llegamos a esta dirección'",
     "file": "08-tras-pluscode.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.7.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe HG74+86G Las Condes, Chile en \"Calle, dirección o lugar\".\n6. El sistema muestra la sugerencia de Google correspondiente al Plus Code (Las Condes).\n7. El usuario toca la sugerencia.\n8. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99) con la dirección precargada.\n9. El usuario confirma la dirección.\n10. El sistema cierra el modal y actualiza el Store Locator del header.",
   "test_data": "v1.0.7, HG74+86G Las Condes, Chile"
  }
 ]
}
-->
