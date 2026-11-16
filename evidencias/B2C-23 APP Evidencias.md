# B2C-23 APP - NavBar - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-23 APP |
| Última actualización | 2026-11-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc (DEV) · cl.smu.unimarcapp.sfcc.qa |
| Dispositivo Android | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-23 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 17 |
| Aprobado | 6 |
| Bloqueado | 1 |
| **Total** | **24** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-16 | 24 | TC-B2C23-APP-001, TC-B2C23-APP-002, TC-B2C23-APP-003, TC-B2C23-APP-004, TC-B2C23-APP-005, TC-B2C23-APP-006, TC-B2C23-APP-007, TC-B2C23-APP-008, TC-B2C23-APP-009, TC-B2C23-APP-010, TC-B2C23-APP-011, TC-B2C23-APP-012, TC-B2C23-APP-013, TC-B2C23-APP-014, TC-B2C23-APP-015, TC-B2C23-APP-016, TC-B2C23-APP-017, TC-B2C23-APP-018, TC-B2C23-APP-019, TC-B2C23-APP-020, TC-B2C23-APP-021, TC-B2C23-APP-022, TC-B2C23-APP-023, TC-B2C23-APP-024 |

## Detalle por caso de prueba

### TC-B2C23-APP-001 - Estructura y composicion del NavBar

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |
| Spec | tests-app/B2C-23.spec.ts:26 |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: cualquier pantalla antes del checkout

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Navegar a cualquier pantalla de la APP antes del checkout.
2. Verificar la posicion, el ancho y el contenido del NavBar.

**Resultado esperado**

El NavBar se muestra fijo en la parte superior, ocupando el ancho completo, con la seccion de Metodo de entrega, el boton Membresia y la seccion de accesos directos.

**Resultado obtenido**

El NavBar está fijo arriba (y=77), desde el borde izquierdo y a todo el ancho (1080 px), con la sección Método de entrega, el botón 'Suscríbete a UNIMARC' y los accesos directos Ofertas, Marketplace y Locales y horarios.

**Observación**

Android OK. La fila no declara {ANDROID_PACKAGE}: se usó la app ya instalada.

**Evidencia**

![Android · Paso 1 — home con el navbar](<B2C-23 APP Evidencias/TC-B2C23-APP-001-android-p01-home-con-el-navbar.png>)

![Android · Paso 2 — navbar con metodo de entrega membresia y accesos](<B2C-23 APP Evidencias/TC-B2C23-APP-001-android-p02-navbar-con-metodo-de-entrega-membresia-y-accesos.png>)

---

### TC-B2C23-APP-002 - Estado sin metodo de entrega seleccionado

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |
| Spec | tests-app/B2C-23.spec.ts:49 |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: sin metodo de entrega ni direccion seleccionados

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Sin metodo de entrega configurado, navegar a cualquier pantalla de la APP.
2. Verificar el contenido de la seccion de Metodo de entrega del NavBar.

**Resultado esperado**

El NavBar muestra el icono, el texto 'Elige una forma de entrega' y el icono chevron.

**Resultado obtenido**

Invitado sin método de entrega: icono de moto, 'Elige una forma de entrega' y el icono chevron a la derecha (la planilla ahora espera chevron; la versión anterior pedía '+').

**Observación**

Android OK. La fila no declara {ANDROID_PACKAGE}: se usó la app ya instalada.

**Evidencia**

![Android · Paso 1 — home sin metodo de entrega](<B2C-23 APP Evidencias/TC-B2C23-APP-002-android-p01-home-sin-metodo-de-entrega.png>)

![Android · Paso 2 — seccion metodo de entrega](<B2C-23 APP Evidencias/TC-B2C23-APP-002-android-p02-seccion-metodo-de-entrega.png>)

---

### TC-B2C23-APP-003 - Estado con metodo de entrega activo

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: metodo de entrega y direccion configurados

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Configurar un metodo de entrega con direccion.
2. Navegar a cualquier pantalla de la APP.
3. Verificar el contenido de la seccion de Metodo de entrega del NavBar.

**Resultado esperado**

El NavBar muestra el icono del metodo activo, la direccion o tienda seleccionada, y el label de precio o condicion de despacho.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita un método de entrega con dirección configurado y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.

---

### TC-B2C23-APP-004 - Actualizacion inmediata del NavBar al cambiar la configuracion de entrega

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: metodo de entrega ya configurado

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Con un metodo de entrega configurado, modificar la direccion (o el metodo/tienda).
2. Confirmar el cambio.
3. Verificar el contenido del NavBar sin recargar la pantalla.

**Resultado esperado**

El NavBar refleja inmediatamente el nuevo metodo, direccion/tienda y condicion de despacho, sin necesidad de recargar la pantalla.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita un método de entrega configurado y una dirección o tienda a la cual cambiar y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.

---

