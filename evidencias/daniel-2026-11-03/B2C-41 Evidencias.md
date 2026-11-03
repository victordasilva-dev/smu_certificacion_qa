# B2C-41 APP

| Campo | Valor |
|---|---|
| Suite | B2C-41 |
| Última actualización | 2026-10-27 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-41 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 18 |
| Aprobado | 15 |
| Rechazado | 2 |
| **Total** | **35** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-27 | 12 | TC-B2C41-APP-001, TC-B2C41-APP-002, TC-B2C41-APP-003, TC-B2C41-APP-004, TC-B2C41-APP-005, TC-B2C41-APP-006, TC-B2C41-APP-007, TC-B2C41-APP-008, TC-B2C41-APP-009, TC-B2C41-APP-010, TC-B2C41-APP-011, TC-B2C41-APP-012 |
| 2026-10-16 | 23 | TC-B2C41-D-001, TC-B2C41-D-002, TC-B2C41-D-003, TC-B2C41-D-004, TC-B2C41-D-005, TC-B2C41-D-006, TC-B2C41-D-007, TC-B2C41-D-008, TC-B2C41-D-009, TC-B2C41-D-010, TC-B2C41-D-011, TC-B2C41-M-001, TC-B2C41-M-002, TC-B2C41-M-003, TC-B2C41-M-004, TC-B2C41-M-005, TC-B2C41-M-006, TC-B2C41-M-007, TC-B2C41-M-008, TC-B2C41-M-009, TC-B2C41-M-010, TC-B2C41-M-011, TC-B2C41-M-012 |

## Detalle por caso de prueba

### TC-B2C41-D-001 - Verificar que Continuar con la entrega abre el modal de sugeridos cuando hay sugerencias [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 48.8 s |
| Spec | tests/B2C-41.spec.ts:137 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".

**Resultado esperado**

Se muestra el modal "¡Que no se te olviden!" sobre el carrito.

**Resultado obtenido**

Tras 'Continuar con la entrega' se abrió el modal '¡Que no se te olviden!' sobre el carrito, con sus pestañas y el CTA 'Continuar'.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-D-001-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-D-001-p04-modal-de-sugeridos-abierto.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-D-001.png>)

---

### TC-B2C41-D-002 - Verificar que sin sugerencias el modal no se muestra y el flujo continúa [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 54.9 s |
| Spec | tests/B2C-41.spec.ts:150 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta no tiene productos My Usuals ni favoritos

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+noaddress@avatar-global.com = daunuruco+noaddress@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".

**Resultado esperado**

El modal "¡Que no se te olviden!" no se presenta y el usuario continúa al siguiente paso, página de Mis Envíos, sin interrupción.

**Resultado obtenido**

No se pudo ejecutar: la cuenta no tiene método de entrega activo y no se puede armar el carro.

**Observación**

Causa: la cuenta declarada daunuruco+noaddress@avatar-global.com no tiene direcciones guardadas ni método de entrega activo ('Aún no tienes direcciones guardadas'): el sitio pide elegir un método al agregar 000000000000675191-UN y el carro de la precondición no se puede armar. Acción: cargar en el Excel de data una cuenta sin My Usuals ni favoritos que tenga método de entrega activo, o dejar una dirección guardada a esa cuenta.

**Evidencia**

![Impedimento: la cuenta no tiene método de entrega activo](<B2C-41 Evidencias/TC-B2C41-D-002.png>)

---

### TC-B2C41-D-003 - Verificar que con My Usuals y favoritos se ven ambas pestañas en orden [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 54.1 s |
| Spec | tests/B2C-41.spec.ts:157 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestran dos pestañas en orden: "Lo que más compro" resaltada con la lista My Usuals y luego "Mis favoritos".

**Resultado obtenido**

Se ven 'Lo que más compro' y 'Mis favoritos' en ese orden y 'Lo que más compro' queda resaltada al seleccionarla.

**Observación**

Al abrir el modal, la pestaña seleccionada por defecto es 'Imperdibles' (B2C-308, fuera del alcance de B2C-41), que además aparece primero; 'Lo que más compro' queda resaltada al tocarla.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-D-003-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-D-003-p04-modal-de-sugeridos-abierto.png>)

![Paso 5 — pestanas del modal con lo que mas compro resaltada](<B2C-41 Evidencias/TC-B2C41-D-003-p05-pestanas-del-modal-con-lo-que-mas-compro-resaltada.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-D-003.png>)

---

### TC-B2C41-D-004 - Verificar que sin favoritos solo se ve la pestaña Lo que más compro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 125.7 s |
| Spec | tests/B2C-41.spec.ts:172 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+oneclick@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y ningún favorito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+oneclick@avatar-global.com = daunuruco+oneclick@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestra solo la pestaña "Lo que más compro", resaltada; no se muestra "Mis favoritos".

**Resultado obtenido**

Solo está la pestaña 'Lo que más compro' de las dos de B2C-41; no hay 'Mis favoritos'.

**Observación**

El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41).

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-D-004-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-D-004-p04-modal-de-sugeridos-abierto.png>)

![Paso 5 — solo la pestana lo que mas compro](<B2C-41 Evidencias/TC-B2C41-D-004-p05-solo-la-pestana-lo-que-mas-compro.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-D-004.png>)

---

### TC-B2C41-D-005 - Verificar que sin My Usuals solo se ve la pestaña Mis favoritos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 108.3 s |
| Spec | tests/B2C-41.spec.ts:183 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+segundo@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta no tiene My Usuals y tiene al menos un favorito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+segundo@avatar-global.com = daunuruco+segundo@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestra solo la pestaña "Mis favoritos"; no se muestra "Lo que más compro".

**Resultado obtenido**

Solo está la pestaña 'Mis favoritos' de las dos de B2C-41; no hay 'Lo que más compro'.

**Observación**

El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41).

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-D-005-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-D-005-p04-modal-de-sugeridos-abierto.png>)

![Paso 5 — solo la pestana mis favoritos](<B2C-41 Evidencias/TC-B2C41-D-005-p05-solo-la-pestana-mis-favoritos.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-D-005.png>)

---

### TC-B2C41-D-006 - Verificar que Lo que más compro muestra los My Usuals en grilla 2x2 con Continuar fijo [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 58.5 s |
| Spec | tests/B2C-41.spec.ts:198 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa el contenido de la pestaña "Lo que más compro".

**Resultado esperado**

La pestaña "Lo que más compro" está resaltada, muestra los My Usuals en grilla 2x2 con la información de producto de B2C-64 y el botón "Continuar" fijo.

**Resultado obtenido**

Los My Usuals se ven en 2 columnas, cada tarjeta con precio, favorito y 'Agregar'; 'Continuar' no se mueve al desplazar.

**Observación**

La pestaña no abre seleccionada: el caso la toca primero (por defecto abre 'Imperdibles', B2C-308).

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-D-006-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-D-006-p04-modal-de-sugeridos-abierto.png>)

![Paso 5 — lo que mas compro en grilla 2x2](<B2C-41 Evidencias/TC-B2C41-D-006-p05-lo-que-mas-compro-en-grilla-2x2.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-D-006.png>)

