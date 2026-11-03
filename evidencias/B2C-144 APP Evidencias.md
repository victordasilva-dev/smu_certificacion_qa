# B2C-144 (app Android) - Navbar de entrega: método, ventana y costo - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-144 APP |
| Última actualización | 2026-11-03 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Dispositivo Android | dispositivo por ADB |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-144 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 31 |
| Aprobado | 8 |
| Bloqueado | 1 |
| Rechazado | 1 |
| **Total** | **41** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-03 | 41 | TC-B2C144-APP-001, TC-B2C144-APP-002, TC-B2C144-APP-003, TC-B2C144-APP-004, TC-B2C144-APP-005, TC-B2C144-APP-006, TC-B2C144-APP-007, TC-B2C144-APP-008, TC-B2C144-APP-009, TC-B2C144-APP-010, TC-B2C144-APP-011, TC-B2C144-APP-012, TC-B2C144-APP-013, TC-B2C144-APP-014, TC-B2C144-APP-016, TC-B2C144-APP-017, TC-B2C144-APP-018, TC-B2C144-APP-019, TC-B2C144-APP-020, TC-B2C144-APP-021, TC-B2C144-APP-022, TC-B2C144-APP-023, TC-B2C144-APP-024, TC-B2C144-APP-025, TC-B2C144-APP-026, TC-B2C144-APP-028, TC-B2C144-APP-029, TC-B2C144-APP-030, TC-B2C144-APP-031, TC-B2C144-APP-032, TC-B2C144-APP-033, TC-B2C144-APP-034, TC-B2C144-APP-035, TC-B2C144-APP-036, TC-B2C144-APP-037, TC-B2C144-APP-038, TC-B2C144-APP-039, TC-B2C144-APP-040, TC-B2C144-APP-041, TC-B2C144-APP-042, TC-B2C144-APP-043 |

## Detalle por caso de prueba

### TC-B2C144-APP-001 - Verificar que al setear una dirección con cobertura el navbar muestra dirección, ventana y chip [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro está vacío

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

El modal se cierra y el navbar muestra {DIRECCION_DESPACHO_001}, la próxima ventana horaria disponible y el chip de precio, sin recargar la página.

**Observación**

Android (dispositivo por ADB, v1.0.1): Tras fijar {DIRECCION_DESPACHO_001} el navbar muestra «Calle Uno 23, Desde: Hoy 03/11, 15:00 hrs., $2.990»: dirección true, próxima ventana true, chip de precio «$2.990».

**Evidencia**

![Android · Paso 1 — navbar tras setear](<B2C-144 APP Evidencias/TC-B2C144-APP-001-android-p01-navbar-tras-setear.png>)

---

### TC-B2C144-APP-002 - Verificar que la dirección de un invitado persiste al navegar y recargar en la misma sesión [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección {DIRECCION_DESPACHO_001} está seteada como invitado

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {DIRECCION_DESPACHO_001} = Casa

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario revisa el Store Locator del navbar.
3. El usuario sale del carro y vuelve a ingresar tocando el ícono del carro.
4. El usuario navega a una PLP.

**Resultado esperado**

La dirección {DIRECCION_DESPACHO_001} y su ventana se mantienen en el navbar tras recargar y navegar.

**Observación**

Android (dispositivo por ADB, v1.0.1): Antes de cerrar y reabrir el app: «Calle Uno 23, Desde: Hoy 03/11, 15:00 hrs., $2.990». Después (sin borrar datos): «Calle Uno 23, La Florida, Región..., Desde: Hoy 03/11, 15:00 hrs., $2.990».

**Evidencia**

![Android · Paso 1 — navbar tras reabrir](<B2C-144 APP Evidencias/TC-B2C144-APP-002-android-p01-navbar-tras-reabrir.png>)

---

### TC-B2C144-APP-003 - Verificar que la dirección de un logueado persiste entre sesiones [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección {DIRECCION_DESPACHO_001} fue seteada con esta cuenta en una sesión anterior

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario cierra sesión.
2. El usuario inicia sesión nuevamente con la misma cuenta.
3. El usuario abre la App {APP_BUILD}.
4. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

El navbar muestra {DIRECCION_DESPACHO_001} con su ventana vigente tras volver a iniciar sesión.

**Observación**

Android (dispositivo por ADB, v1.0.1): Tras cerrar sesión y volver a entrar con la misma cuenta el navbar muestra «Calle Uno 23, Desde: Hoy 03/11, 18:00 hrs., $2.990».

**Evidencia**

![Android · Paso 1 — navbar tras volver a entrar](<B2C-144 APP Evidencias/TC-B2C144-APP-003-android-p01-navbar-tras-volver-a-entrar.png>)

---

### TC-B2C144-APP-004 - Verificar que con Express con costo y Programado gratis el navbar muestra la ventana Programada [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Janis retorna para {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}: Express con costo y Programado gratis

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa la ventana mostrada en el navbar.

**Resultado esperado**

El navbar muestra la ventana Programada.

**Observación**

Android (dispositivo por ADB, v1.0.1): la precondición pide que Janis retorne Express con costo y Programado gratis. en {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} (= Calle Uno 23, La Florida) el navbar muestra «Calle Uno 23, Desde: Hoy 03/11, 15:00 hrs., $2.990»: solo una ventana Programada con costo, sin Express ni gratuidad. La precondición no se cumple; además el token apunta a la misma dirección que {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}, dos configuraciones distintas para una sola dirección. Falta una dirección con esa respuesta de Janis (lo configura el equipo de data).

---

### TC-B2C144-APP-005 - Verificar que con Express y Programado con costo el navbar muestra la ventana Express [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Janis retorna para {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}: Express y Programado con costo

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa la ventana mostrada en el navbar.

**Resultado esperado**

El navbar muestra la ventana Express.

**Observación**

Android (dispositivo por ADB, v1.0.1): la precondición pide que Janis retorne Express y Programado con costo. en {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (= Calle Uno 23, La Florida) el navbar muestra «Calle Uno 23, Desde: Hoy 03/11, 15:00 hrs., $2.990»: solo una ventana Programada con costo, sin Express ni gratuidad. No hay ventana Express en esa dirección. Falta una dirección con esa respuesta de Janis (lo configura el equipo de data).

---

### TC-B2C144-APP-006 - Verificar que con Express y Programado gratis el navbar muestra la ventana Express [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Janis retorna para {DIRECCION_EXPRESS_Y_PROG_GRATIS}: Express y Programado gratis

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_EXPRESS_Y_PROG_GRATIS} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_GRATIS}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa la ventana mostrada en el navbar.

**Resultado esperado**

El navbar muestra la ventana Express.

**Observación**

Android (dispositivo por ADB, v1.0.1): la precondición pide Express y Programado gratis para {DIRECCION_EXPRESS_Y_PROG_GRATIS} (San Isidro 41, Santiago); el navbar muestra «San Isidro 41, Desde: Hoy 03/11, 15:00 hrs., $2.990»: Programada con costo, sin Express ni gratuidad. Falta una dirección con esa respuesta de Janis (lo configura el equipo de data).

---

### TC-B2C144-APP-007 - Verificar que con solo ventanas Programadas el navbar muestra la próxima ventana Programada [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Janis retorna para {DIRECCION_SIN_EXPRESS}: solo ventanas Programadas

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_SIN_EXPRESS} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_EXPRESS}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa la ventana mostrada en el navbar.

**Resultado esperado**

El navbar muestra la próxima ventana Programada.

**Observación**

Android (dispositivo por ADB, v1.0.1): la precondición pide {DIRECCION_SIN_EXPRESS} (Pasaje Diez 359, Peñaflor) con solo ventanas Programadas; el app no logró fijar esa dirección en 3 intentos (no queda seteada). Falta una dirección sin Express con cobertura (lo carga el equipo de data).

---

### TC-B2C144-APP-008 - Verificar que al navegar entre páginas el navbar mantiene la ventana y el chip vigentes [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección {DIRECCION_DESPACHO_001} está seteada

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario revisa el Store Locator del navbar.
3. El usuario navega a una PLP y luego a la PDP de {SKU_VALID_001}.

**Resultado esperado**

En cada página el navbar muestra la próxima ventana vigente y el chip de costo o gratuidad correspondiente.

**Observación**

Android (dispositivo por ADB, v1.0.1): Navbar al volver al Home tras navegar por Buscar, Mis productos y Mi cuenta: «Calle Uno 23, Desde: Hoy 03/11, 15:00 hrs., $2.990» → «Calle Uno 23, Desde: Hoy 03/11, 15:00 hrs., $2.990» → «Calle Uno 23, Desde: Hoy 03/11, 15:00 hrs., $2.990» → «Calle Uno 23, Desde: Hoy 03/11, 15:00 hrs., $2.990».

**Evidencia**

![Android · Paso 1 — navbar tras navegar](<B2C-144 APP Evidencias/TC-B2C144-APP-008-android-p01-navbar-tras-navegar.png>)

---

