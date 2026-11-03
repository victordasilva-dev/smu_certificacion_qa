# Panel de filtros de la PLP en la app (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-71 APP |
| Última actualización | 2026-10-22 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.7 (DEV) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-71 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 15 |
| Bloqueado Data | 5 |
| Rechazado | 1 |
| **Total** | **21** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-22 | 21 | TC-B2C71-APP-001, TC-B2C71-APP-002, TC-B2C71-APP-003, TC-B2C71-APP-004, TC-B2C71-APP-005, TC-B2C71-APP-006, TC-B2C71-APP-007, TC-B2C71-APP-008, TC-B2C71-APP-009, TC-B2C71-APP-010, TC-B2C71-APP-011, TC-B2C71-APP-012, TC-B2C71-APP-013, TC-B2C71-APP-014, TC-B2C71-APP-015, TC-B2C71-APP-016, TC-B2C71-APP-017, TC-B2C71-APP-018, TC-B2C71-APP-019, TC-B2C71-APP-020, TC-B2C71-APP-021 |

## Detalle por caso de prueba

### TC-B2C71-APP-001 - Verificar que el panel de filtros muestra header, secciones y el botón con el conteo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.

**Resultado esperado**

El panel muestra en orden el header con X, "Ordena tus productos", "Aplica tus filtros" (dropdowns salvo Ofertas) y el botón fijo "Mostrar [N] productos" con el conteo actual de la PLP desde la apertura.

**Resultado obtenido**

El panel muestra el header con la X y el título, «Ordena tus productos», «Aplica tus filtros» (Ofertas como switch y los dropdowns Estilos de alimentación, Sellos de advertencia, Marcas y Precio) y el botón «Mostrar N productos» abajo.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-001-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-001-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-001-android-p03-panel-de-filtros-abierto.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-001-android.png>)

---

### TC-B2C71-APP-002 - Verificar que el botón "Mostrar productos" permanece fijo al recorrer el panel [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario expande varias secciones y hace scroll dentro del panel.

**Resultado esperado**

El botón "Mostrar productos" permanece visible y fijo abajo en todo momento.

**Resultado obtenido**

Con varias secciones expandidas y el panel recorrido, el botón «Mostrar N productos» queda en la misma posición, fijo abajo.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-002-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-002-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-002-android-p03-panel-de-filtros-abierto.png>)

![Paso 5 — panel recorrido con varias secciones abiertas](<B2C-71 APP Evidencias/TC-B2C71-APP-002-android-p05-panel-recorrido-con-varias-secciones-abiertas.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-002-android.png>)

---

### TC-B2C71-APP-003 - Verificar que tocar el encabezado de una sección la expande o colapsa y cambia la flecha [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario toca el encabezado "Marca".
6. El sistema expande la sección y cambia la flecha a ↑.
7. El usuario vuelve a tocar "Marca".
8. El sistema colapsa la sección y cambia la flecha a ↓.

**Resultado esperado**

La sección se expande con flecha ↑ y se colapsa con flecha ↓.

**Resultado obtenido**

«Marcas» muestra sus valores al tocarla y los oculta al volver a tocarla; la flecha cambia según el estado (ver capturas).

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-003-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-003-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-003-android-p03-panel-de-filtros-abierto.png>)

![Paso 5 — seccion marcas expandida](<B2C-71 APP Evidencias/TC-B2C71-APP-003-android-p05-seccion-marcas-expandida.png>)

![Paso 7 — seccion marcas colapsada](<B2C-71 APP Evidencias/TC-B2C71-APP-003-android-p07-seccion-marcas-colapsada.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-003-android.png>)

---

### TC-B2C71-APP-004 - Verificar que varias secciones de filtro pueden quedar abiertas a la vez [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario expande "Marca" y luego "Precio".
6. El sistema mantiene ambas secciones expandidas.

**Resultado esperado**

"Marca" y "Precio" quedan expandidas simultáneamente.

**Resultado obtenido**

«Marcas» y «Precio» quedan expandidas a la vez.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-004-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-004-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-004-android-p03-panel-de-filtros-abierto.png>)

![Paso 5 — marcas y precio expandidas](<B2C-71 APP Evidencias/TC-B2C71-APP-004-android-p05-marcas-y-precio-expandidas.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-004-android.png>)

---

### TC-B2C71-APP-005 - Verificar que "Filtros" abre un drawer desde abajo con overlay oscuro [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.

**Resultado esperado**

El panel sube desde la parte inferior como drawer y el fondo queda cubierto por un overlay oscuro.

**Resultado obtenido**

El panel sube desde abajo como hoja y el fondo queda cubierto por un overlay oscuro (botón «Cerrar filtros» a pantalla completa).

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-005-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-005-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-005-android-p03-panel-de-filtros-abierto.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-005-android.png>)

---

### TC-B2C71-APP-006 - Verificar que el panel muestra solo tipos de filtro con valores disponibles [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.

**Resultado esperado**

Todos los tipos de filtro mostrados tienen al menos un valor con productos; no aparecen tipos vacíos.

**Resultado obtenido**

