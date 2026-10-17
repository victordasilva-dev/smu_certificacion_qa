# B2C-39 - Carro: productos no disponibles (Reemplazar / Eliminar) - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-39 |
| Última actualización | 2026-10-14 |
| Ejecutado por | Victor Chirinos |
| Ambiente | Storefront DEV https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ · Desktop: chromium · Mobile: webkit |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-39 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 19 |
| **Total** | **19** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-14 | 19 | TC-B2C39-D-001, TC-B2C39-D-002, TC-B2C39-D-003, TC-B2C39-D-004, TC-B2C39-D-005, TC-B2C39-D-006, TC-B2C39-D-007, TC-B2C39-D-008, TC-B2C39-D-009, TC-B2C39-M-001, TC-B2C39-M-002, TC-B2C39-M-003, TC-B2C39-M-004, TC-B2C39-M-005, TC-B2C39-M-006, TC-B2C39-M-007, TC-B2C39-M-008, TC-B2C39-M-009, TC-B2C39-M-010 |

## Detalle por caso de prueba

### TC-B2C39-D-001 - Verificar que Reemplazar de un ítem no disponible abre el modal de productos similares [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Reemplazar" en el ítem 000000000400254005-UN.
4. El sistema abre el modal de productos similares (B2C-40).

**Resultado esperado**

Se abre el modal de productos similares de 000000000400254005-UN (B2C-40).

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C39-D-002 - Verificar que el ítem no disponible muestra el CTA Reemplazar y el link de texto Eliminar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario revisa el ítem 000000000400254005-UN en la sección de no disponibles.

**Resultado esperado**