### TC-B2C23-APP-005 - Tap en el NavBar abre el popup Metodo de entrega

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |
| Spec | tests-app/B2C-23.spec.ts:66 |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: cualquier pantalla

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Navegar a cualquier pantalla de la APP.
2. Tocar sobre el NavBar.
3. Verificar la apertura del popup.

**Resultado esperado**

Se abre el popup 'Metodo de entrega'.

**Resultado obtenido**

El tap sobre el NavBar abre el popup de método de entrega ('Despacho a domicilio' / 'Retiro en tienda').

**Observación**

Android OK. La fila no declara {ANDROID_PACKAGE}: se usó la app ya instalada.

**Evidencia**

![Android · Paso 1 — home con el navbar](<B2C-23 APP Evidencias/TC-B2C23-APP-005-android-p01-home-con-el-navbar.png>)

![Android · Paso 3 — popup metodo de entrega](<B2C-23 APP Evidencias/TC-B2C23-APP-005-android-p03-popup-metodo-de-entrega.png>)

---

### TC-B2C23-APP-006 - El NavBar permanece visible durante el scroll vertical

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |
| Spec | tests-app/B2C-23.spec.ts:82 |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: pantalla con contenido scrolleable

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Navegar a una pantalla con contenido scrolleable.
2. Hacer scroll vertical hacia abajo y hacia arriba.
3. Verificar la visibilidad del NavBar durante el scroll.

**Resultado esperado**

El NavBar permanece visible en la parte superior durante todo el scroll vertical.

**Resultado obtenido**

Tras desplazar el Home hacia abajo (sale 'Los más vendidos') y volver arriba, el NavBar sigue visible en la misma posición.

**Observación**

Android OK. La fila no declara {ANDROID_PACKAGE}: se usó la app ya instalada.

**Evidencia**

![Android · Paso 1 — home arriba](<B2C-23 APP Evidencias/TC-B2C23-APP-006-android-p01-home-arriba.png>)

![Android · Paso 2 — navbar visible con el home desplazado](<B2C-23 APP Evidencias/TC-B2C23-APP-006-android-p02-navbar-visible-con-el-home-desplazado.png>)

![Android · Paso 3 — navbar visible tras volver arriba](<B2C-23 APP Evidencias/TC-B2C23-APP-006-android-p03-navbar-visible-tras-volver-arriba.png>)

---

### TC-B2C23-APP-007 - El NavBar se oculta durante el flujo de Checkout

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Guest / Registrado
- Plataforma: App iOS/Android
- Ubicacion: Carrito, datos de envio, pago o confirmacion de pedido

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Ingresar al flujo de Checkout.
2. Navegar por cada una de sus pantallas.
3. Verificar la ausencia del NavBar en cada una.

**Resultado esperado**

El NavBar no se muestra en ninguna pantalla del flujo de Checkout.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita llegar al Checkout (productos en el carro sobre el mínimo de compra) y la columna 'Test data' no declara SKU ni cuenta. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.

---

### TC-B2C23-APP-008 - El NavBar se oculta en paginas especiales (Splash, Login/SSO, Cortina de mantencion)

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |
| Spec | tests-app/B2C-23.spec.ts:106 |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Splash, Login/SSO o Cortina de mantencion

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Acceder a la pantalla de Splash.
2. Verificar la ausencia del NavBar.
3. Repetir la verificacion en Login/SSO.
4. Repetir la verificacion en la Cortina de mantencion (si aplica).

**Resultado esperado**

El NavBar no se muestra en ninguna de las paginas especiales: Splash, Login/SSO y Cortina de mantencion.

**Resultado obtenido**

Splash (logo Unimarc sobre fondo de pomelos) sin NavBar; Login/SSO (Mi cuenta → Iniciar sesión, ahora por correo) sin NavBar. Cortina de mantención no activa en el ambiente: no aplica.

**Observación**

Android OK. La fila no declara {ANDROID_PACKAGE}: se usó la app ya instalada.

**Evidencia**

![Android · Paso 1 — splash sin navbar](<B2C-23 APP Evidencias/TC-B2C23-APP-008-android-p01-splash-sin-navbar.png>)

![Android · Paso 3 — login sin navbar](<B2C-23 APP Evidencias/TC-B2C23-APP-008-android-p03-login-sin-navbar.png>)

---

### TC-B2C23-APP-009 - El NavBar es visible en paginas de error (404, 500)

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: pagina de error 404 o 500

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Provocar (o navegar a) una pagina de error 404 o 500.
2. Verificar la visibilidad del NavBar.

**Resultado esperado**

El NavBar se muestra visible en la pagina de error.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: la app no ofrece una ruta para provocar una página 404/500 y el TC no declara cómo llegar a ella. Acción: definir en el TC cómo alcanzar la página de error en la app (deep link o ruta).

---

### TC-B2C23-APP-010 - El NavBar reemplaza su presentacion por el buscador en la PLP N1

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |
| Spec | tests-app/B2C-23.spec.ts:156 |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: PLP N1 de una categoria

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Navegar a la PLP N1 de una categoria.
2. Verificar el contenido del NavBar.

