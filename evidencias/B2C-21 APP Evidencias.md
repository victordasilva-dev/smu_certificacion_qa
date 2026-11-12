# B2C-21 APP - Modal de categorías - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-21 APP |
| Última actualización | 2026-11-09 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador) contra DEV |
| Dispositivo Android | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-21 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 11 |
| Rechazado | 2 |
| **Total** | **13** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-09 | 12 | TC-B2C21-APP-006, TC-B2C21-APP-007, TC-B2C21-APP-008, TC-B2C21-APP-009, TC-B2C21-APP-010, TC-B2C21-APP-011, TC-B2C21-APP-012, TC-B2C21-APP-013, TC-B2C21-APP-014, TC-B2C21-APP-015, TC-B2C21-APP-016, TC-B2C21-APP-017 |
| 2026-10-25 | 1 | TC-B2C21-APP-002 |

## Detalle por caso de prueba

### TC-B2C21-APP-002 - Apertura del modal de categorias con el icono sandwich del header en APP

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-25 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-21.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: cualquier pantalla

**Data utilizada**

- {APP_BUILD} = build de la app (placeholder, pendiente de environment)

**Pasos ejecutados**

1. Navegar a cualquier pantalla en la APP.
2. Hacer tap en el icono sandwich del header.
3. Verificar la apertura del modal.

**Resultado esperado**

El modal de categorias se despliega mostrando las categorias N1 activas.

**Resultado obtenido**

Android (re-ejecución 25-oct, app v1.0.1, Pixel 6): esperado 'el modal de categorías se despliega al tocar el icono sandwich del header'; obtenido: el header de la Home no tiene icono sandwich (solo Store Locator y accesos Suscríbete/Ofertas/Marketplace/Locales). tests-app/B2C-21.spec.ts:54. Mismo defecto del bug B2C-830 (DESCARTADO). iOS: no se ejecutó; queda Pendiente.

**Observación**

Android (re-ejecución 25-oct, app v1.0.1, Pixel 6): esperado 'el modal de categorías se despliega al tocar el icono sandwich del header'; obtenido: el header de la Home no tiene icono sandwich (solo Store Locator y accesos Suscríbete/Ofertas/Marketplace/Locales). tests-app/B2C-21.spec.ts:54. Mismo defecto del bug B2C-830 (DESCARTADO). iOS: no se ejecutó; queda Pendiente.

**Evidencia**

![Android · Paso 1 — home header sin icono sandwich](<B2C-21 APP Evidencias/TC-B2C21-APP-002-android-p01-home-header-sin-icono-sandwich.png>)

![Android · Estado final](<B2C-21 APP Evidencias/TC-B2C21-APP-002-android.png>)

---

### TC-B2C21-APP-006 - Comportamiento del carrusel de top categorias (pildoras) en APP

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-21.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: mas de 3 top categorias activas configuradas

**Data utilizada**

La fila no declara Test data.

**Pasos ejecutados**

1. Abrir el modal de categorias con mas de 3 top categorias configuradas.
2. Verificar el boton 'Todas' y los botones visibles en el primer slide.
3. Deslizar horizontalmente el carrusel.

**Resultado esperado**

El carrusel muestra el boton 'Todas' y hasta 3 botones por slide; al deslizar horizontalmente se accede al resto de las top categorias.

**Resultado obtenido**

Carrusel: «Todas» + Recetas, Carnes y Frutas y Verduras en el primer slide; al deslizar aparecen Lácteos, Huevos y Re... y siguientes.

**Observación**

Carrusel: «Todas» + Recetas, Carnes y Frutas y Verduras en el primer slide; al deslizar aparecen Lácteos, Huevos y Re... y siguientes. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.

**Evidencia**

![Android · Paso 2 — carrusel de top categorias primer slide](<B2C-21 APP Evidencias/TC-B2C21-APP-006-android-p02-carrusel-de-top-categorias-primer-slide.png>)

![Android · Paso 3 — carrusel tras deslizar](<B2C-21 APP Evidencias/TC-B2C21-APP-006-android-p03-carrusel-tras-deslizar.png>)

---

### TC-B2C21-APP-007 - Redireccion al hacer tap en una top categoria del carrusel en APP

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-21.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: modal de categorias abierto

**Data utilizada**

La fila no declara Test data.

**Pasos ejecutados**

1. Abrir el modal de categorias.
2. Hacer tap sobre una top categoria del carrusel.
3. Verificar la redireccion.

**Resultado esperado**

El sistema navega a la PLP de la categoria N1 seleccionada.

**Resultado obtenido**

