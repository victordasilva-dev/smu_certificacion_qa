# B2C-31 APP

| Campo | Valor |
|---|---|
| Suite | B2C-31 |
| Última actualización | 2026-10-27 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-31 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 27 |
| Bloqueado Data | 25 |
| Bloqueado | 2 |
| Rechazado | 1 |
| **Total** | **55** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-27 | 5 | TC-B2C31-APP-005, TC-B2C31-APP-017, TC-B2C31-APP-020, TC-B2C31-APP-048, TC-B2C31-APP-049 |
| 2026-10-26 | 45 | TC-B2C31-APP-001, TC-B2C31-APP-002, TC-B2C31-APP-003, TC-B2C31-APP-004, TC-B2C31-APP-006, TC-B2C31-APP-007, TC-B2C31-APP-008, TC-B2C31-APP-009, TC-B2C31-APP-010, TC-B2C31-APP-011, TC-B2C31-APP-012, TC-B2C31-APP-013, TC-B2C31-APP-014, TC-B2C31-APP-015, TC-B2C31-APP-016, TC-B2C31-APP-018, TC-B2C31-APP-019, TC-B2C31-APP-021, TC-B2C31-APP-022, TC-B2C31-APP-023, TC-B2C31-APP-024, TC-B2C31-APP-025, TC-B2C31-APP-026, TC-B2C31-APP-027, TC-B2C31-APP-028, TC-B2C31-APP-029, TC-B2C31-APP-030, TC-B2C31-APP-031, TC-B2C31-APP-032, TC-B2C31-APP-033, TC-B2C31-APP-034, TC-B2C31-APP-035, TC-B2C31-APP-036, TC-B2C31-APP-037, TC-B2C31-APP-038, TC-B2C31-APP-039, TC-B2C31-APP-040, TC-B2C31-APP-041, TC-B2C31-APP-042, TC-B2C31-APP-043, TC-B2C31-APP-044, TC-B2C31-APP-045, TC-B2C31-APP-046, TC-B2C31-APP-047, TC-B2C31-APP-050 |
| 2026-10-19 | 5 | TC-B2C31-M-022, TC-B2C31-M-032, TC-B2C31-M-033, TC-B2C31-M-034, TC-B2C31-M-040 |

## Detalle por caso de prueba

### TC-B2C31-M-022 - Verificar que un producto con label muestra una sola cucarda sin bloquear la compra [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- {SKU_CUCARDA} tiene configurado el atributo label

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_CUCARDA}: 000000000000028616-KGV

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_CUCARDA} ({BASE_URL}product/{SKU_CUCARDA}).
2. El sistema carga la PDP de {SKU_CUCARDA}.

**Resultado esperado**

Se muestra una sola cucarda y el botón "Agregar" sigue disponible.

**Resultado obtenido**

La PDP del producto con label muestra una sola cucarda ("Cyber") sobre la imagen y el botón Agregar está visible y habilitado.

**Evidencia**

![Paso 2 — pdp con la cucarda del producto](<B2C-31 Evidencias/TC-B2C31-M-022-p02-pdp-con-la-cucarda-del-producto.png>)

![Estado final](<B2C-31 Evidencias/TC-B2C31-M-022.png>)

---

### TC-B2C31-M-032 - Verificar que el tab Información muestra pills solo para las secciones con contenido [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- {SKU_INFO_COMPLETA} tiene varias secciones de información, incluida "Acerca de"

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_INFO_COMPLETA}: 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).
2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.
3. El usuario toca el tab "Información".
4. El sistema muestra las pills de las secciones con contenido con "Descripción" activa.
5. El usuario desliza las pills horizontalmente.
6. El sistema desplaza las pills sin romper el layout.

**Resultado esperado**

Solo hay pills para las secciones con contenido (Descripción, Ingredientes, Estilos de alimentación, Sellos, Tabla nutricional, Acerca de según corresponda), "Descripción" está activa y las pills se desplazan horizontalmente.

**Resultado obtenido**

El tab Información muestra 4 pills (Descripción activa, Ingredientes, Estilos de alimentación, Datos de nutrición), una por sección con contenido; las pills se desplazan horizontalmente sin scroll horizontal de la página.

**Observación**

Aprobado. Observación: la pill de la tabla nutricional se llama "Datos de nutrición" en la UI (el TC la nombra "Tabla nutricional"). El SKU declarado no tiene secciones Sellos ni Acerca de, por lo que no hay pills para ellas (correcto: sin contenido). En la primera corrida falló un intento y pasó en el reintento.

**Evidencia**

![Paso 4 — pills de las secciones con contenido](<B2C-31 Evidencias/TC-B2C31-M-032-p04-pills-de-las-secciones-con-contenido.png>)

![Paso 6 — pills desplazadas](<B2C-31 Evidencias/TC-B2C31-M-032-p06-pills-desplazadas.png>)

![Estado final](<B2C-31 Evidencias/TC-B2C31-M-032.png>)

---

### TC-B2C31-M-033 - Verificar que tocar una pill ancla el scroll a su sección y la marca como activa [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- {SKU_INFO_COMPLETA} tiene la sección "Tabla nutricional"

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_INFO_COMPLETA}: 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).
2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.
3. El usuario toca el tab "Información" y luego la pill "Tabla nutricional".
4. El sistema desplaza el contenido al inicio de la sección "Tabla nutricional" y marca esa pill como activa.

**Resultado esperado**

La pantalla queda al inicio de "Tabla nutricional" y esa pill cambia de color como activa.

**Resultado obtenido**

Al tocar la pill "Datos de nutrición" el scroll sobrepasa el inicio de la sección: el título de la sección queda a 64 px del borde superior, tapado por la barra fija de pills (que termina a 122 px) y el encabezado; la pill sí queda activa (rojo). No se ve el inicio de la sección.

**Observación**

Esperado: la pantalla queda al inicio de "Tabla nutricional" y la pill cambia de color. Obtenido: la pill se activa, pero el título/inicio de la sección queda oculto bajo la barra fija de pills (~58 px de desfase). Reproducido en 3 de 3 intentos.

**Evidencia**

![Paso 3 — tab informacion con sus pills](<B2C-31 Evidencias/TC-B2C31-M-033-p03-tab-informacion-con-sus-pills.png>)

![Estado final](<B2C-31 Evidencias/TC-B2C31-M-033.png>)

---

### TC-B2C31-M-034 - Verificar que las pills de información quedan fijas bajo los tabs al hacer scroll [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- {SKU_INFO_COMPLETA} tiene varias secciones de información

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_INFO_COMPLETA}: 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).
2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.
3. El usuario toca el tab "Información" y hace scroll hacia abajo por el contenido.

**Resultado esperado**

Las pills permanecen fijas debajo de los tabs mientras se recorre el contenido.

**Resultado obtenido**

Al hacer scroll 4 veces por el contenido, la barra de pills permanece en la misma posición (68 px desde arriba) bajo el encabezado.

**Evidencia**

![Paso 3 — tab informacion antes del scroll](<B2C-31 Evidencias/TC-B2C31-M-034-p03-tab-informacion-antes-del-scroll.png>)

![Paso 4 — pills fijas durante el scroll](<B2C-31 Evidencias/TC-B2C31-M-034-p04-pills-fijas-durante-el-scroll.png>)

![Estado final](<B2C-31 Evidencias/TC-B2C31-M-034.png>)

---

### TC-B2C31-M-040 - Verificar que la sección "Acerca de" muestra el contenido inspiracional configurado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Spec | tests/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: PDP
- {SKU_INFO_COMPLETA} tiene contenido en el atributo acercaDe

**Data utilizada**

{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_INFO_COMPLETA}: 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).
2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.
3. El usuario toca el tab "Información" y luego la pill "Acerca de".
4. El sistema muestra el contenido inspiracional del producto.

**Resultado esperado**

Se muestra el contenido configurado (texto, imágenes y/o video) adaptado al ancho de la pantalla, sin desbordes.

**Resultado obtenido**

No se ejecutó el paso 3: el producto declarado no tiene la pill ni la sección "Acerca de" (solo Descripción, Ingredientes, Estilos de alimentación y Datos de nutrición).

**Observación**

Causa: {SKU_INFO_COMPLETA} (000000000000675191-UN) no tiene contenido en el atributo acercaDe en el ambiente dev, contrario a la precondición. Acción: cargar contenido acercaDe en ese SKU o declarar en la planilla un SKU que lo tenga.

**Evidencia**

![Paso 3 — pills del producto](<B2C-31 Evidencias/TC-B2C31-M-040-p03-pills-del-producto.png>)

![Estado final](<B2C-31 Evidencias/TC-B2C31-M-040.png>)

---

### TC-B2C31-APP-001 - Verificar que tocar un producto en la PLP abre su PDP en pantalla completa

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
- Ubicacion: PLP

**Data utilizada**

- v1.0.1 = TBD
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
3. El sistema carga la PLP.
4. El usuario toca un producto del listado.
5. El sistema abre la PDP del producto en pantalla completa.

**Resultado esperado**

La PDP del producto se muestra en pantalla completa, sin breadcrumb, con la flecha para volver a la PLP.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PLP_URL} (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno) es una URL web y la app no navega por URL, así que no hay forma de abrir esa PLP desde la fila. Acción: declarar la categoría de la app. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-002 - Verificar que tocar un producto en la búsqueda abre su PDP en pantalla completa

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
- Ubicacion: SRP

**Data utilizada**

- v1.0.1 = TBD
- leche = leche

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca leche y toca "Buscar" en el teclado.
3. El sistema carga los resultados de búsqueda.
4. El usuario toca un producto de los resultados.
5. El sistema abre la PDP del producto en pantalla completa.

**Resultado esperado**

La PDP del producto se muestra en pantalla completa, sin breadcrumb.

**Evidencia**

![Android · Paso 1 — resultados de leche](<B2C-31 Evidencias/TC-B2C31-APP-002-android-p01-resultados-de-leche.png>)

![Android · Paso 3 — pdp del producto](<B2C-31 Evidencias/TC-B2C31-APP-002-android-p03-pdp-del-producto.png>)

---

### TC-B2C31-APP-003 - Verificar que tocar un producto de un carrusel del Home abre su PDP en pantalla completa

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

**Data utilizada**

- v1.0.1 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App con sus carruseles de productos.
3. El usuario toca un producto de un carrusel.
4. El sistema abre la PDP del producto en pantalla completa.

**Resultado esperado**

La PDP del producto se muestra en pantalla completa, sin breadcrumb.

**Evidencia**

![Android · Paso 1 — home con los mas vendidos](<B2C-31 Evidencias/TC-B2C31-APP-003-android-p01-home-con-los-mas-vendidos.png>)

![Android · Paso 3 — pdp de 000000000000653082 un](<B2C-31 Evidencias/TC-B2C31-APP-003-android-p03-pdp-de-000000000000653082-un.png>)

---

### TC-B2C31-APP-004 - Verificar que la PDP muestra el skeleton durante la carga y luego el contenido completo

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
- Ubicacion: PDP
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta

**Data utilizada**

- v1.0.1 = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema muestra el skeleton de imagen, datos y botones y, al terminar la carga, la PDP completa.

**Resultado esperado**

Durante la carga se ve el skeleton de imagen, datos y botones, y luego la PDP completa.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-005 - Verificar que la PDP muestra sus secciones en el orden definido para App

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-31-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario hace scroll desde el inicio hasta el final de la PDP.

**Resultado esperado**

