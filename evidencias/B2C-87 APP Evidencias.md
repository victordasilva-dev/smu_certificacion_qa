# B2C-87 APP - Ordenamiento de listados (App) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-87 APP |
| Última actualización | 2026-11-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc QA (cl.smu.unimarcapp.sfcc.qa, build v1.0.1) contra DEV |
| Dispositivo Android | Pixel 4 API 33 · Android 13 · emulador local |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-87 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 8 |
| Aprobado | 1 |
| Rechazado | 1 |
| **Total** | **10** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-16 | 10 | TC-B2C87-APP-001, TC-B2C87-APP-005, TC-B2C87-APP-008, TC-B2C87-APP-012, TC-B2C87-APP-015, TC-B2C87-APP-016, TC-B2C87-APP-017, TC-B2C87-APP-018, TC-B2C87-APP-019, TC-B2C87-APP-023 |

## Detalle por caso de prueba

### TC-B2C87-APP-001 - Verificar que el modal de filtros despliega "Ordena tus productos" en PLP N2, N3, SRP y Colección [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-87.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP N2

**Data utilizada**

{CATEGORY_N2_URL} carnes_cerdo → PLP "Cerdo" (Categorías › Carnes › Cerdo)

{CATEGORY_N3_URL} carnes_cerdo_chuleta → chip "Chuleta"

{SEARCH_TERM_001} leche

{COLECCION_URL} test-pcv2-collection

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP N2 equivalente a {CATEGORY_N2_URL}.
2. El sistema carga la PLP N2 con el listado de productos.
3. El usuario toca el ícono de filtros.
4. El sistema abre el modal de filtros y despliega en "Ordena tus productos" las opciones de ordenamiento de la PLP N2.
5. El usuario abre la App {APP_BUILD} y navega a la PLP N3 equivalente a {CATEGORY_N3_URL}.
6. El sistema carga la PLP N3 con el listado de productos.
7. El usuario toca el ícono de filtros.
8. El sistema abre el modal de filtros y despliega en "Ordena tus productos" las opciones de ordenamiento de la PLP N3.
9. El usuario abre la App {APP_BUILD}, busca {SEARCH_TERM_001} y toca "Buscar" en el teclado.
10. El sistema carga la SRP con el listado de productos.
11. El usuario toca el ícono de filtros.
12. El sistema abre el modal de filtros y despliega en "Ordena tus productos" las opciones de ordenamiento de la SRP.
13. El usuario abre la App {APP_BUILD} y navega a la Colección equivalente a {COLECCION_URL}.
14. El sistema carga la Colección con el listado de productos.
15. El usuario toca el ícono de filtros.
16. El sistema abre el modal de filtros y despliega en "Ordena tus productos" las opciones de ordenamiento de la Colección.

**Resultado esperado**

En PLP N2, PLP N3, SRP y Colección el modal de filtros muestra la sección "Ordena tus productos" con las opciones de ordenamiento.

**Resultado obtenido**

PLP N2 "Cerdo", PLP N3 "Chuleta" y SRP de "leche": el modal "Selecciona tus filtros" muestra "Ordena tus productos" con sus opciones en los tres. La Colección no se pudo verificar.

**Observación**

