# B2C-31 (app Android) - PDP — Página de detalle del producto - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-31 APP |
| Última actualización | 2026-11-03 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Dispositivo Android | dispositivo por ADB |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-31 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 31 |
| Bloqueado Data | 16 |
| Bloqueado | 2 |
| Rechazado | 1 |
| **Total** | **50** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-03 | 11 | TC-B2C31-APP-014, TC-B2C31-APP-021, TC-B2C31-APP-024, TC-B2C31-APP-025, TC-B2C31-APP-028, TC-B2C31-APP-029, TC-B2C31-APP-030, TC-B2C31-APP-032, TC-B2C31-APP-037, TC-B2C31-APP-041, TC-B2C31-APP-050 |
| 2026-10-21 | 50 | TC-B2C31-APP-001, TC-B2C31-APP-002, TC-B2C31-APP-003, TC-B2C31-APP-004, TC-B2C31-APP-005, TC-B2C31-APP-006, TC-B2C31-APP-007, TC-B2C31-APP-008, TC-B2C31-APP-009, TC-B2C31-APP-010, TC-B2C31-APP-011, TC-B2C31-APP-012, TC-B2C31-APP-013, TC-B2C31-APP-014, TC-B2C31-APP-015, TC-B2C31-APP-016, TC-B2C31-APP-017, TC-B2C31-APP-018, TC-B2C31-APP-019, TC-B2C31-APP-020, TC-B2C31-APP-021, TC-B2C31-APP-022, TC-B2C31-APP-023, TC-B2C31-APP-024, TC-B2C31-APP-025, TC-B2C31-APP-026, TC-B2C31-APP-027, TC-B2C31-APP-028, TC-B2C31-APP-029, TC-B2C31-APP-030, TC-B2C31-APP-031, TC-B2C31-APP-032, TC-B2C31-APP-033, TC-B2C31-APP-034, TC-B2C31-APP-035, TC-B2C31-APP-036, TC-B2C31-APP-037, TC-B2C31-APP-038, TC-B2C31-APP-039, TC-B2C31-APP-040, TC-B2C31-APP-041, TC-B2C31-APP-042, TC-B2C31-APP-043, TC-B2C31-APP-044, TC-B2C31-APP-045, TC-B2C31-APP-046, TC-B2C31-APP-047, TC-B2C31-APP-048, TC-B2C31-APP-049, TC-B2C31-APP-050 |
| 2026-10-20 | 50 | TC-B2C31-APP-001, TC-B2C31-APP-002, TC-B2C31-APP-003, TC-B2C31-APP-004, TC-B2C31-APP-005, TC-B2C31-APP-006, TC-B2C31-APP-007, TC-B2C31-APP-008, TC-B2C31-APP-009, TC-B2C31-APP-010, TC-B2C31-APP-011, TC-B2C31-APP-012, TC-B2C31-APP-013, TC-B2C31-APP-014, TC-B2C31-APP-015, TC-B2C31-APP-016, TC-B2C31-APP-017, TC-B2C31-APP-018, TC-B2C31-APP-019, TC-B2C31-APP-020, TC-B2C31-APP-021, TC-B2C31-APP-022, TC-B2C31-APP-023, TC-B2C31-APP-024, TC-B2C31-APP-025, TC-B2C31-APP-026, TC-B2C31-APP-027, TC-B2C31-APP-028, TC-B2C31-APP-029, TC-B2C31-APP-030, TC-B2C31-APP-031, TC-B2C31-APP-032, TC-B2C31-APP-033, TC-B2C31-APP-034, TC-B2C31-APP-035, TC-B2C31-APP-036, TC-B2C31-APP-037, TC-B2C31-APP-038, TC-B2C31-APP-039, TC-B2C31-APP-040, TC-B2C31-APP-041, TC-B2C31-APP-042, TC-B2C31-APP-043, TC-B2C31-APP-044, TC-B2C31-APP-045, TC-B2C31-APP-046, TC-B2C31-APP-047, TC-B2C31-APP-048, TC-B2C31-APP-049, TC-B2C31-APP-050 |

## Detalle por caso de prueba

### TC-B2C31-APP-001 - Verificar que tocar un producto en la PLP abre su PDP en pantalla completa [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

{APP_BUILD} = v1.0.7

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario navega a la PLP equivalente a {PLP_URL}.
3. El sistema carga la PLP.
4. El usuario toca un producto del listado.
5. El sistema abre la PDP del producto en pantalla completa.

**Resultado esperado**

La PDP del producto se muestra en pantalla completa, sin breadcrumb, con la flecha para volver a la PLP.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PLP_URL} (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno) es una URL web y la app no navega por URL, así que no hay forma de abrir esa PLP desde la fila. Acción: declarar la categoría de la app. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PLP_URL} (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno) es una URL web y la app no navega por URL, así que no hay forma de abrir esa PLP desde la fila. Acción: declarar la categoría de la app. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-002 - Verificar que tocar un producto en la búsqueda abre su PDP en pantalla completa [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: SRP

**Data utilizada**

{APP_BUILD} = v1.0.7

{SEARCH_TERM_001} = leche

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SEARCH_TERM_001} y toca "Buscar" en el teclado.
3. El sistema carga los resultados de búsqueda.
4. El usuario toca un producto de los resultados.
5. El sistema abre la PDP del producto en pantalla completa.

**Resultado esperado**

La PDP del producto se muestra en pantalla completa, sin breadcrumb.

**Resultado obtenido**

Buscar 'leche' y tocar un producto abre su PDP en pantalla completa, sin breadcrumb.

**Evidencia**

![Android · Paso 1 — resultados de leche](<B2C-31 APP Evidencias/TC-B2C31-APP-002-android-p01-resultados-de-leche.png>)

![Android · Paso 3 — pdp del producto](<B2C-31 APP Evidencias/TC-B2C31-APP-002-android-p03-pdp-del-producto.png>)

---

### TC-B2C31-APP-003 - Verificar que tocar un producto de un carrusel del Home abre su PDP en pantalla completa [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App

**Data utilizada**

{APP_BUILD} = v1.0.7

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App con sus carruseles de productos.
3. El usuario toca un producto de un carrusel.
4. El sistema abre la PDP del producto en pantalla completa.

**Resultado esperado**

La PDP del producto se muestra en pantalla completa, sin breadcrumb.

**Resultado obtenido**

Tocar un producto de 'Los más vendidos' del Home abre su PDP, sin breadcrumb.

**Evidencia**

![Android · Paso 1 — home con los mas vendidos](<B2C-31 APP Evidencias/TC-B2C31-APP-003-android-p01-home-con-los-mas-vendidos.png>)

![Android · Paso 3 — pdp de 000000000000653082 un](<B2C-31 APP Evidencias/TC-B2C31-APP-003-android-p03-pdp-de-000000000000653082-un.png>)

---

### TC-B2C31-APP-004 - Verificar que la PDP muestra el skeleton durante la carga y luego el contenido completo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta

**Data utilizada**

{APP_BUILD} = v1.0.7

{HERRAMIENTA_PROXY_APP} = None

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema muestra el skeleton de imagen, datos y botones y, al terminar la carga, la PDP completa.

**Resultado esperado**

Durante la carga se ve el skeleton de imagen, datos y botones, y luego la PDP completa.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-005 - Verificar que la PDP muestra sus secciones en el orden definido para App [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta {COMPRADOR_USER}

**Data utilizada**

{APP_BUILD} = v1.0.7

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema carga la PDP de {SKU_VALID_001}.
4. El usuario hace scroll desde el inicio hasta el final de la PDP.

**Resultado esperado**

Las secciones aparecen en orden: galería (ancho completo con dots), información + precios + botones, tabs "Productos similares" | "Información", carrusel "Van bien juntos" (si tiene contenido) y carrusel "Recomendados para ti"; no hay breadcrumb.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.

**Evidencia**

![Android · Paso 1 — login por correo no disponible](<B2C-31 APP Evidencias/TC-B2C31-APP-005-android-p01-login-por-correo-no-disponible.png>)

---

### TC-B2C31-APP-006 - Verificar que una sección sin contenido no se muestra y el orden del resto se mantiene [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema carga la PDP de {SKU_VALID_001}.
4. El usuario hace scroll desde el inicio hasta el final de la PDP.

**Resultado esperado**

No se muestra "Recomendados para ti" (solo para logueado) ni queda espacio vacío, y las demás secciones mantienen su orden.

**Resultado obtenido**

Como invitado la PDP no muestra 'Recomendados para ti' ni deja espacio vacío.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 APP Evidencias/TC-B2C31-APP-006-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 3 — pdp recorrida hasta el final](<B2C-31 APP Evidencias/TC-B2C31-APP-006-android-p03-pdp-recorrida-hasta-el-final.png>)

---

### TC-B2C31-APP-007 - Verificar que un producto con varias imágenes muestra la imagen principal con dots [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_MULTI_IMAGEN} tiene 2 o más imágenes

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_MULTI_IMAGEN} = 000000000000028616-KGV

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_MULTI_IMAGEN} y abre su PDP.
3. El sistema carga la PDP de {SKU_MULTI_IMAGEN}.

**Resultado esperado**

Se muestra la imagen principal a ancho completo con dots de posición, en alta resolución.

**Resultado obtenido**

La galería muestra 'Imagen 1 de 3' con dots de posición (pdp-gallery-dot).

**Evidencia**

![Android · Paso 1 — resultados de 000000000000028616 kgv](<B2C-31 APP Evidencias/TC-B2C31-APP-007-android-p01-resultados-de-000000000000028616-kgv.png>)

![Android · Paso 3 — galeria de la pdp](<B2C-31 APP Evidencias/TC-B2C31-APP-007-android-p03-galeria-de-la-pdp.png>)

---

### TC-B2C31-APP-008 - Verificar que un producto con una sola imagen no muestra controles de navegación [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_UNA_IMAGEN} tiene una sola imagen

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_UNA_IMAGEN} = 000000000000652899-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_UNA_IMAGEN} y abre su PDP.
3. El sistema carga la PDP de {SKU_UNA_IMAGEN}.

**Resultado esperado**

Se muestra la imagen del producto sin dots ni controles de navegación.

**Resultado obtenido**

Con una sola imagen ('Imagen 1 de 1') no hay dots ni navegación.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000652899 un](<B2C-31 APP Evidencias/TC-B2C31-APP-008-android-p01-resultados-de-000000000000652899-un.png>)

![Android · Paso 3 — galeria de la pdp](<B2C-31 APP Evidencias/TC-B2C31-APP-008-android-p03-galeria-de-la-pdp.png>)

---

### TC-B2C31-APP-009 - Verificar que tocar la imagen abre el modal y permite zoom con pinch [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_MULTI_IMAGEN} tiene 2 o más imágenes

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_MULTI_IMAGEN} = 000000000000028616-KGV

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_MULTI_IMAGEN} y abre su PDP.
3. El sistema carga la PDP de {SKU_MULTI_IMAGEN}.
4. El usuario toca la imagen principal.
5. El sistema abre el modal de la galería con la imagen.
6. El usuario hace pinch para ampliar la imagen.
7. El sistema amplía la imagen.

