# B2C-39 APP

| Campo | Valor |
|---|---|
| Suite | B2C-39 |
| Última actualización | 2026-10-27 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-39 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 10 |
| **Total** | **10** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-27 | 10 | TC-B2C39-APP-001, TC-B2C39-APP-002, TC-B2C39-APP-003, TC-B2C39-APP-004, TC-B2C39-APP-005, TC-B2C39-APP-006, TC-B2C39-APP-007, TC-B2C39-APP-008, TC-B2C39-APP-009, TC-B2C39-APP-010 |

## Detalle por caso de prueba

### TC-B2C39-APP-001 - Verificar que Reemplazar de un ítem no disponible abre el modal de productos similares

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
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000400254005-UN = TBD
- Unimarc Los leones = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem 000000000400254005-UN.
4. El sistema abre el modal de productos similares (B2C-40).

**Resultado esperado**

Se abre el modal de productos similares de 000000000400254005-UN (B2C-40).

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-39 Evidencias/TC-B2C39-APP-001-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C39-APP-002 - Verificar que el ítem no disponible muestra el CTA Reemplazar y el link de texto Eliminar

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
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000400254005-UN = TBD
- Unimarc Los leones = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa el ítem 000000000400254005-UN en la sección de no disponibles.

**Resultado esperado**

El ítem muestra el CTA "Reemplazar" y el link de texto "Eliminar"; no se muestra un ícono ✕.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-39 Evidencias/TC-B2C39-APP-002-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C39-APP-003 - Verificar que reemplazar por un similar lo agrega a disponibles y quita el no disponible

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
- El carro contiene 000000000000675191-UN y 000000000400254005-UN x 1
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000400254005-UN = TBD
- Unimarc Los leones = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem 000000000400254005-UN.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario toca "Agregar" en el primer producto similar del modal.
6. El usuario toca "Reemplazar producto".
7. El sistema muestra un estado de carga (loading).

**Resultado esperado**

El similar se agrega a la sección de disponibles con la cantidad seleccionada, 000000000400254005-UN sale de no disponibles, el resumen de precios se recalcula y se muestra el toast "¡Tu carro ha sido actualizado!".

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-39 Evidencias/TC-B2C39-APP-003-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C39-APP-004 - Verificar que un reemplazo parcial deja en no disponibles la cantidad restante

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
- El carro contiene 000000000000675191-UN y 000000000400254005-UN x 3
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000400254005-UN = TBD
- Unimarc Los leones = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem 000000000400254005-UN.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario toca "Agregar" en el primer producto similar del modal y deja la cantidad en 1.
6. El usuario toca "Reemplazar producto".
7. El sistema muestra un estado de carga (loading).

**Resultado esperado**

El similar se agrega a disponibles con cantidad 1 y 000000000400254005-UN permanece en no disponibles con cantidad 2 (3 − 1).

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-39 Evidencias/TC-B2C39-APP-004-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C39-APP-005 - Verificar que un carro solo con no disponibles muestra la sección expandida y el CTA deshabilitado

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
- El carro contiene solo 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000400254005-UN = TBD
- Unimarc Los leones = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa la sección de no disponibles y el botón "Continuar con la entrega".

**Resultado esperado**

La sección de no disponibles se muestra expandida con badge "Pronto disponible", CTA "Reemplazar" y link "Eliminar"; no hay ítems disponibles y "Continuar con la entrega" está deshabilitado.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro solo con un ítem no disponible en la tienda activa (Unimarc Los Leones); la app no deja agregar al carro un producto sin stock (figura 'Pronto disponible' con 'Ver similares'), así que ese carro no se puede armar sin manipular el stock o la tienda del ambiente. Acción: declarar un procedimiento o un SKU que deje de tener stock en la tienda activa del caso.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-39 Evidencias/TC-B2C39-APP-005-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C39-APP-006 - Verificar que eliminar un no disponible sin confirmar mantiene la sección si quedan otros

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
- El carro contiene 000000000000675191-UN, 000000000400254005-UN y 000000000000966668-KG
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN y 000000000000966668-KG no tienen stock

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000400254005-UN = TBD
- Unimarc Los leones = TBD
- 000000000000966668-KG = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

000000000400254005-UN se elimina sin solicitar confirmación y la sección de no disponibles sigue visible con 000000000000966668-KG.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-39 Evidencias/TC-B2C39-APP-006-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C39-APP-007 - Verificar que eliminar el último no disponible hace desaparecer la sección

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
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000400254005-UN = TBD
- Unimarc Los leones = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