Causa: {COLECCION_URL} (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/test-pcv2-collection) responde "No encontramos esta página" en DEV y la app no tiene una colección equivalente a la que navegar. PLP N2, PLP N3 y SRP: OK. Acción: declarar una colección que exista en DEV y sea accesible desde la app. La fila no declara "Plataforma:" (dice "Viewport: App iOS/Android"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.

**Evidencia**

![Android · Paso 4 — plp n2 cerdo ordena tus productos](<B2C-87 APP Evidencias/TC-B2C87-APP-001-android-p04-plp-n2-cerdo-ordena-tus-productos.png>)

![Android · Paso 8 — plp n3 chuleta ordena tus productos](<B2C-87 APP Evidencias/TC-B2C87-APP-001-android-p08-plp-n3-chuleta-ordena-tus-productos.png>)

![Android · Paso 12 — srp ordena tus productos](<B2C-87 APP Evidencias/TC-B2C87-APP-001-android-p12-srp-ordena-tus-productos.png>)

---

### TC-B2C87-APP-005 - Verificar que "Más vendido" ordena según el ranking de ventas de SFCC [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP
- {RANKING_MAS_VENDIDOS_REF} contiene el ranking de ventas de la categoría obtenido desde Business Manager

**Data utilizada**

{CATEGORY_N2_URL} carnes_cerdo → PLP "Cerdo" (Categorías › Carnes › Cerdo)

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP N2 equivalente a {CATEGORY_N2_URL}.
2. El sistema carga la PLP N2 con el listado de productos.
3. El usuario toca el ícono de filtros.
4. El sistema abre el modal de filtros con la sección "Ordena tus productos".
5. El usuario toca la opción "Más vendido" en "Ordena tus productos".
6. El sistema marca la opción "Más vendido".
7. El usuario toca "Mostrar [N] productos".
8. El sistema cierra el modal, muestra el skeleton de carga y refresca el listado ordenado por "Más vendido".

**Resultado esperado**

El orden de los productos del listado (sin contar patrocinados) coincide con {RANKING_MAS_VENDIDOS_REF}.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: falta {RANKING_MAS_VENDIDOS_REF} en el Excel de data (sin fila). Acción: cargar el ranking de ventas de la categoría obtenido de Business Manager. La fila no declara "Plataforma:" (dice "Viewport: App iOS/Android"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.

---

### TC-B2C87-APP-008 - Verificar que "Pensados para ti" prioriza los productos afines al historial del cliente [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PLP
- Sesión iniciada con la cuenta {COMPRADOR_CON_HISTORIAL_USER}
- La cuenta {COMPRADOR_CON_HISTORIAL_USER} tiene historial de compras que incluye {SKU_HISTORIAL_001}
- {SKU_HISTORIAL_001} pertenece a la categoría de {CATEGORY_N2_URL}

**Data utilizada**

{CATEGORY_N2_URL} carnes_cerdo → PLP "Cerdo" (Categorías › Carnes › Cerdo)

{COMPRADOR_CON_HISTORIAL_USER} vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP N2 equivalente a {CATEGORY_N2_URL}.
2. El sistema carga la PLP ordenada por "Recomendado".
3. El usuario anota la posición de {SKU_HISTORIAL_001} en el listado.
4. El usuario toca el ícono de filtros.
5. El sistema abre el modal de filtros con la sección "Ordena tus productos".
6. El usuario toca la opción "Pensados para ti" en "Ordena tus productos".
7. El sistema marca la opción "Pensados para ti".
8. El usuario toca "Mostrar [N] productos".
9. El sistema cierra el modal, muestra el skeleton de carga y refresca el listado ordenado por "Pensados para ti".

**Resultado esperado**

El orden del listado difiere del de "Recomendado" y {SKU_HISTORIAL_001} aparece en una posición más alta que con "Recomendado".

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: falta {SKU_HISTORIAL_001} en el Excel de data (sin fila). Acción: cargar el SKU que está en el historial de compras de {COMPRADOR_CON_HISTORIAL_USER}. La fila no declara "Plataforma:" (dice "Viewport: App iOS/Android"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.

---

### TC-B2C87-APP-012 - Verificar que cambiar el orden mantiene el filtro de marca activo y la cantidad de productos [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-87.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

{PLP_URL_NxM} despensa_coctel-y-snacks_papas-fritas → PLP "Papas fritas"

{BRAND_001} Lays

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL_NxM}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca el ícono de filtros.
4. El sistema abre el modal de filtros con la sección "Ordena tus productos".
5. El usuario selecciona la marca {BRAND_001} en los filtros y toca "Mostrar [N] productos".
6. El sistema aplica el filtro y muestra solo productos de {BRAND_001}.
7. El usuario anota la cantidad de productos del listado.
8. El usuario toca el ícono de filtros.
9. El sistema abre el modal de filtros con la sección "Ordena tus productos".
10. El usuario toca la opción "Precio más alto" en "Ordena tus productos".
11. El sistema marca la opción "Precio más alto".
12. El usuario toca "Mostrar [N] productos".
13. El sistema cierra el modal, muestra el skeleton de carga y refresca el listado ordenado por "Precio más alto".

**Resultado esperado**

El filtro {BRAND_001} sigue activo, la cantidad de productos es la misma anotada y solo cambia el orden (mayor a menor precio).

**Resultado obtenido**

En la PLP "Papas fritas" (Despensa › Cóctel y snacks › Papas fritas, 12 productos) se filtra por la marca Lays (el ícono de filtros marca 1, 12 productos, todos Lays). Al cambiar el orden a "Precio más alto" se mantienen el filtro y los 12 productos, ahora de mayor a menor precio de venta.

**Observación**

La fila no declara "Plataforma:" (dice "Viewport: App iOS/Android"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.

**Evidencia**

![Android · Paso 2 — plp papas fritas](<B2C-87 APP Evidencias/TC-B2C87-APP-012-android-p02-plp-papas-fritas.png>)

![Android · Paso 5 — marca lays seleccionada](<B2C-87 APP Evidencias/TC-B2C87-APP-012-android-p05-marca-lays-seleccionada.png>)

![Android · Paso 7 — listado filtrado por lays](<B2C-87 APP Evidencias/TC-B2C87-APP-012-android-p07-listado-filtrado-por-lays.png>)

![Android · Paso 11 — precio mas alto marcado con la marca activa](<B2C-87 APP Evidencias/TC-B2C87-APP-012-android-p11-precio-mas-alto-marcado-con-la-marca-activa.png>)

![Android · Paso 13 — listado ordenado por precio mas alto](<B2C-87 APP Evidencias/TC-B2C87-APP-012-android-p13-listado-ordenado-por-precio-mas-alto.png>)

---

### TC-B2C87-APP-015 - Verificar que el producto patrocinado conserva su posición destacada al cambiar el orden [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP
- {SKU_PATROCINADO} está configurado como patrocinado en {PLP_URL_PATROCINADO}

**Data utilizada**

{PLP_URL_PATROCINADO} panaderia-y-pasteleria

{SKU_PATROCINADO} 000000000000642688-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL_PATROCINADO}.
2. El sistema carga la PLP con {SKU_PATROCINADO} en posición destacada.
3. El usuario anota la posición de {SKU_PATROCINADO}.
4. El usuario toca el ícono de filtros.
5. El sistema abre el modal de filtros con la sección "Ordena tus productos".
6. El usuario toca la opción "Precio más bajo" en "Ordena tus productos".
7. El sistema marca la opción "Precio más bajo".
8. El usuario toca "Mostrar [N] productos".
9. El sistema cierra el modal, muestra el skeleton de carga y refresca el listado ordenado por "Precio más bajo".

**Resultado esperado**

{SKU_PATROCINADO} mantiene su posición destacada y el resto de los productos queda de menor a mayor precio de venta.

**Resultado obtenido**

La PLP declarada es una N1 que en la app no tiene ordenamiento.

**Observación**

Causa: {PLP_URL_PATROCINADO} (/category/panaderia-y-pasteleria) es una N1 que en la app es una landing con un carrusel por N2 (Pan, Pan envasado), sin botón de filtros ni ordenamiento; además {SKU_PATROCINADO} 000000000000642688-UN no aparece como "Patrocinado" en las PLP Pan ni Pan envasado. Acción: declarar una PLP N2/N3 donde {SKU_PATROCINADO} esté configurado como patrocinado. La fila no declara "Plataforma:" (dice "Viewport: App iOS/Android"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.

**Evidencia**

![Android · Paso 1 — panaderia n1 sin ordenamiento](<B2C-87 APP Evidencias/TC-B2C87-APP-015-android-p01-panaderia-n1-sin-ordenamiento.png>)

![Android · Paso 2 — plp pan sin patrocinado](<B2C-87 APP Evidencias/TC-B2C87-APP-015-android-p02-plp-pan-sin-patrocinado.png>)

---

### TC-B2C87-APP-016 - Verificar que una falla al ordenar muestra el estado de error PLP-013 [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

{PLP_URL} carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario activa: {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {PLP_SORT_API_ENDPOINT}.
4. El usuario toca el ícono de filtros.
5. El sistema abre el modal de filtros con la sección "Ordena tus productos".
6. El usuario toca la opción "Precio más bajo" en "Ordena tus productos".
7. El sistema marca la opción "Precio más bajo".
8. El usuario toca "Mostrar [N] productos".
9. El sistema muestra el mensaje destacado "Tuvimos un problema al cargar los productos.", el texto "Estamos trabajando para solucionarlo. Intenta nuevamente en unos segundos, Error PLP-013" y los botones "Reintentar" e "Ir al inicio".

**Resultado esperado**

Se muestra el estado de error con "Tuvimos un problema al cargar los productos.", el texto con "Error PLP-013", "Reintentar" e "Ir al inicio".

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data: no hay herramienta declarada para forzar el error de {PLP_SORT_API_ENDPOINT}. Acción: declarar la herramienta de proxy para la app. La fila no declara "Plataforma:" (dice "Viewport: App iOS/Android"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.

---

### TC-B2C87-APP-017 - Verificar que "Reintentar" del error de ordenamiento vuelve a cargar el listado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

{PLP_URL} carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario activa: {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {PLP_SORT_API_ENDPOINT}.
4. El usuario toca el ícono de filtros.
5. El sistema abre el modal de filtros con la sección "Ordena tus productos".
6. El usuario toca la opción "Precio más bajo" en "Ordena tus productos".
7. El sistema marca la opción "Precio más bajo".
8. El usuario toca "Mostrar [N] productos".
9. El sistema muestra el mensaje destacado "Tuvimos un problema al cargar los productos.", el texto "Estamos trabajando para solucionarlo. Intenta nuevamente en unos segundos, Error PLP-013" y los botones "Reintentar" e "Ir al inicio".
10. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en {PLP_SORT_API_ENDPOINT}.
11. El usuario toca "Reintentar".
12. El sistema recarga la PLP con el listado de productos.

**Resultado esperado**

La PLP vuelve a cargar y muestra el listado de productos.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data: no hay herramienta declarada para forzar el error de {PLP_SORT_API_ENDPOINT}. Acción: declarar la herramienta de proxy para la app. La fila no declara "Plataforma:" (dice "Viewport: App iOS/Android"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.

---

### TC-B2C87-APP-018 - Verificar que "Ir al inicio" del error de ordenamiento redirige al Home [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

{PLP_URL} carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario activa: {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {PLP_SORT_API_ENDPOINT}.
4. El usuario toca el ícono de filtros.
5. El sistema abre el modal de filtros con la sección "Ordena tus productos".
6. El usuario toca la opción "Precio más bajo" en "Ordena tus productos".
7. El sistema marca la opción "Precio más bajo".
8. El usuario toca "Mostrar [N] productos".
9. El sistema muestra el mensaje destacado "Tuvimos un problema al cargar los productos.", el texto "Estamos trabajando para solucionarlo. Intenta nuevamente en unos segundos, Error PLP-013" y los botones "Reintentar" e "Ir al inicio".
10. El usuario toca "Ir al inicio".
11. El sistema redirige a el Home de la App.

**Resultado esperado**

El usuario queda en el Home de la App.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data: no hay herramienta declarada para forzar el error de {PLP_SORT_API_ENDPOINT}. Acción: declarar la herramienta de proxy para la app. La fila no declara "Plataforma:" (dice "Viewport: App iOS/Android"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.

---

### TC-B2C87-APP-019 - Verificar que "Pensados para ti" sin historial ordena como "Recomendado" sin mostrar error [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |
| Spec | tests-app/B2C-87.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PLP
- Sesión iniciada con la cuenta {COMPRADOR_SIN_HISTORIAL_USER}
- La cuenta {COMPRADOR_SIN_HISTORIAL_USER} no tiene historial de compras ni clics

**Data utilizada**

{CATEGORY_N2_URL} carnes_cerdo → PLP "Cerdo" (Categorías › Carnes › Cerdo)

{COMPRADOR_SIN_HISTORIAL_USER} vhchirinos+noaddress@avatar-global.com (login por correo + código OTP)

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP N2 equivalente a {CATEGORY_N2_URL}.
2. El sistema carga la PLP ordenada por "Recomendado".
3. El usuario anota los 10 primeros productos del listado.
4. El usuario toca el ícono de filtros.
5. El sistema abre el modal de filtros con la sección "Ordena tus productos".
6. El usuario toca la opción "Pensados para ti" en "Ordena tus productos".
7. El sistema marca la opción "Pensados para ti".
8. El usuario toca "Mostrar [N] productos".
9. El sistema cierra el modal, muestra el skeleton de carga y refresca el listado ordenado por "Pensados para ti".
10. El usuario toca el ícono de filtros.
11. El sistema abre el modal con "Pensados para ti" marcado.

**Resultado esperado**

El listado muestra los mismos 10 primeros productos que con "Recomendado", "Pensados para ti" sigue marcado y no se muestra ningún mensaje de error.

**Resultado obtenido**

Con la cuenta sin historial, "Recomendado" muestra primero 626717, 627635, 661144, 626716, 661145…; con "Pensados para ti" el orden cambia: 668797 (Plateada de cerdo, que no estaba entre los 10 primeros), 344508, 665306, 179912… No se muestra ningún error y "Pensados para ti" sigue marcado.

**Observación**

Esperado: con una cuenta sin historial, "Pensados para ti" muestra los mismos 10 primeros productos que "Recomendado". Obtenido: el orden cambia y aparecen productos que no estaban entre los 10 primeros. Paso 10. Reproducible en 3 de 3 intentos. Bug: B2C-1499. La fila no declara "Plataforma:" (dice "Viewport: App iOS/Android"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.

**Evidencia**

![Android · Paso 3 — plp n2 con recomendado](<B2C-87 APP Evidencias/TC-B2C87-APP-019-android-p03-plp-n2-con-recomendado.png>)

![Android · Paso 10 — plp n2 con pensados para ti](<B2C-87 APP Evidencias/TC-B2C87-APP-019-android-p10-plp-n2-con-pensados-para-ti.png>)

![Android · Paso 11 — pensados para ti sigue marcado](<B2C-87 APP Evidencias/TC-B2C87-APP-019-android-p11-pensados-para-ti-sigue-marcado.png>)

![Estado al fallar la aserción](<B2C-87 APP Evidencias/TC-B2C87-APP-019-android.png>)

---

### TC-B2C87-APP-023 - Verificar que "Pensados para ti" en la SRP ordena los resultados según la afinidad del cliente [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 4 API 33 · Android 13 · emulador local |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: SRP
- Sesión iniciada con la cuenta {COMPRADOR_CON_HISTORIAL_USER}
- La cuenta {COMPRADOR_CON_HISTORIAL_USER} tiene historial de compras que incluye {SKU_HISTORIAL_001}
- {SKU_HISTORIAL_001} aparece en los resultados de {SEARCH_TERM_001}

**Data utilizada**

{SEARCH_TERM_001} leche

{COMPRADOR_CON_HISTORIAL_USER} vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}, busca {SEARCH_TERM_001} y toca "Buscar" en el teclado.
2. El sistema carga la SRP ordenada por "Recomendado".
3. El usuario anota la posición de {SKU_HISTORIAL_001} en los resultados.
4. El usuario toca el ícono de filtros.
5. El sistema abre el modal de filtros con la sección "Ordena tus productos".
6. El usuario toca la opción "Pensados para ti" en "Ordena tus productos".
7. El sistema marca la opción "Pensados para ti".
8. El usuario toca "Mostrar [N] productos".
9. El sistema cierra el modal, muestra el skeleton de carga y refresca el listado ordenado por "Pensados para ti".

**Resultado esperado**

Los resultados siguen siendo los de la búsqueda activa, el orden difiere del de "Recomendado" y {SKU_HISTORIAL_001} sube de posición.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: falta {SKU_HISTORIAL_001} en el Excel de data (sin fila). Acción: cargar el SKU que está en el historial de compras de {COMPRADOR_CON_HISTORIAL_USER}. La fila no declara "Plataforma:" (dice "Viewport: App iOS/Android"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Pixel 4 API 33 · Android 13 · emulador local"
  },
  "environment": "App Unimarc QA (cl.smu.unimarcapp.sfcc.qa, build v1.0.1) contra DEV",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-87 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-87 APP Test Cases.xlsx",
  "title": "B2C-87 APP - Ordenamiento de listados (App) - Evidencias QA",
  "updated_at": "2026-11-16"
 },
 "history": {
  "2026-11-16": [
   "TC-B2C87-APP-001",
   "TC-B2C87-APP-005",
   "TC-B2C87-APP-008",
   "TC-B2C87-APP-012",
   "TC-B2C87-APP-015",
   "TC-B2C87-APP-016",
   "TC-B2C87-APP-017",
   "TC-B2C87-APP-018",
   "TC-B2C87-APP-019",
   "TC-B2C87-APP-023"
  ]
 },
 "results": [
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "En PLP N2, PLP N3, SRP y Colección el modal de filtros muestra la sección \"Ordena tus productos\" con las opciones de ordenamiento.",
   "form_factor": "app",
   "id": "TC-B2C87-APP-001",
   "name": "Verificar que el modal de filtros despliega \"Ordena tus productos\" en PLP N2, N3, SRP y Colección [App] [Guest]",
   "observation": "Causa: {COLECCION_URL} (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/test-pcv2-collection) responde \"No encontramos esta página\" en DEV y la app no tiene una colección equivalente a la que navegar. PLP N2, PLP N3 y SRP: OK. Acción: declarar una colección que exista en DEV y sea accesible desde la app. La fila no declara \"Plataforma:\" (dice \"Viewport: App iOS/Android\"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.",
   "observed": "PLP N2 \"Cerdo\", PLP N3 \"Chuleta\" y SRP de \"leche\": el modal \"Selecciona tus filtros\" muestra \"Ordena tus productos\" con sus opciones en los tres. La Colección no se pudo verificar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP N2",
   "screenshots": [
    {
     "caption": "Android · Paso 4 — plp n2 cerdo ordena tus productos",
     "file": "TC-B2C87-APP-001-android-p04-plp-n2-cerdo-ordena-tus-productos.png"
    },
    {
     "caption": "Android · Paso 8 — plp n3 chuleta ordena tus productos",
     "file": "TC-B2C87-APP-001-android-p08-plp-n3-chuleta-ordena-tus-productos.png"
    },
    {
     "caption": "Android · Paso 12 — srp ordena tus productos",
     "file": "TC-B2C87-APP-001-android-p12-srp-ordena-tus-productos.png"
    }
   ],
   "spec": "tests-app/B2C-87.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP N2 equivalente a {CATEGORY_N2_URL}.\n2. El sistema carga la PLP N2 con el listado de productos.\n3. El usuario toca el ícono de filtros.\n4. El sistema abre el modal de filtros y despliega en \"Ordena tus productos\" las opciones de ordenamiento de la PLP N2.\n5. El usuario abre la App {APP_BUILD} y navega a la PLP N3 equivalente a {CATEGORY_N3_URL}.\n6. El sistema carga la PLP N3 con el listado de productos.\n7. El usuario toca el ícono de filtros.\n8. El sistema abre el modal de filtros y despliega en \"Ordena tus productos\" las opciones de ordenamiento de la PLP N3.\n9. El usuario abre la App {APP_BUILD}, busca {SEARCH_TERM_001} y toca \"Buscar\" en el teclado.\n10. El sistema carga la SRP con el listado de productos.\n11. El usuario toca el ícono de filtros.\n12. El sistema abre el modal de filtros y despliega en \"Ordena tus productos\" las opciones de ordenamiento de la SRP.\n13. El usuario abre la App {APP_BUILD} y navega a la Colección equivalente a {COLECCION_URL}.\n14. El sistema carga la Colección con el listado de productos.\n15. El usuario toca el ícono de filtros.\n16. El sistema abre el modal de filtros y despliega en \"Ordena tus productos\" las opciones de ordenamiento de la Colección.",
   "test_data": "{CATEGORY_N2_URL} carnes_cerdo → PLP \"Cerdo\" (Categorías › Carnes › Cerdo)\n{CATEGORY_N3_URL} carnes_cerdo_chuleta → chip \"Chuleta\"\n{SEARCH_TERM_001} leche\n{COLECCION_URL} test-pcv2-collection"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El orden de los productos del listado (sin contar patrocinados) coincide con {RANKING_MAS_VENDIDOS_REF}.",
   "form_factor": "app",
   "id": "TC-B2C87-APP-005",
   "name": "Verificar que \"Más vendido\" ordena según el ranking de ventas de SFCC [App] [Guest]",
   "observation": "Causa: falta {RANKING_MAS_VENDIDOS_REF} en el Excel de data (sin fila). Acción: cargar el ranking de ventas de la categoría obtenido de Business Manager. La fila no declara \"Plataforma:\" (dice \"Viewport: App iOS/Android\"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP\n- {RANKING_MAS_VENDIDOS_REF} contiene el ranking de ventas de la categoría obtenido desde Business Manager",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP N2 equivalente a {CATEGORY_N2_URL}.\n2. El sistema carga la PLP N2 con el listado de productos.\n3. El usuario toca el ícono de filtros.\n4. El sistema abre el modal de filtros con la sección \"Ordena tus productos\".\n5. El usuario toca la opción \"Más vendido\" en \"Ordena tus productos\".\n6. El sistema marca la opción \"Más vendido\".\n7. El usuario toca \"Mostrar [N] productos\".\n8. El sistema cierra el modal, muestra el skeleton de carga y refresca el listado ordenado por \"Más vendido\".",
   "test_data": "{CATEGORY_N2_URL} carnes_cerdo → PLP \"Cerdo\" (Categorías › Carnes › Cerdo)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El orden del listado difiere del de \"Recomendado\" y {SKU_HISTORIAL_001} aparece en una posición más alta que con \"Recomendado\".",
   "form_factor": "app",
   "id": "TC-B2C87-APP-008",
   "name": "Verificar que \"Pensados para ti\" prioriza los productos afines al historial del cliente [App] [Logueado]",
   "observation": "Causa: falta {SKU_HISTORIAL_001} en el Excel de data (sin fila). Acción: cargar el SKU que está en el historial de compras de {COMPRADOR_CON_HISTORIAL_USER}. La fila no declara \"Plataforma:\" (dice \"Viewport: App iOS/Android\"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PLP\n- Sesión iniciada con la cuenta {COMPRADOR_CON_HISTORIAL_USER}\n- La cuenta {COMPRADOR_CON_HISTORIAL_USER} tiene historial de compras que incluye {SKU_HISTORIAL_001}\n- {SKU_HISTORIAL_001} pertenece a la categoría de {CATEGORY_N2_URL}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP N2 equivalente a {CATEGORY_N2_URL}.\n2. El sistema carga la PLP ordenada por \"Recomendado\".\n3. El usuario anota la posición de {SKU_HISTORIAL_001} en el listado.\n4. El usuario toca el ícono de filtros.\n5. El sistema abre el modal de filtros con la sección \"Ordena tus productos\".\n6. El usuario toca la opción \"Pensados para ti\" en \"Ordena tus productos\".\n7. El sistema marca la opción \"Pensados para ti\".\n8. El usuario toca \"Mostrar [N] productos\".\n9. El sistema cierra el modal, muestra el skeleton de carga y refresca el listado ordenado por \"Pensados para ti\".",
   "test_data": "{CATEGORY_N2_URL} carnes_cerdo → PLP \"Cerdo\" (Categorías › Carnes › Cerdo)\n{COMPRADOR_CON_HISTORIAL_USER} vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El filtro {BRAND_001} sigue activo, la cantidad de productos es la misma anotada y solo cambia el orden (mayor a menor precio).",
   "form_factor": "app",
   "id": "TC-B2C87-APP-012",
   "name": "Verificar que cambiar el orden mantiene el filtro de marca activo y la cantidad de productos [App] [Guest]",
   "observation": "La fila no declara \"Plataforma:\" (dice \"Viewport: App iOS/Android\"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.",
   "observed": "En la PLP \"Papas fritas\" (Despensa › Cóctel y snacks › Papas fritas, 12 productos) se filtra por la marca Lays (el ícono de filtros marca 1, 12 productos, todos Lays). Al cambiar el orden a \"Precio más alto\" se mantienen el filtro y los 12 productos, ahora de mayor a menor precio de venta.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — plp papas fritas",
     "file": "TC-B2C87-APP-012-android-p02-plp-papas-fritas.png"
    },
    {
     "caption": "Android · Paso 5 — marca lays seleccionada",
     "file": "TC-B2C87-APP-012-android-p05-marca-lays-seleccionada.png"
    },
    {
     "caption": "Android · Paso 7 — listado filtrado por lays",
     "file": "TC-B2C87-APP-012-android-p07-listado-filtrado-por-lays.png"
    },
    {
     "caption": "Android · Paso 11 — precio mas alto marcado con la marca activa",
     "file": "TC-B2C87-APP-012-android-p11-precio-mas-alto-marcado-con-la-marca-activa.png"
    },
    {
     "caption": "Android · Paso 13 — listado ordenado por precio mas alto",
     "file": "TC-B2C87-APP-012-android-p13-listado-ordenado-por-precio-mas-alto.png"
    }
   ],
   "spec": "tests-app/B2C-87.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL_NxM}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca el ícono de filtros.\n4. El sistema abre el modal de filtros con la sección \"Ordena tus productos\".\n5. El usuario selecciona la marca {BRAND_001} en los filtros y toca \"Mostrar [N] productos\".\n6. El sistema aplica el filtro y muestra solo productos de {BRAND_001}.\n7. El usuario anota la cantidad de productos del listado.\n8. El usuario toca el ícono de filtros.\n9. El sistema abre el modal de filtros con la sección \"Ordena tus productos\".\n10. El usuario toca la opción \"Precio más alto\" en \"Ordena tus productos\".\n11. El sistema marca la opción \"Precio más alto\".\n12. El usuario toca \"Mostrar [N] productos\".\n13. El sistema cierra el modal, muestra el skeleton de carga y refresca el listado ordenado por \"Precio más alto\".",
   "test_data": "{PLP_URL_NxM} despensa_coctel-y-snacks_papas-fritas → PLP \"Papas fritas\"\n{BRAND_001} Lays"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "{SKU_PATROCINADO} mantiene su posición destacada y el resto de los productos queda de menor a mayor precio de venta.",
   "form_factor": "app",
   "id": "TC-B2C87-APP-015",
   "name": "Verificar que el producto patrocinado conserva su posición destacada al cambiar el orden [App] [Guest]",
   "observation": "Causa: {PLP_URL_PATROCINADO} (/category/panaderia-y-pasteleria) es una N1 que en la app es una landing con un carrusel por N2 (Pan, Pan envasado), sin botón de filtros ni ordenamiento; además {SKU_PATROCINADO} 000000000000642688-UN no aparece como \"Patrocinado\" en las PLP Pan ni Pan envasado. Acción: declarar una PLP N2/N3 donde {SKU_PATROCINADO} esté configurado como patrocinado. La fila no declara \"Plataforma:\" (dice \"Viewport: App iOS/Android\"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.",
   "observed": "La PLP declarada es una N1 que en la app no tiene ordenamiento.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP\n- {SKU_PATROCINADO} está configurado como patrocinado en {PLP_URL_PATROCINADO}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — panaderia n1 sin ordenamiento",
     "file": "TC-B2C87-APP-015-android-p01-panaderia-n1-sin-ordenamiento.png"
    },
    {
     "caption": "Android · Paso 2 — plp pan sin patrocinado",
     "file": "TC-B2C87-APP-015-android-p02-plp-pan-sin-patrocinado.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL_PATROCINADO}.\n2. El sistema carga la PLP con {SKU_PATROCINADO} en posición destacada.\n3. El usuario anota la posición de {SKU_PATROCINADO}.\n4. El usuario toca el ícono de filtros.\n5. El sistema abre el modal de filtros con la sección \"Ordena tus productos\".\n6. El usuario toca la opción \"Precio más bajo\" en \"Ordena tus productos\".\n7. El sistema marca la opción \"Precio más bajo\".\n8. El usuario toca \"Mostrar [N] productos\".\n9. El sistema cierra el modal, muestra el skeleton de carga y refresca el listado ordenado por \"Precio más bajo\".",
   "test_data": "{PLP_URL_PATROCINADO} panaderia-y-pasteleria\n{SKU_PATROCINADO} 000000000000642688-UN"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "Se muestra el estado de error con \"Tuvimos un problema al cargar los productos.\", el texto con \"Error PLP-013\", \"Reintentar\" e \"Ir al inicio\".",
   "form_factor": "app",
   "id": "TC-B2C87-APP-016",
   "name": "Verificar que una falla al ordenar muestra el estado de error PLP-013 [App] [Guest]",
   "observation": "Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data: no hay herramienta declarada para forzar el error de {PLP_SORT_API_ENDPOINT}. Acción: declarar la herramienta de proxy para la app. La fila no declara \"Plataforma:\" (dice \"Viewport: App iOS/Android\"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario activa: {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {PLP_SORT_API_ENDPOINT}.\n4. El usuario toca el ícono de filtros.\n5. El sistema abre el modal de filtros con la sección \"Ordena tus productos\".\n6. El usuario toca la opción \"Precio más bajo\" en \"Ordena tus productos\".\n7. El sistema marca la opción \"Precio más bajo\".\n8. El usuario toca \"Mostrar [N] productos\".\n9. El sistema muestra el mensaje destacado \"Tuvimos un problema al cargar los productos.\", el texto \"Estamos trabajando para solucionarlo. Intenta nuevamente en unos segundos, Error PLP-013\" y los botones \"Reintentar\" e \"Ir al inicio\".",
   "test_data": "{PLP_URL} carnes_vacuno"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "La PLP vuelve a cargar y muestra el listado de productos.",
   "form_factor": "app",
   "id": "TC-B2C87-APP-017",
   "name": "Verificar que \"Reintentar\" del error de ordenamiento vuelve a cargar el listado [App] [Guest]",
   "observation": "Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data: no hay herramienta declarada para forzar el error de {PLP_SORT_API_ENDPOINT}. Acción: declarar la herramienta de proxy para la app. La fila no declara \"Plataforma:\" (dice \"Viewport: App iOS/Android\"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario activa: {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {PLP_SORT_API_ENDPOINT}.\n4. El usuario toca el ícono de filtros.\n5. El sistema abre el modal de filtros con la sección \"Ordena tus productos\".\n6. El usuario toca la opción \"Precio más bajo\" en \"Ordena tus productos\".\n7. El sistema marca la opción \"Precio más bajo\".\n8. El usuario toca \"Mostrar [N] productos\".\n9. El sistema muestra el mensaje destacado \"Tuvimos un problema al cargar los productos.\", el texto \"Estamos trabajando para solucionarlo. Intenta nuevamente en unos segundos, Error PLP-013\" y los botones \"Reintentar\" e \"Ir al inicio\".\n10. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado en {PLP_SORT_API_ENDPOINT}.\n11. El usuario toca \"Reintentar\".\n12. El sistema recarga la PLP con el listado de productos.",
   "test_data": "{PLP_URL} carnes_vacuno"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El usuario queda en el Home de la App.",
   "form_factor": "app",
   "id": "TC-B2C87-APP-018",
   "name": "Verificar que \"Ir al inicio\" del error de ordenamiento redirige al Home [App] [Guest]",
   "observation": "Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data: no hay herramienta declarada para forzar el error de {PLP_SORT_API_ENDPOINT}. Acción: declarar la herramienta de proxy para la app. La fila no declara \"Plataforma:\" (dice \"Viewport: App iOS/Android\"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario activa: {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {PLP_SORT_API_ENDPOINT}.\n4. El usuario toca el ícono de filtros.\n5. El sistema abre el modal de filtros con la sección \"Ordena tus productos\".\n6. El usuario toca la opción \"Precio más bajo\" en \"Ordena tus productos\".\n7. El sistema marca la opción \"Precio más bajo\".\n8. El usuario toca \"Mostrar [N] productos\".\n9. El sistema muestra el mensaje destacado \"Tuvimos un problema al cargar los productos.\", el texto \"Estamos trabajando para solucionarlo. Intenta nuevamente en unos segundos, Error PLP-013\" y los botones \"Reintentar\" e \"Ir al inicio\".\n10. El usuario toca \"Ir al inicio\".\n11. El sistema redirige a el Home de la App.",
   "test_data": "{PLP_URL} carnes_vacuno"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "El listado muestra los mismos 10 primeros productos que con \"Recomendado\", \"Pensados para ti\" sigue marcado y no se muestra ningún mensaje de error.",
   "form_factor": "app",
   "id": "TC-B2C87-APP-019",
   "name": "Verificar que \"Pensados para ti\" sin historial ordena como \"Recomendado\" sin mostrar error [App] [Logueado]",
   "observation": "Esperado: con una cuenta sin historial, \"Pensados para ti\" muestra los mismos 10 primeros productos que \"Recomendado\". Obtenido: el orden cambia y aparecen productos que no estaban entre los 10 primeros. Paso 10. Reproducible en 3 de 3 intentos. Bug: B2C-1499. La fila no declara \"Plataforma:\" (dice \"Viewport: App iOS/Android\"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.",
   "observed": "Con la cuenta sin historial, \"Recomendado\" muestra primero 626717, 627635, 661144, 626716, 661145…; con \"Pensados para ti\" el orden cambia: 668797 (Plateada de cerdo, que no estaba entre los 10 primeros), 344508, 665306, 179912… No se muestra ningún error y \"Pensados para ti\" sigue marcado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PLP\n- Sesión iniciada con la cuenta {COMPRADOR_SIN_HISTORIAL_USER}\n- La cuenta {COMPRADOR_SIN_HISTORIAL_USER} no tiene historial de compras ni clics",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — plp n2 con recomendado",
     "file": "TC-B2C87-APP-019-android-p03-plp-n2-con-recomendado.png"
    },
    {
     "caption": "Android · Paso 10 — plp n2 con pensados para ti",
     "file": "TC-B2C87-APP-019-android-p10-plp-n2-con-pensados-para-ti.png"
    },
    {
     "caption": "Android · Paso 11 — pensados para ti sigue marcado",
     "file": "TC-B2C87-APP-019-android-p11-pensados-para-ti-sigue-marcado.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C87-APP-019-android.png"
    }
   ],
   "spec": "tests-app/B2C-87.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP N2 equivalente a {CATEGORY_N2_URL}.\n2. El sistema carga la PLP ordenada por \"Recomendado\".\n3. El usuario anota los 10 primeros productos del listado.\n4. El usuario toca el ícono de filtros.\n5. El sistema abre el modal de filtros con la sección \"Ordena tus productos\".\n6. El usuario toca la opción \"Pensados para ti\" en \"Ordena tus productos\".\n7. El sistema marca la opción \"Pensados para ti\".\n8. El usuario toca \"Mostrar [N] productos\".\n9. El sistema cierra el modal, muestra el skeleton de carga y refresca el listado ordenado por \"Pensados para ti\".\n10. El usuario toca el ícono de filtros.\n11. El sistema abre el modal con \"Pensados para ti\" marcado.",
   "test_data": "{CATEGORY_N2_URL} carnes_cerdo → PLP \"Cerdo\" (Categorías › Carnes › Cerdo)\n{COMPRADOR_SIN_HISTORIAL_USER} vhchirinos+noaddress@avatar-global.com (login por correo + código OTP)"
  },
  {
   "device": "Pixel 4 API 33 · Android 13 · emulador local",
   "executed_at": "2026-11-16",
   "expected": "Los resultados siguen siendo los de la búsqueda activa, el orden difiere del de \"Recomendado\" y {SKU_HISTORIAL_001} sube de posición.",
   "form_factor": "app",
   "id": "TC-B2C87-APP-023",
   "name": "Verificar que \"Pensados para ti\" en la SRP ordena los resultados según la afinidad del cliente [App] [Logueado]",
   "observation": "Causa: falta {SKU_HISTORIAL_001} en el Excel de data (sin fila). Acción: cargar el SKU que está en el historial de compras de {COMPRADOR_CON_HISTORIAL_USER}. La fila no declara \"Plataforma:\" (dice \"Viewport: App iOS/Android\"); se certifica solo Android (emulador Pixel 4 API 33, app ya instalada, build {APP_BUILD} v1.0.1). iOS queda Pendiente.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: SRP\n- Sesión iniciada con la cuenta {COMPRADOR_CON_HISTORIAL_USER}\n- La cuenta {COMPRADOR_CON_HISTORIAL_USER} tiene historial de compras que incluye {SKU_HISTORIAL_001}\n- {SKU_HISTORIAL_001} aparece en los resultados de {SEARCH_TERM_001}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}, busca {SEARCH_TERM_001} y toca \"Buscar\" en el teclado.\n2. El sistema carga la SRP ordenada por \"Recomendado\".\n3. El usuario anota la posición de {SKU_HISTORIAL_001} en los resultados.\n4. El usuario toca el ícono de filtros.\n5. El sistema abre el modal de filtros con la sección \"Ordena tus productos\".\n6. El usuario toca la opción \"Pensados para ti\" en \"Ordena tus productos\".\n7. El sistema marca la opción \"Pensados para ti\".\n8. El usuario toca \"Mostrar [N] productos\".\n9. El sistema cierra el modal, muestra el skeleton de carga y refresca el listado ordenado por \"Pensados para ti\".",
   "test_data": "{SEARCH_TERM_001} leche\n{COMPRADOR_CON_HISTORIAL_USER} vhchirinos+comprador@avatar-global.com"
  }
 ]
}
-->
