# Instrucciones al picker

| Campo | Valor |
|---|---|
| Suite | B2C-45 |
| Última actualización | 2026-10-21 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-45 WEB Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Aprobado | 20 |
| Bloqueado Data | 8 |
| **Total** | **28** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-21 | 10 | TC-B2C45-D-004, TC-B2C45-D-006, TC-B2C45-D-012, TC-B2C45-D-013, TC-B2C45-D-014, TC-B2C45-M-004, TC-B2C45-M-006, TC-B2C45-M-012, TC-B2C45-M-013, TC-B2C45-M-014 |
| 2026-10-20 | 28 | TC-B2C45-D-001, TC-B2C45-D-002, TC-B2C45-D-003, TC-B2C45-D-004, TC-B2C45-D-005, TC-B2C45-D-006, TC-B2C45-D-007, TC-B2C45-D-008, TC-B2C45-D-009, TC-B2C45-D-010, TC-B2C45-D-011, TC-B2C45-D-012, TC-B2C45-D-013, TC-B2C45-D-014, TC-B2C45-M-001, TC-B2C45-M-002, TC-B2C45-M-003, TC-B2C45-M-004, TC-B2C45-M-005, TC-B2C45-M-006, TC-B2C45-M-007, TC-B2C45-M-008, TC-B2C45-M-009, TC-B2C45-M-010, TC-B2C45-M-011, TC-B2C45-M-012, TC-B2C45-M-013, TC-B2C45-M-014 |

## Detalle por caso de prueba

### TC-B2C45-D-001 - Verificar que Agregar instrucciones abre el modal de nuevo comentario con sus elementos [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".

**Resultado esperado**

El modal "¿Te gustaría algo en especial?" muestra X de cierre, miniatura + tienda + nombre + unidad de medida, campo "Instrucciones" con contador 0/150 y el CTA "Agregar" deshabilitado.

**Resultado obtenido**

El modal '¿Te gustaría algo en especial?' muestra la X, miniatura, tienda (Unimarc Mirador), nombre, '1 un.', el campo 'Instrucciones' con '0 / 150 caracteres' y el CTA deshabilitado. El CTA se llama 'Agregar comentario' (la planilla dice 'Agregar').

**Observación**

El modal '¿Te gustaría algo en especial?' muestra la X, miniatura, tienda (Unimarc Mirador), nombre, '1 un.', el campo 'Instrucciones' con '0 / 150 caracteres' y el CTA deshabilitado. El CTA se llama 'Agregar comentario' (la planilla dice 'Agregar').

**Evidencia**

![Paso 4 — modal te gustaria algo en especial](<B2C-45 Evidencias/TC-B2C45-D-001-p04-modal-te-gustaria-algo-en-especial.png>)

---

### TC-B2C45-D-002 - Verificar que al escribir el contador se actualiza y se habilita Agregar [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo "Instrucciones".

**Resultado esperado**

El contador muestra la cantidad de caracteres de {TEXTO_INSTRUCCION_001} sobre 150 y el CTA "Agregar" queda habilitado.

**Resultado obtenido**

Al escribir {TEXTO_INSTRUCCION_001} (36 caracteres) el contador muestra '36 / 150 caracteres' y 'Agregar comentario' queda habilitado.

**Evidencia**

![Paso 5 — instruccion escrita](<B2C-45 Evidencias/TC-B2C45-D-002-p05-instruccion-escrita.png>)

---

### TC-B2C45-D-003 - Verificar que el campo de instrucciones no admite más de 150 caracteres [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_151_CARACTERES} = Éste texto debe ser suficientemente larguisimo como para que se trunque y no aparezca completo en la interfaz, además debe superar los 150 caracteres de longitud

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario pega {TEXTO_151_CARACTERES} en el campo "Instrucciones".

**Resultado esperado**

El campo conserva solo 150 caracteres y el contador muestra 150/150.

**Resultado obtenido**

Al pegar {TEXTO_151_CARACTERES} (161 caracteres) el campo conserva 150 y el contador muestra '150 / 150 caracteres'.

**Evidencia**

![Paso 5 — texto de 161 caracteres pegado](<B2C-45 Evidencias/TC-B2C45-D-003-p05-texto-de-161-caracteres-pegado.png>)

---

### TC-B2C45-D-004 - Verificar que confirmar la instrucción la guarda y el shelf muestra la nota [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones
- {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo "Instrucciones".
6. El usuario hace clic en "Agregar".
7. El sistema muestra loading en el CTA mientras guarda.

**Resultado esperado**

El modal se cierra, el shelf muestra "Nota: {TEXTO_INSTRUCCION_001}" + "Editar instrucciones" y aparece el toast "Tu instrucción fue agregada con éxito" (4 s + X).

**Resultado obtenido**

Causa: {TEXTO_INSTRUCCION_001} ('Primera intrucción de entrega válida') tiene 36 caracteres y la precondición pide 30 o menos. Se ejecutaron los pasos: la instrucción se guarda, aparece el toast «Tu instrucción fue agregada con éxito» y el shelf muestra «Editar instrucciones», pero la nota se ve truncada («Nota: Primera intrucción de entrega …», regla comprobada en D/M-005) y nunca como «Nota: {TEXTO_INSTRUCCION_001}» completo. La fila se contradice con su data. Acción: cargar un {TEXTO_INSTRUCCION_001} de 30 caracteres o menos. Re-verificado en vivo el 2026-10-21.

**Observación**

Causa: {TEXTO_INSTRUCCION_001} ('Primera intrucción de entrega válida') tiene 36 caracteres y la precondición pide 30 o menos. Se ejecutaron los pasos: la instrucción se guarda, aparece el toast «Tu instrucción fue agregada con éxito» y el shelf muestra «Editar instrucciones», pero la nota se ve truncada («Nota: Primera intrucción de entrega …», regla comprobada en D/M-005) y nunca como «Nota: {TEXTO_INSTRUCCION_001}» completo. La fila se contradice con su data. Acción: cargar un {TEXTO_INSTRUCCION_001} de 30 caracteres o menos. Re-verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 5 — modal con la instruccion escrita](<B2C-45 Evidencias/TC-B2C45-D-004-p05-modal-con-la-instruccion-escrita.png>)

![Paso 7 — shelf con la nota](<B2C-45 Evidencias/TC-B2C45-D-004-p07-shelf-con-la-nota.png>)

---

### TC-B2C45-D-005 - Verificar que una nota de más de 30 caracteres se trunca con puntos suspensivos en el shelf [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones
- {TEXTO_INSTRUCCION_LARGO} tiene entre 31 y 150 caracteres

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_LARGO} = Éste texto debe ser suficientemente largo como para que se trunque

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario escribe {TEXTO_INSTRUCCION_LARGO} en el campo "Instrucciones".
6. El usuario hace clic en "Agregar".

**Resultado esperado**

El shelf muestra "Nota:" + los primeros 30 caracteres de {TEXTO_INSTRUCCION_LARGO} seguidos de "…".

**Resultado obtenido**

Con {TEXTO_INSTRUCCION_LARGO} el shelf muestra 'Nota:' + los primeros 30 caracteres + '…'.

**Evidencia**

![Paso 6 — nota truncada en el shelf](<B2C-45 Evidencias/TC-B2C45-D-005-p06-nota-truncada-en-el-shelf.png>)

---

