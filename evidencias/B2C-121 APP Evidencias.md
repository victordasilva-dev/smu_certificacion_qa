# B2C-121 APP - Evidencias QA (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-121 APP |
| Última actualización | 2026-10-29 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-121 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 15 |
| Bloqueado Data | 6 |
| Bloqueado | 3 |
| Rechazado | 1 |
| **Total** | **25** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-29 | 25 | TC-B2C121-APP-001, TC-B2C121-APP-002, TC-B2C121-APP-003, TC-B2C121-APP-004, TC-B2C121-APP-005, TC-B2C121-APP-006, TC-B2C121-APP-007, TC-B2C121-APP-008, TC-B2C121-APP-010, TC-B2C121-APP-011, TC-B2C121-APP-012, TC-B2C121-APP-013, TC-B2C121-APP-014, TC-B2C121-APP-015, TC-B2C121-APP-016, TC-B2C121-APP-017, TC-B2C121-APP-018, TC-B2C121-APP-019, TC-B2C121-APP-020, TC-B2C121-APP-021, TC-B2C121-APP-022, TC-B2C121-APP-023, TC-B2C121-APP-024, TC-B2C121-APP-025, TC-B2C121-APP-026 |

## Detalle por caso de prueba

### TC-B2C121-APP-001 - Verificar que sin tienda de retiro seteada se muestra el buscador, el mapa y el listado de tiendas [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El usuario no tiene tienda de retiro seteada

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.

**Resultado esperado**

Se muestra "Selecciona tu tienda Unimarc", el buscador con placeholder "Ej: dirección, comuna o nombre", el botón "Ir al mapa", el link "Activar mi ubicación actual" y el listado de tiendas con nombre, dirección y radio button.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 5 — store locator en la pestana retiro en tienda](<B2C-121 APP Evidencias/TC-B2C121-APP-001-android-p05-store-locator-en-la-pestana-retiro-en-tienda.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-001-android.png>)

---

### TC-B2C121-APP-002 - Verificar que el listado solo muestra tiendas activas con el flag de retiro en tienda [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- En BM, {TIENDA_SIN_FLAG_RETIRO} tiene el flag de retiro = false y {TIENDA_INACTIVA} tiene Activo = false

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_001} = TBD
- {TIENDA_SIN_FLAG_RETIRO} = TBD
- {TIENDA_INACTIVA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario busca en el listado {TIENDA_SIN_FLAG_RETIRO} y {TIENDA_INACTIVA}.

**Resultado esperado**

{TIENDA_RETIRO_001} aparece en el listado; {TIENDA_SIN_FLAG_RETIRO} y {TIENDA_INACTIVA} no aparecen.

**Resultado obtenido**

Falta dato: {TIENDA_INACTIVA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {TIENDA_INACTIVA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C121-APP-003 - Verificar que con tienda de retiro seteada esta aparece marcada al inicio del listado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- La tienda {TIENDA_RETIRO_001} está seteada como punto de retiro

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_001} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.

**Resultado esperado**

La tienda {TIENDA_RETIRO_001} aparece marcada al inicio del listado y el resto de tiendas a continuación.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}, {TIENDA_RETIRO_001}

**Observación**

Test Data pendiente: {APP_BUILD}, {TIENDA_RETIRO_001} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 6 — listado con la tienda de retiro seteada](<B2C-121 APP Evidencias/TC-B2C121-APP-003-android-p06-listado-con-la-tienda-de-retiro-seteada.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-003-android.png>)

---

### TC-B2C121-APP-004 - Verificar que el buscador filtra las tiendas que coinciden con el texto [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_001} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario escribe el nombre de {TIENDA_RETIRO_001} en el buscador.

**Resultado esperado**

El listado muestra solo las tiendas coincidentes, incluida {TIENDA_RETIRO_001}.

**Resultado obtenido**

Esperado: el listado muestra solo las tiendas coincidentes, incluida {TIENDA_RETIRO_001}. Obtenido: al escribir «Unimarc Las Condes» se muestra «Parece que hoy no encontramos esa tienda que buscas»; con «Las Condes» sí aparece. Bug B2C-1402. spec: tests-app/B2C-121.spec.ts:71

**Observación**

Esperado: el listado muestra solo las tiendas coincidentes, incluida {TIENDA_RETIRO_001}. Obtenido: al escribir «Unimarc Las Condes» se muestra «Parece que hoy no encontramos esa tienda que buscas»; con «Las Condes» sí aparece. Bug B2C-1402. spec: tests-app/B2C-121.spec.ts:71

**Evidencia**

![Android · Paso 7 — listado filtrado por el nombre de la tienda](<B2C-121 APP Evidencias/TC-B2C121-APP-004-android-p07-listado-filtrado-por-el-nombre-de-la-tienda.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-004-android.png>)

---

### TC-B2C121-APP-005 - Verificar que una búsqueda sin coincidencias muestra el mensaje de tienda no encontrada [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {BUSQUEDA_TIENDA_SIN_RESULTADO} = zzzzqqq

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario escribe {BUSQUEDA_TIENDA_SIN_RESULTADO} en el buscador.

**Resultado esperado**

Se muestra una imagen y el mensaje "Parece que hoy no encontramos esa tienda que buscas. Te llevaremos a otra tienda o cambiar el método de entrega."

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 7 — busqueda sin coincidencias](<B2C-121 APP Evidencias/TC-B2C121-APP-005-android-p07-busqueda-sin-coincidencias.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-005-android.png>)

---

### TC-B2C121-APP-006 - Verificar que un error al cargar las tiendas muestra la pantalla de error y Reintentar recarga [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {STORE_LOCATOR_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {STORE_LOCATOR_API_ENDPOINT} = TBD
- {HERRAMIENTA_PROXY_APP} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema muestra la pantalla de error.
7. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en {STORE_LOCATOR_API_ENDPOINT}.
8. El usuario toca "Reintentar".

**Resultado esperado**