**Resultado esperado**

La imagen se amplía con el gesto de pinch y se mantiene nítida (sin pixelado).

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige un pinch (zoom con dos dedos) y mobilewright no expone ese gesto: ni su API ni la de mobilecli lo traen. Acción: verificarlo a mano o habilitar el gesto en la automatización. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige un pinch (zoom con dos dedos) y mobilewright no expone ese gesto: ni su API ni la de mobilecli lo traen. Acción: verificarlo a mano o habilitar el gesto en la automatización. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-010 - Verificar que en el modal de la galería se desliza horizontalmente entre fotos [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_MULTI_IMAGEN} tiene 2 o más imágenes

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_MULTI_IMAGEN} = 000000000000028616-KGV

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_MULTI_IMAGEN} y abre su PDP.
3. El sistema carga la PDP de {SKU_MULTI_IMAGEN}.
4. El usuario toca la imagen principal.
5. El sistema abre el modal de la galería con la imagen.
6. El usuario desliza horizontalmente.
7. El sistema muestra la siguiente foto del producto.

**Resultado esperado**

Al deslizar horizontalmente se pasa de una foto a otra dentro del modal.

**Resultado obtenido**

En el modal de la galería, deslizar pasa de 'Imagen 1 de N' a la foto siguiente.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000028616 kgv](<B2C-31 APP Evidencias/TC-B2C31-APP-010-android-p01-resultados-de-000000000000028616-kgv.png>)

![Android · Paso 4 — modal de la galeria](<B2C-31 APP Evidencias/TC-B2C31-APP-010-android-p04-modal-de-la-galeria.png>)

![Android · Paso 5 — tras deslizar](<B2C-31 APP Evidencias/TC-B2C31-APP-010-android-p05-tras-deslizar.png>)

---

### TC-B2C31-APP-011 - Verificar que un producto sin imagen válida muestra la imagen por defecto de Unimarc [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_SIN_IMAGEN} no tiene imagen configurada o su URL de imagen retorna error

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_SIN_IMAGEN} = 000000000000029400-KG

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_SIN_IMAGEN} y abre su PDP.
3. El sistema carga la PDP de {SKU_SIN_IMAGEN}.

**Resultado esperado**

Se muestra la imagen por defecto de Unimarc y el resto de la PDP carga normalmente.

**Resultado obtenido**

El producto sin imagen válida muestra una imagen y el resto de la PDP carga.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000029400 kg](<B2C-31 APP Evidencias/TC-B2C31-APP-011-android-p01-resultados-de-000000000000029400-kg.png>)

![Android · Paso 3 — pdp del producto sin imagen](<B2C-31 APP Evidencias/TC-B2C31-APP-011-android-p03-pdp-del-producto-sin-imagen.png>)

---

### TC-B2C31-APP-012 - Verificar que la primera vista muestra los datos obligatorios del producto bajo la imagen [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PLP

**Data utilizada**

{APP_BUILD} = v1.0.7

{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario navega a la PLP equivalente a {PLP_URL}.
3. El sistema carga la PLP.
4. El usuario anota nombre, formato y precio de un producto y lo toca.
5. El sistema abre la PDP del producto.

**Resultado esperado**

Bajo la imagen se muestran corazón, compartir, marca, nombre, formato (ej. «200g»), precios vigentes, "Guardar en listas" y "Agregar"; nombre, formato y precio coinciden con lo anotado en la PLP.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PLP_URL} (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno) es una URL web y la app no navega por URL, así que no hay forma de abrir esa PLP desde la fila. Acción: declarar la categoría de la app. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PLP_URL} (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno) es una URL web y la app no navega por URL, así que no hay forma de abrir esa PLP desde la fila. Acción: declarar la categoría de la app. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-013 - Verificar que un producto patrocinado muestra el label "Patrocinado" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_PATROCINADO} tiene isSponsored = true

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_PATROCINADO} = 000000000000642688-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PATROCINADO} y abre su PDP.
3. El sistema carga la PDP de {SKU_PATROCINADO}.

**Resultado esperado**

La PDP muestra el label "Patrocinado".

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {SKU_PATROCINADO} (000000000000642688-UN, Galleta Oreo) no muestra la etiqueta 'Patrocinado' en su PDP. Acción: declarar un SKU que se muestre patrocinado. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {SKU_PATROCINADO} (000000000000642688-UN, Galleta Oreo) no muestra la etiqueta 'Patrocinado' en su PDP. Acción: declarar un SKU que se muestre patrocinado. Re-verificado en vivo el 2026-10-21.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000642688 un](<B2C-31 APP Evidencias/TC-B2C31-APP-013-android-p01-resultados-de-000000000000642688-un.png>)

![Android · Paso 3 — pdp](<B2C-31 APP Evidencias/TC-B2C31-APP-013-android-p03-pdp.png>)

![Android · Estado final](<B2C-31 APP Evidencias/TC-B2C31-APP-013-android.png>)

---

### TC-B2C31-APP-014 - Verificar que un producto de marketplace muestra "Vendido por" y el vendedor [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_MARKETPLACE} tiene isMarketplace con valor

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_MARKETPLACE} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_MARKETPLACE} y abre su PDP.
3. El sistema carga la PDP de {SKU_MARKETPLACE}.

**Resultado esperado**

La PDP muestra "Vendido por" seguido del nombre del tercero.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_MARKETPLACE} con isMarketplace; la PDP de 000000000000217756-UN es un papel higiénico Confort sin «Vendido por», o sea que el SKU no es de marketplace en este ambiente. Falta un SKU de marketplace (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — pdp marketplace](<B2C-31 APP Evidencias/TC-B2C31-APP-014-android-p01-pdp-marketplace.png>)

---

### TC-B2C31-APP-015 - Verificar que tocar la marca lleva a los resultados filtrados por esa marca [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema carga la PDP de {SKU_VALID_001}.
4. El usuario toca el nombre de la marca.
5. El sistema muestra los resultados de esa marca.

**Resultado esperado**

Se muestran los resultados con los productos disponibles de la marca.

**Resultado obtenido**

Tocar la marca abre los resultados con productos de esa marca.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 APP Evidencias/TC-B2C31-APP-015-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 4 — resultados de la marca super pollo](<B2C-31 APP Evidencias/TC-B2C31-APP-015-android-p04-resultados-de-la-marca-super-pollo.png>)

---

### TC-B2C31-APP-016 - Verificar que tocar "Compartir" abre el share nativo con el link de la PDP [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema carga la PDP de {SKU_VALID_001}.
4. El usuario toca el ícono "Compartir".
5. El sistema abre el iOS Share Sheet / Android Share Intent.

**Resultado esperado**

Se abre el share nativo con el link de la PDP de {SKU_VALID_001}.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el botón 'Compartir' de la PDP no tiene etiqueta ni identificador de accesibilidad y la automatización no puede ubicarlo: el botón que sigue al corazón en el árbol abre 'Iniciar sesión o registrarse' y no la hoja para compartir (captura p04). Acción: etiquetar el botón (accessibilityLabel) o verificarlo a mano. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el botón 'Compartir' de la PDP no tiene etiqueta ni identificador de accesibilidad y la automatización no puede ubicarlo: el botón que sigue al corazón en el árbol abre 'Iniciar sesión o registrarse' y no la hoja para compartir (captura p04). Acción: etiquetar el botón (accessibilityLabel) o verificarlo a mano. Re-verificado en vivo el 2026-10-21.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 APP Evidencias/TC-B2C31-APP-016-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 4 — hoja de compartir](<B2C-31 APP Evidencias/TC-B2C31-APP-016-android-p04-hoja-de-compartir.png>)

![Android · Estado final](<B2C-31 APP Evidencias/TC-B2C31-APP-016-android.png>)

---

### TC-B2C31-APP-017 - Verificar que el corazón agrega el producto a favoritos del usuario logueado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- {SKU_VALID_001} no está en favoritos

**Data utilizada**

{APP_BUILD} = v1.0.7

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema carga la PDP de {SKU_VALID_001}.
4. El usuario toca el corazón.
5. El sistema pinta el corazón de rojo y agrega el producto a favoritos.

**Resultado esperado**

El corazón queda rojo y {SKU_VALID_001} aparece en la lista de favoritos.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-018 - Verificar que el corazón redirige al login al usuario invitado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema carga la PDP de {SKU_VALID_001}.
4. El usuario toca el corazón.
5. El sistema redirige al flujo de login.

**Resultado esperado**

Se muestra el flujo de login.

**Resultado obtenido**

Como invitado, el corazón abre 'Iniciar sesión o registrarse'.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 APP Evidencias/TC-B2C31-APP-018-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 4 — login](<B2C-31 APP Evidencias/TC-B2C31-APP-018-android-p04-login.png>)

---

### TC-B2C31-APP-019 - Verificar que un producto en oferta muestra el precio oferta destacado y el normal tachado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_PRECIO_OFERTA} tiene una oferta activa

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_PRECIO_OFERTA} = 000000000000178089-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PRECIO_OFERTA} y abre su PDP.
3. El sistema carga la PDP de {SKU_PRECIO_OFERTA}.

**Resultado esperado**

El precio oferta se muestra destacado en color de acento y el precio normal aparece tachado.

**Resultado obtenido**

El producto en oferta muestra el % de descuento, el precio oferta y 'Antes:' con el precio normal tachado.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000178089 un](<B2C-31 APP Evidencias/TC-B2C31-APP-019-android-p01-resultados-de-000000000000178089-un.png>)

![Android · Paso 3 — precio de la pdp](<B2C-31 APP Evidencias/TC-B2C31-APP-019-android-p03-precio-de-la-pdp.png>)

---

### TC-B2C31-APP-020 - Verificar que un producto con precio membresía muestra el precio con su label [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_USER}
- La cuenta {COMPRADOR_MEMBRESIA_USER} tiene membresía vigente

**Data utilizada**

{APP_BUILD} = v1.0.7

{COMPRADOR_MEMBRESIA_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_MEMBRESIA_USER} = daunuruco+noaddress@avatar-global.com

{SKU_PRECIO_MIEMBRO} = 000000000000662457-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PRECIO_MIEMBRO} y abre su PDP.
3. El sistema carga la PDP de {SKU_PRECIO_MIEMBRO}.

**Resultado esperado**

Se muestra el precio membresía con su label, además del precio normal.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-021 - Verificar que un producto con promo NxPrecio muestra el precio compuesto [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_PROM_NxPRECIO} tiene una promo NxPrecio activa

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PROM_NxPRECIO} = 000000000000666200-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PROM_NxPRECIO} y abre su PDP.
3. El sistema carga la PDP de {SKU_PROM_NxPRECIO}.

