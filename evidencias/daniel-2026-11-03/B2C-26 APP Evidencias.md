# Store Locator en la app (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-26 APP |
| Última actualización | 2026-10-26 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-26 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 20 |
| Aprobado | 7 |
| Rechazado | 4 |
| Bloqueado | 1 |
| **Total** | **32** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-26 | 31 | TC-B2C26-APP-001, TC-B2C26-APP-002, TC-B2C26-APP-004, TC-B2C26-APP-005, TC-B2C26-APP-006, TC-B2C26-APP-007, TC-B2C26-APP-008, TC-B2C26-APP-009, TC-B2C26-APP-010, TC-B2C26-APP-011, TC-B2C26-APP-014, TC-B2C26-APP-018, TC-B2C26-APP-019, TC-B2C26-APP-020, TC-B2C26-APP-021, TC-B2C26-APP-022, TC-B2C26-APP-023, TC-B2C26-APP-024, TC-B2C26-APP-025, TC-B2C26-APP-026, TC-B2C26-APP-027, TC-B2C26-APP-028, TC-B2C26-APP-029, TC-B2C26-APP-030, TC-B2C26-APP-031, TC-B2C26-APP-032, TC-B2C26-APP-033, TC-B2C26-APP-034, TC-B2C26-APP-035, TC-B2C26-APP-037, TC-B2C26-APP-038 |
| 2026-10-25 | 1 | TC-B2C26-APP-017 |
| 2026-10-09 | 3 | TC-B2C26-APP-008, TC-B2C26-APP-019, TC-B2C26-APP-033 |

## Detalle por caso de prueba

### TC-B2C26-APP-017 - Verificar que los dropdown de Región y Comuna muestran los catálogos de Chile [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-25 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-26.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

- {APP_BUILD} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
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

Android (re-ejecución 25-oct, app v1.0.1): Región lista las regiones de Chile y Comuna es un catálogo, pero la lista de comunas de la Región Metropolitana (38) incluye Machalí, que es de O'Higgins. tests-app/B2C-26.spec.ts:158. Mismo defecto del bug B2C-1164 (DESCARTADO). iOS: no se ejecutó; queda Pendiente.

**Observación**

Android (re-ejecución 25-oct, app v1.0.1): Región lista las regiones de Chile y Comuna es un catálogo, pero la lista de comunas de la Región Metropolitana (38) incluye Machalí, que es de O'Higgins. tests-app/B2C-26.spec.ts:158. Mismo defecto del bug B2C-1164 (DESCARTADO). iOS: no se ejecutó; queda Pendiente.

**Evidencia**

![Android · Paso 2 — home con el store locator sin metodo](<B2C-26 APP Evidencias/TC-B2C26-APP-017-android-p02-home-con-el-store-locator-sin-metodo.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-26 APP Evidencias/TC-B2C26-APP-017-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Android · Paso 6 — formulario direccion manual](<B2C-26 APP Evidencias/TC-B2C26-APP-017-android-p06-formulario-direccion-manual.png>)

![Android · Paso 8 — lista de regiones](<B2C-26 APP Evidencias/TC-B2C26-APP-017-android-p08-lista-de-regiones.png>)

![Android · Paso 10 — lista de comunas de la region metropolitana](<B2C-26 APP Evidencias/TC-B2C26-APP-017-android-p10-lista-de-comunas-de-la-region-metropolitana.png>)

![Android · Estado final](<B2C-26 APP Evidencias/TC-B2C26-APP-017-android.png>)

---

### TC-B2C26-APP-008 - Verificar que el modal del logueado muestra skeleton y luego la dirección activa y las guardadas

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-26-logueado.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".

**Resultado esperado**

Tras el skeleton se muestra la dirección activa marcada (separada de las guardadas), cada dirección guardada con etiqueta, calle, número, complemento, comuna y región, y las opciones de búsqueda Google y "Activar mi ubicación actual".

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): el modal muestra la dirección activa, las 6 guardadas, el buscador y 'Activar mi ubicación actual'. Nota: el skeleton de carga no pudo comprobarse (dura un instante y no se alcanzó a capturar).

**Evidencia**

![Android · Paso 2 — home con el store locator](<B2C-26 APP Evidencias/TC-B2C26-APP-008-android-p02-home-con-el-store-locator.png>)

![Android · Paso 4 — modal con la direccion activa y las guardadas](<B2C-26 APP Evidencias/TC-B2C26-APP-008-android-p04-modal-con-la-direccion-activa-y-las-guardadas.png>)

![Android · Estado final](<B2C-26 APP Evidencias/TC-B2C26-APP-008-android.png>)

---

### TC-B2C26-APP-019 - Verificar que elegir una dirección guardada la setea sin PIN ni OTP y mantiene la pantalla

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-26-logueado.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PLP
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com tiene al menos 2 direcciones guardadas con cobertura y horarios
- El carro está vacío

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario navega a una PLP.
3. El sistema carga la PLP.
4. El usuario toca el Store Locator del header.
5. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
6. El usuario toca una dirección guardada distinta de la activa.
7. El sistema muestra un loader, valida cobertura y SLAs y cierra el modal.

**Resultado esperado**

El header muestra la nueva dirección, el usuario sigue en la PLP y no se pidió PIN ni OTP.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): Esperado: desde la PLP el usuario toca el Store Locator del header, elige otra dirección guardada y el header muestra la nueva dirección sin PIN ni OTP. Obtenido: la PLP ('Cerdo', 15 productos) solo muestra una barra de búsqueda en el header; no existe el Store Locator, por lo que no se puede abrir el modal ni cambiar la dirección. Bug: B2C-1359.

**Evidencia**

![Android · Paso 3 — plp](<B2C-26 APP Evidencias/TC-B2C26-APP-019-android-p03-plp.png>)

![Android · Estado final](<B2C-26 APP Evidencias/TC-B2C26-APP-019-android.png>)

---

### TC-B2C26-APP-033 - Verificar que la dirección activa se mantiene en el header al navegar por la App

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-26-logueado.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com tiene una dirección activa

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home con la dirección activa en el Store Locator.
3. El usuario navega a una PLP, abre una PDP, busca un producto y abre el Carro.
4. El sistema muestra la misma dirección activa en el Store Locator en cada pantalla, sin solicitar reconfigurarla.

**Resultado esperado**

En Home, PLP, PDP, resultados de búsqueda y Carro el header muestra la misma dirección activa y no se pide volver a configurarla.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): Esperado: en Home, PLP, PDP, resultados de búsqueda y Carro el header muestra la misma dirección activa. Obtenido: la Home sí la muestra; la PLP (barra de búsqueda), la PDP (nombre del producto) y los resultados de búsqueda (barra con el término y Cancelar) no muestran el Store Locator. El Carro no se evaluó: con el carro vacío la app no ofrece acceso a él. Bug: B2C-1360.

**Evidencia**

![Android · Paso 2 — home](<B2C-26 APP Evidencias/TC-B2C26-APP-033-android-p02-home.png>)

![Android · Paso 3 — plp](<B2C-26 APP Evidencias/TC-B2C26-APP-033-android-p03-plp.png>)

![Android · Paso 4 — pdp](<B2C-26 APP Evidencias/TC-B2C26-APP-033-android-p04-pdp.png>)

![Android · Paso 5 — resultados de busqueda](<B2C-26 APP Evidencias/TC-B2C26-APP-033-android-p05-resultados-de-busqueda.png>)

![Android · Estado final](<B2C-26 APP Evidencias/TC-B2C26-APP-033-android.png>)

---

### TC-B2C26-APP-001 - Verificar que con 3 o más caracteres se sugieren direcciones de Google y una completa lleva al PIN

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
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

Causa: el paso 5 pide escribir 3 o más caracteres de una calle y la columna Test data no declara cuál. Acción: declarar en la fila del TC el token con la calle a buscar.

---

### TC-B2C26-APP-002 - Verificar que con menos de 3 caracteres no se muestran sugerencias y se ofrece agregar manualmente

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado
- {HERRAMIENTA_PROXY_APP} registrando el tráfico de la App

