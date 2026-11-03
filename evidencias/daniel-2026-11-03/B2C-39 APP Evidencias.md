# B2C-39 APP - Evidencias QA (Android)

| Campo | Valor |
|---|---|
| Suite | B2C-39 APP |
| Última actualización | 2026-10-29 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Origen de los TC | Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-39 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 10 |
| **Total** | **10** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-29 | 10 | TC-B2C39-APP-001, TC-B2C39-APP-002, TC-B2C39-APP-003, TC-B2C39-APP-004, TC-B2C39-APP-005, TC-B2C39-APP-006, TC-B2C39-APP-007, TC-B2C39-APP-008, TC-B2C39-APP-009, TC-B2C39-APP-010 |

## Detalle por caso de prueba

### TC-B2C39-APP-001 - Verificar que Reemplazar de un ítem no disponible abre el modal de productos similares [App] [Logueado]

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
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema abre el modal de productos similares (B2C-40).

**Resultado esperado**

Se abre el modal de productos similares de {SKU_NO_DISPONIBLE} (B2C-40).

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.

---

### TC-B2C39-APP-002 - Verificar que el ítem no disponible muestra el CTA Reemplazar y el link de texto Eliminar [App] [Logueado]

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
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa el ítem {SKU_NO_DISPONIBLE} en la sección de no disponibles.

**Resultado esperado**

El ítem muestra el CTA "Reemplazar" y el link de texto "Eliminar"; no se muestra un ícono ✕.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.

---

### TC-B2C39-APP-003 - Verificar que reemplazar por un similar lo agrega a disponibles y quita el no disponible [App] [Logueado]

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
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE} x 1
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario toca "Agregar" en el primer producto similar del modal.
6. El usuario toca "Reemplazar producto".
7. El sistema muestra un estado de carga (loading).

**Resultado esperado**

El similar se agrega a la sección de disponibles con la cantidad seleccionada, {SKU_NO_DISPONIBLE} sale de no disponibles, el resumen de precios se recalcula y se muestra el toast "¡Tu carro ha sido actualizado!".

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.

---

### TC-B2C39-APP-004 - Verificar que un reemplazo parcial deja en no disponibles la cantidad restante [App] [Logueado]

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
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE} x 3
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario toca "Agregar" en el primer producto similar del modal y deja la cantidad en 1.
6. El usuario toca "Reemplazar producto".
7. El sistema muestra un estado de carga (loading).

**Resultado esperado**

El similar se agrega a disponibles con cantidad 1 y {SKU_NO_DISPONIBLE} permanece en no disponibles con cantidad 2 (3 − 1).

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.

---

### TC-B2C39-APP-005 - Verificar que un carro solo con no disponibles muestra la sección expandida y el CTA deshabilitado [App] [Logueado]

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
- El carro contiene solo {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa la sección de no disponibles y el botón "Continuar con la entrega".

**Resultado esperado**

La sección de no disponibles se muestra expandida con badge "Pronto disponible", CTA "Reemplazar" y link "Eliminar"; no hay ítems disponibles y "Continuar con la entrega" está deshabilitado.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.

---

### TC-B2C39-APP-006 - Verificar que eliminar un no disponible sin confirmar mantiene la sección si quedan otros [App] [Logueado]

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
- El carro contiene {SKU_VALID_001}, {SKU_NO_DISPONIBLE} y {SKU_NO_DISPONIBLE_2}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} y {SKU_NO_DISPONIBLE_2} no tienen stock

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {SKU_NO_DISPONIBLE_2} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem {SKU_NO_DISPONIBLE} y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

{SKU_NO_DISPONIBLE} se elimina sin solicitar confirmación y la sección de no disponibles sigue visible con {SKU_NO_DISPONIBLE_2}.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.

---

### TC-B2C39-APP-007 - Verificar que eliminar el último no disponible hace desaparecer la sección [App] [Logueado]

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
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem {SKU_NO_DISPONIBLE} y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra un loading en el shelf del producto.

**Resultado esperado**

{SKU_NO_DISPONIBLE} se elimina sin confirmación y la sección de no disponibles desaparece; {SKU_VALID_001} se mantiene.

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.

---