Los cuatro tipos mostrados (Estilos de alimentación, Sellos de advertencia, Marcas y Precio) muestran contenido al expandirse; no hay tipos vacíos.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-006-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-006-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-006-android-p03-panel-de-filtros-abierto.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-006-android.png>)

---

### TC-B2C71-APP-007 - Verificar que los tipos de filtro aparecen en el orden definido [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP
- {PLP_URL_TODOS_FILTROS} expone los 7 tipos de filtro

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL_TODOS_FILTROS} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL_TODOS_FILTROS}.
2. El sistema carga la PLP.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.

**Resultado esperado**

Los tipos de filtro aparecen en el orden: Oferta, Estilos de alimentación, Sellos de advertencia, Marca, Precio, Tipo de envase y Formato.

**Resultado obtenido**

Causa: {PLP_URL_TODOS_FILTROS} no tiene valor en el Excel de data, así que no hay una PLP con los 7 tipos de filtro para comprobar el orden. Acción: declarar una PLP que exponga los 7 tipos. Verificado el 2026-10-22.

**Observación**

Causa: {PLP_URL_TODOS_FILTROS} no tiene valor en el Excel de data, así que no hay una PLP con los 7 tipos de filtro para comprobar el orden. Acción: declarar una PLP que exponga los 7 tipos. Verificado el 2026-10-22.

---

### TC-B2C71-APP-008 - Verificar que seleccionar un filtro recalcula el conteo con animación y fondo oscurecido [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario expande "Marca" y selecciona una marca.
6. El sistema muestra la animación (...) en el botón, oscurece la página detrás del panel y luego actualiza el conteo.

**Resultado esperado**

Mientras recalcula, el botón muestra (...) y el fondo queda oscurecido; al terminar, el botón muestra el nuevo conteo.

**Resultado obtenido**

Al seleccionar una marca el botón muestra la animación «(...)» y luego el nuevo conteo, menor que el inicial.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-008-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-008-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-008-android-p03-panel-de-filtros-abierto.png>)

![Paso 6 — boton tras seleccionar la marca](<B2C-71 APP Evidencias/TC-B2C71-APP-008-android-p06-boton-tras-seleccionar-la-marca.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-008-android.png>)

---

### TC-B2C71-APP-009 - Verificar que con filtros activos el panel muestra "Filtros aplicados" con chips y "Limpiar" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario expande "Marca" y selecciona una marca.
6. El sistema actualiza el conteo del botón "Mostrar [N] productos".
7. El usuario toca "Mostrar [N] productos" y vuelve a tocar "Filtros".
8. El sistema abre el panel con la zona "Filtros aplicados".

**Resultado esperado**

Arriba del panel aparece "Filtros aplicados" con un chip por filtro activo (con ×) y el link "Limpiar" a la derecha del título.

**Resultado obtenido**

Al reabrir el panel con una marca aplicada se ven «Filtros aplicados», el chip de la marca y el link «Limpiar».

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-009-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-009-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-009-android-p03-panel-de-filtros-abierto.png>)

![Paso 7 — panel reabierto con el filtro activo](<B2C-71 APP Evidencias/TC-B2C71-APP-009-android-p07-panel-reabierto-con-el-filtro-activo.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-009-android.png>)

---

### TC-B2C71-APP-010 - Verificar que tocar la × de un chip quita ese filtro y actualiza el conteo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario expande "Marca" y selecciona una marca.
6. El sistema actualiza el conteo del botón "Mostrar [N] productos".
7. El usuario toca la × del chip de la marca.
8. El sistema quita el chip y actualiza el conteo del botón.

**Resultado esperado**

El chip desaparece, el conteo vuelve al total sin ese filtro y la marca queda deseleccionada en su sección.

**Resultado obtenido**

Al tocar la × del chip este desaparece, el conteo vuelve al total de la PLP y la marca queda deseleccionada.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-010-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-010-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-010-android-p03-panel-de-filtros-abierto.png>)

![Paso 8 — tras quitar el chip](<B2C-71 APP Evidencias/TC-B2C71-APP-010-android-p08-tras-quitar-el-chip.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-010-android.png>)

---

### TC-B2C71-APP-011 - Verificar que una sección con valores elegidos muestra un badge rojo con la cantidad [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario expande "Estilos de alimentación", selecciona dos valores y colapsa la sección.
6. El sistema muestra el badge junto al nombre.

**Resultado esperado**

Junto a "Estilos de alimentación" se muestra un badge rojo con el número 2.

**Resultado obtenido**

Con dos valores de «Estilos de alimentación» elegidos, el encabezado de la sección muestra un badge rojo con el número 2, también al colapsarla.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-011-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-011-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-011-android-p03-panel-de-filtros-abierto.png>)

![Paso 7 — seccion colapsada con dos valores elegidos](<B2C-71 APP Evidencias/TC-B2C71-APP-011-android-p07-seccion-colapsada-con-dos-valores-elegidos.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-011-android.png>)

---

### TC-B2C71-APP-012 - Verificar que el botón "Mostrar productos" refleja el conteo de la selección [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario expande "Marca" y selecciona una marca.
6. El sistema actualiza el conteo del botón "Mostrar [N] productos".
7. El usuario deselecciona la marca.
8. El sistema vuelve a mostrar el conteo total.

