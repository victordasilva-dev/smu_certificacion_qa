# Buscador de la app (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-100 APP |
| Última actualización | 2026-10-22 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.7 (DEV) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-100 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 15 |
| Aprobado | 9 |
| Rechazado | 5 |
| **Total** | **29** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-22 | 29 | TC-100-APP-001, TC-100-APP-002, TC-100-APP-003, TC-100-APP-004, TC-100-APP-005, TC-100-APP-006, TC-100-APP-007, TC-100-APP-008, TC-100-APP-009, TC-100-APP-010, TC-100-APP-011, TC-100-APP-012, TC-100-APP-013, TC-100-APP-014, TC-100-APP-015, TC-100-APP-016, TC-100-APP-017, TC-100-APP-018, TC-100-APP-019, TC-100-APP-020, TC-100-APP-021, TC-100-APP-022, TC-100-APP-023, TC-100-APP-024, TC-100-APP-025, TC-100-APP-026, TC-100-APP-027, TC-100-APP-028, TC-100-APP-029 |

## Detalle por caso de prueba

### TC-100-APP-001 - Verificar que el buscador es accesible desde el tabbar, el header full y el header sticky [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App y muestra en el header full la caja de texto con placeholder "¿Qué estás buscando?" y el ícono lupa.
3. El usuario hace scroll hacia abajo en el Home.
4. El sistema muestra el header sticky con la caja de texto "¿Qué estás buscando?" y el ícono lupa.
5. El usuario toca la opción de búsqueda del tabbar.
6. El sistema abre la pantalla de búsqueda.

**Resultado esperado**

El buscador es accesible desde el tabbar, el header full y el header sticky, con placeholder "¿Qué estás buscando?" e ícono lupa.

**Resultado obtenido**

El Home no muestra caja de búsqueda ni en el header completo ni al desplazarse; el buscador solo es accesible desde el tab «Buscar» del tabbar.

**Observación**

Esperado: el header full del Home muestra la caja con el placeholder «¿Qué estás buscando?» y la lupa, y el header sticky también. Obtenido: el Home no muestra ninguna caja de búsqueda, ni al abrirlo ni al desplazarse; el buscador solo se abre desde el tab «Buscar». B2C-100.spec.ts:83. Bug: B2C-1303.

**Evidencia**

![Paso 1 — home header completo](<B2C-100 APP Evidencias/TC-B2C100-APP-001-android-p01-home-header-completo.png>)

![Paso 4 — home tras desplazarse header sticky](<B2C-100 APP Evidencias/TC-B2C100-APP-001-android-p04-home-tras-desplazarse-header-sticky.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-001-android.png>)

---

### TC-100-APP-002 - Verificar que la pantalla de búsqueda muestra las 3 secciones en orden a pantalla completa [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- En la sesión actual se buscó {SEARCH_TERM_001} y se visitó la PDP de {SKU_VALID_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_TERM_001} = leche
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda a pantalla completa con "Cancelar" a la derecha y muestra, en este orden: ícono + "Tus búsquedas recientes" + "Limpiar", ícono + "Lo último que viste" + "Limpiar" e ícono + "Lo más buscado".

**Resultado esperado**

La pantalla de búsqueda se muestra a pantalla completa con "Cancelar" y las 3 secciones en el orden definido.

**Resultado obtenido**

La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.

**Observación**

Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-002-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre](<B2C-100 APP Evidencias/TC-B2C100-APP-002-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png>)

![Paso 5 — clave de acceso por correo deshabilitado](<B2C-100 APP Evidencias/TC-B2C100-APP-002-android-p05-clave-de-acceso-por-correo-deshabilitado.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-002-android.png>)

---

### TC-100-APP-003 - Verificar que "Tus búsquedas recientes" muestra los términos de la sesión como chips horizontales [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- En la sesión actual se buscaron {SEARCH_TERM_001} y {SEARCH_PARTIAL_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_TERM_001} = leche
- {SEARCH_PARTIAL_001} = fillet
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Tus búsquedas recientes" con {SEARCH_TERM_001} y {SEARCH_PARTIAL_001} como chips en disposición horizontal.

**Resultado esperado**

La sección "Tus búsquedas recientes" muestra {SEARCH_TERM_001} y {SEARCH_PARTIAL_001} como chips horizontales.

**Resultado obtenido**

La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.

**Observación**

Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-003-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre](<B2C-100 APP Evidencias/TC-B2C100-APP-003-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png>)

![Paso 5 — clave de acceso por correo deshabilitado](<B2C-100 APP Evidencias/TC-B2C100-APP-003-android-p05-clave-de-acceso-por-correo-deshabilitado.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-003-android.png>)

---

### TC-100-APP-004 - Verificar que las búsquedas recientes no se conservan al cerrar sesión e iniciar una nueva [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_TERM_001} = leche
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario busca {SEARCH_TERM_001} desde la caja de búsqueda.
4. El sistema registra {SEARCH_TERM_001} en "Tus búsquedas recientes".
5. El usuario cierra sesión desde Mi Cuenta y vuelve a iniciar sesión con la cuenta {COMPRADOR_USER}.
6. El sistema autentica al usuario y carga el Home de la App.
7. El usuario toca la caja de búsqueda del header sin escribir nada.
8. El sistema abre la pantalla de búsqueda sin la sección "Tus búsquedas recientes".

**Resultado esperado**

Tras iniciar una nueva sesión, la pantalla de búsqueda no muestra "Tus búsquedas recientes" ni el término {SEARCH_TERM_001}.

**Resultado obtenido**

La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.

**Observación**

Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-004-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre](<B2C-100 APP Evidencias/TC-B2C100-APP-004-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png>)

![Paso 5 — clave de acceso por correo deshabilitado](<B2C-100 APP Evidencias/TC-B2C100-APP-004-android-p05-clave-de-acceso-por-correo-deshabilitado.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-004-android.png>)

---

### TC-100-APP-005 - Verificar que tocar un chip de búsqueda reciente redirige a la SRP del término [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- En la sesión actual se buscó {SEARCH_TERM_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_TERM_001} = leche
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Tus búsquedas recientes" con el chip {SEARCH_TERM_001}.
5. El usuario toca el chip {SEARCH_TERM_001}.
6. El sistema redirige a la página de resultados de búsqueda de {SEARCH_TERM_001}.

**Resultado esperado**

Se muestra la página de resultados de búsqueda (SRP) de {SEARCH_TERM_001}.

**Resultado obtenido**

La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.

**Observación**

Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-005-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre](<B2C-100 APP Evidencias/TC-B2C100-APP-005-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png>)

![Paso 5 — clave de acceso por correo deshabilitado](<B2C-100 APP Evidencias/TC-B2C100-APP-005-android-p05-clave-de-acceso-por-correo-deshabilitado.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-005-android.png>)

---

### TC-100-APP-006 - Verificar que "Lo último que viste" muestra los 6 últimos productos visitados con imagen y nombre [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- En la sesión actual se visitaron, en este orden, las PDP de {SKU_VALID_001}, {SKU_UNITARIO}, {SKU_PESABLE}, {SKU_PROM_NxM}, {SKU_PROM_2x1}, {SKU_PROM_NxPRECIO} y {SKU_PRECIO_MIEMBRO}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {SKU_PESABLE} = 000000000000037972-KG
- {SKU_PROM_NxM} = 000000000641229002-UN
- {SKU_PROM_2x1} = 000000000664214001-UN
- {SKU_PROM_NxPRECIO} = 000000000000666200-UN
- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Lo último que viste" con 6 productos, cada uno con thumbnail y nombre.

**Resultado esperado**

La sección muestra los últimos 6 productos visitados ({SKU_UNITARIO} a {SKU_PRECIO_MIEMBRO}) con thumbnail y nombre, y no muestra {SKU_VALID_001}.

**Resultado obtenido**

La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.

**Observación**

Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-006-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre](<B2C-100 APP Evidencias/TC-B2C100-APP-006-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png>)

![Paso 5 — clave de acceso por correo deshabilitado](<B2C-100 APP Evidencias/TC-B2C100-APP-006-android-p05-clave-de-acceso-por-correo-deshabilitado.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-006-android.png>)

---

### TC-100-APP-007 - Verificar que tocar un producto de "Lo último que viste" redirige a su PDP [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- En la sesión actual se visitó la PDP de {SKU_VALID_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Lo último que viste" con {SKU_VALID_001}.
5. El usuario toca la imagen de {SKU_VALID_001}.
6. El sistema redirige a la PDP de {SKU_VALID_001}.

**Resultado esperado**

