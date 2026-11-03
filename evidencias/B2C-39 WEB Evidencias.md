# B2C-39 (web) - Carro con ítems no disponibles - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-39 |
| Última actualización | 2026-11-02 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-39 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 20 |
| **Total** | **20** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-11-02 | 20 | TC-B2C39-D-001, TC-B2C39-D-002, TC-B2C39-D-003, TC-B2C39-D-004, TC-B2C39-D-005, TC-B2C39-D-006, TC-B2C39-D-007, TC-B2C39-D-008, TC-B2C39-D-009, TC-B2C39-D-010, TC-B2C39-M-001, TC-B2C39-M-002, TC-B2C39-M-003, TC-B2C39-M-004, TC-B2C39-M-005, TC-B2C39-M-006, TC-B2C39-M-007, TC-B2C39-M-008, TC-B2C39-M-009, TC-B2C39-M-010 |

## Detalle por caso de prueba

### TC-B2C39-D-001 - Verificar que Reemplazar de un ítem no disponible abre el modal de productos similares [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema abre el modal de productos similares (B2C-40).

**Resultado esperado**

Se abre el modal de productos similares de {SKU_NO_DISPONIBLE} (B2C-40).

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

**Evidencia**

![Paso 2 — carro con el item no disponible](<B2C-39 WEB Evidencias/TC-B2C39-D-001-p02-carro-con-el-item-no-disponible.png>)

---

### TC-B2C39-D-002 - Verificar que el ítem no disponible muestra el CTA Reemplazar y el link de texto Eliminar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario revisa el ítem {SKU_NO_DISPONIBLE} en la sección de no disponibles.

**Resultado esperado**

El ítem muestra el CTA "Reemplazar" y el link de texto "Eliminar"; no se muestra un ícono ✕.

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

---

### TC-B2C39-D-003 - Verificar que reemplazar por un similar lo agrega a disponibles y quita el no disponible [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE} x 1
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario hace clic en "Agregar" en el primer producto similar del modal.
6. El usuario hace clic en "Reemplazar producto".
7. El sistema muestra un estado de carga (loading).

**Resultado esperado**

El similar se agrega a la sección de disponibles con la cantidad seleccionada, {SKU_NO_DISPONIBLE} sale de no disponibles, el resumen de precios se recalcula y se muestra el toast "¡Tu carro ha sido actualizado!".

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

---

### TC-B2C39-D-004 - Verificar que un reemplazo parcial deja en no disponibles la cantidad restante [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE} x 3
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario hace clic en "Agregar" en el primer producto similar del modal y deja la cantidad en 1.
6. El usuario hace clic en "Reemplazar producto".
7. El sistema muestra un estado de carga (loading).

**Resultado esperado**

El similar se agrega a disponibles con cantidad 1 y {SKU_NO_DISPONIBLE} permanece en no disponibles con cantidad 2 (3 − 1).

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

---

### TC-B2C39-D-005 - Verificar que un carro solo con no disponibles muestra la sección expandida y el CTA deshabilitado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene solo {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario revisa la sección de no disponibles y el botón "Continuar con la entrega".

**Resultado esperado**

La sección de no disponibles se muestra expandida con badge "Pronto disponible", CTA "Reemplazar" y link "Eliminar"; no hay ítems disponibles y "Continuar con la entrega" está deshabilitado.

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

---

### TC-B2C39-D-006 - Verificar que eliminar un no disponible sin confirmar mantiene la sección si quedan otros [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001}, {SKU_NO_DISPONIBLE} y {SKU_NO_DISPONIBLE_2}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} y {SKU_NO_DISPONIBLE_2} no tienen stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {SKU_NO_DISPONIBLE_2} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el link "Eliminar" del ítem {SKU_NO_DISPONIBLE}.
4. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

{SKU_NO_DISPONIBLE} se elimina sin solicitar confirmación y la sección de no disponibles sigue visible con {SKU_NO_DISPONIBLE_2}.

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data). Además {SKU_NO_DISPONIBLE_2} no existe en el ambiente (su ficha redirige al Home).

---

### TC-B2C39-D-007 - Verificar que eliminar el último no disponible hace desaparecer la sección [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el link "Eliminar" del ítem {SKU_NO_DISPONIBLE}.
4. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

{SKU_NO_DISPONIBLE} se elimina sin confirmación y la sección de no disponibles desaparece; {SKU_VALID_001} se mantiene.

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

