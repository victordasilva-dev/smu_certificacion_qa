# B2C-121 - Store Locator: Retiro en tienda - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-121 |
| Última actualización | 2026-10-27 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-121 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 24 |
| Bloqueado Data | 10 |
| Rechazado | 8 |
| **Total** | **42** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-27 | 42 | TC-B2C121-D-001, TC-B2C121-D-002, TC-B2C121-D-003, TC-B2C121-D-004, TC-B2C121-D-005, TC-B2C121-D-006, TC-B2C121-D-007, TC-B2C121-D-008, TC-B2C121-D-009, TC-B2C121-D-010, TC-B2C121-D-011, TC-B2C121-D-012, TC-B2C121-D-013, TC-B2C121-D-014, TC-B2C121-D-015, TC-B2C121-D-016, TC-B2C121-D-017, TC-B2C121-D-021, TC-B2C121-D-023, TC-B2C121-D-024, TC-B2C121-D-025, TC-B2C121-M-001, TC-B2C121-M-002, TC-B2C121-M-003, TC-B2C121-M-004, TC-B2C121-M-005, TC-B2C121-M-006, TC-B2C121-M-007, TC-B2C121-M-008, TC-B2C121-M-009, TC-B2C121-M-010, TC-B2C121-M-011, TC-B2C121-M-012, TC-B2C121-M-013, TC-B2C121-M-014, TC-B2C121-M-015, TC-B2C121-M-016, TC-B2C121-M-017, TC-B2C121-M-021, TC-B2C121-M-023, TC-B2C121-M-024, TC-B2C121-M-025 |

## Detalle por caso de prueba

### TC-B2C121-D-001 - Verificar que sin tienda de retiro seteada se muestra el buscador, el mapa y el listado de tiendas [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:67 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El usuario no tiene tienda de retiro seteada

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.

**Resultado esperado**

Se muestra "Selecciona tu tienda Unimarc", el buscador con placeholder "Ej: dirección, comuna o nombre", el botón "Ir al mapa", el link "Activar mi ubicación actual" y el listado de tiendas con nombre, dirección y radio button.

**Resultado obtenido**

Se cumplió el resultado esperado.

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-D-001-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-D-001-p04-store-locator-abierto.png>)

![Paso 6 — listado de tiendas de retiro en tienda](<B2C-121 Evidencias/TC-B2C121-D-001-p06-listado-de-tiendas-de-retiro-en-tienda.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-D-001.png>)

---

### TC-B2C121-D-002 - Verificar que el listado solo muestra tiendas activas con el flag de retiro en tienda [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- En BM, {TIENDA_SIN_FLAG_RETIRO} tiene el flag de retiro = false y {TIENDA_INACTIVA} tiene Activo = false

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{TIENDA_RETIRO_001} = Unimarc Las Condes

{TIENDA_SIN_FLAG_RETIRO} = Unimarc Vivar

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario busca en el listado {TIENDA_SIN_FLAG_RETIRO} y {TIENDA_INACTIVA}.

**Resultado esperado**

{TIENDA_RETIRO_001} aparece en el listado; {TIENDA_SIN_FLAG_RETIRO} y {TIENDA_INACTIVA} no aparecen.

**Resultado obtenido**

Falta en el Excel de data {TIENDA_INACTIVA} (TBD). Acción: cargar la tienda inactiva en el Excel de data.

**Observación**

Falta en el Excel de data {TIENDA_INACTIVA} (TBD). Acción: cargar la tienda inactiva en el Excel de data.

---

### TC-B2C121-D-003 - Verificar que con tienda de retiro seteada esta aparece marcada al inicio del listado [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:81 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La tienda {TIENDA_RETIRO_001} está seteada como punto de retiro

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{TIENDA_RETIRO_001} = Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.

**Resultado esperado**

La tienda {TIENDA_RETIRO_001} aparece marcada al inicio del listado y el resto de tiendas a continuación.

**Resultado obtenido**

Al reabrir el Store Locator con Unimarc Las Condes seteada, el listado empieza con Unimarc Santa María Arica; la tienda seteada no queda al inicio.

**Observación**

Esperado: la tienda seteada (Unimarc Las Condes) marcada al inicio del listado. Obtenido: el listado parte con Unimarc Santa María Arica, Rotonda Arica, Iquique Centro (orden por defecto). Bug: B2C-1389.

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-D-003-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-D-003-p04-store-locator-abierto.png>)

![Paso 6 — listado con la tienda seteada](<B2C-121 Evidencias/TC-B2C121-D-003-p06-listado-con-la-tienda-seteada.png>)

![TC B2C121 D 003 ppre precondicion unimarc las condes seteada](<B2C-121 Evidencias/TC-B2C121-D-003-ppre-precondicion-unimarc-las-condes-seteada.png>)

---

### TC-B2C121-D-004 - Verificar que el buscador filtra las tiendas que coinciden con el texto [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:97 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{TIENDA_RETIRO_001} = Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario escribe el nombre de {TIENDA_RETIRO_001} en el buscador.

**Resultado esperado**

El listado muestra solo las tiendas coincidentes, incluida {TIENDA_RETIRO_001}.

**Resultado obtenido**

Al escribir "Unimarc Las Condes" el listado se vacía y muestra el mensaje de tienda no encontrada.

**Observación**

Esperado: el listado muestra Unimarc Las Condes al escribir su nombre. Obtenido: al escribir "Unimarc Las Condes" aparece "Parece que hoy no encontramos esa tienda que buscas" (con "Las Condes" sí aparece). Bug: B2C-1391.

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-D-004-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-D-004-p04-store-locator-abierto.png>)

![Paso 6 — listado de tiendas de retiro en tienda](<B2C-121 Evidencias/TC-B2C121-D-004-p06-listado-de-tiendas-de-retiro-en-tienda.png>)

![Paso 7 — busqueda unimarc las condes](<B2C-121 Evidencias/TC-B2C121-D-004-p07-busqueda-unimarc-las-condes.png>)

---

### TC-B2C121-D-005 - Verificar que una búsqueda sin coincidencias muestra el mensaje de tienda no encontrada [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:111 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BUSQUEDA_TIENDA_SIN_RESULTADO} = unimarc mario

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario escribe {BUSQUEDA_TIENDA_SIN_RESULTADO} en el buscador.

**Resultado esperado**

Se muestra una imagen y el mensaje "Parece que hoy no encontramos esa tienda que buscas. Te llevaremos a otra tienda o cambiar el método de entrega."

**Resultado obtenido**

El subtítulo del sitio dice "Te invitamos a buscar otra tienda o cambiar el método de entrega" (la planilla: "Te llevaremos a otra tienda...").

**Observación**

El subtítulo del sitio dice "Te invitamos a buscar otra tienda o cambiar el método de entrega" (la planilla: "Te llevaremos a otra tienda...").

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-D-005-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-D-005-p04-store-locator-abierto.png>)

![Paso 6 — listado de tiendas de retiro en tienda](<B2C-121 Evidencias/TC-B2C121-D-005-p06-listado-de-tiendas-de-retiro-en-tienda.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-D-005.png>)

---

### TC-B2C121-D-006 - Verificar que un error al cargar las tiendas muestra la pantalla de error y Reintentar recarga [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:130 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- DevTools abierto con bloqueo de la request {STORE_LOCATOR_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{STORE_LOCATOR_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema muestra la pantalla de error.
7. El usuario desactiva en DevTools el bloqueo de la request {STORE_LOCATOR_API_ENDPOINT}.
8. El usuario hace clic en "Reintentar".

**Resultado esperado**

Se muestra imagen, "Ups, salió mal. No logramos cargar la información de los métodos de entrega...", código de error, "Reintentar" y "Volver al inicio"; al reintentar sin el error forzado se carga el listado de tiendas.

**Resultado obtenido**

El título del sitio es "Ups, algo salió mal" (la planilla: "Ups, salió mal").

**Observación**

El título del sitio es "Ups, algo salió mal" (la planilla: "Ups, salió mal").

**Evidencia**

![Paso 6 — pantalla de error de tiendas](<B2C-121 Evidencias/TC-B2C121-D-006-p06-pantalla-de-error-de-tiendas.png>)

![Paso 8 — listado tras reintentar sin el bloqueo](<B2C-121 Evidencias/TC-B2C121-D-006-p08-listado-tras-reintentar-sin-el-bloqueo.png>)

---

### TC-B2C121-D-007 - Verificar que Volver al inicio desde el error de tiendas redirige al Home [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:152 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: PLP
- DevTools abierto con bloqueo de la request {STORE_LOCATOR_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{STORE_LOCATOR_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc

**Pasos ejecutados**

1. El usuario ingresa a {PLP_URL}.
2. El usuario hace clic en el Store Locator del header.
3. El usuario hace clic en la pestaña "Retiro en tienda".
4. El sistema muestra la pantalla de error.
5. El usuario hace clic en "Volver al inicio".

**Resultado esperado**

El usuario es redirigido al Home.

**Resultado obtenido**

Se cumplió el resultado esperado.

**Evidencia**

![Paso 1 — plp cargada](<B2C-121 Evidencias/TC-B2C121-D-007-p01-plp-cargada.png>)

![Paso 4 — pantalla de error de tiendas](<B2C-121 Evidencias/TC-B2C121-D-007-p04-pantalla-de-error-de-tiendas.png>)

![Paso 5 — home tras volver al inicio](<B2C-121 Evidencias/TC-B2C121-D-007-p05-home-tras-volver-al-inicio.png>)

---

### TC-B2C121-D-008 - Verificar que Activar mi ubicación sin permisos muestra la solicitud de permiso [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:173 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Permiso de geolocalización no concedido en el navegador

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario hace clic en "Activar mi ubicación actual".

**Resultado esperado**

Se muestra el diálogo de el navegador solicitando permiso de ubicación.

**Resultado obtenido**

El diálogo nativo del navegador no es observable por la automatización: se verificó permiso en "prompt", que el sitio solicita la ubicación y el estado "Buscando tu ubicación…".

**Observación**

El diálogo nativo del navegador no es observable por la automatización: se verificó permiso en "prompt", que el sitio solicita la ubicación y el estado "Buscando tu ubicación…".

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-D-008-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-D-008-p04-store-locator-abierto.png>)

![Paso 6 — listado de tiendas de retiro en tienda](<B2C-121 Evidencias/TC-B2C121-D-008-p06-listado-de-tiendas-de-retiro-en-tienda.png>)

![Paso 7 — tras activar mi ubicacion el dialogo nativo no es capturable](<B2C-121 Evidencias/TC-B2C121-D-008-p07-tras-activar-mi-ubicacion-el-dialogo-nativo-no-es-capturable.png>)

---

### TC-B2C121-D-009 - Verificar que con permiso concedido las tiendas se ordenan por cercanía y muestran los km [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:192 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Permiso de geolocalización concedido en el navegador

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{RADIO_TIENDAS_KM} = 20

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario hace clic en "Activar mi ubicación actual".

**Resultado esperado**

El listado se reordena desde la tienda más cercana, cada tarjeta muestra los KM de distancia y solo se listan tiendas dentro de {RADIO_TIENDAS_KM} km.

**Resultado obtenido**

Ubicación simulada en Santiago centro (la planilla no declara coordenadas).

**Observación**

Ubicación simulada en Santiago centro (la planilla no declara coordenadas).

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-D-009-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-D-009-p04-store-locator-abierto.png>)