Se muestra la PDP de {SKU_VALID_001}.

**Resultado obtenido**

La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.

**Observación**

Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-007-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre](<B2C-100 APP Evidencias/TC-B2C100-APP-007-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png>)

![Paso 5 — clave de acceso por correo deshabilitado](<B2C-100 APP Evidencias/TC-B2C100-APP-007-android-p05-clave-de-acceso-por-correo-deshabilitado.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-007-android.png>)

---

### TC-100-APP-008 - Verificar que no se muestra "Tus búsquedas recientes" sin búsquedas en la sesión [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- En la sesión actual no se realizaron búsquedas
- En la sesión actual se visitó la PDP de {SKU_VALID_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda con "Lo último que viste" y "Lo más buscado", sin la sección "Tus búsquedas recientes".

**Resultado esperado**

La sección "Tus búsquedas recientes" no se muestra y no queda espacio vacío en su lugar.

**Resultado obtenido**

La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.

**Observación**

Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-008-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre](<B2C-100 APP Evidencias/TC-B2C100-APP-008-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png>)

![Paso 5 — clave de acceso por correo deshabilitado](<B2C-100 APP Evidencias/TC-B2C100-APP-008-android-p05-clave-de-acceso-por-correo-deshabilitado.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-008-android.png>)

---

### TC-100-APP-009 - Verificar que no se muestra "Lo último que viste" sin visitas a PDP en la sesión [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- La cuenta {COMPRADOR_USER} no tiene visitas a PDP
- En la sesión actual se buscó {SEARCH_TERM_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_TERM_001} = leche
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda con "Tus búsquedas recientes" y "Lo más buscado", sin la sección "Lo último que viste".

**Resultado esperado**

La sección "Lo último que viste" no se muestra y no queda espacio vacío en su lugar.

**Resultado obtenido**

La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.

**Observación**

Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-009-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre](<B2C-100 APP Evidencias/TC-B2C100-APP-009-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png>)

![Paso 5 — clave de acceso por correo deshabilitado](<B2C-100 APP Evidencias/TC-B2C100-APP-009-android-p05-clave-de-acceso-por-correo-deshabilitado.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-009-android.png>)

---

### TC-100-APP-010 - Verificar que la pantalla de búsqueda del invitado sin historial muestra solo "Lo más buscado" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- App recién instalada o con datos borrados, sin búsquedas en la sesión

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda y muestra solo la sección ícono + "Lo más buscado".

**Resultado esperado**

La pantalla de búsqueda muestra únicamente "Lo más buscado".

**Resultado obtenido**

Con la app sin datos, la pantalla de búsqueda muestra solo «Lo más buscado».

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-010-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de busqueda](<B2C-100 APP Evidencias/TC-B2C100-APP-010-android-p03-pantalla-de-busqueda.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-010-android.png>)

---

### TC-100-APP-011 - Verificar que la pantalla de búsqueda del invitado con historial muestra recientes y "Lo más buscado" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- En la sesión actual se buscó {SEARCH_TERM_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_TERM_001} = leche

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda y muestra ícono + "Tus búsquedas recientes" + "Limpiar" con {SEARCH_TERM_001}, seguido de ícono + "Lo más buscado".

**Resultado esperado**

Se muestran "Tus búsquedas recientes" (con {SEARCH_TERM_001} y "Limpiar") y "Lo más buscado", sin "Lo último que viste".

**Resultado obtenido**

Tras buscar «leche», la pantalla muestra «Tus búsquedas recientes» con el chip «leche» y «Limpiar», más «Lo más buscado»; no muestra «Lo último que viste».

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-011-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de busqueda](<B2C-100 APP Evidencias/TC-B2C100-APP-011-android-p03-pantalla-de-busqueda.png>)

![Paso 6 — busqueda reabierta con historial](<B2C-100 APP Evidencias/TC-B2C100-APP-011-android-p06-busqueda-reabierta-con-historial.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-011-android.png>)

---

### TC-100-APP-012 - Verificar que "Lo más buscado" muestra 6 chips en máximo 2 filas sin truncar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Lo más buscado" con 6 chips en disposición horizontal, en un máximo de 2 filas y con el texto completo de cada término.

**Resultado esperado**

"Lo más buscado" muestra 6 chips completos (sin truncar ni ocultar) en un máximo de 2 filas.

**Resultado obtenido**

«Lo más buscado» muestra 6 chips completos (Helado, Pollo, Leche, Cervezas, Queso, Yogurt) en 2 filas.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-012-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de busqueda](<B2C-100 APP Evidencias/TC-B2C100-APP-012-android-p03-pantalla-de-busqueda.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-012-android.png>)

---

### TC-100-APP-013 - Verificar que el orden de "Lo más buscado" es el mismo que en Web [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Ambas consultas se realizan en el mismo momento, sobre el mismo ambiente

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Lo más buscado" con 6 chips.
5. El usuario ingresa a {BASE_URL} en un navegador Desktop y hace clic en la caja de búsqueda.
6. El sistema abre el modal de búsqueda con la sección "Lo más buscado".

**Resultado esperado**

Los 6 términos de "Lo más buscado" y su orden son iguales en la App y en la Web Desktop.

**Resultado obtenido**

La app muestra Helado, Pollo, Leche, Cervezas, Queso y Yogurt; la Web Desktop muestra Leche, Arroz, Pan, Aceite, Azúcar y Huevos.

**Observación**

Esperado: los 6 términos de «Lo más buscado» y su orden son iguales en la app y en la Web Desktop. Obtenido: app: Helado, Pollo, Leche, Cervezas, Queso, Yogurt; Web: Leche, Arroz, Pan, Aceite, Azúcar, Huevos (solo coincide «Leche», en otra posición). B2C-100.spec.ts:150. Bug: B2C-1304.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-013-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de busqueda](<B2C-100 APP Evidencias/TC-B2C100-APP-013-android-p03-pantalla-de-busqueda.png>)

![Paso 5 — lo mas buscado en la app](<B2C-100 APP Evidencias/TC-B2C100-APP-013-android-p05-lo-mas-buscado-en-la-app.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-013-android.png>)

---

### TC-100-APP-014 - Verificar que tocar un chip de "Lo más buscado" redirige a la SRP del término [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Lo más buscado".
5. El usuario toca un chip de "Lo más buscado".
6. El sistema redirige a la página de resultados de búsqueda del término tocado.

**Resultado esperado**

Se muestra la SRP del término del chip tocado.

**Resultado obtenido**

Al tocar el chip «Leche» se muestra la SRP del término, con su conteo de productos. Al tocar «Helado» la app muestra «Sin resultados para Helado» (el catálogo de DEV no tiene helados).

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-014-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de busqueda](<B2C-100 APP Evidencias/TC-B2C100-APP-014-android-p03-pantalla-de-busqueda.png>)

![Paso 5 — srp de leche](<B2C-100 APP Evidencias/TC-B2C100-APP-014-android-p05-srp-de-leche.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-014-android.png>)

---

### TC-100-APP-015 - Verificar que "Limpiar" elimina "Tus búsquedas recientes" y no reaparece al reabrir [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- En la sesión actual se buscó {SEARCH_TERM_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_TERM_001} = leche
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Tus búsquedas recientes" con {SEARCH_TERM_001}.
5. El usuario toca "Limpiar" en "Tus búsquedas recientes".
6. El sistema borra las búsquedas recientes y oculta la sección.
7. El usuario toca "Cancelar" y vuelve a tocar la caja de búsqueda.
8. El sistema abre la pantalla de búsqueda sin la sección "Tus búsquedas recientes".

**Resultado esperado**

La sección "Tus búsquedas recientes" desaparece al tocar "Limpiar" y no se muestra al reabrir el buscador.

**Resultado obtenido**

La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.

**Observación**

Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-015-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre](<B2C-100 APP Evidencias/TC-B2C100-APP-015-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png>)

![Paso 5 — clave de acceso por correo deshabilitado](<B2C-100 APP Evidencias/TC-B2C100-APP-015-android-p05-clave-de-acceso-por-correo-deshabilitado.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-015-android.png>)

---

### TC-100-APP-016 - Verificar que "Limpiar" elimina "Lo último que viste" y no reaparece al reabrir [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- En la sesión actual se visitó la PDP de {SKU_VALID_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra la sección "Lo último que viste" con {SKU_VALID_001}.
5. El usuario toca "Limpiar" en "Lo último que viste".
6. El sistema borra las visitas recientes y oculta la sección.
7. El usuario toca "Cancelar" y vuelve a tocar la caja de búsqueda.
8. El sistema abre la pantalla de búsqueda sin la sección "Lo último que viste".