### TC-B2C144-APP-009 - Verificar que en App al ingresar a una PLP N1 el navbar se reemplaza por la barra de búsqueda [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección {DIRECCION_DESPACHO_001} está seteada

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {CATEGORY_N1_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes
- {DIRECCION_DESPACHO_001} = Casa

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario ingresa a la categoría N1 {CATEGORY_N1_URL}.

**Resultado esperado**

El navbar con el Store Locator se oculta y en su lugar se muestra la barra de búsqueda.

**Observación**

Android (dispositivo por ADB, v1.0.1): En la PLP de categoría N1: navbar de entrega visible: false; barra de búsqueda arriba: true. Textos superiores: Volver | Buscar productos | ¿Qué estás buscando? | Carnes | Todo | Cerdo | Cerdo | Cordero y otros.

**Evidencia**

![Android · Paso 1 — menu categorias](<B2C-144 APP Evidencias/TC-B2C144-APP-009-android-p01-menu-categorias.png>)

![Android · Paso 2 — plp n1](<B2C-144 APP Evidencias/TC-B2C144-APP-009-android-p02-plp-n1.png>)

---

### TC-B2C144-APP-010 - Verificar que al cambiar la dirección el navbar se actualiza con la ventana y el costo nuevos [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa el navbar.

**Resultado esperado**

El navbar muestra {DIRECCION_OTRA_TIENDA} con su próxima ventana y su chip de costo o gratuidad.

**Observación**

Android (dispositivo por ADB, v1.0.1): Antes: «Calle Uno 23, La Florida, Región..., Desde: Hoy 03/11, 15:00 hrs., $2.990». Tras cambiar a {DIRECCION_OTRA_TIENDA}: «Avenida Las Condes 14791, Desde: Hoy 03/11, 15:00 hrs., $2.990» (nueva dirección true, ventana true, chip «$2.990»).

**Evidencia**

![Android · Paso 1 — navbar nueva direccion](<B2C-144 APP Evidencias/TC-B2C144-APP-010-android-p01-navbar-nueva-direccion.png>)

---

### TC-B2C144-APP-011 - Verificar que con retiro en tienda el navbar muestra la tienda, la ventana y el chip Gratis [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Retiro en tienda configurado con {TIENDA_RETIRO_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {TIENDA_RETIRO_001} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

El navbar muestra el nombre de {TIENDA_RETIRO_001}, la próxima ventana de retiro y el chip "Gratis" en verde sin ícono.

**Observación**

Android (dispositivo por ADB, v1.0.1): el escenario [Guest] del TC no es alcanzable: al elegir una tienda de retiro un invitado recibe la pantalla «¡Hola, inicia sesión o regístrate!» y el retiro no se configura. Acción requerida: aclarar con QA/producto si el TC debe ejecutarse con sesión iniciada y ajustar el tipo de usuario.

**Evidencia**

![Android · Paso 1 — navbar retiro](<B2C-144 APP Evidencias/TC-B2C144-APP-011-android-p01-navbar-retiro.png>)

---

### TC-B2C144-APP-012 - Verificar que un cliente Club bajo el umbral ve el costo de despacho en el navbar [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}
- Despacho a {DIRECCION_DESPACHO_001} con ventana Programada
- El carro contiene {SKU_VALID_001} y el total es menor a {UMBRAL_DESPACHO_GRATIS_CLUB}
- Sin promociones de despacho gratis activas

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD
- {COMPRADOR_CLUB_USER} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

El chip del navbar muestra el costo de despacho en pesos (ej. "$3.990") en amarillo.

**Observación**

Android (dispositivo por ADB, v1.0.1): la precondición pide una cuenta Club bajo {UMBRAL_DESPACHO_GRATIS_CLUB} (40000); con la cuenta {COMPRADOR_CLUB_USER} el app informa «Te faltan $17.670 para despacho GRATIS» con un carro de $42.330, o sea un umbral de $60.000: la cuenta/umbral de la data no corresponde a un Club de $40.000. Falta una cuenta Club con ese umbral (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — chip bajo el umbral](<B2C-144 APP Evidencias/TC-B2C144-APP-012-android-p01-chip-bajo-el-umbral.png>)

![Android · Paso 2 — carro](<B2C-144 APP Evidencias/TC-B2C144-APP-012-android-p02-carro.png>)

---

### TC-B2C144-APP-013 - Verificar que un cliente Club sobre el umbral ve Despacho gratis en el navbar [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}
- Despacho a {DIRECCION_DESPACHO_001}
- El total del carro supera {UMBRAL_DESPACHO_GRATIS_CLUB}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD
- {COMPRADOR_CLUB_USER} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

El chip del navbar muestra "Despacho gratis" en lugar del precio.

**Observación**

Android (dispositivo por ADB, v1.0.1): la precondición pide un carro sobre {UMBRAL_DESPACHO_GRATIS_CLUB} (40000) con cuenta Club. Con {COMPRADOR_CLUB_USER} y un carro de $42.330 el chip sigue en «$2.990» porque el umbral real de la cuenta es $60.000 («Te faltan $17.670 para despacho GRATIS»). Falta una cuenta Club con umbral de $40.000 (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — chip sobre el umbral](<B2C-144 APP Evidencias/TC-B2C144-APP-013-android-p01-chip-sobre-el-umbral.png>)

---

### TC-B2C144-APP-014 - Verificar que al cruzar el umbral en ambos sentidos el chip cambia sin recargar [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}
- Despacho a {DIRECCION_DESPACHO_001}
- El total del carro es menor a {UMBRAL_DESPACHO_GRATIS_CLUB}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD
- {COMPRADOR_CLUB_USER} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario revisa el Store Locator del navbar.
3. El usuario agrega unidades de {SKU_VALID_001} hasta superar {UMBRAL_DESPACHO_GRATIS_CLUB}.
4. El usuario quita unidades hasta quedar bajo {UMBRAL_DESPACHO_GRATIS_CLUB}.

**Resultado esperado**

El chip cambia a "Despacho gratis" al superar el umbral y vuelve al costo en pesos al quedar bajo él, sin recargar la página.

**Observación**

Android (dispositivo por ADB, v1.0.1): requiere cruzar {UMBRAL_DESPACHO_GRATIS_CLUB} (40000); con {COMPRADOR_CLUB_USER} el umbral real es $60.000, así que a $42.330 y a $39.840 el chip se mantiene en «$2.990». Falta una cuenta Club con umbral de $40.000 (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — chip bajo el umbral](<B2C-144 APP Evidencias/TC-B2C144-APP-014-android-p01-chip-bajo-el-umbral.png>)

![Android · Paso 2 — chip sobre el umbral](<B2C-144 APP Evidencias/TC-B2C144-APP-014-android-p02-chip-sobre-el-umbral.png>)

---

### TC-B2C144-APP-016 - Verificar que un cliente Diamante ve el chip azul Gratis con diamante [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_DIAMANTE_USER}
- Despacho a {DIRECCION_DESPACHO_001}
- La promoción de envío gratis Diamante está vigente

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {COMPRADOR_DIAMANTE_USER} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

El chip muestra "Gratis" en azul con 💎.

**Observación**

Android (dispositivo por ADB, v1.0.1): la cuenta {COMPRADOR_DIAMANTE_USER} tiene activa «Avenida San Josemaría Escrivá de Balaguer…» y no tiene guardada {DIRECCION_DESPACHO_001}; con su dirección activa el navbar muestra chip «$2.990», sin la gratuidad Diamante. No se cumple la precondición (despacho a la dirección base con promoción Diamante vigente). Falta esa dirección y la promoción en la cuenta (lo carga el equipo de data).

**Evidencia**

![Android · Paso 1 — navbar diamante](<B2C-144 APP Evidencias/TC-B2C144-APP-016-android-p01-navbar-diamante.png>)

![Android · Paso 1 — sin direccion base](<B2C-144 APP Evidencias/TC-B2C144-APP-016-android-p01-sin-direccion-base.png>)

---

### TC-B2C144-APP-017 - Verificar que con Express con costo el navbar muestra el rayo y el precio Express [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sin promoción de envío gratis que incluya Express

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa el chip del navbar.

**Resultado esperado**

El chip muestra ⚡ con el precio Express (ej. "$5.990") en naranja/rojo.

**Observación**

Android (dispositivo por ADB, v1.0.1): requiere una ventana Express (⚡) con su precio/estado de promoción; ninguna de las direcciones de la data muestra ventana Express (Calle Uno 23 y San Isidro 41 solo Programada con costo; Peñaflor no se puede fijar). Falta una dirección con Express y la promoción correspondiente en la cuenta (lo configura el equipo de data).

---

### TC-B2C144-APP-018 - Verificar que con promoción de envío gratis que incluye Express el chip muestra Gratis [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} con ventana Express seleccionada
- Promoción de envío gratis que incluye Express vigente para la cuenta

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

El chip muestra "🟢 Gratis" con ícono circular (mismo chip que membresía).

**Observación**

Android (dispositivo por ADB, v1.0.1): requiere una ventana Express (⚡) con su precio/estado de promoción; ninguna de las direcciones de la data muestra ventana Express (Calle Uno 23 y San Isidro 41 solo Programada con costo; Peñaflor no se puede fijar). Falta una dirección con Express y la promoción correspondiente en la cuenta (lo configura el equipo de data).

---

### TC-B2C144-APP-019 - Verificar que el precio Express no baja a cero al superar el umbral de monto [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}
- Dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} con ventana Express
- El total del carro supera {UMBRAL_DESPACHO_GRATIS_CLUB}
- Sin promoción de envío gratis que incluya Express

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD
- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD
- {COMPRADOR_CLUB_USER} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

El chip mantiene ⚡ con el precio Express aunque el carro supere el umbral de despacho gratis.

**Observación**

Android (dispositivo por ADB, v1.0.1): requiere una ventana Express (⚡) con su precio/estado de promoción; ninguna de las direcciones de la data muestra ventana Express (Calle Uno 23 y San Isidro 41 solo Programada con costo; Peñaflor no se puede fijar). Falta una dirección con Express y la promoción correspondiente en la cuenta (lo configura el equipo de data).

---

### TC-B2C144-APP-020 - Verificar que al iniciar sesión el navbar muestra la ventana vigente de la dirección guardada [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección {DIRECCION_DESPACHO_001} está persistida en el perfil y su ventana anterior ya no está vigente

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario inicia sesión.
2. El usuario revisa el navbar.

**Resultado esperado**

Sin loader a pantalla completa, el navbar muestra {DIRECCION_DESPACHO_001} con la próxima ventana vigente actualizada.

**Observación**

Android (dispositivo por ADB, v1.0.1): la precondición exige un estado de Janis que QA no puede provocar ni observar a voluntad: la ventana anterior de la dirección persistida ya no está vigente. Falta data/ambiente que permita reproducir ese estado (lo configura el equipo de data).

---

### TC-B2C144-APP-021 - Verificar que si al iniciar sesión ya no hay ventanas el header pasa a sin horarios [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección persistida en el perfil es {DIRECCION_SIN_SLA}, que tenía SLAs en la sesión anterior

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_SIN_SLA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario inicia sesión.
2. El usuario revisa el navbar.

**Resultado esperado**

El navbar muestra la dirección con el aviso de sin horarios disponibles.

**Observación**

Android (dispositivo por ADB, v1.0.1): la precondición exige un estado de Janis que QA no puede provocar ni observar a voluntad: la dirección persistida {DIRECCION_SIN_SLA} perdió sus SLAs respecto de la sesión anterior. Falta data/ambiente que permita reproducir ese estado (lo configura el equipo de data).

