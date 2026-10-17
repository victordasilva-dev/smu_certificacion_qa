# B2C-41 - Agregar productos sugeridos al carrito antes de finalizar la compra - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-41 |
| Última actualización | 2026-10-15 |
| Ejecutado por | Victor Chirinos |
| Ambiente | Storefront Unimarc DEV (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/), Chromium Desktop 1440x900 / WebKit Mobile 390x844 |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-41 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 15 |
| Bloqueado Data | 6 |
| Rechazado | 2 |
| **Total** | **23** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-15 | 23 | TC-B2C41-D-001, TC-B2C41-D-002, TC-B2C41-D-003, TC-B2C41-D-004, TC-B2C41-D-005, TC-B2C41-D-006, TC-B2C41-D-007, TC-B2C41-D-008, TC-B2C41-D-009, TC-B2C41-D-010, TC-B2C41-D-011, TC-B2C41-M-001, TC-B2C41-M-002, TC-B2C41-M-003, TC-B2C41-M-004, TC-B2C41-M-005, TC-B2C41-M-006, TC-B2C41-M-007, TC-B2C41-M-008, TC-B2C41-M-009, TC-B2C41-M-010, TC-B2C41-M-011, TC-B2C41-M-012 |

## Detalle por caso de prueba

### TC-B2C41-D-001 - Verificar que Continuar con la entrega abre el modal de sugeridos cuando hay sugerencias [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".

**Resultado esperado**

Se muestra el modal "¡Que no se te olviden!" sobre el carrito.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Cuenta vhchirinos+comprador@avatar-global.com. Carro con 000000000000675191-UN × 11 (subtotal ≥ 20000); dirección activa Calle Uno 23, La Florida.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-D-001-p02-carro-cargado.png>)

![Paso 3 — modal abierto tras el clic en continuar con la entrega](<B2C-41 Evidencias/TC-B2C41-D-001-p03-modal-abierto-tras-el-clic-en-continuar-con-la-entrega.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-D-001.png>)

---

### TC-B2C41-D-002 - Verificar que sin sugerencias el modal no se muestra y el flujo continúa [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta no tiene productos My Usuals ni favoritos

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_SIN_SUGERENCIAS_PASSWORD}, {COMPRADOR_SIN_SUGERENCIAS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".

**Resultado esperado**

El modal "¡Que no se te olviden!" no se presenta y el usuario continúa al siguiente paso, página de Mis Envíos, sin interrupción.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: la cuenta declarada vhchirinos+noaddress@avatar-global.com no tiene método de entrega activo (al agregar el SKU el sitio abre 'Elige tu método de entrega') y es la misma cuenta de vhchirinos+noaddress@avatar-global.com, así que no se le configura una dirección. Además, mientras la colección 'Imperdibles' (B2C-308) tenga productos, el modal se mostrará igual (B2C-308 CA4). Acción: declarar una cuenta sin My Usuals ni favoritos con método de entrega activo, y desactivar la colección Imperdibles en BM para este caso. (captura de la exploración en Desktop 1440x900)

**Evidencia**

![TC B2C41 D 002 x01 sin metodo de entrega al agregar](<B2C-41 Evidencias/TC-B2C41-D-002-x01-sin-metodo-de-entrega-al-agregar.png>)

---

### TC-B2C41-D-003 - Verificar que con My Usuals y favoritos se ven ambas pestañas en orden [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestran dos pestañas en orden: "Lo que más compro" resaltada con la lista My Usuals y luego "Mis favoritos".

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41 según la HU), primera y activa por defecto; se evaluaron 'Lo que más compro' y 'Mis favoritos' ignorándola. 'Lo que más compro' (4 My Usuals) queda resaltada al seleccionarla.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-D-003-p02-carro-cargado.png>)

![Paso 4 — modal abierto](<B2C-41 Evidencias/TC-B2C41-D-003-p04-modal-abierto.png>)

![Paso 5 — pestanas lo que mas compro y mis favoritos](<B2C-41 Evidencias/TC-B2C41-D-003-p05-pestanas-lo-que-mas-compro-y-mis-favoritos.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-D-003.png>)

---

### TC-B2C41-D-004 - Verificar que sin favoritos solo se ve la pestaña Lo que más compro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+oneclick@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y ningún favorito

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_SOLO_USUALS_PASSWORD}, {COMPRADOR_SOLO_USUALS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestra solo la pestaña "Lo que más compro", resaltada; no se muestra "Mis favoritos".

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Cuenta vhchirinos+oneclick@avatar-global.com. El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41 según la HU), primera y activa por defecto; se evaluaron 'Lo que más compro' y 'Mis favoritos' ignorándola.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-D-004-p02-carro-cargado.png>)

![Paso 4 — modal abierto](<B2C-41 Evidencias/TC-B2C41-D-004-p04-modal-abierto.png>)

![Paso 5 — solo lo que mas compro](<B2C-41 Evidencias/TC-B2C41-D-004-p05-solo-lo-que-mas-compro.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-D-004.png>)

---

### TC-B2C41-D-005 - Verificar que sin My Usuals solo se ve la pestaña Mis favoritos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta no tiene My Usuals y tiene al menos un favorito

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_SOLO_FAVORITOS_PASSWORD}, {COMPRADOR_SOLO_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestra solo la pestaña "Mis favoritos"; no se muestra "Lo que más compro".

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Cuenta vhchirinos+segundo@avatar-global.com (1 favorito). El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41 según la HU), primera y activa por defecto; se evaluaron 'Lo que más compro' y 'Mis favoritos' ignorándola.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-D-005-p02-carro-cargado.png>)

![Paso 4 — modal abierto](<B2C-41 Evidencias/TC-B2C41-D-005-p04-modal-abierto.png>)

![Paso 5 — solo mis favoritos](<B2C-41 Evidencias/TC-B2C41-D-005-p05-solo-mis-favoritos.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-D-005.png>)

---

### TC-B2C41-D-006 - Verificar que Lo que más compro muestra los My Usuals en grilla 2x2 con Continuar fijo [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa el contenido de la pestaña "Lo que más compro".

**Resultado esperado**

La pestaña "Lo que más compro" está resaltada, muestra los My Usuals en grilla 2x2 con la información de producto de B2C-64 y el botón "Continuar" fijo.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