![Paso 7 — listado por cercania con km](<B2C-121 Evidencias/TC-B2C121-D-009-p07-listado-por-cercania-con-km.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-D-009.png>)

---

### TC-B2C121-D-010 - Verificar que al seleccionar una tienda se abre su tarjeta con mapa, distancia y Confirmar tienda [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:210 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{TIENDA_RETIRO_001} = Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.
8. El sistema muestra la tarjeta de información de la tienda.

**Resultado esperado**

La tarjeta muestra nombre, dirección, mapa miniatura y distancia de {TIENDA_RETIRO_001}, con los botones "Ir al mapa" y "Confirmar tienda".

**Resultado obtenido**

La tarjeta muestra nombre, dirección, mapa miniatura y Confirmar tienda, pero no la distancia.

**Observación**

Esperado: tarjeta con nombre, dirección, mapa miniatura y distancia. Obtenido: sin distancia (km) en la tarjeta (sin ubicación activada). Bug: B2C-1393.

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-D-010-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-D-010-p04-store-locator-abierto.png>)

![Paso 8 — tarjeta de la tienda seleccionada](<B2C-121 Evidencias/TC-B2C121-D-010-p08-tarjeta-de-la-tienda-seleccionada.png>)

---

### TC-B2C121-D-011 - Verificar que Ir al mapa muestra los pines de tiendas, un buscador y Volver a la lista [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:225 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario hace clic en "Ir al mapa".

**Resultado esperado**

Se carga el mapa con pines de las tiendas habilitadas, un buscador dentro del mapa y el botón "Volver a la lista".

**Resultado obtenido**

El botón de regreso se rotula "Ir a la lista" (la planilla: "Volver a la lista").

**Observación**

El botón de regreso se rotula "Ir a la lista" (la planilla: "Volver a la lista").

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-D-011-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-D-011-p04-store-locator-abierto.png>)

![Paso 7 — vista de mapa con pines](<B2C-121 Evidencias/TC-B2C121-D-011-p07-vista-de-mapa-con-pines.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-D-011.png>)

---

### TC-B2C121-D-012 - Verificar que al seleccionar un pin del mapa se muestra la tienda y el botón Confirmar [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:239 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{TIENDA_RETIRO_001} = Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario hace clic en "Ir al mapa".
8. El usuario hace clic en el pin de {TIENDA_RETIRO_001}.

**Resultado esperado**

Se muestra nombre, dirección y distancia de {TIENDA_RETIRO_001} y el botón "Confirmar".

**Resultado obtenido**

Al elegir el pin se muestran nombre, dirección y Confirmar, pero no la distancia.

**Observación**

Esperado: nombre, dirección y distancia de la tienda al elegir el pin. Obtenido: sin distancia (km) (sin ubicación activada). Bug: B2C-1395.

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-D-012-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-D-012-p04-store-locator-abierto.png>)

![Paso 8 — tarjeta del pin seleccionado](<B2C-121 Evidencias/TC-B2C121-D-012-p08-tarjeta-del-pin-seleccionado.png>)

---

### TC-B2C121-D-013 - Verificar que un invitado sin carro confirma una tienda con horarios y queda seteada [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:256 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El carro está vacío
- {TIENDA_RETIRO_001} tiene cobertura y SLAs disponibles en Janis

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{TIENDA_RETIRO_001} = Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.
8. El sistema muestra la tarjeta de información de la tienda.
9. El usuario hace clic en "Confirmar tienda".
10. El sistema muestra un loader.

**Resultado esperado**

La tienda {TIENDA_RETIRO_001} queda seteada como punto de retiro, el sistema regresa a la pantalla anterior y  la opción de iniciar sesión queda disponible para el cliente.

**Resultado obtenido**

Se cumplió el resultado esperado.

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-D-013-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-D-013-p04-store-locator-abierto.png>)

![Paso 8 — tarjeta de la tienda](<B2C-121 Evidencias/TC-B2C121-D-013-p08-tarjeta-de-la-tienda.png>)

![Paso 10 — tienda seteada y opcion de iniciar sesion](<B2C-121 Evidencias/TC-B2C121-D-013-p10-tienda-seteada-y-opcion-de-iniciar-sesion.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-D-013.png>)

---

### TC-B2C121-D-014 - Verificar que un invitado que confirma una tienda sin horarios va al flujo Sin horarios [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El carro está vacío

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y hace clic en "Confirmar tienda".

**Resultado esperado**

Se muestra el modal "Por ahora no hay horarios disponibles" (B2C-127).

**Resultado obtenido**

Falta en el Excel de data {TIENDA_RETIRO_SIN_SLA} (TBD). Acción: cargar la tienda sin horarios en el Excel de data.

**Observación**

Falta en el Excel de data {TIENDA_RETIRO_SIN_SLA} (TBD). Acción: cargar la tienda sin horarios en el Excel de data.

---

### TC-B2C121-D-015 - Verificar que un invitado con carro que confirma una tienda ve el modal No se te escapen [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El carro contiene {SKU_VALID_001}
- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la activa

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.
8. El sistema muestra la tarjeta de información de la tienda.
9. El usuario hace clic en "Confirmar tienda".

**Resultado esperado**

Se muestra el modal "Algunos productos podrían agotarse" (B2C-122).

**Resultado obtenido**

El carro con {SKU_VALID_001} exige una forma de entrega activa (sin ella el sitio pide elegir dirección/tienda) y la columna Test data no declara dirección ni tienda activa distinta de {TIENDA_RETIRO_001}. Acción: declarar en la planilla el token de la forma de entrega activa.

**Observación**

El carro con {SKU_VALID_001} exige una forma de entrega activa (sin ella el sitio pide elegir dirección/tienda) y la columna Test data no declara dirección ni tienda activa distinta de {TIENDA_RETIRO_001}. Acción: declarar en la planilla el token de la forma de entrega activa.

---

### TC-B2C121-D-016 - Verificar que un invitado que confirma una tienda sin cobertura va al flujo Sin cobertura [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:271 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{TIENDA_RETIRO_SIN_COBERTURA} = Unimarc Los Lagos II

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_COBERTURA} y hace clic en "Confirmar tienda".

**Resultado esperado**

Se muestra el modal "Aún no llegamos a esta dirección" (B2C-123).

**Resultado obtenido**

Se cumplió el resultado esperado.

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-D-016-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-D-016-p04-store-locator-abierto.png>)

![Paso 7 — tienda seleccionada](<B2C-121 Evidencias/TC-B2C121-D-016-p07-tienda-seleccionada.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-D-016.png>)

---

### TC-B2C121-D-017 - Verificar que un error al confirmar la tienda muestra el mensaje y mantiene la tienda anterior [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La tienda {TIENDA_RETIRO_001} está seteada como punto de retiro
- DevTools abierto con bloqueo de la request {SETEO_ENTREGA_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SETEO_ENTREGA_API_ENDPOINT} = *://maps.googleapis.com/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/GetViewportInfo

{TIENDA_RETIRO_001} = Unimarc Las Condes

{TIENDA_RETIRO_002} = Unimarc Los Trapenses

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_002} y hace clic en "Confirmar tienda".

**Resultado esperado**

Se muestra "Lo sentimos, no pudimos cambiar la tienda de retiro. Inténtalo nuevamente." y {TIENDA_RETIRO_001} permanece activa.

**Resultado obtenido**

{SETEO_ENTREGA_API_ENDPOINT} resuelve a un endpoint de Google Maps (GetViewportInfo), no a la API de seteo de entrega: bloqueado, la confirmación de la tienda se aplica igual (cambia a Unimarc Los Trapenses) y no se puede provocar el error. Acción: corregir el valor del token con la request real de seteo de entrega.

**Observación**

{SETEO_ENTREGA_API_ENDPOINT} resuelve a un endpoint de Google Maps (GetViewportInfo), no a la API de seteo de entrega: bloqueado, la confirmación de la tienda se aplica igual (cambia a Unimarc Los Trapenses) y no se puede provocar el error. Acción: corregir el valor del token con la request real de seteo de entrega.

---

### TC-B2C121-D-021 - Verificar que un logueado sin carro que valida OTP con tienda sin horarios va a Sin horarios [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y hace clic en "Confirmar tienda".
8. El sistema muestra el modal "Autenticación requerida" (B2C-125).
9. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

Se muestra el modal "Por ahora no hay horarios disponibles" (B2C-127).

**Resultado obtenido**

Falta en el Excel de data {TIENDA_RETIRO_SIN_SLA} (TBD); además exige login con OTP. Acción: cargar la tienda sin horarios en el Excel de data.

**Observación**

Falta en el Excel de data {TIENDA_RETIRO_SIN_SLA} (TBD); además exige login con OTP. Acción: cargar la tienda sin horarios en el Excel de data.

---

### TC-B2C121-D-023 - Verificar que tras confirmar la tienda el header del invitado muestra tienda, ventana, Gratis y login [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:301 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El carro está vacío

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{TIENDA_RETIRO_001} = Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.
8. El sistema muestra la tarjeta de información de la tienda.
9. El usuario hace clic en "Confirmar tienda".
10. El usuario revisa el header.

**Resultado esperado**

El header muestra el nombre de {TIENDA_RETIRO_001}, la próxima ventana de retiro y el chip "Gratis", y se ofrece la opción de iniciar sesión.

**Resultado obtenido**

Se cumplió el resultado esperado.

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-D-023-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-D-023-p04-store-locator-abierto.png>)

![Paso 8 — tarjeta de la tienda](<B2C-121 Evidencias/TC-B2C121-D-023-p08-tarjeta-de-la-tienda.png>)

![Paso 10 — header tras confirmar](<B2C-121 Evidencias/TC-B2C121-D-023-p10-header-tras-confirmar.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-D-023.png>)

---

### TC-B2C121-M-001 - Verificar que sin tienda de retiro seteada se muestra el buscador, el mapa y el listado de tiendas [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:67 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El usuario no tiene tienda de retiro seteada

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.

**Resultado esperado**

Se muestra "Selecciona tu tienda Unimarc", el buscador con placeholder "Ej: dirección, comuna o nombre", el botón "Ir al mapa", el link "Activar mi ubicación actual" y el listado de tiendas con nombre, dirección y radio button.

**Resultado obtenido**

Se cumplió el resultado esperado.

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-M-001-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-M-001-p04-store-locator-abierto.png>)

![Paso 6 — listado de tiendas de retiro en tienda](<B2C-121 Evidencias/TC-B2C121-M-001-p06-listado-de-tiendas-de-retiro-en-tienda.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-M-001.png>)

---

### TC-B2C121-M-002 - Verificar que el listado solo muestra tiendas activas con el flag de retiro en tienda [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- En BM, {TIENDA_SIN_FLAG_RETIRO} tiene el flag de retiro = false y {TIENDA_INACTIVA} tiene Activo = false

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{TIENDA_RETIRO_001} = Unimarc Las Condes

{TIENDA_SIN_FLAG_RETIRO} = Unimarc Vivar

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario busca en el listado {TIENDA_SIN_FLAG_RETIRO} y {TIENDA_INACTIVA}.

**Resultado esperado**

{TIENDA_RETIRO_001} aparece en el listado; {TIENDA_SIN_FLAG_RETIRO} y {TIENDA_INACTIVA} no aparecen.

**Resultado obtenido**

