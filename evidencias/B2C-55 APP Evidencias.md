# B2C-55 APP - Carrusel My Usuals (Android) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-55 APP |
| Última actualización | 2026-11-11 |
| Ejecutado por | Victor Chirinos |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Dispositivo Android | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) · cl.smu.unimarcapp.sfcc.qa |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP1/B2C-55 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 6 |
| Bloqueado Data | 3 |
| Bloqueado | 2 |
| **Total** | **11** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-11 | 11 | TC-B2C55-APP-001, TC-B2C55-APP-002, TC-B2C55-APP-003, TC-B2C55-APP-004, TC-B2C55-APP-005, TC-B2C55-APP-006, TC-B2C55-APP-007, TC-B2C55-APP-008, TC-B2C55-APP-009, TC-B2C55-APP-010, TC-B2C55-APP-011 |

## Detalle por caso de prueba

### TC-B2C55-APP-001 - Verificar que el carrusel My Usuals muestra los productos en el orden de relevancia del atributo myUsualsProducts [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 101.0 s |
| Spec | tests-app/B2C-55.spec.ts:50 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)
- Se conoce el orden de los productos en el atributo myUsualsProducts de la cuenta (orden de relevancia definido por Data SMU)

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario recorre el carrusel de izquierda a derecha y compara el orden con el atributo myUsualsProducts de la cuenta.

**Resultado esperado**

Los productos del carrusel aparecen en el mismo orden que en el atributo myUsualsProducts de la cuenta.

**Resultado obtenido**

Los 5 productos del carrusel siguen el orden de la página Mis productos frecuentes («Ver todos»), que es el de c_myUsuals: Galletas La Galleteria, Carne molida 250 g, Tapapecho vacuno, Carne molida 500 g y Trapero Nova.

**Observación**

El carrusel trae solo los 5 primeros de los 27 frecuentes (como en la web, ver bug B2C-1482). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 3 — home con la sesion iniciada](<B2C-55 APP Evidencias/TC-B2C55-APP-001-android-p03-home-con-la-sesion-iniciada.png>)

![Android · Paso 4 — carrusel my usuals](<B2C-55 APP Evidencias/TC-B2C55-APP-001-android-p04-carrusel-my-usuals.png>)

![Android · Paso 5 — final del carrusel](<B2C-55 APP Evidencias/TC-B2C55-APP-001-android-p05-final-del-carrusel.png>)

![Android · Paso 6 — mis productos frecuentes orden de referencia](<B2C-55 APP Evidencias/TC-B2C55-APP-001-android-p06-mis-productos-frecuentes-orden-de-referencia.png>)

![Android · Estado final](<B2C-55 APP Evidencias/TC-B2C55-APP-001-android.png>)

---

### TC-B2C55-APP-002 - Verificar que el carrusel My Usuals se muestra en una landing que contiene el componente [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Landing
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Landing {LANDING_MY_USUALS_URL} con el componente My Usuals configurado en Page Designer

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com
- {LANDING_MY_USUALS_URL} = TBD en el Excel de data

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario.
5. El usuario navega a la landing {LANDING_MY_USUALS_URL}.
6. El sistema carga la landing con sus componentes.

**Resultado esperado**

La landing muestra el carrusel My Usuals con los productos frecuentes de la cuenta, en la posición configurada en Page Designer.

**Resultado obtenido**

Causa: {LANDING_MY_USUALS_URL} está en TBD en el Excel de data: no hay landing con el componente My Usuals. Acción: el equipo de contenidos publica la landing y se carga su URL en {LANDING_MY_USUALS_URL}.

**Observación**

Causa: {LANDING_MY_USUALS_URL} está en TBD en el Excel de data: no hay landing con el componente My Usuals. Acción: el equipo de contenidos publica la landing y se carga su URL en {LANDING_MY_USUALS_URL}.

---