**Resultado esperado**

El NavBar muestra '<' (Atras) y el buscador con el placeholder '\u00bfQue estas buscando?', en lugar de su presentacion habitual.

**Resultado obtenido**

Menú Categorías → primera N1: la PLP N1 muestra '<' (Atrás) y el buscador '¿Qué estás buscando?' en lugar del NavBar habitual.

**Observación**

Android OK. La fila no declara {ANDROID_PACKAGE}: se usó la app ya instalada.

**Evidencia**

![Android · Paso 2 — plp n1 con atras y buscador](<B2C-23 APP Evidencias/TC-B2C23-APP-010-android-p02-plp-n1-con-atras-y-buscador.png>)

---

### TC-B2C23-APP-011 - NavBar con direccion guardada sin cobertura de despacho

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: direccion activa sin cobertura de despacho

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Configurar una direccion activa sin cobertura de despacho.
2. Navegar a cualquier pantalla de la APP.
3. Verificar el contenido del NavBar y el color de la etiqueta.

**Resultado esperado**

El NavBar muestra el icono, la direccion (truncada) y la etiqueta 'Sin cobertura' en color de alerta.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita una dirección sin cobertura de despacho y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.

---

### TC-B2C23-APP-012 - NavBar con direccion guardada sin ventanas de despacho disponibles

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: direccion activa con cobertura, sin ventanas horarias disponibles (slots completos o sin configuracion)

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Configurar una direccion activa con cobertura pero sin ventanas horarias disponibles.
2. Navegar a cualquier pantalla de la APP.
3. Verificar el contenido del NavBar.

**Resultado esperado**

El NavBar muestra el icono, la direccion (truncada) y la etiqueta 'Sin horarios disponibles'.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita una dirección con cobertura y sin ventanas horarias disponibles y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.

---

### TC-B2C23-APP-013 - Etiqueta 'Gratis' por campana comercial activa

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: campana comercial activa que otorga despacho gratuito

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Configurar un contexto con campana comercial activa de despacho gratuito.
2. Navegar a cualquier pantalla de la APP.
3. Verificar la etiqueta mostrada en el NavBar.

**Resultado esperado**

El NavBar muestra la etiqueta 'Gratis'.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita una campaña comercial activa de despacho gratuito y una dirección donde aplique y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.

---

### TC-B2C23-APP-014 - Etiqueta 'Gratis' con icono diamante por membresia Club Unimarc

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Registrado (con membresia)
- Plataforma: App iOS/Android
- Required data state: membresia Club Unimarc activa que otorga despacho gratuito

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Iniciar sesion con un cliente con membresia Club Unimarc activa.
2. Navegar a cualquier pantalla de la APP.
3. Verificar la etiqueta mostrada en el NavBar.

**Resultado esperado**

El NavBar muestra el icono diamante junto con la etiqueta 'Gratis'.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso inicia sesión con un cliente con membresía Club Unimarc activa y la fila no declara el token de esa cuenta. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.

---

### TC-B2C23-APP-015 - Etiqueta de despacho express con icono flash y monto

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: despacho express disponible y seleccionado

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Configurar y seleccionar despacho express disponible.
2. Navegar a cualquier pantalla de la APP.
3. Verificar la etiqueta mostrada en el NavBar.

**Resultado esperado**

El NavBar muestra el icono flash junto con el monto del despacho express.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita una dirección con despacho express disponible y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.

---

### TC-B2C23-APP-016 - Etiqueta de despacho estandar con costo

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: despacho estandar con costo, sin gratuidad ni express aplicable

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Configurar un contexto con despacho estandar y costo, sin gratuidad ni express aplicable.
2. Navegar a cualquier pantalla de la APP.
3. Verificar la etiqueta mostrada en el NavBar.

**Resultado esperado**

El NavBar muestra el monto del despacho estandar, formateado con separador de miles.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita una dirección con despacho estándar con costo (sin gratuidad ni express) y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.

---

### TC-B2C23-APP-017 - Prioridad maxima: 'Sin cobertura' prevalece sobre cualquier otra condicion aplicable

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Registrado
- Plataforma: App iOS/Android
- Required data state: direccion sin cobertura, y simultaneamente condiciones de membresia/campana/express tecnicamente aplicables

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Configurar una direccion sin cobertura, en un contexto donde tambien aplicarian condiciones de gratuidad o express.
2. Navegar a cualquier pantalla de la APP.
3. Verificar la etiqueta mostrada en el NavBar.

**Resultado esperado**

El NavBar muestra unicamente la etiqueta 'Sin cobertura', independientemente de otras condiciones aplicables.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso inicia sesión con un cliente registrado con una dirección sin cobertura, y la fila no declara ni la cuenta ni la dirección. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.

---