Tap en la top categoría «Carnes» → PLP «Carnes».

**Observación**

Tap en la top categoría «Carnes» → PLP «Carnes». Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.

**Evidencia**

![Android · Paso 1 — modal con la top categoria carnes](<B2C-21 APP Evidencias/TC-B2C21-APP-007-android-p01-modal-con-la-top-categoria-carnes.png>)

![Android · Paso 3 — tras tocar carnes](<B2C-21 APP Evidencias/TC-B2C21-APP-007-android-p03-tras-tocar-carnes.png>)

---

### TC-B2C21-APP-008 - Estructura del menu de categorias N1 y subcategorias N2 en APP

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-21.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: categorias N1 con subcategorias N2 activas asociadas

**Data utilizada**

La fila no declara Test data.

**Pasos ejecutados**

1. Abrir el modal de categorias.
2. Verificar el nombre y el icono '>' de una categoria N1.
3. Verificar el carrusel de subcategorias N2 (thumbnail circular + nombre, hasta 3.5 slides visibles).
4. Verificar que las secciones de las distintas N1 se muestran apiladas verticalmente.

**Resultado esperado**

Cada categoria N1 muestra su nombre + icono '>' y el carrusel de subcategorias N2 (thumbnail circular + nombre, hasta 3.5 slides visibles); las secciones se muestran una debajo de otra.

**Resultado obtenido**

Carnes: nombre + «>» y carrusel N2 con 3.5 slides (Cerdo, Cordero y otros, Pavo, medio Pollo); secciones N1 apiladas.

**Observación**

Carnes: nombre + «>» y carrusel N2 con 3.5 slides (Cerdo, Cordero y otros, Pavo, medio Pollo); secciones N1 apiladas. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.

**Evidencia**

![Android · Paso 2 — seccion carnes con su carrusel n2](<B2C-21 APP Evidencias/TC-B2C21-APP-008-android-p02-seccion-carnes-con-su-carrusel-n2.png>)

---

### TC-B2C21-APP-009 - Deslizamiento vertical del menu cuando hay mas de 3 top categorias en APP

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-21.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: mas de 3 top categorias N1 activas

**Data utilizada**

La fila no declara Test data.

**Pasos ejecutados**

1. Abrir el modal de categorias con mas de 3 top categorias configuradas.
2. Deslizar verticalmente el menu.
3. Verificar que se visualizan las categorias adicionales.

**Resultado esperado**

El usuario puede deslizar verticalmente el menu y visualizar el resto de las top categorias.

**Resultado obtenido**

Al deslizar verticalmente aparecen Despensa, Desayuno y Dulces, Bebidas y Licores y Limpieza.

**Observación**

Al deslizar verticalmente aparecen Despensa, Desayuno y Dulces, Bebidas y Licores y Limpieza. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.

**Evidencia**

![Android · Paso 1 — menu antes de deslizar](<B2C-21 APP Evidencias/TC-B2C21-APP-009-android-p01-menu-antes-de-deslizar.png>)

![Android · Paso 3 — menu tras deslizar verticalmente](<B2C-21 APP Evidencias/TC-B2C21-APP-009-android-p03-menu-tras-deslizar-verticalmente.png>)

---

### TC-B2C21-APP-010 - Categoria N1 sin subcategorias N2 solo muestra nombre e icono en APP

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-21.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: categoria N1 sin subcategorias N2 activas

**Data utilizada**

La fila no declara Test data.

**Pasos ejecutados**

1. Abrir el modal de categorias.
2. Ubicar una categoria N1 sin subcategorias N2 activas.
3. Verificar el contenido mostrado para esa categoria.

**Resultado esperado**

Se muestra solo el nombre de la categoria N1 y el icono '>'; no se muestra el carrusel de subcategorias N2.

**Resultado obtenido**

«Congelados» (N1 sin N2) muestra solo el nombre y el «>», sin carrusel.

**Observación**

«Congelados» (N1 sin N2) muestra solo el nombre y el «>», sin carrusel. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.

**Evidencia**

![Android · Paso 3 — congelados sin carrusel n2](<B2C-21 APP Evidencias/TC-B2C21-APP-010-android-p03-congelados-sin-carrusel-n2.png>)

---

### TC-B2C21-APP-011 - Redireccion al hacer tap en el nombre o icono de una categoria N1 en APP

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-21.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: modal de categorias abierto

**Data utilizada**

La fila no declara Test data.

**Pasos ejecutados**

1. Abrir el modal de categorias.
2. Hacer tap sobre el nombre (o el icono '>') de una categoria N1.
3. Verificar la redireccion.