### TC-B2C39-APP-008 - Verificar que un error al eliminar un no disponible muestra el toast CRT-021 [App] [Logueado]

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
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {CART_ITEM_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario desliza lateralmente el ítem {SKU_NO_DISPONIBLE} y toca el botón rojo "Eliminar" con ícono de tacho que se revela.
4. El sistema muestra el toast de error "No pudimos eliminar el producto del carro. Vuelve a intentarlo" [CRT-021].

**Resultado esperado**

El toast CRT-021 persiste hasta que el usuario lo cierra con la X y {SKU_NO_DISPONIBLE} permanece en no disponibles sin cambios.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C39-APP-009 - Verificar que un error al agregar el sustituto muestra el toast CRT-025 [App] [Logueado]

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
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock
- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {ADD_TO_CART_API_ENDPOINT}

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {ADD_TO_CART_API_ENDPOINT} = TBD
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD
- {HERRAMIENTA_PROXY_APP} = TBD
- {USER_AUTH_001} = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca "Reemplazar" en el ítem {SKU_NO_DISPONIBLE}.
4. El sistema abre el modal de productos similares (B2C-40).
5. El usuario toca "Agregar" en el primer producto similar del modal.
6. El usuario toca "Reemplazar producto".
7. El sistema muestra el toast de error "¡Lo sentimos! No pudimos reemplazar tu producto, vuelve a intentarlo. (CRT-025)".

**Resultado esperado**

Se muestra el toast CRT-025 y {SKU_NO_DISPONIBLE} permanece en la sección de no disponibles sin cambios.

**Resultado obtenido**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

**Observación**

Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.

---

### TC-B2C39-APP-010 - Verificar que un invitado ve la sección de no disponibles con Reemplazar y Eliminar [App] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-29 |
| Form factor | app |
| Navegador | — |
| Plataforma | Android |
| Dispositivo | dispositivo por ADB |

**Precondiciones**

- User type: Guest
- Plataforma: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}
- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock

**Data utilizada**

- {APP_BUILD} = TBD
- {APP_PLATFORM} = iOS
- {SKU_VALID_001} = 000000000000675191-UN
- {SKU_NO_DISPONIBLE} = TBD
- {TIENDA_SIN_STOCK} = TBD

**Pasos ejecutados**

1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa la sección de no disponibles.

**Resultado esperado**

Se muestra la sección de no disponibles con {SKU_NO_DISPONIBLE}, badge "Pronto disponible", CTA "Reemplazar" y link "Eliminar".

**Resultado obtenido**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.