**Data utilizada**

- v1.0.1 = TBD
- {HERRAMIENTA_PROXY_APP} = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 2 caracteres en "Calle, dirección o lugar".
6. El sistema no muestra sugerencias y muestra "¿No aparece tu dirección?" + opción "Agregar".

**Resultado esperado**

No se muestran sugerencias ni se registran requests a Google en {HERRAMIENTA_PROXY_APP} y se muestra "¿No aparece tu dirección?" + opción "Agregar".

**Resultado obtenido**

Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar la herramienta o endpoint de proxy en el Excel de data y avisar para re-ejecutar el caso.

---

### TC-B2C26-APP-004 - Verificar que la opción "Agregar" aparece al final de la lista también cuando hay resultados

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña "Despacho a domicilio" seleccionada.
5. El usuario escribe 3 o más caracteres de una calle existente en "Calle, dirección o lugar".
6. El sistema muestra las sugerencias de Google y, después de la última, "¿No aparece tu dirección?" + opción "Agregar".

**Resultado esperado**

Con resultados, "¿No aparece tu dirección?" + opción "Agregar" aparece como último elemento de la lista.

**Resultado obtenido**

Causa: el paso 5 pide escribir una calle existente y la columna Test data no declara cuál. Acción: declarar en la fila del TC el token con la calle a buscar.

---

### TC-B2C26-APP-005 - Verificar que un error de la API de Google ofrece agregar la dirección manualmente

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de Google Places (maps.googleapis.com)

**Data utilizada**

- v1.0.1 = TBD
- {HERRAMIENTA_PROXY_APP} = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
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

Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar la herramienta o endpoint de proxy en el Excel de data y avisar para re-ejecutar el caso.

---

### TC-B2C26-APP-006 - Verificar que un resultado de Google sin calle usa el texto escrito como Calle y continúa al PIN

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-26-pendientes.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
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

Android (Pixel 6, Android 14, app v1.0.1, invitado): al elegir 'Providencia' la app abre Detalles de la dirección con 'Providencia, Providencia, Región Metropolitana' (Calle = texto escrito; Comuna y Región prellenadas). Nota: la captura de esa pantalla sale en blanco en el emulador.

**Evidencia**

![Android · Paso 2 — home con el store locator sin metodo](<B2C-26 APP Evidencias/TC-B2C26-APP-006-android-p02-home-con-el-store-locator-sin-metodo.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-26 APP Evidencias/TC-B2C26-APP-006-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Android · Paso 8 — detalles de la direccion con la comuna elegida](<B2C-26 APP Evidencias/TC-B2C26-APP-006-android-p08-detalles-de-la-direccion-con-la-comuna-elegida.png>)

![Android · Estado final](<B2C-26 APP Evidencias/TC-B2C26-APP-006-android.png>)

---

### TC-B2C26-APP-007 - Verificar que el modal del invitado muestra su dirección activa marcada con el formato definido

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- En la sesión actual se configuró una dirección de despacho como invitado

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal con "Despacho a domicilio" seleccionada y muestra en "Dirección de Despacho" la dirección activa marcada.

**Resultado esperado**

La dirección activa aparece marcada con el formato: nombre, calle, número (si aplica), complemento (si aplica), comuna y región.

**Resultado obtenido**

Causa: el caso requiere una dirección de despacho seteada desde el Store Locator y la columna Test data no declara cuál. Acción: declarar en la fila del TC el token con la dirección a usar.

---

### TC-B2C26-APP-009 - Verificar que un error al cargar los métodos de entrega muestra la pantalla de error con código

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com tiene una dirección activa
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de carga de direcciones guardadas

**Data utilizada**

- v1.0.1 = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario anota la dirección activa del header.
4. El usuario toca el Store Locator del header.
5. El sistema reemplaza el modal por la pantalla de error "Ups, algo salió mal" con el mensaje "No logramos cargar la información de los métodos de entrega. Intenta otra vez.", un código de error y los botones "Reintentar" y "Volver al inicio".

**Resultado esperado**

Se muestra la pantalla de error completa con código de referencia y los 2 botones, y la dirección activa anotada no cambia.

**Resultado obtenido**

Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar la herramienta o endpoint de proxy en el Excel de data y avisar para re-ejecutar el caso.

---

### TC-B2C26-APP-010 - Verificar que "Reintentar" vuelve a cargar los métodos de entrega

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com tiene direcciones guardadas
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de carga de direcciones guardadas

**Data utilizada**

- v1.0.1 = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra la pantalla de error "Ups, algo salió mal".
5. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en la request de carga de direcciones guardadas y toca "Reintentar".
6. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".

**Resultado esperado**

El modal "Elige tu método de entrega" se carga con la dirección activa y las direcciones guardadas.

**Resultado obtenido**

Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar la herramienta o endpoint de proxy en el Excel de data y avisar para re-ejecutar el caso.

---

### TC-B2C26-APP-011 - Verificar que "Volver al inicio" cierra la pantalla de error y regresa al Home

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com tiene direcciones guardadas
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de carga de direcciones guardadas

**Data utilizada**

- v1.0.1 = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario navega a una PLP.
3. El sistema carga la PLP.
4. El usuario toca el Store Locator del header.
5. El sistema muestra la pantalla de error "Ups, algo salió mal".
6. El usuario toca "Volver al inicio".
7. El sistema cierra el modal y redirige al Home de la App.

**Resultado esperado**

El modal se cierra y el usuario queda en el Home de la App.

**Resultado obtenido**

Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar la herramienta o endpoint de proxy en el Excel de data y avisar para re-ejecutar el caso.

---

### TC-B2C26-APP-014 - Verificar que una falla al obtener coordenadas muestra el toast de error y permite reintentar

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado
- La App tiene concedido el permiso de ubicación
- Ubicación del dispositivo sin señal: simulador iOS con Features > Location = None / emulador Android sin ubicación

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
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

Causa: el caso exige un dispositivo sin señal de ubicación y no se cambió el estado del emulador para forzarlo. Acción: ejecutar en un dispositivo o emulador sin ubicación.

---

### TC-B2C26-APP-018 - Verificar que continuar desde el formulario manual lleva al PIN con la dirección precargada

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
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

Causa: el paso 7 pide completar Región, Comuna, Dirección y Numeración y la fila no declara los valores. Acción: declarar los valores del formulario en la columna Test data.

---

### TC-B2C26-APP-020 - Verificar que un error de API al cambiar de dirección muestra toast y mantiene la dirección anterior

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com tiene al menos 2 direcciones guardadas
- Después de abrir el modal, {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de cambio de dirección activa

**Data utilizada**

- v1.0.1 = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario anota la dirección activa del header.
4. El usuario toca el Store Locator del header.
5. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
6. El usuario toca una dirección guardada distinta de la activa.
7. El sistema muestra el modal con la lista de direcciones y el toast "Lo sentimos, no pudimos cambiar tu dirección. Inténtalo nuevamente."

**Resultado esperado**

Se muestra el toast de error, el modal vuelve a la lista y la dirección activa sigue siendo la anotada.

**Resultado obtenido**

Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar la herramienta o endpoint de proxy en el Excel de data y avisar para re-ejecutar el caso.

---

### TC-B2C26-APP-021 - Verificar que elegir una dirección guardada sin cobertura deriva al flujo Sin cobertura

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com tiene una dirección guardada fuera de la zona de reparto actual

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
5. El usuario toca la dirección guardada sin cobertura.
6. El sistema muestra un loader y deriva al flujo Sin cobertura (B2C-123).

**Resultado esperado**

Se inicia el flujo Sin cobertura definido en B2C-123.

**Resultado obtenido**

Causa: el caso requiere una dirección guardada fuera de la zona de reparto de {COMPRADOR_USER} y la fila no declara cuál. Acción: declarar la dirección guardada sin cobertura.

---

### TC-B2C26-APP-022 - Verificar que una dirección guardada sin horarios y sin carrito deriva a Sin horarios disponibles

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com tiene una dirección guardada con cobertura y sin ventanas horarias
- El carro está vacío

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
5. El usuario toca la dirección guardada sin horarios disponibles.
6. El sistema muestra un loader y deriva al flujo Sin horarios disponibles (B2C-127).

**Resultado esperado**

Se inicia el flujo Sin horarios disponibles definido en B2C-127.

**Resultado obtenido**

Causa: el caso requiere una dirección guardada con cobertura y sin ventanas horarias y la fila no declara cuál. Acción: declarar la dirección guardada sin ventanas horarias.

---

### TC-B2C26-APP-023 - Verificar que elegir una dirección guardada con productos en el carro inicia el flujo de B2C-122

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com tiene al menos 2 direcciones guardadas con cobertura
- El carro tiene al menos un producto

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".
5. El usuario toca una dirección guardada distinta de la activa.
6. El sistema muestra un loader y inicia el flujo de B2C-122.

**Resultado esperado**

Se inicia el flujo definido en B2C-122 (vía B2C-144).

**Resultado obtenido**

Causa: el caso requiere una dirección guardada con cobertura y al menos un producto en el carro, y la fila no declara ni la dirección ni el producto. Acción: declarar la dirección y el SKU del carro.

---

### TC-B2C26-APP-024 - Verificar que el menú ⋮ aparece solo en las direcciones guardadas no activas

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-26-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador "Calle, dirección o lugar" y "Activar mi ubicación actual".

**Resultado esperado**

Cada dirección guardada no activa muestra el menú ⋮ y la dirección activa no lo muestra.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): la dirección activa (Calle Uno 23, La Florida) no muestra el menú ⋮ y las 6 direcciones guardadas sí lo muestran.