**Resultado esperado**

El sistema navega a la PLP de la categoria N1 seleccionada.

**Resultado obtenido**

Tap en la sección N1 «Carnes» → PLP «Carnes».

**Observación**

Tap en la sección N1 «Carnes» → PLP «Carnes». Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.

**Evidencia**

![Android · Paso 1 — modal con la seccion carnes](<B2C-21 APP Evidencias/TC-B2C21-APP-011-android-p01-modal-con-la-seccion-carnes.png>)

![Android · Paso 3 — tras tocar carnes](<B2C-21 APP Evidencias/TC-B2C21-APP-011-android-p03-tras-tocar-carnes.png>)

---

### TC-B2C21-APP-012 - Redireccion al hacer tap en la imagen o nombre de una categoria N2 en APP

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-21.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: categoria N1 con subcategorias N2 activas

**Data utilizada**

La fila no declara Test data.

**Pasos ejecutados**

1. Abrir el modal de categorias.
2. Hacer tap sobre la imagen (o el nombre) de una subcategoria N2.
3. Verificar la redireccion.

**Resultado esperado**

El sistema navega a la PLP de la categoria N2 seleccionada.

**Resultado obtenido**

Tap en la N2 «Cerdo» → PLP «Cerdo».

**Observación**

Tap en la N2 «Cerdo» → PLP «Cerdo». Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.

**Evidencia**

![Android · Paso 1 — modal con la n2 cerdo](<B2C-21 APP Evidencias/TC-B2C21-APP-012-android-p01-modal-con-la-n2-cerdo.png>)

![Android · Paso 3 — tras tocar cerdo](<B2C-21 APP Evidencias/TC-B2C21-APP-012-android-p03-tras-tocar-cerdo.png>)

---

### TC-B2C21-APP-013 - Carrusel N2 con una sola subcategoria se alinea a la izquierda sin deslizamiento en APP

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-21.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: categoria N1 con exactamente 1 subcategoria N2 activa

**Data utilizada**

La fila no declara Test data.

**Pasos ejecutados**

1. Abrir el modal de categorias.
2. Ubicar una categoria N1 con exactamente una subcategoria N2 activa.
3. Verificar la alineacion del item y si el deslizamiento esta habilitado.

**Resultado esperado**

El unico item del carrusel N2 se muestra alineado a la izquierda; el deslizamiento horizontal no esta habilitado.

**Resultado obtenido**

«Desayuno y Dulces» tiene una sola N2 (Mermelada y manjar), alineada a la izquierda; el carrusel no se desliza.

**Observación**

«Desayuno y Dulces» tiene una sola N2 (Mermelada y manjar), alineada a la izquierda; el carrusel no se desliza. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.

**Evidencia**

![Android · Paso 2 — desayuno y dulces con una sola n2](<B2C-21 APP Evidencias/TC-B2C21-APP-013-android-p02-desayuno-y-dulces-con-una-sola-n2.png>)

![Android · Paso 3 — tras intentar deslizar el carrusel](<B2C-21 APP Evidencias/TC-B2C21-APP-013-android-p03-tras-intentar-deslizar-el-carrusel.png>)

---

### TC-B2C21-APP-014 - Nombre de top categoria N1 mayor a 20 caracteres se trunca con puntos suspensivos en APP

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-21.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: top categoria N1 con nombre de mas de 20 caracteres

**Data utilizada**

La fila no declara Test data.

**Pasos ejecutados**

1. Configurar (o identificar) una top categoria N1 con nombre de mas de 20 caracteres.
2. Abrir el modal de categorias.
3. Verificar la forma en que se muestra el nombre en el carrusel de top categorias.

**Resultado esperado**

El nombre de la top categoria se muestra truncado a 20 caracteres, con puntos suspensivos '...' al final.

**Resultado obtenido**

«Lácteos, Huevos y Re...»: los primeros 20 caracteres de «Lácteos, Huevos y Refrigerados» (30) + «...».

**Observación**

«Lácteos, Huevos y Re...»: los primeros 20 caracteres de «Lácteos, Huevos y Refrigerados» (30) + «...». Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.

**Evidencia**

![Android · Paso 3 — top categoria lacteos huevos y re](<B2C-21 APP Evidencias/TC-B2C21-APP-014-android-p03-top-categoria-lacteos-huevos-y-re.png>)

![Android · Paso 3 — nombre completo lacteos huevos y refrigerados](<B2C-21 APP Evidencias/TC-B2C21-APP-014-android-p03-nombre-completo-lacteos-huevos-y-refrigerados.png>)

---

