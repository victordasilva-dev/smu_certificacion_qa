# B2C-50 - Te faltan N para la promo en carro y minicarro - Evidencias QA

| Campo | Valor |
|---|---|
| Suite | B2C-50 |
| Última actualización | 2026-10-16 |
| Ejecutado por | Victor Chirinos |
| Ambiente | https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/ |
| Navegador Desktop | chromium |
| Navegador Mobile | webkit |
| Origen de los TC | Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-50 Test Cases.xlsx |
| Origen de la data | Datos Pruebas/Datos pruebas Ecommerce.xlsx |

## Resumen de resultados

| Estado | Casos |
|---|---|
| Bloqueado Data | 24 |
| Aprobado | 2 |
| **Total** | **26** |

## Historial de corridas

| Fecha | Casos | TC ejecutados |
|---|---|---|
| 2026-10-16 | 26 | TC-B2C50-D-001, TC-B2C50-D-002, TC-B2C50-D-003, TC-B2C50-D-004, TC-B2C50-D-005, TC-B2C50-D-006, TC-B2C50-D-007, TC-B2C50-D-008, TC-B2C50-D-009, TC-B2C50-D-010, TC-B2C50-D-011, TC-B2C50-D-012, TC-B2C50-D-013, TC-B2C50-D-014, TC-B2C50-M-001, TC-B2C50-M-002, TC-B2C50-M-003, TC-B2C50-M-004, TC-B2C50-M-005, TC-B2C50-M-006, TC-B2C50-M-007, TC-B2C50-M-008, TC-B2C50-M-009, TC-B2C50-M-010, TC-B2C50-M-011, TC-B2C50-M-012 |

## Detalle por caso de prueba

### TC-B2C50-D-001 - Verificar que un producto con promo Combina incompleta muestra Te faltan N con CTA en el carro [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario revisa el shelf de 000000000000666200-UN.

**Resultado esperado**

El shelf muestra "Te faltan N para la promo >" con N = 3 − 1 y el CTA "›".

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).

---

### TC-B2C50-D-002 - Verificar que un producto con promo Combina incompleta muestra Te faltan N con CTA en el minicarro [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el minicarro.
4. El usuario revisa el shelf de 000000000000666200-UN en el minicarro.

**Resultado esperado**

El shelf del minicarro muestra "Te faltan N para la promo >" con N = 3 − 1 y el CTA "›".

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).

---

### TC-B2C50-D-003 - Verificar que un logueado ve el mensaje Te faltan N de la promo Combina en el carro [Desktop] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |
| Duración | 60.4 s |
| Spec | tests/B2C-50.spec.ts:89 |

**Precondiciones**

- User type: Logueado
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador con dirección de despacho (correo + OTP)
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN, cuenta de comprador con dirección de despacho (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario revisa el shelf de 000000000000666200-UN.

**Resultado esperado**

El shelf muestra "Te faltan N para la promo >" con el CTA "›".

**Resultado obtenido**

El shelf de la carne molida Fundo Río Alegre muestra 'Te faltan 1 para la promo ›' (CTA con chevron, habilitado).

**Observación**

Con {USER_AUTH_001} (dirección activa Calle Uno 23, La Florida) y 000000000000666200-UN x 1, el shelf del carro muestra 'Te faltan 1 para la promo' con el chevron '›' (promo 'Lleva 2 por $12.490'). El carro se vació al terminar.

**Evidencia**

![Paso 2 — carro con el producto de la promo combina](<B2C-50 Evidencias/TC-B2C50-D-003-p02-carro-con-el-producto-de-la-promo-combina.png>)

![Paso 3 — mensaje te faltan n con cta](<B2C-50 Evidencias/TC-B2C50-D-003-p03-mensaje-te-faltan-n-con-cta.png>)

![Estado final del caso](<B2C-50 Evidencias/TC-B2C50-D-003.png>)

---

### TC-B2C50-D-004 - Verificar que el CTA de la promo Combina abre el modal Combina la promo [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en el CTA "›" del mensaje en el shelf de 000000000000666200-UN.

**Resultado esperado**

Se abre el modal Combina la promo (B2C-74) con los productos combinables de la promo.

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).

---

### TC-B2C50-D-005 - Verificar que un producto con promo de tipo "Completa la promo", incompleta; muestra Te faltan N sin CTA en el carro [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario revisa el shelf de 000000000641229001-UN.