**Observación**

Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.

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
  "suite": "B2C-39 APP",
  "tc_file": "Casos de Prueba/Ejecutados/SP2/Unimarc/B2C-39 APP Test Cases.xlsx",
  "title": "B2C-39 APP - Evidencias QA (Android)",
  "updated_at": "2026-10-29"
 },
 "history": {
  "2026-10-29": [
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
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se abre el modal de productos similares de {SKU_NO_DISPONIBLE} (B2C-40).",
   "form_factor": "app",
   "id": "TC-B2C39-APP-001",
   "name": "Verificar que Reemplazar de un ítem no disponible abre el modal de productos similares [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema abre el modal de productos similares (B2C-40).",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El ítem muestra el CTA \"Reemplazar\" y el link de texto \"Eliminar\"; no se muestra un ícono ✕.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-002",
   "name": "Verificar que el ítem no disponible muestra el CTA Reemplazar y el link de texto Eliminar [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa el ítem {SKU_NO_DISPONIBLE} en la sección de no disponibles.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El similar se agrega a la sección de disponibles con la cantidad seleccionada, {SKU_NO_DISPONIBLE} sale de no disponibles, el resumen de precios se recalcula y se muestra el toast \"¡Tu carro ha sido actualizado!\".",
   "form_factor": "app",
   "id": "TC-B2C39-APP-003",
   "name": "Verificar que reemplazar por un similar lo agrega a disponibles y quita el no disponible [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE} x 1\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario toca \"Agregar\" en el primer producto similar del modal.\n6. El usuario toca \"Reemplazar producto\".\n7. El sistema muestra un estado de carga (loading).",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El similar se agrega a disponibles con cantidad 1 y {SKU_NO_DISPONIBLE} permanece en no disponibles con cantidad 2 (3 − 1).",
   "form_factor": "app",
   "id": "TC-B2C39-APP-004",
   "name": "Verificar que un reemplazo parcial deja en no disponibles la cantidad restante [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE} x 3\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario toca \"Agregar\" en el primer producto similar del modal y deja la cantidad en 1.\n6. El usuario toca \"Reemplazar producto\".\n7. El sistema muestra un estado de carga (loading).",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "La sección de no disponibles se muestra expandida con badge \"Pronto disponible\", CTA \"Reemplazar\" y link \"Eliminar\"; no hay ítems disponibles y \"Continuar con la entrega\" está deshabilitado.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-005",
   "name": "Verificar que un carro solo con no disponibles muestra la sección expandida y el CTA deshabilitado [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene solo {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa la sección de no disponibles y el botón \"Continuar con la entrega\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{SKU_NO_DISPONIBLE} se elimina sin solicitar confirmación y la sección de no disponibles sigue visible con {SKU_NO_DISPONIBLE_2}.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-006",
   "name": "Verificar que eliminar un no disponible sin confirmar mantiene la sección si quedan otros [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001}, {SKU_NO_DISPONIBLE} y {SKU_NO_DISPONIBLE_2}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} y {SKU_NO_DISPONIBLE_2} no tienen stock",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem {SKU_NO_DISPONIBLE} y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra un loading en el shelf del producto.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {SKU_NO_DISPONIBLE_2} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "{SKU_NO_DISPONIBLE} se elimina sin confirmación y la sección de no disponibles desaparece; {SKU_VALID_001} se mantiene.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-007",
   "name": "Verificar que eliminar el último no disponible hace desaparecer la sección [App] [Logueado]",
   "observation": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem {SKU_NO_DISPONIBLE} y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra un loading en el shelf del producto.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "El toast CRT-021 persiste hasta que el usuario lo cierra con la X y {SKU_NO_DISPONIBLE} permanece en no disponibles sin cambios.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-008",
   "name": "Verificar que un error al eliminar un no disponible muestra el toast CRT-021 [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {CART_ITEM_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario desliza lateralmente el ítem {SKU_NO_DISPONIBLE} y toca el botón rojo \"Eliminar\" con ícono de tacho que se revela.\n4. El sistema muestra el toast de error \"No pudimos eliminar el producto del carro. Vuelve a intentarlo\" [CRT-021].",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {CART_ITEM_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra el toast CRT-025 y {SKU_NO_DISPONIBLE} permanece en la sección de no disponibles sin cambios.",
   "form_factor": "app",
   "id": "TC-B2C39-APP-009",
   "name": "Verificar que un error al agregar el sustituto muestra el toast CRT-025 [App] [Logueado]",
   "observation": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "observed": "Falta dato: {HERRAMIENTA_PROXY_APP} sin valor (TBD) en el Excel de data. Cargar los valores y re-ejecutar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock\n- {HERRAMIENTA_PROXY_APP} configurado para devolver error en la request {ADD_TO_CART_API_ENDPOINT}",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca \"Reemplazar\" en el ítem {SKU_NO_DISPONIBLE}.\n4. El sistema abre el modal de productos similares (B2C-40).\n5. El usuario toca \"Agregar\" en el primer producto similar del modal.\n6. El usuario toca \"Reemplazar producto\".\n7. El sistema muestra el toast de error \"¡Lo sentimos! No pudimos reemplazar tu producto, vuelve a intentarlo. (CRT-025)\".",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {ADD_TO_CART_API_ENDPOINT} = TBD\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD\n- {HERRAMIENTA_PROXY_APP} = TBD\n- {USER_AUTH_001} = girolamo_coppo@hotmail.com"
  },
  {
   "browser": "—",
   "device": "dispositivo por ADB",
   "executed_at": "2026-10-29",
   "expected": "Se muestra la sección de no disponibles con {SKU_NO_DISPONIBLE}, badge \"Pronto disponible\", CTA \"Reemplazar\" y link \"Eliminar\".",
   "form_factor": "app",
   "id": "TC-B2C39-APP-010",
   "name": "Verificar que un invitado ve la sección de no disponibles con Reemplazar y Eliminar [App] [Guest]",
   "observation": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.",
   "observed": "Dato que no cumple la precondición: {SKU_NO_DISPONIBLE} aparece «Pronto disponible» y sin botón «Agregar» en la tienda activa, así que no se puede dejar en el carro como no disponible; falta una tienda con stock de ese SKU para agregarlo y luego cambiar a {TIENDA_SIN_STOCK}. Comprobado ejecutando B2C-38 APP (TC 011) en Android; este TC no se ejecutó por separado.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Plataforma: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene {SKU_VALID_001} y {SKU_NO_DISPONIBLE}\n- La tienda activa es {TIENDA_SIN_STOCK}, donde {SKU_NO_DISPONIBLE} no tiene stock",
   "status": "Bloqueado Data",
   "steps": "1. El usuario abre la App {APP_BUILD} y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa la sección de no disponibles.",
   "test_data": "- {APP_BUILD} = TBD\n- {APP_PLATFORM} = iOS\n- {SKU_VALID_001} = 000000000000675191-UN\n- {SKU_NO_DISPONIBLE} = TBD\n- {TIENDA_SIN_STOCK} = TBD"
  }
 ]
}
-->
