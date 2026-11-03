# B2C-144 (web) - Header de entrega - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-144 |
| Última actualización | 2026-11-02 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-144 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 63 |
| Aprobado | 20 |
| Bloqueado | 7 |
| **Total** | **90** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-02 | 90 | TC-B2C144-D-001, TC-B2C144-D-002, TC-B2C144-D-003, TC-B2C144-D-004, TC-B2C144-D-005, TC-B2C144-D-006, TC-B2C144-D-007, TC-B2C144-D-008, TC-B2C144-D-009, TC-B2C144-D-010, TC-B2C144-D-011, TC-B2C144-D-012, TC-B2C144-D-013, TC-B2C144-D-014, TC-B2C144-D-015, TC-B2C144-D-016, TC-B2C144-D-017, TC-B2C144-D-018, TC-B2C144-D-019, TC-B2C144-D-020, TC-B2C144-D-021, TC-B2C144-D-022, TC-B2C144-D-023, TC-B2C144-D-024, TC-B2C144-D-025, TC-B2C144-D-026, TC-B2C144-D-027, TC-B2C144-D-028, TC-B2C144-D-029, TC-B2C144-D-030, TC-B2C144-D-031, TC-B2C144-D-032, TC-B2C144-D-033, TC-B2C144-D-034, TC-B2C144-D-035, TC-B2C144-D-036, TC-B2C144-D-037, TC-B2C144-D-038, TC-B2C144-D-039, TC-B2C144-D-040, TC-B2C144-D-041, TC-B2C144-D-042, TC-B2C144-D-043, TC-B2C144-D-044, TC-B2C144-D-045, TC-B2C144-M-001, TC-B2C144-M-002, TC-B2C144-M-003, TC-B2C144-M-004, TC-B2C144-M-005, TC-B2C144-M-006, TC-B2C144-M-007, TC-B2C144-M-008, TC-B2C144-M-009, TC-B2C144-M-010, TC-B2C144-M-011, TC-B2C144-M-012, TC-B2C144-M-013, TC-B2C144-M-014, TC-B2C144-M-015, TC-B2C144-M-016, TC-B2C144-M-017, TC-B2C144-M-018, TC-B2C144-M-019, TC-B2C144-M-020, TC-B2C144-M-021, TC-B2C144-M-022, TC-B2C144-M-023, TC-B2C144-M-024, TC-B2C144-M-025, TC-B2C144-M-026, TC-B2C144-M-027, TC-B2C144-M-028, TC-B2C144-M-029, TC-B2C144-M-030, TC-B2C144-M-031, TC-B2C144-M-032, TC-B2C144-M-033, TC-B2C144-M-034, TC-B2C144-M-035, TC-B2C144-M-036, TC-B2C144-M-037, TC-B2C144-M-038, TC-B2C144-M-039, TC-B2C144-M-040, TC-B2C144-M-041, TC-B2C144-M-042, TC-B2C144-M-043, TC-B2C144-M-044, TC-B2C144-M-045 |

## Detalle por caso de prueba

### TC-B2C144-D-001 - Verificar que al setear una dirección con cobertura el header muestra dirección, ventana y chip [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro está vacío

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario revisa el Store Locator del header.

**Resultado esperado**

El modal se cierra y el header muestra {DIRECCION_DESPACHO_001}, la próxima ventana horaria disponible y el chip de precio, sin recargar la página.

**Evidencia**

![Paso 2 — home con elige una forma de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-001-p02-home-con-elige-una-forma-de-entrega.png>)

![Paso 4 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-001-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — header con direccion ventana y chip](<B2C-144 WEB Evidencias/TC-B2C144-D-001-p06-header-con-direccion-ventana-y-chip.png>)

---

### TC-B2C144-D-002 - Verificar que la dirección de un invitado persiste al navegar y recargar en la misma sesión [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección {DIRECCION_DESPACHO_001} está seteada como invitado

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {DIRECCION_DESPACHO_001} = Casa

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.
3. El usuario recarga la página.
4. El usuario navega a una PLP.

**Resultado esperado**

La dirección {DIRECCION_DESPACHO_001} y su ventana se mantienen en el header tras recargar y navegar.

**Evidencia**

![Paso 2 — header con la direccion seteada](<B2C-144 WEB Evidencias/TC-B2C144-D-002-p02-header-con-la-direccion-seteada.png>)

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-002-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 3 — tras recargar](<B2C-144 WEB Evidencias/TC-B2C144-D-002-p03-tras-recargar.png>)

![Paso 4 — plp con la direccion y su ventana](<B2C-144 WEB Evidencias/TC-B2C144-D-002-p04-plp-con-la-direccion-y-su-ventana.png>)

---

### TC-B2C144-D-003 - Verificar que la dirección de un logueado persiste entre sesiones [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección {DIRECCION_DESPACHO_001} fue seteada con esta cuenta en una sesión anterior

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario cierra sesión.
2. El usuario inicia sesión nuevamente con la misma cuenta.
3. El usuario ingresa a {BASE_URL}.
4. El usuario revisa el Store Locator del header.

**Resultado esperado**

El header muestra {DIRECCION_DESPACHO_001} con su ventana vigente tras volver a iniciar sesión.

**Evidencia**

![Paso 1 — sesion iniciada con la direccion seteada](<B2C-144 WEB Evidencias/TC-B2C144-D-003-p01-sesion-iniciada-con-la-direccion-seteada.png>)

![Paso 2 — sesion cerrada](<B2C-144 WEB Evidencias/TC-B2C144-D-003-p02-sesion-cerrada.png>)

![Paso 4 — header tras volver a iniciar sesion](<B2C-144 WEB Evidencias/TC-B2C144-D-003-p04-header-tras-volver-a-iniciar-sesion.png>)

---

### TC-B2C144-D-004 - Verificar que con Express con costo y Programado gratis el header muestra la ventana Programada [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Janis retorna para {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}: Express con costo y Programado gratis

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario revisa la ventana mostrada en el header.

**Resultado esperado**

El header muestra la ventana Programada.

**Observación**

Falta data: {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción de despacho (ventana Programada con costo $2990); no ofrece Express. Tampoco hay ventana Programada gratis. Header: «Categorías Ingresa aquí 0 Calle Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-004-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — header tras confirmar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-D-004-p06-header-tras-confirmar-la-direccion.png>)

---

### TC-B2C144-D-005 - Verificar que con Express y Programado con costo el header muestra la ventana Express [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Janis retorna para {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}: Express y Programado con costo

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario revisa la ventana mostrada en el header.

**Resultado esperado**

El header muestra la ventana Express.

**Observación**

Falta data: {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción de despacho (ventana Programada con costo $2990); no ofrece Express. No hay ventana Express. Header: «Categorías Ingresa aquí 0 Calle Uno 23 Desde: Ma Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-005-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — header tras confirmar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-D-005-p06-header-tras-confirmar-la-direccion.png>)

---

### TC-B2C144-D-006 - Verificar que con Express y Programado gratis el header muestra la ventana Express [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Janis retorna para {DIRECCION_EXPRESS_Y_PROG_GRATIS}: Express y Programado gratis

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_EXPRESS_Y_PROG_GRATIS} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_GRATIS}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario revisa la ventana mostrada en el header.

**Resultado esperado**

El header muestra la ventana Express.

**Observación**

Falta data: {DIRECCION_EXPRESS_Y_PROG_GRATIS} (San Isidro 41, Santiago): la consulta a Janis devuelve una sola opción de despacho (ventana Programada con costo $2990); no ofrece Express. No hay ventana Express ni Programada gratis. Header: «Categorías Ingresa aquí 0 San I Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-006-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — header tras confirmar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-D-006-p06-header-tras-confirmar-la-direccion.png>)

---

### TC-B2C144-D-007 - Verificar que con solo ventanas Programadas el header muestra la próxima ventana Programada [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Janis retorna para {DIRECCION_SIN_EXPRESS}: solo ventanas Programadas

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_SIN_EXPRESS} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_EXPRESS}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario revisa la ventana mostrada en el header.

**Resultado esperado**

El header muestra la próxima ventana Programada.

**Observación**

Falta data: {DIRECCION_SIN_EXPRESS} (Pasaje Diez 359, Penaflor) no tiene cobertura en el ambiente (modal «Aún no llegamos a esta dirección», deliveryStatus=null); la precondición «solo ventanas Programadas» no se cumple. Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-007-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — resultado tras confirmar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-D-007-p06-resultado-tras-confirmar-la-direccion.png>)

---

### TC-B2C144-D-008 - Verificar que al navegar entre páginas el header mantiene la ventana y el chip vigentes [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección {DIRECCION_DESPACHO_001} está seteada

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.
3. El usuario navega a una PLP y luego a la PDP de {SKU_VALID_001}.

**Resultado esperado**

En cada página el header muestra la próxima ventana vigente y el chip de costo o gratuidad correspondiente.

**Evidencia**

![Paso 2 — header en el home](<B2C-144 WEB Evidencias/TC-B2C144-D-008-p02-header-en-el-home.png>)

![Paso 3 — header en la plp](<B2C-144 WEB Evidencias/TC-B2C144-D-008-p03-header-en-la-plp.png>)

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-008-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 4 — header en la pdp](<B2C-144 WEB Evidencias/TC-B2C144-D-008-p04-header-en-la-pdp.png>)

---

### TC-B2C144-D-009 - Verificar que al cambiar la dirección el header se actualiza con la ventana y el costo nuevos [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario revisa el header.

**Resultado esperado**

El header muestra {DIRECCION_OTRA_TIENDA} con su próxima ventana y su chip de costo o gratuidad.

**Evidencia**

![Paso 2 — header con la direccion activa](<B2C-144 WEB Evidencias/TC-B2C144-D-009-p02-header-con-la-direccion-activa.png>)

![Paso 3 — modal abierto con la direccion activa](<B2C-144 WEB Evidencias/TC-B2C144-D-009-p03-modal-abierto-con-la-direccion-activa.png>)

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-009-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — header con la direccion nueva su ventana y su costo](<B2C-144 WEB Evidencias/TC-B2C144-D-009-p06-header-con-la-direccion-nueva-su-ventana-y-su-costo.png>)

---

### TC-B2C144-D-010 - Verificar que con retiro en tienda el header muestra la tienda, la ventana y el chip Gratis [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Retiro en tienda configurado con {TIENDA_RETIRO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {TIENDA_RETIRO_001} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.

**Resultado esperado**

El header muestra el nombre de {TIENDA_RETIRO_001}, la próxima ventana de retiro y el chip "Gratis" en verde sin ícono.

**Evidencia**

![Paso 3 — pestana retiro en tienda](<B2C-144 WEB Evidencias/TC-B2C144-D-010-p03-pestana-retiro-en-tienda.png>)

![Paso 5 — header con la tienda de retiro](<B2C-144 WEB Evidencias/TC-B2C144-D-010-p05-header-con-la-tienda-de-retiro.png>)

---

### TC-B2C144-D-011 - Verificar que un cliente Club bajo el umbral ve el costo de despacho en el header [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}
- Despacho a {DIRECCION_DESPACHO_001} con ventana Programada
- El carro contiene {SKU_VALID_001} y el total es menor a {UMBRAL_DESPACHO_GRATIS_CLUB}
- Sin promociones de despacho gratis activas

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD
- {COMPRADOR_CLUB_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.

**Resultado esperado**

El chip del header muestra el costo de despacho en pesos (ej. "$3.990") en amarillo.

**Evidencia**

![Paso 2 — header con el costo de despacho](<B2C-144 WEB Evidencias/TC-B2C144-D-011-p02-header-con-el-costo-de-despacho.png>)

---

### TC-B2C144-D-014 - Verificar que un cliente con membresía ve el chip Gratis con su ícono en el header [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_USER}
- Despacho a {DIRECCION_DESPACHO_001}
- La cuenta tiene membresía Unimarc activa

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.

**Resultado esperado**

El chip muestra "Gratis" en verde con ícono circular, visualmente distinto al "Gratis" por umbral de monto.

**Observación**

Falta data: {COMPRADOR_MEMBRESIA_USER} resuelve a la cuenta daunuruco+noaddress@avatar-global.com, que no tiene membresía Unimarc (es la cuenta sin membresía / sin direcciones). Lectura en la sesión de esa cuenta: el header de la cuenta no muestra «Ver mi suscripción» (si Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 1 — home del invitado sin sesion no se inicia sesion con una cue](<B2C-144 WEB Evidencias/TC-B2C144-D-014-p01-home-del-invitado-sin-sesion-no-se-inicia-sesion-con-una-cue.png>)

---

### TC-B2C144-D-015 - Verificar que con Express con costo el header muestra el rayo y el precio Express [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sin promoción de envío gratis que incluya Express

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario revisa el chip del header.

**Resultado esperado**

El chip muestra ⚡ con el precio Express (ej. "$5.990") en naranja/rojo.

**Observación**

Falta data: {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción (Programada con costo $2990); no hay ventana Express, por lo que no existe el chip ⚡ ni el caso Express. Header: «Categorías Ingresa aquí 0 Calle Uno Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-015-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — header tras confirmar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-D-015-p06-header-tras-confirmar-la-direccion.png>)

---

### TC-B2C144-D-016 - Verificar que con promoción de envío gratis que incluye Express el chip muestra Gratis [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} con ventana Express seleccionada
- Promoción de envío gratis que incluye Express vigente para la cuenta

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.

**Resultado esperado**

El chip muestra "🟢 Gratis" con ícono circular (mismo chip que membresía).

**Observación**

Falta data: {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción (Programada con costo $2990); no hay ventana Express, por lo que no existe el chip ⚡ ni el caso Express. Header: «Categorías Ingresa aquí 0 Calle Uno Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-016-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — header tras confirmar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-D-016-p06-header-tras-confirmar-la-direccion.png>)

---

### TC-B2C144-D-017 - Verificar que el precio Express no baja a cero al superar el umbral de monto [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}
- Dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} con ventana Express
- El total del carro supera {UMBRAL_DESPACHO_GRATIS_CLUB}
- Sin promoción de envío gratis que incluya Express

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD
- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD
- {COMPRADOR_CLUB_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.

**Resultado esperado**

El chip mantiene ⚡ con el precio Express aunque el carro supere el umbral de despacho gratis.

**Observación**

Falta data: {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción (Programada con costo $2990); no hay ventana Express, por lo que no existe el chip ⚡ ni el caso Express. Header: «Categorías Ingresa aquí 0 Calle Uno Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-017-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — header tras confirmar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-D-017-p06-header-tras-confirmar-la-direccion.png>)

---

### TC-B2C144-D-019 - Verificar que si al iniciar sesión ya no hay ventanas el header pasa a sin horarios [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección persistida en el perfil es {DIRECCION_SIN_SLA}, que tenía SLAs en la sesión anterior

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_SIN_SLA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario inicia sesión.
2. El usuario revisa el header.

**Resultado esperado**

El header muestra la dirección con el aviso de sin horarios disponibles.

**Observación**

Falta data: {DIRECCION_SIN_SLA} (Av Libertador Gral Bernardo O'Higgins 1072, Maipú) sí tiene horarios en el ambiente: la consulta a Janis responde available/covered con ventana 2026-11-03T12:00:00.000Z y el header muestra «Categorías Ingresa aquí 0 Avenida Libertador … Desde: Mar 03/11, 09:00 hrs. $2.990 Oferta Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-019-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 5 — resultado de consultar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-D-019-p05-resultado-de-consultar-la-direccion.png>)

![Paso 6 — header](<B2C-144 WEB Evidencias/TC-B2C144-D-019-p06-header.png>)

---

### TC-B2C144-D-021 - Verificar que durante la navegación la ventana del header se re-verifica periódicamente [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección {DIRECCION_DESPACHO_001} está seteada
- La ventana mostrada vence durante la navegación

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {TTL_REVERIFICACION_MIN} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.
3. El usuario navega entre páginas durante más de {TTL_REVERIFICACION_MIN} minutos.

**Resultado esperado**

Tras el TTL, el header se actualiza silenciosamente con la próxima ventana vigente, sin loader ni interrupción.

**Observación**

Falta data: No se observó re-verificación tras 5 min de navegación y la ventana mostrada (Categorías Ingresa aquí 0 Calle Uno 23 Desde: Mar 03/11, 09:00 hrs. $2.990 Ofertas Marketplace Locales y horarios Suscríbete a) no venció durante la navegación (precondición «la vent Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 2 — header al empezar a navegar](<B2C-144 WEB Evidencias/TC-B2C144-D-021-p02-header-al-empezar-a-navegar.png>)

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-021-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 4 — header tras 5 min de navegacion](<B2C-144 WEB Evidencias/TC-B2C144-D-021-p04-header-tras-5-min-de-navegacion.png>)

---

### TC-B2C144-D-022 - Verificar que si la re-verificación periódica falla el header mantiene su estado [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- La dirección {DIRECCION_DESPACHO_001} está seteada
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {JANIS_API_ENDPOINT} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {TTL_REVERIFICACION_MIN} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.
3. El usuario navega entre páginas durante más de {TTL_REVERIFICACION_MIN} minutos.

**Resultado esperado**

El header mantiene la dirección, la ventana y el chip sin cambios ni mensajes de error.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-023 - Verificar que si Janis no responde tras 2 reintentos se muestra el toast de verificación [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking) (timeout en todos los intentos)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {JANIS_API_ENDPOINT} = TBD
- {DIRECCION_DESPACHO_001} = Casa

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".

**Resultado esperado**

Tras 2 reintentos fallidos se muestra el toast "No pudimos verificar tu dirección de entrega. Intenta nuevamente o selecciona una dirección".

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-024 - Verificar que un invitado sin dirección que inicia sesión carga la última dirección del perfil [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado sin dirección seteada
- La última dirección usada de la cuenta {USER_AUTH_001} es {DIRECCION_DESPACHO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {CONTENIDO_SEGMENTO_SIN_SLA} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario inicia sesión con la cuenta {USER_AUTH_001}.
3. El usuario revisa el header.

**Resultado esperado**

El header muestra {DIRECCION_DESPACHO_001} con su próxima ventana y chip.

**Observación**

Falta data: token(s) en TBD en el Excel de data {CONTENIDO_SEGMENTO_SIN_SLA}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-025 - Verificar que al iniciar sesión en una cuenta sin direcciones se ve Elige una forma de entrega [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado sin dirección seteada
- La cuenta {SIN_DIRECCION_USER} no tiene direcciones guardadas

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SIN_DIRECCION_USER} = 10.101.010-4

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario inicia sesión con la cuenta {SIN_DIRECCION_USER}.
3. El usuario revisa el header.

**Resultado esperado**

El Store Locator permanece vacío y muestra "Elige una forma de entrega" (B2C-138). Al revisar las solicitudes de red o los logs de integración, no se registra ninguna llamada a GetShippingSimulationsFromJanis.

**Observación**

El Store Locator permanece en «Elige una forma de entrega» tras iniciar sesión con la cuenta sin direcciones. No hubo consulta de simulación de despacho: las únicas llamadas a smu-delivery fueron GET locations y GET address-catalog (la comprobación automática las contó por error al ver «revalidate» en el cuerpo de locations).

**Evidencia**

![Paso 1 — home del invitado](<B2C-144 WEB Evidencias/TC-B2C144-D-025-p01-home-del-invitado.png>)

![Paso 3 — header tras iniciar sesion](<B2C-144 WEB Evidencias/TC-B2C144-D-025-p03-header-tras-iniciar-sesion.png>)

---

### TC-B2C144-M-001 - Verificar que al setear una dirección con cobertura el header muestra dirección, ventana y chip [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro está vacío

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa el Store Locator del header.

**Resultado esperado**

El modal se cierra y el header muestra {DIRECCION_DESPACHO_001}, la próxima ventana horaria disponible y el chip de precio, sin recargar la página.

**Evidencia**

![Paso 2 — home con elige una forma de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-001-p02-home-con-elige-una-forma-de-entrega.png>)

![Paso 4 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-001-p04-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — header con direccion ventana y chip](<B2C-144 WEB Evidencias/TC-B2C144-M-001-p06-header-con-direccion-ventana-y-chip.png>)

---

### TC-B2C144-M-002 - Verificar que la dirección de un invitado persiste al navegar y recargar en la misma sesión [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La dirección {DIRECCION_DESPACHO_001} está seteada como invitado

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {DIRECCION_DESPACHO_001} = Casa

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.
3. El usuario recarga la página.
4. El usuario navega a una PLP.

**Resultado esperado**

La dirección {DIRECCION_DESPACHO_001} y su ventana se mantienen en el header tras recargar y navegar.

**Evidencia**

![Paso 2 — header con la direccion seteada](<B2C-144 WEB Evidencias/TC-B2C144-M-002-p02-header-con-la-direccion-seteada.png>)

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-002-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 3 — tras recargar](<B2C-144 WEB Evidencias/TC-B2C144-M-002-p03-tras-recargar.png>)

![Paso 4 — plp con la direccion y su ventana](<B2C-144 WEB Evidencias/TC-B2C144-M-002-p04-plp-con-la-direccion-y-su-ventana.png>)

---

### TC-B2C144-M-004 - Verificar que con Express con costo y Programado gratis el header muestra la ventana Programada [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Janis retorna para {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}: Express con costo y Programado gratis

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa la ventana mostrada en el header.

**Resultado esperado**

El header muestra la ventana Programada.

**Observación**

Falta data: {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción de despacho (ventana Programada con costo $2990); no ofrece Express. Tampoco hay ventana Programada gratis. Header: «Calle Uno 23 Desde: Mar 03/11, 0 Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-004-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — header tras confirmar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-M-004-p06-header-tras-confirmar-la-direccion.png>)

---

### TC-B2C144-M-005 - Verificar que con Express y Programado con costo el header muestra la ventana Express [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Janis retorna para {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}: Express y Programado con costo

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa la ventana mostrada en el header.

**Resultado esperado**

El header muestra la ventana Express.

**Observación**

Falta data: {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción de despacho (ventana Programada con costo $2990); no ofrece Express. No hay ventana Express. Header: «Calle Uno 23 Desde: Mar 03/11, 09:00 hrs. $2.990 Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-005-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — header tras confirmar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-M-005-p06-header-tras-confirmar-la-direccion.png>)

---

### TC-B2C144-M-006 - Verificar que con Express y Programado gratis el header muestra la ventana Express [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Janis retorna para {DIRECCION_EXPRESS_Y_PROG_GRATIS}: Express y Programado gratis

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_EXPRESS_Y_PROG_GRATIS} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_GRATIS}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa la ventana mostrada en el header.