4 My Usuals en 2 columnas, con precio, favorito y Agregar (B2C-64); 'Continuar' no se mueve al desplazar. El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41 según la HU), primera y activa por defecto; se evaluaron 'Lo que más compro' y 'Mis favoritos' ignorándola.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-D-006-p02-carro-cargado.png>)

![Paso 4 — modal abierto](<B2C-41 Evidencias/TC-B2C41-D-006-p04-modal-abierto.png>)

![Paso 5 — my usuals en grilla 2x2 con continuar al pie](<B2C-41 Evidencias/TC-B2C41-D-006-p05-my-usuals-en-grilla-2x2-con-continuar-al-pie.png>)

![Paso 5 — tras desplazar continuar en el mismo lugar](<B2C-41 Evidencias/TC-B2C41-D-006-p05-tras-desplazar-continuar-en-el-mismo-lugar.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-D-006.png>)

---

### TC-B2C41-D-007 - Verificar que Lo que más compro muestra como máximo 24 productos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene más de 24 productos My Usuals

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_MAS_24_PASSWORD}, {COMPRADOR_USUALS_MAS_24_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario recorre hasta el final la grilla de "Lo que más compro" y cuenta los productos.

**Resultado esperado**

La pestaña "Lo que más compro" muestra 24 productos, aunque la cuenta tiene más de 24 My Usuals.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: la cuenta declarada vhchirinos+comprador@avatar-global.com tiene 4 productos My Usuals en 'Lo que más compro', no más de 24, así que el tope no se puede verificar. Acción: declarar en vhchirinos+comprador@avatar-global.com una cuenta con más de 24 My Usuals. (captura de la exploración en Desktop 1440x900)

**Evidencia**

![TC B2C41 D 007 x01 lo que mas compro con 4 my usuals](<B2C-41 Evidencias/TC-B2C41-D-007-x01-lo-que-mas-compro-con-4-my-usuals.png>)

---

### TC-B2C41-D-008 - Verificar que la pestaña Mis favoritos muestra los favoritos en grilla 2x2 sin tope [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

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

Coincide con el resultado esperado.

**Observación**

Los 6 favoritos de /account/mis-favoritos aparecen en la pestaña, en 2 columnas.

**Evidencia**

![Paso 1 — mis favoritos de la cuenta 6](<B2C-41 Evidencias/TC-B2C41-D-008-p01-mis-favoritos-de-la-cuenta-6.png>)

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-D-008-p02-carro-cargado.png>)

![Paso 6 — mis favoritos resaltada con 6 productos](<B2C-41 Evidencias/TC-B2C41-D-008-p06-mis-favoritos-resaltada-con-6-productos.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-D-008.png>)

---

### TC-B2C41-D-009 - Verificar que Agregar un sugerido lo suma al carro y el modal sigue abierto [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

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

el producto se agrega (la card pasa a 'En carro 1 un.'), el contador del carro sube de 11 a 12 unidades, el modal sigue abierto y 'Continuar' habilitado, pero la card no muestra ningún loading: el botón 'Agregar' se reemplaza directo por el stepper (~350 ms tras el clic, sin spinner, aria-busy ni estado deshabilitado; observado en el DOM)

**Observación**

Esperado: loading en la card mientras se procesa; el producto se agrega, el contador del carro se actualiza, el modal sigue abierto y 'Continuar' habilitado. Obtenido: el producto se agrega (la card pasa a 'En carro 1 un.'), el contador del carro sube de 11 a 12 unidades, el modal sigue abierto y 'Continuar' habilitado, pero la card no muestra ningún loading: el botón 'Agregar' se reemplaza directo por el stepper (~350 ms tras el clic, sin spinner, aria-busy ni estado deshabilitado; observado en el DOM) (tests/B2C-41.spec.ts:303). Bug B2C-1218. El producto agregado se quitó del carro al terminar.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-D-009-p02-carro-cargado.png>)

![Paso 4 — modal abierto](<B2C-41 Evidencias/TC-B2C41-D-009-p04-modal-abierto.png>)

![Paso 6 — abastero vacuno nacional al vacio 1 8 kg agregado desde el m](<B2C-41 Evidencias/TC-B2C41-D-009-p06-abastero-vacuno-nacional-al-vacio-1-8-kg-agregado-desde-el-m.png>)

![TC B2C41 D 009 x01 inmediatamente tras el clic sin loading](<B2C-41 Evidencias/TC-B2C41-D-009-x01-inmediatamente-tras-el-clic-sin-loading.png>)

![TC B2C41 D 009 x02 150 ms despues ya en carro](<B2C-41 Evidencias/TC-B2C41-D-009-x02-150-ms-despues-ya-en-carro.png>)

---

### TC-B2C41-D-010 - Verificar que Continuar cierra el modal de sugeridos y sigue a la página de Mis envíos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario hace clic en "Continuar".

**Resultado esperado**

El modal se cierra y el usuario continúa al siguiente paso "Mis Envios".

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Tras 'Continuar' el modal se cierra y el sitio navega a /checkout/entrega (Datos de entrega).

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-D-010-p02-carro-cargado.png>)

![Paso 4 — modal abierto](<B2C-41 Evidencias/TC-B2C41-D-010-p04-modal-abierto.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-D-010.png>)

---

