# B2C-50 APP

| Campo | Valor |
|---|---|
| Suite | B2C-50 |
| Última actualización | 2026-10-27 |
| Ejecutado por | Daniel Uñuruco |
| Ambiente | App Unimarc v1.0.1 (DEV) |
| Navegador Desktop | chromium |
| Navegador Mobile | chromium |
| Dispositivo Android | Pixel 6 · Android 14 (emulador) |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-50 APP Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 6 |
| Aprobado | 3 |
| **Total** | **9** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-27 | 1 | TC-B2C50-APP-002 |
| 2026-10-26 | 2 | TC-B2C50-APP-003, TC-B2C50-APP-011 |
| 2026-10-23 | 6 | TC-B2C50-D-008, TC-B2C50-D-009, TC-B2C50-D-013, TC-B2C50-M-006, TC-B2C50-M-007, TC-B2C50-M-011 |

## Detalle por caso de prueba

### TC-B2C50-D-008 - Verificar que al completar la promo el mensaje cambia a Llevas la promo [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-50.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_COMPLETA_PROMO_3X2} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el control + de {SKU_COMPLETA_PROMO_3X2} hasta llegar a 3 unidades.

**Resultado esperado**

El mensaje "Te faltan N" desaparece y el shelf muestra "Llevas la promo ✓".

**Resultado obtenido**

Causa: la precondición es un invitado con {SKU_COMPLETA_PROMO_3X2} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección toca «Agregar» en la PDP de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, Papas Lay's Stax) y se abre «Elige tu método de entrega»; el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).

**Observación**

Causa: la precondición es un invitado con {SKU_COMPLETA_PROMO_3X2} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección toca «Agregar» en la PDP de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, Papas Lay's Stax) y se abre «Elige tu método de entrega»; el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).

**Evidencia**

![sondeo 50 desktop](<B2C-50 Evidencias/sondeo-50-desktop.png>)

---

### TC-B2C50-D-009 - Verificar que al completar la promo el precio unitario se recalcula con el descuento [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-50.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_COMPLETA_PROMO_3X2} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el control + de {SKU_COMPLETA_PROMO_3X2} hasta llegar a 3 unidades.
4. El usuario revisa el precio del ítem.

**Resultado esperado**

El precio unitario de {SKU_COMPLETA_PROMO_3X2} se recalcula con el descuento de la promo 3x2 aplicado a las 3 unidades.

**Resultado obtenido**

Causa: la precondición es un invitado con {SKU_COMPLETA_PROMO_3X2} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección toca «Agregar» en la PDP de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, Papas Lay's Stax) y se abre «Elige tu método de entrega»; el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).

**Observación**

Causa: la precondición es un invitado con {SKU_COMPLETA_PROMO_3X2} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección toca «Agregar» en la PDP de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, Papas Lay's Stax) y se abre «Elige tu método de entrega»; el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).

**Evidencia**

![sondeo 50 desktop](<B2C-50 Evidencias/sondeo-50-desktop.png>)

---

### TC-B2C50-D-013 - Verificar que agregar desde el modal Combina la promo actualiza el mensaje del carro [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Spec | tests/B2C-50.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene {SKU_COMBINA_PROMO} x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere {CANTIDAD_PROMO_COMBINA} unidades

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_COMBINA_PROMO} = TBD
- {CANTIDAD_PROMO_COMBINA} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario hace clic en el CTA "›" del shelf de {SKU_COMBINA_PROMO}.
4. El sistema abre el modal Combina la promo.
5. El usuario hace clic en "Agregar" en otro producto combinable del modal y cierra el modal.

**Resultado esperado**

Sin recargar la página, el mensaje del shelf baja en 1 el N (o pasa a "Llevas la promo ✓" si se completó).

**Resultado obtenido**

Causa: la precondición es un invitado con {SKU_COMBINA_PROMO} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección que toca «Agregar» ve «Elige tu método de entrega» y el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).

**Observación**

