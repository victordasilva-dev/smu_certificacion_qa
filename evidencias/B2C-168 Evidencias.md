# B2C-168 - Fusión de carrito al loguearse - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-168 |
| Última actualización | 2026-10-15 |
| Ejecutado por | Victor Chirinos |
| Ambiente | Storefront Unimarc DEV (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/), Chromium Desktop 1440x900 / WebKit Mobile 390x844 |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-168 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 19 |
| Aprobado | 2 |
| **Total** | **21** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-15 | 21 | TC-B2C168-D-001, TC-B2C168-D-002, TC-B2C168-D-003, TC-B2C168-D-006, TC-B2C168-D-008, TC-B2C168-D-009, TC-B2C168-D-010, TC-B2C168-D-011, TC-B2C168-D-012, TC-B2C168-D-015, TC-B2C168-M-001, TC-B2C168-M-002, TC-B2C168-M-003, TC-B2C168-M-006, TC-B2C168-M-008, TC-B2C168-M-009, TC-B2C168-M-010, TC-B2C168-M-011, TC-B2C168-M-012, TC-B2C168-M-014, TC-B2C168-M-015 |

## Detalle por caso de prueba

### TC-B2C168-D-001 - Verificar que Inicia sesión o regístrate desde el carro abre el modal de inicio de sesión [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1

**Data utilizada**

{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_VALID_001}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Inicia sesión o regístrate".

**Resultado esperado**

Se muestra el modal de inicio de sesión (o registro) y no se avanza al checkout.

**Resultado obtenido**

Bajo el mínimo: solo 'Mínimo de compra $20.000'. Sobre el mínimo: 'Continuar con la entrega' abre el login.

**Observación**

Causa: el carro de invitado de la fila ({SKU_VALID_001} × 1 = $2.490) queda bajo el mínimo de compra de $20.000: con él, el carro muestra solo 'Mínimo de compra $20.000' deshabilitado y ningún botón para iniciar sesión, así que no se llega al paso 3. Sobre el mínimo (probado con 9 unidades) el botón no dice 'Inicia sesión o regístrate' (CA1) sino 'Continuar con la entrega', y como invitado abre el modal '¡Hola, ingresa aquí!'. Acción: declarar un carro de invitado con subtotal sobre $20.000 (y confirmar con negocio el texto del botón).

**Evidencia**

![TC B2C168 D 001 x01 carro sobre el minimo continuar con la entrega](<B2C-168 Evidencias/TC-B2C168-D-001-x01-carro-sobre-el-minimo-continuar-con-la-entrega.png>)

![TC B2C168 D 001 x02 login tras continuar con la entrega](<B2C-168 Evidencias/TC-B2C168-D-001-x02-login-tras-continuar-con-la-entrega.png>)

---

### TC-B2C168-D-002 - Verificar que el login desde el carro fusiona, muestra los sugeridos y lleva a Datos de entrega [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- La cuenta tiene productos My Usuals o favoritos
- Método de entrega activo con subtotal sobre el mínimo

**Data utilizada**

{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_VALID_001}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Inicia sesión o regístrate".
4. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
5. El sistema fusiona los carros y muestra el modal "¡Que no se te olviden!".
6. El usuario hace clic en "Continuar".

**Resultado esperado**

Tras la fusión se muestra el modal "¡Que no se te olviden!" y al presionar "Continuar" se muestra la página "Datos de entrega".

**Resultado obtenido**

Bajo el mínimo: solo 'Mínimo de compra $20.000'. Sobre el mínimo: 'Continuar con la entrega' abre el login.

**Observación**

Causa: el carro de invitado de la fila ({SKU_VALID_001} × 1 = $2.490) queda bajo el mínimo de compra de $20.000: con él, el carro muestra solo 'Mínimo de compra $20.000' deshabilitado y ningún botón para iniciar sesión, así que no se llega al paso 3. Sobre el mínimo (probado con 9 unidades) el botón no dice 'Inicia sesión o regístrate' (CA1) sino 'Continuar con la entrega', y como invitado abre el modal '¡Hola, ingresa aquí!'. Además la precondición pide 'subtotal sobre el mínimo', lo que contradice {SKU_VALID_001} × 1. Acción: declarar un carro de invitado con subtotal sobre $20.000 (y confirmar con negocio el texto del botón).

**Evidencia**

![TC B2C168 D 002 x01 carro sobre el minimo continuar con la entrega](<B2C-168 Evidencias/TC-B2C168-D-002-x01-carro-sobre-el-minimo-continuar-con-la-entrega.png>)

![TC B2C168 D 002 x02 login tras continuar con la entrega](<B2C-168 Evidencias/TC-B2C168-D-002-x02-login-tras-continuar-con-la-entrega.png>)

---

### TC-B2C168-D-003 - Verificar que un carro invitado con productos pasa completo a un carro logueado vacío [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2 y 000000000400254005-UN x 1
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro logueado contiene 000000000000675191-UN x 2 y 000000000400254005-UN x 1, igual al carro invitado.

**Resultado obtenido**

PDP de 000000000400254005-UN con Calle Uno 23, La Florida: 'Pronto disponible', sin 'Agregar'.

**Observación**

Causa: {SKU_UNITARIO} (000000000400254005-UN, Picado Nestlé Naturnes) no tiene stock para {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida): la PDP muestra 'Pronto disponible' y 'Ver similares', sin 'Agregar' (verificado 2026-10-15), así que no se puede armar el carro de invitado de la fila. Además {SKU_UNITARIO} es el mismo SKU que {SKU_NO_DISPONIBLE}. Acción: cambiar {SKU_UNITARIO} por un SKU con stock en la tienda de {DIRECCION_DESPACHO_001}.

**Evidencia**

![TC B2C168 D 003 x01 pdp sku unitario pronto disponible](<B2C-168 Evidencias/TC-B2C168-D-003-x01-pdp-sku-unitario-pronto-disponible.png>)

---

### TC-B2C168-D-006 - Verificar que productos distintos de ambos carros se suman sin modificar cantidades [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 2
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000401693004-UN x 3 (preparado iniciando sesión previamente y cerrando sesión)
- Método de entrega activo

**Data utilizada**