---

### TC-B2C144-APP-022 - Verificar que si al iniciar sesión se perdió la cobertura el header pasa a sin cobertura [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección persistida en el perfil es {DIRECCION_SIN_COBERTURA}, que tenía cobertura en la sesión anterior

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_SIN_COBERTURA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario inicia sesión.
2. El usuario revisa el navbar.

**Resultado esperado**

El navbar muestra la dirección con la etiqueta "Despacho sin cobertura".

**Observación**

Android (dispositivo por ADB, v1.0.1): la precondición exige un estado de Janis que QA no puede provocar ni observar a voluntad: la dirección persistida {DIRECCION_SIN_COBERTURA} perdió su cobertura respecto de la sesión anterior. Falta data/ambiente que permita reproducir ese estado (lo configura el equipo de data).

---

### TC-B2C144-APP-023 - Verificar que durante la navegación la ventana del navbar se re-verifica periódicamente [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección {DIRECCION_DESPACHO_001} está seteada
- La ventana mostrada vence durante la navegación

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {TTL_REVERIFICACION_MIN} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario revisa el Store Locator del navbar.
3. El usuario navega entre páginas durante más de {TTL_REVERIFICACION_MIN} minutos.

**Resultado esperado**

Tras el TTL, el navbar se actualiza silenciosamente con la próxima ventana vigente, sin loader ni interrupción.

**Observación**

Android (dispositivo por ADB, v1.0.1): la precondición exige un estado de Janis que QA no puede provocar ni observar a voluntad: la ventana mostrada vence durante la navegación (TTL de re-verificación). Falta data/ambiente que permita reproducir ese estado (lo configura el equipo de data).

---

### TC-B2C144-APP-024 - Verificar que si la re-verificación periódica falla el navbar mantiene su estado [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- La dirección {DIRECCION_DESPACHO_001} está seteada
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {JANIS_API_ENDPOINT} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {TTL_REVERIFICACION_MIN} = TBD
- {HERRAMIENTA_PROXY_APP} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario revisa el Store Locator del navbar.
3. El usuario navega entre páginas durante más de {TTL_REVERIFICACION_MIN} minutos.

**Resultado esperado**

El navbar mantiene la dirección, la ventana y el chip sin cambios ni mensajes de error.

**Observación**

Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}. Falta cargar ese dato (lo carga el equipo de data / herramientas).

---

### TC-B2C144-APP-025 - Verificar que si Janis no responde tras 2 reintentos se muestra el toast de verificación [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT} (timeout en todos los intentos)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {JANIS_API_ENDPOINT} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {HERRAMIENTA_PROXY_APP} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".

**Resultado esperado**

Tras 2 reintentos fallidos se muestra el toast "No pudimos verificar tu dirección de entrega. Intenta nuevamente o selecciona una dirección".

**Observación**

Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}. Falta cargar ese dato (lo carga el equipo de data / herramientas).

---

### TC-B2C144-APP-026 - Verificar que un invitado sin dirección que inicia sesión carga la última dirección del perfil [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado sin dirección seteada
- La última dirección usada de la cuenta {USER_AUTH_001} es {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {DIRECCION_DESPACHO_001} = Casa
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario inicia sesión con la cuenta {USER_AUTH_001}.
3. El usuario revisa el navbar.

**Resultado esperado**

El navbar muestra {DIRECCION_DESPACHO_001} con su próxima ventana y chip.

**Observación**

Android (dispositivo por ADB, v1.0.1): Invitado sin dirección (navbar «Elige una forma de entrega») inicia sesión: el navbar muestra «Calle Uno 23, La Florida, Desde: Hoy 03/11, 18:00 hrs., $2.990».

**Evidencia**

![Android · Paso 1 — invitado sin direccion](<B2C-144 APP Evidencias/TC-B2C144-APP-026-android-p01-invitado-sin-direccion.png>)

![Android · Paso 2 — navbar tras iniciar sesion](<B2C-144 APP Evidencias/TC-B2C144-APP-026-android-p02-navbar-tras-iniciar-sesion.png>)

---

### TC-B2C144-APP-028 - Verificar que al confirmar una dirección nueva se consulta Janis vía APIGEE y la respuesta trae cobertura, ventanas, tienda y costo [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro está vacío
- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {JANIS_API_ENDPOINT}
- {LOG_TOOL}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.
7. El usuario revisa en {HERRAMIENTA_PROXY_APP} la request GetShippingSimulationsFromJanis y su respuesta.
8. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

Al confirmar, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}); la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El navbar muestra {DIRECCION_DESPACHO_001} con la próxima ventana de schedules y el chip según el costo recibido.

**Observación**

Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}, {LOG_TOOL}. Falta cargar ese dato (lo carga el equipo de data / herramientas).

---

### TC-B2C144-APP-029 - Verificar que al seleccionar una dirección guardada se consulta Janis con esa dirección [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La libreta de {USER_AUTH_001} tiene {DIRECCION_DESPACHO_001} (activa) y {DIRECCION_DESPACHO_002}
- El carro está vacío
- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_DESPACHO_002}
- {JANIS_API_ENDPOINT}
- {LOG_TOOL}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con las direcciones guardadas.
5. El usuario selecciona {DIRECCION_DESPACHO_002}.
6. Si el sistema solicita el código OTP (B2C-125), el usuario lo ingresa y continúa.
7. El usuario revisa en {HERRAMIENTA_PROXY_APP} la request GetShippingSimulationsFromJanis y su respuesta.

**Resultado esperado**

Al seleccionar {DIRECCION_DESPACHO_002}, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de esa dirección; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El navbar muestra {DIRECCION_DESPACHO_002} con su próxima ventana y su chip.

**Observación**

Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}, {LOG_TOOL}. Falta cargar ese dato (lo carga el equipo de data / herramientas).

---

### TC-B2C144-APP-030 - Verificar que al cargar con una dirección ya configurada se consulta Janis [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección {DIRECCION_DESPACHO_001} está seteada
- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {JANIS_API_ENDPOINT}
- {LOG_TOOL}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El usuario cierra la App por completo y la vuelve a abrir.
3. El sistema carga el Home.
4. El usuario revisa en {HERRAMIENTA_PROXY_APP} la request GetShippingSimulationsFromJanis y su respuesta.
5. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

Durante la carga se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de {DIRECCION_DESPACHO_001}; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El navbar muestra {DIRECCION_DESPACHO_001} con la próxima ventana vigente.

**Observación**

Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}, {LOG_TOOL}. Falta cargar ese dato (lo carga el equipo de data / herramientas).

---

### TC-B2C144-APP-031 - Verificar que al cambiar la dirección desde Mis envíos se consulta Janis con la nueva dirección [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La libreta de {USER_AUTH_001} tiene {DIRECCION_DESPACHO_001} (activa) y {DIRECCION_DESPACHO_002}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (cumple el mínimo de compra)
- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_DESPACHO_002}
- {SKU_VALID_001}
- {UNIDADES_SOBRE_MINIMO}
- {JANIS_API_ENDPOINT}
- {LOG_TOOL}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el ícono del carro.
4. El usuario toca "Ir a pagar".
5. El sistema muestra Mis envíos con {DIRECCION_DESPACHO_001}.
6. El usuario cambia la dirección de despacho a {DIRECCION_DESPACHO_002} desde Mis envíos.
7. Si el sistema solicita el código OTP (B2C-125), el usuario lo ingresa y continúa.
8. El usuario revisa en {HERRAMIENTA_PROXY_APP} la request GetShippingSimulationsFromJanis y su respuesta.

**Resultado esperado**

Al cambiar la dirección en Mis envíos, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de {DIRECCION_DESPACHO_002}; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. Mis envíos muestra las ventanas de la nueva dirección y el navbar se actualiza con {DIRECCION_DESPACHO_002}.

**Observación**

Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}, {LOG_TOOL}. Falta cargar ese dato (lo carga el equipo de data / herramientas).

---

### TC-B2C144-APP-032 - Verificar que si Janis responde sin cobertura la dirección no se setea y se deriva al flujo sin cobertura [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_COBERTURA}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.
7. El usuario revisa en {HERRAMIENTA_PROXY_APP} la respuesta de GetShippingSimulationsFromJanis.
8. El usuario revisa el modal que se muestra y el Store Locator del navbar, sin tomar ninguna opción.

**Resultado esperado**

La respuesta trae coverage = false. La dirección no se setea: el navbar sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip, y el sistema deriva al flujo B2C-123 (modal "Aún no llegamos"). No se muestra el modal "No se te escapen" ni el flujo sin horarios.

**Observación**

Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}. Falta cargar ese dato (lo carga el equipo de data / herramientas).

---

### TC-B2C144-APP-033 - Verificar que con carro y cambio de tienda abastecedora se muestra No se te escapen y al confirmar se setea la dirección [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} x 1
- {DIRECCION_OTRA_TIENDA} es abastecida por una tienda distinta a la de {DIRECCION_DESPACHO_001}
- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_OTRA_TIENDA}
- {SKU_VALID_001}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.
7. El usuario revisa en {HERRAMIENTA_PROXY_APP} el warehouseId de la respuesta de GetShippingSimulationsFromJanis.
8. El sistema muestra el modal "No se te escapen".
9. El usuario toca "Sí, continuar".
10. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

La respuesta trae coverage = true y un warehouseId distinto al activo; antes de setear se muestra el modal "No se te escapen". Al confirmar, el sistema continúa: la dirección se setea, el nuevo warehouseId queda en la sesión y el navbar muestra {DIRECCION_OTRA_TIENDA} con su próxima ventana y chip.

**Observación**

Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}. Falta cargar ese dato (lo carga el equipo de data / herramientas).

---