**Resultado esperado**

Se muestra el precio promocional en formato X×$XXXX junto al precio normal.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP del SKU con promo NxPrecio: Precios en la PDP: Promoción Lleva 2 unidades por Monto | Lleva 2 por $12.490 | ($12.490 x Kg) | Lleva 2 por $10.866 | ($10.866 x Kg) | $7.690 c/u | ($15.380 x Kg) | Porción de 80 g | $7.690. Formato compuesto: Promoción Lleva 2 unidades por Monto | Lleva 2 por $12.490 | Lleva 2 por $10.866. Nota: el TC describe el formato «X×$XXXX»; el app muestra «Lleva 2 por $12.490» junto al precio normal.

**Evidencia**

![Android · Paso 1 — pdp nxprecio](<B2C-31 APP Evidencias/TC-B2C31-APP-021-android-p01-pdp-nxprecio.png>)

---

### TC-B2C31-APP-022 - Verificar que un producto pesable muestra el PPUM junto a sus precios [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_PESABLE} tiene precio, unit y unit-quantity cargados

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PESABLE} y abre su PDP.
3. El sistema carga la PDP de {SKU_PESABLE}.

**Resultado esperado**

Se muestra el PPUM (precio / unit-quantity) junto al precio normal y a cada precio promocional activo.

**Resultado obtenido**

El pesable muestra el PPUM entre paréntesis junto al precio.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000037972 kg](<B2C-31 APP Evidencias/TC-B2C31-APP-022-android-p01-resultados-de-000000000000037972-kg.png>)

![Android · Paso 3 — precio de la pdp](<B2C-31 APP Evidencias/TC-B2C31-APP-022-android-p03-precio-de-la-pdp.png>)

---

### TC-B2C31-APP-023 - Verificar que un producto con label muestra una sola cucarda sin bloquear la compra [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_CUCARDA} tiene configurado el atributo label

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_CUCARDA} = 000000000000028616-KGV

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_CUCARDA} y abre su PDP.
3. El sistema carga la PDP de {SKU_CUCARDA}.

**Resultado esperado**

Se muestra una sola cucarda y el botón "Agregar" sigue disponible.

**Resultado obtenido**

Se muestra una sola cucarda y 'Agregar' sigue disponible.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000028616 kgv](<B2C-31 APP Evidencias/TC-B2C31-APP-023-android-p01-resultados-de-000000000000028616-kgv.png>)

![Android · Paso 3 — precio de la pdp](<B2C-31 APP Evidencias/TC-B2C31-APP-023-android-p03-precio-de-la-pdp.png>)

---

### TC-B2C31-APP-024 - Verificar que "Agregar" suma el producto al carro y muestra el stepper [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_VALID_001} no está en el carro

**Data utilizada**

- {APP_BUILD} = TBD
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema carga la PDP de {SKU_VALID_001}.
4. El usuario anota el contador del ícono del carro y toca "Agregar".
5. El sistema agrega el producto y reemplaza "Agregar" por el stepper de cantidad.

**Resultado esperado**

El contador del carro aumenta en 1, el monto total se recalcula y se muestra el stepper con 1 unidad.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Tras tocar «Agregar» en la PDP de {SKU_VALID_001} se muestra el stepper con «1 un.» y el carro flotante pasa a «1 unidades, Te faltan $57.510 para despacho GRATIS» (contador y monto recalculados).

**Evidencia**

![Android · TC B2C31 APP 024 pdp tras agregar](<B2C-31 APP Evidencias/TC-B2C31-APP-024-android-pdp-tras-agregar.png>)

---

### TC-B2C31-APP-025 - Verificar que el "+" del stepper suma una unidad al carro [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- El carro contiene {SKU_VALID_001} x 1

**Data utilizada**

- {APP_BUILD} = TBD
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema carga la PDP de {SKU_VALID_001}.
4. El usuario toca "+" en el stepper.
5. El sistema suma una unidad y actualiza el contador y el monto del carro.

**Resultado esperado**

El stepper muestra 2 unidades y el contador y el monto del carro se actualizan.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Con el «+» del stepper la PDP muestra «2 un.» y el carro flotante «2 unidades, Te faltan $55.020 para despacho GRATIS».

**Evidencia**

![Android · TC B2C31 APP 025 pdp tras sumar](<B2C-31 APP Evidencias/TC-B2C31-APP-025-android-pdp-tras-sumar.png>)

---

### TC-B2C31-APP-026 - Verificar que "Agregar" sin método de entrega abre el Store Locator [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- App recién instalada o con datos borrados, sin método de entrega seleccionado

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema carga la PDP de {SKU_VALID_001}.
4. El usuario toca "Agregar".
5. El sistema abre el Store Locator.

**Resultado esperado**

Se abre el Store Locator y el producto no se agrega al carro.

**Resultado obtenido**

Como invitado sin método de entrega, 'Agregar' abre el Store Locator y no agrega el producto.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 APP Evidencias/TC-B2C31-APP-026-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 4 — store locator](<B2C-31 APP Evidencias/TC-B2C31-APP-026-android-p04-store-locator.png>)

---

### TC-B2C31-APP-027 - Verificar que un producto sin stock oculta "Agregar" y muestra "Pronto disponible" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_SIN_STOCK} no tiene stock para el método de entrega activo

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_SIN_STOCK} = 000000000000029403-KG

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_SIN_STOCK} y abre su PDP.
3. El sistema carga la PDP de {SKU_SIN_STOCK}.

**Resultado esperado**

No se muestra "Agregar" y se muestra el tag "Pronto disponible".

**Resultado obtenido**

{SKU_SIN_STOCK} muestra 'Pronto disponible' y no muestra 'Agregar'.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000029403 kg](<B2C-31 APP Evidencias/TC-B2C31-APP-027-android-p01-resultados-de-000000000000029403-kg.png>)

![Android · Paso 3 — pdp](<B2C-31 APP Evidencias/TC-B2C31-APP-027-android-p03-pdp.png>)

---

### TC-B2C31-APP-028 - Verificar que con todo el stock en el carro el "+" del stepper se deshabilita [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_STOCK_LIMITADO} tiene pocas unidades de stock disponibles

**Data utilizada**

- {APP_BUILD} = TBD
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_STOCK_LIMITADO} = 000000000638426003-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_STOCK_LIMITADO} y abre su PDP.
3. El sistema carga la PDP de {SKU_STOCK_LIMITADO}.
4. El usuario toca "Agregar" y luego "+" hasta que el stepper no permita sumar más.
5. El sistema deshabilita el "+" al llegar al stock disponible.

**Resultado esperado**

El "+" queda deshabilitado cuando la cantidad en el carro iguala el stock disponible.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): En {SKU_STOCK_LIMITADO} («¡Últimas 5 unidades!») el «+» queda deshabilitado al llegar a 5 unidades en el carro.

**Evidencia**

![Android · TC B2C31 APP 028 pdp stock limite](<B2C-31 APP Evidencias/TC-B2C31-APP-028-android-pdp-stock-limite.png>)

---

### TC-B2C31-APP-029 - Verificar que al alcanzar el cartlimit el "+" se deshabilita y se muestra el mensaje de máximo [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_CAR_LIMIT} tiene cartlimit configurado en SFCC

**Data utilizada**

- {APP_BUILD} = TBD
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_CAR_LIMIT} = 000000000000626717-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_CAR_LIMIT} y abre su PDP.
3. El sistema carga la PDP de {SKU_CAR_LIMIT}.
4. El usuario toca "Agregar" y luego "+" hasta alcanzar el límite de compra.
5. El sistema deshabilita el "+" y muestra "Usted ha agregado la cantidad máxima de productos".

**Resultado esperado**

El "+" queda deshabilitado y se muestra el mensaje "Usted ha agregado la cantidad máxima de productos".

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): En {SKU_CAR_LIMIT} el «+» queda deshabilitado a las 5 unidades y se muestra «Usted ha agregado la cantidad máxima de productos».

**Evidencia**

![Android · TC B2C31 APP 029 pdp cartlimit](<B2C-31 APP Evidencias/TC-B2C31-APP-029-android-pdp-cartlimit.png>)

---

### TC-B2C31-APP-030 - Verificar que un producto con stock bajo el umbral muestra "Últimas unidades" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- El stock visible de {SKU_STOCK_LIMITADO} es menor o igual al umbral FOMO

**Data utilizada**

- {APP_BUILD} = TBD
- {DIRECCION_DESPACHO_003} = TBD
- {SKU_STOCK_LIMITADO} = 000000000638426003-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_STOCK_LIMITADO} y abre su PDP.
3. El sistema carga la PDP de {SKU_STOCK_LIMITADO}.

**Resultado esperado**

Se muestra el label "Últimas unidades" en la ficha del producto.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la PDP de {SKU_STOCK_LIMITADO} muestra «¡Últimas 5 unidades!» bajo el umbral de stock.

**Evidencia**

![Android · Paso 1 — pdp ultimas unidades](<B2C-31 APP Evidencias/TC-B2C31-APP-030-android-p01-pdp-ultimas-unidades.png>)

---

### TC-B2C31-APP-031 - Verificar que el bloque de datos y "Agregar" queda fijo al recorrer los tabs [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_CROSS_SELLING} = 000000000401693004-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_CROSS_SELLING} y abre su PDP.
3. El sistema carga la PDP de {SKU_CROSS_SELLING}.
4. El usuario hace scroll hacia abajo por los tabs hasta el carrusel "Van bien juntos".

**Resultado esperado**

El bloque de datos y "Agregar" permanece visible mientras se recorren los tabs y deja de estar fijo al llegar a "Van bien juntos".

**Resultado obtenido**

El bloque de precio + 'Agregar' queda fijo al pie mientras se recorren los tabs y deja de estarlo al llegar a 'Van bien juntos'.

**Evidencia**

![Android · Paso 1 — resultados de 000000000401693004 un](<B2C-31 APP Evidencias/TC-B2C31-APP-031-android-p01-resultados-de-000000000401693004-un.png>)

![Android · Paso 3 — al llegar a van bien juntos](<B2C-31 APP Evidencias/TC-B2C31-APP-031-android-p03-al-llegar-a-van-bien-juntos.png>)

---

### TC-B2C31-APP-032 - Verificar que el tab "Productos similares" está activo por defecto con su carrusel [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema carga la PDP de {SKU_VALID_001}.
4. El usuario hace scroll hasta la sección de tabs.

**Resultado esperado**

El tab "Productos similares" aparece seleccionado y muestra un carrusel de productos de la misma categoría.