### TC-B2C55-APP-003 - Verificar que el carrusel My Usuals muestra el título configurado centrado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 61.0 s |
| Spec | tests-app/B2C-55.spec.ts:77 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario observa el encabezado del carrusel.

**Resultado esperado**

El título configurado del componente se muestra centrado sobre el carrusel.

**Resultado obtenido**

El título «Tus productos mas comprados» se muestra centrado: texto entre x=170 y x=907 de una caja 44..1036, desvío 2 px.

**Observación**

La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 3 — home con la sesion iniciada](<B2C-55 APP Evidencias/TC-B2C55-APP-003-android-p03-home-con-la-sesion-iniciada.png>)

![Android · Paso 4 — carrusel my usuals](<B2C-55 APP Evidencias/TC-B2C55-APP-003-android-p04-carrusel-my-usuals.png>)

![Android · Paso 5 — titulo del carrusel](<B2C-55 APP Evidencias/TC-B2C55-APP-003-android-p05-titulo-del-carrusel.png>)

![Android · Estado final](<B2C-55 APP Evidencias/TC-B2C55-APP-003-android.png>)

---

### TC-B2C55-APP-004 - Verificar que cada producto del carrusel My Usuals usa la shelf estándar [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 192.0 s |
| Spec | tests-app/B2C-55.spec.ts:90 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario revisa las tarjetas de producto del carrusel.

**Resultado esperado**

Cada tarjeta muestra imagen, nombre, precio y botón "Agregar"; los productos en oferta muestran además el precio oferta.

**Resultado obtenido**

Las 5 tarjetas muestran imagen, precio, nombre y «Agregar»; el Tapapecho vacuno (sin stock) muestra «Pronto disponible» y «Ver productos similares», como pide el CA5. Los productos en oferta muestran precio socio y precio de promoción.

**Observación**

El Tapapecho vacuno (sin stock) muestra «Ver productos similares» en lugar de «Agregar» (CA5). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 3 — home con la sesion iniciada](<B2C-55 APP Evidencias/TC-B2C55-APP-004-android-p03-home-con-la-sesion-iniciada.png>)

![Android · Paso 4 — carrusel my usuals](<B2C-55 APP Evidencias/TC-B2C55-APP-004-android-p04-carrusel-my-usuals.png>)

![Android · Paso 5 — tarjetas del shelf estandar](<B2C-55 APP Evidencias/TC-B2C55-APP-004-android-p05-tarjetas-del-shelf-estandar.png>)

![Android · Paso 6 — ultimas tarjetas del carrusel](<B2C-55 APP Evidencias/TC-B2C55-APP-004-android-p06-ultimas-tarjetas-del-carrusel.png>)

![Android · Estado final](<B2C-55 APP Evidencias/TC-B2C55-APP-004-android.png>)

---

### TC-B2C55-APP-005 - Verificar que el carrusel My Usuals muestra el link "Ver todos" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 60.0 s |
| Spec | tests-app/B2C-55.spec.ts:121 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario observa el componente My Usuals.

**Resultado esperado**

El componente muestra el link "Ver todos".

**Resultado obtenido**

El componente muestra el link «Ver todos» (nombre accesible «Ver todos mis productos frecuentes»), que abre Mis productos frecuentes (27 productos).

**Observación**

Pasó en el reintento 1: en el primer intento el carrusel todavía no había cargado al recorrer el Home (espera del script). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 3 — home con la sesion iniciada](<B2C-55 APP Evidencias/TC-B2C55-APP-005-android-p03-home-con-la-sesion-iniciada.png>)

![Android · Paso 4 — carrusel my usuals](<B2C-55 APP Evidencias/TC-B2C55-APP-005-android-p04-carrusel-my-usuals.png>)

![Android · Paso 5 — link ver todos](<B2C-55 APP Evidencias/TC-B2C55-APP-005-android-p05-link-ver-todos.png>)

![Android · Estado final](<B2C-55 APP Evidencias/TC-B2C55-APP-005-android.png>)

