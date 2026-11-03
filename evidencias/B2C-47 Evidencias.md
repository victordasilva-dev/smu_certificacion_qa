# Reposición de productos al carro (restock)

| Campo | Valor |
|---|---|
| Suite | B2C-47 |
| Última actualización | 2026-10-21 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-47 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado | 22 |
| Bloqueado Data | 10 |
| **Total** | **32** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-21 | 32 | TC-B2C47-D-001, TC-B2C47-D-002, TC-B2C47-D-003, TC-B2C47-D-004, TC-B2C47-D-005, TC-B2C47-D-006, TC-B2C47-D-007, TC-B2C47-D-008, TC-B2C47-D-009, TC-B2C47-D-010, TC-B2C47-D-011, TC-B2C47-D-012, TC-B2C47-D-013, TC-B2C47-D-014, TC-B2C47-D-015, TC-B2C47-D-016, TC-B2C47-M-001, TC-B2C47-M-002, TC-B2C47-M-003, TC-B2C47-M-004, TC-B2C47-M-005, TC-B2C47-M-006, TC-B2C47-M-007, TC-B2C47-M-008, TC-B2C47-M-009, TC-B2C47-M-010, TC-B2C47-M-011, TC-B2C47-M-012, TC-B2C47-M-013, TC-B2C47-M-014, TC-B2C47-M-015, TC-B2C47-M-016 |
| 2026-10-20 | 32 | TC-B2C47-D-001, TC-B2C47-D-002, TC-B2C47-D-003, TC-B2C47-D-004, TC-B2C47-D-005, TC-B2C47-D-006, TC-B2C47-D-007, TC-B2C47-D-008, TC-B2C47-D-009, TC-B2C47-D-010, TC-B2C47-D-011, TC-B2C47-D-012, TC-B2C47-D-013, TC-B2C47-D-014, TC-B2C47-D-015, TC-B2C47-D-016, TC-B2C47-M-001, TC-B2C47-M-002, TC-B2C47-M-003, TC-B2C47-M-004, TC-B2C47-M-005, TC-B2C47-M-006, TC-B2C47-M-007, TC-B2C47-M-008, TC-B2C47-M-009, TC-B2C47-M-010, TC-B2C47-M-011, TC-B2C47-M-012, TC-B2C47-M-013, TC-B2C47-M-014, TC-B2C47-M-015, TC-B2C47-M-016 |

## Detalle por caso de prueba

### TC-B2C47-D-001 - Verificar que Entendido cierra el modal, muestra el toast y agrega los productos al carro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en "Entendido".
4. El sistema cierra el modal y actualiza el carrito en tiempo real.

**Resultado esperado**

El modal se cierra, se muestra el toast con ícono ✓ y botón X "¡Tu carro ha sido actualizado!" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-D-002 - Verificar que el toast de carro actualizado desaparece solo a los 4 segundos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en "Entendido".
4. El sistema muestra el toast "¡Tu carro ha sido actualizado!".
5. El usuario espera sin interactuar.

**Resultado esperado**