### TC-B2C144-APP-034 - Verificar que al cancelar No se te escapen se mantienen la dirección y la configuración anteriores [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} x 1
- {DIRECCION_OTRA_TIENDA} es abastecida por una tienda distinta a la de {DIRECCION_DESPACHO_001}

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_OTRA_TIENDA}
- {SKU_VALID_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.
7. El sistema muestra el modal "No se te escapen".
8. El usuario toca "No, gracias".
9. El usuario revisa el Store Locator del navbar y el carro.

**Resultado esperado**

El modal se cierra y la dirección no se setea: el navbar mantiene {DIRECCION_DESPACHO_001} con su ventana y chip, el carro conserva {SKU_VALID_001} x 1 con la tienda abastecedora anterior y no se continúa a la evaluación de SLAs.

**Observación**

Android (dispositivo por ADB, v1.0.1): Aviso mostrado: «Algunos productos podrían agotarse» (flujo aviso). Navbar antes «Calle Uno 23, Desde: Hoy 03/11, 18:00 hrs., $2.990»; después de «No, gracias» «Calle Uno 23, Desde: Hoy 03/11, 18:00 hrs., $2.990»; carro con subtotal 2490. Nota: el modal se titula «Algunos productos podrían agotarse» y no «No se te escapen» como dice el TC.

**Evidencia**

![Android · Paso 1 — aviso tienda distinta](<B2C-144 APP Evidencias/TC-B2C144-APP-034-android-p01-aviso-tienda-distinta.png>)

![Android · Paso 2 — navbar tras cancelar](<B2C-144 APP Evidencias/TC-B2C144-APP-034-android-p02-navbar-tras-cancelar.png>)

![Android · Paso 3 — carro tras cancelar](<B2C-144 APP Evidencias/TC-B2C144-APP-034-android-p03-carro-tras-cancelar.png>)

---

### TC-B2C144-APP-035 - Verificar que si Janis responde sin ventanas la dirección no se setea y se deriva al flujo sin horarios [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_SLA}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.
7. El usuario revisa en {HERRAMIENTA_PROXY_APP} la respuesta de GetShippingSimulationsFromJanis.
8. El usuario revisa el modal que se muestra y el Store Locator del navbar, sin tomar ninguna opción.

**Resultado esperado**

La respuesta trae coverage = true y schedules vacío o nulo. La dirección no se setea: el navbar sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip, y el sistema deriva al flujo B2C-127 (modal sin horarios).

**Observación**

Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}. Falta cargar ese dato (lo carga el equipo de data / herramientas).

---

### TC-B2C144-APP-036 - Verificar que con carro y misma tienda abastecedora la dirección se setea sin mostrar No se te escapen [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} x 1
- {DIRECCION_MISMA_TIENDA} es abastecida por la misma tienda que {DIRECCION_DESPACHO_001}
- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_MISMA_TIENDA}
- {SKU_VALID_001}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_MISMA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.
7. El usuario revisa en {HERRAMIENTA_PROXY_APP} el warehouseId de la respuesta de GetShippingSimulationsFromJanis.
8. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

La respuesta trae el mismo warehouseId que el activo; no se muestra el modal "No se te escapen" y la dirección se setea directamente: el navbar muestra {DIRECCION_MISMA_TIENDA} con su próxima ventana y chip, y el carro no cambia.

**Observación**

Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}. Falta cargar ese dato (lo carga el equipo de data / herramientas).

---

### TC-B2C144-APP-037 - Verificar que el contador de re-verificación se reinicia al cambiar la dirección manualmente [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El TTL de re-verificación configurado en BM es {TTL_REVERIFICACION_MIN} minutos
- El carro está vacío
- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_DESPACHO_002}
- {TTL_REVERIFICACION_MIN}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.
7. El usuario anota la hora del seteo (T0).
8. El usuario navega entre páginas y, 2 minutos antes de cumplirse {TTL_REVERIFICACION_MIN} minutos desde T0, cambia la dirección a {DIRECCION_DESPACHO_002} desde el Store Locator; anota la hora del cambio (T1).
9. El usuario sigue navegando hasta pasar T1 + {TTL_REVERIFICACION_MIN} minutos, revisando en {HERRAMIENTA_PROXY_APP} las requests GetShippingSimulationsFromJanis.

**Resultado esperado**

No se ejecuta re-verificación al cumplirse T0 + {TTL_REVERIFICACION_MIN} minutos (el contador se reinició con el cambio). La siguiente re-verificación periódica ocurre al cumplirse T1 + {TTL_REVERIFICACION_MIN} minutos, con los datos de {DIRECCION_DESPACHO_002}, sin loader ni interrupción.

**Observación**

Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}. Falta cargar ese dato (lo carga el equipo de data / herramientas).

---

### TC-B2C144-APP-038 - Verificar que no se re-verifica si la dirección se cambió hace menos de 30 segundos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El TTL de re-verificación configurado en BM es {TTL_REVERIFICACION_MIN} minutos
- El carro está vacío
- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_DESPACHO_002}
- {TTL_REVERIFICACION_MIN}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.
7. El usuario anota la hora del seteo (T0).
8. El usuario navega entre páginas y, 10 segundos antes de cumplirse {TTL_REVERIFICACION_MIN} minutos desde T0, cambia la dirección a {DIRECCION_DESPACHO_002}; anota la hora del cambio (T1).
9. Durante los 30 segundos siguientes a T1, el usuario navega a otra página y revisa en {HERRAMIENTA_PROXY_APP} las requests GetShippingSimulationsFromJanis.

**Resultado esperado**

Solo se registra la llamada GetShippingSimulationsFromJanis del seteo de {DIRECCION_DESPACHO_002}; en los 30 segundos siguientes a T1 no se ejecuta otra llamada de re-verificación aunque se cumpla T0 + {TTL_REVERIFICACION_MIN} minutos. El navbar muestra {DIRECCION_DESPACHO_002} sin cambios adicionales.

**Observación**

Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}. Falta cargar ese dato (lo carga el equipo de data / herramientas).

---

### TC-B2C144-APP-039 - Verificar que si el primer reintento a Janis responde bien la dirección se setea sin toast de error [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro está vacío
- {HERRAMIENTA_PROXY_APP} configurado para que solo la primera request {JANIS_API_ENDPOINT} falle por timeout o error HTTP

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {JANIS_API_ENDPOINT}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.
7. El usuario revisa en {HERRAMIENTA_PROXY_APP} las requests GetShippingSimulationsFromJanis y sus tiempos.
8. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

Se registran 2 requests GetShippingSimulationsFromJanis: la primera falla y la segunda (1er reintento, unos 2 segundos después) responde bien. El sistema continúa según el CA2: la dirección se setea y el navbar muestra {DIRECCION_DESPACHO_001} con su ventana y chip. No se muestra el toast de error.

**Observación**

Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}. Falta cargar ese dato (lo carga el equipo de data / herramientas).

---

### TC-B2C144-APP-040 - Verificar que si el segundo reintento a Janis responde bien la dirección se setea sin toast de error [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro está vacío
- {HERRAMIENTA_PROXY_APP} configurado para que las dos primeras requests {JANIS_API_ENDPOINT} fallen por timeout o error HTTP

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {JANIS_API_ENDPOINT}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.
7. El usuario revisa en {HERRAMIENTA_PROXY_APP} las requests GetShippingSimulationsFromJanis y sus tiempos.
8. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

Se registran 3 requests GetShippingSimulationsFromJanis con unos 2 segundos entre cada una: las dos primeras fallan y la tercera (2do reintento) responde bien. El sistema continúa según el CA2: la dirección se setea y el navbar muestra {DIRECCION_DESPACHO_001} con su ventana y chip. No se muestra el toast de error.

**Observación**

Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}. Falta cargar ese dato (lo carga el equipo de data / herramientas).

---

### TC-B2C144-APP-041 - Verificar que el fallo definitivo de Janis queda registrado en el sistema de logging [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro está vacío
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT} (todos los intentos)
- Acceso de consulta a {LOG_TOOL}

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {JANIS_API_ENDPOINT}
- {LOG_TOOL}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.
7. El sistema muestra el toast de error.
8. El usuario anota la hora del error.
9. El usuario busca en {LOG_TOOL} los registros de GetShippingSimulationsFromJanis en esa hora.

**Resultado esperado**

Se muestra el toast "No pudimos verificar tu dirección de entrega. Intenta nuevamente o selecciona una dirección" sin detalles técnicos. En {LOG_TOOL} queda un registro del error definitivo de GetShippingSimulationsFromJanis (servicio, tipo de error o timeout y hora), que no es visible para el usuario.

**Observación**

Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}, {LOG_TOOL}. Falta cargar ese dato (lo carga el equipo de data / herramientas).

---

### TC-B2C144-APP-042 - Verificar que una dirección sin numeración se setea y el navbar la muestra con S/N, ventana y chip [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_NUMERO} (Región, Comuna y Calle, sin numeración) tiene cobertura y SLAs

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_NUMERO}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual".
7. El usuario completa Región, Comuna y Dirección con {DIRECCION_SIN_NUMERO}, deja Numeración vacío y toca "Continuar con detalle de la dirección".
8. El usuario confirma la dirección (B2C-99) y valida el código OTP (B2C-125).
9. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

La dirección queda seteada y el navbar muestra la calle con "S/N" en lugar de la numeración, la próxima ventana horaria disponible y el chip de precio.

**Resultado obtenido**

Android (dispositivo por ADB, v1.0.1): Esperado: el navbar muestra la calle con «S/N» en lugar de la numeración. Obtenido: tras ingresar la dirección manual {DIRECCION_SIN_NUMERO} sin numeración y validar el OTP, el navbar muestra «Las Condes, Desde: Hoy 03/11, 18:00 hrs., $2.990», sin «S/N». Bug: B2C-1441.

**Observación**

Android (dispositivo por ADB, v1.0.1): Esperado: el navbar muestra la calle con «S/N» en lugar de la numeración. Obtenido: tras ingresar la dirección manual {DIRECCION_SIN_NUMERO} sin numeración y validar el OTP, el navbar muestra «Las Condes, Desde: Hoy 03/11, 18:00 hrs., $2.990», sin «S/N». Bug: B2C-1441.

**Evidencia**

![Android · Paso 1 — formulario sin numeracion](<B2C-144 APP Evidencias/TC-B2C144-APP-042-android-p01-formulario-sin-numeracion.png>)

![Android · Paso 2 — navbar sin numeracion](<B2C-144 APP Evidencias/TC-B2C144-APP-042-android-p02-navbar-sin-numeracion.png>)

---