### TC-B2C23-APP-018 - Prioridad intermedia: despacho express prevalece sobre despacho gratis por campana

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: despacho express disponible/seleccionado y campana de despacho gratis activa simultaneamente

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Configurar un contexto donde apliquen simultaneamente despacho express y despacho gratis por campana.
2. Navegar a cualquier pantalla de la APP.
3. Verificar la etiqueta mostrada en el NavBar.

**Resultado esperado**

El NavBar muestra la etiqueta de despacho express (icono flash + monto), no la etiqueta 'Gratis'.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita una dirección con express y campaña de despacho gratis simultáneos y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.

---

### TC-B2C23-APP-019 - La direccion en el NavBar muestra solo calle y numero

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: direccion activa con calle, numero, comuna, ciudad y region

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Configurar una direccion activa con calle, numero, comuna, ciudad y region.
2. Navegar a cualquier pantalla de la APP.
3. Verificar el texto de direccion mostrado en el NavBar.

**Resultado esperado**

El NavBar muestra unicamente el nombre de la calle y el numero, sin comuna, ciudad ni region.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita una dirección con calle, número, comuna, ciudad y región y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.

---

### TC-B2C23-APP-020 - La direccion se trunca con puntos suspensivos al superar 42 caracteres, sin cortar palabras

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: direccion activa con calle+numero de mas de 42 caracteres

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Configurar una direccion activa cuyo texto de calle+numero supere los 42 caracteres.
2. Navegar a cualquier pantalla de la APP.
3. Verificar el texto de direccion mostrado, el truncamiento y los puntos suspensivos.

**Resultado esperado**

El texto de la direccion se muestra truncado a 42 caracteres o menos, con puntos suspensivos al final, sin cortar ninguna palabra a la mitad.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita una dirección cuya calle+número supere 42 caracteres y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.

---

### TC-B2C23-APP-021 - El limite de caracteres aplica igual cuando la direccion no tiene numero

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: direccion activa sin numero, con nombre de calle de mas de 42 caracteres

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Configurar una direccion activa sin numero, con un nombre de calle de mas de 42 caracteres.
2. Navegar a cualquier pantalla de la APP.
3. Verificar el texto de direccion mostrado.

**Resultado esperado**

El nombre de la calle se trunca aplicando el mismo limite de caracteres, con puntos suspensivos al final.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso necesita una dirección sin número con calle de más de 42 caracteres y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.

---

### TC-B2C23-APP-022 - Sin accesos directos configurados en BM, el NavBar no muestra ninguno y el boton Membresia mantiene su posicion

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Required data state: content asset 'header-shortcut-bar' sin configurar / vacio

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Asegurar que el content asset 'header-shortcut-bar' esta vacio o sin configurar.
2. Acceder al NavBar en la APP.
3. Verificar la ausencia de accesos directos y la posicion del boton Membresia.

**Resultado esperado**

El NavBar no muestra ningun acceso directo; el boton 'Suscribete a Unimarc' se mantiene en la misma posicion.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el content asset 'header-shortcut-bar' está configurado en el ambiente (Ofertas, Marketplace, Locales y horarios); el caso lo necesita vacío y vaciarlo es un cambio global de BM. Acción: acordar una ventana para vaciar el content asset en BM, o declarar el estado en la data del caso.

---

### TC-B2C23-APP-023 - Boton Membresia muestra 'Suscribete a Unimarc' para usuario sin membresia

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Registrado (sin membresia)
- Plataforma: App iOS/Android
- Ubicacion: Home, PLP, PDP, SRP, Mi Cuenta o Landing

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Iniciar sesion con un cliente sin membresia activa.
2. Navegar a una pagina habilitada.
3. Verificar el texto del boton Membresia en el NavBar.

**Resultado esperado**

El NavBar muestra el boton 'Suscribete a Unimarc'.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso inicia sesión con un cliente sin membresía activa y la fila no declara el token de esa cuenta. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.

---

### TC-B2C23-APP-024 - Boton Membresia muestra 'Ver mi suscripcion' para usuario con membresia activa

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-16 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026) |

**Precondiciones**

- User type: Registrado (con membresia)
- Plataforma: App iOS/Android
- Ubicacion: Home, PLP, PDP, SRP, Mi Cuenta o Landing

**Data utilizada**

{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)

**Pasos ejecutados**

1. Iniciar sesion con un cliente con membresia activa.
2. Navegar a una pagina habilitada.
3. Verificar el texto del boton Membresia en el NavBar.

**Resultado esperado**