### TC-B2C45-D-006 - Verificar que un invitado puede agregar una instrucción al picker [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} sin instrucciones

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo "Instrucciones".
6. El usuario hace clic en "Agregar".

**Resultado esperado**

El comentario se guarda: el shelf muestra "Nota: {TEXTO_INSTRUCCION_001}" + "Editar instrucciones" y aparece el toast de confirmación.

**Resultado obtenido**

El invitado con la dirección de {DIRECCION_DESPACHO_003} y {SKU_VALID_001} en el carro abre «¿Te gustaría algo en especial?», escribe la instrucción y confirma: se guarda, aparece el toast «Tu instrucción fue agregada con éxito» y el shelf muestra «Editar instrucciones» y la nota truncada a 30 caracteres con «…» (regla de D/M-005, porque {TEXTO_INSTRUCCION_001} tiene 36).

**Evidencia**

![Paso 4 — modal te gustaria algo en especial](<B2C-45 Evidencias/TC-B2C45-D-006-p04-modal-te-gustaria-algo-en-especial.png>)

![Paso 7 — shelf con la nota del invitado](<B2C-45 Evidencias/TC-B2C45-D-006-p07-shelf-con-la-nota-del-invitado.png>)

---

### TC-B2C45-D-007 - Verificar que Editar instrucciones abre el modal con el comentario precargado [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.

**Resultado esperado**

El modal muestra {TEXTO_INSTRUCCION_001} precargado, el contador con su cantidad de caracteres y las opciones "Confirmar" y "Eliminar comentario".

**Resultado obtenido**

'Editar instrucciones' abre el modal con {TEXTO_INSTRUCCION_001} precargado, el contador '36 / 150 caracteres', 'Confirmar' y 'Eliminar comentario'.

**Evidencia**

![Paso 4 — modal de edicion](<B2C-45 Evidencias/TC-B2C45-D-007-p04-modal-de-edicion.png>)

---

### TC-B2C45-D-008 - Verificar que confirmar la edición reemplaza el comentario y muestra el toast [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{TEXTO_INSTRUCCION_002} = Segunda instrucción: Entreguenlo con cuidado (es una sorpresa)

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario reemplaza el texto por {TEXTO_INSTRUCCION_002}.
6. El usuario hace clic en "Confirmar".
7. El sistema muestra loading en el CTA mientras actualiza.

**Resultado esperado**

El modal se cierra, el shelf muestra "Nota: {TEXTO_INSTRUCCION_002}" (el anterior se reemplaza) y aparece el toast "Tu instrucción fue agregada con éxito" (4 s + X).

**Resultado obtenido**

Al reemplazar por {TEXTO_INSTRUCCION_002} y 'Confirmar' aparece el toast 'Tu instrucción fue agregada con éxito' y el shelf muestra la nueva nota (truncada a 30 caracteres + '…', porque {TEXTO_INSTRUCCION_002} tiene 62).

**Evidencia**

![Paso 7 — shelf con la nota reemplazada](<B2C-45 Evidencias/TC-B2C45-D-008-p07-shelf-con-la-nota-reemplazada.png>)

---

### TC-B2C45-D-009 - Verificar que Eliminar comentario muestra el modal de confirmación [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario hace clic en "Eliminar comentario".
6. El sistema muestra el modal de confirmación "Eliminar comentario".

**Resultado esperado**

El modal muestra imagen, título "Eliminar comentario", subtítulo "¿Desea eliminar tu instrucción" y las opciones "Sí, eliminar" y "No, gracias".

**Resultado obtenido**

'Eliminar comentario' abre la confirmación con imagen, título 'Eliminar comentario', subtítulo '¿Deseas eliminar tu instrucción?' (la planilla dice '¿Desea…'), 'Sí, eliminar' y 'No, gracias'.

**Observación**

'Eliminar comentario' abre la confirmación con imagen, título 'Eliminar comentario', subtítulo '¿Deseas eliminar tu instrucción?' (la planilla dice '¿Desea…'), 'Sí, eliminar' y 'No, gracias'.

**Evidencia**

![Paso 6 — confirmacion eliminar comentario](<B2C-45 Evidencias/TC-B2C45-D-009-p06-confirmacion-eliminar-comentario.png>)

---

### TC-B2C45-D-010 - Verificar que Sí, eliminar quita la instrucción y el shelf vuelve a Agregar instrucciones [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario hace clic en "Eliminar comentario".
6. El sistema muestra el modal de confirmación "Eliminar comentario".
7. El usuario hace clic en "Sí, eliminar".
8. El sistema muestra loading en el CTA mientras elimina.

**Resultado esperado**

El modal se cierra, la nota desaparece del shelf, se muestra "Agregar instrucciones" y aparece el toast "Tu comentario se ha eliminado" (4 s + X).

**Resultado obtenido**

'Sí, eliminar' quita la nota del shelf, vuelve 'Agregar instrucciones' y aparece el toast 'Tu comentario se ha eliminado'.

**Evidencia**

![Paso 8 — shelf sin nota](<B2C-45 Evidencias/TC-B2C45-D-010-p08-shelf-sin-nota.png>)

---

### TC-B2C45-D-011 - Verificar que No, gracias vuelve al modal de edición sin eliminar el comentario [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario hace clic en "Eliminar comentario".
6. El sistema muestra el modal de confirmación "Eliminar comentario".
7. El usuario hace clic en "No, gracias".

**Resultado esperado**

Se cierra el modal de confirmación y se vuelve al modal de edición con {TEXTO_INSTRUCCION_001} sin cambios.

**Resultado obtenido**

'No, gracias' cierra la confirmación y vuelve al modal de edición con {TEXTO_INSTRUCCION_001} sin cambios.

**Evidencia**

![Paso 7 — modal de edicion tras no gracias](<B2C-45 Evidencias/TC-B2C45-D-011-p07-modal-de-edicion-tras-no-gracias.png>)

---

### TC-B2C45-D-012 - Verificar que un error al guardar una instrucción nueva muestra CRT-026 [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones
- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMENTARIO_API_ENDPOINT} = None

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo "Instrucciones".
6. El usuario hace clic en "Agregar".

**Resultado esperado**

El modal se cierra, aparece el toast "No pudimos agregar tu comentario. Vuelve a intentarlo." (CRT-026) hasta cerrarlo con la X y el shelf mantiene "Agregar instrucciones".

**Resultado obtenido**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.

**Observación**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C45-D-013 - Verificar que un error al eliminar desde el modal de edición muestra CRT-027 [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada
- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMENTARIO_API_ENDPOINT} = None

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario hace clic en "Eliminar comentario".
6. El sistema muestra el modal de confirmación "Eliminar comentario".
7. El usuario hace clic en "Sí, eliminar".

**Resultado esperado**

El modal se cierra, aparece el toast "No pudimos eliminar tu comentario. Inténtalo nuevamente." (CRT-027) hasta cerrarlo con la X y la nota permanece en el shelf.

**Resultado obtenido**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.

**Observación**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C45-D-014 - Verificar que un error al editar muestra CRT-075 y el comentario original se mantiene [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada
- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMENTARIO_API_ENDPOINT} = None

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{TEXTO_INSTRUCCION_002} = Segunda instrucción: Entreguenlo con cuidado (es una sorpresa)

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario reemplaza el texto por {TEXTO_INSTRUCCION_002}.
6. El usuario hace clic en "Confirmar".