**Resultado esperado**

El shelf muestra "Te faltan 2 para la promo" sin CTA "›".

Es solo un mensaje y no abre un modal

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.

---

### TC-B2C50-D-006 - Verificar que un producto con promo Completa incompleta muestra Te faltan N en el minicarro [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Cualquier página del sitio
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.
2. El usuario hace clic en el ícono del carrito en el header.
3. El sistema despliega el minicarro.
4. El usuario revisa el shelf de 000000000641229001-UN en el minicarro.

**Resultado esperado**

El shelf del minicarro muestra "Te faltan 2 para la promo" sin CTA "›".

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.

---

### TC-B2C50-D-007 - Verificar que al sumar una unidad el contador Te faltan N baja en 1 sin recargar [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en el control + de 000000000641229001-UN.

**Resultado esperado**

La cantidad pasa a 2 y el mensaje cambia de inmediato a "Te faltan 1 para la promo" sin recargar la página.

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.

---

### TC-B2C50-D-008 - Verificar que al completar la promo el mensaje cambia a Llevas la promo [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en el control + de 000000000641229001-UN hasta llegar a 3 unidades.

**Resultado esperado**

El mensaje "Te faltan N" desaparece y el shelf muestra "Llevas la promo ✓".

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.

---

### TC-B2C50-D-009 - Verificar que al completar la promo el precio unitario se recalcula con el descuento [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en el control + de 000000000641229001-UN hasta llegar a 3 unidades.
4. El usuario revisa el precio del ítem.

**Resultado esperado**

El precio unitario de 000000000641229001-UN se recalcula con el descuento de la promo 3x2 aplicado a las 3 unidades.

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.

---

### TC-B2C50-D-010 - Verificar que al completar la promo Combina desaparece el CTA de Combina [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en el control + de 000000000000666200-UN hasta llegar a 3 unidades.

**Resultado esperado**

El shelf muestra "Llevas la promo ✓" y ya no muestra el mensaje "Te faltan N" ni el CTA "›".

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).

---

### TC-B2C50-D-011 - Verificar que al superar el umbral de la promo de tipo "Completa la promo" el contador inicia un nuevo ciclo [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en el control + de 000000000641229001-UN hasta llegar a 4 unidades.

**Resultado esperado**

Con 4 unidades el shelf muestra "Te faltan 2 para la promo" (siguiente umbral = 6).

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.

---

### TC-B2C50-D-012 - Verificar que al superar el umbral de la promo de tipo "Combina la promo" el contador inicia un nuevo ciclo [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en el control + de 000000000000666200-UN hasta llegar a 3 + 1 unidades.

**Resultado esperado**

El shelf vuelve a mostrar "Te faltan N para la promo >" con N = (2 × 3) − cantidad actual.

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).

---

### TC-B2C50-D-013 - Verificar que agregar desde el modal Combina la promo actualiza el mensaje del carro [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario hace clic en el CTA "›" del shelf de 000000000000666200-UN.
4. El sistema abre el modal Combina la promo.
5. El usuario hace clic en "Agregar" en otro producto combinable del modal y cierra el modal.

**Resultado esperado**

Sin recargar la página, el mensaje del shelf baja en 1 el N (o pasa a "Llevas la promo ✓" si se completó).

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).

---

### TC-B2C50-D-014 - Verificar que al eliminar los productos de la promo el mensaje desaparece [Desktop] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | desktop |
| Viewport | 1440x900 |
| Navegador | chromium |

**Precondiciones**

- User type: Guest
- Viewport: Desktop 1440x900
- Ubicacion: Carrito
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades
- El carro también contiene 000000000000675191-UN (sin promo)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario elimina 000000000641229001-UN del carro con el ícono de eliminar.

**Resultado esperado**

El mensaje "Te faltan N para la promo" desaparece junto con el producto y 000000000000675191-UN no muestra mensaje de promo.

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.

---

### TC-B2C50-M-001 - Verificar que un producto con promo Combina incompleta muestra Te faltan N con CTA en el carro [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario revisa el shelf de 000000000000666200-UN.

**Resultado esperado**

El shelf muestra "Te faltan N para la promo >" con N = 3 − 1 y el CTA "›".

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).

---

### TC-B2C50-M-002 - Verificar que un logueado ve el mensaje Te faltan N de la promo Combina en el carro [Mobile] [Logueado]