---

### TC-B2C55-APP-006 - Verificar que el carrusel My Usuals muestra 2 productos visibles a la vez [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 117.0 s |
| Spec | tests-app/B2C-55.spec.ts:129 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario observa el carrusel sin desplazarlo.

**Resultado esperado**

El carrusel muestra 2 productos visibles a la vez y permite desplazarse para ver el resto.

**Resultado obtenido**

Se ven 2 productos enteros a la vez y al deslizar aparece otro. El carrusel trae solo 5 productos de los 27 frecuentes (ver bug B2C-1482 de la web).

**Observación**

El carrusel trae solo 5 de los 27 frecuentes (ver bug B2C-1482). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 3 — home con la sesion iniciada](<B2C-55 APP Evidencias/TC-B2C55-APP-006-android-p03-home-con-la-sesion-iniciada.png>)

![Android · Paso 4 — carrusel my usuals](<B2C-55 APP Evidencias/TC-B2C55-APP-006-android-p04-carrusel-my-usuals.png>)

![Android · Paso 5 — 2 productos visibles sin desplazar](<B2C-55 APP Evidencias/TC-B2C55-APP-006-android-p05-2-productos-visibles-sin-desplazar.png>)

![Android · Paso 6 — carrusel tras deslizarlo](<B2C-55 APP Evidencias/TC-B2C55-APP-006-android-p06-carrusel-tras-deslizarlo.png>)

![Android · Estado final](<B2C-55 APP Evidencias/TC-B2C55-APP-006-android.png>)

---

### TC-B2C55-APP-007 - Verificar que el carrusel My Usuals no se muestra con exactamente 5 productos frecuentes [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Duración | 161.0 s |
| Spec | tests-app/B2C-55.spec.ts:144 |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta vhchirinos+5frecuentes@avatar-global.com tiene exactamente 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {COMPRADOR_5_FRECUENTES_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)
- {COMPRADOR_5_FRECUENTES_USER} = vhchirinos+5frecuentes@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+5frecuentes@avatar-global.com.
4. El sistema autentica al usuario y muestra la Home.
5. El usuario recorre la Home completa.

**Resultado esperado**

La Home no muestra el carrusel My Usuals ni deja espacio vacío en su lugar.

**Resultado obtenido**

Con la cuenta de exactamente 5 frecuentes el Home no muestra el carrusel ni «Ver todos»; entre el último carrusel y «Contrata la membresía» quedan 103 px, el espaciado normal entre componentes.

**Observación**

La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.

**Evidencia**

![Android · Paso 3 — home con la sesion iniciada](<B2C-55 APP Evidencias/TC-B2C55-APP-007-android-p03-home-con-la-sesion-iniciada.png>)

![Android · Paso 5 — pie del home sin el carrusel my usuals](<B2C-55 APP Evidencias/TC-B2C55-APP-007-android-p05-pie-del-home-sin-el-carrusel-my-usuals.png>)

![Android · Estado final](<B2C-55 APP Evidencias/TC-B2C55-APP-007-android.png>)

---

### TC-B2C55-APP-008 - Verificar que un producto sin stock del carrusel My Usuals muestra la etiqueta "Pronto disponible" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER} tiene más de 5 productos frecuentes y al menos uno sin stock
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)
- {COMPRADOR_FRECUENTES_SIN_STOCK_USER} = TBD en el Excel de data

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER}.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario ubica en el carrusel el producto sin stock.

**Resultado esperado**

La tarjeta del producto sin stock muestra la etiqueta "Pronto disponible".

**Resultado obtenido**

Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y (contraseña de la cuenta) están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros (vhchirinos+comprador@… tiene hoy el Tapapecho sin stock en la posición 3).

**Observación**

Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros (vhchirinos+comprador@… tiene hoy el Tapapecho sin stock en la posición 3).

---

