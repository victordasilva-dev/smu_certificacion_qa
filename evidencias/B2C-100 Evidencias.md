# B2C-100 APP

| Campo | Valor |
|---|---|
| Suite | B2C-100 |
| Última actualización | 2026-10-27 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-100 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 21 |
| Rechazado | 6 |
| Bloqueado Data | 2 |
| Bloqueado | 1 |
| **Total** | **30** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-27 | 29 | TC-100-APP-001, TC-100-APP-002, TC-100-APP-003, TC-100-APP-004, TC-100-APP-005, TC-100-APP-006, TC-100-APP-007, TC-100-APP-008, TC-100-APP-009, TC-100-APP-010, TC-100-APP-011, TC-100-APP-012, TC-100-APP-013, TC-100-APP-014, TC-100-APP-015, TC-100-APP-016, TC-100-APP-017, TC-100-APP-018, TC-100-APP-019, TC-100-APP-020, TC-100-APP-021, TC-100-APP-022, TC-100-APP-023, TC-100-APP-024, TC-100-APP-025, TC-100-APP-026, TC-100-APP-027, TC-100-APP-028, TC-100-APP-029 |
| 2026-10-23 | 1 | TC-100-M-001 |

## Detalle por caso de prueba

### TC-100-M-001 - 

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-23 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-100.spec.ts |

**Precondiciones**

User type: Guest.

Tienda Unimarc disponible en ambiente de QA.

Viewport: Mobile 390×844.

**Data utilizada**

- {BASE_URL} = URL base del storefront
- Credenciales: {COMPRADOR_USER} / {COMPRADOR_PASSWORD}

**Pasos ejecutados**

1. Navegar a la Home con viewport Mobile 390×844.
2. Verificar que el buscador (caja de texto + ícono lupa) es visible en el header full.
3. Verificar que la caja de texto muestra el placeholder '¿Qué estás buscando?'.
4. Hacer scroll hacia abajo hasta que el header sticky se active.
5. Verificar que el buscador también es accesible desde el header sticky.
6. Navegar a otra página (PLP, PDP) y verificar que el buscador sigue accesible.

**Resultado esperado**

El buscador es accesible desde el tabbar y el header en Mobile; muestra caja de texto con placeholder '¿Qué estás buscando?' e ícono lupa.

**Resultado obtenido**

Obtenido: no existe un tabbar inferior con el ícono de búsqueda en Mobile. Bug: B2C-804. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Observación**

Obtenido: no existe un tabbar inferior con el ícono de búsqueda en Mobile. Bug: B2C-804. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).

**Evidencia**

![Paso 2 — buscador en el header mobile](<B2C-100 Evidencias/TC-100-M-001-p02-buscador-en-el-header-mobile.png>)

![Paso 3 — pie del viewport del home no hay tabbar inferior](<B2C-100 Evidencias/TC-100-M-001-p03-pie-del-viewport-del-home-no-hay-tabbar-inferior.png>)

![Paso 5 — buscador en el header sticky](<B2C-100 Evidencias/TC-100-M-001-p05-buscador-en-el-header-sticky.png>)

![Paso 6 — buscador accesible en la pdp](<B2C-100 Evidencias/TC-100-M-001-p06-buscador-accesible-en-la-pdp.png>)

![Paso 6 — buscador accesible en la plp](<B2C-100 Evidencias/TC-100-M-001-p06-buscador-accesible-en-la-plp.png>)

---

### TC-100-APP-001 - Verificar que el buscador es accesible desde el tabbar, el header full y el header sticky

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
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
- Android = iOS

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App y muestra en el header full la caja de texto con placeholder "¿Qué estás buscando?" y el ícono lupa.
3. El usuario hace scroll hacia abajo en el Home.
4. El sistema muestra el header sticky con la caja de texto "¿Qué estás buscando?" y el ícono lupa.
5. El usuario toca la opción de búsqueda del tabbar.
6. El sistema abre la pantalla de búsqueda.

**Resultado esperado**

El buscador es accesible desde el tabbar, el header full y el header sticky, con placeholder "¿Qué estás buscando?" e ícono lupa.

**Resultado obtenido**

Esperado: el header full del Home muestra la caja con el placeholder «¿Qué estás buscando?» y la lupa, y el header sticky también. Obtenido: el Home no muestra ninguna caja de búsqueda, ni al abrirlo ni al desplazarse; el buscador solo se abre desde el tab «Buscar». B2C-100.spec.ts:83. Bug: B2C-1303.

---

### TC-100-APP-002 - Verificar que la pantalla de búsqueda muestra las 3 secciones en orden a pantalla completa

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En la sesión actual se buscó leche y se visitó la PDP de 000000000000675191-UN

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- leche = leche
- 000000000000675191-UN = 000000000000675191-UN
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda a pantalla completa con "Cancelar" a la derecha y muestra, en este orden: ícono + "Tus búsquedas recientes" + "Limpiar", ícono + "Lo último que viste" + "Limpiar" e ícono + "Lo más buscado".

**Resultado esperado**

La pantalla de búsqueda se muestra a pantalla completa con "Cancelar" y las 3 secciones en el orden definido.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): la pantalla de búsqueda se abre a pantalla completa con «Cancelar» y muestra, en orden, «Tus búsquedas recientes» (leche), «Lo último que viste» (Albóndigas Super Pollo) y «Lo más buscado». El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).

**Evidencia**

![Android · Paso 2 — pantalla de busqueda con las 3 secciones](<B2C-100 Evidencias/TC-100-APP-002-android-p02-pantalla-de-busqueda-con-las-3-secciones.png>)

---

### TC-100-APP-003 - Verificar que "Tus búsquedas recientes" muestra los términos de la sesión como chips horizontales

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En la sesión actual se buscaron leche y fillet

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- leche = leche
- fillet = fillet
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Tus búsquedas recientes" con leche y fillet como chips en disposición horizontal.

**Resultado esperado**

La sección "Tus búsquedas recientes" muestra leche y fillet como chips horizontales.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): tras buscar leche y fillet, «Tus búsquedas recientes» muestra los chips «fillet» y «leche» en una misma fila (el más reciente primero). El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).

**Evidencia**

![Android · Paso 2 — busquedas recientes](<B2C-100 Evidencias/TC-100-APP-003-android-p02-busquedas-recientes.png>)

![Android · Estado final](<B2C-100 Evidencias/TC-100-APP-003-android.png>)

---

### TC-100-APP-004 - Verificar que las búsquedas recientes no se conservan al cerrar sesión e iniciar una nueva

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- leche = leche
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario busca leche desde la caja de búsqueda.
4. El sistema registra leche en "Tus búsquedas recientes".
5. El usuario cierra sesión desde Mi Cuenta y vuelve a iniciar sesión con la cuenta daunuruco+comprador@avatar-global.com.
6. El sistema autentica al usuario y carga el Home de la App.
7. El usuario toca la caja de búsqueda del header sin escribir nada.
8. El sistema abre la pantalla de búsqueda sin la sección "Tus búsquedas recientes".

**Resultado esperado**

Tras iniciar una nueva sesión, la pantalla de búsqueda no muestra "Tus búsquedas recientes" ni el término leche.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): tras cerrar sesión e iniciar una nueva, la pantalla de búsqueda solo muestra «Lo más buscado» (con su chip fijo «Leche», que no es una búsqueda reciente); «Tus búsquedas recientes» no aparece.

**Evidencia**