**Resultado esperado**

La sección "Lo último que viste" desaparece al tocar "Limpiar" y no se muestra al reabrir el buscador.

**Resultado obtenido**

La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.

**Observación**

Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-016-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre](<B2C-100 APP Evidencias/TC-B2C100-APP-016-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png>)

![Paso 5 — clave de acceso por correo deshabilitado](<B2C-100 APP Evidencias/TC-B2C100-APP-016-android-p05-clave-de-acceso-por-correo-deshabilitado.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-016-android.png>)

---

### TC-100-APP-017 - Verificar que con 1 o 2 caracteres se mantiene el contenido por defecto sin búsqueda dinámica [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- En la sesión actual se buscó {SEARCH_TERM_001} y se visitó la PDP de {SKU_VALID_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_TERM_001} = leche
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema muestra "Tus búsquedas recientes", "Lo último que viste" y "Lo más buscado".
5. El usuario escribe los 2 primeros caracteres de {SEARCH_TERM_001}.
6. El sistema mantiene visibles las 3 secciones por defecto.

**Resultado esperado**

Con 2 caracteres se siguen mostrando las 3 secciones por defecto, sin skeleton loader ni resultados de búsqueda dinámica.

**Resultado obtenido**

La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.

**Observación**

Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-017-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre](<B2C-100 APP Evidencias/TC-B2C100-APP-017-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png>)

![Paso 5 — clave de acceso por correo deshabilitado](<B2C-100 APP Evidencias/TC-B2C100-APP-017-android-p05-clave-de-acceso-por-correo-deshabilitado.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-017-android.png>)

---

### TC-100-APP-018 - Verificar que al tercer carácter se muestra el skeleton y luego los resultados dinámicos [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_TERM_001} = leche
- {HERRAMIENTA_PROXY_APP} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda.
5. El usuario escribe los 3 primeros caracteres de {SEARCH_TERM_001} y deja de escribir.
6. El sistema muestra un skeleton loader y, al recibir la respuesta, lo reemplaza por las sugerencias de autocompletado y el carrusel de productos.

**Resultado esperado**

Tras el tercer carácter se muestra el skeleton loader y luego los resultados del término parcial, sin tocar "Buscar" en el teclado.

**Resultado obtenido**

Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: sin la herramienta de proxy no se puede aplicar red lenta para ver el skeleton. Acción: declarar la herramienta de proxy. Verificado el 2026-10-22.

**Observación**

Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: sin la herramienta de proxy no se puede aplicar red lenta para ver el skeleton. Acción: declarar la herramienta de proxy. Verificado el 2026-10-22.

---

### TC-100-APP-019 - Verificar que seguir escribiendo actualiza los resultados según el término estabilizado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_TERM_001} = leche

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda.
5. El usuario escribe {SEARCH_TERM_001} de forma continua, sin pausas entre caracteres.
6. El sistema actualiza la pantalla de sugerencias y muestra los resultados de {SEARCH_TERM_001}.

**Resultado esperado**

Los resultados mostrados corresponden al término completo {SEARCH_TERM_001} y no a un término parcial intermedio.

**Resultado obtenido**

Al escribir «leche» de forma continua, los resultados corresponden al término completo («Resultado para “leche”») y no a uno parcial.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-019-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de busqueda](<B2C-100 APP Evidencias/TC-B2C100-APP-019-android-p03-pantalla-de-busqueda.png>)

![Paso 5 — resultados de leche](<B2C-100 APP Evidencias/TC-B2C100-APP-019-android-p05-resultados-de-leche.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-019-android.png>)

---

### TC-100-APP-020 - Verificar que la pantalla de sugerencias muestra título, chips, carrusel y "Ver todos" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- {SEARCH_TERM_001} retorna 4 o más productos y al menos 1 sugerencia

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_TERM_001} = leche

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El usuario escribe {SEARCH_TERM_001} en la caja de búsqueda sin tocar "Buscar" en el teclado.
5. El sistema muestra el título "Resultados para '{SEARCH_TERM_001}'" + cantidad + "productos", hasta 4 sugerencias de autocompletado como chips, un carrusel de hasta 4 productos con shelf simplificada deslizable hacia la derecha y el botón "Ver todos".

**Resultado esperado**

La pantalla muestra título con cantidad de resultados, hasta 4 chips de sugerencias, carrusel deslizable de hasta 4 productos y "Ver todos".

**Resultado obtenido**

Para «leche» (6 productos) el carrusel se desplaza por los 6 productos y termina sin «Ver todos».

**Observación**

Esperado: el carrusel muestra hasta 4 productos deslizables y «Ver todos». Obtenido: para «leche» (6 productos) el carrusel recorre los 6 productos y termina sin «Ver todos»; el título y los chips sí se muestran. B2C-100.spec.ts:217. Bug: B2C-1305.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-020-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de busqueda](<B2C-100 APP Evidencias/TC-B2C100-APP-020-android-p03-pantalla-de-busqueda.png>)

![Paso 5 — sugerencias de leche](<B2C-100 APP Evidencias/TC-B2C100-APP-020-android-p05-sugerencias-de-leche.png>)

![Paso 7 — carrusel desplazado hasta el final](<B2C-100 APP Evidencias/TC-B2C100-APP-020-android-p07-carrusel-desplazado-hasta-el-final.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-020-android.png>)

---

### TC-100-APP-021 - Verificar que "Cancelar" cierra la búsqueda, limpia el buscador y mantiene la página de origen [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_TERM_001} = leche

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda a pantalla completa con la opción "Cancelar" a la derecha del buscador.
5. El usuario escribe {SEARCH_TERM_001} y toca "Cancelar".
6. El sistema cierra la pantalla de búsqueda y vuelve al Home de la App.
7. El usuario toca nuevamente la caja de búsqueda.
8. El sistema abre la pantalla de búsqueda con la caja de texto vacía.

**Resultado esperado**

Al tocar "Cancelar" el usuario vuelve al Home de la App y la caja de búsqueda queda vacía.

**Resultado obtenido**

«Cancelar» vuelve al Home de origen y la caja de búsqueda queda vacía.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-021-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de busqueda](<B2C-100 APP Evidencias/TC-B2C100-APP-021-android-p03-pantalla-de-busqueda.png>)

![Paso 6 — tras tocar cancelar](<B2C-100 APP Evidencias/TC-B2C100-APP-021-android-p06-tras-tocar-cancelar.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-021-android.png>)

---

### TC-100-APP-022 - Verificar que el buscador no acepta más de 100 caracteres ni muestra error [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TEXTO_101_CARACTERES} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El sistema abre la pantalla de búsqueda.
5. El usuario pega {TEXTO_101_CARACTERES} en la caja de búsqueda.
6. El sistema acepta solo los primeros 100 caracteres.

**Resultado esperado**

La caja de búsqueda contiene exactamente 100 caracteres y no se muestra ningún mensaje de error.

**Resultado obtenido**

Causa: {TEXTO_101_CARACTERES} no tiene valor en el Excel de data. Acción: declarar un texto de 101 caracteres. Verificado el 2026-10-22.

**Observación**

Causa: {TEXTO_101_CARACTERES} no tiene valor en el Excel de data. Acción: declarar un texto de 101 caracteres. Verificado el 2026-10-22.

---

### TC-100-APP-023 - Verificar que con 0 productos no se renderiza la sección del carrusel [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- {SEARCH_NO_RESULTS_001} retorna 0 productos

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_NO_RESULTS_001} = ternera

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El usuario escribe {SEARCH_NO_RESULTS_001} en la caja de búsqueda sin tocar "Buscar" en el teclado.
5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.

**Resultado esperado**

La pantalla no muestra la sección de productos (ni título, ni carrusel, ni "Ver todos") y no queda espacio vacío en su lugar.

**Resultado obtenido**

Con «ternera» (0 productos) se muestra el título «Resultado para “ternera”» con «0 productos»; no hay carrusel ni «Ver todos».

**Observación**

Esperado: con 0 productos no se renderiza la sección de productos, ni siquiera el título. Obtenido: se muestra «Resultado para “ternera” 0 productos». B2C-100.spec.ts:244. Nota: la planilla se contradice con APP-028, que espera justamente ese título con 0 resultados, y la app cumple APP-028; conviene que el equipo aclare cuál es el comportamiento correcto. Bug: no creado — pendiente de que el equipo aclare la contradicción entre APP-023 y APP-028.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-023-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de busqueda](<B2C-100 APP Evidencias/TC-B2C100-APP-023-android-p03-pantalla-de-busqueda.png>)

