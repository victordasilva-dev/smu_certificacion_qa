# Cantidad y eliminación en el carro

| Campo | Valor |
|---|---|
| Suite | B2C-38 |
| Última actualización | 2026-11-03 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-38 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 30 |
| Rechazado | 2 |
| **Total** | **32** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-03 | 32 | TC-B2C38-D-001, TC-B2C38-D-002, TC-B2C38-D-003, TC-B2C38-D-004, TC-B2C38-D-005, TC-B2C38-D-006, TC-B2C38-D-007, TC-B2C38-D-008, TC-B2C38-D-009, TC-B2C38-D-010, TC-B2C38-D-011, TC-B2C38-D-012, TC-B2C38-D-013, TC-B2C38-D-014, TC-B2C38-D-015, TC-B2C38-M-001, TC-B2C38-M-002, TC-B2C38-M-003, TC-B2C38-M-004, TC-B2C38-M-005, TC-B2C38-M-006, TC-B2C38-M-007, TC-B2C38-M-008, TC-B2C38-M-009, TC-B2C38-M-010, TC-B2C38-M-011, TC-B2C38-M-012, TC-B2C38-M-013, TC-B2C38-M-014, TC-B2C38-M-015, TC-B2C38-M-016, TC-B2C38-M-017 |

## Detalle por caso de prueba

### TC-B2C38-D-001 - Verificar que el + de un producto estándar suma 1 unidad y actualiza el precio [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el control + del ítem {SKU_VALID_001}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

La cantidad pasa de 1 a 2, el precio del ítem se actualiza y el resumen de precios se recalcula.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-D-002 - Verificar que el − de un producto estándar con 2 unidades resta 1 unidad [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 2

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el control − del ítem {SKU_VALID_001}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

La cantidad pasa de 2 a 1, el precio del ítem se actualiza y el control − pasa a mostrarse como ícono de tacho.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-D-003 - Verificar que con 1 unidad el control − se muestra como tacho y elimina el ítem sin confirmar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario verifica que el control − del ítem {SKU_VALID_001} se muestra como ícono de tacho.
4. El usuario hace clic en el ícono de tacho del control de cantidad.
5. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

El ítem {SKU_VALID_001} se elimina del carrito sin solicitar confirmación y el resumen de precios se recalcula.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-D-004 - Verificar que el + de un producto pesable suma X Kg y actualiza el precio según el peso [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_PESABLE} con X Kg

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el control + del ítem {SKU_PESABLE}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

La cantidad pasa deX kg a 1+X kg y el precio del ítem se actualiza según el peso.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-D-005 - Verificar que el − de un producto pesable resta X Kg y actualiza el precio [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_PESABLE} con 1 kg

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el control − del ítem {SKU_PESABLE}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

La cantidad pasa de X kg a 1-X kg, el precio se actualiza según el peso y el control − pasa a mostrarse como ícono de tacho.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-D-006 - Verificar que un pesable en X Kg muestra el tacho y se elimina sin confirmar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_PESABLE} con X Kg y {SKU_VALID_001} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario verifica que el control − del ítem {SKU_PESABLE} se muestra como ícono de tacho.
4. El usuario hace clic en el ícono de tacho del control de cantidad.
5. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

El ítem {SKU_PESABLE} se elimina del carrito sin solicitar confirmación y el resumen de precios se recalcula.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-D-007 - Verificar que al llegar al cartlimit se muestra el toast de máximo y el botón Máx deshabilitado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- {SKU_CAR_LIMIT} tiene cartlimit configurado en BM
- El carro contiene {SKU_CAR_LIMIT} con 1 unidad menos que su cartlimit.
- El producto {SKU_CAR_LIMIT} tiene configurado como carlimit "5"

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_CAR_LIMIT} = 000000000000666357-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el control + del ítem {SKU_CAR_LIMIT} hasta alcanzar su cartlimit. ( El cartlimit configurado es 5)
4. El sistema muestra el toast informativo "Alcanzaste el máximo de productos" con ícono X.
5. El usuario hace clic en el botón "Máx" que reemplazó al +.
6. El sistema no agrega unidades.

**Resultado esperado**

Se muestra el toast "Alcanzaste el máximo de productos", el + se reemplaza por el botón deshabilitado "Máx" y la cantidad permanece en el cartlimit.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-D-008 - Verificar que al llegar al stock disponible se muestra el toast de máximo y el botón Máx deshabilitado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El stock de {SKU_STOCK_LIMITADO} en la tienda activa es menor a su cartlimit
- El carro contiene {SKU_STOCK_LIMITADO} con 1 unidad menos que su stock disponible

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_STOCK_LIMITADO} = 000000000638426003-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el control + del ítem {SKU_STOCK_LIMITADO} hasta alcanzar el stock disponible.
4. El sistema muestra el toast informativo "Alcanzaste el máximo de productos" con ícono X.

**Resultado esperado**