Se muestra imagen, "Ups, salió mal. No logramos cargar la información de los métodos de entrega...", código de error, "Reintentar" y "Volver al inicio"; al reintentar sin el error forzado se carga el listado de tiendas.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C121-APP-007 - Verificar que Volver al inicio desde el error de tiendas redirige al Home [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: PLP
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {STORE_LOCATOR_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {STORE_LOCATOR_API_ENDPOINT} = TBD
- {HERRAMIENTA_PROXY_APP} = TBD

**Pasos ejecutados**

1. El usuario abre la App y navega a una PLP.
2. El usuario toca el Store Locator del navbar.
3. El usuario toca la pestaña "Retiro en tienda".
4. El sistema muestra la pantalla de error.
5. El usuario toca "Volver al inicio".

**Resultado esperado**

El usuario es redirigido al Home.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C121-APP-008 - Verificar que Activar mi ubicación sin permisos muestra la solicitud de permiso [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- Permiso de geolocalización no concedido en el sistema operativo

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario toca "Activar mi ubicación actual".

**Resultado esperado**

Se muestra el diálogo de el sistema operativo solicitando permiso de ubicación.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}

**Observación**

Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 8 — tras tocar activar mi ubicacion actual](<B2C-121 APP Evidencias/TC-B2C121-APP-008-android-p08-tras-tocar-activar-mi-ubicacion-actual.png>)

---

### TC-B2C121-APP-010 - Verificar que con permiso concedido las tiendas se ordenan por cercanía y muestran los km [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- Permiso de geolocalización concedido en el sistema operativo

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {RADIO_TIENDAS_KM} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario toca "Activar mi ubicación actual".

**Resultado esperado**

El listado se reordena desde la tienda más cercana, cada tarjeta muestra los KM de distancia y solo se listan tiendas dentro de {RADIO_TIENDAS_KM} km.

**Resultado obtenido**

Al activar la ubicación la app responde «No hay tiendas disponibles cerca de ti». Causa: el celular de pruebas está fuera de Chile, por lo que la app no obtiene una ubicación válida ni calcula distancias a las tiendas. Acción: ejecutar con un dispositivo ubicado dentro de la zona de las tiendas o con la ubicación simulada.

**Observación**

Al activar la ubicación la app responde «No hay tiendas disponibles cerca de ti». Causa: el celular de pruebas está fuera de Chile, por lo que la app no obtiene una ubicación válida ni calcula distancias a las tiendas. Acción: ejecutar con un dispositivo ubicado dentro de la zona de las tiendas o con la ubicación simulada.

**Evidencia**

![Android · Paso 8 — listado tras activar la ubicacion](<B2C-121 APP Evidencias/TC-B2C121-APP-010-android-p08-listado-tras-activar-la-ubicacion.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-010-android.png>)

---

### TC-B2C121-APP-011 - Verificar que al seleccionar una tienda se abre su tarjeta con mapa, distancia y Confirmar tienda [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_001} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.
8. El sistema muestra la tarjeta de información de la tienda.

**Resultado esperado**

La tarjeta muestra nombre, dirección, mapa miniatura y distancia de {TIENDA_RETIRO_001}, con los botones "Ir al mapa" y "Confirmar tienda".

**Resultado obtenido**

La tarjeta muestra nombre, dirección, mapa miniatura y «Confirmar tienda», pero no la distancia. Causa: el celular de pruebas está fuera de Chile, por lo que la app no obtiene una ubicación válida ni calcula distancias a las tiendas. Acción: ejecutar con un dispositivo ubicado dentro de la zona de las tiendas o con la ubicación simulada.

**Observación**

La tarjeta muestra nombre, dirección, mapa miniatura y «Confirmar tienda», pero no la distancia. Causa: el celular de pruebas está fuera de Chile, por lo que la app no obtiene una ubicación válida ni calcula distancias a las tiendas. Acción: ejecutar con un dispositivo ubicado dentro de la zona de las tiendas o con la ubicación simulada.

**Evidencia**

![Android · Paso 8 — tarjeta de la tienda seleccionada](<B2C-121 APP Evidencias/TC-B2C121-APP-011-android-p08-tarjeta-de-la-tienda-seleccionada.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-011-android.png>)

---

### TC-B2C121-APP-012 - Verificar que Ir al mapa muestra los pines de tiendas, un buscador y Volver a la lista [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario toca "Ir al mapa".

**Resultado esperado**

Se carga el mapa con pines de las tiendas habilitadas, un buscador dentro del mapa y el botón "Volver a la lista".

**Resultado obtenido**

Ejecutado en Android: se muestra el mapa con pines y buscador; el botón para volver se llama «Ir a la lista» y no «Volver a la lista».

**Observación**

Ejecutado en Android: se muestra el mapa con pines y buscador; el botón para volver se llama «Ir a la lista» y no «Volver a la lista». iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 6 — mapa de tiendas](<B2C-121 APP Evidencias/TC-B2C121-APP-012-android-p06-mapa-de-tiendas.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-012-android.png>)

---

### TC-B2C121-APP-013 - Verificar que al seleccionar un pin del mapa se muestra la tienda y el botón Confirmar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_001} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario toca "Ir al mapa".
8. El usuario toca el pin de {TIENDA_RETIRO_001}.

**Resultado esperado**

Se muestra nombre, dirección y distancia de {TIENDA_RETIRO_001} y el botón "Confirmar".

**Resultado obtenido**

Al tocar un pin se muestra la tienda con su nombre, dirección y «Confirmar», pero no la distancia. Causa: el celular de pruebas está fuera de Chile, por lo que la app no obtiene una ubicación válida ni calcula distancias a las tiendas. Acción: ejecutar con un dispositivo ubicado dentro de la zona de las tiendas o con la ubicación simulada.

**Observación**

Al tocar un pin se muestra la tienda con su nombre, dirección y «Confirmar», pero no la distancia. Causa: el celular de pruebas está fuera de Chile, por lo que la app no obtiene una ubicación válida ni calcula distancias a las tiendas. Acción: ejecutar con un dispositivo ubicado dentro de la zona de las tiendas o con la ubicación simulada.

**Evidencia**

![Android · Paso 8 — tras tocar un pin del mapa](<B2C-121 APP Evidencias/TC-B2C121-APP-013-android-p08-tras-tocar-un-pin-del-mapa.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-013-android.png>)

---

### TC-B2C121-APP-014 - Verificar que un invitado sin carro confirma una tienda con horarios y queda seteada [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El carro está vacío
- {TIENDA_RETIRO_001} tiene cobertura y SLAs disponibles en Janis

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_001} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.
8. El sistema muestra la tarjeta de información de la tienda.
9. El usuario toca "Confirmar tienda".
10. El sistema muestra un loader.