{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro contiene 000000000000675191-UN x 1, 000000000400254005-UN x 2, 000000000000038061-UN x 1 y 000000000401693004-UN x 3.

**Resultado obtenido**

PDP de 000000000400254005-UN con Calle Uno 23, La Florida: 'Pronto disponible', sin 'Agregar'.

**Observación**

Causa: {SKU_UNITARIO} (000000000400254005-UN, Picado Nestlé Naturnes) no tiene stock para {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida): la PDP muestra 'Pronto disponible' y 'Ver similares', sin 'Agregar' (verificado 2026-10-15), así que no se puede armar el carro de invitado de la fila. Además {SKU_UNITARIO} es el mismo SKU que {SKU_NO_DISPONIBLE}. Acción: cambiar {SKU_UNITARIO} por un SKU con stock en la tienda de {DIRECCION_DESPACHO_001}.

**Evidencia**

![TC B2C168 D 006 x01 pdp sku unitario pronto disponible](<B2C-168 Evidencias/TC-B2C168-D-006-x01-pdp-sku-unitario-pronto-disponible.png>)

---

### TC-B2C168-D-008 - Verificar que un producto duplicado queda con la cantidad del carro invitado [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000675191-UN x 5 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

000000000000675191-UN queda con cantidad 2 (la del invitado), no 5 ni 7.

**Resultado obtenido**

Carro fusionado con 000000000000675191-UN × 2 (la cantidad del invitado), sin otros productos.

**Observación**

Precondición armada por la UI: el carro guardado de {USER_AUTH_001} se dejó con {SKU_VALID_001} × 5 usando la sesión de la cuenta en otro contexto del navegador (equivale a iniciar sesión, armar el carro y cerrar sesión). Invitado con {DIRECCION_DESPACHO_001} (sugerencia de Google 'Calle Uno 23, La Florida') y {SKU_VALID_001} × 2. Login con correo + OTP desde 'Ingresa aquí' (más el OTP de 'Autenticación requerida'). Tras la fusión el carro tiene solo {SKU_VALID_001} con 2 un. (Subtotal $4.980).

**Evidencia**

![Paso 0 — carro de invitado con sku valid 001 2](<B2C-168 Evidencias/TC-B2C168-D-008-p00-carro-de-invitado-con-sku-valid-001-2.png>)

![Paso 1 — sesion iniciada](<B2C-168 Evidencias/TC-B2C168-D-008-p01-sesion-iniciada.png>)

![Paso 4 — carro tras la fusion](<B2C-168 Evidencias/TC-B2C168-D-008-p04-carro-tras-la-fusion.png>)

![Estado final](<B2C-168 Evidencias/TC-B2C168-D-008.png>)

---

### TC-B2C168-D-009 - Verificar que con duplicados y distintos el carro fusionado aplica la regla a cada producto [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2, 000000000400254005-UN x 1 y 000000000000038061-UN x 3
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000400254005-UN x 4, 000000000000038061-UN x 1 y 000000000401693004-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro queda con 000000000000675191-UN x 2, 000000000400254005-UN x 1, 000000000000038061-UN x 3 y 000000000401693004-UN x 2.

**Resultado obtenido**

PDP de 000000000400254005-UN con Calle Uno 23, La Florida: 'Pronto disponible', sin 'Agregar'.

**Observación**

Causa: {SKU_UNITARIO} (000000000400254005-UN, Picado Nestlé Naturnes) no tiene stock para {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida): la PDP muestra 'Pronto disponible' y 'Ver similares', sin 'Agregar' (verificado 2026-10-15), así que no se puede armar el carro de invitado de la fila. Además {SKU_UNITARIO} es el mismo SKU que {SKU_NO_DISPONIBLE}. Acción: cambiar {SKU_UNITARIO} por un SKU con stock en la tienda de {DIRECCION_DESPACHO_001}.

**Evidencia**

![TC B2C168 D 009 x01 pdp sku unitario pronto disponible](<B2C-168 Evidencias/TC-B2C168-D-009-x01-pdp-sku-unitario-pronto-disponible.png>)

---

### TC-B2C168-D-010 - Verificar que un producto del carro invitado sin stock se agrega marcado como no disponible [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 1
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

{BASE_URL}, {CART_URL}, {SKU_NO_DISPONIBLE}, {SKU_VALID_001}, {TIENDA_SIN_STOCK}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

000000000400254005-UN aparece en la sección de no disponibles del carro fusionado y 000000000000675191-UN en disponibles.

**Resultado obtenido**

PDP de 000000000400254005-UN con 'Unimarc Los Leones' activa: precio y 'Agregar'.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) sigue con stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa la PDP muestra $1.970 y 'Agregar' (re-verificado 2026-10-15). Acción: declarar en {SKU_NO_DISPONIBLE} un SKU sin stock en {TIENDA_SIN_STOCK} (o cambiar la tienda).

**Evidencia**

![TC B2C168 D 010 x01 pdp sku no disponible con stock en los leones](<B2C-168 Evidencias/TC-B2C168-D-010-x01-pdp-sku-no-disponible-con-stock-en-los-leones.png>)

---

### TC-B2C168-D-011 - Verificar que un producto del carro logueado sin stock permanece como no disponible [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

{BASE_URL}, {CART_URL}, {SKU_NOMBRE_CORTO}, {SKU_NO_DISPONIBLE}, {SKU_VALID_001}, {TIENDA_SIN_STOCK}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

000000000400254005-UN permanece como no disponible y 000000000000038061-UN y 000000000000675191-UN quedan disponibles.

**Resultado obtenido**

PDP de 000000000400254005-UN con 'Unimarc Los Leones' activa: precio y 'Agregar'.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) sigue con stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa la PDP muestra $1.970 y 'Agregar' (re-verificado 2026-10-15). Acción: declarar en {SKU_NO_DISPONIBLE} un SKU sin stock en {TIENDA_SIN_STOCK} (o cambiar la tienda).

**Evidencia**

![TC B2C168 D 011 x01 pdp sku no disponible con stock en los leones](<B2C-168 Evidencias/TC-B2C168-D-011-x01-pdp-sku-no-disponible-con-stock-en-los-leones.png>)

---

### TC-B2C168-D-012 - Verificar que tras la fusión se recalculan precios, promociones y subtotal con Unipay [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000641229002-UN x 1 y 000000000000661945-UN x 1
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000675191-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL}, {CART_URL}, {SKU_UNIPAY_001}, {SKU_VALID_001}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.
5. El usuario revisa precios, promociones y el resumen de totales.

**Resultado esperado**

Cada producto muestra el precio de su promoción vigente y el total y el "Subtotal con Unipay" se calculan sobre todos los productos fusionados.

**Resultado obtenido**

No ejecutado: data no declarada.

**Observación**

Causa: la precondición arma el carro de invitado con {SKU_PROM_NxM} × 1, pero {SKU_PROM_NxM} no está en el Test data de la fila (y tampoco declara dirección ni tienda para el invitado). {SKU_UNIPAY_001} ya tiene valor (000000000000661945-UN). Acción: declarar {SKU_PROM_NxM} y la dirección del invitado ({DIRECCION_DESPACHO_001}) en la fila y re-ejecutar este CP.

---

### TC-B2C168-D-015 - Verificar que el merge desde el minicarro invitado fusiona el carro y el minicarro logueado refleja el resultado [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Minicarro (header)
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 2
- La cuenta vhchirinos+comprador@avatar-global.com tiene el carro logueado con 000000000000666200-UN x 1 (producto distinto al invitado)

**Data utilizada**

{BASE_URL}, {DIRECCION_DESPACHO_001}, {SKU_COMBINA_PROMO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}

**Pasos ejecutados**

1. Como invitado, agregar 000000000000675191-UN x 1 y 000000000400254005-UN x 2 al carro.
2. Abrir el minicarro desde el ícono del header (sin navegar al carro full-page).
3. Verificar que el minicarro invitado muestra los 2 productos.
4. Desde cualquier página, iniciar sesión con vhchirinos+comprador@avatar-global.com (cuenta que tiene 000000000000666200-UN x 1 en su carro logueado).
5. Una vez logueado, abrir el minicarro desde el ícono del header.
6. Verificar que el minicarro logueado contiene los 3 productos: 000000000000675191-UN x 1, 000000000400254005-UN x 2 y 000000000000666200-UN x 1.
7. Verificar que las cantidades de cada producto son correctas (regla CA5: productos distintos, sin modificación de cantidades).
8. Verificar que el subtotal del minicarro refleja el carro fusionado completo.

**Resultado esperado**

El minicarro logueado muestra los 3 productos fusionados: 000000000000675191-UN x 1, 000000000400254005-UN x 2 (del invitado) y 000000000000666200-UN x 1 (del logueado). Cantidades sin modificación. El subtotal refleja el total del carro fusionado. El minicarro se actualiza en la misma sesión sin recargar la página.

**Resultado obtenido**

PDP de 000000000400254005-UN con Calle Uno 23, La Florida: 'Pronto disponible', sin 'Agregar'.

**Observación**