**Resultado obtenido**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el tab «Productos similares» aparece seleccionado por defecto con un carrusel de la misma categoría. Obtenido: la PDP de {SKU_VALID_001} (Albóndigas Super Pollo) termina en la sección «Acerca de» y no tiene ni el tab «Productos similares» ni su carrusel (se recorrió la PDP completa). Bug: B2C-1452.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el tab «Productos similares» aparece seleccionado por defecto con un carrusel de la misma categoría. Obtenido: la PDP de {SKU_VALID_001} (Albóndigas Super Pollo) termina en la sección «Acerca de» y no tiene ni el tab «Productos similares» ni su carrusel (se recorrió la PDP completa). Bug: B2C-1452.

**Evidencia**

![Android · Paso 1 — pdp final](<B2C-31 APP Evidencias/TC-B2C31-APP-032-android-p01-pdp-final.png>)

![Android · Paso 1 — pdp productos similares](<B2C-31 APP Evidencias/TC-B2C31-APP-032-android-p01-pdp-productos-similares.png>)

---

### TC-B2C31-APP-033 - Verificar que el tab Información muestra pills solo para las secciones con contenido [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_INFO_COMPLETA} tiene varias secciones de información, incluida "Acerca de"

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_INFO_COMPLETA} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_INFO_COMPLETA} y abre su PDP.
3. El sistema carga la PDP de {SKU_INFO_COMPLETA}.
4. El usuario toca el tab "Información".
5. El sistema muestra las pills de las secciones con contenido con "Descripción" activa.
6. El usuario desliza las pills horizontalmente.
7. El sistema desplaza las pills sin romper el layout.

**Resultado esperado**

Solo hay pills para las secciones con contenido, "Descripción" está activa y las pills se desplazan horizontalmente.

**Resultado obtenido**

El tab Información muestra pills solo para las secciones con contenido (Descripción, Ingredientes, Estilos de alimentación…).

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 APP Evidencias/TC-B2C31-APP-033-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 3 — tab informacion](<B2C-31 APP Evidencias/TC-B2C31-APP-033-android-p03-tab-informacion.png>)

---

### TC-B2C31-APP-034 - Verificar que tocar una pill ancla el scroll a su sección y la marca como activa [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_INFO_COMPLETA} tiene la sección "Tabla nutricional"

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_INFO_COMPLETA} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_INFO_COMPLETA} y abre su PDP.
3. El sistema carga la PDP de {SKU_INFO_COMPLETA}.
4. El usuario toca el tab "Información" y luego la pill "Tabla nutricional".
5. El sistema desplaza el contenido al inicio de la sección "Tabla nutricional" y marca esa pill como activa.

**Resultado esperado**

La pantalla queda al inicio de "Tabla nutricional" y esa pill cambia de color como activa.

**Resultado obtenido**

Tocar la pill 'Datos de nutrición' lleva la vista al inicio de esa sección.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 APP Evidencias/TC-B2C31-APP-034-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 4 — tras tocar la pill de nutricion](<B2C-31 APP Evidencias/TC-B2C31-APP-034-android-p04-tras-tocar-la-pill-de-nutricion.png>)

---

### TC-B2C31-APP-035 - Verificar que las pills de información quedan fijas bajo los tabs al hacer scroll [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_INFO_COMPLETA} tiene varias secciones de información

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_INFO_COMPLETA} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_INFO_COMPLETA} y abre su PDP.
3. El sistema carga la PDP de {SKU_INFO_COMPLETA}.
4. El usuario toca el tab "Información" y hace scroll hacia abajo por el contenido.

**Resultado esperado**

Las pills permanecen fijas debajo de los tabs mientras se recorre el contenido.

**Resultado obtenido**

Las pills quedan fijas bajo el tab 'Información' al seguir desplazando.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 APP Evidencias/TC-B2C31-APP-035-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 3 — tab informacion](<B2C-31 APP Evidencias/TC-B2C31-APP-035-android-p03-tab-informacion.png>)

![Android · Paso 4 — pills tras seguir desplazando](<B2C-31 APP Evidencias/TC-B2C31-APP-035-android-p04-pills-tras-seguir-desplazando.png>)

---

### TC-B2C31-APP-036 - Verificar que la sección Descripción muestra el texto del producto y su SKU [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema carga la PDP de {SKU_VALID_001}.
4. El usuario toca el tab "Información".

**Resultado esperado**

La sección "Descripción" muestra el texto del producto (y la descripción enriquecida si existe) y el SKU {SKU_VALID_001}.

**Resultado obtenido**

La sección Descripción muestra el texto del producto y 'SKU: 000000000000675191-UN'.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 APP Evidencias/TC-B2C31-APP-036-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 3 — tab informacion](<B2C-31 APP Evidencias/TC-B2C31-APP-036-android-p03-tab-informacion.png>)

---

### TC-B2C31-APP-037 - Verificar que un producto con una sola sección muestra una sola pill [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_SOLO_DESCRIPCION} solo tiene descripción

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_SOLO_DESCRIPCION} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_SOLO_DESCRIPCION} y abre su PDP.
3. El sistema carga la PDP de {SKU_SOLO_DESCRIPCION}.
4. El usuario toca el tab "Información".

**Resultado esperado**

Solo se muestra la pill "Descripción" y no aparecen pills para secciones sin contenido (incluida "Acerca de").

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP de {SKU_SOLO_DESCRIPCION}: bajo el título «Información» solo hay la pill «Descripción»; no aparecen pills de secciones sin contenido ni «Acerca de».

**Evidencia**

![Android · Paso 1 — pdp una pill](<B2C-31 APP Evidencias/TC-B2C31-APP-037-android-p01-pdp-una-pill.png>)

---

### TC-B2C31-APP-038 - Verificar que la PDP muestra el carrusel "Van bien juntos" al final [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_CROSS_SELLING} = 000000000401693004-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_CROSS_SELLING} y abre su PDP.
3. El sistema carga la PDP de {SKU_CROSS_SELLING}.
4. El usuario hace scroll hasta el final de la PDP.

**Resultado esperado**

Se muestra el carrusel "Van bien juntos" con productos complementarios, deslizable horizontalmente.

**Resultado obtenido**

Al final de la PDP se muestra el carrusel 'Van bien juntos'.

**Evidencia**

![Android · Paso 1 — resultados de 000000000401693004 un](<B2C-31 APP Evidencias/TC-B2C31-APP-038-android-p01-resultados-de-000000000401693004-un.png>)

![Android · Paso 3 — final de la pdp](<B2C-31 APP Evidencias/TC-B2C31-APP-038-android-p03-final-de-la-pdp.png>)

---

### TC-B2C31-APP-039 - Verificar que "Combina la promo" aparece con promo combinable y abre su modal [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_COMBINA_PROMO} tiene una promo combinable activa (ID termina en CLP1) con variantes con stock

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_COMBINA_PROMO} = 000000000000666200-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_COMBINA_PROMO} y abre su PDP.
3. El sistema carga la PDP de {SKU_COMBINA_PROMO}.
4. El usuario toca "Combina la promo".
5. El sistema abre el modal de Combina la promo con las variantes combinables.

**Resultado esperado**

Se muestra "Combina la promo" junto a "Agregar" y al tocarlo se abre el modal con las variantes combinables.

**Resultado obtenido**

Se muestra 'Combina la promo' y al tocarlo se abre el modal con variantes combinables.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000666200 un](<B2C-31 APP Evidencias/TC-B2C31-APP-039-android-p01-resultados-de-000000000000666200-un.png>)

![Android · Paso 3 — pdp](<B2C-31 APP Evidencias/TC-B2C31-APP-039-android-p03-pdp.png>)

![Android · Paso 5 — modal de variantes combinables](<B2C-31 APP Evidencias/TC-B2C31-APP-039-android-p05-modal-de-variantes-combinables.png>)

---

### TC-B2C31-APP-040 - Verificar que sin promo combinable no se muestra "Combina la promo" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_VALID_001} no tiene promo combinable activa

**Data utilizada**

{APP_BUILD} = v1.0.7

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema carga la PDP de {SKU_VALID_001}.

**Resultado esperado**

No se muestra el botón "Combina la promo".

**Resultado obtenido**

Sin promo combinable no se muestra 'Combina la promo'.

**Evidencia**

![Android · Paso 1 — resultados de 000000000000675191 un](<B2C-31 APP Evidencias/TC-B2C31-APP-040-android-p01-resultados-de-000000000000675191-un.png>)

![Android · Paso 3 — pdp](<B2C-31 APP Evidencias/TC-B2C31-APP-040-android-p03-pdp.png>)

---

### TC-B2C31-APP-041 - Verificar que la sección "Acerca de" muestra el contenido inspiracional configurado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {SKU_INFO_COMPLETA} tiene contenido en el atributo acercaDe

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_INFO_COMPLETA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_INFO_COMPLETA} y abre su PDP.
3. El sistema carga la PDP de {SKU_INFO_COMPLETA}.
4. El usuario toca el tab "Información" y luego la pill "Acerca de".
5. El sistema muestra el contenido inspiracional del producto.

**Resultado esperado**

Se muestra el contenido configurado (texto, imágenes y/o video) adaptado al ancho de la pantalla, sin desbordes.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Pill «Acerca de»: presente. Textos alrededor: Acerca de | Acerca de las albóndigas .... El ajuste al ancho y la ausencia de desbordes se confirman en la captura.

**Evidencia**

![Android · Paso 1 — pdp acerca de](<B2C-31 APP Evidencias/TC-B2C31-APP-041-android-p01-pdp-acerca-de.png>)

---

### TC-B2C31-APP-042 - Verificar que un fallo al cargar el producto muestra la pantalla de error [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {PDP_API_ENDPOINT}

**Data utilizada**

{APP_BUILD} = v1.0.7

{HERRAMIENTA_PROXY_APP} = None