Las secciones aparecen en orden: galería (ancho completo con dots), información + precios + botones, tabs "Productos similares" | "Información", carrusel "Van bien juntos" (si tiene contenido) y carrusel "Recomendados para ti"; no hay breadcrumb.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso declara {SKU_VALID_001} (000000000000675191-UN), que la propia data también registra como {SKU_SIN_SIMILARES}; con la cuenta de prueba la PDP recorrida hasta el final muestra la galería, el bloque de precio y botones y solo la pestaña «Información»: no tiene pestaña «Productos similares», «Van bien juntos» ni el carrusel «Recomendados para ti» (una sección sin contenido no se muestra). Con {SKU_PRODS_SIMILARES} (000000000000628239-UN, solo diagnóstico) la cuenta tampoco ve «Recomendados para ti». No se puede verificar el orden completo de secciones sin un producto con contenido en todas. Acción: declarar un SKU con similares, «Van bien juntos» y recomendaciones para la cuenta, o confirmar si «Recomendados para ti» debe mostrarse para ella.

**Evidencia**

![Android · Paso 2 — resultados de 000000000000675191 un](<B2C-31 Evidencias/TC-B2C31-APP-005-android-p02-resultados-de-000000000000675191-un.png>)

![Android · Paso 4 — pdp del producto parte superior](<B2C-31 Evidencias/TC-B2C31-APP-005-android-p04-pdp-del-producto-parte-superior.png>)

![Android · Paso 6 — pdp recorrida hasta el final](<B2C-31 Evidencias/TC-B2C31-APP-005-android-p06-pdp-recorrida-hasta-el-final.png>)

![Android · Estado final](<B2C-31 Evidencias/TC-B2C31-APP-005-android.png>)

---

### TC-B2C31-APP-006 - Verificar que una sección sin contenido no se muestra y el orden del resto se mantiene

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
- Ubicacion: PDP

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario hace scroll desde el inicio hasta el final de la PDP.

**Resultado esperado**

No se muestra "Recomendados para ti" (solo para logueado) ni queda espacio vacío, y las demás secciones mantienen su orden.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 Evidencias/TC-B2C31-APP-006-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 3 — pdp recorrida hasta el final](<B2C-31 Evidencias/TC-B2C31-APP-006-android-p03-pdp-recorrida-hasta-el-final.png>)

---

### TC-B2C31-APP-007 - Verificar que un producto con varias imágenes muestra la imagen principal con dots

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
- Ubicacion: PDP
- 000000000000028616-KGV tiene 2 o más imágenes

**Data utilizada**

- v1.0.1 = TBD
- 000000000000028616-KGV = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000028616-KGV y abre su PDP.
3. El sistema carga la PDP de 000000000000028616-KGV.

**Resultado esperado**

Se muestra la imagen principal a ancho completo con dots de posición, en alta resolución.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000028616 kgv](<B2C-31 Evidencias/TC-B2C31-APP-007-android-p01-resultados-de-000000000000028616-kgv.png>)

![Android · Paso 3 — galeria de la pdp](<B2C-31 Evidencias/TC-B2C31-APP-007-android-p03-galeria-de-la-pdp.png>)

---

### TC-B2C31-APP-008 - Verificar que un producto con una sola imagen no muestra controles de navegación

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
- Ubicacion: PDP
- 000000000000652899-UN tiene una sola imagen

**Data utilizada**

- v1.0.1 = TBD
- 000000000000652899-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000652899-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000652899-UN.

**Resultado esperado**

Se muestra la imagen del producto sin dots ni controles de navegación.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000652899 un](<B2C-31 Evidencias/TC-B2C31-APP-008-android-p01-resultados-de-000000000000652899-un.png>)

![Android · Paso 3 — galeria de la pdp](<B2C-31 Evidencias/TC-B2C31-APP-008-android-p03-galeria-de-la-pdp.png>)

---

### TC-B2C31-APP-009 - Verificar que tocar la imagen abre el modal y permite zoom con pinch

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
- Ubicacion: PDP
- 000000000000028616-KGV tiene 2 o más imágenes

**Data utilizada**

- v1.0.1 = TBD
- 000000000000028616-KGV = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000028616-KGV y abre su PDP.
3. El sistema carga la PDP de 000000000000028616-KGV.
4. El usuario toca la imagen principal.
5. El sistema abre el modal de la galería con la imagen.
6. El usuario hace pinch para ampliar la imagen.
7. El sistema amplía la imagen.

**Resultado esperado**

La imagen se amplía con el gesto de pinch y se mantiene nítida (sin pixelado).

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige un pinch (zoom con dos dedos) y mobilewright no expone ese gesto: ni su API ni la de mobilecli lo traen. Acción: verificarlo a mano o habilitar el gesto en la automatización. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-010 - Verificar que en el modal de la galería se desliza horizontalmente entre fotos

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
- Ubicacion: PDP
- 000000000000028616-KGV tiene 2 o más imágenes

**Data utilizada**

- v1.0.1 = TBD
- 000000000000028616-KGV = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000028616-KGV y abre su PDP.
3. El sistema carga la PDP de 000000000000028616-KGV.
4. El usuario toca la imagen principal.
5. El sistema abre el modal de la galería con la imagen.
6. El usuario desliza horizontalmente.
7. El sistema muestra la siguiente foto del producto.

**Resultado esperado**

Al deslizar horizontalmente se pasa de una foto a otra dentro del modal.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000028616 kgv](<B2C-31 Evidencias/TC-B2C31-APP-010-android-p01-resultados-de-000000000000028616-kgv.png>)

![Android · Paso 4 — modal de la galeria](<B2C-31 Evidencias/TC-B2C31-APP-010-android-p04-modal-de-la-galeria.png>)

![Android · Paso 5 — tras deslizar](<B2C-31 Evidencias/TC-B2C31-APP-010-android-p05-tras-deslizar.png>)

---

### TC-B2C31-APP-011 - Verificar que un producto sin imagen válida muestra la imagen por defecto de Unimarc

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
- Ubicacion: PDP
- 000000000000029400-KG no tiene imagen configurada o su URL de imagen retorna error

**Data utilizada**

- v1.0.1 = TBD
- 000000000000029400-KG = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000029400-KG y abre su PDP.
3. El sistema carga la PDP de 000000000000029400-KG.

**Resultado esperado**

Se muestra la imagen por defecto de Unimarc y el resto de la PDP carga normalmente.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000029400 kg](<B2C-31 Evidencias/TC-B2C31-APP-011-android-p01-resultados-de-000000000000029400-kg.png>)

![Android · Paso 3 — pdp del producto sin imagen](<B2C-31 Evidencias/TC-B2C31-APP-011-android-p03-pdp-del-producto-sin-imagen.png>)

---

### TC-B2C31-APP-012 - Verificar que la primera vista muestra los datos obligatorios del producto bajo la imagen

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
- Ubicacion: PLP

**Data utilizada**

- v1.0.1 = TBD
- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.
3. El sistema carga la PLP.
4. El usuario anota nombre, formato y precio de un producto y lo toca.
5. El sistema abre la PDP del producto.

**Resultado esperado**

Bajo la imagen se muestran corazón, compartir, marca, nombre, formato (ej. «200g»), precios vigentes, "Guardar en listas" y "Agregar"; nombre, formato y precio coinciden con lo anotado en la PLP.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PLP_URL} (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno) es una URL web y la app no navega por URL, así que no hay forma de abrir esa PLP desde la fila. Acción: declarar la categoría de la app. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-013 - Verificar que un producto patrocinado muestra el label "Patrocinado"

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
- Ubicacion: PDP
- 000000000000642688-UN tiene isSponsored = true

**Data utilizada**

- v1.0.1 = TBD
- 000000000000642688-UN = 000000000000642688-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000642688-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000642688-UN.

**Resultado esperado**

La PDP muestra el label "Patrocinado".

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {SKU_PATROCINADO} (000000000000642688-UN, Galleta Oreo) no muestra la etiqueta 'Patrocinado' en su PDP. Acción: declarar un SKU que se muestre patrocinado. Re-verificado en vivo el 2026-10-21.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000642688 un](<B2C-31 Evidencias/TC-B2C31-APP-013-android-p01-resultados-de-000000000000642688-un.png>)

![Android · Paso 3 — pdp](<B2C-31 Evidencias/TC-B2C31-APP-013-android-p03-pdp.png>)

![Android · Estado final](<B2C-31 Evidencias/TC-B2C31-APP-013-android.png>)

---

### TC-B2C31-APP-014 - Verificar que un producto de marketplace muestra "Vendido por" y el vendedor

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
- Ubicacion: PDP
- 000000000000217756-UN tiene isMarketplace con valor

**Data utilizada**

- v1.0.1 = TBD
- 000000000000217756-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000217756-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000217756-UN.

**Resultado esperado**

La PDP muestra "Vendido por" seguido del nombre del tercero.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {SKU_MARKETPLACE} (000000000000217756-UN, Papel higiénico Confort) carga la PDP sin precio ni 'Vendido por'; no es un producto de marketplace. Acción: declarar un SKU de marketplace con precio. Re-verificado en vivo el 2026-10-21.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000217756 un](<B2C-31 Evidencias/TC-B2C31-APP-014-android-p01-resultados-de-000000000000217756-un.png>)

![Android · Paso 3 — pdp](<B2C-31 Evidencias/TC-B2C31-APP-014-android-p03-pdp.png>)

![Android · Estado final](<B2C-31 Evidencias/TC-B2C31-APP-014-android.png>)

---

### TC-B2C31-APP-015 - Verificar que tocar la marca lleva a los resultados filtrados por esa marca

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
- Ubicacion: PDP

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario toca el nombre de la marca.
5. El sistema muestra los resultados de esa marca.

**Resultado esperado**

Se muestran los resultados con los productos disponibles de la marca.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 Evidencias/TC-B2C31-APP-015-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 4 — resultados de la marca super pollo](<B2C-31 Evidencias/TC-B2C31-APP-015-android-p04-resultados-de-la-marca-super-pollo.png>)

---

### TC-B2C31-APP-016 - Verificar que tocar "Compartir" abre el share nativo con el link de la PDP

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
- Ubicacion: PDP

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario toca el ícono "Compartir".
5. El sistema abre el iOS Share Sheet / Android Share Intent.

**Resultado esperado**

Se abre el share nativo con el link de la PDP de 000000000000675191-UN.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el botón 'Compartir' de la PDP no tiene etiqueta ni identificador de accesibilidad y la automatización no puede ubicarlo: el botón que sigue al corazón en el árbol abre 'Iniciar sesión o registrarse' y no la hoja para compartir (captura p04). Acción: etiquetar el botón (accessibilityLabel) o verificarlo a mano. Re-verificado en vivo el 2026-10-21.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 Evidencias/TC-B2C31-APP-016-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 4 — hoja de compartir](<B2C-31 Evidencias/TC-B2C31-APP-016-android-p04-hoja-de-compartir.png>)

![Android · Estado final](<B2C-31 Evidencias/TC-B2C31-APP-016-android.png>)

---

### TC-B2C31-APP-017 - Verificar que el corazón agrega el producto a favoritos del usuario logueado

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- 000000000000675191-UN no está en favoritos

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario toca el corazón.
5. El sistema pinta el corazón de rojo y agrega el producto a favoritos.

**Resultado esperado**

El corazón queda rojo y 000000000000675191-UN aparece en la lista de favoritos.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la precondición exige que 000000000000675191-UN no esté en favoritos, pero la PDP lo muestra con el corazón ya marcado (rojo) para la cuenta de prueba; quitarlo sería modificar sus favoritos sin que el caso lo autorice. Acción: dejar el producto fuera de favoritos de la cuenta o declarar otro SKU que no lo esté.

**Evidencia**

![Android · Paso 2 — el corazon de la pdp ya esta marcado](<B2C-31 Evidencias/TC-B2C31-APP-017-android-p02-el-corazon-de-la-pdp-ya-esta-marcado.png>)

---