Causa: la precondición es un invitado con {SKU_COMBINA_PROMO} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección que toca «Agregar» ve «Elige tu método de entrega» y el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).

**Evidencia**

![sondeo 50 desktop](<B2C-50 Evidencias/sondeo-50-desktop.png>)

---

### TC-B2C50-M-006 - Verificar que al completar la promo el mensaje cambia a Llevas la promo [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-50.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_COMPLETA_PROMO_3X2} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el control + de {SKU_COMPLETA_PROMO_3X2} hasta llegar a 3 unidades.

**Resultado esperado**

El mensaje "Te faltan N" desaparece y el shelf muestra "Llevas la promo ✓".

**Resultado obtenido**

Causa: la precondición es un invitado con {SKU_COMPLETA_PROMO_3X2} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección toca «Agregar» en la PDP de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, Papas Lay's Stax) y se abre «Elige tu método de entrega»; el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).

**Observación**

Causa: la precondición es un invitado con {SKU_COMPLETA_PROMO_3X2} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección toca «Agregar» en la PDP de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, Papas Lay's Stax) y se abre «Elige tu método de entrega»; el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).

**Evidencia**

![sondeo 50 mobile](<B2C-50 Evidencias/sondeo-50-mobile.png>)

---

### TC-B2C50-M-007 - Verificar que al completar la promo el precio unitario se recalcula con el descuento [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-50.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_COMPLETA_PROMO_3X2} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el control + de {SKU_COMPLETA_PROMO_3X2} hasta llegar a 3 unidades.
4. El usuario revisa el precio del ítem.

**Resultado esperado**

El precio unitario de {SKU_COMPLETA_PROMO_3X2} se recalcula con el descuento de la promo 3x2 aplicado a las 3 unidades.

**Resultado obtenido**

Causa: la precondición es un invitado con {SKU_COMPLETA_PROMO_3X2} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección toca «Agregar» en la PDP de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, Papas Lay's Stax) y se abre «Elige tu método de entrega»; el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).

**Observación**

Causa: la precondición es un invitado con {SKU_COMPLETA_PROMO_3X2} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección toca «Agregar» en la PDP de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, Papas Lay's Stax) y se abre «Elige tu método de entrega»; el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).

**Evidencia**

![sondeo 50 mobile](<B2C-50 Evidencias/sondeo-50-mobile.png>)

---

### TC-B2C50-M-011 - Verificar que agregar desde el modal Combina la promo actualiza el mensaje del carro [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-23 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | chromium |
| Spec | tests/B2C-50.spec.ts |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene {SKU_COMBINA_PROMO} x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere {CANTIDAD_PROMO_COMBINA} unidades

**Data utilizada**

- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/
- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart
- {SKU_COMBINA_PROMO} = TBD
- {CANTIDAD_PROMO_COMBINA} = TBD

**Pasos ejecutados**

1. El usuario ingresa a {CART_URL}.
2. El sistema carga el carrito.
3. El usuario toca el CTA "›" del shelf de {SKU_COMBINA_PROMO}.
4. El sistema abre el modal Combina la promo.
5. El usuario toca "Agregar" en otro producto combinable del modal y cierra el modal.

**Resultado esperado**

Sin recargar la página, el mensaje del shelf baja en 1 el N (o pasa a "Llevas la promo ✓" si se completó).

**Resultado obtenido**

Causa: la precondición es un invitado con {SKU_COMBINA_PROMO} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección que toca «Agregar» ve «Elige tu método de entrega» y el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).

**Observación**

Causa: la precondición es un invitado con {SKU_COMBINA_PROMO} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección que toca «Agregar» ve «Elige tu método de entrega» y el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).

**Evidencia**

![sondeo 50 mobile](<B2C-50 Evidencias/sondeo-50-mobile.png>)

---

### TC-B2C50-APP-002 - Verificar que un logueado ve el mensaje Te faltan N de la promo Combina en el carro

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-27 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | tests-app/B2C-63-50-pendientes.spec.ts |

**Precondiciones**