Causa: {SKU_UNITARIO} (000000000400254005-UN, Picado Nestlé Naturnes) no tiene stock para {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida): la PDP muestra 'Pronto disponible' y 'Ver similares', sin 'Agregar' (verificado 2026-10-15), así que no se puede armar el carro de invitado de la fila. Además {SKU_UNITARIO} es el mismo SKU que {SKU_NO_DISPONIBLE}. Acción: cambiar {SKU_UNITARIO} por un SKU con stock en la tienda de {DIRECCION_DESPACHO_001}.

**Evidencia**

![TC B2C168 D 015 x01 pdp sku unitario pronto disponible](<B2C-168 Evidencias/TC-B2C168-D-015-x01-pdp-sku-unitario-pronto-disponible.png>)

---

### TC-B2C168-M-001 - Verificar que Inicia sesión o regístrate desde el carro abre el modal de inicio de sesión [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1

**Data utilizada**

{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_VALID_001}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Inicia sesión o regístrate".

**Resultado esperado**

Se muestra el modal de inicio de sesión (o registro) y no se avanza al checkout.

**Resultado obtenido**

Bajo el mínimo: solo 'Mínimo de compra $20.000'. Sobre el mínimo: 'Continuar con la entrega' abre el login (captura de la exploración en Desktop 1440x900).

**Observación**

Causa: el carro de invitado de la fila ({SKU_VALID_001} × 1 = $2.490) queda bajo el mínimo de compra de $20.000: con él, el carro muestra solo 'Mínimo de compra $20.000' deshabilitado y ningún botón para iniciar sesión, así que no se llega al paso 3. Sobre el mínimo (probado con 9 unidades) el botón no dice 'Inicia sesión o regístrate' (CA1) sino 'Continuar con la entrega', y como invitado abre el modal '¡Hola, ingresa aquí!'. Acción: declarar un carro de invitado con subtotal sobre $20.000 (y confirmar con negocio el texto del botón).

**Evidencia**

![TC B2C168 M 001 x01 carro sobre el minimo continuar con la entrega](<B2C-168 Evidencias/TC-B2C168-M-001-x01-carro-sobre-el-minimo-continuar-con-la-entrega.png>)

![TC B2C168 M 001 x02 login tras continuar con la entrega](<B2C-168 Evidencias/TC-B2C168-M-001-x02-login-tras-continuar-con-la-entrega.png>)

---

### TC-B2C168-M-002 - Verificar que el login desde el carro fusiona, muestra los sugeridos y lleva a Datos de entrega [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- La cuenta tiene productos My Usuals o favoritos
- Método de entrega activo con subtotal sobre el mínimo

**Data utilizada**

{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_VALID_001}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Inicia sesión o regístrate".
4. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
5. El sistema fusiona los carros y muestra el modal "¡Que no se te olviden!".
6. El usuario toca "Continuar".

**Resultado esperado**

Tras la fusión se muestra el modal "¡Que no se te olviden!" y al presionar "Continuar" se muestra la página "Datos de entrega".

**Resultado obtenido**

Bajo el mínimo: solo 'Mínimo de compra $20.000'. Sobre el mínimo: 'Continuar con la entrega' abre el login (captura de la exploración en Desktop 1440x900).

**Observación**

Causa: el carro de invitado de la fila ({SKU_VALID_001} × 1 = $2.490) queda bajo el mínimo de compra de $20.000: con él, el carro muestra solo 'Mínimo de compra $20.000' deshabilitado y ningún botón para iniciar sesión, así que no se llega al paso 3. Sobre el mínimo (probado con 9 unidades) el botón no dice 'Inicia sesión o regístrate' (CA1) sino 'Continuar con la entrega', y como invitado abre el modal '¡Hola, ingresa aquí!'. Además la precondición pide 'subtotal sobre el mínimo', lo que contradice {SKU_VALID_001} × 1. Acción: declarar un carro de invitado con subtotal sobre $20.000 (y confirmar con negocio el texto del botón).

**Evidencia**

![TC B2C168 M 002 x01 carro sobre el minimo continuar con la entrega](<B2C-168 Evidencias/TC-B2C168-M-002-x01-carro-sobre-el-minimo-continuar-con-la-entrega.png>)

![TC B2C168 M 002 x02 login tras continuar con la entrega](<B2C-168 Evidencias/TC-B2C168-M-002-x02-login-tras-continuar-con-la-entrega.png>)

---

### TC-B2C168-M-003 - Verificar que un carro invitado con productos pasa completo a un carro logueado vacío [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2 y 000000000400254005-UN x 1
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro logueado contiene 000000000000675191-UN x 2 y 000000000400254005-UN x 1, igual al carro invitado.

**Resultado obtenido**

PDP de 000000000400254005-UN con Calle Uno 23, La Florida: 'Pronto disponible', sin 'Agregar' (captura de la exploración en Desktop 1440x900).

**Observación**

Causa: {SKU_UNITARIO} (000000000400254005-UN, Picado Nestlé Naturnes) no tiene stock para {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida): la PDP muestra 'Pronto disponible' y 'Ver similares', sin 'Agregar' (verificado 2026-10-15), así que no se puede armar el carro de invitado de la fila. Además {SKU_UNITARIO} es el mismo SKU que {SKU_NO_DISPONIBLE}. Acción: cambiar {SKU_UNITARIO} por un SKU con stock en la tienda de {DIRECCION_DESPACHO_001}.

**Evidencia**

![TC B2C168 M 003 x01 pdp sku unitario pronto disponible](<B2C-168 Evidencias/TC-B2C168-M-003-x01-pdp-sku-unitario-pronto-disponible.png>)

---

### TC-B2C168-M-006 - Verificar que productos distintos de ambos carros se suman sin modificar cantidades [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 2
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000401693004-UN x 3 (preparado iniciando sesión previamente y cerrando sesión)
- Método de entrega activo

**Data utilizada**