### TC-B2C21-APP-015 - Nombre de categoria N2 entre 15 y 28 caracteres se ajusta a 2 lineas sin cortar palabras en APP

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-21.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: categoria N2 con nombre de entre 15 y 28 caracteres

**Data utilizada**

La fila no declara Test data.

**Pasos ejecutados**

1. Configurar (o identificar) una categoria N2 con nombre de entre 15 y 28 caracteres.
2. Abrir el modal de categorias y desplegar el carrusel N2 correspondiente.
3. Verificar la forma en que se muestra el nombre.

**Resultado esperado**

El nombre de la categoria N2 se muestra completo en un maximo de 2 lineas, con el salto de linea en el limite de una palabra, sin cortar ninguna palabra a la mitad.

**Resultado obtenido**

«Cordero y otros» (15 car.) se muestra completo en 2 líneas («Cordero y» / «otros») sin cortar palabras.

**Observación**

«Cordero y otros» (15 car.) se muestra completo en 2 líneas («Cordero y» / «otros») sin cortar palabras. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.

**Evidencia**

![Android · Paso 3 — n2 cordero y otros](<B2C-21 APP Evidencias/TC-B2C21-APP-015-android-p03-n2-cordero-y-otros.png>)

---

### TC-B2C21-APP-016 - Nombre de categoria N2 mayor a 28 caracteres se trunca en el limite de palabra con puntos suspensivos en APP

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-21.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: categoria N2 con nombre de mas de 28 caracteres

**Data utilizada**

La fila no declara Test data.

**Pasos ejecutados**

1. Configurar (o identificar) una categoria N2 con nombre de mas de 28 caracteres.
2. Abrir el modal de categorias y desplegar el carrusel N2 correspondiente.
3. Verificar la forma en que se muestra el nombre.

**Resultado esperado**

El nombre de la categoria N2 se muestra truncado hasta el ultimo caracter completo de la ultima palabra que entra en la linea 2, con puntos suspensivos '...' al final; ninguna palabra queda cortada a la mitad.

**Resultado obtenido**

«Comida / instantánea y...»: «Comida instantánea y preparada» (30 car.) truncado en límite de palabra con «...». Pasó en el reintento (el primer intento falló al leer la UI de Android: ambiente).

**Observación**

«Comida / instantánea y...»: «Comida instantánea y preparada» (30 car.) truncado en límite de palabra con «...». Pasó en el reintento (el primer intento falló al leer la UI de Android: ambiente). Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.

**Evidencia**

![Android · Paso 3 — n2 comida instantanea y](<B2C-21 APP Evidencias/TC-B2C21-APP-016-android-p03-n2-comida-instantanea-y.png>)

![Android · Paso 3 — nombre completo comida instantanea y preparada](<B2C-21 APP Evidencias/TC-B2C21-APP-016-android-p03-nombre-completo-comida-instantanea-y-preparada.png>)

---

### TC-B2C21-APP-017 - Categoria sin thumbnail configurada en Business Manager muestra imagen placeholder en APP

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-09 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local |
| Spec | tests-app/B2C-21.spec.ts |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: categoria sin thumbnail image configurada

**Data utilizada**

La fila no declara Test data.

**Pasos ejecutados**

1. Identificar (o configurar) una categoria sin thumbnail image configurada.
2. Abrir el modal de categorias.
3. Verificar la imagen mostrada para esa categoria.

**Resultado esperado**

La tarjeta de la categoria muestra una imagen placeholder generica en el espacio de la imagen.

**Resultado obtenido**

Las N2 de Recetas muestran un círculo gris con iniciales (DE, SN, PO, CE) en lugar de una imagen placeholder.

**Observación**

Esperado: la tarjeta de una categoría sin thumbnail muestra una imagen placeholder genérica. Obtenido: las N2 de Recetas (Desayuno, Snacks, Postres, Cena) muestran un círculo gris con las iniciales del nombre (DE, SN, PO, CE) en lugar de una imagen. tests-app/B2C-21.spec.ts. Bug: B2C-1480. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.

**Evidencia**

![Android · Paso 3 — recetas categorias sin thumbnail](<B2C-21 APP Evidencias/TC-B2C21-APP-017-android-p03-recetas-categorias-sin-thumbnail.png>)