Se muestra el toast "Alcanzaste el máximo de productos", el + se reemplaza por "Máx" deshabilitado y la cantidad queda igual al stock disponible.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-D-009 - Verificar que el ícono de eliminar quita un ítem disponible sin confirmación [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el ícono de eliminar del ítem {SKU_UNITARIO}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

El ítem {SKU_UNITARIO} se elimina sin solicitar confirmación, {SKU_VALID_001} se mantiene y el resumen de precios se recalcula.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-D-010 - Verificar que el ícono de eliminar quita un ítem no disponible sin confirmación [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el ícono de eliminar del ítem no disponible {SKU_NO_DISPONIBLE}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

El ítem {SKU_NO_DISPONIBLE} se elimina sin solicitar confirmación y el resumen de precios se recalcula.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma la precondición 'el carro contiene {SKU_NO_DISPONIBLE}' antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU que tenga stock en la dirección/tienda activa y no en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma la precondición 'el carro contiene {SKU_NO_DISPONIBLE}' antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU que tenga stock en la dirección/tienda activa y no en {TIENDA_SIN_STOCK}.

---

### TC-B2C38-D-011 - Verificar que un error al eliminar muestra el toast CRT-021 y el ítem permanece [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el ícono de eliminar del ítem {SKU_UNITARIO}.
4. El sistema muestra el toast de error "No pudimos eliminar el producto del carro. Vuelve a intentarlo. [CRT-021]".
5. El usuario espera 5 segundos y luego cierra el toast con la X.

**Resultado esperado**

El toast CRT-021 permanece visible hasta que el usuario lo cierra con la X y el ítem {SKU_UNITARIO} permanece en el carrito sin cambios.

El total a pagar no se actualiza.

**Resultado obtenido**

Causa: {CART_ITEM_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio), y además la fila no declara la cuenta con la que se ejecuta. Acción: cargar el endpoint y declarar la cuenta.

**Observación**

Causa: {CART_ITEM_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio), y además la fila no declara la cuenta con la que se ejecuta. Acción: cargar el endpoint y declarar la cuenta.

---

### TC-B2C38-D-012 - Verificar que un error al incrementar muestra el toast CRT-022 y la cantidad no cambia [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 1
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el control + del ítem {SKU_VALID_001}.
4. El sistema muestra el toast de error "No pudimos sumar el producto a tu carro. Vuelve a intentarlo. [CRT-022]".

**Resultado esperado**

Se muestra el toast CRT-022 con cierre manual (X) y la cantidad de {SKU_VALID_001} permanece en 1.

El total a pagar no se actualiza.

**Resultado obtenido**

Causa: {CART_ITEM_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio), y además la fila no declara la cuenta con la que se ejecuta. Acción: cargar el endpoint y declarar la cuenta.

**Observación**

Causa: {CART_ITEM_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio), y además la fila no declara la cuenta con la que se ejecuta. Acción: cargar el endpoint y declarar la cuenta.

---

### TC-B2C38-D-013 - Verificar que un error al disminuir muestra el toast CRT-023 y la cantidad no cambia [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 2
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el control − del ítem {SKU_VALID_001}.
4. El sistema muestra el toast de error "No pudimos disminuir la cantidad de tu producto. Vuelve a intentarlo.[CRT-023]".

**Resultado esperado**

Se muestra el toast CRT-023 con cierre manual (X) y la cantidad de {SKU_VALID_001} permanece en 2.

El total a pagar no se actualiza.

**Resultado obtenido**

Causa: {CART_ITEM_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio), y además la fila no declara la cuenta con la que se ejecuta. Acción: cargar el endpoint y declarar la cuenta.

**Observación**

Causa: {CART_ITEM_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio), y además la fila no declara la cuenta con la que se ejecuta. Acción: cargar el endpoint y declarar la cuenta.

---

### TC-B2C38-D-014 - Verificar que al quedar bajo el mínimo de compra se deshabilita Continuar con la entrega [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el control − del ítem {SKU_VALID_001} hasta que el subtotal quede bajo {MONTO_MINIMO_COMPRA}.
4. El sistema recalcula el resumen de precios en tiempo real.

**Resultado esperado**

El botón "Continuar con la entrega" se muestra deshabilitado y se muestra el mensaje informativo de mínimo de compra sobre el subtotal.

**Resultado obtenido**

Esperado: el botón 'Continuar con la entrega' se muestra deshabilitado y se muestra el mensaje informativo de mínimo de compra sobre el subtotal. Obtenido: al bajar de $20.000 (subtotal $19.920) el botón 'Continuar con la entrega' desaparece y en su lugar queda un botón deshabilitado 'Mínimo de compra $20.000' bajo el subtotal; el aviso aparece como un toast al pie ('¡Solo te faltan $80 para ir a pagar!'), no sobre el subtotal. Funcionalmente no se puede continuar; la diferencia es de texto y ubicación respecto de la planilla. tests/B2C-38.spec.ts.

**Observación**

Esperado: el botón 'Continuar con la entrega' se muestra deshabilitado y se muestra el mensaje informativo de mínimo de compra sobre el subtotal. Obtenido: al bajar de $20.000 (subtotal $19.920) el botón 'Continuar con la entrega' desaparece y en su lugar queda un botón deshabilitado 'Mínimo de compra $20.000' bajo el subtotal; el aviso aparece como un toast al pie ('¡Solo te faltan $80 para ir a pagar!'), no sobre el subtotal. Funcionalmente no se puede continuar; la diferencia es de texto y ubicación respecto de la planilla. tests/B2C-38.spec.ts.

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-38 Evidencias/TC-B2C38-D-014-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 4 — carro bajo el minimo de compra](<B2C-38 Evidencias/TC-B2C38-D-014-p04-carro-bajo-el-minimo-de-compra.png>)

![Estado final](<B2C-38 Evidencias/TC-B2C38-D-014.png>)

---

### TC-B2C38-M-001 - Verificar que el + de un producto estándar suma 1 unidad y actualiza el precio [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el control + del ítem {SKU_VALID_001}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

La cantidad pasa de 1 a 2, el precio del ítem se actualiza y el resumen de precios se recalcula.

**Resultado obtenido**

Causa: la precondición pide el carro con {SKU_VALID_001} como invitado, y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado.

**Observación**

Causa: la precondición pide el carro con {SKU_VALID_001} como invitado, y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado.

---

### TC-B2C38-M-002 - Verificar que el − de un producto estándar con 2 unidades resta 1 unidad [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 2

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el control − del ítem {SKU_VALID_001}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

La cantidad pasa de 2 a 1, el precio del ítem se actualiza y el control − pasa a mostrarse como ícono de tacho.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-M-003 - Verificar que con 1 unidad el control − se muestra como tacho y elimina el ítem sin confirmar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario verifica que el control − del ítem {SKU_VALID_001} se muestra como ícono de tacho.
4. El usuario toca el ícono de tacho del control de cantidad.
5. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

El ítem {SKU_VALID_001} se elimina del carrito sin solicitar confirmación y el resumen de precios se recalcula.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-M-004 - Verificar que el + de un producto pesable suma X Kg y actualiza el precio según el peso [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_PESABLE}

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el control + del ítem {SKU_PESABLE}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

La cantidad pasa de X kg a 1+X kg y el precio del ítem se actualiza según el peso.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-M-005 - Verificar que el − de un producto pesable resta X y actualiza el precio [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_PESABLE} con 1 kg

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el control − del ítem {SKU_PESABLE}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

La cantidad pasa de X kg a X-1 kg, el precio se actualiza según el peso y el control − pasa a mostrarse como ícono de tacho.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-M-006 - Verificar que un pesable en X muestra el tacho y se elimina sin confirmar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_PESABLE} con X kg y {SKU_VALID_001} x 1

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario verifica que el control − del ítem {SKU_PESABLE} se muestra como ícono de tacho.
4. El usuario toca el ícono de tacho del control de cantidad.
5. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