![Android · Paso 2 — leche registrada en busquedas recientes](<B2C-100 Evidencias/TC-100-APP-004-android-p02-leche-registrada-en-busquedas-recientes.png>)

![Android · Paso 4 — busqueda tras cerrar sesion e iniciar una nueva](<B2C-100 Evidencias/TC-100-APP-004-android-p04-busqueda-tras-cerrar-sesion-e-iniciar-una-nueva.png>)

![Android · Estado final](<B2C-100 Evidencias/TC-100-APP-004-android.png>)

---

### TC-100-APP-005 - Verificar que tocar un chip de búsqueda reciente redirige a la SRP del término

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En la sesión actual se buscó leche

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- leche = leche
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Tus búsquedas recientes" con el chip leche.
5. El usuario toca el chip leche.
6. El sistema redirige a la página de resultados de búsqueda de leche.

**Resultado esperado**

Se muestra la página de resultados de búsqueda (SRP) de leche.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): al tocar el chip «leche» de «Tus búsquedas recientes» se abre la SRP «Resultado para “leche”» (9 productos). El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).

**Evidencia**

![Android · Paso 2 — busquedas recientes con el chip leche](<B2C-100 Evidencias/TC-100-APP-005-android-p02-busquedas-recientes-con-el-chip-leche.png>)

![Android · Paso 4 — srp de leche](<B2C-100 Evidencias/TC-100-APP-005-android-p04-srp-de-leche.png>)

---

### TC-100-APP-006 - Verificar que "Lo último que viste" muestra los 6 últimos productos visitados con imagen y nombre

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En la sesión actual se visitaron, en este orden, las PDP de 000000000000675191-UN, 000000000000674797-UN, 000000000000037972-KG, {SKU_PROM_NxM}, {SKU_PROM_2x1}, {SKU_PROM_NxPRECIO} y 000000000000662457-UN

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000000674797-UN = 000000000400254005-UN
- 000000000000037972-KG = 000000000000037972-KG
- {SKU_PROM_NxM} = 000000000641229002-UN
- {SKU_PROM_2x1} = 000000000664214001-UN
- {SKU_PROM_NxPRECIO} = 000000000000666200-UN
- 000000000000662457-UN = 000000000000662457-UN
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Lo último que viste" con 6 productos, cada uno con thumbnail y nombre.

**Resultado esperado**

La sección muestra los últimos 6 productos visitados (000000000000674797-UN a 000000000000662457-UN) con thumbnail y nombre, y no muestra 000000000000675191-UN.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): tras visitar 7 productos en el orden del caso, «Lo último que viste» muestra 6 con imagen y nombre (Carne molida 4% grasa tártaro, Carne molida fundo río alegre, Papas fritas Lay's artesanas, Papas Lay's Stax, Mangos granel y Picado Nestlé Naturnes) y no muestra Albóndigas Super Pollo, el primero visitado. Las visitas se hicieron buscando cada SKU, por lo que además quedaron como búsquedas recientes.

**Evidencia**

![Android · Paso 2 — lo ultimo que viste tras 7 visitas](<B2C-100 Evidencias/TC-100-APP-006-android-p02-lo-ultimo-que-viste-tras-7-visitas.png>)

![Android · Estado final](<B2C-100 Evidencias/TC-100-APP-006-android.png>)

---

### TC-100-APP-007 - Verificar que tocar un producto de "Lo último que viste" redirige a su PDP

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En la sesión actual se visitó la PDP de 000000000000675191-UN

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Lo último que viste" con 000000000000675191-UN.
5. El usuario toca la imagen de 000000000000675191-UN.
6. El sistema redirige a la PDP de 000000000000675191-UN.

**Resultado esperado**

Se muestra la PDP de 000000000000675191-UN.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): al tocar el producto de «Lo último que viste» se abre su PDP (Albóndigas Super Pollo espaciales congeladas 300 g). El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).

**Evidencia**

![Android · Paso 2 — lo ultimo que viste](<B2C-100 Evidencias/TC-100-APP-007-android-p02-lo-ultimo-que-viste.png>)

![Android · Paso 4 — pdp del producto](<B2C-100 Evidencias/TC-100-APP-007-android-p04-pdp-del-producto.png>)

---

### TC-100-APP-008 - Verificar que no se muestra "Tus búsquedas recientes" sin búsquedas en la sesión

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En la sesión actual no se realizaron búsquedas
- En la sesión actual se visitó la PDP de 000000000000675191-UN

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda con "Lo último que viste" y "Lo más buscado", sin la sección "Tus búsquedas recientes".

**Resultado esperado**

La sección "Tus búsquedas recientes" no se muestra y no queda espacio vacío en su lugar.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): sin búsquedas y con una visita a la PDP, la pantalla muestra «Lo último que viste» y «Lo más buscado», sin «Tus búsquedas recientes» y sin espacio vacío. El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).

**Evidencia**

![Android · Paso 2 — busqueda sin busquedas previas y con una visita a pdp](<B2C-100 Evidencias/TC-100-APP-008-android-p02-busqueda-sin-busquedas-previas-y-con-una-visita-a-pdp.png>)

---

### TC-100-APP-009 - Verificar que no se muestra "Lo último que viste" sin visitas a PDP en la sesión

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- La cuenta daunuruco+comprador@avatar-global.com no tiene visitas a PDP
- En la sesión actual se buscó leche

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- leche = leche
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda con "Tus búsquedas recientes" y "Lo más buscado", sin la sección "Lo último que viste".

**Resultado esperado**

La sección "Lo último que viste" no se muestra y no queda espacio vacío en su lugar.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): tras buscar leche sin visitar ninguna PDP, la pantalla muestra «Tus búsquedas recientes» (leche) y «Lo más buscado», sin «Lo último que viste» y sin espacio vacío.

**Evidencia**

![Android · Paso 2 — pantalla de busqueda tras buscar leche](<B2C-100 Evidencias/TC-100-APP-009-android-p02-pantalla-de-busqueda-tras-buscar-leche.png>)

---

### TC-100-APP-010 - Verificar que la pantalla de búsqueda del invitado sin historial muestra solo "Lo más buscado"

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin búsquedas en la sesión

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda y muestra solo la sección ícono + "Lo más buscado".

**Resultado esperado**

La pantalla de búsqueda muestra únicamente "Lo más buscado".

---

### TC-100-APP-011 - Verificar que la pantalla de búsqueda del invitado con historial muestra recientes y "Lo más buscado"

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- En la sesión actual se buscó leche

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- leche = leche

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda y muestra ícono + "Tus búsquedas recientes" + "Limpiar" con leche, seguido de ícono + "Lo más buscado".

**Resultado esperado**

Se muestran "Tus búsquedas recientes" (con leche y "Limpiar") y "Lo más buscado", sin "Lo último que viste".

---

### TC-100-APP-012 - Verificar que "Lo más buscado" muestra 6 chips en máximo 2 filas sin truncar

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
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
- Android = iOS

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Lo más buscado" con 6 chips en disposición horizontal, en un máximo de 2 filas y con el texto completo de cada término.

**Resultado esperado**

"Lo más buscado" muestra 6 chips completos (sin truncar ni ocultar) en un máximo de 2 filas.

---

### TC-100-APP-013 - Verificar que el orden de "Lo más buscado" es el mismo que en Web

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Ambas consultas se realizan en el mismo momento, sobre el mismo ambiente

**Data utilizada**

- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- v1.0.1 = TBD
- Android = iOS

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Lo más buscado" con 6 chips.
5. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en un navegador Desktop y hace clic en la caja de búsqueda.
6. El sistema abre el modal de búsqueda con la sección "Lo más buscado".