### TC-B2C41-D-011 - Verificar que un error al agregar un sugerido muestra CRT-024 y el modal sigue abierto [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito
- DevTools abierto con bloqueo de la request {ADD_TO_CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{ADD_TO_CART_API_ENDPOINT}, {BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

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

No ejecutado.

**Observación**

Causa: {ADD_TO_CART_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint de agregar al carro para simular el error CRT-024.

---

### TC-B2C41-M-001 - Verificar que Continuar con la entrega abre el modal de sugeridos cuando hay sugerencias [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".

**Resultado esperado**

Se muestra el modal "¡Que no se te olviden!" sobre el carrito.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Cuenta vhchirinos+comprador@avatar-global.com. Carro con 000000000000675191-UN × 11 (subtotal ≥ 20000); dirección activa Calle Uno 23, La Florida.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-001-p02-carro-cargado.png>)

![Paso 3 — modal abierto tras el toque en continuar con la entrega](<B2C-41 Evidencias/TC-B2C41-M-001-p03-modal-abierto-tras-el-toque-en-continuar-con-la-entrega.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-M-001.png>)

---

### TC-B2C41-M-002 - Verificar que sin sugerencias el modal no se muestra y el flujo continúa [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta no tiene productos My Usuals ni favoritos

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_SIN_SUGERENCIAS_PASSWORD}, {COMPRADOR_SIN_SUGERENCIAS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".

**Resultado esperado**

El modal "¡Que no se te olviden!" no se presenta y el usuario continúa al siguiente paso Mis Envíos sin interrupción.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: la cuenta declarada vhchirinos+noaddress@avatar-global.com no tiene método de entrega activo (al agregar el SKU el sitio abre 'Elige tu método de entrega') y es la misma cuenta de vhchirinos+noaddress@avatar-global.com, así que no se le configura una dirección. Además, mientras la colección 'Imperdibles' (B2C-308) tenga productos, el modal se mostrará igual (B2C-308 CA4). Acción: declarar una cuenta sin My Usuals ni favoritos con método de entrega activo, y desactivar la colección Imperdibles en BM para este caso. (captura de la exploración en Desktop 1440x900)

**Evidencia**

![TC B2C41 M 002 x01 sin metodo de entrega al agregar](<B2C-41 Evidencias/TC-B2C41-M-002-x01-sin-metodo-de-entrega-al-agregar.png>)

---

### TC-B2C41-M-003 - Verificar que con My Usuals y favoritos se ven ambas pestañas en orden [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestran dos pestañas en orden: "Lo que más compro" resaltada con la lista My Usuals y luego "Mis favoritos".

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41 según la HU), primera y activa por defecto; se evaluaron 'Lo que más compro' y 'Mis favoritos' ignorándola. 'Lo que más compro' (4 My Usuals) queda resaltada al seleccionarla.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-003-p02-carro-cargado.png>)

![Paso 4 — modal abierto](<B2C-41 Evidencias/TC-B2C41-M-003-p04-modal-abierto.png>)

![Paso 5 — pestanas lo que mas compro y mis favoritos](<B2C-41 Evidencias/TC-B2C41-M-003-p05-pestanas-lo-que-mas-compro-y-mis-favoritos.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-M-003.png>)

---

### TC-B2C41-M-004 - Verificar que sin favoritos solo se ve la pestaña Lo que más compro [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+oneclick@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y ningún favorito

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_SOLO_USUALS_PASSWORD}, {COMPRADOR_SOLO_USUALS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestra solo la pestaña "Lo que más compro", resaltada; no se muestra "Mis favoritos".

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Cuenta vhchirinos+oneclick@avatar-global.com. El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41 según la HU), primera y activa por defecto; se evaluaron 'Lo que más compro' y 'Mis favoritos' ignorándola.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-004-p02-carro-cargado.png>)

![Paso 4 — modal abierto](<B2C-41 Evidencias/TC-B2C41-M-004-p04-modal-abierto.png>)

![Paso 5 — solo lo que mas compro](<B2C-41 Evidencias/TC-B2C41-M-004-p05-solo-lo-que-mas-compro.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-M-004.png>)

---

### TC-B2C41-M-005 - Verificar que sin My Usuals solo se ve la pestaña Mis favoritos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta no tiene My Usuals y tiene al menos un favorito

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_SOLO_FAVORITOS_PASSWORD}, {COMPRADOR_SOLO_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa las pestañas del modal.

**Resultado esperado**

Se muestra solo la pestaña "Mis favoritos"; no se muestra "Lo que más compro".

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Cuenta vhchirinos+segundo@avatar-global.com (1 favorito). El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41 según la HU), primera y activa por defecto; se evaluaron 'Lo que más compro' y 'Mis favoritos' ignorándola.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-005-p02-carro-cargado.png>)

![Paso 4 — modal abierto](<B2C-41 Evidencias/TC-B2C41-M-005-p04-modal-abierto.png>)

![Paso 5 — solo mis favoritos](<B2C-41 Evidencias/TC-B2C41-M-005-p05-solo-mis-favoritos.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-M-005.png>)

---

### TC-B2C41-M-006 - Verificar que Lo que más compro muestra los My Usuals en grilla 2x2 con Continuar fijo [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario revisa el contenido de la pestaña "Lo que más compro".

**Resultado esperado**

La pestaña "Lo que más compro" está resaltada, muestra los My Usuals en grilla 2x2 con la información de producto de B2C-64 y el botón "Continuar" fijo.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

4 My Usuals en 2 columnas, con precio, favorito y Agregar (B2C-64); 'Continuar' no se mueve al desplazar. El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41 según la HU), primera y activa por defecto; se evaluaron 'Lo que más compro' y 'Mis favoritos' ignorándola.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-006-p02-carro-cargado.png>)

![Paso 4 — modal abierto](<B2C-41 Evidencias/TC-B2C41-M-006-p04-modal-abierto.png>)

![Paso 5 — my usuals en grilla 2x2 con continuar al pie](<B2C-41 Evidencias/TC-B2C41-M-006-p05-my-usuals-en-grilla-2x2-con-continuar-al-pie.png>)

![Paso 5 — tras desplazar continuar en el mismo lugar](<B2C-41 Evidencias/TC-B2C41-M-006-p05-tras-desplazar-continuar-en-el-mismo-lugar.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-M-006.png>)

---