### TC-B2C144-APP-043 - Verificar que una dirección con departamento se setea y el navbar la muestra con su ventana y chip [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |
| Spec | tests-app/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es {DIRECCION_DESPACHO_001}
- {DIRECCION_CON_DEPTO} tiene cobertura y SLAs

**Data utilizada**

- {APP_BUILD}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_CON_DEPTO}
- {DEPTO_001}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD}.
2. El sistema carga el Home de la App.
3. El usuario toca el Store Locator del navbar.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_CON_DEPTO}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. En el detalle de la dirección, el usuario completa el departamento con {DEPTO_001} y confirma la dirección (B2C-99).
7. El usuario valida el código OTP (B2C-125).
8. El usuario revisa el Store Locator del navbar.

**Resultado esperado**

La dirección queda seteada con el departamento {DEPTO_001} y el navbar muestra la dirección según el formato definido en Figma, la próxima ventana horaria disponible y el chip de precio.

**Observación**

Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {DEPTO_001}, {DIRECCION_CON_DEPTO}. Falta cargar ese dato (lo carga el equipo de data / herramientas).

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
  "suite": "B2C-144 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-144 APP Test Cases.xlsx",
  "title": "B2C-144 (app Android) - Navbar de entrega: método, ventana y costo - Evidencias QA",
  "updated_at": "2026-11-03"
 },
 "history": {
  "2026-11-03": [
   "TC-B2C144-APP-001",
   "TC-B2C144-APP-002",
   "TC-B2C144-APP-003",
   "TC-B2C144-APP-004",
   "TC-B2C144-APP-005",
   "TC-B2C144-APP-006",
   "TC-B2C144-APP-007",
   "TC-B2C144-APP-008",
   "TC-B2C144-APP-009",
   "TC-B2C144-APP-010",
   "TC-B2C144-APP-011",
   "TC-B2C144-APP-012",
   "TC-B2C144-APP-013",
   "TC-B2C144-APP-014",
   "TC-B2C144-APP-016",
   "TC-B2C144-APP-017",
   "TC-B2C144-APP-018",
   "TC-B2C144-APP-019",
   "TC-B2C144-APP-020",
   "TC-B2C144-APP-021",
   "TC-B2C144-APP-022",
   "TC-B2C144-APP-023",
   "TC-B2C144-APP-024",
   "TC-B2C144-APP-025",
   "TC-B2C144-APP-026",
   "TC-B2C144-APP-028",
   "TC-B2C144-APP-029",
   "TC-B2C144-APP-030",
   "TC-B2C144-APP-031",
   "TC-B2C144-APP-032",
   "TC-B2C144-APP-033",
   "TC-B2C144-APP-034",
   "TC-B2C144-APP-035",
   "TC-B2C144-APP-036",
   "TC-B2C144-APP-037",
   "TC-B2C144-APP-038",
   "TC-B2C144-APP-039",
   "TC-B2C144-APP-040",
   "TC-B2C144-APP-041",
   "TC-B2C144-APP-042",
   "TC-B2C144-APP-043"
  ]
 },
 "results": [
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El modal se cierra y el navbar muestra {DIRECCION_DESPACHO_001}, la próxima ventana horaria disponible y el chip de precio, sin recargar la página.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-001",
   "name": "Verificar que al setear una dirección con cobertura el navbar muestra dirección, ventana y chip [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Tras fijar {DIRECCION_DESPACHO_001} el navbar muestra «Calle Uno 23, Desde: Hoy 03/11, 15:00 hrs., $2.990»: dirección true, próxima ventana true, chip de precio «$2.990».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — navbar tras setear",
     "file": "TC-B2C144-APP-001-android-p01-navbar-tras-setear.png"
    }
   ],
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa el Store Locator del navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "La dirección {DIRECCION_DESPACHO_001} y su ventana se mantienen en el navbar tras recargar y navegar.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-002",
   "name": "Verificar que la dirección de un invitado persiste al navegar y recargar en la misma sesión [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Antes de cerrar y reabrir el app: «Calle Uno 23, Desde: Hoy 03/11, 15:00 hrs., $2.990». Después (sin borrar datos): «Calle Uno 23, La Florida, Región..., Desde: Hoy 03/11, 15:00 hrs., $2.990».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección {DIRECCION_DESPACHO_001} está seteada como invitado",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — navbar tras reabrir",
     "file": "TC-B2C144-APP-002-android-p01-navbar-tras-reabrir.png"
    }
   ],
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario revisa el Store Locator del navbar.\n3. El usuario sale del carro y vuelve a ingresar tocando el ícono del carro.\n4. El usuario navega a una PLP.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {DIRECCION_DESPACHO_001} = Casa"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El navbar muestra {DIRECCION_DESPACHO_001} con su ventana vigente tras volver a iniciar sesión.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-003",
   "name": "Verificar que la dirección de un logueado persiste entre sesiones [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Tras cerrar sesión y volver a entrar con la misma cuenta el navbar muestra «Calle Uno 23, Desde: Hoy 03/11, 18:00 hrs., $2.990».",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección {DIRECCION_DESPACHO_001} fue seteada con esta cuenta en una sesión anterior",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — navbar tras volver a entrar",
     "file": "TC-B2C144-APP-003-android-p01-navbar-tras-volver-a-entrar.png"
    }
   ],
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario cierra sesión.\n2. El usuario inicia sesión nuevamente con la misma cuenta.\n3. El usuario abre la App {APP_BUILD}.\n4. El usuario revisa el Store Locator del navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El navbar muestra la ventana Programada.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-004",
   "name": "Verificar que con Express con costo y Programado gratis el navbar muestra la ventana Programada [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1): la precondición pide que Janis retorne Express con costo y Programado gratis. en {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} (= Calle Uno 23, La Florida) el navbar muestra «Calle Uno 23, Desde: Hoy 03/11, 15:00 hrs., $2.990»: solo una ventana Programada con costo, sin Express ni gratuidad. La precondición no se cumple; además el token apunta a la misma dirección que {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}, dos configuraciones distintas para una sola dirección. Falta una dirección con esa respuesta de Janis (lo configura el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Janis retorna para {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}: Express con costo y Programado gratis",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa la ventana mostrada en el navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El navbar muestra la ventana Express.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-005",
   "name": "Verificar que con Express y Programado con costo el navbar muestra la ventana Express [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1): la precondición pide que Janis retorne Express y Programado con costo. en {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (= Calle Uno 23, La Florida) el navbar muestra «Calle Uno 23, Desde: Hoy 03/11, 15:00 hrs., $2.990»: solo una ventana Programada con costo, sin Express ni gratuidad. No hay ventana Express en esa dirección. Falta una dirección con esa respuesta de Janis (lo configura el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Janis retorna para {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}: Express y Programado con costo",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa la ventana mostrada en el navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El navbar muestra la ventana Express.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-006",
   "name": "Verificar que con Express y Programado gratis el navbar muestra la ventana Express [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1): la precondición pide Express y Programado gratis para {DIRECCION_EXPRESS_Y_PROG_GRATIS} (San Isidro 41, Santiago); el navbar muestra «San Isidro 41, Desde: Hoy 03/11, 15:00 hrs., $2.990»: Programada con costo, sin Express ni gratuidad. Falta una dirección con esa respuesta de Janis (lo configura el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Janis retorna para {DIRECCION_EXPRESS_Y_PROG_GRATIS}: Express y Programado gratis",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_GRATIS}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa la ventana mostrada en el navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_EXPRESS_Y_PROG_GRATIS} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El navbar muestra la próxima ventana Programada.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-007",
   "name": "Verificar que con solo ventanas Programadas el navbar muestra la próxima ventana Programada [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1): la precondición pide {DIRECCION_SIN_EXPRESS} (Pasaje Diez 359, Peñaflor) con solo ventanas Programadas; el app no logró fijar esa dirección en 3 intentos (no queda seteada). Falta una dirección sin Express con cobertura (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Janis retorna para {DIRECCION_SIN_EXPRESS}: solo ventanas Programadas",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_EXPRESS}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa la ventana mostrada en el navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_SIN_EXPRESS} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "En cada página el navbar muestra la próxima ventana vigente y el chip de costo o gratuidad correspondiente.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-008",
   "name": "Verificar que al navegar entre páginas el navbar mantiene la ventana y el chip vigentes [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Navbar al volver al Home tras navegar por Buscar, Mis productos y Mi cuenta: «Calle Uno 23, Desde: Hoy 03/11, 15:00 hrs., $2.990» → «Calle Uno 23, Desde: Hoy 03/11, 15:00 hrs., $2.990» → «Calle Uno 23, Desde: Hoy 03/11, 15:00 hrs., $2.990» → «Calle Uno 23, Desde: Hoy 03/11, 15:00 hrs., $2.990».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección {DIRECCION_DESPACHO_001} está seteada",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — navbar tras navegar",
     "file": "TC-B2C144-APP-008-android-p01-navbar-tras-navegar.png"
    }
   ],
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario revisa el Store Locator del navbar.\n3. El usuario navega a una PLP y luego a la PDP de {SKU_VALID_001}.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El navbar con el Store Locator se oculta y en su lugar se muestra la barra de búsqueda.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-009",
   "name": "Verificar que en App al ingresar a una PLP N1 el navbar se reemplaza por la barra de búsqueda [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1): En la PLP de categoría N1: navbar de entrega visible: false; barra de búsqueda arriba: true. Textos superiores: Volver | Buscar productos | ¿Qué estás buscando? | Carnes | Todo | Cerdo | Cerdo | Cordero y otros.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección {DIRECCION_DESPACHO_001} está seteada",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — menu categorias",
     "file": "TC-B2C144-APP-009-android-p01-menu-categorias.png"
    },
    {
     "caption": "Android · Paso 2 — plp n1",
     "file": "TC-B2C144-APP-009-android-p02-plp-n1.png"
    }
   ],
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario ingresa a la categoría N1 {CATEGORY_N1_URL}.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {CATEGORY_N1_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes\n- {DIRECCION_DESPACHO_001} = Casa"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El navbar muestra {DIRECCION_OTRA_TIENDA} con su próxima ventana y su chip de costo o gratuidad.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-010",
   "name": "Verificar que al cambiar la dirección el navbar se actualiza con la ventana y el costo nuevos [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Antes: «Calle Uno 23, La Florida, Región..., Desde: Hoy 03/11, 15:00 hrs., $2.990». Tras cambiar a {DIRECCION_OTRA_TIENDA}: «Avenida Las Condes 14791, Desde: Hoy 03/11, 15:00 hrs., $2.990» (nueva dirección true, ventana true, chip «$2.990»).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — navbar nueva direccion",
     "file": "TC-B2C144-APP-010-android-p01-navbar-nueva-direccion.png"
    }
   ],
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa el navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El navbar muestra el nombre de {TIENDA_RETIRO_001}, la próxima ventana de retiro y el chip \"Gratis\" en verde sin ícono.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-011",
   "name": "Verificar que con retiro en tienda el navbar muestra la tienda, la ventana y el chip Gratis [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el escenario [Guest] del TC no es alcanzable: al elegir una tienda de retiro un invitado recibe la pantalla «¡Hola, inicia sesión o regístrate!» y el retiro no se configura. Acción requerida: aclarar con QA/producto si el TC debe ejecutarse con sesión iniciada y ajustar el tipo de usuario.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Retiro en tienda configurado con {TIENDA_RETIRO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — navbar retiro",
     "file": "TC-B2C144-APP-011-android-p01-navbar-retiro.png"
    }
   ],
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario revisa el Store Locator del navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {TIENDA_RETIRO_001} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El chip del navbar muestra el costo de despacho en pesos (ej. \"$3.990\") en amarillo.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-012",
   "name": "Verificar que un cliente Club bajo el umbral ve el costo de despacho en el navbar [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): la precondición pide una cuenta Club bajo {UMBRAL_DESPACHO_GRATIS_CLUB} (40000); con la cuenta {COMPRADOR_CLUB_USER} el app informa «Te faltan $17.670 para despacho GRATIS» con un carro de $42.330, o sea un umbral de $60.000: la cuenta/umbral de la data no corresponde a un Club de $40.000. Falta una cuenta Club con ese umbral (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}\n- Despacho a {DIRECCION_DESPACHO_001} con ventana Programada\n- El carro contiene {SKU_VALID_001} y el total es menor a {UMBRAL_DESPACHO_GRATIS_CLUB}\n- Sin promociones de despacho gratis activas",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — chip bajo el umbral",
     "file": "TC-B2C144-APP-012-android-p01-chip-bajo-el-umbral.png"
    },
    {
     "caption": "Android · Paso 2 — carro",
     "file": "TC-B2C144-APP-012-android-p02-carro.png"
    }
   ],
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario revisa el Store Locator del navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD\n- {COMPRADOR_CLUB_USER} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El chip del navbar muestra \"Despacho gratis\" en lugar del precio.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-013",
   "name": "Verificar que un cliente Club sobre el umbral ve Despacho gratis en el navbar [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): la precondición pide un carro sobre {UMBRAL_DESPACHO_GRATIS_CLUB} (40000) con cuenta Club. Con {COMPRADOR_CLUB_USER} y un carro de $42.330 el chip sigue en «$2.990» porque el umbral real de la cuenta es $60.000 («Te faltan $17.670 para despacho GRATIS»). Falta una cuenta Club con umbral de $40.000 (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}\n- Despacho a {DIRECCION_DESPACHO_001}\n- El total del carro supera {UMBRAL_DESPACHO_GRATIS_CLUB}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — chip sobre el umbral",
     "file": "TC-B2C144-APP-013-android-p01-chip-sobre-el-umbral.png"
    }
   ],
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario revisa el Store Locator del navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD\n- {COMPRADOR_CLUB_USER} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El chip cambia a \"Despacho gratis\" al superar el umbral y vuelve al costo en pesos al quedar bajo él, sin recargar la página.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-014",
   "name": "Verificar que al cruzar el umbral en ambos sentidos el chip cambia sin recargar [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): requiere cruzar {UMBRAL_DESPACHO_GRATIS_CLUB} (40000); con {COMPRADOR_CLUB_USER} el umbral real es $60.000, así que a $42.330 y a $39.840 el chip se mantiene en «$2.990». Falta una cuenta Club con umbral de $40.000 (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}\n- Despacho a {DIRECCION_DESPACHO_001}\n- El total del carro es menor a {UMBRAL_DESPACHO_GRATIS_CLUB}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — chip bajo el umbral",
     "file": "TC-B2C144-APP-014-android-p01-chip-bajo-el-umbral.png"
    },
    {
     "caption": "Android · Paso 2 — chip sobre el umbral",
     "file": "TC-B2C144-APP-014-android-p02-chip-sobre-el-umbral.png"
    }
   ],
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario revisa el Store Locator del navbar.\n3. El usuario agrega unidades de {SKU_VALID_001} hasta superar {UMBRAL_DESPACHO_GRATIS_CLUB}.\n4. El usuario quita unidades hasta quedar bajo {UMBRAL_DESPACHO_GRATIS_CLUB}.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD\n- {COMPRADOR_CLUB_USER} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El chip muestra \"Gratis\" en azul con 💎.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-016",
   "name": "Verificar que un cliente Diamante ve el chip azul Gratis con diamante [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): la cuenta {COMPRADOR_DIAMANTE_USER} tiene activa «Avenida San Josemaría Escrivá de Balaguer…» y no tiene guardada {DIRECCION_DESPACHO_001}; con su dirección activa el navbar muestra chip «$2.990», sin la gratuidad Diamante. No se cumple la precondición (despacho a la dirección base con promoción Diamante vigente). Falta esa dirección y la promoción en la cuenta (lo carga el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_DIAMANTE_USER}\n- Despacho a {DIRECCION_DESPACHO_001}\n- La promoción de envío gratis Diamante está vigente",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — navbar diamante",
     "file": "TC-B2C144-APP-016-android-p01-navbar-diamante.png"
    },
    {
     "caption": "Android · Paso 1 — sin direccion base",
     "file": "TC-B2C144-APP-016-android-p01-sin-direccion-base.png"
    }
   ],
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario revisa el Store Locator del navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {COMPRADOR_DIAMANTE_USER} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El chip muestra ⚡ con el precio Express (ej. \"$5.990\") en naranja/rojo.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-017",
   "name": "Verificar que con Express con costo el navbar muestra el rayo y el precio Express [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1): requiere una ventana Express (⚡) con su precio/estado de promoción; ninguna de las direcciones de la data muestra ventana Express (Calle Uno 23 y San Isidro 41 solo Programada con costo; Peñaflor no se puede fijar). Falta una dirección con Express y la promoción correspondiente en la cuenta (lo configura el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sin promoción de envío gratis que incluya Express",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa el chip del navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El chip muestra \"🟢 Gratis\" con ícono circular (mismo chip que membresía).",
   "form_factor": "app",
   "id": "TC-B2C144-APP-018",
   "name": "Verificar que con promoción de envío gratis que incluye Express el chip muestra Gratis [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): requiere una ventana Express (⚡) con su precio/estado de promoción; ninguna de las direcciones de la data muestra ventana Express (Calle Uno 23 y San Isidro 41 solo Programada con costo; Peñaflor no se puede fijar). Falta una dirección con Express y la promoción correspondiente en la cuenta (lo configura el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} con ventana Express seleccionada\n- Promoción de envío gratis que incluye Express vigente para la cuenta",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario revisa el Store Locator del navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El chip mantiene ⚡ con el precio Express aunque el carro supere el umbral de despacho gratis.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-019",
   "name": "Verificar que el precio Express no baja a cero al superar el umbral de monto [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): requiere una ventana Express (⚡) con su precio/estado de promoción; ninguna de las direcciones de la data muestra ventana Express (Calle Uno 23 y San Isidro 41 solo Programada con costo; Peñaflor no se puede fijar). Falta una dirección con Express y la promoción correspondiente en la cuenta (lo configura el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}\n- Dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} con ventana Express\n- El total del carro supera {UMBRAL_DESPACHO_GRATIS_CLUB}\n- Sin promoción de envío gratis que incluya Express",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario revisa el Store Locator del navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD\n- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD\n- {COMPRADOR_CLUB_USER} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Sin loader a pantalla completa, el navbar muestra {DIRECCION_DESPACHO_001} con la próxima ventana vigente actualizada.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-020",
   "name": "Verificar que al iniciar sesión el navbar muestra la ventana vigente de la dirección guardada [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): la precondición exige un estado de Janis que QA no puede provocar ni observar a voluntad: la ventana anterior de la dirección persistida ya no está vigente. Falta data/ambiente que permita reproducir ese estado (lo configura el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección {DIRECCION_DESPACHO_001} está persistida en el perfil y su ventana anterior ya no está vigente",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario inicia sesión.\n2. El usuario revisa el navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El navbar muestra la dirección con el aviso de sin horarios disponibles.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-021",
   "name": "Verificar que si al iniciar sesión ya no hay ventanas el header pasa a sin horarios [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): la precondición exige un estado de Janis que QA no puede provocar ni observar a voluntad: la dirección persistida {DIRECCION_SIN_SLA} perdió sus SLAs respecto de la sesión anterior. Falta data/ambiente que permita reproducir ese estado (lo configura el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección persistida en el perfil es {DIRECCION_SIN_SLA}, que tenía SLAs en la sesión anterior",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario inicia sesión.\n2. El usuario revisa el navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_SIN_SLA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El navbar muestra la dirección con la etiqueta \"Despacho sin cobertura\".",
   "form_factor": "app",
   "id": "TC-B2C144-APP-022",
   "name": "Verificar que si al iniciar sesión se perdió la cobertura el header pasa a sin cobertura [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): la precondición exige un estado de Janis que QA no puede provocar ni observar a voluntad: la dirección persistida {DIRECCION_SIN_COBERTURA} perdió su cobertura respecto de la sesión anterior. Falta data/ambiente que permita reproducir ese estado (lo configura el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección persistida en el perfil es {DIRECCION_SIN_COBERTURA}, que tenía cobertura en la sesión anterior",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario inicia sesión.\n2. El usuario revisa el navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_SIN_COBERTURA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Tras el TTL, el navbar se actualiza silenciosamente con la próxima ventana vigente, sin loader ni interrupción.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-023",
   "name": "Verificar que durante la navegación la ventana del navbar se re-verifica periódicamente [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1): la precondición exige un estado de Janis que QA no puede provocar ni observar a voluntad: la ventana mostrada vence durante la navegación (TTL de re-verificación). Falta data/ambiente que permita reproducir ese estado (lo configura el equipo de data).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección {DIRECCION_DESPACHO_001} está seteada\n- La ventana mostrada vence durante la navegación",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario revisa el Store Locator del navbar.\n3. El usuario navega entre páginas durante más de {TTL_REVERIFICACION_MIN} minutos.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {TTL_REVERIFICACION_MIN} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El navbar mantiene la dirección, la ventana y el chip sin cambios ni mensajes de error.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-024",
   "name": "Verificar que si la re-verificación periódica falla el navbar mantiene su estado [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}. Falta cargar ese dato (lo carga el equipo de data / herramientas).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- La dirección {DIRECCION_DESPACHO_001} está seteada\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT}",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario revisa el Store Locator del navbar.\n3. El usuario navega entre páginas durante más de {TTL_REVERIFICACION_MIN} minutos.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {JANIS_API_ENDPOINT} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {TTL_REVERIFICACION_MIN} = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Tras 2 reintentos fallidos se muestra el toast \"No pudimos verificar tu dirección de entrega. Intenta nuevamente o selecciona una dirección\".",
   "form_factor": "app",
   "id": "TC-B2C144-APP-025",
   "name": "Verificar que si Janis no responde tras 2 reintentos se muestra el toast de verificación [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}. Falta cargar ese dato (lo carga el equipo de data / herramientas).",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT} (timeout en todos los intentos)",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {JANIS_API_ENDPOINT} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {HERRAMIENTA_PROXY_APP} = TBD"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El navbar muestra {DIRECCION_DESPACHO_001} con su próxima ventana y chip.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-026",
   "name": "Verificar que un invitado sin dirección que inicia sesión carga la última dirección del perfil [App] [Guest]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Invitado sin dirección (navbar «Elige una forma de entrega») inicia sesión: el navbar muestra «Calle Uno 23, La Florida, Desde: Hoy 03/11, 18:00 hrs., $2.990».",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado sin dirección seteada\n- La última dirección usada de la cuenta {USER_AUTH_001} es {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — invitado sin direccion",
     "file": "TC-B2C144-APP-026-android-p01-invitado-sin-direccion.png"
    },
    {
     "caption": "Android · Paso 2 — navbar tras iniciar sesion",
     "file": "TC-B2C144-APP-026-android-p02-navbar-tras-iniciar-sesion.png"
    }
   ],
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario inicia sesión con la cuenta {USER_AUTH_001}.\n3. El usuario revisa el navbar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {DIRECCION_DESPACHO_001} = Casa\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Al confirmar, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}); la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El navbar muestra {DIRECCION_DESPACHO_001} con la próxima ventana de schedules y el chip según el costo recibido.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-028",
   "name": "Verificar que al confirmar una dirección nueva se consulta Janis vía APIGEE y la respuesta trae cobertura, ventanas, tienda y costo [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}, {LOG_TOOL}. Falta cargar ese dato (lo carga el equipo de data / herramientas).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro está vacío\n- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.\n7. El usuario revisa en {HERRAMIENTA_PROXY_APP} la request GetShippingSimulationsFromJanis y su respuesta.\n8. El usuario revisa el Store Locator del navbar.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {JANIS_API_ENDPOINT}\n- {LOG_TOOL}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Al seleccionar {DIRECCION_DESPACHO_002}, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de esa dirección; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El navbar muestra {DIRECCION_DESPACHO_002} con su próxima ventana y su chip.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-029",
   "name": "Verificar que al seleccionar una dirección guardada se consulta Janis con esa dirección [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}, {LOG_TOOL}. Falta cargar ese dato (lo carga el equipo de data / herramientas).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La libreta de {USER_AUTH_001} tiene {DIRECCION_DESPACHO_001} (activa) y {DIRECCION_DESPACHO_002}\n- El carro está vacío\n- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con las direcciones guardadas.\n5. El usuario selecciona {DIRECCION_DESPACHO_002}.\n6. Si el sistema solicita el código OTP (B2C-125), el usuario lo ingresa y continúa.\n7. El usuario revisa en {HERRAMIENTA_PROXY_APP} la request GetShippingSimulationsFromJanis y su respuesta.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_DESPACHO_002}\n- {JANIS_API_ENDPOINT}\n- {LOG_TOOL}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Durante la carga se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de {DIRECCION_DESPACHO_001}; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El navbar muestra {DIRECCION_DESPACHO_001} con la próxima ventana vigente.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-030",
   "name": "Verificar que al cargar con una dirección ya configurada se consulta Janis [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}, {LOG_TOOL}. Falta cargar ese dato (lo carga el equipo de data / herramientas).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección {DIRECCION_DESPACHO_001} está seteada\n- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El usuario cierra la App por completo y la vuelve a abrir.\n3. El sistema carga el Home.\n4. El usuario revisa en {HERRAMIENTA_PROXY_APP} la request GetShippingSimulationsFromJanis y su respuesta.\n5. El usuario revisa el Store Locator del navbar.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {JANIS_API_ENDPOINT}\n- {LOG_TOOL}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Al cambiar la dirección en Mis envíos, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de {DIRECCION_DESPACHO_002}; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. Mis envíos muestra las ventanas de la nueva dirección y el navbar se actualiza con {DIRECCION_DESPACHO_002}.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-031",
   "name": "Verificar que al cambiar la dirección desde Mis envíos se consulta Janis con la nueva dirección [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}, {LOG_TOOL}. Falta cargar ese dato (lo carga el equipo de data / herramientas).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La libreta de {USER_AUTH_001} tiene {DIRECCION_DESPACHO_001} (activa) y {DIRECCION_DESPACHO_002}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (cumple el mínimo de compra)\n- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el ícono del carro.\n4. El usuario toca \"Ir a pagar\".\n5. El sistema muestra Mis envíos con {DIRECCION_DESPACHO_001}.\n6. El usuario cambia la dirección de despacho a {DIRECCION_DESPACHO_002} desde Mis envíos.\n7. Si el sistema solicita el código OTP (B2C-125), el usuario lo ingresa y continúa.\n8. El usuario revisa en {HERRAMIENTA_PROXY_APP} la request GetShippingSimulationsFromJanis y su respuesta.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_DESPACHO_002}\n- {SKU_VALID_001}\n- {UNIDADES_SOBRE_MINIMO}\n- {JANIS_API_ENDPOINT}\n- {LOG_TOOL}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "La respuesta trae coverage = false. La dirección no se setea: el navbar sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip, y el sistema deriva al flujo B2C-123 (modal \"Aún no llegamos\"). No se muestra el modal \"No se te escapen\" ni el flujo sin horarios.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-032",
   "name": "Verificar que si Janis responde sin cobertura la dirección no se setea y se deriva al flujo sin cobertura [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}. Falta cargar ese dato (lo carga el equipo de data / herramientas).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.\n7. El usuario revisa en {HERRAMIENTA_PROXY_APP} la respuesta de GetShippingSimulationsFromJanis.\n8. El usuario revisa el modal que se muestra y el Store Locator del navbar, sin tomar ninguna opción.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_COBERTURA}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "La respuesta trae coverage = true y un warehouseId distinto al activo; antes de setear se muestra el modal \"No se te escapen\". Al confirmar, el sistema continúa: la dirección se setea, el nuevo warehouseId queda en la sesión y el navbar muestra {DIRECCION_OTRA_TIENDA} con su próxima ventana y chip.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-033",
   "name": "Verificar que con carro y cambio de tienda abastecedora se muestra No se te escapen y al confirmar se setea la dirección [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}. Falta cargar ese dato (lo carga el equipo de data / herramientas).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} x 1\n- {DIRECCION_OTRA_TIENDA} es abastecida por una tienda distinta a la de {DIRECCION_DESPACHO_001}\n- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.\n7. El usuario revisa en {HERRAMIENTA_PROXY_APP} el warehouseId de la respuesta de GetShippingSimulationsFromJanis.\n8. El sistema muestra el modal \"No se te escapen\".\n9. El usuario toca \"Sí, continuar\".\n10. El usuario revisa el Store Locator del navbar.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_OTRA_TIENDA}\n- {SKU_VALID_001}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "El modal se cierra y la dirección no se setea: el navbar mantiene {DIRECCION_DESPACHO_001} con su ventana y chip, el carro conserva {SKU_VALID_001} x 1 con la tienda abastecedora anterior y no se continúa a la evaluación de SLAs.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-034",
   "name": "Verificar que al cancelar No se te escapen se mantienen la dirección y la configuración anteriores [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Aviso mostrado: «Algunos productos podrían agotarse» (flujo aviso). Navbar antes «Calle Uno 23, Desde: Hoy 03/11, 18:00 hrs., $2.990»; después de «No, gracias» «Calle Uno 23, Desde: Hoy 03/11, 18:00 hrs., $2.990»; carro con subtotal 2490. Nota: el modal se titula «Algunos productos podrían agotarse» y no «No se te escapen» como dice el TC.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} x 1\n- {DIRECCION_OTRA_TIENDA} es abastecida por una tienda distinta a la de {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — aviso tienda distinta",
     "file": "TC-B2C144-APP-034-android-p01-aviso-tienda-distinta.png"
    },
    {
     "caption": "Android · Paso 2 — navbar tras cancelar",
     "file": "TC-B2C144-APP-034-android-p02-navbar-tras-cancelar.png"
    },
    {
     "caption": "Android · Paso 3 — carro tras cancelar",
     "file": "TC-B2C144-APP-034-android-p03-carro-tras-cancelar.png"
    }
   ],
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.\n7. El sistema muestra el modal \"No se te escapen\".\n8. El usuario toca \"No, gracias\".\n9. El usuario revisa el Store Locator del navbar y el carro.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_OTRA_TIENDA}\n- {SKU_VALID_001}"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "La respuesta trae coverage = true y schedules vacío o nulo. La dirección no se setea: el navbar sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip, y el sistema deriva al flujo B2C-127 (modal sin horarios).",
   "form_factor": "app",
   "id": "TC-B2C144-APP-035",
   "name": "Verificar que si Janis responde sin ventanas la dirección no se setea y se deriva al flujo sin horarios [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}. Falta cargar ese dato (lo carga el equipo de data / herramientas).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.\n7. El usuario revisa en {HERRAMIENTA_PROXY_APP} la respuesta de GetShippingSimulationsFromJanis.\n8. El usuario revisa el modal que se muestra y el Store Locator del navbar, sin tomar ninguna opción.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_SLA}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "La respuesta trae el mismo warehouseId que el activo; no se muestra el modal \"No se te escapen\" y la dirección se setea directamente: el navbar muestra {DIRECCION_MISMA_TIENDA} con su próxima ventana y chip, y el carro no cambia.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-036",
   "name": "Verificar que con carro y misma tienda abastecedora la dirección se setea sin mostrar No se te escapen [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}. Falta cargar ese dato (lo carga el equipo de data / herramientas).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} x 1\n- {DIRECCION_MISMA_TIENDA} es abastecida por la misma tienda que {DIRECCION_DESPACHO_001}\n- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_MISMA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.\n7. El usuario revisa en {HERRAMIENTA_PROXY_APP} el warehouseId de la respuesta de GetShippingSimulationsFromJanis.\n8. El usuario revisa el Store Locator del navbar.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_MISMA_TIENDA}\n- {SKU_VALID_001}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "No se ejecuta re-verificación al cumplirse T0 + {TTL_REVERIFICACION_MIN} minutos (el contador se reinició con el cambio). La siguiente re-verificación periódica ocurre al cumplirse T1 + {TTL_REVERIFICACION_MIN} minutos, con los datos de {DIRECCION_DESPACHO_002}, sin loader ni interrupción.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-037",
   "name": "Verificar que el contador de re-verificación se reinicia al cambiar la dirección manualmente [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}. Falta cargar ese dato (lo carga el equipo de data / herramientas).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El TTL de re-verificación configurado en BM es {TTL_REVERIFICACION_MIN} minutos\n- El carro está vacío\n- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.\n7. El usuario anota la hora del seteo (T0).\n8. El usuario navega entre páginas y, 2 minutos antes de cumplirse {TTL_REVERIFICACION_MIN} minutos desde T0, cambia la dirección a {DIRECCION_DESPACHO_002} desde el Store Locator; anota la hora del cambio (T1).\n9. El usuario sigue navegando hasta pasar T1 + {TTL_REVERIFICACION_MIN} minutos, revisando en {HERRAMIENTA_PROXY_APP} las requests GetShippingSimulationsFromJanis.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_DESPACHO_002}\n- {TTL_REVERIFICACION_MIN}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Solo se registra la llamada GetShippingSimulationsFromJanis del seteo de {DIRECCION_DESPACHO_002}; en los 30 segundos siguientes a T1 no se ejecuta otra llamada de re-verificación aunque se cumpla T0 + {TTL_REVERIFICACION_MIN} minutos. El navbar muestra {DIRECCION_DESPACHO_002} sin cambios adicionales.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-038",
   "name": "Verificar que no se re-verifica si la dirección se cambió hace menos de 30 segundos [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}. Falta cargar ese dato (lo carga el equipo de data / herramientas).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El TTL de re-verificación configurado en BM es {TTL_REVERIFICACION_MIN} minutos\n- El carro está vacío\n- {HERRAMIENTA_PROXY_APP} configurado para capturar el tráfico de la App",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.\n7. El usuario anota la hora del seteo (T0).\n8. El usuario navega entre páginas y, 10 segundos antes de cumplirse {TTL_REVERIFICACION_MIN} minutos desde T0, cambia la dirección a {DIRECCION_DESPACHO_002}; anota la hora del cambio (T1).\n9. Durante los 30 segundos siguientes a T1, el usuario navega a otra página y revisa en {HERRAMIENTA_PROXY_APP} las requests GetShippingSimulationsFromJanis.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_DESPACHO_002}\n- {TTL_REVERIFICACION_MIN}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se registran 2 requests GetShippingSimulationsFromJanis: la primera falla y la segunda (1er reintento, unos 2 segundos después) responde bien. El sistema continúa según el CA2: la dirección se setea y el navbar muestra {DIRECCION_DESPACHO_001} con su ventana y chip. No se muestra el toast de error.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-039",
   "name": "Verificar que si el primer reintento a Janis responde bien la dirección se setea sin toast de error [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}. Falta cargar ese dato (lo carga el equipo de data / herramientas).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro está vacío\n- {HERRAMIENTA_PROXY_APP} configurado para que solo la primera request {JANIS_API_ENDPOINT} falle por timeout o error HTTP",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.\n7. El usuario revisa en {HERRAMIENTA_PROXY_APP} las requests GetShippingSimulationsFromJanis y sus tiempos.\n8. El usuario revisa el Store Locator del navbar.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {JANIS_API_ENDPOINT}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se registran 3 requests GetShippingSimulationsFromJanis con unos 2 segundos entre cada una: las dos primeras fallan y la tercera (2do reintento) responde bien. El sistema continúa según el CA2: la dirección se setea y el navbar muestra {DIRECCION_DESPACHO_001} con su ventana y chip. No se muestra el toast de error.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-040",
   "name": "Verificar que si el segundo reintento a Janis responde bien la dirección se setea sin toast de error [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}. Falta cargar ese dato (lo carga el equipo de data / herramientas).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro está vacío\n- {HERRAMIENTA_PROXY_APP} configurado para que las dos primeras requests {JANIS_API_ENDPOINT} fallen por timeout o error HTTP",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.\n7. El usuario revisa en {HERRAMIENTA_PROXY_APP} las requests GetShippingSimulationsFromJanis y sus tiempos.\n8. El usuario revisa el Store Locator del navbar.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {JANIS_API_ENDPOINT}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "Se muestra el toast \"No pudimos verificar tu dirección de entrega. Intenta nuevamente o selecciona una dirección\" sin detalles técnicos. En {LOG_TOOL} queda un registro del error definitivo de GetShippingSimulationsFromJanis (servicio, tipo de error o timeout y hora), que no es visible para el usuario.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-041",
   "name": "Verificar que el fallo definitivo de Janis queda registrado en el sistema de logging [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {HERRAMIENTA_PROXY_APP}, {JANIS_API_ENDPOINT}, {LOG_TOOL}. Falta cargar ese dato (lo carga el equipo de data / herramientas).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro está vacío\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {JANIS_API_ENDPOINT} (todos los intentos)\n- Acceso de consulta a {LOG_TOOL}",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema solicita el código OTP (B2C-125); el usuario lo ingresa desde su correo y continúa.\n7. El sistema muestra el toast de error.\n8. El usuario anota la hora del error.\n9. El usuario busca en {LOG_TOOL} los registros de GetShippingSimulationsFromJanis en esa hora.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {JANIS_API_ENDPOINT}\n- {LOG_TOOL}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "La dirección queda seteada y el navbar muestra la calle con \"S/N\" en lugar de la numeración, la próxima ventana horaria disponible y el chip de precio.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-042",
   "name": "Verificar que una dirección sin numeración se setea y el navbar la muestra con S/N, ventana y chip [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): Esperado: el navbar muestra la calle con «S/N» en lugar de la numeración. Obtenido: tras ingresar la dirección manual {DIRECCION_SIN_NUMERO} sin numeración y validar el OTP, el navbar muestra «Las Condes, Desde: Hoy 03/11, 18:00 hrs., $2.990», sin «S/N». Bug: B2C-1441.",
   "observed": "Android (dispositivo por ADB, v1.0.1): Esperado: el navbar muestra la calle con «S/N» en lugar de la numeración. Obtenido: tras ingresar la dirección manual {DIRECCION_SIN_NUMERO} sin numeración y validar el OTP, el navbar muestra «Las Condes, Desde: Hoy 03/11, 18:00 hrs., $2.990», sin «S/N». Bug: B2C-1441.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_NUMERO} (Región, Comuna y Calle, sin numeración) tiene cobertura y SLAs",
   "screenshots": [
    {
     "caption": "Android · Paso 1 — formulario sin numeracion",
     "file": "TC-B2C144-APP-042-android-p01-formulario-sin-numeracion.png"
    },
    {
     "caption": "Android · Paso 2 — navbar sin numeracion",
     "file": "TC-B2C144-APP-042-android-p02-navbar-sin-numeracion.png"
    }
   ],
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\".\n7. El usuario completa Región, Comuna y Dirección con {DIRECCION_SIN_NUMERO}, deja Numeración vacío y toca \"Continuar con detalle de la dirección\".\n8. El usuario confirma la dirección (B2C-99) y valida el código OTP (B2C-125).\n9. El usuario revisa el Store Locator del navbar.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_NUMERO}"
  },
  {
   "device": "dispositivo por ADB",
   "executed_at": "2026-11-03",
   "expected": "La dirección queda seteada con el departamento {DEPTO_001} y el navbar muestra la dirección según el formato definido en Figma, la próxima ventana horaria disponible y el chip de precio.",
   "form_factor": "app",
   "id": "TC-B2C144-APP-043",
   "name": "Verificar que una dirección con departamento se setea y el navbar la muestra con su ventana y chip [App] [Logueado]",
   "observation": "Android (dispositivo por ADB, v1.0.1): el TC declara token(s) sin valor en el Excel de data: {DEPTO_001}, {DIRECCION_CON_DEPTO}. Falta cargar ese dato (lo carga el equipo de data / herramientas).",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {DIRECCION_CON_DEPTO} tiene cobertura y SLAs",
   "spec": "tests-app/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD}.\n2. El sistema carga el Home de la App.\n3. El usuario toca el Store Locator del navbar.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_CON_DEPTO}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. En el detalle de la dirección, el usuario completa el departamento con {DEPTO_001} y confirma la dirección (B2C-99).\n7. El usuario valida el código OTP (B2C-125).\n8. El usuario revisa el Store Locator del navbar.",
   "test_data": "- {APP_BUILD}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_CON_DEPTO}\n- {DEPTO_001}"
  }
 ]
}
-->