**Resultado esperado**

El header muestra la ventana Express.

**Observación**

Falta data: {DIRECCION_EXPRESS_Y_PROG_GRATIS} (San Isidro 41, Santiago): la consulta a Janis devuelve una sola opción de despacho (ventana Programada con costo $2990); no ofrece Express. No hay ventana Express ni Programada gratis. Header: «San Isidro 41 Desde: Mar 03/11, Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-006-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — header tras confirmar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-M-006-p06-header-tras-confirmar-la-direccion.png>)

---

### TC-B2C144-M-007 - Verificar que con solo ventanas Programadas el header muestra la próxima ventana Programada [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Janis retorna para {DIRECCION_SIN_EXPRESS}: solo ventanas Programadas

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_SIN_EXPRESS} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_EXPRESS}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa la ventana mostrada en el header.

**Resultado esperado**

El header muestra la próxima ventana Programada.

**Observación**

Falta data: {DIRECCION_SIN_EXPRESS} (Pasaje Diez 359, Penaflor) no tiene cobertura en el ambiente (modal «Aún no llegamos a esta dirección», deliveryStatus=null); la precondición «solo ventanas Programadas» no se cumple. Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-007-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — resultado tras confirmar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-M-007-p06-resultado-tras-confirmar-la-direccion.png>)

---

### TC-B2C144-M-008 - Verificar que al navegar entre páginas el header mantiene la ventana y el chip vigentes [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La dirección {DIRECCION_DESPACHO_001} está seteada

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.
3. El usuario navega a una PLP y luego a la PDP de {SKU_VALID_001}.

**Resultado esperado**

En cada página el header muestra la próxima ventana vigente y el chip de costo o gratuidad correspondiente.

**Evidencia**

![Paso 2 — header en el home](<B2C-144 WEB Evidencias/TC-B2C144-M-008-p02-header-en-el-home.png>)

![Paso 3 — header en la plp](<B2C-144 WEB Evidencias/TC-B2C144-M-008-p03-header-en-la-plp.png>)

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-008-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 4 — header en la pdp](<B2C-144 WEB Evidencias/TC-B2C144-M-008-p04-header-en-la-pdp.png>)

---

### TC-B2C144-M-009 - Verificar que al cambiar la dirección el header se actualiza con la ventana y el costo nuevos [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {DIRECCION_OTRA_TIENDA} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa el header.

**Resultado esperado**

El header muestra {DIRECCION_OTRA_TIENDA} con su próxima ventana y su chip de costo o gratuidad.

**Evidencia**

![Paso 2 — header con la direccion activa](<B2C-144 WEB Evidencias/TC-B2C144-M-009-p02-header-con-la-direccion-activa.png>)

![Paso 3 — modal abierto con la direccion activa](<B2C-144 WEB Evidencias/TC-B2C144-M-009-p03-modal-abierto-con-la-direccion-activa.png>)

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-009-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — header con la direccion nueva su ventana y su costo](<B2C-144 WEB Evidencias/TC-B2C144-M-009-p06-header-con-la-direccion-nueva-su-ventana-y-su-costo.png>)

---

### TC-B2C144-M-010 - Verificar que con retiro en tienda el header muestra la tienda, la ventana y el chip Gratis [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Retiro en tienda configurado con {TIENDA_RETIRO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {TIENDA_RETIRO_001} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.

**Resultado esperado**

El header muestra el nombre de {TIENDA_RETIRO_001}, la próxima ventana de retiro y el chip "Gratis" en verde sin ícono.

**Evidencia**

![Paso 3 — pestana retiro en tienda](<B2C-144 WEB Evidencias/TC-B2C144-M-010-p03-pestana-retiro-en-tienda.png>)

![Paso 5 — header con la tienda de retiro](<B2C-144 WEB Evidencias/TC-B2C144-M-010-p05-header-con-la-tienda-de-retiro.png>)

---

### TC-B2C144-M-011 - Verificar que un cliente Club bajo el umbral ve el costo de despacho en el header [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}
- Despacho a {DIRECCION_DESPACHO_001} con ventana Programada
- El carro contiene {SKU_VALID_001} y el total es menor a {UMBRAL_DESPACHO_GRATIS_CLUB}
- Sin promociones de despacho gratis activas

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD
- {COMPRADOR_CLUB_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.

**Resultado esperado**

El chip del header muestra el costo de despacho en pesos (ej. "$3.990") en amarillo.

**Evidencia**

![Paso 2 — header con el costo de despacho](<B2C-144 WEB Evidencias/TC-B2C144-M-011-p02-header-con-el-costo-de-despacho.png>)

---

### TC-B2C144-M-014 - Verificar que un cliente con membresía ve el chip Gratis con su ícono en el header [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_USER}
- Despacho a {DIRECCION_DESPACHO_001}
- La cuenta tiene membresía Unimarc activa

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.

**Resultado esperado**

El chip muestra "Gratis" en verde con ícono circular, visualmente distinto al "Gratis" por umbral de monto.

**Observación**

Falta data: {COMPRADOR_MEMBRESIA_USER} resuelve a la cuenta daunuruco+noaddress@avatar-global.com, que no tiene membresía Unimarc (es la cuenta sin membresía / sin direcciones). Lectura en la sesión de esa cuenta: el header de la cuenta no muestra «Ver mi suscripción» (si Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 1 — home del invitado sin sesion no se inicia sesion con una cue](<B2C-144 WEB Evidencias/TC-B2C144-M-014-p01-home-del-invitado-sin-sesion-no-se-inicia-sesion-con-una-cue.png>)

---

### TC-B2C144-M-015 - Verificar que con Express con costo el header muestra el rayo y el precio Express [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sin promoción de envío gratis que incluya Express

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa el chip del header.

**Resultado esperado**

El chip muestra ⚡ con el precio Express (ej. "$5.990") en naranja/rojo.

**Observación**

Falta data: {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción (Programada con costo $2990); no hay ventana Express, por lo que no existe el chip ⚡ ni el caso Express. Header: «Calle Uno 23 Desde: Mar 03/11, 09:00 Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-015-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — header tras confirmar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-M-015-p06-header-tras-confirmar-la-direccion.png>)

---

### TC-B2C144-M-016 - Verificar que con promoción de envío gratis que incluye Express el chip muestra Gratis [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} con ventana Express seleccionada
- Promoción de envío gratis que incluye Express vigente para la cuenta

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.

**Resultado esperado**

El chip muestra "🟢 Gratis" con ícono circular (mismo chip que membresía).

**Observación**

Falta data: {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción (Programada con costo $2990); no hay ventana Express, por lo que no existe el chip ⚡ ni el caso Express. Header: «Calle Uno 23 Desde: Mar 03/11, 09:00 Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-016-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — header tras confirmar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-M-016-p06-header-tras-confirmar-la-direccion.png>)

---

### TC-B2C144-M-017 - Verificar que el precio Express no baja a cero al superar el umbral de monto [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}
- Dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} con ventana Express
- El total del carro supera {UMBRAL_DESPACHO_GRATIS_CLUB}
- Sin promoción de envío gratis que incluya Express

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD
- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD
- {COMPRADOR_CLUB_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.

**Resultado esperado**

El chip mantiene ⚡ con el precio Express aunque el carro supere el umbral de despacho gratis.

**Observación**

Falta data: {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción (Programada con costo $2990); no hay ventana Express, por lo que no existe el chip ⚡ ni el caso Express. Header: «Calle Uno 23 Desde: Mar 03/11, 09:00 Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-017-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — header tras confirmar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-M-017-p06-header-tras-confirmar-la-direccion.png>)

---

### TC-B2C144-M-019 - Verificar que si al iniciar sesión ya no hay ventanas el header pasa a sin horarios [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección persistida en el perfil es {DIRECCION_SIN_SLA}, que tenía SLAs en la sesión anterior

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_SIN_SLA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario inicia sesión.
2. El usuario revisa el header.

**Resultado esperado**

El header muestra la dirección con el aviso de sin horarios disponibles.

**Observación**

Falta data: {DIRECCION_SIN_SLA} (Av Libertador Gral Bernardo O'Higgins 1072, Maipú) sí tiene horarios en el ambiente: la consulta a Janis responde available/covered con ventana 2026-11-03T12:00:00.000Z y el header muestra «Avenida Libertador … Desde: Mar 03/11, 09:00 hrs. Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-019-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 5 — resultado de consultar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-M-019-p05-resultado-de-consultar-la-direccion.png>)

![Paso 6 — header](<B2C-144 WEB Evidencias/TC-B2C144-M-019-p06-header.png>)

---

### TC-B2C144-M-021 - Verificar que durante la navegación la ventana del header se re-verifica periódicamente [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La dirección {DIRECCION_DESPACHO_001} está seteada
- La ventana mostrada vence durante la navegación

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {TTL_REVERIFICACION_MIN} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.
3. El usuario navega entre páginas durante más de {TTL_REVERIFICACION_MIN} minutos.

**Resultado esperado**

Tras el TTL, el header se actualiza silenciosamente con la próxima ventana vigente, sin loader ni interrupción.

**Observación**

Falta data: No se observó re-verificación tras 5 min de navegación y la ventana mostrada (Calle Uno 23 Desde: Mar 03/11, 09:00 hrs. $2.990 0 Suscríbete a Ofertas Marketplace Locales y horarios) no venció durante la navegación (precondición «la ventana vence durante la nav Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 2 — header al empezar a navegar](<B2C-144 WEB Evidencias/TC-B2C144-M-021-p02-header-al-empezar-a-navegar.png>)

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-021-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 4 — header tras 5 min de navegacion](<B2C-144 WEB Evidencias/TC-B2C144-M-021-p04-header-tras-5-min-de-navegacion.png>)

---

### TC-B2C144-M-022 - Verificar que si la re-verificación periódica falla el header mantiene su estado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- La dirección {DIRECCION_DESPACHO_001} está seteada
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {JANIS_API_ENDPOINT} = TBD
- {DIRECCION_DESPACHO_001} = Casa
- {TTL_REVERIFICACION_MIN} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.
3. El usuario navega entre páginas durante más de {TTL_REVERIFICACION_MIN} minutos.

**Resultado esperado**

El header mantiene la dirección, la ventana y el chip sin cambios ni mensajes de error.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-M-023 - Verificar que si Janis no responde tras 2 reintentos se muestra el toast de verificación [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking) (timeout en todos los intentos)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {JANIS_API_ENDPOINT} = TBD
- {DIRECCION_DESPACHO_001} = Casa

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".

**Resultado esperado**

Tras 2 reintentos fallidos se muestra el toast "No pudimos verificar tu dirección de entrega. Intenta nuevamente o selecciona una dirección".

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-M-025 - Verificar que al iniciar sesión en una cuenta sin direcciones se ve Elige una forma de entrega [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado sin dirección seteada
- La cuenta {SIN_DIRECCION_USER} no tiene direcciones guardadas

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SIN_DIRECCION_USER} = 10.101.010-4

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario inicia sesión con la cuenta {SIN_DIRECCION_USER}.
3. El usuario revisa el header.

**Resultado esperado**

El Store Locator permanece vacío y muestra "Elige una forma de entrega" (B2C-138). Al revisar las solicitudes de red o los logs de integración, no se registra ninguna llamada a GetShippingSimulationsFromJanis.

**Observación**

El Store Locator permanece en «Elige una forma de entrega» tras iniciar sesión con la cuenta sin direcciones. No hubo consulta de simulación de despacho: las únicas llamadas a smu-delivery fueron GET locations y GET address-catalog (la comprobación automática las contó por error al ver «revalidate» en el cuerpo de locations).

**Evidencia**

![Paso 1 — home del invitado](<B2C-144 WEB Evidencias/TC-B2C144-M-025-p01-home-del-invitado.png>)

![Paso 3 — header tras iniciar sesion](<B2C-144 WEB Evidencias/TC-B2C144-M-025-p03-header-tras-iniciar-sesion.png>)

---

### TC-B2C144-D-026 - Verificar que al confirmar una dirección nueva se consulta Janis vía APIGEE y la respuesta trae cobertura, ventanas, tienda y costo [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El carro está vacío
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {JANIS_API_ENDPOINT}
- {LOG_TOOL}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario revisa en DevTools > Network la request GetShippingSimulationsFromJanis y su respuesta.
7. El usuario revisa el Store Locator del header.

**Resultado esperado**

Al confirmar, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}); la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El header muestra {DIRECCION_DESPACHO_001} con la próxima ventana de schedules y el chip según el costo recibido.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-027 - Verificar que al seleccionar una dirección guardada se consulta Janis con esa dirección [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La libreta de {USER_AUTH_001} tiene {DIRECCION_DESPACHO_001} (activa) y {DIRECCION_DESPACHO_002}
- El carro está vacío
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_DESPACHO_002}
- {JANIS_API_ENDPOINT}
- {LOG_TOOL}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con las direcciones guardadas.
5. El usuario selecciona {DIRECCION_DESPACHO_002}.
6. Si el sistema solicita el código OTP (B2C-125), el usuario lo ingresa y continúa.
7. El usuario revisa en DevTools > Network la request GetShippingSimulationsFromJanis y su respuesta.

**Resultado esperado**