**Evidencia**

![Android · Paso 4 — modal con la direccion activa y las guardadas](<B2C-26 APP Evidencias/TC-B2C26-APP-024-android-p04-modal-con-la-direccion-activa-y-las-guardadas.png>)

![Android · Estado final](<B2C-26 APP Evidencias/TC-B2C26-APP-024-android.png>)

---

### TC-B2C26-APP-025 - Verificar que "No gracias" en la confirmación de eliminar mantiene la dirección

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-26-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
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

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): 'No gracias' cierra la confirmación '¿Quieres eliminar tu dirección?' y la lista de 6 direcciones queda idéntica.

**Evidencia**

![Android · Paso 4 — modal con las direcciones guardadas](<B2C-26 APP Evidencias/TC-B2C26-APP-025-android-p04-modal-con-las-direcciones-guardadas.png>)

![Android · Paso 6 — confirmacion de eliminar con aceptar y no gracias](<B2C-26 APP Evidencias/TC-B2C26-APP-025-android-p06-confirmacion-de-eliminar-con-aceptar-y-no-gracias.png>)

![Android · Estado final](<B2C-26 APP Evidencias/TC-B2C26-APP-025-android.png>)

---

### TC-B2C26-APP-026 - Verificar que "Aceptar" elimina la dirección y muestra el toast de éxito

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-26-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
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

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): se elimina 'Calle Uno 23 (10)' con 'Aceptar': desaparece de la lista y aparece el toast 'Tu dirección fue eliminada con éxito.'; 13 s después ya no estaba en pantalla. Nota: el cierre exacto a los 4 s no se midió.

**Evidencia**

![Android · Paso 4 — modal con las direcciones guardadas](<B2C-26 APP Evidencias/TC-B2C26-APP-026-android-p04-modal-con-las-direcciones-guardadas.png>)

![Android · Paso 6 — confirmacion de eliminar](<B2C-26 APP Evidencias/TC-B2C26-APP-026-android-p06-confirmacion-de-eliminar.png>)

![Android · Paso 8 — toast de exito tras eliminar](<B2C-26 APP Evidencias/TC-B2C26-APP-026-android-p08-toast-de-exito-tras-eliminar.png>)

![Android · Estado final](<B2C-26 APP Evidencias/TC-B2C26-APP-026-android.png>)

---

### TC-B2C26-APP-027 - Verificar que un error al eliminar muestra el toast de error y la dirección permanece

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa
- Después de abrir el modal, {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de eliminación de dirección

**Data utilizada**

- v1.0.1 = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
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

Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar la herramienta o endpoint de proxy en el Excel de data y avisar para re-ejecutar el caso.

---

### TC-B2C26-APP-028 - Verificar que el header del logueado sin dirección en sesión muestra la de su última compra

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-26-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta daunuruco+comprador@avatar-global.com tiene al menos una compra completada
- Sin dirección activa en la sesión (App recién instalada o con datos borrados)

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra en el Store Locator del header la dirección de la última compra completada.

**Resultado esperado**

El header muestra ícono de despacho + dirección de la última compra + "Desde" + fecha + horario + label de precio o condición de despacho.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): sin dirección activa en la sesión (datos borrados) el header muestra, tras iniciar sesión, 'Calle Uno 23, La Florida · Desde: Mar 27/10, 09:00 hrs. · $2.990'. Nota: la prueba no distingue si esa dirección proviene de la última compra.

**Evidencia**

![Android · Paso 2 — home sin direccion activa](<B2C-26 APP Evidencias/TC-B2C26-APP-028-android-p02-home-sin-direccion-activa.png>)

![Android · Paso 6 — store locator del header tras iniciar sesion](<B2C-26 APP Evidencias/TC-B2C26-APP-028-android-p06-store-locator-del-header-tras-iniciar-sesion.png>)

![Android · Estado final](<B2C-26 APP Evidencias/TC-B2C26-APP-028-android.png>)

---

### TC-B2C26-APP-029 - Verificar que el header del logueado sin historial muestra la dirección seteada en la sesión

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com no tiene historial de compras

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario configura una dirección de despacho desde el Store Locator.
4. El sistema muestra la dirección seteada en el Store Locator del header.
5. El usuario toca el Store Locator del header.
6. El sistema abre el modal con la dirección seteada marcada como activa.

**Resultado esperado**

El header muestra la dirección seteada en la sesión y el modal la muestra como activa.

**Resultado obtenido**

Causa: el paso 3 no declara la dirección a configurar y la precondición pide una cuenta sin historial de compras, que la fila no declara (solo declara {COMPRADOR_USER}). Acción: declarar la cuenta sin historial y la dirección a configurar.

---

### TC-B2C26-APP-030 - Verificar que el header del invitado muestra la dirección de la sesión con el formato definido

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario configura una dirección de despacho desde el Store Locator.
4. El sistema muestra la dirección en el Store Locator del header.

**Resultado esperado**

El header muestra ícono de despacho + calle + numeración (si aplica) + comuna + ícono de edición.

**Resultado obtenido**

Causa: el caso requiere una dirección de despacho seteada desde el Store Locator y la columna Test data no declara cuál. Acción: declarar en la fila del TC el token con la dirección a usar.

---

### TC-B2C26-APP-031 - Verificar que la dirección del invitado no persiste al cerrar y volver a abrir la App

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario configura una dirección de despacho desde el Store Locator.
4. El sistema muestra la dirección en el header.
5. El usuario cierra la App por completo (la quita de las apps recientes) y la vuelve a abrir.
6. El sistema carga el Home con "Elige una forma de entrega" en el Store Locator.

**Resultado esperado**

Tras cerrar y reabrir la App, el header vuelve a "Elige una forma de entrega" y la dirección anterior no se muestra.

**Resultado obtenido**

Causa: el caso requiere una dirección de despacho seteada desde el Store Locator y la columna Test data no declara cuál. Acción: declarar en la fila del TC el token con la dirección a usar.

---

### TC-B2C26-APP-032 - Verificar que iniciar sesión con dirección de invitado activa inicia el flujo de asociación

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K
- {OTP_CODIGO} = TBD (código OTP del login con RUT, v1.0.7)

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario configura una dirección de despacho desde el Store Locator.
4. El sistema muestra la dirección en el header.
5. El usuario ingresa el RUT daunuruco+comprador@avatar-global.com en el inicio de sesión y toca Iniciar sesión.
6. El sistema envía un código OTP para validar el inicio de sesión (App v1.0.7).
7. El usuario ingresa el código OTP recibido.
8. El sistema autentica al usuario e inicia el flujo de asociación de dirección (B2C-124).