**Resultado esperado**

Los 6 términos de "Lo más buscado" y su orden son iguales en la App y en la Web Desktop.

**Resultado obtenido**

Esperado: los 6 términos de «Lo más buscado» y su orden son iguales en la app y en la Web Desktop. Obtenido: app: Helado, Pollo, Leche, Cervezas, Queso, Yogurt; Web: Leche, Arroz, Pan, Aceite, Azúcar, Huevos (solo coincide «Leche», en otra posición). B2C-100.spec.ts:150. Bug: B2C-1304.

---

### TC-100-APP-014 - Verificar que tocar un chip de "Lo más buscado" redirige a la SRP del término

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
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
- Android = iOS

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Lo más buscado".
5. El usuario toca un chip de "Lo más buscado".
6. El sistema redirige a la página de resultados de búsqueda del término tocado.

**Resultado esperado**

Se muestra la SRP del término del chip tocado.

---

### TC-100-APP-015 - Verificar que "Limpiar" elimina "Tus búsquedas recientes" y no reaparece al reabrir

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En la sesión actual se buscó leche

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- leche = leche
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Tus búsquedas recientes" con leche.
5. El usuario toca "Limpiar" en "Tus búsquedas recientes".
6. El sistema borra las búsquedas recientes y oculta la sección.
7. El usuario toca "Cancelar" y vuelve a tocar la caja de búsqueda.
8. El sistema abre la pantalla de búsqueda sin la sección "Tus búsquedas recientes".

**Resultado esperado**

La sección "Tus búsquedas recientes" desaparece al tocar "Limpiar" y no se muestra al reabrir el buscador.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): «Limpiar» elimina «Tus búsquedas recientes»; tras «Cancelar» y reabrir el buscador solo queda «Lo más buscado». El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).

**Evidencia**

![Android · Paso 2 — antes de limpiar](<B2C-100 Evidencias/TC-100-APP-015-android-p02-antes-de-limpiar.png>)

![Android · Paso 4 — tras tocar limpiar](<B2C-100 Evidencias/TC-100-APP-015-android-p04-tras-tocar-limpiar.png>)

![Android · Paso 6 — al reabrir la busqueda](<B2C-100 Evidencias/TC-100-APP-015-android-p06-al-reabrir-la-busqueda.png>)

---

### TC-100-APP-016 - Verificar que "Limpiar" elimina "Lo último que viste" y no reaparece al reabrir

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En la sesión actual se visitó la PDP de 000000000000675191-UN

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Lo último que viste" con 000000000000675191-UN.
5. El usuario toca "Limpiar" en "Lo último que viste".
6. El sistema borra las visitas recientes y oculta la sección.
7. El usuario toca "Cancelar" y vuelve a tocar la caja de búsqueda.
8. El sistema abre la pantalla de búsqueda sin la sección "Lo último que viste".

**Resultado esperado**

La sección "Lo último que viste" desaparece al tocar "Limpiar" y no se muestra al reabrir el buscador.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): «Limpiar» elimina «Lo último que viste»; tras «Cancelar» y reabrir el buscador solo queda «Lo más buscado». El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).

**Evidencia**

![Android · Paso 2 — antes de limpiar](<B2C-100 Evidencias/TC-100-APP-016-android-p02-antes-de-limpiar.png>)

![Android · Paso 4 — tras tocar limpiar](<B2C-100 Evidencias/TC-100-APP-016-android-p04-tras-tocar-limpiar.png>)

![Android · Paso 6 — al reabrir la busqueda](<B2C-100 Evidencias/TC-100-APP-016-android-p06-al-reabrir-la-busqueda.png>)

---

### TC-100-APP-017 - Verificar que con 1 o 2 caracteres se mantiene el contenido por defecto sin búsqueda dinámica

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En la sesión actual se buscó leche y se visitó la PDP de 000000000000675191-UN

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- leche = leche
- 000000000000675191-UN = 000000000000675191-UN
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra "Tus búsquedas recientes", "Lo último que viste" y "Lo más buscado".
5. El usuario escribe los 2 primeros caracteres de leche.
6. El sistema mantiene visibles las 3 secciones por defecto.

**Resultado esperado**

Con 2 caracteres se siguen mostrando las 3 secciones por defecto, sin skeleton loader ni resultados de búsqueda dinámica.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): con 2 caracteres («le») se mantienen las 3 secciones por defecto, sin skeleton ni resultados dinámicos. El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).

**Evidencia**

![Android · Paso 4 — con 2 caracteres](<B2C-100 Evidencias/TC-100-APP-017-android-p04-con-2-caracteres.png>)

---

### TC-100-APP-019 - Verificar que seguir escribiendo actualiza los resultados según el término estabilizado

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
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
- Android = iOS
- leche = leche

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda.
5. El usuario escribe leche de forma continua, sin pausas entre caracteres.
6. El sistema actualiza la pantalla de sugerencias y muestra los resultados de leche.

**Resultado esperado**

Los resultados mostrados corresponden al término completo leche y no a un término parcial intermedio.

---

### TC-100-APP-020 - Verificar que la pantalla de sugerencias muestra título, chips, carrusel y "Ver todos"

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- leche retorna 4 o más productos y al menos 1 sugerencia

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- leche = leche

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El usuario escribe leche en la caja de búsqueda sin tocar "Buscar" en el teclado.
5. El sistema muestra el título "Resultados para 'leche'" + cantidad + "productos", hasta 4 sugerencias de autocompletado como chips, un carrusel de hasta 4 productos con shelf simplificada deslizable hacia la derecha y el botón "Ver todos".

**Resultado esperado**

La pantalla muestra título con cantidad de resultados, hasta 4 chips de sugerencias, carrusel deslizable de hasta 4 productos y "Ver todos".

**Resultado obtenido**

Esperado: el carrusel muestra hasta 4 productos deslizables y «Ver todos». Obtenido: para «leche» (6 productos) el carrusel recorre los 6 productos y termina sin «Ver todos»; el título y los chips sí se muestran. B2C-100.spec.ts:217. Bug: B2C-1305.

---

### TC-100-APP-021 - Verificar que "Cancelar" cierra la búsqueda, limpia el buscador y mantiene la página de origen

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
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
- Android = iOS
- leche = leche

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda a pantalla completa con la opción "Cancelar" a la derecha del buscador.
5. El usuario escribe leche y toca "Cancelar".
6. El sistema cierra la pantalla de búsqueda y vuelve al Home de la App.
7. El usuario toca nuevamente la caja de búsqueda.
8. El sistema abre la pantalla de búsqueda con la caja de texto vacía.

**Resultado esperado**

Al tocar "Cancelar" el usuario vuelve al Home de la App y la caja de búsqueda queda vacía.

---

### TC-100-APP-023 - Verificar que con 0 productos no se renderiza la sección del carrusel

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- ternera retorna 0 productos

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- ternera = ternera

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El usuario escribe ternera en la caja de búsqueda sin tocar "Buscar" en el teclado.
5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.

**Resultado esperado**

La pantalla no muestra la sección de productos (ni título, ni carrusel, ni "Ver todos") y no queda espacio vacío en su lugar.

**Resultado obtenido**

Esperado: con 0 productos no se renderiza la sección de productos, ni siquiera el título. Obtenido: se muestra «Resultado para “ternera” 0 productos». B2C-100.spec.ts:244. Nota: la planilla se contradice con APP-028, que espera justamente ese título con 0 resultados, y la app cumple APP-028; conviene que el equipo aclare cuál es el comportamiento correcto. Bug: no creado — pendiente de que el equipo aclare la contradicción entre APP-023 y APP-028.