{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro contiene 000000000000675191-UN x 1, 000000000400254005-UN x 2, 000000000000038061-UN x 1 y 000000000401693004-UN x 3.

**Resultado obtenido**

PDP de 000000000400254005-UN con Calle Uno 23, La Florida: 'Pronto disponible', sin 'Agregar' (captura de la exploración en Desktop 1440x900).

**Observación**

Causa: {SKU_UNITARIO} (000000000400254005-UN, Picado Nestlé Naturnes) no tiene stock para {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida): la PDP muestra 'Pronto disponible' y 'Ver similares', sin 'Agregar' (verificado 2026-10-15), así que no se puede armar el carro de invitado de la fila. Además {SKU_UNITARIO} es el mismo SKU que {SKU_NO_DISPONIBLE}. Acción: cambiar {SKU_UNITARIO} por un SKU con stock en la tienda de {DIRECCION_DESPACHO_001}.

**Evidencia**

![TC B2C168 M 006 x01 pdp sku unitario pronto disponible](<B2C-168 Evidencias/TC-B2C168-M-006-x01-pdp-sku-unitario-pronto-disponible.png>)

---

### TC-B2C168-M-008 - Verificar que un producto duplicado queda con la cantidad del carro invitado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000675191-UN x 5 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

000000000000675191-UN queda con cantidad 2 (la del invitado), no 5 ni 7.

**Resultado obtenido**

Carro fusionado con 000000000000675191-UN × 2 (la cantidad del invitado), sin otros productos.

**Observación**

Precondición armada por la UI: el carro guardado de {USER_AUTH_001} se dejó con {SKU_VALID_001} × 5 usando la sesión de la cuenta en otro contexto del navegador (equivale a iniciar sesión, armar el carro y cerrar sesión). Invitado con {DIRECCION_DESPACHO_001} (sugerencia de Google 'Calle Uno 23, La Florida') y {SKU_VALID_001} × 2. Login con correo + OTP desde 'Ingresa aquí' (más el OTP de 'Autenticación requerida'). Tras la fusión el carro tiene solo {SKU_VALID_001} con 2 un. (Subtotal $4.980).

**Evidencia**

![Paso 0 — carro de invitado con sku valid 001 2](<B2C-168 Evidencias/TC-B2C168-M-008-p00-carro-de-invitado-con-sku-valid-001-2.png>)

![Paso 1 — sesion iniciada](<B2C-168 Evidencias/TC-B2C168-M-008-p01-sesion-iniciada.png>)

![Paso 4 — carro tras la fusion](<B2C-168 Evidencias/TC-B2C168-M-008-p04-carro-tras-la-fusion.png>)

![Estado final](<B2C-168 Evidencias/TC-B2C168-M-008.png>)

---

### TC-B2C168-M-009 - Verificar que con duplicados y distintos el carro fusionado aplica la regla a cada producto [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2, 000000000400254005-UN x 1 y 000000000000038061-UN x 3
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000400254005-UN x 4, 000000000000038061-UN x 1 y 000000000401693004-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro queda con 000000000000675191-UN x 2, 000000000400254005-UN x 1, 000000000000038061-UN x 3 y 000000000401693004-UN x 2.

**Resultado obtenido**

PDP de 000000000400254005-UN con Calle Uno 23, La Florida: 'Pronto disponible', sin 'Agregar' (captura de la exploración en Desktop 1440x900).

**Observación**

Causa: {SKU_UNITARIO} (000000000400254005-UN, Picado Nestlé Naturnes) no tiene stock para {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida): la PDP muestra 'Pronto disponible' y 'Ver similares', sin 'Agregar' (verificado 2026-10-15), así que no se puede armar el carro de invitado de la fila. Además {SKU_UNITARIO} es el mismo SKU que {SKU_NO_DISPONIBLE}. Acción: cambiar {SKU_UNITARIO} por un SKU con stock en la tienda de {DIRECCION_DESPACHO_001}.

**Evidencia**

![TC B2C168 M 009 x01 pdp sku unitario pronto disponible](<B2C-168 Evidencias/TC-B2C168-M-009-x01-pdp-sku-unitario-pronto-disponible.png>)

---

### TC-B2C168-M-010 - Verificar que un producto del carro invitado sin stock se agrega marcado como no disponible [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 1
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_NO_DISPONIBLE}, {SKU_VALID_001}, {TIENDA_SIN_STOCK}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

000000000400254005-UN aparece en la sección de no disponibles del carro fusionado y 000000000000675191-UN en disponibles.

**Resultado obtenido**

PDP de 000000000400254005-UN con 'Unimarc Los Leones' activa: precio y 'Agregar' (captura de la exploración en Desktop 1440x900).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) sigue con stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa la PDP muestra $1.970 y 'Agregar' (re-verificado 2026-10-15). Acción: declarar en {SKU_NO_DISPONIBLE} un SKU sin stock en {TIENDA_SIN_STOCK} (o cambiar la tienda).

**Evidencia**

![TC B2C168 M 010 x01 pdp sku no disponible con stock en los leones](<B2C-168 Evidencias/TC-B2C168-M-010-x01-pdp-sku-no-disponible-con-stock-en-los-leones.png>)

---

### TC-B2C168-M-011 - Verificar que un producto del carro logueado sin stock permanece como no disponible [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_NOMBRE_CORTO}, {SKU_NO_DISPONIBLE}, {SKU_VALID_001}, {TIENDA_SIN_STOCK}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

000000000400254005-UN permanece como no disponible y 000000000000038061-UN y 000000000000675191-UN quedan disponibles.

**Resultado obtenido**

PDP de 000000000400254005-UN con 'Unimarc Los Leones' activa: precio y 'Agregar' (captura de la exploración en Desktop 1440x900).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) sigue con stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa la PDP muestra $1.970 y 'Agregar' (re-verificado 2026-10-15). Acción: declarar en {SKU_NO_DISPONIBLE} un SKU sin stock en {TIENDA_SIN_STOCK} (o cambiar la tienda).

**Evidencia**

![TC B2C168 M 011 x01 pdp sku no disponible con stock en los leones](<B2C-168 Evidencias/TC-B2C168-M-011-x01-pdp-sku-no-disponible-con-stock-en-los-leones.png>)

---

### TC-B2C168-M-012 - Verificar que tras la fusión se recalculan precios, promociones y subtotal con Unipay [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000641229002-UN x 1 y 000000000000661945-UN x 1
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000675191-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_UNIPAY_001}, {SKU_VALID_001}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.
5. El usuario revisa precios, promociones y el resumen de totales.

**Resultado esperado**

Cada producto muestra el precio de su promoción vigente y el total y el "Subtotal con Unipay" se calculan sobre todos los productos fusionados.

**Resultado obtenido**

No ejecutado: data no declarada.

**Observación**

Causa: la precondición arma el carro de invitado con {SKU_PROM_NxM} × 1, pero {SKU_PROM_NxM} no está en el Test data de la fila. {SKU_UNIPAY_001} ya tiene valor (000000000000661945-UN). Acción: declarar {SKU_PROM_NxM} en la fila y re-ejecutar este CP.

---

### TC-B2C168-M-014 - Verificar que un usuario que se registra por primera vez inicia con el carro invitado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 2
- vhchirinos+nuevo@avatar-global.com no está registrado (usar un correo nuevo por ejecución)

**Data utilizada**

{BASE_URL}, {CART_URL}, {EMAIL_NUEVO_REGISTRO}, {SKU_UNITARIO}, {SKU_VALID_001}

**Pasos ejecutados**

1. El usuario toca "Ingresa" y elige registrarse con el correo vhchirinos+nuevo@avatar-global.com.
2. El usuario completa el registro e inicia sesión.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro de la nueva cuenta contiene 000000000000675191-UN x 1 y 000000000400254005-UN x 2.

**Resultado obtenido**

No ejecutado: data no declarada.

**Observación**

Causa: la precondición pide un carro de invitado con {SKU_VALID_001} × 1 y {SKU_UNITARIO} × 2, pero la fila no declara dirección ni tienda: como invitado 'Agregar' abre 'Elige tu método de entrega' sin agregar. {EMAIL_NUEVO_REGISTRO} ya tiene valor (vhchirinos+nuevo@avatar-global.com). Acción: declarar la dirección del invitado ({DIRECCION_DESPACHO_001}) y un {SKU_UNITARIO} con stock en ella; y usar un correo nuevo por ejecución.

---

### TC-B2C168-M-015 - Verificar que en Mobile y App el carro fusionado se refleja sin recargar [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2
- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.
4. El sistema autentica al usuario y ejecuta la fusión de carros.
5. El usuario vuelve al carro sin recargar.

**Resultado esperado**

El carro muestra el resultado de la fusión (000000000000675191-UN x 2 y 000000000000038061-UN x 1) sin necesidad de recargar.

**Resultado obtenido**

PDP de 000000000400254005-UN con Calle Uno 23, La Florida: 'Pronto disponible', sin 'Agregar' (captura de la exploración en Desktop 1440x900).

**Observación**

Causa: {SKU_UNITARIO} (000000000400254005-UN, Picado Nestlé Naturnes) no tiene stock para {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida): la PDP muestra 'Pronto disponible' y 'Ver similares', sin 'Agregar' (verificado 2026-10-15), así que no se puede armar el carro de invitado de la fila. Además {SKU_UNITARIO} es el mismo SKU que {SKU_NO_DISPONIBLE}. Acción: cambiar {SKU_UNITARIO} por un SKU con stock en la tienda de {DIRECCION_DESPACHO_001}.

**Evidencia**