Falta en el Excel de data {TIENDA_INACTIVA} (TBD). Acción: cargar la tienda inactiva en el Excel de data.

**Observación**

Falta en el Excel de data {TIENDA_INACTIVA} (TBD). Acción: cargar la tienda inactiva en el Excel de data.

---

### TC-B2C121-M-003 - Verificar que con tienda de retiro seteada esta aparece marcada al inicio del listado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:81 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- La tienda {TIENDA_RETIRO_001} está seteada como punto de retiro

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{TIENDA_RETIRO_001} = Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.

**Resultado esperado**

La tienda {TIENDA_RETIRO_001} aparece marcada al inicio del listado y el resto de tiendas a continuación.

**Resultado obtenido**

Al reabrir el Store Locator con Unimarc Las Condes seteada, el listado empieza con Unimarc Santa María Arica; la tienda seteada no queda al inicio.

**Observación**

Esperado: la tienda seteada (Unimarc Las Condes) marcada al inicio del listado. Obtenido: el listado parte con Unimarc Santa María Arica, Rotonda Arica, Iquique Centro (orden por defecto). Bug: B2C-1390.

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-M-003-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-M-003-p04-store-locator-abierto.png>)

![Paso 6 — listado con la tienda seteada](<B2C-121 Evidencias/TC-B2C121-M-003-p06-listado-con-la-tienda-seteada.png>)

![TC B2C121 M 003 ppre precondicion unimarc las condes seteada](<B2C-121 Evidencias/TC-B2C121-M-003-ppre-precondicion-unimarc-las-condes-seteada.png>)

---

### TC-B2C121-M-004 - Verificar que el buscador filtra las tiendas que coinciden con el texto [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:97 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{TIENDA_RETIRO_001} = Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario escribe el nombre de {TIENDA_RETIRO_001} en el buscador.

**Resultado esperado**

El listado muestra solo las tiendas coincidentes, incluida {TIENDA_RETIRO_001}.

**Resultado obtenido**

Al escribir "Unimarc Las Condes" el listado se vacía y muestra el mensaje de tienda no encontrada.

**Observación**

Esperado: el listado muestra Unimarc Las Condes al escribir su nombre. Obtenido: al escribir "Unimarc Las Condes" aparece "Parece que hoy no encontramos esa tienda que buscas" (con "Las Condes" sí aparece). Bug: B2C-1392.

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-M-004-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-M-004-p04-store-locator-abierto.png>)

![Paso 6 — listado de tiendas de retiro en tienda](<B2C-121 Evidencias/TC-B2C121-M-004-p06-listado-de-tiendas-de-retiro-en-tienda.png>)

![Paso 7 — busqueda unimarc las condes](<B2C-121 Evidencias/TC-B2C121-M-004-p07-busqueda-unimarc-las-condes.png>)

---

### TC-B2C121-M-005 - Verificar que una búsqueda sin coincidencias muestra el mensaje de tienda no encontrada [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:111 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BUSQUEDA_TIENDA_SIN_RESULTADO} = unimarc mario

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario escribe {BUSQUEDA_TIENDA_SIN_RESULTADO} en el buscador.

**Resultado esperado**

Se muestra una imagen y el mensaje "Parece que hoy no encontramos esa tienda que buscas. Te llevaremos a otra tienda o cambiar el método de entrega."

**Resultado obtenido**

El subtítulo del sitio dice "Te invitamos a buscar otra tienda o cambiar el método de entrega" (la planilla: "Te llevaremos a otra tienda...").

**Observación**

El subtítulo del sitio dice "Te invitamos a buscar otra tienda o cambiar el método de entrega" (la planilla: "Te llevaremos a otra tienda...").

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-M-005-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-M-005-p04-store-locator-abierto.png>)

![Paso 6 — listado de tiendas de retiro en tienda](<B2C-121 Evidencias/TC-B2C121-M-005-p06-listado-de-tiendas-de-retiro-en-tienda.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-M-005.png>)

---

### TC-B2C121-M-006 - Verificar que un error al cargar las tiendas muestra la pantalla de error y Reintentar recarga [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:130 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- DevTools abierto con bloqueo de la request {STORE_LOCATOR_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{STORE_LOCATOR_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema muestra la pantalla de error.
7. El usuario desactiva en DevTools el bloqueo de la request {STORE_LOCATOR_API_ENDPOINT}.
8. El usuario toca "Reintentar".

**Resultado esperado**

Se muestra imagen, "Ups, salió mal. No logramos cargar la información de los métodos de entrega...", código de error, "Reintentar" y "Volver al inicio"; al reintentar sin el error forzado se carga el listado de tiendas.

**Resultado obtenido**

El título del sitio es "Ups, algo salió mal" (la planilla: "Ups, salió mal").

**Observación**

El título del sitio es "Ups, algo salió mal" (la planilla: "Ups, salió mal").

**Evidencia**

![Paso 6 — pantalla de error de tiendas](<B2C-121 Evidencias/TC-B2C121-M-006-p06-pantalla-de-error-de-tiendas.png>)

![Paso 8 — listado tras reintentar sin el bloqueo](<B2C-121 Evidencias/TC-B2C121-M-006-p08-listado-tras-reintentar-sin-el-bloqueo.png>)

---

### TC-B2C121-M-007 - Verificar que Volver al inicio desde el error de tiendas redirige al Home [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:152 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PLP
- DevTools abierto con bloqueo de la request {STORE_LOCATOR_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

{STORE_LOCATOR_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc

**Pasos ejecutados**

1. El usuario ingresa a {PLP_URL}.
2. El usuario toca el Store Locator del header.
3. El usuario toca la pestaña "Retiro en tienda".
4. El sistema muestra la pantalla de error.
5. El usuario toca "Volver al inicio".

**Resultado esperado**

El usuario es redirigido al Home.

**Resultado obtenido**

Se cumplió el resultado esperado.

**Evidencia**

![Paso 1 — plp cargada](<B2C-121 Evidencias/TC-B2C121-M-007-p01-plp-cargada.png>)

![Paso 4 — pantalla de error de tiendas](<B2C-121 Evidencias/TC-B2C121-M-007-p04-pantalla-de-error-de-tiendas.png>)

![Paso 5 — home tras volver al inicio](<B2C-121 Evidencias/TC-B2C121-M-007-p05-home-tras-volver-al-inicio.png>)

---

### TC-B2C121-M-008 - Verificar que Activar mi ubicación sin permisos muestra la solicitud de permiso [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:173 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Permiso de geolocalización no concedido en el navegador

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario toca "Activar mi ubicación actual".

**Resultado esperado**

Se muestra el diálogo de el navegador solicitando permiso de ubicación.

**Resultado obtenido**

El diálogo nativo del navegador no es observable por la automatización: se verificó permiso en "prompt", que el sitio solicita la ubicación y el estado "Buscando tu ubicación…".

**Observación**

El diálogo nativo del navegador no es observable por la automatización: se verificó permiso en "prompt", que el sitio solicita la ubicación y el estado "Buscando tu ubicación…".

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-M-008-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-M-008-p04-store-locator-abierto.png>)

![Paso 6 — listado de tiendas de retiro en tienda](<B2C-121 Evidencias/TC-B2C121-M-008-p06-listado-de-tiendas-de-retiro-en-tienda.png>)

![Paso 7 — tras activar mi ubicacion el dialogo nativo no es capturable](<B2C-121 Evidencias/TC-B2C121-M-008-p07-tras-activar-mi-ubicacion-el-dialogo-nativo-no-es-capturable.png>)

---

### TC-B2C121-M-009 - Verificar que con permiso concedido las tiendas se ordenan por cercanía y muestran los km [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:192 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Permiso de geolocalización concedido en el navegador

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{RADIO_TIENDAS_KM} = 20

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario toca "Activar mi ubicación actual".

**Resultado esperado**

El listado se reordena desde la tienda más cercana, cada tarjeta muestra los KM de distancia y solo se listan tiendas dentro de {RADIO_TIENDAS_KM} km.

**Resultado obtenido**

Ubicación simulada en Santiago centro (la planilla no declara coordenadas).

**Observación**

Ubicación simulada en Santiago centro (la planilla no declara coordenadas).

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-M-009-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-M-009-p04-store-locator-abierto.png>)

![Paso 7 — listado por cercania con km](<B2C-121 Evidencias/TC-B2C121-M-009-p07-listado-por-cercania-con-km.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-M-009.png>)

---

### TC-B2C121-M-010 - Verificar que al seleccionar una tienda se abre su tarjeta con mapa, distancia y Confirmar tienda [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:210 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{TIENDA_RETIRO_001} = Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.
8. El sistema muestra la tarjeta de información de la tienda.

**Resultado esperado**

La tarjeta muestra nombre, dirección, mapa miniatura y distancia de {TIENDA_RETIRO_001}, con los botones "Ir al mapa" y "Confirmar tienda".

**Resultado obtenido**

La tarjeta muestra nombre, dirección, mapa miniatura y Confirmar tienda, pero no la distancia.

**Observación**

Esperado: tarjeta con nombre, dirección, mapa miniatura y distancia. Obtenido: sin distancia (km) en la tarjeta (sin ubicación activada). Bug: B2C-1394.

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-M-010-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-M-010-p04-store-locator-abierto.png>)

![Paso 8 — tarjeta de la tienda seleccionada](<B2C-121 Evidencias/TC-B2C121-M-010-p08-tarjeta-de-la-tienda-seleccionada.png>)

---

### TC-B2C121-M-011 - Verificar que Ir al mapa muestra los pines de tiendas, un buscador y Volver a la lista [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:225 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario toca "Ir al mapa".

**Resultado esperado**

Se carga el mapa con pines de las tiendas habilitadas, un buscador dentro del mapa y el botón "Volver a la lista".

**Resultado obtenido**

El botón de regreso se rotula "Ir a la lista" (la planilla: "Volver a la lista").

**Observación**

El botón de regreso se rotula "Ir a la lista" (la planilla: "Volver a la lista").

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-M-011-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-M-011-p04-store-locator-abierto.png>)

![Paso 7 — vista de mapa con pines](<B2C-121 Evidencias/TC-B2C121-M-011-p07-vista-de-mapa-con-pines.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-M-011.png>)

---

### TC-B2C121-M-012 - Verificar que al seleccionar un pin del mapa se muestra la tienda y el botón Confirmar [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:239 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{TIENDA_RETIRO_001} = Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario toca "Ir al mapa".
8. El usuario toca el pin de {TIENDA_RETIRO_001}.

**Resultado esperado**

Se muestra nombre, dirección y distancia de {TIENDA_RETIRO_001} y el botón "Confirmar".

**Resultado obtenido**

Al elegir el pin se muestran nombre, dirección y Confirmar, pero no la distancia.

**Observación**

Esperado: nombre, dirección y distancia de la tienda al elegir el pin. Obtenido: sin distancia (km) (sin ubicación activada). Bug: B2C-1396.

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-M-012-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-M-012-p04-store-locator-abierto.png>)

![Paso 8 — tarjeta del pin seleccionado](<B2C-121 Evidencias/TC-B2C121-M-012-p08-tarjeta-del-pin-seleccionado.png>)

---

### TC-B2C121-M-013 - Verificar que un invitado sin carro confirma una tienda con horarios y queda seteada [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:256 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El carro está vacío
- {TIENDA_RETIRO_001} tiene cobertura y SLAs disponibles en Janis

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{TIENDA_RETIRO_001} = Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
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

