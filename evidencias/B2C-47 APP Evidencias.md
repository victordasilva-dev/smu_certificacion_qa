# B2C-47 APP - Evidencias QA (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-47 APP |
| Última actualización | 2026-10-29 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-47 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado | 12 |
| Bloqueado Data | 4 |
| **Total** | **16** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-29 | 16 | TC-B2C47-APP-001, TC-B2C47-APP-002, TC-B2C47-APP-003, TC-B2C47-APP-004, TC-B2C47-APP-005, TC-B2C47-APP-006, TC-B2C47-APP-007, TC-B2C47-APP-008, TC-B2C47-APP-009, TC-B2C47-APP-010, TC-B2C47-APP-011, TC-B2C47-APP-012, TC-B2C47-APP-013, TC-B2C47-APP-014, TC-B2C47-APP-015, TC-B2C47-APP-016 |

## Detalle por caso de prueba

### TC-B2C47-APP-001 - Verificar que Entendido cierra el modal, muestra el toast y agrega los productos al carro [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {BM_INVENTORY_LIST} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {BM_ADMIN_USER} = e_jmoran@smu.cl
- {BM_ADMIN_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El sistema cierra el modal y actualiza el carrito en tiempo real.

**Resultado esperado**

El modal se cierra, se muestra el toast con ícono ✓ y botón X "¡Tu carro ha sido actualizado!" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.

**Resultado obtenido**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

**Observación**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

---

### TC-B2C47-APP-002 - Verificar que el toast de carro actualizado desaparece solo a los 4 segundos [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {BM_INVENTORY_LIST} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {BM_ADMIN_USER} = e_jmoran@smu.cl
- {BM_ADMIN_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El sistema muestra el toast "¡Tu carro ha sido actualizado!".
5. El usuario espera sin interactuar.

**Resultado esperado**

El toast desaparece automáticamente transcurridos 4 segundos.

**Resultado obtenido**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

**Observación**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

---

### TC-B2C47-APP-003 - Verificar que el toast de carro actualizado se cierra con la X [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {BM_INVENTORY_LIST} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {BM_ADMIN_USER} = e_jmoran@smu.cl
- {BM_ADMIN_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El sistema muestra el toast "¡Tu carro ha sido actualizado!".
5. El usuario toca la X del toast antes de 4 segundos.

**Resultado esperado**

El toast se cierra inmediatamente.

**Resultado obtenido**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

**Observación**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

---

### TC-B2C47-APP-004 - Verificar que un unitario con stock suficiente pasa completo a disponibles sin aviso adicional [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 3
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 5 (restock en la tienda abastecedora activa)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {BM_INVENTORY_LIST} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {BM_ADMIN_USER} = e_jmoran@smu.cl
- {BM_ADMIN_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El usuario revisa el carrito.

**Resultado esperado**

{SKU_UNITARIO} x 3 pasa completo a la sección de disponibles, no queda en no disponibles y no se muestra aviso adicional.

**Resultado obtenido**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

**Observación**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

---

### TC-B2C47-APP-005 - Verificar que un unitario con stock parcial deja la cantidad restante en No disponibles [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 3
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {BM_INVENTORY_LIST} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {BM_ADMIN_USER} = e_jmoran@smu.cl
- {BM_ADMIN_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El usuario revisa las secciones de disponibles y no disponibles.

**Resultado esperado**

{SKU_UNITARIO} queda con 2 unidades en disponibles y 1 unidad en la sección No disponibles; no se muestra un mensaje adicional.

**Resultado obtenido**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

**Observación**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

---

### TC-B2C47-APP-006 - Verificar que un pesable repuesto se reincorpora con el multiplicador de medida [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_PESABLE} con 1 kg
- Desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_PESABLE} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 1 kg o más (restock en la tienda abastecedora activa)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_PESABLE} = 000000000000037972-KG
- {BM_INVENTORY_LIST} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {BM_ADMIN_USER} = e_jmoran@smu.cl
- {BM_ADMIN_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario revisa la unidad de medida de {SKU_PESABLE} en el modal.
4. El usuario toca "Entendido".

**Resultado esperado**

El modal muestra la unidad de medida de {SKU_PESABLE} (kg) y el carrito lo reincorpora con la cantidad disponible aplicando el multiplicador de Janis.

**Resultado obtenido**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

**Observación**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

---

### TC-B2C47-APP-007 - Verificar que cerrar el modal con la X también agrega los productos y muestra el toast [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {BM_INVENTORY_LIST} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {BM_ADMIN_USER} = e_jmoran@smu.cl
- {BM_ADMIN_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca la X del modal.
4. El sistema cierra el modal y actualiza el carrito.

**Resultado esperado**

Se muestra el toast con ícono ✓ y botón X "¡Tu carro ha sido actualizado!" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.

**Resultado obtenido**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

**Observación**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

---

### TC-B2C47-APP-008 - Verificar que un invitado con productos repuestos los ve agregados al carro tras Entendido [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {BM_INVENTORY_LIST} = TBD
- {BM_ADMIN_USER} = e_jmoran@smu.cl
- {BM_ADMIN_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El sistema cierra el modal y actualiza el carrito en tiempo real.

**Resultado esperado**

Se muestra el toast "¡Tu carro ha sido actualizado!" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.

**Resultado obtenido**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

**Observación**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

---

### TC-B2C47-APP-009 - Verificar que un restock parcial deja 4 disponibles y 1 no disponible con totales recalculados [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 5
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2: el carro muestra 2 unidades disponibles y 3 no disponibles
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 4 (restock parcial)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {BM_INVENTORY_LIST} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {BM_ADMIN_USER} = e_jmoran@smu.cl
- {BM_ADMIN_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El usuario revisa las secciones del carrito y el resumen de precios.

**Resultado esperado**

{SKU_UNITARIO} queda con 4 unidades en disponibles y 1 en no disponibles, y el resumen de precios y totales se recalcula.

**Resultado obtenido**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

**Observación**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

---

### TC-B2C47-APP-010 - Verificar que con un solo producto repuesto el modal se muestra en talla xs [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {BM_INVENTORY_LIST} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {BM_ADMIN_USER} = e_jmoran@smu.cl
- {BM_ADMIN_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario revisa el tamaño del modal.

**Resultado esperado**

El modal "Están de vuelta" se muestra en talla xs según Figma.

**Resultado obtenido**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

**Observación**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

---

### TC-B2C47-APP-011 - Verificar que con dos o más productos repuestos el modal se muestra en talla md [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001}, {SKU_UNITARIO} x 2 y {SKU_PESABLE} con 1 kg
- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} y {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 0 y ambos quedan no disponibles
- Desde BM se repone el stock de ambos productos (restock)

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_UNITARIO} = 000000000400254005-UN
- {BM_INVENTORY_LIST} = TBD
- {SKU_PESABLE} = 000000000000037972-KG
- {USER_AUTH_001} = girolamo_coppo@hotmail.com
- {BM_ADMIN_USER} = e_jmoran@smu.cl
- {BM_ADMIN_PASSWORD} = [contraseña omitida]

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario revisa el tamaño del modal.

**Resultado esperado**

El modal "Están de vuelta" lista {SKU_UNITARIO} y {SKU_PESABLE} y se muestra en talla md según Figma.

**Resultado obtenido**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

**Observación**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

---

### TC-B2C47-APP-012 - Verificar que si falla la reincorporación los productos no se agregan y se muestra el toast de error [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro
- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {BM_URL}
- {SKU_VALID_001}
- {SKU_UNITARIO}
- {BM_INVENTORY_LIST}
- {TIENDA_RETIRO_001}
- {INVENTORY_LIST_TIENDA_RETIRO_001}
- {CART_ITEM_API_ENDPOINT}
- {USER_AUTH_001}
- {BM_ADMIN_USER}
- {BM_ADMIN_PASSWORD}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito; el usuario anota la cantidad de {SKU_UNITARIO} en No disponibles, el subtotal y el total.
3. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
4. El usuario toca "Entendido".
5. El sistema intenta reincorporar los productos y la request falla.
6. El usuario revisa el carrito y la tarjeta de totales.

**Resultado esperado**

Se muestra el toast de error "Ha ocurrido un error al agregar los productos a tu carro" con botón X; {SKU_UNITARIO} x 2 sigue en la sección No disponibles y no se agrega a disponibles; subtotal y total quedan iguales a los anotados antes del intento.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C47-APP-013 - Verificar que el toast de error de reincorporación persiste hasta cerrarlo con la X [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro
- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {BM_URL}
- {SKU_VALID_001}
- {SKU_UNITARIO}
- {BM_INVENTORY_LIST}
- {TIENDA_RETIRO_001}
- {INVENTORY_LIST_TIENDA_RETIRO_001}
- {CART_ITEM_API_ENDPOINT}
- {USER_AUTH_001}
- {BM_ADMIN_USER}
- {BM_ADMIN_PASSWORD}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El sistema intenta reincorporar los productos y la request falla.
5. El usuario espera más de 4 segundos sin interactuar con el toast.
6. El usuario toca la X del toast.

**Resultado esperado**

El toast "Ha ocurrido un error al agregar los productos a tu carro" sigue visible después de los 4 segundos y solo se cierra al tocar la X; el carrito no cambia.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C47-APP-014 - Verificar que tras el error de reincorporación el usuario puede reintentar y los productos se agregan [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro
- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {BM_URL}
- {SKU_VALID_001}
- {SKU_UNITARIO}
- {BM_INVENTORY_LIST}
- {TIENDA_RETIRO_001}
- {INVENTORY_LIST_TIENDA_RETIRO_001}
- {CART_ITEM_API_ENDPOINT}
- {USER_AUTH_001}
- {BM_ADMIN_USER}
- {BM_ADMIN_PASSWORD}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
3. El usuario toca "Entendido".
4. El sistema intenta reincorporar los productos y la request falla.
5. El sistema muestra el toast de error y el usuario lo cierra con la X.
6. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error de {CART_ITEM_API_ENDPOINT}.
7. El usuario reintenta la reincorporación (vuelve a abrir el carro y el sistema vuelve a mostrar el modal "Están de vuelta").
8. El usuario toca "Entendido".

**Resultado esperado**

El reintento está disponible: el modal "Están de vuelta" se vuelve a mostrar, al tocar "Entendido" se muestra el toast "¡Tu carro ha sido actualizado!" y {SKU_UNITARIO} x 2 pasa a la sección de disponibles con totales recalculados.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C47-APP-015 - Verificar que si falla la reincorporación al cerrar el modal con la X se muestra el toast de error [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2
- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro
- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {BM_URL}
- {SKU_VALID_001}
- {SKU_UNITARIO}
- {BM_INVENTORY_LIST}
- {TIENDA_RETIRO_001}
- {INVENTORY_LIST_TIENDA_RETIRO_001}
- {CART_ITEM_API_ENDPOINT}
- {USER_AUTH_001}
- {BM_ADMIN_USER}
- {BM_ADMIN_PASSWORD}
- {HERRAMIENTA_PROXY_APP}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito; el usuario anota el subtotal y el total.
3. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
4. El usuario cierra el modal con la X.
5. El sistema intenta reincorporar los productos y la request falla.

**Resultado esperado**

Se muestra el toast de error "Ha ocurrido un error al agregar los productos a tu carro" con botón X (no el toast de confirmación); {SKU_UNITARIO} x 2 sigue en No disponibles y subtotal y total no cambian.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C47-APP-016 - Verificar que al reincorporar los productos el total a pagar aumenta en el valor de lo agregado [App] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Logueado
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta {USER_AUTH_001}
- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)
- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2 ({SKU_UNITARIO} sin promociones vigentes)
- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro
- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)

**Data utilizada**

- {APP_BUILD}
- {APP_PLATFORM}
- {BM_URL}
- {SKU_VALID_001}
- {SKU_UNITARIO}
- {BM_INVENTORY_LIST}
- {TIENDA_RETIRO_001}
- {INVENTORY_LIST_TIENDA_RETIRO_001}
- {USER_AUTH_001}
- {BM_ADMIN_USER}
- {BM_ADMIN_PASSWORD}

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito; el usuario anota el precio unitario (P) de {SKU_UNITARIO} y los montos de la tarjeta de totales: subtotal (S) y total a pagar (T).
3. El sistema muestra el modal "Están de vuelta" con los productos recuperados.
4. El usuario toca "Entendido".
5. El sistema cierra el modal y muestra el toast "¡Tu carro ha sido actualizado!".
6. Sin salir del carro, el usuario revisa la tarjeta de totales.

**Resultado esperado**

{SKU_UNITARIO} x 2 pasa a la sección de disponibles y la tarjeta de totales se actualiza sin salir del carro: subtotal = S + 2·P y total a pagar = T + 2·P.

**Resultado obtenido**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

**Observación**

Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.

---

<!-- qa-evidence-state
{
 "header": {
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "Android": "dispositivo por ADB"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-47 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-47 APP Test Cases.xlsx",
  "title": "B2C-47 APP - Evidencias QA (Android)",
  "updated_at": "2026-10-29"
 },
 "history": {
  "2026-10-29": [
   "TC-B2C47-APP-001",
   "TC-B2C47-APP-002",
   "TC-B2C47-APP-003",
   "TC-B2C47-APP-004",
   "TC-B2C47-APP-005",
   "TC-B2C47-APP-006",
   "TC-B2C47-APP-007",
   "TC-B2C47-APP-008",
   "TC-B2C47-APP-009",
   "TC-B2C47-APP-010",
   "TC-B2C47-APP-011",
   "TC-B2C47-APP-012",
   "TC-B2C47-APP-013",
   "TC-B2C47-APP-014",
   "TC-B2C47-APP-015",
   "TC-B2C47-APP-016"
  ]
 },
 "results": [
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El modal se cierra, se muestra el toast con ícono ✓ y botón X \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.",
   "form_factor": "app",
   "id": "TC-B2C47-APP-001",
   "name": "Verificar que Entendido cierra el modal, muestra el toast y agrega los productos al carro [App] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "observed": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema cierra el modal y actualiza el carrito en tiempo real.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {BM_INVENTORY_LIST} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {BM_ADMIN_USER} = e_jmoran@smu.cl\n- {BM_ADMIN_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El toast desaparece automáticamente transcurridos 4 segundos.",
   "form_factor": "app",
   "id": "TC-B2C47-APP-002",
   "name": "Verificar que el toast de carro actualizado desaparece solo a los 4 segundos [App] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "observed": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema muestra el toast \"¡Tu carro ha sido actualizado!\".\n5. El usuario espera sin interactuar.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {BM_INVENTORY_LIST} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {BM_ADMIN_USER} = e_jmoran@smu.cl\n- {BM_ADMIN_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El toast se cierra inmediatamente.",
   "form_factor": "app",
   "id": "TC-B2C47-APP-003",
   "name": "Verificar que el toast de carro actualizado se cierra con la X [App] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "observed": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema muestra el toast \"¡Tu carro ha sido actualizado!\".\n5. El usuario toca la X del toast antes de 4 segundos.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {BM_INVENTORY_LIST} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {BM_ADMIN_USER} = e_jmoran@smu.cl\n- {BM_ADMIN_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{SKU_UNITARIO} x 3 pasa completo a la sección de disponibles, no queda en no disponibles y no se muestra aviso adicional.",
   "form_factor": "app",
   "id": "TC-B2C47-APP-004",
   "name": "Verificar que un unitario con stock suficiente pasa completo a disponibles sin aviso adicional [App] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "observed": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 3\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 5 (restock en la tienda abastecedora activa)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El usuario revisa el carrito.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {BM_INVENTORY_LIST} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {BM_ADMIN_USER} = e_jmoran@smu.cl\n- {BM_ADMIN_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{SKU_UNITARIO} queda con 2 unidades en disponibles y 1 unidad en la sección No disponibles; no se muestra un mensaje adicional.",
   "form_factor": "app",
   "id": "TC-B2C47-APP-005",
   "name": "Verificar que un unitario con stock parcial deja la cantidad restante en No disponibles [App] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "observed": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 3\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El usuario revisa las secciones de disponibles y no disponibles.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {BM_INVENTORY_LIST} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {BM_ADMIN_USER} = e_jmoran@smu.cl\n- {BM_ADMIN_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El modal muestra la unidad de medida de {SKU_PESABLE} (kg) y el carrito lo reincorpora con la cantidad disponible aplicando el multiplicador de Janis.",
   "form_factor": "app",
   "id": "TC-B2C47-APP-006",
   "name": "Verificar que un pesable repuesto se reincorpora con el multiplicador de medida [App] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "observed": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_PESABLE} con 1 kg\n- Desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_PESABLE} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 1 kg o más (restock en la tienda abastecedora activa)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario revisa la unidad de medida de {SKU_PESABLE} en el modal.\n4. El usuario toca \"Entendido\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_PESABLE} = 000000000000037972-KG\n- {BM_INVENTORY_LIST} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {BM_ADMIN_USER} = e_jmoran@smu.cl\n- {BM_ADMIN_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast con ícono ✓ y botón X \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.",
   "form_factor": "app",
   "id": "TC-B2C47-APP-007",
   "name": "Verificar que cerrar el modal con la X también agrega los productos y muestra el toast [App] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "observed": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca la X del modal.\n4. El sistema cierra el modal y actualiza el carrito.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {BM_INVENTORY_LIST} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {BM_ADMIN_USER} = e_jmoran@smu.cl\n- {BM_ADMIN_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 queda en la sección de disponibles.",
   "form_factor": "app",
   "id": "TC-B2C47-APP-008",
   "name": "Verificar que un invitado con productos repuestos los ve agregados al carro tras Entendido [App] [Guest]",
   "observation": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "observed": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema cierra el modal y actualiza el carrito en tiempo real.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {BM_INVENTORY_LIST} = TBD\n- {BM_ADMIN_USER} = e_jmoran@smu.cl\n- {BM_ADMIN_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{SKU_UNITARIO} queda con 4 unidades en disponibles y 1 en no disponibles, y el resumen de precios y totales se recalcula.",
   "form_factor": "app",
   "id": "TC-B2C47-APP-009",
   "name": "Verificar que un restock parcial deja 4 disponibles y 1 no disponible con totales recalculados [App] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "observed": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 5\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2: el carro muestra 2 unidades disponibles y 3 no disponibles\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 4 (restock parcial)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El usuario revisa las secciones del carrito y el resumen de precios.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {BM_INVENTORY_LIST} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {BM_ADMIN_USER} = e_jmoran@smu.cl\n- {BM_ADMIN_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El modal \"Están de vuelta\" se muestra en talla xs según Figma.",
   "form_factor": "app",
   "id": "TC-B2C47-APP-010",
   "name": "Verificar que con un solo producto repuesto el modal se muestra en talla xs [App] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "observed": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 0 y {SKU_UNITARIO} queda marcado como no disponible en el carro\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} en {BM_INVENTORY_LIST} se deja en 2 (restock en la tienda abastecedora activa)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario revisa el tamaño del modal.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {BM_INVENTORY_LIST} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {BM_ADMIN_USER} = e_jmoran@smu.cl\n- {BM_ADMIN_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El modal \"Están de vuelta\" lista {SKU_UNITARIO} y {SKU_PESABLE} y se muestra en talla md según Figma.",
   "form_factor": "app",
   "id": "TC-B2C47-APP-011",
   "name": "Verificar que con dos o más productos repuestos el modal se muestra en talla md [App] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "observed": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001}, {SKU_UNITARIO} x 2 y {SKU_PESABLE} con 1 kg\n- Desde BM ({BM_URL}) el stock de {SKU_UNITARIO} y {SKU_PESABLE} en {BM_INVENTORY_LIST} se deja en 0 y ambos quedan no disponibles\n- Desde BM se repone el stock de ambos productos (restock)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario revisa el tamaño del modal.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {BM_URL} = https://development-na01-smu.demandware.net/on/demandware.store/Sites-Site\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_UNITARIO} = 000000000400254005-UN\n- {BM_INVENTORY_LIST} = TBD\n- {SKU_PESABLE} = 000000000000037972-KG\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com\n- {BM_ADMIN_USER} = e_jmoran@smu.cl\n- {BM_ADMIN_PASSWORD} = [contraseña omitida]"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast de error \"Ha ocurrido un error al agregar los productos a tu carro\" con botón X; {SKU_UNITARIO} x 2 sigue en la sección No disponibles y no se agrega a disponibles; subtotal y total quedan iguales a los anotados antes del intento.",
   "form_factor": "app",
   "id": "TC-B2C47-APP-012",
   "name": "Verificar que si falla la reincorporación los productos no se agregan y se muestra el toast de error [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito; el usuario anota la cantidad de {SKU_UNITARIO} en No disponibles, el subtotal y el total.\n3. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n4. El usuario toca \"Entendido\".\n5. El sistema intenta reincorporar los productos y la request falla.\n6. El usuario revisa el carrito y la tarjeta de totales.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {BM_URL}\n- {SKU_VALID_001}\n- {SKU_UNITARIO}\n- {BM_INVENTORY_LIST}\n- {TIENDA_RETIRO_001}\n- {INVENTORY_LIST_TIENDA_RETIRO_001}\n- {CART_ITEM_API_ENDPOINT}\n- {USER_AUTH_001}\n- {BM_ADMIN_USER}\n- {BM_ADMIN_PASSWORD}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El toast \"Ha ocurrido un error al agregar los productos a tu carro\" sigue visible después de los 4 segundos y solo se cierra al tocar la X; el carrito no cambia.",
   "form_factor": "app",
   "id": "TC-B2C47-APP-013",
   "name": "Verificar que el toast de error de reincorporación persiste hasta cerrarlo con la X [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema intenta reincorporar los productos y la request falla.\n5. El usuario espera más de 4 segundos sin interactuar con el toast.\n6. El usuario toca la X del toast.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {BM_URL}\n- {SKU_VALID_001}\n- {SKU_UNITARIO}\n- {BM_INVENTORY_LIST}\n- {TIENDA_RETIRO_001}\n- {INVENTORY_LIST_TIENDA_RETIRO_001}\n- {CART_ITEM_API_ENDPOINT}\n- {USER_AUTH_001}\n- {BM_ADMIN_USER}\n- {BM_ADMIN_PASSWORD}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El reintento está disponible: el modal \"Están de vuelta\" se vuelve a mostrar, al tocar \"Entendido\" se muestra el toast \"¡Tu carro ha sido actualizado!\" y {SKU_UNITARIO} x 2 pasa a la sección de disponibles con totales recalculados.",
   "form_factor": "app",
   "id": "TC-B2C47-APP-014",
   "name": "Verificar que tras el error de reincorporación el usuario puede reintentar y los productos se agregan [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n3. El usuario toca \"Entendido\".\n4. El sistema intenta reincorporar los productos y la request falla.\n5. El sistema muestra el toast de error y el usuario lo cierra con la X.\n6. El usuario desactiva en {HERRAMIENTA_PROXY_APP} el error de {CART_ITEM_API_ENDPOINT}.\n7. El usuario reintenta la reincorporación (vuelve a abrir el carro y el sistema vuelve a mostrar el modal \"Están de vuelta\").\n8. El usuario toca \"Entendido\".",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {BM_URL}\n- {SKU_VALID_001}\n- {SKU_UNITARIO}\n- {BM_INVENTORY_LIST}\n- {TIENDA_RETIRO_001}\n- {INVENTORY_LIST_TIENDA_RETIRO_001}\n- {CART_ITEM_API_ENDPOINT}\n- {USER_AUTH_001}\n- {BM_ADMIN_USER}\n- {BM_ADMIN_PASSWORD}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast de error \"Ha ocurrido un error al agregar los productos a tu carro\" con botón X (no el toast de confirmación); {SKU_UNITARIO} x 2 sigue en No disponibles y subtotal y total no cambian.",
   "form_factor": "app",
   "id": "TC-B2C47-APP-015",
   "name": "Verificar que si falla la reincorporación al cerrar el modal con la X se muestra el toast de error [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito; el usuario anota el subtotal y el total.\n3. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n4. El usuario cierra el modal con la X.\n5. El sistema intenta reincorporar los productos y la request falla.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {BM_URL}\n- {SKU_VALID_001}\n- {SKU_UNITARIO}\n- {BM_INVENTORY_LIST}\n- {TIENDA_RETIRO_001}\n- {INVENTORY_LIST_TIENDA_RETIRO_001}\n- {CART_ITEM_API_ENDPOINT}\n- {USER_AUTH_001}\n- {BM_ADMIN_USER}\n- {BM_ADMIN_PASSWORD}\n- {HERRAMIENTA_PROXY_APP}"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{SKU_UNITARIO} x 2 pasa a la sección de disponibles y la tarjeta de totales se actualiza sin salir del carro: subtotal = S + 2·P y total a pagar = T + 2·P.",
   "form_factor": "app",
   "id": "TC-B2C47-APP-016",
   "name": "Verificar que al reincorporar los productos el total a pagar aumenta en el valor de lo agregado [App] [Logueado]",
   "observation": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "observed": "Causa: la precondición exige cambiar el stock de los productos desde Business Manager ({BM_URL}) durante la prueba, y la automatización no opera BM (fuera de alcance). Acción: ajustar el stock en BM a mano (o dejar un mecanismo de data) y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- Carro asignado a la tienda {TIENDA_RETIRO_001} (retiro en tienda seleccionado)\n- El carro contiene {SKU_VALID_001} y {SKU_UNITARIO} x 2 ({SKU_UNITARIO} sin promociones vigentes)\n- En BM ({BM_INVENTORY_LIST}), en el inventario de la tienda asignada al carro ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 0 y {SKU_UNITARIO} queda como no disponible en el carro\n- En el mismo inventario ({INVENTORY_LIST_TIENDA_RETIRO_001}), el stock de {SKU_UNITARIO} se deja en 2 (restock)",
   "status": "Bloqueado",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito; el usuario anota el precio unitario (P) de {SKU_UNITARIO} y los montos de la tarjeta de totales: subtotal (S) y total a pagar (T).\n3. El sistema muestra el modal \"Están de vuelta\" con los productos recuperados.\n4. El usuario toca \"Entendido\".\n5. El sistema cierra el modal y muestra el toast \"¡Tu carro ha sido actualizado!\".\n6. Sin salir del carro, el usuario revisa la tarjeta de totales.",
   "test_data": "- {APP_BUILD}\n- {APP_PLATFORM}\n- {BM_URL}\n- {SKU_VALID_001}\n- {SKU_UNITARIO}\n- {BM_INVENTORY_LIST}\n- {TIENDA_RETIRO_001}\n- {INVENTORY_LIST_TIENDA_RETIRO_001}\n- {USER_AUTH_001}\n- {BM_ADMIN_USER}\n- {BM_ADMIN_PASSWORD}"
  }
 ]
}
-->