### TC-B2C41-M-007 - Verificar que Lo que más compro muestra como máximo 24 productos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene más de 24 productos My Usuals

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_MAS_24_PASSWORD}, {COMPRADOR_USUALS_MAS_24_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario recorre hasta el final la grilla de "Lo que más compro" y cuenta los productos.

**Resultado esperado**

La pestaña "Lo que más compro" muestra 24 productos, aunque la cuenta tiene más de 24 My Usuals.

**Resultado obtenido**

No ejecutado.

**Observación**

Causa: la cuenta declarada vhchirinos+comprador@avatar-global.com tiene 4 productos My Usuals en 'Lo que más compro', no más de 24, así que el tope no se puede verificar. Acción: declarar en vhchirinos+comprador@avatar-global.com una cuenta con más de 24 My Usuals. (captura de la exploración en Desktop 1440x900)

**Evidencia**

![TC B2C41 M 007 x01 lo que mas compro con 4 my usuals](<B2C-41 Evidencias/TC-B2C41-M-007-x01-lo-que-mas-compro-con-4-my-usuals.png>)

---

### TC-B2C41-M-008 - Verificar que la pestaña Mis favoritos muestra los favoritos en grilla 2x2 sin tope [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

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

Coincide con el resultado esperado.

**Observación**

Los 6 favoritos de /account/mis-favoritos aparecen en la pestaña, en 2 columnas.

**Evidencia**

![Paso 1 — mis favoritos de la cuenta 6](<B2C-41 Evidencias/TC-B2C41-M-008-p01-mis-favoritos-de-la-cuenta-6.png>)

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-008-p02-carro-cargado.png>)

![Paso 6 — mis favoritos resaltada con 6 productos](<B2C-41 Evidencias/TC-B2C41-M-008-p06-mis-favoritos-resaltada-con-6-productos.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-M-008.png>)

---

### TC-B2C41-M-009 - Verificar que Agregar un sugerido lo suma al carro y el modal sigue abierto [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Rechazado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

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

el producto se agrega (la card pasa a 'En carro 1 un.'), el contador del carro sube de 11 a 12 unidades, el modal sigue abierto y 'Continuar' habilitado, pero la card no muestra ningún loading: el botón 'Agregar' se reemplaza directo por el stepper (~350 ms tras el clic, sin spinner, aria-busy ni estado deshabilitado; observado en el DOM)

**Observación**

Esperado: loading en la card mientras se procesa; el producto se agrega, el contador del carro se actualiza, el modal sigue abierto y 'Continuar' habilitado. Obtenido: el producto se agrega (la card pasa a 'En carro 1 un.'), el contador del carro sube de 11 a 12 unidades, el modal sigue abierto y 'Continuar' habilitado, pero la card no muestra ningún loading: el botón 'Agregar' se reemplaza directo por el stepper (~350 ms tras el clic, sin spinner, aria-busy ni estado deshabilitado; observado en el DOM) (tests/B2C-41.spec.ts:303). Bug B2C-1218. El producto agregado se quitó del carro al terminar. (las capturas x01/x02 son de la observación en Desktop 1440x900)

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-009-p02-carro-cargado.png>)

![Paso 4 — modal abierto](<B2C-41 Evidencias/TC-B2C41-M-009-p04-modal-abierto.png>)

![Paso 6 — abastero vacuno nacional al vacio 1 8 kg agregado desde el m](<B2C-41 Evidencias/TC-B2C41-M-009-p06-abastero-vacuno-nacional-al-vacio-1-8-kg-agregado-desde-el-m.png>)

![TC B2C41 M 009 x01 inmediatamente tras el clic sin loading](<B2C-41 Evidencias/TC-B2C41-M-009-x01-inmediatamente-tras-el-clic-sin-loading.png>)

![TC B2C41 M 009 x02 150 ms despues ya en carro](<B2C-41 Evidencias/TC-B2C41-M-009-x02-150-ms-despues-ya-en-carro.png>)

---

### TC-B2C41-M-010 - Verificar que Continuar cierra el modal de sugeridos y sigue a la página de Mis Envios [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario toca "Continuar".

**Resultado esperado**

El modal se cierra y el usuario continúa al siguiente paso del flujo Mis envíos.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

Tras 'Continuar' el modal se cierra y el sitio navega a /checkout/entrega (Datos de entrega).

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-010-p02-carro-cargado.png>)

![Paso 4 — modal abierto](<B2C-41 Evidencias/TC-B2C41-M-010-p04-modal-abierto.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-M-010.png>)

---

