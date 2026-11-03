# B2C-168 APP

| Campo | Valor |
|---|---|
| Suite | B2C-168 |
| Última actualización | 2026-10-27 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-168 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado | 14 |
| Bloqueado Data | 10 |
| Aprobado | 7 |
| Rechazado | 1 |
| **Total** | **32** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-27 | 13 | TC-B2C168-APP-002, TC-B2C168-APP-003, TC-B2C168-APP-004, TC-B2C168-APP-005, TC-B2C168-APP-006, TC-B2C168-APP-007, TC-B2C168-APP-008, TC-B2C168-APP-009, TC-B2C168-APP-010, TC-B2C168-APP-011, TC-B2C168-APP-012, TC-B2C168-APP-013, TC-B2C168-APP-015 |
| 2026-10-26 | 2 | TC-B2C168-APP-001, TC-B2C168-APP-014 |
| 2026-10-19 | 17 | TC-B2C168-D-001, TC-B2C168-D-002, TC-B2C168-D-003, TC-B2C168-D-006, TC-B2C168-D-009, TC-B2C168-D-010, TC-B2C168-D-011, TC-B2C168-D-012, TC-B2C168-D-014, TC-B2C168-D-015, TC-B2C168-M-003, TC-B2C168-M-006, TC-B2C168-M-009, TC-B2C168-M-011, TC-B2C168-M-012, TC-B2C168-M-014, TC-B2C168-M-015 |

## Detalle por caso de prueba

### TC-B2C168-D-001 - Verificar que Inicia sesión o regístrate desde el carro abre el modal de inicio de sesión [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Inicia sesión o regístrate".

**Resultado esperado**

Se muestra el modal de inicio de sesión (o registro) y no se avanza al checkout.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: el carro de invitado de la fila (000000000000675191-UN × 1 = $2.490) queda bajo el mínimo de compra de $20.000: el carro muestra solo 'Mínimo de compra $20.000' deshabilitado y no muestra 'Inicia sesión o regístrate', así que no se llega al paso 3 (comprobado en esta corrida con el carro del invitado armado). Acción: declarar un carro de invitado con subtotal sobre $20.000 y confirmar con negocio el texto del botón.

**Evidencia**

![Paso 2 — carro del invitado](<B2C-168 Evidencias/TC-B2C168-D-001-p02-carro-del-invitado.png>)

---

### TC-B2C168-D-002 - Verificar que el login desde el carro fusiona, muestra los sugeridos y lleva a Datos de entrega [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- La cuenta tiene productos My Usuals o favoritos
- Método de entrega activo con subtotal sobre el mínimo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Inicia sesión o regístrate".
4. El usuario inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
5. El sistema fusiona los carros y muestra el modal "¡Que no se te olviden!".
6. El usuario hace clic en "Continuar".

**Resultado esperado**

Tras la fusión se muestra el modal "¡Que no se te olviden!" y al presionar "Continuar" se muestra la página "Datos de entrega".

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: el carro de invitado de la fila (000000000000675191-UN × 1 = $2.490) queda bajo el mínimo de compra de $20.000: el carro muestra solo 'Mínimo de compra $20.000' deshabilitado y no muestra 'Inicia sesión o regístrate', así que no se llega al paso 3 (comprobado en esta corrida con el carro del invitado armado). Acción: declarar un carro de invitado con subtotal sobre $20.000 y confirmar con negocio el texto del botón. Además la precondición pide 'subtotal sobre el mínimo', lo que contradice 000000000000675191-UN × 1.

---

### TC-B2C168-D-003 - Verificar que un carro invitado con productos pasa completo a un carro logueado vacío [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 162.1 s |
| Spec | tests/B2C-168.spec.ts:241 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2 y 000000000000674797-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_CROSS_SELLING} = 000000000401693004-UN

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro logueado contiene {SKU_VALID_001} x 2 y {SKU_UNITARIO} x 1, igual al carro invitado.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

Carro guardado vacío; el invitado con 000000000000675191-UN × 2 y 000000000000674797-UN × 1 inicia sesión y el carro fusionado trae los mismos productos y cantidades.

**Evidencia**

![Paso 0 — invitado con su carro armado](<B2C-168 Evidencias/TC-B2C168-D-003-p00-invitado-con-su-carro-armado.png>)

![Paso 2 — sesion iniciada](<B2C-168 Evidencias/TC-B2C168-D-003-p02-sesion-iniciada.png>)

![Paso 4 — carro tras la fusion](<B2C-168 Evidencias/TC-B2C168-D-003-p04-carro-tras-la-fusion.png>)

![Estado final](<B2C-168 Evidencias/TC-B2C168-D-003.png>)

---

### TC-B2C168-D-006 - Verificar que productos distintos de ambos carros se suman sin modificar cantidades [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 203.4 s |
| Spec | tests/B2C-168.spec.ts:258 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000401693004-UN x 3 (preparado iniciando sesión previamente y cerrando sesión)
- Método de entrega activo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_CROSS_SELLING} = 000000000401693004-UN

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro contiene {SKU_VALID_001} x 1, {SKU_UNITARIO} x 2, {SKU_NOMBRE_CORTO} x 1 y {SKU_CROSS_SELLING} x 3.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

Productos distintos de ambos carros se suman sin cambiar cantidades: 4 productos con las cantidades de cada origen.

**Evidencia**

![Paso 0 — invitado con su carro armado](<B2C-168 Evidencias/TC-B2C168-D-006-p00-invitado-con-su-carro-armado.png>)

![Paso 2 — sesion iniciada](<B2C-168 Evidencias/TC-B2C168-D-006-p02-sesion-iniciada.png>)

![Paso 4 — carro tras la fusion](<B2C-168 Evidencias/TC-B2C168-D-006-p04-carro-tras-la-fusion.png>)

![Estado final](<B2C-168 Evidencias/TC-B2C168-D-006.png>)

---

### TC-B2C168-D-009 - Verificar que con duplicados y distintos el carro fusionado aplica la regla a cada producto [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 323.7 s |
| Spec | tests/B2C-168.spec.ts:275 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2, 000000000000674797-UN x 1 y 000000000000038061-UN x 3
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000674797-UN x 4, 000000000000038061-UN x 1 y 000000000401693004-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_CROSS_SELLING} = 000000000401693004-UN

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro queda con {SKU_VALID_001} x 2, {SKU_UNITARIO} x 1, {SKU_NOMBRE_CORTO} x 3 y {SKU_CROSS_SELLING} x 2.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

Con productos repetidos, la cantidad del invitado prevalece (000000000000675191-UN × 2, 000000000000674797-UN × 1, 000000000000038061-UN × 3) y se conserva 000000000401693004-UN × 2 del carro guardado.

**Evidencia**

![Paso 0 — invitado con su carro armado](<B2C-168 Evidencias/TC-B2C168-D-009-p00-invitado-con-su-carro-armado.png>)

![Paso 2 — sesion iniciada](<B2C-168 Evidencias/TC-B2C168-D-009-p02-sesion-iniciada.png>)

![Paso 4 — carro tras la fusion](<B2C-168 Evidencias/TC-B2C168-D-009-p04-carro-tras-la-fusion.png>)

![Estado final](<B2C-168 Evidencias/TC-B2C168-D-009.png>)

---

### TC-B2C168-D-010 - Verificar que un producto del carro invitado sin stock se agrega marcado como no disponible [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

{SKU_NO_DISPONIBLE} aparece en la sección de no disponibles del carro fusionado y {SKU_VALID_001} en disponibles.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: 000000000400254005-UN (000000000400254005-UN) tiene stock en Unimarc Los leones (Unimarc Los Leones): con esa tienda activa la PDP muestra 'Agregar' (comprobado en esta corrida), así que no queda como no disponible. Acción: declarar en 000000000400254005-UN un SKU sin stock en Unimarc Los leones, o cambiar la tienda.

**Evidencia**

![Paso 2 — pdp del sku con la tienda sin stock activa](<B2C-168 Evidencias/TC-B2C168-D-010-p02-pdp-del-sku-con-la-tienda-sin-stock-activa.png>)

---

### TC-B2C168-D-011 - Verificar que un producto del carro logueado sin stock permanece como no disponible [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