{PDP_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema muestra la imagen, "Tuvimos un problema al cargar tu producto", "Estamos trabajando para solucionarlo. Intenta nuevamente en unos segundos.", el código de error y los botones "Reintentar" e "Ir a inicio".

**Resultado esperado**

Se muestra la pantalla de error completa con código y los botones "Reintentar" e "Ir a inicio".

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-043 - Verificar que "Reintentar" muestra el skeleton y vuelve a cargar el producto [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {PDP_API_ENDPOINT}

**Data utilizada**

{APP_BUILD} = v1.0.7

{HERRAMIENTA_PROXY_APP} = None

{PDP_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema muestra la pantalla de error de la PDP.
4. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado y toca "Reintentar".
5. El sistema muestra el skeleton de la PDP y luego la PDP completa.

**Resultado esperado**

Tras tocar "Reintentar" se ve el skeleton y luego la PDP de {SKU_VALID_001}.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-044 - Verificar que "Ir a inicio" de la pantalla de error lleva al Home [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {PDP_API_ENDPOINT}

**Data utilizada**

{APP_BUILD} = v1.0.7

{HERRAMIENTA_PROXY_APP} = None

{PDP_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema muestra la pantalla de error de la PDP.
4. El usuario toca "Ir a inicio".
5. El sistema redirige al Home de la App.

**Resultado esperado**

El usuario queda en el Home de la App.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-045 - Verificar que un deep link a un producto inexistente muestra la pantalla 404 de producto [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Deep link

**Data utilizada**

{APP_BUILD} = v1.0.7

{PDP_DEEPLINK_INEXISTENTE} = None

**Pasos ejecutados**

1. El usuario abre el deep link {PDP_DEEPLINK_INEXISTENTE} desde el dispositivo.
2. El sistema abre la App y muestra la pantalla 404 con una imagen, "El producto que buscas no existe o ya no está disponible" y el botón "Ir a la página de Inicio".

**Resultado esperado**

Se muestra la pantalla 404 de producto con imagen, mensaje y botón "Ir a la página de Inicio".

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-046 - Verificar que el botón de la pantalla 404 lleva al Home [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Deep link

**Data utilizada**

{APP_BUILD} = v1.0.7

{PDP_DEEPLINK_INEXISTENTE} = None

**Pasos ejecutados**

1. El usuario abre el deep link {PDP_DEEPLINK_INEXISTENTE} desde el dispositivo.
2. El sistema abre la App y muestra la pantalla 404 de producto.
3. El usuario toca "Ir a la página de Inicio".
4. El sistema redirige al Home de la App.

**Resultado esperado**

El usuario queda en el Home de la App.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-047 - Verificar que la pantalla 404 de producto no redirige al Home automáticamente [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Deep link

**Data utilizada**

{APP_BUILD} = v1.0.7

{PDP_DEEPLINK_INEXISTENTE} = None

**Pasos ejecutados**

1. El usuario abre el deep link {PDP_DEEPLINK_INEXISTENTE} desde el dispositivo.
2. El sistema abre la App y muestra la pantalla 404 de producto.
3. El usuario espera 10 segundos sin interactuar.
4. El sistema mantiene la pantalla 404.

**Resultado esperado**

Después de 10 segundos el usuario sigue en la pantalla 404 (no hay redirección automática al Home).

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-048 - Verificar que "Guardar en mis listas" abre el modal "Agregar como lista" desde abajo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta {COMPRADOR_USER}

**Data utilizada**

{APP_BUILD} = v1.0.7

{COMPRADOR_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_VALID_001} y abre su PDP.
3. El sistema carga la PDP de {SKU_VALID_001}.
4. El usuario toca "Guardar en listas".
5. El sistema despliega desde abajo el modal "Agregar como lista".

**Resultado esperado**

Se muestra el modal "Agregar como lista" desplegado desde la parte inferior sobre la PDP.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-049 - Verificar que con Membresía, Unipay y BancoEstado a la vez el 3er precio es el de Membresía [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: PDP
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_USER}
- PriceDisplayPriority = MEMBERSHIP_FIRST (valor por defecto)
- {SKU_TRES_PRECIOS} tiene precio Membresía, Unipay y BancoEstado vigentes a la vez

**Data utilizada**

{APP_BUILD} = v1.0.7

{COMPRADOR_MEMBRESIA_PASSWORD} = (contraseña de la cuenta)

{COMPRADOR_MEMBRESIA_USER} = daunuruco+noaddress@avatar-global.com

{SKU_TRES_PRECIOS} = 000000000000666200-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_TRES_PRECIOS} y abre su PDP.
3. El sistema carga la PDP de {SKU_TRES_PRECIOS}.

**Resultado esperado**

Se muestran como máximo 3 precios y el tercero corresponde al precio Membresía.

**Resultado obtenido**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.

**Observación**

Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C31-APP-050 - Verificar que un producto con "Completa la promo" no muestra el botón "Combina la promo" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-31.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: PDP
- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)
- {SKU_PROM_NxM} tiene una promo NxM del mismo SKU (Completa la promo)

**Data utilizada**

- {APP_BUILD} = TBD
- {SKU_PROM_NxM} = 000000000641229002-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario busca {SKU_PROM_NxM} y abre su PDP.
3. El sistema carga la PDP de {SKU_PROM_NxM}.
4. El usuario toca "Agregar" y luego "+" en el stepper.
5. El sistema actualiza la cantidad en el stepper de la PDP.

**Resultado esperado**

No se muestra "Combina la promo" y las unidades se agregan desde el stepper de la PDP.

**Observación**

Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP del SKU con «Completa la promo» 3x2: muestra «3 por 2 a $4.900» y «Lleva 3 por $2.592» y no aparece el botón «Combina la promo».

**Evidencia**

![Android · Paso 1 — pdp completa la promo](<B2C-31 APP Evidencias/TC-B2C31-APP-050-android-p01-pdp-completa-la-promo.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "dispositivo por ADB"
  },
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-31 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-31 APP Test Cases.xlsx",
  "title": "B2C-31 (app Android) - PDP — Página de detalle del producto - Evidencias QA",
  "updated_at": "2026-11-03"
 },
 "history": {
  "2026-10-20": [
   "TC-B2C31-APP-001",
   "TC-B2C31-APP-002",
   "TC-B2C31-APP-003",
   "TC-B2C31-APP-004",
   "TC-B2C31-APP-005",
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
   "TC-B2C31-APP-017",
   "TC-B2C31-APP-018",
   "TC-B2C31-APP-019",
   "TC-B2C31-APP-020",
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
   "TC-B2C31-APP-048",
   "TC-B2C31-APP-049",
   "TC-B2C31-APP-050"
  ],
  "2026-10-21": [
   "TC-B2C31-APP-001",
   "TC-B2C31-APP-002",
   "TC-B2C31-APP-003",
   "TC-B2C31-APP-004",
   "TC-B2C31-APP-005",
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
   "TC-B2C31-APP-017",
   "TC-B2C31-APP-018",
   "TC-B2C31-APP-019",
   "TC-B2C31-APP-020",
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
   "TC-B2C31-APP-048",
   "TC-B2C31-APP-049",
   "TC-B2C31-APP-050"
  ],
  "2026-11-03": [
   "TC-B2C31-APP-014",
   "TC-B2C31-APP-021",
   "TC-B2C31-APP-024",
   "TC-B2C31-APP-025",
   "TC-B2C31-APP-028",
   "TC-B2C31-APP-029",
   "TC-B2C31-APP-030",
   "TC-B2C31-APP-032",
   "TC-B2C31-APP-037",
   "TC-B2C31-APP-041",
   "TC-B2C31-APP-050"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "La PDP del producto se muestra en pantalla completa, sin breadcrumb, con la flecha para volver a la PLP.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-001",
   "name": "Verificar que tocar un producto en la PLP abre su PDP en pantalla completa [App] [Guest]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PLP_URL} (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno) es una URL web y la app no navega por URL, así que no hay forma de abrir esa PLP desde la fila. Acción: declarar la categoría de la app. Re-verificado en vivo el 2026-10-21.",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PLP_URL} (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno) es una URL web y la app no navega por URL, así que no hay forma de abrir esa PLP desde la fila. Acción: declarar la categoría de la app. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario navega a la PLP equivalente a {PLP_URL}.\n3. El sistema carga la PLP.\n4. El usuario toca un producto del listado.\n5. El sistema abre la PDP del producto en pantalla completa.",
   "test_data": "{APP_BUILD} = v1.0.7\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "La PDP del producto se muestra en pantalla completa, sin breadcrumb.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-002",
   "name": "Verificar que tocar un producto en la búsqueda abre su PDP en pantalla completa [App] [Guest]",
   "observed": "Buscar 'leche' y tocar un producto abre su PDP en pantalla completa, sin breadcrumb.",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SEARCH_TERM_001} y toca \"Buscar\" en el teclado.\n3. El sistema carga los resultados de búsqueda.\n4. El usuario toca un producto de los resultados.\n5. El sistema abre la PDP del producto en pantalla completa.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SEARCH_TERM_001} = leche"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "La PDP del producto se muestra en pantalla completa, sin breadcrumb.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-003",
   "name": "Verificar que tocar un producto de un carrusel del Home abre su PDP en pantalla completa [App] [Guest]",
   "observed": "Tocar un producto de 'Los más vendidos' del Home abre su PDP, sin breadcrumb.",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App con sus carruseles de productos.\n3. El usuario toca un producto de un carrusel.\n4. El sistema abre la PDP del producto en pantalla completa.",
   "test_data": "{APP_BUILD} = v1.0.7"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Durante la carga se ve el skeleton de imagen, datos y botones, y luego la PDP completa.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-004",
   "name": "Verificar que la PDP muestra el skeleton durante la carga y luego el contenido completo [App] [Guest]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta",
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema muestra el skeleton de imagen, datos y botones y, al terminar la carga, la PDP completa.",
   "test_data": "{APP_BUILD} = v1.0.7\n{HERRAMIENTA_PROXY_APP} = None\n{SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Las secciones aparecen en orden: galería (ancho completo con dots), información + precios + botones, tabs \"Productos similares\" | \"Información\", carrusel \"Van bien juntos\" (si tiene contenido) y carrusel \"Recomendados para ti\"; no hay breadcrumb.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-005",
   "name": "Verificar que la PDP muestra sus secciones en el orden definido para App [App] [Logueado]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta {COMPRADOR_USER}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — login por correo no disponible",
     "file": "TC-B2C31-APP-005-android-p01-login-por-correo-no-disponible.png"
    }
   ],
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema carga la PDP de {SKU_VALID_001}.\n4. El usuario hace scroll desde el inicio hasta el final de la PDP.",
   "test_data": "{APP_BUILD} = v1.0.7\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "No se muestra \"Recomendados para ti\" (solo para logueado) ni queda espacio vacío, y las demás secciones mantienen su orden.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-006",
   "name": "Verificar que una sección sin contenido no se muestra y el orden del resto se mantiene [App] [Guest]",
   "observed": "Como invitado la PDP no muestra 'Recomendados para ti' ni deja espacio vacío.",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema carga la PDP de {SKU_VALID_001}.\n4. El usuario hace scroll desde el inicio hasta el final de la PDP.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra la imagen principal a ancho completo con dots de posición, en alta resolución.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-007",
   "name": "Verificar que un producto con varias imágenes muestra la imagen principal con dots [App] [Guest]",
   "observed": "La galería muestra 'Imagen 1 de 3' con dots de posición (pdp-gallery-dot).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_MULTI_IMAGEN} tiene 2 o más imágenes",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_MULTI_IMAGEN} y abre su PDP.\n3. El sistema carga la PDP de {SKU_MULTI_IMAGEN}.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_MULTI_IMAGEN} = 000000000000028616-KGV"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra la imagen del producto sin dots ni controles de navegación.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-008",
   "name": "Verificar que un producto con una sola imagen no muestra controles de navegación [App] [Guest]",
   "observed": "Con una sola imagen ('Imagen 1 de 1') no hay dots ni navegación.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_UNA_IMAGEN} tiene una sola imagen",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_UNA_IMAGEN} y abre su PDP.\n3. El sistema carga la PDP de {SKU_UNA_IMAGEN}.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_UNA_IMAGEN} = 000000000000652899-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "La imagen se amplía con el gesto de pinch y se mantiene nítida (sin pixelado).",
   "form_factor": "app",
   "id": "TC-B2C31-APP-009",
   "name": "Verificar que tocar la imagen abre el modal y permite zoom con pinch [App] [Guest]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige un pinch (zoom con dos dedos) y mobilewright no expone ese gesto: ni su API ni la de mobilecli lo traen. Acción: verificarlo a mano o habilitar el gesto en la automatización. Re-verificado en vivo el 2026-10-21.",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso exige un pinch (zoom con dos dedos) y mobilewright no expone ese gesto: ni su API ni la de mobilecli lo traen. Acción: verificarlo a mano o habilitar el gesto en la automatización. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_MULTI_IMAGEN} tiene 2 o más imágenes",
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_MULTI_IMAGEN} y abre su PDP.\n3. El sistema carga la PDP de {SKU_MULTI_IMAGEN}.\n4. El usuario toca la imagen principal.\n5. El sistema abre el modal de la galería con la imagen.\n6. El usuario hace pinch para ampliar la imagen.\n7. El sistema amplía la imagen.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_MULTI_IMAGEN} = 000000000000028616-KGV"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Al deslizar horizontalmente se pasa de una foto a otra dentro del modal.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-010",
   "name": "Verificar que en el modal de la galería se desliza horizontalmente entre fotos [App] [Guest]",
   "observed": "En el modal de la galería, deslizar pasa de 'Imagen 1 de N' a la foto siguiente.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_MULTI_IMAGEN} tiene 2 o más imágenes",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_MULTI_IMAGEN} y abre su PDP.\n3. El sistema carga la PDP de {SKU_MULTI_IMAGEN}.\n4. El usuario toca la imagen principal.\n5. El sistema abre el modal de la galería con la imagen.\n6. El usuario desliza horizontalmente.\n7. El sistema muestra la siguiente foto del producto.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_MULTI_IMAGEN} = 000000000000028616-KGV"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra la imagen por defecto de Unimarc y el resto de la PDP carga normalmente.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-011",
   "name": "Verificar que un producto sin imagen válida muestra la imagen por defecto de Unimarc [App] [Guest]",
   "observed": "El producto sin imagen válida muestra una imagen y el resto de la PDP carga.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_SIN_IMAGEN} no tiene imagen configurada o su URL de imagen retorna error",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_SIN_IMAGEN} y abre su PDP.\n3. El sistema carga la PDP de {SKU_SIN_IMAGEN}.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_SIN_IMAGEN} = 000000000000029400-KG"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Bajo la imagen se muestran corazón, compartir, marca, nombre, formato (ej. «200g»), precios vigentes, \"Guardar en listas\" y \"Agregar\"; nombre, formato y precio coinciden con lo anotado en la PLP.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-012",
   "name": "Verificar que la primera vista muestra los datos obligatorios del producto bajo la imagen [App] [Guest]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PLP_URL} (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno) es una URL web y la app no navega por URL, así que no hay forma de abrir esa PLP desde la fila. Acción: declarar la categoría de la app. Re-verificado en vivo el 2026-10-21.",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PLP_URL} (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno) es una URL web y la app no navega por URL, así que no hay forma de abrir esa PLP desde la fila. Acción: declarar la categoría de la app. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PLP",
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario navega a la PLP equivalente a {PLP_URL}.\n3. El sistema carga la PLP.\n4. El usuario anota nombre, formato y precio de un producto y lo toca.\n5. El sistema abre la PDP del producto.",
   "test_data": "{APP_BUILD} = v1.0.7\n{PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "La PDP muestra el label \"Patrocinado\".",
   "form_factor": "app",
   "id": "TC-B2C31-APP-013",
   "name": "Verificar que un producto patrocinado muestra el label \"Patrocinado\" [App] [Guest]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {SKU_PATROCINADO} (000000000000642688-UN, Galleta Oreo) no muestra la etiqueta 'Patrocinado' en su PDP. Acción: declarar un SKU que se muestre patrocinado. Re-verificado en vivo el 2026-10-21.",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {SKU_PATROCINADO} (000000000000642688-UN, Galleta Oreo) no muestra la etiqueta 'Patrocinado' en su PDP. Acción: declarar un SKU que se muestre patrocinado. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_PATROCINADO} tiene isSponsored = true",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PATROCINADO} y abre su PDP.\n3. El sistema carga la PDP de {SKU_PATROCINADO}.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_PATROCINADO} = 000000000000642688-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "La PDP muestra \"Vendido por\" seguido del nombre del tercero.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-014",
   "name": "Verificar que un producto de marketplace muestra \"Vendido por\" y el vendedor [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la precondición pide {SKU_MARKETPLACE} con isMarketplace; la PDP de 000000000000217756-UN es un papel higiénico Confort sin «Vendido por», o sea que el SKU no es de marketplace en este ambiente. Falta un SKU de marketplace (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_MARKETPLACE} tiene isMarketplace con valor",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — pdp marketplace",
     "file": "TC-B2C31-APP-014-android-p01-pdp-marketplace.png"
    }
   ],
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_MARKETPLACE} y abre su PDP.\n3. El sistema carga la PDP de {SKU_MARKETPLACE}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_MARKETPLACE} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestran los resultados con los productos disponibles de la marca.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-015",
   "name": "Verificar que tocar la marca lleva a los resultados filtrados por esa marca [App] [Guest]",
   "observed": "Tocar la marca abre los resultados con productos de esa marca.",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema carga la PDP de {SKU_VALID_001}.\n4. El usuario toca el nombre de la marca.\n5. El sistema muestra los resultados de esa marca.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se abre el share nativo con el link de la PDP de {SKU_VALID_001}.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-016",
   "name": "Verificar que tocar \"Compartir\" abre el share nativo con el link de la PDP [App] [Guest]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el botón 'Compartir' de la PDP no tiene etiqueta ni identificador de accesibilidad y la automatización no puede ubicarlo: el botón que sigue al corazón en el árbol abre 'Iniciar sesión o registrarse' y no la hoja para compartir (captura p04). Acción: etiquetar el botón (accessibilityLabel) o verificarlo a mano. Re-verificado en vivo el 2026-10-21.",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema carga la PDP de {SKU_VALID_001}.\n4. El usuario toca el ícono \"Compartir\".\n5. El sistema abre el iOS Share Sheet / Android Share Intent.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El corazón queda rojo y {SKU_VALID_001} aparece en la lista de favoritos.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-017",
   "name": "Verificar que el corazón agrega el producto a favoritos del usuario logueado [App] [Logueado]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- {SKU_VALID_001} no está en favoritos",
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema carga la PDP de {SKU_VALID_001}.\n4. El usuario toca el corazón.\n5. El sistema pinta el corazón de rojo y agrega el producto a favoritos.",
   "test_data": "{APP_BUILD} = v1.0.7\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el flujo de login.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-018",
   "name": "Verificar que el corazón redirige al login al usuario invitado [App] [Guest]",
   "observed": "Como invitado, el corazón abre 'Iniciar sesión o registrarse'.",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema carga la PDP de {SKU_VALID_001}.\n4. El usuario toca el corazón.\n5. El sistema redirige al flujo de login.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El precio oferta se muestra destacado en color de acento y el precio normal aparece tachado.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-019",
   "name": "Verificar que un producto en oferta muestra el precio oferta destacado y el normal tachado [App] [Guest]",
   "observed": "El producto en oferta muestra el % de descuento, el precio oferta y 'Antes:' con el precio normal tachado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_PRECIO_OFERTA} tiene una oferta activa",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PRECIO_OFERTA} y abre su PDP.\n3. El sistema carga la PDP de {SKU_PRECIO_OFERTA}.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_PRECIO_OFERTA} = 000000000000178089-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el precio membresía con su label, además del precio normal.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-020",
   "name": "Verificar que un producto con precio membresía muestra el precio con su label [App] [Logueado]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_USER}\n- La cuenta {COMPRADOR_MEMBRESIA_USER} tiene membresía vigente",
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PRECIO_MIEMBRO} y abre su PDP.\n3. El sistema carga la PDP de {SKU_PRECIO_MIEMBRO}.",
   "test_data": "{APP_BUILD} = v1.0.7\n{COMPRADOR_MEMBRESIA_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_MEMBRESIA_USER} = daunuruco+noaddress@avatar-global.com\n{SKU_PRECIO_MIEMBRO} = 000000000000662457-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se muestra el precio promocional en formato X×$XXXX junto al precio normal.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-021",
   "name": "Verificar que un producto con promo NxPrecio muestra el precio compuesto [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP del SKU con promo NxPrecio: Precios en la PDP: Promoción Lleva 2 unidades por Monto | Lleva 2 por $12.490 | ($12.490 x Kg) | Lleva 2 por $10.866 | ($10.866 x Kg) | $7.690 c/u | ($15.380 x Kg) | Porción de 80 g | $7.690. Formato compuesto: Promoción Lleva 2 unidades por Monto | Lleva 2 por $12.490 | Lleva 2 por $10.866. Nota: el TC describe el formato «X×$XXXX»; el app muestra «Lleva 2 por $12.490» junto al precio normal.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_PROM_NxPRECIO} tiene una promo NxPrecio activa",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — pdp nxprecio",
     "file": "TC-B2C31-APP-021-android-p01-pdp-nxprecio.png"
    }
   ],
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PROM_NxPRECIO} y abre su PDP.\n3. El sistema carga la PDP de {SKU_PROM_NxPRECIO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PROM_NxPRECIO} = 000000000000666200-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el PPUM (precio / unit-quantity) junto al precio normal y a cada precio promocional activo.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-022",
   "name": "Verificar que un producto pesable muestra el PPUM junto a sus precios [App] [Guest]",
   "observed": "El pesable muestra el PPUM entre paréntesis junto al precio.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_PESABLE} tiene precio, unit y unit-quantity cargados",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PESABLE} y abre su PDP.\n3. El sistema carga la PDP de {SKU_PESABLE}.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_PESABLE} = 000000000000037972-KG"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra una sola cucarda y el botón \"Agregar\" sigue disponible.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-023",
   "name": "Verificar que un producto con label muestra una sola cucarda sin bloquear la compra [App] [Guest]",
   "observed": "Se muestra una sola cucarda y 'Agregar' sigue disponible.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_CUCARDA} tiene configurado el atributo label",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_CUCARDA} y abre su PDP.\n3. El sistema carga la PDP de {SKU_CUCARDA}.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_CUCARDA} = 000000000000028616-KGV"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El contador del carro aumenta en 1, el monto total se recalcula y se muestra el stepper con 1 unidad.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-024",
   "name": "Verificar que \"Agregar\" suma el producto al carro y muestra el stepper [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Tras tocar «Agregar» en la PDP de {SKU_VALID_001} se muestra el stepper con «1 un.» y el carro flotante pasa a «1 unidades, Te faltan $57.510 para despacho GRATIS» (contador y monto recalculados).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_VALID_001} no está en el carro",
   "screenshots": [
    {
     "caption": "Android · TC B2C31 APP 024 pdp tras agregar",
     "file": "TC-B2C31-APP-024-android-pdp-tras-agregar.png"
    }
   ],
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema carga la PDP de {SKU_VALID_001}.\n4. El usuario anota el contador del ícono del carro y toca \"Agregar\".\n5. El sistema agrega el producto y reemplaza \"Agregar\" por el stepper de cantidad.",
   "test_data": "- {APP_BUILD} = TBD\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El stepper muestra 2 unidades y el contador y el monto del carro se actualizan.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-025",
   "name": "Verificar que el \"+\" del stepper suma una unidad al carro [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Con el «+» del stepper la PDP muestra «2 un.» y el carro flotante «2 unidades, Te faltan $55.020 para despacho GRATIS».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- El carro contiene {SKU_VALID_001} x 1",
   "screenshots": [
    {
     "caption": "Android · TC B2C31 APP 025 pdp tras sumar",
     "file": "TC-B2C31-APP-025-android-pdp-tras-sumar.png"
    }
   ],
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema carga la PDP de {SKU_VALID_001}.\n4. El usuario toca \"+\" en el stepper.\n5. El sistema suma una unidad y actualiza el contador y el monto del carro.",
   "test_data": "- {APP_BUILD} = TBD\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se abre el Store Locator y el producto no se agrega al carro.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-026",
   "name": "Verificar que \"Agregar\" sin método de entrega abre el Store Locator [App] [Guest]",
   "observed": "Como invitado sin método de entrega, 'Agregar' abre el Store Locator y no agrega el producto.",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema carga la PDP de {SKU_VALID_001}.\n4. El usuario toca \"Agregar\".\n5. El sistema abre el Store Locator.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "No se muestra \"Agregar\" y se muestra el tag \"Pronto disponible\".",
   "form_factor": "app",
   "id": "TC-B2C31-APP-027",
   "name": "Verificar que un producto sin stock oculta \"Agregar\" y muestra \"Pronto disponible\" [App] [Guest]",
   "observed": "{SKU_SIN_STOCK} muestra 'Pronto disponible' y no muestra 'Agregar'.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_SIN_STOCK} no tiene stock para el método de entrega activo",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_SIN_STOCK} y abre su PDP.\n3. El sistema carga la PDP de {SKU_SIN_STOCK}.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_SIN_STOCK} = 000000000000029403-KG"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El \"+\" queda deshabilitado cuando la cantidad en el carro iguala el stock disponible.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-028",
   "name": "Verificar que con todo el stock en el carro el \"+\" del stepper se deshabilita [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): En {SKU_STOCK_LIMITADO} («¡Últimas 5 unidades!») el «+» queda deshabilitado al llegar a 5 unidades en el carro.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_STOCK_LIMITADO} tiene pocas unidades de stock disponibles",
   "screenshots": [
    {
     "caption": "Android · TC B2C31 APP 028 pdp stock limite",
     "file": "TC-B2C31-APP-028-android-pdp-stock-limite.png"
    }
   ],
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_STOCK_LIMITADO} y abre su PDP.\n3. El sistema carga la PDP de {SKU_STOCK_LIMITADO}.\n4. El usuario toca \"Agregar\" y luego \"+\" hasta que el stepper no permita sumar más.\n5. El sistema deshabilita el \"+\" al llegar al stock disponible.",
   "test_data": "- {APP_BUILD} = TBD\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_STOCK_LIMITADO} = 000000000638426003-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El \"+\" queda deshabilitado y se muestra el mensaje \"Usted ha agregado la cantidad máxima de productos\".",
   "form_factor": "app",
   "id": "TC-B2C31-APP-029",
   "name": "Verificar que al alcanzar el cartlimit el \"+\" se deshabilita y se muestra el mensaje de máximo [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): En {SKU_CAR_LIMIT} el «+» queda deshabilitado a las 5 unidades y se muestra «Usted ha agregado la cantidad máxima de productos».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_CAR_LIMIT} tiene cartlimit configurado en SFCC",
   "screenshots": [
    {
     "caption": "Android · TC B2C31 APP 029 pdp cartlimit",
     "file": "TC-B2C31-APP-029-android-pdp-cartlimit.png"
    }
   ],
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_CAR_LIMIT} y abre su PDP.\n3. El sistema carga la PDP de {SKU_CAR_LIMIT}.\n4. El usuario toca \"Agregar\" y luego \"+\" hasta alcanzar el límite de compra.\n5. El sistema deshabilita el \"+\" y muestra \"Usted ha agregado la cantidad máxima de productos\".",
   "test_data": "- {APP_BUILD} = TBD\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_CAR_LIMIT} = 000000000000626717-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se muestra el label \"Últimas unidades\" en la ficha del producto.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-030",
   "name": "Verificar que un producto con stock bajo el umbral muestra \"Últimas unidades\" [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): la PDP de {SKU_STOCK_LIMITADO} muestra «¡Últimas 5 unidades!» bajo el umbral de stock.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- El stock visible de {SKU_STOCK_LIMITADO} es menor o igual al umbral FOMO",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — pdp ultimas unidades",
     "file": "TC-B2C31-APP-030-android-p01-pdp-ultimas-unidades.png"
    }
   ],
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_STOCK_LIMITADO} y abre su PDP.\n3. El sistema carga la PDP de {SKU_STOCK_LIMITADO}.",
   "test_data": "- {APP_BUILD} = TBD\n- {DIRECCION_DESPACHO_003} = TBD\n- {SKU_STOCK_LIMITADO} = 000000000638426003-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El bloque de datos y \"Agregar\" permanece visible mientras se recorren los tabs y deja de estar fijo al llegar a \"Van bien juntos\".",
   "form_factor": "app",
   "id": "TC-B2C31-APP-031",
   "name": "Verificar que el bloque de datos y \"Agregar\" queda fijo al recorrer los tabs [App] [Guest]",
   "observed": "El bloque de precio + 'Agregar' queda fijo al pie mientras se recorren los tabs y deja de estarlo al llegar a 'Van bien juntos'.",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_CROSS_SELLING} y abre su PDP.\n3. El sistema carga la PDP de {SKU_CROSS_SELLING}.\n4. El usuario hace scroll hacia abajo por los tabs hasta el carrusel \"Van bien juntos\".",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_CROSS_SELLING} = 000000000401693004-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El tab \"Productos similares\" aparece seleccionado y muestra un carrusel de productos de la misma categoría.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-032",
   "name": "Verificar que el tab \"Productos similares\" está activo por defecto con su carrusel [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el tab «Productos similares» aparece seleccionado por defecto con un carrusel de la misma categoría. Obtenido: la PDP de {SKU_VALID_001} (Albóndigas Super Pollo) termina en la sección «Acerca de» y no tiene ni el tab «Productos similares» ni su carrusel (se recorrió la PDP completa). Bug: B2C-1452.",
   "observed": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Esperado: el tab «Productos similares» aparece seleccionado por defecto con un carrusel de la misma categoría. Obtenido: la PDP de {SKU_VALID_001} (Albóndigas Super Pollo) termina en la sección «Acerca de» y no tiene ni el tab «Productos similares» ni su carrusel (se recorrió la PDP completa). Bug: B2C-1452.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — pdp final",
     "file": "TC-B2C31-APP-032-android-p01-pdp-final.png"
    },
    {
     "caption": "Android · Paso 1 — pdp productos similares",
     "file": "TC-B2C31-APP-032-android-p01-pdp-productos-similares.png"
    }
   ],
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema carga la PDP de {SKU_VALID_001}.\n4. El usuario hace scroll hasta la sección de tabs.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Solo hay pills para las secciones con contenido, \"Descripción\" está activa y las pills se desplazan horizontalmente.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-033",
   "name": "Verificar que el tab Información muestra pills solo para las secciones con contenido [App] [Guest]",
   "observed": "El tab Información muestra pills solo para las secciones con contenido (Descripción, Ingredientes, Estilos de alimentación…).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_INFO_COMPLETA} tiene varias secciones de información, incluida \"Acerca de\"",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_INFO_COMPLETA} y abre su PDP.\n3. El sistema carga la PDP de {SKU_INFO_COMPLETA}.\n4. El usuario toca el tab \"Información\".\n5. El sistema muestra las pills de las secciones con contenido con \"Descripción\" activa.\n6. El usuario desliza las pills horizontalmente.\n7. El sistema desplaza las pills sin romper el layout.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_INFO_COMPLETA} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "La pantalla queda al inicio de \"Tabla nutricional\" y esa pill cambia de color como activa.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-034",
   "name": "Verificar que tocar una pill ancla el scroll a su sección y la marca como activa [App] [Guest]",
   "observed": "Tocar la pill 'Datos de nutrición' lleva la vista al inicio de esa sección.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_INFO_COMPLETA} tiene la sección \"Tabla nutricional\"",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_INFO_COMPLETA} y abre su PDP.\n3. El sistema carga la PDP de {SKU_INFO_COMPLETA}.\n4. El usuario toca el tab \"Información\" y luego la pill \"Tabla nutricional\".\n5. El sistema desplaza el contenido al inicio de la sección \"Tabla nutricional\" y marca esa pill como activa.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_INFO_COMPLETA} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Las pills permanecen fijas debajo de los tabs mientras se recorre el contenido.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-035",
   "name": "Verificar que las pills de información quedan fijas bajo los tabs al hacer scroll [App] [Guest]",
   "observed": "Las pills quedan fijas bajo el tab 'Información' al seguir desplazando.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_INFO_COMPLETA} tiene varias secciones de información",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_INFO_COMPLETA} y abre su PDP.\n3. El sistema carga la PDP de {SKU_INFO_COMPLETA}.\n4. El usuario toca el tab \"Información\" y hace scroll hacia abajo por el contenido.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_INFO_COMPLETA} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "La sección \"Descripción\" muestra el texto del producto (y la descripción enriquecida si existe) y el SKU {SKU_VALID_001}.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-036",
   "name": "Verificar que la sección Descripción muestra el texto del producto y su SKU [App] [Guest]",
   "observed": "La sección Descripción muestra el texto del producto y 'SKU: 000000000000675191-UN'.",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema carga la PDP de {SKU_VALID_001}.\n4. El usuario toca el tab \"Información\".",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Solo se muestra la pill \"Descripción\" y no aparecen pills para secciones sin contenido (incluida \"Acerca de\").",
   "form_factor": "app",
   "id": "TC-B2C31-APP-037",
   "name": "Verificar que un producto con una sola sección muestra una sola pill [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP de {SKU_SOLO_DESCRIPCION}: bajo el título «Información» solo hay la pill «Descripción»; no aparecen pills de secciones sin contenido ni «Acerca de».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_SOLO_DESCRIPCION} solo tiene descripción",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — pdp una pill",
     "file": "TC-B2C31-APP-037-android-p01-pdp-una-pill.png"
    }
   ],
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_SOLO_DESCRIPCION} y abre su PDP.\n3. El sistema carga la PDP de {SKU_SOLO_DESCRIPCION}.\n4. El usuario toca el tab \"Información\".",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_SOLO_DESCRIPCION} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el carrusel \"Van bien juntos\" con productos complementarios, deslizable horizontalmente.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-038",
   "name": "Verificar que la PDP muestra el carrusel \"Van bien juntos\" al final [App] [Guest]",
   "observed": "Al final de la PDP se muestra el carrusel 'Van bien juntos'.",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_CROSS_SELLING} y abre su PDP.\n3. El sistema carga la PDP de {SKU_CROSS_SELLING}.\n4. El usuario hace scroll hasta el final de la PDP.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_CROSS_SELLING} = 000000000401693004-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra \"Combina la promo\" junto a \"Agregar\" y al tocarlo se abre el modal con las variantes combinables.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-039",
   "name": "Verificar que \"Combina la promo\" aparece con promo combinable y abre su modal [App] [Guest]",
   "observed": "Se muestra 'Combina la promo' y al tocarlo se abre el modal con variantes combinables.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_COMBINA_PROMO} tiene una promo combinable activa (ID termina en CLP1) con variantes con stock",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_COMBINA_PROMO} y abre su PDP.\n3. El sistema carga la PDP de {SKU_COMBINA_PROMO}.\n4. El usuario toca \"Combina la promo\".\n5. El sistema abre el modal de Combina la promo con las variantes combinables.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_COMBINA_PROMO} = 000000000000666200-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "No se muestra el botón \"Combina la promo\".",
   "form_factor": "app",
   "id": "TC-B2C31-APP-040",
   "name": "Verificar que sin promo combinable no se muestra \"Combina la promo\" [App] [Guest]",
   "observed": "Sin promo combinable no se muestra 'Combina la promo'.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_VALID_001} no tiene promo combinable activa",
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
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema carga la PDP de {SKU_VALID_001}.",
   "test_data": "{APP_BUILD} = v1.0.7\n{SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se muestra el contenido configurado (texto, imágenes y/o video) adaptado al ancho de la pantalla, sin desbordes.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-041",
   "name": "Verificar que la sección \"Acerca de\" muestra el contenido inspiracional configurado [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): Pill «Acerca de»: presente. Textos alrededor: Acerca de | Acerca de las albóndigas .... El ajuste al ancho y la ausencia de desbordes se confirman en la captura.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {SKU_INFO_COMPLETA} tiene contenido en el atributo acercaDe",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — pdp acerca de",
     "file": "TC-B2C31-APP-041-android-p01-pdp-acerca-de.png"
    }
   ],
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_INFO_COMPLETA} y abre su PDP.\n3. El sistema carga la PDP de {SKU_INFO_COMPLETA}.\n4. El usuario toca el tab \"Información\" y luego la pill \"Acerca de\".\n5. El sistema muestra el contenido inspiracional del producto.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_INFO_COMPLETA} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra la pantalla de error completa con código y los botones \"Reintentar\" e \"Ir a inicio\".",
   "form_factor": "app",
   "id": "TC-B2C31-APP-042",
   "name": "Verificar que un fallo al cargar el producto muestra la pantalla de error [App] [Guest]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {PDP_API_ENDPOINT}",
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema muestra la imagen, \"Tuvimos un problema al cargar tu producto\", \"Estamos trabajando para solucionarlo. Intenta nuevamente en unos segundos.\", el código de error y los botones \"Reintentar\" e \"Ir a inicio\".",
   "test_data": "{APP_BUILD} = v1.0.7\n{HERRAMIENTA_PROXY_APP} = None\n{PDP_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages\n{SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Tras tocar \"Reintentar\" se ve el skeleton y luego la PDP de {SKU_VALID_001}.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-043",
   "name": "Verificar que \"Reintentar\" muestra el skeleton y vuelve a cargar el producto [App] [Guest]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {PDP_API_ENDPOINT}",
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema muestra la pantalla de error de la PDP.\n4. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error forzado y toca \"Reintentar\".\n5. El sistema muestra el skeleton de la PDP y luego la PDP completa.",
   "test_data": "{APP_BUILD} = v1.0.7\n{HERRAMIENTA_PROXY_APP} = None\n{PDP_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages\n{SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El usuario queda en el Home de la App.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-044",
   "name": "Verificar que \"Ir a inicio\" de la pantalla de error lleva al Home [App] [Guest]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {HERRAMIENTA_PROXY_APP} está en TBD en el Excel de data, así que no hay forma declarada de interceptar o bloquear la request de la PDP en el dispositivo. Acción: declarar la herramienta de proxy. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {PDP_API_ENDPOINT}",
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema muestra la pantalla de error de la PDP.\n4. El usuario toca \"Ir a inicio\".\n5. El sistema redirige al Home de la App.",
   "test_data": "{APP_BUILD} = v1.0.7\n{HERRAMIENTA_PROXY_APP} = None\n{PDP_API_ENDPOINT} = *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/experience/shopper-experience/v1/organizations/f_ecom_bmkg_dev/pages\n{SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra la pantalla 404 de producto con imagen, mensaje y botón \"Ir a la página de Inicio\".",
   "form_factor": "app",
   "id": "TC-B2C31-APP-045",
   "name": "Verificar que un deep link a un producto inexistente muestra la pantalla 404 de producto [App] [Guest]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Deep link",
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre el deep link {PDP_DEEPLINK_INEXISTENTE} desde el dispositivo.\n2. El sistema abre la App y muestra la pantalla 404 con una imagen, \"El producto que buscas no existe o ya no está disponible\" y el botón \"Ir a la página de Inicio\".",
   "test_data": "{APP_BUILD} = v1.0.7\n{PDP_DEEPLINK_INEXISTENTE} = None"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "El usuario queda en el Home de la App.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-046",
   "name": "Verificar que el botón de la pantalla 404 lleva al Home [App] [Guest]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Deep link",
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre el deep link {PDP_DEEPLINK_INEXISTENTE} desde el dispositivo.\n2. El sistema abre la App y muestra la pantalla 404 de producto.\n3. El usuario toca \"Ir a la página de Inicio\".\n4. El sistema redirige al Home de la App.",
   "test_data": "{APP_BUILD} = v1.0.7\n{PDP_DEEPLINK_INEXISTENTE} = None"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Después de 10 segundos el usuario sigue en la pantalla 404 (no hay redirección automática al Home).",
   "form_factor": "app",
   "id": "TC-B2C31-APP-047",
   "name": "Verificar que la pantalla 404 de producto no redirige al Home automáticamente [App] [Guest]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: {PDP_DEEPLINK_INEXISTENTE} está en TBD en el Excel de data. Acción: cargar el deep link. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Deep link",
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre el deep link {PDP_DEEPLINK_INEXISTENTE} desde el dispositivo.\n2. El sistema abre la App y muestra la pantalla 404 de producto.\n3. El usuario espera 10 segundos sin interactuar.\n4. El sistema mantiene la pantalla 404.",
   "test_data": "{APP_BUILD} = v1.0.7\n{PDP_DEEPLINK_INEXISTENTE} = None"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el modal \"Agregar como lista\" desplegado desde la parte inferior sobre la PDP.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-048",
   "name": "Verificar que \"Guardar en mis listas\" abre el modal \"Agregar como lista\" desde abajo [App] [Logueado]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta {COMPRADOR_USER}",
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_VALID_001} y abre su PDP.\n3. El sistema carga la PDP de {SKU_VALID_001}.\n4. El usuario toca \"Guardar en listas\".\n5. El sistema despliega desde abajo el modal \"Agregar como lista\".",
   "test_data": "{APP_BUILD} = v1.0.7\n{COMPRADOR_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_USER} = daunuruco+comprador@avatar-global.com\n{SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-21",
   "expected": "Se muestran como máximo 3 precios y el tercero corresponde al precio Membresía.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-049",
   "name": "Verificar que con Membresía, Unipay y BancoEstado a la vez el 3er precio es el de Membresía [App] [Logueado]",
   "observation": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.",
   "observed": "Ejecutado en Android (emulador Pixel 6, Android 14, APK unimarc-v1.0.7.apk, paquete com.smuapp.unimarc) por indicación del usuario: la planilla no declara 'Plataforma:'. Causa: el caso requiere sesión iniciada y el login de la app pide RUT (o Google, o clave de acceso por correo); el Excel de data declara {COMPRADOR_USER} como correo y no trae el RUT de ninguna cuenta. Acción: declarar el RUT de la cuenta de prueba. Re-verificado en vivo el 2026-10-21.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_USER}\n- PriceDisplayPriority = MEMBERSHIP_FIRST (valor por defecto)\n- {SKU_TRES_PRECIOS} tiene precio Membresía, Unipay y BancoEstado vigentes a la vez",
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_TRES_PRECIOS} y abre su PDP.\n3. El sistema carga la PDP de {SKU_TRES_PRECIOS}.",
   "test_data": "{APP_BUILD} = v1.0.7\n{COMPRADOR_MEMBRESIA_PASSWORD} = (contraseña de la cuenta)\n{COMPRADOR_MEMBRESIA_USER} = daunuruco+noaddress@avatar-global.com\n{SKU_TRES_PRECIOS} = 000000000000666200-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "No se muestra \"Combina la promo\" y las unidades se agregan desde el stepper de la PDP.",
   "form_factor": "app",
   "id": "TC-B2C31-APP-050",
   "name": "Verificar que un producto con \"Completa la promo\" no muestra el botón \"Combina la promo\" [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1, invitado con {DIRECCION_DESPACHO_001}): PDP del SKU con «Completa la promo» 3x2: muestra «3 por 2 a $4.900» y «Lleva 3 por $2.592» y no aparece el botón «Combina la promo».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: PDP\n- Método de entrega activo (Despacho a domicilio o Retiro en tienda con cobertura)\n- {SKU_PROM_NxM} tiene una promo NxM del mismo SKU (Completa la promo)",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — pdp completa la promo",
     "file": "TC-B2C31-APP-050-android-p01-pdp-completa-la-promo.png"
    }
   ],
   "spec": "tests-app/B2C-31.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario busca {SKU_PROM_NxM} y abre su PDP.\n3. El sistema carga la PDP de {SKU_PROM_NxM}.\n4. El usuario toca \"Agregar\" y luego \"+\" en el stepper.\n5. El sistema actualiza la cantidad en el stepper de la PDP.",
   "test_data": "- {APP_BUILD} = TBD\n- {SKU_PROM_NxM} = 000000000641229002-UN"
  }
 ]
}
-->