- User type: Logueado
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000666200-UN = TBD
- 3 = TBD
- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario revisa el shelf de 000000000000666200-UN.

**Resultado esperado**

El shelf muestra "Te faltan N para la promo >" con el CTA "›".

**Resultado obtenido**

Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): con la cuenta de prueba y 000000000000666200-UN x 1 en el carro, el shelf del producto muestra «Te faltan 1 para la promo ›» con el CTA «›». Nota: la promo del producto exige 2 unidades («Lleva 2 por…»), no las 3 de la precondición, por eso N = 1. La unidad que agregó el caso se quitó al terminar.

**Evidencia**

![Android · Paso 2 — shelf de 000000000000666200 un en los resultados](<B2C-50 Evidencias/TC-B2C50-APP-002-android-p02-shelf-de-000000000000666200-un-en-los-resultados.png>)

![Android · Paso 4 — carro con el producto de la promo combina](<B2C-50 Evidencias/TC-B2C50-APP-002-android-p04-carro-con-el-producto-de-la-promo-combina.png>)

---

### TC-B2C50-APP-003 - Verificar que el CTA de la promo Combina abre el modal Combina la promo

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000666200-UN = TBD
- 3 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el CTA "›" del mensaje en el shelf de 000000000000666200-UN.

**Resultado esperado**

Se abre el modal Combina la promo (B2C-74) con los productos combinables de la promo.

**Resultado obtenido**

Invitado con {SKU_COMBINA_PROMO} × 1 (agregado desde la búsqueda): el carro muestra 'Te faltan 1 para la promo' con el CTA 'Ver productos combinables' y al tocarlo se abre la hoja 'Combina la promo' con '1 / 2 productos', el producto del carro 'En carro 1 un.' y la otra variante combinable (Carne molida tártaro Fundo Río Alegre) con 'Agregar'. La hoja trae al pie 'Volver al inicio'. Primera pasada fallida por el script (contó las tarjetas antes de que se pintaran); re-ejecutado: pasó al primer intento. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

### TC-B2C50-APP-011 - Verificar que agregar desde el modal Combina la promo actualiza el mensaje del carro

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-26 |
| Form factor | app |
| Plataforma | Android |
| Dispositivo | Pixel 6 · Android 14 (emulador) |
| Spec | (sin spec: el caso queda bloqueado antes de ejecutarse) |

**Precondiciones**

- User type: Guest
- Viewport: App iOS/Android
- Ubicacion: Home de la App
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

- v1.0.1 = TBD
- Android = iOS
- 000000000000666200-UN = TBD
- 3 = TBD

**Pasos ejecutados**

1. El usuario abre la App v1.0.1 y toca el ícono del carro.
2. El sistema carga el carrito.
3. El usuario toca el CTA "›" del shelf de 000000000000666200-UN.
4. El sistema abre el modal Combina la promo.
5. El usuario toca "Agregar" en otro producto combinable del modal y cierra el modal.

**Resultado esperado**

Sin recargar la página, el mensaje del shelf baja en 1 el N (o pasa a "Llevas la promo ✓" si se completó).

**Resultado obtenido**