**Resultado esperado**

Se inicia el flujo de asociación de dirección definido en B2C-124.

**Resultado obtenido**

Causa: el paso 3 no declara la dirección a configurar; además {OTP_CODIGO} figura en TBD (código del login con RUT de la v1.0.7), que ya no aplica porque el login vigente es por correo + OTP. Acción: declarar la dirección y actualizar el paso 5 al login por correo.

---

### TC-B2C26-APP-034 - Verificar que al reiniciar sesión se recupera la dirección de la última compra o la última seteada

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-26-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com tiene una dirección activa

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K
- {OTP_CODIGO} = TBD (código OTP del login con RUT, v1.0.7)

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario anota la dirección activa del header.
4. El usuario ingresa el RUT daunuruco+comprador@avatar-global.com en el inicio de sesión y toca Iniciar sesión.
5. El sistema envía un código OTP para validar el inicio de sesión (App v1.0.7).
6. El usuario ingresa el código OTP recibido.
7. El sistema autentica al usuario y muestra una dirección en el Store Locator del header.

**Resultado esperado**

El header muestra la dirección de la última compra completada o, si no hay historial, la última dirección seteada.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): antes del login el header decía 'Elige una forma de entrega'; después, 'Calle Uno 23, La Florida · Desde: Mar 27/10, 09:00 hrs. · $2.990'.

**Evidencia**

![Android · Paso 2 — home antes de iniciar sesion](<B2C-26 APP Evidencias/TC-B2C26-APP-034-android-p02-home-antes-de-iniciar-sesion.png>)

![Android · Paso 6 — store locator del header tras iniciar sesion](<B2C-26 APP Evidencias/TC-B2C26-APP-034-android-p06-store-locator-del-header-tras-iniciar-sesion.png>)

![Android · Estado final](<B2C-26 APP Evidencias/TC-B2C26-APP-034-android.png>)

---

### TC-B2C26-APP-035 - Verificar que el formulario manual acepta los caracteres especiales +, - y / en la dirección

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

- v1.0.1 = TBD
- Pasaje Los Aromos 3-A / Lote 5+ = Pasaje Los Aromos 3-A / Lote 5+

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
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

Causa: el paso 7 pide elegir una Región y una Comuna con cobertura sin declararlas (solo declara la dirección y el 120). Acción: declarar la Región y la Comuna con cobertura.

---

### TC-B2C26-APP-037 - Verificar que una dirección sin numeración se guarda en el perfil con "S/N"

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-26-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La dirección a ingresar tiene cobertura y horarios disponibles
- El carro está vacío

**Data utilizada**

- v1.0.1 = TBD
- daunuruco+comprador@avatar-global.com = 11.223.344-K
- Metropolitana, Las Condes, Las Condes = TBD (Región, Comuna y Calle con cobertura, sin numeración)

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con el Store Locator en el header.
3. El usuario toca el Store Locator del header.
4. El sistema muestra el skeleton de carga y luego la dirección activa, las direcciones guardadas y el buscador "Calle, dirección o lugar".
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual" con Región* ("Elegir región"), Comuna* ("Elegir comuna"), Dirección* ("Calle") y Numeración ("Ej. 2160").
7. El usuario completa Región, Comuna y Dirección con Metropolitana, Las Condes, Las Condes, deja Numeración vacío y toca "Continuar con detalle de la dirección".
8. El usuario confirma la dirección en B2C-99 y completa el flujo (incluido el OTP de B2C-125 si se solicita) hasta dejarla seteada.
9. El usuario toca el Store Locator del header y revisa la dirección nueva en la lista.
10. El usuario cierra sesión, vuelve a iniciar sesión con daunuruco+comprador@avatar-global.com y abre nuevamente el Store Locator.

**Resultado esperado**

La dirección nueva queda guardada en el perfil y se muestra con "S/N" como numeración en el modal, antes y después de volver a iniciar sesión.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): Esperado: la dirección nueva se muestra con 'S/N' como numeración en el modal, antes y después de volver a iniciar sesión. Obtenido: tras confirmar la dirección (con OTP) el modal la muestra como 'Las Condes, Las Condes, Metropolitana', sin numeración y sin 'S/N'. No se verificó la persistencia tras cerrar sesión. Mismo síntoma que B2C-1224. Bug: B2C-1361.

**Evidencia**

![Android · Paso 4 — modal del logueado](<B2C-26 APP Evidencias/TC-B2C26-APP-037-android-p04-modal-del-logueado.png>)

![Android · Paso 7 — region comuna y direccion sin numeracion](<B2C-26 APP Evidencias/TC-B2C26-APP-037-android-p07-region-comuna-y-direccion-sin-numeracion.png>)

![Android · Paso 8 — detalles de la direccion](<B2C-26 APP Evidencias/TC-B2C26-APP-037-android-p08-detalles-de-la-direccion.png>)

![Android · Paso 10 — store locator del header con la direccion nueva](<B2C-26 APP Evidencias/TC-B2C26-APP-037-android-p10-store-locator-del-header-con-la-direccion-nueva.png>)

![Android · Paso 12 — modal con la direccion nueva](<B2C-26 APP Evidencias/TC-B2C26-APP-037-android-p12-modal-con-la-direccion-nueva.png>)

![Android · Estado final](<B2C-26 APP Evidencias/TC-B2C26-APP-037-android.png>)

---

### TC-B2C26-APP-038 - Verificar que al buscar un Plus Code de Google la dirección se agrega sin problemas

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-26-pendientes.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

- v1.0.1
- HG74+86G Las Condes, Chile

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
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

Causa: {DIRECCION_PLUS_CODE} (HG74+86G Las Condes, Chile) no tiene cobertura en el ambiente: tras confirmar la dirección la app muestra 'Aún no llegamos a esta dirección'. La búsqueda del Plus Code, la sugerencia de Google y el prellenado de Región y Comuna sí funcionaron. Acción: cargar un Plus Code con cobertura.

**Evidencia**

![Android · Paso 2 — home con el store locator sin metodo](<B2C-26 APP Evidencias/TC-B2C26-APP-038-android-p02-home-con-el-store-locator-sin-metodo.png>)

![Android · Paso 4 — modal elige tu metodo de entrega](<B2C-26 APP Evidencias/TC-B2C26-APP-038-android-p04-modal-elige-tu-metodo-de-entrega.png>)

![Android · Paso 6 — sugerencia de google para el plus code](<B2C-26 APP Evidencias/TC-B2C26-APP-038-android-p06-sugerencia-de-google-para-el-plus-code.png>)

![Android · Paso 8 — detalles de la direccion con el plus code](<B2C-26 APP Evidencias/TC-B2C26-APP-038-android-p08-detalles-de-la-direccion-con-el-plus-code.png>)