**Resultado esperado**

El conteo del botón corresponde a los productos de la selección vigente en cada cambio.

**Resultado obtenido**

El botón muestra el total al abrir, baja al elegir una marca y vuelve al total al deseleccionarla.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-012-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-012-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-012-android-p03-panel-de-filtros-abierto.png>)

![Paso 6 — con cook and fun seleccionada](<B2C-71 APP Evidencias/TC-B2C71-APP-012-android-p06-con-cook-and-fun-seleccionada.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-012-android.png>)

---

### TC-B2C71-APP-013 - Verificar que "Mostrar productos" cierra el panel y aplica los filtros al listado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario expande "Marca" y selecciona una marca.
6. El sistema actualiza el conteo del botón "Mostrar [N] productos".
7. El usuario anota el conteo y toca "Mostrar [N] productos".
8. El sistema cierra el panel y actualiza el listado.

**Resultado esperado**

El listado muestra solo productos de la marca elegida y el conteo del encabezado coincide con el del botón.

**Resultado obtenido**

«Mostrar productos» cierra el panel; el listado muestra solo productos de la marca elegida y el encabezado coincide con el conteo del botón.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-013-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-013-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-013-android-p03-panel-de-filtros-abierto.png>)

![Paso 8 — listado filtrado](<B2C-71 APP Evidencias/TC-B2C71-APP-013-android-p08-listado-filtrado.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-013-android.png>)

---

### TC-B2C71-APP-014 - Verificar que "Limpiar" quita todos los filtros y el botón muestra el total [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario expande "Marca" y selecciona una marca.
6. El sistema actualiza el conteo del botón "Mostrar [N] productos".
7. El usuario toca "Limpiar".
8. El sistema quita todos los filtros y la zona "Filtros aplicados".

**Resultado esperado**

Desaparecen los chips y la zona "Filtros aplicados", el orden se mantiene y el botón muestra "Mostrar [N] productos" con el total de la PLP.

**Resultado obtenido**

«Limpiar» elimina los chips y la zona «Filtros aplicados», y el botón vuelve a mostrar el total de la PLP.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-014-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-014-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-014-android-p03-panel-de-filtros-abierto.png>)

![Paso 8 — tras tocar limpiar](<B2C-71 APP Evidencias/TC-B2C71-APP-014-android-p08-tras-tocar-limpiar.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-014-android.png>)

---

### TC-B2C71-APP-015 - Verificar que filtros de distintos tipos se combinan con AND y del mismo tipo con OR [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario selecciona dos marcas y un estilo de alimentación y toca "Mostrar [N] productos".
6. El sistema aplica los filtros.

**Resultado esperado**

El listado muestra solo productos de cualquiera de las dos marcas que además cumplen el estilo de alimentación elegido.

**Resultado obtenido**

Con dos marcas y un estilo el conteo no supera al de las dos marcas (AND entre tipos) y el listado solo muestra productos de esas marcas (OR).

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-015-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-015-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-015-android-p03-panel-de-filtros-abierto.png>)

![Paso 7 — dos marcas y un estilo](<B2C-71 APP Evidencias/TC-B2C71-APP-015-android-p07-dos-marcas-y-un-estilo.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-015-android.png>)

---

### TC-B2C71-APP-016 - Verificar que la X cierra el panel y mantiene los filtros seleccionados [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario expande "Marca" y selecciona una marca.
6. El sistema actualiza el conteo del botón "Mostrar [N] productos".
7. El usuario toca la X del header.
8. El sistema cierra el panel.

**Resultado esperado**

El panel se cierra y, al reabrirlo, la marca sigue seleccionada.

**Resultado obtenido**

Con una marca elegida (3 productos), la X «Cerrar y limpiar filtros» cierra el panel y al reabrirlo el botón muestra 15 productos, el total: los filtros se limpiaron.

**Observación**

Esperado: el panel se cierra y, al reabrirlo, la marca sigue seleccionada. Obtenido: tras elegir una marca (3 productos) y tocar la X del header, al reabrir el panel el botón muestra «Mostrar 15 productos» (el total de la PLP): la X limpia los filtros, como indica su nombre accesible «Cerrar y limpiar filtros». B2C-71.spec.ts:379. Bug: B2C-1299.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-016-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-016-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-016-android-p03-panel-de-filtros-abierto.png>)

![Paso 8 — panel reabierto](<B2C-71 APP Evidencias/TC-B2C71-APP-016-android-p08-panel-reabierto.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-016-android.png>)

---

### TC-B2C71-APP-017 - Verificar que con 0 resultados el botón muestra 0 y queda deshabilitado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario selecciona una combinación de filtros sin productos en común.
6. El sistema actualiza el botón a 0 productos.

**Resultado esperado**

El botón muestra 0 productos, queda deshabilitado y el panel sigue abierto.

**Resultado obtenido**

Causa: en la PLP de la prueba («Cerdo», 15 productos; marcas Cook And Fun y Super Cerdo) ninguna combinación de marca con Ofertas, con cada valor de Estilos de alimentación o con cada sello de advertencia da 0 resultados; no se probó el filtro de Precio. Acción: declarar una PLP o una combinación de filtros sin productos en común. Verificado el 2026-10-22.