![Paso 5 — resultados de ternera](<B2C-100 APP Evidencias/TC-B2C100-APP-023-android-p05-resultados-de-ternera.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-023-android.png>)

---

### TC-100-APP-024 - Verificar que con 1 a 3 productos el carrusel muestra solo los disponibles sin placeholders [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- {SEARCH_1A3_PRODUCTOS} retorna entre 1 y 3 productos

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_1A3_PRODUCTOS} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El usuario escribe {SEARCH_1A3_PRODUCTOS} en la caja de búsqueda sin tocar "Buscar" en el teclado.
5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.

**Resultado esperado**

El carrusel muestra solo los productos retornados (1 a 3), alineados desde la izquierda, sin slots vacíos; "Ver todos" solo se muestra si el total de resultados supera los productos visibles.

**Resultado obtenido**

Con «marraqueta» (2 productos) el carrusel muestra solo esos 2 productos, sin slots vacíos ni «Ver todos».

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-024-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de busqueda](<B2C-100 APP Evidencias/TC-B2C100-APP-024-android-p03-pantalla-de-busqueda.png>)

![Paso 5 — resultados de marraqueta](<B2C-100 APP Evidencias/TC-B2C100-APP-024-android-p05-resultados-de-marraqueta.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-024-android.png>)

---

### TC-100-APP-025 - Verificar que con 4 o más productos el carrusel muestra 4 deslizables y "Ver todos" [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- {SEARCH_TERM_001} retorna 4 o más productos

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_TERM_001} = leche

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El usuario escribe {SEARCH_TERM_001} en la caja de búsqueda sin tocar "Buscar" en el teclado.
5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.
6. El usuario desliza el carrusel de productos hacia la izquierda.
7. El sistema desplaza el carrusel horizontalmente.
8. El usuario toca "Ver todos".
9. El sistema redirige a la SRP de {SEARCH_TERM_001}.

**Resultado esperado**

El carrusel muestra 4 productos, permite desplazamiento horizontal y "Ver todos" lleva a la SRP de {SEARCH_TERM_001}.

**Resultado obtenido**

Para «leche» (6 productos) el carrusel recorre los 6 productos y termina sin «Ver todos».

**Observación**

Esperado: el carrusel muestra 4 productos deslizables y «Ver todos» lleva a la SRP. Obtenido: para «leche» (6 productos) el carrusel recorre los 6 productos y termina sin «Ver todos». B2C-100.spec.ts:217. Bug: B2C-1305.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-025-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de busqueda](<B2C-100 APP Evidencias/TC-B2C100-APP-025-android-p03-pantalla-de-busqueda.png>)

![Paso 5 — sugerencias de leche](<B2C-100 APP Evidencias/TC-B2C100-APP-025-android-p05-sugerencias-de-leche.png>)

![Paso 7 — carrusel desplazado hasta el final](<B2C-100 APP Evidencias/TC-B2C100-APP-025-android-p07-carrusel-desplazado-hasta-el-final.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-025-android.png>)

---

### TC-100-APP-026 - Verificar que sin sugerencias de autocompletado no se renderiza la sección de chips [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- {SEARCH_SIN_SUGERENCIAS} retorna productos y 0 sugerencias de autocompletado

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_SIN_SUGERENCIAS} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El usuario escribe {SEARCH_SIN_SUGERENCIAS} en la caja de búsqueda sin tocar "Buscar" en el teclado.
5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.

**Resultado esperado**

La pantalla no muestra la sección de sugerencias (chips) y no queda espacio vacío en su lugar.

**Resultado obtenido**

El término «papaya» retorna 0 productos y no muestra chips de sugerencias.

**Observación**

Causa: {SEARCH_SIN_SUGERENCIAS} («papaya») retorna 0 productos en DEV y la precondición exige un término que retorne productos y 0 sugerencias. Acción: declarar un término con productos y sin sugerencias. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-026-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de busqueda](<B2C-100 APP Evidencias/TC-B2C100-APP-026-android-p03-pantalla-de-busqueda.png>)

![Paso 5 — resultados de papaya](<B2C-100 APP Evidencias/TC-B2C100-APP-026-android-p05-resultados-de-papaya.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-026-android.png>)

---

### TC-100-APP-027 - Verificar que con 1 a 3 sugerencias se muestran solo las disponibles sin placeholders [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- {SEARCH_1A3_SUGERENCIAS} retorna entre 1 y 3 sugerencias de autocompletado

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_1A3_SUGERENCIAS} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El usuario escribe {SEARCH_1A3_SUGERENCIAS} en la caja de búsqueda sin tocar "Buscar" en el teclado.
5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.

**Resultado esperado**

Se muestran solo las sugerencias retornadas (1 a 3) como chips, sin slots vacíos para las faltantes.

**Resultado obtenido**

Con «marraqueta» se muestran 2 chips de sugerencias (las disponibles), sin slots vacíos.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-027-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de busqueda](<B2C-100 APP Evidencias/TC-B2C100-APP-027-android-p03-pantalla-de-busqueda.png>)

![Paso 5 — sugerencias de marraqueta](<B2C-100 APP Evidencias/TC-B2C100-APP-027-android-p05-sugerencias-de-marraqueta.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-027-android.png>)

---

### TC-100-APP-028 - Verificar que sin productos ni sugerencias se muestra solo el título con 0 resultados [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- {SEARCH_NO_RESULTS_001} retorna 0 productos y 0 sugerencias

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_NO_RESULTS_001} = ternera

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda del header sin escribir nada.
4. El usuario escribe {SEARCH_NO_RESULTS_001} en la caja de búsqueda sin tocar "Buscar" en el teclado.
5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.

**Resultado esperado**

La pantalla muestra "Resultados para '{SEARCH_NO_RESULTS_001}'" con 0 productos, sin sugerencias, sin carrusel y sin "Ver todos".

**Resultado obtenido**

Con «ternera» se muestra «Resultado para “ternera”» con «0 productos», sin sugerencias, sin carrusel y sin «Ver todos».

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-028-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de busqueda](<B2C-100 APP Evidencias/TC-B2C100-APP-028-android-p03-pantalla-de-busqueda.png>)

![Paso 5 — resultados de ternera](<B2C-100 APP Evidencias/TC-B2C100-APP-028-android-p05-resultados-de-ternera.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-028-android.png>)

---