El NavBar muestra el boton 'Ver mi suscripcion'.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: el caso inicia sesión con un cliente con membresía activa y la fila no declara el token de esa cuenta. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)"
  },
  "environment": "App Unimarc (DEV) · cl.smu.unimarcapp.sfcc.qa",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-23 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-23 APP Test Cases.xlsx",
  "title": "B2C-23 APP - NavBar - Evidencias QA",
  "updated_at": "2026-11-16"
 },
 "history": {
  "2026-11-16": [
   "TC-B2C23-APP-001",
   "TC-B2C23-APP-002",
   "TC-B2C23-APP-003",
   "TC-B2C23-APP-004",
   "TC-B2C23-APP-005",
   "TC-B2C23-APP-006",
   "TC-B2C23-APP-007",
   "TC-B2C23-APP-008",
   "TC-B2C23-APP-009",
   "TC-B2C23-APP-010",
   "TC-B2C23-APP-011",
   "TC-B2C23-APP-012",
   "TC-B2C23-APP-013",
   "TC-B2C23-APP-014",
   "TC-B2C23-APP-015",
   "TC-B2C23-APP-016",
   "TC-B2C23-APP-017",
   "TC-B2C23-APP-018",
   "TC-B2C23-APP-019",
   "TC-B2C23-APP-020",
   "TC-B2C23-APP-021",
   "TC-B2C23-APP-022",
   "TC-B2C23-APP-023",
   "TC-B2C23-APP-024"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar se muestra fijo en la parte superior, ocupando el ancho completo, con la seccion de Metodo de entrega, el boton Membresia y la seccion de accesos directos.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-001",
   "name": "Estructura y composicion del NavBar",
   "observation": "Android OK. La fila no declara {ANDROID_PACKAGE}: se usó la app ya instalada.",
   "observed": "El NavBar está fijo arriba (y=77), desde el borde izquierdo y a todo el ancho (1080 px), con la sección Método de entrega, el botón 'Suscríbete a UNIMARC' y los accesos directos Ofertas, Marketplace y Locales y horarios.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: cualquier pantalla antes del checkout",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — home con el navbar",
     "file": "TC-B2C23-APP-001-android-p01-home-con-el-navbar.png"
    },
    {
     "caption": "Android · Paso 2 — navbar con metodo de entrega membresia y accesos",
     "file": "TC-B2C23-APP-001-android-p02-navbar-con-metodo-de-entrega-membresia-y-accesos.png"
    }
   ],
   "spec": "tests-app/B2C-23.spec.ts:26",
   "status": "Aprobado",
   "steps": "1. Navegar a cualquier pantalla de la APP antes del checkout.\n2. Verificar la posicion, el ancho y el contenido del NavBar.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar muestra el icono, el texto 'Elige una forma de entrega' y el icono chevron.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-002",
   "name": "Estado sin metodo de entrega seleccionado",
   "observation": "Android OK. La fila no declara {ANDROID_PACKAGE}: se usó la app ya instalada.",
   "observed": "Invitado sin método de entrega: icono de moto, 'Elige una forma de entrega' y el icono chevron a la derecha (la planilla ahora espera chevron; la versión anterior pedía '+').",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: sin metodo de entrega ni direccion seleccionados",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — home sin metodo de entrega",
     "file": "TC-B2C23-APP-002-android-p01-home-sin-metodo-de-entrega.png"
    },
    {
     "caption": "Android · Paso 2 — seccion metodo de entrega",
     "file": "TC-B2C23-APP-002-android-p02-seccion-metodo-de-entrega.png"
    }
   ],
   "spec": "tests-app/B2C-23.spec.ts:49",
   "status": "Aprobado",
   "steps": "1. Sin metodo de entrega configurado, navegar a cualquier pantalla de la APP.\n2. Verificar el contenido de la seccion de Metodo de entrega del NavBar.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar muestra el icono del metodo activo, la direccion o tienda seleccionada, y el label de precio o condicion de despacho.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-003",
   "name": "Estado con metodo de entrega activo",
   "observation": "Causa: el caso necesita un método de entrega con dirección configurado y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: metodo de entrega y direccion configurados",
   "status": "Bloqueado Data",
   "steps": "1. Configurar un metodo de entrega con direccion.\n2. Navegar a cualquier pantalla de la APP.\n3. Verificar el contenido de la seccion de Metodo de entrega del NavBar.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar refleja inmediatamente el nuevo metodo, direccion/tienda y condicion de despacho, sin necesidad de recargar la pantalla.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-004",
   "name": "Actualizacion inmediata del NavBar al cambiar la configuracion de entrega",
   "observation": "Causa: el caso necesita un método de entrega configurado y una dirección o tienda a la cual cambiar y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: metodo de entrega ya configurado",
   "status": "Bloqueado Data",
   "steps": "1. Con un metodo de entrega configurado, modificar la direccion (o el metodo/tienda).\n2. Confirmar el cambio.\n3. Verificar el contenido del NavBar sin recargar la pantalla.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "Se abre el popup 'Metodo de entrega'.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-005",
   "name": "Tap en el NavBar abre el popup Metodo de entrega",
   "observation": "Android OK. La fila no declara {ANDROID_PACKAGE}: se usó la app ya instalada.",
   "observed": "El tap sobre el NavBar abre el popup de método de entrega ('Despacho a domicilio' / 'Retiro en tienda').",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: cualquier pantalla",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — home con el navbar",
     "file": "TC-B2C23-APP-005-android-p01-home-con-el-navbar.png"
    },
    {
     "caption": "Android · Paso 3 — popup metodo de entrega",
     "file": "TC-B2C23-APP-005-android-p03-popup-metodo-de-entrega.png"
    }
   ],
   "spec": "tests-app/B2C-23.spec.ts:66",
   "status": "Aprobado",
   "steps": "1. Navegar a cualquier pantalla de la APP.\n2. Tocar sobre el NavBar.\n3. Verificar la apertura del popup.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar permanece visible en la parte superior durante todo el scroll vertical.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-006",
   "name": "El NavBar permanece visible durante el scroll vertical",
   "observation": "Android OK. La fila no declara {ANDROID_PACKAGE}: se usó la app ya instalada.",
   "observed": "Tras desplazar el Home hacia abajo (sale 'Los más vendidos') y volver arriba, el NavBar sigue visible en la misma posición.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: pantalla con contenido scrolleable",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — home arriba",
     "file": "TC-B2C23-APP-006-android-p01-home-arriba.png"
    },
    {
     "caption": "Android · Paso 2 — navbar visible con el home desplazado",
     "file": "TC-B2C23-APP-006-android-p02-navbar-visible-con-el-home-desplazado.png"
    },
    {
     "caption": "Android · Paso 3 — navbar visible tras volver arriba",
     "file": "TC-B2C23-APP-006-android-p03-navbar-visible-tras-volver-arriba.png"
    }
   ],
   "spec": "tests-app/B2C-23.spec.ts:82",
   "status": "Aprobado",
   "steps": "1. Navegar a una pantalla con contenido scrolleable.\n2. Hacer scroll vertical hacia abajo y hacia arriba.\n3. Verificar la visibilidad del NavBar durante el scroll.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar no se muestra en ninguna pantalla del flujo de Checkout.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-007",
   "name": "El NavBar se oculta durante el flujo de Checkout",
   "observation": "Causa: el caso necesita llegar al Checkout (productos en el carro sobre el mínimo de compra) y la columna 'Test data' no declara SKU ni cuenta. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest / Registrado\n- Plataforma: App iOS/Android\n- Ubicacion: Carrito, datos de envio, pago o confirmacion de pedido",
   "status": "Bloqueado Data",
   "steps": "1. Ingresar al flujo de Checkout.\n2. Navegar por cada una de sus pantallas.\n3. Verificar la ausencia del NavBar en cada una.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar no se muestra en ninguna de las paginas especiales: Splash, Login/SSO y Cortina de mantencion.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-008",
   "name": "El NavBar se oculta en paginas especiales (Splash, Login/SSO, Cortina de mantencion)",
   "observation": "Android OK. La fila no declara {ANDROID_PACKAGE}: se usó la app ya instalada.",
   "observed": "Splash (logo Unimarc sobre fondo de pomelos) sin NavBar; Login/SSO (Mi cuenta → Iniciar sesión, ahora por correo) sin NavBar. Cortina de mantención no activa en el ambiente: no aplica.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Splash, Login/SSO o Cortina de mantencion",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — splash sin navbar",
     "file": "TC-B2C23-APP-008-android-p01-splash-sin-navbar.png"
    },
    {
     "caption": "Android · Paso 3 — login sin navbar",
     "file": "TC-B2C23-APP-008-android-p03-login-sin-navbar.png"
    }
   ],
   "spec": "tests-app/B2C-23.spec.ts:106",
   "status": "Aprobado",
   "steps": "1. Acceder a la pantalla de Splash.\n2. Verificar la ausencia del NavBar.\n3. Repetir la verificacion en Login/SSO.\n4. Repetir la verificacion en la Cortina de mantencion (si aplica).",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar se muestra visible en la pagina de error.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-009",
   "name": "El NavBar es visible en paginas de error (404, 500)",
   "observation": "Causa: la app no ofrece una ruta para provocar una página 404/500 y el TC no declara cómo llegar a ella. Acción: definir en el TC cómo alcanzar la página de error en la app (deep link o ruta).",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: pagina de error 404 o 500",
   "status": "Bloqueado",
   "steps": "1. Provocar (o navegar a) una pagina de error 404 o 500.\n2. Verificar la visibilidad del NavBar.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar muestra '<' (Atras) y el buscador con el placeholder '\\u00bfQue estas buscando?', en lugar de su presentacion habitual.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-010",
   "name": "El NavBar reemplaza su presentacion por el buscador en la PLP N1",
   "observation": "Android OK. La fila no declara {ANDROID_PACKAGE}: se usó la app ya instalada.",
   "observed": "Menú Categorías → primera N1: la PLP N1 muestra '<' (Atrás) y el buscador '¿Qué estás buscando?' en lugar del NavBar habitual.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: PLP N1 de una categoria",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — plp n1 con atras y buscador",
     "file": "TC-B2C23-APP-010-android-p02-plp-n1-con-atras-y-buscador.png"
    }
   ],
   "spec": "tests-app/B2C-23.spec.ts:156",
   "status": "Aprobado",
   "steps": "1. Navegar a la PLP N1 de una categoria.\n2. Verificar el contenido del NavBar.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar muestra el icono, la direccion (truncada) y la etiqueta 'Sin cobertura' en color de alerta.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-011",
   "name": "NavBar con direccion guardada sin cobertura de despacho",
   "observation": "Causa: el caso necesita una dirección sin cobertura de despacho y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: direccion activa sin cobertura de despacho",
   "status": "Bloqueado Data",
   "steps": "1. Configurar una direccion activa sin cobertura de despacho.\n2. Navegar a cualquier pantalla de la APP.\n3. Verificar el contenido del NavBar y el color de la etiqueta.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar muestra el icono, la direccion (truncada) y la etiqueta 'Sin horarios disponibles'.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-012",
   "name": "NavBar con direccion guardada sin ventanas de despacho disponibles",
   "observation": "Causa: el caso necesita una dirección con cobertura y sin ventanas horarias disponibles y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: direccion activa con cobertura, sin ventanas horarias disponibles (slots completos o sin configuracion)",
   "status": "Bloqueado Data",
   "steps": "1. Configurar una direccion activa con cobertura pero sin ventanas horarias disponibles.\n2. Navegar a cualquier pantalla de la APP.\n3. Verificar el contenido del NavBar.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar muestra la etiqueta 'Gratis'.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-013",
   "name": "Etiqueta 'Gratis' por campana comercial activa",
   "observation": "Causa: el caso necesita una campaña comercial activa de despacho gratuito y una dirección donde aplique y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: campana comercial activa que otorga despacho gratuito",
   "status": "Bloqueado Data",
   "steps": "1. Configurar un contexto con campana comercial activa de despacho gratuito.\n2. Navegar a cualquier pantalla de la APP.\n3. Verificar la etiqueta mostrada en el NavBar.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar muestra el icono diamante junto con la etiqueta 'Gratis'.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-014",
   "name": "Etiqueta 'Gratis' con icono diamante por membresia Club Unimarc",
   "observation": "Causa: el caso inicia sesión con un cliente con membresía Club Unimarc activa y la fila no declara el token de esa cuenta. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Registrado (con membresia)\n- Plataforma: App iOS/Android\n- Required data state: membresia Club Unimarc activa que otorga despacho gratuito",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesion con un cliente con membresia Club Unimarc activa.\n2. Navegar a cualquier pantalla de la APP.\n3. Verificar la etiqueta mostrada en el NavBar.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar muestra el icono flash junto con el monto del despacho express.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-015",
   "name": "Etiqueta de despacho express con icono flash y monto",
   "observation": "Causa: el caso necesita una dirección con despacho express disponible y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: despacho express disponible y seleccionado",
   "status": "Bloqueado Data",
   "steps": "1. Configurar y seleccionar despacho express disponible.\n2. Navegar a cualquier pantalla de la APP.\n3. Verificar la etiqueta mostrada en el NavBar.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar muestra el monto del despacho estandar, formateado con separador de miles.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-016",
   "name": "Etiqueta de despacho estandar con costo",
   "observation": "Causa: el caso necesita una dirección con despacho estándar con costo (sin gratuidad ni express) y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: despacho estandar con costo, sin gratuidad ni express aplicable",
   "status": "Bloqueado Data",
   "steps": "1. Configurar un contexto con despacho estandar y costo, sin gratuidad ni express aplicable.\n2. Navegar a cualquier pantalla de la APP.\n3. Verificar la etiqueta mostrada en el NavBar.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar muestra unicamente la etiqueta 'Sin cobertura', independientemente de otras condiciones aplicables.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-017",
   "name": "Prioridad maxima: 'Sin cobertura' prevalece sobre cualquier otra condicion aplicable",
   "observation": "Causa: el caso inicia sesión con un cliente registrado con una dirección sin cobertura, y la fila no declara ni la cuenta ni la dirección. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Registrado\n- Plataforma: App iOS/Android\n- Required data state: direccion sin cobertura, y simultaneamente condiciones de membresia/campana/express tecnicamente aplicables",
   "status": "Bloqueado Data",
   "steps": "1. Configurar una direccion sin cobertura, en un contexto donde tambien aplicarian condiciones de gratuidad o express.\n2. Navegar a cualquier pantalla de la APP.\n3. Verificar la etiqueta mostrada en el NavBar.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar muestra la etiqueta de despacho express (icono flash + monto), no la etiqueta 'Gratis'.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-018",
   "name": "Prioridad intermedia: despacho express prevalece sobre despacho gratis por campana",
   "observation": "Causa: el caso necesita una dirección con express y campaña de despacho gratis simultáneos y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: despacho express disponible/seleccionado y campana de despacho gratis activa simultaneamente",
   "status": "Bloqueado Data",
   "steps": "1. Configurar un contexto donde apliquen simultaneamente despacho express y despacho gratis por campana.\n2. Navegar a cualquier pantalla de la APP.\n3. Verificar la etiqueta mostrada en el NavBar.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar muestra unicamente el nombre de la calle y el numero, sin comuna, ciudad ni region.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-019",
   "name": "La direccion en el NavBar muestra solo calle y numero",
   "observation": "Causa: el caso necesita una dirección con calle, número, comuna, ciudad y región y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: direccion activa con calle, numero, comuna, ciudad y region",
   "status": "Bloqueado Data",
   "steps": "1. Configurar una direccion activa con calle, numero, comuna, ciudad y region.\n2. Navegar a cualquier pantalla de la APP.\n3. Verificar el texto de direccion mostrado en el NavBar.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El texto de la direccion se muestra truncado a 42 caracteres o menos, con puntos suspensivos al final, sin cortar ninguna palabra a la mitad.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-020",
   "name": "La direccion se trunca con puntos suspensivos al superar 42 caracteres, sin cortar palabras",
   "observation": "Causa: el caso necesita una dirección cuya calle+número supere 42 caracteres y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: direccion activa con calle+numero de mas de 42 caracteres",
   "status": "Bloqueado Data",
   "steps": "1. Configurar una direccion activa cuyo texto de calle+numero supere los 42 caracteres.\n2. Navegar a cualquier pantalla de la APP.\n3. Verificar el texto de direccion mostrado, el truncamiento y los puntos suspensivos.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El nombre de la calle se trunca aplicando el mismo limite de caracteres, con puntos suspensivos al final.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-021",
   "name": "El limite de caracteres aplica igual cuando la direccion no tiene numero",
   "observation": "Causa: el caso necesita una dirección sin número con calle de más de 42 caracteres y la columna 'Test data' solo declara {APP_BUILD}. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: direccion activa sin numero, con nombre de calle de mas de 42 caracteres",
   "status": "Bloqueado Data",
   "steps": "1. Configurar una direccion activa sin numero, con un nombre de calle de mas de 42 caracteres.\n2. Navegar a cualquier pantalla de la APP.\n3. Verificar el texto de direccion mostrado.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar no muestra ningun acceso directo; el boton 'Suscribete a Unimarc' se mantiene en la misma posicion.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-022",
   "name": "Sin accesos directos configurados en BM, el NavBar no muestra ninguno y el boton Membresia mantiene su posicion",
   "observation": "Causa: el content asset 'header-shortcut-bar' está configurado en el ambiente (Ofertas, Marketplace, Locales y horarios); el caso lo necesita vacío y vaciarlo es un cambio global de BM. Acción: acordar una ventana para vaciar el content asset en BM, o declarar el estado en la data del caso.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Required data state: content asset 'header-shortcut-bar' sin configurar / vacio",
   "status": "Bloqueado Data",
   "steps": "1. Asegurar que el content asset 'header-shortcut-bar' esta vacio o sin configurar.\n2. Acceder al NavBar en la APP.\n3. Verificar la ausencia de accesos directos y la posicion del boton Membresia.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar muestra el boton 'Suscribete a Unimarc'.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-023",
   "name": "Boton Membresia muestra 'Suscribete a Unimarc' para usuario sin membresia",
   "observation": "Causa: el caso inicia sesión con un cliente sin membresía activa y la fila no declara el token de esa cuenta. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Registrado (sin membresia)\n- Plataforma: App iOS/Android\n- Ubicacion: Home, PLP, PDP, SRP, Mi Cuenta o Landing",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesion con un cliente sin membresia activa.\n2. Navegar a una pagina habilitada.\n3. Verificar el texto del boton Membresia en el NavBar.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel_4_API_33) · Android 13 · emulador · app instalada (cl.smu.unimarcapp.sfcc.qa 1.0, actualizada 16-11-2026)",
   "executed_at": "2026-11-16",
   "expected": "El NavBar muestra el boton 'Ver mi suscripcion'.",
   "form_factor": "app",
   "id": "TC-B2C23-APP-024",
   "name": "Boton Membresia muestra 'Ver mi suscripcion' para usuario con membresia activa",
   "observation": "Causa: el caso inicia sesión con un cliente con membresía activa y la fila no declara el token de esa cuenta. Acción: declarar el dato como token en el Excel de data y referenciarlo en la columna 'Test data' de la fila.",
   "observed": "No ejecutado.",
   "platform": "Android",
   "preconditions": "- User type: Registrado (con membresia)\n- Plataforma: App iOS/Android\n- Ubicacion: Home, PLP, PDP, SRP, Mi Cuenta o Landing",
   "status": "Bloqueado Data",
   "steps": "1. Iniciar sesion con un cliente con membresia activa.\n2. Navegar a una pagina habilitada.\n3. Verificar el texto del boton Membresia en el NavBar.",
   "test_data": "{APP_BUILD} = v1.0.1 (app ya instalada en el emulador)"
  }
 ]
}
-->