**Observación**

Causa: en la PLP de la prueba («Cerdo», 15 productos; marcas Cook And Fun y Super Cerdo) ninguna combinación de marca con Ofertas, con cada valor de Estilos de alimentación o con cada sello de advertencia da 0 resultados; no se probó el filtro de Precio. Acción: declarar una PLP o una combinación de filtros sin productos en común. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-017-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-017-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-017-android-p03-panel-de-filtros-abierto.png>)

![Paso 7 — combinacion sin productos](<B2C-71 APP Evidencias/TC-B2C71-APP-017-android-p07-combinacion-sin-productos.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-017-android.png>)

---

### TC-B2C71-APP-018 - Verificar que al aplicar filtros el listado muestra un overlay blanco mientras carga [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {HERRAMIENTA_PROXY_APP} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario expande "Marca" y selecciona una marca.
6. El sistema actualiza el conteo del botón "Mostrar [N] productos".
7. El usuario toca "Mostrar [N] productos".
8. El sistema cierra el panel y muestra un overlay blanco sobre el listado hasta completar la carga.

**Resultado esperado**

Durante la carga se ve el overlay blanco difuminado sobre el listado, que desaparece al mostrarse los productos filtrados.

**Resultado obtenido**

Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: sin la herramienta de proxy no se puede aplicar red lenta para ver el overlay de carga. Acción: declarar la herramienta de proxy. Verificado el 2026-10-22.

**Observación**

Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: sin la herramienta de proxy no se puede aplicar red lenta para ver el overlay de carga. Acción: declarar la herramienta de proxy. Verificado el 2026-10-22.

---

### TC-B2C71-APP-019 - Verificar que los filtros se mantienen al cambiar el ordenamiento [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario expande "Marca" y selecciona una marca.
6. El sistema actualiza el conteo del botón "Mostrar [N] productos".
7. El usuario toca "Mostrar [N] productos", reabre "Filtros", elige "Precio más bajo" y confirma.
8. El sistema reordena el listado.

**Resultado esperado**

El filtro de marca sigue activo, la cantidad de productos no cambia y solo cambia el orden.

**Resultado obtenido**

Con la marca activa y el orden «Precio más bajo», la cantidad de productos no cambia, el listado sigue siendo de la marca y queda ordenado por precio.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-019-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-019-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-019-android-p03-panel-de-filtros-abierto.png>)

![Paso 8 — orden precio mas bajo con la marca activa](<B2C-71 APP Evidencias/TC-B2C71-APP-019-android-p08-orden-precio-mas-bajo-con-la-marca-activa.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-019-android.png>)

---

### TC-B2C71-APP-020 - Verificar que sin productos para los filtros se muestra el estado vacío con PLP-013 [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario selecciona una combinación sin productos y cierra el panel.
6. El sistema muestra el estado vacío en el área de la grilla.

**Resultado esperado**

Se muestran imagen, "Ups... No hay productos con estos filtros", "Prueba eliminando algunos filtros para ver más resultados.", "Error: PLP-013" y el botón "Limpiar filtros"; el header y la navegación siguen funcionando.

**Resultado obtenido**

Causa: en la PLP de la prueba («Cerdo», 15 productos; marcas Cook And Fun y Super Cerdo) ninguna combinación de marca con Ofertas, con cada valor de Estilos de alimentación o con cada sello de advertencia da 0 resultados; no se probó el filtro de Precio. Acción: declarar una PLP o una combinación de filtros sin productos en común. Verificado el 2026-10-22.

**Observación**

Causa: en la PLP de la prueba («Cerdo», 15 productos; marcas Cook And Fun y Super Cerdo) ninguna combinación de marca con Ofertas, con cada valor de Estilos de alimentación o con cada sello de advertencia da 0 resultados; no se probó el filtro de Precio. Acción: declarar una PLP o una combinación de filtros sin productos en común. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-020-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-020-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-020-android-p03-panel-de-filtros-abierto.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-020-android.png>)

---

### TC-B2C71-APP-021 - Verificar que "Limpiar filtros" del estado vacío restaura el listado completo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-71.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

- {APP_BUILD} = TBD
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.
2. El sistema carga la PLP con el listado de productos.
3. El usuario toca "Filtros".
4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.
5. El usuario selecciona una combinación sin productos y cierra el panel.
6. El sistema muestra el estado vacío.
7. El usuario toca "Limpiar filtros".
8. El sistema elimina los filtros y muestra el listado completo.

**Resultado esperado**

El listado vuelve a mostrar todos los productos de la categoría.

**Resultado obtenido**

Causa: en la PLP de la prueba («Cerdo», 15 productos; marcas Cook And Fun y Super Cerdo) ninguna combinación de marca con Ofertas, con cada valor de Estilos de alimentación o con cada sello de advertencia da 0 resultados; no se probó el filtro de Precio. Acción: declarar una PLP o una combinación de filtros sin productos en común. Verificado el 2026-10-22.

**Observación**