Se cumplió el resultado esperado.

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-M-013-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-M-013-p04-store-locator-abierto.png>)

![Paso 8 — tarjeta de la tienda](<B2C-121 Evidencias/TC-B2C121-M-013-p08-tarjeta-de-la-tienda.png>)

![Paso 10 — tienda seteada y opcion de iniciar sesion](<B2C-121 Evidencias/TC-B2C121-M-013-p10-tienda-seteada-y-opcion-de-iniciar-sesion.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-M-013.png>)

---

### TC-B2C121-M-014 - Verificar que un invitado que confirma una tienda sin horarios va al flujo Sin horarios [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El carro está vacío

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y toca "Confirmar tienda".

**Resultado esperado**

Se muestra el modal "Por ahora no hay horarios disponibles" (B2C-127).

**Resultado obtenido**

Falta en el Excel de data {TIENDA_RETIRO_SIN_SLA} (TBD). Acción: cargar la tienda sin horarios en el Excel de data.

**Observación**

Falta en el Excel de data {TIENDA_RETIRO_SIN_SLA} (TBD). Acción: cargar la tienda sin horarios en el Excel de data.

---

### TC-B2C121-M-015 - Verificar que un invitado con carro que confirma una tienda ve el modal No se te escapen [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El carro contiene {SKU_VALID_001}
- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la activa

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.
8. El sistema muestra la tarjeta de información de la tienda.
9. El usuario toca "Confirmar tienda".

**Resultado esperado**

Se muestra el modal "Algunos productos podrían agotarse" (B2C-122).

**Resultado obtenido**

El carro con {SKU_VALID_001} exige una forma de entrega activa (sin ella el sitio pide elegir dirección/tienda) y la columna Test data no declara dirección ni tienda activa distinta de {TIENDA_RETIRO_001}. Acción: declarar en la planilla el token de la forma de entrega activa.

**Observación**

El carro con {SKU_VALID_001} exige una forma de entrega activa (sin ella el sitio pide elegir dirección/tienda) y la columna Test data no declara dirección ni tienda activa distinta de {TIENDA_RETIRO_001}. Acción: declarar en la planilla el token de la forma de entrega activa.

---

### TC-B2C121-M-016 - Verificar que un invitado que confirma una tienda sin cobertura va al flujo Sin cobertura [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:271 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{TIENDA_RETIRO_SIN_COBERTURA} = Unimarc Los Lagos II

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_COBERTURA} y toca "Confirmar tienda".

**Resultado esperado**

Se muestra el modal "Aún no llegamos a esta dirección" (B2C-123).

**Resultado obtenido**

Se cumplió el resultado esperado.

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-M-016-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-M-016-p04-store-locator-abierto.png>)

![Paso 7 — tienda seleccionada](<B2C-121 Evidencias/TC-B2C121-M-016-p07-tienda-seleccionada.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-M-016.png>)

---

### TC-B2C121-M-017 - Verificar que un error al confirmar la tienda muestra el mensaje y mantiene la tienda anterior [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- La tienda {TIENDA_RETIRO_001} está seteada como punto de retiro
- DevTools abierto con bloqueo de la request {SETEO_ENTREGA_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SETEO_ENTREGA_API_ENDPOINT} = *://maps.googleapis.com/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/GetViewportInfo

{TIENDA_RETIRO_001} = Unimarc Las Condes

{TIENDA_RETIRO_002} = Unimarc Los Trapenses

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_002} y toca "Confirmar tienda".

**Resultado esperado**

Se muestra "Lo sentimos, no pudimos cambiar la tienda de retiro. Inténtalo nuevamente." y {TIENDA_RETIRO_001} permanece activa.

**Resultado obtenido**

{SETEO_ENTREGA_API_ENDPOINT} resuelve a un endpoint de Google Maps (GetViewportInfo), no a la API de seteo de entrega: bloqueado, la confirmación de la tienda se aplica igual (cambia a Unimarc Los Trapenses) y no se puede provocar el error. Acción: corregir el valor del token con la request real de seteo de entrega.

**Observación**

{SETEO_ENTREGA_API_ENDPOINT} resuelve a un endpoint de Google Maps (GetViewportInfo), no a la API de seteo de entrega: bloqueado, la confirmación de la tienda se aplica igual (cambia a Unimarc Los Trapenses) y no se puede provocar el error. Acción: corregir el valor del token con la request real de seteo de entrega.

---

### TC-B2C121-M-021 - Verificar que un logueado sin carro que valida OTP con tienda sin horarios va a Sin horarios [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro está vacío
- Acceso a la casilla de correo de la cuenta para leer el código OTP

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.
7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y toca "Confirmar tienda".
8. El sistema muestra el modal "Autenticación requerida" (B2C-125).
9. El usuario ingresa el código OTP recibido y presiona "Continuar".

**Resultado esperado**

Se muestra el modal "Por ahora no hay horarios disponibles" (B2C-127).

**Resultado obtenido**

Falta en el Excel de data {TIENDA_RETIRO_SIN_SLA} (TBD); además exige login con OTP. Acción: cargar la tienda sin horarios en el Excel de data.

**Observación**

Falta en el Excel de data {TIENDA_RETIRO_SIN_SLA} (TBD); además exige login con OTP. Acción: cargar la tienda sin horarios en el Excel de data.

---

### TC-B2C121-M-023 - Verificar que tras confirmar la tienda el header del invitado muestra tienda, ventana, Gratis y login [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:301 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El carro está vacío

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{TIENDA_RETIRO_001} = Unimarc Las Condes

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
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

Se cumplió el resultado esperado.

**Evidencia**

![Paso 2 — home cargado](<B2C-121 Evidencias/TC-B2C121-M-023-p02-home-cargado.png>)

![Paso 4 — store locator abierto](<B2C-121 Evidencias/TC-B2C121-M-023-p04-store-locator-abierto.png>)

![Paso 8 — tarjeta de la tienda](<B2C-121 Evidencias/TC-B2C121-M-023-p08-tarjeta-de-la-tienda.png>)

![Paso 10 — header tras confirmar](<B2C-121 Evidencias/TC-B2C121-M-023-p10-header-tras-confirmar.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-M-023.png>)

---