---

### TC-100-APP-024 - Verificar que con 1 a 3 productos el carrusel muestra solo los disponibles sin placeholders

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- marraqueta retorna entre 1 y 3 productos

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- marraqueta = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El usuario escribe marraqueta en la caja de búsqueda sin tocar "Buscar" en el teclado.
5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.

**Resultado esperado**

El carrusel muestra solo los productos retornados (1 a 3), alineados desde la izquierda, sin slots vacíos; "Ver todos" solo se muestra si el total de resultados supera los productos visibles.

---

### TC-100-APP-025 - Verificar que con 4 o más productos el carrusel muestra 4 deslizables y "Ver todos"

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- leche retorna 4 o más productos

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- leche = leche

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El usuario escribe leche en la caja de búsqueda sin tocar "Buscar" en el teclado.
5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.
6. El usuario desliza el carrusel de productos hacia la izquierda.
7. El sistema desplaza el carrusel horizontalmente.
8. El usuario toca "Ver todos".
9. El sistema redirige a la SRP de leche.

**Resultado esperado**

El carrusel muestra 4 productos, permite desplazamiento horizontal y "Ver todos" lleva a la SRP de leche.

**Resultado obtenido**

Esperado: el carrusel muestra 4 productos deslizables y «Ver todos» lleva a la SRP. Obtenido: para «leche» (6 productos) el carrusel recorre los 6 productos y termina sin «Ver todos». B2C-100.spec.ts:217. Bug: B2C-1305.

---

### TC-100-APP-027 - Verificar que con 1 a 3 sugerencias se muestran solo las disponibles sin placeholders

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- marraqueta retorna entre 1 y 3 sugerencias de autocompletado

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- marraqueta = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El usuario escribe marraqueta en la caja de búsqueda sin tocar "Buscar" en el teclado.
5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.

**Resultado esperado**

Se muestran solo las sugerencias retornadas (1 a 3) como chips, sin slots vacíos para las faltantes.

---

### TC-100-APP-028 - Verificar que sin productos ni sugerencias se muestra solo el título con 0 resultados

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- ternera retorna 0 productos y 0 sugerencias

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- ternera = ternera

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El usuario escribe ternera en la caja de búsqueda sin tocar "Buscar" en el teclado.
5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.

**Resultado esperado**

La pantalla muestra "Resultados para 'ternera'" con 0 productos, sin sugerencias, sin carrusel y sin "Ver todos".

---

### TC-100-APP-029 - Verificar que al borrar hasta 2 caracteres desde ≥3 la pantalla recupera el contenido por defecto

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- En la sesión actual se buscó leche y se visitó la PDP de 000000000000675191-UN

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- leche = leche
- 000000000000675191-UN = 000000000000675191-UN
- daunuruco+comprador@avatar-global.com = 11.223.344-K

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda y verifica que se muestran las secciones por defecto.
4. El usuario escribe los 3 primeros caracteres de leche y espera que se activen los resultados dinámicos.
5. El usuario borra 1 carácter (quedan 2).
6. El sistema cancela la búsqueda dinámica en curso y restaura el contenido por defecto.

**Resultado esperado**

Al retroceder a 2 caracteres, la pantalla elimina los resultados dinámicos y el skeleton, y vuelve a mostrar "Tus búsquedas recientes", "Lo último que viste" y "Lo más buscado" según el perfil.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): con 3 caracteres («lec») aparecen las sugerencias y los resultados dinámicos; al borrar un carácter (quedan 2) vuelven las 3 secciones por defecto. El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).

**Evidencia**

![Android · Paso 4 — con 3 caracteres resultados dinamicos](<B2C-100 Evidencias/TC-100-APP-029-android-p04-con-3-caracteres-resultados-dinamicos.png>)

![Android · Paso 6 — tras borrar 1 caracter quedan 2](<B2C-100 Evidencias/TC-100-APP-029-android-p06-tras-borrar-1-caracter-quedan-2.png>)

---

### TC-100-APP-018 - Verificar que al tercer carácter se muestra el skeleton y luego los resultados dinámicos

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- leche = leche
- {HERRAMIENTA_PROXY_APP} = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda.
5. El usuario escribe los 3 primeros caracteres de leche y deja de escribir.
6. El sistema muestra un skeleton loader y, al recibir la respuesta, lo reemplaza por las sugerencias de autocompletado y el carrusel de productos.

**Resultado esperado**

Tras el tercer carácter se muestra el skeleton loader y luego los resultados del término parcial, sin tocar "Buscar" en el teclado.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta para ver el skeleton al tercer carácter, y esa herramienta no tiene valor en la data. Acción: declarar la herramienta de proxy (y cómo activar la red lenta en el emulador).

---

### TC-100-APP-022 - Verificar que el buscador no acepta más de 100 caracteres ni muestra error

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-100-pendientes.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- Dejar el pedido en conserjeria del edificio y avisar por telefono al llegar Si no hay nadie tocar el timbre = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda.
5. El usuario pega Dejar el pedido en conserjeria del edificio y avisar por telefono al llegar Si no hay nadie tocar el timbre en la caja de búsqueda.
6. El sistema acepta solo los primeros 100 caracteres.

**Resultado esperado**

La caja de búsqueda contiene exactamente 100 caracteres y no se muestra ningún mensaje de error.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso pega un texto de 107 caracteres en la caja de búsqueda y comprueba que solo acepta 100; en el emulador no se puede pegar (no hay portapapeles accesible) y teclearlo por adb pierde pulsaciones mientras la búsqueda dinámica se actualiza (la caja quedó con «Dejar  el pe» y, en un intento previo, con el texto mutilado), así que no se puede comprobar el tope de 100 caracteres. Acción: repetir con un dispositivo donde se pueda pegar el texto.

**Evidencia**

![Android · Paso 2 — caja de busqueda tras ingresar el texto de 107 caracteres](<B2C-100 Evidencias/TC-100-APP-022-android-p02-caja-de-busqueda-tras-ingresar-el-texto-de-107-caracteres.png>)

![Android · Estado final](<B2C-100 Evidencias/TC-100-APP-022-android.png>)

---

### TC-100-APP-026 - Verificar que sin sugerencias de autocompletado no se renderiza la sección de chips

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-100-pendientes.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- papaya retorna productos y 0 sugerencias de autocompletado

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- papaya = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El usuario escribe papaya en la caja de búsqueda sin tocar "Buscar" en el teclado.
5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.

**Resultado esperado**

La pantalla no muestra la sección de sugerencias (chips) y no queda espacio vacío en su lugar.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso parte de que «papaya» retorna productos y 0 sugerencias de autocompletado; con la app, «Resultado para “papaya”» devuelve 0 productos, así que no se cumple la precondición y no se puede comprobar el comportamiento de la sección de chips. Acción: declarar un término que retorne productos y ninguna sugerencia.

**Evidencia**