**Resultado esperado**

El modal se cierra, aparece el toast "No pudimos editar tu comentario. Inténtalo nuevamente." (CRT-075) hasta cerrarlo con la X y el shelf mantiene {TEXTO_INSTRUCCION_001}.

**Resultado obtenido**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.

**Observación**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C45-M-001 - Verificar que Agregar instrucciones abre el modal de nuevo comentario con sus elementos [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".

**Resultado esperado**

El modal "¿Te gustaría algo en especial?" muestra X de cierre, miniatura + tienda + nombre + unidad de medida, campo "Instrucciones" con contador 0/150 y el CTA "Agregar" deshabilitado.

**Resultado obtenido**

El modal '¿Te gustaría algo en especial?' muestra la X, miniatura, tienda (Unimarc Mirador), nombre, '1 un.', el campo 'Instrucciones' con '0 / 150 caracteres' y el CTA deshabilitado. El CTA se llama 'Agregar comentario' (la planilla dice 'Agregar').

**Observación**

El modal '¿Te gustaría algo en especial?' muestra la X, miniatura, tienda (Unimarc Mirador), nombre, '1 un.', el campo 'Instrucciones' con '0 / 150 caracteres' y el CTA deshabilitado. El CTA se llama 'Agregar comentario' (la planilla dice 'Agregar').

**Evidencia**

![Paso 4 — modal te gustaria algo en especial](<B2C-45 Evidencias/TC-B2C45-M-001-p04-modal-te-gustaria-algo-en-especial.png>)

---

### TC-B2C45-M-002 - Verificar que al escribir el contador se actualiza y se habilita Agregar [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo "Instrucciones".

**Resultado esperado**

El contador muestra la cantidad de caracteres de {TEXTO_INSTRUCCION_001} sobre 150 y el CTA "Agregar" queda habilitado.

**Resultado obtenido**

Al escribir {TEXTO_INSTRUCCION_001} (36 caracteres) el contador muestra '36 / 150 caracteres' y 'Agregar comentario' queda habilitado.

**Evidencia**

![Paso 5 — instruccion escrita](<B2C-45 Evidencias/TC-B2C45-M-002-p05-instruccion-escrita.png>)

---

### TC-B2C45-M-003 - Verificar que el campo de instrucciones no admite más de 150 caracteres [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_151_CARACTERES} = Éste texto debe ser suficientemente larguisimo como para que se trunque y no aparezca completo en la interfaz, además debe superar los 150 caracteres de longitud

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario pega {TEXTO_151_CARACTERES} en el campo "Instrucciones".

**Resultado esperado**

El campo conserva solo 150 caracteres y el contador muestra 150/150.

**Resultado obtenido**

Al pegar {TEXTO_151_CARACTERES} (161 caracteres) el campo conserva 150 y el contador muestra '150 / 150 caracteres'.

**Evidencia**

![Paso 5 — texto de 161 caracteres pegado](<B2C-45 Evidencias/TC-B2C45-M-003-p05-texto-de-161-caracteres-pegado.png>)

---

### TC-B2C45-M-004 - Verificar que confirmar la instrucción la guarda y el shelf muestra la nota [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones
- {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo "Instrucciones".
6. El usuario toca "Agregar".
7. El sistema muestra loading en el CTA mientras guarda.

**Resultado esperado**

El modal se cierra, el shelf muestra "Nota: {TEXTO_INSTRUCCION_001}" + "Editar instrucciones" y aparece el toast "Tu instrucción fue agregada con éxito" (4 s + X).

**Resultado obtenido**

Causa: {TEXTO_INSTRUCCION_001} ('Primera intrucción de entrega válida') tiene 36 caracteres y la precondición pide 30 o menos. Se ejecutaron los pasos: la instrucción se guarda, aparece el toast «Tu instrucción fue agregada con éxito» y el shelf muestra «Editar instrucciones», pero la nota se ve truncada («Nota: Primera intrucción de entrega …», regla comprobada en D/M-005) y nunca como «Nota: {TEXTO_INSTRUCCION_001}» completo. La fila se contradice con su data. Acción: cargar un {TEXTO_INSTRUCCION_001} de 30 caracteres o menos. Re-verificado en vivo el 2026-10-21.

**Observación**

Causa: {TEXTO_INSTRUCCION_001} ('Primera intrucción de entrega válida') tiene 36 caracteres y la precondición pide 30 o menos. Se ejecutaron los pasos: la instrucción se guarda, aparece el toast «Tu instrucción fue agregada con éxito» y el shelf muestra «Editar instrucciones», pero la nota se ve truncada («Nota: Primera intrucción de entrega …», regla comprobada en D/M-005) y nunca como «Nota: {TEXTO_INSTRUCCION_001}» completo. La fila se contradice con su data. Acción: cargar un {TEXTO_INSTRUCCION_001} de 30 caracteres o menos. Re-verificado en vivo el 2026-10-21.

**Evidencia**

![Paso 5 — modal con la instruccion escrita](<B2C-45 Evidencias/TC-B2C45-M-004-p05-modal-con-la-instruccion-escrita.png>)

![Paso 7 — shelf con la nota](<B2C-45 Evidencias/TC-B2C45-M-004-p07-shelf-con-la-nota.png>)

---

### TC-B2C45-M-005 - Verificar que una nota de más de 30 caracteres se trunca con puntos suspensivos en el shelf [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones
- {TEXTO_INSTRUCCION_LARGO} tiene entre 31 y 150 caracteres

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_LARGO} = Éste texto debe ser suficientemente largo como para que se trunque

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario escribe {TEXTO_INSTRUCCION_LARGO} en el campo "Instrucciones".
6. El usuario toca "Agregar".

**Resultado esperado**

El shelf muestra "Nota:" + los primeros 30 caracteres de {TEXTO_INSTRUCCION_LARGO} seguidos de "…".

**Resultado obtenido**

Con {TEXTO_INSTRUCCION_LARGO} el shelf muestra 'Nota:' + los primeros 30 caracteres + '…'.

**Evidencia**

![Paso 6 — nota truncada en el shelf](<B2C-45 Evidencias/TC-B2C45-M-005-p06-nota-truncada-en-el-shelf.png>)

---

### TC-B2C45-M-006 - Verificar que un invitado puede agregar una instrucción al picker [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_VALID_001} sin instrucciones

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo "Instrucciones".
6. El usuario toca "Agregar".

**Resultado esperado**

El comentario se guarda: el shelf muestra "Nota: {TEXTO_INSTRUCCION_001}" + "Editar instrucciones" y aparece el toast de confirmación.

**Resultado obtenido**

El invitado con la dirección de {DIRECCION_DESPACHO_003} y {SKU_VALID_001} en el carro abre «¿Te gustaría algo en especial?», escribe la instrucción y confirma: se guarda, aparece el toast «Tu instrucción fue agregada con éxito» y el shelf muestra «Editar instrucciones» y la nota truncada a 30 caracteres con «…» (regla de D/M-005, porque {TEXTO_INSTRUCCION_001} tiene 36).

**Evidencia**

![Paso 4 — modal te gustaria algo en especial](<B2C-45 Evidencias/TC-B2C45-M-006-p04-modal-te-gustaria-algo-en-especial.png>)

![Paso 7 — shelf con la nota del invitado](<B2C-45 Evidencias/TC-B2C45-M-006-p07-shelf-con-la-nota-del-invitado.png>)

---

### TC-B2C45-M-007 - Verificar que Editar instrucciones abre el modal con el comentario precargado [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.

**Resultado esperado**

El modal muestra {TEXTO_INSTRUCCION_001} precargado, el contador con su cantidad de caracteres y las opciones "Confirmar" y "Eliminar comentario".

**Resultado obtenido**

'Editar instrucciones' abre el modal con {TEXTO_INSTRUCCION_001} precargado, el contador '36 / 150 caracteres', 'Confirmar' y 'Eliminar comentario'.

**Evidencia**

![Paso 4 — modal de edicion](<B2C-45 Evidencias/TC-B2C45-M-007-p04-modal-de-edicion.png>)

---

### TC-B2C45-M-008 - Verificar que confirmar la edición reemplaza el comentario y muestra el toast [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{TEXTO_INSTRUCCION_002} = Segunda instrucción: Entreguenlo con cuidado (es una sorpresa)

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario reemplaza el texto por {TEXTO_INSTRUCCION_002}.
6. El usuario toca "Confirmar".
7. El sistema muestra loading en el CTA mientras actualiza.

**Resultado esperado**

El modal se cierra, el shelf muestra "Nota: {TEXTO_INSTRUCCION_002}" (el anterior se reemplaza) y aparece el toast "Tu instrucción fue agregada con éxito" (4 s + X).

**Resultado obtenido**

Al reemplazar por {TEXTO_INSTRUCCION_002} y 'Confirmar' aparece el toast 'Tu instrucción fue agregada con éxito' y el shelf muestra la nueva nota (truncada a 30 caracteres + '…', porque {TEXTO_INSTRUCCION_002} tiene 62).

**Evidencia**

![Paso 7 — shelf con la nota reemplazada](<B2C-45 Evidencias/TC-B2C45-M-008-p07-shelf-con-la-nota-reemplazada.png>)

---

### TC-B2C45-M-009 - Verificar que Eliminar comentario muestra el modal de confirmación [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario toca "Eliminar comentario".
6. El sistema muestra el modal de confirmación "Eliminar comentario".

**Resultado esperado**

El modal muestra imagen, título "Eliminar comentario", subtítulo "¿Desea eliminar tu instrucción" y las opciones "Sí, eliminar" y "No, gracias".

**Resultado obtenido**

'Eliminar comentario' abre la confirmación con imagen, título 'Eliminar comentario', subtítulo '¿Deseas eliminar tu instrucción?' (la planilla dice '¿Desea…'), 'Sí, eliminar' y 'No, gracias'.

**Observación**

'Eliminar comentario' abre la confirmación con imagen, título 'Eliminar comentario', subtítulo '¿Deseas eliminar tu instrucción?' (la planilla dice '¿Desea…'), 'Sí, eliminar' y 'No, gracias'.

**Evidencia**

![Paso 6 — confirmacion eliminar comentario](<B2C-45 Evidencias/TC-B2C45-M-009-p06-confirmacion-eliminar-comentario.png>)

---

### TC-B2C45-M-010 - Verificar que Sí, eliminar quita la instrucción y el shelf vuelve a Agregar instrucciones [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario toca "Eliminar comentario".
6. El sistema muestra el modal de confirmación "Eliminar comentario".
7. El usuario toca "Sí, eliminar".
8. El sistema muestra loading en el CTA mientras elimina.

**Resultado esperado**

El modal se cierra, la nota desaparece del shelf, se muestra "Agregar instrucciones" y aparece el toast "Tu comentario se ha eliminado" (4 s + X).

**Resultado obtenido**

'Sí, eliminar' quita la nota del shelf, vuelve 'Agregar instrucciones' y aparece el toast 'Tu comentario se ha eliminado'.

**Evidencia**

![Paso 8 — shelf sin nota](<B2C-45 Evidencias/TC-B2C45-M-010-p08-shelf-sin-nota.png>)

---

### TC-B2C45-M-011 - Verificar que No, gracias vuelve al modal de edición sin eliminar el comentario [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-20 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (cuenta de comprador)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario toca "Eliminar comentario".
6. El sistema muestra el modal de confirmación "Eliminar comentario".
7. El usuario toca "No, gracias".

**Resultado esperado**

Se cierra el modal de confirmación y se vuelve al modal de edición con {TEXTO_INSTRUCCION_001} sin cambios.

**Resultado obtenido**

'No, gracias' cierra la confirmación y vuelve al modal de edición con {TEXTO_INSTRUCCION_001} sin cambios.

**Evidencia**

![Paso 7 — modal de edicion tras no gracias](<B2C-45 Evidencias/TC-B2C45-M-011-p07-modal-de-edicion-tras-no-gracias.png>)

---

### TC-B2C45-M-012 - Verificar que un error al guardar una instrucción nueva muestra CRT-026 [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} sin instrucciones
- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMENTARIO_API_ENDPOINT} = None

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Agregar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal "¿Te gustaría algo en especial?".
5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo "Instrucciones".
6. El usuario toca "Agregar".