El ítem {SKU_PESABLE} se elimina del carrito sin solicitar confirmación y el resumen de precios se recalcula.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-M-007 - Verificar que al llegar al cartlimit se muestra el toast de máximo y el botón Máx deshabilitado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- {SKU_CAR_LIMIT} tiene cartlimit 5 configurado en BM
- El carro contiene {SKU_CAR_LIMIT} con 1 unidad menos que su cartlimit.
- El producto {SKU_CAR_LIMIT} tiene configurado como carlimit "5"

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_CAR_LIMIT} = 000000000000666357-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el control + del ítem {SKU_CAR_LIMIT} hasta alcanzar su cartlimit. (El cartlimit configurado es de 5)
4. El sistema muestra el toast informativo "Alcanzaste el máximo de productos" con ícono X.
5. El usuario toca el botón "Máx" que reemplazó al +.
6. El sistema no agrega unidades.

**Resultado esperado**

Se muestra el toast "Alcanzaste el máximo de productos", el + se reemplaza por el botón deshabilitado "Máx" y la cantidad permanece en el cartlimit.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-M-008 - Verificar que al llegar al stock disponible se muestra el toast de máximo y el botón Máx deshabilitado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El stock de {SKU_STOCK_LIMITADO} en la tienda activa es menor a su cartlimit
- El carro contiene {SKU_STOCK_LIMITADO} con 1 unidad menos que su stock disponible

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_STOCK_LIMITADO} = 000000000638426003-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el control + del ítem {SKU_STOCK_LIMITADO} hasta alcanzar el stock disponible.
4. El sistema muestra el toast informativo "Alcanzaste el máximo de productos" con ícono X.

**Resultado esperado**