### TC-B2C31-APP-018 - Verificar que el corazón redirige al login al usuario invitado

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
- Ubicacion: PDP

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario toca el corazón.
5. El sistema redirige al flujo de login.

**Resultado esperado**

Se muestra el flujo de login.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 Evidencias/TC-B2C31-APP-018-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 4 — login](<B2C-31 Evidencias/TC-B2C31-APP-018-android-p04-login.png>)

---

### TC-B2C31-APP-019 - Verificar que un producto en oferta muestra el precio oferta destacado y el normal tachado

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
- Ubicacion: PDP
- 000000000000178089-UN tiene una oferta activa

**Data utilizada**

- v1.0.1 = TBD
- 000000000000178089-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000178089-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000178089-UN.

**Resultado esperado**

El precio oferta se muestra destacado en color de acento y el precio normal aparece tachado.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000178089 un](<B2C-31 Evidencias/TC-B2C31-APP-019-android-p01-resultados-de-000000000000178089-un.png>)

![Android · Paso 3 — precio de la pdp](<B2C-31 Evidencias/TC-B2C31-APP-019-android-p03-precio-de-la-pdp.png>)

---

### TC-B2C31-APP-020 - Verificar que un producto con precio membresía muestra el precio con su label

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-31-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com
- La cuenta daunuruco+noaddress@avatar-global.com tiene membresía vigente

**Data utilizada**

- v1.0.1 = TBD
- 000000000000662457-UN = 000000000000662457-UN
- daunuruco+noaddress@avatar-global.com = 10.101.010-4

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000662457-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000662457-UN.

**Resultado esperado**

Se muestra el precio membresía con su label, además del precio normal.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Android (Pixel 6, Android 14, app v1.0.1) con la cuenta con membresía: la PDP de 000000000000662457-UN muestra el precio normal ($3.890) y debajo el precio de membresía ($2.897) con su badge de diamante; el badge es un ícono sin texto.

**Evidencia**

![Android · Paso 2 — resultados de 000000000000662457 un](<B2C-31 Evidencias/TC-B2C31-APP-020-android-p02-resultados-de-000000000000662457-un.png>)

![Android · Paso 4 — pdp del producto con precio membresia](<B2C-31 Evidencias/TC-B2C31-APP-020-android-p04-pdp-del-producto-con-precio-membresia.png>)

![Android · Estado final](<B2C-31 Evidencias/TC-B2C31-APP-020-android.png>)

---

### TC-B2C31-APP-021 - Verificar que un producto con promo NxPrecio muestra el precio compuesto

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
- Ubicacion: PDP
- {SKU_PROM_NxPRECIO} tiene una promo NxPrecio activa

**Data utilizada**

- v1.0.1 = TBD
- {SKU_PROM_NxPRECIO} = 000000000000666200-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca {SKU_PROM_NxPRECIO} y abre su PDP.
3. El sistema carga la PDP de {SKU_PROM_NxPRECIO}.

**Resultado esperado**

Se muestra el precio promocional en formato X×$XXXX junto al precio normal.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso necesita un producto con promo NxPrecio y la fila no declara ningún SKU. Acción: declarar el SKU. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-022 - Verificar que un producto pesable muestra el PPUM junto a sus precios

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
- Ubicacion: PDP
- 000000000000037972-KG tiene precio, unit y unit-quantity cargados

**Data utilizada**

- v1.0.1 = TBD
- 000000000000037972-KG = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000037972-KG y abre su PDP.
3. El sistema carga la PDP de 000000000000037972-KG.

**Resultado esperado**

Se muestra el PPUM (precio / unit-quantity) junto al precio normal y a cada precio promocional activo.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000037972 kg](<B2C-31 Evidencias/TC-B2C31-APP-022-android-p01-resultados-de-000000000000037972-kg.png>)

![Android · Paso 3 — precio de la pdp](<B2C-31 Evidencias/TC-B2C31-APP-022-android-p03-precio-de-la-pdp.png>)

---

### TC-B2C31-APP-023 - Verificar que un producto con label muestra una sola cucarda sin bloquear la compra

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
- Ubicacion: PDP
- 000000000000028616-KGV tiene configurado el atributo label

**Data utilizada**

- v1.0.1 = TBD
- 000000000000028616-KGV = 000000000000662457-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000028616-KGV y abre su PDP.
3. El sistema carga la PDP de 000000000000028616-KGV.

**Resultado esperado**

Se muestra una sola cucarda y el botón "Agregar" sigue disponible.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000028616 kgv](<B2C-31 Evidencias/TC-B2C31-APP-023-android-p01-resultados-de-000000000000028616-kgv.png>)

![Android · Paso 3 — precio de la pdp](<B2C-31 Evidencias/TC-B2C31-APP-023-android-p03-precio-de-la-pdp.png>)

---

### TC-B2C31-APP-024 - Verificar que "Agregar" suma el producto al carro y muestra el stepper

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
- Ubicacion: PDP
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000000675191-UN no está en el carro

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario anota el contador del ícono del carro y toca "Agregar".
5. El sistema agrega el producto y reemplaza "Agregar" por el stepper de cantidad.

**Resultado esperado**

El contador del carro aumenta en 1, el monto total se recalcula y se muestra el stepper con 1 unidad.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso necesita el producto en el carro y un invitado sin dirección no puede agregar: 'Agregar' abre el Store Locator (APP-026 lo comprobó hoy) y la fila no declara una dirección. Acción: declarar la dirección del invitado en la fila. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-025 - Verificar que el "+" del stepper suma una unidad al carro

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
- Ubicacion: PDP
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- El carro contiene 000000000000675191-UN x 1

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario toca "+" en el stepper.
5. El sistema suma una unidad y actualiza el contador y el monto del carro.

**Resultado esperado**

El stepper muestra 2 unidades y el contador y el monto del carro se actualizan.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso necesita el producto en el carro y un invitado sin dirección no puede agregar: 'Agregar' abre el Store Locator (APP-026 lo comprobó hoy) y la fila no declara una dirección. Acción: declarar la dirección del invitado en la fila. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-026 - Verificar que "Agregar" sin método de entrega abre el Store Locator

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
- Ubicacion: PDP
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario toca "Agregar".
5. El sistema abre el Store Locator.

**Resultado esperado**

Se abre el Store Locator y el producto no se agrega al carro.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 Evidencias/TC-B2C31-APP-026-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 4 — store locator](<B2C-31 Evidencias/TC-B2C31-APP-026-android-p04-store-locator.png>)

---

### TC-B2C31-APP-027 - Verificar que un producto sin stock oculta "Agregar" y muestra "Pronto disponible"

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
- Ubicacion: PDP
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000000029403-KG no tiene stock para el método de entrega activo

**Data utilizada**

- v1.0.1 = TBD
- 000000000000029403-KG = 000000000000029403-KG

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000029403-KG y abre su PDP.
3. El sistema carga la PDP de 000000000000029403-KG.

**Resultado esperado**

No se muestra "Agregar" y se muestra el tag "Pronto disponible".

**Evidencia**

![Android · Paso 1 — resultados de 000000000000029403 kg](<B2C-31 Evidencias/TC-B2C31-APP-027-android-p01-resultados-de-000000000000029403-kg.png>)

![Android · Paso 3 — pdp](<B2C-31 Evidencias/TC-B2C31-APP-027-android-p03-pdp.png>)

---

### TC-B2C31-APP-028 - Verificar que con todo el stock en el carro el "+" del stepper se deshabilita

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
- Ubicacion: PDP
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000638426003-UN tiene pocas unidades de stock disponibles

**Data utilizada**

- v1.0.1 = TBD
- 000000000638426003-UN = 000000000638426003-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000638426003-UN y abre su PDP.
3. El sistema carga la PDP de 000000000638426003-UN.
4. El usuario toca "Agregar" y luego "+" hasta que el stepper no permita sumar más.
5. El sistema deshabilita el "+" al llegar al stock disponible.

**Resultado esperado**

El "+" queda deshabilitado cuando la cantidad en el carro iguala el stock disponible.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso necesita el producto en el carro y un invitado sin dirección no puede agregar: 'Agregar' abre el Store Locator (APP-026 lo comprobó hoy) y la fila no declara una dirección. Acción: declarar la dirección del invitado en la fila. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-029 - Verificar que al alcanzar el cartlimit el "+" se deshabilita y se muestra el mensaje de máximo

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
- Ubicacion: PDP
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- 000000000000666357-UN tiene cartlimit configurado en SFCC

**Data utilizada**

- v1.0.1 = TBD
- 000000000000666357-UN = 000000000000626717-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000666357-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000666357-UN.
4. El usuario toca "Agregar" y luego "+" hasta alcanzar el límite de compra.
5. El sistema deshabilita el "+" y muestra "Usted ha agregado la cantidad máxima de productos".

**Resultado esperado**

El "+" queda deshabilitado y se muestra el mensaje "Usted ha agregado la cantidad máxima de productos".

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso necesita el producto en el carro y un invitado sin dirección no puede agregar: 'Agregar' abre el Store Locator (APP-026 lo comprobó hoy) y la fila no declara una dirección. Acción: declarar la dirección del invitado en la fila. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-030 - Verificar que un producto con stock bajo el umbral muestra "Últimas unidades"

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
- Ubicacion: PDP
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- El stock visible de 000000000638426003-UN es menor o igual al umbral FOMO

**Data utilizada**

- v1.0.1 = TBD
- 000000000638426003-UN = 000000000638426003-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000638426003-UN y abre su PDP.
3. El sistema carga la PDP de 000000000638426003-UN.

**Resultado esperado**

Se muestra el label "Últimas unidades" en la ficha del producto.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso necesita el producto en el carro y un invitado sin dirección no puede agregar: 'Agregar' abre el Store Locator (APP-026 lo comprobó hoy) y la fila no declara una dirección. Acción: declarar la dirección del invitado en la fila. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-031 - Verificar que el bloque de datos y "Agregar" queda fijo al recorrer los tabs

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
- Ubicacion: PDP

**Data utilizada**

- v1.0.1 = TBD
- 000000000401693004-UN = 000000000401693004-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000401693004-UN y abre su PDP.
3. El sistema carga la PDP de 000000000401693004-UN.
4. El usuario hace scroll hacia abajo por los tabs hasta el carrusel "Van bien juntos".

**Resultado esperado**

El bloque de datos y "Agregar" permanece visible mientras se recorren los tabs y deja de estar fijo al llegar a "Van bien juntos".

**Evidencia**

![Android · Paso 1 — resultados de 000000000401693004 un](<B2C-31 Evidencias/TC-B2C31-APP-031-android-p01-resultados-de-000000000401693004-un.png>)

![Android · Paso 3 — al llegar a van bien juntos](<B2C-31 Evidencias/TC-B2C31-APP-031-android-p03-al-llegar-a-van-bien-juntos.png>)

---

### TC-B2C31-APP-032 - Verificar que el tab "Productos similares" está activo por defecto con su carrusel

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
- Ubicacion: PDP

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario hace scroll hasta la sección de tabs.

**Resultado esperado**

El tab "Productos similares" aparece seleccionado y muestra un carrusel de productos de la misma categoría.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {SKU_VALID_001} (000000000000675191-UN) no tiene 'Productos similares': su PDP solo muestra el tab 'Información'. Acción: declarar un SKU con 'Productos similares'. Re-verificado en vivo el 2026-10-21.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 Evidencias/TC-B2C31-APP-032-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 3 — tabs de la pdp](<B2C-31 Evidencias/TC-B2C31-APP-032-android-p03-tabs-de-la-pdp.png>)

![Android · Estado final](<B2C-31 Evidencias/TC-B2C31-APP-032-android.png>)

---