**Resultado esperado**

El modal se cierra, aparece el toast "No pudimos agregar tu comentario. Vuelve a intentarlo." (CRT-026) hasta cerrarlo con la X y el shelf mantiene "Agregar instrucciones".

**Resultado obtenido**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.

**Observación**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C45-M-013 - Verificar que un error al eliminar desde el modal de edición muestra CRT-027 [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada
- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMENTARIO_API_ENDPOINT} = None

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario toca "Eliminar comentario".
6. El sistema muestra el modal de confirmación "Eliminar comentario".
7. El usuario toca "Sí, eliminar".

**Resultado esperado**

El modal se cierra, aparece el toast "No pudimos eliminar tu comentario. Inténtalo nuevamente." (CRT-027) hasta cerrarlo con la X y la nota permanece en el shelf.

**Resultado obtenido**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.

**Observación**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.

---

### TC-B2C45-M-014 - Verificar que un error al editar muestra CRT-075 y el comentario original se mantiene [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-21 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-45.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta {USER_AUTH_001}
- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada
- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)

**Data utilizada**

{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/

{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart

{COMENTARIO_API_ENDPOINT} = None

{SKU_VALID_001} = 000000000000675191-UN

{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida

{TEXTO_INSTRUCCION_002} = Segunda instrucción: Entreguenlo con cuidado (es una sorpresa)

{USER_AUTH_001} = (contraseña de la cuenta)

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca "Editar instrucciones" en el shelf de {SKU_VALID_001}.
4. El sistema abre el modal de edición con el comentario precargado.
5. El usuario reemplaza el texto por {TEXTO_INSTRUCCION_002}.
6. El usuario toca "Confirmar".

**Resultado esperado**

El modal se cierra, aparece el toast "No pudimos editar tu comentario. Inténtalo nuevamente." (CRT-075) hasta cerrarlo con la X y el shelf mantiene {TEXTO_INSTRUCCION_001}.

**Resultado obtenido**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.

**Observación**

Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.

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
  "suite": "B2C-45",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-45 WEB Test Cases.xlsx",
  "title": "Instrucciones al picker",
  "updated_at": "2026-10-21"
 },
 "history": {
  "2026-10-20": [
   "TC-B2C45-D-001",
   "TC-B2C45-D-002",
   "TC-B2C45-D-003",
   "TC-B2C45-D-004",
   "TC-B2C45-D-005",
   "TC-B2C45-D-006",
   "TC-B2C45-D-007",
   "TC-B2C45-D-008",
   "TC-B2C45-D-009",
   "TC-B2C45-D-010",
   "TC-B2C45-D-011",
   "TC-B2C45-D-012",
   "TC-B2C45-D-013",
   "TC-B2C45-D-014",
   "TC-B2C45-M-001",
   "TC-B2C45-M-002",
   "TC-B2C45-M-003",
   "TC-B2C45-M-004",
   "TC-B2C45-M-005",
   "TC-B2C45-M-006",
   "TC-B2C45-M-007",
   "TC-B2C45-M-008",
   "TC-B2C45-M-009",
   "TC-B2C45-M-010",
   "TC-B2C45-M-011",
   "TC-B2C45-M-012",
   "TC-B2C45-M-013",
   "TC-B2C45-M-014"
  ],
  "2026-10-21": [
   "TC-B2C45-D-004",
   "TC-B2C45-D-006",
   "TC-B2C45-D-012",
   "TC-B2C45-D-013",
   "TC-B2C45-D-014",
   "TC-B2C45-M-004",
   "TC-B2C45-M-006",
   "TC-B2C45-M-012",
   "TC-B2C45-M-013",
   "TC-B2C45-M-014"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal \"¿Te gustaría algo en especial?\" muestra X de cierre, miniatura + tienda + nombre + unidad de medida, campo \"Instrucciones\" con contador 0/150 y el CTA \"Agregar\" deshabilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-001",
   "name": "Verificar que Agregar instrucciones abre el modal de nuevo comentario con sus elementos [Desktop] [Logueado]",
   "observation": "El modal '¿Te gustaría algo en especial?' muestra la X, miniatura, tienda (Unimarc Mirador), nombre, '1 un.', el campo 'Instrucciones' con '0 / 150 caracteres' y el CTA deshabilitado. El CTA se llama 'Agregar comentario' (la planilla dice 'Agregar').",
   "observed": "El modal '¿Te gustaría algo en especial?' muestra la X, miniatura, tienda (Unimarc Mirador), nombre, '1 un.', el campo 'Instrucciones' con '0 / 150 caracteres' y el CTA deshabilitado. El CTA se llama 'Agregar comentario' (la planilla dice 'Agregar').",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "screenshots": [
    {
     "caption": "Paso 4 — modal te gustaria algo en especial",
     "file": "TC-B2C45-D-001-p04-modal-te-gustaria-algo-en-especial.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El contador muestra la cantidad de caracteres de {TEXTO_INSTRUCCION_001} sobre 150 y el CTA \"Agregar\" queda habilitado.",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-002",
   "name": "Verificar que al escribir el contador se actualiza y se habilita Agregar [Desktop] [Logueado]",
   "observed": "Al escribir {TEXTO_INSTRUCCION_001} (36 caracteres) el contador muestra '36 / 150 caracteres' y 'Agregar comentario' queda habilitado.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "screenshots": [
    {
     "caption": "Paso 5 — instruccion escrita",
     "file": "TC-B2C45-D-002-p05-instruccion-escrita.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El campo conserva solo 150 caracteres y el contador muestra 150/150.",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-003",
   "name": "Verificar que el campo de instrucciones no admite más de 150 caracteres [Desktop] [Logueado]",
   "observed": "Al pegar {TEXTO_151_CARACTERES} (161 caracteres) el campo conserva 150 y el contador muestra '150 / 150 caracteres'.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "screenshots": [
    {
     "caption": "Paso 5 — texto de 161 caracteres pegado",
     "file": "TC-B2C45-D-003-p05-texto-de-161-caracteres-pegado.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario pega {TEXTO_151_CARACTERES} en el campo \"Instrucciones\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_151_CARACTERES} = Éste texto debe ser suficientemente larguisimo como para que se trunque y no aparezca completo en la interfaz, además debe superar los 150 caracteres de longitud\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal se cierra, el shelf muestra \"Nota: {TEXTO_INSTRUCCION_001}\" + \"Editar instrucciones\" y aparece el toast \"Tu instrucción fue agregada con éxito\" (4 s + X).",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-004",
   "name": "Verificar que confirmar la instrucción la guarda y el shelf muestra la nota [Desktop] [Logueado]",
   "observation": "Causa: {TEXTO_INSTRUCCION_001} ('Primera intrucción de entrega válida') tiene 36 caracteres y la precondición pide 30 o menos. Se ejecutaron los pasos: la instrucción se guarda, aparece el toast «Tu instrucción fue agregada con éxito» y el shelf muestra «Editar instrucciones», pero la nota se ve truncada («Nota: Primera intrucción de entrega …», regla comprobada en D/M-005) y nunca como «Nota: {TEXTO_INSTRUCCION_001}» completo. La fila se contradice con su data. Acción: cargar un {TEXTO_INSTRUCCION_001} de 30 caracteres o menos. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: {TEXTO_INSTRUCCION_001} ('Primera intrucción de entrega válida') tiene 36 caracteres y la precondición pide 30 o menos. Se ejecutaron los pasos: la instrucción se guarda, aparece el toast «Tu instrucción fue agregada con éxito» y el shelf muestra «Editar instrucciones», pero la nota se ve truncada («Nota: Primera intrucción de entrega …», regla comprobada en D/M-005) y nunca como «Nota: {TEXTO_INSTRUCCION_001}» completo. La fila se contradice con su data. Acción: cargar un {TEXTO_INSTRUCCION_001} de 30 caracteres o menos. Re-verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones\n- {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos",
   "screenshots": [
    {
     "caption": "Paso 5 — modal con la instruccion escrita",
     "file": "TC-B2C45-D-004-p05-modal-con-la-instruccion-escrita.png"
    },
    {
     "caption": "Paso 7 — shelf con la nota",
     "file": "TC-B2C45-D-004-p07-shelf-con-la-nota.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".\n6. El usuario hace clic en \"Agregar\".\n7. El sistema muestra loading en el CTA mientras guarda.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El shelf muestra \"Nota:\" + los primeros 30 caracteres de {TEXTO_INSTRUCCION_LARGO} seguidos de \"…\".",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-005",
   "name": "Verificar que una nota de más de 30 caracteres se trunca con puntos suspensivos en el shelf [Desktop] [Logueado]",
   "observed": "Con {TEXTO_INSTRUCCION_LARGO} el shelf muestra 'Nota:' + los primeros 30 caracteres + '…'.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones\n- {TEXTO_INSTRUCCION_LARGO} tiene entre 31 y 150 caracteres",
   "screenshots": [
    {
     "caption": "Paso 6 — nota truncada en el shelf",
     "file": "TC-B2C45-D-005-p06-nota-truncada-en-el-shelf.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_LARGO} en el campo \"Instrucciones\".\n6. El usuario hace clic en \"Agregar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_LARGO} = Éste texto debe ser suficientemente largo como para que se trunque\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El comentario se guarda: el shelf muestra \"Nota: {TEXTO_INSTRUCCION_001}\" + \"Editar instrucciones\" y aparece el toast de confirmación.",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-006",
   "name": "Verificar que un invitado puede agregar una instrucción al picker [Desktop] [Guest]",
   "observed": "El invitado con la dirección de {DIRECCION_DESPACHO_003} y {SKU_VALID_001} en el carro abre «¿Te gustaría algo en especial?», escribe la instrucción y confirma: se guarda, aparece el toast «Tu instrucción fue agregada con éxito» y el shelf muestra «Editar instrucciones» y la nota truncada a 30 caracteres con «…» (regla de D/M-005, porque {TEXTO_INSTRUCCION_001} tiene 36).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "screenshots": [
    {
     "caption": "Paso 4 — modal te gustaria algo en especial",
     "file": "TC-B2C45-D-006-p04-modal-te-gustaria-algo-en-especial.png"
    },
    {
     "caption": "Paso 7 — shelf con la nota del invitado",
     "file": "TC-B2C45-D-006-p07-shelf-con-la-nota-del-invitado.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".\n6. El usuario hace clic en \"Agregar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal muestra {TEXTO_INSTRUCCION_001} precargado, el contador con su cantidad de caracteres y las opciones \"Confirmar\" y \"Eliminar comentario\".",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-007",
   "name": "Verificar que Editar instrucciones abre el modal con el comentario precargado [Desktop] [Logueado]",
   "observed": "'Editar instrucciones' abre el modal con {TEXTO_INSTRUCCION_001} precargado, el contador '36 / 150 caracteres', 'Confirmar' y 'Eliminar comentario'.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada",
   "screenshots": [
    {
     "caption": "Paso 4 — modal de edicion",
     "file": "TC-B2C45-D-007-p04-modal-de-edicion.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra, el shelf muestra \"Nota: {TEXTO_INSTRUCCION_002}\" (el anterior se reemplaza) y aparece el toast \"Tu instrucción fue agregada con éxito\" (4 s + X).",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-008",
   "name": "Verificar que confirmar la edición reemplaza el comentario y muestra el toast [Desktop] [Logueado]",
   "observed": "Al reemplazar por {TEXTO_INSTRUCCION_002} y 'Confirmar' aparece el toast 'Tu instrucción fue agregada con éxito' y el shelf muestra la nueva nota (truncada a 30 caracteres + '…', porque {TEXTO_INSTRUCCION_002} tiene 62).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada",
   "screenshots": [
    {
     "caption": "Paso 7 — shelf con la nota reemplazada",
     "file": "TC-B2C45-D-008-p07-shelf-con-la-nota-reemplazada.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario reemplaza el texto por {TEXTO_INSTRUCCION_002}.\n6. El usuario hace clic en \"Confirmar\".\n7. El sistema muestra loading en el CTA mientras actualiza.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{TEXTO_INSTRUCCION_002} = Segunda instrucción: Entreguenlo con cuidado (es una sorpresa)\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal muestra imagen, título \"Eliminar comentario\", subtítulo \"¿Desea eliminar tu instrucción\" y las opciones \"Sí, eliminar\" y \"No, gracias\".",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-009",
   "name": "Verificar que Eliminar comentario muestra el modal de confirmación [Desktop] [Logueado]",
   "observation": "'Eliminar comentario' abre la confirmación con imagen, título 'Eliminar comentario', subtítulo '¿Deseas eliminar tu instrucción?' (la planilla dice '¿Desea…'), 'Sí, eliminar' y 'No, gracias'.",
   "observed": "'Eliminar comentario' abre la confirmación con imagen, título 'Eliminar comentario', subtítulo '¿Deseas eliminar tu instrucción?' (la planilla dice '¿Desea…'), 'Sí, eliminar' y 'No, gracias'.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada",
   "screenshots": [
    {
     "caption": "Paso 6 — confirmacion eliminar comentario",
     "file": "TC-B2C45-D-009-p06-confirmacion-eliminar-comentario.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario hace clic en \"Eliminar comentario\".\n6. El sistema muestra el modal de confirmación \"Eliminar comentario\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra, la nota desaparece del shelf, se muestra \"Agregar instrucciones\" y aparece el toast \"Tu comentario se ha eliminado\" (4 s + X).",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-010",
   "name": "Verificar que Sí, eliminar quita la instrucción y el shelf vuelve a Agregar instrucciones [Desktop] [Logueado]",
   "observed": "'Sí, eliminar' quita la nota del shelf, vuelve 'Agregar instrucciones' y aparece el toast 'Tu comentario se ha eliminado'.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada",
   "screenshots": [
    {
     "caption": "Paso 8 — shelf sin nota",
     "file": "TC-B2C45-D-010-p08-shelf-sin-nota.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario hace clic en \"Eliminar comentario\".\n6. El sistema muestra el modal de confirmación \"Eliminar comentario\".\n7. El usuario hace clic en \"Sí, eliminar\".\n8. El sistema muestra loading en el CTA mientras elimina.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se cierra el modal de confirmación y se vuelve al modal de edición con {TEXTO_INSTRUCCION_001} sin cambios.",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-011",
   "name": "Verificar que No, gracias vuelve al modal de edición sin eliminar el comentario [Desktop] [Logueado]",
   "observed": "'No, gracias' cierra la confirmación y vuelve al modal de edición con {TEXTO_INSTRUCCION_001} sin cambios.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada",
   "screenshots": [
    {
     "caption": "Paso 7 — modal de edicion tras no gracias",
     "file": "TC-B2C45-D-011-p07-modal-de-edicion-tras-no-gracias.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario hace clic en \"Eliminar comentario\".\n6. El sistema muestra el modal de confirmación \"Eliminar comentario\".\n7. El usuario hace clic en \"No, gracias\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal se cierra, aparece el toast \"No pudimos agregar tu comentario. Vuelve a intentarlo.\" (CRT-026) hasta cerrarlo con la X y el shelf mantiene \"Agregar instrucciones\".",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-012",
   "name": "Verificar que un error al guardar una instrucción nueva muestra CRT-026 [Desktop] [Logueado]",
   "observation": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones\n- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".\n6. El usuario hace clic en \"Agregar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMENTARIO_API_ENDPOINT} = None\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal se cierra, aparece el toast \"No pudimos eliminar tu comentario. Inténtalo nuevamente.\" (CRT-027) hasta cerrarlo con la X y la nota permanece en el shelf.",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-013",
   "name": "Verificar que un error al eliminar desde el modal de edición muestra CRT-027 [Desktop] [Logueado]",
   "observation": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada\n- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario hace clic en \"Eliminar comentario\".\n6. El sistema muestra el modal de confirmación \"Eliminar comentario\".\n7. El usuario hace clic en \"Sí, eliminar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMENTARIO_API_ENDPOINT} = None\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal se cierra, aparece el toast \"No pudimos editar tu comentario. Inténtalo nuevamente.\" (CRT-075) hasta cerrarlo con la X y el shelf mantiene {TEXTO_INSTRUCCION_001}.",
   "form_factor": "desktop",
   "id": "TC-B2C45-D-014",
   "name": "Verificar que un error al editar muestra CRT-075 y el comentario original se mantiene [Desktop] [Logueado]",
   "observation": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada\n- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario reemplaza el texto por {TEXTO_INSTRUCCION_002}.\n6. El usuario hace clic en \"Confirmar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMENTARIO_API_ENDPOINT} = None\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{TEXTO_INSTRUCCION_002} = Segunda instrucción: Entreguenlo con cuidado (es una sorpresa)\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal \"¿Te gustaría algo en especial?\" muestra X de cierre, miniatura + tienda + nombre + unidad de medida, campo \"Instrucciones\" con contador 0/150 y el CTA \"Agregar\" deshabilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-001",
   "name": "Verificar que Agregar instrucciones abre el modal de nuevo comentario con sus elementos [Mobile] [Logueado]",
   "observation": "El modal '¿Te gustaría algo en especial?' muestra la X, miniatura, tienda (Unimarc Mirador), nombre, '1 un.', el campo 'Instrucciones' con '0 / 150 caracteres' y el CTA deshabilitado. El CTA se llama 'Agregar comentario' (la planilla dice 'Agregar').",
   "observed": "El modal '¿Te gustaría algo en especial?' muestra la X, miniatura, tienda (Unimarc Mirador), nombre, '1 un.', el campo 'Instrucciones' con '0 / 150 caracteres' y el CTA deshabilitado. El CTA se llama 'Agregar comentario' (la planilla dice 'Agregar').",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "screenshots": [
    {
     "caption": "Paso 4 — modal te gustaria algo en especial",
     "file": "TC-B2C45-M-001-p04-modal-te-gustaria-algo-en-especial.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El contador muestra la cantidad de caracteres de {TEXTO_INSTRUCCION_001} sobre 150 y el CTA \"Agregar\" queda habilitado.",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-002",
   "name": "Verificar que al escribir el contador se actualiza y se habilita Agregar [Mobile] [Logueado]",
   "observed": "Al escribir {TEXTO_INSTRUCCION_001} (36 caracteres) el contador muestra '36 / 150 caracteres' y 'Agregar comentario' queda habilitado.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "screenshots": [
    {
     "caption": "Paso 5 — instruccion escrita",
     "file": "TC-B2C45-M-002-p05-instruccion-escrita.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El campo conserva solo 150 caracteres y el contador muestra 150/150.",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-003",
   "name": "Verificar que el campo de instrucciones no admite más de 150 caracteres [Mobile] [Logueado]",
   "observed": "Al pegar {TEXTO_151_CARACTERES} (161 caracteres) el campo conserva 150 y el contador muestra '150 / 150 caracteres'.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "screenshots": [
    {
     "caption": "Paso 5 — texto de 161 caracteres pegado",
     "file": "TC-B2C45-M-003-p05-texto-de-161-caracteres-pegado.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario pega {TEXTO_151_CARACTERES} en el campo \"Instrucciones\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_151_CARACTERES} = Éste texto debe ser suficientemente larguisimo como para que se trunque y no aparezca completo en la interfaz, además debe superar los 150 caracteres de longitud\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal se cierra, el shelf muestra \"Nota: {TEXTO_INSTRUCCION_001}\" + \"Editar instrucciones\" y aparece el toast \"Tu instrucción fue agregada con éxito\" (4 s + X).",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-004",
   "name": "Verificar que confirmar la instrucción la guarda y el shelf muestra la nota [Mobile] [Logueado]",
   "observation": "Causa: {TEXTO_INSTRUCCION_001} ('Primera intrucción de entrega válida') tiene 36 caracteres y la precondición pide 30 o menos. Se ejecutaron los pasos: la instrucción se guarda, aparece el toast «Tu instrucción fue agregada con éxito» y el shelf muestra «Editar instrucciones», pero la nota se ve truncada («Nota: Primera intrucción de entrega …», regla comprobada en D/M-005) y nunca como «Nota: {TEXTO_INSTRUCCION_001}» completo. La fila se contradice con su data. Acción: cargar un {TEXTO_INSTRUCCION_001} de 30 caracteres o menos. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: {TEXTO_INSTRUCCION_001} ('Primera intrucción de entrega válida') tiene 36 caracteres y la precondición pide 30 o menos. Se ejecutaron los pasos: la instrucción se guarda, aparece el toast «Tu instrucción fue agregada con éxito» y el shelf muestra «Editar instrucciones», pero la nota se ve truncada («Nota: Primera intrucción de entrega …», regla comprobada en D/M-005) y nunca como «Nota: {TEXTO_INSTRUCCION_001}» completo. La fila se contradice con su data. Acción: cargar un {TEXTO_INSTRUCCION_001} de 30 caracteres o menos. Re-verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones\n- {TEXTO_INSTRUCCION_001} tiene 30 caracteres o menos",
   "screenshots": [
    {
     "caption": "Paso 5 — modal con la instruccion escrita",
     "file": "TC-B2C45-M-004-p05-modal-con-la-instruccion-escrita.png"
    },
    {
     "caption": "Paso 7 — shelf con la nota",
     "file": "TC-B2C45-M-004-p07-shelf-con-la-nota.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".\n6. El usuario toca \"Agregar\".\n7. El sistema muestra loading en el CTA mientras guarda.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El shelf muestra \"Nota:\" + los primeros 30 caracteres de {TEXTO_INSTRUCCION_LARGO} seguidos de \"…\".",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-005",
   "name": "Verificar que una nota de más de 30 caracteres se trunca con puntos suspensivos en el shelf [Mobile] [Logueado]",
   "observed": "Con {TEXTO_INSTRUCCION_LARGO} el shelf muestra 'Nota:' + los primeros 30 caracteres + '…'.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones\n- {TEXTO_INSTRUCCION_LARGO} tiene entre 31 y 150 caracteres",
   "screenshots": [
    {
     "caption": "Paso 6 — nota truncada en el shelf",
     "file": "TC-B2C45-M-005-p06-nota-truncada-en-el-shelf.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_LARGO} en el campo \"Instrucciones\".\n6. El usuario toca \"Agregar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_LARGO} = Éste texto debe ser suficientemente largo como para que se trunque\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El comentario se guarda: el shelf muestra \"Nota: {TEXTO_INSTRUCCION_001}\" + \"Editar instrucciones\" y aparece el toast de confirmación.",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-006",
   "name": "Verificar que un invitado puede agregar una instrucción al picker [Mobile] [Guest]",
   "observed": "El invitado con la dirección de {DIRECCION_DESPACHO_003} y {SKU_VALID_001} en el carro abre «¿Te gustaría algo en especial?», escribe la instrucción y confirma: se guarda, aparece el toast «Tu instrucción fue agregada con éxito» y el shelf muestra «Editar instrucciones» y la nota truncada a 30 caracteres con «…» (regla de D/M-005, porque {TEXTO_INSTRUCCION_001} tiene 36).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_VALID_001} sin instrucciones",
   "screenshots": [
    {
     "caption": "Paso 4 — modal te gustaria algo en especial",
     "file": "TC-B2C45-M-006-p04-modal-te-gustaria-algo-en-especial.png"
    },
    {
     "caption": "Paso 7 — shelf con la nota del invitado",
     "file": "TC-B2C45-M-006-p07-shelf-con-la-nota-del-invitado.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".\n6. El usuario toca \"Agregar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{DIRECCION_DESPACHO_003} = Av. San Josemaría Escrivá de Balaguer 14833, Lo Barnechea\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal muestra {TEXTO_INSTRUCCION_001} precargado, el contador con su cantidad de caracteres y las opciones \"Confirmar\" y \"Eliminar comentario\".",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-007",
   "name": "Verificar que Editar instrucciones abre el modal con el comentario precargado [Mobile] [Logueado]",
   "observed": "'Editar instrucciones' abre el modal con {TEXTO_INSTRUCCION_001} precargado, el contador '36 / 150 caracteres', 'Confirmar' y 'Eliminar comentario'.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada",
   "screenshots": [
    {
     "caption": "Paso 4 — modal de edicion",
     "file": "TC-B2C45-M-007-p04-modal-de-edicion.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra, el shelf muestra \"Nota: {TEXTO_INSTRUCCION_002}\" (el anterior se reemplaza) y aparece el toast \"Tu instrucción fue agregada con éxito\" (4 s + X).",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-008",
   "name": "Verificar que confirmar la edición reemplaza el comentario y muestra el toast [Mobile] [Logueado]",
   "observed": "Al reemplazar por {TEXTO_INSTRUCCION_002} y 'Confirmar' aparece el toast 'Tu instrucción fue agregada con éxito' y el shelf muestra la nueva nota (truncada a 30 caracteres + '…', porque {TEXTO_INSTRUCCION_002} tiene 62).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada",
   "screenshots": [
    {
     "caption": "Paso 7 — shelf con la nota reemplazada",
     "file": "TC-B2C45-M-008-p07-shelf-con-la-nota-reemplazada.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario reemplaza el texto por {TEXTO_INSTRUCCION_002}.\n6. El usuario toca \"Confirmar\".\n7. El sistema muestra loading en el CTA mientras actualiza.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{TEXTO_INSTRUCCION_002} = Segunda instrucción: Entreguenlo con cuidado (es una sorpresa)\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal muestra imagen, título \"Eliminar comentario\", subtítulo \"¿Desea eliminar tu instrucción\" y las opciones \"Sí, eliminar\" y \"No, gracias\".",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-009",
   "name": "Verificar que Eliminar comentario muestra el modal de confirmación [Mobile] [Logueado]",
   "observation": "'Eliminar comentario' abre la confirmación con imagen, título 'Eliminar comentario', subtítulo '¿Deseas eliminar tu instrucción?' (la planilla dice '¿Desea…'), 'Sí, eliminar' y 'No, gracias'.",
   "observed": "'Eliminar comentario' abre la confirmación con imagen, título 'Eliminar comentario', subtítulo '¿Deseas eliminar tu instrucción?' (la planilla dice '¿Desea…'), 'Sí, eliminar' y 'No, gracias'.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada",
   "screenshots": [
    {
     "caption": "Paso 6 — confirmacion eliminar comentario",
     "file": "TC-B2C45-M-009-p06-confirmacion-eliminar-comentario.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario toca \"Eliminar comentario\".\n6. El sistema muestra el modal de confirmación \"Eliminar comentario\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "El modal se cierra, la nota desaparece del shelf, se muestra \"Agregar instrucciones\" y aparece el toast \"Tu comentario se ha eliminado\" (4 s + X).",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-010",
   "name": "Verificar que Sí, eliminar quita la instrucción y el shelf vuelve a Agregar instrucciones [Mobile] [Logueado]",
   "observed": "'Sí, eliminar' quita la nota del shelf, vuelve 'Agregar instrucciones' y aparece el toast 'Tu comentario se ha eliminado'.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada",
   "screenshots": [
    {
     "caption": "Paso 8 — shelf sin nota",
     "file": "TC-B2C45-M-010-p08-shelf-sin-nota.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario toca \"Eliminar comentario\".\n6. El sistema muestra el modal de confirmación \"Eliminar comentario\".\n7. El usuario toca \"Sí, eliminar\".\n8. El sistema muestra loading en el CTA mientras elimina.",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-20",
   "expected": "Se cierra el modal de confirmación y se vuelve al modal de edición con {TEXTO_INSTRUCCION_001} sin cambios.",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-011",
   "name": "Verificar que No, gracias vuelve al modal de edición sin eliminar el comentario [Mobile] [Logueado]",
   "observed": "'No, gracias' cierra la confirmación y vuelve al modal de edición con {TEXTO_INSTRUCCION_001} sin cambios.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada",
   "screenshots": [
    {
     "caption": "Paso 7 — modal de edicion tras no gracias",
     "file": "TC-B2C45-M-011-p07-modal-de-edicion-tras-no-gracias.png"
    }
   ],
   "spec": "tests/B2C-45.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario toca \"Eliminar comentario\".\n6. El sistema muestra el modal de confirmación \"Eliminar comentario\".\n7. El usuario toca \"No, gracias\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (cuenta de comprador)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal se cierra, aparece el toast \"No pudimos agregar tu comentario. Vuelve a intentarlo.\" (CRT-026) hasta cerrarlo con la X y el shelf mantiene \"Agregar instrucciones\".",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-012",
   "name": "Verificar que un error al guardar una instrucción nueva muestra CRT-026 [Mobile] [Logueado]",
   "observation": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} sin instrucciones\n- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Agregar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal \"¿Te gustaría algo en especial?\".\n5. El usuario escribe {TEXTO_INSTRUCCION_001} en el campo \"Instrucciones\".\n6. El usuario toca \"Agregar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMENTARIO_API_ENDPOINT} = None\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal se cierra, aparece el toast \"No pudimos eliminar tu comentario. Inténtalo nuevamente.\" (CRT-027) hasta cerrarlo con la X y la nota permanece en el shelf.",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-013",
   "name": "Verificar que un error al eliminar desde el modal de edición muestra CRT-027 [Mobile] [Logueado]",
   "observation": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada\n- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario toca \"Eliminar comentario\".\n6. El sistema muestra el modal de confirmación \"Eliminar comentario\".\n7. El usuario toca \"Sí, eliminar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMENTARIO_API_ENDPOINT} = None\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-21",
   "expected": "El modal se cierra, aparece el toast \"No pudimos editar tu comentario. Inténtalo nuevamente.\" (CRT-075) hasta cerrarlo con la X y el shelf mantiene {TEXTO_INSTRUCCION_001}.",
   "form_factor": "mobile",
   "id": "TC-B2C45-M-014",
   "name": "Verificar que un error al editar muestra CRT-075 y el comentario original se mantiene [Mobile] [Logueado]",
   "observation": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.",
   "observed": "Causa: {COMENTARIO_API_ENDPOINT} está en TBD en el Excel de data: sin ese endpoint no se puede bloquear la request del comentario para forzar el error del servicio. Acción: cargar el endpoint. Re-verificado en vivo el 2026-10-21.",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta {USER_AUTH_001}\n- El carro contiene {SKU_VALID_001} con la instrucción {TEXTO_INSTRUCCION_001} guardada\n- DevTools abierto con bloqueo de la request {COMENTARIO_API_ENDPOINT} (Network request blocking)",
   "spec": "tests/B2C-45.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca \"Editar instrucciones\" en el shelf de {SKU_VALID_001}.\n4. El sistema abre el modal de edición con el comentario precargado.\n5. El usuario reemplaza el texto por {TEXTO_INSTRUCCION_002}.\n6. El usuario toca \"Confirmar\".",
   "test_data": "{BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n{CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n{COMENTARIO_API_ENDPOINT} = None\n{SKU_VALID_001} = 000000000000675191-UN\n{TEXTO_INSTRUCCION_001} = Primera intrucción de entrega válida\n{TEXTO_INSTRUCCION_002} = Segunda instrucción: Entreguenlo con cuidado (es una sorpresa)\n{USER_AUTH_001} = (contraseña de la cuenta)",
   "viewport": "390x844"
  }
 ]
}
-->