### TC-B2C121-D-024 - Verificar que al cambiar desde Despacho a domicilio sin tienda previa se muestra la pantalla inicial de Retiro en tienda [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:327 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Despacho a domicilio activo con la dirección {DIRECCION_DESPACHO_001}
- El usuario nunca ha seteado una tienda de retiro (sin tienda de retiro previa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator con la pestaña Despacho a domicilio activa y {DIRECCION_DESPACHO_001}.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.

**Resultado esperado**

La pestaña Retiro en tienda queda activa y se muestra "Selecciona tu tienda Unimarc", el buscador con placeholder "Ej: dirección, comuna o nombre", el botón "Ir al mapa" a la derecha del buscador, el link "Activar mi ubicación actual" debajo del buscador y el listado de tiendas activas con flag de retiro en tienda (nombre, dirección y radio button), sin ninguna tienda marcada como seteada; el método activo sigue siendo despacho a {DIRECCION_DESPACHO_001} mientras no se confirme una tienda.

**Resultado obtenido**

Se cumplió el resultado esperado.

**Evidencia**

![Paso 4 — store locator con despacho a domicilio activo](<B2C-121 Evidencias/TC-B2C121-D-024-p04-store-locator-con-despacho-a-domicilio-activo.png>)

![Paso 6 — pestana retiro en tienda](<B2C-121 Evidencias/TC-B2C121-D-024-p06-pestana-retiro-en-tienda.png>)

![TC B2C121 D 024 ppre precondicion despacho activo](<B2C-121 Evidencias/TC-B2C121-D-024-ppre-precondicion-despacho-activo.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-D-024.png>)

---

### TC-B2C121-D-025 - Verificar que al acceder por primera vez al Store Locator en modo Retiro en tienda se muestra la pantalla inicial [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:360 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Primera visita: sesión nueva sin cookies ni datos persistidos (ventana de incógnito o datos del sitio borrados)
- Sin dirección ni tienda seteada en el Store Locator

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el Store Locator sin método de entrega seteado.
5. El usuario hace clic en la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.

**Resultado esperado**

La pestaña Retiro en tienda queda activa y se muestra "Selecciona tu tienda Unimarc", el buscador con placeholder "Ej: dirección, comuna o nombre", el botón "Ir al mapa" a la derecha del buscador, el link "Activar mi ubicación actual" debajo del buscador y el listado de tiendas activas con flag de retiro en tienda (nombre, dirección y radio button), sin ninguna tienda marcada como seteada.

**Resultado obtenido**

Se cumplió el resultado esperado.

**Evidencia**

![Paso 4 — store locator sin metodo de entrega](<B2C-121 Evidencias/TC-B2C121-D-025-p04-store-locator-sin-metodo-de-entrega.png>)

![Paso 6 — pestana retiro en tienda](<B2C-121 Evidencias/TC-B2C121-D-025-p06-pestana-retiro-en-tienda.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-D-025.png>)

---

### TC-B2C121-M-024 - Verificar que al cambiar desde Despacho a domicilio sin tienda previa se muestra la pantalla inicial de Retiro en tienda [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:327 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Despacho a domicilio activo con la dirección {DIRECCION_DESPACHO_001}
- El usuario nunca ha seteado una tienda de retiro (sin tienda de retiro previa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator con la pestaña Despacho a domicilio activa y {DIRECCION_DESPACHO_001}.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.

**Resultado esperado**

La pestaña Retiro en tienda queda activa y se muestra "Selecciona tu tienda Unimarc", el buscador con placeholder "Ej: dirección, comuna o nombre", el botón "Ir al mapa" a la derecha del buscador, el link "Activar mi ubicación actual" debajo del buscador y el listado de tiendas activas con flag de retiro en tienda (nombre, dirección y radio button), sin ninguna tienda marcada como seteada; el método activo sigue siendo despacho a {DIRECCION_DESPACHO_001} mientras no se confirme una tienda.

**Resultado obtenido**

Se cumplió el resultado esperado.

**Evidencia**

![Paso 4 — store locator con despacho a domicilio activo](<B2C-121 Evidencias/TC-B2C121-M-024-p04-store-locator-con-despacho-a-domicilio-activo.png>)

![Paso 6 — pestana retiro en tienda](<B2C-121 Evidencias/TC-B2C121-M-024-p06-pestana-retiro-en-tienda.png>)

![TC B2C121 M 024 ppre precondicion despacho activo](<B2C-121 Evidencias/TC-B2C121-M-024-ppre-precondicion-despacho-activo.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-M-024.png>)

---

### TC-B2C121-M-025 - Verificar que al acceder por primera vez al Store Locator en modo Retiro en tienda se muestra la pantalla inicial [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-121.spec.ts:360 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Primera visita: sesión nueva sin cookies ni datos persistidos (ventana de incógnito o datos del sitio borrados)
- Sin dirección ni tienda seteada en el Store Locator

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el Store Locator sin método de entrega seteado.
5. El usuario toca la pestaña "Retiro en tienda".
6. El sistema carga el listado de tiendas.

**Resultado esperado**

La pestaña Retiro en tienda queda activa y se muestra "Selecciona tu tienda Unimarc", el buscador con placeholder "Ej: dirección, comuna o nombre", el botón "Ir al mapa" a la derecha del buscador, el link "Activar mi ubicación actual" debajo del buscador y el listado de tiendas activas con flag de retiro en tienda (nombre, dirección y radio button), sin ninguna tienda marcada como seteada.

**Resultado obtenido**

Se cumplió el resultado esperado.

**Evidencia**

![Paso 4 — store locator sin metodo de entrega](<B2C-121 Evidencias/TC-B2C121-M-025-p04-store-locator-sin-metodo-de-entrega.png>)

![Paso 6 — pestana retiro en tienda](<B2C-121 Evidencias/TC-B2C121-M-025-p06-pestana-retiro-en-tienda.png>)

![Estado final](<B2C-121 Evidencias/TC-B2C121-M-025.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "chromium"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-121",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-121 Test Cases.xlsx",
  "title": "B2C-121 - Store Locator: Retiro en tienda - Evidencias QA",
  "updated_at": "2026-10-27"
 },
 "history": {
  "2026-10-27": [
   "TC-B2C121-D-001",
   "TC-B2C121-D-002",
   "TC-B2C121-D-003",
   "TC-B2C121-D-004",
   "TC-B2C121-D-005",
   "TC-B2C121-D-006",
   "TC-B2C121-D-007",
   "TC-B2C121-D-008",
   "TC-B2C121-D-009",
   "TC-B2C121-D-010",
   "TC-B2C121-D-011",
   "TC-B2C121-D-012",
   "TC-B2C121-D-013",
   "TC-B2C121-D-014",
   "TC-B2C121-D-015",
   "TC-B2C121-D-016",
   "TC-B2C121-D-017",
   "TC-B2C121-D-021",
   "TC-B2C121-D-023",
   "TC-B2C121-D-024",
   "TC-B2C121-D-025",
   "TC-B2C121-M-001",
   "TC-B2C121-M-002",
   "TC-B2C121-M-003",
   "TC-B2C121-M-004",
   "TC-B2C121-M-005",
   "TC-B2C121-M-006",
   "TC-B2C121-M-007",
   "TC-B2C121-M-008",
   "TC-B2C121-M-009",
   "TC-B2C121-M-010",
   "TC-B2C121-M-011",
   "TC-B2C121-M-012",
   "TC-B2C121-M-013",
   "TC-B2C121-M-014",
   "TC-B2C121-M-015",
   "TC-B2C121-M-016",
   "TC-B2C121-M-017",
   "TC-B2C121-M-021",
   "TC-B2C121-M-023",
   "TC-B2C121-M-024",
   "TC-B2C121-M-025"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra \"Selecciona tu tienda Unimarc\", el buscador con placeholder \"Ej: dirección, comuna o nombre\", el botón \"Ir al mapa\", el link \"Activar mi ubicación actual\" y el listado de tiendas con nombre, dirección y radio button.",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-001",
   "name": "Verificar que sin tienda de retiro seteada se muestra el buscador, el mapa y el listado de tiendas [Desktop] [Guest]",
   "observed": "Se cumplió el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El usuario no tiene tienda de retiro seteada",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-D-001-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-D-001-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 6 — listado de tiendas de retiro en tienda",
     "file": "TC-B2C121-D-001-p06-listado-de-tiendas-de-retiro-en-tienda.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-D-001.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:67",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "{TIENDA_RETIRO_001} aparece en el listado; {TIENDA_SIN_FLAG_RETIRO} y {TIENDA_INACTIVA} no aparecen.",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-002",
   "name": "Verificar que el listado solo muestra tiendas activas con el flag de retiro en tienda [Desktop] [Guest]",
   "observation": "Falta en el Excel de data {TIENDA_INACTIVA} (TBD). Acción: cargar la tienda inactiva en el Excel de data.",
   "observed": "Falta en el Excel de data {TIENDA_INACTIVA} (TBD). Acción: cargar la tienda inactiva en el Excel de data.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- En BM, {TIENDA_SIN_FLAG_RETIRO} tiene el flag de retiro = false y {TIENDA_INACTIVA} tiene Activo = false",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario busca en el listado {TIENDA_SIN_FLAG_RETIRO} y {TIENDA_INACTIVA}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{TIENDA_SIN_FLAG_RETIRO} = Unimarc Vivar",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "La tienda {TIENDA_RETIRO_001} aparece marcada al inicio del listado y el resto de tiendas a continuación.",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-003",
   "name": "Verificar que con tienda de retiro seteada esta aparece marcada al inicio del listado [Desktop] [Guest]",
   "observation": "Esperado: la tienda seteada (Unimarc Las Condes) marcada al inicio del listado. Obtenido: el listado parte con Unimarc Santa María Arica, Rotonda Arica, Iquique Centro (orden por defecto). Bug: B2C-1389.",
   "observed": "Al reabrir el Store Locator con Unimarc Las Condes seteada, el listado empieza con Unimarc Santa María Arica; la tienda seteada no queda al inicio.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La tienda {TIENDA_RETIRO_001} está seteada como punto de retiro",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-D-003-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-D-003-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 6 — listado con la tienda seteada",
     "file": "TC-B2C121-D-003-p06-listado-con-la-tienda-seteada.png"
    },
    {
     "caption": "TC B2C121 D 003 ppre precondicion unimarc las condes seteada",
     "file": "TC-B2C121-D-003-ppre-precondicion-unimarc-las-condes-seteada.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:81",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{TIENDA_RETIRO_001} = Unimarc Las Condes",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "El listado muestra solo las tiendas coincidentes, incluida {TIENDA_RETIRO_001}.",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-004",
   "name": "Verificar que el buscador filtra las tiendas que coinciden con el texto [Desktop] [Guest]",
   "observation": "Esperado: el listado muestra Unimarc Las Condes al escribir su nombre. Obtenido: al escribir \"Unimarc Las Condes\" aparece \"Parece que hoy no encontramos esa tienda que buscas\" (con \"Las Condes\" sí aparece). Bug: B2C-1391.",
   "observed": "Al escribir \"Unimarc Las Condes\" el listado se vacía y muestra el mensaje de tienda no encontrada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-D-004-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-D-004-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 6 — listado de tiendas de retiro en tienda",
     "file": "TC-B2C121-D-004-p06-listado-de-tiendas-de-retiro-en-tienda.png"
    },
    {
     "caption": "Paso 7 — busqueda unimarc las condes",
     "file": "TC-B2C121-D-004-p07-busqueda-unimarc-las-condes.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:97",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario escribe el nombre de {TIENDA_RETIRO_001} en el buscador.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{TIENDA_RETIRO_001} = Unimarc Las Condes",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra una imagen y el mensaje \"Parece que hoy no encontramos esa tienda que buscas. Te llevaremos a otra tienda o cambiar el método de entrega.\"",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-005",
   "name": "Verificar que una búsqueda sin coincidencias muestra el mensaje de tienda no encontrada [Desktop] [Guest]",
   "observation": "El subtítulo del sitio dice \"Te invitamos a buscar otra tienda o cambiar el método de entrega\" (la planilla: \"Te llevaremos a otra tienda...\").",
   "observed": "El subtítulo del sitio dice \"Te invitamos a buscar otra tienda o cambiar el método de entrega\" (la planilla: \"Te llevaremos a otra tienda...\").",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-D-005-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-D-005-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 6 — listado de tiendas de retiro en tienda",
     "file": "TC-B2C121-D-005-p06-listado-de-tiendas-de-retiro-en-tienda.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-D-005.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:111",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario escribe {BUSQUEDA_TIENDA_SIN_RESULTADO} en el buscador.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BUSQUEDA_TIENDA_SIN_RESULTADO} = unimarc mario\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra imagen, \"Ups, salió mal. No logramos cargar la información de los métodos de entrega...\", código de error, \"Reintentar\" y \"Volver al inicio\"; al reintentar sin el error forzado se carga el listado de tiendas.",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-006",
   "name": "Verificar que un error al cargar las tiendas muestra la pantalla de error y Reintentar recarga [Desktop] [Guest]",
   "observation": "El título del sitio es \"Ups, algo salió mal\" (la planilla: \"Ups, salió mal\").",
   "observed": "El título del sitio es \"Ups, algo salió mal\" (la planilla: \"Ups, salió mal\").",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- DevTools abierto con bloqueo de la request {STORE_LOCATOR_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 6 — pantalla de error de tiendas",
     "file": "TC-B2C121-D-006-p06-pantalla-de-error-de-tiendas.png"
    },
    {
     "caption": "Paso 8 — listado tras reintentar sin el bloqueo",
     "file": "TC-B2C121-D-006-p08-listado-tras-reintentar-sin-el-bloqueo.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:130",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema muestra la pantalla de error.\n7. El usuario desactiva en DevTools el bloqueo de la request {STORE_LOCATOR_API_ENDPOINT}.\n8. El usuario hace clic en \"Reintentar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{STORE_LOCATOR_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "El usuario es redirigido al Home.",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-007",
   "name": "Verificar que Volver al inicio desde el error de tiendas redirige al Home [Desktop] [Guest]",
   "observed": "Se cumplió el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: PLP\n- DevTools abierto con bloqueo de la request {STORE_LOCATOR_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 1 — plp cargada",
     "file": "TC-B2C121-D-007-p01-plp-cargada.png"
    },
    {
     "caption": "Paso 4 — pantalla de error de tiendas",
     "file": "TC-B2C121-D-007-p04-pantalla-de-error-de-tiendas.png"
    },
    {
     "caption": "Paso 5 — home tras volver al inicio",
     "file": "TC-B2C121-D-007-p05-home-tras-volver-al-inicio.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:152",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {PLP_URL}.\n2. El usuario hace clic en el Store Locator del header.\n3. El usuario hace clic en la pestaña \"Retiro en tienda\".\n4. El sistema muestra la pantalla de error.\n5. El usuario hace clic en \"Volver al inicio\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{STORE_LOCATOR_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el diálogo de el navegador solicitando permiso de ubicación.",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-008",
   "name": "Verificar que Activar mi ubicación sin permisos muestra la solicitud de permiso [Desktop] [Guest]",
   "observation": "El diálogo nativo del navegador no es observable por la automatización: se verificó permiso en \"prompt\", que el sitio solicita la ubicación y el estado \"Buscando tu ubicación…\".",
   "observed": "El diálogo nativo del navegador no es observable por la automatización: se verificó permiso en \"prompt\", que el sitio solicita la ubicación y el estado \"Buscando tu ubicación…\".",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Permiso de geolocalización no concedido en el navegador",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-D-008-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-D-008-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 6 — listado de tiendas de retiro en tienda",
     "file": "TC-B2C121-D-008-p06-listado-de-tiendas-de-retiro-en-tienda.png"
    },
    {
     "caption": "Paso 7 — tras activar mi ubicacion el dialogo nativo no es capturable",
     "file": "TC-B2C121-D-008-p07-tras-activar-mi-ubicacion-el-dialogo-nativo-no-es-capturable.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:173",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario hace clic en \"Activar mi ubicación actual\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "El listado se reordena desde la tienda más cercana, cada tarjeta muestra los KM de distancia y solo se listan tiendas dentro de {RADIO_TIENDAS_KM} km.",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-009",
   "name": "Verificar que con permiso concedido las tiendas se ordenan por cercanía y muestran los km [Desktop] [Guest]",
   "observation": "Ubicación simulada en Santiago centro (la planilla no declara coordenadas).",
   "observed": "Ubicación simulada en Santiago centro (la planilla no declara coordenadas).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Permiso de geolocalización concedido en el navegador",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-D-009-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-D-009-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 7 — listado por cercania con km",
     "file": "TC-B2C121-D-009-p07-listado-por-cercania-con-km.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-D-009.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:192",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario hace clic en \"Activar mi ubicación actual\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{RADIO_TIENDAS_KM} = 20",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "La tarjeta muestra nombre, dirección, mapa miniatura y distancia de {TIENDA_RETIRO_001}, con los botones \"Ir al mapa\" y \"Confirmar tienda\".",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-010",
   "name": "Verificar que al seleccionar una tienda se abre su tarjeta con mapa, distancia y Confirmar tienda [Desktop] [Guest]",
   "observation": "Esperado: tarjeta con nombre, dirección, mapa miniatura y distancia. Obtenido: sin distancia (km) en la tarjeta (sin ubicación activada). Bug: B2C-1393.",
   "observed": "La tarjeta muestra nombre, dirección, mapa miniatura y Confirmar tienda, pero no la distancia.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-D-010-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-D-010-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 8 — tarjeta de la tienda seleccionada",
     "file": "TC-B2C121-D-010-p08-tarjeta-de-la-tienda-seleccionada.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:210",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.\n8. El sistema muestra la tarjeta de información de la tienda.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{TIENDA_RETIRO_001} = Unimarc Las Condes",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se carga el mapa con pines de las tiendas habilitadas, un buscador dentro del mapa y el botón \"Volver a la lista\".",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-011",
   "name": "Verificar que Ir al mapa muestra los pines de tiendas, un buscador y Volver a la lista [Desktop] [Guest]",
   "observation": "El botón de regreso se rotula \"Ir a la lista\" (la planilla: \"Volver a la lista\").",
   "observed": "El botón de regreso se rotula \"Ir a la lista\" (la planilla: \"Volver a la lista\").",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-D-011-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-D-011-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 7 — vista de mapa con pines",
     "file": "TC-B2C121-D-011-p07-vista-de-mapa-con-pines.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-D-011.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:225",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario hace clic en \"Ir al mapa\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra nombre, dirección y distancia de {TIENDA_RETIRO_001} y el botón \"Confirmar\".",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-012",
   "name": "Verificar que al seleccionar un pin del mapa se muestra la tienda y el botón Confirmar [Desktop] [Guest]",
   "observation": "Esperado: nombre, dirección y distancia de la tienda al elegir el pin. Obtenido: sin distancia (km) (sin ubicación activada). Bug: B2C-1395.",
   "observed": "Al elegir el pin se muestran nombre, dirección y Confirmar, pero no la distancia.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-D-012-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-D-012-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 8 — tarjeta del pin seleccionado",
     "file": "TC-B2C121-D-012-p08-tarjeta-del-pin-seleccionado.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:239",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario hace clic en \"Ir al mapa\".\n8. El usuario hace clic en el pin de {TIENDA_RETIRO_001}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{TIENDA_RETIRO_001} = Unimarc Las Condes",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "La tienda {TIENDA_RETIRO_001} queda seteada como punto de retiro, el sistema regresa a la pantalla anterior y  la opción de iniciar sesión queda disponible para el cliente.",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-013",
   "name": "Verificar que un invitado sin carro confirma una tienda con horarios y queda seteada [Desktop] [Guest]",
   "observed": "Se cumplió el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El carro está vacío\n- {TIENDA_RETIRO_001} tiene cobertura y SLAs disponibles en Janis",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-D-013-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-D-013-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 8 — tarjeta de la tienda",
     "file": "TC-B2C121-D-013-p08-tarjeta-de-la-tienda.png"
    },
    {
     "caption": "Paso 10 — tienda seteada y opcion de iniciar sesion",
     "file": "TC-B2C121-D-013-p10-tienda-seteada-y-opcion-de-iniciar-sesion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-D-013.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:256",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.\n8. El sistema muestra la tarjeta de información de la tienda.\n9. El usuario hace clic en \"Confirmar tienda\".\n10. El sistema muestra un loader.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{TIENDA_RETIRO_001} = Unimarc Las Condes",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el modal \"Por ahora no hay horarios disponibles\" (B2C-127).",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-014",
   "name": "Verificar que un invitado que confirma una tienda sin horarios va al flujo Sin horarios [Desktop] [Guest]",
   "observation": "Falta en el Excel de data {TIENDA_RETIRO_SIN_SLA} (TBD). Acción: cargar la tienda sin horarios en el Excel de data.",
   "observed": "Falta en el Excel de data {TIENDA_RETIRO_SIN_SLA} (TBD). Acción: cargar la tienda sin horarios en el Excel de data.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El carro está vacío",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y hace clic en \"Confirmar tienda\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el modal \"Algunos productos podrían agotarse\" (B2C-122).",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-015",
   "name": "Verificar que un invitado con carro que confirma una tienda ve el modal No se te escapen [Desktop] [Guest]",
   "observation": "El carro con {SKU_VALID_001} exige una forma de entrega activa (sin ella el sitio pide elegir dirección/tienda) y la columna Test data no declara dirección ni tienda activa distinta de {TIENDA_RETIRO_001}. Acción: declarar en la planilla el token de la forma de entrega activa.",
   "observed": "El carro con {SKU_VALID_001} exige una forma de entrega activa (sin ella el sitio pide elegir dirección/tienda) y la columna Test data no declara dirección ni tienda activa distinta de {TIENDA_RETIRO_001}. Acción: declarar en la planilla el token de la forma de entrega activa.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El carro contiene {SKU_VALID_001}\n- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la activa",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.\n8. El sistema muestra la tarjeta de información de la tienda.\n9. El usuario hace clic en \"Confirmar tienda\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el modal \"Aún no llegamos a esta dirección\" (B2C-123).",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-016",
   "name": "Verificar que un invitado que confirma una tienda sin cobertura va al flujo Sin cobertura [Desktop] [Guest]",
   "observed": "Se cumplió el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-D-016-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-D-016-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 7 — tienda seleccionada",
     "file": "TC-B2C121-D-016-p07-tienda-seleccionada.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-D-016.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:271",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_COBERTURA} y hace clic en \"Confirmar tienda\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{TIENDA_RETIRO_SIN_COBERTURA} = Unimarc Los Lagos II",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra \"Lo sentimos, no pudimos cambiar la tienda de retiro. Inténtalo nuevamente.\" y {TIENDA_RETIRO_001} permanece activa.",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-017",
   "name": "Verificar que un error al confirmar la tienda muestra el mensaje y mantiene la tienda anterior [Desktop] [Guest]",
   "observation": "{SETEO_ENTREGA_API_ENDPOINT} resuelve a un endpoint de Google Maps (GetViewportInfo), no a la API de seteo de entrega: bloqueado, la confirmación de la tienda se aplica igual (cambia a Unimarc Los Trapenses) y no se puede provocar el error. Acción: corregir el valor del token con la request real de seteo de entrega.",
   "observed": "{SETEO_ENTREGA_API_ENDPOINT} resuelve a un endpoint de Google Maps (GetViewportInfo), no a la API de seteo de entrega: bloqueado, la confirmación de la tienda se aplica igual (cambia a Unimarc Los Trapenses) y no se puede provocar el error. Acción: corregir el valor del token con la request real de seteo de entrega.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La tienda {TIENDA_RETIRO_001} está seteada como punto de retiro\n- DevTools abierto con bloqueo de la request {SETEO_ENTREGA_API_ENDPOINT} (Network request blocking)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_002} y hace clic en \"Confirmar tienda\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SETEO_ENTREGA_API_ENDPOINT} = *://maps.googleapis.com/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/GetViewportInfo\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{TIENDA_RETIRO_002} = Unimarc Los Trapenses",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el modal \"Por ahora no hay horarios disponibles\" (B2C-127).",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-021",
   "name": "Verificar que un logueado sin carro que valida OTP con tienda sin horarios va a Sin horarios [Desktop] [Logueado]",
   "observation": "Falta en el Excel de data {TIENDA_RETIRO_SIN_SLA} (TBD); además exige login con OTP. Acción: cargar la tienda sin horarios en el Excel de data.",
   "observed": "Falta en el Excel de data {TIENDA_RETIRO_SIN_SLA} (TBD); además exige login con OTP. Acción: cargar la tienda sin horarios en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y hace clic en \"Confirmar tienda\".\n8. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n9. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "El header muestra el nombre de {TIENDA_RETIRO_001}, la próxima ventana de retiro y el chip \"Gratis\", y se ofrece la opción de iniciar sesión.",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-023",
   "name": "Verificar que tras confirmar la tienda el header del invitado muestra tienda, ventana, Gratis y login [Desktop] [Guest]",
   "observed": "Se cumplió el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-D-023-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-D-023-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 8 — tarjeta de la tienda",
     "file": "TC-B2C121-D-023-p08-tarjeta-de-la-tienda.png"
    },
    {
     "caption": "Paso 10 — header tras confirmar",
     "file": "TC-B2C121-D-023-p10-header-tras-confirmar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-D-023.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:301",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.\n8. El sistema muestra la tarjeta de información de la tienda.\n9. El usuario hace clic en \"Confirmar tienda\".\n10. El usuario revisa el header.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{TIENDA_RETIRO_001} = Unimarc Las Condes",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra \"Selecciona tu tienda Unimarc\", el buscador con placeholder \"Ej: dirección, comuna o nombre\", el botón \"Ir al mapa\", el link \"Activar mi ubicación actual\" y el listado de tiendas con nombre, dirección y radio button.",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-001",
   "name": "Verificar que sin tienda de retiro seteada se muestra el buscador, el mapa y el listado de tiendas [Mobile] [Guest]",
   "observed": "Se cumplió el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El usuario no tiene tienda de retiro seteada",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-M-001-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-M-001-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 6 — listado de tiendas de retiro en tienda",
     "file": "TC-B2C121-M-001-p06-listado-de-tiendas-de-retiro-en-tienda.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-M-001.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:67",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "{TIENDA_RETIRO_001} aparece en el listado; {TIENDA_SIN_FLAG_RETIRO} y {TIENDA_INACTIVA} no aparecen.",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-002",
   "name": "Verificar que el listado solo muestra tiendas activas con el flag de retiro en tienda [Mobile] [Guest]",
   "observation": "Falta en el Excel de data {TIENDA_INACTIVA} (TBD). Acción: cargar la tienda inactiva en el Excel de data.",
   "observed": "Falta en el Excel de data {TIENDA_INACTIVA} (TBD). Acción: cargar la tienda inactiva en el Excel de data.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- En BM, {TIENDA_SIN_FLAG_RETIRO} tiene el flag de retiro = false y {TIENDA_INACTIVA} tiene Activo = false",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario busca en el listado {TIENDA_SIN_FLAG_RETIRO} y {TIENDA_INACTIVA}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{TIENDA_SIN_FLAG_RETIRO} = Unimarc Vivar",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "La tienda {TIENDA_RETIRO_001} aparece marcada al inicio del listado y el resto de tiendas a continuación.",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-003",
   "name": "Verificar que con tienda de retiro seteada esta aparece marcada al inicio del listado [Mobile] [Guest]",
   "observation": "Esperado: la tienda seteada (Unimarc Las Condes) marcada al inicio del listado. Obtenido: el listado parte con Unimarc Santa María Arica, Rotonda Arica, Iquique Centro (orden por defecto). Bug: B2C-1390.",
   "observed": "Al reabrir el Store Locator con Unimarc Las Condes seteada, el listado empieza con Unimarc Santa María Arica; la tienda seteada no queda al inicio.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La tienda {TIENDA_RETIRO_001} está seteada como punto de retiro",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-M-003-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-M-003-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 6 — listado con la tienda seteada",
     "file": "TC-B2C121-M-003-p06-listado-con-la-tienda-seteada.png"
    },
    {
     "caption": "TC B2C121 M 003 ppre precondicion unimarc las condes seteada",
     "file": "TC-B2C121-M-003-ppre-precondicion-unimarc-las-condes-seteada.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:81",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{TIENDA_RETIRO_001} = Unimarc Las Condes",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "El listado muestra solo las tiendas coincidentes, incluida {TIENDA_RETIRO_001}.",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-004",
   "name": "Verificar que el buscador filtra las tiendas que coinciden con el texto [Mobile] [Guest]",
   "observation": "Esperado: el listado muestra Unimarc Las Condes al escribir su nombre. Obtenido: al escribir \"Unimarc Las Condes\" aparece \"Parece que hoy no encontramos esa tienda que buscas\" (con \"Las Condes\" sí aparece). Bug: B2C-1392.",
   "observed": "Al escribir \"Unimarc Las Condes\" el listado se vacía y muestra el mensaje de tienda no encontrada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-M-004-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-M-004-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 6 — listado de tiendas de retiro en tienda",
     "file": "TC-B2C121-M-004-p06-listado-de-tiendas-de-retiro-en-tienda.png"
    },
    {
     "caption": "Paso 7 — busqueda unimarc las condes",
     "file": "TC-B2C121-M-004-p07-busqueda-unimarc-las-condes.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:97",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario escribe el nombre de {TIENDA_RETIRO_001} en el buscador.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{TIENDA_RETIRO_001} = Unimarc Las Condes",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra una imagen y el mensaje \"Parece que hoy no encontramos esa tienda que buscas. Te llevaremos a otra tienda o cambiar el método de entrega.\"",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-005",
   "name": "Verificar que una búsqueda sin coincidencias muestra el mensaje de tienda no encontrada [Mobile] [Guest]",
   "observation": "El subtítulo del sitio dice \"Te invitamos a buscar otra tienda o cambiar el método de entrega\" (la planilla: \"Te llevaremos a otra tienda...\").",
   "observed": "El subtítulo del sitio dice \"Te invitamos a buscar otra tienda o cambiar el método de entrega\" (la planilla: \"Te llevaremos a otra tienda...\").",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-M-005-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-M-005-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 6 — listado de tiendas de retiro en tienda",
     "file": "TC-B2C121-M-005-p06-listado-de-tiendas-de-retiro-en-tienda.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-M-005.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:111",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario escribe {BUSQUEDA_TIENDA_SIN_RESULTADO} en el buscador.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BUSQUEDA_TIENDA_SIN_RESULTADO} = unimarc mario\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra imagen, \"Ups, salió mal. No logramos cargar la información de los métodos de entrega...\", código de error, \"Reintentar\" y \"Volver al inicio\"; al reintentar sin el error forzado se carga el listado de tiendas.",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-006",
   "name": "Verificar que un error al cargar las tiendas muestra la pantalla de error y Reintentar recarga [Mobile] [Guest]",
   "observation": "El título del sitio es \"Ups, algo salió mal\" (la planilla: \"Ups, salió mal\").",
   "observed": "El título del sitio es \"Ups, algo salió mal\" (la planilla: \"Ups, salió mal\").",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- DevTools abierto con bloqueo de la request {STORE_LOCATOR_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 6 — pantalla de error de tiendas",
     "file": "TC-B2C121-M-006-p06-pantalla-de-error-de-tiendas.png"
    },
    {
     "caption": "Paso 8 — listado tras reintentar sin el bloqueo",
     "file": "TC-B2C121-M-006-p08-listado-tras-reintentar-sin-el-bloqueo.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:130",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema muestra la pantalla de error.\n7. El usuario desactiva en DevTools el bloqueo de la request {STORE_LOCATOR_API_ENDPOINT}.\n8. El usuario toca \"Reintentar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{STORE_LOCATOR_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "El usuario es redirigido al Home.",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-007",
   "name": "Verificar que Volver al inicio desde el error de tiendas redirige al Home [Mobile] [Guest]",
   "observed": "Se cumplió el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PLP\n- DevTools abierto con bloqueo de la request {STORE_LOCATOR_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Paso 1 — plp cargada",
     "file": "TC-B2C121-M-007-p01-plp-cargada.png"
    },
    {
     "caption": "Paso 4 — pantalla de error de tiendas",
     "file": "TC-B2C121-M-007-p04-pantalla-de-error-de-tiendas.png"
    },
    {
     "caption": "Paso 5 — home tras volver al inicio",
     "file": "TC-B2C121-M-007-p05-home-tras-volver-al-inicio.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:152",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {PLP_URL}.\n2. El usuario toca el Store Locator del header.\n3. El usuario toca la pestaña \"Retiro en tienda\".\n4. El sistema muestra la pantalla de error.\n5. El usuario toca \"Volver al inicio\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n{STORE_LOCATOR_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/custom/smu-delivery/v1/organizations/f_ecom_bmkg_dev/stores?siteId=Unimarc",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el diálogo de el navegador solicitando permiso de ubicación.",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-008",
   "name": "Verificar que Activar mi ubicación sin permisos muestra la solicitud de permiso [Mobile] [Guest]",
   "observation": "El diálogo nativo del navegador no es observable por la automatización: se verificó permiso en \"prompt\", que el sitio solicita la ubicación y el estado \"Buscando tu ubicación…\".",
   "observed": "El diálogo nativo del navegador no es observable por la automatización: se verificó permiso en \"prompt\", que el sitio solicita la ubicación y el estado \"Buscando tu ubicación…\".",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Permiso de geolocalización no concedido en el navegador",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-M-008-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-M-008-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 6 — listado de tiendas de retiro en tienda",
     "file": "TC-B2C121-M-008-p06-listado-de-tiendas-de-retiro-en-tienda.png"
    },
    {
     "caption": "Paso 7 — tras activar mi ubicacion el dialogo nativo no es capturable",
     "file": "TC-B2C121-M-008-p07-tras-activar-mi-ubicacion-el-dialogo-nativo-no-es-capturable.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:173",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario toca \"Activar mi ubicación actual\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "El listado se reordena desde la tienda más cercana, cada tarjeta muestra los KM de distancia y solo se listan tiendas dentro de {RADIO_TIENDAS_KM} km.",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-009",
   "name": "Verificar que con permiso concedido las tiendas se ordenan por cercanía y muestran los km [Mobile] [Guest]",
   "observation": "Ubicación simulada en Santiago centro (la planilla no declara coordenadas).",
   "observed": "Ubicación simulada en Santiago centro (la planilla no declara coordenadas).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Permiso de geolocalización concedido en el navegador",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-M-009-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-M-009-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 7 — listado por cercania con km",
     "file": "TC-B2C121-M-009-p07-listado-por-cercania-con-km.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-M-009.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:192",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario toca \"Activar mi ubicación actual\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{RADIO_TIENDAS_KM} = 20",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "La tarjeta muestra nombre, dirección, mapa miniatura y distancia de {TIENDA_RETIRO_001}, con los botones \"Ir al mapa\" y \"Confirmar tienda\".",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-010",
   "name": "Verificar que al seleccionar una tienda se abre su tarjeta con mapa, distancia y Confirmar tienda [Mobile] [Guest]",
   "observation": "Esperado: tarjeta con nombre, dirección, mapa miniatura y distancia. Obtenido: sin distancia (km) en la tarjeta (sin ubicación activada). Bug: B2C-1394.",
   "observed": "La tarjeta muestra nombre, dirección, mapa miniatura y Confirmar tienda, pero no la distancia.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-M-010-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-M-010-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 8 — tarjeta de la tienda seleccionada",
     "file": "TC-B2C121-M-010-p08-tarjeta-de-la-tienda-seleccionada.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:210",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.\n8. El sistema muestra la tarjeta de información de la tienda.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{TIENDA_RETIRO_001} = Unimarc Las Condes",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se carga el mapa con pines de las tiendas habilitadas, un buscador dentro del mapa y el botón \"Volver a la lista\".",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-011",
   "name": "Verificar que Ir al mapa muestra los pines de tiendas, un buscador y Volver a la lista [Mobile] [Guest]",
   "observation": "El botón de regreso se rotula \"Ir a la lista\" (la planilla: \"Volver a la lista\").",
   "observed": "El botón de regreso se rotula \"Ir a la lista\" (la planilla: \"Volver a la lista\").",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-M-011-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-M-011-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 7 — vista de mapa con pines",
     "file": "TC-B2C121-M-011-p07-vista-de-mapa-con-pines.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-M-011.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:225",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario toca \"Ir al mapa\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra nombre, dirección y distancia de {TIENDA_RETIRO_001} y el botón \"Confirmar\".",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-012",
   "name": "Verificar que al seleccionar un pin del mapa se muestra la tienda y el botón Confirmar [Mobile] [Guest]",
   "observation": "Esperado: nombre, dirección y distancia de la tienda al elegir el pin. Obtenido: sin distancia (km) (sin ubicación activada). Bug: B2C-1396.",
   "observed": "Al elegir el pin se muestran nombre, dirección y Confirmar, pero no la distancia.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-M-012-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-M-012-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 8 — tarjeta del pin seleccionado",
     "file": "TC-B2C121-M-012-p08-tarjeta-del-pin-seleccionado.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:239",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario toca \"Ir al mapa\".\n8. El usuario toca el pin de {TIENDA_RETIRO_001}.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{TIENDA_RETIRO_001} = Unimarc Las Condes",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "La tienda {TIENDA_RETIRO_001} queda seteada como punto de retiro, el sistema regresa a la pantalla anterior y pregunta si desea iniciar sesión.",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-013",
   "name": "Verificar que un invitado sin carro confirma una tienda con horarios y queda seteada [Mobile] [Guest]",
   "observed": "Se cumplió el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El carro está vacío\n- {TIENDA_RETIRO_001} tiene cobertura y SLAs disponibles en Janis",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-M-013-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-M-013-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 8 — tarjeta de la tienda",
     "file": "TC-B2C121-M-013-p08-tarjeta-de-la-tienda.png"
    },
    {
     "caption": "Paso 10 — tienda seteada y opcion de iniciar sesion",
     "file": "TC-B2C121-M-013-p10-tienda-seteada-y-opcion-de-iniciar-sesion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-M-013.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:256",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.\n8. El sistema muestra la tarjeta de información de la tienda.\n9. El usuario toca \"Confirmar tienda\".\n10. El sistema muestra un loader.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{TIENDA_RETIRO_001} = Unimarc Las Condes",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el modal \"Por ahora no hay horarios disponibles\" (B2C-127).",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-014",
   "name": "Verificar que un invitado que confirma una tienda sin horarios va al flujo Sin horarios [Mobile] [Guest]",
   "observation": "Falta en el Excel de data {TIENDA_RETIRO_SIN_SLA} (TBD). Acción: cargar la tienda sin horarios en el Excel de data.",
   "observed": "Falta en el Excel de data {TIENDA_RETIRO_SIN_SLA} (TBD). Acción: cargar la tienda sin horarios en el Excel de data.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El carro está vacío",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y toca \"Confirmar tienda\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el modal \"Algunos productos podrían agotarse\" (B2C-122).",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-015",
   "name": "Verificar que un invitado con carro que confirma una tienda ve el modal No se te escapen [Mobile] [Guest]",
   "observation": "El carro con {SKU_VALID_001} exige una forma de entrega activa (sin ella el sitio pide elegir dirección/tienda) y la columna Test data no declara dirección ni tienda activa distinta de {TIENDA_RETIRO_001}. Acción: declarar en la planilla el token de la forma de entrega activa.",
   "observed": "El carro con {SKU_VALID_001} exige una forma de entrega activa (sin ella el sitio pide elegir dirección/tienda) y la columna Test data no declara dirección ni tienda activa distinta de {TIENDA_RETIRO_001}. Acción: declarar en la planilla el token de la forma de entrega activa.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El carro contiene {SKU_VALID_001}\n- La tienda abastecedora de {TIENDA_RETIRO_001} es distinta a la activa",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.\n8. El sistema muestra la tarjeta de información de la tienda.\n9. El usuario toca \"Confirmar tienda\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el modal \"Aún no llegamos a esta dirección\" (B2C-123).",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-016",
   "name": "Verificar que un invitado que confirma una tienda sin cobertura va al flujo Sin cobertura [Mobile] [Guest]",
   "observed": "Se cumplió el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-M-016-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-M-016-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 7 — tienda seleccionada",
     "file": "TC-B2C121-M-016-p07-tienda-seleccionada.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-M-016.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:271",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_COBERTURA} y toca \"Confirmar tienda\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{TIENDA_RETIRO_SIN_COBERTURA} = Unimarc Los Lagos II",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra \"Lo sentimos, no pudimos cambiar la tienda de retiro. Inténtalo nuevamente.\" y {TIENDA_RETIRO_001} permanece activa.",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-017",
   "name": "Verificar que un error al confirmar la tienda muestra el mensaje y mantiene la tienda anterior [Mobile] [Guest]",
   "observation": "{SETEO_ENTREGA_API_ENDPOINT} resuelve a un endpoint de Google Maps (GetViewportInfo), no a la API de seteo de entrega: bloqueado, la confirmación de la tienda se aplica igual (cambia a Unimarc Los Trapenses) y no se puede provocar el error. Acción: corregir el valor del token con la request real de seteo de entrega.",
   "observed": "{SETEO_ENTREGA_API_ENDPOINT} resuelve a un endpoint de Google Maps (GetViewportInfo), no a la API de seteo de entrega: bloqueado, la confirmación de la tienda se aplica igual (cambia a Unimarc Los Trapenses) y no se puede provocar el error. Acción: corregir el valor del token con la request real de seteo de entrega.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La tienda {TIENDA_RETIRO_001} está seteada como punto de retiro\n- DevTools abierto con bloqueo de la request {SETEO_ENTREGA_API_ENDPOINT} (Network request blocking)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_002} y toca \"Confirmar tienda\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SETEO_ENTREGA_API_ENDPOINT} = *://maps.googleapis.com/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/GetViewportInfo\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{TIENDA_RETIRO_002} = Unimarc Los Trapenses",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el modal \"Por ahora no hay horarios disponibles\" (B2C-127).",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-021",
   "name": "Verificar que un logueado sin carro que valida OTP con tienda sin horarios va a Sin horarios [Mobile] [Logueado]",
   "observation": "Falta en el Excel de data {TIENDA_RETIRO_SIN_SLA} (TBD); además exige login con OTP. Acción: cargar la tienda sin horarios en el Excel de data.",
   "observed": "Falta en el Excel de data {TIENDA_RETIRO_SIN_SLA} (TBD); además exige login con OTP. Acción: cargar la tienda sin horarios en el Excel de data.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro está vacío\n- Acceso a la casilla de correo de la cuenta para leer el código OTP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_SIN_SLA} y toca \"Confirmar tienda\".\n8. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n9. El usuario ingresa el código OTP recibido y presiona \"Continuar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "El header muestra el nombre de {TIENDA_RETIRO_001}, la próxima ventana de retiro y el chip \"Gratis\", y se ofrece la opción de iniciar sesión.",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-023",
   "name": "Verificar que tras confirmar la tienda el header del invitado muestra tienda, ventana, Gratis y login [Mobile] [Guest]",
   "observed": "Se cumplió el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 2 — home cargado",
     "file": "TC-B2C121-M-023-p02-home-cargado.png"
    },
    {
     "caption": "Paso 4 — store locator abierto",
     "file": "TC-B2C121-M-023-p04-store-locator-abierto.png"
    },
    {
     "caption": "Paso 8 — tarjeta de la tienda",
     "file": "TC-B2C121-M-023-p08-tarjeta-de-la-tienda.png"
    },
    {
     "caption": "Paso 10 — header tras confirmar",
     "file": "TC-B2C121-M-023-p10-header-tras-confirmar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-M-023.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:301",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.\n7. El usuario selecciona la tienda {TIENDA_RETIRO_001} del listado.\n8. El sistema muestra la tarjeta de información de la tienda.\n9. El usuario toca \"Confirmar tienda\".\n10. El usuario revisa el header.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{TIENDA_RETIRO_001} = Unimarc Las Condes",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "La pestaña Retiro en tienda queda activa y se muestra \"Selecciona tu tienda Unimarc\", el buscador con placeholder \"Ej: dirección, comuna o nombre\", el botón \"Ir al mapa\" a la derecha del buscador, el link \"Activar mi ubicación actual\" debajo del buscador y el listado de tiendas activas con flag de retiro en tienda (nombre, dirección y radio button), sin ninguna tienda marcada como seteada; el método activo sigue siendo despacho a {DIRECCION_DESPACHO_001} mientras no se confirme una tienda.",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-024",
   "name": "Verificar que al cambiar desde Despacho a domicilio sin tienda previa se muestra la pantalla inicial de Retiro en tienda [Desktop] [Guest]",
   "observed": "Se cumplió el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Despacho a domicilio activo con la dirección {DIRECCION_DESPACHO_001}\n- El usuario nunca ha seteado una tienda de retiro (sin tienda de retiro previa)",
   "screenshots": [
    {
     "caption": "Paso 4 — store locator con despacho a domicilio activo",
     "file": "TC-B2C121-D-024-p04-store-locator-con-despacho-a-domicilio-activo.png"
    },
    {
     "caption": "Paso 6 — pestana retiro en tienda",
     "file": "TC-B2C121-D-024-p06-pestana-retiro-en-tienda.png"
    },
    {
     "caption": "TC B2C121 D 024 ppre precondicion despacho activo",
     "file": "TC-B2C121-D-024-ppre-precondicion-despacho-activo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-D-024.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:327",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator con la pestaña Despacho a domicilio activa y {DIRECCION_DESPACHO_001}.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "La pestaña Retiro en tienda queda activa y se muestra \"Selecciona tu tienda Unimarc\", el buscador con placeholder \"Ej: dirección, comuna o nombre\", el botón \"Ir al mapa\" a la derecha del buscador, el link \"Activar mi ubicación actual\" debajo del buscador y el listado de tiendas activas con flag de retiro en tienda (nombre, dirección y radio button), sin ninguna tienda marcada como seteada.",
   "form_factor": "desktop",
   "id": "TC-B2C121-D-025",
   "name": "Verificar que al acceder por primera vez al Store Locator en modo Retiro en tienda se muestra la pantalla inicial [Desktop] [Guest]",
   "observed": "Se cumplió el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Primera visita: sesión nueva sin cookies ni datos persistidos (ventana de incógnito o datos del sitio borrados)\n- Sin dirección ni tienda seteada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — store locator sin metodo de entrega",
     "file": "TC-B2C121-D-025-p04-store-locator-sin-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — pestana retiro en tienda",
     "file": "TC-B2C121-D-025-p06-pestana-retiro-en-tienda.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-D-025.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:360",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el Store Locator sin método de entrega seteado.\n5. El usuario hace clic en la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "La pestaña Retiro en tienda queda activa y se muestra \"Selecciona tu tienda Unimarc\", el buscador con placeholder \"Ej: dirección, comuna o nombre\", el botón \"Ir al mapa\" a la derecha del buscador, el link \"Activar mi ubicación actual\" debajo del buscador y el listado de tiendas activas con flag de retiro en tienda (nombre, dirección y radio button), sin ninguna tienda marcada como seteada; el método activo sigue siendo despacho a {DIRECCION_DESPACHO_001} mientras no se confirme una tienda.",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-024",
   "name": "Verificar que al cambiar desde Despacho a domicilio sin tienda previa se muestra la pantalla inicial de Retiro en tienda [Mobile] [Guest]",
   "observed": "Se cumplió el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Despacho a domicilio activo con la dirección {DIRECCION_DESPACHO_001}\n- El usuario nunca ha seteado una tienda de retiro (sin tienda de retiro previa)",
   "screenshots": [
    {
     "caption": "Paso 4 — store locator con despacho a domicilio activo",
     "file": "TC-B2C121-M-024-p04-store-locator-con-despacho-a-domicilio-activo.png"
    },
    {
     "caption": "Paso 6 — pestana retiro en tienda",
     "file": "TC-B2C121-M-024-p06-pestana-retiro-en-tienda.png"
    },
    {
     "caption": "TC B2C121 M 024 ppre precondicion despacho activo",
     "file": "TC-B2C121-M-024-ppre-precondicion-despacho-activo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-M-024.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:327",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator con la pestaña Despacho a domicilio activa y {DIRECCION_DESPACHO_001}.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-27",
   "expected": "La pestaña Retiro en tienda queda activa y se muestra \"Selecciona tu tienda Unimarc\", el buscador con placeholder \"Ej: dirección, comuna o nombre\", el botón \"Ir al mapa\" a la derecha del buscador, el link \"Activar mi ubicación actual\" debajo del buscador y el listado de tiendas activas con flag de retiro en tienda (nombre, dirección y radio button), sin ninguna tienda marcada como seteada.",
   "form_factor": "mobile",
   "id": "TC-B2C121-M-025",
   "name": "Verificar que al acceder por primera vez al Store Locator en modo Retiro en tienda se muestra la pantalla inicial [Mobile] [Guest]",
   "observed": "Se cumplió el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Primera visita: sesión nueva sin cookies ni datos persistidos (ventana de incógnito o datos del sitio borrados)\n- Sin dirección ni tienda seteada en el Store Locator",
   "screenshots": [
    {
     "caption": "Paso 4 — store locator sin metodo de entrega",
     "file": "TC-B2C121-M-025-p04-store-locator-sin-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — pestana retiro en tienda",
     "file": "TC-B2C121-M-025-p06-pestana-retiro-en-tienda.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C121-M-025.png"
    }
   ],
   "spec": "tests/B2C-121.spec.ts:360",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el Store Locator sin método de entrega seteado.\n5. El usuario toca la pestaña \"Retiro en tienda\".\n6. El sistema carga el listado de tiendas.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
   "viewport": "390x844"
  }
 ]
}
-->