Al seleccionar {DIRECCION_DESPACHO_002}, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de esa dirección; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El header muestra {DIRECCION_DESPACHO_002} con su próxima ventana y su chip.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-028 - Verificar que al cargar con una dirección ya configurada se consulta Janis [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La dirección {DIRECCION_DESPACHO_001} está seteada
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {JANIS_API_ENDPOINT}
- {LOG_TOOL}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario recarga {BASE_URL}.
3. El sistema carga el Home.
4. El usuario revisa en DevTools > Network la request GetShippingSimulationsFromJanis y su respuesta.
5. El usuario revisa el Store Locator del header.

**Resultado esperado**

Durante la carga se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de {DIRECCION_DESPACHO_001}; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El header muestra {DIRECCION_DESPACHO_001} con la próxima ventana vigente.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-029 - Verificar que al cambiar la dirección desde Mis envíos se consulta Janis con la nueva dirección [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La libreta de {USER_AUTH_001} tiene {DIRECCION_DESPACHO_001} (activa) y {DIRECCION_DESPACHO_002}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (cumple el mínimo de compra)
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_DESPACHO_002}
- {SKU_VALID_001}
- {UNIDADES_SOBRE_MINIMO}
- {JANIS_API_ENDPOINT}
- {LOG_TOOL}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario ingresa a {CART_URL}.
4. El usuario hace clic en "Ir a pagar".
5. El sistema muestra Mis envíos con {DIRECCION_DESPACHO_001}.
6. El usuario cambia la dirección de despacho a {DIRECCION_DESPACHO_002} desde Mis envíos.
7. Si el sistema solicita el código OTP (B2C-125), el usuario lo ingresa y continúa.
8. El usuario revisa en DevTools > Network la request GetShippingSimulationsFromJanis y su respuesta.

**Resultado esperado**

Al cambiar la dirección en Mis envíos, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de {DIRECCION_DESPACHO_002}; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. Mis envíos muestra las ventanas de la nueva dirección y el header se actualiza con {DIRECCION_DESPACHO_002}.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-030 - Verificar que si Janis responde sin cobertura la dirección no se setea y se deriva al flujo sin cobertura [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_COBERTURA}
- {JANIS_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario revisa en DevTools > Network la respuesta de GetShippingSimulationsFromJanis.
7. El usuario revisa el modal que se muestra y el Store Locator del header, sin tomar ninguna opción.

**Resultado esperado**

La respuesta trae coverage = false. La dirección no se setea: el header sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip, y el sistema deriva al flujo B2C-123 (modal "Aún no llegamos"). No se muestra el modal "No se te escapen" ni el flujo sin horarios.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-031 - Verificar que con carro y cambio de tienda abastecedora se muestra No se te escapen y al confirmar se setea la dirección [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} x 1
- {DIRECCION_OTRA_TIENDA} es abastecida por una tienda distinta a la de {DIRECCION_DESPACHO_001}
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_OTRA_TIENDA}
- {SKU_VALID_001}
- {JANIS_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario revisa en DevTools > Network el warehouseId de la respuesta de GetShippingSimulationsFromJanis.
7. El sistema muestra el modal "No se te escapen".
8. El usuario hace clic en "Sí, continuar".
9. El usuario revisa el Store Locator del header.

**Resultado esperado**

La respuesta trae coverage = true y un warehouseId distinto al activo; antes de setear se muestra el modal "No se te escapen". Al confirmar, el sistema continúa: la dirección se setea, el nuevo warehouseId queda en la sesión y el header muestra {DIRECCION_OTRA_TIENDA} con su próxima ventana y chip.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-032 - Verificar que al cancelar No se te escapen se mantienen la dirección y la configuración anteriores [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} x 1
- {DIRECCION_OTRA_TIENDA} es abastecida por una tienda distinta a la de {DIRECCION_DESPACHO_001}

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_OTRA_TIENDA}
- {SKU_VALID_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema muestra el modal "No se te escapen".
7. El usuario hace clic en "No, gracias".
8. El usuario revisa el Store Locator del header y el carro.

**Resultado esperado**

El modal se cierra y la dirección no se setea: el header mantiene {DIRECCION_DESPACHO_001} con su ventana y chip, el carro conserva {SKU_VALID_001} x 1 con la tienda abastecedora anterior y no se continúa a la evaluación de SLAs.

**Evidencia**

![Paso 2 — direccion activa y carro con 1 unidad](<B2C-144 WEB Evidencias/TC-B2C144-D-032-p02-direccion-activa-y-carro-con-1-unidad.png>)

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-032-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 7 — aviso de cambio de tienda](<B2C-144 WEB Evidencias/TC-B2C144-D-032-p07-aviso-de-cambio-de-tienda.png>)

![Paso 9 — header y carro tras cancelar](<B2C-144 WEB Evidencias/TC-B2C144-D-032-p09-header-y-carro-tras-cancelar.png>)

---

### TC-B2C144-D-033 - Verificar que si Janis responde sin ventanas la dirección no se setea y se deriva al flujo sin horarios [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_SLA}
- {JANIS_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario revisa en DevTools > Network la respuesta de GetShippingSimulationsFromJanis.
7. El usuario revisa el modal que se muestra y el Store Locator del header, sin tomar ninguna opción.

**Resultado esperado**

La respuesta trae coverage = true y schedules vacío o nulo. La dirección no se setea: el header sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip, y el sistema deriva al flujo B2C-127 (modal sin horarios).

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-034 - Verificar que con carro y misma tienda abastecedora la dirección se setea sin mostrar No se te escapen [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} x 1
- {DIRECCION_MISMA_TIENDA} es abastecida por la misma tienda que {DIRECCION_DESPACHO_001}
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_MISMA_TIENDA}
- {SKU_VALID_001}
- {JANIS_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_MISMA_TIENDA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario revisa en DevTools > Network el warehouseId de la respuesta de GetShippingSimulationsFromJanis.
7. El usuario revisa el Store Locator del header.

**Resultado esperado**

La respuesta trae el mismo warehouseId que el activo; no se muestra el modal "No se te escapen" y la dirección se setea directamente: el header muestra {DIRECCION_MISMA_TIENDA} con su próxima ventana y chip, y el carro no cambia.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-035 - Verificar que el contador de re-verificación se reinicia al cambiar la dirección manualmente [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El TTL de re-verificación configurado en BM es {TTL_REVERIFICACION_MIN} minutos
- El carro está vacío
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_DESPACHO_002}
- {TTL_REVERIFICACION_MIN}
- {JANIS_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario anota la hora del seteo (T0).
7. El usuario navega entre páginas y, 2 minutos antes de cumplirse {TTL_REVERIFICACION_MIN} minutos desde T0, cambia la dirección a {DIRECCION_DESPACHO_002} desde el Store Locator; anota la hora del cambio (T1).
8. El usuario sigue navegando hasta pasar T1 + {TTL_REVERIFICACION_MIN} minutos, revisando en DevTools > Network las requests GetShippingSimulationsFromJanis.

**Resultado esperado**

No se ejecuta re-verificación al cumplirse T0 + {TTL_REVERIFICACION_MIN} minutos (el contador se reinició con el cambio). La siguiente re-verificación periódica ocurre al cumplirse T1 + {TTL_REVERIFICACION_MIN} minutos, con los datos de {DIRECCION_DESPACHO_002}, sin loader ni interrupción.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-036 - Verificar que no se re-verifica si la dirección se cambió hace menos de 30 segundos [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El TTL de re-verificación configurado en BM es {TTL_REVERIFICACION_MIN} minutos
- El carro está vacío
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_DESPACHO_002}
- {TTL_REVERIFICACION_MIN}
- {JANIS_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario anota la hora del seteo (T0).
7. El usuario navega entre páginas y, 10 segundos antes de cumplirse {TTL_REVERIFICACION_MIN} minutos desde T0, cambia la dirección a {DIRECCION_DESPACHO_002}; anota la hora del cambio (T1).
8. Durante los 30 segundos siguientes a T1, el usuario navega a otra página y revisa en DevTools > Network las requests GetShippingSimulationsFromJanis.

**Resultado esperado**

Solo se registra la llamada GetShippingSimulationsFromJanis del seteo de {DIRECCION_DESPACHO_002}; en los 30 segundos siguientes a T1 no se ejecuta otra llamada de re-verificación aunque se cumpla T0 + {TTL_REVERIFICACION_MIN} minutos. El header muestra {DIRECCION_DESPACHO_002} sin cambios adicionales.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-037 - Verificar que si el primer reintento a Janis responde bien la dirección se setea sin toast de error [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El carro está vacío
- {HERRAMIENTA_PROXY_WEB} configurado para que solo la primera request {JANIS_API_ENDPOINT} falle por timeout o error HTTP

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {JANIS_API_ENDPOINT}
- {HERRAMIENTA_PROXY_WEB}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario revisa en {HERRAMIENTA_PROXY_WEB} las requests GetShippingSimulationsFromJanis y sus tiempos.
7. El usuario revisa el Store Locator del header.

**Resultado esperado**

Se registran 2 requests GetShippingSimulationsFromJanis: la primera falla y la segunda (1er reintento, unos 2 segundos después) responde bien. El sistema continúa según el CA2: la dirección se setea y el header muestra {DIRECCION_DESPACHO_001} con su ventana y chip. No se muestra el toast de error.

**Observación**

Falta data: token(s) en TBD en el Excel de data {HERRAMIENTA_PROXY_WEB}, {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-038 - Verificar que si el segundo reintento a Janis responde bien la dirección se setea sin toast de error [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El carro está vacío
- {HERRAMIENTA_PROXY_WEB} configurado para que las dos primeras requests {JANIS_API_ENDPOINT} fallen por timeout o error HTTP

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {JANIS_API_ENDPOINT}
- {HERRAMIENTA_PROXY_WEB}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El usuario revisa en {HERRAMIENTA_PROXY_WEB} las requests GetShippingSimulationsFromJanis y sus tiempos.
7. El usuario revisa el Store Locator del header.

**Resultado esperado**

Se registran 3 requests GetShippingSimulationsFromJanis con unos 2 segundos entre cada una: las dos primeras fallan y la tercera (2do reintento) responde bien. El sistema continúa según el CA2: la dirección se setea y el header muestra {DIRECCION_DESPACHO_001} con su ventana y chip. No se muestra el toast de error.

**Observación**

Falta data: token(s) en TBD en el Excel de data {HERRAMIENTA_PROXY_WEB}, {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-039 - Verificar que el fallo definitivo de Janis queda registrado en el sistema de logging [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- El carro está vacío
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)
- Acceso de consulta a {LOG_TOOL}

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {JANIS_API_ENDPOINT}
- {LOG_TOOL}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema muestra el toast de error.
7. El usuario anota la hora del error.
8. El usuario busca en {LOG_TOOL} los registros de GetShippingSimulationsFromJanis en esa hora.

**Resultado esperado**

Se muestra el toast "No pudimos verificar tu dirección de entrega. Intenta nuevamente o selecciona una dirección" sin detalles técnicos. En {LOG_TOOL} queda un registro del error definitivo de GetShippingSimulationsFromJanis (servicio, tipo de error o timeout y hora), que no es visible para el usuario.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-M-026 - Verificar que al confirmar una dirección nueva se consulta Janis vía APIGEE y la respuesta trae cobertura, ventanas, tienda y costo [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El carro está vacío
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {JANIS_API_ENDPOINT}
- {LOG_TOOL}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa en DevTools > Network la request GetShippingSimulationsFromJanis y su respuesta.
7. El usuario revisa el Store Locator del header.

**Resultado esperado**

Al confirmar, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}); la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El header muestra {DIRECCION_DESPACHO_001} con la próxima ventana de schedules y el chip según el costo recibido.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-M-027 - Verificar que al seleccionar una dirección guardada se consulta Janis con esa dirección [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La libreta de {USER_AUTH_001} tiene {DIRECCION_DESPACHO_001} (activa) y {DIRECCION_DESPACHO_002}
- El carro está vacío
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_DESPACHO_002}
- {JANIS_API_ENDPOINT}
- {LOG_TOOL}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con las direcciones guardadas.
5. El usuario selecciona {DIRECCION_DESPACHO_002}.
6. Si el sistema solicita el código OTP (B2C-125), el usuario lo ingresa y continúa.
7. El usuario revisa en DevTools > Network la request GetShippingSimulationsFromJanis y su respuesta.

**Resultado esperado**

Al seleccionar {DIRECCION_DESPACHO_002}, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de esa dirección; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El header muestra {DIRECCION_DESPACHO_002} con su próxima ventana y su chip.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-M-028 - Verificar que al cargar con una dirección ya configurada se consulta Janis [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- La dirección {DIRECCION_DESPACHO_001} está seteada
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {JANIS_API_ENDPOINT}
- {LOG_TOOL}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario recarga {BASE_URL}.
3. El sistema carga el Home.
4. El usuario revisa en DevTools > Network la request GetShippingSimulationsFromJanis y su respuesta.
5. El usuario revisa el Store Locator del header.

**Resultado esperado**

Durante la carga se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de {DIRECCION_DESPACHO_001}; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El header muestra {DIRECCION_DESPACHO_001} con la próxima ventana vigente.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-M-029 - Verificar que al cambiar la dirección desde Mis envíos se consulta Janis con la nueva dirección [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La libreta de {USER_AUTH_001} tiene {DIRECCION_DESPACHO_001} (activa) y {DIRECCION_DESPACHO_002}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (cumple el mínimo de compra)
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {CART_URL}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_DESPACHO_002}
- {SKU_VALID_001}
- {UNIDADES_SOBRE_MINIMO}
- {JANIS_API_ENDPOINT}
- {LOG_TOOL}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario ingresa a {CART_URL}.
4. El usuario toca "Ir a pagar".
5. El sistema muestra Mis envíos con {DIRECCION_DESPACHO_001}.
6. El usuario cambia la dirección de despacho a {DIRECCION_DESPACHO_002} desde Mis envíos.
7. Si el sistema solicita el código OTP (B2C-125), el usuario lo ingresa y continúa.
8. El usuario revisa en DevTools > Network la request GetShippingSimulationsFromJanis y su respuesta.

**Resultado esperado**

Al cambiar la dirección en Mis envíos, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de {DIRECCION_DESPACHO_002}; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. Mis envíos muestra las ventanas de la nueva dirección y el header se actualiza con {DIRECCION_DESPACHO_002}.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-M-030 - Verificar que si Janis responde sin cobertura la dirección no se setea y se deriva al flujo sin cobertura [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_COBERTURA}
- {JANIS_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa en DevTools > Network la respuesta de GetShippingSimulationsFromJanis.
7. El usuario revisa el modal que se muestra y el Store Locator del header, sin tomar ninguna opción.

**Resultado esperado**

La respuesta trae coverage = false. La dirección no se setea: el header sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip, y el sistema deriva al flujo B2C-123 (modal "Aún no llegamos"). No se muestra el modal "No se te escapen" ni el flujo sin horarios.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-M-031 - Verificar que con carro y cambio de tienda abastecedora se muestra No se te escapen y al confirmar se setea la dirección [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} x 1
- {DIRECCION_OTRA_TIENDA} es abastecida por una tienda distinta a la de {DIRECCION_DESPACHO_001}
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_OTRA_TIENDA}
- {SKU_VALID_001}
- {JANIS_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa en DevTools > Network el warehouseId de la respuesta de GetShippingSimulationsFromJanis.
7. El sistema muestra el modal "No se te escapen".
8. El usuario toca "Sí, continuar".
9. El usuario revisa el Store Locator del header.

**Resultado esperado**

La respuesta trae coverage = true y un warehouseId distinto al activo; antes de setear se muestra el modal "No se te escapen". Al confirmar, el sistema continúa: la dirección se setea, el nuevo warehouseId queda en la sesión y el header muestra {DIRECCION_OTRA_TIENDA} con su próxima ventana y chip.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-M-032 - Verificar que al cancelar No se te escapen se mantienen la dirección y la configuración anteriores [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} x 1
- {DIRECCION_OTRA_TIENDA} es abastecida por una tienda distinta a la de {DIRECCION_DESPACHO_001}

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_OTRA_TIENDA}
- {SKU_VALID_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "No se te escapen".
7. El usuario toca "No, gracias".
8. El usuario revisa el Store Locator del header y el carro.

**Resultado esperado**

El modal se cierra y la dirección no se setea: el header mantiene {DIRECCION_DESPACHO_001} con su ventana y chip, el carro conserva {SKU_VALID_001} x 1 con la tienda abastecedora anterior y no se continúa a la evaluación de SLAs.

**Evidencia**

![Paso 2 — direccion activa y carro con 1 unidad](<B2C-144 WEB Evidencias/TC-B2C144-M-032-p02-direccion-activa-y-carro-con-1-unidad.png>)

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-032-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 7 — aviso de cambio de tienda](<B2C-144 WEB Evidencias/TC-B2C144-M-032-p07-aviso-de-cambio-de-tienda.png>)

![Paso 9 — header y carro tras cancelar](<B2C-144 WEB Evidencias/TC-B2C144-M-032-p09-header-y-carro-tras-cancelar.png>)

---

### TC-B2C144-M-033 - Verificar que si Janis responde sin ventanas la dirección no se setea y se deriva al flujo sin horarios [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro está vacío
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_SLA}
- {JANIS_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa en DevTools > Network la respuesta de GetShippingSimulationsFromJanis.
7. El usuario revisa el modal que se muestra y el Store Locator del header, sin tomar ninguna opción.

**Resultado esperado**

La respuesta trae coverage = true y schedules vacío o nulo. La dirección no se setea: el header sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip, y el sistema deriva al flujo B2C-127 (modal sin horarios).

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-M-034 - Verificar que con carro y misma tienda abastecedora la dirección se setea sin mostrar No se te escapen [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- La dirección activa es {DIRECCION_DESPACHO_001}
- El carro contiene {SKU_VALID_001} x 1
- {DIRECCION_MISMA_TIENDA} es abastecida por la misma tienda que {DIRECCION_DESPACHO_001}
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_MISMA_TIENDA}
- {SKU_VALID_001}
- {JANIS_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_MISMA_TIENDA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa en DevTools > Network el warehouseId de la respuesta de GetShippingSimulationsFromJanis.
7. El usuario revisa el Store Locator del header.

**Resultado esperado**

La respuesta trae el mismo warehouseId que el activo; no se muestra el modal "No se te escapen" y la dirección se setea directamente: el header muestra {DIRECCION_MISMA_TIENDA} con su próxima ventana y chip, y el carro no cambia.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-M-035 - Verificar que el contador de re-verificación se reinicia al cambiar la dirección manualmente [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El TTL de re-verificación configurado en BM es {TTL_REVERIFICACION_MIN} minutos
- El carro está vacío
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_DESPACHO_002}
- {TTL_REVERIFICACION_MIN}
- {JANIS_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario anota la hora del seteo (T0).
7. El usuario navega entre páginas y, 2 minutos antes de cumplirse {TTL_REVERIFICACION_MIN} minutos desde T0, cambia la dirección a {DIRECCION_DESPACHO_002} desde el Store Locator; anota la hora del cambio (T1).
8. El usuario sigue navegando hasta pasar T1 + {TTL_REVERIFICACION_MIN} minutos, revisando en DevTools > Network las requests GetShippingSimulationsFromJanis.

**Resultado esperado**

No se ejecuta re-verificación al cumplirse T0 + {TTL_REVERIFICACION_MIN} minutos (el contador se reinició con el cambio). La siguiente re-verificación periódica ocurre al cumplirse T1 + {TTL_REVERIFICACION_MIN} minutos, con los datos de {DIRECCION_DESPACHO_002}, sin loader ni interrupción.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-M-036 - Verificar que no se re-verifica si la dirección se cambió hace menos de 30 segundos [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El TTL de re-verificación configurado en BM es {TTL_REVERIFICACION_MIN} minutos
- El carro está vacío
- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_DESPACHO_002}
- {TTL_REVERIFICACION_MIN}
- {JANIS_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario anota la hora del seteo (T0).
7. El usuario navega entre páginas y, 10 segundos antes de cumplirse {TTL_REVERIFICACION_MIN} minutos desde T0, cambia la dirección a {DIRECCION_DESPACHO_002}; anota la hora del cambio (T1).
8. Durante los 30 segundos siguientes a T1, el usuario navega a otra página y revisa en DevTools > Network las requests GetShippingSimulationsFromJanis.

**Resultado esperado**

Solo se registra la llamada GetShippingSimulationsFromJanis del seteo de {DIRECCION_DESPACHO_002}; en los 30 segundos siguientes a T1 no se ejecuta otra llamada de re-verificación aunque se cumpla T0 + {TTL_REVERIFICACION_MIN} minutos. El header muestra {DIRECCION_DESPACHO_002} sin cambios adicionales.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-M-037 - Verificar que si el primer reintento a Janis responde bien la dirección se setea sin toast de error [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El carro está vacío
- {HERRAMIENTA_PROXY_WEB} configurado para que solo la primera request {JANIS_API_ENDPOINT} falle por timeout o error HTTP

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {JANIS_API_ENDPOINT}
- {HERRAMIENTA_PROXY_WEB}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa en {HERRAMIENTA_PROXY_WEB} las requests GetShippingSimulationsFromJanis y sus tiempos.
7. El usuario revisa el Store Locator del header.

**Resultado esperado**

Se registran 2 requests GetShippingSimulationsFromJanis: la primera falla y la segunda (1er reintento, unos 2 segundos después) responde bien. El sistema continúa según el CA2: la dirección se setea y el header muestra {DIRECCION_DESPACHO_001} con su ventana y chip. No se muestra el toast de error.

**Observación**

Falta data: token(s) en TBD en el Excel de data {HERRAMIENTA_PROXY_WEB}, {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-M-038 - Verificar que si el segundo reintento a Janis responde bien la dirección se setea sin toast de error [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El carro está vacío
- {HERRAMIENTA_PROXY_WEB} configurado para que las dos primeras requests {JANIS_API_ENDPOINT} fallen por timeout o error HTTP

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {JANIS_API_ENDPOINT}
- {HERRAMIENTA_PROXY_WEB}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El usuario revisa en {HERRAMIENTA_PROXY_WEB} las requests GetShippingSimulationsFromJanis y sus tiempos.
7. El usuario revisa el Store Locator del header.

**Resultado esperado**

Se registran 3 requests GetShippingSimulationsFromJanis con unos 2 segundos entre cada una: las dos primeras fallan y la tercera (2do reintento) responde bien. El sistema continúa según el CA2: la dirección se setea y el header muestra {DIRECCION_DESPACHO_001} con su ventana y chip. No se muestra el toast de error.

**Observación**

Falta data: token(s) en TBD en el Excel de data {HERRAMIENTA_PROXY_WEB}, {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-M-039 - Verificar que el fallo definitivo de Janis queda registrado en el sistema de logging [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- El carro está vacío
- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)
- Acceso de consulta a {LOG_TOOL}

**Data utilizada**

- {BASE_URL}
- {DIRECCION_DESPACHO_001}
- {JANIS_API_ENDPOINT}
- {LOG_TOOL}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el toast de error.
7. El usuario anota la hora del error.
8. El usuario busca en {LOG_TOOL} los registros de GetShippingSimulationsFromJanis en esa hora.

**Resultado esperado**

Se muestra el toast "No pudimos verificar tu dirección de entrega. Intenta nuevamente o selecciona una dirección" sin detalles técnicos. En {LOG_TOOL} queda un registro del error definitivo de GetShippingSimulationsFromJanis (servicio, tipo de error o timeout y hora), que no es visible para el usuario.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-041 - Verificar que un logueado que setea una dirección sin horarios no la setea y se deriva al flujo sin horarios [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_SLA} tiene cobertura y no tiene SLAs disponibles

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_SLA}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y hace clic en "Continuar".
8. El usuario revisa el modal que se muestra y el header, sin tomar ninguna opción.

**Resultado esperado**

Se deriva al flujo B2C-127 (modal "Por ahora no hay horarios disponibles") y {DIRECCION_SIN_SLA} no se setea: el header sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip.

**Observación**

Falta data: {DIRECCION_SIN_SLA} (Av Libertador Gral Bernardo O'Higgins 1072, Maipú) sí tiene cobertura y horarios en el ambiente (Janis: available/covered, ventana 2026-11-03T12:00:00.000Z; header «Categorías Ingresa aquí 0 Avenida Libertador … Desde: Mar 03/11, 09:00 hrs Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-041-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — resultado de consultar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-D-041-p06-resultado-de-consultar-la-direccion.png>)

![Paso 7 — header](<B2C-144 WEB Evidencias/TC-B2C144-D-041-p07-header.png>)

---

### TC-B2C144-D-042 - Verificar que una dirección sin numeración se setea y el header la muestra con S/N, ventana y chip [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_NUMERO} (Región, Comuna y Calle, sin numeración) tiene cobertura y SLAs

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_NUMERO}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario escribe 2 caracteres en el buscador y hace clic en "Agregar".
6. El sistema muestra el formulario "Dirección manual".
7. El usuario completa Región, Comuna y Dirección con {DIRECCION_SIN_NUMERO}, deja Numeración vacío y hace clic en "Continuar con detalle de la dirección".
8. El usuario confirma la dirección (B2C-99) y valida el código OTP (B2C-125).
9. El usuario revisa el Store Locator del header.

**Resultado esperado**

La dirección queda seteada y el header muestra la calle con "S/N" en lugar de la numeración, la próxima ventana horaria disponible y el chip de precio.

**Evidencia**

![Paso 6 — formulario direccion manual](<B2C-144 WEB Evidencias/TC-B2C144-D-042-p06-formulario-direccion-manual.png>)

![Paso 7 — formulario completo numeracion vacia](<B2C-144 WEB Evidencias/TC-B2C144-D-042-p07-formulario-completo-numeracion-vacia.png>)

![Paso 9 — header con la direccion sin numeracion](<B2C-144 WEB Evidencias/TC-B2C144-D-042-p09-header-con-la-direccion-sin-numeracion.png>)

---

### TC-B2C144-D-043 - Verificar que una dirección con departamento se setea y el header la muestra con su ventana y chip [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es {DIRECCION_DESPACHO_001}
- {DIRECCION_CON_DEPTO} tiene cobertura y SLAs

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_CON_DEPTO}
- {DEPTO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_CON_DEPTO}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. En el detalle de la dirección, el usuario completa el departamento con {DEPTO_001} y confirma la dirección (B2C-99).
7. El usuario valida el código OTP (B2C-125).
8. El usuario revisa el Store Locator del header.

**Resultado esperado**

La dirección queda seteada con el departamento {DEPTO_001} y el header muestra la dirección según el formato definido en Figma, la próxima ventana horaria disponible y el chip de precio.

**Observación**

Falta data: token(s) en TBD en el Excel de data {DEPTO_001}, {DIRECCION_CON_DEPTO}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-045 - Verificar que un invitado sin dirección seteada ve Elige una forma de entrega en el header sin ventana ni chip [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)
- El carro está vacío
- El usuario esta en una sesión nueva
- Borrar caché del browser

**Data utilizada**

- {BASE_URL}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario revisa el Store Locator del header.

**Resultado esperado**

El Store Locator del header muestra "Elige una forma de entrega" (B2C-138), sin ventana horaria ni chip de precio, y no se registra ninguna llamada a GetShippingSimulationsFromJanis.

**Evidencia**

![Paso 3 — header sin direccion](<B2C-144 WEB Evidencias/TC-B2C144-D-045-p03-header-sin-direccion.png>)

---

### TC-B2C144-M-041 - Verificar que un logueado que setea una dirección sin horarios no la setea y se deriva al flujo sin horarios [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_SLA} tiene cobertura y no tiene SLAs disponibles

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_SLA}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y toca "Continuar".
8. El usuario revisa el modal que se muestra y el header, sin tomar ninguna opción.

**Resultado esperado**

Se deriva al flujo B2C-127 (modal "Por ahora no hay horarios disponibles") y {DIRECCION_SIN_SLA} no se setea: el header sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip.

**Observación**

Falta data: {DIRECCION_SIN_SLA} (Av Libertador Gral Bernardo O'Higgins 1072, Maipú) sí tiene cobertura y horarios en el ambiente (Janis: available/covered, ventana 2026-11-03T12:00:00.000Z; header «Avenida Libertador … Desde: Mar 03/11, 09:00 hrs. $2.990 0 Suscríbete a Of Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).

**Evidencia**

![Paso 3 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-041-p03-modal-elige-tu-metodo-de-entrega.png>)

![Paso 6 — resultado de consultar la direccion](<B2C-144 WEB Evidencias/TC-B2C144-M-041-p06-resultado-de-consultar-la-direccion.png>)

![Paso 7 — header](<B2C-144 WEB Evidencias/TC-B2C144-M-041-p07-header.png>)

---

### TC-B2C144-M-042 - Verificar que una dirección sin numeración se setea y el header la muestra con S/N, ventana y chip [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_NUMERO} (Región, Comuna y Calle, sin numeración) tiene cobertura y SLAs

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_NUMERO}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario escribe 2 caracteres en el buscador y toca "Agregar".
6. El sistema muestra el formulario "Dirección manual".
7. El usuario completa Región, Comuna y Dirección con {DIRECCION_SIN_NUMERO}, deja Numeración vacío y toca "Continuar con detalle de la dirección".
8. El usuario confirma la dirección (B2C-99) y valida el código OTP (B2C-125).
9. El usuario revisa el Store Locator del header.

**Resultado esperado**

La dirección queda seteada y el header muestra la calle con "S/N" en lugar de la numeración, la próxima ventana horaria disponible y el chip de precio.

**Evidencia**

![Paso 6 — formulario direccion manual](<B2C-144 WEB Evidencias/TC-B2C144-M-042-p06-formulario-direccion-manual.png>)

![Paso 7 — formulario completo numeracion vacia](<B2C-144 WEB Evidencias/TC-B2C144-M-042-p07-formulario-completo-numeracion-vacia.png>)

![Paso 9 — header con la direccion sin numeracion](<B2C-144 WEB Evidencias/TC-B2C144-M-042-p09-header-con-la-direccion-sin-numeracion.png>)

---

### TC-B2C144-M-043 - Verificar que una dirección con departamento se setea y el header la muestra con su ventana y chip [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es {DIRECCION_DESPACHO_001}
- {DIRECCION_CON_DEPTO} tiene cobertura y SLAs

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_CON_DEPTO}
- {DEPTO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_CON_DEPTO}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. En el detalle de la dirección, el usuario completa el departamento con {DEPTO_001} y confirma la dirección (B2C-99).
7. El usuario valida el código OTP (B2C-125).
8. El usuario revisa el Store Locator del header.

**Resultado esperado**

La dirección queda seteada con el departamento {DEPTO_001} y el header muestra la dirección según el formato definido en Figma, la próxima ventana horaria disponible y el chip de precio.

**Observación**

Falta data: token(s) en TBD en el Excel de data {DEPTO_001}, {DIRECCION_CON_DEPTO}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-M-045 - Verificar que un invitado sin dirección seteada ve Elige una forma de entrega en el header sin ventana ni chip [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sin método de entrega seleccionado (ventana de incógnito)
- El carro está vacío
- El usuario esta en una sesión nueva
- Borrar caché del browser

**Data utilizada**

- {BASE_URL}
- {JANIS_API_ENDPOINT}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario revisa el Store Locator del header.

**Resultado esperado**

El Store Locator del header muestra "Elige una forma de entrega" (B2C-138), sin ventana horaria ni chip de precio, y no se registra ninguna llamada a GetShippingSimulationsFromJanis.

**Observación**

Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).

---

### TC-B2C144-D-012 - Verificar que un cliente Club sobre el umbral ve Despacho gratis en el header [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}
- Despacho a {DIRECCION_DESPACHO_001}
- El total del carro supera {UMBRAL_DESPACHO_GRATIS_CLUB}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD
- {COMPRADOR_CLUB_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.

**Resultado esperado**

El chip del header muestra "Despacho gratis" en lugar del precio.

**Observación**

Falta data: {COMPRADOR_CLUB_USER} resuelve a daunuruco+comprador, la misma cuenta estándar de {USER_AUTH_001}, sin señal de membresía Club en el ambiente. Con el carro sobre el umbral el header muestra $2.990 y no «Despacho gratis». Acción: declarar una cuenta Club real (quien administra el Excel de data).

**Evidencia**

![Paso 2 — header con el chip sobre el umbral](<B2C-144 WEB Evidencias/TC-B2C144-D-012-p02-header-con-el-chip-sobre-el-umbral.png>)

---

### TC-B2C144-D-013 - Verificar que al cruzar el umbral en ambos sentidos el chip cambia sin recargar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}
- Despacho a {DIRECCION_DESPACHO_001}
- El total del carro es menor a {UMBRAL_DESPACHO_GRATIS_CLUB}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD
- {COMPRADOR_CLUB_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.
3. El usuario agrega unidades de {SKU_VALID_001} hasta superar {UMBRAL_DESPACHO_GRATIS_CLUB}.
4. El usuario quita unidades hasta quedar bajo {UMBRAL_DESPACHO_GRATIS_CLUB}.

**Resultado esperado**

El chip cambia a "Despacho gratis" al superar el umbral y vuelve al costo en pesos al quedar bajo él, sin recargar la página.

**Observación**

Falta data: {COMPRADOR_CLUB_USER} resuelve a daunuruco+comprador, la misma cuenta estándar de {USER_AUTH_001}, sin señal de membresía Club en el ambiente. Con el carro sobre el umbral el header muestra $2.990 y no «Despacho gratis». Acción: declarar una cuenta Club real (quien administra el Excel de data).

**Evidencia**

![Paso 2 — chip con el carro bajo el umbral](<B2C-144 WEB Evidencias/TC-B2C144-D-013-p02-chip-con-el-carro-bajo-el-umbral.png>)

---

### TC-B2C144-M-012 - Verificar que un cliente Club sobre el umbral ve Despacho gratis en el header [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}
- Despacho a {DIRECCION_DESPACHO_001}
- El total del carro supera {UMBRAL_DESPACHO_GRATIS_CLUB}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD
- {COMPRADOR_CLUB_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.

**Resultado esperado**

El chip del header muestra "Despacho gratis" en lugar del precio.

**Observación**

Falta data: {COMPRADOR_CLUB_USER} resuelve a daunuruco+comprador, la misma cuenta estándar de {USER_AUTH_001}, sin señal de membresía Club en el ambiente. Con el carro sobre el umbral el header muestra $2.990 y no «Despacho gratis». Acción: declarar una cuenta Club real (quien administra el Excel de data).

**Evidencia**

![Paso 2 — header con el chip sobre el umbral](<B2C-144 WEB Evidencias/TC-B2C144-M-012-p02-header-con-el-chip-sobre-el-umbral.png>)

---

### TC-B2C144-M-013 - Verificar que al cruzar el umbral en ambos sentidos el chip cambia sin recargar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}
- Despacho a {DIRECCION_DESPACHO_001}
- El total del carro es menor a {UMBRAL_DESPACHO_GRATIS_CLUB}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {SKU_VALID_001} = 000000000000675191-UN
- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD
- {COMPRADOR_CLUB_USER} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario revisa el Store Locator del header.
3. El usuario agrega unidades de {SKU_VALID_001} hasta superar {UMBRAL_DESPACHO_GRATIS_CLUB}.
4. El usuario quita unidades hasta quedar bajo {UMBRAL_DESPACHO_GRATIS_CLUB}.

**Resultado esperado**

El chip cambia a "Despacho gratis" al superar el umbral y vuelve al costo en pesos al quedar bajo él, sin recargar la página.

**Observación**

Falta data: {COMPRADOR_CLUB_USER} resuelve a daunuruco+comprador, la misma cuenta estándar de {USER_AUTH_001}, sin señal de membresía Club en el ambiente. Con el carro sobre el umbral el header muestra $2.990 y no «Despacho gratis». Acción: declarar una cuenta Club real (quien administra el Excel de data).

**Evidencia**

![Paso 2 — chip con el carro bajo el umbral](<B2C-144 WEB Evidencias/TC-B2C144-M-013-p02-chip-con-el-carro-bajo-el-umbral.png>)

---

### TC-B2C144-D-018 - Verificar que al iniciar sesión el header muestra la ventana vigente de la dirección guardada [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección {DIRECCION_DESPACHO_001} está persistida en el perfil y su ventana anterior ya no está vigente

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario inicia sesión.
2. El usuario revisa el header.

**Resultado esperado**

Sin loader a pantalla completa, el header muestra {DIRECCION_DESPACHO_001} con la próxima ventana vigente actualizada.

**Observación**

Causa: la comprobación automática del loader a pantalla completa durante el inicio de sesión no distingue el loader propio del login del loader del header; detectó un loader y no hay evidencia visual para decidir. El header sí muestra la ventana vigente de la dirección. Acción requerida: revisión manual del inicio de sesión.

---

### TC-B2C144-M-018 - Verificar que al iniciar sesión el header muestra la ventana vigente de la dirección guardada [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección {DIRECCION_DESPACHO_001} está persistida en el perfil y su ventana anterior ya no está vigente

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario inicia sesión.
2. El usuario revisa el header.

**Resultado esperado**

Sin loader a pantalla completa, el header muestra {DIRECCION_DESPACHO_001} con la próxima ventana vigente actualizada.

**Observación**

Causa: la comprobación automática del loader a pantalla completa durante el inicio de sesión no distingue el loader propio del login del loader del header; detectó un loader y no hay evidencia visual para decidir. El header sí muestra la ventana vigente de la dirección. Acción requerida: revisión manual del inicio de sesión.

---

### TC-B2C144-D-020 - Verificar que si al iniciar sesión se perdió la cobertura el header pasa a sin cobertura [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección persistida en el perfil es {DIRECCION_SIN_COBERTURA}, que tenía cobertura en la sesión anterior

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_SIN_COBERTURA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario inicia sesión.
2. El usuario revisa el header.

**Resultado esperado**

El header muestra la dirección con la etiqueta "Despacho sin cobertura".

**Observación**

Falta data: la dirección activa de la cuenta es Casa y no {DIRECCION_SIN_COBERTURA} (T-551, Futrono); el header no puede mostrar «Despacho sin cobertura» sin que esa dirección sea la persistida. Acción: dejar {DIRECCION_SIN_COBERTURA} como dirección persistida de la cuenta (quien administra el Excel de data).

**Evidencia**

![Paso 2 — direcciones guardadas de la cuenta](<B2C-144 WEB Evidencias/TC-B2C144-D-020-p02-direcciones-guardadas-de-la-cuenta.png>)

---

### TC-B2C144-M-020 - Verificar que si al iniciar sesión se perdió la cobertura el header pasa a sin cobertura [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección persistida en el perfil es {DIRECCION_SIN_COBERTURA}, que tenía cobertura en la sesión anterior

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_SIN_COBERTURA} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario inicia sesión.
2. El usuario revisa el header.

**Resultado esperado**

El header muestra la dirección con la etiqueta "Despacho sin cobertura".

**Observación**

Falta data: la dirección activa de la cuenta es Casa y no {DIRECCION_SIN_COBERTURA} (T-551, Futrono); el header no puede mostrar «Despacho sin cobertura» sin que esa dirección sea la persistida. Acción: dejar {DIRECCION_SIN_COBERTURA} como dirección persistida de la cuenta (quien administra el Excel de data).

**Evidencia**

![Paso 2 — direcciones guardadas de la cuenta](<B2C-144 WEB Evidencias/TC-B2C144-M-020-p02-direcciones-guardadas-de-la-cuenta.png>)

---

### TC-B2C144-D-040 - Verificar que un logueado que setea una dirección sin cobertura no la setea y se deriva al flujo sin cobertura [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_COBERTURA} no tiene cobertura

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_COBERTURA}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA}, la selecciona de las sugerencias y hace clic en "Confirmar dirección".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y hace clic en "Continuar".
8. El usuario revisa el modal que se muestra y el header, sin tomar ninguna opción.

**Resultado esperado**

Se deriva al flujo B2C-123 (modal "Aún no llegamos a esta dirección") y {DIRECCION_SIN_COBERTURA} no se setea: el header sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip.

**Observación**

Causa: al elegir {DIRECCION_SIN_COBERTURA} el sitio no mostró «Autenticación requerida» (paso previo del caso) y no se pudo continuar; sin veredicto del resultado final (modal «Aún no llegamos» y dirección sin setear). Acción requerida: revisión manual del flujo.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-D-040-p04-modal-elige-tu-metodo-de-entrega.png>)

---

### TC-B2C144-M-040 - Verificar que un logueado que setea una dirección sin cobertura no la setea y se deriva al flujo sin cobertura [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_COBERTURA} no tiene cobertura

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {DIRECCION_DESPACHO_001}
- {DIRECCION_SIN_COBERTURA}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA}, la selecciona de las sugerencias y toca "Confirmar dirección".
6. El sistema muestra el modal "Autenticación requerida" (B2C-125).
7. El usuario ingresa el código OTP recibido y toca "Continuar".
8. El usuario revisa el modal que se muestra y el header, sin tomar ninguna opción.

**Resultado esperado**

Se deriva al flujo B2C-123 (modal "Aún no llegamos a esta dirección") y {DIRECCION_SIN_COBERTURA} no se setea: el header sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip.

**Observación**

Causa: al elegir {DIRECCION_SIN_COBERTURA} el sitio no mostró «Autenticación requerida» (paso previo del caso) y no se pudo continuar; sin veredicto del resultado final (modal «Aún no llegamos» y dirección sin setear). Acción requerida: revisión manual del flujo.

**Evidencia**

![Paso 4 — modal elige tu metodo de entrega](<B2C-144 WEB Evidencias/TC-B2C144-M-040-p04-modal-elige-tu-metodo-de-entrega.png>)

---

### TC-B2C144-D-044 - Verificar que una dirección sin departamento se muestra en el header sin complemento ni coma vacía [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es {DIRECCION_OTRA_TIENDA}
- {DIRECCION_DESPACHO_001} es una dirección guardada de la cuenta, sin departamento, con cobertura y SLAs

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {DIRECCION_OTRA_TIENDA}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario hace clic en el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario elige la dirección guardada {DIRECCION_DESPACHO_001} y hace clic en "Confirmar".
6. El usuario revisa el Store Locator del header.

**Resultado esperado**

La dirección queda seteada sin pedir OTP y el header muestra {DIRECCION_DESPACHO_001} sin departamento ni coma o separador vacío, con la próxima ventana horaria disponible y el chip de precio.

**Observación**

Causa: la prueba agotó el tiempo de 8 min al asegurar la dirección activa, en 2 de 2 intentos; sin veredicto del producto. Acción requerida: repetir el caso con el ambiente estable.

**Evidencia**

![Paso 1 — header con la direccion activa previa](<B2C-144 WEB Evidencias/TC-B2C144-D-044-p01-header-con-la-direccion-activa-previa.png>)

![Paso 4 — direcciones guardadas](<B2C-144 WEB Evidencias/TC-B2C144-D-044-p04-direcciones-guardadas.png>)

![Paso 5 — direccion guardada elegida](<B2C-144 WEB Evidencias/TC-B2C144-D-044-p05-direccion-guardada-elegida.png>)

---

### TC-B2C144-M-044 - Verificar que una dirección sin departamento se muestra en el header sin complemento ni coma vacía [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Home
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Acceso a la casilla de correo de la cuenta para leer el código OTP
- El carro está vacío
- La dirección activa es {DIRECCION_OTRA_TIENDA}
- {DIRECCION_DESPACHO_001} es una dirección guardada de la cuenta, sin departamento, con cobertura y SLAs

**Data utilizada**

- {BASE_URL}
- {USER_AUTH_001}
- {DIRECCION_OTRA_TIENDA}
- {DIRECCION_DESPACHO_001}

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El sistema carga el Home.
3. El usuario toca el Store Locator del header.
4. El sistema abre el modal "Elige tu método de entrega" con la pestaña Despacho a domicilio.
5. El usuario elige la dirección guardada {DIRECCION_DESPACHO_001} y toca "Confirmar".
6. El usuario revisa el Store Locator del header.

**Resultado esperado**

La dirección queda seteada sin pedir OTP y el header muestra {DIRECCION_DESPACHO_001} sin departamento ni coma o separador vacío, con la próxima ventana horaria disponible y el chip de precio.

**Observación**

Causa: la prueba agotó el tiempo de 8 min al asegurar la dirección activa, en 2 de 2 intentos; sin veredicto del producto. Acción requerida: repetir el caso con el ambiente estable.

**Evidencia**

![Paso 1 — header con la direccion activa previa](<B2C-144 WEB Evidencias/TC-B2C144-M-044-p01-header-con-la-direccion-activa-previa.png>)

![Paso 4 — direcciones guardadas](<B2C-144 WEB Evidencias/TC-B2C144-M-044-p04-direcciones-guardadas.png>)

![Paso 5 — direccion guardada elegida](<B2C-144 WEB Evidencias/TC-B2C144-M-044-p05-direccion-guardada-elegida.png>)

---

### TC-B2C144-M-003 - Verificar que la dirección de un logueado persiste entre sesiones [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- La dirección {DIRECCION_DESPACHO_001} fue seteada con esta cuenta en una sesión anterior

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario cierra sesión.
2. El usuario inicia sesión nuevamente con la misma cuenta.
3. El usuario ingresa a {BASE_URL}.
4. El usuario revisa el Store Locator del header.

**Resultado esperado**

El header muestra {DIRECCION_DESPACHO_001} con su ventana vigente tras volver a iniciar sesión.

**Observación**

Causa: la prueba agotó el tiempo de 8 min al asegurar la dirección activa, en 2 de 2 intentos; sin veredicto del producto. Acción requerida: repetir el caso con el ambiente estable.

---

### TC-B2C144-M-024 - Verificar que un invitado sin dirección que inicia sesión carga la última dirección del perfil [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-144.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado sin dirección seteada
- La última dirección usada de la cuenta {USER_AUTH_001} es {DIRECCION_DESPACHO_001}

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {DIRECCION_DESPACHO_001} = Casa
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {BASE_URL}.
2. El usuario inicia sesión con la cuenta {USER_AUTH_001}.
3. El usuario revisa el header.

**Resultado esperado**

El header muestra {DIRECCION_DESPACHO_001} con su próxima ventana y chip.

**Observación**

Falta data: la última dirección del perfil de la cuenta es «Las Condes S/N» y no {DIRECCION_DESPACHO_001} (Calle Uno 23); la precondición del caso no se cumple con el estado actual de la cuenta. Acción: dejar Calle Uno 23 como última dirección del perfil (quien administra el Excel de data).

**Evidencia**

![Paso 1 — home del invitado sin direccion](<B2C-144 WEB Evidencias/TC-B2C144-M-024-p01-home-del-invitado-sin-direccion.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "chromium"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-144",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-144 Test Cases.xlsx",
  "title": "B2C-144 (web) - Header de entrega - Evidencias QA",
  "updated_at": "2026-11-02"
 },
 "history": {
  "2026-11-02": [
   "TC-B2C144-D-001",
   "TC-B2C144-D-002",
   "TC-B2C144-D-003",
   "TC-B2C144-D-004",
   "TC-B2C144-D-005",
   "TC-B2C144-D-006",
   "TC-B2C144-D-007",
   "TC-B2C144-D-008",
   "TC-B2C144-D-009",
   "TC-B2C144-D-010",
   "TC-B2C144-D-011",
   "TC-B2C144-D-012",
   "TC-B2C144-D-013",
   "TC-B2C144-D-014",
   "TC-B2C144-D-015",
   "TC-B2C144-D-016",
   "TC-B2C144-D-017",
   "TC-B2C144-D-018",
   "TC-B2C144-D-019",
   "TC-B2C144-D-020",
   "TC-B2C144-D-021",
   "TC-B2C144-D-022",
   "TC-B2C144-D-023",
   "TC-B2C144-D-024",
   "TC-B2C144-D-025",
   "TC-B2C144-D-026",
   "TC-B2C144-D-027",
   "TC-B2C144-D-028",
   "TC-B2C144-D-029",
   "TC-B2C144-D-030",
   "TC-B2C144-D-031",
   "TC-B2C144-D-032",
   "TC-B2C144-D-033",
   "TC-B2C144-D-034",
   "TC-B2C144-D-035",
   "TC-B2C144-D-036",
   "TC-B2C144-D-037",
   "TC-B2C144-D-038",
   "TC-B2C144-D-039",
   "TC-B2C144-D-040",
   "TC-B2C144-D-041",
   "TC-B2C144-D-042",
   "TC-B2C144-D-043",
   "TC-B2C144-D-044",
   "TC-B2C144-D-045",
   "TC-B2C144-M-001",
   "TC-B2C144-M-002",
   "TC-B2C144-M-003",
   "TC-B2C144-M-004",
   "TC-B2C144-M-005",
   "TC-B2C144-M-006",
   "TC-B2C144-M-007",
   "TC-B2C144-M-008",
   "TC-B2C144-M-009",
   "TC-B2C144-M-010",
   "TC-B2C144-M-011",
   "TC-B2C144-M-012",
   "TC-B2C144-M-013",
   "TC-B2C144-M-014",
   "TC-B2C144-M-015",
   "TC-B2C144-M-016",
   "TC-B2C144-M-017",
   "TC-B2C144-M-018",
   "TC-B2C144-M-019",
   "TC-B2C144-M-020",
   "TC-B2C144-M-021",
   "TC-B2C144-M-022",
   "TC-B2C144-M-023",
   "TC-B2C144-M-024",
   "TC-B2C144-M-025",
   "TC-B2C144-M-026",
   "TC-B2C144-M-027",
   "TC-B2C144-M-028",
   "TC-B2C144-M-029",
   "TC-B2C144-M-030",
   "TC-B2C144-M-031",
   "TC-B2C144-M-032",
   "TC-B2C144-M-033",
   "TC-B2C144-M-034",
   "TC-B2C144-M-035",
   "TC-B2C144-M-036",
   "TC-B2C144-M-037",
   "TC-B2C144-M-038",
   "TC-B2C144-M-039",
   "TC-B2C144-M-040",
   "TC-B2C144-M-041",
   "TC-B2C144-M-042",
   "TC-B2C144-M-043",
   "TC-B2C144-M-044",
   "TC-B2C144-M-045"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El modal se cierra y el header muestra {DIRECCION_DESPACHO_001}, la próxima ventana horaria disponible y el chip de precio, sin recargar la página.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-001",
   "name": "Verificar que al setear una dirección con cobertura el header muestra dirección, ventana y chip [Desktop] [Guest]",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 2 — home con elige una forma de entrega",
     "file": "TC-B2C144-D-001-p02-home-con-elige-una-forma-de-entrega.png"
    },
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-D-001-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — header con direccion ventana y chip",
     "file": "TC-B2C144-D-001-p06-header-con-direccion-ventana-y-chip.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La dirección {DIRECCION_DESPACHO_001} y su ventana se mantienen en el header tras recargar y navegar.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-002",
   "name": "Verificar que la dirección de un invitado persiste al navegar y recargar en la misma sesión [Desktop] [Guest]",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección {DIRECCION_DESPACHO_001} está seteada como invitado",
   "screenshots": [
    {
     "caption": "Paso 2 — header con la direccion seteada",
     "file": "TC-B2C144-D-002-p02-header-con-la-direccion-seteada.png"
    },
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-D-002-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 3 — tras recargar",
     "file": "TC-B2C144-D-002-p03-tras-recargar.png"
    },
    {
     "caption": "Paso 4 — plp con la direccion y su ventana",
     "file": "TC-B2C144-D-002-p04-plp-con-la-direccion-y-su-ventana.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.\n3. El usuario recarga la página.\n4. El usuario navega a una PLP.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {DIRECCION_DESPACHO_001} = Casa",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra {DIRECCION_DESPACHO_001} con su ventana vigente tras volver a iniciar sesión.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-003",
   "name": "Verificar que la dirección de un logueado persiste entre sesiones [Desktop] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección {DIRECCION_DESPACHO_001} fue seteada con esta cuenta en una sesión anterior",
   "screenshots": [
    {
     "caption": "Paso 1 — sesion iniciada con la direccion seteada",
     "file": "TC-B2C144-D-003-p01-sesion-iniciada-con-la-direccion-seteada.png"
    },
    {
     "caption": "Paso 2 — sesion cerrada",
     "file": "TC-B2C144-D-003-p02-sesion-cerrada.png"
    },
    {
     "caption": "Paso 4 — header tras volver a iniciar sesion",
     "file": "TC-B2C144-D-003-p04-header-tras-volver-a-iniciar-sesion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario cierra sesión.\n2. El usuario inicia sesión nuevamente con la misma cuenta.\n3. El usuario ingresa a {BASE_URL}.\n4. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra la ventana Programada.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-004",
   "name": "Verificar que con Express con costo y Programado gratis el header muestra la ventana Programada [Desktop] [Guest]",
   "observation": "Falta data: {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción de despacho (ventana Programada con costo $2990); no ofrece Express. Tampoco hay ventana Programada gratis. Header: «Categorías Ingresa aquí 0 Calle Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Janis retorna para {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}: Express con costo y Programado gratis",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-D-004-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — header tras confirmar la direccion",
     "file": "TC-B2C144-D-004-p06-header-tras-confirmar-la-direccion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario revisa la ventana mostrada en el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra la ventana Express.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-005",
   "name": "Verificar que con Express y Programado con costo el header muestra la ventana Express [Desktop] [Guest]",
   "observation": "Falta data: {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción de despacho (ventana Programada con costo $2990); no ofrece Express. No hay ventana Express. Header: «Categorías Ingresa aquí 0 Calle Uno 23 Desde: Ma Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Janis retorna para {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}: Express y Programado con costo",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-D-005-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — header tras confirmar la direccion",
     "file": "TC-B2C144-D-005-p06-header-tras-confirmar-la-direccion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario revisa la ventana mostrada en el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra la ventana Express.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-006",
   "name": "Verificar que con Express y Programado gratis el header muestra la ventana Express [Desktop] [Guest]",
   "observation": "Falta data: {DIRECCION_EXPRESS_Y_PROG_GRATIS} (San Isidro 41, Santiago): la consulta a Janis devuelve una sola opción de despacho (ventana Programada con costo $2990); no ofrece Express. No hay ventana Express ni Programada gratis. Header: «Categorías Ingresa aquí 0 San I Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Janis retorna para {DIRECCION_EXPRESS_Y_PROG_GRATIS}: Express y Programado gratis",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-D-006-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — header tras confirmar la direccion",
     "file": "TC-B2C144-D-006-p06-header-tras-confirmar-la-direccion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_GRATIS}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario revisa la ventana mostrada en el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_EXPRESS_Y_PROG_GRATIS} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra la próxima ventana Programada.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-007",
   "name": "Verificar que con solo ventanas Programadas el header muestra la próxima ventana Programada [Desktop] [Guest]",
   "observation": "Falta data: {DIRECCION_SIN_EXPRESS} (Pasaje Diez 359, Penaflor) no tiene cobertura en el ambiente (modal «Aún no llegamos a esta dirección», deliveryStatus=null); la precondición «solo ventanas Programadas» no se cumple. Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Janis retorna para {DIRECCION_SIN_EXPRESS}: solo ventanas Programadas",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-D-007-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — resultado tras confirmar la direccion",
     "file": "TC-B2C144-D-007-p06-resultado-tras-confirmar-la-direccion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_EXPRESS}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario revisa la ventana mostrada en el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_SIN_EXPRESS} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "En cada página el header muestra la próxima ventana vigente y el chip de costo o gratuidad correspondiente.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-008",
   "name": "Verificar que al navegar entre páginas el header mantiene la ventana y el chip vigentes [Desktop] [Guest]",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección {DIRECCION_DESPACHO_001} está seteada",
   "screenshots": [
    {
     "caption": "Paso 2 — header en el home",
     "file": "TC-B2C144-D-008-p02-header-en-el-home.png"
    },
    {
     "caption": "Paso 3 — header en la plp",
     "file": "TC-B2C144-D-008-p03-header-en-la-plp.png"
    },
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-D-008-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 4 — header en la pdp",
     "file": "TC-B2C144-D-008-p04-header-en-la-pdp.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.\n3. El usuario navega a una PLP y luego a la PDP de {SKU_VALID_001}.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra {DIRECCION_OTRA_TIENDA} con su próxima ventana y su chip de costo o gratuidad.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-009",
   "name": "Verificar que al cambiar la dirección el header se actualiza con la ventana y el costo nuevos [Desktop] [Guest]",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 2 — header con la direccion activa",
     "file": "TC-B2C144-D-009-p02-header-con-la-direccion-activa.png"
    },
    {
     "caption": "Paso 3 — modal abierto con la direccion activa",
     "file": "TC-B2C144-D-009-p03-modal-abierto-con-la-direccion-activa.png"
    },
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-D-009-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — header con la direccion nueva su ventana y su costo",
     "file": "TC-B2C144-D-009-p06-header-con-la-direccion-nueva-su-ventana-y-su-costo.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario revisa el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra el nombre de {TIENDA_RETIRO_001}, la próxima ventana de retiro y el chip \"Gratis\" en verde sin ícono.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-010",
   "name": "Verificar que con retiro en tienda el header muestra la tienda, la ventana y el chip Gratis [Desktop] [Guest]",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Retiro en tienda configurado con {TIENDA_RETIRO_001}",
   "screenshots": [
    {
     "caption": "Paso 3 — pestana retiro en tienda",
     "file": "TC-B2C144-D-010-p03-pestana-retiro-en-tienda.png"
    },
    {
     "caption": "Paso 5 — header con la tienda de retiro",
     "file": "TC-B2C144-D-010-p05-header-con-la-tienda-de-retiro.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {TIENDA_RETIRO_001} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El chip del header muestra el costo de despacho en pesos (ej. \"$3.990\") en amarillo.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-011",
   "name": "Verificar que un cliente Club bajo el umbral ve el costo de despacho en el header [Desktop] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}\n- Despacho a {DIRECCION_DESPACHO_001} con ventana Programada\n- El carro contiene {SKU_VALID_001} y el total es menor a {UMBRAL_DESPACHO_GRATIS_CLUB}\n- Sin promociones de despacho gratis activas",
   "screenshots": [
    {
     "caption": "Paso 2 — header con el costo de despacho",
     "file": "TC-B2C144-D-011-p02-header-con-el-costo-de-despacho.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD\n- {COMPRADOR_CLUB_USER} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El chip muestra \"Gratis\" en verde con ícono circular, visualmente distinto al \"Gratis\" por umbral de monto.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-014",
   "name": "Verificar que un cliente con membresía ve el chip Gratis con su ícono en el header [Desktop] [Logueado]",
   "observation": "Falta data: {COMPRADOR_MEMBRESIA_USER} resuelve a la cuenta daunuruco+noaddress@avatar-global.com, que no tiene membresía Unimarc (es la cuenta sin membresía / sin direcciones). Lectura en la sesión de esa cuenta: el header de la cuenta no muestra «Ver mi suscripción» (si Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_USER}\n- Despacho a {DIRECCION_DESPACHO_001}\n- La cuenta tiene membresía Unimarc activa",
   "screenshots": [
    {
     "caption": "Paso 1 — home del invitado sin sesion no se inicia sesion con una cue",
     "file": "TC-B2C144-D-014-p01-home-del-invitado-sin-sesion-no-se-inicia-sesion-con-una-cue.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El chip muestra ⚡ con el precio Express (ej. \"$5.990\") en naranja/rojo.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-015",
   "name": "Verificar que con Express con costo el header muestra el rayo y el precio Express [Desktop] [Guest]",
   "observation": "Falta data: {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción (Programada con costo $2990); no hay ventana Express, por lo que no existe el chip ⚡ ni el caso Express. Header: «Categorías Ingresa aquí 0 Calle Uno Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sin promoción de envío gratis que incluya Express",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-D-015-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — header tras confirmar la direccion",
     "file": "TC-B2C144-D-015-p06-header-tras-confirmar-la-direccion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario revisa el chip del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El chip muestra \"🟢 Gratis\" con ícono circular (mismo chip que membresía).",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-016",
   "name": "Verificar que con promoción de envío gratis que incluye Express el chip muestra Gratis [Desktop] [Logueado]",
   "observation": "Falta data: {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción (Programada con costo $2990); no hay ventana Express, por lo que no existe el chip ⚡ ni el caso Express. Header: «Categorías Ingresa aquí 0 Calle Uno Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} con ventana Express seleccionada\n- Promoción de envío gratis que incluye Express vigente para la cuenta",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-D-016-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — header tras confirmar la direccion",
     "file": "TC-B2C144-D-016-p06-header-tras-confirmar-la-direccion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El chip mantiene ⚡ con el precio Express aunque el carro supere el umbral de despacho gratis.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-017",
   "name": "Verificar que el precio Express no baja a cero al superar el umbral de monto [Desktop] [Logueado]",
   "observation": "Falta data: {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción (Programada con costo $2990); no hay ventana Express, por lo que no existe el chip ⚡ ni el caso Express. Header: «Categorías Ingresa aquí 0 Calle Uno Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}\n- Dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} con ventana Express\n- El total del carro supera {UMBRAL_DESPACHO_GRATIS_CLUB}\n- Sin promoción de envío gratis que incluya Express",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-D-017-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — header tras confirmar la direccion",
     "file": "TC-B2C144-D-017-p06-header-tras-confirmar-la-direccion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD\n- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD\n- {COMPRADOR_CLUB_USER} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra la dirección con el aviso de sin horarios disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-019",
   "name": "Verificar que si al iniciar sesión ya no hay ventanas el header pasa a sin horarios [Desktop] [Logueado]",
   "observation": "Falta data: {DIRECCION_SIN_SLA} (Av Libertador Gral Bernardo O'Higgins 1072, Maipú) sí tiene horarios en el ambiente: la consulta a Janis responde available/covered con ventana 2026-11-03T12:00:00.000Z y el header muestra «Categorías Ingresa aquí 0 Avenida Libertador … Desde: Mar 03/11, 09:00 hrs. $2.990 Oferta Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección persistida en el perfil es {DIRECCION_SIN_SLA}, que tenía SLAs en la sesión anterior",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-D-019-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 5 — resultado de consultar la direccion",
     "file": "TC-B2C144-D-019-p05-resultado-de-consultar-la-direccion.png"
    },
    {
     "caption": "Paso 6 — header",
     "file": "TC-B2C144-D-019-p06-header.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario inicia sesión.\n2. El usuario revisa el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_SIN_SLA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Tras el TTL, el header se actualiza silenciosamente con la próxima ventana vigente, sin loader ni interrupción.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-021",
   "name": "Verificar que durante la navegación la ventana del header se re-verifica periódicamente [Desktop] [Guest]",
   "observation": "Falta data: No se observó re-verificación tras 5 min de navegación y la ventana mostrada (Categorías Ingresa aquí 0 Calle Uno 23 Desde: Mar 03/11, 09:00 hrs. $2.990 Ofertas Marketplace Locales y horarios Suscríbete a) no venció durante la navegación (precondición «la vent Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección {DIRECCION_DESPACHO_001} está seteada\n- La ventana mostrada vence durante la navegación",
   "screenshots": [
    {
     "caption": "Paso 2 — header al empezar a navegar",
     "file": "TC-B2C144-D-021-p02-header-al-empezar-a-navegar.png"
    },
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-D-021-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 4 — header tras 5 min de navegacion",
     "file": "TC-B2C144-D-021-p04-header-tras-5-min-de-navegacion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.\n3. El usuario navega entre páginas durante más de {TTL_REVERIFICACION_MIN} minutos.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {TTL_REVERIFICACION_MIN} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header mantiene la dirección, la ventana y el chip sin cambios ni mensajes de error.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-022",
   "name": "Verificar que si la re-verificación periódica falla el header mantiene su estado [Desktop] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- La dirección {DIRECCION_DESPACHO_001} está seteada\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.\n3. El usuario navega entre páginas durante más de {TTL_REVERIFICACION_MIN} minutos.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {JANIS_API_ENDPOINT} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {TTL_REVERIFICACION_MIN} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Tras 2 reintentos fallidos se muestra el toast \"No pudimos verificar tu dirección de entrega. Intenta nuevamente o selecciona una dirección\".",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-023",
   "name": "Verificar que si Janis no responde tras 2 reintentos se muestra el toast de verificación [Desktop] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking) (timeout en todos los intentos)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {JANIS_API_ENDPOINT} = TBD\n- {DIRECCION_DESPACHO_001} = Casa",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra {DIRECCION_DESPACHO_001} con su próxima ventana y chip.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-024",
   "name": "Verificar que un invitado sin dirección que inicia sesión carga la última dirección del perfil [Desktop] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {CONTENIDO_SEGMENTO_SIN_SLA}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado sin dirección seteada\n- La última dirección usada de la cuenta {USER_AUTH_001} es {DIRECCION_DESPACHO_001}",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario inicia sesión con la cuenta {USER_AUTH_001}.\n3. El usuario revisa el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {CONTENIDO_SEGMENTO_SIN_SLA} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El Store Locator permanece vacío y muestra \"Elige una forma de entrega\" (B2C-138). Al revisar las solicitudes de red o los logs de integración, no se registra ninguna llamada a GetShippingSimulationsFromJanis.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-025",
   "name": "Verificar que al iniciar sesión en una cuenta sin direcciones se ve Elige una forma de entrega [Desktop] [Guest]",
   "observation": "El Store Locator permanece en «Elige una forma de entrega» tras iniciar sesión con la cuenta sin direcciones. No hubo consulta de simulación de despacho: las únicas llamadas a smu-delivery fueron GET locations y GET address-catalog (la comprobación automática las contó por error al ver «revalidate» en el cuerpo de locations).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado sin dirección seteada\n- La cuenta {SIN_DIRECCION_USER} no tiene direcciones guardadas",
   "screenshots": [
    {
     "caption": "Paso 1 — home del invitado",
     "file": "TC-B2C144-D-025-p01-home-del-invitado.png"
    },
    {
     "caption": "Paso 3 — header tras iniciar sesion",
     "file": "TC-B2C144-D-025-p03-header-tras-iniciar-sesion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario inicia sesión con la cuenta {SIN_DIRECCION_USER}.\n3. El usuario revisa el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SIN_DIRECCION_USER} = 10.101.010-4",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El modal se cierra y el header muestra {DIRECCION_DESPACHO_001}, la próxima ventana horaria disponible y el chip de precio, sin recargar la página.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-001",
   "name": "Verificar que al setear una dirección con cobertura el header muestra dirección, ventana y chip [Mobile] [Guest]",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 2 — home con elige una forma de entrega",
     "file": "TC-B2C144-M-001-p02-home-con-elige-una-forma-de-entrega.png"
    },
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-M-001-p04-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — header con direccion ventana y chip",
     "file": "TC-B2C144-M-001-p06-header-con-direccion-ventana-y-chip.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La dirección {DIRECCION_DESPACHO_001} y su ventana se mantienen en el header tras recargar y navegar.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-002",
   "name": "Verificar que la dirección de un invitado persiste al navegar y recargar en la misma sesión [Mobile] [Guest]",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La dirección {DIRECCION_DESPACHO_001} está seteada como invitado",
   "screenshots": [
    {
     "caption": "Paso 2 — header con la direccion seteada",
     "file": "TC-B2C144-M-002-p02-header-con-la-direccion-seteada.png"
    },
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-M-002-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 3 — tras recargar",
     "file": "TC-B2C144-M-002-p03-tras-recargar.png"
    },
    {
     "caption": "Paso 4 — plp con la direccion y su ventana",
     "file": "TC-B2C144-M-002-p04-plp-con-la-direccion-y-su-ventana.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.\n3. El usuario recarga la página.\n4. El usuario navega a una PLP.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {DIRECCION_DESPACHO_001} = Casa",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra la ventana Programada.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-004",
   "name": "Verificar que con Express con costo y Programado gratis el header muestra la ventana Programada [Mobile] [Guest]",
   "observation": "Falta data: {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción de despacho (ventana Programada con costo $2990); no ofrece Express. Tampoco hay ventana Programada gratis. Header: «Calle Uno 23 Desde: Mar 03/11, 0 Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Janis retorna para {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}: Express con costo y Programado gratis",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-M-004-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — header tras confirmar la direccion",
     "file": "TC-B2C144-M-004-p06-header-tras-confirmar-la-direccion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_EXPRESS_COSTO_PROG_GRATIS}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa la ventana mostrada en el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_EXPRESS_COSTO_PROG_GRATIS} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra la ventana Express.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-005",
   "name": "Verificar que con Express y Programado con costo el header muestra la ventana Express [Mobile] [Guest]",
   "observation": "Falta data: {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción de despacho (ventana Programada con costo $2990); no ofrece Express. No hay ventana Express. Header: «Calle Uno 23 Desde: Mar 03/11, 09:00 hrs. $2.990 Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Janis retorna para {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}: Express y Programado con costo",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-M-005-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — header tras confirmar la direccion",
     "file": "TC-B2C144-M-005-p06-header-tras-confirmar-la-direccion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa la ventana mostrada en el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra la ventana Express.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-006",
   "name": "Verificar que con Express y Programado gratis el header muestra la ventana Express [Mobile] [Guest]",
   "observation": "Falta data: {DIRECCION_EXPRESS_Y_PROG_GRATIS} (San Isidro 41, Santiago): la consulta a Janis devuelve una sola opción de despacho (ventana Programada con costo $2990); no ofrece Express. No hay ventana Express ni Programada gratis. Header: «San Isidro 41 Desde: Mar 03/11, Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Janis retorna para {DIRECCION_EXPRESS_Y_PROG_GRATIS}: Express y Programado gratis",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-M-006-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — header tras confirmar la direccion",
     "file": "TC-B2C144-M-006-p06-header-tras-confirmar-la-direccion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_GRATIS}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa la ventana mostrada en el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_EXPRESS_Y_PROG_GRATIS} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra la próxima ventana Programada.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-007",
   "name": "Verificar que con solo ventanas Programadas el header muestra la próxima ventana Programada [Mobile] [Guest]",
   "observation": "Falta data: {DIRECCION_SIN_EXPRESS} (Pasaje Diez 359, Penaflor) no tiene cobertura en el ambiente (modal «Aún no llegamos a esta dirección», deliveryStatus=null); la precondición «solo ventanas Programadas» no se cumple. Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Janis retorna para {DIRECCION_SIN_EXPRESS}: solo ventanas Programadas",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-M-007-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — resultado tras confirmar la direccion",
     "file": "TC-B2C144-M-007-p06-resultado-tras-confirmar-la-direccion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_EXPRESS}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa la ventana mostrada en el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_SIN_EXPRESS} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "En cada página el header muestra la próxima ventana vigente y el chip de costo o gratuidad correspondiente.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-008",
   "name": "Verificar que al navegar entre páginas el header mantiene la ventana y el chip vigentes [Mobile] [Guest]",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La dirección {DIRECCION_DESPACHO_001} está seteada",
   "screenshots": [
    {
     "caption": "Paso 2 — header en el home",
     "file": "TC-B2C144-M-008-p02-header-en-el-home.png"
    },
    {
     "caption": "Paso 3 — header en la plp",
     "file": "TC-B2C144-M-008-p03-header-en-la-plp.png"
    },
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-M-008-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 4 — header en la pdp",
     "file": "TC-B2C144-M-008-p04-header-en-la-pdp.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.\n3. El usuario navega a una PLP y luego a la PDP de {SKU_VALID_001}.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {PLP_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/category/carnes_vacuno\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra {DIRECCION_OTRA_TIENDA} con su próxima ventana y su chip de costo o gratuidad.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-009",
   "name": "Verificar que al cambiar la dirección el header se actualiza con la ventana y el costo nuevos [Mobile] [Guest]",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío",
   "screenshots": [
    {
     "caption": "Paso 2 — header con la direccion activa",
     "file": "TC-B2C144-M-009-p02-header-con-la-direccion-activa.png"
    },
    {
     "caption": "Paso 3 — modal abierto con la direccion activa",
     "file": "TC-B2C144-M-009-p03-modal-abierto-con-la-direccion-activa.png"
    },
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-M-009-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — header con la direccion nueva su ventana y su costo",
     "file": "TC-B2C144-M-009-p06-header-con-la-direccion-nueva-su-ventana-y-su-costo.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {DIRECCION_OTRA_TIENDA} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra el nombre de {TIENDA_RETIRO_001}, la próxima ventana de retiro y el chip \"Gratis\" en verde sin ícono.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-010",
   "name": "Verificar que con retiro en tienda el header muestra la tienda, la ventana y el chip Gratis [Mobile] [Guest]",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Retiro en tienda configurado con {TIENDA_RETIRO_001}",
   "screenshots": [
    {
     "caption": "Paso 3 — pestana retiro en tienda",
     "file": "TC-B2C144-M-010-p03-pestana-retiro-en-tienda.png"
    },
    {
     "caption": "Paso 5 — header con la tienda de retiro",
     "file": "TC-B2C144-M-010-p05-header-con-la-tienda-de-retiro.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {TIENDA_RETIRO_001} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El chip del header muestra el costo de despacho en pesos (ej. \"$3.990\") en amarillo.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-011",
   "name": "Verificar que un cliente Club bajo el umbral ve el costo de despacho en el header [Mobile] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}\n- Despacho a {DIRECCION_DESPACHO_001} con ventana Programada\n- El carro contiene {SKU_VALID_001} y el total es menor a {UMBRAL_DESPACHO_GRATIS_CLUB}\n- Sin promociones de despacho gratis activas",
   "screenshots": [
    {
     "caption": "Paso 2 — header con el costo de despacho",
     "file": "TC-B2C144-M-011-p02-header-con-el-costo-de-despacho.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD\n- {COMPRADOR_CLUB_USER} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El chip muestra \"Gratis\" en verde con ícono circular, visualmente distinto al \"Gratis\" por umbral de monto.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-014",
   "name": "Verificar que un cliente con membresía ve el chip Gratis con su ícono en el header [Mobile] [Logueado]",
   "observation": "Falta data: {COMPRADOR_MEMBRESIA_USER} resuelve a la cuenta daunuruco+noaddress@avatar-global.com, que no tiene membresía Unimarc (es la cuenta sin membresía / sin direcciones). Lectura en la sesión de esa cuenta: el header de la cuenta no muestra «Ver mi suscripción» (si Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_MEMBRESIA_USER}\n- Despacho a {DIRECCION_DESPACHO_001}\n- La cuenta tiene membresía Unimarc activa",
   "screenshots": [
    {
     "caption": "Paso 1 — home del invitado sin sesion no se inicia sesion con una cue",
     "file": "TC-B2C144-M-014-p01-home-del-invitado-sin-sesion-no-se-inicia-sesion-con-una-cue.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {COMPRADOR_MEMBRESIA_USER} = 10.101.010-4",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El chip muestra ⚡ con el precio Express (ej. \"$5.990\") en naranja/rojo.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-015",
   "name": "Verificar que con Express con costo el header muestra el rayo y el precio Express [Mobile] [Guest]",
   "observation": "Falta data: {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción (Programada con costo $2990); no hay ventana Express, por lo que no existe el chip ⚡ ni el caso Express. Header: «Calle Uno 23 Desde: Mar 03/11, 09:00 Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sin promoción de envío gratis que incluya Express",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-M-015-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — header tras confirmar la direccion",
     "file": "TC-B2C144-M-015-p06-header-tras-confirmar-la-direccion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa el chip del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El chip muestra \"🟢 Gratis\" con ícono circular (mismo chip que membresía).",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-016",
   "name": "Verificar que con promoción de envío gratis que incluye Express el chip muestra Gratis [Mobile] [Logueado]",
   "observation": "Falta data: {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción (Programada con costo $2990); no hay ventana Express, por lo que no existe el chip ⚡ ni el caso Express. Header: «Calle Uno 23 Desde: Mar 03/11, 09:00 Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} con ventana Express seleccionada\n- Promoción de envío gratis que incluye Express vigente para la cuenta",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-M-016-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — header tras confirmar la direccion",
     "file": "TC-B2C144-M-016-p06-header-tras-confirmar-la-direccion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El chip mantiene ⚡ con el precio Express aunque el carro supere el umbral de despacho gratis.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-017",
   "name": "Verificar que el precio Express no baja a cero al superar el umbral de monto [Mobile] [Logueado]",
   "observation": "Falta data: {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} (Calle Uno 23, La Florida): la consulta a Janis devuelve una sola opción (Programada con costo $2990); no hay ventana Express, por lo que no existe el chip ⚡ ni el caso Express. Header: «Calle Uno 23 Desde: Mar 03/11, 09:00 Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}\n- Dirección {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} con ventana Express\n- El total del carro supera {UMBRAL_DESPACHO_GRATIS_CLUB}\n- Sin promoción de envío gratis que incluya Express",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-M-017-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — header tras confirmar la direccion",
     "file": "TC-B2C144-M-017-p06-header-tras-confirmar-la-direccion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_EXPRESS_Y_PROG_CON_COSTO} = TBD\n- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD\n- {COMPRADOR_CLUB_USER} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra la dirección con el aviso de sin horarios disponibles.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-019",
   "name": "Verificar que si al iniciar sesión ya no hay ventanas el header pasa a sin horarios [Mobile] [Logueado]",
   "observation": "Falta data: {DIRECCION_SIN_SLA} (Av Libertador Gral Bernardo O'Higgins 1072, Maipú) sí tiene horarios en el ambiente: la consulta a Janis responde available/covered con ventana 2026-11-03T12:00:00.000Z y el header muestra «Avenida Libertador … Desde: Mar 03/11, 09:00 hrs. Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección persistida en el perfil es {DIRECCION_SIN_SLA}, que tenía SLAs en la sesión anterior",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-M-019-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 5 — resultado de consultar la direccion",
     "file": "TC-B2C144-M-019-p05-resultado-de-consultar-la-direccion.png"
    },
    {
     "caption": "Paso 6 — header",
     "file": "TC-B2C144-M-019-p06-header.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario inicia sesión.\n2. El usuario revisa el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_SIN_SLA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Tras el TTL, el header se actualiza silenciosamente con la próxima ventana vigente, sin loader ni interrupción.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-021",
   "name": "Verificar que durante la navegación la ventana del header se re-verifica periódicamente [Mobile] [Guest]",
   "observation": "Falta data: No se observó re-verificación tras 5 min de navegación y la ventana mostrada (Calle Uno 23 Desde: Mar 03/11, 09:00 hrs. $2.990 0 Suscríbete a Ofertas Marketplace Locales y horarios) no venció durante la navegación (precondición «la ventana vence durante la nav Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La dirección {DIRECCION_DESPACHO_001} está seteada\n- La ventana mostrada vence durante la navegación",
   "screenshots": [
    {
     "caption": "Paso 2 — header al empezar a navegar",
     "file": "TC-B2C144-M-021-p02-header-al-empezar-a-navegar.png"
    },
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-M-021-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 4 — header tras 5 min de navegacion",
     "file": "TC-B2C144-M-021-p04-header-tras-5-min-de-navegacion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.\n3. El usuario navega entre páginas durante más de {TTL_REVERIFICACION_MIN} minutos.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {TTL_REVERIFICACION_MIN} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header mantiene la dirección, la ventana y el chip sin cambios ni mensajes de error.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-022",
   "name": "Verificar que si la re-verificación periódica falla el header mantiene su estado [Mobile] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- La dirección {DIRECCION_DESPACHO_001} está seteada\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.\n3. El usuario navega entre páginas durante más de {TTL_REVERIFICACION_MIN} minutos.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {JANIS_API_ENDPOINT} = TBD\n- {DIRECCION_DESPACHO_001} = Casa\n- {TTL_REVERIFICACION_MIN} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Tras 2 reintentos fallidos se muestra el toast \"No pudimos verificar tu dirección de entrega. Intenta nuevamente o selecciona una dirección\".",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-023",
   "name": "Verificar que si Janis no responde tras 2 reintentos se muestra el toast de verificación [Mobile] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking) (timeout en todos los intentos)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {JANIS_API_ENDPOINT} = TBD\n- {DIRECCION_DESPACHO_001} = Casa",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El Store Locator permanece vacío y muestra \"Elige una forma de entrega\" (B2C-138). Al revisar las solicitudes de red o los logs de integración, no se registra ninguna llamada a GetShippingSimulationsFromJanis.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-025",
   "name": "Verificar que al iniciar sesión en una cuenta sin direcciones se ve Elige una forma de entrega [Mobile] [Guest]",
   "observation": "El Store Locator permanece en «Elige una forma de entrega» tras iniciar sesión con la cuenta sin direcciones. No hubo consulta de simulación de despacho: las únicas llamadas a smu-delivery fueron GET locations y GET address-catalog (la comprobación automática las contó por error al ver «revalidate» en el cuerpo de locations).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado sin dirección seteada\n- La cuenta {SIN_DIRECCION_USER} no tiene direcciones guardadas",
   "screenshots": [
    {
     "caption": "Paso 1 — home del invitado",
     "file": "TC-B2C144-M-025-p01-home-del-invitado.png"
    },
    {
     "caption": "Paso 3 — header tras iniciar sesion",
     "file": "TC-B2C144-M-025-p03-header-tras-iniciar-sesion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario inicia sesión con la cuenta {SIN_DIRECCION_USER}.\n3. El usuario revisa el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SIN_DIRECCION_USER} = 10.101.010-4",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Al confirmar, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}); la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El header muestra {DIRECCION_DESPACHO_001} con la próxima ventana de schedules y el chip según el costo recibido.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-026",
   "name": "Verificar que al confirmar una dirección nueva se consulta Janis vía APIGEE y la respuesta trae cobertura, ventanas, tienda y costo [Desktop] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El carro está vacío\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario revisa en DevTools > Network la request GetShippingSimulationsFromJanis y su respuesta.\n7. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {JANIS_API_ENDPOINT}\n- {LOG_TOOL}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Al seleccionar {DIRECCION_DESPACHO_002}, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de esa dirección; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El header muestra {DIRECCION_DESPACHO_002} con su próxima ventana y su chip.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-027",
   "name": "Verificar que al seleccionar una dirección guardada se consulta Janis con esa dirección [Desktop] [Logueado]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La libreta de {USER_AUTH_001} tiene {DIRECCION_DESPACHO_001} (activa) y {DIRECCION_DESPACHO_002}\n- El carro está vacío\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con las direcciones guardadas.\n5. El usuario selecciona {DIRECCION_DESPACHO_002}.\n6. Si el sistema solicita el código OTP (B2C-125), el usuario lo ingresa y continúa.\n7. El usuario revisa en DevTools > Network la request GetShippingSimulationsFromJanis y su respuesta.",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_DESPACHO_002}\n- {JANIS_API_ENDPOINT}\n- {LOG_TOOL}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Durante la carga se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de {DIRECCION_DESPACHO_001}; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El header muestra {DIRECCION_DESPACHO_001} con la próxima ventana vigente.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-028",
   "name": "Verificar que al cargar con una dirección ya configurada se consulta Janis [Desktop] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La dirección {DIRECCION_DESPACHO_001} está seteada\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario recarga {BASE_URL}.\n3. El sistema carga el Home.\n4. El usuario revisa en DevTools > Network la request GetShippingSimulationsFromJanis y su respuesta.\n5. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {JANIS_API_ENDPOINT}\n- {LOG_TOOL}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Al cambiar la dirección en Mis envíos, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de {DIRECCION_DESPACHO_002}; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. Mis envíos muestra las ventanas de la nueva dirección y el header se actualiza con {DIRECCION_DESPACHO_002}.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-029",
   "name": "Verificar que al cambiar la dirección desde Mis envíos se consulta Janis con la nueva dirección [Desktop] [Logueado]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La libreta de {USER_AUTH_001} tiene {DIRECCION_DESPACHO_001} (activa) y {DIRECCION_DESPACHO_002}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (cumple el mínimo de compra)\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario ingresa a {CART_URL}.\n4. El usuario hace clic en \"Ir a pagar\".\n5. El sistema muestra Mis envíos con {DIRECCION_DESPACHO_001}.\n6. El usuario cambia la dirección de despacho a {DIRECCION_DESPACHO_002} desde Mis envíos.\n7. Si el sistema solicita el código OTP (B2C-125), el usuario lo ingresa y continúa.\n8. El usuario revisa en DevTools > Network la request GetShippingSimulationsFromJanis y su respuesta.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_DESPACHO_002}\n- {SKU_VALID_001}\n- {UNIDADES_SOBRE_MINIMO}\n- {JANIS_API_ENDPOINT}\n- {LOG_TOOL}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La respuesta trae coverage = false. La dirección no se setea: el header sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip, y el sistema deriva al flujo B2C-123 (modal \"Aún no llegamos\"). No se muestra el modal \"No se te escapen\" ni el flujo sin horarios.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-030",
   "name": "Verificar que si Janis responde sin cobertura la dirección no se setea y se deriva al flujo sin cobertura [Desktop] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario revisa en DevTools > Network la respuesta de GetShippingSimulationsFromJanis.\n7. El usuario revisa el modal que se muestra y el Store Locator del header, sin tomar ninguna opción.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_COBERTURA}\n- {JANIS_API_ENDPOINT}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La respuesta trae coverage = true y un warehouseId distinto al activo; antes de setear se muestra el modal \"No se te escapen\". Al confirmar, el sistema continúa: la dirección se setea, el nuevo warehouseId queda en la sesión y el header muestra {DIRECCION_OTRA_TIENDA} con su próxima ventana y chip.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-031",
   "name": "Verificar que con carro y cambio de tienda abastecedora se muestra No se te escapen y al confirmar se setea la dirección [Desktop] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} x 1\n- {DIRECCION_OTRA_TIENDA} es abastecida por una tienda distinta a la de {DIRECCION_DESPACHO_001}\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario revisa en DevTools > Network el warehouseId de la respuesta de GetShippingSimulationsFromJanis.\n7. El sistema muestra el modal \"No se te escapen\".\n8. El usuario hace clic en \"Sí, continuar\".\n9. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_OTRA_TIENDA}\n- {SKU_VALID_001}\n- {JANIS_API_ENDPOINT}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El modal se cierra y la dirección no se setea: el header mantiene {DIRECCION_DESPACHO_001} con su ventana y chip, el carro conserva {SKU_VALID_001} x 1 con la tienda abastecedora anterior y no se continúa a la evaluación de SLAs.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-032",
   "name": "Verificar que al cancelar No se te escapen se mantienen la dirección y la configuración anteriores [Desktop] [Guest]",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} x 1\n- {DIRECCION_OTRA_TIENDA} es abastecida por una tienda distinta a la de {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — direccion activa y carro con 1 unidad",
     "file": "TC-B2C144-D-032-p02-direccion-activa-y-carro-con-1-unidad.png"
    },
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-D-032-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 7 — aviso de cambio de tienda",
     "file": "TC-B2C144-D-032-p07-aviso-de-cambio-de-tienda.png"
    },
    {
     "caption": "Paso 9 — header y carro tras cancelar",
     "file": "TC-B2C144-D-032-p09-header-y-carro-tras-cancelar.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema muestra el modal \"No se te escapen\".\n7. El usuario hace clic en \"No, gracias\".\n8. El usuario revisa el Store Locator del header y el carro.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_OTRA_TIENDA}\n- {SKU_VALID_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La respuesta trae coverage = true y schedules vacío o nulo. La dirección no se setea: el header sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip, y el sistema deriva al flujo B2C-127 (modal sin horarios).",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-033",
   "name": "Verificar que si Janis responde sin ventanas la dirección no se setea y se deriva al flujo sin horarios [Desktop] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario revisa en DevTools > Network la respuesta de GetShippingSimulationsFromJanis.\n7. El usuario revisa el modal que se muestra y el Store Locator del header, sin tomar ninguna opción.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_SLA}\n- {JANIS_API_ENDPOINT}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La respuesta trae el mismo warehouseId que el activo; no se muestra el modal \"No se te escapen\" y la dirección se setea directamente: el header muestra {DIRECCION_MISMA_TIENDA} con su próxima ventana y chip, y el carro no cambia.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-034",
   "name": "Verificar que con carro y misma tienda abastecedora la dirección se setea sin mostrar No se te escapen [Desktop] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} x 1\n- {DIRECCION_MISMA_TIENDA} es abastecida por la misma tienda que {DIRECCION_DESPACHO_001}\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_MISMA_TIENDA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario revisa en DevTools > Network el warehouseId de la respuesta de GetShippingSimulationsFromJanis.\n7. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_MISMA_TIENDA}\n- {SKU_VALID_001}\n- {JANIS_API_ENDPOINT}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "No se ejecuta re-verificación al cumplirse T0 + {TTL_REVERIFICACION_MIN} minutos (el contador se reinició con el cambio). La siguiente re-verificación periódica ocurre al cumplirse T1 + {TTL_REVERIFICACION_MIN} minutos, con los datos de {DIRECCION_DESPACHO_002}, sin loader ni interrupción.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-035",
   "name": "Verificar que el contador de re-verificación se reinicia al cambiar la dirección manualmente [Desktop] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El TTL de re-verificación configurado en BM es {TTL_REVERIFICACION_MIN} minutos\n- El carro está vacío\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario anota la hora del seteo (T0).\n7. El usuario navega entre páginas y, 2 minutos antes de cumplirse {TTL_REVERIFICACION_MIN} minutos desde T0, cambia la dirección a {DIRECCION_DESPACHO_002} desde el Store Locator; anota la hora del cambio (T1).\n8. El usuario sigue navegando hasta pasar T1 + {TTL_REVERIFICACION_MIN} minutos, revisando en DevTools > Network las requests GetShippingSimulationsFromJanis.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_DESPACHO_002}\n- {TTL_REVERIFICACION_MIN}\n- {JANIS_API_ENDPOINT}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Solo se registra la llamada GetShippingSimulationsFromJanis del seteo de {DIRECCION_DESPACHO_002}; en los 30 segundos siguientes a T1 no se ejecuta otra llamada de re-verificación aunque se cumpla T0 + {TTL_REVERIFICACION_MIN} minutos. El header muestra {DIRECCION_DESPACHO_002} sin cambios adicionales.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-036",
   "name": "Verificar que no se re-verifica si la dirección se cambió hace menos de 30 segundos [Desktop] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El TTL de re-verificación configurado en BM es {TTL_REVERIFICACION_MIN} minutos\n- El carro está vacío\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario anota la hora del seteo (T0).\n7. El usuario navega entre páginas y, 10 segundos antes de cumplirse {TTL_REVERIFICACION_MIN} minutos desde T0, cambia la dirección a {DIRECCION_DESPACHO_002}; anota la hora del cambio (T1).\n8. Durante los 30 segundos siguientes a T1, el usuario navega a otra página y revisa en DevTools > Network las requests GetShippingSimulationsFromJanis.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_DESPACHO_002}\n- {TTL_REVERIFICACION_MIN}\n- {JANIS_API_ENDPOINT}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se registran 2 requests GetShippingSimulationsFromJanis: la primera falla y la segunda (1er reintento, unos 2 segundos después) responde bien. El sistema continúa según el CA2: la dirección se setea y el header muestra {DIRECCION_DESPACHO_001} con su ventana y chip. No se muestra el toast de error.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-037",
   "name": "Verificar que si el primer reintento a Janis responde bien la dirección se setea sin toast de error [Desktop] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {HERRAMIENTA_PROXY_WEB}, {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El carro está vacío\n- {HERRAMIENTA_PROXY_WEB} configurado para que solo la primera request {JANIS_API_ENDPOINT} falle por timeout o error HTTP",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario revisa en {HERRAMIENTA_PROXY_WEB} las requests GetShippingSimulationsFromJanis y sus tiempos.\n7. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {JANIS_API_ENDPOINT}\n- {HERRAMIENTA_PROXY_WEB}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se registran 3 requests GetShippingSimulationsFromJanis con unos 2 segundos entre cada una: las dos primeras fallan y la tercera (2do reintento) responde bien. El sistema continúa según el CA2: la dirección se setea y el header muestra {DIRECCION_DESPACHO_001} con su ventana y chip. No se muestra el toast de error.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-038",
   "name": "Verificar que si el segundo reintento a Janis responde bien la dirección se setea sin toast de error [Desktop] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {HERRAMIENTA_PROXY_WEB}, {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El carro está vacío\n- {HERRAMIENTA_PROXY_WEB} configurado para que las dos primeras requests {JANIS_API_ENDPOINT} fallen por timeout o error HTTP",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El usuario revisa en {HERRAMIENTA_PROXY_WEB} las requests GetShippingSimulationsFromJanis y sus tiempos.\n7. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {JANIS_API_ENDPOINT}\n- {HERRAMIENTA_PROXY_WEB}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se muestra el toast \"No pudimos verificar tu dirección de entrega. Intenta nuevamente o selecciona una dirección\" sin detalles técnicos. En {LOG_TOOL} queda un registro del error definitivo de GetShippingSimulationsFromJanis (servicio, tipo de error o timeout y hora), que no es visible para el usuario.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-039",
   "name": "Verificar que el fallo definitivo de Janis queda registrado en el sistema de logging [Desktop] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- El carro está vacío\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)\n- Acceso de consulta a {LOG_TOOL}",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema muestra el toast de error.\n7. El usuario anota la hora del error.\n8. El usuario busca en {LOG_TOOL} los registros de GetShippingSimulationsFromJanis en esa hora.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {JANIS_API_ENDPOINT}\n- {LOG_TOOL}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Al confirmar, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}); la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El header muestra {DIRECCION_DESPACHO_001} con la próxima ventana de schedules y el chip según el costo recibido.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-026",
   "name": "Verificar que al confirmar una dirección nueva se consulta Janis vía APIGEE y la respuesta trae cobertura, ventanas, tienda y costo [Mobile] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El carro está vacío\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa en DevTools > Network la request GetShippingSimulationsFromJanis y su respuesta.\n7. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {JANIS_API_ENDPOINT}\n- {LOG_TOOL}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Al seleccionar {DIRECCION_DESPACHO_002}, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de esa dirección; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El header muestra {DIRECCION_DESPACHO_002} con su próxima ventana y su chip.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-027",
   "name": "Verificar que al seleccionar una dirección guardada se consulta Janis con esa dirección [Mobile] [Logueado]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La libreta de {USER_AUTH_001} tiene {DIRECCION_DESPACHO_001} (activa) y {DIRECCION_DESPACHO_002}\n- El carro está vacío\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con las direcciones guardadas.\n5. El usuario selecciona {DIRECCION_DESPACHO_002}.\n6. Si el sistema solicita el código OTP (B2C-125), el usuario lo ingresa y continúa.\n7. El usuario revisa en DevTools > Network la request GetShippingSimulationsFromJanis y su respuesta.",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_DESPACHO_002}\n- {JANIS_API_ENDPOINT}\n- {LOG_TOOL}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Durante la carga se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de {DIRECCION_DESPACHO_001}; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. El header muestra {DIRECCION_DESPACHO_001} con la próxima ventana vigente.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-028",
   "name": "Verificar que al cargar con una dirección ya configurada se consulta Janis [Mobile] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La dirección {DIRECCION_DESPACHO_001} está seteada\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario recarga {BASE_URL}.\n3. El sistema carga el Home.\n4. El usuario revisa en DevTools > Network la request GetShippingSimulationsFromJanis y su respuesta.\n5. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {JANIS_API_ENDPOINT}\n- {LOG_TOOL}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Al cambiar la dirección en Mis envíos, se ejecuta la llamada GetShippingSimulationsFromJanis a través de APIGEE ({JANIS_API_ENDPOINT}) con los datos de {DIRECCION_DESPACHO_002}; la respuesta de GetShippingSimulationsFromJanis incluye coverage, schedules (ventanas/SLAs), warehouseId y el costo de envío. Mis envíos muestra las ventanas de la nueva dirección y el header se actualiza con {DIRECCION_DESPACHO_002}.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-029",
   "name": "Verificar que al cambiar la dirección desde Mis envíos se consulta Janis con la nueva dirección [Mobile] [Logueado]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La libreta de {USER_AUTH_001} tiene {DIRECCION_DESPACHO_001} (activa) y {DIRECCION_DESPACHO_002}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} (cumple el mínimo de compra)\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario ingresa a {CART_URL}.\n4. El usuario toca \"Ir a pagar\".\n5. El sistema muestra Mis envíos con {DIRECCION_DESPACHO_001}.\n6. El usuario cambia la dirección de despacho a {DIRECCION_DESPACHO_002} desde Mis envíos.\n7. Si el sistema solicita el código OTP (B2C-125), el usuario lo ingresa y continúa.\n8. El usuario revisa en DevTools > Network la request GetShippingSimulationsFromJanis y su respuesta.",
   "test_data": "- {BASE_URL}\n- {CART_URL}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_DESPACHO_002}\n- {SKU_VALID_001}\n- {UNIDADES_SOBRE_MINIMO}\n- {JANIS_API_ENDPOINT}\n- {LOG_TOOL}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La respuesta trae coverage = false. La dirección no se setea: el header sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip, y el sistema deriva al flujo B2C-123 (modal \"Aún no llegamos\"). No se muestra el modal \"No se te escapen\" ni el flujo sin horarios.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-030",
   "name": "Verificar que si Janis responde sin cobertura la dirección no se setea y se deriva al flujo sin cobertura [Mobile] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa en DevTools > Network la respuesta de GetShippingSimulationsFromJanis.\n7. El usuario revisa el modal que se muestra y el Store Locator del header, sin tomar ninguna opción.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_COBERTURA}\n- {JANIS_API_ENDPOINT}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La respuesta trae coverage = true y un warehouseId distinto al activo; antes de setear se muestra el modal \"No se te escapen\". Al confirmar, el sistema continúa: la dirección se setea, el nuevo warehouseId queda en la sesión y el header muestra {DIRECCION_OTRA_TIENDA} con su próxima ventana y chip.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-031",
   "name": "Verificar que con carro y cambio de tienda abastecedora se muestra No se te escapen y al confirmar se setea la dirección [Mobile] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} x 1\n- {DIRECCION_OTRA_TIENDA} es abastecida por una tienda distinta a la de {DIRECCION_DESPACHO_001}\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa en DevTools > Network el warehouseId de la respuesta de GetShippingSimulationsFromJanis.\n7. El sistema muestra el modal \"No se te escapen\".\n8. El usuario toca \"Sí, continuar\".\n9. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_OTRA_TIENDA}\n- {SKU_VALID_001}\n- {JANIS_API_ENDPOINT}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El modal se cierra y la dirección no se setea: el header mantiene {DIRECCION_DESPACHO_001} con su ventana y chip, el carro conserva {SKU_VALID_001} x 1 con la tienda abastecedora anterior y no se continúa a la evaluación de SLAs.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-032",
   "name": "Verificar que al cancelar No se te escapen se mantienen la dirección y la configuración anteriores [Mobile] [Guest]",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} x 1\n- {DIRECCION_OTRA_TIENDA} es abastecida por una tienda distinta a la de {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 2 — direccion activa y carro con 1 unidad",
     "file": "TC-B2C144-M-032-p02-direccion-activa-y-carro-con-1-unidad.png"
    },
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-M-032-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 7 — aviso de cambio de tienda",
     "file": "TC-B2C144-M-032-p07-aviso-de-cambio-de-tienda.png"
    },
    {
     "caption": "Paso 9 — header y carro tras cancelar",
     "file": "TC-B2C144-M-032-p09-header-y-carro-tras-cancelar.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_OTRA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"No se te escapen\".\n7. El usuario toca \"No, gracias\".\n8. El usuario revisa el Store Locator del header y el carro.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_OTRA_TIENDA}\n- {SKU_VALID_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La respuesta trae coverage = true y schedules vacío o nulo. La dirección no se setea: el header sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip, y el sistema deriva al flujo B2C-127 (modal sin horarios).",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-033",
   "name": "Verificar que si Janis responde sin ventanas la dirección no se setea y se deriva al flujo sin horarios [Mobile] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro está vacío\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa en DevTools > Network la respuesta de GetShippingSimulationsFromJanis.\n7. El usuario revisa el modal que se muestra y el Store Locator del header, sin tomar ninguna opción.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_SLA}\n- {JANIS_API_ENDPOINT}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La respuesta trae el mismo warehouseId que el activo; no se muestra el modal \"No se te escapen\" y la dirección se setea directamente: el header muestra {DIRECCION_MISMA_TIENDA} con su próxima ventana y chip, y el carro no cambia.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-034",
   "name": "Verificar que con carro y misma tienda abastecedora la dirección se setea sin mostrar No se te escapen [Mobile] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- El carro contiene {SKU_VALID_001} x 1\n- {DIRECCION_MISMA_TIENDA} es abastecida por la misma tienda que {DIRECCION_DESPACHO_001}\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_MISMA_TIENDA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa en DevTools > Network el warehouseId de la respuesta de GetShippingSimulationsFromJanis.\n7. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_MISMA_TIENDA}\n- {SKU_VALID_001}\n- {JANIS_API_ENDPOINT}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "No se ejecuta re-verificación al cumplirse T0 + {TTL_REVERIFICACION_MIN} minutos (el contador se reinició con el cambio). La siguiente re-verificación periódica ocurre al cumplirse T1 + {TTL_REVERIFICACION_MIN} minutos, con los datos de {DIRECCION_DESPACHO_002}, sin loader ni interrupción.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-035",
   "name": "Verificar que el contador de re-verificación se reinicia al cambiar la dirección manualmente [Mobile] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El TTL de re-verificación configurado en BM es {TTL_REVERIFICACION_MIN} minutos\n- El carro está vacío\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario anota la hora del seteo (T0).\n7. El usuario navega entre páginas y, 2 minutos antes de cumplirse {TTL_REVERIFICACION_MIN} minutos desde T0, cambia la dirección a {DIRECCION_DESPACHO_002} desde el Store Locator; anota la hora del cambio (T1).\n8. El usuario sigue navegando hasta pasar T1 + {TTL_REVERIFICACION_MIN} minutos, revisando en DevTools > Network las requests GetShippingSimulationsFromJanis.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_DESPACHO_002}\n- {TTL_REVERIFICACION_MIN}\n- {JANIS_API_ENDPOINT}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Solo se registra la llamada GetShippingSimulationsFromJanis del seteo de {DIRECCION_DESPACHO_002}; en los 30 segundos siguientes a T1 no se ejecuta otra llamada de re-verificación aunque se cumpla T0 + {TTL_REVERIFICACION_MIN} minutos. El header muestra {DIRECCION_DESPACHO_002} sin cambios adicionales.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-036",
   "name": "Verificar que no se re-verifica si la dirección se cambió hace menos de 30 segundos [Mobile] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El TTL de re-verificación configurado en BM es {TTL_REVERIFICACION_MIN} minutos\n- El carro está vacío\n- DevTools abierto en la pestaña Network con filtro {JANIS_API_ENDPOINT} (Preserve log activo)",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario anota la hora del seteo (T0).\n7. El usuario navega entre páginas y, 10 segundos antes de cumplirse {TTL_REVERIFICACION_MIN} minutos desde T0, cambia la dirección a {DIRECCION_DESPACHO_002}; anota la hora del cambio (T1).\n8. Durante los 30 segundos siguientes a T1, el usuario navega a otra página y revisa en DevTools > Network las requests GetShippingSimulationsFromJanis.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_DESPACHO_002}\n- {TTL_REVERIFICACION_MIN}\n- {JANIS_API_ENDPOINT}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se registran 2 requests GetShippingSimulationsFromJanis: la primera falla y la segunda (1er reintento, unos 2 segundos después) responde bien. El sistema continúa según el CA2: la dirección se setea y el header muestra {DIRECCION_DESPACHO_001} con su ventana y chip. No se muestra el toast de error.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-037",
   "name": "Verificar que si el primer reintento a Janis responde bien la dirección se setea sin toast de error [Mobile] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {HERRAMIENTA_PROXY_WEB}, {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El carro está vacío\n- {HERRAMIENTA_PROXY_WEB} configurado para que solo la primera request {JANIS_API_ENDPOINT} falle por timeout o error HTTP",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa en {HERRAMIENTA_PROXY_WEB} las requests GetShippingSimulationsFromJanis y sus tiempos.\n7. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {JANIS_API_ENDPOINT}\n- {HERRAMIENTA_PROXY_WEB}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se registran 3 requests GetShippingSimulationsFromJanis con unos 2 segundos entre cada una: las dos primeras fallan y la tercera (2do reintento) responde bien. El sistema continúa según el CA2: la dirección se setea y el header muestra {DIRECCION_DESPACHO_001} con su ventana y chip. No se muestra el toast de error.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-038",
   "name": "Verificar que si el segundo reintento a Janis responde bien la dirección se setea sin toast de error [Mobile] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {HERRAMIENTA_PROXY_WEB}, {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El carro está vacío\n- {HERRAMIENTA_PROXY_WEB} configurado para que las dos primeras requests {JANIS_API_ENDPOINT} fallen por timeout o error HTTP",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El usuario revisa en {HERRAMIENTA_PROXY_WEB} las requests GetShippingSimulationsFromJanis y sus tiempos.\n7. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {JANIS_API_ENDPOINT}\n- {HERRAMIENTA_PROXY_WEB}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se muestra el toast \"No pudimos verificar tu dirección de entrega. Intenta nuevamente o selecciona una dirección\" sin detalles técnicos. En {LOG_TOOL} queda un registro del error definitivo de GetShippingSimulationsFromJanis (servicio, tipo de error o timeout y hora), que no es visible para el usuario.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-039",
   "name": "Verificar que el fallo definitivo de Janis queda registrado en el sistema de logging [Mobile] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}, {LOG_TOOL}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- El carro está vacío\n- DevTools abierto con bloqueo de la request {JANIS_API_ENDPOINT} (Network request blocking)\n- Acceso de consulta a {LOG_TOOL}",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_DESPACHO_001}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el toast de error.\n7. El usuario anota la hora del error.\n8. El usuario busca en {LOG_TOOL} los registros de GetShippingSimulationsFromJanis en esa hora.",
   "test_data": "- {BASE_URL}\n- {DIRECCION_DESPACHO_001}\n- {JANIS_API_ENDPOINT}\n- {LOG_TOOL}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se deriva al flujo B2C-127 (modal \"Por ahora no hay horarios disponibles\") y {DIRECCION_SIN_SLA} no se setea: el header sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-041",
   "name": "Verificar que un logueado que setea una dirección sin horarios no la setea y se deriva al flujo sin horarios [Desktop] [Logueado]",
   "observation": "Falta data: {DIRECCION_SIN_SLA} (Av Libertador Gral Bernardo O'Higgins 1072, Maipú) sí tiene cobertura y horarios en el ambiente (Janis: available/covered, ventana 2026-11-03T12:00:00.000Z; header «Categorías Ingresa aquí 0 Avenida Libertador … Desde: Mar 03/11, 09:00 hrs Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_SLA} tiene cobertura y no tiene SLAs disponibles",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-D-041-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — resultado de consultar la direccion",
     "file": "TC-B2C144-D-041-p06-resultado-de-consultar-la-direccion.png"
    },
    {
     "caption": "Paso 7 — header",
     "file": "TC-B2C144-D-041-p07-header.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y hace clic en \"Continuar\".\n8. El usuario revisa el modal que se muestra y el header, sin tomar ninguna opción.",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_SLA}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La dirección queda seteada y el header muestra la calle con \"S/N\" en lugar de la numeración, la próxima ventana horaria disponible y el chip de precio.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-042",
   "name": "Verificar que una dirección sin numeración se setea y el header la muestra con S/N, ventana y chip [Desktop] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_NUMERO} (Región, Comuna y Calle, sin numeración) tiene cobertura y SLAs",
   "screenshots": [
    {
     "caption": "Paso 6 — formulario direccion manual",
     "file": "TC-B2C144-D-042-p06-formulario-direccion-manual.png"
    },
    {
     "caption": "Paso 7 — formulario completo numeracion vacia",
     "file": "TC-B2C144-D-042-p07-formulario-completo-numeracion-vacia.png"
    },
    {
     "caption": "Paso 9 — header con la direccion sin numeracion",
     "file": "TC-B2C144-D-042-p09-header-con-la-direccion-sin-numeracion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario escribe 2 caracteres en el buscador y hace clic en \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\".\n7. El usuario completa Región, Comuna y Dirección con {DIRECCION_SIN_NUMERO}, deja Numeración vacío y hace clic en \"Continuar con detalle de la dirección\".\n8. El usuario confirma la dirección (B2C-99) y valida el código OTP (B2C-125).\n9. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_NUMERO}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La dirección queda seteada con el departamento {DEPTO_001} y el header muestra la dirección según el formato definido en Figma, la próxima ventana horaria disponible y el chip de precio.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-043",
   "name": "Verificar que una dirección con departamento se setea y el header la muestra con su ventana y chip [Desktop] [Logueado]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {DEPTO_001}, {DIRECCION_CON_DEPTO}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {DIRECCION_CON_DEPTO} tiene cobertura y SLAs",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_CON_DEPTO}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. En el detalle de la dirección, el usuario completa el departamento con {DEPTO_001} y confirma la dirección (B2C-99).\n7. El usuario valida el código OTP (B2C-125).\n8. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_CON_DEPTO}\n- {DEPTO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El Store Locator del header muestra \"Elige una forma de entrega\" (B2C-138), sin ventana horaria ni chip de precio, y no se registra ninguna llamada a GetShippingSimulationsFromJanis.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-045",
   "name": "Verificar que un invitado sin dirección seteada ve Elige una forma de entrega en el header sin ventana ni chip [Desktop] [Guest]",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)\n- El carro está vacío\n- El usuario esta en una sesión nueva\n- Borrar caché del browser",
   "screenshots": [
    {
     "caption": "Paso 3 — header sin direccion",
     "file": "TC-B2C144-D-045-p03-header-sin-direccion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se deriva al flujo B2C-127 (modal \"Por ahora no hay horarios disponibles\") y {DIRECCION_SIN_SLA} no se setea: el header sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-041",
   "name": "Verificar que un logueado que setea una dirección sin horarios no la setea y se deriva al flujo sin horarios [Mobile] [Logueado]",
   "observation": "Falta data: {DIRECCION_SIN_SLA} (Av Libertador Gral Bernardo O'Higgins 1072, Maipú) sí tiene cobertura y horarios en el ambiente (Janis: available/covered, ventana 2026-11-03T12:00:00.000Z; header «Avenida Libertador … Desde: Mar 03/11, 09:00 hrs. $2.990 0 Suscríbete a Of Acción: proveer data que cumpla la precondición del caso (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_SLA} tiene cobertura y no tiene SLAs disponibles",
   "screenshots": [
    {
     "caption": "Paso 3 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-M-041-p03-modal-elige-tu-metodo-de-entrega.png"
    },
    {
     "caption": "Paso 6 — resultado de consultar la direccion",
     "file": "TC-B2C144-M-041-p06-resultado-de-consultar-la-direccion.png"
    },
    {
     "caption": "Paso 7 — header",
     "file": "TC-B2C144-M-041-p07-header.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_SLA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y toca \"Continuar\".\n8. El usuario revisa el modal que se muestra y el header, sin tomar ninguna opción.",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_SLA}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La dirección queda seteada y el header muestra la calle con \"S/N\" en lugar de la numeración, la próxima ventana horaria disponible y el chip de precio.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-042",
   "name": "Verificar que una dirección sin numeración se setea y el header la muestra con S/N, ventana y chip [Mobile] [Logueado]",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_NUMERO} (Región, Comuna y Calle, sin numeración) tiene cobertura y SLAs",
   "screenshots": [
    {
     "caption": "Paso 6 — formulario direccion manual",
     "file": "TC-B2C144-M-042-p06-formulario-direccion-manual.png"
    },
    {
     "caption": "Paso 7 — formulario completo numeracion vacia",
     "file": "TC-B2C144-M-042-p07-formulario-completo-numeracion-vacia.png"
    },
    {
     "caption": "Paso 9 — header con la direccion sin numeracion",
     "file": "TC-B2C144-M-042-p09-header-con-la-direccion-sin-numeracion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario escribe 2 caracteres en el buscador y toca \"Agregar\".\n6. El sistema muestra el formulario \"Dirección manual\".\n7. El usuario completa Región, Comuna y Dirección con {DIRECCION_SIN_NUMERO}, deja Numeración vacío y toca \"Continuar con detalle de la dirección\".\n8. El usuario confirma la dirección (B2C-99) y valida el código OTP (B2C-125).\n9. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_NUMERO}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La dirección queda seteada con el departamento {DEPTO_001} y el header muestra la dirección según el formato definido en Figma, la próxima ventana horaria disponible y el chip de precio.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-043",
   "name": "Verificar que una dirección con departamento se setea y el header la muestra con su ventana y chip [Mobile] [Logueado]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {DEPTO_001}, {DIRECCION_CON_DEPTO}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {DIRECCION_CON_DEPTO} tiene cobertura y SLAs",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_CON_DEPTO}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. En el detalle de la dirección, el usuario completa el departamento con {DEPTO_001} y confirma la dirección (B2C-99).\n7. El usuario valida el código OTP (B2C-125).\n8. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_CON_DEPTO}\n- {DEPTO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El Store Locator del header muestra \"Elige una forma de entrega\" (B2C-138), sin ventana horaria ni chip de precio, y no se registra ninguna llamada a GetShippingSimulationsFromJanis.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-045",
   "name": "Verificar que un invitado sin dirección seteada ve Elige una forma de entrega en el header sin ventana ni chip [Mobile] [Guest]",
   "observation": "Falta data: token(s) en TBD en el Excel de data {JANIS_API_ENDPOINT}. Acción: cargar el valor en el Excel de data (quien administra la data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sin método de entrega seleccionado (ventana de incógnito)\n- El carro está vacío\n- El usuario esta en una sesión nueva\n- Borrar caché del browser",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {JANIS_API_ENDPOINT}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El chip del header muestra \"Despacho gratis\" en lugar del precio.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-012",
   "name": "Verificar que un cliente Club sobre el umbral ve Despacho gratis en el header [Desktop] [Logueado]",
   "observation": "Falta data: {COMPRADOR_CLUB_USER} resuelve a daunuruco+comprador, la misma cuenta estándar de {USER_AUTH_001}, sin señal de membresía Club en el ambiente. Con el carro sobre el umbral el header muestra $2.990 y no «Despacho gratis». Acción: declarar una cuenta Club real (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}\n- Despacho a {DIRECCION_DESPACHO_001}\n- El total del carro supera {UMBRAL_DESPACHO_GRATIS_CLUB}",
   "screenshots": [
    {
     "caption": "Paso 2 — header con el chip sobre el umbral",
     "file": "TC-B2C144-D-012-p02-header-con-el-chip-sobre-el-umbral.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD\n- {COMPRADOR_CLUB_USER} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El chip cambia a \"Despacho gratis\" al superar el umbral y vuelve al costo en pesos al quedar bajo él, sin recargar la página.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-013",
   "name": "Verificar que al cruzar el umbral en ambos sentidos el chip cambia sin recargar [Desktop] [Logueado]",
   "observation": "Falta data: {COMPRADOR_CLUB_USER} resuelve a daunuruco+comprador, la misma cuenta estándar de {USER_AUTH_001}, sin señal de membresía Club en el ambiente. Con el carro sobre el umbral el header muestra $2.990 y no «Despacho gratis». Acción: declarar una cuenta Club real (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}\n- Despacho a {DIRECCION_DESPACHO_001}\n- El total del carro es menor a {UMBRAL_DESPACHO_GRATIS_CLUB}",
   "screenshots": [
    {
     "caption": "Paso 2 — chip con el carro bajo el umbral",
     "file": "TC-B2C144-D-013-p02-chip-con-el-carro-bajo-el-umbral.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.\n3. El usuario agrega unidades de {SKU_VALID_001} hasta superar {UMBRAL_DESPACHO_GRATIS_CLUB}.\n4. El usuario quita unidades hasta quedar bajo {UMBRAL_DESPACHO_GRATIS_CLUB}.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD\n- {COMPRADOR_CLUB_USER} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El chip del header muestra \"Despacho gratis\" en lugar del precio.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-012",
   "name": "Verificar que un cliente Club sobre el umbral ve Despacho gratis en el header [Mobile] [Logueado]",
   "observation": "Falta data: {COMPRADOR_CLUB_USER} resuelve a daunuruco+comprador, la misma cuenta estándar de {USER_AUTH_001}, sin señal de membresía Club en el ambiente. Con el carro sobre el umbral el header muestra $2.990 y no «Despacho gratis». Acción: declarar una cuenta Club real (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}\n- Despacho a {DIRECCION_DESPACHO_001}\n- El total del carro supera {UMBRAL_DESPACHO_GRATIS_CLUB}",
   "screenshots": [
    {
     "caption": "Paso 2 — header con el chip sobre el umbral",
     "file": "TC-B2C144-M-012-p02-header-con-el-chip-sobre-el-umbral.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD\n- {COMPRADOR_CLUB_USER} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El chip cambia a \"Despacho gratis\" al superar el umbral y vuelve al costo en pesos al quedar bajo él, sin recargar la página.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-013",
   "name": "Verificar que al cruzar el umbral en ambos sentidos el chip cambia sin recargar [Mobile] [Logueado]",
   "observation": "Falta data: {COMPRADOR_CLUB_USER} resuelve a daunuruco+comprador, la misma cuenta estándar de {USER_AUTH_001}, sin señal de membresía Club en el ambiente. Con el carro sobre el umbral el header muestra $2.990 y no «Despacho gratis». Acción: declarar una cuenta Club real (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {COMPRADOR_CLUB_USER}\n- Despacho a {DIRECCION_DESPACHO_001}\n- El total del carro es menor a {UMBRAL_DESPACHO_GRATIS_CLUB}",
   "screenshots": [
    {
     "caption": "Paso 2 — chip con el carro bajo el umbral",
     "file": "TC-B2C144-M-013-p02-chip-con-el-carro-bajo-el-umbral.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario revisa el Store Locator del header.\n3. El usuario agrega unidades de {SKU_VALID_001} hasta superar {UMBRAL_DESPACHO_GRATIS_CLUB}.\n4. El usuario quita unidades hasta quedar bajo {UMBRAL_DESPACHO_GRATIS_CLUB}.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {SKU_VALID_001} = 000000000000675191-UN\n- {UMBRAL_DESPACHO_GRATIS_CLUB} = TBD\n- {COMPRADOR_CLUB_USER} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Sin loader a pantalla completa, el header muestra {DIRECCION_DESPACHO_001} con la próxima ventana vigente actualizada.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-018",
   "name": "Verificar que al iniciar sesión el header muestra la ventana vigente de la dirección guardada [Desktop] [Logueado]",
   "observation": "Causa: la comprobación automática del loader a pantalla completa durante el inicio de sesión no distingue el loader propio del login del loader del header; detectó un loader y no hay evidencia visual para decidir. El header sí muestra la ventana vigente de la dirección. Acción requerida: revisión manual del inicio de sesión.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección {DIRECCION_DESPACHO_001} está persistida en el perfil y su ventana anterior ya no está vigente",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario inicia sesión.\n2. El usuario revisa el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Sin loader a pantalla completa, el header muestra {DIRECCION_DESPACHO_001} con la próxima ventana vigente actualizada.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-018",
   "name": "Verificar que al iniciar sesión el header muestra la ventana vigente de la dirección guardada [Mobile] [Logueado]",
   "observation": "Causa: la comprobación automática del loader a pantalla completa durante el inicio de sesión no distingue el loader propio del login del loader del header; detectó un loader y no hay evidencia visual para decidir. El header sí muestra la ventana vigente de la dirección. Acción requerida: revisión manual del inicio de sesión.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección {DIRECCION_DESPACHO_001} está persistida en el perfil y su ventana anterior ya no está vigente",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario inicia sesión.\n2. El usuario revisa el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra la dirección con la etiqueta \"Despacho sin cobertura\".",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-020",
   "name": "Verificar que si al iniciar sesión se perdió la cobertura el header pasa a sin cobertura [Desktop] [Logueado]",
   "observation": "Falta data: la dirección activa de la cuenta es Casa y no {DIRECCION_SIN_COBERTURA} (T-551, Futrono); el header no puede mostrar «Despacho sin cobertura» sin que esa dirección sea la persistida. Acción: dejar {DIRECCION_SIN_COBERTURA} como dirección persistida de la cuenta (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección persistida en el perfil es {DIRECCION_SIN_COBERTURA}, que tenía cobertura en la sesión anterior",
   "screenshots": [
    {
     "caption": "Paso 2 — direcciones guardadas de la cuenta",
     "file": "TC-B2C144-D-020-p02-direcciones-guardadas-de-la-cuenta.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario inicia sesión.\n2. El usuario revisa el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_SIN_COBERTURA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra la dirección con la etiqueta \"Despacho sin cobertura\".",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-020",
   "name": "Verificar que si al iniciar sesión se perdió la cobertura el header pasa a sin cobertura [Mobile] [Logueado]",
   "observation": "Falta data: la dirección activa de la cuenta es Casa y no {DIRECCION_SIN_COBERTURA} (T-551, Futrono); el header no puede mostrar «Despacho sin cobertura» sin que esa dirección sea la persistida. Acción: dejar {DIRECCION_SIN_COBERTURA} como dirección persistida de la cuenta (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección persistida en el perfil es {DIRECCION_SIN_COBERTURA}, que tenía cobertura en la sesión anterior",
   "screenshots": [
    {
     "caption": "Paso 2 — direcciones guardadas de la cuenta",
     "file": "TC-B2C144-M-020-p02-direcciones-guardadas-de-la-cuenta.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario inicia sesión.\n2. El usuario revisa el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_SIN_COBERTURA} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se deriva al flujo B2C-123 (modal \"Aún no llegamos a esta dirección\") y {DIRECCION_SIN_COBERTURA} no se setea: el header sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-040",
   "name": "Verificar que un logueado que setea una dirección sin cobertura no la setea y se deriva al flujo sin cobertura [Desktop] [Logueado]",
   "observation": "Causa: al elegir {DIRECCION_SIN_COBERTURA} el sitio no mostró «Autenticación requerida» (paso previo del caso) y no se pudo continuar; sin veredicto del resultado final (modal «Aún no llegamos» y dirección sin setear). Acción requerida: revisión manual del flujo.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_COBERTURA} no tiene cobertura",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-D-040-p04-modal-elige-tu-metodo-de-entrega.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA}, la selecciona de las sugerencias y hace clic en \"Confirmar dirección\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y hace clic en \"Continuar\".\n8. El usuario revisa el modal que se muestra y el header, sin tomar ninguna opción.",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_COBERTURA}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se deriva al flujo B2C-123 (modal \"Aún no llegamos a esta dirección\") y {DIRECCION_SIN_COBERTURA} no se setea: el header sigue mostrando {DIRECCION_DESPACHO_001} con su ventana y chip.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-040",
   "name": "Verificar que un logueado que setea una dirección sin cobertura no la setea y se deriva al flujo sin cobertura [Mobile] [Logueado]",
   "observation": "Causa: al elegir {DIRECCION_SIN_COBERTURA} el sitio no mostró «Autenticación requerida» (paso previo del caso) y no se pudo continuar; sin veredicto del resultado final (modal «Aún no llegamos» y dirección sin setear). Acción requerida: revisión manual del flujo.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_COBERTURA} no tiene cobertura",
   "screenshots": [
    {
     "caption": "Paso 4 — modal elige tu metodo de entrega",
     "file": "TC-B2C144-M-040-p04-modal-elige-tu-metodo-de-entrega.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario ingresa la dirección {DIRECCION_SIN_COBERTURA}, la selecciona de las sugerencias y toca \"Confirmar dirección\".\n6. El sistema muestra el modal \"Autenticación requerida\" (B2C-125).\n7. El usuario ingresa el código OTP recibido y toca \"Continuar\".\n8. El usuario revisa el modal que se muestra y el header, sin tomar ninguna opción.",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {DIRECCION_DESPACHO_001}\n- {DIRECCION_SIN_COBERTURA}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La dirección queda seteada sin pedir OTP y el header muestra {DIRECCION_DESPACHO_001} sin departamento ni coma o separador vacío, con la próxima ventana horaria disponible y el chip de precio.",
   "form_factor": "desktop",
   "id": "TC-B2C144-D-044",
   "name": "Verificar que una dirección sin departamento se muestra en el header sin complemento ni coma vacía [Desktop] [Logueado]",
   "observation": "Causa: la prueba agotó el tiempo de 8 min al asegurar la dirección activa, en 2 de 2 intentos; sin veredicto del producto. Acción requerida: repetir el caso con el ambiente estable.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es {DIRECCION_OTRA_TIENDA}\n- {DIRECCION_DESPACHO_001} es una dirección guardada de la cuenta, sin departamento, con cobertura y SLAs",
   "screenshots": [
    {
     "caption": "Paso 1 — header con la direccion activa previa",
     "file": "TC-B2C144-D-044-p01-header-con-la-direccion-activa-previa.png"
    },
    {
     "caption": "Paso 4 — direcciones guardadas",
     "file": "TC-B2C144-D-044-p04-direcciones-guardadas.png"
    },
    {
     "caption": "Paso 5 — direccion guardada elegida",
     "file": "TC-B2C144-D-044-p05-direccion-guardada-elegida.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario hace clic en el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario elige la dirección guardada {DIRECCION_DESPACHO_001} y hace clic en \"Confirmar\".\n6. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {DIRECCION_OTRA_TIENDA}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La dirección queda seteada sin pedir OTP y el header muestra {DIRECCION_DESPACHO_001} sin departamento ni coma o separador vacío, con la próxima ventana horaria disponible y el chip de precio.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-044",
   "name": "Verificar que una dirección sin departamento se muestra en el header sin complemento ni coma vacía [Mobile] [Logueado]",
   "observation": "Causa: la prueba agotó el tiempo de 8 min al asegurar la dirección activa, en 2 de 2 intentos; sin veredicto del producto. Acción requerida: repetir el caso con el ambiente estable.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Home\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Acceso a la casilla de correo de la cuenta para leer el código OTP\n- El carro está vacío\n- La dirección activa es {DIRECCION_OTRA_TIENDA}\n- {DIRECCION_DESPACHO_001} es una dirección guardada de la cuenta, sin departamento, con cobertura y SLAs",
   "screenshots": [
    {
     "caption": "Paso 1 — header con la direccion activa previa",
     "file": "TC-B2C144-M-044-p01-header-con-la-direccion-activa-previa.png"
    },
    {
     "caption": "Paso 4 — direcciones guardadas",
     "file": "TC-B2C144-M-044-p04-direcciones-guardadas.png"
    },
    {
     "caption": "Paso 5 — direccion guardada elegida",
     "file": "TC-B2C144-M-044-p05-direccion-guardada-elegida.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El sistema carga el Home.\n3. El usuario toca el Store Locator del header.\n4. El sistema abre el modal \"Elige tu método de entrega\" con la pestaña Despacho a domicilio.\n5. El usuario elige la dirección guardada {DIRECCION_DESPACHO_001} y toca \"Confirmar\".\n6. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL}\n- {USER_AUTH_001}\n- {DIRECCION_OTRA_TIENDA}\n- {DIRECCION_DESPACHO_001}",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra {DIRECCION_DESPACHO_001} con su ventana vigente tras volver a iniciar sesión.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-003",
   "name": "Verificar que la dirección de un logueado persiste entre sesiones [Mobile] [Logueado]",
   "observation": "Causa: la prueba agotó el tiempo de 8 min al asegurar la dirección activa, en 2 de 2 intentos; sin veredicto del producto. Acción requerida: repetir el caso con el ambiente estable.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- La dirección {DIRECCION_DESPACHO_001} fue seteada con esta cuenta en una sesión anterior",
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado",
   "steps": "1. El usuario cierra sesión.\n2. El usuario inicia sesión nuevamente con la misma cuenta.\n3. El usuario ingresa a {BASE_URL}.\n4. El usuario revisa el Store Locator del header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El header muestra {DIRECCION_DESPACHO_001} con su próxima ventana y chip.",
   "form_factor": "mobile",
   "id": "TC-B2C144-M-024",
   "name": "Verificar que un invitado sin dirección que inicia sesión carga la última dirección del perfil [Mobile] [Guest]",
   "observation": "Falta data: la última dirección del perfil de la cuenta es «Las Condes S/N» y no {DIRECCION_DESPACHO_001} (Calle Uno 23); la precondición del caso no se cumple con el estado actual de la cuenta. Acción: dejar Calle Uno 23 como última dirección del perfil (quien administra el Excel de data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado sin dirección seteada\n- La última dirección usada de la cuenta {USER_AUTH_001} es {DIRECCION_DESPACHO_001}",
   "screenshots": [
    {
     "caption": "Paso 1 — home del invitado sin direccion",
     "file": "TC-B2C144-M-024-p01-home-del-invitado-sin-direccion.png"
    }
   ],
   "spec": "tests/B2C-144.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {BASE_URL}.\n2. El usuario inicia sesión con la cuenta {USER_AUTH_001}.\n3. El usuario revisa el header.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {DIRECCION_DESPACHO_001} = Casa\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  }
 ]
}
-->