---

### TC-B2C41-D-007 - Verificar que Lo que más compro muestra como máximo 24 productos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene más de 24 productos My Usuals

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario recorre hasta el final la grilla de "Lo que más compro" y cuenta los productos.

**Resultado esperado**

La pestaña "Lo que más compro" muestra 24 productos, aunque la cuenta tiene más de 24 My Usuals.

**Resultado obtenido**

No se pudo ejecutar: la cuenta de data no cumple la precondición.

**Observación**

Causa: la cuenta declarada daunuruco+comprador@avatar-global.com tiene 4 productos My Usuals y el caso exige más de 24. Acción: cargar en el Excel de data una cuenta con más de 24 My Usuals.

---

### TC-B2C41-D-008 - Verificar que la pestaña Mis favoritos muestra los favoritos en grilla 2x2 sin tope [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 71.1 s |
| Spec | tests/B2C-41.spec.ts:218 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario hace clic en la pestaña "Mis favoritos".
6. El sistema muestra la pestaña "Mis favoritos" resaltada.

**Resultado esperado**

La pestaña "Mis favoritos" queda resaltada y muestra todos los favoritos de la cuenta en grilla 2x2, con la información de B2C-64 y el botón "Continuar" fijo.

**Resultado obtenido**

Los favoritos de /account/mis-favoritos aparecen todos en la pestaña, en 2 columnas, y 'Continuar' queda visible.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-D-008-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-D-008-p04-modal-de-sugeridos-abierto.png>)

![Paso 6 — mis favoritos en grilla 2x2](<B2C-41 Evidencias/TC-B2C41-D-008-p06-mis-favoritos-en-grilla-2x2.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-D-008.png>)

---

### TC-B2C41-D-009 - Verificar que Agregar un sugerido lo suma al carro y el modal sigue abierto [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 73.5 s |
| Spec | tests/B2C-41.spec.ts:233 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario hace clic en "Agregar" en el primer producto de la pestaña activa.
6. El sistema muestra un loading en la card del producto mientras procesa la solicitud.

**Resultado esperado**

El producto se agrega al carro con la cantidad indicada, el contador del carro se actualiza en tiempo real, el modal permanece abierto y "Continuar" sigue habilitado.

**Resultado obtenido**

El producto se agregó (la tarjeta pasa a 'En carro'), el contador del carro subió, el modal siguió abierto y 'Continuar' habilitado, pero la tarjeta no mostró ningún loading mientras se procesaba la petición.

**Observación**

Esperado: loading en la card mientras se procesa; el producto se agrega, el contador del carro se actualiza, el modal sigue abierto y 'Continuar' habilitado. Obtenido: se cumple todo salvo el loading: con la petición de agregar retenida 4 s, la card sigue mostrando 'Agregar' sin spinner ni estado de carga. Bug: B2C-1218.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-D-009-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-D-009-p04-modal-de-sugeridos-abierto.png>)

![Paso 5 — tarjeta con la petición retenida: sin loading](<B2C-41 Evidencias/TC-B2C41-D-009-p05-tarjeta-mientras-se-procesa-el-agregar.png>)

![Paso 6 — producto agregado y modal abierto](<B2C-41 Evidencias/TC-B2C41-D-009-p06-producto-agregado-y-modal-abierto.png>)

---

### TC-B2C41-D-010 - Verificar que Continuar cierra el modal de sugeridos y sigue a la página de Mis envíos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 83.7 s |
| Spec | tests/B2C-41.spec.ts:263 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario hace clic en "Continuar".

**Resultado esperado**

El modal se cierra y el usuario continúa al siguiente paso "Mis Envios".

**Resultado obtenido**

Tras 'Continuar' el modal se cerró y el sitio navegó a /checkout/entrega.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-D-010-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-D-010-p04-modal-de-sugeridos-abierto.png>)

![Paso 5 — mis envios tras continuar](<B2C-41 Evidencias/TC-B2C41-D-010-p05-mis-envios-tras-continuar.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-D-010.png>)

---

### TC-B2C41-D-011 - Verificar que un error al agregar un sugerido muestra CRT-024 y el modal sigue abierto [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito
- DevTools abierto con bloqueo de la request {ADD_TO_CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario hace clic en "Agregar" en el primer producto de la pestaña activa.
6. El sistema muestra el toast de error "No pudimos agregar el producto al carro. Inténtalo nuevamente. (CRT-024)".

**Resultado esperado**

Se muestra el toast CRT-024 (persiste hasta la X), el carrito no se modifica, el modal permanece abierto y "Continuar" sigue disponible.

**Resultado obtenido**

No se pudo ejecutar: falta el endpoint de la API de agregar al carro.

**Observación**

Causa: {ADD_TO_CART_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint y re-ejecutar el caso.

---

### TC-B2C41-M-001 - Verificar que Continuar con la entrega abre el modal de sugeridos cuando hay sugerencias [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 145.1 s |
| Spec | tests/B2C-41.spec.ts:137 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".

**Resultado esperado**

Se muestra el modal "¡Que no se te olviden!" sobre el carrito.

**Resultado obtenido**

Tras 'Continuar con la entrega' se abrió el modal '¡Que no se te olviden!' sobre el carrito, con sus pestañas y el CTA 'Continuar'.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-001-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-M-001-p04-modal-de-sugeridos-abierto.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-M-001.png>)

---

### TC-B2C41-M-002 - Verificar que sin sugerencias el modal no se muestra y el flujo continúa [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 76.9 s |
| Spec | tests/B2C-41.spec.ts:150 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta no tiene productos My Usuals ni favoritos

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+noaddress@avatar-global.com = daunuruco+noaddress@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".

**Resultado esperado**

El modal "¡Que no se te olviden!" no se presenta y el usuario continúa al siguiente paso Mis Envíos sin interrupción.

**Resultado obtenido**

No se pudo ejecutar: la cuenta no tiene método de entrega activo y no se puede armar el carro.

**Observación**

Causa: la cuenta declarada daunuruco+noaddress@avatar-global.com no tiene direcciones guardadas ni método de entrega activo ('Aún no tienes direcciones guardadas'): el sitio pide elegir un método al agregar 000000000000675191-UN y el carro de la precondición no se puede armar. Acción: cargar en el Excel de data una cuenta sin My Usuals ni favoritos que tenga método de entrega activo, o dejar una dirección guardada a esa cuenta.

**Evidencia**

![Impedimento: la cuenta no tiene método de entrega activo](<B2C-41 Evidencias/TC-B2C41-M-002.png>)

---

### TC-B2C41-M-003 - Verificar que con My Usuals y favoritos se ven ambas pestañas en orden [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 134.9 s |
| Spec | tests/B2C-41.spec.ts:157 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestran dos pestañas en orden: "Lo que más compro" resaltada con la lista My Usuals y luego "Mis favoritos".

**Resultado obtenido**

Se ven 'Lo que más compro' y 'Mis favoritos' en ese orden y 'Lo que más compro' queda resaltada al seleccionarla.

**Observación**

Al abrir el modal, la pestaña seleccionada por defecto es 'Imperdibles' (B2C-308, fuera del alcance de B2C-41), que además aparece primero; 'Lo que más compro' queda resaltada al tocarla.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-003-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-M-003-p04-modal-de-sugeridos-abierto.png>)