![Android · Paso 2 — pantalla de sugerencias con papaya sin tocar buscar](<B2C-100 Evidencias/TC-100-APP-026-android-p02-pantalla-de-sugerencias-con-papaya-sin-tocar-buscar.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "chromium"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Pixel 6 · Android 14 (emulador)"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-100",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-100 APP Test Cases.xlsx",
  "title": "B2C-100 APP",
  "updated_at": "2026-10-27"
 },
 "history": {
  "2026-10-23": [
   "TC-100-M-001"
  ],
  "2026-10-27": [
   "TC-100-APP-001",
   "TC-100-APP-002",
   "TC-100-APP-003",
   "TC-100-APP-004",
   "TC-100-APP-005",
   "TC-100-APP-006",
   "TC-100-APP-007",
   "TC-100-APP-008",
   "TC-100-APP-009",
   "TC-100-APP-010",
   "TC-100-APP-011",
   "TC-100-APP-012",
   "TC-100-APP-013",
   "TC-100-APP-014",
   "TC-100-APP-015",
   "TC-100-APP-016",
   "TC-100-APP-017",
   "TC-100-APP-018",
   "TC-100-APP-019",
   "TC-100-APP-020",
   "TC-100-APP-021",
   "TC-100-APP-022",
   "TC-100-APP-023",
   "TC-100-APP-024",
   "TC-100-APP-025",
   "TC-100-APP-026",
   "TC-100-APP-027",
   "TC-100-APP-028",
   "TC-100-APP-029"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El buscador es accesible desde el tabbar y el header en Mobile; muestra caja de texto con placeholder '¿Qué estás buscando?' e ícono lupa.",
   "form_factor": "mobile",
   "id": "TC-100-M-001",
   "observation": "Obtenido: no existe un tabbar inferior con el ícono de búsqueda en Mobile. Bug: B2C-804. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "observed": "Obtenido: no existe un tabbar inferior con el ícono de búsqueda en Mobile. Bug: B2C-804. Re-ejecutado el 2026-10-23: se reproduce. El bug figura DESCARTADO en Jira (se descartó al revertir corridas de QA, no por corrección).",
   "preconditions": "User type: Guest.\nTienda Unimarc disponible en ambiente de QA.\nViewport: Mobile 390×844.",
   "screenshots": [
    {
     "caption": "Paso 2 — buscador en el header mobile",
     "file": "TC-100-M-001-p02-buscador-en-el-header-mobile.png"
    },
    {
     "caption": "Paso 3 — pie del viewport del home no hay tabbar inferior",
     "file": "TC-100-M-001-p03-pie-del-viewport-del-home-no-hay-tabbar-inferior.png"
    },
    {
     "caption": "Paso 5 — buscador en el header sticky",
     "file": "TC-100-M-001-p05-buscador-en-el-header-sticky.png"
    },
    {
     "caption": "Paso 6 — buscador accesible en la pdp",
     "file": "TC-100-M-001-p06-buscador-accesible-en-la-pdp.png"
    },
    {
     "caption": "Paso 6 — buscador accesible en la plp",
     "file": "TC-100-M-001-p06-buscador-accesible-en-la-plp.png"
    }
   ],
   "spec": "tests/B2C-100.spec.ts",
   "status": "Rechazado",
   "steps": "1. Navegar a la Home con viewport Mobile 390×844.\n2. Verificar que el buscador (caja de texto + ícono lupa) es visible en el header full.\n3. Verificar que la caja de texto muestra el placeholder '¿Qué estás buscando?'.\n4. Hacer scroll hacia abajo hasta que el header sticky se active.\n5. Verificar que el buscador también es accesible desde el header sticky.\n6. Navegar a otra página (PLP, PDP) y verificar que el buscador sigue accesible.",
   "test_data": "- {BASE_URL} = URL base del storefront\n- Credenciales: {COMPRADOR_USER} / {COMPRADOR_PASSWORD}",
   "viewport": "390x844"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El buscador es accesible desde el tabbar, el header full y el header sticky, con placeholder \"¿Qué estás buscando?\" e ícono lupa.",
   "form_factor": "app",
   "id": "TC-100-APP-001",
   "name": "Verificar que el buscador es accesible desde el tabbar, el header full y el header sticky",
   "observed": "Esperado: el header full del Home muestra la caja con el placeholder «¿Qué estás buscando?» y la lupa, y el header sticky también. Obtenido: el Home no muestra ninguna caja de búsqueda, ni al abrirlo ni al desplazarse; el buscador solo se abre desde el tab «Buscar». B2C-100.spec.ts:83. Bug: B2C-1303.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App y muestra en el header full la caja de texto con placeholder \"¿Qué estás buscando?\" y el ícono lupa.\n3. El usuario hace scroll hacia abajo en el Home.\n4. El sistema muestra el header sticky con la caja de texto \"¿Qué estás buscando?\" y el ícono lupa.\n5. El usuario toca la opción de búsqueda del tabbar.\n6. El sistema abre la pantalla de búsqueda.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La pantalla de búsqueda se muestra a pantalla completa con \"Cancelar\" y las 3 secciones en el orden definido.",
   "form_factor": "app",
   "id": "TC-100-APP-002",
   "name": "Verificar que la pantalla de búsqueda muestra las 3 secciones en orden a pantalla completa",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): la pantalla de búsqueda se abre a pantalla completa con «Cancelar» y muestra, en orden, «Tus búsquedas recientes» (leche), «Lo último que viste» (Albóndigas Super Pollo) y «Lo más buscado». El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En la sesión actual se buscó leche y se visitó la PDP de 000000000000675191-UN",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — pantalla de busqueda con las 3 secciones",
     "file": "TC-100-APP-002-android-p02-pantalla-de-busqueda-con-las-3-secciones.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda a pantalla completa con \"Cancelar\" a la derecha y muestra, en este orden: ícono + \"Tus búsquedas recientes\" + \"Limpiar\", ícono + \"Lo último que viste\" + \"Limpiar\" e ícono + \"Lo más buscado\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- leche = leche\n- 000000000000675191-UN = 000000000000675191-UN\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La sección \"Tus búsquedas recientes\" muestra leche y fillet como chips horizontales.",
   "form_factor": "app",
   "id": "TC-100-APP-003",
   "name": "Verificar que \"Tus búsquedas recientes\" muestra los términos de la sesión como chips horizontales",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): tras buscar leche y fillet, «Tus búsquedas recientes» muestra los chips «fillet» y «leche» en una misma fila (el más reciente primero). El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En la sesión actual se buscaron leche y fillet",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — busquedas recientes",
     "file": "TC-100-APP-003-android-p02-busquedas-recientes.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-100-APP-003-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Tus búsquedas recientes\" con leche y fillet como chips en disposición horizontal.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- leche = leche\n- fillet = fillet\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Tras iniciar una nueva sesión, la pantalla de búsqueda no muestra \"Tus búsquedas recientes\" ni el término leche.",
   "form_factor": "app",
   "id": "TC-100-APP-004",
   "name": "Verificar que las búsquedas recientes no se conservan al cerrar sesión e iniciar una nueva",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): tras cerrar sesión e iniciar una nueva, la pantalla de búsqueda solo muestra «Lo más buscado» (con su chip fijo «Leche», que no es una búsqueda reciente); «Tus búsquedas recientes» no aparece.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — leche registrada en busquedas recientes",
     "file": "TC-100-APP-004-android-p02-leche-registrada-en-busquedas-recientes.png"
    },
    {
     "caption": "Android · Paso 4 — busqueda tras cerrar sesion e iniciar una nueva",
     "file": "TC-100-APP-004-android-p04-busqueda-tras-cerrar-sesion-e-iniciar-una-nueva.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-100-APP-004-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario busca leche desde la caja de búsqueda.\n4. El sistema registra leche en \"Tus búsquedas recientes\".\n5. El usuario cierra sesión desde Mi Cuenta y vuelve a iniciar sesión con la cuenta daunuruco+comprador@avatar-global.com.\n6. El sistema autentica al usuario y carga el Home de la App.\n7. El usuario toca la caja de búsqueda del header sin escribir nada.\n8. El sistema abre la pantalla de búsqueda sin la sección \"Tus búsquedas recientes\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- leche = leche\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra la página de resultados de búsqueda (SRP) de leche.",
   "form_factor": "app",
   "id": "TC-100-APP-005",
   "name": "Verificar que tocar un chip de búsqueda reciente redirige a la SRP del término",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): al tocar el chip «leche» de «Tus búsquedas recientes» se abre la SRP «Resultado para “leche”» (9 productos). El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En la sesión actual se buscó leche",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — busquedas recientes con el chip leche",
     "file": "TC-100-APP-005-android-p02-busquedas-recientes-con-el-chip-leche.png"
    },
    {
     "caption": "Android · Paso 4 — srp de leche",
     "file": "TC-100-APP-005-android-p04-srp-de-leche.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Tus búsquedas recientes\" con el chip leche.\n5. El usuario toca el chip leche.\n6. El sistema redirige a la página de resultados de búsqueda de leche.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- leche = leche\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La sección muestra los últimos 6 productos visitados (000000000000674797-UN a 000000000000662457-UN) con thumbnail y nombre, y no muestra 000000000000675191-UN.",
   "form_factor": "app",
   "id": "TC-100-APP-006",
   "name": "Verificar que \"Lo último que viste\" muestra los 6 últimos productos visitados con imagen y nombre",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): tras visitar 7 productos en el orden del caso, «Lo último que viste» muestra 6 con imagen y nombre (Carne molida 4% grasa tártaro, Carne molida fundo río alegre, Papas fritas Lay's artesanas, Papas Lay's Stax, Mangos granel y Picado Nestlé Naturnes) y no muestra Albóndigas Super Pollo, el primero visitado. Las visitas se hicieron buscando cada SKU, por lo que además quedaron como búsquedas recientes.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En la sesión actual se visitaron, en este orden, las PDP de 000000000000675191-UN, 000000000000674797-UN, 000000000000037972-KG, {SKU_PROM_NxM}, {SKU_PROM_2x1}, {SKU_PROM_NxPRECIO} y 000000000000662457-UN",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — lo ultimo que viste tras 7 visitas",
     "file": "TC-100-APP-006-android-p02-lo-ultimo-que-viste-tras-7-visitas.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-100-APP-006-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Lo último que viste\" con 6 productos, cada uno con thumbnail y nombre.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000000674797-UN = 000000000400254005-UN\n- 000000000000037972-KG = 000000000000037972-KG\n- {SKU_PROM_NxM} = 000000000641229002-UN\n- {SKU_PROM_2x1} = 000000000664214001-UN\n- {SKU_PROM_NxPRECIO} = 000000000000666200-UN\n- 000000000000662457-UN = 000000000000662457-UN\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra la PDP de 000000000000675191-UN.",
   "form_factor": "app",
   "id": "TC-100-APP-007",
   "name": "Verificar que tocar un producto de \"Lo último que viste\" redirige a su PDP",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): al tocar el producto de «Lo último que viste» se abre su PDP (Albóndigas Super Pollo espaciales congeladas 300 g). El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En la sesión actual se visitó la PDP de 000000000000675191-UN",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — lo ultimo que viste",
     "file": "TC-100-APP-007-android-p02-lo-ultimo-que-viste.png"
    },
    {
     "caption": "Android · Paso 4 — pdp del producto",
     "file": "TC-100-APP-007-android-p04-pdp-del-producto.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Lo último que viste\" con 000000000000675191-UN.\n5. El usuario toca la imagen de 000000000000675191-UN.\n6. El sistema redirige a la PDP de 000000000000675191-UN.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La sección \"Tus búsquedas recientes\" no se muestra y no queda espacio vacío en su lugar.",
   "form_factor": "app",
   "id": "TC-100-APP-008",
   "name": "Verificar que no se muestra \"Tus búsquedas recientes\" sin búsquedas en la sesión",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): sin búsquedas y con una visita a la PDP, la pantalla muestra «Lo último que viste» y «Lo más buscado», sin «Tus búsquedas recientes» y sin espacio vacío. El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En la sesión actual no se realizaron búsquedas\n- En la sesión actual se visitó la PDP de 000000000000675191-UN",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — busqueda sin busquedas previas y con una visita a pdp",
     "file": "TC-100-APP-008-android-p02-busqueda-sin-busquedas-previas-y-con-una-visita-a-pdp.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda con \"Lo último que viste\" y \"Lo más buscado\", sin la sección \"Tus búsquedas recientes\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La sección \"Lo último que viste\" no se muestra y no queda espacio vacío en su lugar.",
   "form_factor": "app",
   "id": "TC-100-APP-009",
   "name": "Verificar que no se muestra \"Lo último que viste\" sin visitas a PDP en la sesión",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): tras buscar leche sin visitar ninguna PDP, la pantalla muestra «Tus búsquedas recientes» (leche) y «Lo más buscado», sin «Lo último que viste» y sin espacio vacío.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- La cuenta daunuruco+comprador@avatar-global.com no tiene visitas a PDP\n- En la sesión actual se buscó leche",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — pantalla de busqueda tras buscar leche",
     "file": "TC-100-APP-009-android-p02-pantalla-de-busqueda-tras-buscar-leche.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda con \"Tus búsquedas recientes\" y \"Lo más buscado\", sin la sección \"Lo último que viste\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- leche = leche\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La pantalla de búsqueda muestra únicamente \"Lo más buscado\".",
   "form_factor": "app",
   "id": "TC-100-APP-010",
   "name": "Verificar que la pantalla de búsqueda del invitado sin historial muestra solo \"Lo más buscado\"",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin búsquedas en la sesión",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda y muestra solo la sección ícono + \"Lo más buscado\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestran \"Tus búsquedas recientes\" (con leche y \"Limpiar\") y \"Lo más buscado\", sin \"Lo último que viste\".",
   "form_factor": "app",
   "id": "TC-100-APP-011",
   "name": "Verificar que la pantalla de búsqueda del invitado con historial muestra recientes y \"Lo más buscado\"",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- En la sesión actual se buscó leche",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda y muestra ícono + \"Tus búsquedas recientes\" + \"Limpiar\" con leche, seguido de ícono + \"Lo más buscado\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- leche = leche"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "\"Lo más buscado\" muestra 6 chips completos (sin truncar ni ocultar) en un máximo de 2 filas.",
   "form_factor": "app",
   "id": "TC-100-APP-012",
   "name": "Verificar que \"Lo más buscado\" muestra 6 chips en máximo 2 filas sin truncar",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Lo más buscado\" con 6 chips en disposición horizontal, en un máximo de 2 filas y con el texto completo de cada término.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Los 6 términos de \"Lo más buscado\" y su orden son iguales en la App y en la Web Desktop.",
   "form_factor": "app",
   "id": "TC-100-APP-013",
   "name": "Verificar que el orden de \"Lo más buscado\" es el mismo que en Web",
   "observed": "Esperado: los 6 términos de «Lo más buscado» y su orden son iguales en la app y en la Web Desktop. Obtenido: app: Helado, Pollo, Leche, Cervezas, Queso, Yogurt; Web: Leche, Arroz, Pan, Aceite, Azúcar, Huevos (solo coincide «Leche», en otra posición). B2C-100.spec.ts:150. Bug: B2C-1304.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Ambas consultas se realizan en el mismo momento, sobre el mismo ambiente",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Lo más buscado\" con 6 chips.\n5. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ en un navegador Desktop y hace clic en la caja de búsqueda.\n6. El sistema abre el modal de búsqueda con la sección \"Lo más buscado\".",
   "test_data": "- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- v1.0.1 = TBD\n- Android = iOS"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra la SRP del término del chip tocado.",
   "form_factor": "app",
   "id": "TC-100-APP-014",
   "name": "Verificar que tocar un chip de \"Lo más buscado\" redirige a la SRP del término",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Lo más buscado\".\n5. El usuario toca un chip de \"Lo más buscado\".\n6. El sistema redirige a la página de resultados de búsqueda del término tocado.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La sección \"Tus búsquedas recientes\" desaparece al tocar \"Limpiar\" y no se muestra al reabrir el buscador.",
   "form_factor": "app",
   "id": "TC-100-APP-015",
   "name": "Verificar que \"Limpiar\" elimina \"Tus búsquedas recientes\" y no reaparece al reabrir",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): «Limpiar» elimina «Tus búsquedas recientes»; tras «Cancelar» y reabrir el buscador solo queda «Lo más buscado». El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En la sesión actual se buscó leche",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — antes de limpiar",
     "file": "TC-100-APP-015-android-p02-antes-de-limpiar.png"
    },
    {
     "caption": "Android · Paso 4 — tras tocar limpiar",
     "file": "TC-100-APP-015-android-p04-tras-tocar-limpiar.png"
    },
    {
     "caption": "Android · Paso 6 — al reabrir la busqueda",
     "file": "TC-100-APP-015-android-p06-al-reabrir-la-busqueda.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Tus búsquedas recientes\" con leche.\n5. El usuario toca \"Limpiar\" en \"Tus búsquedas recientes\".\n6. El sistema borra las búsquedas recientes y oculta la sección.\n7. El usuario toca \"Cancelar\" y vuelve a tocar la caja de búsqueda.\n8. El sistema abre la pantalla de búsqueda sin la sección \"Tus búsquedas recientes\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- leche = leche\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La sección \"Lo último que viste\" desaparece al tocar \"Limpiar\" y no se muestra al reabrir el buscador.",
   "form_factor": "app",
   "id": "TC-100-APP-016",
   "name": "Verificar que \"Limpiar\" elimina \"Lo último que viste\" y no reaparece al reabrir",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): «Limpiar» elimina «Lo último que viste»; tras «Cancelar» y reabrir el buscador solo queda «Lo más buscado». El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En la sesión actual se visitó la PDP de 000000000000675191-UN",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — antes de limpiar",
     "file": "TC-100-APP-016-android-p02-antes-de-limpiar.png"
    },
    {
     "caption": "Android · Paso 4 — tras tocar limpiar",
     "file": "TC-100-APP-016-android-p04-tras-tocar-limpiar.png"
    },
    {
     "caption": "Android · Paso 6 — al reabrir la busqueda",
     "file": "TC-100-APP-016-android-p06-al-reabrir-la-busqueda.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Lo último que viste\" con 000000000000675191-UN.\n5. El usuario toca \"Limpiar\" en \"Lo último que viste\".\n6. El sistema borra las visitas recientes y oculta la sección.\n7. El usuario toca \"Cancelar\" y vuelve a tocar la caja de búsqueda.\n8. El sistema abre la pantalla de búsqueda sin la sección \"Lo último que viste\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Con 2 caracteres se siguen mostrando las 3 secciones por defecto, sin skeleton loader ni resultados de búsqueda dinámica.",
   "form_factor": "app",
   "id": "TC-100-APP-017",
   "name": "Verificar que con 1 o 2 caracteres se mantiene el contenido por defecto sin búsqueda dinámica",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): con 2 caracteres («le») se mantienen las 3 secciones por defecto, sin skeleton ni resultados dinámicos. El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En la sesión actual se buscó leche y se visitó la PDP de 000000000000675191-UN",
   "screenshots": [
    {
     "caption": "Android · Paso 4 — con 2 caracteres",
     "file": "TC-100-APP-017-android-p04-con-2-caracteres.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra \"Tus búsquedas recientes\", \"Lo último que viste\" y \"Lo más buscado\".\n5. El usuario escribe los 2 primeros caracteres de leche.\n6. El sistema mantiene visibles las 3 secciones por defecto.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- leche = leche\n- 000000000000675191-UN = 000000000000675191-UN\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Los resultados mostrados corresponden al término completo leche y no a un término parcial intermedio.",
   "form_factor": "app",
   "id": "TC-100-APP-019",
   "name": "Verificar que seguir escribiendo actualiza los resultados según el término estabilizado",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda.\n5. El usuario escribe leche de forma continua, sin pausas entre caracteres.\n6. El sistema actualiza la pantalla de sugerencias y muestra los resultados de leche.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- leche = leche"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La pantalla muestra título con cantidad de resultados, hasta 4 chips de sugerencias, carrusel deslizable de hasta 4 productos y \"Ver todos\".",
   "form_factor": "app",
   "id": "TC-100-APP-020",
   "name": "Verificar que la pantalla de sugerencias muestra título, chips, carrusel y \"Ver todos\"",
   "observed": "Esperado: el carrusel muestra hasta 4 productos deslizables y «Ver todos». Obtenido: para «leche» (6 productos) el carrusel recorre los 6 productos y termina sin «Ver todos»; el título y los chips sí se muestran. B2C-100.spec.ts:217. Bug: B2C-1305.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- leche retorna 4 o más productos y al menos 1 sugerencia",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El usuario escribe leche en la caja de búsqueda sin tocar \"Buscar\" en el teclado.\n5. El sistema muestra el título \"Resultados para 'leche'\" + cantidad + \"productos\", hasta 4 sugerencias de autocompletado como chips, un carrusel de hasta 4 productos con shelf simplificada deslizable hacia la derecha y el botón \"Ver todos\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- leche = leche"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Al tocar \"Cancelar\" el usuario vuelve al Home de la App y la caja de búsqueda queda vacía.",
   "form_factor": "app",
   "id": "TC-100-APP-021",
   "name": "Verificar que \"Cancelar\" cierra la búsqueda, limpia el buscador y mantiene la página de origen",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda a pantalla completa con la opción \"Cancelar\" a la derecha del buscador.\n5. El usuario escribe leche y toca \"Cancelar\".\n6. El sistema cierra la pantalla de búsqueda y vuelve al Home de la App.\n7. El usuario toca nuevamente la caja de búsqueda.\n8. El sistema abre la pantalla de búsqueda con la caja de texto vacía.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- leche = leche"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La pantalla no muestra la sección de productos (ni título, ni carrusel, ni \"Ver todos\") y no queda espacio vacío en su lugar.",
   "form_factor": "app",
   "id": "TC-100-APP-023",
   "name": "Verificar que con 0 productos no se renderiza la sección del carrusel",
   "observed": "Esperado: con 0 productos no se renderiza la sección de productos, ni siquiera el título. Obtenido: se muestra «Resultado para “ternera” 0 productos». B2C-100.spec.ts:244. Nota: la planilla se contradice con APP-028, que espera justamente ese título con 0 resultados, y la app cumple APP-028; conviene que el equipo aclare cuál es el comportamiento correcto. Bug: no creado — pendiente de que el equipo aclare la contradicción entre APP-023 y APP-028.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- ternera retorna 0 productos",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El usuario escribe ternera en la caja de búsqueda sin tocar \"Buscar\" en el teclado.\n5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- ternera = ternera"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El carrusel muestra solo los productos retornados (1 a 3), alineados desde la izquierda, sin slots vacíos; \"Ver todos\" solo se muestra si el total de resultados supera los productos visibles.",
   "form_factor": "app",
   "id": "TC-100-APP-024",
   "name": "Verificar que con 1 a 3 productos el carrusel muestra solo los disponibles sin placeholders",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- marraqueta retorna entre 1 y 3 productos",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El usuario escribe marraqueta en la caja de búsqueda sin tocar \"Buscar\" en el teclado.\n5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- marraqueta = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El carrusel muestra 4 productos, permite desplazamiento horizontal y \"Ver todos\" lleva a la SRP de leche.",
   "form_factor": "app",
   "id": "TC-100-APP-025",
   "name": "Verificar que con 4 o más productos el carrusel muestra 4 deslizables y \"Ver todos\"",
   "observed": "Esperado: el carrusel muestra 4 productos deslizables y «Ver todos» lleva a la SRP. Obtenido: para «leche» (6 productos) el carrusel recorre los 6 productos y termina sin «Ver todos». B2C-100.spec.ts:217. Bug: B2C-1305.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- leche retorna 4 o más productos",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El usuario escribe leche en la caja de búsqueda sin tocar \"Buscar\" en el teclado.\n5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.\n6. El usuario desliza el carrusel de productos hacia la izquierda.\n7. El sistema desplaza el carrusel horizontalmente.\n8. El usuario toca \"Ver todos\".\n9. El sistema redirige a la SRP de leche.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- leche = leche"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestran solo las sugerencias retornadas (1 a 3) como chips, sin slots vacíos para las faltantes.",
   "form_factor": "app",
   "id": "TC-100-APP-027",
   "name": "Verificar que con 1 a 3 sugerencias se muestran solo las disponibles sin placeholders",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- marraqueta retorna entre 1 y 3 sugerencias de autocompletado",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El usuario escribe marraqueta en la caja de búsqueda sin tocar \"Buscar\" en el teclado.\n5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- marraqueta = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La pantalla muestra \"Resultados para 'ternera'\" con 0 productos, sin sugerencias, sin carrusel y sin \"Ver todos\".",
   "form_factor": "app",
   "id": "TC-100-APP-028",
   "name": "Verificar que sin productos ni sugerencias se muestra solo el título con 0 resultados",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- ternera retorna 0 productos y 0 sugerencias",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El usuario escribe ternera en la caja de búsqueda sin tocar \"Buscar\" en el teclado.\n5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- ternera = ternera"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Al retroceder a 2 caracteres, la pantalla elimina los resultados dinámicos y el skeleton, y vuelve a mostrar \"Tus búsquedas recientes\", \"Lo último que viste\" y \"Lo más buscado\" según el perfil.",
   "form_factor": "app",
   "id": "TC-100-APP-029",
   "name": "Verificar que al borrar hasta 2 caracteres desde ≥3 la pantalla recupera el contenido por defecto",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): con 3 caracteres («lec») aparecen las sugerencias y los resultados dinámicos; al borrar un carácter (quedan 2) vuelven las 3 secciones por defecto. El historial «de la sesión» vive en memoria de la app, por lo que cada caso arma el suyo antes de abrir el buscador (tab Buscar).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- En la sesión actual se buscó leche y se visitó la PDP de 000000000000675191-UN",
   "screenshots": [
    {
     "caption": "Android · Paso 4 — con 3 caracteres resultados dinamicos",
     "file": "TC-100-APP-029-android-p04-con-3-caracteres-resultados-dinamicos.png"
    },
    {
     "caption": "Android · Paso 6 — tras borrar 1 caracter quedan 2",
     "file": "TC-100-APP-029-android-p06-tras-borrar-1-caracter-quedan-2.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda y verifica que se muestran las secciones por defecto.\n4. El usuario escribe los 3 primeros caracteres de leche y espera que se activen los resultados dinámicos.\n5. El usuario borra 1 carácter (quedan 2).\n6. El sistema cancela la búsqueda dinámica en curso y restaura el contenido por defecto.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- leche = leche\n- 000000000000675191-UN = 000000000000675191-UN\n- daunuruco+comprador@avatar-global.com = 11.223.344-K"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Tras el tercer carácter se muestra el skeleton loader y luego los resultados del término parcial, sin tocar \"Buscar\" en el teclado.",
   "form_factor": "app",
   "id": "TC-100-APP-018",
   "name": "Verificar que al tercer carácter se muestra el skeleton y luego los resultados dinámicos",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta para ver el skeleton al tercer carácter, y esa herramienta no tiene valor en la data. Acción: declarar la herramienta de proxy (y cómo activar la red lenta en el emulador).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda.\n5. El usuario escribe los 3 primeros caracteres de leche y deja de escribir.\n6. El sistema muestra un skeleton loader y, al recibir la respuesta, lo reemplaza por las sugerencias de autocompletado y el carrusel de productos.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- leche = leche\n- {HERRAMIENTA_PROXY_APP} = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La caja de búsqueda contiene exactamente 100 caracteres y no se muestra ningún mensaje de error.",
   "form_factor": "app",
   "id": "TC-100-APP-022",
   "name": "Verificar que el buscador no acepta más de 100 caracteres ni muestra error",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso pega un texto de 107 caracteres en la caja de búsqueda y comprueba que solo acepta 100; en el emulador no se puede pegar (no hay portapapeles accesible) y teclearlo por adb pierde pulsaciones mientras la búsqueda dinámica se actualiza (la caja quedó con «Dejar  el pe» y, en un intento previo, con el texto mutilado), así que no se puede comprobar el tope de 100 caracteres. Acción: repetir con un dispositivo donde se pueda pegar el texto.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — caja de busqueda tras ingresar el texto de 107 caracteres",
     "file": "TC-100-APP-022-android-p02-caja-de-busqueda-tras-ingresar-el-texto-de-107-caracteres.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-100-APP-022-android.png"
    }
   ],
   "spec": "tests-app/B2C-100-pendientes.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda.\n5. El usuario pega Dejar el pedido en conserjeria del edificio y avisar por telefono al llegar Si no hay nadie tocar el timbre en la caja de búsqueda.\n6. El sistema acepta solo los primeros 100 caracteres.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- Dejar el pedido en conserjeria del edificio y avisar por telefono al llegar Si no hay nadie tocar el timbre = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La pantalla no muestra la sección de sugerencias (chips) y no queda espacio vacío en su lugar.",
   "form_factor": "app",
   "id": "TC-100-APP-026",
   "name": "Verificar que sin sugerencias de autocompletado no se renderiza la sección de chips",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso parte de que «papaya» retorna productos y 0 sugerencias de autocompletado; con la app, «Resultado para “papaya”» devuelve 0 productos, así que no se cumple la precondición y no se puede comprobar el comportamiento de la sección de chips. Acción: declarar un término que retorne productos y ninguna sugerencia.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- papaya retorna productos y 0 sugerencias de autocompletado",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — pantalla de sugerencias con papaya sin tocar buscar",
     "file": "TC-100-APP-026-android-p02-pantalla-de-sugerencias-con-papaya-sin-tocar-buscar.png"
    }
   ],
   "spec": "tests-app/B2C-100-pendientes.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El usuario escribe papaya en la caja de búsqueda sin tocar \"Buscar\" en el teclado.\n5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- papaya = TBD"
  }
 ]
}
-->