{SKU_NO_DISPONIBLE} permanece como no disponible y {SKU_NOMBRE_CORTO} y {SKU_VALID_001} quedan disponibles.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: 000000000400254005-UN (000000000400254005-UN) tiene stock en Unimarc Los leones (Unimarc Los Leones): con esa tienda activa la PDP muestra 'Agregar' (comprobado en esta corrida), así que no queda como no disponible. Acción: declarar en 000000000400254005-UN un SKU sin stock en Unimarc Los leones, o cambiar la tienda. (Comprobado en D-010 con los mismos datos.)

---

### TC-B2C168-D-012 - Verificar que tras la fusión se recalculan precios, promociones y subtotal con Unipay [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000641229002-UN x 1 y 000000000000661945-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000675191-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_UNIPAY_001} = 000000000000661945-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.
5. El usuario revisa precios, promociones y el resumen de totales.

**Resultado esperado**

Cada producto muestra el precio de su promoción vigente y el total y el "Subtotal con Unipay" se calculan sobre todos los productos fusionados.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: la precondición arma el carro de invitado con 000000000641229002-UN × 1, pero 000000000641229002-UN no está en el Test data de la fila (tampoco declara dirección para el invitado). Acción: declarar 000000000641229002-UN y Calle Uno 23, La Florida en la fila.

---

### TC-B2C168-D-014 - Verificar que un usuario que se registra por primera vez inicia con el carro invitado [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2
- daunuruco+nuevo@avatar-global.com no está registrado (usar un correo nuevo por ejecución)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{EMAIL_NUEVO_REGISTRO} = daunuruco+nuevo@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario hace clic en "Ingresa" y elige registrarse con el correo daunuruco+nuevo@avatar-global.com.
2. El usuario completa el registro e inicia sesión.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro de la nueva cuenta contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: registrar una cuenta nueva pide nombre, RUT y teléfono, y la fila solo declara daunuruco+nuevo@avatar-global.com; no se inventan datos personales. Acción: declarar en la fila (o en el Excel de data) los datos de registro de una cuenta nueva por ejecución, con acceso al OTP.

---

### TC-B2C168-D-015 - Verificar que el merge desde el minicarro invitado fusiona el carro y el minicarro logueado refleja el resultado [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 174.5 s |
| Spec | tests/B2C-168.spec.ts:293 |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Minicarro (header)
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2
- La cuenta daunuruco+comprador@avatar-global.com tiene el carro logueado con 000000000000666200-UN x 1 (producto distinto al invitado)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_COMBINA_PROMO} = 000000000000666200-UN

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. Como invitado, agregar 000000000000675191-UN x 1 y 000000000000674797-UN x 2 al carro.
2. Abrir el minicarro desde el ícono del header (sin navegar al carro full-page).
3. Verificar que el minicarro invitado muestra los 2 productos.
4. Desde cualquier página, iniciar sesión con daunuruco+comprador@avatar-global.com (cuenta que tiene 000000000000666200-UN x 1 en su carro logueado).
5. Una vez logueado, abrir el minicarro desde el ícono del header.
6. Verificar que el minicarro logueado contiene los 3 productos: 000000000000675191-UN x 1, 000000000000674797-UN x 2 y 000000000000666200-UN x 1.
7. Verificar que las cantidades de cada producto son correctas (regla CA5: productos distintos, sin modificación de cantidades).
8. Verificar que el subtotal del minicarro refleja el carro fusionado completo.

**Resultado esperado**

El minicarro logueado muestra los 3 productos fusionados: {SKU_VALID_001} x 1, {SKU_UNITARIO} x 2 (del invitado) y {SKU_COMBINA_PROMO} x 1 (del logueado). Cantidades sin modificación. El subtotal refleja el total del carro fusionado. El minicarro se actualiza en la misma sesión sin recargar la página.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

El minicarro del invitado muestra los 2 productos; tras iniciar sesión el minicarro muestra los 3 productos fusionados con sus cantidades y su subtotal coincide con el del carro. Pasó en el segundo intento.

**Evidencia**

![Paso 3 — mini carro del invitado](<B2C-168 Evidencias/TC-B2C168-D-015-p03-mini-carro-del-invitado.png>)

![Paso 6 — mini carro del logueado con los 3 productos](<B2C-168 Evidencias/TC-B2C168-D-015-p06-mini-carro-del-logueado-con-los-3-productos.png>)

![Estado final](<B2C-168 Evidencias/TC-B2C168-D-015.png>)

---

### TC-B2C168-M-003 - Verificar que un carro invitado con productos pasa completo a un carro logueado vacío [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 354.1 s |
| Spec | tests/B2C-168.spec.ts:241 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2 y 000000000000674797-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_CROSS_SELLING} = 000000000401693004-UN

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro logueado contiene {SKU_VALID_001} x 2 y {SKU_UNITARIO} x 1, igual al carro invitado.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

Carro guardado vacío; el invitado con 000000000000675191-UN × 2 y 000000000000674797-UN × 1 inicia sesión y el carro fusionado trae los mismos productos y cantidades. Fallaron intentos previos por la preparación en Mobile (banner de cookies que no se cierra); este pasó.

**Evidencia**

![Paso 0 — invitado con su carro armado](<B2C-168 Evidencias/TC-B2C168-M-003-p00-invitado-con-su-carro-armado.png>)

![Paso 2 — sesion iniciada](<B2C-168 Evidencias/TC-B2C168-M-003-p02-sesion-iniciada.png>)

![Paso 4 — carro tras la fusion](<B2C-168 Evidencias/TC-B2C168-M-003-p04-carro-tras-la-fusion.png>)

![Estado final](<B2C-168 Evidencias/TC-B2C168-M-003.png>)

---

### TC-B2C168-M-006 - Verificar que productos distintos de ambos carros se suman sin modificar cantidades [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 424.0 s |
| Spec | tests/B2C-168.spec.ts:258 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000401693004-UN x 3 (preparado iniciando sesión previamente y cerrando sesión)
- Método de entrega activo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_CROSS_SELLING} = 000000000401693004-UN

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro contiene {SKU_VALID_001} x 1, {SKU_UNITARIO} x 2, {SKU_NOMBRE_CORTO} x 1 y {SKU_CROSS_SELLING} x 3.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

Productos distintos de ambos carros se suman sin cambiar cantidades. Pasó en el segundo intento; el primero falló por la preparación en Mobile (banner de cookies que no se cierra).

**Evidencia**

![Paso 0 — invitado con su carro armado](<B2C-168 Evidencias/TC-B2C168-M-006-p00-invitado-con-su-carro-armado.png>)

![Paso 2 — sesion iniciada](<B2C-168 Evidencias/TC-B2C168-M-006-p02-sesion-iniciada.png>)

![Paso 4 — carro tras la fusion](<B2C-168 Evidencias/TC-B2C168-M-006-p04-carro-tras-la-fusion.png>)

![Estado final](<B2C-168 Evidencias/TC-B2C168-M-006.png>)

---

### TC-B2C168-M-009 - Verificar que con duplicados y distintos el carro fusionado aplica la regla a cada producto [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Duración | 239.0 s |
| Spec | tests/B2C-168.spec.ts:277 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2, 000000000000674797-UN x 1 y 000000000000038061-UN x 3
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000674797-UN x 4, 000000000000038061-UN x 1 y 000000000401693004-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_CROSS_SELLING} = 000000000401693004-UN

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro queda con {SKU_VALID_001} x 2, {SKU_UNITARIO} x 1, {SKU_NOMBRE_CORTO} x 3 y {SKU_CROSS_SELLING} x 2.

**Resultado obtenido**

Se cumple el resultado esperado.

**Observación**

Con productos repetidos, la cantidad del invitado prevalece (000000000000675191-UN × 2, 000000000000674797-UN × 1, 000000000000038061-UN × 3) y se conserva 000000000401693004-UN × 2 del carro guardado. Corrió con Chromium en formato móvil (390x844): con WebKit el Home del invitado se congelaba por imágenes lentas y el caso no llegaba al login.

**Evidencia**

![Paso 0 — invitado con su carro armado](<B2C-168 Evidencias/TC-B2C168-M-009-p00-invitado-con-su-carro-armado.png>)

![Paso 2 — sesion iniciada](<B2C-168 Evidencias/TC-B2C168-M-009-p02-sesion-iniciada.png>)

![Paso 4 — carro tras la fusion](<B2C-168 Evidencias/TC-B2C168-M-009-p04-carro-tras-la-fusion.png>)

![Estado final](<B2C-168 Evidencias/TC-B2C168-M-009.png>)