### TC-B2C31-APP-033 - Verificar que el tab Información muestra pills solo para las secciones con contenido

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
- Ubicacion: PDP
- 000000000000675191-UN tiene varias secciones de información, incluida "Acerca de"

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario toca el tab "Información".
5. El sistema muestra las pills de las secciones con contenido con "Descripción" activa.
6. El usuario desliza las pills horizontalmente.
7. El sistema desplaza las pills sin romper el layout.

**Resultado esperado**

Solo hay pills para las secciones con contenido, "Descripción" está activa y las pills se desplazan horizontalmente.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 Evidencias/TC-B2C31-APP-033-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 3 — tab informacion](<B2C-31 Evidencias/TC-B2C31-APP-033-android-p03-tab-informacion.png>)

---

### TC-B2C31-APP-034 - Verificar que tocar una pill ancla el scroll a su sección y la marca como activa

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
- Ubicacion: PDP
- 000000000000675191-UN tiene la sección "Tabla nutricional"

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario toca el tab "Información" y luego la pill "Tabla nutricional".
5. El sistema desplaza el contenido al inicio de la sección "Tabla nutricional" y marca esa pill como activa.

**Resultado esperado**

La pantalla queda al inicio de "Tabla nutricional" y esa pill cambia de color como activa.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 Evidencias/TC-B2C31-APP-034-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 4 — tras tocar la pill de nutricion](<B2C-31 Evidencias/TC-B2C31-APP-034-android-p04-tras-tocar-la-pill-de-nutricion.png>)

---

### TC-B2C31-APP-035 - Verificar que las pills de información quedan fijas bajo los tabs al hacer scroll

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
- Ubicacion: PDP
- 000000000000675191-UN tiene varias secciones de información

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario toca el tab "Información" y hace scroll hacia abajo por el contenido.

**Resultado esperado**

Las pills permanecen fijas debajo de los tabs mientras se recorre el contenido.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 Evidencias/TC-B2C31-APP-035-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 3 — tab informacion](<B2C-31 Evidencias/TC-B2C31-APP-035-android-p03-tab-informacion.png>)

![Android · Paso 4 — pills tras seguir desplazando](<B2C-31 Evidencias/TC-B2C31-APP-035-android-p04-pills-tras-seguir-desplazando.png>)

---

### TC-B2C31-APP-036 - Verificar que la sección Descripción muestra el texto del producto y su SKU

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
- Ubicacion: PDP

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario toca el tab "Información".

**Resultado esperado**

La sección "Descripción" muestra el texto del producto (y la descripción enriquecida si existe) y el SKU 000000000000675191-UN.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 Evidencias/TC-B2C31-APP-036-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 3 — tab informacion](<B2C-31 Evidencias/TC-B2C31-APP-036-android-p03-tab-informacion.png>)

---

### TC-B2C31-APP-037 - Verificar que un producto con una sola sección muestra una sola pill

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
- Ubicacion: PDP
- 000000000000675191-UN solo tiene descripción

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario toca el tab "Información".

**Resultado esperado**

Solo se muestra la pill "Descripción" y no aparecen pills para secciones sin contenido (incluida "Acerca de").

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {SKU_SOLO_DESCRIPCION} (000000000000675191-UN) tiene Descripción, Ingredientes, Estilos de alimentación y Datos de nutrición, así que no sirve para 'una sola sección'. Acción: declarar un SKU con una sola sección de información. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-038 - Verificar que la PDP muestra el carrusel "Van bien juntos" al final

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
- Ubicacion: PDP

**Data utilizada**

- v1.0.1 = TBD
- 000000000401693004-UN = 000000000401693004-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000401693004-UN y abre su PDP.
3. El sistema carga la PDP de 000000000401693004-UN.
4. El usuario hace scroll hasta el final de la PDP.

**Resultado esperado**

Se muestra el carrusel "Van bien juntos" con productos complementarios, deslizable horizontalmente.

**Evidencia**

![Android · Paso 1 — resultados de 000000000401693004 un](<B2C-31 Evidencias/TC-B2C31-APP-038-android-p01-resultados-de-000000000401693004-un.png>)

![Android · Paso 3 — final de la pdp](<B2C-31 Evidencias/TC-B2C31-APP-038-android-p03-final-de-la-pdp.png>)

---

### TC-B2C31-APP-039 - Verificar que "Combina la promo" aparece con promo combinable y abre su modal

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
- Ubicacion: PDP
- 000000000000666200-UN tiene una promo combinable activa (ID termina en CLP1) con variantes con stock

**Data utilizada**

- v1.0.1 = TBD
- 000000000000666200-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000666200-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000666200-UN.
4. El usuario toca "Combina la promo".
5. El sistema abre el modal de Combina la promo con las variantes combinables.

**Resultado esperado**

Se muestra "Combina la promo" junto a "Agregar" y al tocarlo se abre el modal con las variantes combinables.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000666200 un](<B2C-31 Evidencias/TC-B2C31-APP-039-android-p01-resultados-de-000000000000666200-un.png>)

![Android · Paso 3 — pdp](<B2C-31 Evidencias/TC-B2C31-APP-039-android-p03-pdp.png>)

![Android · Paso 5 — modal de variantes combinables](<B2C-31 Evidencias/TC-B2C31-APP-039-android-p05-modal-de-variantes-combinables.png>)

---

### TC-B2C31-APP-040 - Verificar que sin promo combinable no se muestra "Combina la promo"

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
- Ubicacion: PDP
- 000000000000675191-UN no tiene promo combinable activa

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.

**Resultado esperado**

No se muestra el botón "Combina la promo".

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 Evidencias/TC-B2C31-APP-040-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 3 — pdp](<B2C-31 Evidencias/TC-B2C31-APP-040-android-p03-pdp.png>)

---

### TC-B2C31-APP-041 - Verificar que la sección "Acerca de" muestra el contenido inspiracional configurado

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
- Ubicacion: PDP
- 000000000000675191-UN tiene contenido en el atributo acercaDe

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario toca el tab "Información" y luego la pill "Acerca de".
5. El sistema muestra el contenido inspiracional del producto.

**Resultado esperado**

Se muestra el contenido configurado (texto, imágenes y/o video) adaptado al ancho de la pantalla, sin desbordes.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {SKU_INFO_COMPLETA} (000000000000675191-UN) no tiene la sección 'Acerca de': sus secciones son Descripción, Ingredientes, Estilos de alimentación y Datos de nutrición. Acción: cargar 'Acerca de' en el SKU o declarar otro que la tenga. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-042 - Verificar que un fallo al cargar el producto muestra la pantalla de error

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
- Ubicacion: PDP
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages

**Data utilizada**

- v1.0.1 = TBD
- *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema muestra la imagen, "Tuvimos un problema al cargar tu producto", "Estamos trabajando para solucionarlo. Intenta nuevamente en unos segundos.", el código de error y los botones "Reintentar" e "Ir a inicio".

**Resultado esperado**

Se muestra la pantalla de error completa con código y los botones "Reintentar" e "Ir a inicio".

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-043 - Verificar que "Reintentar" muestra el skeleton y vuelve a cargar el producto

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
- Ubicacion: PDP
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages

**Data utilizada**

- v1.0.1 = TBD
- *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema muestra la pantalla de error de la PDP.
4. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado y toca "Reintentar".
5. El sistema muestra el skeleton de la PDP y luego la PDP completa.

**Resultado esperado**

Tras tocar "Reintentar" se ve el skeleton y luego la PDP de 000000000000675191-UN.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-044 - Verificar que "Ir a inicio" de la pantalla de error lleva al Home

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
- Ubicacion: PDP
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages

**Data utilizada**

- v1.0.1 = TBD
- *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema muestra la pantalla de error de la PDP.
4. El usuario toca "Ir a inicio".
5. El sistema redirige al Home de la App.

**Resultado esperado**

El usuario queda en el Home de la App.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-045 - Verificar que un deep link a un producto inexistente muestra la pantalla 404 de producto

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
- Ubicacion: Deep link

**Data utilizada**

- v1.0.1 = TBD
- {PDP_DEEPLINK_INEXISTENTE} = TBD

**Pasos ejecutados**

1. El usuario abre el deep link {PDP_DEEPLINK_INEXISTENTE} desde el dispositivo.
2. El sistema abre la App y muestra la pantalla 404 con una imagen, "El producto que buscas no existe o ya no está disponible" y el botón "Ir a la página de Inicio".

**Resultado esperado**

Se muestra la pantalla 404 de producto con imagen, mensaje y botón "Ir a la página de Inicio".

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-046 - Verificar que el botón de la pantalla 404 lleva al Home

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
- Ubicacion: Deep link

**Data utilizada**

- v1.0.1 = TBD
- {PDP_DEEPLINK_INEXISTENTE} = TBD

**Pasos ejecutados**

1. El usuario abre el deep link {PDP_DEEPLINK_INEXISTENTE} desde el dispositivo.
2. El sistema abre la App y muestra la pantalla 404 de producto.
3. El usuario toca "Ir a la página de Inicio".
4. El sistema redirige al Home de la App.

**Resultado esperado**

El usuario queda en el Home de la App.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-047 - Verificar que la pantalla 404 de producto no redirige al Home automáticamente

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
- Ubicacion: Deep link

**Data utilizada**

- v1.0.1 = TBD
- {PDP_DEEPLINK_INEXISTENTE} = TBD

**Pasos ejecutados**

1. El usuario abre el deep link {PDP_DEEPLINK_INEXISTENTE} desde el dispositivo.
2. El sistema abre la App y muestra la pantalla 404 de producto.
3. El usuario espera 10 segundos sin interactuar.
4. El sistema mantiene la pantalla 404.

**Resultado esperado**

Después de 10 segundos el usuario sigue en la pantalla 404 (no hay redirección automática al Home).

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-048 - Verificar que "Guardar en mis listas" abre el modal "Agregar como lista" desde abajo

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-31-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com

**Data utilizada**

- v1.0.1 = TBD
- 000000000000675191-UN = 000000000000675191-UN
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000675191-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000675191-UN.
4. El usuario toca "Guardar en listas".
5. El sistema despliega desde abajo el modal "Agregar como lista".

**Resultado esperado**

Se muestra el modal "Agregar como lista" desplegado desde la parte inferior sobre la PDP.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Android (Pixel 6, Android 14, app v1.0.1): «Guardar en listas» abre desde abajo, sobre la PDP, el modal «Agregar como lista» con «Crear nueva lista» y la lista «Recurrentes».

**Evidencia**

![Android · Paso 2 — resultados de 000000000000675191 un](<B2C-31 Evidencias/TC-B2C31-APP-048-android-p02-resultados-de-000000000000675191-un.png>)

![Android · Paso 4 — modal tras tocar guardar en listas](<B2C-31 Evidencias/TC-B2C31-APP-048-android-p04-modal-tras-tocar-guardar-en-listas.png>)

---

### TC-B2C31-APP-049 - Verificar que con Membresía, Unipay y BancoEstado a la vez el 3er precio es el de Membresía

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-31-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com
- PriceDisplayPriority = MEMBERSHIP_FIRST (valor por defecto)
- 000000000000666200-UN tiene precio Membresía, Unipay y BancoEstado vigentes a la vez

**Data utilizada**

- v1.0.1 = TBD
- 000000000000666200-UN = TBD
- daunuruco+noaddress@avatar-global.com = 10.101.010-4

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca 000000000000666200-UN y abre su PDP.
3. El sistema carga la PDP de 000000000000666200-UN.

**Resultado esperado**

Se muestran como máximo 3 precios y el tercero corresponde al precio Membresía.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la PDP de {SKU_TRES_PRECIOS} (000000000000666200-UN) con la cuenta con membresía muestra solo tres precios —promoción «Lleva 2 por $12.490», «Lleva 2 por $10.866» con badge de membresía y $7.690 c/u—, sin precios Unipay ni Banco Estado vigentes, por lo que no se cumple la precondición (Membresía, Unipay y Banco Estado a la vez) y no se puede verificar cuál es el tercer precio. Acción: dejar vigentes los tres precios en el SKU o declarar otro que los tenga.