![Paso 5 — pestanas del modal con lo que mas compro resaltada](<B2C-41 Evidencias/TC-B2C41-M-003-p05-pestanas-del-modal-con-lo-que-mas-compro-resaltada.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-M-003.png>)

---

### TC-B2C41-M-004 - Verificar que sin favoritos solo se ve la pestaña Lo que más compro [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 133.6 s |
| Spec | tests/B2C-41.spec.ts:172 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+oneclick@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y ningún favorito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+oneclick@avatar-global.com = daunuruco+oneclick@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestra solo la pestaña "Lo que más compro", resaltada; no se muestra "Mis favoritos".

**Resultado obtenido**

Solo está la pestaña 'Lo que más compro' de las dos de B2C-41; no hay 'Mis favoritos'.

**Observación**

El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41). Pasó en el reintento 1; el primer intento falló (intermitente).

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-004-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-M-004-p04-modal-de-sugeridos-abierto.png>)

![Paso 5 — solo la pestana lo que mas compro](<B2C-41 Evidencias/TC-B2C41-M-004-p05-solo-la-pestana-lo-que-mas-compro.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-M-004.png>)

---

### TC-B2C41-M-005 - Verificar que sin My Usuals solo se ve la pestaña Mis favoritos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 125.5 s |
| Spec | tests/B2C-41.spec.ts:183 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+segundo@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta no tiene My Usuals y tiene al menos un favorito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+segundo@avatar-global.com = daunuruco+segundo@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestra solo la pestaña "Mis favoritos"; no se muestra "Lo que más compro".

**Resultado obtenido**

Solo está la pestaña 'Mis favoritos' de las dos de B2C-41; no hay 'Lo que más compro'.

**Observación**

El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41).

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-005-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-M-005-p04-modal-de-sugeridos-abierto.png>)

![Paso 5 — solo la pestana mis favoritos](<B2C-41 Evidencias/TC-B2C41-M-005-p05-solo-la-pestana-mis-favoritos.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-M-005.png>)

---

### TC-B2C41-M-006 - Verificar que Lo que más compro muestra los My Usuals en grilla 2x2 con Continuar fijo [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 90.7 s |
| Spec | tests/B2C-41.spec.ts:198 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa el contenido de la pestaña "Lo que más compro".

**Resultado esperado**

La pestaña "Lo que más compro" está resaltada, muestra los My Usuals en grilla 2x2 con la información de producto de B2C-64 y el botón "Continuar" fijo.

**Resultado obtenido**

Los My Usuals se ven en 2 columnas, cada tarjeta con precio, favorito y 'Agregar'; 'Continuar' no se mueve al desplazar.

**Observación**

La pestaña no abre seleccionada: el caso la toca primero (por defecto abre 'Imperdibles', B2C-308).

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-006-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-M-006-p04-modal-de-sugeridos-abierto.png>)

![Paso 5 — lo que mas compro en grilla 2x2](<B2C-41 Evidencias/TC-B2C41-M-006-p05-lo-que-mas-compro-en-grilla-2x2.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-M-006.png>)

---

### TC-B2C41-M-007 - Verificar que Lo que más compro muestra como máximo 24 productos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene más de 24 productos My Usuals

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario recorre hasta el final la grilla de "Lo que más compro" y cuenta los productos.

**Resultado esperado**

La pestaña "Lo que más compro" muestra 24 productos, aunque la cuenta tiene más de 24 My Usuals.

**Resultado obtenido**

No se pudo ejecutar: la cuenta de data no cumple la precondición.

**Observación**

Causa: la cuenta declarada daunuruco+comprador@avatar-global.com tiene 4 productos My Usuals y el caso exige más de 24. Acción: cargar en el Excel de data una cuenta con más de 24 My Usuals.

---

### TC-B2C41-M-008 - Verificar que la pestaña Mis favoritos muestra los favoritos en grilla 2x2 sin tope [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 86.5 s |
| Spec | tests/B2C-41.spec.ts:218 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca la pestaña "Mis favoritos".
6. El sistema muestra la pestaña "Mis favoritos" resaltada.

**Resultado esperado**

La pestaña "Mis favoritos" queda resaltada y muestra todos los favoritos de la cuenta en grilla 2x2, con la información de B2C-64 y el botón "Continuar" fijo.

**Resultado obtenido**

Los favoritos de /account/mis-favoritos aparecen todos en la pestaña, en 2 columnas, y 'Continuar' queda visible.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-008-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-M-008-p04-modal-de-sugeridos-abierto.png>)

![Paso 6 — mis favoritos en grilla 2x2](<B2C-41 Evidencias/TC-B2C41-M-008-p06-mis-favoritos-en-grilla-2x2.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-M-008.png>)

---

### TC-B2C41-M-009 - Verificar que Agregar un sugerido lo suma al carro y el modal sigue abierto [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 111.3 s |
| Spec | tests/B2C-41.spec.ts:233 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca "Agregar" en el primer producto de la pestaña activa.
6. El sistema muestra un loading en la card del producto mientras procesa la solicitud.

**Resultado esperado**

El producto se agrega al carro con la cantidad indicada, el contador del carro se actualiza en tiempo real, el modal permanece abierto y "Continuar" sigue habilitado.

**Resultado obtenido**

El producto se agregó (la tarjeta pasa a 'En carro'), el contador del carro subió, el modal siguió abierto y 'Continuar' habilitado, pero la tarjeta no mostró ningún loading mientras se procesaba la petición.

**Observación**

Esperado: loading en la card mientras se procesa; el producto se agrega, el contador del carro se actualiza, el modal sigue abierto y 'Continuar' habilitado. Obtenido: se cumple todo salvo el loading: con la petición de agregar retenida 4 s, la card sigue mostrando 'Agregar' sin spinner ni estado de carga. Bug: B2C-1218.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-009-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-M-009-p04-modal-de-sugeridos-abierto.png>)

![Paso 5 — tarjeta con la petición retenida: sin loading](<B2C-41 Evidencias/TC-B2C41-M-009-p05-tarjeta-mientras-se-procesa-el-agregar.png>)

![Paso 6 — producto agregado y modal abierto](<B2C-41 Evidencias/TC-B2C41-M-009-p06-producto-agregado-y-modal-abierto.png>)

---

### TC-B2C41-M-010 - Verificar que Continuar cierra el modal de sugeridos y sigue a la página de Mis Envios [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 136.3 s |
| Spec | tests/B2C-41.spec.ts:263 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca "Continuar".

**Resultado esperado**

El modal se cierra y el usuario continúa al siguiente paso del flujo Mis envíos.

**Resultado obtenido**