---

### TC-B2C168-M-011 - Verificar que un producto del carro logueado sin stock permanece como no disponible [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

{SKU_NO_DISPONIBLE} permanece como no disponible y {SKU_NOMBRE_CORTO} y {SKU_VALID_001} quedan disponibles.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: 000000000400254005-UN (000000000400254005-UN) tiene stock en Unimarc Los leones (Unimarc Los Leones): con esa tienda activa la PDP muestra 'Agregar' (comprobado en esta corrida), así que no queda como no disponible. Acción: declarar en 000000000400254005-UN un SKU sin stock en Unimarc Los leones, o cambiar la tienda. (Comprobado en D-010 con los mismos datos.)

---

### TC-B2C168-M-012 - Verificar que tras la fusión se recalculan precios, promociones y subtotal con Unipay [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000641229002-UN x 1 y 000000000000661945-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000675191-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_UNIPAY_001} = 000000000000661945-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.
5. El usuario revisa precios, promociones y el resumen de totales.

**Resultado esperado**

Cada producto muestra el precio de su promoción vigente y el total y el "Subtotal con Unipay" se calculan sobre todos los productos fusionados.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: la precondición arma el carro de invitado con 000000000641229002-UN × 1, pero 000000000641229002-UN no está en el Test data de la fila. Acción: declarar 000000000641229002-UN y la dirección del invitado en la fila.

---

### TC-B2C168-M-014 - Verificar que un usuario que se registra por primera vez inicia con el carro invitado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2
- daunuruco+nuevo@avatar-global.com no está registrado (usar un correo nuevo por ejecución)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{EMAIL_NUEVO_REGISTRO} = daunuruco+nuevo@avatar-global.com

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario toca "Ingresa" y elige registrarse con el correo daunuruco+nuevo@avatar-global.com.
2. El usuario completa el registro e inicia sesión.
3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
4. El sistema carga el carrito.

**Resultado esperado**

El carro de la nueva cuenta contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2.

**Resultado obtenido**

No se pudo ejecutar el caso con la data declarada.

**Observación**

Causa: registrar una cuenta nueva pide nombre, RUT y teléfono, y la fila solo declara daunuruco+nuevo@avatar-global.com (y no la dirección del invitado). Acción: declarar los datos de registro y la dirección del invitado en la fila.

---

### TC-B2C168-M-015 - Verificar que en Mobile y App el carro fusionado se refleja sin recargar [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-19 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión de invitado con el carro: 000000000000675191-UN x 2
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida

{SKU_CROSS_SELLING} = 000000000401693004-UN

{SKU_NOMBRE_CORTO} = 000000000000038061-UN

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = daunuruco+comprador@avatar-global.com

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Ingresa" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
4. El sistema autentica al usuario y ejecuta la fusión de carros.
5. El usuario vuelve al carro sin recargar.

**Resultado esperado**

El carro muestra el resultado de la fusión ({SKU_VALID_001} x 2 y {SKU_NOMBRE_CORTO} x 1) sin necesidad de recargar.

**Resultado obtenido**

No se pudo ejecutar: el carro de Mobile no ofrece iniciar sesión.

**Observación**

Causa: el header del carro en Mobile ('Volver / Mi Carro / Más opciones') no tiene 'Ingresa aquí' y 'Más opciones' solo ofrece 'Guardar como lista' y 'Vaciar carro': el paso 3 ('toca Ingresa en el header') no se puede ejecutar como está escrito. Comprobado con Chromium en formato móvil. Acción: confirmar con negocio cómo inicia sesión un invitado desde el carro en Mobile (o ajustar el paso) y repetir el caso.

**Evidencia**

![Paso 2 — carro del invitado](<B2C-168 Evidencias/TC-B2C168-M-015-p02-carro-del-invitado.png>)

![Paso 3 — menu mas opciones del carro](<B2C-168 Evidencias/TC-B2C168-M-015-p03-menu-mas-opciones-del-carro.png>)

---

### TC-B2C168-APP-001 - Verificar que Inicia sesión o regístrate desde el carro abre el modal de inicio de sesión

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 1

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Inicia sesión o regístrate".

**Resultado esperado**

Se muestra el modal de inicio de sesión (o registro) y no se avanza al checkout.

**Resultado obtenido**

Esperado: 'Inicia sesión o regístrate' en el carro abre el modal de inicio de sesión. Obtenido: con {SKU_VALID_001} x 1 en el carro de invitado (la app deja agregar sin dirección), el botón del pie (cart-checkout) queda en '…' deshabilitado más de 60 s y nunca ofrece 'Inicia sesión o regístrate'; en la exploración pasó igual con dirección y con el subtotal sobre el mínimo. Bug: B2C-1209. tests-app/B2C-168.spec.ts:25. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.

---

### TC-B2C168-APP-002 - Verificar que el login desde el carro fusiona, muestra los sugeridos y lleva a Datos de entrega

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- La cuenta tiene productos My Usuals o favoritos
- Método de entrega activo con subtotal sobre el mínimo

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Inicia sesión o regístrate".
4. El usuario inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
5. El sistema fusiona los carros y muestra el modal "¡Que no se te olviden!".
6. El usuario toca "Continuar".

**Resultado esperado**