### TC-B2C55-APP-009 - Verificar que un producto sin stock del carrusel My Usuals muestra "Ver similares" en lugar de "Agregar" [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER} tiene más de 5 productos frecuentes y al menos uno sin stock
- Componente My Usuals configurado en la Home (Page Designer)

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)
- {COMPRADOR_FRECUENTES_SIN_STOCK_USER} = TBD en el Excel de data

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER}.
4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.
5. El usuario ubica en el carrusel el producto sin stock.

**Resultado esperado**

La tarjeta del producto sin stock no muestra el botón "Agregar" y muestra el botón "Ver similares".

**Resultado obtenido**

Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y (contraseña de la cuenta) están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros (vhchirinos+comprador@… tiene hoy el Tapapecho sin stock en la posición 3).

**Observación**

Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros (vhchirinos+comprador@… tiene hoy el Tapapecho sin stock en la posición 3).

---

### TC-B2C55-APP-010 - Verificar que el carrusel My Usuals muestra un ícono de carga mientras obtiene los datos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)
- Red lenta simulada (ej. throttling Slow 3G) para observar la carga

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y comienza a cargar la Home.
5. El usuario observa el área del carrusel My Usuals durante la carga.

**Resultado esperado**

El área del carrusel muestra un ícono de carga hasta que los productos están disponibles; luego se muestra el carrusel con los productos.

**Resultado obtenido**

Causa: no se pudo observar el estado de carga. Con 10 s de latencia simulada en el emulador (adb emu network delay) el carrusel aparece ya cargado: la app conserva en caché los datos del Home entre aperturas. Acción: un build con la caché desactivable o apoyo de Desarrollo para retrasar la respuesta de myUsuals.

**Observación**

Causa: no se pudo observar el estado de carga. Con 10 s de latencia simulada en el emulador (adb emu network delay) el carrusel aparece ya cargado: la app conserva en caché los datos del Home entre aperturas. Acción: un build con la caché desactivable o apoyo de Desarrollo para retrasar la respuesta de myUsuals.

---

### TC-B2C55-APP-011 - Verificar que si falla la obtención del atributo myUsuals el componente no se muestra y no hay mensaje de error [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-11 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) |
| Spec | (sin spec: el caso quedó bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts
- Componente My Usuals configurado en la Home (Page Designer)
- Error simulado al recuperar el atributo myUsuals del cliente (con apoyo de Desarrollo)

**Data utilizada**

- {APP_BUILD} = v1.0.1
- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)
- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1.
2. El sistema carga la Home.
3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y no logra recuperar el atributo myUsuals.
5. El usuario recorre la Home completa.

**Resultado esperado**

La Home no muestra el carrusel My Usuals ni ningún mensaje de error, y el resto de los componentes se muestra normalmente.

**Resultado obtenido**

Causa: el caso pide un error simulado al recuperar el atributo myUsuals «con apoyo de Desarrollo» y en la app no hay forma de provocarlo desde la prueba (no se puede interceptar su red como en la web). Acción: Desarrollo habilita el error (flag o respuesta forzada del servicio) en el ambiente de QA.

**Observación**