Se muestra el toast "Alcanzaste el máximo de productos", el + se reemplaza por "Máx" deshabilitado y la cantidad queda igual al stock disponible.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-M-009 - Verificar que el ícono de eliminar quita un ítem disponible sin confirmación [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el ícono de eliminar del ítem {SKU_UNITARIO}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

El ítem {SKU_UNITARIO} se elimina sin solicitar confirmación, {SKU_VALID_001} se mantiene y el resumen de precios se recalcula.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-M-010 - Verificar que el swipe to delete quita un ítem disponible sin confirmación [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem {SKU_UNITARIO} y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

El ítem {SKU_UNITARIO} se elimina sin solicitar confirmación y el resumen de precios se recalcula.

**Resultado obtenido**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

**Observación**

Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.

---

### TC-B2C38-M-011 - Verificar que el ícono de eliminar quita un ítem no disponible sin confirmación [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el ícono de eliminar del ítem no disponible {SKU_NO_DISPONIBLE}.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

El ítem {SKU_NO_DISPONIBLE} se elimina sin solicitar confirmación y el resumen de precios se recalcula.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma la precondición 'el carro contiene {SKU_NO_DISPONIBLE}' antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU que tenga stock en la dirección/tienda activa y no en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma la precondición 'el carro contiene {SKU_NO_DISPONIBLE}' antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU que tenga stock en la dirección/tienda activa y no en {TIENDA_SIN_STOCK}.

---

### TC-B2C38-M-012 - Verificar que el swipe to delete quita un ítem no disponible sin confirmación [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_NO_DISPONIBLE} = 000000000400254005-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_SIN_STOCK} = Unimarc Los leones

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem {SKU_NO_DISPONIBLE} y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.

**Resultado esperado**

El ítem {SKU_NO_DISPONIBLE} se elimina sin solicitar confirmación y el resumen de precios se recalcula.

**Resultado obtenido**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma la precondición 'el carro contiene {SKU_NO_DISPONIBLE}' antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU que tenga stock en la dirección/tienda activa y no en {TIENDA_SIN_STOCK}.

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma la precondición 'el carro contiene {SKU_NO_DISPONIBLE}' antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU que tenga stock en la dirección/tienda activa y no en {TIENDA_SIN_STOCK}.

---

### TC-B2C38-M-016 - Verificar que al quedar bajo el mínimo de compra se deshabilita Continuar con la entrega [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}
- Método de entrega activo

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{MONTO_MINIMO_COMPRA} = 20000

{SKU_VALID_001} = 000000000000675191-UN

{UNIDADES_SOBRE_MINIMO} = 11

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el control − del ítem {SKU_VALID_001} hasta que el subtotal quede bajo {MONTO_MINIMO_COMPRA}.
4. El sistema recalcula el resumen de precios en tiempo real.

**Resultado esperado**

El botón "Continuar con la entrega" se muestra deshabilitado y se muestra el mensaje informativo de mínimo de compra sobre el subtotal.

**Resultado obtenido**

Esperado: el botón 'Continuar con la entrega' se muestra deshabilitado y se muestra el mensaje informativo de mínimo de compra sobre el subtotal. Obtenido: al bajar de $20.000 (subtotal $19.920) el botón 'Continuar con la entrega' desaparece y en su lugar queda un botón deshabilitado 'Mínimo de compra $20.000' bajo el subtotal; el aviso aparece como un toast al pie ('¡Solo te faltan $80 para ir a pagar!'), no sobre el subtotal. Funcionalmente no se puede continuar; la diferencia es de texto y ubicación respecto de la planilla. tests/B2C-38.spec.ts.

**Observación**

Esperado: el botón 'Continuar con la entrega' se muestra deshabilitado y se muestra el mensaje informativo de mínimo de compra sobre el subtotal. Obtenido: al bajar de $20.000 (subtotal $19.920) el botón 'Continuar con la entrega' desaparece y en su lugar queda un botón deshabilitado 'Mínimo de compra $20.000' bajo el subtotal; el aviso aparece como un toast al pie ('¡Solo te faltan $80 para ir a pagar!'), no sobre el subtotal. Funcionalmente no se puede continuar; la diferencia es de texto y ubicación respecto de la planilla. tests/B2C-38.spec.ts.

**Evidencia**

![Paso 2 — carro sobre el minimo de compra](<B2C-38 Evidencias/TC-B2C38-M-016-p02-carro-sobre-el-minimo-de-compra.png>)

![Paso 4 — carro bajo el minimo de compra](<B2C-38 Evidencias/TC-B2C38-M-016-p04-carro-bajo-el-minimo-de-compra.png>)

![Estado final](<B2C-38 Evidencias/TC-B2C38-M-016.png>)

---

### TC-B2C38-M-013 - Verificar que un error al eliminar muestra el toast CRT-021 y el ítem permanece [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {CART_ITEM_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el ícono de eliminar del ítem {SKU_UNITARIO}.
4. El sistema muestra el toast de error "No pudimos eliminar el producto del carro. Vuelve a intentarlo. [CRT-021]".
5. El usuario espera 5 segundos y luego cierra el toast con la X.

**Resultado esperado**

El toast CRT-021 permanece visible hasta que el usuario lo cierra con la X y el ítem {SKU_UNITARIO} permanece en el carrito sin cambios.

**Observación**

el TC se ejecuta con una cuenta logueada y su columna Test data no declara cuál: ningún token de usuario. Sin la cuenta no se puede correr sin elegirla a dedo, y eso invalidaría el veredicto. Además usa {CART_ITEM_API_ENDPOINT} para bloquear la request. Falta declarar la cuenta en el Test data del TC (lo hace quien mantiene la planilla).

---

### TC-B2C38-M-014 - Verificar que un error al incrementar muestra el toast CRT-022 y la cantidad no cambia [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 1
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {CART_ITEM_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el control + del ítem {SKU_VALID_001}.
4. El sistema muestra el toast de error "No pudimos sumar el producto a tu carro. Vuelve a intentarlo. [CRT-022]".

**Resultado esperado**

Se muestra el toast CRT-022 con cierre manual (X) y la cantidad de {SKU_VALID_001} permanece en 1.

**Observación**

el TC se ejecuta con una cuenta logueada y su columna Test data no declara cuál: ningún token de usuario. Sin la cuenta no se puede correr sin elegirla a dedo, y eso invalidaría el veredicto. Además usa {CART_ITEM_API_ENDPOINT} para bloquear la request. Falta declarar la cuenta en el Test data del TC (lo hace quien mantiene la planilla).

---

### TC-B2C38-M-015 - Verificar que un error al disminuir muestra el toast CRT-023 y la cantidad no cambia [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} x 2
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {CART_ITEM_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el control − del ítem {SKU_VALID_001}.
4. El sistema muestra el toast de error "No pudimos disminuir la cantidad de tu producto. Vuelve a intentarlo.[CRT-023]".

**Resultado esperado**

Se muestra el toast CRT-023 con cierre manual (X) y la cantidad de {SKU_VALID_001} permanece en 2.

**Observación**

el TC se ejecuta con una cuenta logueada y su columna Test data no declara cuál: ningún token de usuario. Sin la cuenta no se puede correr sin elegirla a dedo, y eso invalidaría el veredicto. Además usa {CART_ITEM_API_ENDPOINT} para bloquear la request. Falta declarar la cuenta en el Test data del TC (lo hace quien mantiene la planilla).

---

### TC-B2C38-D-015 - Verificar que al llegar al stock disponible de un producto pesable se muestra el toast de máximo y el botón Máx deshabilitado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- {SKU_PESABLE} tiene stock limitado en la tienda activa
- El carro contiene {SKU_PESABLE_STOCK_LIMITADO} con X Kg menos que su stock disponible
- El Stock maximo del producto {SKU_PESABLE_STOCK_LIMITADO} es 4

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {COMPRADOR_USER} = TBD
- {SKU_PESABLE} = 000000000000037972-KG
- {BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el control + del ítem {SKU_PESABLE_STOCK_LIMITADO}.
4. El sistema muestra un loading en el shelf y suma X Kg, alcanzando el stock disponible.
5. El sistema muestra el toast informativo "Alcanzaste el máximo de productos" con ícono X.

**Resultado esperado**

Se muestra el toast "Alcanzaste el máximo de productos", el + se reemplaza por "Máx" deshabilitado y la cantidad en kg queda igual al stock disponible.

**Observación**

el TC se ejecuta con una cuenta logueada y su columna Test data no declara cuál: ningún token de usuario. Sin la cuenta no se puede correr sin elegirla a dedo, y eso invalidaría el veredicto. Falta declarar la cuenta en el Test data del TC (lo hace quien mantiene la planilla).

---

### TC-B2C38-M-017 - Verificar que al llegar al stock disponible de un producto pesable se muestra el toast de máximo y el botón Máx deshabilitado [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-03 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-38.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- {SKU_PESABLE_STOCK_LIMITADO} tiene stock limitado en la tienda activa
- El carro contiene {SKU_PESABLE_STOCK_LIMITADO} con X Kg menos que su stock disponible
- El Stock maximo del producto {SKU_PESABLE_STOCK_LIMITADO} es 4

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {COMPRADOR_USER} = TBD
- {SKU_PESABLE_STOCK_LIMITADO} = 000000000000037972-KG
- {BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el control + del ítem {SKU_PESABLE_STOCK_LIMITADO}.
4. El sistema muestra un loading en el shelf y suma X Kg, alcanzando el stock disponible.
5. El sistema muestra el toast informativo "Alcanzaste el máximo de productos" con ícono X.

**Resultado esperado**

Se muestra el toast "Alcanzaste el máximo de productos", el + se reemplaza por "Máx" deshabilitado y la cantidad en kg queda igual al stock disponible.

**Observación**

el TC se ejecuta con una cuenta logueada y su columna Test data no declara cuál: ningún token de usuario. Sin la cuenta no se puede correr sin elegirla a dedo, y eso invalidaría el veredicto. Falta declarar la cuenta en el Test data del TC (lo hace quien mantiene la planilla).

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
  "suite": "B2C-38",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-38 Test Cases.xlsx",
  "title": "Cantidad y eliminación en el carro",
  "updated_at": "2026-11-03"
 },
 "history": {
  "2026-11-03": [
   "TC-B2C38-D-001",
   "TC-B2C38-D-002",
   "TC-B2C38-D-003",
   "TC-B2C38-D-004",
   "TC-B2C38-D-005",
   "TC-B2C38-D-006",
   "TC-B2C38-D-007",
   "TC-B2C38-D-008",
   "TC-B2C38-D-009",
   "TC-B2C38-D-010",
   "TC-B2C38-D-011",
   "TC-B2C38-D-012",
   "TC-B2C38-D-013",
   "TC-B2C38-D-014",
   "TC-B2C38-D-015",
   "TC-B2C38-M-001",
   "TC-B2C38-M-002",
   "TC-B2C38-M-003",
   "TC-B2C38-M-004",
   "TC-B2C38-M-005",
   "TC-B2C38-M-006",
   "TC-B2C38-M-007",
   "TC-B2C38-M-008",
   "TC-B2C38-M-009",
   "TC-B2C38-M-010",
   "TC-B2C38-M-011",
   "TC-B2C38-M-012",
   "TC-B2C38-M-013",
   "TC-B2C38-M-014",
   "TC-B2C38-M-015",
   "TC-B2C38-M-016",
   "TC-B2C38-M-017"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La cantidad pasa de 1 a 2, el precio del ítem se actualiza y el resumen de precios se recalcula.",
   "form_factor": "desktop",
   "id": "TC-B2C38-D-001",
   "name": "Verificar que el + de un producto estándar suma 1 unidad y actualiza el precio [Desktop] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 1",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control + del ítem {SKU_VALID_001}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La cantidad pasa de 2 a 1, el precio del ítem se actualiza y el control − pasa a mostrarse como ícono de tacho.",
   "form_factor": "desktop",
   "id": "TC-B2C38-D-002",
   "name": "Verificar que el − de un producto estándar con 2 unidades resta 1 unidad [Desktop] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 2",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control − del ítem {SKU_VALID_001}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El ítem {SKU_VALID_001} se elimina del carrito sin solicitar confirmación y el resumen de precios se recalcula.",
   "form_factor": "desktop",
   "id": "TC-B2C38-D-003",
   "name": "Verificar que con 1 unidad el control − se muestra como tacho y elimina el ítem sin confirmar [Desktop] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario verifica que el control − del ítem {SKU_VALID_001} se muestra como ícono de tacho.\n4. El usuario hace clic en el ícono de tacho del control de cantidad.\n5. El sistema muestra un loading en el shelf del producto.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La cantidad pasa deX kg a 1+X kg y el precio del ítem se actualiza según el peso.",
   "form_factor": "desktop",
   "id": "TC-B2C38-D-004",
   "name": "Verificar que el + de un producto pesable suma X Kg y actualiza el precio según el peso [Desktop] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE} con X Kg",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control + del ítem {SKU_PESABLE}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La cantidad pasa de X kg a 1-X kg, el precio se actualiza según el peso y el control − pasa a mostrarse como ícono de tacho.",
   "form_factor": "desktop",
   "id": "TC-B2C38-D-005",
   "name": "Verificar que el − de un producto pesable resta X Kg y actualiza el precio [Desktop] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE} con 1 kg",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control − del ítem {SKU_PESABLE}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El ítem {SKU_PESABLE} se elimina del carrito sin solicitar confirmación y el resumen de precios se recalcula.",
   "form_factor": "desktop",
   "id": "TC-B2C38-D-006",
   "name": "Verificar que un pesable en X Kg muestra el tacho y se elimina sin confirmar [Desktop] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE} con X Kg y {SKU_VALID_001} x 1",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario verifica que el control − del ítem {SKU_PESABLE} se muestra como ícono de tacho.\n4. El usuario hace clic en el ícono de tacho del control de cantidad.\n5. El sistema muestra un loading en el shelf del producto.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast \"Alcanzaste el máximo de productos\", el + se reemplaza por el botón deshabilitado \"Máx\" y la cantidad permanece en el cartlimit.",
   "form_factor": "desktop",
   "id": "TC-B2C38-D-007",
   "name": "Verificar que al llegar al cartlimit se muestra el toast de máximo y el botón Máx deshabilitado [Desktop] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- {SKU_CAR_LIMIT} tiene cartlimit configurado en BM\n- El carro contiene {SKU_CAR_LIMIT} con 1 unidad menos que su cartlimit.\n- El producto {SKU_CAR_LIMIT} tiene configurado como carlimit \"5\"",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control + del ítem {SKU_CAR_LIMIT} hasta alcanzar su cartlimit. ( El cartlimit configurado es 5)\n4. El sistema muestra el toast informativo \"Alcanzaste el máximo de productos\" con ícono X.\n5. El usuario hace clic en el botón \"Máx\" que reemplazó al +.\n6. El sistema no agrega unidades.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_CAR_LIMIT} = 000000000000666357-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast \"Alcanzaste el máximo de productos\", el + se reemplaza por \"Máx\" deshabilitado y la cantidad queda igual al stock disponible.",
   "form_factor": "desktop",
   "id": "TC-B2C38-D-008",
   "name": "Verificar que al llegar al stock disponible se muestra el toast de máximo y el botón Máx deshabilitado [Desktop] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El stock de {SKU_STOCK_LIMITADO} en la tienda activa es menor a su cartlimit\n- El carro contiene {SKU_STOCK_LIMITADO} con 1 unidad menos que su stock disponible",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control + del ítem {SKU_STOCK_LIMITADO} hasta alcanzar el stock disponible.\n4. El sistema muestra el toast informativo \"Alcanzaste el máximo de productos\" con ícono X.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_STOCK_LIMITADO} = 000000000638426003-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El ítem {SKU_UNITARIO} se elimina sin solicitar confirmación, {SKU_VALID_001} se mantiene y el resumen de precios se recalcula.",
   "form_factor": "desktop",
   "id": "TC-B2C38-D-009",
   "name": "Verificar que el ícono de eliminar quita un ítem disponible sin confirmación [Desktop] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el ícono de eliminar del ítem {SKU_UNITARIO}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El ítem {SKU_NO_DISPONIBLE} se elimina sin solicitar confirmación y el resumen de precios se recalcula.",
   "form_factor": "desktop",
   "id": "TC-B2C38-D-010",
   "name": "Verificar que el ícono de eliminar quita un ítem no disponible sin confirmación [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma la precondición 'el carro contiene {SKU_NO_DISPONIBLE}' antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU que tenga stock en la dirección/tienda activa y no en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma la precondición 'el carro contiene {SKU_NO_DISPONIBLE}' antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU que tenga stock en la dirección/tienda activa y no en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el ícono de eliminar del ítem no disponible {SKU_NO_DISPONIBLE}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El toast CRT-021 permanece visible hasta que el usuario lo cierra con la X y el ítem {SKU_UNITARIO} permanece en el carrito sin cambios.\n El total a pagar no se actualiza.",
   "form_factor": "desktop",
   "id": "TC-B2C38-D-011",
   "name": "Verificar que un error al eliminar muestra el toast CRT-021 y el ítem permanece [Desktop] [Logueado]",
   "observation": "Causa: {CART_ITEM_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio), y además la fila no declara la cuenta con la que se ejecuta. Acción: cargar el endpoint y declarar la cuenta.",
   "observed": "Causa: {CART_ITEM_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio), y además la fila no declara la cuenta con la que se ejecuta. Acción: cargar el endpoint y declarar la cuenta.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el ícono de eliminar del ítem {SKU_UNITARIO}.\n4. El sistema muestra el toast de error \"No pudimos eliminar el producto del carro. Vuelve a intentarlo. [CRT-021]\".\n5. El usuario espera 5 segundos y luego cierra el toast con la X.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast CRT-022 con cierre manual (X) y la cantidad de {SKU_VALID_001} permanece en 1.\n El total a pagar no se actualiza.",
   "form_factor": "desktop",
   "id": "TC-B2C38-D-012",
   "name": "Verificar que un error al incrementar muestra el toast CRT-022 y la cantidad no cambia [Desktop] [Logueado]",
   "observation": "Causa: {CART_ITEM_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio), y además la fila no declara la cuenta con la que se ejecuta. Acción: cargar el endpoint y declarar la cuenta.",
   "observed": "Causa: {CART_ITEM_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio), y además la fila no declara la cuenta con la que se ejecuta. Acción: cargar el endpoint y declarar la cuenta.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 1\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control + del ítem {SKU_VALID_001}.\n4. El sistema muestra el toast de error \"No pudimos sumar el producto a tu carro. Vuelve a intentarlo. [CRT-022]\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast CRT-023 con cierre manual (X) y la cantidad de {SKU_VALID_001} permanece en 2.\n El total a pagar no se actualiza.",
   "form_factor": "desktop",
   "id": "TC-B2C38-D-013",
   "name": "Verificar que un error al disminuir muestra el toast CRT-023 y la cantidad no cambia [Desktop] [Logueado]",
   "observation": "Causa: {CART_ITEM_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio), y además la fila no declara la cuenta con la que se ejecuta. Acción: cargar el endpoint y declarar la cuenta.",
   "observed": "Causa: {CART_ITEM_API_ENDPOINT} está en TBD en el Excel de data (necesario para forzar el error del servicio), y además la fila no declara la cuenta con la que se ejecuta. Acción: cargar el endpoint y declarar la cuenta.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 2\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control − del ítem {SKU_VALID_001}.\n4. El sistema muestra el toast de error \"No pudimos disminuir la cantidad de tu producto. Vuelve a intentarlo.[CRT-023]\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El botón \"Continuar con la entrega\" se muestra deshabilitado y se muestra el mensaje informativo de mínimo de compra sobre el subtotal.",
   "form_factor": "desktop",
   "id": "TC-B2C38-D-014",
   "name": "Verificar que al quedar bajo el mínimo de compra se deshabilita Continuar con la entrega [Desktop] [Logueado]",
   "observation": "Esperado: el botón 'Continuar con la entrega' se muestra deshabilitado y se muestra el mensaje informativo de mínimo de compra sobre el subtotal. Obtenido: al bajar de $20.000 (subtotal $19.920) el botón 'Continuar con la entrega' desaparece y en su lugar queda un botón deshabilitado 'Mínimo de compra $20.000' bajo el subtotal; el aviso aparece como un toast al pie ('¡Solo te faltan $80 para ir a pagar!'), no sobre el subtotal. Funcionalmente no se puede continuar; la diferencia es de texto y ubicación respecto de la planilla. tests/B2C-38.spec.ts.",
   "observed": "Esperado: el botón 'Continuar con la entrega' se muestra deshabilitado y se muestra el mensaje informativo de mínimo de compra sobre el subtotal. Obtenido: al bajar de $20.000 (subtotal $19.920) el botón 'Continuar con la entrega' desaparece y en su lugar queda un botón deshabilitado 'Mínimo de compra $20.000' bajo el subtotal; el aviso aparece como un toast al pie ('¡Solo te faltan $80 para ir a pagar!'), no sobre el subtotal. Funcionalmente no se puede continuar; la diferencia es de texto y ubicación respecto de la planilla. tests/B2C-38.spec.ts.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C38-D-014-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 4 — carro bajo el minimo de compra",
     "file": "TC-B2C38-D-014-p04-carro-bajo-el-minimo-de-compra.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C38-D-014.png"
    }
   ],
   "spec": "tests/B2C-38.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control − del ítem {SKU_VALID_001} hasta que el subtotal quede bajo {MONTO_MINIMO_COMPRA}.\n4. El sistema recalcula el resumen de precios en tiempo real.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La cantidad pasa de 1 a 2, el precio del ítem se actualiza y el resumen de precios se recalcula.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-001",
   "name": "Verificar que el + de un producto estándar suma 1 unidad y actualiza el precio [Mobile] [Guest]",
   "observation": "Causa: la precondición pide el carro con {SKU_VALID_001} como invitado, y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado.",
   "observed": "Causa: la precondición pide el carro con {SKU_VALID_001} como invitado, y un invitado sin dirección no puede agregar ('Agregar' abre 'Elige tu método de entrega'); la fila no declara la dirección con la que se arma el carro. Acción: declarar en la fila la dirección del invitado.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 1",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el control + del ítem {SKU_VALID_001}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La cantidad pasa de 2 a 1, el precio del ítem se actualiza y el control − pasa a mostrarse como ícono de tacho.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-002",
   "name": "Verificar que el − de un producto estándar con 2 unidades resta 1 unidad [Mobile] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 2",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el control − del ítem {SKU_VALID_001}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El ítem {SKU_VALID_001} se elimina del carrito sin solicitar confirmación y el resumen de precios se recalcula.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-003",
   "name": "Verificar que con 1 unidad el control − se muestra como tacho y elimina el ítem sin confirmar [Mobile] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario verifica que el control − del ítem {SKU_VALID_001} se muestra como ícono de tacho.\n4. El usuario toca el ícono de tacho del control de cantidad.\n5. El sistema muestra un loading en el shelf del producto.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La cantidad pasa de X kg a 1+X kg y el precio del ítem se actualiza según el peso.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-004",
   "name": "Verificar que el + de un producto pesable suma X Kg y actualiza el precio según el peso [Mobile] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE}",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el control + del ítem {SKU_PESABLE}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "La cantidad pasa de X kg a X-1 kg, el precio se actualiza según el peso y el control − pasa a mostrarse como ícono de tacho.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-005",
   "name": "Verificar que el − de un producto pesable resta X y actualiza el precio [Mobile] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE} con 1 kg",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el control − del ítem {SKU_PESABLE}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El ítem {SKU_PESABLE} se elimina del carrito sin solicitar confirmación y el resumen de precios se recalcula.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-006",
   "name": "Verificar que un pesable en X muestra el tacho y se elimina sin confirmar [Mobile] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_PESABLE} con X kg y {SKU_VALID_001} x 1",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario verifica que el control − del ítem {SKU_PESABLE} se muestra como ícono de tacho.\n4. El usuario toca el ícono de tacho del control de cantidad.\n5. El sistema muestra un loading en el shelf del producto.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast \"Alcanzaste el máximo de productos\", el + se reemplaza por el botón deshabilitado \"Máx\" y la cantidad permanece en el cartlimit.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-007",
   "name": "Verificar que al llegar al cartlimit se muestra el toast de máximo y el botón Máx deshabilitado [Mobile] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- {SKU_CAR_LIMIT} tiene cartlimit 5 configurado en BM\n- El carro contiene {SKU_CAR_LIMIT} con 1 unidad menos que su cartlimit.\n- El producto {SKU_CAR_LIMIT} tiene configurado como carlimit \"5\"",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el control + del ítem {SKU_CAR_LIMIT} hasta alcanzar su cartlimit. (El cartlimit configurado es de 5)\n4. El sistema muestra el toast informativo \"Alcanzaste el máximo de productos\" con ícono X.\n5. El usuario toca el botón \"Máx\" que reemplazó al +.\n6. El sistema no agrega unidades.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_CAR_LIMIT} = 000000000000666357-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se muestra el toast \"Alcanzaste el máximo de productos\", el + se reemplaza por \"Máx\" deshabilitado y la cantidad queda igual al stock disponible.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-008",
   "name": "Verificar que al llegar al stock disponible se muestra el toast de máximo y el botón Máx deshabilitado [Mobile] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El stock de {SKU_STOCK_LIMITADO} en la tienda activa es menor a su cartlimit\n- El carro contiene {SKU_STOCK_LIMITADO} con 1 unidad menos que su stock disponible",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el control + del ítem {SKU_STOCK_LIMITADO} hasta alcanzar el stock disponible.\n4. El sistema muestra el toast informativo \"Alcanzaste el máximo de productos\" con ícono X.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_STOCK_LIMITADO} = 000000000638426003-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El ítem {SKU_UNITARIO} se elimina sin solicitar confirmación, {SKU_VALID_001} se mantiene y el resumen de precios se recalcula.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-009",
   "name": "Verificar que el ícono de eliminar quita un ítem disponible sin confirmación [Mobile] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el ícono de eliminar del ítem {SKU_UNITARIO}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El ítem {SKU_UNITARIO} se elimina sin solicitar confirmación y el resumen de precios se recalcula.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-010",
   "name": "Verificar que el swipe to delete quita un ítem disponible sin confirmación [Mobile] [Logueado]",
   "observation": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "observed": "Causa: el caso se ejecuta con sesión iniciada (User type: Logueado) y su columna Test data no declara la cuenta. Acción: declarar en la fila el token de la cuenta (p. ej. {USER_AUTH_001}) con la que se ejecuta.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 2",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem {SKU_UNITARIO} y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El ítem {SKU_NO_DISPONIBLE} se elimina sin solicitar confirmación y el resumen de precios se recalcula.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-011",
   "name": "Verificar que el ícono de eliminar quita un ítem no disponible sin confirmación [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma la precondición 'el carro contiene {SKU_NO_DISPONIBLE}' antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU que tenga stock en la dirección/tienda activa y no en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma la precondición 'el carro contiene {SKU_NO_DISPONIBLE}' antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU que tenga stock en la dirección/tienda activa y no en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el ícono de eliminar del ítem no disponible {SKU_NO_DISPONIBLE}.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El ítem {SKU_NO_DISPONIBLE} se elimina sin solicitar confirmación y el resumen de precios se recalcula.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-012",
   "name": "Verificar que el swipe to delete quita un ítem no disponible sin confirmación [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma la precondición 'el carro contiene {SKU_NO_DISPONIBLE}' antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU que tenga stock en la dirección/tienda activa y no en {TIENDA_SIN_STOCK}.",
   "observed": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN, Picado Nestlé Naturnes) figura 'Pronto disponible' también con el despacho activo a Calle Uno 23, La Florida: no se puede agregar al carro, así que no se arma la precondición 'el carro contiene {SKU_NO_DISPONIBLE}' antes de pasar a {TIENDA_SIN_STOCK}. Acción: declarar un SKU que tenga stock en la dirección/tienda activa y no en {TIENDA_SIN_STOCK}.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem {SKU_NO_DISPONIBLE} y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra un loading en el shelf del producto mientras procesa la solicitud.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_NO_DISPONIBLE} = 000000000400254005-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_SIN_STOCK} = Unimarc Los leones\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El botón \"Continuar con la entrega\" se muestra deshabilitado y se muestra el mensaje informativo de mínimo de compra sobre el subtotal.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-016",
   "name": "Verificar que al quedar bajo el mínimo de compra se deshabilita Continuar con la entrega [Mobile] [Logueado]",
   "observation": "Esperado: el botón 'Continuar con la entrega' se muestra deshabilitado y se muestra el mensaje informativo de mínimo de compra sobre el subtotal. Obtenido: al bajar de $20.000 (subtotal $19.920) el botón 'Continuar con la entrega' desaparece y en su lugar queda un botón deshabilitado 'Mínimo de compra $20.000' bajo el subtotal; el aviso aparece como un toast al pie ('¡Solo te faltan $80 para ir a pagar!'), no sobre el subtotal. Funcionalmente no se puede continuar; la diferencia es de texto y ubicación respecto de la planilla. tests/B2C-38.spec.ts.",
   "observed": "Esperado: el botón 'Continuar con la entrega' se muestra deshabilitado y se muestra el mensaje informativo de mínimo de compra sobre el subtotal. Obtenido: al bajar de $20.000 (subtotal $19.920) el botón 'Continuar con la entrega' desaparece y en su lugar queda un botón deshabilitado 'Mínimo de compra $20.000' bajo el subtotal; el aviso aparece como un toast al pie ('¡Solo te faltan $80 para ir a pagar!'), no sobre el subtotal. Funcionalmente no se puede continuar; la diferencia es de texto y ubicación respecto de la planilla. tests/B2C-38.spec.ts.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} x {UNIDADES_SOBRE_MINIMO} y el subtotal es mayor o igual a {MONTO_MINIMO_COMPRA}\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 2 — carro sobre el minimo de compra",
     "file": "TC-B2C38-M-016-p02-carro-sobre-el-minimo-de-compra.png"
    },
    {
     "caption": "Paso 4 — carro bajo el minimo de compra",
     "file": "TC-B2C38-M-016-p04-carro-bajo-el-minimo-de-compra.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C38-M-016.png"
    }
   ],
   "spec": "tests/B2C-38.spec.ts",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el control − del ítem {SKU_VALID_001} hasta que el subtotal quede bajo {MONTO_MINIMO_COMPRA}.\n4. El sistema recalcula el resumen de precios en tiempo real.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{MONTO_MINIMO_COMPRA} = 20000\n{SKU_VALID_001} = 000000000000675191-UN\n{UNIDADES_SOBRE_MINIMO} = 11\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-03",
   "expected": "El toast CRT-021 permanece visible hasta que el usuario lo cierra con la X y el ítem {SKU_UNITARIO} permanece en el carrito sin cambios.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-013",
   "name": "Verificar que un error al eliminar muestra el toast CRT-021 y el ítem permanece [Mobile] [Logueado]",
   "observation": "el TC se ejecuta con una cuenta logueada y su columna Test data no declara cuál: ningún token de usuario. Sin la cuenta no se puede correr sin elegirla a dedo, y eso invalidaría el veredicto. Además usa {CART_ITEM_API_ENDPOINT} para bloquear la request. Falta declarar la cuenta en el Test data del TC (lo hace quien mantiene la planilla).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 1 y {SKU_UNITARIO} x 1\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el ícono de eliminar del ítem {SKU_UNITARIO}.\n4. El sistema muestra el toast de error \"No pudimos eliminar el producto del carro. Vuelve a intentarlo. [CRT-021]\".\n5. El usuario espera 5 segundos y luego cierra el toast con la X.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {CART_ITEM_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-03",
   "expected": "Se muestra el toast CRT-022 con cierre manual (X) y la cantidad de {SKU_VALID_001} permanece en 1.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-014",
   "name": "Verificar que un error al incrementar muestra el toast CRT-022 y la cantidad no cambia [Mobile] [Logueado]",
   "observation": "el TC se ejecuta con una cuenta logueada y su columna Test data no declara cuál: ningún token de usuario. Sin la cuenta no se puede correr sin elegirla a dedo, y eso invalidaría el veredicto. Además usa {CART_ITEM_API_ENDPOINT} para bloquear la request. Falta declarar la cuenta en el Test data del TC (lo hace quien mantiene la planilla).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 1\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el control + del ítem {SKU_VALID_001}.\n4. El sistema muestra el toast de error \"No pudimos sumar el producto a tu carro. Vuelve a intentarlo. [CRT-022]\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {CART_ITEM_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-03",
   "expected": "Se muestra el toast CRT-023 con cierre manual (X) y la cantidad de {SKU_VALID_001} permanece en 2.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-015",
   "name": "Verificar que un error al disminuir muestra el toast CRT-023 y la cantidad no cambia [Mobile] [Logueado]",
   "observation": "el TC se ejecuta con una cuenta logueada y su columna Test data no declara cuál: ningún token de usuario. Sin la cuenta no se puede correr sin elegirla a dedo, y eso invalidaría el veredicto. Además usa {CART_ITEM_API_ENDPOINT} para bloquear la request. Falta declarar la cuenta en el Test data del TC (lo hace quien mantiene la planilla).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} x 2\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el control − del ítem {SKU_VALID_001}.\n4. El sistema muestra el toast de error \"No pudimos disminuir la cantidad de tu producto. Vuelve a intentarlo.[CRT-023]\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {CART_ITEM_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-03",
   "expected": "Se muestra el toast \"Alcanzaste el máximo de productos\", el + se reemplaza por \"Máx\" deshabilitado y la cantidad en kg queda igual al stock disponible.",
   "form_factor": "desktop",
   "id": "TC-B2C38-D-015",
   "name": "Verificar que al llegar al stock disponible de un producto pesable se muestra el toast de máximo y el botón Máx deshabilitado [Desktop] [Logueado]",
   "observation": "el TC se ejecuta con una cuenta logueada y su columna Test data no declara cuál: ningún token de usuario. Sin la cuenta no se puede correr sin elegirla a dedo, y eso invalidaría el veredicto. Falta declarar la cuenta en el Test data del TC (lo hace quien mantiene la planilla).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- {SKU_PESABLE} tiene stock limitado en la tienda activa\n- El carro contiene {SKU_PESABLE_STOCK_LIMITADO} con X Kg menos que su stock disponible\n- El Stock maximo del producto {SKU_PESABLE_STOCK_LIMITADO} es 4",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control + del ítem {SKU_PESABLE_STOCK_LIMITADO}.\n4. El sistema muestra un loading en el shelf y suma X Kg, alcanzando el stock disponible.\n5. El sistema muestra el toast informativo \"Alcanzaste el máximo de productos\" con ícono X.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {COMPRADOR_USER} = TBD\n- {SKU_PESABLE} = 000000000000037972-KG\n- {BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-03",
   "expected": "Se muestra el toast \"Alcanzaste el máximo de productos\", el + se reemplaza por \"Máx\" deshabilitado y la cantidad en kg queda igual al stock disponible.",
   "form_factor": "mobile",
   "id": "TC-B2C38-M-017",
   "name": "Verificar que al llegar al stock disponible de un producto pesable se muestra el toast de máximo y el botón Máx deshabilitado [Mobile] [Guest]",
   "observation": "el TC se ejecuta con una cuenta logueada y su columna Test data no declara cuál: ningún token de usuario. Sin la cuenta no se puede correr sin elegirla a dedo, y eso invalidaría el veredicto. Falta declarar la cuenta en el Test data del TC (lo hace quien mantiene la planilla).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- {SKU_PESABLE_STOCK_LIMITADO} tiene stock limitado en la tienda activa\n- El carro contiene {SKU_PESABLE_STOCK_LIMITADO} con X Kg menos que su stock disponible\n- El Stock maximo del producto {SKU_PESABLE_STOCK_LIMITADO} es 4",
   "spec": "tests/B2C-38.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el control + del ítem {SKU_PESABLE_STOCK_LIMITADO}.\n4. El sistema muestra un loading en el shelf y suma X Kg, alcanzando el stock disponible.\n5. El sistema muestra el toast informativo \"Alcanzaste el máximo de productos\" con ícono X.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {COMPRADOR_USER} = TBD\n- {SKU_PESABLE_STOCK_LIMITADO} = 000000000000037972-KG\n- {BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3d__bm_merchant%3bsite%3dUnimarc/ViewProductInventory_52-View",
   "viewport": "390x844"
  }
 ]
}
-->