Tras la fusión se muestra el modal "¡Que no se te olviden!" y al presionar "Continuar" se muestra la página "Datos de entrega".

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla ("could not get idle state" / "no XML content found in uiautomator dump"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.

**Evidencia**

![Android · Paso 2 — home con contador que impide el volcado](<B2C-168 Evidencias/TC-B2C168-APP-002-android-p02-home-con-contador-que-impide-el-volcado.png>)

![Android · Estado final](<B2C-168 Evidencias/TC-B2C168-APP-002-android.png>)

---

### TC-B2C168-APP-003 - Verificar que un carro invitado con productos pasa completo a un carro logueado vacío

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 2 y 000000000000674797-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000000674797-UN = 000000000400254005-UN
- 000000000000038061-UN = 000000000000038061-UN
- 000000000401693004-UN = 000000000401693004-UN
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.1 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

El carro logueado contiene 000000000000675191-UN x 2 y 000000000000674797-UN x 1, igual al carro invitado.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla ("could not get idle state" / "no XML content found in uiautomator dump"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.

**Evidencia**

![Android · Paso 2 — home con contador que impide el volcado](<B2C-168 Evidencias/TC-B2C168-APP-003-android-p02-home-con-contador-que-impide-el-volcado.png>)

---

### TC-B2C168-APP-004 - Verificar que un carro invitado vacío no altera el carro guardado del logueado

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: vacío
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 2 y 000000000401693004-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000000674797-UN = 000000000400254005-UN
- 000000000000038061-UN = 000000000000038061-UN
- 000000000401693004-UN = 000000000401693004-UN
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.1 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

El carro logueado mantiene 000000000000038061-UN x 2 y 000000000401693004-UN x 1 sin cambios.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla ("could not get idle state" / "no XML content found in uiautomator dump"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.

**Evidencia**

![Android · Paso 2 — home con contador que impide el volcado](<B2C-168 Evidencias/TC-B2C168-APP-004-android-p02-home-con-contador-que-impide-el-volcado.png>)

---

### TC-B2C168-APP-005 - Verificar que con ambos carros vacíos se muestra el estado de carro vacío

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: vacío
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000000674797-UN = 000000000400254005-UN
- 000000000000038061-UN = 000000000000038061-UN
- 000000000401693004-UN = 000000000401693004-UN
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.1 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

El carro queda vacío y se muestra el estado de carro vacío.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla ("could not get idle state" / "no XML content found in uiautomator dump"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.

**Evidencia**

![Android · Paso 2 — home con contador que impide el volcado](<B2C-168 Evidencias/TC-B2C168-APP-005-android-p02-home-con-contador-que-impide-el-volcado.png>)

---

### TC-B2C168-APP-006 - Verificar que productos distintos de ambos carros se suman sin modificar cantidades

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000401693004-UN x 3 (preparado iniciando sesión previamente y cerrando sesión)
- Método de entrega activo

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000000674797-UN = 000000000400254005-UN
- 000000000000038061-UN = 000000000000038061-UN
- 000000000401693004-UN = 000000000401693004-UN
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.1 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

El carro contiene 000000000000675191-UN x 1, 000000000000674797-UN x 2, 000000000000038061-UN x 1 y 000000000401693004-UN x 3.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla ("could not get idle state" / "no XML content found in uiautomator dump"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.

**Evidencia**

![Android · Paso 2 — home con contador que impide el volcado](<B2C-168 Evidencias/TC-B2C168-APP-006-android-p02-home-con-contador-que-impide-el-volcado.png>)

---

### TC-B2C168-APP-007 - Verificar que tras la fusión se reconsulta la ventana horaria de la tienda del invitado

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- La sesión de invitado tiene seteada la dirección Calle Uno 23, La Florida
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000000674797-UN = 000000000400254005-UN
- 000000000000038061-UN = 000000000000038061-UN
- 000000000401693004-UN = 000000000401693004-UN
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com
- Calle Uno 23, La Florida = Casa

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario revisa la ventana horaria del Store Locator del header.

**Resultado esperado**

El Store Locator muestra la próxima ventana horaria vigente para la dirección Calle Uno 23, La Florida de la sesión de invitado.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla ("could not get idle state" / "no XML content found in uiautomator dump"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.

**Evidencia**

![Android · Paso 2 — home con contador que impide el volcado](<B2C-168 Evidencias/TC-B2C168-APP-007-android-p02-home-con-contador-que-impide-el-volcado.png>)

---

### TC-B2C168-APP-008 - Verificar que un producto duplicado queda con la cantidad del carro invitado

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 2
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000675191-UN x 5 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000000674797-UN = 000000000400254005-UN
- 000000000000038061-UN = 000000000000038061-UN
- 000000000401693004-UN = 000000000401693004-UN
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.1 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

000000000000675191-UN queda con cantidad 2 (la del invitado), no 5 ni 7.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla ("could not get idle state" / "no XML content found in uiautomator dump"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.

**Evidencia**

![Android · Paso 2 — home con contador que impide el volcado](<B2C-168 Evidencias/TC-B2C168-APP-008-android-p02-home-con-contador-que-impide-el-volcado.png>)

---

### TC-B2C168-APP-009 - Verificar que con duplicados y distintos el carro fusionado aplica la regla a cada producto

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 2, 000000000000674797-UN x 1 y 000000000000038061-UN x 3
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000674797-UN x 4, 000000000000038061-UN x 1 y 000000000401693004-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000000674797-UN = 000000000400254005-UN
- 000000000000038061-UN = 000000000000038061-UN
- 000000000401693004-UN = 000000000401693004-UN
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.1 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

El carro queda con 000000000000675191-UN x 2, 000000000000674797-UN x 1, 000000000000038061-UN x 3 y 000000000401693004-UN x 2.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla ("could not get idle state" / "no XML content found in uiautomator dump"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.

**Evidencia**

![Android · Paso 2 — home con contador que impide el volcado](<B2C-168 Evidencias/TC-B2C168-APP-009-android-p02-home-con-contador-que-impide-el-volcado.png>)

---

### TC-B2C168-APP-010 - Verificar que un producto del carro invitado sin stock se agrega marcado como no disponible

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com
- 000000000400254005-UN = TBD
- Unimarc Los leones = TBD

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.1 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

000000000400254005-UN aparece en la sección de no disponibles del carro fusionado y 000000000000675191-UN en disponibles.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla ("could not get idle state" / "no XML content found in uiautomator dump"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.

**Evidencia**

![Android · Paso 2 — home con contador que impide el volcado](<B2C-168 Evidencias/TC-B2C168-APP-010-android-p02-home-con-contador-que-impide-el-volcado.png>)

---

### TC-B2C168-APP-011 - Verificar que un producto del carro logueado sin stock permanece como no disponible

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000000038061-UN = 000000000000038061-UN
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com
- 000000000400254005-UN = TBD
- Unimarc Los leones = TBD

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.1 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

000000000400254005-UN permanece como no disponible y 000000000000038061-UN y 000000000000675191-UN quedan disponibles.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla ("could not get idle state" / "no XML content found in uiautomator dump"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.

**Evidencia**

![Android · Paso 2 — home con contador que impide el volcado](<B2C-168 Evidencias/TC-B2C168-APP-011-android-p02-home-con-contador-que-impide-el-volcado.png>)

---

### TC-B2C168-APP-012 - Verificar que tras la fusión se recalculan precios, promociones y subtotal con Unipay

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: {SKU_PROM_NxM} x 1 y 000000000000661945-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000675191-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com
- {SKU_PROM_NxM} = 000000000641229002-UN
- 000000000000661945-UN = TBD

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre la App v1.0.1 y toca el ícono del carro.
4. El sistema carga el carrito.
5. El usuario revisa precios, promociones y el resumen de totales.

**Resultado esperado**

Cada producto muestra el precio de su promoción vigente y el total y el "Subtotal con Unipay" se calculan sobre todos los productos fusionados.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla ("could not get idle state" / "no XML content found in uiautomator dump"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.

**Evidencia**

![Android · Paso 2 — home con contador que impide el volcado](<B2C-168 Evidencias/TC-B2C168-APP-012-android-p02-home-con-contador-que-impide-el-volcado.png>)

---

### TC-B2C168-APP-013 - Verificar que el carro fusionado se ve igual al abrirlo desde otro canal

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 1
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000674797-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)
- Acceso al otro canal (Web o App) con la misma cuenta

**Data utilizada**

- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000000674797-UN = 000000000400254005-UN
- 000000000000038061-UN = 000000000000038061-UN
- 000000000401693004-UN = 000000000401693004-UN
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
2. El sistema autentica al usuario y ejecuta la fusión de carros.
3. El usuario abre el carro de la misma cuenta en otro canal (v1.0.1 si este es Web, o https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ si es App).
4. El usuario suma 1 unidad de 000000000000675191-UN en el otro canal y vuelve a abrir el carro en este canal.

**Resultado esperado**

Ambos canales muestran el mismo carro fusionado y la unidad agregada en el otro canal se refleja aquí.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla ("could not get idle state" / "no XML content found in uiautomator dump"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.

**Evidencia**

![Android · Paso 2 — home con contador que impide el volcado](<B2C-168 Evidencias/TC-B2C168-APP-013-android-p02-home-con-contador-que-impide-el-volcado.png>)

---

### TC-B2C168-APP-014 - Verificar que un usuario que se registra por primera vez inicia con el carro invitado

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
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2
- daunuruco+nuevo@avatar-global.com no está registrado (usar un correo nuevo por ejecución)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000000674797-UN = 000000000400254005-UN
- daunuruco+nuevo@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario toca "Ingresa" y elige registrarse con el correo daunuruco+nuevo@avatar-global.com.
2. El usuario completa el registro e inicia sesión.
3. El usuario abre la App v1.0.1 y toca el ícono del carro.
4. El sistema carga el carrito.

**Resultado esperado**

El carro de la nueva cuenta contiene 000000000000675191-UN x 1 y 000000000000674797-UN x 2.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1): Causa: el caso parte de un carro con {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g'); ese producto no se puede agregar: como invitado la búsqueda por su código devuelve 'Sin resultados' y con la cuenta de prueba figura como 'Pronto disponible' con 'Ver similares' (sin stock, verificado en B2C-189). Sin carro no se llega a los pasos del caso. Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock.

**Evidencia**

![Android · Estado final](<B2C-168 Evidencias/TC-B2C168-APP-014-android.png>)

---

### TC-B2C168-APP-015 - Verificar que en Mobile y App el carro fusionado se refleja sin recargar

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión de invitado con el carro: 000000000000675191-UN x 2
- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000000674797-UN = 000000000400254005-UN
- 000000000000038061-UN = 000000000000038061-UN
- 000000000401693004-UN = 000000000401693004-UN
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Ingresa" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.
4. El sistema autentica al usuario y ejecuta la fusión de carros.
5. El usuario vuelve al carro sin recargar.

**Resultado esperado**

El carro muestra el resultado de la fusión (000000000000675191-UN x 2 y 000000000000038061-UN x 1) sin necesidad de recargar.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla ("could not get idle state" / "no XML content found in uiautomator dump"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.

**Evidencia**

![Android · Paso 2 — home con contador que impide el volcado](<B2C-168 Evidencias/TC-B2C168-APP-015-android-p02-home-con-contador-que-impide-el-volcado.png>)

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
  "suite": "B2C-168",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-168 APP Test Cases.xlsx",
  "title": "B2C-168 APP",
  "updated_at": "2026-10-27"
 },
 "history": {
  "2026-10-19": [
   "TC-B2C168-D-001",
   "TC-B2C168-D-002",
   "TC-B2C168-D-003",
   "TC-B2C168-D-006",
   "TC-B2C168-D-009",
   "TC-B2C168-D-010",
   "TC-B2C168-D-011",
   "TC-B2C168-D-012",
   "TC-B2C168-D-014",
   "TC-B2C168-D-015",
   "TC-B2C168-M-003",
   "TC-B2C168-M-006",
   "TC-B2C168-M-009",
   "TC-B2C168-M-011",
   "TC-B2C168-M-012",
   "TC-B2C168-M-014",
   "TC-B2C168-M-015"
  ],
  "2026-10-26": [
   "TC-B2C168-APP-001",
   "TC-B2C168-APP-014"
  ],
  "2026-10-27": [
   "TC-B2C168-APP-002",
   "TC-B2C168-APP-003",
   "TC-B2C168-APP-004",
   "TC-B2C168-APP-005",
   "TC-B2C168-APP-006",
   "TC-B2C168-APP-007",
   "TC-B2C168-APP-008",
   "TC-B2C168-APP-009",
   "TC-B2C168-APP-010",
   "TC-B2C168-APP-011",
   "TC-B2C168-APP-012",
   "TC-B2C168-APP-013",
   "TC-B2C168-APP-015"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "Se muestra el modal de inicio de sesión (o registro) y no se avanza al checkout.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-001",
   "name": "Verificar que Inicia sesión o regístrate desde el carro abre el modal de inicio de sesión [Desktop] [Guest]",
   "observation": "Causa: el carro de invitado de la fila (000000000000675191-UN × 1 = $2.490) queda bajo el mínimo de compra de $20.000: el carro muestra solo 'Mínimo de compra $20.000' deshabilitado y no muestra 'Inicia sesión o regístrate', así que no se llega al paso 3 (comprobado en esta corrida con el carro del invitado armado). Acción: declarar un carro de invitado con subtotal sobre $20.000 y confirmar con negocio el texto del botón.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1",
   "screenshots": [
    {
     "caption": "Paso 2 — carro del invitado",
     "file": "TC-B2C168-D-001-p02-carro-del-invitado.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Inicia sesión o regístrate\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "Tras la fusión se muestra el modal \"¡Que no se te olviden!\" y al presionar \"Continuar\" se muestra la página \"Datos de entrega\".",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-002",
   "name": "Verificar que el login desde el carro fusiona, muestra los sugeridos y lleva a Datos de entrega [Desktop] [Guest]",
   "observation": "Causa: el carro de invitado de la fila (000000000000675191-UN × 1 = $2.490) queda bajo el mínimo de compra de $20.000: el carro muestra solo 'Mínimo de compra $20.000' deshabilitado y no muestra 'Inicia sesión o regístrate', así que no se llega al paso 3 (comprobado en esta corrida con el carro del invitado armado). Acción: declarar un carro de invitado con subtotal sobre $20.000 y confirmar con negocio el texto del botón. Además la precondición pide 'subtotal sobre el mínimo', lo que contradice 000000000000675191-UN × 1.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- La cuenta tiene productos My Usuals o favoritos\n- Método de entrega activo con subtotal sobre el mínimo",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Inicia sesión o regístrate\".\n4. El usuario inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n5. El sistema fusiona los carros y muestra el modal \"¡Que no se te olviden!\".\n6. El usuario hace clic en \"Continuar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 162.1,
   "executed_at": "2026-10-19",
   "expected": "El carro logueado contiene {SKU_VALID_001} x 2 y {SKU_UNITARIO} x 1, igual al carro invitado.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-003",
   "name": "Verificar que un carro invitado con productos pasa completo a un carro logueado vacío [Desktop] [Guest]",
   "observation": "Carro guardado vacío; el invitado con 000000000000675191-UN × 2 y 000000000000674797-UN × 1 inicia sesión y el carro fusionado trae los mismos productos y cantidades.",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2 y 000000000000674797-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Paso 0 — invitado con su carro armado",
     "file": "TC-B2C168-D-003-p00-invitado-con-su-carro-armado.png"
    },
    {
     "caption": "Paso 2 — sesion iniciada",
     "file": "TC-B2C168-D-003-p02-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carro tras la fusion",
     "file": "TC-B2C168-D-003-p04-carro-tras-la-fusion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C168-D-003.png"
    }
   ],
   "spec": "tests/B2C-168.spec.ts:241",
   "status": "Aprobado",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_CROSS_SELLING} = 000000000401693004-UN\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 203.4,
   "executed_at": "2026-10-19",
   "expected": "El carro contiene {SKU_VALID_001} x 1, {SKU_UNITARIO} x 2, {SKU_NOMBRE_CORTO} x 1 y {SKU_CROSS_SELLING} x 3.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-006",
   "name": "Verificar que productos distintos de ambos carros se suman sin modificar cantidades [Desktop] [Guest]",
   "observation": "Productos distintos de ambos carros se suman sin cambiar cantidades: 4 productos con las cantidades de cada origen.",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000401693004-UN x 3 (preparado iniciando sesión previamente y cerrando sesión)\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 0 — invitado con su carro armado",
     "file": "TC-B2C168-D-006-p00-invitado-con-su-carro-armado.png"
    },
    {
     "caption": "Paso 2 — sesion iniciada",
     "file": "TC-B2C168-D-006-p02-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carro tras la fusion",
     "file": "TC-B2C168-D-006-p04-carro-tras-la-fusion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C168-D-006.png"
    }
   ],
   "spec": "tests/B2C-168.spec.ts:258",
   "status": "Aprobado",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_CROSS_SELLING} = 000000000401693004-UN\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 323.7,
   "executed_at": "2026-10-19",
   "expected": "El carro queda con {SKU_VALID_001} x 2, {SKU_UNITARIO} x 1, {SKU_NOMBRE_CORTO} x 3 y {SKU_CROSS_SELLING} x 2.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-009",
   "name": "Verificar que con duplicados y distintos el carro fusionado aplica la regla a cada producto [Desktop] [Guest]",
   "observation": "Con productos repetidos, la cantidad del invitado prevalece (000000000000675191-UN × 2, 000000000000674797-UN × 1, 000000000000038061-UN × 3) y se conserva 000000000401693004-UN × 2 del carro guardado.",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2, 000000000000674797-UN x 1 y 000000000000038061-UN x 3\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000674797-UN x 4, 000000000000038061-UN x 1 y 000000000401693004-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Paso 0 — invitado con su carro armado",
     "file": "TC-B2C168-D-009-p00-invitado-con-su-carro-armado.png"
    },
    {
     "caption": "Paso 2 — sesion iniciada",
     "file": "TC-B2C168-D-009-p02-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carro tras la fusion",
     "file": "TC-B2C168-D-009-p04-carro-tras-la-fusion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C168-D-009.png"
    }
   ],
   "spec": "tests/B2C-168.spec.ts:275",
   "status": "Aprobado",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_CROSS_SELLING} = 000000000401693004-UN\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "{SKU_NO_DISPONIBLE} aparece en la sección de no disponibles del carro fusionado y {SKU_VALID_001} en disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-010",
   "name": "Verificar que un producto del carro invitado sin stock se agrega marcado como no disponible [Desktop] [Guest]",
   "observation": "Causa: 000000000400254005-UN (000000000400254005-UN) tiene stock en Unimarc Los leones (Unimarc Los Leones): con esa tienda activa la PDP muestra 'Agregar' (comprobado en esta corrida), así que no queda como no disponible. Acción: declarar en 000000000400254005-UN un SKU sin stock en Unimarc Los leones, o cambiar la tienda.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Paso 2 — pdp del sku con la tienda sin stock activa",
     "file": "TC-B2C168-D-010-p02-pdp-del-sku-con-la-tienda-sin-stock-activa.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "{SKU_NO_DISPONIBLE} permanece como no disponible y {SKU_NOMBRE_CORTO} y {SKU_VALID_001} quedan disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-011",
   "name": "Verificar que un producto del carro logueado sin stock permanece como no disponible [Desktop] [Guest]",
   "observation": "Causa: 000000000400254005-UN (000000000400254005-UN) tiene stock en Unimarc Los leones (Unimarc Los Leones): con esa tienda activa la PDP muestra 'Agregar' (comprobado en esta corrida), así que no queda como no disponible. Acción: declarar en 000000000400254005-UN un SKU sin stock en Unimarc Los leones, o cambiar la tienda. (Comprobado en D-010 con los mismos datos.)",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "status": "Bloqueado Data",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "Cada producto muestra el precio de su promoción vigente y el total y el \"Subtotal con Unipay\" se calculan sobre todos los productos fusionados.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-012",
   "name": "Verificar que tras la fusión se recalculan precios, promociones y subtotal con Unipay [Desktop] [Guest]",
   "observation": "Causa: la precondición arma el carro de invitado con 000000000641229002-UN × 1, pero 000000000641229002-UN no está en el Test data de la fila (tampoco declara dirección para el invitado). Acción: declarar 000000000641229002-UN y Calle Uno 23, La Florida en la fila.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000641229002-UN x 1 y 000000000000661945-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000675191-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario hace clic en \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.\n5. El usuario revisa precios, promociones y el resumen de totales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "El carro de la nueva cuenta contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-014",
   "name": "Verificar que un usuario que se registra por primera vez inicia con el carro invitado [Desktop] [Guest]",
   "observation": "Causa: registrar una cuenta nueva pide nombre, RUT y teléfono, y la fila solo declara daunuruco+nuevo@avatar-global.com; no se inventan datos personales. Acción: declarar en la fila (o en el Excel de data) los datos de registro de una cuenta nueva por ejecución, con acceso al OTP.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2\n- daunuruco+nuevo@avatar-global.com no está registrado (usar un correo nuevo por ejecución)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario hace clic en \"Ingresa\" y elige registrarse con el correo daunuruco+nuevo@avatar-global.com.\n2. El usuario completa el registro e inicia sesión.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{EMAIL_NUEVO_REGISTRO} = daunuruco+nuevo@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 174.5,
   "executed_at": "2026-10-19",
   "expected": "El minicarro logueado muestra los 3 productos fusionados: {SKU_VALID_001} x 1, {SKU_UNITARIO} x 2 (del invitado) y {SKU_COMBINA_PROMO} x 1 (del logueado). Cantidades sin modificación. El subtotal refleja el total del carro fusionado. El minicarro se actualiza en la misma sesión sin recargar la página.",
   "form_factor": "desktop",
   "id": "TC-B2C168-D-015",
   "name": "Verificar que el merge desde el minicarro invitado fusiona el carro y el minicarro logueado refleja el resultado [Desktop] [Guest]",
   "observation": "El minicarro del invitado muestra los 2 productos; tras iniciar sesión el minicarro muestra los 3 productos fusionados con sus cantidades y su subtotal coincide con el del carro. Pasó en el segundo intento.",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Minicarro (header)\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2\n- La cuenta daunuruco+comprador@avatar-global.com tiene el carro logueado con 000000000000666200-UN x 1 (producto distinto al invitado)",
   "screenshots": [
    {
     "caption": "Paso 3 — mini carro del invitado",
     "file": "TC-B2C168-D-015-p03-mini-carro-del-invitado.png"
    },
    {
     "caption": "Paso 6 — mini carro del logueado con los 3 productos",
     "file": "TC-B2C168-D-015-p06-mini-carro-del-logueado-con-los-3-productos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C168-D-015.png"
    }
   ],
   "spec": "tests/B2C-168.spec.ts:293",
   "status": "Aprobado",
   "steps": "1. Como invitado, agregar 000000000000675191-UN x 1 y 000000000000674797-UN x 2 al carro.\n2. Abrir el minicarro desde el ícono del header (sin navegar al carro full-page).\n3. Verificar que el minicarro invitado muestra los 2 productos.\n4. Desde cualquier página, iniciar sesión con daunuruco+comprador@avatar-global.com (cuenta que tiene 000000000000666200-UN x 1 en su carro logueado).\n5. Una vez logueado, abrir el minicarro desde el ícono del header.\n6. Verificar que el minicarro logueado contiene los 3 productos: 000000000000675191-UN x 1, 000000000000674797-UN x 2 y 000000000000666200-UN x 1.\n7. Verificar que las cantidades de cada producto son correctas (regla CA5: productos distintos, sin modificación de cantidades).\n8. Verificar que el subtotal del minicarro refleja el carro fusionado completo.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_COMBINA_PROMO} = 000000000000666200-UN\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "1440x900"
  },
  {
   "browser": "webkit",
   "duration_s": 354.1,
   "executed_at": "2026-10-19",
   "expected": "El carro logueado contiene {SKU_VALID_001} x 2 y {SKU_UNITARIO} x 1, igual al carro invitado.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-003",
   "name": "Verificar que un carro invitado con productos pasa completo a un carro logueado vacío [Mobile] [Guest]",
   "observation": "Carro guardado vacío; el invitado con 000000000000675191-UN × 2 y 000000000000674797-UN × 1 inicia sesión y el carro fusionado trae los mismos productos y cantidades. Fallaron intentos previos por la preparación en Mobile (banner de cookies que no se cierra); este pasó.",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2 y 000000000000674797-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Paso 0 — invitado con su carro armado",
     "file": "TC-B2C168-M-003-p00-invitado-con-su-carro-armado.png"
    },
    {
     "caption": "Paso 2 — sesion iniciada",
     "file": "TC-B2C168-M-003-p02-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carro tras la fusion",
     "file": "TC-B2C168-M-003-p04-carro-tras-la-fusion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C168-M-003.png"
    }
   ],
   "spec": "tests/B2C-168.spec.ts:241",
   "status": "Aprobado",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_CROSS_SELLING} = 000000000401693004-UN\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 424.0,
   "executed_at": "2026-10-19",
   "expected": "El carro contiene {SKU_VALID_001} x 1, {SKU_UNITARIO} x 2, {SKU_NOMBRE_CORTO} x 1 y {SKU_CROSS_SELLING} x 3.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-006",
   "name": "Verificar que productos distintos de ambos carros se suman sin modificar cantidades [Mobile] [Guest]",
   "observation": "Productos distintos de ambos carros se suman sin cambiar cantidades. Pasó en el segundo intento; el primero falló por la preparación en Mobile (banner de cookies que no se cierra).",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000401693004-UN x 3 (preparado iniciando sesión previamente y cerrando sesión)\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 0 — invitado con su carro armado",
     "file": "TC-B2C168-M-006-p00-invitado-con-su-carro-armado.png"
    },
    {
     "caption": "Paso 2 — sesion iniciada",
     "file": "TC-B2C168-M-006-p02-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carro tras la fusion",
     "file": "TC-B2C168-M-006-p04-carro-tras-la-fusion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C168-M-006.png"
    }
   ],
   "spec": "tests/B2C-168.spec.ts:258",
   "status": "Aprobado",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_CROSS_SELLING} = 000000000401693004-UN\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "duration_s": 239.0,
   "executed_at": "2026-10-19",
   "expected": "El carro queda con {SKU_VALID_001} x 2, {SKU_UNITARIO} x 1, {SKU_NOMBRE_CORTO} x 3 y {SKU_CROSS_SELLING} x 2.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-009",
   "name": "Verificar que con duplicados y distintos el carro fusionado aplica la regla a cada producto [Mobile] [Guest]",
   "observation": "Con productos repetidos, la cantidad del invitado prevalece (000000000000675191-UN × 2, 000000000000674797-UN × 1, 000000000000038061-UN × 3) y se conserva 000000000401693004-UN × 2 del carro guardado. Corrió con Chromium en formato móvil (390x844): con WebKit el Home del invitado se congelaba por imágenes lentas y el caso no llegaba al login.",
   "observed": "Se cumple el resultado esperado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2, 000000000000674797-UN x 1 y 000000000000038061-UN x 3\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000674797-UN x 4, 000000000000038061-UN x 1 y 000000000401693004-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Paso 0 — invitado con su carro armado",
     "file": "TC-B2C168-M-009-p00-invitado-con-su-carro-armado.png"
    },
    {
     "caption": "Paso 2 — sesion iniciada",
     "file": "TC-B2C168-M-009-p02-sesion-iniciada.png"
    },
    {
     "caption": "Paso 4 — carro tras la fusion",
     "file": "TC-B2C168-M-009-p04-carro-tras-la-fusion.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C168-M-009.png"
    }
   ],
   "spec": "tests/B2C-168.spec.ts:277",
   "status": "Aprobado",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_CROSS_SELLING} = 000000000401693004-UN\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "{SKU_NO_DISPONIBLE} permanece como no disponible y {SKU_NOMBRE_CORTO} y {SKU_VALID_001} quedan disponibles.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-011",
   "name": "Verificar que un producto del carro logueado sin stock permanece como no disponible [Mobile] [Guest]",
   "observation": "Causa: 000000000400254005-UN (000000000400254005-UN) tiene stock en Unimarc Los leones (Unimarc Los Leones): con esa tienda activa la PDP muestra 'Agregar' (comprobado en esta corrida), así que no queda como no disponible. Acción: declarar en 000000000400254005-UN un SKU sin stock en Unimarc Los leones, o cambiar la tienda. (Comprobado en D-010 con los mismos datos.)",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "Cada producto muestra el precio de su promoción vigente y el total y el \"Subtotal con Unipay\" se calculan sobre todos los productos fusionados.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-012",
   "name": "Verificar que tras la fusión se recalculan precios, promociones y subtotal con Unipay [Mobile] [Guest]",
   "observation": "Causa: la precondición arma el carro de invitado con 000000000641229002-UN × 1, pero 000000000641229002-UN no está en el Test data de la fila. Acción: declarar 000000000641229002-UN y la dirección del invitado en la fila.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000641229002-UN x 1 y 000000000000661945-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000675191-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.\n5. El usuario revisa precios, promociones y el resumen de totales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_UNIPAY_001} = 000000000000661945-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "El carro de la nueva cuenta contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-014",
   "name": "Verificar que un usuario que se registra por primera vez inicia con el carro invitado [Mobile] [Guest]",
   "observation": "Causa: registrar una cuenta nueva pide nombre, RUT y teléfono, y la fila solo declara daunuruco+nuevo@avatar-global.com (y no la dirección del invitado). Acción: declarar los datos de registro y la dirección del invitado en la fila.",
   "observed": "No se pudo ejecutar el caso con la data declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2\n- daunuruco+nuevo@avatar-global.com no está registrado (usar un correo nuevo por ejecución)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" y elige registrarse con el correo daunuruco+nuevo@avatar-global.com.\n2. El usuario completa el registro e inicia sesión.\n3. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n4. El sistema carga el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{EMAIL_NUEVO_REGISTRO} = daunuruco+nuevo@avatar-global.com\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-19",
   "expected": "El carro muestra el resultado de la fusión ({SKU_VALID_001} x 2 y {SKU_NOMBRE_CORTO} x 1) sin necesidad de recargar.",
   "form_factor": "mobile",
   "id": "TC-B2C168-M-015",
   "name": "Verificar que en Mobile y App el carro fusionado se refleja sin recargar [Mobile] [Guest]",
   "observation": "Causa: el header del carro en Mobile ('Volver / Mi Carro / Más opciones') no tiene 'Ingresa aquí' y 'Más opciones' solo ofrece 'Guardar como lista' y 'Vaciar carro': el paso 3 ('toca Ingresa en el header') no se puede ejecutar como está escrito. Comprobado con Chromium en formato móvil. Acción: confirmar con negocio cómo inicia sesión un invitado desde el carro en Mobile (o ajustar el paso) y repetir el caso.",
   "observed": "No se pudo ejecutar: el carro de Mobile no ofrece iniciar sesión.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión de invitado con el carro: 000000000000675191-UN x 2\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Paso 2 — carro del invitado",
     "file": "TC-B2C168-M-015-p02-carro-del-invitado.png"
    },
    {
     "caption": "Paso 3 — menu mas opciones del carro",
     "file": "TC-B2C168-M-015-p03-menu-mas-opciones-del-carro.png"
    }
   ],
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Ingresa\" en el header e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n4. El sistema autentica al usuario y ejecuta la fusión de carros.\n5. El usuario vuelve al carro sin recargar.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_001} = Calle Uno 23, La Florida\n{SKU_CROSS_SELLING} = 000000000401693004-UN\n{SKU_NOMBRE_CORTO} = 000000000000038061-UN\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = daunuruco+comprador@avatar-global.com",
   "viewport": "390x844"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se muestra el modal de inicio de sesión (o registro) y no se avanza al checkout.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-001",
   "name": "Verificar que Inicia sesión o regístrate desde el carro abre el modal de inicio de sesión",
   "observed": "Esperado: 'Inicia sesión o regístrate' en el carro abre el modal de inicio de sesión. Obtenido: con {SKU_VALID_001} x 1 en el carro de invitado (la app deja agregar sin dirección), el botón del pie (cart-checkout) queda en '…' deshabilitado más de 60 s y nunca ofrece 'Inicia sesión o regístrate'; en la exploración pasó igual con dirección y con el subtotal sobre el mínimo. Bug: B2C-1209. tests-app/B2C-168.spec.ts:25. Re-ejecución solo Android (build v1.0.7, com.smuapp.unimarc) pedida el 2026-10-14; antes estaba en Fuera de alcance. La fila dice 'Viewport: App iOS/Android' sin 'Plataforma:' y se tomó como Android. La columna iOS no se tocó.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 1",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Rechazado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Inicia sesión o regístrate\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Tras la fusión se muestra el modal \"¡Que no se te olviden!\" y al presionar \"Continuar\" se muestra la página \"Datos de entrega\".",
   "form_factor": "app",
   "id": "TC-B2C168-APP-002",
   "name": "Verificar que el login desde el carro fusiona, muestra los sugeridos y lleva a Datos de entrega",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla (\"could not get idle state\" / \"no XML content found in uiautomator dump\"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- La cuenta tiene productos My Usuals o favoritos\n- Método de entrega activo con subtotal sobre el mínimo",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con contador que impide el volcado",
     "file": "TC-B2C168-APP-002-android-p02-home-con-contador-que-impide-el-volcado.png"
    },
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C168-APP-002-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Inicia sesión o regístrate\".\n4. El usuario inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n5. El sistema fusiona los carros y muestra el modal \"¡Que no se te olviden!\".\n6. El usuario toca \"Continuar\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El carro logueado contiene 000000000000675191-UN x 2 y 000000000000674797-UN x 1, igual al carro invitado.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-003",
   "name": "Verificar que un carro invitado con productos pasa completo a un carro logueado vacío",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla (\"could not get idle state\" / \"no XML content found in uiautomator dump\"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 2 y 000000000000674797-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con contador que impide el volcado",
     "file": "TC-B2C168-APP-003-android-p02-home-con-contador-que-impide-el-volcado.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.1 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000000674797-UN = 000000000400254005-UN\n- 000000000000038061-UN = 000000000000038061-UN\n- 000000000401693004-UN = 000000000401693004-UN\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El carro logueado mantiene 000000000000038061-UN x 2 y 000000000401693004-UN x 1 sin cambios.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-004",
   "name": "Verificar que un carro invitado vacío no altera el carro guardado del logueado",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla (\"could not get idle state\" / \"no XML content found in uiautomator dump\"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: vacío\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 2 y 000000000401693004-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con contador que impide el volcado",
     "file": "TC-B2C168-APP-004-android-p02-home-con-contador-que-impide-el-volcado.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.1 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000000674797-UN = 000000000400254005-UN\n- 000000000000038061-UN = 000000000000038061-UN\n- 000000000401693004-UN = 000000000401693004-UN\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El carro queda vacío y se muestra el estado de carro vacío.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-005",
   "name": "Verificar que con ambos carros vacíos se muestra el estado de carro vacío",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla (\"could not get idle state\" / \"no XML content found in uiautomator dump\"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: vacío\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con contador que impide el volcado",
     "file": "TC-B2C168-APP-005-android-p02-home-con-contador-que-impide-el-volcado.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.1 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000000674797-UN = 000000000400254005-UN\n- 000000000000038061-UN = 000000000000038061-UN\n- 000000000401693004-UN = 000000000401693004-UN\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El carro contiene 000000000000675191-UN x 1, 000000000000674797-UN x 2, 000000000000038061-UN x 1 y 000000000401693004-UN x 3.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-006",
   "name": "Verificar que productos distintos de ambos carros se suman sin modificar cantidades",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla (\"could not get idle state\" / \"no XML content found in uiautomator dump\"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000401693004-UN x 3 (preparado iniciando sesión previamente y cerrando sesión)\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con contador que impide el volcado",
     "file": "TC-B2C168-APP-006-android-p02-home-con-contador-que-impide-el-volcado.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.1 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000000674797-UN = 000000000400254005-UN\n- 000000000000038061-UN = 000000000000038061-UN\n- 000000000401693004-UN = 000000000401693004-UN\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El Store Locator muestra la próxima ventana horaria vigente para la dirección Calle Uno 23, La Florida de la sesión de invitado.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-007",
   "name": "Verificar que tras la fusión se reconsulta la ventana horaria de la tienda del invitado",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla (\"could not get idle state\" / \"no XML content found in uiautomator dump\"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- La sesión de invitado tiene seteada la dirección Calle Uno 23, La Florida\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con contador que impide el volcado",
     "file": "TC-B2C168-APP-007-android-p02-home-con-contador-que-impide-el-volcado.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario revisa la ventana horaria del Store Locator del header.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000000674797-UN = 000000000400254005-UN\n- 000000000000038061-UN = 000000000000038061-UN\n- 000000000401693004-UN = 000000000401693004-UN\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com\n- Calle Uno 23, La Florida = Casa"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "000000000000675191-UN queda con cantidad 2 (la del invitado), no 5 ni 7.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-008",
   "name": "Verificar que un producto duplicado queda con la cantidad del carro invitado",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla (\"could not get idle state\" / \"no XML content found in uiautomator dump\"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 2\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000675191-UN x 5 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con contador que impide el volcado",
     "file": "TC-B2C168-APP-008-android-p02-home-con-contador-que-impide-el-volcado.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.1 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000000674797-UN = 000000000400254005-UN\n- 000000000000038061-UN = 000000000000038061-UN\n- 000000000401693004-UN = 000000000401693004-UN\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El carro queda con 000000000000675191-UN x 2, 000000000000674797-UN x 1, 000000000000038061-UN x 3 y 000000000401693004-UN x 2.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-009",
   "name": "Verificar que con duplicados y distintos el carro fusionado aplica la regla a cada producto",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla (\"could not get idle state\" / \"no XML content found in uiautomator dump\"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 2, 000000000000674797-UN x 1 y 000000000000038061-UN x 3\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000674797-UN x 4, 000000000000038061-UN x 1 y 000000000401693004-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con contador que impide el volcado",
     "file": "TC-B2C168-APP-009-android-p02-home-con-contador-que-impide-el-volcado.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.1 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000000674797-UN = 000000000400254005-UN\n- 000000000000038061-UN = 000000000000038061-UN\n- 000000000401693004-UN = 000000000401693004-UN\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "000000000400254005-UN aparece en la sección de no disponibles del carro fusionado y 000000000000675191-UN en disponibles.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-010",
   "name": "Verificar que un producto del carro invitado sin stock se agrega marcado como no disponible",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla (\"could not get idle state\" / \"no XML content found in uiautomator dump\"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000400254005-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene ningún producto (preparado iniciando sesión previamente y cerrando sesión)\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con contador que impide el volcado",
     "file": "TC-B2C168-APP-010-android-p02-home-con-contador-que-impide-el-volcado.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.1 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com\n- 000000000400254005-UN = TBD\n- Unimarc Los leones = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "000000000400254005-UN permanece como no disponible y 000000000000038061-UN y 000000000000675191-UN quedan disponibles.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-011",
   "name": "Verificar que un producto del carro logueado sin stock permanece como no disponible",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla (\"could not get idle state\" / \"no XML content found in uiautomator dump\"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 y 000000000400254005-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con contador que impide el volcado",
     "file": "TC-B2C168-APP-011-android-p02-home-con-contador-que-impide-el-volcado.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.1 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000000038061-UN = 000000000000038061-UN\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com\n- 000000000400254005-UN = TBD\n- Unimarc Los leones = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Cada producto muestra el precio de su promoción vigente y el total y el \"Subtotal con Unipay\" se calculan sobre todos los productos fusionados.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-012",
   "name": "Verificar que tras la fusión se recalculan precios, promociones y subtotal con Unipay",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla (\"could not get idle state\" / \"no XML content found in uiautomator dump\"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: {SKU_PROM_NxM} x 1 y 000000000000661945-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000675191-UN x 2 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con contador que impide el volcado",
     "file": "TC-B2C168-APP-012-android-p02-home-con-contador-que-impide-el-volcado.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre la App v1.0.1 y toca el ícono del carro.\n4. El sistema carga el carrito.\n5. El usuario revisa precios, promociones y el resumen de totales.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com\n- {SKU_PROM_NxM} = 000000000641229002-UN\n- 000000000000661945-UN = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Ambos canales muestran el mismo carro fusionado y la unidad agregada en el otro canal se refleja aquí.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-013",
   "name": "Verificar que el carro fusionado se ve igual al abrirlo desde otro canal",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla (\"could not get idle state\" / \"no XML content found in uiautomator dump\"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 1\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000674797-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)\n- Acceso al otro canal (Web o App) con la misma cuenta",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con contador que impide el volcado",
     "file": "TC-B2C168-APP-013-android-p02-home-con-contador-que-impide-el-volcado.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n2. El sistema autentica al usuario y ejecuta la fusión de carros.\n3. El usuario abre el carro de la misma cuenta en otro canal (v1.0.1 si este es Web, o https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ si es App).\n4. El usuario suma 1 unidad de 000000000000675191-UN en el otro canal y vuelve a abrir el carro en este canal.",
   "test_data": "- https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000000674797-UN = 000000000400254005-UN\n- 000000000000038061-UN = 000000000000038061-UN\n- 000000000401693004-UN = 000000000401693004-UN\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "El carro de la nueva cuenta contiene 000000000000675191-UN x 1 y 000000000000674797-UN x 2.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-014",
   "name": "Verificar que un usuario que se registra por primera vez inicia con el carro invitado",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1): Causa: el caso parte de un carro con {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g'); ese producto no se puede agregar: como invitado la búsqueda por su código devuelve 'Sin resultados' y con la cuenta de prueba figura como 'Pronto disponible' con 'Ver similares' (sin stock, verificado en B2C-189). Sin carro no se llega a los pasos del caso. Acción: reponer el stock de {SKU_VALID_001} o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 1 y 000000000000674797-UN x 2\n- daunuruco+nuevo@avatar-global.com no está registrado (usar un correo nuevo por ejecución)",
   "screenshots": [
    {
     "caption": "Android · Estado final",
     "file": "TC-B2C168-APP-014-android.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario toca \"Ingresa\" y elige registrarse con el correo daunuruco+nuevo@avatar-global.com.\n2. El usuario completa el registro e inicia sesión.\n3. El usuario abre la App v1.0.1 y toca el ícono del carro.\n4. El sistema carga el carrito.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000000674797-UN = 000000000400254005-UN\n- daunuruco+nuevo@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El carro muestra el resultado de la fusión (000000000000675191-UN x 2 y 000000000000038061-UN x 1) sin necesidad de recargar.",
   "form_factor": "app",
   "id": "TC-B2C168-APP-015",
   "name": "Verificar que en Mobile y App el carro fusionado se refleja sin recargar",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa (ambiente): el caso parte de la Home de la app; desde el 27-oct la Home publica un componente con contador regresivo (días/horas/minutos/segundos) y carruseles que se actualizan sin pausa (capturas), y uiautomator no logra volcar esa pantalla (\"could not get idle state\" / \"no XML content found in uiautomator dump\"), por lo que mobilewright no puede ubicar ningún elemento ni iniciar el caso: la corrida de TC-B2C168-APP-002 falla al arrancar como invitado en la Home. No es un resultado del producto. Acción: repetir cuando la Home no tenga el contador animado o con un emulador/versión de uiautomator que vuelque pantallas no inactivas.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión de invitado con el carro: 000000000000675191-UN x 2\n- El carro guardado de la cuenta daunuruco+comprador@avatar-global.com contiene 000000000000038061-UN x 1 (preparado iniciando sesión previamente y cerrando sesión)",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — home con contador que impide el volcado",
     "file": "TC-B2C168-APP-015-android-p02-home-con-contador-que-impide-el-volcado.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Ingresa\" en la App e inicia sesión con la cuenta daunuruco+comprador@avatar-global.com.\n4. El sistema autentica al usuario y ejecuta la fusión de carros.\n5. El usuario vuelve al carro sin recargar.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000000674797-UN = 000000000400254005-UN\n- 000000000000038061-UN = 000000000000038061-UN\n- 000000000401693004-UN = 000000000401693004-UN\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  }
 ]
}
-->