**Evidencia**

![Android · Paso 2 — resultados de 000000000000666200 un](<B2C-31 Evidencias/TC-B2C31-APP-049-android-p02-resultados-de-000000000000666200-un.png>)

![Android · Paso 4 — pdp con los precios](<B2C-31 Evidencias/TC-B2C31-APP-049-android-p04-pdp-con-los-precios.png>)

---

### TC-B2C31-APP-050 - Verificar que un producto con "Completa la promo" no muestra el botón "Combina la promo"

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
- Ubicacion: PDP
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_PROM_NxM} tiene una promo NxM del mismo SKU (Completa la promo)

**Data utilizada**

- v1.0.1 = TBD
- {SKU_PROM_NxM} = 000000000641229002-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El usuario busca {SKU_PROM_NxM} y abre su PDP.
3. El sistema carga la PDP de {SKU_PROM_NxM}.
4. El usuario toca "Agregar" y luego "+" en el stepper.
5. El sistema actualiza la cantidad en el stepper de la PDP.

**Resultado esperado**

No se muestra "Combina la promo" y las unidades se agregan desde el stepper de la PDP.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso necesita un producto con 'Completa la promo' y la fila no declara ningún SKU. Acción: declarar el SKU. Re-verificado en vivo el 2026-10-21.

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "webkit"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Pixel 6 · Android 14 (emulador)"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-31",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-31 APP Test Cases.xlsx",
  "title": "B2C-31 APP",
  "updated_at": "2026-10-27"
 },
 "history": {
  "2026-10-19": [
   "TC-B2C31-M-022",
   "TC-B2C31-M-032",
   "TC-B2C31-M-033",
   "TC-B2C31-M-034",
   "TC-B2C31-M-040"
  ],
  "2026-10-26": [
   "TC-B2C31-APP-001",
   "TC-B2C31-APP-002",
   "TC-B2C31-APP-003",
   "TC-B2C31-APP-004",
   "TC-B2C31-APP-006",
   "TC-B2C31-APP-007",
   "TC-B2C31-APP-008",
   "TC-B2C31-APP-009",
   "TC-B2C31-APP-010",
   "TC-B2C31-APP-011",
   "TC-B2C31-APP-012",
   "TC-B2C31-APP-013",
   "TC-B2C31-APP-014",
   "TC-B2C31-APP-015",
   "TC-B2C31-APP-016",
   "TC-B2C31-APP-018",
   "TC-B2C31-APP-019",
   "TC-B2C31-APP-021",
   "TC-B2C31-APP-022",
   "TC-B2C31-APP-023",
   "TC-B2C31-APP-024",
   "TC-B2C31-APP-025",
   "TC-B2C31-APP-026",
   "TC-B2C31-APP-027",
   "TC-B2C31-APP-028",
   "TC-B2C31-APP-029",
   "TC-B2C31-APP-030",
   "TC-B2C31-APP-031",
   "TC-B2C31-APP-032",
   "TC-B2C31-APP-033",
   "TC-B2C31-APP-034",
   "TC-B2C31-APP-035",
   "TC-B2C31-APP-036",
   "TC-B2C31-APP-037",
   "TC-B2C31-APP-038",
   "TC-B2C31-APP-039",
   "TC-B2C31-APP-040",
   "TC-B2C31-APP-041",
   "TC-B2C31-APP-042",
   "TC-B2C31-APP-043",
   "TC-B2C31-APP-044",
   "TC-B2C31-APP-045",
   "TC-B2C31-APP-046",
   "TC-B2C31-APP-047",
   "TC-B2C31-APP-050"
  ],
  "2026-10-27": [
   "TC-B2C31-APP-005",
   "TC-B2C31-APP-017",
   "TC-B2C31-APP-020",
   "TC-B2C31-APP-048",
   "TC-B2C31-APP-049"
  ]
 },
 "results": [
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "Se muestra una sola cucarda y el botón \"Agregar\" sigue disponible.",
   "form_factor": "mobile",
   "id": "TC-B2C31-M-022",
   "name": "Verificar que un producto con label muestra una sola cucarda sin bloquear la compra [Mobile] [Guest]",
   "observed": "La PDP del producto con label muestra una sola cucarda (\"Cyber\") sobre la imagen y el botón Agregar está visible y habilitado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- {SKU_CUCARDA} tiene configurado el atributo label",
   "screenshots": [
    {
     "caption": "Paso 2 — pdp con la cucarda del producto",
     "file": "TC-B2C31-M-022-p02-pdp-con-la-cucarda-del-producto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C31-M-022.png"
    }
   ],
   "spec": "tests/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a la PDP de {SKU_CUCARDA} ({BASE_URL}product/{SKU_CUCARDA}).\n2. El sistema carga la PDP de {SKU_CUCARDA}.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_CUCARDA}: 000000000000028616-KGV",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "Solo hay pills para las secciones con contenido (Descripción, Ingredientes, Estilos de alimentación, Sellos, Tabla nutricional, Acerca de según corresponda), \"Descripción\" está activa y las pills se desplazan horizontalmente.",
   "form_factor": "mobile",
   "id": "TC-B2C31-M-032",
   "name": "Verificar que el tab Información muestra pills solo para las secciones con contenido [Mobile] [Guest]",
   "observation": "Aprobado. Observación: la pill de la tabla nutricional se llama \"Datos de nutrición\" en la UI (el TC la nombra \"Tabla nutricional\"). El SKU declarado no tiene secciones Sellos ni Acerca de, por lo que no hay pills para ellas (correcto: sin contenido). En la primera corrida falló un intento y pasó en el reintento.",
   "observed": "El tab Información muestra 4 pills (Descripción activa, Ingredientes, Estilos de alimentación, Datos de nutrición), una por sección con contenido; las pills se desplazan horizontalmente sin scroll horizontal de la página.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- {SKU_INFO_COMPLETA} tiene varias secciones de información, incluida \"Acerca de\"",
   "screenshots": [
    {
     "caption": "Paso 4 — pills de las secciones con contenido",
     "file": "TC-B2C31-M-032-p04-pills-de-las-secciones-con-contenido.png"
    },
    {
     "caption": "Paso 6 — pills desplazadas",
     "file": "TC-B2C31-M-032-p06-pills-desplazadas.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C31-M-032.png"
    }
   ],
   "spec": "tests/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).\n2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.\n3. El usuario toca el tab \"Información\".\n4. El sistema muestra las pills de las secciones con contenido con \"Descripción\" activa.\n5. El usuario desliza las pills horizontalmente.\n6. El sistema desplaza las pills sin romper el layout.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_INFO_COMPLETA}: 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "La pantalla queda al inicio de \"Tabla nutricional\" y esa pill cambia de color como activa.",
   "form_factor": "mobile",
   "id": "TC-B2C31-M-033",
   "name": "Verificar que tocar una pill ancla el scroll a su sección y la marca como activa [Mobile] [Guest]",
   "observation": "Esperado: la pantalla queda al inicio de \"Tabla nutricional\" y la pill cambia de color. Obtenido: la pill se activa, pero el título/inicio de la sección queda oculto bajo la barra fija de pills (~58 px de desfase). Reproducido en 3 de 3 intentos.",
   "observed": "Al tocar la pill \"Datos de nutrición\" el scroll sobrepasa el inicio de la sección: el título de la sección queda a 64 px del borde superior, tapado por la barra fija de pills (que termina a 122 px) y el encabezado; la pill sí queda activa (rojo). No se ve el inicio de la sección.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- {SKU_INFO_COMPLETA} tiene la sección \"Tabla nutricional\"",
   "screenshots": [
    {
     "caption": "Paso 3 — tab informacion con sus pills",
     "file": "TC-B2C31-M-033-p03-tab-informacion-con-sus-pills.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C31-M-033.png"
    }
   ],
   "spec": "tests/B2C-31.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).\n2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.\n3. El usuario toca el tab \"Información\" y luego la pill \"Tabla nutricional\".\n4. El sistema desplaza el contenido al inicio de la sección \"Tabla nutricional\" y marca esa pill como activa.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_INFO_COMPLETA}: 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "Las pills permanecen fijas debajo de los tabs mientras se recorre el contenido.",
   "form_factor": "mobile",
   "id": "TC-B2C31-M-034",
   "name": "Verificar que las pills de información quedan fijas bajo los tabs al hacer scroll [Mobile] [Guest]",
   "observed": "Al hacer scroll 4 veces por el contenido, la barra de pills permanece en la misma posición (68 px desde arriba) bajo el encabezado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- {SKU_INFO_COMPLETA} tiene varias secciones de información",
   "screenshots": [
    {
     "caption": "Paso 3 — tab informacion antes del scroll",
     "file": "TC-B2C31-M-034-p03-tab-informacion-antes-del-scroll.png"
    },
    {
     "caption": "Paso 4 — pills fijas durante el scroll",
     "file": "TC-B2C31-M-034-p04-pills-fijas-durante-el-scroll.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C31-M-034.png"
    }
   ],
   "spec": "tests/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).\n2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.\n3. El usuario toca el tab \"Información\" y hace scroll hacia abajo por el contenido.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_INFO_COMPLETA}: 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-19",
   "expected": "Se muestra el contenido configurado (texto, imágenes y/o video) adaptado al ancho de la pantalla, sin desbordes.",
   "form_factor": "mobile",
   "id": "TC-B2C31-M-040",
   "name": "Verificar que la sección \"Acerca de\" muestra el contenido inspiracional configurado [Mobile] [Guest]",
   "observation": "Causa: {SKU_INFO_COMPLETA} (000000000000675191-UN) no tiene contenido en el atributo acercaDe en el ambiente dev, contrario a la precondición. Acción: cargar contenido acercaDe en ese SKU o declarar en la planilla un SKU que lo tenga.",
   "observed": "No se ejecutó el paso 3: el producto declarado no tiene la pill ni la sección \"Acerca de\" (solo Descripción, Ingredientes, Estilos de alimentación y Datos de nutrición).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: PDP\n- {SKU_INFO_COMPLETA} tiene contenido en el atributo acercaDe",
   "screenshots": [
    {
     "caption": "Paso 3 — pills del producto",
     "file": "TC-B2C31-M-040-p03-pills-del-producto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C31-M-040.png"
    }
   ],
   "spec": "tests/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a la PDP de {SKU_INFO_COMPLETA} ({BASE_URL}product/{SKU_INFO_COMPLETA}).\n2. El sistema carga la PDP de {SKU_INFO_COMPLETA}.\n3. El usuario toca el tab \"Información\" y luego la pill \"Acerca de\".\n4. El sistema muestra el contenido inspiracional del producto.",
   "test_data": "{BASE_URL}: https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/; {SKU_INFO_COMPLETA}: 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La PDP del producto se muestra en pantalla completa, sin breadcrumb, con la flecha para volver a la PLP.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-001",
   "name": "Verificar que tocar un producto en la PLP abre su PDP en pantalla completa",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PLP_URL} (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno) es una URL web y la app no navega por URL, así que no hay forma de abrir esa PLP desde la fila. Acción: declarar la categoría de la app. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n3. El sistema carga la PLP.\n4. El usuario toca un producto del listado.\n5. El sistema abre la PDP del producto en pantalla completa.",
   "test_data": "- v1.0.1 = TBD\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La PDP del producto se muestra en pantalla completa, sin breadcrumb.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-002",
   "name": "Verificar que tocar un producto en la búsqueda abre su PDP en pantalla completa",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: SRP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de leche",
     "file": "TC-B2C31-APP-002-android-p01-resultados-de-leche.png"
    },
    {
     "caption": "Android · Paso 3 — pdp del producto",
     "file": "TC-B2C31-APP-002-android-p03-pdp-del-producto.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca leche y toca \"Buscar\" en el teclado.\n3. El sistema carga los resultados de búsqueda.\n4. El usuario toca un producto de los resultados.\n5. El sistema abre la PDP del producto en pantalla completa.",
   "test_data": "- v1.0.1 = TBD\n- leche = leche"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La PDP del producto se muestra en pantalla completa, sin breadcrumb.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-003",
   "name": "Verificar que tocar un producto de un carrusel del Home abre su PDP en pantalla completa",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — home con los mas vendidos",
     "file": "TC-B2C31-APP-003-android-p01-home-con-los-mas-vendidos.png"
    },
    {
     "caption": "Android · Paso 3 — pdp de 000000000000653082 un",
     "file": "TC-B2C31-APP-003-android-p03-pdp-de-000000000000653082-un.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App con sus carruseles de productos.\n3. El usuario toca un producto de un carrusel.\n4. El sistema abre la PDP del producto en pantalla completa.",
   "test_data": "- v1.0.1 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Durante la carga se ve el skeleton de imagen, datos y botones, y luego la PDP completa.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-004",
   "name": "Verificar que la PDP muestra el skeleton durante la carga y luego el contenido completo",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema muestra el skeleton de imagen, datos y botones y, al terminar la carga, la PDP completa.",
   "test_data": "- v1.0.1 = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Las secciones aparecen en orden: galería (ancho completo con dots), información + precios + botones, tabs \"Productos similares\" | \"Información\", carrusel \"Van bien juntos\" (si tiene contenido) y carrusel \"Recomendados para ti\"; no hay breadcrumb.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-005",
   "name": "Verificar que la PDP muestra sus secciones en el orden definido para App",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso declara {SKU_VALID_001} (000000000000675191-UN), que la propia data también registra como {SKU_SIN_SIMILARES}; con la cuenta de prueba la PDP recorrida hasta el final muestra la galería, el bloque de precio y botones y solo la pestaña «Información»: no tiene pestaña «Productos similares», «Van bien juntos» ni el carrusel «Recomendados para ti» (una sección sin contenido no se muestra). Con {SKU_PRODS_SIMILARES} (000000000000628239-UN, solo diagnóstico) la cuenta tampoco ve «Recomendados para ti». No se puede verificar el orden completo de secciones sin un producto con contenido en todas. Acción: declarar un SKU con similares, «Van bien juntos» y recomendaciones para la cuenta, o confirmar si «Recomendados para ti» debe mostrarse para ella.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — resultados de 000000000000675191 un",
     "file": "TC-B2C31-APP-005-android-p02-resultados-de-000000000000675191-un.png"
    },
    {
     "caption": "Android · Paso 4 — pdp del producto parte superior",
     "file": "TC-B2C31-APP-005-android-p04-pdp-del-producto-parte-superior.png"
    },
    {
     "caption": "Android · Paso 6 — pdp recorrida hasta el final",
     "file": "TC-B2C31-APP-005-android-p06-pdp-recorrida-hasta-el-final.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C31-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-31-pendientes.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario hace scroll desde el inicio hasta el final de la PDP.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "No se muestra \"Recomendados para ti\" (solo para logueado) ni queda espacio vacío, y las demás secciones mantienen su orden.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-006",
   "name": "Verificar que una sección sin contenido no se muestra y el orden del resto se mantiene",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000675191 un",
     "file": "TC-B2C31-APP-006-android-p01-resultados-de-000000000000675191-un.png"
    },
    {
     "caption": "Android · Paso 3 — pdp recorrida hasta el final",
     "file": "TC-B2C31-APP-006-android-p03-pdp-recorrida-hasta-el-final.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario hace scroll desde el inicio hasta el final de la PDP.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra la imagen principal a ancho completo con dots de posición, en alta resolución.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-007",
   "name": "Verificar que un producto con varias imágenes muestra la imagen principal con dots",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000028616-KGV tiene 2 o más imágenes",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000028616 kgv",
     "file": "TC-B2C31-APP-007-android-p01-resultados-de-000000000000028616-kgv.png"
    },
    {
     "caption": "Android · Paso 3 — galeria de la pdp",
     "file": "TC-B2C31-APP-007-android-p03-galeria-de-la-pdp.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000028616-KGV y abre su PDP.\n3. El sistema carga la PDP de 000000000000028616-KGV.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000028616-KGV = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra la imagen del producto sin dots ni controles de navegación.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-008",
   "name": "Verificar que un producto con una sola imagen no muestra controles de navegación",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000652899-UN tiene una sola imagen",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000652899 un",
     "file": "TC-B2C31-APP-008-android-p01-resultados-de-000000000000652899-un.png"
    },
    {
     "caption": "Android · Paso 3 — galeria de la pdp",
     "file": "TC-B2C31-APP-008-android-p03-galeria-de-la-pdp.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000652899-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000652899-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000652899-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La imagen se amplía con el gesto de pinch y se mantiene nítida (sin pixelado).",
   "form_factor": "app",
   "id": "TC-B2C31-APP-009",
   "name": "Verificar que tocar la imagen abre el modal y permite zoom con pinch",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige un pinch (zoom con dos dedos) y mobilewright no expone ese gesto: ni su API ni la de mobilecli lo traen. Acción: verificarlo a mano o habilitar el gesto en la automatización. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000028616-KGV tiene 2 o más imágenes",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000028616-KGV y abre su PDP.\n3. El sistema carga la PDP de 000000000000028616-KGV.\n4. El usuario toca la imagen principal.\n5. El sistema abre el modal de la galería con la imagen.\n6. El usuario hace pinch para ampliar la imagen.\n7. El sistema amplía la imagen.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000028616-KGV = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Al deslizar horizontalmente se pasa de una foto a otra dentro del modal.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-010",
   "name": "Verificar que en el modal de la galería se desliza horizontalmente entre fotos",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000028616-KGV tiene 2 o más imágenes",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000028616 kgv",
     "file": "TC-B2C31-APP-010-android-p01-resultados-de-000000000000028616-kgv.png"
    },
    {
     "caption": "Android · Paso 4 — modal de la galeria",
     "file": "TC-B2C31-APP-010-android-p04-modal-de-la-galeria.png"
    },
    {
     "caption": "Android · Paso 5 — tras deslizar",
     "file": "TC-B2C31-APP-010-android-p05-tras-deslizar.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000028616-KGV y abre su PDP.\n3. El sistema carga la PDP de 000000000000028616-KGV.\n4. El usuario toca la imagen principal.\n5. El sistema abre el modal de la galería con la imagen.\n6. El usuario desliza horizontalmente.\n7. El sistema muestra la siguiente foto del producto.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000028616-KGV = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra la imagen por defecto de Unimarc y el resto de la PDP carga normalmente.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-011",
   "name": "Verificar que un producto sin imagen válida muestra la imagen por defecto de Unimarc",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000029400-KG no tiene imagen configurada o su URL de imagen retorna error",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000029400 kg",
     "file": "TC-B2C31-APP-011-android-p01-resultados-de-000000000000029400-kg.png"
    },
    {
     "caption": "Android · Paso 3 — pdp del producto sin imagen",
     "file": "TC-B2C31-APP-011-android-p03-pdp-del-producto-sin-imagen.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000029400-KG y abre su PDP.\n3. El sistema carga la PDP de 000000000000029400-KG.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000029400-KG = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Bajo la imagen se muestran corazón, compartir, marca, nombre, formato (ej. «200g»), precios vigentes, \"Guardar en listas\" y \"Agregar\"; nombre, formato y precio coinciden con lo anotado en la PLP.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-012",
   "name": "Verificar que la primera vista muestra los datos obligatorios del producto bajo la imagen",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PLP_URL} (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno) es una URL web y la app no navega por URL, así que no hay forma de abrir esa PLP desde la fila. Acción: declarar la categoría de la app. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario navega a la PLP equivalente a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno.\n3. El sistema carga la PLP.\n4. El usuario anota nombre, formato y precio de un producto y lo toca.\n5. El sistema abre la PDP del producto.",
   "test_data": "- v1.0.1 = TBD\n- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La PDP muestra el label \"Patrocinado\".",
   "form_factor": "app",
   "id": "TC-B2C31-APP-013",
   "name": "Verificar que un producto patrocinado muestra el label \"Patrocinado\"",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {SKU_PATROCINADO} (000000000000642688-UN, Galleta Oreo) no muestra la etiqueta 'Patrocinado' en su PDP. Acción: declarar un SKU que se muestre patrocinado. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000642688-UN tiene isSponsored = true",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000642688 un",
     "file": "TC-B2C31-APP-013-android-p01-resultados-de-000000000000642688-un.png"
    },
    {
     "caption": "Android · Paso 3 — pdp",
     "file": "TC-B2C31-APP-013-android-p03-pdp.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C31-APP-013-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000642688-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000642688-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000642688-UN = 000000000000642688-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La PDP muestra \"Vendido por\" seguido del nombre del tercero.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-014",
   "name": "Verificar que un producto de marketplace muestra \"Vendido por\" y el vendedor",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {SKU_MARKETPLACE} (000000000000217756-UN, Papel higiénico Confort) carga la PDP sin precio ni 'Vendido por'; no es un producto de marketplace. Acción: declarar un SKU de marketplace con precio. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000217756-UN tiene isMarketplace con valor",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000217756 un",
     "file": "TC-B2C31-APP-014-android-p01-resultados-de-000000000000217756-un.png"
    },
    {
     "caption": "Android · Paso 3 — pdp",
     "file": "TC-B2C31-APP-014-android-p03-pdp.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C31-APP-014-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000217756-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000217756-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000217756-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestran los resultados con los productos disponibles de la marca.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-015",
   "name": "Verificar que tocar la marca lleva a los resultados filtrados por esa marca",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000675191 un",
     "file": "TC-B2C31-APP-015-android-p01-resultados-de-000000000000675191-un.png"
    },
    {
     "caption": "Android · Paso 4 — resultados de la marca super pollo",
     "file": "TC-B2C31-APP-015-android-p04-resultados-de-la-marca-super-pollo.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario toca el nombre de la marca.\n5. El sistema muestra los resultados de esa marca.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se abre el share nativo con el link de la PDP de 000000000000675191-UN.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-016",
   "name": "Verificar que tocar \"Compartir\" abre el share nativo con el link de la PDP",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el botón 'Compartir' de la PDP no tiene etiqueta ni identificador de accesibilidad y la automatización no puede ubicarlo: el botón que sigue al corazón en el árbol abre 'Iniciar sesión o registrarse' y no la hoja para compartir (captura p04). Acción: etiquetar el botón (accessibilityLabel) o verificarlo a mano. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000675191 un",
     "file": "TC-B2C31-APP-016-android-p01-resultados-de-000000000000675191-un.png"
    },
    {
     "caption": "Android · Paso 4 — hoja de compartir",
     "file": "TC-B2C31-APP-016-android-p04-hoja-de-compartir.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C31-APP-016-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario toca el ícono \"Compartir\".\n5. El sistema abre el iOS Share Sheet / Android Share Intent.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El corazón queda rojo y 000000000000675191-UN aparece en la lista de favoritos.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-017",
   "name": "Verificar que el corazón agrega el producto a favoritos del usuario logueado",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la precondición exige que 000000000000675191-UN no esté en favoritos, pero la PDP lo muestra con el corazón ya marcado (rojo) para la cuenta de prueba; quitarlo sería modificar sus favoritos sin que el caso lo autorice. Acción: dejar el producto fuera de favoritos de la cuenta o declarar otro SKU que no lo esté.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- 000000000000675191-UN no está en favoritos",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — el corazon de la pdp ya esta marcado",
     "file": "TC-B2C31-APP-017-android-p02-el-corazon-de-la-pdp-ya-esta-marcado.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario toca el corazón.\n5. El sistema pinta el corazón de rojo y agrega el producto a favoritos.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el flujo de login.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-018",
   "name": "Verificar que el corazón redirige al login al usuario invitado",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000675191 un",
     "file": "TC-B2C31-APP-018-android-p01-resultados-de-000000000000675191-un.png"
    },
    {
     "caption": "Android · Paso 4 — login",
     "file": "TC-B2C31-APP-018-android-p04-login.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario toca el corazón.\n5. El sistema redirige al flujo de login.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El precio oferta se muestra destacado en color de acento y el precio normal aparece tachado.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-019",
   "name": "Verificar que un producto en oferta muestra el precio oferta destacado y el normal tachado",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000178089-UN tiene una oferta activa",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000178089 un",
     "file": "TC-B2C31-APP-019-android-p01-resultados-de-000000000000178089-un.png"
    },
    {
     "caption": "Android · Paso 3 — precio de la pdp",
     "file": "TC-B2C31-APP-019-android-p03-precio-de-la-pdp.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000178089-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000178089-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000178089-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el precio membresía con su label, además del precio normal.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-020",
   "name": "Verificar que un producto con precio membresía muestra el precio con su label",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Android (Pixel 6, Android 14, app v1.0.1) con la cuenta con membresía: la PDP de 000000000000662457-UN muestra el precio normal ($3.890) y debajo el precio de membresía ($2.897) con su badge de diamante; el badge es un ícono sin texto.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com\n- La cuenta daunuruco+noaddress@avatar-global.com tiene membresía vigente",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — resultados de 000000000000662457 un",
     "file": "TC-B2C31-APP-020-android-p02-resultados-de-000000000000662457-un.png"
    },
    {
     "caption": "Android · Paso 4 — pdp del producto con precio membresia",
     "file": "TC-B2C31-APP-020-android-p04-pdp-del-producto-con-precio-membresia.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C31-APP-020-android.png"
    }
   ],
   "spec": "tests-app/B2C-31-pendientes.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000662457-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000662457-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000662457-UN = 000000000000662457-UN\n- daunuruco+noaddress@avatar-global.com = 10.101.010-4"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el precio promocional en formato X×$XXXX junto al precio normal.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-021",
   "name": "Verificar que un producto con promo NxPrecio muestra el precio compuesto",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso necesita un producto con promo NxPrecio y la fila no declara ningún SKU. Acción: declarar el SKU. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_PROM_NxPRECIO} tiene una promo NxPrecio activa",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca {SKU_PROM_NxPRECIO} y abre su PDP.\n3. El sistema carga la PDP de {SKU_PROM_NxPRECIO}.",
   "test_data": "- v1.0.1 = TBD\n- {SKU_PROM_NxPRECIO} = 000000000000666200-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el PPUM (precio / unit-quantity) junto al precio normal y a cada precio promocional activo.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-022",
   "name": "Verificar que un producto pesable muestra el PPUM junto a sus precios",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000037972-KG tiene precio, unit y unit-quantity cargados",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000037972 kg",
     "file": "TC-B2C31-APP-022-android-p01-resultados-de-000000000000037972-kg.png"
    },
    {
     "caption": "Android · Paso 3 — precio de la pdp",
     "file": "TC-B2C31-APP-022-android-p03-precio-de-la-pdp.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000037972-KG y abre su PDP.\n3. El sistema carga la PDP de 000000000000037972-KG.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000037972-KG = 000000000000037972-KG"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra una sola cucarda y el botón \"Agregar\" sigue disponible.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-023",
   "name": "Verificar que un producto con label muestra una sola cucarda sin bloquear la compra",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000028616-KGV tiene configurado el atributo label",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000028616 kgv",
     "file": "TC-B2C31-APP-023-android-p01-resultados-de-000000000000028616-kgv.png"
    },
    {
     "caption": "Android · Paso 3 — precio de la pdp",
     "file": "TC-B2C31-APP-023-android-p03-precio-de-la-pdp.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000028616-KGV y abre su PDP.\n3. El sistema carga la PDP de 000000000000028616-KGV.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000028616-KGV = 000000000000662457-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El contador del carro aumenta en 1, el monto total se recalcula y se muestra el stepper con 1 unidad.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-024",
   "name": "Verificar que \"Agregar\" suma el producto al carro y muestra el stepper",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso necesita el producto en el carro y un invitado sin dirección no puede agregar: 'Agregar' abre el Store Locator (APP-026 lo comprobó hoy) y la fila no declara una dirección. Acción: declarar la dirección del invitado en la fila. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000000675191-UN no está en el carro",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario anota el contador del ícono del carro y toca \"Agregar\".\n5. El sistema agrega el producto y reemplaza \"Agregar\" por el stepper de cantidad.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El stepper muestra 2 unidades y el contador y el monto del carro se actualizan.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-025",
   "name": "Verificar que el \"+\" del stepper suma una unidad al carro",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso necesita el producto en el carro y un invitado sin dirección no puede agregar: 'Agregar' abre el Store Locator (APP-026 lo comprobó hoy) y la fila no declara una dirección. Acción: declarar la dirección del invitado en la fila. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- El carro contiene 000000000000675191-UN x 1",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario toca \"+\" en el stepper.\n5. El sistema suma una unidad y actualiza el contador y el monto del carro.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se abre el Store Locator y el producto no se agrega al carro.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-026",
   "name": "Verificar que \"Agregar\" sin método de entrega abre el Store Locator",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- App recién instalada o con datos borrados, sin método de entrega seleccionado",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000675191 un",
     "file": "TC-B2C31-APP-026-android-p01-resultados-de-000000000000675191-un.png"
    },
    {
     "caption": "Android · Paso 4 — store locator",
     "file": "TC-B2C31-APP-026-android-p04-store-locator.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario toca \"Agregar\".\n5. El sistema abre el Store Locator.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "No se muestra \"Agregar\" y se muestra el tag \"Pronto disponible\".",
   "form_factor": "app",
   "id": "TC-B2C31-APP-027",
   "name": "Verificar que un producto sin stock oculta \"Agregar\" y muestra \"Pronto disponible\"",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000000029403-KG no tiene stock para el método de entrega activo",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000029403 kg",
     "file": "TC-B2C31-APP-027-android-p01-resultados-de-000000000000029403-kg.png"
    },
    {
     "caption": "Android · Paso 3 — pdp",
     "file": "TC-B2C31-APP-027-android-p03-pdp.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000029403-KG y abre su PDP.\n3. El sistema carga la PDP de 000000000000029403-KG.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000029403-KG = 000000000000029403-KG"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El \"+\" queda deshabilitado cuando la cantidad en el carro iguala el stock disponible.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-028",
   "name": "Verificar que con todo el stock en el carro el \"+\" del stepper se deshabilita",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso necesita el producto en el carro y un invitado sin dirección no puede agregar: 'Agregar' abre el Store Locator (APP-026 lo comprobó hoy) y la fila no declara una dirección. Acción: declarar la dirección del invitado en la fila. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000638426003-UN tiene pocas unidades de stock disponibles",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000638426003-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000638426003-UN.\n4. El usuario toca \"Agregar\" y luego \"+\" hasta que el stepper no permita sumar más.\n5. El sistema deshabilita el \"+\" al llegar al stock disponible.",
   "test_data": "- v1.0.1 = TBD\n- 000000000638426003-UN = 000000000638426003-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El \"+\" queda deshabilitado y se muestra el mensaje \"Usted ha agregado la cantidad máxima de productos\".",
   "form_factor": "app",
   "id": "TC-B2C31-APP-029",
   "name": "Verificar que al alcanzar el cartlimit el \"+\" se deshabilita y se muestra el mensaje de máximo",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso necesita el producto en el carro y un invitado sin dirección no puede agregar: 'Agregar' abre el Store Locator (APP-026 lo comprobó hoy) y la fila no declara una dirección. Acción: declarar la dirección del invitado en la fila. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- 000000000000666357-UN tiene cartlimit configurado en SFCC",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000666357-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000666357-UN.\n4. El usuario toca \"Agregar\" y luego \"+\" hasta alcanzar el límite de compra.\n5. El sistema deshabilita el \"+\" y muestra \"Usted ha agregado la cantidad máxima de productos\".",
   "test_data": "- v1.0.1 = TBD\n- 000000000000666357-UN = 000000000000626717-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el label \"Últimas unidades\" en la ficha del producto.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-030",
   "name": "Verificar que un producto con stock bajo el umbral muestra \"Últimas unidades\"",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso necesita el producto en el carro y un invitado sin dirección no puede agregar: 'Agregar' abre el Store Locator (APP-026 lo comprobó hoy) y la fila no declara una dirección. Acción: declarar la dirección del invitado en la fila. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- El stock visible de 000000000638426003-UN es menor o igual al umbral FOMO",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000638426003-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000638426003-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000638426003-UN = 000000000638426003-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El bloque de datos y \"Agregar\" permanece visible mientras se recorren los tabs y deja de estar fijo al llegar a \"Van bien juntos\".",
   "form_factor": "app",
   "id": "TC-B2C31-APP-031",
   "name": "Verificar que el bloque de datos y \"Agregar\" queda fijo al recorrer los tabs",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000401693004 un",
     "file": "TC-B2C31-APP-031-android-p01-resultados-de-000000000401693004-un.png"
    },
    {
     "caption": "Android · Paso 3 — al llegar a van bien juntos",
     "file": "TC-B2C31-APP-031-android-p03-al-llegar-a-van-bien-juntos.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000401693004-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000401693004-UN.\n4. El usuario hace scroll hacia abajo por los tabs hasta el carrusel \"Van bien juntos\".",
   "test_data": "- v1.0.1 = TBD\n- 000000000401693004-UN = 000000000401693004-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El tab \"Productos similares\" aparece seleccionado y muestra un carrusel de productos de la misma categoría.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-032",
   "name": "Verificar que el tab \"Productos similares\" está activo por defecto con su carrusel",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {SKU_VALID_001} (000000000000675191-UN) no tiene 'Productos similares': su PDP solo muestra el tab 'Información'. Acción: declarar un SKU con 'Productos similares'. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000675191 un",
     "file": "TC-B2C31-APP-032-android-p01-resultados-de-000000000000675191-un.png"
    },
    {
     "caption": "Android · Paso 3 — tabs de la pdp",
     "file": "TC-B2C31-APP-032-android-p03-tabs-de-la-pdp.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C31-APP-032-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario hace scroll hasta la sección de tabs.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Solo hay pills para las secciones con contenido, \"Descripción\" está activa y las pills se desplazan horizontalmente.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-033",
   "name": "Verificar que el tab Información muestra pills solo para las secciones con contenido",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000675191-UN tiene varias secciones de información, incluida \"Acerca de\"",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000675191 un",
     "file": "TC-B2C31-APP-033-android-p01-resultados-de-000000000000675191-un.png"
    },
    {
     "caption": "Android · Paso 3 — tab informacion",
     "file": "TC-B2C31-APP-033-android-p03-tab-informacion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario toca el tab \"Información\".\n5. El sistema muestra las pills de las secciones con contenido con \"Descripción\" activa.\n6. El usuario desliza las pills horizontalmente.\n7. El sistema desplaza las pills sin romper el layout.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La pantalla queda al inicio de \"Tabla nutricional\" y esa pill cambia de color como activa.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-034",
   "name": "Verificar que tocar una pill ancla el scroll a su sección y la marca como activa",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000675191-UN tiene la sección \"Tabla nutricional\"",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000675191 un",
     "file": "TC-B2C31-APP-034-android-p01-resultados-de-000000000000675191-un.png"
    },
    {
     "caption": "Android · Paso 4 — tras tocar la pill de nutricion",
     "file": "TC-B2C31-APP-034-android-p04-tras-tocar-la-pill-de-nutricion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario toca el tab \"Información\" y luego la pill \"Tabla nutricional\".\n5. El sistema desplaza el contenido al inicio de la sección \"Tabla nutricional\" y marca esa pill como activa.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Las pills permanecen fijas debajo de los tabs mientras se recorre el contenido.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-035",
   "name": "Verificar que las pills de información quedan fijas bajo los tabs al hacer scroll",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000675191-UN tiene varias secciones de información",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000675191 un",
     "file": "TC-B2C31-APP-035-android-p01-resultados-de-000000000000675191-un.png"
    },
    {
     "caption": "Android · Paso 3 — tab informacion",
     "file": "TC-B2C31-APP-035-android-p03-tab-informacion.png"
    },
    {
     "caption": "Android · Paso 4 — pills tras seguir desplazando",
     "file": "TC-B2C31-APP-035-android-p04-pills-tras-seguir-desplazando.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario toca el tab \"Información\" y hace scroll hacia abajo por el contenido.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "La sección \"Descripción\" muestra el texto del producto (y la descripción enriquecida si existe) y el SKU 000000000000675191-UN.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-036",
   "name": "Verificar que la sección Descripción muestra el texto del producto y su SKU",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000675191 un",
     "file": "TC-B2C31-APP-036-android-p01-resultados-de-000000000000675191-un.png"
    },
    {
     "caption": "Android · Paso 3 — tab informacion",
     "file": "TC-B2C31-APP-036-android-p03-tab-informacion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario toca el tab \"Información\".",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Solo se muestra la pill \"Descripción\" y no aparecen pills para secciones sin contenido (incluida \"Acerca de\").",
   "form_factor": "app",
   "id": "TC-B2C31-APP-037",
   "name": "Verificar que un producto con una sola sección muestra una sola pill",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {SKU_SOLO_DESCRIPCION} (000000000000675191-UN) tiene Descripción, Ingredientes, Estilos de alimentación y Datos de nutrición, así que no sirve para 'una sola sección'. Acción: declarar un SKU con una sola sección de información. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000675191-UN solo tiene descripción",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario toca el tab \"Información\".",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el carrusel \"Van bien juntos\" con productos complementarios, deslizable horizontalmente.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-038",
   "name": "Verificar que la PDP muestra el carrusel \"Van bien juntos\" al final",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000401693004 un",
     "file": "TC-B2C31-APP-038-android-p01-resultados-de-000000000401693004-un.png"
    },
    {
     "caption": "Android · Paso 3 — final de la pdp",
     "file": "TC-B2C31-APP-038-android-p03-final-de-la-pdp.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000401693004-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000401693004-UN.\n4. El usuario hace scroll hasta el final de la PDP.",
   "test_data": "- v1.0.1 = TBD\n- 000000000401693004-UN = 000000000401693004-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra \"Combina la promo\" junto a \"Agregar\" y al tocarlo se abre el modal con las variantes combinables.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-039",
   "name": "Verificar que \"Combina la promo\" aparece con promo combinable y abre su modal",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000666200-UN tiene una promo combinable activa (ID termina en CLP1) con variantes con stock",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000666200 un",
     "file": "TC-B2C31-APP-039-android-p01-resultados-de-000000000000666200-un.png"
    },
    {
     "caption": "Android · Paso 3 — pdp",
     "file": "TC-B2C31-APP-039-android-p03-pdp.png"
    },
    {
     "caption": "Android · Paso 5 — modal de variantes combinables",
     "file": "TC-B2C31-APP-039-android-p05-modal-de-variantes-combinables.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000666200-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000666200-UN.\n4. El usuario toca \"Combina la promo\".\n5. El sistema abre el modal de Combina la promo con las variantes combinables.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000666200-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "No se muestra el botón \"Combina la promo\".",
   "form_factor": "app",
   "id": "TC-B2C31-APP-040",
   "name": "Verificar que sin promo combinable no se muestra \"Combina la promo\"",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000675191-UN no tiene promo combinable activa",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — resultados de 000000000000675191 un",
     "file": "TC-B2C31-APP-040-android-p01-resultados-de-000000000000675191-un.png"
    },
    {
     "caption": "Android · Paso 3 — pdp",
     "file": "TC-B2C31-APP-040-android-p03-pdp.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el contenido configurado (texto, imágenes y/o video) adaptado al ancho de la pantalla, sin desbordes.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-041",
   "name": "Verificar que la sección \"Acerca de\" muestra el contenido inspiracional configurado",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {SKU_INFO_COMPLETA} (000000000000675191-UN) no tiene la sección 'Acerca de': sus secciones son Descripción, Ingredientes, Estilos de alimentación y Datos de nutrición. Acción: cargar 'Acerca de' en el SKU o declarar otro que la tenga. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- 000000000000675191-UN tiene contenido en el atributo acercaDe",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario toca el tab \"Información\" y luego la pill \"Acerca de\".\n5. El sistema muestra el contenido inspiracional del producto.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra la pantalla de error completa con código y los botones \"Reintentar\" e \"Ir a inicio\".",
   "form_factor": "app",
   "id": "TC-B2C31-APP-042",
   "name": "Verificar que un fallo al cargar el producto muestra la pantalla de error",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema muestra la imagen, \"Tuvimos un problema al cargar tu producto\", \"Estamos trabajando para solucionarlo. Intenta nuevamente en unos segundos.\", el código de error y los botones \"Reintentar\" e \"Ir a inicio\".",
   "test_data": "- v1.0.1 = TBD\n- *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Tras tocar \"Reintentar\" se ve el skeleton y luego la PDP de 000000000000675191-UN.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-043",
   "name": "Verificar que \"Reintentar\" muestra el skeleton y vuelve a cargar el producto",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema muestra la pantalla de error de la PDP.\n4. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado y toca \"Reintentar\".\n5. El sistema muestra el skeleton de la PDP y luego la PDP completa.",
   "test_data": "- v1.0.1 = TBD\n- *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El usuario queda en el Home de la App.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-044",
   "name": "Verificar que \"Ir a inicio\" de la pantalla de error lleva al Home",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema muestra la pantalla de error de la PDP.\n4. El usuario toca \"Ir a inicio\".\n5. El sistema redirige al Home de la App.",
   "test_data": "- v1.0.1 = TBD\n- *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra la pantalla 404 de producto con imagen, mensaje y botón \"Ir a la página de Inicio\".",
   "form_factor": "app",
   "id": "TC-B2C31-APP-045",
   "name": "Verificar que un deep link a un producto inexistente muestra la pantalla 404 de producto",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Deep link",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre el deep link {PDP_DEEPLINK_INEXISTENTE} desde el dispositivo.\n2. El sistema abre la App y muestra la pantalla 404 con una imagen, \"El producto que buscas no existe o ya no está disponible\" y el botón \"Ir a la página de Inicio\".",
   "test_data": "- v1.0.1 = TBD\n- {PDP_DEEPLINK_INEXISTENTE} = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El usuario queda en el Home de la App.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-046",
   "name": "Verificar que el botón de la pantalla 404 lleva al Home",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Deep link",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre el deep link {PDP_DEEPLINK_INEXISTENTE} desde el dispositivo.\n2. El sistema abre la App y muestra la pantalla 404 de producto.\n3. El usuario toca \"Ir a la página de Inicio\".\n4. El sistema redirige al Home de la App.",
   "test_data": "- v1.0.1 = TBD\n- {PDP_DEEPLINK_INEXISTENTE} = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Después de 10 segundos el usuario sigue en la pantalla 404 (no hay redirección automática al Home).",
   "form_factor": "app",
   "id": "TC-B2C31-APP-047",
   "name": "Verificar que la pantalla 404 de producto no redirige al Home automáticamente",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Deep link",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre el deep link {PDP_DEEPLINK_INEXISTENTE} desde el dispositivo.\n2. El sistema abre la App y muestra la pantalla 404 de producto.\n3. El usuario espera 10 segundos sin interactuar.\n4. El sistema mantiene la pantalla 404.",
   "test_data": "- v1.0.1 = TBD\n- {PDP_DEEPLINK_INEXISTENTE} = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el modal \"Agregar como lista\" desplegado desde la parte inferior sobre la PDP.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-048",
   "name": "Verificar que \"Guardar en mis listas\" abre el modal \"Agregar como lista\" desde abajo",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Android (Pixel 6, Android 14, app v1.0.1): «Guardar en listas» abre desde abajo, sobre la PDP, el modal «Agregar como lista» con «Crear nueva lista» y la lista «Recurrentes».",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — resultados de 000000000000675191 un",
     "file": "TC-B2C31-APP-048-android-p02-resultados-de-000000000000675191-un.png"
    },
    {
     "caption": "Android · Paso 4 — modal tras tocar guardar en listas",
     "file": "TC-B2C31-APP-048-android-p04-modal-tras-tocar-guardar-en-listas.png"
    }
   ],
   "spec": "tests-app/B2C-31-pendientes.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000675191-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000675191-UN.\n4. El usuario toca \"Guardar en listas\".\n5. El sistema despliega desde abajo el modal \"Agregar como lista\".",
   "test_data": "- v1.0.1 = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestran como máximo 3 precios y el tercero corresponde al precio Membresía.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-049",
   "name": "Verificar que con Membresía, Unipay y BancoEstado a la vez el 3er precio es el de Membresía",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: la PDP de {SKU_TRES_PRECIOS} (000000000000666200-UN) con la cuenta con membresía muestra solo tres precios —promoción «Lleva 2 por $12.490», «Lleva 2 por $10.866» con badge de membresía y $7.690 c/u—, sin precios Unipay ni Banco Estado vigentes, por lo que no se cumple la precondición (Membresía, Unipay y Banco Estado a la vez) y no se puede verificar cuál es el tercer precio. Acción: dejar vigentes los tres precios en el SKU o declarar otro que los tenga.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com\n- PriceDisplayPriority = MEMBERSHIP_FIRST (valor por defecto)\n- 000000000000666200-UN tiene precio Membresía, Unipay y BancoEstado vigentes a la vez",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — resultados de 000000000000666200 un",
     "file": "TC-B2C31-APP-049-android-p02-resultados-de-000000000000666200-un.png"
    },
    {
     "caption": "Android · Paso 4 — pdp con los precios",
     "file": "TC-B2C31-APP-049-android-p04-pdp-con-los-precios.png"
    }
   ],
   "spec": "tests-app/B2C-31-pendientes.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca 000000000000666200-UN y abre su PDP.\n3. El sistema carga la PDP de 000000000000666200-UN.",
   "test_data": "- v1.0.1 = TBD\n- 000000000000666200-UN = TBD\n- daunuruco+noaddress@avatar-global.com = 10.101.010-4"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "No se muestra \"Combina la promo\" y las unidades se agregan desde el stepper de la PDP.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-050",
   "name": "Verificar que un producto con \"Completa la promo\" no muestra el botón \"Combina la promo\"",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso necesita un producto con 'Completa la promo' y la fila no declara ningún SKU. Acción: declarar el SKU. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_PROM_NxM} tiene una promo NxM del mismo SKU (Completa la promo)",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El usuario busca {SKU_PROM_NxM} y abre su PDP.\n3. El sistema carga la PDP de {SKU_PROM_NxM}.\n4. El usuario toca \"Agregar\" y luego \"+\" en el stepper.\n5. El sistema actualiza la cantidad en el stepper de la PDP.",
   "test_data": "- v1.0.1 = TBD\n- {SKU_PROM_NxM} = 000000000641229002-UN"
  }
 ]
}
-->