| Campo | Valor |
|---|---|
| Estado | Aprobado |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |
| Duración | 74.0 s |
| Spec | tests/B2C-50.spec.ts:89 |

**Precondiciones**

- User type: Logueado
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- Sesión iniciada con la cuenta cuenta de comprador con dirección de despacho (correo + OTP)
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN, cuenta de comprador con dirección de despacho (correo + OTP)

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario revisa el shelf de 000000000000666200-UN.

**Resultado esperado**

El shelf muestra "Te faltan N para la promo >" con el CTA "›".

**Resultado obtenido**

El shelf de la carne molida Fundo Río Alegre muestra 'Te faltan 1 para la promo ›' (CTA con chevron, habilitado).

**Observación**

Con {USER_AUTH_001} (dirección activa Calle Uno 23, La Florida) y 000000000000666200-UN x 1, el shelf del carro muestra 'Te faltan 1 para la promo' con el chevron '›' (promo 'Lleva 2 por $12.490'). El carro se vació al terminar.

**Evidencia**

![Paso 2 — carro con el producto de la promo combina](<B2C-50 Evidencias/TC-B2C50-M-002-p02-carro-con-el-producto-de-la-promo-combina.png>)

![Paso 3 — mensaje te faltan n con cta](<B2C-50 Evidencias/TC-B2C50-M-002-p03-mensaje-te-faltan-n-con-cta.png>)

![Estado final del caso](<B2C-50 Evidencias/TC-B2C50-M-002.png>)

---

### TC-B2C50-M-003 - Verificar que el CTA de la promo Combina abre el modal Combina la promo [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca el CTA "›" del mensaje en el shelf de 000000000000666200-UN.

**Resultado esperado**

Se abre el modal Combina la promo (B2C-74) con los productos combinables de la promo.

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).

---

### TC-B2C50-M-004 - Verificar que un producto con promo Completa incompleta muestra Te faltan N sin CTA en el carro [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario revisa el shelf de 000000000641229001-UN.

**Resultado esperado**

El shelf muestra "Te faltan 2 para la promo" sin CTA "›".

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.

---

### TC-B2C50-M-005 - Verificar que al sumar una unidad el contador Te faltan N baja en 1 sin recargar [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca el control + de 000000000641229001-UN.

**Resultado esperado**

La cantidad pasa a 2 y el mensaje cambia de inmediato a "Te faltan 1 para la promo" sin recargar la página.

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.

---

### TC-B2C50-M-006 - Verificar que al completar la promo el mensaje cambia a Llevas la promo [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca el control + de 000000000641229001-UN hasta llegar a 3 unidades.

**Resultado esperado**

El mensaje "Te faltan N" desaparece y el shelf muestra "Llevas la promo ✓".

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.

---

### TC-B2C50-M-007 - Verificar que al completar la promo el precio unitario se recalcula con el descuento [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca el control + de 000000000641229001-UN hasta llegar a 3 unidades.
4. El usuario revisa el precio del ítem.

**Resultado esperado**

El precio unitario de 000000000641229001-UN se recalcula con el descuento de la promo 3x2 aplicado a las 3 unidades.

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.

---

### TC-B2C50-M-008 - Verificar que al completar la promo Combina desaparece el CTA de Combina [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca el control + de 000000000000666200-UN hasta llegar a 3 unidades.

**Resultado esperado**

El shelf muestra "Llevas la promo ✓" y ya no muestra el mensaje "Te faltan N" ni el CTA "›".

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).

---

### TC-B2C50-M-009 - Verificar que al superar el umbral de la promo de tipo "Completa la promo" el contador inicia un nuevo ciclo [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca el control + de 000000000641229001-UN hasta llegar a 4 unidades.

**Resultado esperado**

Con 4 unidades el shelf muestra "Te faltan 2 para la promo" (siguiente umbral = 6).

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.

---

### TC-B2C50-M-010 - Verificar que al superar el umbral de la promo de tipo "Combina la promo" el contador inicia un nuevo ciclo [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca el control + de 000000000000666200-UN hasta llegar a 3 + 1 unidades.

**Resultado esperado**

El shelf vuelve a mostrar "Te faltan N para la promo >" con N = (2 × 3) − cantidad actual.

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).

---