---

### TC-B2C39-D-008 - Verificar que un error al eliminar un no disponible muestra el toast CRT-021 [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {CART_ITEM_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el link "Eliminar" del ítem {SKU_NO_DISPONIBLE}.
4. El sistema muestra el toast de error "No pudimos eliminar el producto del carro. Vuelve a intentarlo" [CRT-021].

**Resultado esperado**

El toast CRT-021 persiste hasta que el usuario lo cierra con la X y {SKU_NO_DISPONIBLE} permanece en no disponibles sin cambios.

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

---

### TC-B2C39-D-009 - Verificar que un error al agregar el sustituto muestra el toast CRT-025 [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock
- DevTools abierto con bloqueo de la request {ADD_TO_CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {ADD_TO_CART_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario hace clic en "Agregar" en el primer producto similar del modal.
6. El usuario hace clic en "Reemplazar producto".
7. El sistema muestra el toast de error "¡Lo sentimos! No pudimos reemplazar tu producto, vuelve a intentarlo. (CRT-025)".

**Resultado esperado**

Se muestra el toast CRT-025 y {SKU_NO_DISPONIBLE} permanece en la sección de no disponibles sin cambios.

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

---

### TC-B2C39-D-010 - Verificar que un invitado ve la sección de no disponibles con Reemplazar y Eliminar [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario revisa la sección de no disponibles.

**Resultado esperado**

Se muestra la sección de no disponibles con {SKU_NO_DISPONIBLE}, badge "Pronto disponible", CTA "Reemplazar" y link "Eliminar".

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

---

### TC-B2C39-M-001 - Verificar que Reemplazar de un ítem no disponible abre el modal de productos similares [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema abre el modal de productos similares (B2C-40).

**Resultado esperado**

Se abre el modal de productos similares de {SKU_NO_DISPONIBLE} (B2C-40).

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

---

### TC-B2C39-M-002 - Verificar que el ítem no disponible muestra el CTA Reemplazar y el link de texto Eliminar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario revisa el ítem {SKU_NO_DISPONIBLE} en la sección de no disponibles.

**Resultado esperado**

El ítem muestra el CTA "Reemplazar" y el link de texto "Eliminar"; no se muestra un ícono ✕.

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

---

### TC-B2C39-M-003 - Verificar que reemplazar por un similar lo agrega a disponibles y quita el no disponible [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE} x 1
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario toca "Agregar" en el primer producto similar del modal.
6. El usuario toca "Reemplazar producto".
7. El sistema muestra un estado de carga (loading).

**Resultado esperado**

El similar se agrega a la sección de disponibles con la cantidad seleccionada, {SKU_NO_DISPONIBLE} sale de no disponibles, el resumen de precios se recalcula y se muestra el toast "¡Tu carro ha sido actualizado!".

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

---

### TC-B2C39-M-004 - Verificar que un reemplazo parcial deja en no disponibles la cantidad restante [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE} x 3
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario toca "Agregar" en el primer producto similar del modal y deja la cantidad en 1.
6. El usuario toca "Reemplazar producto".
7. El sistema muestra un estado de carga (loading).

**Resultado esperado**

El similar se agrega a disponibles con cantidad 1 y {SKU_NO_DISPONIBLE} permanece en no disponibles con cantidad 2 (3 − 1).

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

---

### TC-B2C39-M-005 - Verificar que un carro solo con no disponibles muestra la sección expandida y el CTA deshabilitado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene solo {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario revisa la sección de no disponibles y el botón "Continuar con la entrega".

**Resultado esperado**

La sección de no disponibles se muestra expandida con badge "Pronto disponible", CTA "Reemplazar" y link "Eliminar"; no hay ítems disponibles y "Continuar con la entrega" está deshabilitado.

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

---

### TC-B2C39-M-006 - Verificar que eliminar un no disponible sin confirmar mantiene la sección si quedan otros [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001}, {SKU_NO_DISPONIBLE} y {SKU_NO_DISPONIBLE_2}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} y {SKU_NO_DISPONIBLE_2} no tienen stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {SKU_NO_DISPONIBLE_2} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem {SKU_NO_DISPONIBLE} y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

{SKU_NO_DISPONIBLE} se elimina sin solicitar confirmación y la sección de no disponibles sigue visible con {SKU_NO_DISPONIBLE_2}.

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data). Además {SKU_NO_DISPONIBLE_2} no existe en el ambiente (su ficha redirige al Home).

---

### TC-B2C39-M-007 - Verificar que eliminar el último no disponible hace desaparecer la sección [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem {SKU_NO_DISPONIBLE} y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

{SKU_NO_DISPONIBLE} se elimina sin confirmación y la sección de no disponibles desaparece; {SKU_VALID_001} se mantiene.

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

---

### TC-B2C39-M-008 - Verificar que un error al eliminar un no disponible muestra el toast CRT-021 [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {CART_ITEM_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem {SKU_NO_DISPONIBLE} y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra el toast de error "No pudimos eliminar el producto del carro. Vuelve a intentarlo" [CRT-021].

**Resultado esperado**

El toast CRT-021 persiste hasta que el usuario lo cierra con la X y {SKU_NO_DISPONIBLE} permanece en no disponibles sin cambios.

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

---

### TC-B2C39-M-009 - Verificar que un error al agregar el sustituto muestra el toast CRT-025 [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock
- DevTools abierto con bloqueo de la request {ADD_TO_CART_API_ENDPOINT} (Network request blocking)

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {ADD_TO_CART_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario toca "Agregar" en el primer producto similar del modal.
6. El usuario toca "Reemplazar producto".
7. El sistema muestra el toast de error "¡Lo sentimos! No pudimos reemplazar tu producto, vuelve a intentarlo. (CRT-025)".

**Resultado esperado**

Se muestra el toast CRT-025 y {SKU_NO_DISPONIBLE} permanece en la sección de no disponibles sin cambios.

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

---

### TC-B2C39-M-010 - Verificar que un invitado ve la sección de no disponibles con Reemplazar y Eliminar [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-11-02 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-39.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario revisa la sección de no disponibles.

**Resultado esperado**

Se muestra la sección de no disponibles con {SKU_NO_DISPONIBLE}, badge "Pronto disponible", CTA "Reemplazar" y link "Eliminar".

**Observación**

Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).

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
  "suite": "B2C-39",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-39 Test Cases.xlsx",
  "title": "B2C-39 (web) - Carro con ítems no disponibles - Evidencias QA",
  "updated_at": "2026-11-02"
 },
 "history": {
  "2026-11-02": [
   "TC-B2C39-D-001",
   "TC-B2C39-D-002",
   "TC-B2C39-D-003",
   "TC-B2C39-D-004",
   "TC-B2C39-D-005",
   "TC-B2C39-D-006",
   "TC-B2C39-D-007",
   "TC-B2C39-D-008",
   "TC-B2C39-D-009",
   "TC-B2C39-D-010",
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
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se abre el modal de productos similares de {SKU_NO_DISPONIBLE} (B2C-40).",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-001",
   "name": "Verificar que Reemplazar de un ítem no disponible abre el modal de productos similares [Desktop] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "screenshots": [
    {
     "caption": "Paso 2 — carro con el item no disponible",
     "file": "TC-B2C39-D-001-p02-carro-con-el-item-no-disponible.png"
    }
   ],
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema abre el modal de productos similares (B2C-40).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El ítem muestra el CTA \"Reemplazar\" y el link de texto \"Eliminar\"; no se muestra un ícono ✕.",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-002",
   "name": "Verificar que el ítem no disponible muestra el CTA Reemplazar y el link de texto Eliminar [Desktop] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario revisa el ítem {SKU_NO_DISPONIBLE} en la sección de no disponibles.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El similar se agrega a la sección de disponibles con la cantidad seleccionada, {SKU_NO_DISPONIBLE} sale de no disponibles, el resumen de precios se recalcula y se muestra el toast \"¡Tu carro ha sido actualizado!\".",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-003",
   "name": "Verificar que reemplazar por un similar lo agrega a disponibles y quita el no disponible [Desktop] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE} x 1\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario hace clic en \"Agregar\" en el primer producto similar del modal.\n6. El usuario hace clic en \"Reemplazar producto\".\n7. El sistema muestra un estado de carga (loading).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El similar se agrega a disponibles con cantidad 1 y {SKU_NO_DISPONIBLE} permanece en no disponibles con cantidad 2 (3 − 1).",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-004",
   "name": "Verificar que un reemplazo parcial deja en no disponibles la cantidad restante [Desktop] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE} x 3\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario hace clic en \"Agregar\" en el primer producto similar del modal y deja la cantidad en 1.\n6. El usuario hace clic en \"Reemplazar producto\".\n7. El sistema muestra un estado de carga (loading).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La sección de no disponibles se muestra expandida con badge \"Pronto disponible\", CTA \"Reemplazar\" y link \"Eliminar\"; no hay ítems disponibles y \"Continuar con la entrega\" está deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-005",
   "name": "Verificar que un carro solo con no disponibles muestra la sección expandida y el CTA deshabilitado [Desktop] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene solo {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario revisa la sección de no disponibles y el botón \"Continuar con la entrega\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "{SKU_NO_DISPONIBLE} se elimina sin solicitar confirmación y la sección de no disponibles sigue visible con {SKU_NO_DISPONIBLE_2}.",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-006",
   "name": "Verificar que eliminar un no disponible sin confirmar mantiene la sección si quedan otros [Desktop] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data). Además {SKU_NO_DISPONIBLE_2} no existe en el ambiente (su ficha redirige al Home).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001}, {SKU_NO_DISPONIBLE} y {SKU_NO_DISPONIBLE_2}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} y {SKU_NO_DISPONIBLE_2} no tienen stock",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el link \"Eliminar\" del ítem {SKU_NO_DISPONIBLE}.\n4. El sistema muestra un loading en el shelf del producto.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {SKU_NO_DISPONIBLE_2} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "{SKU_NO_DISPONIBLE} se elimina sin confirmación y la sección de no disponibles desaparece; {SKU_VALID_001} se mantiene.",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-007",
   "name": "Verificar que eliminar el último no disponible hace desaparecer la sección [Desktop] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el link \"Eliminar\" del ítem {SKU_NO_DISPONIBLE}.\n4. El sistema muestra un loading en el shelf del producto.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El toast CRT-021 persiste hasta que el usuario lo cierra con la X y {SKU_NO_DISPONIBLE} permanece en no disponibles sin cambios.",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-008",
   "name": "Verificar que un error al eliminar un no disponible muestra el toast CRT-021 [Desktop] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el link \"Eliminar\" del ítem {SKU_NO_DISPONIBLE}.\n4. El sistema muestra el toast de error \"No pudimos eliminar el producto del carro. Vuelve a intentarlo\" [CRT-021].",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {CART_ITEM_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se muestra el toast CRT-025 y {SKU_NO_DISPONIBLE} permanece en la sección de no disponibles sin cambios.",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-009",
   "name": "Verificar que un error al agregar el sustituto muestra el toast CRT-025 [Desktop] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock\n- DevTools abierto con bloqueo de la request {ADD_TO_CART_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario hace clic en \"Agregar\" en el primer producto similar del modal.\n6. El usuario hace clic en \"Reemplazar producto\".\n7. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos reemplazar tu producto, vuelve a intentarlo. (CRT-025)\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {ADD_TO_CART_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se muestra la sección de no disponibles con {SKU_NO_DISPONIBLE}, badge \"Pronto disponible\", CTA \"Reemplazar\" y link \"Eliminar\".",
   "form_factor": "desktop",
   "id": "TC-B2C39-D-010",
   "name": "Verificar que un invitado ve la sección de no disponibles con Reemplazar y Eliminar [Desktop] [Guest]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario revisa la sección de no disponibles.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se abre el modal de productos similares de {SKU_NO_DISPONIBLE} (B2C-40).",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-001",
   "name": "Verificar que Reemplazar de un ítem no disponible abre el modal de productos similares [Mobile] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema abre el modal de productos similares (B2C-40).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El ítem muestra el CTA \"Reemplazar\" y el link de texto \"Eliminar\"; no se muestra un ícono ✕.",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-002",
   "name": "Verificar que el ítem no disponible muestra el CTA Reemplazar y el link de texto Eliminar [Mobile] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario revisa el ítem {SKU_NO_DISPONIBLE} en la sección de no disponibles.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El similar se agrega a la sección de disponibles con la cantidad seleccionada, {SKU_NO_DISPONIBLE} sale de no disponibles, el resumen de precios se recalcula y se muestra el toast \"¡Tu carro ha sido actualizado!\".",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-003",
   "name": "Verificar que reemplazar por un similar lo agrega a disponibles y quita el no disponible [Mobile] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE} x 1\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario toca \"Agregar\" en el primer producto similar del modal.\n6. El usuario toca \"Reemplazar producto\".\n7. El sistema muestra un estado de carga (loading).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El similar se agrega a disponibles con cantidad 1 y {SKU_NO_DISPONIBLE} permanece en no disponibles con cantidad 2 (3 − 1).",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-004",
   "name": "Verificar que un reemplazo parcial deja en no disponibles la cantidad restante [Mobile] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE} x 3\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario toca \"Agregar\" en el primer producto similar del modal y deja la cantidad en 1.\n6. El usuario toca \"Reemplazar producto\".\n7. El sistema muestra un estado de carga (loading).",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "La sección de no disponibles se muestra expandida con badge \"Pronto disponible\", CTA \"Reemplazar\" y link \"Eliminar\"; no hay ítems disponibles y \"Continuar con la entrega\" está deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-005",
   "name": "Verificar que un carro solo con no disponibles muestra la sección expandida y el CTA deshabilitado [Mobile] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene solo {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario revisa la sección de no disponibles y el botón \"Continuar con la entrega\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "{SKU_NO_DISPONIBLE} se elimina sin solicitar confirmación y la sección de no disponibles sigue visible con {SKU_NO_DISPONIBLE_2}.",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-006",
   "name": "Verificar que eliminar un no disponible sin confirmar mantiene la sección si quedan otros [Mobile] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data). Además {SKU_NO_DISPONIBLE_2} no existe en el ambiente (su ficha redirige al Home).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001}, {SKU_NO_DISPONIBLE} y {SKU_NO_DISPONIBLE_2}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} y {SKU_NO_DISPONIBLE_2} no tienen stock",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem {SKU_NO_DISPONIBLE} y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra un loading en el shelf del producto.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {SKU_NO_DISPONIBLE_2} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "{SKU_NO_DISPONIBLE} se elimina sin confirmación y la sección de no disponibles desaparece; {SKU_VALID_001} se mantiene.",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-007",
   "name": "Verificar que eliminar el último no disponible hace desaparecer la sección [Mobile] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem {SKU_NO_DISPONIBLE} y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra un loading en el shelf del producto.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "El toast CRT-021 persiste hasta que el usuario lo cierra con la X y {SKU_NO_DISPONIBLE} permanece en no disponibles sin cambios.",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-008",
   "name": "Verificar que un error al eliminar un no disponible muestra el toast CRT-021 [Mobile] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem {SKU_NO_DISPONIBLE} y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra el toast de error \"No pudimos eliminar el producto del carro. Vuelve a intentarlo\" [CRT-021].",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {CART_ITEM_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se muestra el toast CRT-025 y {SKU_NO_DISPONIBLE} permanece en la sección de no disponibles sin cambios.",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-009",
   "name": "Verificar que un error al agregar el sustituto muestra el toast CRT-025 [Mobile] [Logueado]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock\n- DevTools abierto con bloqueo de la request {ADD_TO_CART_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario toca \"Agregar\" en el primer producto similar del modal.\n6. El usuario toca \"Reemplazar producto\".\n7. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos reemplazar tu producto, vuelve a intentarlo. (CRT-025)\".",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {ADD_TO_CART_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-11-02",
   "expected": "Se muestra la sección de no disponibles con {SKU_NO_DISPONIBLE}, badge \"Pronto disponible\", CTA \"Reemplazar\" y link \"Eliminar\".",
   "form_factor": "mobile",
   "id": "TC-B2C39-M-010",
   "name": "Verificar que un invitado ve la sección de no disponibles con Reemplazar y Eliminar [Mobile] [Guest]",
   "observation": "Falta data: el carro con un ítem no disponible no se puede armar. Con {SKU_VALID_001} y {SKU_NO_DISPONIBLE} agregados en otra tienda, al cambiar a {TIENDA_SIN_STOCK} y confirmar «Sí, continuar» el carro queda vacío y no aparece la sección de no disponibles; en {TIENDA_SIN_STOCK} {SKU_NO_DISPONIBLE} solo muestra «Ver similares», sin «Agregar». Acción: proveer un carro (cuenta) que ya tenga el ítem sin stock, o un SKU que quede en no disponibles al cambiar de tienda (quien administra el Excel de data).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "spec": "tests/B2C-39.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario revisa la sección de no disponibles.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD",
   "viewport": "390x844"
  }
 ]
}
-->