El ítem muestra el CTA "Reemplazar" y el link de texto "Eliminar"; no se muestra un ícono ✕.

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C39-D-003 - Verificar que reemplazar por un similar lo agrega a disponibles y quita el no disponible [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene 000000000000675191-UN y 000000000400254005-UN x 1
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Reemplazar" en el ítem 000000000400254005-UN.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario hace clic en "Agregar" en el primer producto similar del modal.
6. El usuario hace clic en "Reemplazar producto".
7. El sistema muestra un estado de carga (loading).

**Resultado esperado**

El similar se agrega a la sección de disponibles con la cantidad seleccionada, 000000000400254005-UN sale de no disponibles, el resumen de precios se recalcula y se muestra el toast "¡Tu carro ha sido actualizado!".

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C39-D-004 - Verificar que un reemplazo parcial deja en no disponibles la cantidad restante [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene 000000000000675191-UN y 000000000400254005-UN x 3
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Reemplazar" en el ítem 000000000400254005-UN.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario hace clic en "Agregar" en el primer producto similar del modal y deja la cantidad en 1.
6. El usuario hace clic en "Reemplazar producto".
7. El sistema muestra un estado de carga (loading).

**Resultado esperado**

El similar se agrega a disponibles con cantidad 1 y 000000000400254005-UN permanece en no disponibles con cantidad 2 (3 − 1).

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C39-D-005 - Verificar que un carro solo con no disponibles muestra la sección expandida y el CTA deshabilitado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene solo 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario revisa la sección de no disponibles y el botón "Continuar con la entrega".

**Resultado esperado**

La sección de no disponibles se muestra expandida con badge "Pronto disponible", CTA "Reemplazar" y link "Eliminar"; no hay ítems disponibles y "Continuar con la entrega" está deshabilitado.

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C39-D-006 - Verificar que eliminar un no disponible sin confirmar mantiene la sección si quedan otros [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene 000000000000675191-UN, 000000000400254005-UN y 000000000000966668-KG
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN y 000000000000966668-KG no tienen stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE_2} = 000000000000966668-KG
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en el link "Eliminar" del ítem 000000000400254005-UN.
4. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

000000000400254005-UN se elimina sin solicitar confirmación y la sección de no disponibles sigue visible con 000000000000966668-KG.

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar; además, {SKU_NO_DISPONIBLE_2} (000000000000966668-KG) tampoco sirve ya: también tiene stock en esa tienda ("Agregar"; el 2026-10-12 estaba "Pronto disponible"). La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} y {SKU_NO_DISPONIBLE_2} por SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no los tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

![Exploración 2026-10-14 — 000000000000966668-KG con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-2-con-stock.png>)

---

### TC-B2C39-D-007 - Verificar que eliminar el último no disponible hace desaparecer la sección [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en el link "Eliminar" del ítem 000000000400254005-UN.
4. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

000000000400254005-UN se elimina sin confirmación y la sección de no disponibles desaparece; 000000000000675191-UN se mantiene.

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C39-D-008 - Verificar que un error al eliminar un no disponible muestra el toast CRT-021 [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_ITEM_API_ENDPOINT} = {CART_ITEM_API_ENDPOINT}
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en el link "Eliminar" del ítem 000000000400254005-UN.
4. El sistema muestra el toast de error "No pudimos eliminar el producto del carro. Vuelve a intentarlo" [CRT-021].

**Resultado esperado**

El toast CRT-021 persiste hasta que el usuario lo cierra con la X y 000000000400254005-UN permanece en no disponibles sin cambios.

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar; además, {CART_ITEM_API_ENDPOINT} está en TBD en el Excel de data. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) y cargar {CART_ITEM_API_ENDPOINT} en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C39-D-009 - Verificar que un error al agregar el sustituto muestra el toast CRT-025 [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | desktop |
| Viewport | 1440x900 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock
- DevTools abierto con bloqueo de la request {ADD_TO_CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {ADD_TO_CART_API_ENDPOINT} = {ADD_TO_CART_API_ENDPOINT}
- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en "Reemplazar" en el ítem 000000000400254005-UN.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario hace clic en "Agregar" en el primer producto similar del modal.
6. El usuario hace clic en "Reemplazar producto".
7. El sistema muestra el toast de error "¡Lo sentimos! No pudimos reemplazar tu producto, vuelve a intentarlo. (CRT-025)".

**Resultado esperado**

Se muestra el toast CRT-025 y 000000000400254005-UN permanece en la sección de no disponibles sin cambios.

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar; además, {ADD_TO_CART_API_ENDPOINT} está en TBD en el Excel de data. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) y cargar {ADD_TO_CART_API_ENDPOINT} en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C39-M-001 - Verificar que Reemplazar de un ítem no disponible abre el modal de productos similares [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem 000000000400254005-UN.
4. El sistema abre el modal de productos similares (B2C-40).

**Resultado esperado**

Se abre el modal de productos similares de 000000000400254005-UN (B2C-40).

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C39-M-002 - Verificar que el ítem no disponible muestra el CTA Reemplazar y el link de texto Eliminar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario revisa el ítem 000000000400254005-UN en la sección de no disponibles.

**Resultado esperado**

El ítem muestra el CTA "Reemplazar" y el link de texto "Eliminar"; no se muestra un ícono ✕.

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C39-M-003 - Verificar que reemplazar por un similar lo agrega a disponibles y quita el no disponible [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene 000000000000675191-UN y 000000000400254005-UN x 1
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem 000000000400254005-UN.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario toca "Agregar" en el primer producto similar del modal.
6. El usuario toca "Reemplazar producto".
7. El sistema muestra un estado de carga (loading).

**Resultado esperado**

El similar se agrega a la sección de disponibles con la cantidad seleccionada, 000000000400254005-UN sale de no disponibles, el resumen de precios se recalcula y se muestra el toast "¡Tu carro ha sido actualizado!".

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C39-M-004 - Verificar que un reemplazo parcial deja en no disponibles la cantidad restante [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene 000000000000675191-UN y 000000000400254005-UN x 3
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem 000000000400254005-UN.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario toca "Agregar" en el primer producto similar del modal y deja la cantidad en 1.
6. El usuario toca "Reemplazar producto".
7. El sistema muestra un estado de carga (loading).

**Resultado esperado**

El similar se agrega a disponibles con cantidad 1 y 000000000400254005-UN permanece en no disponibles con cantidad 2 (3 − 1).

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C39-M-005 - Verificar que un carro solo con no disponibles muestra la sección expandida y el CTA deshabilitado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene solo 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario revisa la sección de no disponibles y el botón "Continuar con la entrega".

**Resultado esperado**

La sección de no disponibles se muestra expandida con badge "Pronto disponible", CTA "Reemplazar" y link "Eliminar"; no hay ítems disponibles y "Continuar con la entrega" está deshabilitado.

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C39-M-006 - Verificar que eliminar un no disponible sin confirmar mantiene la sección si quedan otros [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene 000000000000675191-UN, 000000000400254005-UN y 000000000000966668-KG
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN y 000000000000966668-KG no tienen stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE_2} = 000000000000966668-KG
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

000000000400254005-UN se elimina sin solicitar confirmación y la sección de no disponibles sigue visible con 000000000000966668-KG.

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar; además, {SKU_NO_DISPONIBLE_2} (000000000000966668-KG) tampoco sirve ya: también tiene stock en esa tienda ("Agregar"; el 2026-10-12 estaba "Pronto disponible"). La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} y {SKU_NO_DISPONIBLE_2} por SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no los tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

![Exploración 2026-10-14 — 000000000000966668-KG con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-2-con-stock.png>)

---

### TC-B2C39-M-007 - Verificar que eliminar el último no disponible hace desaparecer la sección [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

000000000400254005-UN se elimina sin confirmación y la sección de no disponibles desaparece; 000000000000675191-UN se mantiene.

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C39-M-008 - Verificar que un error al eliminar un no disponible muestra el toast CRT-021 [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_ITEM_API_ENDPOINT} = {CART_ITEM_API_ENDPOINT}
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra el toast de error "No pudimos eliminar el producto del carro. Vuelve a intentarlo" [CRT-021].

**Resultado esperado**

El toast CRT-021 persiste hasta que el usuario lo cierra con la X y 000000000400254005-UN permanece en no disponibles sin cambios.

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar; además, {CART_ITEM_API_ENDPOINT} está en TBD en el Excel de data. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) y cargar {CART_ITEM_API_ENDPOINT} en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C39-M-009 - Verificar que un error al agregar el sustituto muestra el toast CRT-025 [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock
- DevTools abierto con bloqueo de la request {ADD_TO_CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {ADD_TO_CART_API_ENDPOINT} = {ADD_TO_CART_API_ENDPOINT}
- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones
- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem 000000000400254005-UN.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario toca "Agregar" en el primer producto similar del modal.
6. El usuario toca "Reemplazar producto".
7. El sistema muestra el toast de error "¡Lo sentimos! No pudimos reemplazar tu producto, vuelve a intentarlo. (CRT-025)".

**Resultado esperado**

Se muestra el toast CRT-025 y 000000000400254005-UN permanece en la sección de no disponibles sin cambios.

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar; además, {ADD_TO_CART_API_ENDPOINT} está en TBD en el Excel de data. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) y cargar {ADD_TO_CART_API_ENDPOINT} en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

### TC-B2C39-M-010 - Verificar que un invitado ve la sección de no disponibles con Reemplazar y Eliminar [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-14 |
| Form factor | mobile |
| Viewport | 390x844 |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = 000000000400254005-UN
- {SKU_VALID_001} = 000000000000675191-UN
- {TIENDA_SIN_STOCK} = Unimarc Los leones

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario revisa la sección de no disponibles.

**Resultado esperado**

Se muestra la sección de no disponibles con 000000000400254005-UN, badge "Pronto disponible", CTA "Reemplazar" y link "Eliminar".

**Resultado obtenido**

No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).

**Observación**

Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con "Agregar" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.

**Evidencia**

![Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock ("Agregar")](<B2C-39 Evidencias/B2C-39-expl-sku-no-disponible-con-stock.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "Storefront DEV https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ · Desktop: chromium · Mobile: webkit",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-39",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-39 Test Cases.xlsx",
  "title": "B2C-39 - Carro: productos no disponibles (Reemplazar / Eliminar) - Evidencias QA",
  "updated_at": "2026-10-14"
 },
 "history": {
  "2026-10-14": [
   "TC-B2C39-D-001",
   "TC-B2C39-D-002",
   "TC-B2C39-D-003",
   "TC-B2C39-D-004",
   "TC-B2C39-D-005",
   "TC-B2C39-D-006",
   "TC-B2C39-D-007",
   "TC-B2C39-D-008",
   "TC-B2C39-D-009",
   "TC-B2C39-M-001",
   "TC-B2C39-M-002",
   "TC-B2C39-M-003",
   "TC-B2C39-M-004",
   "TC-B2C39-M-005",
   "TC-B2C39-M-006",
   "TC-B2C39-M-007",
   "TC-B2C39-M-008",
   "TC-B2C39-M-009",
   "TC-B2C39-M-010"
  ]
 },
 "results": [
  {
   "executed_at": "2026-10-14",
   "expected": "Se abre el modal de productos similares de 000000000400254005-UN (B2C-40).",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-001",
   "name": "Verificar que Reemplazar de un ítem no disponible abre el modal de productos similares [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Reemplazar\" en el ítem 000000000400254005-UN.\n4. El sistema abre el modal de productos similares (B2C-40).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "El ítem muestra el CTA \"Reemplazar\" y el link de texto \"Eliminar\"; no se muestra un ícono ✕.",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-002",
   "name": "Verificar que el ítem no disponible muestra el CTA Reemplazar y el link de texto Eliminar [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario revisa el ítem 000000000400254005-UN en la sección de no disponibles.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "El similar se agrega a la sección de disponibles con la cantidad seleccionada, 000000000400254005-UN sale de no disponibles, el resumen de precios se recalcula y se muestra el toast \"¡Tu carro ha sido actualizado!\".",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-003",
   "name": "Verificar que reemplazar por un similar lo agrega a disponibles y quita el no disponible [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN x 1\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Reemplazar\" en el ítem 000000000400254005-UN.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario hace clic en \"Agregar\" en el primer producto similar del modal.\n6. El usuario hace clic en \"Reemplazar producto\".\n7. El sistema muestra un estado de carga (loading).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "El similar se agrega a disponibles con cantidad 1 y 000000000400254005-UN permanece en no disponibles con cantidad 2 (3 − 1).",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-004",
   "name": "Verificar que un reemplazo parcial deja en no disponibles la cantidad restante [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN x 3\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Reemplazar\" en el ítem 000000000400254005-UN.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario hace clic en \"Agregar\" en el primer producto similar del modal y deja la cantidad en 1.\n6. El usuario hace clic en \"Reemplazar producto\".\n7. El sistema muestra un estado de carga (loading).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "La sección de no disponibles se muestra expandida con badge \"Pronto disponible\", CTA \"Reemplazar\" y link \"Eliminar\"; no hay ítems disponibles y \"Continuar con la entrega\" está deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-005",
   "name": "Verificar que un carro solo con no disponibles muestra la sección expandida y el CTA deshabilitado [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene solo 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario revisa la sección de no disponibles y el botón \"Continuar con la entrega\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "000000000400254005-UN se elimina sin solicitar confirmación y la sección de no disponibles sigue visible con 000000000000966668-KG.",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-006",
   "name": "Verificar que eliminar un no disponible sin confirmar mantiene la sección si quedan otros [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar; además, {SKU_NO_DISPONIBLE_2} (000000000000966668-KG) tampoco sirve ya: también tiene stock en esa tienda (\"Agregar\"; el 2026-10-12 estaba \"Pronto disponible\"). La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} y {SKU_NO_DISPONIBLE_2} por SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no los tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene 000000000000675191-UN, 000000000400254005-UN y 000000000000966668-KG\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN y 000000000000966668-KG no tienen stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    },
    {
     "caption": "Exploración 2026-10-14 — 000000000000966668-KG con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-2-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el link \"Eliminar\" del ítem 000000000400254005-UN.\n4. El sistema muestra un loading en el shelf del producto.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE_2} = 000000000000966668-KG\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "000000000400254005-UN se elimina sin confirmación y la sección de no disponibles desaparece; 000000000000675191-UN se mantiene.",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-007",
   "name": "Verificar que eliminar el último no disponible hace desaparecer la sección [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el link \"Eliminar\" del ítem 000000000400254005-UN.\n4. El sistema muestra un loading en el shelf del producto.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "El toast CRT-021 persiste hasta que el usuario lo cierra con la X y 000000000400254005-UN permanece en no disponibles sin cambios.",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-008",
   "name": "Verificar que un error al eliminar un no disponible muestra el toast CRT-021 [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar; además, {CART_ITEM_API_ENDPOINT} está en TBD en el Excel de data. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) y cargar {CART_ITEM_API_ENDPOINT} en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el link \"Eliminar\" del ítem 000000000400254005-UN.\n4. El sistema muestra el toast de error \"No pudimos eliminar el producto del carro. Vuelve a intentarlo\" [CRT-021].",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_ITEM_API_ENDPOINT} = {CART_ITEM_API_ENDPOINT}\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "Se muestra el toast CRT-025 y 000000000400254005-UN permanece en la sección de no disponibles sin cambios.",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-009",
   "name": "Verificar que un error al agregar el sustituto muestra el toast CRT-025 [Desktop] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar; además, {ADD_TO_CART_API_ENDPOINT} está en TBD en el Excel de data. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) y cargar {ADD_TO_CART_API_ENDPOINT} en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock\n- DevTools abierto con bloqueo de la request {ADD_TO_CART_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Reemplazar\" en el ítem 000000000400254005-UN.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario hace clic en \"Agregar\" en el primer producto similar del modal.\n6. El usuario hace clic en \"Reemplazar producto\".\n7. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos reemplazar tu producto, vuelve a intentarlo. (CRT-025)\".",
   "test_data": "- {ADD_TO_CART_API_ENDPOINT} = {ADD_TO_CART_API_ENDPOINT}\n- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "Se abre el modal de productos similares de 000000000400254005-UN (B2C-40).",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-001",
   "name": "Verificar que Reemplazar de un ítem no disponible abre el modal de productos similares [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem 000000000400254005-UN.\n4. El sistema abre el modal de productos similares (B2C-40).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "El ítem muestra el CTA \"Reemplazar\" y el link de texto \"Eliminar\"; no se muestra un ícono ✕.",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-002",
   "name": "Verificar que el ítem no disponible muestra el CTA Reemplazar y el link de texto Eliminar [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario revisa el ítem 000000000400254005-UN en la sección de no disponibles.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "El similar se agrega a la sección de disponibles con la cantidad seleccionada, 000000000400254005-UN sale de no disponibles, el resumen de precios se recalcula y se muestra el toast \"¡Tu carro ha sido actualizado!\".",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-003",
   "name": "Verificar que reemplazar por un similar lo agrega a disponibles y quita el no disponible [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN x 1\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem 000000000400254005-UN.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario toca \"Agregar\" en el primer producto similar del modal.\n6. El usuario toca \"Reemplazar producto\".\n7. El sistema muestra un estado de carga (loading).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "El similar se agrega a disponibles con cantidad 1 y 000000000400254005-UN permanece en no disponibles con cantidad 2 (3 − 1).",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-004",
   "name": "Verificar que un reemplazo parcial deja en no disponibles la cantidad restante [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN x 3\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem 000000000400254005-UN.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario toca \"Agregar\" en el primer producto similar del modal y deja la cantidad en 1.\n6. El usuario toca \"Reemplazar producto\".\n7. El sistema muestra un estado de carga (loading).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "La sección de no disponibles se muestra expandida con badge \"Pronto disponible\", CTA \"Reemplazar\" y link \"Eliminar\"; no hay ítems disponibles y \"Continuar con la entrega\" está deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-005",
   "name": "Verificar que un carro solo con no disponibles muestra la sección expandida y el CTA deshabilitado [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene solo 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario revisa la sección de no disponibles y el botón \"Continuar con la entrega\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "000000000400254005-UN se elimina sin solicitar confirmación y la sección de no disponibles sigue visible con 000000000000966668-KG.",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-006",
   "name": "Verificar que eliminar un no disponible sin confirmar mantiene la sección si quedan otros [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar; además, {SKU_NO_DISPONIBLE_2} (000000000000966668-KG) tampoco sirve ya: también tiene stock en esa tienda (\"Agregar\"; el 2026-10-12 estaba \"Pronto disponible\"). La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} y {SKU_NO_DISPONIBLE_2} por SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no los tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene 000000000000675191-UN, 000000000400254005-UN y 000000000000966668-KG\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN y 000000000000966668-KG no tienen stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    },
    {
     "caption": "Exploración 2026-10-14 — 000000000000966668-KG con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-2-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra un loading en el shelf del producto.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE_2} = 000000000000966668-KG\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "000000000400254005-UN se elimina sin confirmación y la sección de no disponibles desaparece; 000000000000675191-UN se mantiene.",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-007",
   "name": "Verificar que eliminar el último no disponible hace desaparecer la sección [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra un loading en el shelf del producto.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "El toast CRT-021 persiste hasta que el usuario lo cierra con la X y 000000000400254005-UN permanece en no disponibles sin cambios.",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-008",
   "name": "Verificar que un error al eliminar un no disponible muestra el toast CRT-021 [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar; además, {CART_ITEM_API_ENDPOINT} está en TBD en el Excel de data. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) y cargar {CART_ITEM_API_ENDPOINT} en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra el toast de error \"No pudimos eliminar el producto del carro. Vuelve a intentarlo\" [CRT-021].",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_ITEM_API_ENDPOINT} = {CART_ITEM_API_ENDPOINT}\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "Se muestra el toast CRT-025 y 000000000400254005-UN permanece en la sección de no disponibles sin cambios.",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-009",
   "name": "Verificar que un error al agregar el sustituto muestra el toast CRT-025 [Mobile] [Logueado]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar; además, {ADD_TO_CART_API_ENDPOINT} está en TBD en el Excel de data. La cuenta {USER_AUTH_001} ya es un alias con OTP accesible; no se inició sesión porque el SKU impide el caso. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) y cargar {ADD_TO_CART_API_ENDPOINT} en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock\n- DevTools abierto con bloqueo de la request {ADD_TO_CART_API_ENDPOINT} (Network request blocking)",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem 000000000400254005-UN.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario toca \"Agregar\" en el primer producto similar del modal.\n6. El usuario toca \"Reemplazar producto\".\n7. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos reemplazar tu producto, vuelve a intentarlo. (CRT-025)\".",
   "test_data": "- {ADD_TO_CART_API_ENDPOINT} = {ADD_TO_CART_API_ENDPOINT}\n- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones\n- {USER_AUTH_001} = cuenta de comprador vhchirinos+comprador (alias del Gmail conectado; login por correo + OTP)",
   "viewport": "390x844"
  },
  {
   "executed_at": "2026-10-14",
   "expected": "Se muestra la sección de no disponibles con 000000000400254005-UN, badge \"Pronto disponible\", CTA \"Reemplazar\" y link \"Eliminar\".",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-010",
   "name": "Verificar que un invitado ve la sección de no disponibles con Reemplazar y Eliminar [Mobile] [Guest]",
   "observation": "Causa: {SKU_NO_DISPONIBLE} (000000000400254005-UN) tiene stock en {TIENDA_SIN_STOCK} (Unimarc Los Leones): con esa tienda activa como Retiro en tienda, el buscador lo muestra con \"Agregar\" (re-verificado 2026-10-14), así que el carro no tiene ítems no disponibles que validar. Acción: cambiar {SKU_NO_DISPONIBLE} por un SKU sin stock en {TIENDA_SIN_STOCK} (o declarar una tienda donde no lo tenga) en el Excel de data.",
   "observed": "No ejecutado: bloqueado en la exploración (Chromium, Desktop 1440x900; el stock es por tienda, no por viewport).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Exploración 2026-10-14 — 000000000400254005-UN con Retiro en tienda Unimarc Los Leones: con stock (\"Agregar\")",
     "file": "B2C-39-expl-sku-no-disponible-con-stock.png"
    }
   ],
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario revisa la sección de no disponibles.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = 000000000400254005-UN\n- {SKU_VALID_001} = 000000000000675191-UN\n- {TIENDA_SIN_STOCK} = Unimarc Los leones",
   "viewport": "390x844"
  }
 ]
}
-->