### TC-B2C50-M-011 - Verificar que agregar desde el modal Combina la promo actualiza el mensaje del carro [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario toca el CTA "›" del shelf de 000000000000666200-UN.
4. El sistema abre el modal Combina la promo.
5. El usuario toca "Agregar" en otro producto combinable del modal y cierra el modal.

**Resultado esperado**

Sin recargar la página, el mensaje del shelf baja en 1 el N (o pasa a "Llevas la promo ✓" si se completó).

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).

---

### TC-B2C50-M-012 - Verificar que al eliminar los productos de la promo el mensaje desaparece [Mobile] [Guest]

| Campo | Valor |
|---|---|
| Estado | Bloqueado Data |
| Ejecutado | 2026-10-16 |
| Form factor | mobile |
| Viewport | 390x844 |
| Navegador | webkit |

**Precondiciones**

- User type: Guest
- Viewport: Mobile 390x844
- Ubicacion: Carrito
- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades
- El carro también contiene 000000000000675191-UN (sin promo)

**Data utilizada**

https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN, 000000000000675191-UN

**Pasos ejecutados**

1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.
2. El sistema carga el carrito.
3. El usuario elimina 000000000641229001-UN del carro con el ícono de eliminar.

**Resultado esperado**

El mensaje "Te faltan N para la promo" desaparece junto con el producto y 000000000000675191-UN no muestra mensaje de promo.

**Resultado obtenido**

No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.

**Observación**

Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.

---