### TC-B2C41-M-011 - Verificar que un error al agregar un sugerido muestra CRT-024 y el modal sigue abierto [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La cuenta tiene al menos un producto My Usuals y al menos un favorito
- DevTools abierto con bloqueo de la request {ADD_TO_CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{ADD_TO_CART_API_ENDPOINT}, {BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

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

No ejecutado.

**Observación**

Causa: {ADD_TO_CART_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint de agregar al carro para simular el error CRT-024.

---

### TC-B2C41-M-012 - Verificar que al hacer scroll en el modal el botón Continuar permanece fijo [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-15 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com
- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000
- Método de entrega activo
- La lista de la pestaña activa supera la altura visible de la pantalla

**Data utilizada**

{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Continuar con la entrega".
4. El sistema muestra el modal "¡Que no se te olviden!".
5. El usuario hace scroll vertical dentro del modal hasta el final de la lista.

**Resultado esperado**

El área de productos se desplaza verticalmente y el CTA "Continuar" permanece fijo en la parte inferior durante todo el scroll.

**Resultado obtenido**

Coincide con el resultado esperado.

**Observación**

El área de productos se desplaza hasta el final y 'Continuar' permanece fijo al pie de la pantalla.

**Evidencia**

![Paso 2 — carro cargado](<B2C-41 Evidencias/TC-B2C41-M-012-p02-carro-cargado.png>)

![Paso 4 — modal abierto inicio de la lista](<B2C-41 Evidencias/TC-B2C41-M-012-p04-modal-abierto-inicio-de-la-lista.png>)

![Paso 5 — final de la lista continuar fijo al pie](<B2C-41 Evidencias/TC-B2C41-M-012-p05-final-de-la-lista-continuar-fijo-al-pie.png>)

![Estado final](<B2C-41 Evidencias/TC-B2C41-M-012.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "Storefront Unimarc DEV (https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/), Chromium Desktop 1440x900 / WebKit Mobile 390x844",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-41",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-41 Test Cases.xlsx",
  "title": "B2C-41 - Agregar productos sugeridos al carrito antes de finalizar la compra - Evidencias QA",
  "updated_at": "2026-10-15"
 },
 "history": {
  "2026-10-15": [
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
  ]
 },
 "results": [
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra el modal \"¡Que no se te olviden!\" sobre el carrito.",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-001",
   "name": "Verificar que Continuar con la entrega abre el modal de sugeridos cuando hay sugerencias [Desktop] [Logueado]",
   "observation": "Cuenta vhchirinos+comprador@avatar-global.com. Carro con 000000000000675191-UN × 11 (subtotal ≥ 20000); dirección activa Calle Uno 23, La Florida.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-D-001-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 3 — modal abierto tras el clic en continuar con la entrega",
     "file": "TC-B2C41-D-001-p03-modal-abierto-tras-el-clic-en-continuar-con-la-entrega.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-D-001.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El modal \"¡Que no se te olviden!\" no se presenta y el usuario continúa al siguiente paso, página de Mis Envíos, sin interrupción.",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-002",
   "name": "Verificar que sin sugerencias el modal no se muestra y el flujo continúa [Desktop] [Logueado]",
   "observation": "Causa: la cuenta declarada vhchirinos+noaddress@avatar-global.com no tiene método de entrega activo (al agregar el SKU el sitio abre 'Elige tu método de entrega') y es la misma cuenta de vhchirinos+noaddress@avatar-global.com, así que no se le configura una dirección. Además, mientras la colección 'Imperdibles' (B2C-308) tenga productos, el modal se mostrará igual (B2C-308 CA4). Acción: declarar una cuenta sin My Usuals ni favoritos con método de entrega activo, y desactivar la colección Imperdibles en BM para este caso. (captura de la exploración en Desktop 1440x900)",
   "observed": "No ejecutado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta no tiene productos My Usuals ni favoritos",
   "screenshots": [
    {
     "caption": "TC B2C41 D 002 x01 sin metodo de entrega al agregar",
     "file": "TC-B2C41-D-002-x01-sin-metodo-de-entrega-al-agregar.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_SIN_SUGERENCIAS_PASSWORD}, {COMPRADOR_SIN_SUGERENCIAS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestran dos pestañas en orden: \"Lo que más compro\" resaltada con la lista My Usuals y luego \"Mis favoritos\".",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-003",
   "name": "Verificar que con My Usuals y favoritos se ven ambas pestañas en orden [Desktop] [Logueado]",
   "observation": "El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41 según la HU), primera y activa por defecto; se evaluaron 'Lo que más compro' y 'Mis favoritos' ignorándola. 'Lo que más compro' (4 My Usuals) queda resaltada al seleccionarla.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-D-003-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal abierto",
     "file": "TC-B2C41-D-003-p04-modal-abierto.png"
    },
    {
     "caption": "Paso 5 — pestanas lo que mas compro y mis favoritos",
     "file": "TC-B2C41-D-003-p05-pestanas-lo-que-mas-compro-y-mis-favoritos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-D-003.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra solo la pestaña \"Lo que más compro\", resaltada; no se muestra \"Mis favoritos\".",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-004",
   "name": "Verificar que sin favoritos solo se ve la pestaña Lo que más compro [Desktop] [Logueado]",
   "observation": "Cuenta vhchirinos+oneclick@avatar-global.com. El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41 según la HU), primera y activa por defecto; se evaluaron 'Lo que más compro' y 'Mis favoritos' ignorándola.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+oneclick@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y ningún favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-D-004-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal abierto",
     "file": "TC-B2C41-D-004-p04-modal-abierto.png"
    },
    {
     "caption": "Paso 5 — solo lo que mas compro",
     "file": "TC-B2C41-D-004-p05-solo-lo-que-mas-compro.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-D-004.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_SOLO_USUALS_PASSWORD}, {COMPRADOR_SOLO_USUALS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra solo la pestaña \"Mis favoritos\"; no se muestra \"Lo que más compro\".",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-005",
   "name": "Verificar que sin My Usuals solo se ve la pestaña Mis favoritos [Desktop] [Logueado]",
   "observation": "Cuenta vhchirinos+segundo@avatar-global.com (1 favorito). El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41 según la HU), primera y activa por defecto; se evaluaron 'Lo que más compro' y 'Mis favoritos' ignorándola.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta no tiene My Usuals y tiene al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-D-005-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal abierto",
     "file": "TC-B2C41-D-005-p04-modal-abierto.png"
    },
    {
     "caption": "Paso 5 — solo mis favoritos",
     "file": "TC-B2C41-D-005-p05-solo-mis-favoritos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-D-005.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_SOLO_FAVORITOS_PASSWORD}, {COMPRADOR_SOLO_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "La pestaña \"Lo que más compro\" está resaltada, muestra los My Usuals en grilla 2x2 con la información de producto de B2C-64 y el botón \"Continuar\" fijo.",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-006",
   "name": "Verificar que Lo que más compro muestra los My Usuals en grilla 2x2 con Continuar fijo [Desktop] [Logueado]",
   "observation": "4 My Usuals en 2 columnas, con precio, favorito y Agregar (B2C-64); 'Continuar' no se mueve al desplazar. El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41 según la HU), primera y activa por defecto; se evaluaron 'Lo que más compro' y 'Mis favoritos' ignorándola.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-D-006-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal abierto",
     "file": "TC-B2C41-D-006-p04-modal-abierto.png"
    },
    {
     "caption": "Paso 5 — my usuals en grilla 2x2 con continuar al pie",
     "file": "TC-B2C41-D-006-p05-my-usuals-en-grilla-2x2-con-continuar-al-pie.png"
    },
    {
     "caption": "Paso 5 — tras desplazar continuar en el mismo lugar",
     "file": "TC-B2C41-D-006-p05-tras-desplazar-continuar-en-el-mismo-lugar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-D-006.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa el contenido de la pestaña \"Lo que más compro\".",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "La pestaña \"Lo que más compro\" muestra 24 productos, aunque la cuenta tiene más de 24 My Usuals.",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-007",
   "name": "Verificar que Lo que más compro muestra como máximo 24 productos [Desktop] [Logueado]",
   "observation": "Causa: la cuenta declarada vhchirinos+comprador@avatar-global.com tiene 4 productos My Usuals en 'Lo que más compro', no más de 24, así que el tope no se puede verificar. Acción: declarar en vhchirinos+comprador@avatar-global.com una cuenta con más de 24 My Usuals. (captura de la exploración en Desktop 1440x900)",
   "observed": "No ejecutado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene más de 24 productos My Usuals",
   "screenshots": [
    {
     "caption": "TC B2C41 D 007 x01 lo que mas compro con 4 my usuals",
     "file": "TC-B2C41-D-007-x01-lo-que-mas-compro-con-4-my-usuals.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario recorre hasta el final la grilla de \"Lo que más compro\" y cuenta los productos.",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_MAS_24_PASSWORD}, {COMPRADOR_USUALS_MAS_24_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "La pestaña \"Mis favoritos\" queda resaltada y muestra todos los favoritos de la cuenta en grilla 2x2, con la información de B2C-64 y el botón \"Continuar\" fijo.",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-008",
   "name": "Verificar que la pestaña Mis favoritos muestra los favoritos en grilla 2x2 sin tope [Desktop] [Logueado]",
   "observation": "Los 6 favoritos de /account/mis-favoritos aparecen en la pestaña, en 2 columnas.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 1 — mis favoritos de la cuenta 6",
     "file": "TC-B2C41-D-008-p01-mis-favoritos-de-la-cuenta-6.png"
    },
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-D-008-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 6 — mis favoritos resaltada con 6 productos",
     "file": "TC-B2C41-D-008-p06-mis-favoritos-resaltada-con-6-productos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-D-008.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario hace clic en la pestaña \"Mis favoritos\".\n6. El sistema muestra la pestaña \"Mis favoritos\" resaltada.",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El producto se agrega al carro con la cantidad indicada, el contador del carro se actualiza en tiempo real, el modal permanece abierto y \"Continuar\" sigue habilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-009",
   "name": "Verificar que Agregar un sugerido lo suma al carro y el modal sigue abierto [Desktop] [Logueado]",
   "observation": "Esperado: loading en la card mientras se procesa; el producto se agrega, el contador del carro se actualiza, el modal sigue abierto y 'Continuar' habilitado. Obtenido: el producto se agrega (la card pasa a 'En carro 1 un.'), el contador del carro sube de 11 a 12 unidades, el modal sigue abierto y 'Continuar' habilitado, pero la card no muestra ningún loading: el botón 'Agregar' se reemplaza directo por el stepper (~350 ms tras el clic, sin spinner, aria-busy ni estado deshabilitado; observado en el DOM) (tests/B2C-41.spec.ts:303). Bug B2C-1218. El producto agregado se quitó del carro al terminar.",
   "observed": "el producto se agrega (la card pasa a 'En carro 1 un.'), el contador del carro sube de 11 a 12 unidades, el modal sigue abierto y 'Continuar' habilitado, pero la card no muestra ningún loading: el botón 'Agregar' se reemplaza directo por el stepper (~350 ms tras el clic, sin spinner, aria-busy ni estado deshabilitado; observado en el DOM)",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-D-009-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal abierto",
     "file": "TC-B2C41-D-009-p04-modal-abierto.png"
    },
    {
     "caption": "Paso 6 — abastero vacuno nacional al vacio 1 8 kg agregado desde el m",
     "file": "TC-B2C41-D-009-p06-abastero-vacuno-nacional-al-vacio-1-8-kg-agregado-desde-el-m.png"
    },
    {
     "caption": "TC B2C41 D 009 x01 inmediatamente tras el clic sin loading",
     "file": "TC-B2C41-D-009-x01-inmediatamente-tras-el-clic-sin-loading.png"
    },
    {
     "caption": "TC B2C41 D 009 x02 150 ms despues ya en carro",
     "file": "TC-B2C41-D-009-x02-150-ms-despues-ya-en-carro.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario hace clic en \"Agregar\" en el primer producto de la pestaña activa.\n6. El sistema muestra un loading en la card del producto mientras procesa la solicitud.",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El modal se cierra y el usuario continúa al siguiente paso \"Mis Envios\".",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-010",
   "name": "Verificar que Continuar cierra el modal de sugeridos y sigue a la página de Mis envíos [Desktop] [Logueado]",
   "observation": "Tras 'Continuar' el modal se cierra y el sitio navega a /checkout/entrega (Datos de entrega).",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-D-010-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal abierto",
     "file": "TC-B2C41-D-010-p04-modal-abierto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-D-010.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario hace clic en \"Continuar\".",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra el toast CRT-024 (persiste hasta la X), el carrito no se modifica, el modal permanece abierto y \"Continuar\" sigue disponible.",
   "form_factor": "desktop",
   "id": "TC-B2C41-D-011",
   "name": "Verificar que un error al agregar un sugerido muestra CRT-024 y el modal sigue abierto [Desktop] [Logueado]",
   "observation": "Causa: {ADD_TO_CART_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint de agregar al carro para simular el error CRT-024.",
   "observed": "No ejecutado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito\n- DevTools abierto con bloqueo de la request {ADD_TO_CART_API_ENDPOINT} (Network request blocking)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario hace clic en \"Agregar\" en el primer producto de la pestaña activa.\n6. El sistema muestra el toast de error \"No pudimos agregar el producto al carro. Inténtalo nuevamente. (CRT-024)\".",
   "test_data": "{ADD_TO_CART_API_ENDPOINT}, {BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra el modal \"¡Que no se te olviden!\" sobre el carrito.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-001",
   "name": "Verificar que Continuar con la entrega abre el modal de sugeridos cuando hay sugerencias [Mobile] [Logueado]",
   "observation": "Cuenta vhchirinos+comprador@avatar-global.com. Carro con 000000000000675191-UN × 11 (subtotal ≥ 20000); dirección activa Calle Uno 23, La Florida.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-001-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 3 — modal abierto tras el toque en continuar con la entrega",
     "file": "TC-B2C41-M-001-p03-modal-abierto-tras-el-toque-en-continuar-con-la-entrega.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-M-001.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El modal \"¡Que no se te olviden!\" no se presenta y el usuario continúa al siguiente paso Mis Envíos sin interrupción.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-002",
   "name": "Verificar que sin sugerencias el modal no se muestra y el flujo continúa [Mobile] [Logueado]",
   "observation": "Causa: la cuenta declarada vhchirinos+noaddress@avatar-global.com no tiene método de entrega activo (al agregar el SKU el sitio abre 'Elige tu método de entrega') y es la misma cuenta de vhchirinos+noaddress@avatar-global.com, así que no se le configura una dirección. Además, mientras la colección 'Imperdibles' (B2C-308) tenga productos, el modal se mostrará igual (B2C-308 CA4). Acción: declarar una cuenta sin My Usuals ni favoritos con método de entrega activo, y desactivar la colección Imperdibles en BM para este caso. (captura de la exploración en Desktop 1440x900)",
   "observed": "No ejecutado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+noaddress@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta no tiene productos My Usuals ni favoritos",
   "screenshots": [
    {
     "caption": "TC B2C41 M 002 x01 sin metodo de entrega al agregar",
     "file": "TC-B2C41-M-002-x01-sin-metodo-de-entrega-al-agregar.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_SIN_SUGERENCIAS_PASSWORD}, {COMPRADOR_SIN_SUGERENCIAS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestran dos pestañas en orden: \"Lo que más compro\" resaltada con la lista My Usuals y luego \"Mis favoritos\".",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-003",
   "name": "Verificar que con My Usuals y favoritos se ven ambas pestañas en orden [Mobile] [Logueado]",
   "observation": "El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41 según la HU), primera y activa por defecto; se evaluaron 'Lo que más compro' y 'Mis favoritos' ignorándola. 'Lo que más compro' (4 My Usuals) queda resaltada al seleccionarla.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-003-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal abierto",
     "file": "TC-B2C41-M-003-p04-modal-abierto.png"
    },
    {
     "caption": "Paso 5 — pestanas lo que mas compro y mis favoritos",
     "file": "TC-B2C41-M-003-p05-pestanas-lo-que-mas-compro-y-mis-favoritos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-M-003.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra solo la pestaña \"Lo que más compro\", resaltada; no se muestra \"Mis favoritos\".",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-004",
   "name": "Verificar que sin favoritos solo se ve la pestaña Lo que más compro [Mobile] [Logueado]",
   "observation": "Cuenta vhchirinos+oneclick@avatar-global.com. El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41 según la HU), primera y activa por defecto; se evaluaron 'Lo que más compro' y 'Mis favoritos' ignorándola.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+oneclick@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y ningún favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-004-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal abierto",
     "file": "TC-B2C41-M-004-p04-modal-abierto.png"
    },
    {
     "caption": "Paso 5 — solo lo que mas compro",
     "file": "TC-B2C41-M-004-p05-solo-lo-que-mas-compro.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-M-004.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_SOLO_USUALS_PASSWORD}, {COMPRADOR_SOLO_USUALS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra solo la pestaña \"Mis favoritos\"; no se muestra \"Lo que más compro\".",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-005",
   "name": "Verificar que sin My Usuals solo se ve la pestaña Mis favoritos [Mobile] [Logueado]",
   "observation": "Cuenta vhchirinos+segundo@avatar-global.com (1 favorito). El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41 según la HU), primera y activa por defecto; se evaluaron 'Lo que más compro' y 'Mis favoritos' ignorándola.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+segundo@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta no tiene My Usuals y tiene al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-005-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal abierto",
     "file": "TC-B2C41-M-005-p04-modal-abierto.png"
    },
    {
     "caption": "Paso 5 — solo mis favoritos",
     "file": "TC-B2C41-M-005-p05-solo-mis-favoritos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-M-005.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa las pestañas del modal.",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_SOLO_FAVORITOS_PASSWORD}, {COMPRADOR_SOLO_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "La pestaña \"Lo que más compro\" está resaltada, muestra los My Usuals en grilla 2x2 con la información de producto de B2C-64 y el botón \"Continuar\" fijo.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-006",
   "name": "Verificar que Lo que más compro muestra los My Usuals en grilla 2x2 con Continuar fijo [Mobile] [Logueado]",
   "observation": "4 My Usuals en 2 columnas, con precio, favorito y Agregar (B2C-64); 'Continuar' no se mueve al desplazar. El modal muestra además la pestaña 'Imperdibles' (B2C-308, fuera del alcance de B2C-41 según la HU), primera y activa por defecto; se evaluaron 'Lo que más compro' y 'Mis favoritos' ignorándola.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-006-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal abierto",
     "file": "TC-B2C41-M-006-p04-modal-abierto.png"
    },
    {
     "caption": "Paso 5 — my usuals en grilla 2x2 con continuar al pie",
     "file": "TC-B2C41-M-006-p05-my-usuals-en-grilla-2x2-con-continuar-al-pie.png"
    },
    {
     "caption": "Paso 5 — tras desplazar continuar en el mismo lugar",
     "file": "TC-B2C41-M-006-p05-tras-desplazar-continuar-en-el-mismo-lugar.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-M-006.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario revisa el contenido de la pestaña \"Lo que más compro\".",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "La pestaña \"Lo que más compro\" muestra 24 productos, aunque la cuenta tiene más de 24 My Usuals.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-007",
   "name": "Verificar que Lo que más compro muestra como máximo 24 productos [Mobile] [Logueado]",
   "observation": "Causa: la cuenta declarada vhchirinos+comprador@avatar-global.com tiene 4 productos My Usuals en 'Lo que más compro', no más de 24, así que el tope no se puede verificar. Acción: declarar en vhchirinos+comprador@avatar-global.com una cuenta con más de 24 My Usuals. (captura de la exploración en Desktop 1440x900)",
   "observed": "No ejecutado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene más de 24 productos My Usuals",
   "screenshots": [
    {
     "caption": "TC B2C41 M 007 x01 lo que mas compro con 4 my usuals",
     "file": "TC-B2C41-M-007-x01-lo-que-mas-compro-con-4-my-usuals.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario recorre hasta el final la grilla de \"Lo que más compro\" y cuenta los productos.",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_MAS_24_PASSWORD}, {COMPRADOR_USUALS_MAS_24_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "La pestaña \"Mis favoritos\" queda resaltada y muestra todos los favoritos de la cuenta en grilla 2x2, con la información de B2C-64 y el botón \"Continuar\" fijo.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-008",
   "name": "Verificar que la pestaña Mis favoritos muestra los favoritos en grilla 2x2 sin tope [Mobile] [Logueado]",
   "observation": "Los 6 favoritos de /account/mis-favoritos aparecen en la pestaña, en 2 columnas.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 1 — mis favoritos de la cuenta 6",
     "file": "TC-B2C41-M-008-p01-mis-favoritos-de-la-cuenta-6.png"
    },
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-008-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 6 — mis favoritos resaltada con 6 productos",
     "file": "TC-B2C41-M-008-p06-mis-favoritos-resaltada-con-6-productos.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-M-008.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca la pestaña \"Mis favoritos\".\n6. El sistema muestra la pestaña \"Mis favoritos\" resaltada.",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El producto se agrega al carro con la cantidad indicada, el contador del carro se actualiza en tiempo real, el modal permanece abierto y \"Continuar\" sigue habilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-009",
   "name": "Verificar que Agregar un sugerido lo suma al carro y el modal sigue abierto [Mobile] [Logueado]",
   "observation": "Esperado: loading en la card mientras se procesa; el producto se agrega, el contador del carro se actualiza, el modal sigue abierto y 'Continuar' habilitado. Obtenido: el producto se agrega (la card pasa a 'En carro 1 un.'), el contador del carro sube de 11 a 12 unidades, el modal sigue abierto y 'Continuar' habilitado, pero la card no muestra ningún loading: el botón 'Agregar' se reemplaza directo por el stepper (~350 ms tras el clic, sin spinner, aria-busy ni estado deshabilitado; observado en el DOM) (tests/B2C-41.spec.ts:303). Bug B2C-1218. El producto agregado se quitó del carro al terminar. (las capturas x01/x02 son de la observación en Desktop 1440x900)",
   "observed": "el producto se agrega (la card pasa a 'En carro 1 un.'), el contador del carro sube de 11 a 12 unidades, el modal sigue abierto y 'Continuar' habilitado, pero la card no muestra ningún loading: el botón 'Agregar' se reemplaza directo por el stepper (~350 ms tras el clic, sin spinner, aria-busy ni estado deshabilitado; observado en el DOM)",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-009-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal abierto",
     "file": "TC-B2C41-M-009-p04-modal-abierto.png"
    },
    {
     "caption": "Paso 6 — abastero vacuno nacional al vacio 1 8 kg agregado desde el m",
     "file": "TC-B2C41-M-009-p06-abastero-vacuno-nacional-al-vacio-1-8-kg-agregado-desde-el-m.png"
    },
    {
     "caption": "TC B2C41 M 009 x01 inmediatamente tras el clic sin loading",
     "file": "TC-B2C41-M-009-x01-inmediatamente-tras-el-clic-sin-loading.png"
    },
    {
     "caption": "TC B2C41 M 009 x02 150 ms despues ya en carro",
     "file": "TC-B2C41-M-009-x02-150-ms-despues-ya-en-carro.png"
    }
   ],
   "status": "Rechazado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca \"Agregar\" en el primer producto de la pestaña activa.\n6. El sistema muestra un loading en la card del producto mientras procesa la solicitud.",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El modal se cierra y el usuario continúa al siguiente paso del flujo Mis envíos.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-010",
   "name": "Verificar que Continuar cierra el modal de sugeridos y sigue a la página de Mis Envios [Mobile] [Logueado]",
   "observation": "Tras 'Continuar' el modal se cierra y el sitio navega a /checkout/entrega (Datos de entrega).",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-010-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal abierto",
     "file": "TC-B2C41-M-010-p04-modal-abierto.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-M-010.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca \"Continuar\".",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "Se muestra el toast CRT-024 (persiste hasta la X), el carrito no se modifica, el modal permanece abierto y \"Continuar\" sigue disponible.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-011",
   "name": "Verificar que un error al agregar un sugerido muestra CRT-024 y el modal sigue abierto [Mobile] [Logueado]",
   "observation": "Causa: {ADD_TO_CART_API_ENDPOINT} está en TBD en el Excel de data. Acción: cargar el endpoint de agregar al carro para simular el error CRT-024.",
   "observed": "No ejecutado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La cuenta tiene al menos un producto My Usuals y al menos un favorito\n- DevTools abierto con bloqueo de la request {ADD_TO_CART_API_ENDPOINT} (Network request blocking)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario toca \"Agregar\" en el primer producto de la pestaña activa.\n6. El sistema muestra el toast de error \"No pudimos agregar el producto al carro. Inténtalo nuevamente. (CRT-024)\".",
   "test_data": "{ADD_TO_CART_API_ENDPOINT}, {BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-15",
   "expected": "El área de productos se desplaza verticalmente y el CTA \"Continuar\" permanece fijo en la parte inferior durante todo el scroll.",
   "form_factor": "mobile",
   "id": "TC-B2C41-M-012",
   "name": "Verificar que al hacer scroll en el modal el botón Continuar permanece fijo [Mobile] [Logueado]",
   "observation": "El área de productos se desplaza hasta el final y 'Continuar' permanece fijo al pie de la pantalla.",
   "observed": "Coincide con el resultado esperado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta vhchirinos+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN x 11 y el subtotal es mayor o igual a 20000\n- Método de entrega activo\n- La lista de la pestaña activa supera la altura visible de la pantalla",
   "screenshots": [
    {
     "caption": "Paso 2 — carro cargado",
     "file": "TC-B2C41-M-012-p02-carro-cargado.png"
    },
    {
     "caption": "Paso 4 — modal abierto inicio de la lista",
     "file": "TC-B2C41-M-012-p04-modal-abierto-inicio-de-la-lista.png"
    },
    {
     "caption": "Paso 5 — final de la lista continuar fijo al pie",
     "file": "TC-B2C41-M-012-p05-final-de-la-lista-continuar-fijo-al-pie.png"
    },
    {
     "caption": "Estado final",
     "file": "TC-B2C41-M-012.png"
    }
   ],
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Continuar con la entrega\".\n4. El sistema muestra el modal \"¡Que no se te olviden!\".\n5. El usuario hace scroll vertical dentro del modal hasta el final de la lista.",
   "test_data": "{BASE_URL}, {CART_URL}, {COMPRADOR_USUALS_FAVORITOS_PASSWORD}, {COMPRADOR_USUALS_FAVORITOS_USER}, {MONTO_MINIMO_COMPRA}, {SKU_VALID_001}, {UNIDADES_SOBRE_MINIMO}",
   "viewport": "390x844"
  }
 ]
}
-->