![TC B2C168 M 015 x01 pdp sku unitario pronto disponible](<B2C-168 Evidencias/TC-B2C168-M-015-x01-pdp-sku-unitario-pronto-disponible.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "Storefront Unimarc DEV (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/), Chromium Desktop 1440x900 / WebKit Mobile 390x844",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-168",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-168 WEB Test Cases.xlsx",
  "title": "B2C-168 - Fusión de carrito al loguearse - Evidencias QA",
  "updated_at": "2026-10-15"
 },
 "history": {
  "2026-10-15": [
   "TC-B2C168-D-001",
   "TC-B2C168-D-002",
   "TC-B2C168-D-003",
   "TC-B2C168-D-006",
   "TC-B2C168-D-008",
   "TC-B2C168-D-009",
   "TC-B2C168-D-010",
   "TC-B2C168-D-011",
   "TC-B2C168-D-012",
   "TC-B2C168-D-015",
   "TC-B2C168-M-001",
   "TC-B2C168-M-002",
   "TC-B2C168-M-003",
   "TC-B2C168-M-006",
   "TC-B2C168-M-008",
   "TC-B2C168-M-009",
   "TC-B2C168-M-010",
   "TC-B2C168-M-011",
   "TC-B2C168-M-012",
   "TC-B2C168-M-014",
   "TC-B2C168-M-015"
  ]
 },
 "results": [
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra el modal de inicio de sesión (o registro) y no se avanza al checkout.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-001",
   "name": "Verificar que Inicia sesión o regístrate desde el carro abre el modal de inicio de sesión [Desktop] [Guest]",
   "observation": "Causa: el carro de invitado de la fila ({SKU_VALID_001} × 1 = $2.490) queda bajo el mínimo de compra de $20.000: con él, el carro muestra solo 'Mínimo de compra $20.000' deshabilitado y ningún botón para iniciar sesión, así que no se llega al paso 3. Sobre el mínimo (probado con 9 unidades) el botón no dice 'Inicia sesión o regístrate' (CA1) sino 'Continuar con la entrega', y como invitado abre el modal '¡Hola, ingresa aquí!'. Acción: declarar un carro de invitado con subtotal sobre $20.000 (y confirmar con negocio el texto del botón).",
   "observed": "Bajo el mínimo: solo 'Mínimo de compra $20.000'. Sobre el mínimo: 'Continuar con la entrega' abre el login.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1",
   "screenshots": [
    {
     "caption": "TC B2C168 D 001 x01 carro sobre el minimo continuar con la entrega",
     "file": "TC-B2C168-D-001-x01-carro-sobre-el-minimo-continuar-con-la-entrega.png"
    },
    {
     "caption": "TC B2C168 D 001 x02 login tras continuar con la entrega",
     "file": "TC-B2C168-D-001-x02-login-tras-continuar-con-la-entrega.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Inicia sesión o regístrate\".",
   "test_data": "{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_VALID_001}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Tras la fusión se muestra el modal \"¡Que no se te olviden!\" y al presionar \"Continuar\" se muestra la página \"Datos de entrega\".",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-002",
   "name": "Verificar que el login desde el carro fusiona, muestra los sugeridos y lleva a Datos de entrega [Desktop] [Guest]",
   "observation": "Causa: el carro de invitado de la fila ({SKU_VALID_001} × 1 = $2.490) queda bajo el mínimo de compra de $20.000: con él, el carro muestra solo 'Mínimo de compra $20.000' deshabilitado y ningún botón para iniciar sesión, así que no se llega al paso 3. Sobre el mínimo (probado con 9 unidades) el botón no dice 'Inicia sesión o regístrate' (CA1) sino 'Continuar con la entrega', y como invitado abre el modal '¡Hola, ingresa aquí!'. Además la precondición pide 'subtotal sobre el mínimo', lo que contradice {SKU_VALID_001} × 1. Acción: declarar un carro de invitado con subtotal sobre $20.000 (y confirmar con negocio el texto del botón).",
   "observed": "Bajo el mínimo: solo 'Mínimo de compra $20.000'. Sobre el mínimo: 'Continuar con la entrega' abre el login.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- La cuenta tiene productos My Usuals o favoritos\n- Método de entrega activo con subtotal sobre el mínimo",
   "screenshots": [
    {
     "caption": "TC B2C168 D 002 x01 carro sobre el minimo continuar con la entrega",
     "file": "TC-B2C168-D-002-x01-carro-sobre-el-minimo-continuar-con-la-entrega.png"
    },
    {
     "caption": "TC B2C168 D 002 x02 login tras continuar con la entrega",
     "file": "TC-B2C168-D-002-x02-login-tras-continuar-con-la-entrega.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Inicia sesión o regístrate\".\n4. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n5. El sistema fusiona los carros y muestra el modal \"¡Que no se te olviden!\".\n6. El usuario hace clic en \"Continuar\".",
   "test_data": "{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_VALID_001}, {USER_AUTH_001}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El carro logueado contiene 000000000000675191-UN x 2 y 000000000400254005-UN x 1, igual al carro invitado.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-003",
   "name": "Verificar que un carro invitado con productos pasa completo a un carro logueado vacío [Desktop] [Guest]",
   "observation": "Causa: {SKU_UNITARIO} (000000000400254005-UN, Picado Nestlé Naturnes) no tiene stock para {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida): la PDP muestra 'Pronto disponible' y 'Ver similares', sin 'Agregar' (verificado 2026-10-15), así que no se puede armar el carro de invitado de la fila. Además {SKU_UNITARIO} es el mismo SKU que {SKU_NO_DISPONIBLE}. Acción: cambiar {SKU_UNITARIO} por un SKU con stock en la tienda de {DIRECCION_DESPACHO_001}.",
   "observed": "PDP de 000000000400254005-UN con Calle Uno 23, La Florida: 'Pronto disponible', sin 'Agregar'.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2 y 000000000400254005-UN x 1\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "TC B2C168 D 003 x01 pdp sku unitario pronto disponible",
     "file": "TC-B2C168-D-003-x01-pdp-sku-unitario-pronto-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El carro contiene 000000000000675191-UN x 1, 000000000400254005-UN x 2, 000000000000038061-UN x 1 y 000000000401693004-UN x 3.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-006",
   "name": "Verificar que productos distintos de ambos carros se suman sin modificar cantidades [Desktop] [Guest]",
   "observation": "Causa: {SKU_UNITARIO} (000000000400254005-UN, Picado Nestlé Naturnes) no tiene stock para {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida): la PDP muestra 'Pronto disponible' y 'Ver similares', sin 'Agregar' (verificado 2026-10-15), así que no se puede armar el carro de invitado de la fila. Además {SKU_UNITARIO} es el mismo SKU que {SKU_NO_DISPONIBLE}. Acción: cambiar {SKU_UNITARIO} por un SKU con stock en la tienda de {DIRECCION_DESPACHO_001}.",
   "observed": "PDP de 000000000400254005-UN con Calle Uno 23, La Florida: 'Pronto disponible', sin 'Agregar'.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 2\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000401693004-UN x 3 (preparado iniciando sesión previamente y cerrando sesión)\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "TC B2C168 D 006 x01 pdp sku unitario pronto disponible",
     "file": "TC-B2C168-D-006-x01-pdp-sku-unitario-pronto-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "000000000000675191-UN queda con cantidad 2 (la del invitado), no 5 ni 7.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-008",
   "name": "Verificar que un producto duplicado queda con la cantidad del carro invitado [Desktop] [Guest]",
   "observation": "Precondición armada por la UI: el carro guardado de {USER_AUTH_001} se dejó con {SKU_VALID_001} × 5 usando la sesión de la cuenta en otro contexto del navegador (equivale a iniciar sesión, armar el carro y cerrar sesión). Invitado con {DIRECCION_DESPACHO_001} (sugerencia de Google 'Calle Uno 23, La Florida') y {SKU_VALID_001} × 2. Login con correo + OTP desde 'Ingresa aquí' (más el OTP de 'Autenticación requerida'). Tras la fusión el carro tiene solo {SKU_VALID_001} con 2 un. (Subtotal $4.980).",
   "observed": "Carro fusionado con 000000000000675191-UN × 2 (la cantidad del invitado), sin otros productos.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000675191-UN x 5 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Paso 0 — carro de invitado con sku valid 001 2",
     "file": "TC-B2C168-D-008-p00-carro-de-invitado-con-sku-valid-001-2.png"
    },
    {
     "caption": "Paso 1 — sesion iniciada",
     "file": "TC-B2C168-D-008-p01-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carro tras la fusion",
     "file": "TC-B2C168-D-008-p04-carro-tras-la-fusion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C168-D-008.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El carro queda con 000000000000675191-UN x 2, 000000000400254005-UN x 1, 000000000000038061-UN x 3 y 000000000401693004-UN x 2.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-009",
   "name": "Verificar que con duplicados y distintos el carro fusionado aplica la regla a cada producto [Desktop] [Guest]",
   "observation": "Causa: {SKU_UNITARIO} (000000000400254005-UN, Picado Nestlé Naturnes) no tiene stock para {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida): la PDP muestra 'Pronto disponible' y 'Ver similares', sin 'Agregar' (verificado 2026-10-15), así que no se puede armar el carro de invitado de la fila. Además {SKU_UNITARIO} es el mismo SKU que {SKU_NO_DISPONIBLE}. Acción: cambiar {SKU_UNITARIO} por un SKU con stock en la tienda de {DIRECCION_DESPACHO_001}.",
   "observed": "PDP de 000000000400254005-UN con Calle Uno 23, La Florida: 'Pronto disponible', sin 'Agregar'.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2, 000000000400254005-UN x 1 y 000000000000038061-UN x 3\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000400254005-UN x 4, 000000000000038061-UN x 1 y 000000000401693004-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "TC B2C168 D 009 x01 pdp sku unitario pronto disponible",
     "file": "TC-B2C168-D-009-x01-pdp-sku-unitario-pronto-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "000000000400254005-UN aparece en la sección de no disponibles del carro fusionado y 000000000000675191-UN en disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-010",
   "name": "Verificar que un producto del carro invitado sin stock se agrega marcado como no disponible [Desktop] [Guest]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) sigue con stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa la PDP muestra $1.970 y 'Agregar' (re-verificado 2026-10-15). Acción: declarar en {SKU_NO_DISPONIBLE} un SKU sin stock en {TIENDA_SIN_STOCK} (o cambiar la tienda).",
   "observed": "PDP de 000000000400254005-UN con 'Unimarc Los Leones' activa: precio y 'Agregar'.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 1\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "TC B2C168 D 010 x01 pdp sku no disponible con stock en los leones",
     "file": "TC-B2C168-D-010-x01-pdp-sku-no-disponible-con-stock-en-los-leones.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL}, {CART_URL}, {SKU_NO_DISPONIBLE}, {SKU_VALID_001}, {TIENDA_SIN_STOCK}, {USER_AUTH_001}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "000000000400254005-UN permanece como no disponible y 000000000000038061-UN y 000000000000675191-UN quedan disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-011",
   "name": "Verificar que un producto del carro logueado sin stock permanece como no disponible [Desktop] [Guest]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) sigue con stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa la PDP muestra $1.970 y 'Agregar' (re-verificado 2026-10-15). Acción: declarar en {SKU_NO_DISPONIBLE} un SKU sin stock en {TIENDA_SIN_STOCK} (o cambiar la tienda).",
   "observed": "PDP de 000000000400254005-UN con 'Unimarc Los Leones' activa: precio y 'Agregar'.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "TC B2C168 D 011 x01 pdp sku no disponible con stock en los leones",
     "file": "TC-B2C168-D-011-x01-pdp-sku-no-disponible-con-stock-en-los-leones.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL}, {CART_URL}, {SKU_NOMBRE_CORTO}, {SKU_NO_DISPONIBLE}, {SKU_VALID_001}, {TIENDA_SIN_STOCK}, {USER_AUTH_001}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Cada producto muestra el precio de su promoción vigente y el total y el \"Subtotal con Unipay\" se calculan sobre todos los productos fusionados.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-012",
   "name": "Verificar que tras la fusión se recalculan precios, promociones y subtotal con Unipay [Desktop] [Guest]",
   "observation": "Causa: la precondición arma el carro de invitado con {SKU_PROM_NxM} × 1, pero {SKU_PROM_NxM} no está en el Test data de la fila (y tampoco declara dirección ni tienda para el invitado). {SKU_UNIPAY_001} ya tiene valor (000000000000661945-UN). Acción: declarar {SKU_PROM_NxM} y la dirección del invitado ({DIRECCION_DESPACHO_001}) en la fila y re-ejecutar este CP.",
   "observed": "No ejecutado: data no declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000641229002-UN x 1 y 000000000000661945-UN x 1\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000675191-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.\n5. El usuario revisa precios, promociones y el resumen de totales.",
   "test_data": "{BASE_URL}, {CART_URL}, {SKU_UNIPAY_001}, {SKU_VALID_001}, {USER_AUTH_001}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El minicarro logueado muestra los 3 productos fusionados: 000000000000675191-UN x 1, 000000000400254005-UN x 2 (del invitado) y 000000000000666200-UN x 1 (del logueado). Cantidades sin modificación. El subtotal refleja el total del carro fusionado. El minicarro se actualiza en la misma sesión sin recargar la página.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-015",
   "name": "Verificar que el merge desde el minicarro invitado fusiona el carro y el minicarro logueado refleja el resultado [Desktop] [Guest]",
   "observation": "Causa: {SKU_UNITARIO} (000000000400254005-UN, Picado Nestlé Naturnes) no tiene stock para {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida): la PDP muestra 'Pronto disponible' y 'Ver similares', sin 'Agregar' (verificado 2026-10-15), así que no se puede armar el carro de invitado de la fila. Además {SKU_UNITARIO} es el mismo SKU que {SKU_NO_DISPONIBLE}. Acción: cambiar {SKU_UNITARIO} por un SKU con stock en la tienda de {DIRECCION_DESPACHO_001}.",
   "observed": "PDP de 000000000400254005-UN con Calle Uno 23, La Florida: 'Pronto disponible', sin 'Agregar'.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Minicarro (header)\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 2\n- La cuenta vhchirinos+comprador@avatar-global.com tiene el carro logueado con 000000000000666200-UN x 1 (producto distinto al invitado)",
   "screenshots": [
    {
     "caption": "TC B2C168 D 015 x01 pdp sku unitario pronto disponible",
     "file": "TC-B2C168-D-015-x01-pdp-sku-unitario-pronto-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. Como invitado, agregar 000000000000675191-UN x 1 y 000000000400254005-UN x 2 al carro.\n2. Abrir el minicarro desde el ícono del header (sin navegar al carro full-page).\n3. Verificar que el minicarro invitado muestra los 2 productos.\n4. Desde cualquier página, iniciar sesión con vhchirinos+comprador@avatar-global.com (cuenta que tiene 000000000000666200-UN x 1 en su carro logueado).\n5. Una vez logueado, abrir el minicarro desde el ícono del header.\n6. Verificar que el minicarro logueado contiene los 3 productos: 000000000000675191-UN x 1, 000000000400254005-UN x 2 y 000000000000666200-UN x 1.\n7. Verificar que las cantidades de cada producto son correctas (regla CA5: productos distintos, sin modificación de cantidades).\n8. Verificar que el subtotal del minicarro refleja el carro fusionado completo.",
   "test_data": "{BASE_URL}, {DIRECCION_DESPACHO_001}, {SKU_COMBINA_PROMO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra el modal de inicio de sesión (o registro) y no se avanza al checkout.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-001",
   "name": "Verificar que Inicia sesión o regístrate desde el carro abre el modal de inicio de sesión [Mobile] [Guest]",
   "observation": "Causa: el carro de invitado de la fila ({SKU_VALID_001} × 1 = $2.490) queda bajo el mínimo de compra de $20.000: con él, el carro muestra solo 'Mínimo de compra $20.000' deshabilitado y ningún botón para iniciar sesión, así que no se llega al paso 3. Sobre el mínimo (probado con 9 unidades) el botón no dice 'Inicia sesión o regístrate' (CA1) sino 'Continuar con la entrega', y como invitado abre el modal '¡Hola, ingresa aquí!'. Acción: declarar un carro de invitado con subtotal sobre $20.000 (y confirmar con negocio el texto del botón).",
   "observed": "Bajo el mínimo: solo 'Mínimo de compra $20.000'. Sobre el mínimo: 'Continuar con la entrega' abre el login (captura de la exploración en Desktop 1440x900).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1",
   "screenshots": [
    {
     "caption": "TC B2C168 M 001 x01 carro sobre el minimo continuar con la entrega",
     "file": "TC-B2C168-M-001-x01-carro-sobre-el-minimo-continuar-con-la-entrega.png"
    },
    {
     "caption": "TC B2C168 M 001 x02 login tras continuar con la entrega",
     "file": "TC-B2C168-M-001-x02-login-tras-continuar-con-la-entrega.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Inicia sesión o regístrate\".",
   "test_data": "{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_VALID_001}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Tras la fusión se muestra el modal \"¡Que no se te olviden!\" y al presionar \"Continuar\" se muestra la página \"Datos de entrega\".",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-002",
   "name": "Verificar que el login desde el carro fusiona, muestra los sugeridos y lleva a Datos de entrega [Mobile] [Guest]",
   "observation": "Causa: el carro de invitado de la fila ({SKU_VALID_001} × 1 = $2.490) queda bajo el mínimo de compra de $20.000: con él, el carro muestra solo 'Mínimo de compra $20.000' deshabilitado y ningún botón para iniciar sesión, así que no se llega al paso 3. Sobre el mínimo (probado con 9 unidades) el botón no dice 'Inicia sesión o regístrate' (CA1) sino 'Continuar con la entrega', y como invitado abre el modal '¡Hola, ingresa aquí!'. Además la precondición pide 'subtotal sobre el mínimo', lo que contradice {SKU_VALID_001} × 1. Acción: declarar un carro de invitado con subtotal sobre $20.000 (y confirmar con negocio el texto del botón).",
   "observed": "Bajo el mínimo: solo 'Mínimo de compra $20.000'. Sobre el mínimo: 'Continuar con la entrega' abre el login (captura de la exploración en Desktop 1440x900).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- La cuenta tiene productos My Usuals o favoritos\n- Método de entrega activo con subtotal sobre el mínimo",
   "screenshots": [
    {
     "caption": "TC B2C168 M 002 x01 carro sobre el minimo continuar con la entrega",
     "file": "TC-B2C168-M-002-x01-carro-sobre-el-minimo-continuar-con-la-entrega.png"
    },
    {
     "caption": "TC B2C168 M 002 x02 login tras continuar con la entrega",
     "file": "TC-B2C168-M-002-x02-login-tras-continuar-con-la-entrega.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Inicia sesión o regístrate\".\n4. El usuario inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n5. El sistema fusiona los carros y muestra el modal \"¡Que no se te olviden!\".\n6. El usuario toca \"Continuar\".",
   "test_data": "{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_VALID_001}, {USER_AUTH_001}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El carro logueado contiene 000000000000675191-UN x 2 y 000000000400254005-UN x 1, igual al carro invitado.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-003",
   "name": "Verificar que un carro invitado con productos pasa completo a un carro logueado vacío [Mobile] [Guest]",
   "observation": "Causa: {SKU_UNITARIO} (000000000400254005-UN, Picado Nestlé Naturnes) no tiene stock para {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida): la PDP muestra 'Pronto disponible' y 'Ver similares', sin 'Agregar' (verificado 2026-10-15), así que no se puede armar el carro de invitado de la fila. Además {SKU_UNITARIO} es el mismo SKU que {SKU_NO_DISPONIBLE}. Acción: cambiar {SKU_UNITARIO} por un SKU con stock en la tienda de {DIRECCION_DESPACHO_001}.",
   "observed": "PDP de 000000000400254005-UN con Calle Uno 23, La Florida: 'Pronto disponible', sin 'Agregar' (captura de la exploración en Desktop 1440x900).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2 y 000000000400254005-UN x 1\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "TC B2C168 M 003 x01 pdp sku unitario pronto disponible",
     "file": "TC-B2C168-M-003-x01-pdp-sku-unitario-pronto-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El carro contiene 000000000000675191-UN x 1, 000000000400254005-UN x 2, 000000000000038061-UN x 1 y 000000000401693004-UN x 3.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-006",
   "name": "Verificar que productos distintos de ambos carros se suman sin modificar cantidades [Mobile] [Guest]",
   "observation": "Causa: {SKU_UNITARIO} (000000000400254005-UN, Picado Nestlé Naturnes) no tiene stock para {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida): la PDP muestra 'Pronto disponible' y 'Ver similares', sin 'Agregar' (verificado 2026-10-15), así que no se puede armar el carro de invitado de la fila. Además {SKU_UNITARIO} es el mismo SKU que {SKU_NO_DISPONIBLE}. Acción: cambiar {SKU_UNITARIO} por un SKU con stock en la tienda de {DIRECCION_DESPACHO_001}.",
   "observed": "PDP de 000000000400254005-UN con Calle Uno 23, La Florida: 'Pronto disponible', sin 'Agregar' (captura de la exploración en Desktop 1440x900).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 2\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000401693004-UN x 3 (preparado iniciando sesión previamente y cerrando sesión)\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "TC B2C168 M 006 x01 pdp sku unitario pronto disponible",
     "file": "TC-B2C168-M-006-x01-pdp-sku-unitario-pronto-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "000000000000675191-UN queda con cantidad 2 (la del invitado), no 5 ni 7.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-008",
   "name": "Verificar que un producto duplicado queda con la cantidad del carro invitado [Mobile] [Guest]",
   "observation": "Precondición armada por la UI: el carro guardado de {USER_AUTH_001} se dejó con {SKU_VALID_001} × 5 usando la sesión de la cuenta en otro contexto del navegador (equivale a iniciar sesión, armar el carro y cerrar sesión). Invitado con {DIRECCION_DESPACHO_001} (sugerencia de Google 'Calle Uno 23, La Florida') y {SKU_VALID_001} × 2. Login con correo + OTP desde 'Ingresa aquí' (más el OTP de 'Autenticación requerida'). Tras la fusión el carro tiene solo {SKU_VALID_001} con 2 un. (Subtotal $4.980).",
   "observed": "Carro fusionado con 000000000000675191-UN × 2 (la cantidad del invitado), sin otros productos.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000675191-UN x 5 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Paso 0 — carro de invitado con sku valid 001 2",
     "file": "TC-B2C168-M-008-p00-carro-de-invitado-con-sku-valid-001-2.png"
    },
    {
     "caption": "Paso 1 — sesion iniciada",
     "file": "TC-B2C168-M-008-p01-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carro tras la fusion",
     "file": "TC-B2C168-M-008-p04-carro-tras-la-fusion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C168-M-008.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El carro queda con 000000000000675191-UN x 2, 000000000400254005-UN x 1, 000000000000038061-UN x 3 y 000000000401693004-UN x 2.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-009",
   "name": "Verificar que con duplicados y distintos el carro fusionado aplica la regla a cada producto [Mobile] [Guest]",
   "observation": "Causa: {SKU_UNITARIO} (000000000400254005-UN, Picado Nestlé Naturnes) no tiene stock para {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida): la PDP muestra 'Pronto disponible' y 'Ver similares', sin 'Agregar' (verificado 2026-10-15), así que no se puede armar el carro de invitado de la fila. Además {SKU_UNITARIO} es el mismo SKU que {SKU_NO_DISPONIBLE}. Acción: cambiar {SKU_UNITARIO} por un SKU con stock en la tienda de {DIRECCION_DESPACHO_001}.",
   "observed": "PDP de 000000000400254005-UN con Calle Uno 23, La Florida: 'Pronto disponible', sin 'Agregar' (captura de la exploración en Desktop 1440x900).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2, 000000000400254005-UN x 1 y 000000000000038061-UN x 3\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000400254005-UN x 4, 000000000000038061-UN x 1 y 000000000401693004-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "TC B2C168 M 009 x01 pdp sku unitario pronto disponible",
     "file": "TC-B2C168-M-009-x01-pdp-sku-unitario-pronto-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "000000000400254005-UN aparece en la sección de no disponibles del carro fusionado y 000000000000675191-UN en disponibles.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-010",
   "name": "Verificar que un producto del carro invitado sin stock se agrega marcado como no disponible [Mobile] [Guest]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) sigue con stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa la PDP muestra $1.970 y 'Agregar' (re-verificado 2026-10-15). Acción: declarar en {SKU_NO_DISPONIBLE} un SKU sin stock en {TIENDA_SIN_STOCK} (o cambiar la tienda).",
   "observed": "PDP de 000000000400254005-UN con 'Unimarc Los Leones' activa: precio y 'Agregar' (captura de la exploración en Desktop 1440x900).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 1\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "TC B2C168 M 010 x01 pdp sku no disponible con stock en los leones",
     "file": "TC-B2C168-M-010-x01-pdp-sku-no-disponible-con-stock-en-los-leones.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_NO_DISPONIBLE}, {SKU_VALID_001}, {TIENDA_SIN_STOCK}, {USER_AUTH_001}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "000000000400254005-UN permanece como no disponible y 000000000000038061-UN y 000000000000675191-UN quedan disponibles.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-011",
   "name": "Verificar que un producto del carro logueado sin stock permanece como no disponible [Mobile] [Guest]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) sigue con stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa la PDP muestra $1.970 y 'Agregar' (re-verificado 2026-10-15). Acción: declarar en {SKU_NO_DISPONIBLE} un SKU sin stock en {TIENDA_SIN_STOCK} (o cambiar la tienda).",
   "observed": "PDP de 000000000400254005-UN con 'Unimarc Los Leones' activa: precio y 'Agregar' (captura de la exploración en Desktop 1440x900).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "TC B2C168 M 011 x01 pdp sku no disponible con stock en los leones",
     "file": "TC-B2C168-M-011-x01-pdp-sku-no-disponible-con-stock-en-los-leones.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_NOMBRE_CORTO}, {SKU_NO_DISPONIBLE}, {SKU_VALID_001}, {TIENDA_SIN_STOCK}, {USER_AUTH_001}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Cada producto muestra el precio de su promoción vigente y el total y el \"Subtotal con Unipay\" se calculan sobre todos los productos fusionados.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-012",
   "name": "Verificar que tras la fusión se recalculan precios, promociones y subtotal con Unipay [Mobile] [Guest]",
   "observation": "Causa: la precondición arma el carro de invitado con {SKU_PROM_NxM} × 1, pero {SKU_PROM_NxM} no está en el Test data de la fila. {SKU_UNIPAY_001} ya tiene valor (000000000000661945-UN). Acción: declarar {SKU_PROM_NxM} en la fila y re-ejecutar este CP.",
   "observed": "No ejecutado: data no declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000641229002-UN x 1 y 000000000000661945-UN x 1\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000675191-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.\n5. El usuario revisa precios, promociones y el resumen de totales.",
   "test_data": "{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_UNIPAY_001}, {SKU_VALID_001}, {USER_AUTH_001}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El carro de la nueva cuenta contiene 000000000000675191-UN x 1 y 000000000400254005-UN x 2.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-014",
   "name": "Verificar que un usuario que se registra por primera vez inicia con el carro invitado [Mobile] [Guest]",
   "observation": "Causa: la precondición pide un carro de invitado con {SKU_VALID_001} × 1 y {SKU_UNITARIO} × 2, pero la fila no declara dirección ni tienda: como invitado 'Agregar' abre 'Elige tu método de entrega' sin agregar. {EMAIL_NUEVO_REGISTRO} ya tiene valor (vhchirinos+nuevo@avatar-global.com). Acción: declarar la dirección del invitado ({DIRECCION_DESPACHO_001}) y un {SKU_UNITARIO} con stock en ella; y usar un correo nuevo por ejecución.",
   "observed": "No ejecutado: data no declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 2\n- vhchirinos+nuevo@avatar-global.com no está registrado (usar un correo nuevo por ejecución)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" y elige registrarse con el correo vhchirinos+nuevo@avatar-global.com.\n2. El usuario completa el registro e inicia sesión.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL}, {CART_URL}, {EMAIL_NUEVO_REGISTRO}, {SKU_UNITARIO}, {SKU_VALID_001}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El carro muestra el resultado de la fusión (000000000000675191-UN x 2 y 000000000000038061-UN x 1) sin necesidad de recargar.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-015",
   "name": "Verificar que en Mobile y App el carro fusionado se refleja sin recargar [Mobile] [Guest]",
   "observation": "Causa: {SKU_UNITARIO} (000000000400254005-UN, Picado Nestlé Naturnes) no tiene stock para {DIRECCION_DESPACHO_001} (Calle Uno 23, La Florida): la PDP muestra 'Pronto disponible' y 'Ver similares', sin 'Agregar' (verificado 2026-10-15), así que no se puede armar el carro de invitado de la fila. Además {SKU_UNITARIO} es el mismo SKU que {SKU_NO_DISPONIBLE}. Acción: cambiar {SKU_UNITARIO} por un SKU con stock en la tienda de {DIRECCION_DESPACHO_001}.",
   "observed": "PDP de 000000000400254005-UN con Calle Uno 23, La Florida: 'Pronto disponible', sin 'Agregar' (captura de la exploración en Desktop 1440x900).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2\n- El carro guardado de la cuenta vhchirinos+comprador@avatar-global.com contiene 000000000000038061-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "TC B2C168 M 015 x01 pdp sku unitario pronto disponible",
     "file": "TC-B2C168-M-015-x01-pdp-sku-unitario-pronto-disponible.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta vhchirinos+comprador@avatar-global.com.\n4. El sistema autentica al usuario y ejecuta la fusión de carros.\n5. El usuario vuelve al carro sin recargar.",
   "test_data": "{BASE_URL}, {CART_URL}, {DIRECCION_DESPACHO_001}, {SKU_CROSS_SELLING}, {SKU_NOMBRE_CORTO}, {SKU_UNITARIO}, {SKU_VALID_001}, {USER_AUTH_001}",
   "viewport": "390x844"
  }
 ]
}
-->