**Resultado esperado**

La tienda {TIENDA_RETIRO_001} queda seteada como punto de retiro, el sistema regresa a la pantalla anterior y pregunta si desea iniciar sesión.

**Resultado obtenido**

Propuesta aplicada: el invitado confirma sin OTP (la consideración RN-01 permite OTP para invitado según BM) | Test Data pendiente: {APP_BUILD}, {TIENDA_RETIRO_001}

**Observación**

Propuesta aplicada: el invitado confirma sin OTP (la consideración RN-01 permite OTP para invitado según BM) | Test Data pendiente: {APP_BUILD}, {TIENDA_RETIRO_001} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 8 — tras confirmar la tienda](<B2C-121 APP Evidencias/TC-B2C121-APP-014-android-p08-tras-confirmar-la-tienda.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-014-android.png>)

---

### TC-B2C121-APP-015 - Verificar que un invitado que confirma una tienda sin horarios va al flujo Sin horarios [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El carro está vacío

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_SIN_SLA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y toca "Confirmar tienda".

**Resultado esperado**

Se muestra el modal "Por ahora no hay horarios disponibles" (B2C-127).

**Resultado obtenido**

Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C121-APP-016 - Verificar que un invitado con carro que confirma una tienda ve el modal No se te escapen [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El carro contiene {SKU_VALID_001}
- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la activa

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_001} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.
8. El sistema muestra la tarjeta de información de la tienda.
9. El usuario toca "Confirmar tienda".

**Resultado esperado**

Se muestra el modal "Algunos productos podrían agotarse" (B2C-122).

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}, {TIENDA_RETIRO_001}

**Observación**

Test Data pendiente: {APP_BUILD}, {TIENDA_RETIRO_001} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 9 — tras confirmar la tienda con carro](<B2C-121 APP Evidencias/TC-B2C121-APP-016-android-p09-tras-confirmar-la-tienda-con-carro.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-016-android.png>)

---

### TC-B2C121-APP-017 - Verificar que un invitado que confirma una tienda sin cobertura va al flujo Sin cobertura [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_SIN_COBERTURA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_COBERTURA} y toca "Confirmar tienda".

**Resultado esperado**

Se muestra el modal "Aún no llegamos a esta dirección" (B2C-123).

**Resultado obtenido**

Ejecutado en Android: la app muestra el modal «Esta tienda aún no está disponible para retiro» (variante de retiro del flujo Sin cobertura).

**Observación**

Ejecutado en Android: la app muestra el modal «Esta tienda aún no está disponible para retiro» (variante de retiro del flujo Sin cobertura). iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 8 — tras confirmar la tienda sin cobertura](<B2C-121 APP Evidencias/TC-B2C121-APP-017-android-p08-tras-confirmar-la-tienda-sin-cobertura.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-017-android.png>)

---

### TC-B2C121-APP-018 - Verificar que un error al confirmar la tienda muestra el mensaje y mantiene la tienda anterior [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- La tienda {TIENDA_RETIRO_001} está seteada como punto de retiro
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {SETEO_ENTREGA_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SETEO_ENTREGA_API_ENDPOINT} = TBD
- {TIENDA_RETIRO_001} = TBD
- {TIENDA_RETIRO_002} = TBD
- {HERRAMIENTA_PROXY_APP} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_002} y toca "Confirmar tienda".

**Resultado esperado**

Se muestra "Lo sentimos, no pudimos cambiar la tienda de retiro. Inténtalo nuevamente." y {TIENDA_RETIRO_001} permanece activa.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C121-APP-019 - Verificar que un logueado que confirma una tienda debe validar OTP antes de setearla [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_001} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.
8. El sistema muestra la tarjeta de información de la tienda.
9. El usuario toca "Confirmar tienda".
10. El sistema muestra el modal "Autenticación requerida" (B2C-125).
11. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

Se muestra el modal "Autenticación requerida"; tras validar el OTP la tienda {TIENDA_RETIRO_001} queda seteada y el header muestra su ventana de retiro (B2C-144).

**Resultado obtenido**

Ejecutado en Android con el carro vacío: al confirmar la tienda la app pide validar el OTP y, tras validarlo, la tienda queda seteada con su ventana de retiro.

**Observación**

Ejecutado en Android con el carro vacío: al confirmar la tienda la app pide validar el OTP y, tras validarlo, la tienda queda seteada con su ventana de retiro. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 10 — tras validar el otp](<B2C-121 APP Evidencias/TC-B2C121-APP-019-android-p10-tras-validar-el-otp.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-019-android.png>)

---

### TC-B2C121-APP-020 - Verificar que un logueado que valida OTP con una tienda sin cobertura va al flujo Sin cobertura [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_SIN_COBERTURA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_COBERTURA} y toca "Confirmar tienda".
8. El sistema muestra el modal "Autenticación requerida" (B2C-125).
9. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

Se muestra el modal "Aún no llegamos a esta dirección" (B2C-123).

**Resultado obtenido**

Ejecutado en Android: con la tienda sin cobertura la app muestra el modal «Esta tienda aún no está disponible para retiro» sin pedir OTP antes.

**Observación**

Ejecutado en Android: con la tienda sin cobertura la app muestra el modal «Esta tienda aún no está disponible para retiro» sin pedir OTP antes. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 10 — tras validar el otp con la tienda sin cobertura](<B2C-121 APP Evidencias/TC-B2C121-APP-020-android-p10-tras-validar-el-otp-con-la-tienda-sin-cobertura.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-020-android.png>)

---

### TC-B2C121-APP-021 - Verificar que un logueado con carro que valida OTP ve el modal No se te escapen [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001}
- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la activa
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_001} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.
8. El sistema muestra la tarjeta de información de la tienda.
9. El usuario toca "Confirmar tienda".
10. El sistema muestra el modal "Autenticación requerida" (B2C-125).
11. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

Se muestra el modal "Algunos productos podrían agotarse" (B2C-122).

**Resultado obtenido**

Ejecutado en Android: con carro, al confirmar la tienda la app muestra el modal «Algunos productos podrían agotarse»; el OTP no se pide antes del modal.