Causa: en la PLP de la prueba («Cerdo», 15 productos; marcas Cook And Fun y Super Cerdo) ninguna combinación de marca con Ofertas, con cada valor de Estilos de alimentación o con cada sello de advertencia da 0 resultados; no se probó el filtro de Precio. Acción: declarar una PLP o una combinación de filtros sin productos en común. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-71 APP Evidencias/TC-B2C71-APP-021-android-p01-app-abierta-en-el-home.png>)

![Paso 2 — plp con su listado](<B2C-71 APP Evidencias/TC-B2C71-APP-021-android-p02-plp-con-su-listado.png>)

![Paso 3 — panel de filtros abierto](<B2C-71 APP Evidencias/TC-B2C71-APP-021-android-p03-panel-de-filtros-abierto.png>)

![Estado final](<B2C-71 APP Evidencias/TC-B2C71-APP-021-android.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "Android": "Pixel 6 (emulador) · Android 14"
  },
  "environment": "App Unimarc v1.0.7 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-71 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-71 APP Test Cases.xlsx",
  "title": "Panel de filtros de la PLP en la app (Android)",
  "updated_at": "2026-10-22"
 },
 "history": {
  "2026-10-22": [
   "TC-B2C71-APP-001",
   "TC-B2C71-APP-002",
   "TC-B2C71-APP-003",
   "TC-B2C71-APP-004",
   "TC-B2C71-APP-005",
   "TC-B2C71-APP-006",
   "TC-B2C71-APP-007",
   "TC-B2C71-APP-008",
   "TC-B2C71-APP-009",
   "TC-B2C71-APP-010",
   "TC-B2C71-APP-011",
   "TC-B2C71-APP-012",
   "TC-B2C71-APP-013",
   "TC-B2C71-APP-014",
   "TC-B2C71-APP-015",
   "TC-B2C71-APP-016",
   "TC-B2C71-APP-017",
   "TC-B2C71-APP-018",
   "TC-B2C71-APP-019",
   "TC-B2C71-APP-020",
   "TC-B2C71-APP-021"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El panel muestra en orden el header con X, \"Ordena tus productos\", \"Aplica tus filtros\" (dropdowns salvo Ofertas) y el botón fijo \"Mostrar [N] productos\" con el conteo actual de la PLP desde la apertura.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-001",
   "name": "Verificar que el panel de filtros muestra header, secciones y el botón con el conteo [App] [Guest]",
   "observed": "El panel muestra el header con la X y el título, «Ordena tus productos», «Aplica tus filtros» (Ofertas como switch y los dropdowns Estilos de alimentación, Sellos de advertencia, Marcas y Precio) y el botón «Mostrar N productos» abajo.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-001-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-001-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-001-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El botón \"Mostrar productos\" permanece visible y fijo abajo en todo momento.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-002",
   "name": "Verificar que el botón \"Mostrar productos\" permanece fijo al recorrer el panel [App] [Guest]",
   "observed": "Con varias secciones expandidas y el panel recorrido, el botón «Mostrar N productos» queda en la misma posición, fijo abajo.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-002-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-002-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-002-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Paso 5 — panel recorrido con varias secciones abiertas",
     "file": "TC-B2C71-APP-002-android-p05-panel-recorrido-con-varias-secciones-abiertas.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario expande varias secciones y hace scroll dentro del panel.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La sección se expande con flecha ↑ y se colapsa con flecha ↓.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-003",
   "name": "Verificar que tocar el encabezado de una sección la expande o colapsa y cambia la flecha [App] [Guest]",
   "observed": "«Marcas» muestra sus valores al tocarla y los oculta al volver a tocarla; la flecha cambia según el estado (ver capturas).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-003-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-003-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-003-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Paso 5 — seccion marcas expandida",
     "file": "TC-B2C71-APP-003-android-p05-seccion-marcas-expandida.png"
    },
    {
     "caption": "Paso 7 — seccion marcas colapsada",
     "file": "TC-B2C71-APP-003-android-p07-seccion-marcas-colapsada.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario toca el encabezado \"Marca\".\n6. El sistema expande la sección y cambia la flecha a ↑.\n7. El usuario vuelve a tocar \"Marca\".\n8. El sistema colapsa la sección y cambia la flecha a ↓.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "\"Marca\" y \"Precio\" quedan expandidas simultáneamente.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-004",
   "name": "Verificar que varias secciones de filtro pueden quedar abiertas a la vez [App] [Guest]",
   "observed": "«Marcas» y «Precio» quedan expandidas a la vez.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-004-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-004-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-004-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Paso 5 — marcas y precio expandidas",
     "file": "TC-B2C71-APP-004-android-p05-marcas-y-precio-expandidas.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-004-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario expande \"Marca\" y luego \"Precio\".\n6. El sistema mantiene ambas secciones expandidas.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El panel sube desde la parte inferior como drawer y el fondo queda cubierto por un overlay oscuro.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-005",
   "name": "Verificar que \"Filtros\" abre un drawer desde abajo con overlay oscuro [App] [Guest]",
   "observed": "El panel sube desde abajo como hoja y el fondo queda cubierto por un overlay oscuro (botón «Cerrar filtros» a pantalla completa).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-005-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-005-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-005-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Todos los tipos de filtro mostrados tienen al menos un valor con productos; no aparecen tipos vacíos.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-006",
   "name": "Verificar que el panel muestra solo tipos de filtro con valores disponibles [App] [Guest]",
   "observed": "Los cuatro tipos mostrados (Estilos de alimentación, Sellos de advertencia, Marcas y Precio) muestran contenido al expandirse; no hay tipos vacíos.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-006-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-006-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-006-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-006-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Los tipos de filtro aparecen en el orden: Oferta, Estilos de alimentación, Sellos de advertencia, Marca, Precio, Tipo de envase y Formato.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-007",
   "name": "Verificar que los tipos de filtro aparecen en el orden definido [App] [Guest]",
   "observation": "Causa: {PLP_URL_TODOS_FILTROS} no tiene valor en el Excel de data, así que no hay una PLP con los 7 tipos de filtro para comprobar el orden. Acción: declarar una PLP que exponga los 7 tipos. Verificado el 2026-10-22.",
   "observed": "Causa: {PLP_URL_TODOS_FILTROS} no tiene valor en el Excel de data, así que no hay una PLP con los 7 tipos de filtro para comprobar el orden. Acción: declarar una PLP que exponga los 7 tipos. Verificado el 2026-10-22.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP\n- {PLP_URL_TODOS_FILTROS} expone los 7 tipos de filtro",
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL_TODOS_FILTROS}.\n2. El sistema carga la PLP.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL_TODOS_FILTROS} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Mientras recalcula, el botón muestra (...) y el fondo queda oscurecido; al terminar, el botón muestra el nuevo conteo.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-008",
   "name": "Verificar que seleccionar un filtro recalcula el conteo con animación y fondo oscurecido [App] [Guest]",
   "observed": "Al seleccionar una marca el botón muestra la animación «(...)» y luego el nuevo conteo, menor que el inicial.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-008-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-008-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-008-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Paso 6 — boton tras seleccionar la marca",
     "file": "TC-B2C71-APP-008-android-p06-boton-tras-seleccionar-la-marca.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-008-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario expande \"Marca\" y selecciona una marca.\n6. El sistema muestra la animación (...) en el botón, oscurece la página detrás del panel y luego actualiza el conteo.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Arriba del panel aparece \"Filtros aplicados\" con un chip por filtro activo (con ×) y el link \"Limpiar\" a la derecha del título.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-009",
   "name": "Verificar que con filtros activos el panel muestra \"Filtros aplicados\" con chips y \"Limpiar\" [App] [Guest]",
   "observed": "Al reabrir el panel con una marca aplicada se ven «Filtros aplicados», el chip de la marca y el link «Limpiar».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-009-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-009-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-009-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Paso 7 — panel reabierto con el filtro activo",
     "file": "TC-B2C71-APP-009-android-p07-panel-reabierto-con-el-filtro-activo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-009-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario expande \"Marca\" y selecciona una marca.\n6. El sistema actualiza el conteo del botón \"Mostrar [N] productos\".\n7. El usuario toca \"Mostrar [N] productos\" y vuelve a tocar \"Filtros\".\n8. El sistema abre el panel con la zona \"Filtros aplicados\".",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El chip desaparece, el conteo vuelve al total sin ese filtro y la marca queda deseleccionada en su sección.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-010",
   "name": "Verificar que tocar la × de un chip quita ese filtro y actualiza el conteo [App] [Guest]",
   "observed": "Al tocar la × del chip este desaparece, el conteo vuelve al total de la PLP y la marca queda deseleccionada.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-010-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-010-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-010-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Paso 8 — tras quitar el chip",
     "file": "TC-B2C71-APP-010-android-p08-tras-quitar-el-chip.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-010-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario expande \"Marca\" y selecciona una marca.\n6. El sistema actualiza el conteo del botón \"Mostrar [N] productos\".\n7. El usuario toca la × del chip de la marca.\n8. El sistema quita el chip y actualiza el conteo del botón.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Junto a \"Estilos de alimentación\" se muestra un badge rojo con el número 2.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-011",
   "name": "Verificar que una sección con valores elegidos muestra un badge rojo con la cantidad [App] [Guest]",
   "observed": "Con dos valores de «Estilos de alimentación» elegidos, el encabezado de la sección muestra un badge rojo con el número 2, también al colapsarla.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-011-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-011-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-011-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Paso 7 — seccion colapsada con dos valores elegidos",
     "file": "TC-B2C71-APP-011-android-p07-seccion-colapsada-con-dos-valores-elegidos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-011-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario expande \"Estilos de alimentación\", selecciona dos valores y colapsa la sección.\n6. El sistema muestra el badge junto al nombre.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El conteo del botón corresponde a los productos de la selección vigente en cada cambio.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-012",
   "name": "Verificar que el botón \"Mostrar productos\" refleja el conteo de la selección [App] [Guest]",
   "observed": "El botón muestra el total al abrir, baja al elegir una marca y vuelve al total al deseleccionarla.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-012-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-012-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-012-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Paso 6 — con cook and fun seleccionada",
     "file": "TC-B2C71-APP-012-android-p06-con-cook-and-fun-seleccionada.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-012-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario expande \"Marca\" y selecciona una marca.\n6. El sistema actualiza el conteo del botón \"Mostrar [N] productos\".\n7. El usuario deselecciona la marca.\n8. El sistema vuelve a mostrar el conteo total.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El listado muestra solo productos de la marca elegida y el conteo del encabezado coincide con el del botón.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-013",
   "name": "Verificar que \"Mostrar productos\" cierra el panel y aplica los filtros al listado [App] [Guest]",
   "observed": "«Mostrar productos» cierra el panel; el listado muestra solo productos de la marca elegida y el encabezado coincide con el conteo del botón.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-013-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-013-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-013-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Paso 8 — listado filtrado",
     "file": "TC-B2C71-APP-013-android-p08-listado-filtrado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-013-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario expande \"Marca\" y selecciona una marca.\n6. El sistema actualiza el conteo del botón \"Mostrar [N] productos\".\n7. El usuario anota el conteo y toca \"Mostrar [N] productos\".\n8. El sistema cierra el panel y actualiza el listado.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Desaparecen los chips y la zona \"Filtros aplicados\", el orden se mantiene y el botón muestra \"Mostrar [N] productos\" con el total de la PLP.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-014",
   "name": "Verificar que \"Limpiar\" quita todos los filtros y el botón muestra el total [App] [Guest]",
   "observed": "«Limpiar» elimina los chips y la zona «Filtros aplicados», y el botón vuelve a mostrar el total de la PLP.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-014-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-014-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-014-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Paso 8 — tras tocar limpiar",
     "file": "TC-B2C71-APP-014-android-p08-tras-tocar-limpiar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-014-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario expande \"Marca\" y selecciona una marca.\n6. El sistema actualiza el conteo del botón \"Mostrar [N] productos\".\n7. El usuario toca \"Limpiar\".\n8. El sistema quita todos los filtros y la zona \"Filtros aplicados\".",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El listado muestra solo productos de cualquiera de las dos marcas que además cumplen el estilo de alimentación elegido.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-015",
   "name": "Verificar que filtros de distintos tipos se combinan con AND y del mismo tipo con OR [App] [Guest]",
   "observed": "Con dos marcas y un estilo el conteo no supera al de las dos marcas (AND entre tipos) y el listado solo muestra productos de esas marcas (OR).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-015-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-015-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-015-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Paso 7 — dos marcas y un estilo",
     "file": "TC-B2C71-APP-015-android-p07-dos-marcas-y-un-estilo.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-015-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario selecciona dos marcas y un estilo de alimentación y toca \"Mostrar [N] productos\".\n6. El sistema aplica los filtros.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El panel se cierra y, al reabrirlo, la marca sigue seleccionada.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-016",
   "name": "Verificar que la X cierra el panel y mantiene los filtros seleccionados [App] [Guest]",
   "observation": "Esperado: el panel se cierra y, al reabrirlo, la marca sigue seleccionada. Obtenido: tras elegir una marca (3 productos) y tocar la X del header, al reabrir el panel el botón muestra «Mostrar 15 productos» (el total de la PLP): la X limpia los filtros, como indica su nombre accesible «Cerrar y limpiar filtros». B2C-71.spec.ts:379. Bug: B2C-1299.",
   "observed": "Con una marca elegida (3 productos), la X «Cerrar y limpiar filtros» cierra el panel y al reabrirlo el botón muestra 15 productos, el total: los filtros se limpiaron.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-016-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-016-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-016-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Paso 8 — panel reabierto",
     "file": "TC-B2C71-APP-016-android-p08-panel-reabierto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-016-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario expande \"Marca\" y selecciona una marca.\n6. El sistema actualiza el conteo del botón \"Mostrar [N] productos\".\n7. El usuario toca la X del header.\n8. El sistema cierra el panel.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El botón muestra 0 productos, queda deshabilitado y el panel sigue abierto.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-017",
   "name": "Verificar que con 0 resultados el botón muestra 0 y queda deshabilitado [App] [Guest]",
   "observation": "Causa: en la PLP de la prueba («Cerdo», 15 productos; marcas Cook And Fun y Super Cerdo) ninguna combinación de marca con Ofertas, con cada valor de Estilos de alimentación o con cada sello de advertencia da 0 resultados; no se probó el filtro de Precio. Acción: declarar una PLP o una combinación de filtros sin productos en común. Verificado el 2026-10-22.",
   "observed": "Causa: en la PLP de la prueba («Cerdo», 15 productos; marcas Cook And Fun y Super Cerdo) ninguna combinación de marca con Ofertas, con cada valor de Estilos de alimentación o con cada sello de advertencia da 0 resultados; no se probó el filtro de Precio. Acción: declarar una PLP o una combinación de filtros sin productos en común. Verificado el 2026-10-22.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-017-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-017-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-017-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Paso 7 — combinacion sin productos",
     "file": "TC-B2C71-APP-017-android-p07-combinacion-sin-productos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-017-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario selecciona una combinación de filtros sin productos en común.\n6. El sistema actualiza el botón a 0 productos.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Durante la carga se ve el overlay blanco difuminado sobre el listado, que desaparece al mostrarse los productos filtrados.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-018",
   "name": "Verificar que al aplicar filtros el listado muestra un overlay blanco mientras carga [App] [Guest]",
   "observation": "Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: sin la herramienta de proxy no se puede aplicar red lenta para ver el overlay de carga. Acción: declarar la herramienta de proxy. Verificado el 2026-10-22.",
   "observed": "Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: sin la herramienta de proxy no se puede aplicar red lenta para ver el overlay de carga. Acción: declarar la herramienta de proxy. Verificado el 2026-10-22.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta",
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario expande \"Marca\" y selecciona una marca.\n6. El sistema actualiza el conteo del botón \"Mostrar [N] productos\".\n7. El usuario toca \"Mostrar [N] productos\".\n8. El sistema cierra el panel y muestra un overlay blanco sobre el listado hasta completar la carga.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {HERRAMIENTA_PROXY_APP} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El filtro de marca sigue activo, la cantidad de productos no cambia y solo cambia el orden.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-019",
   "name": "Verificar que los filtros se mantienen al cambiar el ordenamiento [App] [Guest]",
   "observed": "Con la marca activa y el orden «Precio más bajo», la cantidad de productos no cambia, el listado sigue siendo de la marca y queda ordenado por precio.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-019-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-019-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-019-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Paso 8 — orden precio mas bajo con la marca activa",
     "file": "TC-B2C71-APP-019-android-p08-orden-precio-mas-bajo-con-la-marca-activa.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-019-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario expande \"Marca\" y selecciona una marca.\n6. El sistema actualiza el conteo del botón \"Mostrar [N] productos\".\n7. El usuario toca \"Mostrar [N] productos\", reabre \"Filtros\", elige \"Precio más bajo\" y confirma.\n8. El sistema reordena el listado.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Se muestran imagen, \"Ups... No hay productos con estos filtros\", \"Prueba eliminando algunos filtros para ver más resultados.\", \"Error: PLP-013\" y el botón \"Limpiar filtros\"; el header y la navegación siguen funcionando.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-020",
   "name": "Verificar que sin productos para los filtros se muestra el estado vacío con PLP-013 [App] [Guest]",
   "observation": "Causa: en la PLP de la prueba («Cerdo», 15 productos; marcas Cook And Fun y Super Cerdo) ninguna combinación de marca con Ofertas, con cada valor de Estilos de alimentación o con cada sello de advertencia da 0 resultados; no se probó el filtro de Precio. Acción: declarar una PLP o una combinación de filtros sin productos en común. Verificado el 2026-10-22.",
   "observed": "Causa: en la PLP de la prueba («Cerdo», 15 productos; marcas Cook And Fun y Super Cerdo) ninguna combinación de marca con Ofertas, con cada valor de Estilos de alimentación o con cada sello de advertencia da 0 resultados; no se probó el filtro de Precio. Acción: declarar una PLP o una combinación de filtros sin productos en común. Verificado el 2026-10-22.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-020-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-020-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-020-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-020-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario selecciona una combinación sin productos y cierra el panel.\n6. El sistema muestra el estado vacío en el área de la grilla.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El listado vuelve a mostrar todos los productos de la categoría.",
   "form_factor": "app",
   "id": "TC-B2C71-APP-021",
   "name": "Verificar que \"Limpiar filtros\" del estado vacío restaura el listado completo [App] [Guest]",
   "observation": "Causa: en la PLP de la prueba («Cerdo», 15 productos; marcas Cook And Fun y Super Cerdo) ninguna combinación de marca con Ofertas, con cada valor de Estilos de alimentación o con cada sello de advertencia da 0 resultados; no se probó el filtro de Precio. Acción: declarar una PLP o una combinación de filtros sin productos en común. Verificado el 2026-10-22.",
   "observed": "Causa: en la PLP de la prueba («Cerdo», 15 productos; marcas Cook And Fun y Super Cerdo) ninguna combinación de marca con Ofertas, con cada valor de Estilos de alimentación o con cada sello de advertencia da 0 resultados; no se probó el filtro de Precio. Acción: declarar una PLP o una combinación de filtros sin productos en común. Verificado el 2026-10-22.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C71-APP-021-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 2 — plp con su listado",
     "file": "TC-B2C71-APP-021-android-p02-plp-con-su-listado.png"
    },
    {
     "caption": "Paso 3 — panel de filtros abierto",
     "file": "TC-B2C71-APP-021-android-p03-panel-de-filtros-abierto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C71-APP-021-android.png"
    }
   ],
   "spec": "tests-app/B2C-71.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y navega a la PLP equivalente a {PLP_URL}.\n2. El sistema carga la PLP con el listado de productos.\n3. El usuario toca \"Filtros\".\n4. El sistema abre el panel de filtros desde la parte inferior con overlay oscuro.\n5. El usuario selecciona una combinación sin productos y cierra el panel.\n6. El sistema muestra el estado vacío.\n7. El usuario toca \"Limpiar filtros\".\n8. El sistema elimina los filtros y muestra el listado completo.",
   "test_data": "- {APP_BUILD} = TBD\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  }
 ]
}
-->