<!-- qa-evidence-state
{
 "header": {
  "browsers": {
   "desktop": "chromium",
   "mobile": "webkit"
  },
  "data_file": "Datos Pruebas/Datos pruebas Ecommerce.xlsx",
  "environment": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/",
  "executed_by": "Victor Chirinos",
  "suite": "B2C-50",
  "tc_file": "Casos de Prueba/Para Ejecutar/SP2/Unimarc/B2C-50 Test Cases.xlsx",
  "title": "B2C-50 - Te faltan N para la promo en carro y minicarro - Evidencias QA",
  "updated_at": "2026-10-16"
 },
 "history": {
  "2026-10-16": [
   "TC-B2C50-D-001",
   "TC-B2C50-D-002",
   "TC-B2C50-D-003",
   "TC-B2C50-D-004",
   "TC-B2C50-D-005",
   "TC-B2C50-D-006",
   "TC-B2C50-D-007",
   "TC-B2C50-D-008",
   "TC-B2C50-D-009",
   "TC-B2C50-D-010",
   "TC-B2C50-D-011",
   "TC-B2C50-D-012",
   "TC-B2C50-D-013",
   "TC-B2C50-D-014",
   "TC-B2C50-M-001",
   "TC-B2C50-M-002",
   "TC-B2C50-M-003",
   "TC-B2C50-M-004",
   "TC-B2C50-M-005",
   "TC-B2C50-M-006",
   "TC-B2C50-M-007",
   "TC-B2C50-M-008",
   "TC-B2C50-M-009",
   "TC-B2C50-M-010",
   "TC-B2C50-M-011",
   "TC-B2C50-M-012"
  ]
 },
 "results": [
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "El shelf muestra \"Te faltan N para la promo >\" con N = 3 − 1 y el CTA \"›\".",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-001",
   "name": "Verificar que un producto con promo Combina incompleta muestra Te faltan N con CTA en el carro [Desktop] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario revisa el shelf de 000000000000666200-UN.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "El shelf del minicarro muestra \"Te faltan N para la promo >\" con N = 3 − 1 y el CTA \"›\".",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-002",
   "name": "Verificar que un producto con promo Combina incompleta muestra Te faltan N con CTA en el minicarro [Desktop] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el minicarro.\n4. El usuario revisa el shelf de 000000000000666200-UN en el minicarro.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "duration_s": 60.4,
   "executed_at": "2026-10-16",
   "expected": "El shelf muestra \"Te faltan N para la promo >\" con el CTA \"›\".",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-003",
   "name": "Verificar que un logueado ve el mensaje Te faltan N de la promo Combina en el carro [Desktop] [Logueado]",
   "observation": "Con {USER_AUTH_001} (dirección activa Calle Uno 23, La Florida) y 000000000000666200-UN x 1, el shelf del carro muestra 'Te faltan 1 para la promo' con el chevron '›' (promo 'Lleva 2 por $12.490'). El carro se vació al terminar.",
   "observed": "El shelf de la carne molida Fundo Río Alegre muestra 'Te faltan 1 para la promo ›' (CTA con chevron, habilitado).",
   "preconditions": "- User type: Logueado\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador con dirección de despacho (correo + OTP)\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "Paso 2 — carro con el producto de la promo combina",
     "file": "TC-B2C50-D-003-p02-carro-con-el-producto-de-la-promo-combina.png"
    },
    {
     "caption": "Paso 3 — mensaje te faltan n con cta",
     "file": "TC-B2C50-D-003-p03-mensaje-te-faltan-n-con-cta.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C50-D-003.png"
    }
   ],
   "spec": "tests/B2C-50.spec.ts:89",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario revisa el shelf de 000000000000666200-UN.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN, cuenta de comprador con dirección de despacho (correo + OTP)",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "Se abre el modal Combina la promo (B2C-74) con los productos combinables de la promo.",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-004",
   "name": "Verificar que el CTA de la promo Combina abre el modal Combina la promo [Desktop] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el CTA \"›\" del mensaje en el shelf de 000000000000666200-UN.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "El shelf muestra \"Te faltan 2 para la promo\" sin CTA \"›\".\nEs solo un mensaje y no abre un modal",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-005",
   "name": "Verificar que un producto con promo de tipo \"Completa la promo\", incompleta; muestra Te faltan N sin CTA en el carro [Desktop] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario revisa el shelf de 000000000641229001-UN.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "El shelf del minicarro muestra \"Te faltan 2 para la promo\" sin CTA \"›\".",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-006",
   "name": "Verificar que un producto con promo Completa incompleta muestra Te faltan N en el minicarro [Desktop] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Cualquier página del sitio\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/.\n2. El usuario hace clic en el ícono del carrito en el header.\n3. El sistema despliega el minicarro.\n4. El usuario revisa el shelf de 000000000641229001-UN en el minicarro.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "La cantidad pasa a 2 y el mensaje cambia de inmediato a \"Te faltan 1 para la promo\" sin recargar la página.",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-007",
   "name": "Verificar que al sumar una unidad el contador Te faltan N baja en 1 sin recargar [Desktop] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control + de 000000000641229001-UN.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "El mensaje \"Te faltan N\" desaparece y el shelf muestra \"Llevas la promo ✓\".",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-008",
   "name": "Verificar que al completar la promo el mensaje cambia a Llevas la promo [Desktop] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control + de 000000000641229001-UN hasta llegar a 3 unidades.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "El precio unitario de 000000000641229001-UN se recalcula con el descuento de la promo 3x2 aplicado a las 3 unidades.",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-009",
   "name": "Verificar que al completar la promo el precio unitario se recalcula con el descuento [Desktop] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control + de 000000000641229001-UN hasta llegar a 3 unidades.\n4. El usuario revisa el precio del ítem.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "El shelf muestra \"Llevas la promo ✓\" y ya no muestra el mensaje \"Te faltan N\" ni el CTA \"›\".",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-010",
   "name": "Verificar que al completar la promo Combina desaparece el CTA de Combina [Desktop] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control + de 000000000000666200-UN hasta llegar a 3 unidades.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "Con 4 unidades el shelf muestra \"Te faltan 2 para la promo\" (siguiente umbral = 6).",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-011",
   "name": "Verificar que al superar el umbral de la promo de tipo \"Completa la promo\" el contador inicia un nuevo ciclo [Desktop] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control + de 000000000641229001-UN hasta llegar a 4 unidades.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "El shelf vuelve a mostrar \"Te faltan N para la promo >\" con N = (2 × 3) − cantidad actual.",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-012",
   "name": "Verificar que al superar el umbral de la promo de tipo \"Combina la promo\" el contador inicia un nuevo ciclo [Desktop] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el control + de 000000000000666200-UN hasta llegar a 3 + 1 unidades.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "Sin recargar la página, el mensaje del shelf baja en 1 el N (o pasa a \"Llevas la promo ✓\" si se completó).",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-013",
   "name": "Verificar que agregar desde el modal Combina la promo actualiza el mensaje del carro [Desktop] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario hace clic en el CTA \"›\" del shelf de 000000000000666200-UN.\n4. El sistema abre el modal Combina la promo.\n5. El usuario hace clic en \"Agregar\" en otro producto combinable del modal y cierra el modal.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "chromium",
   "executed_at": "2026-10-16",
   "expected": "El mensaje \"Te faltan N para la promo\" desaparece junto con el producto y 000000000000675191-UN no muestra mensaje de promo.",
   "form_factor": "desktop",
   "id": "TC-B2C50-D-014",
   "name": "Verificar que al eliminar los productos de la promo el mensaje desaparece [Desktop] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Desktop 1440x900\n- Ubicacion: Carrito\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades\n- El carro también contiene 000000000000675191-UN (sin promo)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario elimina 000000000641229001-UN del carro con el ícono de eliminar.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN, 000000000000675191-UN",
   "viewport": "1440x900"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "El shelf muestra \"Te faltan N para la promo >\" con N = 3 − 1 y el CTA \"›\".",
   "form_factor": "mobile",
   "id": "TC-B2C50-M-001",
   "name": "Verificar que un producto con promo Combina incompleta muestra Te faltan N con CTA en el carro [Mobile] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario revisa el shelf de 000000000000666200-UN.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "duration_s": 74.0,
   "executed_at": "2026-10-16",
   "expected": "El shelf muestra \"Te faltan N para la promo >\" con el CTA \"›\".",
   "form_factor": "mobile",
   "id": "TC-B2C50-M-002",
   "name": "Verificar que un logueado ve el mensaje Te faltan N de la promo Combina en el carro [Mobile] [Logueado]",
   "observation": "Con {USER_AUTH_001} (dirección activa Calle Uno 23, La Florida) y 000000000000666200-UN x 1, el shelf del carro muestra 'Te faltan 1 para la promo' con el chevron '›' (promo 'Lleva 2 por $12.490'). El carro se vació al terminar.",
   "observed": "El shelf de la carne molida Fundo Río Alegre muestra 'Te faltan 1 para la promo ›' (CTA con chevron, habilitado).",
   "preconditions": "- User type: Logueado\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- Sesión iniciada con la cuenta cuenta de comprador con dirección de despacho (correo + OTP)\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "screenshots": [
    {
     "caption": "Paso 2 — carro con el producto de la promo combina",
     "file": "TC-B2C50-M-002-p02-carro-con-el-producto-de-la-promo-combina.png"
    },
    {
     "caption": "Paso 3 — mensaje te faltan n con cta",
     "file": "TC-B2C50-M-002-p03-mensaje-te-faltan-n-con-cta.png"
    },
    {
     "caption": "Estado final del caso",
     "file": "TC-B2C50-M-002.png"
    }
   ],
   "spec": "tests/B2C-50.spec.ts:89",
   "status": "Aprobado",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario revisa el shelf de 000000000000666200-UN.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN, cuenta de comprador con dirección de despacho (correo + OTP)",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "Se abre el modal Combina la promo (B2C-74) con los productos combinables de la promo.",
   "form_factor": "mobile",
   "id": "TC-B2C50-M-003",
   "name": "Verificar que el CTA de la promo Combina abre el modal Combina la promo [Mobile] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca el CTA \"›\" del mensaje en el shelf de 000000000000666200-UN.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "El shelf muestra \"Te faltan 2 para la promo\" sin CTA \"›\".",
   "form_factor": "mobile",
   "id": "TC-B2C50-M-004",
   "name": "Verificar que un producto con promo Completa incompleta muestra Te faltan N sin CTA en el carro [Mobile] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario revisa el shelf de 000000000641229001-UN.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "La cantidad pasa a 2 y el mensaje cambia de inmediato a \"Te faltan 1 para la promo\" sin recargar la página.",
   "form_factor": "mobile",
   "id": "TC-B2C50-M-005",
   "name": "Verificar que al sumar una unidad el contador Te faltan N baja en 1 sin recargar [Mobile] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de 000000000641229001-UN.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "El mensaje \"Te faltan N\" desaparece y el shelf muestra \"Llevas la promo ✓\".",
   "form_factor": "mobile",
   "id": "TC-B2C50-M-006",
   "name": "Verificar que al completar la promo el mensaje cambia a Llevas la promo [Mobile] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de 000000000641229001-UN hasta llegar a 3 unidades.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "El precio unitario de 000000000641229001-UN se recalcula con el descuento de la promo 3x2 aplicado a las 3 unidades.",
   "form_factor": "mobile",
   "id": "TC-B2C50-M-007",
   "name": "Verificar que al completar la promo el precio unitario se recalcula con el descuento [Mobile] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de 000000000641229001-UN hasta llegar a 3 unidades.\n4. El usuario revisa el precio del ítem.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "El shelf muestra \"Llevas la promo ✓\" y ya no muestra el mensaje \"Te faltan N\" ni el CTA \"›\".",
   "form_factor": "mobile",
   "id": "TC-B2C50-M-008",
   "name": "Verificar que al completar la promo Combina desaparece el CTA de Combina [Mobile] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de 000000000000666200-UN hasta llegar a 3 unidades.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "Con 4 unidades el shelf muestra \"Te faltan 2 para la promo\" (siguiente umbral = 6).",
   "form_factor": "mobile",
   "id": "TC-B2C50-M-009",
   "name": "Verificar que al superar el umbral de la promo de tipo \"Completa la promo\" el contador inicia un nuevo ciclo [Mobile] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de 000000000641229001-UN hasta llegar a 4 unidades.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "El shelf vuelve a mostrar \"Te faltan N para la promo >\" con N = (2 × 3) − cantidad actual.",
   "form_factor": "mobile",
   "id": "TC-B2C50-M-010",
   "name": "Verificar que al superar el umbral de la promo de tipo \"Combina la promo\" el contador inicia un nuevo ciclo [Mobile] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca el control + de 000000000000666200-UN hasta llegar a 3 + 1 unidades.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "Sin recargar la página, el mensaje del shelf baja en 1 el N (o pasa a \"Llevas la promo ✓\" si se completó).",
   "form_factor": "mobile",
   "id": "TC-B2C50-M-011",
   "name": "Verificar que agregar desde el modal Combina la promo actualiza el mensaje del carro [Mobile] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Además {SKU_COMBINA_PROMO} (000000000000666200-UN, carne molida Fundo Río Alegre) tiene la promo 'Lleva 2 por $12.490' (2 unidades; el modal muestra '1 / 2 productos') y {CANTIDAD_PROMO_COMBINA} vale 3. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado y corregir {CANTIDAD_PROMO_COMBINA} a 2 (o declarar un SKU con promo Combina de 3 unidades).",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene 000000000000666200-UN x 1; su promo Combina vigente (NxM o NxPrecio con productos combinables distintos) requiere 3 unidades",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario toca el CTA \"›\" del shelf de 000000000000666200-UN.\n4. El sistema abre el modal Combina la promo.\n5. El usuario toca \"Agregar\" en otro producto combinable del modal y cierra el modal.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, 3, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000000666200-UN",
   "viewport": "390x844"
  },
  {
   "browser": "webkit",
   "executed_at": "2026-10-16",
   "expected": "El mensaje \"Te faltan N para la promo\" desaparece junto con el producto y 000000000000675191-UN no muestra mensaje de promo.",
   "form_factor": "mobile",
   "id": "TC-B2C50-M-012",
   "name": "Verificar que al eliminar los productos de la promo el mensaje desaparece [Mobile] [Guest]",
   "observation": "Causa: precondición de invitado con el carro con productos, y la fila no declara dirección ni tienda. En DEV (2026-10-16) un invitado sin dirección pulsa 'Agregar' y se abre 'Elige tu método de entrega' sin sumar al carro. Acción: declarar en Test data una dirección o tienda con cobertura para el invitado.",
   "observed": "No se ejecutó: el carro de invitado no se puede armar sin dirección declarada.",
   "preconditions": "- User type: Guest\n- Viewport: Mobile 390x844\n- Ubicacion: Carrito\n- El carro contiene 000000000641229001-UN x 1; su promo Completa vigente (3x2, mismo SKU) requiere 3 unidades\n- El carro también contiene 000000000000675191-UN (sin promo)",
   "status": "Bloqueado Data",
   "steps": "1. El usuario ingresa a https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart.\n2. El sistema carga el carrito.\n3. El usuario elimina 000000000641229001-UN del carro con el ícono de eliminar.",
   "test_data": "https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/, https://smu-dev-development.sfdc-8tgtt5-ecom1.exp-delivery.com/cart, 000000000641229001-UN, 000000000000675191-UN",
   "viewport": "390x844"
  }
 ]
}
-->