El toast desaparece automáticamente transcurridos 4 segundos.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-D-003 - Verificar que el toast de carro actualizado se cierra con la X [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en "Entendido".
4. El sistema muestra el toast "¡Tu carro ha sido actualizado!".
5. El usuario hace clic en la X del toast antes de 4 segundos.

**Resultado esperado**

El toast se cierra inmediatamente.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-D-004 - Verificar que un unitario con stock suficiente pasa completo a disponibles sin aviso adicional [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 3
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 5 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en "Entendido".
4. El usuario revisa el carrito.

**Resultado esperado**

{SKU_UNITARIO} x 3 pasa completo a la sección de disponibles, no queda en no disponibles y no se muestra aviso adicional.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-D-005 - Verificar que un unitario con stock parcial deja la cantidad restante en No disponibles [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 3
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en "Entendido".
4. El usuario revisa las secciones de disponibles y no disponibles.

**Resultado esperado**

{SKU_UNITARIO} queda con 2 unidades en disponibles y 1 unidad en la sección No disponibles; no se muestra un mensaje adicional.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-D-006 - Verificar que un pesable repuesto se reincorpora con el multiplicador de medida [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_PESABLE} con 1 kg
- Desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_PESABLE} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 1 kg o más (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario revisa la unidad de medida de {SKU_PESABLE} en el modal.
4. El usuario hace clic en "Entendido".

**Resultado esperado**

El modal muestra la unidad de medida de {SKU_PESABLE} (kg) y el carrito lo reincorpora con la cantidad disponible aplicando el multiplicador de Janis.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-D-007 - Verificar que cerrar el modal con la X también agrega los productos y muestra el toast [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en la X del modal.
4. El sistema cierra el modal y actualiza el carrito.

**Resultado esperado**

Se muestra el toast con ícono ✓ y botón X "¡Tu carro ha sido actualizado!" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-D-008 - Verificar que un invitado con productos repuestos los ve agregados al carro tras Entendido [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en "Entendido".
4. El sistema cierra el modal y actualiza el carrito en tiempo real.

**Resultado esperado**

Se muestra el toast "¡Tu carro ha sido actualizado!" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-D-009 - Verificar que un restock parcial deja 4 disponibles y 1 no disponible con totales recalculados [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 5
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2: el carro muestra 2 unidades disponibles y 3 no disponibles
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 4 (restock parcial)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en "Entendido".
4. El usuario revisa las secciones del carrito y el resumen de precios.

**Resultado esperado**

{SKU_UNITARIO} queda con 4 unidades en disponibles y 1 en no disponibles, y el resumen de precios y totales se recalcula.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-D-010 - Verificar que con un solo producto repuesto el modal se muestra en talla xs [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario revisa el tamaño del modal.

**Resultado esperado**

El modal "Están de vuelta" se muestra en talla xs según Figma.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-D-011 - Verificar que con dos o más productos repuestos el modal se muestra en talla md [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001}, {SKU_UNITARIO} x 2 y {SKU_PESABLE} con 1 kg
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} y {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 0 y ambos quedan no disponibles
- Desde BM se repone el stock de ambos productos (restock)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario revisa el tamaño del modal.

**Resultado esperado**

El modal "Están de vuelta" lista {SKU_UNITARIO} y {SKU_PESABLE} y se muestra en talla md según Figma.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-M-001 - Verificar que Entendido cierra el modal, muestra el toast y agrega los productos al carro [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El sistema cierra el modal y actualiza el carrito en tiempo real.

**Resultado esperado**

El modal se cierra, se muestra el toast con ícono ✓ y botón X "¡Tu carro ha sido actualizado!" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-M-002 - Verificar que el toast de carro actualizado desaparece solo a los 4 segundos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El sistema muestra el toast "¡Tu carro ha sido actualizado!".
5. El usuario espera sin interactuar.

**Resultado esperado**

El toast desaparece automáticamente transcurridos 4 segundos.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-M-003 - Verificar que el toast de carro actualizado se cierra con la X [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El sistema muestra el toast "¡Tu carro ha sido actualizado!".
5. El usuario toca la X del toast antes de 4 segundos.

**Resultado esperado**

El toast se cierra inmediatamente.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-M-004 - Verificar que un unitario con stock suficiente pasa completo a disponibles sin aviso adicional [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 3
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 5 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El usuario revisa el carrito.

**Resultado esperado**

{SKU_UNITARIO} x 3 pasa completo a la sección de disponibles, no queda en no disponibles y no se muestra aviso adicional.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-M-005 - Verificar que un unitario con stock parcial deja la cantidad restante en No disponibles [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 3
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El usuario revisa las secciones de disponibles y no disponibles.

**Resultado esperado**

{SKU_UNITARIO} queda con 2 unidades en disponibles y 1 unidad en la sección No disponibles; no se muestra un mensaje adicional.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-M-006 - Verificar que un pesable repuesto se reincorpora con el multiplicador de medida [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_PESABLE} con 1 kg
- Desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_PESABLE} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 1 kg o más (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario revisa la unidad de medida de {SKU_PESABLE} en el modal.
4. El usuario toca "Entendido".

**Resultado esperado**

El modal muestra la unidad de medida de {SKU_PESABLE} (kg) y el carrito lo reincorpora con la cantidad disponible aplicando el multiplicador de Janis.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-M-007 - Verificar que cerrar el modal con la X también agrega los productos y muestra el toast [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca la X del modal.
4. El sistema cierra el modal y actualiza el carrito.

**Resultado esperado**

Se muestra el toast con ícono ✓ y botón X "¡Tu carro ha sido actualizado!" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-M-008 - Verificar que un invitado con productos repuestos los ve agregados al carro tras Entendido [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El sistema cierra el modal y actualiza el carrito en tiempo real.

**Resultado esperado**

Se muestra el toast "¡Tu carro ha sido actualizado!" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-M-009 - Verificar que un restock parcial deja 4 disponibles y 1 no disponible con totales recalculados [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 5
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2: el carro muestra 2 unidades disponibles y 3 no disponibles
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 4 (restock parcial)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El usuario revisa las secciones del carrito y el resumen de precios.

**Resultado esperado**

{SKU_UNITARIO} queda con 4 unidades en disponibles y 1 en no disponibles, y el resumen de precios y totales se recalcula.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-M-010 - Verificar que con un solo producto repuesto el modal se muestra en talla xs [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario revisa el tamaño del modal.

**Resultado esperado**

El modal "Están de vuelta" se muestra en talla xs según Figma.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-M-011 - Verificar que con dos o más productos repuestos el modal se muestra en talla md [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001}, {SKU_UNITARIO} x 2 y {SKU_PESABLE} con 1 kg
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} y {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 0 y ambos quedan no disponibles
- Desde BM se repone el stock de ambos productos (restock)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_PESABLE} = 000000000000037972-KG

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario revisa el tamaño del modal.

**Resultado esperado**

El modal "Están de vuelta" lista {SKU_UNITARIO} y {SKU_PESABLE} y se muestra en talla md según Figma.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.

---

### TC-B2C47-D-012 - Verificar que si falla la reincorporación los productos no se agregan y se muestra el toast de error [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro
- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito; el usuario anota la cantidad de {SKU_UNITARIO} en No disponibles, el subtotal y el total.
3. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
4. El usuario hace clic en "Entendido".
5. El sistema intenta reincorporar los productos y la request falla.
6. El usuario revisa el carrito y la tarjeta de totales.

**Resultado esperado**

Se muestra el toast de error "Ha ocurrido un error al agregar los productos a tu carro" con botón X; {SKU_UNITARIO} x 2 sigue en la sección No disponibles y no se agrega a disponibles; subtotal y total quedan iguales a los anotados antes del intento.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

---

### TC-B2C47-D-013 - Verificar que el toast de error de reincorporación persiste hasta cerrarlo con la X [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro
- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en "Entendido".
4. El sistema intenta reincorporar los productos y la request falla.
5. El usuario espera más de 4 segundos sin interactuar con el toast.
6. El usuario presiona la X del toast.

**Resultado esperado**

El toast "Ha ocurrido un error al agregar los productos a tu carro" sigue visible después de los 4 segundos y solo se cierra al presionar la X; el carrito no cambia.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

---

### TC-B2C47-D-014 - Verificar que tras el error de reincorporación el usuario puede reintentar y los productos se agregan [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro
- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario hace clic en "Entendido".
4. El sistema intenta reincorporar los productos y la request falla.
5. El sistema muestra el toast de error y el usuario lo cierra con la X.
6. El usuario desactiva el bloqueo de {CART_ITEM_API_ENDPOINT} en DevTools.
7. El usuario reintenta la reincorporación (recarga el carrito y el sistema vuelve a mostrar el modal "Están de vuelta").
8. El usuario hace clic en "Entendido".

**Resultado esperado**

El reintento está disponible: el modal "Están de vuelta" se vuelve a mostrar, al presionar "Entendido" se muestra el toast "¡Tu carro ha sido actualizado!" y {SKU_UNITARIO} x 2 pasa a la sección de disponibles con totales recalculados.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

---

### TC-B2C47-D-015 - Verificar que si falla la reincorporación al cerrar el modal con la X se muestra el toast de error [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro
- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito; el usuario anota el subtotal y el total.
3. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
4. El usuario cierra el modal con la X.
5. El sistema intenta reincorporar los productos y la request falla.

**Resultado esperado**

Se muestra el toast de error "Ha ocurrido un error al agregar los productos a tu carro" con botón X (no el toast de confirmación); {SKU_UNITARIO} x 2 sigue en No disponibles y subtotal y total no cambian.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

---

### TC-B2C47-M-012 - Verificar que si falla la reincorporación los productos no se agregan y se muestra el toast de error [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro
- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito; el usuario anota la cantidad de {SKU_UNITARIO} en No disponibles, el subtotal y el total.
3. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
4. El usuario toca "Entendido".
5. El sistema intenta reincorporar los productos y la request falla.
6. El usuario revisa el carrito y la tarjeta de totales.

**Resultado esperado**

Se muestra el toast de error "Ha ocurrido un error al agregar los productos a tu carro" con botón X; {SKU_UNITARIO} x 2 sigue en la sección No disponibles y no se agrega a disponibles; subtotal y total quedan iguales a los anotados antes del intento.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

---

### TC-B2C47-M-013 - Verificar que el toast de error de reincorporación persiste hasta cerrarlo con la X [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro
- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El sistema intenta reincorporar los productos y la request falla.
5. El usuario espera más de 4 segundos sin interactuar con el toast.
6. El usuario toca la X del toast.

**Resultado esperado**

El toast "Ha ocurrido un error al agregar los productos a tu carro" sigue visible después de los 4 segundos y solo se cierra al tocar la X; el carrito no cambia.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

---

### TC-B2C47-M-014 - Verificar que tras el error de reincorporación el usuario puede reintentar y los productos se agregan [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro
- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El sistema intenta reincorporar los productos y la request falla.
5. El sistema muestra el toast de error y el usuario lo cierra con la X.
6. El usuario desactiva el bloqueo de {CART_ITEM_API_ENDPOINT} en DevTools.
7. El usuario reintenta la reincorporación (recarga el carrito y el sistema vuelve a mostrar el modal "Están de vuelta").
8. El usuario toca "Entendido".

**Resultado esperado**

El reintento está disponible: el modal "Están de vuelta" se vuelve a mostrar, al tocar "Entendido" se muestra el toast "¡Tu carro ha sido actualizado!" y {SKU_UNITARIO} x 2 pasa a la sección de disponibles con totales recalculados.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

---

### TC-B2C47-M-015 - Verificar que si falla la reincorporación al cerrar el modal con la X se muestra el toast de error [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro
- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)
- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_ITEM_API_ENDPOINT} = None

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito; el usuario anota el subtotal y el total.
3. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
4. El usuario cierra el modal con la X.
5. El sistema intenta reincorporar los productos y la request falla.

**Resultado esperado**

Se muestra el toast de error "Ha ocurrido un error al agregar los productos a tu carro" con botón X (no el toast de confirmación); {SKU_UNITARIO} x 2 sigue en No disponibles y subtotal y total no cambian.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

---

### TC-B2C47-D-016 - Verificar que al reincorporar los productos el total a pagar aumenta en el valor de lo agregado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2 ({SKU_UNITARIO} sin promociones vigentes)
- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro
- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito; el usuario anota el precio unitario (P) de {SKU_UNITARIO} y los montos de la tarjeta de totales: subtotal (S) y total a pagar (T).
3. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
4. El usuario hace clic en "Entendido".
5. El sistema cierra el modal y muestra el toast "¡Tu carro ha sido actualizado!".
6. Sin recargar, el usuario revisa la tarjeta de totales.

**Resultado esperado**

{SKU_UNITARIO} x 2 pasa a la sección de disponibles y la tarjeta de totales se actualiza sin recargar: subtotal = S + 2·P y total a pagar = T + 2·P.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú), pero eso no destraba el caso. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú), pero eso no destraba el caso. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

---

### TC-B2C47-M-016 - Verificar que al reincorporar los productos el total a pagar aumenta en el valor de lo agregado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | — |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2 ({SKU_UNITARIO} sin promociones vigentes)
- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro
- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)

{BM_ADMIN_USER} = e_jmoran@smu.cl

{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3

{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{INVENTORY_LIST_TIENDA_RETIRO_001} = None

{SKU_UNITARIO} = 000000000000674797-UN

{SKU_VALID_001} = 000000000000675191-UN

{TIENDA_RETIRO_001} = Unimarc Las Condes

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito; el usuario anota el precio unitario (P) de {SKU_UNITARIO} y los montos de la tarjeta de totales: subtotal (S) y total a pagar (T).
3. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
4. El usuario toca "Entendido".
5. El sistema cierra el modal y muestra el toast "¡Tu carro ha sido actualizado!".
6. Sin recargar, el usuario revisa la tarjeta de totales.

**Resultado esperado**

{SKU_UNITARIO} x 2 pasa a la sección de disponibles y la tarjeta de totales se actualiza sin recargar: subtotal = S + 2·P y total a pagar = T + 2·P.

**Resultado obtenido**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú), pero eso no destraba el caso. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

**Observación**

Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú), pero eso no destraba el caso. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.

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
  "suite": "B2C-47",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-47 WEB Test Cases.xlsx",
  "title": "Reposición de productos al carro (restock)",
  "updated_at": "2026-10-21"
 },
 "history": {
  "2026-10-20": [
   "TC-B2C47-D-001",
   "TC-B2C47-D-002",
   "TC-B2C47-D-003",
   "TC-B2C47-D-004",
   "TC-B2C47-D-005",
   "TC-B2C47-D-006",
   "TC-B2C47-D-007",
   "TC-B2C47-D-008",
   "TC-B2C47-D-009",
   "TC-B2C47-D-010",
   "TC-B2C47-D-011",
   "TC-B2C47-D-012",
   "TC-B2C47-D-013",
   "TC-B2C47-D-014",
   "TC-B2C47-D-015",
   "TC-B2C47-D-016",
   "TC-B2C47-M-001",
   "TC-B2C47-M-002",
   "TC-B2C47-M-003",
   "TC-B2C47-M-004",
   "TC-B2C47-M-005",
   "TC-B2C47-M-006",
   "TC-B2C47-M-007",
   "TC-B2C47-M-008",
   "TC-B2C47-M-009",
   "TC-B2C47-M-010",
   "TC-B2C47-M-011",
   "TC-B2C47-M-012",
   "TC-B2C47-M-013",
   "TC-B2C47-M-014",
   "TC-B2C47-M-015",
   "TC-B2C47-M-016"
  ],
  "2026-10-21": [
   "TC-B2C47-D-001",
   "TC-B2C47-D-002",
   "TC-B2C47-D-003",
   "TC-B2C47-D-004",
   "TC-B2C47-D-005",
   "TC-B2C47-D-006",
   "TC-B2C47-D-007",
   "TC-B2C47-D-008",
   "TC-B2C47-D-009",
   "TC-B2C47-D-010",
   "TC-B2C47-D-011",
   "TC-B2C47-D-012",
   "TC-B2C47-D-013",
   "TC-B2C47-D-014",
   "TC-B2C47-D-015",
   "TC-B2C47-D-016",
   "TC-B2C47-M-001",
   "TC-B2C47-M-002",
   "TC-B2C47-M-003",
   "TC-B2C47-M-004",
   "TC-B2C47-M-005",
   "TC-B2C47-M-006",
   "TC-B2C47-M-007",
   "TC-B2C47-M-008",
   "TC-B2C47-M-009",
   "TC-B2C47-M-010",
   "TC-B2C47-M-011",
   "TC-B2C47-M-012",
   "TC-B2C47-M-013",
   "TC-B2C47-M-014",
   "TC-B2C47-M-015",
   "TC-B2C47-M-016"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal se cierra, se muestra el toast con ícono ✓ y botón X \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-001",
   "name": "Verificar que Entendido cierra el modal, muestra el toast y agrega los productos al carro [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El sistema cierra el modal y actualiza el carrito en tiempo real.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El toast desaparece automáticamente transcurridos 4 segundos.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-002",
   "name": "Verificar que el toast de carro actualizado desaparece solo a los 4 segundos [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El sistema muestra el toast \"¡Tu carro ha sido actualizado!\".\n5. El usuario espera sin interactuar.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El toast se cierra inmediatamente.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-003",
   "name": "Verificar que el toast de carro actualizado se cierra con la X [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El sistema muestra el toast \"¡Tu carro ha sido actualizado!\".\n5. El usuario hace clic en la X del toast antes de 4 segundos.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "{SKU_UNITARIO} x 3 pasa completo a la sección de disponibles, no queda en no disponibles y no se muestra aviso adicional.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-004",
   "name": "Verificar que un unitario con stock suficiente pasa completo a disponibles sin aviso adicional [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 3\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 5 (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El usuario revisa el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "{SKU_UNITARIO} queda con 2 unidades en disponibles y 1 unidad en la sección No disponibles; no se muestra un mensaje adicional.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-005",
   "name": "Verificar que un unitario con stock parcial deja la cantidad restante en No disponibles [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 3\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El usuario revisa las secciones de disponibles y no disponibles.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal muestra la unidad de medida de {SKU_PESABLE} (kg) y el carrito lo reincorpora con la cantidad disponible aplicando el multiplicador de Janis.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-006",
   "name": "Verificar que un pesable repuesto se reincorpora con el multiplicador de medida [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_PESABLE} con 1 kg\n- Desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_PESABLE} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 1 kg o más (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario revisa la unidad de medida de {SKU_PESABLE} en el modal.\n4. El usuario hace clic en \"Entendido\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el toast con ícono ✓ y botón X \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-007",
   "name": "Verificar que cerrar el modal con la X también agrega los productos y muestra el toast [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en la X del modal.\n4. El sistema cierra el modal y actualiza el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el toast \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-008",
   "name": "Verificar que un invitado con productos repuestos los ve agregados al carro tras Entendido [Desktop] [Guest]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El sistema cierra el modal y actualiza el carrito en tiempo real.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "{SKU_UNITARIO} queda con 4 unidades en disponibles y 1 en no disponibles, y el resumen de precios y totales se recalcula.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-009",
   "name": "Verificar que un restock parcial deja 4 disponibles y 1 no disponible con totales recalculados [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 5\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2: el carro muestra 2 unidades disponibles y 3 no disponibles\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 4 (restock parcial)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El usuario revisa las secciones del carrito y el resumen de precios.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal \"Están de vuelta\" se muestra en talla xs según Figma.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-010",
   "name": "Verificar que con un solo producto repuesto el modal se muestra en talla xs [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario revisa el tamaño del modal.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal \"Están de vuelta\" lista {SKU_UNITARIO} y {SKU_PESABLE} y se muestra en talla md según Figma.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-011",
   "name": "Verificar que con dos o más productos repuestos el modal se muestra en talla md [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001}, {SKU_UNITARIO} x 2 y {SKU_PESABLE} con 1 kg\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} y {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 0 y ambos quedan no disponibles\n- Desde BM se repone el stock de ambos productos (restock)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario revisa el tamaño del modal.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal se cierra, se muestra el toast con ícono ✓ y botón X \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-001",
   "name": "Verificar que Entendido cierra el modal, muestra el toast y agrega los productos al carro [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema cierra el modal y actualiza el carrito en tiempo real.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El toast desaparece automáticamente transcurridos 4 segundos.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-002",
   "name": "Verificar que el toast de carro actualizado desaparece solo a los 4 segundos [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema muestra el toast \"¡Tu carro ha sido actualizado!\".\n5. El usuario espera sin interactuar.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El toast se cierra inmediatamente.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-003",
   "name": "Verificar que el toast de carro actualizado se cierra con la X [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema muestra el toast \"¡Tu carro ha sido actualizado!\".\n5. El usuario toca la X del toast antes de 4 segundos.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "{SKU_UNITARIO} x 3 pasa completo a la sección de disponibles, no queda en no disponibles y no se muestra aviso adicional.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-004",
   "name": "Verificar que un unitario con stock suficiente pasa completo a disponibles sin aviso adicional [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 3\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 5 (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El usuario revisa el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "{SKU_UNITARIO} queda con 2 unidades en disponibles y 1 unidad en la sección No disponibles; no se muestra un mensaje adicional.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-005",
   "name": "Verificar que un unitario con stock parcial deja la cantidad restante en No disponibles [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 3\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El usuario revisa las secciones de disponibles y no disponibles.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal muestra la unidad de medida de {SKU_PESABLE} (kg) y el carrito lo reincorpora con la cantidad disponible aplicando el multiplicador de Janis.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-006",
   "name": "Verificar que un pesable repuesto se reincorpora con el multiplicador de medida [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_PESABLE} con 1 kg\n- Desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_PESABLE} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 1 kg o más (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario revisa la unidad de medida de {SKU_PESABLE} en el modal.\n4. El usuario toca \"Entendido\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el toast con ícono ✓ y botón X \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-007",
   "name": "Verificar que cerrar el modal con la X también agrega los productos y muestra el toast [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca la X del modal.\n4. El sistema cierra el modal y actualiza el carrito.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el toast \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-008",
   "name": "Verificar que un invitado con productos repuestos los ve agregados al carro tras Entendido [Mobile] [Guest]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema cierra el modal y actualiza el carrito en tiempo real.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "{SKU_UNITARIO} queda con 4 unidades en disponibles y 1 en no disponibles, y el resumen de precios y totales se recalcula.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-009",
   "name": "Verificar que un restock parcial deja 4 disponibles y 1 no disponible con totales recalculados [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 5\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2: el carro muestra 2 unidades disponibles y 3 no disponibles\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 4 (restock parcial)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El usuario revisa las secciones del carrito y el resumen de precios.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal \"Están de vuelta\" se muestra en talla xs según Figma.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-010",
   "name": "Verificar que con un solo producto repuesto el modal se muestra en talla xs [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario revisa el tamaño del modal.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal \"Están de vuelta\" lista {SKU_UNITARIO} y {SKU_PESABLE} y se muestra en talla md según Figma.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-011",
   "name": "Verificar que con dos o más productos repuestos el modal se muestra en talla md [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). Re-verificado en vivo el 2026-10-21: Business Manager responde con su pantalla de Login (HTTP 200) y la data sigue igual.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001}, {SKU_UNITARIO} x 2 y {SKU_PESABLE} con 1 kg\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} y {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 0 y ambos quedan no disponibles\n- Desde BM se repone el stock de ambos productos (restock)",
   "spec": "—",
   "status": "Bloqueado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario revisa el tamaño del modal.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_PESABLE} = 000000000000037972-KG\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el toast de error \"Ha ocurrido un error al agregar los productos a tu carro\" con botón X; {SKU_UNITARIO} x 2 sigue en la sección No disponibles y no se agrega a disponibles; subtotal y total quedan iguales a los anotados antes del intento.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-012",
   "name": "Verificar que si falla la reincorporación los productos no se agregan y se muestra el toast de error [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito; el usuario anota la cantidad de {SKU_UNITARIO} en No disponibles, el subtotal y el total.\n3. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n4. El usuario hace clic en \"Entendido\".\n5. El sistema intenta reincorporar los productos y la request falla.\n6. El usuario revisa el carrito y la tarjeta de totales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El toast \"Ha ocurrido un error al agregar los productos a tu carro\" sigue visible después de los 4 segundos y solo se cierra al presionar la X; el carrito no cambia.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-013",
   "name": "Verificar que el toast de error de reincorporación persiste hasta cerrarlo con la X [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El sistema intenta reincorporar los productos y la request falla.\n5. El usuario espera más de 4 segundos sin interactuar con el toast.\n6. El usuario presiona la X del toast.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El reintento está disponible: el modal \"Están de vuelta\" se vuelve a mostrar, al presionar \"Entendido\" se muestra el toast \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 pasa a la sección de disponibles con totales recalculados.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-014",
   "name": "Verificar que tras el error de reincorporación el usuario puede reintentar y los productos se agregan [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario hace clic en \"Entendido\".\n4. El sistema intenta reincorporar los productos y la request falla.\n5. El sistema muestra el toast de error y el usuario lo cierra con la X.\n6. El usuario desactiva el bloqueo de {CART_ITEM_API_ENDPOINT} en DevTools.\n7. El usuario reintenta la reincorporación (recarga el carrito y el sistema vuelve a mostrar el modal \"Están de vuelta\").\n8. El usuario hace clic en \"Entendido\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el toast de error \"Ha ocurrido un error al agregar los productos a tu carro\" con botón X (no el toast de confirmación); {SKU_UNITARIO} x 2 sigue en No disponibles y subtotal y total no cambian.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-015",
   "name": "Verificar que si falla la reincorporación al cerrar el modal con la X se muestra el toast de error [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito; el usuario anota el subtotal y el total.\n3. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n4. El usuario cierra el modal con la X.\n5. El sistema intenta reincorporar los productos y la request falla.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el toast de error \"Ha ocurrido un error al agregar los productos a tu carro\" con botón X; {SKU_UNITARIO} x 2 sigue en la sección No disponibles y no se agrega a disponibles; subtotal y total quedan iguales a los anotados antes del intento.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-012",
   "name": "Verificar que si falla la reincorporación los productos no se agregan y se muestra el toast de error [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito; el usuario anota la cantidad de {SKU_UNITARIO} en No disponibles, el subtotal y el total.\n3. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n4. El usuario toca \"Entendido\".\n5. El sistema intenta reincorporar los productos y la request falla.\n6. El usuario revisa el carrito y la tarjeta de totales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El toast \"Ha ocurrido un error al agregar los productos a tu carro\" sigue visible después de los 4 segundos y solo se cierra al tocar la X; el carrito no cambia.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-013",
   "name": "Verificar que el toast de error de reincorporación persiste hasta cerrarlo con la X [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema intenta reincorporar los productos y la request falla.\n5. El usuario espera más de 4 segundos sin interactuar con el toast.\n6. El usuario toca la X del toast.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El reintento está disponible: el modal \"Están de vuelta\" se vuelve a mostrar, al tocar \"Entendido\" se muestra el toast \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 pasa a la sección de disponibles con totales recalculados.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-014",
   "name": "Verificar que tras el error de reincorporación el usuario puede reintentar y los productos se agregan [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema intenta reincorporar los productos y la request falla.\n5. El sistema muestra el toast de error y el usuario lo cierra con la X.\n6. El usuario desactiva el bloqueo de {CART_ITEM_API_ENDPOINT} en DevTools.\n7. El usuario reintenta la reincorporación (recarga el carrito y el sistema vuelve a mostrar el modal \"Están de vuelta\").\n8. El usuario toca \"Entendido\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "Se muestra el toast de error \"Ha ocurrido un error al agregar los productos a tu carro\" con botón X (no el toast de confirmación); {SKU_UNITARIO} x 2 sigue en No disponibles y subtotal y total no cambian.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-015",
   "name": "Verificar que si falla la reincorporación al cerrar el modal con la X se muestra el toast de error [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú); sigue sin valor {CART_ITEM_API_ENDPOINT}. Acción: cargarlo. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- DevTools abierto con bloqueo de la request {CART_ITEM_API_ENDPOINT} (Network request blocking)",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito; el usuario anota el subtotal y el total.\n3. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n4. El usuario cierra el modal con la X.\n5. El sistema intenta reincorporar los productos y la request falla.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_ITEM_API_ENDPOINT} = None\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "{SKU_UNITARIO} x 2 pasa a la sección de disponibles y la tarjeta de totales se actualiza sin recargar: subtotal = S + 2·P y total a pagar = T + 2·P.",
   "form_factor": "desktop",
   "id": "TC-B2C47-D-016",
   "name": "Verificar que al reincorporar los productos el total a pagar aumenta en el valor de lo agregado [Desktop] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú), pero eso no destraba el caso. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú), pero eso no destraba el caso. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2 ({SKU_UNITARIO} sin promociones vigentes)\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito; el usuario anota el precio unitario (P) de {SKU_UNITARIO} y los montos de la tarjeta de totales: subtotal (S) y total a pagar (T).\n3. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n4. El usuario hace clic en \"Entendido\".\n5. El sistema cierra el modal y muestra el toast \"¡Tu carro ha sido actualizado!\".\n6. Sin recargar, el usuario revisa la tarjeta de totales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "{SKU_UNITARIO} x 2 pasa a la sección de disponibles y la tarjeta de totales se actualiza sin recargar: subtotal = S + 2·P y total a pagar = T + 2·P.",
   "form_factor": "mobile",
   "id": "TC-B2C47-M-016",
   "name": "Verificar que al reincorporar los productos el total a pagar aumenta en el valor de lo agregado [Mobile] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú), pero eso no destraba el caso. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "observed": "Causa: la precondición exige cambiar el inventario en Business Manager ({BM_URL}, lista {BM_INVENTORY_LIST}): dejar el stock del producto en 0 para que quede no disponible y luego reponerlo, con la cuenta de administrador {BM_ADMIN_USER} (e_jmoran@smu.cl), que es una cuenta personal de otra persona, y modificar el inventario de DEV es un cambio sobre datos compartidos que no se hace desde la automatización sin autorización. Acción: que alguien con acceso a Business Manager prepare la reposición (o habilitar una cuenta de servicio y una tienda de prueba). {INVENTORY_LIST_TIENDA_RETIRO_001} ya tiene valor en el Excel de data (Unimarc Av. Perú), pero eso no destraba el caso. Re-verificado en vivo el 2026-10-21 con la data de las 10:07: Business Manager responde con su pantalla de Login (HTTP 200) y el acceso no cambió.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2 ({SKU_UNITARIO} sin promociones vigentes)\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)",
   "spec": "—",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito; el usuario anota el precio unitario (P) de {SKU_UNITARIO} y los montos de la tarjeta de totales: subtotal (S) y total a pagar (T).\n3. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n4. El usuario toca \"Entendido\".\n5. El sistema cierra el modal y muestra el toast \"¡Tu carro ha sido actualizado!\".\n6. Sin recargar, el usuario revisa la tarjeta de totales.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{BM_ADMIN_PASSWORD} = (contraseña de la cuenta)\n{BM_ADMIN_USER} = e_jmoran@smu.cl\n{BM_INVENTORY_LIST} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site/default%3bapp%3\n{BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{INVENTORY_LIST_TIENDA_RETIRO_001} = None\n{SKU_UNITARIO} = 000000000000674797-UN\n{SKU_VALID_001} = 000000000000675191-UN\n{TIENDA_RETIRO_001} = Unimarc Las Condes\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  }
 ]
}
-->