**Observación**

Ejecutado en Android: con carro, al confirmar la tienda la app muestra el modal «Algunos productos podrían agotarse»; el OTP no se pide antes del modal. iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 10 — tras confirmar la tienda con carro](<B2C-121 APP Evidencias/TC-B2C121-APP-021-android-p10-tras-confirmar-la-tienda-con-carro.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-021-android.png>)

---

### TC-B2C121-APP-022 - Verificar que un logueado sin carro que valida OTP con tienda sin horarios va a Sin horarios [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_SIN_SLA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y toca "Confirmar tienda".
8. El sistema muestra el modal "Autenticación requerida" (B2C-125).
9. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

Se muestra el modal "Por ahora no hay horarios disponibles" (B2C-127).

**Resultado obtenido**

Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C121-APP-023 - Verificar que tras confirmar la tienda el header del logueado muestra tienda, ventana y Gratis [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_001} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.
8. El sistema muestra la tarjeta de información de la tienda.
9. El usuario toca "Confirmar tienda".
10. El sistema muestra el modal "Autenticación requerida" (B2C-125).
11. El usuario ingresa el código OTP recibido y presiona "Continuar".
12. El usuario revisa el header.

**Resultado esperado**

El header muestra el nombre de {TIENDA_RETIRO_001}, la próxima ventana de retiro disponible y el chip "Gratis" en verde.

**Resultado obtenido**

Ejecutado en Android: el header muestra el nombre de la tienda confirmada en 019, la próxima ventana de retiro y el chip «Gratis».

**Observación**

Ejecutado en Android: el header muestra el nombre de la tienda confirmada en 019, la próxima ventana de retiro y el chip «Gratis». iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 8 — header con la tienda de retiro confirmada](<B2C-121 APP Evidencias/TC-B2C121-APP-023-android-p08-header-con-la-tienda-de-retiro-confirmada.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-023-android.png>)

---

### TC-B2C121-APP-024 - Verificar que tras confirmar la tienda el header del invitado muestra tienda, ventana, Gratis y login [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home
- El carro está vacío

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_001} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.
8. El sistema muestra la tarjeta de información de la tienda.
9. El usuario toca "Confirmar tienda".
10. El usuario revisa el header.

**Resultado esperado**

El header muestra el nombre de {TIENDA_RETIRO_001}, la próxima ventana de retiro y el chip "Gratis", y se ofrece la opción de iniciar sesión.

**Resultado obtenido**

Test Data pendiente: {APP_BUILD}, {TIENDA_RETIRO_001}

**Observación**

Test Data pendiente: {APP_BUILD}, {TIENDA_RETIRO_001} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 8 — header tras confirmar la tienda](<B2C-121 APP Evidencias/TC-B2C121-APP-024-android-p08-header-tras-confirmar-la-tienda.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-024-android.png>)

---

### TC-B2C121-APP-025 - Verificar que al cambiar desde Despacho a domicilio sin tienda previa se muestra la pantalla inicial de Retiro en tienda [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Despacho a domicilio activo con la dirección {DIRECCION_DESPACHO_001}
- El usuario nunca ha seteado una tienda de retiro (sin tienda de retiro previa)

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator con la pestaña Despacho a domicilio activa y {DIRECCION_DESPACHO_001}.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.

**Resultado esperado**

La pestaña Retiro en tienda queda activa y se muestra "Selecciona tu tienda Unimarc", el buscador con placeholder "Ej: dirección, comuna o nombre", el botón "Ir al mapa" a la derecha del buscador, el link "Activar mi ubicación actual" debajo del buscador y el listado de tiendas activas con flag de retiro en tienda (nombre, dirección y radio button), sin ninguna tienda marcada como seteada; el método activo sigue siendo despacho a {DIRECCION_DESPACHO_001} mientras no se confirme una tienda.

**Resultado obtenido**

Escenario solicitado por Camilo Donoso (Jira, 06-10). Que el despacho siga activo hasta confirmar una tienda es esperado derivado del flujo (CA11); confirmar con AF. Test Data pendiente: {APP_BUILD}

**Observación**

Escenario solicitado por Camilo Donoso (Jira, 06-10). Que el despacho siga activo hasta confirmar una tienda es esperado derivado del flujo (CA11); confirmar con AF. Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 5 — pestana retiro en tienda del logueado](<B2C-121 APP Evidencias/TC-B2C121-APP-025-android-p05-pestana-retiro-en-tienda-del-logueado.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-025-android.png>)

---

### TC-B2C121-APP-026 - Verificar que al acceder por primera vez al Store Locator en modo Retiro en tienda se muestra la pantalla inicial [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-121.spec.ts |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {SIN_DIRECCION_USER} / {SIN_DIRECCION_PASSWORD}, sin direcciones ni tiendas guardadas
- Sin dirección ni tienda seteada en el Store Locator

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {SIN_DIRECCION_USER}
- {SIN_DIRECCION_PASSWORD}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} (instalación nueva o con datos de la App borrados) e inicia sesión con {SIN_DIRECCION_USER}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el Store Locator sin método de entrega seteado.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.

**Resultado esperado**

La pestaña Retiro en tienda queda activa y se muestra "Selecciona tu tienda Unimarc", el buscador con placeholder "Ej: dirección, comuna o nombre", el botón "Ir al mapa" a la derecha del buscador, el link "Activar mi ubicación actual" debajo del buscador y el listado de tiendas activas con flag de retiro en tienda (nombre, dirección y radio button), sin ninguna tienda marcada como seteada.

**Resultado obtenido**

Escenario solicitado por Camilo Donoso (Jira, 06-10). D/M/APP-001 valida la misma pantalla sin especificar la ruta de entrada. Test Data pendiente: {APP_BUILD}

**Observación**

Escenario solicitado por Camilo Donoso (Jira, 06-10). D/M/APP-001 valida la misma pantalla sin especificar la ruta de entrada. Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).

**Evidencia**

![Android · Paso 5 — pestana retiro en tienda de la cuenta sin direcciones](<B2C-121 APP Evidencias/TC-B2C121-APP-026-android-p05-pestana-retiro-en-tienda-de-la-cuenta-sin-direcciones.png>)