### TC-100-APP-029 - Verificar que al borrar hasta 2 caracteres desde ≥3 la pantalla recupera el contenido por defecto [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-22 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | Pixel 6 (emulador) · Android 14 |
| Spec | tests-app/B2C-100.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_USER}
- En la sesión actual se buscó {SEARCH_TERM_001} y se visitó la PDP de {SKU_VALID_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SEARCH_TERM_001} = leche
- {SKU_VALID_001} = 000000000000675191-UN
- {COMPRADOR_USER} = 11.223.344-K
- {COMPRADOR_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca la caja de búsqueda y verifica que se muestran las secciones por defecto.
4. El usuario escribe los 3 primeros caracteres de {SEARCH_TERM_001} y espera que se activen los resultados dinámicos.
5. El usuario borra 1 carácter (quedan 2).
6. El sistema cancela la búsqueda dinámica en curso y restaura el contenido por defecto.

**Resultado esperado**

Al retroceder a 2 caracteres, la pantalla elimina los resultados dinámicos y el skeleton, y vuelve a mostrar "Tus búsquedas recientes", "Lo último que viste" y "Lo más buscado" según el perfil.

**Resultado obtenido**

La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.

**Observación**

Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.

**Evidencia**

![Paso 1 — app abierta en el home](<B2C-100 APP Evidencias/TC-B2C100-APP-029-android-p01-app-abierta-en-el-home.png>)

![Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre](<B2C-100 APP Evidencias/TC-B2C100-APP-029-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png>)

![Paso 5 — clave de acceso por correo deshabilitado](<B2C-100 APP Evidencias/TC-B2C100-APP-029-android-p05-clave-de-acceso-por-correo-deshabilitado.png>)

![Estado final](<B2C-100 APP Evidencias/TC-B2C100-APP-029-android.png>)

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
  "suite": "B2C-100 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-100 APP Test Cases.xlsx",
  "title": "Buscador de la app (Android)",
  "updated_at": "2026-10-22"
 },
 "history": {
  "2026-10-22": [
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
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El buscador es accesible desde el tabbar, el header full y el header sticky, con placeholder \"¿Qué estás buscando?\" e ícono lupa.",
   "form_factor": "app",
   "id": "TC-100-APP-001",
   "name": "Verificar que el buscador es accesible desde el tabbar, el header full y el header sticky [App] [Guest]",
   "observation": "Esperado: el header full del Home muestra la caja con el placeholder «¿Qué estás buscando?» y la lupa, y el header sticky también. Obtenido: el Home no muestra ninguna caja de búsqueda, ni al abrirlo ni al desplazarse; el buscador solo se abre desde el tab «Buscar». B2C-100.spec.ts:83. Bug: B2C-1303.",
   "observed": "El Home no muestra caja de búsqueda ni en el header completo ni al desplazarse; el buscador solo es accesible desde el tab «Buscar» del tabbar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App",
   "screenshots": [
    {
     "caption": "Paso 1 — home header completo",
     "file": "TC-B2C100-APP-001-android-p01-home-header-completo.png"
    },
    {
     "caption": "Paso 4 — home tras desplazarse header sticky",
     "file": "TC-B2C100-APP-001-android-p04-home-tras-desplazarse-header-sticky.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App y muestra en el header full la caja de texto con placeholder \"¿Qué estás buscando?\" y el ícono lupa.\n3. El usuario hace scroll hacia abajo en el Home.\n4. El sistema muestra el header sticky con la caja de texto \"¿Qué estás buscando?\" y el ícono lupa.\n5. El usuario toca la opción de búsqueda del tabbar.\n6. El sistema abre la pantalla de búsqueda.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La pantalla de búsqueda se muestra a pantalla completa con \"Cancelar\" y las 3 secciones en el orden definido.",
   "form_factor": "app",
   "id": "TC-100-APP-002",
   "name": "Verificar que la pantalla de búsqueda muestra las 3 secciones en orden a pantalla completa [App] [Logueado]",
   "observation": "Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.",
   "observed": "La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- En la sesión actual se buscó {SEARCH_TERM_001} y se visitó la PDP de {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-002-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre",
     "file": "TC-B2C100-APP-002-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png"
    },
    {
     "caption": "Paso 5 — clave de acceso por correo deshabilitado",
     "file": "TC-B2C100-APP-002-android-p05-clave-de-acceso-por-correo-deshabilitado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-002-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda a pantalla completa con \"Cancelar\" a la derecha y muestra, en este orden: ícono + \"Tus búsquedas recientes\" + \"Limpiar\", ícono + \"Lo último que viste\" + \"Limpiar\" e ícono + \"Lo más buscado\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_TERM_001} = leche\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La sección \"Tus búsquedas recientes\" muestra {SEARCH_TERM_001} y {SEARCH_PARTIAL_001} como chips horizontales.",
   "form_factor": "app",
   "id": "TC-100-APP-003",
   "name": "Verificar que \"Tus búsquedas recientes\" muestra los términos de la sesión como chips horizontales [App] [Logueado]",
   "observation": "Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.",
   "observed": "La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- En la sesión actual se buscaron {SEARCH_TERM_001} y {SEARCH_PARTIAL_001}",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-003-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre",
     "file": "TC-B2C100-APP-003-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png"
    },
    {
     "caption": "Paso 5 — clave de acceso por correo deshabilitado",
     "file": "TC-B2C100-APP-003-android-p05-clave-de-acceso-por-correo-deshabilitado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Tus búsquedas recientes\" con {SEARCH_TERM_001} y {SEARCH_PARTIAL_001} como chips en disposición horizontal.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_TERM_001} = leche\n- {SEARCH_PARTIAL_001} = fillet\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Tras iniciar una nueva sesión, la pantalla de búsqueda no muestra \"Tus búsquedas recientes\" ni el término {SEARCH_TERM_001}.",
   "form_factor": "app",
   "id": "TC-100-APP-004",
   "name": "Verificar que las búsquedas recientes no se conservan al cerrar sesión e iniciar una nueva [App] [Logueado]",
   "observation": "Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.",
   "observed": "La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-004-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre",
     "file": "TC-B2C100-APP-004-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png"
    },
    {
     "caption": "Paso 5 — clave de acceso por correo deshabilitado",
     "file": "TC-B2C100-APP-004-android-p05-clave-de-acceso-por-correo-deshabilitado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-004-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario busca {SEARCH_TERM_001} desde la caja de búsqueda.\n4. El sistema registra {SEARCH_TERM_001} en \"Tus búsquedas recientes\".\n5. El usuario cierra sesión desde Mi Cuenta y vuelve a iniciar sesión con la cuenta {COMPRADOR_USER}.\n6. El sistema autentica al usuario y carga el Home de la App.\n7. El usuario toca la caja de búsqueda del header sin escribir nada.\n8. El sistema abre la pantalla de búsqueda sin la sección \"Tus búsquedas recientes\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_TERM_001} = leche\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Se muestra la página de resultados de búsqueda (SRP) de {SEARCH_TERM_001}.",
   "form_factor": "app",
   "id": "TC-100-APP-005",
   "name": "Verificar que tocar un chip de búsqueda reciente redirige a la SRP del término [App] [Logueado]",
   "observation": "Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.",
   "observed": "La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- En la sesión actual se buscó {SEARCH_TERM_001}",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-005-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre",
     "file": "TC-B2C100-APP-005-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png"
    },
    {
     "caption": "Paso 5 — clave de acceso por correo deshabilitado",
     "file": "TC-B2C100-APP-005-android-p05-clave-de-acceso-por-correo-deshabilitado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Tus búsquedas recientes\" con el chip {SEARCH_TERM_001}.\n5. El usuario toca el chip {SEARCH_TERM_001}.\n6. El sistema redirige a la página de resultados de búsqueda de {SEARCH_TERM_001}.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_TERM_001} = leche\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La sección muestra los últimos 6 productos visitados ({SKU_UNITARIO} a {SKU_PRECIO_MIEMBRO}) con thumbnail y nombre, y no muestra {SKU_VALID_001}.",
   "form_factor": "app",
   "id": "TC-100-APP-006",
   "name": "Verificar que \"Lo último que viste\" muestra los 6 últimos productos visitados con imagen y nombre [App] [Logueado]",
   "observation": "Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.",
   "observed": "La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- En la sesión actual se visitaron, en este orden, las PDP de {SKU_VALID_001}, {SKU_UNITARIO}, {SKU_PESABLE}, {SKU_PROM_NxM}, {SKU_PROM_2x1}, {SKU_PROM_NxPRECIO} y {SKU_PRECIO_MIEMBRO}",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-006-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre",
     "file": "TC-B2C100-APP-006-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png"
    },
    {
     "caption": "Paso 5 — clave de acceso por correo deshabilitado",
     "file": "TC-B2C100-APP-006-android-p05-clave-de-acceso-por-correo-deshabilitado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-006-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Lo último que viste\" con 6 productos, cada uno con thumbnail y nombre.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {SKU_PESABLE} = 000000000000037972-KG\n- {SKU_PROM_NxM} = 000000000641229002-UN\n- {SKU_PROM_2x1} = 000000000664214001-UN\n- {SKU_PROM_NxPRECIO} = 000000000000666200-UN\n- {SKU_PRECIO_MIEMBRO} = 000000000000662457-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Se muestra la PDP de {SKU_VALID_001}.",
   "form_factor": "app",
   "id": "TC-100-APP-007",
   "name": "Verificar que tocar un producto de \"Lo último que viste\" redirige a su PDP [App] [Logueado]",
   "observation": "Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.",
   "observed": "La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- En la sesión actual se visitó la PDP de {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-007-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre",
     "file": "TC-B2C100-APP-007-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png"
    },
    {
     "caption": "Paso 5 — clave de acceso por correo deshabilitado",
     "file": "TC-B2C100-APP-007-android-p05-clave-de-acceso-por-correo-deshabilitado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-007-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Lo último que viste\" con {SKU_VALID_001}.\n5. El usuario toca la imagen de {SKU_VALID_001}.\n6. El sistema redirige a la PDP de {SKU_VALID_001}.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La sección \"Tus búsquedas recientes\" no se muestra y no queda espacio vacío en su lugar.",
   "form_factor": "app",
   "id": "TC-100-APP-008",
   "name": "Verificar que no se muestra \"Tus búsquedas recientes\" sin búsquedas en la sesión [App] [Logueado]",
   "observation": "Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.",
   "observed": "La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- En la sesión actual no se realizaron búsquedas\n- En la sesión actual se visitó la PDP de {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-008-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre",
     "file": "TC-B2C100-APP-008-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png"
    },
    {
     "caption": "Paso 5 — clave de acceso por correo deshabilitado",
     "file": "TC-B2C100-APP-008-android-p05-clave-de-acceso-por-correo-deshabilitado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-008-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda con \"Lo último que viste\" y \"Lo más buscado\", sin la sección \"Tus búsquedas recientes\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La sección \"Lo último que viste\" no se muestra y no queda espacio vacío en su lugar.",
   "form_factor": "app",
   "id": "TC-100-APP-009",
   "name": "Verificar que no se muestra \"Lo último que viste\" sin visitas a PDP en la sesión [App] [Logueado]",
   "observation": "Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.",
   "observed": "La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- La cuenta {COMPRADOR_USER} no tiene visitas a PDP\n- En la sesión actual se buscó {SEARCH_TERM_001}",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-009-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre",
     "file": "TC-B2C100-APP-009-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png"
    },
    {
     "caption": "Paso 5 — clave de acceso por correo deshabilitado",
     "file": "TC-B2C100-APP-009-android-p05-clave-de-acceso-por-correo-deshabilitado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-009-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda con \"Tus búsquedas recientes\" y \"Lo más buscado\", sin la sección \"Lo último que viste\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_TERM_001} = leche\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La pantalla de búsqueda muestra únicamente \"Lo más buscado\".",
   "form_factor": "app",
   "id": "TC-100-APP-010",
   "name": "Verificar que la pantalla de búsqueda del invitado sin historial muestra solo \"Lo más buscado\" [App] [Guest]",
   "observed": "Con la app sin datos, la pantalla de búsqueda muestra solo «Lo más buscado».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- App recién instalada o con datos borrados, sin búsquedas en la sesión",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-010-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de busqueda",
     "file": "TC-B2C100-APP-010-android-p03-pantalla-de-busqueda.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-010-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda y muestra solo la sección ícono + \"Lo más buscado\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Se muestran \"Tus búsquedas recientes\" (con {SEARCH_TERM_001} y \"Limpiar\") y \"Lo más buscado\", sin \"Lo último que viste\".",
   "form_factor": "app",
   "id": "TC-100-APP-011",
   "name": "Verificar que la pantalla de búsqueda del invitado con historial muestra recientes y \"Lo más buscado\" [App] [Guest]",
   "observed": "Tras buscar «leche», la pantalla muestra «Tus búsquedas recientes» con el chip «leche» y «Limpiar», más «Lo más buscado»; no muestra «Lo último que viste».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- En la sesión actual se buscó {SEARCH_TERM_001}",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-011-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de busqueda",
     "file": "TC-B2C100-APP-011-android-p03-pantalla-de-busqueda.png"
    },
    {
     "caption": "Paso 6 — busqueda reabierta con historial",
     "file": "TC-B2C100-APP-011-android-p06-busqueda-reabierta-con-historial.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-011-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda y muestra ícono + \"Tus búsquedas recientes\" + \"Limpiar\" con {SEARCH_TERM_001}, seguido de ícono + \"Lo más buscado\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_TERM_001} = leche"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "\"Lo más buscado\" muestra 6 chips completos (sin truncar ni ocultar) en un máximo de 2 filas.",
   "form_factor": "app",
   "id": "TC-100-APP-012",
   "name": "Verificar que \"Lo más buscado\" muestra 6 chips en máximo 2 filas sin truncar [App] [Guest]",
   "observed": "«Lo más buscado» muestra 6 chips completos (Helado, Pollo, Leche, Cervezas, Queso, Yogurt) en 2 filas.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-012-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de busqueda",
     "file": "TC-B2C100-APP-012-android-p03-pantalla-de-busqueda.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-012-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Lo más buscado\" con 6 chips en disposición horizontal, en un máximo de 2 filas y con el texto completo de cada término.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Los 6 términos de \"Lo más buscado\" y su orden son iguales en la App y en la Web Desktop.",
   "form_factor": "app",
   "id": "TC-100-APP-013",
   "name": "Verificar que el orden de \"Lo más buscado\" es el mismo que en Web [App] [Guest]",
   "observation": "Esperado: los 6 términos de «Lo más buscado» y su orden son iguales en la app y en la Web Desktop. Obtenido: app: Helado, Pollo, Leche, Cervezas, Queso, Yogurt; Web: Leche, Arroz, Pan, Aceite, Azúcar, Huevos (solo coincide «Leche», en otra posición). B2C-100.spec.ts:150. Bug: B2C-1304.",
   "observed": "La app muestra Helado, Pollo, Leche, Cervezas, Queso y Yogurt; la Web Desktop muestra Leche, Arroz, Pan, Aceite, Azúcar y Huevos.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Ambas consultas se realizan en el mismo momento, sobre el mismo ambiente",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-013-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de busqueda",
     "file": "TC-B2C100-APP-013-android-p03-pantalla-de-busqueda.png"
    },
    {
     "caption": "Paso 5 — lo mas buscado en la app",
     "file": "TC-B2C100-APP-013-android-p05-lo-mas-buscado-en-la-app.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-013-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Lo más buscado\" con 6 chips.\n5. El usuario ingresa a {BASE_URL} en un navegador Desktop y hace clic en la caja de búsqueda.\n6. El sistema abre el modal de búsqueda con la sección \"Lo más buscado\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Se muestra la SRP del término del chip tocado.",
   "form_factor": "app",
   "id": "TC-100-APP-014",
   "name": "Verificar que tocar un chip de \"Lo más buscado\" redirige a la SRP del término [App] [Guest]",
   "observed": "Al tocar el chip «Leche» se muestra la SRP del término, con su conteo de productos. Al tocar «Helado» la app muestra «Sin resultados para Helado» (el catálogo de DEV no tiene helados).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-014-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de busqueda",
     "file": "TC-B2C100-APP-014-android-p03-pantalla-de-busqueda.png"
    },
    {
     "caption": "Paso 5 — srp de leche",
     "file": "TC-B2C100-APP-014-android-p05-srp-de-leche.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-014-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Lo más buscado\".\n5. El usuario toca un chip de \"Lo más buscado\".\n6. El sistema redirige a la página de resultados de búsqueda del término tocado.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La sección \"Tus búsquedas recientes\" desaparece al tocar \"Limpiar\" y no se muestra al reabrir el buscador.",
   "form_factor": "app",
   "id": "TC-100-APP-015",
   "name": "Verificar que \"Limpiar\" elimina \"Tus búsquedas recientes\" y no reaparece al reabrir [App] [Logueado]",
   "observation": "Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.",
   "observed": "La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- En la sesión actual se buscó {SEARCH_TERM_001}",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-015-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre",
     "file": "TC-B2C100-APP-015-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png"
    },
    {
     "caption": "Paso 5 — clave de acceso por correo deshabilitado",
     "file": "TC-B2C100-APP-015-android-p05-clave-de-acceso-por-correo-deshabilitado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-015-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Tus búsquedas recientes\" con {SEARCH_TERM_001}.\n5. El usuario toca \"Limpiar\" en \"Tus búsquedas recientes\".\n6. El sistema borra las búsquedas recientes y oculta la sección.\n7. El usuario toca \"Cancelar\" y vuelve a tocar la caja de búsqueda.\n8. El sistema abre la pantalla de búsqueda sin la sección \"Tus búsquedas recientes\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_TERM_001} = leche\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La sección \"Lo último que viste\" desaparece al tocar \"Limpiar\" y no se muestra al reabrir el buscador.",
   "form_factor": "app",
   "id": "TC-100-APP-016",
   "name": "Verificar que \"Limpiar\" elimina \"Lo último que viste\" y no reaparece al reabrir [App] [Logueado]",
   "observation": "Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.",
   "observed": "La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- En la sesión actual se visitó la PDP de {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-016-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre",
     "file": "TC-B2C100-APP-016-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png"
    },
    {
     "caption": "Paso 5 — clave de acceso por correo deshabilitado",
     "file": "TC-B2C100-APP-016-android-p05-clave-de-acceso-por-correo-deshabilitado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-016-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra la sección \"Lo último que viste\" con {SKU_VALID_001}.\n5. El usuario toca \"Limpiar\" en \"Lo último que viste\".\n6. El sistema borra las visitas recientes y oculta la sección.\n7. El usuario toca \"Cancelar\" y vuelve a tocar la caja de búsqueda.\n8. El sistema abre la pantalla de búsqueda sin la sección \"Lo último que viste\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Con 2 caracteres se siguen mostrando las 3 secciones por defecto, sin skeleton loader ni resultados de búsqueda dinámica.",
   "form_factor": "app",
   "id": "TC-100-APP-017",
   "name": "Verificar que con 1 o 2 caracteres se mantiene el contenido por defecto sin búsqueda dinámica [App] [Logueado]",
   "observation": "Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.",
   "observed": "La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- En la sesión actual se buscó {SEARCH_TERM_001} y se visitó la PDP de {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-017-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre",
     "file": "TC-B2C100-APP-017-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png"
    },
    {
     "caption": "Paso 5 — clave de acceso por correo deshabilitado",
     "file": "TC-B2C100-APP-017-android-p05-clave-de-acceso-por-correo-deshabilitado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-017-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema muestra \"Tus búsquedas recientes\", \"Lo último que viste\" y \"Lo más buscado\".\n5. El usuario escribe los 2 primeros caracteres de {SEARCH_TERM_001}.\n6. El sistema mantiene visibles las 3 secciones por defecto.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_TERM_001} = leche\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Tras el tercer carácter se muestra el skeleton loader y luego los resultados del término parcial, sin tocar \"Buscar\" en el teclado.",
   "form_factor": "app",
   "id": "TC-100-APP-018",
   "name": "Verificar que al tercer carácter se muestra el skeleton y luego los resultados dinámicos [App] [Guest]",
   "observation": "Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: sin la herramienta de proxy no se puede aplicar red lenta para ver el skeleton. Acción: declarar la herramienta de proxy. Verificado el 2026-10-22.",
   "observed": "Causa: {HERRAMIENTA_PROXY_APP} no tiene valor en el Excel de data: sin la herramienta de proxy no se puede aplicar red lenta para ver el skeleton. Acción: declarar la herramienta de proxy. Verificado el 2026-10-22.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- {HERRAMIENTA_PROXY_APP} configurado con throttling de red lenta",
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda.\n5. El usuario escribe los 3 primeros caracteres de {SEARCH_TERM_001} y deja de escribir.\n6. El sistema muestra un skeleton loader y, al recibir la respuesta, lo reemplaza por las sugerencias de autocompletado y el carrusel de productos.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_TERM_001} = leche\n- {HERRAMIENTA_PROXY_APP} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Los resultados mostrados corresponden al término completo {SEARCH_TERM_001} y no a un término parcial intermedio.",
   "form_factor": "app",
   "id": "TC-100-APP-019",
   "name": "Verificar que seguir escribiendo actualiza los resultados según el término estabilizado [App] [Guest]",
   "observed": "Al escribir «leche» de forma continua, los resultados corresponden al término completo («Resultado para “leche”») y no a uno parcial.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-019-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de busqueda",
     "file": "TC-B2C100-APP-019-android-p03-pantalla-de-busqueda.png"
    },
    {
     "caption": "Paso 5 — resultados de leche",
     "file": "TC-B2C100-APP-019-android-p05-resultados-de-leche.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-019-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda.\n5. El usuario escribe {SEARCH_TERM_001} de forma continua, sin pausas entre caracteres.\n6. El sistema actualiza la pantalla de sugerencias y muestra los resultados de {SEARCH_TERM_001}.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_TERM_001} = leche"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La pantalla muestra título con cantidad de resultados, hasta 4 chips de sugerencias, carrusel deslizable de hasta 4 productos y \"Ver todos\".",
   "form_factor": "app",
   "id": "TC-100-APP-020",
   "name": "Verificar que la pantalla de sugerencias muestra título, chips, carrusel y \"Ver todos\" [App] [Guest]",
   "observation": "Esperado: el carrusel muestra hasta 4 productos deslizables y «Ver todos». Obtenido: para «leche» (6 productos) el carrusel recorre los 6 productos y termina sin «Ver todos»; el título y los chips sí se muestran. B2C-100.spec.ts:217. Bug: B2C-1305.",
   "observed": "Para «leche» (6 productos) el carrusel se desplaza por los 6 productos y termina sin «Ver todos».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- {SEARCH_TERM_001} retorna 4 o más productos y al menos 1 sugerencia",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-020-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de busqueda",
     "file": "TC-B2C100-APP-020-android-p03-pantalla-de-busqueda.png"
    },
    {
     "caption": "Paso 5 — sugerencias de leche",
     "file": "TC-B2C100-APP-020-android-p05-sugerencias-de-leche.png"
    },
    {
     "caption": "Paso 7 — carrusel desplazado hasta el final",
     "file": "TC-B2C100-APP-020-android-p07-carrusel-desplazado-hasta-el-final.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-020-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El usuario escribe {SEARCH_TERM_001} en la caja de búsqueda sin tocar \"Buscar\" en el teclado.\n5. El sistema muestra el título \"Resultados para '{SEARCH_TERM_001}'\" + cantidad + \"productos\", hasta 4 sugerencias de autocompletado como chips, un carrusel de hasta 4 productos con shelf simplificada deslizable hacia la derecha y el botón \"Ver todos\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_TERM_001} = leche"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Al tocar \"Cancelar\" el usuario vuelve al Home de la App y la caja de búsqueda queda vacía.",
   "form_factor": "app",
   "id": "TC-100-APP-021",
   "name": "Verificar que \"Cancelar\" cierra la búsqueda, limpia el buscador y mantiene la página de origen [App] [Guest]",
   "observed": "«Cancelar» vuelve al Home de origen y la caja de búsqueda queda vacía.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-021-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de busqueda",
     "file": "TC-B2C100-APP-021-android-p03-pantalla-de-busqueda.png"
    },
    {
     "caption": "Paso 6 — tras tocar cancelar",
     "file": "TC-B2C100-APP-021-android-p06-tras-tocar-cancelar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-021-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda a pantalla completa con la opción \"Cancelar\" a la derecha del buscador.\n5. El usuario escribe {SEARCH_TERM_001} y toca \"Cancelar\".\n6. El sistema cierra la pantalla de búsqueda y vuelve al Home de la App.\n7. El usuario toca nuevamente la caja de búsqueda.\n8. El sistema abre la pantalla de búsqueda con la caja de texto vacía.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_TERM_001} = leche"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La caja de búsqueda contiene exactamente 100 caracteres y no se muestra ningún mensaje de error.",
   "form_factor": "app",
   "id": "TC-100-APP-022",
   "name": "Verificar que el buscador no acepta más de 100 caracteres ni muestra error [App] [Guest]",
   "observation": "Causa: {TEXTO_101_CARACTERES} no tiene valor en el Excel de data. Acción: declarar un texto de 101 caracteres. Verificado el 2026-10-22.",
   "observed": "Causa: {TEXTO_101_CARACTERES} no tiene valor en el Excel de data. Acción: declarar un texto de 101 caracteres. Verificado el 2026-10-22.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App",
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El sistema abre la pantalla de búsqueda.\n5. El usuario pega {TEXTO_101_CARACTERES} en la caja de búsqueda.\n6. El sistema acepta solo los primeros 100 caracteres.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TEXTO_101_CARACTERES} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La pantalla no muestra la sección de productos (ni título, ni carrusel, ni \"Ver todos\") y no queda espacio vacío en su lugar.",
   "form_factor": "app",
   "id": "TC-100-APP-023",
   "name": "Verificar que con 0 productos no se renderiza la sección del carrusel [App] [Guest]",
   "observation": "Esperado: con 0 productos no se renderiza la sección de productos, ni siquiera el título. Obtenido: se muestra «Resultado para “ternera” 0 productos». B2C-100.spec.ts:244. Nota: la planilla se contradice con APP-028, que espera justamente ese título con 0 resultados, y la app cumple APP-028; conviene que el equipo aclare cuál es el comportamiento correcto. Bug: no creado — pendiente de que el equipo aclare la contradicción entre APP-023 y APP-028.",
   "observed": "Con «ternera» (0 productos) se muestra el título «Resultado para “ternera”» con «0 productos»; no hay carrusel ni «Ver todos».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- {SEARCH_NO_RESULTS_001} retorna 0 productos",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-023-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de busqueda",
     "file": "TC-B2C100-APP-023-android-p03-pantalla-de-busqueda.png"
    },
    {
     "caption": "Paso 5 — resultados de ternera",
     "file": "TC-B2C100-APP-023-android-p05-resultados-de-ternera.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-023-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El usuario escribe {SEARCH_NO_RESULTS_001} en la caja de búsqueda sin tocar \"Buscar\" en el teclado.\n5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_NO_RESULTS_001} = ternera"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El carrusel muestra solo los productos retornados (1 a 3), alineados desde la izquierda, sin slots vacíos; \"Ver todos\" solo se muestra si el total de resultados supera los productos visibles.",
   "form_factor": "app",
   "id": "TC-100-APP-024",
   "name": "Verificar que con 1 a 3 productos el carrusel muestra solo los disponibles sin placeholders [App] [Guest]",
   "observed": "Con «marraqueta» (2 productos) el carrusel muestra solo esos 2 productos, sin slots vacíos ni «Ver todos».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- {SEARCH_1A3_PRODUCTOS} retorna entre 1 y 3 productos",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-024-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de busqueda",
     "file": "TC-B2C100-APP-024-android-p03-pantalla-de-busqueda.png"
    },
    {
     "caption": "Paso 5 — resultados de marraqueta",
     "file": "TC-B2C100-APP-024-android-p05-resultados-de-marraqueta.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-024-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El usuario escribe {SEARCH_1A3_PRODUCTOS} en la caja de búsqueda sin tocar \"Buscar\" en el teclado.\n5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_1A3_PRODUCTOS} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "El carrusel muestra 4 productos, permite desplazamiento horizontal y \"Ver todos\" lleva a la SRP de {SEARCH_TERM_001}.",
   "form_factor": "app",
   "id": "TC-100-APP-025",
   "name": "Verificar que con 4 o más productos el carrusel muestra 4 deslizables y \"Ver todos\" [App] [Guest]",
   "observation": "Esperado: el carrusel muestra 4 productos deslizables y «Ver todos» lleva a la SRP. Obtenido: para «leche» (6 productos) el carrusel recorre los 6 productos y termina sin «Ver todos». B2C-100.spec.ts:217. Bug: B2C-1305.",
   "observed": "Para «leche» (6 productos) el carrusel recorre los 6 productos y termina sin «Ver todos».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- {SEARCH_TERM_001} retorna 4 o más productos",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-025-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de busqueda",
     "file": "TC-B2C100-APP-025-android-p03-pantalla-de-busqueda.png"
    },
    {
     "caption": "Paso 5 — sugerencias de leche",
     "file": "TC-B2C100-APP-025-android-p05-sugerencias-de-leche.png"
    },
    {
     "caption": "Paso 7 — carrusel desplazado hasta el final",
     "file": "TC-B2C100-APP-025-android-p07-carrusel-desplazado-hasta-el-final.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-025-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El usuario escribe {SEARCH_TERM_001} en la caja de búsqueda sin tocar \"Buscar\" en el teclado.\n5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.\n6. El usuario desliza el carrusel de productos hacia la izquierda.\n7. El sistema desplaza el carrusel horizontalmente.\n8. El usuario toca \"Ver todos\".\n9. El sistema redirige a la SRP de {SEARCH_TERM_001}.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_TERM_001} = leche"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La pantalla no muestra la sección de sugerencias (chips) y no queda espacio vacío en su lugar.",
   "form_factor": "app",
   "id": "TC-100-APP-026",
   "name": "Verificar que sin sugerencias de autocompletado no se renderiza la sección de chips [App] [Guest]",
   "observation": "Causa: {SEARCH_SIN_SUGERENCIAS} («papaya») retorna 0 productos en DEV y la precondición exige un término que retorne productos y 0 sugerencias. Acción: declarar un término con productos y sin sugerencias. Verificado el 2026-10-22.",
   "observed": "El término «papaya» retorna 0 productos y no muestra chips de sugerencias.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- {SEARCH_SIN_SUGERENCIAS} retorna productos y 0 sugerencias de autocompletado",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-026-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de busqueda",
     "file": "TC-B2C100-APP-026-android-p03-pantalla-de-busqueda.png"
    },
    {
     "caption": "Paso 5 — resultados de papaya",
     "file": "TC-B2C100-APP-026-android-p05-resultados-de-papaya.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-026-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El usuario escribe {SEARCH_SIN_SUGERENCIAS} en la caja de búsqueda sin tocar \"Buscar\" en el teclado.\n5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_SIN_SUGERENCIAS} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Se muestran solo las sugerencias retornadas (1 a 3) como chips, sin slots vacíos para las faltantes.",
   "form_factor": "app",
   "id": "TC-100-APP-027",
   "name": "Verificar que con 1 a 3 sugerencias se muestran solo las disponibles sin placeholders [App] [Guest]",
   "observed": "Con «marraqueta» se muestran 2 chips de sugerencias (las disponibles), sin slots vacíos.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- {SEARCH_1A3_SUGERENCIAS} retorna entre 1 y 3 sugerencias de autocompletado",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-027-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de busqueda",
     "file": "TC-B2C100-APP-027-android-p03-pantalla-de-busqueda.png"
    },
    {
     "caption": "Paso 5 — sugerencias de marraqueta",
     "file": "TC-B2C100-APP-027-android-p05-sugerencias-de-marraqueta.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-027-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El usuario escribe {SEARCH_1A3_SUGERENCIAS} en la caja de búsqueda sin tocar \"Buscar\" en el teclado.\n5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_1A3_SUGERENCIAS} = TBD"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "La pantalla muestra \"Resultados para '{SEARCH_NO_RESULTS_001}'\" con 0 productos, sin sugerencias, sin carrusel y sin \"Ver todos\".",
   "form_factor": "app",
   "id": "TC-100-APP-028",
   "name": "Verificar que sin productos ni sugerencias se muestra solo el título con 0 resultados [App] [Guest]",
   "observed": "Con «ternera» se muestra «Resultado para “ternera”» con «0 productos», sin sugerencias, sin carrusel y sin «Ver todos».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- {SEARCH_NO_RESULTS_001} retorna 0 productos y 0 sugerencias",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-028-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de busqueda",
     "file": "TC-B2C100-APP-028-android-p03-pantalla-de-busqueda.png"
    },
    {
     "caption": "Paso 5 — resultados de ternera",
     "file": "TC-B2C100-APP-028-android-p05-resultados-de-ternera.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-028-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda del header sin escribir nada.\n4. El usuario escribe {SEARCH_NO_RESULTS_001} en la caja de búsqueda sin tocar \"Buscar\" en el teclado.\n5. El sistema ejecuta la búsqueda dinámica y muestra la pantalla de sugerencias.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_NO_RESULTS_001} = ternera"
  },
  {
   "browser": "—",
   "device": "Pixel 6 (emulador) · Android 14",
   "executed_at": "2026-10-22",
   "expected": "Al retroceder a 2 caracteres, la pantalla elimina los resultados dinámicos y el skeleton, y vuelve a mostrar \"Tus búsquedas recientes\", \"Lo último que viste\" y \"Lo más buscado\" según el perfil.",
   "form_factor": "app",
   "id": "TC-100-APP-029",
   "name": "Verificar que al borrar hasta 2 caracteres desde ≥3 la pantalla recupera el contenido por defecto [App] [Logueado]",
   "observation": "Causa: la app inicia sesión solo con RUT: la opción «Clave de acceso por correo» está deshabilitada en v1.0.7 (verificado en vivo el 2026-10-22: el elemento existe pero no está habilitado) y {COMPRADOR_USER} es un correo; no hay un RUT de cuenta de prueba en el Excel de data. Acción: declarar el RUT y la contraseña de una cuenta de prueba. Verificado el 2026-10-22.",
   "observed": "La pantalla de inicio de sesión de la app pide RUT; «Clave de acceso por correo» está deshabilitada.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_USER}\n- En la sesión actual se buscó {SEARCH_TERM_001} y se visitó la PDP de {SKU_VALID_001}",
   "screenshots": [
    {
     "caption": "Paso 1 — app abierta en el home",
     "file": "TC-B2C100-APP-029-android-p01-app-abierta-en-el-home.png"
    },
    {
     "caption": "Paso 3 — pantalla de inicio de sesion rut y clave de acceso por corre",
     "file": "TC-B2C100-APP-029-android-p03-pantalla-de-inicio-de-sesion-rut-y-clave-de-acceso-por-corre.png"
    },
    {
     "caption": "Paso 5 — clave de acceso por correo deshabilitado",
     "file": "TC-B2C100-APP-029-android-p05-clave-de-acceso-por-correo-deshabilitado.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C100-APP-029-android.png"
    }
   ],
   "spec": "tests-app/B2C-100.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca la caja de búsqueda y verifica que se muestran las secciones por defecto.\n4. El usuario escribe los 3 primeros caracteres de {SEARCH_TERM_001} y espera que se activen los resultados dinámicos.\n5. El usuario borra 1 carácter (quedan 2).\n6. El sistema cancela la búsqueda dinámica en curso y restaura el contenido por defecto.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SEARCH_TERM_001} = leche\n- {SKU_VALID_001} = 000000000000675191-UN\n- {COMPRADOR_USER} = 11.223.344-K\n- {COMPRADOR_PASSWORD} = [contraseña omitida]"
  }
 ]
}
-->