Tras 'Continuar' el modal se cerró y el sitio navegó a /checkout/entrega.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-010-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-M-010-p04-modal-de-sugeridos-abierto.png>)

![Paso 5 — mis envios tras continuar](<B2C-41 Evidencias/TC-B2C41-M-010-p05-mis-envios-tras-continuar.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-M-010.png>)

---

### TC-B2C41-M-011 - Verificar que un error al agregar un sugerido muestra CRT-024 y el modal sigue abierto [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito
- DevTools abierto con bloqueo de la request {ADD_TO_CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca "Agregar" en el primer producto de la pestaña activa.
6. El sistema muestra el toast de error "No pudimos agregar el producto al carro. Inténtalo nuevamente. (CRT-024)".

**Resultado esperado**

Se muestra el toast CRT-024 (persiste hasta la X), el carrito no se modifica, el modal permanece abierto y "Continuar" sigue disponible.

**Resultado obtenido**

No se pudo ejecutar: falta el endpoint de la API de agregar al carro.

**Observación**

Causa: {ADD_TO_CART_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint y re-ejecutar el caso.

---

### TC-B2C41-M-012 - Verificar que al hacer scroll en el modal el botón Continuar permanece fijo [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 101.6 s |
| Spec | tests/B2C-41.spec.ts:278 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La lista de la pestaña activa supera la altura visible de la pantalla

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

daunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com

20000 = 20000

000000000000675191-UN = 000000000000675191-UN

11 = 11

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario hace scroll vertical dentro del modal hasta el final de la lista.

**Resultado esperado**

El área de productos se desplaza verticalmente y el CTA "Continuar" permanece fijo en la parte inferior durante todo el scroll.

**Resultado obtenido**

El área de productos se desplazó y 'Continuar' permaneció fijo en la parte inferior.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-012-p02-carro-cargado.png>)

![Paso 4 — modal de sugeridos abierto](<B2C-41 Evidencias/TC-B2C41-M-012-p04-modal-de-sugeridos-abierto.png>)

![Paso 5 — modal desplazado hasta el final](<B2C-41 Evidencias/TC-B2C41-M-012-p05-modal-desplazado-hasta-el-final.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-M-012.png>)

---

### TC-B2C41-APP-001 - Verificar que Continuar con la entrega abre el modal de sugeridos cuando hay sugerencias

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".

**Resultado esperado**

Se muestra el modal "¡Que no se te olviden!" sobre el carrito.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-41 Evidencias/TC-B2C41-APP-001-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C41-APP-002 - Verificar que sin sugerencias el modal no se muestra y el flujo continúa

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta no tiene productos My Usuals ni favoritos

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- daunuruco+noaddress@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".

**Resultado esperado**

El modal "¡Que no se te olviden!" no se presenta y el usuario continúa al siguiente paso Mis Envíos sin interrupción.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-41 Evidencias/TC-B2C41-APP-002-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C41-APP-003 - Verificar que con My Usuals y favoritos se ven ambas pestañas en orden

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestran dos pestañas en orden: "Lo que más compro" resaltada con la lista My Usuals y luego "Mis favoritos".

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-41 Evidencias/TC-B2C41-APP-003-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C41-APP-004 - Verificar que sin favoritos solo se ve la pestaña Lo que más compro

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+oneclick@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y ningún favorito

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- daunuruco+oneclick@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestra solo la pestaña "Lo que más compro", resaltada; no se muestra "Mis favoritos".

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-41 Evidencias/TC-B2C41-APP-004-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C41-APP-005 - Verificar que sin My Usuals solo se ve la pestaña Mis favoritos

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+segundo@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta no tiene My Usuals y tiene al menos un favorito

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- daunuruco+segundo@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestra solo la pestaña "Mis favoritos"; no se muestra "Lo que más compro".

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-41 Evidencias/TC-B2C41-APP-005-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C41-APP-006 - Verificar que Lo que más compro muestra los My Usuals en grilla 2x2 con Continuar fijo

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa el contenido de la pestaña "Lo que más compro".

**Resultado esperado**

La pestaña "Lo que más compro" está resaltada, muestra los My Usuals en grilla 2x2 con la información de producto de B2C-64 y el botón "Continuar" fijo.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-41 Evidencias/TC-B2C41-APP-006-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C41-APP-007 - Verificar que Lo que más compro muestra como máximo 24 productos

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene más de 24 productos My Usuals

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario recorre hasta el final la grilla de "Lo que más compro" y cuenta los productos.

**Resultado esperado**

La pestaña "Lo que más compro" muestra 24 productos, aunque la cuenta tiene más de 24 My Usuals.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-41 Evidencias/TC-B2C41-APP-007-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C41-APP-008 - Verificar que la pestaña Mis favoritos muestra los favoritos en grilla 2x2 sin tope

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca la pestaña "Mis favoritos".
6. El sistema muestra la pestaña "Mis favoritos" resaltada.

**Resultado esperado**

La pestaña "Mis favoritos" queda resaltada y muestra todos los favoritos de la cuenta en grilla 2x2, con la información de B2C-64 y el botón "Continuar" fijo.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-41 Evidencias/TC-B2C41-APP-008-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C41-APP-009 - Verificar que Agregar un sugerido lo suma al carro y el modal sigue abierto

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca "Agregar" en el primer producto de la pestaña activa.
6. El sistema muestra un loading en la card del producto mientras procesa la solicitud.

**Resultado esperado**

El producto se agrega al carro con la cantidad indicada, el contador del carro se actualiza en tiempo real, el modal permanece abierto y "Continuar" sigue habilitado.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-41 Evidencias/TC-B2C41-APP-009-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C41-APP-010 - Verificar que Continuar cierra el modal de sugeridos y sigue a la página Mis Envíos

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca "Continuar".

**Resultado esperado**

El modal se cierra y el usuario continúa al siguiente paso "Mis Envíos"

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-41 Evidencias/TC-B2C41-APP-010-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C41-APP-011 - Verificar que un error al agregar un sugerido muestra CRT-024 y el modal sigue abierto

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {ADD_TO_CART_API_ENDPOINT}

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- {ADD_TO_CART_API_ENDPOINT} = TBD
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- daunuruco+comprador@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca "Agregar" en el primer producto de la pestaña activa.
6. El sistema muestra el toast de error "No pudimos agregar el producto al carro. Inténtalo nuevamente. (CRT-024)".

**Resultado esperado**

Se muestra el toast CRT-024 (persiste hasta la X), el carrito no se modifica, el modal permanece abierto y "Continuar" sigue disponible.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además {HERRAMIENTA_PROXY_APP} y {ADD_TO_CART_API_ENDPOINT} no tienen valor en la data.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-41 Evidencias/TC-B2C41-APP-011-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C41-APP-012 - Verificar que al hacer scroll en el modal el botón Continuar permanece fijo

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
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
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La lista de la pestaña activa supera la altura visible de la pantalla

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 11 = TBD
- 20000 = TBD
- daunuruco+comprador@avatar-global.com = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario hace scroll vertical dentro del modal hasta el final de la lista.

**Resultado esperado**

El área de productos se desplaza verticalmente y el CTA "Continuar" permanece fijo en la parte inferior durante todo el scroll.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-41 Evidencias/TC-B2C41-APP-012-android-p02-sku-pronto-disponible-con-sesion.png>)

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
  "suite": "B2C-41",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-41 APP Test Cases.xlsx",
  "title": "B2C-41 APP",
  "updated_at": "2026-10-27"
 },
 "history": {
  "2026-10-16": [
   "TC-B2C41-D-001",
   "TC-B2C41-D-002",
   "TC-B2C41-D-003",
   "TC-B2C41-D-004",
   "TC-B2C41-D-005",
   "TC-B2C41-D-006",
   "TC-B2C41-D-007",
   "TC-B2C41-D-008",
   "TC-B2C41-D-009",
   "TC-B2C41-D-010",
   "TC-B2C41-D-011",
   "TC-B2C41-M-001",
   "TC-B2C41-M-002",
   "TC-B2C41-M-003",
   "TC-B2C41-M-004",
   "TC-B2C41-M-005",
   "TC-B2C41-M-006",
   "TC-B2C41-M-007",
   "TC-B2C41-M-008",
   "TC-B2C41-M-009",
   "TC-B2C41-M-010",
   "TC-B2C41-M-011",
   "TC-B2C41-M-012"
  ],
  "2026-10-27": [
   "TC-B2C41-APP-001",
   "TC-B2C41-APP-002",
   "TC-B2C41-APP-003",
   "TC-B2C41-APP-004",
   "TC-B2C41-APP-005",
   "TC-B2C41-APP-006",
   "TC-B2C41-APP-007",
   "TC-B2C41-APP-008",
   "TC-B2C41-APP-009",
   "TC-B2C41-APP-010",
   "TC-B2C41-APP-011",
   "TC-B2C41-APP-012"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "duration_s": 48.8,
   "executed_at": "2026-10-16",
   "expected": "Se muestra el modal \"¡Que no se te olviden!\" sobre el carrito.",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-001",
   "name": "Verificar que Continuar con la entrega abre el modal de sugeridos cuando hay sugerencias [Desktop] [Logueado]",
   "observed": "Tras 'Continuar con la entrega' se abrió el modal '¡Que no se te olviden!' sobre el carrito, con sus pestañas y el CTA 'Continuar'.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-D-001-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-D-001-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-D-001.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:137",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 54.9,
   "executed_at": "2026-10-16",
   "expected": "El modal \"¡Que no se te olviden!\" no se presenta y el usuario continúa al siguiente paso, página de Mis Envíos, sin interrupción.",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-002",
   "name": "Verificar que sin sugerencias el modal no se muestra y el flujo continúa [Desktop] [Logueado]",
   "observation": "Causa: la cuenta declarada daunuruco+noaddress@avatar-global.com no tiene direcciones guardadas ni método de entrega activo ('Aún no tienes direcciones guardadas'): el sitio pide elegir un método al agregar 000000000000675191-UN y el carro de la precondición no se puede armar. Acción: cargar en el Excel de data una cuenta sin My Usuals ni favoritos que tenga método de entrega activo, o dejar una dirección guardada a esa cuenta.",
   "observed": "No se pudo ejecutar: la cuenta no tiene método de entrega activo y no se puede armar el carro.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta no tiene productos My Usuals ni favoritos",
   "screenshots": [
    {
     "caption": "Impedimento: la cuenta no tiene método de entrega activo",
     "file": "TC-B2C41-D-002.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:150",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+noaddress@avatar-global.com = daunuruco+noaddress@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 54.1,
   "executed_at": "2026-10-16",
   "expected": "Se muestran dos pestañas en orden: \"Lo que más compro\" resaltada con la lista My Usuals y luego \"Mis favoritos\".",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-003",
   "name": "Verificar que con My Usuals y favoritos se ven ambas pestañas en orden [Desktop] [Logueado]",
   "observation": "Al abrir el modal, la pestaña seleccionada por defecto es 'Imperdibles' (B2C-308, fuera del alcance de B2C-41), que además aparece primero; 'Lo que más compro' queda resaltada al tocarla.",
   "observed": "Se ven 'Lo que más compro' y 'Mis favoritos' en ese orden y 'Lo que más compro' queda resaltada al seleccionarla.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-D-003-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-D-003-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Paso 5 — pestanas del modal con lo que mas compro resaltada",
     "file": "TC-B2C41-D-003-p05-pestanas-del-modal-con-lo-que-mas-compro-resaltada.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-D-003.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:157",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 125.7,
   "executed_at": "2026-10-16",
   "expected": "Se muestra solo la pestaña \"Lo que más compro\", resaltada; no se muestra \"Mis favoritos\".",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-004",
   "name": "Verificar que sin favoritos solo se ve la pestaña Lo que más compro [Desktop] [Logueado]",
   "observation": "El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41).",
   "observed": "Solo está la pestaña 'Lo que más compro' de las dos de B2C-41; no hay 'Mis favoritos'.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+oneclick@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y ningún favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-D-004-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-D-004-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Paso 5 — solo la pestana lo que mas compro",
     "file": "TC-B2C41-D-004-p05-solo-la-pestana-lo-que-mas-compro.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-D-004.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:172",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+oneclick@avatar-global.com = daunuruco+oneclick@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 108.3,
   "executed_at": "2026-10-16",
   "expected": "Se muestra solo la pestaña \"Mis favoritos\"; no se muestra \"Lo que más compro\".",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-005",
   "name": "Verificar que sin My Usuals solo se ve la pestaña Mis favoritos [Desktop] [Logueado]",
   "observation": "El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41).",
   "observed": "Solo está la pestaña 'Mis favoritos' de las dos de B2C-41; no hay 'Lo que más compro'.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+segundo@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta no tiene My Usuals y tiene al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-D-005-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-D-005-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Paso 5 — solo la pestana mis favoritos",
     "file": "TC-B2C41-D-005-p05-solo-la-pestana-mis-favoritos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-D-005.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:183",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+segundo@avatar-global.com = daunuruco+segundo@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 58.5,
   "executed_at": "2026-10-16",
   "expected": "La pestaña \"Lo que más compro\" está resaltada, muestra los My Usuals en grilla 2x2 con la información de producto de B2C-64 y el botón \"Continuar\" fijo.",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-006",
   "name": "Verificar que Lo que más compro muestra los My Usuals en grilla 2x2 con Continuar fijo [Desktop] [Logueado]",
   "observation": "La pestaña no abre seleccionada: el caso la toca primero (por defecto abre 'Imperdibles', B2C-308).",
   "observed": "Los My Usuals se ven en 2 columnas, cada tarjeta con precio, favorito y 'Agregar'; 'Continuar' no se mueve al desplazar.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-D-006-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-D-006-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Paso 5 — lo que mas compro en grilla 2x2",
     "file": "TC-B2C41-D-006-p05-lo-que-mas-compro-en-grilla-2x2.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-D-006.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:198",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa el contenido de la pestaña \"Lo que más compro\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-16",
   "expected": "La pestaña \"Lo que más compro\" muestra 24 productos, aunque la cuenta tiene más de 24 My Usuals.",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-007",
   "name": "Verificar que Lo que más compro muestra como máximo 24 productos [Desktop] [Logueado]",
   "observation": "Causa: la cuenta declarada daunuruco+comprador@avatar-global.com tiene 4 productos My Usuals y el caso exige más de 24. Acción: cargar en el Excel de data una cuenta con más de 24 My Usuals.",
   "observed": "No se pudo ejecutar: la cuenta de data no cumple la precondición.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene más de 24 productos My Usuals",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario recorre hasta el final la grilla de \"Lo que más compro\" y cuenta los productos.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 71.1,
   "executed_at": "2026-10-16",
   "expected": "La pestaña \"Mis favoritos\" queda resaltada y muestra todos los favoritos de la cuenta en grilla 2x2, con la información de B2C-64 y el botón \"Continuar\" fijo.",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-008",
   "name": "Verificar que la pestaña Mis favoritos muestra los favoritos en grilla 2x2 sin tope [Desktop] [Logueado]",
   "observed": "Los favoritos de /account/mis-favoritos aparecen todos en la pestaña, en 2 columnas, y 'Continuar' queda visible.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-D-008-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-D-008-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Paso 6 — mis favoritos en grilla 2x2",
     "file": "TC-B2C41-D-008-p06-mis-favoritos-en-grilla-2x2.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-D-008.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:218",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario hace clic en la pestaña \"Mis favoritos\".\n6. El sistema muestra la pestaña \"Mis favoritos\" resaltada.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 73.5,
   "executed_at": "2026-10-16",
   "expected": "El producto se agrega al carro con la cantidad indicada, el contador del carro se actualiza en tiempo real, el modal permanece abierto y \"Continuar\" sigue habilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-009",
   "name": "Verificar que Agregar un sugerido lo suma al carro y el modal sigue abierto [Desktop] [Logueado]",
   "observation": "Esperado: loading en la card mientras se procesa; el producto se agrega, el contador del carro se actualiza, el modal sigue abierto y 'Continuar' habilitado. Obtenido: se cumple todo salvo el loading: con la petición de agregar retenida 4 s, la card sigue mostrando 'Agregar' sin spinner ni estado de carga. Bug: B2C-1218.",
   "observed": "El producto se agregó (la tarjeta pasa a 'En carro'), el contador del carro subió, el modal siguió abierto y 'Continuar' habilitado, pero la tarjeta no mostró ningún loading mientras se procesaba la petición.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-D-009-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-D-009-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Paso 5 — tarjeta con la petición retenida: sin loading",
     "file": "TC-B2C41-D-009-p05-tarjeta-mientras-se-procesa-el-agregar.png"
    },
    {
     "caption": "Paso 6 — producto agregado y modal abierto",
     "file": "TC-B2C41-D-009-p06-producto-agregado-y-modal-abierto.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:233",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario hace clic en \"Agregar\" en el primer producto de la pestaña activa.\n6. El sistema muestra un loading en la card del producto mientras procesa la solicitud.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 83.7,
   "executed_at": "2026-10-16",
   "expected": "El modal se cierra y el usuario continúa al siguiente paso \"Mis Envios\".",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-010",
   "name": "Verificar que Continuar cierra el modal de sugeridos y sigue a la página de Mis envíos [Desktop] [Logueado]",
   "observed": "Tras 'Continuar' el modal se cerró y el sitio navegó a /checkout/entrega.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-D-010-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-D-010-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Paso 5 — mis envios tras continuar",
     "file": "TC-B2C41-D-010-p05-mis-envios-tras-continuar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-D-010.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:263",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario hace clic en \"Continuar\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 0,
   "executed_at": "2026-10-16",
   "expected": "Se muestra el toast CRT-024 (persiste hasta la X), el carrito no se modifica, el modal permanece abierto y \"Continuar\" sigue disponible.",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-011",
   "name": "Verificar que un error al agregar un sugerido muestra CRT-024 y el modal sigue abierto [Desktop] [Logueado]",
   "observation": "Causa: {ADD_TO_CART_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint y re-ejecutar el caso.",
   "observed": "No se pudo ejecutar: falta el endpoint de la API de agregar al carro.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito\n- DevTools abierto con bloqueo de la request {ADD_TO_CART_API_ENDPOINT} (Network request blocking)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario hace clic en \"Agregar\" en el primer producto de la pestaña activa.\n6. El sistema muestra el toast de error \"No pudimos agregar el producto al carro. Inténtalo nuevamente. (CRT-024)\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "1440x900"
  },
  {
   "browser": "webkit",
   "duration_s": 145.1,
   "executed_at": "2026-10-16",
   "expected": "Se muestra el modal \"¡Que no se te olviden!\" sobre el carrito.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-001",
   "name": "Verificar que Continuar con la entrega abre el modal de sugeridos cuando hay sugerencias [Mobile] [Logueado]",
   "observed": "Tras 'Continuar con la entrega' se abrió el modal '¡Que no se te olviden!' sobre el carrito, con sus pestañas y el CTA 'Continuar'.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-001-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-M-001-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-M-001.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:137",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 76.9,
   "executed_at": "2026-10-16",
   "expected": "El modal \"¡Que no se te olviden!\" no se presenta y el usuario continúa al siguiente paso Mis Envíos sin interrupción.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-002",
   "name": "Verificar que sin sugerencias el modal no se muestra y el flujo continúa [Mobile] [Logueado]",
   "observation": "Causa: la cuenta declarada daunuruco+noaddress@avatar-global.com no tiene direcciones guardadas ni método de entrega activo ('Aún no tienes direcciones guardadas'): el sitio pide elegir un método al agregar 000000000000675191-UN y el carro de la precondición no se puede armar. Acción: cargar en el Excel de data una cuenta sin My Usuals ni favoritos que tenga método de entrega activo, o dejar una dirección guardada a esa cuenta.",
   "observed": "No se pudo ejecutar: la cuenta no tiene método de entrega activo y no se puede armar el carro.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta no tiene productos My Usuals ni favoritos",
   "screenshots": [
    {
     "caption": "Impedimento: la cuenta no tiene método de entrega activo",
     "file": "TC-B2C41-M-002.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:150",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+noaddress@avatar-global.com = daunuruco+noaddress@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 134.9,
   "executed_at": "2026-10-16",
   "expected": "Se muestran dos pestañas en orden: \"Lo que más compro\" resaltada con la lista My Usuals y luego \"Mis favoritos\".",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-003",
   "name": "Verificar que con My Usuals y favoritos se ven ambas pestañas en orden [Mobile] [Logueado]",
   "observation": "Al abrir el modal, la pestaña seleccionada por defecto es 'Imperdibles' (B2C-308, fuera del alcance de B2C-41), que además aparece primero; 'Lo que más compro' queda resaltada al tocarla.",
   "observed": "Se ven 'Lo que más compro' y 'Mis favoritos' en ese orden y 'Lo que más compro' queda resaltada al seleccionarla.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-003-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-M-003-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Paso 5 — pestanas del modal con lo que mas compro resaltada",
     "file": "TC-B2C41-M-003-p05-pestanas-del-modal-con-lo-que-mas-compro-resaltada.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-M-003.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:157",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 133.6,
   "executed_at": "2026-10-16",
   "expected": "Se muestra solo la pestaña \"Lo que más compro\", resaltada; no se muestra \"Mis favoritos\".",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-004",
   "name": "Verificar que sin favoritos solo se ve la pestaña Lo que más compro [Mobile] [Logueado]",
   "observation": "El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41). Pasó en el reintento 1; el primer intento falló (intermitente).",
   "observed": "Solo está la pestaña 'Lo que más compro' de las dos de B2C-41; no hay 'Mis favoritos'.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+oneclick@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y ningún favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-004-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-M-004-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Paso 5 — solo la pestana lo que mas compro",
     "file": "TC-B2C41-M-004-p05-solo-la-pestana-lo-que-mas-compro.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-M-004.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:172",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+oneclick@avatar-global.com = daunuruco+oneclick@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 125.5,
   "executed_at": "2026-10-16",
   "expected": "Se muestra solo la pestaña \"Mis favoritos\"; no se muestra \"Lo que más compro\".",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-005",
   "name": "Verificar que sin My Usuals solo se ve la pestaña Mis favoritos [Mobile] [Logueado]",
   "observation": "El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41).",
   "observed": "Solo está la pestaña 'Mis favoritos' de las dos de B2C-41; no hay 'Lo que más compro'.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+segundo@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta no tiene My Usuals y tiene al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-005-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-M-005-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Paso 5 — solo la pestana mis favoritos",
     "file": "TC-B2C41-M-005-p05-solo-la-pestana-mis-favoritos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-M-005.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:183",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+segundo@avatar-global.com = daunuruco+segundo@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 90.7,
   "executed_at": "2026-10-16",
   "expected": "La pestaña \"Lo que más compro\" está resaltada, muestra los My Usuals en grilla 2x2 con la información de producto de B2C-64 y el botón \"Continuar\" fijo.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-006",
   "name": "Verificar que Lo que más compro muestra los My Usuals en grilla 2x2 con Continuar fijo [Mobile] [Logueado]",
   "observation": "La pestaña no abre seleccionada: el caso la toca primero (por defecto abre 'Imperdibles', B2C-308).",
   "observed": "Los My Usuals se ven en 2 columnas, cada tarjeta con precio, favorito y 'Agregar'; 'Continuar' no se mueve al desplazar.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-006-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-M-006-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Paso 5 — lo que mas compro en grilla 2x2",
     "file": "TC-B2C41-M-006-p05-lo-que-mas-compro-en-grilla-2x2.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-M-006.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:198",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa el contenido de la pestaña \"Lo que más compro\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 0,
   "executed_at": "2026-10-16",
   "expected": "La pestaña \"Lo que más compro\" muestra 24 productos, aunque la cuenta tiene más de 24 My Usuals.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-007",
   "name": "Verificar que Lo que más compro muestra como máximo 24 productos [Mobile] [Logueado]",
   "observation": "Causa: la cuenta declarada daunuruco+comprador@avatar-global.com tiene 4 productos My Usuals y el caso exige más de 24. Acción: cargar en el Excel de data una cuenta con más de 24 My Usuals.",
   "observed": "No se pudo ejecutar: la cuenta de data no cumple la precondición.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene más de 24 productos My Usuals",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario recorre hasta el final la grilla de \"Lo que más compro\" y cuenta los productos.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 86.5,
   "executed_at": "2026-10-16",
   "expected": "La pestaña \"Mis favoritos\" queda resaltada y muestra todos los favoritos de la cuenta en grilla 2x2, con la información de B2C-64 y el botón \"Continuar\" fijo.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-008",
   "name": "Verificar que la pestaña Mis favoritos muestra los favoritos en grilla 2x2 sin tope [Mobile] [Logueado]",
   "observed": "Los favoritos de /account/mis-favoritos aparecen todos en la pestaña, en 2 columnas, y 'Continuar' queda visible.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-008-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-M-008-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Paso 6 — mis favoritos en grilla 2x2",
     "file": "TC-B2C41-M-008-p06-mis-favoritos-en-grilla-2x2.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-M-008.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:218",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca la pestaña \"Mis favoritos\".\n6. El sistema muestra la pestaña \"Mis favoritos\" resaltada.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 111.3,
   "executed_at": "2026-10-16",
   "expected": "El producto se agrega al carro con la cantidad indicada, el contador del carro se actualiza en tiempo real, el modal permanece abierto y \"Continuar\" sigue habilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-009",
   "name": "Verificar que Agregar un sugerido lo suma al carro y el modal sigue abierto [Mobile] [Logueado]",
   "observation": "Esperado: loading en la card mientras se procesa; el producto se agrega, el contador del carro se actualiza, el modal sigue abierto y 'Continuar' habilitado. Obtenido: se cumple todo salvo el loading: con la petición de agregar retenida 4 s, la card sigue mostrando 'Agregar' sin spinner ni estado de carga. Bug: B2C-1218.",
   "observed": "El producto se agregó (la tarjeta pasa a 'En carro'), el contador del carro subió, el modal siguió abierto y 'Continuar' habilitado, pero la tarjeta no mostró ningún loading mientras se procesaba la petición.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-009-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-M-009-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Paso 5 — tarjeta con la petición retenida: sin loading",
     "file": "TC-B2C41-M-009-p05-tarjeta-mientras-se-procesa-el-agregar.png"
    },
    {
     "caption": "Paso 6 — producto agregado y modal abierto",
     "file": "TC-B2C41-M-009-p06-producto-agregado-y-modal-abierto.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:233",
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca \"Agregar\" en el primer producto de la pestaña activa.\n6. El sistema muestra un loading en la card del producto mientras procesa la solicitud.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 136.3,
   "executed_at": "2026-10-16",
   "expected": "El modal se cierra y el usuario continúa al siguiente paso del flujo Mis envíos.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-010",
   "name": "Verificar que Continuar cierra el modal de sugeridos y sigue a la página de Mis Envios [Mobile] [Logueado]",
   "observed": "Tras 'Continuar' el modal se cerró y el sitio navegó a /checkout/entrega.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-010-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-M-010-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Paso 5 — mis envios tras continuar",
     "file": "TC-B2C41-M-010-p05-mis-envios-tras-continuar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-M-010.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:263",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca \"Continuar\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 0,
   "executed_at": "2026-10-16",
   "expected": "Se muestra el toast CRT-024 (persiste hasta la X), el carrito no se modifica, el modal permanece abierto y \"Continuar\" sigue disponible.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-011",
   "name": "Verificar que un error al agregar un sugerido muestra CRT-024 y el modal sigue abierto [Mobile] [Logueado]",
   "observation": "Causa: {ADD_TO_CART_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint y re-ejecutar el caso.",
   "observed": "No se pudo ejecutar: falta el endpoint de la API de agregar al carro.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito\n- DevTools abierto con bloqueo de la request {ADD_TO_CART_API_ENDPOINT} (Network request blocking)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca \"Agregar\" en el primer producto de la pestaña activa.\n6. El sistema muestra el toast de error \"No pudimos agregar el producto al carro. Inténtalo nuevamente. (CRT-024)\".",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 101.6,
   "executed_at": "2026-10-16",
   "expected": "El área de productos se desplaza verticalmente y el CTA \"Continuar\" permanece fijo en la parte inferior durante todo el scroll.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-012",
   "name": "Verificar que al hacer scroll en el modal el botón Continuar permanece fijo [Mobile] [Logueado]",
   "observed": "El área de productos se desplazó y 'Continuar' permaneció fijo en la parte inferior.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La lista de la pestaña activa supera la altura visible de la pantalla",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-012-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal de sugeridos abierto",
     "file": "TC-B2C41-M-012-p04-modal-de-sugeridos-abierto.png"
    },
    {
     "caption": "Paso 5 — modal desplazado hasta el final",
     "file": "TC-B2C41-M-012-p05-modal-desplazado-hasta-el-final.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-M-012.png"
    }
   ],
   "spec": "tests/B2C-41.spec.ts:278",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario hace scroll vertical dentro del modal hasta el final de la lista.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\nhttps://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\ndaunuruco+comprador@avatar-global.com = daunuruco+comprador@avatar-global.com\n20000 = 20000\n000000000000675191-UN = 000000000000675191-UN\n11 = 11",
   "viewport": "390x844"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el modal \"¡Que no se te olviden!\" sobre el carrito.",
   "form_factor": "app",
   "id": "TC-B2C41-APP-001",
   "name": "Verificar que Continuar con la entrega abre el modal de sugeridos cuando hay sugerencias",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C41-APP-001-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El modal \"¡Que no se te olviden!\" no se presenta y el usuario continúa al siguiente paso Mis Envíos sin interrupción.",
   "form_factor": "app",
   "id": "TC-B2C41-APP-002",
   "name": "Verificar que sin sugerencias el modal no se muestra y el flujo continúa",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+noaddress@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta no tiene productos My Usuals ni favoritos",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C41-APP-002-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- daunuruco+noaddress@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestran dos pestañas en orden: \"Lo que más compro\" resaltada con la lista My Usuals y luego \"Mis favoritos\".",
   "form_factor": "app",
   "id": "TC-B2C41-APP-003",
   "name": "Verificar que con My Usuals y favoritos se ven ambas pestañas en orden",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C41-APP-003-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra solo la pestaña \"Lo que más compro\", resaltada; no se muestra \"Mis favoritos\".",
   "form_factor": "app",
   "id": "TC-B2C41-APP-004",
   "name": "Verificar que sin favoritos solo se ve la pestaña Lo que más compro",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+oneclick@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y ningún favorito",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C41-APP-004-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- daunuruco+oneclick@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra solo la pestaña \"Mis favoritos\"; no se muestra \"Lo que más compro\".",
   "form_factor": "app",
   "id": "TC-B2C41-APP-005",
   "name": "Verificar que sin My Usuals solo se ve la pestaña Mis favoritos",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+segundo@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta no tiene My Usuals y tiene al menos un favorito",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C41-APP-005-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- daunuruco+segundo@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La pestaña \"Lo que más compro\" está resaltada, muestra los My Usuals en grilla 2x2 con la información de producto de B2C-64 y el botón \"Continuar\" fijo.",
   "form_factor": "app",
   "id": "TC-B2C41-APP-006",
   "name": "Verificar que Lo que más compro muestra los My Usuals en grilla 2x2 con Continuar fijo",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C41-APP-006-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa el contenido de la pestaña \"Lo que más compro\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La pestaña \"Lo que más compro\" muestra 24 productos, aunque la cuenta tiene más de 24 My Usuals.",
   "form_factor": "app",
   "id": "TC-B2C41-APP-007",
   "name": "Verificar que Lo que más compro muestra como máximo 24 productos",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene más de 24 productos My Usuals",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C41-APP-007-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario recorre hasta el final la grilla de \"Lo que más compro\" y cuenta los productos.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La pestaña \"Mis favoritos\" queda resaltada y muestra todos los favoritos de la cuenta en grilla 2x2, con la información de B2C-64 y el botón \"Continuar\" fijo.",
   "form_factor": "app",
   "id": "TC-B2C41-APP-008",
   "name": "Verificar que la pestaña Mis favoritos muestra los favoritos en grilla 2x2 sin tope",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C41-APP-008-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca la pestaña \"Mis favoritos\".\n6. El sistema muestra la pestaña \"Mis favoritos\" resaltada.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El producto se agrega al carro con la cantidad indicada, el contador del carro se actualiza en tiempo real, el modal permanece abierto y \"Continuar\" sigue habilitado.",
   "form_factor": "app",
   "id": "TC-B2C41-APP-009",
   "name": "Verificar que Agregar un sugerido lo suma al carro y el modal sigue abierto",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C41-APP-009-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca \"Agregar\" en el primer producto de la pestaña activa.\n6. El sistema muestra un loading en la card del producto mientras procesa la solicitud.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El modal se cierra y el usuario continúa al siguiente paso \"Mis Envíos\"",
   "form_factor": "app",
   "id": "TC-B2C41-APP-010",
   "name": "Verificar que Continuar cierra el modal de sugeridos y sigue a la página Mis Envíos",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C41-APP-010-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca \"Continuar\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast CRT-024 (persiste hasta la X), el carrito no se modifica, el modal permanece abierto y \"Continuar\" sigue disponible.",
   "form_factor": "app",
   "id": "TC-B2C41-APP-011",
   "name": "Verificar que un error al agregar un sugerido muestra CRT-024 y el modal sigue abierto",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además {HERRAMIENTA_PROXY_APP} y {ADD_TO_CART_API_ENDPOINT} no tienen valor en la data.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {ADD_TO_CART_API_ENDPOINT}",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C41-APP-011-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca \"Agregar\" en el primer producto de la pestaña activa.\n6. El sistema muestra el toast de error \"No pudimos agregar el producto al carro. Inténtalo nuevamente. (CRT-024)\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- {ADD_TO_CART_API_ENDPOINT} = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- daunuruco+comprador@avatar-global.com = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El área de productos se desplaza verticalmente y el CTA \"Continuar\" permanece fijo en la parte inferior durante todo el scroll.",
   "form_factor": "app",
   "id": "TC-B2C41-APP-012",
   "name": "Verificar que al hacer scroll en el modal el botón Continuar permanece fijo",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La lista de la pestaña activa supera la altura visible de la pantalla",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C41-APP-012-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario hace scroll vertical dentro del modal hasta el final de la lista.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 11 = TBD\n- 20000 = TBD\n- daunuruco+comprador@avatar-global.com = TBD"
  }
 ]
}
-->