![Android · Estado final](<B2C-121 APP Evidencias/TC-B2C121-APP-026-android.png>)

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
  "suite": "B2C-121 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-121 APP Test Cases.xlsx",
  "title": "B2C-121 APP - Evidencias QA (Android)",
  "updated_at": "2026-10-29"
 },
 "history": {
  "2026-10-29": [
   "TC-B2C121-APP-001",
   "TC-B2C121-APP-002",
   "TC-B2C121-APP-003",
   "TC-B2C121-APP-004",
   "TC-B2C121-APP-005",
   "TC-B2C121-APP-006",
   "TC-B2C121-APP-007",
   "TC-B2C121-APP-008",
   "TC-B2C121-APP-010",
   "TC-B2C121-APP-011",
   "TC-B2C121-APP-012",
   "TC-B2C121-APP-013",
   "TC-B2C121-APP-014",
   "TC-B2C121-APP-015",
   "TC-B2C121-APP-016",
   "TC-B2C121-APP-017",
   "TC-B2C121-APP-018",
   "TC-B2C121-APP-019",
   "TC-B2C121-APP-020",
   "TC-B2C121-APP-021",
   "TC-B2C121-APP-022",
   "TC-B2C121-APP-023",
   "TC-B2C121-APP-024",
   "TC-B2C121-APP-025",
   "TC-B2C121-APP-026"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra \"Selecciona tu tienda Unimarc\", el buscador con placeholder \"Ej: dirección, comuna o nombre\", el botón \"Ir al mapa\", el link \"Activar mi ubicación actual\" y el listado de tiendas con nombre, dirección y radio button.",
   "form_factor": "app",
   "id": "TC-B2C121-APP-001",
   "name": "Verificar que sin tienda de retiro seteada se muestra el buscador, el mapa y el listado de tiendas [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El usuario no tiene tienda de retiro seteada",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — store locator en la pestana retiro en tienda",
     "file": "TC-B2C121-APP-001-android-p05-store-locator-en-la-pestana-retiro-en-tienda.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{TIENDA_RETIRO_001} aparece en el listado; {TIENDA_SIN_FLAG_RETIRO} y {TIENDA_INACTIVA} no aparecen.",
   "form_factor": "app",
   "id": "TC-B2C121-APP-002",
   "name": "Verificar que el listado solo muestra tiendas activas con el flag de retiro en tienda [App] [Guest]",
   "observation": "Falta dato: {TIENDA_INACTIVA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {TIENDA_INACTIVA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- En BM, {TIENDA_SIN_FLAG_RETIRO} tiene el flag de retiro = false y {TIENDA_INACTIVA} tiene Activo = false",
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario busca en el listado {TIENDA_SIN_FLAG_RETIRO} y {TIENDA_INACTIVA}.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD\n- {TIENDA_SIN_FLAG_RETIRO} = TBD\n- {TIENDA_INACTIVA} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La tienda {TIENDA_RETIRO_001} aparece marcada al inicio del listado y el resto de tiendas a continuación.",
   "form_factor": "app",
   "id": "TC-B2C121-APP-003",
   "name": "Verificar que con tienda de retiro seteada esta aparece marcada al inicio del listado [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD}, {TIENDA_RETIRO_001} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}, {TIENDA_RETIRO_001}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- La tienda {TIENDA_RETIRO_001} está seteada como punto de retiro",
   "screenshots": [
    {
     "caption": "Android · Paso 6 — listado con la tienda de retiro seteada",
     "file": "TC-B2C121-APP-003-android-p06-listado-con-la-tienda-de-retiro-seteada.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El listado muestra solo las tiendas coincidentes, incluida {TIENDA_RETIRO_001}.",
   "form_factor": "app",
   "id": "TC-B2C121-APP-004",
   "name": "Verificar que el buscador filtra las tiendas que coinciden con el texto [App] [Guest]",
   "observation": "Esperado: el listado muestra solo las tiendas coincidentes, incluida {TIENDA_RETIRO_001}. Obtenido: al escribir «Unimarc Las Condes» se muestra «Parece que hoy no encontramos esa tienda que buscas»; con «Las Condes» sí aparece. Bug B2C-1402. spec: tests-app/B2C-121.spec.ts:71",
   "observed": "Esperado: el listado muestra solo las tiendas coincidentes, incluida {TIENDA_RETIRO_001}. Obtenido: al escribir «Unimarc Las Condes» se muestra «Parece que hoy no encontramos esa tienda que buscas»; con «Las Condes» sí aparece. Bug B2C-1402. spec: tests-app/B2C-121.spec.ts:71",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Android · Paso 7 — listado filtrado por el nombre de la tienda",
     "file": "TC-B2C121-APP-004-android-p07-listado-filtrado-por-el-nombre-de-la-tienda.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-004-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario escribe el nombre de {TIENDA_RETIRO_001} en el buscador.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra una imagen y el mensaje \"Parece que hoy no encontramos esa tienda que buscas. Te llevaremos a otra tienda o cambiar el método de entrega.\"",
   "form_factor": "app",
   "id": "TC-B2C121-APP-005",
   "name": "Verificar que una búsqueda sin coincidencias muestra el mensaje de tienda no encontrada [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Android · Paso 7 — busqueda sin coincidencias",
     "file": "TC-B2C121-APP-005-android-p07-busqueda-sin-coincidencias.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario escribe {BUSQUEDA_TIENDA_SIN_RESULTADO} en el buscador.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {BUSQUEDA_TIENDA_SIN_RESULTADO} = zzzzqqq"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra imagen, \"Ups, salió mal. No logramos cargar la información de los métodos de entrega...\", código de error, \"Reintentar\" y \"Volver al inicio\"; al reintentar sin el error forzado se carga el listado de tiendas.",
   "form_factor": "app",
   "id": "TC-B2C121-APP-006",
   "name": "Verificar que un error al cargar las tiendas muestra la pantalla de error y Reintentar recarga [App] [Guest]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {STORE_LOCATOR_API_ENDPOINT}",
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema muestra la pantalla de error.\n7. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en {STORE_LOCATOR_API_ENDPOINT}.\n8. El usuario toca \"Reintentar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {STORE_LOCATOR_API_ENDPOINT} = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El usuario es redirigido al Home.",
   "form_factor": "app",
   "id": "TC-B2C121-APP-007",
   "name": "Verificar que Volver al inicio desde el error de tiendas redirige al Home [App] [Guest]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: PLP\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {STORE_LOCATOR_API_ENDPOINT}",
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App y navega a una PLP.\n2. El usuario toca el Store Locator del navbar.\n3. El usuario toca la pestaña \"Retiro en tienda\".\n4. El sistema muestra la pantalla de error.\n5. El usuario toca \"Volver al inicio\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {STORE_LOCATOR_API_ENDPOINT} = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el diálogo de el sistema operativo solicitando permiso de ubicación.",
   "form_factor": "app",
   "id": "TC-B2C121-APP-008",
   "name": "Verificar que Activar mi ubicación sin permisos muestra la solicitud de permiso [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- Permiso de geolocalización no concedido en el sistema operativo",
   "screenshots": [
    {
     "caption": "Android · Paso 8 — tras tocar activar mi ubicacion actual",
     "file": "TC-B2C121-APP-008-android-p08-tras-tocar-activar-mi-ubicacion-actual.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario toca \"Activar mi ubicación actual\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El listado se reordena desde la tienda más cercana, cada tarjeta muestra los KM de distancia y solo se listan tiendas dentro de {RADIO_TIENDAS_KM} km.",
   "form_factor": "app",
   "id": "TC-B2C121-APP-010",
   "name": "Verificar que con permiso concedido las tiendas se ordenan por cercanía y muestran los km [App] [Guest]",
   "observation": "Al activar la ubicación la app responde «No hay tiendas disponibles cerca de ti». Causa: el celular de pruebas está fuera de Chile, por lo que la app no obtiene una ubicación válida ni calcula distancias a las tiendas. Acción: ejecutar con un dispositivo ubicado dentro de la zona de las tiendas o con la ubicación simulada.",
   "observed": "Al activar la ubicación la app responde «No hay tiendas disponibles cerca de ti». Causa: el celular de pruebas está fuera de Chile, por lo que la app no obtiene una ubicación válida ni calcula distancias a las tiendas. Acción: ejecutar con un dispositivo ubicado dentro de la zona de las tiendas o con la ubicación simulada.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- Permiso de geolocalización concedido en el sistema operativo",
   "screenshots": [
    {
     "caption": "Android · Paso 8 — listado tras activar la ubicacion",
     "file": "TC-B2C121-APP-010-android-p08-listado-tras-activar-la-ubicacion.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-010-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario toca \"Activar mi ubicación actual\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {RADIO_TIENDAS_KM} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La tarjeta muestra nombre, dirección, mapa miniatura y distancia de {TIENDA_RETIRO_001}, con los botones \"Ir al mapa\" y \"Confirmar tienda\".",
   "form_factor": "app",
   "id": "TC-B2C121-APP-011",
   "name": "Verificar que al seleccionar una tienda se abre su tarjeta con mapa, distancia y Confirmar tienda [App] [Guest]",
   "observation": "La tarjeta muestra nombre, dirección, mapa miniatura y «Confirmar tienda», pero no la distancia. Causa: el celular de pruebas está fuera de Chile, por lo que la app no obtiene una ubicación válida ni calcula distancias a las tiendas. Acción: ejecutar con un dispositivo ubicado dentro de la zona de las tiendas o con la ubicación simulada.",
   "observed": "La tarjeta muestra nombre, dirección, mapa miniatura y «Confirmar tienda», pero no la distancia. Causa: el celular de pruebas está fuera de Chile, por lo que la app no obtiene una ubicación válida ni calcula distancias a las tiendas. Acción: ejecutar con un dispositivo ubicado dentro de la zona de las tiendas o con la ubicación simulada.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Android · Paso 8 — tarjeta de la tienda seleccionada",
     "file": "TC-B2C121-APP-011-android-p08-tarjeta-de-la-tienda-seleccionada.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-011-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.\n8. El sistema muestra la tarjeta de información de la tienda.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se carga el mapa con pines de las tiendas habilitadas, un buscador dentro del mapa y el botón \"Volver a la lista\".",
   "form_factor": "app",
   "id": "TC-B2C121-APP-012",
   "name": "Verificar que Ir al mapa muestra los pines de tiendas, un buscador y Volver a la lista [App] [Guest]",
   "observation": "Ejecutado en Android: se muestra el mapa con pines y buscador; el botón para volver se llama «Ir a la lista» y no «Volver a la lista». iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: se muestra el mapa con pines y buscador; el botón para volver se llama «Ir a la lista» y no «Volver a la lista».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Android · Paso 6 — mapa de tiendas",
     "file": "TC-B2C121-APP-012-android-p06-mapa-de-tiendas.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-012-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario toca \"Ir al mapa\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra nombre, dirección y distancia de {TIENDA_RETIRO_001} y el botón \"Confirmar\".",
   "form_factor": "app",
   "id": "TC-B2C121-APP-013",
   "name": "Verificar que al seleccionar un pin del mapa se muestra la tienda y el botón Confirmar [App] [Guest]",
   "observation": "Al tocar un pin se muestra la tienda con su nombre, dirección y «Confirmar», pero no la distancia. Causa: el celular de pruebas está fuera de Chile, por lo que la app no obtiene una ubicación válida ni calcula distancias a las tiendas. Acción: ejecutar con un dispositivo ubicado dentro de la zona de las tiendas o con la ubicación simulada.",
   "observed": "Al tocar un pin se muestra la tienda con su nombre, dirección y «Confirmar», pero no la distancia. Causa: el celular de pruebas está fuera de Chile, por lo que la app no obtiene una ubicación válida ni calcula distancias a las tiendas. Acción: ejecutar con un dispositivo ubicado dentro de la zona de las tiendas o con la ubicación simulada.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Android · Paso 8 — tras tocar un pin del mapa",
     "file": "TC-B2C121-APP-013-android-p08-tras-tocar-un-pin-del-mapa.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-013-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario toca \"Ir al mapa\".\n8. El usuario toca el pin de {TIENDA_RETIRO_001}.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La tienda {TIENDA_RETIRO_001} queda seteada como punto de retiro, el sistema regresa a la pantalla anterior y pregunta si desea iniciar sesión.",
   "form_factor": "app",
   "id": "TC-B2C121-APP-014",
   "name": "Verificar que un invitado sin carro confirma una tienda con horarios y queda seteada [App] [Guest]",
   "observation": "Propuesta aplicada: el invitado confirma sin OTP (la consideración RN-01 permite OTP para invitado según BM) | Test Data pendiente: {APP_BUILD}, {TIENDA_RETIRO_001} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Propuesta aplicada: el invitado confirma sin OTP (la consideración RN-01 permite OTP para invitado según BM) | Test Data pendiente: {APP_BUILD}, {TIENDA_RETIRO_001}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El carro está vacío\n- {TIENDA_RETIRO_001} tiene cobertura y SLAs disponibles en Janis",
   "screenshots": [
    {
     "caption": "Android · Paso 8 — tras confirmar la tienda",
     "file": "TC-B2C121-APP-014-android-p08-tras-confirmar-la-tienda.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-014-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.\n8. El sistema muestra la tarjeta de información de la tienda.\n9. El usuario toca \"Confirmar tienda\".\n10. El sistema muestra un loader.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el modal \"Por ahora no hay horarios disponibles\" (B2C-127).",
   "form_factor": "app",
   "id": "TC-B2C121-APP-015",
   "name": "Verificar que un invitado que confirma una tienda sin horarios va al flujo Sin horarios [App] [Guest]",
   "observation": "Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El carro está vacío",
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y toca \"Confirmar tienda\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_SIN_SLA} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el modal \"Algunos productos podrían agotarse\" (B2C-122).",
   "form_factor": "app",
   "id": "TC-B2C121-APP-016",
   "name": "Verificar que un invitado con carro que confirma una tienda ve el modal No se te escapen [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD}, {TIENDA_RETIRO_001} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}, {TIENDA_RETIRO_001}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El carro contiene {SKU_VALID_001}\n- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la activa",
   "screenshots": [
    {
     "caption": "Android · Paso 9 — tras confirmar la tienda con carro",
     "file": "TC-B2C121-APP-016-android-p09-tras-confirmar-la-tienda-con-carro.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-016-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.\n8. El sistema muestra la tarjeta de información de la tienda.\n9. El usuario toca \"Confirmar tienda\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el modal \"Aún no llegamos a esta dirección\" (B2C-123).",
   "form_factor": "app",
   "id": "TC-B2C121-APP-017",
   "name": "Verificar que un invitado que confirma una tienda sin cobertura va al flujo Sin cobertura [App] [Guest]",
   "observation": "Ejecutado en Android: la app muestra el modal «Esta tienda aún no está disponible para retiro» (variante de retiro del flujo Sin cobertura). iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: la app muestra el modal «Esta tienda aún no está disponible para retiro» (variante de retiro del flujo Sin cobertura).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Android · Paso 8 — tras confirmar la tienda sin cobertura",
     "file": "TC-B2C121-APP-017-android-p08-tras-confirmar-la-tienda-sin-cobertura.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-017-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_COBERTURA} y toca \"Confirmar tienda\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_SIN_COBERTURA} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra \"Lo sentimos, no pudimos cambiar la tienda de retiro. Inténtalo nuevamente.\" y {TIENDA_RETIRO_001} permanece activa.",
   "form_factor": "app",
   "id": "TC-B2C121-APP-018",
   "name": "Verificar que un error al confirmar la tienda muestra el mensaje y mantiene la tienda anterior [App] [Guest]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- La tienda {TIENDA_RETIRO_001} está seteada como punto de retiro\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {SETEO_ENTREGA_API_ENDPOINT}",
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_002} y toca \"Confirmar tienda\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SETEO_ENTREGA_API_ENDPOINT} = TBD\n- {TIENDA_RETIRO_001} = TBD\n- {TIENDA_RETIRO_002} = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el modal \"Autenticación requerida\"; tras validar el OTP la tienda {TIENDA_RETIRO_001} queda seteada y el header muestra su ventana de retiro (B2C-144).",
   "form_factor": "app",
   "id": "TC-B2C121-APP-019",
   "name": "Verificar que un logueado que confirma una tienda debe validar OTP antes de setearla [App] [Logueado]",
   "observation": "Ejecutado en Android con el carro vacío: al confirmar la tienda la app pide validar el OTP y, tras validarlo, la tienda queda seteada con su ventana de retiro. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android con el carro vacío: al confirmar la tienda la app pide validar el OTP y, tras validarlo, la tienda queda seteada con su ventana de retiro.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 10 — tras validar el otp",
     "file": "TC-B2C121-APP-019-android-p10-tras-validar-el-otp.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-019-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.\n8. El sistema muestra la tarjeta de información de la tienda.\n9. El usuario toca \"Confirmar tienda\".\n10. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n11. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el modal \"Aún no llegamos a esta dirección\" (B2C-123).",
   "form_factor": "app",
   "id": "TC-B2C121-APP-020",
   "name": "Verificar que un logueado que valida OTP con una tienda sin cobertura va al flujo Sin cobertura [App] [Logueado]",
   "observation": "Ejecutado en Android: con la tienda sin cobertura la app muestra el modal «Esta tienda aún no está disponible para retiro» sin pedir OTP antes. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: con la tienda sin cobertura la app muestra el modal «Esta tienda aún no está disponible para retiro» sin pedir OTP antes.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 10 — tras validar el otp con la tienda sin cobertura",
     "file": "TC-B2C121-APP-020-android-p10-tras-validar-el-otp-con-la-tienda-sin-cobertura.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-020-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_COBERTURA} y toca \"Confirmar tienda\".\n8. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n9. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_SIN_COBERTURA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el modal \"Algunos productos podrían agotarse\" (B2C-122).",
   "form_factor": "app",
   "id": "TC-B2C121-APP-021",
   "name": "Verificar que un logueado con carro que valida OTP ve el modal No se te escapen [App] [Logueado]",
   "observation": "Ejecutado en Android: con carro, al confirmar la tienda la app muestra el modal «Algunos productos podrían agotarse»; el OTP no se pide antes del modal. iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: con carro, al confirmar la tienda la app muestra el modal «Algunos productos podrían agotarse»; el OTP no se pide antes del modal.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001}\n- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la activa\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 10 — tras confirmar la tienda con carro",
     "file": "TC-B2C121-APP-021-android-p10-tras-confirmar-la-tienda-con-carro.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-021-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.\n8. El sistema muestra la tarjeta de información de la tienda.\n9. El usuario toca \"Confirmar tienda\".\n10. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n11. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el modal \"Por ahora no hay horarios disponibles\" (B2C-127).",
   "form_factor": "app",
   "id": "TC-B2C121-APP-022",
   "name": "Verificar que un logueado sin carro que valida OTP con tienda sin horarios va a Sin horarios [App] [Logueado]",
   "observation": "Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {TIENDA_RETIRO_SIN_SLA} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y toca \"Confirmar tienda\".\n8. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n9. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_SIN_SLA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El header muestra el nombre de {TIENDA_RETIRO_001}, la próxima ventana de retiro disponible y el chip \"Gratis\" en verde.",
   "form_factor": "app",
   "id": "TC-B2C121-APP-023",
   "name": "Verificar que tras confirmar la tienda el header del logueado muestra tienda, ventana y Gratis [App] [Logueado]",
   "observation": "Ejecutado en Android: el header muestra el nombre de la tienda confirmada en 019, la próxima ventana de retiro y el chip «Gratis». iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Ejecutado en Android: el header muestra el nombre de la tienda confirmada en 019, la próxima ventana de retiro y el chip «Gratis».",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "screenshots": [
    {
     "caption": "Android · Paso 8 — header con la tienda de retiro confirmada",
     "file": "TC-B2C121-APP-023-android-p08-header-con-la-tienda-de-retiro-confirmada.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-023-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.\n8. El sistema muestra la tarjeta de información de la tienda.\n9. El usuario toca \"Confirmar tienda\".\n10. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n11. El usuario ingresa el código OTP recibido y presiona \"Continuar\".\n12. El usuario revisa el header.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El header muestra el nombre de {TIENDA_RETIRO_001}, la próxima ventana de retiro y el chip \"Gratis\", y se ofrece la opción de iniciar sesión.",
   "form_factor": "app",
   "id": "TC-B2C121-APP-024",
   "name": "Verificar que tras confirmar la tienda el header del invitado muestra tienda, ventana, Gratis y login [App] [Guest]",
   "observation": "Test Data pendiente: {APP_BUILD}, {TIENDA_RETIRO_001} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Test Data pendiente: {APP_BUILD}, {TIENDA_RETIRO_001}",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Android · Paso 8 — header tras confirmar la tienda",
     "file": "TC-B2C121-APP-024-android-p08-header-tras-confirmar-la-tienda.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-024-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.\n8. El sistema muestra la tarjeta de información de la tienda.\n9. El usuario toca \"Confirmar tienda\".\n10. El usuario revisa el header.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La pestaña Retiro en tienda queda activa y se muestra \"Selecciona tu tienda Unimarc\", el buscador con placeholder \"Ej: dirección, comuna o nombre\", el botón \"Ir al mapa\" a la derecha del buscador, el link \"Activar mi ubicación actual\" debajo del buscador y el listado de tiendas activas con flag de retiro en tienda (nombre, dirección y radio button), sin ninguna tienda marcada como seteada; el método activo sigue siendo despacho a {DIRECCION_DESPACHO_001} mientras no se confirme una tienda.",
   "form_factor": "app",
   "id": "TC-B2C121-APP-025",
   "name": "Verificar que al cambiar desde Despacho a domicilio sin tienda previa se muestra la pantalla inicial de Retiro en tienda [App] [Logueado]",
   "observation": "Escenario solicitado por Camilo Donoso (Jira, 06-10). Que el despacho siga activo hasta confirmar una tienda es esperado derivado del flujo (CA11); confirmar con AF. Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Escenario solicitado por Camilo Donoso (Jira, 06-10). Que el despacho siga activo hasta confirmar una tienda es esperado derivado del flujo (CA11); confirmar con AF. Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Despacho a domicilio activo con la dirección {DIRECCION_DESPACHO_001}\n- El usuario nunca ha seteado una tienda de retiro (sin tienda de retiro previa)",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — pestana retiro en tienda del logueado",
     "file": "TC-B2C121-APP-025-android-p05-pestana-retiro-en-tienda-del-logueado.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-025-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator con la pestaña Despacho a domicilio activa y {DIRECCION_DESPACHO_001}.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La pestaña Retiro en tienda queda activa y se muestra \"Selecciona tu tienda Unimarc\", el buscador con placeholder \"Ej: dirección, comuna o nombre\", el botón \"Ir al mapa\" a la derecha del buscador, el link \"Activar mi ubicación actual\" debajo del buscador y el listado de tiendas activas con flag de retiro en tienda (nombre, dirección y radio button), sin ninguna tienda marcada como seteada.",
   "form_factor": "app",
   "id": "TC-B2C121-APP-026",
   "name": "Verificar que al acceder por primera vez al Store Locator en modo Retiro en tienda se muestra la pantalla inicial [App] [Logueado]",
   "observation": "Escenario solicitado por Camilo Donoso (Jira, 06-10). D/M/APP-001 valida la misma pantalla sin especificar la ruta de entrada. Test Data pendiente: {APP_BUILD} iOS: pendiente (falta MOBILENEXT_API_KEY).",
   "observed": "Escenario solicitado por Camilo Donoso (Jira, 06-10). D/M/APP-001 valida la misma pantalla sin especificar la ruta de entrada. Test Data pendiente: {APP_BUILD}",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {SIN_DIRECCION_USER} / {SIN_DIRECCION_PASSWORD}, sin direcciones ni tiendas guardadas\n- Sin dirección ni tienda seteada en el Store Locator",
   "screenshots": [
    {
     "caption": "Android · Paso 5 — pestana retiro en tienda de la cuenta sin direcciones",
     "file": "TC-B2C121-APP-026-android-p05-pestana-retiro-en-tienda-de-la-cuenta-sin-direcciones.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C121-APP-026-android.png"
    }
   ],
   "spec": "tests-app/B2C-121.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} (instalación nueva o con datos de la App borrados) e inicia sesión con {SIN_DIRECCION_USER}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el Store Locator sin método de entrega seteado.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {SIN_DIRECCION_USER}\n- {SIN_DIRECCION_PASSWORD}"
  }
 ]
}
-->