Con {SKU_COMBINA_PROMO} × 1 ('Te faltan 1 para la promo'), 'Agregar' en la otra variante del modal lo lleva a '2 / 2 productos'; al cerrar con ✕ el ítem del carro muestra 'Llevas la promo' sin recargar. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "chromium"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "devices": {
   "android": "Pixel 6 · Android 14 (emulador)"
  },
  "environment": "App Unimarc v1.0.1 (DEV)",
  "executed_by": "Daniel Uñuruco",
  "suite": "B2C-50",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-50 APP Test Cases.xlsx",
  "title": "B2C-50 APP",
  "updated_at": "2026-10-27"
 },
 "history": {
  "2026-10-23": [
   "TC-B2C50-D-008",
   "TC-B2C50-D-009",
   "TC-B2C50-D-013",
   "TC-B2C50-M-006",
   "TC-B2C50-M-007",
   "TC-B2C50-M-011"
  ],
  "2026-10-26": [
   "TC-B2C50-APP-003",
   "TC-B2C50-APP-011"
  ],
  "2026-10-27": [
   "TC-B2C50-APP-002"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El mensaje \"Te faltan N\" desaparece y el shelf muestra \"Llevas la promo ✓\".",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-008",
   "name": "Verificar que al completar la promo el mensaje cambia a Llevas la promo [Desktop] [Guest]",
   "observation": "Causa: la precondición es un invitado con {SKU_COMPLETA_PROMO_3X2} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección toca «Agregar» en la PDP de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, Papas Lay's Stax) y se abre «Elige tu método de entrega»; el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).",
   "observed": "Causa: la precondición es un invitado con {SKU_COMPLETA_PROMO_3X2} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección toca «Agregar» en la PDP de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, Papas Lay's Stax) y se abre «Elige tu método de entrega»; el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "sondeo 50 desktop",
     "file": "sondeo-50-desktop.png"
    }
   ],
   "spec": "tests/B2C-50.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control + de {SKU_COMPLETA_PROMO_3X2} hasta llegar a 3 unidades.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_COMPLETA_PROMO_3X2} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El precio unitario de {SKU_COMPLETA_PROMO_3X2} se recalcula con el descuento de la promo 3x2 aplicado a las 3 unidades.",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-009",
   "name": "Verificar que al completar la promo el precio unitario se recalcula con el descuento [Desktop] [Guest]",
   "observation": "Causa: la precondición es un invitado con {SKU_COMPLETA_PROMO_3X2} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección toca «Agregar» en la PDP de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, Papas Lay's Stax) y se abre «Elige tu método de entrega»; el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).",
   "observed": "Causa: la precondición es un invitado con {SKU_COMPLETA_PROMO_3X2} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección toca «Agregar» en la PDP de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, Papas Lay's Stax) y se abre «Elige tu método de entrega»; el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "sondeo 50 desktop",
     "file": "sondeo-50-desktop.png"
    }
   ],
   "spec": "tests/B2C-50.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control + de {SKU_COMPLETA_PROMO_3X2} hasta llegar a 3 unidades.\n4. El usuario revisa el precio del ítem.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_COMPLETA_PROMO_3X2} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "Sin recargar la página, el mensaje del shelf baja en 1 el N (o pasa a \"Llevas la promo ✓\" si se completó).",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-013",
   "name": "Verificar que agregar desde el modal Combina la promo actualiza el mensaje del carro [Desktop] [Guest]",
   "observation": "Causa: la precondición es un invitado con {SKU_COMBINA_PROMO} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección que toca «Agregar» ve «Elige tu método de entrega» y el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).",
   "observed": "Causa: la precondición es un invitado con {SKU_COMBINA_PROMO} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección que toca «Agregar» ve «Elige tu método de entrega» y el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene {SKU_COMBINA_PROMO} x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere {CANTIDAD_PROMO_COMBINA} unidades",
   "screenshots": [
    {
     "caption": "sondeo 50 desktop",
     "file": "sondeo-50-desktop.png"
    }
   ],
   "spec": "tests/B2C-50.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el CTA \"›\" del shelf de {SKU_COMBINA_PROMO}.\n4. El sistema abre el modal Combina la promo.\n5. El usuario hace clic en \"Agregar\" en otro producto combinable del modal y cierra el modal.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_COMBINA_PROMO} = TBD\n- {CANTIDAD_PROMO_COMBINA} = TBD",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El mensaje \"Te faltan N\" desaparece y el shelf muestra \"Llevas la promo ✓\".",
   "form_factor": "mobile",
   "id": "TC-B2C50-M-006",
   "name": "Verificar que al completar la promo el mensaje cambia a Llevas la promo [Mobile] [Guest]",
   "observation": "Causa: la precondición es un invitado con {SKU_COMPLETA_PROMO_3X2} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección toca «Agregar» en la PDP de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, Papas Lay's Stax) y se abre «Elige tu método de entrega»; el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).",
   "observed": "Causa: la precondición es un invitado con {SKU_COMPLETA_PROMO_3X2} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección toca «Agregar» en la PDP de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, Papas Lay's Stax) y se abre «Elige tu método de entrega»; el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "sondeo 50 mobile",
     "file": "sondeo-50-mobile.png"
    }
   ],
   "spec": "tests/B2C-50.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de {SKU_COMPLETA_PROMO_3X2} hasta llegar a 3 unidades.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_COMPLETA_PROMO_3X2} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "El precio unitario de {SKU_COMPLETA_PROMO_3X2} se recalcula con el descuento de la promo 3x2 aplicado a las 3 unidades.",
   "form_factor": "mobile",
   "id": "TC-B2C50-M-007",
   "name": "Verificar que al completar la promo el precio unitario se recalcula con el descuento [Mobile] [Guest]",
   "observation": "Causa: la precondición es un invitado con {SKU_COMPLETA_PROMO_3X2} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección toca «Agregar» en la PDP de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, Papas Lay's Stax) y se abre «Elige tu método de entrega»; el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).",
   "observed": "Causa: la precondición es un invitado con {SKU_COMPLETA_PROMO_3X2} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección toca «Agregar» en la PDP de {SKU_COMPLETA_PROMO_3X2} (000000000641229001-UN, Papas Lay's Stax) y se abre «Elige tu método de entrega»; el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_COMPLETA_PROMO_3X2} x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "sondeo 50 mobile",
     "file": "sondeo-50-mobile.png"
    }
   ],
   "spec": "tests/B2C-50.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de {SKU_COMPLETA_PROMO_3X2} hasta llegar a 3 unidades.\n4. El usuario revisa el precio del ítem.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_COMPLETA_PROMO_3X2} = TBD",
   "viewport": "390x844"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-23",
   "expected": "Sin recargar la página, el mensaje del shelf baja en 1 el N (o pasa a \"Llevas la promo ✓\" si se completó).",
   "form_factor": "mobile",
   "id": "TC-B2C50-M-011",
   "name": "Verificar que agregar desde el modal Combina la promo actualiza el mensaje del carro [Mobile] [Guest]",
   "observation": "Causa: la precondición es un invitado con {SKU_COMBINA_PROMO} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección que toca «Agregar» ve «Elige tu método de entrega» y el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).",
   "observed": "Causa: la precondición es un invitado con {SKU_COMBINA_PROMO} en el carro y la fila no declara dirección ni tienda. Recomprobado en vivo el 2026-10-23 (Desktop y Mobile): un invitado sin dirección que toca «Agregar» ve «Elige tu método de entrega» y el producto no se agrega (carro en 0). Acción: declarar en la fila la dirección o tienda del invitado. Bug asociado DESCARTADO en Jira (se descartó al revertir corridas de QA).",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene {SKU_COMBINA_PROMO} x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere {CANTIDAD_PROMO_COMBINA} unidades",
   "screenshots": [
    {
     "caption": "sondeo 50 mobile",
     "file": "sondeo-50-mobile.png"
    }
   ],
   "spec": "tests/B2C-50.spec.ts",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a {CART_URL}.\n2. El sistema carga el carrito.\n3. El usuario toca el CTA \"›\" del shelf de {SKU_COMBINA_PROMO}.\n4. El sistema abre el modal Combina la promo.\n5. El usuario toca \"Agregar\" en otro producto combinable del modal y cierra el modal.",
   "test_data": "- {BASE_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/\n- {CART_URL} = https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart\n- {SKU_COMBINA_PROMO} = TBD\n- {CANTIDAD_PROMO_COMBINA} = TBD",
   "viewport": "390x844"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-27",
   "expected": "El shelf muestra \"Te faltan N para la promo >\" con el CTA \"›\".",
   "form_factor": "app",
   "id": "TC-B2C50-APP-002",
   "name": "Verificar que un logueado ve el mensaje Te faltan N de la promo Combina en el carro",
   "observed": "Android (Pixel 6, Android 14, app v1.0.1, login por correo + OTP): con la cuenta de prueba y 000000000000666200-UN x 1 en el carro, el shelf del producto muestra «Te faltan 1 para la promo ›» con el CTA «›». Nota: la promo del producto exige 2 unidades («Lleva 2 por…»), no las 3 de la precondición, por eso N = 1. La unidad que agregó el caso se quitó al terminar.",
   "platform": "Android",
   "preconditions": "- User type: Logueado\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- Sesión iniciada con la cuenta daunuruco+comprador@avatar-global.com\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "Android · Paso 2 — shelf de 000000000000666200 un en los resultados",
     "file": "TC-B2C50-APP-002-android-p02-shelf-de-000000000000666200-un-en-los-resultados.png"
    },
    {
     "caption": "Android · Paso 4 — carro con el producto de la promo combina",
     "file": "TC-B2C50-APP-002-android-p04-carro-con-el-producto-de-la-promo-combina.png"
    }
   ],
   "spec": "tests-app/B2C-63-50-pendientes.spec.ts",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario revisa el shelf de 000000000000666200-UN.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000666200-UN = TBD\n- 3 = TBD\n- daunuruco+comprador@avatar-global.com = girolamo_coppo@hotmail.com"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Se abre el modal Combina la promo (B2C-74) con los productos combinables de la promo.",
   "form_factor": "app",
   "id": "TC-B2C50-APP-003",
   "name": "Verificar que el CTA de la promo Combina abre el modal Combina la promo",
   "observed": "Invitado con {SKU_COMBINA_PROMO} × 1 (agregado desde la búsqueda): el carro muestra 'Te faltan 1 para la promo' con el CTA 'Ver productos combinables' y al tocarlo se abre la hoja 'Combina la promo' con '1 / 2 productos', el producto del carro 'En carro 1 un.' y la otra variante combinable (Carne molida tártaro Fundo Río Alegre) con 'Agregar'. La hoja trae al pie 'Volver al inicio'. Primera pasada fallida por el script (contó las tarjetas antes de que se pintaran); re-ejecutado: pasó al primer intento. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el CTA \"›\" del mensaje en el shelf de 000000000000666200-UN.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000666200-UN = TBD\n- 3 = TBD"
  },
  {
   "device": "Pixel 6 · Android 14 (emulador)",
   "executed_at": "2026-10-26",
   "expected": "Sin recargar la página, el mensaje del shelf baja en 1 el N (o pasa a \"Llevas la promo ✓\" si se completó).",
   "form_factor": "app",
   "id": "TC-B2C50-APP-011",
   "name": "Verificar que agregar desde el modal Combina la promo actualiza el mensaje del carro",
   "observed": "Con {SKU_COMBINA_PROMO} × 1 ('Te faltan 1 para la promo'), 'Agregar' en la otra variante del modal lo lleva a '2 / 2 productos'; al cerrar con ✕ el ítem del carro muestra 'Llevas la promo' sin recargar. La fila no declara 'Plataforma:'; se certificó Android con el build v1.0.7. iOS queda Pendiente.",
   "platform": "Android",
   "preconditions": "- User type: Guest\n- Viewport: App iOS/Android\n- Ubicacion: Home de la App\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "spec": "(sin spec: el caso queda bloqueado antes de ejecutarse)",
   "status": "Aprobado",
   "steps": "1. El usuario abre la App v1.0.1 y toca el ícono del carro.\n2. El sistema carga el carrito.\n3. El usuario toca el CTA \"›\" del shelf de 000000000000666200-UN.\n4. El sistema abre el modal Combina la promo.\n5. El usuario toca \"Agregar\" en otro producto combinable del modal y cierra el modal.",
   "test_data": "- v1.0.1 = TBD\n- Android = iOS\n- 000000000000666200-UN = TBD\n- 3 = TBD"
  }
 ]
}
-->