![Android · Estado final](<B2C-26 APP Evidencias/TC-B2C26-APP-038-android.png>)

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
  "suite": "B2C-26 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-26 APP Test Cases.xlsx",
  "title": "Store Locator en la app (Android)",
  "updated_at": "2026-10-26"
 },
 "history": {
  "2026-10-09": [
   "TC-B2C26-APP-008",
   "TC-B2C26-APP-019",
   "TC-B2C26-APP-033"
  ],
  "2026-10-25": [
   "TC-B2C26-APP-017"
  ],
  "2026-10-26": [
   "TC-B2C26-APP-001",
   "TC-B2C26-APP-002",
   "TC-B2C26-APP-004",
   "TC-B2C26-APP-005",
   "TC-B2C26-APP-006",
   "TC-B2C26-APP-007",
   "TC-B2C26-APP-008",
   "TC-B2C26-APP-009",
   "TC-B2C26-APP-010",
   "TC-B2C26-APP-011",
   "TC-B2C26-APP-014",
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
   "TC-B2C26-APP-037",
   "TC-B2C26-APP-038"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-25",
   "expected": "Región muestra las regiones de Chile y Comuna solo las comunas de la región elegida (no es texto libre).",
   "form_factor": "app",
   "id": "TC-B2C26-APP-017",
   "name": "Verificar que los dropdown de Región y Comuna muestran los catálogos de Chile [App] [Guest]",
   "observation": "Android (re-ejecución 25-oct, app v1.0.1): Región lista las regiones de Chile y Comuna es un catálogo, pero la lista de comunas de la Región Metropolitana (38) incluye Machalí, que es de O'Higgins. tests-app/B2C-26.spec.ts:158. Mismo defecto del bug B2C-1164 (DESCARTADO). iOS: no se ejecutó; queda Pendiente.",
   "observed": "Android (re-ejecución 25-oct, app v1.0.1): Región lista las regiones de Chile y Comuna es un catálogo, pero la lista de comunas de la Región Metropolitana (38) incluye Machalí, que es de O'Higgins. tests-app/B2C-26.spec.ts:158. Mismo defecto del bug B2C-1164 (DESCARTADO). iOS: no se ejecutó; queda Pendiente.",
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
     "caption": "Android · Estado final",
     "file": "TC-B2C26-APP-017-android.png"
    }
   ],
   "spec": "tests-app/B2C-26.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario despliega Región.\n8. El sistema lista las regiones de Chile.\n9. El usuario elige \"Región Metropolitana\" y despliega Comuna.\n10. El sistema lista solo las comunas de la Región Metropolitana.",
   "test_data": "- {APP_BUILD} = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Tras el skeleton se muestra la dirección activa marcada (separada de las guardadas), cada dirección guardada con etiqueta, calle, número, complemento, comuna y región, y las opciones de búsqueda Google y \"Activar mi ubicación actual\".",
   "form_factor": "app",
   "id": "TC-B2C26-APP-008",
   "name": "Verificar que el modal del logueado muestra skeleton y luego la dirección activa y las guardadas",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): el modal muestra la dirección activa, las 6 guardadas, el buscador y 'Activar mi ubicación actual'. Nota: el skeleton de carga no pudo comprobarse (dura un instante y no se alcanzó a capturar).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con el store locator",
     "file": "TC-B2C26-APP-008-android-p02-home-con-el-store-locator.png"
    },
    {
     "caption": "Android · Paso 4 — modal con la direccion activa y las guardadas",
     "file": "TC-B2C26-APP-008-android-p04-modal-con-la-direccion-activa-y-las-guardadas.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C26-APP-008-android.png"
    }
   ],
   "spec": "tests-app/B2C-26-logueado.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El header muestra la nueva dirección, el usuario sigue en la PLP y no se pidió PIN ni OTP.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-019",
   "name": "Verificar que elegir una dirección guardada la setea sin PIN ni OTP y mantiene la pantalla",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): Esperado: desde la PLP el usuario toca el Store Locator del header, elige otra dirección guardada y el header muestra la nueva dirección sin PIN ni OTP. Obtenido: la PLP ('Cerdo', 15 productos) solo muestra una barra de búsqueda en el header; no existe el Store Locator, por lo que no se puede abrir el modal ni cambiar la dirección. Bug: B2C-1359.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PLP\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com tiene al menos 2 direcciones guardadas con cobertura y horarios\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — plp",
     "file": "TC-B2C26-APP-019-android-p03-plp.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C26-APP-019-android.png"
    }
   ],
   "spec": "tests-app/B2C-26-logueado.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario navega a una PLP.\n3. El sistema carga la PLP.\n4. El usuario toca el Store Locator del header.\n5. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n6. El usuario toca una dirección guardada distinta de la activa.\n7. El sistema muestra un loader, valida cobertura y SLAs y cierra el modal.",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "En Home, PLP, PDP, resultados de búsqueda y Carro el header muestra la misma dirección activa y no se pide volver a configurarla.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-033",
   "name": "Verificar que la dirección activa se mantiene en el header al navegar por la App",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): Esperado: en Home, PLP, PDP, resultados de búsqueda y Carro el header muestra la misma dirección activa. Obtenido: la Home sí la muestra; la PLP (barra de búsqueda), la PDP (nombre del producto) y los resultados de búsqueda (barra con el término y Cancelar) no muestran el Store Locator. El Carro no se evaluó: con el carro vacío la app no ofrece acceso a él. Bug: B2C-1360.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com tiene una dirección activa",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home",
     "file": "TC-B2C26-APP-033-android-p02-home.png"
    },
    {
     "caption": "Android · Paso 3 — plp",
     "file": "TC-B2C26-APP-033-android-p03-plp.png"
    },
    {
     "caption": "Android · Paso 4 — pdp",
     "file": "TC-B2C26-APP-033-android-p04-pdp.png"
    },
    {
     "caption": "Android · Paso 5 — resultados de busqueda",
     "file": "TC-B2C26-APP-033-android-p05-resultados-de-busqueda.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C26-APP-033-android.png"
    }
   ],
   "spec": "tests-app/B2C-26-logueado.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home con la dirección activa en el Store Locator.\n3. El usuario navega a una PLP, abre una PDP, busca un producto y abre el Carro.\n4. El sistema muestra la misma dirección activa en el Store Locator en cada pantalla, sin solicitar reconfigurarla.",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestran sugerencias en tiempo real y, al tocar una dirección completa, se redirige a la confirmación con PIN (B2C-99).",
   "form_factor": "app",
   "id": "TC-B2C26-APP-001",
   "name": "Verificar que con 3 o más caracteres se sugieren direcciones de Google y una completa lleva al PIN",
   "observed": "Causa: el paso 5 pide escribir 3 o más caracteres de una calle y la columna Test data no declara cuál. Acción: declarar en la fila del TC el token con la calle a buscar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 3 o más caracteres de una calle en \"Calle, dirección o lugar\".\n6. El sistema muestra sugerencias de Google en tiempo real, sin tocar \"Buscar\" en el teclado.\n7. El usuario toca una sugerencia con dirección completa (calle y número).\n8. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99).",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "No se muestran sugerencias ni se registran requests a Google en {HERRAMIENTA_PROXY_APP} y se muestra \"¿No aparece tu dirección?\" + opción \"Agregar\".",
   "form_factor": "app",
   "id": "TC-B2C26-APP-002",
   "name": "Verificar que con menos de 3 caracteres no se muestran sugerencias y se ofrece agregar manualmente",
   "observed": "Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar la herramienta o endpoint de proxy en el Excel de data y avisar para re-ejecutar el caso.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado\n- {HERRAMIENTA_PROXY_APP} registrando el tráfico de la App",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en \"Calle, dirección o lugar\".\n6. El sistema no muestra sugerencias y muestra \"¿No aparece tu dirección?\" + opción \"Agregar\".",
   "test_data": "- v1.0.1 = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Con resultados, \"¿No aparece tu dirección?\" + opción \"Agregar\" aparece como último elemento de la lista.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-004",
   "name": "Verificar que la opción \"Agregar\" aparece al final de la lista también cuando hay resultados",
   "observed": "Causa: el paso 5 pide escribir una calle existente y la columna Test data no declara cuál. Acción: declarar en la fila del TC el token con la calle a buscar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 3 o más caracteres de una calle existente en \"Calle, dirección o lugar\".\n6. El sistema muestra las sugerencias de Google y, después de la última, \"¿No aparece tu dirección?\" + opción \"Agregar\".",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra la opción de ingreso manual y el usuario puede continuar con el formulario \"Dirección manual\".",
   "form_factor": "app",
   "id": "TC-B2C26-APP-005",
   "name": "Verificar que un error de la API de Google ofrece agregar la dirección manualmente",
   "observed": "Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar la herramienta o endpoint de proxy en el Excel de data y avisar para re-ejecutar el caso.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de Google Places (maps.googleapis.com)",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 3 o más caracteres de una calle en \"Calle, dirección o lugar\".\n6. El sistema no muestra sugerencias de Google y muestra la opción \"Agregar dirección manualmente\".\n7. El usuario toca la opción de agregar manualmente.\n8. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").",
   "test_data": "- v1.0.1 = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "En B2C-99 el campo Calle contiene el texto escrito por el usuario y Región y Comuna vienen prellenadas desde Google.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-006",
   "name": "Verificar que un resultado de Google sin calle usa el texto escrito como Calle y continúa al PIN",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, invitado): al elegir 'Providencia' la app abre Detalles de la dirección con 'Providencia, Providencia, Región Metropolitana' (Calle = texto escrito; Comuna y Región prellenadas). Nota: la captura de esa pantalla sale en blanco en el emulador.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con el store locator sin metodo",
     "file": "TC-B2C26-APP-006-android-p02-home-con-el-store-locator-sin-metodo.png"
    },
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C26-APP-006-android-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Android · Paso 8 — detalles de la direccion con la comuna elegida",
     "file": "TC-B2C26-APP-006-android-p08-detalles-de-la-direccion-con-la-comuna-elegida.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C26-APP-006-android.png"
    }
   ],
   "spec": "tests-app/B2C-26-pendientes.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe el nombre de una comuna (ej. \"Providencia\") en \"Calle, dirección o lugar\".\n6. El sistema muestra sugerencias de Google, entre ellas un resultado de tipo comuna.\n7. El usuario toca el resultado de tipo comuna.\n8. El sistema continúa a la confirmación con PIN (B2C-99) con Calle = texto escrito y Región y Comuna prellenadas desde el resultado.",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La dirección activa aparece marcada con el formato: nombre, calle, número (si aplica), complemento (si aplica), comuna y región.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-007",
   "name": "Verificar que el modal del invitado muestra su dirección activa marcada con el formato definido",
   "observed": "Causa: el caso requiere una dirección de despacho seteada desde el Store Locator y la columna Test data no declara cuál. Acción: declarar en la fila del TC el token con la dirección a usar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- En la sesión actual se configuró una dirección de despacho como invitado",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal con \"Despacho a domicilio\" seleccionada y muestra en \"Dirección de Despacho\" la dirección activa marcada.",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra la pantalla de error completa con código de referencia y los 2 botones, y la dirección activa anotada no cambia.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-009",
   "name": "Verificar que un error al cargar los métodos de entrega muestra la pantalla de error con código",
   "observed": "Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar la herramienta o endpoint de proxy en el Excel de data y avisar para re-ejecutar el caso.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com tiene una dirección activa\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de carga de direcciones guardadas",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario anota la dirección activa del header.\n4. El usuario toca el Store Locator del header.\n5. El sistema reemplaza el modal por la pantalla de error \"Ups, algo salió mal\" con el mensaje \"No logramos cargar la información de los métodos de entrega. Intenta otra vez.\", un código de error y los botones \"Reintentar\" y \"Volver al inicio\".",
   "test_data": "- v1.0.1 = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El modal \"Elige tu método de entrega\" se carga con la dirección activa y las direcciones guardadas.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-010",
   "name": "Verificar que \"Reintentar\" vuelve a cargar los métodos de entrega",
   "observed": "Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar la herramienta o endpoint de proxy en el Excel de data y avisar para re-ejecutar el caso.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com tiene direcciones guardadas\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de carga de direcciones guardadas",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra la pantalla de error \"Ups, algo salió mal\".\n5. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en la request de carga de direcciones guardadas y toca \"Reintentar\".\n6. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".",
   "test_data": "- v1.0.1 = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El modal se cierra y el usuario queda en el Home de la App.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-011",
   "name": "Verificar que \"Volver al inicio\" cierra la pantalla de error y regresa al Home",
   "observed": "Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar la herramienta o endpoint de proxy en el Excel de data y avisar para re-ejecutar el caso.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com tiene direcciones guardadas\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de carga de direcciones guardadas",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario navega a una PLP.\n3. El sistema carga la PLP.\n4. El usuario toca el Store Locator del header.\n5. El sistema muestra la pantalla de error \"Ups, algo salió mal\".\n6. El usuario toca \"Volver al inicio\".\n7. El sistema cierra el modal y redirige al Home de la App.",
   "test_data": "- v1.0.1 = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el toast de error y el usuario puede seguir con otro método (búsqueda de Google) o volver a tocar \"Activar mi ubicación actual\".",
   "form_factor": "app",
   "id": "TC-B2C26-APP-014",
   "name": "Verificar que una falla al obtener coordenadas muestra el toast de error y permite reintentar",
   "observed": "Causa: el caso exige un dispositivo sin señal de ubicación y no se cambió el estado del emulador para forzarlo. Acción: ejecutar en un dispositivo o emulador sin ubicación.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado\n- La App tiene concedido el permiso de ubicación\n- Ubicación del dispositivo sin señal: simulador iOS con Features > Location = None / emulador Android sin ubicación",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario toca \"Activar mi ubicación actual\".\n6. El sistema muestra el toast \"No pudimos obtener tu ubicación actual. Inténtalo nuevamente.\" y mantiene el modal abierto.\n7. El usuario escribe 3 o más caracteres en \"Calle, dirección o lugar\".\n8. El sistema muestra sugerencias de Google.",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "En B2C-99 se muestran precargadas Región, Comuna, Calle y Numeración y el PIN queda ubicado sobre esa dirección.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-018",
   "name": "Verificar que continuar desde el formulario manual lleva al PIN con la dirección precargada",
   "observed": "Causa: el paso 7 pide completar Región, Comuna, Dirección y Numeración y la fila no declara los valores. Acción: declarar los valores del formulario en la columna Test data.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario completa Región, Comuna, Dirección y Numeración y toca \"Continuar con detalle de la dirección\".\n8. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el toast de error, el modal vuelve a la lista y la dirección activa sigue siendo la anotada.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-020",
   "name": "Verificar que un error de API al cambiar de dirección muestra toast y mantiene la dirección anterior",
   "observed": "Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar la herramienta o endpoint de proxy en el Excel de data y avisar para re-ejecutar el caso.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com tiene al menos 2 direcciones guardadas\n- Después de abrir el modal, {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de cambio de dirección activa",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario anota la dirección activa del header.\n4. El usuario toca el Store Locator del header.\n5. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n6. El usuario toca una dirección guardada distinta de la activa.\n7. El sistema muestra el modal con la lista de direcciones y el toast \"Lo sentimos, no pudimos cambiar tu dirección. Inténtalo nuevamente.\"",
   "test_data": "- v1.0.1 = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se inicia el flujo Sin cobertura definido en B2C-123.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-021",
   "name": "Verificar que elegir una dirección guardada sin cobertura deriva al flujo Sin cobertura",
   "observed": "Causa: el caso requiere una dirección guardada fuera de la zona de reparto de {COMPRADOR_USER} y la fila no declara cuál. Acción: declarar la dirección guardada sin cobertura.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com tiene una dirección guardada fuera de la zona de reparto actual",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca la dirección guardada sin cobertura.\n6. El sistema muestra un loader y deriva al flujo Sin cobertura (B2C-123).",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se inicia el flujo Sin horarios disponibles definido en B2C-127.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-022",
   "name": "Verificar que una dirección guardada sin horarios y sin carrito deriva a Sin horarios disponibles",
   "observed": "Causa: el caso requiere una dirección guardada con cobertura y sin ventanas horarias y la fila no declara cuál. Acción: declarar la dirección guardada sin ventanas horarias.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com tiene una dirección guardada con cobertura y sin ventanas horarias\n- El carro está vacío",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca la dirección guardada sin horarios disponibles.\n6. El sistema muestra un loader y deriva al flujo Sin horarios disponibles (B2C-127).",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se inicia el flujo definido en B2C-122 (vía B2C-144).",
   "form_factor": "app",
   "id": "TC-B2C26-APP-023",
   "name": "Verificar que elegir una dirección guardada con productos en el carro inicia el flujo de B2C-122",
   "observed": "Causa: el caso requiere una dirección guardada con cobertura y al menos un producto en el carro, y la fila no declara ni la dirección ni el producto. Acción: declarar la dirección y el SKU del carro.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com tiene al menos 2 direcciones guardadas con cobertura\n- El carro tiene al menos un producto",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca una dirección guardada distinta de la activa.\n6. El sistema muestra un loader y inicia el flujo de B2C-122.",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Cada dirección guardada no activa muestra el menú ⋮ y la dirección activa no lo muestra.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-024",
   "name": "Verificar que el menú ⋮ aparece solo en las direcciones guardadas no activas",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): la dirección activa (Calle Uno 23, La Florida) no muestra el menú ⋮ y las 6 direcciones guardadas sí lo muestran.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa",
   "screenshots": [
    {
     "caption": "Android · Paso 4 — modal con la direccion activa y las guardadas",
     "file": "TC-B2C26-APP-024-android-p04-modal-con-la-direccion-activa-y-las-guardadas.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C26-APP-024-android.png"
    }
   ],
   "spec": "tests-app/B2C-26-pendientes.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El modal de confirmación se cierra y la dirección sigue en la lista.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-025",
   "name": "Verificar que \"No gracias\" en la confirmación de eliminar mantiene la dirección",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): 'No gracias' cierra la confirmación '¿Quieres eliminar tu dirección?' y la lista de 6 direcciones queda idéntica.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa",
   "screenshots": [
    {
     "caption": "Android · Paso 4 — modal con las direcciones guardadas",
     "file": "TC-B2C26-APP-025-android-p04-modal-con-las-direcciones-guardadas.png"
    },
    {
     "caption": "Android · Paso 6 — confirmacion de eliminar con aceptar y no gracias",
     "file": "TC-B2C26-APP-025-android-p06-confirmacion-de-eliminar-con-aceptar-y-no-gracias.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C26-APP-025-android.png"
    }
   ],
   "spec": "tests-app/B2C-26-pendientes.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca ⋮ en una dirección no activa y luego \"Eliminar dirección\".\n6. El sistema muestra el modal \"¿Quieres eliminar tu dirección?\" con \"Aceptar\" y \"No gracias\".\n7. El usuario toca \"No gracias\".\n8. El sistema cierra el modal de confirmación.",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La dirección desaparece de la lista y el toast de éxito se cierra solo a los 4 segundos.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-026",
   "name": "Verificar que \"Aceptar\" elimina la dirección y muestra el toast de éxito",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): se elimina 'Calle Uno 23 (10)' con 'Aceptar': desaparece de la lista y aparece el toast 'Tu dirección fue eliminada con éxito.'; 13 s después ya no estaba en pantalla. Nota: el cierre exacto a los 4 s no se midió.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa",
   "screenshots": [
    {
     "caption": "Android · Paso 4 — modal con las direcciones guardadas",
     "file": "TC-B2C26-APP-026-android-p04-modal-con-las-direcciones-guardadas.png"
    },
    {
     "caption": "Android · Paso 6 — confirmacion de eliminar",
     "file": "TC-B2C26-APP-026-android-p06-confirmacion-de-eliminar.png"
    },
    {
     "caption": "Android · Paso 8 — toast de exito tras eliminar",
     "file": "TC-B2C26-APP-026-android-p08-toast-de-exito-tras-eliminar.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C26-APP-026-android.png"
    }
   ],
   "spec": "tests-app/B2C-26-pendientes.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca ⋮ en una dirección no activa y luego \"Eliminar dirección\".\n6. El sistema muestra el modal \"¿Quieres eliminar tu dirección?\".\n7. El usuario toca \"Aceptar\".\n8. El sistema muestra un loader, quita la dirección de la lista, cierra el modal de confirmación y muestra el toast \"Tu dirección fue eliminada con éxito.\".",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el toast de error (se cierra solo con la X) y la dirección sigue en la lista.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-027",
   "name": "Verificar que un error al eliminar muestra el toast de error y la dirección permanece",
   "observed": "Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: el caso exige inducir un error de API y no hay herramienta ni alternativa disponible. Acción: cargar la herramienta o endpoint de proxy en el Excel de data y avisar para re-ejecutar el caso.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com tiene al menos 2 direcciones guardadas y una activa\n- Después de abrir el modal, {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request de eliminación de dirección",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa marcada, la lista de direcciones guardadas, el buscador \"Calle, dirección o lugar\" y \"Activar mi ubicación actual\".\n5. El usuario toca ⋮ en una dirección no activa y luego \"Eliminar dirección\".\n6. El sistema muestra el modal \"¿Quieres eliminar tu dirección?\".\n7. El usuario toca \"Aceptar\".\n8. El sistema muestra un loader y luego el toast \"Lo sentimos, no pudimos eliminar tu dirección. Inténtalo nuevamente.\".",
   "test_data": "- v1.0.1 = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El header muestra ícono de despacho + dirección de la última compra + \"Desde\" + fecha + horario + label de precio o condición de despacho.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-028",
   "name": "Verificar que el header del logueado sin dirección en sesión muestra la de su última compra",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): sin dirección activa en la sesión (datos borrados) el header muestra, tras iniciar sesión, 'Calle Uno 23, La Florida · Desde: Mar 27/10, 09:00 hrs. · $2.990'. Nota: la prueba no distingue si esa dirección proviene de la última compra.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta daunuruco+comprador@avatar-global.com tiene al menos una compra completada\n- Sin dirección activa en la sesión (App recién instalada o con datos borrados)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home sin direccion activa",
     "file": "TC-B2C26-APP-028-android-p02-home-sin-direccion-activa.png"
    },
    {
     "caption": "Android · Paso 6 — store locator del header tras iniciar sesion",
     "file": "TC-B2C26-APP-028-android-p06-store-locator-del-header-tras-iniciar-sesion.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C26-APP-028-android.png"
    }
   ],
   "spec": "tests-app/B2C-26-pendientes.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra en el Store Locator del header la dirección de la última compra completada.",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El header muestra la dirección seteada en la sesión y el modal la muestra como activa.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-029",
   "name": "Verificar que el header del logueado sin historial muestra la dirección seteada en la sesión",
   "observed": "Causa: el paso 3 no declara la dirección a configurar y la precondición pide una cuenta sin historial de compras, que la fila no declara (solo declara {COMPRADOR_USER}). Acción: declarar la cuenta sin historial y la dirección a configurar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com no tiene historial de compras",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario configura una dirección de despacho desde el Store Locator.\n4. El sistema muestra la dirección seteada en el Store Locator del header.\n5. El usuario toca el Store Locator del header.\n6. El sistema abre el modal con la dirección seteada marcada como activa.",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El header muestra ícono de despacho + calle + numeración (si aplica) + comuna + ícono de edición.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-030",
   "name": "Verificar que el header del invitado muestra la dirección de la sesión con el formato definido",
   "observed": "Causa: el caso requiere una dirección de despacho seteada desde el Store Locator y la columna Test data no declara cuál. Acción: declarar en la fila del TC el token con la dirección a usar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario configura una dirección de despacho desde el Store Locator.\n4. El sistema muestra la dirección en el Store Locator del header.",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Tras cerrar y reabrir la App, el header vuelve a \"Elige una forma de entrega\" y la dirección anterior no se muestra.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-031",
   "name": "Verificar que la dirección del invitado no persiste al cerrar y volver a abrir la App",
   "observed": "Causa: el caso requiere una dirección de despacho seteada desde el Store Locator y la columna Test data no declara cuál. Acción: declarar en la fila del TC el token con la dirección a usar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario configura una dirección de despacho desde el Store Locator.\n4. El sistema muestra la dirección en el header.\n5. El usuario cierra la App por completo (la quita de las apps recientes) y la vuelve a abrir.\n6. El sistema carga el Home con \"Elige una forma de entrega\" en el Store Locator.",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se inicia el flujo de asociación de dirección definido en B2C-124.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-032",
   "name": "Verificar que iniciar sesión con dirección de invitado activa inicia el flujo de asociación",
   "observed": "Causa: el paso 3 no declara la dirección a configurar; además {OTP_CODIGO} figura en TBD (código del login con RUT de la v1.0.7), que ya no aplica porque el login vigente es por correo + OTP. Acción: declarar la dirección y actualizar el paso 5 al login por correo.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario configura una dirección de despacho desde el Store Locator.\n4. El sistema muestra la dirección en el header.\n5. El usuario ingresa el RUT daunuruco+comprador@avatar-global.com en el inicio de sesión y toca Iniciar sesión.\n6. El sistema envía un código OTP para validar el inicio de sesión (App v1.0.7).\n7. El usuario ingresa el código OTP recibido.\n8. El sistema autentica al usuario e inicia el flujo de asociación de dirección (B2C-124).",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K\n- {OTP_CODIGO} = TBD (código OTP del login con RUT, v1.0.7)"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El header muestra la dirección de la última compra completada o, si no hay historial, la última dirección seteada.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-034",
   "name": "Verificar que al reiniciar sesión se recupera la dirección de la última compra o la última seteada",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): antes del login el header decía 'Elige una forma de entrega'; después, 'Calle Uno 23, La Florida · Desde: Mar 27/10, 09:00 hrs. · $2.990'.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com tiene una dirección activa",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home antes de iniciar sesion",
     "file": "TC-B2C26-APP-034-android-p02-home-antes-de-iniciar-sesion.png"
    },
    {
     "caption": "Android · Paso 6 — store locator del header tras iniciar sesion",
     "file": "TC-B2C26-APP-034-android-p06-store-locator-del-header-tras-iniciar-sesion.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C26-APP-034-android.png"
    }
   ],
   "spec": "tests-app/B2C-26-pendientes.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario anota la dirección activa del header.\n4. El usuario ingresa el RUT daunuruco+comprador@avatar-global.com en el inicio de sesión y toca Iniciar sesión.\n5. El sistema envía un código OTP para validar el inicio de sesión (App v1.0.7).\n6. El usuario ingresa el código OTP recibido.\n7. El sistema autentica al usuario y muestra una dirección en el Store Locator del header.",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K\n- {OTP_CODIGO} = TBD (código OTP del login con RUT, v1.0.7)"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El campo Dirección acepta \"+\", \"-\" y \"/\" sin error y sin eliminar caracteres, y en B2C-99 la calle se muestra precargada como \"Pasaje Los Aromos 3-A / Lote 5+\".",
   "form_factor": "app",
   "id": "TC-B2C26-APP-035",
   "name": "Verificar que el formulario manual acepta los caracteres especiales +, - y / en la dirección",
   "observed": "Causa: el paso 7 pide elegir una Región y una Comuna con cobertura sin declararlas (solo declara la dirección y el 120). Acción: declarar la Región y la Comuna con cobertura.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario selecciona una Región y una Comuna con cobertura, escribe Pasaje Los Aromos 3-A / Lote 5+ en Dirección y 120 en Numeración.\n8. El sistema mantiene el texto tal como se escribió, sin mensaje de error, y habilita \"Continuar con detalle de la dirección\".\n9. El usuario toca \"Continuar con detalle de la dirección\".\n10. El sistema muestra un loader y redirige a la confirmación con PIN (B2C-99).",
   "test_data": "- v1.0.1 = TBD\n- Pasaje Los Aromos 3-A / Lote 5+ = Pasaje Los Aromos 3-A / Lote 5+"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La dirección nueva queda guardada en el perfil y se muestra con \"S/N\" como numeración en el modal, antes y después de volver a iniciar sesión.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-037",
   "name": "Verificar que una dirección sin numeración se guarda en el perfil con \"S/N\"",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP, {COMPRADOR_USER}): Esperado: la dirección nueva se muestra con 'S/N' como numeración en el modal, antes y después de volver a iniciar sesión. Obtenido: tras confirmar la dirección (con OTP) el modal la muestra como 'Las Condes, Las Condes, Metropolitana', sin numeración y sin 'S/N'. No se verificó la persistencia tras cerrar sesión. Mismo síntoma que B2C-1224. Bug: B2C-1361.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La dirección a ingresar tiene cobertura y horarios disponibles\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Android · Paso 4 — modal del logueado",
     "file": "TC-B2C26-APP-037-android-p04-modal-del-logueado.png"
    },
    {
     "caption": "Android · Paso 7 — region comuna y direccion sin numeracion",
     "file": "TC-B2C26-APP-037-android-p07-region-comuna-y-direccion-sin-numeracion.png"
    },
    {
     "caption": "Android · Paso 8 — detalles de la direccion",
     "file": "TC-B2C26-APP-037-android-p08-detalles-de-la-direccion.png"
    },
    {
     "caption": "Android · Paso 10 — store locator del header con la direccion nueva",
     "file": "TC-B2C26-APP-037-android-p10-store-locator-del-header-con-la-direccion-nueva.png"
    },
    {
     "caption": "Android · Paso 12 — modal con la direccion nueva",
     "file": "TC-B2C26-APP-037-android-p12-modal-con-la-direccion-nueva.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C26-APP-037-android.png"
    }
   ],
   "spec": "tests-app/B2C-26-pendientes.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema muestra el skeleton de carga y luego la dirección activa, las direcciones guardadas y el buscador \"Calle, dirección o lugar\".\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\" con Región* (\"Elegir región\"), Comuna* (\"Elegir comuna\"), Dirección* (\"Calle\") y Numeración (\"Ej. 2160\").\n7. El usuario completa Región, Comuna y Dirección con Metropolitana, Las Condes, Las Condes, deja Numeración vacío y toca \"Continuar con detalle de la dirección\".\n8. El usuario confirma la dirección en B2C-99 y completa el flujo (incluido el OTP de B2C-125 si se solicita) hasta dejarla seteada.\n9. El usuario toca el Store Locator del header y revisa la dirección nueva en la lista.\n10. El usuario cierra sesión, vuelve a iniciar sesión con daunuruco+comprador@avatar-global.com y abre nuevamente el Store Locator.",
   "test_data": "- v1.0.1 = TBD\n- daunuruco+comprador@avatar-global.com = 11.223.344-K\n- Metropolitana, Las Condes, Las Condes = TBD (Región, Comuna y Calle con cobertura, sin numeración)"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Google muestra la sugerencia del Plus Code sin errores; al tocarla se redirige a la confirmación con PIN (B2C-99) con Región Metropolitana y Comuna Las Condes precargadas y el PIN sobre la ubicación del Plus Code; al confirmar, el modal se cierra y el Store Locator del header muestra la dirección seteada, sin mensajes de error.",
   "form_factor": "app",
   "id": "TC-B2C26-APP-038",
   "name": "Verificar que al buscar un Plus Code de Google la dirección se agrega sin problemas",
   "observed": "Causa: {DIRECCION_PLUS_CODE} (HG74+86G Las Condes, Chile) no tiene cobertura en el ambiente: tras confirmar la dirección la app muestra 'Aún no llegamos a esta dirección'. La búsqueda del Plus Code, la sugerencia de Google y el prellenado de Región y Comuna sí funcionaron. Acción: cargar un Plus Code con cobertura.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con el store locator sin metodo",
     "file": "TC-B2C26-APP-038-android-p02-home-con-el-store-locator-sin-metodo.png"
    },
    {
     "caption": "Android · Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C26-APP-038-android-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Android · Paso 6 — sugerencia de google para el plus code",
     "file": "TC-B2C26-APP-038-android-p06-sugerencia-de-google-para-el-plus-code.png"
    },
    {
     "caption": "Android · Paso 8 — detalles de la direccion con el plus code",
     "file": "TC-B2C26-APP-038-android-p08-detalles-de-la-direccion-con-el-plus-code.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C26-APP-038-android.png"
    }
   ],
   "spec": "tests-app/B2C-26-pendientes.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con el Store Locator en el header.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña \"Despacho a domicilio\" seleccionada.\n5. El usuario escribe HG74+86G Las Condes, Chile en \"Calle, dirección o lugar\".\n6. El sistema muestra la sugerencia de Google correspondiente al Plus Code (Las Condes).\n7. El usuario toca la sugerencia.\n8. El sistema redirige a la confirmación de dirección con PIN en el mapa (B2C-99) con la dirección precargada.\n9. El usuario confirma la dirección.\n10. El sistema cierra el modal y actualiza el Store Locator del header.",
   "test_data": "- v1.0.1\n- HG74+86G Las Condes, Chile"
  }
 ]
}
-->