000000000400254005-UN se elimina sin confirmación y la sección de no disponibles desaparece; 000000000000675191-UN se mantiene.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-39 Evidencias/TC-B2C39-APP-007-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C39-APP-008 - Verificar que un error al eliminar un no disponible muestra el toast CRT-021

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
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/checkout/shopper-baskets/v2/organizations/f_ecom_bmkg_dev/baskets/323d34d58f00de997f89453a87/items/*

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/checkout/shopper-baskets/v2/organizations/f_ecom_bmkg_dev/baskets/323d34d58f00de997f89453a87/items/* = TBD
- 000000000000675191-UN = 000000000000675191-UN
- 000000000400254005-UN = TBD
- Unimarc Los leones = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra el toast de error "No pudimos eliminar el producto del carro. Vuelve a intentarlo" [CRT-021].

**Resultado esperado**

El toast CRT-021 persiste hasta que el usuario lo cierra con la X y 000000000400254005-UN permanece en no disponibles sin cambios.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente. Además {HERRAMIENTA_PROXY_APP} no tiene valor en la data.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-39 Evidencias/TC-B2C39-APP-008-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C39-APP-009 - Verificar que un error al agregar el sustituto muestra el toast CRT-025

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
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {ADD_TO_CART_API_ENDPOINT}

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- {ADD_TO_CART_API_ENDPOINT} = TBD
- 000000000000675191-UN = 000000000000675191-UN
- 000000000400254005-UN = TBD
- Unimarc Los leones = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem 000000000400254005-UN.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario toca "Agregar" en el primer producto similar del modal.
6. El usuario toca "Reemplazar producto".
7. El sistema muestra el toast de error "¡Lo sentimos! No pudimos reemplazar tu producto, vuelve a intentarlo. (CRT-025)".

**Resultado esperado**

Se muestra el toast CRT-025 y 000000000400254005-UN permanece en la sección de no disponibles sin cambios.

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente. Además {HERRAMIENTA_PROXY_APP} y {ADD_TO_CART_API_ENDPOINT} no tienen valor en la data.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-39 Evidencias/TC-B2C39-APP-009-android-p02-sku-pronto-disponible-con-sesion.png>)

---

### TC-B2C39-APP-010 - Verificar que un invitado ve la sección de no disponibles con Reemplazar y Eliminar

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene 000000000000675191-UN y 000000000400254005-UN
- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000675191-UN = 000000000000675191-UN
- 000000000400254005-UN = TBD
- Unimarc Los leones = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa la sección de no disponibles.

**Resultado esperado**

Se muestra la sección de no disponibles con 000000000400254005-UN, badge "Pronto disponible", CTA "Reemplazar" y link "Eliminar".

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.

**Evidencia**

![Android · Paso 2 — sku pronto disponible con sesion](<B2C-39 Evidencias/TC-B2C39-APP-010-android-p02-sku-pronto-disponible-con-sesion.png>)

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Pixel 6 · Android 14 (emulador)"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-39",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-39 APP Test Cases.xlsx",
  "title": "B2C-39 APP",
  "updated_at": "2026-10-27"
 },
 "history": {
  "2026-10-27": [
   "TC-B2C39-APP-001",
   "TC-B2C39-APP-002",
   "TC-B2C39-APP-003",
   "TC-B2C39-APP-004",
   "TC-B2C39-APP-005",
   "TC-B2C39-APP-006",
   "TC-B2C39-APP-007",
   "TC-B2C39-APP-008",
   "TC-B2C39-APP-009",
   "TC-B2C39-APP-010"
  ]
 },
 "results": [
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se abre el modal de productos similares de 000000000400254005-UN (B2C-40).",
   "form_factor": "app",
   "id": "TC-B2C39-APP-001",
   "name": "Verificar que Reemplazar de un ítem no disponible abre el modal de productos similares",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C39-APP-001-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem 000000000400254005-UN.\n4. El sistema abre el modal de productos similares (B2C-40).",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000400254005-UN = TBD\n- Unimarc Los leones = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El ítem muestra el CTA \"Reemplazar\" y el link de texto \"Eliminar\"; no se muestra un ícono ✕.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-002",
   "name": "Verificar que el ítem no disponible muestra el CTA Reemplazar y el link de texto Eliminar",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C39-APP-002-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa el ítem 000000000400254005-UN en la sección de no disponibles.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000400254005-UN = TBD\n- Unimarc Los leones = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El similar se agrega a la sección de disponibles con la cantidad seleccionada, 000000000400254005-UN sale de no disponibles, el resumen de precios se recalcula y se muestra el toast \"¡Tu carro ha sido actualizado!\".",
   "form_factor": "app",
   "id": "TC-B2C39-APP-003",
   "name": "Verificar que reemplazar por un similar lo agrega a disponibles y quita el no disponible",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN x 1\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C39-APP-003-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem 000000000400254005-UN.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario toca \"Agregar\" en el primer producto similar del modal.\n6. El usuario toca \"Reemplazar producto\".\n7. El sistema muestra un estado de carga (loading).",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000400254005-UN = TBD\n- Unimarc Los leones = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El similar se agrega a disponibles con cantidad 1 y 000000000400254005-UN permanece en no disponibles con cantidad 2 (3 − 1).",
   "form_factor": "app",
   "id": "TC-B2C39-APP-004",
   "name": "Verificar que un reemplazo parcial deja en no disponibles la cantidad restante",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN x 3\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C39-APP-004-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem 000000000400254005-UN.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario toca \"Agregar\" en el primer producto similar del modal y deja la cantidad en 1.\n6. El usuario toca \"Reemplazar producto\".\n7. El sistema muestra un estado de carga (loading).",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000400254005-UN = TBD\n- Unimarc Los leones = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "La sección de no disponibles se muestra expandida con badge \"Pronto disponible\", CTA \"Reemplazar\" y link \"Eliminar\"; no hay ítems disponibles y \"Continuar con la entrega\" está deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-005",
   "name": "Verificar que un carro solo con no disponibles muestra la sección expandida y el CTA deshabilitado",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: el caso exige un carro solo con un ítem no disponible en la tienda activa (Unimarc Los Leones); la app no deja agregar al carro un producto sin stock (figura 'Pronto disponible' con 'Ver similares'), así que ese carro no se puede armar sin manipular el stock o la tienda del ambiente. Acción: declarar un procedimiento o un SKU que deje de tener stock en la tienda activa del caso.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene solo 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C39-APP-005-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa la sección de no disponibles y el botón \"Continuar con la entrega\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000400254005-UN = TBD\n- Unimarc Los leones = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "000000000400254005-UN se elimina sin solicitar confirmación y la sección de no disponibles sigue visible con 000000000000966668-KG.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-006",
   "name": "Verificar que eliminar un no disponible sin confirmar mantiene la sección si quedan otros",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN, 000000000400254005-UN y 000000000000966668-KG\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN y 000000000000966668-KG no tienen stock",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C39-APP-006-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra un loading en el shelf del producto.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000400254005-UN = TBD\n- Unimarc Los leones = TBD\n- 000000000000966668-KG = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "000000000400254005-UN se elimina sin confirmación y la sección de no disponibles desaparece; 000000000000675191-UN se mantiene.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-007",
   "name": "Verificar que eliminar el último no disponible hace desaparecer la sección",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C39-APP-007-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra un loading en el shelf del producto.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000400254005-UN = TBD\n- Unimarc Los leones = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El toast CRT-021 persiste hasta que el usuario lo cierra con la X y 000000000400254005-UN permanece en no disponibles sin cambios.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-008",
   "name": "Verificar que un error al eliminar un no disponible muestra el toast CRT-021",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente. Además {HERRAMIENTA_PROXY_APP} no tiene valor en la data.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/checkout/shopper-baskets/v2/organizations/f_ecom_bmkg_dev/baskets/323d34d58f00de997f89453a87/items/*",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C39-APP-008-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem 000000000400254005-UN y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra el toast de error \"No pudimos eliminar el producto del carro. Vuelve a intentarlo\" [CRT-021].",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- *://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/mobify/proxy/api/checkout/shopper-baskets/v2/organizations/f_ecom_bmkg_dev/baskets/323d34d58f00de997f89453a87/items/* = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000400254005-UN = TBD\n- Unimarc Los leones = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra el toast CRT-025 y 000000000400254005-UN permanece en la sección de no disponibles sin cambios.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-009",
   "name": "Verificar que un error al agregar el sustituto muestra el toast CRT-025",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente. Además {HERRAMIENTA_PROXY_APP} y {ADD_TO_CART_API_ENDPOINT} no tienen valor en la data.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {ADD_TO_CART_API_ENDPOINT}",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C39-APP-009-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem 000000000400254005-UN.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario toca \"Agregar\" en el primer producto similar del modal.\n6. El usuario toca \"Reemplazar producto\".\n7. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos reemplazar tu producto, vuelve a intentarlo. (CRT-025)\".",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- {ADD_TO_CART_API_ENDPOINT} = TBD\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000400254005-UN = TBD\n- Unimarc Los leones = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "Se muestra la sección de no disponibles con 000000000400254005-UN, badge \"Pronto disponible\", CTA \"Reemplazar\" y link \"Eliminar\".",
   "form_factor": "app",
   "id": "TC-B2C39-APP-010",
   "name": "Verificar que un invitado ve la sección de no disponibles con Reemplazar y Eliminar",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): Causa: con la cuenta de prueba (tienda activa Las Condes) {SKU_VALID_001} (000000000000675191-UN, 'Albóndigas Super Pollo espaciales congeladas 300 g') figura 'Pronto disponible' con el botón 'Ver similares' en lugar de 'Agregar' (sin stock en esa tienda), por lo que no se puede armar el carro de la precondición. Además el caso exige un ítem no disponible en la tienda activa (Unimarc Los Leones) y la app no deja agregar al carro un producto sin stock: ese estado no se puede armar sin manipular el stock o la tienda del ambiente.  Acción: reponer el stock de {SKU_VALID_001} en la tienda de la cuenta o declarar un SKU con stock.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene 000000000000675191-UN y 000000000400254005-UN\n- La tienda activa es Unimarc Los leones, donde 000000000400254005-UN no tiene stock",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — sku pronto disponible con sesion",
     "file": "TC-B2C39-APP-010-android-p02-sku-pronto-disponible-con-sesion.png"
    }
   ],
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa la sección de no disponibles.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000675191-UN = 000000000000675191-UN\n- 000000000400254005-UN = TBD\n- Unimarc Los leones = TBD"
  }
 ]
}
-->