Causa: el caso pide un error simulado al recuperar el atributo myUsuals «con apoyo de Desarrollo» y en la app no hay forma de provocarlo desde la prueba (no se puede interceptar su red como en la web). Acción: Desarrollo habilita el error (flag o respuesta forzada del servicio) en el ambiente de QA.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local) · cl.smu.unimarcapp.sfcc.qa"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-55 APP",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP1/B2C-55 APP Test Cases.xlsx",
  "title": "B2C-55 APP - Carrusel My Usuals (Android) - Evidencias QA",
  "updated_at": "2026-11-11"
 },
 "history": {
  "2026-11-11": [
   "TC-B2C55-APP-001",
   "TC-B2C55-APP-002",
   "TC-B2C55-APP-003",
   "TC-B2C55-APP-004",
   "TC-B2C55-APP-005",
   "TC-B2C55-APP-006",
   "TC-B2C55-APP-007",
   "TC-B2C55-APP-008",
   "TC-B2C55-APP-009",
   "TC-B2C55-APP-010",
   "TC-B2C55-APP-011"
  ]
 },
 "results": [
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 101,
   "executed_at": "2026-11-11",
   "expected": "Los productos del carrusel aparecen en el mismo orden que en el atributo myUsualsProducts de la cuenta.",
   "form_factor": "app",
   "id": "TC-B2C55-APP-001",
   "name": "Verificar que el carrusel My Usuals muestra los productos en el orden de relevancia del atributo myUsualsProducts [App] [Logueado]",
   "observation": "El carrusel trae solo los 5 primeros de los 27 frecuentes (como en la web, ver bug B2C-1482). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "Los 5 productos del carrusel siguen el orden de la página Mis productos frecuentes («Ver todos»), que es el de c_myUsuals: Galletas La Galleteria, Carne molida 250 g, Tapapecho vacuno, Carne molida 500 g y Trapero Nova.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)\n- Se conoce el orden de los productos en el atributo myUsualsProducts de la cuenta (orden de relevancia definido por Data SMU)",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — home con la sesion iniciada",
     "file": "TC-B2C55-APP-001-android-p03-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 4 — carrusel my usuals",
     "file": "TC-B2C55-APP-001-android-p04-carrusel-my-usuals.png"
    },
    {
     "caption": "Android · Paso 5 — final del carrusel",
     "file": "TC-B2C55-APP-001-android-p05-final-del-carrusel.png"
    },
    {
     "caption": "Android · Paso 6 — mis productos frecuentes orden de referencia",
     "file": "TC-B2C55-APP-001-android-p06-mis-productos-frecuentes-orden-de-referencia.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C55-APP-001-android.png"
    }
   ],
   "spec": "tests-app/B2C-55.spec.ts:50",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario recorre el carrusel de izquierda a derecha y compara el orden con el atributo myUsualsProducts de la cuenta.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "executed_at": "2026-11-11",
   "expected": "La landing muestra el carrusel My Usuals con los productos frecuentes de la cuenta, en la posición configurada en Page Designer.",
   "form_factor": "app",
   "id": "TC-B2C55-APP-002",
   "name": "Verificar que el carrusel My Usuals se muestra en una landing que contiene el componente [App] [Logueado]",
   "observation": "Causa: {LANDING_MY_USUALS_URL} está en TBD en el Excel de data: no hay landing con el componente My Usuals. Acción: el equipo de contenidos publica la landing y se carga su URL en {LANDING_MY_USUALS_URL}.",
   "observed": "Causa: {LANDING_MY_USUALS_URL} está en TBD en el Excel de data: no hay landing con el componente My Usuals. Acción: el equipo de contenidos publica la landing y se carga su URL en {LANDING_MY_USUALS_URL}.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Landing\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Landing {LANDING_MY_USUALS_URL} con el componente My Usuals configurado en Page Designer",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario.\n5. El usuario navega a la landing {LANDING_MY_USUALS_URL}.\n6. El sistema carga la landing con sus componentes.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com\n- {LANDING_MY_USUALS_URL} = TBD en el Excel de data"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 61,
   "executed_at": "2026-11-11",
   "expected": "El título configurado del componente se muestra centrado sobre el carrusel.",
   "form_factor": "app",
   "id": "TC-B2C55-APP-003",
   "name": "Verificar que el carrusel My Usuals muestra el título configurado centrado [App] [Logueado]",
   "observation": "La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "El título «Tus productos mas comprados» se muestra centrado: texto entre x=170 y x=907 de una caja 44..1036, desvío 2 px.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — home con la sesion iniciada",
     "file": "TC-B2C55-APP-003-android-p03-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 4 — carrusel my usuals",
     "file": "TC-B2C55-APP-003-android-p04-carrusel-my-usuals.png"
    },
    {
     "caption": "Android · Paso 5 — titulo del carrusel",
     "file": "TC-B2C55-APP-003-android-p05-titulo-del-carrusel.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C55-APP-003-android.png"
    }
   ],
   "spec": "tests-app/B2C-55.spec.ts:77",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario observa el encabezado del carrusel.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 192,
   "executed_at": "2026-11-11",
   "expected": "Cada tarjeta muestra imagen, nombre, precio y botón \"Agregar\"; los productos en oferta muestran además el precio oferta.",
   "form_factor": "app",
   "id": "TC-B2C55-APP-004",
   "name": "Verificar que cada producto del carrusel My Usuals usa la shelf estándar [App] [Logueado]",
   "observation": "El Tapapecho vacuno (sin stock) muestra «Ver productos similares» en lugar de «Agregar» (CA5). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "Las 5 tarjetas muestran imagen, precio, nombre y «Agregar»; el Tapapecho vacuno (sin stock) muestra «Pronto disponible» y «Ver productos similares», como pide el CA5. Los productos en oferta muestran precio socio y precio de promoción.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — home con la sesion iniciada",
     "file": "TC-B2C55-APP-004-android-p03-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 4 — carrusel my usuals",
     "file": "TC-B2C55-APP-004-android-p04-carrusel-my-usuals.png"
    },
    {
     "caption": "Android · Paso 5 — tarjetas del shelf estandar",
     "file": "TC-B2C55-APP-004-android-p05-tarjetas-del-shelf-estandar.png"
    },
    {
     "caption": "Android · Paso 6 — ultimas tarjetas del carrusel",
     "file": "TC-B2C55-APP-004-android-p06-ultimas-tarjetas-del-carrusel.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C55-APP-004-android.png"
    }
   ],
   "spec": "tests-app/B2C-55.spec.ts:90",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario revisa las tarjetas de producto del carrusel.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 60,
   "executed_at": "2026-11-11",
   "expected": "El componente muestra el link \"Ver todos\".",
   "form_factor": "app",
   "id": "TC-B2C55-APP-005",
   "name": "Verificar que el carrusel My Usuals muestra el link \"Ver todos\" [App] [Logueado]",
   "observation": "Pasó en el reintento 1: en el primer intento el carrusel todavía no había cargado al recorrer el Home (espera del script). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "El componente muestra el link «Ver todos» (nombre accesible «Ver todos mis productos frecuentes»), que abre Mis productos frecuentes (27 productos).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — home con la sesion iniciada",
     "file": "TC-B2C55-APP-005-android-p03-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 4 — carrusel my usuals",
     "file": "TC-B2C55-APP-005-android-p04-carrusel-my-usuals.png"
    },
    {
     "caption": "Android · Paso 5 — link ver todos",
     "file": "TC-B2C55-APP-005-android-p05-link-ver-todos.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C55-APP-005-android.png"
    }
   ],
   "spec": "tests-app/B2C-55.spec.ts:121",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario observa el componente My Usuals.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 117,
   "executed_at": "2026-11-11",
   "expected": "El carrusel muestra 2 productos visibles a la vez y permite desplazarse para ver el resto.",
   "form_factor": "app",
   "id": "TC-B2C55-APP-006",
   "name": "Verificar que el carrusel My Usuals muestra 2 productos visibles a la vez [App] [Logueado]",
   "observation": "El carrusel trae solo 5 de los 27 frecuentes (ver bug B2C-1482). La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "Se ven 2 productos enteros a la vez y al deslizar aparece otro. El carrusel trae solo 5 productos de los 27 frecuentes (ver bug B2C-1482 de la web).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — home con la sesion iniciada",
     "file": "TC-B2C55-APP-006-android-p03-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 4 — carrusel my usuals",
     "file": "TC-B2C55-APP-006-android-p04-carrusel-my-usuals.png"
    },
    {
     "caption": "Android · Paso 5 — 2 productos visibles sin desplazar",
     "file": "TC-B2C55-APP-006-android-p05-2-productos-visibles-sin-desplazar.png"
    },
    {
     "caption": "Android · Paso 6 — carrusel tras deslizarlo",
     "file": "TC-B2C55-APP-006-android-p06-carrusel-tras-deslizarlo.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C55-APP-006-android.png"
    }
   ],
   "spec": "tests-app/B2C-55.spec.ts:129",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario observa el carrusel sin desplazarlo.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "duration_s": 161,
   "executed_at": "2026-11-11",
   "expected": "La Home no muestra el carrusel My Usuals ni deja espacio vacío en su lugar.",
   "form_factor": "app",
   "id": "TC-B2C55-APP-007",
   "name": "Verificar que el carrusel My Usuals no se muestra con exactamente 5 productos frecuentes [App] [Logueado]",
   "observation": "La fila no declara 'Plataforma:' (dice 'Viewport: App iOS/Android'); se certificó Android con la app v1.0.1 instalada en el emulador. iOS queda Pendiente.",
   "observed": "Con la cuenta de exactamente 5 frecuentes el Home no muestra el carrusel ni «Ver todos»; entre el último carrusel y «Contrata la membresía» quedan 103 px, el espaciado normal entre componentes.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta vhchirinos+5frecuentes@avatar-global.com tiene exactamente 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)",
   "screenshots": [
    {
     "caption": "Android · Paso 3 — home con la sesion iniciada",
     "file": "TC-B2C55-APP-007-android-p03-home-con-la-sesion-iniciada.png"
    },
    {
     "caption": "Android · Paso 5 — pie del home sin el carrusel my usuals",
     "file": "TC-B2C55-APP-007-android-p05-pie-del-home-sin-el-carrusel-my-usuals.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C55-APP-007-android.png"
    }
   ],
   "spec": "tests-app/B2C-55.spec.ts:144",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+5frecuentes@avatar-global.com.\n4. El sistema autentica al usuario y muestra la Home.\n5. El usuario recorre la Home completa.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {COMPRADOR_5_FRECUENTES_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)\n- {COMPRADOR_5_FRECUENTES_USER} = vhchirinos+5frecuentes@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "executed_at": "2026-11-11",
   "expected": "La tarjeta del producto sin stock muestra la etiqueta \"Pronto disponible\".",
   "form_factor": "app",
   "id": "TC-B2C55-APP-008",
   "name": "Verificar que un producto sin stock del carrusel My Usuals muestra la etiqueta \"Pronto disponible\" [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros (vhchirinos+comprador@… tiene hoy el Tapapecho sin stock en la posición 3).",
   "observed": "Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y (contraseña de la cuenta) están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros (vhchirinos+comprador@… tiene hoy el Tapapecho sin stock en la posición 3).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER} tiene más de 5 productos frecuentes y al menos uno sin stock\n- Componente My Usuals configurado en la Home (Page Designer)",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER}.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario ubica en el carrusel el producto sin stock.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)\n- {COMPRADOR_FRECUENTES_SIN_STOCK_USER} = TBD en el Excel de data"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "executed_at": "2026-11-11",
   "expected": "La tarjeta del producto sin stock no muestra el botón \"Agregar\" y muestra el botón \"Ver similares\".",
   "form_factor": "app",
   "id": "TC-B2C55-APP-009",
   "name": "Verificar que un producto sin stock del carrusel My Usuals muestra \"Ver similares\" en lugar de \"Agregar\" [App] [Logueado]",
   "observation": "Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros (vhchirinos+comprador@… tiene hoy el Tapapecho sin stock en la posición 3).",
   "observed": "Causa: {COMPRADOR_FRECUENTES_SIN_STOCK_USER} y (contraseña de la cuenta) están en TBD en el Excel de data. Acción: cargar una cuenta con más de 5 frecuentes y al menos uno sin stock entre los 5 primeros (vhchirinos+comprador@… tiene hoy el Tapapecho sin stock en la posición 3).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER} tiene más de 5 productos frecuentes y al menos uno sin stock\n- Componente My Usuals configurado en la Home (Page Designer)",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta {COMPRADOR_FRECUENTES_SIN_STOCK_USER}.\n4. El sistema autentica al usuario y muestra la Home con el carrusel My Usuals.\n5. El usuario ubica en el carrusel el producto sin stock.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {COMPRADOR_FRECUENTES_SIN_STOCK_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)\n- {COMPRADOR_FRECUENTES_SIN_STOCK_USER} = TBD en el Excel de data"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "executed_at": "2026-11-11",
   "expected": "El área del carrusel muestra un ícono de carga hasta que los productos están disponibles; luego se muestra el carrusel con los productos.",
   "form_factor": "app",
   "id": "TC-B2C55-APP-010",
   "name": "Verificar que el carrusel My Usuals muestra un ícono de carga mientras obtiene los datos [App] [Logueado]",
   "observation": "Causa: no se pudo observar el estado de carga. Con 10 s de latencia simulada en el emulador (adb emu network delay) el carrusel aparece ya cargado: la app conserva en caché los datos del Home entre aperturas. Acción: un build con la caché desactivable o apoyo de Desarrollo para retrasar la respuesta de myUsuals.",
   "observed": "Causa: no se pudo observar el estado de carga. Con 10 s de latencia simulada en el emulador (adb emu network delay) el carrusel aparece ya cargado: la app conserva en caché los datos del Home entre aperturas. Acción: un build con la caché desactivable o apoyo de Desarrollo para retrasar la respuesta de myUsuals.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)\n- Red lenta simulada (ej. throttling Slow 3G) para observar la carga",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y comienza a cargar la Home.\n5. El usuario observa el área del carrusel My Usuals durante la carga.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com"
  },
  {
   "device": "sdk_gphone64_x86_64 (Pixel 4 API 33) · Android 13 (emulador local)",
   "executed_at": "2026-11-11",
   "expected": "La Home no muestra el carrusel My Usuals ni ningún mensaje de error, y el resto de los componentes se muestra normalmente.",
   "form_factor": "app",
   "id": "TC-B2C55-APP-011",
   "name": "Verificar que si falla la obtención del atributo myUsuals el componente no se muestra y no hay mensaje de error [App] [Logueado]",
   "observation": "Causa: el caso pide un error simulado al recuperar el atributo myUsuals «con apoyo de Desarrollo» y en la app no hay forma de provocarlo desde la prueba (no se puede interceptar su red como en la web). Acción: Desarrollo habilita el error (flag o respuesta forzada del servicio) en el ambiente de QA.",
   "observed": "Causa: el caso pide un error simulado al recuperar el atributo myUsuals «con apoyo de Desarrollo» y en la app no hay forma de provocarlo desde la prueba (no se puede interceptar su red como en la web). Acción: Desarrollo habilita el error (flag o respuesta forzada del servicio) en el ambiente de QA.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La cuenta vhchirinos+comprador@avatar-global.com tiene más de 5 productos frecuentes en el atributo myUsualsProducts\n- Componente My Usuals configurado en la Home (Page Designer)\n- Error simulado al recuperar el atributo myUsuals del cliente (con apoyo de Desarrollo)",
   "spec": "(sin spec: el caso quedó bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1.\n2. El sistema carga la Home.\n3. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y no logra recuperar el atributo myUsuals.\n5. El usuario recorre la Home completa.",
   "test_data": "- {APP_BUILD} = v1.0.1\n- {COMPRADOR_USUALS_MAS_24_PASSWORD} = contraseña de la cuenta (no se transcribe; la app entra por correo + código OTP)\n- {COMPRADOR_USUALS_MAS_24_USER} = vhchirinos+comprador@avatar-global.com"
  }
 ]
}
-->