![Estado al fallar la aserción](<B2C-21 APP Evidencias/TC-B2C21-APP-017-android.png>)

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
  "suite": "B2C-21 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-21 APP Test Cases.xlsx",
  "title": "B2C-21 APP - Modal de categorías - Evidencias QA",
  "updated_at": "2026-11-09"
 },
 "history": {
  "2026-10-25": [
   "TC-B2C21-APP-002"
  ],
  "2026-11-09": [
   "TC-B2C21-APP-006",
   "TC-B2C21-APP-007",
   "TC-B2C21-APP-008",
   "TC-B2C21-APP-009",
   "TC-B2C21-APP-010",
   "TC-B2C21-APP-011",
   "TC-B2C21-APP-012",
   "TC-B2C21-APP-013",
   "TC-B2C21-APP-014",
   "TC-B2C21-APP-015",
   "TC-B2C21-APP-016",
   "TC-B2C21-APP-017"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-25",
   "expected": "El modal de categorias se despliega mostrando las categorias N1 activas.",
   "form_factor": "app",
   "id": "TC-B2C21-APP-002",
   "name": "Apertura del modal de categorias con el icono sandwich del header en APP",
   "observation": "Android (re-ejecución 25-oct, app v1.0.1, Pixel 6): esperado 'el modal de categorías se despliega al tocar el icono sandwich del header'; obtenido: el header de la Home no tiene icono sandwich (solo Store Locator y accesos Suscríbete/Ofertas/Marketplace/Locales). tests-app/B2C-21.spec.ts:54. Mismo defecto del bug B2C-830 (DESCARTADO). iOS: no se ejecutó; queda Pendiente.",
   "observed": "Android (re-ejecución 25-oct, app v1.0.1, Pixel 6): esperado 'el modal de categorías se despliega al tocar el icono sandwich del header'; obtenido: el header de la Home no tiene icono sandwich (solo Store Locator y accesos Suscríbete/Ofertas/Marketplace/Locales). tests-app/B2C-21.spec.ts:54. Mismo defecto del bug B2C-830 (DESCARTADO). iOS: no se ejecutó; queda Pendiente.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: cualquier pantalla",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — home header sin icono sandwich",
     "file": "TC-B2C21-APP-002-android-p01-home-header-sin-icono-sandwich.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C21-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-21.spec.ts",
   "status": "Rechazado",
   "steps": "1. Navegar a cualquier pantalla en la APP.\n2. Hacer tap en el icono sandwich del header.\n3. Verificar la apertura del modal.",
   "test_data": "- {APP_BUILD} = build de la app (placeholder, pendiente de environment)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "El carrusel muestra el boton 'Todas' y hasta 3 botones por slide; al deslizar horizontalmente se accede al resto de las top categorias.",
   "form_factor": "app",
   "id": "TC-B2C21-APP-006",
   "name": "Comportamiento del carrusel de top categorias (pildoras) en APP",
   "observation": "Carrusel: «Todas» + Recetas, Carnes y Frutas y Verduras en el primer slide; al deslizar aparecen Lácteos, Huevos y Re... y siguientes. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.",
   "observed": "Carrusel: «Todas» + Recetas, Carnes y Frutas y Verduras en el primer slide; al deslizar aparecen Lácteos, Huevos y Re... y siguientes.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: mas de 3 top categorias activas configuradas",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — carrusel de top categorias primer slide",
     "file": "TC-B2C21-APP-006-android-p02-carrusel-de-top-categorias-primer-slide.png"
    },
    {
     "caption": "Android · Paso 3 — carrusel tras deslizar",
     "file": "TC-B2C21-APP-006-android-p03-carrusel-tras-deslizar.png"
    }
   ],
   "spec": "tests-app/B2C-21.spec.ts",
   "status": "Aprobado",
   "steps": "1. Abrir el modal de categorias con mas de 3 top categorias configuradas.\n2. Verificar el boton 'Todas' y los botones visibles en el primer slide.\n3. Deslizar horizontalmente el carrusel.",
   "test_data": "La fila no declara Test data."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "El sistema navega a la PLP de la categoria N1 seleccionada.",
   "form_factor": "app",
   "id": "TC-B2C21-APP-007",
   "name": "Redireccion al hacer tap en una top categoria del carrusel en APP",
   "observation": "Tap en la top categoría «Carnes» → PLP «Carnes». Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.",
   "observed": "Tap en la top categoría «Carnes» → PLP «Carnes».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: modal de categorias abierto",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — modal con la top categoria carnes",
     "file": "TC-B2C21-APP-007-android-p01-modal-con-la-top-categoria-carnes.png"
    },
    {
     "caption": "Android · Paso 3 — tras tocar carnes",
     "file": "TC-B2C21-APP-007-android-p03-tras-tocar-carnes.png"
    }
   ],
   "spec": "tests-app/B2C-21.spec.ts",
   "status": "Aprobado",
   "steps": "1. Abrir el modal de categorias.\n2. Hacer tap sobre una top categoria del carrusel.\n3. Verificar la redireccion.",
   "test_data": "La fila no declara Test data."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "Cada categoria N1 muestra su nombre + icono '>' y el carrusel de subcategorias N2 (thumbnail circular + nombre, hasta 3.5 slides visibles); las secciones se muestran una debajo de otra.",
   "form_factor": "app",
   "id": "TC-B2C21-APP-008",
   "name": "Estructura del menu de categorias N1 y subcategorias N2 en APP",
   "observation": "Carnes: nombre + «>» y carrusel N2 con 3.5 slides (Cerdo, Cordero y otros, Pavo, medio Pollo); secciones N1 apiladas. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.",
   "observed": "Carnes: nombre + «>» y carrusel N2 con 3.5 slides (Cerdo, Cordero y otros, Pavo, medio Pollo); secciones N1 apiladas.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: categorias N1 con subcategorias N2 activas asociadas",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — seccion carnes con su carrusel n2",
     "file": "TC-B2C21-APP-008-android-p02-seccion-carnes-con-su-carrusel-n2.png"
    }
   ],
   "spec": "tests-app/B2C-21.spec.ts",
   "status": "Aprobado",
   "steps": "1. Abrir el modal de categorias.\n2. Verificar el nombre y el icono '>' de una categoria N1.\n3. Verificar el carrusel de subcategorias N2 (thumbnail circular + nombre, hasta 3.5 slides visibles).\n4. Verificar que las secciones de las distintas N1 se muestran apiladas verticalmente.",
   "test_data": "La fila no declara Test data."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "El usuario puede deslizar verticalmente el menu y visualizar el resto de las top categorias.",
   "form_factor": "app",
   "id": "TC-B2C21-APP-009",
   "name": "Deslizamiento vertical del menu cuando hay mas de 3 top categorias en APP",
   "observation": "Al deslizar verticalmente aparecen Despensa, Desayuno y Dulces, Bebidas y Licores y Limpieza. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.",
   "observed": "Al deslizar verticalmente aparecen Despensa, Desayuno y Dulces, Bebidas y Licores y Limpieza.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: mas de 3 top categorias N1 activas",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — menu antes de deslizar",
     "file": "TC-B2C21-APP-009-android-p01-menu-antes-de-deslizar.png"
    },
    {
     "caption": "Android · Paso 3 — menu tras deslizar verticalmente",
     "file": "TC-B2C21-APP-009-android-p03-menu-tras-deslizar-verticalmente.png"
    }
   ],
   "spec": "tests-app/B2C-21.spec.ts",
   "status": "Aprobado",
   "steps": "1. Abrir el modal de categorias con mas de 3 top categorias configuradas.\n2. Deslizar verticalmente el menu.\n3. Verificar que se visualizan las categorias adicionales.",
   "test_data": "La fila no declara Test data."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "Se muestra solo el nombre de la categoria N1 y el icono '>'; no se muestra el carrusel de subcategorias N2.",
   "form_factor": "app",
   "id": "TC-B2C21-APP-010",
   "name": "Categoria N1 sin subcategorias N2 solo muestra nombre e icono en APP",
   "observation": "«Congelados» (N1 sin N2) muestra solo el nombre y el «>», sin carrusel. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.",
   "observed": "«Congelados» (N1 sin N2) muestra solo el nombre y el «>», sin carrusel.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: categoria N1 sin subcategorias N2 activas",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — congelados sin carrusel n2",
     "file": "TC-B2C21-APP-010-android-p03-congelados-sin-carrusel-n2.png"
    }
   ],
   "spec": "tests-app/B2C-21.spec.ts",
   "status": "Aprobado",
   "steps": "1. Abrir el modal de categorias.\n2. Ubicar una categoria N1 sin subcategorias N2 activas.\n3. Verificar el contenido mostrado para esa categoria.",
   "test_data": "La fila no declara Test data."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "El sistema navega a la PLP de la categoria N1 seleccionada.",
   "form_factor": "app",
   "id": "TC-B2C21-APP-011",
   "name": "Redireccion al hacer tap en el nombre o icono de una categoria N1 en APP",
   "observation": "Tap en la sección N1 «Carnes» → PLP «Carnes». Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.",
   "observed": "Tap en la sección N1 «Carnes» → PLP «Carnes».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: modal de categorias abierto",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — modal con la seccion carnes",
     "file": "TC-B2C21-APP-011-android-p01-modal-con-la-seccion-carnes.png"
    },
    {
     "caption": "Android · Paso 3 — tras tocar carnes",
     "file": "TC-B2C21-APP-011-android-p03-tras-tocar-carnes.png"
    }
   ],
   "spec": "tests-app/B2C-21.spec.ts",
   "status": "Aprobado",
   "steps": "1. Abrir el modal de categorias.\n2. Hacer tap sobre el nombre (o el icono '>') de una categoria N1.\n3. Verificar la redireccion.",
   "test_data": "La fila no declara Test data."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "El sistema navega a la PLP de la categoria N2 seleccionada.",
   "form_factor": "app",
   "id": "TC-B2C21-APP-012",
   "name": "Redireccion al hacer tap en la imagen o nombre de una categoria N2 en APP",
   "observation": "Tap en la N2 «Cerdo» → PLP «Cerdo». Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.",
   "observed": "Tap en la N2 «Cerdo» → PLP «Cerdo».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: categoria N1 con subcategorias N2 activas",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — modal con la n2 cerdo",
     "file": "TC-B2C21-APP-012-android-p01-modal-con-la-n2-cerdo.png"
    },
    {
     "caption": "Android · Paso 3 — tras tocar cerdo",
     "file": "TC-B2C21-APP-012-android-p03-tras-tocar-cerdo.png"
    }
   ],
   "spec": "tests-app/B2C-21.spec.ts",
   "status": "Aprobado",
   "steps": "1. Abrir el modal de categorias.\n2. Hacer tap sobre la imagen (o el nombre) de una subcategoria N2.\n3. Verificar la redireccion.",
   "test_data": "La fila no declara Test data."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "El unico item del carrusel N2 se muestra alineado a la izquierda; el deslizamiento horizontal no esta habilitado.",
   "form_factor": "app",
   "id": "TC-B2C21-APP-013",
   "name": "Carrusel N2 con una sola subcategoria se alinea a la izquierda sin deslizamiento en APP",
   "observation": "«Desayuno y Dulces» tiene una sola N2 (Mermelada y manjar), alineada a la izquierda; el carrusel no se desliza. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.",
   "observed": "«Desayuno y Dulces» tiene una sola N2 (Mermelada y manjar), alineada a la izquierda; el carrusel no se desliza.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: categoria N1 con exactamente 1 subcategoria N2 activa",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — desayuno y dulces con una sola n2",
     "file": "TC-B2C21-APP-013-android-p02-desayuno-y-dulces-con-una-sola-n2.png"
    },
    {
     "caption": "Android · Paso 3 — tras intentar deslizar el carrusel",
     "file": "TC-B2C21-APP-013-android-p03-tras-intentar-deslizar-el-carrusel.png"
    }
   ],
   "spec": "tests-app/B2C-21.spec.ts",
   "status": "Aprobado",
   "steps": "1. Abrir el modal de categorias.\n2. Ubicar una categoria N1 con exactamente una subcategoria N2 activa.\n3. Verificar la alineacion del item y si el deslizamiento esta habilitado.",
   "test_data": "La fila no declara Test data."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "El nombre de la top categoria se muestra truncado a 20 caracteres, con puntos suspensivos '...' al final.",
   "form_factor": "app",
   "id": "TC-B2C21-APP-014",
   "name": "Nombre de top categoria N1 mayor a 20 caracteres se trunca con puntos suspensivos en APP",
   "observation": "«Lácteos, Huevos y Re...»: los primeros 20 caracteres de «Lácteos, Huevos y Refrigerados» (30) + «...». Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.",
   "observed": "«Lácteos, Huevos y Re...»: los primeros 20 caracteres de «Lácteos, Huevos y Refrigerados» (30) + «...».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: top categoria N1 con nombre de mas de 20 caracteres",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — top categoria lacteos huevos y re",
     "file": "TC-B2C21-APP-014-android-p03-top-categoria-lacteos-huevos-y-re.png"
    },
    {
     "caption": "Android · Paso 3 — nombre completo lacteos huevos y refrigerados",
     "file": "TC-B2C21-APP-014-android-p03-nombre-completo-lacteos-huevos-y-refrigerados.png"
    }
   ],
   "spec": "tests-app/B2C-21.spec.ts",
   "status": "Aprobado",
   "steps": "1. Configurar (o identificar) una top categoria N1 con nombre de mas de 20 caracteres.\n2. Abrir el modal de categorias.\n3. Verificar la forma en que se muestra el nombre en el carrusel de top categorias.",
   "test_data": "La fila no declara Test data."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "El nombre de la categoria N2 se muestra completo en un maximo de 2 lineas, con el salto de linea en el limite de una palabra, sin cortar ninguna palabra a la mitad.",
   "form_factor": "app",
   "id": "TC-B2C21-APP-015",
   "name": "Nombre de categoria N2 entre 15 y 28 caracteres se ajusta a 2 lineas sin cortar palabras en APP",
   "observation": "«Cordero y otros» (15 car.) se muestra completo en 2 líneas («Cordero y» / «otros») sin cortar palabras. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.",
   "observed": "«Cordero y otros» (15 car.) se muestra completo en 2 líneas («Cordero y» / «otros») sin cortar palabras.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: categoria N2 con nombre de entre 15 y 28 caracteres",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — n2 cordero y otros",
     "file": "TC-B2C21-APP-015-android-p03-n2-cordero-y-otros.png"
    }
   ],
   "spec": "tests-app/B2C-21.spec.ts",
   "status": "Aprobado",
   "steps": "1. Configurar (o identificar) una categoria N2 con nombre de entre 15 y 28 caracteres.\n2. Abrir el modal de categorias y desplegar el carrusel N2 correspondiente.\n3. Verificar la forma en que se muestra el nombre.",
   "test_data": "La fila no declara Test data."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "El nombre de la categoria N2 se muestra truncado hasta el ultimo caracter completo de la ultima palabra que entra en la linea 2, con puntos suspensivos '...' al final; ninguna palabra queda cortada a la mitad.",
   "form_factor": "app",
   "id": "TC-B2C21-APP-016",
   "name": "Nombre de categoria N2 mayor a 28 caracteres se trunca en el limite de palabra con puntos suspensivos en APP",
   "observation": "«Comida / instantánea y...»: «Comida instantánea y preparada» (30 car.) truncado en límite de palabra con «...». Pasó en el reintento (el primer intento falló al leer la UI de Android: ambiente). Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.",
   "observed": "«Comida / instantánea y...»: «Comida instantánea y preparada» (30 car.) truncado en límite de palabra con «...». Pasó en el reintento (el primer intento falló al leer la UI de Android: ambiente).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: categoria N2 con nombre de mas de 28 caracteres",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — n2 comida instantanea y",
     "file": "TC-B2C21-APP-016-android-p03-n2-comida-instantanea-y.png"
    },
    {
     "caption": "Android · Paso 3 — nombre completo comida instantanea y preparada",
     "file": "TC-B2C21-APP-016-android-p03-nombre-completo-comida-instantanea-y-preparada.png"
    }
   ],
   "spec": "tests-app/B2C-21.spec.ts",
   "status": "Aprobado",
   "steps": "1. Configurar (o identificar) una categoria N2 con nombre de mas de 28 caracteres.\n2. Abrir el modal de categorias y desplegar el carrusel N2 correspondiente.\n3. Verificar la forma en que se muestra el nombre.",
   "test_data": "La fila no declara Test data."
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 · emulador local",
   "executed_at": "2026-11-09",
   "expected": "La tarjeta de la categoria muestra una imagen placeholder generica en el espacio de la imagen.",
   "form_factor": "app",
   "id": "TC-B2C21-APP-017",
   "name": "Categoria sin thumbnail configurada en Business Manager muestra imagen placeholder en APP",
   "observation": "Esperado: la tarjeta de una categoría sin thumbnail muestra una imagen placeholder genérica. Obtenido: las N2 de Recetas (Desayuno, Snacks, Postres, Cena) muestran un círculo gris con las iniciales del nombre (DE, SN, PO, CE) en lugar de una imagen. tests-app/B2C-21.spec.ts. Bug: B2C-1480. Corrida solo Android con la app ya instalada en el emulador (cl.smu.unimarcapp.sfcc.qa 1.0 (versionCode 3, ya instalada en el emulador)); la fila no declara Test data y el estado de catálogo se identificó en el propio menú. iOS no certificado.",
   "observed": "Las N2 de Recetas muestran un círculo gris con iniciales (DE, SN, PO, CE) en lugar de una imagen placeholder.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: categoria sin thumbnail image configurada",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — recetas categorias sin thumbnail",
     "file": "TC-B2C21-APP-017-android-p03-recetas-categorias-sin-thumbnail.png"
    },
    {
     "caption": "Estado al fallar la aserción",
     "file": "TC-B2C21-APP-017-android.png"
    }
   ],
   "spec": "tests-app/B2C-21.spec.ts",
   "status": "Rechazado",
   "steps": "1. Identificar (o configurar) una categoria sin thumbnail image configurada.\n2. Abrir el modal de categorias.\n3. Verificar la imagen mostrada para esa categoria.",
   "test_data": "La fila no declara Test data."
  }
 ]
}
-->
